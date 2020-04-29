import styled from "styled-components";
const ContainerStyleGoogleMap = styled.div`
	& > h3 {
		font-weight: 500;
		font-size: 24px;
		line-height: 28px;

		color: #0e0841;

		margin-bottom: 24px;
	}
	.location-googleMap {
		width: 13px;
		height: 16px;
		margin-right: 7px;
		margin-bottom: 1px;
	}
	.addres-googleMap-master {
		font-size: 14px;
		line-height: 16px;

		color: #6e6c7e;
	}
`;

export const WraperGoogleMapMaster = styled.div`
	width: 850px;
	height: 136px;
	border-radius: 8px;
	margin-bottom: 80px;
	position: relative;
	.positionButtonSeeMap {
		position: absolute;
		right: 0px;
		z-index: 2;
	}
	.seeMoreMap {
		background: #009ca9;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "Roboto-Regular";
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		width: 160px;
		height: 48px;
		border-radius: 8px;
	}
`;
export default ContainerStyleGoogleMap;
