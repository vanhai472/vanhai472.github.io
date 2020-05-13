import React, { Component } from "react";
import { Input, Button, Form } from "antd";
import ComfirmRegisterContainer from "./styles/_comfirm";
class ComfirmRegister extends Component {
    componentDidMount() {
        this.password.focus();
    }
    handleSubmit = (values) => {
        const { next } = this.props;
        console.log("Success:", values);
        next();
    };
    render() {
        const { toggleRegister, prev } = this.props;
        return (
            <ComfirmRegisterContainer>
                <Form onFinish={this.handleSubmit}>
                    <div className="title-login"> Đăng ký</div>
                    <div className="container-login">
                        <div className="input-password">
                            <div className="input-phone"> Tạo mật khẩu</div>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Không được để trống!",
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Tạo mật khẩu"
                                    ref={(password) => {
                                        this.password = password;
                                    }}
                                />
                            </Form.Item>
                        </div>
                        <div className="input-password">
                            <div className="input-phone">Nhập lại mật khẩu</div>
                            <Form.Item
                                name="re-password"
                                dependencies={["password"]}
                                rules={[
                                    {
                                        required: true,
                                        message: "Không được để trống!",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (
                                                !value ||
                                                getFieldValue("password") ===
                                                    value
                                            ) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject(
                                                "Xác nhận mật khẩu không đúng!"
                                            );
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder="Nhập lại mật khẩu" />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="btn-login">
                        <Button
                            className="sign-white"
                            style={{ width: 160 }}
                            onClick={() => prev()}
                        >
                            Trở về
                        </Button>
                        <Button
                            className="sign-blue"
                            style={{ width: 160 }}
                            htmlType="submit"
                        >
                            Đăng Kí
                        </Button>
                    </div>
                </Form>
                <img
                    src="/icon/Common/group-login.png"
                    alt="group-login"
                    onClick={toggleRegister}
                />
            </ComfirmRegisterContainer>
        );
    }
}

export default ComfirmRegister;
