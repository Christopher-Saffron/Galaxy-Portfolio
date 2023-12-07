import Image from "next/image";

export default function Offer() {
  return (
    <div className="test  my-3">
      <p className=" textTitle mb-7">何を提供できますか?</p>
      <div className=" font-catamaran text-base font-bold flex flex-col gap-3">
        <div className="flex  gap-8">
          <span className="offerCategory">フロントエンド</span>
          <span className="font-catamaran ">
            <span className="text-main">
              React ( Redux, NEXT.JS, Tailwind), Vue, Typescript, Three.js
            </span>
            の経験
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="offerCategory">デザイン</span>
          <span>
            <span className="text-main">FIGMA</span> -
            ロゴ、ウェブサイトの設計図、SVG アイコン/図面用
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="offerCategory">バックエンド</span>
          <span>
            <span className="text-main">
              Node.js と Express.js を組み合わせ
            </span>
            てサーバーを作成し、マシン上でスクリプトを実行します。近いうちにPHPも勉強するつもりです。
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="offerCategory">データベース</span>
          <span>
            <span className="text-main">MongoDB, Firebase</span> そして少しの
            MySQL
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="offerCategory">3Dモデリング</span>
          <span>
            最高のオープンソース プロジェクトの 1 つ -{" "}
            <span className="text-main">Blender</span>
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="offerCategory">AutoCAD</span>
          <span>
            交通管理設計用の
            <span className="text-main">AutoCAD / BricsCAD</span>
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="offerCategory">ビデオ編集</span>
          <span>
            <span className="text-main">Sony Vegas Pro</span> と{" "}
            <span className="text-main">DaVinci Resolve</span>
            による素早いビデオ編集
          </span>
        </div>
      </div>
    </div>
  );
}
