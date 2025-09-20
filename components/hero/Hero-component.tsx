"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import HeroNav from "./Hero-Nav";
import HeroSportLight from "./Hero-SportLight";
import HeroFlipText from "./HeroFlipText";

export default function HeroComponent() {
  return (
    <>
      <HeroSportLight />
      <div className=" hero-container">
       <div className=" relative z-50 flex flex-col md:flex-row  justify-between px-6 py-12 md:py-24 gap-12 md:gap-24 p-2">
         {/* left-side div */}
        <div className="left-side">
         
          <HeroNav />
          {/* for gap this blank div  */}
          <div className="my-24" />
          <HeroFlipText />
          <div className="space-x-5">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>Tailwind Connect</span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>

            <Button variant={"outline"}>Get Started</Button>
          </div>
        </div>

        {/* right-side div */}
        <div className="right-side flex justify-center  ">
          <Image
            src="/Me.jpg"
            alt="Hero Image"
            width={400}
            height={500}
            className="w-[80%] h-[90%] justify-center"
          />
        </div>
       </div>
      </div>
    </>
  );
}
