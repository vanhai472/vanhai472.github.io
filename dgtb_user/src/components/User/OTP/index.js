import React, { Component } from "react";
import { Input, Button, Form } from "antd";
import ComfirmRegisterContainer from "./styles/_comfirm";
import { SelectRegister } from "@Components/User/Login/styles/login";
import { toggleRegister } from "@Actions/app";
import { connect } from "react-redux";

var reSend;

class FormOTP extends Component {
	state = {
		time: 30,
	};
	componentDidMount() {
		this.codeOTP.focus();
		this.reSendOTP();
	}

	reSendOTP = () => {
		this.setState({ time: 30 });
		reSend = setInterval(() => {
			this.setState({
				time: this.state.time - 1,
			});
		}, 1000);
	};

	handleSubmit = (values) => {
		const { next } = this.props;
		console.log("Success:", values);
		next();
	};
	render() {
		const { toggleRegister, prev } = this.props;
		const { time } = this.state;
		time === 0 ? clearInterval(reSend) : null;
		return (
			<ComfirmRegisterContainer>
				<Form onFinish={this.handleSubmit}>
					<div className="title-login"> Đăng ký</div>
					<div className="container-login">
						<div className="input-account">
							<div className="input-phone"> Mã OTP</div>
							<Form.Item
								name="codeOTP"
								rules={[{ required: true, message: "Mã OTP không hợp lệ!" }]}
							>
								<Input
									ref={(codeOTP) => {
										this.codeOTP = codeOTP;
									}}
									placeholder="Nhập mã OTP "
								/>
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
							Tiếp tục
						</Button>
					</div>
				</Form>
				<SelectRegister>
					<span>Chưa nhận được OTP?</span>
					<span className="register" onClick={this.reSendOTP}>
						Gửi lại {time === 0 ? null : `(${time}s)`}
					</span>
				</SelectRegister>
				<img
					src="/icon/Common/group-login.png"
					alt="group-login"
					onClick={toggleRegister}
				/>
			</ComfirmRegisterContainer>
		);
	}
}

export default connect(null, { toggleRegister })(FormOTP);
