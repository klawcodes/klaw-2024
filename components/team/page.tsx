import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const Team = () => {
  return (
    <>
      <div className="flex justify-center items-center h-auto">
        <div className="bg-[#2d3250] w-[1100px] h-auto flex flex-col rounded-[30px] px-5">
          <h1 className="soulmaze cream text-[4rem]">MEET THE <span className="red">TEAM...</span></h1>
          <div className="flex justify-center mt-10">
            <div
              className="relative group flex flex-col justify-start items-start mr-[20px]"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <a
                href="https://github.com/klawcodes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <div className="h-300 relative">
                  <Image
                    src="/img/KLAW C.png"
                    width={200}
                    height={200}
                    alt="klaw"
                    className="rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="vivaldi bold text-white text-5xl text-bold">
                      Klaw.
                    </h2>
                  </div>
                </div>
              </a>
              <h2 className="text-[19px] py-[0.9rem] cream soulmaze">KLAW</h2>
              <p className="text-[12px]  cream berkeley w-[150px]">
                FRONT END DEVELOPER & BACK END A BIT
              </p>
            </div>
            <div
              className="relative group flex flex-col justify-start items-start mr-[20px]"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <a
                href="https://www.instagram.com/riotrevenger/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <div className="h-300 relative">
                  <Image
                    src="/img/RIOT REVENGER C.png"
                    width={200}
                    height={200}
                    alt="riot"
                    className="rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src="/img/logoriot.png"
                      width={150}
                      height={150}
                      alt="klaw"
                      className="rounded-3xl"
                    />
                  </div>
                </div>
              </a>
              <h2 className="text-[19px] py-[0.9rem] cream soulmaze">
                RIOT REVENGER
              </h2>
              <p className="text-[12px]  cream berkeley w-[150px]">
                3D ARTIST, MOGRAPH DESIGNER & MORE
              </p>
            </div>
            <div
              className="relative group flex flex-col justify-start items-start mr-[20px]"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <a
                href="https://www.instagram.com/neonpaperkid/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <div className="h-300 relative">
                  <Image
                    src="/img/NEON PAPER KID C.png"
                    width={200}
                    height={200}
                    alt="npk"
                    className="rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src="/img/logonpk.png"
                      width={150}
                      height={150}
                      alt="klaw"
                      className="rounded-3xl"
                    />
                  </div>
                </div>
              </a>
              <h2 className="text-[19px] py-[0.9rem] cream soulmaze">
                NEON PAPER KID
              </h2>
              <p className="text-[12px]  cream berkeley w-[150px]">
                GRAPHIC DESIGNER & MOTION GRAPHIC ARTIST
              </p>
            </div>
            <div
              className="relative group flex flex-col justify-start items-start mr-[20px]"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              <a
                href="https://open.spotify.com/artist/6l6neQdiyZXEXDDJAINfIm?si=3u3BXLfaQu-SE93yqUd2KA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <div className="h-300 relative">
                  <Image
                    src="/img/MIDNIGHT KOALA C.png"
                    width={200}
                    height={200}
                    alt="mk"
                    className="rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src="/img/logomk.png"
                      width={150}
                      height={150}
                      alt="klaw"
                      className="rounded-3xl"
                    />
                  </div>
                </div>
              </a>
              <h2 className="text-[19px] py-[0.9rem] cream soulmaze">
                MIDNIGHT KOALA
              </h2>
              <p className="text-[12px]  cream berkeley w-[150px]">
                MUSIC PRODUCER
              </p>
            </div>
          </div>
          <h1 className="soulmaze cream text-[2rem] mt-[4.5rem]">
            NAH, JUST KIDDING. ALL OF THEM IS ME!
          </h1>
          <p className="berkeley red mt-2 mb-2">Here let me show you the truth!</p>
          <button className="bg-[#2d3250] border border-[#fffab7] hover:border-[#fb615c] rounded-full px-4 py-2 text-white w-[200px] berkeley cream mb-5">
            Show me more
          </button>
        </div>
      </div>
    </>
  );
};

export default Team;
