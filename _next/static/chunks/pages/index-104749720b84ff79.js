(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6067)}])},8045:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(6495).Z,i=s(2648).Z,r=s(1598).Z,o=s(7273).Z,a=r(s(7294)),l=i(s(5443)),c=s(2730),u=s(9309),d=s(9977);s(5086);var h=i(s(1479));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://shotgunsinnerrecords-343795986.imgix.net/",loader:"imgix",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function f(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,s,i,r,o,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===s&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,r=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{s=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let y=a.forwardRef((e,t)=>{var{imgAttributes:s,heightInt:i,widthInt:r,qualityInt:l,className:c,imgStyle:u,blurStyle:d,isLazy:h,fill:p,placeholder:m,loading:f,srcString:y,config:b,unoptimized:v,loader:x,onLoadRef:w,onLoadingCompleteRef:C,setBlurComplete:_,setShowAltText:S,onLoad:j,onError:k}=e,N=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return f=h?"lazy":f,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},N,{loading:f,width:r,height:i,decoding:"async","data-nimg":p?"fill":"1",className:c,style:n({},u,d)},s,{ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&g(e,y,m,w,C,_,v))},[y,m,w,C,_,k,v,t]),onLoad:e=>{let t=e.currentTarget;g(t,y,m,w,C,_,v)},onError:e=>{S(!0),"blur"===m&&_(!0),k&&k(e)}})))}),b=a.forwardRef((e,t)=>{let s,i;var r,{src:g,sizes:b,unoptimized:v=!1,priority:x=!1,loading:w,className:C,quality:_,width:S,height:j,fill:k,style:N,onLoad:E,onLoadingComplete:P,placeholder:T="empty",blurDataURL:O,layout:D,objectFit:M,objectPosition:A,lazyBoundary:B,lazyRoot:L}=e,I=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let z=a.useContext(d.ImageConfigContext),H=a.useMemo(()=>{let e=p||z||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),s=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:s})},[z]),F=I,R=F.loader||h.default;delete F.loader;let q="__next_img_default"in R;if(q){if("custom"===H.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=R;R=t=>{let{config:s}=t,n=o(t,["config"]);return e(n)}}if(D){"fill"===D&&(k=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[D];e&&(N=n({},N,e));let t={responsive:"100vw",fill:"100vw"}[D];t&&!b&&(b=t)}let W="",U=f(S),G=f(j);if("object"==typeof(r=g)&&(m(r)||void 0!==r.src)){let e=m(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(s=e.blurWidth,i=e.blurHeight,O=O||e.blurDataURL,W=e.src,!k){if(U||G){if(U&&!G){let t=U/e.width;G=Math.round(e.height*t)}else if(!U&&G){let t=G/e.height;U=Math.round(e.width*t)}}else U=e.width,G=e.height}}let V=!x&&("lazy"===w||void 0===w);((g="string"==typeof g?g:W).startsWith("data:")||g.startsWith("blob:"))&&(v=!0,V=!1),H.unoptimized&&(v=!0),q&&g.endsWith(".svg")&&!H.dangerouslyAllowSVG&&(v=!0);let[K,Y]=a.useState(!1),[J,Z]=a.useState(!1),Q=f(_),X=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:A}:{},J?{}:{color:"transparent"},N),$="blur"===T&&O&&!K?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:G,blurWidth:s,blurHeight:i,blurDataURL:O,objectFit:X.objectFit}),'")')}:{},ee=function(e){let{config:t,src:s,unoptimized:n,width:i,quality:r,sizes:o,loader:a}=e;if(n)return{src:s,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,s){let{deviceSizes:n,allSizes:i}=e;if(s){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(s);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let r=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:r,kind:"x"}}(t,i,o),u=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,n)=>"".concat(a({config:t,src:s,quality:r,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:a({config:t,src:s,quality:r,width:l[u]})}}({config:H,src:g,unoptimized:v,width:U,quality:Q,sizes:b,loader:R}),et=g,es={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:F.crossOrigin},en=a.useRef(E);a.useEffect(()=>{en.current=E},[E]);let ei=a.useRef(P);a.useEffect(()=>{ei.current=P},[P]);let er=n({isLazy:V,imgAttributes:ee,heightInt:G,widthInt:U,qualityInt:Q,className:C,imgStyle:X,blurStyle:$,loading:w,config:H,fill:k,unoptimized:v,placeholder:T,loader:R,srcString:et,onLoadRef:en,onLoadingCompleteRef:ei,setBlurComplete:Y,setShowAltText:Z},F);return a.default.createElement(a.default.Fragment,null,a.default.createElement(y,Object.assign({},er,{ref:t})),x?a.default.createElement(l.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},es))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:s,blurWidth:n,blurHeight:i,blurDataURL:r,objectFit:o}=e,a=n||t,l=i||s,c=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E")}},1479:function(e,t){"use strict";function s(e){let{config:t,src:s,width:n,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(s),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,s.__next_img_default=!0,t.default=s},6067:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return k}});var n=s(5893),i=s(3542),r=s.n(i),o=s(9469),a=s.n(o),l=s(7294),c=s(9008),u=s.n(c),d=s(4265),h=s.n(d);let p=e=>"/"===e[0]?e.slice(1):e;function m(e){let{src:t,width:s,quality:n}=e,i=new URL("https://shotgunsinnerrecords-343795986.imgix.net/"+p(t)),r=i.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||s.toString()),n&&r.set("q",n.toString()),i.href}let f=(0,l.createContext)();function g(e){let{children:t}=e;return(null==t||t.length<1)&&console.error("ImgixProvider must have at least one Imgix child component"),(0,n.jsx)(f.Provider,{value:m,children:t})}var y=s(5675),b=s.n(y);let v=e=>{let{width:t,height:s,src:i,priority:r=!1,alt:o="",className:a=""}=e,c=(0,l.useContext)(f);return(0,n.jsx)(b(),{className:a,loader:c,src:i,alt:o,width:t,height:s,priority:r})};function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}var w={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},C=new(function(){function e(){}var t=e.prototype;return t.load=function(e,t,s){if(e.el="string"==typeof s?document.querySelector(s):s,e.options=x({},w,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(e){return e.trim()}),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var n=Array.prototype.slice.apply(e.stringsElement.children),i=n.length;if(i)for(var r=0;r<i;r+=1)e.strings.push(n[r].innerHTML.trim())}for(var o in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[o]=o;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},t.getCurrentElContent=function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent},t.appendCursorAnimationCss=function(e){var t="data-typed-js-cursor-css";if(e.showCursor&&!document.querySelector("["+t+"]")){var s=document.createElement("style");s.setAttribute(t,"true"),s.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(s)}},t.appendFadeOutAnimationCss=function(e){var t="data-typed-fadeout-js-css";if(e.fadeOut&&!document.querySelector("["+t+"]")){var s=document.createElement("style");s.setAttribute(t,"true"),s.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(s)}},e}()),_=new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(e,t,s){if("html"!==s.contentType)return t;var n,i=e.substring(t).charAt(0);if("<"===i||"&"===i){for(n="<"===i?">":";";e.substring(t+1).charAt(0)!==n&&!(1+ ++t>e.length););t++}return t},t.backSpaceHtmlChars=function(e,t,s){if("html"!==s.contentType)return t;var n,i=e.substring(t).charAt(0);if(">"===i||";"===i){for(n=">"===i?"<":"&";e.substring(t-1).charAt(0)!==n&&!(--t<0););t--}return t},e}()),S=function(){function e(e,t){C.load(this,t,e),this.begin()}var t=e.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(e){void 0===e&&(e=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===e.strPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos):e.backspace(e.strings[e.sequence[e.arrayPos]],e.strPos)},this.startDelay)},t.typewrite=function(e,t){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout(function(){t=_.typeHtmlChars(e,t,s);var n,r=0,o=e.substring(t);if("^"===o.charAt(0)&&/^\^\d+/.test(o)&&(n=1+(o=/\d+/.exec(o)[0]).length,r=parseInt(o),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),e=e.substring(0,t)+e.substring(t+n),s.toggleBlinking(!0)),"`"===o.charAt(0)){for(;"`"!==e.substring(t+i).charAt(0)&&!(t+ ++i>e.length););var a=e.substring(0,t),l=e.substring(a.length+1,t+i);e=a+l+e.substring(t+i+1),i--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),t>=e.length?s.doneTyping(e,t):s.keepTyping(e,t,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},r)},n):this.setPauseStatus(e,t,!0)},t.keepTyping=function(e,t,s){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=e.substring(0,t+=s);this.replaceText(n),this.typewrite(e,t)},t.doneTyping=function(e,t){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(e,t)},this.backDelay))},t.backspace=function(e,t){var s=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){t=_.backSpaceHtmlChars(e,t,s);var n=e.substring(0,t);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];s.stopNum=i&&n===i.substring(0,t)?t:0}t>s.stopNum?(t--,s.backspace(e,t)):t<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],t))},n)}else this.setPauseStatus(e,t,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(e,t,s){this.pause.typewrite=s,this.pause.curString=e,this.pause.curStrPos=t},t.toggleBlinking=function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(e){return Math.round(Math.random()*e/2)+e},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},t.initFadeOut=function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)},this.fadeOutDelay)},t.replaceText=function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e},t.bindFocusEvents=function(){var e=this;this.isInput&&(this.el.addEventListener("focus",function(t){e.stop()}),this.el.addEventListener("blur",function(t){e.el.value&&0!==e.el.value.length||e.start()}))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}();let j=()=>{let e=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let t=new S(e.current,{strings:["We are a music store based in Manila, Philippines.","Established in May 2023, we first opened our Shopee store to rock and metal fans.","At the start of 2024, we expanded our reach and opened our Lazada store.","Our name is based from the song Hang 'Em High, Kid by My Chemical Romance.","It's our favorite band but we sell all kinds of rock and metal music.","Thrash metal bands: Slayer, Testament, Megadeth, Metallica, and more.","Death metal bands: Cannibal Corpse, Children of Bodom, Arch Enemy, Cryptopsy, and more.","Black metal bands: Dimmu Borgir, Cradle of Filth, Satyricon, Behemoth, Emperor, and more.","Metalcore bands: Trivium, Killswitch Engage, Bring Me The Horizon, and more.","Nu metal bands: Slipknot, Coal Chamber, Kittie, Otep, Marilyn Manson, Korn, and more.","Post-hardcore bands: Alesana, The Used, Saosin, A Skylit Drive, Pierce The Veil, Silverstein, and more.","Pop punk bands: Fall Out Boy, Paramore, Neck Deep, Panic! At the Disco, Rufio, Yellowcard, and more.","Come visit our Lazada and Shopee stores to see our full collection."],typeSpeed:60,loop:!0});return()=>{t.destroy()}},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u(),{children:[(0,n.jsx)("title",{children:"Shotgun Sinner Records | Music Store in Manila PH"}),(0,n.jsx)("meta",{name:"description",content:"A music store dedicated to rock and metal music based in Manila, Philippines"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{property:"og:url",content:"https://shotgunsinner.com"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:title",content:"Shotgun Sinner Records | Music Store in Manila PH"}),(0,n.jsx)("meta",{name:"twitter:card",content:"A music store dedicated to rock and metal music based in Manila, Philippines"}),(0,n.jsx)("meta",{property:"og:description",content:"A music store dedicated to rock and metal music based in Manila, Philippines"}),(0,n.jsx)("meta",{property:"og:image",content:"/site-preview.png"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:h().main,children:[(0,n.jsxs)("div",{className:h().description,children:[(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"https://lazada.com.ph/shop/shotgunsinnerrecords",className:h().card,target:"_blank",rel:"noopener noreferrer",children:"Order from our Lazada \uD83D\uDEF8"})}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"https://facebook.com/shotgunsinnerrecords",className:h().card,target:"_blank",rel:"noopener noreferrer",children:"Follow us on Facebook \uD83E\uDD18\uD83C\uDFFB"})}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"https://shopee.ph/shotgunsinnerrecords",className:h().card,target:"_blank",rel:"noopener noreferrer",children:"Order from our Shopee \uD83D\uDC7B"})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:h().center,children:(0,n.jsxs)(g,{children:[(0,n.jsx)(v,{className:h().logo,src:"/shotgun-sinner-records-logo.png",alt:"Shotgun Sinner Records Logo",width:500,height:140,priority:!0}),(0,n.jsx)(v,{className:h().logoMobile,src:"/shotgun-sinner-records-logo-square.png",alt:"Shotgun Sinner Records Logo",width:300,height:300,priority:!0})]})}),(0,n.jsx)("div",{className:h().about,children:(0,n.jsx)("p",{ref:e,className:r().className})}),(0,n.jsxs)("div",{className:h().grid,children:[(0,n.jsxs)("div",{className:h().card,children:[(0,n.jsxs)("h2",{className:a().className,children:["We only sell ",(0,n.jsx)("br",{})," original items"]}),(0,n.jsxs)("p",{className:r().className,children:["We are collectors ourselves and ",(0,n.jsx)("br",{})," we are allergic to b00tleg"]})]}),(0,n.jsxs)("div",{className:h().card,children:[(0,n.jsxs)("h2",{className:a().className,children:["Dedicated to ",(0,n.jsx)("br",{})," rock and metal fans"]}),(0,n.jsxs)("p",{className:r().className,children:["We source out rare albums ",(0,n.jsx)("br",{})," for your collection"]})]}),(0,n.jsxs)("div",{className:h().card,children:[(0,n.jsxs)("h2",{className:a().className,children:["We pack them ",(0,n.jsx)("br",{})," like we own them"]}),(0,n.jsxs)("p",{className:r().className,children:["Guaranteed your orders are ",(0,n.jsx)("br",{})," well-packed & with fragile labels"]})]}),(0,n.jsxs)("div",{className:h().card,children:[(0,n.jsxs)("h2",{className:a().className,children:["Ships within ",(0,n.jsx)("br",{})," 1-2 business days"]}),(0,n.jsxs)("p",{className:r().className,children:["Orders placed Mon-Thu (ships ",(0,n.jsx)("br",{})," in 1-2 days), Fri-Sun (2-4 days)"]})]})]})]}),(0,n.jsxs)("div",{className:h().footer,children:[(0,n.jsx)("div",{className:h().footerColumn,children:(0,n.jsx)("p",{className:r().className,children:"\xa9 2024 Shotgun Sinner Records. All rights reserved."})}),(0,n.jsx)("div",{className:h().footerColumn,children:(0,n.jsxs)("p",{className:r().className,children:["We ship nationwide via ",(0,n.jsx)("a",{href:"https://lazada.com.ph/shop/shotgunsinnerrecords",target:"_blank",children:"Lazada"})," and ",(0,n.jsx)("a",{href:"https://shopee.ph/shotgunsinnerrecords",target:"_blank",children:"Shopee"}),"!"]})}),(0,n.jsx)("div",{className:h().footerColumn,children:(0,n.jsxs)("p",{className:r().className,children:["\uD83D\uDC8C \xa0 ",(0,n.jsx)("a",{href:"mailto:info@shotgunsinner.com",children:"info@shotgunsinner.com"})," • \uD83D\uDCDE \xa0 ",(0,n.jsx)("a",{href:"tel:+639620714799",children:"+63 962 071 4799"})]})})]})]})]})};var k=j},3542:function(e){e.exports={style:{fontFamily:"'__Jura_a7e61d', '__Jura_Fallback_a7e61d'",fontWeight:400,fontStyle:"normal"},className:"__className_a7e61d"}},9469:function(e){e.exports={style:{fontFamily:"'__horta_1d2810', '__horta_Fallback_1d2810'",fontWeight:400},className:"__className_1d2810"}},4265:function(e){e.exports={main:"Home_main__EtNt2",about:"Home_about__UwQOp",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",center:"Home_center__V0nxp",logo:"Home_logo__80mSr",thirteen:"Home_thirteen__ocdUI",logoMobile:"Home_logoMobile__z9uY9",rotate:"Home_rotate__99GkW",content:"Home_content___fOQz",vercelLogo:"Home_vercelLogo__lhIxO",footer:"Home_footer__7dKhS",footerColumn:"Home_footerColumn__Wd2Ho"}},9008:function(e,t,s){e.exports=s(5443)},5675:function(e,t,s){e.exports=s(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);