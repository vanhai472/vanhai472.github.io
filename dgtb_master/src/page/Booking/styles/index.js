import styled from "styled-components";

const BookingMasterWrapper = styled.div`
	margin-top: 64px;
`;

export const BookingMasterNav = styled.div`
	height: 72px;
	padding-top: 16px;
`;

export const BookingMasterContentWraper = styled.div`
	margin-top: 16px;
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const BookingMasterContentSidebar = styled.div`
	height: 336px;
	border-radius: 8px;
	box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.12);
	padding: 16px 12px;
	@media only screen and (min-width: 768px) {
		width: 270px;
	}
`;

export const BookingMasterSwitchOption = styled.div`
	border-bottom: 1px solid #edecf0;
	margin-bottom: 8px;
	.master-option {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 40px;
	}
	.master-option > span {
		font-family: "Roboto-Medium";
		color: #009ca9;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
	}
	.master-option > .ant-switch {
		background-color: #edecf0;
		border-radius: 12px;
		width: 48px;
		height: 24px;
	}

	.master-option > .ant-switch::after {
		background-color: #6e6c7e;
		width: 20px;
		height: 20px;
	}
	.master-option > .ant-switch-checked::after {
		background-color: #009ca9;
	}
`;

export const OptionBooking = styled.div`
	#SelectOptionBooking > a {
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
	#SelectOptionBooking > a:hover {
		background: rgba(242, 242, 242, 1);
	}

	#SelectOptionBooking > a:last-of-type {
		margin-bottom: 0;
	}
	#SelectOptionBooking > a.active {
		background: rgba(0, 156, 169, 0.2);
		color: #009ca9;
	}
`;

export const BookingMasterrContent = styled.div`
	box-sizing: border-box;
	border-radius: 8px;
	margin-top: 20px;
	margin-bottom: 100px;
	@media only screen and (min-width: 768px) {
		width: calc(100% - 270px);
		margin-left: 20px;
		margin-top: 0;
	}
`;

export const BookingMasterContentHeader = styled.div`
	border: 1px solid #e4e6eb;
	box-sizing: border-box;
	border-radius: 8px;
	height: 48px;
	padding: 0 24px;
	display: flex;
	align-items: center;

	span {
		color: #0e0841;
		font-family: "Roboto-Medium";
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
	}
`;

export default BookingMasterWrapper;
