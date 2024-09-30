
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("D:\\bhautiksojitra.github.io\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("D:\\bhautiksojitra.github.io\\src\\pages\\about.js")),
  "component---src-pages-blog-js": preferDefault(require("D:\\bhautiksojitra.github.io\\src\\pages\\blog.js")),
  "component---src-pages-contact-js": preferDefault(require("D:\\bhautiksojitra.github.io\\src\\pages\\contact.js")),
  "component---src-pages-home-js": preferDefault(require("D:\\bhautiksojitra.github.io\\src\\pages\\home.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\bhautiksojitra.github.io\\src\\pages\\index.js")),
  "component---src-pages-jobs-js": preferDefault(require("D:\\bhautiksojitra.github.io\\src\\pages\\jobs.js"))
}

