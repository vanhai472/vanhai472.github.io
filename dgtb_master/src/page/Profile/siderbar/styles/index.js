import styled from "styled-components";

export const DashboardMasterContentSidebar = styled.div`
  height: 316px;
  border-radius: 8px;
  padding: 16px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
  @media only screen and (min-width: 768px) {
    width: 270px;
  }
  .showStatus {
    background: #edecf0;
    border-radius: 16px;
    width: 140px;
    height: 32px;
    padding: 7px;
    margin-top: 12px;
    text-align: center;
    color: #009ca9;
  }
  .ant-dropdown-trigger > span {
    position: relative !important;
    color: #0e0841 !important;
    top: 23px;
    left: -27px;
  }
  #optionProfile > a {
    width: 100%;
    height: 40px;
    display: inline-block;
    color: #0e0841;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    padding-left: 12px;
    padding-top: 11px;
    margin-bottom: 12px;
    border-radius: 8px;
    cursor: pointer;
  }
  #optionProfile > a:hover {
    background: rgba(242, 242, 242, 1);
  }

  #optionProfile > a:last-of-type {
    margin-bottom: 0;
  }
  #optionProfile > a.active {
    background: rgba(0, 156, 169, 0.2);
    color: #009ca9;
  }
  .ant-dropdown-trigger {
    display: flex !important;
  }
`;

export const WraperMaster = styled.div`
  display: flex;
  align-items: center;
  color: #009ca9;

  .nameMaster {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #0e0841;
    margin-left: 12px;
  }
  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;
export const BorderBottom = styled.div`
  border-bottom: 1px solid #edecf0;
  margin-bottom: 8px;
`;
