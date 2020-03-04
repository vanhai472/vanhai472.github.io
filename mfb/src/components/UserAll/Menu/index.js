import React from "react";
import "./index.scss";
import { Menu, Icon } from "antd";
import { withRouter } from "react-router-dom";

class MenuVertical extends React.Component {
  state = {
    current: this.props.match.path
      ? this.props.match.path.replace("/", "")
      : "dashboard"
  };
  handleClick = e => {
    const { key } = e;
    if (key === "dashboard") {
      this.props.history.push("/dashboard");
    }
    if (key === "report") {
      this.props.history.push("/dashboard");
    }
    if (key === "bufLikeCommentShare") {
      this.props.history.push("/buff-facebook");
    }
    if (key === "buffLikeInstagram") {
      this.props.history.push("/buff-like-instagram");
    }
    if (key === "setTingAcount") {
      this.props.history.push("/set-ting-acount");
    }
    this.setState({
      current: key
    });
  };
  changeColor() {
    this.setState({ background: this.state.background });
  }
  render() {
    const { current } = this.state;
    return (
      <>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          style={{
            width: 90,
            margin: 10,
            padding: "10px 0px 10px 0px",
            borderRadius: 20
          }}
          inlineCollapsed={this.state.collapsed}
          mode="horizontal"
        >
          <Menu.Item className="li-menu" key="dashboard">
            <div className="wraper-icon">
              <Icon
                className="icon"
                style={{ fontSize: 23, color: "rgb(214, 214, 214)" }}
                type="bank"
              />
            </div>
          </Menu.Item>

          <br />
          <Menu.Item className="li-menu" key="report">
            <div className="wraper-icon">
              <Icon
                className="icon"
                style={{ fontSize: 23, color: "rgb(214, 214, 214)" }}
                type="home"
              />
            </div>
            <span className="title-icon"> Home</span>
          </Menu.Item>
          <Menu.Item className="li-menu" key="bufLikeCommentShare">
            <div className="wraper-icon">
              <Icon
                className="icon"
                style={{ fontSize: 23, color: "rgb(214, 214, 214)" }}
                type="facebook"
              />
            </div>
            <span className="title-icon"> facebook</span>
          </Menu.Item>
          <Menu.Item className="li-menu" key="buffLikeInstagram">
            <div className="wraper-icon">
              <Icon
                className="icon"
                style={{ fontSize: 23, color: "rgb(214, 214, 214)" }}
                type="instagram"
              />
            </div>
            <span className="title-icon"> instagram</span>
          </Menu.Item>

          <br />
          <Menu.Item className="li-menu" key="setTingAcount">
            <div className="wraper-icon">
              <Icon
                className="icon"
                style={{ fontSize: 23, color: "rgb(214, 214, 214)" }}
                type="user"
              />
            </div>
            <span className="title-icon"> User</span>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}
export default withRouter(MenuVertical);
