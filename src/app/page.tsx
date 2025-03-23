"use client";

// local
import { AboutMe } from "@/components/custom/about";
import { Certifications } from "@/components/custom/certifications";
import { Education } from "@/components/custom/education";
import { Experience } from "@/components/custom/experience";
import { Header } from "@/components/custom/header";
import { LanguagesAndTools } from "@/components/custom/languages-and-tools";
import { Projects } from "@/components/custom/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <Header />

        <main className="space-y-10">
          <section className="space-y-10" id="about-me">
            <AboutMe />
          </section>

          <Experience />
          <Education />
          <Projects />
          <LanguagesAndTools />
          <Certifications />

          <p className="text-gray-500">© 2025 Neil Francis Palmares</p>
        </main>
      </div>
    </div>
  );
}
