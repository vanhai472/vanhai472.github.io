import React, { Component } from "react";
import { Input, Button, Form } from "antd";
import RegisterContainer from "./styles/_register";
import {
	SelectOption,
	SocialLogin,
	SelectRegister,
} from "@Components/User/Login/styles/login";
// import "@Components/Button/BtnButton/ButtonWhite/styles/style.scss";
// import "@Components/Button/BtnButton/ButtonBlue/styles/style.scss";
import { createFromIconfontCN } from "@ant-design/icons";
import { siteIcon } from "@Config";

const MyIcon = createFromIconfontCN({
	scriptUrl: siteIcon,
});
class Register extends Component {
	componentDidMount() {
		this.phoneNumber.focus();
	}

	handleSubmit = (values) => {
		const { next } = this.props;
		console.log("Success:", values);
		next();
	};

	render() {
		const { toggleRegister } = this.props;
		return (
			<RegisterContainer>
				<Form onFinish={this.handleSubmit}>
					<div className="title-login"> Đăng ký</div>
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
					</div>
					<div className="btn-login">
						<Button
							className="sign-white"
							style={{ width: 160 }}
							onClick={toggleRegister}
						>
							Hủy
						</Button>

						<Button
							className="sign-blue"
							style={{ width: 160 }}
							htmlType="submit"
						>
							Tiếp tục
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
					<span>Đã có tài khoản?</span>
					<span className="register">Đăng nhập</span>
				</SelectRegister>
				<img
					src="/icon/Common/group-login.png"
					alt="group-login"
					onClick={toggleRegister}
				/>
			</RegisterContainer>
		);
	}
}

export default Register;
