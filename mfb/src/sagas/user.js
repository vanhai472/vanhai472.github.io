import { call, put, delay, takeLatest } from "redux-saga/effects";
import {
  getUserActivityFailed,
  getUserActivitySuccess,
  getTypeServicesFailed,
  getTypeServicesSuccess,
  advertisingFailed,
  advertisingSuccess,
  advertisingInstagramFailed,
  advertisingInstagramSuccess,
  getInfoFailed,
  getInfoSuccess,
  getBalanceFailed,
  getBalanceSuccess
} from "../actions/user";
import { showLoading, hideLoading } from "../actions/ui";
import {
  getUserActivity,
  getTypeServices,
  advertisingCreateFacebook,
  advertisingCreateInstagram,
  getInfo,
  getBalance
} from "../apis/user";
import { STATUS_CODE } from "../constants";
import * as types from "../constants/user";

function* watchFetchUserActivity({ payload }) {
  const { params } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(getUserActivity, params);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getUserActivitySuccess(data));
    } else {
      yield put(getUserActivityFailed(data));
    }
  } catch (error) {
    yield put(getUserActivityFailed(error));
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchGetTypeService({ payload }) {
  const { params } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(getTypeServices, params);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getTypeServicesSuccess(data));
    } else {
      yield put(getTypeServicesFailed(data));
    }
  } catch (error) {
    yield put(getTypeServicesFailed(error));
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchGetInfo({ payload }) {
  const { params } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(getInfo, params);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getInfoSuccess(data));
    } else {
      yield put(getInfoFailed(data));
    }
  } catch (error) {
    yield put(getInfoFailed(error));
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchGetBalance({ payload }) {
  const { params } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(getBalance, params);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getBalanceSuccess(data));
    } else {
      yield put(getBalanceFailed(data));
    }
  } catch (error) {
    yield put(getBalanceFailed(error));
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchCreateInstagram({ payload }) {
  const { params } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(advertisingCreateInstagram, params);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(advertisingInstagramSuccess(data));
    } else {
      yield put(advertisingInstagramFailed(data));
    }
  } catch (error) {
    yield put(advertisingInstagramFailed(error));
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchCreateFacebook({ payload }) {
  const { params } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(advertisingCreateFacebook, params);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(advertisingSuccess(data));
    } else {
      yield put(advertisingFailed(data));
    }
  } catch (error) {
    yield put(advertisingFailed(error));
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* userSaga() {
  yield takeLatest(types.GET_USER_ACTIVITY, watchFetchUserActivity);
  yield takeLatest(types.GET_INFO, watchGetInfo);
  yield takeLatest(types.GET_BALANCE, watchGetBalance);
  yield takeLatest(types.GET_TYPE_SERVICES, watchGetTypeService);
  yield takeLatest(types.ADVERTISING, watchCreateFacebook);
  yield takeLatest(types.ADVERTISING_INSTAGRAM, watchCreateInstagram);
}

export default userSaga;
