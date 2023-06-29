import React from "react";
//import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className="wpo-site-footer">
        <div className="lower-footer">
          <div className="container">
            <div className="row">
              <div className="widget about-widget  d-flex justify-content-between py-4">
                <p className="copyright">
                  Copyright &copy; 2022 Yogesh Vakhre. All rights reserved.
                </p>

                <div className="social-icons">
                  <ul>
                  <li>
                      <a href="https://github.com/Yogesh-Vakhre"  target="_blank"  title="GitHub" rel="noreferrer">
                        <i className="fa fa-github" style={{fontSize:"20px"}}></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#" title="Facebook" rel="noreferrer">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#" title="Twitter" rel="noreferrer">
                        <i className="ti-twitter-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/yogesh-vakhre/"  target="_blank" title="Linkedin" rel="noreferrer">
                        <i className="ti-linkedin"></i>
                      </a>
                    </li>                     
                    <li>
                      <a href="mailto:yogeshvakhre143@gmail.com" title="Gmail" rel="noreferrer">
                        <i className="ti-email"></i>
                      </a>
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
