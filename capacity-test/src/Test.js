import React, { Component } from "react";
import { Skeleton } from "antd";
import "antd/dist/antd.css";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "./App.css";
import { Link } from "react-router-dom";

class Test extends Component {
  state = {
    loading: false,
    sortDataWidthNumber2: [],
    handleTab: 1,
  };
  componentDidMount = () => {
    const { data } = this.props;
    var length = data.length;
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        if (data[i].number2 < data[j].number2) {
          let b;
          b = data[i];
          data[i] = data[j];
          data[j] = b;
        }
      }
    }
    this.setState({ sortDataWidthNumber2: data });
    this.onLoading();
    return data;
  };
  onLoading = () => {
    this.setState({
      loading: true,
    });
    setTimeout(() => this.setState({ loading: false }), 500);
  };
  handleChangeTab = (value) => {
    this.setState({ handleTab: value });
    this.onLoading();
  };
  render() {
    const { loading, sortDataWidthNumber2, handleTab } = this.state;

    let firstData = sortDataWidthNumber2.map((value, i) => (
      <div key={i} className="wraper-data-item">
        <span>{++i}.</span>
        <li>{value.name}</li>
        <span className="li-number">
          <span className="img">
            {value.number2 - value.number1 > 0 ? (
              <ArrowUpOutlined style={{ color: "red" }} />
            ) : (
              <ArrowDownOutlined style={{ color: "blue" }} />
            )}
          </span>
          <span className="resultNumber">
            {Math.abs(value.number2 - value.number1)}
          </span>
        </span>
      </div>
    ));
    let firstDataSlice = firstData.slice(0, 10);
    let firstDataSliceSecond = firstData.slice(10, 20);

    return (
      <div className="wraper-content">
        <div className="wraper-title">
          <div>
            <span className="real-time">Real-time</span>
            <span className="searcher">Searches Rank</span>
          </div>
          <Link to="/">detail ></Link>
        </div>
        <div className="tab">
          <div
            className={`tab-item ${handleTab === 1 ? "active" : ""}`}
            onClick={() => this.handleChangeTab(1)}
          >
            1 ~ 10
          </div>
          <div
            className={`tab-item ${handleTab === 2 ? "active" : ""}`}
            onClick={() => this.handleChangeTab(2)}
          >
            11 ~ 20
          </div>
        </div>
        <div className="show-data">
          <Skeleton loading={loading}>
            <ol className="ol">
              {handleTab === 1 ? firstDataSlice : firstDataSliceSecond}
            </ol>
          </Skeleton>
        </div>
      </div>
    );
  }
}

export default Test;
