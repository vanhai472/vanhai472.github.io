import * as types from "../constants/auth";

export const login = (username, password) => ({
  type: types.LOGIN,
  payload: {
    username,
    password
  }
});

export const loginSuccess = data => ({
  type: types.LOGIN_SUCCESS,
  payload: {
    data
  }
});

export const loginFailed = error => ({
  type: types.LOGIN_FAILED,
  payload: {
    error
  }
});
export const register = (username, password, email) => ({
  type: types.REGISTER,
  payload: {
    username,
    password,
    email
  }
});
export const registerSuccess = data => ({
  type: types.REGISTER_SUCCESS,
  payload: {
    data
  }
});
export const registerFailed = error => ({
  type: types.REGISTER_FAILED,
  payload: {
    error
  }
});
export const forGotEmail = email => ({
  type: types.FORGOTEMAIL,
  payload: {
    email
  }
});

export const forGotEmailSuccess = data => ({
  type: types.FORGOTEMAIL_SUCCESS,
  payload: {
    data
  }
});

export const forGotEmailFailed = error => ({
  type: types.FORGOTEMAIL_FAILED,
  payload: {
    error
  }
});

export const resetPassword = (email, reset_code, password) => ({
  type: types.RESETPASSWORD,
  payload: {
    email,
    reset_code,
    password
  }
});

export const resetPasswordSuccess = data => ({
  type: types.RESETPASSWORD_SUCCESS,
  payload: {
    data
  }
});

export const resetPasswordFailed = error => ({
  type: types.RESETPASSWORD_FAILED,
  payload: {
    error
  }
});
export const changePassword = params => ({
  type: types.CHANGEPASSWORD,
  payload: {
    params
  }
});
export const changePasswordSuccess = data => ({
  type: types.CHANGEPASSWORDSUCCESS,
  payload: {
    data
  }
});
export const changePasswordFailed = error => ({
  type: types.CHANGEPASSWORDFAILED,
  payload: {
    error
  }
});
export const changeInfo = params => ({
  type: types.CHANGEINFO,
  payload: {
    params
  }
});
export const changeInfoSuccess = data => ({
  type: types.CHANGEINFOSUCCESS,
  payload: {
    data
  }
});

export const changeInfoFailed = error => ({
  type: types.CHANGEINFOFAILED,
  payload: {
    error
  }
});

// export const advertisingCreateBuffInstagram
