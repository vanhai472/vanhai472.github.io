import React, { Component } from "react";
import Breadcrumb from "../../components/BreadBreadcrumb";
import { Table } from "antd";

class ManageCoupon extends Component {
  render() {
    return (
      <div>
        <Breadcrumb title={"Danh sách khuyến mại"} />
        <Table />
      </div>
    );
  }
}

export default ManageCoupon;
