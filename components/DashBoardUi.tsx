"use client";

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./themeTogol";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
}

export default function DashboardNav({ NavItems }: { NavItems?: NavItem[] }) {
  const pathname = usePathname();

  return (
    <div className="fixed md:hidden top-0 left-0 w-full bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-gray-200 z-[99] dark:border-gray-800 ">
      <nav className="max-w-7xl mx-auto flex justify-end items-center p-4 text-sm md:text-base">
        <ThemeToggle />

        {/* Mobile nav */}
        <div className="  ml-5">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="z-[999] w-56">
              <SheetHeader>
                <div className="mt-10 flex flex-col justify-center space-y-1">
                  {NavItems?.map((item) => (
                      <SheetClose key={item.href} asChild>
                        <Link
                      
                      href={item.href}
                      className={cn(
                        "px-3 py-2 transition-colors duration-300 rounded-md",
                        pathname === item.href
                          ? "text-violet-700 font-semibold border-violet-700 dark:text-sky-400 dark:border-sky-400 dark:bg-neutral-900 bg-neutral-100 shadow"
                          : "text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400"
                      )}
                    >
                      {item.name}
                    </Link>
                      </SheetClose>
                    
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
