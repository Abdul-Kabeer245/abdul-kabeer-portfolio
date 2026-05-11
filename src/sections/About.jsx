function About() {
  const skills = [
    { category: "Automation", items: ["Python", "Selenium", "REST APIs"] },
    { category: "Backend", items: ["Flask", "SQLite", "MySQL"] },
    { category: "Data / ML", items: ["Pandas", "Scikit-learn", "NumPy"] },
    { category: "Tools", items: ["SQL", "Git", "Google Sheets API"] },
  ];

  const certifications = [
    { title: "IBM Data Science", issuer: "IBM" },
    { title: "Google Data Analytics", issuer: "Google" },
  ];

  return (
    <section id="about" className="py-16">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 text-center">
        About Me
      </h2>

      <p className="mt-2 text-gray-500 dark:text-gray-400 text-center text-sm">
        Background, skills, and what I'm certified in.
      </p>

      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center leading-relaxed">
        Software engineer with hands-on experience in automation, backend
        development, and data science. I build systems that reduce manual
        work, expose clean APIs, and extract insight from data — with a
        focus on writing code that actually ships.
      </p>

      {/* Skills */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 border border-gray-300 dark:border-gray-600"
          >
            <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">
              {group.category}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item} className="text-gray-700 dark:text-gray-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full"
          >
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">
              {cert.issuer}
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-xs">
              {cert.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
