import React from "react";
import type { Metadata } from "next";
import { Fragment_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import DarkMode from "./darkMode/darkMode";
import { cookies } from "next/headers";

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Amanda Reis",
  description: "Personal Portfolio Website for Amanda Reis",
};

const Name = () => {
  return (
    <div className="font-semibold text-3xl text-right">Amanda De Paula</div>
  );
};

type Link = {
  title: string;
  href: string;
};

const navLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

const NavigationBar = () => {
  return (
    <div className="space-x-3 text-center sm:px-4 sm:text-right">
      {navLinks.map((link: Link, index: number) => {
        return (
          <React.Fragment key={link.href}>
            <Link
              className="hover:text-viridianGreen dark:outline-cherryBlossomPink  outline-brunswickGreen"
              href={link.href}
            >
              {link.title}
            </Link>
            {index === navLinks.length - 1 ? null : (
              <span style={{ cursor: "default" }}>{"//"}</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
//TODO: Figure out if possible to fix for Galaxy Fold and Samsung Galaxy S8+
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return (
    <html lang="en" className={theme?.value}>
      <body
        className={`${fragmentMono.className} bg-pistachio dark:bg-brunswickGreen`}
      >
        <div className="container mt-16 drop-shadow-lg border border-puce dark:border-eggplant100 rounded-md  md:w-3/4 mx-auto py-4 xs:px-4 bg-cherryBlossomPink dark:bg-eggplant text-brunswickGreen dark:text-cherryBlossomPink">
          <div className="flex justify-between py-2 px-4 ">
            <DarkMode />
            <Name />
          </div>
          <NavigationBar />
          {children}
        </div>
      </body>
    </html>
  );
}
