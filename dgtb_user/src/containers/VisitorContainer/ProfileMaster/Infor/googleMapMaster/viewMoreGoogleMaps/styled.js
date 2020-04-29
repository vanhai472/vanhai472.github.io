import styled from "styled-components";

export const ViewMore = styled.div`
	width: 100%;
	background: #fff;
	margin-top: 64px;
	margin-right: auto;
	margin-left: auto;
	width: 1440px;
	.ant-layout-sider-dark {
		background: #fff !important;
		min-width: 0px !important;
	}

	.slider {
		position: relative !important;
		padding: 24px 24px 0px 24px;
	}
	.clickSlider {
		display: inline-block;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		position: absolute;
		right: ${(props) => (props.right === false ? "-20px" : "-40px")};
		top: 51%;
		transform: translateY(-50%);
		z-index: 2;
		transition: 0.5s;
		cursor: pointer;
	}
	.ant-menu-vertical {
		background: transparent !important;
	}
	.ant-layout-sider-collapsed {
	}
	.ant-menu-dark {
		background: transparent !important;
	}
	.titleMoreMap {
		font-size: 24px;
		line-height: 28px;

		color: #0e0841;
	}
`;
