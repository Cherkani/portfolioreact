import "./contact.css";

import React from "react";
import { MdOutlineEmail, MdLocationCity } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Contact = () => {
  
  const {t} = useTranslation("translation");
  return (
    <section id="contact">
      <h5>{t("getInTouch.h5")} </h5>
      <h5>
      {t("getInTouch.message")}
      </h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              <h5>cherkaniaymen1@gmail.com</h5>
              <h5>Morroco, Casablanca</h5>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
