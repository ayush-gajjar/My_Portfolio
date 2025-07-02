"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Properly typed animation variant
const sectionFade: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const About = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 max-w-4xl mx-auto text-center"
      initial="hidden"
      whileInView="show"
      variants={sectionFade}
      viewport={{ once: true }}
    >
      {/* Profile Image with Circular Hover Effect */}
      <motion.div
        className="mb-10 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="relative rounded-full p-1"
          whileHover={{
            scale: 1.05,
            boxShadow: darkMode 
              ? "0 0 20px rgba(255, 255, 255, 0.3)" 
              : "0 0 20px rgba(99, 102, 241, 0.7)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src="/Ayush/Ayushprofile.jpg"
            alt="Profile"
            className={`w-60 h-60 sm:w-72 sm:h-72 rounded-full border-4 ${
              darkMode ? "border-indigo-400" : "border-indigo-500"
            } object-cover`}
          />
          <div className={`absolute inset-0 rounded-full border-4 border-transparent hover:border-indigo-300 transition-all duration-300 pointer-events-none`}></div>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <div className="flex justify-center space-x-20 mb-3">
        <a href="https://github.com/ayush101x" target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaGithub className={`text-2xl hover:text-indigo-600 transition ${
              darkMode ? "text-white" : "text-indigo-500"
            }`} />
          </motion.div>
        </a>
        <a href="https://www.linkedin.com/in/ayushgajjar123" target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaLinkedin className={`text-2xl hover:text-indigo-600 transition ${
              darkMode ? "text-white" : "text-indigo-500"
            }`} />
          </motion.div>
        </a>
        <a href="https://instagram.com/ayushgajjar.exe" target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaInstagram className={`text-2xl hover:text-indigo-600 transition ${
              darkMode ? "text-white" : "text-indigo-500"
            }`} />
          </motion.div>
        </a>
      </div>

      {/* About Card */}
      <motion.div  
        className={`flex flex-col rounded-xl p-6 cursor-pointer transition-all duration-300 
                    ${darkMode ? " border-blue" : "bg-white border-gray-200"} border-2 
                    shadow-lg hover:shadow-xl`}
        whileHover={{
          scale: 1.02,
          borderColor: darkMode ? "#818cf8" : "#4f46e5",
          transition: { duration: 0.2 }
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <h2 className={`text-3xl font-bold mb-4 ${
          darkMode ? "text-white" : "text-black"
        }`}>About Me</h2>
        <p className={`mb-4 text-sm md:text-base ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}>
          I'm <strong className={darkMode ? "text-white" : "text-black"}>Ayush Gajjar</strong>, a full-stack developer passionate about the{" "}
          <span className={`${darkMode ? "text-indigo-400" : "text-indigo-600"} font-semibold`}>MERN stack</span> and{" "}
          <span className={`${darkMode ? "text-indigo-400" : "text-indigo-600"} font-semibold`}>Flutter</span>. I build scalable and intuitive software, currently pursuing MCA at LJ University.
        </p>
        <p className={`text-sm italic ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}>
          "Code with purpose. Build with passion."
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;