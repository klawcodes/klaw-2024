'use client'

import React from 'react'
import { DiReact, DiHtml5, DiCss3, DiJsBadge, DiPython } from "react-icons/di"
import { SiBlender, SiNextdotjs, SiElectron, SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects } from "react-icons/si";
import { useState, useEffect } from 'react'

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

    const handleCategoryChange = (category: string) => {
      setSelectedCategory(category);
    };

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      handleResize(); // Set initial window width

      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <>
      <div className="flex justify-center items-center h-auto">
        <div className="bg-[#ffecd6] w-[1100px] h-auto flex flex-col gap-x-[100px] rounded-[30px] px-5">
          <div className="flex items-end">
            <h1 className="soulmaze red text-[5rem] w-[400px] leading-[5rem] mt-2">
              FEATURED WORKS!
            </h1>
            <div onContextMenu={(e) => e.preventDefault()}>
              <picture onDragStart={(e) => e.preventDefault()}>
                <source
                  srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp"
                  type="image/webp"
                />
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif"
                  alt="🔥"
                  width="86"
                  height="86"
                />
              </picture>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mt-5"
          >
            <div className="flex flex-wrap space-x-5 mb-10 max-[640px]:grid max-[640px]:grid-cols-2 max-[640px]:gap-x-5 max-[640px]:gap-y-5 max-[640px]:space-x-0 max-[640px]:text-[5px]">
              <button
                className={`berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out max-[390px]:text-[9px] 
                    ${
                      selectedCategory === "ALL"
                        ? "bg-[#fffab7] text-[#fb615c]"
                        : ""
                    } 
                    ${
                      windowWidth <= 640
                        ? "text-[10px] px-[3.5rem] py-[0.5rem]"
                        : ""
                    }`}
                onClick={() => handleCategoryChange("ALL")}
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                ALL
              </button>
              <button
                className={`berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out max-[390px]:text-[9px]
                    ${
                      selectedCategory === "KLAW"
                        ? "bg-[#fffab7] text-[#fb615c]"
                        : ""
                    } 
                    ${selectedCategory === "KLAW" && "text-[#2d3250]"} 
                    ${
                      windowWidth <= 640
                        ? "text-[10px] px-[3.5rem] py-[0.5rem]"
                        : ""
                    }`}
                onClick={() => handleCategoryChange("KLAW")}
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                KLAW
              </button>
              <button
                className={`berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out max-[390px]:text-[9px]
                    ${
                      selectedCategory === "RIOT REVENGER"
                        ? "bg-[#fffab7] text-[#fb615c]"
                        : ""
                    } 
                    ${selectedCategory === "RIOT REVENGER" && "text-[#2d3250]"} 
                    ${
                      windowWidth <= 640
                        ? "text-[10px] px-[3.5rem] py-[0.5rem]"
                        : ""
                    }`}
                onClick={() => handleCategoryChange("RIOT REVENGER")}
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                RIOT REVENGER
              </button>
              <button
                className={`berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out max-[390px]:text-[9px]
                    ${
                      selectedCategory === "NEON PAPER KID"
                        ? "bg-[#fffab7] text-[#fb615c]"
                        : ""
                    } 
                    ${selectedCategory === "NEON PAPER KID" && "text-[#2d3250]"} 
                    ${
                      windowWidth <= 640
                        ? "text-[10px] px-[3.5rem] py-[0.5rem]"
                        : ""
                    }`}
                onClick={() => handleCategoryChange("NEON PAPER KID")}
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                NEON PAPER KID
              </button>
              <button
                className={`berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out max-[390px]:text-[9px]
                    ${
                      selectedCategory === "MIDNIGHT KOALA"
                        ? "bg-[#fffab7] text-[#fb615c]"
                        : ""
                    } 
                    ${selectedCategory === "MIDNIGHT KOALA" && "text-[#2d3250]"} 
                    ${
                      windowWidth <= 640
                        ? "text-[10px] px-[3.5rem] py-[0.5rem]"
                        : ""
                    }`}
                onClick={() => handleCategoryChange("MIDNIGHT KOALA")}
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                MIDNIGHT KOALA
              </button>
            </div>
            <div
              className="py-5 grid grid-cols-4 gap-y-[6rem] max-[640px]:grid max-[640px]:grid-cols-1 max-[640px]:gap-y-[3rem]"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div
                className={`${
                  selectedCategory === "ALL" || selectedCategory === "KLAW"
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="flex items-center mb-3">
                  <h2 className="soulmaze mr-2 text-[20px] blue">
                    CAPRES FACTS
                  </h2>
                  <DiHtml5 title="HTML" className="icon mb-1 blue" />
                  <DiCss3 title="CSS" className="icon mb-1 blue" />
                </div>
                <p className="berkeley mb-3 text-[13px] w-[230px] h-[120px]">
                  Capres Facts is a website that showcases facts about
                  presidential candidates (capres) who will be running in the
                  2024 elections.
                </p>
                <a
                  href="https://github.com/klawcodes/capres-facts-web"
                  target="_blank"
                >
                  <button className="berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">
                    VIEW WORK
                  </button>
                </a>
              </div>
              <div
                className={`${
                  selectedCategory === "ALL" || selectedCategory === "KLAW"
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="flex items-center mb-3">
                  <h2 className="soulmaze mr-2 text-[20px] blue">LARQ API</h2>
                  <DiJsBadge title="Javascript" className="icon mb-1 blue" />
                </div>
                <p className="berkeley mb-3 text-[13px] w-[230px] h-[120px]">
                  a JSON based API that you get to search the landscape of every
                  famous city in Asia,
                  <br /> want to try it? <br /> [Under Development]
                </p>
                <a href="https://github.com/klawcodes/larq-api" target="_blank">
                  <button className="berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">
                    VIEW WORK
                  </button>
                </a>
              </div>
              <div
                className={`${
                  selectedCategory === "ALL" || selectedCategory === "KLAW"
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="flex items-center mb-3">
                  <h2 className="soulmaze mr-2 text-[20px] blue">
                    HOLOLIVE ID
                  </h2>
                  <DiReact title="React JS" className="icon mb-1 blue" />
                  <DiHtml5 title="HTML" className="icon mb-1 blue" />
                  <DiCss3 title="CSS" className="icon mb-1 blue" />
                </div>
                <p className="berkeley mb-3 text-[13px] w-[230px] h-[120px]">
                  Unofficial Hololive ID Website.
                </p>
                <a
                  href="https://github.com/klawcodes/holoid-website"
                  target="_blank"
                >
                  <button className="berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">
                    VIEW WORK
                  </button>
                </a>
              </div>
              <div
                className={`${
                  selectedCategory === "ALL" || selectedCategory === "KLAW"
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="flex items-center mb-3">
                  <h2 className="soulmaze mr-2 text-[20px] blue">
                    AWAS IMSAK!
                  </h2>
                  <SiNextdotjs title="Next JS" className="icon mb-1 blue" />
                  <DiHtml5 title="HTML" className="icon mb-1 blue" />
                  <DiCss3 title="CSS" className="icon mb-1 blue" />
                </div>
                <p className="berkeley mb-3 text-[13px] w-[230px] h-[120px]">
                  Your loyal companion during Ramadhan. Discover the
                  imsak and prayer schedules.
                </p>
                <a
                  href="https://github.com/klawcodes/awas-imsak"
                  target="_blank"
                >
                  <button className="berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">
                    VIEW WORK
                  </button>
                </a>
              </div>
              <div
                className={`${
                  selectedCategory === "ALL" || selectedCategory === "KLAW"
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="flex items-center mb-3">
                  <h2 className="soulmaze mr-2 text-[18px] blue">
                    HAND SIGN DETECTOR
                  </h2>
                  <DiPython title="Python" className="icon mb-1 blue" />
                </div>
                <p className="berkeley mb-3 text-[13px] w-[230px] h-[120px]">
                  your go-to Python-powered app! Seamlessly identify and
                  interpret hand signs with ease. [Under Development]
                </p>
                <a
                  href="https://github.com/klawcodes/hand-sign-detector"
                  target="_blank"
                >
                  <button className="berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">
                    VIEW WORK
                  </button>
                </a>
              </div>
              <div
                className={`${
                  selectedCategory === "ALL" || selectedCategory === "KLAW"
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="flex items-center mb-3">
                  <h2 className="soulmaze mr-2 text-[20px] blue">REVENGER</h2>
                  <DiReact title="React JS" className="icon mb-1 blue" />
                  <DiHtml5 title="HTML" className="icon mb-1 blue" />
                  <DiCss3 title="CSS" className="icon mb-1 blue" />
                </div>
                <p className="berkeley mb-3 text-[13px] w-[230px] h-[120px]">
                  Portfolio website for the one and only RIOT REVENGER.
                </p>
                <a
                  href="https://github.com/klawcodes/revenger.asia"
                  target="_blank"
                >
                  <button className="berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">
                    VIEW WORK
                  </button>
                </a>
              </div>
              <div
                className={`${
                  selectedCategory === "ALL" ||
                  selectedCategory === "RIOT REVENGER"
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="flex items-center mb-3">
                  <h2 className="soulmaze mr-2 text-[20px] blue">DEMONS.</h2>
                  <SiBlender title="Blender" className="icon mb-1 blue" />
                  <SiAdobeillustrator
                    title="Adobe Illustrator"
                    className="icon mb-1 blue ml-1"
                  />
                </div>
                <p className="berkeley mb-3 text-[13px] w-[230px] h-[120px]">
                  -
                </p>
                <a
                  href="https://www.instagram.com/p/C2E-mUryfr9/"
                  target="_blank"
                >
                  <button className="berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">
                    VIEW WORK
                  </button>
                </a>
              </div>
              <div
                className={`${
                  selectedCategory === "ALL" ||
                  selectedCategory === "RIOT REVENGER"
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="flex items-center mb-3">
                  <h2 className="soulmaze mr-2 text-[20px] blue">
                    BURN IN HELL.
                  </h2>
                  <SiBlender title="Blender" className="icon mb-1 blue" />
                  <SiAdobeillustrator
                    title="Adobe Illustrator"
                    className="icon mb-1 blue ml-1"
                  />
                </div>
                <p className="berkeley mb-3 text-[13px] w-[230px] h-[120px]">
                  -
                </p>
                <a
                  href="https://www.instagram.com/p/C0Rycx-yS-K/?img_index=1"
                  target="_blank"
                >
                  <button className="berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">
                    VIEW WORK
                  </button>
                </a>
              </div>
              <div
                className={`${
                  selectedCategory === "ALL" ||
                  selectedCategory === "NEON PAPER KID"
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="flex items-center mb-3">
                  <h2 className="soulmaze mr-2 text-[20px] blue">
                    JIMMY BROWN
                  </h2>
                  <SiAdobephotoshop
                    title="Adobe Photoshop"
                    className="icon mb-1 blue"
                  />
                </div>
                <p className="berkeley mb-3 text-[13px] w-[230px] h-[120px]">
                  -
                </p>
                <a
                  href="https://www.instagram.com/p/CgHOuMgByjE/"
                  target="_blank"
                >
                  <button className="berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">
                    VIEW WORK
                  </button>
                </a>
              </div>
              <div
                className={`${
                  selectedCategory === "ALL" ||
                  selectedCategory === "NEON PAPER KID"
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="flex items-center mb-3">
                  <h2 className="soulmaze mr-2 text-[20px] blue">OSA</h2>
                  <SiAdobephotoshop
                    title="Adobe Photoshop"
                    className="icon mb-1 blue"
                  />
                  <SiAdobeaftereffects
                    title="Adobe After Effects"
                    className="icon mb-1 blue ml-1"
                  />
                </div>
                <p className="berkeley mb-3 text-[13px] w-[230px] h-[120px]">
                  -
                </p>
                <a
                  href="https://www.instagram.com/p/CyLFtL3SmIT/?img_index=1"
                  target="_blank"
                >
                  <button className="berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">
                    VIEW WORK
                  </button>
                </a>
              </div>
              <div
                className={`${
                  selectedCategory === "ALL" ||
                  selectedCategory === "MIDNIGHT KOALA"
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="flex items-center mb-3">
                  <h2 className="soulmaze mr-2 text-[20px] blue">PLEASE? EP</h2>
                </div>
                <p className="berkeley mb-3 text-[13px] w-[230px] h-[120px]">
                  -
                </p>
                <a
                  href="https://open.spotify.com/album/2c0ZeoRaVQEq54gMlaLfEN?si=azcRbQFuQKur59y0n6vhYQ"
                  target="_blank"
                >
                  <button className="berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">
                    VIEW WORK
                  </button>
                </a>
              </div>
              <div
                className={`${
                  selectedCategory === "ALL" ||
                  selectedCategory === "MIDNIGHT KOALA"
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="flex items-center mb-3">
                  <h2 className="soulmaze mr-2 text-[20px] blue">
                    AGAIN & AGAIN
                  </h2>
                </div>
                <p className="berkeley mb-3 text-[13px] w-[230px] h-[120px]">
                  -
                </p>
                <a
                  href="https://open.spotify.com/track/3wuXIxTSae466J8RUFOidK?si=f53a6fc1d2974d76"
                  target="_blank"
                >
                  <button className="berkeley bg-[#fb615c] hover:bg-[#fffab7] text-[#fffab7] hover:text-[#fb615c] py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">
                    VIEW WORK
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works