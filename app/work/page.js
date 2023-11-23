"use client";
import History from "@/components/History";
import NameCard from "@/components/NameCard";
import Categories from "@/components/work/Categories";
import FilteredProjects from "@/components/work/FilteredProjects";
import NotFoundRocket from "@/components/work/NotFoundRocket";
import Projects from "@/components/work/Projects";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [showCategories, setShowCategories] = useState(false);
  const searchParams = useSearchParams();

  // Check if there are any parameters
  const hasParams = searchParams && searchParams.toString().trim() !== "";

  return (
    <main className="main-grid  max-w-fit mx-auto">
      <Categories />
      {/* <NotFoundRocket /> */}
      {hasParams && <FilteredProjects />}
      {!hasParams && <Projects />}
      {/* <Projects /> */}
    </main>
  );
}
