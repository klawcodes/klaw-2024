"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [showBubble, setShowBubble] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center h-auto" id="about">
        <div className="bg-[#ffecd6] w-[1100px] h-auto flex gap-x-[100px] rounded-[30px] px-5">
          <div className="flex flex-col">
            <h1 className="soulmaze red text-[5rem] w-[400px] leading-[5rem] mt-2">
              GET TO KNOW ME!
            </h1>
            <div
              className="relative"
              onMouseEnter={() => setShowBubble(true)}
              onMouseLeave={() => setShowBubble(false)}
              onContextMenu={(e) => e.preventDefault()}
            >
              <picture onDragStart={(e) => e.preventDefault()}>
                <source
                  srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f419/512.webp"
                  type="image/webp"
                />
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f419/512.gif"
                  alt="💪"
                  width="128"
                  height="128"
                />
              </picture>
              {showBubble && (
                <>
                <div className="absolute top-0 right-[.5rem] bg-[#fffab7] p-2 rounded-md shadow-md">
                  <span role="img" aria-label="Chat Bubble" className="text-[15px] berkeley">
                    hi, i&apos;m clark. klaw&apos;s favorite <br />octopus.
                  </span>
                </div>
                </>
              )}
            </div>
          </div>
          <p className="berkeley blue w-[500px] mt-5 mb-5">
            Hey there! I`m{" "}
            <span className="red font-bold select">Muhammad Dimas</span>
            , a Junior Programmer and Digital Artist who`s all about design,
            music, and coding cool stuff. I got into programming back in 2020
            when I decided to build my own public Minecraft Server, and since
            then, I`ve been hooked! <br />
            <br />
            You`ll usually find me lost in the world of creativity, whether I`m
            crafting 3D wonders, designing eye-catching graphics, or vibing to
            my latest music creation. Programming isn`t just a hobby for me;
            it`s my passion.
            <br /> <br />
            So, Klaw, RIOT REVENGER, NEON PAPER KID, and Midnight Koala? Yup,
            those are basically my alter egos.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
