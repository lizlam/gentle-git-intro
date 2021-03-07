module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/llam/git/gentle-git-intro/components/Main.js\";\n\nconst StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  border: 2px dashed red;\n  height: 500px;\n  width: 700px;\n  border-radius: 15px;\n  padding: 20px;\n  margin: 10px;\n`;\nconst radius = '.5';\nconst fill = 'red';\n\nfunction Main() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledDiv, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4uanM/ODY2MCJdLCJuYW1lcyI6WyJTdHlsZWREaXYiLCJzdHlsZWQiLCJkaXYiLCJyYWRpdXMiLCJmaWxsIiwiTWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7QUFTQSxNQUFNQyxNQUFNLEdBQUcsSUFBZjtBQUNBLE1BQU1DLElBQUksR0FBRyxLQUFiOztBQUVBLFNBQVNDLElBQVQsR0FBaUI7QUFDZixzQkFDRSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVjQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IFN0eWxlZERpdiA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMnB4IGRhc2hlZCByZWQ7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA3MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxMHB4O1xuYDtcblxuY29uc3QgcmFkaXVzID0gJy41J1xuY29uc3QgZmlsbCA9ICdyZWQnXG5cbmZ1bmN0aW9uIE1haW4gKCkge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWREaXY+XG4gICAgICBcbiAgICA8L1N0eWxlZERpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main.js\n");

/***/ }),

/***/ "./components/Progress.js":
/*!********************************!*\
  !*** ./components/Progress.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/llam/git/gentle-git-intro/components/Progress.js\";\n\nconst StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  border: 2px dashed wheat;\n  height: 500px;\n  width: 100px;\n  border-radius: 15px;\n  padding: 20px;\n  margin-left: 80px\n`;\nconst radius = '1.4';\nconst fillDone = 'red'; //<text x='3' y='3' stroke='white' strokeWidth='1px' fontSize=\"8px\" dy=\".5em\">intro</text>\n\nfunction Progress({\n  step\n}) {\n  const fill1 = step >= 0 ? 'wheat' : 'black';\n  const fill2 = step >= 1 ? 'wheat' : 'black';\n  const fill3 = step >= 2 ? 'wheat' : 'black';\n  const fill4 = step >= 3 ? 'wheat' : 'black';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledDiv, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      viewBox: \"0 0 30 500\",\n      strokeWidth: \".5\",\n      stroke: \"wheat\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"line\", {\n        x1: \"2\",\n        x2: \"2\",\n        y1: \"2\",\n        y2: \"20\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n        cx: \"2\",\n        r: radius,\n        cy: \"2\",\n        fill: fill1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n        cx: \"2\",\n        r: radius,\n        cy: \"10\",\n        fill: fill2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n        cx: \"2\",\n        r: radius,\n        cy: \"20\",\n        fill: fill3\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 12\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n        cx: \"2\",\n        r: radius,\n        cy: \"30\",\n        fill: fill4\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 12\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Progress);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNzLmpzPzBmZDIiXSwibmFtZXMiOlsiU3R5bGVkRGl2Iiwic3R5bGVkIiwiZGl2IiwicmFkaXVzIiwiZmlsbERvbmUiLCJQcm9ncmVzcyIsInN0ZXAiLCJmaWxsMSIsImZpbGwyIiwiZmlsbDMiLCJmaWxsNCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7QUFTQSxNQUFNQyxNQUFNLEdBQUcsS0FBZjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxLQUFqQixDLENBRUE7O0FBRUEsU0FBU0MsUUFBVCxDQUFvQjtBQUFDQztBQUFELENBQXBCLEVBQTZCO0FBQzNCLFFBQU1DLEtBQUssR0FBR0QsSUFBSSxJQUFJLENBQVIsR0FBWSxPQUFaLEdBQXNCLE9BQXBDO0FBQ0EsUUFBTUUsS0FBSyxHQUFHRixJQUFJLElBQUksQ0FBUixHQUFZLE9BQVosR0FBc0IsT0FBcEM7QUFDQSxRQUFNRyxLQUFLLEdBQUdILElBQUksSUFBSSxDQUFSLEdBQVksT0FBWixHQUFzQixPQUFwQztBQUNBLFFBQU1JLEtBQUssR0FBR0osSUFBSSxJQUFJLENBQVIsR0FBWSxPQUFaLEdBQXNCLE9BQXBDO0FBRUEsc0JBQ0UscUVBQUMsU0FBRDtBQUFBLDJCQUNFO0FBQUssYUFBTyxFQUFDLFlBQWI7QUFBMEIsaUJBQVcsRUFBQyxJQUF0QztBQUEyQyxZQUFNLEVBQUMsT0FBbEQ7QUFBQSw4QkFDRTtBQUFNLFVBQUUsRUFBQyxHQUFUO0FBQWEsVUFBRSxFQUFDLEdBQWhCO0FBQW9CLFVBQUUsRUFBQyxHQUF2QjtBQUEyQixVQUFFLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFDRSxVQUFFLEVBQUMsR0FETDtBQUVFLFNBQUMsRUFBRUgsTUFGTDtBQUdFLFVBQUUsRUFBQyxHQUhMO0FBSUUsWUFBSSxFQUFFSTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQVNFO0FBQ0UsVUFBRSxFQUFDLEdBREw7QUFFRSxTQUFDLEVBQUVKLE1BRkw7QUFHRSxVQUFFLEVBQUMsSUFITDtBQUlFLFlBQUksRUFBRUs7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFlSztBQUNELFVBQUUsRUFBQyxHQURGO0FBRUQsU0FBQyxFQUFFTCxNQUZGO0FBR0QsVUFBRSxFQUFDLElBSEY7QUFJRCxZQUFJLEVBQUVNO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZMLGVBcUJLO0FBQ0QsVUFBRSxFQUFDLEdBREY7QUFFRCxTQUFDLEVBQUVOLE1BRkY7QUFHRCxVQUFFLEVBQUMsSUFIRjtBQUlELFlBQUksRUFBRU87QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdDRDs7QUFFY0wsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2dyZXNzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgU3R5bGVkRGl2ID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAycHggZGFzaGVkIHdoZWF0O1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4XG5gO1xuXG5jb25zdCByYWRpdXMgPSAnMS40J1xuY29uc3QgZmlsbERvbmUgPSAncmVkJ1xuXG4vLzx0ZXh0IHg9JzMnIHk9JzMnIHN0cm9rZT0nd2hpdGUnIHN0cm9rZVdpZHRoPScxcHgnIGZvbnRTaXplPVwiOHB4XCIgZHk9XCIuNWVtXCI+aW50cm88L3RleHQ+XG5cbmZ1bmN0aW9uIFByb2dyZXNzICgge3N0ZXB9ICkge1xuICBjb25zdCBmaWxsMSA9IHN0ZXAgPj0gMCA/ICd3aGVhdCcgOiAnYmxhY2snXG4gIGNvbnN0IGZpbGwyID0gc3RlcCA+PSAxID8gJ3doZWF0JyA6ICdibGFjaycgXG4gIGNvbnN0IGZpbGwzID0gc3RlcCA+PSAyID8gJ3doZWF0JyA6ICdibGFjaycgXG4gIGNvbnN0IGZpbGw0ID0gc3RlcCA+PSAzID8gJ3doZWF0JyA6ICdibGFjaycgXG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkRGl2PlxuICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDMwIDUwMFwiIHN0cm9rZVdpZHRoPVwiLjVcIiBzdHJva2U9J3doZWF0Jz5cbiAgICAgICAgPGxpbmUgeDE9JzInIHgyPScyJyB5MT0nMicgeTI9JzIwJz5cbiAgICAgICAgPC9saW5lPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY3g9JzInXG4gICAgICAgICAgcj17cmFkaXVzfVxuICAgICAgICAgIGN5PScyJ1xuICAgICAgICAgIGZpbGw9e2ZpbGwxfVxuICAgICAgICAvPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY3g9JzInXG4gICAgICAgICAgcj17cmFkaXVzfVxuICAgICAgICAgIGN5PScxMCdcbiAgICAgICAgICBmaWxsPXtmaWxsMn1cbiAgICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBjeD0nMidcbiAgICAgICAgICByPXtyYWRpdXN9XG4gICAgICAgICAgY3k9JzIwJ1xuICAgICAgICAgIGZpbGw9e2ZpbGwzfVxuICAgICAgICAgID48L2NpcmNsZT5cbiAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgIGN4PScyJ1xuICAgICAgICAgIHI9e3JhZGl1c31cbiAgICAgICAgICBjeT0nMzAnXG4gICAgICAgICAgZmlsbD17ZmlsbDR9XG4gICAgICAgICAgPjwvY2lyY2xlPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L1N0eWxlZERpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Progress.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Progress */ \"./components/Progress.js\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Main */ \"./components/Main.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/llam/git/gentle-git-intro/pages/index.js\";\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`\n  display: grid;\n  grid-template-columns: 700px 1fr;\n`;\n\nfunction Home() {\n  const {\n    0: currentStep,\n    1: setCurrentStep\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n\n  const handleClickNext = () => {\n    setCurrentStep(currentStep + 1);\n  };\n\n  const handleClickBack = () => {\n    setCurrentStep(currentStep - 1);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"a gentle intro\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"a gentle introduction to git\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"progress\", {\n      value: \".2\",\n      max: \"1.0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Main__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Progress__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        step: currentStep\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: handleClickNext,\n        children: \"Next\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: handleClickBack,\n        children: \"Back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), currentStep]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkhvbWUiLCJjdXJyZW50U3RlcCIsInNldEN1cnJlbnRTdGVwIiwidXNlU3RhdGUiLCJoYW5kbGVDbGlja05leHQiLCJoYW5kbGVDbGlja0JhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUM3QjtBQUNBO0FBQ0EsQ0FIQTs7QUFLQSxTQUFTQyxJQUFULEdBQWlCO0FBQ2YsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLENBQUQsQ0FBOUM7O0FBRUEsUUFBTUMsZUFBZSxHQUFHLE1BQU07QUFDNUJGLGtCQUFjLENBQUNELFdBQVcsR0FBRyxDQUFmLENBQWQ7QUFDRCxHQUZEOztBQUlBLFFBQU1JLGVBQWUsR0FBRyxNQUFNO0FBQzVCSCxrQkFBYyxDQUFDRCxXQUFXLEdBQUcsQ0FBZixDQUFkO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBVSxXQUFLLEVBQUMsSUFBaEI7QUFBcUIsU0FBRyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLHFFQUFDLFNBQUQ7QUFBQSw4QkFDRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyw0REFBRDtBQUFVLFlBQUksRUFBRUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBUSxlQUFPLEVBQUVHLGVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFRLGVBQU8sRUFBRUMsZUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixFQUtHSixXQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUEsa0JBREY7QUFnQkQ7O0FBRWNELG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFByb2dyZXNzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3MnXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL01haW4nXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwMHB4IDFmcjtcbmA7XG5cbmZ1bmN0aW9uIEhvbWUgKCkge1xuICBjb25zdCBbY3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tOZXh0ID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrQmFjayA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCAtIDEpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPmEgZ2VudGxlIGludHJvPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXY+YSBnZW50bGUgaW50cm9kdWN0aW9uIHRvIGdpdDwvZGl2PlxuICAgICAgPHByb2dyZXNzIHZhbHVlPScuMicgbWF4PScxLjAnPjwvcHJvZ3Jlc3M+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8TWFpbj48L01haW4+XG4gICAgICAgIDxQcm9ncmVzcyBzdGVwPXtjdXJyZW50U3RlcH0vPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrTmV4dH0+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQmFja30+QmFjazwvYnV0dG9uPlxuICAgICAgICB7Y3VycmVudFN0ZXB9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });