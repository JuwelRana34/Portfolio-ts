"use client";
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";

export default function ProjectHeader() {
  return (
    <div className=" relative">
      {" "}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" -mt-13 lg:-mt-28 
        bg-gradient-to-br from-slate-100 to-slate-200
        dark:bg-gradient-to-br dark:from-slate-100 dark:to-slate-400 py-1 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
        >
          Projects
        </motion.h1>
      </LampContainer>
      <div className="absolute top-4/6 left-1/2 z-10 grid w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 grid-cols-2 gap-5 px-5 md:grid-cols-4  justify-items-center">
        <div className="h-40 w-full bg-amber-400"></div>
        <div className="h-40 w-full bg-pink-400"></div>
        <div className="h-40 w-full bg-green-400"></div>
        <div className="h-40 w-full bg-sky-400"></div>
      </div>
    </div>
  );
}
