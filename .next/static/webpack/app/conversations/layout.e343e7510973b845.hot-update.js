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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modal */ \"(app-pages-browser)/./app/components/Modal.tsx\");\n/* harmony import */ var _inputs_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inputs/Input */ \"(app-pages-browser)/./app/components/inputs/Input.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-cloudinary */ \"(app-pages-browser)/./node_modules/next-cloudinary/dist/index.mjs\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Button */ \"(app-pages-browser)/./app/components/Button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst SettingsModal = (param)=>{\n    let { isOpen, onClose, currentUser } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { register, handleSubmit, setValue, watch, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        defaultValues: {\n            name: currentUser === null || currentUser === void 0 ? void 0 : currentUser.name,\n            image: currentUser === null || currentUser === void 0 ? void 0 : currentUser.image\n        }\n    });\n    const image = watch(\"image\");\n    const handleUpload = (result)=>{\n        var _result_info;\n        setValue(\"image\", result === null || result === void 0 ? void 0 : (_result_info = result.info) === null || _result_info === void 0 ? void 0 : _result_info.secure_url, {\n            shouldValidate: true\n        });\n    };\n    const onSubmit = (data)=>{\n        axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(\"/api/settings\", data).then(()=>{\n            router.refresh();\n            onClose();\n        }).catch(()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Somthing Went Wrong!\")).finally(()=>setIsLoading(false));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        isOpen: isOpen,\n        onClose: onClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-b border-gray-900/10 pb-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"   text-base   font-semibold   leading-7   text-gray-900    \",\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-1 text-sm leading-6 text-gray-600\",\n                                children: \"Edit Your Public Information.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"   mt-10   flex   flex-col   gap-y-8   \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_inputs_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        disabled: isLoading,\n                                        label: \"Name\",\n                                        id: \"name\",\n                                        errors: errors,\n                                        required: true,\n                                        register: register\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"   block   text-sm   font-medium   leading-6   text-gray-900   \",\n                                                children: \"Photo\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"   mt-2   flex   items-center   gap-x-3   \",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        width: \"48\",\n                                                        height: \"48\",\n                                                        className: \"rounded-full\",\n                                                        src: image || (currentUser === null || currentUser === void 0 ? void 0 : currentUser.image) || \"/images/placeholder.jpg\",\n                                                        alt: \"Avatar\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                                        lineNumber: 111,\n                                                        columnNumber: 37\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_cloudinary__WEBPACK_IMPORTED_MODULE_7__.CldUploadButton, {\n                                                        options: {\n                                                            maxFiles: 1\n                                                        },\n                                                        onUpload: handleUpload,\n                                                        uploadPreset: \"krxolodz\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                            disabled: isLoading,\n                                                            secondary: true,\n                                                            type: \"button\",\n                                                            children: \"Change\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                                            lineNumber: 123,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                                        lineNumber: 118,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                                lineNumber: 105,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"   mt-6   flex   items-center   justify-end   gap-x-6   \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                disabled: isLoading,\n                                secondary: true,\n                                onclick: onClose,\n                                children: \"Cansel\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                lineNumber: 145,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                disabled: isLoading,\n                                type: true,\n                                children: \"Cansel\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n                lineNumber: 65,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\components\\\\sidebar\\\\SettingsModal.tsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SettingsModal, \"ukv0yGzK7ZEAyzao+heIY6VsS70=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n_c = SettingsModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsModal);\nvar _c;\n$RefreshReg$(_c, \"SettingsModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIvU2V0dGluZ3NNb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRzBCO0FBQ2tCO0FBQ1g7QUFDcUM7QUFDbEM7QUFDUDtBQUNPO0FBQ0w7QUFDbUI7QUFDbkI7QUFRL0IsTUFBTVUsZ0JBQThDO1FBQUMsRUFDakRDLE1BQU0sRUFDTkMsT0FBTyxFQUNQQyxXQUFXLEVBQ2Q7O0lBQ0csTUFBTUMsU0FBU2IsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLEVBQ0ZlLFFBQVEsRUFDUkMsWUFBWSxFQUNaQyxRQUFRLEVBQ1JDLEtBQUssRUFDTEMsV0FBVyxFQUNQQyxNQUFNLEVBQ1QsRUFDSCxHQUFHbkIsd0RBQU9BLENBQWM7UUFDdEJvQixlQUFlO1lBQ1hDLElBQUksRUFBRVgsd0JBQUFBLGtDQUFBQSxZQUFhVyxJQUFJO1lBQ3ZCQyxLQUFLLEVBQUVaLHdCQUFBQSxrQ0FBQUEsWUFBYVksS0FBSztRQUM3QjtJQUNKO0lBRUEsTUFBTUEsUUFBUUwsTUFBTTtJQUVwQixNQUFNTSxlQUFlLENBQUNDO1lBQ0FBO1FBQWxCUixTQUFTLFNBQVNRLG1CQUFBQSw4QkFBQUEsZUFBQUEsT0FBUUMsSUFBSSxjQUFaRCxtQ0FBQUEsYUFBY0UsVUFBVSxFQUFFO1lBQ3hDQyxnQkFBZ0I7UUFDcEI7SUFDSjtJQUVBLE1BQU1DLFdBQXVDLENBQUNDO1FBQzFDaEMsOENBQUtBLENBQUNpQyxJQUFJLENBQUMsaUJBQWlCRCxNQUMzQkUsSUFBSSxDQUFDO1lBQ0ZwQixPQUFPcUIsT0FBTztZQUNkdkI7UUFDSixHQUNDd0IsS0FBSyxDQUFDLElBQU1oQyx1REFBS0EsQ0FBQ2lDLEtBQUssQ0FBQyx5QkFDeEJDLE9BQU8sQ0FBQyxJQUFNdEIsYUFBYTtJQUNoQztJQUVBLHFCQUNJLDhEQUFDWCw4Q0FBS0E7UUFBQ00sUUFBUUE7UUFBUUMsU0FBU0E7a0JBQzVCLDRFQUFDMkI7WUFBS1IsVUFBVWIsYUFBYWE7c0JBQ3pCLDRFQUFDUztnQkFBS0MsV0FBVTs7a0NBQ1osOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUdELFdBQVU7MENBS1o7Ozs7OzswQ0FHRiw4REFBQ0U7Z0NBQUVGLFdBQVU7MENBQXVDOzs7Ozs7MENBSXBELDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBTVgsOERBQUNuQyxxREFBS0E7d0NBQ05zQyxVQUFVN0I7d0NBQ1Y4QixPQUFNO3dDQUNOQyxJQUFHO3dDQUNIeEIsUUFBUUE7d0NBQ1J5QixRQUFRO3dDQUNSOUIsVUFBVUE7Ozs7OztrREFFViw4REFBQ3VCOzswREFDRyw4REFBQ0s7Z0RBQ0RKLFdBQVU7MERBT1Q7Ozs7OzswREFHRCw4REFBQ0Q7Z0RBQUlDLFdBQVU7O2tFQU1YLDhEQUFDbEMsa0RBQUtBO3dEQUNOeUMsT0FBTTt3REFDTkMsUUFBTzt3REFDUFIsV0FBVTt3REFDVlMsS0FBS3pCLFVBQVNaLHdCQUFBQSxrQ0FBQUEsWUFBYVksS0FBSyxLQUFJO3dEQUNwQzBCLEtBQUk7Ozs7OztrRUFFSiw4REFBQzNDLDREQUFlQTt3REFDaEI0QyxTQUFTOzREQUFFQyxVQUFVO3dEQUFFO3dEQUN2QkMsVUFBVTVCO3dEQUNWNkIsY0FBYTtrRUFFVCw0RUFBQzlDLCtDQUFNQTs0REFDUG1DLFVBQVU3Qjs0REFDVnlDLFNBQVM7NERBQ1RDLE1BQUs7c0VBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVNyQiw4REFBQ2pCO3dCQUNEQyxXQUFVOzswQ0FRTiw4REFBQ2hDLCtDQUFNQTtnQ0FDUG1DLFVBQVU3QjtnQ0FDVnlDLFNBQVM7Z0NBQ1RFLFNBQVM5QzswQ0FDUjs7Ozs7OzBDQUdELDhEQUFDSCwrQ0FBTUE7Z0NBQ1BtQyxVQUFVN0I7Z0NBQ1YwQyxJQUFJOzBDQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3pCO0dBL0lNL0M7O1FBS2FULHNEQUFTQTtRQVduQkUsb0RBQU9BOzs7S0FoQlZPO0FBaUpOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIvU2V0dGluZ3NNb2RhbC50c3g/NTI1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZpZWxkVmFsdWVzLCBTdWJtaXRIYW5kbGVyLCB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL01vZGFsXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRzL0lucHV0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBDbGRVcGxvYWRCdXR0b24gfSBmcm9tIFwibmV4dC1jbG91ZGluYXJ5XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL0J1dHRvblwiO1xyXG5cclxuaW50ZXJmYWNlIFNldHRpbmdzTW9kYWxQcm9wcyB7XHJcbiAgICBpc09wZW4/OiBib29sZWFuO1xyXG4gICAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxuICAgIGN1cnJlbnRVc2VyOiBVc2VyO1xyXG59XHJcblxyXG5jb25zdCBTZXR0aW5nc01vZGFsOiBSZWFjdC5GQzxTZXR0aW5nc01vZGFsUHJvcHM+ID0gKHtcclxuICAgIGlzT3BlbixcclxuICAgIG9uQ2xvc2UsXHJcbiAgICBjdXJyZW50VXNlclxyXG59KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgeyBcclxuICAgICAgICByZWdpc3RlcixcclxuICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgc2V0VmFsdWUsXHJcbiAgICAgICAgd2F0Y2gsXHJcbiAgICAgICAgZm9ybVN0YXRlOiB7XHJcbiAgICAgICAgICAgIGVycm9ycyxcclxuICAgICAgICB9XHJcbiAgICAgfSA9IHVzZUZvcm08RmllbGRWYWx1ZXM+KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGN1cnJlbnRVc2VyPy5uYW1lLFxyXG4gICAgICAgICAgICBpbWFnZTogY3VycmVudFVzZXI/LmltYWdlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IHdhdGNoKCdpbWFnZScpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZCA9IChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKCdpbWFnZScsIHJlc3VsdD8uaW5mbz8uc2VjdXJlX3VybCwge1xyXG4gICAgICAgICAgICBzaG91bGRWYWxpZGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQ6IFN1Ym1pdEhhbmRsZXI8RmllbGRWYWx1ZXM+ID0gKGRhdGEpID0+IHtcclxuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3NldHRpbmdzJywgZGF0YSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRvYXN0LmVycm9yKCdTb210aGluZyBXZW50IFdyb25nIScpKVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHNldElzTG9hZGluZyhmYWxzZSkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfSA+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInNwYWNlLXktMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTkwMC8xMCBwYi0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYmFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNlbWlib2xkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYWRpbmctN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWdyYXktOTAwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIGxlYWRpbmctNiB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0IFlvdXIgUHVibGljIEluZm9ybWF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdC0xMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtY29sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcC15LThcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LW1lZGl1bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYWRpbmctNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZ3JheS05MDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhvdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXQtMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXAteC0zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZSB8fCBjdXJyZW50VXNlcj8uaW1hZ2UgfHwgJy9pbWFnZXMvcGxhY2Vob2xkZXIuanBnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsZFVwbG9hZEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17eyBtYXhGaWxlczogMSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZD17aGFuZGxlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWRQcmVzZXQ9XCJrcnhvbG9kelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2xkVXBsb2FkQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbXQtNlxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWVuZFxyXG4gICAgICAgICAgICAgICAgICAgIGdhcC14LTZcclxuICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaz17b25DbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2Fuc2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2Fuc2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzTW9kYWw7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwidG9hc3QiLCJNb2RhbCIsIklucHV0IiwiSW1hZ2UiLCJDbGRVcGxvYWRCdXR0b24iLCJCdXR0b24iLCJTZXR0aW5nc01vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsImN1cnJlbnRVc2VyIiwicm91dGVyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRWYWx1ZSIsIndhdGNoIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJpbWFnZSIsImhhbmRsZVVwbG9hZCIsInJlc3VsdCIsImluZm8iLCJzZWN1cmVfdXJsIiwic2hvdWxkVmFsaWRhdGUiLCJvblN1Ym1pdCIsImRhdGEiLCJwb3N0IiwidGhlbiIsInJlZnJlc2giLCJjYXRjaCIsImVycm9yIiwiZmluYWxseSIsImZvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJkaXNhYmxlZCIsImxhYmVsIiwiaWQiLCJyZXF1aXJlZCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0Iiwib3B0aW9ucyIsIm1heEZpbGVzIiwib25VcGxvYWQiLCJ1cGxvYWRQcmVzZXQiLCJzZWNvbmRhcnkiLCJ0eXBlIiwib25jbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar/SettingsModal.tsx\n"));

/***/ })

});