import Image from "next/image";

export default function Offer() {
  return (
    <div className="default-grid-item my-3">
      <p className=" textTitle mb-7">What can I offer?</p>
      <div className=" font-catamaran text-[16px] md:text-base font-bold flex flex-col gap-6 md:gap-3">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Front-end</span>
          <span className="font-catamaran ">
            Experience with{" "}
            <span className="text-main">
              React ( Redux, NEXT.JS, Tailwind), Vue, Typescript, Three.js
            </span>
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Design</span>
          <span>
            <span className="text-main">FIGMA</span> - For Logos, website
            blueprints and SVG icons / drawings
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Back-end</span>
          <span>
            <span className="text-main">Node.js with Express.js</span> to create
            servers and run scripts on my machine. Soon I intend to learn PHP as
            well.
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Databases</span>
          <span>
            <span className="text-main">MongoDB, Firebase</span> and a little
            bit of MySQL
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">3D Modeling</span>
          <span>
            One of the best open-source projects out there -{" "}
            <span className="text-main">Blender</span>
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">AutoCAD</span>
          <span>
            <span className="text-main">AutoCAD / BricsCAD</span> for traffic
            management design
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Video editing</span>
          <span>
            <span className="text-main">Sony Vegas Pro</span> and{" "}
            <span className="text-main">DaVinci Resolve</span> for quick video
            editing
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Image Editing</span>
          <span>
            For small adjustments and editing of photos and images, I use{" "}
            <span className="text-main">Gimp</span>
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Artificial Intelligence</span>
          <span>
            I use <span className="text-main">ChatGPT</span> and{" "}
            <span className="text-main">Stable Diffusion</span>
          </span>
        </div>
      </div>
    </div>
  );
}
