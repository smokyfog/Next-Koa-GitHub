(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\test\\b.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ftest%2Fb&absolutePagePath=D%3A%5Cstudy%5CNext-Koa-GitHub%5Cnext-github%5Cpages%5Ctest%5Cb.js!./":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ftest%2Fb&absolutePagePath=D%3A%5Cstudy%5CNext-Koa-GitHub%5Cnext-github%5Cpages%5Ctest%5Cb.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/test/b", function() {
      var page = __webpack_require__(/*! ./pages/test/b.js */ "./pages/test/b.js")
      if(true) {
        module.hot.accept(/*! ./pages/test/b.js */ "./pages/test/b.js", function() {
          if(!next.router.components["/test/b"]) return
          var updatedPage = __webpack_require__(/*! ./pages/test/b.js */ "./pages/test/b.js")
          next.router.update("/test/b", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_01f9a3fa864a7b7414d8 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_01f9a3fa864a7b7414d8 */ "dll-reference dll_01f9a3fa864a7b7414d8"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/test/b.js":
/*!*************************!*\
  !*** ./pages/test/b.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1;

    case 'minus':
      return state - 1;

    default:
      return state;
  }
}

function MyCountFunc() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(countReducer, 0),
      count = _useReducer[0],
      dispatchCount = _useReducer[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('jock'),
      name = _useState[0],
      setName = _useState[1];

  var config = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      text: "count is ".concat(count),
      color: count > 3 ? 'red' : 'blue'
    };
  }, [count]);
  var handleButtonClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return dispatchCount({
      type: 'add'
    });
  }, []); //这里我们也可以用useMemo来记忆方法,实际上useCallback就是useMemo的简化
  // const handleButtonClick = useMemo(
  //   () => () => dispatchCount({ type: 'add' }),
  //   []
  // )

  var handleAlertClick = function handleAlertClick() {
    setTimeout(function () {
      alert(count);
    }, 2000);
  };

  return __jsx("div", null, __jsx("input", {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }), __jsx(Child, {
    config: config,
    onButtonClick: handleButtonClick
  }), __jsx("button", {
    onClick: handleAlertClick
  }, "AlertCount"));
}

var Child = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function Child(_ref) {
  var onButtonClick = _ref.onButtonClick,
      config = _ref.config;
  console.log('child render');
  return __jsx("button", {
    onClick: onButtonClick,
    style: {
      color: config.color
    }
  }, config.text);
});
/* harmony default export */ __webpack_exports__["default"] = (MyCountFunc);

/***/ }),

/***/ 6:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Ftest%2Fb&absolutePagePath=D%3A%5Cstudy%5CNext-Koa-GitHub%5Cnext-github%5Cpages%5Ctest%5Cb.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Ftest%2Fb&absolutePagePath=D%3A%5Cstudy%5CNext-Koa-GitHub%5Cnext-github%5Cpages%5Ctest%5Cb.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ftest%2Fb&absolutePagePath=D%3A%5Cstudy%5CNext-Koa-GitHub%5Cnext-github%5Cpages%5Ctest%5Cb.js!./");


/***/ }),

/***/ "dll-reference dll_01f9a3fa864a7b7414d8":
/*!*******************************************!*\
  !*** external "dll_01f9a3fa864a7b7414d8" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_01f9a3fa864a7b7414d8;

/***/ })

},[[6,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=b.js.map