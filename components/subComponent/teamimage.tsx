'use client'

import React from 'react'
import Image from "next/image";

const TeamImage = () => {
  return (
    <>
    <div className="flex justify-center mt-10 max-[640px]:flex-col max-[640px]:items-center max-[640px]:gap-y-5">
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
                    <h2 className="soulmaze bold cream text-5xl text-bold">
                      who?
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
                    <h2 className="soulmaze bold cream text-5xl text-bold">
                      who?
                    </h2>
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
                    <h2 className="soulmaze bold cream text-5xl text-bold">
                      who?
                    </h2>
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
                    <h2 className="soulmaze bold cream text-5xl text-bold">
                      who?
                    </h2>
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
    </>
  )
}

export default TeamImage