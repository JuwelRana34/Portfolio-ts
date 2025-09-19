'use client'

import { supabase } from "@/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check current session
    const session = supabase.auth.getSession().then(({ data }) => {
      if (data.session) setUser(data.session.user);
      else setUser(null);
    });

    // Listen to auth changes (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (!user) return <p>You are not logged in</p>;


  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
