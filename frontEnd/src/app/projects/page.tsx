"use client";
import type { JSX } from "react";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";

// Importa solo los íconos que usas
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiReact,
  SiFlask,
  SiOpenai,
  SiMysql,
  SiRender,
  SiPython
} from "react-icons/si";

// Diccionario con color e ícono JSX
const techStyles: Record<
  string,
  { color: string; icon: JSX.Element }
> = {
  "Next.js": {
    color: "bg-black text-white",
    icon: <SiNextdotjs className="w-4 h-4" />,
  },
  "Tailwind": {
    color: "bg-sky-400 text-white",
    icon: <SiTailwindcss className="w-4 h-4" />,
  },
  "Vercel": {
    color: "bg-black text-white",
    icon: <SiVercel className="w-4 h-4" />,
  },
  "React": {
    color: "bg-blue-500 text-white",
    icon: <SiReact className="w-4 h-4" />,
  },
  "Flask": {
    color: "bg-gray-800 text-white",
    icon: <SiFlask className="w-4 h-4" />,
  },
  "Whisper": {
    color: "bg-purple-600 text-white",
    icon: <SiOpenai className="w-4 h-4" />, // usando OpenAI como placeholder
  },
  "MySQL": {
    color: "bg-blue-700 text-white",
    icon: <SiMysql className="w-4 h-4" />,
  },
  "Render": {
    color: "bg-indigo-600 text-white",
    icon: <SiRender className="w-4 h-4" />,
  },
  "python": {
    color: "bg-yellow-400 text-black",
    icon: <SiPython className="w-4 h-4" />,
  },
};

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal site built with Next.js, Tailwind and deployed on Vercel.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    details: "This portfolio showcases personal projects and blogs using static generation and Tailwind for responsive design.",
    github: "webpage.com",
    image: "/webDevelopment.png"
  },
  {
    title: "AI website to generate reports of calls",
    description: "A full-stack web page to understand calls and track improvement.",
    tech: ["Next.js", "Flask", "Whisper", "MySQL", "Render", "python"],
    details: "Full stack web app that generates transcripts and reports of calls to improve how you talk and know how the speakers acted during the call.",
    github: "https://github.com/fabian12341/AgileAvengers.git",
    image: "/AI.jpg"
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-black text-white px-8 py-4 text-lg flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white-400">Featured Projects</h2>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-green-400">Home</Link>
          <Link href="/projects" className="hover:text-green-400">Projects</Link>
          <Link href="/skills" className="hover:text-green-400">Skills</Link>
          <Link href="/contact" className="hover:text-green-400">Contact</Link>
        </div>
      </nav>

      {/* Grid de proyectos */}
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="relative h-52 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-black/20 overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-4 pr-48 h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => {
                    const style = techStyles[tech] || {
                      color: "bg-gray-200 text-gray-800",
                      icon: <></>,
                    };
                    return (
                      <span
                        key={i}
                        className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${style.color}`}
                      >
                        {style.icon}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </CardContent>

              {/* Imagen lateral */}
              <div className="absolute top-2 right-2 bottom-2 w-40 rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Dialogo al seleccionar proyecto */}
      {selectedProject && (
        <Dialog open={true} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-md">
            <DialogTitle className="text-2xl mb-4">
              {selectedProject.title}
            </DialogTitle>
            <p className="mb-4 text-gray-700">{selectedProject.details}</p>
            <p className="mb-4 text-gray-700">
              GitHub del proyecto:{" "}
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {selectedProject.github}
              </a>
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((tech, i) => {
                const style = techStyles[tech] || {
                  color: "bg-gray-200 text-gray-800",
                  icon: <></>,
                };
                return (
                  <span
                    key={i}
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${style.color}`}
                  >
                    {style.icon}
                    {tech}
                  </span>
                );
              })}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
