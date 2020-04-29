import React, { Component } from "react";
import { Input, Button, Form, message } from "antd";
import { connect } from "react-redux";
import LoginContainer, {
	SelectOption,
	SocialLogin,
	SelectRegister,
} from "./styles/login";
import { createFromIconfontCN } from "@ant-design/icons";
import { login } from "@Actions/auth";
import { siteIcon } from "@Config";
const MyIcon = createFromIconfontCN({
	scriptUrl: siteIcon,
});
class Login extends Component {
	componentDidMount() {
		this.phoneNumber.focus();
	}

	handleSubmit = (values) => {
		console.log("Success:", values);
		const { login, toggleLogin } = this.props;
		login(
			{ text: values.phoneMumber, password: values.password },
			(err, data) => {
				if (!err) {
					toggleLogin();
					message.success("Đăng nhập thành công");
				}
			}
		);
	};
	render() {
		const { toggleLogin } = this.props;
		return (
			<LoginContainer>
				<Form
					onFinish={this.handleSubmit}
					className="form-login"
					initialValues={{ phoneMumber: "+84987531185", password: "123456789" }}
				>
					<div className="title-login"> Đăng nhập</div>
					<div className="container-login">
						<div className="input-account">
							<div className="input-phone"> Số điện thoại</div>
							<Form.Item
								name="phoneMumber"
								rules={[{ required: true, message: "Không được để trống!" }]}
							>
								<Input
									ref={(phoneNumber) => {
										this.phoneNumber = phoneNumber;
									}}
									placeholder="Nhập số điện thoại "
								/>
							</Form.Item>
						</div>
						<div className="input-password">
							<div className="input-phone"> Mật khẩu</div>
							<Form.Item
								name="password"
								rules={[{ required: true, message: "Không được để trống!" }]}
							>
								<Input.Password placeholder="Nhập mật khẩu" />
							</Form.Item>
						</div>
					</div>
					<div className="btn-login">
						<Button
							className="sign-white"
							style={{ width: 160 }}
							onClick={toggleLogin}
						>
							Hủy
						</Button>
						<Button
							htmlType="submit"
							className="sign-blue"
							style={{ width: 160 }}
						>
							Đăng nhập
						</Button>
					</div>
				</Form>
				<SelectOption>
					<span>hoặc</span>
				</SelectOption>
				<SocialLogin>
					<MyIcon
						type="icon-facebook"
						style={{ fontSize: 24, paddingLeft: 12 }}
					/>
					<span>Tiếp tục bằng Facebook</span>
				</SocialLogin>
				<SocialLogin google>
					<MyIcon
						type="icon-google"
						style={{ fontSize: 24, paddingLeft: 12 }}
					/>
					<span>Tiếp tục bằng Google</span>
				</SocialLogin>
				<SelectRegister>
					<span>Chưa có tài khoản?</span>
					<span className="register">Đăng kí</span>
				</SelectRegister>
				<img
					src="/icon/Common/group-login.png"
					alt="group-login"
					onClick={toggleLogin}
				/>
			</LoginContainer>
		);
	}
}

export default connect(null, { login })(Login);
