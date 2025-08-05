/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgvznlgo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
  <div
  className="overflow-hidden bg-gray-100 dark:bg-[#0f172a] text-gray-900 dark:text-white flex flex-col items-center justify-center px-6 py-12 transition-colors duration-300"
  id="contact"
>
  <h2
    className="text-4xl font-bold text-center mb-2"
    data-aos="fade-down"
    data-aos-delay="0"
  >
    <span className="text-slate-400 dark:text-white">Let's </span>
    <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
      Connect
    </span>
  </h2>

  <div
    className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto my-2"
    data-aos="fade-down"
    data-aos-delay="200"
  ></div>

  <p
    className="text-gray-600 dark:text-gray-400 text-center mb-10"
    data-aos="fade-up"
    data-aos-delay="400"
  >
    Have a project in mind or want to collaborate? I'd love to hear from you!
  </p>

  <div className="flex flex-col lg:flex-row gap-10 w-full max-w-5xl">
    {/* Left - Contact Info */}
    <div
      data-aos="fade-right"
      className="hover:shadow-purple-950 transition-all duration-500 ease-in-out overflow-hidden flex-1 pt-10 bg-white dark:bg-gradient-to-br dark:from-[#1e253a] dark:to-[#0f172a] p-6 rounded-xl space-y-6 shadow-2xl backdrop-blur-lg"
    >
      <h3
        className="text-xl font-semibold text-indigo-600 dark:text-indigo-400"
        data-aos="fade-right"
        data-aos-delay="600"
      >
        Get in Touch
      </h3>

      {/* Email */}
      <div className="flex items-center gap-4" data-aos="fade-right" data-aos-delay="800">
        <MdEmail className="text-3xl text-red-500 dark:text-red-400" />
        <div>
          <span className="font-bold">Email</span>
          <a
            href="mailto:osamamahros30@gmail.com"
            className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline transition"
          >
            osamamahros30@gmail.com
          </a>
        </div>
      </div>

      {/* GitHub */}
      <div className="flex items-center gap-4" data-aos="fade-right" data-aos-delay="1000">
        <FaGithub className="text-3xl text-gray-800 dark:text-gray-300" />
        <div>
          <span className="font-bold">GitHub</span>
          <a
            href="https://github.com/osamamahros50"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline transition"
          >
            @osamamahros50
          </a>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="flex items-center gap-4" data-aos="fade-right" data-aos-delay="1200">
        <FaLinkedin className="text-3xl text-blue-600 dark:text-blue-400" />
        <div>
          <span className="font-bold">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/osama-mahros-b45498343"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline transition"
          >
            Osama Mahros
          </a>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-4" data-aos="fade-right" data-aos-delay="1400">
        <FaMapMarkerAlt className="text-3xl text-green-500 dark:text-green-400" />
        <div>
          <span className="font-bold">Location</span>
          <a
            href="https://maps.app.goo.gl/9aiCXGbQNfHsrSD17"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline transition"
          >
            Cairo / Egypt
          </a>
        </div>
      </div>
    </div>

    {/* Right - Contact Form */}
    <form
      data-aos="fade-left"
      ref={formRef}
      onSubmit={handleSubmit}
      className="hover:shadow-purple-950 transition-all duration-500 ease-in-out overflow-hidden flex-1 bg-white dark:bg-gradient-to-br dark:from-[#1e253a] dark:to-[#0f172a] p-6 rounded-xl space-y-5 shadow-2xl backdrop-blur-lg"
    >
      {/* Name */}
      <div data-aos="fade-left" data-aos-delay="800">
        <label className="block mb-1 text-indigo-600 dark:text-indigo-300">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-100 dark:bg-[#1f2937] text-gray-800 dark:text-white border border-blue-300 dark:border-blue-400 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div data-aos="fade-left" data-aos-delay="1000">
        <label className="block mb-1 text-indigo-600 dark:text-indigo-300">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="your.email@example.com"
          className="w-full p-3 rounded bg-gray-100 dark:bg-[#1f2937] text-gray-800 dark:text-white border border-blue-300 dark:border-blue-400 outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Message */}
      <div data-aos="fade-left" data-aos-delay="1200">
        <label className="block mb-1 text-indigo-600 dark:text-indigo-300">Message</label>
        <textarea
          name="message"
          required
          placeholder="Tell me about your project or just say hello!"
          className="w-full p-3 rounded bg-gray-100 dark:bg-[#1f2937] text-gray-800 dark:text-white border border-blue-300 dark:border-blue-400 outline-none h-32 focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div data-aos="fade-left" data-aos-delay="1400">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-3 rounded text-white font-semibold hover:opacity-90 transition"
        >
          🚀 Send Message
        </button>
      </div>
    </form>
  </div>
</div>

  );
}
