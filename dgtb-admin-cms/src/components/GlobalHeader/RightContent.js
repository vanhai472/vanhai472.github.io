import React, { Component } from "react";
// import HeaderSearch from "../HeaderSearch";
// import HeaderNotification from "../HeaderNotification";
import Avatar from "./AvatarDropdown";
import "./index.scss";
class RightContent extends Component {
  render() {
    return (
      <div className="right">
        {/* <HeaderSearch /> */}
        {/* <HeaderNotification /> */}
        <Avatar />
      </div>
    );
  }
}

export default RightContent;
