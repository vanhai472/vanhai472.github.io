import React, { Component } from "react";
import Layout from "@Layout";
import Nav from "@Layout/Nav";
import { MasterPage } from "@Config/options";
import { Skeleton, Switch } from "antd";
import { Link, withRouter } from "react-router-dom";
import Pendings from "@Container/BookingContainer/Pending";

import BookingMasterWrapper, {
    BookingMasterNav,
    BookingMasterContentWraper,
    BookingMasterContentSidebar,
    OptionBooking,
    BookingMasterrContent,
    BookingMasterContentHeader,
    BookingMasterSwitchOption,
} from "./styles";

class BookingMaster extends Component {
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
            { label: "Lịch hẹn sắp tới", content: "/" },
            { label: "Đang chờ thanh toán", content: "/payment" },
            { label: "Đang chờ xác nhận", content: "/pending" },
            { label: "Lịch sử", content: "/history" },
            { label: "Bị từ chối", content: "/denied" },
        ];
        const { location } = this.props;
        const { loading } = this.state;
        return (
            <Layout>
                <div className="container">
                    <div className="main">
                        <div className="main-page">
                            <BookingMasterWrapper>
                                <BookingMasterNav>
                                    <Nav options={MasterPage} />
                                </BookingMasterNav>

                                <BookingMasterContentWraper>
                                    <BookingMasterContentSidebar>
                                        <BookingMasterSwitchOption>
                                            <div className="master-option">
                                                <span>
                                                    Ngưng nhận lịch hẹn mới
                                                </span>
                                                <Switch />
                                            </div>
                                        </BookingMasterSwitchOption>
                                        <OptionBooking>
                                            <div id="SelectOptionBooking">
                                                {select.map((value, index) => (
                                                    <Link
                                                        to={value.content}
                                                        key={index}
                                                        className={`${
                                                            value.content ===
                                                            location.pathname
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                    >
                                                        {value.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </OptionBooking>
                                    </BookingMasterContentSidebar>

                                    <BookingMasterrContent>
                                        <Skeleton
                                            loading={loading}
                                            active={loading}
                                        ></Skeleton>
                                        <Skeleton
                                            loading={loading}
                                            active={loading}
                                        ></Skeleton>
                                        <Skeleton
                                            loading={loading}
                                            active={loading}
                                        ></Skeleton>
                                        <Skeleton
                                            loading={loading}
                                            active={loading}
                                        >
                                            <BookingMasterContentHeader>
                                                <span>Bộ lọc</span>
                                            </BookingMasterContentHeader>
                                            <Pendings />
                                        </Skeleton>
                                    </BookingMasterrContent>
                                </BookingMasterContentWraper>
                            </BookingMasterWrapper>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default withRouter(BookingMaster);
