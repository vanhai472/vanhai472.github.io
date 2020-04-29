import styled from "styled-components";

const SearrchResultWrapper = styled.div``;

export const SearrchResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .count-result > h3 {
    padding: 0;
    margin: 0;
    color: #0e0841;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 16px;
  }
  .count-result > span {
    color: #6e6c7e;
    font-family: "Roboto-Regular";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`;

export default SearrchResultWrapper;
