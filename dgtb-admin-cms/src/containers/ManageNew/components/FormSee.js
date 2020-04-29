import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetNewWithId } from "../../../redux/actions/news";
import { Breadcrumb, Icon } from "antd";
import "./New.scss";
class FormSee extends Component {
  componentDidMount() {
    this.onGetFAQId();
  }

  onGetFAQId = () => {
    let { id } = this.props.match.params;
    if (id) {
      const { token, actGetNewWithId } = this.props;
      actGetNewWithId(token, id);
    }
  };

  render() {
    const { selectedSingleNews } = this.props;
    let { id } = this.props.match.params;
    return (
      <div className="grid-content">
        <Breadcrumb separator=">" className="breadcrumbs">
          <Breadcrumb.Item href="/dashboard/news">
            <Icon type="home" className="icon-home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>Tin Tức</Breadcrumb.Item>
        </Breadcrumb>
        <div className="details">
          <h1>{id && selectedSingleNews ? selectedSingleNews.title : ""}</h1>

          <div
            dangerouslySetInnerHTML={{
              __html: id && selectedSingleNews ? selectedSingleNews.content : ""
            }}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    token: state.Auth.token,
    selectedSingleNews: state.news.selectedSingleNews
  }),
  { actGetNewWithId }
)(FormSee);
