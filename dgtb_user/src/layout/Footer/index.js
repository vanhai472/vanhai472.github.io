import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import FooterLayout from "./styles/footer";
class Footer extends Component {
  render() {
    const { view } = this.props;
    return (
      <FooterLayout>
        <div className="footer-main">
          <div className="footer-header">
            <div className="footer-logo">
              <div className="logo">
                <Link href="/">
                  <a>
                    <h1>Thầy bói.vn</h1>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-info">
              <ul className="box-content">
                <li>
                  <span>ThayBoi.vn</span>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Trang chủ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Khám phá</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Danh sách đặt lịch</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <span> Danh Mục</span>
                  <ul>
                    <li>
                      <Link href="#">
                        <a>Bói Toán</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Tử Vi</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Phong Thủy</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Danh sách Thầy</span>
                  <ul>
                    <li>
                      <Link href="#">
                        <a>Được đánh giá nhiều</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Được đánh giá tốt</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Thầy nổi bật</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Thầy mới</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Khu vực</span>
                  <ul>
                    <li>
                      <Link href="#">
                        <a>Hà Nội</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>TP.HCM</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Đà Nẵng</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Hải Phòng</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Theo dõi chúng tôi</span>
                  <ul>
                    <li>
                      <Link href="#">
                        <a>Facebook</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Youtube</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Twitter</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Zalo</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Tải ứng dụng</span>
                  <ul className="download">
                    <li>
                      <img src="/image/footer/google.png" alt="" />
                    </li>
                    <li>
                      <img src="/image/footer/store.png" alt="" />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-end">
            <div className="footer-info">
              <div>© 2020 Công ty Cổ phần Khoa Học Máy Tính MCD</div>
              <div>
                Địa chỉ: 85/02 Ha Dinh, Thanh Xuan Trung Ward, Thanh Xuan
                District, Hanoi, Vietnam
              </div>
              <div>SĐT: 0804973965</div>
            </div>
          </div>
        </div>
      </FooterLayout>
    );
  }
}

export default connect((state) => ({
  view: state.App.view,
}))(Footer);
