import React, { Component } from "react";
import ProfileUserForm, { ProfileUserPassword } from "./styles";
import { Button } from "antd";
class ProfilePasswordUser extends Component {
  render() {
    return (
      <ProfileUserPassword>
        <div className="infor-user-header">
          <h2>Mật khẩu</h2>
          <span>
            Bạn có muốn đổi mật khẩu không? Nếu có thì hãy nhấp vào nút bên
            dưới.
          </span>
        </div>
        <ProfileUserForm>
          <Button className="sign-blue" style={{ width: 160 }}>
            <img src="/icon/User/Lock.svg" alt="Lock" />
            Đổi mật khẩu
          </Button>
        </ProfileUserForm>
      </ProfileUserPassword>
    );
  }
}

export default ProfilePasswordUser;
