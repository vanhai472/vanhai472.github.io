import React, { Component } from "react";
import LocationWrapper from "./styles";
class Location extends Component {
  render() {
    const { name, cardSearch } = this.props;
    return (
      <LocationWrapper>
        <img src="/icon/CardMaster/address.png" alt="address" />
        <span>
          {cardSearch ? "Khu vực:" : null} {name}
        </span>
      </LocationWrapper>
    );
  }
}

export default Location;
