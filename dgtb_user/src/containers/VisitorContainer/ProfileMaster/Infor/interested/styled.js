import styled from "styled-components";

export const FamousMasterContainer = styled.div`
	position: relative;
	margin-top: ${(props) => (props.comment ? null : "32px")};
	height: ${(props) => (props.comment ? "460px" : null)};

	@media only screen and (min-width: 768px) {
		margin-top: ${(props) => (props.comment ? null : "80px")};
	}

	.swiper-slide {
		width: 270px;
	}

	.swiper-container {
		@media only screen and (min-width: 768px) {
			padding-bottom: ${(props) => (props.comment ? "40px" : null)};
		}
	}

	.swiper-pagination-bullets {
		display: none;
		bottom: 0px;
		@media only screen and (min-width: 768px) {
			display: block;
		}
	}

	.swiper-pagination-bullet {
		opacity: 1;
		background: #edecf0;
	}

	.swiper-pagination-bullet-active {
		background: linear-gradient(343.3deg, #009ca9 10.34%, #2ccfdd 88.46%);
	}

	.custom-next,
	.custom-prev {
		top: 46%;
		width: 40px;
		height: 40px;
		background: linear-gradient(343.3deg, #009ca9 10.34%, #2ccfdd 88.46%);
		border-radius: 50%;
		outline: none;

		@media only screen and (max-width: 576px) {
			display: none;
		}
	}

	.custom-next {
		right: 35px;
	}

	.custom-prev {
		left: 24px;
	}

	.swiper-button-disabled {
		background: #fff;
		opacity: 1;
		cursor: not-allowed;
		pointer-events: all;
	}

	.custom-next::after,
	.custom-prev::after {
		content: url("/image/arrows/Right.png");
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: initial;
		font-family: initial;
		padding-top: 5px;
	}

	.custom-prev::after {
		content: url("/image/arrows/Left.png");
	}

	.custom-prev.swiper-button-disabled::after {
		content: url("/image/arrows/Left-dis.png") !important;
	}

	.custom-next.swiper-button-disabled::after {
		content: url("/image/arrows/Right-dis.png");
	}
	& .card-main {
		margin-bottom: 38px;
	}
`;
export const MasterSlide = styled.div`
	height: 419px;
	@media only screen and (min-width: 768px) {
		height: 368px;
	}
`;
