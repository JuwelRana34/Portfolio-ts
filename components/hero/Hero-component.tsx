"use client";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import HeroNav from "./Hero-Nav";
import HeroSportLight from "./Hero-SportLight";
import HeroFlipText from "./HeroFlipText";
import SocialIcon from "./Social-icon";
export default function HeroComponent() {
  return (
    <div className="relative w-full md:py-5 lg:py-16 xl:h-fit  overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] opacity-40"
        )}
      />
      <HeroSportLight />
      <div className=" hero-container max-w-7xl mx-auto">
        <div className=" relative z-50 flex flex-col md:flex-row  justify-between px-6 py-12 md:py-24 gap-12 md:gap-24 p-2">
          {/* left-side div */}
          <div className="left-side md:w-[60%] lg:w-full">
            <HeroNav />
            {/* for gap this blank div  */}
            <div className="my-16 md:my-24" />
            <HeroFlipText />

            {/* action btns  */}
            <div className="space-x-5 space-y-4 md:space-y-0 md:flex justify-center items-center mt-8">
              <div className=" w-full md:w-auto">
                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block w-full md:w-auto">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center justify-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10  ">
                    <span>DownLoad Resume</span>

                    <Download className="h-5 w-5" />
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </div>

              <div className=" w-full md:w-auto">
                <button className="relative w-full inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50  md:w-auto">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1  text-sm font-medium text-white backdrop-blur-3xl">
                    View resume
                  </span>
                </button>
              </div>
            </div>

            {/* social icons  */}
            <div className="flex justify-center my-4">
              <SocialIcon />
            </div>
          </div>

          {/* right-side div */}
          <div className=" right-side flex justify-center md:w-[40%] lg:w-full  ">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <Image
                src="/Me.jpg"
                alt="Hero Image"
                width={1000}
                height={1000}
                className="lg:w-[450px]  lg:h-[450px] justify-center rounded-md ring-3 ring-purple-500/70 dark:ring-sky-500/70"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
