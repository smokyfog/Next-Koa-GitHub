webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var initialState = {
  count: 0
};
var ADD = 'ADD';

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(state, action);

  switch (action) {
    case Add:
      return {
        count: state.count + 1
      };

    default:
      return state;
  }
}

var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState);
console.log(store);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

})
//# sourceMappingURL=index.js.7fa710c3a51afa12ced2.hot-update.js.map