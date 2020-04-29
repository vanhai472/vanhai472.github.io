import styled from "styled-components";
export const WraperComment = styled.div`
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
export const ContentCommentHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
	.avataMaster {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-right: 12px;
	}
	.nameMaster {
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		color: #000000;
	}
	.img-buffed {
		width: 14px;
		height: 14px;
		position: relative;
		z-index: 2;
	}
	.buffed {
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		color: #d84851;
		position: relative;
		z-index: 2;
	}
	.wraperBuffed {
		display: flex;
		height: 24px;
		border-radius: 8px;
		background: rgba(216, 72, 81, 0.2);
		.img-buffed {
			width: 14px;
			height: 14px;
			margin-right: 6px;
			margin-bottom: 3px;
		}
	}
`;
export const WriteContentComment = styled.div`
	display: flex;
	& > img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin: 0px 12px 0px 64px;
	}
	.writeTextComment {
		width: 100%;
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		padding: 12px;
	}
	.clickHnadleSubmit {
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
		color: #ffffff;
		background: linear-gradient(355.71deg, #009ca9 10.34%, #2ccfdd 88.46%);
		border-radius: 12px;
		height: 40px;
		cursor: pointer;
		padding: 12px;
		display: inline-block;
		text-align: right;
		margin-top: 16px;
		margin-bottom: 40px;
	}
`;

export const ContentCommentMaster = styled.div`
	.textContentComment {
		font-size: 14px;
		line-height: 16px;

		/* Neutral/Dark */

		color: #0e0841;
	}
`;
export const CommentFooter = styled.div`
	display: flex;
	justify-content: space-between;
	.numberLike {
		font-size: 14px;
		font-weight: 600;
		line-height: 16px;
		color: #009ca9;
		padding: 7px;
	}
	.dotCom {
		width: 3px;
		height: 3px;
		background: #6e6c7e;
		border-radius: 50%;
		margin: 14px 7px 0px 7px;
	}
	.triggerRepComment {
		font-weight: 600;
		font-size: 14px;
		line-height: 16px;
		color: #009ca9;
		padding: 7px;
		cursor: pointer;
	}
	.dateComment {
		font-size: 14px;
		line-height: 16px;
		color: #a7a7a7;
	}
`;
export const MasterRepComment = styled.div`
	display: flex;
	& > img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.wraperBackground {
		background: #edecf0;
		width: 100%;
		border-radius: 8px;
		padding: 12px;
		.nameMasterComment {
			font-weight: 500;
			font-size: 14px;
			line-height: 16px;
			color: #0e0841;
		}
		.nameUser {
			font-weight: normal;
			font-size: 14px;
			line-height: 21px;
			color: #009ca9;
			margin-right: 6px;
		}
		.repComment {
			font-weight: normal;
			font-size: 14px;
			line-height: 21px;
			color: #0e0841;
		}
	}
`;
export const LikeAndRep = styled.div`
	display: flex;
	margin: 12px 0px 12px 53px;
	justify-content: space-between;
	.click-like {
		font-size: 14px;
		font-weight: 600;
		line-height: 16px;
		color: #009ca9;
		padding: 7px;
	}
	.dotCom {
		width: 3px;
		height: 3px;
		background: #6e6c7e;
		border-radius: 50%;
		margin: 14px 7px 0px 7px;
	}
	.repIb {
		font-weight: 600;
		font-size: 14px;
		line-height: 16px;
		color: #009ca9;
		padding: 7px;
		cursor: pointer;
	}
	.dateComment {
		font-size: 14px;
		line-height: 16px;
		color: #a7a7a7;
	}
`;
export const ChatOnline = styled.div`
	width: 100%;
	margin-bottom: 12px;
`;
export const ContentComment = styled.div`
	border: 2px solid #edecf0;
	border-radius: 8px;
	padding: 12px;
`;
