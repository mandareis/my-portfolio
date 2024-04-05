import type { Metadata } from "next";
import { Fragment_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Amanda Reis",
  description: "Personal Portfolio Website for Amanda Reis",
};

const NavigationBar = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fragmentMono.className + " bg-indigo-500"}>
        {children}
        <NavigationBar />
      </body>
    </html>
  );
}
