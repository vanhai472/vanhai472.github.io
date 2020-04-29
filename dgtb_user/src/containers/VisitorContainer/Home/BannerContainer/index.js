import React, { Component } from "react";
import BannerContainer from "./styles";
class Banner extends Component {
  render() {
    return (
      <BannerContainer>
        <img
          src="/icon/Banner/banner.png"
          alt="banner"
          style={{ width: "100%" }}
        />
      </BannerContainer>
    );
  }
}

export default Banner;
