(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"12d7":function(t,e,a){t.exports=a.p+"img/location-icon.2b520199.png"},2923:function(t,e,a){t.exports=a.p+"img/drink.8bc9da6c.png"},"36f5":function(t,e,a){t.exports=a.p+"img/drink-back.d34194a7.png"},"3dc6":function(t,e,a){t.exports=a.p+"img/golnij-logo.76c33d82.png"},"3e9e":function(t,e,a){t.exports=a.p+"img/beer-back.1be3816f.png"},"3ed1":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=a("8c4f"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"landing-layout"},[a("navbar"),a("slider"),a("offer"),a("footerComponent")],1)},o=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"main-logo"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:a("3dc6"),alt:"logo"}})])],1),s("div",{staticClass:"bookmarks"},[s("router-link",{staticClass:"bookmark",attrs:{to:"/about"}},[t._v("O platformie")]),s("router-link",{staticClass:"bookmark",attrs:{to:"/"}},[t._v("Członkostwo")]),s("router-link",{staticClass:"bookmark",attrs:{to:"/"}},[t._v("Wsparcie")])],1),t._m(0)])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account-box"},[a("div",{staticClass:"small-btn login-btn"},[t._v("Zaloguj się")]),a("div",{staticClass:"small-btn register-btn"},[t._v("Dołącz do nas")])])}],l={data:function(){return{}}},u=l,d=a("2877"),p=Object(d["a"])(u,r,c,!1,null,null,null),f=p.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slider",style:{backgroundImage:"url("+t.backgroundPhoto+")"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("carousel",{attrs:{"per-page":1,"mouse-drag":!0,paginationActiveColor:"#ffcd49",autoplay:!0,autoplayTimeout:1e4}},[s("slide",{staticClass:"slide"},[s("div",{staticClass:"description"},[s("h1",[t._v("Golnij sobie ziomuś")]),s("p",[t._v("Przedstawiamy pierwszy w Polsce portal zrzeszający fanów trunków wysokoprocentowych")])]),s("div",{staticClass:"image"},[s("img",{attrs:{src:a("cd6c"),alt:"screens"}})])]),s("slide",{staticClass:"slide"},[s("div",{staticClass:"description"},[s("h1",[t._v("Przechyl z ekipą")]),s("p",[t._v("Na naszej platformie poznasz osoby o podobnych gustach alkoholowych. Możesz również dołączyć do imprezy w Twojej okolicy.")])]),s("div",{staticClass:"image"},[s("img",{attrs:{src:a("f87f"),alt:"screens"}})])]),s("slide",{staticClass:"slide"},[s("div",{staticClass:"description"},[s("h1",[t._v("Zapisuj swoje ulubione trunki")]),s("p",[t._v("Daj sie poznać! Twórz własne przepisy drinków i dodawaj do profilu ulubione alkohole.")])]),s("div",{staticClass:"image"},[s("img",{attrs:{src:a("2923"),alt:"screens"}})])])],1)],1)])])},b=[],m={data:function(){return{backgroundPhoto:a("ed12")}}},g=m,C=Object(d["a"])(g,v,b,!1,null,null,null),_=C.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"benefits"},[t._m(0),a("div",{staticClass:"alc-types-row"},[a("div",{staticClass:"alc-type-cube",style:{backgroundImage:"url("+t.offerImages[0]+")"}},[t._m(1)]),a("div",{staticClass:"alc-type-cube",style:{backgroundImage:"url("+t.offerImages[1]+")"}},[t._m(2)]),a("div",{staticClass:"alc-type-cube",style:{backgroundImage:"url("+t.offerImages[2]+")"}},[t._m(3)]),a("div",{staticClass:"alc-type-cube",style:{backgroundImage:"url("+t.offerImages[3]+")"}},[t._m(4)])])])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row benefits-row"},[s("h1",{staticClass:"main-header"},[t._v("Co oferujemy?")]),s("div",{staticClass:"separator"}),s("div",{staticClass:"benefits-container"},[s("div",{staticClass:"benefit-box"},[s("div",{staticClass:"icon-circle"},[s("img",{attrs:{src:a("f534"),alt:""}})]),s("h3",{staticClass:"benefit-title"},[t._v("Baza użytkowników")]),s("p",{staticClass:"benefit-desc"},[t._v("Na naszej stronie zarejestrowało się już ponad 10 000 użytkowników. To pozwala na zapoznanie wielu ciekawych osób.")])]),s("div",{staticClass:"benefit-box"},[s("div",{staticClass:"icon-circle"},[s("img",{attrs:{src:a("cd48"),alt:""}})]),s("h3",{staticClass:"benefit-title"},[t._v("Katalog alkoholi")]),s("p",{staticClass:"benefit-desc"},[t._v("Korzystając z naszej platformy masz dostęp do ogromnej ilości alkoholi dodanych przez innych użytkowników.")])]),s("div",{staticClass:"benefit-box"},[s("div",{staticClass:"icon-circle"},[s("img",{attrs:{src:a("12d7"),alt:""}})]),s("h3",{staticClass:"benefit-title"},[t._v("Okoliczne imprezy")]),s("p",{staticClass:"benefit-desc"},[t._v("Na podstawie Twojej obecnej lokalizacji znajdziemy najbliższe wydarzenia.")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-box"},[a("h3",[t._v("Drinki")]),a("div",{staticClass:"alc-overlay"},[a("div",{staticClass:"small-btn join-btn"},[t._v("Dołącz już dziś")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-box"},[a("h3",[t._v("Piwa")]),a("div",{staticClass:"alc-overlay"},[a("div",{staticClass:"small-btn join-btn"},[t._v("Dołącz już dziś")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-box"},[a("h3",[t._v("Wina")]),a("div",{staticClass:"alc-overlay"},[a("div",{staticClass:"small-btn join-btn"},[t._v("Dołącz już dziś")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-box"},[a("h3",[t._v("Likiery")]),a("div",{staticClass:"alc-overlay"},[a("div",{staticClass:"small-btn join-btn"},[t._v("Dołącz już dziś")])])])}],k={data:function(){return{offerImages:[a("36f5"),a("3e9e"),a("9561"),a("b02e")]}}},w=k,j=Object(d["a"])(w,y,h,!1,null,null,null),z=j.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer")},O=[],P={},$=P,E=Object(d["a"])($,x,O,!1,null,null,null),I=E.exports,T={components:{navbar:f,slider:_,offer:z,footerComponent:I}},D=T,M=Object(d["a"])(D,n,o,!1,null,null,null),S=M.exports;s["a"].use(i["a"]);var N=new i["a"]({routes:[{path:"/",name:"Home",component:S}],mode:"history"}),J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},K=[],W={data:function(){return{}}},Z=W,q=Object(d["a"])(Z,J,K,!1,null,null,null),A=q.exports,B=(a("3ed1"),a("106a"),a("0a63")),G=a.n(B);s["a"].use(G.a),s["a"].config.productionTip=!1,new s["a"]({router:N,render:function(t){return t(A)}}).$mount("#app")},9561:function(t,e,a){t.exports=a.p+"img/wine-back.b19a98a4.png"},b02e:function(t,e,a){t.exports=a.p+"img/liqueur-back.a1932bcb.png"},cd48:function(t,e,a){t.exports=a.p+"img/drinks-icon.7b9c51c3.png"},cd6c:function(t,e,a){t.exports=a.p+"img/screen.c468c90b.png"},ed12:function(t,e,a){t.exports=a.p+"img/background-slider.4764a48b.png"},f534:function(t,e,a){t.exports=a.p+"img/people2.73783d26.png"},f87f:function(t,e,a){t.exports=a.p+"img/people.181f425f.png"}});
//# sourceMappingURL=app.67b3f2a5.js.map