import React, { Component } from "react";
import ProfileUserForm, {
  ProfileUserInfor,
  InforItem,
  Span,
  Inputt,
} from "./styles";
class ProfileInforUser extends Component {
  render() {
    return (
      <ProfileUserInfor>
        <div className="infor-user-header">
          <h2>Thông tin liên hệ</h2>
        </div>
        <ProfileUserForm>
          <InforItem>
            <Span>Số điện thoại</Span>
            <Inputt defaultValue="0969387925" />
          </InforItem>

          <InforItem>
            <Span>Email</Span>
            <Inputt defaultValue="tu.anh@abc.com" />
          </InforItem>

          <InforItem>
            <Span>Facebook</Span>
            <Inputt defaultValue="facebook.com/tuanh96" />
          </InforItem>

          <InforItem>
            <Span>Instagram</Span>
            <Inputt defaultValue="instagram.com/tuanh96" />
          </InforItem>

          <InforItem>
            <Span>Twitter</Span>
            <Inputt defaultValue="twitter.com/tuanh96" />
          </InforItem>
        </ProfileUserForm>
      </ProfileUserInfor>
    );
  }
}

export default ProfileInforUser;
