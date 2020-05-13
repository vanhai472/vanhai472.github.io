import React, { Component } from "react";
import Wraper, { Alarm, Hous, Minutes, SelectAlarm, Conteiner } from "./styles";
import { Button } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

class index extends Component {
  state = {
    firstHous: 0,
    lastHous: 0,
    FirstMinute: 0,
    lastMinute: 0,
  };

  handleSteteOneUp = () => {
    const { firstHous } = this.state;
    this.setState({ firstHous: firstHous + 1 });
    if (firstHous >= 24) {
      this.setState({ firstHous: 0 });
    }
  };
  handleSteteOneDow = () => {
    const { firstHous } = this.state;
    this.setState({ firstHous: firstHous - 1 });
    if (firstHous <= 0) {
      this.setState({ firstHous: 24 });
    }
  };
  handleSteteTwoUp = () => {
    const { FirstMinute } = this.state;
    this.setState({ FirstMinute: FirstMinute + 1 });
    if (FirstMinute >= 60) {
      this.setState({ FirstMinute: 0 });
    }
  };
  handleSteteTwoDow = () => {
    const { FirstMinute } = this.state;
    this.setState({ FirstMinute: FirstMinute - 1 });
    if (FirstMinute <= 0) {
      this.setState({ FirstMinute: 60 });
    }
  };
  handleSteteThrreUp = () => {
    const { lastHous } = this.state;
    this.setState({ lastHous: lastHous + 1 });
    if (lastHous >= 24) {
      this.setState({ lastHous: 0 });
    }
  };
  handleSteteThrreDow = () => {
    const { lastHous } = this.state;
    this.setState({ lastHous: lastHous - 1 });
    if (lastHous <= 0) {
      this.setState({ lastHous: 24 });
    }
  };
  handleSteteForUp = () => {
    const { lastMinute } = this.state;
    this.setState({ lastMinute: lastMinute + 1 });
    if (lastMinute >= 60) {
      this.setState({ lastMinute: 0 });
    }
  };
  handleSteteForDow = () => {
    const { lastMinute } = this.state;
    this.setState({ lastMinute: lastMinute - 1 });
    if (lastMinute <= 0) {
      this.setState({ lastMinute: 60 });
    }
  };
  render() {
    const { firstHous, lastHous, FirstMinute, lastMinute } = this.state;
    return (
      <Wraper>
        <h2>Thời gian làm việc</h2>
        <Conteiner>
          <div style={{ display: "flex" }}>
            <Alarm>
              <Hous>
                <h4>Từ</h4>
                <SelectAlarm>
                  <div>
                    <Button className="button" onClick={this.handleSteteOneUp}>
                      <UpOutlined />
                    </Button>
                    <div className="showTimeAlarm">
                      <p>{firstHous < 10 ? "0" + firstHous : firstHous}</p>
                    </div>
                    <Button className="button" onClick={this.handleSteteOneDow}>
                      <DownOutlined />
                    </Button>
                  </div>
                  <p className="time">Giờ</p>
                </SelectAlarm>
                <Minutes>
                  <div>
                    <Button className="button" onClick={this.handleSteteTwoUp}>
                      <UpOutlined />
                    </Button>
                    <div className="showTimeAlarm">
                      <p>
                        {FirstMinute < 10 ? "0" + FirstMinute : FirstMinute}
                      </p>
                    </div>
                    <Button className="button" onClick={this.handleSteteTwoDow}>
                      <DownOutlined />
                    </Button>
                  </div>
                  <p className="time">Phút</p>
                </Minutes>
              </Hous>
            </Alarm>

            <Alarm>
              <Hous>
                <h4>Đến</h4>
                <SelectAlarm>
                  <div>
                    <Button
                      className="button"
                      onClick={this.handleSteteThrreUp}
                    >
                      <UpOutlined />
                    </Button>
                    <div className="showTimeAlarm">
                      <p>{lastHous < 10 ? "0" + lastHous : lastHous}</p>
                    </div>
                    <Button
                      className="button"
                      onClick={this.handleSteteThrreDow}
                    >
                      <DownOutlined />
                    </Button>
                  </div>
                  <p className="time">Giờ</p>
                </SelectAlarm>
                <Minutes>
                  <div>
                    <Button className="button" onClick={this.handleSteteForUp}>
                      <UpOutlined />
                    </Button>
                    <div className="showTimeAlarm">
                      <p>{lastMinute < 10 ? "0" + lastMinute : lastMinute}</p>
                    </div>
                    <Button className="button" onClick={this.handleSteteForDow}>
                      <DownOutlined />
                    </Button>
                  </div>
                  <p className="time">Phút</p>
                </Minutes>
              </Hous>
            </Alarm>
          </div>
        </Conteiner>
      </Wraper>
    );
  }
}

export default index;
