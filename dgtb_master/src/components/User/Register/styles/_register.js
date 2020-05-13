import styled from "styled-components";

const RegisterContainer = styled.div`
	width: 366px;
	height: 419px;
	box-shadow: 4px 16px 32px rgba(0, 0, 0, 0.08);
	border-radius: 16px;
	background: #fff;
	position: relative;

	& > img {
		position: absolute;
		top: 20.5px;
		right: 20.5px;
		cursor: pointer;
	}
	.title-login {
		font-family: "ArtelyInks";
		font-style: italic;
		font-weight: 1;
		font-size: 36px;
		line-height: 36px;
		padding: 20px 0px 16px 16px;
	}
	.container-login {
		padding: 0px 16px 0px 16px;
	}
	.input-phone {
		margin-bottom: 4px;
	}
	.input-password {
		margin-top: 20px;
	}
	.btn-login {
		margin: 0 !important;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 0 16px;
		/* position: absolute;
    bottom: 28px; */
	}
	.input-phone {
		color: #6e6c7e;
		font-family: "Roboto-Regular";
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 19px;
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

export default RegisterContainer;
