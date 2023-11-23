import Image from "next/image";
import Link from "next/link";

import PROJECTS from "@/data/data";
import { Suspense } from "react";
export const dynamicParams = false; // true | false,
export const revalidate = false;

export default function Page({ params }) {
  const projectData = PROJECTS.find((project) => project.slug === params.name);

  return (
    <main className="main-grid max-w-fit mx-auto">
      <div className="test flex items-center justify-start gap-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-main text-base">Work</span>
          <span className="text-textSub2 font-bold text-base">{">"}</span>
          <span className="text-textSub2 font-bold text-2xl">
            {params.name}
          </span>
        </div>
        <div className="reactTag">
          {projectData.technology[0].toUpperCase()}
        </div>
      </div>
      <p className="test indent-8 mt-4 text-textSub2 w-full font-catamaran font-bold">
        {projectData.description}
      </p>
      <div className="test projectLinksIndent mt-5 mb-10 gap-4 flex flex-col justify-center">
        <Link
          href={projectData.websiteLink}
          className="flex  gap-4 items-center cursor-pointer"
        >
          <div className="projectLink">Website</div>
          <div className="text-main font-catamaran underline">
            {projectData.websiteLink}
          </div>
        </Link>
        <Link
          href={projectData.githubLink}
          className="flex  gap-4 items-center cursor-pointer"
        >
          <div className="projectLink">GITHUB</div>
          <div className="text-main font-catamaran underline">
            {projectData.githubLink}
          </div>
        </Link>
        <div href="/" className="flex  gap-4 items-center ">
          <div className="projectLink">TOOLS</div>
          <div className="text-main font-catamaran ">
            {projectData.technology.map((item, i) => {
              if (i + 1 === projectData.technology.length) {
                return <span key={i}>{item} </span>;
              } else {
                return <span key={i}>{item}, </span>;
              }
            })}
          </div>
        </div>
      </div>
      <Link
        href={projectData.websiteLink}
        className=" relative col-span-full w-4/5 h-[400px] mx-auto projectLoad skeleton-shine cursor-pointer transition duration-200 ease-in-out opacity-80 hover:opacity-100 hover:scale-[1.04]"
      >
        <Image
          className="rounded-lg shadow-2xl"
          src={projectData.mainImg}
          alt="Project Img"
          fill
          style={{ objectFit: "cover" }}
        />
      </Link>
      <div className=" relative col-span-full w-2/5 min-h-[40px] mx-auto my-2 p-3 text-center  ">
        {projectData.descriptionShort}
      </div>

      <div className="flex flex-wrap  w-full col-span-full justify-between gap-y-9 items-center mb-16">
        {projectData.imgs.length > 1 &&
          projectData.imgs.map((item, i) => (
            <div
              key={i}
              className=" relative projectSecondaryImg  projectLoad skeleton-shine  shadow-lg"
            >
              {" "}
              <Image
                src={item}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          ))}

        {/* <div className="  projectSecondaryImg  projectLoad skeleton-shine"></div>
        <div className="  projectSecondaryImg  projectLoad skeleton-shine"></div>
        <div className="  projectSecondaryImg  projectLoad skeleton-shine"></div>
        <div className="  projectSecondaryImg  projectLoad skeleton-shine"></div>
        <div className="  projectSecondaryImg  projectLoad skeleton-shine"></div>
        <div className="  projectSecondaryImg  projectLoad skeleton-shine"></div>
        <div className="  projectSecondaryImg  projectLoad skeleton-shine"></div>
        <div className="  projectSecondaryImg  projectLoad skeleton-shine"></div>
        <div className="  projectSecondaryImg  projectLoad skeleton-shine"></div> */}
      </div>

      {/* <div className=" relative col-span-full w-2/5 h-[40px] mx-auto projectLoad skeleton-shine "></div> */}
    </main>
  );
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    name: project.slug,
    project: project,
  }));
}
