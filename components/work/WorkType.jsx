import Link from "next/link";

export default function WorkType({ workType }) {
  console.log(workType);
  return (
    <div className="test">
      <p className=" textTitle mb-7">My Work</p>
      <div className=" select-none flex flex-wrap justify-center font-bold items-center textSub2">
        <WorkLink
          link={"web-development"}
          text={"Web Development"}
          workType={workType}
        />
        <WorkLink link={"3d-models"} text={"3D Models"} workType={workType} />

        <WorkLink
          link={"figma-designs"}
          text={"FIGMA Designs"}
          workType={workType}
        />

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
    <Link href={`/work/` + link} className="mainWorkCategory">
      <div
        className={` py-3  ${workType === link && "mainWorkCategory-active"}`}
      >
        {text}
      </div>
    </Link>
  );
}
