(self.webpackChunk=self.webpackChunk||[]).push([[189],{1057:(e,t,n)=>{"use strict";n.d(t,{M:()=>l});var o=n(7378),r=n(864),i=n(4246);function l({replaceOnEmptyWhenDeleting:e=!1}){const t=(0,o.useContext)(r.J),n=(0,o.useCallback)((()=>{t.deleteByActivePath(e)}),[e]);return(0,i.jsx)("div",{children:(0,i.jsx)("button",{onClick:n,type:"button",children:(0,i.jsx)("span",{className:"material-icons",children:"delete"})})})}},5874:(e,t,n)=>{"use strict";n.d(t,{M:()=>o});const o={table:1,box:2,text:3}},6166:(e,t,n)=>{"use strict";n.d(t,{l:()=>E});var o=n(7378),r=n(1892),i=n.n(r),l=n(5760),s=n.n(l),a=n(8311),A=n.n(a),c=n(8192),d=n.n(c),u=n(8060),p=n.n(u),C=n(4865),h=n.n(C),_=n(6859),m={};_.Z&&_.Z.locals&&(m.locals=_.Z.locals);var b,f=0,x={};x.styleTagTransform=h(),x.setAttributes=d(),x.insert=A().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=p(),m.use=function(e){return x.options=e||{},f++||(b=i()(_.Z,x)),m},m.unuse=function(){f>0&&! --f&&(b(),b=null)};const g=m;var v=n(8020),y=n(864),w=n(5874),B=n(4246);function E({children:e,path:t,widget:n}){const r=(0,v.X)(g),i=(0,o.useContext)(y.J),l=(0,o.useMemo)((()=>!!i.activePath&&t.join(",")===i.activePath.join(",")),[t,i.activePath]),s=(0,o.useMemo)((()=>{let e=r.container;return l&&(e+=` ${r.containerPinned}`),n===w.M.text?e+=` ${r.text}`:n===w.M.box&&(e+=` ${r.box}`),e}),[l,n]),a=(0,o.useCallback)((()=>{l?i.setActivePath([]):i.setActivePath(t)}),[t,i.activePath,l]);return(0,B.jsxs)("div",{className:s,children:[e,(0,B.jsx)("div",{className:r.pin,onClick:a,children:(0,B.jsx)("span",{className:"material-icons",children:"location_pin"})})]})}},7723:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Settings:()=>S,Tool:()=>P,Widget:()=>E,defaultConfig:()=>Y,name:()=>z});var o=n(7378),r=n(8020),i=n(1892),l=n.n(i),s=n(5760),a=n.n(s),A=n(8311),c=n.n(A),d=n(8192),u=n.n(d),p=n(8060),C=n.n(p),h=n(4865),_=n.n(h),m=n(9450),b={};m.Z&&m.Z.locals&&(b.locals=m.Z.locals);var f,x=0,g={};g.styleTagTransform=_(),g.setAttributes=u(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=C(),b.use=function(e){return g.options=e||{},x++||(f=l()(m.Z,g)),b},b.unuse=function(){x>0&&! --x&&(f(),f=null)};const v=b;var y=n(6166),w=n(5874),B=n(4246);const E=(0,o.memo)((({config:e,path:t})=>{const n=(0,r.X)(v);return(0,B.jsx)(y.l,{path:t,widget:w.M.text,children:(0,B.jsx)("p",{className:n.container,children:e.settings.value})})}));E.displayName="TextWidget";var k=n(8015),T=n(9845);const z="text.v1",j='arial, "helveticaneue", helvetica, sans-serif';new(n.n(T)())(["span","p","h1","h2","h3","h4","h5","h6"]);var N=n(42),F=n.n(N);const P=(0,o.memo)((()=>{const e=(0,o.useRef)(null),t=(0,o.useContext)(k.f);return(0,o.useEffect)((()=>(t.interfaceRef.current.initPortable(e.current,z),()=>{t.interfaceRef.current.destroyPortable(z)})),[]),(0,B.jsxs)("div",{className:F()("tool","tool--text"),ref:e,children:[(0,B.jsx)("div",{className:"material-icons",children:"edit_note"}),(0,B.jsx)("div",{children:"Text"})]})}));P.displayName="TextTool";var q=n(864),W=n(8784),M=new Map;function D(e){var t=M.get(e);t&&t.destroy()}function $(e){var t=M.get(e);t&&t.update()}var H=null;"undefined"==typeof window?((H=function(e){return e}).destroy=function(e){return e},H.update=function(e){return e}):((H=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return function(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!M.has(e)){var t,n=null,o=window.getComputedStyle(e),r=(t=e.value,function(){l({testForHeightReduction:""===t||!e.value.startsWith(t),restoreTextAlign:null}),t=e.value}),i=function(t){e.removeEventListener("autosize:destroy",i),e.removeEventListener("autosize:update",s),e.removeEventListener("input",r),window.removeEventListener("resize",s),Object.keys(t).forEach((function(n){return e.style[n]=t[n]})),M.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,textAlign:e.style.textAlign,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",i),e.addEventListener("autosize:update",s),e.addEventListener("input",r),window.addEventListener("resize",s),e.style.overflowX="hidden",e.style.wordWrap="break-word",M.set(e,{destroy:i,update:s}),s()}function l(t){var r,i,s=t.restoreTextAlign,a=void 0===s?null:s,A=t.testForHeightReduction,c=void 0===A||A,d=o.overflowY;if(0!==e.scrollHeight&&("vertical"===o.resize?e.style.resize="none":"both"===o.resize&&(e.style.resize="horizontal"),c&&(r=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach((function(e){var t=e[0],n=e[1];t.style.scrollBehavior="auto",t.scrollTop=n,t.style.scrollBehavior=null}))}}(e),e.style.height=""),i="content-box"===o.boxSizing?e.scrollHeight-(parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)):e.scrollHeight+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),"none"!==o.maxHeight&&i>parseFloat(o.maxHeight)?("hidden"===o.overflowY&&(e.style.overflow="scroll"),i=parseFloat(o.maxHeight)):"hidden"!==o.overflowY&&(e.style.overflow="hidden"),e.style.height=i+"px",a&&(e.style.textAlign=a),r&&r(),n!==i&&(e.dispatchEvent(new Event("autosize:resized",{bubbles:!0})),n=i),d!==o.overflow&&!a)){var u=o.textAlign;"hidden"===o.overflow&&(e.style.textAlign="start"===u?"end":"start"),l({restoreTextAlign:u,testForHeightReduction:!0})}}function s(){l({testForHeightReduction:!0,restoreTextAlign:null})}}(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],D),e},H.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],$),e});const R=H;var L=n(1057);const S=({config:e})=>{const t=(0,o.useContext)(q.J),n=(0,o.useRef)(null),r=(0,o.useId)();(0,o.useEffect)((()=>{R(n.current)}),[]);const i=(0,o.useCallback)((n=>{t.updateConfigByActivePath((0,W.merge)({},e,{settings:{value:n.currentTarget.value}}))}),[e]);return(0,B.jsxs)("form",{className:"form",children:[(0,B.jsx)("legend",{children:z}),(0,B.jsx)(L.M,{replaceOnEmptyWhenDeleting:!0}),(0,B.jsxs)("fieldset",{className:"form-group",children:[(0,B.jsx)("label",{htmlFor:r,className:"form-label",children:"Change text"}),(0,B.jsx)("textarea",{className:"form-control",style:{width:"100%",resize:"vertical",maxHeight:"260px"},ref:n,id:r,value:e.settings.value,onChange:i})]})]})};const Y={name:z,settings:{value:"placeholder",tag:"span",href:null,fontFamily:j,isBold:!1,isItalic:!1,isUnderline:!1}}},9956:(e,t,n)=>{"use strict";n(2228),n(2575),n(1222),n(8109);var o=n(9081);e.exports=o.Set},5754:(e,t,n)=>{"use strict";n(1390)("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n(7857))},1222:(e,t,n)=>{"use strict";n(5754)},9233:(e,t,n)=>{"use strict";var o=n(9956);n(9702),e.exports=o},6859:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(559),r=n.n(o),i=n(3476),l=n.n(i)()(r());l.push([e.id,".pin-module__container__rc2q9{position:relative}.pin-module__container__rc2q9:hover{outline:2px solid #6b94b9}.pin-module__container__rc2q9:hover>.pin-module__pin__TCCp6{display:flex}.pin-module__container__rc2q9 .pin-module__pin__TCCp6{cursor:pointer;display:none;position:absolute;width:26px;height:26px;left:100%;top:0;bottom:0;margin:auto 0;background-color:#6b94b9;z-index:1;box-shadow:rgba(0,0,0,.2) 0 0 12px;border-top-right-radius:50%;border-bottom-right-radius:50%;text-align:center;justify-content:center;align-items:center}.pin-module__container__rc2q9 .pin-module__pin__TCCp6 .material-icons{color:#fff;background-color:rgba(0,0,0,0);font-size:16px}.pin-module__container__rc2q9.pin-module__text__ogOkp:hover{outline:2px solid #a679a7}.pin-module__container__rc2q9.pin-module__text__ogOkp>.pin-module__pin__TCCp6{top:100%;right:0;bottom:initial;left:0;margin:0 auto;border-top-right-radius:0;border-bottom-right-radius:50%;border-top-left-radius:0;border-bottom-left-radius:50%;background-color:#a679a7}.pin-module__container__rc2q9.pin-module__box__y9zMa:hover{outline:2px solid #5a599e}.pin-module__container__rc2q9.pin-module__box__y9zMa>.pin-module__pin__TCCp6{top:0;right:100%;bottom:0;left:initial;margin:auto 0;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:50%;border-bottom-left-radius:50%;background-color:#5a599e}.pin-module__container__rc2q9.pin-module__containerPinned__vBoyu{outline:3px solid #e3e300;z-index:1}.pin-module__container__rc2q9.pin-module__containerPinned__vBoyu:hover{outline:3px solid #e3e300}.pin-module__container__rc2q9.pin-module__containerPinned__vBoyu>.pin-module__pin__TCCp6{display:flex;background-color:#e3e300}","",{version:3,sources:["webpack://./lib/widget/store/common/pin/pin.module.scss","webpack://./styles/core/variables.scss"],names:[],mappings:"AAAmC,8BACjC,iBAAA,CAEA,oCACE,yBAAA,CAEA,4DACE,YAAA,CAIJ,sDACE,cAAA,CACA,YAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CACA,KAAA,CACA,QAAA,CACA,aAAA,CACA,wBCrBe,CDsBf,SAAA,CACA,kCAAA,CACA,2BAAA,CACA,8BAAA,CACA,iBAAA,CACA,sBAAA,CACA,kBAAA,CAEA,sEACE,UAAA,CACA,8BAAA,CACA,cAAA,CAKF,4DACE,yBAAA,CAGF,8EACE,QAAA,CACA,OAAA,CACA,cAAA,CACA,MAAA,CACA,aAAA,CACA,yBAAA,CACA,8BAAA,CACA,wBAAA,CACA,6BAAA,CACA,wBCnDY,CDwDd,2DACE,yBAAA,CAGF,6EACE,KAAA,CACA,UAAA,CACA,QAAA,CACA,YAAA,CACA,aAAA,CACA,yBAAA,CACA,4BAAA,CACA,0BAAA,CACA,6BAAA,CACA,wBCrEW,CDyEf,iEACE,yBAAA,CACA,SAAA,CAEA,uEACE,yBAAA,CAGF,yFACE,YAAA,CACA,wBAAA",sourcesContent:["@import '/styles/core/index.scss'; .container {\n  position: relative;\n\n  &:hover {\n    outline: 2px solid $color-tool-table;\n\n    & > .pin {\n      display: flex;\n    }\n  }\n\n  .pin {\n    cursor: pointer;\n    display: none;\n    position: absolute;\n    width: 26px;\n    height: 26px;\n    left: 100%;\n    top: 0;\n    bottom: 0;\n    margin: auto 0;\n    background-color: $color-tool-table;\n    z-index: 1;\n    box-shadow: rgb(0 0 0 / 20%) 0 0 12px;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n\n    :global(.material-icons) {\n      color: white;\n      background-color: transparent;\n      font-size: 16px;\n    }\n  }\n\n  &.text {\n    &:hover {\n      outline: 2px solid $color-tool-text;\n    }\n\n    & > .pin {\n      top: 100%;\n      right: 0;\n      bottom: initial;\n      left: 0;\n      margin: 0 auto;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 50%;\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 50%;\n      background-color: $color-tool-text;\n    }\n  }\n\n  &.box {\n    &:hover {\n      outline: 2px solid $color-tool-box;\n    }\n\n    & > .pin {\n      top: 0;\n      right: 100%;\n      bottom: 0;\n      left: initial;\n      margin: auto 0;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n      border-top-left-radius: 50%;\n      border-bottom-left-radius: 50%;\n      background-color: $color-tool-box;\n    }\n  }\n\n  &.containerPinned {\n    outline: 3px solid #e3e300;\n    z-index: 1;\n\n    &:hover {\n      outline: 3px solid #e3e300;\n    }\n\n    & > .pin {\n      display: flex;\n      background-color: #e3e300;\n    }\n  }\n}\n","$color-tool-table: #6b94b9; // Faded Blue\n$color-tool-text: #a679a7; // Bouquet\n$color-tool-box: #5a599e; // Butterfly Bush\n"],sourceRoot:""}]),l.locals={container:"pin-module__container__rc2q9",pin:"pin-module__pin__TCCp6",text:"pin-module__text__ogOkp",box:"pin-module__box__y9zMa",containerPinned:"pin-module__containerPinned__vBoyu"};const s=l},9450:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(559),r=n.n(o),i=n(3476),l=n.n(i)()(r());l.push([e.id,".text-module__container__LWC2_{word-wrap:break-word;word-break:break-word;overflow-wrap:break-word;white-space:normal;width:100%;white-space:pre}","",{version:3,sources:["webpack://./lib/widget/store/text/v1/text.module.scss","webpack://./styles/core/text-overflow.scss"],names:[],mappings:"AAAmC,+BCCjC,oBAAA,CACA,qBAAA,CACA,wBAAA,CACA,kBAAA,CDFA,UAAA,CACA,eAAA",sourcesContent:["@import '/styles/core/index.scss'; .container {\n  @include text-overflow();\n  width: 100%;\n  white-space: pre;\n}\n","@mixin text-overflow {\n  word-wrap: break-word; //low support\n  word-break: break-word;\n  overflow-wrap: break-word;\n  white-space: normal;\n}\n"],sourceRoot:""}]),l.locals={container:"text-module__container__LWC2_"};const s=l},9845:(e,t,n)=>{e.exports=n(9233)}}]);