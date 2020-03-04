import React from "react";
import { Row, Col, Card, Tabs } from "antd";
import Navbar from "../../PageReport/Navbar";
import "./index.scss";
import BodyPageReport from "../../../components/UserAll/BodyHome";
import RechargePage from "../../User/RechargeUser";
import ReportPage from "../Report";
import RefundLogsPage from "../RefundLogs";
import ApiManagerPage from "../ApiManager";
import Social from "../Support/Social";

const { TabPane } = Tabs;
const width = window.innerWidth;

class HomeReport extends React.Component {
  render() {
    return (
      <Row gutter={20}>
        <Col md={24} xl={18}>
          <Tabs tabPosition={width <= 768 ? "top" : "left"} animated>
            <TabPane tab={<h4 className="title-pane ">Trang chủ</h4>} key="1">
              <Card
                title={<h3>Báo cáo</h3>}
                hoverable
                bordered
                style={{ borderRadius: 20 }}
                bodyStyle={{ paddingTop: "5px", padding: "20px" }}
              >
                <BodyPageReport />
              </Card>
            </TabPane>
            <TabPane tab={<h4 className="title-pane ">Nạp tiền</h4>} key="2">
              <RechargePage />
            </TabPane>
            {/* <TabPane tab={<h4 className="title-pane ">Báo cáo</h4>} key="3">
              <ReportPage />
            </TabPane> */}
            {/* <TabPane
              tab={<h4 className="title-pane ">Lịch sử hoàn tiền</h4>}
              key="4"
            >
              <RefundLogsPage />
            </TabPane> */}
            {/* <TabPane
              tab={<h4 className="title-pane ">Tích hợp Site đại lý</h4>}
              key="5"
            >
              <ApiManagerPage />
            </TabPane> */}
            {/* <TabPane
              tab={<h4 className="title-pane ">liên hệ hỗ trợ</h4>}
              key="6"
            >
              <Social />
            </TabPane> */}
          </Tabs>
        </Col>
        <Col md={24} xl={6}>
          <Navbar />
        </Col>
      </Row>
    );
  }
}

export default HomeReport;
