import History from "@/components/History";
import NameCard from "@/components/NameCard";
import Categories from "@/components/work/Categories";
import NotFoundRocket from "@/components/work/NotFoundRocket";
import Projects from "@/components/work/Projects";

export default function Page() {
  return (
    <main className="main-grid  max-w-fit mx-auto">
      {/* <Categories /> */}
      <NotFoundRocket />
      <Projects />
    </main>
  );
}
