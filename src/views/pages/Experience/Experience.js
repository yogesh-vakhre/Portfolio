import React from "react";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

const Experience = (props) => {
  return (
    <>
      <div className="wpo-work-area section-padding" id="experience">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="wpo-section-title">
                <h2>My Work Experience</h2>
                <p>
                  Must explain to you how all this mistaken idea of denouncing
                  pleasure born and give you a complete account the system
                </p>
              </div>
            </div>
          </div>
          <div className="wpo-work-wrap">
            <ExperienceItem />
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
