import React, { Component } from "react";
import Layout from "@Layout";
import Nav from "@Layout/Nav";
import { UserPage } from "@Config/options";
import { Skeleton } from "antd";
import Historys from "@Container/UserContainer/Booking/History";
import CustomPagination from "@Components/Pagination";

import BookingUserWrapper, {
	BookingUserNav,
	BookingUserContentWraper,
	BookingUserContentSidebar,
	OptionBooking,
	BookingUserContent,
	BookingUserContentHeader,
} from "./styles";
import { withRouter } from "next/router";
import routes from "@Src/routes";
const { Link } = routes;

class Booking extends Component {
	static async getInitialProps({ query, store }) {
		return { query, store };
	}
	state = {
		loading: false,
	};

	componentDidMount() {
		this.onLoading();
	}

	onLoading = () => {
		this.setState({
			loading: true,
		});
		setTimeout(() => this.setState({ loading: false }), 1000);
	};
	render() {
		const select = [
			{ label: "Lịch hẹn sắp tới", content: "/incoming" },
			{ label: "Đang chờ thanh toán", content: "/payment" },
			{ label: "Đang chờ xác nhận", content: "/pending" },
			{ label: "Lịch sử", content: "/history" },
			{ label: "Bị từ chối", content: "/denied" },
		];
		const { router } = this.props;
		const { loading } = this.state;
		return (
			<Layout>
				<div className="container">
					<div className="main">
						<div className="main-page">
							<BookingUserWrapper>
								<BookingUserNav>
									<Nav options={UserPage} />
								</BookingUserNav>

								<BookingUserContentWraper>
									<BookingUserContentSidebar>
										<OptionBooking>
											<div id="SelectOptionBooking">
												{select.map((value, index) => (
													<Link route={value.content} key={index}>
														<a
															className={`${
																value.content === router.asPath ? "active" : ""
															}`}
														>
															{value.label}
														</a>
													</Link>
												))}
											</div>
										</OptionBooking>
									</BookingUserContentSidebar>

									<BookingUserContent>
										<Skeleton loading={loading} active={loading}></Skeleton>
										<Skeleton loading={loading} active={loading}></Skeleton>
										<Skeleton loading={loading} active={loading}></Skeleton>
										<Skeleton loading={loading} active={loading}>
											<BookingUserContentHeader>
												<span>Bộ lọc</span>
											</BookingUserContentHeader>
											<Historys />
											<div style={{ marginTop: 40, textAlign: "right" }}>
												<CustomPagination page={1} pageSize={5} total={1155} />
											</div>
										</Skeleton>
									</BookingUserContent>
								</BookingUserContentWraper>
							</BookingUserWrapper>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default withRouter(Booking);
