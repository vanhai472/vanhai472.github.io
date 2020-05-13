import {
    MARK_REQUEST_PENDING,
    MARK_REQUEST_SUCCESS,
    MARK_REQUEST_FAILURE,
    MARK_REQUEST_CANCELLED,
    INVOKE_CALLBACK,
} from "./constants";

export const markRequestPending = (key) => ({
    type: MARK_REQUEST_PENDING,
    meta: { key },
});

export const markRequestSuccess = (key) => ({
    type: MARK_REQUEST_SUCCESS,
    meta: { key },
});

export const markRequestCancelled = (key, type, reason) => ({
    type: MARK_REQUEST_CANCELLED,
    payload: `${type} : ${reason || "cancelled"}`,
    meta: { key },
});

export const markRequestFailure = (key, reason) => ({
    type: MARK_REQUEST_FAILURE,
    payload: reason,
    meta: { key },
});

export const invokeCallback = (callback, ...args) => ({
    type: INVOKE_CALLBACK,
    payload: callback && callback.call(null, ...args),
});
