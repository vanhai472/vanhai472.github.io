import React, { Component } from "react";
import Breadcrumb from "../../components/BreadBreadcrumb";
import { Table } from "antd";
class ManageSchedule extends Component {
  render() {
    return (
      <div>
        <Breadcrumb title={"Quản lý Booking"} />
        <Table />
      </div>
    );
  }
}

export default ManageSchedule;
