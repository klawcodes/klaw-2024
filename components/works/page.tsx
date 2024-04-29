import React from "react";
import SubWorks from "../subComponent/subworks";
import { useTranslations } from "next-intl";

const Works = () => {
  const t = useTranslations("Works")
  return (
    <>
      <SubWorks>
        {{
          title: t("title"),
          cf: t("cf-desc"),
          larq: t("l-desc"),
          hl: t("hl-desc"),
          ai: t("ai-desc"),
          hsd: t("hsd-desc"),
          r: t("r-desc"),
          viewWorks: "VIEW WORK",
        }}
      </SubWorks>
    </>
  );
};

export default Works;
