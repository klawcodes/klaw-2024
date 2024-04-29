import React from "react";
import Team from "../team/page";
import About from "../about/page";
import Skills from "../skills/page";
import Works from "../works/page";
import Contact from "..//contact/page";
import HomepageTitle from "../subComponent/homepagetitle"
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations('HomePage')

  return (
    <>
      <HomepageTitle>{t('title')}</HomepageTitle>
      <div className="flex flex-col gap-[5vh] mb-[5vh]">
        <Team />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
