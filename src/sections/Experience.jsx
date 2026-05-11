import { experiences } from "../data/experience.js";

function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 text-center">
        Experience
      </h2>

      <p className="mt-2 text-gray-500 dark:text-gray-400 text-center text-sm">
        Where I've applied my skills professionally.
      </p>

      <div className="mt-8 max-w-3xl mx-auto flex flex-col gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-300 dark:border-gray-600"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                  {exp.company} · {exp.location}
                </p>
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            {/* Bullets */}
            <ul className="mt-4 space-y-2">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="text-blue-500 mt-1 shrink-0">▸</span>
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
