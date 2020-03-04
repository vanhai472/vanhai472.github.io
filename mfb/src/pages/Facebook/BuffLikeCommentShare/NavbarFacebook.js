import React from "react";
import { Card, Row, Col } from "antd";

class NavbarFacebook extends React.Component {
  render() {
    return (
      <>
        <div className="wrraperNavbarFaceebook"> 
          <Card style={{ borderRadius: 20 }}>
            <Row>
              <Col span={13}>
                <img className="image-user" src="/images/user.png" alt="" />
              </Col>
              <Col span={9} offset={2}>
                <p className="txtLabel">userName</p>
                <p className="txtLabel">Khách hàng</p>
                <p className="numberFacebook">0</p>
              </Col>
            </Row>
          </Card>
          <Card
            style={{ borderRadius: 20, marginTop: 30, background: "rgb(53, 120, 229)", color:"white" }}
          >
            <div>
              <h4 className="title-navbarFacebook">Hướng dẫn:</h4>
              <p className="styleText-NavbarFacebook ">
                - Để sử dụng hệ thống bên mình bạn cần đăng ký 1 tài khoản ở MFB
                .VN - Chú ý trỏ Domain về IP: 66.42.49.26 - Đăng ký miễn phí,
                không tốn bất cứ 1 chi phí nào, ko phí duy trì - Bạn xài bao
                nhiêu thì mua bấy nhiêu, không yêu cầu nạp tiền trước - Bạn chỉ
                cần trỏ IP tên miền của bạn về địa chỉ IP: 66.42.49.26 hệ thống
                sẽ tự động nhận tên miền và tạo site ctv riêng cho bạn, không
                cần hosting - Bạn vào site riêng bằng tên miền của bạn, chỉnh
                sửa các thông tin liên hệ và ngân hàng để khách của bạn chuyển
                khoản - Hàng tháng mfb sẽ có các đợt KM nạp tiền, thường vào đầu
                tháng, đại lý canh nạp lúc đó để đc ưu đãi nhiều nhất nhé - Cách
                làm việc giữa mfb và site đại lý (xem kỹ):
                https://www.youtube.com/watch?v=zEg7Qwk-wwo
              </p>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default NavbarFacebook;
