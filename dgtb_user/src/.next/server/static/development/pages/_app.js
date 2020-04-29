module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/antd/dist/antd.css":
/*!******************************************!*\
  !*** ../node_modules/antd/dist/antd.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/next/app.js":
/*!***********************************!*\
  !*** ../node_modules/next/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "../node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "../node_modules/next/dist/pages/_app.js":
/*!***********************************************!*\
  !*** ../node_modules/next/dist/pages/_app.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ "../node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\vuhon\\Desktop\\dgtb_user\\src\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_redux_store__WEBPACK_IMPORTED_MODULE_4__["makeStore"], {
  debug: true
})(class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ctx
      });
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }
    }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 6
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }))));
  }

}));

/***/ }),

/***/ "./redux/actions/auth.js":
/*!*******************************!*\
  !*** ./redux/actions/auth.js ***!
  \*******************************/
/*! exports provided: login, logout, verifyToken, setAuthState, saveLoggedUser, saveRefreshToken, removeLoggedUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyToken", function() { return verifyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthState", function() { return setAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveLoggedUser", function() { return saveLoggedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRefreshToken", function() { return saveRefreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLoggedUser", function() { return removeLoggedUser; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./redux/actions/constants.js");
 // định nghĩa các giá trị đc truyền vào action login

const login = (...args) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["APP_LOGIN"],
  args
});
const logout = (...args) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["APP_LOGOUT"],
  args
});
const verifyToken = (...args) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["APP_VERIFY_TOKEN"],
  args
});
const setAuthState = newAuthState => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["APP_SET_AUTH_STATE"],
  payload: newAuthState
});
const saveLoggedUser = data => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["APP_SAVE_LOGGED_USER"],
  payload: data
}); // data: access token

const saveRefreshToken = data => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["APP_SAVE_REFRESH_TOKEN"],
  payload: data
});
const removeLoggedUser = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["APP_REMOVE_LOGGED_USER"]
});

/***/ }),

/***/ "./redux/actions/common.js":
/*!*********************************!*\
  !*** ./redux/actions/common.js ***!
  \*********************************/
/*! exports provided: markRequestPending, markRequestSuccess, markRequestCancelled, markRequestFailure, invokeCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markRequestPending", function() { return markRequestPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markRequestSuccess", function() { return markRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markRequestCancelled", function() { return markRequestCancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markRequestFailure", function() { return markRequestFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invokeCallback", function() { return invokeCallback; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./redux/actions/constants.js");

const markRequestPending = key => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["MARK_REQUEST_PENDING"],
  meta: {
    key
  }
});
const markRequestSuccess = key => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["MARK_REQUEST_SUCCESS"],
  meta: {
    key
  }
});
const markRequestCancelled = (key, type, reason) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["MARK_REQUEST_CANCELLED"],
  payload: `${type} : ${reason || "cancelled"}`,
  meta: {
    key
  }
});
const markRequestFailure = (key, reason) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["MARK_REQUEST_FAILURE"],
  payload: reason,
  meta: {
    key
  }
});
const invokeCallback = (callback, ...args) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["INVOKE_CALLBACK"],
  payload: callback && callback.call(null, ...args)
});

/***/ }),

/***/ "./redux/actions/constants.js":
/*!************************************!*\
  !*** ./redux/actions/constants.js ***!
  \************************************/
/*! exports provided: TOGGLE_ALL, COLLPSE_CHANGE, TOGGLE_MODAL_REGISTER, TOGGLE_MODAL_LOGIN, APP_SET_AUTH_STATE, UPDATE_APP_MESSAGE, APP_SAVE_LOGGED_USER, APP_REMOVE_LOGGED_USER, APP_SAVE_REFRESH_TOKEN, APP_SAVE_SOCIAL_TYPE, APP_WIPE_DATA, APP_LOGIN, APP_LOGOUT, APP_REGISTER, APP_VERIFY_TOKEN, MARK_REQUEST_PENDING, MARK_REQUEST_SUCCESS, MARK_REQUEST_FAILURE, MARK_REQUEST_CANCELLED, GET_ALL_RATE_OPTION, SAVE_ALL_RATE_OPTION, GET_ALL_MASTER_OPTION, SAVE_ALL_MASTER_OPTION, GET_ALL_MASTER_TREND, SAVE_ALL_MASTER_TREND, GET_ALL_MASTER_HOT, SAVE_ALL_MASTER_HOT, GET_ALL_MASTER_GOOD, SAVE_ALL_MASTER_GOOD, GET_ALL_MASTER_NEW, SAVE_ALL_MASTER_NEW, GET_ALL_MASTER_NEAR, SAVE_ALL_MASTER_NEAR, INVOKE_CALLBACK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ALL", function() { return TOGGLE_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLPSE_CHANGE", function() { return COLLPSE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MODAL_REGISTER", function() { return TOGGLE_MODAL_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MODAL_LOGIN", function() { return TOGGLE_MODAL_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_SET_AUTH_STATE", function() { return APP_SET_AUTH_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_APP_MESSAGE", function() { return UPDATE_APP_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_SAVE_LOGGED_USER", function() { return APP_SAVE_LOGGED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_REMOVE_LOGGED_USER", function() { return APP_REMOVE_LOGGED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_SAVE_REFRESH_TOKEN", function() { return APP_SAVE_REFRESH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_SAVE_SOCIAL_TYPE", function() { return APP_SAVE_SOCIAL_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_WIPE_DATA", function() { return APP_WIPE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LOGIN", function() { return APP_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LOGOUT", function() { return APP_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_REGISTER", function() { return APP_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_VERIFY_TOKEN", function() { return APP_VERIFY_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_REQUEST_PENDING", function() { return MARK_REQUEST_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_REQUEST_SUCCESS", function() { return MARK_REQUEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_REQUEST_FAILURE", function() { return MARK_REQUEST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_REQUEST_CANCELLED", function() { return MARK_REQUEST_CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_RATE_OPTION", function() { return GET_ALL_RATE_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ALL_RATE_OPTION", function() { return SAVE_ALL_RATE_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_MASTER_OPTION", function() { return GET_ALL_MASTER_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ALL_MASTER_OPTION", function() { return SAVE_ALL_MASTER_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_MASTER_TREND", function() { return GET_ALL_MASTER_TREND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ALL_MASTER_TREND", function() { return SAVE_ALL_MASTER_TREND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_MASTER_HOT", function() { return GET_ALL_MASTER_HOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ALL_MASTER_HOT", function() { return SAVE_ALL_MASTER_HOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_MASTER_GOOD", function() { return GET_ALL_MASTER_GOOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ALL_MASTER_GOOD", function() { return SAVE_ALL_MASTER_GOOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_MASTER_NEW", function() { return GET_ALL_MASTER_NEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ALL_MASTER_NEW", function() { return SAVE_ALL_MASTER_NEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_MASTER_NEAR", function() { return GET_ALL_MASTER_NEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ALL_MASTER_NEAR", function() { return SAVE_ALL_MASTER_NEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVOKE_CALLBACK", function() { return INVOKE_CALLBACK; });
/**
 * APP
 */
const TOGGLE_ALL = "TOGGLE_ALL";
const COLLPSE_CHANGE = "COLLPSE_CHANGE";
const TOGGLE_MODAL_REGISTER = "OPEN_MODAL_REGISTER";
const TOGGLE_MODAL_LOGIN = "TOGGLE_MODAL_LOGIN";
/**
 * AUTH
 */

const APP_SET_AUTH_STATE = "app/setAuthState";
const UPDATE_APP_MESSAGE = "app/updateMessage";
const APP_SAVE_LOGGED_USER = "app/saveLoggedUser";
const APP_REMOVE_LOGGED_USER = "app/removeLoggedUser";
const APP_SAVE_REFRESH_TOKEN = "app/saveRefreshToken";
const APP_SAVE_SOCIAL_TYPE = "app/saveSocialType";
const APP_WIPE_DATA = "app/wipeData";
const APP_LOGIN = "app/login";
const APP_LOGOUT = "app/logout";
const APP_REGISTER = "app/register";
const APP_VERIFY_TOKEN = "app/verifyToken";
/**
 * REQUEST
 */

const MARK_REQUEST_PENDING = "request/requestPending";
const MARK_REQUEST_SUCCESS = "request/requestSuccess";
const MARK_REQUEST_FAILURE = "request/requestFailure";
const MARK_REQUEST_CANCELLED = "request/requestCancelled";
/**
 * RATE
 */

const GET_ALL_RATE_OPTION = "GET_ALL_RATE_OPTION";
const SAVE_ALL_RATE_OPTION = "SAVE_ALL_RATE_OPTION"; // master

const GET_ALL_MASTER_OPTION = "GET_ALL_MASTER_OPTION";
const SAVE_ALL_MASTER_OPTION = "SAVE_ALL_MASTER_OPTION";
const GET_ALL_MASTER_TREND = "GET_ALL_MASTER_TREND";
const SAVE_ALL_MASTER_TREND = "SAVE_ALL_MASTER_TREND";
const GET_ALL_MASTER_HOT = "GET_ALL_MASTER_MUCH";
const SAVE_ALL_MASTER_HOT = "SAVE_ALL_MASTER_MUCH";
const GET_ALL_MASTER_GOOD = "GET_ALL_MASTER_GOOD";
const SAVE_ALL_MASTER_GOOD = "SAVE_ALL_MASTER_GOOD";
const GET_ALL_MASTER_NEW = "GET_ALL_MASTER_NEW";
const SAVE_ALL_MASTER_NEW = "SAVE_ALL_MASTER_NEW";
const GET_ALL_MASTER_NEAR = "GET_ALL_MASTER_NEAR";
const SAVE_ALL_MASTER_NEAR = "SAVE_ALL_MASTER_NEAR";
/**
 * INVOKE CALLBACK
 */

const INVOKE_CALLBACK = "app/invokeCallBack";

/***/ }),

/***/ "./redux/api/auth.js":
/*!***************************!*\
  !*** ./redux/api/auth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./redux/api/common.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  verifyToken: token => _common__WEBPACK_IMPORTED_MODULE_0__["API"].get("auths/token/verify", {}, {
    headers: {
      Authorization: token
    }
  }),
  login: formData => _common__WEBPACK_IMPORTED_MODULE_0__["API"].post("auths/client/loginEmail", formData)
});

/***/ }),

/***/ "./redux/api/common.js":
/*!*****************************!*\
  !*** ./redux/api/common.js ***!
  \*****************************/
/*! exports provided: API, endpoint, convertObjectToQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertObjectToQuery", function() { return convertObjectToQuery; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/api */ "./redux/constants/api.js");
/* harmony import */ var _constants_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/configs */ "./redux/constants/configs.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




const endpoint = _constants_configs__WEBPACK_IMPORTED_MODULE_2__["default"].endPoint;
const API = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: endpoint,
  timeout: _constants_api__WEBPACK_IMPORTED_MODULE_1__["API_TIMEOUT"],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

const convertObjectToQuery = object => {
  if (!lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(object)) {
    return Object.keys(object).map(key => {
      if (object[key][0]) {
        return key + "=" + object[key][0];
      }
    }).join("&");
  }
};



/***/ }),

/***/ "./redux/constants/api.js":
/*!********************************!*\
  !*** ./redux/constants/api.js ***!
  \********************************/
/*! exports provided: API_TIMEOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_TIMEOUT", function() { return API_TIMEOUT; });
const API_TIMEOUT = 15000;

/***/ }),

/***/ "./redux/constants/configs.js":
/*!************************************!*\
  !*** ./redux/constants/configs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  endPoint: "http://27.72.147.104:3000/api/v1/"
});

/***/ }),

/***/ "./redux/reducers/app.js":
/*!*******************************!*\
  !*** ./redux/reducers/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appReducer; });
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./redux/actions/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  collapsed: false,
  visibleSideBar: false,
  visibleLogin: false,
  visibleRegister: false
};
function appReducer(state = initState, action) {
  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["COLLPSE_CHANGE"]:
      return _objectSpread({}, state, {
        collapsed: !state.collapsed
      });

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_ALL"]:
      if (state.view !== action.view || action.height !== state.height) {
        return _objectSpread({}, state, {
          view: action.view,
          collapsed: false
        });
      }

      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_MODAL_LOGIN"]:
      return _objectSpread({}, state, {
        visibleLogin: !state.visibleLogin
      });

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_MODAL_REGISTER"]:
      return _objectSpread({}, state, {
        visibleRegister: !state.visibleRegister
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/reducers/auth.js":
/*!********************************!*\
  !*** ./redux/reducers/auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./redux/actions/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const init = {
  loggedIn: false,
  token: null,
  refreshToken: null,
  user: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = init, {
  type,
  payload
}) => {
  switch (type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["APP_SET_AUTH_STATE"]:
      return _objectSpread({}, state, {
        loggedIn: payload || false
      });

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["APP_SAVE_LOGGED_USER"]:
      console.log(payload);
      return _objectSpread({}, state, {
        user: payload.data,
        token: payload.data.accessToken
      });

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["APP_SAVE_REFRESH_TOKEN"]:
      return _objectSpread({}, state, {
        token: _objectSpread({}, state.token, {}, payload)
      });

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["APP_REMOVE_LOGGED_USER"]:
      return _objectSpread({}, state, {}, init);

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./redux/reducers/app.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./redux/reducers/auth.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);

 // import Rate from "./rates";
// import Master from "./master";
// import masterReducer from "./masterReducer";


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  App: _app__WEBPACK_IMPORTED_MODULE_0__["default"],
  Auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"] // Rate,
  // Master,
  // masterReducer,

}));

/***/ }),

/***/ "./redux/sagas/auth.js":
/*!*****************************!*\
  !*** ./redux/sagas/auth.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/constants */ "./redux/actions/constants.js");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth */ "./redux/api/auth.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth */ "./redux/actions/auth.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./redux/sagas/common.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);






const requestLogin = Object(_common__WEBPACK_IMPORTED_MODULE_4__["createRequestSaga"])({
  request: _api_auth__WEBPACK_IMPORTED_MODULE_2__["default"].login,
  key: "login",
  cancel: _actions_constants__WEBPACK_IMPORTED_MODULE_1__["APP_LOGOUT"],
  success: [res => Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["saveLoggedUser"])(res), () => Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["setAuthState"])(true)],
  functionFailure: [res => antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(res.message)]
});

const requestVerifyToken = function* () {};

const requestLogout = function* () {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["removeLoggedUser"])()), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["setAuthState"])(false))]);
};

/* harmony default export */ __webpack_exports__["default"] = ([function* fetchWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_constants__WEBPACK_IMPORTED_MODULE_1__["APP_LOGIN"], requestLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_constants__WEBPACK_IMPORTED_MODULE_1__["APP_VERIFY_TOKEN"], requestVerifyToken), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_constants__WEBPACK_IMPORTED_MODULE_1__["APP_LOGOUT"], requestLogout)]);
}]);

/***/ }),

/***/ "./redux/sagas/common.js":
/*!*******************************!*\
  !*** ./redux/sagas/common.js ***!
  \*******************************/
/*! exports provided: rejectErrors, createRequestSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rejectErrors", function() { return rejectErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRequestSaga", function() { return createRequestSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/common */ "./redux/actions/common.js");
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/api */ "./redux/constants/api.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/auth */ "./redux/actions/auth.js");





const rejectErrors = res => {
  const {
    data
  } = res.data;

  if (!data) {
    return Promise.reject({
      message: res.data.message
    });
  }
};
const createRequestSaga = ({
  request,
  key,
  success,
  failure,
  functionSuccess,
  functionFailure,
  timeout = _constants_api__WEBPACK_IMPORTED_MODULE_3__["API_TIMEOUT"],
  cancel,
  cancelled
}) => function* (action) {
  let args = action.args || [];
  console.log(args); // Kiểm tra xem có callback function ở action hay không

  const callback = typeof args[args.length - 1] === "function" ? args[args.length - 1] : null;

  if (callback) {
    args = args.slice(0, -1);
  }

  let ret = null;
  let err = null; // Kiểm tra xem request có phải là function hay không

  const requestKey = typeof key === "function" ? key(...args) : key; // put vào action pending để chờ dữ liệu

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_common__WEBPACK_IMPORTED_MODULE_2__["markRequestPending"])(requestKey)); // bắt đầu gọi dữ liệu tử server về

  try {
    if (!request) {
      throw new Error("Không tìm thấy API");
    } // yield call nhận vào 2 tham số, tham số thứ 2 là 1 mảng dữ liệu


    const invokeRequest = async () => {
      const chainRequest = request.apply(request, args);
      const response = await chainRequest;
      console.log(response);
      if (response.data.code >= 200 && response.data.code < 300) return response.data;else return rejectErrors(response);
    };

    const raceOptions = {
      data: Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(invokeRequest),
      isTimeout: Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["delay"])(timeout)
    };

    if (cancel) {
      raceOptions.cancelRet = Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["take"])(cancel);
    }

    const {
      data,
      isTimeout,
      cancelRet
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["race"])(raceOptions);
    console.log(data);

    if (isTimeout) {
      throw new Error(`Api method is timeout after ${timeout} ms!!!`);
    } else if (cancelRet) {
      // callback on success
      if (cancelled) {
        for (const actionCreator of cancelled) {
          yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(actionCreator(cancelRet, action));
        }
      } // mark cancelled request


      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_common__WEBPACK_IMPORTED_MODULE_2__["markRequestCancelled"])(cancelRet, requestKey));
    } else {
      if (success) {
        for (const actionCreator of success) {
          yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(actionCreator(data, action));
        }
      }

      if (functionSuccess) {
        for (const actionCreator of functionSuccess) {
          actionCreator(data);
        }
      }

      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_common__WEBPACK_IMPORTED_MODULE_2__["markRequestSuccess"])(requestKey));
      ret = data;
    }
  } catch (reason) {
    if (reason.code === 401) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["removeLoggedUser"])());
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["setAuthState"])(false));
    }

    if (failure) {
      for (const actionCreator of failure) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(actionCreator(reason, action));
      }
    }

    if (functionFailure) {
      for (const actionCreator of functionFailure) {
        actionCreator(reason);
      }
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_common__WEBPACK_IMPORTED_MODULE_2__["markRequestFailure"])(requestKey, reason));
    err = reason;
  } finally {
    if (callback) {
      // gọi lại callback và chuyển vào action invokeCallback trong action này hàm
      // callback được gọi và thực thi
      // ret chứa dữ liệu nếu gọi API thành công và truyền ngược lại cho
      // hàm gọi action đó
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_common__WEBPACK_IMPORTED_MODULE_2__["invokeCallback"])(callback, err, ret));
    }
  }
};

/***/ }),

/***/ "./redux/sagas/index.js":
/*!******************************!*\
  !*** ./redux/sagas/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./redux/sagas/auth.js");

 // import rates from "./rates";
// import masters from "./master";

const rootSaga = function* () {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([..._auth__WEBPACK_IMPORTED_MODULE_1__["default"].map(watcher => Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watcher)) //   ...rates.map((watcher) => fork(watcher)),
  //   ...masters.map((watcher) => fork(watcher)),
  ]);
};

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: makeStore, getStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return getStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "./redux/sagas/index.js");




const sagaMiddleWare = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();

const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const makeConfiguredStore = (reducer, initialState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, bindMiddleware([sagaMiddleWare]));
};

let getStore = null;
const makeStore = (initialState, {
  isServer,
  req,
  debug,
  storeKey
}) => {
  if (isServer) {
    console.log("object");
    initialState = initialState || {
      fromServer: "foo"
    };
    return makeConfiguredStore(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);
  } else {
    const store = makeConfiguredStore(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);

    store.runSagaTask = () => {
      store.sagaTask = sagaMiddleWare.run(_sagas__WEBPACK_IMPORTED_MODULE_3__["default"]);
    };

    store.runSagaTask();
    getStore = store;
    return store;
  }
};


/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map