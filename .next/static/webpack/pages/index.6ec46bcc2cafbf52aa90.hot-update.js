webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/llam/git/gentle-git-intro/components/Input.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject4() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  color: wheat;\\n  background: none;\\n  margin: 20px;\\n  padding: 10px;\\n  border-radius: 10px;\\n  height: 30px;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  padding: 10px;\\n  background: none;\\n  border-radius: 10px;\\n  border: 2px dashed gray;\\n  width: 400px;\\n  height: 30px;\\n  color: wheat;\\n  font-size: 16px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  margin-top: 13px;\\n  margin-left: 10px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  display: grid;\\n  grid-template-columns: 50px 1fr 1fr;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = InputContainer;\nvar CheckDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = CheckDiv;\nvar StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].input(_templateObject3());\n_c3 = StyledInput;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject4());\n_c4 = Button;\n\nfunction Input(_ref) {\n  _s();\n\n  var answer = _ref.answer;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      complete = _useState[0],\n      setComplete = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      input = _useState2[0],\n      setInput = _useState2[1];\n\n  var handleClick = function handleClick() {\n    if (answer === input) {\n      setComplete(true);\n    } else {\n      setComplete(false);\n    }\n  };\n\n  var handleChange = function handleChange(e) {\n    console.log(e);\n    setInput(e.target.value);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(InputContainer, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: complete && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CheckDiv, {\n        children: \"\\u2713\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledInput, {\n      onChange: handleChange\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n      onClick: handleClick,\n      children: \"Enter\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Input, \"XJGl4+CTtJ/ipl9LEoxzdkWVuk8=\");\n\n_c5 = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"InputContainer\");\n$RefreshReg$(_c2, \"CheckDiv\");\n$RefreshReg$(_c3, \"StyledInput\");\n$RefreshReg$(_c4, \"Button\");\n$RefreshReg$(_c5, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC5qcz80ZmI1Il0sIm5hbWVzIjpbIklucHV0Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ2hlY2tEaXYiLCJTdHlsZWRJbnB1dCIsImlucHV0IiwiQnV0dG9uIiwiYnV0dG9uIiwiSW5wdXQiLCJhbnN3ZXIiLCJ1c2VTdGF0ZSIsImNvbXBsZXRlIiwic2V0Q29tcGxldGUiLCJzZXRJbnB1dCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFwQjtLQUFNRixjO0FBS04sSUFBTUcsUUFBUSxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFkO01BQU1DLFE7QUFLTixJQUFNQyxXQUFXLEdBQUdILHlEQUFNLENBQUNJLEtBQVYsb0JBQWpCO01BQU1ELFc7QUFXTixJQUFNRSxNQUFNLEdBQUdMLHlEQUFNLENBQUNNLE1BQVYsb0JBQVo7TUFBTUQsTTs7QUFTTixTQUFTRSxLQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLEtBQUQsQ0FEZjtBQUFBLE1BQ2xCQyxRQURrQjtBQUFBLE1BQ1JDLFdBRFE7O0FBQUEsbUJBRUNGLHNEQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFbEJMLEtBRmtCO0FBQUEsTUFFWFEsUUFGVzs7QUFJekIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFJTCxNQUFNLEtBQUtKLEtBQWYsRUFBc0I7QUFDcEJPLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0Q7QUFDRixHQU5EOztBQVFBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUMxQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQUgsWUFBUSxDQUFDRyxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRSxxRUFBQyxjQUFEO0FBQUEsNEJBQ0E7QUFBQSxnQkFDR1QsUUFBUSxpQkFDUCxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBTUUscUVBQUMsV0FBRDtBQUFhLGNBQVEsRUFBRUk7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0UscUVBQUMsTUFBRDtBQUFRLGFBQU8sRUFBRUQsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEOztHQTVCUU4sSzs7TUFBQUEsSztBQThCTUEsb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmciAxZnI7XG5gO1xuXG5jb25zdCBDaGVja0RpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuYDtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBncmF5O1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IHdoZWF0O1xuICBmb250LXNpemU6IDE2cHg7XG5gO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBjb2xvcjogd2hlYXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuYDtcblxuZnVuY3Rpb24gSW5wdXQoeyBhbnN3ZXIgfSkge1xuICBjb25zdCBbY29tcGxldGUsIHNldENvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpICBcbiAgXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChhbnN3ZXIgPT09IGlucHV0KSB7XG4gICAgICBzZXRDb21wbGV0ZSh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDb21wbGV0ZShmYWxzZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPElucHV0Q29udGFpbmVyPlxuICAgIDxkaXY+XG4gICAgICB7Y29tcGxldGUgJiYgKFxuICAgICAgICA8Q2hlY2tEaXY+4pyTPC9DaGVja0Rpdj5cbiAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTdHlsZWRJbnB1dCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+RW50ZXI8L0J1dHRvbj5cbiAgICA8L0lucHV0Q29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Input.js\n");

/***/ })

})