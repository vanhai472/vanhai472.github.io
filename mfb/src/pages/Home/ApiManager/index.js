import React from "react";
import {
  Row,
  Col,
  Card,
  Modal,
  Button,
  Icon,
  Checkbox,
  Table,
  Input
} from "antd";
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
class ApiManagerPage extends React.Component {
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
      <Row>
        <h2 className="contact">Tích hợp Site đại lý</h2>
        <Card style={{ width: "100%", borderRadius: 20 }}>
          <div>
            <p className="textAPI">API Key</p>
            <p className="textAPI">Nhận API Key để đăng kí website đại lý</p>
            <Input
              className="disableAPI"
              style={{
                background: "#e9ecef,color: #212529",
                width: "90%",
                padding: "20px 0px"
              }}
              disabled="disabled"
              type="text"
              required="required"
              placeholder="Vì lý do bảo mật, chúng tôi tạm thời ẩn API key, vui lòng nhấn nút bên dưới để lấy API key"
            />
            <Row>
              <Col span={12}>
                <Button
                  className="API"
                  style={{
                    borderRadius: 30,
                    height: 65,
                    color: "white",
                    fontSize: 20,
                    margin: "20px 0px"
                  }}
                >
                  {" "}
                  Lấy API
                </Button>
              </Col>
              <Col span={12}></Col>
            </Row>
            <p className="textAPI">Địa chỉ IP trỏ tên miền</p>
            <p className="textAPI">
              Chú ý trỏ tên miền site đại lý về đúng IP phía dưới
            </p>
            <h3 className="textAPI numberAPI">66.42.49.26</h3>
            <Button
              className="video"
              style={{
                borderRadius: 30,
                height: 40,
                fontSize: 20,
                margin: "20px 0px"
              }}
            >
              <a href="https://www.youtube.com/watch?v=GyrH6xiFiT0&list=RDb3Mm4wHMtjQ&index=7">
                {" "}
                Xem video hướng dẫn
              </a>
            </Button>
          </div>

          <Card style={{ borderRadius: 20 }}>
            <p className="limit diary">Danh sách Site đại lý</p>
            <div className="limit" style={{ marginLeft: 460 }}>
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
        </Card>
      </Row>
    );
  }
}

export default ApiManagerPage;
