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
  }), props.children);
}
function ReceiptItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
}
function ReceiptFooter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "SUM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "---"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "---"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, props.props.total.toFixed(2))));
}
function Receipt(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReceiptHeader, {
    data: props.data
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReceiptItems, {
    data: props.data
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReceiptFooter, null))));
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
/******/ 	__webpack_require__.h = () => ("aa5ab1df176c5b8e9ea6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZmFkMjU0NTk2MzI1NTc0ZDM5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBQ047QUFFdEMsU0FBU0csYUFBYUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQzFCLG9CQUNJSiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUE7SUFBT08sU0FBUyxFQUFDO0VBQU8sZ0JBQ3BCUCwwREFBQSwwQkFDSUEsMERBQUEsYUFBSSxNQUFRLENBQUMsZUFDYkEsMERBQUEsYUFBSSxPQUFTLENBQUMsZUFDZEEsMERBQUEsYUFBSSxVQUFZLENBQUMsZUFDakJBLDBEQUFBLGFBQUksS0FBTyxDQUNYLENBQUMsRUFDSkksS0FBSyxDQUFDSSxRQUNKLENBQ1QsQ0FBQztBQUVYO0FBRUEsU0FBU0MsWUFBWUEsQ0FBQ0wsS0FBSyxFQUFFO0VBQ3pCLElBQUlNLEtBQUssR0FBRyxDQUFDO0VBQ2Isb0JBQ0lWLDBEQUFBLENBQUFBLHVEQUFBLFFBQ0tJLEtBQUssQ0FBQ08sSUFBSSxDQUFDQyxHQUFHLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQ2xCSCxLQUFLLElBQUtHLEVBQUUsQ0FBQ0MsWUFBWSxHQUFHRCxFQUFFLENBQUNFLEdBQUk7SUFDbkMsb0JBQ0lmLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFLYSxFQUFFLENBQUNHLElBQVMsQ0FBQyxlQUNsQmhCLDBEQUFBLGFBQUthLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsVUFBTyxDQUFDLGVBQ3hDakIsMERBQUEsYUFBS2EsRUFBRSxDQUFDRSxHQUFRLENBQUMsZUFDakJmLDBEQUFBLGFBQUssQ0FBQ2EsRUFBRSxDQUFDQyxZQUFZLEdBQUdELEVBQUUsQ0FBQ0UsR0FBRyxFQUFFRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsVUFBTyxDQUNsRCxDQUFDO0VBRWIsQ0FBQyxDQUFDLEVBQ0RiLEtBQUssQ0FBQ0ksUUFDVCxDQUFDO0FBRVg7QUFFQSxTQUFTVSxXQUFXQSxDQUFDZCxLQUFLLEVBQUU7RUFDeEIsb0JBQ0lKLDBEQUFBLENBQUFBLHVEQUFBLE1BQ0UsQ0FBQztBQUVYO0FBRUEsU0FBU21CLGFBQWFBLENBQUNmLEtBQUssRUFBRTtFQUMxQixvQkFDSUosMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFJLEtBQU8sQ0FBQyxlQUNaQSwwREFBQSxhQUFJLEtBQU8sQ0FBQyxlQUNaQSwwREFBQSxhQUFJLEtBQU8sQ0FBQyxlQUNaQSwwREFBQSxhQUFLSSxLQUFLLENBQUNBLEtBQUssQ0FBQ00sS0FBSyxDQUFDTyxPQUFPLENBQUMsQ0FBQyxDQUFNLENBQ3RDLENBQ04sQ0FBQztBQUVYO0FBRUEsU0FBU0csT0FBT0EsQ0FBQ2hCLEtBQUssRUFBRTtFQUNwQixvQkFDSUosMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNHLGFBQWE7SUFBQ1EsSUFBSSxFQUFFUCxLQUFLLENBQUNPO0VBQUssZ0JBQzVCWCwwREFBQSxDQUFDUyxZQUFZO0lBQUNFLElBQUksRUFBRVAsS0FBSyxDQUFDTztFQUFLLGdCQUUzQlgsMERBQUEsQ0FBQ21CLGFBQWEsTUFBQyxDQUNMLENBQ0gsQ0FDakIsQ0FBQztBQUVYO0FBRUEsU0FBU0UsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0lyQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ29CLE9BQU87SUFBQ1QsSUFBSSxFQUFFVCxzREFBUUE7RUFBQyxDQUFDLENBQzNCLENBQUM7QUFFWDtBQUVBLElBQU1vQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd4Qiw0REFBVSxDQUFDcUIsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQzFCLDBEQUFBLENBQUNxQixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ25GbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDJfUG9kc3Vtb3dhbmllLzAxX1phZGFuaWUvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IGRhdGFMaXN0IGZyb20gXCIuL2RhdGEvcHJvZHVjdHNcIlxuXG5mdW5jdGlvbiBSZWNlaXB0SGVhZGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+U3VtPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUmVjZWlwdEl0ZW1zKHByb3BzKSB7XG4gICAgbGV0IHRvdGFsID0gMFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7cHJvcHMuZGF0YS5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IChlbC5zaW5nbGVfcHJpY2UgKiBlbC5xdHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlbC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VsLnNpbmdsZV9wcmljZS50b0ZpeGVkKDIpfSB6xYI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlbC5xdHl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57KGVsLnNpbmdsZV9wcmljZSAqIGVsLnF0eSkudG9GaXhlZCgyKX0gesWCPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBSZWNlaXB0SXRlbShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUmVjZWlwdEZvb3Rlcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlNVTTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPi0tLTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPi0tLTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntwcm9wcy5wcm9wcy50b3RhbC50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFJlY2VpcHQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFJlY2VpcHRIZWFkZXIgZGF0YT17cHJvcHMuZGF0YX0+XG4gICAgICAgICAgICAgICAgPFJlY2VpcHRJdGVtcyBkYXRhPXtwcm9wcy5kYXRhfT5cbiAgICAgICAgICAgICAgICAgICAgey8qPFJlY2VpcHRJdGVtLz4qL31cbiAgICAgICAgICAgICAgICAgICAgPFJlY2VpcHRGb290ZXIvPlxuICAgICAgICAgICAgICAgIDwvUmVjZWlwdEl0ZW1zPlxuICAgICAgICAgICAgPC9SZWNlaXB0SGVhZGVyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFJlY2VpcHQgZGF0YT17ZGF0YUxpc3R9Lz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWE1YWIxZGYxNzZjNWI4ZTllYTZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiZGF0YUxpc3QiLCJSZWNlaXB0SGVhZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIlJlY2VpcHRJdGVtcyIsInRvdGFsIiwiZGF0YSIsIm1hcCIsImVsIiwic2luZ2xlX3ByaWNlIiwicXR5IiwibmFtZSIsInRvRml4ZWQiLCJSZWNlaXB0SXRlbSIsIlJlY2VpcHRGb290ZXIiLCJSZWNlaXB0IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9