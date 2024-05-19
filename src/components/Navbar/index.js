"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [scrollShadow, setScrollShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollShadow(true);
      } else {
        setScrollShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `hidden md:flex items-center h-20 fixed top-0 left-0 right-0 bg-white z-10 ${
    scrollShadow ? "shadow" : ""
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-6 font-bold">
          <motion.li
            initial={{ x: "-100%", scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center hover:border-b-4"
          >
            <a href="#home">Home</a>
          </motion.li>

          <motion.li
            initial={{ y: "-100%", scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center hover:border-b-4"
          >
            <a href="#about">About</a>
          </motion.li>

          <motion.li
            animate={{ x: 0, scale: 1 }}
            initial={{ x: "-100%", scale: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center hover:border-b-4"
          >
            <a href="#educations">Educations</a>
          </motion.li>

          <motion.li
            animate={{ y: 0, scale: 1 }}
            initial={{ y: "-100%", scale: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center hover:border-b-4"
          >
            <a href="#experiences">Experiences</a>
          </motion.li>

          <motion.li
            initial={{ x: "100%", scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ delay: 0 }}
            className="flex items-center hover:border-b-4"
          >
            <a href="#skills">Skills</a>
          </motion.li>

          <motion.li
            initial={{ y: "-100%", scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center hover:border-b-4"
          >
            <a href="#projects">Projects</a>
          </motion.li>

          <motion.li
            initial={{ y: "100%", scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center hover:border-b-4"
          >
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
