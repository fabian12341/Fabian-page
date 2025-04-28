"use client";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";

export default function Contact() {
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-black text-white px-8 py-4 text-lg flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-green-400">Home</Link>
          <Link href="/projects" className="hover:text-green-400">Projects</Link>
          <Link href="/skills" className="hover:text-green-400">Skills</Link>
          <Link href="/contact" className="hover:text-green-400">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-10">
        <h1 className="text-3xl font-bold text-black mb-6">{"Let's get in touch!!"}</h1>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-6 text-center">
          <p className="text-lg text-gray-700 font-semibold">My socials:</p>

          <div className="flex flex-col gap-4 text-lg">
            <a
              href="mailto:fabiantvillarreal@gmail.com"
              className="flex items-center justify-center gap-2 text-gray-800 hover:text-purple-600 transition"
            >
              <SiMaildotru className="w-6 h-6" />
              <span className="text-base">fabiantvillarreal@gmail.com</span>
            </a>

            <a
              href="https://github.com/fabian12341"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-gray-800 hover:text-purple-600 transition"
            >
              <SiGithub className="w-6 h-6" />
              <span className="text-base">My GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/fabian-treviño-55ba331b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-gray-800 hover:text-purple-600 transition"
            >
              <SiLinkedin className="w-6 h-6" />
              <span className="text-base">My LinkedIn</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
