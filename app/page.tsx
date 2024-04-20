'use client'

import Image from "next/image";
import Team from '../components/team/page'
import About from '../components/about/page'
import Skills from '../components/skills/page'
import Works from '../components/works/page'
import Contact from '../components/contact/page'
import { useState, useEffect } from 'react';



export default function Home() {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === '...') return '.';
        else if (prevDots === '..') return '...';
        else return '..';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="parallax h-screen">
        <div className="cream berkeley grid grid-cols-3 mx-[5rem] mb-2 text-[.9rem] items-end justify-center h-screen" style={{ scrollSnapAlign: 'end' }}>
          <h1 className="text-left">based in bekasi</h1>
          <h1 className="text-center">scroll down pls{dots}</h1>
          <h1 className="text-right">working worldwide</h1>
        </div>
      </div>
      <div className="flex flex-col gap-[5vh] mb-[5vh]">
        <Team />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
    </>
  );
}
