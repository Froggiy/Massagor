"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/users/layout",{

/***/ "(app-pages-browser)/./app/components/sidebar/SettingsModal.tsx":
/*!**************************************************!*\
  !*** ./app/components/sidebar/SettingsModal.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modal */ \"(app-pages-browser)/./app/components/Modal.tsx\");\n/* harmony import */ var _inputs_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inputs/Input */ \"(app-pages-browser)/./app/components/inputs/Input.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst SettingsModal = (param)=>{\n    let { isOpen, onClose, currentUser } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { register, handleSubmit, setValue, watch, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({\n        defaultValues: {\n            name: currentUser === null || currentUser === void 0 ? void 0 : currentUser.name,\n            image: currentUser === null || currentUser === void 0 ? void 0 : currentUser.image\n        }\n    });\n    const image = watch(\"image\");\n    const handleUpload = (result)=>{\n        var _result_info;\n        setValue(\"image\", result === null || result === void 0 ? void 0 : (_result_info = result.info) === null || _result_info === void 0 ? void 0 : _result_info.secure_url, {\n            shouldValidate: true\n        });\n    };\n    const onSubmit = (data)=>{\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"/api/settings\", data).then(()=>{\n            router.refresh();\n            onClose();\n        }).catch(()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Somthing Went Wrong!\")).finally(()=>setIsLoading(false));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        isOpen: isOpen,\n        onClose: onClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-b border-gray-900/10 pb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"   text-base   font-semibold   leading-7   text-gray-900    \",\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-1 text-sm leading-6 text-gray-600\",\n                            children: \"Edit Your Public Information.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"   mt-10   flex   flex-col   gap-y-8   \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_inputs_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    disabled: isLoading,\n                                    label: \"Name\",\n                                    id: \"name\",\n                                    errors: errors,\n                                    required: true,\n                                    register: register\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"   block   text-sm   font-medium   leading-6   text-gray-900   \",\n                                            children: \"Photo\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"   mt-2   flex   items-center   gap-x-3   \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                width: \"48\",\n                                                height: \"48\",\n                                                className: \"rounded-full\",\n                                                src: image || (currentUser === null || currentUser === void 0 ? void 0 : currentUser.image) || \"/images/placeholder.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                lineNumber: 63,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n            lineNumber: 62,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SettingsModal, \"ukv0yGzK7ZEAyzao+heIY6VsS70=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = SettingsModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsModal);\nvar _c;\n$RefreshReg$(_c, \"SettingsModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIvU2V0dGluZ3NNb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUcwQjtBQUNrQjtBQUNYO0FBQ3FDO0FBQ2xDO0FBQ1A7QUFDTztBQUNMO0FBUS9CLE1BQU1RLGdCQUE4QztRQUFDLEVBQ2pEQyxNQUFNLEVBQ05DLE9BQU8sRUFDUEMsV0FBVyxFQUNkOztJQUNHLE1BQU1DLFNBQVNYLDBEQUFTQTtJQUN4QixNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxFQUNGYSxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsUUFBUSxFQUNSQyxLQUFLLEVBQ0xDLFdBQVcsRUFDUEMsTUFBTSxFQUNULEVBQ0gsR0FBR2pCLHdEQUFPQSxDQUFjO1FBQ3RCa0IsZUFBZTtZQUNYQyxJQUFJLEVBQUVYLHdCQUFBQSxrQ0FBQUEsWUFBYVcsSUFBSTtZQUN2QkMsS0FBSyxFQUFFWix3QkFBQUEsa0NBQUFBLFlBQWFZLEtBQUs7UUFDN0I7SUFDSjtJQUVBLE1BQU1BLFFBQVFMLE1BQU07SUFFcEIsTUFBTU0sZUFBZSxDQUFDQztZQUNBQTtRQUFsQlIsU0FBUyxTQUFTUSxtQkFBQUEsOEJBQUFBLGVBQUFBLE9BQVFDLElBQUksY0FBWkQsbUNBQUFBLGFBQWNFLFVBQVUsRUFBRTtZQUN4Q0MsZ0JBQWdCO1FBQ3BCO0lBQ0o7SUFFQSxNQUFNQyxXQUF1QyxDQUFDQztRQUMxQzlCLDZDQUFLQSxDQUFDK0IsSUFBSSxDQUFDLGlCQUFpQkQsTUFDM0JFLElBQUksQ0FBQztZQUNGcEIsT0FBT3FCLE9BQU87WUFDZHZCO1FBQ0osR0FDQ3dCLEtBQUssQ0FBQyxJQUFNOUIsdURBQUtBLENBQUMrQixLQUFLLENBQUMseUJBQ3hCQyxPQUFPLENBQUMsSUFBTXRCLGFBQWE7SUFDaEM7SUFFQSxxQkFDSSw4REFBQ1QsOENBQUtBO1FBQUNJLFFBQVFBO1FBQVFDLFNBQVNBO2tCQUM1Qiw0RUFBQzJCO1lBQUtSLFVBQVViLGFBQWFhO3NCQUN6Qiw0RUFBQ1M7Z0JBQUtDLFdBQVU7MEJBQ1osNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7NEJBQUdELFdBQVU7c0NBS1o7Ozs7OztzQ0FHRiw4REFBQ0U7NEJBQUVGLFdBQVU7c0NBQXVDOzs7Ozs7c0NBSXBELDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBTVgsOERBQUNqQyxxREFBS0E7b0NBQ05vQyxVQUFVN0I7b0NBQ1Y4QixPQUFNO29DQUNOQyxJQUFHO29DQUNIeEIsUUFBUUE7b0NBQ1J5QixRQUFRO29DQUNSOUIsVUFBVUE7Ozs7Ozs4Q0FFViw4REFBQ3VCOztzREFDRyw4REFBQ0s7NENBQ0RKLFdBQVU7c0RBT1Q7Ozs7OztzREFHRCw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBTVgsNEVBQUNoQyxrREFBS0E7Z0RBQ051QyxPQUFNO2dEQUNOQyxRQUFPO2dEQUNQUixXQUFVO2dEQUNWUyxLQUFLekIsVUFBU1osd0JBQUFBLGtDQUFBQSxZQUFhWSxLQUFLLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3hFO0dBekdNZjs7UUFLYVAsc0RBQVNBO1FBV25CRSxvREFBT0E7OztLQWhCVks7QUEyR04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9TZXR0aW5nc01vZGFsLnRzeD81MjVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmllbGRWYWx1ZXMsIFN1Ym1pdEhhbmRsZXIsIHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vTW9kYWxcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dHMvSW5wdXRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbnRlcmZhY2UgU2V0dGluZ3NNb2RhbFByb3BzIHtcclxuICAgIGlzT3Blbj86IGJvb2xlYW47XHJcbiAgICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gICAgY3VycmVudFVzZXI6IFVzZXI7XHJcbn1cclxuXHJcbmNvbnN0IFNldHRpbmdzTW9kYWw6IFJlYWN0LkZDPFNldHRpbmdzTW9kYWxQcm9wcz4gPSAoe1xyXG4gICAgaXNPcGVuLFxyXG4gICAgb25DbG9zZSxcclxuICAgIGN1cnJlbnRVc2VyXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB7IFxyXG4gICAgICAgIHJlZ2lzdGVyLFxyXG4gICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICBzZXRWYWx1ZSxcclxuICAgICAgICB3YXRjaCxcclxuICAgICAgICBmb3JtU3RhdGU6IHtcclxuICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgIH1cclxuICAgICB9ID0gdXNlRm9ybTxGaWVsZFZhbHVlcz4oe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZXM6IHtcclxuICAgICAgICAgICAgbmFtZTogY3VycmVudFVzZXI/Lm5hbWUsXHJcbiAgICAgICAgICAgIGltYWdlOiBjdXJyZW50VXNlcj8uaW1hZ2VcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gd2F0Y2goJ2ltYWdlJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkID0gKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoJ2ltYWdlJywgcmVzdWx0Py5pbmZvPy5zZWN1cmVfdXJsLCB7XHJcbiAgICAgICAgICAgIHNob3VsZFZhbGlkYXRlOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdDogU3VibWl0SGFuZGxlcjxGaWVsZFZhbHVlcz4gPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvc2V0dGluZ3MnLCBkYXRhKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgb25DbG9zZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdG9hc3QuZXJyb3IoJ1NvbXRoaW5nIFdlbnQgV3JvbmchJykpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0SXNMb2FkaW5nKGZhbHNlKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9ID5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwic3BhY2UteS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktOTAwLzEwIHBiLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1iYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2VtaWJvbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhZGluZy03XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZ3JheS05MDAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gbGVhZGluZy02IHRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgWW91ciBQdWJsaWMgSW5mb3JtYXRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG10LTEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1jb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwLXktOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtbWVkaXVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhZGluZy02XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1ncmF5LTkwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaG90b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdC0yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcC14LTNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlIHx8IGN1cnJlbnRVc2VyPy5pbWFnZSB8fCAnL2ltYWdlcy9wbGFjZWhvbGRlci5qcGcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzTW9kYWw7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwidG9hc3QiLCJNb2RhbCIsIklucHV0IiwiSW1hZ2UiLCJTZXR0aW5nc01vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsImN1cnJlbnRVc2VyIiwicm91dGVyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRWYWx1ZSIsIndhdGNoIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJpbWFnZSIsImhhbmRsZVVwbG9hZCIsInJlc3VsdCIsImluZm8iLCJzZWN1cmVfdXJsIiwic2hvdWxkVmFsaWRhdGUiLCJvblN1Ym1pdCIsImRhdGEiLCJwb3N0IiwidGhlbiIsInJlZnJlc2giLCJjYXRjaCIsImVycm9yIiwiZmluYWxseSIsImZvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJkaXNhYmxlZCIsImxhYmVsIiwiaWQiLCJyZXF1aXJlZCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar/SettingsModal.tsx\n"));

/***/ })

});