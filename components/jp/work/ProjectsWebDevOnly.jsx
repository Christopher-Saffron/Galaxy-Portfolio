import { Suspense } from "react";
import ProjectLink from "@/components/jp/work/ProjectLink";
import PROJECTS from "@/data/dataJP";

export default function ProjectsWebDevOnly() {
  return (
    <Suspense fallback={"Loading...."}>
      <div className="test">
        <div className="rocketBorder relative text-[24px] dark:text-textSub2 font-bold pb-3 w-fit">
          <span>トッププロジェクト</span>
        </div>
      </div>
      <div className="test grid grid-cols-2 my-8 mb-12 gap-x-4 gap-y-24 items-start">
        {PROJECTS.slice(0, 6).map((project) => (
          <ProjectLink key={project.id} project={project} />
        ))}
      </div>
      <div className="test">
        <div className="rocketBorder relative text-[24px] dark:text-textSub2 font-bold pb-3 w-fit">
          <span>その他のプロジェクト</span>
        </div>
      </div>
      <div className="test grid grid-cols-2 gap-5 my-8 mb-12 gap-x-4 gap-y-9 items-start">
        {PROJECTS.slice(6, -1)
          .filter((item) => item.category === "web-development")
          .map((project) => (
            <ProjectLink key={project.id} project={project} />
          ))}
      </div>
    </Suspense>
  );
}
