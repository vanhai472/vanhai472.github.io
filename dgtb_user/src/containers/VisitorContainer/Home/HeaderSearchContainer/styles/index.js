import styled from "styled-components";

const SearchBoxWrapper = styled.div`
  margin-top: 64px;
  height: 476px;
  background-image: url("/icon/SearchBox/lotus-2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 80%;
  @media only screen and (min-width: 992px) {
    height: 639px;
  }
`;

export const SearchBoxContainer = styled.div`
  width: 100%;
  /* background: #fff; */
  margin-right: auto;
  margin-left: auto;
  padding: 0px 15px;
  position: relative;
  height: 100%;
  @media only screen and (min-width: 992px) {
    width: 750px;
  }

  @media only screen and (min-width: 992px) {
    width: 970px;
  }

  @media only screen and (min-width: 1200px) {
    width: 1140px;
  }

  /* @media only screen and (min-width: 1600px) {
    width: 1180px;
  } */
  #scrollbottom {
    width: 56px;
    height: 56px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    bottom: 16px;
    left: 50%;
    cursor: pointer;
    display: none;
    @media only screen and (min-width: 992px) {
      display: block;
    }
  }
  #scrollbottom > .arrows {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  #scrollbottom > .arrows > img {
    position: absolute;
    transform: translate(35%, 35%);
  }
`;

export const SearchBoxNav = styled.div`
  height: 56px;
  padding-top: 16px;
`;

export const SearchBoxContent = styled.div`
  width: 343px;
  left: 50%;
  height: 304px;
  position: absolute;
  bottom: 0;
  padding: 0 15px;
  transform: translateX(-50%);
  @media only screen and (min-width: 576px) {
    width: 400px;
  }
  @media only screen and (min-width: 992px) {
    height: 345px;
    width: 100%;
  }
`;

export const SearchBoxContentText = styled.div`
  h3 {
    margin: 0;
    color: #ffffff;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }
  span {
    color: #ffffff;
    font-family: "Roboto-Regular";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 4px;
  }
`;

export const SearchBoxForm = styled.div`
  border-radius: 20px;
  height: 240px;
  background: #fff;
  margin-top: 16px;
  overflow: hidden;

  .ant-form-item {
    margin-bottom: 0;

    & .ant-form-item-control-input-content > div {
      display: flex;
      margin: 0 16px;
      border-bottom: 1px solid #edecf0;
    }
  }
  .ant-select-selector {
    border: none !important;
    height: 48px !important;
    display: flex;
    align-items: center;
    @media only screen and (min-width: 992px) {
      height: 80px !important;
    }
  }
  .ant-select-selection-search {
    display: flex;
    align-items: center;
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: none;
  }
  .ant-select-selection-placeholder {
    color: #6e6c7e;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    opacity: 1;
  }
  .ant-btn {
    width: 100%;
    height: 48px;
    background: linear-gradient(357.6deg, #009ca9 10.34%, #2ccfdd 88.46%);
    border-radius: 0px 0px 8px 8px;
    border-color: transparent;
    border: none;
    color: #ffffff;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    @media only screen and (min-width: 992px) {
      height: 80px;
      border-radius: 0px 16px 16px 0px;
    }
  }
  @media only screen and (min-width: 992px) {
    height: 80px;

    & > form {
      display: flex;
    }
    & > form > .ant-form-item {
      width: calc(100% / 3);
      position: relative;
    }

    .master-service::after,
    .search-box-location::after,
    .search-box-category::after {
      content: "";
      opacity: 0.8;
      height: 64px;
      width: 1px;
      position: absolute;
      right: 0;
      background: #a7a7a7;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  @media only screen and (min-width: 1200px) {
    .master-service {
      width: 427px !important;
    }

    .search-box-location,
    .search-box-category,
    .search-box-filter {
      width: 180px !important;
    }

    .search-box-search {
      width: 173px !important;
    }
  }
`;

export default SearchBoxWrapper;
