import styled from "styled-components";

const ProfileUserWrapper = styled.div`
	margin-top: 64px;
`;

export const ProfileUserNav = styled.div`
	height: 72px;
	padding-top: 16px;
`;

export const ProfileUserContentWraper = styled.div`
	margin-top: 16px;
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const ProfileUserContentSidebar = styled.div`
	height: 220px;
	border-radius: 8px;
	box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.12);
	padding: 16px 12px;
	@media only screen and (min-width: 768px) {
		width: 270px;
	}
`;

export const SidebarAvatar = styled.div`
	height: 80px;
	border-bottom: 1px solid #edecf0;

	.sidebar-header {
		display: flex;
		align-items: center;
	}
	.sidebar-header > h3 {
		margin: 0;
		padding: 0;
		color: #0e0841;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
		margin-left: 12px;
	}
`;

export const OptionProfile = styled.div`
	margin-top: 16px;
	#SelectOptionProfile > a {
		width: 100%;
		height: 40px;
		display: inline-block;
		color: #0e0841;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		padding-left: 12px;
		padding-top: 11px;
		margin-bottom: 12px;
		border-radius: 8px;
		cursor: pointer;
	}

	#SelectOptionProfile > a:hover {
		background: rgba(242, 242, 242, 1);
	}

	#SelectOptionProfile > a:last-of-type {
		margin-bottom: 0;
	}
	#SelectOptionProfile > a.active {
		background: rgba(0, 156, 169, 0.2);
		color: #009ca9;
	}
`;

export const ProfileUserSidebarContent = styled.div`
	box-sizing: border-box;
	margin-top: 20px;
	@media only screen and (min-width: 768px) {
		width: calc(100% - 270px);
		margin-left: 20px;
		margin-top: 0;
	}
`;

export default ProfileUserWrapper;
