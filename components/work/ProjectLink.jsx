import Image from "next/image";
import Link from "next/link";

{
  /* <Link
      href={`/project/${project.slug}`}
      className={`flex flex-col items-center justify-center gap-3 cursor-pointer transition duration-200 ease-in-out ${
        hoveredProject === project.id ? "scale-105" : ""
      } ${
        hoveredProject !== project.id && hoveredProject !== -1
          ? "opacity-50 scale-95"
          : ""
      }`}
      onMouseEnter={() => handleOnHover(project.id)}
      onMouseLeave={() => handleOnHover(-1)}
    ></Link> */
}

export default function ProjectLink({ project }) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className={`flex group flex-col items-center justify-center cursor-pointer transition duration-200 ease-in-out opacity-80 hover:opacity-100 hover:scale-[1.03] `}
    >
      <div className=" projectLoad h-[200px] w-full skeleton-shine">
        <Image
          src={project.mainImg}
          fill
          className="rounded-2xl duration-500 group-hover:rounded-sm"
          objectFit="cover"
          alt={project.slug}
        />
      </div>
      <div className=" text-center pt-3 w-2/3 text-2xl font-bold font-catamaran text-textMain transition duration-200 group-hover:text-main">
        {project.name}
      </div>
      <div className=" text-center w-5/6 tracking-wider  text-textSub3">
        {project.descriptionShort}
      </div>
    </Link>
  );
}
