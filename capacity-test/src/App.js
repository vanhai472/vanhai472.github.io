import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { data } from "./data";
import Test from "./Test";

class App extends Component {
  render() {
    var today = new Date();
    let month =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;

    let toDate = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();

    var date = today.getFullYear() + "." + month + "." + toDate;

    let hours =
      today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
    let minutes =
      today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
    let seconds =
      today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();

    var time = hours + ":" + minutes + ":" + seconds;

    var dateTime = date + " . " + time;
    return (
      <div className="App">
        <Test data={data} />
        <div className="show-date">{dateTime}</div>
      </div>
    );
  }
}

export default App;
