"use client";

import React from "react";
import { useEffect } from "react";
import Image from "next/image";

const Contact = () => {
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
      <div className="flex justify-center items-center h-auto">
        <div className="bg-[#2d3250] w-[1100px] h-auto flex flex-col rounded-[30px] px-5">
          <div className="flex justify-around">
            <h1 className="soulmaze cream text-[4rem]">HIT ME UP!</h1>
            <div className="flex gap-x-5">
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
                  className="mr-[0.5rem] forsvg"
                />
                <h1 className="font-bold hover:underline">
                  <a href="mailto:hi@klaw.my.id" target="_blank">
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
                  className="mr-[0.5rem] forsvg"
                />
                <h1 className="font-bold hover:underline">
                  <a href="https://github.com/klawcodes" target="_blank">
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
                  className="mr-[0.5rem] forsvg"
                />
                <h1 className="font-bold hover:underline">
                  <a href="https://twitter.com/0xKlaw" target="_blank">
                    @0xKlaw
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
