import "./intro.css";
import React from "react";


import {intro } from "../../translations/en/data";
const { name,image,Icon1,title_card1,text_card1,Icon2,title_card2,text_card2,description1,description2,description3} = intro;



const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
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
              <Icon1 className="about__icon" />
              <h5>{title_card1}</h5>
              <small>{text_card1}</small>
            </article>
            <article className="about__card">
              <Icon2 className="about__icon" />
              <h5>{title_card2}</h5>
              <small>{text_card2}</small>
            </article>
          </div>
          <p>
          <br />
          {description1}
              <br />
              <br />
              {description2}
            <br />
            {description3}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
