webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/llam/git/gentle-git-intro/components/Input.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject4() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  color: wheat;\\n  background: none;\\n  margin: 20px;\\n  padding: 10px;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  padding: 10px;\\n  background: none;\\n  border-radius: 10px;\\n  border: 2px dashed gray;\\n  width: 400px;\\n  height: 30px;\\n  color: wheat;\\n  font-size: 16px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  margin-top: 12px\\n  margin-left: 10px\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_llam_git_gentle_git_intro_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  display: grid;\\n  grid-template-columns: 50px 1fr 1fr;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = InputContainer;\nvar CheckDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = CheckDiv;\nvar StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].input(_templateObject3());\n_c3 = StyledInput;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject4());\n_c4 = Button;\n\nfunction Input() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      complete = _useState[0],\n      setComplete = _useState[1];\n\n  var handleClick = function handleClick() {\n    setComplete(true);\n  };\n\n  var handleChange = function handleChange(e) {\n    console.log(e);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(InputContainer, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: complete && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CheckDiv, {\n        children: \"\\u2713\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledInput, {\n      onChange: handleChange\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n      onClick: handleClick,\n      children: \"Enter\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Input, \"W4L6AnPttCLDhvNcYegEh2PBZDM=\");\n\n_c5 = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"InputContainer\");\n$RefreshReg$(_c2, \"CheckDiv\");\n$RefreshReg$(_c3, \"StyledInput\");\n$RefreshReg$(_c4, \"Button\");\n$RefreshReg$(_c5, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC5qcz80ZmI1Il0sIm5hbWVzIjpbIklucHV0Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ2hlY2tEaXYiLCJTdHlsZWRJbnB1dCIsImlucHV0IiwiQnV0dG9uIiwiYnV0dG9uIiwiSW5wdXQiLCJ1c2VTdGF0ZSIsImNvbXBsZXRlIiwic2V0Q29tcGxldGUiLCJoYW5kbGVDbGljayIsImhhbmRsZUNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQXBCO0tBQU1GLGM7QUFLTixJQUFNRyxRQUFRLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWQ7TUFBTUMsUTtBQUtOLElBQU1DLFdBQVcsR0FBR0gseURBQU0sQ0FBQ0ksS0FBVixvQkFBakI7TUFBTUQsVztBQVdOLElBQU1FLE1BQU0sR0FBR0wseURBQU0sQ0FBQ00sTUFBVixvQkFBWjtNQUFNRCxNOztBQU9OLFNBQVNFLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDaUJDLHNEQUFRLENBQUMsS0FBRCxDQUR6QjtBQUFBLE1BQ1JDLFFBRFE7QUFBQSxNQUNFQyxXQURGOztBQUdmLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUMxQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFLHFFQUFDLGNBQUQ7QUFBQSw0QkFDQTtBQUFBLGdCQUNHSixRQUFRLGlCQUNQLHFFQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFNRSxxRUFBQyxXQUFEO0FBQWEsY0FBUSxFQUFFRztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFPRSxxRUFBQyxNQUFEO0FBQVEsYUFBTyxFQUFFRCxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0dBdEJRSixLOztNQUFBQSxLO0FBd0JNQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW5wdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyIDFmcjtcbmA7XG5cbmNvbnN0IENoZWNrRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTJweFxuICBtYXJnaW4tbGVmdDogMTBweFxuYDtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBncmF5O1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IHdoZWF0O1xuICBmb250LXNpemU6IDE2cHg7XG5gO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBjb2xvcjogd2hlYXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbmA7XG5cbmZ1bmN0aW9uIElucHV0KCkge1xuICBjb25zdCBbY29tcGxldGUsIHNldENvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTsgIFxuICBcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0Q29tcGxldGUodHJ1ZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SW5wdXRDb250YWluZXI+XG4gICAgPGRpdj5cbiAgICAgIHtjb21wbGV0ZSAmJiAoXG4gICAgICAgIDxDaGVja0Rpdj7inJM8L0NoZWNrRGl2PlxuICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPFN0eWxlZElucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5FbnRlcjwvQnV0dG9uPlxuICAgIDwvSW5wdXRDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Input.js\n");

/***/ })

})