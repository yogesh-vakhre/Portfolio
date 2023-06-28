import React from "react";
import { Link } from "react-router-dom";

const ExperienceItem = (props) => {
  return (
    <>
      <div className="wpo-work-item">
        <ul>
          <li className="date">2015 - 2016</li>
          <li className="logo">
            <img src="assets/images/work/1.png" alt="" />
          </li>
          <li className="position">
            Junior Visual Designer <span>Trapeza Group, USA.</span>
          </li>
          <li className="link">
            <Link to="#">Go to website</Link>
          </li>
        </ul>
      </div>
      <div className="wpo-work-item">
        <ul>
          <li className="date">2017 - 2018</li>
          <li className="logo">
            <img src="assets/images/work/2.png" alt="" />
          </li>
          <li className="position">
            UI/UX Designer{" "}
            <span>
              Gallerie Ontario, Canada
              <span>(Remote)</span>
            </span>
          </li>
          <li className="link">
            <Link to="#">Go to website</Link>
          </li>
        </ul>
      </div>
      <div className="wpo-work-item">
        <ul>
          <li className="date">2019 - 2020</li>
          <li className="logo">
            <img src="assets/images/work/3.png" alt="" />
          </li>
          <li className="position">
            Seinor UI/UX Desinger <span>Morson Hybrid, Canada</span>
          </li>
          <li className="link">
            <Link to="#">Go to website</Link>
          </li>
        </ul>
      </div>
      <div className="wpo-work-item">
        <ul>
          <li className="date">
            2019 - <span>Present</span>
          </li>
          <li className="logo">
            <img src="assets/images/work/4.png" alt="" />
          </li>
          <li className="position">
            Product Designer{" "}
            <span>
              Myant Inc. Etobicoke, ON
              <span>(Remote)</span>
            </span>
          </li>
          <li className="link">
            <Link to="#">Go to website</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ExperienceItem;
