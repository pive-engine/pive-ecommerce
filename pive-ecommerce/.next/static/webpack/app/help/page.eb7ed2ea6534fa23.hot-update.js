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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _faqs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faqs */ \"(app-pages-browser)/./components/help/FaqCenter/faqs.ts\");\n// FaqCenter.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst FaqItem = (param)=>{\n    let { faq } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Added e parameter to prevent event bubbling\n    const toggleOpen = (e)=>{\n        e.preventDefault();\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border p-4 my-2 rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold flex justify-between items-center\",\n                onClick: toggleOpen,\n                children: [\n                    faq.question,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"cursor-pointer\",\n                        children: isOpen ? \"-\" : \"+\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(isOpen ? \"block\" : \"hidden\", \" mt-2 transition-max-height duration-500 ease-in-out\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: faq.answer\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FaqItem, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = FaqItem;\nconst FaqCenter = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-2xl mx-auto my-10 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-5 text-center p-3 rounded-md shadow-lg relative inline-block\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-orange-200\",\n                        children: \"\\uD83D\\uDCA1\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 3\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text\",\n                        children: \"Frequently Asked Questions\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 3\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-orange-200\",\n                        children: \"FAQ\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 3\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                lineNumber: 31,\n                columnNumber: 1\n            }, undefined),\n            _faqs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((faq)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FaqItem, {\n                    faq: faq\n                }, faq.id, false, {\n                    fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/components/help/FaqCenter/FaqCenter.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = FaqCenter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FaqCenter);\nvar _c, _c1;\n$RefreshReg$(_c, \"FaqItem\");\n$RefreshReg$(_c1, \"FaqCenter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVscC9GYXFDZW50ZXIvRmFxQ2VudGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdCQUFnQjs7O0FBRXdCO0FBQ2Q7QUFFMUIsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLEdBQUcsRUFBRTs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXJDLDhDQUE4QztJQUM5QyxNQUFNTSxhQUFhLENBQUNDO1FBQ2hCQSxFQUFFQyxjQUFjO1FBQ2hCSCxVQUFVLENBQUNEO0lBQ2Y7SUFFQSxxQkFDSSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVO2dCQUFrREUsU0FBU047O29CQUNwRUgsSUFBSVUsUUFBUTtrQ0FDYiw4REFBQ0M7d0JBQUtKLFdBQVU7a0NBQWtCTixTQUFTLE1BQU07Ozs7Ozs7Ozs7OzswQkFFckQsOERBQUNLO2dCQUFJQyxXQUFXLEdBQStCLE9BQTVCTixTQUFTLFVBQVUsVUFBUzswQkFDM0MsNEVBQUNXOzhCQUFHWixJQUFJYSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtHQXBCTWQ7S0FBQUE7QUFzQk4sTUFBTWUsWUFBWTtJQUNkLHFCQUNJLDhEQUFDUjtRQUFJQyxXQUFVOzswQkFDdkIsOERBQUNRO2dCQUFHUixXQUFVOztrQ0FDWiw4REFBQ0k7d0JBQUtKLFdBQVU7a0NBQWtCOzs7Ozs7a0NBQ2xDLDhEQUFDSTt3QkFBS0osV0FBVTtrQ0FBNEU7Ozs7OztrQ0FHNUYsOERBQUNJO3dCQUFLSixXQUFVO2tDQUFrQjs7Ozs7Ozs7Ozs7O1lBSXZCVCw2Q0FBSUEsQ0FBQ2tCLEdBQUcsQ0FBQyxDQUFDaEIsb0JBQ1AsOERBQUNEO29CQUFxQkMsS0FBS0E7bUJBQWJBLElBQUlpQixFQUFFOzs7Ozs7Ozs7OztBQUlwQztNQWpCTUg7QUFtQk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWxwL0ZhcUNlbnRlci9GYXFDZW50ZXIudHN4PzQyZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRmFxQ2VudGVyLnRzeFxyXG5cInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmYXFzIGZyb20gJy4vZmFxcyc7XHJcblxyXG5jb25zdCBGYXFJdGVtID0gKHsgZmFxIH0pID0+IHtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8gQWRkZWQgZSBwYXJhbWV0ZXIgdG8gcHJldmVudCBldmVudCBidWJibGluZ1xyXG4gICAgY29uc3QgdG9nZ2xlT3BlbiA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTQgbXktMiByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiIG9uQ2xpY2s9e3RvZ2dsZU9wZW59PlxyXG4gICAgICAgICAgICAgICAge2ZhcS5xdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+e2lzT3BlbiA/ICctJyA6ICcrJ308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc09wZW4gPyAnYmxvY2snIDogJ2hpZGRlbid9IG10LTIgdHJhbnNpdGlvbi1tYXgtaGVpZ2h0IGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dGB9PlxyXG4gICAgICAgICAgICAgICAgPHA+e2ZhcS5hbnN3ZXJ9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBGYXFDZW50ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsIG14LWF1dG8gbXktMTAgcC00XCI+XHJcbjxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNSB0ZXh0LWNlbnRlciBwLTMgcm91bmRlZC1tZCBzaGFkb3ctbGcgcmVsYXRpdmUgaW5saW5lLWJsb2NrXCI+XHJcbiAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtMjAwXCI+8J+SoTwvc3Bhbj5cclxuICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTQwMCB0by1yZWQtNTAwIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0XCI+XHJcbiAgICBGcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uc1xyXG4gIDwvc3Bhbj5cclxuICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS0yMDBcIj5GQVE8L3NwYW4+XHJcbjwvaDI+XHJcblxyXG5cclxuICAgICAgICAgICAge2ZhcXMubWFwKChmYXEpID0+IChcclxuICAgICAgICAgICAgICAgIDxGYXFJdGVtIGtleT17ZmFxLmlkfSBmYXE9e2ZhcX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFxQ2VudGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImZhcXMiLCJGYXFJdGVtIiwiZmFxIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlT3BlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwib25DbGljayIsInF1ZXN0aW9uIiwic3BhbiIsInAiLCJhbnN3ZXIiLCJGYXFDZW50ZXIiLCJoMiIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/help/FaqCenter/FaqCenter.tsx\n"));

/***/ })

});