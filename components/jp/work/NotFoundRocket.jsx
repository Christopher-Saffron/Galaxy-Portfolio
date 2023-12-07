import RocketAnimation from "../RocketAnimation";

export default function NotFoundRocket() {
  return (
    <div className="test mb-12">
      <div className=" rocketBorder rocketBorder-no-rocket relative text-[24px] dark:text-textSub2 font-bold pb-3 w-fit">
        <span>おっと!</span>
      </div>
      <div className=" max-w-[420px] mx-auto my-6 text-center flex flex-col gap-4">
        <div>
          <p className="text-[24px] dark:text-textSub2">
            そのようなプロジェクトはないようです。
          </p>
          <p className="text-[#7E2B19] text-[14px]">
            ( あるいはそれは単なるバグです)
          </p>
        </div>
        <RocketAnimation />
        <div>
          <p className="text-[24px] dark:text-textSub2">
            連絡してください - もしかしたら話し合えるかもしれません!
          </p>
          <p className="text-[#7E2B19] text-[14px]">( バグですよね? )</p>
        </div>
      </div>
    </div>
  );
}
