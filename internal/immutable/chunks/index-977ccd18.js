function w(){}const L=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function V(){return Object.create(null)}function v(t){t.forEach(Z)}function B(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function zt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function _t(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Bt(t,e,n){t.$$.on_destroy.push(dt(e,n))}function Tt(t,e,n,s){if(t){const r=tt(t,e,n,s);return t[0](r)}}function tt(t,e,n,s){return t[1]&&s?ft(n.ctx.slice(),t[1](s(e))):n.ctx}function Ft(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],i=Math.max(e.dirty.length,r.length);for(let o=0;o<i;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Ht(t,e,n,s,r,u){if(r){const i=tt(e,n,s,u);t.p(i,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}const et=typeof window<"u";let G=et?()=>window.performance.now():()=>Date.now(),J=et?t=>requestAnimationFrame(t):w;const E=new Set;function nt(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&J(nt)}function K(t){let e;return E.size===0&&J(nt),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let T=!1;function ht(){T=!0}function mt(){T=!1}function pt(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const _=e[c];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,_=(r>0&&e[n[r]].claim_order<=c?r+1:pt(1,r,a=>e[n[a]].claim_order,c))-1;s[l]=n[_]+1;const f=_+1;n[f]=l,r=Math.max(f,r)}const u=[],i=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=s[l-1]){for(u.push(e[l-1]);o>=l;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);u.reverse(),i.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<i.length;l++){for(;c<u.length&&i[l].claim_order>=u[c].claim_order;)c++;const _=c<u.length?u[c]:null;t.insertBefore(i[l],_)}}function yt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=rt("style");return bt(it(t),e),e.sheet}function bt(t,e){yt(t.head||t,e)}function $t(t,e){if(T){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){T&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function wt(t){t.parentNode.removeChild(t)}function rt(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function Gt(){return Q(" ")}function Jt(){return Q("")}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,s,r=!1){kt(t);const u=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const l=n(o);return l===void 0?t.splice(i,1):t[i]=l,r||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const l=n(o);return l===void 0?t.splice(i,1):t[i]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return s()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function lt(t,e,n,s){return st(t,r=>r.nodeName===e,r=>{const u=[];for(let i=0;i<r.attributes.length;i++){const o=r.attributes[i];n[o.name]||u.push(o.name)}u.forEach(i=>r.removeAttribute(i))},()=>s(e))}function Qt(t,e,n){return lt(t,e,n,rt)}function Wt(t,e,n){return lt(t,e,n,vt)}function Nt(t,e){return st(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>Q(e),!0)}function Ut(t){return Nt(t," ")}function Vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Xt(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Ct(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}const R=new Map;let q=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:xt(e),rules:{}};return R.set(t,n),n}function D(t,e,n,s,r,u,i,o=0){const l=16.666/s;let c=`{
`;for(let m=0;m<=1;m+=l){const y=e+(n-e)*u(m);c+=m*100+`%{${i(y,1-y)}}
`}const _=c+`100% {${i(n,1-n)}}
}`,f=`__svelte_${At(_)}_${o}`,a=it(t),{stylesheet:d,rules:h}=R.get(a)||St(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${s}ms linear ${r}ms 1 both`,q+=1,f}function z(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),q-=r,q||jt())}function jt(){J(()=>{q||(R.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),R.clear())})}let S;function A(t){S=t}function F(){if(!S)throw new Error("Function called outside component initialization");return S}function Yt(t){F().$$.on_mount.push(t)}function Zt(t){F().$$.after_update.push(t)}function te(t,e){return F().$$.context.set(t,e),e}function ee(t){return F().$$.context.get(t)}const C=[],X=[],O=[],Y=[],ct=Promise.resolve();let I=!1;function ut(){I||(I=!0,ct.then(ot))}function ne(){return ut(),ct}function k(t){O.push(t)}const H=new Set;let M=0;function ot(){const t=S;do{for(;M<C.length;){const e=C[M];M++,A(e),Mt(e.$$)}for(A(null),C.length=0,M=0;X.length;)X.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];H.has(n)||(H.add(n),n())}O.length=0}while(C.length);for(;Y.length;)Y.pop()();I=!1,H.clear(),A(t)}function Mt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let N;function W(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function $(t,e,n){t.dispatchEvent(Ct(`${e?"intro":"outro"}${n}`))}const P=new Set;let g;function ie(){g={r:0,c:[],p:g}}function re(){g.r||v(g.c),g=g.p}function Ot(t,e){t&&t.i&&(P.delete(t),t.i(e))}function se(t,e,n,s){if(t&&t.o){if(P.has(t))return;P.add(t),g.c.push(()=>{P.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const U={duration:0};function le(t,e,n){let s=e(t,n),r=!1,u,i,o=0;function l(){u&&z(t,u)}function c(){const{delay:f=0,duration:a=300,easing:d=L,tick:h=w,css:p}=s||U;p&&(u=D(t,0,1,a,f,d,p,o++)),h(0,1);const m=G()+f,y=m+a;i&&i.abort(),r=!0,k(()=>$(t,!0,"start")),i=K(x=>{if(r){if(x>=y)return h(1,0),$(t,!0,"end"),l(),r=!1;if(x>=m){const b=d((x-m)/a);h(b,1-b)}}return r})}let _=!1;return{start(){_||(_=!0,z(t),B(s)?(s=s(),W().then(c)):c())},invalidate(){_=!1},end(){r&&(l(),r=!1)}}}function ce(t,e,n){let s=e(t,n),r=!0,u;const i=g;i.r+=1;function o(){const{delay:l=0,duration:c=300,easing:_=L,tick:f=w,css:a}=s||U;a&&(u=D(t,1,0,c,l,_,a));const d=G()+l,h=d+c;k(()=>$(t,!1,"start")),K(p=>{if(r){if(p>=h)return f(0,1),$(t,!1,"end"),--i.r||v(i.c),!1;if(p>=d){const m=_((p-d)/c);f(1-m,m)}}return r})}return B(s)?W().then(()=>{s=s(),o()}):o(),{end(l){l&&s.tick&&s.tick(1,0),r&&(u&&z(t,u),r=!1)}}}function ue(t,e,n,s){let r=e(t,n),u=s?0:1,i=null,o=null,l=null;function c(){l&&z(t,l)}function _(a,d){const h=a.b-u;return d*=Math.abs(h),{a:u,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:p=L,tick:m=w,css:y}=r||U,x={start:G()+d,b:a};a||(x.group=g,g.r+=1),i||o?o=x:(y&&(c(),l=D(t,u,a,h,d,p,y)),a&&m(0,1),i=_(x,h),k(()=>$(t,a,"start")),K(b=>{if(o&&b>o.start&&(i=_(o,h),o=null,$(t,i.b,"start"),y&&(c(),l=D(t,u,i.b,i.duration,0,p,r.css))),i){if(b>=i.end)m(u=i.b,1-u),$(t,i.b,"end"),o||(i.b?c():--i.group.r||v(i.group.c)),i=null;else if(b>=i.start){const at=b-i.start;u=i.a+i.d*p(at/i.duration),m(u,1-u)}}return!!(i||o)}))}return{run(a){B(r)?W().then(()=>{r=r(),f(a)}):f(a)},end(){c(),i=o=null}}}function oe(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function Pt(t,e,n,s){const{fragment:r,on_mount:u,on_destroy:i,after_update:o}=t.$$;r&&r.m(e,n),s||k(()=>{const l=u.map(Z).filter(B);i?i.push(...l):v(l),t.$$.on_mount=[]}),o.forEach(k)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(C.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,s,r,u,i,o=[-1]){const l=S;A(t);const c=t.$$={fragment:null,ctx:null,props:u,update:w,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:V(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};i&&i(c.root);let _=!1;if(c.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return c.ctx&&r(c.ctx[f],c.ctx[f]=h)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](h),_&&qt(t,f)),a}):[],c.update(),_=!0,v(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){ht();const f=Et(e.target);c.fragment&&c.fragment.l(f),f.forEach(wt)}else c.fragment&&c.fragment.c();e.intro&&Ot(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),mt(),ot()}A(l)}class _e{$destroy(){Rt(this,1),this.$destroy=w}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Rt as A,ne as B,Tt as C,Ht as D,It as E,Ft as F,$t as G,Bt as H,ee as I,k as J,ce as K,le as L,ue as M,L as N,vt as O,Wt as P,zt as Q,_e as S,Gt as a,Lt as b,Ut as c,re as d,Jt as e,Ot as f,ie as g,wt as h,fe as i,te as j,Zt as k,rt as l,Qt as m,w as n,Yt as o,Et as p,Kt as q,Xt as r,Dt as s,se as t,Q as u,Nt as v,Vt as w,oe as x,ae as y,Pt as z};