(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/actions/gallery/actionCreators.js":
/*!********************************************************!*\
  !*** ./resources/js/actions/gallery/actionCreators.js ***!
  \********************************************************/
/*! exports provided: fetchGalleryListSuccess, galleryIsLoading, fetchGalleryListHasErrored */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGalleryListSuccess", function() { return fetchGalleryListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galleryIsLoading", function() { return galleryIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGalleryListHasErrored", function() { return fetchGalleryListHasErrored; });
/* harmony import */ var _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/defaultConstants */ "./resources/js/constants/defaultConstants.js");

var fetchGalleryListSuccess = function fetchGalleryListSuccess(data) {
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["LOAD_GALLERY_PHOTO"],
    data: data
  };
};
var galleryIsLoading = function galleryIsLoading(isLoading) {
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["GALLERY_IS_LOADING"],
    isLoading: isLoading
  };
};
var fetchGalleryListHasErrored = function fetchGalleryListHasErrored(hasErrored) {
  return {
    type: _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_0__["GALLERY_LOAD_HAS_ERROR"],
    hasErrored: hasErrored
  };
};

/***/ }),

/***/ "./resources/js/actions/gallery/fetchGalleryList.js":
/*!**********************************************************!*\
  !*** ./resources/js/actions/gallery/fetchGalleryList.js ***!
  \**********************************************************/
/*! exports provided: errorFetch, fetchGalleryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorFetch", function() { return errorFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGalleryList", function() { return fetchGalleryList; });
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionCreators */ "./resources/js/actions/gallery/actionCreators.js");

var errorFetch = function errorFetch() {
  return function (dispatch) {
    setTimeout(function () {
      return dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_0__["fetchGalleryListHasErrored"])(true));
    }, 5000);
  };
};
var fetchGalleryList = function fetchGalleryList(url) {
  return function (dispatch) {
    dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_0__["galleryIsLoading"])(true));
    fetch(url).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_0__["galleryIsLoading"])(false));
      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_0__["fetchGalleryListSuccess"])(data));
    }).catch(function () {
      return dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_0__["fetchGalleryListHasErrored"])(true));
    });
  };
};

/***/ }),

/***/ "./resources/js/components/gallery/Gallery.js":
/*!****************************************************!*\
  !*** ./resources/js/components/gallery/Gallery.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_gallery_GalleryListContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/gallery/GalleryListContainer */ "./resources/js/containers/gallery/GalleryListContainer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Gallery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Gallery, _React$Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    return _possibleConstructorReturn(this, _getPrototypeOf(Gallery).apply(this, arguments));
  }

  _createClass(Gallery, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: 'gallery'
      }, "gallery", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_gallery_GalleryListContainer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./resources/js/components/gallery/picture/Picture.js":
/*!************************************************************!*\
  !*** ./resources/js/components/gallery/picture/Picture.js ***!
  \************************************************************/
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



var Picture =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Picture, _React$Component);

  function Picture(props) {
    var _this;

    _classCallCheck(this, Picture);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Picture).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleImageLoaded", function () {
      _this.setState({
        imageStatus: "loaded"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageErrored", function () {
      _this.setState({
        imageStatus: "failed to load"
      });
    });

    _this.state = {
      imageStatus: "loading"
    };
    return _this;
  }

  _createClass(Picture, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'picture-row'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'picture-text'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: 'picture-title'
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: 'picture-style'
      }, this.props.style)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'image-wrapper'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.imageURL, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))));
    }
  }]);

  return Picture;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Picture);

/***/ }),

/***/ "./resources/js/containers/gallery/GalleryListContainer.js":
/*!*****************************************************************!*\
  !*** ./resources/js/containers/gallery/GalleryListContainer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _constants_defaultConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/defaultConstants */ "./resources/js/constants/defaultConstants.js");
/* harmony import */ var _actions_gallery_fetchGalleryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/gallery/fetchGalleryList */ "./resources/js/actions/gallery/fetchGalleryList.js");
/* harmony import */ var _components_gallery_picture_Picture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/gallery/picture/Picture */ "./resources/js/components/gallery/picture/Picture.js");
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








var GalleryListContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GalleryListContainer, _React$Component);

  function GalleryListContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GalleryListContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GalleryListContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hitsPerPage: 0
    });

    _defineProperty(_assertThisInitialized(_this), "renderPictureList", function (images) {
      return images.map(function (image) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_gallery_picture_Picture__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: image.id,
          title: image.name,
          style: image.style,
          imageUrl: image.url
        });
      });
    });

    return _this;
  }

  _createClass(GalleryListContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchData("".concat(_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], "gallery").concat(_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_3__["LOAD_PARAM"]).concat(this.state.hitsPerPage, "&").concat(_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_3__["GALLERY_CHUNK"]));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.renderPictureList(this.props.galleryData.list));
    }
  }]);

  return GalleryListContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    galleryData: state.fetchGalleryList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: function fetchData(url) {
      return dispatch(Object(_actions_gallery_fetchGalleryList__WEBPACK_IMPORTED_MODULE_4__["fetchGalleryList"])(url));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(GalleryListContainer)));

/***/ })

}]);