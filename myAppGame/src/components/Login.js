import React from "react";
import { Carousel, Button } from "antd";
import "./show.scss";

const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true
};

class Login extends React.Component {
  handleFunctionContinue = () => {
    this.props.history.push("/newGame");
  };

  render() {
    return (
      <>
        <Carousel className="wraper-login" autoplay>
          <div className="owl-login1"></div>
          <div className="owl-login2"></div>
        </Carousel>
        <div className="wraper-content-login">
        <div className="wraper-item">
          <div className="xGame">
            <h1 className="color-h1">
              CLOU <span className="color-span">XGAME</span>
            </h1>
          </div>
          <div className="stem">
            <p className="cacrees">PUBG CAREERS</p>
          </div>

          <div>
            <h2 className="egypt">DROP IN. LEVEL UP.</h2>
            <p className="text-item">
              At our core, we are gamers dedicated to developing the greatest
              Battle Royale experience ever. Collaboration, hard work, and
              creativity is what drives our team to glory. We work together
              between seven locations spanning three continents. Our success
              comes from our unique and diverse team, united by our refusal to
              settle for nothing less than a chicken dinner feast.
            </p>
            <p className="drop">Are you ready to drop in?</p>
          </div>
          <Button
            onClick={this.handleFunctionContinue}
            className="btn-continue"
            type="primary"
          >
            Continue
          </Button>
        </div>
        </div>
      </>
    );
  }
}
export default Login;
