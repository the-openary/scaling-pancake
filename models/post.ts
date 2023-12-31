import React from "react";
import { PostMetadata } from "@/models/postMetadata";

export type Post = {
    metadata: PostMetadata;
    modName: string;
};

export type PostComponent = Post & {
    component: React.FunctionComponent<any>;
};
