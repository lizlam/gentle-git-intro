webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Progress.js":
/*!********************************!*\
  !*** ./components/Progress.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/llam/git/gentle-git-intro/components/Progress.js\";\n\nfunction _templateObject() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  border: 2px dashed wheat;\\n  height: 500px;\\n  width: 100px;\\n  border-radius: 15px;\\n  padding: 20px;\\n  margin-left: 80px\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = StyledDiv;\nvar radius = '.5';\nvar fillDone = 'red'; //<text x='3' y='3' stroke='white' strokeWidth='1px' fontSize=\"8px\" dy=\".5em\">intro</text>\n\nfunction Progress(_ref) {\n  var step = _ref.step;\n  var fill = step === 1 ? 'wheat' : 'black';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledDiv, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      viewBox: \"0 0 30 500\",\n      stroke: fill,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"line\", {\n        x1: \"2\",\n        x2: \"10\",\n        y1: \"2\",\n        y2: \"10\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n        cx: \"2\",\n        r: radius,\n        cy: \"2\",\n        fill: fill\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n        cx: \"10\",\n        r: radius,\n        cy: \"10\",\n        fill: fill\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_c2 = Progress;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Progress);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledDiv\");\n$RefreshReg$(_c2, \"Progress\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmVzcy5qcz8wZmQyIl0sIm5hbWVzIjpbIlN0eWxlZERpdiIsInN0eWxlZCIsImRpdiIsInJhZGl1cyIsImZpbGxEb25lIiwiUHJvZ3Jlc3MiLCJzdGVwIiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO0tBQU1GLFM7QUFTTixJQUFNRyxNQUFNLEdBQUcsSUFBZjtBQUNBLElBQU1DLFFBQVEsR0FBRyxLQUFqQixDLENBRUE7O0FBRUEsU0FBU0MsUUFBVCxPQUE2QjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUMzQixNQUFNQyxJQUFJLEdBQUdELElBQUksS0FBSyxDQUFULEdBQWEsT0FBYixHQUF1QixPQUFwQztBQUNBLHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSwyQkFDRTtBQUFLLGFBQU8sRUFBQyxZQUFiO0FBQTBCLFlBQU0sRUFBRUMsSUFBbEM7QUFBQSw4QkFDRTtBQUFNLFVBQUUsRUFBQyxHQUFUO0FBQWEsVUFBRSxFQUFDLElBQWhCO0FBQXFCLFVBQUUsRUFBQyxHQUF4QjtBQUE0QixVQUFFLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFDRSxVQUFFLEVBQUMsR0FETDtBQUVFLFNBQUMsRUFBRUosTUFGTDtBQUdFLFVBQUUsRUFBQyxHQUhMO0FBSUUsWUFBSSxFQUFFSTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQVNFO0FBQ0UsVUFBRSxFQUFDLElBREw7QUFFRSxTQUFDLEVBQUVKLE1BRkw7QUFHRSxVQUFFLEVBQUMsSUFITDtBQUlFLFlBQUksRUFBRUk7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOztNQXRCUUYsUTtBQXdCTUEsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2dyZXNzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgU3R5bGVkRGl2ID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAycHggZGFzaGVkIHdoZWF0O1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4XG5gO1xuXG5jb25zdCByYWRpdXMgPSAnLjUnXG5jb25zdCBmaWxsRG9uZSA9ICdyZWQnXG5cbi8vPHRleHQgeD0nMycgeT0nMycgc3Ryb2tlPSd3aGl0ZScgc3Ryb2tlV2lkdGg9JzFweCcgZm9udFNpemU9XCI4cHhcIiBkeT1cIi41ZW1cIj5pbnRybzwvdGV4dD5cblxuZnVuY3Rpb24gUHJvZ3Jlc3MgKCB7c3RlcH0gKSB7XG4gIGNvbnN0IGZpbGwgPSBzdGVwID09PSAxID8gJ3doZWF0JyA6ICdibGFjayc7IFxuICByZXR1cm4gKFxuICAgIDxTdHlsZWREaXY+XG4gICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzAgNTAwXCIgc3Ryb2tlPXtmaWxsfT5cbiAgICAgICAgPGxpbmUgeDE9JzInIHgyPScxMCcgeTE9JzInIHkyPScxMCc+XG4gICAgICAgIDwvbGluZT5cbiAgICAgICAgPGNpcmNsZVxuICAgICAgICAgIGN4PScyJ1xuICAgICAgICAgIHI9e3JhZGl1c31cbiAgICAgICAgICBjeT0nMidcbiAgICAgICAgICBmaWxsPXtmaWxsfVxuICAgICAgICAgID48L2NpcmNsZT5cbiAgICAgICAgPGNpcmNsZVxuICAgICAgICAgIGN4PScxMCdcbiAgICAgICAgICByPXtyYWRpdXN9XG4gICAgICAgICAgY3k9JzEwJ1xuICAgICAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICAgICAgPjwvY2lyY2xlPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L1N0eWxlZERpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Progress.js\n");

/***/ })

})