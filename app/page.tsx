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
        <a href="https://www.facebook.com/kejjoh.kelloh">
          <i className="bi bi-facebook"></i> 
        </a>

          <a href="https://www.instagram.com/kelvynemoto/?hl=en">
          <i className="bi bi-instagram"></i> 
        </a>

          <a href="https://www.youtube.com/@emotokevin3312">
          <i className="bi bi-youtube"></i> 
        </a>

          <a href="https://www.tiktok.com/search?q=emoto&t=1777144062905">
          <i className="bi bi-tiktok"></i> 
        </a>

       
        <a href="https://x.com/loger_vic">
          <i className="bi bi-twitter"></i> 
        </a>

        <a href="https://github.com/emoto-cyber" >
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
         I’ve worked on live client websites, internal company systems, and academic projects, often collaborating with senior developers. I use VS Code for local development and enjoy turning ideas into responsive, accessible, and visually clear interfaces.
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
        title: "Ongoing Laravel Based Techbridge ERP System",
        desc: "Comprehensive ERP for inventory, sales, and finance management.",
        tech: "Laravel • MySQL • Tailwind CSS • JavaScript",
        image: "/images/erp.JPG",
      },
      {
        title: "Healthclassique website",
        desc: "Modern website for healthcare and skincare products.",
        tech: "PHP • WordPress • CSS • JavaScript",
        image: "/images/health.JPG",
      },
      {
        title: "Hostel Management System",
        desc: "Role-based management system with permissions.",
        tech: "Laravel • Spatie Permissions • MySQL • Tailwind CSS",
        image: "/images/hostel.JPG",
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
      <h1>Tools & Platforms</h1>

         <div className="skill-tags">
        {["HeidiSQL", "Postman", "Docker", "Git", "GitHub", "VS Code","My Sql" ,"Linux (basic)"].map((skill, i) => (
          <span key={i} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>

    

  </div>

</section>
{/* EXPERIENCE */}
<section id="experience" className="py-20 bg-black text-white text-center px-6">

  <h2 className="text-3xl font-bold text-blue-500 mb-10">
    Experience
  </h2>

  <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">

    {[
      {
        role: "Software Developer",
        company: "Greyglass Technologies - Nairobi",
        date: "Jan 2025 - Present",
        desc: [
          "Collaborated with senior developers on ERP systems and scalable Laravel applications",
          "Contributed to building REST APIs for seamless frontend–backend integration",
          "Implemented role-based authentication and authorization",
          "Collaborated with developers on UI/UX improvements"
        ],
      },
      {
        role: "Web Developer",
        company: "Healthclassique - Nairobi",
        date: "Aug 2025 - Dec 2025",
        desc: [
          "Built and maintained a WordPress-based skincare website",
          "Customized themes and plugins to meet business needs",
          "Improved website responsiveness and user experience",
          "Collaborated with designers and content creators for visual appeal"
        ],
      },
      {
        role: "It Support Intern",
        company: "ICT Authority - Busia",
        date: "May 2023 - Jul 2023",
        desc: [
          "Assisted in developing and maintaining internal systems",
          "Debugged applications and resolved technical issues",
          "Collaborated with team members on system improvements"
        ],
      },
      {
        role: "Student Projects",
        company: "Academic Work",
        date: "2022 - 2023",
        desc: [
          "Developed full-stack applications including hostel systems",
          "Built CRUD systems using Laravel and MySQL",
          "Applied best practices in UI design and database structure"
        ],
      },
    ].map((exp, i) => (
      <div
        key={i}
        className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:-translate-y-2 hover:border-blue-500 transition duration-300 text-left"
      >
        <h3 className="text-lg font-bold text-green-400 mb-2">
          {exp.role}
        </h3>

        <p className="text-sm text-blue-400 mb-1">
          {exp.company}
        </p>

        <p className="text-xs text-gray-500 mb-3">
          {exp.date}
        </p>

        <ul className="text-gray-400 text-sm list-disc pl-5 space-y-1 leading-relaxed">
          {exp.desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    ))}

  </div>
</section>





      {/* CONTACT */}
      <section id="contact" className="py-20 text-center px-6">

        <h2 className="text-3xl font-bold text-blue-500 mb-4">
          Contact
        </h2>

        <p className="text-gray-400 mb-4">
          Let’s build something impactful together - I’m open to internships, part-time roles, and collaborations. 
          If you have a project or an idea, let’s bring it to life..
        </p>

        <h3 className="text-green-400 mb-6">
          0790680307 / 0745382488
        </h3>

        <div className="flex justify-center gap-6 text-sm">
          <a href="mailto:emotokevin@gmail.com" className="hover:text-blue-500">
            Email
          </a>
          <a href="https://github.com/emoto-cyber" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kevin-emoto-0b617519b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
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