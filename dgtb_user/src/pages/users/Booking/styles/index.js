import styled from "styled-components";

const BookingUserWrapper = styled.div`
	margin-top: 64px;
`;

export const BookingUserNav = styled.div`
	height: 72px;
	padding-top: 16px;
`;

export const BookingUserContentWraper = styled.div`
	margin-top: 16px;
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const BookingUserContentSidebar = styled.div`
	height: 280px;
	border-radius: 8px;
	box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.12);
	padding: 16px 12px;
	@media only screen and (min-width: 768px) {
		width: 270px;
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

export const BookingUserContent = styled.div`
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

export const BookingUserContentHeader = styled.div`
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

export default BookingUserWrapper;
