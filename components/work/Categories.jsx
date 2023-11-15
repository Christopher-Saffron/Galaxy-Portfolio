"use client";
import { useState } from "react";
// import Checkbox from "./Checkbox";
import Checkbox2 from "./Checkbox2";
import Projects from "./Projects";

export default function Categories() {
  const [showCategories, setShowCategories] = useState(false);
  // const categoryRef = useRef(null);
  return (
    <div className="test">
      <p className=" textTitle mb-7">My Work</p>
      <div className="  flex flex-wrap justify-center font-bold items-center textSub2">
        <div className="mainWorkCategory mainWorkCategory-active">
          <div className=" border-b-2 py-3 border-main">Web Development</div>
        </div>
        {/* <div className="pause" /> */}
        <div className="mainWorkCategory">3D Models</div>
        {/* <div className="pause" /> */}
        <div className="mainWorkCategory">FIGMA Designs</div>
        {/* <div className="pause" /> */}
        <div className="mainWorkCategory">Scripts</div>
        {/* <div className="pause" /> */}
        <div className="mainWorkCategory">Traffic Design</div>
      </div>
      <div className="my-4">
        <Checkbox2 onChange={setShowCategories} text={"Show Categories?"} />
      </div>
      {showCategories && <CategoriesBox />}

      <div className="filteredProjects relative text-[24px] text-textSub2 font-bold pb-3 w-fit">
        <span>Filtered Projects</span>
      </div>
    </div>
  );
}

function CategoriesBox() {
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
              <Checkbox2 text={"React"} onChange={() => {}} />
              <Checkbox2 text={"Vue.js"} onChange={() => {}} />
              <Checkbox2 text={"Three.js"} onChange={() => {}} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Front-end Frameworks</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Next.js"} onChange={() => {}} />
              <Checkbox2 text={"Nuxt.js"} onChange={() => {}} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Back-end</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Node.js"} onChange={() => {}} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Back-end Frameworks</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Express.js"} onChange={() => {}} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">State Management</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Redux"} onChange={() => {}} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Testing Frameworks</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Jest"} onChange={() => {}} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Databases</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"MongoDB"} onChange={() => {}} />
              <Checkbox2 text={"Firebase"} onChange={() => {}} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Design</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"FIGMA"} onChange={() => {}} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">CI/CD</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Vercel"} onChange={() => {}} />
              <Checkbox2 text={"Heroku"} onChange={() => {}} />
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="text-main text-base my-2 ">Additional</p>
          <div className="category-boxes-holder">
            <div className="category-box flex flex-col gap-2">
              <Checkbox2 text={"Tailwind"} onChange={() => {}} />
              <Checkbox2 text={"SCSS"} onChange={() => {}} />
              <Checkbox2 text={"Blender"} onChange={() => {}} />
              <Checkbox2 text={"Typescript"} onChange={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
