import React, { Component } from "react";
import Breadcrumb from "../../components/BreadBreadcrumb";
import { Table } from "antd";
class ManagePaymentmethod extends Component {
  render() {
    return (
      <div>
        <Breadcrumb title={"Danh sách thanh toán"} />
        <Table />
      </div>
    );
  }
}

export default ManagePaymentmethod;
