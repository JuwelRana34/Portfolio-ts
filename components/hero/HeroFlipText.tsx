import {motion} from "motion/react"
import { LayoutTextFlip } from "../ui/layout-text-flip";
export default function HeroFlipText() {
  return (
    <>
    <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="I'm Rasid"
          words={["Aceternity UI", "Fight Club", "The Matrix", "The Jungle"]}
        />
      </motion.div>
      <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
        Experience the power of modern UI components that bring your ideas to
        life.
      </p>
    </>
  );
}