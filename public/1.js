(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/images/large/about.png":
/*!******************************************!*\
  !*** ./resources/images/large/about.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/about.png?cdd73f24ff6217a80e9a179a3e28ddf6";

/***/ }),

/***/ "./resources/images/large/phone.png":
/*!******************************************!*\
  !*** ./resources/images/large/phone.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/phone.png?bdf77464c7a33f84808dfb69b3e5da9a";

/***/ }),

/***/ "./resources/images/large/picture.png":
/*!********************************************!*\
  !*** ./resources/images/large/picture.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/picture.png?ea108209cde85c3eba99175e495485a5";

/***/ }),

/***/ "./resources/images/small/aboutSmall.png":
/*!***********************************************!*\
  !*** ./resources/images/small/aboutSmall.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/aboutSmall.png?83777acceccb2a6f53b30dca40bfcc8e";

/***/ }),

/***/ "./resources/images/small/phoneSmall.png":
/*!***********************************************!*\
  !*** ./resources/images/small/phoneSmall.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/phoneSmall.png?befcbfda8269b8df264f78f70d0e3429";

/***/ }),

/***/ "./resources/images/small/pictureSmall.png":
/*!*************************************************!*\
  !*** ./resources/images/small/pictureSmall.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/pictureSmall.png?b0a8215bb06d12bad2cb0de2877a9463";

/***/ }),

/***/ "./resources/js/actions/examples/actionCreators.js":
/*!*********************************************************!*\
  !*** ./resources/js/actions/examples/actionCreators.js ***!
  \*********************************************************/
/*! exports provided: fetchExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchExample", function() { return fetchExample; });
/* harmony import */ var _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/defaultConstants */ "./resources/js/constants/defaultConstants.js");

var fetchExample = function fetchExample(data) {
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["LOAD_EXAMPLES_PHOTOS"],
    data: data
  };
};

/***/ }),

/***/ "./resources/js/actions/examples/fetchExamples.js":
/*!********************************************************!*\
  !*** ./resources/js/actions/examples/fetchExamples.js ***!
  \********************************************************/
/*! exports provided: fetchExamplesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchExamplesList", function() { return fetchExamplesList; });
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionCreators */ "./resources/js/actions/examples/actionCreators.js");

var fetchExamplesList = function fetchExamplesList(url) {
  return function (dispatch) {
    fetch(url).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_0__["fetchExample"])(data));
    }).catch(function (rejected) {
      console.log(rejected);
    });
  };
};

/***/ }),

/***/ "./resources/js/actions/home/mission/actionCreator.js":
/*!************************************************************!*\
  !*** ./resources/js/actions/home/mission/actionCreator.js ***!
  \************************************************************/
/*! exports provided: changeMissionInput, sendForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMissionInput", function() { return changeMissionInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendForm", function() { return sendForm; });
/* harmony import */ var _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/defaultConstants */ "./resources/js/constants/defaultConstants.js");

var changeMissionInput = function changeMissionInput(name, value) {
  var values = [];
  values[name] = value;
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["MISSION_INPUTS_CHANGING"],
    values: values
  };
};
var sendForm = function sendForm() {
  return {};
};

/***/ }),

/***/ "./resources/js/actions/home/subscribe/actionCreators.js":
/*!***************************************************************!*\
  !*** ./resources/js/actions/home/subscribe/actionCreators.js ***!
  \***************************************************************/
/*! exports provided: emailChanging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailChanging", function() { return emailChanging; });
/* harmony import */ var _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/defaultConstants */ "./resources/js/constants/defaultConstants.js");

var emailChanging = function emailChanging(value) {
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["EMAIL_INPUT_CHANGING"],
    value: value
  };
};

/***/ }),

/***/ "./resources/js/actions/home/subscribe/fetchEmail.js":
/*!***********************************************************!*\
  !*** ./resources/js/actions/home/subscribe/fetchEmail.js ***!
  \***********************************************************/
/*! exports provided: fetchEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchEmail", function() { return fetchEmail; });
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionCreators */ "./resources/js/actions/home/subscribe/actionCreators.js");
/* harmony import */ var _notifications_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../notifications/notifications */ "./resources/js/actions/notifications/notifications.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/store */ "./resources/js/store/store.js");



var fetchEmail = function fetchEmail(url) {
  event.preventDefault();
  return function (dispatch) {
    var email = _store_store__WEBPACK_IMPORTED_MODULE_2__["default"].getState().emailChanging.value;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        'email': email
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (info) {
      dispatch(Object(_notifications_notifications__WEBPACK_IMPORTED_MODULE_1__["addNotification"])(info, 'success'));
      dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_0__["emailChanging"])(''));
    }).then(function () {
      return dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_0__["emailChanging"])(''));
    }).catch(function (info) {
      dispatch(Object(_notifications_notifications__WEBPACK_IMPORTED_MODULE_1__["addNotification"])(info, 'fail'));
      dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_0__["emailChanging"])(''));
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

/***/ "./resources/js/components/home/Home.js":
/*!**********************************************!*\
  !*** ./resources/js/components/home/Home.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parts_Introduction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/Introduction */ "./resources/js/components/home/parts/Introduction.js");
/* harmony import */ var _parts_examples_Examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/examples/Examples */ "./resources/js/components/home/parts/examples/Examples.js");
/* harmony import */ var _containers_home_subscribe_SubscribeContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/home/subscribe/SubscribeContainer */ "./resources/js/containers/home/subscribe/SubscribeContainer.js");
/* harmony import */ var _containers_home_mission_MissionContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../containers/home/mission/MissionContainer */ "./resources/js/containers/home/mission/MissionContainer.js");
/* harmony import */ var _parts_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/About */ "./resources/js/components/home/parts/About.js");







var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_parts_Introduction__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_parts_examples_Examples__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_home_subscribe_SubscribeContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_parts_About__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_home_mission_MissionContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./resources/js/components/home/parts/About.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/home/parts/About.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _images_large_about_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../images/large/about.png */ "./resources/images/large/about.png");
/* harmony import */ var _images_large_about_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_large_about_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_small_aboutSmall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../images/small/aboutSmall.png */ "./resources/images/small/aboutSmall.png");
/* harmony import */ var _images_small_aboutSmall_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_small_aboutSmall_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProgressiveImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../ProgressiveImage */ "./resources/js/components/ProgressiveImage.js");






var About = function About(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: 'about'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: 'section-title'
  }, "about us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'section-text'
  }, "Enjoy contemporary AI art. Be original. ", "\n", "The NeuroArt.ai service provides the ability to create ", "\n", "paintings using Artificial Intelligence algorithms!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-photo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgressiveImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    image: _images_large_about_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    preview: _images_small_aboutSmall_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: 'image'
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: 'section-title'
  }, "You can either create a new painted art or process your own photo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'section-text'
  }, "The NeuroArt service provides the ability to creat paintings using Artificial Intelligence algorithms ! You always get a unique and original result ! We can print a picture for you on almost anything (paper, canvas, cloth, mugs, clothes)! We will find a way to fulfill an order anywhere in the world. Rest assured!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: 'button example',
    to: '/gallery'
  }, "see examples"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: 'button order',
    rel: "nofollow",
    href: "http://t.me/neuroartaibot",
    target: "_blank"
  }, "buy now")))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./resources/js/components/home/parts/Introduction.js":
/*!************************************************************!*\
  !*** ./resources/js/components/home/parts/Introduction.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_large_picture_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../images/large/picture.png */ "./resources/images/large/picture.png");
/* harmony import */ var _images_large_picture_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_large_picture_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_small_pictureSmall_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../images/small/pictureSmall.png */ "./resources/images/small/pictureSmall.png");
/* harmony import */ var _images_small_pictureSmall_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_small_pictureSmall_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProgressiveImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../ProgressiveImage */ "./resources/js/components/ProgressiveImage.js");





var Introduction = function Introduction(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: 'home'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'intro-text'
  }, "We are painting with ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " artificial intelligence"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'about-text'
  }, "You can make your own NeuroArt picture using our bots! We have 3 types of art like Make Art, Style Transfer and Deep Dream. Let\u2019s try to create a beautiful picture with artificial intelligence!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'buy-now button'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Buy now")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'contact-us button'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Contact us")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-picture"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgressiveImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: _images_large_picture_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    preview: _images_small_pictureSmall_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: 'image'
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Introduction);

/***/ }),

/***/ "./resources/js/components/home/parts/Mission.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/home/parts/Mission.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProgressiveImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../ProgressiveImage */ "./resources/js/components/ProgressiveImage.js");
/* harmony import */ var _images_large_phone_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../images/large/phone.png */ "./resources/images/large/phone.png");
/* harmony import */ var _images_large_phone_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_large_phone_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_small_phoneSmall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../images/small/phoneSmall.png */ "./resources/images/small/phoneSmall.png");
/* harmony import */ var _images_small_phoneSmall_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_small_phoneSmall_png__WEBPACK_IMPORTED_MODULE_3__);





var Mission = function Mission(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: 'mission'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mission-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: 'section-title'
  }, "our mission"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'section-text'
  }, "Project NeuroArt.AI is dedicated to meet our society with potencial opportunities of Artificial Intelligence. We are here to distribute influence on people\u2019s minds throught the art. Our mission is convince humanity of the nessity and inevitability of creating AI. Which will be almighty and unlimited."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: 'text',
    name: 'name',
    placeholder: 'Name',
    className: 'input',
    value: props.nameValue,
    onChange: function onChange(e) {
      props.onChange('name', e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: 'text',
    name: 'email',
    placeholder: 'Email',
    className: 'input',
    value: props.emailValue,
    onChange: function onChange(e) {
      props.onChange('email', e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    name: 'message',
    placeholder: 'Type your message',
    className: 'message',
    onChange: function onChange(e) {
      props.onChange('message', e.target.value);
    },
    value: props.messageValue
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: 'button',
    value: 'send message',
    className: 'send'
  }))), window.innerWidth > 900 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgressiveImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: _images_large_phone_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    preview: _images_small_phoneSmall_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: 'image'
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Mission);

/***/ }),

/***/ "./resources/js/components/home/parts/Subscribe.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/home/parts/Subscribe.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Subscribe = function Subscribe(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: 'subscribe'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: 'subscribe-title'
  }, "don't miss our latest news !"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'subscribe-text'
  }, "Subscribe to us for mailing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "send-wrapper",
    onSubmit: props.send
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: 'Email',
    className: 'subscribe-email',
    value: props.value || '',
    onChange: props.input
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: 'submit',
    className: 'subscribe-submit',
    value: 'subscribe'
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ }),

/***/ "./resources/js/components/home/parts/examples/ExampleColumn.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/home/parts/examples/ExampleColumn.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ExampleColumn = function ExampleColumn(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'image-styles'
  }, props.style), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "style-image-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.firstUri,
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "style-image-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.secondUri,
    alt: ""
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ExampleColumn);

/***/ }),

/***/ "./resources/js/components/home/parts/examples/Examples.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/home/parts/examples/Examples.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_examples_ExampleColumnContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../containers/examples/ExampleColumnContainer */ "./resources/js/containers/examples/ExampleColumnContainer.js");



var Examples = function Examples(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: 'examples'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "examples-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'examples-title'
  }, "examples"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'examples-description'
  }, "Choose one of the several types of NeuroArt.AI. We have 3 types like Make Art, Style Transfer and Deep Dream. Let\u2019s see some examples.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "styles"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_examples_ExampleColumnContainer__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Examples);

/***/ }),

/***/ "./resources/js/containers/examples/ExampleColumnContainer.js":
/*!********************************************************************!*\
  !*** ./resources/js/containers/examples/ExampleColumnContainer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_examples_fetchExamples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/examples/fetchExamples */ "./resources/js/actions/examples/fetchExamples.js");
/* harmony import */ var _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/defaultConstants */ "./resources/js/constants/defaultConstants.js");
/* harmony import */ var _components_home_parts_examples_ExampleColumn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/parts/examples/ExampleColumn */ "./resources/js/components/home/parts/examples/ExampleColumn.js");
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







var ExampleColumnContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExampleColumnContainer, _React$Component);

  function ExampleColumnContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ExampleColumnContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ExampleColumnContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderStyleCols", function (data) {
      var columns = [];
      columns = data[0] && data[0].length > 0 ? [].concat([data[0].filter(function (col) {
        return col.style === 'Make art';
      })], [data[0].filter(function (col) {
        return col.style === 'Style transfer';
      })], [data[0].filter(function (col) {
        return col.style === 'Deep dream';
      })]) : [];
      return columns.map(function (col) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_parts_examples_ExampleColumn__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: col[0].id,
          style: col[0].style,
          firstUri: col[0].uri,
          secondUri: col[1].uri
        });
      });
    });

    return _this;
  }

  _createClass(ExampleColumnContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchData("".concat(_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], "examples"));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.renderStyleCols(this.props.examplesData));
    }
  }]);

  return ExampleColumnContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    examplesData: state.fetchExamples
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: function fetchData(url) {
      return dispatch(Object(_actions_examples_fetchExamples__WEBPACK_IMPORTED_MODULE_2__["fetchExamplesList"])(url));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ExampleColumnContainer));

/***/ }),

/***/ "./resources/js/containers/home/mission/MissionContainer.js":
/*!******************************************************************!*\
  !*** ./resources/js/containers/home/mission/MissionContainer.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_home_parts_Mission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/home/parts/Mission */ "./resources/js/components/home/parts/Mission.js");
/* harmony import */ var _actions_home_mission_actionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/home/mission/actionCreator */ "./resources/js/actions/home/mission/actionCreator.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MissionContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MissionContainer, _React$Component);

  function MissionContainer() {
    _classCallCheck(this, MissionContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(MissionContainer).apply(this, arguments));
  }

  _createClass(MissionContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_parts_Mission__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: this.props.changeInput,
        nameValue: this.props.inputs['name'],
        emailValue: this.props.inputs['email'],
        messageValue: this.props.inputs['message']
      });
    }
  }]);

  return MissionContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    inputs: state.missionInputs
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeInput: function changeInput(name, value) {
      return dispatch(Object(_actions_home_mission_actionCreator__WEBPACK_IMPORTED_MODULE_3__["changeMissionInput"])(name, value));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(MissionContainer));

/***/ }),

/***/ "./resources/js/containers/home/subscribe/SubscribeContainer.js":
/*!**********************************************************************!*\
  !*** ./resources/js/containers/home/subscribe/SubscribeContainer.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_home_parts_Subscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/home/parts/Subscribe */ "./resources/js/components/home/parts/Subscribe.js");
/* harmony import */ var _actions_home_subscribe_fetchEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/home/subscribe/fetchEmail */ "./resources/js/actions/home/subscribe/fetchEmail.js");
/* harmony import */ var _actions_home_subscribe_actionCreators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/home/subscribe/actionCreators */ "./resources/js/actions/home/subscribe/actionCreators.js");
/* harmony import */ var _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/defaultConstants */ "./resources/js/constants/defaultConstants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var SubscribeContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SubscribeContainer, _React$Component);

  function SubscribeContainer() {
    _classCallCheck(this, SubscribeContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SubscribeContainer).apply(this, arguments));
  }

  _createClass(SubscribeContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_parts_Subscribe__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: this.props.data.value,
        input: this.props.input,
        send: this.props.send
      });
    }
  }]);

  return SubscribeContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.emailChanging
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    input: function input(event) {
      return dispatch(Object(_actions_home_subscribe_actionCreators__WEBPACK_IMPORTED_MODULE_4__["emailChanging"])(event.target.value));
    },
    send: function send() {
      return dispatch(Object(_actions_home_subscribe_fetchEmail__WEBPACK_IMPORTED_MODULE_3__["fetchEmail"])("".concat(_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_5__["BASE_PATH"], "mails")));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(SubscribeContainer));

/***/ })

}]);