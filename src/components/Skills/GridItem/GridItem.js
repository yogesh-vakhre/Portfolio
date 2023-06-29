import React from "react";
// import PropTypes from "prop-types";

const GridItem = (props) => {
  const {count ,skillName,colorText} =props;
  return (
    <>
      <div className="grid" style={{background:`linear-gradient(180deg, ${colorText} 0%, rgba(31, 30, 28, 0.6) 67.59%)`}}> 
        <div className="grid-inner">
          <h3>
            <span className="odometer" data-count={count}>
            {count ?? '00'}
            </span>
            %
          </h3>
          <p style={{color:`${colorText}`}}>{skillName}</p>
        </div>
      </div>
    </>
  );
};

// GridItem.propTypes = {};

export default GridItem;
