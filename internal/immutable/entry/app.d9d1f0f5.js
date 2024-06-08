import{s as H,a as J,o as K,t as M,b as L}from"../chunks/scheduler.6e0dad25.js";import{S as Q,i as X,s as Y,e as u,c as Z,a as $,t as m,b as v,d as p,f as k,g as x,h as ee,j as te,k as O,l as P,m as ne,n as ie,o as re,p as R,q as h,r as d,u as N,v as w,w as g}from"../chunks/index.fbd1e419.js";const se="modulepreload",fe=function(o,e){return new URL(o,e).href},A={},E=function(e,n,f){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=fe(l,f),l in A)return;A[l]=!0;const t=l.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!f)for(let c=r.length-1;c>=0;c--){const b=r[c];if(b.href===l&&(!t||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${s}`))return;const _=document.createElement("link");if(_.rel=t?"stylesheet":se,t||(_.as="script",_.crossOrigin=""),_.href=l,document.head.appendChild(_),t)return new Promise((c,b)=>{_.addEventListener("load",c),_.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e()).catch(l=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=l,window.dispatchEvent(t),!t.defaultPrevented)throw l})},ve={};function oe(o){let e,n,f;var r=o[1][0];function l(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=h(r,l(o)),o[21](e)),{c(){e&&d(e.$$.fragment),n=u()},l(t){e&&N(e.$$.fragment,t),n=u()},m(t,s){e&&w(e,t,s),$(t,n,s),f=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){R();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}r?(e=h(r,l(t)),t[21](e),d(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(r){const i={};s&8&&(i.data=t[3]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){f||(e&&p(e.$$.fragment,t),f=!0)},o(t){e&&m(e.$$.fragment,t),f=!1},d(t){t&&k(n),o[21](null),e&&g(e,t)}}}function le(o){let e,n,f;var r=o[1][0];function l(t,s){return{props:{data:t[3],$$slots:{default:[ge]},$$scope:{ctx:t}}}}return r&&(e=h(r,l(o)),o[20](e)),{c(){e&&d(e.$$.fragment),n=u()},l(t){e&&N(e.$$.fragment,t),n=u()},m(t,s){e&&w(e,t,s),$(t,n,s),f=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){R();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}r?(e=h(r,l(t)),t[20](e),d(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(r){const i={};s&8&&(i.data=t[3]),s&4194551&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)}},i(t){f||(e&&p(e.$$.fragment,t),f=!0)},o(t){e&&m(e.$$.fragment,t),f=!1},d(t){t&&k(n),o[20](null),e&&g(e,t)}}}function ae(o){let e,n,f;var r=o[1][1];function l(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=h(r,l(o)),o[19](e)),{c(){e&&d(e.$$.fragment),n=u()},l(t){e&&N(e.$$.fragment,t),n=u()},m(t,s){e&&w(e,t,s),$(t,n,s),f=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){R();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}r?(e=h(r,l(t)),t[19](e),d(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(r){const i={};s&16&&(i.data=t[4]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){f||(e&&p(e.$$.fragment,t),f=!0)},o(t){e&&m(e.$$.fragment,t),f=!1},d(t){t&&k(n),o[19](null),e&&g(e,t)}}}function _e(o){let e,n,f;var r=o[1][1];function l(t,s){return{props:{data:t[4],$$slots:{default:[we]},$$scope:{ctx:t}}}}return r&&(e=h(r,l(o)),o[18](e)),{c(){e&&d(e.$$.fragment),n=u()},l(t){e&&N(e.$$.fragment,t),n=u()},m(t,s){e&&w(e,t,s),$(t,n,s),f=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){R();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}r?(e=h(r,l(t)),t[18](e),d(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(r){const i={};s&16&&(i.data=t[4]),s&4194535&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)}},i(t){f||(e&&p(e.$$.fragment,t),f=!0)},o(t){e&&m(e.$$.fragment,t),f=!1},d(t){t&&k(n),o[18](null),e&&g(e,t)}}}function ce(o){let e,n,f;var r=o[1][2];function l(t,s){return{props:{data:t[5],form:t[2]}}}return r&&(e=h(r,l(o)),o[17](e)),{c(){e&&d(e.$$.fragment),n=u()},l(t){e&&N(e.$$.fragment,t),n=u()},m(t,s){e&&w(e,t,s),$(t,n,s),f=!0},p(t,s){if(s&2&&r!==(r=t[1][2])){if(e){R();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}r?(e=h(r,l(t)),t[17](e),d(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(r){const i={};s&32&&(i.data=t[5]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){f||(e&&p(e.$$.fragment,t),f=!0)},o(t){e&&m(e.$$.fragment,t),f=!1},d(t){t&&k(n),o[17](null),e&&g(e,t)}}}function ue(o){let e,n,f;var r=o[1][2];function l(t,s){return{props:{data:t[5],$$slots:{default:[de]},$$scope:{ctx:t}}}}return r&&(e=h(r,l(o)),o[16](e)),{c(){e&&d(e.$$.fragment),n=u()},l(t){e&&N(e.$$.fragment,t),n=u()},m(t,s){e&&w(e,t,s),$(t,n,s),f=!0},p(t,s){if(s&2&&r!==(r=t[1][2])){if(e){R();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}r?(e=h(r,l(t)),t[16](e),d(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(r){const i={};s&32&&(i.data=t[5]),s&4194503&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)}},i(t){f||(e&&p(e.$$.fragment,t),f=!0)},o(t){e&&m(e.$$.fragment,t),f=!1},d(t){t&&k(n),o[16](null),e&&g(e,t)}}}function me(o){let e,n,f;var r=o[1][3];function l(t,s){return{props:{data:t[6],form:t[2]}}}return r&&(e=h(r,l(o)),o[15](e)),{c(){e&&d(e.$$.fragment),n=u()},l(t){e&&N(e.$$.fragment,t),n=u()},m(t,s){e&&w(e,t,s),$(t,n,s),f=!0},p(t,s){if(s&2&&r!==(r=t[1][3])){if(e){R();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}r?(e=h(r,l(t)),t[15](e),d(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(r){const i={};s&64&&(i.data=t[6]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){f||(e&&p(e.$$.fragment,t),f=!0)},o(t){e&&m(e.$$.fragment,t),f=!1},d(t){t&&k(n),o[15](null),e&&g(e,t)}}}function pe(o){let e,n,f;var r=o[1][3];function l(t,s){return{props:{data:t[6],$$slots:{default:[he]},$$scope:{ctx:t}}}}return r&&(e=h(r,l(o)),o[14](e)),{c(){e&&d(e.$$.fragment),n=u()},l(t){e&&N(e.$$.fragment,t),n=u()},m(t,s){e&&w(e,t,s),$(t,n,s),f=!0},p(t,s){if(s&2&&r!==(r=t[1][3])){if(e){R();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}r?(e=h(r,l(t)),t[14](e),d(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(r){const i={};s&64&&(i.data=t[6]),s&4194439&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)}},i(t){f||(e&&p(e.$$.fragment,t),f=!0)},o(t){e&&m(e.$$.fragment,t),f=!1},d(t){t&&k(n),o[14](null),e&&g(e,t)}}}function he(o){let e,n,f;var r=o[1][4];function l(t,s){return{props:{data:t[7],form:t[2]}}}return r&&(e=h(r,l(o)),o[13](e)),{c(){e&&d(e.$$.fragment),n=u()},l(t){e&&N(e.$$.fragment,t),n=u()},m(t,s){e&&w(e,t,s),$(t,n,s),f=!0},p(t,s){if(s&2&&r!==(r=t[1][4])){if(e){R();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}r?(e=h(r,l(t)),t[13](e),d(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(r){const i={};s&128&&(i.data=t[7]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){f||(e&&p(e.$$.fragment,t),f=!0)},o(t){e&&m(e.$$.fragment,t),f=!1},d(t){t&&k(n),o[13](null),e&&g(e,t)}}}function de(o){let e,n,f,r;const l=[pe,me],t=[];function s(i,_){return i[1][4]?0:1}return e=s(o),n=t[e]=l[e](o),{c(){n.c(),f=u()},l(i){n.l(i),f=u()},m(i,_){t[e].m(i,_),$(i,f,_),r=!0},p(i,_){let c=e;e=s(i),e===c?t[e].p(i,_):(R(),m(t[c],1,1,()=>{t[c]=null}),v(),n=t[e],n?n.p(i,_):(n=t[e]=l[e](i),n.c()),p(n,1),n.m(f.parentNode,f))},i(i){r||(p(n),r=!0)},o(i){m(n),r=!1},d(i){i&&k(f),t[e].d(i)}}}function we(o){let e,n,f,r;const l=[ue,ce],t=[];function s(i,_){return i[1][3]?0:1}return e=s(o),n=t[e]=l[e](o),{c(){n.c(),f=u()},l(i){n.l(i),f=u()},m(i,_){t[e].m(i,_),$(i,f,_),r=!0},p(i,_){let c=e;e=s(i),e===c?t[e].p(i,_):(R(),m(t[c],1,1,()=>{t[c]=null}),v(),n=t[e],n?n.p(i,_):(n=t[e]=l[e](i),n.c()),p(n,1),n.m(f.parentNode,f))},i(i){r||(p(n),r=!0)},o(i){m(n),r=!1},d(i){i&&k(f),t[e].d(i)}}}function ge(o){let e,n,f,r;const l=[_e,ae],t=[];function s(i,_){return i[1][2]?0:1}return e=s(o),n=t[e]=l[e](o),{c(){n.c(),f=u()},l(i){n.l(i),f=u()},m(i,_){t[e].m(i,_),$(i,f,_),r=!0},p(i,_){let c=e;e=s(i),e===c?t[e].p(i,_):(R(),m(t[c],1,1,()=>{t[c]=null}),v(),n=t[e],n?n.p(i,_):(n=t[e]=l[e](i),n.c()),p(n,1),n.m(f.parentNode,f))},i(i){r||(p(n),r=!0)},o(i){m(n),r=!1},d(i){i&&k(f),t[e].d(i)}}}function y(o){let e,n=o[9]&&S(o);return{c(){e=x("div"),n&&n.c(),this.h()},l(f){e=ee(f,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=te(e);n&&n.l(r),r.forEach(k),this.h()},h(){O(e,"id","svelte-announcer"),O(e,"aria-live","assertive"),O(e,"aria-atomic","true"),P(e,"position","absolute"),P(e,"left","0"),P(e,"top","0"),P(e,"clip","rect(0 0 0 0)"),P(e,"clip-path","inset(50%)"),P(e,"overflow","hidden"),P(e,"white-space","nowrap"),P(e,"width","1px"),P(e,"height","1px")},m(f,r){$(f,e,r),n&&n.m(e,null)},p(f,r){f[9]?n?n.p(f,r):(n=S(f),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(f){f&&k(e),n&&n.d()}}}function S(o){let e;return{c(){e=ne(o[10])},l(n){e=ie(n,o[10])},m(n,f){$(n,e,f)},p(n,f){f&1024&&re(e,n[10])},d(n){n&&k(e)}}}function be(o){let e,n,f,r,l;const t=[le,oe],s=[];function i(c,b){return c[1][1]?0:1}e=i(o),n=s[e]=t[e](o);let _=o[8]&&y(o);return{c(){n.c(),f=Y(),_&&_.c(),r=u()},l(c){n.l(c),f=Z(c),_&&_.l(c),r=u()},m(c,b){s[e].m(c,b),$(c,f,b),_&&_.m(c,b),$(c,r,b),l=!0},p(c,[b]){let D=e;e=i(c),e===D?s[e].p(c,b):(R(),m(s[D],1,1,()=>{s[D]=null}),v(),n=s[e],n?n.p(c,b):(n=s[e]=t[e](c),n.c()),p(n,1),n.m(f.parentNode,f)),c[8]?_?_.p(c,b):(_=y(c),_.c(),_.m(r.parentNode,r)):_&&(_.d(1),_=null)},i(c){l||(p(n),l=!0)},o(c){m(n),l=!1},d(c){c&&(k(f),k(r)),s[e].d(c),_&&_.d(c)}}}function ke(o,e,n){let{stores:f}=e,{page:r}=e,{constructors:l}=e,{components:t=[]}=e,{form:s}=e,{data_0:i=null}=e,{data_1:_=null}=e,{data_2:c=null}=e,{data_3:b=null}=e,{data_4:D=null}=e;J(f.page.notify);var I=!1,T=!1,V=null;K(()=>{var a=f.page.subscribe(()=>{I&&(n(9,T=!0),M().then(()=>{n(10,V=document.title||"untitled page")}))});return n(8,I=!0),a});function C(a){L[a?"unshift":"push"](()=>{t[4]=a,n(0,t)})}function q(a){L[a?"unshift":"push"](()=>{t[3]=a,n(0,t)})}function B(a){L[a?"unshift":"push"](()=>{t[3]=a,n(0,t)})}function U(a){L[a?"unshift":"push"](()=>{t[2]=a,n(0,t)})}function j(a){L[a?"unshift":"push"](()=>{t[2]=a,n(0,t)})}function W(a){L[a?"unshift":"push"](()=>{t[1]=a,n(0,t)})}function z(a){L[a?"unshift":"push"](()=>{t[1]=a,n(0,t)})}function F(a){L[a?"unshift":"push"](()=>{t[0]=a,n(0,t)})}function G(a){L[a?"unshift":"push"](()=>{t[0]=a,n(0,t)})}return o.$$set=a=>{"stores"in a&&n(11,f=a.stores),"page"in a&&n(12,r=a.page),"constructors"in a&&n(1,l=a.constructors),"components"in a&&n(0,t=a.components),"form"in a&&n(2,s=a.form),"data_0"in a&&n(3,i=a.data_0),"data_1"in a&&n(4,_=a.data_1),"data_2"in a&&n(5,c=a.data_2),"data_3"in a&&n(6,b=a.data_3),"data_4"in a&&n(7,D=a.data_4)},o.$$.update=()=>{o.$$.dirty&6144&&f.page.set(r)},[t,l,s,i,_,c,b,D,I,T,V,f,r,C,q,B,U,j,W,z,F,G]}class Re extends Q{constructor(e){super(),X(this,e,ke,be,H,{stores:11,page:12,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5,data_3:6,data_4:7})}}const Le=[()=>E(()=>import("../nodes/0.9e7071bc.js"),["../nodes/0.9e7071bc.js","../chunks/scheduler.6e0dad25.js","../chunks/index.fbd1e419.js","../assets/0.c2bf842a.css"],import.meta.url),()=>E(()=>import("../nodes/1.ee7e5e9e.js"),["../nodes/1.ee7e5e9e.js","../chunks/scheduler.6e0dad25.js","../chunks/index.fbd1e419.js","../chunks/stores.79ead13e.js","../chunks/singletons.9b7c9550.js"],import.meta.url),()=>E(()=>import("../nodes/2.9411cbfa.js"),["../nodes/2.9411cbfa.js","../chunks/scheduler.6e0dad25.js","../chunks/index.fbd1e419.js","../chunks/NavActions.b0e0566e.js","../chunks/stores.79ead13e.js","../chunks/singletons.9b7c9550.js","../chunks/index.879e9967.js","../assets/NavActions.9afa5215.css","../assets/2.c9182b26.css","../assets/index.d3a88055.css"],import.meta.url),()=>E(()=>import("../nodes/3.c19ba550.js"),["../nodes/3.c19ba550.js","../chunks/scheduler.6e0dad25.js","../chunks/index.fbd1e419.js","../chunks/NavActions.b0e0566e.js","../chunks/stores.79ead13e.js","../chunks/singletons.9b7c9550.js","../chunks/index.879e9967.js","../assets/NavActions.9afa5215.css","../assets/3.fb99f082.css","../assets/index.d3a88055.css"],import.meta.url),()=>E(()=>import("../nodes/4.f5dca1bc.js"),["../nodes/4.f5dca1bc.js","../chunks/scheduler.6e0dad25.js","../chunks/index.fbd1e419.js","../assets/4.bc6825f1.css"],import.meta.url),()=>E(()=>import("../nodes/5.0f9a2e03.js"),["../nodes/5.0f9a2e03.js","../chunks/scheduler.6e0dad25.js","../chunks/index.fbd1e419.js","../chunks/NavActions.b0e0566e.js","../chunks/stores.79ead13e.js","../chunks/singletons.9b7c9550.js","../chunks/index.879e9967.js","../assets/NavActions.9afa5215.css","../assets/5.2b23ae4d.css"],import.meta.url),()=>E(()=>import("../nodes/6.b45b2e96.js"),["../nodes/6.b45b2e96.js","../chunks/scheduler.6e0dad25.js","../chunks/index.fbd1e419.js","../assets/6.df633d0a.css"],import.meta.url),()=>E(()=>import("../nodes/7.0f9a2e03.js"),["../nodes/7.0f9a2e03.js","../chunks/scheduler.6e0dad25.js","../chunks/index.fbd1e419.js","../chunks/NavActions.b0e0566e.js","../chunks/stores.79ead13e.js","../chunks/singletons.9b7c9550.js","../chunks/index.879e9967.js","../assets/NavActions.9afa5215.css","../assets/5.2b23ae4d.css"],import.meta.url),()=>E(()=>import("../nodes/8.0f0d717e.js"),["../nodes/8.0f0d717e.js","../chunks/scheduler.6e0dad25.js","../chunks/index.fbd1e419.js"],import.meta.url),()=>E(()=>import("../nodes/9.dd931ab3.js"),["../nodes/9.dd931ab3.js","../chunks/scheduler.6e0dad25.js","../chunks/index.fbd1e419.js","../chunks/index.879e9967.js","../assets/9.1c181323.css"],import.meta.url),()=>E(()=>import("../nodes/10.1796a9c6.js"),["../nodes/10.1796a9c6.js","../chunks/scheduler.6e0dad25.js","../chunks/index.fbd1e419.js","../assets/10.9700ff65.css"],import.meta.url),()=>E(()=>import("../nodes/11.aee2d5f8.js"),["../nodes/11.aee2d5f8.js","../chunks/scheduler.6e0dad25.js","../chunks/index.fbd1e419.js"],import.meta.url),()=>E(()=>import("../nodes/12.a43b76c9.js"),["../nodes/12.a43b76c9.js","../chunks/scheduler.6e0dad25.js","../chunks/index.fbd1e419.js","../assets/12.b2705376.css"],import.meta.url)],Pe=[],Ne={"/(standard)":[9,[4]],"/(standard)/games":[10,[4,5]],"/(standard)/games/official-taxonomy":[11,[4,5,6]],"/(standard)/portfolio":[12,[4,7]],"/(novels)/shorts/lakeside-horror":[8,[3]]},De={handleError:({error:o})=>{console.error(o)}};export{Ne as dictionary,De as hooks,ve as matchers,Le as nodes,Re as root,Pe as server_loads};
