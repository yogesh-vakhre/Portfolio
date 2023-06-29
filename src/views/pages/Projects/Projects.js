import React from "react";
import ProjectItem from "../../../components/ProjectItem/ProjectItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle/SectionTitle";

const Projects = (props) => {
  const projects = [
    {title:'Accura Scan',image:'assets/images/project/img-1.jpg',url:'https://accurascan.com/',skill:'Full Stack Based Project/Laravel & MySQL'},
    {title:'Teach Me How',image:'assets/images/project/img-1.jpg',url:'https://teachmehow.today/',skill:'Full Stack Based Project/Laravel & MySQL'},
    {title:'Reptrics',image:'assets/images/project/img-1.jpg',url:'https://www.reptrics.com/',skill:'Full Stack Based Project/Laravel & MySQL'}   
  ];
  return (
    <>
      <SectionTitle pageTitle="Projects" sectionTitleClass="" />
      <div className="wpo-project-area section-padding" id="projects">
        <div className="container">
          <div className="wpo-section-title-s2">
            <div className="row align-items-center">
              <div className="col-lg-4 col-12">
                <div className="title">
                  <h2>Recent Work.</h2>
                  {/* <p>
                    Must explain to you how all this mistaken idea pleasure born
                    and give you a complete account.
                  </p> */}
                </div>
              </div>
              <div className="col-lg-6 offset-lg-2">
                <div className="sec-title-icon">
                  <i className="fi flaticon-self-growth"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="wpo-project-wrap wpo-project-slide owl-carousel">
          {projects.map((project,index) => (
            <ProjectItem  key={index} title={project.title} image={project.image} url={project.url} skill={project.skill}/> 
          ))}
          </div>
        </div>
        <div className="shape-p">
          <svg width="1325" height="1687" viewBox="0 0 1325 1687" fill="none">
            <g filter="url(#filter0_f_39_4166)">
              <circle cx="481.5" cy="843.5" r="343.5" fillOpacity="0.27" />
            </g>
            <defs>
              <filter
                id="filter0_f_39_4166"
                x="-362"
                y="0"
                width="1687"
                height="1687"
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
                  result="effect1_foregroundBlur_39_4166"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="line-shape-1">
          <img src="assets/images/project/line-1.png" alt="" />
        </div>
        <div className="line-shape-2">
          <img src="assets/images/project/line-2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Projects;
