export default function WorkType({ workType, setWorkType }) {
  return (
    <div className="test">
      <p className=" textTitle mb-7">My Work</p>
      <div className=" select-none flex flex-wrap justify-center font-bold items-center textSub2">
        <div
          className="mainWorkCategory"
          onClick={() => setWorkType("Web Development")}
        >
          <div
            className={`py-3 ${
              workType === "Web Development" && "mainWorkCategory-active"
            }`}
          >
            Web Development
          </div>
        </div>
        <div
          className="mainWorkCategory"
          onClick={() => setWorkType("3D Models")}
        >
          <div
            className={` py-3  ${
              workType === "3D Models" && "mainWorkCategory-active"
            }`}
          >
            3D Models
          </div>
        </div>
        <div
          className="mainWorkCategory"
          onClick={() => setWorkType("FIGMA Designs")}
        >
          <div
            className={` py-3  ${
              workType === "FIGMA Designs" && "mainWorkCategory-active"
            }`}
          >
            FIGMA Designs
          </div>
        </div>
        <div
          className="mainWorkCategory"
          onClick={() => setWorkType("Scripts")}
        >
          <div
            className={` py-3  ${
              workType === "Scripts" && "mainWorkCategory-active"
            }`}
          >
            Scripts
          </div>
        </div>
        <div
          className="mainWorkCategory"
          onClick={() => setWorkType("Traffic Design")}
        >
          <div
            className={` py-3  ${
              workType === "Traffic Design" && "mainWorkCategory-active"
            }`}
          >
            Traffic Design
          </div>
        </div>
      </div>
    </div>
  );
}
