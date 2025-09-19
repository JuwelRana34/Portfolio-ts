"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../themeTogol";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import { Spotlight } from "../ui/spotlight";

export default function HeroComponent() {
  const [active, setActive] = useState("#home");
  console.log("active", active);
  const navItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skill",
    },
    {
      label: "Education",
      href: "#education",
    },
    {
      label: "Porjects",
      href: "#project",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <nav className=" fixed top-0 left-0 w-full flex justify-end p-4 z-50 text-sm md:text-base bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="hidden md:block">
          {navItems.map((item) => (
            <Link
              onClick={() => setActive(item.href)}
              className={cn(
                "px-3 py-2 transition-colors duration-300 scroll-smooth",

                active == item.href
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 dark:text-teal-400 dark:border-teal-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-teal-300"
              )}
              key={item.href}
              href={item.href == "#project" ? "/projects" : item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </nav>

      <div className="my-24" />

      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Welcome to "
          words={["Aceternity UI", "Fight Club", "The Matrix", "The Jungle"]}
        />
      </motion.div>
      <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
        Experience the power of modern UI components that bring your ideas to
        life.
      </p>

      <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
        <span className="relative z-20">Top gradient</span>
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
      </button>
    </>
  );
}
