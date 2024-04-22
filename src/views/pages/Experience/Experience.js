import React from "react";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle/SectionTitle";

const Experience = (props) => {
  const experience = [
    {date:'Aug 2018 - Nov 2020',logo:'./assets/images/experience/logo/99plugin.jpeg',position:'Web Developer',location:'Surat, Gujarat, India',websiteUrl:'#'},
    {date:'Sept 2020 - Nov 2021',logo:'./assets/images/experience/logo/technozer.webp',position:'PHP Laravel Developer',location:'Surat, Gujarat, India',websiteUrl:''},
    {date:'Dec 2021 - Aug 2022',logo:'./assets/images/experience/logo/dynamicdreamz.png',position:'Web Laravel Developer',location:'Surat, Gujarat, India',websiteUrl:'https://www.dynamicdreamz.com/'},
    {date:'Sept 2022 - Sept 2023',logo:'./assets/images/experience/logo/koli-infotech.png',position:'Software Engineer',location:'Surat, Gujarat, India',websiteUrl:'https://koliinfotech.com/'},
    {date:'Sept 2023 - April 2024',logo:'./assets/images/experience/logo/ITAlogo.png',position:'Senior PHP Developer (Remote)',location:'Liverpool, Merseyside,Northwest England',websiteUrl:'https://itanswers.com/'},

  ];
  return (
    <>
     <SectionTitle pageTitle="Experience" sectionTitleClass="" />
      <div className="wpo-work-area section-padding" id="experience">
        <div className="container">
          {/* <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="wpo-section-title">
                <h2>My Work Experience</h2>
                <p>
                  Must explain to you how all this mistaken idea of denouncing
                  pleasure born and give you a complete account the system
                  </p>  
              </div>
            </div>
          </div> */}
          <div className="wpo-work-wrap">
          {experience.map((item,index) => (
            <ExperienceItem key={index} date={item.date} position={item.position} logo={item.logo} location={item.location} websiteUrl={item.websiteUrl} />
            ))}  
          </div>
        </div>
        <div className="shape-wk">
          <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
            <g opacity="0.45" filter="url(#filter0_f_39_4214)">
              <circle cx="750" cy="750" r="200" />
            </g>
            <defs>
              <filter
                id="filter0_f_39_4214"
                x="0"
                y="0"
                width="1500"
                height="1500"
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
                  stdDeviation="275"
                  result="effect1_foregroundBlur_39_4212"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Experience;
