import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";
import { Input, Button } from "antd";
import "./index.scss";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "anhhd2703@gmail.com",
      password: "123456789",
      errorText: ""
    };
  }
  // sự kiện nhấn nút đăng nhập bắt action login
  handleLogin = () => {
    const { login, history } = this.props;
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({
        errorText: "Bạn cần nhập đầy đủ thông tin các trường!"
      });
    } else {
      login(email, password, (err, data) => {
        if (data) history.push("/dashboard");
      });
    }
  };
  handleChange = () => {};
  render() {
    const { email, password, errorText } = this.state;
    return (
      <div className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input
                  name="email"
                  value={email}
                  size="large"
                  placeholder="Tài Khoản"
                  onChange={this.handleChange}
                />
              </div>
              <div className="isoInputWrapper">
                <Input
                  name="password"
                  value={password}
                  type="password"
                  size="large"
                  placeholder="Mật Khẩu"
                  onChange={this.handleChange}
                />
              </div>
              <div className="isoInputWrapper">
                <Button type="primary" onClick={this.handleLogin}>
                  Đăng Nhập
                </Button>
              </div>
              <div style={{ color: "red" }}>{errorText}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.token !== null ? true : false
  }),
  { login }
)(Signin);
