import React from "react";

const ProjectItem = (props) => {
  const {title,image,url,skill}=props;
  return (
    <>
      <div className="wpo-project-item">
        <div className="wpo-project-img">
          <img src={image} alt={title} />
        </div>
        <div className="wpo-project-text">
          <h2>
            <a href={url}>
             {title}
            </a>
          </h2>
          <span>{skill}</span>
        </div>
      </div>       
    </>
  );
};

export default ProjectItem;
