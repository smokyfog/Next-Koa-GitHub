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
    className: "jsx-3744958757" + " " + "header-inner"
  }, __jsx("div", {
    className: "jsx-3744958757" + " " + "header-left"
  }, __jsx("div", {
    className: "jsx-3744958757" + " " + "logo"
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    type: "github",
    style: githubIconStyle
  })), __jsx("div", {
    className: "jsx-3744958757"
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Search, {
    placeholder: "\u641C\u7D22\u4ED3\u5E93",
    value: search,
    onChange: handleSearchChange,
    onSearch: handleOnSearch
  }))), __jsx("div", {
    className: "jsx-3744958757" + " " + "header-right"
  }, __jsx("div", {
    className: "jsx-3744958757" + " " + "user"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 40,
    icon: "user"
  }))))), __jsx(Content, null, children), __jsx(Footer, {
    style: footerStyle
  }, "Develop by yq @", __jsx("a", {
    href: "mailto:yq@hotmail.com",
    className: "jsx-3744958757"
  }, "yq@.com")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "2430828743"
  }, ".header-inner.jsx-3744958757{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-left.jsx-3744958757{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzdHVkeVxcTmV4dC1Lb2EtR2l0SHViXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcbGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RGtCLEFBR3dCLEFBSUEsMEVBRmhCLEFBSUEseUdBQUMsVUFKQSIsImZpbGUiOiJEOlxcc3R1ZHlcXE5leHQtS29hLUdpdEh1YlxcbmV4dC1naXRodWJcXGNvbXBvbmVudHNcXGxheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiwgTGF5b3V0LCBJY29uLCBJbnB1dCwgQXZhdGFyIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIGV2ZW50ID0+IHtcclxuICAgICAgc2V0U2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH0sXHJcbiAgICBbc2V0U2VhcmNoXVxyXG4gIClcclxuXHJcbiAgY29uc3QgaGFuZGxlT25TZWFyY2ggPSB1c2VDYWxsYmFjayhcclxuICAgICgpID0+IHtcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgW11cclxuICApXHJcbiAgY29uc3QgZ2l0aHViSWNvblN0eWxlID0ge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250U2l6ZTogNDAsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcGFkZGluZ1RvcDogMTAsXHJcbiAgICBtYXJnaW5SaWdodDogMjBcclxuICB9XHJcbiAgY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJnaXRodWJcIiBzdHlsZT17IGdpdGh1Ykljb25TdHlsZSB9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5pCc57Si5LuT5bqTXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHNlYXJjaCB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGhhbmRsZVNlYXJjaENoYW5nZSB9XHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17IGhhbmRsZU9uU2VhcmNoIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPVwidXNlclwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxDb250ZW50PnsgY2hpbGRyZW4gfTwvQ29udGVudD5cclxuICAgICAgPEZvb3RlciBzdHlsZT17IGZvb3RlclN0eWxlIH0+XHJcbiAgICAgICAgRGV2ZWxvcCBieSB5cSBAXHJcbiAgICAgICAgPGEgaHJlZj1cIm1haWx0bzp5cUBob3RtYWlsLmNvbVwiPnlxQC5jb208L2E+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXItbGVmdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbiAgXHJcbn0iXX0= */\n/*@ sourceURL=D:\\study\\Next-Koa-GitHub\\next-github\\components\\layout.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "2707908459"
  }, "#__next{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzdHVkeVxcTmV4dC1Lb2EtR2l0SHViXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcbGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RXlCLEFBR3VCLFlBQ2QiLCJmaWxlIjoiRDpcXHN0dWR5XFxOZXh0LUtvYS1HaXRIdWJcXG5leHQtZ2l0aHViXFxjb21wb25lbnRzXFxsYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24sIExheW91dCwgSWNvbiwgSW5wdXQsIEF2YXRhciB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBldmVudCA9PiB7XHJcbiAgICAgIHNldFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9LFxyXG4gICAgW3NldFNlYXJjaF1cclxuICApXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uU2VhcmNoID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKVxyXG4gIGNvbnN0IGdpdGh1Ykljb25TdHlsZSA9IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6IDQwLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBhZGRpbmdUb3A6IDEwLFxyXG4gICAgbWFyZ2luUmlnaHQ6IDIwXHJcbiAgfVxyXG4gIGNvbnN0IGZvb3RlclN0eWxlID0ge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZ2l0aHViXCIgc3R5bGU9eyBnaXRodWJJY29uU3R5bGUgfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuaQnOe0ouS7k+W6k1wiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBzZWFyY2ggfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBoYW5kbGVTZWFyY2hDaGFuZ2UgfVxyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g9eyBoYW5kbGVPblNlYXJjaCB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gaWNvbj1cInVzZXJcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8Q29udGVudD57IGNoaWxkcmVuIH08L0NvbnRlbnQ+XHJcbiAgICAgIDxGb290ZXIgc3R5bGU9eyBmb290ZXJTdHlsZSB9PlxyXG4gICAgICAgIERldmVsb3AgYnkgeXEgQFxyXG4gICAgICAgIDxhIGhyZWY9XCJtYWlsdG86eXFAaG90bWFpbC5jb21cIj55cUAuY29tPC9hPlxyXG4gICAgICA8L0Zvb3Rlcj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyLWxlZnQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydFxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICNfX25leHQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG4gIFxyXG59Il19 */\n/*@ sourceURL=D:\\study\\Next-Koa-GitHub\\next-github\\components\\layout.jsx */"));
});

/***/ })

})
//# sourceMappingURL=_app.js.1d52895ffbaaf92c8777.hot-update.js.map