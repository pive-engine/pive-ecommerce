"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"211fba277664\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzFjMTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyMTFmYmEyNzc2NjRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/layout/navbar/SearchBar.tsx":
/*!************************************************!*\
  !*** ./components/layout/navbar/SearchBar.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// SearchBar.tsx\n\n\nconst SearchBox = (param)=>{\n    let { searchTerm, onSearch } = param;\n    const handleSearchChange = (event)=>{\n        onSearch(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search-box-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"search\",\n                placeholder: \"Search for products...\",\n                value: searchTerm,\n                onChange: handleSearchChange,\n                className: \"search-input\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                \"aria-label\": \"Search\",\n                className: \"search-button\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    fill: \"none\",\n                    viewBox: \"0 0 24 24\",\n                    strokeWidth: \"1.5\",\n                    stroke: \"currentColor\",\n                    className: \"search-icon\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        d: \"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            searchTerm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"search-results\",\n                children: searchResults.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"search-result\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                            href: product.link,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 15\n                        }, undefined)\n                    }, product.id, false, {\n                        fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SearchBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBox);\nvar _c;\n$RefreshReg$(_c, \"SearchBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9TZWFyY2hCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxnQkFBZ0I7O0FBQ1U7QUFFMUIsTUFBTUMsWUFBWTtRQUFDLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFO0lBQ3pDLE1BQU1DLHFCQUFxQixDQUFDQztRQUMxQkYsU0FBU0UsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzdCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkwsT0FBT0w7Z0JBQ1BXLFVBQVVUO2dCQUNWSyxXQUFVOzs7Ozs7MEJBRVosOERBQUNLO2dCQUNDSCxNQUFLO2dCQUNMSSxjQUFXO2dCQUNYTixXQUFVOzBCQUVWLDRFQUFDTztvQkFBSUMsT0FBTTtvQkFBNkJDLE1BQUs7b0JBQU9DLFNBQVE7b0JBQVlDLGFBQVk7b0JBQU1DLFFBQU87b0JBQWVaLFdBQVU7OEJBQ3hILDRFQUFDYTt3QkFBS0MsZUFBYzt3QkFBUUMsZ0JBQWU7d0JBQVFDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHeER2Qiw0QkFDQyw4REFBQ3dCO2dCQUFHakIsV0FBVTswQkFDWGtCLGNBQWNDLEdBQUcsQ0FBQ0MsQ0FBQUEsd0JBQ2pCLDhEQUFDQzt3QkFBb0JyQixXQUFVO2tDQUM3Qiw0RUFBQ3NCOzRCQUFLQyxNQUFNSCxRQUFRSSxJQUFJO3NDQUN0Qiw0RUFBQ0M7MENBQUdMLFFBQVFNLElBQUk7Ozs7Ozs7Ozs7O3VCQUZYTixRQUFRTyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBVS9CO0tBcENNbkM7QUFzQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL1NlYXJjaEJhci50c3g/ODg0MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZWFyY2hCYXIudHN4XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTZWFyY2hCb3ggPSAoeyBzZWFyY2hUZXJtLCBvblNlYXJjaCB9KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBvblNlYXJjaChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib3gtY29udGFpbmVyXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBwcm9kdWN0cy4uLlwiXHJcbiAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cclxuICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2VXaWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cInNlYXJjaC1pY29uXCI+XHJcbiAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0yMSAyMWwtNS4xOTctNS4xOTdtMCAwQTcuNSA3LjUgMCAxMDUuMTk2IDUuMTk2YTcuNSA3LjUgMCAwMDEwLjYwNyAxMC42MDd6XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtzZWFyY2hUZXJtICYmIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHNcIj5cclxuICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17cHJvZHVjdC5pZH0gY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2R1Y3QubGlua30+XHJcbiAgICAgICAgICAgICAgICA8YT57cHJvZHVjdC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJveDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2VhcmNoQm94Iiwic2VhcmNoVGVybSIsIm9uU2VhcmNoIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJhcmlhLWxhYmVsIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiLCJ1bCIsInNlYXJjaFJlc3VsdHMiLCJtYXAiLCJwcm9kdWN0IiwibGkiLCJMaW5rIiwiaHJlZiIsImxpbmsiLCJhIiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/layout/navbar/SearchBar.tsx\n"));

/***/ })

});