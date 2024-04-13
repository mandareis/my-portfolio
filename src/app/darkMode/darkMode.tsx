"use client";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";

const doesOSWantDarkMode = (): boolean | undefined => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
};

const getCurrentTheme = (): string => {
  let theCurrentSetting = Cookie.get("theme");

  if (!theCurrentSetting) {
    theCurrentSetting = doesOSWantDarkMode() ? "dark" : "light";
  }
  return theCurrentSetting;
};

export default function DarkMode() {
  const [theme, setTheme] = useState(getCurrentTheme);
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      Cookie.set("theme", "light");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
      Cookie.set("theme", "dark");
    }
  }, [theme]);

  return (
    <div className="border bg-teaRose dark:bg-eggplant border-eggplant50 hover:border-eggplant dark:hover:border-eggplant100 rounded-full py-1 px-2 drop-shadow-lg">
      {theme === "dark" ? (
        <Sun
          cursor={"pointer"}
          size={32}
          onClick={() => {
            setTheme("light");
          }}
        />
      ) : (
        <Moon
          cursor={"pointer"}
          size={32}
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </div>
  );
}
