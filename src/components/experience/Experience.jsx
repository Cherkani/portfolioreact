import React from "react";
//import "./experience.css";
import TechnicalSkills from "./TechnicalSkills";
import { useTranslation } from "react-i18next";
const Experience = () => {
  const { t } = useTranslation("translation");
  return (
    <section id="experience">
      <h5>{t("skills.h5")} </h5>
      <h2>{t("skills.h2")}</h2>
      {/* <div className="container experience__container"> */}
      <div>
        <TechnicalSkills/>
      </div>
    </section>
  );
};

export default Experience;
