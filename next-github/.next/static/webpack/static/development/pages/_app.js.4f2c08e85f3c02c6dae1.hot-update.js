webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/layout.jsx":
/*!*******************************!*\
  !*** ./components/layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/avatar/style/css */ "./node_modules/antd/lib/avatar/style/css.js");
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;


var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a.Footer;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(''),
      search = _useState[0],
      setSearch = _useState[1];

  var handleSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function (event) {
    setSearch(event.target.value);
  }, [setSearch]);
  var handleOnSearch = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function () {}, []);
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx(Header, null, __jsx("div", {
    className: "jsx-4158932565" + " " + "header-inner"
  }, __jsx("div", {
    className: "jsx-4158932565" + " " + "header-left"
  }, __jsx("div", {
    className: "jsx-4158932565" + " " + "logo"
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    type: "github"
  })), __jsx("div", {
    className: "jsx-4158932565"
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Search, {
    placeholder: "\u641C\u7D22\u4ED3\u5E93",
    value: search,
    onChange: handleSearchChange,
    onSearch: handleOnSearch
  }))), __jsx("div", {
    className: "jsx-4158932565" + " " + "header-right"
  }, __jsx("div", {
    className: "jsx-4158932565" + " " + "user"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 40,
    icon: "user"
  }))))), __jsx(Content, null, children), __jsx(Footer, null, "Develop by yq @", __jsx("a", {
    href: "mailto:yq@hotmail.com",
    className: "jsx-4158932565"
  }, "yq@.com")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "4158932565"
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzdHVkeVxcTmV4dC1Lb2EtR2l0SHViXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcbGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRGtCIiwiZmlsZSI6IkQ6XFxzdHVkeVxcTmV4dC1Lb2EtR2l0SHViXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcbGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnV0dG9uLCBMYXlvdXQsIEljb24sIElucHV0LCBBdmF0YXIgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZXZlbnQgPT4ge1xyXG4gICAgICBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfSxcclxuICAgIFtzZXRTZWFyY2hdXHJcbiAgKVxyXG5cclxuICBjb25zdCBoYW5kbGVPblNlYXJjaCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5uZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cImdpdGh1YlwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5pCc57Si5LuT5bqTXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHNlYXJjaCB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGhhbmRsZVNlYXJjaENoYW5nZSB9XHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17IGhhbmRsZU9uU2VhcmNoIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPVwidXNlclwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxDb250ZW50PnsgY2hpbGRyZW4gfTwvQ29udGVudD5cclxuICAgICAgPEZvb3Rlcj5cclxuICAgICAgICBEZXZlbG9wIGJ5IHlxIEBcclxuICAgICAgICA8YSBocmVmPVwibWFpbHRvOnlxQGhvdG1haWwuY29tXCI+eXFALmNvbTwvYT5cclxuICAgICAgPC9Gb290ZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxuICBcclxufSJdfQ== */\n/*@ sourceURL=D:\\study\\Next-Koa-GitHub\\next-github\\components\\layout.jsx */"));
});

/***/ })

})
//# sourceMappingURL=_app.js.4f2c08e85f3c02c6dae1.hot-update.js.map