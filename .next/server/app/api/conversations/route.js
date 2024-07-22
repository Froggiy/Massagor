"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/conversations/route";
exports.ids = ["app/api/conversations/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversations%2Froute&page=%2Fapi%2Fconversations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversations%2Froute.ts&appDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversations%2Froute&page=%2Fapi%2Fconversations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversations%2Froute.ts&appDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_dead_inside_Documents_webs_messanger_app_api_conversations_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/conversations/route.ts */ \"(rsc)/./app/api/conversations/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/conversations/route\",\n        pathname: \"/api/conversations\",\n        filename: \"route\",\n        bundlePath: \"app/api/conversations/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\api\\\\conversations\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_dead_inside_Documents_webs_messanger_app_api_conversations_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/conversations/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb252ZXJzYXRpb25zJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb252ZXJzYXRpb25zJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udmVyc2F0aW9ucyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNkZWFkX2luc2lkZSU1Q0RvY3VtZW50cyU1Q3dlYnMlNUNtZXNzYW5nZXIlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2RlYWRfaW5zaWRlJTVDRG9jdW1lbnRzJTVDd2VicyU1Q21lc3NhbmdlciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDcUM7QUFDbEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXNzYW5nZXIvP2QyNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZGVhZF9pbnNpZGVcXFxcRG9jdW1lbnRzXFxcXHdlYnNcXFxcbWVzc2FuZ2VyXFxcXGFwcFxcXFxhcGlcXFxcY29udmVyc2F0aW9uc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY29udmVyc2F0aW9ucy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NvbnZlcnNhdGlvbnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NvbnZlcnNhdGlvbnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxkZWFkX2luc2lkZVxcXFxEb2N1bWVudHNcXFxcd2Vic1xcXFxtZXNzYW5nZXJcXFxcYXBwXFxcXGFwaVxcXFxjb252ZXJzYXRpb25zXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jb252ZXJzYXRpb25zL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversations%2Froute&page=%2Fapi%2Fconversations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversations%2Froute.ts&appDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/actions/getCurrentUser.ts":
/*!***************************************!*\
  !*** ./app/actions/getCurrentUser.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n/* harmony import */ var _getSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSession */ \"(rsc)/./app/actions/getSession.ts\");\n\n\nconst getCurrentUser = async ()=>{\n    try {\n        const session = await (0,_getSession__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        if (!session?.user?.email) {\n            return null;\n        }\n        const currentUser = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                email: session.user.email\n            }\n        });\n        if (!currentUser) {\n            return null;\n        }\n        return currentUser;\n    } catch (error) {\n        return null;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentUser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYWN0aW9ucy9nZXRDdXJyZW50VXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFSDtBQUV0QyxNQUFNRSxpQkFBaUI7SUFDbkIsSUFBRztRQUNDLE1BQU1DLFVBQVUsTUFBTUYsdURBQVVBO1FBRWhDLElBQUcsQ0FBQ0UsU0FBU0MsTUFBTUMsT0FBTztZQUN0QixPQUFPO1FBQ1g7UUFFQSxNQUFNQyxjQUFjLE1BQU1OLDBEQUFNQSxDQUFDSSxJQUFJLENBQUNHLFVBQVUsQ0FBQztZQUM3Q0MsT0FBTztnQkFDSEgsT0FBT0YsUUFBUUMsSUFBSSxDQUFDQyxLQUFLO1lBQzdCO1FBQ0o7UUFFQSxJQUFHLENBQUNDLGFBQVk7WUFDWixPQUFPO1FBQ1g7UUFFQSxPQUFPQTtJQUVYLEVBQUMsT0FBTUcsT0FBVztRQUNkLE9BQU87SUFDWDtBQUNKO0FBRUEsaUVBQWVQLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXNzYW5nZXIvLi9hcHAvYWN0aW9ucy9nZXRDdXJyZW50VXNlci50cz8xZWFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIkAvYXBwL2xpYnMvcHJpc21hZGJcIjtcclxuXHJcbmltcG9ydCBnZXRTZXNzaW9uIGZyb20gXCIuL2dldFNlc3Npb25cIjtcclxuXHJcbmNvbnN0IGdldEN1cnJlbnRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKCk7XHJcblxyXG4gICAgICAgIGlmKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIGFzIHN0cmluZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKCFjdXJyZW50VXNlcil7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3VycmVudFVzZXJcclxuXHJcbiAgICB9Y2F0Y2goZXJyb3I6IGFueSl7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEN1cnJlbnRVc2VyIl0sIm5hbWVzIjpbInByaXNtYSIsImdldFNlc3Npb24iLCJnZXRDdXJyZW50VXNlciIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJjdXJyZW50VXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/actions/getCurrentUser.ts\n");

/***/ }),

/***/ "(rsc)/./app/actions/getSession.ts":
/*!***********************************!*\
  !*** ./app/actions/getSession.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/auth/[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\nasync function getSession() {\n    return await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYWN0aW9ucy9nZXRTZXNzaW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFaUI7QUFFL0MsZUFBZUU7SUFDMUIsT0FBTyxNQUFNRiwyREFBZ0JBLENBQUNDLGlFQUFXQTtBQUM3QyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3Nhbmdlci8uL2FwcC9hY3Rpb25zL2dldFNlc3Npb24udHM/MzU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5cclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi4vYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0U2Vzc2lvbigpIHtcclxuICAgIHJldHVybiBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsImdldFNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/actions/getSession.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n\n\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__.PrismaAdapter)(_app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Invalid Credentials\");\n                }\n                const user = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user?.hashedPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const isCorrectPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return user;\n            }\n        })\n    ],\n    debug: \"development\" === \"development\",\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDc0I7QUFDZ0I7QUFDVjtBQUNBO0FBQ0U7QUFFakI7QUFFbEMsTUFBTU8sY0FBMkI7SUFDcENDLFNBQVNILHdFQUFhQSxDQUFDQywwREFBTUE7SUFDN0JHLFdBQVc7UUFDWE4sc0VBQWNBLENBQUM7WUFDWE8sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7UUFDM0M7UUFDQVgsc0VBQWNBLENBQUM7WUFDWE0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDSSxnQkFBZ0I7WUFDdENGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssb0JBQW9CO1FBQ2xEO1FBQ0FmLDJFQUFtQkEsQ0FBQztZQUNaZ0IsTUFBTTtZQUNOQyxhQUFhO2dCQUNUQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFPO2dCQUN0Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNwRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3ZCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFTO29CQUM5QyxNQUFNLElBQUlFLE1BQU07Z0JBQ3BCO2dCQUVBLE1BQU1DLE9BQU8sTUFBTXBCLDBEQUFNQSxDQUFDb0IsSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3RDQyxPQUFPO3dCQUNIUixPQUFPRCxZQUFZQyxLQUFLO29CQUM1QjtnQkFDSjtnQkFFQSxJQUFJLENBQUNNLFFBQU8sQ0FBQ0EsTUFBTUcsZ0JBQWU7b0JBQzlCLE1BQU0sSUFBSUosTUFBTTtnQkFDcEI7Z0JBRUEsTUFBTUssb0JBQW9CLE1BQU05QixxREFBYyxDQUMxQ21CLFlBQVlJLFFBQVEsRUFDcEJHLEtBQUtHLGNBQWM7Z0JBR3ZCLElBQUcsQ0FBQ0MsbUJBQWtCO29CQUNsQixNQUFNLElBQUlMLE1BQU07Z0JBQ3BCO2dCQUVBLE9BQU9DO1lBQ1g7UUFDUjtLQUNEO0lBQ0RNLE9BQU9yQixrQkFBeUI7SUFDaENzQixTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxRQUFReEIsUUFBUUMsR0FBRyxDQUFDd0IsZUFBZTtBQUNyQyxFQUFDO0FBRUQsTUFBTUMsVUFBVXBDLGdEQUFRQSxDQUFDTTtBQUVrQiIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3Nhbmdlci8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcbmltcG9ydCBOZXh0QXV0aCwgeyBBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9hcHAvbGlicy9wcmlzbWFkYlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBBdXRoT3B0aW9ucyA9IHtcclxuICAgIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgR2l0aHViUHJvdmlkZXIoe1xyXG4gICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQgYXMgc3RyaW5nLFxyXG4gICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCBhcyBzdHJpbmcsXHJcbiAgICB9KSxcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCBhcyBzdHJpbmcsXHJcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCBhcyBzdHJpbmcsXHJcbiAgICB9KSxcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiAnY3JlZGVudGlhbHMnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdlbWFpbCcsIHR5cGU6ICd0ZXh0JyB9LFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdwYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ3JlZGVudGlhbHMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyfHwgIXVzZXI/Lmhhc2hlZFBhc3N3b3JkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JlZGVudGlhbHMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuaGFzaGVkUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIWlzQ29ycmVjdFBhc3N3b3JkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JlZGVudGlhbHMnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgfSlcclxuICBdLFxyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICB9LFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07Il0sIm5hbWVzIjpbImJjcnlwdCIsIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIkdpdGh1YlByb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJFcnJvciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJoYXNoZWRQYXNzd29yZCIsImlzQ29ycmVjdFBhc3N3b3JkIiwiY29tcGFyZSIsImRlYnVnIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/conversations/route.ts":
/*!****************************************!*\
  !*** ./app/api/conversations/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/actions/getCurrentUser */ \"(rsc)/./app/actions/getCurrentUser.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n\n\n\nasync function POST(request) {\n    try {\n        const currentUser = await (0,_app_actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const body = await request.json();\n        const { userId, isGroup, members, name } = body;\n        if (!currentUser?.id || !currentUser?.email) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Unauthorized\", {\n                status: 401\n            });\n        }\n        if (isGroup && (!members || members.length < 2 || !name)) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Invalid data\", {\n                status: 400\n            });\n        }\n        if (isGroup) {\n            const newconversation = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].conversation.create({\n                data: {\n                    name,\n                    isGroup,\n                    users: {\n                        connect: [\n                            ...members.map((member)=>({\n                                    id: member.value\n                                })),\n                            {\n                                id: currentUser.id\n                            }\n                        ]\n                    }\n                },\n                include: {\n                    users: true\n                }\n            });\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(newconversation);\n        }\n        const existingConversations = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].conversation.findMany({\n            where: {\n                OR: [\n                    {\n                        userIds: {\n                            equals: [\n                                currentUser.id,\n                                userId\n                            ]\n                        }\n                    },\n                    {\n                        userIds: {\n                            equals: [\n                                userId,\n                                currentUser.id\n                            ]\n                        }\n                    }\n                ]\n            }\n        });\n        const singlConversation = existingConversations[0];\n        if (singlConversation) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(singlConversation);\n        }\n        const newConversation = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].conversation.create({\n            data: {\n                users: {\n                    connect: [\n                        {\n                            id: currentUser.id\n                        },\n                        {\n                            id: userId\n                        }\n                    ]\n                }\n            },\n            include: {\n                users: true\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(newConversation);\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Internal Error\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvbnZlcnNhdGlvbnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwRDtBQUNmO0FBQ0Y7QUFHbEMsZUFBZUcsS0FDbEJDLE9BQWdCO0lBRWhCLElBQUc7UUFDQyxNQUFNQyxjQUFjLE1BQU1MLHVFQUFjQTtRQUN4QyxNQUFNTSxPQUFPLE1BQU1GLFFBQVFHLElBQUk7UUFDL0IsTUFBTSxFQUNGQyxNQUFNLEVBQ05DLE9BQU8sRUFDUEMsT0FBTyxFQUNQQyxJQUFJLEVBQ1AsR0FBR0w7UUFFSixJQUFHLENBQUNELGFBQWFPLE1BQU0sQ0FBQ1AsYUFBYVEsT0FBTztZQUN4QyxPQUFPLElBQUlaLHFEQUFZQSxDQUFDLGdCQUFnQjtnQkFBQ2EsUUFBUTtZQUFHO1FBQ3hEO1FBRUEsSUFBR0wsV0FBWSxFQUFDQyxXQUFXQSxRQUFRSyxNQUFNLEdBQUcsS0FBSyxDQUFDSixJQUFHLEdBQUc7WUFDcEQsT0FBTyxJQUFJVixxREFBWUEsQ0FBQyxnQkFBZ0I7Z0JBQUNhLFFBQVE7WUFBRztRQUN4RDtRQUVBLElBQUdMLFNBQVE7WUFDUCxNQUFNTyxrQkFBa0IsTUFBTWQsMERBQU1BLENBQUNlLFlBQVksQ0FBQ0MsTUFBTSxDQUFDO2dCQUNyREMsTUFBTTtvQkFDRlI7b0JBQ0FGO29CQUNBVyxPQUFPO3dCQUNIQyxTQUFTOytCQUNGWCxRQUFRWSxHQUFHLENBQUMsQ0FBQ0MsU0FBNkI7b0NBQ3pDWCxJQUFJVyxPQUFPQyxLQUFLO2dDQUNwQjs0QkFDQTtnQ0FDSVosSUFBSVAsWUFBWU8sRUFBRTs0QkFDdEI7eUJBQ0g7b0JBQ0w7Z0JBQ0o7Z0JBQ0FhLFNBQVM7b0JBQ0xMLE9BQU87Z0JBQ1g7WUFDSjtZQUVBLE9BQU9uQixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDUztRQUM3QjtRQUVBLE1BQU1VLHdCQUF3QixNQUFNeEIsMERBQU1BLENBQUNlLFlBQVksQ0FBQ1UsUUFBUSxDQUFDO1lBQzdEQyxPQUFPO2dCQUNIQyxJQUFJO29CQUNBO3dCQUNJQyxTQUFTOzRCQUNMQyxRQUFRO2dDQUFDMUIsWUFBWU8sRUFBRTtnQ0FBRUo7NkJBQU87d0JBQ3BDO29CQUNKO29CQUNBO3dCQUNJc0IsU0FBUzs0QkFDTEMsUUFBUTtnQ0FBQ3ZCO2dDQUFRSCxZQUFZTyxFQUFFOzZCQUFDO3dCQUNwQztvQkFDSjtpQkFDSDtZQUNMO1FBQ0o7UUFFQSxNQUFNb0Isb0JBQW9CTixxQkFBcUIsQ0FBQyxFQUFFO1FBRWxELElBQUlNLG1CQUFrQjtZQUNsQixPQUFPL0IscURBQVlBLENBQUNNLElBQUksQ0FBQ3lCO1FBQzdCO1FBRUEsTUFBTUMsa0JBQWtCLE1BQU0vQiwwREFBTUEsQ0FBQ2UsWUFBWSxDQUFDQyxNQUFNLENBQUM7WUFDckRDLE1BQU07Z0JBQ0ZDLE9BQU87b0JBQ0hDLFNBQVM7d0JBQ0w7NEJBQ0lULElBQUlQLFlBQVlPLEVBQUU7d0JBQ3RCO3dCQUNBOzRCQUNJQSxJQUFJSjt3QkFDUjtxQkFDSDtnQkFDTDtZQUNKO1lBQ0FpQixTQUFTO2dCQUNMTCxPQUFPO1lBQ1g7UUFDSjtRQUVBLE9BQU9uQixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDMEI7SUFDN0IsRUFBQyxPQUFNQyxPQUFZO1FBQ2YsT0FBTyxJQUFJakMscURBQVlBLENBQUMsa0JBQWtCO1lBQUNhLFFBQVM7UUFBRztJQUMzRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzc2FuZ2VyLy4vYXBwL2FwaS9jb252ZXJzYXRpb25zL3JvdXRlLnRzPzA0OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEN1cnJlbnRVc2VyIGZyb20gXCJAL2FwcC9hY3Rpb25zL2dldEN1cnJlbnRVc2VyXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2FwcC9saWJzL3ByaXNtYWRiXCI7XHJcbmltcG9ydCB7IGVxdWFsIH0gZnJvbSBcImFzc2VydFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QoXHJcbiAgICByZXF1ZXN0OiBSZXF1ZXN0XHJcbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIGlzR3JvdXAsXHJcbiAgICAgICAgICAgIG1lbWJlcnMsXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICB9ID0gYm9keVxyXG5cclxuICAgICAgICBpZighY3VycmVudFVzZXI/LmlkIHx8ICFjdXJyZW50VXNlcj8uZW1haWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ1VuYXV0aG9yaXplZCcsIHtzdGF0dXM6IDQwMX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpc0dyb3VwICYmICghbWVtYmVycyB8fCBtZW1iZXJzLmxlbmd0aCA8IDIgfHwgIW5hbWUpKXtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ0ludmFsaWQgZGF0YScsIHtzdGF0dXM6IDQwMH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpc0dyb3VwKXtcclxuICAgICAgICAgICAgY29uc3QgbmV3Y29udmVyc2F0aW9uID0gYXdhaXQgcHJpc21hLmNvbnZlcnNhdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNHcm91cCxcclxuICAgICAgICAgICAgICAgICAgICB1c2Vyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5tZW1iZXJzLm1hcCgobWVtYmVyOiB7dmFsdWU6IHN0cmluZ30pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1lbWJlci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjdXJyZW50VXNlci5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihuZXdjb252ZXJzYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdDb252ZXJzYXRpb25zID0gYXdhaXQgcHJpc21hLmNvbnZlcnNhdGlvbi5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBPUjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXF1YWxzOiBbY3VycmVudFVzZXIuaWQsIHVzZXJJZF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcXVhbHM6IFt1c2VySWQsIGN1cnJlbnRVc2VyLmlkXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNpbmdsQ29udmVyc2F0aW9uID0gZXhpc3RpbmdDb252ZXJzYXRpb25zWzBdO1xyXG5cclxuICAgICAgICBpZiAoc2luZ2xDb252ZXJzYXRpb24pe1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oc2luZ2xDb252ZXJzYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbmV3Q29udmVyc2F0aW9uID0gYXdhaXQgcHJpc21hLmNvbnZlcnNhdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB1c2Vyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGN1cnJlbnRVc2VyLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1c2VySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgdXNlcnM6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24obmV3Q29udmVyc2F0aW9uKVxyXG4gICAgfWNhdGNoKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZSgnSW50ZXJuYWwgRXJyb3InLCB7c3RhdHVzIDogNTAwfSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJnZXRDdXJyZW50VXNlciIsIk5leHRSZXNwb25zZSIsInByaXNtYSIsIlBPU1QiLCJyZXF1ZXN0IiwiY3VycmVudFVzZXIiLCJib2R5IiwianNvbiIsInVzZXJJZCIsImlzR3JvdXAiLCJtZW1iZXJzIiwibmFtZSIsImlkIiwiZW1haWwiLCJzdGF0dXMiLCJsZW5ndGgiLCJuZXdjb252ZXJzYXRpb24iLCJjb252ZXJzYXRpb24iLCJjcmVhdGUiLCJkYXRhIiwidXNlcnMiLCJjb25uZWN0IiwibWFwIiwibWVtYmVyIiwidmFsdWUiLCJpbmNsdWRlIiwiZXhpc3RpbmdDb252ZXJzYXRpb25zIiwiZmluZE1hbnkiLCJ3aGVyZSIsIk9SIiwidXNlcklkcyIsImVxdWFscyIsInNpbmdsQ29udmVyc2F0aW9uIiwibmV3Q29udmVyc2F0aW9uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/conversations/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/libs/prismadb.ts":
/*!******************************!*\
  !*** ./app/libs/prismadb.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGlicy9wcmlzbWFkYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFNOUMsTUFBTUMsU0FBU0MsV0FBV0MsTUFBTSxJQUFJLElBQUlILHdEQUFZQTtBQUNwRCxJQUFHSSxJQUF5QixFQUFjRixXQUFXQyxNQUFNLEdBQUdGO0FBRTlELGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzc2FuZ2VyLy4vYXBwL2xpYnMvcHJpc21hZGIudHM/NzgyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCA7XHJcbn1cclxuXHJcbmNvbnN0IGNsaWVudCA9IGdsb2JhbFRoaXMucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsVGhpcy5wcmlzbWEgPSBjbGllbnRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY2xpZW50IiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/libs/prismadb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversations%2Froute&page=%2Fapi%2Fconversations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversations%2Froute.ts&appDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();