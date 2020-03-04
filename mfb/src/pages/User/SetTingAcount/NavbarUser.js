import React from "react";
import { Card, Button } from "antd";
const { Meta } = Card;

class NavbarUser extends React.Component {
  render() {
    return (
      <>
        <div className="wrraperNavbarFaceebook">
          <Card style={{ borderRadius: 20, background: "rgb(53, 120, 229)" }}>
            <Card style={{ width: "100%", marginTop: 16 }}>
              <Meta
                avatar={
                  <img className="image-user" src="/images/user.png" alt="" />
                }
                title={<p className="txtLabel">Khách hàng</p>}
                description={
                  <div>
                    <p className="txtLabel">userName</p>
                    <p className="numberFacebook">0</p>
                  </div>
                }
              />
            </Card>
            <div className=" colorWhite">
              <p>Email :</p>
              <p>Phone :</p>
            </div>
            <hr />
            <div className=" colorWhite">
              <h4 className="styleP  colorWhite">Kết nối tài khoản Facebook</h4>
              <p className="styleP">
                Bạn có thể kết nối với tài khoản Facebook để
              </p>
              <p className="styleP">nhận thông báo trực tiếp về Facebook</p>
              <p className="styleP">
                Messenger, và nhiều tính năng đặc biệt khác
              </p>
            </div>
            <Button
              className="pagination"
              style={{
                width: "100%",
                borderRadius: 30,
                height: 50,
                fontSize: 20,
                margin: "10px 0px 10px 0px",
                color: "white"
              }}
            >
              Kết nối ngay
            </Button>
          </Card>
        </div>
      </>
    );
  }
}

export default NavbarUser;
