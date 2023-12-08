import Image from "next/image";
import Link from "next/link";

export default function Summary() {
  return (
    <div className="test">
      <p className=" textTitle">専門的な概要</p>

      <p className=" font-catamaran text-base">
        「仕事、学び、創造する自由」に情熱を持っています。{" "}
        <span className="text-main dark:text-textSub3">
          思考を形にするための、自由な創造活動をします。
        </span>{" "}
        <span className="text-main">土木工学</span>
        での経験は、コミュニケーション能力と問題解決能力を高めました。{" "}
        <span className="text-main">3Dモデリング</span>
        、ビデオ編集、画像編集のスキルは、私の世界への表現手段です。しかし、私の関心はコーディングにあります。{" "}
        <span className="text-main">
          ウェブアプリケーションや自動化スクリプトの作成
        </span>{" "}
        は、まだ作り上げるべき数々のアイデアで私の頭をいっぱいにしています。
      </p>

      <Link
        href="/en/work/web-development"
        className="summary-button w-fit duration-200 transition-all ease-in-out hover:bg-[#6dc4ec] hover:scale-[1.03] border-2 border-transparent shadow-md shadow-[#80c9ff] hover:border-[#4aabf3]  "
      >
        <span>作品を見る</span>
        <Image src="/images/threearrows.svg" alt="" width={32} height={21} />
      </Link>
    </div>
  );
}
