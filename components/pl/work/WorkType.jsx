import Link from "next/link";

export default function WorkType({ workType }) {
  return (
    <div className="default-grid-item">
      <p className=" textTitle mb-7">Moje prace</p>
      <div className="  select-none flex flex-wrap w-fit mx-auto  font-bold items-center justify-evenly  dark:textSub2 bg-[#121111] rounded-lg">
        <WorkLink
          link={"web-development"}
          text={"Web Development"}
          workType={workType}
        />
        <WorkLink link={"3d-models"} text={"3D Models"} workType={workType} />

        <WorkLink link={"figma-designs"} text={"FIGMA"} workType={workType} />

        <WorkLink link={"scripts"} text={"Scripts"} workType={workType} />

        <WorkLink
          link={"traffic-design"}
          text={"Traffic Design"}
          workType={workType}
        />
      </div>
    </div>
  );
}

function WorkLink({ link, text, workType }) {
  return (
    <Link scroll={false} href={`/pl/work/` + link} className="mainWorkCategory">
      <div
        className={` py-3  ${workType === link && "mainWorkCategory-active"}`}
      >
        {text}
      </div>
    </Link>
  );
}
