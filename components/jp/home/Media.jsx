import Image from "next/image";

export default function Media() {
  return (
    <div className="test my-3 mb-12">
      <p className=" textTitle mb-7">@ メディア</p>
      <div className="flex flex-col text-base gap-4">
        <div className="flex gap-8">
          <MediaLink text={"saff.christopher@gmail.com"} img={"email"} />
          <MediaLink text={"+(48) 789 133 788"} img={"phone"} style={"cover"} />
        </div>
        <div className="flex gap-8">
          <MediaLink text={"@krzysztofszafrann"} img={"facebook"} />
          <MediaLink
            text={"@szafran-krzysztof"}
            img={"linkedin"}
            style={"cover"}
          />
          <MediaLink text={"@Havir-S"} img={"github"} />
        </div>
      </div>
      <p className="text-[14px] mx-auto w-fit dark:text-textSub my-8">
        カジュアルなソーシャルメディアアカウントを「所有」していません。私は仕事関連のコンテンツを目的としてのみこれらの
        Web サイトにアクセスします。<span className="text-main">**</span>
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
      <span className=" dark:text-textMain font-catamaran font-bold">
        {text}
      </span>
    </a>
  );
}
