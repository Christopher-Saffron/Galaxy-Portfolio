import Link from "next/link";

export default function WorkType({ workType }) {
  console.log(workType);
  return (
    <div className="test">
      <p className=" textTitle mb-7">ポートフォリオ</p>
      <div className="  select-none flex flex-wrap w-fit mx-auto justify-center font-bold items-center dark:textSub2">
        <WorkLink
          link={"web-development"}
          text={"ウェブ開発"}
          workType={workType}
        />
        <WorkLink link={"3d-models"} text={"3Dモデル"} workType={workType} />

        <WorkLink link={"figma-designs"} text={"FIGMA"} workType={workType} />

        <WorkLink link={"scripts"} text={"スクリプト"} workType={workType} />

        <WorkLink
          link={"traffic-design"}
          text={"交通設計"}
          workType={workType}
        />
      </div>
    </div>
  );
}

function WorkLink({ link, text, workType }) {
  return (
    <Link scroll={false} href={`/jp/work/` + link} className="mainWorkCategory">
      <div
        className={` py-3  ${workType === link && "mainWorkCategory-active"}`}
      >
        {text}
      </div>
    </Link>
  );
}
