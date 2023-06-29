import React from "react";

const ProjectItem = (props) => {
  const { title, image, url, skill, icons } = props;
  return (
    <>
      <div className="wpo-project-item">
        <div className="wpo-project-img">
          <img src={image} alt={title} />
        </div>
        <div className="wpo-project-text">
          <h2>
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h2>
          <span>{skill}</span>
          <div className="row">
            {icons?.map((icon, index) => (
              <img key={index} src={icon} alt="" style={{ width: "40px" }} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
