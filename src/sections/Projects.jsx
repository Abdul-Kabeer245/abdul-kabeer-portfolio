import ProjectCard from "../components/ui/ProjectCard.jsx";
import { projects } from "../data/projects.js";

function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 text-center">
        Projects
      </h2>

      <p className="mt-2 text-gray-500 dark:text-gray-400 text-center text-sm">
        Real problems. Real solutions. Real code.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            badge={project.badge}
            description={project.description}
            tech={project.tech}
            impact={project.impact}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
