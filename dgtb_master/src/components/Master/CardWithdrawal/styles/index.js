import styled from "styled-components";

const CardWithdrawalWrapper = styled.div`
	padding-bottom: 16px;
	position: relative;
	border-bottom: 1px solid #edecf0;
`;

export const CardWithdrawalItem = styled.div`
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 16px;
	color: #6e6c7e;
	margin-bottom: 12px;
	display: flex;
	justify-content: space-between;

	.text {
		color: #0e0841;
	}
	.infor-user {
		display: flex;
		flex-direction: column;
	}
	.infor-user:nth-child(1) {
    margin-bottom: 4px;
	}

	.current {
		font-family: "Roboto-Medium";
		color: #d84851;
		font-weight: 500;
	}
`;

export default CardWithdrawalWrapper;
