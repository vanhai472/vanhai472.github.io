import styled from "styled-components";

const ProfileMasterCalenderWrapper = styled.div`
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  position: relative;
  & > h2 {
    color: #0e0841;
    border-bottom: 1px solid #edecf0;
    padding: 16px 0px 16px 16px;

    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
`;
export const WraperContent = styled.div`
  .show-date {
    display: absolute !important;
    border-right: 1px solid #edecf0;
    padding-right: 16px;
  }
  .Cal__Header__root {
    border-radius: 5px !important;
    background-color: #25c7d5 !important;
  }
  .Cal__Slider__slide {
    padding-left: 0px !important;
    text-align: center;
  }

  .Cal__Slider__slide {
    padding: 1px !important;
    background-color: #fff !important;
  }
  .Cal__Header__date {
    font-size: 20px !important;
    line-height: 25px !important;
    color: #0e0841 !important;
    background-color: #fff !important;
  }
  .Cal__Slider__arrow {
    border-radius: 8px;
    border: 1px solid #efefef !important;
    border-radius: 8px;
    padding: 5px;
    height: 50%;
    margin-top: 20px;
  }
  .Cal__Slider__arrow path {
    fill: #009ca9;
  }
  .Cal__Slider__arrow.svg {
    width: 7px !important;
  }
  .Cal__Weekdays__day {
    color: #6e6c7e;
  }
  .Cal__Weekdays__root {
    background-color: #fff !important;
  }
  .Cal__Today__chevronUp {
    background-color: #25c7d5 !important;
  }
  .Cal__Today__chevron {
    top: 43%;
    margin-left: 31px;
  }
  .Cal__Today__chevronDown {
    background-color: #25c7d5 !important;
  }
  .Cal__Day__enabled {
    color: #a7a7a7;
  }
  .Cal__Day__root.Cal__Day__enabled.Cal__Day__highlighted:before,
  .Cal__Day__root.Cal__Day__enabled:active:before,
  .Cal__Day__root.Cal__Day__enabled:hover:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 52px;
    height: 52px;
    margin-top: -26px;
    margin-left: -26px;
    border-radius: 20%;
    background-color: #efefef;
    z-index: -1;
  }
  .Cal__Day__root.Cal__Day__selected .Cal__Day__selection {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 52px;
    height: 52px;
    margin-top: -26px;
    margin-left: -26px;
    border-radius: 20%;
    line-height: 56px;
    background: ${(props) =>
      props.backgroundState == 1
        ? " #009ca9 !important"
        : "#8a878c !important"};
    z-index: 2;
  }
`;
export const Status = styled.div`
  padding-left: 16px;
  & > h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #0e0841;
  }
  .resetAll {
    color: #ffffff;
    background: linear-gradient(355.71deg, #009ca9 10.34%, #2ccfdd 88.46%);
    border-radius: 12px;
    width: 160px;
    height: 40px;
    padding: 10px;
    text-align: center;
    position: absolute;
    bottom: 24px;
    right: 16px;
    cursor: pointer;
  }
`;
export const SelectDate = styled.div`
  display: flex;
  padding: 0px 16px 24px 16px;
`;
export const Radios = styled.div`
  display: flex;
  .img-item {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 0px;
  }
  .radio-item {
    display: block;
    width: 120%;
    margin-top: 10px;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: #009ca9;
  }
  .ant-radio-inner::after {
    background: linear-gradient(343.3deg, #009ca9 10.34%, #2ccfdd 88.46%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    top: 1px;
    left: 1px;
  }
`;

export default ProfileMasterCalenderWrapper;
