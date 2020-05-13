import styled from "styled-components";

const WraperFavourites = styled.div`
  margin-top: 64px;
`;
export const WraperSiderbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .header-siderbar {
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 24px;
    height: 160px;
    @media only screen and (min-width: 768px) {
      width: 270px;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 270px;
  }
`;
export const RateMaster = styled.div`
  & > span {
    font-family: Roboto;
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: #009ca9;
  }
  .fiveRate {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #009ca9;
    margin-left: 6px;
  }
`;

export const FilterContainer = styled.div`
  border-radius: 8px;
  margin-bottom: 32px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  padding: 16px;
  @media only screen and (min-width: 768px) {
    width: 270px;
  }
`;
export const FilterHeader = styled.div`
  padding-top: 16px;
  height: 80px;
  border-bottom: 1px solid #edecf0;
  display: flex;
  flex-direction: column;

  & > .filter-reset {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    & > span:first-of-type {
      color: #0e0841;
      font-family: "Roboto-Medium";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
    }

    & > span:last-of-type {
      color: #009ca9;
      font-family: "Roboto-Medium";
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      cursor: pointer;
    }
  }

  & > div {
    color: #6e6c7e;
    font-family: "Roboto-Regular";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const FilterText = styled.div`
  color: #0e0841;
  font-family: "Roboto-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const FilterStar = styled.div`
  height: 241px;
  border-bottom: 1px solid #edecf0;

  & > .filter-star {
    display: flex;
    flex-direction: column;
  }

  & img {
    margin-right: 8px;
  }
  & .ant-radio-wrapper {
    margin-bottom: 16px;
    display: flex;
    align-items: flex-end;
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

export const FilterBooking = styled.div`
  & > .filter-booking {
    display: flex;
    flex-direction: column;
  }
  & > .booking {
    color: #4f4f4f;
    font-family: "Roboto-Regular";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  & .ant-radio-wrapper {
    margin-bottom: 13px;
    display: flex;
    align-items: flex-end;
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

export default WraperFavourites;
