import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../themeTogol";

export default function HeroNav() {
  const [active, setActive] = useState("#home");
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
   <div className="fixed top-0 left-0 w-full bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-gray-200 z-[9999] dark:border-gray-800">
    <nav className="max-w-7xl mx-auto  flex justify-end items-center p-4  text-sm md:text-base ">
      
 <div className="hidden md:block">
        {navItems.map((item) => (
          <Link
            onClick={() => setActive(item.href)}
            className={cn(
              "px-3 py-2 transition-colors duration-300 scroll-smooth",

              active == item.href
                ? "text-violet-700 font-semibold border-b-2 border-violet-700 dark:text-sky-400 dark:border-sky-400"
                : "text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400"
            )}
            key={item.href}
            href={item.href == "#project" ? "/projects" : item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <ThemeToggle />
    
     

      {/* mobie nav  */}
      <div className="md:hidden ml-5">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <div className="mt-10 flex flex-col  justify-center">
                {navItems.map((item) => (
                  <Link
                    onClick={() => setActive(item.href)}
                    className={cn(
                      "px-3 py-2 transition-colors duration-300 scroll-smooth rounded-md",

                      active == item.href
                        ? "text-violet-700 font-semibold  border-violet-700 dark:text-sky-400 dark:border-sky-400 dark:bg-neutral-900 bg-neutral-100 shadow"
                        : "text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400"
                    )}
                    key={item.href}
                    href={item.href == "#project" ? "/projects" : item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
   </div> 
    
  );
}
