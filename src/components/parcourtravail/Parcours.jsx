import React from "react";
import styled from "styled-components";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

import { experiences as experiencesData } from "../../translations/en/data";
import ExperienceCard from "./ExperienceCard";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Parcours = () => {
  const {t} = useTranslation("translation");
const experiences = t("experiences", { returnObjects: true });
  return (
    <section id="professional-experience">
      <h5>{t("experience.h5")}</h5>
      <h2>{t("experience.h2")}</h2>
      <Container>
        <Wrapper>
          <TimelineSection>
            <Timeline>
              {experiences.map((experience, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    {index !== t("experiences").length - 1 && (
                      <TimelineConnector style={{ background: "#854CE6" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={experience} image2={experiencesData[index].image}  />

                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </TimelineSection>
        </Wrapper>
      </Container>
    </section>
  );
};

export default Parcours;
