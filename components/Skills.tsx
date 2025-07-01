"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

const Skills = () => {
  const [colorIndices, setColorIndices] = useState<number[]>([]);

  useEffect(() => {
    // Initialize with random colors
    const initialColors = skills.map(() => Math.floor(Math.random() * 7));
    setColorIndices(initialColors);
    
    // Change colors every 3 seconds
    const interval = setInterval(() => {
      const newColors = skills.map(() => Math.floor(Math.random() * 7));
      setColorIndices(newColors);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const heatColors = [
    "bg-green-800 text-white", 
    "bg-yellow-600 text-white",
    "bg-red-600 text-white",
    "bg-green-200 text-gray-800", 
    "bg-yellow-300 text-gray-800",
    "bg-red-300 text-gray-800",
    "bg-purple-500 text-white dark:bg-purple-700",
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Skills Heatmap</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className={`p-4 rounded-lg text-sm font-medium text-center cursor-pointer transition-all duration-500 hover:scale-105 hover:brightness-125 shadow ${
                heatColors[colorIndices[index] || 0]
              }`}
              style={{ userSelect: "none" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.25 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;