import styled from "styled-components";

const SearchCategoryContainer = styled.div`
  background: url("/icon/Category/background.png") no-repeat;
  position: relative;
  overflow: hidden;
  height: 568px;

  margin-top: 32px;

  @media only screen and (min-width: 768px) {
    height: 484px;
    margin-top: 80px;
  }
`;

export const ButtonMore = styled.div``;

export const SearchContentCategory = styled.div`
  position: absolute;
  top: 104px;
  width: 100%;
  padding: 0 16px;
  overflow: hidden;
  height: calc(100% - 104px);

  @media only screen and (min-width: 768px) {
    left: 155px;
    top: 140px;
    width: calc(100% - 155px);
    height: calc(100% - 140px);
  }
  @media only screen and (min-width: 1024px) {
    left: 290px;
    width: calc(100% - 290px);
  }

  a {
    display: inline-block;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
  }
`;

export default SearchCategoryContainer;
