import { useTheme } from "next-themes";
import { Spotlight } from "../ui/spotlight";


export default function HeroSportLight() {
  const {theme} = useTheme();
  return (
     <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill={ theme == "dark" ? "#0ea5e9" : "#c085fc"}
      />
  );
}