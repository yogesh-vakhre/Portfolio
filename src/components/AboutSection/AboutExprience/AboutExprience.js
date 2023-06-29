import React from "react";
// import PropTypes from 'prop-types'

const AboutExprience = (props) => {
  const {yearOfExperience,clientsSatisfections} =props;
  return (
    <>
      <div className="wpo-about-exprience-wrap">
        <div className="wpo-about-exprience">
          <h2> { yearOfExperience}</h2>
          <span>Years of Experience</span>
        </div>
        <div className="client">
          <h3>
            <span className="odometer" data-count={ clientsSatisfections ?? '00'}>
              { clientsSatisfections ?? '00'}
            </span>
            %
          </h3>
          <p>Clients Satisfections</p>
        </div>
      </div>
    </>
  );
};

// AboutExprience.propTypes = {

// }

export default AboutExprience;
