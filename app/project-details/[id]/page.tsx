"use client";
import { supabase } from "@/lib/supabaseClient";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  technology: string; // comma-separated
  link: string;
  description: string;
  image_url: string;
  created_at: string;
}

export default function ProjectDetailsPage() {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  const projectId = useParams()?.id;

  useEffect(() => {
    if (!projectId) return;

    const fetchProject = async () => {
      const { data, error } = await supabase
        .from("portfolios")
        .select("*")
        .eq("id", projectId)
        .single();

      if (error) console.error("Fetch error:", error.message);
      else setProject(data);
      setLoading(false);
    };

    fetchProject();
  }, [projectId]);

  if (loading)
    return <p className="text-center mt-10 text-sky-600">Loading project...</p>;
  if (!project)
    return <p className="text-center mt-10 text-red-500">Project not found!</p>;

  // Split technologies for badges
  const techList = project.technology.split(",").map((t) => t.trim());

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8  shadow-lg rounded-xl overflow-hidden border border-sky-500 dark:border-gray-700">
        {/* Left: Project Image */}
        <div className="lg:w-1/2">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>

        {/* Right: Project Details */}
        <div className="lg:w-1/2 p-6 flex flex-col">
          {/* Project Name */}
          <h1 className="text-3xl font-bold text-violet-700 dark:text-sky-500 mb-4">
            {project.title}
          </h1>

          {/* Tech & Category badges */}
          <div>
            <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
              {" "}
              Category: {project.category}
            </span>
            <div className="flex mt-5 flex-wrap gap-2 mb-4">
              <h1 className="text-md font-semibold text-primary ">
                Technology:
              </h1>
              {techList.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 capitalize text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Created At */}
          <p className="text-right text-xs text-gray-400 mt-4">
            Created at: {new Date(project.created_at).toLocaleDateString()}
          </p>
          {/* Optional: Project Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-sky-600 text-white font-semibold
              dark:bg-gradient-to-r dark:from-neutral-900 dark:to-neutral-950 hover:opacity-90 transition "
            >
              Live site
            </a>
          )}
        </div>
      </div>
      {/* Horizontal line */}
      <h1 className="mt-2 capitalize text-3xl font-semibold text-primary">
        discription
      </h1>
      <hr className="border-neutral-300 dark:border-gray-700 mb-4 mt-1" />

      {/* Description */}
      <div
        className="prose max-w-none text-gray-800 dark:text-zinc-400 h-fit  rounded  "
        dangerouslySetInnerHTML={{ __html: project.description }}
      ></div>
    </div>
  );
}
