(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(28),c=a(15),i=a(16),u=a(9),s=a(31),d=a(12),l=a(21),p=a.n(l),f="editor.saveData",v="editor.getData",h=a(23),b=a.n(h),m=a(6),k=a.n(m),g=a(14),w="firebase.saveToken",y="firebase.getToken",S="firebase.saveUid",x="firebase.getUid",j=a(32),E=a.n(j),O=a(13),A=a.n(O);function I(){return function(){var e=Object(g.a)(k.a.mark(function e(t,a){var r,n,o;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a(),n=r.firebase.token,e.prev=2,e.next=5,A.a.auth().createUserWithEmailAndPassword("".concat(n,"@voloshinskii.ru"),n);case 5:o=e.sent,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(2),e.next=12,A.a.auth().signInWithEmailAndPassword("".concat(n,"@voloshinskii.ru"),n);case 12:o=e.sent;case 13:t({type:S,uid:o.user.uid});case 14:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t,a){return e.apply(this,arguments)}}()}function R(e){return function(){var t=Object(g.a)(k.a.mark(function t(a){return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:f,data:e}),a(function(){var e=Object(g.a)(k.a.mark(function e(t,a){var r,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=a(),n=r.firebase.uid,A.a.database().ref("users/"+n).set({data:r.editor.data},function(e){});case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}var T=p()({aboutTooltip:!0});var U=p()({});var D=Object(u.c)({editor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return localStorage.data=JSON.stringify(t.data),e.merge({data:t.data});case v:var a=localStorage.data&&JSON.parse(localStorage.data)||{time:1554920381017,blocks:[{type:"header",data:{text:"Hello world!",level:2}}],version:"2.12.4"};return e.merge({data:a,editor:function(e){return n.a.createElement(b.a,{autofocus:!0,holderId:"editorjs-container",onChange:function(t){return e(t)},onReady:function(){return console.log("Start!")},data:a})}});default:return e}},firebase:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return localStorage.token=t.token,e.merge({token:t.token});case y:var a=localStorage.token;return e.merge({token:a});case S:return localStorage.uid=t.uid,e.merge({uid:t.uid});case x:var r=localStorage.uid;return e.merge({uid:r});default:return e}}}),C=a(96),J=d.a(),L=[s.a,Object(i.routerMiddleware)(J)];A.a.initializeApp({apiKey:"AIzaSyC1Ae16VeG_VHqZQXWLNxY9oUe5bmAQATM",authDomain:"todo-f5cb1.firebaseapp.com",databaseURL:"https://todo-f5cb1.firebaseio.com",projectId:"todo-f5cb1",storageBucket:"",messagingSenderId:"294517743961",appId:"1:294517743961:web:f9bdc8d11ede7b3cc3ec48"});var q=u.d.apply(void 0,[u.a.apply(void 0,L)].concat([])),z=Object(u.e)(Object(i.connectRouter)(J)(D),{},q),H=C.parse(window.location.search);H.uid&&z.dispatch({type:S,uid:H.uid}),H.token&&z.dispatch({type:w,token:H.token}),z.dispatch({type:"firebase.getToken"}),z.dispatch({type:"firebase.getUid"}),z.dispatch(function(){var e=Object(g.a)(k.a.mark(function e(t){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:v});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),z.dispatch(function(){var e=Object(g.a)(k.a.mark(function e(t,a){var r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a().firebase.token||(r=E()(),t({type:w,token:r}));case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()),z.dispatch(function(){var e=Object(g.a)(k.a.mark(function e(t,a){var r,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a(),!(n=r.firebase.uid)){e.next=4;break}return e.abrupt("return",A.a.database().ref("/users/"+n).once("value").then(function(e){var a=e.val();t({type:f,data:a.data,force:!0})}));case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}());var M=z,N=a(27),P=a(34),Q=a.n(P);var W=Object(c.connect)(function(e){var t=e.editor,a=e.firebase;return{data:t.data,uid:a.uid,token:a.token,editor:t.editor}},function(e){return Object(u.b)({saveData:R,authFirebase:I},e)})(function(e){var t=e.authFirebase,a=e.saveData,r=(e.data,e.uid),o=e.editor,c=e.token;return n.a.createElement("div",null,!r&&n.a.createElement("button",{onClick:t},"Sync with other devices"),o(a),r&&function(e,t){var a=Q.a.createQR("https://todoapp.voloshinskii.ru?uid=".concat(e,"&token=").concat(t),{qrSize:256,isShowLogo:!1});return n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h2",null,"Share this note"),n.a.createElement("div",{style:{width:"256px",margin:"auto",marginBottom:"10px"},dangerouslySetInnerHTML:{__html:a}}))}(r,c))}),_=function(){return n.a.createElement("div",null,n.a.createElement("main",null,n.a.createElement(N.Route,{exact:!0,path:"/",component:W})))},B=(a(108),a(109),document.querySelector("#root"));Object(o.render)(n.a.createElement(c.Provider,{store:M},n.a.createElement(i.ConnectedRouter,{history:J},n.a.createElement("div",null,n.a.createElement(_,null)))),B)},36:function(e,t,a){e.exports=a(110)}},[[36,1,2]]]);
//# sourceMappingURL=main.56f37c6d.chunk.js.map