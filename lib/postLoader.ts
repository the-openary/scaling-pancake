"use server"; // client server action compatible

import { Post, PostComponent } from "@/models";
import path from "path";
import fs from "fs";

export async function PostLoader(postDirectory: string): Promise<Post[]> {
    const directory = path.join(process.cwd(), `content/${postDirectory}`);
    const filenames = fs
        .readdirSync(directory) // read file system in content directory
        .filter((filename) => filename.endsWith("tsx")); // find all files ending in tsx
    return filenames.map((filename) => {
        const postModule = require(
            `../content/${postDirectory}/${filename.replace(".tsx", "")}`, // import the file
        );
        return {
            metadata: postModule.metadata,
            modName: filename.replace(".tsx", ""),
        };
    });
}

export async function SinglePostLoader(
    postDirectory: string,
    modName: string,
): Promise<PostComponent | null> {
    const posts = (await PostLoader(postDirectory)).filter(
        (post) => post.modName === modName,
    ); // get target post
    if (posts.length !== 0) { // if post found
        return {
            ...posts[0],
            component: require(`../content/${postDirectory}/${modName}`)
                .default, // component is default export of module.
        };
    }
    return null; // not found
}
