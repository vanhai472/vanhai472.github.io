import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button, Popconfirm } from "antd";
import moment from "moment";
import ModalService from "./ModalService";
import { actDeleteServiceMaster } from "../../../redux/actions/master";
import { all } from "q";

const rederColumns = (onDeleteService, updateService) => [
  // {
  //   title: "STT",
  //   dataIndex: "STT",
  //   align: "center",
  //   width: "5%"
  // },
  // {
  //   title: "Tên",
  //   dataIndex: "name",
  //   render: (text, record) => (
  //     <div style={{ color: "#40a9ff", textTransform: "capitalize" }}>
  //       {record.service[0].name}
  //     </div>
  //   )
  // },
  // {
  //   title: "Loại",
  //   dataIndex: "type",
  //   render: (text, record) => (
  //     <div style={{ color: "#40a9ff", textTransform: "capitalize" }}>
  //       {record.service[0].type}
  //     </div>
  //   )
  // },
  // {
  //   title: "Giá",
  //   dataIndex: "prize",
  //   render: (text, record) =>
  //     new Intl.NumberFormat("vi-VN", {
  //       style: "currency",
  //       currency: "VND"
  //     }).format(record.price)
  // },
  // {
  //   title: "Ngày Tạo",
  //   dataIndex: "createdAt",
  //   filters: [
  //     { text: "Tăng", value: "1" },
  //     { text: "Giảm", value: "-1" }
  //   ],
  //   filterMultiple: false,
  //   render: (text, record) =>
  //     moment(record.service[0].createdAt).format("DD-MM-YYYY-h:mm:ss a")
  // },
  // {
  //   title: "Thao Tác",
  //   dataIndex: "action",
  //   render: (text, record) => (
  //     <span>
  //       <Button
  //         type="primary"
  //         ghost
  //         style={{ marginRight: 10 }}
  //         onClick={() => updateService(record)}
  //       >
  //         Sửa
  //       </Button>
  //       <Popconfirm
  //         placement="bottomLeft"
  //         title="Bạn có chắc chắn muốn xóa"
  //         onConfirm={() => onDeleteService(record)}
  //         okText="Có"
  //         cancelText="Không"
  //       >
  //         <Button type="danger" ghost>
  //           Xóa
  //         </Button>
  //       </Popconfirm>
  //     </span>
  //   )
  // }
];

class TabPaneService extends Component {
  state = {
    page: 1,
    isTableLoading: false,
    isModalVisible: false,
    selectedFees: {}
  };

  onShowModal = record => {
    this.setState({
      isModalVisible: true,
      selectedNotification: record
    });
  };

  onHideModal = record => {
    this.setState({
      isModalVisible: false,
      selectedNotification: record
    });
  };

  onShowModalCreate = () => {
    this.setState({
      isModalVisible: true,
      selectedFees: {}
    });
  };

  updateService = record => {
    this.setState({
      isModalVisible: true,
      selectedFees: record
    });
  };

  onDeleteService = record => {
    const { token, actDeleteServiceMaster, id, onGetMasterId } = this.props;
    actDeleteServiceMaster(
      token,
      {
        _id: id,
        service: record.service[0]._id
      },
      (err, res) => {
        if (!err) onGetMasterId();
      }
    );
  };

  render() {
    const { isModalVisible, selectedFees } = this.state;
    const { id, onGetMasterId } = this.props;
    const { fees } = this.props;
    const allData = [];
    fees &&
      fees.length > 0 &&
      fees.forEach((infor, index) => {
        allData.push({
          ...infor,
          STT: index + 1
        });
      });
      console.log(allData)
    return (
      <div>
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
              columns={rederColumns(this.onDeleteService, this.updateService)}
              dataSource={allData}
              onChange={this.onTableChange}
              size="middle"
            />
          </div>
        </div>
        <ModalService
          onHideModal={this.onHideModal}
          isModalVisible={isModalVisible}
          id={id}
          onGetMasterId={onGetMasterId}
          selectedFees={selectedFees}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    token: state.Auth.token
  }),
  { actDeleteServiceMaster }
)(TabPaneService);
