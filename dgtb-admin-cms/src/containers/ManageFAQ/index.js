import React, { Component } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../components/BreadBreadcrumb";
import { Table, Popconfirm, Button, Input, Icon } from "antd";
import BaseButton from "../../components/Button/index";
import { actDellFaq, actGetAllFaq } from "../../redux/actions/faqs";
import "antd/dist/antd.css";
import moment from "moment";
import _ from "lodash";
import { Link } from "react-router-dom";

const quantity = 10;
const rederColumns = (onDelFaqs, updateFaq, getColumnSearchProps, seeFaq) => [
  {
    title: "STT",
    dataIndex: "STT",
    align: "center",
    width: "5%"
  },
  {
    title: "Người Tạo",
    dataIndex: "name",
    render: (text, record) => record.admin[0].name,
    ...getColumnSearchProps("name")
  },
  {
    title: "Câu hỏi",
    dataIndex: "question",
    render: (text, record) => (
      <div style={{ color: "#40a9ff", textTransform: "capitalize" }}>
        {record.question}
      </div>
    ),
    ...getColumnSearchProps("question")
  },
  {
    title: "Câu trả lời",
    dataIndex: "answer",
    width: "25%",
    render: (text, record) => _.truncate(record.answer, { length: 50 }),
    ...getColumnSearchProps("answer")
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
      moment(record.createdAt).format("DD-MM-YYYY-h:mm a")
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
          onClick={() => seeFaq(record)}
        >
          Xem
        </Button>
        <Button
          type="primary"
          ghost
          style={{ marginRight: 10 }}
          onClick={() => updateFaq(record._id)}
        >
          Sửa
        </Button>
        <Popconfirm
          placement="bottomLeft"
          title="Bạn có chắc chắn muốn xóa"
          onConfirm={() => onDelFaqs(record._id)}
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
      isModalVisible: false,
      filters: {}
    };
  }

  // gọi hàm thực hiện việc load dữ liệu từ server về
  componentDidMount() {
    this.onGetAllFaqs();
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
        } else this.onGetAllFaqs();
      }
    );
  };

  onGetAllFaqs = () => {
    const { token, actGetAllFaq } = this.props;
    const { page } = this.state;
    this.setState({
      isTableLoading: true
    });
    actGetAllFaq(token, page, quantity, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
    });
  };

  // hàm xóa FAQ
  onDelFaqs = userId => {
    const { token, actDellFaq } = this.props;
    this.setState({
      isTableLoading: true
    });
    actDellFaq(token, userId, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
      this.onGetAllFaqs();
    });
  };

  updateFaq = faqId => {
    const { history } = this.props;
    history.push(`/dashboard/faq/form/${faqId}`);
  };
  // Xem bài viết
  seeFaq = faq => {
    const { history } = this.props;
    history.push({
      pathname: `/dashboard/faq/see/${faq._id}`
      // state: faq.
    });
  };

  render() {
    const { isTableLoading } = this.state;
    const { allFaq, totalData } = this.props;
    const FaqData = [];
    allFaq &&
      allFaq.length > 0 &&
      allFaq.forEach((infor, index) => {
        FaqData.push({
          ...infor,
          STT: index + 1
        });
      });

    return (
      <div>
        <Breadcrumb title={"Danh sách câu hỏi thường gặp"} />
        <div className=" hasTable">
          <Link to="/dashboard/faq/form">
            <BaseButton name={"Tạo mới"} />
          </Link>
          <div className="page-header-wrap-children-content">
            <Table
              rowKey={record => record._id}
              columns={rederColumns(
                this.onDelFaqs,
                this.updateFaq,
                this.getColumnSearchProps,
                this.seeFaq
              )}
              dataSource={FaqData}
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
    allFaq: state.FAQ.allFaq,
    totalPage: state.FAQ.totalPage,
    totalData: state.FAQ.totalData
  }),
  { actGetAllFaq, actDellFaq }
)(index);
