import React, { Component } from "react";
import CustomPagination from "@Components/Pagination";
import CardWithdrawal from "@Components/Master/CardWithdrawal";
import { Link, withRouter } from "react-router-dom";

import WithdrawalWrapper, {
    DashboardMasterOption,
    DashboardMasterContentHeader,
    DashboardMasterItem,
} from "./styles";

class WithdrawalContainer extends Component {
    render() {
        const select = [
            { label: "Thu nhập", content: "/dashboard" },
            {
                label: "Lịch sử rút tiền",
                content: "/dashboard/withdrawal",
            },
        ];
        const { location } = this.props;
        const a = [1, 2, 3, 4, 5, 6, 7];
        return (
            <WithdrawalWrapper>
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
                    <div id="earnings">Lịch sử rút tiền</div>
                </div>

                <DashboardMasterContentHeader>
                    <span>Bộ lọc</span>
                </DashboardMasterContentHeader>

                {a.map((value, key) => (
                    <DashboardMasterItem key={key}>
                        <CardWithdrawal value={value} />
                    </DashboardMasterItem>
                ))}

                <div style={{ marginTop: 40, textAlign: "right" }}>
                    <CustomPagination page={1} pageSize={10} total={30} />
                </div>
            </WithdrawalWrapper>
        );
    }
}

export default withRouter(WithdrawalContainer);
