(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{230:function(t,e,r){var content=r(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("b1480906",content,!0,{sourceMap:!1})},245:function(t,e,r){"use strict";var n=r(230);r.n(n).a},246:function(t,e,r){(e=r(54)(!1)).push([t.i,".post-title{color:#5f5f5f}",""]),t.exports=e},282:function(t,e,r){"use strict";r.r(e);r(34);var n=r(12),l=r(63),o=r.n(l),c={data:function(){return{items:[]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$config,n=r.apiKey,l=r.clubsEndpoint,e.next=3,o.a.get(l+"?limit=1000",{headers:{"X-API-KEY":n}});case 3:return c=e.sent,data=c.data,e.abrupt("return",{items:data.contents});case 6:case"end":return e.stop()}}),e)})))()}},f=(r(245),r(47)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-list-group",{staticClass:"mx-2 mb-2"},[r("nuxt-link",{attrs:{to:"/events/"}},[r("b-list-group-item",{staticClass:"d-flex post-title font-weight-bold"},[t._v("部活イベントカレンダー!！"),r("div",{staticStyle:{"margin-left":"auto"}},[t._v("＞")])])],1),r("nuxt-link",{attrs:{to:"/culture/"}},[r("b-list-group-item",{staticClass:"d-flex post-title font-weight-bold"},[t._v("コミュニティはどんな場所？"),r("div",{staticStyle:{"margin-left":"auto"}},[t._v("＞")])])],1),r("nuxt-link",{attrs:{to:"/channel/"}},[r("b-list-group-item",{staticClass:"d-flex post-title font-weight-bold"},[t._v("チャンネルの説明"),r("div",{staticStyle:{"margin-left":"auto"}},[t._v("＞")])])],1)],1),t._m(0),t._m(1),r("h2",{staticClass:"ml-3 font-weight-bold"},[t._v("部活一覧")]),t._l(t.items,(function(e){return r("div",[r("b-card",[r("nuxt-link",{attrs:{to:"/clubs/"+e.id+"/"}},[r("div",[r("h3",{staticClass:"d-flex post-title font-weight-bold"},[r("div",[t._v(t._s(e.name))]),r("div",{staticStyle:{"margin-left":"auto"}},[t._v("＞")])])])])],1)],1)}))],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex justify-content-center mb-2"},[e("iframe",{attrs:{width:"290",height:"160",src:"https://www.youtube.com/embed/CcW-wMKwL8g",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex justify-content-center"},[e("iframe",{attrs:{width:"290",height:"160",src:"https://www.youtube.com/embed/6a39r1EfttQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],!1,null,null,null);e.default=component.exports}}]);