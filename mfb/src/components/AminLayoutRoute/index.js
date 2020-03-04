import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import axiosService from "../../services/axiosService";
import { AUTHORIZATION_KEY } from "../../constants/index";
import Dashboard from "../Dashboard";
class AdminLayoutRoute extends React.Component {
  componentWillMount() {
    const token = localStorage.getItem(AUTHORIZATION_KEY);
    if (token) {
      axiosService.setHeader("Authorization", `Bearer ${token}`);
    }
  }
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    const token = localStorage.getItem(AUTHORIZATION_KEY);
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return token ? (
            <Dashboard>
              <YourComponent {...routeProps} />
            </Dashboard>
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  }
}

export default withRouter(AdminLayoutRoute);
