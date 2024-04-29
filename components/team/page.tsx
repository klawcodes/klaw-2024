import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import TeamImage from "../subComponent/teamimage";
import { useTranslations } from "next-intl";

const Team = () => {
  const t = useTranslations("Team");

  return (
    <>
      <div className="flex justify-center items-center h-auto">
        <div className="bg-[#2d3250] w-[1100px] max-[640px]:w-[400px] h-auto flex flex-col rounded-[30px] px-5">
          <div className="flex items-center gap-x-5 max-[640px]:leading-[3rem] max-[640px]:mt-5">
            <h1 className="soulmaze cream text-[4rem] max-[640px]:text-[3rem]">
              {t("title")}
              <span className="red"> {t("title2")}...</span>
            </h1>
            <div className="preventDragContextMenu">
              <picture>
                <source
                  srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3fb/512.webp"
                  type="image/webp"
                />
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3fb/512.gif"
                  alt="💪"
                  width="60"
                  height="60"
                />
              </picture>
            </div>
          </div>
          <TeamImage />
          <h1 className="soulmaze cream text-[2rem] mt-[4.5rem] max-[640px]:leading-[2rem]">
            {t("subtitle")}
          </h1>
          <p className="berkeley red mt-2 mb-2">{t("paragraph")}</p>
          <div className="w-40 mb-5 mt-1">
            <div className=" relative h-8 w-full rounded-full cream berkeley bg-[#fb615c]">
              <button className="w-53  absolute -left-1 -top-1 flex h-full w-full items-center justify-center gap-3 rounded-full border border-[#fb615c] bg-[#2d3250] p-2 text-xs transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-[#383e61]  lg:cursor-pointer">
                {t("button-text")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
