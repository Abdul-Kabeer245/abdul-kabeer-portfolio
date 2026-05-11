import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const mailtoLink = `mailto:Abdul.Kabeer245@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contact" className="py-16 text-center">

      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        Contact Me
      </h2>

      <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
        Open to roles, freelance work, and collaboration.
      </p>

      <div className="mt-8 max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl p-8">
        {submitted && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm">
            Opening your email client — thanks for reaching out!
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
          ></textarea>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 dark:bg-blue-500 rounded-lg text-white font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>

        </form>
      </div>

    </section>
  );
}

export default Contact;
