(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{230:function(t,e,n){var content=n(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("b1480906",content,!0,{sourceMap:!1})},245:function(t,e,n){"use strict";var r=n(230);n.n(r).a},246:function(t,e,n){(e=n(54)(!1)).push([t.i,".post-title{color:#5f5f5f}",""]),t.exports=e},282:function(t,e,n){"use strict";n.r(e);n(34);var r=n(12),l=n(63),o=n.n(l),c={data:function(){return{items:[]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$config,r=n.apiKey,l=n.clubsEndpoint,e.next=3,o.a.get(l+"?limit=50",{headers:{"X-API-KEY":r}});case 3:return c=e.sent,data=c.data,e.abrupt("return",{items:data.contents});case 6:case"end":return e.stop()}}),e)})))()}},f=(n(245),n(47)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-list-group",{staticClass:"mx-2 mb-2"},[n("nuxt-link",{attrs:{to:"/events/"}},[n("b-list-group-item",{staticClass:"d-flex post-title font-weight-bold"},[t._v("直近のイベントカレンダー！"),n("div",{staticStyle:{"margin-left":"auto"}},[t._v("＞")])])],1),n("nuxt-link",{attrs:{to:"/culture/"}},[n("b-list-group-item",{staticClass:"d-flex post-title font-weight-bold"},[t._v("コミュニティはどんな場所？"),n("div",{staticStyle:{"margin-left":"auto"}},[t._v("＞")])])],1),n("nuxt-link",{attrs:{to:"/channel/"}},[n("b-list-group-item",{staticClass:"d-flex post-title font-weight-bold"},[t._v("チャンネルの説明"),n("div",{staticStyle:{"margin-left":"auto"}},[t._v("＞")])])],1)],1),n("h2",{staticClass:"ml-3 font-weight-bold"},[t._v("部活一覧")]),t._l(t.items,(function(e){return n("div",[n("b-card",[n("nuxt-link",{attrs:{to:"/clubs/"+e.id+"/"}},[n("div",[n("h3",{staticClass:"d-flex post-title font-weight-bold"},[n("div",[t._v(t._s(e.name))]),n("div",{staticStyle:{"margin-left":"auto"}},[t._v("＞")])])])])],1)],1)}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);