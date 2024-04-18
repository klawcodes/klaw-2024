import Image from "next/image";
import Team from '../components/team/page'
import About from '../components/about/page'
import Skills from '../components/skills/page'
import Works from '../components/works/page'

export default function Home() {
  return (
    <>
      <div className="parallax h-screen"></div>
      <div className="flex flex-col gap-[5vh]">
        <Team />
        <About />
        <Skills />
        <Works />
      </div>
    </>
  );
}
