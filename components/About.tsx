"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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

const About = ({ darkMode = true }: { darkMode?: boolean }) => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 max-w-4xl mx-auto text-center"
      initial="hidden"
      whileInView="show"
      variants={sectionFade}
      viewport={{ once: true }}
    >
      {/* Profile Image */}
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
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.7)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src="/Ayush/Ayushprofile.jpg"
            alt="Profile"
            className="w-60 h-60 sm:w-72 sm:h-72 rounded-full border-4 border-indigo-500 object-cover"
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-indigo-300 transition-all duration-300 pointer-events-none"></div>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <div className="flex justify-center space-x-20 mb-3">
        <motion.a 
          href="https://github.com/ayush101x" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <FaGithub className="text-2xl hover:text-indigo-600 transition text-indigo-500" />
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/ayushgajjar123" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <FaLinkedin className="text-2xl hover:text-indigo-600 transition text-indigo-500" />
        </motion.a>
        <motion.a 
          href="https://instagram.com/ayushgajjar.exe" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <FaInstagram className="text-2xl hover:text-indigo-600 transition text-indigo-500" />
        </motion.a>
      </div>

      {/* About Card */}
      <motion.div
        className={`flex flex-col rounded-xl p-6 cursor-pointer transition-all duration-300
          ${darkMode ? "bg-gray-800  border-gray-700" : "bg-white  border-gray-200"}
          border shadow-lg hover:shadow-xl`}
        whileHover={{ 
          scale: 1.1,
          borderColor: darkMode ? "#a5b4fc" : "#6366f1"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-4"
          
        >
          About Me
        </motion.h2>
        <p className="mb-4 text-sm md:text-base">
          I'm <strong>Ayush Gajjar</strong>, a full-stack developer passionate about the{" "}
          <motion.span 
            className={`${darkMode ? "text-indigo-400" : "text-indigo-600"} font-semibold`}
            whileHover={{ scale: 1.05 }}
          >
            MERN stack
          </motion.span>{" "}
          and{" "}
          <motion.span 
            className={`${darkMode ? "text-indigo-400" : "text-indigo-600"} font-semibold`}
            whileHover={{ scale: 0.5 }}
          >
            Flutter
          </motion.span>. I build scalable and intuitive software, currently pursuing MCA at LJ University.
        </p>
        <motion.p 
          className="text-sm italic opacity-80"
          whileHover={{ opacity: 1 }}
        >
          "Code with purpose. Build with passion."
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default About;