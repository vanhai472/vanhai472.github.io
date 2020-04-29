import React, { Component } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../components/BreadBreadcrumb";
import { Table, Popconfirm, Button, Input, Icon, Badge, Avatar } from "antd";
import BaseButton from "../../components/Button/index";
import ModalUpdatePassUser from "./components/ModalUpdatePassUser";
import {
  actGetAllUser,
  actDellUser,
  actGetUserWithId,
  searchUser
} from "../../redux/actions/user";
import "./index.scss";
import "antd/dist/antd.css";
import moment from "moment";
import _ from "lodash";
import { Link } from "react-router-dom";

const quantity = 10;
const rederColumns = (
  onDeleteUser,
  updateUser,
  onShowModal,
  getColumnSearchProps
) => [
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
    title: "Tên",
    dataIndex: "name",
    ...getColumnSearchProps("name")
  },
  {
    title: "Email",
    dataIndex: "email",
    width: "13%",
    ...getColumnSearchProps("email")
  },
  {
    title: "Số Điện Thoại",
    dataIndex: "phone",

    ...getColumnSearchProps("phone"),
    render: (text, record) => record.infor.phone
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
        <Button
          type="primary"
          ghost
          style={{ marginRight: 10 }}
          onClick={() => onShowModal(record._id)}
        >
          Đổi Mật Khẩu
        </Button>

        <Button
          type="primary"
          ghost
          style={{ marginRight: 10 }}
          onClick={() => updateUser(record._id)}
        >
          Sửa
        </Button>

        <Popconfirm
          placement="bottomLeft"
          title="Bạn có chắc chắn muốn xóa"
          onConfirm={() => onDeleteUser(record._id)}
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

class ManageUser extends Component {
  state = {
    page: 1,
    isTableLoading: false,
    isModalVisible: false,
    filters: {},
    userId: ""
  };

  // gọi hàm thực hiện việc load dữ liệu từ server về
  componentDidMount() {
    this.onGetAllUser();
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder="Nhập"
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          {"Search"}
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          {"Reset"}
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) => value.toString(),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    }
  });

  handleReset = clearFilters => {
    clearFilters();
  };
  handleSearch = (selectedKeys, confirm) => {
    confirm();
  };

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
          searchUser(token, page, 10, filters, (er, res) => {
            res &&
              this.setState({
                isTableLoading: false
              });
          });
        } else this.onGetAllUser();
      }
    );
  };
  // hàm để load dữ liệu về
  onGetAllUser = () => {
    const { token, actGetAllUser } = this.props;
    const { page } = this.state;
    this.setState({
      isTableLoading: true
    });
    actGetAllUser(token, page, quantity, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
    });
  };

  // hàm xóa User
  onDeleteUser = userId => {
    const { token, actDellUser } = this.props;
    this.setState({
      isTableLoading: true
    });
    actDellUser(token, userId, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
      this.onGetAllUser();
    });
  };

  updateUser = userId => {
    const { history } = this.props;
    history.push(`/dashboard/users/form/${userId}`);
  };

  onShowModal = userId => {
    this.setState({
      isModalVisible: true,
      userId
    });
  };

  onHideModal = () => {
    this.setState({
      isModalVisible: false
    });
  };

  render() {
    const { isTableLoading, isModalVisible, userId } = this.state;
    const { allUser, totalData } = this.props;
    const allData = [];
    allUser &&
      allUser.length > 0 &&
      allUser.forEach((infor, index) => {
        allData.push({
          ...infor,
          STT: index + 1
        });
      });

    return (
      <div>
        <Breadcrumb title={"Danh sách người dùng"} />
        <div className=" hasTable">
          <Link to="/dashboard/users/form">
            <BaseButton name={"Tạo mới"} />
          </Link>
          <div className="page-header-wrap-children-content">
            <Table
              rowKey={record => record._id}
              columns={rederColumns(
                this.onDeleteUser,
                this.updateUser,
                this.onShowModal,
                this.getColumnSearchProps
              )}
              dataSource={allData}
              pagination={{
                total: totalData,
                pageSize: quantity
              }}
              scroll={{ x: true }}
              onChange={this.onTableChange}
              loading={isTableLoading}
              bordered={true}
              size="middle"
            />
          </div>
        </div>
        <ModalUpdatePassUser
          onHideModal={this.onHideModal}
          isModalVisible={isModalVisible}
          userId={userId}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    token: state.Auth.token,
    allUser: state.User.allUser,
    totalPage: state.User.totalPage,
    // user: state.Auth.user,
    totalData: state.User.totalData
  }),
  { actGetAllUser, actDellUser, actGetUserWithId, searchUser }
)(ManageUser);
