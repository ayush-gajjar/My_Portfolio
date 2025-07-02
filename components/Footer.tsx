"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-10 px-4 mt-20 text-center max-w-4xl mx-auto">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/ayush101x" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/ayushgajjar123" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
        <a href="https://instagram.com/ayushgajjar.exe" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        💻 Software Developer | 🚀 MERN Stack & Flutter Dev · Ayush Gajjar · ©{" "}
        {year ? year : ""}
      </p>
    </footer>
  );
};

export default Footer;
