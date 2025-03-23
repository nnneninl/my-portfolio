"use client";

// lib
import Link from "next/link";
import { motion } from "framer-motion";

// local
import { Card, CardContent } from "../ui/card";

type CertificationItemProps = {
  title: string;
  date: string;
  href: string;
};

const CertificationItem = ({ title, date, href }: CertificationItemProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export const Certifications = () => {
  const certifications = [
    {
      title: "Cybersecurity Essentials",
      date: "December 17, 2023",
      href: "/cert-cybersecurity.pdf",
    },
    {
      title: "Introduction to IoT and Digital Transformation",
      date: "July 21, 2023",
      href: "/cert-iot.pdf",
    },
    {
      title: "IT Essentials: PC Hardware and Software",
      date: "May 20, 2022",
      href: "/cert-it.pdf",
    },
    {
      title: "Commission of Civil Service Professional",
      date: "October 15, 2024",
      href: "",
    },
  ];
  return (
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
        {certifications.map((cert, index) => (
          <CertificationItem key={`${cert.title}-${index}`} {...cert} />
        ))}
      </div>
    </motion.section>
  );
};
