"use strict";
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 5622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3035);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
const Headline=({placeholder})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"text-2xl mr-4 whitespace-nowrap"},placeholder),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-52 h-0.5 bg-gray-400"}));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Headline);

/***/ }),

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

/***/ 8725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3035);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2539);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(757);
/* harmony import */ var _components_headline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5622);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5565);
// Step 1: Import React
// Step 2: Define your component
const HomePage=()=>{const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("3918217035");const frontmatterref=data.allMarkdownRemark.edges[0].node.frontmatter;const fullname=frontmatterref.name;const tagline=frontmatterref.tagline;const title=frontmatterref.title;const info=data.allMarkdownRemark.edges[0].node.html;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col w-screen items-center mt-24"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col w-1/2 min-w-96"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_headline_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{placeholder:"Hi, my name is"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"lg:text-6xl md:text-5xl sm: text-4xl font-bold mb-2"}," ",fullname," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"lg:text-4xl md:text-3xl sm: text-2xl mb-2 text-gray-600"},tagline),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{class:"lg:text-xl md:text-lg sm:text-sm min-w-96"},info),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{class:"flex mt-5 space-x-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://github.com/bhautiksojitra",target:"_blank"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__/* .FaGithub */ .hJX,{size:25}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://linkedin.com/in/bhautik-sojitra/",target:"_blank"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__/* .FaLinkedin */ .ltd,{size:25}))))));};const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,"Home Page");// Step 3: Export your component
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-home-js.js.map