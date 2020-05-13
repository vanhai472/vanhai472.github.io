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

export const DashboardMasterContentSidebar = styled.div`
	height: 156px;
	border-radius: 8px;
	padding: 16px;
	padding-top: 24px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
	@media only screen and (min-width: 768px) {
		width: 270px;
	}

	.total-current > div {
		color: #6e6c7e;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		margin-bottom: 8px;
	}
	.total-current > span {
		color: #27ae60;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 28px;
	}
`;

export const DashboardMasterContent = styled.div`
	display: flex;
	@media only screen and (min-width: 768px) {
		width: calc(100% - 270px);
		margin-left: 20px;
		margin-top: 0;
	}
`;

export const DashboardMasterEarnings = styled.div`
	flex: 100%;
	margin-top: 16px;
	position: relative;
	display: ${(props) => (props.withdrawal ? "none" : "block")};

	@media only screen and (min-width: 992px) {
		flex: 60%;
		box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
		border-radius: 8px;
		display: ${(props) => (props.withdrawal ? "block" : null)};
	}
`;

export const DashboardMasterWithdrawal = styled.div`
	flex: 100%;
	margin-top: 16px;
	display: ${(props) => (props.withdrawal ? "block" : "none")};

	@media only screen and (min-width: 992px) {
		flex: 40%;
		display: block;
		margin-left: 20px;
		box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
		border-radius: 8px;
		height: 1150px;
	}
`;

export default DashboardMasterWrapper;
