(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/actions/profile/actionCreator.js":
/*!*******************************************************!*\
  !*** ./resources/js/actions/profile/actionCreator.js ***!
  \*******************************************************/
/*! exports provided: userData, userPhotos, userStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userData", function() { return userData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPhotos", function() { return userPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userStatus", function() { return userStatus; });
/* harmony import */ var _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/defaultConstants */ "./resources/js/constants/defaultConstants.js");

var userData = function userData(data) {
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE"],
    payload: data
  };
};
var userPhotos = function userPhotos(photos) {
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE_PHOTOS"],
    photos: photos
  };
};
var userStatus = function userStatus(status, isStatusChanged) {
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["CHANGE_USER_STATUS"],
    isStatusChanged: isStatusChanged,
    status: status
  };
};

/***/ }),

/***/ "./resources/js/actions/profile/getProfileData.js":
/*!********************************************************!*\
  !*** ./resources/js/actions/profile/getProfileData.js ***!
  \********************************************************/
/*! exports provided: getUserData, getUserPhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPhotos", function() { return getUserPhotos; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notifications_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notifications/notifications */ "./resources/js/actions/notifications/notifications.js");
/* harmony import */ var _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/defaultConstants */ "./resources/js/constants/defaultConstants.js");
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionCreator */ "./resources/js/actions/profile/actionCreator.js");




var getUserData = function getUserData() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], "user")).then(function (res) {
      dispatch(_actionCreator__WEBPACK_IMPORTED_MODULE_3__["userData"]);
    }).catch(function (err) {
      dispatch(Object(_notifications_notifications__WEBPACK_IMPORTED_MODULE_1__["addNotification"])(err));
    });
  };
};
var getUserPhotos = function getUserPhotos() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], "user/pictures")).then(function (res) {
      dispatch(Object(_actionCreator__WEBPACK_IMPORTED_MODULE_3__["userPhotos"])(res.data));
    }).catch(function (err) {
      dispatch(Object(_notifications_notifications__WEBPACK_IMPORTED_MODULE_1__["addNotification"])(err));
    });
  };
};

/***/ }),

/***/ "./resources/js/actions/profile/setProfileData.js":
/*!********************************************************!*\
  !*** ./resources/js/actions/profile/setProfileData.js ***!
  \********************************************************/
/*! exports provided: setUserStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserStatus", function() { return setUserStatus; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionCreator */ "./resources/js/actions/profile/actionCreator.js");
/* harmony import */ var _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/defaultConstants */ "./resources/js/constants/defaultConstants.js");
/* harmony import */ var _notifications_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notifications/notifications */ "./resources/js/actions/notifications/notifications.js");




var setUserStatus = function setUserStatus(status) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], "user/sittings/status"), {
      status: status
    }).then(function (res) {// dispatch(userStatus(res.data, false));
      // dispatch(addNotification('Status saved.'));
    }).catch(function (err) {// dispatch(addNotification(err));
    });
  };
};

/***/ }),

/***/ "./resources/js/components/ProgressiveImage.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/ProgressiveImage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ProgressiveImage =
/*#__PURE__*/
function (_Component) {
  _inherits(ProgressiveImage, _Component);

  function ProgressiveImage(props) {
    var _this;

    _classCallCheck(this, ProgressiveImage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProgressiveImage).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "fetchImage", function (src) {
      var image = new Image();

      image.onload = function () {
        return _this.setState({
          currentImage: _this.loadingImage.src,
          loading: false
        });
      };

      image.src = src;
      _this.loadingImage = image;
    });

    _this.state = {
      currentImage: _this.props.image,
      loading: true
    };
    return _this;
  }

  _createClass(ProgressiveImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchImage(this.props.image);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.image !== this.props.image) {
        this.setState({
          currentImage: nextProps.preview,
          loading: true
        }, function () {
          _this2.fetchImage(nextProps.image);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.loadingImage) {
        this.loadingImage.onload = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var alt = this.props.alt;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'progressive-image-wrapper'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.state.loading ? 'preview-wrapper' : 'preview-wrapper hidden'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.preview,
        alt: alt,
        className: 'preview'
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: this.state.loading ? 'image' : 'image visible',
        src: this.state.currentImage,
        alt: alt,
        onLoad: function onLoad() {
          _this3.setState({
            loading: false
          });
        }
      }));
    }
  }]);

  return ProgressiveImage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProgressiveImage);

/***/ }),

/***/ "./resources/js/components/profile/Profile.js":
/*!****************************************************!*\
  !*** ./resources/js/components/profile/Profile.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProgressiveImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProgressiveImage */ "./resources/js/components/ProgressiveImage.js");
/* harmony import */ var _icons_LoginLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/LoginLogo */ "./resources/js/icons/LoginLogo.js");




var Profile = function Profile(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'profile'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "avatar-wrapper"
  }, Boolean(props.avatar) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgressiveImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: props.avatar,
    preview: props.avatarPreview,
    alt: 'image'
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_LoginLogo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: 'avatar-default'
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'username'
  }, props.username), props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./resources/js/containers/profile/ProfileContainer.js":
/*!*************************************************************!*\
  !*** ./resources/js/containers/profile/ProfileContainer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_profile_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/profile/Profile */ "./resources/js/components/profile/Profile.js");
/* harmony import */ var _actions_profile_getProfileData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/profile/getProfileData */ "./resources/js/actions/profile/getProfileData.js");
/* harmony import */ var _actions_profile_actionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/profile/actionCreator */ "./resources/js/actions/profile/actionCreator.js");
/* harmony import */ var _actions_profile_setProfileData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/profile/setProfileData */ "./resources/js/actions/profile/setProfileData.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var ProfileContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ProfileContainer, _Component);

  function ProfileContainer() {
    _classCallCheck(this, ProfileContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProfileContainer).apply(this, arguments));
  }

  _createClass(ProfileContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getUserData();
      this.props.getUserPhotos();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var status = this.props.auth.payload.username === this.props.match.params.username ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'status-wrapper'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: 'status',
        type: "text",
        placeholder: 'status',
        value: this.props.profile.status,
        onChange: function onChange(event) {
          _this.props.changeStatusInput(event.target.value, true);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return _this.props.changeStatusRequest(_this.props.profile.status);
        },
        className: this.props.profile.isStatusChanged ? 'set-status active' : 'set-status'
      }, "\u2713")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "status"
      }, this.props.profile.status);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_profile_Profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
        username: this.props.match.params.username,
        avatar: this.props.profile.avatar,
        avatarPreview: this.props.profile.avatarPreview,
        photos: this.props.profile.photos,
        liked: this.props.profile.liked
      }, status);
    }
  }]);

  return ProfileContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    profile: state.profileData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getUserData: function getUserData() {
      return dispatch(Object(_actions_profile_getProfileData__WEBPACK_IMPORTED_MODULE_3__["getUserData"])());
    },
    getUserPhotos: function getUserPhotos() {
      return dispatch(Object(_actions_profile_getProfileData__WEBPACK_IMPORTED_MODULE_3__["getUserPhotos"])());
    },
    changeStatusRequest: function changeStatusRequest(status) {
      return dispatch(Object(_actions_profile_setProfileData__WEBPACK_IMPORTED_MODULE_5__["setUserStatus"])(status));
    },
    changeStatusInput: function changeStatusInput(status, isStatusChanged) {
      return dispatch(Object(_actions_profile_actionCreator__WEBPACK_IMPORTED_MODULE_4__["userStatus"])(status, isStatusChanged));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ProfileContainer));

/***/ })

}]);