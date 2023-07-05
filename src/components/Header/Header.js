import React from "react";
import { Link, Outlet } from "react-router-dom";
//import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <header id="header" className="wpo-header-style-1">
        <div className="wpo-site-header">
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <button type="button" className="navbar-toggler open-btn">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar first-angle"></span>
                      <span className="icon-bar middle-angle"></span>
                      <span className="icon-bar last-angle"></span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-6">
                  <div className="navbar-header">
                    <Link className="navbar-brand site-logo" to="/">
                      {/* <img src="assets/images/logo.png" alt="" /> */}
                      Yogesh Vakhre.
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8 col-md-1 col-1">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li>
                        <Link className="active" to="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="skills">Skills</Link>
                      </li>

                      <li>
                        <Link to="experience">Experience</Link>
                      </li>
                      <li>
                        <Link to="projects">Projects</Link>
                      </li>
                      <li>
                        <Link to="Contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  {/*  end of nav-collapse */}
                </div>
                <div className="col-lg-2 col-md-2 col-2">
                  <div className="header-right">
                    <div className="header-btn">
                      <a
                        className="theme-btn"
                        download="Yogesh Vakhre 4+ Years CV"
                        href="assets/resume/Yogesh_Vakhre_4+__Years__CV.pdf"
                        title="ImageName"
                      >
                        <img
                          className="hide-img"
                          alt="ImageName"
                          src="assets/resume/cv.jpg"
                        />
                        Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of container */}
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

//Header.propTypes = {};

export default Header;
