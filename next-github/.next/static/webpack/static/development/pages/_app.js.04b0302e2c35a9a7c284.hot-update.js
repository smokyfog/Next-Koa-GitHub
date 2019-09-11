webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: add, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__);





var initialState = {
  count: 0
};
var userInitialState = {
  username: 'jack',
  age: 18
};
var ADD = 'ADD';

function countReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(state, action);

  switch (action.type) {
    case ADD:
      return {
        count: state.count + (action.num || 1)
      };

    default:
      return state;
  }
}

var UPDATE_USERNAME = 'UPDATE_USERNAME';

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_USERNAME:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        username: action.name
      });

    default:
      return state;
  }
}

var allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  counter: countReducer,
  user: userReducer
});
var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(allReducers, {
  counter: initialState,
  user: userInitialState
}, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]))); // action creatore
// 同步的dispatch

function add(num) {
  return {
    type: ADD,
    num: num
  };
} // 异步的dispatch

function addAsync(num) {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(add(num));
    }, 1000);
  };
} // console.log(store)
// console.log(store.getState())


store.dispatch(add(3));
store.subscribe(function () {
  // 
  console.log(store.getState());
});
store.dispatch(addAsync(5)); // store.dispatch({ type: ADD })

store.dispatch({
  type: UPDATE_USERNAME,
  name: 'lilei'
});
function initializeStore(state) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(allReducers, _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, {
    counter: initialState,
    user: userInitialState
  }, state), // {
  //   counter: initialState,
  //   user: userInitialState
  // },
  Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"])));
  return store;
}

/***/ })

})
//# sourceMappingURL=_app.js.04b0302e2c35a9a7c284.hot-update.js.map