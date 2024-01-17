import "./intro.css";
import React from "react";

import { useTranslation } from "react-i18next";


import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

import {intro } from "../../translations/en/data";
const { name,image,} = intro;



const Intro = () => {
  const {t} = useTranslation("translation");
  return (
    <section id="about">
      <h5>  {t("get_to_know")}</h5>
      <h2>{name}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={image} alt="Cherkani Aymen" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t("intro.title_card1")}</h5>
              <small>{t("intro.text_card1")}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> {t("intro.title_card2")}</h5>
              <small> {t("intro.text_card2")}</small>
            </article>
          </div>
          <p>
          <br />
          {t("intro.description1")}
              <br />
              <br />
              {t("intro.description2")}
            <br />
            {t("intro.description3")}
          </p>
          <a href="#contact" className="btn btn-primary">
          {t("talk")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
