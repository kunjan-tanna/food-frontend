(this["webpackJsonpfood-frontend"]=this["webpackJsonpfood-frontend"]||[]).push([[0],{36:function(e,t,a){},58:function(e,t,a){e.exports=a(97)},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),o=(a(36),a(12)),u=a(13),i=a(16),s=a(15),m=a(7),d=a(9),E=Object(d.b)(),p=a(23),h=a(14),f=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-tabs bg-blue"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",exact:!0,className:"nav-link",activeStyle:{color:"red"}},"Dashboard"))))}}]),a}(n.Component),b=Object(h.b)((function(e){return{}}))(Object(m.f)(f)),v=a(98),y=a(99),g=a(100),O=a(101),N=a(102),I=a(103),j=a(104),C=a(53),S=a(106),k=a(107),_=a(108),w=a(109),x=a(110),P=a(18),T=a.n(P),D=a(22),L=a(52),R=a.n(L);a(46).config();var q=R.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/food-frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://arcane-eyrie-87352.herokuapp.com/api/"});a(46).config();var A={baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/food-frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_PATH||"https://arcane-eyrie-87352.herokuapp.com/upload/"},M=a(105),U=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getLocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(n.getCoordinates,n.handleLocation):alert("hi")},n.handleLocation=function(e){switch(e.code){case e.PERMISSION_DENIED:alert("User denied the request for Geolocation.");break;case e.POSITION_UNAVAILABLE:alert("Location information is unavailable.");break;case e.TIMEOUT:alert("The request to get user location timed out.");break;case e.UNKNOWN_ERROR:alert("An unknown error occurred.")}},n.getCoordinates=function(e){var t,a,r=e.coords.latitude,l=e.coords.longitude;n.props.dispatch((t=l,a=r,function(){var e=Object(D.a)(T.a.mark((function e(n){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.get("/location?lng=".concat(t,"&lat=").concat(a));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){var t=e.data;n.setState({data:t})}))},n.updateSearchQuery=function(e){n.setState({searchVal:e})},n.componentDidMount=function(){n.props.dispatch(function(){var e=Object(D.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.get("/banquet");case 2:return(a=e.sent)&&t({type:"BANQUET",payload:a.data}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){var t=e.data;n.setState({rowData:t})})),n.getLocation()},n.state={data:[],latitude:"",searchVal:"",longtitude:"",rowData:[]},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=(this.state.data&&this.state.data.map((function(e){return e.banquetId}))).filter((function(t){return-1!==t.banName.toLowerCase().indexOf(e.state.searchVal.toLowerCase())}));return r.a.createElement(v.a,null,r.a.createElement(y.a,{sm:"12"},r.a.createElement(g.a,{className:"pt-1"},r.a.createElement(O.a,null,r.a.createElement(y.a,{sm:"12"},r.a.createElement(y.a,{sm:"12",md:{size:4,offset:4},style:{paddingTop:20}},r.a.createElement(N.a,null,r.a.createElement(I.a,{type:"text",id:"banquet",placeholder:"Search Banquet",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value}),r.a.createElement(j.a,{addonType:"append"},r.a.createElement(C.a,null,r.a.createElement(M.a,{size:"15"}))))),r.a.createElement(v.a,{className:"pt-4"},t&&t.length>0?t.map((function(e,t){return r.a.createElement(y.a,{lg:"4",sm:"12",key:t},r.a.createElement(g.a,{body:!0,outline:!0,style:{borderColor:"#333",cursor:"pointer"},className:"mt-4",onClick:function(){return E.push("/menu?banquetId=".concat(e._id))}},r.a.createElement(S.a,{className:"justify-content-between"},r.a.createElement("div",{className:"card-heading"},r.a.createElement(k.a,null,r.a.createElement("h6",null,r.a.createElement("strong",null,e.banName))),r.a.createElement(_.a,null,r.a.createElement(w.a,{href:e.locationLink},r.a.createElement(M.a,{size:"15"})," ","\xa0 Find Location")))),r.a.createElement(O.a,null,r.a.createElement(x.a,{variant:"bottom",src:A.baseURL+"/"+e.avtar}),r.a.createElement("hr",null),r.a.createElement("div",{className:"justify-content-between"},r.a.createElement("i",null,"Capacity:\xa0\xa0"),r.a.createElement("span",{className:"text-success"},e.capacity),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("i",null,"Location:\xa0\xa0"),r.a.createElement("span",{className:"text-secondary"},e.location),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("i",null,"Mobile:\xa0\xa0"),r.a.createElement("span",{className:"text-info"},e.mobile)))))})):"No such venue found near you!"))))))}}]),a}(r.a.Component),z=Object(h.b)((function(e){return{}}))(U),Q=a(25),V=a(116),B=a(117),K=a(111),W=a(112),H=a(120),F=a(118),G=a(119),J=a(115),X=a(113),Y=a(114),Z=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInc=function(e,t){var a,r,l={productId:e._id,quantity:e.quantity,price:e.price};n.props.dispatch((a=e._id,r=l,function(){var e=Object(D.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.put("/edit/inc/product/".concat(a),r);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){var t=e.data;n.state.cart.map((function(e,a){if(e._id===t._id){n.state.cart.splice(a,1,t);var r=n.state.cart,l=r.reduce((function(e,t){return+e+ +t.price}),0);n.setState({total:l}),n.setState({cart:r})}}))}))},n.handleDec=function(e){n.setState((function(t){return{price:e.price,prevPrice:t.price}}),(function(){var t,a,r={productId:e._id,quantity:e.quantity,price:n.state.price};n.props.dispatch((t=e._id,a=r,function(){var e=Object(D.a)(T.a.mark((function e(n){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.put("/edit/dec/product/".concat(t),a);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){var t=e.data;t.price=n.state.prevPrice,n.state.cart.map((function(e,a){if(e._id===t._id){n.state.cart.splice(a,1,t);var r=n.state.cart,l=r.reduce((function(e,t){return+e+ +t.price}),0);n.setState({total:l}),n.setState({cart:r})}}))}))}))},n.state={cart:n.props.addItem1,prevPrice:0,price:0,total:0,updateData:[]},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.cart.reduce((function(e,t){return+e+ +t.price}),0);return r.a.createElement(g.a,null,r.a.createElement(S.a,null,r.a.createElement(k.a,{tag:"h5"},"Orders")),r.a.createElement(O.a,null,r.a.createElement(K.a,{bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Add"))),this.state.cart.length>0?this.state.cart&&this.state.cart.map((function(t,a){return r.a.createElement("tbody",{key:a},r.a.createElement("tr",null,r.a.createElement("td",null,t.productName),r.a.createElement("td",null," ",t.price," \xa0 INR"),r.a.createElement("td",null," ",t.quantity),r.a.createElement("td",null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(W.a,{className:"mr-1",color:"primary",type:"submit",onClick:function(){return e.handleDec(t)}},r.a.createElement(X.a,{size:15})),r.a.createElement(W.a,{className:"mr-1",color:"primary",type:"submit",onClick:function(){return e.handleInc(t,a)}},r.a.createElement(Y.a,{size:15}))))))})):"No Products Found")),r.a.createElement("div",{className:"invoice-total-table"},r.a.createElement(v.a,null,r.a.createElement(y.a,{sm:{size:6,offset:6}},r.a.createElement(K.a,{responsive:!0,borderless:!0},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"TOTAL"),r.a.createElement("td",null,this.state.total?this.state.total:t))))))))}}]),a}(r.a.Component),$=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleItem=function(e){n.setState({extraPrice:e.price},(function(){var e=+n.state.addItem.price+ +n.state.extraPrice;n.setState({total:e})}));var t=e.itemName;n.setState({name:t})},n.handleClick=function(){var e=n.state.total?n.state.total:n.state.addItem.price,t=n.state.addItem.productName+" Extra Item: "+n.state.name,a=n.state.addItem.quantity,r=n.state.addItem._id;n.props.handleChild(e,t,a,r)},n.state={formData:{},extraPrice:0,total:0,name:"",addItem:n.props.addItem},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.addItem,a=this.props.addExtraItem;return r.a.createElement(v.a,null,r.a.createElement(y.a,{sm:"12"},r.a.createElement(g.a,null,r.a.createElement(S.a,null,"Combo Items"),r.a.createElement(O.a,{className:"pt-2"},r.a.createElement(y.a,{sm:"12"},r.a.createElement(K.a,{size:"md",responsive:!0,bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Quantity"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,t.productName),r.a.createElement("td",null,t.price,"\xa0 INR"),r.a.createElement("td",null,t.quantity))),r.a.createElement("thead",{className:"pt-4"},r.a.createElement("tr",null,r.a.createElement("th",null,"Item Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Pick One"))),a&&a.map((function(t,a){return r.a.createElement("tbody",{key:a},r.a.createElement("tr",null,r.a.createElement("td",null,t.itemName),r.a.createElement("td",null,t.price,"\xa0 INR"),r.a.createElement("td",null,r.a.createElement(I.a,{className:"ml-3",type:"radio",name:"radio",onChange:function(){return e.handleItem(t)}}))))}))))),r.a.createElement("div",{className:"invoice-total-table"},r.a.createElement(v.a,null,r.a.createElement(y.a,{sm:"12"},r.a.createElement(K.a,{responsive:!0,borderless:!0},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"text-right"},"Total")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(W.a,{className:"mr-1",color:"primary",type:"submit",onClick:function(){return e.handleClick()}},"Add To Cart"),this.state.total?this.state.total:this.state.addItem.price)))))))))))}}]),a}(r.a.Component),ee=Object(h.b)((function(e){return{}}))($),te=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=n.props.location.search.split("=")[1];n.props.dispatch(function(){var e=Object(D.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.get("/bundle");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(t){var a=t.data.filter((function(t){if(t.banquetId===e)return t;console.log("sorry")}));n.setState({rowData:a})}))},n.toggleModal=function(e){n.state.rowData&&n.state.rowData.map((function(e){return n.setState({item:e.ItemDetails})})),n.setState({comboItem:e}),n.setState((function(e){return{showLeadModal:!e.showLeadModal}}))},n.toggle=function(){n.setState((function(e){return{collapse:!e.collapse}}))},n.onEntered=function(){n.setState({status:"Opened"})},n.onEntering=function(){n.setState({status:"Opening..."})},n.onExited=function(){n.setState({status:"Closed"})},n.onExiting=function(){n.setState({status:"Closing..."})},n.addToCart=function(e){var t=n.state.arr;t.push(Object(Q.a)(Object(Q.a)({},e),{},{count:1})),n.setState({arr:t})},n.handleChild=function(e,t,a,r){var l={price:e,productName:t,quantity:a,_id:r},c=n.state.arr;c.push(Object(Q.a)(Object(Q.a)({},l),{},{count:1})),n.setState({arr:c}),n.toggleModal()},n.state={collapse:!1,status:"Opened",rowData:[],subTotal:0,comboItem:[],total:0,arr:[],data:[],item:[],showLeadModal:!1},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,null,r.a.createElement(y.a,{md:"6",sm:"12"},this.state.rowData&&this.state.rowData.map((function(t,a){return r.a.createElement(g.a,{style:{cursor:"pointer"},key:a},r.a.createElement(S.a,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(k.a,{tag:"h2"},t.banName),r.a.createElement(J.a,{className:"collapse-icon",size:20,onClick:e.toggle})),r.a.createElement(V.a,{className:"d-sm-flex d-block"},r.a.createElement(V.a,{className:"mt-md-1 mt-0"},r.a.createElement(V.a,{className:"rounded mr-2",object:!0,src:A.baseURL+""+t.image,alt:"Generic placeholder image",height:"112",width:"112"})),r.a.createElement(V.a,{body:!0,className:"pt-3"},r.a.createElement("p",null,r.a.createElement("i",null,t.description))))),r.a.createElement(B.a,{isOpen:e.state.collapse,onExited:e.onExited,onEntered:e.onEntered,onExiting:e.onExiting,onEntering:e.onEntering},r.a.createElement(g.a,null,r.a.createElement(S.a,null,r.a.createElement(k.a,{tag:"h5"},"Paneer Items")),r.a.createElement(O.a,null,r.a.createElement(K.a,{size:"md",responsive:!0,bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Add To Cart"))),t.productDetails&&t.productDetails.map((function(t,a){if("Paneer Items"==t.categoryName)return r.a.createElement("tbody",{key:a},r.a.createElement("tr",null,r.a.createElement("td",null,t.productName),r.a.createElement("td",null,t.price,"\xa0 INR"),r.a.createElement("td",null,t.quantity),r.a.createElement("td",null,r.a.createElement(W.a,{className:"mr-1",color:"primary",type:"submit",onClick:function(){return e.addToCart(t)}},"Add"))))}))))),r.a.createElement(g.a,null,r.a.createElement(S.a,null,r.a.createElement(k.a,{tag:"h5"},"Veg Items")),r.a.createElement(O.a,null,r.a.createElement(K.a,{size:"md",responsive:!0,bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Add To Cart"))),t.productDetails&&t.productDetails.map((function(t,a){if("Veg Items"==t.categoryName)return r.a.createElement("tbody",{key:a},r.a.createElement("tr",null,r.a.createElement("td",null,t.productName),r.a.createElement("td",null,t.price,"\xa0 INR"),r.a.createElement("td",null,t.quantity),r.a.createElement("td",null,r.a.createElement(W.a,{className:"mr-1",color:"primary",type:"submit",onClick:function(){return e.addToCart(t)}},"Add"))))}))))),r.a.createElement(g.a,null,r.a.createElement(S.a,null,r.a.createElement(k.a,{tag:"h5"},"Combo Items")),r.a.createElement(O.a,null,r.a.createElement(K.a,{size:"md",responsive:!0,bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Add To Cart"))),t.productDetails&&t.productDetails.map((function(t,a){if("Combo Items"==t.categoryName)return r.a.createElement("tbody",{key:a},r.a.createElement("tr",null,r.a.createElement("td",null,t.productName),r.a.createElement("td",null,t.price,"\xa0 INR"),r.a.createElement("td",null,t.quantity),r.a.createElement("td",null,r.a.createElement(W.a,{className:"mr-1",color:"primary",type:"submit",onClick:function(){return e.toggleModal(t)}},"Add"))))})))))),r.a.createElement(H.a,{isOpen:e.state.showLeadModal,toggle:e.toggleModal,className:"modal-dialog-centered modal-lg"},r.a.createElement(F.a,{toggle:e.toggleModal,className:"bg-primary"},"Choose Extra Items"),r.a.createElement(G.a,null,r.a.createElement(ee,{toggleModal:e.toggleModal,addItem:e.state.comboItem,addExtraItem:e.state.item,handleChild:e.handleChild}))))}))),r.a.createElement(y.a,{md:"6",sm:"12"},r.a.createElement(Z,{addItem1:this.state.arr,dispatch:this.props.dispatch})))}}]),a}(r.a.Component),ae=Object(h.b)((function(e){return{}}))(te),ne=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.b,{history:E},r.a.createElement(b,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:z}),r.a.createElement(m.a,{exact:!0,path:"/menu",component:ae}))))}}]),a}(n.Component),re=Object(h.b)((function(e){return{}}))(ne);var le=function(){return r.a.createElement(re,null)},ce=(a(94),a(17)),oe=a(54),ue=a.n(oe),ie=a(55),se=a(27),me={banquets:[]},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BANQUET":return Object.assign({},e,{banquets:t.payload});default:return e}},Ee=a(56),pe={key:"jwt",storage:a.n(Ee).a,whitelist:["auth"]},he=Object(ce.c)({globalReducer:de}),fe=Object(se.a)(pe,he),be=[ie.a,ue()()],ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,ye=Object(ce.e)(fe,{},ve(ce.a.apply(void 0,be))),ge=Object(se.b)(ye),Oe=a(57);c.a.render(r.a.createElement(h.a,{store:ye},r.a.createElement(Oe.a,{persistor:ge},r.a.createElement(p.a,null,r.a.createElement(le,null)))),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.172b8f91.chunk.js.map