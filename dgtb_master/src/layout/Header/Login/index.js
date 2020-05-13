import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "antd";
import HeaderLayout from "./styles/header";
import Message from "@Components/Message";
import Notification from "@Components/Notification";
import UserHeader from "../UserLogin/header";
import Login from "@Components/User/Login";
import Register from "@Components/User/Register";
import FormOTP from "@Components/User/OTP";
import ComfirmRegister from "@Components/User/ComfirmRegister";
import { Link } from "react-router-dom";

import { toggleCollapsed, toggleLogin, toggleRegister } from "@Actions/app";

class Header extends Component {
    state = {
        current: 0,
    };
    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    };

    prev = () => {
        const current = this.state.current - 1;
        this.setState({ current });
    };
    render() {
        const {
            loggedIn,
            toggleRegister,
            toggleLogin,
            visibleLogin,
            visibleRegister,
        } = this.props;
        const { current } = this.state;
        const steps = [
            {
                title: "Register",
                content: (
                    <Register
                        toggleRegister={toggleRegister}
                        next={this.next}
                    />
                ),
            },
            {
                title: "OTP",
                content: (
                    <FormOTP
                        toggleRegister={toggleRegister}
                        next={this.next}
                        prev={this.prev}
                    />
                ),
            },
            {
                title: "ComfirmRegister",
                content: (
                    <ComfirmRegister
                        toggleRegister={toggleRegister}
                        prev={this.prev}
                    />
                ),
            },
        ];
        return (
            <HeaderLayout>
                <div className="header-content">
                    <div className="header-logo">
                        <div className="logo">
                            <Link to="/">
                                <h1>Thầy bói.vn</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="header-right">
                        {loggedIn ? (
                            <div className="user-login">
                                <Message />
                                <Notification />
                                <UserHeader />
                            </div>
                        ) : (
                            <div className="header-right-button">
                                <Button
                                    className="sign-white"
                                    style={{ width: 96 }}
                                    onClick={toggleRegister}
                                >
                                    Đăng ký
                                </Button>

                                <Button
                                    className="sign-blue"
                                    style={{ width: 96 }}
                                    onClick={toggleLogin}
                                >
                                    Đăng nhập
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
                {/* Register steps */}
                <Modal
                    visible={visibleRegister}
                    footer={false}
                    closable={false}
                    bodyStyle={{ padding: 0 }}
                    width={366}
                    onCancel={toggleRegister}
                >
                    {steps[current].content}
                </Modal>
                {/* User Modal */}
                <Modal
                    visible={visibleLogin}
                    footer={false}
                    closable={false}
                    bodyStyle={{ padding: 0 }}
                    width={366}
                    onCancel={toggleLogin}
                >
                    <Login toggleLogin={toggleLogin} />
                </Modal>
            </HeaderLayout>
        );
    }
}

export default connect(
    (state) => ({
        view: state.App.view,
        loggedIn: state.Auth.loggedIn,
        visibleRegister: state.App.visibleRegister,
        visibleLogin: state.App.visibleLogin,
    }),
    { toggleCollapsed, toggleLogin, toggleRegister }
)(Header);
