'use strict';var wu=Object.create;var Zn=Object.defineProperty;var ku=Object.getOwnPropertyDescriptor;var _u=Object.getOwnPropertyNames;var zu=Object.getPrototypeOf,Su=Object.prototype.hasOwnProperty;var Rt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),ao=(e,t)=>{for(var n in t)Zn(e,n,{get:t[n],enumerable:true});},Cu=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of _u(t))!Su.call(e,i)&&i!==n&&Zn(e,i,{get:()=>t[i],enumerable:!(r=ku(t,i))||r.enumerable});return e};var lo=(e,t,n)=>(n=e!=null?wu(zu(e)):{},Cu(Zn(n,"default",{value:e,enumerable:true}),e));var Ua=Rt((ty,Oa)=>{var Da=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Ac=/\n/g,Ic=/^\s*/,Tc=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Pc=/^:\s*/,Lc=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Rc=/^[;\s]*/,Dc=/^\s+|\s+$/g,Mc=`
`,Ma="/",Na="*",tt="",Nc="comment",Fc="declaration";function Oc(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return [];t=t||{};var n=1,r=1;function i(h){var v=h.match(Ac);v&&(n+=v.length);var w=h.lastIndexOf(Mc);r=~w?h.length-w:r+h.length;}function o(){var h={line:n,column:r};return function(v){return v.position=new a(h),u(),v}}function a(h){this.start=h,this.end={line:n,column:r},this.source=t.source;}a.prototype.content=e;function l(h){var v=new Error(t.source+":"+n+":"+r+": "+h);if(v.reason=h,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function s(h){var v=h.exec(e);if(v){var w=v[0];return i(w),e=e.slice(w.length),v}}function u(){s(Ic);}function p(h){var v;for(h=h||[];v=c();)v!==false&&h.push(v);return h}function c(){var h=o();if(!(Ma!=e.charAt(0)||Na!=e.charAt(1))){for(var v=2;tt!=e.charAt(v)&&(Na!=e.charAt(v)||Ma!=e.charAt(v+1));)++v;if(v+=2,tt===e.charAt(v-1))return l("End of comment missing");var w=e.slice(2,v-2);return r+=2,i(w),e=e.slice(v),r+=2,h({type:Nc,comment:w})}}function m(){var h=o(),v=s(Tc);if(v){if(c(),!s(Pc))return l("property missing ':'");var w=s(Lc),y=h({type:Fc,property:Fa(v[0].replace(Da,tt)),value:w?Fa(w[0].replace(Da,tt)):tt});return s(Rc),y}}function f(){var h=[];p(h);for(var v;v=m();)v!==false&&(h.push(v),p(h));return h}return u(),f()}function Fa(e){return e?e.replace(Dc,tt):tt}Oa.exports=Oc;});var Ba=Rt(Bt=>{var Uc=Bt&&Bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bt,"__esModule",{value:true});Bt.default=Hc;var Bc=Uc(Ua());function Hc(e,t){let n=null;if(!e||typeof e!="string")return n;let r=(0, Bc.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;let{property:a,value:l}=o;i?t(a,l,o):l&&(n=n||{},n[a]=l);}),n}});var ja=Rt(kn=>{Object.defineProperty(kn,"__esModule",{value:true});kn.camelCase=void 0;var jc=/^--[a-zA-Z0-9_-]+$/,$c=/-([a-z])/g,Wc=/^[^-]+$/,Vc=/^-(webkit|moz|ms|o|khtml)-/,qc=/^-(ms)-/,Yc=function(e){return !e||Wc.test(e)||jc.test(e)},Kc=function(e,t){return t.toUpperCase()},Ha=function(e,t){return "".concat(t,"-")},Xc=function(e,t){return t===void 0&&(t={}),Yc(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(qc,Ha):e=e.replace(Vc,Ha),e.replace($c,Kc))};kn.camelCase=Xc;});var Wa=Rt((Dr,$a)=>{var Gc=Dr&&Dr.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Jc=Gc(Ba()),Qc=ja();function Rr(e,t){var n={};return !e||typeof e!="string"||(0, Jc.default)(e,function(r,i){r&&i&&(n[(0, Qc.camelCase)(r,t)]=i);}),n}Rr.default=Rr;$a.exports=Rr;});var hs=Rt((Pk,ms)=>{var qn=Object.prototype.hasOwnProperty,fs=Object.prototype.toString,as=Object.defineProperty,ls=Object.getOwnPropertyDescriptor,ss=function(t){return typeof Array.isArray=="function"?Array.isArray(t):fs.call(t)==="[object Array]"},us=function(t){if(!t||fs.call(t)!=="[object Object]")return  false;var n=qn.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&qn.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return  false;var i;for(i in t);return typeof i>"u"||qn.call(t,i)},cs=function(t,n){as&&n.name==="__proto__"?as(t,n.name,{enumerable:true,configurable:true,value:n.newValue,writable:true}):t[n.name]=n.newValue;},ps=function(t,n){if(n==="__proto__")if(qn.call(t,n)){if(ls)return ls(t,n).value}else return;return t[n]};ms.exports=function e(){var t,n,r,i,o,a,l=arguments[0],s=1,u=arguments.length,p=false;for(typeof l=="boolean"&&(p=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(t=arguments[s],t!=null)for(n in t)r=ps(l,n),i=ps(t,n),l!==i&&(p&&i&&(us(i)||(o=ss(i)))?(o?(o=false,a=r&&ss(r)?r:[]):a=r&&us(r)?r:{},cs(l,{name:n,newValue:e(p,a,i)})):typeof i<"u"&&cs(l,{name:n,newValue:i}));return l};});var on,N,fo,Je,so,mo,ho,go,rr,er,tr,Dt={},yo=[],Iu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Mt=Array.isArray;function Fe(e,t){for(var n in t)e[n]=t[n];return e}function ir(e){e&&e.parentNode&&e.parentNode.removeChild(e);}function Ie(e,t,n){var r,i,o,a={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?on.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return nn(e,a,r,i,null)}function nn(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++fo,__i:-1,__u:0};return i==null&&N.vnode!=null&&N.vnode(o),o}function be(e){return e.children}function Ce(e,t){this.props=e,this.context=t;}function mt(e,t){if(t==null)return e.__?mt(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?mt(e):null}function vo(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return vo(e)}}function uo(e){(!e.__d&&(e.__d=true)&&Je.push(e)&&!rn.__r++||so!=N.debounceRendering)&&((so=N.debounceRendering)||mo)(rn);}function rn(){for(var e,t,n,r,i,o,a,l=1;Je.length;)Je.length>l&&Je.sort(ho),e=Je.shift(),l=Je.length,e.__d&&(n=void 0,r=void 0,i=(r=(t=e).__v).__e,o=[],a=[],t.__P&&((n=Fe({},r)).__v=r.__v+1,N.vnode&&N.vnode(n),or(t.__P,n,r,t.__n,t.__P.namespaceURI,32&r.__u?[i]:null,o,i??mt(r),!!(32&r.__u),a),n.__v=r.__v,n.__.__k[n.__i]=n,wo(o,n,a),r.__e=r.__=null,n.__e!=i&&vo(n)));rn.__r=0;}function xo(e,t,n,r,i,o,a,l,s,u,p){var c,m,f,h,v,w,y,z=r&&r.__k||yo,S=t.length;for(s=Tu(n,t,z,s,S),c=0;c<S;c++)(f=n.__k[c])!=null&&(m=f.__i==-1?Dt:z[f.__i]||Dt,f.__i=c,w=or(e,f,m,i,o,a,l,s,u,p),h=f.__e,f.ref&&m.ref!=f.ref&&(m.ref&&ar(m.ref,null,f),p.push(f.ref,f.__c||h,f)),v==null&&h!=null&&(v=h),(y=!!(4&f.__u))||m.__k===f.__k?s=bo(f,s,e,y):typeof f.type=="function"&&w!==void 0?s=w:h&&(s=h.nextSibling),f.__u&=-7);return n.__e=v,s}function Tu(e,t,n,r,i){var o,a,l,s,u,p=n.length,c=p,m=0;for(e.__k=new Array(i),o=0;o<i;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[o]=nn(null,a,null,null,null):Mt(a)?a=e.__k[o]=nn(be,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[o]=nn(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[o]=a,s=o+m,a.__=e,a.__b=e.__b+1,l=null,(u=a.__i=Pu(a,n,s,c))!=-1&&(c--,(l=n[u])&&(l.__u|=2)),l==null||l.__v==null?(u==-1&&(i>p?m--:i<p&&m++),typeof a.type!="function"&&(a.__u|=4)):u!=s&&(u==s-1?m--:u==s+1?m++:(u>s?m--:m++,a.__u|=4))):e.__k[o]=null;if(c)for(o=0;o<p;o++)(l=n[o])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=mt(l)),_o(l,l));return r}function bo(e,t,n,r){var i,o;if(typeof e.type=="function"){for(i=e.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=e,t=bo(i[o],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=mt(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Nt(e,t){return t=t||[],e==null||typeof e=="boolean"||(Mt(e)?e.some(function(n){Nt(n,t);}):t.push(e)),t}function Pu(e,t,n,r){var i,o,a,l=e.key,s=e.type,u=t[n],p=u!=null&&(2&u.__u)==0;if(u===null&&l==null||p&&l==u.key&&s==u.type)return n;if(r>(p?1:0)){for(i=n-1,o=n+1;i>=0||o<t.length;)if((u=t[a=i>=0?i--:o++])!=null&&(2&u.__u)==0&&l==u.key&&s==u.type)return a}return  -1}function co(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Iu.test(t)?n:n+"px";}function tn(e,t,n,r,i){var o,a;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else {if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||co(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||co(e.style,t,n[t]);}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(go,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=rr,e.addEventListener(t,o?tr:er,o)):e.removeEventListener(t,o?tr:er,o);else {if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===false&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n));}}function po(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=rr++;else if(t.t<n.u)return;return n(N.event?N.event(t):t)}}}function or(e,t,n,r,i,o,a,l,s,u){var p,c,m,f,h,v,w,y,z,S,R,M,k,V,Y,$,b,X=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),o=[l=t.__e=n.__e]),(p=N.__b)&&p(t);e:if(typeof X=="function")try{if(y=t.props,z="prototype"in X&&X.prototype.render,S=(p=X.contextType)&&r[p.__c],R=p?S?S.props.value:p.__:r,n.__c?w=(c=t.__c=n.__c).__=c.__E:(z?t.__c=c=new X(y,R):(t.__c=c=new Ce(y,R),c.constructor=X,c.render=Ru),S&&S.sub(c),c.state||(c.state={}),c.__n=r,m=c.__d=!0,c.__h=[],c._sb=[]),z&&c.__s==null&&(c.__s=c.state),z&&X.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Fe({},c.__s)),Fe(c.__s,X.getDerivedStateFromProps(y,c.__s))),f=c.props,h=c.state,c.__v=t,m)z&&X.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),z&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else {if(z&&X.getDerivedStateFromProps==null&&y!==f&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,R),t.__v==n.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,R)===!1){for(t.__v!=n.__v&&(c.props=y,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(O){O&&(O.__=t);}),M=0;M<c._sb.length;M++)c.__h.push(c._sb[M]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,R),z&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(f,h,v);});}if(c.context=R,c.props=y,c.__P=e,c.__e=!1,k=N.__r,V=0,z){for(c.state=c.__s,c.__d=!1,k&&k(t),p=c.render(c.props,c.state,c.context),Y=0;Y<c._sb.length;Y++)c.__h.push(c._sb[Y]);c._sb=[];}else do c.__d=!1,k&&k(t),p=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++V<25);c.state=c.__s,c.getChildContext!=null&&(r=Fe(Fe({},r),c.getChildContext())),z&&!m&&c.getSnapshotBeforeUpdate!=null&&(v=c.getSnapshotBeforeUpdate(f,h)),$=p,p!=null&&p.type===be&&p.key==null&&($=ko(p.props.children)),l=xo(e,Mt($)?$:[$],t,n,r,i,o,a,l,s,u),c.base=t.__e,t.__u&=-161,c.__h.length&&a.push(c),w&&(c.__E=c.__=null);}catch(O){if(t.__v=null,s||o!=null)if(O.then){for(t.__u|=s?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o[o.indexOf(l)]=null,t.__e=l;}else {for(b=o.length;b--;)ir(o[b]);nr(t);}else t.__e=n.__e,t.__k=n.__k,O.then||nr(t);N.__e(O,t,n);}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Lu(n.__e,t,n,r,i,o,a,s,u);return (p=N.diffed)&&p(t),128&t.__u?void 0:l}function nr(e){e&&e.__c&&(e.__c.__e=true),e&&e.__k&&e.__k.forEach(nr);}function wo(e,t,n){for(var r=0;r<n.length;r++)ar(n[r],n[++r],n[++r]);N.__c&&N.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i);});}catch(o){N.__e(o,i.__v);}});}function ko(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Mt(e)?e.map(ko):Fe({},e)}function Lu(e,t,n,r,i,o,a,l,s){var u,p,c,m,f,h,v,w=n.props||Dt,y=t.props,z=t.type;if(z=="svg"?i="http://www.w3.org/2000/svg":z=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(u=0;u<o.length;u++)if((f=o[u])&&"setAttribute"in f==!!z&&(z?f.localName==z:f.nodeType==3)){e=f,o[u]=null;break}}if(e==null){if(z==null)return document.createTextNode(y);e=document.createElementNS(i,z,y.is&&y),l&&(N.__m&&N.__m(t,o),l=false),o=null;}if(z==null)w===y||l&&e.data==y||(e.data=y);else {if(o=o&&on.call(e.childNodes),!l&&o!=null)for(w={},u=0;u<e.attributes.length;u++)w[(f=e.attributes[u]).name]=f.value;for(u in w)if(f=w[u],u!="children"){if(u=="dangerouslySetInnerHTML")c=f;else if(!(u in y)){if(u=="value"&&"defaultValue"in y||u=="checked"&&"defaultChecked"in y)continue;tn(e,u,null,f,i);}}for(u in y)f=y[u],u=="children"?m=f:u=="dangerouslySetInnerHTML"?p=f:u=="value"?h=f:u=="checked"?v=f:l&&typeof f!="function"||w[u]===f||tn(e,u,f,w[u],i);if(p)l||c&&(p.__html==c.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(c&&(e.innerHTML=""),xo(t.type=="template"?e.content:e,Mt(m)?m:[m],t,n,r,z=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,a,o?o[0]:n.__k&&mt(n,0),l,s),o!=null)for(u=o.length;u--;)ir(o[u]);l||(u="value",z=="progress"&&h==null?e.removeAttribute("value"):h!=null&&(h!==e[u]||z=="progress"&&!h||z=="option"&&h!=w[u])&&tn(e,u,h,w[u],i),u="checked",v!=null&&v!=e[u]&&tn(e,u,v,w[u],i));}return e}function ar(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t));}else e.current=t;}catch(i){N.__e(i,n);}}function _o(e,t,n){var r,i;if(N.unmount&&N.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||ar(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount();}catch(o){N.__e(o,t);}r.base=r.__P=null;}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&_o(r[i],t,n||typeof e.type!="function");n||ir(e.__e),e.__c=e.__=e.__e=void 0;}function Ru(e,t,n){return this.constructor(e,n)}function an(e,t,n){var r,i,o,a;t==document&&(t=document.documentElement),N.__&&N.__(e,t),i=(r="undefined"=="function")?null:t.__k,o=[],a=[],or(t,e=(t).__k=Ie(be,null,[e]),i||Dt,Dt,t.namespaceURI,i?null:t.firstChild?on.call(t.childNodes):null,o,i?i.__e:t.firstChild,r,a),wo(o,e,a);}on=yo.slice,N={__e:function(e,t,n,r){for(var i,o,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),a=i.__d),a)return i.__E=i}catch(l){e=l;}throw e}},fo=0,Ce.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Fe({},this.state),typeof e=="function"&&(e=e(Fe({},n),this.props)),e&&Fe(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),uo(this));},Ce.prototype.forceUpdate=function(e){this.__v&&(this.__e=true,e&&this.__h.push(e),uo(this));},Ce.prototype.render=be,Je=[],mo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ho=function(e,t){return e.__v.__b-t.__v.__b},rn.__r=0,go=/(PointerCapture)$|Capture$/i,rr=0,er=po(false),tr=po(true);var ht,te,lr,zo,sn=0,Lo=[],ae=N,So=ae.__b,Co=ae.__r,Eo=ae.diffed,Ao=ae.__c,Io=ae.unmount,To=ae.__;function un(e,t){ae.__h&&ae.__h(te,e,sn||t),sn=0;var n=te.__H||(te.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function pe(e){return sn=1,Ro(Mo,e)}function Ro(e,t,n){var r=un(ht++,2);if(r.t=e,!r.__c&&(r.__=[Mo(void 0,t),function(l){var s=r.__N?r.__N[0]:r.__[0],u=r.t(s,l);s!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}));}],r.__c=te,!te.__f)){var i=function(l,s,u){if(!r.__c.__H)return  true;var p=r.__c.__H.__.filter(function(m){return !!m.__c});if(p.every(function(m){return !m.__N}))return !o||o.call(this,l,s,u);var c=r.__c.props!==l;return p.forEach(function(m){if(m.__N){var f=m.__[0];m.__=m.__N,m.__N=void 0,f!==m.__[0]&&(c=true);}}),o&&o.call(this,l,s,u)||c};te.__f=true;var o=te.shouldComponentUpdate,a=te.componentWillUpdate;te.componentWillUpdate=function(l,s,u){if(this.__e){var p=o;o=void 0,i(l,s,u),o=p;}a&&a.call(this,l,s,u);},te.shouldComponentUpdate=i;}return r.__N||r.__}function Ee(e,t){var n=un(ht++,3);!ae.__s&&ur(n.__H,t)&&(n.__=e,n.u=t,te.__H.__h.push(n));}function Do(e,t){var n=un(ht++,4);!ae.__s&&ur(n.__H,t)&&(n.__=e,n.u=t,te.__h.push(n));}function cn(e){return sn=5,pn(function(){return {current:e}},[])}function pn(e,t){var n=un(ht++,7);return ur(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Du(){for(var e;e=Lo.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ln),e.__H.__h.forEach(sr),e.__H.__h=[];}catch(t){e.__H.__h=[],ae.__e(t,e.__v);}}ae.__b=function(e){te=null,So&&So(e);},ae.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),To&&To(e,t);},ae.__r=function(e){Co&&Co(e),ht=0;var t=(te=e.__c).__H;t&&(lr===te?(t.__h=[],te.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(t.__h.forEach(ln),t.__h.forEach(sr),t.__h=[],ht=0)),lr=te;},ae.diffed=function(e){Eo&&Eo(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Lo.push(t)!==1&&zo===ae.requestAnimationFrame||((zo=ae.requestAnimationFrame)||Mu)(Du)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0;})),lr=te=null;},ae.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ln),n.__h=n.__h.filter(function(r){return !r.__||sr(r)});}catch(r){t.some(function(i){i.__h&&(i.__h=[]);}),t=[],ae.__e(r,n.__v);}}),Ao&&Ao(e,t);},ae.unmount=function(e){Io&&Io(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ln(r);}catch(i){t=i;}}),n.__H=void 0,t&&ae.__e(t,n.__v));};var Po=typeof requestAnimationFrame=="function";function Mu(e){var t,n=function(){clearTimeout(r),Po&&cancelAnimationFrame(t),setTimeout(e);},r=setTimeout(n,35);Po&&(t=requestAnimationFrame(n));}function ln(e){var t=te,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),te=t;}function sr(e){var t=te;e.__c=e.__(),te=t;}function ur(e,t){return !e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Mo(e,t){return typeof t=="function"?t(e):t}var pr="cvz_end_user_auth_v1",No="cvz_end_user_last_email",fr="cvz_end_user_pending_checkout_v1";function mr(e){try{return localStorage.getItem(e)}catch{return null}}function cr(e,t){try{localStorage.setItem(e,t);}catch{}}function Fo(e){try{localStorage.removeItem(e);}catch{}}function Oo(){let e=mr(pr);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.token=="string"&&typeof t.expiresAt=="number"&&typeof t.email=="string")return t}catch{}return null}function Qe(e){return e?e.expiresAt-300>Date.now()/1e3:false}function Uo(e){cr(pr,JSON.stringify(e)),cr(No,e.email);}function Bo(){Fo(pr);}function Ho(){return mr(No)}function jo(e){cr(fr,JSON.stringify(e));}function $o(){let e=mr(fr);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.pendingId=="string"&&typeof t.planId=="number")return t}catch{}return null}function Wo(){Fo(fr);}function Vo(e){return e.type==="apiKey"?{"X-API-Key":e.token}:{Authorization:`Bearer ${e.token}`}}async function fn(e){try{let t=await e.json();if(t&&typeof t.message=="string")return t.message;if(t&&typeof t.error=="string")return t.error}catch{}return `${e.status} ${e.statusText}`}async function qo(e,t,n){let r=await fetch(`${e}/api/chat/end_user/start_login`,{method:"POST",headers:{"Content-Type":"application/json",...Vo(t)},body:JSON.stringify({email:n})});if(!r.ok)throw new Error(await fn(r));return (await r.json()).pending_id}function mn(e,t){return new Promise(n=>{let r=new EventSource(`${e}/api/chat/end_user/wait/${encodeURIComponent(t)}`),i=false,o=a=>{i||(i=true,r.close(),n(a));};r.onmessage=a=>{try{o(JSON.parse(a.data));}catch{o({status:"error"});}},r.onerror=()=>{o({status:"timed_out"});};})}async function hr(e,t){let n=await fetch(`${e}/api/chat/end_user/plans`,{headers:Vo(t)});if(!n.ok)throw new Error(await fn(n));return (await n.json()).plans}async function dr(e,t){let n=await fetch(`${e}/api/chat/end_user/me`,{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw new Error(await fn(n));return await n.json()}async function Yo(e,t,n,r,i){let o=await fetch(`${e}/api/chat/end_user/checkout`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({plan_id:n,success_url:r,cancel_url:i})});if(!o.ok)throw new Error(await fn(o));let a=await o.json();return {checkoutUrl:a.checkout_url,pendingId:a.pending_id}}var Nu=0;function x(e,t,n,r,i,o){t||(t={});var a,l,s=t;if("ref"in s)for(l in s={},t)l=="ref"?a=t[l]:s[l]=t[l];var u={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Nu,__i:-1,__u:0,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)s[l]===void 0&&(s[l]=a[l]);return N.vnode&&N.vnode(u),u}var Fu=60*1e3;function Ou(e,t){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:t.toUpperCase()}).format(e/100)}catch{return `${(e/100).toFixed(2)} ${t.toUpperCase()}`}}function Uu(e){return new Date(e*1e3).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}var Ko=({open:e,onClose:t,darkMode:n,baseUrl:r,getBaseAuth:i,endUserAuth:o,onAuthenticated:a,initialEmail:l})=>{let[s,u]=pe("email"),[p,c]=pe(""),[m,f]=pe(null),[h,v]=pe(0),[w,y]=pe(null),[z,S]=pe([]),[R,M]=pe(null),[k,V]=pe(Date.now());if(Ee(()=>{e&&(f(null),o?(c(o.email),u("status"),dr(r,o.token).then(y).catch(P=>f(P instanceof Error?P.message:String(P)))):(c(l??""),u("email")));},[e]),Ee(()=>{if(h<=Date.now())return;let P=setInterval(()=>V(Date.now()),1e3);return ()=>clearInterval(P)},[h]),!e)return null;let Y=Math.max(0,Math.ceil((h-k)/1e3)),$=async()=>{let P=p.trim();if(!P||!P.includes("@")){f("Enter a valid email address.");return}f(null),u("waiting");try{let A=await i(),W=await qo(r,A,P);v(Date.now()+Fu);let d=await mn(r,W);if(d.status==="verified"){let F={token:d.chat_token,expiresAt:d.expires_at,email:P};a(F);try{let G=await dr(r,F.token);if(y(G),G.total_vtokens_remaining>0||G.subscription_status==="active")u("status");else {let ie=await hr(r,{token:F.token,type:"bearer"});S(ie),u("plans");}}catch{u("status");}}else d.status==="timed_out"?(f("That link expired before it was clicked. You can send a new one below."),u("email")):(f("Something went wrong confirming your login. Please try again."),u("email"));}catch(A){f(A instanceof Error?A.message:String(A)),u("email");}},b=async()=>{if(o){f(null);try{let P=await hr(r,{token:o.token,type:"bearer"});S(P),u("plans");}catch(P){f(P instanceof Error?P.message:String(P));}}},X=async P=>{if(o){f(null),M(P.id);try{let A=window.location.href,{checkoutUrl:W,pendingId:d}=await Yo(r,o.token,P.id,A,A);jo({pendingId:d,planId:P.id}),window.location.href=W;}catch(A){f(A instanceof Error?A.message:String(A)),M(null);}}},O=n?"cvz-text-gray-100":"cvz-text-gray-800",T=n?"cvz-text-gray-400":"cvz-text-gray-500",B=n?"cvz-bg-gray-800":"cvz-bg-white",U=n?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100":"cvz-bg-white cvz-border-gray-300 cvz-text-gray-800",Q="cvz-bg-blue-600 hover:cvz-bg-blue-700 cvz-text-white disabled:cvz-opacity-50 disabled:cvz-cursor-not-allowed";return x("div",{className:"cvz-absolute cvz-inset-0 cvz-z-20 cvz-flex cvz-flex-col",children:x("div",{className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-5 cvz-flex cvz-flex-col cvz-gap-4 ${B}`,children:[x("div",{className:"cvz-flex cvz-justify-between cvz-items-start",children:[x("h3",{className:`cvz-font-bold cvz-text-lg ${O}`,children:"Account"}),x("button",{onClick:t,className:`cvz-p-1 cvz-rounded-md ${n?"cvz-text-gray-400 hover:cvz-text-white":"cvz-text-gray-400 hover:cvz-text-gray-700"}`,title:"Close",children:"\u2715"})]}),m&&x("p",{className:"cvz-text-sm cvz-text-red-500",children:m}),s==="email"&&x("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[x("p",{className:`cvz-text-sm ${T}`,children:"Enter your email and we'll send you a login link - use it to access a plan you've already bought, or to start a new one."}),x("input",{type:"email",value:p,onInput:P=>c(P.target.value),placeholder:"you@example.com",className:`cvz-border cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm ${U}`,onKeyDown:P=>{P.key==="Enter"&&$();}}),x("button",{onClick:$,disabled:Y>0,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${Q}`,children:Y>0?`Wait ${Y}s to resend`:"Send login link"})]}),s==="waiting"&&x("div",{className:"cvz-flex cvz-flex-col cvz-gap-2 cvz-items-center cvz-py-6 cvz-text-center",children:[x("p",{className:`cvz-text-sm ${O}`,children:"Check your email"}),x("p",{className:`cvz-text-xs ${T}`,children:["We sent a login link to ",p,". Click it to continue - this can stay open while you do."]})]}),s==="status"&&x("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[x("p",{className:`cvz-text-sm ${O}`,children:["Signed in as ",o?.email]}),w?x("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-text-sm cvz-flex cvz-flex-col cvz-gap-1 ${n?"cvz-border-gray-600":"cvz-border-gray-200"} ${O}`,children:[x("span",{children:[Math.floor(w.total_vtokens_remaining).toLocaleString()," tokens left"]}),w.plan_name&&x("span",{className:T,children:["Plan: ",w.plan_name]}),w.current_period_end&&x("span",{className:T,children:["Renews ",Uu(w.current_period_end)]})]}):x("p",{className:`cvz-text-sm ${T}`,children:"Loading your balance..."}),x("button",{onClick:b,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${Q}`,children:"Buy more"}),x("button",{onClick:()=>{u("email"),f(null);},className:`cvz-text-xs cvz-underline cvz-self-start ${T}`,children:"Use a different email"})]}),s==="plans"&&x("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[z.length===0&&x("p",{className:`cvz-text-sm ${T}`,children:"No plans are available right now."}),z.map(P=>x("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-flex cvz-justify-between cvz-items-center ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:[x("div",{children:[x("p",{className:`cvz-text-sm cvz-font-medium ${O}`,children:P.name}),x("p",{className:`cvz-text-xs ${T}`,children:[Ou(P.price_cents,P.currency),P.kind==="subscription"?" / period":""," \xB7 ",P.included_vtokens.toLocaleString()," tokens"]})]}),x("button",{onClick:()=>X(P),disabled:R===P.id,className:`cvz-rounded-lg cvz-px-3 cvz-py-1.5 cvz-text-sm cvz-font-medium ${Q}`,children:R===P.id?"Redirecting...":"Buy"})]},P.id)),o&&x("button",{onClick:()=>u("status"),className:`cvz-text-xs cvz-underline cvz-self-start ${T}`,children:"Back"})]})]})})};function ju(e,t){for(var n in t)e[n]=t[n];return e}function Xo(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return  true;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return  true;return  false}function ia(e,t){var n=t(),r=pe({t:{__:n,u:t}}),i=r[0].t,o=r[1];return Do(function(){i.__=n,i.u=t,gr(i)&&o({t:i});},[e,n,t]),Ee(function(){return gr(i)&&o({t:i}),e(function(){gr(i)&&o({t:i});})},[e]),n}function gr(e){var t,n,r=e.u,i=e.__;try{var o=r();return !((t=i)===(n=o)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return  true}}function Go(e,t){this.props=e,this.context=t;}(Go.prototype=new Ce).isPureReactComponent=true,Go.prototype.shouldComponentUpdate=function(e,t){return Xo(this.props,e)||Xo(this.state,t)};var Jo=N.__b;N.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Jo&&Jo(e);};var $u=N.__e;N.__e=function(e,t,n,r){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}$u(e,t,n,r);};var Qo=N.unmount;function oa(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c();}),e.__c.__H=null),(e=ju({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=true,e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return oa(r,t,n)})),e}function aa(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return aa(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=true,e.__c.__P=n)),e}function yr(){this.__u=0,this.o=null,this.__b=null;}function la(e){if(!e.__)return null;var t=e.__.__c;return t&&t.__a&&t.__a(e)}function hn(){this.i=null,this.l=null;}N.unmount=function(e){var t=e.__c;t&&(t.__z=true),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Qo&&Qo(e);},(yr.prototype=new Ce).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var i=la(r.__v),o=false,a=function(){o||r.__z||(o=true,n.__R=null,i?i(s):s());};n.__R=a;var l=n.__P;n.__P=null;var s=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=aa(u,u.__c.__P,u.__c.__O);}var p;for(r.setState({__a:r.__b=null});p=r.o.pop();)p.__P=l,p.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a);},yr.prototype.componentWillUnmount=function(){this.o=[];},yr.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=oa(this.__b,n,r.__O=r.__P);}this.__b=null;}var i=t.__a&&Ie(be,null,e.fallback);return i&&(i.__u&=-33),[Ie(be,null,t.__a?null:e.children),i]};var Zo=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2];}};(hn.prototype=new Ce).__a=function(e){var t=this,n=la(t.__v),r=t.l.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),Zo(t,e,r)):i();};n?n(o):o();}},hn.prototype.render=function(e){this.i=null,this.l=new Map;var t=Nt(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},hn.prototype.componentDidUpdate=hn.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Zo(e,n,t);});};var Wu=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Vu=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,qu=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Yu=/[A-Z0-9]/g,Ku=typeof document<"u",Xu=function(e){return (typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};Ce.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Ce.prototype,e,{configurable:true,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:true,writable:true,value:t});}});});var ea=N.event;function Gu(){}function Ju(){return this.cancelBubble}function Qu(){return this.defaultPrevented}N.event=function(e){return ea&&(e=ea(e)),e.persist=Gu,e.isPropagationStopped=Ju,e.isDefaultPrevented=Qu,e.nativeEvent=e};var Zu={enumerable:false,configurable:true,get:function(){return this.class}},ta=N.vnode;N.vnode=function(e){typeof e.type=="string"&&(function(t){var n=t.props,r=t.type,i={},o=r.indexOf("-")===-1;for(var a in n){var l=n[a];if(!(a==="value"&&"defaultValue"in n&&l==null||Ku&&a==="children"&&r==="noscript"||a==="class"||a==="className")){var s=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===true?l="":s==="translate"&&l==="no"?l=false:s[0]==="o"&&s[1]==="n"?s==="ondoubleclick"?a="ondblclick":s!=="onchange"||r!=="input"&&r!=="textarea"||Xu(n.type)?s==="onfocus"?a="onfocusin":s==="onblur"?a="onfocusout":qu.test(a)&&(a=s):s=a="oninput":o&&Vu.test(a)?a=a.replace(Yu,"-$&").toLowerCase():l===null&&(l=void 0),s==="oninput"&&i[a=s]&&(a="oninputCapture"),i[a]=l;}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Nt(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1;})),r=="select"&&i.defaultValue!=null&&(i.value=Nt(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value;})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",Zu)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),t.props=i;})(e),e.$$typeof=Wu,ta&&ta(e);};var na=N.__r;N.__r=function(e){na&&na(e),e.__c;};var ra=N.diffed;N.diffed=function(e){ra&&ra(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value);};async function*ec(e){let t=new TextDecoder,n="",r=0;try{for(;;){let{done:i,value:o}=await e.read();if(i){if(n.trim()){let l=tc(n);for(let s of l)r+=1,yield s;}break}n+=t.decode(o,{stream:!0});let a=n.split(`
`);n=a.pop()||"";for(let l of a)if(l.startsWith("data: ")){let s=l.slice(6).trim();if(s)try{let u=JSON.parse(s);r+=1,yield u;}catch(u){console.error("Failed to parse SSE data:",s,u);}}}}finally{e.releaseLock(),console.log(`parseSSEStream: yielded ${r} events`);}}function tc(e){let t=[],n=e.split(`
`);for(let r of n)if(r.startsWith("data: ")){let i=r.slice(6).trim();if(i)try{t.push(JSON.parse(i));}catch(o){console.error("Failed to parse SSE data:",i,o);}}return t}async function*ua(e){let{baseUrl:t,message:n,sessionId:r,persona:i,authToken:o,authType:a,maxTokens:l,clientId:s,extraContext:u,abortSignal:p}=e,c={"Content-Type":"application/json",Accept:"text/event-stream"};s&&(c["X-Client-Id"]=s),a==="apiKey"?c["X-API-Key"]=o:c.Authorization=`Bearer ${o}`;let m={message:n};!r&&a==="apiKey"&&i&&(m.persona=typeof i=="string"?{alias:i}:i),r&&(m.session=r),l&&(m.max_tokens=l),u&&Object.assign(m,u);let f;r?f="/api/chat/continuation/stream":f="/api/chat/completion/stream";let h=await fetch(`${t}${f}`,{method:"POST",headers:c,body:JSON.stringify(m),signal:p});if(!h.ok){let w=`HTTP ${h.status}: ${h.statusText}`;try{console.error(`error from completion: ${h.status} : ${h.statusText}`),w=(await h.json()).message||w;}catch{}yield {type:"error",message:`${h.status} ${w}`};return}if(!h.body){yield {type:"error",message:"No response body received"};return}let v=h.body.getReader();yield*ec(v);}var br="cvz_client_id",dt="cvz_client_id_v2",Ft="cvz_client_id_captcha_gated",pa="cvz_client_id_last_forced_reissue",fa="issue_client_id";var nc=["invalid client_id","client_id does not belong to this account"];function rc(e){return typeof e=="object"&&e!==null&&"provider"in e&&"site_key"in e}function yt(e){try{return localStorage.getItem(e)}catch{return null}}function vt(e,t){try{localStorage.setItem(e,t);}catch{}}function je(e,t){return `${e}:${t}`}function gt(e){try{localStorage.removeItem(e);}catch{}}function ic(e){return yt(je(Ft,e))==="1"}function oc(e,t){vt(je(Ft,e),t?"1":"0");}function ac(e){let t=yt(dt);if(!t)return null;vt(je(dt,e),t);let n=yt(Ft);return n!==null&&vt(je(Ft,e),n),gt(dt),gt(Ft),gt(pa),t}function ma(e){let t=e instanceof Error?e.message:typeof e=="string"?e:"";return nc.some(n=>t.includes(n))}function lc(){let e=yt(br);if(e)return e;let t=crypto.randomUUID();return vt(br,t),t}var vr=null;function sc(e){return vr||(vr=new Promise((t,n)=>{let r=document.createElement("script");r.src=`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(e)}`,r.async=true,r.onload=()=>t(),r.onerror=()=>n(new Error("failed to load reCAPTCHA script")),document.head.appendChild(r);})),vr}async function uc(e){return await sc(e),new Promise((t,n)=>{if(!window.grecaptcha){n(new Error("grecaptcha unavailable after script load"));return}window.grecaptcha.ready(()=>{window.grecaptcha.execute(e,{action:fa}).then(t,n);});})}var xr=null;function cc(){return xr||(xr=new Promise((e,t)=>{let n=document.createElement("script");n.src="https://challenges.cloudflare.com/turnstile/v0/api.js",n.async=true,n.onload=()=>e(),n.onerror=()=>t(new Error("failed to load Turnstile script")),document.head.appendChild(n);})),xr}async function pc(e,t){return await cc(),new Promise((n,r)=>{if(!window.turnstile){r(new Error("turnstile unavailable after script load"));return}let i=t?.getContainer?.()??null,o=i??document.createElement("div"),a=!i;a?(o.style.position="fixed",o.style.top="-9999px",o.style.left="-9999px",document.body.appendChild(o)):o.replaceChildren();let l,s=()=>{t?.onPending?.(false),l&&window.turnstile?.remove(l),a&&o.remove();};t?.onPending?.(true),l=window.turnstile.render(o,{sitekey:e,action:fa,callback:u=>{n(u),s();},"error-callback":u=>{r(u instanceof Error?u:new Error("Turnstile challenge failed")),s();}});})}function fc(e,t,n){return e==="recaptcha_v3"?uc(t):pc(t,n)}function ca(e,t,n){return fetch(`${e}/api/chat/client_id`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_public_id:t,...n?{recaptcha_token:n}:{}})})}async function wr(e,t,n){if(!t)return lc();let r=yt(je(dt,t))??ac(t);if(r)return r;try{let i=await ca(e,t),o=!1;if(i.status===400){let l=await i.json();if(rc(l)){o=!0;let s=await fc(l.provider,l.site_key,n);i=await ca(e,t,s);}else return console.warn("cvzWidget: client_id issuance failed (400)"),null}if(!i.ok)return console.warn(`cvzWidget: client_id issuance failed (${i.status})`),null;oc(t,o);let a=await i.json();return vt(je(dt,t),a.client_id),gt(br),a.client_id}catch(i){return console.warn("cvzWidget: client_id issuance failed",i),null}}async function ha(e,t,n){if(!t)return null;let r=je(dt,t),i=je(pa,t);if(!ic(t)){let o=Number(yt(i)??"0");if(Date.now()-o<36e5)return gt(r),null}return vt(i,String(Date.now())),gt(r),wr(e,t,n)}var mc="cvz_chat_history";function hc(e){let t=new TextEncoder().encode(e),n="";return t.forEach(r=>{n+=String.fromCharCode(r);}),btoa(n)}function dc(e){let t=atob(e),n=Uint8Array.from(t,r=>r.charCodeAt(0));return new TextDecoder().decode(n)}function kr(e=mc){async function t(r,i){try{localStorage.setItem(e,hc(JSON.stringify({sessionId:r,messages:i})));}catch{}}async function n(){let r={sessionId:"",messages:[]};try{let i=localStorage.getItem(e);if(!i)return r;let o;try{o=JSON.parse(dc(i));}catch{o=JSON.parse(i);}return {sessionId:o.sessionId||"",messages:o.messages||[]}}catch{return r}}return {save:t,load:n}}var dn="https://chat.converzen.de",ga="Hi, how can I help you ?",gc=5;function ya(e){return typeof e=="string"&&/^https?:\/\//i.test(e.trim())}function _r(e){return typeof e=="string"&&e.trim()?e.trim():void 0}function va(e){if(!Array.isArray(e))return [];let t=[];for(let n of e){if(t.length>=gc)break;if(!n||typeof n!="object")continue;let r=n,i=_r(r.title);!i||!ya(r.url)||t.push({title:i,url:r.url.trim(),description:_r(r.description),imageUrl:ya(r.imageUrl)?r.imageUrl.trim():void 0,merchant:_r(r.merchant),sponsored:r.sponsored!==false});}return t}function xa(e){let t=new Set,n=null,r={getContainer:()=>n,onPending:A=>a({captchaPending:A})},i={messages:[],sessionId:null,isOpen:e.autoOpen??false,isLoading:false,isStreaming:false,streamingMessage:"",thinkingMessage:"",activeToolCall:null,captchaPending:false,endUserAuth:(()=>{let A=Oo();return Qe(A)?A:null})(),showAuthNudge:false};function o(){t.forEach(A=>A());}function a(A){i={...i,...A},o();}let l={current:false},s=e.persistMessages!==false,u=kr(e.historyKey),p=e.onSaveMessages??(s?u.save:async()=>{}),c=e.onLoadMessages??(s?u.load:async()=>({sessionId:"",messages:[]})),m=null,f=null,h=null,v="",w=null,y="",z=null;function S(){if(!h){let A=e.chatUrl||dn;h=wr(A,e.publicId,r);}return h}async function R(A=false){if(e.apiKey)return {token:e.apiKey,type:"apiKey"};if(!e.getToken)throw new Error("Either apiKey or getToken must be provided");let W=e.getToken;if(!A){let G=Date.now()/1e3+5,g=f;if(g&&(g.expiresAt==null||g.expiresAt>G))return {token:g.token,type:"bearer"}}let d=async()=>{let G=await W(await S());return typeof G=="string"?{token:G,expiresAt:void 0}:G},F;try{F=await d();}catch(G){if(!ma(G))throw G;let g=e.chatUrl||dn;h=Promise.resolve(await ha(g,e.publicId,r)),F=await d();}return f=F,{token:F.token,type:"bearer"}}async function M(A=false){return !A&&Qe(i.endUserAuth)?{token:i.endUserAuth.token,type:"bearer"}:R(A)}async function k(A,W,d,F=0){try{let g=await M(F>0),ie=e.chatUrl||dn,he=i.sessionId||"",It=ua({baseUrl:ie,sessionId:he,message:A.content,persona:e.persona,authToken:g.token,authType:g.type,clientId:await S()??void 0,extraContext:e.extraContext,abortSignal:d.signal}),He="",oe=!1,_e=!1,de=0,Re=350,De=async()=>{if(!de)return;let ee=Re-(Date.now()-de);ee>0&&await new Promise(ve=>setTimeout(ve,ee));};for await(let ee of It){if(d.signal.aborted)break;switch(ee.type){case "session_created":case "session_continued":ee.session_id&&ee.session_id!==he&&(he=ee.session_id,a({sessionId:ee.session_id}));break;case "thinking":ee.content&&(_e||(de=Date.now()),_e=!0,y+=ee.content,z||(z=requestAnimationFrame(()=>{let ve=y;y="",z=null,a({thinkingMessage:i.thinkingMessage+ve});})));break;case "tool_call_started":ee.name&&(await De(),_e=!0,de=Date.now(),a({activeToolCall:ee.name}));break;case "token":ee.content&&(_e&&(await De(),_e=!1,de=0,y="",a({thinkingMessage:"",activeToolCall:null})),v+=ee.content,He+=ee.content,w||(w=requestAnimationFrame(()=>{let ve=v;v="",w=null,a({streamingMessage:i.streamingMessage+ve});})));break;case "done":{if(He&&he){l.current=!0;let ve={content:He,role:"ASSISTANT",createdAt:new Date().toISOString(),sources:ee.sources},ze=[...W,ve];a({messages:ze,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="",setTimeout(()=>{l.current=!1;},0),await p(he,ze),Y(A.content,ve,he);}else a({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="";m=null;return}case "error":{let ve=ee.code||"",ze=ee.message||"",Tt=F===0&&Qe(i.endUserAuth);if((ve==="auth_failed"||ze.includes("401")||ze.includes("403")||ze.includes("Unauthorized")||ze.includes("Forbidden"))&&F<1&&(e.getToken&&!e.apiKey||Tt)){f=null,Tt&&U(),oe=!0;break}if(ve==="rate_limited"&&e.endUserLicensing){a({showAuthNudge:!0,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="",m=null;return}let Zt={content:ze||"An error occurred",role:"SYSTEM",createdAt:new Date().toISOString()},en=[...W,Zt];a({messages:en,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="",await p(he||"",en),m=null;return}}}if(oe&&F<1)return k(A,W,d,F+1);!d.signal.aborted&&!oe&&(a({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="",m=null);}catch(g){let ie=F===0&&Qe(i.endUserAuth);if(g instanceof Error&&(g.message.includes("401")||g.message.includes("403"))&&F<1&&(e.getToken&&!e.apiKey||ie))return f=null,ie&&U(),k(A,W,d,F+1);throw g}}function V(A,W){if(W.length===0)return;let d=i.messages.indexOf(A);if(d===-1)return;let F=i.messages.slice();F[d]={...A,cards:W},a({messages:F}),p(i.sessionId||"",F).catch(G=>console.error("cvzWidget: failed to save cards",G));}function Y(A,W,d){let F=e.onAssistantMessage;F&&Promise.resolve().then(()=>F({question:A,answer:W.content,sessionId:d})).then(G=>V(W,va(G))).catch(G=>console.error("cvzWidget: onAssistantMessage failed",G));}function $(A){let W=[...i.messages].reverse().find(d=>d.role==="ASSISTANT");W&&V(W,va(A));}async function b(A){if(!A.trim()||i.isStreaming)return;m&&m.abort();let W={content:A.trim(),role:"USER",createdAt:new Date().toISOString()};if(e.onUserMessage)try{e.onUserMessage({question:W.content,sessionId:i.sessionId});}catch(F){console.error("cvzWidget: onUserMessage failed",F);}let d=[...i.messages,W];a({messages:d,isLoading:true,isStreaming:true,streamingMessage:"",thinkingMessage:"",activeToolCall:null}),y="";try{let F=new AbortController;m=F,await k(W,d,F);}catch(F){if(F instanceof Error&&F.name==="AbortError"){a({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),y="",m=null;return}let G={content:`Error: ${F instanceof Error?F.message:"Failed to send message"}`,role:"SYSTEM",createdAt:new Date().toISOString()},g=[...d,G];a({messages:g,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),y="",await p(i.sessionId||"",g),m=null;}}async function X(){m&&(m.abort(),m=null),a({messages:[{content:e.initialGreeting||ga,role:"SYSTEM",createdAt:new Date().toISOString()}],streamingMessage:"",thinkingMessage:"",activeToolCall:null,sessionId:null,isStreaming:false,isLoading:false}),y="",await p("",[]);}function O(){a({isOpen:true}),S();}function T(){a({isOpen:false});}function B(A){Uo(A),a({endUserAuth:A,showAuthNudge:false});}function U(){Bo(),a({endUserAuth:null});}function Q(A){n=A;}if((async()=>{try{let A=await c(),W=[],d=null;A&&typeof A=="object"&&"messages"in A&&"sessionId"in A?(W=A.messages||[],d=A.sessionId||null):Array.isArray(A)&&(W=A),W.length===0&&(W=[{content:e.initialGreeting||ga,role:"SYSTEM",createdAt:new Date().toISOString()}]),a({sessionId:d,messages:W});}catch(A){console.error("Failed to load messages:",A);}})(),e.endUserLicensing){let A=$o();if(A){let W=e.chatUrl||dn;mn(W,A.pendingId).finally(()=>{Wo();});}}function P(){m&&(m.abort(),m=null),w&&(cancelAnimationFrame(w),w=null),z&&(cancelAnimationFrame(z),z=null);}return {getState:()=>i,subscribe(A){return t.add(A),()=>t.delete(A)},sendMessage:b,open:O,close:T,clearHistory:X,authenticateEndUser:B,deauthenticateEndUser:U,getTenantAuthToken:R,setCaptchaContainer:Q,addCards:$,isFinalizingRef:l,dispose:P}}var gn=null;function ba(){return gn}function wa(e){let t=pn(()=>xa(e),[e]),n=ia(t.subscribe,t.getState);return Ee(()=>(gn=t,()=>{gn===t&&(gn=null),t.dispose();}),[t]),{...n,sendMessage:t.sendMessage,open:t.open,close:t.close,clearHistory:t.clearHistory,authenticateEndUser:t.authenticateEndUser,deauthenticateEndUser:t.deauthenticateEndUser,getTenantAuthToken:t.getTenantAuthToken,setCaptchaContainer:t.setCaptchaContainer,addCards:t.addCards,isFinalizingRef:t.isFinalizingRef,dispose:t.dispose}}var yc="calc(100vw - 2rem)",vc="calc(100dvh - 8rem)",ka=e=>{if(!e?.position)return {bottom:"1rem",right:"1rem"};if(typeof e.position=="string")switch(e.position){case "bottom-right":return {bottom:"1rem",right:"1rem"};case "bottom-left":return {bottom:"1rem",left:"1rem"};case "top-right":return {top:"1rem",right:"1rem"};case "top-left":return {top:"1rem",left:"1rem"};default:return {bottom:"1rem",right:"1rem"}}else {let t={};return e.position.bottom&&(t.bottom=e.position.bottom),e.position.top&&(t.top=e.position.top),e.position.left&&(t.left=e.position.left),e.position.right&&(t.right=e.position.right),t}},_a=e=>{let t={maxWidth:yc,maxHeight:vc};if(!e?.dialogSize)return {width:"350px",height:"500px",...t};if(typeof e.dialogSize=="string")switch(e.dialogSize){case "small":return {width:"300px",height:"400px",...t};case "medium":return {width:"350px",height:"500px",...t};case "large":return {width:"400px",height:"600px",...t};default:return {width:"350px",height:"500px",...t}}else return {width:`${Math.max(250,e.dialogSize.width)}px`,height:`${Math.max(300,e.dialogSize.height)}px`,...t}},za=e=>e?.frameColor||"#E5E7EB",Sa=(e,t)=>{let n=e?.buttonColor;return t?{backgroundColor:n?.open||"#1F2937"}:{backgroundColor:n?.normal||"#2563EB","--hover-color":n?.hover||"#1D4ED8"}};function Ca(e,t){let n={};return (e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===false?"":" ")).trim()}var xc=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,bc=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,wc={};function yn(e,t){return ((wc).jsx?bc:xc).test(e)}var kc=/[ \t\n\f\r]/g;function zr(e){return typeof e=="object"?e.type==="text"?Ea(e.value):false:Ea(e)}function Ea(e){return e.replace(kc,"")===""}var Oe=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r);}};Oe.prototype.normal={};Oe.prototype.property={};Oe.prototype.space=void 0;function Sr(e,t){let n={},r={};for(let i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Oe(n,r,t)}function Ot(e){return e.toLowerCase()}var ce=class{constructor(t,n){this.attribute=n,this.property=t;}};ce.prototype.attribute="";ce.prototype.booleanish=false;ce.prototype.boolean=false;ce.prototype.commaOrSpaceSeparated=false;ce.prototype.commaSeparated=false;ce.prototype.defined=false;ce.prototype.mustUseProperty=false;ce.prototype.number=false;ce.prototype.overloadedBoolean=false;ce.prototype.property="";ce.prototype.spaceSeparated=false;ce.prototype.space=void 0;var Ut={};ao(Ut,{boolean:()=>j,booleanish:()=>ne,commaOrSpaceSeparated:()=>ye,commaSeparated:()=>$e,number:()=>C,overloadedBoolean:()=>vn,spaceSeparated:()=>J});var _c=0,j=Ze(),ne=Ze(),vn=Ze(),C=Ze(),J=Ze(),$e=Ze(),ye=Ze();function Ze(){return 2**++_c}var Cr=Object.keys(Ut),et=class extends ce{constructor(t,n,r,i){let o=-1;if(super(t,n),Aa(this,"space",i),typeof r=="number")for(;++o<Cr.length;){let a=Cr[o];Aa(this,Cr[o],(r&Ut[a])===Ut[a]);}}};et.prototype.defined=true;function Aa(e,t,n){n&&(e[t]=n);}function we(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let o=new et(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=true),t[r]=o,n[Ot(r)]=r,n[Ot(o.attribute)]=r;}return new Oe(t,n,e.space)}var Er=we({properties:{ariaActiveDescendant:null,ariaAtomic:ne,ariaAutoComplete:null,ariaBusy:ne,ariaChecked:ne,ariaColCount:C,ariaColIndex:C,ariaColSpan:C,ariaControls:J,ariaCurrent:null,ariaDescribedBy:J,ariaDetails:null,ariaDisabled:ne,ariaDropEffect:J,ariaErrorMessage:null,ariaExpanded:ne,ariaFlowTo:J,ariaGrabbed:ne,ariaHasPopup:null,ariaHidden:ne,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:J,ariaLevel:C,ariaLive:null,ariaModal:ne,ariaMultiLine:ne,ariaMultiSelectable:ne,ariaOrientation:null,ariaOwns:J,ariaPlaceholder:null,ariaPosInSet:C,ariaPressed:ne,ariaReadOnly:ne,ariaRelevant:null,ariaRequired:ne,ariaRoleDescription:J,ariaRowCount:C,ariaRowIndex:C,ariaRowSpan:C,ariaSelected:ne,ariaSetSize:C,ariaSort:null,ariaValueMax:C,ariaValueMin:C,ariaValueNow:C,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function xn(e,t){return t in e?e[t]:t}function bn(e,t){return xn(e,t.toLowerCase())}var Ia=we({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:$e,acceptCharset:J,accessKey:J,action:null,allow:null,allowFullScreen:j,allowPaymentRequest:j,allowUserMedia:j,alt:null,as:null,async:j,autoCapitalize:null,autoComplete:J,autoFocus:j,autoPlay:j,blocking:J,capture:null,charSet:null,checked:j,cite:null,className:J,cols:C,colSpan:null,content:null,contentEditable:ne,controls:j,controlsList:J,coords:C|$e,crossOrigin:null,data:null,dateTime:null,decoding:null,default:j,defer:j,dir:null,dirName:null,disabled:j,download:vn,draggable:ne,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:j,formTarget:null,headers:J,height:C,hidden:vn,high:C,href:null,hrefLang:null,htmlFor:J,httpEquiv:J,id:null,imageSizes:null,imageSrcSet:null,inert:j,inputMode:null,integrity:null,is:null,isMap:j,itemId:null,itemProp:J,itemRef:J,itemScope:j,itemType:J,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:j,low:C,manifest:null,max:null,maxLength:C,media:null,method:null,min:null,minLength:C,multiple:j,muted:j,name:null,nonce:null,noModule:j,noValidate:j,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:j,optimum:C,pattern:null,ping:J,placeholder:null,playsInline:j,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:j,referrerPolicy:null,rel:J,required:j,reversed:j,rows:C,rowSpan:C,sandbox:J,scope:null,scoped:j,seamless:j,selected:j,shadowRootClonable:j,shadowRootDelegatesFocus:j,shadowRootMode:null,shape:null,size:C,sizes:null,slot:null,span:C,spellCheck:ne,src:null,srcDoc:null,srcLang:null,srcSet:null,start:C,step:null,style:null,tabIndex:C,target:null,title:null,translate:null,type:null,typeMustMatch:j,useMap:null,value:ne,width:C,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:J,axis:null,background:null,bgColor:null,border:C,borderColor:null,bottomMargin:C,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:j,declare:j,event:null,face:null,frame:null,frameBorder:null,hSpace:C,leftMargin:C,link:null,longDesc:null,lowSrc:null,marginHeight:C,marginWidth:C,noResize:j,noHref:j,noShade:j,noWrap:j,object:null,profile:null,prompt:null,rev:null,rightMargin:C,rules:null,scheme:null,scrolling:ne,standby:null,summary:null,text:null,topMargin:C,valueType:null,version:null,vAlign:null,vLink:null,vSpace:C,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:j,disableRemotePlayback:j,prefix:null,property:null,results:C,security:null,unselectable:null},space:"html",transform:bn});var Ta=we({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ye,accentHeight:C,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:C,amplitude:C,arabicForm:null,ascent:C,attributeName:null,attributeType:null,azimuth:C,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:C,by:null,calcMode:null,capHeight:C,className:J,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:C,diffuseConstant:C,direction:null,display:null,dur:null,divisor:C,dominantBaseline:null,download:j,dx:null,dy:null,edgeMode:null,editable:null,elevation:C,enableBackground:null,end:null,event:null,exponent:C,externalResourcesRequired:null,fill:null,fillOpacity:C,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:$e,g2:$e,glyphName:$e,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:C,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:C,horizOriginX:C,horizOriginY:C,id:null,ideographic:C,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:C,k:C,k1:C,k2:C,k3:C,k4:C,kernelMatrix:ye,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:C,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:C,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:C,overlineThickness:C,paintOrder:null,panose1:null,path:null,pathLength:C,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:J,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:C,pointsAtY:C,pointsAtZ:C,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ye,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ye,rev:ye,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ye,requiredFeatures:ye,requiredFonts:ye,requiredFormats:ye,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:C,specularExponent:C,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:C,strikethroughThickness:C,string:null,stroke:null,strokeDashArray:ye,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:C,strokeOpacity:C,strokeWidth:null,style:null,surfaceScale:C,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ye,tabIndex:C,tableValues:null,target:null,targetX:C,targetY:C,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ye,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:C,underlineThickness:C,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:C,values:null,vAlphabetic:C,vMathematical:C,vectorEffect:null,vHanging:C,vIdeographic:C,version:null,vertAdvY:C,vertOriginX:C,vertOriginY:C,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:C,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:xn});var Ar=we({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return "xlink:"+t.slice(5).toLowerCase()}});var Ir=we({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:bn});var Tr=we({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return "xml:"+t.slice(3).toLowerCase()}});var Pr={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var zc=/[A-Z]/g,Pa=/-[a-z]/g,Sc=/^data[-\w.:]+$/i;function Lr(e,t){let n=Ot(t),r=t,i=ce;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Sc.test(t)){if(t.charAt(4)==="-"){let o=t.slice(5).replace(Pa,Ec);r="data"+o.charAt(0).toUpperCase()+o.slice(1);}else {let o=t.slice(4);if(!Pa.test(o)){let a=o.replace(zc,Cc);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a;}}i=et;}return new i(r,t)}function Cc(e){return "-"+e.toLowerCase()}function Ec(e){return e.charAt(1).toUpperCase()}var La=Sr([Er,Ia,Ar,Ir,Tr],"html"),wn=Sr([Er,Ta,Ar,Ir,Tr],"svg");function Ra(e){return e.join(" ").trim()}var Ka=lo(Wa());var _n=Va("end"),xt=Va("start");function Va(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return {line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Mr(e){let t=xt(e),n=_n(e);if(t&&n)return {start:t,end:n}}function We(e){return !e||typeof e!="object"?"":"position"in e||"type"in e?qa(e.position):"start"in e||"end"in e?qa(e):"line"in e||"column"in e?Nr(e):""}function Nr(e){return Ya(e&&e.line)+":"+Ya(e&&e.column)}function qa(e){return Nr(e&&e.start)+"-"+Nr(e&&e.end)}function Ya(e){return e&&typeof e=="number"?e:1}var le=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=false;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=true,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){let s=r.indexOf(":");s===-1?o.ruleId=r:(o.source=r.slice(0,s),o.ruleId=r.slice(s+1));}if(!o.place&&o.ancestors&&o.ancestors){let s=o.ancestors[o.ancestors.length-1];s&&(o.place=s.position);}let l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=We(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0;}};le.prototype.file="";le.prototype.name="";le.prototype.reason="";le.prototype.message="";le.prototype.stack="";le.prototype.column=void 0;le.prototype.line=void 0;le.prototype.ancestors=void 0;le.prototype.cause=void 0;le.prototype.fatal=void 0;le.prototype.place=void 0;le.prototype.ruleId=void 0;le.prototype.source=void 0;var Fr={}.hasOwnProperty,Zc=new Map,ep=/[A-Z]/g,tp=new Set(["table","tbody","thead","tfoot","tr"]),np=new Set(["td","th"]),Xa="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Or(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=cp(n,t.jsxDEV);}else {if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=up(n,t.jsx,t.jsxs);}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||false,passKeys:t.passKeys!==false,passNode:t.passNode||false,schema:t.space==="svg"?wn:La,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==false},o=Ga(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Ga(e,t,n){if(t.type==="element")return rp(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return ip(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return ap(e,t,n);if(t.type==="mdxjsEsm")return op(e,t);if(t.type==="root")return lp(e,t,n);if(t.type==="text")return sp(e,t)}function rp(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=wn,e.schema=i),e.ancestors.push(t);let o=Qa(e,t.tagName,false),a=pp(e,t),l=Br(e,t);return tp.has(t.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!zr(s):true})),Ja(e,a,o,t),Ur(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function ip(e,t){if(t.data&&t.data.estree&&e.evaluater){let r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ht(e,t.position);}function op(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ht(e,t.position);}function ap(e,t,n){let r=e.schema,i=r;t.name==="svg"&&r.space==="html"&&(i=wn,e.schema=i),e.ancestors.push(t);let o=t.name===null?e.Fragment:Qa(e,t.name,true),a=fp(e,t),l=Br(e,t);return Ja(e,a,o,t),Ur(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function lp(e,t,n){let r={};return Ur(r,Br(e,t)),e.create(t,e.Fragment,r,n)}function sp(e,t){return t.value}function Ja(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r);}function Ur(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n);}}function up(e,t,n){return r;function r(i,o,a,l){let u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function cp(e,t){return n;function n(r,i,o,a){let l=Array.isArray(o.children),s=xt(r);return t(i,o,a,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function pp(e,t){let n={},r,i;for(i in t.properties)if(i!=="children"&&Fr.call(t.properties,i)){let o=mp(e,i,t.properties[i]);if(o){let[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&np.has(t.tagName)?r=l:n[a]=l;}}if(r){let o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r;}return n}function fp(e,t){let n={};for(let r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){let o=r.data.estree.body[0];o.type;let a=o.expression;a.type;let l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument));}else Ht(e,t.position);else {let i=r.name,o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){let l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression);}else Ht(e,t.position);else o=r.value===null?true:r.value;n[i]=o;}return n}function Br(e,t){let n=[],r=-1,i=e.passKeys?new Map:Zc;for(;++r<t.children.length;){let o=t.children[r],a;if(e.passKeys){let s=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(s){let u=i.get(s)||0;a=s+"-"+u,i.set(s,u+1);}}let l=Ga(e,o,a);l!==void 0&&n.push(l);}return n}function mp(e,t,n){let r=Lr(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Ca(n):Ra(n)),r.property==="style"){let i=typeof n=="object"?n:hp(e,String(n));return e.stylePropertyNameCase==="css"&&(i=dp(i)),["style",i]}return [e.elementAttributeNameCase==="react"&&r.space?Pr[r.property]||r.property:r.attribute,n]}}function hp(e,t){try{return (0,Ka.default)(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return {};let r=n,i=new le("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Xa+"#cannot-parse-style-attribute",i}}function Qa(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){let i=t.split("."),o=-1,a;for(;++o<i.length;){let l=yn(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:false}:l;}r=a;}else r=yn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){let i=r.value;return Fr.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ht(e);}function Ht(e,t){let n=new le("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Xa+"#cannot-handle-mdx-estrees-without-createevaluater",n}function dp(e){let t={},n;for(n in e)Fr.call(e,n)&&(t[gp(n)]=e[n]);return t}function gp(e){let t=e.replace(ep,yp);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function yp(e){return "-"+e.toLowerCase()}var jt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};var vp={};function nt(e,t){let n=vp,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:true,i=typeof n.includeHtml=="boolean"?n.includeHtml:true;return el(e,r,i)}function el(e,t,n){if(xp(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Za(e.children,t,n)}return Array.isArray(e)?Za(e,t,n):""}function Za(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=el(e[i],t,n);return r.join("")}function xp(e){return !!(e&&typeof e=="object")}var tl=document.createElement("i");function bt(e){let t="&"+e+";";tl.innerHTML=t;let n=tl.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?false:n}function se(e,t,n,r){let i=e.length,o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4;}function ge(e,t){return e.length>0?(se(e,e.length,0,t),e):t}var nl={}.hasOwnProperty;function zn(e){let t={},n=-1;for(;++n<e.length;)bp(t,e[n]);return t}function bp(e,t){let n;for(n in t){let i=(nl.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n],a;if(o)for(a in o){nl.call(i,a)||(i[a]=[]);let l=o[a];wp(i[a],Array.isArray(l)?l:l?[l]:[]);}}}function wp(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);se(e,0,0,r);}function Sn(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function fe(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var ue=Ve(/[A-Za-z]/),re=Ve(/[\dA-Za-z]/),rl=Ve(/[#-'*+\--9=?A-Z^-~]/);function rt(e){return e!==null&&(e<32||e===127)}var $t=Ve(/\d/),il=Ve(/[\dA-Fa-f]/),ol=Ve(/[!-/:-@[-`{-~]/);function I(e){return e!==null&&e<-2}function q(e){return e!==null&&(e<0||e===32)}function D(e){return e===-2||e===-1||e===32}var it=Ve(/\p{P}|\p{S}/u),Te=Ve(/\s/);function Ve(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function ke(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let o=e.charCodeAt(n),a="";if(o===37&&re(e.charCodeAt(n+1))&&re(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){let l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),i=1):a="\uFFFD";}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0);}return t.join("")+e.slice(r)}function L(e,t,n,r){let i=r?r-1:Number.POSITIVE_INFINITY,o=0;return a;function a(s){return D(s)?(e.enter(n),l(s)):t(s)}function l(s){return D(s)&&o++<i?(e.consume(s),l):(e.exit(n),t(s))}}var al={tokenize:kp};function kp(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),L(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){let s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return I(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}var sl={tokenize:_p},ll={tokenize:zp};function _p(e){let t=this,n=[],r=0,i,o,a;return l;function l(S){if(r<n.length){let R=n[r];return t.containerState=R[1],e.attempt(R[0].continuation,s,u)(S)}return u(S)}function s(S){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&z();let R=t.events.length,M=R,k;for(;M--;)if(t.events[M][0]==="exit"&&t.events[M][1].type==="chunkFlow"){k=t.events[M][1].end;break}y(r);let V=R;for(;V<t.events.length;)t.events[V][1].end={...k},V++;return se(t.events,M+1,0,t.events.slice(R)),t.events.length=V,u(S)}return l(S)}function u(S){if(r===n.length){if(!i)return m(S);if(i.currentConstruct&&i.currentConstruct.concrete)return h(S);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack);}return t.containerState={},e.check(ll,p,c)(S)}function p(S){return i&&z(),y(r),m(S)}function c(S){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,h(S)}function m(S){return t.containerState={},e.attempt(ll,f,h)(S)}function f(S){return r++,n.push([t.currentConstruct,t.containerState]),m(S)}function h(S){if(S===null){i&&z(),y(0),e.consume(S);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),v(S)}function v(S){if(S===null){w(e.exit("chunkFlow"),true),y(0),e.consume(S);return}return I(S)?(e.consume(S),w(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(S),v)}function w(S,R){let M=t.sliceStream(S);if(R&&M.push(null),S.previous=o,o&&(o.next=S),o=S,i.defineSkip(S.start),i.write(M),t.parser.lazy[S.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<a&&(!i.events[k][1].end||i.events[k][1].end.offset>a))return;let V=t.events.length,Y=V,$,b;for(;Y--;)if(t.events[Y][0]==="exit"&&t.events[Y][1].type==="chunkFlow"){if($){b=t.events[Y][1].end;break}$=true;}for(y(r),k=V;k<t.events.length;)t.events[k][1].end={...b},k++;se(t.events,Y+1,0,t.events.slice(V)),t.events.length=k;}}function y(S){let R=n.length;for(;R-- >S;){let M=n[R];t.containerState=M[1],M[0].exit.call(t,e);}n.length=S;}function z(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0;}}function zp(e,t,n){return L(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ue(e){if(e===null||q(e)||Te(e))return 1;if(it(e))return 2}function qe(e,t,n){let r=[],i=-1;for(;++i<e.length;){let o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o));}return t}var Wt={name:"attention",resolveAll:Sp,tokenize:Cp};function Sp(e,t){let n=-1,r,i,o,a,l,s,u,p;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let c={...e[r][1].end},m={...e[n][1].start};ul(c,-s),ul(m,s),a={type:s>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:m},o={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=ge(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=ge(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=ge(u,qe(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=ge(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(p=2,u=ge(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):p=0,se(e,r-1,n-r+3,u),n=r+u.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Cp(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Ue(r),o;return a;function a(s){return o=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===o)return e.consume(s),l;let u=e.exit("attentionSequence"),p=Ue(s),c=!p||p===2&&i||n.includes(s),m=!i||i===2&&p||n.includes(r);return u._open=!!(o===42?c:c&&(i||!m)),u._close=!!(o===42?m:m&&(p||!c)),t(s)}}function ul(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t;}var Hr={name:"autolink",tokenize:Ep};function Ep(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(f){return ue(f)?(e.consume(f),a):f===64?n(f):u(f)}function a(f){return f===43||f===45||f===46||re(f)?(r=1,l(f)):u(f)}function l(f){return f===58?(e.consume(f),r=0,s):(f===43||f===45||f===46||re(f))&&r++<32?(e.consume(f),l):(r=0,u(f))}function s(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||rt(f)?n(f):(e.consume(f),s)}function u(f){return f===64?(e.consume(f),p):rl(f)?(e.consume(f),u):n(f)}function p(f){return re(f)?c(f):n(f)}function c(f){return f===46?(e.consume(f),r=0,p):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):m(f)}function m(f){if((f===45||re(f))&&r++<63){let h=f===45?m:c;return e.consume(f),h}return n(f)}}var Pe={partial:true,tokenize:Ap};function Ap(e,t,n){return r;function r(o){return D(o)?L(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||I(o)?t(o):n(o)}}var Cn={continuation:{tokenize:Tp},exit:Pp,name:"blockQuote",tokenize:Ip};function Ip(e,t,n){let r=this;return i;function i(a){if(a===62){let l=r.containerState;return l.open||(e.enter("blockQuote",{_container:true}),l.open=true),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return D(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function Tp(e,t,n){let r=this;return i;function i(a){return D(a)?L(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Cn,t,n)(a)}}function Pp(e){e.exit("blockQuote");}var En={name:"characterEscape",tokenize:Lp};function Lp(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return ol(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}var An={name:"characterReference",tokenize:Rp};function Rp(e,t,n){let r=this,i=0,o,a;return l;function l(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),s}function s(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=re,p(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=il,p):(e.enter("characterReferenceValue"),o=7,a=$t,p(c))}function p(c){if(c===59&&i){let m=e.exit("characterReferenceValue");return a===re&&!bt(r.sliceSerialize(m))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(c)&&i++<o?(e.consume(c),p):n(c)}}var cl={partial:true,tokenize:Mp},In={concrete:true,name:"codeFenced",tokenize:Dp};function Dp(e,t,n){let r=this,i={partial:true,tokenize:M},o=0,a=0,l;return s;function s(k){return u(k)}function u(k){let V=r.events[r.events.length-1];return o=V&&V[1].type==="linePrefix"?V[2].sliceSerialize(V[1],true).length:0,l=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(k)}function p(k){return k===l?(a++,e.consume(k),p):a<3?n(k):(e.exit("codeFencedFenceSequence"),D(k)?L(e,c,"whitespace")(k):c(k))}function c(k){return k===null||I(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(cl,v,R)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(k))}function m(k){return k===null||I(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(k)):D(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),L(e,f,"whitespace")(k)):k===96&&k===l?n(k):(e.consume(k),m)}function f(k){return k===null||I(k)?c(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),h(k))}function h(k){return k===null||I(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(k)):k===96&&k===l?n(k):(e.consume(k),h)}function v(k){return e.attempt(i,R,w)(k)}function w(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),y}function y(k){return o>0&&D(k)?L(e,z,"linePrefix",o+1)(k):z(k)}function z(k){return k===null||I(k)?e.check(cl,v,R)(k):(e.enter("codeFlowValue"),S(k))}function S(k){return k===null||I(k)?(e.exit("codeFlowValue"),z(k)):(e.consume(k),S)}function R(k){return e.exit("codeFenced"),t(k)}function M(k,V,Y){let $=0;return b;function b(U){return k.enter("lineEnding"),k.consume(U),k.exit("lineEnding"),X}function X(U){return k.enter("codeFencedFence"),D(U)?L(k,O,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(U):O(U)}function O(U){return U===l?(k.enter("codeFencedFenceSequence"),T(U)):Y(U)}function T(U){return U===l?($++,k.consume(U),T):$>=a?(k.exit("codeFencedFenceSequence"),D(U)?L(k,B,"whitespace")(U):B(U)):Y(U)}function B(U){return U===null||I(U)?(k.exit("codeFencedFence"),V(U)):Y(U)}}}function Mp(e,t,n){let r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}var Vt={name:"codeIndented",tokenize:Fp},Np={partial:true,tokenize:Op};function Fp(e,t,n){let r=this;return i;function i(u){return e.enter("codeIndented"),L(e,o,"linePrefix",5)(u)}function o(u){let p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],true).length>=4?a(u):n(u)}function a(u){return u===null?s(u):I(u)?e.attempt(Np,a,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||I(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),t(u)}}function Op(e,t,n){let r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):I(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):L(e,o,"linePrefix",5)(a)}function o(a){let l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(a):I(a)?i(a):n(a)}}var jr={name:"codeText",previous:Bp,resolve:Up,tokenize:Hp};function Up(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Bp(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Hp(e,t,n){let i=0,o,a;return l;function l(m){return e.enter("codeText"),e.enter("codeTextSequence"),s(m)}function s(m){return m===96?(e.consume(m),i++,s):(e.exit("codeTextSequence"),u(m))}function u(m){return m===null?n(m):m===32?(e.enter("space"),e.consume(m),e.exit("space"),u):m===96?(a=e.enter("codeTextSequence"),o=0,c(m)):I(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),u):(e.enter("codeTextData"),p(m))}function p(m){return m===null||m===32||m===96||I(m)?(e.exit("codeTextData"),u(m)):(e.consume(m),p)}function c(m){return m===96?(e.consume(m),o++,c):o===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(m)):(a.type="codeTextData",p(m))}}var Tn=class{constructor(t){this.left=t?[...t]:[],this.right=[];}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let i=n||0;this.setCursor(Math.trunc(t));let o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&qt(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t);}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),qt(this.left,t);}unshift(t){this.setCursor(0),this.right.push(t);}unshiftMany(t){this.setCursor(0),qt(this.right,t.reverse());}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,Number.POSITIVE_INFINITY);qt(this.right,n.reverse());}else {let n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);qt(this.left,n.reverse());}}};function qt(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4;}function Pn(e){let t={},n=-1,r,i,o,a,l,s,u,p=new Tn(e);for(;++n<p.length;){for(;n in t;)n=t[n];if(r=p.get(n),n&&r[1].type==="chunkFlow"&&p.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,o=0,o<s.length&&s[o][1].type==="lineEndingBlank"&&(o+=2),o<s.length&&s[o][1].type==="content"))for(;++o<s.length&&s[o][1].type!=="content";)s[o][1].type==="chunkText"&&(s[o][1]._isInFirstContentOfListItem=true,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,jp(p,n)),n=t[n],u=true);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=p.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(p.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...p.get(i)[1].start},l=p.slice(i,n),l.unshift(r),p.splice(i,n-i+1,l));}}return se(e,0,Number.POSITIVE_INFINITY,p.slice(0)),!u}function jp(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,o=[],a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=true));let l=a.events,s=[],u={},p,c,m=-1,f=n,h=0,v=0,w=[v];for(;f;){for(;e.get(++i)[1]!==f;);o.push(i),f._tokenizer||(p=r.sliceStream(f),f.next||p.push(null),c&&a.defineSkip(f.start),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=true),a.write(p),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),c=f,f=f.next;}for(f=n;++m<l.length;)l[m][0]==="exit"&&l[m-1][0]==="enter"&&l[m][1].type===l[m-1][1].type&&l[m][1].start.line!==l[m][1].end.line&&(v=m+1,w.push(v),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(a.events=[],f?(f._tokenizer=void 0,f.previous=void 0):w.pop(),m=w.length;m--;){let y=l.slice(w[m],w[m+1]),z=o.pop();s.push([z,z+y.length-1]),e.splice(z,2,y);}for(s.reverse(),m=-1;++m<s.length;)u[h+s[m][0]]=h+s[m][1],h+=s[m][1]-s[m][0]-1;return u}var $r={resolve:Wp,tokenize:Vp},$p={partial:true,tokenize:qp};function Wp(e){return Pn(e),e}function Vp(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):I(l)?e.check($p,a,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function qp(e,t,n){let r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),L(e,o,"linePrefix")}function o(a){if(a===null||I(a))return n(a);let l=r.events[r.events.length-1];return !r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Ln(e,t,n,r,i,o,a,l,s){let u=s||Number.POSITIVE_INFINITY,p=0;return c;function c(y){return y===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(y),e.exit(o),m):y===null||y===32||y===41||rt(y)?n(y):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),v(y))}function m(y){return y===62?(e.enter(o),e.consume(y),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),f(y))}function f(y){return y===62?(e.exit("chunkString"),e.exit(l),m(y)):y===null||y===60||I(y)?n(y):(e.consume(y),y===92?h:f)}function h(y){return y===60||y===62||y===92?(e.consume(y),f):f(y)}function v(y){return !p&&(y===null||y===41||q(y))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(y)):p<u&&y===40?(e.consume(y),p++,v):y===41?(e.consume(y),p--,v):y===null||y===32||y===40||rt(y)?n(y):(e.consume(y),y===92?w:v)}function w(y){return y===40||y===41||y===92?(e.consume(y),v):v(y)}}function Rn(e,t,n,r,i,o){let a=this,l=0,s;return u;function u(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(o),p}function p(f){return l>999||f===null||f===91||f===93&&!s||f===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(f):f===93?(e.exit(o),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):I(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),c(f))}function c(f){return f===null||f===91||f===93||I(f)||l++>999?(e.exit("chunkString"),p(f)):(e.consume(f),s||(s=!D(f)),f===92?m:c)}function m(f){return f===91||f===92||f===93?(e.consume(f),l++,c):c(f)}}function Dn(e,t,n,r,i,o){let a;return l;function l(m){return m===34||m===39||m===40?(e.enter(r),e.enter(i),e.consume(m),e.exit(i),a=m===40?41:m,s):n(m)}function s(m){return m===a?(e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):(e.enter(o),u(m))}function u(m){return m===a?(e.exit(o),s(a)):m===null?n(m):I(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),L(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===a||m===null||I(m)?(e.exit("chunkString"),u(m)):(e.consume(m),m===92?c:p)}function c(m){return m===a||m===92?(e.consume(m),p):p(m)}}function ot(e,t){let n;return r;function r(i){return I(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=true,r):D(i)?L(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}var Wr={name:"definition",tokenize:Kp},Yp={partial:true,tokenize:Xp};function Kp(e,t,n){let r=this,i;return o;function o(f){return e.enter("definition"),a(f)}function a(f){return Rn.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function l(f){return i=fe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),s):n(f)}function s(f){return q(f)?ot(e,u)(f):u(f)}function u(f){return Ln(e,p,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function p(f){return e.attempt(Yp,c,c)(f)}function c(f){return D(f)?L(e,m,"whitespace")(f):m(f)}function m(f){return f===null||I(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function Xp(e,t,n){return r;function r(l){return q(l)?ot(e,i)(l):n(l)}function i(l){return Dn(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return D(l)?L(e,a,"whitespace")(l):a(l)}function a(l){return l===null||I(l)?t(l):n(l)}}var Vr={name:"hardBreakEscape",tokenize:Gp};function Gp(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return I(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}var qr={name:"headingAtx",resolve:Jp,tokenize:Qp};function Jp(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},se(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Qp(e,t,n){let r=0;return i;function i(p){return e.enter("atxHeading"),o(p)}function o(p){return e.enter("atxHeadingSequence"),a(p)}function a(p){return p===35&&r++<6?(e.consume(p),a):p===null||q(p)?(e.exit("atxHeadingSequence"),l(p)):n(p)}function l(p){return p===35?(e.enter("atxHeadingSequence"),s(p)):p===null||I(p)?(e.exit("atxHeading"),t(p)):D(p)?L(e,l,"whitespace")(p):(e.enter("atxHeadingText"),u(p))}function s(p){return p===35?(e.consume(p),s):(e.exit("atxHeadingSequence"),l(p))}function u(p){return p===null||p===35||q(p)?(e.exit("atxHeadingText"),l(p)):(e.consume(p),u)}}var pl=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Yr=["pre","script","style","textarea"];var Kr={concrete:true,name:"htmlFlow",resolveTo:tf,tokenize:nf},Zp={partial:true,tokenize:of},ef={partial:true,tokenize:rf};function tf(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function nf(e,t,n){let r=this,i,o,a,l,s;return u;function u(g){return p(g)}function p(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),c}function c(g){return g===33?(e.consume(g),m):g===47?(e.consume(g),o=true,v):g===63?(e.consume(g),i=3,r.interrupt?t:d):ue(g)?(e.consume(g),a=String.fromCharCode(g),w):n(g)}function m(g){return g===45?(e.consume(g),i=2,f):g===91?(e.consume(g),i=5,l=0,h):ue(g)?(e.consume(g),i=4,r.interrupt?t:d):n(g)}function f(g){return g===45?(e.consume(g),r.interrupt?t:d):n(g)}function h(g){let ie="CDATA[";return g===ie.charCodeAt(l++)?(e.consume(g),l===ie.length?r.interrupt?t:O:h):n(g)}function v(g){return ue(g)?(e.consume(g),a=String.fromCharCode(g),w):n(g)}function w(g){if(g===null||g===47||g===62||q(g)){let ie=g===47,he=a.toLowerCase();return !ie&&!o&&Yr.includes(he)?(i=1,r.interrupt?t(g):O(g)):pl.includes(a.toLowerCase())?(i=6,ie?(e.consume(g),y):r.interrupt?t(g):O(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):o?z(g):S(g))}return g===45||re(g)?(e.consume(g),a+=String.fromCharCode(g),w):n(g)}function y(g){return g===62?(e.consume(g),r.interrupt?t:O):n(g)}function z(g){return D(g)?(e.consume(g),z):b(g)}function S(g){return g===47?(e.consume(g),b):g===58||g===95||ue(g)?(e.consume(g),R):D(g)?(e.consume(g),S):b(g)}function R(g){return g===45||g===46||g===58||g===95||re(g)?(e.consume(g),R):M(g)}function M(g){return g===61?(e.consume(g),k):D(g)?(e.consume(g),M):S(g)}function k(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),s=g,V):D(g)?(e.consume(g),k):Y(g)}function V(g){return g===s?(e.consume(g),s=null,$):g===null||I(g)?n(g):(e.consume(g),V)}function Y(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||q(g)?M(g):(e.consume(g),Y)}function $(g){return g===47||g===62||D(g)?S(g):n(g)}function b(g){return g===62?(e.consume(g),X):n(g)}function X(g){return g===null||I(g)?O(g):D(g)?(e.consume(g),X):n(g)}function O(g){return g===45&&i===2?(e.consume(g),Q):g===60&&i===1?(e.consume(g),P):g===62&&i===4?(e.consume(g),F):g===63&&i===3?(e.consume(g),d):g===93&&i===5?(e.consume(g),W):I(g)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Zp,G,T)(g)):g===null||I(g)?(e.exit("htmlFlowData"),T(g)):(e.consume(g),O)}function T(g){return e.check(ef,B,G)(g)}function B(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),U}function U(g){return g===null||I(g)?T(g):(e.enter("htmlFlowData"),O(g))}function Q(g){return g===45?(e.consume(g),d):O(g)}function P(g){return g===47?(e.consume(g),a="",A):O(g)}function A(g){if(g===62){let ie=a.toLowerCase();return Yr.includes(ie)?(e.consume(g),F):O(g)}return ue(g)&&a.length<8?(e.consume(g),a+=String.fromCharCode(g),A):O(g)}function W(g){return g===93?(e.consume(g),d):O(g)}function d(g){return g===62?(e.consume(g),F):g===45&&i===2?(e.consume(g),d):O(g)}function F(g){return g===null||I(g)?(e.exit("htmlFlowData"),G(g)):(e.consume(g),F)}function G(g){return e.exit("htmlFlow"),t(g)}}function rf(e,t,n){let r=this;return i;function i(a){return I(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function of(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Pe,t,n)}}var Xr={name:"htmlText",tokenize:af};function af(e,t,n){let r=this,i,o,a;return l;function l(d){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(d),s}function s(d){return d===33?(e.consume(d),u):d===47?(e.consume(d),M):d===63?(e.consume(d),S):ue(d)?(e.consume(d),Y):n(d)}function u(d){return d===45?(e.consume(d),p):d===91?(e.consume(d),o=0,h):ue(d)?(e.consume(d),z):n(d)}function p(d){return d===45?(e.consume(d),f):n(d)}function c(d){return d===null?n(d):d===45?(e.consume(d),m):I(d)?(a=c,P(d)):(e.consume(d),c)}function m(d){return d===45?(e.consume(d),f):c(d)}function f(d){return d===62?Q(d):d===45?m(d):c(d)}function h(d){let F="CDATA[";return d===F.charCodeAt(o++)?(e.consume(d),o===F.length?v:h):n(d)}function v(d){return d===null?n(d):d===93?(e.consume(d),w):I(d)?(a=v,P(d)):(e.consume(d),v)}function w(d){return d===93?(e.consume(d),y):v(d)}function y(d){return d===62?Q(d):d===93?(e.consume(d),y):v(d)}function z(d){return d===null||d===62?Q(d):I(d)?(a=z,P(d)):(e.consume(d),z)}function S(d){return d===null?n(d):d===63?(e.consume(d),R):I(d)?(a=S,P(d)):(e.consume(d),S)}function R(d){return d===62?Q(d):S(d)}function M(d){return ue(d)?(e.consume(d),k):n(d)}function k(d){return d===45||re(d)?(e.consume(d),k):V(d)}function V(d){return I(d)?(a=V,P(d)):D(d)?(e.consume(d),V):Q(d)}function Y(d){return d===45||re(d)?(e.consume(d),Y):d===47||d===62||q(d)?$(d):n(d)}function $(d){return d===47?(e.consume(d),Q):d===58||d===95||ue(d)?(e.consume(d),b):I(d)?(a=$,P(d)):D(d)?(e.consume(d),$):Q(d)}function b(d){return d===45||d===46||d===58||d===95||re(d)?(e.consume(d),b):X(d)}function X(d){return d===61?(e.consume(d),O):I(d)?(a=X,P(d)):D(d)?(e.consume(d),X):$(d)}function O(d){return d===null||d===60||d===61||d===62||d===96?n(d):d===34||d===39?(e.consume(d),i=d,T):I(d)?(a=O,P(d)):D(d)?(e.consume(d),O):(e.consume(d),B)}function T(d){return d===i?(e.consume(d),i=void 0,U):d===null?n(d):I(d)?(a=T,P(d)):(e.consume(d),T)}function B(d){return d===null||d===34||d===39||d===60||d===61||d===96?n(d):d===47||d===62||q(d)?$(d):(e.consume(d),B)}function U(d){return d===47||d===62||q(d)?$(d):n(d)}function Q(d){return d===62?(e.consume(d),e.exit("htmlTextData"),e.exit("htmlText"),t):n(d)}function P(d){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),A}function A(d){return D(d)?L(e,W,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):W(d)}function W(d){return e.enter("htmlTextData"),a(d)}}var at={name:"labelEnd",resolveAll:cf,resolveTo:pf,tokenize:ff},lf={tokenize:mf},sf={tokenize:hf},uf={tokenize:df};function cf(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let i=r.type==="labelImage"?4:2;r.type="data",t+=i;}}return e.length!==n.length&&se(e,0,e.length,n),e}function pf(e,t){let n=e.length,r=0,i,o,a,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=true);}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);let s={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},p={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",s,t],["enter",u,t]],l=ge(l,e.slice(o+1,o+r+3)),l=ge(l,[["enter",p,t]]),l=ge(l,qe(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=ge(l,[["exit",p,t],e[a-2],e[a-1],["exit",u,t]]),l=ge(l,e.slice(a+1)),l=ge(l,[["exit",s,t]]),se(e,o,e.length,l),e}function ff(e,t,n){let r=this,i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(m){return o?o._inactive?c(m):(a=r.parser.defined.includes(fe(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(m),e.exit("labelMarker"),e.exit("labelEnd"),s):n(m)}function s(m){return m===40?e.attempt(lf,p,a?p:c)(m):m===91?e.attempt(sf,p,a?u:c)(m):a?p(m):c(m)}function u(m){return e.attempt(uf,p,c)(m)}function p(m){return t(m)}function c(m){return o._balanced=true,n(m)}}function mf(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return q(c)?ot(e,o)(c):o(c)}function o(c){return c===41?p(c):Ln(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function a(c){return q(c)?ot(e,s)(c):p(c)}function l(c){return n(c)}function s(c){return c===34||c===39||c===40?Dn(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):p(c)}function u(c){return q(c)?ot(e,p)(c):p(c)}function p(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function hf(e,t,n){let r=this;return i;function i(l){return Rn.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(fe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function df(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}var Gr={name:"labelStartImage",resolveAll:at.resolveAll,tokenize:gf};function gf(e,t,n){let r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}var Jr={name:"labelStartLink",resolveAll:at.resolveAll,tokenize:yf};function yf(e,t,n){let r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}var Yt={name:"lineEnding",tokenize:vf};function vf(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),L(e,t,"linePrefix")}}var lt={name:"thematicBreak",tokenize:xf};function xf(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||I(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),D(u)?L(e,l,"whitespace")(u):l(u))}}var me={continuation:{tokenize:_f},exit:Sf,name:"list",tokenize:kf},bf={partial:true,tokenize:Cf},wf={partial:true,tokenize:zf};function kf(e,t,n){let r=this,i=r.events[r.events.length-1],o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],true).length:0,a=0;return l;function l(f){let h=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(h==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:$t(f)){if(r.containerState.type||(r.containerState.type=h,e.enter(h,{_container:true})),h==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(lt,n,u)(f):u(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(f)}return n(f)}function s(f){return $t(f)&&++a<10?(e.consume(f),s):(!r.interrupt||a<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),u(f)):n(f)}function u(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(Pe,r.interrupt?n:p,e.attempt(bf,m,c))}function p(f){return r.containerState.initialBlankLine=true,o++,m(f)}function c(f){return D(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),m):n(f)}function m(f){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),true).length,t(f)}}function _f(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Pe,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,L(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!D(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(wf,t,a)(l))}function a(l){return r.containerState._closeFlow=true,r.interrupt=void 0,L(e,e.attempt(me,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function zf(e,t,n){let r=this;return L(e,i,"listItemIndent",r.containerState.size+1);function i(o){let a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],true).length===r.containerState.size?t(o):n(o)}}function Sf(e){e.exit(this.containerState.type);}function Cf(e,t,n){let r=this;return L(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){let a=r.events[r.events.length-1];return !D(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}var Mn={name:"setextUnderline",resolveTo:Ef,tokenize:Af};function Ef(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n);}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);let a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function Af(e,t,n){let r=this,i;return o;function o(u){let p=r.events.length,c;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){c=r.events[p][1].type==="paragraph";break}return !r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),D(u)?L(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||I(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}var fl={tokenize:If};function If(e){let t=this,n=e.attempt(Pe,r,e.attempt(this.parser.constructs.flowInitial,i,L(e,e.attempt(this.parser.constructs.flow,i,e.attempt($r,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}var ml={resolveAll:yl()},hl=gl("string"),dl=gl("text");function gl(e){return {resolveAll:yl(e==="text"?Tf:void 0),tokenize:t};function t(n){let r=this,i=this.parser.constructs[e],o=n.attempt(i,a,l);return a;function a(p){return u(p)?o(p):l(p)}function l(p){if(p===null){n.consume(p);return}return n.enter("data"),n.consume(p),s}function s(p){return u(p)?(n.exit("data"),o(p)):(n.consume(p),s)}function u(p){if(p===null)return  true;let c=i[p],m=-1;if(c)for(;++m<c.length;){let f=c[m];if(!f.previous||f.previous.call(r,r.previous))return  true}return  false}}}function yl(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function Tf(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],i=t.sliceStream(r),o=i.length,a=-1,l=0,s;for(;o--;){let u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1;}else if(u===-2)s=true,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){let u={type:n===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2);}n++;}return e}var Qr={};ao(Qr,{attentionMarkers:()=>Of,contentInitial:()=>Lf,disable:()=>Uf,document:()=>Pf,flow:()=>Df,flowInitial:()=>Rf,insideSpan:()=>Ff,string:()=>Mf,text:()=>Nf});var Pf={42:me,43:me,45:me,48:me,49:me,50:me,51:me,52:me,53:me,54:me,55:me,56:me,57:me,62:Cn},Lf={91:Wr},Rf={[-2]:Vt,[-1]:Vt,32:Vt},Df={35:qr,42:lt,45:[Mn,lt],60:Kr,61:Mn,95:lt,96:In,126:In},Mf={38:An,92:En},Nf={[-5]:Yt,[-4]:Yt,[-3]:Yt,33:Gr,38:An,42:Wt,60:[Hr,Xr],91:Jr,92:[Vr,En],93:at,95:Wt,96:jr},Ff={null:[Wt,ml]},Of={null:[42,95]},Uf={null:[]};function vl(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},o=[],a=[],l=[],u={attempt:$(V),check:$(Y),consume:R,enter:M,exit:k,interrupt:$(Y,{interrupt:true})},p={code:null,containerState:{},defineSkip:y,events:[],now:w,parser:e,previous:null,sliceSerialize:h,sliceStream:v,write:f},c=t.tokenize.call(p,u);return t.resolveAll&&o.push(t),p;function f(T){return a=ge(a,T),z(),a[a.length-1]!==null?[]:(b(t,0),p.events=qe(o,p.events,p),p.events)}function h(T,B){return Hf(v(T),B)}function v(T){return Bf(a,T)}function w(){let{_bufferIndex:T,_index:B,line:U,column:Q,offset:P}=r;return {_bufferIndex:T,_index:B,line:U,column:Q,offset:P}}function y(T){i[T.line]=T.column,O();}function z(){let T;for(;r._index<a.length;){let B=a[r._index];if(typeof B=="string")for(T=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===T&&r._bufferIndex<B.length;)S(B.charCodeAt(r._bufferIndex));else S(B);}}function S(T){c=c(T);}function R(T){I(T)?(r.line++,r.column=1,r.offset+=T===-3?2:1,O()):T!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),p.previous=T;}function M(T,B){let U=B||{};return U.type=T,U.start=w(),p.events.push(["enter",U,p]),l.push(U),U}function k(T){let B=l.pop();return B.end=w(),p.events.push(["exit",B,p]),B}function V(T,B){b(T,B.from);}function Y(T,B){B.restore();}function $(T,B){return U;function U(Q,P,A){let W,d,F,G;return Array.isArray(Q)?ie(Q):"tokenize"in Q?ie([Q]):g(Q);function g(oe){return _e;function _e(de){let Re=de!==null&&oe[de],De=de!==null&&oe.null,ee=[...Array.isArray(Re)?Re:Re?[Re]:[],...Array.isArray(De)?De:De?[De]:[]];return ie(ee)(de)}}function ie(oe){return W=oe,d=0,oe.length===0?A:he(oe[d])}function he(oe){return _e;function _e(de){return G=X(),F=oe,oe.partial||(p.currentConstruct=oe),oe.name&&p.parser.constructs.disable.null.includes(oe.name)?He():oe.tokenize.call(B?Object.assign(Object.create(p),B):p,u,It,He)(de)}}function It(oe){return T(F,G),P}function He(oe){return G.restore(),++d<W.length?he(W[d]):A}}}function b(T,B){T.resolveAll&&!o.includes(T)&&o.push(T),T.resolve&&se(p.events,B,p.events.length-B,T.resolve(p.events.slice(B),p)),T.resolveTo&&(p.events=T.resolveTo(p.events,p));}function X(){let T=w(),B=p.previous,U=p.currentConstruct,Q=p.events.length,P=Array.from(l);return {from:Q,restore:A};function A(){r=T,p.previous=B,p.currentConstruct=U,p.events.length=Q,l=P,O();}}function O(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1);}}function Bf(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex,a;if(n===i)a=[e[n].slice(r,o)];else {if(a=e.slice(n,i),r>-1){let l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift();}o>0&&a.push(e[i].slice(0,o));}return a}function Hf(e,t){let n=-1,r=[],i;for(;++n<e.length;){let o=e[n],a;if(typeof o=="string")a=o;else switch(o){case  -5:{a="\r";break}case  -4:{a=`
`;break}case  -3:{a=`\r
`;break}case  -2:{a=t?" ":"	";break}case  -1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o);}i=o===-2,r.push(a);}return r.join("")}function Zr(e){let r={constructs:zn([Qr,...(e||{}).extensions||[]]),content:i(al),defined:[],document:i(sl),flow:i(fl),lazy:{},string:i(hl),text:i(dl)};return r;function i(o){return a;function a(l){return vl(r,o,l)}}}function ei(e){for(;!Pn(e););return e}var xl=/[\0\t\n\r]/g;function ti(){let e=1,t="",n=true,r;return i;function i(o,a,l){let s=[],u,p,c,m,f;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),c=0,t="",n&&(o.charCodeAt(0)===65279&&c++,n=void 0);c<o.length;){if(xl.lastIndex=c,u=xl.exec(o),m=u&&u.index!==void 0?u.index:o.length,f=o.charCodeAt(m),!u){t=o.slice(c);break}if(f===10&&c===m&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),c<m&&(s.push(o.slice(c,m)),e+=m-c),f){case 0:{s.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,s.push(-2);e++<p;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=true,e=1;}c=m+1;}return l&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var jf=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function bl(e){return e.replace(jf,$f)}function $f(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let i=n.charCodeAt(1),o=i===120||i===88;return Sn(n.slice(o?2:1),o?16:10)}return bt(n)||e}var kl={}.hasOwnProperty;function ni(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Wf(n)(ei(Zr(n).document().write(ti()(e,t,true))))}function Wf(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(io),autolinkProtocol:$,autolinkEmail:$,atxHeading:o(ze),blockQuote:o(de),characterEscape:$,characterReference:$,codeFenced:o(Re),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(Re,a),codeText:o(De,a),codeTextData:$,data:$,codeFlowValue:$,definition:o(ee),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(ve),hardBreakEscape:o(Tt),hardBreakTrailing:o(Tt),htmlFlow:o(Zt,a),htmlFlowData:$,htmlText:o(Zt,a),htmlTextData:$,image:o(en),label:a,link:o(io),listItem:o(gu),listItemValue:m,listOrdered:o(oo,c),listUnordered:o(oo),paragraph:o(yu),reference:g,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(ze),strong:o(vu),thematicBreak:o(bu)},exit:{atxHeading:s(),atxHeadingSequence:M,autolink:s(),autolinkEmail:_e,autolinkProtocol:oe,blockQuote:s(),characterEscapeValue:b,characterReferenceMarkerHexadecimal:he,characterReferenceMarkerNumeric:he,characterReferenceValue:It,characterReference:He,codeFenced:s(w),codeFencedFence:v,codeFencedFenceInfo:f,codeFencedFenceMeta:h,codeFlowValue:b,codeIndented:s(y),codeText:s(U),codeTextData:b,data:b,definition:s(),definitionDestinationString:R,definitionLabelString:z,definitionTitleString:S,emphasis:s(),hardBreakEscape:s(O),hardBreakTrailing:s(O),htmlFlow:s(T),htmlFlowData:b,htmlText:s(B),htmlTextData:b,image:s(P),label:W,labelText:A,lineEnding:X,link:s(Q),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:ie,resourceDestinationString:d,resourceTitleString:F,resource:G,setextHeading:s(Y),setextHeadingLineSequence:V,setextHeadingText:k,strong:s(),thematicBreak:s()}};_l(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(_){let E={type:"root",children:[]},H={stack:[E],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:p,data:n},K=[],Z=-1;for(;++Z<_.length;)if(_[Z][1].type==="listOrdered"||_[Z][1].type==="listUnordered")if(_[Z][0]==="enter")K.push(Z);else {let Se=K.pop();Z=i(_,Se,Z);}for(Z=-1;++Z<_.length;){let Se=t[_[Z][0]];kl.call(Se,_[Z][1].type)&&Se[_[Z][1].type].call(Object.assign({sliceSerialize:_[Z][2].sliceSerialize},H),_[Z][1]);}if(H.tokenStack.length>0){let Se=H.tokenStack[H.tokenStack.length-1];(Se[1]||wl).call(H,void 0,Se[0]);}for(E.position={start:Ye(_.length>0?_[0][1].start:{line:1,column:1,offset:0}),end:Ye(_.length>0?_[_.length-2][1].end:{line:1,column:1,offset:0})},Z=-1;++Z<t.transforms.length;)E=t.transforms[Z](E)||E;return E}function i(_,E,H){let K=E-1,Z=-1,Se=false,Ge,Me,Pt,Lt;for(;++K<=H;){let xe=_[K];switch(xe[1].type){case "listUnordered":case "listOrdered":case "blockQuote":{xe[0]==="enter"?Z++:Z--,Lt=void 0;break}case "lineEndingBlank":{xe[0]==="enter"&&(Ge&&!Lt&&!Z&&!Pt&&(Pt=K),Lt=void 0);break}case "linePrefix":case "listItemValue":case "listItemMarker":case "listItemPrefix":case "listItemPrefixWhitespace":break;default:Lt=void 0;}if(!Z&&xe[0]==="enter"&&xe[1].type==="listItemPrefix"||Z===-1&&xe[0]==="exit"&&(xe[1].type==="listUnordered"||xe[1].type==="listOrdered")){if(Ge){let ft=K;for(Me=void 0;ft--;){let Ne=_[ft];if(Ne[1].type==="lineEnding"||Ne[1].type==="lineEndingBlank"){if(Ne[0]==="exit")continue;Me&&(_[Me][1].type="lineEndingBlank",Se=true),Ne[1].type="lineEnding",Me=ft;}else if(!(Ne[1].type==="linePrefix"||Ne[1].type==="blockQuotePrefix"||Ne[1].type==="blockQuotePrefixWhitespace"||Ne[1].type==="blockQuoteMarker"||Ne[1].type==="listItemIndent"))break}Pt&&(!Me||Pt<Me)&&(Ge._spread=true),Ge.end=Object.assign({},Me?_[Me][1].start:xe[1].end),_.splice(Me||K,0,["exit",Ge,xe[2]]),K++,H++;}if(xe[1].type==="listItemPrefix"){let ft={type:"listItem",_spread:false,start:Object.assign({},xe[1].start),end:void 0};Ge=ft,_.splice(K,0,["enter",ft,xe[2]]),K++,H++,Pt=void 0,Lt=true;}}}return _[E][1]._spread=Se,H}function o(_,E){return H;function H(K){l.call(this,_(K),K),E&&E.call(this,K);}}function a(){this.stack.push({type:"fragment",children:[]});}function l(_,E,H){this.stack[this.stack.length-1].children.push(_),this.stack.push(_),this.tokenStack.push([E,H||void 0]),_.position={start:Ye(E.start),end:void 0};}function s(_){return E;function E(H){_&&_.call(this,H),u.call(this,H);}}function u(_,E){let H=this.stack.pop(),K=this.tokenStack.pop();if(K)K[0].type!==_.type&&(E?E.call(this,_,K[0]):(K[1]||wl).call(this,_,K[0]));else throw new Error("Cannot close `"+_.type+"` ("+We({start:_.start,end:_.end})+"): it\u2019s not open");H.position.end=Ye(_.end);}function p(){return nt(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=true;}function m(_){if(this.data.expectingFirstListItemValue){let E=this.stack[this.stack.length-2];E.start=Number.parseInt(this.sliceSerialize(_),10),this.data.expectingFirstListItemValue=void 0;}}function f(){let _=this.resume(),E=this.stack[this.stack.length-1];E.lang=_;}function h(){let _=this.resume(),E=this.stack[this.stack.length-1];E.meta=_;}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=true);}function w(){let _=this.resume(),E=this.stack[this.stack.length-1];E.value=_.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0;}function y(){let _=this.resume(),E=this.stack[this.stack.length-1];E.value=_.replace(/(\r?\n|\r)$/g,"");}function z(_){let E=this.resume(),H=this.stack[this.stack.length-1];H.label=E,H.identifier=fe(this.sliceSerialize(_)).toLowerCase();}function S(){let _=this.resume(),E=this.stack[this.stack.length-1];E.title=_;}function R(){let _=this.resume(),E=this.stack[this.stack.length-1];E.url=_;}function M(_){let E=this.stack[this.stack.length-1];if(!E.depth){let H=this.sliceSerialize(_).length;E.depth=H;}}function k(){this.data.setextHeadingSlurpLineEnding=true;}function V(_){let E=this.stack[this.stack.length-1];E.depth=this.sliceSerialize(_).codePointAt(0)===61?1:2;}function Y(){this.data.setextHeadingSlurpLineEnding=void 0;}function $(_){let H=this.stack[this.stack.length-1].children,K=H[H.length-1];(!K||K.type!=="text")&&(K=xu(),K.position={start:Ye(_.start),end:void 0},H.push(K)),this.stack.push(K);}function b(_){let E=this.stack.pop();E.value+=this.sliceSerialize(_),E.position.end=Ye(_.end);}function X(_){let E=this.stack[this.stack.length-1];if(this.data.atHardBreak){let H=E.children[E.children.length-1];H.position.end=Ye(_.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(E.type)&&($.call(this,_),b.call(this,_));}function O(){this.data.atHardBreak=true;}function T(){let _=this.resume(),E=this.stack[this.stack.length-1];E.value=_;}function B(){let _=this.resume(),E=this.stack[this.stack.length-1];E.value=_;}function U(){let _=this.resume(),E=this.stack[this.stack.length-1];E.value=_;}function Q(){let _=this.stack[this.stack.length-1];if(this.data.inReference){let E=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=E,delete _.url,delete _.title;}else delete _.identifier,delete _.label;this.data.referenceType=void 0;}function P(){let _=this.stack[this.stack.length-1];if(this.data.inReference){let E=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=E,delete _.url,delete _.title;}else delete _.identifier,delete _.label;this.data.referenceType=void 0;}function A(_){let E=this.sliceSerialize(_),H=this.stack[this.stack.length-2];H.label=bl(E),H.identifier=fe(E).toLowerCase();}function W(){let _=this.stack[this.stack.length-1],E=this.resume(),H=this.stack[this.stack.length-1];if(this.data.inReference=true,H.type==="link"){let K=_.children;H.children=K;}else H.alt=E;}function d(){let _=this.resume(),E=this.stack[this.stack.length-1];E.url=_;}function F(){let _=this.resume(),E=this.stack[this.stack.length-1];E.title=_;}function G(){this.data.inReference=void 0;}function g(){this.data.referenceType="collapsed";}function ie(_){let E=this.resume(),H=this.stack[this.stack.length-1];H.label=E,H.identifier=fe(this.sliceSerialize(_)).toLowerCase(),this.data.referenceType="full";}function he(_){this.data.characterReferenceType=_.type;}function It(_){let E=this.sliceSerialize(_),H=this.data.characterReferenceType,K;H?(K=Sn(E,H==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):K=bt(E);let Z=this.stack[this.stack.length-1];Z.value+=K;}function He(_){let E=this.stack.pop();E.position.end=Ye(_.end);}function oe(_){b.call(this,_);let E=this.stack[this.stack.length-1];E.url=this.sliceSerialize(_);}function _e(_){b.call(this,_);let E=this.stack[this.stack.length-1];E.url="mailto:"+this.sliceSerialize(_);}function de(){return {type:"blockquote",children:[]}}function Re(){return {type:"code",lang:null,meta:null,value:""}}function De(){return {type:"inlineCode",value:""}}function ee(){return {type:"definition",identifier:"",label:null,title:null,url:""}}function ve(){return {type:"emphasis",children:[]}}function ze(){return {type:"heading",depth:0,children:[]}}function Tt(){return {type:"break"}}function Zt(){return {type:"html",value:""}}function en(){return {type:"image",title:null,url:"",alt:null}}function io(){return {type:"link",title:null,url:"",children:[]}}function oo(_){return {type:"list",ordered:_.type==="listOrdered",start:null,spread:_._spread,children:[]}}function gu(_){return {type:"listItem",spread:_._spread,checked:null,children:[]}}function yu(){return {type:"paragraph",children:[]}}function vu(){return {type:"strong",children:[]}}function xu(){return {type:"text",value:""}}function bu(){return {type:"thematicBreak"}}}function Ye(e){return {line:e.line,column:e.column,offset:e.offset}}function _l(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?_l(e,r):Vf(e,r);}}function Vf(e,t){let n;for(n in t)if(kl.call(t,n))switch(n){case "canContainEols":{let r=t[n];r&&e[n].push(...r);break}case "transforms":{let r=t[n];r&&e[n].push(...r);break}case "enter":case "exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function wl(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+We({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+We({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+We({start:t.start,end:t.end})+") is still open")}function Nn(e){let t=this;t.parser=n;function n(r){return ni(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function zl(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),true)};return e.patch(t,n),e.applyData(t,n)}function Sl(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Cl(e,t){let n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function El(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Al(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Il(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=ke(r.toLowerCase()),o=e.footnoteOrder.indexOf(r),a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);let s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:true,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,s);let u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function Tl(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Pl(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Fn(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return [{type:"text",value:"!["+t.alt+r}];let i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});let a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function Ll(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Fn(e,t);let i={src:ke(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function Rl(e,t){let n={src:ke(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Dl(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Ml(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Fn(e,t);let i={href:ke(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);let o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Nl(e,t){let n={href:ke(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Fl(e,t,n){let r=e.all(t),i=n?qf(n):Ol(t),o={},a=[];if(typeof t.checked=="boolean"){let p=r[0],c;p&&p.type==="element"&&p.tagName==="p"?c=p:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:true},children:[]}),o.className=["task-list-item"];}let l=-1;for(;++l<r.length;){let p=r[l];(i||l!==0||p.type!=="element"||p.tagName!=="p")&&a.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?a.push(...p.children):a.push(p);}let s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&a.push({type:"text",value:`
`});let u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function qf(e){let t=false;if(e.type==="list"){t=e.spread||false;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Ol(n[r]);}return t}function Ol(e){let t=e.spread;return t??e.children.length>1}function Ul(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){let a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,true)};return e.patch(t,o),e.applyData(t,o)}function Bl(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Hl(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function jl(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function $l(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],true)};e.patch(t.children[0],a),i.push(a);}if(n.length>0){let a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,true)},l=xt(t.children[1]),s=_n(t.children[t.children.length-1]);l&&s&&(a.position={start:l,end:s}),i.push(a);}let o={type:"element",tagName:"table",properties:{},children:e.wrap(i,true)};return e.patch(t,o),e.applyData(t,o)}function Wl(e,t,n){let r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length,s=-1,u=[];for(;++s<l;){let c=t.children[s],m={},f=a?a[s]:void 0;f&&(m.align=f);let h={type:"element",tagName:o,properties:m,children:[]};c&&(h.children=e.all(c),e.patch(c,h),h=e.applyData(c,h)),u.push(h);}let p={type:"element",tagName:"tr",properties:{},children:e.wrap(u,true)};return e.patch(t,p),e.applyData(t,p)}function Vl(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Yl(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,o=[];for(;r;)o.push(ql(t.slice(i,r.index),i>0,true),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(ql(t.slice(i),i>0,false)),o.join("")}function ql(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===9||o===32;)r++,o=e.codePointAt(r);}if(n){let o=e.codePointAt(i-1);for(;o===9||o===32;)i--,o=e.codePointAt(i-1);}return i>r?e.slice(r,i):""}function Kl(e,t){let n={type:"text",value:Yl(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Xl(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var Gl={blockquote:zl,break:Sl,code:Cl,delete:El,emphasis:Al,footnoteReference:Il,heading:Tl,html:Pl,imageReference:Ll,image:Rl,inlineCode:Dl,linkReference:Ml,link:Nl,listItem:Fl,list:Ul,paragraph:Bl,root:Hl,strong:jl,table:$l,tableCell:Vl,tableRow:Wl,text:Kl,thematicBreak:Xl,toml:On,yaml:On,definition:On,footnoteDefinition:On};function On(){}var Jl=typeof self=="object"?self:globalThis,Gf=(e,t)=>{let n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);let[o,a]=t[i];switch(o){case 0:case  -1:return n(a,i);case 1:{let l=n([],i);for(let s of a)l.push(r(s));return l}case 2:{let l=n({},i);for(let[s,u]of a)l[r(s)]=r(u);return l}case 3:return n(new Date(a),i);case 4:{let{source:l,flags:s}=a;return n(new RegExp(l,s),i)}case 5:{let l=n(new Map,i);for(let[s,u]of a)l.set(r(s),r(u));return l}case 6:{let l=n(new Set,i);for(let s of a)l.add(r(s));return l}case 7:{let{name:l,message:s}=a;return n(new Jl[l](s),i)}case 8:return n(BigInt(a),i);case "BigInt":return n(Object(BigInt(a)),i);case "ArrayBuffer":return n(new Uint8Array(a).buffer,a);case "DataView":{let{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new Jl[o](a),i)};return r},oi=e=>Gf(new Map,e)(0);var wt="",{toString:Jf}={},{keys:Qf}=Object,Kt=e=>{let t=typeof e;if(t!=="object"||!e)return [0,t];let n=Jf.call(e).slice(8,-1);switch(n){case "Array":return [1,wt];case "Object":return [2,wt];case "Date":return [3,wt];case "RegExp":return [4,wt];case "Map":return [5,wt];case "Set":return [6,wt];case "DataView":return [1,n]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},Bn=([e,t])=>e===0&&(t==="function"||t==="symbol"),Zf=(e,t,n,r)=>{let i=(a,l)=>{let s=r.push(a)-1;return n.set(l,s),s},o=a=>{if(n.has(a))return n.get(a);let[l,s]=Kt(a);switch(l){case 0:{let p=a;switch(s){case "bigint":l=8,p=a.toString();break;case "function":case "symbol":if(e)throw new TypeError("unable to serialize "+s);p=null;break;case "undefined":return i([-1],a)}return i([l,p],a)}case 1:{if(s){let m=a;return s==="DataView"?m=new Uint8Array(a.buffer):s==="ArrayBuffer"&&(m=new Uint8Array(a)),i([s,[...m]],a)}let p=[],c=i([l,p],a);for(let m of a)p.push(o(m));return c}case 2:{if(s)switch(s){case "BigInt":return i([s,a.toString()],a);case "Boolean":case "Number":case "String":return i([s,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());let p=[],c=i([l,p],a);for(let m of Qf(a))(e||!Bn(Kt(a[m])))&&p.push([o(m),o(a[m])]);return c}case 3:return i([l,a.toISOString()],a);case 4:{let{source:p,flags:c}=a;return i([l,{source:p,flags:c}],a)}case 5:{let p=[],c=i([l,p],a);for(let[m,f]of a)(e||!(Bn(Kt(m))||Bn(Kt(f))))&&p.push([o(m),o(f)]);return c}case 6:{let p=[],c=i([l,p],a);for(let m of a)(e||!Bn(Kt(m)))&&p.push(o(m));return c}}let{message:u}=a;return i([l,{name:s,message:u}],a)};return o},ai=(e,{json:t,lossy:n}={})=>{let r=[];return Zf(!(t||n),!!t,new Map,r)(e),r};var kt=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?oi(ai(e,t)):structuredClone(e):(e,t)=>oi(ai(e,t));function em(e,t){let n=[{type:"text",value:"\u21A9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function tm(e,t){return "Back to reference "+(e+1)+(t>1?"-"+t:"")}function ns(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||em,r=e.options.footnoteBackLabel||tm,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[],s=-1;for(;++s<e.footnoteOrder.length;){let u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;let p=e.all(u),c=String(u.identifier).toUpperCase(),m=ke(c.toLowerCase()),f=0,h=[],v=e.footnoteCounts.get(c);for(;v!==void 0&&++f<=v;){h.length>0&&h.push({type:"text",value:" "});let z=typeof n=="string"?n:n(s,f);typeof z=="string"&&(z={type:"text",value:z}),h.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+m+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,f),className:["data-footnote-backref"]},children:Array.isArray(z)?z:[z]});}let w=p[p.length-1];if(w&&w.type==="element"&&w.tagName==="p"){let z=w.children[w.children.length-1];z&&z.type==="text"?z.value+=" ":w.children.push({type:"text",value:" "}),w.children.push(...h);}else p.push(...h);let y={type:"element",tagName:"li",properties:{id:t+"fn-"+m},children:e.wrap(p,true)};e.patch(u,y),l.push(y);}if(l.length!==0)return {type:"element",tagName:"section",properties:{dataFootnotes:true,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...kt(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,true)},{type:"text",value:`
`}]}}var Ke=(function(e){if(e==null)return om;if(typeof e=="function")return Hn(e);if(typeof e=="object")return Array.isArray(e)?nm(e):rm(e);if(typeof e=="string")return im(e);throw new Error("Expected function, string, or object as test")});function nm(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Ke(e[n]);return Hn(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return  true;return  false}}function rm(e){let t=e;return Hn(n);function n(r){let i=r,o;for(o in e)if(i[o]!==t[o])return  false;return  true}}function im(e){return Hn(t);function t(n){return n&&n.type===e}}function Hn(e){return t;function t(n,r,i){return !!(am(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function om(){return  true}function am(e){return e!==null&&typeof e=="object"&&"type"in e}var rs=[],jn=true,st=false,$n="skip";function Xt(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;let o=Ke(i),a=r?-1:1;l(e,void 0,[])();function l(s,u,p){let c=s&&typeof s=="object"?s:{};if(typeof c.type=="string"){let f=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(s.type+(f?"<"+f+">":""))+")"});}return m;function m(){let f=rs,h,v,w;if((!t||o(s,u,p[p.length-1]||void 0))&&(f=lm(n(s,p)),f[0]===st))return f;if("children"in s&&s.children){let y=s;if(y.children&&f[0]!==$n)for(v=(r?y.children.length:-1)+a,w=p.concat(y);v>-1&&v<y.children.length;){let z=y.children[v];if(h=l(z,v,w)(),h[0]===st)return h;v=typeof h[1]=="number"?h[1]:v+a;}}return f}}}function lm(e){return Array.isArray(e)?e:typeof e=="number"?[jn,e]:e==null?rs:[e]}function ut(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),Xt(e,o,l,i);function l(s,u){let p=u[u.length-1],c=p?p.children.indexOf(s):void 0;return a(s,c,p)}}var li={}.hasOwnProperty,sm={};function os(e,t){let n=t||sm,r=new Map,i=new Map,o=new Map,a={...Gl,...n.handlers},l={all:u,applyData:cm,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:s,options:n,patch:um,wrap:fm};return ut(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){let c=p.type==="definition"?r:i,m=String(p.identifier).toUpperCase();c.has(m)||c.set(m,p);}}),l;function s(p,c){let m=p.type,f=l.handlers[m];if(li.call(l.handlers,m)&&f)return f(l,p,c);if(l.options.passThrough&&l.options.passThrough.includes(m)){if("children"in p){let{children:v,...w}=p,y=kt(w);return y.children=l.all(p),y}return kt(p)}return (l.options.unknownHandler||pm)(l,p,c)}function u(p){let c=[];if("children"in p){let m=p.children,f=-1;for(;++f<m.length;){let h=l.one(m[f],p);if(h){if(f&&m[f-1].type==="break"&&(!Array.isArray(h)&&h.type==="text"&&(h.value=is(h.value)),!Array.isArray(h)&&h.type==="element")){let v=h.children[0];v&&v.type==="text"&&(v.value=is(v.value));}Array.isArray(h)?c.push(...h):c.push(h);}}}return c}}function um(e,t){e.position&&(t.position=Mr(e));}function cm(e,t){let n=t;if(e&&e.data){let r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else {let a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a};}n.type==="element"&&o&&Object.assign(n.properties,kt(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i);}return n}function pm(e,t){let n=t.data||{},r="value"in t&&!(li.call(n,"hProperties")||li.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function fm(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function is(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Wn(e,t){let n=os(e,t),r=n.one(e,void 0),i=ns(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&(o.children.push({type:"text",value:`
`},i)),o}function Vn(e,t){return e&&"run"in e?async function(n,r){let i=Wn(n,{file:r,...t});await e.run(i,r);}:function(n,r){return Wn(n,{file:r,...e||t})}}function si(e){if(e)throw e}var Kn=lo(hs());function Gt(e){if(typeof e!="object"||e===null)return  false;let t=Object.getPrototypeOf(e);return (t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ui(){let e=[],t={run:n,use:r};return t;function n(...i){let o=-1,a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(s,...u){let p=e[++o],c=-1;if(s){a(s);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,p?ds(p,l)(...u):a(null,...u);}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function ds(e,t){let n;return r;function r(...a){let l=e.length>a.length,s;l&&a.push(i);try{s=e.apply(this,a);}catch(u){let p=u;if(l&&n)throw p;return i(p)}l||(s&&s.then&&typeof s.then=="function"?s.then(o,i):s instanceof Error?i(s):o(s));}function i(a,...l){n||(n=true,t(a,...l));}function o(a){i(null,a);}}var Ae={basename:mm,dirname:hm,extname:dm,join:gm,sep:"/"};function mm(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Jt(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=true,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return "";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=true,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function hm(e){if(Jt(e),e.length===0)return ".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=true);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function dm(e){Jt(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){let l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=true,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1);}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function gm(...e){let t=-1,n;for(;++t<e.length;)Jt(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":ym(n)}function ym(e){Jt(e);let t=e.codePointAt(0)===47,n=vm(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function vm(e,t){let n="",r=0,i=-1,o=0,a=-1,l,s;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else {if(l===47)break;l=47;}if(l===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2);}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0;}else l===46&&o>-1?o++:o=-1;}return n}function Jt(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}var gs={cwd:xm};function xm(){return "/"}function _t(e){return !!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function ys(e){if(typeof e=="string")e=new URL(e);else if(!_t(e)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return bm(e)}function bm(e){if(e.hostname!==""){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}var ci=["history","path","basename","stem","extname","dirname"],ct=class{constructor(t){let n;t?_t(t)?n={path:t}:typeof t=="string"||wm(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":gs.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ci.length;){let o=ci[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o]);}let i;for(i in n)ci.includes(i)||(this[i]=n[i]);}get basename(){return typeof this.path=="string"?Ae.basename(this.path):void 0}set basename(t){fi(t,"basename"),pi(t,"basename"),this.path=Ae.join(this.dirname||"",t);}get dirname(){return typeof this.path=="string"?Ae.dirname(this.path):void 0}set dirname(t){vs(this.basename,"dirname"),this.path=Ae.join(t||"",this.basename);}get extname(){return typeof this.path=="string"?Ae.extname(this.path):void 0}set extname(t){if(pi(t,"extname"),vs(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ae.join(this.dirname,this.stem+(t||""));}get path(){return this.history[this.history.length-1]}set path(t){_t(t)&&(t=ys(t)),fi(t,"path"),this.path!==t&&this.history.push(t);}get stem(){return typeof this.path=="string"?Ae.basename(this.path,this.extname):void 0}set stem(t){fi(t,"stem"),pi(t,"stem"),this.path=Ae.join(this.dirname||"",t+(this.extname||""));}fail(t,n,r){let i=this.message(t,n,r);throw i.fatal=true,i}info(t,n,r){let i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){let i=new le(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=false,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function pi(e,t){if(e&&e.includes(Ae.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ae.sep+"`")}function fi(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function vs(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function wm(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var xs=(function(e){let r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o});var km={}.hasOwnProperty,gi=class e extends xs{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ui();}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r);}return t.data((0, Kn.default)(true,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(di("data",this.frozen),this.namespace[t]=n,this):km.call(this.namespace,t)&&this.namespace[t]||void 0:t?(di("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===false)continue;r[0]===true&&(r[0]=void 0);let i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i);}return this.frozen=true,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();let n=Yn(t),r=this.parser||this.Parser;return mi("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),mi("process",this.parser||this.Parser),hi("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){let l=Yn(t),s=r.parse(l);r.run(s,l,function(p,c,m){if(p||!c||!m)return u(p);let f=c,h=r.stringify(f,m);zm(h)?m.value=h:m.result=h,u(p,m);});function u(p,c){p||!c?a(p):o?o(c):n(void 0,c);}}}processSync(t){let n=false,r;return this.freeze(),mi("processSync",this.parser||this.Parser),hi("processSync",this.compiler||this.Compiler),this.process(t,i),ws("processSync","process",n),r;function i(o,a){n=true,si(o),r=a;}}run(t,n,r){bs(t),this.freeze();let i=this.transformers;return !r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){let s=Yn(n);i.run(t,s,u);function u(p,c,m){let f=c||t;p?l(p):a?a(f):r(void 0,f,m);}}}runSync(t,n){let r=false,i;return this.run(t,n,o),ws("runSync","run",r),i;function o(a,l){si(a),i=l,r=true;}}stringify(t,n){this.freeze();let r=Yn(n),i=this.compiler||this.Compiler;return hi("stringify",i),bs(t),i(t,r)}use(t,...n){let r=this.attachers,i=this.namespace;if(di("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){let[p,...c]=u;s(p,c);}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=(0, Kn.default)(true,i.settings,u.settings));}function l(u){let p=-1;if(u!=null)if(Array.isArray(u))for(;++p<u.length;){let c=u[p];o(c);}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,p){let c=-1,m=-1;for(;++c<r.length;)if(r[c][0]===u){m=c;break}if(m===-1)r.push([u,...p]);else if(p.length>0){let[f,...h]=p,v=r[m][1];Gt(v)&&Gt(f)&&(f=(0, Kn.default)(true,v,f)),r[m]=[u,f,...h];}}}},yi=new gi().freeze();function mi(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function hi(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function di(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function bs(e){if(!Gt(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function ws(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Yn(e){return _m(e)?e:new ct(e)}function _m(e){return !!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function zm(e){return typeof e=="string"||Sm(e)}function Sm(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var Cm="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",ks=[],_s={allowDangerousHtml:true},Em=/^(https?|ircs?|mailto|xmpp)$/i,Am=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function vi(e){let t=Im(e),n=Tm(e);return Pm(t.runSync(t.parse(n),n),e)}function Im(e){let t=e.rehypePlugins||ks,n=e.remarkPlugins||ks,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,..._s}:_s;return yi().use(Nn).use(n).use(Vn,r).use(t)}function Tm(e){let t=e.children||"",n=new ct;return typeof t=="string"?n.value=t:(void 0),n}function Pm(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,s=t.urlTransform||zs;for(let p of Am)Object.hasOwn(t,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+Cm+p.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),ut(e,u),Or(e,{Fragment:be,components:i,ignoreInvalidStyle:true,jsx:x,jsxs:x,passKeys:true,passNode:true});function u(p,c,m){if(p.type==="raw"&&m&&typeof c=="number")return a?m.children.splice(c,1):m.children[c]={type:"text",value:p.value},c;if(p.type==="element"){let f;for(f in jt)if(Object.hasOwn(jt,f)&&Object.hasOwn(p.properties,f)){let h=p.properties[f],v=jt[f];(v===null||v.includes(p.tagName))&&(p.properties[f]=s(String(h||""),f,p));}}if(p.type==="element"){let f=n?!n.includes(p.tagName):o?o.includes(p.tagName):false;if(!f&&r&&typeof c=="number"&&(f=!r(p,c,m)),f&&m&&typeof c=="number")return l&&p.children?m.children.splice(c,1,...p.children):m.children.splice(c,1),c}}}function zs(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Em.test(e.slice(0,t))?e:""}function xi(e,t){let n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function bi(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function wi(e,t,n){let i=Ke((n||{}).ignore||[]),o=Lm(t),a=-1;for(;++a<o.length;)Xt(e,"text",l);function l(u,p){let c=-1,m;for(;++c<p.length;){let f=p[c],h=m?m.children:void 0;if(i(f,h?h.indexOf(f):void 0,m))return;m=f;}if(m)return s(u,p)}function s(u,p){let c=p[p.length-1],m=o[a][0],f=o[a][1],h=0,w=c.children.indexOf(u),y=false,z=[];m.lastIndex=0;let S=m.exec(u.value);for(;S;){let R=S.index,M={index:S.index,input:S.input,stack:[...p,u]},k=f(...S,M);if(typeof k=="string"&&(k=k.length>0?{type:"text",value:k}:void 0),k===false?m.lastIndex=R+1:(h!==R&&z.push({type:"text",value:u.value.slice(h,R)}),Array.isArray(k)?z.push(...k):k&&z.push(k),h=R+S[0].length,y=true),!m.global)break;S=m.exec(u.value);}return y?(h<u.value.length&&z.push({type:"text",value:u.value.slice(h)}),c.children.splice(w,1,...z)):z=[u],w+z.length}}function Lm(e){let t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let i=n[r];t.push([Rm(i[0]),Dm(i[1])]);}return t}function Rm(e){return typeof e=="string"?new RegExp(bi(e),"g"):e}function Dm(e){return typeof e=="function"?e:function(){return e}}var ki="phrasing",_i=["autolink","link","image","label"];function Si(){return {transforms:[Bm],enter:{literalAutolink:Mm,literalAutolinkEmail:zi,literalAutolinkHttp:zi,literalAutolinkWww:zi},exit:{literalAutolink:Um,literalAutolinkEmail:Om,literalAutolinkHttp:Nm,literalAutolinkWww:Fm}}}function Ci(){return {unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:ki,notInConstruct:_i},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:ki,notInConstruct:_i},{character:":",before:"[ps]",after:"\\/",inConstruct:ki,notInConstruct:_i}]}}function Mm(e){this.enter({type:"link",title:null,url:"",children:[]},e);}function zi(e){this.config.enter.autolinkProtocol.call(this,e);}function Nm(e){this.config.exit.autolinkProtocol.call(this,e);}function Fm(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e);}function Om(e){this.config.exit.autolinkEmail.call(this,e);}function Um(e){this.exit(e);}function Bm(e){wi(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Hm],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,jm]],{ignore:["link","linkReference"]});}function Hm(e,t,n,r,i){let o="";if(!Ss(i)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!$m(n)))return  false;let a=Wm(n+r);if(!a[0])return  false;let l={type:"link",title:null,url:o+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[l,{type:"text",value:a[1]}]:l}function jm(e,t,n,r){return !Ss(r,true)||/[-\d_]$/.test(n)?false:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function $m(e){let t=e.split(".");return !(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Wm(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return [e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),i=xi(e,"("),o=xi(e,")");for(;r!==-1&&i>o;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),o++;return [e,n]}function Ss(e,t){let n=e.input.charCodeAt(e.index-1);return (e.index===0||Te(n)||it(n))&&(!t||n!==47)}Cs.peek=Zm;function Vm(){this.buffer();}function qm(e){this.enter({type:"footnoteReference",identifier:"",label:""},e);}function Ym(){this.buffer();}function Km(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e);}function Xm(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=fe(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function Gm(e){this.exit(e);}function Jm(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=fe(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function Qm(e){this.exit(e);}function Zm(){return "["}function Cs(e,t,n,r){let i=n.createTracker(r),o=i.move("[^"),a=n.enter("footnoteReference"),l=n.enter("reference");return o+=i.move(n.safe(n.associationId(e),{after:"]",before:o})),l(),a(),o+=i.move("]"),o}function Ei(){return {enter:{gfmFootnoteCallString:Vm,gfmFootnoteCall:qm,gfmFootnoteDefinitionLabelString:Ym,gfmFootnoteDefinition:Km},exit:{gfmFootnoteCallString:Xm,gfmFootnoteCall:Gm,gfmFootnoteDefinitionLabelString:Jm,gfmFootnoteDefinition:Qm}}}function Ai(e){let t=false;return e&&e.firstLineBlank&&(t=true),{handlers:{footnoteDefinition:n,footnoteReference:Cs},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,o,a){let l=o.createTracker(a),s=l.move("[^"),u=o.enter("footnoteDefinition"),p=o.enter("label");return s+=l.move(o.safe(o.associationId(r),{before:s,after:"]"})),p(),s+=l.move("]:"),r.children&&r.children.length>0&&(l.shift(4),s+=l.move((t?`
`:" ")+o.indentLines(o.containerFlow(r,l.current()),t?Es:eh))),u(),s}}function eh(e,t,n){return t===0?e:Es(e,t,n)}function Es(e,t,n){return (n?"":"    ")+e}var th=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];As.peek=ih;function Ii(){return {canContainEols:["delete"],enter:{strikethrough:nh},exit:{strikethrough:rh}}}function Ti(){return {unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:th}],handlers:{delete:As}}}function nh(e){this.enter({type:"delete",children:[]},e);}function rh(e){this.exit(e);}function As(e,t,n,r){let i=n.createTracker(r),o=n.enter("strikethrough"),a=i.move("~~");return a+=n.containerPhrasing(e,{...i.current(),before:a,after:"~"}),a+=i.move("~~"),o(),a}function ih(){return "~"}function oh(e){return e.length}function Ts(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||oh,o=[],a=[],l=[],s=[],u=0,p=-1;for(;++p<e.length;){let v=[],w=[],y=-1;for(e[p].length>u&&(u=e[p].length);++y<e[p].length;){let z=ah(e[p][y]);if(n.alignDelimiters!==false){let S=i(z);w[y]=S,(s[y]===void 0||S>s[y])&&(s[y]=S);}v.push(z);}a[p]=v,l[p]=w;}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)o[c]=Is(r[c]);else {let v=Is(r);for(;++c<u;)o[c]=v;}c=-1;let m=[],f=[];for(;++c<u;){let v=o[c],w="",y="";v===99?(w=":",y=":"):v===108?w=":":v===114&&(y=":");let z=n.alignDelimiters===false?1:Math.max(1,s[c]-w.length-y.length),S=w+"-".repeat(z)+y;n.alignDelimiters!==false&&(z=w.length+z+y.length,z>s[c]&&(s[c]=z),f[c]=z),m[c]=S;}a.splice(1,0,m),l.splice(1,0,f),p=-1;let h=[];for(;++p<a.length;){let v=a[p],w=l[p];c=-1;let y=[];for(;++c<u;){let z=v[c]||"",S="",R="";if(n.alignDelimiters!==false){let M=s[c]-(w[c]||0),k=o[c];k===114?S=" ".repeat(M):k===99?M%2?(S=" ".repeat(M/2+.5),R=" ".repeat(M/2-.5)):(S=" ".repeat(M/2),R=S):R=" ".repeat(M);}n.delimiterStart!==false&&!c&&y.push("|"),n.padding!==false&&!(n.alignDelimiters===false&&z==="")&&(n.delimiterStart!==false||c)&&y.push(" "),n.alignDelimiters!==false&&y.push(S),y.push(z),n.alignDelimiters!==false&&y.push(R),n.padding!==false&&y.push(" "),(n.delimiterEnd!==false||c!==u-1)&&y.push("|");}h.push(n.delimiterEnd===false?y.join("").replace(/ +$/,""):y.join(""));}return h.join(`
`)}function ah(e){return e==null?"":String(e)}function Is(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Ps(e,t,n,r){let i=n.enter("blockquote"),o=n.createTracker(r);o.move("> "),o.shift(2);let a=n.indentLines(n.containerFlow(e,o.current()),lh);return i(),a}function lh(e,t,n){return ">"+(n?"":" ")+e}function Rs(e,t){return Ls(e,t.inConstruct,true)&&!Ls(e,t.notInConstruct,false)}function Ls(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return  true;return  false}function Pi(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Rs(n.stack,n.unsafe[i]))return /[ \t]/.test(r.before)?"":" ";return `\\
`}function Ds(e,t){let n=String(e),r=n.indexOf(t),i=r,o=0,a=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>a&&(a=o):o=1,i=r+t.length,r=n.indexOf(t,i);return a}function Ms(e,t){return !!(t.options.fences===false&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Ns(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Fs(e,t,n,r){let i=Ns(n),o=e.value||"",a=i==="`"?"GraveAccent":"Tilde";if(Ms(e,n)){let c=n.enter("codeIndented"),m=n.indentLines(o,sh);return c(),m}let l=n.createTracker(r),s=i.repeat(Math.max(Ds(o,i)+1,3)),u=n.enter("codeFenced"),p=l.move(s);if(e.lang){let c=n.enter(`codeFencedLang${a}`);p+=l.move(n.safe(e.lang,{before:p,after:" ",encode:["`"],...l.current()})),c();}if(e.lang&&e.meta){let c=n.enter(`codeFencedMeta${a}`);p+=l.move(" "),p+=l.move(n.safe(e.meta,{before:p,after:`
`,encode:["`"],...l.current()})),c();}return p+=l.move(`
`),o&&(p+=l.move(o+`
`)),p+=l.move(s),u(),p}function sh(e,t,n){return (n?"":"    ")+e}function zt(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Os(e,t,n,r){let i=zt(n),o=i==='"'?"Quote":"Apostrophe",a=n.enter("definition"),l=n.enter("label"),s=n.createTracker(r),u=s.move("[");return u+=s.move(n.safe(n.associationId(e),{before:u,after:"]",...s.current()})),u+=s.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...s.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),a(),u}function Us(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Xe(e){return "&#x"+e.toString(16).toUpperCase()+";"}function St(e,t,n){let r=Ue(e),i=Ue(t);return r===void 0?i===void 0?n==="_"?{inside:true,outside:true}:{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:true}:r===1?i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:false}:i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:false}:{inside:false,outside:false}}Li.peek=uh;function Li(e,t,n,r){let i=Us(n),o=n.enter("emphasis"),a=n.createTracker(r),l=a.move(i),s=a.move(n.containerPhrasing(e,{after:i,before:l,...a.current()})),u=s.charCodeAt(0),p=St(r.before.charCodeAt(r.before.length-1),u,i);p.inside&&(s=Xe(u)+s.slice(1));let c=s.charCodeAt(s.length-1),m=St(r.after.charCodeAt(0),c,i);m.inside&&(s=s.slice(0,-1)+Xe(c));let f=a.move(i);return o(),n.attentionEncodeSurroundingInfo={after:m.outside,before:p.outside},l+s+f}function uh(e,t,n){return n.options.emphasis||"*"}function Bs(e,t){let n=false;return ut(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=true,st}),!!((!e.depth||e.depth<3)&&nt(e)&&(t.options.setext||n))}function Hs(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(r);if(Bs(e,n)){let p=n.enter("headingSetext"),c=n.enter("phrasing"),m=n.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return c(),p(),m+`
`+(i===1?"=":"-").repeat(m.length-(Math.max(m.lastIndexOf("\r"),m.lastIndexOf(`
`))+1))}let a="#".repeat(i),l=n.enter("headingAtx"),s=n.enter("phrasing");o.move(a+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return /^[\t ]/.test(u)&&(u=Xe(u.charCodeAt(0))+u.slice(1)),u=u?a+" "+u:a,n.options.closeAtx&&(u+=" "+a),s(),l(),u}Ri.peek=ch;function Ri(e){return e.value||""}function ch(){return "<"}Di.peek=ph;function Di(e,t,n,r){let i=zt(n),o=i==='"'?"Quote":"Apostrophe",a=n.enter("image"),l=n.enter("label"),s=n.createTracker(r),u=s.move("![");return u+=s.move(n.safe(e.alt,{before:u,after:"]",...s.current()})),u+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),u+=s.move(")"),a(),u}function ph(){return "!"}Mi.peek=fh;function Mi(e,t,n,r){let i=e.referenceType,o=n.enter("imageReference"),a=n.enter("label"),l=n.createTracker(r),s=l.move("!["),u=n.safe(e.alt,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),a();let p=n.stack;n.stack=[],a=n.enter("reference");let c=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return a(),n.stack=p,o(),i==="full"||!u||u!==c?s+=l.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function fh(){return "!"}Ni.peek=mh;function Ni(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){let a=n.unsafe[o],l=n.compilePattern(a),s;if(a.atBreak)for(;s=l.exec(r);){let u=s.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(s.index+1);}}return i+r+i}function mh(){return "`"}function Fi(e,t){let n=nt(e);return !!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Oi.peek=hh;function Oi(e,t,n,r){let i=zt(n),o=i==='"'?"Quote":"Apostrophe",a=n.createTracker(r),l,s;if(Fi(e,n)){let p=n.stack;n.stack=[],l=n.enter("autolink");let c=a.move("<");return c+=a.move(n.containerPhrasing(e,{before:c,after:">",...a.current()})),c+=a.move(">"),l(),n.stack=p,c}l=n.enter("link"),s=n.enter("label");let u=a.move("[");return u+=a.move(n.containerPhrasing(e,{before:u,after:"](",...a.current()})),u+=a.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(s=n.enter("destinationRaw"),u+=a.move(n.safe(e.url,{before:u,after:e.title?" ":")",...a.current()}))),s(),e.title&&(s=n.enter(`title${o}`),u+=a.move(" "+i),u+=a.move(n.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),s()),u+=a.move(")"),l(),u}function hh(e,t,n){return Fi(e,n)?"<":"["}Ui.peek=dh;function Ui(e,t,n,r){let i=e.referenceType,o=n.enter("linkReference"),a=n.enter("label"),l=n.createTracker(r),s=l.move("["),u=n.containerPhrasing(e,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),a();let p=n.stack;n.stack=[],a=n.enter("reference");let c=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return a(),n.stack=p,o(),i==="full"||!u||u!==c?s+=l.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function dh(){return "["}function Ct(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function js(e){let t=Ct(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function $s(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Xn(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Ws(e,t,n,r){let i=n.enter("list"),o=n.bulletCurrent,a=e.ordered?$s(n):Ct(n),l=e.ordered?a==="."?")":".":js(n),s=t&&n.bulletLastUsed?a===n.bulletLastUsed:false;if(!e.ordered){let p=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&p&&(!p.children||!p.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=true),Xn(n)===a&&p){let c=-1;for(;++c<e.children.length;){let m=e.children[c];if(m&&m.type==="listItem"&&m.children&&m.children[0]&&m.children[0].type==="thematicBreak"){s=true;break}}}}s&&(a=l),n.bulletCurrent=a;let u=n.containerFlow(e,r);return n.bulletLastUsed=a,n.bulletCurrent=o,i(),u}function Vs(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function qs(e,t,n,r){let i=Vs(n),o=n.bulletCurrent||Ct(n);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===false?0:t.children.indexOf(e))+o);let a=o.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(a=Math.ceil(a/4)*4);let l=n.createTracker(r);l.move(o+" ".repeat(a-o.length)),l.shift(a);let s=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,l.current()),p);return s(),u;function p(c,m,f){return m?(f?"":" ".repeat(a))+c:(f?o:o+" ".repeat(a-o.length))+c}}function Ys(e,t,n,r){let i=n.enter("paragraph"),o=n.enter("phrasing"),a=n.containerPhrasing(e,r);return o(),i(),a}var Bi=Ke(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Ks(e,t,n,r){return (e.children.some(function(a){return Bi(a)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function Xs(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Hi.peek=gh;function Hi(e,t,n,r){let i=Xs(n),o=n.enter("strong"),a=n.createTracker(r),l=a.move(i+i),s=a.move(n.containerPhrasing(e,{after:i,before:l,...a.current()})),u=s.charCodeAt(0),p=St(r.before.charCodeAt(r.before.length-1),u,i);p.inside&&(s=Xe(u)+s.slice(1));let c=s.charCodeAt(s.length-1),m=St(r.after.charCodeAt(0),c,i);m.inside&&(s=s.slice(0,-1)+Xe(c));let f=a.move(i+i);return o(),n.attentionEncodeSurroundingInfo={after:m.outside,before:p.outside},l+s+f}function gh(e,t,n){return n.options.strong||"*"}function Gs(e,t,n,r){return n.safe(e.value,r)}function Js(e){let t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Qs(e,t,n){let r=(Xn(n)+(n.options.ruleSpaces?" ":"")).repeat(Js(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Qt={blockquote:Ps,break:Pi,code:Fs,definition:Os,emphasis:Li,hardBreak:Pi,heading:Hs,html:Ri,image:Di,imageReference:Mi,inlineCode:Ni,link:Oi,linkReference:Ui,list:Ws,listItem:qs,paragraph:Ys,root:Ks,strong:Hi,text:Gs,thematicBreak:Qs};function $i(){return {enter:{table:yh,tableData:Zs,tableHeader:Zs,tableRow:xh},exit:{codeText:bh,table:vh,tableData:ji,tableHeader:ji,tableRow:ji}}}function yh(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=true;}function vh(e){this.exit(e),this.data.inTable=void 0;}function xh(e){this.enter({type:"tableRow",children:[]},e);}function ji(e){this.exit(e);}function Zs(e){this.enter({type:"tableCell",children:[]},e);}function bh(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,wh));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e);}function wh(e,t){return t==="|"?t:e}function Wi(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return {unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:true,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:true,character:":",after:"-"},{atBreak:true,character:"-",after:"[:|-]"}],handlers:{inlineCode:m,table:a,tableCell:s,tableRow:l}};function a(f,h,v,w){return u(p(f,v,w),f.align)}function l(f,h,v,w){let y=c(f,v,w),z=u([y]);return z.slice(0,z.indexOf(`
`))}function s(f,h,v,w){let y=v.enter("tableCell"),z=v.enter("phrasing"),S=v.containerPhrasing(f,{...w,before:o,after:o});return z(),y(),S}function u(f,h){return Ts(f,{align:h,alignDelimiters:r,padding:n,stringLength:i})}function p(f,h,v){let w=f.children,y=-1,z=[],S=h.enter("table");for(;++y<w.length;)z[y]=c(w[y],h,v);return S(),z}function c(f,h,v){let w=f.children,y=-1,z=[],S=h.enter("tableRow");for(;++y<w.length;)z[y]=s(w[y],f,h,v);return S(),z}function m(f,h,v){let w=Qt.inlineCode(f,h,v);return v.stack.includes("tableCell")&&(w=w.replace(/\|/g,"\\$&")),w}}function Vi(){return {exit:{taskListCheckValueChecked:eu,taskListCheckValueUnchecked:eu,paragraph:kh}}}function qi(){return {unsafe:[{atBreak:true,character:"-",after:"[:|-]"}],handlers:{listItem:_h}}}function eu(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked";}function kh(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let i=t.children,o=-1,a;for(;++o<i.length;){let l=i[o];if(l.type==="paragraph"){a=l;break}}a===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)));}}this.exit(e);}function _h(e,t,n,r){let i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",l=n.createTracker(r);o&&l.move(a);let s=Qt.listItem(e,t,n,{...r,...l.current()});return o&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),s;function u(p){return p+a}}function Yi(){return [Si(),Ei(),Ii(),$i(),Vi()]}function Ki(e){return {extensions:[Ci(),Ai(e),Ti(),Wi(e),qi()]}}var zh={tokenize:Ih,partial:true},tu={tokenize:Th,partial:true},nu={tokenize:Ph,partial:true},ru={tokenize:Lh,partial:true},Sh={tokenize:Rh,partial:true},iu={name:"wwwAutolink",tokenize:Eh,previous:au},ou={name:"protocolAutolink",tokenize:Ah,previous:lu},Be={name:"emailAutolink",tokenize:Ch,previous:su},Le={};function Gi(){return {text:Le}}var pt=48;for(;pt<123;)Le[pt]=Be,pt++,pt===58?pt=65:pt===91&&(pt=97);Le[43]=Be;Le[45]=Be;Le[46]=Be;Le[95]=Be;Le[72]=[Be,ou];Le[104]=[Be,ou];Le[87]=[Be,iu];Le[119]=[Be,iu];function Ch(e,t,n){let r=this,i,o;return a;function a(c){return !Xi(c)||!su.call(r,r.previous)||Ji(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(c))}function l(c){return Xi(c)?(e.consume(c),l):c===64?(e.consume(c),s):n(c)}function s(c){return c===46?e.check(Sh,p,u)(c):c===45||c===95||re(c)?(o=true,e.consume(c),s):p(c)}function u(c){return e.consume(c),i=true,s}function p(c){return o&&i&&ue(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function Eh(e,t,n){let r=this;return i;function i(a){return a!==87&&a!==119||!au.call(r,r.previous)||Ji(r.events)?n(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(zh,e.attempt(tu,e.attempt(nu,o),n),n)(a))}function o(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(a)}}function Ah(e,t,n){let r=this,i="",o=false;return a;function a(c){return (c===72||c===104)&&lu.call(r,r.previous)&&!Ji(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),l):n(c)}function l(c){if(ue(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),l;if(c===58){let m=i.toLowerCase();if(m==="http"||m==="https")return e.consume(c),s}return n(c)}function s(c){return c===47?(e.consume(c),o?u:(o=true,s)):n(c)}function u(c){return c===null||rt(c)||q(c)||Te(c)||it(c)?n(c):e.attempt(tu,e.attempt(nu,p),n)(c)}function p(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function Ih(e,t,n){let r=0;return i;function i(a){return (a===87||a===119)&&r<3?(r++,e.consume(a),i):a===46&&r===3?(e.consume(a),o):n(a)}function o(a){return a===null?n(a):t(a)}}function Th(e,t,n){let r,i,o;return a;function a(u){return u===46||u===95?e.check(ru,s,l)(u):u===null||q(u)||Te(u)||u!==45&&it(u)?s(u):(o=true,e.consume(u),a)}function l(u){return u===95?r=true:(i=r,r=void 0),e.consume(u),a}function s(u){return i||r||!o?n(u):t(u)}}function Ph(e,t){let n=0,r=0;return i;function i(a){return a===40?(n++,e.consume(a),i):a===41&&r<n?o(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(ru,t,o)(a):a===null||q(a)||Te(a)?t(a):(e.consume(a),i)}function o(a){return a===41&&r++,e.consume(a),i}}function Lh(e,t,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),o):l===93?(e.consume(l),i):l===60||l===null||q(l)||Te(l)?t(l):n(l)}function i(l){return l===null||l===40||l===91||q(l)||Te(l)?t(l):r(l)}function o(l){return ue(l)?a(l):n(l)}function a(l){return l===59?(e.consume(l),r):ue(l)?(e.consume(l),a):n(l)}}function Rh(e,t,n){return r;function r(o){return e.consume(o),i}function i(o){return re(o)?n(o):t(o)}}function au(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||q(e)}function lu(e){return !ue(e)}function su(e){return !(e===47||Xi(e))}function Xi(e){return e===43||e===45||e===46||e===95||re(e)}function Ji(e){let t=e.length,n=false;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=true;break}if(r._gfmAutolinkLiteralWalkedInto){n=false;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=true),n}var Dh={tokenize:Hh,partial:true};function Qi(){return {document:{91:{name:"gfmFootnoteDefinition",tokenize:Oh,continuation:{tokenize:Uh},exit:Bh}},text:{91:{name:"gfmFootnoteCall",tokenize:Fh},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Mh,resolveTo:Nh}}}}function Mh(e,t,n){let r=this,i=r.events.length,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a;for(;i--;){let s=r.events[i][1];if(s.type==="labelImage"){a=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return l;function l(s){if(!a||!a._balanced)return n(s);let u=fe(r.sliceSerialize({start:a.end,end:r.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function Nh(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;let a={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],["enter",i,t],e[n+3],e[n+4],["enter",o,t],["exit",o,t],["enter",a,t],["enter",l,t],["exit",l,t],["exit",a,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(n,e.length-n+1,...s),e}function Fh(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o=0,a;return l;function l(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),s}function s(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(o>999||c===93&&!a||c===null||c===91||q(c))return n(c);if(c===93){e.exit("chunkString");let m=e.exit("gfmFootnoteCallString");return i.includes(fe(r.sliceSerialize(m)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return q(c)||(a=true),o++,e.consume(c),c===92?p:u}function p(c){return c===91||c===92||c===93?(e.consume(c),o++,u):u(c)}}function Oh(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o,a=0,l;return s;function s(h){return e.enter("gfmFootnoteDefinition")._container=true,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(h){return h===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",p):n(h)}function p(h){if(a>999||h===93&&!l||h===null||h===91||q(h))return n(h);if(h===93){e.exit("chunkString");let v=e.exit("gfmFootnoteDefinitionLabelString");return o=fe(r.sliceSerialize(v)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),m}return q(h)||(l=true),a++,e.consume(h),h===92?c:p}function c(h){return h===91||h===92||h===93?(e.consume(h),a++,p):p(h)}function m(h){return h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),i.includes(o)||i.push(o),L(e,f,"gfmFootnoteDefinitionWhitespace")):n(h)}function f(h){return t(h)}}function Uh(e,t,n){return e.check(Pe,t,e.attempt(Dh,t,n))}function Bh(e){e.exit("gfmFootnoteDefinition");}function Hh(e,t,n){let r=this;return L(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){let a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],true).length===4?t(o):n(o)}}function Zi(e){let n=(e||{}).singleTilde,r={name:"strikethrough",tokenize:o,resolveAll:i};return n==null&&(n=true),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(a,l){let s=-1;for(;++s<a.length;)if(a[s][0]==="enter"&&a[s][1].type==="strikethroughSequenceTemporary"&&a[s][1]._close){let u=s;for(;u--;)if(a[u][0]==="exit"&&a[u][1].type==="strikethroughSequenceTemporary"&&a[u][1]._open&&a[s][1].end.offset-a[s][1].start.offset===a[u][1].end.offset-a[u][1].start.offset){a[s][1].type="strikethroughSequence",a[u][1].type="strikethroughSequence";let p={type:"strikethrough",start:Object.assign({},a[u][1].start),end:Object.assign({},a[s][1].end)},c={type:"strikethroughText",start:Object.assign({},a[u][1].end),end:Object.assign({},a[s][1].start)},m=[["enter",p,l],["enter",a[u][1],l],["exit",a[u][1],l],["enter",c,l]],f=l.parser.constructs.insideSpan.null;f&&se(m,m.length,0,qe(f,a.slice(u+1,s),l)),se(m,m.length,0,[["exit",c,l],["enter",a[s][1],l],["exit",a[s][1],l],["exit",p,l]]),se(a,u-1,s-u+3,m),s=u+m.length-2;break}}for(s=-1;++s<a.length;)a[s][1].type==="strikethroughSequenceTemporary"&&(a[s][1].type="data");return a}function o(a,l,s){let u=this.previous,p=this.events,c=0;return m;function m(h){return u===126&&p[p.length-1][1].type!=="characterEscape"?s(h):(a.enter("strikethroughSequenceTemporary"),f(h))}function f(h){let v=Ue(u);if(h===126)return c>1?s(h):(a.consume(h),c++,f);if(c<2&&!n)return s(h);let w=a.exit("strikethroughSequenceTemporary"),y=Ue(h);return w._open=!y||y===2&&!!v,w._close=!v||v===2&&!!y,l(h)}}}var Gn=class{constructor(){this.map=[];}add(t,n,r){jh(this,t,n,r);}consume(t){if(this.map.sort(function(o,a){return o[0]-a[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(let o of i)t.push(o);i=r.pop();}this.map.length=0;}};function jh(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1;}e.map.push([t,n,r]);}}function uu(e,t){let n=false,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let o=r.length-1;r[o]=r[o]==="left"?"center":"right";}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=true);t+=1;}return r}function eo(){return {flow:{null:{name:"table",tokenize:$h,resolveAll:Wh}}}}function $h(e,t,n){let r=this,i=0,o=0,a;return l;function l(b){let X=r.events.length-1;for(;X>-1;){let B=r.events[X][1].type;if(B==="lineEnding"||B==="linePrefix")X--;else break}let O=X>-1?r.events[X][1].type:null,T=O==="tableHead"||O==="tableRow"?k:s;return T===k&&r.parser.lazy[r.now().line]?n(b):T(b)}function s(b){return e.enter("tableHead"),e.enter("tableRow"),u(b)}function u(b){return b===124||(a=true,o+=1),p(b)}function p(b){return b===null?n(b):I(b)?o>1?(o=0,r.interrupt=true,e.exit("tableRow"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),f):n(b):D(b)?L(e,p,"whitespace")(b):(o+=1,a&&(a=false,i+=1),b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),a=true,p):(e.enter("data"),c(b)))}function c(b){return b===null||b===124||q(b)?(e.exit("data"),p(b)):(e.consume(b),b===92?m:c)}function m(b){return b===92||b===124?(e.consume(b),c):c(b)}function f(b){return r.interrupt=false,r.parser.lazy[r.now().line]?n(b):(e.enter("tableDelimiterRow"),a=false,D(b)?L(e,h,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):h(b))}function h(b){return b===45||b===58?w(b):b===124?(a=true,e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),v):M(b)}function v(b){return D(b)?L(e,w,"whitespace")(b):w(b)}function w(b){return b===58?(o+=1,a=true,e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),y):b===45?(o+=1,y(b)):b===null||I(b)?R(b):M(b)}function y(b){return b===45?(e.enter("tableDelimiterFiller"),z(b)):M(b)}function z(b){return b===45?(e.consume(b),z):b===58?(a=true,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(b))}function S(b){return D(b)?L(e,R,"whitespace")(b):R(b)}function R(b){return b===124?h(b):b===null||I(b)?!a||i!==o?M(b):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(b)):M(b)}function M(b){return n(b)}function k(b){return e.enter("tableRow"),V(b)}function V(b){return b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),V):b===null||I(b)?(e.exit("tableRow"),t(b)):D(b)?L(e,V,"whitespace")(b):(e.enter("data"),Y(b))}function Y(b){return b===null||b===124||q(b)?(e.exit("data"),V(b)):(e.consume(b),b===92?$:Y)}function $(b){return b===92||b===124?(e.consume(b),Y):Y(b)}}function Wh(e,t){let n=-1,r=true,i=0,o=[0,0,0,0],a=[0,0,0,0],l=false,s=0,u,p,c,m=new Gn;for(;++n<e.length;){let f=e[n],h=f[1];f[0]==="enter"?h.type==="tableHead"?(l=false,s!==0&&(cu(m,t,s,u,p),p=void 0,s=0),u={type:"table",start:Object.assign({},h.start),end:Object.assign({},h.end)},m.add(n,0,[["enter",u,t]])):h.type==="tableRow"||h.type==="tableDelimiterRow"?(r=true,c=void 0,o=[0,0,0,0],a=[0,n+1,0,0],l&&(l=false,p={type:"tableBody",start:Object.assign({},h.start),end:Object.assign({},h.end)},m.add(n,0,[["enter",p,t]])),i=h.type==="tableDelimiterRow"?2:p?3:1):i&&(h.type==="data"||h.type==="tableDelimiterMarker"||h.type==="tableDelimiterFiller")?(r=false,a[2]===0&&(o[1]!==0&&(a[0]=a[1],c=Jn(m,t,o,i,void 0,c),o=[0,0,0,0]),a[2]=n)):h.type==="tableCellDivider"&&(r?r=false:(o[1]!==0&&(a[0]=a[1],c=Jn(m,t,o,i,void 0,c)),o=a,a=[o[1],n,0,0])):h.type==="tableHead"?(l=true,s=n):h.type==="tableRow"||h.type==="tableDelimiterRow"?(s=n,o[1]!==0?(a[0]=a[1],c=Jn(m,t,o,i,n,c)):a[1]!==0&&(c=Jn(m,t,a,i,n,c)),i=0):i&&(h.type==="data"||h.type==="tableDelimiterMarker"||h.type==="tableDelimiterFiller")&&(a[3]=n);}for(s!==0&&cu(m,t,s,u,p),m.consume(t.events),n=-1;++n<t.events.length;){let f=t.events[n];f[0]==="enter"&&f[1].type==="table"&&(f[1]._align=uu(t.events,n));}return e}function Jn(e,t,n,r,i,o){let a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(o.end=Object.assign({},Et(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));let s=Et(t.events,n[1]);if(o={type:a,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",o,t]]),n[2]!==0){let u=Et(t.events,n[2]),p=Et(t.events,n[3]),c={type:l,start:Object.assign({},u),end:Object.assign({},p)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){let m=t.events[n[2]],f=t.events[n[3]];if(m[1].end=Object.assign({},f[1].end),m[1].type="chunkText",m[1].contentType="text",n[3]>n[2]+1){let h=n[2]+1,v=n[3]-n[2]-1;e.add(h,v,[]);}}e.add(n[3]+1,0,[["exit",c,t]]);}return i!==void 0&&(o.end=Object.assign({},Et(t.events,i)),e.add(i,0,[["exit",o,t]]),o=void 0),o}function cu(e,t,n,r,i){let o=[],a=Et(t.events,n);i&&(i.end=Object.assign({},a),o.push(["exit",i,t])),r.end=Object.assign({},a),o.push(["exit",r,t]),e.add(n+1,0,o);}function Et(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}var Vh={name:"tasklistCheck",tokenize:qh};function to(){return {text:{91:Vh}}}function qh(e,t,n){let r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),o)}function o(s){return q(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),a):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),a):n(s)}function a(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(s)}function l(s){return I(s)?t(s):D(s)?e.check({tokenize:Yh},t,n)(s):n(s)}}function Yh(e,t,n){return L(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function pu(e){return zn([Gi(),Qi(),Zi(e),eo(),to()])}var Kh={};function Qn(e){let t=this,n=e||Kh,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(pu(n)),o.push(Yi()),a.push(Ki(n));}var Xh="023f0a7-2026-10-14T05:18:12.183Z".split("-")[0],Gh="https://chat.converzen.de",fu=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"})}),mu=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),Jh=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})}),Qh=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),At=({custom:e,fallback:t,className:n})=>e?x("span",{className:n,dangerouslySetInnerHTML:{__html:e}}):t,Zh=({title:e,subtitle:t,onClose:n,onClear:r,darkMode:i,icons:o,authControl:a})=>x("div",{className:`cvz-p-4 cvz-shadow-md cvz-flex cvz-justify-between cvz-items-start ${i?"cvz-bg-gradient-to-b cvz-from-gray-900 cvz-to-gray-800 cvz-text-white":"cvz-bg-gradient-to-b cvz-from-blue-600 cvz-to-blue-500 cvz-text-white"}`,children:[x("div",{className:"cvz-flex cvz-items-center cvz-gap-3",children:[x("div",{className:"cvz-relative",children:[x("div",{className:`cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-border-2 ${i?"cvz-border-gray-800":"cvz-border-blue-600"}`}),x("div",{className:"cvz-absolute cvz-top-0 cvz-left-0 cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-animate-ping cvz-opacity-75"})]}),x("div",{children:[x("h3",{className:"cvz-font-bold cvz-text-lg cvz-leading-tight",children:e}),t&&x("p",{className:`cvz-text-xs cvz-mt-0.5 ${i?"cvz-text-gray-300":"cvz-text-blue-100"}`,children:t})]})]}),x("div",{className:"cvz-flex cvz-gap-2 cvz-items-center",children:[a,x("button",{onClick:r,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Clear History",children:x(At,{custom:o?.clear,fallback:x(Qh,{}),className:"cvz-w-5 cvz-h-5"})}),x("button",{onClick:n,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Close Chat",children:x(At,{custom:o?.close,fallback:x(mu,{}),className:"cvz-w-6 cvz-h-6"})})]})]}),ed=({content:e,enableMarkdown:t,darkMode:n})=>t?x("div",{className:"cvz-markdown-content",children:x(vi,{remarkPlugins:[Qn],components:{p:({children:r})=>x("p",{className:`cvz-mb-2 cvz-last:cvz-mb-0 ${n?"cvz-text-gray-100":""}`,children:r}),h1:({children:r})=>x("h1",{className:`cvz-text-xl cvz-font-bold cvz-mb-2 cvz-mt-4 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h2:({children:r})=>x("h2",{className:`cvz-text-lg cvz-font-bold cvz-mb-2 cvz-mt-3 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h3:({children:r})=>x("h3",{className:`cvz-text-base cvz-font-bold cvz-mb-1 cvz-mt-2 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),ul:({children:r})=>x("ul",{className:`cvz-list-disc cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),ol:({children:r})=>x("ol",{className:`cvz-list-decimal cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),li:({children:r})=>x("li",{className:"cvz-ml-2",children:r}),code:({children:r})=>x("code",{className:`cvz-px-1 cvz-py-0.5 cvz-rounded cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),pre:({children:r})=>x("pre",{className:`cvz-p-2 cvz-rounded cvz-overflow-x-auto cvz-mb-2 cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),blockquote:({children:r})=>x("blockquote",{className:`cvz-border-l-4 cvz-pl-3 cvz-italic cvz-mb-2 ${n?"cvz-border-gray-600 cvz-text-gray-300":"cvz-border-gray-300"}`,children:r}),strong:({children:r})=>x("strong",{className:"cvz-font-bold",children:r}),em:({children:r})=>x("em",{className:"cvz-italic",children:r}),a:({children:r,href:i})=>x("a",{href:i,className:`cvz-underline ${n?"cvz-text-blue-400 cvz-hover:cvz-text-blue-300":"cvz-text-blue-600 cvz-hover:cvz-text-blue-800"}`,target:"_blank",rel:"noopener noreferrer",children:r}),table:({children:r})=>x("div",{className:"cvz-overflow-x-auto cvz-mb-2",children:x("table",{className:`cvz-w-full cvz-text-sm cvz-border-collapse ${n?"cvz-text-gray-100":""}`,children:r})}),thead:({children:r})=>x("thead",{className:`${n?"cvz-bg-gray-700":"cvz-bg-gray-100"}`,children:r}),tbody:({children:r})=>x("tbody",{children:r}),tr:({children:r})=>x("tr",{className:`cvz-border-b ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:r}),th:({children:r})=>x("th",{className:`cvz-px-3 cvz-py-1.5 cvz-text-left cvz-font-semibold cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r}),td:({children:r})=>x("td",{className:`cvz-px-3 cvz-py-1.5 cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r})},children:e})}):Ie("span",null,e),td="Anzeige",nd=({cards:e,sponsoredLabel:t,darkMode:n})=>x("div",{className:"cvz-mt-2 cvz-flex cvz-flex-col cvz-gap-2","data-cvz-cards":true,children:e.map(r=>{let i=r.sponsored!==false;return x("a",{href:r.url,target:"_blank",rel:i?"sponsored noopener noreferrer":"noopener noreferrer",className:`cvz-flex cvz-gap-3 cvz-items-center cvz-p-2 cvz-rounded-xl cvz-border cvz-no-underline cvz-transition-colors ${n?"cvz-bg-gray-800 cvz-border-gray-700 cvz-text-gray-100 hover:cvz-bg-gray-700":"cvz-bg-white cvz-border-gray-200 cvz-text-gray-800 hover:cvz-bg-gray-50"}`,children:[r.imageUrl&&x("img",{src:r.imageUrl,alt:"",loading:"lazy",className:"cvz-w-12 cvz-h-12 cvz-rounded-lg cvz-object-cover cvz-flex-shrink-0"}),x("span",{className:"cvz-flex cvz-flex-col cvz-min-w-0 cvz-text-xs",children:[i&&x("span",{className:`cvz-uppercase cvz-tracking-wide cvz-font-semibold ${n?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:t||td}),x("span",{className:"cvz-font-semibold cvz-text-sm cvz-truncate",children:r.title}),r.description&&x("span",{className:n?"cvz-text-gray-300":"cvz-text-gray-600",children:r.description}),r.merchant&&x("span",{className:n?"cvz-text-gray-400":"cvz-text-gray-500",children:r.merchant})]})]},r.url)})}),rd=({messages:e,isStreaming:t,streamingMessage:n,thinkingMessage:r,activeToolCall:i,isFinalizingRef:o,messagesEndRef:a,enableMarkdown:l,darkMode:s,icons:u,sponsoredLabel:p})=>{let c=cn(null),[m,f]=pe(true);return Ee(()=>{let h=c.current;if(!h)return;let v=()=>{let{scrollTop:w,scrollHeight:y,clientHeight:z}=h,S=y-w-z<100;f(S);};return h.addEventListener("scroll",v),()=>h.removeEventListener("scroll",v)},[]),Ee(()=>{m&&a.current&&a.current.scrollIntoView({behavior:"smooth"});},[e,n,r,i,m,a]),x("div",{ref:c,className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-4 cvz-space-y-4 ${s?"cvz-bg-gray-900 cvz-scrollbar-dark":"cvz-bg-gray-50 cvz-scrollbar-light"}`,children:[e.length===0&&!n&&x("div",{className:`cvz-flex cvz-flex-col cvz-items-center cvz-justify-center cvz-h-full cvz-space-y-2 ${s?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:[x(At,{custom:u?.launcher,fallback:x(fu,{}),className:"cvz-w-6 cvz-h-6"}),x("p",{className:"cvz-text-sm",children:"Start a conversation"})]}),e.map(h=>x("div",{children:[x("div",{className:`cvz-flex ${h.role==="USER"?"cvz-justify-end":"cvz-justify-start"}`,children:x("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-text-sm cvz-shadow-sm ${h.role==="USER"?s?"cvz-bg-blue-500 cvz-text-white cvz-rounded-br-none":"cvz-bg-blue-600 cvz-text-white cvz-rounded-br-none":s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border cvz-border-gray-700 cvz-rounded-bl-none":"cvz-bg-white cvz-text-gray-800 cvz-border cvz-border-gray-100 cvz-rounded-bl-none"}`,children:x(ed,{content:h.content,enableMarkdown:l,darkMode:s})})}),h.role==="ASSISTANT"&&h.cards&&h.cards.length>0&&x("div",{className:"cvz-flex cvz-justify-start",children:x("div",{className:"cvz-max-w-[85%] cvz-w-full",children:x(nd,{cards:h.cards,sponsoredLabel:p,darkMode:s})})})]},h.createdAt.toString())),t&&n&&!o.current&&x("div",{className:"cvz-flex cvz-justify-start",children:x("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-text-sm cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border-gray-700":"cvz-bg-white cvz-text-gray-800 cvz-border-gray-100"}`,children:n})}),t&&!n&&x("div",{className:"cvz-flex cvz-justify-start",children:x("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:i?x("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:["Calling ",i,"\u2026"]}):r?x("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:r}):x("div",{className:"cvz-flex cvz-space-x-1",children:[x("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"0ms"}}),x("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"150ms"}}),x("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"300ms"}})]})})}),x("div",{ref:a})]})},id=({value:e,onChange:t,onSubmit:n,isLoading:r,placeholder:i,darkMode:o,icons:a})=>x("form",{onSubmit:n,className:`cvz-p-4 cvz-border-t ${o?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:[x("div",{className:"cvz-relative cvz-flex cvz-items-center",children:[x("input",{type:"text",value:e,onChange:l=>t(l.target.value),placeholder:i,className:`cvz-w-full cvz-border cvz-text-sm cvz-rounded-full cvz-pl-4 cvz-pr-12 cvz-py-3 cvz-focus:cvz-outline-none cvz-focus:cvz-ring-1 cvz-transition-all ${o?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100 cvz-placeholder-gray-400 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500":"cvz-bg-gray-50 cvz-border-gray-200 cvz-text-gray-900 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500"}`}),x("button",{type:"submit",disabled:!e.trim()||r,className:`cvz-absolute cvz-right-2 cvz-p-2 cvz-text-white cvz-rounded-full cvz-disabled:cvz-opacity-50 cvz-transition-colors cvz-shadow-sm ${o?"cvz-bg-blue-500 cvz-hover:cvz-bg-blue-600 cvz-disabled:cvz-hover:cvz-bg-blue-500":"cvz-bg-blue-600 cvz-hover:cvz-bg-blue-700 cvz-disabled:cvz-hover:cvz-bg-blue-600"}`,children:x(At,{custom:a?.send,fallback:x(Jh,{}),className:"cvz-w-5 cvz-h-5"})})]}),x("div",{className:"cvz-text-center cvz-mt-2",children:x("p",{className:`cvz-text-[10px] ${o?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:["Powered by ConverZen",x("span",{className:o?"cvz-text-gray-600":"cvz-text-gray-300",children:[" \xB7 ",Xh]})]})})]}),od=({config:e})=>{let t=wa(e),[n,r]=pe(""),[i,o]=pe(false),a=cn(null),l=async v=>{if(v?.preventDefault(),!n.trim()||t.isStreaming)return;let w=n;r(""),await t.sendMessage(w);},s=async()=>{window.confirm("Are you sure you want to clear your chat history?")&&await t.clearHistory();},u=ka(e.style),p=_a(e.style),c=za(e.style),m=Sa(e.style,t.isOpen),f=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="bottom-left")||typeof e.style.position=="object"&&e.style.position.bottom,h=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="top-right")||typeof e.style.position=="object"&&e.style.position.right;return x("div",{className:"cvz-fixed cvz-z-[9999] cvz-font-sans",style:u,children:[x("div",{className:`
          cvz-absolute cvz-rounded-2xl cvz-shadow-2xl cvz-flex cvz-flex-col cvz-overflow-hidden
          cvz-transition-all cvz-duration-300
          ${e.darkMode?"cvz-bg-gray-800":"cvz-bg-white"}
          ${f?"cvz-bottom-20":"cvz-top-20"}
          ${h?"cvz-right-0":"cvz-left-0"}
          ${f&&h?"cvz-origin-bottom-right":f&&!h?"cvz-origin-bottom-left":!f&&h?"cvz-origin-top-right":"cvz-origin-top-left"}
          ${t.isOpen?"cvz-opacity-100 cvz-scale-100 cvz-translate-y-0":"cvz-opacity-0 cvz-scale-95 cvz-translate-y-4 cvz-pointer-events-none"}
        `,style:{...p,borderColor:c,borderWidth:"1px",borderStyle:"solid"},children:[x(Zh,{title:e.headerMsg||"Support Chat",subtitle:e.subheaderMsg||"We typically reply in a few minutes",onClose:()=>t.close(),onClear:s,darkMode:e.darkMode,icons:e.icons,authControl:e.endUserLicensing?x("button",{onClick:()=>o(true),className:`cvz-text-xs cvz-font-medium cvz-px-2 cvz-py-1 cvz-rounded-md cvz-transition-colors cvz-whitespace-nowrap ${e.darkMode?"cvz-text-gray-200 hover:cvz-bg-gray-700/50":"cvz-text-white hover:cvz-bg-blue-600/50"}`,title:t.endUserAuth?`Signed in as ${t.endUserAuth.email}`:"Authenticate",children:t.endUserAuth?"Account":"Authenticate"}):void 0}),x("div",{ref:v=>t.setCaptchaContainer(v),className:`cvz-flex cvz-justify-center cvz-overflow-hidden cvz-transition-all cvz-duration-200 ${t.captchaPending?"cvz-max-h-32 cvz-py-2":"cvz-max-h-0 cvz-py-0"}`}),x(rd,{messages:t.messages,isStreaming:t.isStreaming,streamingMessage:t.streamingMessage,thinkingMessage:t.thinkingMessage,activeToolCall:t.activeToolCall,isFinalizingRef:t.isFinalizingRef,messagesEndRef:a,enableMarkdown:e.enableMarkdown,darkMode:e.darkMode,icons:e.icons,sponsoredLabel:e.sponsoredLabel}),t.showAuthNudge&&!Qe(t.endUserAuth)&&x("div",{className:`cvz-px-4 cvz-py-2 cvz-text-xs cvz-flex cvz-items-center cvz-justify-between cvz-gap-2 ${e.darkMode?"cvz-bg-amber-900/40 cvz-text-amber-200":"cvz-bg-amber-50 cvz-text-amber-800"}`,children:[x("span",{children:"You've reached the free limit - authenticate to keep chatting."}),x("button",{onClick:()=>o(true),className:"cvz-underline cvz-font-medium cvz-shrink-0",children:"Authenticate"})]}),x(id,{value:n,onChange:r,onSubmit:l,isLoading:t.isLoading||t.isStreaming,placeholder:e.promptPlaceholder||"Type a message...",darkMode:e.darkMode,icons:e.icons}),e.endUserLicensing&&x(Ko,{open:i,onClose:()=>o(false),darkMode:e.darkMode,baseUrl:e.chatUrl||Gh,getBaseAuth:()=>t.getTenantAuthToken(),endUserAuth:t.endUserAuth,onAuthenticated:t.authenticateEndUser,initialEmail:Ho()??void 0})]}),x("button",{onClick:()=>t.isOpen?t.close():t.open(),className:`
          cvz-flex cvz-items-center cvz-justify-center
          cvz-w-14 cvz-h-14 cvz-rounded-full cvz-shadow-lg cvz-transition-all cvz-duration-300
          ${t.isOpen?"cvz-rotate-90":"cvz-hover:cvz-scale-105"}
        `,style:{backgroundColor:m.backgroundColor},onMouseEnter:v=>{!t.isOpen&&e.style?.buttonColor?.hover&&(v.currentTarget.style.backgroundColor=e.style.buttonColor.hover);},onMouseLeave:v=>{t.isOpen||(v.currentTarget.style.backgroundColor=m.backgroundColor);},children:x("div",{className:"cvz-text-white",children:t.isOpen?x(At,{custom:e.icons?.close,fallback:x(mu,{}),className:"cvz-w-6 cvz-h-6"}):x(At,{custom:e.icons?.launcher,fallback:x(fu,{}),className:"cvz-w-6 cvz-h-6"})})})]})},hu=od;var no=`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

/*
! tailwindcss v3.4.19 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}

.cvz-pointer-events-none {
  pointer-events: none;
}

.cvz-fixed {
  position: fixed;
}

.cvz-absolute {
  position: absolute;
}

.cvz-relative {
  position: relative;
}

.cvz-inset-0 {
  inset: 0px;
}

.cvz-bottom-20 {
  bottom: 5rem;
}

.cvz-left-0 {
  left: 0px;
}

.cvz-right-0 {
  right: 0px;
}

.cvz-right-2 {
  right: 0.5rem;
}

.cvz-top-0 {
  top: 0px;
}

.cvz-top-20 {
  top: 5rem;
}

.cvz-z-20 {
  z-index: 20;
}

.cvz-z-\\[9999\\] {
  z-index: 9999;
}

.cvz-mb-1 {
  margin-bottom: 0.25rem;
}

.cvz-mb-2 {
  margin-bottom: 0.5rem;
}

.cvz-ml-2 {
  margin-left: 0.5rem;
}

.cvz-mt-0\\.5 {
  margin-top: 0.125rem;
}

.cvz-mt-2 {
  margin-top: 0.5rem;
}

.cvz-mt-3 {
  margin-top: 0.75rem;
}

.cvz-mt-4 {
  margin-top: 1rem;
}

.cvz-flex {
  display: flex;
}

.cvz-h-12 {
  height: 3rem;
}

.cvz-h-14 {
  height: 3.5rem;
}

.cvz-h-2 {
  height: 0.5rem;
}

.cvz-h-2\\.5 {
  height: 0.625rem;
}

.cvz-h-5 {
  height: 1.25rem;
}

.cvz-h-6 {
  height: 1.5rem;
}

.cvz-h-full {
  height: 100%;
}

.cvz-max-h-0 {
  max-height: 0px;
}

.cvz-max-h-32 {
  max-height: 8rem;
}

.cvz-w-12 {
  width: 3rem;
}

.cvz-w-14 {
  width: 3.5rem;
}

.cvz-w-2 {
  width: 0.5rem;
}

.cvz-w-2\\.5 {
  width: 0.625rem;
}

.cvz-w-5 {
  width: 1.25rem;
}

.cvz-w-6 {
  width: 1.5rem;
}

.cvz-w-full {
  width: 100%;
}

.cvz-min-w-0 {
  min-width: 0px;
}

.cvz-max-w-\\[85\\%\\] {
  max-width: 85%;
}

.cvz-flex-1 {
  flex: 1 1 0%;
}

.cvz-flex-shrink-0 {
  flex-shrink: 0;
}

.cvz-shrink-0 {
  flex-shrink: 0;
}

.cvz-border-collapse {
  border-collapse: collapse;
}

.cvz-origin-bottom-left {
  transform-origin: bottom left;
}

.cvz-origin-bottom-right {
  transform-origin: bottom right;
}

.cvz-origin-top-left {
  transform-origin: top left;
}

.cvz-origin-top-right {
  transform-origin: top right;
}

.cvz-translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cvz-translate-y-4 {
  --tw-translate-y: 1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cvz-rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cvz-scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cvz-scale-95 {
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes cvz-bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
  }

  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}

.cvz-animate-bounce {
  animation: cvz-bounce 1s infinite;
}

@keyframes cvz-ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.cvz-animate-ping {
  animation: cvz-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.cvz-list-inside {
  list-style-position: inside;
}

.cvz-list-decimal {
  list-style-type: decimal;
}

.cvz-list-disc {
  list-style-type: disc;
}

.cvz-flex-col {
  flex-direction: column;
}

.cvz-items-start {
  align-items: flex-start;
}

.cvz-items-center {
  align-items: center;
}

.cvz-justify-start {
  justify-content: flex-start;
}

.cvz-justify-end {
  justify-content: flex-end;
}

.cvz-justify-center {
  justify-content: center;
}

.cvz-justify-between {
  justify-content: space-between;
}

.cvz-gap-1 {
  gap: 0.25rem;
}

.cvz-gap-2 {
  gap: 0.5rem;
}

.cvz-gap-3 {
  gap: 0.75rem;
}

.cvz-gap-4 {
  gap: 1rem;
}

.cvz-space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.cvz-space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}

.cvz-space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.cvz-space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.cvz-self-start {
  align-self: flex-start;
}

.cvz-overflow-hidden {
  overflow: hidden;
}

.cvz-overflow-x-auto {
  overflow-x: auto;
}

.cvz-overflow-y-auto {
  overflow-y: auto;
}

.cvz-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cvz-whitespace-nowrap {
  white-space: nowrap;
}

.cvz-rounded {
  border-radius: 0.25rem;
}

.cvz-rounded-2xl {
  border-radius: 1rem;
}

.cvz-rounded-full {
  border-radius: 9999px;
}

.cvz-rounded-lg {
  border-radius: 0.5rem;
}

.cvz-rounded-md {
  border-radius: 0.375rem;
}

.cvz-rounded-xl {
  border-radius: 0.75rem;
}

.cvz-rounded-bl-none {
  border-bottom-left-radius: 0px;
}

.cvz-rounded-br-none {
  border-bottom-right-radius: 0px;
}

.cvz-border {
  border-width: 1px;
}

.cvz-border-2 {
  border-width: 2px;
}

.cvz-border-b {
  border-bottom-width: 1px;
}

.cvz-border-l-4 {
  border-left-width: 4px;
}

.cvz-border-t {
  border-top-width: 1px;
}

.cvz-border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(37 99 235 / var(--tw-border-opacity, 1));
}

.cvz-border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity, 1));
}

.cvz-border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));
}

.cvz-border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));
}

.cvz-border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity, 1));
}

.cvz-border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity, 1));
}

.cvz-border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity, 1));
}

.cvz-bg-amber-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 251 235 / var(--tw-bg-opacity, 1));
}

.cvz-bg-amber-900\\/40 {
  background-color: rgb(120 53 15 / 0.4);
}

.cvz-bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1));
}

.cvz-bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));
}

.cvz-bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
}

.cvz-bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity, 1));
}

.cvz-bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
}

.cvz-bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity, 1));
}

.cvz-bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1));
}

.cvz-bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));
}

.cvz-bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1));
}

.cvz-bg-green-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(74 222 128 / var(--tw-bg-opacity, 1));
}

.cvz-bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}

.cvz-bg-gradient-to-b {
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}

.cvz-from-blue-600 {
  --tw-gradient-from: #2563eb var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(37 99 235 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.cvz-from-gray-900 {
  --tw-gradient-from: #111827 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(17 24 39 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.cvz-to-blue-500 {
  --tw-gradient-to: #3b82f6 var(--tw-gradient-to-position);
}

.cvz-to-gray-800 {
  --tw-gradient-to: #1f2937 var(--tw-gradient-to-position);
}

.cvz-object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}

.cvz-p-1 {
  padding: 0.25rem;
}

.cvz-p-2 {
  padding: 0.5rem;
}

.cvz-p-3 {
  padding: 0.75rem;
}

.cvz-p-4 {
  padding: 1rem;
}

.cvz-p-5 {
  padding: 1.25rem;
}

.cvz-px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.cvz-px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.cvz-px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.cvz-px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.cvz-py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}

.cvz-py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}

.cvz-py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.cvz-py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.cvz-py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.cvz-py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.cvz-py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.cvz-pl-3 {
  padding-left: 0.75rem;
}

.cvz-pl-4 {
  padding-left: 1rem;
}

.cvz-pr-12 {
  padding-right: 3rem;
}

.cvz-text-left {
  text-align: left;
}

.cvz-text-center {
  text-align: center;
}

.cvz-font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.cvz-font-sans {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.cvz-text-\\[10px\\] {
  font-size: 10px;
}

.cvz-text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.cvz-text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.cvz-text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.cvz-text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.cvz-text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.cvz-font-bold {
  font-weight: 700;
}

.cvz-font-medium {
  font-weight: 500;
}

.cvz-font-semibold {
  font-weight: 600;
}

.cvz-uppercase {
  text-transform: uppercase;
}

.cvz-italic {
  font-style: italic;
}

.cvz-leading-tight {
  line-height: 1.25;
}

.cvz-tracking-wide {
  letter-spacing: 0.025em;
}

.cvz-text-amber-200 {
  --tw-text-opacity: 1;
  color: rgb(253 230 138 / var(--tw-text-opacity, 1));
}

.cvz-text-amber-800 {
  --tw-text-opacity: 1;
  color: rgb(146 64 14 / var(--tw-text-opacity, 1));
}

.cvz-text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(219 234 254 / var(--tw-text-opacity, 1));
}

.cvz-text-blue-200 {
  --tw-text-opacity: 1;
  color: rgb(191 219 254 / var(--tw-text-opacity, 1));
}

.cvz-text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity, 1));
}

.cvz-text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity, 1));
}

.cvz-text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity, 1));
}

.cvz-text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity, 1));
}

.cvz-text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}

.cvz-text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}

.cvz-text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}

.cvz-text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity, 1));
}

.cvz-text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity, 1));
}

.cvz-text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity, 1));
}

.cvz-text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}

.cvz-text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.cvz-underline {
  text-decoration-line: underline;
}

.cvz-no-underline {
  text-decoration-line: none;
}

.cvz-placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity, 1));
}

.cvz-placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity, 1));
}

.cvz-opacity-0 {
  opacity: 0;
}

.cvz-opacity-100 {
  opacity: 1;
}

.cvz-opacity-75 {
  opacity: 0.75;
}

.cvz-shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.cvz-shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.cvz-shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.cvz-shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.cvz-transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.cvz-transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.cvz-duration-200 {
  transition-duration: 200ms;
}

.cvz-duration-300 {
  transition-duration: 300ms;
}

/* You can add widget-specific resets here since 
   Tailwind's 'base' might be too aggressive for a shadow root */

:host {
  all: initial;
  /* Reset inherited styles from the host site */
  font-family: sans-serif;
}

/* Custom scrollbar styles for light mode */

.cvz-scrollbar-light::-webkit-scrollbar {
  width: 8px;
}

.cvz-scrollbar-light::-webkit-scrollbar-track {
  background: #f3f4f6;
  /* gray-100 */
}

.cvz-scrollbar-light::-webkit-scrollbar-thumb {
  background: #d1d5db;
  /* gray-300 */
  border-radius: 4px;
}

.cvz-scrollbar-light::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
  /* gray-400 */
}

/* Custom scrollbar styles for dark mode */

.cvz-scrollbar-dark::-webkit-scrollbar {
  width: 8px;
}

.cvz-scrollbar-dark::-webkit-scrollbar-track {
  background: #111827;
  /* gray-900 */
}

.cvz-scrollbar-dark::-webkit-scrollbar-thumb {
  background: #374151;
  /* gray-700 */
  border-radius: 4px;
}

.cvz-scrollbar-dark::-webkit-scrollbar-thumb:hover {
  background: #4b5563;
  /* gray-600 */
}

/* Firefox scrollbar styles */

.cvz-scrollbar-light {
  scrollbar-width: thin;
  scrollbar-color: #d1d5db #f3f4f6;
}

.cvz-scrollbar-dark {
  scrollbar-width: thin;
  scrollbar-color: #374151 #111827;
}

.hover\\:cvz-bg-blue-600\\/50:hover {
  background-color: rgb(37 99 235 / 0.5);
}

.hover\\:cvz-bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1));
}

.hover\\:cvz-bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
}

.hover\\:cvz-bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1));
}

.hover\\:cvz-bg-gray-700\\/50:hover {
  background-color: rgb(55 65 81 / 0.5);
}

.hover\\:cvz-text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity, 1));
}

.hover\\:cvz-text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.disabled\\:cvz-cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.disabled\\:cvz-opacity-50:disabled {
  opacity: 0.5;
}
`;if(N){N.debounceRendering;N.debounceRendering=t=>{requestAnimationFrame(t);};}var ld="cvz-widget-host";function sd(e,t){let n=document.createElement("div");n.id=ld,document.body.appendChild(n);let r=n.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=no,r.appendChild(i);let o=document.createElement("div");return o.id="cvz-root",r.appendChild(o),an(Ie(t,{config:e}),o),{hostElement:n,root:o}}var ro=class{hostElement=null;root=null;buildId="023f0a7-2026-10-14T05:18:12.183Z";init(t){if(this.hostElement){console.warn("cvzWidget is already initialized.");return}console.log("init: Initializing cvzWidget...",this.buildId),console.log("CSS Length:",no.length),{hostElement:this.hostElement,root:this.root}=sd(t,hu);}addCards(t){let n=ba();if(!n){console.warn("addCards: cvzWidget is not initialized.");return}n.addCards(t);}hide(){if(!this.hostElement){console.warn("hide: cvzWidget is not initialized.");return}this.root&&(an(null,this.root),this.root=null),this.hostElement&&(this.hostElement.remove(),this.hostElement=null);}},du=new ro;typeof window<"u"&&(window.cvzWidget=du);var Qz=du;module.exports=Qz;