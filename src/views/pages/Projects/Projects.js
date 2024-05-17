import React from "react";
import ProjectItem from "../../../components/ProjectItem/ProjectItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle/SectionTitle";

const Projects = (props) => {
  const projects = [
    {
      title: "Portfolio",
      image: "assets/images/project/portfolio.png",
      url: "https://yogeshvakhre.vercel.app/",
      skill: "My portfolio website to showcase my skills and projects.",
      icons: [
        "assets/images/icon/html.svg",
        "assets/images/icon/css.svg",
        "assets/images/icon/react.svg",
      ],
    },
    {
      title: "Accura Scan",
      image: "assets/images/project/accurascan.png",
      url: "https://accurascan.com/",
      skill: "Full Stack Based Project/Laravel & MySQL",
      icons: [
        "assets/images/icon/html.svg",
        "assets/images/icon/css.svg",
        "assets/images/icon/javascript.svg",
        "assets/images/icon/jquery.svg",
        "assets/images/icon/mysql.svg",
        "assets/images/icon/laravel.min.svg",
      ],
    },
    {
      title: "Teach Me How",
      image: "assets/images/project/teachmehow.png",
      url: "https://teachmehow.today/",
      skill: "Full Stack Based Project/Laravel & MySQL",
      icons: [
        "assets/images/icon/html.svg",
        "assets/images/icon/css.svg",
        "assets/images/icon/javascript.svg",
        "assets/images/icon/jquery.svg",
        "assets/images/icon/mysql.svg",
        "assets/images/icon/laravel.min.svg",
      ],
    },
    {
      title: "Reptrics",
      image: "assets/images/project/reptrics.png",
      url: "https://www.reptrics.com/",
      skill: "Full Stack Based Project/Laravel & MySQL",
      icons: [
        "assets/images/icon/html.svg",
        "assets/images/icon/css.svg",
        "assets/images/icon/javascript.svg",
        "assets/images/icon/jquery.svg",
        "assets/images/icon/mysql.svg",
        "assets/images/icon/laravel.min.svg",
      ],
    },
    {
      title: "Triangle Luxury",
      image: "assets/images/project/triangle-luxury.png",
      url: "https://www.triangle.luxury/",
      skill: "Full Stack Based Project/Laravel & MySQL",
      icons: [
        "assets/images/icon/html.svg",
        "assets/images/icon/css.svg",
        "assets/images/icon/javascript.svg",
        "assets/images/icon/jquery.svg",
        "assets/images/icon/mysql.svg",
        "assets/images/icon/laravel.min.svg",
        "assets/images/icon/aws.svg",
      ],
    },
    {
      title: "Free Online Image Search",
      image: "assets/images/project/unsplash.png",
      url: "https://github.com/yogesh-vakhre/free-online-image-search",
      skill: "My portfolio website to showcase my skills and projects.",
      icons: [
        "assets/images/icon/html.svg",
        "assets/images/icon/css.svg",
        "assets/images/icon/react.svg",
      ],
    },
    {
      title: "Covid19 World Tracker",
      image: "assets/images/project/COVID-19_Tracker.png",
      url: "https://github.com/yogesh-vakhre/covid-19-tracker",
      skill: "Frontend Based Project/Reactjs. & Material UI.",
      icons: [
        "assets/images/icon/html.svg",
        "assets/images/icon/css.svg",
        "assets/images/icon/react.svg",
      ],
    },
    {
      title: "Ax3 Independent Artist Network",
      image: "assets/images/project/AX3.png",
      url: "https://www.ax3.com/",
      skill: "Full Stack Based Project/React.js, Node.js",
      icons: [
         "assets/images/icon/html.svg",
        "assets/images/icon/css.svg",
        "assets/images/icon/react.svg",
        "assets/images/icon/nodejs.svg",
        "assets/images/icon/aws.svg",
        "assets/images/icon/mongodb.svg",
      ],
    },
    {
      title: "Catalyst Pay SDK for PHP",
      image: "assets/images/project/catalystpay.jpeg",
      url: "https://github.com/Catalystpay-LTD/gateway-php-sdk",
      skill: "Full Stack Based Project/PHP,Package & MySQL",
      icons: [
        "assets/images/icon/html.svg",
        "assets/images/icon/css.svg",
        "assets/images/icon/javascript.svg",
        "assets/images/icon/jquery.svg",
        "assets/images/icon/mysql.svg",             
      ],
    },
    {
      title: "Healthcare Appointment Booking API",
      image: "assets/images/project/healthcare-appoitnment.png",
      url: "https://github.com/yogesh-vakhre/Healthcare-Appointment-Booking-API",
      skill: "Backend Based Project/Laravel & MySQL",
      icons: [
        "assets/images/icon/laravel.min.svg",
        "assets/images/icon/mysql.svg",   
        "assets/images/icon/jquery.svg",                 
      ],
    },
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
          <div className="wpo-project-wrap wpo-project-slide row ">
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                title={project.title}
                image={project.image}
                url={project.url}
                skill={project.skill}
                icons={project.icons}
              />
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
