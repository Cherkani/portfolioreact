import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

import { useTranslation } from "react-i18next";

const Header = () => {
  const {t} = useTranslation("translation");
  return (
    <header id="home">
      <div className="container header__container">
        <h5>{t("hello")}</h5>
        <h1>Cherkani Aymen</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA  dowload = {t("dowload")} talk = {t("talk")}/>
        <a href="#contact" className="scroll__down">
        {t("scroll")}
        </a>
        <HeaderSocials  />
      </div>
    </header>
  );
};

export default Header;
