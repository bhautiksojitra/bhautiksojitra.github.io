"use strict";(self.webpackChunkbhautiksojitra=self.webpackChunkbhautiksojitra||[]).push([[795],{4067:function(e,t,r){var n=r(7294);r(4160);t.Z=e=>{let{placeholder:t}=e;return n.createElement("div",{className:"flex items-center"},n.createElement("h1",{className:"text-2xl mr-4 whitespace-nowrap"},t),n.createElement("div",{className:"w-52 h-0.5 bg-gray-400"}))}},4087:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(7294),l="layout-module--nav-link-item--a5f0a";var a=e=>{let{children:t}=e;return n.createElement("nav",{class:"sticky top-0 bg-white shadow-lg z-50 p-4"},n.createElement("ul",{className:"flex justify-end items-center whitespace-nowrap"},n.createElement("li",{className:l},n.createElement("a",{href:"#home"},"Home")),n.createElement("li",{className:l},n.createElement("a",{href:"#aboutme"},"About Me")),n.createElement("li",{className:l},n.createElement("a",{href:"#jobs"},"Experience")),n.createElement("li",{className:l},n.createElement("a",{href:"mailto:bsojitra2331@gmail.com",class:"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"}," Let's Connect ")),n.createElement("li",{className:l},n.createElement("a",{href:"/Resume_Bhautik_Sojitra.pdf",target:"_blank",class:"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"}," Resume "))))}},8725:function(e,t,r){r.r(t),r.d(t,{Head:function(){return o}});var n=r(7294),l=r(4160),a=(r(4087),r(5576)),i=r(4067),c=r(2091);const o=()=>n.createElement("title",null,"Home Page");t.default=()=>{const e=(0,l.K2)("3918217035"),t=e.allMarkdownRemark.edges[0].node.frontmatter,r=t.name,o=t.tagline,s=(t.title,e.allMarkdownRemark.edges[0].node.html);return n.createElement("div",{className:"flex flex-col w-screen items-center mt-24"},n.createElement("div",{className:"flex flex-col w-1/2 min-w-96"},n.createElement(i.Z,{placeholder:"Hi, my name is"}),n.createElement("div",{className:"lg:text-6xl md:text-5xl sm: text-4xl font-bold mb-2"}," ",r," "),n.createElement("div",{className:"lg:text-4xl md:text-3xl sm: text-2xl mb-2 text-gray-600"},o),n.createElement(a.ZP,{class:"lg:text-xl md:text-lg sm:text-sm min-w-96"},s),n.createElement("ul",{class:"flex mt-5 space-x-2"},n.createElement("li",null,n.createElement("a",{href:"https://github.com/bhautiksojitra",target:"_blank"},n.createElement(c.hJX,{size:25}))),n.createElement("li",null,n.createElement("a",{href:"https://linkedin.com/in/bhautik-sojitra/",target:"_blank"},n.createElement(c.ltd,{size:25}))))))}},5576:function(e,t,r){var n=r(7294);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}const a=["children","options"],i={blockQuote:"0",breakLine:"1",breakThematic:"2",codeBlock:"3",codeFenced:"4",codeInline:"5",footnote:"6",footnoteReference:"7",gfmTask:"8",heading:"9",headingSetext:"10",htmlBlock:"11",htmlComment:"12",htmlSelfClosing:"13",image:"14",link:"15",linkAngleBraceStyleDetector:"16",linkBareUrlDetector:"17",linkMailtoDetector:"18",newlineCoalescer:"19",orderedList:"20",paragraph:"21",ref:"22",refImage:"23",refLink:"24",table:"25",tableSeparator:"26",text:"27",textBolded:"28",textEmphasized:"29",textEscaped:"30",textMarked:"31",textStrikethroughed:"32",unorderedList:"33"};var c,o;(o=c||(c={}))[o.MAX=0]="MAX",o[o.HIGH=1]="HIGH",o[o.MED=2]="MED",o[o.LOW=3]="LOW",o[o.MIN=4]="MIN";const s=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{for:"htmlFor"}),u={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},d=["style","script"],m=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,p=/mailto:/i,f=/\n{2,}$/,h=/^(\s*>[\s\S]*?)(?=\n{2,})/,g=/^ *> ?/gm,y=/^ {2,}\n/,k=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,x=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,b=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,v=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,E=/^(?:\n *)*\n/,w=/\r\n?/g,O=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,j=/^\[\^([^\]]+)]/,S=/\f/g,C=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,z=/^\s*?\[(x|\s)\]/,N=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,$=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,P=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,L=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,A=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,R=/^<!--[\s\S]*?(?:-->)/,T=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,M=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,B=/^\{.*\}$/,I=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,D=/^<([^ >]+@[^ >]+)>/,_=/^<([^ >]+:\/[^ >]+)>/,H=/-([a-z])?/gi,U=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,Z=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,F=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,W=/^\[([^\]]*)\] ?\[([^\]]*)\]/,G=/(\[|\])/g,X=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,q=/\t/g,Q=/(^ *\||\| *$)/g,V=/^ *:-+: *$/,J=/^ *:-+ *$/,K=/^ *-+: *$/,Y="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",ee=new RegExp(`^([*_])\\1${Y}\\1\\1(?!\\1)`),te=new RegExp(`^([*_])${Y}\\1(?!\\1|\\w)`),re=new RegExp(`^==${Y}==`),ne=new RegExp(`^~~${Y}~~`),le=/^\\([^0-9A-Za-z\s])/,ae=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ie=/^\n+/,ce=/^([ \t]*)/,oe=/\\([^\\])/g,se=/ *\n+$/,ue=/(?:^|\n)( *)$/,de="(?:\\d+\\.)",me="(?:[*+-])";function pe(e){return"( *)("+(1===e?de:me)+") +"}const fe=pe(1),he=pe(2);function ge(e){return new RegExp("^"+(1===e?fe:he))}const ye=ge(1),ke=ge(2);function xe(e){return new RegExp("^"+(1===e?fe:he)+"[^\\n]*(?:\\n(?!\\1"+(1===e?de:me)+" )[^\\n]*)*(\\n|$)","gm")}const be=xe(1),ve=xe(2);function Ee(e){const t=1===e?de:me;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}const we=Ee(1),Oe=Ee(2);function je(e,t){const r=1===t,n=r?we:Oe,l=r?be:ve,a=r?ye:ke;return{match(e,t,r){const l=ue.exec(r);return l&&(t.list||!t.inline&&!t.simple)?n.exec(e=l[1]+e):null},order:1,parse(e,t,n){const i=r?+e[2]:void 0,c=e[0].replace(f,"\n").match(l);let o=!1;return{items:c.map((function(e,r){const l=a.exec(e)[0].length,i=new RegExp("^ {1,"+l+"}","gm"),s=e.replace(i,"").replace(a,""),u=r===c.length-1,d=-1!==s.indexOf("\n\n")||u&&o;o=d;const m=n.inline,p=n.list;let f;n.list=!0,d?(n.inline=!1,f=s.replace(se,"\n\n")):(n.inline=!0,f=s.replace(se,""));const h=t(f,n);return n.inline=m,n.list=p,h})),ordered:r,start:i}},render:(t,r,n)=>e(t.ordered?"ol":"ul",{key:n.key,start:t.type===i.orderedList?t.start:void 0},t.items.map((function(t,l){return e("li",{key:l},r(t,n))})))}}const Se=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),Ce=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,ze=[h,x,b,N,P,$,R,U,be,we,ve,Oe],Ne=[...ze,/^[^\n]+(?:  \n|\n{2,})/,L,M];function $e(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Pe(e){return K.test(e)?"right":V.test(e)?"center":J.test(e)?"left":null}function Le(e,t,r,n){const l=r.inTable;r.inTable=!0;let a=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce(((e,l)=>("|"===l.trim()?e.push(n?{type:i.tableSeparator}:{type:i.text,text:l}):""!==l&&e.push.apply(e,t(l,r)),e)),[]);r.inTable=l;let c=[[]];return a.forEach((function(e,t){e.type===i.tableSeparator?0!==t&&t!==a.length-1&&c.push([]):(e.type!==i.text||null!=a[t+1]&&a[t+1].type!==i.tableSeparator||(e.text=e.text.trimEnd()),c[c.length-1].push(e))})),c}function Ae(e,t,r){r.inline=!0;const n=e[2]?e[2].replace(Q,"").split("|").map(Pe):[],l=e[3]?function(e,t,r){return e.trim().split("\n").map((function(e){return Le(e,t,r,!0)}))}(e[3],t,r):[],a=Le(e[1],t,r,!!l.length);return r.inline=!1,l.length?{align:n,cells:l,header:a,type:i.table}:{children:a,type:i.paragraph}}function Re(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Te(e){return function(t,r){return r.inline?e.exec(t):null}}function Me(e){return function(t,r){return r.inline||r.simple?e.exec(t):null}}function Be(e){return function(t,r){return r.inline||r.simple?null:e.exec(t)}}function Ie(e){return function(t){return e.exec(t)}}function De(e,t,r){if(t.inline||t.simple)return null;if(r&&!r.endsWith("\n"))return null;let n="";e.split("\n").every((e=>!ze.some((t=>t.test(e)))&&(n+=e+"\n",e.trim())));const l=n.trimEnd();return""==l?null:[n,l]}function _e(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function He(e){return e.replace(oe,"$1")}function Ue(e,t,r){const n=r.inline||!1,l=r.simple||!1;r.inline=!0,r.simple=!0;const a=e(t,r);return r.inline=n,r.simple=l,a}function Ze(e,t,r){const n=r.inline||!1,l=r.simple||!1;r.inline=!1,r.simple=!0;const a=e(t,r);return r.inline=n,r.simple=l,a}function Fe(e,t,r){const n=r.inline||!1;r.inline=!1;const l=e(t,r);return r.inline=n,l}const We=(e,t,r)=>({children:Ue(t,e[1],r)});function Ge(){return{}}function Xe(){return null}function qe(...e){return e.filter(Boolean).join(" ")}function Qe(e,t,r){let n=e;const l=t.split(".");for(;l.length&&(n=n[l[0]],void 0!==n);)l.shift();return n||r}function Ve(e="",t={}){function r(e,r,...n){const a=Qe(t.overrides,`${e}.props`,{});return t.createElement(function(e,t){const r=Qe(t,e);return r?"function"==typeof r||"object"==typeof r&&"render"in r?r:Qe(t,`${e}.component`,e):e}(e,t.overrides),l({},r,a,{className:qe(null==r?void 0:r.className,a.className)||void 0}),...n)}function a(e){e=e.replace(C,"");let l=!1;t.forceInline?l=!0:t.forceBlock||(l=!1===X.test(e));const a=J(V(l?e:`${e.trimEnd().replace(ie,"")}\n\n`,{inline:l}));for(;"string"==typeof a[a.length-1]&&!a[a.length-1].trim();)a.pop();if(null===t.wrapper)return a;const i=t.wrapper||(l?"span":"div");let c;if(a.length>1||t.forceWrapper)c=a;else{if(1===a.length)return c=a[0],"string"==typeof c?r("span",{key:"outer"},c):c;c=null}return n.createElement(i,{key:"outer"},c)}function c(e,r){const l=r.match(m);return l?l.reduce((function(r,l,i){const c=l.indexOf("=");if(-1!==c){const o=function(e){return-1!==e.indexOf("-")&&null===e.match(T)&&(e=e.replace(H,(function(e,t){return t.toUpperCase()}))),e}(l.slice(0,c)).trim(),u=function(e){const t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(l.slice(c+1).trim()),d=s[o]||o,m=r[d]=function(e,t,r,n){return"style"===t?r.split(/;\s?/).reduce((function(e,t){const r=t.slice(0,t.indexOf(":"));return e[r.trim().replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=t.slice(r.length+1).trim(),e}),{}):"href"===t||"src"===t?n(r,e,t):(r.match(B)&&(r=r.slice(1,r.length-1)),"true"===r||"false"!==r&&r)}(e,o,u,t.sanitizer);"string"==typeof m&&(L.test(m)||M.test(m))&&(r[d]=n.cloneElement(a(m.trim()),{key:i}))}else"style"!==l&&(r[s[l]||l]=!0);return r}),{}):null}t.overrides=t.overrides||{},t.sanitizer=t.sanitizer||_e,t.slugify=t.slugify||$e,t.namedCodesToUnicode=t.namedCodesToUnicode?l({},u,t.namedCodesToUnicode):u,t.createElement=t.createElement||n.createElement;const o=[],f={},Q={[i.blockQuote]:{match:Be(h),order:1,parse:(e,t,r)=>({children:t(e[0].replace(g,""),r)}),render:(e,t,n)=>r("blockquote",{key:n.key},t(e.children,n))},[i.breakLine]:{match:Ie(y),order:1,parse:Ge,render:(e,t,n)=>r("br",{key:n.key})},[i.breakThematic]:{match:Be(k),order:1,parse:Ge,render:(e,t,n)=>r("hr",{key:n.key})},[i.codeBlock]:{match:Be(b),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,t,n)=>r("pre",{key:n.key},r("code",l({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},[i.codeFenced]:{match:Be(x),order:0,parse:e=>({attrs:c("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:i.codeBlock})},[i.codeInline]:{match:Me(v),order:3,parse:e=>({text:e[2]}),render:(e,t,n)=>r("code",{key:n.key},e.text)},[i.footnote]:{match:Be(O),order:0,parse:e=>(o.push({footnote:e[2],identifier:e[1]}),{}),render:Xe},[i.footnoteReference]:{match:Te(j),order:1,parse:e=>({target:`#${t.slugify(e[1],$e)}`,text:e[1]}),render:(e,n,l)=>r("a",{key:l.key,href:t.sanitizer(e.target,"a","href")},r("sup",{key:l.key},e.text))},[i.gfmTask]:{match:Te(z),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,t,n)=>r("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})},[i.heading]:{match:Be(t.enforceAtxHeadings?$:N),order:1,parse:(e,r,n)=>({children:Ue(r,e[2],n),id:t.slugify(e[2],$e),level:e[1].length}),render:(e,t,n)=>r(`h${e.level}`,{id:e.id,key:n.key},t(e.children,n))},[i.headingSetext]:{match:Be(P),order:0,parse:(e,t,r)=>({children:Ue(t,e[1],r),level:"="===e[2]?1:2,type:i.heading})},[i.htmlBlock]:{match:Ie(L),order:1,parse(e,t,r){const[,n]=e[3].match(ce),l=new RegExp(`^${n}`,"gm"),a=e[3].replace(l,""),i=(o=a,Ne.some((e=>e.test(o)))?Fe:Ue);var o;const s=e[1].toLowerCase(),u=-1!==d.indexOf(s),m=(u?s:e[1]).trim(),p={attrs:c(m,e[2]),noInnerParse:u,tag:m};return r.inAnchor=r.inAnchor||"a"===s,u?p.text=e[3]:p.children=i(t,a,r),r.inAnchor=!1,p},render:(e,t,n)=>r(e.tag,l({key:n.key},e.attrs),e.text||t(e.children,n))},[i.htmlSelfClosing]:{match:Ie(M),order:1,parse(e){const t=e[1].trim();return{attrs:c(t,e[2]||""),tag:t}},render:(e,t,n)=>r(e.tag,l({},e.attrs,{key:n.key}))},[i.htmlComment]:{match:Ie(R),order:1,parse:()=>({}),render:Xe},[i.image]:{match:Me(Ce),order:1,parse:e=>({alt:e[1],target:He(e[2]),title:e[3]}),render:(e,n,l)=>r("img",{key:l.key,alt:e.alt||void 0,title:e.title||void 0,src:t.sanitizer(e.target,"img","src")})},[i.link]:{match:Te(Se),order:3,parse:(e,t,r)=>({children:Ze(t,e[1],r),target:He(e[2]),title:e[3]}),render:(e,n,l)=>r("a",{key:l.key,href:t.sanitizer(e.target,"a","href"),title:e.title},n(e.children,l))},[i.linkAngleBraceStyleDetector]:{match:Te(_),order:0,parse:e=>({children:[{text:e[1],type:i.text}],target:e[1],type:i.link})},[i.linkBareUrlDetector]:{match:(e,t)=>t.inAnchor?null:Te(I)(e,t),order:0,parse:e=>({children:[{text:e[1],type:i.text}],target:e[1],title:void 0,type:i.link})},[i.linkMailtoDetector]:{match:Te(D),order:0,parse(e){let t=e[1],r=e[1];return p.test(r)||(r="mailto:"+r),{children:[{text:t.replace("mailto:",""),type:i.text}],target:r,type:i.link}}},[i.orderedList]:je(r,1),[i.unorderedList]:je(r,2),[i.newlineCoalescer]:{match:Be(E),order:3,parse:Ge,render:()=>"\n"},[i.paragraph]:{match:De,order:3,parse:We,render:(e,t,n)=>r("p",{key:n.key},t(e.children,n))},[i.ref]:{match:Te(Z),order:0,parse:e=>(f[e[1]]={target:e[2],title:e[4]},{}),render:Xe},[i.refImage]:{match:Me(F),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,n,l)=>f[e.ref]?r("img",{key:l.key,alt:e.alt,src:t.sanitizer(f[e.ref].target,"img","src"),title:f[e.ref].title}):null},[i.refLink]:{match:Te(W),order:0,parse:(e,t,r)=>({children:t(e[1],r),fallbackChildren:t(e[0].replace(G,"\\$1"),r),ref:e[2]}),render:(e,n,l)=>f[e.ref]?r("a",{key:l.key,href:t.sanitizer(f[e.ref].target,"a","href"),title:f[e.ref].title},n(e.children,l)):r("span",{key:l.key},n(e.fallbackChildren,l))},[i.table]:{match:Be(U),order:1,parse:Ae,render(e,t,n){const l=e;return r("table",{key:n.key},r("thead",null,r("tr",null,l.header.map((function(e,a){return r("th",{key:a,style:Re(l,a)},t(e,n))})))),r("tbody",null,l.cells.map((function(e,a){return r("tr",{key:a},e.map((function(e,a){return r("td",{key:a,style:Re(l,a)},t(e,n))})))}))))}},[i.text]:{match:Ie(ae),order:4,parse:e=>({text:e[0].replace(A,((e,r)=>t.namedCodesToUnicode[r]?t.namedCodesToUnicode[r]:e))}),render:e=>e.text},[i.textBolded]:{match:Me(ee),order:2,parse:(e,t,r)=>({children:t(e[2],r)}),render:(e,t,n)=>r("strong",{key:n.key},t(e.children,n))},[i.textEmphasized]:{match:Me(te),order:3,parse:(e,t,r)=>({children:t(e[2],r)}),render:(e,t,n)=>r("em",{key:n.key},t(e.children,n))},[i.textEscaped]:{match:Me(le),order:1,parse:e=>({text:e[1],type:i.text})},[i.textMarked]:{match:Me(re),order:3,parse:We,render:(e,t,n)=>r("mark",{key:n.key},t(e.children,n))},[i.textStrikethroughed]:{match:Me(ne),order:3,parse:We,render:(e,t,n)=>r("del",{key:n.key},t(e.children,n))}};!0===t.disableParsingRawHTML&&(delete Q[i.htmlBlock],delete Q[i.htmlSelfClosing]);const V=function(e){let t=Object.keys(e);function r(n,l){let a=[],i="";for(;n;){let c=0;for(;c<t.length;){const o=t[c],s=e[o],u=s.match(n,l,i);if(u){const e=u[0];n=n.substring(e.length);const t=s.parse(u,r,l);null==t.type&&(t.type=o),a.push(t),i=e;break}c++}}return a}return t.sort((function(t,r){let n=e[t].order,l=e[r].order;return n!==l?n-l:t<r?-1:1})),function(e,t){return r(function(e){return e.replace(w,"\n").replace(S,"").replace(q,"    ")}(e),t)}}(Q),J=(K=function(e,t){return function(r,n,l){const a=e[r.type].render;return t?t((()=>a(r,n,l)),r,n,l):a(r,n,l)}}(Q,t.renderRule),function e(t,r={}){if(Array.isArray(t)){const n=r.key,l=[];let a=!1;for(let i=0;i<t.length;i++){r.key=i;const n=e(t[i],r),c="string"==typeof n;c&&a?l[l.length-1]+=n:null!==n&&l.push(n),a=c}return r.key=n,l}return K(t,e,r)});var K;const Y=a(e);return o.length?r("div",null,Y,r("footer",{key:"footer"},o.map((function(e){return r("div",{id:t.slugify(e.identifier,$e),key:e.identifier},e.identifier,J(V(e.footnote,{inline:!0})))})))):Y}t.ZP=e=>{let{children:t="",options:r}=e,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(l[r]=e[r]);return l}(e,a);return n.cloneElement(Ve(t,r),l)}},3621:function(e,t,r){r.d(t,{w_:function(){return p}});var n=r(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(l),i=["attr","size","title"];function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){return e&&e.map(((e,t)=>n.createElement(e.tag,u({key:t},e.attr),m(e.child))))}function p(e){return t=>n.createElement(f,o({attr:u({},e.attr)},t),m(e.child))}function f(e){var t=t=>{var r,{attr:l,size:a,title:s}=e,d=c(e,i),m=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,d,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(e=>t(e))):t(l)}}}]);
//# sourceMappingURL=184892ca1d61440366efd99954c69dc86dd1b4ec-ed9aaa898678eccdeb81.js.map