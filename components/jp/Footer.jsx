import Image from "next/image";

export default function Footer() {
  return (
    <div className="test bg-gray-300 dark:bg-bgcolor2  relative py-9">
      <Image
        className=" relative left-1/2 -translate-x-1/2 hidden dark:block"
        src="/images/test2.svg"
        width={250}
        height={21}
        alt="@2023 Christopher Saffron"
      />
      <Image
        className=" relative left-1/2 -translate-x-1/2 block dark:hidden"
        src="/images/testLight2.png"
        width={250}
        height={21}
        alt="@2023 Christopher Saffron"
      />
      <Image
        src="/images/telescope.svg"
        alt="telescope"
        width={50}
        height={50}
        className="absolute right-14 bottom-full hidden dark:block"
      />
    </div>
  );
}
