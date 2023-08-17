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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.single_price.toFixed(2), " z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, (el.single_price * el.qty).toFixed(2), " z\u0142"));
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReceiptFooter, null)));
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
/******/ 	__webpack_require__.h = () => ("06d85ccef1743b65988b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZHN1bW93YW5pZS8wMV9aYWRhbmllL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBkYXRhTGlzdCBmcm9tIFwiLi9kYXRhL3Byb2R1Y3RzXCJcblxuZnVuY3Rpb24gUmVjZWlwdEhlYWRlcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlN1bTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFJlY2VpcHRJdGVtcyhwcm9wcykge1xuICAgIGxldCB0b3RhbCA9IDBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge3Byb3BzLmRhdGEubWFwKGVsID0+IHtcbiAgICAgICAgICAgICAgICB0b3RhbCArPSAoZWwuc2luZ2xlX3ByaWNlICogZWwucXR5KVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZWwubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlbC5zaW5nbGVfcHJpY2UudG9GaXhlZCgyKX0gesWCPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZWwucXR5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+eyhlbC5zaW5nbGVfcHJpY2UgKiBlbC5xdHkpLnRvRml4ZWQoMil9IHrFgjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUmVjZWlwdEl0ZW0ocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFJlY2VpcHRGb290ZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5TVU08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4tLS08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4tLS08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMudG90YWwudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBSZWNlaXB0KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxSZWNlaXB0SGVhZGVyIGRhdGE9e3Byb3BzLmRhdGF9PlxuICAgICAgICAgICAgICAgIDxSZWNlaXB0SXRlbXMgZGF0YT17cHJvcHMuZGF0YX0+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxSZWNlaXB0SXRlbS8+Ki99XG4gICAgICAgICAgICAgICAgPC9SZWNlaXB0SXRlbXM+XG4gICAgICAgICAgICAgICAgPFJlY2VpcHRGb290ZXIvPlxuICAgICAgICAgICAgPC9SZWNlaXB0SGVhZGVyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFJlY2VpcHQgZGF0YT17ZGF0YUxpc3R9Lz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDZkODVjY2VmMTc0M2I2NTk4OGJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiZGF0YUxpc3QiLCJSZWNlaXB0SGVhZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIlJlY2VpcHRJdGVtcyIsInRvdGFsIiwiZGF0YSIsIm1hcCIsImVsIiwic2luZ2xlX3ByaWNlIiwicXR5IiwibmFtZSIsInRvRml4ZWQiLCJSZWNlaXB0SXRlbSIsIlJlY2VpcHRGb290ZXIiLCJSZWNlaXB0IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9