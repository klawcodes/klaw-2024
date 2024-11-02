import React from "react";
import Team from "../team/page";
import About from "../about/page";
import Skills from "../skills/page";
import Works from "../works/page";
import Contact from "..//contact/page";
import HomepageTitle from "../subComponent/homepagetitle"
import UnderDevelopment from "../ud/page";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations('HomePage')

  return (
    <>
      <div className="">
        <UnderDevelopment />
      </div>
    </>
  );
};

export default HomePage;
