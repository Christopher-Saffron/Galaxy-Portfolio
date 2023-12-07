import Image from "next/image";

export default function History() {
  return (
    <div className="test  my-3">
      <p className=" textTitle mb-7">
        <ruby>
          歴史<rt>れきし</rt>
        </ruby>
      </p>
      <div className=" font-catamaran text-base flex flex-col gap-3">
        <div className="flex  gap-8">
          <span className="dark:text-textSub3 font-lato font-bold">1999</span>
          <span className="font-catamaran ">
            <span className="text-main">ポーランドのクラコウ</span>
            で生まれました
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="dark:text-textSub3 font-lato font-bold">2018</span>

          <span>
            正式には、一時的な
            <span className="text-main">交通管理デザイナー</span>
            として働き始め、また、クラクフのAGH科学技術大学で冶金工学の勉強を開始し、一時中断しました。
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="dark:text-textSub3 font-lato font-bold whitespace-nowrap">
            2022年から現在まで
          </span>

          <span>
            <span className="text-main">SZAFRAN PROJEKT</span>
            におけるトラフィック管理の設計、およびプログラミングとデザインを側面から学び、活用することに完全に注力し、Web開発へのキャリアパスの切り替えを目標としています。
          </span>
        </div>
      </div>
    </div>
  );
}
