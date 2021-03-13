webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/llam/git/gentle-git-intro/components/Input.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject4() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  color: wheat;\\n  background: none;\\n  padding: 4px;\\n  border-radius: 10px;\\n  font-size: 16px;\\n  \\n  input, label {\\n    display: block;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  padding: 10px;\\n  background: none;\\n  border-radius: 10px;\\n  border: 2px dashed gray;\\n  width: 400px;\\n  height: 30px;\\n  color: wheat;\\n  font-size: 16px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  margin-top: 13px;\\n  margin-left: 10px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  display: grid;\\n  grid-template-columns: 50px 1fr 1fr;\\n  grid-gap: 25px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = InputContainer;\nvar CheckDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = CheckDiv;\nvar StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].input(_templateObject3());\n_c3 = StyledInput;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject4());\n_c4 = Button;\n\nfunction Input(_ref) {\n  _s();\n\n  var question = _ref.question,\n      answer = _ref.answer;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      complete = _useState[0],\n      setComplete = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      input = _useState2[0],\n      setInput = _useState2[1];\n\n  var handleClick = function handleClick() {\n    if (answer === input) {\n      setComplete(true);\n    } else {\n      setComplete(false);\n    }\n  };\n\n  var handleChange = function handleChange(e) {\n    console.log(e);\n    setInput(e.target.value);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(InputContainer, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: complete && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CheckDiv, {\n        children: \"\\u2713\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      children: question\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledInput, {\n      onChange: handleChange\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n      onClick: handleClick,\n      children: \"Enter\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Input, \"XJGl4+CTtJ/ipl9LEoxzdkWVuk8=\");\n\n_c5 = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"InputContainer\");\n$RefreshReg$(_c2, \"CheckDiv\");\n$RefreshReg$(_c3, \"StyledInput\");\n$RefreshReg$(_c4, \"Button\");\n$RefreshReg$(_c5, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC5qcz80ZmI1Il0sIm5hbWVzIjpbIklucHV0Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ2hlY2tEaXYiLCJTdHlsZWRJbnB1dCIsImlucHV0IiwiQnV0dG9uIiwiYnV0dG9uIiwiSW5wdXQiLCJxdWVzdGlvbiIsImFuc3dlciIsInVzZVN0YXRlIiwiY29tcGxldGUiLCJzZXRDb21wbGV0ZSIsInNldElucHV0IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQXBCO0tBQU1GLGM7QUFNTixJQUFNRyxRQUFRLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWQ7TUFBTUMsUTtBQUtOLElBQU1DLFdBQVcsR0FBR0gseURBQU0sQ0FBQ0ksS0FBVixvQkFBakI7TUFBTUQsVztBQVdOLElBQU1FLE1BQU0sR0FBR0wseURBQU0sQ0FBQ00sTUFBVixvQkFBWjtNQUFNRCxNOztBQVlOLFNBQVNFLEtBQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFwQkMsUUFBb0IsUUFBcEJBLFFBQW9CO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEtBQUQsQ0FETDtBQUFBLE1BQzVCQyxRQUQ0QjtBQUFBLE1BQ2xCQyxXQURrQjs7QUFBQSxtQkFFVEYsc0RBQVEsQ0FBQyxFQUFELENBRkM7QUFBQSxNQUU1Qk4sS0FGNEI7QUFBQSxNQUVyQlMsUUFGcUI7O0FBSW5DLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBSUwsTUFBTSxLQUFLTCxLQUFmLEVBQXNCO0FBQ3BCUSxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELEtBRkQsTUFFTztBQUNMQSxpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0FILFlBQVEsQ0FBQ0csQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELEdBSEQ7O0FBS0Esc0JBQ0UscUVBQUMsY0FBRDtBQUFBLDRCQUNBO0FBQUEsZ0JBQ0dULFFBQVEsaUJBQ1AscUVBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQU1FO0FBQUEsZ0JBQVFIO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0UscUVBQUMsV0FBRDtBQUFhLGNBQVEsRUFBRU87QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBUUUscUVBQUMsTUFBRDtBQUFRLGFBQU8sRUFBRUQsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQTdCUVAsSzs7TUFBQUEsSztBQStCTUEsb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAyNXB4O1xuYDtcblxuY29uc3QgQ2hlY2tEaXYgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgZ3JheTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiB3aGVhdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6IHdoZWF0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgXG4gIGlucHV0LCBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIElucHV0KHsgcXVlc3Rpb24sIGFuc3dlciB9KSB7XG4gIGNvbnN0IFtjb21wbGV0ZSwgc2V0Q29tcGxldGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIikgIFxuICBcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGFuc3dlciA9PT0gaW5wdXQpIHtcbiAgICAgIHNldENvbXBsZXRlKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldENvbXBsZXRlKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SW5wdXRDb250YWluZXI+XG4gICAgPGRpdj5cbiAgICAgIHtjb21wbGV0ZSAmJiAoXG4gICAgICAgIDxDaGVja0Rpdj7inJM8L0NoZWNrRGl2PlxuICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGxhYmVsPntxdWVzdGlvbn08L2xhYmVsPlxuICAgICAgPFN0eWxlZElucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5FbnRlcjwvQnV0dG9uPlxuICAgIDwvSW5wdXRDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Input.js\n");

/***/ })

})