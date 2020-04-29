import React, { Component } from "react";
import Breadcrumb from "../../../components/BreadBreadcrumb";
import { Tabs, Form } from "antd";
import { actGetMasterWithId } from "../../../redux/actions/master";
import { connect } from "react-redux";
import TabPaneInforMaster from "./TabPaneInforMaster";
import TabPaneContact from "./TabPaneContact";
import TabPaneService from "./TabPaneService";

const { TabPane } = Tabs;
class FormMasterUpdate extends Component {
  state = {
    thumbnail: "",
    fees: [],
    certificate: [],
    certificateSkills: []
  };
  componentDidMount() {
    this.onGetMasterId();
  }

  onGetMasterId = () => {
    let { id } = this.props.match.params;
    if (id) {
      const { token, actGetMasterWithId } = this.props;
      actGetMasterWithId(token, id, (err, res) => {
        if (!err)
          this.setState({
            thumbnail: res.data.infor.thumbnail,
            fees: res.data.contact.fees,
            certificate: res.data.infor.degrees,
            certificateSkills: res.data.infor.skills
          });
      });
    }
  };
  render() {
    let { id } = this.props.match.params;
    const { thumbnail, fees, certificateSkills, certificate } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 }
      }
    };
    return (
      <div>
        <Breadcrumb title={"Cập nhật thầy bói"} />
        <div className=" hasTable">
          <div className="page-header-wrap-children-content">
            <Tabs defaultActiveKey="1">
              <TabPane
                key="1"
                tab={<div style={{ textAlign: "left" }}>Thông tin</div>}
                style={{ paddingTop: 16 }}
              >
                <TabPaneInforMaster
                  id={id}
                  thumbnail={thumbnail}
                  formItemLayout={formItemLayout}
                  certificateSkills={certificateSkills}
                  certificate={certificate}
                />
              </TabPane>
              <TabPane
                key="2"
                tab={<div style={{ textAlign: "left" }}>Liên Hệ</div>}
              >
                <TabPaneContact id={id} formItemLayout={formItemLayout} />
              </TabPane>
              <TabPane
                key="3"
                tab={<div style={{ textAlign: "left" }}>Dịch Vụ</div>}
              >
                <TabPaneService
                  id={id}
                  fees={fees}
                  onGetMasterId={this.onGetMasterId}
                />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

const MasterUpdateForm = Form.create({ name: "masterUpdateMaster" })(
  FormMasterUpdate
);

export default connect(
  state => ({
    token: state.Auth.token
  }),
  { actGetMasterWithId }
)(MasterUpdateForm);
