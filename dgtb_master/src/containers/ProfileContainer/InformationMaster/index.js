import React, { Component } from "react";
import ProfileInforUser from "./ProfileInforUser";
import ProfileContactUser from "./ProfileContactUser";
import ProfilePasswordUser from "./ProfilePasswordUser";
class index extends Component {
  render() {
    return (
      <div>
        <ProfileContactUser />
        <ProfileInforUser />
        <ProfilePasswordUser />
      </div>
    );
  }
}

export default index;
