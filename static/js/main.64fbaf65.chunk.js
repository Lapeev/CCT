(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,a,n){e.exports={navsWrapper:"navs_navsWrapper__3goAS",nav:"navs_nav__EmvYm",navs:"navs_navs__2F9Vz",link:"navs_link__6Rb7g",i:"navs_i__Yxnce",iRotate:"navs_iRotate__3wBlL",linkActive:"navs_linkActive__12ATm",listItem:"navs_listItem__2YV0n",contacts:"navs_contacts__1DDmp",navsWrapper0:"navs_navsWrapper0__3Brwc",navsWrapper1:"navs_navsWrapper1__2Q45P",navsWrapper2:"navs_navsWrapper2__2d4VX",navsWrapper3:"navs_navsWrapper3__6my1U",navsWrapper4:"navs_navsWrapper4__ci7yO"}},13:function(e,a,n){e.exports={container:"first-container_container__1y7Oe",triangle:"first-container_triangle__3xeNh",particles:"first-container_particles__3oDtU"}},14:function(e,a,n){e.exports={ul:"sub-menu_ul__1mibV",li:"sub-menu_li__gAS4Q"}},15:function(e,a,n){e.exports={wrapper:"main-text_wrapper__15M7T",lastOne:"main-text_lastOne__2kFFi"}},22:function(e,a,n){e.exports=n.p+"static/media/logo.613c9b57.png"},23:function(e,a,n){e.exports={enter:"slide-side_enter__26me0",enterActive:"slide-side_enterActive__3utdM",exit:"slide-side_exit__3vqwJ",exitActive:"slide-side_exitActive__1k66K"}},27:function(e,a,n){e.exports=n(39)},3:function(e,a,n){e.exports={navBar:"nav-bar_navBar__Oh0Zy",img:"nav-bar_img__1Sdx0",navBarNotTransparent:"nav-bar_navBarNotTransparent__22r64",mediaMenu:"nav-bar_mediaMenu__6kblu",span:"nav-bar_span__38L9c"}},33:function(e,a,n){},39:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),s=n(5),l=n.n(s),c=(n(33),n(18)),i=n.n(c),o=n(13),u=n.n(o),m=n(6),p=n(7),_=n(10),v=n(8),d=n(11),E=n(9),f=n(21),b=n.n(f),O=n(22),h=n.n(O),N=n(16),y=n(12),W=n.n(y),k=["\u0423\u0441\u043b\u0443\u0433\u0438","\u0410\u043a\u0446\u0438\u0438","\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e","\u041a\u043e\u043c\u0430\u043d\u0434\u0430","\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"],x=n(1),g=n.n(x),w=n(41),C=["01 \u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0440\u0442\u0430\u043b","02 \u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442 \u0434\u043b\u044f \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f","03 \u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0439","04 \u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u0439","05 \u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441 \u0441\u0438\u0441\u0442\u0435\u043c \xab\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\xbb","06 Call-center","07 \u0410\u0420\u041c \xab\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\xbb"],A=n(14),M=n.n(A),j=n(23),B=n.n(j),I=function(e){var a=e.subOpen;return r.a.createElement(w.a,{in:a,timeout:200,classNames:B.a,unmountOnExit:!0},r.a.createElement("ul",{className:M.a.ul},C.map(function(e){return r.a.createElement("li",{className:M.a.li,key:e},r.a.createElement("a",{href:"#"},e))})))},S=N.a.div({open:{y:"0%",transition:{duration:300},delayChildren:0,staggerChildren:150},closed:{y:"-100%",delay:0,transition:{duration:300}},initialPose:"closed"}),T=N.a.li({open:{opacity:1},closed:{opacity:0},smallOpen:{opacity:1,x:"0%",delay:200,transition:{duration:200}},smallClosed:{opacity:0,x:"100%",transition:{duration:200}},initialPose:"smallOpen"}),R=function(e){function a(){var e,n;Object(m.a)(this,a);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return(n=Object(_.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={subOpen:!1,mainItems:k.slice(1),i:null},n.onHandleClick=function(){return n.setState(function(e){return{subOpen:!e.subOpen}})},n.componentWillUpdate=function(){!1===n.props.open&&n.setState({subOpen:!1})},n.onHover=function(e){n.setState({i:e})},n.onMouseOut=function(){n.setState({i:null})},n}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this,a=this.props.open,n=this.state,t=n.mainItems,s=n.subOpen,l=n.i,c=W()("material-icons",g.a.i,s?g.a.iRotate:""),i=W()(g.a.link,s?g.a.linkActive:""),o=W()(null!==l?function(e){switch(e){case 0:return g.a.navsWrapper0;case 1:return g.a.navsWrapper1;case 2:return g.a.navsWrapper2;case 3:return g.a.navsWrapper3;case 4:return g.a.navsWrapper4;default:return g.a.navsWrapper}}(l):"",s?g.a.navsWrapper4:"");return r.a.createElement(S,{className:g.a.navsWrapper,pose:a?"open":"closed"},r.a.createElement("div",{className:o},r.a.createElement("nav",{className:g.a.nav},r.a.createElement("ul",{className:g.a.navs},r.a.createElement(T,{onMouseOver:function(){return e.onHover(4)},onMouseLeave:this.onMouseOut,className:g.a.listItem},r.a.createElement("button",{type:"button",onClick:this.onHandleClick,className:i},k[0],r.a.createElement("i",{className:c},"arrow_drop_down")),r.a.createElement(I,{subOpen:s})),t.map(function(a,n){return r.a.createElement(T,{className:g.a.listItem,onMouseOver:function(){return e.onHover(n)},onMouseLeave:e.onMouseOut,key:a,pose:s?"smallClosed":"smallOpen"},r.a.createElement("a",{href:"#",className:g.a.link},a))}))),r.a.createElement("div",{className:g.a.contacts},r.a.createElement("p",null,r.a.createElement("i",{className:"material-icons"},"call"),r.a.createElement("i",{className:"material-icons"},"near_me"),"+38 (063) 278-15-84"),r.a.createElement("p",null,r.a.createElement("i",{className:"material-icons"},"local_post_office"),"ceo@cybercreation.team"))))}}]),a}(t.Component),H=n(3),L=n.n(H),V=function(e){function a(){var e,n;Object(m.a)(this,a);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return(n=Object(_.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1},n.handleClick=function(){n.setState(function(e){return{open:!e.open}})},n}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.state.open;return r.a.createElement("div",{className:L.a.navBar},r.a.createElement("div",{className:L.a.navBarNotTransparent},r.a.createElement("img",{className:L.a.img,src:h.a,alt:"logo"}),r.a.createElement("div",{className:L.a.mediaMenu},r.a.createElement(E.a,{query:{maxWidth:1200}},function(e){return!e&&r.a.createElement("span",{className:L.a.span},"\u041c\u0415\u041d\u042e")}),r.a.createElement(b.a,{isOpen:e,menuClicked:this.handleClick,color:"#c0c0c2"}))),r.a.createElement(R,{open:e}))}}]),a}(t.Component),Y=n(15),q=n.n(Y),D=function(){return r.a.createElement("div",{className:q.a.wrapper},r.a.createElement("h1",null,"CYBER CREATION ",r.a.createElement("br",null),r.a.createElement("span",null,"TEAM")),r.a.createElement("p",{className:q.a.lastOne},"\u0410\u0412\u0422\u041e\u041c\u0410\u0422\u0418\u0417\u0410\u0426\u0418\u042f",r.a.createElement("br",null)," \u041a\u041e\u041c\u041c\u0423\u041d\u0410\u041b\u042c\u041d\u042b\u0425"," ",r.a.createElement(E.a,{query:{maxWidth:1199}},function(e){return e&&r.a.createElement("br",null)})," ","\u041f\u0420\u0415\u0414\u041f\u0420\u0418\u042f\u0422\u0418\u0419"),r.a.createElement("a",{href:"#"},"\u0421\u0412\u042f\u0417\u0410\u0422\u042c\u0421\u042f \u0421 \u041d\u0410\u041c\u0418"))},F=function(){return r.a.createElement("section",{className:u.a.container},r.a.createElement(V,null),r.a.createElement(i.a,{className:"styles.particles",height:"90%"}),r.a.createElement(D,null),r.a.createElement("div",{className:u.a.triangle}))},J=function(){return r.a.createElement(F,null)};l.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.64fbaf65.chunk.js.map