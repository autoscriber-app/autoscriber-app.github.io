(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({about:"about",session:"session"}[e]||e)+"."+{about:"8c5fcada",session:"c53dc132"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={session:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",session:"session"}[e]||e)+"."+{about:"31d6cfe0",session:"aa35bca3"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{dark:"",color:"blue",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-spacer"),n("router-link",{attrs:{tag:"span",to:"/"}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-home")])],1)],1)],1),n("v-navigation-drawer",{attrs:{absolute:"",bottom:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",e._l(e.navbarItems,(function(t,r){return n("router-link",{key:r,attrs:{tag:"span",to:t.href}},[n("v-list-item",[n("v-list-item-title",{staticStyle:{color:"unset","text-decoration":"none"}},[e._v(e._s(t.title))])],1)],1)})),1)],1)],1),n("v-content",[n("v-col",{attrs:{cols:"12"}},[n("router-view")],1)],1)],1)},a=[],i={data:function(){return{APPNAME:"Autoscriber App",drawer:!1,navbarItems:[{title:"Create/Join Session",href:"/"},{title:"About Autoscriber",href:"/about"}],prompt:null,installed:!1}},created:function(){var e=this;document.title=this.APPNAME,window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),e.prompt=t}))},methods:{}},s=i,c=(n("034f"),n("2877")),u=n("6544"),l=n.n(u),d=n("7496"),p=n("40dc"),f=n("5bc1"),v=n("8336"),m=n("62ad"),h=n("a75b"),b=n("132d"),g=n("8860"),w=n("da13"),y=n("1baa"),k=n("5d23"),x=n("f774"),S=n("2fa4"),j=Object(c["a"])(s,o,a,!1,null,null,null),A=j.exports;l()(j,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:f["a"],VBtn:v["a"],VCol:m["a"],VContent:h["a"],VIcon:b["a"],VList:g["a"],VListItem:w["a"],VListItemGroup:y["a"],VListItemTitle:k["a"],VNavigationDrawer:x["a"],VSpacer:S["a"]});var _=n("f309");r["a"].use(_["a"]);var O=new _["a"]({theme:{dark:!0}}),C=(n("d3b7"),n("8c4f")),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"card",staticStyle:{width:"fit-content",padding:"0px 25px 20px 25px"},attrs:{color:"#385F73",dark:""}},[n("v-card-title",{staticClass:"headline justify-center"},[e._v("Welcome to Autoscriber!")]),n("v-card-actions",{staticClass:"justify-center",staticStyle:{"flex-wrap":"wrap"}},[n("v-btn",{staticClass:"blue paddedButton",attrs:{dark:"",large:""},on:{click:function(t){return e.createSession()}}},[e._v(" Create a New Session ")]),n("v-btn",{staticClass:"green paddedButton",attrs:{dark:"",large:""},on:{click:function(t){return e.joinSession()}}},[e._v(" Join a Session ")]),n("v-btn",{staticClass:"gray paddedButton",attrs:{dark:"",large:""},on:{click:function(t){return e.downloadNotes()}}},[e._v(" Download Notes ")])],1),n("ShortDesc")],1)},I=[],N=(n("99af"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),V=n("bc3a"),D=n.n(V),P=n("a3c4"),R=n("21a6");n("25f0");function B(e,t,n){e.error({title:t.toString(),text:"Autoscriber encountered an error: ".concat(n)})}var L=n("a9c4"),T="https://autoscriber.sagg.in:8000",$=new(window.SpeechRecognition||window.webkitSpeechRecognition);$.continuous=!1,$.interimResults=!0,$.onstart=function(){console.debug("Recognition started")},$.onaudioend=function(){return $.stop()},$.lang="en-US";var M={data:function(){return{}},methods:{getMeetingId:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(P["a"])(e.$dialog,"session");case 2:if(n=t.sent,n){t.next=5;break}return t.abrupt("return");case 5:return r=n.split("/session/"),r.length>1&&(n=r[1].substr(1)),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})))()},joinSession:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMeetingId();case 2:n=t.sent,n&&e.$router.push("/session/".concat(n));case 4:case"end":return t.stop()}}),t)})))()},createSession:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(P["a"])(e.$dialog,"name");case 2:if(n=t.sent,n){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,D.a.post("".concat(T,"/host"),{});case 7:r=t.sent,e.$router.push({name:"Session",params:{sessionID:r.data.meeting_id,name:n,isHost:!0,uid:r.data.uid}});case 9:case"end":return t.stop()}}),t)})))()},downloadNotes:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.t0=e.downloadID,t.t0){t.next=5;break}return t.next=4,e.getMeetingId();case 4:t.t0=t.sent;case 5:if(n=t.t0,!n){t.next=11;break}return t.next=9,D.a.get("".concat(T,"/download?id=").concat(n));case 9:r=t.sent,"string"!==typeof r?B(e.$dialog,new Error("Could not download notes"),r.data.detail):Object(R["saveAs"])(new Blob([r],{type:"text/plain;charset=utf-8"}),"notes_".concat(n,".md"));case 11:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.downloadID&&this.downloadNotes()},props:{downloadID:{type:String,default:""}},components:{ShortDesc:L["a"]}},J=M,F=(n("5b77"),n("b0af")),q=n("99d9"),H=Object(c["a"])(J,E,I,!1,null,null,null),z=H.exports;l()(H,{VBtn:v["a"],VCard:F["a"],VCardActions:q["a"],VCardTitle:q["d"]}),r["a"].use(C["a"]);var U=[{path:"/",name:"Join",component:z},{path:"/session/:sessionID",name:"Session",component:function(){return n.e("session").then(n.bind(null,"ea4c"))},props:!0},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],W=new C["a"]({routes:U,base:"/"}),G=W,K=n("9483");Object(K["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),window.location.reload()},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Q=n("83df");n("8128");r["a"].use(Q["a"],{context:{vuetify:O}}),r["a"].config.productionTip=!1,r["a"].config.errorHandler=function(e,t,n){B(t.$dialog,e,n)},new r["a"]({vuetify:O,router:G,render:function(e){return e(A)}}).$mount("#app")},"5b77":function(e,t,n){"use strict";n("7361")},7361:function(e,t,n){},"85ec":function(e,t,n){},a3c4:function(e,t,n){"use strict";n("96cf");var r=n("1da1"),o={name:{title:"Display Name",text:"Enter your name. This will be used in the transcript."},session:{title:"Session ID or Link",text:"Enter a session ID or invite link."}};function a(){return a=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.prompt(o[n]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}t["a"]=function(e,t){return a.apply(this,arguments)}},a9c4:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Autoscriber is a progressive web app (PWA) that listens to your microphone audio, transcribes your speech, and summarizes your meeting in bullet point format. During the meeting, participants simply open a session link and turn on their microphone. Once the meeting is over, Autoscriber will use AI language models to analyze the conversation and jot down important sentences automatically.")])},o=[],a=n("2877"),i={},s=Object(a["a"])(i,r,o,!1,null,null,null);t["a"]=s.exports}});
//# sourceMappingURL=app.a90fdfe4.js.map