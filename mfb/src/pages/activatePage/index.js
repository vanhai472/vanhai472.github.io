import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Table, Card } from "antd";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import queryString from "query-string";
import { columns } from "./columns";
import * as userAction from "../../actions/user";
import { AUTHORIZATION_KEY, INDEX_PAGE_SIZE_DEFAULT } from "../../constants";
import "./index.scss";

class historyPage extends Component {
  state = {
    token: localStorage.getItem(AUTHORIZATION_KEY),
    pagination: {},
    currentpage: 1,
    pageSize: INDEX_PAGE_SIZE_DEFAULT
  };
  componentDidMount() {
    const { token, pageSize, currentpage } = this.state;
    const params = {
      token,
      pageSize,
      currentpage
    };
    const paramUrl = queryString.parse(this.props.location.search);
    if (paramUrl && paramUrl?.seeding === "buff-seeding-sub-order") {
      params.type = "follow";
    }
    if (paramUrl && paramUrl?.seeding === "buff-seeding-like-fanpage-order") {
      params.type = "lige_page";
    }
    if (
      (paramUrl && paramUrl?.seeding === "buff-seeding-like-instagram-order") ||
      (paramUrl && paramUrl?.seeding === "buff-seeding-sub-instagram-order")
    ) {
      params.provider = "instagram";
    }
    const { userAction } = this.props;
    const { getUserActivity } = userAction;
    if (getUserActivity) {
      getUserActivity(params);
    }
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    const { token } = this.state;
    this.setState({
      pagination: pager
    });
    const { userAction } = this.props;
    const { getUserActivity } = userAction;
    if (getUserActivity) {
      const params = {
        token,
        pageSize: pagination.pageSize,
        currentpage: pagination.current
      };
      getUserActivity(params);
    }
  };

  render() {
    const { dataUserActivity, isloading } = this.props;
    const pagination = { ...this.state.pagination };
    pagination.total = dataUserActivity.total;
    pagination.defaultPageSize = INDEX_PAGE_SIZE_DEFAULT;
    pagination.className = "center";
    return (
      <Card hoverable bordered bodyStyle={{ margin: "10px 0" }}>
        <Table
          className="table-body"
          rowKey={record => record.orders_id}
          loading={isloading}
          dataSource={dataUserActivity?.data ? dataUserActivity?.data : []}
          columns={columns}
          pagination={pagination}
          bordered
          scroll={{ x: 1024 }}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  isloading: state.ui.showLoading,
  dataUserActivity: state.user.dataUserActivity
});

const mapDispatchToProps = dispatch => ({
  userAction: bindActionCreators(userAction, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(withRouter(historyPage));
