"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/cards.tsx":
/*!******************************!*\
  !*** ./components/cards.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cards_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards-item */ \"./components/cards-item.tsx\");\n\n\n\nconst cards = [\n    {\n        title: \"Total Registered\",\n        color: \"\",\n        values: \"\"\n    },\n    {\n        title: \"With open Vouchers\",\n        color: \"\",\n        values: \"\"\n    },\n    {\n        title: \"Payments\",\n        color: \"\",\n        values: \"\"\n    },\n    {\n        title: \"Health Care Provider\",\n        color: \"\",\n        values: \"\"\n    },\n    {\n        title: \"NFT Vouchers\",\n        color: \"\",\n        values: \"\"\n    }\n];\nfunction Cards() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 bg-[#DAE8FA] p-[23px] \",\n        children: [\n            cards.map((cards, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cards_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: cards.title,\n                    color: cards.color,\n                    values: cards.values\n                }, void 0, false, {\n                    fileName: \"/home/pandragon/Desktop/WiiQare/Nextjs-tsx/components/cards.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, this)),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pandragon/Desktop/WiiQare/Nextjs-tsx/components/cards.tsx\",\n        lineNumber: 16,\n        columnNumber: 13\n    }, this);\n}\n_c = Cards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cards);\nvar _c;\n$RefreshReg$(_c, \"Cards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUMwQjtBQUVXO0FBRXJDLE1BQU1FLFFBQVE7SUFDVjtRQUFFQyxPQUFPO1FBQW9CQyxPQUFPO1FBQUlDLFFBQVE7SUFBRztJQUNuRDtRQUFFRixPQUFPO1FBQXNCQyxPQUFPO1FBQUlDLFFBQVE7SUFBRztJQUNyRDtRQUFFRixPQUFPO1FBQVlDLE9BQU87UUFBSUMsUUFBUTtJQUFHO0lBQzNDO1FBQUVGLE9BQU87UUFBd0JDLE9BQU87UUFBSUMsUUFBUTtJQUFHO0lBQ3ZEO1FBQUVGLE9BQU87UUFBZ0JDLE9BQU87UUFBSUMsUUFBUTtJQUFHO0NBQ2xEO0FBR0QsU0FBU0MsUUFBUTtJQUNiLHFCQUFRLDhEQUFDQztRQUFJQyxXQUFVOztZQUVsQk4sTUFBTU8sR0FBRyxDQUFDLENBQUNQLE9BQU9RLHNCQUNmLDhEQUFDVCxtREFBU0E7b0JBRU5FLE9BQU9ELE1BQU1DLEtBQUs7b0JBQ2xCQyxPQUFPRixNQUFNRSxLQUFLO29CQUNsQkMsUUFBUUgsTUFBTUcsTUFBTTs7Ozs7O1lBRXpCOzs7Ozs7O0FBRVg7S0FaU0M7QUFjVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzLnRzeD85NjhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IENhcmRzSXRlbSBmcm9tIFwiLi9jYXJkcy1pdGVtXCI7XG5cbmNvbnN0IGNhcmRzID0gW1xuICAgIHsgdGl0bGU6IFwiVG90YWwgUmVnaXN0ZXJlZFwiLCBjb2xvcjogXCJcIiwgdmFsdWVzOiBcIlwiIH0sXG4gICAgeyB0aXRsZTogXCJXaXRoIG9wZW4gVm91Y2hlcnNcIiwgY29sb3I6IFwiXCIsIHZhbHVlczogXCJcIiB9LFxuICAgIHsgdGl0bGU6IFwiUGF5bWVudHNcIiwgY29sb3I6IFwiXCIsIHZhbHVlczogXCJcIiB9LFxuICAgIHsgdGl0bGU6IFwiSGVhbHRoIENhcmUgUHJvdmlkZXJcIiwgY29sb3I6IFwiXCIsIHZhbHVlczogXCJcIiB9LFxuICAgIHsgdGl0bGU6IFwiTkZUIFZvdWNoZXJzXCIsIGNvbG9yOiBcIlwiLCB2YWx1ZXM6IFwiXCIgfSxcbl07XG5cblxuZnVuY3Rpb24gQ2FyZHMoKSB7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTQgbWQ6Z3JpZC1jb2xzLTIgbWQ6Z2FwLTYgeGw6Z3JpZC1jb2xzLTQgMnhsOmdhcC03LjUgYmctWyNEQUU4RkFdIHAtWzIzcHhdIFwiPlxuXG4gICAgICAgIHtjYXJkcy5tYXAoKGNhcmRzLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENhcmRzSXRlbVxuXG4gICAgICAgICAgICAgICAgdGl0bGU9e2NhcmRzLnRpdGxlfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjYXJkcy5jb2xvcn1cbiAgICAgICAgICAgICAgICB2YWx1ZXM9e2NhcmRzLnZhbHVlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICkpfSA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmRzSXRlbSIsImNhcmRzIiwidGl0bGUiLCJjb2xvciIsInZhbHVlcyIsIkNhcmRzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cards.tsx\n"));

/***/ })

});