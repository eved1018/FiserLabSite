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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/section */ \"./components/section.js\");\n/* harmony import */ var _components_grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/grid-item */ \"./components/grid-item.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/evanedelstein/Documents/Websites/pages/publications.js\",\n    _this = undefined;\n\n\n\n\n // Make this all dynamic reading from google scholor or pubmed\n\n\nvar pubs = [{\n  year: '2021',\n  title: \" INTERCAAT: identifying interface residues between macromolecules\",\n  authors: \"Steven Grudman, J Eduardo Fajardo, Andras Fiser\",\n  abstarct: \" Summary: The Interface Contact definition with Adaptable Atom Types (INTERCAAT) was developed to determine the atomic interactions between molecules that form a known three dimensional structure. First, INTERCAAT creates a Voronoi tessellation where each atom acts as a seed. Interactions are defined by atoms that share a hyperplane and whose distance is less than the sum of each atoms' Van der Waals radii plus the diameter of a solvent molecule. Interacting atoms are then classified and interactions are filtered based on compatibility. INTERCAAT implements an adaptive atom classification method; therefore, it can explore interfaces between a variety macromolecules.\",\n  link: \"https://pubmed.ncbi.nlm.nih.gov/34499117/\",\n  thumbnail: \"https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/bioinformatics/PAP/10.1093_bioinformatics_btab596/2/m_btab596f1.jpeg?Expires=1638445955&Signature=IvVpnKCut9m5I-B0ysJfhAVnuwgIB9p0sr2x80nzyKpC43Agdlh8~HwIq9B2ZYp7ApjOBFEcthLwIHCdGhLG6wMp8DgagyYioDFTz1l2iE5LdeKdaZj0Aheb23SMjc1WLpF-vXIY~7WCzxgt57owdjnQMztwahIqvQnXFEwffVqR848gAZYuz3dILbTQexeqYjUE~AJvdnU7jFPO~Z8YAcw9TxS-D-pfKQepX-ZVe2Mnfu8bw3yIJbIp66yMNQybdj5IHEUewDzEo4M2C7cko0crj58pZhho7BVmtO1OduvaI-NHn3CD39ujUct-cXBagyoy0Kp6PMPvm9tR6xpGGg__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA\"\n}];\n\nvar Publications = function Publications(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n      as: \"h3\",\n      fontSize: 20,\n      mb: 4,\n      children: \"Our Publications\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_1__.default, {\n      children: props.caseStudies.map(function (caseStudy) {\n        return (\n          /*#__PURE__*/\n          // note the removed {}\n          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n            children: caseStudy.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, _this)\n        );\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Publications;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Publications); // const Publications = () =>{\n//     return (\n//  <Container> \n//      <Layout title=\"Programs\">        \n//          <Container>\n//              <Heading as=\"h3\" fontSize={20} mb={4}>\n//                  Our Publications\n//              </Heading>\n//              <Section delay={0.1}>\n//                  <SimpleGrid columns={[1]} gap={6}>\n//                  <PubGridItem\n//                      authors=\"Gil N, Shrestha R, Fiser A\"\n//                      title='Estimating the accuracy of pharmacophore-based detection of cognate receptor-ligand pairs in the immunoglobulin superfamily.'\n//                      href=\"http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&amp;cmd=Retrieve&amp;dopt=AbstractPlus&amp;list_uids=33483991&amp;query_hl=1&amp;itool=pubmed_docsum\"\n//                  />\n//                  <PubGridItem\n//                      authors=\"Shrestha R, Fajardo JE, Fiser A\"\n//                      title='Residue-based pharmacophore approaches to study protein-protein interactions.'\n//                      href=\"http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&amp;cmd=Retrieve&amp;dopt=AbstractPlus&amp;list_uids=33486430&amp;query_hl=1&amp;itool=pubmed_docsum\"\n//                  />\n//                  </SimpleGrid>\n//              </Section>\n//              <Section delay={0.1}>\n//                  <SimpleGrid columns={[1]} gap={6}>\n//                  <PubGridItem\n//                      authors=\"Sarkar A, Fiser A, Toms SA, Tapinos N\"\n//                      title='miRNA-mediated loss of m6A increases nascent translation in glioblastoma.'\n//                      href=\"http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&cmd=Retrieve&dopt=AbstractPlus&list_uids=33684100&query_hl=1&itool=pubmed_docsum\"\n//                  />\n//                  <PubGridItem\n//                      authors=\"Grudman S, Fajardo JE, Fiser A.\"\n//                      title='INTERCAAT: identifying interface residues between macromolecules.'\n//                      href=\"https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btab596/6367763\"\n//                  />\n//                  </SimpleGrid>\n//              </Section>\n//              <Section>\n//              <LinkBox cursor=\"pointer\">\n//              <LinkOverlay href='https://pubmed.ncbi.nlm.nih.gov/?term=Andras+Fiser&sort=date' target=\"_blank\">\n//                  <Text mt={2} fontSize = {14} textDecoration='underline'>PubMed</Text>\n//              </LinkOverlay>\n//              </LinkBox>\n//              </Section>\n//          </Container>\n//      </Layout>\n//  </Container>\n//      )}\n//  export default Publications\n\nvar _c;\n\n$RefreshReg$(_c, \"Publications\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wdWJsaWNhdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7O0FBR0EsSUFBTVMsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsRUFBQUEsSUFBSSxFQUFFLE1BRFY7QUFFSUMsRUFBQUEsS0FBSyxFQUFFLG1FQUZYO0FBR0lDLEVBQUFBLE9BQU8sRUFBQyxpREFIWjtBQUlJQyxFQUFBQSxRQUFRLEVBQUMsb3FCQUpiO0FBS0lDLEVBQUFBLElBQUksRUFBRSwyQ0FMVjtBQU1JQyxFQUFBQSxTQUFTLEVBQUM7QUFOZCxDQURTLENBQWI7O0FBWUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFHO0FBQzFCLHNCQUNDLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0ksOERBQUMscURBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixjQUFRLEVBQUUsRUFBM0I7QUFBK0IsUUFBRSxFQUFFLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSw4REFBQyx3REFBRDtBQUFBLGdCQUNDQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLFNBQUQ7QUFBQTtBQUFBO0FBQW9CO0FBQ3ZDO0FBQUEsc0JBQUlBLFNBQVMsQ0FBQ1Q7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRG1CO0FBQUEsT0FBdEI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFjRyxDQWZOOztLQUFNSztBQWlCTiwrREFBZUEsWUFBZixHQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wdWJsaWNhdGlvbnMuanM/MmMwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIEhlYWRpbmcsIFNpbXBsZUdyaWQgLCBMaW5rT3ZlcmxheSxUZXh0LCBMaW5rQm94fSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZSdcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbidcbmltcG9ydCB7UHViR3JpZEl0ZW19ICBmcm9tICcuLi9jb21wb25lbnRzL2dyaWQtaXRlbSdcblxuLy8gTWFrZSB0aGlzIGFsbCBkeW5hbWljIHJlYWRpbmcgZnJvbSBnb29nbGUgc2Nob2xvciBvciBwdWJtZWRcblxuXG5jb25zdCBwdWJzID0gW1xuICAgIHtcbiAgICAgICAgeWVhcjogJzIwMjEnLFxuICAgICAgICB0aXRsZTogXCIgSU5URVJDQUFUOiBpZGVudGlmeWluZyBpbnRlcmZhY2UgcmVzaWR1ZXMgYmV0d2VlbiBtYWNyb21vbGVjdWxlc1wiLFxuICAgICAgICBhdXRob3JzOlwiU3RldmVuIEdydWRtYW4sIEogRWR1YXJkbyBGYWphcmRvLCBBbmRyYXMgRmlzZXJcIixcbiAgICAgICAgYWJzdGFyY3Q6XCIgU3VtbWFyeTogVGhlIEludGVyZmFjZSBDb250YWN0IGRlZmluaXRpb24gd2l0aCBBZGFwdGFibGUgQXRvbSBUeXBlcyAoSU5URVJDQUFUKSB3YXMgZGV2ZWxvcGVkIHRvIGRldGVybWluZSB0aGUgYXRvbWljIGludGVyYWN0aW9ucyBiZXR3ZWVuIG1vbGVjdWxlcyB0aGF0IGZvcm0gYSBrbm93biB0aHJlZSBkaW1lbnNpb25hbCBzdHJ1Y3R1cmUuIEZpcnN0LCBJTlRFUkNBQVQgY3JlYXRlcyBhIFZvcm9ub2kgdGVzc2VsbGF0aW9uIHdoZXJlIGVhY2ggYXRvbSBhY3RzIGFzIGEgc2VlZC4gSW50ZXJhY3Rpb25zIGFyZSBkZWZpbmVkIGJ5IGF0b21zIHRoYXQgc2hhcmUgYSBoeXBlcnBsYW5lIGFuZCB3aG9zZSBkaXN0YW5jZSBpcyBsZXNzIHRoYW4gdGhlIHN1bSBvZiBlYWNoIGF0b21zJyBWYW4gZGVyIFdhYWxzIHJhZGlpIHBsdXMgdGhlIGRpYW1ldGVyIG9mIGEgc29sdmVudCBtb2xlY3VsZS4gSW50ZXJhY3RpbmcgYXRvbXMgYXJlIHRoZW4gY2xhc3NpZmllZCBhbmQgaW50ZXJhY3Rpb25zIGFyZSBmaWx0ZXJlZCBiYXNlZCBvbiBjb21wYXRpYmlsaXR5LiBJTlRFUkNBQVQgaW1wbGVtZW50cyBhbiBhZGFwdGl2ZSBhdG9tIGNsYXNzaWZpY2F0aW9uIG1ldGhvZDsgdGhlcmVmb3JlLCBpdCBjYW4gZXhwbG9yZSBpbnRlcmZhY2VzIGJldHdlZW4gYSB2YXJpZXR5IG1hY3JvbW9sZWN1bGVzLlwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vcHVibWVkLm5jYmkubmxtLm5paC5nb3YvMzQ0OTkxMTcvXCIsXG4gICAgICAgIHRodW1ibmFpbDpcImh0dHBzOi8vb3VwLnNpbHZlcmNoYWlyLWNkbi5jb20vb3VwL2JhY2tmaWxlL0NvbnRlbnRfcHVibGljL0pvdXJuYWwvYmlvaW5mb3JtYXRpY3MvUEFQLzEwLjEwOTNfYmlvaW5mb3JtYXRpY3NfYnRhYjU5Ni8yL21fYnRhYjU5NmYxLmpwZWc/RXhwaXJlcz0xNjM4NDQ1OTU1JlNpZ25hdHVyZT1JdlZwbktDdXQ5bTVJLUIweXNKZmhBVm51d2dJQjlwMHNyMng4MG56eUtwQzQzQWdkbGg4fkh3SXE5QjJaWXA3QXBqT0JGRWN0aEx3SUhDZEdoTEc2d01wOERnYWd5WWlvREZUejFsMmlFNUxkZUtkYVpqMEFoZWIyM1NNamMxV0xwRi12WElZfjdXQ3p4Z3Q1N293ZGpuUU16dHdhaElxdlFuWEZFd2ZmVnFSODQ4Z0FaWXV6M2RJTGJUUWV4ZXFZalVFfkFKdmRuVTdqRlBPflo4WUFjdzlUeFMtRC1wZktRZXBYLVpWZTJNbmZ1OGJ3M3lJSmJJcDY2eU1OUXliZGo1SUhFVWV3RHpFbzRNMkM3Y2tvMGNyajU4cFpoaG83QlZtdE8xT2R1dmFJLU5IbjNDRDM5dWpVY3QtY1hCYWd5b3kwS3A2UE1Qdm05dFI2eHBHR2dfXyZLZXktUGFpci1JZD1BUEtBSUU1RzVDUkRLNlJEM1BHQVwiXG4gICAgfSxcbiAgICBcbl1cblxuY29uc3QgUHVibGljYXRpb25zID0gcHJvcHMgPT57XG4gICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBmb250U2l6ZT17MjB9IG1iPXs0fT5cbiAgICAgICAgICAgICBPdXIgUHVibGljYXRpb25zXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPFNlY3Rpb24+XG4gICAgICAgIHtwcm9wcy5jYXNlU3R1ZGllcy5tYXAoKGNhc2VTdHVkeSApID0+ICggICAvLyBub3RlIHRoZSByZW1vdmVkIHt9XG4gICAgICAgICAgICA8YT57Y2FzZVN0dWR5LnRpdGxlfTwvYT4gKSl9XG4gICAgICAgIDwvU2VjdGlvbj5cblxuXG5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIFxuICAgICl9XG5cbmV4cG9ydCBkZWZhdWx0IFB1YmxpY2F0aW9uc1xuXG5cblxuLy8gY29uc3QgUHVibGljYXRpb25zID0gKCkgPT57XG4vLyAgICAgcmV0dXJuIChcbi8vICA8Q29udGFpbmVyPiBcbi8vICAgICAgPExheW91dCB0aXRsZT1cIlByb2dyYW1zXCI+ICAgICAgICBcbi8vICAgICAgICAgIDxDb250YWluZXI+XG4vLyAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIGZvbnRTaXplPXsyMH0gbWI9ezR9PlxuLy8gICAgICAgICAgICAgICAgICBPdXIgUHVibGljYXRpb25zXG4vLyAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuIFxuLy8gICAgICAgICAgICAgIDxTZWN0aW9uIGRlbGF5PXswLjF9PlxuLy8gICAgICAgICAgICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXtbMV19IGdhcD17Nn0+XG4vLyAgICAgICAgICAgICAgICAgIDxQdWJHcmlkSXRlbVxuLy8gICAgICAgICAgICAgICAgICAgICAgYXV0aG9ycz1cIkdpbCBOLCBTaHJlc3RoYSBSLCBGaXNlciBBXCJcbi8vICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdFc3RpbWF0aW5nIHRoZSBhY2N1cmFjeSBvZiBwaGFybWFjb3Bob3JlLWJhc2VkIGRldGVjdGlvbiBvZiBjb2duYXRlIHJlY2VwdG9yLWxpZ2FuZCBwYWlycyBpbiB0aGUgaW1tdW5vZ2xvYnVsaW4gc3VwZXJmYW1pbHkuJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cubmNiaS5ubG0ubmloLmdvdi9lbnRyZXovcXVlcnkuZmNnaT9kYj1wdWJtZWQmYW1wO2NtZD1SZXRyaWV2ZSZhbXA7ZG9wdD1BYnN0cmFjdFBsdXMmYW1wO2xpc3RfdWlkcz0zMzQ4Mzk5MSZhbXA7cXVlcnlfaGw9MSZhbXA7aXRvb2w9cHVibWVkX2RvY3N1bVwiXG4vLyAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgIDxQdWJHcmlkSXRlbVxuLy8gICAgICAgICAgICAgICAgICAgICAgYXV0aG9ycz1cIlNocmVzdGhhIFIsIEZhamFyZG8gSkUsIEZpc2VyIEFcIlxuLy8gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J1Jlc2lkdWUtYmFzZWQgcGhhcm1hY29waG9yZSBhcHByb2FjaGVzIHRvIHN0dWR5IHByb3RlaW4tcHJvdGVpbiBpbnRlcmFjdGlvbnMuJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cubmNiaS5ubG0ubmloLmdvdi9lbnRyZXovcXVlcnkuZmNnaT9kYj1wdWJtZWQmYW1wO2NtZD1SZXRyaWV2ZSZhbXA7ZG9wdD1BYnN0cmFjdFBsdXMmYW1wO2xpc3RfdWlkcz0zMzQ4NjQzMCZhbXA7cXVlcnlfaGw9MSZhbXA7aXRvb2w9cHVibWVkX2RvY3N1bVwiXG4vLyAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgIDwvU2ltcGxlR3JpZD5cbi8vICAgICAgICAgICAgICA8L1NlY3Rpb24+XG4gXG4vLyAgICAgICAgICAgICAgPFNlY3Rpb24gZGVsYXk9ezAuMX0+XG4vLyAgICAgICAgICAgICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9e1sxXX0gZ2FwPXs2fT5cbi8vICAgICAgICAgICAgICAgICAgPFB1YkdyaWRJdGVtXG4vLyAgICAgICAgICAgICAgICAgICAgICBhdXRob3JzPVwiU2Fya2FyIEEsIEZpc2VyIEEsIFRvbXMgU0EsIFRhcGlub3MgTlwiXG4vLyAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nbWlSTkEtbWVkaWF0ZWQgbG9zcyBvZiBtNkEgaW5jcmVhc2VzIG5hc2NlbnQgdHJhbnNsYXRpb24gaW4gZ2xpb2JsYXN0b21hLidcbi8vICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lm5jYmkubmxtLm5paC5nb3YvZW50cmV6L3F1ZXJ5LmZjZ2k/ZGI9cHVibWVkJmNtZD1SZXRyaWV2ZSZkb3B0PUFic3RyYWN0UGx1cyZsaXN0X3VpZHM9MzM2ODQxMDAmcXVlcnlfaGw9MSZpdG9vbD1wdWJtZWRfZG9jc3VtXCJcbi8vICAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgICAgPFB1YkdyaWRJdGVtXG4vLyAgICAgICAgICAgICAgICAgICAgICBhdXRob3JzPVwiR3J1ZG1hbiBTLCBGYWphcmRvIEpFLCBGaXNlciBBLlwiXG4vLyAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nSU5URVJDQUFUOiBpZGVudGlmeWluZyBpbnRlcmZhY2UgcmVzaWR1ZXMgYmV0d2VlbiBtYWNyb21vbGVjdWxlcy4nXG4vLyAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hY2FkZW1pYy5vdXAuY29tL2Jpb2luZm9ybWF0aWNzL2FkdmFuY2UtYXJ0aWNsZS9kb2kvMTAuMTA5My9iaW9pbmZvcm1hdGljcy9idGFiNTk2LzYzNjc3NjNcIlxuLy8gICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgICA8L1NpbXBsZUdyaWQ+XG4vLyAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuIFxuLy8gICAgICAgICAgICAgIDxTZWN0aW9uPlxuLy8gICAgICAgICAgICAgIDxMaW5rQm94IGN1cnNvcj1cInBvaW50ZXJcIj5cbi8vICAgICAgICAgICAgICA8TGlua092ZXJsYXkgaHJlZj0naHR0cHM6Ly9wdWJtZWQubmNiaS5ubG0ubmloLmdvdi8/dGVybT1BbmRyYXMrRmlzZXImc29ydD1kYXRlJyB0YXJnZXQ9XCJfYmxhbmtcIj5cbi8vICAgICAgICAgICAgICAgICAgPFRleHQgbXQ9ezJ9IGZvbnRTaXplID0gezE0fSB0ZXh0RGVjb3JhdGlvbj0ndW5kZXJsaW5lJz5QdWJNZWQ8L1RleHQ+XG4vLyAgICAgICAgICAgICAgPC9MaW5rT3ZlcmxheT5cbi8vICAgICAgICAgICAgICA8L0xpbmtCb3g+XG4vLyAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuIFxuIFxuLy8gICAgICAgICAgPC9Db250YWluZXI+XG4vLyAgICAgIDwvTGF5b3V0PlxuLy8gIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgIFxuLy8gICAgICApfVxuIFxuLy8gIGV4cG9ydCBkZWZhdWx0IFB1YmxpY2F0aW9uc1xuIFxuIFxuICJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJIZWFkaW5nIiwiU2ltcGxlR3JpZCIsIkxpbmtPdmVybGF5IiwiVGV4dCIsIkxpbmtCb3giLCJMYXlvdXQiLCJTZWN0aW9uIiwiUHViR3JpZEl0ZW0iLCJwdWJzIiwieWVhciIsInRpdGxlIiwiYXV0aG9ycyIsImFic3RhcmN0IiwibGluayIsInRodW1ibmFpbCIsIlB1YmxpY2F0aW9ucyIsInByb3BzIiwiY2FzZVN0dWRpZXMiLCJtYXAiLCJjYXNlU3R1ZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/publications.js\n");

/***/ })

});