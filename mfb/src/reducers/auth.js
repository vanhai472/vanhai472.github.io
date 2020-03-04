import * as types from "../constants/auth";
import { notification } from "antd";
import { openNotification } from "../utils";
const initialState = {
  dataLogin: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN: {
      return {
        ...state
      };
    }
    case types.LOGIN_SUCCESS: {
      const { data } = action.payload;
      notification.open({
        message: "Thông báo",
        description: "Đăng nhập thành công !"
      });
      return {
        ...state,
        dataLogin: { ...data }
      };
    }
    case types.LOGIN_FAILED: {
      notification.error({
        message: "Login failed",
        description: action.payload?.error?.username
      });
      return {
        ...state
      };
    }
    case types.REGISTER: {
      return {
        ...state
      };
    }
    case types.REGISTER_SUCCESS: {
      notification.open({
        message: "Register success",
        description: action.payload.data?.description
      });
      return {
        ...state
      };
    }
    case types.REGISTER_FAILED: {
      notification.open({
        message: "SignUp failed",
        description: action.payload?.error?.response?.data?.description
      });
      return {
        ...state
      };
    }

    case types.FORGOTEMAIL: {
      return {
        ...state
      };
    }
    case types.FORGOTEMAIL_SUCCESS: {
      notification.open({
        message: "Email success",
        description: action.payload?.data?.description
      });
      return {
        ...state
      };
    }
    case types.FORGOTEMAIL_FAILED: {
      notification.open({
        message: "Email not found",
        description: action.payload?.error?.response?.data?.email
      });
      return {
        ...state
      };
    }
    case types.RESETPASSWORD: {
      return {
        ...state
      };
    }
    case types.RESETPASSWORD_SUCCESS: {
      return {
        ...state
      };
    }
    case types.RESETPASSWORD_FAILED: {
      return {
        ...state
      };
    }
    case types.CHANGEPASSWORD: {
      return {
        ...state
      };
    }
    case types.CHANGEPASSWORDSUCCESS: {
      const { data } = action.payload;
      openNotification("success", "Thông báo", data?.description);
      return {
        ...state
      };
    }
    case types.CHANGEPASSWORDFAILED: {
      const { error } = action.payload;
      openNotification(
        "success",
        "Thông báo",
        error?.response?.data?.description || error?.response?.data?.message
      );
      return {
        ...state
      };
    }
    case types.CHANGEINFO: {
      return {
        ...state
      };
    }
    case types.CHANGEINFOSUCCESS: {
      const { data } = action.payload;
      openNotification("success", "Thông báo", data?.description);
      return {
        ...state
      };
    }
    case types.CHANGEINFOFAILED: {
      const { error } = action.payload;
      openNotification(
        "error",
        "Thông báo",
        error?.response?.data?.description || error?.response?.data?.message
      );
      return {
        ...state
      };
    }

    default:
      return state;
  }
};

export default reducer;
