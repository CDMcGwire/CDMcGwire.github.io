(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{170:function(t,e,o){},173:function(t,e,o){"use strict";var a=o(170);o.n(a).a},174:function(t,e,o){"use strict";var a=o(71),n={props:["header","subtitle","directory","path"],methods:{filterCollection:function(t,e){var o,n=[],r=Object(a.a)(this.$static.allMarkdown.edges);try{for(r.s();!(o=r.n()).done;){var i=o.value,s=i.node.fileInfo.directory,c=i.node.path;s===t&&c!==e&&n.push(i.node)}}catch(t){r.e(t)}finally{r.f()}return n}}},r=(o(173),o(18)),i=o(0),s=i.a.config.optionMergeStrategies.computed,c={allMarkdown:{edges:[{node:{title:"EYE Center Research",path:"/projects/uwb-eye/",excerpt:"My capstone project at the University of Washington Bothell. I had the opportunity to work with the EYE Center (Educating Young Eyes) on research into novel computer use for diagnosing and treating near vision issues",organization:"UW Bothell",start:"January 2017",end:"June 2017",fileInfo:{directory:"projects"}}},{node:{title:"General Purpose GPU Research",path:"/projects/uwb-hpc/",excerpt:"At the University of Washington Bothell campus, I participated in Undergraduate Research to help develop class materials for a Graduate level High Performance Computing (HPC) course.",organization:"UW Bothell",start:"January 2016",end:"June 2016",fileInfo:{directory:"projects"}}},{node:{title:"Automated Advising System",path:"/projects/evcc-advising/",excerpt:"The Automated Advising System was an Algorithm's Club project at Everett Community College.",organization:"EvCC",start:"January 2014",end:"January 2015",fileInfo:{directory:"projects"}}},{node:{title:"Demo Index",path:"/demo/",excerpt:"",organization:"",start:"",end:"",fileInfo:{directory:"demo"}}},{node:{title:"Demo One",path:"/demo/one/",excerpt:"",organization:"",start:"",end:"",fileInfo:{directory:"demo"}}},{node:{title:"Connor McGwire",path:"/",excerpt:"",organization:"",start:"",end:"",fileInfo:{directory:""}}},{node:{title:"Demo Two",path:"/demo/two/",excerpt:"",organization:"",start:"",end:"",fileInfo:{directory:"demo"}}}]}},l=function(t){var e=t.options;e.__staticData?e.__staticData.data=c:(e.__staticData=i.a.observable({data:c}),e.computed=s({$static:function(){return e.__staticData.data}},e.computed))},d=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Layout",{attrs:{header:t.header,subtitle:t.subtitle}},[o("ul",t._l(t.filterCollection(t.directory,t.path),(function(e){return o("li",{key:e,staticClass:"col"},[o("g-link",{attrs:{to:e.path}},[o("h2",[t._v(t._s(e.title))])]),o("span",{staticClass:"details"},[t._v("[ "),e.organization?o("span",[t._v(t._s(e.organization)+" : ")]):t._e(),t._v(t._s(e.start)+" - "+t._s(e.end)+" ]")]),o("p",[t._v(t._s(e.excerpt))])],1)})),0)])}),[],!1,null,"10b8f930",null);"function"==typeof l&&l(d);e.a=d.exports},185:function(t,e,o){"use strict";o.r(e);var a={components:{Collection:o(174).a}},n=o(18),r=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("Collection",{attrs:{header:"Posts",directory:"posts",path:"/posts/"}})}),[],!1,null,null,null);e.default=r.exports}}]);