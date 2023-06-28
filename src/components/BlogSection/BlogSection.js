import React from "react";

const BlogSection = (props) => {
 
  return (
    <>
     <section className="wpo-blog-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Latest News</h2>
                            <p>Must explain to you how all this mistaken idea pleasure
                                born and give you a complete account.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-blog-wrap wpo-blog-slide owl-carousel">
                    <div className="wpo-blog-item">
                        <div className="wpo-blog-img">
                            <img src="assets/images/blog/img-1.jpg" alt=""/>
                        </div>
                        <div className="wpo-blog-text">
                            <ul>
                                <li>January 02, 2022</li>
                            </ul>
                            <h2><a href="blog-single.html">Have evolved over the years sometimes accident.</a></h2>
                            <a className="details" href="blog-single.html">Post Details</a>
                        </div>
                    </div>
                    <div className="wpo-blog-item">
                        <div className="wpo-blog-img">
                            <img src="assets/images/blog/img-2.jpg" alt=""/>
                        </div>
                        <div className="wpo-blog-text">
                            <ul>
                                <li>January 03, 2022</li>
                            </ul>
                            <h2><a href="blog-single.html"> The Internet tend to repeat predefined chunks.</a></h2>
                            <a className="details" href="blog-single.html">Post Details</a>
                        </div>
                    </div>
                    <div className="wpo-blog-item">
                        <div className="wpo-blog-img">
                            <img src="assets/images/blog/img-3.jpg" alt=""/>
                        </div>
                        <div className="wpo-blog-text">
                            <ul>
                                <li>January 05, 2022</li>
                            </ul>
                            <h2><a href="blog-single.html">The standard chunk of used since the interested.</a></h2>
                            <a className="details" href="blog-single.html">Post Details</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-shape">
                <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                    <g filter="url(#filter0_f_39_3832)">
                        <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_3832" x="0" y="0" width="1606" height="1606"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    </>
  );
};

export default BlogSection;
