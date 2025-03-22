"use client";

// lib
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

// local
import projectPlaceholder from "../../public/placeholder-project.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
          <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#d0486e] to-[#7560c9] text-white font-bold text-2xl">
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
                I&apos;m a Computer Science graduate with a strong passion for
                web development. During my thesis, I honed my skills in frontend
                development using React.js, where I fell in love with building
                intuitive and dynamic user interfaces. I primarily develop in
                Linux using Tmux and Neovim but am flexible and comfortable
                working with Windows and Visual Studio Code when needed.
              </p>

              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                While my main focus is on frontend development with React,
                I&apos;m eager to expand my skills into backend development
                using JavaScript, TypeScript, or GoLang. Additionaly, I&apos;m
                highly interested in DevOps and cloud infrastructure, aiming to
                build scalable and efficient solutions in the future. I also
                have experience with C#, Java, and Python from my college
                courses, making me adaptable to different tech stacks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full bg-gradient-to-r from-[#d0486e] to-[#7560c9] text-white transition-transform hover:scale-105 cursor-pointer">
                  Resumé
                </Button>
              </Link>
              <Link
                href="https://github.com/nnneninl"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/neil-francis-m-palmares"
                target="_blank"
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

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
            id="experience"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#d0486e] to-[#7560c9] bg-clip-text text-transparent inline-block">
              Experience
            </h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    September, 2024 - December, 2024
                  </p>
                  <p className="font-medium">
                    Intern - Construction Safety and Health Planning
                  </p>
                  <p className="text-[#7560c9]">
                    Department of Labor and Employment - Region 6
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                During my internship at the Department of Labor and Employment -
                Region 6, I was assigned to the Construction Safety and Health
                Program (CSHP) unit. I provided general front desk support,
                assisting clients and answering inquiries. My responsibilities
                included reviewing and ensuring completeness of submitted CSHP
                documents, as well as maintaining and updating detailed records
                of CSHP applications.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    February, 2024 - May, 2024
                  </p>
                  <p className="font-medium">
                    On-The-Job Trainee - IT & Network Operations
                  </p>
                  <p className="text-[#7560c9]">
                    Office of Civil Defense - Iloilo Provincial Capitol - Region
                    6
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                During my On-The-Job training, I gained hands-on experience in
                IT and network operations, including the installation of CCTV
                cameras, setting up routers and PhoneLink, and configuring
                multiple displays into a single system unit. I also worked on
                network infrastructure tasks such as Ethernet cable crimping,
                NAS interface familiarization, and internet installation.
                Additionally, I developed skills in ArcGIS basics and
                geo-tracking, as well as OS installation for both Linux and
                Windows systems.
              </p>
            </div>
          </motion.section>

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
                  <p className="text-[#7560c9]">
                    Central Philippine University
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I graduated with a Bachelor of Science in Computer Science from
                Central Philippine University, where I specialized in Software
                Development in C#. My coursework also covered basic networking
                engineering, basic electronics and logic, database management,
                systems analysis, and software engineering. I particularly
                excelled in Web Development-related courses, which fueled my
                passion for building scalable and dynamic web applications.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
            id="projects"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#d0486e] to-[#7560c9] bg-clip-text text-transparent inline-block">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={projectPlaceholder}
                    alt="Project Image"
                    className="rounded-lg mb-4"
                  ></Image>
                  <div className="flex items-center justify-betweem">
                    <div>
                      <h3 className="font-medium">My Arch Install</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Shell Script
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={projectPlaceholder}
                    alt="Project Image"
                    className="rounded-lg mb-4"
                  ></Image>
                  <div className="flex items-center justify-betweem">
                    <div>
                      <h3 className="font-medium">Debbie</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Shell Script
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
            id="certifications"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#d0486e] to-[#7560c9] bg-clip-text text-transparent inline-block">
              Certifications
            </h2>

            <div className="grid grid-cols-1 gap-3">
              <Link
                href="/cert-cybersecurity.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">
                          Cybersecurity Essentials
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          December 17, 2023
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="/cert-iot.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">
                          Introduction to IoT and Digital Transformation
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          July 21, 2023
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="/cert-it.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">
                          IT Essentials: PC Hardware and Software
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          May 20, 2023
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">
                        Commission of Civil Service Professional
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        October 15, 2024
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-gray-500">© 2025 Neil Francis Palmares</p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
