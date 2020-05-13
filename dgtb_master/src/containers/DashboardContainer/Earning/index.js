import React, { Component } from "react";
import CardDashboard from "@Components/Master/CardDashboard";
import CustomPagination from "@Components/Pagination";
import { Link, withRouter } from "react-router-dom";

import EarningWrapper, {
    DashboardMasterOption,
    DashboardMasterContentHeader,
    DashboardMasterAnalysis,
    DashboardMasterItem,
} from "./styles";

class EarningContainer extends Component {
    render() {
        const select = [
            { label: "Thu nhập", content: "/dashboard" },
            {
                label: "Lịch sử rút tiền",
                content: "/dashboard/withdrawal",
            },
        ];
        const { location } = this.props;
        const a = [1, 2, 3, 4, 5, 6];
        return (
            <EarningWrapper>
                <DashboardMasterOption>
                    <div id="SelectOptionSearch">
                        {select.map((value, index) => (
                            <Link
                                to={value.content}
                                key={index}
                                className={`${
                                    value.content === location.pathname
                                        ? "active"
                                        : ""
                                }`}
                            >
                                {value.label}
                            </Link>
                        ))}
                    </div>
                </DashboardMasterOption>

                <div className="earnings">
                    <div id="earnings">Thu nhập</div>
                    <div className="earnings-total">
                        <div className="total">
                            <span>Tổng thu nhập:</span>
                            <span>43.900.000 VND</span>
                        </div>
                        <div className="quantity">từ 354 đơn hàng</div>
                    </div>
                </div>

                <DashboardMasterContentHeader>
                    <span>Chi tiết</span>
                </DashboardMasterContentHeader>

                <DashboardMasterAnalysis>
                    <div className="analysis">Tháng 3, 2020</div>
                    <div>
                        <div className="analysis current-analysis">
                            10.000.000 VND
                        </div>
                        <div className="analysis">từ 30 đơn hàng</div>
                    </div>
                </DashboardMasterAnalysis>

                {a.map((value, key) => (
                    <DashboardMasterItem key={key}>
                        <CardDashboard value={value} />
                    </DashboardMasterItem>
                ))}
                <div style={{ marginTop: 40, textAlign: "right" }}>
                    <CustomPagination page={1} pageSize={5} total={1155} />
                </div>
            </EarningWrapper>
        );
    }
}

export default withRouter(EarningContainer);
