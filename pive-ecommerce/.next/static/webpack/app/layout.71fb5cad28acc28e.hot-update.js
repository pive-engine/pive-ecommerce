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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"d57a76ffbc28\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzFjMTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJkNTdhNzZmZmJjMjhcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/layout/navbar/SearchBar.tsx":
/*!************************************************!*\
  !*** ./components/layout/navbar/SearchBar.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst SearchBox = (param)=>{\n    let { onSearch } = param;\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSearchChange = (event)=>{\n        const value = event.target.value;\n        setSearchTerm(value);\n        onSearch(value); // Przekazuje wprowadzony tekst do funkcji onSearch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center rounded-full border-2 border-gray-600 bg-[#171717] pl-4 pr-3 py-2 w-full max-w-lg mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"search\",\n                placeholder: \"Search for products...\",\n                value: searchTerm,\n                onChange: handleSearchChange,\n                className: \"w-full bg-transparent text-sm text-white placeholder-gray-400 border-none focus:outline-none focus:placeholder-gray-300\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                \"aria-label\": \"Search\",\n                className: \"ml-2 p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    fill: \"none\",\n                    viewBox: \"0 0 24 24\",\n                    strokeWidth: \"1.5\",\n                    stroke: \"currentColor\",\n                    className: \"h-5 w-5 text-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        d: \"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/components/layout/navbar/SearchBar.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBox, \"a1cMJ8t0eYFnsCEdGcHtaGJdbCM=\");\n_c = SearchBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBox);\nvar _c;\n$RefreshReg$(_c, \"SearchBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9TZWFyY2hCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QztBQUV4QyxNQUFNRSxZQUFZO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUM3QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFFN0MsTUFBTUsscUJBQXFCLENBQUNDO1FBQzFCLE1BQU1DLFFBQVFELE1BQU1FLE1BQU0sQ0FBQ0QsS0FBSztRQUNoQ0gsY0FBY0c7UUFDZEwsU0FBU0ssUUFBUSxtREFBbUQ7SUFDdEU7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaTixPQUFPSjtnQkFDUFcsVUFBVVQ7Z0JBQ1ZLLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0s7Z0JBQ0NILE1BQUs7Z0JBQ0xJLGNBQVc7Z0JBQ1hOLFdBQVU7MEJBR1IsNEVBQUNPO29CQUFJQyxPQUFNO29CQUE2QkMsTUFBSztvQkFBT0MsU0FBUTtvQkFBWUMsYUFBWTtvQkFBTUMsUUFBTztvQkFBZVosV0FBVTs4QkFDeEgsNEVBQUNhO3dCQUFLQyxlQUFjO3dCQUFRQyxnQkFBZTt3QkFBUUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRTtHQS9CTXpCO0tBQUFBO0FBaUNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9TZWFyY2hCYXIudHN4Pzg4NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2VhcmNoQm94ID0gKHsgb25TZWFyY2ggfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHNldFNlYXJjaFRlcm0odmFsdWUpO1xyXG4gICAgb25TZWFyY2godmFsdWUpOyAvLyBQcnpla2F6dWplIHdwcm93YWR6b255IHRla3N0IGRvIGZ1bmtjamkgb25TZWFyY2hcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWdyYXktNjAwIGJnLVsjMTcxNzE3XSBwbC00IHByLTMgcHktMiB3LWZ1bGwgbWF4LXctbGcgbXgtYXV0b1wiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgcHJvZHVjdHMuLi5cIlxyXG4gICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXRyYW5zcGFyZW50IHRleHQtc20gdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1ncmF5LTQwMCBib3JkZXItbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cGxhY2Vob2xkZXItZ3JheS0zMDBcIlxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBwLTJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIFNWRyBJY29uICovfVxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlV2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMjEgMjFsLTUuMTk3LTUuMTk3bTAgMEE3LjUgNy41IDAgMTA1LjE5NiA1LjE5NmE3LjUgNy41IDAgMDAxMC42MDcgMTAuNjA3elwiIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICBcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQm94O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNlYXJjaEJveCIsIm9uU2VhcmNoIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsImFyaWEtbGFiZWwiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/layout/navbar/SearchBar.tsx\n"));

/***/ })

});