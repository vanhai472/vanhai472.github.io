import React from "react";
import { Result, Button } from "antd";

class Notfound extends React.Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={()=>this.props.history.push('/login')}>Login</Button>}
      />
    );
  }
}

export default Notfound;
