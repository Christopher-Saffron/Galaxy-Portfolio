"use client";

import { useSearchParams } from "next/navigation";
import Categories from "@/components/en/work/Categories";
import FilteredProjects from "@/components/en/work/FilteredProjects";
import ProjectsWebDevOnly from "@/components/en/work/ProjectsWebDevOnly";

export default function WorkWebDevelopment() {
  const searchParams = useSearchParams();

  // Check if there are any parameters, if there are, show filtered only, if not, show default projects gallery
  const hasParams = searchParams && searchParams.toString().trim() !== "";
  return (
    <>
      {" "}
      <Categories />
      {/* <NotFoundRocket /> */}
      <div className={`default-grid-item ${hasParams ? "" : "hidden"}`}>
        <FilteredProjects />
      </div>
      <div className={`default-grid-item ${hasParams ? "hidden" : ""}`}>
        <ProjectsWebDevOnly />
      </div>
    </>
  );
}
