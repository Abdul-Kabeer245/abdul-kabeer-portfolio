function Hero() {
  return (
    <section id="home" className="py-24 text-center">

      {/* Available badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Open to opportunities
      </div>

      <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Abdul Kabeer</span>
      </h1>

      <h2 className="mt-3 text-xl font-medium text-gray-500 dark:text-gray-400">
        Automation Engineer · Python Developer · Backend Developer
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
        I build scalable enterprise automation systems using Python, Selenium and APIs. Currently
        working as an Automation Engineer at{" "}
        <span className="text-blue-600 dark:text-blue-400 font-medium">Net2Apps</span>.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:opacity-90 transition-opacity"
        >
          Resume ↗
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-white transition-colors"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
}

export default Hero;
