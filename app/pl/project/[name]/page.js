import Image from "next/image";
import Link from "next/link";
import PROJECTS from "@/data/dataPL";
import ImageGallery from "@/components/pl/work/ImageGallery";

export const dynamicParams = false; // true | false,
export const revalidate = false;

export default function Page({ params }) {
  const projectData = PROJECTS.find((project) => project.slug === params.name);

  const showLinks = Boolean(
    projectData.websiteLink.length > 0 &&
      projectData.githubLink.length > 0 &&
      projectData.technology.length > 0
  );

  return (
    <main className="main-grid max-w-fit mx-auto">
      <div className="test flex items-center justify-start gap-4">
        <div className="flex items-center justify-center gap-2">
          <Link
            href="/pl/work/web-development"
            className="text-main text-base font-bold dark:font-medium"
          >
            Moje Prace
          </Link>
          <span className="dark:text-textSub2 font-bold text-base">{">"}</span>
          <Link
            href={`/pl/work/` + projectData.category}
            className="text-main text-base font-bold dark:font-medium"
          >
            {projectData.category}
          </Link>
          <span className="dark:text-textSub2 font-bold text-base">{">"}</span>
          <span className="dark:text-textSub2 font-bold text-2xl">
            {projectData.name}
          </span>
        </div>
        <div
          className={`reactTag ${
            projectData?.technology.length === 0 && "hidden"
          }`}
        >
          {projectData?.technology[0]?.toUpperCase()}
        </div>
      </div>
      <p
        className={`test indent-8  dark:text-textSub2 w-full font-catamaran font-bold ${
          showLinks ? "mt-4" : "mt-4 mb-6"
        }`}
      >
        {projectData.description}
      </p>
      <div
        className={`test projectLinksIndent my-5 mb-10 gap-4 flex flex-col justify-center ${
          showLinks ? "" : "hidden"
        }`}
      >
        <Link
          href={projectData.websiteLink}
          className="flex  gap-4 items-center cursor-pointer"
        >
          <div className="projectLink">
            {projectData.websiteLink.length > 0 && "GITHUB"}
          </div>
          <div className="text-main font-catamaran underline">
            {projectData.websiteLink}
          </div>
        </Link>
        <Link
          href={projectData.githubLink}
          className="flex  gap-4 items-center cursor-pointer"
        >
          <div className="projectLink">
            {projectData.githubLink.length > 0 && "GITHUB"}
          </div>
          <div className="text-main font-catamaran underline">
            {projectData.githubLink}
          </div>
        </Link>
        <div href="/" className="flex  gap-4 items-center ">
          <div className="projectLink">
            {projectData.technology.length > 0 && "TOOLS"}
          </div>
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
      <div className=" relative col-span-full w-2/5 min-h-[40px] mx-auto my-6 p-3 text-center  ">
        {projectData.descriptionShort}
      </div>

      <ImageGallery images={projectData.imgs} />
      {/* <div className="flex flex-wrap  w-full col-span-full justify-evenly gap-y-9 items-center mb-16">
        {projectData.imgs.length > 1 &&
          projectData.imgs.map((item, i) => (
            <div
              key={i}
              className=" relative projectSecondaryImg  projectLoad skeleton-shine  shadow-lg"
            >
              <Image
                src={item}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          ))}
      </div> */}

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
