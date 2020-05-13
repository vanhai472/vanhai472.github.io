import styled from "styled-components";

const IntroductionWrapper = styled.div`
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

export const IntroductionContent = styled.div`
  padding: 0px 16px 12px 16px;
  margin-bottom: 24px;
  & > p {
    border: 1px solid #edecf0;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 12px;
    font-size: 16px;
    line-height: 19px;
    color: #0e0841;
  }
`;

export default IntroductionWrapper;
