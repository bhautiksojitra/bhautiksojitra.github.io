"use strict";
exports.id = 678;
exports.ids = [678,79];
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

/***/ 5465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3035);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2539);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7076);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(757);
/* harmony import */ var _components_headline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5622);
// Step 1: Import React
// Import the CSS module
// Step 2: Define your component
const AboutPage=()=>{const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_2__.useStaticQuery)("2622458242");const info=data.allMarkdownRemark.edges[0].node.html;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col w-screen items-center mt-24"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col md:flex-row lg:flex-row w-2/3  min-w-96"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_headline_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{placeholder:"About Me"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{class:"mt-5"},info)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:"pr-5 mt-5"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"/images/bhautik_pic.jpg",alt:"something",loading:"lazy",class:"m-10 w-72 min-w-72 h-auto object-top object-contain"})))));};const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,"About Me");// Step 3: Export your component
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

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

/***/ }),

/***/ 6558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3035);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6261);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2539);
/* harmony import */ var _components_headline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5622);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8725);
/* harmony import */ var _jobs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5033);
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5465);
// Step 1: Import React
// Step 2: Define your component
const IndexPage=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:""},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{id:"home",class:"h-screen pt-16"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_home_js__WEBPACK_IMPORTED_MODULE_5__["default"],null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{id:"aboutme",class:"h-screen pt-16 overflow-y-auto overflow-x-hidden"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_about_js__WEBPACK_IMPORTED_MODULE_7__["default"],null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{id:"jobs",class:"h-screen pt-16"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_jobs_js__WEBPACK_IMPORTED_MODULE_6__["default"],null)));};// You'll learn about this in the next task, just copy it for now
const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,"Home Page");// Step 3: Export your component
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ 5033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3035);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2539);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7076);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(757);
/* harmony import */ var _components_headline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5622);
const JobsPage=()=>{const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_2__.useStaticQuery)("735600296");const tabs=data.allMarkdownRemark.edges;const{0:activeTab,1:setActiveTab}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setActiveTab(0);},[]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex flex-col w-screen items-center mt-24"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex flex-col w-2/3  min-w-96"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_headline_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{placeholder:"Where I've Worked"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",{class:"flex mt-5"},tabs.map(tab=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:`border-b mb-2 text-center hover:bg-slate-100 transition-colors duration-200
                                            ${activeTab===tab.node.frontmatter.id?"border-b-4 border-b-red-950":"border-b-2"}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{key:tab.node.frontmatter.id,onClick:()=>setActiveTab(tab.node.frontmatter.id),className:`inline-block whitespace-nowrap px-4 py-2 font-medium 
                                    ${activeTab===tab.node.frontmatter.id?"text-red-800":"text-gray-600"} 
                                    transition-colors duration-200`},tab.node.frontmatter.company)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"mb-2 mt-2"},tabs[activeTab].node.frontmatter.position_name," @ ",tabs[activeTab].node.frontmatter.company_fullname),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"text-sm mb-2"},tabs[activeTab].node.frontmatter.duration),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{className:"prose"},tabs[activeTab].node.html),tabs[activeTab].node.frontmatter.tech_stack.map(title=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"border px-3 mt-3 mx-1 inline-flex rounded-full"},title[0])))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobsPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map