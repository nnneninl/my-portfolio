"use client";

// lib
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
      id="education"
    >
      <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#d0486e] to-[#7560c9] bg-clip-text text-transparent inline-block">
        Education
      </h2>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              2020 - 2024
            </p>
            <p className="font-medium">Computer Science</p>
            <p className="text-[#7560c9]">Central Philippine University</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          I graduated with a Bachelor of Science in Computer Science from
          Central Philippine University, where I specialized in Software
          Development in C#. My coursework also covered basic networking
          engineering, basic electronics and logic, database management, systems
          analysis, and software engineering. I particularly excelled in Web
          Development-related courses, which fueled my passion for building
          scalable and dynamic web applications.
        </p>
      </div>
    </motion.section>
  );
};
