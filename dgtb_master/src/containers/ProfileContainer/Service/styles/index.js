import styled from "styled-components";

const ServiceWrapper = styled.div`
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
  border-radius: 8px;
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
export const Container = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;
export const Wraperoption = styled.div`
  display: flex;
  & > div {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #6e6c7e;
    border: 2px solid #edecf0;
    box-sizing: border-box;
    border-radius: 12px;
    margin: 0px 6px;
    height: 40px;
    padding: 10px;
    cursor: pointer;
  }
  & > div:first-child {
    margin-left: 0px;
  }
  & > div:last-child {
    margin-right: 0px;
  }
`;
export const CreateService = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ButtonCreate = styled.div`
  background: linear-gradient(355.71deg, #009ca9 10.34%, #2ccfdd 88.46%);
  border-radius: 12px;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  width: 160px;
  height: 40px;
  padding: 12px;
  text-align: center;
  cursor: pointer;
`;

export default ServiceWrapper;
