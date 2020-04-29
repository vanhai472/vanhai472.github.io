import React, { Component } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../components/BreadBreadcrumb";
import BaseButton from "../../components/Button/index";
import { Link } from "react-router-dom";
import { Table, Popconfirm, Button, Badge, Avatar } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import _ from "lodash";

import "./index.scss";
import { actGetAllImageLocation } from "../../redux/actions/imageLocation";

const quantity = 10;
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
      <Avatar size={32} icon="user" shape="square" src={record.thumbnail} />
    )
  },
  {
    title: "Vị Trí",
    dataIndex: "name"
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
      console.log("recod", record);
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

class ManageImageLocation extends Component {
  state = {
    page: 1,
    isTableLoading: false,
    isModalVisible: false,
    filters: {},
    LocationsId: ""
  };
  componentDidMount() {
    this.onGetAllImageLocation();
  }
  onTableChange = (pagination, filters, sorter) => {
    this.setState(
      {
        page: pagination.current,
        filters
      },
      () => {
        if (!_.isEmpty(filters)) {
          const { token, searchUser } = this.props;
          const { page } = this.state;
          this.setState({
            isTableLoading: true
          });
        } else this.onGetAllImageLocation();
      }
    );
  };
  // Ham Load giu lieu ve
  onGetAllImageLocation = () => {
    const { token, actGetAllImageLocation } = this.props;
    const { page } = this.state;
    this.setState({
      isTableLoading: true
    });
    actGetAllImageLocation(token, page, quantity, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
    });
  };
  render() {
    const { isTableLoading, isModalVisible, imageLocationId } = this.state;
    const { allImageLocation, totalData } = this.props;
    const allData = [];
    allImageLocation &&
      allImageLocation.length > 0 &&
      allImageLocation.forEach((infor, index) => {
        allData.push({
          ...infor,
          STT: index + 1
        });
      });

    return (
      <div>
        <Breadcrumb title={"Quản Lý Ảnh / Vị trí"} />
        <div className=" hasTable">
          <Link to="/dashboard/imagelocation/form">
            <BaseButton name={"Tạo mới"} />
          </Link>
        </div>
        <div className="page-header-wrap-children-content">
          <Table
            columns={rederColumns()}
            dataSource={allData}
            pagination={{
              total: totalData,
              pageSize: quantity
            }}
            scroll={{ x: true }}
            onChange={this.onTableChange}
            loading={isTableLoading}
          />
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    token: state.Auth.token,
    allImageLocation: state.ImageLocation.allImageLocation,
    totalPage: state.ImageLocation.totalPage,
    totalData: state.ImageLocation.totalData
  }),
  {
    actGetAllImageLocation
  }
)(ManageImageLocation);
