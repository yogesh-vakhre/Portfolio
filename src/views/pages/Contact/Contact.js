import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle/SectionTitle";

const Contact = (props) => {
  return (
    <>
      <SectionTitle pageTitle="Contact" sectionTitleClass="" />
      <section className="wpo-contact-pg-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-10 offset-lg-1">
              <div className="office-info">
                <div className="row">
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-location"></i>
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Location</h2>
                        <p>Surat,Gujrat,India.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-mail"></i>
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Email Us</h2>
                        <p>
                          <a href="mailto:yogeshvakhre143@gmail.com">
                            yogeshvakhre143@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-phone-call"></i>
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Call Now</h2>
                        <p>
                          <a href="tel:+917383147797">+91 73831 47797</a>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="wpo-contact-title">
                <h2>Have Any Question?</h2> */}
                {/* <p>It is a long established fact that a reader will be distracted
                                content of a page when looking.</p> */}
              {/* </div> */}
              {/* <div className="wpo-contact-form-area">
                <form
                  method="post"
                  className="contact-validation-active"
                  id="contact-form-main"
                >
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email*"
                    />
                  </div>

                  <div className="fullwidth">
                    <textarea
                      className="form-control"
                      name="note"
                      id="note"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                  <div className="submit-area">
                    <button type="submit" className="theme-btn-s2">
                      Get in Touch
                    </button>
                    <div id="loader">
                      <i className="ti-reload"></i>
                    </div>
                  </div>
                  <div className="clearfix error-handling-messages">
                    <div id="success">Thank you</div>
                    <div id="error">
                      {" "}
                      Error occurred while sending email. Please try again
                      later.{" "}
                    </div>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
        <div className="shape-1">
          <svg width="1038" height="938" viewBox="0 0 1038 938" fill="none">
            <g opacity="0.5" filter="url(#filter0_f_39_4392)">
              <circle cx="290.5" cy="282.5" r="247.5"></circle>
            </g>
            <defs>
              <filter
                id="filter0_f_39_4392"
                x="-457"
                y="-465"
                width="1495"
                height="1495"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  floodOpacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_39_4392"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};
export default Contact;
