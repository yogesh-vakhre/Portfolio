import React from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const SectionTitle = (props) => {
  const { pageTitle, sectionTitleClass } = props;
  return (
    <>
      <section className={`wpo-page-title  ${sectionTitleClass}`}>
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="wpo-breadcumb-wrap">
                <h2>{pageTitle}</h2>
                <Breadcrumbs pageTitle= {`${pageTitle}`} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTitle;
