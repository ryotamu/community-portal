(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{227:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("90416374",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";var r=n(227);n.n(r).a},230:function(t,e,n){(e=n(54)(!1)).push([t.i,".post-title{color:#5f5f5f}.post-sub-color{color:#9a7b5c}",""]),t.exports=e},243:function(t,e,n){"use strict";n.r(e);n(34);var r=n(12),o=n(63),c=n.n(o),l={data:function(){return{items:[]}},methods:{formatDate:function(t){return t.substr(0,10)}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$config,r=n.apiKey,o=n.postsEndpoint,e.next=3,c.a.get(o,{headers:{"X-API-KEY":r}});case 3:return l=e.sent,data=l.data,e.abrupt("return",{items:data.contents});case 6:case"end":return e.stop()}}),e)})))()}},f=(n(229),n(50)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.items,(function(e){return n("div",[n("b-card",{staticClass:"m-2"},[n("nuxt-link",{attrs:{to:"/parent-posts/"+e.id+"/"}},[n("h2",{staticClass:"post-title font-weight-bold"},[t._v(t._s(e.title))])]),n("div",{staticClass:"d-flex"},t._l(e.tags,(function(e){return n("div",[n("b-button",{staticClass:"mr-1",attrs:{variant:"outline-secondary",disabled:""}},[t._v(t._s(e.name))])],1)})),0),n("h4",{staticClass:"post-sub-color m-0 text-right"},[n("i",{staticClass:"far fa-clock"}),t._v(" "+t._s(t.formatDate(e.publishedAt)))])],1)],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);