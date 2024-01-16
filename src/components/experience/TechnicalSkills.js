import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { skills } from "../../translations/en/data";
import "./TechnicalSkills.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCogs } from "@fortawesome/free-solid-svg-icons";

const TechnicalSkills = () => {
  const frontendSkills = skills.filter((el) => el.tag === "frontend");
  const backendSkills = skills.filter((el) => el.tag === "backend");
  const platformSkills = skills.filter((el) => el.tag === "platform");
  const mobileSkills = skills.filter((el) => el.tag === "mobile");
  const BiSkills = skills.filter((el) => el.tag === "BI");
  const programmingLanguagesSkills = skills.filter(
    (el) => el.tag === "programmingLanguages"
  );
  return (
    <Box id="skills">
      <Heading className="skills-heading">
        {" "}
        {/* <FontAwesomeIcon icon={faCogs} className="skills-icon" />
        <span className="skills-heading">Technical Skills</span> */}
      </Heading>
      <div>
        <Flex className="skills">
          <Flex>
            <Heading size="lg">
              Front<span className="themeText">end</span>
            </Heading>
            <Box>
              {frontendSkills.map((skill) => (
                <Box key={skill.title} className="skill" data-aos="zoom-in-up">
                  <Box>
                    <Image src={skill.icon} />
                  </Box>
                  <Text>{skill.title}</Text>
                </Box>
              ))}
            </Box>
          </Flex>
          <Flex>
            <Heading size="lg">
              Back<span className="themeText">end</span>
            </Heading>
            <Box>
              {backendSkills.map((skill) => (
                <Box
                  key={skill.title}
                  className="skill"
                  data-aos="zoom-in-down"
                >
                  <Box>
                    <Image src={skill.icon} />
                  </Box>
                  <Text>{skill.title}</Text>
                </Box>
              ))}
            </Box>
          </Flex>
          <Flex>
            <Heading size="lg">
              Mobile<span className="themeText"></span>
            </Heading>
            <Box>
              {mobileSkills.map((skill) => (
                <Box
                  key={skill.title}
                  className="skill"
                  data-aos="zoom-in-down"
                >
                  <Box>
                    <Image src={skill.icon} />
                  </Box>
                  <Text>{skill.title}</Text>
                </Box>
              ))}
            </Box>
          </Flex>
          <Flex>
            <Heading size="lg">Programming Languages</Heading>
            <Box>
              {programmingLanguagesSkills.map((skill) => (
                <Box key={skill.title} className="skill" data-aos="zoom-in">
                  <Box>
                    <Image src={skill.icon} />
                  </Box>
                  <Text>{skill.title}</Text>
                </Box>
              ))}
            </Box>
          </Flex>
          <Flex>
            <Heading size="lg">
              Platforms <span className="themeText">& Tools</span>
            </Heading>
            <Box>
              {platformSkills.map((skill) => (
                <Box key={skill.title} className="skill" data-aos="zoom-in">
                  <Box>
                    <Image src={skill.icon} />
                  </Box>
                  <Text>{skill.title}</Text>
                </Box>
              ))}
            </Box>
          </Flex>
          <Flex>
            <Heading size="lg">
              Buisness <span className="themeText">Intelligence</span>
            </Heading>
            <Box>
              {BiSkills.map((skill) => (
                <Box key={skill.title} className="skill" data-aos="zoom-in">
                  <Box>
                    <Image src={skill.icon} />
                  </Box>
                  <Text>{skill.title}</Text>
                </Box>
              ))}
            </Box>
          </Flex>
        </Flex>
      </div>
    </Box>
  );
};

export default TechnicalSkills;
