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
    <div className=" space-x-3 text-right">
      {navLinks.map((link: Link, index: number) => {
        return (
          <React.Fragment key={link.href}>
            <Link href={link.href}>{link.title}</Link>
            {index === navLinks.length - 1 ? null : (
              <span style={{ cursor: "default" }}>{"//"}</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

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
        className={`${fragmentMono.className} space-y-2 bg-green-300 dark:bg-green-950 text-green-950 dark:text-green-300`}
      >
        <Name />
        <DarkMode />
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
