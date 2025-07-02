"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFlutter,
  SiPhp,
  SiPython,
  SiMysql,
  SiFigma,
  SiFramer,
  SiOpenai
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Skills = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    { 
      name: "HTML", 
      icon: <SiHtml5 className="text-orange-600" />, 
      years: "5 years",
      description: "Built 50+ semantic HTML structures with SEO optimization and accessibility compliance."
    },
    { 
      name: "CSS", 
      icon: <SiCss3 className="text-blue-600" />, 
      years: "5 years",
      description: "Created complex layouts using Flexbox, Grid, and CSS animations with perfect responsiveness."
    },
    { 
      name: "JS", 
      icon: <SiJavascript className="text-yellow-600" />, 
      years: "5 years",
      description: "Developed 30+ applications using modern ES6+ features and design patterns."
    },
    { 
      name: "React", 
      icon: <SiReact className="text-blue-500" />, 
      years: "1 years",
      description: "Built 15+ production apps using React hooks, context API, and performance optimization."
    },
    { 
      name: "Node", 
      icon: <SiNodedotjs className="text-green-600" />, 
      years: "1 years",
      description: "Developed REST APIs and microservices handling 10K+ daily requests."
    },
    { 
      name: "MongoDB", 
      icon: <SiMongodb className="text-green-500" />, 
      years: "1 years",
      description: "Designed database schemas for 8+ applications with optimized queries."
    },
    { 
      name: "Flutter", 
      icon: <SiFlutter className="text-blue-400" />, 
      years: "3 years",
      description: "Created 4 cross-platform mobile apps published on both stores."
    },
    { 
      name: "PHP", 
      icon: <SiPhp className="text-purple-600" />, 
      years: "4 years",
      description: "Developed WordPress plugins and Laravel applications for enterprise clients."
    },
    { 
      name: "Python", 
      icon: <SiPython className="text-blue-500" />, 
      years: "4 years",
      description: "Built web scrapers, data pipelines, and automation scripts saving 100+ hours monthly."
    },
    { 
      name: "Java", 
      icon: <FaJava className="text-red-600" />,
      years: "3 years",
      description: "Developed Android applications and backend services for financial systems."
    },
    { 
      name: "MySQL", 
      icon: <SiMysql className="text-blue-700" />, 
      years: "4 years",
      description: "Optimized complex queries reducing response times by 70% in 3 applications."
    },
    { 
      name: "Figma", 
      icon: <SiFigma className="text-pink-600" />, 
      years: "4 years",
      description: "Designed 20+ UI/UX prototypes and design systems for web and mobile apps."
    },
    { 
      name: "Framer", 
      icon: <SiFramer className="text-purple-500" />, 
      years: "2 years",
      description: "Created interactive prototypes and no-code websites with advanced animations."
    },
    { 
      name: "ChatGPT", 
      icon: <SiOpenai className="text-green-500" />, 
      years: "2 years",
      description: "Leveraged AI for code generation, content creation, and problem solving."
    },
  ];

  const handleCardClick = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="skills" className="py-5 px-5 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-center mb-12 ">My Stack</h2>

        <div className="grid grid-cols-5 gap-10"> {/* Increased gap */}
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="perspective-1000 h-48 relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                if (flippedIndex === index) setFlippedIndex(null);
              }}
            >
              <motion.div
                className="relative w-full h-full preserve-3d"
                animate={{ 
                  rotateY: flippedIndex === index ? 180 : 0,
                  zIndex: hoveredIndex === index ? 20 : 1,
                  scale: hoveredIndex === index ? 1.3 : 1
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => handleCardClick(index)}
                style={{
                  transformOrigin: "center",
                  position: "relative"
                }}
              >
                {/* Front of Card */}
                <motion.div
                  className={`absolute backface-hidden w-full h-full p-4 rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer
                    bg-white border border-gray-500 shadow-sm`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-5xl">
                    {skill.icon}
                  </div>
                  <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.years}</span>
                </motion.div>

                {/* Back of Card */}
                <motion.div
                  className={`absolute backface-hidden w-full h-full p-4 rounded-xl flex items-center justify-center cursor-pointer
                    bg-blue-50 border border-blue-1000 shadow-sm rotate-y-180`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <p className="text-sm text-gray-700 text-center px-2">
                    {skill.description}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;