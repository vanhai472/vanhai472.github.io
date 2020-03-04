import WrappedNormalLoginPage from "../pages/Login/loginPage";
import PageReport from "../pages/PageReport";
import SupportPage from "../pages/Home/Support";
import HomeReport from "../pages/Home/HomePage";
import BodyPageReport from "../components/UserAll/BodyHome";
import RechargePage from "../pages/User/RechargeUser";
import ReportPage from "../pages/Home/Report";
import RefundLogsPage from "../pages/Home/RefundLogs";
import ApiManagerPage from "../pages/Home/ApiManager";
import BuffLikeCommentSharePage from "../pages/Facebook/BuffLikeCommentShare";
import BuffLikeInstagram from "../pages/Instagram/BuffLikeInstagram";
import SetTingAcount from "../pages/User/SetTingAcount";
import RechargeUser from "../pages/User/RechargeUser";
import ChartReactJS from "../components/UserAll/chart";
import SignUpPage from "../pages/Login/signUp";
import ForgotEmail from "../pages/Login/forgotEmail";
import ResetPassword from "../pages/Login/resetPassword";

export const ADMIN_ROUTES = [
  {
    name: "Home",
    path: "/dashboard",
    exact: true,
    component: PageReport
  },
  {
    name: "Report",
    path: "/dashboard-report",
    exact: true,
    component: HomeReport
  },
  {
    name: "/Page Report",
    path: "/body-page-report",
    exact: true,
    component: BodyPageReport
  },
  {
    name: "Hỗ trợ",
    path: "/support",
    exact: true,
    component: SupportPage
  },
  {
    name: "Nạp tiền",
    path: "/recharge",
    exact: true,
    component: RechargePage
  },
  {
    name: "Báo cáo",
    path: "/report",
    exact: true,
    component: ReportPage
  },
  {
    name: "Nhật kỹ hoàn tiền",
    path: "/refundlogs",
    exact: true,
    component: RefundLogsPage
  },
  {
    name: "Tích hợp site",
    path: "/api-manager",
    exact: true,
    component: ApiManagerPage
  },
  {
    name: "Like Page",
    path: "/buff-facebook",
    exact: true,
    component: BuffLikeCommentSharePage
  },
  {
    name: "buff like instagram",
    path: "/buff-like-instagram",
    exact: true,
    component: BuffLikeInstagram
  },

  {
    name: "cài đặt UserPage",
    path: "/set-ting-acount",
    exact: true,
    component: SetTingAcount
  },
  {
    name: "nạp tiền UserPage",
    path: "/recharge-user",
    exact: true,
    component: RechargeUser
  },
  {
    name: "chart reactjs",
    path: "/Chart",
    exact: true,
    component: ChartReactJS
  },
  {
    name: "resetPassword",
    path: "/reset-password",
    exact: true,
    component: ResetPassword
  }
];

export const ROUTES = [
  {
    name: "Đăng nhập",
    path: "/login",
    component: WrappedNormalLoginPage
  },
  {
    name: "signup",
    path: "/signUp",
    exact: true,
    component: SignUpPage
  },
  {
    name: "forgot",
    path: "/forgot",
    exact: true,
    component: ForgotEmail
  }
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202
};

export const USERNAME = "USERNAME";
export const EMAIL = "EMAIL";
export const SPLIT_SPACE = /\s+/;
export const DATEFORMAT = "DD/MM/YYYY";
export const INDEX_PAGE_SIZE_DEFAULT = 10;
export const TIMER = "TIMER";
export const AUTHORIZATION_KEY = "TOKEN";
export const API_ENDPOINT = "https://buffsn.aibb.vn/api";
export const BACKGROUND_COLOR_NOTE = "rgb(53, 120, 229)";
export const VIOD = "VIOD";
