import React from "react";
import { Card } from "antd";
import "../index.scss";
class Social extends React.Component {
  render() {
    return (
      <Card className="wrapercard-social">
            <h2 className="contact">Liên hệ hỗ trợ</h2>

        <div>
          <p className="title-imageSocial">Liên hệ qua Telegram</p>
          <a href="/#">
            <img
              className="image-social"
              src="/images/telegram.png"
              alt="telegram"
            />
          </a>
        </div>
        <div>
          <p className="title-imageSocial zalo">Liên hệ qua Zalo</p>
          <a href="/#">
            <img
              className="image-social"
              src="/images/zalo.jpg"
              alt="telegram"
            />
          </a>
        </div>
      </Card>
    );
  }
}

export default Social;
