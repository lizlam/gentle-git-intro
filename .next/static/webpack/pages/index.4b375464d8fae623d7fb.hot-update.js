webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Progress.js":
/*!********************************!*\
  !*** ./components/Progress.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/llam/git/gentle-git-intro/components/Progress.js\";\n\nfunction _templateObject() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  border: 2px dashed wheat;\\n  height: 500px;\\n  width: 100px;\\n  border-radius: 15px;\\n  padding: 20px;\\n  margin-left: 80px\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = StyledDiv;\nvar radius = '.5';\nvar fillDone = 'red'; //<text x='3' y='3' stroke='white' strokeWidth='1px' fontSize=\"8px\" dy=\".5em\">intro</text>\n\nfunction Progress(_ref) {\n  var step = _ref.step;\n  var fill = 'red';\n  var fill1 = step === 0 ? 'wheat' : 'black';\n  var fill2 = step === 1 ? 'wheat' : 'black';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledDiv, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      viewBox: \"0 0 30 500\",\n      strokeWidth: \".2\",\n      stroke: fill1,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"line\", {\n        x1: \"2\",\n        x2: \"2\",\n        y1: \"2\",\n        y2: \"20\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n        cx: \"2\",\n        r: radius,\n        cy: \"2\",\n        fill: fill1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n        cx: \"2\",\n        r: radius,\n        cy: \"10\",\n        fill: fill2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\n_c2 = Progress;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Progress);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledDiv\");\n$RefreshReg$(_c2, \"Progress\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmVzcy5qcz8wZmQyIl0sIm5hbWVzIjpbIlN0eWxlZERpdiIsInN0eWxlZCIsImRpdiIsInJhZGl1cyIsImZpbGxEb25lIiwiUHJvZ3Jlc3MiLCJzdGVwIiwiZmlsbCIsImZpbGwxIiwiZmlsbDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtLQUFNRixTO0FBU04sSUFBTUcsTUFBTSxHQUFHLElBQWY7QUFDQSxJQUFNQyxRQUFRLEdBQUcsS0FBakIsQyxDQUVBOztBQUVBLFNBQVNDLFFBQVQsT0FBNkI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDM0IsTUFBTUMsSUFBSSxHQUFHLEtBQWI7QUFDQSxNQUFNQyxLQUFLLEdBQUdGLElBQUksS0FBSyxDQUFULEdBQWEsT0FBYixHQUF1QixPQUFyQztBQUNBLE1BQU1HLEtBQUssR0FBR0gsSUFBSSxLQUFLLENBQVQsR0FBYSxPQUFiLEdBQXVCLE9BQXJDO0FBQ0Esc0JBQ0UscUVBQUMsU0FBRDtBQUFBLDJCQUNFO0FBQUssYUFBTyxFQUFDLFlBQWI7QUFBMEIsaUJBQVcsRUFBQyxJQUF0QztBQUEyQyxZQUFNLEVBQUVFLEtBQW5EO0FBQUEsOEJBQ0U7QUFBTSxVQUFFLEVBQUMsR0FBVDtBQUFhLFVBQUUsRUFBQyxHQUFoQjtBQUFvQixVQUFFLEVBQUMsR0FBdkI7QUFBMkIsVUFBRSxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQ0UsVUFBRSxFQUFDLEdBREw7QUFFRSxTQUFDLEVBQUVMLE1BRkw7QUFHRSxVQUFFLEVBQUMsR0FITDtBQUlFLFlBQUksRUFBRUs7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFTRTtBQUNFLFVBQUUsRUFBQyxHQURMO0FBRUUsU0FBQyxFQUFFTCxNQUZMO0FBR0UsVUFBRSxFQUFDLElBSEw7QUFJRSxZQUFJLEVBQUVNO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7TUF4QlFKLFE7QUEwQk1BLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9ncmVzcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IFN0eWxlZERpdiA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMnB4IGRhc2hlZCB3aGVhdDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogODBweFxuYDtcblxuY29uc3QgcmFkaXVzID0gJy41J1xuY29uc3QgZmlsbERvbmUgPSAncmVkJ1xuXG4vLzx0ZXh0IHg9JzMnIHk9JzMnIHN0cm9rZT0nd2hpdGUnIHN0cm9rZVdpZHRoPScxcHgnIGZvbnRTaXplPVwiOHB4XCIgZHk9XCIuNWVtXCI+aW50cm88L3RleHQ+XG5cbmZ1bmN0aW9uIFByb2dyZXNzICgge3N0ZXB9ICkge1xuICBjb25zdCBmaWxsID0gJ3JlZCdcbiAgY29uc3QgZmlsbDEgPSBzdGVwID09PSAwID8gJ3doZWF0JyA6ICdibGFjaydcbiAgY29uc3QgZmlsbDIgPSBzdGVwID09PSAxID8gJ3doZWF0JyA6ICdibGFjaycgXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZERpdj5cbiAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAzMCA1MDBcIiBzdHJva2VXaWR0aD1cIi4yXCIgc3Ryb2tlPXtmaWxsMX0+XG4gICAgICAgIDxsaW5lIHgxPScyJyB4Mj0nMicgeTE9JzInIHkyPScyMCc+XG4gICAgICAgIDwvbGluZT5cbiAgICAgICAgPGNpcmNsZVxuICAgICAgICAgIGN4PScyJ1xuICAgICAgICAgIHI9e3JhZGl1c31cbiAgICAgICAgICBjeT0nMidcbiAgICAgICAgICBmaWxsPXtmaWxsMX1cbiAgICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBjeD0nMidcbiAgICAgICAgICByPXtyYWRpdXN9XG4gICAgICAgICAgY3k9JzEwJ1xuICAgICAgICAgIGZpbGw9e2ZpbGwyfVxuICAgICAgICAgID48L2NpcmNsZT5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9TdHlsZWREaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Progress.js\n");

/***/ })

})