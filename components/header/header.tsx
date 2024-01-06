"use client";

import Navbar from "@/components/header/nabvar";
import { PostLoader } from "@/lib/postLoader";
import CallToActionButton from "@/components/button/ctaButton";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Post } from "@/models";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
    useEffect(() => {
        PostLoader("projects").then((posts) => {
            setProjects(posts);
        });
    }, []); // get all posts (server action)
    const [projects, setProjects] = useState<Post[]>([]);

    return (
        <header className="sticky top-0 z-30 flex flex-nowrap items-center justify-between bg-background pb-5 pl-10 pr-10 pt-5 ">
            <Link href="/">
                <Image
                    src={"/logo.png"}
                    alt={"The Openary Logo"}
                    width={150}
                    height={50}
                    className="sm:w-auto "
                />
            </Link>

            <div className="center hidden flex-nowrap justify-between lg:flex lg:space-x-[18vw] xl:space-x-[27.5vw] 2xl:space-x-[32vw]">
                <Navbar projects={projects} />
                <CallToActionButton
                    redirectTo="https://discord.com/invite/VZFWGp7FHZ"
                    className="order-2 ml-auto"
                >
                    Join The Discord!
                </CallToActionButton>
            </div>

            <Sheet>
                <SheetTrigger asChild>
                    <ChevronLeftIcon
                        className={`select-none md:inline-block lg:hidden`}
                        width={35}
                        height={35}
                    />
                </SheetTrigger>
                <SheetContent>
                    <CallToActionButton
                        redirectTo="https://discord.com/invite/VZFWGp7FHZ"
                        className="order-2 ml-auto mt-4 w-full"
                    >
                        Join The Discord!
                    </CallToActionButton>
                    <h1>mobile navbar ---- work in process (w i p ) </h1>
                </SheetContent>
            </Sheet>
        </header>
    );
};
export default Header;
