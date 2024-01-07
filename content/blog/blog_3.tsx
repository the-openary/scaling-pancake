import { PostMetadata } from "@/models";
import {twMerge} from "tailwind-merge";

export const metadata: PostMetadata = {
    title: "",
    subtitle: "",
    description: "",
    date: "Wed Dec 27 2023 23:28:35 GMT+0000 (Coordinated Universal Time)",
};

const BlogPostContent = () => {
    return <>{metadata.title}
            <div className={twMerge("bg-green-500", "md:bg-blue-500")}>

                <h1>hello world</h1>
            </div>

    </>;
};

export default BlogPostContent;
