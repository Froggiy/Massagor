"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/conversations/layout",{

/***/ "(app-pages-browser)/./app/components/sidebar/SettingsModal.tsx":
/*!**************************************************!*\
  !*** ./app/components/sidebar/SettingsModal.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modal */ \"(app-pages-browser)/./app/components/Modal.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SettingsModal = (param)=>{\n    let { isOpen, onClose, currentUser } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { register, handleSubmit, setValue, watch, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({\n        defaultValues: {\n            name: currentUser === null || currentUser === void 0 ? void 0 : currentUser.name,\n            image: currentUser === null || currentUser === void 0 ? void 0 : currentUser.image\n        }\n    });\n    const image = watch(\"image\");\n    const handleUpload = (result)=>{\n        var _result_info;\n        setValue(\"image\", result === null || result === void 0 ? void 0 : (_result_info = result.info) === null || _result_info === void 0 ? void 0 : _result_info.secure_url, {\n            shouldValidate: true\n        });\n    };\n    const onSubmit = (data)=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/api/settings\", data).then(()=>{\n            router.refresh();\n            onClose();\n        }).catch(()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Somthing Went Wrong!\")).finally(()=>setIsLoading(false));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        isOpen: isOpen,\n        onClose: onClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-b border-gray-900/10 pb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"   text-base   font-semibold   leading-7   text-gray-900    \",\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-1 text-sm leading-6 text-gray-600\",\n                            children: \"Edit Your Public Information.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"   mt-10   flex   flex-col   gap-y-8      \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                lineNumber: 61,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n            lineNumber: 60,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SettingsModal, \"ukv0yGzK7ZEAyzao+heIY6VsS70=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = SettingsModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsModal);\nvar _c;\n$RefreshReg$(_c, \"SettingsModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIvU2V0dGluZ3NNb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHMEI7QUFDa0I7QUFDWDtBQUNxQztBQUNsQztBQUNQO0FBUTdCLE1BQU1NLGdCQUE4QztRQUFDLEVBQ2pEQyxNQUFNLEVBQ05DLE9BQU8sRUFDUEMsV0FBVyxFQUNkOztJQUNHLE1BQU1DLFNBQVNULDBEQUFTQTtJQUN4QixNQUFNLENBQUNVLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxFQUNGVyxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsUUFBUSxFQUNSQyxLQUFLLEVBQ0xDLFdBQVcsRUFDUEMsTUFBTSxFQUNULEVBQ0gsR0FBR2Ysd0RBQU9BLENBQWM7UUFDdEJnQixlQUFlO1lBQ1hDLElBQUksRUFBRVgsd0JBQUFBLGtDQUFBQSxZQUFhVyxJQUFJO1lBQ3ZCQyxLQUFLLEVBQUVaLHdCQUFBQSxrQ0FBQUEsWUFBYVksS0FBSztRQUM3QjtJQUNKO0lBRUEsTUFBTUEsUUFBUUwsTUFBTTtJQUVwQixNQUFNTSxlQUFlLENBQUNDO1lBQ0FBO1FBQWxCUixTQUFTLFNBQVNRLG1CQUFBQSw4QkFBQUEsZUFBQUEsT0FBUUMsSUFBSSxjQUFaRCxtQ0FBQUEsYUFBY0UsVUFBVSxFQUFFO1lBQ3hDQyxnQkFBZ0I7UUFDcEI7SUFDSjtJQUVBLE1BQU1DLFdBQXVDLENBQUNDO1FBQzFDNUIsNkNBQUtBLENBQUM2QixJQUFJLENBQUMsaUJBQWlCRCxNQUMzQkUsSUFBSSxDQUFDO1lBQ0ZwQixPQUFPcUIsT0FBTztZQUNkdkI7UUFDSixHQUNDd0IsS0FBSyxDQUFDLElBQU01Qix1REFBS0EsQ0FBQzZCLEtBQUssQ0FBQyx5QkFDeEJDLE9BQU8sQ0FBQyxJQUFNdEIsYUFBYTtJQUNoQztJQUVBLHFCQUNJLDhEQUFDUCw4Q0FBS0E7UUFBQ0UsUUFBUUE7UUFBUUMsU0FBU0E7a0JBQzVCLDRFQUFDMkI7WUFBS1IsVUFBVWIsYUFBYWE7c0JBQ3pCLDRFQUFDUztnQkFBS0MsV0FBVTswQkFDWiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FLWjs7Ozs7O3NDQUdGLDhEQUFDRTs0QkFBRUYsV0FBVTtzQ0FBdUM7Ozs7OztzQ0FJcEQsOERBQUNEOzRCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjdkM7R0F4RU0vQjs7UUFLYUwsc0RBQVNBO1FBV25CRSxvREFBT0E7OztLQWhCVkc7QUEwRU4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9TZXR0aW5nc01vZGFsLnRzeD81MjVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmllbGRWYWx1ZXMsIFN1Ym1pdEhhbmRsZXIsIHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vTW9kYWxcIjtcclxuXHJcbmludGVyZmFjZSBTZXR0aW5nc01vZGFsUHJvcHMge1xyXG4gICAgaXNPcGVuPzogYm9vbGVhbjtcclxuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgICBjdXJyZW50VXNlcjogVXNlcjtcclxufVxyXG5cclxuY29uc3QgU2V0dGluZ3NNb2RhbDogUmVhY3QuRkM8U2V0dGluZ3NNb2RhbFByb3BzPiA9ICh7XHJcbiAgICBpc09wZW4sXHJcbiAgICBvbkNsb3NlLFxyXG4gICAgY3VycmVudFVzZXJcclxufSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHsgXHJcbiAgICAgICAgcmVnaXN0ZXIsXHJcbiAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgIHNldFZhbHVlLFxyXG4gICAgICAgIHdhdGNoLFxyXG4gICAgICAgIGZvcm1TdGF0ZToge1xyXG4gICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgfVxyXG4gICAgIH0gPSB1c2VGb3JtPEZpZWxkVmFsdWVzPih7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlczoge1xyXG4gICAgICAgICAgICBuYW1lOiBjdXJyZW50VXNlcj8ubmFtZSxcclxuICAgICAgICAgICAgaW1hZ2U6IGN1cnJlbnRVc2VyPy5pbWFnZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSB3YXRjaCgnaW1hZ2UnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWQgPSAocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSgnaW1hZ2UnLCByZXN1bHQ/LmluZm8/LnNlY3VyZV91cmwsIHtcclxuICAgICAgICAgICAgc2hvdWxkVmFsaWRhdGU6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPEZpZWxkVmFsdWVzPiA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9zZXR0aW5ncycsIGRhdGEpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICBvbkNsb3NlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0b2FzdC5lcnJvcignU29tdGhpbmcgV2VudCBXcm9uZyEnKSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0gPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJzcGFjZS15LTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS05MDAvMTAgcGItMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zZW1pYm9sZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWFkaW5nLTdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1ncmF5LTkwMCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1zbSBsZWFkaW5nLTYgdGV4dC1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdCBZb3VyIFB1YmxpYyBJbmZvcm1hdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXQtMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWNvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXAteS04XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NNb2RhbDsiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJ0b2FzdCIsIk1vZGFsIiwiU2V0dGluZ3NNb2RhbCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJjdXJyZW50VXNlciIsInJvdXRlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwic2V0VmFsdWUiLCJ3YXRjaCIsImZvcm1TdGF0ZSIsImVycm9ycyIsImRlZmF1bHRWYWx1ZXMiLCJuYW1lIiwiaW1hZ2UiLCJoYW5kbGVVcGxvYWQiLCJyZXN1bHQiLCJpbmZvIiwic2VjdXJlX3VybCIsInNob3VsZFZhbGlkYXRlIiwib25TdWJtaXQiLCJkYXRhIiwicG9zdCIsInRoZW4iLCJyZWZyZXNoIiwiY2F0Y2giLCJlcnJvciIsImZpbmFsbHkiLCJmb3JtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar/SettingsModal.tsx\n"));

/***/ })

});