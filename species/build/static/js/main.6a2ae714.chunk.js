(this.webpackJsonpspecies=this.webpackJsonpspecies||[]).push([[0],{176:function(e,t,c){},185:function(e,t,c){},318:function(e,t,c){},343:function(e,t,c){},344:function(e,t,c){},345:function(e,t,c){},346:function(e,t,c){},347:function(e,t,c){},348:function(e,t,c){},349:function(e,t,c){},350:function(e,t,c){},351:function(e,t,c){},352:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(27),r=c.n(s),o=c(21),i=(c(176),c(84),c(50)),l=c(15),u=c(4),j=a.a.createContext({}),d=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),l=i[0],d=i[1],h=Object(n.useState)([]),b=Object(o.a)(h,2),p=b[0],O=b[1];return Object(u.jsx)(j.Provider,{value:{locInfo:{loc:a,locSpec:l,locData:p,onLocChange:function(e){console.log("setLoc",e),s(e)},onLocSpecChange:function(e){console.log("setLocSpec",e),d(e)},onLocDataChange:function(e){console.log("setLocData",e),O(e)}}},children:e.children})},h=j,b=a.a.createContext({}),p=function(e){var t=Object(l.g)();return Object(u.jsx)(b.Provider,{value:{match:t},children:e.children})},O=b,f=c(356),x=c(62),g=c(57),m=c(20),v=c.n(m),S=c(170),w=c(26),N=(c(185),c(357)),y=c(162),C=c.n(y);var I=function(e){for(var t=e.species,c="",n=0,a=Object.values(t.info.registers);n<a.length;n++){var s=a[n];if(c)break;s.imgUrl&&"https://www.ecoregistros.org/site/images/play.bmp"!==s.imgUrl&&(c=s.imgUrl)}return c||(c="https://www.emsevilla.es/wp-content/uploads/2020/10/no-image-1.png"),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(N.a,{hoverable:!0,className:"Card",cover:Object(u.jsx)("div",{className:"imgSpCont",children:Object(u.jsx)("img",{className:"imgSp",alt:"example",src:c})}),children:Object(u.jsx)(C.a,{title:t.scientific_name,description:t.nombre_comun})})})},E=(c(318),c(55)),k=c.n(E),R=function(){var e=Object(w.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,k.a.get(t).then((function(e){console.log("getSpecies");var t=e.data;c=JSON.parse(t)})).catch((function(e){console.log("ERROR!!! : ",e)}));case 3:return e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=R,T=c(336);function H(){return H=Object(w.a)(v.a.mark((function e(t,c){var n,a,s,r,o,i=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>2&&void 0!==i[2]?i[2]:[],a=JSON.stringify(t),s=T.create(a)(999999),console.log(t,s),!(r=JSON.parse(localStorage.getItem(s)))||"object"!==typeof r||0===Object.keys(r).length){e.next=10;break}return console.log("FROM CACHE"),e.abrupt("return",r);case 10:return e.next=12,c.apply(void 0,[t].concat(Object(x.a)(n)));case 12:return o=e.sent,console.log("FROM REQUEST"),o&&localStorage.setItem(s,JSON.stringify(o)),e.abrupt("return",o);case 16:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}var A=function(e,t){return H.apply(this,arguments)},D=function(){var e=Object(w.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("https://us-central1-species-eebec.cloudfunctions.net/app",{species:t}).then((function(e){console.log("getSpeciesData");var n=e.data;c=JSON.parse(n),console.log("datas sent: ",t,"dataJson: ",c)})).catch((function(e){console.log("getSpeciesData ERROR!!! : ",e)}));case 2:return e.abrupt("return",c);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=D,P=c(355),z=c(358),F=c(81);function J(e,t){return console.log("getSubArr: ",t),e.slice(20*(t-1),20*t)}var _=function(e){console.log("render SpeciesCont");var t="https://us-central1-species-eebec.cloudfunctions.net/app",c=Object(n.useContext)(O).match;console.log("SpeciesCont match path: ",c.path);var a=c.params.lugar,s=c.params.page,r=(Object(n.useContext)(h).locInfo.onLocChange,Object(n.useState)(!1)),i=Object(o.a)(r,2),j=i[0],d=i[1],b=Object(n.useState)(1),p=Object(o.a)(b,2),f=p[0],m=p[1],N=Object(n.useState)([]),y=Object(o.a)(N,2),C=y[0],E=y[1],k=Object(n.useState)([]),R=Object(o.a)(k,2),T=R[0],H=R[1],D=Object(n.useState)([]),_=Object(o.a)(D,2),W=_[0],B=_[1],U=Object(n.useState)([]),q=Object(o.a)(U,2),G=q[0],X=q[1];console.log("page: ",f),Object(n.useEffect)((function(){s&&(console.log("setPage: ",s),m(s))}),[s]),a?t+="?lugar=".concat(a):(t+="?lugar=Chajar\xed",console.log("ERROR - SpeciesCont: No loc name")),console.log(t),Object(n.useEffect)((function(){Object(w.a)(v.a.mark((function e(){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),d(!0),e.next=4,A(t,L);case 4:(c=e.sent)?(console.log("setSpeciesData: ",c),E(Object(S.a)({},c))):console.log("RESP EMPTY: ",c);case 6:case"end":return e.stop()}}),e)})))()}),[t]),Object(n.useEffect)((function(){if(console.log("setSpeciesData INSIDE setAllSpecies useEffect: ",C),C&&C.count){var e,t=[],c=Object(g.a)(C.species);try{for(c.s();!(e=c.n()).done;){var n=e.value;n&&-1===W.indexOf(n)&&t.push(n)}}catch(l){c.e(l)}finally{c.f()}var a=C.lugaresDetallados;for(var s in a){console.log(s);var r,o=Object(g.a)(a[s].species);try{for(o.s();!(r=o.n()).done;){var i=r.value;i&&-1===W.indexOf(i)&&t.push(i)}}catch(l){o.e(l)}finally{o.f()}}B(t)}}),[C]),Object(n.useEffect)((function(){console.log("setSpeciesArr: ",J(W,f)),X(Object(x.a)(J(W,f)))}),[W,f]),Object(n.useEffect)((function(){var e=[];Object(w.a)(v.a.mark((function t(){var c,n,a,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("speciesArr",G),!G.length){t.next=6;break}return t.next=4,A(G,M);case 4:if(c=t.sent){n=Object(g.a)(c);try{for(n.s();!(a=n.n()).done;)(s=a.value)&&e.push(Object(u.jsx)(I,{species:s},s.scientific_name))}catch(r){n.e(r)}finally{n.f()}}case 6:console.log("setSpeciesItemList: ",e),H([].concat(e)),d(!1);case 9:case"end":return t.stop()}}),t)})))()}),[G]);var Q=Object(l.f)();console.log(T);var Y=Object(u.jsx)(F.a,{style:{fontSize:80},spin:!0});return Object(u.jsxs)(u.Fragment,{children:[j&&Object(u.jsx)("div",{className:"spinDiv",children:Object(u.jsxs)("div",{className:"spinCont",children:[Object(u.jsx)("h2",{children:"LOADING..."}),Object(u.jsx)(P.a,{indicator:Y})]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},children:Object(x.a)(T)}),Object(u.jsx)("div",{className:"pagCont",children:Object(u.jsx)(z.a,{onChange:function(e){return function(e){console.log("Push Page: ",e);var t=/\/[0-9]+/i,n=c.url;n.match(t)&&(n=n.replace(t,"")),Q.push("".concat(n,"/").concat(e))}(e)},showTotal:function(){return"".concat(20*(f-1),"-").concat(20*f," de ").concat(W.length," especies")},defaultCurrent:f,showSizeChanger:!1,total:W.length,defaultPageSize:20,style:{display:"flex",justifyContent:"center",position:"relative"}})})]})]})};var W=function(e){var t=Object(n.useContext)(O).match;return console.log("match: ",t.path),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{path:"".concat(t.path,"/:page"),children:Object(u.jsx)(p,{children:Object(u.jsx)(_,{})})}),Object(u.jsx)(l.a,{path:"".concat(t.path),exact:!0,children:Object(u.jsx)(p,{children:Object(u.jsx)(_,{})})})]})},B=function(){var e=Object(w.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://us-central1-species-eebec.cloudfunctions.net/app").then((function(e){console.log("getTopLocs");var c=e.data;t=JSON.parse(c)})).catch((function(e){console.log("ERROR!!! : ",e)}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=B;c(343);var q=function(e){return e.selected&&[].push(),Object(u.jsx)("div",{className:"locItem",children:Object(u.jsxs)(i.c,{to:"/explore/".concat(e.loc.lugar,"/1"),children:[Object(u.jsx)("span",{className:"loc",children:e.loc.lugar})," ",Object(u.jsxs)("span",{className:"count",children:[e.loc.count," species"]})]})})};var G=function(e){var t=Object(n.useState)(null),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useContext)(h).locInfo,i=r.loc,l=r.onLocDataChange;Object(n.useEffect)((function(){Object(w.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("getTopLocs",U);case 2:t=e.sent,l(t),console.log("setLocsData: ",t),s(t);case 6:case"end":return e.stop()}}),e)})))()}),[]);var j=[];if(a){var d,b=0,p=Object(g.a)(a);try{for(p.s();!(d=p.n()).done;){var O=d.value;j.push(Object(u.jsx)(q,{loc:O,selected:O===i},O+"-"+b)),b++}}catch(f){p.e(f)}finally{p.f()}}return Object(u.jsx)("div",{className:"locCont",children:j})};c(344);var X=function(e){return Object(u.jsx)("div",{className:"Sidebar",children:Object(u.jsx)(G,{})})},Q=(c(345),f.a.Sider),Y=f.a.Content;var K=function(e){Object(n.useEffect)((function(){e.setHeaderRoute(pe.EXPLORE)}),[]);var t=Object(n.useContext)(O).match;return console.log("match: ",t.path),Object(u.jsx)("div",{children:Object(u.jsxs)(f.a,{children:[Object(u.jsx)(Q,{breakpoint:"md",collapsedWidth:"0",zeroWidthTriggerStyle:{top:0,justifySelf:"end"},width:250,style:{zIndex:1},children:Object(u.jsx)(X,{})}),Object(u.jsx)(Y,{children:Object(u.jsx)("div",{className:"mainDiv",children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"".concat(t.path,"/:lugar"),children:Object(u.jsx)(p,{children:Object(u.jsx)(W,{})})}),Object(u.jsx)(l.a,{path:t.path,children:Object(u.jsx)("h2",{style:{position:"relative",textAlign:"center",color:"white",paddingTop:20},children:"Please select a location from the left menu"})})]})})})]})})},V=c(359);c(346);var Z=function(e){var t=e.headerRoute;return console.log(t),Object(u.jsxs)("div",{className:"navCont",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("img",{src:"https://raw.githubusercontent.com/jeronimoek/jeronimoek.github.io/master/species/img/logo.png"})}),Object(u.jsxs)(V.a,{mode:"horizontal",className:"topMenu",disabledOverflow:!0,children:[Object(u.jsx)(V.a.Item,{className:"menuItem ".concat(t===pe.HOME?"route-selected":""),children:Object(u.jsx)(i.c,{to:"/",children:"Home"})},"home"),Object(u.jsx)(V.a.Item,{className:"menuItem ".concat(t===pe.EXPLORE?"route-selected":""),children:Object(u.jsx)(i.c,{to:"/explore",children:"Explore"})},"explore"),Object(u.jsx)(V.a.Item,{className:"menuItem ".concat(t===pe.CONTACT?"route-selected":""),children:Object(u.jsx)(i.c,{to:"/contact",children:"Contact Us"})},"contact")]})]})},$=c(361),ee=(c(347),function(){return Object(u.jsx)("div",{className:"SourceCode",children:Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/jeronimoek/species",children:Object(u.jsx)($.a,{style:{fontSize:70}})})})});var te=function(e){return e.setHeaderRoute(pe.CONTACT),Object(u.jsx)("div",{children:"Contact us"})},ce=c(360);c(348);var ne=function(e){var t=e.background,c=Object(n.useState)(),a=Object(o.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){t&&t.indexOf("/")>-1?r(Object(u.jsx)("style",{dangerouslySetInnerHTML:{__html:["#".concat(e.childId,"::before {"),'  background-image: url("'.concat(t,'");'),"}"].join("\n")}})):t&&r(Object(u.jsx)("style",{dangerouslySetInnerHTML:{__html:["#".concat(e.childId,"::before {"),"  background-color: ".concat(t,";"),"}"].join("\n")}}))}),[t]),e.dark,Object(u.jsxs)(u.Fragment,{children:[s,Object(u.jsx)("div",{id:e.childId,className:"container ".concat(e.className?e.className:""),style:e.style,children:e.children})]})},ae=(c(349),c(350),c(166)),se=c.n(ae);var re=function(e){var t=e.pathProps,c=t.path,a=t.width,s=t.height,r=Object(n.useState)(c),i=Object(o.a)(r,2),l=i[0],j=i[1],d=e.src,h=e.className,b=Object(n.useState)({width:window.innerWidth,height:window.innerHeight}),p=Object(o.a)(b,2),O=p[0],f=p[1],x=function(){f({width:window.innerWidth,height:window.innerHeight})};Object(n.useEffect)((function(){window.addEventListener("resize",x,!1)}),[]);var g={path:c,width:a,height:s},m=new se.a(g),v=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=m.generatePath(v.current.offsetWidth,v.current.offsetHeight);console.log(v.current.offsetWidth,v.current.offsetHeight),j(e)}),[O.width]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"insectMovingContainer",ref:v,children:Object(u.jsx)("img",{src:d,alt:"insect",className:h,style:{offsetPath:"path('".concat(l,"')")}})})})},oe="abcdefghijklmnopqrstuvwxyz";function ie(e){for(var t=[],c=oe.length,n=0;n<e;n++)t.push(oe.charAt(Math.floor(Math.random()*c)));return t[0]=t[0].toUpperCase(),t.join("")}var le=function(){var e=Object(w.a)(v.a.mark((function e(){var t,c,n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c=[],5,3,n=0;n<5;n++)a=ie(3),c.push(a);return e.next=6,k.a.post("https://us-central1-species-eebec.cloudfunctions.net/app/random",{strings:c}).then((function(e){var c=e.data;t=JSON.parse(c)})).catch((function(e){}));case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=le;c(351);var je=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)([]),i=Object(o.a)(r,2),l=i[0],j=i[1],d=Object(n.useState)([]),h=Object(o.a)(d,2),b=h[0],p=h[1],O=Object(n.useState)("INITIAL"),f=Object(o.a)(O,2),m=f[0],S=f[1];Object(n.useEffect)(Object(w.a)(v.a.mark((function e(){var t,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("INITIAL"!==m){e.next=10;break}return S(!1),s(!0),e.next=5,A("fiveSpRand",ue);case 5:t=e.sent,console.log("result: ",t),j(t),e.next=18;break;case 10:if(!m){e.next=18;break}return S(!1),s(!0),e.next=15,ue();case 15:c=e.sent,console.log("result: ",c),j(c);case 18:case"end":return e.stop()}}),e)}))),[m]),Object(n.useEffect)((function(){var e=[];Object(w.a)(v.a.mark((function t(){var c,n,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("fiveSpRand",l),l.length){c=Object(g.a)(l);try{for(c.s();!(n=c.n()).done;)(a=n.value)&&e.push(Object(u.jsx)(I,{species:a},a.scientific_name))}catch(r){c.e(r)}finally{c.f()}}console.log("setSpeciesItemList: ",e),p([].concat(e)),s(!1);case 5:case"end":return t.stop()}}),t)})))()}),[l]);var N=Object(u.jsx)(F.a,{style:{fontSize:80},spin:!0});return Object(u.jsxs)(u.Fragment,{children:[a&&Object(u.jsx)("div",{className:"spinDiv",children:Object(u.jsxs)("div",{className:"spinCont",children:[Object(u.jsx)("h2",{children:"LOADING..."}),Object(u.jsx)(P.a,{indicator:N})]})}),Object(u.jsx)("div",{className:"resumeSect sect",children:Object(u.jsxs)("div",{className:"resumeSectTextCont",children:[Object(u.jsx)("h1",{className:"title",children:"M\xe1s de 2000 especies"}),Object(u.jsx)("div",{className:"resumeItemsCont",children:Object(u.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},children:Object(x.a)(b)})}),Object(u.jsx)("div",{className:"resumeBtnCont",children:Object(u.jsx)(ce.a,{type:"primary",onClick:function(){return S(!0)},className:"resumeBtn primaryBtn",children:"RECARGAR"})})]})})]})};var de=function(e){var t=Object(l.f)(),c=Object(n.useContext)(O).match,a=e.setHeaderRoute;Object(n.useEffect)((function(){a(pe.HOME)}),[]);var s={path:"M 0 20.507 C 42.823 2.413 88.058 10.455 135.706 44.632 C 170.976 69.931 231.692 71.941 317.853 50.663 C 343.8 44.255 378.38 46.869 421.592 58.504 Q 460.03 68.854 501.206 58.504",width:501.206,height:54.132};return Object(u.jsxs)("div",{children:[Object(u.jsx)(ne,{childId:"heroCont",background:"https://www.sanfernando.gob.ar/images/contenido/201809/5bad272db8d3b_Flora-y-Fauna-ciervo-de-los-pantanos-II.jpg",children:Object(u.jsxs)("div",{className:"hero",children:[Object(u.jsx)("h1",{className:"title grow",children:"Descubr\xed Entre R\xedos"}),Object(u.jsx)("h2",{className:"subtitle grow",children:"Investig\xe1 su Fauna y Flora"})]})}),Object(u.jsxs)(ne,{childId:"exploreSectCont",className:"sectCont",background:"azure",children:[Object(u.jsxs)("div",{className:"exploreSect sect",children:[Object(u.jsxs)("div",{className:"exploreSectTextCont",children:[Object(u.jsx)("h1",{className:"subtitle",children:"Explor\xe1 las especies registradas"}),Object(u.jsxs)("p",{className:"exploreSectText",children:["Si necesitas ayuda a la hora de reconocer la especie de un insecto que tienes cerca, utilizando nuestra herramienta de exploraci\xf3n puedes ver que especies han sido registradas en tus alrededores.",Object(u.jsx)("br",{}),"Gracias a una base de datos creada por cient\xedficos y colaboradores de toda la provincia, nuestra web puede ayudarte a reconocer en segundos el insecto que buscas."]}),Object(u.jsx)("div",{className:"exploreBtnCont",children:Object(u.jsx)(ce.a,{type:"primary",onClick:function(){return function(e){var n=c.url;t.push("".concat(n).concat(e))}("explore")},className:"exploreBtn primaryBtn",children:"Explorar"})})]}),Object(u.jsx)("div",{className:"exploreSecImgCont",children:Object(u.jsx)("img",{className:"exploreSecImg",src:"http://www.consciouslifestylemag.com/wp-content/uploads/2016/12/do-insects-have-emotions-and-feelings-bugs-collection.jpg",alt:"Colecci\xf3n de insectos"})})]}),Object(u.jsx)(re,{pathProps:s,src:"https://svgsilh.com/svg/2029679.svg",className:"insectMoving"})]}),Object(u.jsx)(ne,{childId:"resumeSectCont",className:"sectCont",background:"#a8fab3",children:Object(u.jsx)(je,{})})]})},he=f.a.Header,be=f.a.Footer,pe={EXPLORE:"explore",CONTACT:"contact",HOME:"home"};var Oe=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1];return console.log(c),Object(u.jsx)(i.a,{children:Object(u.jsx)(i.b,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(d,{children:[Object(u.jsxs)(f.a,{children:[Object(u.jsx)(he,{className:"header",children:Object(u.jsx)(Z,{headerRoute:c})}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",exact:!0,children:Object(u.jsx)(p,{children:Object(u.jsx)(de,{setHeaderRoute:a})})}),Object(u.jsx)(l.a,{path:"/explore",children:Object(u.jsx)(p,{children:Object(u.jsx)(K,{setHeaderRoute:a})})}),Object(u.jsx)(l.a,{path:"/contact",children:Object(u.jsx)(p,{children:Object(u.jsx)(te,{setHeaderRoute:a})})})]}),Object(u.jsx)(be,{style:{zIndex:1}})]}),Object(u.jsx)(ee,{})]})})})})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(Oe,{})}),document.getElementById("root"))}},[[352,1,2]]]);
//# sourceMappingURL=main.6a2ae714.chunk.js.map