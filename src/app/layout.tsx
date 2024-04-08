import type { Metadata } from "next";
import { Fragment_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Amanda Reis",
  description: "Personal Portfolio Website for Amanda Reis",
};

const Name = () => {
  return <div className="font-semibold text-3xl text-right">Amanda Reis</div>;
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
          <>
            <Link key={link.href} href={link.href}>
              {link.title}
            </Link>
            {index === navLinks.length - 1 ? null : (
              <span style={{ cursor: "default" }}>{"//"}</span>
            )}
          </>
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
  return (
    <html lang="en">
      <body className={`${fragmentMono.className} bg-green-300 space-y-4`}>
        <Name />
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
