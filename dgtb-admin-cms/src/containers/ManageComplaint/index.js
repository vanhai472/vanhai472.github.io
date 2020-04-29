import React, { Component } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../components/BreadBreadcrumb";
import { Table, Popconfirm, Button, Input, Icon, Badge } from "antd";
import BaseButton from "../../components/Button/index";
import {
  actDellComplaints,
  actGetAllComplaints,
  actGetComplaintsWithId
} from "../../redux/actions/complaints";
import "antd/dist/antd.css";
import moment from "moment";
import _ from "lodash";
import { Link } from "react-router-dom";

const quantity = 10;
const rederColumns = (
  onDelComplaints,
  answerComplaints,
  getColumnSearchProps
) => [
  {
    title: "STT",
    dataIndex: "STT",
    align: "center",
    width: "5%"
  },
  {
    title: "Tên Người Dùng",
    dataIndex: "name",
    render: (text, record) => (
      <div style={{ color: "#40a9ff", textTransform: "capitalize" }}>
        {record.user.length > 0 ? (
          <Link to={`/dashboard/users/form/${record.user[0]._id}`}>
            {record.user[0].name}
          </Link>
        ) : (
          ""
        )}
      </div>
    ),
    ...getColumnSearchProps("name")
  },
  {
    title: "Tên thầy",
    dataIndex: "master",
    render: (text, record) => (
      <div style={{ color: "#40a9ff", textTransform: "capitalize" }}>
        {record.master.length > 0 ? (
          <Link to={`/dashboard/masters/form/${record.master[0]._id}`}>
            {record.master[0].name}
          </Link>
        ) : (
          ""
        )}
      </div>
    ),
    ...getColumnSearchProps("master")
  },
  {
    title: "Tên câu hỏi",
    dataIndex: "content",
    width: "20%",
    ...getColumnSearchProps("content")
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
      if (!_.isEmpty(record.conversation)) {
        if (_.last(record.conversation).role !== 0)
          return <Badge status="error" text="Chưa Trả Lời" />;
        else return <Badge status="success" text="Đã Trả Lời" />;
      } else return <Badge status="error" text="Chưa Trả Lời" />;
    }
  },
  {
    title: "Ngày Tạo",
    dataIndex: "createdAt",
    align: "center",
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
    width: "200px",
    align: "center",
    render: (text, record) => (
      <span>
        <Button
          type="primary"
          ghost
          style={{ marginRight: 10 }}
          onClick={() => answerComplaints(record)}
        >
          Trả Lời
        </Button>
        <Popconfirm
          placement="bottomLeft"
          title="Bạn có chắc chắn muốn xóa"
          onConfirm={() => onDelComplaints(record._id)}
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

class ManageComplaint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      isTableLoading: false,
      isModalVisible: false,
      filters: {}
    };
  }

  // gọi hàm thực hiện việc load dữ liệu từ server về
  componentDidMount() {
    this.onGetAllComplaint();
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
        } else this.onGetAllComplaint();
      }
    );
  };
  // hàm để load dữ liệu về
  onGetAllComplaint = () => {
    const { token, actGetAllComplaints } = this.props;
    const { page } = this.state;
    this.setState({
      isTableLoading: true
    });
    actGetAllComplaints(token, page, quantity, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
    });
  };

  // hàm xóa User
  onDelComplaints = complainsId => {
    const { token, actDellComplaints } = this.props;
    this.setState({
      isTableLoading: true
    });
    actDellComplaints(token, complainsId, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
      this.onGetAllComplaint();
    });
  };

  answerComplaints = complaint => {
    const { history } = this.props;
    history.push({
      pathname: `/dashboard/complaints/form/${complaint._id}`,
      state:
        complaint.user.length > 0
          ? complaint.user[0].name
          : complaint.master[0].name
    });
  };

  render() {
    const { isTableLoading } = this.state;
    const { allComplaints, totalData } = this.props;
    const allData = [];
    allComplaints &&
      allComplaints.length > 0 &&
      allComplaints.forEach((infor, index) => {
        allData.push({
          ...infor,
          STT: index + 1
        });
      });

    return (
      <div>
        <Breadcrumb title={"Danh sách khiếu nại"} />
        <div className=" hasTable">
          <BaseButton name={"Tạo mới"} />
          <div className="page-header-wrap-children-content">
            <Table
              rowKey={record => record._id}
              columns={rederColumns(
                this.onDelComplaints,
                this.answerComplaints,
                this.getColumnSearchProps
              )}
              dataSource={allData}
              pagination={{
                total: totalData,
                pageSize: quantity
              }}
              scroll={{ x: 1000 }}
              onChange={this.onTableChange}
              loading={isTableLoading}
              size="middle"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    token: state.Auth.token,
    allComplaints: state.Complaint.allComplaints,
    totalPage: state.Complaint.totalPage,
    totalData: state.Complaint.totalData
  }),
  { actGetAllComplaints, actDellComplaints, actGetComplaintsWithId }
)(ManageComplaint);
