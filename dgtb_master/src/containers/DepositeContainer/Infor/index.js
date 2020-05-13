import React, { Component } from "react";
import { Checkbox, Button } from "antd";
import _ from "lodash";
import { connect } from "react-redux";
import { Skeleton } from "antd";

import DepositeInforWrapper, {
    DepositeInforAccount,
    DepositeInforContent,
    DepositeInforCardInfor,
    DepositeInforCardInforUser,
    CardInforUserItem,
    CardInforUserItemGroup,
    Input,
} from "./styles";

class DepositeInfor extends Component {
    state = {
        loading: false,
    };

    componentDidMount() {
        this.onLoading();
    }

    onLoading = () => {
        this.setState({
            loading: true,
        });
        setTimeout(() => this.setState({ loading: false }), 1000);
    };

    render() {
        const { view } = this.props;
        const { loading } = this.state;
        return (
            <DepositeInforWrapper>
                <DepositeInforAccount>
                    <Skeleton loading={loading} active={loading}>
                        <div className="text">Số dư tài khoản</div>
                        <div className="current">20.000.000 VND</div>
                        <div className="infor">Nhập số tiền cần rút</div>
                        <Input defaultValue="3.000.000 VND" />
                    </Skeleton>
                </DepositeInforAccount>
                <DepositeInforContent>
                    <Skeleton loading={loading} active={loading}></Skeleton>
                    <Skeleton loading={loading} active={loading}>
                        <DepositeInforCardInfor>
                            <div className="text">
                                {view === "MobileView"
                                    ? _.truncate(
                                          "BIDV - NH DAU TU VA PHAT TRIEN VIET NAM",
                                          {
                                              length: 17,
                                          }
                                      )
                                    : "BIDV - NH DAU TU VA PHAT TRIEN VIET NAM"}
                            </div>
                            <div className="text">Chi nhánh Hà Nội</div>
                            <div className="text">482028975973</div>
                            <div className="text name-user">
                                Trương Ngọc Ánh
                            </div>
                            <Button
                                className="sign-white"
                                style={{ width: 120 }}
                            >
                                Xóa tài khoản
                            </Button>
                        </DepositeInforCardInfor>

                        <DepositeInforCardInforUser>
                            <CardInforUserItem>
                                <div className="infor">Tên chủ tài khoản</div>
                                <Input defaultValue="Tú Anh" />
                            </CardInforUserItem>

                            <CardInforUserItem>
                                <div className="infor">Số tài khoản</div>
                                <Input defaultValue="42905780296803" />
                            </CardInforUserItem>

                            <CardInforUserItemGroup>
                                <CardInforUserItem>
                                    <div className="infor">Ngân hàng</div>
                                    <Input defaultValue="Techcombank" />
                                </CardInforUserItem>

                                <CardInforUserItem>
                                    <div className="infor">Chi nhánh</div>
                                    <Input defaultValue="Hà Nội" />
                                </CardInforUserItem>
                            </CardInforUserItemGroup>

                            <Checkbox className="check">Lưu tài khoản</Checkbox>
                        </DepositeInforCardInforUser>
                    </Skeleton>
                </DepositeInforContent>
            </DepositeInforWrapper>
        );
    }
}

export default connect((state) => ({
    view: state.App.view,
}))(DepositeInfor);
