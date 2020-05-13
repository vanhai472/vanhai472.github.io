import React, { Component } from "react";
import Nav from "@Layout/Nav";
import { MasterPage } from "@Config/options";
import { Skeleton, Button } from "antd";
import { Link } from "react-router-dom";
import EarningContainer from "@Container/DashboardContainer/Earning";
import Withdrawal from "@Container/DashboardContainer/Withdrawal";

import DashboardMasterWrapper, {
    DashboardMasterNav,
    DashboardMasterContentWraper,
    DashboardMasterContentSidebar,
    DashboardMasterContent,
    DashboardMasterEarnings,
    DashboardMasterWithdrawal,
} from "./styles";

class Dashboard extends Component {
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
        const { loading } = this.state;
        return (
            <div className="container">
                <div className="main">
                    <div className="main-page">
                        <DashboardMasterWrapper>
                            <DashboardMasterNav>
                                <Nav options={MasterPage} />
                            </DashboardMasterNav>

                            <DashboardMasterContentWraper>
                                <DashboardMasterContentSidebar>
                                    <div className="total-current">
                                        <div>Số dư tài khoản</div>
                                        <span>20.000.000 VND</span>
                                    </div>

                                    <Link to="/deposite">
                                        <Button
                                            className="sign-blue"
                                            style={{ width: "100%" }}
                                        >
                                            Rút tiền
                                        </Button>
                                    </Link>
                                </DashboardMasterContentSidebar>

                                <DashboardMasterContent>
                                    <DashboardMasterEarnings>
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
                                            <EarningContainer />
                                        </Skeleton>
                                    </DashboardMasterEarnings>

                                    <DashboardMasterWithdrawal>
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
                                            <Withdrawal />
                                        </Skeleton>
                                    </DashboardMasterWithdrawal>
                                </DashboardMasterContent>
                            </DashboardMasterContentWraper>
                        </DashboardMasterWrapper>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
