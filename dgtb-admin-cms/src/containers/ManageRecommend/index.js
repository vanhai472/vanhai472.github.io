import React, { Component } from "react";
import Breadcrumb from "../../components/BreadBreadcrumb";
import { Table } from "antd";
class ManageRecommend extends Component {
  render() {
    return (
      <div>
        <Breadcrumb title={"Danh sách giới thiệu"} />
        <Table />
      </div>
    );
  }
}

export default ManageRecommend;
