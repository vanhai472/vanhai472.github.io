import styled from "styled-components";

const SearchTabMaster_Service = styled.div`
	height: 48px;
	background: #edecf0;
	border-radius: 6px;
	display: flex;
	align-items: center;
	margin-bottom: 32px;

	#SelectOptionSearch {
		display: flex;
		flex: 100%;
	}

	#SelectOptionSearch > a {
		display: inline-flex;
		height: 40px;
		flex: 50%;
		color: #6e6c7e;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	#SelectOptionSearch > a.active {
		margin-left: 4px;
		margin-right: 4px;
		background: #fff;
		color: #009ca9;
	}
`;

export default SearchTabMaster_Service;
