import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-lato">
      <Nav />
      <main className="main-grid border-2 border-gray-100 max-w-fit mx-auto">
        <div className="max-w-full border border-green-200">3D ELEMENT</div>
        <div className="test">title</div>
        <div className="test saffron">Name Card</div>
        <div className="test planet">Planet</div>
        <div className="test">summary</div>
        <div className="test">history</div>
        <div className="test">what can i offer</div>
        <div className="test">languages</div>
        <div className="test">media</div>
        <div className="test">footer</div>
      </main>
    </div>
  );
}
