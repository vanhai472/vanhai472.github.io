import React from "react";
import { PageHeader, Button, Tag } from "antd";
import { withRouter } from "react-router-dom";
import "./show.scss";

class Header extends React.Component {
  render() {
    return (
      <PageHeader className="bg-header"
      title={[
        <img id="logo" src="/images/LLogo.png" alt="logo" />
      ]}
        extra={[
          
          <Button key="2" onClick={() => this.props.history.push("/")}>
            Home
          </Button>,
          <Button key="1" onClick={()=>this.props.history.go(-1)}>Exit</Button>
        ]}
      />
    );
  }
}

export default withRouter(Header);
