import styled from "styled-components";

const CardSearchMasterWrapper = styled.div`
	height: 245px;
	box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.12);
	border-radius: 8px;
	display: flex;
	margin-bottom: 24px;
`;

export const WrapperSwiper = styled.div`
	width: 180px;
	height: 100%;
	border-radius: 8px;

	img {
		width: 100%;
	}
`;

export const CardSearchMasterContent = styled.div`
	width: calc(100% - 180px);
`;

export const ContentHeader = styled.div`
	padding: 16px;
	border-bottom: 1px solid #edecf0;
	h3 {
		padding: 0%;
		margin: 0;
		color: #0e0841;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 28px;
		margin-bottom: 12px;
	}
	span {
		border: 1px solid #009ca9;
		border-radius: 12px;
		padding: 4px 8px;
		color: #009ca9;
		font-family: "Roboto-Regular";
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		display: inline-block;
	}
`;

export const ContentWrapper = styled.div`
	padding: 18px 16px 0 16px;
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 18px;

	&:last-of-type {
		margin-bottom: 0;
	}
`;

export const ContentOption = styled.div`
	display: flex;
	align-items: center;
	span {
		color: #a7a7a7;
		font-family: "Roboto-Regular";
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
		margin-left: 8.5px;
	}

	&:first-of-type > span {
		color: #009ca9;
		font-family: "Roboto-Medium";
	}

	.promotion {
		color: #a7a7a7;
		font-family: "Roboto-Regular";
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		text-decoration-line: line-through;
	}

	.price {
		color: #27ae60;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
	}
`;

export const ContentFooter = styled.div`
	padding: 16px;
	display: flex;
	justify-content: space-between;
	.footer-header {
		display: flex;
		align-items: center;
	}

	.footer-header > h3 {
		margin: 0;
		padding: 0;
		margin-left: 8px;
		margin-right: 12px;
		color: #0e0841;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
	}

	.footer-header > .rate2 {
		margin-top: 0;
		background: rgba(242, 201, 76, 0.2);
	}
`;

export default CardSearchMasterWrapper;
