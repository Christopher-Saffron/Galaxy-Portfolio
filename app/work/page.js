"use client";
import History from "@/components/History";
import NameCard from "@/components/NameCard";
import Categories from "@/components/work/Categories";
import FilteredProjects from "@/components/work/FilteredProjects";
import NotFoundRocket from "@/components/work/NotFoundRocket";
import Projects from "@/components/work/Projects";
import WorkType from "@/components/work/WorkType";
import WorkWebDevelopment from "@/components/work/WorkWebDevelopment";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [workType, setWorkType] = useState("Web Development");

  return (
    <main className="main-grid  max-w-fit mx-auto">
      <WorkType workType={workType} setWorkType={setWorkType} />
      {workType === "Web Development" ? (
        <WorkWebDevelopment />
      ) : workType === "3D Models" ? (
        <Projects category={"3D Models"} />
      ) : workType === "FIGMA Designs" ? (
        <Work3DModels />
      ) : workType === "Scripts" ? (
        <Work3DModels />
      ) : workType === "Traffic Design" ? (
        <Work3DModels />
      ) : (
        ""
      )}
      {/* <Categories /> */}
      {/* <NotFoundRocket /> */}
      {/* <div className={`test ${hasParams ? "" : "hidden"}`}>
        <FilteredProjects />
      </div>
      <div className={`test ${hasParams ? "hidden" : ""}`}>
        <Projects />
      </div> */}

      {/* {hasParams && <FilteredProjects />}
      {!hasParams && <Projects />} */}
      {/* <Projects /> */}
    </main>
  );
}
