(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5075)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,r=i(4941).Z,o=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,l=e.unoptimized,s=void 0!==l&&l,h=e.priority,m=void 0!==h&&h,w=e.loading,_=e.lazyRoot,k=void 0===_?null:_,I=e.lazyBoundary,E=e.className,N=e.quality,O=e.width,L=e.height,R=e.style,C=e.objectFit,P=e.objectPosition,q=e.onLoadingComplete,M=e.placeholder,D=void 0===M?"empty":M,W=e.blurDataURL,B=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),Z=u.useContext(p.ImageConfigContext),V=u.useMemo((function(){var e=v||Z||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:i})}),[Z]),U=B,F=i?"responsive":"intrinsic";"layout"in U&&(U.layout&&(F=U.layout),delete U.layout);var H=S;if("loader"in U){if(U.loader){var T=U.loader;H=function(e){e.config;var t=c(e,["config"]);return T(t)}}delete U.loader}var G="";if(function(e){return"object"===typeof e&&(x(e)||function(e){return void 0!==e.src}(e))}(t)){var J=x(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(W=W||J.blurDataURL,G=J.src,(!F||"fill"!==F)&&(L=L||J.height,O=O||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var X=!m&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(s=!0,X=!1);b.has(t)&&(X=!1);V.unoptimized&&(s=!0);var Q,K=r(u.useState(!1),2),Y=K[0],$=K[1],ee=r(g.useIntersection({rootRef:k,rootMargin:I||"200px",disabled:!X}),3),te=ee[0],ie=ee[1],ne=ee[2],re=!X||ie,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:P},ce=z(O),ue=z(L),de=z(N);0;var fe=Object.assign({},R,se),ge="blur"!==D||Y?{}:{backgroundSize:C||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===F)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof ce&&"undefined"!==typeof ue){var pe=ue/ce,he=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===F?(oe.display="block",oe.position="relative",le=!0,ae.paddingTop=he):"intrinsic"===F?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",le=!0,ae.maxWidth="100%",Q="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ce,"%27%20height=%27").concat(ue,"%27/%3e")):"fixed"===F&&(oe.display="inline-block",oe.position="relative",oe.width=ce,oe.height=ue)}else 0;var me={src:y,srcSet:void 0,sizes:void 0};re&&(me=j({config:V,src:t,unoptimized:s,layout:F,width:ce,quality:de,sizes:i,loader:H}));var ve=t;0;var be,ye="imagesrcset",we="imagesizes";ye="imageSrcSet",we="imageSizes";var xe=(n(be={},ye,me.srcSet),n(be,we,me.sizes),n(be,"crossOrigin",U.crossOrigin),be),je=u.default.useLayoutEffect,ze=u.useRef(q),Se=u.useRef(t);u.useEffect((function(){ze.current=q}),[q]),je((function(){Se.current!==t&&(ne(),Se.current=t)}),[ne,t]);var _e=a({isLazy:X,imgAttributes:me,heightInt:ue,widthInt:ce,qualityInt:de,layout:F,className:E,imgStyle:fe,blurStyle:ge,loading:w,config:V,unoptimized:s,placeholder:D,loader:H,srcString:ve,onLoadingCompleteRef:ze,setBlurComplete:$,setIntersection:te,isVisible:re,noscriptSizes:i},U);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:oe},le?u.default.createElement("span",{style:ae},Q?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Q}):null):null,u.default.createElement(A,Object.assign({},_e))),m?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},xe))):null)};var a=i(6495).Z,l=i(2648).Z,s=i(1598).Z,c=i(7273).Z,u=s(i(7294)),d=l(i(5443)),f=i(9309),g=i(7190),p=i(9977),h=(i(3794),i(2392));function m(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},b=new Set,y=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t.path).concat(m(i))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString()),o.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(n).concat(m(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(m(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function x(e){return void 0!==e.default}function j(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,a=e.width,l=e.quality,s=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i,n){var r=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(n);l)c.push(parseInt(l[2]));if(c.length){var u,d=.01*(u=Math).min.apply(u,o(c));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,s),d=u.widths,f=u.kind,g=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map((function(e,n){return"".concat(c({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:c({config:t,src:i,quality:l,width:d[g]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=w.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function _(e,t,i,n,r,o){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===n&&o(!0),null==r?void 0:r.current)){var i=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:i,naturalHeight:a})}})))}var A=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,r=e.layout,o=e.className,l=e.imgStyle,s=e.blurStyle,d=e.isLazy,f=e.placeholder,g=e.loading,p=e.srcString,h=e.config,m=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,w=e.setIntersection,x=e.onLoad,z=e.onError,S=(e.isVisible,e.noscriptSizes),A=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=d?"lazy":g,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":r,className:o,style:a({},l,s),ref:u.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&_(e,p,0,f,b,y)}),[w,p,r,f,b,y]),onLoad:function(e){_(e.currentTarget,p,0,f,b,y),x&&x(e)},onError:function(e){"blur"===f&&y(!0),z&&z(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},A,j({config:h,src:p,unoptimized:m,layout:r,width:i,quality:n,sizes:S,loader:v}),{decoding:"async","data-nimg":r,style:l,className:o,loading:g}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,i=e.rootMargin,c=e.disabled||!a,u=n(r.useState(!1),2),d=u[0],f=u[1],g=n(r.useState(null),2),p=g[0],h=g[1];r.useEffect((function(){if(a){if(c||d)return;if(p&&p.tagName){var e=function(e,t,i){var n=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===i.root&&e.margin===i.margin}));if(n&&(t=l.get(n)))return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return t={id:i,observer:o,elements:r},s.push(i),l.set(i,t),t}(i),r=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(r);var t=s.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&s.splice(t,1)}}}(p,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:i});return e}}else if(!d){var n=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(n)}}}),[p,c,i,t,d]);var m=r.useCallback((function(){f(!1)}),[]);return[h,d,m]};var r=i(7294),o=i(9311),a="function"===typeof IntersectionObserver,l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5075:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return s}});var n=i(5893),r=i(9008),o=i.n(r),a=i(5675),l=i.n(a);function s(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{children:[(0,n.jsx)("h1",{className:"underline",children:"Hello world!"}),(0,n.jsxs)("p",{children:["Get started by editing ",(0,n.jsx)("code",{children:"pages/index.js"})]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",children:[(0,n.jsx)("h3",{children:"Documentation \u2192"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",children:[(0,n.jsx)("h3",{children:"Learn \u2192"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/zeit/next.js/tree/master/examples",children:[(0,n.jsx)("h3",{children:"Examples \u2192"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",children:[(0,n.jsx)("h3",{children:"Deploy \u2192"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,n.jsx)("footer",{children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by",(0,n.jsx)(l(),{src:"/vercel.svg",alt:"Vercel Logo"})]})})]})}},9008:function(e,t,i){e.exports=i(5443)},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);