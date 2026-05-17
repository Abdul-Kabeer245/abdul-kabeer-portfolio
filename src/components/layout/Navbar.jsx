import { useState } from "react";
import {links} from "../../data/contact";

function Navbar({ name, active, darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["home", "about", "experience", "projects", "contact"];

  return (
    <nav className="px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity"
        >
          AK test pipeline
        </a>

        <div className="flex items-center gap-5">

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`capitalize text-sm transition-colors pb-0.5 ${
                  active === id
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border-b-2 border-transparent"
                }`}
              >
                {id}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-4 bg-gray-300 dark:bg-gray-600" />

          {/* Social links */}
          <div className="hidden md:flex items-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 pb-3 border-t border-gray-200 dark:border-gray-700 pt-3 space-y-1">
          {navLinks.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md capitalize text-sm transition-colors ${
                active === id
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {id}
            </a>
          ))}
          <div className="flex gap-4 px-3 pt-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
