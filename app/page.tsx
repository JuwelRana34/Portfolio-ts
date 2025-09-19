"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [admin, setAdmin] = useState<any | null>(null);

 

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("portfolio").select("*");
      console.log("portfolio",data);
      if (!error) setUsers(data || []);
    };
addUser()
    fetchUsers();
  }, []);

  
  // Insert data
  const addUser = async () => {

    const { data, error } = await supabase
      .from("portfolio")
      .insert([{ name:"juserl", email:"email",role: "user"}])
      .select(); 

    if (error) {
      console.error("Error inserting user:", error);
    } else {
      console.log("Inserted user:", data);

    }
  };


  return (
    <div>
      <h1>Users List</h1>
      {admin && <p>Admin Email: {admin.email}</p>}

      {users.map((user) => (
        <div key={user.id}>{user.name} - {user.email}</div>
      ))}
    </div>
  );
}
