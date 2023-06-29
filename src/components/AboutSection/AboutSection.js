import React from "react";
import GridItem from "../Skills/GridItem/GridItem";
import AboutExprience from "./AboutExprience/AboutExprience";
//import PropTypes from 'prop-types'

const AboutSection = (props) => {
  const SkillsData = [
    { skillName: "HTML", count: "90", colorText: "Tomato" },
    { skillName: "CSS", count: "60", colorText: "blue" },
    { skillName: "Javascript", count: "85", colorText: "yellow" },
    { skillName: "Jquery", count: "85", colorText: "#0769ad" },

    { skillName: "React.js", count: "70", colorText: "#7acef4" },
    { skillName: "Node.js", count: "80", colorText: "green" },
    { skillName: "Express.js", count: "85", colorText: "#d8d8d8" },
    { skillName: "PHP", count: "90", colorText: "#4f5b93" },
    { skillName: "Laravel", count: "85", colorText: "rgb(235 68 50)" },
    { skillName: "Mongodb", count: "70", colorText: "rgb(17, 97, 73)" },
    { skillName: "MySQL", count: "80", colorText: "#3E6E93" },
    { skillName: "OOPS", count: "85", colorText: "red" },
  ];
  return (
    <>
      <div className="wpo-about-area section-padding" id="skills">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-sm-12">
               <AboutExprience yearOfExperience='4+' clientsSatisfections='100' />
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12">
              <div className="wpo-about-content">
                <div className="wpo-about-title">
                  <h2>My Advantage</h2>
                  {/* <p>
                    Must explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born and I will give you a
                    complete account the system and expound the actual and
                    praising pain was born.
                  </p> */}
                </div>
                <div className="wpo-about-funfact">
                  {SkillsData.map((data,index) => (
                    <GridItem
                      key={index}
                      count={data.count}
                      skillName={data.skillName}
                      background={data.background}
                      colorText={data.colorText}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ab-shape">
          <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
            <g opacity="0.3" filter="url(#filter0_f_39_4267)">
              <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500" />
            </g>
            <defs>
              <filter
                id="filter0_f_39_4267"
                x="-500"
                y="0"
                width="1495"
                height="1495"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_39_4267"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="ab-shape-s2">
          <svg width="1252" height="1901" viewBox="0 0 1252 1901" fill="none">
            <g opacity="0.15" filter="url(#filter0_f_39_4265)">
              <circle cx="950" cy="950.004" r="450" />
            </g>
            <defs>
              <filter
                id="filter0_f_39_4265"
                x="-0.00012207"
                y="0.00402832"
                width="1900"
                height="1900"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_39_4265"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="line-shape-1">
          <img src="assets/images/about/shape1.png" alt="" />
        </div>
        <div className="line-shape-2">
          <img src="assets/images/about/shape2.png" alt="" />
        </div>
      </div>
    </>
  );
};

// AboutSection.propTypes = {

// }

export default AboutSection;
