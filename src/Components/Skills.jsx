import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// أيقونات
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      percentage: 93,
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      name: "Tailwind CSS",
      percentage: 83,
      icon: <SiTailwindcss className="text-cyan-400" />,
    },
    {
      name: "Redux",
      percentage: 70,
      icon: <SiRedux className="text-purple-500" />,
    },
    {
      name: "CSS3",
      percentage: 90,
      icon: <FaCss3Alt className="text-blue-500" />,
    },
    {
      name: "Bootstrap",
      percentage: 80,
      icon: <FaBootstrap className="text-purple-600" />,
    },
    {
      name: "TypeScript",
      percentage: 60,
      icon: <SiTypescript className="text-blue-400" />,
    },
    {
      name: "JavaScript",
      percentage: 85,
      icon: <SiJavascript className="text-yellow-400" />,
    },
    {
      name: "Git",
      percentage: 75,
      icon: <FaGitAlt className="text-orange-600" />,
    },
    {
      name: "Next.js",
      percentage: 50,
      icon: <SiNextdotjs className="dark:text-white " />,
    },
    {
      name: "React",
      percentage: 87,
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      name: "GitHub",
      percentage: 80,
      icon: <FaGithub className="dark:text-white" />,
    },
    {
      name: "Responsive Design",
      percentage: 90,
      icon: <FaMobileAlt className="text-green-400" />,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
<section
  id="skills"
  className="bg-gray-100 dark:bg-[#0f172a] py-12 overflow-hidden transition-colors duration-300"
>
  <div className="container px-4">
    {/* Title */}
    <div className="overflow-hidden">
      <h2
        className="text-3xl sm:text-4xl font-bold text-center text-gray-400 dark:text-white mb-4"
        data-aos="fade-up"
      >
        Tools & <span className="text-purple-600 dark:text-purple-400">Technologies</span>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-2"></div>
      </h2>
    </div>

    {/* Subtitle */}
    <p
      className="text-lg text-gray-600 dark:text-gray-400 mb-10 text-center max-w-2xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Here are the technologies I work with to bring ideas to life
    </p>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
          <div className="bg-white dark:bg-slate-800 px-6 py-8 rounded-xl shadow-md hover:shadow-purple-500/30 transition transform hover:scale-[1.03] duration-300 flex flex-col items-center">
            {/* Icon */}
            <div className="text-5xl mb-4 ">{skill.icon}</div>

            {/* Skill Name & Percentage */}
            <div className="flex justify-between w-full mb-3">
              <span className="text-base font-medium text-gray-400 dark:text-white">
                {skill.name}
              </span>
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                {skill.percentage}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
