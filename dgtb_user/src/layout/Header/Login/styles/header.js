import styled from "styled-components";

const HeaderLayout = styled.div`
  height: 64px;
  background: #fff;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  left: 0;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
  /* @media only screen and (max-width: 768px) {
    position: static;
  } */

  .header-content {
    height: 64px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding: 0px 15px;
    @media only screen and (min-width: 768px) {
      width: 750px;
    }
    @media only screen and (min-width: 992px) {
      width: 970px;
    }
    @media only screen and (min-width: 1200px) {
      width: 1140px;
    }

    @media only screen and (min-width: 1600px) {
      padding: 0;
    }
  }
  .logo > a > h1 {
    padding: 0;
    margin: 0;
    font-family: "ArtelyInks";
    height: 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 32px;
    color: #009ca9;
    cursor: pointer;
  }
  .header-right,
  .header-right-button {
    display: flex;
    justify-content: space-between;
  }

  .header-right-button > .ant-btn:first-of-type {
    margin-right: 12px;
  }
  .menu-m {
    .ant-drawer-title {
      color: white;
      font-family: "Roboto-Medium";
      text-transform: capitalize;
      font-weight: 500;
      line-height: 16px;
      font-size: 14px;
      font-style: normal;
    }
  }
  .user-login {
    display: flex;
  }
`;

export default HeaderLayout;
