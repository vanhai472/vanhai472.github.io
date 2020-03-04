import React from "react";
import { Form, Tabs } from "antd";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FormCreateInstagram from "../formCreateInstagram";
import * as authAction from "../../../actions/auth";
import "./index.scss";

const width = window.innerWidth;
const { TabPane } = Tabs;

class BuffLikeInstagram extends React.Component {
  state = { visible: false };

  componentDidMount() {
    const { pathname } = this.props.location;
    if (pathname === "/buff-like-instagram") {
      let search = "?";
      search += "seeding=buff-seeding-like-instagram-order";
      this.props.history.push(search);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
      }
    });
  };

  callback = key => {
    let search = "?";
    search += "seeding=" + key;
    this.props.history.push(search);
    const { form } = this.props;
    form.resetFields();
  };

  render() {
    const { form } = this.props;

    return (
      <Tabs
        tabPosition={width <= 768 ? "top" : "left"}
        animated
        onChange={this.callback}
        defaultActiveKey="buff-seeding-like-instagram-order"
      >
        <TabPane
          tab={<h4 className="title-pane">Buff Like Instagram</h4>}
          key="buff-seeding-like-instagram-order"
        >
          <FormCreateInstagram form={form} />
        </TabPane>
        <TabPane
          tab={<h4 className="title-pane">Buff Sub Instagram </h4>}
          key="buff-seeding-sub-instagram-order"
        >
          <FormCreateInstagram form={form} />
        </TabPane>
      </Tabs>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.ui.show_loading
});

const mapDispatchToProps = dispatch => ({
  authAction: bindActionCreators(authAction, dispatch)
});

const WrappeBuffLikeInstagram = Form.create({ name: "BuffLikeInstagram" })(
  BuffLikeInstagram
);
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(withRouter(WrappeBuffLikeInstagram));
