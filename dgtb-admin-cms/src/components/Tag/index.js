import React, { Component } from "react";
import { Tag } from "antd";
import { connect } from "react-redux";
import { activeStatus, InactiveStatus } from "../../redux/actions/user";

class CreateTag extends Component {
  changeStatus = (userId, status) => {
    const { activeStatus, token, InactiveStatus, onGetAllUser } = this.props;
    if (status === true) {
      InactiveStatus(token, userId, (er, res) => {
        onGetAllUser();
      });
    } else {
      activeStatus(token, userId, (er, res) => {
        onGetAllUser();
      });
    }
  };
  render() {
    const { color, description, userId, status, disable } = this.props;
    return (
      <div>
        {disable ? (
          <Tag
            style={{ textTransform: "uppercase", cursor: "pointer" }}
            color={color}
          >
            {description}
          </Tag>
        ) : (
          <Tag
            style={{ textTransform: "uppercase", cursor: "pointer" }}
            color={color}
            onClick={() => this.changeStatus(userId, status)}
          >
            {description}
          </Tag>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    token: state.Auth.token
  }),
  { activeStatus, InactiveStatus }
)(CreateTag);
