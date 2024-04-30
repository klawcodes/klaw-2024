'use client'

import React, { ReactNode } from "react";
import { Link } from "react-scroll";

interface ShowMeButtonProps {
  children: ReactNode;
}

const ShowMeButton = ({ children }: ShowMeButtonProps) => {
  return (
    <>
      <Link to="about" spy={true} offset={-33} smooth={true}>
        <div className="w-40 mb-5 mt-1">
          <div className=" relative h-8 w-full rounded-full cream berkeley bg-[#fb615c]">
            <button className="w-53  absolute -left-1 -top-1 flex h-full w-full items-center justify-center gap-3 rounded-full border border-[#fb615c] bg-[#2d3250] p-2 text-xs transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-[#383e61]  lg:cursor-pointer">
              {children}
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ShowMeButton;
