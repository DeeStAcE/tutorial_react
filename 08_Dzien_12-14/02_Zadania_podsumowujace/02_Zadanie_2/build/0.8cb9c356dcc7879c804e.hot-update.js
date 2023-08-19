"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MathQuestionGame() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10),
    _useState2 = _slicedToArray(_useState, 2),
    timeLeft = _useState2[0],
    setTimeLeft = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    operation = _useState4[0],
    setOperation = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    num1 = _useState6[0],
    setNum1 = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    num2 = _useState8[0],
    setNum2 = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    result = _useState10[0],
    setResult = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    buttons = _useState12[0],
    setButtons = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    message = _useState14[0],
    setMessage = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    gameOver = _useState16[0],
    setGameOver = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var arrayOfEquation = ["+", "-", "*"];
    var typeOfEquation = arrayOfEquation[Math.floor(Math.random() * arrayOfEquation.length)];
    var number1 = Math.floor(Math.random() * (10 - 1) + 1);
    var number2 = Math.floor(Math.random() * (10 - 1) + 1);
    var result = 0;
    setNum1(number1);
    setNum2(number2);
    setOperation(typeOfEquation);
    switch (typeOfEquation) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
    }
    setResult(result);
    var wrongAnswers = [];
    while (wrongAnswers.length < 3) {
      var randomWrongAnswer = Math.floor(Math.random() * (100 - -9) + -9);
      if (randomWrongAnswer !== result && !wrongAnswers.includes(randomWrongAnswer)) {
        wrongAnswers.push(randomWrongAnswer);
      }
    }
    var allAnswers = [].concat(wrongAnswers, [result]);
    shuffle(allAnswers);
    setButtons(allAnswers);
    var myInterval = setInterval(function () {
      setTimeLeft(function (prevTime) {
        return prevTime - 1;
      });
    }, 1000);
    return function () {
      clearInterval(myInterval);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (timeLeft <= 0) {
      setGameOver(true);
      setMessage("Czas minął!");
    }
  }, [timeLeft]);
  function shuffle(a) {
    for (var i = a.length; i; i--) {
      var j = Math.floor(Math.random() * i);
      var _ref = [a[j], a[i - 1]];
      a[i - 1] = _ref[0];
      a[j] = _ref[1];
    }
  }
  function handleClick(value) {
    if (!gameOver) {
      if (value === result) {
        setMessage("Gratulacje");
      } else {
        setMessage("Błędna odpowiedź :(");
      }
      setGameOver(true);
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, num1, " ", operation, " ", num2, " ="), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, buttons.map(function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: index,
      onClick: function onClick() {
        return handleClick(value);
      },
      disabled: gameOver
    }, value);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, gameOver ? message : "00:".concat(timeLeft < 10 ? "0" : "").concat(timeLeft)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathQuestionGame);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b9ddb24d11ad19c11101")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44Y2I5YzM1NmRjYzc4NzljODA0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxTQUFTRyxnQkFBZ0JBLENBQUEsRUFBRztFQUN4QixJQUFBQyxTQUFBLEdBQWdDSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFyQ0csUUFBUSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQUM1QixJQUFBSSxVQUFBLEdBQWtDUiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBUyxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUF2Q0UsU0FBUyxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUM5QixJQUFBRyxVQUFBLEdBQXdCWiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBYSxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUE1QkUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTtFQUNwQixJQUFBRyxVQUFBLEdBQXdCaEIsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQWlCLFVBQUEsR0FBQVosY0FBQSxDQUFBVyxVQUFBO0lBQTVCRSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBNEJwQiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBcUIsV0FBQSxHQUFBaEIsY0FBQSxDQUFBZSxVQUFBO0lBQWhDRSxNQUFNLEdBQUFELFdBQUE7SUFBRUUsU0FBUyxHQUFBRixXQUFBO0VBQ3hCLElBQUFHLFdBQUEsR0FBOEJ4QiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBeUIsV0FBQSxHQUFBcEIsY0FBQSxDQUFBbUIsV0FBQTtJQUFuQ0UsT0FBTyxHQUFBRCxXQUFBO0lBQUVFLFVBQVUsR0FBQUYsV0FBQTtFQUMxQixJQUFBRyxXQUFBLEdBQThCNUIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTZCLFdBQUEsR0FBQXhCLGNBQUEsQ0FBQXVCLFdBQUE7SUFBbkNFLE9BQU8sR0FBQUQsV0FBQTtJQUFFRSxVQUFVLEdBQUFGLFdBQUE7RUFDMUIsSUFBQUcsV0FBQSxHQUFnQ2hDLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFpQyxXQUFBLEdBQUE1QixjQUFBLENBQUEyQixXQUFBO0lBQXhDRSxRQUFRLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBRTVCaEMsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBTW1DLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3ZDLElBQU1DLGNBQWMsR0FBR0QsZUFBZSxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHSixlQUFlLENBQUNLLE1BQU0sQ0FBQyxDQUFDO0lBQzFGLElBQU1DLE9BQU8sR0FBR0osSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELElBQU1HLE9BQU8sR0FBR0wsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELElBQUlsQixNQUFNLEdBQUcsQ0FBQztJQUVkUCxPQUFPLENBQUMyQixPQUFPLENBQUM7SUFDaEJ2QixPQUFPLENBQUN3QixPQUFPLENBQUM7SUFDaEJoQyxZQUFZLENBQUMwQixjQUFjLENBQUM7SUFFNUIsUUFBUUEsY0FBYztNQUNsQixLQUFLLEdBQUc7UUFDSmYsTUFBTSxHQUFHb0IsT0FBTyxHQUFHQyxPQUFPO1FBQzFCO01BQ0osS0FBSyxHQUFHO1FBQ0pyQixNQUFNLEdBQUdvQixPQUFPLEdBQUdDLE9BQU87UUFDMUI7TUFDSixLQUFLLEdBQUc7UUFDSnJCLE1BQU0sR0FBR29CLE9BQU8sR0FBR0MsT0FBTztRQUMxQjtJQUNSO0lBRUFwQixTQUFTLENBQUNELE1BQU0sQ0FBQztJQUVqQixJQUFNc0IsWUFBWSxHQUFHLEVBQUU7SUFDdkIsT0FBT0EsWUFBWSxDQUFDSCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzVCLElBQU1JLGlCQUFpQixHQUFHUCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBSSxDQUFDLENBQUUsQ0FBQyxHQUFJLENBQUMsQ0FBRSxDQUFDO01BQ3pFLElBQUlLLGlCQUFpQixLQUFLdkIsTUFBTSxJQUFJLENBQUNzQixZQUFZLENBQUNFLFFBQVEsQ0FBQ0QsaUJBQWlCLENBQUMsRUFBRTtRQUMzRUQsWUFBWSxDQUFDRyxJQUFJLENBQUNGLGlCQUFpQixDQUFDO01BQ3hDO0lBQ0o7SUFFQSxJQUFNRyxVQUFVLE1BQUFDLE1BQUEsQ0FBT0wsWUFBWSxHQUFFdEIsTUFBTSxFQUFDO0lBQzVDNEIsT0FBTyxDQUFDRixVQUFVLENBQUM7SUFDbkJyQixVQUFVLENBQUNxQixVQUFVLENBQUM7SUFFdEIsSUFBTUcsVUFBVSxHQUFHQyxXQUFXLENBQUMsWUFBTTtNQUNqQzdDLFdBQVcsQ0FBQyxVQUFBOEMsUUFBUTtRQUFBLE9BQUlBLFFBQVEsR0FBRyxDQUFDO01BQUEsRUFBQztJQUN6QyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBRVIsT0FBTyxZQUFNO01BQ1RDLGFBQWEsQ0FBQ0gsVUFBVSxDQUFDO0lBQzdCLENBQUM7RUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU5sRCxnREFBUyxDQUFDLFlBQU07SUFDWixJQUFJSyxRQUFRLElBQUksQ0FBQyxFQUFFO01BQ2Y2QixXQUFXLENBQUMsSUFBSSxDQUFDO01BQ2pCSixVQUFVLENBQUMsYUFBYSxDQUFDO0lBQzdCO0VBQ0osQ0FBQyxFQUFFLENBQUN6QixRQUFRLENBQUMsQ0FBQztFQUVkLFNBQVM0QyxPQUFPQSxDQUFDSyxDQUFDLEVBQUU7SUFDaEIsS0FBSyxJQUFJQyxDQUFDLEdBQUdELENBQUMsQ0FBQ2QsTUFBTSxFQUFFZSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQzNCLElBQUlDLENBQUMsR0FBR25CLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdnQixDQUFDLENBQUM7TUFBQyxJQUFBRSxJQUFBLEdBQ25CLENBQUNILENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLEVBQUVGLENBQUMsQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQWxDRCxDQUFDLENBQUNDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQUUsSUFBQTtNQUFFSCxDQUFDLENBQUNFLENBQUMsQ0FBQyxHQUFBQyxJQUFBO0lBQ25CO0VBQ0o7RUFFQSxTQUFTQyxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7SUFDeEIsSUFBSSxDQUFDMUIsUUFBUSxFQUFFO01BQ1gsSUFBSTBCLEtBQUssS0FBS3RDLE1BQU0sRUFBRTtRQUNsQlMsVUFBVSxDQUFDLFlBQVksQ0FBQztNQUM1QixDQUFDLE1BQU07UUFDSEEsVUFBVSxDQUFDLHFCQUFxQixDQUFDO01BQ3JDO01BQ0FJLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDckI7RUFDSjtFQUVBLG9CQUNJcEMsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUtlLElBQUksRUFBQyxHQUFDLEVBQUNKLFNBQVMsRUFBQyxHQUFDLEVBQUNRLElBQUksRUFBQyxJQUFNLENBQUMsZUFDcENuQiwwREFBQSxjQUNLMkIsT0FBTyxDQUFDb0MsR0FBRyxDQUFDLFVBQUNGLEtBQUssRUFBRUcsS0FBSyxFQUFLO0lBQzNCLG9CQUNJaEUsMERBQUE7TUFBUWlFLEdBQUcsRUFBRUQsS0FBTTtNQUFDRSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtRQUFBLE9BQU1OLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDO01BQUEsQ0FBQztNQUFDTSxRQUFRLEVBQUVoQztJQUFTLEdBQ3JFMEIsS0FDRyxDQUFDO0VBRWpCLENBQUMsQ0FDQSxDQUFDLGVBQ043RCwwREFBQSxhQUFLbUMsUUFBUSxHQUFHSixPQUFPLFNBQUFtQixNQUFBLENBQVMzQyxRQUFRLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUEyQyxNQUFBLENBQUczQyxRQUFRLENBQU8sQ0FDekUsQ0FBQztBQUVkO0FBRUEsaUVBQWVKLGdCQUFnQjs7Ozs7Ozs7VUNwRy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDJfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAyX1phZGFuaWVfMi9qcy9NYXRoUXVlc3Rpb25HYW1lLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE1hdGhRdWVzdGlvbkdhbWUoKSB7XG4gICAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZSgxMClcbiAgICBjb25zdCBbb3BlcmF0aW9uLCBzZXRPcGVyYXRpb25dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtudW0xLCBzZXROdW0xXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtudW0yLCBzZXROdW0yXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbYnV0dG9ucywgc2V0QnV0dG9uc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtnYW1lT3Zlciwgc2V0R2FtZU92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyYXlPZkVxdWF0aW9uID0gW1wiK1wiLCBcIi1cIiwgXCIqXCJdXG4gICAgICAgIGNvbnN0IHR5cGVPZkVxdWF0aW9uID0gYXJyYXlPZkVxdWF0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5T2ZFcXVhdGlvbi5sZW5ndGgpXVxuICAgICAgICBjb25zdCBudW1iZXIxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkgKyAxKVxuICAgICAgICBjb25zdCBudW1iZXIyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkgKyAxKVxuICAgICAgICBsZXQgcmVzdWx0ID0gMFxuXG4gICAgICAgIHNldE51bTEobnVtYmVyMSlcbiAgICAgICAgc2V0TnVtMihudW1iZXIyKVxuICAgICAgICBzZXRPcGVyYXRpb24odHlwZU9mRXF1YXRpb24pXG5cbiAgICAgICAgc3dpdGNoICh0eXBlT2ZFcXVhdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVtYmVyMSArIG51bWJlcjJcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bWJlcjEgLSBudW1iZXIyXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudW1iZXIxICogbnVtYmVyMlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0UmVzdWx0KHJlc3VsdClcblxuICAgICAgICBjb25zdCB3cm9uZ0Fuc3dlcnMgPSBbXVxuICAgICAgICB3aGlsZSAod3JvbmdBbnN3ZXJzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVdyb25nQW5zd2VyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtICgtOSkpICsgKC05KSlcbiAgICAgICAgICAgIGlmIChyYW5kb21Xcm9uZ0Fuc3dlciAhPT0gcmVzdWx0ICYmICF3cm9uZ0Fuc3dlcnMuaW5jbHVkZXMocmFuZG9tV3JvbmdBbnN3ZXIpKSB7XG4gICAgICAgICAgICAgICAgd3JvbmdBbnN3ZXJzLnB1c2gocmFuZG9tV3JvbmdBbnN3ZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbGxBbnN3ZXJzID0gWy4uLndyb25nQW5zd2VycywgcmVzdWx0XVxuICAgICAgICBzaHVmZmxlKGFsbEFuc3dlcnMpXG4gICAgICAgIHNldEJ1dHRvbnMoYWxsQW5zd2VycylcblxuICAgICAgICBjb25zdCBteUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZUxlZnQocHJldlRpbWUgPT4gcHJldlRpbWUgLSAxKVxuICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15SW50ZXJ2YWwpXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodGltZUxlZnQgPD0gMCkge1xuICAgICAgICAgICAgc2V0R2FtZU92ZXIodHJ1ZSlcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJDemFzIG1pbsSFxYIhXCIpXG4gICAgICAgIH1cbiAgICB9LCBbdGltZUxlZnRdKTtcblxuICAgIGZ1bmN0aW9uIHNodWZmbGUoYSkge1xuICAgICAgICBmb3IgKGxldCBpID0gYS5sZW5ndGg7IGk7IGktLSkge1xuICAgICAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcbiAgICAgICAgICAgIFthW2kgLSAxXSwgYVtqXV0gPSBbYVtqXSwgYVtpIC0gMV1dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2sodmFsdWUpIHtcbiAgICAgICAgaWYgKCFnYW1lT3Zlcikge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKFwiR3JhdHVsYWNqZVwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKFwiQsWCxJlkbmEgb2Rwb3dpZWTFuiA6KFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0R2FtZU92ZXIodHJ1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e251bTF9IHtvcGVyYXRpb259IHtudW0yfSA9PC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2J1dHRvbnMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2sodmFsdWUpfSBkaXNhYmxlZD17Z2FtZU92ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMz57Z2FtZU92ZXIgPyBtZXNzYWdlIDogYDAwOiR7dGltZUxlZnQgPCAxMCA/IFwiMFwiIDogXCJcIn0ke3RpbWVMZWZ0fWB9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRoUXVlc3Rpb25HYW1lIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjlkZGIyNGQxMWFkMTljMTExMDFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1hdGhRdWVzdGlvbkdhbWUiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0aW1lTGVmdCIsInNldFRpbWVMZWZ0IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJvcGVyYXRpb24iLCJzZXRPcGVyYXRpb24iLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIm51bTEiLCJzZXROdW0xIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJudW0yIiwic2V0TnVtMiIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsInJlc3VsdCIsInNldFJlc3VsdCIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJidXR0b25zIiwic2V0QnV0dG9ucyIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJnYW1lT3ZlciIsInNldEdhbWVPdmVyIiwiYXJyYXlPZkVxdWF0aW9uIiwidHlwZU9mRXF1YXRpb24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJudW1iZXIxIiwibnVtYmVyMiIsIndyb25nQW5zd2VycyIsInJhbmRvbVdyb25nQW5zd2VyIiwiaW5jbHVkZXMiLCJwdXNoIiwiYWxsQW5zd2VycyIsImNvbmNhdCIsInNodWZmbGUiLCJteUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJhIiwiaSIsImoiLCJfcmVmIiwiaGFuZGxlQ2xpY2siLCJ2YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJpbmRleCIsImtleSIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=