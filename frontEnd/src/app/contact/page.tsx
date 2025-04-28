"use client";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";

export default function Contact() {
  return (
    <div className="min-h-screen bg-purple-50">
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

      {/* Info Personal */}
      <main className="flex flex-col items-center justify-center p-10">
        <h1 className="text-3xl font-bold text-black mb-6">Let's get in touch!!</h1>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-4 text-center">
          <p className="text-lg text-gray-700">My socials:</p>

          <div className="flex flex-col gap-4 text-lg">
            <a
              href="mailto:fabiantvillarreal@gmail.com"
              className="flex items-center justify-center gap-2 hover:text-purple-600"
            >
              <SiMaildotru className="w-5 h-5" />
              fabiantvillarreal@gmail.com
            </a>
            <a
              href="https://github.com/fabian12341"
              target="_blank"
              className="flex items-center justify-center gap-2 hover:text-purple-600"
            >
              <SiGithub className="w-5 h-5" />
              My github!!!
            </a>
            <a
              href="https://www.linkedin.com/in/fabian-treviño-55ba331b8/"
              target="_blank"
              className="flex items-center justify-center gap-2 hover:text-purple-600"
            >
              <SiLinkedin className="w-5 h-5" />
              My Linkedin!!!
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
