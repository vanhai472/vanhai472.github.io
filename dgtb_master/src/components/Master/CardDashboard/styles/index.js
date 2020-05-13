import styled from "styled-components";

const CardDashboardWrapper = styled.div`
	padding: 16px;
	border: 1px solid #edecf0;
	box-sizing: border-box;
	border-radius: 8px;
	height: 192px;
	position: relative;

	.text {
		color: #6e6c7e;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		margin-right: 6px;
	}

	.detail {
		color: #0e0841;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
	}
`;

export const CardDashboardUser = styled.div`
	margin-bottom: 16px;
	display: flex;
	.user {
		width: 181px;
		height: 40px;
		background: #e4e6eb;
		border-radius: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.user > .sign-white {
		height: 32px;
		border-radius: 16px !important;
		padding: 0;
		margin-right: 4px;
	}
	.user > .sign-white > span {
		padding-top: 3px;
	}
`;

export const CardDashboardTime = styled.div`
	margin-bottom: 12px;
`;

export const CardDashboardService = styled.div`
	.service {
		display: flex;
		align-items: baseline;
	}
	.text {
		width: 45px;
		margin-right: 8px;
		margin-bottom: 5px;
	}
	.name-service {
		color: #009ca9;
		font-size: 16px;
		line-height: 19px;
		margin-right: 10px;
	}
	.service-option {
		display: flex;
		align-items: flex-end;
		span {
			color: #0e0841;
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 16px;
			font-family: "Roboto-Medium";
			display: inline-block;
			margin-left: 8.5px;
		}
	}
`;

export const CardDashboardTotal = styled.div`
	position: absolute;
	bottom: 16px;
	right: 16px;

	.detail {
		color: #27ae60;
		line-height: 21px;
		font-size: 18px;
	}
`;

export default CardDashboardWrapper;
