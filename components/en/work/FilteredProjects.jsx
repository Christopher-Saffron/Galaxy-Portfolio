"use client";
import { Suspense, useState } from "react";
import ProjectLink from "@/components/en/work/ProjectLink";
import PROJECTS from "@/data/data";
import { useSearchParams } from "next/navigation";
import NotFoundRocket from "@/components/en/work/NotFoundRocket";

export default function filteredProjects() {
  const searchParams = useSearchParams();
  const arrayOfParams = searchParams
    .toString()
    .toLowerCase()
    .replaceAll("=true", "")
    .split("&");

  const filteredProjects = PROJECTS.filter((project) =>
    arrayOfParams.every((tech) => project.technology.includes(tech))
  );

  return (
    <Suspense fallback={"Loading...."}>
      <div className="default-grid-item">
        <div className="rocketBorder relative text-[24px]  dark:text-textSub2 font-bold pb-3 w-fit">
          <span>Filtered Projects</span>
        </div>
      </div>
      <div className="default-grid-item  grid grid-cols-2 my-8 mb-12 gap-x-4 gap-y-24">
        {filteredProjects.map((project) => (
          <ProjectLink key={project.id} project={project} />
        ))}
      </div>
      {filteredProjects.length === 0 && <NotFoundRocket />}
    </Suspense>
  );
}
