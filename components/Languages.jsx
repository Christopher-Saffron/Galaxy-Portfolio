import Image from "next/image";

export default function Languages() {
  return (
    <div className="test">
      <p className=" textTitle mb-7">What languages do I speak?</p>
      <div className="flex gap-5 text-base text-textSub">
        <div className="knownLanguage">
          <Image src="./images/flag_gb.svg" width={32} height={32} />
          <p>English</p>
        </div>
        <div className="knownLanguage">
          <Image src="./images/flag_pl.svg" width={32} height={32} />
          <p>Polish</p>
        </div>
        <div className="knownLanguage">
          <Image src="./images/flag_jp.svg" width={32} height={32} />
          <p>Japanese</p>
        </div>
      </div>
    </div>
  );
}
