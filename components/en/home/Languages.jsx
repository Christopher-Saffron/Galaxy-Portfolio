import Image from "next/image";

export default function Languages() {
  return (
    <div className="test  my-3">
      <p className=" textTitle mb-7">What languages do I speak?</p>
      <div className="flex gap-5 text-base dark:text-textSub">
        <div className="knownLanguage">
          <Image
            src="./images/flag_en.svg"
            width={32}
            height={32}
            className="border dark:border-bgcolor shadow-md"
          />
          <p>English</p>
        </div>
        <div className="knownLanguage">
          <Image
            src="./images/flag_pl.svg"
            width={32}
            height={32}
            className="border dark:border-bgcolor shadow-md"
          />
          <p>Polish</p>
        </div>
        <div className="knownLanguage">
          <Image
            src="./images/flag_jp.svg"
            width={32}
            height={32}
            className="border dark:border-bgcolor shadow-md"
          />
          <p>Japanese</p>
        </div>
      </div>
    </div>
  );
}
