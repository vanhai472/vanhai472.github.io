import styled from "styled-components";

const GoogleMapWrapper = styled.div`
	height: 160px;
	background-image: url("/icon/Common/map.png");
	position: relative;
	margin-bottom: 32px;
	border-radius: 8px;

	& > a {
		position: absolute;
		right: 0;
		bottom: 0;
	}

	& > a > #SeeMap {
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

	& > a > #SeeMap > img {
		margin-right: 6px;
	}
`;

export const SortWrapper = styled.div`
	background: #ffffff;
	box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.12);
	border-radius: 8px;
	margin-bottom: 24px;

	& > .sidebar-header {
		padding: 16px;
		border-bottom: 1px solid #edecf0;
		box-sizing: border-box;
	}

	.sidebar-header > .reset-filter {
		display: flex;
		justify-content: space-between;
		color: #009ca9;
		font-family: "Roboto-Regular";
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 21px;
	}

	.sidebar-header h3 {
		margin: 0;
		padding: 0;
		color: #0e0841;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
	}
	.sidebar-header > span {
		color: #6e6c7e;
		font-family: "Roboto-Regular";
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 19px;
		margin-top: 8px;
		display: inline-block;
	}
`;

export const FilterWrapper = styled(SortWrapper)``;

export const FilterOption = styled.div`
	border-bottom: 1px solid #edecf0;
	padding: 16px;
	padding-bottom: 0;

	&:last-of-type {
		border-bottom: none;
	}

	h3 {
		color: #0e0841;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
		margin-bottom: 16px;
	}
	& > .filter-star {
		display: flex;
		flex-direction: column;
	}

	& > .filter-star > label {
		margin-bottom: 16px;
	}

	.gutter-row {
		margin-bottom: 16px;
		& > .ant-checkbox-wrapper > span,
		& > .ant-radio-wrapper > span {
			color: #4f4f4f;
			font-family: "Roboto-Regular";
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 16px;
		}
	}

	.wraper-price-vnd {
		display: flex;
		justify-content: space-between;
		margin-bottom: 30px;

		.wraper-price {
			display: flex;
			color: #4f4f4f;
			font-family: "Roboto-Regular";
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 16px;

			border: 1px solid #edecf0;
			box-sizing: border-box;
			border-radius: 16px;
			width: 160px;
			height: 32px;
			justify-content: space-around;
			padding: 8px 0px;
		}
		.rectance {
			width: 31px;
			height: 1px;
			background: #edecf0;
			margin-top: 15px;
		}
		.VND {
		}
	}
`;

export default GoogleMapWrapper;
