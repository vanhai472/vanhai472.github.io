import styled from "styled-components";

const SidebarMasterWapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-width: 768px) {
		flex-direction: column;
	}
	& > img {
		position: absolute;
		top: 18px;
		right: 18px;
	}
`;

export const SidebarMasterAvatar = styled.div`
	margin-top: 24px;
`;

export const SidebarMasterInforWrapper = styled.div``;

export const SidebarMasterInforStatus = styled.div`
	@media only screen and (min-width: 768px) {
		margin-top: 16px;
	}
	h3 {
		margin: 0;
		padding: 0;
		color: #0e0841;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 28px;
		text-align: center;
		margin-bottom: 8px;
	}
	.status {
		text-align: center;
		margin-bottom: 24px;
	}
	.status > span:nth-child(1) {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #009ca9;
		display: inline-block;
		margin-right: 4px;
	}
	.status > span:nth-child(2) {
		color: #009ca9;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 19px;
	}
`;

export const SidebarMasterMessenger = styled.div`
	img {
		margin-right: 6.5px;
	}
`;

export default SidebarMasterWapper;
