import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import AdminLayoutRoute from "../../components/AminLayoutRoute";
import DefaultLayoutRoute from "../../components/DefaultLayoutRouter";
import { ROUTES, ADMIN_ROUTES } from "../../constants";
import configureStore, { history } from "../../redux/configureStore";
import NotFoundPage from "../../pages/Login/notFound";

const store = configureStore();
class App extends Component {
  renderAdminRoutes() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map(route => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  }

  renderDefaultRoutes() {
    let xhtml = null;
    xhtml = ROUTES.map((item, index) => {
      return (
        <DefaultLayoutRoute
          component={item.component}
          exact={item.exact}
          key={index}
          path={item.path}
        />
      );
    });
    return xhtml;
  }

  renderRoutes() {
    let xhtml = null;
    xhtml = (
      <Switch>
        {this.renderAdminRoutes()}
        {this.renderDefaultRoutes()}
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    );
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <ConnectedRouter history={history}>
            {this.renderRoutes()}
          </ConnectedRouter>
        </Router>
      </Provider>
    );
  }
}

export default App;
