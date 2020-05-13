import React from "react";
import RestrictedRoute from "./RestrictedRoute";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Booking from "@Page/Booking";
import Payment from "@Page/Booking/payment";
import Pending from "@Page/Booking/pending";
import History from "@Page/Booking/history";
import Denied from "@Page/Booking/denied";
import Dashboard from "@Page/Dashboard";
import Withdrawal from "@Page/Dashboard/withdrawal";
import Deposite from "@Page/Deposite";
import Profile from "@Page/Profile";
import libraly from "@Page/Profile/libraly";
import Scheduling from "@Page/Profile/Scheduling";
import Favourite from "@Page/Favourite";

const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {isLoggedIn ? (
          <RestrictedRoute
            path={"/"}
            exact={true}
            component={Booking}
            isLoggedIn={isLoggedIn}
          />
        ) : (
          <Route exact={true} path={"/"} component={Booking} />
        )}
        <RestrictedRoute
          path={"/payment"}
          exact={true}
          component={Payment}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/pending"}
          exact={true}
          component={Pending}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/history"}
          exact={true}
          component={History}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/denied"}
          exact={true}
          component={Denied}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard"}
          exact={true}
          component={Dashboard}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/withdrawal"}
          exact={true}
          component={Withdrawal}
          isLoggedIn={isLoggedIn}
        />
        <RestrictedRoute
          path={"/deposite"}
          exact={true}
          component={Deposite}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/profile"}
          exact={true}
          component={Profile}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/photo-library"}
          component={libraly}
          isLoggedIn={isLoggedIn}
        />
        <RestrictedRoute
          path={"/meeting-scheduling"}
          component={Scheduling}
          isLoggedIn={isLoggedIn}
        />
        <RestrictedRoute
          path={"/favourite"}
          component={Favourite}
          isLoggedIn={isLoggedIn}
        />
      </Switch>
    </ConnectedRouter>
  );
};

export default connect((state) => ({
  isLoggedIn: state.Auth.loggedIn,
}))(PublicRoutes);
