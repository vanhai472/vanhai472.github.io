import React, { Component } from "react";
import { Link } from "react-router-dom";
import FooterLayout from "./styles/footer";
class Footer extends Component {
    render() {
        return (
            <FooterLayout>
                <div className="footer-main">
                    <div className="footer-header">
                        <div className="footer-logo">
                            <div className="logo">
                                <Link to="/">
                                    <h1>Thầy bói.vn</h1>
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
                                            <Link to="/">Trang chủ</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Khám phá</Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                Danh sách đặt lịch
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span> Danh Mục</span>
                                    <ul>
                                        <li>
                                            <Link to="#">Bói Toán</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Tử Vi</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Phong Thủy</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Danh sách Thầy</span>
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                Được đánh giá nhiều
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                Được đánh giá tốt
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">Thầy nổi bật</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Thầy mới</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Khu vực</span>
                                    <ul>
                                        <li>
                                            <Link to="#">Hà Nội</Link>
                                        </li>
                                        <li>
                                            <Link to="#">TP.HCM</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Đà Nẵng</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Hải Phòng</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Theo dõi chúng tôi</span>
                                    <ul>
                                        <li>
                                            <Link to="#">Facebook</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Youtube</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Twitter</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Zalo</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Tải ứng dụng</span>
                                    <ul className="download">
                                        <li>
                                            <img
                                                src="/image/footer/google.png"
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="/image/footer/store.png"
                                                alt=""
                                            />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-end">
                        <div className="footer-info">
                            <div>
                                © 2020 Công ty Cổ phần Khoa Học Máy Tính MCD
                            </div>
                            <div>
                                Địa chỉ: 85/02 Ha Dinh, Thanh Xuan Trung Ward,
                                Thanh Xuan District, Hanoi, Vietnam
                            </div>
                            <div>SĐT: 0804973965</div>
                        </div>
                    </div>
                </div>
            </FooterLayout>
        );
    }
}

export default Footer;
