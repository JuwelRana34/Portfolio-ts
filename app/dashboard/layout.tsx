"use client";

import DashboardNav from "@/components/DashBoardUi";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { cn } from "@/lib/utils";
import type { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<User | null>(null);
  const NavItem = [
    { name: "Home", href: "/" },
    { name: "Add Project", href: "/dashboard/addProject" },
    { name: "Add Blog", href: "/dashboard/add-blog" },
    { name: "Contacts", href: "/dashboard/contacts" },
  ];
  useEffect(() => {
    // Check current session
    const session = supabase.auth.getSession().then(({ data }) => {
      if (data.session) setUser(data.session.user);
      else setUser(null);
    });

    // Listen to auth changes (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout failed:", error.message);
    } else {
      setUser(null);
      console.log("Logged out successfully");
    }
  };
  if (!user) return <p>You are not logged in</p>;

  return (
    <div>
      <div className=" min-h-screen md:flex justify-between ">
        <div className={ cn("min-h-screen hidden  w-48 md:flex  md:flex-col items-center pt-5 space-y-1 border-r")}>
          {NavItem.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="p-4 text-semibold text-lg hover:bg-muted text-muted-foreground w-full hover:transition-all"
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant={"destructive"}
            onClick={handleLogout}
            className="mt-auto mb-4 w-40 hover:transition-all hover:bg-red-600"
          >
            log-Out
          </Button>
        </div>
        <DashboardNav NavItems={NavItem}/>
        <div className="min-h-screen  flex-1 overflow-y-scroll mt-16 md:mt-0  p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
