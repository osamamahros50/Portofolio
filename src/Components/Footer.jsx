import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-300 dark:bg-slate-800 text-gray-800 dark:text-white px-6 py-10 overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left overflow-hidden">

        {/* Profile Info */}
        <div>
          <h2
            className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Osama Mahrous
          </h2>

          <p
            className="text-gray-600 dark:text-gray-400 mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Frontend React Developer passionate about creating amazing user experiences.
          </p>

          <div
            className="flex justify-center md:justify-start gap-4 mt-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="https://www.linkedin.com/in/osama-mahros-b45498343"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white text-xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:osamamahros30@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white text-xl transition"
            >
              <MdEmail />
            </a>
            <a
              href="https://github.com/osamamahros50"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white text-xl transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Quick Links
          </h3>

          <ul className="space-y-2">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <li
                key={item}
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 150}`}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3
            className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Technologies
          </h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
              "Git", "Next.js", "Redux", "React Query"
            ].map((tech, index) => (
              <span
                key={tech}
                className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-800 dark:text-white"
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div
        className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-slate-400 dark:border-slate-700 pt-6"
      >
        © 2025 Osama Mahrous. Built with ❤️ using React & Tailwind CSS
      </div>
    </footer>
  );
}
