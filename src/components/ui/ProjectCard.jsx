function ProjectCard({ title, badge, description, tech, impact, link, github }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 flex flex-col gap-4 border border-gray-300 dark:border-gray-600 hover:shadow-xl hover:-translate-y-1 transition duration-300">

      {/* Badge + Title */}
      <div>
        {badge && (
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
        <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>

      {/* Impact */}
      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">→ {impact}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-md"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 text-sm">
        {github && github !== "#" && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            GitHub ↗
          </a>
        )}
        {link && link !== "#" && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            Live Demo ↗
          </a>
        )}
        {link === "#" && github === "#" && (
          <span className="text-gray-400 dark:text-gray-500 text-xs italic">Links coming soon</span>
        )}
      </div>

    </div>
  );
}

export default ProjectCard;
