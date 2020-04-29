import styled from "styled-components";

const CardBookingWrapper = styled.div`
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  margin-top: 24px;
`;

export const CardBookingFooter = styled.div`
  box-sizing: border-box;
  padding: 16px 12px;
  display: flex;
  justify-content: space-between;
`;

export const CardBookingFooterLeft = styled.div`
  flex: 75%;
  display: flex;
  flex-direction: column;

  span:nth-child(1) {
    color: #6e6c7e;
    font-family: "Roboto-Regular";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 4px;
  }

  span:nth-child(2) {
    color: #27ae60;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 8px;
  }

  span:nth-child(3) {
    color: #6e6c7e;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    width: 294px;
  }
`;

export const CardBookingFooterRight = styled.div`
  flex: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  h3 {
    padding: 0;
    margin: 0;
    color: #6e6c7e;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 12px;
  }
`;

export default CardBookingWrapper;
