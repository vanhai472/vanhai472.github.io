import styled from "styled-components";

const ServiceContainer = styled.div`
  width: 100%;
  height: 368px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const MasterProvide = styled.div`
  margin: 16px 0 0 16px;
  & > .name {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #ffffff;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-left: 8px;
  }
`;

export const ServiceProvide = styled.div`
  margin: 0 16px 16px 16px;
`;
export const ServiceOnline = styled.div`
  margin-bottom: 10px;
  & > span {
    color: #ffffff;
    font-family: "Roboto-Regular";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-left: 6px;
  }
`;
export const NameService = styled.div`
  color: #ffffff;
  font-family: "Roboto-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 10px;
`;
export const PriceService = styled.div`
  display: flex;
  justify-content: space-between;
  & > span {
    color: #ffffff;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  .backgroundActive {
    background: linear-gradient(352.87deg, #009ca9 10.34%, #2ccfdd 88.46%);
  }
`;

export default ServiceContainer;
