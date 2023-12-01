import Image from "next/image";

export default function Offer() {
  return (
    <div className="test  my-3">
      <p className=" textTitle mb-7">What can I offer?</p>
      <div className=" font-catamaran text-base font-bold flex flex-col gap-3">
        <div className="flex  gap-8">
          <span className="offerCategory">Front-end</span>
          <span className="font-catamaran ">
            Experience with{" "}
            <span className="text-main">
              React ( Redux, NEXT.JS, Tailwind), Vue, Typescript, Three.js
            </span>
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="offerCategory">Design</span>
          <span>
            <span className="text-main">FIGMA</span> - For Logos, website
            blueprints and SVG icons / drawings
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="offerCategory">Back-end</span>
          <span>
            <span className="text-main">Node.js with Express.js</span> to create
            servers and run scripts on my machine. Soon I intend to learn PHP as
            well.
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="offerCategory">Databases</span>
          <span>
            <span className="text-main">MongoDB, Firebase</span> and a little
            bit of MySQL
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="offerCategory">3D Modeling</span>
          <span>
            One of the best open-source projects out there -{" "}
            <span className="text-main">Blender</span>
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="offerCategory">AutoCAD</span>
          <span>
            <span className="text-main">AutoCAD / BricsCAD</span> for traffic
            management design
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="offerCategory">Video editing</span>
          <span>
            <span className="text-main">Sony Vegas Pro</span> and{" "}
            <span className="text-main">DaVinci Resolve</span> for quick video
            editing
          </span>
        </div>
      </div>
    </div>
  );
}
