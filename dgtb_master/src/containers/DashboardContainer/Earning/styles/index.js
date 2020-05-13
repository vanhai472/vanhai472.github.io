import styled from "styled-components";

const EarningWrapper = styled.div`
	padding: 16px 0;
	@media only screen and (min-width: 992px) {
		padding: 16px;
	}
	.earnings {
		display: flex;
		flex-direction: column;
		margin-bottom: 25px;

		@media only screen and (min-width: 992px) {
			padding-bottom: 0;
			flex-direction: row;
			justify-content: space-between;

			.quantity {
				text-align: right;
			}
		}
	}
	#earnings {
		color: #0e0841;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
	
	}

	.total > span:nth-child(1),
	.quantity {
		color: #6e6c7e;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 21px;
		margin-right: 8px;
	}
	.total > span:nth-child(2) {
		color: #27ae60;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
	}
	.quantity {
		font-size: 14px;
		margin-top: 4px;
	}
`;

export const DashboardMasterOption = styled.div`
	height: 48px;
	background: #edecf0;
	border-radius: 6px;
	display: flex;
	align-items: center;
	margin-bottom: 32px;
	@media only screen and (min-width: 992px) {
		display: none;
	}

	#SelectOptionSearch {
		display: flex;
		flex: 100%;
	}

	#SelectOptionSearch > a {
		display: inline-flex;
		height: 40px;
		flex: 50%;
		color: #6e6c7e;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	#SelectOptionSearch > a.active {
		margin-left: 4px;
		margin-right: 4px;
		background: #fff;
		color: #009ca9;
	}
`;

export const DashboardMasterContentHeader = styled.div`
	border: 1px solid #e4e6eb;
	box-sizing: border-box;
	border-radius: 8px;
	height: 48px;
	padding: 0 24px;
	display: flex;
	align-items: center;

	span {
		color: #0e0841;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
	}
`;

export const DashboardMasterAnalysis = styled.div`
	margin-top: 16px;
	margin-bottom: 8px;
	display: flex;
	justify-content: space-between;

	.analysis {
		color: #6e6c7e;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
	}
	.current-analysis {
		font-family: "Roboto-Medium";
		font-weight: 500;
		color: #27ae60;
		margin-bottom: 4px;
	}
`;

export const DashboardMasterItem = styled.div`
	margin-top: 16px;
`;

export default EarningWrapper;
