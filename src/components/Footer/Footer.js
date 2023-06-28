import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className="wpo-site-footer">
        <div className="lower-footer">
          <div className="container">
            <div className="row">
              <div className="separator"></div>

              <div className="widget about-widget">
              
                <p className="copyright">
                  Copyright &copy; 2022 Yogesh Vakhre. All rights reserved.
                </p>
                <div className="social-icons">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ti-twitter-alt"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ti-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ti-pinterest"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ti-vimeo-alt"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

//Footer.propTypes = {};

export default Footer;
