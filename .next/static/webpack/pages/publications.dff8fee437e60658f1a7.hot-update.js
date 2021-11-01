"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/publications",{

/***/ "./pages/publications.js":
/*!*******************************!*\
  !*** ./pages/publications.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/section */ \"./components/section.js\");\n/* harmony import */ var _components_grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/grid-item */ \"./components/grid-item.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/evanedelstein/Documents/Websites/pages/publications.js\",\n    _this = undefined;\n\n\n\n\n // Make this all dynamic reading from google scholor or pubmed\n\n\n\nvar Publications = function Publications(_ref) {\n  var pubs = _ref.pubs;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n      as: \"h3\",\n      fontSize: 20,\n      mb: 4,\n      children: \"Our Publications\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, _this), pubs && pubs.length > 0 && pubs.map(function (paperList, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n        fontWeight: \"bold\",\n        children: paperList.year\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Publications;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Publications); // const Publications = () =>{\n//     return (\n//  <Container> \n//      <Layout title=\"Programs\">        \n//          <Container>\n//              <Heading as=\"h3\" fontSize={20} mb={4}>\n//                  Our Publications\n//              </Heading>\n//              <Section delay={0.1}>\n//                  <SimpleGrid columns={[1]} gap={6}>\n//                  <PubGridItem\n//                      authors=\"Gil N, Shrestha R, Fiser A\"\n//                      title='Estimating the accuracy of pharmacophore-based detection of cognate receptor-ligand pairs in the immunoglobulin superfamily.'\n//                      href=\"http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&amp;cmd=Retrieve&amp;dopt=AbstractPlus&amp;list_uids=33483991&amp;query_hl=1&amp;itool=pubmed_docsum\"\n//                  />\n//                  <PubGridItem\n//                      authors=\"Shrestha R, Fajardo JE, Fiser A\"\n//                      title='Residue-based pharmacophore approaches to study protein-protein interactions.'\n//                      href=\"http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&amp;cmd=Retrieve&amp;dopt=AbstractPlus&amp;list_uids=33486430&amp;query_hl=1&amp;itool=pubmed_docsum\"\n//                  />\n//                  </SimpleGrid>\n//              </Section>\n//              <Section delay={0.1}>\n//                  <SimpleGrid columns={[1]} gap={6}>\n//                  <PubGridItem\n//                      authors=\"Sarkar A, Fiser A, Toms SA, Tapinos N\"\n//                      title='miRNA-mediated loss of m6A increases nascent translation in glioblastoma.'\n//                      href=\"http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&cmd=Retrieve&dopt=AbstractPlus&list_uids=33684100&query_hl=1&itool=pubmed_docsum\"\n//                  />\n//                  <PubGridItem\n//                      authors=\"Grudman S, Fajardo JE, Fiser A.\"\n//                      title='INTERCAAT: identifying interface residues between macromolecules.'\n//                      href=\"https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btab596/6367763\"\n//                  />\n//                  </SimpleGrid>\n//              </Section>\n//              <Section>\n//              <LinkBox cursor=\"pointer\">\n//              <LinkOverlay href='https://pubmed.ncbi.nlm.nih.gov/?term=Andras+Fiser&sort=date' target=\"_blank\">\n//                  <Text mt={2} fontSize = {14} textDecoration='underline'>PubMed</Text>\n//              </LinkOverlay>\n//              </LinkBox>\n//              </Section>\n//          </Container>\n//      </Layout>\n//  </Container>\n//      )}\n//  export default Publications\n\nvar _c;\n\n$RefreshReg$(_c, \"Publications\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wdWJsaWNhdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7OztBQUtBLElBQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQVc7QUFBQSxNQUFUQyxJQUFTLFFBQVRBLElBQVM7QUFDN0Isc0JBQ0MsOERBQUMsdURBQUQ7QUFBQSw0QkFDSSw4REFBQyxxREFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQWlCLGNBQVEsRUFBRSxFQUEzQjtBQUErQixRQUFFLEVBQUUsQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUtTQSxJQUFJLElBQUlBLElBQUksQ0FBQ0MsTUFBTCxHQUFZLENBQXBCLElBQXlCRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxTQUFELEVBQVlDLEtBQVo7QUFBQSwwQkFDL0IsOERBQUMsa0RBQUQ7QUFBTSxrQkFBVSxFQUFDLE1BQWpCO0FBQUEsa0JBQ0tELFNBQVMsQ0FBQ0U7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRCtCO0FBQUEsS0FBVCxDQUxsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWNHLENBZk47O0tBQU1OO0FBaUJOLCtEQUFlQSxZQUFmLEdBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3B1YmxpY2F0aW9ucy5qcz8yYzBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgSGVhZGluZywgU2ltcGxlR3JpZCAsIExpbmtPdmVybGF5LFRleHQsIExpbmtCb3h9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9hcnRpY2xlJ1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9uJ1xuaW1wb3J0IHtQdWJHcmlkSXRlbX0gIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JpZC1pdGVtJ1xuXG4vLyBNYWtlIHRoaXMgYWxsIGR5bmFtaWMgcmVhZGluZyBmcm9tIGdvb2dsZSBzY2hvbG9yIG9yIHB1Ym1lZFxuXG5cblxuXG5jb25zdCBQdWJsaWNhdGlvbnMgPSAoe3B1YnN9KSA9PntcbiAgIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIGZvbnRTaXplPXsyMH0gbWI9ezR9PlxuICAgICAgICAgICAgIE91ciBQdWJsaWNhdGlvbnNcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICBcbiAgICAgICAgICAgIHtwdWJzICYmIHB1YnMubGVuZ3RoPjAgJiYgcHVicy5tYXAoKHBhcGVyTGlzdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICB7cGFwZXJMaXN0LnllYXJ9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgIFxuICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgXG4gICAgKX1cblxuZXhwb3J0IGRlZmF1bHQgUHVibGljYXRpb25zXG5cblxuXG4vLyBjb25zdCBQdWJsaWNhdGlvbnMgPSAoKSA9Pntcbi8vICAgICByZXR1cm4gKFxuLy8gIDxDb250YWluZXI+IFxuLy8gICAgICA8TGF5b3V0IHRpdGxlPVwiUHJvZ3JhbXNcIj4gICAgICAgIFxuLy8gICAgICAgICAgPENvbnRhaW5lcj5cbi8vICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgZm9udFNpemU9ezIwfSBtYj17NH0+XG4vLyAgICAgICAgICAgICAgICAgIE91ciBQdWJsaWNhdGlvbnNcbi8vICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gXG4vLyAgICAgICAgICAgICAgPFNlY3Rpb24gZGVsYXk9ezAuMX0+XG4vLyAgICAgICAgICAgICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9e1sxXX0gZ2FwPXs2fT5cbi8vICAgICAgICAgICAgICAgICAgPFB1YkdyaWRJdGVtXG4vLyAgICAgICAgICAgICAgICAgICAgICBhdXRob3JzPVwiR2lsIE4sIFNocmVzdGhhIFIsIEZpc2VyIEFcIlxuLy8gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J0VzdGltYXRpbmcgdGhlIGFjY3VyYWN5IG9mIHBoYXJtYWNvcGhvcmUtYmFzZWQgZGV0ZWN0aW9uIG9mIGNvZ25hdGUgcmVjZXB0b3ItbGlnYW5kIHBhaXJzIGluIHRoZSBpbW11bm9nbG9idWxpbiBzdXBlcmZhbWlseS4nXG4vLyAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5uY2JpLm5sbS5uaWguZ292L2VudHJlei9xdWVyeS5mY2dpP2RiPXB1Ym1lZCZhbXA7Y21kPVJldHJpZXZlJmFtcDtkb3B0PUFic3RyYWN0UGx1cyZhbXA7bGlzdF91aWRzPTMzNDgzOTkxJmFtcDtxdWVyeV9obD0xJmFtcDtpdG9vbD1wdWJtZWRfZG9jc3VtXCJcbi8vICAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgICAgPFB1YkdyaWRJdGVtXG4vLyAgICAgICAgICAgICAgICAgICAgICBhdXRob3JzPVwiU2hyZXN0aGEgUiwgRmFqYXJkbyBKRSwgRmlzZXIgQVwiXG4vLyAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nUmVzaWR1ZS1iYXNlZCBwaGFybWFjb3Bob3JlIGFwcHJvYWNoZXMgdG8gc3R1ZHkgcHJvdGVpbi1wcm90ZWluIGludGVyYWN0aW9ucy4nXG4vLyAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5uY2JpLm5sbS5uaWguZ292L2VudHJlei9xdWVyeS5mY2dpP2RiPXB1Ym1lZCZhbXA7Y21kPVJldHJpZXZlJmFtcDtkb3B0PUFic3RyYWN0UGx1cyZhbXA7bGlzdF91aWRzPTMzNDg2NDMwJmFtcDtxdWVyeV9obD0xJmFtcDtpdG9vbD1wdWJtZWRfZG9jc3VtXCJcbi8vICAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgICAgPC9TaW1wbGVHcmlkPlxuLy8gICAgICAgICAgICAgIDwvU2VjdGlvbj5cbiBcbi8vICAgICAgICAgICAgICA8U2VjdGlvbiBkZWxheT17MC4xfT5cbi8vICAgICAgICAgICAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17WzFdfSBnYXA9ezZ9PlxuLy8gICAgICAgICAgICAgICAgICA8UHViR3JpZEl0ZW1cbi8vICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcnM9XCJTYXJrYXIgQSwgRmlzZXIgQSwgVG9tcyBTQSwgVGFwaW5vcyBOXCJcbi8vICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdtaVJOQS1tZWRpYXRlZCBsb3NzIG9mIG02QSBpbmNyZWFzZXMgbmFzY2VudCB0cmFuc2xhdGlvbiBpbiBnbGlvYmxhc3RvbWEuJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cubmNiaS5ubG0ubmloLmdvdi9lbnRyZXovcXVlcnkuZmNnaT9kYj1wdWJtZWQmY21kPVJldHJpZXZlJmRvcHQ9QWJzdHJhY3RQbHVzJmxpc3RfdWlkcz0zMzY4NDEwMCZxdWVyeV9obD0xJml0b29sPXB1Ym1lZF9kb2NzdW1cIlxuLy8gICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgICA8UHViR3JpZEl0ZW1cbi8vICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcnM9XCJHcnVkbWFuIFMsIEZhamFyZG8gSkUsIEZpc2VyIEEuXCJcbi8vICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdJTlRFUkNBQVQ6IGlkZW50aWZ5aW5nIGludGVyZmFjZSByZXNpZHVlcyBiZXR3ZWVuIG1hY3JvbW9sZWN1bGVzLidcbi8vICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FjYWRlbWljLm91cC5jb20vYmlvaW5mb3JtYXRpY3MvYWR2YW5jZS1hcnRpY2xlL2RvaS8xMC4xMDkzL2Jpb2luZm9ybWF0aWNzL2J0YWI1OTYvNjM2Nzc2M1wiXG4vLyAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgIDwvU2ltcGxlR3JpZD5cbi8vICAgICAgICAgICAgICA8L1NlY3Rpb24+XG4gXG4vLyAgICAgICAgICAgICAgPFNlY3Rpb24+XG4vLyAgICAgICAgICAgICAgPExpbmtCb3ggY3Vyc29yPVwicG9pbnRlclwiPlxuLy8gICAgICAgICAgICAgIDxMaW5rT3ZlcmxheSBocmVmPSdodHRwczovL3B1Ym1lZC5uY2JpLm5sbS5uaWguZ292Lz90ZXJtPUFuZHJhcytGaXNlciZzb3J0PWRhdGUnIHRhcmdldD1cIl9ibGFua1wiPlxuLy8gICAgICAgICAgICAgICAgICA8VGV4dCBtdD17Mn0gZm9udFNpemUgPSB7MTR9IHRleHREZWNvcmF0aW9uPSd1bmRlcmxpbmUnPlB1Yk1lZDwvVGV4dD5cbi8vICAgICAgICAgICAgICA8L0xpbmtPdmVybGF5PlxuLy8gICAgICAgICAgICAgIDwvTGlua0JveD5cbi8vICAgICAgICAgICAgICA8L1NlY3Rpb24+XG4gXG4gXG4vLyAgICAgICAgICA8L0NvbnRhaW5lcj5cbi8vICAgICAgPC9MYXlvdXQ+XG4vLyAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgXG4vLyAgICAgICl9XG4gXG4vLyAgZXhwb3J0IGRlZmF1bHQgUHVibGljYXRpb25zXG4gXG4gXG4gIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIkhlYWRpbmciLCJTaW1wbGVHcmlkIiwiTGlua092ZXJsYXkiLCJUZXh0IiwiTGlua0JveCIsIkxheW91dCIsIlNlY3Rpb24iLCJQdWJHcmlkSXRlbSIsIlB1YmxpY2F0aW9ucyIsInB1YnMiLCJsZW5ndGgiLCJtYXAiLCJwYXBlckxpc3QiLCJpbmRleCIsInllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/publications.js\n");

/***/ })

});