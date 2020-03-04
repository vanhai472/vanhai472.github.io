import React from "react";
import { Card, Select, Modal, Button, Icon, Checkbox, Table, Form } from "antd";
import "./index.scss";

const { Option } = Select;

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
  {
    title: "Action",
    dataIndex: "",
    key: "x"
  }
];

const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park."
  },
  {
    key: 3,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park."
  }
];
class ReportPage extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 }
      }
    };

    function onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }

    return (
      <Card style={{ width: "100%", borderRadius: 20 }}>
        <Card
          title={<h3>Nhật ký hoạt động - Thống kê nạp tiền</h3>}
          hoverable
          bordered
          style={{ borderRadius: 20, marginBottom: "20px" }}
          bodyStyle={{ paddingTop: "5px", margin: "20px" }}
        >
          <Form labelAlign="left" {...formItemLayout}>
            <Form.Item
              label={<span className="txtLabel">Load limit 50 nhật ký</span>}
            >
              {getFieldDecorator("select", {
                rules: []
              })(
                <Select style={{ width: "100%" }} size="large">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </Select>
              )}
            </Form.Item>
          </Form>
        </Card>

        <Card style={{ borderRadius: 20 }}>
          <div className="limit" style={{ display: "block", float: "right" }}>
            <div className="limit">
              <Button className="settingTable" onClick={this.showModal}>
                <Icon style={{ color: "white" }} type="setting" />
                <span className="textSetting">Cài đặt bảng</span>
              </Button>
              <Modal
                title="Cài đặt thông tin ưu tiên được hiển thị"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <Checkbox onChange={onChange}>#</Checkbox>
                <Checkbox onChange={onChange}>Tool</Checkbox>
                <Checkbox onChange={onChange}>Hành Động</Checkbox>
                <Checkbox onChange={onChange}>Client Username</Checkbox>
                <Checkbox onChange={onChange}>Đối Tượng</Checkbox>
                <Checkbox onChange={onChange}>Tiền</Checkbox>
                <Checkbox onChange={onChange}>Note</Checkbox>
                <Checkbox onChange={onChange}> Khởi tạo</Checkbox>
              </Modal>
            </div>
            <div className="limit">
              <Icon type="printer" className="iconReportPage" />
              <Icon type="file-exclamation" className="iconReportPage" />
              <Icon type="search" className="iconReportPage" />
            </div>
          </div>
          <Table title={() => "Nhật ký"} columns={columns} dataSource={data} />
        </Card>
      </Card>
    );
  }
}
const WrappedDemo = Form.create({ name: "validate_other" })(ReportPage);
export default WrappedDemo;
