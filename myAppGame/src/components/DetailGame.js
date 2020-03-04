import React from "react";
import { Row, Col, Card, Result, Icon, Button } from "antd";
import Header from "./Header";
import { games } from "./data.js";
import "./show.scss";

class DetailGame extends React.Component {
 
  render() {
    const { id } = this.props.match.params;
    const data = games.filter(el => el.id === id);
    console.log("datas", data);
    if (!data) {
      return (
        <Result
          icon={<Icon type="borrow" theme="twoTone" />}
          title="Great, we have done all the operations!"
          extra={<Button type="primary">Next</Button>}
        />
      );
    }
    return (
      <>
        <Header />
        <div className="wrapper-content">
          <Row>
            <Col span={12} offset={6}>
              <Card>
                <h1 className="detail-title">{data[0].name}</h1>
                <p className="text-detail">{data[0].description}</p>
                <img className="image-detail" src={data[0].imageDetail} alt="imageItem" />
                <p className="text-detail">{data[0].content}</p>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default DetailGame;
