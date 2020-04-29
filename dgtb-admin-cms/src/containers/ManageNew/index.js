import React, { Component } from "react";
import Breadcrumb from "../../components/BreadBreadcrumb";
import BaseButton from "../../components/Button/index";
import { Table, Popconfirm, Button, Input, Icon, Avatar } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actGetAllNew, actDellNew } from "../../redux/actions/news";
import moment from "moment";
import _ from "lodash";

const quantity = 10;
const rederColumns = (onDelNews, updateNew, getColumnSearchProps, seeNew) => [
  {
    title: "STT",
    dataIndex: "STT",
    align: "center",
    width: "5%"
  },
  {
    title: "Admin",
    dataIndex: "name",
    width: "150px",
    render: (text, record) => record.admin[0].name,
    ...getColumnSearchProps("name")
  },
  {
    title: "Ảnh",
    dataIndex: "thumbnail",
    width: "150px",
    render: (text, record) => (
      <Avatar size={32} icon="user" shape="square" src={record.thumbnail} />
    )
  },
  {
    title: "Tiêu Đề",
    dataIndex: "title",
    width: "300px",
    render: (text, record) => (
      <div style={{ color: "#40a9ff", textTransform: "capitalize" }}>
        {record.title}
      </div>
    ),
    ...getColumnSearchProps("question")
  },
  {
    title: "Nội Dung",
    dataIndex: "content",
    width: "25%",
    render: (text, record) => _.truncate(record.content, { length: 50 }),
    ...getColumnSearchProps("content")
  },
  {
    title: "Ngày Tạo",
    dataIndex: "createdAt",
    width: "200px",
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
          onClick={() => seeNew(record._id)}
        >
          Xem
        </Button>
        <Button
          type="primary"
          ghost
          style={{ marginRight: 10 }}
          onClick={() => updateNew(record._id)}
        >
          Sửa
        </Button>
        <Popconfirm
          placement="bottomLeft"
          title="Bạn có chắc chắn muốn xóa"
          onConfirm={() => onDelNews(record._id)}
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
  state = {
    page: 1,
    isTableLoading: false,
    filters: {}
  };
  componentDidMount() {
    this.onGetAllNew();
  }

  onGetAllNew = () => {
    const { token, actGetAllNew } = this.props;
    const { page } = this.state;
    this.setState({
      isTableLoading: true
    });
    actGetAllNew(token, page, quantity, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
    });
  };
  // ham xoa News
  onDelNews = newId => {
    const { token, actDellNew } = this.props;
    this.setState({
      isTableLoading: true
    });
    actDellNew(token, newId, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
      this.onGetAllNew();
    });
  };
  // Xemmmm Newsssss
  seeNew = newsId => {
    const { history } = this.props;
    history.push(`/dashboard/news/see/${newsId}`);
  };

  updateNew = newsId => {
    const { history } = this.props;
    history.push(`/dashboard/news/form/${newsId}`);
  };

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

  render() {
    const { isTableLoading } = this.state;
    const { allNews, totalData } = this.props;
    const allData = [];
    allNews &&
      allNews.length > 0 &&
      allNews.forEach((infor, index) => {
        allData.push({
          ...infor,
          STT: index + 1
        });
      });
    return (
      <div>
        <Breadcrumb title={"Danh sách tin tức"} />
        <div className=" hasTable">
          <Link to="/dashboard/news/form">
            <BaseButton name={"Tạo mới"} />
          </Link>
          <div className="page-header-wrap-children-content">
            <Table
              rowKey={record => record._id}
              columns={rederColumns(
                this.onDelNews,
                this.updateNew,
                this.getColumnSearchProps,
                this.seeNew
              )}
              dataSource={allData}
              pagination={{
                total: totalData,
                pageSize: quantity
              }}
              scroll={{ x: true }}
              loading={isTableLoading}
              // bordered={true}
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
    allNews: state.news.allNews,
    totalPage: state.news.totalPage,
    totalData: state.news.totalData
  }),
  { actGetAllNew, actDellNew }
)(index);
