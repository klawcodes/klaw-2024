"use client";

import React, { ReactNode } from "react";
import { useState } from "react";

interface FireEmojiProps {
    children: ReactNode;
  }

const FireEmoji = ({children}: FireEmojiProps) => {
  const [showBubble, setShowBubble] = useState(false);
  return (
    <>
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
            <div className="absolute top-0 right-[.5rem] bg-[#fffab7] p-2 rounded-md shadow-md max-[640px]:right-[3rem]">
              <span
                role="img"
                aria-label="Chat Bubble"
                className="text-[15px] berkeley max-[640px]:text-[10px]"
              >
                {children}
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FireEmoji;
