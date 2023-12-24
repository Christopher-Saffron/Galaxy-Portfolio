"use client";

import { useSearchParams } from "next/navigation";
import Categories from "@/components/jp/work/Categories";
import FilteredProjects from "@/components/jp/work/FilteredProjects";
import ProjectsWebDevOnly from "@/components/jp/work/ProjectsWebDevOnly";

export default function WorkWebDevelopment() {
  const searchParams = useSearchParams();

  // Check if there are any parameters
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
