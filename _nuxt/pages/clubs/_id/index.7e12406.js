(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{241:function(t,e,n){var content=n(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("4181e907",content,!0,{sourceMap:!1})},258:function(t,e,n){"use strict";var r=n(241);n.n(r).a},259:function(t,e,n){(e=n(54)(!1)).push([t.i,".post-title{color:#5f5f5f}",""]),t.exports=e},281:function(t,e,n){"use strict";n.r(e);n(34);var r=n(12),o=n(63),c=n.n(o),l={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,f,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$config,r=n.apiKey,o=n.clubsEndpoint,l=t.params,e.next=3,c.a.get("".concat(o,"/").concat(l.id),{headers:{"X-API-KEY":r}});case 3:return f=e.sent,data=f.data,e.abrupt("return",{item:data});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{item:{}}}},f=(n(258),n(47)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"ml-3"},[n("nuxt-link",{attrs:{to:"/clubs/"}},[n("p",[t._v("一覧 >")])])],1),n("b-card",{staticClass:"bg-white mx-2 post-title"},[n("h2",{staticClass:"font-weight-bold"},[t._v(t._s(t.item.name))]),n("p",[t._v("部長 | "+t._s(t.item.chief))]),n("div",{staticClass:"border-bottom"}),n("br"),n("h3",{staticClass:"font-weight-bold"},[t._v("部活紹介")]),n("p",{domProps:{innerHTML:t._s(t.item.introduction)}})]),n("div",{staticClass:"ml-3"},[n("nuxt-link",{attrs:{to:"/clubs/"}},[n("p",[t._v("一覧 >")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);