import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import freshCartImg from "../assets/fresh-cart.png";
import yummyImg from "../assets/Yommy.png";
import portfolioImg from "../assets/Portofolio.png";

const projects = [
  {
    title: "Fresh-Cart",
    category: "React E-commerce App",
    description:
      "A fully responsive e-commerce platform built with React, JWT, React Router, and more. Features product browsing, user authentication, and secure checkout.",
    tech: ["React", "JWT", "React Router", "tailwindcss", "JavaScript"],
    image: freshCartImg,
    demo: "https://your-fresh-cart-demo.netlify.app",
    code: "https://github.com/osamamahros50/FreshCart",
  },
  {
    title: "Yummy Meals",
    category: "Recipe Web App",
    description:
      "A responsive food recipe web app that fetches data from TheMealDB API. Includes search functionality, meal categories, and dynamic recipe pages.",
    tech: [
      "JavaScript",
      "API Integration",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
    image: yummyImg,
    demo: "https://your-yummy-meals.netlify.app",
    code: "https://github.com/osamamahros50/Yommy.git",
  },
  {
    title: "Portfolio Website",
    category: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and a clean design.",
    tech: ["React", "Tailwind CSS", "AOS", "Responsive Design"],
    image: portfolioImg,
    demo: "https://portofolio-xrp1.vercel.app/",
    code: "https://github.com/osamamahros50/Portofolio.git",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
  <section
  id="projects"
  className="bg-gray-300 dark:bg-slate-800 dark:text-white text-gray-800 py-16 px-4 md:px-16 transition-colors duration-300"
>
  <div className="container mx-auto">
    {/* Section Title */}
    <div className="text-center mb-12" data-aos="fade-down">
      <h2 className="text-4xl font-bold">
        <span className="text-gray-400 dark:text-white">Featured</span>{" "}
        <span className="text-purple-600 dark:text-purple-400">Projects</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-2"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
        Here are some of my recent projects that showcase my skills and passion for development
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 150}
          className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-purple-700 transition-all duration-500 ease-in-out transform hover:scale-[1.02] p-1 flex flex-col justify-between"
        >
          {/* Image */}
          <div className="relative group h-[200px] sm:h-[220px] lg:h-[240px] overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
            />
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <i className="fa-brands fa-github text-white text-4xl transform transition-transform duration-500 group-hover:scale-125"></i>
            </a>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-1 bg-gray-50 dark:bg-slate-900 rounded-lg px-4 py-5 transition-colors duration-300">
            <div>
              <h3 className="text-xl font-semibold text-gray-400 dark:text-white mb-1">
                {project.title}
              </h3>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 dark:text-blue-400 hover:underline mb-2 inline-block"
              >
                {project.category}
              </a>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-800 dark:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white w-full py-2 bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600 rounded text-sm font-semibold text-center transition-all duration-300"
              >
                🚀 Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* View More Button */}
    <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="500">
      <a
        href="https://github.com/osamamahros50"
        className="inline-block px-6 py-3 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition text-white text-sm font-semibold shadow-lg hover:shadow-xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        View More on GitHub
      </a>
    </div>
  </div>
</section>


  );
}
