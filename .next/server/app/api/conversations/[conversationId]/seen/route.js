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
exports.id = "app/api/conversations/[conversationId]/seen/route";
exports.ids = ["app/api/conversations/[conversationId]/seen/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversations%2F%5BconversationId%5D%2Fseen%2Froute&page=%2Fapi%2Fconversations%2F%5BconversationId%5D%2Fseen%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversations%2F%5BconversationId%5D%2Fseen%2Froute.ts&appDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversations%2F%5BconversationId%5D%2Fseen%2Froute&page=%2Fapi%2Fconversations%2F%5BconversationId%5D%2Fseen%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversations%2F%5BconversationId%5D%2Fseen%2Froute.ts&appDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_dead_inside_Documents_webs_messanger_app_api_conversations_conversationId_seen_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/conversations/[conversationId]/seen/route.ts */ \"(rsc)/./app/api/conversations/[conversationId]/seen/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/conversations/[conversationId]/seen/route\",\n        pathname: \"/api/conversations/[conversationId]/seen\",\n        filename: \"route\",\n        bundlePath: \"app/api/conversations/[conversationId]/seen/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\dead_inside\\\\Documents\\\\webs\\\\messanger\\\\app\\\\api\\\\conversations\\\\[conversationId]\\\\seen\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_dead_inside_Documents_webs_messanger_app_api_conversations_conversationId_seen_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/conversations/[conversationId]/seen/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb252ZXJzYXRpb25zJTJGJTVCY29udmVyc2F0aW9uSWQlNUQlMkZzZWVuJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb252ZXJzYXRpb25zJTJGJTVCY29udmVyc2F0aW9uSWQlNUQlMkZzZWVuJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udmVyc2F0aW9ucyUyRiU1QmNvbnZlcnNhdGlvbklkJTVEJTJGc2VlbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNkZWFkX2luc2lkZSU1Q0RvY3VtZW50cyU1Q3dlYnMlNUNtZXNzYW5nZXIlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2RlYWRfaW5zaWRlJTVDRG9jdW1lbnRzJTVDd2VicyU1Q21lc3NhbmdlciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNkQ7QUFDMUk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXNzYW5nZXIvPzc4ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZGVhZF9pbnNpZGVcXFxcRG9jdW1lbnRzXFxcXHdlYnNcXFxcbWVzc2FuZ2VyXFxcXGFwcFxcXFxhcGlcXFxcY29udmVyc2F0aW9uc1xcXFxbY29udmVyc2F0aW9uSWRdXFxcXHNlZW5cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NvbnZlcnNhdGlvbnMvW2NvbnZlcnNhdGlvbklkXS9zZWVuL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY29udmVyc2F0aW9ucy9bY29udmVyc2F0aW9uSWRdL3NlZW5cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NvbnZlcnNhdGlvbnMvW2NvbnZlcnNhdGlvbklkXS9zZWVuL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZGVhZF9pbnNpZGVcXFxcRG9jdW1lbnRzXFxcXHdlYnNcXFxcbWVzc2FuZ2VyXFxcXGFwcFxcXFxhcGlcXFxcY29udmVyc2F0aW9uc1xcXFxbY29udmVyc2F0aW9uSWRdXFxcXHNlZW5cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NvbnZlcnNhdGlvbnMvW2NvbnZlcnNhdGlvbklkXS9zZWVuL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversations%2F%5BconversationId%5D%2Fseen%2Froute&page=%2Fapi%2Fconversations%2F%5BconversationId%5D%2Fseen%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversations%2F%5BconversationId%5D%2Fseen%2Froute.ts&appDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/conversations/[conversationId]/seen/route.ts":
/*!**************************************************************!*\
  !*** ./app/api/conversations/[conversationId]/seen/route.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/actions/getCurrentUser */ \"(rsc)/./app/actions/getCurrentUser.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n\n\n\nasync function POST(request, { params }) {\n    try {\n        const currentUser = await (0,_app_actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const { conversationId } = params;\n        if (!currentUser?.id || !currentUser?.email) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Unauthorized\", {\n                status: 401\n            });\n        }\n        //Find the existing conversation\n        const conversation = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].conversation.findUnique({\n            where: {\n                id: conversationId\n            },\n            include: {\n                messages: {\n                    include: {\n                        seen: true\n                    }\n                },\n                users: true\n            }\n        });\n        if (!conversation) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Invalid ID\", {\n                status: 400\n            });\n        }\n        // Find The Last Message\n        const lastMessage = conversation.messages[conversation.messages.length - 1];\n        if (!lastMessage) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(conversation);\n        }\n        //Update seen of last message\n        const updatedMessage = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].message.update({\n            where: {\n                id: lastMessage.id\n            },\n            include: {\n                sender: true,\n                seen: true\n            },\n            data: {\n                seen: {\n                    connect: {\n                        id: currentUser.id\n                    }\n                }\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(updatedMessage);\n    } catch (error) {\n        console.log(error, \"ERROR_MESSAGES_SEEN\");\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Internal Error\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvbnZlcnNhdGlvbnMvW2NvbnZlcnNhdGlvbklkXS9zZWVuL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEQ7QUFDZjtBQUVIO0FBTWpDLGVBQWVHLEtBQ2xCQyxPQUFnQixFQUNoQixFQUFFQyxNQUFNLEVBQXVCO0lBRS9CLElBQUc7UUFDQyxNQUFNQyxjQUFjLE1BQU1OLHVFQUFjQTtRQUN4QyxNQUFNLEVBQ0ZPLGNBQWMsRUFDakIsR0FBR0Y7UUFFSixJQUFHLENBQUNDLGFBQWFFLE1BQU0sQ0FBQ0YsYUFBYUcsT0FBTTtZQUN2QyxPQUFPLElBQUlSLHFEQUFZQSxDQUFDLGdCQUFnQjtnQkFBRVMsUUFBUTtZQUFHO1FBQ3pEO1FBRUEsZ0NBQWdDO1FBQ2hDLE1BQU1DLGVBQWUsTUFBTVQsMERBQU1BLENBQUNTLFlBQVksQ0FBQ0MsVUFBVSxDQUFDO1lBQ3REQyxPQUFPO2dCQUNITCxJQUFJRDtZQUNSO1lBQ0FPLFNBQVM7Z0JBQ0xDLFVBQVU7b0JBQ05ELFNBQVM7d0JBQ0xFLE1BQU07b0JBQ1Y7Z0JBQ0o7Z0JBQ0FDLE9BQU87WUFDWDtRQUNKO1FBRUEsSUFBRyxDQUFDTixjQUFhO1lBQ2IsT0FBTyxJQUFJVixxREFBWUEsQ0FBQyxjQUFjO2dCQUFFUyxRQUFRO1lBQUc7UUFDdkQ7UUFFQSx3QkFBd0I7UUFDeEIsTUFBTVEsY0FBY1AsYUFBYUksUUFBUSxDQUFDSixhQUFhSSxRQUFRLENBQUNJLE1BQU0sR0FBRyxFQUFFO1FBRTNFLElBQUcsQ0FBQ0QsYUFBYTtZQUNiLE9BQU9qQixxREFBWUEsQ0FBQ21CLElBQUksQ0FBQ1Q7UUFDN0I7UUFFQSw2QkFBNkI7UUFDN0IsTUFBTVUsaUJBQWlCLE1BQU1uQiwwREFBTUEsQ0FBQ29CLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO1lBQy9DVixPQUFPO2dCQUNITCxJQUFJVSxZQUFZVixFQUFFO1lBQ3RCO1lBQ0FNLFNBQVM7Z0JBQ0xVLFFBQVE7Z0JBQ1JSLE1BQU07WUFDVjtZQUNBUyxNQUFNO2dCQUNGVCxNQUFNO29CQUNGVSxTQUFTO3dCQUNMbEIsSUFBSUYsWUFBWUUsRUFBRTtvQkFDdEI7Z0JBQ0o7WUFDSjtRQUNKO1FBRUEsT0FBT1AscURBQVlBLENBQUNtQixJQUFJLENBQUNDO0lBQzdCLEVBQUMsT0FBT00sT0FBVztRQUNmQyxRQUFRQyxHQUFHLENBQUNGLE9BQU87UUFDbkIsT0FBTyxJQUFJMUIscURBQVlBLENBQUMsa0JBQWtCO1lBQUVTLFFBQVE7UUFBSTtJQUM1RDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzc2FuZ2VyLy4vYXBwL2FwaS9jb252ZXJzYXRpb25zL1tjb252ZXJzYXRpb25JZF0vc2Vlbi9yb3V0ZS50cz9hNzRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRDdXJyZW50VXNlciBmcm9tIFwiQC9hcHAvYWN0aW9ucy9nZXRDdXJyZW50VXNlclwiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvYXBwL2xpYnMvcHJpc21hZGJcIlxyXG5cclxuaW50ZXJmYWNlIElwYXJhbXMge1xyXG4gICAgY29udmVyc2F0aW9uSWQ/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChcclxuICAgIHJlcXVlc3Q6IFJlcXVlc3QsXHJcbiAgICB7IHBhcmFtcyB9OiB7IHBhcmFtczogSXBhcmFtcyB9XHJcbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbklkXHJcbiAgICAgICAgfSA9IHBhcmFtcztcclxuXHJcbiAgICAgICAgaWYoIWN1cnJlbnRVc2VyPy5pZCB8fCAhY3VycmVudFVzZXI/LmVtYWlsKXtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ1VuYXV0aG9yaXplZCcsIHsgc3RhdHVzOiA0MDF9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vRmluZCB0aGUgZXhpc3RpbmcgY29udmVyc2F0aW9uXHJcbiAgICAgICAgY29uc3QgY29udmVyc2F0aW9uID0gYXdhaXQgcHJpc21hLmNvbnZlcnNhdGlvbi5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBjb252ZXJzYXRpb25JZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VlbjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1c2VyczogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZighY29udmVyc2F0aW9uKXtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ0ludmFsaWQgSUQnLCB7IHN0YXR1czogNDAwfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGaW5kIFRoZSBMYXN0IE1lc3NhZ2VcclxuICAgICAgICBjb25zdCBsYXN0TWVzc2FnZSA9IGNvbnZlcnNhdGlvbi5tZXNzYWdlc1tjb252ZXJzYXRpb24ubWVzc2FnZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgIGlmKCFsYXN0TWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oY29udmVyc2F0aW9uKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9VcGRhdGUgc2VlbiBvZiBsYXN0IG1lc3NhZ2VcclxuICAgICAgICBjb25zdCB1cGRhdGVkTWVzc2FnZSA9IGF3YWl0IHByaXNtYS5tZXNzYWdlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogbGFzdE1lc3NhZ2UuaWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgc2VuZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VlbjogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBzZWVuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogY3VycmVudFVzZXIuaWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHVwZGF0ZWRNZXNzYWdlKVxyXG4gICAgfWNhdGNoIChlcnJvcjogYW55KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgJ0VSUk9SX01FU1NBR0VTX1NFRU4nKVxyXG4gICAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiSW50ZXJuYWwgRXJyb3JcIiwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImdldEN1cnJlbnRVc2VyIiwiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiUE9TVCIsInJlcXVlc3QiLCJwYXJhbXMiLCJjdXJyZW50VXNlciIsImNvbnZlcnNhdGlvbklkIiwiaWQiLCJlbWFpbCIsInN0YXR1cyIsImNvbnZlcnNhdGlvbiIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImluY2x1ZGUiLCJtZXNzYWdlcyIsInNlZW4iLCJ1c2VycyIsImxhc3RNZXNzYWdlIiwibGVuZ3RoIiwianNvbiIsInVwZGF0ZWRNZXNzYWdlIiwibWVzc2FnZSIsInVwZGF0ZSIsInNlbmRlciIsImRhdGEiLCJjb25uZWN0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/conversations/[conversationId]/seen/route.ts\n");

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
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversations%2F%5BconversationId%5D%2Fseen%2Froute&page=%2Fapi%2Fconversations%2F%5BconversationId%5D%2Fseen%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversations%2F%5BconversationId%5D%2Fseen%2Froute.ts&appDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdead_inside%5CDocuments%5Cwebs%5Cmessanger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();