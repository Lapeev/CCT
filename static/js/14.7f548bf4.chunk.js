(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{145:function(e,a,t){e.exports={section:"fifth-screen_section__2WqTp",navigation:"fifth-screen_navigation__3Cc-K",img:"fifth-screen_img__1nxFU"}},146:function(e,a,t){e.exports={wrapper:"header_wrapper__1Ooma",h3:"header_h3__4nxjx",span:"header_span__1CK5l"}},147:function(e,a,t){e.exports={wrapper:"information_wrapper__3OWk8",text:"information_text__1_QJL",img:"information_img__3SQSu",buttons:"information_buttons__17J9O"}},358:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(1),s=t(145),c=t.n(s),o=t(146),l=t.n(o),m=function(){return r.a.createElement("div",{className:l.a.wrapper},r.a.createElement("h3",{className:l.a.h3},r.a.createElement("span",{className:l.a.span},"04"),"\u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u0439"))},p=t(62),u=t(147),_=t.n(u),f=t(70),v=t(96),h=t.n(v),g=t(97),d=t.n(g),E=function(e){var a=e.onOpenModal;return r.a.createElement("div",{className:_.a.wrapper},r.a.createElement("p",{className:_.a.text},"\u041c\u043e\u0449\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441 \u0432\u043b\u0438\u044f\u043d\u0438\u044f \u043d\u0430 \u0430\u0431\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0441 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u044c\u044e \u0438 \u043e\u0446\u0435\u043d\u043a\u043e\u0439 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438. \u0410\u0432\u0442\u043e\u0434\u043e\u0437\u0432\u043e\u043d, Viber \u0438 SMS \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f, E-mail \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0438 \u0438 Push \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),r.a.createElement(i.a,{query:{maxWidth:1199}},function(e){return e&&r.a.createElement("picture",null,r.a.createElement("source",{srcSet:d.a,type:"image/webp"}),r.a.createElement("source",{srcSet:h.a,type:"image/png"}),r.a.createElement("img",{className:_.a.img,src:h.a,alt:"Messages"}))}),r.a.createElement(f.a,{path:"messages",onOpenModal:a,className:_.a.buttons}))};a.default=function(e){var a=e.onOpenModal;return r.a.createElement("section",{id:"Messages",name:"Messages",className:c.a.section},r.a.createElement(m,null),r.a.createElement(i.a,{query:{minWidth:1200}},function(e){return e&&r.a.createElement("div",{className:c.a.navigation},r.a.createElement(p.a,{number:4}))}),r.a.createElement(E,{onOpenModal:a}),r.a.createElement(i.a,{query:{minWidth:1200}},function(e){return e&&r.a.createElement("picture",null,r.a.createElement("source",{srcSet:d.a,type:"image/webp"}),r.a.createElement("source",{srcSet:h.a,type:"image/png"}),r.a.createElement("img",{className:c.a.img,src:h.a,alt:"Messages"}))}))}},61:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===i)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},62:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(65),s=t(61),c=t.n(s),o=t(63),l=t.n(o),m=[{name:"01",href:"Portal"},{name:"02",href:"Office"},{name:"03",href:"CompanyOffice"},{name:"04",href:"Messages"},{name:"05",href:"Registrator"},{name:"06",href:"CallCenter"},{name:"07",href:"Head"}],p=c()(l.a.listItem,l.a.active),u=c()(l.a.link,l.a.linkWhite),_=c()(l.a.link,l.a.linkBlack),f=c()(l.a.wrapper,l.a.wrapperBlack),v=c()(l.a.wrapper,l.a.wrapperWhite);a.a=function(e){var a=e.number;return r.a.createElement("div",{className:a%2===0?v:f},r.a.createElement("ul",{className:l.a.list},m.map(function(e,t){return a===t+1?r.a.createElement("li",{className:p,key:e.name},r.a.createElement(i.Link,{className:a%2===0?u:_,to:e.href,spy:!0,smooth:!0,duration:500},e.name)):r.a.createElement("li",{className:l.a.listItem,key:e.name},r.a.createElement(i.Link,{className:a%2===0?u:_,to:e.href,spy:!0,smooth:!0,duration:500},e.name))})))}},63:function(e,a,t){e.exports={wrapper:"navigationServices_wrapper__C1pUH",wrapperBlack:"navigationServices_wrapperBlack__2WVtq",wrapperWhite:"navigationServices_wrapperWhite__3Rhu4",list:"navigationServices_list__2CDl2",listItem:"navigationServices_listItem__4vV4e",active:"navigationServices_active__7Rvh2",link:"navigationServices_link__2u4L_",linkBlack:"navigationServices_linkBlack__2Ue8r",linkWhite:"navigationServices_linkWhite__26f2t"}},70:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(9),s=t(71),c=t.n(s);a.a=function(e){var a=e.onOpenModal,t=e.path;return r.a.createElement("div",{className:c.a.wrapper},r.a.createElement("button",{onClick:a,className:c.a.order},"\u0423\u0417\u041d\u0410\u0422\u042c \u0426\u0415\u041d\u0423"),r.a.createElement(i.b,{to:t,className:c.a.more},"\u041f\u041e\u0414\u0420\u041e\u0411\u041d\u0415\u0415"))}},71:function(e,a,t){e.exports={wrapper:"buttons-dark_wrapper__1Fgra",order:"buttons-dark_order__1c5nk",more:"buttons-dark_more__2PwRx"}},96:function(e,a,t){e.exports=t.p+"static/media/messages.674374f3.png"},97:function(e,a,t){e.exports=t.p+"static/media/messages.9be0624b.webp"}}]);
//# sourceMappingURL=14.7f548bf4.chunk.js.map