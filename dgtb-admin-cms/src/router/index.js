import React from "react";
import RestrictedRoute from "./RestrictedRoute";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import Sigin from "../containers/Page/Signin";
import User from "../containers/ManageUser";
import Master from "../containers/ManageMaster";
import New from "../containers/ManageNew";
import Complaint from "../containers/ManageComplaint";
import Rating from "../containers/ManageRating";
import FAQ from "../containers/ManageFAQ";
import Category from "../containers/ManageCategory";
import Schedule from "../containers/ManageSchedule";
import Recommend from "../containers/ManageRecommend";
import Coupon from "../containers/ManageCoupon";
import Notification from "../containers/ManageNotification";
import Paymentmethod from "../containers/ManagePaymentmethod";
import Setting from "../containers/ManageSetting";
import Banner from "../containers/MangeBanner";
import ImageLocation from '../containers/ManageImageLocation/'

import FormUser from "../containers/ManageUser/components/FormUser";
import FormCreateMaster from "../containers/ManageMaster/components/FormCreateMaster";
import FormUpdateMaster from "../containers/ManageMaster/components/FormUpdateMaster";
import FormNew from "../containers/ManageNew/components/FormNew";
import FormSeeNew from "../containers/ManageNew/components/FormSee";
import RatingSee from "../containers/ManageRating/components/SeeRating";
import FormSeeFAQ from "../containers/ManageFAQ/components/FormSee";
import FormFAQ from "../containers/ManageFAQ/components/FormFaq";
import AnswerComplaint from "../containers/ManageComplaint/components/AnswerComplaint";
import NotFound from "../containers/NotFound/NotFound";
import FormBanner from "../containers/MangeBanner/components/FormBanner";
import FormImageLocation from "../containers/ManageImageLocation/components/FormImageLocation";
import { connect } from "react-redux";

const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {isLoggedIn ? (
          <RestrictedRoute
            path={"/"}
            exact={true}
            component={User}
            isLoggedIn={isLoggedIn}
          />
        ) : (
          <Route exact={true} path={"/"} component={Sigin} />
        )}

        <Route exact={true} path={"/signin"} component={Sigin} />

        <RestrictedRoute
          path={"/dashboard"}
          exact={true}
          component={User}
          isLoggedIn={isLoggedIn}
        />
        <RestrictedRoute
          path={"/dashboard/users"}
          exact={true}
          component={User}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/masters"}
          exact={true}
          component={Master}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/news"}
          exact={true}
          component={New}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/complaints"}
          exact={true}
          component={Complaint}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/rating"}
          component={Rating}
          exact={true}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/paymentmethod"}
          component={Paymentmethod}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/schedule"}
          component={Schedule}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/faq"}
          component={FAQ}
          exact={true}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/recommend"}
          component={Recommend}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/setting"}
          component={Setting}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/categorys"}
          component={Category}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/promotion"}
          component={Coupon}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/notification"}
          component={Notification}
          isLoggedIn={isLoggedIn}
        />
        <RestrictedRoute
          path={"/dashboard/banner"}
          component={Banner}
          isLoggedIn={isLoggedIn}
          exact={true}
        />
        <RestrictedRoute
          path={"/dashboard/imagelocation"}
          component={ImageLocation}
          isLoggedIn={isLoggedIn}
          exact={true}
        />

        {/* children router */}

        <RestrictedRoute
          path={"/dashboard/users/form"}
          exact={true}
          component={FormUser}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/users/form/:id"}
          component={FormUser}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/masters/form"}
          exact={true}
          component={FormCreateMaster}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/masters/form/:id"}
          component={FormUpdateMaster}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/news/form"}
          exact={true}
          component={FormNew}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/news/see/:id"}
          component={FormSeeNew}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/news/form/:id"}
          component={FormNew}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/complaints/form/:id"}
          component={AnswerComplaint}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/rating/form/:id"}
          component={RatingSee}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/faq/form"}
          exact={true}
          component={FormFAQ}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/faq/form/:id"}
          component={FormFAQ}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path={"/dashboard/faq/see/:id"}
          component={FormSeeFAQ}
          isLoggedIn={isLoggedIn}
        />
        <RestrictedRoute
          path={"/dashboard/banner/form"}
          component={FormBanner}
          isLoggedIn={isLoggedIn}
        />
        <RestrictedRoute
          path={"/dashboard/imagelocation/form"}
          component={FormImageLocation}
          isLoggedIn={isLoggedIn}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
};
export default connect(state => ({
  isLoggedIn: state.Auth.loggedIn
}))(PublicRoutes);
