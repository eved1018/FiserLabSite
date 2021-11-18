"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/hero.js":
/*!****************************!*\
  !*** ./components/hero.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_hero_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/hero.jpg */ \"./images/hero.jpg\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimatedText */ \"./components/AnimatedText.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/evanedelstein/Documents/FiserLab/components/hero.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n // import { Parallax } from 'react-scroll-parallax';\n\n\nvar linkMap = {\n  \"/\": [\"Fiser Lab\", \"Structural and Computational Biology at the Einstein College of Medicine\", \"100vh\"],\n  \"/publications\": [\"Publications\", \"\", \"30vh\"],\n  \"/links\": [\"Links\", \"\", \"30vh\"],\n  \"/contact\": [\"Contact Us\", \"\", \"30vh\"],\n  \"/team\": [\"Our Team\", \"\", \"30vh\"],\n  \"/programs\": [\"Our Programs\", \"\", \"30vh\"]\n};\nfunction Hero(_ref) {\n  _s();\n\n  var path = _ref.path;\n  var hVar = \"25vh\";\n  var pathVar = [{\n    type: \"heading1\",\n    text: \"error\"\n  }];\n\n  if (linkMap.hasOwnProperty(path)) {\n    var hVar = linkMap[path][2];\n    var pathVar = linkMap[path][0];\n    var subtext = linkMap[path][1];\n  }\n\n  var container = {\n    visible: {\n      transition: {\n        staggerChildren: 0.025\n      }\n    }\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n    w: 'full' // h={'100vh'}\n    ,\n    h: hVar,\n    justifyContent: \"center\",\n    backgroundImage: \"url('/images/hero.jpg')\",\n    backgroundSize: 'cover',\n    backgroundPosition: 'center center',\n    an: true,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n      w: 'full',\n      justify: 'center',\n      px: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBreakpointValue)({\n        base: 4,\n        md: 8\n      }),\n      bgGradient: 'linear( blackAlpha.800, transparent)',\n      backgroundAttachment: \"fixed\",\n      backgroundPosition: \"center\",\n      backgroundRepeat: \"no-repeat\",\n      children: [\"if \", pathVar, \" == \", \"/\", \"  \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n        maxW: '2xl',\n        align: 'flex-start',\n        spacing: 6,\n        textAlign: 'center',\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n          color: 'white',\n          fontWeight: 700,\n          lineHeight: 1.2,\n          fontSize: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBreakpointValue)({\n            base: '3xl',\n            md: '4xl'\n          }),\n          children: pathVar\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n          color: 'white',\n          fontWeight: 400,\n          lineHeight: 1.2,\n          fontSize: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBreakpointValue)({\n            base: 'l',\n            md: 'xl'\n          }),\n          children: subtext\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 12\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Hero, \"ZTCJWID7WVAOpjMoUVQ/gnPXUk0=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBreakpointValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBreakpointValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBreakpointValue];\n});\n\n_c = Hero;\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQUVOLG9FQUFrQixDQUFDO0FBQUVlLFlBQUFBLElBQUksRUFBRSxHQUFSO0FBQWFDLFlBQUFBLEVBQUUsRUFBRTtBQUFqQixXQUFELENBSjlCO0FBQUEsb0JBS1FOO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnREQ7O0dBckVxQlA7VUFzQ1ZILGtFQWNVQSxrRUFRQUE7OztLQTVEQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvLmpzP2JlMjciXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBCb3gsIHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgaGVybyBmcm9tIFwiLi4vaW1hZ2VzL2hlcm8uanBnXCJcbmltcG9ydCB7XG4gICAgU3RhY2ssXG4gICAgRmxleCxcbiAgICBUZXh0LFxuICAgIFZTdGFjayxcbiAgICB1c2VCcmVha3BvaW50VmFsdWUsXG4gIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gJy4vQW5pbWF0ZWRUZXh0J1xuXG4vLyBpbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG4gIFxuXG5jb25zdCBsaW5rTWFwID0ge1xuICAgIFwiL1wiIDogW1wiRmlzZXIgTGFiXCIsXCJTdHJ1Y3R1cmFsIGFuZCBDb21wdXRhdGlvbmFsIEJpb2xvZ3kgYXQgdGhlIEVpbnN0ZWluIENvbGxlZ2Ugb2YgTWVkaWNpbmVcIixcIjEwMHZoXCJdLFxuICAgIFwiL3B1YmxpY2F0aW9uc1wiIDogW1wiUHVibGljYXRpb25zXCIsXCJcIixcIjMwdmhcIl0sXG4gICAgXCIvbGlua3NcIiA6IFtcIkxpbmtzXCIsXCJcIixcIjMwdmhcIl0sXG4gICAgXCIvY29udGFjdFwiIDogW1wiQ29udGFjdCBVc1wiLFwiXCIsIFwiMzB2aFwiXSxcbiAgICBcIi90ZWFtXCIgOiBbXCJPdXIgVGVhbVwiLFwiXCIsXCIzMHZoXCJdLFxuICAgIFwiL3Byb2dyYW1zXCIgOiBbXCJPdXIgUHJvZ3JhbXNcIiwgXCJcIiwgXCIzMHZoXCJdLFxuICAgIFxufTtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybyh7cGF0aH0pIHtcbiAgXG4gIHZhciBoVmFyID0gXCIyNXZoXCJcbiAgdmFyIHBhdGhWYXIgPVt7dHlwZTogXCJoZWFkaW5nMVwiLCB0ZXh0OiBcImVycm9yXCJ9XVxuXG4gIGlmIChsaW5rTWFwLmhhc093blByb3BlcnR5KHBhdGgpKSB7XG4gICAgdmFyIGhWYXIgPWxpbmtNYXBbcGF0aF1bMl07XG4gICAgdmFyIHBhdGhWYXIgPSBsaW5rTWFwW3BhdGhdWzBdO1xuICAgIHZhciBzdWJ0ZXh0ID0gbGlua01hcFtwYXRoXVsxXTtcbiAgfVxuIFxuICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgdmlzaWJsZToge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMDI1XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gXG4gXG4gICAgcmV0dXJuIChcbiAgICAgIDxGbGV4XG4gICAgICAgIHc9eydmdWxsJ31cbiAgICAgICAgLy8gaD17JzEwMHZoJ31cbiAgICAgICAgaD0ge2hWYXJ9XG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlPXtcInVybCgnL2ltYWdlcy9oZXJvLmpwZycpXCJ9XG4gICAgICAgIGJhY2tncm91bmRTaXplPXsnY292ZXInfVxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb249eydjZW50ZXIgY2VudGVyJ31cbiAgICAgICAgYW5cbiAgICAgICAgPlxuICAgIFxuXG4gICAgICAgXG4gICAgICAgIDxWU3RhY2tcbiAgICAgICAgICB3PXsnZnVsbCd9XG4gICAgICAgICAganVzdGlmeT17J2NlbnRlcid9XG4gICAgICAgICAgcHg9e3VzZUJyZWFrcG9pbnRWYWx1ZSh7IGJhc2U6IDQsIG1kOiA4IH0pfVxuICAgICAgICAgIGJnR3JhZGllbnQ9eydsaW5lYXIoIGJsYWNrQWxwaGEuODAwLCB0cmFuc3BhcmVudCknfVxuICAgICAgICAgIGJhY2tncm91bmRBdHRhY2htZW50PXsgXCJmaXhlZFwifVxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb249IHtcImNlbnRlclwifVxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0PSB7XCJuby1yZXBlYXRcIn0+XG4gICAgXG4gICAgICBpZiB7cGF0aFZhcn0gPT0ge1wiL1wifSAge1xuICAgICAgICAgICA8U3RhY2sgbWF4Vz17JzJ4bCd9IGFsaWduPXsnZmxleC1zdGFydCd9IHNwYWNpbmc9ezZ9IHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgY29sb3I9eyd3aGl0ZSd9XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezcwMH1cbiAgICAgICAgICAgICAgbGluZUhlaWdodD17MS4yfVxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgZm9udFNpemU9e3VzZUJyZWFrcG9pbnRWYWx1ZSh7IGJhc2U6ICczeGwnLCBtZDogJzR4bCcgfSl9PlxuICAgICAgICAgICAgICAgIHtwYXRoVmFyfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgY29sb3I9eyd3aGl0ZSd9XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezQwMH1cbiAgICAgICAgICAgICAgbGluZUhlaWdodD17MS4yfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZm9udFNpemU9e3VzZUJyZWFrcG9pbnRWYWx1ZSh7IGJhc2U6ICdsJywgbWQ6ICd4bCcgfSl9PlxuICAgICAgICAgICAgICAgICAgIHtzdWJ0ZXh0fVxuICAgICAgICAgICAgICAgIDwvVGV4dD4gXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICA8L1N0YWNrPiB9XG4gICAgICAgICAgXG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9GbGV4PlxuICAgICk7XG4gIH0gXG5cbiAgXG4iXSwibmFtZXMiOlsiQm94IiwidXNlQ29sb3JNb2RlVmFsdWUiLCJJbWFnZSIsIm1vdGlvbiIsImhlcm8iLCJTdGFjayIsIkZsZXgiLCJUZXh0IiwiVlN0YWNrIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiQW5pbWF0ZWRUZXh0IiwibGlua01hcCIsIkhlcm8iLCJwYXRoIiwiaFZhciIsInBhdGhWYXIiLCJ0eXBlIiwidGV4dCIsImhhc093blByb3BlcnR5Iiwic3VidGV4dCIsImNvbnRhaW5lciIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwiYmFzZSIsIm1kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hero.js\n");

/***/ })

});