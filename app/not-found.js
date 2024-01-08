import MilkyWay from "@/components/MilkyWay";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className=" -mt-[150px]">
        <MilkyWay />
      </div>
      <main className=" transition duration-200 text-2xl flex flex-col justify-center items-center gap-5 font-catamaran text-black font-bold  bg-white dark:text-textMain dark:bg-bgcolor px-3 max-w-fit mx-auto ">
        <p>The path You've entered seems to be wrong</p>
        <Link
          href="/"
          className=" link rounded-md cursor-pointer bg-main px-6 py-4 dark:text-black hover:text-white font-bold"
        >
          Go Back
        </Link>
      </main>
    </div>
  );
}
