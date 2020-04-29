import React, { Component } from "react";
import { Breadcrumb, Menu, List, Avatar, Popconfirm } from "antd";
import { connect } from "react-redux";
import { actGetCommentWithIdRate } from "../../../redux/actions/rates";

import { actDellComment } from "../../../redux/actions/comments";

const quantity = 10;

class SeeRating extends Component {
  state = {
    page: 1,
    loading: false,
    data: []
  };

  componentDidMount() {
    this.onGetRatingId();
  }

  onGetRatingId = () => {
    this.setState({
      loading: true
    });
    let { id } = this.props.match.params;
    if (id) {
      const { page } = this.state;
      const { token, actGetCommentWithIdRate } = this.props;
      actGetCommentWithIdRate(token, page, quantity, id, (err, res) => {
        res &&
          this.setState({
            loading: false
          });
        this.setState({
          data: res.data.comments
        });
      });
    }
  };

  menu = () => {
    return (
      <Menu>
        {this.props.location.state.map((value, index) => (
          <Menu.Item key={index}>
            <span style={{ textTransform: "capitalize" }}>{value.name}</span>
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  detelteComment = id => {
    this.setState({
      loading: true
    });
    const { actDellComment, token } = this.props;
    actDellComment(token, id, (err, res) => {
      if (!err) {
        this.setState({
          loading: false
        });
        this.onGetRatingId();
      }
    });
  };

  render() {
    const { seletedCommentWithIdRate } = this.props;
    console.log(seletedCommentWithIdRate);
    const { loading, data } = this.state;
    return (
      <div className="grid-content">
        <Breadcrumb>
          <Breadcrumb.Item href="/dashboard/rating">Đánh Giá</Breadcrumb.Item>
          <Breadcrumb.Item overlay={this.menu()}>
            <span style={{ textTransform: "capitalize" }}>
              {this.props.location.state[0].name}
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className=" hasTable">
          <div className="page-header-wrap-children-content">
            <List
              loading={loading}
              bordered={true}
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item
                  actions={[
                    <Popconfirm
                      onConfirm={() => this.detelteComment(item._id)}
                      okText="Có"
                      cancelText="Không"
                      placement="bottomLeft"
                      title="Bạn có chắc chắn muốn xóa"
                    >
                      <span style={{ color: "#1890ff" }}>Xóa</span>
                    </Popconfirm>
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={
                      <span style={{ color: "#1890ff" }}>
                        Ant Design Title 1
                      </span>
                    }
                    description={item.content}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    token: state.Auth.token,
    seletedCommentWithIdRate: state.Rates.seletedCommentWithIdRate
  }),
  { actGetCommentWithIdRate, actDellComment }
)(SeeRating);
