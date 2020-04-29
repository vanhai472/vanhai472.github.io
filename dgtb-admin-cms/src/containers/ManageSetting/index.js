import React, { Component } from "react";
import Breadcrumb from "../../components/BreadBreadcrumb";
import { Table } from "antd";
class ManageSetting extends Component {
  render() {
    return (
      <div>
        <Breadcrumb title={"Danh sách cài đặt"} />
        <Table />
      </div>
    );
  }
}

export default ManageSetting;
