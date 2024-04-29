"use client";

import React from "react";
import Image from "next/image";

const SocialMedia = () => {
    const Icons = {
        width: "25px",
        height: "auto",
        "@media (min-width: 360px)": {
          width: "5px", // Ubah lebar gambar saat lebar layar <= 640px
        },
        fill: "white",
      };
  return (
    <>
      <div className="flex gap-x-5 max-[640px]:flex-col max-[640px]:gap-y-5 max-[640px]:mb-5">
        <div
          className="email flex text-[1.7rem] items-center cream berkeley"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <Image
            src="https://www.svgrepo.com/show/533208/mail-heart.svg"
            alt="email"
            style={Icons}
            width={0}
            height={0}
            draggable={false}
            className="mr-[0.5rem] forsvg"
          />
          <h1 className="font-bold">
            <a
              href="mailto:hi@klaw.my.id"
              target="_blank"
              className="selectedLink"
            >
              hi@klaw.my.id
            </a>
          </h1>
        </div>
        <div
          className="email flex text-[1.7rem] items-center cream berkeley"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <Image
            src="https://www.svgrepo.com/show/509967/github.svg"
            alt="github"
            style={Icons}
            width={0}
            height={0}
            draggable={false}
            className="mr-[0.5rem] forsvg"
          />
          <h1 className="font-bold">
            <a
              href="https://github.com/klawcodes"
              target="_blank"
              className="selectedLink"
            >
              klawcodes
            </a>
          </h1>
        </div>
        <div
          className="email flex text-[1.7rem] items-center cream berkeley"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
            alt="x"
            style={Icons}
            width={0}
            height={0}
            draggable={false}
            className="mr-[0.5rem] forsvg"
          />
          <h1 className="font-bold ">
            <a
              href="https://twitter.com/0xKlaw"
              target="_blank"
              className="selectedLink"
            >
              @0xKlaw
            </a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
