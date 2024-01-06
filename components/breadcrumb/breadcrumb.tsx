"use client";

import React from "react";
import { usePathname } from "next/navigation";

function Breadcrumb() {
    const segments = usePathname()
        .split("/")
        .filter((segment) => !!segment); // create path segments
    return (
        <nav>
            <ol className="flex list-none space-x-2">
                {segments.map((segment) => (
                    <BreadcrumbItem key={segment}>{segment}</BreadcrumbItem>
                ))}
            </ol>
        </nav>
    );
}

const BreadcrumbItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <li className="pr-2">{children}</li>/
        </>
    );
};

export default Breadcrumb;
