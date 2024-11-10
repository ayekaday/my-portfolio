import About from "@/components/about";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md-28 px-4">
      <Intro />
      <About />
    </main>
  );
}
