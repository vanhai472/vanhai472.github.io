import React, { Component } from "react";
import Breadcrumb from "../../components/BreadBreadcrumb";
import BaseButton from "../../components/Button/index";
import { Link } from "react-router-dom";
import { Table, Popconfirm, Button, Input, Icon, Badge, Avatar } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import "./index.scss"

const rederColumns = getColumnSearchProps => [
  {
    title: "STT",
    dataIndex: "STT",
    align: "center",
    width: "5%"
  },
  {
    title: "Ảnh",
    dataIndex: "thumbnail",
    width: "100px",
    render: (text, record) => (
      <Avatar
        size={32}
        icon="user"
        shape="square"
        src={record.infor.thumbnail}
      />
    )
  },
  {
    title: "Tên Banner",
    dataIndex: "name",
  },
  {
    title: "Xác Thực",
    dataIndex: "verify",
    filters: [
      { text: "Đã Xác Thực", value: "true" },
      { text: "Chưa Xác Thực", value: "false" }
    ],
    filterMultiple: false,
    render: (text, record) => {
      if (record.verify === true)
        return <Badge status="success" text="Đã xác thực" />;
      else return <Badge status="warning" text="Chưa Xác Thực" />;
    }
  },
  {
    title: "Trạng Thái",
    dataIndex: "status",
    filters: [
      { text: "Đang Hoạt Động", value: "true" },
      { text: "Chưa Hoạt Động", value: "false" }
    ],
    filterMultiple: false,
    render: (text, record) => {
      if (record.status === true)
        return <Badge status="processing" text="Đang Hoạt Động" />;
      else return <Badge status="error" text="Chưa Hoạt Động" />;
    }
  },
  {
    title: "Ngày Tạo",
    dataIndex: "createdAt",
    filters: [
      { text: "Tăng", value: "1" },
      { text: "Giảm", value: "-1" }
    ],
    filterMultiple: false,
    render: (text, record) =>
      moment(record.createdAt).format("DD-MM-YYYY-h:mm:ss a")
  },
  {
    title: "Thao Tác",
    dataIndex: "action",
    render: (text, record) => (
      <span>
        <Button type="primary" ghost style={{ marginRight: 10 }}>
         Xem Trước
        </Button>

        <Button type="primary" ghost style={{ marginRight: 10 }}>
          Sửa
        </Button>

        <Popconfirm
          placement="bottomLeft"
          title="Bạn có chắc chắn muốn xóa"
          okText="Có"
          cancelText="Không"
        >
          <Button type="danger" ghost>
            Xóa
          </Button>
        </Popconfirm>
      </span>
    )
  }
];
class ManageBanner extends Component {
  render() {
    return (
      <div>
        <Breadcrumb title={"Quản Lý Banners"} />
        <div className=" hasTable">
          <Link to="/dashboard/banner/form">
            <BaseButton name={"Tạo mới"} />
          </Link>
        </div>
        <div className="page-header-wrap-children-content">
          <Table
            columns={rederColumns(
 
            )}
          />
        </div>
      </div>
    );
  }
}
export default ManageBanner