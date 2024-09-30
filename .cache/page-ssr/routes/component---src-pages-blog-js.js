"use strict";
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 2539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "D:\\bhautiksojitra.github.io\\node_modules\\react\\index.js"
var external_D_bhautiksojitra_github_io_node_modules_react_index_js_ = __webpack_require__(3035);
;// CONCATENATED MODULE: ./src/components/layout.module.css
// Exports
var navDiv = "layout-module--navDiv--74ef7";
var heading = "layout-module--heading--f158c";
var navLinks = "layout-module--nav-links--1113b";
var navLinkItem = "layout-module--nav-link-item--a5f0a";
var navLinkText = "layout-module--nav-link-text--69cda";

;// CONCATENATED MODULE: ./src/components/layout.js
const Layout=({children})=>{return/*#__PURE__*/external_D_bhautiksojitra_github_io_node_modules_react_index_js_.createElement("nav",{class:"sticky top-0 bg-white shadow-lg z-50 p-4"},/*#__PURE__*/external_D_bhautiksojitra_github_io_node_modules_react_index_js_.createElement("ul",{className:"flex justify-end items-center whitespace-nowrap"},/*#__PURE__*/external_D_bhautiksojitra_github_io_node_modules_react_index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/external_D_bhautiksojitra_github_io_node_modules_react_index_js_.createElement("a",{href:"#home"},"Home")),/*#__PURE__*/external_D_bhautiksojitra_github_io_node_modules_react_index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/external_D_bhautiksojitra_github_io_node_modules_react_index_js_.createElement("a",{href:"#aboutme"},"About Me")),/*#__PURE__*/external_D_bhautiksojitra_github_io_node_modules_react_index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/external_D_bhautiksojitra_github_io_node_modules_react_index_js_.createElement("a",{href:"#jobs"},"Experience")),/*#__PURE__*/external_D_bhautiksojitra_github_io_node_modules_react_index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/external_D_bhautiksojitra_github_io_node_modules_react_index_js_.createElement("a",{href:"mailto:bsojitra2331@gmail.com",class:"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"}," Let's Connect ")),/*#__PURE__*/external_D_bhautiksojitra_github_io_node_modules_react_index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/external_D_bhautiksojitra_github_io_node_modules_react_index_js_.createElement("a",{href:"/Resume_Bhautik_Sojitra.pdf",target:"_blank",class:"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"}," Resume "))));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 5502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3035);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2539);
const BlogPage=({data})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{pageTitle:"My Blog Posts"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"My cool posts will go in here"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,data.allMdx.nodes.map(node=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:node.id},node.excerpt))));};const query="2206651703";const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,"Blog Page");/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-blog-js.js.map