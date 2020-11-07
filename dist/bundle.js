(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nbody {\n  background: lightblue;\n}\n\n.container {\n  text-align: center;\n  width: 60%;\n  margin: 0 auto;\n  border-radius: 8px;\n}\n\nheader {\n  background: lightgoldenrodyellow;\n  border-radius: 8px;\n  margin: 4em 0 0.5em 0;\n  padding: 2em;\n}\n\n.form-container {\n  background: lightgoldenrodyellow;\n  border-radius: 8px;\n  padding: 1em;\n  margin-bottom: 0.5em;\n}\n\n.form-search-city {\n  display: flex;\n  height: 2.3em;\n}\n\n.name-city-input {\n  border: 1px solid black;\n  background: rgb(239 239 239);\n  width: 75%;\n  font-size: 16px;\n  margin-right: 2px;\n  border-radius: 5px 0 0 5px;\n  padding-left: 0.7em;\n}\n\n.btn-city-input {\n  width: 25%;\n  border: 1px solid black;\n  border-radius: 0 5px 5px 0;\n}\n\n.name-city-input:focus,\n.btn-city-input:focus {\n  outline: none;\n}\n\n.btn-city-input:hover {\n  background: rgb(220 233 236);\n}\n\n.display-weather {\n  border: 1px solid black;\n  background: lightslategrey;\n  border-radius: 8px;\n  height: 13em;\n  padding: 2em 0 1em 0;\n\n  display: flex;\n  justify-content: space-between;\n  color: white;\n}\n\n.show-country {\n  font-size: 14px;\n}\n\n.show-city {\n  font-size: 20px;\n}\n\n.main-weather-temp {\n  text-align: left;\n}\n\n.main-temp {\n  font-size: 6em;\n}\n",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],d=n.base?c[0]+n.base:c[0],s=t[d]||0,u="".concat(d," ").concat(s);t[d]=s+1;var l=i(u),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(a[l].references++,a[l].updater(m)):a.push({identifier:u,updater:h(m,n),references:1}),r.push(u)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,u=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function l(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function m(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,f=0;function h(e,n){var t,r,o;if(n.singleton){var a=f++;t=p||(p=d(n)),r=l.bind(null,t,a,!1),o=l.bind(null,t,a,!0)}else t=d(n),r=m.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var d=c(e,n),s=0;s<t.length;s++){var u=i(t[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=d}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=document.querySelector("[data-show-city]"),a=document.querySelector("[data-show-country]"),i=document.querySelector("[data-show-weather-main]"),c=document.querySelector("[data-show-weather-desc]"),d=document.querySelector("[data-show-temp-main]"),s=document.querySelector("[data-show-temp-feel]"),u=document.querySelector("[data-show-temp-max]"),l=document.querySelector("[data-show-temp-min]"),m=document.querySelector("[data-show-wind]"),p=document.querySelector("[data-search-city-form]"),f=document.querySelector("[data-city-name-input]");p.addEventListener("submit",(e=>{e.preventDefault(),(async e=>{try{const n=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=108f7da063795b7306e8b024f6068b48&units=metric`,{mode:"cors"}),t=await n.json();o.innerText=t.name,a.innerText=t.sys.country,i.innerText=t.weather[0].main,c.innerText=t.weather[0].description,d.innerText=Math.round(t.main.temp),s.innerText="Feels Like "+Math.round(t.main.feels_like),u.innerText="Max: "+Math.round(t.main.temp_max),l.innerText="Min: "+Math.round(t.main.temp_min),m.innerText="Wind: "+t.wind.speed}catch(n){o.innerText="No data available for "+e,a.innerText="",i.innerText="",c.innerText="",d.innerText="",s.innerText="",u.innerText="",l.innerText="",m.innerText=""}})(f.value),p.reset()}))})()})();