import styled from "styled-components";

const ProfileMasterWrapper = styled.div`
	margin-top: 64px;
`;

export const ProfileMasterNav = styled.div`
	padding-top: 32px;
`;

export const ProfileMasterContentWrapper = styled.div`
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const ProfileMasterContentSidebar = styled.div`
	box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
	border-radius: 8px;
	height: 343px;
	@media only screen and (min-width: 768px) {
		width: 270px;
	}
`;

export const ProfileMasterContent = styled.div`
	box-sizing: border-box;
	margin-top: 20px;
	@media only screen and (min-width: 768px) {
		width: calc(100% - 292px);
		margin-left: 20px;
		margin-top: 0;
	}
`;

export default ProfileMasterWrapper;
