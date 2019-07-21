(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/actions/auth/actionCreator.js":
/*!****************************************************!*\
  !*** ./resources/js/actions/auth/actionCreator.js ***!
  \****************************************************/
/*! exports provided: getErrors, setCurrentUser, registerInputsValue, loginInputsValue, clearInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrors", function() { return getErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerInputsValue", function() { return registerInputsValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginInputsValue", function() { return loginInputsValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInputs", function() { return clearInputs; });
/* harmony import */ var _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/defaultConstants */ "./resources/js/constants/defaultConstants.js");

var getErrors = function getErrors(data) {
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["GET_ERRORS"],
    data: data
  };
};
var setCurrentUser = function setCurrentUser(decoded) {
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_USER"],
    payload: decoded
  };
};
var registerInputsValue = function registerInputsValue(key, value) {
  var values = [];
  values[key] = value;
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["REGISTER_INPUTS"],
    values: values
  };
};
var loginInputsValue = function loginInputsValue(key, value) {
  var values = [];
  values[key] = value;
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["LOGIN_INPUTS"],
    values: values
  };
};
var clearInputs = function clearInputs() {
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["CLEAR_INPUTS"]
  };
};

/***/ }),

/***/ "./resources/js/actions/auth/authentication.js":
/*!*****************************************************!*\
  !*** ./resources/js/actions/auth/authentication.js ***!
  \*****************************************************/
/*! exports provided: registerUser, loginUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/store */ "./resources/js/store/store.js");
/* harmony import */ var _history_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../history/history */ "./resources/js/history/history.js");
/* harmony import */ var _setAuthToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../setAuthToken */ "./resources/js/setAuthToken.js");
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionCreator */ "./resources/js/actions/auth/actionCreator.js");





var registerUser = function registerUser(event) {
  event.preventDefault();
  return function (dispatch) {
    var user = _store_store__WEBPACK_IMPORTED_MODULE_1__["default"].getState().inputsValues;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/register', user).then(function (res) {
      var token = res.data.token;
      var decoded = jwt_decode(token);
      localStorage.setItem('token', token);
      Object(_setAuthToken__WEBPACK_IMPORTED_MODULE_3__["default"])(token);
      dispatch(Object(_actionCreator__WEBPACK_IMPORTED_MODULE_4__["setCurrentUser"])(decoded));
    }).then(function () {
      return _history_history__WEBPACK_IMPORTED_MODULE_2__["default"].push('/');
    }).catch(function (err) {
      dispatch(Object(_actionCreator__WEBPACK_IMPORTED_MODULE_4__["getErrors"])(err.response));
    });
  };
};
var loginUser = function loginUser(event) {
  event.preventDefault();
  return function (dispatch) {
    var user = {
      email: _store_store__WEBPACK_IMPORTED_MODULE_1__["default"].getState().inputsValues.login_email,
      password: _store_store__WEBPACK_IMPORTED_MODULE_1__["default"].getState().inputsValues.login_password
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/login', user).then(function (res) {
      var token = res.data.token;
      var decoded = jwt_decode(token);
      localStorage.setItem('token', token);
      Object(_setAuthToken__WEBPACK_IMPORTED_MODULE_3__["default"])(token);
      dispatch(Object(_actionCreator__WEBPACK_IMPORTED_MODULE_4__["setCurrentUser"])(decoded));
    }).catch(function (err) {
      dispatch(Object(_actionCreator__WEBPACK_IMPORTED_MODULE_4__["getErrors"])(err.response));
    });
  };
};
var logoutUser = function logoutUser() {
  return function (dispatch) {
    localStorage.removeItem('jwtToken');
    Object(_setAuthToken__WEBPACK_IMPORTED_MODULE_3__["default"])(false);
    dispatch(Object(_actionCreator__WEBPACK_IMPORTED_MODULE_4__["setCurrentUser"])({}));
    dispatch(Object(_actionCreator__WEBPACK_IMPORTED_MODULE_4__["clearInputs"])());
    _history_history__WEBPACK_IMPORTED_MODULE_2__["default"].push('/');
  };
};

/***/ }),

/***/ "./resources/js/components/auth/registration/Registration.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/auth/registration/Registration.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Registration = function Registration(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'registration'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: 'title'
  }, "Registration"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: 'form',
    onSubmit: props.onSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: 'input',
    type: "text",
    placeholder: "Name",
    name: "name",
    onChange: function onChange(e) {
      return props.onInput('name', e.target.value);
    },
    value: props.name,
    autoComplete: 'off'
  }), props.errors && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, props.errors.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: 'input',
    type: "email",
    placeholder: "Email",
    name: "email",
    onChange: function onChange(e) {
      return props.onInput('email', e.target.value);
    },
    value: props.email,
    autoComplete: 'off'
  }), props.errors && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, props.errors.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: 'input',
    type: "password",
    placeholder: "Password",
    name: "password",
    onChange: function onChange(e) {
      return props.onInput('password', e.target.value);
    },
    value: props.password,
    autoComplete: 'off'
  }), props.errors && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, props.errors.password), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: 'input',
    type: "password",
    placeholder: "Confirm Password",
    name: "c_password",
    onChange: function onChange(e) {
      return props.onInput('c_password', e.target.value);
    },
    value: props.password_confirm,
    autoComplete: 'off'
  }), props.errors && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, props.errors.password_confirm), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: 'submit'
  }, "Register User")));
};

/* harmony default export */ __webpack_exports__["default"] = (Registration);

/***/ }),

/***/ "./resources/js/containers/auth/registration/RegistrationContainer.js":
/*!****************************************************************************!*\
  !*** ./resources/js/containers/auth/registration/RegistrationContainer.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_auth_registration_Registration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../components/auth/registration/Registration */ "./resources/js/components/auth/registration/Registration.js");
/* harmony import */ var _actions_auth_actionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/auth/actionCreator */ "./resources/js/actions/auth/actionCreator.js");
/* harmony import */ var _actions_auth_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/auth/authentication */ "./resources/js/actions/auth/authentication.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var RegistrationContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(RegistrationContainer, _Component);

  function RegistrationContainer() {
    _classCallCheck(this, RegistrationContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(RegistrationContainer).apply(this, arguments));
  }

  _createClass(RegistrationContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_auth_registration_Registration__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onInput: this.props.change,
        onSubmit: this.props.register,
        name: this.props.values['name'],
        email: this.props.values['email'],
        password: this.props.values['password'],
        password_confirm: this.props.values['c_password'],
        errors: this.props.errors.data
      });
    }
  }]);

  return RegistrationContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.authErrors,
    values: state.inputsValues
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    register: function register(event) {
      return dispatch(Object(_actions_auth_authentication__WEBPACK_IMPORTED_MODULE_5__["registerUser"])(event));
    },
    change: function change(key, value) {
      return dispatch(Object(_actions_auth_actionCreator__WEBPACK_IMPORTED_MODULE_4__["registerInputsValue"])(key, value));
    },
    handleErrors: function handleErrors(data) {
      return dispatch(Object(_actions_auth_actionCreator__WEBPACK_IMPORTED_MODULE_4__["getErrors"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(RegistrationContainer)));

/***/ }),

/***/ "./resources/js/setAuthToken.js":
/*!**************************************!*\
  !*** ./resources/js/setAuthToken.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var setAuthToken = function setAuthToken(token) {
  if (token) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

/***/ })

}]);