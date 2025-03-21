"use client";

// lib
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

// local
import { Button } from "@/components/ui/button";
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

        <main className="space-y-10">
          <section className="space-y-10" id="about-me">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#d0486e] to-[#7560c9] bg-clip-text text-transparent">
                Neil Francis Palmares
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Tech Enthusiast | Web Development & DevOps
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Bacoor City, Cavite, Philippines
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">
                Crafting Web Experiences & Exploring Cloud Tech
              </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                I'm a Computer Science graduate with a strong passion for web
                development. During my thesis, I honed my skills in frontend
                development using React.js, where I fell in love with building
                intuitive and dynamic user interfaces. I primarily develop in
                Linux using Tmux and Neovim but am flexible and comfortable
                working with Windows and Visual Studio Code when needed.
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                While my main focus is on frontend development with React, I'm
                eager to expand my skills into backend development using
                JavaScript, TypeScript, or GoLang. Additionaly, I'm highly
                interested in DevOps and cloud infrastructure, aiming to build
                scalable and efficient solutions in the future. I also have
                experience with C#, Java, and Python from my college courses,
                making me adaptable to different tech stacks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button className="rounded-full bg-gradient-to-r from-[#d0486e] to-[#7560c9] text-white transition-transform hover:scale-105">
                Resume
              </Button>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:nnneninl@proton.me"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaEnvelope className="w-6 h-6" />
              </Link>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}
