import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { redirect } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Breadcrumb />
        {children}

        <a className="text-bold m-10 p-10 text-2xl" href="/">
          <button>return to home</button>
        </a>
      </body>
    </html>
  );
}
