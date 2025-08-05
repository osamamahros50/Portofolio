import React, { useEffect } from "react";
import { FaBullseye, FaBriefcase, FaCheckCircle, FaGlobe } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
<section
  id="about"
  className="py-12 bg-gray-200 dark:bg-slate-800 transition-colors duration-300"
>
  <div className="container mx-auto px-4 sm:px-6 md:px-16">
    {/* Title */}
    <div className="overflow-hidden">
      <h2
        className="text-3xl sm:text-4xl font-bold text-center text-gray-400 dark:text-white mb-12"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        About <span className="text-purple-600 dark:text-purple-400">Me</span>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-2"></div>
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8 items-start">
      {/* Left Section */}
      <div className="border overflow-hidden bg-white dark:bg-slate-900 border-purple-300 dark:border-purple-500 rounded-xl p-6 shadow-lg hover:shadow-purple-500/40 transition">
        <div className="overflow-hidden">
          <h3
            className="flex items-center text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4"
            data-aos="fade-right"
          >
            <FaBullseye className="mr-2" /> Aspiring Front-End Developer
          </h3>
        </div>

        <p
          className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Passionate about creating exceptional user experiences with React,
          JavaScript, and TypeScript. I focus on building clean, responsive,
          and performant web applications.
        </p>

        <h4
          className="flex items-center text-lg sm:text-xl font-bold text-pink-500 dark:text-pink-400 mb-3"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <FaBriefcase className="mr-2" /> What I Focus On
        </h4>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          {[
            "Frontend Technologies & Modern Frameworks",
            "JavaScript, DOM Manipulation & React Architecture",
            "Git, GitHub & Project Version Control",
            "UI/UX Design & Responsive Development",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center"
              data-aos="fade-right"
              data-aos-delay={600 + i * 200}
            >
              <FaCheckCircle className="text-green-500 mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="space-y-4 overflow-hidden">
        {/* Card 1 */}
        <div data-aos="fade-left" data-aos-delay="400">
          <div className="bg-gray-300 dark:bg-slate-700 rounded-xl p-7 flex items-start gap-3 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-transform duration-300">
            <FaCheckCircle className="text-green-500 mt-1" />
            <div>
              <h4 className="text-green-600 dark:text-green-400 font-bold text-base sm:text-lg">
                Mastered Core Technologies
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                HTML5, CSS3, JavaScript, Bootstrap, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div data-aos="fade-left" data-aos-delay="600">
          <div className="bg-gray-300 dark:bg-slate-700 rounded-xl p-7 flex items-start gap-3 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-transform duration-300">
            <SiReact className="text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h4 className="text-blue-600 dark:text-blue-400 font-bold text-base sm:text-lg">
                Advanced React Development
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                React.js, React Router, and Redux Toolkit
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div data-aos="fade-left" data-aos-delay="800">
          <div className="bg-gray-300 dark:bg-slate-700 rounded-xl p-7 flex items-start gap-3 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-transform duration-300">
            <FaGlobe className="text-purple-600 dark:text-purple-400 mt-1" />
            <div>
              <h4 className="text-purple-600 dark:text-purple-400 font-bold text-base sm:text-lg">
                Currently Learning
              </h4>
              <p className="text-gray-700  dark:text-gray-300 text-xs sm:text-sm">
                TypeScript and Next.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
