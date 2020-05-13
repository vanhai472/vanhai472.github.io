import React, { Component } from "react";
import Nav from "@Layout/Nav";
import { MasterPage } from "@Config/options";
import { Skeleton } from "antd";
import Siderbar from "./Siderbar";
import ContentCommentMaster from "./ContentCommentMaster";
import DashboardMasterWrapper, {
  DashboardMasterNav,
  DashboardMasterContentWraper,
  DashboardMasterContent,
} from "../Profile/styles";

class index extends Component {
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
    const { loading } = this.state;
    return (
      <div className="container">
        <div className="main">
          <div className="main-page">
            <DashboardMasterWrapper>
              <DashboardMasterNav>
                <Nav options={MasterPage} />
              </DashboardMasterNav>
              <DashboardMasterContentWraper>
                <Siderbar />
                <DashboardMasterContent>
                  <Skeleton loading={loading} active={loading}></Skeleton>
                  <Skeleton loading={loading} active={loading}></Skeleton>
                  <Skeleton loading={loading} active={loading}></Skeleton>
                  <Skeleton loading={loading} active={loading}>
                    <ContentCommentMaster />
                  </Skeleton>
                </DashboardMasterContent>
              </DashboardMasterContentWraper>
            </DashboardMasterWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
