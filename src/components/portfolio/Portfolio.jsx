import React from "react";
import { useTranslation } from "react-i18next";
import { soloProjects as soloProjectsData } from "../../translations/en/data";
import "./portfolio.css";

const Portfolio = () => {
  const { t } = useTranslation("translation");
  const soloProjects = t("soloProjects", { returnObjects: true }) || [];

  return (
    <section id="portfolio">
      <h5>{t("portfolio.h5")}</h5>
      <h2>{t("portfolio.h2")}</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro, index) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={soloProjectsData[index].img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {pro.code && (
                <a
                  href={pro.code}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Code
                </a>
              )}

              {pro.video && (
                <a
                  href={pro.video}
                  target="_blank"
                  className="btn btn-secondary" // Add class for Video
                  rel="noreferrer"
                >
                  Video & Screens
                </a>
              )}
              {pro.livedemo && (
                <a
                  href={pro.livedemo}
                  target="_blank"
                  className="btn btn-primary video-btn"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
