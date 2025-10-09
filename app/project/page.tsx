"use client";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  technology: string;
  link: string;
  description: string;
  image_url: string;
  created_at: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("portfolios")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setProjects(data || []);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const handelDelete = async (id: number) => {
    const { error } = await supabase.from("portfolios").delete().eq("id", id);
    if (error) console.error("Error deleting project:", error);
    else{
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== id)
      );}
    };

//    const handelUpdate = async (id: number) => {
     
//     const { error } = await supabase.from("portfolios").update({
//       title,
//       description,
//       image_url: image,
//     }).eq("id", id);
//     if (error) console.error("Error updating project:", error);
//     else{
//       setProjects((prevProjects) =>
//         prevProjects.map((project) =>
//           project.id === id ? { ...project, title: "updated title" } : project
//         )
//       );}
//     }

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
              className="border border-sky-100 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden bg-white"
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
                <div
                  className="tiptap-content
 mb-3"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></div>

                <p className="text-xs text-gray-500 mb-2">
                  <strong>Tech:</strong> {project.technology}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 text-white text-sm font-medium hover:opacity-90"
                >
                  Visit Project
                </a>
                <Button onClick={() => handelDelete(project.id)}>
                   delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
