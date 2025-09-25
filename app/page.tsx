// "use client";

import Aboutme from "@/components/about/About";
import ContactForm from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import HeroComponent from "@/components/hero/Hero-component";
import HomePageProjects from "@/components/Projects/HomePageProject";


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
      <section
        id="home"
        className=" relative bg-white dark:bg-black"
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

        <div className="z-50 relative">
          <HeroComponent />
        </div>
      </section>

      {/* about section   */}
      <section id="about">
        <Aboutme/>
      </section>

      {/* skills section  */}
      <section id="skills">skills</section>

      {/* educaton section */}
      <section id="education">education</section>

      {/* portfolio section  */}
      <section id="portfolio">
        <HomePageProjects/>
      </section>

      {/* contact section  */}
      <section id="contact">
       <ContactForm/>
      </section>

      <Footer/>
    </>
  );
}
