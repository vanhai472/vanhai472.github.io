import React from "react";
import { Card, Modal, Button, Icon, Checkbox, Table } from "antd";
import "./index.scss";

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
class RefundLogsPage extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    function onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }

    return (
      <>
        <Card style={{ borderRadius: 20 }}>
          <p className="limit diary">Lịch sử</p>
          <div className="limit mrRefundLogs">
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
          <hr />
          <Table
            columns={columns}
            expandedRowRender={record => (
              <p style={{ margin: 0 }}>{record.description}</p>
            )}
            dataSource={data}
          />
        </Card>
      </>
    );
  }
}

export default RefundLogsPage;
