import styled from "styled-components";

const ProfileUserForm = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
  padding: 0 16px;
`;

export const ProfileUserInfor = styled.div`
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background: #ffffff;
  /* height: 685px; */

  .infor-user-header {
    border-bottom: 1px solid #edecf0;
    padding: 16px 16px 0px 16px;
  }
  .infor-user-header > h2 {
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #0e0841;
  }
  .infor-user-header > span {
    color: #6e6c7e;
    font-family: "Roboto-Regular";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    display: inline-block;
    margin-bottom: 16px;
  }
`;

export const ProfileUserContact = styled(ProfileUserInfor)`
  margin-top: 24px;
`;

export const ProfileUserPassword = styled(ProfileUserContact)`
  height: 157px;
  margin-bottom: 90px;

  .ant-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-btn > span {
    margin-left: 4px;
    height: 20px;
    display: flex;
    align-items: flex-end;
  }
`;

export const InforItem = styled.div`
  margin-bottom: 24px;
  display: flex;
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 24px;
  }
  .sex {
    width: 240px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #edecf0;
    color: #0e0841;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding-left: 12px;
  }
  .anticon {
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    border: none !important;
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    border: none !important;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 105%;
    height: 38px;
    padding: 0 11px;
    right: 12px;
  }
  .ant-select-selection-search-input {
    height: 100%;
  }
`;

export const Inputt = styled.input`
  width: 240px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #edecf0;
  color: #0e0841;
  font-family: "Roboto-Medium";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  padding-left: 12px;
`;
export const Span = styled.span`
  width: 177px;
  color: #6e6c7e;
  font-family: "Roboto-Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: inline-block;
`;
export default ProfileUserForm;
