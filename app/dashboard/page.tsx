"use client";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setLoadingUser(false);
      }
    );

    // Get current user immediately
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
      setLoadingUser(false);
    });

    return () => listener.subscription.unsubscribe();
  }, []);
  console.log("users", user);

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

  // ✅ Logout function

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout failed:", error.message);
    } else {
      setUser(null);
      router.push("/");
      console.log("Logged out successfully");
    }
  };

  return (
    <div>
      page dashboard {user?.email}
      {user && (
        <Button variant={"destructive"} onClick={handleLogout}>
          Logout
        </Button>
      )}
    </div>
  );
}
