"use client";

import { useState, useEffect } from "react";
import React, { ReactNode } from "react";

import LangButton from "../langButton/page";

interface HomepageTitleProps {
  children: ReactNode;
}

const HomepageTitle = ({ children }: HomepageTitleProps) => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === "...") return ".";
        else if (prevDots === "..") return "...";
        else return "..";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 444) {
        setShowDiv(false);
      } else {
        setShowDiv(true);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once on component mount to set initial state
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [showScrollText, setShowScrollText] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 444) {
        setShowScrollText(true);
      } else {
        setShowScrollText(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once on component mount to set initial state
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="parallax h-screen">
        {showDiv && (
          <div className="flex items-end justify-center h-screen">
            <div className="flex w-full justify-between items-center mb-2 text-[.9rem] max-[640px]:text-[.7rem] mx-5 berkeley">
              <h1 className="">🌏 based in bekasi</h1>
              <h1 className="">{children}{dots}</h1>
              <LangButton />
            </div>
          </div>
        )}
        {showScrollText && (
          <div className="cream berkeley mx-[5rem] max-[640px]:mx-[1rem] mb-2 text-[.9rem] max-[640px]:text-[.7rem] h-screen flex flex-col items-center justify-end">
            <h1 className="text-center">{children}</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default HomepageTitle;
