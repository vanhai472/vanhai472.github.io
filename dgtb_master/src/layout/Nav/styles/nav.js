import styled from "styled-components";

const NavHeader = styled.div`
	#myNav {
	}
	& a {
		display: inline-block;
		padding: 12px;
		padding-left: 0;
		border-radius: 20px;
		color: #0e0841;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		margin-right: 16px;
	}
	& .active {
		background: #009ca9;
		color: #fff;
		padding: 12px 28px;
	}
	& .active:hover {
		background: #009ca9;
	}
`;

export default NavHeader;
