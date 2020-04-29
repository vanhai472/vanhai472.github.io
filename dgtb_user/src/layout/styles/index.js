import styled from "styled-components";

const MainLayout = styled.div`
	@font-face {
		font-family: "Roboto-Regular";
		src: url("/fonts/Roboto/Roboto-Regular.ttf");
	}

	@font-face {
		font-family: "Roboto-Medium";
		src: url("/fonts/Roboto/Roboto-Medium.ttf");
	}

	@font-face {
		font-family: "ArtelyInks";
		src: url("/fonts/ArtelyInks/ArtelyInks.otf");
	}
	.main {
	}
	.container {
		width: 100%;
		background: #fff;
		margin-right: auto;
		margin-left: auto;
		padding: 0px 15px;

		@media only screen and (min-width: 768px) {
			width: 750px;
		}

		@media only screen and (min-width: 992px) {
			width: 970px;
		}

		@media only screen and (min-width: 1200px) {
			width: 1140px;
		}

		@media only screen and (min-width: 1600px) {
			width: 1440px;

			.main {
				width: 1140px;
				margin-right: auto;
				margin-left: auto;
			}
		}
	}
	.main-page {
		/* margin-top: 64px; */
		min-height: calc(100vh - 453px);
	}
	.sign-blue {
		height: 40px !important;
		border-radius: 12px !important;
		font-family: "Roboto-Medium";
		font-weight: 500;
		line-height: 16px;
		text-align: center;
		font-size: 14px;
		font-style: normal;
		background: linear-gradient(352.87deg, #009ca9 10.34%, #2ccfdd 88.46%);
		color: #ffffff;
	}

	.sign-blue:hover,
	.sign-blue:focus,
	.sign-blue:active,
	.sign-blue.active {
		background: linear-gradient(352.87deg, #009ca9 10.34%, #2ccfdd 88.46%);
		color: #ffffff;
		border-color: #2ccfdd;
	}

	.sign-white {
		height: 40px;
		border-radius: 12px !important;
		font-family: "Roboto-Medium";
		text-transform: capitalize;
		font-weight: 500;
		line-height: 16px;
		text-align: center;
		font-size: 14px;
		font-style: normal;
		border: 2px solid #009ca9;
		color: #009ca9;
		padding: 12px;
	}
	.sign-white:hover,
	.sign-white:focus,
	.sign-white:active,
	.sign-white.active {
		border: 2px solid #009ca9;
		color: #009ca9;
	}
`;
export default MainLayout;
