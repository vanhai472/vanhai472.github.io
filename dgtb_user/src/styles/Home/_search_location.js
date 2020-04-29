import styled from "styled-components";

const SearchContent = styled.div`
  position: absolute;
  top: 104px;
  left: 16px;
  width: calc(100% - 16px);
  height: calc(100% - 104px);
  & .card-address {
    margin-bottom: 38px;
  }
  @media only screen and (min-width: 768px) {
    left: 155px;
    top: 56px;
    width: calc(100% - 155px);
    height: calc(100% - 56px);
  }

  @media only screen and (min-width: 1024px) {
    left: 290px;
    top: 56px;
    width: calc(100% - 290px);
    height: calc(100% - 56px);
  }
`;

export const Search = styled.div`
  position: absolute;
  top: 24px;
  left: 16px;
  height: 56px;
  width: 218px;
  font-family: "Roboto-Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media only screen and (min-width: 1024px) {
    top: 48px;
  }
`;

export default SearchContent;
