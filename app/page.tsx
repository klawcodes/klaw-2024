import Image from "next/image";
import Team from '../components/team/page'
import About from '../components/about/page'

export default function Home() {
  return (
    <>
      <div className="parallax h-screen"></div>
      <div className="flex flex-col gap-[25px]">
        <Team />
        <About />
      </div>
    </>
  );
}
