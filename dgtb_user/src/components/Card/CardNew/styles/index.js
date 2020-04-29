import styled from "styled-components";

const CardNewContainer = styled.div`
	height: 280px;
	overflow: hidden;
	text-overflow: ellipsis;

	.news-header {
		width: 367px;
		height: 140px;
		position: relative;
	}
	.news-header > img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.news-content {
		height: 140px;
		box-sizing: border-box;
		overflow: hidden;
	}

	.text-content {
		padding: 12px;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
		color: #0e0841;
	}
	.display {
		font-family: "Roboto";
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		height: 95px;
	}
`;

export default CardNewContainer;
