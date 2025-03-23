"use client";

// lib
import { motion } from "framer-motion";

type ExperienceItemProps = {
  date: string;
  title: string;
  company: string;
  description: string;
};

const ExperienceItem = ({
  date,
  title,
  company,
  description,
}: ExperienceItemProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-gray-600 dark:text-gray-400 text-sm">{date}</p>
          <p className="font-medium">{title}</p>
          <p className="text-[#7560c9]">{company}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export const Experience = () => {
  const experiences = [
    {
      date: "September, 2024 - December, 2024",
      title: "Intern - Construction Safety and Health Planning",
      company: "Department of Labor and Employment - Region 6",
      description:
        "During my internship at the Department of Labor and Employment - Region 6, I was assigned to the Construction Safety and Health Program (CSHP) unit. I provided general front desk support, assisting clients and answering inquiries. My responsibilities included reviewing and ensuring completeness of submitted CSHP documents, as well as maintaining and updating detailed records of CSHP applications.",
    },
    {
      date: "February, 2024 - May, 2024",
      title: "On-The-Job Trainee - IT & Network Operations",
      company: "Office of Civil Defense - Iloilo Provincial Capitol - Region 6",
      description:
        "During my On-The-Job training, I gained hands-on experience in IT and network operations, including the installation of CCTV cameras, setting up routers and PhoneLink, and configuring multiple displays into a single system unit. I also worked on network infrastructure tasks such as Ethernet cable crimping, NAS interface familiarization, and internet installation. Additionally, I developed skills in ArcGIS basics and geo-tracking, as well as OS installation for both Linux and Windows systems.",
    },
  ];

  return (
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

      {experiences.map((exp, index) => (
        <ExperienceItem key={`${exp.title}-${index}`} {...exp} />
      ))}
    </motion.section>
  );
};
