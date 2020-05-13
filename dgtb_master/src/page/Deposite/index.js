import React, { Component } from "react";
import Nav from "@Layout/Nav";
import { MasterPage } from "@Config/options";
import { Skeleton, Button, Steps } from "antd";
import { Link } from "react-router-dom";
import DepositeInfor from "@Container/DepositeContainer/Infor";

import DashboardMasterWrapper, {
    DashboardMasterNav,
    DashboardMasterContentWraper,
} from "./styles";

const { Step } = Steps;
const steps = [
    {
        title: "Chọn tài khoản thụ hưởng",
        content: <DepositeInfor />,
    },
    {
        title: "Xác nhận",
        content: "Second-content",
    },
];

class Deposite extends Component {
    state = {
        current: 0,
    };

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <div className="container">
                <div className="main">
                    <div className="main-page">
                        <DashboardMasterWrapper>
                            <DashboardMasterNav>
                                <Nav options={MasterPage} />
                            </DashboardMasterNav>

                            <DashboardMasterContentWraper>
                                <Steps current={current}>
                                    {steps.map((item) => (
                                        <Step
                                            key={item.title}
                                            title={item.title}
                                        />
                                    ))}
                                </Steps>
                                <div className="steps-content">
                                    {steps[current].content}
                                </div>
                            </DashboardMasterContentWraper>
                            <div
                                style={{
                                    paddingBottom: 104,
                                    textAlign: "right",
                                }}
                            >
                                <Button
                                    className="sign-blue"
                                    style={{ width: 160 }}
                                >
                                    Bước tiếp theo
                                </Button>
                            </div>
                        </DashboardMasterWrapper>
                    </div>
                </div>
            </div>
        );
    }
}

export default Deposite;
