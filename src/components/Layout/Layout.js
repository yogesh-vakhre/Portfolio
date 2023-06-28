import React from "react";
//import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader"; 
import BackToTop from "../BackToTop/BackToTop";

const Layout = (props) => {
  return (
    <>
      <Preloader />    
      <Header />
      {props.children}
      <Footer />
      <BackToTop />
    </>
  );
};

//Layout.propTypes = {};

export default Layout;
