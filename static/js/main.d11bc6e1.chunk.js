(this["webpackJsonpfood-frontend"]=this["webpackJsonpfood-frontend"]||[]).push([[0],{27:function(e,t,a){},35:function(e,t,a){e.exports=a(48)},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(27),a(12)),i=a(13),u=a(15),s=a(14),b=a(5),d=a(7),m=Object(d.b)(),E=a(16),O=a(11),f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-tabs bg-blue"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.b,{to:"/",exact:!0,className:"nav-link",activeStyle:{color:"red"}},"Dashboard"))))}}]),a}(n.Component),p=Object(O.b)((function(e){return{}}))(Object(b.f)(f)),h=a(51),j=a(52),v=a(53),g=a(56),y=a(54),N=a(30),S=a(55),k=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getLocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(n.getCoordinates,n.handleLocation):alert("hi")},n.handleLocation=function(e){switch(e.code){case e.PERMISSION_DENIED:alert("User denied the request for Geolocation.");break;case e.POSITION_UNAVAILABLE:alert("Location information is unavailable.");break;case e.TIMEOUT:alert("The request to get user location timed out.");break;case e.UNKNOWN_ERROR:alert("An unknown error occurred.")}},n.getCoordinates=function(e){console.log(e)},n.componentDidMount=function(){},n.state={latitute:null,longtitute:null},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(j.a,{sm:"12",md:{size:4,offset:4},style:{paddingTop:50}},r.a.createElement(v.a,null,r.a.createElement(g.a,{type:"text",id:"banquet",placeholder:"Search Banquet"}),r.a.createElement(y.a,{addonType:"append"},r.a.createElement(N.a,null,r.a.createElement(S.a,{size:"15"}))))))}}]),a}(r.a.Component),C=Object(O.b)((function(e){return{}}))(k),_=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return console.log("Routes",this.props),r.a.createElement("div",null,r.a.createElement(b.b,{history:m},r.a.createElement(p,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:C})),r.a.createElement("footer",{className:"footer bg-dark py-2"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-white"},"\xa9 Copyright 2020 Food Ordering System")))))}}]),a}(n.Component),w=Object(O.b)((function(e){return{}}))(_);var I=function(){return r.a.createElement(w,null)},T=(a(45),a(10)),D=a(31),R=a.n(D),A=a(32),L=a(21),U=a(18),x={isSuccess:!1,trackerData:[]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{isSuccess:!0});case"FAIL":return Object(U.a)(Object(U.a)({},e),{},{isSuccess:!1});case"TRACKER_DATA":return Object.assign({},e,{trackerData:t.payload});default:return e}},M=a(33),P={key:"jwt",storage:a.n(M).a,whitelist:["auth"]},B=Object(T.c)({globalReducer:q}),z=Object(L.a)(P,B),F=[A.a,R()()],J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,K=Object(T.e)(z,{},J(T.a.apply(void 0,F))),V=Object(L.b)(K),X=a(34);o.a.render(r.a.createElement(O.a,{store:K},r.a.createElement(X.a,{persistor:V},r.a.createElement(E.a,null,r.a.createElement(I,null)))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d11bc6e1.chunk.js.map