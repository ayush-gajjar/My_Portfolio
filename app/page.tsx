"use client";

import React, { useEffect, useState } from "react";
import {
  Moon,
  SunMedium,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "react-lottie";
import animationData from "@/public/lotties/coding.json";
import { FaGithub, FaLinkedin, FaInstagram, FaQuoteLeft } from "react-icons/fa";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  const glassCard =
    "bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 p-6 transition duration-300 hover:scale-[1.02] hover:shadow-xl";

  const sectionFade = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const projects = [
    {
      title: "StayMate PG App",
      tech: "Flutter",
      desc: "Manages PG rooms and rent, built in Flutter & Firebase.",
      link: "https://github.com/stockbuddy07/pg_helper",
    },
    {
      title: "Inventory Tool",
      tech: "React",
      desc: "Track stock and roles in real-time using Firebase.",
      link: "https://github.com/stockbuddy07/Inventory_manager",
    },
    {
      title: "Clothing E-Commerce",
      tech: "DotNot",
      desc: "Storefront with categories and products & Deployment Ready !!.",
      link: "https://github.com/ayushgajjar123/ecommerce-dotnot",
    },
    {
      title: "Spotify Clone",
      tech: "HTML | CSS | JS",
      desc: "A Music Player Clone.",
      link: "https://github.com/ayush101x/Spotify--Clone--Project-2",
    },
    {
      title: "UltraEdits Clone",
      tech: "HTML | CSS ",
      desc: "UltraEdit is a text editor and hex editor for Microsoft.",
      link: "https://github.com/ayush101x/website_learning/tree/main/Project-ULTRAEDIT--WEBSITE--CLONE",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Node",
    "MongoDB",
    "Flutter",
    "PHP",
    "Python",
    "Java",
    "MySQL",
  ];

  const testimonials = [
    {
      name: "Ravi Sharma",
      text: "Ayush is a highly dedicated developer. His ability to manage complex problems and provide clean, scalable solutions is outstanding.",
    },
    {
      name: "Neha Verma",
      text: "He always exceeds expectations and communicates ideas clearly. It's a pleasure working with him!",
    },
  ];

  return (
    <main
      className={`${
        darkMode ? "bg-[#0f1117] text-white" : "bg-[#f5f5f7] text-black"
      } transition-all duration-500`}
    >
      {/* Header */}
      <header
        className={`fixed w-full z-50 ${
          darkMode ? "bg-white/5" : "bg-white/80"
        } backdrop-blur-md shadow-md`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Ayush Gajjar</h1>
          <nav className="space-x-6 font-medium hidden md:block">
            {["about", "skills", "projects", "testimonials", "contact"].map(
              (sec) => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {sec.toUpperCase()}
                </a>
              )
            )}
          </nav>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-indigo-500 text-white shadow hover:scale-110 transition"
            >
              {darkMode ? (
                <SunMedium className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              className={`fixed top-0 right-0 h-full w-64 z-50 p-6 flex flex-col shadow-xl ${
                darkMode ? "bg-black text-white" : "bg-white text-black"
              }`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  aria-label="close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-4 font-medium">
                {["about", "skills", "projects", "testimonials", "contact"].map(
                  (sec) => (
                    <a
                      key={sec}
                      href={`#${sec}`}
                      onClick={() => setSidebarOpen(false)}
                      className="hover:text-indigo-500"
                    >
                      {sec.toUpperCase()}
                    </a>
                  )
                )}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
        <motion.div initial="hidden" animate="show" variants={sectionFade}>
          <div className="mb-6">
            <Lottie options={{ loop: true, autoplay: true, animationData }} height={300} width={300} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hey, I’m Ayush Gajjar 🚀</h1>
          <p className="text-xl mb-6">
            I’m a{" "}
            <span className="font-semibold text-indigo-500">
              <Typewriter
                words={["Software Developer", "MERN Stack Dev", "Flutter App Builder", "MCA Student"]}
                loop
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <a href="#projects">
            <Button className="bg-indigo-500 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-600">
              View Projects
            </Button>
          </a>
        </motion.div>
      </section>

      {/* About */}
      <motion.section
        id="about"
        className="py-20 px-6 max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="show"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        <motion.div
          className="mb-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-60 h-60 sm:w-72 sm:h-72 rounded-full border-4 border-indigo-500 shadow-2xl object-cover"
          />
        </motion.div>
        <div className="flex justify-center space-x-20 mb-3">
          <a href="https://github.com/ayushgajjar123" target="_blank">
            <FaGithub className="text-2xl hover:text-indigo-600 transition text-indigo-500" />
          </a>
          <a href="https://www.linkedin.com/in/ayushgajjar123" target="_blank">
            <FaLinkedin className="text-2xl hover:text-indigo-600 transition text-indigo-500" />
          </a>
          <a href="https://instagram.com/ayushgajjar.exe" target="_blank">
            <FaInstagram className="text-2xl hover:text-indigo-600 transition text-indigo-500" />
          </a>
        </div>

        <div className={`${glassCard} p-6 md:p-10`}>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4 text-gray-500 dark:text-gray-400 text-sm md:text-base">
            I'm <strong>Ayush Gajjar</strong>, a full-stack developer passionate about the{" "}
            <span className="text-indigo-500 font-semibold">MERN stack</span> and{" "}
            <span className="text-indigo-500 font-semibold">Flutter</span>. I build scalable and intuitive software,
            currently pursuing MCA at LJ University.
          </p>
          <p className="text-sm italic text-gray-900 dark:text-gray-400">"Code with purpose. Build with passion."</p>
        </div>
      </motion.section>

      {/* Skills */}
    {/* SKILLS */}
      <motion.section
        id="skills"
        className="py-20 px-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Skills Heatmap</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((skill, index) => {
            const heatLevel = Math.floor(Math.random() * 3); // simulate 0‑2
            const heatColors = darkMode
              ? ["bg-green-800", "bg-yellow-600", "bg-red-600"]
              : ["bg-green-200", "bg-yellow-300", "bg-red-300"];
            const textColors = darkMode ? "text-white" : "text-black";

            return (
              <motion.div
                key={skill}
                className={`p-4 rounded-lg text-sm font-medium text-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:brightness-125 shadow ${heatColors[heatLevel]} ${textColors}`}
                style={{ userSelect: "none" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.015 }}
              >
                {skill}
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="py-20 px-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className={glassCard}>
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p className="text-sm text-indigo-500">{proj.tech}</p>
              <p className="my-2 text-gray-600 dark:text-gray-300 text-sm">{proj.desc}</p>
              <a href={proj.link} target="_blank" className="text-indigo-500 text-sm font-medium underline">
                View Code
              </a>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        className="py-20 px-6 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="show"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="space-y-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className={`${glassCard} relative`}>
              <FaQuoteLeft className="absolute top-4 left-4 text-indigo-500" />
              <p className="italic text-sm mb-3 pl-8">{t.text}</p>
              <p className="text-sm text-right font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      {/* Contact */}
      <motion.section
        id="contact"
        className="py-20 px-6 max-w-2xl mx-auto"
        initial="hidden"
        whileInView="show"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Let's Connect</h2>
        <form className="space-y-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button className="bg-indigo-500 text-white w-full hover:bg-indigo-600">Send Message</Button>
        </form>
      </motion.section>
    </main>
  );
}
