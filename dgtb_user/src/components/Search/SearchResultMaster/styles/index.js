import styled from "styled-components";

const CardSearchMasterWrapper = styled.div`
	height: 220px;
	box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.12);
	border-radius: 8px;
	display: flex;
	margin-bottom: 24px;
`;

export const WrapperSwiper = styled.div`
	width: 180px;
	height: 100%;
	border-radius: 8px;
	position: relative;

	.iconSevices {
		position: absolute;
		top: 8px;
		left: 8px;
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}
	.image-viewResultServices {
		width: 180px;
		height: 220px;
		border-radius: 8px;
	}
	.swiper-pagination-bullets {
		bottom: 1px;
	}
	.swiper-pagination-bullet {
		background: #fff;
		opacity: 1;
	}
	.swiper-pagination-bullet-active {
		background: linear-gradient(343.3deg, #009ca9 10.34%, #2ccfdd 88.46%);
	}
`;

export const CardSearchMasterContent = styled.div`
	padding: 16px;
	width: calc(100% - 180px);
`;

export const ContentHeader = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 12px;
	position: relative;
	h3 {
		margin: 0;
		padding: 0;
		color: #0e0841;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 28px;
		margin-left: 12px;
		margin-right: 12px;
	}
	.rate2 {
		margin-top: 0;
	}
	.heartMaser {
		position: absolute;
		top: 4px;
		right: 16px;
	}
`;

export const ContentCategory = styled.div`
	margin-bottom: 12px;
	& > span {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		color: #009ca9;
	}
	.tuviBoitoan {
		font-family: "Roboto";
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		color: #009ca9;
		border: 1px solid #009ca9;
		border-radius: 16px;
		padding: 4px 8px;
		cursor: pointer;
	}
	span:first-of-type {
		margin-right: 8px;
	}
	.tuviBoitoan:hover {
		color: #fff;
		background: linear-gradient(352.87deg, #009ca9 10.34%, #2ccfdd 88.46%);
		border: 1px solid #009ca9;
	}
	.activeTuviBoitoan {
		color: #fff;
		background: linear-gradient(352.87deg, #009ca9 10.34%, #2ccfdd 88.46%);
		border: 1px solid #009ca9;
	}
`;

export const ContentInfor = styled.div`
	.direct {
		display: flex;
		margin-top: 12px;

		img {
			margin-right: 8px;
		}
		span {
			color: #6e6c7e;
			font-family: "Roboto-Regular";
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 16px;
		}
	}
`;

export const ContentFooter = styled.div`
	margin-top: 16px;
	display: flex;
	justify-content: space-between;

	& > span {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		color: #6e6c7e;
	}

	.rate-admin > span {
		color: #6e6c7e;
		font-family: "Roboto-Regular";
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		margin-left: 8px;
	}
	.DetailButton {
		border: 2px solid #009ca9;
		box-sizing: border-box;
		border-radius: 12px;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		color: #009ca9;
		width: 156px;
		height: 40px;
		padding: 12px;
		cursor: pointer;
		display: ${(props) => (props.display ? "none" : "")};
	}
	.DetailButtonActive {
		background: linear-gradient(355.71deg, #009ca9 10.34%, #2ccfdd 88.46%);
		color: #fff;
		border: none;
	}
	.DetailButton:hover {
		background: linear-gradient(355.71deg, #009ca9 10.34%, #2ccfdd 88.46%);
		color: #fff;
		border: none;
	}
`;

export default CardSearchMasterWrapper;
