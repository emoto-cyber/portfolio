"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="glowblack bg-black text-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-emerald-500 shadow-lg shadow-emerald-500/50 backdrop-blur border-b border-blue-800 z-50">
        <div className="navbar container mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="font-bold text-lg text-white">Emoto.</h1>

          <div className="nav-links flex gap-6 text-sm">
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#skills" className="hover:text-green-400">Skills</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

    <section className="hero">

  <div className="glow glow-green"></div>
  <div className="glow glow-blue"></div>

  <div className="container hero-grid">

    {/* LEFT */}
    <div>
          <h2 className="text-gray-400 mt-4">
    FULL-STACK WEB DEVELOPER — BUILDING SCALABLE LARAVEL SYSTEMS
APIs • WORDPRESS • WEB APPLICATIONS
      </h2>
      <h1 className="hero-title">
        <span className="gradient-text">Kevin Emoto</span>
      </h1>

      <p className="text-gray-400 mt-4">
       I design and build clean, accessible interfaces and contribute to full-stack systems using Laravel.
        Experienced with real-world projects, Docker-based workflows, and modern UI practices. 
        Currently expanding my skills in React and Python for data-driven applications.
      </p>

      <div className="mt-6 flex gap-4">
        <a href="#projects" className="btn btn-primary">
          View Projects
        </a>

        <a href="#contact" className="btn btn-outline">
          Contact Me
        </a>
      </div>

      <div className="home-scl">
        <a href="#">
          <i className="bi bi-facebook"></i> 
        </a>

          <a href="#">
          <i className="bi bi-instagram"></i> 
        </a>

          <a href="#">
          <i className="bi bi-youtube"></i> 
        </a>

          <a href="#">
          <i className="bi bi-tiktok"></i> 
        </a>

       
        <a href="#">
          <i className="bi bi-twitter"></i> 
        </a>

        <a href="#" >
          <i className="bi bi-github"></i> 
        </a>
      </div>
    </div>

    {/* RIGHT */}
    <div className="profile-img">
      <Image
        src="/profile.jpeg"
        alt="Kevin"
        width={300}
        height={300}
        className="profile-img"
      />
    </div>

  </div>

</section>

      {/* ABOUT */}
      <section className="light-section containers py-20 bg-white text-black text-center px-6">
        <div className=" max-w-3xl mx-auto p-10">
          <h2 className="text-3xl font-bold text-blue-600">
            About Me
          </h2>

          <p className="text-gray-700 leading-relaxed">
         I’m an organized and motivated IT professional with strong hands-on experience in Laravel-based systems, UI/UX design, and front-end development. 
         I’ve worked on live client websites, internal company systems, and academic projects, often collaborating with senior developers. I use Docker for local development and enjoy turning ideas into responsive, accessible, and visually clear interfaces.
          I’m currently learning React and Python to strengthen my front-end and data skills.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
<section id="projects" className="card py-20 px-6 text-center">

  <h2 className="text-3xl font-bold text-green-500 mb-10">
    Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

    {[
      {
        title: "Techbridge ERP System",
        desc: "Comprehensive ERP for inventory, sales, and finance management.",
        tech: "Laravel • MySQL • Tailwind CSS • JavaScript",
        image: "/images/erp.jpg",
      },
      {
        title: "Healthclassique website",
        desc: "Modern website for healthcare and skincare products.",
        tech: "PHP • WordPress • CSS • JavaScript",
        image: "/images/health.jpg",
      },
      {
        title: "Hostel Management System",
        desc: "Role-based management system with permissions.",
        tech: "Laravel • Spatie",
        image: "/images/hostel.jpg",
      },
    ].map((p, i) => (
      <div
        key={i}
        className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:-translate-y-2 hover:border-blue-500 transition duration-300"
      >
        {/* IMAGE */}
      <Image
  src={p.image}
  alt={p.title}
  width={400}
  height={200}
  className="w-full h-48 object-cover"
/>

        {/* CONTENT */}
        <div className="p-6 text-left">
          <h3 className="text-lg font-bold text-blue-400 mb-2">
            {p.title}
          </h3>

          <p className="text-gray-400 text-sm mb-3">
            {p.desc}
          </p>

          <p className="text-xs text-green-400">
            {p.tech}
          </p>
        </div>
      </div>
    ))}

  </div>
</section>

      <section id="skills" className="light-section py-20 bg-white text-black text-center px-6">

  <h2 className="text-3xl font-bold text-green-600 mb-10">
    My Skills
  </h2>

  <div className="skills-grid">
    

    {/* BACKEND */}
    <div className="skill-card">
      <h3 className="skill-title backend">Technical Skills</h3>
      <h1>Core/professional</h1>

      <div className="skill-tags">
        {["Laravel", "PHP", "MySQL", "REST APIs", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML & CSS"].map((skill, i) => (
          <span key={i} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
      </div>



    {/* FRONTEND */}
    <div className="skill-card">
      <h3 className="skill-title frontend">Soft Skills</h3>

      <div className="skill-tags">
        {["Communication", "Teamwork", "Problem Solving", "Adaptability"].map((skill, i) => (
          <span key={i} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>

        {/* FRONTEND */}
    <div className="skill-card">
      <h3 className="skill-title frontend"></h3>
      <h1>Additional</h1>

         <div className="skill-tags">
        {["Laravel", "PHP", "MySQL", "REST APIs", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML & CSS"].map((skill, i) => (
          <span key={i} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>

    

  </div>

</section>
      {/* CONTACT */}
      <section id="contact" className="py-20 text-center px-6">

        <h2 className="text-3xl font-bold text-blue-500 mb-4">
          Contact
        </h2>

        <p className="text-gray-400 mb-4">
          Let’s build something impactful together.
        </p>

        <h3 className="text-green-400 mb-6">
          0790680307 / 0745382488
        </h3>

        <div className="flex justify-center gap-6 text-sm">
          <a href="mailto:emotokevin@gmail.com" className="hover:text-blue-500">
            Email
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            LinkedIn
          </a>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-600 text-sm py-6 border-t border-gray-800">
        © {new Date().getFullYear()} Kevin Emoto. All rights reserved.
      </footer>

    </main>
  );
}