import styled from "styled-components";

const DepositeInforWrapper = styled.div`
	display: flex;
	flex-direction: column;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 16px;
	@media only screen and (min-width: 768px) {
		flex-direction: row;
	}
	.infor {
		margin-bottom: 4px;
		color: #6e6c7e;
		font-size: 16px;
		line-height: 19px;
	}
	.text {
		margin-bottom: 8px;
	}
`;

export const DepositeInforAccount = styled.div`
	height: 163px;
	box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
	border-radius: 8px;
	padding: 16px;
	@media only screen and (min-width: 768px) {
		width: 270px;
	}

	.current {
		color: #27ae60;
		font-weight: 500;
		font-size: 24px;
		line-height: 28px;
		font-family: "Roboto-Medium";
		margin-bottom: 16px;
	}
`;

export const Input = styled.input`
	font-family: "Roboto-Medium";
	color: #0e0841;
	font-size: 16px;
	line-height: 19px;
	height: 40px;
	width: 100%;
	padding-left: 12px;
	border: 1px solid #edecf0;
	box-sizing: border-box;
	border-radius: 4px;
`;

export const DepositeInforContent = styled.div`
	box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
	border-radius: 8px;
	margin-top: 24px;
	margin-bottom: 40px;
	padding: 16px;
	@media only screen and (min-width: 768px) {
		width: calc(100% - 270px);
		margin-top: 0;
		margin-left: 20px;
	}
`;

export const DepositeInforCardInfor = styled.div`
	height: 133px;
	border-radius: 8px;
	border: 2px solid #009ca9;
	padding: 16px;
	position: relative;

	& > div:nth-child(1) {
		text-transform: uppercase;
		color: #0e0841;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
		font-family: "Roboto-Medium";
	}

	& > div:nth-child(2) {
		color: #6e6c7e;
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
		font-family: "Roboto-Medium";
	}

	& > div:nth-child(3) {
		color: #0e0841;
		letter-spacing: 0.16em;
		font-size: 16px;
		line-height: 19px;
	}

	& > div:nth-child(4) {
		color: #0e0841;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
		font-family: "Roboto-Medium";
	}

	.sign-white {
		position: absolute;
		top: 16px;
		right: 16px;
	}
`;

export const DepositeInforCardInforUser = styled.div`
	height: 376px;
	margin-top: 16px;
	padding: 16px;
	border-radius: 8px;
	border: 1px dashed #edecf0;

	@media only screen and (min-width: 768px) {
		height: 297px;
	}

	.check {
		color: #4f4f4f;
	}
`;

export const CardInforUserItem = styled.div`
	margin-bottom: 16px;
`;

export const CardInforUserItemGroup = styled.div`
	margin-bottom: 8px;

	@media only screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		& > div {
			width: calc((100% - 16px) / 2);
		}
	}
`;

export default DepositeInforWrapper;
