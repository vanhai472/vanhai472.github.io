import React, { Component } from "react";
import ProfileUserForm, {
  ProfileUserContact,
  InforItem,
  Span,
  Inputt,
} from "./styles";
import { Select } from "antd";
import { tzStrings } from "./dataGmt";
const { Option } = Select;

class ProfileContactUser extends Component {
  handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  render() {
    return (
      <ProfileUserContact>
        <div className="infor-user-header">
          <h2>Thông tin cá nhân</h2>
        </div>
        <ProfileUserForm>
          <InforItem>
            <Span>Họ và tên</Span>
            <Inputt defaultValue="Nguyễn Văn A" />
          </InforItem>

          <InforItem>
            <Span>Giới tính</Span>
            <Select
              defaultValue="male"
              onChange={this.handleChange}
              className="sex"
            >
              <Option value="male">Nam</Option>
              <Option value="female">Nữ</Option>
              <Option value="other">Giới tính thứ 3</Option>
            </Select>
          </InforItem>

          <InforItem>
            <Span>Múi giờ</Span>
            <Select
              defaultValue="(GMT +7) Bangkok, Hanoi,..."
              onChange={this.handleChange}
              className="sex"
            >
              <Option value="(GMT +7) Bangkok, Hanoi,...">
                (GMT +7) Bangkok, Hanoi,...
              </Option>
              {tzStrings.map((tzS, i) => (
                <Option key={i} value={tzS.label}>
                  {tzS.label}
                </Option>
              ))}
            </Select>
          </InforItem>

          <InforItem>
            <Span>Ngày sinh</Span>
            <Inputt defaultValue="20/08/1996" />
          </InforItem>

          <InforItem>
            <Span>Địa chỉ</Span>
            <Inputt defaultValue="119 Trần Duy Hưng, Phường..." />
          </InforItem>
        </ProfileUserForm>
      </ProfileUserContact>
    );
  }
}

export default ProfileContactUser;
