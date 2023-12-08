import Image from "next/image";
import Link from "next/link";

export default function Summary() {
  return (
    <div className="test">
      <p className=" textTitle">Professional summary</p>
      <p className=" font-catamaran text-base">
        Passion for{" "}
        <span className="text-main dark:text-textSub3">
          work, learning and freedom to create
        </span>{" "}
        what's on my mind. Working in{" "}
        <span className="text-main">Civil Engineering</span> has enhanced my{" "}
        communication skills and problem solving abilities.{" "}
        <span className="text-main">3D Modeling</span>, video and image editing
        expertise have been my window to express myself to the world. But it's
        code that has peaked my interest.{" "}
        <span className="text-main">
          Creating web applications and scripts for automation{" "}
        </span>{" "}
        have filled my mind with thousands of ideas that are yet to be created.
      </p>

      <Link
        href="/en/work/web-development"
        className="summary-button w-fit duration-200 transition-all ease-in-out hover:bg-[#6dc4ec] hover:scale-[1.03] border-2 border-transparent shadow-md shadow-[#80c9ff] hover:border-[#4aabf3]  "
      >
        <span>See my work</span>
        <Image src="/images/threearrows.svg" alt="" width={32} height={21} />
      </Link>
    </div>
  );
}
