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
    data: props.data
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReceiptItem, {
    data: props.data
  }))));
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
/******/ 	__webpack_require__.h = () => ("e2ec870b3b4befe67b50")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMl9Qb2RzdW1vd2FuaWUvMDFfWmFkYW5pZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgZGF0YUxpc3QgZnJvbSBcIi4vZGF0YS9wcm9kdWN0c1wiXG5cbmZ1bmN0aW9uIFJlY2VpcHRIZWFkZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdW08L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBSZWNlaXB0SXRlbXMocHJvcHMpIHtcbiAgICBsZXQgdG90YWwgPSAwXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtwcm9wcy5kYXRhLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gKGVsLnNpbmdsZV9wcmljZSAqIGVsLnF0eSlcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUmVjZWlwdEl0ZW0ocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHRkPntwcm9wcy5uYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3Byb3BzLnNpbmdsZV9wcmljZS50b0ZpeGVkKDIpfSB6xYI8L3RkPlxuICAgICAgICAgICAgPHRkPntwcm9wcy5xdHl9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57KHByb3BzLnNpbmdsZV9wcmljZSAqIHByb3BzLnF0eSkudG9GaXhlZCgyKX0gesWCPC90ZD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBSZWNlaXB0Rm9vdGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+U1VNPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+LS0tPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+LS0tPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLnRvdGFsLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUmVjZWlwdChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UmVjZWlwdEhlYWRlciBkYXRhPXtwcm9wcy5kYXRhfT5cbiAgICAgICAgICAgICAgICA8UmVjZWlwdEl0ZW1zIGRhdGE9e3Byb3BzLmRhdGF9PlxuICAgICAgICAgICAgICAgICAgICA8UmVjZWlwdEl0ZW0gZGF0YT17cHJvcHMuZGF0YX0vPlxuICAgICAgICAgICAgICAgIDwvUmVjZWlwdEl0ZW1zPlxuICAgICAgICAgICAgICAgIHsvKjxSZWNlaXB0Rm9vdGVyLz4qL31cbiAgICAgICAgICAgIDwvUmVjZWlwdEhlYWRlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxSZWNlaXB0IGRhdGE9e2RhdGFMaXN0fS8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUyZWM4NzBiM2I0YmVmZTY3YjUwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImRhdGFMaXN0IiwiUmVjZWlwdEhlYWRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJSZWNlaXB0SXRlbXMiLCJ0b3RhbCIsImRhdGEiLCJtYXAiLCJlbCIsInNpbmdsZV9wcmljZSIsInF0eSIsIlJlY2VpcHRJdGVtIiwibmFtZSIsInRvRml4ZWQiLCJSZWNlaXB0Rm9vdGVyIiwiUmVjZWlwdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==