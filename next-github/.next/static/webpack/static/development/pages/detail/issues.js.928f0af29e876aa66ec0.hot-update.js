webpackHotUpdate("static\\development\\pages\\detail\\issues.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/detail/issues.jsx":
/*!*********************************!*\
  !*** ./pages/detail/issues.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/avatar/style/css */ "./node_modules/antd/lib/avatar/style/css.js");
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/select/style/css */ "./node_modules/antd/lib/select/style/css.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_WithRepoBasic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/WithRepoBasic */ "./components/WithRepoBasic.jsx");
/* harmony import */ var _components_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/MarkdownRenderer */ "./components/MarkdownRenderer.jsx");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/SearchUser */ "./components/SearchUser.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../lib/util */ "./lib/util.js");
/* harmony import */ var _lib_client_cache__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../lib/client-cache */ "./lib/client-cache.js");












var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;








var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a.Option;

var _initCache = Object(_lib_client_cache__WEBPACK_IMPORTED_MODULE_18__["default"])({
  genCacheKeyStrate: function genCacheKeyStrate(context) {
    return Object(_lib_util__WEBPACK_IMPORTED_MODULE_17__["genDetailCacheKeyStrate"])(context);
  }
}),
    cache = _initCache.cache,
    useCache = _initCache.useCache;

var IssueDetail = function IssueDetail(_ref) {
  var issue = _ref.issue;
  return __jsx("div", {
    className: "jsx-3019013689" + " " + "root"
  }, __jsx(_components_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    content: issue.body
  }), __jsx("div", {
    className: "jsx-3019013689" + " " + "actions"
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: issue.html_url,
    target: "_blank"
  }, "\u6253\u5F00issue\u8BA8\u8BBA\u9875\u9762")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "3019013689"
  }, ".root.jsx-3019013689{background:#fefefe;padding:20px;}.actions.jsx-3019013689{text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxyZWFjdFN0dWR5XFxOZXh0LUtvYS1HaXRIdWJcXG5leHQtZ2l0aHViXFxwYWdlc1xcZGV0YWlsXFxpc3N1ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHOEIsQUFLRixpQkFDbkIsRUFMZSxhQUNmIiwiZmlsZSI6IkQ6XFxyZWFjdFN0dWR5XFxOZXh0LUtvYS1HaXRIdWJcXG5leHQtZ2l0aHViXFxwYWdlc1xcZGV0YWlsXFxpc3N1ZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBTZWxlY3QgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFdpdGhSZXBvQmFzaWMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9XaXRoUmVwb0Jhc2ljJ1xyXG5pbXBvcnQgTWFya2Rvd25SZW5kZXJlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL01hcmtkb3duUmVuZGVyZXInXHJcbmltcG9ydCBTZWFyY2hVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcidcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL2xpYi9hcGknXHJcbmltcG9ydCB7IGdldFRpbWVGcm9tTm93LCBnZW5EZXRhaWxDYWNoZUtleVN0cmF0ZSwgZ2VuRGV0YWlsQ2FjaGVLZXkgfSBmcm9tICcuLi8uLi9saWIvdXRpbCdcclxuaW1wb3J0IGluaXRDYWNoZSBmcm9tICcuLi8uLi9saWIvY2xpZW50LWNhY2hlJ1xyXG5cclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdFxyXG5cclxuY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDYWNoZSh7XHJcbiAgZ2VuQ2FjaGVLZXlTdHJhdGU6IChjb250ZXh0KSA9PiB7XHJcbiAgICByZXR1cm4gZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUoY29udGV4dClcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgSXNzdWVEZXRhaWwgPSAoeyBpc3N1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8TWFya2Rvd25SZW5kZXJlciBjb250ZW50PXtpc3N1ZS5ib2R5fSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICA8QnV0dG9uIGhyZWY9e2lzc3VlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj7miZPlvIBpc3N1ZeiuqOiuuumhtemdojwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5yb290IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZWZlZmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IExhYmVsID0gKHsgbGFiZWwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImxhYmVsXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtsYWJlbC5uYW1lfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IC4xNWVtIDRweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIHJnYmEoMjcsMzEsMzUsLjEyKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMke2xhYmVsLmNvbG9yfTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBJc3N1ZUl0ZW0gPSAoeyBpc3N1ZSB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93RGV0YWlsKChzaG93KSA9PiAhc2hvdylcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInZpZXctYnRuXCJcclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgPuafpeeci1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpc3N1ZS5sYWJlbHMubWFwKChsYWJlbCkgPT4gPExhYmVsIGxhYmVsPXtsYWJlbH0ga2V5PXtsYWJlbC5pZH0gLz4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtnZXRUaW1lRnJvbU5vdyhpc3N1ZS51cGRhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0RldGFpbCA/IDxJc3N1ZURldGFpbCBpc3N1ZT17aXNzdWV9IC8+IDogbnVsbH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbCgudmlldy1idG4pIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJvb3QgKyAucm9vdCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tYWluLWluZm8gPiBoNiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnN1Yi1pbmZvIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZVF1ZXJ5KGNyZWF0b3IsIHN0YXRlLCBsYWJlbHMpIHtcclxuICBjb25zdCBjcmVhdG9yU3RyID0gY3JlYXRvciA/IGBjcmVhdG9yPSR7Y3JlYXRvcn1gIDogJydcclxuICBjb25zdCBzdGF0ZVN0ciA9IHN0YXRlID8gYHN0YXRlPSR7c3RhdGV9YCA6ICcnXHJcbiAgbGV0IGxhYmVsU3RyID0gJydcclxuICBpZiAobGFiZWxzICYmIGxhYmVscy5sZW5ndGggPiAwKSB7XHJcbiAgICBsYWJlbFN0ciA9IGBsYWJlbHM9JHtsYWJlbHMuam9pbignLCcpfWBcclxuICB9XHJcblxyXG4gIGNvbnN0IGFyciA9IFtdXHJcblxyXG4gIGlmIChjcmVhdG9yU3RyKSB7XHJcbiAgICBhcnIucHVzaChjcmVhdG9yU3RyKVxyXG4gIH1cclxuICBpZiAoc3RhdGVTdHIpIHtcclxuICAgIGFyci5wdXNoKHN0YXRlU3RyKVxyXG4gIH1cclxuICBpZiAobGFiZWxTdHIpIHtcclxuICAgIGFyci5wdXNoKGxhYmVsU3RyKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGA/JHthcnIuam9pbignJicpfWBcclxufVxyXG5cclxuY29uc3QgSXNzdWVzID0gKHsgc2VydmljZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgdXNlQ2FjaGUoZ2VuRGV0YWlsQ2FjaGVLZXkocm91dGVyKSwgeyBzZXJ2aWNlcyB9KVxyXG5cclxuICBjb25zdCB7IGluaXRJc3N1ZXMsIGxhYmVscyB9ID0gc2VydmljZXNcclxuICBjb25zdCBbY3JlYXRvciwgc2V0Q3JlYXRvcl0gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgW2lzc3VlU3RhdGUsIHNldElzc3VlU3RhdGVdID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtzZWxlY3RlZExhYmVscywgc2V0U2VsZWN0ZWRMYWJlbHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2lzc3Vlcywgc2V0SXNzdWVzXSA9IHVzZVN0YXRlKGluaXRJc3N1ZXMpXHJcbiAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBoYW5kbGVMYWJlbHNDaGFuZ2UgPSAoc2VsZWN0ZWQpID0+IHtcclxuICAgIHNldFNlbGVjdGVkTGFiZWxzKHNlbGVjdGVkKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0RmV0Y2hpbmcodHJ1ZSlcclxuICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0SXNzdWVzIH0gPSBhd2FpdCByZXF1ZXN0KHtcclxuICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzJHttYWtlUXVlcnkoY3JlYXRvciwgaXNzdWVTdGF0ZSwgc2VsZWN0ZWRMYWJlbHMpfWAsXHJcbiAgICB9KVxyXG4gICAgc2V0SXNzdWVzKHJlc3VsdElzc3VlcylcclxuICAgIHNldEZldGNoaW5nKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VsZWN0Q29tbWVuU3R5bGUgPSB7XHJcbiAgICBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBtYXJnaW5MZWZ0OiAyMCxcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxyXG4gICAgICAgIDxTZWFyY2hVc2VyXHJcbiAgICAgICAgICBzdHlsZT17c2VsZWN0Q29tbWVuU3R5bGV9XHJcbiAgICAgICAgICB2YWx1ZT17Y3JlYXRvcn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRDcmVhdG9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldElzc3VlU3RhdGV9XHJcbiAgICAgICAgICB2YWx1ZT17aXNzdWVTdGF0ZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54q25oCBXCJcclxuICAgICAgICAgIHN0eWxlPXtzZWxlY3RDb21tZW5TdHlsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiYWxsXCI+5YWo6YOoPC9PcHRpb24+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwib3BlblwiPm9wZW48L09wdGlvbj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjbG9zZWRcIj5jbG9zZWQ8L09wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuXHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVMYWJlbHNDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRMYWJlbHN9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhYmVsXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGZsZXhHcm93OiAxLCB3aWR0aDogMjAwLCBtYXJnaW46ICcwIDIwcHgnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xhYmVscy5tYXAoKGxhYmVsKSA9PiAoXHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xhYmVsLmlkfSBrZXk9e2xhYmVsLmlkfT5cclxuICAgICAgICAgICAgICB7bGFiZWwubmFtZX1cclxuICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBsb2FkaW5nPXtmZXRjaGluZ31cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogMTEgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDmkJzntKJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XHJcbiAgICAgICAge2lzc3Vlcy5tYXAoKGlzc3VlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPElzc3VlSXRlbSBrZXk9e2lzc3VlLmlkfSBpc3N1ZT17aXNzdWV9IC8+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaXNzdWVzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbklzc3Vlcy5nZXRJbml0aWFsUHJvcHMgPSBjYWNoZShhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeVxyXG4gIGNvbnN0IFtcclxuICAgIHsgZGF0YTogaW5pdElzc3VlcyB9LFxyXG4gICAgeyBkYXRhOiBsYWJlbHMgfSxcclxuICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICBbXHJcbiAgICAgIHJlcXVlc3QoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN0eC5yZXEsXHJcbiAgICAgICAgY3R4LnJlcyxcclxuICAgICAgKSxcclxuICAgICAgcmVxdWVzdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9sYWJlbHNgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3R4LnJlcSxcclxuICAgICAgICBjdHgucmVzLFxyXG4gICAgICApLFxyXG4gICAgXSxcclxuICApXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXJ2aWNlczoge1xyXG4gICAgICBpbml0SXNzdWVzLFxyXG4gICAgICBsYWJlbHMsXHJcbiAgICB9LFxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpdGhSZXBvQmFzaWMoSXNzdWVzLCAnaXNzdWVzJylcclxuIl19 */\n/*@ sourceURL=D:\\reactStudy\\Next-Koa-GitHub\\next-github\\pages\\detail\\issues.jsx */"));
};

var Label = function Label(_ref2) {
  var label = _ref2.label;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["1901604367", [label.color]]]) + " " + "label"
  }, label.name, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "1901604367",
    dynamic: [label.color]
  }, ".label.__jsx-style-dynamic-selector{margin-left:8px;height:20px;padding:.15em 4px;font-size:12px;font-weight:600;line-height:15px;border-radius:2px;box-shadow:inset 0 -1px 0 rgba(27,31,35,.12);background-color:#".concat(label.color, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxyZWFjdFN0dWR5XFxOZXh0LUtvYS1HaXRIdWJcXG5leHQtZ2l0aHViXFxwYWdlc1xcZGV0YWlsXFxpc3N1ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDb0IsQUFHMkIsZ0JBQ0osWUFDTSxrQkFDSCxlQUNDLGdCQUNDLGlCQUNDLGtCQUMyQiw2Q0FDRSwrQ0FDakQiLCJmaWxlIjoiRDpcXHJlYWN0U3R1ZHlcXE5leHQtS29hLUdpdEh1YlxcbmV4dC1naXRodWJcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIFNlbGVjdCB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgV2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dpdGhSZXBvQmFzaWMnXHJcbmltcG9ydCBNYXJrZG93blJlbmRlcmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFya2Rvd25SZW5kZXJlcidcclxuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hVc2VyJ1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuaW1wb3J0IHsgZ2V0VGltZUZyb21Ob3csIGdlbkRldGFpbENhY2hlS2V5U3RyYXRlLCBnZW5EZXRhaWxDYWNoZUtleSB9IGZyb20gJy4uLy4uL2xpYi91dGlsJ1xyXG5pbXBvcnQgaW5pdENhY2hlIGZyb20gJy4uLy4uL2xpYi9jbGllbnQtY2FjaGUnXHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0XHJcblxyXG5jb25zdCB7IGNhY2hlLCB1c2VDYWNoZSB9ID0gaW5pdENhY2hlKHtcclxuICBnZW5DYWNoZUtleVN0cmF0ZTogKGNvbnRleHQpID0+IHtcclxuICAgIHJldHVybiBnZW5EZXRhaWxDYWNoZUtleVN0cmF0ZShjb250ZXh0KVxyXG4gIH0sXHJcbn0pXHJcblxyXG5jb25zdCBJc3N1ZURldGFpbCA9ICh7IGlzc3VlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxNYXJrZG93blJlbmRlcmVyIGNvbnRlbnQ9e2lzc3VlLmJvZHl9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPuaJk+W8gGlzc3Vl6K6o6K666aG16Z2iPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTGFiZWwgPSAoeyBsYWJlbCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibGFiZWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2xhYmVsLm5hbWV9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogLjE1ZW0gNHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgcmdiYSgyNywzMSwzNSwuMTIpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIyR7bGFiZWwuY29sb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IElzc3VlSXRlbSA9ICh7IGlzc3VlIH0pID0+IHtcclxuICBjb25zdCBbc2hvd0RldGFpbCwgc2V0U2hvd0RldGFpbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dEZXRhaWwoKHNob3cpID0+ICFzaG93KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVcIj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidmlldy1idG5cIlxyXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICA+5p+l55yLXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgIDxBdmF0YXIgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlzc3VlLmxhYmVscy5tYXAoKGxhYmVsKSA9PiA8TGFiZWwgbGFiZWw9e2xhYmVsfSBrZXk9e2xhYmVsLmlkfSAvPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldFRpbWVGcm9tTm93KGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93RGV0YWlsID8gPElzc3VlRGV0YWlsIGlzc3VlPXtpc3N1ZX0gLz4gOiBudWxsfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC52aWV3LWJ0bikge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDEwcHhcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucm9vdCArIC5yb290IHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3ViLWluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdWItaW5mbyA+IHNwYW4gKyBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVscykge1xyXG4gIGNvbnN0IGNyZWF0b3JTdHIgPSBjcmVhdG9yID8gYGNyZWF0b3I9JHtjcmVhdG9yfWAgOiAnJ1xyXG4gIGNvbnN0IHN0YXRlU3RyID0gc3RhdGUgPyBgc3RhdGU9JHtzdGF0ZX1gIDogJydcclxuICBsZXQgbGFiZWxTdHIgPSAnJ1xyXG4gIGlmIChsYWJlbHMgJiYgbGFiZWxzLmxlbmd0aCA+IDApIHtcclxuICAgIGxhYmVsU3RyID0gYGxhYmVscz0ke2xhYmVscy5qb2luKCcsJyl9YFxyXG4gIH1cclxuXHJcbiAgY29uc3QgYXJyID0gW11cclxuXHJcbiAgaWYgKGNyZWF0b3JTdHIpIHtcclxuICAgIGFyci5wdXNoKGNyZWF0b3JTdHIpXHJcbiAgfVxyXG4gIGlmIChzdGF0ZVN0cikge1xyXG4gICAgYXJyLnB1c2goc3RhdGVTdHIpXHJcbiAgfVxyXG4gIGlmIChsYWJlbFN0cikge1xyXG4gICAgYXJyLnB1c2gobGFiZWxTdHIpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gYD8ke2Fyci5qb2luKCcmJyl9YFxyXG59XHJcblxyXG5jb25zdCBJc3N1ZXMgPSAoeyBzZXJ2aWNlcyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICB1c2VDYWNoZShnZW5EZXRhaWxDYWNoZUtleShyb3V0ZXIpLCB7IHNlcnZpY2VzIH0pXHJcblxyXG4gIGNvbnN0IHsgaW5pdElzc3VlcywgbGFiZWxzIH0gPSBzZXJ2aWNlc1xyXG4gIGNvbnN0IFtjcmVhdG9yLCBzZXRDcmVhdG9yXSA9IHVzZVN0YXRlKClcclxuICBjb25zdCBbaXNzdWVTdGF0ZSwgc2V0SXNzdWVTdGF0ZV0gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgW3NlbGVjdGVkTGFiZWxzLCBzZXRTZWxlY3RlZExhYmVsc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbaXNzdWVzLCBzZXRJc3N1ZXNdID0gdXNlU3RhdGUoaW5pdElzc3VlcylcclxuICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGhhbmRsZUxhYmVsc0NoYW5nZSA9IChzZWxlY3RlZCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRMYWJlbHMoc2VsZWN0ZWQpXHJcbiAgfVxyXG5cclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRGZXRjaGluZyh0cnVlKVxyXG4gICAgY29uc3QgeyBkYXRhOiByZXN1bHRJc3N1ZXMgfSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXMke21ha2VRdWVyeShjcmVhdG9yLCBpc3N1ZVN0YXRlLCBzZWxlY3RlZExhYmVscyl9YCxcclxuICAgIH0pXHJcbiAgICBzZXRJc3N1ZXMocmVzdWx0SXNzdWVzKVxyXG4gICAgc2V0RmV0Y2hpbmcoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWxlY3RDb21tZW5TdHlsZSA9IHtcclxuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIG1hcmdpbkxlZnQ6IDIwLFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgPFNlYXJjaFVzZXJcclxuICAgICAgICAgIHN0eWxlPXtzZWxlY3RDb21tZW5TdHlsZX1cclxuICAgICAgICAgIHZhbHVlPXtjcmVhdG9yfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldENyZWF0b3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICBvbkNoYW5nZT17c2V0SXNzdWVTdGF0ZX1cclxuICAgICAgICAgIHZhbHVlPXtpc3N1ZVN0YXRlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLnirbmgIFcIlxyXG4gICAgICAgICAgc3R5bGU9e3NlbGVjdENvbW1lblN0eWxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJhbGxcIj7lhajpg6g8L09wdGlvbj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJvcGVuXCI+b3BlbjwvT3B0aW9uPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNsb3NlZFwiPmNsb3NlZDwvT3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhYmVsc0NoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZExhYmVsc31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFiZWxcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxleEdyb3c6IDEsIHdpZHRoOiAyMDAsIG1hcmdpbjogJzAgMjBweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGFiZWxzLm1hcCgobGFiZWwpID0+IChcclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17bGFiZWwuaWR9IGtleT17bGFiZWwuaWR9PlxyXG4gICAgICAgICAgICAgIHtsYWJlbC5uYW1lfVxyXG4gICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGxvYWRpbmc9e2ZldGNoaW5nfVxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICB7aXNzdWVzLm1hcCgoaXNzdWUpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8SXNzdWVJdGVtIGtleT17aXNzdWUuaWR9IGlzc3VlPXtpc3N1ZX0gLz5cclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGNhY2hlKGFzeW5jICh7IGN0eCB9KSA9PiB7XHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5XHJcbiAgY29uc3QgW1xyXG4gICAgeyBkYXRhOiBpbml0SXNzdWVzIH0sXHJcbiAgICB7IGRhdGE6IGxhYmVscyB9LFxyXG4gIF0gPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgIFtcclxuICAgICAgcmVxdWVzdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3R4LnJlcSxcclxuICAgICAgICBjdHgucmVzLFxyXG4gICAgICApLFxyXG4gICAgICByZXF1ZXN0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2AsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdHgucmVxLFxyXG4gICAgICAgIGN0eC5yZXMsXHJcbiAgICAgICksXHJcbiAgICBdLFxyXG4gIClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNlcnZpY2VzOiB7XHJcbiAgICAgIGluaXRJc3N1ZXMsXHJcbiAgICAgIGxhYmVscyxcclxuICAgIH0sXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2l0aFJlcG9CYXNpYyhJc3N1ZXMsICdpc3N1ZXMnKVxyXG4iXX0= */\n/*@ sourceURL=D:\\reactStudy\\Next-Koa-GitHub\\next-github\\pages\\detail\\issues.jsx */"))));
};

var IssueItem = function IssueItem(_ref3) {
  var issue = _ref3.issue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      showDetail = _useState[0],
      setShowDetail = _useState[1];

  var toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_11__["useCallback"])(function () {
    setShowDetail(function (show) {
      return !show;
    });
  }, []);
  return __jsx("div", {
    className: "jsx-1792689352" + " " + "root"
  }, __jsx("div", {
    className: "jsx-1792689352" + " " + "issue"
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleShowDetail,
    className: "view-btn",
    type: "primary",
    size: "small"
  }, "\u67E5\u770B"), __jsx("div", {
    className: "jsx-1792689352" + " " + "avatar"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    src: issue.user.avatar_url,
    shape: "square",
    size: 50
  })), __jsx("div", {
    className: "jsx-1792689352" + " " + "main-info"
  }, __jsx("h6", {
    className: "jsx-1792689352"
  }, __jsx("span", {
    className: "jsx-1792689352"
  }, issue.title), issue.labels.map(function (label) {
    return __jsx(Label, {
      label: label,
      key: label.id
    });
  })), __jsx("p", {
    className: "jsx-1792689352" + " " + "sub-info"
  }, __jsx("span", {
    className: "jsx-1792689352"
  }, "Updated at ", Object(_lib_util__WEBPACK_IMPORTED_MODULE_17__["getTimeFromNow"])(issue.updated_at))))), showDetail ? __jsx(IssueDetail, {
    issue: issue
  }) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "1792689352"
  }, ".view-btn{position:absolute;right:10px;top:10px;}.root.jsx-1792689352+.root.jsx-1792689352{border-top:1px solid #eee;}.issue.jsx-1792689352{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-1792689352:hover{background:#fafafa;}.main-info.jsx-1792689352>h6.jsx-1792689352{padding-right:40px;font-size:16px;word-break:break-all;}.avatar.jsx-1792689352{margin-right:20px;}.sub-info.jsx-1792689352{margin-bottom:0;}.sub-info.jsx-1792689352>span.jsx-1792689352+span.jsx-1792689352{display:inline-block;margin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxyZWFjdFN0dWR5XFxOZXh0LUtvYS1HaXRIdWJcXG5leHQtZ2l0aHViXFxwYWdlc1xcZGV0YWlsXFxpc3N1ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9HUyxBQUcrQixBQU1RLEFBSWIsQUFNTSxBQUlBLEFBTUQsQUFJRixBQUlLLGdCQUh2QixFQTlCYSxBQTBCYixDQVZBLEFBSWlCLEVBY0UsS0E1Qm5CLEdBSkQsS0FtQndCLElBbkJ2QixBQWlDaUIsZUFDakIsRUFkQSxtQkFab0Isa0JBQ0wsYUFDZiIsImZpbGUiOiJEOlxccmVhY3RTdHVkeVxcTmV4dC1Lb2EtR2l0SHViXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgU2VsZWN0IH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBXaXRoUmVwb0Jhc2ljIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV2l0aFJlcG9CYXNpYydcclxuaW1wb3J0IE1hcmtkb3duUmVuZGVyZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NYXJrZG93blJlbmRlcmVyJ1xyXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaFVzZXInXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi9saWIvYXBpJ1xyXG5pbXBvcnQgeyBnZXRUaW1lRnJvbU5vdywgZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUsIGdlbkRldGFpbENhY2hlS2V5IH0gZnJvbSAnLi4vLi4vbGliL3V0aWwnXHJcbmltcG9ydCBpbml0Q2FjaGUgZnJvbSAnLi4vLi4vbGliL2NsaWVudC1jYWNoZSdcclxuXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3RcclxuXHJcbmNvbnN0IHsgY2FjaGUsIHVzZUNhY2hlIH0gPSBpbml0Q2FjaGUoe1xyXG4gIGdlbkNhY2hlS2V5U3RyYXRlOiAoY29udGV4dCkgPT4ge1xyXG4gICAgcmV0dXJuIGdlbkRldGFpbENhY2hlS2V5U3RyYXRlKGNvbnRleHQpXHJcbiAgfSxcclxufSlcclxuXHJcbmNvbnN0IElzc3VlRGV0YWlsID0gKHsgaXNzdWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPE1hcmtkb3duUmVuZGVyZXIgY29udGVudD17aXNzdWUuYm9keX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBocmVmPXtpc3N1ZS5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+5omT5byAaXNzdWXorqjorrrpobXpnaI8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBMYWJlbCA9ICh7IGxhYmVsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBjbGFzc05hbWU9XCJsYWJlbFwiXHJcbiAgICAgID5cclxuICAgICAgICB7bGFiZWwubmFtZX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAuMTVlbSA0cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCByZ2JhKDI3LDMxLDM1LC4xMik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjJHtsYWJlbC5jb2xvcn07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgSXNzdWVJdGVtID0gKHsgaXNzdWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0RldGFpbCgoc2hvdykgPT4gIXNob3cpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ2aWV3LWJ0blwiXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgID7mn6XnnItcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaXNzdWUubGFiZWxzLm1hcCgobGFiZWwpID0+IDxMYWJlbCBsYWJlbD17bGFiZWx9IGtleT17bGFiZWwuaWR9IC8+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cclxuICAgICAgICAgICAgPHNwYW4+VXBkYXRlZCBhdCB7Z2V0VGltZUZyb21Ob3coaXNzdWUudXBkYXRlZF9hdCl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dEZXRhaWwgPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGx9XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLnZpZXctYnRuKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5yb290ICsgLnJvb3Qge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaXNzdWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmlzc3VlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1pbmZvID4gaDYge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VRdWVyeShjcmVhdG9yLCBzdGF0ZSwgbGFiZWxzKSB7XHJcbiAgY29uc3QgY3JlYXRvclN0ciA9IGNyZWF0b3IgPyBgY3JlYXRvcj0ke2NyZWF0b3J9YCA6ICcnXHJcbiAgY29uc3Qgc3RhdGVTdHIgPSBzdGF0ZSA/IGBzdGF0ZT0ke3N0YXRlfWAgOiAnJ1xyXG4gIGxldCBsYWJlbFN0ciA9ICcnXHJcbiAgaWYgKGxhYmVscyAmJiBsYWJlbHMubGVuZ3RoID4gMCkge1xyXG4gICAgbGFiZWxTdHIgPSBgbGFiZWxzPSR7bGFiZWxzLmpvaW4oJywnKX1gXHJcbiAgfVxyXG5cclxuICBjb25zdCBhcnIgPSBbXVxyXG5cclxuICBpZiAoY3JlYXRvclN0cikge1xyXG4gICAgYXJyLnB1c2goY3JlYXRvclN0cilcclxuICB9XHJcbiAgaWYgKHN0YXRlU3RyKSB7XHJcbiAgICBhcnIucHVzaChzdGF0ZVN0cilcclxuICB9XHJcbiAgaWYgKGxhYmVsU3RyKSB7XHJcbiAgICBhcnIucHVzaChsYWJlbFN0cilcclxuICB9XHJcblxyXG4gIHJldHVybiBgPyR7YXJyLmpvaW4oJyYnKX1gXHJcbn1cclxuXHJcbmNvbnN0IElzc3VlcyA9ICh7IHNlcnZpY2VzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIHVzZUNhY2hlKGdlbkRldGFpbENhY2hlS2V5KHJvdXRlciksIHsgc2VydmljZXMgfSlcclxuXHJcbiAgY29uc3QgeyBpbml0SXNzdWVzLCBsYWJlbHMgfSA9IHNlcnZpY2VzXHJcbiAgY29uc3QgW2NyZWF0b3IsIHNldENyZWF0b3JdID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtpc3N1ZVN0YXRlLCBzZXRJc3N1ZVN0YXRlXSA9IHVzZVN0YXRlKClcclxuICBjb25zdCBbc2VsZWN0ZWRMYWJlbHMsIHNldFNlbGVjdGVkTGFiZWxzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtpc3N1ZXMsIHNldElzc3Vlc10gPSB1c2VTdGF0ZShpbml0SXNzdWVzKVxyXG4gIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgaGFuZGxlTGFiZWxzQ2hhbmdlID0gKHNlbGVjdGVkKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZExhYmVscyhzZWxlY3RlZClcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldEZldGNoaW5nKHRydWUpXHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdElzc3VlcyB9ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3VlcyR7bWFrZVF1ZXJ5KGNyZWF0b3IsIGlzc3VlU3RhdGUsIHNlbGVjdGVkTGFiZWxzKX1gLFxyXG4gICAgfSlcclxuICAgIHNldElzc3VlcyhyZXN1bHRJc3N1ZXMpXHJcbiAgICBzZXRGZXRjaGluZyhmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbGVjdENvbW1lblN0eWxlID0ge1xyXG4gICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXHJcbiAgICB3aWR0aDogMjAwLFxyXG4gICAgbWFyZ2luTGVmdDogMjAsXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICA8U2VhcmNoVXNlclxyXG4gICAgICAgICAgc3R5bGU9e3NlbGVjdENvbW1lblN0eWxlfVxyXG4gICAgICAgICAgdmFsdWU9e2NyZWF0b3J9XHJcbiAgICAgICAgICBvbkNoYW5nZT17c2V0Q3JlYXRvcn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJc3N1ZVN0YXRlfVxyXG4gICAgICAgICAgdmFsdWU9e2lzc3VlU3RhdGV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIueKtuaAgVwiXHJcbiAgICAgICAgICBzdHlsZT17c2VsZWN0Q29tbWVuU3R5bGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImFsbFwiPuWFqOmDqDwvT3B0aW9uPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIm9wZW5cIj5vcGVuPC9PcHRpb24+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY2xvc2VkXCI+Y2xvc2VkPC9PcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTGFiZWxzQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkTGFiZWxzfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogMSwgd2lkdGg6IDIwMCwgbWFyZ2luOiAnMCAyMHB4JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsYWJlbHMubWFwKChsYWJlbCkgPT4gKFxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtsYWJlbC5pZH0ga2V5PXtsYWJlbC5pZH0+XHJcbiAgICAgICAgICAgICAge2xhYmVsLm5hbWV9XHJcbiAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgbG9hZGluZz17ZmV0Y2hpbmd9XHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDExIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg5pCc57SiXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlc1wiPlxyXG4gICAgICAgIHtpc3N1ZXMubWFwKChpc3N1ZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxJc3N1ZUl0ZW0ga2V5PXtpc3N1ZS5pZH0gaXNzdWU9e2lzc3VlfSAvPlxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmlzc3VlcyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzID0gY2FjaGUoYXN5bmMgKHsgY3R4IH0pID0+IHtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnlcclxuICBjb25zdCBbXHJcbiAgICB7IGRhdGE6IGluaXRJc3N1ZXMgfSxcclxuICAgIHsgZGF0YTogbGFiZWxzIH0sXHJcbiAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgW1xyXG4gICAgICByZXF1ZXN0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2AsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdHgucmVxLFxyXG4gICAgICAgIGN0eC5yZXMsXHJcbiAgICAgICksXHJcbiAgICAgIHJlcXVlc3QoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vbGFiZWxzYCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN0eC5yZXEsXHJcbiAgICAgICAgY3R4LnJlcyxcclxuICAgICAgKSxcclxuICAgIF0sXHJcbiAgKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2VydmljZXM6IHtcclxuICAgICAgaW5pdElzc3VlcyxcclxuICAgICAgbGFiZWxzLFxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaXRoUmVwb0Jhc2ljKElzc3VlcywgJ2lzc3VlcycpXHJcbiJdfQ== */\n/*@ sourceURL=D:\\reactStudy\\Next-Koa-GitHub\\next-github\\pages\\detail\\issues.jsx */"));
};

function makeQuery(creator, state, labels) {
  var creatorStr = creator ? "creator=".concat(creator) : '';
  var stateStr = state ? "state=".concat(state) : '';
  var labelStr = '';

  if (labels && labels.length > 0) {
    labelStr = "labels=".concat(labels.join(','));
  }

  var arr = [];

  if (creatorStr) {
    arr.push(creatorStr);
  }

  if (stateStr) {
    arr.push(stateStr);
  }

  if (labelStr) {
    arr.push(labelStr);
  }

  return "?".concat(arr.join('&'));
}

var Issues = function Issues(_ref4) {
  var services = _ref4.services;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  useCache(Object(_lib_util__WEBPACK_IMPORTED_MODULE_17__["genDetailCacheKey"])(router), {
    services: services
  });
  var initIssues = services.initIssues,
      labels = services.labels;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(),
      creator = _useState2[0],
      setCreator = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(),
      issueState = _useState3[0],
      setIssueState = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      selectedLabels = _useState4[0],
      setSelectedLabels = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(initIssues),
      issues = _useState5[0],
      setIssues = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      fetching = _useState6[0],
      setFetching = _useState6[1];

  var handleLabelsChange = function handleLabelsChange(selected) {
    setSelectedLabels(selected);
  };

  var _router$query = router.query,
      owner = _router$query.owner,
      name = _router$query.name;

  var handleSearch =
  /*#__PURE__*/
  function () {
    var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var _ref6, resultIssues;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setFetching(true);
              _context.next = 3;
              return Object(_lib_api__WEBPACK_IMPORTED_MODULE_16__["request"])({
                url: "/repos/".concat(owner, "/").concat(name, "/issues").concat(makeQuery(creator, issueState, selectedLabels))
              });

            case 3:
              _ref6 = _context.sent;
              resultIssues = _ref6.data;
              setIssues(resultIssues);
              setFetching(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSearch() {
      return _ref5.apply(this, arguments);
    };
  }();

  var selectCommenStyle = {
    alignSelf: 'flex-start',
    width: 200,
    marginLeft: 20
  };
  return __jsx("div", {
    className: "jsx-33133419" + " " + "root"
  }, __jsx("div", {
    className: "jsx-33133419" + " " + "search"
  }, __jsx(_components_SearchUser__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: selectCommenStyle,
    value: creator,
    onChange: setCreator
  }), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    allowClear: true,
    onChange: setIssueState,
    value: issueState,
    placeholder: "\u72B6\u6001",
    style: selectCommenStyle
  }, __jsx(Option, {
    value: "all"
  }, "\u5168\u90E8"), __jsx(Option, {
    value: "open"
  }, "open"), __jsx(Option, {
    value: "closed"
  }, "closed")), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    allowClear: true,
    mode: "multiple",
    onChange: handleLabelsChange,
    value: selectedLabels,
    placeholder: "Label",
    style: {
      flexGrow: 1,
      width: 200,
      margin: '0 20px'
    }
  }, labels.map(function (label) {
    return __jsx(Option, {
      value: label.id,
      key: label.id
    }, label.name);
  })), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    loading: fetching,
    onClick: handleSearch,
    size: "small",
    type: "primary",
    style: {
      marginRight: 11
    }
  }, "\u641C\u7D22")), __jsx("div", {
    className: "jsx-33133419" + " " + "issues"
  }, issues.map(function (issue) {
    return __jsx(IssueItem, {
      key: issue.id,
      issue: issue
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "33133419"
  }, ".issues.jsx-33133419{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}.search.jsx-33133419{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxyZWFjdFN0dWR5XFxOZXh0LUtvYS1HaXRIdWJcXG5leHQtZ2l0aHViXFxwYWdlc1xcZGV0YWlsXFxpc3N1ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlQUyxBQUdtQyxBQU9ULHNCQU5LLGtCQUNDLG1CQUNILGVBS0csQ0FKckIsNEZBS0EiLCJmaWxlIjoiRDpcXHJlYWN0U3R1ZHlcXE5leHQtS29hLUdpdEh1YlxcbmV4dC1naXRodWJcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIFNlbGVjdCB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgV2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dpdGhSZXBvQmFzaWMnXHJcbmltcG9ydCBNYXJrZG93blJlbmRlcmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFya2Rvd25SZW5kZXJlcidcclxuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hVc2VyJ1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuaW1wb3J0IHsgZ2V0VGltZUZyb21Ob3csIGdlbkRldGFpbENhY2hlS2V5U3RyYXRlLCBnZW5EZXRhaWxDYWNoZUtleSB9IGZyb20gJy4uLy4uL2xpYi91dGlsJ1xyXG5pbXBvcnQgaW5pdENhY2hlIGZyb20gJy4uLy4uL2xpYi9jbGllbnQtY2FjaGUnXHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0XHJcblxyXG5jb25zdCB7IGNhY2hlLCB1c2VDYWNoZSB9ID0gaW5pdENhY2hlKHtcclxuICBnZW5DYWNoZUtleVN0cmF0ZTogKGNvbnRleHQpID0+IHtcclxuICAgIHJldHVybiBnZW5EZXRhaWxDYWNoZUtleVN0cmF0ZShjb250ZXh0KVxyXG4gIH0sXHJcbn0pXHJcblxyXG5jb25zdCBJc3N1ZURldGFpbCA9ICh7IGlzc3VlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxNYXJrZG93blJlbmRlcmVyIGNvbnRlbnQ9e2lzc3VlLmJvZHl9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPuaJk+W8gGlzc3Vl6K6o6K666aG16Z2iPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTGFiZWwgPSAoeyBsYWJlbCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibGFiZWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2xhYmVsLm5hbWV9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogLjE1ZW0gNHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgcmdiYSgyNywzMSwzNSwuMTIpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIyR7bGFiZWwuY29sb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IElzc3VlSXRlbSA9ICh7IGlzc3VlIH0pID0+IHtcclxuICBjb25zdCBbc2hvd0RldGFpbCwgc2V0U2hvd0RldGFpbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dEZXRhaWwoKHNob3cpID0+ICFzaG93KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVcIj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidmlldy1idG5cIlxyXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICA+5p+l55yLXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgIDxBdmF0YXIgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlzc3VlLmxhYmVscy5tYXAoKGxhYmVsKSA9PiA8TGFiZWwgbGFiZWw9e2xhYmVsfSBrZXk9e2xhYmVsLmlkfSAvPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldFRpbWVGcm9tTm93KGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93RGV0YWlsID8gPElzc3VlRGV0YWlsIGlzc3VlPXtpc3N1ZX0gLz4gOiBudWxsfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC52aWV3LWJ0bikge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDEwcHhcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucm9vdCArIC5yb290IHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3ViLWluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdWItaW5mbyA+IHNwYW4gKyBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVscykge1xyXG4gIGNvbnN0IGNyZWF0b3JTdHIgPSBjcmVhdG9yID8gYGNyZWF0b3I9JHtjcmVhdG9yfWAgOiAnJ1xyXG4gIGNvbnN0IHN0YXRlU3RyID0gc3RhdGUgPyBgc3RhdGU9JHtzdGF0ZX1gIDogJydcclxuICBsZXQgbGFiZWxTdHIgPSAnJ1xyXG4gIGlmIChsYWJlbHMgJiYgbGFiZWxzLmxlbmd0aCA+IDApIHtcclxuICAgIGxhYmVsU3RyID0gYGxhYmVscz0ke2xhYmVscy5qb2luKCcsJyl9YFxyXG4gIH1cclxuXHJcbiAgY29uc3QgYXJyID0gW11cclxuXHJcbiAgaWYgKGNyZWF0b3JTdHIpIHtcclxuICAgIGFyci5wdXNoKGNyZWF0b3JTdHIpXHJcbiAgfVxyXG4gIGlmIChzdGF0ZVN0cikge1xyXG4gICAgYXJyLnB1c2goc3RhdGVTdHIpXHJcbiAgfVxyXG4gIGlmIChsYWJlbFN0cikge1xyXG4gICAgYXJyLnB1c2gobGFiZWxTdHIpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gYD8ke2Fyci5qb2luKCcmJyl9YFxyXG59XHJcblxyXG5jb25zdCBJc3N1ZXMgPSAoeyBzZXJ2aWNlcyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICB1c2VDYWNoZShnZW5EZXRhaWxDYWNoZUtleShyb3V0ZXIpLCB7IHNlcnZpY2VzIH0pXHJcblxyXG4gIGNvbnN0IHsgaW5pdElzc3VlcywgbGFiZWxzIH0gPSBzZXJ2aWNlc1xyXG4gIGNvbnN0IFtjcmVhdG9yLCBzZXRDcmVhdG9yXSA9IHVzZVN0YXRlKClcclxuICBjb25zdCBbaXNzdWVTdGF0ZSwgc2V0SXNzdWVTdGF0ZV0gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgW3NlbGVjdGVkTGFiZWxzLCBzZXRTZWxlY3RlZExhYmVsc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbaXNzdWVzLCBzZXRJc3N1ZXNdID0gdXNlU3RhdGUoaW5pdElzc3VlcylcclxuICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGhhbmRsZUxhYmVsc0NoYW5nZSA9IChzZWxlY3RlZCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRMYWJlbHMoc2VsZWN0ZWQpXHJcbiAgfVxyXG5cclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRGZXRjaGluZyh0cnVlKVxyXG4gICAgY29uc3QgeyBkYXRhOiByZXN1bHRJc3N1ZXMgfSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXMke21ha2VRdWVyeShjcmVhdG9yLCBpc3N1ZVN0YXRlLCBzZWxlY3RlZExhYmVscyl9YCxcclxuICAgIH0pXHJcbiAgICBzZXRJc3N1ZXMocmVzdWx0SXNzdWVzKVxyXG4gICAgc2V0RmV0Y2hpbmcoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWxlY3RDb21tZW5TdHlsZSA9IHtcclxuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIG1hcmdpbkxlZnQ6IDIwLFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgPFNlYXJjaFVzZXJcclxuICAgICAgICAgIHN0eWxlPXtzZWxlY3RDb21tZW5TdHlsZX1cclxuICAgICAgICAgIHZhbHVlPXtjcmVhdG9yfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldENyZWF0b3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICBvbkNoYW5nZT17c2V0SXNzdWVTdGF0ZX1cclxuICAgICAgICAgIHZhbHVlPXtpc3N1ZVN0YXRlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLnirbmgIFcIlxyXG4gICAgICAgICAgc3R5bGU9e3NlbGVjdENvbW1lblN0eWxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJhbGxcIj7lhajpg6g8L09wdGlvbj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJvcGVuXCI+b3BlbjwvT3B0aW9uPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNsb3NlZFwiPmNsb3NlZDwvT3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhYmVsc0NoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZExhYmVsc31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFiZWxcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxleEdyb3c6IDEsIHdpZHRoOiAyMDAsIG1hcmdpbjogJzAgMjBweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGFiZWxzLm1hcCgobGFiZWwpID0+IChcclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17bGFiZWwuaWR9IGtleT17bGFiZWwuaWR9PlxyXG4gICAgICAgICAgICAgIHtsYWJlbC5uYW1lfVxyXG4gICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGxvYWRpbmc9e2ZldGNoaW5nfVxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICB7aXNzdWVzLm1hcCgoaXNzdWUpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8SXNzdWVJdGVtIGtleT17aXNzdWUuaWR9IGlzc3VlPXtpc3N1ZX0gLz5cclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGNhY2hlKGFzeW5jICh7IGN0eCB9KSA9PiB7XHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5XHJcbiAgY29uc3QgW1xyXG4gICAgeyBkYXRhOiBpbml0SXNzdWVzIH0sXHJcbiAgICB7IGRhdGE6IGxhYmVscyB9LFxyXG4gIF0gPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgIFtcclxuICAgICAgcmVxdWVzdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3R4LnJlcSxcclxuICAgICAgICBjdHgucmVzLFxyXG4gICAgICApLFxyXG4gICAgICByZXF1ZXN0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2AsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdHgucmVxLFxyXG4gICAgICAgIGN0eC5yZXMsXHJcbiAgICAgICksXHJcbiAgICBdLFxyXG4gIClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNlcnZpY2VzOiB7XHJcbiAgICAgIGluaXRJc3N1ZXMsXHJcbiAgICAgIGxhYmVscyxcclxuICAgIH0sXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2l0aFJlcG9CYXNpYyhJc3N1ZXMsICdpc3N1ZXMnKVxyXG4iXX0= */\n/*@ sourceURL=D:\\reactStudy\\Next-Koa-GitHub\\next-github\\pages\\detail\\issues.jsx */"));
};

Issues.getInitialProps = cache(
/*#__PURE__*/
function () {
  var _ref8 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(_ref7) {
    var ctx, _ctx$query, owner, name, _ref9, _ref10, initIssues, labels;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ctx = _ref7.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context2.next = 4;
            return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all([Object(_lib_api__WEBPACK_IMPORTED_MODULE_16__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res), Object(_lib_api__WEBPACK_IMPORTED_MODULE_16__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/labels")
            }, ctx.req, ctx.res)]);

          case 4:
            _ref9 = _context2.sent;
            _ref10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref9, 2);
            initIssues = _ref10[0].data;
            labels = _ref10[1].data;
            return _context2.abrupt("return", {
              services: {
                initIssues: initIssues,
                labels: labels
              }
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref8.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_WithRepoBasic__WEBPACK_IMPORTED_MODULE_13__["default"])(Issues, 'issues'));

/***/ })

})
//# sourceMappingURL=issues.js.928f0af29e876aa66ec0.hot-update.js.map