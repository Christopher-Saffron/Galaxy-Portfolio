import { Suspense, useState } from "react";
import ProjectLink from "./ProjectLink";
import PROJECTS from "@/data/data";

export default function Projects() {
  // const [hoveredProject, setHoveredProject] = useState(-1);

  // function handleOnHover(id) {
  //   setHoveredProject(id);
  // }
  return (
    <Suspense fallback={"Loading...."}>
      <div className="test">
        <div className="filteredProjects relative text-[24px] text-textSub2 font-bold pb-3 w-fit">
          <span>Top Projects</span>
        </div>
      </div>
      <div className="test grid grid-cols-2 my-8 mb-12 gap-x-4 gap-y-24">
        {PROJECTS.slice(0, 6).map((project) => (
          <ProjectLink key={project.id} project={project} />
        ))}
      </div>
      <div className="test">
        <div className="filteredProjects relative text-[24px] text-textSub2 font-bold pb-3 w-fit">
          <span>Other Projects</span>
        </div>
      </div>
      <div className="test grid grid-cols-2 gap-5 my-8 mb-12 gap-x-4 gap-y-9">
        {PROJECTS.slice(6, -1).map((project) => (
          <ProjectLink key={project.id} project={project} />
        ))}
      </div>
    </Suspense>
  );
}
