(function(){var e={5784:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer"}},[n("div",{attrs:{id:"caja"}},[n("h2",[e._v("Filmoteca")]),n("hr"),n("ul",{staticClass:"cajafooter"},[n("li",{staticClass:"part"},[n("router-link",{attrs:{to:"/aboutFilmoteca"}},[e._v("Sobre Filmoteca")])],1),n("li",{staticClass:"part"},[n("router-link",{attrs:{to:"/politicasPrivacidad"}},[e._v("Politica de privaidad")])],1)]),n("p",[e._v("@2022 Filmoteca- Todos los derechos reservados")])])])},a=[],o={name:"footerComponent"},i=o,u=n(1001),c=(0,u.Z)(i,r,a,!1,null,"7a4d8bd8",null),l=c.exports},6076:function(){},5696:function(e,t,n){"use strict";var r=n(8935),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=n(6076),u=n.n(i),c=u(),l=n(1001),s=(0,l.Z)(c,a,o,!1,null,"64f834c8",null),d=s.exports,f=n(3493),m=n(4665),p=n(7522),v=n.n(p);r.Z.use(m.ZP),r.Z.use(v());var h=new m.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});r.Z.use(v());const g={router:f.Z,store:h,render:function(e){return e(d)}},b=new r.Z(g);b.$mount("#app")},3493:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(8935),a=n(2809),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"LandingPage"},[r("img",{attrs:{alt:"Vue logo",src:n(4806)}}),r("bodyLandingPage"),r("div",{attrs:{id:"foot"}},[r("footerComponent")],1)],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"BodyLandingPage"}},[n("h2",[e._v("Bienvenido a Filmoteca!")]),n("div",{attrs:{id:"presentacion"}},[e._v(" Si eres un cinefilo esta es tu aplicación de gestión de peliculas. Guarda información de tus películas, comentarios, notas, etc... Marca las que has visto, las que tienes pendientes para poder disfrutar más de tu amor al cine. ")]),n("hr"),n("div",{attrs:{id:"cajaEnlaces"}},[n("ul",[n("li",[n("p",[e._v("Si ya tienes cuenta con nosotros, identificate")]),n("hr"),n("router-link",{attrs:{id:"botones",to:"/loginPage"}},[e._v("Identificación")])],1),n("li",[n("p",[e._v("Si no tienes cuenta, registra una")]),n("hr"),n("router-link",{attrs:{id:"botones",to:"/registrationPage"}},[e._v("Crear nueva cuenta")])],1)])])])},c=[],l={name:"bodyLandingPage",data:function(){return{email:localStorage.mail}}},s=l,d=n(1001),f=(0,d.Z)(s,u,c,!1,null,null,null),m=f.exports,p=n(5784),v={name:"LandingPage",data:function(){return{email:localStorage.mail}},components:{bodyLandingPage:m,FooterComponent:p.Z},created(){this.actualizarLocalStorage()},methods:{actualizarLocalStorage(){localStorage.clear()}}},h=v,g=(0,d.Z)(h,o,i,!1,null,"2cfab420",null),b=g.exports;r.Z.use(a.Z);const P=[{path:"/",name:"LandingPage",component:b},{path:"/loginPage",name:"loginPage",component:()=>Promise.all([n.e(83),n.e(463)]).then(n.bind(n,7001))},{path:"/registrationPage",name:"registrationPage",component:()=>Promise.all([n.e(83),n.e(732)]).then(n.bind(n,9474))},{path:"/homePage",name:"homePage",component:()=>Promise.all([n.e(83),n.e(628)]).then(n.bind(n,8263))},{path:"/AddPelicula",name:"addPelicula",component:()=>Promise.all([n.e(83),n.e(902)]).then(n.bind(n,2232))},{path:"/UpdatePelicula",name:"updatePelicula",component:()=>Promise.all([n.e(83),n.e(267)]).then(n.bind(n,5534))},{path:"/userAcount",name:"userAcount",component:()=>Promise.all([n.e(83),n.e(810)]).then(n.bind(n,8511))},{path:"/politicasPrivacidad",name:"politicasPrivacidad",component:()=>n.e(637).then(n.bind(n,8637))},{path:"/aboutFilmoteca",name:"aboutFilmoteca",component:()=>n.e(248).then(n.bind(n,4248))}],y=new a.Z({mode:"history",base:"/",routes:P});var _=y},4806:function(e,t,n){"use strict";e.exports=n.p+"img/LogoFilmoteca00.5446eb4b.png"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],a=e[s][1],o=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,o<i&&(i=o));if(u){e.splice(s--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{83:"07eaac22",248:"f40966f7",267:"0aba05c5",463:"90e9036e",628:"bca3e391",637:"8ed8b0dd",732:"1d440651",810:"1683b149",902:"aa0004da"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{248:"3949968d",267:"76f86b14",463:"a039a39c",628:"3f2a883e",637:"261834fa",732:"2caadf41",810:"aa91d191",902:"ff2b2d51"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="filmotecafront:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var u,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=r),e[r]=[a];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var a=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return a();e(r,u,a,o)}))},a={143:0};n.f.miniCss=function(e,t){var n={248:1,267:1,463:1,628:1,637:1,732:1,810:1,902:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],u=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(c)var s=c(n)}for(t&&t(r);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self["webpackChunkfilmotecafront"]=self["webpackChunkfilmotecafront"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5696)}));r=n.O(r)})();
//# sourceMappingURL=app.ac00ac3b.js.map