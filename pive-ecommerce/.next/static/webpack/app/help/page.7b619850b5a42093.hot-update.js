"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/help/page",{

/***/ "(app-pages-browser)/./components/help/FaqCenter/FaqCenter.tsx":
/*!*************************************************!*\
  !*** ./components/help/FaqCenter/FaqCenter.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _faqs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faqs */ \"(app-pages-browser)/./components/help/FaqCenter/faqs.ts\");\n// FaqCenter.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst FaqItem = (param)=>{\n    let { faq } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOpen = (e)=>{\n        // Prevent any parent handlers from being executed\n        e.stopPropagation();\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border p-4 my-2 rounded-md\",\n        onClick: toggleOpen,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold flex justify-between items-center\",\n                children: [\n                    faq.question,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"cursor-pointer\",\n                        children: isOpen ? \"-\" : \"+\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(isOpen ? \"block\" : \"hidden\", \" mt-2\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: faq.answer\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FaqItem, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = FaqItem;\nconst FaqCenter = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-2xl mx-auto my-10 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-5\",\n                children: \"Frequently Asked Questions\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            _faqs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((faq)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FaqItem, {\n                    faq: faq\n                }, faq.id, false, {\n                    fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = FaqCenter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FaqCenter);\nvar _c, _c1;\n$RefreshReg$(_c, \"FaqItem\");\n$RefreshReg$(_c1, \"FaqCenter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVscC9GYXFDZW50ZXIvRmFxQ2VudGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdCQUFnQjs7O0FBRXdCO0FBQ2Q7QUFFMUIsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLEdBQUcsRUFBRTs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1NLGFBQWEsQ0FBQ0M7UUFDaEIsa0RBQWtEO1FBQ2xEQSxFQUFFQyxlQUFlO1FBQ2pCSCxVQUFVLENBQUNEO0lBQ2Y7SUFFQSxxQkFDSSw4REFBQ0s7UUFBSUMsV0FBVTtRQUE2QkMsU0FBU0w7OzBCQUNqRCw4REFBQ007Z0JBQUdGLFdBQVU7O29CQUNUUCxJQUFJVSxRQUFRO2tDQUNiLDhEQUFDQzt3QkFBS0osV0FBVTtrQ0FBa0JOLFNBQVMsTUFBTTs7Ozs7Ozs7Ozs7OzBCQUVyRCw4REFBQ0s7Z0JBQUlDLFdBQVcsR0FBK0IsT0FBNUJOLFNBQVMsVUFBVSxVQUFTOzBCQUMzQyw0RUFBQ1c7OEJBQUdaLElBQUlhLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBcEJNZDtLQUFBQTtBQXNCTixNQUFNZSxZQUFZO0lBQ2QscUJBQ0ksOERBQUNSO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDUTtnQkFBR1IsV0FBVTswQkFBMEI7Ozs7OztZQUN2Q1QsNkNBQUlBLENBQUNrQixHQUFHLENBQUMsQ0FBQ2hCLG9CQUNQLDhEQUFDRDtvQkFBcUJDLEtBQUtBO21CQUFiQSxJQUFJaUIsRUFBRTs7Ozs7Ozs7Ozs7QUFJcEM7TUFUTUg7QUFXTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlbHAvRmFxQ2VudGVyL0ZhcUNlbnRlci50c3g/NDJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGYXFDZW50ZXIudHN4XHJcblwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmYXFzIGZyb20gJy4vZmFxcyc7XHJcblxyXG5jb25zdCBGYXFJdGVtID0gKHsgZmFxIH0pID0+IHtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlT3BlbiA9IChlKSA9PiB7XHJcbiAgICAgICAgLy8gUHJldmVudCBhbnkgcGFyZW50IGhhbmRsZXJzIGZyb20gYmVpbmcgZXhlY3V0ZWRcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTQgbXktMiByb3VuZGVkLW1kXCIgb25DbGljaz17dG9nZ2xlT3Blbn0+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge2ZhcS5xdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+e2lzT3BlbiA/ICctJyA6ICcrJ308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc09wZW4gPyAnYmxvY2snIDogJ2hpZGRlbid9IG10LTJgfT5cclxuICAgICAgICAgICAgICAgIDxwPntmYXEuYW5zd2VyfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgRmFxQ2VudGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvIG15LTEwIHAtNFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTVcIj5GcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uczwvaDI+XHJcbiAgICAgICAgICAgIHtmYXFzLm1hcCgoZmFxKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmFxSXRlbSBrZXk9e2ZhcS5pZH0gZmFxPXtmYXF9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhcUNlbnRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJmYXFzIiwiRmFxSXRlbSIsImZhcSIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZU9wZW4iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImgzIiwicXVlc3Rpb24iLCJzcGFuIiwicCIsImFuc3dlciIsIkZhcUNlbnRlciIsImgyIiwibWFwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/help/FaqCenter/FaqCenter.tsx\n"));

/***/ })

});