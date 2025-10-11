"use client";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  technology: string;
  link: string;
  description: string;
  image_url: string;
  public_id: string; // <-- make sure this column exists
  created_at: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingIds, setDeletingIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("portfolios")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Fetch error:", error.message);
      else setProjects(data || []);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  // const handleDelete = async (id: number, public_id: string) => {
  //   if (!confirm("Are you sure you want to delete this project?")) return;

  //   setDeletingIds((prev) => [...prev, id]);

  //   try {
  //     // 2️⃣ Delete project from Supabase
  //     const { error } = await supabase.from("portfolios").delete().eq("id", id);
  //     if (error) throw error;

  //     // 3️⃣ Remove from state
  //     setProjects((prev) => prev.filter((project) => project.id !== id));
  //     alert("Project deleted successfully!");
  //   } catch (err: any) {
  //     console.error("Deletion failed:", err.message || err);
  //     alert("Deletion failed: " + (err.message || err));
  //   } finally {
  //     setDeletingIds((prev) => prev.filter((delId) => delId !== id));
  //   }
  // };

  if (loading)
    return (
      <p className="text-center text-sky-600 mt-10">Loading projects...</p>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">
        All Projects
      </h1>

      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-800 rounded-md shadow-sm hover:shadow-md transition-all overflow-hidden bg-white"
            >
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold text-sky-700 mb-1">
                  {project.title}
                </h2>
                {/* <div
                  className="tiptap-content mb-3"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></div> */}

                <p className="text-xs text-gray-500 mb-2">
                  <strong>Tech:</strong> {project.technology}
                </p>

                <div className="flex">
                  <Link
                    href={`project-details/${project.id}`}
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 text-white text-sm font-medium hover:opacity-90 w-full text-center "
                  >
                   Project Details
                  </Link>

                  {/* <Button
                    onClick={() => handleDelete(project.id, project.public_id)}
                    disabled={deletingIds.includes(project.id)}
                    className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white"
                  >
                    {deletingIds.includes(project.id)
                      ? "Deleting..."
                      : "Delete"}
                  </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
