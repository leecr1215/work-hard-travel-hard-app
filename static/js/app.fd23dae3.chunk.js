(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{87:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(9),o=n.n(r),a=n(30),c=n.n(a),s=n(1),i=n.n(s),u=n(85),l=n(0),p=n(4),f=n(21),j=n(12),b=n(46),d=n(74),O=n(86),h=n(56),x=n(14),y="black",w="#3A3D40",g="#5C5C60",m=n(49),v=n(124),D=n(2);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(){var e=Object(l.useState)(!0),t=c()(e,2),n=t[0],r=t[1],a=Object(l.useState)(""),s=c()(a,2),p=s[0],y=s[1],g=Object(l.useState)({}),P=c()(g,2),k=P[0],T=P[1];Object(l.useEffect)((function(){W()}),[]);var z=function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(m.a.setItem("@toDos",JSON.stringify(e)));case 2:case"end":return t.stop()}}),null,null,null,Promise)},W=function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(m.a.getItem("@toDos"));case 2:e=t.sent,console.log(e),null!==e&&T(JSON.parse(e));case 5:case"end":return t.stop()}}),null,null,null,Promise)};return Object(D.jsxs)(j.a,{style:C.container,children:[Object(D.jsx)(f.a,{children:"Open up App.js to start working on your app!"}),Object(D.jsx)(u.a,{style:"auto"}),Object(D.jsxs)(j.a,{style:C.header,children:[Object(D.jsx)(b.a,{onPress:function(){return r(!0)},children:Object(D.jsx)(f.a,{style:{fontSize:38,fontWeight:"600",color:n?"white":w},children:"Work"})}),Object(D.jsx)(b.a,{onPress:function(){return r(!1)},children:Object(D.jsx)(f.a,{style:{fontSize:38,fontWeight:"600",color:n?w:"white"},children:"Travel"})})]}),Object(D.jsx)(d.a,{onSubmitEditing:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==p){t.next=2;break}return t.abrupt("return");case 2:return e=S(S({},k),{},o()({},Date.now(),{text:p,working:n})),T(e),t.next=6,i.a.awrap(z(e));case 6:y("");case 7:case"end":return t.stop()}}),null,null,null,Promise)},onChangeText:function(e){return y(e)},returnKeyType:"done",value:p,placeholder:n?"Add a To Do":"Where do you want to go?",style:C.input}),Object(D.jsx)(O.a,{children:Object.keys(k).map((function(e){return k[e].working===n?Object(D.jsxs)(j.a,{style:C.toDo,children:[Object(D.jsx)(f.a,{style:C.toDoText,children:k[e].text}),Object(D.jsx)(b.a,{onPress:function(){return function(e){var t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:"web"===x.a.OS?confirm("Do you want to delete this To Do?")&&(delete(t=S({},k))[e],T(t),z(t)):h.a.alert("Delete To Do","Are you sure?",[{text:"Cancel"},{text:"I'm Sure",onPress:function(){var t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return delete(t=S({},k))[e],T(t),n.next=5,i.a.awrap(z(t));case 5:case"end":return n.stop()}}),null,null,null,Promise)}}]);case 1:case"end":return n.stop()}}),null,null,null,Promise)}(e)},children:Object(D.jsx)(f.a,{children:Object(D.jsx)(v.a,{name:"trash",size:18,color:w})})})]},e):null}))})]})}var C=p.a.create({container:{flex:1,backgroundColor:y,paddingHorizontal:20},header:{justifyContent:"space-between",flexDirection:"row",marginTop:100},input:{backgroundColor:"white",paddingVertical:15,paddingHorizontal:20,borderRadius:30,marginVertical:20,fontSize:18},toDo:{backgroundColor:g,marginBottom:10,paddingVertical:20,paddingHorizontal:20,borderRadius:15,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},toDoText:{color:"white",fontSize:16,fontWeight:"500"}})},88:function(e,t,n){e.exports=n(115)}},[[88,1,2]]]);
//# sourceMappingURL=app.fd23dae3.chunk.js.map