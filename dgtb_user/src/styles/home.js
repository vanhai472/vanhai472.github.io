import styled from "styled-components";

const CommentContainer = styled.div`
	position: relative;
	margin-top: ${(props) => (props.comment ? null : "32px")};
	height: ${(props) => (props.comment ? "460px" : null)};

	@media only screen and (min-width: 768px) {
		height: ${(props) => (props.comment ? "714px" : "450px")};
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
		content: url("/icon/Rate/right.png");
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: initial;
		font-family: initial;
		padding-top: 5px;
	}

	.custom-prev::after {
		content: url("/icon/Rate/left.png");
	}

	.custom-prev.swiper-button-disabled::after {
		content: url("/icon/Rate/left-dis.png") !important;
	}

	.custom-next.swiper-button-disabled::after {
		content: url("/icon/Rate/right-dis.png");
	}
`;

export const CommentHeader = styled.div`
	/* margin-bottom: 8px; */
	@media screen and (min-width: 768px) {
		display: flex;
		align-items: center;
	}
`;

export const TextTitle = styled.div`
	.text-title-content {
		font-family: "ArtelyInks";
		font-style: italic;
		font-weight: 1;
		font-size: 36px;
		line-height: 36px;
		color: #0e0841;
		max-width: 211px;
		display: inline-block;
		max-width: ${(props) => (props.masterNear ? "240px" : null)};
		@media only screen and (min-width: 576px) {
			max-width: none;
		}
	}

	& > img {
		position: relative;
		top: ${(props) => (props.maxLength ? "-52px" : "-15px;")};
		top: ${(props) => (props.masterNear ? "-52px" : null)};
		@media only screen and (min-width: 576px) {
			top: ${(props) => (props.maxLength ? "-15px" : null)};
			top: ${(props) => (props.masterNear ? "-15px" : null)};
		}
	}
`;

export const OptionComment = styled.div`
	margin: 0 auto;

	@media only screen and (min-width: 768px) {
		/* width: 364px; */
		margin: initial;
		margin-left: ${(props) => (props.home ? "45px" : null)};
	}
	@media only screen and (min-width: 992px) {
		margin-left: ${(props) => (props.home ? "115px" : null)};
	}
	#SelectOptionComments {
		& span {
			display: inline-block;
			border-radius: 12px;
			border: 2px solid #edecf0;
			padding: 12px;
			color: #6e6c7e;
			font-family: "Roboto-Regular";
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 16px;
			text-align: center;
			margin-bottom: 12px;
			cursor: pointer;
			margin-right: 4px;

			@media only screen and (min-width: 411px) {
				padding: 12px 16px;
				margin-right: 12px;
			}
		}
		& .active {
			border: 2px solid #009ca9;
			color: #009ca9;
		}
	}
`;

export const ViewAll = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	text-align: center;
	@media only screen and (min-width: 768px) {
		top: 30px;
		bottom: initial;
		width: unset;
		right: 0;
	}

	& > a {
		color: #009ca9;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		@media only screen and (min-width: 768px) {
			padding-right: 15px;
		}
	}
`;

export const FamousMasterContainer = styled(CommentContainer)`
	& .card-main {
		margin-bottom: 38px;
	}
`;

export const NewsContainer = styled.div`
	.swiper-slide {
		width: 367px;
	}
	.swiper-container {
		padding-bottom: 24px;
	}
	.swiper-pagination-bullets {
		display: block;
	}
	& a {
		display: none;
	}
	@media only screen and (min-width: 768px) {
		.swiper-container {
			padding-bottom: 40px;
		}
		& a {
			display: block;
		}
	}
`;

export const SearchLocationContainer = styled(CommentContainer)`
	height: 464px;
	background: url("/icon/Location/background.png") no-repeat;
	position: relative;
	@media only screen and (min-width: 768px) {
		height: 416px;
	}

	.swiper-slide {
		width: 270px;
	}

	.search-location {
		position: static;
	}
	.custom-next,
	.custom-prev {
		top: -30px;
	}
	.custom-prev {
		left: auto;
		right: 65px;
	}
	.custom-next {
		right: 0;
	}
`;

export const Banner = styled.div`
	width: 100%;
	background: url("/icon/Common/backgroundTow.png") no-repeat,
		url("/icon/Common/banner-search-result.png") no-repeat;
	height: 300px;
	background-size: cover;
	background-position: 80%;
	padding-top: 24px;
	margin-top: 64px;
	margin-right: auto;
	margin-left: auto;

	.main {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

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
`;

export const MasterSlide = styled.div`
	height: 419px;
	@media only screen and (min-width: 768px) {
		height: 368px;
	}
`;

export default CommentContainer;
