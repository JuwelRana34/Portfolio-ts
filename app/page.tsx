// "use client";

import HeroComponent from "@/components/hero/Hero-component";

import { cn } from "@/lib/utils";

// import { supabase } from "@/lib/supabaseClient";
// import { useEffect, useState } from "react";

export default function Home() {
  // const [users, setUsers] = useState<any[]>([]);
  // const [admin, setAdmin] = useState<any | null>(null);

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const { data, error } = await supabase.from("portfolio").select("*");
  //       console.log("portfolio",data);
  //       if (!error) setUsers(data || []);
  //     };
  // addUser()
  //     fetchUsers();
  //   }, []);

  // // Insert data
  // const addUser = async () => {

  //   const { data, error } = await supabase
  //     .from("portfolio")
  //     .insert([{ name:"juserl", email:"email",role: "user"}])
  //     .select();

  //   if (error) {
  //     console.error("Error inserting user:", error);
  //   } else {
  //     console.log("Inserted user:", data);

  //   }
  // };

  return (
    <>
      <section id="home" className=" relative bg-white dark:bg-black h-screen overflow-hidden">

        <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] opacity-50",
        )}
      />
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"/>
  
<div className="z-50 relative">
   <HeroComponent/>
</div>
       
     
      </section>

      {/* about section   */}
      <section id="about">about</section>

      {/* skills section  */}
      <section id="skills">skills</section>

      {/* educaton section */}
      <section id="education">education</section>

      {/* portfolio section  */}
      <section id="portfolio">portfolio</section>

      {/* contact section  */}
      <section id="contact">
        contact
        {/* FIXME:here add footer  */}
      </section>
    </>
  );
}
