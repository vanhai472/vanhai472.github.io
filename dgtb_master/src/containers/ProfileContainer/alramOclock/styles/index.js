import styled from "styled-components";

const Wraper = styled.div`
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  margin-bottom: 24px;
  & > h2 {
    font-size: 18px;
    color: #0e0841;
    border-bottom: 1px solid #edecf0;
    padding: 16px 0px 16px 16px;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
  }
`;
export const Conteiner = styled.div`
  padding: 16px;
  padding-bottom: 24px;
`;
export const Alarm = styled.div`
  display: flex;
`;
export const Hous = styled.div`
  display: flex;
  & > h4 {
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    color: #0e0841;
    margin-right: 20px;
    align-items: start;
  }
  .button {
    border-radius: 8px;
    width: 64px;
    height: 40px;
  }
`;
export const SelectAlarm = styled.div`
  margin-right: 50px;
  display: flex;
  align-items: center;
  .time {
    margin-bottom: 0px;
    margin-left: 10px;
    color: #6e6c7e;
  }
  .showTimeAlarm {
    background: rgba(0, 156, 169, 0.1);
    border-radius: 4px;
    width: 64px;
    height: 64px;
    position: relative;
    z-index: 1;
    margin: 7px 0px;
    p {
      position: absolute;
      color: #009ca9;
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const Minutes = styled.div`
  display: flex;
  align-items: center;
  .time {
    margin-bottom: 0px;
    margin-left: 10px;
    color: #6e6c7e;
  }
  .showTimeAlarm {
    background: rgba(0, 156, 169, 0.1);
    border-radius: 8px;
    width: 64px;
    height: 64px;
    position: relative;
    z-index: 1;
    margin: 7px 0px;
    p {
      position: absolute;
      color: #009ca9;
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default Wraper;
