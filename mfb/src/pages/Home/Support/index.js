import React from "react";
import { Row, Col } from "antd";
import ScrewMoney from "../ScrewMoney";
import Social from "./Social";

class SupportPage extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col span={18}>
            <Social />
          </Col>
          <Col span={6}>
            <ScrewMoney />
          </Col>
        </Row>
      </>
    );
  }
}

export default SupportPage;
