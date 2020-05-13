import styled from "styled-components";

const DashboardMasterWrapper = styled.div`
  margin-top: 64px;
`;

export const DashboardMasterNav = styled.div`
  height: 72px;
  padding-top: 16px;
`;

export const DashboardMasterContentWraper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DashboardMasterContent = styled.div`
  @media only screen and (min-width: 768px) {
    width: calc(100% - 270px);
    margin-left: 20px;
    margin-top: 0;
  }
`;

export default DashboardMasterWrapper;
