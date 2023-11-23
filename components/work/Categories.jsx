"use client";
import { useCallback, useState } from "react";
import Checkbox2 from "./Checkbox2";
import Projects from "./Projects";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Categories() {
  const router = useRouter();
  const pathName = usePathname();
  const [showCategories, setShowCategories] = useState(false);

  function handleCategories() {
    setShowCategories((prev) => !prev);

    if (showCategories === true) {
      router.push(router.pathname);
    }
  }

  function handleResetCategories() {
    router.push(pathName);
    //// A LITTLE FEATURE HAS BEEN SPOTTED - resetting it does not trigger a refresh, we can do it artifically but i need to check the react docs to see if there's any better solution
    setShowCategories(true);
  }

  return (
    <div className="test">
      <p className=" textTitle mb-7">My Work</p>
      <div className="  flex flex-wrap justify-center font-bold items-center textSub2">
        <div className="mainWorkCategory mainWorkCategory-active">
          <div className=" border-b-2 py-3 border-main">Web Development</div>
        </div>
        <div className="mainWorkCategory">3D Models</div>
        <div className="mainWorkCategory">FIGMA Designs</div>
        <div className="mainWorkCategory">Scripts</div>
        <div className="mainWorkCategory">Traffic Design</div>
      </div>
      <div className="my-4">
        <Checkbox2
          onChange={() => setShowCategories((prev) => !prev)}
          text={"Show Categories?"}
        />
      </div>
      {showCategories && (
        <>
          <button
            onClick={handleResetCategories}
            className="mb-4 font-bold cursor-pointer  inline-block bg-main text-black py-2 px-3 rounded-lg"
          >
            Reset categories
          </button>
          <CategoriesBox />
        </>
      )}
    </div>
  );
}

function CategoriesBox() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);

      if (params.get(name)) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  function onChange(obj) {
    let [key, value] = Object.entries(obj)[0];

    if (key.includes(".")) {
      key = key.replace(".", "");
    }

    router.push(pathname + "?" + createQueryString(key, value));
  }
  return (
    <div className=" flex flex-col bg-[#121111] w-full min-h-[400px] my-4 p-2 px-3 rounded-md">
      <p className="text-textSub2 font-bold text-base py-1 border-b border-[#242424] ">
        Categories
      </p>
      <div className="flex flex-wrap gap-7 mx-5 font-bold">
        <div className="  ">
          <p className="text-main text-base my-2 ">Libraries</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"React"} onChange={onChange} />
              <Checkbox2 text={"Vue.js"} onChange={onChange} />
              <Checkbox2 text={"Three.js"} onChange={onChange} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Front-end Frameworks</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Next.js"} onChange={onChange} />
              <Checkbox2 text={"Nuxt.js"} onChange={onChange} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Back-end</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Node.js"} onChange={onChange} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Back-end Frameworks</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Express.js"} onChange={onChange} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">State Management</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Redux"} onChange={onChange} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Testing Frameworks</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Jest"} onChange={onChange} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Databases</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"MongoDB"} onChange={onChange} />
              <Checkbox2 text={"Firebase"} onChange={onChange} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Design</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"FIGMA"} onChange={onChange} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">CI/CD</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Vercel"} onChange={onChange} />
              <Checkbox2 text={"Heroku"} onChange={onChange} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">UI Styling</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Tailwind"} onChange={onChange} />
              <Checkbox2 text={"SCSS"} onChange={onChange} />
              <Checkbox2 text={"MUI"} onChange={onChange} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Additional</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"GoogleAuth"} onChange={onChange} />
              <Checkbox2 text={"Blender"} onChange={onChange} />
              <Checkbox2 text={"Payments"} onChange={onChange} />
              <Checkbox2 text={"Maps"} onChange={onChange} />
              <Checkbox2 text={"Typescript"} onChange={onChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
