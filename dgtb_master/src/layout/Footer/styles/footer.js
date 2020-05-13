import styled from "styled-components";

const FooterLayout = styled.div`
	width: 100%;
	.footer-main {
		position: relative;
		width: 100%;
	}
	.footer-header {
		background: #009ca9;
		height: 80px;
	}
	.footer-logo,
	.footer-info {
		height: 100%;
		display: flex;
		align-items: center;
		margin-right: auto;
		margin-left: auto;

		@media only screen and (min-width: 768px) {
			width: 750px;
		}
		@media only screen and (min-width: 992px) {
			width: 970px;
		}
		@media only screen and (min-width: 1200px) {
			width: 1140px;
		}
		/* @media only screen and (min-width: 1600px) {
      width: 1440px;
      padding: 0px 165px;
    } */

		& > .logo > a > h1 {
			padding: 0;
			margin: 0;
			font-family: "ArtelyInks";
			height: 32px;
			font-style: normal;
			font-weight: normal;
			font-size: 32px;
			line-height: 32px;
			cursor: pointer;
			color: #fff;
		}
	}
	.footer-content {
		background: #333;
		color: #fff;
		border-bottom: 1px solid #6e6c7e;
		@media only screen and (min-width: 768px) {
			height: 309px;
		}
	}
	.footer-info {
		align-items: flex-start;
	}
	.box-content {
		width: 100%;
		height: 100%;
		margin: 0;
		padding-top: 24px;
		padding-left: 0;
		@media only screen and (min-width: 768px) {
			padding-top: 40px;
		}

		& > li {
			float: left;
			width: calc(100% / 2);
			@media only screen and (min-width: 768px) {
				width: calc(100% / 6);
			}
		}
	}
	.box-content li {
		list-style-type: none;
	}

	.box-content > li > span {
		font-family: "Roboto-Regular";
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
		color: #ffffff;
	}
	.box-content > li > ul {
		margin-top: 16px;
		padding-left: 0;

		& > li {
			margin-bottom: 8px;
		}
	}
	.box-content > li > ul > li > a {
		margin-bottom: 8px;
		font-family: "Roboto-Regular";
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		color: #a7a7a7;
	}
	.footer-end {
		background: #333333;
		@media only screen and (min-width: 768px) {
			height: 64px;
		}
	}
	.footer-info {
		padding-top: 16px;
		flex-direction: column;
		color: #a7a7a7;
		font-family: "Roboto-Regular";
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		@media only screen and (min-width: 768px) {
			align-items: center;
			flex-direction: row;
		}

		& > div {
			@media only screen and (min-width: 768px) {
				margin-right: 40px;
			}
			margin-bottom: 8px;
		}
	}
	.download > li {
		background: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 128px;
		height: 48px;
		box-shadow: 0px 6px 20px rgba(55, 103, 160, 0.1);
		border-radius: 8px;
	}
`;

export default FooterLayout;
