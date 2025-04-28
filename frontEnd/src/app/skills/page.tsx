"use client";
import type { JSX } from "react";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import {
  SiNextdotjs, SiTailwindcss, SiVercel, SiReact, SiFlask, SiOpenai, SiMysql, SiRender,
  SiPython, SiJavascript, SiC, SiGit, SiHtml5, SiCss3, SiNodedotjs, SiPostgresql, SiExpress
} from "react-icons/si";

// Definimos cantidad fija de skills
const skillCount = 17;

// Estilos de skills
const skillStyles: Record<string, { color: string; icon: JSX.Element }> = {
  "Next.js": { color: "bg-black text-white", icon: <SiNextdotjs className="w-8 h-8" /> },
  "Tailwind": { color: "bg-sky-400 text-white", icon: <SiTailwindcss className="w-8 h-8" /> },
  "Vercel": { color: "bg-black text-white", icon: <SiVercel className="w-8 h-8" /> },
  "React": { color: "bg-blue-500 text-white", icon: <SiReact className="w-8 h-8" /> },
  "Flask": { color: "bg-gray-800 text-white", icon: <SiFlask className="w-8 h-8" /> },
  "Whisper": { color: "bg-purple-600 text-white", icon: <SiOpenai className="w-8 h-8" /> },
  "MySQL": { color: "bg-blue-700 text-white", icon: <SiMysql className="w-8 h-8" /> },
  "Render": { color: "bg-indigo-600 text-white", icon: <SiRender className="w-8 h-8" /> },
  "Python": { color: "bg-yellow-400 text-black", icon: <SiPython className="w-8 h-8" /> },
  "JavaScript": { color: "bg-yellow-300 text-black", icon: <SiJavascript className="w-8 h-8" /> },
  "C++": { color: "bg-blue-300 text-black", icon: <SiC className="w-8 h-8" /> },
  "HTML": { color: "bg-orange-500 text-white", icon: <SiHtml5 className="w-8 h-8" /> },
  "CSS": { color: "bg-blue-600 text-white", icon: <SiCss3 className="w-8 h-8" /> },
  "Git": { color: "bg-orange-600 text-white", icon: <SiGit className="w-8 h-8" /> },
  "Node.js": { color: "bg-green-600 text-white", icon: <SiNodedotjs className="w-8 h-8" /> },
  "Express": { color: "bg-gray-600 text-white", icon: <SiExpress className="w-8 h-8" /> },
  "PostgreSQL": { color: "bg-blue-800 text-white", icon: <SiPostgresql className="w-8 h-8" /> },
};

// Lista de skills
const skills = [
  { name: "React", level: "Avanzado" }, { name: "Next.js", level: "Intermedio" },
  { name: "Tailwind", level: "Avanzado" }, { name: "Python", level: "Avanzado" },
  { name: "Flask", level: "Intermedio" }, { name: "MySQL", level: "Intermedio" },
  { name: "Render", level: "Intermedio" }, { name: "Whisper", level: "Intermedio" },
  { name: "JavaScript", level: "Avanzado" }, { name: "C++", level: "Intermedio" },
  { name: "HTML", level: "Avanzado" }, { name: "CSS", level: "Avanzado" },
  { name: "Git", level: "Intermedio" }, { name: "Node.js", level: "Intermedio" },
  { name: "PostgreSQL", level: "Intermedio" },
];

type Position = { x: number; y: number };

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [highestZ, setHighestZ] = useState(1);
  const [zIndices, setZIndices] = useState<number[]>(skills.map(() => 1));

  const initialPositions: Position[] = skills.map((_, i) => {
    const row = Math.floor(i / 5);
    const col = i % 5;
    const spacing = 140;
    const startX = 0;
    const startY = 60;
    return { x: startX + col * spacing, y: startY + row * spacing };
  });

  const [positions] = useState<Position[]>(initialPositions);

  const controls = Array.from({ length: skills.length }, () => useAnimation());

  const resetPositions = () => {
    positions.forEach((pos, i) => {
      controls[i].start({
        x: initialPositions[i].x - pos.x,
        y: initialPositions[i].y - pos.y,
        transition: { duration: 0.8, type: "spring" },
      });
    });
  };

  return (
    <div className="min-h-screen bg-purple-50 relative overflow-hidden">
      {/* Navbar */}
      <nav className="bg-black text-white px-8 py-4 text-lg flex justify-between items-center z-10 relative">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-green-400">Home</Link>
          <Link href="/projects" className="hover:text-green-400">Projects</Link>
          <Link href="/skills" className="hover:text-green-400">Skills</Link>
          <Link href="/contact" className="hover:text-green-400">Contact</Link>
        </div>
      </nav>

      {/* Botón Reset */}
      <div className="absolute bottom-6 right-6 z-20">
        <button
          onClick={resetPositions}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 shadow-md"
        >
          Reset
        </button>
      </div>

      {/* Contenedor de Skills */}
      <main ref={containerRef} className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">
        <div className="relative w-[720px] h-full">
          {skills.map((skill, i) => {
            const style = skillStyles[skill.name] || { color: "bg-gray-300 text-black", icon: <></> };

            return (
              <motion.div
                key={i}
                drag
                dragConstraints={containerRef}
                dragElastic={0.8}
                dragMomentum
                animate={controls[i]}
                onMouseDown={() => {
                  const nextZ = highestZ + 1;
                  const newZs = [...zIndices];
                  newZs[i] = nextZ;
                  setZIndices(newZs);
                  setHighestZ(nextZ);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className={`absolute flex flex-col items-center justify-center p-4 w-24 h-24 rounded-md shadow-md cursor-grab ${style.color}`}
                style={{
                  top: `${initialPositions[i].y}px`,
                  left: `${initialPositions[i].x}px`,
                  zIndex: zIndices[i],
                  touchAction: "none",
                }}
              >
                <div className="transition-transform group-hover:scale-125 group-hover:rotate-3">
                  {style.icon}
                </div>
                <span className="text-xs font-semibold text-center">{skill.name}</span>
                <span className="text-[10px] opacity-80">{skill.level}</span>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
