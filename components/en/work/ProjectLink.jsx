"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectLink({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 100 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/en/project/${project.slug}`}
        className={`flex group flex-col items-center justify-center cursor-pointer transition duration-200 ease-in-out opacity-95 dark:opacity-80 hover:opacity-100 hover:scale-[1.03] `}
      >
        <div className=" projectLoad h-[200px] w-full max-w-[400px] lg:max-w-none ">
          <Image
            src={project.mainImg}
            fill
            sizes="20vw"
            // loading="eager"
            className="rounded-2xl duration-500 group-hover:rounded-sm"
            style={{ objectFit: "cover" }}
            alt={project.slug}
          />
        </div>
        <div className=" text-center pt-3 lg:w-2/3 text-lg md:text-2xl font-bold font-catamaran text-black dark:text-textMain transition duration-200 group-hover:text-main">
          {project.name}
        </div>
        <div className=" text-center lg:w-5/6 tracking-wider text-[14px] md:text-[16px] text-gray-900 font-bold dark:font-medium dark:text-textSub3">
          {project.descriptionShort}
        </div>
      </Link>
    </motion.div>
  );
}
