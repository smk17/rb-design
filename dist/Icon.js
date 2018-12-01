"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.svgBaseProps=void 0;var React=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}var _a,__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r},svgBaseProps=((_a={width:"1em",height:"1em",fill:"currentColor"})["aria-hidden"]="true",_a.focusable="false",_a);exports.svgBaseProps=svgBaseProps;var customCache=new Set,Icon=function(e){var t,r,n,a=e.className,o=e.type,s=e.component,i=e.viewBox,c=e.spin,l=e.children,u=__rest(e,["className","type","component","viewBox","spin","children"]),p=(0,_classnames.default)(((t={}).anticon=!0,t["anticon-"+o]=Boolean(o),t),a),f=(0,_classnames.default)(((r={})["anticon-spin"]=!!c||"loading"===o,r));if(s){var d=__assign({},svgBaseProps,{className:f,viewBox:i});i||delete d.viewBox,n=React.createElement(s,__assign({},d),l)}if(l){d=__assign({},svgBaseProps,{className:f});n=React.createElement("svg",__assign({},d,{viewBox:i}),l)}return React.createElement("i",__assign({},u,{className:p}),n)};function createFromIconfontCN(e){void 0===e&&(e={});var t=e.scriptUrl,r=e.extraCommonProps,o=void 0===r?{}:r;if("undefined"!=typeof document&&"undefined"!=typeof window&&"function"==typeof document.createElement&&"string"==typeof t&&t.length&&!customCache.has(t)){var n=document.createElement("script");n.setAttribute("src",t),n.setAttribute("data-namespace",t),customCache.add(t),document.body.appendChild(n)}var a=function(e){var t=e.type,r=e.children,n=__rest(e,["type","children"]),a=null;return e.type&&(a=React.createElement("use",{xlinkHref:"#"+t})),r&&(a=r),React.createElement(Icon,__assign({},n,o),a)};return a.displayName="Iconfont",a}var _default=createFromIconfontCN;exports.default=_default;
//# sourceMappingURL=Icon.js.map
