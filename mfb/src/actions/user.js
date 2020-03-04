import * as userConstant from "../constants/user";

export const getUserActivity = params => ({
  type: userConstant.GET_USER_ACTIVITY,
  payload: {
    params
  }
});

export const getUserActivitySuccess = data => ({
  type: userConstant.GET_USER_ACTIVITY_SUCCESS,
  payload: {
    data
  }
});

export const getUserActivityFailed = error => ({
  type: userConstant.GET_USER_ACTIVITY_FAILED,
  payload: {
    error
  }
});

export const getTypeServices = params => ({
  type: userConstant.GET_TYPE_SERVICES,
  payload: {
    params
  }
});

export const getTypeServicesSuccess = data => ({
  type: userConstant.GET_TYPE_SERVICES_SUCCESS,
  payload: {
    data
  }
});

export const getTypeServicesFailed = error => ({
  type: userConstant.GET_TYPE_SERVICES_FAILED,
  payload: {
    error
  }
});

export const getInfo = params => ({
  type: userConstant.GET_INFO,
  payload: {
    params
  }
});

export const getInfoSuccess = data => ({
  type: userConstant.GET_INFO_SUCCESS,
  payload: {
    data
  }
});

export const getInfoFailed = error => ({
  type: userConstant.GET_INFO_FAILED,
  payload: {
    error
  }
});

export const getBalance = params => ({
  type: userConstant.GET_BALANCE,
  payload: {
    params
  }
});

export const getBalanceSuccess = data => ({
  type: userConstant.GET_BALANCE_SUCCESS,
  payload: {
    data
  }
});

export const getBalanceFailed = error => ({
  type: userConstant.GET_BALANCE_FAILED,
  payload: {
    error
  }
});

export const advertisingCreateFacebook = params => ({
  type: userConstant.ADVERTISING,
  payload: {
    params
  }
});
export const advertisingSuccess = data => ({
  type: userConstant.ADVERTISINGSUCCESS,
  payload: {
    data
  }
});
export const advertisingFailed = error => ({
  type: userConstant.ADVERTISINGFAILED,
  payload: {
    error
  }
});

export const advertisingCreateInstagram = params => ({
  type: userConstant.ADVERTISING_INSTAGRAM,
  payload: {
    params
  }
});
export const advertisingInstagramSuccess = data => ({
  type: userConstant.ADVERTISING_INSTAGRAMSUCCESS,
  payload: {
    data
  }
});
export const advertisingInstagramFailed = error => ({
  type: userConstant.ADVERTISING_INSTAGRAMFAILED,
  payload: {
    error
  }
});
