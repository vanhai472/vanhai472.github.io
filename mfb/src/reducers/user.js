import * as types from "../constants/user";
import { openNotification } from "../utils";
const initialState = {
  isLoadingUser: true,
  dataUserActivity: {},
  datatTypeServices: [],
  dataInfo: {},
  dataBalance: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_ACTIVITY: {
      return {
        ...state
      };
    }
    case types.GET_USER_ACTIVITY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dataUserActivity: { ...data }
      };
    }
    case types.GET_USER_ACTIVITY_FAILED: {
      return {
        ...state
      };
    }

    case types.GET_TYPE_SERVICES: {
      return {
        ...state
      };
    }
    case types.GET_TYPE_SERVICES_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        datatTypeServices: [...data]
      };
    }
    case types.GET_TYPE_SERVICES_FAILED: {
      return {
        ...state
      };
    }

    case types.GET_INFO: {
      return {
        ...state
      };
    }
    case types.GET_INFO_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dataInfo: { ...data }
      };
    }
    case types.GET_INFO_FAILED: {
      return {
        ...state
      };
    }

    case types.GET_BALANCE: {
      return {
        ...state
      };
    }
    case types.GET_BALANCE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dataBalance: { ...data }
      };
    }
    case types.GET_BALANCE_FAILED: {
      return {
        ...state
      };
    }

    case types.ADVERTISING: {
      return {
        ...state
      };
    }
    case types.ADVERTISINGSUCCESS: {
      const { data } = action.payload;
      openNotification("success", "Thông báo", data?.description);
      return {
        ...state
      };
    }
    case types.ADVERTISINGFAILED: {
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

    case types.ADVERTISING_INSTAGRAM: {
      return {
        ...state
      };
    }
    case types.ADVERTISING_INSTAGRAMSUCCESS: {
      const { data } = action.payload;
      openNotification("success", "Thông báo", data?.description);
      return {
        ...state
      };
    }
    case types.ADVERTISING_INSTAGRAMFAILED: {
      const { error } = action.payload;
      openNotification(
        "error",
        "Thông báo",
        error?.response?.data?.description ||
          error?.response?.data?.message ||
          error?.response?.data?.error?.quantity[0]
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
