(this.webpackJsonpspecies=this.webpackJsonpspecies||[]).push([[0],{174:function(e,t,c){},202:function(e,t,c){},203:function(e,t,c){},204:function(e,t,c){},337:function(e,t,c){},343:function(e,t,c){},344:function(e,t,c){},345:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(23),r=c.n(s),o=(c(174),c(122),c(49)),i=c(16),l=c(38),j=c(6),u=a.a.createContext({}),p=function(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),i=o[0],p=o[1],h=Object(n.useState)([]),b=Object(l.a)(h,2),O=b[0],f=b[1];return Object(j.jsx)(u.Provider,{value:{locInfo:{loc:a,locSpec:i,locData:O,onLocChange:function(e){console.log("setLoc",e),s(e)},onLocSpecChange:function(e){console.log("setLocSpec",e),p(e)},onLocDataChange:function(e){console.log("setLocData",e),f(e)}}},children:e.children})},h=u,b=a.a.createContext({}),O=function(e){var t=Object(i.g)();return Object(j.jsx)(b.Provider,{value:{match:t},children:e.children})},f=b,d=c(70),x=c(21),g=c.n(x),m=c(34),v=c(79),S=c(183);function y(){return y=Object(m.a)(g.a.mark((function e(t,c){var n,a,s,r,o,i=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>2&&void 0!==i[2]?i[2]:[],a=JSON.stringify(t),s=S.create(a)(999999),console.log(t,s),!(r=JSON.parse(localStorage.getItem(s)))||"object"!==typeof r||0===Object.keys(r).length){e.next=10;break}return console.log("FROM CACHE"),e.abrupt("return",r);case 10:return e.next=12,c.apply(void 0,[t].concat(Object(v.a)(n)));case 12:return o=e.sent,console.log("FROM REQUEST"),o&&localStorage.setItem(s,JSON.stringify(o)),e.abrupt("return",o);case 16:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}var w=function(e,t){return y.apply(this,arguments)},C=c(62),N=c.n(C),I=function(){var e=Object(m.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://us-central1-species-eebec.cloudfunctions.net/app").then((function(e){console.log("getTopLocs");var c=e.data;t=JSON.parse(c)})).catch((function(e){console.log("ERROR!!! : ",e)}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=I;c(202);var E=function(e){return e.selected&&[].push(),Object(j.jsx)("div",{className:"locItem",children:Object(j.jsxs)(o.c,{to:"/explore/".concat(e.loc.lugar,"/1"),children:[Object(j.jsx)("span",{className:"loc",children:e.loc.lugar})," ",Object(j.jsxs)("span",{className:"count",children:[e.loc.count," species"]})]})})};var R=function(e){var t=Object(n.useState)(null),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useContext)(h).locInfo,o=r.loc,i=r.onLocDataChange;Object(n.useEffect)((function(){Object(m.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("getTopLocs",k);case 2:t=e.sent,i(t),console.log("setLocsData: ",t),s(t);case 6:case"end":return e.stop()}}),e)})))()}),[]);var u=[];if(a){var p,b=0,O=Object(d.a)(a);try{for(O.s();!(p=O.n()).done;){var f=p.value;u.push(Object(j.jsx)(E,{loc:f,selected:f===o},f+"-"+b)),b++}}catch(x){O.e(x)}finally{O.f()}}return Object(j.jsx)("div",{className:"locCont",children:u})};c(203);var D=function(e){return Object(j.jsx)("div",{className:"Sidebar",children:Object(j.jsx)(R,{})})},L=c(167),z=(c(204),c(350)),J=c(159),P=c.n(J);var A=function(e){for(var t=e.species,c="",n=0,a=Object.values(t.info.registers);n<a.length;n++){var s=a[n];if(c)break;s.imgUrl&&"https://www.ecoregistros.org/site/images/play.bmp"!==s.imgUrl&&(c=s.imgUrl)}return c||(c="https://www.emsevilla.es/wp-content/uploads/2020/10/no-image-1.png"),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(z.a,{hoverable:!0,className:"Card",cover:Object(j.jsx)("div",{className:"imgSpCont",children:Object(j.jsx)("img",{className:"imgSp",alt:"example",src:c})}),children:Object(j.jsx)(P.a,{title:t.scientific_name,description:t.nombre_comun})})})},T=(c(337),function(){var e=Object(m.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,N.a.get(t).then((function(e){console.log("getSpecies");var t=e.data;c=JSON.parse(t)})).catch((function(e){console.log("ERROR!!! : ",e)}));case 3:return e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F=T,M=function(){var e=Object(m.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("https://us-central1-species-eebec.cloudfunctions.net/app",{species:t}).then((function(e){console.log("getSpeciesData");var n=e.data;c=JSON.parse(n),console.log("datas sent: ",t,"dataJson: ",c)})).catch((function(e){console.log("getSpeciesData ERROR!!! : ",e)}));case 2:return e.abrupt("return",c);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=M,_=c(348),H=c(351),W=c(166);function B(e,t){return console.log("getSubArr: ",t),e.slice(20*(t-1),20*t)}var G=function(e){console.log("render SpeciesCont");var t="https://us-central1-species-eebec.cloudfunctions.net/app",c=Object(n.useContext)(f).match;console.log("SpeciesCont match path: ",c.path);var a=c.params.lugar,s=c.params.page,r=(Object(n.useContext)(h).locInfo.onLocChange,Object(n.useState)(!1)),o=Object(l.a)(r,2),u=o[0],p=o[1],b=Object(n.useState)(1),O=Object(l.a)(b,2),x=O[0],S=O[1],y=Object(n.useState)([]),C=Object(l.a)(y,2),N=C[0],I=C[1],k=Object(n.useState)([]),E=Object(l.a)(k,2),R=E[0],D=E[1],z=Object(n.useState)([]),J=Object(l.a)(z,2),P=J[0],T=J[1],M=Object(n.useState)([]),G=Object(l.a)(M,2),Q=G[0],Y=G[1];console.log("page: ",x),Object(n.useEffect)((function(){s&&(console.log("setPage: ",s),S(s))}),[s]),a?t+="?lugar=".concat(a):(t+="?lugar=Chajar\xed",console.log("ERROR - SpeciesCont: No loc name")),console.log(t),Object(n.useEffect)((function(){Object(m.a)(g.a.mark((function e(){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),p(!0),e.next=4,w(t,F);case 4:(c=e.sent)?(console.log("setSpeciesData: ",c),I(Object(L.a)({},c))):console.log("RESP EMPTY: ",c);case 6:case"end":return e.stop()}}),e)})))()}),[t]),Object(n.useEffect)((function(){if(console.log("setSpeciesData INSIDE setAllSpecies useEffect: ",N),N&&N.count){var e,t=[],c=Object(d.a)(N.species);try{for(c.s();!(e=c.n()).done;){var n=e.value;n&&-1===P.indexOf(n)&&t.push(n)}}catch(l){c.e(l)}finally{c.f()}var a=N.lugaresDetallados;for(var s in a){console.log(s);var r,o=Object(d.a)(a[s].species);try{for(o.s();!(r=o.n()).done;){var i=r.value;i&&-1===P.indexOf(i)&&t.push(i)}}catch(l){o.e(l)}finally{o.f()}}T(t)}}),[N]),Object(n.useEffect)((function(){console.log("setSpeciesArr: ",B(P,x)),Y(Object(v.a)(B(P,x)))}),[P,x]),Object(n.useEffect)((function(){var e=[];Object(m.a)(g.a.mark((function t(){var c,n,a,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("speciesArr",Q),!Q.length){t.next=6;break}return t.next=4,w(Q,U);case 4:if(c=t.sent){n=Object(d.a)(c);try{for(n.s();!(a=n.n()).done;)(s=a.value)&&e.push(Object(j.jsx)(A,{species:s},s.scientific_name))}catch(r){n.e(r)}finally{n.f()}}case 6:console.log("setSpeciesItemList: ",e),D([].concat(e)),p(!1);case 9:case"end":return t.stop()}}),t)})))()}),[Q]);var q=Object(i.f)();console.log(R);var K=Object(j.jsx)(W.a,{style:{fontSize:80},spin:!0});return Object(j.jsxs)(j.Fragment,{children:[u&&Object(j.jsxs)("div",{className:"spinCont",children:[Object(j.jsx)("h2",{children:"LOADING..."}),Object(j.jsx)(_.a,{indicator:K})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},children:Object(v.a)(R)}),Object(j.jsx)("div",{className:"pagCont",children:Object(j.jsx)(H.a,{onChange:function(e){return function(e){console.log("Push Page: ",e);var t=/\/[0-9]+/i,n=c.url;n.match(t)&&(n=n.replace(t,"")),q.push("".concat(n,"/").concat(e))}(e)},showTotal:function(){return"".concat(20*(x-1),"-").concat(20*x," de ").concat(P.length," especies")},defaultCurrent:x,showSizeChanger:!1,total:P.length,defaultPageSize:20,style:{display:"flex",justifyContent:"center",position:"relative"}})})]})]})};var Q=function(e){var t=Object(n.useContext)(f).match;return console.log("match: ",t.path),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i.a,{path:"".concat(t.path,"/:page"),children:Object(j.jsx)(O,{children:Object(j.jsx)(G,{})})}),Object(j.jsx)(i.a,{path:"".concat(t.path),exact:!0,children:Object(j.jsx)(O,{children:Object(j.jsx)(G,{})})})]})};var Y=function(e){var t=Object(n.useContext)(f).match;return console.log("match: ",t.path),Object(j.jsx)("div",{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"".concat(t.path,"/:lugar"),children:Object(j.jsx)(O,{children:Object(j.jsx)(Q,{})})}),Object(j.jsx)(i.a,{path:t.path,children:Object(j.jsx)("h2",{style:{position:"relative",textAlign:"center",color:"white",paddingTop:20},children:"Please select a location from the left menu"})})]})})},q=c(349),K=c(352);c(343),K.a.SubMenu,K.a.ItemGroup;var V=function(e){return Object(j.jsxs)("div",{style:{display:"flex",position:"relative",height:"inherit"},children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:"https://raw.githubusercontent.com/jeronimoek/jeronimoek.github.io/master/species/img/logo.png"})}),Object(j.jsxs)(K.a,{mode:"horizontal",className:"topMenu",children:[Object(j.jsx)(K.a.Item,{className:"menuItem",children:Object(j.jsx)(o.c,{to:"/",children:"Home"})},"home"),Object(j.jsx)(K.a.Item,{className:"menuItem",children:Object(j.jsx)(o.c,{to:"/explore",children:"Explore"})},"explore"),Object(j.jsx)(K.a.Item,{className:"menuItem",children:Object(j.jsx)(o.c,{to:"/contact",children:"Contact Us"})},"contact")]})]})},X=c(353),Z=(c(344),function(){return Object(j.jsx)("div",{className:"SourceCode",children:Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/jeronimoek/species",children:Object(j.jsx)(X.a,{style:{fontSize:70}})})})}),$=q.a.Header,ee=q.a.Footer,te=q.a.Sider,ce=q.a.Content;var ne=function(){return Object(j.jsx)(o.a,{children:Object(j.jsx)(o.b,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(p,{children:[Object(j.jsxs)(q.a,{children:[Object(j.jsx)($,{style:{position:"sticky",top:"0px",width:"100%",zIndex:2,borderBottom:"solid 1px white"},children:Object(j.jsx)(V,{})}),Object(j.jsxs)(q.a,{children:[Object(j.jsx)(te,{breakpoint:"md",collapsedWidth:"0",zeroWidthTriggerStyle:{top:0,justifySelf:"end"},width:250,style:{zIndex:1},children:Object(j.jsx)(D,{})}),Object(j.jsx)(ce,{children:Object(j.jsx)("div",{className:"mainDiv",children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",exact:!0,children:Object(j.jsx)(O,{})}),Object(j.jsx)(i.a,{path:"/explore",children:Object(j.jsx)(O,{children:Object(j.jsx)(Y,{})})})]})})})]}),Object(j.jsx)(ee,{style:{zIndex:1}})]}),Object(j.jsx)(Z,{})]})})})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(ne,{})}),document.getElementById("root"))}},[[345,1,2]]]);
//# sourceMappingURL=main.76a563f2.chunk.js.map