(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/actions/notifications/actionCreator.js":
/*!*************************************************************!*\
  !*** ./resources/js/actions/notifications/actionCreator.js ***!
  \*************************************************************/
/*! exports provided: makeNotification, hideNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeNotification", function() { return makeNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNotification", function() { return hideNotification; });
/* harmony import */ var _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/defaultConstants */ "./resources/js/constants/defaultConstants.js");

var makeNotification = function makeNotification(info, notificationType) {
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["MAKE_NOTIFICATIONS"],
    info: info,
    notificationType: notificationType
  };
};
var hideNotification = function hideNotification(notification) {
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["REMOVE_NOTIFICATIONS"],
    notification: notification
  };
};

/***/ }),

/***/ "./resources/js/actions/notifications/notifications.js":
/*!*************************************************************!*\
  !*** ./resources/js/actions/notifications/notifications.js ***!
  \*************************************************************/
/*! exports provided: addNotification, deleteNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNotification", function() { return addNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNotifications", function() { return deleteNotifications; });
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionCreator */ "./resources/js/actions/notifications/actionCreator.js");

var addNotification = function addNotification(data, notificationType) {
  return function (dispatch) {
    var text = data.text; // todo here
  };
};
var deleteNotifications = function deleteNotifications(id) {
  return function (dispatch) {};
};

/***/ }),

/***/ "./resources/js/components/notifications/Notification.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/notifications/Notification.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Notification = function Notification(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: props.class
  }, props.text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: 'remove'
  }, "x"));
};

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./resources/js/containers/notifications/NotificationContainer.js":
/*!************************************************************************!*\
  !*** ./resources/js/containers/notifications/NotificationContainer.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_notifications_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/notifications/Notification */ "./resources/js/components/notifications/Notification.js");
/* harmony import */ var _actions_notifications_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/notifications/notifications */ "./resources/js/actions/notifications/notifications.js");
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






var NotificationContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NotificationContainer, _React$Component);

  function NotificationContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NotificationContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NotificationContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderNotifications", function (notifications) {
      var id = 0;
      return notifications && notifications.map(function (note) {
        id++;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_notifications_Notification__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: id,
          onDissMissClick: function onDissMissClick() {
            return _this.state.remove(id);
          },
          text: note.text
        });
      });
    });

    return _this;
  }

  _createClass(NotificationContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: 'notifications'
      }, this.renderNotifications());
    }
  }]);

  return NotificationContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    notifications: state.notifications
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    add: function add(info) {
      return dispatch(Object(_actions_notifications_notifications__WEBPACK_IMPORTED_MODULE_3__["addNotification"])(info));
    },
    remove: function remove(id) {
      return dispatch(Object(_actions_notifications_notifications__WEBPACK_IMPORTED_MODULE_3__["deleteNotifications"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(NotificationContainer));

/***/ })

}]);