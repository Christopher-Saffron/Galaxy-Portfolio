import Image from "next/image";

export default function Media() {
  return (
    <div className="default-grid-item my-3 mb-12">
      <p className=" textTitle mb-7">@ Media</p>
      <div className="flex flex-wrap flex-col text-base gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <MediaLink text={"saff.christopher@gmail.com"} img={"email"} />
          <MediaLink text={"+(48) 789 133 788"} img={"phone"} style={"cover"} />
        </div>
        <div className="flex flex-wrap flex-col md:flex-row gap-8">
          <MediaLink text={"@krzysztofszafrann"} img={"facebook"} />
          <MediaLink
            text={"@szafran-krzysztof"}
            img={"linkedin"}
            style={"cover"}
          />
          <MediaLink text={"@Havir-S"} img={"github"} />
        </div>
      </div>
      <p className="text-[14px] text-center md:text-left mx-auto w-fit dark:text-textSub my-8">
        I do not "own" any casual social media accounts. I visit those websites
        solely for work related content.<span className="text-main">**</span>
      </p>
    </div>
  );
}

function MediaLink({ img, text, link, style }) {
  return (
    <a
      href={`${link ? link : ""}`}
      className="relative flex justify-center items-center gap-3"
    >
      <div className="relative w-5 h-5">
        <Image
          src={`/images/${img}.svg`}
          alt=""
          // width={20}
          // height={10}
          fill
          style={{ objectFit: style ? style : "" }}
        />
      </div>
      <span className=" dark:text-textMain font-catamaran font-bold whitespace-nowrap">
        {text}
      </span>
    </a>
  );
}
