import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  return (
    <>
      <ol className="wpo-breadcumb-wrap">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="active">{props.pageTitle}</li>
      </ol>
    </>
  );
};

export default Breadcrumbs;
