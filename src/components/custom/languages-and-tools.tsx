"use client";

// lib
import Image from "next/image";
import { motion } from "framer-motion";

type LanguageAndToolItemProps = {
  name: string;
  src: string;
};

const LanguageAndToolItem = ({ name, src }: LanguageAndToolItemProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Image
        src={src}
        alt={`${name} icon`}
        height={40}
        width={40}
        className="hover:scale-120 duration-300"
      />
      <p>{name}</p>
    </div>
  );
};

export const LanguagesAndTools = () => {
  const languagesAndTools = [
    {
      src: "/icons/typescript.svg",
      name: "TypeScript",
    },
    {
      src: "/icons/javascript.svg",
      name: "JavaScript",
    },
    {
      src: "/icons/go.svg",
      name: "Go",
    },
    {
      src: "/icons/react.svg",
      name: "React.js",
    },
    {
      src: "/icons/next.svg",
      name: "Next.js",
    },
    {
      src: "/icons/python.svg",
      name: "Python",
    },
    {
      src: "/icons/csharp.svg",
      name: "C#",
    },
    {
      src: "/icons/html.svg",
      name: "HTML5",
    },
    {
      src: "/icons/css.svg",
      name: "CSS3",
    },
    {
      src: "/icons/chakraui.svg",
      name: "ChakraUI",
    },
    {
      src: "/icons/mysql.svg",
      name: "MySQL",
    },
    {
      src: "/icons/postgresql.svg",
      name: "PostgreSQL",
    },
    {
      src: "/icons/git.svg",
      name: "Git",
    },
    {
      src: "/icons/neovim.svg",
      name: "Neovim",
    },
    {
      src: "/icons/vscode.svg",
      name: "Visual Studio Code",
    },
    {
      src: "/icons/arch.svg",
      name: "Arch Linux",
    },
    {
      src: "/icons/debian.svg",
      name: "Debian Linux",
    },
    {
      src: "/icons/windows.svg",
      name: "Windows",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
      id="languages-and-tools"
    >
      <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#d0486e] to-[#7560c9] bg-clip-text text-transparent inline-block">
        Languages & Tools
      </h2>

      <div className="grid grid-cols-3 gap-6 justify-center">
        {languagesAndTools.map((item, index) => (
          <LanguageAndToolItem key={`${item.name}-${index}`} {...item} />
        ))}
      </div>
    </motion.section>
  );
};
