import _get from "lodash/get";
import { push } from "connected-react-router";
import { call, put, takeLatest } from "redux-saga/effects";
import { hideLoading, showLoading } from "../actions/ui";
import {
  STATUS_CODE,
  AUTHORIZATION_KEY,
  TIMER,
  VIOD,
  USERNAME,
  EMAIL
} from "../constants";
import {
  loginFailed,
  loginSuccess,
  registerSuccess,
  registerFailed,
  forGotEmailSuccess,
  forGotEmailFailed,
  resetPasswordSuccess,
  resetPasswordFailed,
  changePasswordFailed,
  changePasswordSuccess,
  changeInfoSuccess,
  changeInfoFailed
} from "../actions/auth";
import {
  login,
  Signup,
  forgot,
  resetPassword,
  changePassword,
  changeInfo
} from "../apis/auth";
import * as authTypes from "../constants/auth";
import axiosService from "../services/axiosService";

function* processLogin({ payload }) {
  const { username, password } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(login, {
      username,
      password
    });
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(loginSuccess(data));
      const { api_token } = data;
      const { password } = payload;
      axiosService.setHeader("Authorization", `Bearer ${api_token}`);
      localStorage.setItem(USERNAME, data?.username);
      localStorage.setItem(EMAIL, data?.email);
      localStorage.setItem(VIOD, password);
      localStorage.setItem(AUTHORIZATION_KEY, api_token);
      localStorage.setItem(TIMER, new Date());
      yield put(push(authTypes.REDIRECT_AFTER_LOGIN_SUCCESS));
    } else {
      yield put(loginFailed(data));
    }
  } catch (error) {
    const err = _get(error, "response.data", {});
    yield put(loginFailed(err));
  } finally {
    yield put(hideLoading());
  }
}

function* processSignUp({ payload }) {
  const { username, password, email } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(Signup, {
      username,
      password,
      email
    });
    const { data, status } = resp;
    if (status === STATUS_CODE.CREATED) {
      yield put(registerSuccess(data));
      yield put(push(authTypes.REDIRECT_AFTER_REGISTER_SUCCESS));
    } else {
      yield put(registerFailed(data));
    }
  } catch (error) {
    yield put(registerFailed(error));
  } finally {
    yield put(hideLoading());
  }
}
function* processForGotEmail({ payload }) {
  const { email } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(forgot, {
      email
    });
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(forGotEmailSuccess(data));
    } else {
      yield put(forGotEmailFailed(data));
    }
  } catch (error) {
    yield put(forGotEmailFailed(error));
  } finally {
    yield put(hideLoading());
  }
}

function* processResetPassword({ payload }) {
  const { email, new_password, reset_code } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(resetPassword, {
      email,
      new_password,
      reset_code
    });
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(resetPasswordSuccess(data));
    } else {
      yield put(resetPasswordFailed(data));
    }
  } catch (error) {
    yield put(resetPasswordFailed(error));
  } finally {
    yield put(hideLoading());
  }
}
function* processChangePassword({ payload }) {
  const { params } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(changePassword, params);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(changePasswordSuccess(data));
    } else {
      yield put(changePasswordFailed(data));
    }
  } catch (error) {
    console.log(error);
    yield put(changePasswordFailed(error));
  } finally {
    yield put(hideLoading());
  }
}
function* processChangeInfo({ payload }) {
  const { params } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(changeInfo, params);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(changeInfoSuccess(data));
    } else {
      yield put(changeInfoFailed(data));
    }
  } catch (error) {
    yield put(changeInfoFailed(error));
  } finally {
    yield put(hideLoading());
  }
}

function* authSaga() {
  yield takeLatest(authTypes.LOGIN, processLogin);
  yield takeLatest(authTypes.REGISTER, processSignUp);
  yield takeLatest(authTypes.FORGOTEMAIL, processForGotEmail);
  yield takeLatest(authTypes.RESETPASSWORD, processResetPassword);
  yield takeLatest(authTypes.CHANGEPASSWORD, processChangePassword);
  yield takeLatest(authTypes.CHANGEINFO, processChangeInfo);
}
export default authSaga;
