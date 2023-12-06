import RocketAnimation from "../RocketAnimation";

export default function NotFoundRocket() {
  return (
    <div className="test mb-12">
      <div className=" rocketBorder rocketBorder-no-rocket relative text-[24px] dark:text-textSub2 font-bold pb-3 w-fit">
        <span>Whoops!</span>
      </div>
      <div className=" max-w-[420px] mx-auto my-6 text-center flex flex-col gap-4">
        <div>
          <p className="text-[24px] dark:text-textSub2">
            Looks like I don’t have projects like that.
          </p>
          <p className="text-[#7E2B19] text-[14px]">( or it’s just a bug )</p>
        </div>
        <RocketAnimation />
        <div>
          <p className="text-[24px] dark:text-textSub2">
            Contact me - perhaps we can talk it out!
          </p>
          <p className="text-[#7E2B19] text-[14px]">( it’s a bug isn’t it? )</p>
        </div>
      </div>
    </div>
  );
}
