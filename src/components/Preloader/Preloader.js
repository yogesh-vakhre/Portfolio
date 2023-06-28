import React from "react";
//import PropTypes from "prop-types";

const Preloader = (props) => {
  return (
    <>
      <div className="preloader">
        <div className="vertical-centered-box">
          <div className="content">
            <div className="loader-circle"></div>
            <div className="loader-line-mask">
              <div className="loader-line"></div>
            </div>
            <img src="assets/images/preloader.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

//Preloader.propTypes = {};

export default Preloader;
