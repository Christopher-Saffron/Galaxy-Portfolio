import RocketAnimation from "../RocketAnimation";

export default function NotFoundRocket() {
  return (
    <div className="test mb-12">
      <div className="rocketBorder rocketBorder-no-rocket relative text-[24px] dark:text-textSub2 font-bold pb-3 w-fit">
        <span>Whoops!</span>
      </div>
      <div className=" max-w-[420px] mx-auto my-6 text-center flex flex-col gap-4">
        <div>
          <p className="text-[24px] dark:text-textSub2">
            Wygląda na to, że nie mam takich projektów!
          </p>
          <p className="text-[#7E2B19] text-[14px]">( albo to bug )</p>
        </div>
        <RocketAnimation />
        <div>
          <p className="text-[24px] dark:text-textSub2">
            Skontaktuj się ze mną - porozmawiajmy o tym!
          </p>
          <p className="text-[#7E2B19] text-[14px]">( to bug, co nie? )</p>
        </div>
      </div>
    </div>
  );
}
