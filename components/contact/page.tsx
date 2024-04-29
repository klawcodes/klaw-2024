import React from "react";
import SocialMedia from '../subComponent/socialmedia'
import { useTranslations } from "next-intl";

const Contact = () => {

  const t = useTranslations("Contact");
  return (
    <>
      <div className="flex flex-col justify-center items-center h-auto">
        <div className="bg-[#2d3250] w-[1100px] max-[640px]:w-[400px] h-auto flex flex-col rounded-[30px] px-5">
          <div className="flex justify-around max-[640px]:flex-col">
            <h1 className="soulmaze cream text-[4rem] max-[640px]:leading-[3rem] max-[640px]:mt-5 max-[640px]:mb-5">{t("title")}</h1>
            <SocialMedia/>
          </div>
        </div>

          <div className="bg-[#2d3250] w-[300px] flex justify-center items-center h-auto rounded-b-[30px] px-5">
            <h1 className="berkeley cream text-small">© Copyright 2024 Klaw</h1>
          </div>
      </div>
    </>
  );
};

export default Contact;
