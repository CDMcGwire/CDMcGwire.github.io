const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CEaAb8Nq.js","../chunks/scheduler.FxVMV482.js","../chunks/index.Bkd_SZ5m.js","../assets/0.Tygd-Lrn.css","../nodes/1.B0RauUPE.js","../chunks/stores.Cervl8No.js","../chunks/entry.C1IrQ9Qa.js","../nodes/2.DQQAiTE9.js","../assets/2.TypxclHz.css","../nodes/3.BPQ00bEv.js","../chunks/NavActions.BWamC_zA.js","../chunks/index.DftxAGa2.js","../assets/NavActions.Bk3xpYgZ.css","../assets/3.DL7s4iKT.css","../nodes/4.d6UaHVns.js","../assets/4.CHrIuXUG.css","../nodes/5.BPQ00bEv.js","../nodes/6.Rpxkm7ta.js","../assets/6.DwDDpNSe.css","../nodes/7.BY9u9isw.js","../assets/7.DFLt-gIt.css","../nodes/8.nE9KbIY2.js","../assets/8.DWZuajtN.css","../nodes/9.nECz4t4E.js","../nodes/10.rq3uiGH5.js","../assets/10.COIxK2fX.css","../nodes/11.MS7HncWA.js","../nodes/12.DIx9gZal.js","../assets/12.CxbBy9cM.css","../nodes/13.MS7HncWA.js","../nodes/14.DZ_rtykC.js"])))=>i.map(i=>d[i]);
import{s as H,h as J,o as K,j as L,t as Q}from"../chunks/scheduler.FxVMV482.js";import{S as X,i as Y,s as Z,x as u,f as M,j as k,n as m,y as v,m as p,d as b,e as x,c as ee,a as te,h as V,z as A,t as ne,b as ie,l as re,A as P,B as d,o as h,p as D,q as w,u as g}from"../chunks/index.Bkd_SZ5m.js";const se="modulepreload",oe=function(f,e){return new URL(f,e).href},N={},$=function(e,n,o){let s=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),i=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=oe(l,o),l in N)return;N[l]=!0;const c=l.endsWith(".css"),E=c?'[rel="stylesheet"]':"";if(!!o)for(let I=t.length-1;I>=0;I--){const T=t[I];if(T.href===l&&(!c||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${E}`))return;const R=document.createElement("link");if(R.rel=c?"stylesheet":se,c||(R.as="script"),R.crossOrigin="",R.href=l,i&&R.setAttribute("nonce",i),document.head.appendChild(R),c)return new Promise((I,T)=>{R.addEventListener("load",I),R.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${l}`)))})}))}function _(t){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t}return s.then(t=>{for(const r of t||[])r.status==="rejected"&&_(r.reason);return e().catch(_)})},ve={};function fe(f){let e,n,o;var s=f[1][0];function _(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=d(s,_(f)),f[21](e)),{c(){e&&h(e.$$.fragment),n=u()},l(t){e&&D(e.$$.fragment,t),n=u()},m(t,r){e&&w(e,t,r),k(t,n,r),o=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){P();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}s?(e=d(s,_(t)),t[21](e),h(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(s){const i={};r&8&&(i.data=t[3]),r&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&p(e.$$.fragment,t),o=!0)},o(t){e&&m(e.$$.fragment,t),o=!1},d(t){t&&b(n),f[21](null),e&&g(e,t)}}}function le(f){let e,n,o;var s=f[1][0];function _(t,r){return{props:{data:t[3],$$slots:{default:[ge]},$$scope:{ctx:t}}}}return s&&(e=d(s,_(f)),f[20](e)),{c(){e&&h(e.$$.fragment),n=u()},l(t){e&&D(e.$$.fragment,t),n=u()},m(t,r){e&&w(e,t,r),k(t,n,r),o=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){P();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}s?(e=d(s,_(t)),t[20](e),h(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(s){const i={};r&8&&(i.data=t[3]),r&4194551&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)}},i(t){o||(e&&p(e.$$.fragment,t),o=!0)},o(t){e&&m(e.$$.fragment,t),o=!1},d(t){t&&b(n),f[20](null),e&&g(e,t)}}}function ae(f){let e,n,o;var s=f[1][1];function _(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=d(s,_(f)),f[19](e)),{c(){e&&h(e.$$.fragment),n=u()},l(t){e&&D(e.$$.fragment,t),n=u()},m(t,r){e&&w(e,t,r),k(t,n,r),o=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){P();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}s?(e=d(s,_(t)),t[19](e),h(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(s){const i={};r&16&&(i.data=t[4]),r&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&p(e.$$.fragment,t),o=!0)},o(t){e&&m(e.$$.fragment,t),o=!1},d(t){t&&b(n),f[19](null),e&&g(e,t)}}}function _e(f){let e,n,o;var s=f[1][1];function _(t,r){return{props:{data:t[4],$$slots:{default:[we]},$$scope:{ctx:t}}}}return s&&(e=d(s,_(f)),f[18](e)),{c(){e&&h(e.$$.fragment),n=u()},l(t){e&&D(e.$$.fragment,t),n=u()},m(t,r){e&&w(e,t,r),k(t,n,r),o=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){P();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}s?(e=d(s,_(t)),t[18](e),h(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(s){const i={};r&16&&(i.data=t[4]),r&4194535&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)}},i(t){o||(e&&p(e.$$.fragment,t),o=!0)},o(t){e&&m(e.$$.fragment,t),o=!1},d(t){t&&b(n),f[18](null),e&&g(e,t)}}}function ce(f){let e,n,o;var s=f[1][2];function _(t,r){return{props:{data:t[5],form:t[2]}}}return s&&(e=d(s,_(f)),f[17](e)),{c(){e&&h(e.$$.fragment),n=u()},l(t){e&&D(e.$$.fragment,t),n=u()},m(t,r){e&&w(e,t,r),k(t,n,r),o=!0},p(t,r){if(r&2&&s!==(s=t[1][2])){if(e){P();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}s?(e=d(s,_(t)),t[17](e),h(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(s){const i={};r&32&&(i.data=t[5]),r&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&p(e.$$.fragment,t),o=!0)},o(t){e&&m(e.$$.fragment,t),o=!1},d(t){t&&b(n),f[17](null),e&&g(e,t)}}}function ue(f){let e,n,o;var s=f[1][2];function _(t,r){return{props:{data:t[5],$$slots:{default:[he]},$$scope:{ctx:t}}}}return s&&(e=d(s,_(f)),f[16](e)),{c(){e&&h(e.$$.fragment),n=u()},l(t){e&&D(e.$$.fragment,t),n=u()},m(t,r){e&&w(e,t,r),k(t,n,r),o=!0},p(t,r){if(r&2&&s!==(s=t[1][2])){if(e){P();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}s?(e=d(s,_(t)),t[16](e),h(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(s){const i={};r&32&&(i.data=t[5]),r&4194503&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)}},i(t){o||(e&&p(e.$$.fragment,t),o=!0)},o(t){e&&m(e.$$.fragment,t),o=!1},d(t){t&&b(n),f[16](null),e&&g(e,t)}}}function me(f){let e,n,o;var s=f[1][3];function _(t,r){return{props:{data:t[6],form:t[2]}}}return s&&(e=d(s,_(f)),f[15](e)),{c(){e&&h(e.$$.fragment),n=u()},l(t){e&&D(e.$$.fragment,t),n=u()},m(t,r){e&&w(e,t,r),k(t,n,r),o=!0},p(t,r){if(r&2&&s!==(s=t[1][3])){if(e){P();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}s?(e=d(s,_(t)),t[15](e),h(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(s){const i={};r&64&&(i.data=t[6]),r&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&p(e.$$.fragment,t),o=!0)},o(t){e&&m(e.$$.fragment,t),o=!1},d(t){t&&b(n),f[15](null),e&&g(e,t)}}}function pe(f){let e,n,o;var s=f[1][3];function _(t,r){return{props:{data:t[6],$$slots:{default:[de]},$$scope:{ctx:t}}}}return s&&(e=d(s,_(f)),f[14](e)),{c(){e&&h(e.$$.fragment),n=u()},l(t){e&&D(e.$$.fragment,t),n=u()},m(t,r){e&&w(e,t,r),k(t,n,r),o=!0},p(t,r){if(r&2&&s!==(s=t[1][3])){if(e){P();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}s?(e=d(s,_(t)),t[14](e),h(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(s){const i={};r&64&&(i.data=t[6]),r&4194439&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)}},i(t){o||(e&&p(e.$$.fragment,t),o=!0)},o(t){e&&m(e.$$.fragment,t),o=!1},d(t){t&&b(n),f[14](null),e&&g(e,t)}}}function de(f){let e,n,o;var s=f[1][4];function _(t,r){return{props:{data:t[7],form:t[2]}}}return s&&(e=d(s,_(f)),f[13](e)),{c(){e&&h(e.$$.fragment),n=u()},l(t){e&&D(e.$$.fragment,t),n=u()},m(t,r){e&&w(e,t,r),k(t,n,r),o=!0},p(t,r){if(r&2&&s!==(s=t[1][4])){if(e){P();const i=e;m(i.$$.fragment,1,0,()=>{g(i,1)}),v()}s?(e=d(s,_(t)),t[13](e),h(e.$$.fragment),p(e.$$.fragment,1),w(e,n.parentNode,n)):e=null}else if(s){const i={};r&128&&(i.data=t[7]),r&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&p(e.$$.fragment,t),o=!0)},o(t){e&&m(e.$$.fragment,t),o=!1},d(t){t&&b(n),f[13](null),e&&g(e,t)}}}function he(f){let e,n,o,s;const _=[pe,me],t=[];function r(i,l){return i[1][4]?0:1}return e=r(f),n=t[e]=_[e](f),{c(){n.c(),o=u()},l(i){n.l(i),o=u()},m(i,l){t[e].m(i,l),k(i,o,l),s=!0},p(i,l){let c=e;e=r(i),e===c?t[e].p(i,l):(P(),m(t[c],1,1,()=>{t[c]=null}),v(),n=t[e],n?n.p(i,l):(n=t[e]=_[e](i),n.c()),p(n,1),n.m(o.parentNode,o))},i(i){s||(p(n),s=!0)},o(i){m(n),s=!1},d(i){i&&b(o),t[e].d(i)}}}function we(f){let e,n,o,s;const _=[ue,ce],t=[];function r(i,l){return i[1][3]?0:1}return e=r(f),n=t[e]=_[e](f),{c(){n.c(),o=u()},l(i){n.l(i),o=u()},m(i,l){t[e].m(i,l),k(i,o,l),s=!0},p(i,l){let c=e;e=r(i),e===c?t[e].p(i,l):(P(),m(t[c],1,1,()=>{t[c]=null}),v(),n=t[e],n?n.p(i,l):(n=t[e]=_[e](i),n.c()),p(n,1),n.m(o.parentNode,o))},i(i){s||(p(n),s=!0)},o(i){m(n),s=!1},d(i){i&&b(o),t[e].d(i)}}}function ge(f){let e,n,o,s;const _=[_e,ae],t=[];function r(i,l){return i[1][2]?0:1}return e=r(f),n=t[e]=_[e](f),{c(){n.c(),o=u()},l(i){n.l(i),o=u()},m(i,l){t[e].m(i,l),k(i,o,l),s=!0},p(i,l){let c=e;e=r(i),e===c?t[e].p(i,l):(P(),m(t[c],1,1,()=>{t[c]=null}),v(),n=t[e],n?n.p(i,l):(n=t[e]=_[e](i),n.c()),p(n,1),n.m(o.parentNode,o))},i(i){s||(p(n),s=!0)},o(i){m(n),s=!1},d(i){i&&b(o),t[e].d(i)}}}function y(f){let e,n=f[9]&&S(f);return{c(){e=x("div"),n&&n.c(),this.h()},l(o){e=ee(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=te(e);n&&n.l(s),s.forEach(b),this.h()},h(){V(e,"id","svelte-announcer"),V(e,"aria-live","assertive"),V(e,"aria-atomic","true"),A(e,"position","absolute"),A(e,"left","0"),A(e,"top","0"),A(e,"clip","rect(0 0 0 0)"),A(e,"clip-path","inset(50%)"),A(e,"overflow","hidden"),A(e,"white-space","nowrap"),A(e,"width","1px"),A(e,"height","1px")},m(o,s){k(o,e,s),n&&n.m(e,null)},p(o,s){o[9]?n?n.p(o,s):(n=S(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&b(e),n&&n.d()}}}function S(f){let e;return{c(){e=ne(f[10])},l(n){e=ie(n,f[10])},m(n,o){k(n,e,o)},p(n,o){o&1024&&re(e,n[10])},d(n){n&&b(e)}}}function be(f){let e,n,o,s,_;const t=[le,fe],r=[];function i(c,E){return c[1][1]?0:1}e=i(f),n=r[e]=t[e](f);let l=f[8]&&y(f);return{c(){n.c(),o=Z(),l&&l.c(),s=u()},l(c){n.l(c),o=M(c),l&&l.l(c),s=u()},m(c,E){r[e].m(c,E),k(c,o,E),l&&l.m(c,E),k(c,s,E),_=!0},p(c,[E]){let O=e;e=i(c),e===O?r[e].p(c,E):(P(),m(r[O],1,1,()=>{r[O]=null}),v(),n=r[e],n?n.p(c,E):(n=r[e]=t[e](c),n.c()),p(n,1),n.m(o.parentNode,o)),c[8]?l?l.p(c,E):(l=y(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){_||(p(n),_=!0)},o(c){m(n),_=!1},d(c){c&&(b(o),b(s)),r[e].d(c),l&&l.d(c)}}}function ke(f,e,n){let{stores:o}=e,{page:s}=e,{constructors:_}=e,{components:t=[]}=e,{form:r}=e,{data_0:i=null}=e,{data_1:l=null}=e,{data_2:c=null}=e,{data_3:E=null}=e,{data_4:O=null}=e;J(o.page.notify);var R=!1,I=!1,T=null;K(()=>{var a=o.page.subscribe(()=>{R&&(n(9,I=!0),Q().then(()=>{n(10,T=document.title||"untitled page")}))});return n(8,R=!0),a});function q(a){L[a?"unshift":"push"](()=>{t[4]=a,n(0,t)})}function B(a){L[a?"unshift":"push"](()=>{t[3]=a,n(0,t)})}function C(a){L[a?"unshift":"push"](()=>{t[3]=a,n(0,t)})}function j(a){L[a?"unshift":"push"](()=>{t[2]=a,n(0,t)})}function U(a){L[a?"unshift":"push"](()=>{t[2]=a,n(0,t)})}function z(a){L[a?"unshift":"push"](()=>{t[1]=a,n(0,t)})}function W(a){L[a?"unshift":"push"](()=>{t[1]=a,n(0,t)})}function F(a){L[a?"unshift":"push"](()=>{t[0]=a,n(0,t)})}function G(a){L[a?"unshift":"push"](()=>{t[0]=a,n(0,t)})}return f.$$set=a=>{"stores"in a&&n(11,o=a.stores),"page"in a&&n(12,s=a.page),"constructors"in a&&n(1,_=a.constructors),"components"in a&&n(0,t=a.components),"form"in a&&n(2,r=a.form),"data_0"in a&&n(3,i=a.data_0),"data_1"in a&&n(4,l=a.data_1),"data_2"in a&&n(5,c=a.data_2),"data_3"in a&&n(6,E=a.data_3),"data_4"in a&&n(7,O=a.data_4)},f.$$.update=()=>{f.$$.dirty&6144&&o.page.set(s)},[t,_,r,i,l,c,E,O,R,I,T,o,s,q,B,C,j,U,z,W,F,G]}class Pe extends X{constructor(e){super(),Y(this,e,ke,be,H,{stores:11,page:12,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5,data_3:6,data_4:7})}}const Re=[()=>$(()=>import("../nodes/0.CEaAb8Nq.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>$(()=>import("../nodes/1.B0RauUPE.js"),__vite__mapDeps([4,1,2,5,6]),import.meta.url),()=>$(()=>import("../nodes/2.DQQAiTE9.js"),__vite__mapDeps([7,1,2,8]),import.meta.url),()=>$(()=>import("../nodes/3.BPQ00bEv.js"),__vite__mapDeps([9,1,2,10,5,6,11,12,13]),import.meta.url),()=>$(()=>import("../nodes/4.d6UaHVns.js"),__vite__mapDeps([14,1,2,15]),import.meta.url),()=>$(()=>import("../nodes/5.BPQ00bEv.js"),__vite__mapDeps([16,1,2,10,5,6,11,12,13]),import.meta.url),()=>$(()=>import("../nodes/6.Rpxkm7ta.js"),__vite__mapDeps([17,1,2,10,5,6,11,12,18]),import.meta.url),()=>$(()=>import("../nodes/7.BY9u9isw.js"),__vite__mapDeps([19,1,2,11,20]),import.meta.url),()=>$(()=>import("../nodes/8.nE9KbIY2.js"),__vite__mapDeps([21,1,2,22]),import.meta.url),()=>$(()=>import("../nodes/9.nECz4t4E.js"),__vite__mapDeps([23,1,2]),import.meta.url),()=>$(()=>import("../nodes/10.rq3uiGH5.js"),__vite__mapDeps([24,1,2,25]),import.meta.url),()=>$(()=>import("../nodes/11.MS7HncWA.js"),__vite__mapDeps([26,1,2]),import.meta.url),()=>$(()=>import("../nodes/12.DIx9gZal.js"),__vite__mapDeps([27,1,2,28]),import.meta.url),()=>$(()=>import("../nodes/13.MS7HncWA.js"),__vite__mapDeps([29,1,2]),import.meta.url),()=>$(()=>import("../nodes/14.DZ_rtykC.js"),__vite__mapDeps([30,1,2]),import.meta.url)],Le=[],Ae={"/(standard)":[7,[2]],"/(standard)/games":[8,[2,3]],"/(standard)/games/official-taxonomy":[9,[2,3,4]],"/(standard)/portfolio":[10,[2,5]],"/(stories)/shorts/lakeside-horror":[11],"/(stories)/stories":[12,[6]],"/(stories)/stories/(content)/lakeside-inheritance":[13,[6]],"/(stories)/stories/(content)/metanoia-book1-intro":[14,[6]]},De={handleError:({error:f})=>{console.error(f)},reroute:()=>{}};export{Ae as dictionary,De as hooks,ve as matchers,Re as nodes,Pe as root,Le as server_loads};