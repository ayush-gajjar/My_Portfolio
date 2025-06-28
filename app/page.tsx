"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Instagram, Moon, SunMedium } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "react-lottie";
import animationData from "@/public/lotties/coding.json";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

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
      link: "https://github.com/stockbuddy07/Inventory_manager  ",
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

  return (
    <main
      className={`${
        darkMode ? "bg-[#0f1117] text-white" : "bg-[#f5f5f7] text-black"
      } transition-all duration-500`}
    >
      {/* HEADER */}
      <header
        className={`fixed w-full z-50 ${
          darkMode ? "bg-white/5" : "bg-white/80"
        } backdrop-blur-md shadow-md`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Ayush Gajjar</h1>
          <nav className="space-x-6 font-medium relative">
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
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
        <motion.div initial="hidden" animate="show" variants={sectionFade}>
          <div className="mb-6">
            <Lottie
              options={{ loop: true, autoplay: true, animationData }}
              height={300}
              width={300}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hey, I’m Ayush Gajjar 🚀
          </h1>
          <p className="text-xl mb-6">
            I’m a{" "}
            <span className="font-semibold text-indigo-500">
              <Typewriter
                words={[
                  "Software Developer",
                  "MERN Stack Dev",
                  "Flutter App Builder",
                  "MCA Student",
                ]}
                loop
                cursor={false}
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
      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        className="py-20 px-6 max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="show"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        {/* Profile Photo with Animation */}
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

        {/* About Content */}
        <div className={`${glassCard} p-6 md:p-10`}>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4 text-gray-500 dark:text-gray-600 text-sm md:text-base">
            I'm <strong>Ayush Gajjar</strong>, a full-stack developer passionate
            about building scalable and impactful applications using the{" "}
            <span className="font-semibold text-indigo-500">MERN stack</span>{" "}
            and <span className="font-semibold text-indigo-500">Flutter</span>.
            I love transforming complex problems into clean, user-friendly
            solutions.
            <br />
            <br />
            Currently pursuing my MCA at LJ University, I focus on writing
            efficient code, learning continuously, and delivering high-quality
            work across platforms — web and mobile.
          </p>
          <p className="text-sm italic text-gray-900 dark:text-gray-600">
            "Code with purpose. Build with passion."
          </p>
        </div>
      </motion.section>
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
  <div
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
  >
    {skills.map((skill, index) => {
      // Assign random "heat" level (simulate relevance/strength)
      const heatLevel = Math.floor(Math.random() * 3); // 0, 1, or 2

      // Define color classes for heat levels
      const heatColors = darkMode
        ? ["bg-green-800", "bg-yellow-600", "bg-red-600"]
        : ["bg-green-200", "bg-yellow-300", "bg-red-300"];

      const textColors = darkMode ? "text-white" : "text-black";

      return (
        <motion.div
          key={skill}
          className={`p-4 rounded-lg text-sm font-medium text-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:brightness-125 shadow
            ${heatColors[heatLevel]} ${textColors}`}
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


      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="py-20 px-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {["All", "React", "Flutter", "HTML | CSS | JS", "DotNot", "PHP"].map(
            (tech, idx) => (
              <motion.div
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-5 py-2 rounded-full border text-sm cursor-pointer transition-all transform hover:scale-110 relative group ${
                  filter === tech
                    ? darkMode
                      ? "bg-white/20 text-white border-white/10"
                      : "bg-gray-300 text-black border-gray-400"
                    : darkMode
                    ? "bg-white/10 text-white border-white/10 hover:bg-white/20"
                    : "bg-gray-200 text-black border-gray-300 hover:bg-gray-300"
                }`}
                style={{ userSelect: "none" }}
              >
                {tech}
              </motion.div>
            )
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => filter === "All" || p.tech.includes(filter))
            .map((project, idx) => (
              <motion.div
                key={idx}
                className={glassCard}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.011 }}
              >
                <h3 className="text-xl font-semibold text-indigo-600">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.tech}
                </p>
                <p className="mb-2">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-indigo-500 hover:underline text-sm"
                >
                  View on GitHub
                </a>
              </motion.div>
            ))}
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        id="testimonials"
        className="py-20 px-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="show"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div className={glassCard} whileHover={{ scale: 1.02 }}>
            <p className="text-sm mb-2">
              “Ayush demonstrated exceptional problem-solving skills during our
              hackathon. His ability to implement a working prototype in tight
              deadlines was impressive.”
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              — Prof. Mehta, LJ University
            </p>
          </motion.div>

          <motion.div className={glassCard} whileHover={{ scale: 1.02 }}>
            <p className="text-sm mb-2">
              “He built a fully functional inventory tool for our organization —
              intuitive, fast, and robust. Highly recommended!”
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              — Client, Freelance Project
            </p>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        id="contact-resume"
        className="py-20 px-6 max-w-7xl mx-auto "
        initial="hidden"
        whileInView="show"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* RESUME SECTION - LEFT SIDE */}
          <div className={`w-full md:w-1/2 ${glassCard} flex justify-center`}>
            <div className="text-center md:text-left ">
              {/* Profile Photo */}
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-60 h-60 mx-auto rounded-full border-4 border-indigo-500 shadow-lg object-cover mb-6"
              />

              <h2 className="text-3xl font-bold mb-4">Download My Resume</h2>
              <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                Want to explore my experience & qualifications offline?
              </p>
              <a
                href="/resume-ayushgajjar.pdf"
                download
                className="flex justify-center bg-indigo-500 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-600 transition"
              >
                📄 Download Resume
              </a>
            </div>
          </div>

          {/* CONTACT SECTION - RIGHT SIDE */}
          <div className={`w-full md:w-1/2 ${glassCard}`}>
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              Let’s Connect
            </h2>
            <form
              action="https://formspree.io/f/xkgbkgoj"
              method="POST"
              className="space-y-4"
            >
              <Input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="rounded-xl"
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="rounded-xl"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="rounded-xl"
              />
              <Button
                type="submit"
                className="w-full bg-indigo-500 text-white hover:bg-indigo-600 rounded-xl"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="py-10 px-4 mt-20 text-center max-w-4xl mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/ayushgajjar123" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/ayushgajjar123" target="_blank">
            <Linkedin />
          </a>
          <a href="https://instagram.com/ayushgajjar.exe" target="_blank">
            <Instagram />
          </a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          💻 Software Developer | 🚀 MERN Stack & Flutter Dev · Ayush Gajjar · ©{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
