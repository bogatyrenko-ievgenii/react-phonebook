(this["webpackJsonpreact-hw-02-phonebook"]=this["webpackJsonpreact-hw-02-phonebook"]||[]).push([[0],{22:function(n,t,e){},28:function(n,t,e){"use strict";e.r(t);var i,a,o,r,c,u,s,d,l,f,p=e(0),h=e.n(p),x=e(8),b=e.n(x),m=(e(22),e(15)),j=e(9),g=e(10),O=e(11),v=e(17),w=e(16),C=e(30),y=e(2),H=e(3),k=H.a.form(i||(i=Object(y.a)(["\nwidth: 300px;\ndisplay: flex;\njustify-content: center;\nflex-direction: row;\nline-height: 12px;\nmargin-bottom: 20px;\n"]))),A=H.a.input(a||(a=Object(y.a)(["\nwidth: 200px;\nheight: 25px;\nfont-size: 20px;\nfont-weight: 600;\nmargin-left: 100px;\nborder-radius: 3px;\n"]))),S=H.a.button(o||(o=Object(y.a)(["\n  border-radius: 3px;\n  color: #FFF;\n  background-color: rgb(10, 151, 85);\n  height: 30px;\n"]))),F=Object(H.a)(S)(r||(r=Object(y.a)(["\nwidth: 50px;\nmargin: 25px 0px 0px 25px;\n"]))),I=H.a.div(c||(c=Object(y.a)(["\ndisplay: flex;\nflex-direction: column;\n"]))),z=Object(H.a)(A)(u||(u=Object(y.a)(["\n  margin: 0px;\n"]))),M=H.a.li(s||(s=Object(y.a)(["\n  margin: 7px;\n  padding: 3px 15px 3px 25px;\n  box-shadow: 1px 1px 5px;\n  width: 400px;\n  line-height: 2em;\n  color: rgb(3, 29, 17);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),N=H.a.ul(d||(d=Object(y.a)(["\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n\n"]))),E=H.a.div(l||(l=Object(y.a)(["\n  margin: 15vh auto 0 auto;\n  width: 500px;\n  min-height: 250px;\n  padding: 3px 3px;\n  color: #fff;\n  font-size: 20px;\n  background-color: rgba(169, 17, 51, .8);\n  line-height: 2em;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0);\n\n"]))),D=H.a.div(f||(f=Object(y.a)(["\n  margin: 15vh auto 0 auto;\n  width: 500px;\n  min-height: 250px;\n  padding: 3px 3px;\n  box-shadow: 1px 1px 5px;\n  line-height: 2em;\n"]))),J=e(1),Z=function(n){return Object(J.jsxs)(k,{children:[Object(J.jsxs)(I,{children:[Object(J.jsx)(A,{autoComplete:"off",placeholder:"name",type:"text",name:"name",value:n.value.name,onChange:n.onHandleInput}),Object(J.jsx)("br",{}),Object(J.jsx)(A,{autoComplete:"off",placeholder:"number",type:"tel",name:"number",value:n.value.number,onChange:n.onHandleInput})]}),Object(J.jsx)(F,{type:"submit",onClick:n.onHandleAdd,children:"Add"})]})},B=function(n){var t=n.filter,e=n.deleteFn,i=function(){return t().map((function(n){return Object(J.jsxs)(M,{children:[Object(J.jsxs)("span",{children:[n.name," : ",n.number]}),Object(J.jsx)(S,{id:n.id,onClick:e,children:"delete"})]},n.id)}))};return Object(J.jsx)(N,{children:Object(J.jsx)(i,{})})},K=function(n){var t=n.value,e=n.onHandleInput;return Object(J.jsx)(z,{type:"filter",autoComplete:"off",placeholder:"filter",name:"filter",value:t.filter,onChange:e})},L=function(n){Object(v.a)(e,n);var t=Object(w.a)(e);function e(n){var i;return Object(g.a)(this,e),(i=t.call(this,n)).onHandleInput=function(n){i.setState(Object(j.a)({},n.target.name,n.target.value))},i.getExistence=function(){return i.state.contacts.some((function(n){return n.name===i.state.name}))},i.onHandleAdd=function(n){n.preventDefault();var t=i.state,e=t.name,a=t.number;if(!e||!a)return i.setState((function(n){n.notification;return{notification:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f!"}}));if(i.getExistence())return i.setState((function(n){n.notification;return{notification:"\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"}}));var o=i.getMatchName(e),r=i.getMatchNum(a);i.handleCreation(o,r)},i.getMatchName=function(n){return/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/.test(n)},i.getMatchNum=function(n){return/(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/.test(n)},i.handleCreation=function(n,t){var e=i.state,a=e.name,o=e.number;if(n&&t)i.setState((function(n){var t=n.contacts;return{contacts:[].concat(Object(m.a)(t),[{id:Object(C.a)(),name:a,number:o}]),name:"",number:""}}));else{if(!n)return i.setState((function(n){n.notification;return{notification:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."}}));if(!t)return i.setState((function(n){n.notification;return{notification:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"}}))}},i.onFilter=function(){var n=i.state,t=n.contacts,e=n.filter;return t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))},i.onDelete=function(n){var t=i.state.contacts.filter((function(t){return t.id!==n.target.id}));i.setState({contacts:t})},i.checkForNotifications=function(){if(i.state.notification)return setTimeout((function(){i.setState((function(n){n.notification;return{notification:""}}))}),3e3),Object(J.jsx)(E,{children:Object(J.jsx)("h2",{children:i.state.notification})})},i.state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:"",number:"",filter:"",notification:""},i}return Object(O.a)(e,[{key:"render",value:function(){return this.checkForNotifications()||Object(J.jsxs)(D,{children:[Object(J.jsx)("h1",{children:"Phonebook"}),Object(J.jsx)(Z,{value:this.state,onHandleInput:this.onHandleInput,onHandleAdd:this.onHandleAdd}),0!==this.state.contacts.length?Object(J.jsx)(K,{value:this.state,onHandleInput:this.onHandleInput}):Object(J.jsx)("span",{children:"K\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"}),Object(J.jsx)(B,{filter:this.onFilter,deleteFn:this.onDelete})]})}}]),e}(p.Component);b.a.render(Object(J.jsx)(h.a.StrictMode,{children:Object(J.jsx)(L,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.33573fc3.chunk.js.map