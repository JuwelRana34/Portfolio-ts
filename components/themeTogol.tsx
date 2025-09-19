"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="rounded-full p-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className=" h-5 w-5" />:<Moon className="h-5 w-5" />} 
    </button>
  )
}
