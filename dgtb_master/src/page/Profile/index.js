import React, { Component } from "react";
import Nav from "@Layout/Nav";
import { MasterPage } from "@Config/options";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";
import Siderbar from "./siderbar";

import DashboardMasterWrapper, {
  DashboardMasterNav,
  DashboardMasterContentWraper,
  DashboardMasterContent,
} from "./styles";

import ProfileMasterContainer from "@Container/ProfileContainer";

class index extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.onLoading();
  }

  onLoading = () => {
    this.setState({
      loading: false,
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
                    <ProfileMasterContainer />
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
