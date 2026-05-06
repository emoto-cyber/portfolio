// components/ProjectCard.jsx
export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-emerald-500/20 transition flex flex-col">
      
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl mb-3"
      />

      <h3 className="text-lg font-semibold">{project.title}</h3>

      <p className="text-sm text-gray-400 mb-2">
        {project.desc}
      </p>

      <p className="text-xs text-emerald-400 mb-4">
        {project.tech}
      </p>

      <div className="mt-auto flex gap-2">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 text-center px-3 py-2 bg-emerald-500 hover:bg-emerald-600 transition rounded-lg text-white text-sm font-medium"
          >
            Live Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 text-center px-3 py-2 border border-gray-600 hover:border-white transition rounded-lg text-white text-sm font-medium"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}