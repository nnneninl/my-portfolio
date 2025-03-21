"use client";

// lib
import { motion } from "framer-motion";

// local
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-black text-white dark:bg-white dark:text-black transition-colors duration-300 hover:font-bold">
            NF
          </div>
          <ThemeToggle />
        </motion.header>
      </div>
    </div>
  );
}
