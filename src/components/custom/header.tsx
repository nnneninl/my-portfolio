"use client";

// lib
import { motion } from "framer-motion";

// local
import { ThemeToggle } from "../ui/theme-toggle";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-between mb-12"
    >
      <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#d0486e] to-[#7560c9] text-white font-bold text-2xl">
        NF
      </div>
      <ThemeToggle />
    </motion.header>
  );
};
