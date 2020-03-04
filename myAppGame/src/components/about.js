import React from "react";
import { Layout, Col, Card, Button, Row, Icon } from "antd";
import { Link } from "react-router-dom";
import { games } from "./data.js";
import Header from "./Header";
import "./show.scss";

const { Meta } = Card;
const { Footer } = Layout;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentDidMount = () => {
    setTimeout(() => this.setState({ loading: false }), 200);
  };
  renderShow = () => {
    let html = null;
    html = games.map((game, index) => {
      return (
        <Col span={12} offset="6">
          <Card style={{ marginTop: 16 }} key={index}>
            <Meta
              avatar={<img src={game.image} alt="Pubg" />}
              title={game.name}
              description={game.description}
              date={game.date}
            />
            <Link className="detail" to={`/detail/${game.id}`}>
              <Button type="danger">Xem chi tiết</Button>
            </Link>
          </Card>
        </Col>
      );
    });
    return html;
  };
  render() {
    if (this.state.loading) {
      return (
        <div>
          <Header />
          <Icon className="icon-loading" type="sync" spin />
        </div>
      );
      }
    return (
      <div className="wrapper-page">
        <Header />
        <Row>{this.renderShow()}</Row>
        <Footer style={{ textAlign: "center" }}>Library Game</Footer>
      </div>
    );
  }
}

export default About;
