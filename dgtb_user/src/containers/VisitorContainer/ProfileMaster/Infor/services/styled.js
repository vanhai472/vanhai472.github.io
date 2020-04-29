import styled from "styled-components";

const MyServicesMaster = styled.div`
	margin-bottom: 80px;
`;
export const OptionServicesMaster = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.itemOptionServices {
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		color: #6e6c7e;
		border: 2px solid #edecf0;
		box-sizing: border-box;
		border-radius: 12px;
		height: 40px;
		padding: 10px 22px;
		cursor: pointer;
		margin-bottom: 24px;
	}
	.itemOptionServicesActive {
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		color: #009ca9;
		border: 2px solid #009ca9;
		box-sizing: border-box;
		border-radius: 12px;
	}
`;

export default MyServicesMaster;
