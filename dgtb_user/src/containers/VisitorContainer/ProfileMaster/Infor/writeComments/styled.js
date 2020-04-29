import styled from "styled-components";

export const WraperWriteComment = styled.div`
	& > h3 {
		font-weight: 500;
		font-size: 24px;
		line-height: 28px;

		color: #0e0841;
		margin-bottom: 24px;
	}
	.formTextarea {
		padding: 12px;
		margin-bottom: 16px;
		width: 100%;
		border-radius: 8px;
		border: 2px solid #e0e0e0;
	}
	.submitComment {
		font-weight: 500;
		font-size: 14px;
		text-align: center;
		color: #fff;
		background: linear-gradient(355.71deg, #009ca9 10.34%, #2ccfdd 88.46%);
		border-radius: 12px;
		height: 40px;
		padding: 12px 40px;
		display: inline-block;
		margin-bottom: 40px;
		cursor: pointer;
	}
`;
