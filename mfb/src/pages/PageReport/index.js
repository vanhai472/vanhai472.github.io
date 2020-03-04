import React from "react";
import { Row, Col } from "antd";
import Navbar from "./Navbar";
// import "./index.scss";
import BodyPageReport from "../../components/UserAll/BodyHome";

class PageReport extends React.Component {
  render() {
    return (
      <Row gutter={20}>
        <Col xl={18} md={24}>
          <BodyPageReport />
        </Col>
        <Col xl={6} md={24}>
          <Navbar />
        </Col>
      </Row>
    );
  }
}

export default PageReport;
