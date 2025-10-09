"use client";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { supabase } from "@/lib/supabaseClient";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

export default function AddProject() {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  console.log(description); // ✅ will print <p>...</p> text

  // 📸 Image upload to Supabase
  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    try {
      const fileName = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage
        .from("projectImage")
        .upload(`public/${fileName}`, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        console.error(error);
        alert("Image upload failed!");
        return;
      }

      const publicUrl = supabase.storage
        .from("projectImage")
        .getPublicUrl(data.path).data.publicUrl;
      console.log(publicUrl);
      setImage(publicUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  // 🚀 Submit project to Supabase
  const handleSubmit = async () => {
    console.log("Editor HTML:", description); // ✅ will print <p>...</p> text

    if (!title || !description || !image) {
      alert("Please fill all fields!");
      return;
    }

    const { error } = await supabase.from("portfolios").insert([
      {
        title,
        category: "Web Development", // You can modify this as needed
        technology: "React, Node.js", // You can modify this as needed
        link:"https://example.com", // You can modify this as needed
        description,
        image_url: image,
      },
    ]);

    if (error) alert(error.message);
    else alert("✅ Project added successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-5 shadow-md rounded-xl border border-sky-100 ">
      <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 mb-6">
        Add New Project
      </h1>

      {/* Title */}
      <input
        type="text"
        placeholder="Enter project title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded-md mb-4 focus:ring-2 focus:ring-sky-300 outline-none"
      />

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-3 border p-2 rounded-md w-full focus:ring-2 focus:ring-sky-200 outline-none"
      />

      {/* Preview */}
      {image && (
        <div className="mb-4">
          <img
            src={image}
            alt="Preview"
            className="w-full rounded-lg shadow-sm border border-sky-100"
          />
        </div>
      )}

      {/* Rich Text Editor */}
      <div className="border overflow-hidden min-h-96  rounded-md p-3 mb-4">
        <h1 className=" underline">Discripton:</h1>
        <SimpleEditor setDescription={setDescription} />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-2 rounded-md bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold hover:opacity-90"
      >
        {loading ? "Saving..." : "Add Project"}
      </button>
    </div>
  );
}
