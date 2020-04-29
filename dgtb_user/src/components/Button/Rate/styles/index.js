import styled from "styled-components";

const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.background === undefined
      ? props.theme.backgroundRateDefault
      : props.background};
  border-radius: 8px;
  width: 56px;
  height: 24px;
  color: #d84851;
  font-family: "Roboto-Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-top: 8px;

  span {
    height: 18px;
    display: flex;
    align-items: flex-end;
    margin-right: 4px;
  }
`;

export default RateWrapper;
