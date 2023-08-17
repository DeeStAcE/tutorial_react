"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



function ReceiptHeader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Sum")), props.children));
}
function ReceiptItems(props) {
  var total = 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, props.data.map(function (el) {
    total += el.single_price * el.qty;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, props.children);
  }));
}
function ReceiptItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, props.single_price.toFixed(2), " z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, props.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, (props.single_price * props.qty).toFixed(2), " z\u0142"));
}
function ReceiptFooter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "SUM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "---"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "---"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, props.total.toFixed(2))));
}
function Receipt(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReceiptHeader, {
    data: props.data
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReceiptItems, {
    data: props.data.data
  })));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Receipt, {
    data: _data_products__WEBPACK_IMPORTED_MODULE_2__["default"]
  }));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("68bbce94be3feff0cfc3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmllLzAxX1phZGFuaWUvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IGRhdGFMaXN0IGZyb20gXCIuL2RhdGEvcHJvZHVjdHNcIlxuXG5mdW5jdGlvbiBSZWNlaXB0SGVhZGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+U3VtPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUmVjZWlwdEl0ZW1zKHByb3BzKSB7XG4gICAgbGV0IHRvdGFsID0gMFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7cHJvcHMuZGF0YS5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IChlbC5zaW5nbGVfcHJpY2UgKiBlbC5xdHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFJlY2VpcHRJdGVtKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDx0ZD57cHJvcHMubmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPntwcm9wcy5zaW5nbGVfcHJpY2UudG9GaXhlZCgyKX0gesWCPC90ZD5cbiAgICAgICAgICAgIDx0ZD57cHJvcHMucXR5fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+eyhwcm9wcy5zaW5nbGVfcHJpY2UgKiBwcm9wcy5xdHkpLnRvRml4ZWQoMil9IHrFgjwvdGQ+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUmVjZWlwdEZvb3Rlcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlNVTTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPi0tLTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPi0tLTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntwcm9wcy50b3RhbC50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFJlY2VpcHQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFJlY2VpcHRIZWFkZXIgZGF0YT17cHJvcHMuZGF0YX0+XG4gICAgICAgICAgICAgICAgPFJlY2VpcHRJdGVtcyBkYXRhPXtwcm9wcy5kYXRhLmRhdGF9PlxuICAgICAgICAgICAgICAgIHsvKiAgICA8UmVjZWlwdEl0ZW0vPiovfVxuICAgICAgICAgICAgICAgIDwvUmVjZWlwdEl0ZW1zPlxuICAgICAgICAgICAgICAgIHsvKjxSZWNlaXB0Rm9vdGVyLz4qL31cbiAgICAgICAgICAgIDwvUmVjZWlwdEhlYWRlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxSZWNlaXB0IGRhdGE9e2RhdGFMaXN0fS8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY4YmJjZTk0YmUzZmVmZjBjZmMzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImRhdGFMaXN0IiwiUmVjZWlwdEhlYWRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJSZWNlaXB0SXRlbXMiLCJ0b3RhbCIsImRhdGEiLCJtYXAiLCJlbCIsInNpbmdsZV9wcmljZSIsInF0eSIsIlJlY2VpcHRJdGVtIiwibmFtZSIsInRvRml4ZWQiLCJSZWNlaXB0Rm9vdGVyIiwiUmVjZWlwdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==