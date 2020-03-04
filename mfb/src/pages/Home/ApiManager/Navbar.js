import React from "react";
import { Card } from "antd";
class NavbarIpiPage extends React.Component {
  render() {
    return (
      <>
        <div className="wrraper-ScrewMoney">
          <Card
            style={{ borderRadius: 20, marginTop: 30, background: "#FEE9B2" }}
          >
            <div>
              <h4 className="styleP">Hướng dẫn:</h4>
              <p className="styleP">
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

export default NavbarIpiPage;
