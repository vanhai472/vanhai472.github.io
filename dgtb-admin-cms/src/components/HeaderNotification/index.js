import React, { Component } from "react";
import { Icon, Badge } from "antd";

class HeaderNotification extends Component {
  render() {
    return (
      <div>
        <Badge count={99}>
          <Icon type="bell" />
        </Badge>
      </div>
    );
  }
}

export default HeaderNotification;
