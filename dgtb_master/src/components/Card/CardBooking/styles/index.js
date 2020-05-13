import styled from "styled-components";

const CardBookingWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;
export const CardBookingContent = styled.div`
  display: flex;
`;

export const CardBookingInforWrapper = styled.div`
  flex: 78%;
  border-bottom: 1px dashed #edecf0;
  border-right: 1px solid #edecf0;

  & > div:nth-child(1) {
    height: 64px;
  }

  & > div:nth-child(2) {
    height: 72px;
  }

  & > div:nth-child(3) {
    height: 108px;
  }
`;

export const CardBookingInfor = styled.div`
  display: flex;
  box-sizing: border-box;
`;

export const InforLeft = styled.div`
  flex: 50%;
  padding: 0 12px;
  padding-bottom: 0;
  border-right: 1px solid #edecf0;
  position: relative;

  .booking-header {
    display: flex;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid #edecf0;
  }
  .booking-header > h3 {
    margin: 0;
    padding: 0;
    color: #009ca9;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-left: 8px;
  }
`;

export const InforRight = styled.div`
  flex: 50%;
  padding: 0 12px;
  padding-bottom: 0px;
  .infor {
    padding-bottom: 12px;
    border-bottom: 1px solid #edecf0;
    & > div {
      color: #6e6c7e;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
    }
    & > span {
      display: inline-block;
      color: #0e0841;
      font-family: "Roboto-Medium";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

export const CardBookingImage = styled.div`
  flex: 22%;
  height: 220px;
  position: relative;
  margin: 12px;

  #category {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .service {
    position: absolute;
    top: 8px;
    left: 8px;
    cursor: pointer;
  }
`;

export default CardBookingWrapper;
