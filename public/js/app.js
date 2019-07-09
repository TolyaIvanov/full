/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/Index.js":
/*!*******************************!*\
  !*** ./resources/js/Index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\OSPanel\\domains\\egor-shop\\resources\\js\\Index.js: JSX attributes must only be assigned a non-empty expression (29:39)\n\n\u001b[0m \u001b[90m 27 | \u001b[39m\t\t\t\t\t\t\u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m exact path\u001b[33m=\u001b[39m{\u001b[32m'/'\u001b[39m} component\u001b[33m=\u001b[39m{\u001b[33mHome\u001b[39m}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 | \u001b[39m\t\t\t\t\t\t\u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m path\u001b[33m=\u001b[39m{\u001b[32m'/gallery'\u001b[39m} component\u001b[33m=\u001b[39m{\u001b[33mGallery\u001b[39m}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 29 | \u001b[39m\t\t\t\t\t\t\u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m path\u001b[33m=\u001b[39m{\u001b[32m'/login'\u001b[39m} component\u001b[33m=\u001b[39m{}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\t\t\t\t\t\t                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 | \u001b[39m\t\t\t\t\t\t\u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m path\u001b[33m=\u001b[39m{\u001b[32m'/registration'\u001b[39m} component\u001b[33m=\u001b[39m{}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 31 | \u001b[39m\t\t\t\t\t\t\u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m path\u001b[33m=\u001b[39m{\u001b[32m'/try'\u001b[39m} component\u001b[33m=\u001b[39m{\u001b[33mTry\u001b[39m}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 32 | \u001b[39m\t\t\t\t\t\t\u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m component\u001b[33m=\u001b[39m{\u001b[33mError\u001b[39m}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Object.raise (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:3851:17)\n    at Object.jsxParseAttributeValue (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:3391:22)\n    at Object.jsxParseAttribute (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:3444:44)\n    at Object.jsxParseOpeningElementAfterName (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:3464:28)\n    at Object.jsxParseOpeningElementAt (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:3457:17)\n    at Object.jsxParseElementAt (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:3489:33)\n    at Object.jsxParseElementAt (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:3505:32)\n    at Object.jsxParseElementAt (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:3505:32)\n    at Object.jsxParseElementAt (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:3505:32)\n    at Object.jsxParseElement (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:3558:17)\n    at Object.parseExprAtom (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:3565:19)\n    at Object.parseExprSubscripts (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:5916:23)\n    at Object.parseMaybeUnary (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:5896:21)\n    at Object.parseExprOps (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:5783:23)\n    at Object.parseMaybeConditional (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:5756:23)\n    at Object.parseMaybeAssign (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:5703:21)\n    at Object.parseParenAndDistinguishExpression (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:6468:28)\n    at Object.parseExprAtom (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:6262:21)\n    at Object.parseExprAtom (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:3570:20)\n    at Object.parseExprSubscripts (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:5916:23)\n    at Object.parseMaybeUnary (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:5896:21)\n    at Object.parseExprOps (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:5783:23)\n    at Object.parseMaybeConditional (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:5756:23)\n    at Object.parseMaybeAssign (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:5703:21)\n    at Object.parseExpression (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:5651:23)\n    at Object.parseReturnStatement (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:7671:28)\n    at Object.parseStatementContent (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:7341:21)\n    at Object.parseStatement (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:7293:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:7879:25)\n    at Object.parseBlockBody (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:7866:10)\n    at Object.parseBlock (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:7850:10)\n    at Object.parseFunctionBody (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:6911:24)\n    at Object.parseFunctionBodyAndFinish (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:6881:10)\n    at Object.parseMethod (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:6837:10)\n    at Object.pushClassMethod (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:8272:30)\n    at Object.parseClassMemberWithIsStatic (C:\\OSPanel\\domains\\egor-shop\\node_modules\\@babel\\parser\\lib\\index.js:8197:12)");

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./Index */ "./resources/js/Index.js");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\OSPanel\domains\egor-shop\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\OSPanel\domains\egor-shop\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });