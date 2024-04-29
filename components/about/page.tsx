import React from "react";
import Image from "next/image";
import FireEmoji from "../subComponent/fireemoji"
import { useTranslations } from "next-intl";


const About = () => {

  const t = useTranslations("About")
  return (
    <>
      <div className="flex justify-center items-center h-auto" id="about">
        <div className="bg-[#ffecd6] w-[1100px] max-[640px]:w-[400px] h-auto flex gap-x-[100px] rounded-[30px] px-5 max-[640px]:flex-col">
          <div className="flex flex-col">
            <h1 className="soulmaze red text-[5rem] w-[400px] leading-[5rem] mt-2">
              {t("title")}
            </h1>
          <FireEmoji>{t("bubble")}<br/>{t("bubble-break")}</FireEmoji>
          </div>
          <p className="berkeley blue w-[500px] mt-5 mb-5 max-[640px]:w-[300px]">
            {t("greetings")}{" "}
            <span className="red font-bold select">{t("name")}</span>
            {t("paragraph1")}<br />
            <br />
            {t("paragraph2")}
            <br /> <br />
            {t("paragraph3")}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
