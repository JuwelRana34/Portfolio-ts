"use client";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { supabase } from "@/lib/supabaseClient";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

interface UploadedImage {
  url: string;
  public_id: string;
}

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(""); // single string
  const [technology, setTechnology] = useState(""); // comma-separated string
  const [link, setLink] = useState("");
  const [image, setImage] = useState<UploadedImage | null>(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "portfolio"); // your preset
      const cloudName = "dbwbwwteo";
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      setImage({ url: data.secure_url, public_id: data.public_id });
      toast.success("Image uploaded!");
    } catch (err) {
      console.error(err);
      toast.error("Image upload failed!");
    } finally {
      setLoading(false);
    }
  };

  const deleteImageFromCloudinary = async (public_id: string) => {
    try {
      const cloudName = "dbwbwwteo";
      await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ public_id }),
      });
    } catch (err) {
      console.error("Failed to delete image from Cloudinary:", err);
    }
  };

  const handleSubmit = async () => {
    if (!title || !category || !technology || !link || !description || !image) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("portfolios").insert([
        {
          title,
          category, // single string
          technology, // comma-separated string
          link,
          description,
          image_url: image.url,
          public_id: image.public_id,
        },
      ]);

      if (error) {
        toast.error(error.message);
        if (image.public_id) await deleteImageFromCloudinary(image.public_id);
      } else {
        toast.success("Project added successfully!");
        setTitle("");
        setCategory("");
        setTechnology("");
        setLink("");
        setDescription("");
        setImage(null);
      }
    } catch (err) {
      console.error(err);
      toast.error("Project submission failed!");
      if (image?.public_id) await deleteImageFromCloudinary(image.public_id);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-5 shadow-md rounded-xl border border-sky-100">
      <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 mb-6">
        Add New Project
      </h1>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded-md mb-3 focus:ring-2 focus:ring-sky-300 outline-none"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border p-2 rounded-md mb-3 focus:ring-2 focus:ring-sky-300 outline-none"
      />
      <input
        type="text"
        placeholder="Technology (e.g. React, JS, Next)"
        value={technology}
        onChange={(e) => setTechnology(e.target.value)}
        className="w-full border p-2 rounded-md mb-3 focus:ring-2 focus:ring-sky-300 outline-none"
      />
      <input
        type="text"
        placeholder="Project Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="w-full border p-2 rounded-md mb-3 focus:ring-2 focus:ring-sky-300 outline-none"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-3 border p-2 rounded-md w-full focus:ring-2 focus:ring-sky-200 outline-none"
      />

      {image && (
        <div className="mb-4">
          <img src={image.url} alt="Preview" className="w-full rounded-lg shadow-sm border border-sky-100" />
        </div>
      )}

      <div className="border overflow-hidden min-h-96 rounded-md p-3 mb-4">
        <h1 className="underline">Description:</h1>
        <SimpleEditor setDescription={setDescription} />
      </div>

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
