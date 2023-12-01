"use client";

import { useSearchParams } from "next/navigation";
import Categories from "@/components/pl/work/Categories";
import FilteredProjects from "@/components/pl/work/FilteredProjects";
import ProjectsWebDevOnly from "@/components/pl/work/ProjectsWebDevOnly";

export default function WorkWebDevelopment() {
  const searchParams = useSearchParams();

  // Check if there are any parameters
  const hasParams = searchParams && searchParams.toString().trim() !== "";
  return (
    <>
      {" "}
      <Categories />
      {/* <NotFoundRocket /> */}
      <div className={`test ${hasParams ? "" : "hidden"}`}>
        <FilteredProjects />
      </div>
      <div className={`test ${hasParams ? "hidden" : ""}`}>
        <ProjectsWebDevOnly />
      </div>
    </>
  );
}
