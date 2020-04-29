import React, { Component } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../components/BreadBreadcrumb";
import { Table, Popconfirm, Button, Input, Icon } from "antd";
import BaseButton from "../../components/Button/index";
import { actDellRating, actGetAllRating } from "../../redux/actions/rates";
import "antd/dist/antd.css";
import moment from "moment";
import _ from "lodash";

const quantity = 10;
const rederColumns = (
  onDellRate,
  onShowModal,
  getColumnSearchProps,
  seeRate
) => [
  {
    title: "STT",
    dataIndex: "STT",
    align: "center",
    width: "5%"
  },
  {
    title: "Người dùng",
    dataIndex: "user",
    align: "center",
    render: (text, record) =>
      record.user.length > 0 ? record.user[0].name : "",
    ...getColumnSearchProps("user")
  },
  {
    title: "Đánh giá",
    dataIndex: "details",
    align: "center",
    render: (text, record) => (record.details ? record.details[0].name : ""),
    ...getColumnSearchProps("details")
  },
  {
    title: "Nội Dung",
    dataIndex: "content",
    align: "center",
    ...getColumnSearchProps("content")
  },
  {
    title: "Thầy bói",
    dataIndex: "master",
    align: "center",
    width: "13%",
    render: (text, record) =>
      record.master.length > 0 ? record.master[0].name : "",
    ...getColumnSearchProps("master")
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
    width: "300px",
    align: "center",
    render: (text, record) => (
      <span>
        <Button
          type="primary"
          ghost
          style={{ marginRight: 10 }}
          onClick={() => seeRate(record)}
        >
          Xem
        </Button>

        <Popconfirm
          placement="bottomLeft"
          title="Bạn có chắc chắn muốn xóa"
          onConfirm={() => onDellRate(record._id)}
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

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      isTableLoading: false,
      filters: {}
    };
  }

  componentDidMount() {
    this.onGetAllRate();
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
          const { token, searchFaq } = this.props;
          const { page } = this.state;
          this.setState({
            isTableLoading: true
          });
          searchFaq(token, page, 10, filters, (er, res) => {
            res &&
              this.setState({
                isTableLoading: false
              });
          });
        } else this.onGetAllRate();
      }
    );
  };

  onGetAllRate = () => {
    const { token, actGetAllRating } = this.props;
    const { page } = this.state;
    this.setState({
      isTableLoading: true
    });
    actGetAllRating(token, page, quantity, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
    });
  };

  onDellRate = userId => {
    const { token, actDellRating } = this.props;
    this.setState({
      isTableLoading: true
    });
    actDellRating(token, userId, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
      this.onGetAllRate();
    });
  };

  seeRate = rate => {
    const { _id } = rate;
    const { history } = this.props;
    history.push({
      pathname: `/dashboard/rating/form/${_id}`,
      state: rate.details
    });
  };

  onShowModal = userId => {
    this.setState({
      isModalVisible: true
    });
  };

  onHideModal = () => {
    this.setState({
      isModalVisible: false
    });
  };

  render() {
    const { isTableLoading } = this.state;
    const { allRating, totalData } = this.props;
    const allData = [];
    allRating &&
      allRating.length > 0 &&
      allRating.forEach((infor, index) => {
        allData.push({
          ...infor,
          STT: index + 1
        });
      });

    return (
      <div>
        <Breadcrumb title={"Danh sách đánh giá"} />
        <div className=" hasTable">
          <div className="page-header-wrap-children-content">
            <Table
              rowKey={record => record._id}
              columns={rederColumns(
                this.onDellRate,
                this.onShowModal,
                this.getColumnSearchProps,
                this.seeRate
              )}
              dataSource={allData}
              pagination={{
                total: totalData,
                pageSize: quantity
              }}
              scroll={{ x: 1000 }}
              onChange={this.onTableChange}
              loading={isTableLoading}
              bordered={true}
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
    allRating: state.Rates.allRating,
    totalPage: state.Rates.totalPage,
    totalData: state.Rates.totalData
  }),
  { actGetAllRating, actDellRating }
)(index);
