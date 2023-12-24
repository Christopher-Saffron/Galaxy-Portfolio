import Image from "next/image";

export default function Languages() {
  return (
    <div className="default-grid-item  my-3">
      <p className=" textTitle mb-7">何語を話せますか?</p>
      <div className="flex flex-wrap justify-center md:justify-normal gap-5 text-base dark:text-textSub">
        <div className="knownLanguage">
          <Image
            src="./images/flag_en.svg"
            width={32}
            height={32}
            alt=""
            className="border dark:border-bgcolor shadow-md"
          />
          <p>英語</p>
        </div>
        <div className="knownLanguage">
          <Image
            src="./images/flag_pl.svg"
            width={32}
            height={32}
            alt=""
            className="border dark:border-bgcolor shadow-md"
          />
          <p>ポーランド語</p>
        </div>
        <div className="knownLanguage">
          <Image
            src="./images/flag_jp.svg"
            width={32}
            height={32}
            alt=""
            className="border dark:border-bgcolor shadow-md"
          />
          <p>日本語</p>
        </div>
      </div>
    </div>
  );
}
