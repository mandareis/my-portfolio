"use client";
import { Moon } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect } from "react";
import Cookie from "js-cookie";

const doesOSWantDarkMode = (): boolean =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const getCurrentTheme = (): string => {
  let theCurrentSetting = Cookie.get("theme");

  if (!theCurrentSetting) {
    theCurrentSetting = doesOSWantDarkMode() ? "dark" : "light";
  }
  return theCurrentSetting;
};

export default function DarkMode() {
  useEffect(() => {
    let theCurrentSetting = getCurrentTheme();
    if (theCurrentSetting === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div onClick={() => {}}>
      <Moon
        onClick={() => {
          let theCurrentSetting = getCurrentTheme();
          if (theCurrentSetting === "light") {
            document.documentElement.classList.add("dark");
            Cookie.set("theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            Cookie.set("theme", "light");
          }
        }}
      />
    </div>
  );
}
