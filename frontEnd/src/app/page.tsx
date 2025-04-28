"use client";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import MatrixRain from "@/app/components/ui/matrixRain";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Fondo Matrix */}
      <MatrixRain />

      {/* Cuadro que sigue al mouse */}
      <div
        className="fixed w-8 h-8 border border-green-400 rounded pointer-events-none z-50"
        style={{
          transform: `translate(${mousePos.x - 16}px, ${mousePos.y - 16}px)`,
        }}
      />

      {/* Navbar */}
      <nav className="bg-black/50 text-white px-8 py-4 flex justify-between items-center text-lg border-b border-green-400 relative z-10">
        <h1 className="text-green-400 font-bold">Home</h1>
        <div className="flex gap-6">
          <Link href="/projects" className="text-green-400 hover:text-red-400">
            Projects
          </Link>
          <Link href="/skills" className="text-green-400 hover:text-red-400">
            Skills
          </Link>
          <Link href="/contact" className="text-green-400 hover:text-red-400">
            Contact
          </Link>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="min-h-screen bg-black/50 text-green-400 font-mono p-8 flex justify-between items-center relative z-10">
        {/* Sección de texto */}
        <div className="max-w-2xl space-y-6">
          <h1 className="text-2xl">
            <Typewriter
              words={["Hi! I'm Fabián", "Full Stack Web Developer"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={30}
              delaySpeed={1200}
            />
          </h1>

          <p className="text-lg">Always learning, always building</p>

          <div className="bg-black border-l-4 border-green-500 p-4 text-sm">
            <p>➤ Initializing profile...</p>
            <p>✔ Loaded name and title</p>
            <p>✔ Location set: México Monterrey</p>
            <p>✔ Portfolio sections ready</p>
            <p>System status: RUNNING</p>
          </div>

          <div className="bg-black/80 border-l-4 border-yellow-400 p-4 text-yellow-300 text-sm space-y-1 mt-4">
            <p>🛠 Generating submodules...</p>
            <p>→ Compiling <span className="text-white">/projects</span> page...</p>
            <p>→ Compiling <span className="text-white">/skills</span> page...</p>
            <p>→ Compiling <span className="text-white">/contact</span> page...</p>
            <p className="mt-2 animate-pulse text-green-400">
              ✓ Pages deployed successfully.
            </p>
          </div>

          <p className="text-green-600 italic text-xs mt-2">
            [App/RUNNING/home → 100%]
          </p>
        </div>

        {/* Imagen */}
        <div className="border-2 border-green-500 p-2 rounded-md">
          <Image
            src="/fabian.jpg"
            alt="Fabián"
            width={220}
            height={220}
            className="rounded-md contrast-125 hover:contrast-100 transition duration-300"
          />
        </div>
      </main>
    </>
  );
}
