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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Sum")), props.children)));
}
function ReceiptItems(props) {
  var total = 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, props.data.map(function (el) {
    total += el.single_price * el.qty;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: el.code
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.single_price.toFixed(2), " z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, (el.single_price * el.qty).toFixed(2), " z\u0142"));
  }));
}
function ReceiptItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
}
function ReceiptFooter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "SUM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "---"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "---"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, props.total.toFixed(2))));
}
function Receipt(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReceiptHeader, {
    data: props.data
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReceiptItems, {
    data: props.data
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReceiptFooter, {
    total: props.total
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
/******/ 	__webpack_require__.h = () => ("ddbe44941639c705aeab")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3BGbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDJfUG9kc3Vtb3dhbmllLzAxX1phZGFuaWUvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IGRhdGFMaXN0IGZyb20gXCIuL2RhdGEvcHJvZHVjdHNcIlxuXG5mdW5jdGlvbiBSZWNlaXB0SGVhZGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlN1bTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUmVjZWlwdEl0ZW1zKHByb3BzKSB7XG4gICAgbGV0IHRvdGFsID0gMFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7cHJvcHMuZGF0YS5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IChlbC5zaW5nbGVfcHJpY2UgKiBlbC5xdHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17ZWwuY29kZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VsLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZWwuc2luZ2xlX3ByaWNlLnRvRml4ZWQoMil9IHrFgjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VsLnF0eX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnsoZWwuc2luZ2xlX3ByaWNlICogZWwucXR5KS50b0ZpeGVkKDIpfSB6xYI8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFJlY2VpcHRJdGVtKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBSZWNlaXB0Rm9vdGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+U1VNPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+LS0tPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+LS0tPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLnRvdGFsLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUmVjZWlwdChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UmVjZWlwdEhlYWRlciBkYXRhPXtwcm9wcy5kYXRhfT5cbiAgICAgICAgICAgICAgICA8UmVjZWlwdEl0ZW1zIGRhdGE9e3Byb3BzLmRhdGF9PlxuICAgICAgICAgICAgICAgICAgICB7Lyo8UmVjZWlwdEl0ZW0vPiovfVxuICAgICAgICAgICAgICAgIDwvUmVjZWlwdEl0ZW1zPlxuICAgICAgICAgICAgICAgIDxSZWNlaXB0Rm9vdGVyIHRvdGFsPXtwcm9wcy50b3RhbH0vPlxuICAgICAgICAgICAgPC9SZWNlaXB0SGVhZGVyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFJlY2VpcHQgZGF0YT17ZGF0YUxpc3R9Lz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGRiZTQ0OTQxNjM5YzcwNWFlYWJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiZGF0YUxpc3QiLCJSZWNlaXB0SGVhZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIlJlY2VpcHRJdGVtcyIsInRvdGFsIiwiZGF0YSIsIm1hcCIsImVsIiwic2luZ2xlX3ByaWNlIiwicXR5Iiwia2V5IiwiY29kZSIsIm5hbWUiLCJ0b0ZpeGVkIiwiUmVjZWlwdEl0ZW0iLCJSZWNlaXB0Rm9vdGVyIiwiUmVjZWlwdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==