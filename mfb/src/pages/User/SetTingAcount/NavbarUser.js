import React from "react";
import { Card, Avatar } from "antd";
import { USERNAME, EMAIL } from "../../../constants";
const { Meta } = Card;

class NavbarUser extends React.Component {
  render() {
    return (
      <>
        <Card style={{ borderRadius: "20px" }}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={localStorage.getItem(USERNAME) || "Tên khách hàng"}
            description={localStorage.getItem(EMAIL) || "Email khách hàng"}
          />
        </Card>
      </>
    );
  }
}

export default NavbarUser;
