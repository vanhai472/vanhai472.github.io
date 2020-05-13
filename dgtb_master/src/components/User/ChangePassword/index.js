import React, { Component } from "react";
import { Input } from "antd";
import ButtonBlue from "@Components/BtnButton/ButtonBlue";
import ButtonWhite from "@Components/BtnButton/ButtonWhite";
import "./styles/index.scss";
class ChangePassword extends Component {
  render() {
    return (
      <div className="form-comfirm">
        <div className="title-login"> Đổi mật khẩu</div>
        <div className="container-login">
          <div className="input-account">
            <div className="input-phone"> Mật khẩu cũ</div>
            <Input.Password placeholder="Mật khẩu cũ " />
          </div>
          <div className="input-password">
            <div className="input-phone"> Tạo mật khẩu mới</div>
            <Input.Password placeholder="Mật khẩu mới" />
          </div>
          <div className="input-password">
            <div className="input-phone">Xác nhận mật khẩu mới</div>
            <Input.Password placeholder="Mật khẩu mới" />
          </div>
        </div>
        <div className="btn-login">
          <ButtonWhite name="Hủy" width={116} />
          <ButtonBlue name="Đăng nhập" width={116} />
        </div>
        <img src="/image/group-login.png" alt="group-login" />
      </div>
    );
  }
}

export default ChangePassword;
