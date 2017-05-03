webpackJsonp([1],[,,,,,,,,,,function(t,e,n){"use strict";var a=n(1),r=n(63),s=n(55),o=n.n(s),i=n(56),c=n.n(i);a.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"home",component:o.a},{path:"/topic/:topic",name:"topic",component:c.a}]})},function(t,e,n){"use strict";var a=n(1),r=n(65),s=n(16);a.a.use(r.a);e.a=new r.a.Store({modules:{github:s.a},strict:!1})},function(t,e,n){n(51);var a=n(0)(n(18),n(58),null,null);t.exports=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n(12),s=n.n(r),o=n(10),i=n(11);a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,store:i.a,render:function(t){return t(s.a)}})},function(t,e,n){"use strict";e.a={fetchTopic:function(t,e){fetch("https://api.github.com/search/repositories?q=topic:"+e,{method:"GET"}).then(function(n){n.json().then(function(n){t.commit("setupTopic",{topic:e,json:n})})})}}},function(t,e,n){"use strict";e.a={allItems:function(t){return t.all},getTopic:function(t){return function(e){return e.topic===t.topic.name?t.topic:{}}}}},function(t,e,n){"use strict";var a=n(15),r=n(14),s=n(17),o={all:[{topic:"vue-template",name:"Vue templates"},{topic:"bootstrap",name:"Bootstrap"}],topic:{name:"",items:{}}};e.a={state:o,getters:a.a,actions:r.a,mutations:s.a}},function(t,e,n){"use strict";var a=n(1);e.a={setupTopic:function(t,e){a.a.set(t,"topic",{name:e.topic,total_count:e.json.total_count,incomplete_results:e.json.incomplete_results,items:e.json.items})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(52),r=n.n(a);e.default={name:"app",components:{Navbar:r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(24),r=n.n(a);e.default={name:"navbar",computed:{routes:function(){var t=this,e=[];return r()(this.$router.options.routes).forEach(function(n){var a=t.$router.options.routes[n];a.title&&e.push(a)}),e}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"star-badge",props:["name"],methods:{getUrl:function(){return"https://github.com/"+this.name+"/stargazers"},getImage:function(){return"https://img.shields.io/github/stars/"+this.name+".svg?style=social"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"watch-badge",props:["name"],methods:{getUrl:function(){return"https://github.com/"+this.name+"/watchers"},getImage:function(){return"https://img.shields.io/github/watchers/"+this.name+".svg?style=social"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",computed:{all:function(){return this.$store.getters.allItems}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(53),r=n.n(a),s=n(54),o=n.n(s);e.default={name:"topic",components:{"star-badge":r.a,"watch-badge":o.a},data:function(){return{topic:this.$route.params.topic}},computed:{topicData:function(){return this.$store.getters.getTopic({topic:this.topic})}},mounted:function(){this.$store.dispatch("fetchTopic",this.$route.params.topic)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e,n){var a=n(0)(n(19),n(59),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(20),n(60),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(21),n(57),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(22),n(61),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(23),n(62),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.getUrl()}},[n("img",{attrs:{src:t.getImage(),alt:""}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-toggleable-md navbar-light bg-faded"},[t._m(0),t._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("\n        Awesome github\n    ")]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[n("ul",{staticClass:"navbar-nav mr-auto"},t._l(t.routes,function(e){return n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:e,"active-class":"active"}},[t._v("\n                    "+t._s(e.title)+"\n                ")])],1)}))])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.getUrl()}},[n("img",{attrs:{src:t.getImage(),alt:""}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("h1",[t._v("Home")]),t._v(" "),t._l(t.all,function(e){return n("div",[n("router-link",{attrs:{to:{name:"topic",params:{topic:e.topic}}}},[t._v("\n                "+t._s(e.name)+"\n            ")]),t._v(" "),n("hr")],1)})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-inverse text-white py-3"},[n("div",{staticClass:"container"},[n("h1",[t._v(t._s(t.topic))])])]),t._v(" "),n("div",{staticClass:"container py-3"},t._l(t.topicData.items,function(e){return n("div",[n("h3",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v("\n                "+t._s(e.description)+"\n                "),e.homepage?n("a",{attrs:{href:e.homepage}},[t._v(t._s(e.homepage))]):t._e()]),t._v(" "),n("star-badge",{attrs:{name:e.full_name}}),t._v(" "),n("watch-badge",{attrs:{name:e.full_name}}),t._v(" "),n("a",{attrs:{href:e.html_url}},[n("i",{staticClass:"fa fa-github"}),t._v("\n                github\n            ")]),t._v(" "),n("hr")],1)}))])},staticRenderFns:[]}}],[13]);
//# sourceMappingURL=app.4a49c102a72a2c40cda9.js.map