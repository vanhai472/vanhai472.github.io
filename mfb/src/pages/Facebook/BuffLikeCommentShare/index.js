import React from "react";
import { Form, Tabs } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import BuffViewVideo from "../BuffViewVideo";
import * as userAction from "../../../actions/user";
import FormCreateFacebook from "../formCreateFacebook";
import { AUTHORIZATION_KEY } from "../../../constants";
import "./index.scss";

const { TabPane } = Tabs;
const width = window.innerWidth;
class BuffLikeCommentSharePage extends React.Component {
  state = {
    visible: false,
    token: localStorage.getItem(AUTHORIZATION_KEY),
    urlLink: "",
    urlId: ""
  };
  componentDidMount() {
    const { pathname } = this.props.location;
    if (pathname === "/buff-facebook") {
      let search = "?";
      search += "seeding=buff-facebook";
      this.props.history.push(search);
    }
    const { token } = this.state;
    const { userAction } = this.props;
    const { getTypeServices } = userAction;
    if (getTypeServices) {
      const params = {
        token
      };
      getTypeServices(params);
    }
  }
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
        defaultActiveKey="buff-facebook"
        onChange={this.callback}
      >
        <TabPane
          tab={<h4 className="title-pane">Buff Like, Comment, Share Post</h4>}
          key="buff-facebook"
        >
          <FormCreateFacebook
            form={form}
            datatTypeServices={this.props?.datatTypeServices}
          />
        </TabPane>
        <TabPane
          tab={<h4 className="title-pane">Buff Sub (Tăng Theo Dõi) Profile</h4>}
          key="buff-seeding-sub-order"
        >
          <FormCreateFacebook
            form={form}
            datatTypeServices={this.props?.datatTypeServices}
          />
        </TabPane>
        <TabPane
          tab={<h4 className="title-pane">Buff Like Fanpage Order</h4>}
          key="buff-seeding-like-fanpage-order"
        >
          <FormCreateFacebook
            form={form}
            datatTypeServices={this.props?.datatTypeServices}
          />
        </TabPane>
        <TabPane
          tab={<h4 className="title-pane">Buff Sub v2</h4>}
          key="buff-seeding-subv2"
        >
          <BuffViewVideo
            form={form}
            datatTypeServices={this.props?.datatTypeServices}
          />
        </TabPane>
        <TabPane
          tab={<h4 className="title-pane">Buff View Video</h4>}
          key="buff-seeding-view-video"
        >
          <BuffViewVideo
            form={form}
            datatTypeServices={this.props?.datatTypeServices}
          />
        </TabPane>
      </Tabs>
    );
  }
}

const WrappedHorizontalBuffLikeCommentSharePage = Form.create({
  name: "horizontal_BuffLikeCommentSharePage"
})(BuffLikeCommentSharePage);

const mapStateToProps = state => ({
  show_loading: state.ui.show_loading,
  datatTypeServices: state.user.datatTypeServices
});

const mapDispatchToProps = dispatch => ({
  userAction: bindActionCreators(userAction, dispatch)
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(
  withRouter(WrappedHorizontalBuffLikeCommentSharePage)
);
