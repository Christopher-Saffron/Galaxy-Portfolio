"use client";
import { Suspense, useState } from "react";
import ProjectLink from "./ProjectLink";
import PROJECTS from "@/data/data";
import { useSearchParams } from "next/navigation";

export default function filteredProjects() {
  const searchParams = useSearchParams();
  const arrayOfParams = searchParams
    .toString()
    .toLowerCase()
    .replaceAll("=true", "")
    .split("&");

  return (
    <Suspense fallback={"Loading...."}>
      <div className="test">
        <div className="filteredProjects relative text-[24px] text-textSub2 font-bold pb-3 w-fit">
          <span>Filtered Projects</span>
        </div>
      </div>
      <div className="test  grid grid-cols-2 my-8 mb-12 gap-x-4 gap-y-24">
        {PROJECTS.filter((project) =>
          arrayOfParams.every((tech) => project.technology.includes(tech))
        ).map((project) => (
          <ProjectLink key={project.id} project={project} />
        ))}
      </div>
    </Suspense>
  );
}
