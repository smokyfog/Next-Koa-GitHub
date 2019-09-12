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
  var githubIconStyle = {
    color: 'white',
    fontSize: 40,
    display: 'block',
    paddingTop: 10,
    marginRight: 20
  };
  var footerStyle = {
    textAlign: 'center'
  };
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx(Header, null, __jsx("div", {
    className: "jsx-1443768956" + " " + "header-inner"
  }, __jsx("div", {
    className: "jsx-1443768956" + " " + "header-left"
  }, __jsx("div", {
    className: "jsx-1443768956" + " " + "logo"
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    type: "github",
    style: githubIconStyle
  })), __jsx("div", {
    className: "jsx-1443768956"
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Search, {
    placeholder: "\u641C\u7D22\u4ED3\u5E93",
    value: search,
    onChange: handleSearchChange,
    onSearch: handleOnSearch
  }))), __jsx("div", {
    className: "jsx-1443768956" + " " + "header-right"
  }, __jsx("div", {
    className: "jsx-1443768956" + " " + "user"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 40,
    icon: "user"
  }))))), __jsx(Content, null, children), __jsx(Footer, {
    style: footerStyle
  }, "Develop by yq @", __jsx("a", {
    href: "mailto:yq@hotmail.com",
    className: "jsx-1443768956"
  }, "yq@.com")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "2430828743"
  }, ".header-inner.jsx-1443768956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-left.jsx-1443768956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzdHVkeVxcTmV4dC1Lb2EtR2l0SHViXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcbGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RGtCLEFBR3dCLEFBSUEsMEVBRmhCLEFBSUEseUdBQUMsVUFKQSIsImZpbGUiOiJEOlxcc3R1ZHlcXE5leHQtS29hLUdpdEh1YlxcbmV4dC1naXRodWJcXGNvbXBvbmVudHNcXGxheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiwgTGF5b3V0LCBJY29uLCBJbnB1dCwgQXZhdGFyIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIGV2ZW50ID0+IHtcclxuICAgICAgc2V0U2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH0sXHJcbiAgICBbc2V0U2VhcmNoXVxyXG4gIClcclxuXHJcbiAgY29uc3QgaGFuZGxlT25TZWFyY2ggPSB1c2VDYWxsYmFjayhcclxuICAgICgpID0+IHtcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgW11cclxuICApXHJcbiAgY29uc3QgZ2l0aHViSWNvblN0eWxlID0ge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250U2l6ZTogNDAsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcGFkZGluZ1RvcDogMTAsXHJcbiAgICBtYXJnaW5SaWdodDogMjBcclxuICB9XHJcbiAgY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJnaXRodWJcIiBzdHlsZT17IGdpdGh1Ykljb25TdHlsZSB9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5pCc57Si5LuT5bqTXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHNlYXJjaCB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGhhbmRsZVNlYXJjaENoYW5nZSB9XHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17IGhhbmRsZU9uU2VhcmNoIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPVwidXNlclwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxDb250ZW50PnsgY2hpbGRyZW4gfTwvQ29udGVudD5cclxuICAgICAgPEZvb3RlciBzdHlsZT17IGZvb3RlclN0eWxlIH0+XHJcbiAgICAgICAgRGV2ZWxvcCBieSB5cSBAXHJcbiAgICAgICAgPGEgaHJlZj1cIm1haWx0bzp5cUBob3RtYWlsLmNvbVwiPnlxQC5jb208L2E+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXItbGVmdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbnQtbGF5b3V0IHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG4gIFxyXG59Il19 */\n/*@ sourceURL=D:\\study\\Next-Koa-GitHub\\next-github\\components\\layout.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "681961682"
  }, "#__next{height:100%;}.ant-layout{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzdHVkeVxcTmV4dC1Lb2EtR2l0SHViXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcbGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RXlCLEFBR3VCLEFBSWYsWUFIQyxBQUdBIiwiZmlsZSI6IkQ6XFxzdHVkeVxcTmV4dC1Lb2EtR2l0SHViXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcbGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnV0dG9uLCBMYXlvdXQsIEljb24sIElucHV0LCBBdmF0YXIgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZXZlbnQgPT4ge1xyXG4gICAgICBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfSxcclxuICAgIFtzZXRTZWFyY2hdXHJcbiAgKVxyXG5cclxuICBjb25zdCBoYW5kbGVPblNlYXJjaCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gIClcclxuICBjb25zdCBnaXRodWJJY29uU3R5bGUgPSB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRTaXplOiA0MCxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBwYWRkaW5nVG9wOiAxMCxcclxuICAgIG1hcmdpblJpZ2h0OiAyMFxyXG4gIH1cclxuICBjb25zdCBmb290ZXJTdHlsZSA9IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5uZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cImdpdGh1YlwiIHN0eWxlPXsgZ2l0aHViSWNvblN0eWxlIH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLmkJzntKLku5PlupNcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXsgc2VhcmNoIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgaGFuZGxlU2VhcmNoQ2hhbmdlIH1cclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXsgaGFuZGxlT25TZWFyY2ggfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IGljb249XCJ1c2VyXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPENvbnRlbnQ+eyBjaGlsZHJlbiB9PC9Db250ZW50PlxyXG4gICAgICA8Rm9vdGVyIHN0eWxlPXsgZm9vdGVyU3R5bGUgfT5cclxuICAgICAgICBEZXZlbG9wIGJ5IHlxIEBcclxuICAgICAgICA8YSBocmVmPVwibWFpbHRvOnlxQGhvdG1haWwuY29tXCI+eXFALmNvbTwvYT5cclxuICAgICAgPC9Gb290ZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaGVhZGVyLWlubmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlci1sZWZ0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnRcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAjX19uZXh0IHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFudC1sYXlvdXQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlXHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbiAgXHJcbn0iXX0= */\n/*@ sourceURL=D:\\study\\Next-Koa-GitHub\\next-github\\components\\layout.jsx */"));
});

/***/ })

})
//# sourceMappingURL=_app.js.22285344ef2553e6458a.hot-update.js.map