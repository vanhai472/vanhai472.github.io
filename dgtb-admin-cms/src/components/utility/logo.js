import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../settings";
import "./index.scss";

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      <Link to="/dashboard">
        <div className="isIconHeader">
          <img className="logo" src={siteConfig.siteIcon} alt="logo" />
          {collapsed ? "" : <h3>{siteConfig.siteName}</h3>}
        </div>
      </Link>
    </div>
  );
};
