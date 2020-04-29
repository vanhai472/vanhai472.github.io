import React, { Component } from "react";
import { Drawer } from "antd";
import { closeDrawer } from "../../redux/actions/common";
import { connect } from "react-redux";
class BaseDrawer extends Component {
  render() {
    const { visible, children,closeDrawer,view } = this.props;
    return (
      <Drawer
        title={this.props.title}
        width={view === "DesktopView"? "40%":"80%"}
        onClose={closeDrawer}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        {children}
      </Drawer>
    );
  }
}
export default connect(state => ({
  visible: state.request.visible,
  view: state.App.view
}),{closeDrawer}
)(BaseDrawer);
