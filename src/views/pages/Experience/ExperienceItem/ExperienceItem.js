import React from "react";
 
const ExperienceItem = (props) => {
  const {date,logo,position,location,websiteUrl}= props;
  return (
    <>
      <div className="wpo-work-item">
        <ul>
          <li className="date">{date}</li>
          <li className="logo">
            <img src={logo} alt="" />
          </li>
          <li className="position">
            {position} <span>{location}.</span>
          </li>
          <li className="link">
            <a href={websiteUrl} target="_blank" rel="noreferrer">Go to website</a>
          </li>
        </ul>
      </div>      
    </>
  );
};

export default ExperienceItem;
