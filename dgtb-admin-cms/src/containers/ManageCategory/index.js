import React, { Component } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../components/BreadBreadcrumb";
import { Table, Popconfirm, Button, Input, Icon } from "antd";
import {
  actGetAllCategory,
  actDellCategory
} from "../../redux/actions/category";
import "antd/dist/antd.css";
import moment from "moment";
import _ from "lodash";
import ModalCategory from "./components/ModalCategory";

const quantity = 10;
const rederColumns = (onDelCategory, onShowModal, getColumnSearchProps) => [
  {
    title: "STT",
    dataIndex: "STT",
    align: "center",
    width: "5%"
  },
  {
    title: "Người Tạo",
    dataIndex: "name",
    render: (text, record) => record.admin[0].name
  },
  {
    title: "Tên Danh Mục",
    dataIndex: "nameCategory",
    render: (text, record) => {
      if (record.parent.length === 0) return record.parentName;
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
          onClick={() => onShowModal(record)}
        >
          Sửa
        </Button>
        <Popconfirm
          placement="bottomLeft"
          title="Bạn có chắc chắn muốn xóa"
          onConfirm={() => onDelCategory(record._id)}
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

class ManageCategory extends Component {
  state = {
    page: 1,
    isTableLoading: false,
    isModalVisible: false,
    filters: {},
    selectedCategory: {}
  };

  // gọi hàm thực hiện việc load dữ liệu từ server về
  componentDidMount() {
    this.onGetAllCategory();
  }

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
        } else this.onGetAllCategory();
      }
    );
  };

  onGetAllCategory = () => {
    const { token, actGetAllCategory } = this.props;
    const { page } = this.state;
    this.setState({
      isTableLoading: true
    });
    actGetAllCategory(token, page, quantity, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
    });
  };

  onDelCategory = categoryId => {
    const { token, actDellCategory } = this.props;
    this.setState({
      isTableLoading: true
    });
    actDellCategory(token, categoryId, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
      this.onGetAllCategory();
    });
  };

  onShowModal = record => {
    this.setState({
      isModalVisible: true,
      selectedCategory: record
    });
  };

  onHideModal = () => {
    this.setState({
      isModalVisible: false,
      selectedCategory: {}
    });
  };

  onShowModalCreate = () => {
    this.setState({
      isModalVisible: true,
      selectedCategory: {}
    });
  };

  render() {
    const { isTableLoading, isModalVisible, selectedCategory } = this.state;
    const { allCategory, totalData } = this.props;
    const CategoryData = [];
    allCategory &&
      allCategory.length > 0 &&
      allCategory.forEach((infor, index) => {
        CategoryData.push({
          ...infor,
          STT: index + 1
        });
      });

    return (
      <div>
        <Breadcrumb title={"Danh sách danh mục"} />
        <div className=" hasTable">
          <div className="add-button">
            <Button
              type="primary"
              shape="round"
              icon="plus"
              onClick={this.onShowModalCreate}
            >
              Tạo mới
            </Button>
          </div>
          <div className="page-header-wrap-children-content">
            <Table
              rowKey={record => record._id}
              columns={rederColumns(
                this.onDelCategory,
                this.onShowModal,
                this.getColumnSearchProps
              )}
              dataSource={CategoryData}
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
        <ModalCategory
          onHideModal={this.onHideModal}
          isModalVisible={isModalVisible}
          onGetAllCategory={this.onGetAllCategory}
          selectedCategory={selectedCategory}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    token: state.Auth.token,
    allCategory: state.Category.allCategory,
    totalPage: state.Category.totalPage,
    totalData: state.Category.totalData
  }),
  { actGetAllCategory, actDellCategory }
)(ManageCategory);
