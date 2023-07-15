/*! For license information please see 372.bc1d944a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbeers=self.webpackChunkbeers||[]).push([[372],{601:function(t,e,r){var n=r(433),o=r(861),i=r(847),a=r(243);function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(B){l=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new _(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(B){return{type:"throw",arg:B}}}t.wrap=s;var h={};function p(){}function d(){}function v(){}var y={};l(y,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(Z([])));b&&b!==e&&r.call(b,i)&&(y=b);var m=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,c){var u=f(t[n],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function Z(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=v,n(m,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(w.prototype),l(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),l(m,u,"Generator"),l(m,i,(function(){return this})),l(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=Z,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}a.Z.defaults.baseURL="https://api.punkapi.com/v2";var u=(0,i.ZP)((function(t){return{beers:[],beer:null,getBeers:function(){var e=(0,o.Z)(c().mark((function e(r,n){var o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("/beers?page=".concat(r,"&per_page=").concat(n));case 3:o=e.sent,t({beers:o.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching beers:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),getBeerById:function(){var e=(0,o.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("/beers/".concat(r));case 3:n=e.sent,t({beer:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching beer:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),removeBeer:function(e){return t((function(t){return{beers:t.beers.filter((function(t){return t!==e}))}}))},visibleButtonId:[],toggleButtonVisibility:function(e){t((function(t){return{visibleButtonId:t.visibleButtonId.includes(e)?t.visibleButtonId.filter((function(t){return t!==e})):[].concat((0,n.Z)(t.visibleButtonId),[e])}}))},deleteBeer:function(e){t((function(t){return{beers:t.beers.filter((function(t){return t.id!==e}))}}))}}}));e.Z=u},372:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var n,o,i,a,c=r(791),u=r(689),l=r(601),s=r(168),f=r(867),h=r(87),p=f.ZP.div(n||(n=(0,s.Z)(["\n  position: relative;\n  display: flex;\n"]))),d=(0,f.ZP)(h.rU)(o||(o=(0,s.Z)(["\n  position: absolute;\n  right: 20px;\n  margin: 0 auto;\n  padding: 8px 16px;\n  border-radius: 4px;\n  background-color: #3f51b5;\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  &:hover {\n    background-color: #799be6;\n    color: black;\n  };\n\n"]))),v=f.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n\n"]))),y=f.ZP.div(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 25%;\n"]))),g=r(184),b=function(){var t,e,r,n=(0,l.Z)(),o=n.beer,i=n.getBeerById,a=(0,u.UO)().beerId,s=(0,u.TH)(),f=(0,c.useRef)(null===(t=s.state)||void 0===t?void 0:t.location);if(console.log(a),(0,c.useEffect)((function(){i(a)}),[a,i]),!o)return(0,g.jsx)("p",{children:"404 Not Found"});var h=o[0],b=h.name,m=h.image_url,x=h.abv,w=h.tagline,L=h.brewers_tips,j=h.contributed_by,E=h.first_brewed;return(0,g.jsxs)(p,{children:[(0,g.jsx)(d,{to:null!==(e=f.current)&&void 0!==e?e:"/",children:"Go back"}),(0,g.jsxs)(v,{children:[(0,g.jsx)("img",{src:m,alt:b}),(0,g.jsxs)(y,{children:[(0,g.jsxs)("h2",{children:[b,": ",null===E||void 0===E||null===(r=E.split("/"))||void 0===r?void 0:r[1]]}),(0,g.jsx)("p",{children:L}),(0,g.jsx)("h3",{children:"strength"}),(0,g.jsx)("p",{children:x}),(0,g.jsx)("h2",{children:w}),(0,g.jsx)("p",{children:j})]})]})]})}}}]);
//# sourceMappingURL=372.bc1d944a.chunk.js.map