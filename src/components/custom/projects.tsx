// lib
import Image from "next/image";
import { motion } from "framer-motion";

// local
import projectPlaceholder from "../../../public/placeholder-project.png";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

type ProjectItemProps = {
  name: string;
  description: string;
  image: string;
};

const ProjectItem = ({ name, description, image }: ProjectItemProps) => {
  return (
    <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
      <CardContent className="p-4">
        <Image
          src={image}
          alt="Project Image"
          className="rounded-lg mb-4"
          width={500}
          height={300}
        />
        <div className="flex items-center justify-betweem">
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
          <Button variant="ghost" size="icon">
            →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const Projects = () => {
  const projects = [
    {
      name: "Archie",
      description: "Shell Script",
      image: projectPlaceholder.src,
    },
    {
      name: "Debbie",
      description: "Shell Script",
      image: projectPlaceholder.src,
    },
  ];

  return (
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
        {projects.map((project, index) => (
          <ProjectItem key={`${project.name}-${index}`} {...project} />
        ))}
      </div>
    </motion.section>
  );
};
