"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-black text-white scroll-smooth pt-20">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-emerald-500 shadow-lg backdrop-blur border-b border-blue-800 z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="font-bold text-lg text-white">Emoto.</h1>

          {/* Desktop */}
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-emerald-600 px-6 pb-4 space-y-3">
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-gray-400 text-sm">
              FULL-STACK WEB DEVELOPER
            </h2>

            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              <span className="text-green-400">Kevin Emoto</span>
            </h1>

            <p className="text-gray-400 mt-4 max-w-xl">
              I design and build scalable Laravel systems, APIs, and modern web applications.
              Experienced in real-world projects and currently expanding into React and Python.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="bg-green-500 px-6 py-2 rounded hover:scale-105 transition">
                View Projects
              </a>

              <a href="#contact" className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
                Contact Me
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-4 mt-6 text-xl">
              <a href="https://github.com/emoto-cyber">🐙</a>
              <a href="#">🐦</a>
              <a href="#">📸</a>
              <a href="#">🎥</a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <Image
              src="/profile.jpeg"
              alt="Kevin"
              width={300}
              height={300}
              className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white text-black py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">About Me</h2>

          <p className="text-gray-700 leading-relaxed">
            I’m an organized IT professional with experience in Laravel systems,
            UI/UX design, and frontend development. I’ve worked on real-world projects
            including ERP systems and business websites, collaborating with teams
            to build scalable and user-friendly applications.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-10">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Techbridge ERP",
              desc: "ERP for inventory, sales, and finance.",
              tech: "Laravel • MySQL • Tailwind",
              image: "/images/erp.JPG",
            },
            {
              title: "Healthclassique",
              desc: "Healthcare website.",
              tech: "WordPress • PHP",
              image: "/images/health.JPG",
            },
            {
              title: "Hostel System",
              desc: "Role-based system.",
              tech: "Laravel • Spatie",
              image: "/images/hostel.JPG",
            },
          ].map((p, i) => (
            <div key={i} className="bg-gray-900 rounded-lg overflow-hidden hover:-translate-y-2 transition">
              <Image src={p.image} alt={p.title} width={400} height={200} className="w-full h-48 object-cover" />

              <div className="p-6 text-left">
                <h3 className="text-blue-400 font-bold">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
                <p className="text-green-400 text-xs mt-2">{p.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-white text-black py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-10">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            {
              title: "Technical",
              skills: ["Laravel", "PHP", "MySQL", "REST APIs", "JavaScript"]
            },
            {
              title: "Soft Skills",
              skills: ["Communication", "Teamwork", "Problem Solving"]
            },
            {
              title: "Tools",
              skills: ["Git", "Docker", "Postman", "VS Code"]
            }
          ].map((group, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded">
              <h3 className="font-bold mb-4">{group.title}</h3>

              <div className="flex flex-wrap gap-2 justify-center">
                {group.skills.map((s, idx) => (
                  <span key={idx} className="bg-green-200 px-3 py-1 rounded text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-10">Experience</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            "Software Developer",
            "Web Developer",
            "IT Intern",
            "Student Projects"
          ].map((role, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded">
              <h3 className="text-green-400 font-bold">{role}</h3>
              <p className="text-gray-400 text-sm mt-2">Experience details here</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Contact</h2>

        <p className="text-gray-400 mb-4">
          Open to internships, part-time roles, and collaborations.
        </p>

        <p className="text-green-400 mb-6">0790680307</p>

        <div className="flex justify-center gap-6">
          <a href="mailto:emotokevin@gmail.com">Email</a>
          <a href="https://github.com/emoto-cyber">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-600 py-6 border-t border-gray-800">
        © {new Date().getFullYear()} Kevin Emoto
      </footer>

    </main>
  );
}