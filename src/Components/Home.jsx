import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
 <section
  id="home"
  className="overflow-hidden min-h-screen flex flex-col justify-center items-center text-center 
  bg-gradient-to-b  dark:from-[#1E293B] dark:to-[#0F172A] from-white to-gray-100 
    dark:text-slate-50 text-slate-400 px-4 sm:px-6 md:px-12"
>
      {/* Title */}
      <div className="overflow-hidden">
        <h1
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 flex flex-wrap justify-center items-center gap-2"
        >
          Hi, I`m          <span className="text-indigo-400">
            <Typewriter
              words={["Osama Mahros"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </span>

          <span className="animate-wave inline-block">👋</span>
        </h1>
      </div>

      {/* Subtitle */}
      <div className="overflow-hidden">
        <p
          className="text-lg sm:text-xl md:text-2xl text-slate-400"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          passionate{" "}
          <span className="text-pink-400 font-bold">Front-End Developer</span>{" "}
          from Egypt
        </p>
      </div>

      {/* Description */}
      <div className="my-6 sm:my-8 overflow-hidden">
        <div data-aos="fade-up" data-aos-delay="600">
          <p className="text-sm sm:text-base md:text-lg">
            🎯 Focused on UI/UX, Performance, and Responsive Design
          </p>
          <p className="text-sm sm:text-base">
            💡 Building clean and dynamic user experiences
          </p>
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="overflow-hidden">
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <a
            href="#projects"
            className="px-5 sm:px-6 py-2 sm:py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 text-sm sm:text-base"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-5 sm:px-6 py-2 sm:py-3 border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white font-semibold rounded-lg transition duration-300 text-sm sm:text-base"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 sm:gap-6 text-2xl sm:text-3xl mt-6 sm:mt-8"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          {/* GitHub */}
          <a
            href="https://github.com/osamamahros50"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 opacity-50 hover:text-indigo-400 hover:opacity-100 transform hover:scale-125 transition duration-300"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          {/* Gmail */}
          <a
            href="mailto:osamamahros30@gmail.com"
            className="text-slate-400 opacity-50 hover:text-pink-400 hover:opacity-100 transform hover:scale-125 transition duration-300"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/osama-mahros-b45498343"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 opacity-50 hover:text-blue-400 hover:opacity-100 transform hover:scale-125 transition duration-300"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
