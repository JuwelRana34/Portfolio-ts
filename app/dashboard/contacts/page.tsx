"use client";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { CaptionsOff } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);

useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("contacts").select("*");
      console.log("contacts", data);
      if (!error) setContacts(data || []);
    };
    fetchUsers();
  }, []);

  const handleContactDelete = async (id: number) => {
    try {
      const { error } = await supabase.from("contacts").delete().eq("id", id);
      console.log("res", error);
      error === null &&
        setContacts(contacts?.filter((contact) => contact.id !== id) || []);
      toast.success("Contact deleted successfully");
    } catch (error) {
      toast.error(String(error));
    }
  };

  return (
    <div>
      <h1 className="capitalize text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500  to-indigo-500 animate-gradient-x">
        All Contacts Here
      </h1>

      {contacts?.length > 0 ? (
        <>
          {contacts?.map((contact: Contact) => (
            <div className="bg-black border shadow m-4 p-4 rounded-md" key={contact.id}>
              <p>Name: {contact.name}</p>
              <p>Email: {contact.email}</p>
              <p>Message: {contact.message}</p>

              <div className="flex gap-2 items-center italic text-gray-700">
                <p>{new Date(contact.created_at).toLocaleDateString()}</p>
                <p>{new Date(contact.created_at).toLocaleTimeString()}</p>
              </div>
              <Button className="my-2 mx-2 capitalize">reply</Button>
              <Button
                variant={"destructive"}
                className="my-2 capitalize"
                onClick={() => {
                  handleContactDelete(contact.id);
                }}
              >
                delete
              </Button>
            </div>
          ))}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-96 rounded my-5  bg-gradient-to-br from-sky-50 to-sky-100 shadow-md animate-fadeIn 
         dark:from-slate-800 dark:to-slate-900 dark:border-slate-700 space-y-4 text-center px-4
        ">
   <CaptionsOff size={80} className="text-sky-600" />
  <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 text-lg font-semibold
  ">
    No contact available right now
  </h2>
  
</div>

      )}
    </div>
  );
}
