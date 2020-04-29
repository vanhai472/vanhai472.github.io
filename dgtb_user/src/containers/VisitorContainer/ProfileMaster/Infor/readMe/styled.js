import styled from "styled-components";

const ProfileContainer = styled.div``;
export const OptionMaster = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 63px 0px 54px 0px;
	.wraper-img-master {
		height: 65px;
		margin-bottom: 10px;
	}
	.group-option {
		margin-top: 40px;
		text-align: center;
		width: 160px;
		height: 160px;
	}
	.title-master {
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
		color: #6e6c7e;
	}
	.detail-master {
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
		color: #0e0841;
	}
`;
export const Introduce = styled.div`
	margin: 0px 0px 80px 0px;

	.title-introduce {
		font-weight: 500;
		font-size: 24px;
		line-height: 28px;
		color: #0e0841;
	}
	.content-introduce {
		font-size: 16px;
		line-height: 19px;
		color: #333333;
	}
	.button-readmore {
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		color: #009ca9;
		border: 2px solid #009ca9;
		box-sizing: border-box;
		border-radius: 12px;
		width: 96px;
		height: 40px;
		padding: 10px;
		margin: 0 auto;
		cursor: pointer;
		margin-top: 24px;
	}
`;
export default ProfileContainer;
