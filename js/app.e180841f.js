(function(t){function e(e){for(var r,a,o=e[0],u=e[1],s=e[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},i={app:0},c=[];function o(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-56493bba":"7e9dba02","chunk-5e800f0e":"257ef7bc","chunk-63555ff4":"926deafc","chunk-911dc320":"5a3ef79e"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-56493bba":1,"chunk-5e800f0e":1,"chunk-63555ff4":1,"chunk-911dc320":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-56493bba":"7cd43880","chunk-5e800f0e":"7a526410","chunk-63555ff4":"4fe14096","chunk-911dc320":"69ce6d72"}[t]+".css",i=u.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var s=c[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],l=s.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],d.parentNode.removeChild(d),n(c)},d.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"3b53":function(t,e,n){"use strict";n("5426")},5121:function(t,e,n){},5426:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},i=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tab-bar",[r("tab-bar-item",{staticClass:"item",attrs:{path:"/kazuma"}},[r("h2",{attrs:{slot:"item-icon"},slot:"item-icon"},[t._v("堀")]),r("img",{attrs:{slot:"item-icon-active",src:n("fc2c"),alt:""},slot:"item-icon-active"})]),r("tab-bar-item",{staticClass:"item",attrs:{path:"/story"}},[r("h2",{attrs:{slot:"item-icon"},slot:"item-icon"},[t._v("川")]),r("img",{attrs:{slot:"item-icon-active",src:n("fc2c"),alt:""},slot:"item-icon-active"})]),r("tab-bar-item",{staticClass:"item",attrs:{path:"/fans"}},[r("h2",{attrs:{slot:"item-icon"},slot:"item-icon"},[t._v("和")]),r("img",{attrs:{slot:"item-icon-active",src:n("fc2c"),alt:""},slot:"item-icon-active"})]),r("tab-bar-item",{staticClass:"item",attrs:{path:"/more"}},[r("h2",{attrs:{slot:"item-icon"},slot:"item-icon"},[t._v("马")]),r("img",{attrs:{slot:"item-icon-active",src:n("fc2c"),alt:""},slot:"item-icon-active"})])],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},s=[],l={name:"TabBar"},f=l,d=(n("7847"),n("2877")),m=Object(d["a"])(f,u,s,!1,null,null,null),p=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},b=[],v=(n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"royalblue"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),g=v,y=(n("3b53"),Object(d["a"])(g,h,b,!1,null,null,null)),k=y.exports,_={name:"MainTabBar",components:{TabBar:p,TabBarItem:k}},w=_,O=(n("bac1"),Object(d["a"])(w,c,o,!1,null,"429b793b",null)),j=O.exports,C={name:"app",components:{MainTabBar:j}},x=C,S=(n("034f"),Object(d["a"])(x,a,i,!1,null,null,null)),T=S.exports,E=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(E["a"]);var L,P=function(){return n.e("chunk-5e800f0e").then(n.bind(null,"113f"))},A=function(){return n.e("chunk-63555ff4").then(n.bind(null,"3d63"))},B=function(){return n.e("chunk-911dc320").then(n.bind(null,"4351"))},$=function(){return n.e("chunk-56493bba").then(n.bind(null,"b1db"))},M=[{path:"",redirect:"/kazuma"},{path:"/kazuma",component:P},{path:"/story",component:A},{path:"/fans",component:B},{path:"/more",component:$}],N=new E["a"]({mode:"history",base:"",routes:M}),z=N,D=n("2f62"),I=n("ade3"),q="add_counter",J="add_to_cart",F=(L={},Object(I["a"])(L,q,(function(t,e){e.count++})),Object(I["a"])(L,J,(function(t,e){e.isChecked=!0,t.cartList.push(e)})),L),H=(n("7db0"),{addCart:function(t,e){return new Promise((function(n,r){var a=t.state.cartList.find((function(t){return t.iid===e.iid}));a?(t.commit(q,a),n("商品数量+1")):(e.count=1,t.commit(J,e),n("添加新商品"))}))}}),K={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}};r["a"].use(D["a"]);var U={cartList:[]},G=new D["a"].Store({state:U,mutations:F,actions:H,getters:K}),Q=G;n("5121");r["a"].config.productionTip=!1,new r["a"]({router:z,store:Q,render:function(t){return t(T)}}).$mount("#app")},6705:function(t,e,n){},7847:function(t,e,n){"use strict";n("ae29")},"85ec":function(t,e,n){},ae29:function(t,e,n){},bac1:function(t,e,n){"use strict";n("6705")},fc2c:function(t,e,n){t.exports=n.p+"img/kazuma.a9e68967.jpg"}});
//# sourceMappingURL=app.e180841f.js.map