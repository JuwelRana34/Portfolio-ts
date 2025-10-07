"use client";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { Contact } from "lucide-react";
import { useEffect, useState } from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loadingUser, setLoadingUser] = useState(true);

useEffect(() => {
  const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
    setUser(session?.user ?? null);
    setLoadingUser(false);
  });

  // Get current user immediately
  supabase.auth.getUser().then(({ data }) => {
    setUser(data.user ?? null);
    setLoadingUser(false);
  });

  return () => listener.subscription.unsubscribe();
}, []);
  console.log("users", user);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("contacts").select("*");
      console.log("contacts", data);
      if (!error) setContacts(data || []);
    };
    // addUser()
    fetchUsers();
  }, []);

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
      console.log("Logged out successfully");
    }
  };
  const handleContactDelete = async (id:number) => {
    try {
     const {error} =  await supabase.from("contacts").delete().eq("id",id)
      console.log("res" , error);
      error === null && setContacts(contacts?.filter((contact) => contact.id !== id) || [])
    } catch (error) {
      console.log(error);
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
      {contacts?.length > 0 ? (
        <>
          {contacts?.map((contact: Contact) => (
            <div className="bg-black/70 m-4 p-4 rounded-md" key={contact.id}>
              <p>Name: {contact.name}</p>
              <p>Email: {contact.email}</p>
              <p>Message: {contact.message}</p>

              <div className="flex gap-2 items-center italic text-gray-700">
                <p>{new Date(contact.created_at).toLocaleDateString()}</p>
                <p>{new Date(contact.created_at).toLocaleTimeString()}</p>
              </div>
            <Button className="my-2 mx-2 capitalize">reply</Button>
            <Button variant={"destructive"} className="my-2 capitalize" onClick={()=>{
              handleContactDelete(contact.id)
            }}>delete</Button>
            </div>
           
          ))}
        </>
      ) : (
        <p> no contact available right now</p>
      )}
    </div>
  );
}
