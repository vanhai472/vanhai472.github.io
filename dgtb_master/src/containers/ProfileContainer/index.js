import React, { Component } from "react";
import CalenderMaster from "./Calender";
import Introduction from "./Introduction";
import Service from "./Service";
import InformationMaster from "./InformationMaster";
import AlarmOclock from "./alramOclock";

class ProfileMasterContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <CalenderMaster />
        <AlarmOclock />
        <Introduction />
        <Service />
        <InformationMaster />
      </React.Fragment>
    );
  }
}

export default ProfileMasterContainer;
