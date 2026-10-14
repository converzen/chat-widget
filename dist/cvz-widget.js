(function(){'use strict';var Su=Object.create;var nr=Object.defineProperty;var Cu=Object.getOwnPropertyDescriptor;var Eu=Object.getOwnPropertyNames;var Au=Object.getPrototypeOf,Iu=Object.prototype.hasOwnProperty;var Rt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),uo=(e,t)=>{for(var n in t)nr(e,n,{get:t[n],enumerable:true});},Tu=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Eu(t))!Iu.call(e,i)&&i!==n&&nr(e,i,{get:()=>t[i],enumerable:!(r=Cu(t,i))||r.enumerable});return e};var co=(e,t,n)=>(n=e!=null?Su(Au(e)):{},Tu(nr(n,"default",{value:e,enumerable:true}),e));var ja=Rt((oy,Ha)=>{var Fa=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Tc=/\n/g,Pc=/^\s*/,Lc=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Rc=/^:\s*/,Dc=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Mc=/^[;\s]*/,Nc=/^\s+|\s+$/g,Fc=`
`,Oa="/",Ua="*",nt="",Oc="comment",Uc="declaration";function Bc(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return [];t=t||{};var n=1,r=1;function i(h){var x=h.match(Tc);x&&(n+=x.length);var w=h.lastIndexOf(Fc);r=~w?h.length-w:r+h.length;}function o(){var h={line:n,column:r};return function(x){return x.position=new a(h),u(),x}}function a(h){this.start=h,this.end={line:n,column:r},this.source=t.source;}a.prototype.content=e;function l(h){var x=new Error(t.source+":"+n+":"+r+": "+h);if(x.reason=h,x.filename=t.source,x.line=n,x.column=r,x.source=e,!t.silent)throw x}function s(h){var x=h.exec(e);if(x){var w=x[0];return i(w),e=e.slice(w.length),x}}function u(){s(Pc);}function c(h){var x;for(h=h||[];x=f();)x!==false&&h.push(x);return h}function f(){var h=o();if(!(Oa!=e.charAt(0)||Ua!=e.charAt(1))){for(var x=2;nt!=e.charAt(x)&&(Ua!=e.charAt(x)||Oa!=e.charAt(x+1));)++x;if(x+=2,nt===e.charAt(x-1))return l("End of comment missing");var w=e.slice(2,x-2);return r+=2,i(w),e=e.slice(x),r+=2,h({type:Oc,comment:w})}}function p(){var h=o(),x=s(Lc);if(x){if(f(),!s(Rc))return l("property missing ':'");var w=s(Dc),y=h({type:Uc,property:Ba(x[0].replace(Fa,nt)),value:w?Ba(w[0].replace(Fa,nt)):nt});return s(Mc),y}}function m(){var h=[];c(h);for(var x;x=p();)x!==false&&(h.push(x),c(h));return h}return u(),m()}function Ba(e){return e?e.replace(Nc,nt):nt}Ha.exports=Bc;});var Wa=Rt(Bt=>{var Hc=Bt&&Bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bt,"__esModule",{value:true});Bt.default=Wc;var jc=Hc(ja());function Wc(e,t){let n=null;if(!e||typeof e!="string")return n;let r=(0, jc.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;let{property:a,value:l}=o;i?t(a,l,o):l&&(n=n||{},n[a]=l);}),n}});var Va=Rt(Sn=>{Object.defineProperty(Sn,"__esModule",{value:true});Sn.camelCase=void 0;var $c=/^--[a-zA-Z0-9_-]+$/,Vc=/-([a-z])/g,qc=/^[^-]+$/,Yc=/^-(webkit|moz|ms|o|khtml)-/,Kc=/^-(ms)-/,Xc=function(e){return !e||qc.test(e)||$c.test(e)},Gc=function(e,t){return t.toUpperCase()},$a=function(e,t){return "".concat(t,"-")},Jc=function(e,t){return t===void 0&&(t={}),Xc(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Kc,$a):e=e.replace(Yc,$a),e.replace(Vc,Gc))};Sn.camelCase=Jc;});var Ya=Rt((Fr,qa)=>{var Qc=Fr&&Fr.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Zc=Qc(Wa()),ep=Va();function Nr(e,t){var n={};return !e||typeof e!="string"||(0, Zc.default)(e,function(r,i){r&&i&&(n[(0, ep.camelCase)(r,t)]=i);}),n}Nr.default=Nr;qa.exports=Nr;});var xs=Rt((Mk,ys)=>{var Xn=Object.prototype.hasOwnProperty,gs=Object.prototype.toString,cs=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,fs=function(t){return typeof Array.isArray=="function"?Array.isArray(t):gs.call(t)==="[object Array]"},ms=function(t){if(!t||gs.call(t)!=="[object Object]")return  false;var n=Xn.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Xn.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return  false;var i;for(i in t);return typeof i>"u"||Xn.call(t,i)},hs=function(t,n){cs&&n.name==="__proto__"?cs(t,n.name,{enumerable:true,configurable:true,value:n.newValue,writable:true}):t[n.name]=n.newValue;},ds=function(t,n){if(n==="__proto__")if(Xn.call(t,n)){if(ps)return ps(t,n).value}else return;return t[n]};ys.exports=function e(){var t,n,r,i,o,a,l=arguments[0],s=1,u=arguments.length,c=false;for(typeof l=="boolean"&&(c=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(t=arguments[s],t!=null)for(n in t)r=ds(l,n),i=ds(t,n),l!==i&&(c&&i&&(ms(i)||(o=fs(i)))?(o?(o=false,a=r&&fs(r)?r:[]):a=r&&ms(r)?r:{},hs(l,{name:n,newValue:e(c,a,i)})):typeof i<"u"&&hs(l,{name:n,newValue:i}));return l};});var sn,N,go,We,po,yo,xo,rr,nn,Dt,vo,ar,ir,or,on={},an=[],Ru=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Mt=Array.isArray;function Fe(e,t){for(var n in t)e[n]=t[n];return e}function lr(e){e&&e.parentNode&&e.parentNode.removeChild(e);}function Ie(e,t,n){var r,i,o,a={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?sn.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return rn(e,a,r,i,null)}function rn(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++go,__i:-1,__u:0};return i==null&&N.vnode!=null&&N.vnode(o),o}function be(e){return e.children}function Ce(e,t){this.props=e,this.context=t;}function Qe(e,t){if(t==null)return e.__?Qe(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Qe(e):null}function Du(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],o=Fe({},t);o.__v=t.__v+1,N.vnode&&N.vnode(o),sr(e.__P,o,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??Qe(t),!!(32&t.__u),i),o.__v=t.__v,o.__.__k[o.__i]=o,zo(r,o,i),t.__e=t.__=null,o.__e!=n&&bo(o);}}function bo(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),bo(e)}function fo(e){(!e.__d&&(e.__d=true)&&We.push(e)&&!ln.__r++||po!=N.debounceRendering)&&((po=N.debounceRendering)||yo)(ln);}function ln(){try{for(var e,t=1;We.length;)We.length>t&&We.sort(xo),e=We.shift(),t=We.length,Du(e);}finally{We.length=ln.__r=0;}}function wo(e,t,n,r,i,o,a,l,s,u,c){var f,p,m,h,x,w,y=r&&r.__k||an,z=t.length;for(s=Mu(n,t,y,s,z),f=0;f<z;f++)(m=n.__k[f])!=null&&(p=m.__i!=-1&&y[m.__i]||on,m.__i=f,w=sr(e,m,p,i,o,a,l,s,u,c),h=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&ur(p.ref,null,m),c.push(m.ref,m.__c||h,m)),x==null&&h!=null&&(x=h),4&m.__u?(s=ko(m,s,e),p.__e&&(p.__e=null)):typeof m.type=="function"&&w!==void 0?s=w:h&&(s=h.nextSibling),m.__u&=-7);return n.__e=x,s}function Mu(e,t,n,r,i){var o,a,l,s,u,c=n.length,f=c,p=0;for(e.__k=new Array(i),o=0;o<i;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[o]=rn(null,a,null,null,null):Mt(a)?a=e.__k[o]=rn(be,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[o]=rn(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[o]=a,s=o+p,a.__=e,a.__b=e.__b+1,l=null,(u=a.__i=Nu(a,n,s,f))!=-1&&(f--,(l=n[u])&&(l.__u|=2)),l==null||l.__v==null?(u==-1&&(i>c?p--:i<c&&p++),typeof a.type!="function"&&(a.__u|=4)):u!=s&&(u==s-1?p--:u==s+1?p++:(u>s?p--:p++,a.__u|=4))):e.__k[o]=null;if(f)for(o=0;o<c;o++)(l=n[o])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=Qe(l)),Co(l,l));return r}function ko(e,t,n){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=ko(r[i],t,n));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=Qe(e)),t=n.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Nt(e,t){return t=t||[],e==null||typeof e=="boolean"||(Mt(e)?e.some(function(n){Nt(n,t);}):t.push(e)),t}function Nu(e,t,n,r){var i,o,a,l=e.key,s=e.type,u=t[n],c=u!=null&&(2&u.__u)==0;if(u===null&&l==null||c&&l==u.key&&s==u.type)return n;if(r>(c?1:0)){for(i=n-1,o=n+1;i>=0||o<t.length;)if((u=t[a=i>=0?i--:o++])!=null&&(2&u.__u)==0&&l==u.key&&s==u.type)return a}return  -1}function mo(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ru.test(t)?n:n+"px";}function tn(e,t,n,r,i){var o,a;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else {if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||mo(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||mo(e.style,t,n[t]);}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(vo,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n[Dt]=r[Dt]:(n[Dt]=ar,e.addEventListener(t,o?or:ir,o)):e.removeEventListener(t,o?or:ir,o);else {if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===false&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n));}}function ho(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[nn]==null)t[nn]=ar++;else if(t[nn]<n[Dt])return;return n(N.event?N.event(t):t)}}}function sr(e,t,n,r,i,o,a,l,s,u){var c,f,p,m,h,x,w,y,z,S,M,D,k,$,Y,W,v=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),o=[l=t.__e=n.__e]),(c=N.__b)&&c(t);e:if(typeof v=="function"){f=a.length;try{if(z=t.props,S=v.prototype&&v.prototype.render,M=(c=v.contextType)&&r[c.__c],D=c?M?M.props.value:c.__:r,n.__c?y=(p=t.__c=n.__c).__=p.__E:(S?t.__c=p=new v(z,D):(t.__c=p=new Ce(z,D),p.constructor=v,p.render=Ou),M&&M.sub(p),p.state||(p.state={}),p.__n=r,m=p.__d=!0,p.__h=[],p._sb=[]),S&&p.__s==null&&(p.__s=p.state),S&&v.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Fe({},p.__s)),Fe(p.__s,v.getDerivedStateFromProps(z,p.__s))),h=p.props,x=p.state,p.__v=t,m)S&&v.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),S&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else {if(S&&v.getDerivedStateFromProps==null&&z!==h&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(z,D),t.__v==n.__v||!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(z,p.__s,D)===!1){t.__v!=n.__v&&(p.props=z,p.state=p.__s,p.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(J){J&&(J.__=t);}),an.push.apply(p.__h,p._sb),p._sb=[],p.__h.length&&a.push(p),l=Qe(n);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(z,p.__s,D),S&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(h,x,w);});}if(p.context=D,p.props=z,p.__P=e,p.__e=!1,k=N.__r,$=0,S)p.state=p.__s,p.__d=!1,k&&k(t),c=p.render(p.props,p.state,p.context),an.push.apply(p.__h,p._sb),p._sb=[];else do p.__d=!1,k&&k(t),c=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++$<25);p.state=p.__s,p.getChildContext!=null&&(r=Fe(Fe({},r),p.getChildContext())),S&&!m&&p.getSnapshotBeforeUpdate!=null&&(w=p.getSnapshotBeforeUpdate(h,x)),Y=c!=null&&c.type===be&&c.key==null?So(c.props.children):c,l=wo(e,Mt(Y)?Y:[Y],t,n,r,i,o,a,l,s,u),p.base=t.__e,t.__u&=-161,p.__h.length&&a.push(p),y&&(p.__E=p.__=null);}catch(J){if(a.length=f,t.__v=null,s||o!=null){if(J.then){for(t.__u|=s?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o!=null&&(o[o.indexOf(l)]=null),t.__e=l;}else if(o!=null)for(W=o.length;W--;)lr(o[W]);}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),J.then||_o(t),N.__e(J,t,n);}}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Fu(n.__e,t,n,r,i,o,a,s,u);return (c=N.diffed)&&c(t),128&t.__u?void 0:l}function _o(e){e&&(e.__c&&(e.__c.__e=true),e.__k&&e.__k.some(_o));}function zo(e,t,n){for(var r=0;r<n.length;r++)ur(n[r],n[++r],n[++r]);N.__c&&N.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i);});}catch(o){N.__e(o,i.__v);}});}function So(e){return typeof e!="object"||e==null||e.__b>0?e:Mt(e)?e.map(So):e.constructor!==void 0?null:Fe({},e)}function Fu(e,t,n,r,i,o,a,l,s){var u,c,f,p,m,h,x,w=n.props||on,y=t.props,z=t.type;if(z=="svg"?i="http://www.w3.org/2000/svg":z=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(u=0;u<o.length;u++)if((m=o[u])&&"setAttribute"in m==!!z&&(z?m.localName==z:m.nodeType==3)){e=m,o[u]=null;break}}if(e==null){if(z==null)return document.createTextNode(y);e=document.createElementNS(i,z,y.is&&y),l&&(N.__m&&N.__m(t,o),l=false),o=null;}if(z==null)w===y||l&&e.data==y||(e.data=y);else {if(o=z=="textarea"&&y.defaultValue!=null?null:o&&sn.call(e.childNodes),!l&&o!=null)for(w={},u=0;u<e.attributes.length;u++)w[(m=e.attributes[u]).name]=m.value;for(u in w)m=w[u],u=="dangerouslySetInnerHTML"?f=m:u=="children"||u in y||u=="value"&&"defaultValue"in y||u=="checked"&&"defaultChecked"in y||tn(e,u,null,m,i);for(u in y)m=y[u],u=="children"?p=m:u=="dangerouslySetInnerHTML"?c=m:u=="value"?h=m:u=="checked"?x=m:l&&typeof m!="function"||w[u]===m||tn(e,u,m,w[u],i);if(c)l||f&&(c.__html==f.__html||c.__html==e.innerHTML)||(e.innerHTML=c.__html),t.__k=[];else if(f&&(e.innerHTML=""),wo(t.type=="template"?e.content:e,Mt(p)?p:[p],t,n,r,z=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,a,o?o[0]:n.__k&&Qe(n,0),l,s),o!=null)for(u=o.length;u--;)lr(o[u]);l&&z!="textarea"||(u="value",z=="progress"&&h==null?e.removeAttribute("value"):h!=null&&(h!==e[u]||z=="progress"&&!h||z=="option"&&h!=w[u])&&tn(e,u,h,w[u],i),u="checked",x!=null&&x!=e[u]&&tn(e,u,x,w[u],i));}return e}function ur(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t));}else e.current=t;}catch(i){N.__e(i,n);}}function Co(e,t,n){var r,i;if(N.unmount&&N.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||ur(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount();}catch(o){N.__e(o,t);}r.base=r.__P=r.__n=null;}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Co(r[i],t,n||typeof e.type!="function");n||lr(e.__e),e.__c=e.__=e.__e=void 0;}function Ou(e,t,n){return this.constructor(e,n)}function un(e,t,n){var r,i,o,a;t==document&&(t=document.documentElement),N.__&&N.__(e,t),i=(r="undefined"=="function")?null:t.__k,o=[],a=[],sr(t,e=(t).__k=Ie(be,null,[e]),i||on,on,t.namespaceURI,i?null:t.firstChild?sn.call(t.childNodes):null,o,i?i.__e:t.firstChild,r,a),zo(o,e,a),e.props.children=null;}sn=an.slice,N={__e:function(e,t,n,r){for(var i,o,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),a=i.__d),a)return i.__E=i}catch(l){e=l;}throw e}},go=0,Ce.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Fe({},this.state),typeof e=="function"&&(e=e(Fe({},n),this.props)),e&&Fe(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),fo(this));},Ce.prototype.forceUpdate=function(e){this.__v&&(this.__e=true,e&&this.__h.push(e),fo(this));},Ce.prototype.render=be,We=[],yo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,xo=function(e,t){return e.__v.__b-t.__v.__b},ln.__r=0,rr=Math.random().toString(8),nn="__d"+rr,Dt="__a"+rr,vo=/(PointerCapture)$|Capture$/i,ar=0,ir=ho(false),or=ho(true);var dt,te,cr,Eo,pn=0,Mo=[],ae=N,Ao=ae.__b,Io=ae.__r,To=ae.diffed,Po=ae.__c,Lo=ae.unmount,Ro=ae.__;function fn(e,t){ae.__h&&ae.__h(te,e,pn||t),pn=0;var n=te.__H||(te.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function pe(e){return pn=1,No(Oo,e)}function No(e,t,n){var r=fn(dt++,2);if(r.t=e,!r.__c&&(r.__=[Oo(void 0,t),function(l){var s=r.__N?r.__N[0]:r.__[0],u=r.t(s,l);s!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}));}],r.__c=te,!te.__f)){var i=function(l,s,u){if(!r.__c.__H)return  true;var c=false,f=r.__c.props!==l;if(r.__c.__H.__.some(function(m){if(m.__N){c=true;var h=m.__[0];m.__=m.__N,m.__N=void 0,h!==m.__[0]&&(f=true);}}),o){var p=o.call(this,l,s,u);return c?p||f:p}return !c||f};te.__f=true;var o=te.shouldComponentUpdate,a=te.componentWillUpdate;te.componentWillUpdate=function(l,s,u){if(this.__e){var c=o;o=void 0,i(l,s,u),o=c;}a&&a.call(this,l,s,u);},te.shouldComponentUpdate=i;}return r.__N||r.__}function Ee(e,t){var n=fn(dt++,3);!ae.__s&&fr(n.__H,t)&&(n.__=e,n.u=t,te.__H.__h.push(n));}function Fo(e,t){var n=fn(dt++,4);!ae.__s&&fr(n.__H,t)&&(n.__=e,n.u=t,te.__h.push(n));}function mn(e){return pn=5,hn(function(){return {current:e}},[])}function hn(e,t){var n=fn(dt++,7);return fr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Uu(){for(var e;e=Mo.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(cn),t.__h.some(pr),t.__h=[];}catch(n){t.__h=[],ae.__e(n,e.__v);}}}ae.__b=function(e){te=null,Ao&&Ao(e);},ae.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ro&&Ro(e,t);},ae.__r=function(e){Io&&Io(e),dt=0;var t=(te=e.__c).__H;t&&(cr===te?(t.__h=[],te.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(t.__h.some(cn),t.__h.some(pr),t.__h=[],dt=0)),cr=te;},ae.diffed=function(e){To&&To(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Mo.push(t)!==1&&Eo===ae.requestAnimationFrame||((Eo=ae.requestAnimationFrame)||Bu)(Uu)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0);})),cr=te=null;},ae.__c=function(e,t){t.some(function(n){try{n.__h.some(cn),n.__h=n.__h.filter(function(r){return !r.__||pr(r)});}catch(r){t.some(function(i){i.__h&&(i.__h=[]);}),t=[],ae.__e(r,n.__v);}}),Po&&Po(e,t);},ae.unmount=function(e){Lo&&Lo(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{cn(r);}catch(i){t=i;}}),n.__H=void 0,t&&ae.__e(t,n.__v));};var Do=typeof requestAnimationFrame=="function";function Bu(e){var t,n=function(){clearTimeout(r),Do&&cancelAnimationFrame(t),setTimeout(e);},r=setTimeout(n,35);Do&&(t=requestAnimationFrame(n));}function cn(e){var t=te,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),te=t;}function pr(e){var t=te;e.__c=e.__(),te=t;}function fr(e,t){return !e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Oo(e,t){return typeof t=="function"?t(e):t}var hr="cvz_end_user_auth_v1",Uo="cvz_end_user_last_email",dr="cvz_end_user_pending_checkout_v1";function gr(e){try{return localStorage.getItem(e)}catch{return null}}function mr(e,t){try{localStorage.setItem(e,t);}catch{}}function Bo(e){try{localStorage.removeItem(e);}catch{}}function Ho(){let e=gr(hr);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.token=="string"&&typeof t.expiresAt=="number"&&typeof t.email=="string")return t}catch{}return null}function Ze(e){return e?e.expiresAt-300>Date.now()/1e3:false}function jo(e){mr(hr,JSON.stringify(e)),mr(Uo,e.email);}function Wo(){Bo(hr);}function $o(){return gr(Uo)}function Vo(e){mr(dr,JSON.stringify(e));}function qo(){let e=gr(dr);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.pendingId=="string"&&typeof t.planId=="number")return t}catch{}return null}function Yo(){Bo(dr);}function Ko(e){return e.type==="apiKey"?{"X-API-Key":e.token}:{Authorization:`Bearer ${e.token}`}}async function dn(e){try{let t=await e.json();if(t&&typeof t.message=="string")return t.message;if(t&&typeof t.error=="string")return t.error}catch{}return `${e.status} ${e.statusText}`}async function Xo(e,t,n){let r=await fetch(`${e}/api/chat/end_user/start_login`,{method:"POST",headers:{"Content-Type":"application/json",...Ko(t)},body:JSON.stringify({email:n})});if(!r.ok)throw new Error(await dn(r));return (await r.json()).pending_id}function gn(e,t){return new Promise(n=>{let r=new EventSource(`${e}/api/chat/end_user/wait/${encodeURIComponent(t)}`),i=false,o=a=>{i||(i=true,r.close(),n(a));};r.onmessage=a=>{try{o(JSON.parse(a.data));}catch{o({status:"error"});}},r.onerror=()=>{o({status:"timed_out"});};})}async function yr(e,t){let n=await fetch(`${e}/api/chat/end_user/plans`,{headers:Ko(t)});if(!n.ok)throw new Error(await dn(n));return (await n.json()).plans}async function xr(e,t){let n=await fetch(`${e}/api/chat/end_user/me`,{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw new Error(await dn(n));return await n.json()}async function Go(e,t,n,r,i){let o=await fetch(`${e}/api/chat/end_user/checkout`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({plan_id:n,success_url:r,cancel_url:i})});if(!o.ok)throw new Error(await dn(o));let a=await o.json();return {checkoutUrl:a.checkout_url,pendingId:a.pending_id}}var Hu=0;function b(e,t,n,r,i,o){t||(t={});var a,l,s=t;if("ref"in s)for(l in s={},t)l=="ref"?a=t[l]:s[l]=t[l];var u={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Hu,__i:-1,__u:0,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)s[l]===void 0&&(s[l]=a[l]);return N.vnode&&N.vnode(u),u}var ju=60*1e3;function Wu(e,t){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:t.toUpperCase()}).format(e/100)}catch{return `${(e/100).toFixed(2)} ${t.toUpperCase()}`}}function $u(e){return new Date(e*1e3).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}var Jo=({open:e,onClose:t,darkMode:n,baseUrl:r,getBaseAuth:i,endUserAuth:o,onAuthenticated:a,initialEmail:l})=>{let[s,u]=pe("email"),[c,f]=pe(""),[p,m]=pe(null),[h,x]=pe(0),[w,y]=pe(null),[z,S]=pe([]),[M,D]=pe(null),[k,$]=pe(Date.now());if(Ee(()=>{e&&(m(null),o?(f(o.email),u("status"),xr(r,o.token).then(y).catch(P=>m(P instanceof Error?P.message:String(P)))):(f(l??""),u("email")));},[e]),Ee(()=>{if(h<=Date.now())return;let P=setInterval(()=>$(Date.now()),1e3);return ()=>clearInterval(P)},[h]),!e)return null;let Y=Math.max(0,Math.ceil((h-k)/1e3)),W=async()=>{let P=c.trim();if(!P||!P.includes("@")){m("Enter a valid email address.");return}m(null),u("waiting");try{let A=await i(),j=await Xo(r,A,P);x(Date.now()+ju);let d=await gn(r,j);if(d.status==="verified"){let F={token:d.chat_token,expiresAt:d.expires_at,email:P};a(F);try{let X=await xr(r,F.token);if(y(X),X.total_vtokens_remaining>0||X.subscription_status==="active")u("status");else {let ie=await yr(r,{token:F.token,type:"bearer"});S(ie),u("plans");}}catch{u("status");}}else d.status==="timed_out"?(m("That link expired before it was clicked. You can send a new one below."),u("email")):(m("Something went wrong confirming your login. Please try again."),u("email"));}catch(A){m(A instanceof Error?A.message:String(A)),u("email");}},v=async()=>{if(o){m(null);try{let P=await yr(r,{token:o.token,type:"bearer"});S(P),u("plans");}catch(P){m(P instanceof Error?P.message:String(P));}}},J=async P=>{if(o){m(null),D(P.id);try{let A=window.location.href,{checkoutUrl:j,pendingId:d}=await Go(r,o.token,P.id,A,A);Vo({pendingId:d,planId:P.id}),window.location.href=j;}catch(A){m(A instanceof Error?A.message:String(A)),D(null);}}},V=n?"cvz-text-gray-100":"cvz-text-gray-800",T=n?"cvz-text-gray-400":"cvz-text-gray-500",B=n?"cvz-bg-gray-800":"cvz-bg-white",U=n?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100":"cvz-bg-white cvz-border-gray-300 cvz-text-gray-800",Q="cvz-bg-blue-600 hover:cvz-bg-blue-700 cvz-text-white disabled:cvz-opacity-50 disabled:cvz-cursor-not-allowed";return b("div",{className:"cvz-absolute cvz-inset-0 cvz-z-20 cvz-flex cvz-flex-col",children:b("div",{className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-5 cvz-flex cvz-flex-col cvz-gap-4 ${B}`,children:[b("div",{className:"cvz-flex cvz-justify-between cvz-items-start",children:[b("h3",{className:`cvz-font-bold cvz-text-lg ${V}`,children:"Account"}),b("button",{onClick:t,className:`cvz-p-1 cvz-rounded-md ${n?"cvz-text-gray-400 hover:cvz-text-white":"cvz-text-gray-400 hover:cvz-text-gray-700"}`,title:"Close",children:"\u2715"})]}),p&&b("p",{className:"cvz-text-sm cvz-text-red-500",children:p}),s==="email"&&b("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[b("p",{className:`cvz-text-sm ${T}`,children:"Enter your email and we'll send you a login link - use it to access a plan you've already bought, or to start a new one."}),b("input",{type:"email",value:c,onInput:P=>f(P.target.value),placeholder:"you@example.com",className:`cvz-border cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm ${U}`,onKeyDown:P=>{P.key==="Enter"&&W();}}),b("button",{onClick:W,disabled:Y>0,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${Q}`,children:Y>0?`Wait ${Y}s to resend`:"Send login link"})]}),s==="waiting"&&b("div",{className:"cvz-flex cvz-flex-col cvz-gap-2 cvz-items-center cvz-py-6 cvz-text-center",children:[b("p",{className:`cvz-text-sm ${V}`,children:"Check your email"}),b("p",{className:`cvz-text-xs ${T}`,children:["We sent a login link to ",c,". Click it to continue - this can stay open while you do."]})]}),s==="status"&&b("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[b("p",{className:`cvz-text-sm ${V}`,children:["Signed in as ",o?.email]}),w?b("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-text-sm cvz-flex cvz-flex-col cvz-gap-1 ${n?"cvz-border-gray-600":"cvz-border-gray-200"} ${V}`,children:[b("span",{children:[Math.floor(w.total_vtokens_remaining).toLocaleString()," tokens left"]}),w.plan_name&&b("span",{className:T,children:["Plan: ",w.plan_name]}),w.current_period_end&&b("span",{className:T,children:["Renews ",$u(w.current_period_end)]})]}):b("p",{className:`cvz-text-sm ${T}`,children:"Loading your balance..."}),b("button",{onClick:v,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${Q}`,children:"Buy more"}),b("button",{onClick:()=>{u("email"),m(null);},className:`cvz-text-xs cvz-underline cvz-self-start ${T}`,children:"Use a different email"})]}),s==="plans"&&b("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[z.length===0&&b("p",{className:`cvz-text-sm ${T}`,children:"No plans are available right now."}),z.map(P=>b("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-flex cvz-justify-between cvz-items-center ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:[b("div",{children:[b("p",{className:`cvz-text-sm cvz-font-medium ${V}`,children:P.name}),b("p",{className:`cvz-text-xs ${T}`,children:[Wu(P.price_cents,P.currency),P.kind==="subscription"?" / period":""," \xB7 ",P.included_vtokens.toLocaleString()," tokens"]})]}),b("button",{onClick:()=>J(P),disabled:M===P.id,className:`cvz-rounded-lg cvz-px-3 cvz-py-1.5 cvz-text-sm cvz-font-medium ${Q}`,children:M===P.id?"Redirecting...":"Buy"})]},P.id)),o&&b("button",{onClick:()=>u("status"),className:`cvz-text-xs cvz-underline cvz-self-start ${T}`,children:"Back"})]})]})})};function Yu(e,t){for(var n in t)e[n]=t[n];return e}function Qo(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return  true;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return  true;return  false}function la(e,t){var n=t(),r=pe({t:{__:n,u:t}}),i=r[0].t,o=r[1];return Fo(function(){i.__=n,i.u=t,vr(i)&&o({t:i});},[e,n,t]),Ee(function(){return vr(i)&&o({t:i}),e(function(){vr(i)&&o({t:i});})},[e]),n}function vr(e){try{return !((t=e.__)===(n=e.u())&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return  true}var t,n;}function Zo(e,t){this.props=e,this.context=t;}(Zo.prototype=new Ce).isPureReactComponent=true,Zo.prototype.shouldComponentUpdate=function(e,t){return Qo(this.props,e)||Qo(this.state,t)};var ea=N.__b;N.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ea&&ea(e);};var Ku=N.__e;N.__e=function(e,t,n,r){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k||[]),i.__c(e,t)}Ku(e,t,n,r);};var ta=N.unmount;function sa(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c();}),e.__c.__H=null),(e=Yu({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=true,e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return sa(r,t,n)})),e}function ua(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return ua(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=true,e.__c.__P=n)),e}function br(){this.__u=0,this.o=null,this.__b=null;}function ca(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function yn(){this.i=null,this.l=null;}N.unmount=function(e){var t=e.__c;t&&(t.__z=true),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),ta&&ta(e);},(br.prototype=new Ce).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var i=ca(r.__v),o=false,a=function(){o||r.__z||(o=true,n.__R=null,i?i(s):s());};n.__R=a;var l=n.__P;n.__P=null;var s=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=ua(u,u.__c.__P,u.__c.__O);}var c;for(r.setState({__a:r.__b=null});c=r.o.pop();)c.__P=l,c.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a);},br.prototype.componentWillUnmount=function(){this.o=[];},br.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=sa(this.__b,n,r.__O=r.__P);}this.__b=null;}var i=t.__a&&Ie(be,null,e.fallback);return i&&(i.__u&=-33),[Ie(be,null,t.__a?null:e.children),i]};var na=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2];}};(yn.prototype=new Ce).__a=function(e){var t=this,n=ca(t.__v),r=t.l.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),na(t,e,r)):i();};n?n(o):o();}},yn.prototype.render=function(e){this.i=null,this.l=new Map;var t=Nt(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},yn.prototype.componentDidUpdate=yn.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){na(e,n,t);});};var Xu=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Gu=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ju=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Qu=/[A-Z0-9]/g,Zu=typeof document<"u",ec=function(e){return (typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};Ce.prototype.isReactComponent=true,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Ce.prototype,e,{configurable:true,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:true,writable:true,value:t});}});});var ra=N.event;N.event=function(e){return ra&&(e=ra(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var tc={configurable:true,get:function(){return this.class}},ia=N.vnode;N.vnode=function(e){typeof e.type=="string"&&(function(t){var n=t.props,r=t.type,i={},o=r.indexOf("-")==-1;for(var a in n){var l=n[a];if(!(a==="value"&&"defaultValue"in n&&l==null||Zu&&a==="children"&&r==="noscript"||a==="class"||a==="className")){var s=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===true?l="":s==="translate"&&l==="no"?l=false:s[0]==="o"&&s[1]==="n"?s==="ondoubleclick"?a="ondblclick":s!=="onchange"||r!=="input"&&r!=="textarea"||ec(n.type)?s==="onfocus"?a="onfocusin":s==="onblur"?a="onfocusout":Ju.test(a)&&(a=s):s=a="oninput":o&&Gu.test(a)?a=a.replace(Qu,"-$&").toLowerCase():l===null&&(l=void 0),s==="oninput"&&i[a=s]&&(a="oninputCapture"),i[a]=l;}}r=="select"&&(i.multiple&&Array.isArray(i.value)&&(i.value=Nt(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1;})),i.defaultValue!=null&&(i.value=Nt(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value;}))),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",tc)):n.className&&(i.class=i.className=n.className),t.props=i;})(e),e.$$typeof=Xu,ia&&ia(e);};var oa=N.__r;N.__r=function(e){oa&&oa(e),e.__c;};var aa=N.diffed;N.diffed=function(e){aa&&aa(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value);};async function*nc(e){let t=new TextDecoder,n="",r=0;try{for(;;){let{done:i,value:o}=await e.read();if(i){if(n.trim()){let l=rc(n);for(let s of l)r+=1,yield s;}break}n+=t.decode(o,{stream:!0});let a=n.split(`
`);n=a.pop()||"";for(let l of a)if(l.startsWith("data: ")){let s=l.slice(6).trim();if(s)try{let u=JSON.parse(s);r+=1,yield u;}catch(u){console.error("Failed to parse SSE data:",s,u);}}}}finally{e.releaseLock(),console.log(`parseSSEStream: yielded ${r} events`);}}function rc(e){let t=[],n=e.split(`
`);for(let r of n)if(r.startsWith("data: ")){let i=r.slice(6).trim();if(i)try{t.push(JSON.parse(i));}catch(o){console.error("Failed to parse SSE data:",i,o);}}return t}async function*fa(e){let{baseUrl:t,message:n,sessionId:r,persona:i,authToken:o,authType:a,maxTokens:l,clientId:s,extraContext:u,abortSignal:c}=e,f={"Content-Type":"application/json",Accept:"text/event-stream"};s&&(f["X-Client-Id"]=s),a==="apiKey"?f["X-API-Key"]=o:f.Authorization=`Bearer ${o}`;let p={message:n};!r&&a==="apiKey"&&i&&(p.persona=typeof i=="string"?{alias:i}:i),r&&(p.session=r),l&&(p.max_tokens=l),u&&Object.assign(p,u);let m;r?m="/api/chat/continuation/stream":m="/api/chat/completion/stream";let h=await fetch(`${t}${m}`,{method:"POST",headers:f,body:JSON.stringify(p),signal:c});if(!h.ok){let w=`HTTP ${h.status}: ${h.statusText}`;try{console.error(`error from completion: ${h.status} : ${h.statusText}`),w=(await h.json()).message||w;}catch{}yield {type:"error",message:`${h.status} ${w}`};return}if(!h.body){yield {type:"error",message:"No response body received"};return}let x=h.body.getReader();yield*nc(x);}var _r="cvz_client_id",gt="cvz_client_id_v2",Ft="cvz_client_id_captcha_gated",ha="cvz_client_id_last_forced_reissue",da="issue_client_id";var ic=["invalid client_id","client_id does not belong to this account"];function oc(e){return typeof e=="object"&&e!==null&&"provider"in e&&"site_key"in e}function xt(e){try{return localStorage.getItem(e)}catch{return null}}function vt(e,t){try{localStorage.setItem(e,t);}catch{}}function $e(e,t){return `${e}:${t}`}function yt(e){try{localStorage.removeItem(e);}catch{}}function ac(e){return xt($e(Ft,e))==="1"}function lc(e,t){vt($e(Ft,e),t?"1":"0");}function sc(e){let t=xt(gt);if(!t)return null;vt($e(gt,e),t);let n=xt(Ft);return n!==null&&vt($e(Ft,e),n),yt(gt),yt(Ft),yt(ha),t}function ga(e){let t=e instanceof Error?e.message:typeof e=="string"?e:"";return ic.some(n=>t.includes(n))}function uc(){let e=xt(_r);if(e)return e;let t=crypto.randomUUID();return vt(_r,t),t}var wr=null;function cc(e){return wr||(wr=new Promise((t,n)=>{let r=document.createElement("script");r.src=`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(e)}`,r.async=true,r.onload=()=>t(),r.onerror=()=>n(new Error("failed to load reCAPTCHA script")),document.head.appendChild(r);})),wr}async function pc(e){return await cc(e),new Promise((t,n)=>{if(!window.grecaptcha){n(new Error("grecaptcha unavailable after script load"));return}window.grecaptcha.ready(()=>{window.grecaptcha.execute(e,{action:da}).then(t,n);});})}var kr=null;function fc(){return kr||(kr=new Promise((e,t)=>{let n=document.createElement("script");n.src="https://challenges.cloudflare.com/turnstile/v0/api.js",n.async=true,n.onload=()=>e(),n.onerror=()=>t(new Error("failed to load Turnstile script")),document.head.appendChild(n);})),kr}async function mc(e,t){return await fc(),new Promise((n,r)=>{if(!window.turnstile){r(new Error("turnstile unavailable after script load"));return}let i=t?.getContainer?.()??null,o=i??document.createElement("div"),a=!i;a?(o.style.position="fixed",o.style.top="-9999px",o.style.left="-9999px",document.body.appendChild(o)):o.replaceChildren();let l,s=()=>{t?.onPending?.(false),l&&window.turnstile?.remove(l),a&&o.remove();};t?.onPending?.(true),l=window.turnstile.render(o,{sitekey:e,action:da,callback:u=>{n(u),s();},"error-callback":u=>{r(u instanceof Error?u:new Error("Turnstile challenge failed")),s();}});})}function hc(e,t,n){return e==="recaptcha_v3"?pc(t):mc(t,n)}function ma(e,t,n){return fetch(`${e}/api/chat/client_id`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_public_id:t,...n?{recaptcha_token:n}:{}})})}async function zr(e,t,n){if(!t)return uc();let r=xt($e(gt,t))??sc(t);if(r)return r;try{let i=await ma(e,t),o=!1;if(i.status===400){let l=await i.json();if(oc(l)){o=!0;let s=await hc(l.provider,l.site_key,n);i=await ma(e,t,s);}else return console.warn("cvzWidget: client_id issuance failed (400)"),null}if(!i.ok)return console.warn(`cvzWidget: client_id issuance failed (${i.status})`),null;lc(t,o);let a=await i.json();return vt($e(gt,t),a.client_id),yt(_r),a.client_id}catch(i){return console.warn("cvzWidget: client_id issuance failed",i),null}}async function ya(e,t,n){if(!t)return null;let r=$e(gt,t),i=$e(ha,t);if(!ac(t)){let o=Number(xt(i)??"0");if(Date.now()-o<36e5)return yt(r),null}return vt(i,String(Date.now())),yt(r),zr(e,t,n)}var dc="cvz_chat_history";function gc(e){let t=new TextEncoder().encode(e),n="";return t.forEach(r=>{n+=String.fromCharCode(r);}),btoa(n)}function yc(e){let t=atob(e),n=Uint8Array.from(t,r=>r.charCodeAt(0));return new TextDecoder().decode(n)}function Sr(e=dc){async function t(r,i){try{localStorage.setItem(e,gc(JSON.stringify({sessionId:r,messages:i})));}catch{}}async function n(){let r={sessionId:"",messages:[]};try{let i=localStorage.getItem(e);if(!i)return r;let o;try{o=JSON.parse(yc(i));}catch{o=JSON.parse(i);}return {sessionId:o.sessionId||"",messages:o.messages||[]}}catch{return r}}return {save:t,load:n}}var xn="https://chat.converzen.de",va="Hi, how can I help you ?",xc=5;function ba(e){return typeof e=="string"&&/^https?:\/\//i.test(e.trim())}function Cr(e){return typeof e=="string"&&e.trim()?e.trim():void 0}function wa(e){if(!Array.isArray(e))return [];let t=[];for(let n of e){if(t.length>=xc)break;if(!n||typeof n!="object")continue;let r=n,i=Cr(r.title);!i||!ba(r.url)||t.push({title:i,url:r.url.trim(),description:Cr(r.description),imageUrl:ba(r.imageUrl)?r.imageUrl.trim():void 0,merchant:Cr(r.merchant),sponsored:r.sponsored!==false});}return t}function ka(e){let t=new Set,n=null,r={getContainer:()=>n,onPending:A=>a({captchaPending:A})},i={messages:[],sessionId:null,isOpen:e.autoOpen??false,isLoading:false,isStreaming:false,streamingMessage:"",thinkingMessage:"",activeToolCall:null,captchaPending:false,endUserAuth:(()=>{let A=Ho();return Ze(A)?A:null})(),showAuthNudge:false};function o(){t.forEach(A=>A());}function a(A){i={...i,...A},o();}let l={current:false},s=e.persistMessages!==false,u=Sr(e.historyKey),c=e.onSaveMessages??(s?u.save:async()=>{}),f=e.onLoadMessages??(s?u.load:async()=>({sessionId:"",messages:[]})),p=null,m=null,h=null,x="",w=null,y="",z=null;function S(){if(!h){let A=e.chatUrl||xn;h=zr(A,e.publicId,r);}return h}async function M(A=false){if(e.apiKey)return {token:e.apiKey,type:"apiKey"};if(!e.getToken)throw new Error("Either apiKey or getToken must be provided");let j=e.getToken;if(!A){let X=Date.now()/1e3+5,g=m;if(g&&(g.expiresAt==null||g.expiresAt>X))return {token:g.token,type:"bearer"}}let d=async()=>{let X=await j(await S());return typeof X=="string"?{token:X,expiresAt:void 0}:X},F;try{F=await d();}catch(X){if(!ga(X))throw X;let g=e.chatUrl||xn;h=Promise.resolve(await ya(g,e.publicId,r)),F=await d();}return m=F,{token:F.token,type:"bearer"}}async function D(A=false){return !A&&Ze(i.endUserAuth)?{token:i.endUserAuth.token,type:"bearer"}:M(A)}async function k(A,j,d,F=0){try{let g=await D(F>0),ie=e.chatUrl||xn,he=i.sessionId||"",It=fa({baseUrl:ie,sessionId:he,message:A.content,persona:e.persona,authToken:g.token,authType:g.type,clientId:await S()??void 0,extraContext:e.extraContext,abortSignal:d.signal}),je="",oe=!1,_e=!1,de=0,Re=350,De=async()=>{if(!de)return;let ee=Re-(Date.now()-de);ee>0&&await new Promise(xe=>setTimeout(xe,ee));};for await(let ee of It){if(d.signal.aborted)break;switch(ee.type){case "session_created":case "session_continued":ee.session_id&&ee.session_id!==he&&(he=ee.session_id,a({sessionId:ee.session_id}));break;case "thinking":ee.content&&(_e||(de=Date.now()),_e=!0,y+=ee.content,z||(z=requestAnimationFrame(()=>{let xe=y;y="",z=null,a({thinkingMessage:i.thinkingMessage+xe});})));break;case "tool_call_started":ee.name&&(await De(),_e=!0,de=Date.now(),a({activeToolCall:ee.name}));break;case "token":ee.content&&(_e&&(await De(),_e=!1,de=0,y="",a({thinkingMessage:"",activeToolCall:null})),x+=ee.content,je+=ee.content,w||(w=requestAnimationFrame(()=>{let xe=x;x="",w=null,a({streamingMessage:i.streamingMessage+xe});})));break;case "done":{if(je&&he){l.current=!0;let xe={content:je,role:"ASSISTANT",createdAt:new Date().toISOString(),sources:ee.sources},ze=[...j,xe];a({messages:ze,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="",setTimeout(()=>{l.current=!1;},0),await c(he,ze),Y(A.content,xe,he);}else a({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="";p=null;return}case "error":{let xe=ee.code||"",ze=ee.message||"",Tt=F===0&&Ze(i.endUserAuth);if((xe==="auth_failed"||ze.includes("401")||ze.includes("403")||ze.includes("Unauthorized")||ze.includes("Forbidden"))&&F<1&&(e.getToken&&!e.apiKey||Tt)){m=null,Tt&&U(),oe=!0;break}if(xe==="rate_limited"&&e.endUserLicensing){a({showAuthNudge:!0,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="",p=null;return}let Zt={content:ze||"An error occurred",role:"SYSTEM",createdAt:new Date().toISOString()},en=[...j,Zt];a({messages:en,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="",await c(he||"",en),p=null;return}}}if(oe&&F<1)return k(A,j,d,F+1);!d.signal.aborted&&!oe&&(a({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="",p=null);}catch(g){let ie=F===0&&Ze(i.endUserAuth);if(g instanceof Error&&(g.message.includes("401")||g.message.includes("403"))&&F<1&&(e.getToken&&!e.apiKey||ie))return m=null,ie&&U(),k(A,j,d,F+1);throw g}}function $(A,j){if(j.length===0)return;let d=i.messages.indexOf(A);if(d===-1)return;let F=i.messages.slice();F[d]={...A,cards:j},a({messages:F}),c(i.sessionId||"",F).catch(X=>console.error("cvzWidget: failed to save cards",X));}function Y(A,j,d){let F=e.onAssistantMessage;F&&Promise.resolve().then(()=>F({question:A,answer:j.content,sessionId:d})).then(X=>$(j,wa(X))).catch(X=>console.error("cvzWidget: onAssistantMessage failed",X));}function W(A){let j=[...i.messages].reverse().find(d=>d.role==="ASSISTANT");j&&$(j,wa(A));}async function v(A){if(!A.trim()||i.isStreaming)return;p&&p.abort();let j={content:A.trim(),role:"USER",createdAt:new Date().toISOString()};if(e.onUserMessage)try{e.onUserMessage({question:j.content,sessionId:i.sessionId});}catch(F){console.error("cvzWidget: onUserMessage failed",F);}let d=[...i.messages,j];a({messages:d,isLoading:true,isStreaming:true,streamingMessage:"",thinkingMessage:"",activeToolCall:null}),y="";try{let F=new AbortController;p=F,await k(j,d,F);}catch(F){if(F instanceof Error&&F.name==="AbortError"){a({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),y="",p=null;return}let X={content:`Error: ${F instanceof Error?F.message:"Failed to send message"}`,role:"SYSTEM",createdAt:new Date().toISOString()},g=[...d,X];a({messages:g,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),y="",await c(i.sessionId||"",g),p=null;}}async function J(){p&&(p.abort(),p=null),a({messages:[{content:e.initialGreeting||va,role:"SYSTEM",createdAt:new Date().toISOString()}],streamingMessage:"",thinkingMessage:"",activeToolCall:null,sessionId:null,isStreaming:false,isLoading:false}),y="",await c("",[]);}function V(){a({isOpen:true}),S();}function T(){a({isOpen:false});}function B(A){jo(A),a({endUserAuth:A,showAuthNudge:false});}function U(){Wo(),a({endUserAuth:null});}function Q(A){n=A;}if((async()=>{try{let A=await f(),j=[],d=null;A&&typeof A=="object"&&"messages"in A&&"sessionId"in A?(j=A.messages||[],d=A.sessionId||null):Array.isArray(A)&&(j=A),j.length===0&&(j=[{content:e.initialGreeting||va,role:"SYSTEM",createdAt:new Date().toISOString()}]),a({sessionId:d,messages:j});}catch(A){console.error("Failed to load messages:",A);}})(),e.endUserLicensing){let A=qo();if(A){let j=e.chatUrl||xn;gn(j,A.pendingId).finally(()=>{Yo();});}}function P(){p&&(p.abort(),p=null),w&&(cancelAnimationFrame(w),w=null),z&&(cancelAnimationFrame(z),z=null);}return {getState:()=>i,subscribe(A){return t.add(A),()=>t.delete(A)},sendMessage:v,open:V,close:T,clearHistory:J,authenticateEndUser:B,deauthenticateEndUser:U,getTenantAuthToken:M,setCaptchaContainer:Q,addCards:W,isFinalizingRef:l,dispose:P}}var vn=null;function _a(){return vn}function za(e){let t=hn(()=>ka(e),[e]),n=la(t.subscribe,t.getState);return Ee(()=>(vn=t,()=>{vn===t&&(vn=null),t.dispose();}),[t]),{...n,sendMessage:t.sendMessage,open:t.open,close:t.close,clearHistory:t.clearHistory,authenticateEndUser:t.authenticateEndUser,deauthenticateEndUser:t.deauthenticateEndUser,getTenantAuthToken:t.getTenantAuthToken,setCaptchaContainer:t.setCaptchaContainer,addCards:t.addCards,isFinalizingRef:t.isFinalizingRef,dispose:t.dispose}}var vc="calc(100vw - 2rem)",bc="calc(100dvh - 8rem)",Sa=e=>{if(!e?.position)return {bottom:"1rem",right:"1rem"};if(typeof e.position=="string")switch(e.position){case "bottom-right":return {bottom:"1rem",right:"1rem"};case "bottom-left":return {bottom:"1rem",left:"1rem"};case "top-right":return {top:"1rem",right:"1rem"};case "top-left":return {top:"1rem",left:"1rem"};default:return {bottom:"1rem",right:"1rem"}}else {let t={};return e.position.bottom&&(t.bottom=e.position.bottom),e.position.top&&(t.top=e.position.top),e.position.left&&(t.left=e.position.left),e.position.right&&(t.right=e.position.right),t}},Ca=e=>{let t={maxWidth:vc,maxHeight:bc};if(!e?.dialogSize)return {width:"350px",height:"500px",...t};if(typeof e.dialogSize=="string")switch(e.dialogSize){case "small":return {width:"300px",height:"400px",...t};case "medium":return {width:"350px",height:"500px",...t};case "large":return {width:"400px",height:"600px",...t};default:return {width:"350px",height:"500px",...t}}else return {width:`${Math.max(250,e.dialogSize.width)}px`,height:`${Math.max(300,e.dialogSize.height)}px`,...t}},Ea=e=>e?.frameColor||"#E5E7EB",Aa=(e,t)=>{let n=e?.buttonColor;return t?{backgroundColor:n?.open||"#1F2937"}:{backgroundColor:n?.normal||"#2563EB","--hover-color":n?.hover||"#1D4ED8"}};function Ia(e,t){let n={};return (e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===false?"":" ")).trim()}var wc=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,kc=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,_c={};function bn(e,t){return ((_c).jsx?kc:wc).test(e)}var zc=/[ \t\n\f\r]/g;function Er(e){return typeof e=="object"?e.type==="text"?Ta(e.value):false:Ta(e)}function Ta(e){return e.replace(zc,"")===""}var Oe=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r);}};Oe.prototype.normal={};Oe.prototype.property={};Oe.prototype.space=void 0;function Ar(e,t){let n={},r={};for(let i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Oe(n,r,t)}function Ot(e){return e.toLowerCase()}var ce=class{constructor(t,n){this.attribute=n,this.property=t;}};ce.prototype.attribute="";ce.prototype.booleanish=false;ce.prototype.boolean=false;ce.prototype.commaOrSpaceSeparated=false;ce.prototype.commaSeparated=false;ce.prototype.defined=false;ce.prototype.mustUseProperty=false;ce.prototype.number=false;ce.prototype.overloadedBoolean=false;ce.prototype.property="";ce.prototype.spaceSeparated=false;ce.prototype.space=void 0;var Ut={};uo(Ut,{boolean:()=>O,booleanish:()=>ne,commaOrSpaceSeparated:()=>ye,commaSeparated:()=>Ue,number:()=>C,overloadedBoolean:()=>wn,spaceSeparated:()=>G});var Sc=0,O=et(),ne=et(),wn=et(),C=et(),G=et(),Ue=et(),ye=et();function et(){return 2**++Sc}var Ir=Object.keys(Ut),tt=class extends ce{constructor(t,n,r,i){let o=-1;if(super(t,n),Pa(this,"space",i),typeof r=="number")for(;++o<Ir.length;){let a=Ir[o];Pa(this,Ir[o],(r&Ut[a])===Ut[a]);}}};tt.prototype.defined=true;function Pa(e,t,n){n&&(e[t]=n);}function we(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let o=new tt(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=true),t[r]=o,n[Ot(r)]=r,n[Ot(o.attribute)]=r;}return new Oe(t,n,e.space)}var Tr=we({properties:{ariaActiveDescendant:null,ariaAtomic:ne,ariaAutoComplete:null,ariaBusy:ne,ariaChecked:ne,ariaColCount:C,ariaColIndex:C,ariaColSpan:C,ariaControls:G,ariaCurrent:null,ariaDescribedBy:G,ariaDetails:null,ariaDisabled:ne,ariaDropEffect:G,ariaErrorMessage:null,ariaExpanded:ne,ariaFlowTo:G,ariaGrabbed:ne,ariaHasPopup:null,ariaHidden:ne,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:G,ariaLevel:C,ariaLive:null,ariaModal:ne,ariaMultiLine:ne,ariaMultiSelectable:ne,ariaOrientation:null,ariaOwns:G,ariaPlaceholder:null,ariaPosInSet:C,ariaPressed:ne,ariaReadOnly:ne,ariaRelevant:null,ariaRequired:ne,ariaRoleDescription:G,ariaRowCount:C,ariaRowIndex:C,ariaRowSpan:C,ariaSelected:ne,ariaSetSize:C,ariaSort:null,ariaValueMax:C,ariaValueMin:C,ariaValueNow:C,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function kn(e,t){return t in e?e[t]:t}function _n(e,t){return kn(e,t.toLowerCase())}var La=we({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ue,acceptCharset:G,accessKey:G,action:null,allow:null,allowFullScreen:O,allowPaymentRequest:O,allowUserMedia:O,alpha:O,alt:null,as:null,async:O,autoCapitalize:null,autoComplete:G,autoFocus:O,autoPlay:O,blocking:G,capture:null,charSet:null,checked:O,cite:null,className:G,closedBy:null,colorSpace:null,cols:C,colSpan:C,command:null,commandFor:null,content:null,contentEditable:ne,controls:O,controlsList:G,coords:C|Ue,crossOrigin:null,data:null,dateTime:null,decoding:null,default:O,defer:O,dir:null,dirName:null,disabled:O,download:wn,draggable:ne,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:O,formTarget:null,headers:G,height:C,hidden:wn,high:C,href:null,hrefLang:null,htmlFor:G,httpEquiv:G,id:null,imageSizes:null,imageSrcSet:null,inert:O,inputMode:null,integrity:null,is:null,isMap:O,itemId:null,itemProp:G,itemRef:G,itemScope:O,itemType:G,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:O,low:C,manifest:null,max:null,maxLength:C,media:null,method:null,min:null,minLength:C,multiple:O,muted:O,name:null,nonce:null,noModule:O,noValidate:O,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:O,optimum:C,pattern:null,ping:G,placeholder:null,playsInline:O,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:O,referrerPolicy:null,rel:G,required:O,reversed:O,rows:C,rowSpan:C,sandbox:G,scope:null,scoped:O,seamless:O,selected:O,shadowRootClonable:O,shadowRootCustomElementRegistry:O,shadowRootDelegatesFocus:O,shadowRootMode:null,shadowRootSerializable:O,shape:null,size:C,sizes:null,slot:null,span:C,spellCheck:ne,src:null,srcDoc:null,srcLang:null,srcSet:null,start:C,step:null,style:null,tabIndex:C,target:null,title:null,translate:null,type:null,typeMustMatch:O,useMap:null,value:ne,width:C,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:G,axis:null,background:null,bgColor:null,border:C,borderColor:null,bottomMargin:C,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:O,declare:O,event:null,face:null,frame:null,frameBorder:null,hSpace:C,leftMargin:C,link:null,longDesc:null,lowSrc:null,marginHeight:C,marginWidth:C,noResize:O,noHref:O,noShade:O,noWrap:O,object:null,profile:null,prompt:null,rev:null,rightMargin:C,rules:null,scheme:null,scrolling:ne,standby:null,summary:null,text:null,topMargin:C,valueType:null,version:null,vAlign:null,vLink:null,vSpace:C,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:O,disablePictureInPicture:O,disableRemotePlayback:O,exportParts:Ue,part:G,prefix:null,property:null,results:C,security:null,unselectable:null},space:"html",transform:_n});var Ra=we({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ye,accentHeight:C,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:C,amplitude:C,arabicForm:null,ascent:C,attributeName:null,attributeType:null,azimuth:C,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:C,by:null,calcMode:null,capHeight:C,className:G,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:C,diffuseConstant:C,direction:null,display:null,dur:null,divisor:C,dominantBaseline:null,download:O,dx:null,dy:null,edgeMode:null,editable:null,elevation:C,enableBackground:null,end:null,event:null,exponent:C,externalResourcesRequired:null,fill:null,fillOpacity:C,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ue,g2:Ue,glyphName:Ue,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:C,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:C,horizOriginX:C,horizOriginY:C,id:null,ideographic:C,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:C,k:C,k1:C,k2:C,k3:C,k4:C,kernelMatrix:ye,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:C,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:C,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:C,overlineThickness:C,paintOrder:null,panose1:null,path:null,pathLength:C,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:G,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:C,pointsAtY:C,pointsAtZ:C,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ye,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ye,rev:ye,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ye,requiredFeatures:ye,requiredFonts:ye,requiredFormats:ye,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:C,specularExponent:C,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:C,strikethroughThickness:C,string:null,stroke:null,strokeDashArray:ye,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:C,strokeOpacity:C,strokeWidth:null,style:null,surfaceScale:C,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ye,tabIndex:C,tableValues:null,target:null,targetX:C,targetY:C,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ye,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:C,underlineThickness:C,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:C,values:null,vAlphabetic:C,vMathematical:C,vectorEffect:null,vHanging:C,vIdeographic:C,version:null,vertAdvY:C,vertOriginX:C,vertOriginY:C,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:C,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:kn});var Pr=we({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return "xlink:"+t.slice(5).toLowerCase()}});var Lr=we({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:_n});var Rr=we({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return "xml:"+t.slice(3).toLowerCase()}});var Dr={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var Cc=/[A-Z]/g,Da=/-[a-z]/g,Ec=/^data[-\w.:]+$/i;function Mr(e,t){let n=Ot(t),r=t,i=ce;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Ec.test(t)){if(t.charAt(4)==="-"){let o=t.slice(5).replace(Da,Ic);r="data"+o.charAt(0).toUpperCase()+o.slice(1);}else {let o=t.slice(4);if(!Da.test(o)){let a=o.replace(Cc,Ac);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a;}}i=tt;}return new i(r,t)}function Ac(e){return "-"+e.toLowerCase()}function Ic(e){return e.charAt(1).toUpperCase()}var Ma=Ar([Tr,La,Pr,Lr,Rr],"html"),zn=Ar([Tr,Ra,Pr,Lr,Rr],"svg");function Na(e){return e.join(" ").trim()}var Ja=co(Ya());var Cn=Ka("end"),bt=Ka("start");function Ka(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return {line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Or(e){let t=bt(e),n=Cn(e);if(t&&n)return {start:t,end:n}}function Ve(e){return !e||typeof e!="object"?"":"position"in e||"type"in e?Xa(e.position):"start"in e||"end"in e?Xa(e):"line"in e||"column"in e?Ur(e):""}function Ur(e){return Ga(e&&e.line)+":"+Ga(e&&e.column)}function Xa(e){return Ur(e&&e.start)+"-"+Ur(e&&e.end)}function Ga(e){return e&&typeof e=="number"?e:1}var le=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=false;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=true,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){let s=r.indexOf(":");s===-1?o.ruleId=r:(o.source=r.slice(0,s),o.ruleId=r.slice(s+1));}if(!o.place&&o.ancestors&&o.ancestors){let s=o.ancestors[o.ancestors.length-1];s&&(o.place=s.position);}let l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Ve(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0;}};le.prototype.file="";le.prototype.name="";le.prototype.reason="";le.prototype.message="";le.prototype.stack="";le.prototype.column=void 0;le.prototype.line=void 0;le.prototype.ancestors=void 0;le.prototype.cause=void 0;le.prototype.fatal=void 0;le.prototype.place=void 0;le.prototype.ruleId=void 0;le.prototype.source=void 0;var Br={}.hasOwnProperty,tp=new Map,np=/[A-Z]/g,rp=new Set(["table","tbody","thead","tfoot","tr"]),ip=new Set(["td","th"]),Qa="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Hr(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=fp(n,t.jsxDEV);}else {if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=pp(n,t.jsx,t.jsxs);}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||false,passKeys:t.passKeys!==false,passNode:t.passNode||false,schema:t.space==="svg"?zn:Ma,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==false},o=Za(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Za(e,t,n){if(t.type==="element")return op(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return ap(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return sp(e,t,n);if(t.type==="mdxjsEsm")return lp(e,t);if(t.type==="root")return up(e,t,n);if(t.type==="text")return cp(e,t)}function op(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=zn,e.schema=i),e.ancestors.push(t);let o=tl(e,t.tagName,false),a=mp(e,t),l=Wr(e,t);return rp.has(t.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!Er(s):true})),el(e,a,o,t),jr(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function ap(e,t){if(t.data&&t.data.estree&&e.evaluater){let r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ht(e,t.position);}function lp(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ht(e,t.position);}function sp(e,t,n){let r=e.schema,i=r;t.name==="svg"&&r.space==="html"&&(i=zn,e.schema=i),e.ancestors.push(t);let o=t.name===null?e.Fragment:tl(e,t.name,true),a=hp(e,t),l=Wr(e,t);return el(e,a,o,t),jr(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function up(e,t,n){let r={};return jr(r,Wr(e,t)),e.create(t,e.Fragment,r,n)}function cp(e,t){return t.value}function el(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r);}function jr(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n);}}function pp(e,t,n){return r;function r(i,o,a,l){let u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function fp(e,t){return n;function n(r,i,o,a){let l=Array.isArray(o.children),s=bt(r);return t(i,o,a,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function mp(e,t){let n={},r,i;for(i in t.properties)if(i!=="children"&&Br.call(t.properties,i)){let o=dp(e,i,t.properties[i]);if(o){let[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&ip.has(t.tagName)?r=l:n[a]=l;}}if(r){let o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r;}return n}function hp(e,t){let n={};for(let r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){let o=r.data.estree.body[0];o.type;let a=o.expression;a.type;let l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument));}else Ht(e,t.position);else {let i=r.name,o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){let l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression);}else Ht(e,t.position);else o=r.value===null?true:r.value;n[i]=o;}return n}function Wr(e,t){let n=[],r=-1,i=e.passKeys?new Map:tp;for(;++r<t.children.length;){let o=t.children[r],a;if(e.passKeys){let s=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(s){let u=i.get(s)||0;a=s+"-"+u,i.set(s,u+1);}}let l=Za(e,o,a);l!==void 0&&n.push(l);}return n}function dp(e,t,n){let r=Mr(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Ia(n):Na(n)),r.property==="style"){let i=typeof n=="object"?n:gp(e,String(n));return e.stylePropertyNameCase==="css"&&(i=yp(i)),["style",i]}return [e.elementAttributeNameCase==="react"&&r.space?Dr[r.property]||r.property:r.attribute,n]}}function gp(e,t){try{return (0,Ja.default)(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return {};let r=n,i=new le("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Qa+"#cannot-parse-style-attribute",i}}function tl(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){let i=t.split("."),o=-1,a;for(;++o<i.length;){let l=bn(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:false}:l;}r=a;}else r=bn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){let i=r.value;return Br.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ht(e);}function Ht(e,t){let n=new le("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Qa+"#cannot-handle-mdx-estrees-without-createevaluater",n}function yp(e){let t={},n;for(n in e)Br.call(e,n)&&(t[xp(n)]=e[n]);return t}function xp(e){let t=e.replace(np,vp);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function vp(e){return "-"+e.toLowerCase()}var jt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};var bp={};function rt(e,t){let n=bp,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:true,i=typeof n.includeHtml=="boolean"?n.includeHtml:true;return rl(e,r,i)}function rl(e,t,n){if(wp(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return nl(e.children,t,n)}return Array.isArray(e)?nl(e,t,n):""}function nl(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=rl(e[i],t,n);return r.join("")}function wp(e){return !!(e&&typeof e=="object")}var il=document.createElement("i");function wt(e){let t="&"+e+";";il.innerHTML=t;let n=il.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?false:n}function se(e,t,n,r){let i=e.length,o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4;}function ge(e,t){return e.length>0?(se(e,e.length,0,t),e):t}var ol={}.hasOwnProperty;function En(e){let t={},n=-1;for(;++n<e.length;)kp(t,e[n]);return t}function kp(e,t){let n;for(n in t){let i=(ol.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n],a;if(o)for(a in o){ol.call(i,a)||(i[a]=[]);let l=o[a];_p(i[a],Array.isArray(l)?l:l?[l]:[]);}}}function _p(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);se(e,0,0,r);}function An(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function fe(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var ue=qe(/[A-Za-z]/),re=qe(/[\dA-Za-z]/),al=qe(/[#-'*+\--9=?A-Z^-~]/);function it(e){return e!==null&&(e<32||e===127)}var Wt=qe(/\d/),ll=qe(/[\dA-Fa-f]/),sl=qe(/[!-/:-@[-`{-~]/);function I(e){return e!==null&&e<-2}function q(e){return e!==null&&(e<0||e===32)}function R(e){return e===-2||e===-1||e===32}var ot=qe(/\p{P}|\p{S}/u),Te=qe(/\s/);function qe(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function ke(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let o=e.charCodeAt(n),a="";if(o===37&&re(e.charCodeAt(n+1))&&re(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){let l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),i=1):a="\uFFFD";}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0);}return t.join("")+e.slice(r)}function L(e,t,n,r){let i=r?r-1:Number.POSITIVE_INFINITY,o=0;return a;function a(s){return R(s)?(e.enter(n),l(s)):t(s)}function l(s){return R(s)&&o++<i?(e.consume(s),l):(e.exit(n),t(s))}}var ul={tokenize:zp};function zp(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),L(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){let s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return I(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}var pl={tokenize:Sp},cl={tokenize:Cp};function Sp(e){let t=this,n=[],r=0,i,o,a;return l;function l(S){if(r<n.length){let M=n[r];return t.containerState=M[1],e.attempt(M[0].continuation,s,u)(S)}return u(S)}function s(S){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&z();let M=t.events.length,D=M,k;for(;D--;)if(t.events[D][0]==="exit"&&t.events[D][1].type==="chunkFlow"){k=t.events[D][1].end;break}y(r);let $=M;for(;$<t.events.length;)t.events[$][1].end={...k},$++;return se(t.events,D+1,0,t.events.slice(M)),t.events.length=$,u(S)}return l(S)}function u(S){if(r===n.length){if(!i)return p(S);if(i.currentConstruct&&i.currentConstruct.concrete)return h(S);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack);}return t.containerState={},e.check(cl,c,f)(S)}function c(S){return i&&z(),y(r),p(S)}function f(S){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,h(S)}function p(S){return t.containerState={},e.attempt(cl,m,h)(S)}function m(S){return r++,n.push([t.currentConstruct,t.containerState]),p(S)}function h(S){if(S===null){i&&z(),y(0),e.consume(S);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),x(S)}function x(S){if(S===null){w(e.exit("chunkFlow"),true),y(0),e.consume(S);return}return I(S)?(e.consume(S),w(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(S),x)}function w(S,M){let D=t.sliceStream(S);if(M&&D.push(null),S.previous=o,o&&(o.next=S),o=S,i.defineSkip(S.start),i.write(D),t.parser.lazy[S.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<a&&(!i.events[k][1].end||i.events[k][1].end.offset>a))return;let $=t.events.length,Y=$,W,v;for(;Y--;)if(t.events[Y][0]==="exit"&&t.events[Y][1].type==="chunkFlow"){if(W){v=t.events[Y][1].end;break}W=true;}for(y(r),k=$;k<t.events.length;)t.events[k][1].end={...v},k++;se(t.events,Y+1,0,t.events.slice($)),t.events.length=k;}}function y(S){let M=n.length;for(;M-- >S;){let D=n[M];t.containerState=D[1],D[0].exit.call(t,e);}n.length=S;}function z(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0;}}function Cp(e,t,n){return L(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Be(e){if(e===null||q(e)||Te(e))return 1;if(ot(e))return 2}function Ye(e,t,n){let r=[],i=-1;for(;++i<e.length;){let o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o));}return t}var $t={name:"attention",resolveAll:Ep,tokenize:Ap};function Ep(e,t){let n=-1,r,i,o,a,l,s,u,c;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let f={...e[r][1].end},p={...e[n][1].start};fl(f,-s),fl(p,s),a={type:s>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:p},o={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=ge(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=ge(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=ge(u,Ye(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=ge(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(c=2,u=ge(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):c=0,se(e,r-1,n-r+3,u),n=r+u.length-c-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Ap(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Be(r),o;return a;function a(s){return o=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===o)return e.consume(s),l;let u=e.exit("attentionSequence"),c=Be(s),f=!c||c===2&&i||n.includes(s),p=!i||i===2&&c||n.includes(r);return u._open=!!(o===42?f:f&&(i||!p)),u._close=!!(o===42?p:p&&(c||!f)),t(s)}}function fl(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t;}var $r={name:"autolink",tokenize:Ip};function Ip(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return ue(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||re(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,s):(m===43||m===45||m===46||re(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function s(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||it(m)?n(m):(e.consume(m),s)}function u(m){return m===64?(e.consume(m),c):al(m)?(e.consume(m),u):n(m)}function c(m){return re(m)?f(m):n(m)}function f(m){return m===46?(e.consume(m),r=0,c):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):p(m)}function p(m){if((m===45||re(m))&&r++<63){let h=m===45?p:f;return e.consume(m),h}return n(m)}}var Pe={partial:true,tokenize:Tp};function Tp(e,t,n){return r;function r(o){return R(o)?L(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||I(o)?t(o):n(o)}}var In={continuation:{tokenize:Lp},exit:Rp,name:"blockQuote",tokenize:Pp};function Pp(e,t,n){let r=this;return i;function i(a){if(a===62){let l=r.containerState;return l.open||(e.enter("blockQuote",{_container:true}),l.open=true),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return R(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function Lp(e,t,n){let r=this;return i;function i(a){return R(a)?L(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(In,t,n)(a)}}function Rp(e){e.exit("blockQuote");}var Tn={name:"characterEscape",tokenize:Dp};function Dp(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return sl(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}var Pn={name:"characterReference",tokenize:Mp};function Mp(e,t,n){let r=this,i=0,o,a;return l;function l(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),s}function s(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=re,c(f))}function u(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=ll,c):(e.enter("characterReferenceValue"),o=7,a=Wt,c(f))}function c(f){if(f===59&&i){let p=e.exit("characterReferenceValue");return a===re&&!wt(r.sliceSerialize(p))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(f)&&i++<o?(e.consume(f),c):n(f)}}var ml={partial:true,tokenize:Fp},Ln={concrete:true,name:"codeFenced",tokenize:Np};function Np(e,t,n){let r=this,i={partial:true,tokenize:D},o=0,a=0,l;return s;function s(k){return u(k)}function u(k){let $=r.events[r.events.length-1];return o=$&&$[1].type==="linePrefix"?$[2].sliceSerialize($[1],true).length:0,l=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(k)}function c(k){return k===l?(a++,e.consume(k),c):a<3?n(k):(e.exit("codeFencedFenceSequence"),R(k)?L(e,f,"whitespace")(k):f(k))}function f(k){return k===null||I(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(ml,x,M)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(k))}function p(k){return k===null||I(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(k)):R(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),L(e,m,"whitespace")(k)):k===96&&k===l?n(k):(e.consume(k),p)}function m(k){return k===null||I(k)?f(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),h(k))}function h(k){return k===null||I(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(k)):k===96&&k===l?n(k):(e.consume(k),h)}function x(k){return e.attempt(i,M,w)(k)}function w(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),y}function y(k){return o>0&&R(k)?L(e,z,"linePrefix",o+1)(k):z(k)}function z(k){return k===null||I(k)?e.check(ml,x,M)(k):(e.enter("codeFlowValue"),S(k))}function S(k){return k===null||I(k)?(e.exit("codeFlowValue"),z(k)):(e.consume(k),S)}function M(k){return e.exit("codeFenced"),t(k)}function D(k,$,Y){let W=0;return v;function v(U){return k.enter("lineEnding"),k.consume(U),k.exit("lineEnding"),J}function J(U){return k.enter("codeFencedFence"),R(U)?L(k,V,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(U):V(U)}function V(U){return U===l?(k.enter("codeFencedFenceSequence"),T(U)):Y(U)}function T(U){return U===l?(W++,k.consume(U),T):W>=a?(k.exit("codeFencedFenceSequence"),R(U)?L(k,B,"whitespace")(U):B(U)):Y(U)}function B(U){return U===null||I(U)?(k.exit("codeFencedFence"),$(U)):Y(U)}}}function Fp(e,t,n){let r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}var Vt={name:"codeIndented",tokenize:Up},Op={partial:true,tokenize:Bp};function Up(e,t,n){let r=this;return i;function i(u){return e.enter("codeIndented"),L(e,o,"linePrefix",5)(u)}function o(u){let c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],true).length>=4?a(u):n(u)}function a(u){return u===null?s(u):I(u)?e.attempt(Op,a,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||I(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),t(u)}}function Bp(e,t,n){let r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):I(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):L(e,o,"linePrefix",5)(a)}function o(a){let l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(a):I(a)?i(a):n(a)}}var Vr={name:"codeText",previous:jp,resolve:Hp,tokenize:Wp};function Hp(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function jp(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Wp(e,t,n){let i=0,o,a;return l;function l(p){return e.enter("codeText"),e.enter("codeTextSequence"),s(p)}function s(p){return p===96?(e.consume(p),i++,s):(e.exit("codeTextSequence"),u(p))}function u(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),u):p===96?(a=e.enter("codeTextSequence"),o=0,f(p)):I(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(p))}function c(p){return p===null||p===32||p===96||I(p)?(e.exit("codeTextData"),u(p)):(e.consume(p),c)}function f(p){return p===96?(e.consume(p),o++,f):o===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(a.type="codeTextData",c(p))}}var Rn=class{constructor(t){this.left=t?[...t]:[],this.right=[];}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let i=n||0;this.setCursor(Math.trunc(t));let o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&qt(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t);}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),qt(this.left,t);}unshift(t){this.setCursor(0),this.right.push(t);}unshiftMany(t){this.setCursor(0),qt(this.right,t.reverse());}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,Number.POSITIVE_INFINITY);qt(this.right,n.reverse());}else {let n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);qt(this.left,n.reverse());}}};function qt(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4;}function Dn(e){let t={},n=-1,r,i,o,a,l,s,u,c=new Rn(e);for(;++n<c.length;){for(;n in t;)n=t[n];if(r=c.get(n),n&&r[1].type==="chunkFlow"&&c.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,o=0,o<s.length&&s[o][1].type==="lineEndingBlank"&&(o+=2),o<s.length&&s[o][1].type==="content"))for(;++o<s.length&&s[o][1].type!=="content";)s[o][1].type==="chunkText"&&(s[o][1]._isInFirstContentOfListItem=true,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,$p(c,n)),n=t[n],u=true);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=c.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(c.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...c.get(i)[1].start},l=c.slice(i,n),l.unshift(r),c.splice(i,n-i+1,l));}}return se(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function $p(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,o=[],a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=true));let l=a.events,s=[],u={},c,f,p=-1,m=n,h=0,x=0,w=[x];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(c=r.sliceStream(m),m.next||c.push(null),f&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=true),a.write(c),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),f=m,m=m.next;}for(m=n;++p<l.length;)l[p][0]==="exit"&&l[p-1][0]==="enter"&&l[p][1].type===l[p-1][1].type&&l[p][1].start.line!==l[p][1].end.line&&(x=p+1,w.push(x),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):w.pop(),p=w.length;p--;){let y=l.slice(w[p],w[p+1]),z=o.pop();s.push([z,z+y.length-1]),e.splice(z,2,y);}for(s.reverse(),p=-1;++p<s.length;)u[h+s[p][0]]=h+s[p][1],h+=s[p][1]-s[p][0]-1;return u}var qr={resolve:qp,tokenize:Yp},Vp={partial:true,tokenize:Kp};function qp(e){return Dn(e),e}function Yp(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):I(l)?e.check(Vp,a,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Kp(e,t,n){let r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),L(e,o,"linePrefix")}function o(a){if(a===null||I(a))return n(a);let l=r.events[r.events.length-1];return !r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Mn(e,t,n,r,i,o,a,l,s){let u=s||Number.POSITIVE_INFINITY,c=0;return f;function f(y){return y===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(y),e.exit(o),p):y===null||y===32||y===41||it(y)?n(y):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),x(y))}function p(y){return y===62?(e.enter(o),e.consume(y),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(y))}function m(y){return y===62?(e.exit("chunkString"),e.exit(l),p(y)):y===null||y===60||I(y)?n(y):(e.consume(y),y===92?h:m)}function h(y){return y===60||y===62||y===92?(e.consume(y),m):m(y)}function x(y){return !c&&(y===null||y===41||q(y))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(y)):c<u&&y===40?(e.consume(y),c++,x):y===41?(e.consume(y),c--,x):y===null||y===32||y===40||it(y)?n(y):(e.consume(y),y===92?w:x)}function w(y){return y===40||y===41||y===92?(e.consume(y),x):x(y)}}function Nn(e,t,n,r,i,o){let a=this,l=0,s;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),c}function c(m){return l>999||m===null||m===91||m===93&&!s||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):I(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),f(m))}function f(m){return m===null||m===91||m===93||I(m)||l++>999?(e.exit("chunkString"),c(m)):(e.consume(m),s||(s=!R(m)),m===92?p:f)}function p(m){return m===91||m===92||m===93?(e.consume(m),l++,f):f(m)}}function Fn(e,t,n,r,i,o){let a;return l;function l(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),a=p===40?41:p,s):n(p)}function s(p){return p===a?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(o),u(p))}function u(p){return p===a?(e.exit(o),s(a)):p===null?n(p):I(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),L(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===a||p===null||I(p)?(e.exit("chunkString"),u(p)):(e.consume(p),p===92?f:c)}function f(p){return p===a||p===92?(e.consume(p),c):c(p)}}function at(e,t){let n;return r;function r(i){return I(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=true,r):R(i)?L(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}var Yr={name:"definition",tokenize:Gp},Xp={partial:true,tokenize:Jp};function Gp(e,t,n){let r=this,i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return Nn.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return i=fe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),s):n(m)}function s(m){return q(m)?at(e,u)(m):u(m)}function u(m){return Mn(e,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function c(m){return e.attempt(Xp,f,f)(m)}function f(m){return R(m)?L(e,p,"whitespace")(m):p(m)}function p(m){return m===null||I(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Jp(e,t,n){return r;function r(l){return q(l)?at(e,i)(l):n(l)}function i(l){return Fn(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return R(l)?L(e,a,"whitespace")(l):a(l)}function a(l){return l===null||I(l)?t(l):n(l)}}var Kr={name:"hardBreakEscape",tokenize:Qp};function Qp(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return I(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}var Xr={name:"headingAtx",resolve:Zp,tokenize:ef};function Zp(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},se(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function ef(e,t,n){let r=0;return i;function i(c){return e.enter("atxHeading"),o(c)}function o(c){return e.enter("atxHeadingSequence"),a(c)}function a(c){return c===35&&r++<6?(e.consume(c),a):c===null||q(c)?(e.exit("atxHeadingSequence"),l(c)):n(c)}function l(c){return c===35?(e.enter("atxHeadingSequence"),s(c)):c===null||I(c)?(e.exit("atxHeading"),t(c)):R(c)?L(e,l,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function s(c){return c===35?(e.consume(c),s):(e.exit("atxHeadingSequence"),l(c))}function u(c){return c===null||c===35||q(c)?(e.exit("atxHeadingText"),l(c)):(e.consume(c),u)}}var hl=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Gr=["pre","script","style","textarea"];var Jr={concrete:true,name:"htmlFlow",resolveTo:rf,tokenize:of},tf={partial:true,tokenize:lf},nf={partial:true,tokenize:af};function rf(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function of(e,t,n){let r=this,i,o,a,l,s;return u;function u(g){return c(g)}function c(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),f}function f(g){return g===33?(e.consume(g),p):g===47?(e.consume(g),o=true,x):g===63?(e.consume(g),i=3,r.interrupt?t:d):ue(g)?(e.consume(g),a=String.fromCharCode(g),w):n(g)}function p(g){return g===45?(e.consume(g),i=2,m):g===91?(e.consume(g),i=5,l=0,h):ue(g)?(e.consume(g),i=4,r.interrupt?t:d):n(g)}function m(g){return g===45?(e.consume(g),r.interrupt?t:d):n(g)}function h(g){let ie="CDATA[";return g===ie.charCodeAt(l++)?(e.consume(g),l===ie.length?r.interrupt?t:V:h):n(g)}function x(g){return ue(g)?(e.consume(g),a=String.fromCharCode(g),w):n(g)}function w(g){if(g===null||g===47||g===62||q(g)){let ie=g===47,he=a.toLowerCase();return !ie&&!o&&Gr.includes(he)?(i=1,r.interrupt?t(g):V(g)):hl.includes(a.toLowerCase())?(i=6,ie?(e.consume(g),y):r.interrupt?t(g):V(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):o?z(g):S(g))}return g===45||re(g)?(e.consume(g),a+=String.fromCharCode(g),w):n(g)}function y(g){return g===62?(e.consume(g),r.interrupt?t:V):n(g)}function z(g){return R(g)?(e.consume(g),z):v(g)}function S(g){return g===47?(e.consume(g),v):g===58||g===95||ue(g)?(e.consume(g),M):R(g)?(e.consume(g),S):v(g)}function M(g){return g===45||g===46||g===58||g===95||re(g)?(e.consume(g),M):D(g)}function D(g){return g===61?(e.consume(g),k):R(g)?(e.consume(g),D):S(g)}function k(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),s=g,$):R(g)?(e.consume(g),k):Y(g)}function $(g){return g===s?(e.consume(g),s=null,W):g===null||I(g)?n(g):(e.consume(g),$)}function Y(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||q(g)?D(g):(e.consume(g),Y)}function W(g){return g===47||g===62||R(g)?S(g):n(g)}function v(g){return g===62?(e.consume(g),J):n(g)}function J(g){return g===null||I(g)?V(g):R(g)?(e.consume(g),J):n(g)}function V(g){return g===45&&i===2?(e.consume(g),Q):g===60&&i===1?(e.consume(g),P):g===62&&i===4?(e.consume(g),F):g===63&&i===3?(e.consume(g),d):g===93&&i===5?(e.consume(g),j):I(g)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(tf,X,T)(g)):g===null||I(g)?(e.exit("htmlFlowData"),T(g)):(e.consume(g),V)}function T(g){return e.check(nf,B,X)(g)}function B(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),U}function U(g){return g===null||I(g)?T(g):(e.enter("htmlFlowData"),V(g))}function Q(g){return g===45?(e.consume(g),d):V(g)}function P(g){return g===47?(e.consume(g),a="",A):V(g)}function A(g){if(g===62){let ie=a.toLowerCase();return Gr.includes(ie)?(e.consume(g),F):V(g)}return ue(g)&&a.length<8?(e.consume(g),a+=String.fromCharCode(g),A):V(g)}function j(g){return g===93?(e.consume(g),d):V(g)}function d(g){return g===62?(e.consume(g),F):g===45&&i===2?(e.consume(g),d):V(g)}function F(g){return g===null||I(g)?(e.exit("htmlFlowData"),X(g)):(e.consume(g),F)}function X(g){return e.exit("htmlFlow"),t(g)}}function af(e,t,n){let r=this;return i;function i(a){return I(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function lf(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Pe,t,n)}}var Qr={name:"htmlText",tokenize:sf};function sf(e,t,n){let r=this,i,o,a;return l;function l(d){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(d),s}function s(d){return d===33?(e.consume(d),u):d===47?(e.consume(d),D):d===63?(e.consume(d),S):ue(d)?(e.consume(d),Y):n(d)}function u(d){return d===45?(e.consume(d),c):d===91?(e.consume(d),o=0,h):ue(d)?(e.consume(d),z):n(d)}function c(d){return d===45?(e.consume(d),m):n(d)}function f(d){return d===null?n(d):d===45?(e.consume(d),p):I(d)?(a=f,P(d)):(e.consume(d),f)}function p(d){return d===45?(e.consume(d),m):f(d)}function m(d){return d===62?Q(d):d===45?p(d):f(d)}function h(d){let F="CDATA[";return d===F.charCodeAt(o++)?(e.consume(d),o===F.length?x:h):n(d)}function x(d){return d===null?n(d):d===93?(e.consume(d),w):I(d)?(a=x,P(d)):(e.consume(d),x)}function w(d){return d===93?(e.consume(d),y):x(d)}function y(d){return d===62?Q(d):d===93?(e.consume(d),y):x(d)}function z(d){return d===null||d===62?Q(d):I(d)?(a=z,P(d)):(e.consume(d),z)}function S(d){return d===null?n(d):d===63?(e.consume(d),M):I(d)?(a=S,P(d)):(e.consume(d),S)}function M(d){return d===62?Q(d):S(d)}function D(d){return ue(d)?(e.consume(d),k):n(d)}function k(d){return d===45||re(d)?(e.consume(d),k):$(d)}function $(d){return I(d)?(a=$,P(d)):R(d)?(e.consume(d),$):Q(d)}function Y(d){return d===45||re(d)?(e.consume(d),Y):d===47||d===62||q(d)?W(d):n(d)}function W(d){return d===47?(e.consume(d),Q):d===58||d===95||ue(d)?(e.consume(d),v):I(d)?(a=W,P(d)):R(d)?(e.consume(d),W):Q(d)}function v(d){return d===45||d===46||d===58||d===95||re(d)?(e.consume(d),v):J(d)}function J(d){return d===61?(e.consume(d),V):I(d)?(a=J,P(d)):R(d)?(e.consume(d),J):W(d)}function V(d){return d===null||d===60||d===61||d===62||d===96?n(d):d===34||d===39?(e.consume(d),i=d,T):I(d)?(a=V,P(d)):R(d)?(e.consume(d),V):(e.consume(d),B)}function T(d){return d===i?(e.consume(d),i=void 0,U):d===null?n(d):I(d)?(a=T,P(d)):(e.consume(d),T)}function B(d){return d===null||d===34||d===39||d===60||d===61||d===96?n(d):d===47||d===62||q(d)?W(d):(e.consume(d),B)}function U(d){return d===47||d===62||q(d)?W(d):n(d)}function Q(d){return d===62?(e.consume(d),e.exit("htmlTextData"),e.exit("htmlText"),t):n(d)}function P(d){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),A}function A(d){return R(d)?L(e,j,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):j(d)}function j(d){return e.enter("htmlTextData"),a(d)}}var lt={name:"labelEnd",resolveAll:ff,resolveTo:mf,tokenize:hf},uf={tokenize:df},cf={tokenize:gf},pf={tokenize:yf};function ff(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let i=r.type==="labelImage"?4:2;r.type="data",t+=i;}}return e.length!==n.length&&se(e,0,e.length,n),e}function mf(e,t){let n=e.length,r=0,i,o,a,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=true);}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);let s={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},c={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",s,t],["enter",u,t]],l=ge(l,e.slice(o+1,o+r+3)),l=ge(l,[["enter",c,t]]),l=ge(l,Ye(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=ge(l,[["exit",c,t],e[a-2],e[a-1],["exit",u,t]]),l=ge(l,e.slice(a+1)),l=ge(l,[["exit",s,t]]),se(e,o,e.length,l),e}function hf(e,t,n){let r=this,i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(p){return o?o._inactive?f(p):(a=r.parser.defined.includes(fe(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),s):n(p)}function s(p){return p===40?e.attempt(uf,c,a?c:f)(p):p===91?e.attempt(cf,c,a?u:f)(p):a?c(p):f(p)}function u(p){return e.attempt(pf,c,f)(p)}function c(p){return t(p)}function f(p){return o._balanced=true,n(p)}}function df(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return q(f)?at(e,o)(f):o(f)}function o(f){return f===41?c(f):Mn(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function a(f){return q(f)?at(e,s)(f):c(f)}function l(f){return n(f)}function s(f){return f===34||f===39||f===40?Fn(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):c(f)}function u(f){return q(f)?at(e,c)(f):c(f)}function c(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function gf(e,t,n){let r=this;return i;function i(l){return Nn.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(fe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function yf(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}var Zr={name:"labelStartImage",resolveAll:lt.resolveAll,tokenize:xf};function xf(e,t,n){let r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}var ei={name:"labelStartLink",resolveAll:lt.resolveAll,tokenize:vf};function vf(e,t,n){let r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}var Yt={name:"lineEnding",tokenize:bf};function bf(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),L(e,t,"linePrefix")}}var st={name:"thematicBreak",tokenize:wf};function wf(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||I(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),R(u)?L(e,l,"whitespace")(u):l(u))}}var me={continuation:{tokenize:Sf},exit:Ef,name:"list",tokenize:zf},kf={partial:true,tokenize:Af},_f={partial:true,tokenize:Cf};function zf(e,t,n){let r=this,i=r.events[r.events.length-1],o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],true).length:0,a=0;return l;function l(m){let h=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(h==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Wt(m)){if(r.containerState.type||(r.containerState.type=h,e.enter(h,{_container:true})),h==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(st,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(m)}return n(m)}function s(m){return Wt(m)&&++a<10?(e.consume(m),s):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Pe,r.interrupt?n:c,e.attempt(kf,p,f))}function c(m){return r.containerState.initialBlankLine=true,o++,p(m)}function f(m){return R(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),p):n(m)}function p(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),true).length,t(m)}}function Sf(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Pe,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,L(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!R(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(_f,t,a)(l))}function a(l){return r.containerState._closeFlow=true,r.interrupt=void 0,L(e,e.attempt(me,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Cf(e,t,n){let r=this;return L(e,i,"listItemIndent",r.containerState.size+1);function i(o){let a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],true).length===r.containerState.size?t(o):n(o)}}function Ef(e){e.exit(this.containerState.type);}function Af(e,t,n){let r=this;return L(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){let a=r.events[r.events.length-1];return !R(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}var On={name:"setextUnderline",resolveTo:If,tokenize:Tf};function If(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n);}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);let a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function Tf(e,t,n){let r=this,i;return o;function o(u){let c=r.events.length,f;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){f=r.events[c][1].type==="paragraph";break}return !r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),R(u)?L(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||I(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}var dl={tokenize:Pf};function Pf(e){let t=this,n=e.attempt(Pe,r,e.attempt(this.parser.constructs.flowInitial,i,L(e,e.attempt(this.parser.constructs.flow,i,e.attempt(qr,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}var gl={resolveAll:bl()},yl=vl("string"),xl=vl("text");function vl(e){return {resolveAll:bl(e==="text"?Lf:void 0),tokenize:t};function t(n){let r=this,i=this.parser.constructs[e],o=n.attempt(i,a,l);return a;function a(c){return u(c)?o(c):l(c)}function l(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),s}function s(c){return u(c)?(n.exit("data"),o(c)):(n.consume(c),s)}function u(c){if(c===null)return  true;let f=i[c],p=-1;if(f)for(;++p<f.length;){let m=f[p];if(!m.previous||m.previous.call(r,r.previous))return  true}return  false}}}function bl(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function Lf(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],i=t.sliceStream(r),o=i.length,a=-1,l=0,s;for(;o--;){let u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1;}else if(u===-2)s=true,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){let u={type:n===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2);}n++;}return e}var ti={};uo(ti,{attentionMarkers:()=>Bf,contentInitial:()=>Df,disable:()=>Hf,document:()=>Rf,flow:()=>Nf,flowInitial:()=>Mf,insideSpan:()=>Uf,string:()=>Ff,text:()=>Of});var Rf={42:me,43:me,45:me,48:me,49:me,50:me,51:me,52:me,53:me,54:me,55:me,56:me,57:me,62:In},Df={91:Yr},Mf={[-2]:Vt,[-1]:Vt,32:Vt},Nf={35:Xr,42:st,45:[On,st],60:Jr,61:On,95:st,96:Ln,126:Ln},Ff={38:Pn,92:Tn},Of={[-5]:Yt,[-4]:Yt,[-3]:Yt,33:Zr,38:Pn,42:$t,60:[$r,Qr],91:ei,92:[Kr,Tn],93:lt,95:$t,96:Vr},Uf={null:[$t,gl]},Bf={null:[42,95]},Hf={null:[]};function wl(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},o=[],a=[],l=[],u={attempt:W($),check:W(Y),consume:M,enter:D,exit:k,interrupt:W(Y,{interrupt:true})},c={code:null,containerState:{},defineSkip:y,events:[],now:w,parser:e,previous:null,sliceSerialize:h,sliceStream:x,write:m},f=t.tokenize.call(c,u);return t.resolveAll&&o.push(t),c;function m(T){return a=ge(a,T),z(),a[a.length-1]!==null?[]:(v(t,0),c.events=Ye(o,c.events,c),c.events)}function h(T,B){return Wf(x(T),B)}function x(T){return jf(a,T)}function w(){let{_bufferIndex:T,_index:B,line:U,column:Q,offset:P}=r;return {_bufferIndex:T,_index:B,line:U,column:Q,offset:P}}function y(T){i[T.line]=T.column,V();}function z(){let T;for(;r._index<a.length;){let B=a[r._index];if(typeof B=="string")for(T=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===T&&r._bufferIndex<B.length;)S(B.charCodeAt(r._bufferIndex));else S(B);}}function S(T){f=f(T);}function M(T){I(T)?(r.line++,r.column=1,r.offset+=T===-3?2:1,V()):T!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=T;}function D(T,B){let U=B||{};return U.type=T,U.start=w(),c.events.push(["enter",U,c]),l.push(U),U}function k(T){let B=l.pop();return B.end=w(),c.events.push(["exit",B,c]),B}function $(T,B){v(T,B.from);}function Y(T,B){B.restore();}function W(T,B){return U;function U(Q,P,A){let j,d,F,X;return Array.isArray(Q)?ie(Q):"tokenize"in Q?ie([Q]):g(Q);function g(oe){return _e;function _e(de){let Re=de!==null&&oe[de],De=de!==null&&oe.null,ee=[...Array.isArray(Re)?Re:Re?[Re]:[],...Array.isArray(De)?De:De?[De]:[]];return ie(ee)(de)}}function ie(oe){return j=oe,d=0,oe.length===0?A:he(oe[d])}function he(oe){return _e;function _e(de){return X=J(),F=oe,oe.partial||(c.currentConstruct=oe),oe.name&&c.parser.constructs.disable.null.includes(oe.name)?je():oe.tokenize.call(B?Object.assign(Object.create(c),B):c,u,It,je)(de)}}function It(oe){return T(F,X),P}function je(oe){return X.restore(),++d<j.length?he(j[d]):A}}}function v(T,B){T.resolveAll&&!o.includes(T)&&o.push(T),T.resolve&&se(c.events,B,c.events.length-B,T.resolve(c.events.slice(B),c)),T.resolveTo&&(c.events=T.resolveTo(c.events,c));}function J(){let T=w(),B=c.previous,U=c.currentConstruct,Q=c.events.length,P=Array.from(l);return {from:Q,restore:A};function A(){r=T,c.previous=B,c.currentConstruct=U,c.events.length=Q,l=P,V();}}function V(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1);}}function jf(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex,a;if(n===i)a=[e[n].slice(r,o)];else {if(a=e.slice(n,i),r>-1){let l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift();}o>0&&a.push(e[i].slice(0,o));}return a}function Wf(e,t){let n=-1,r=[],i;for(;++n<e.length;){let o=e[n],a;if(typeof o=="string")a=o;else switch(o){case  -5:{a="\r";break}case  -4:{a=`
`;break}case  -3:{a=`\r
`;break}case  -2:{a=t?" ":"	";break}case  -1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o);}i=o===-2,r.push(a);}return r.join("")}function ni(e){let r={constructs:En([ti,...(e||{}).extensions||[]]),content:i(ul),defined:[],document:i(pl),flow:i(dl),lazy:{},string:i(yl),text:i(xl)};return r;function i(o){return a;function a(l){return wl(r,o,l)}}}function ri(e){for(;!Dn(e););return e}var kl=/[\0\t\n\r]/g;function ii(){let e=1,t="",n=true,r;return i;function i(o,a,l){let s=[],u,c,f,p,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),f=0,t="",n&&(o.charCodeAt(0)===65279&&f++,n=void 0);f<o.length;){if(kl.lastIndex=f,u=kl.exec(o),p=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(p),!u){t=o.slice(f);break}if(m===10&&f===p&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),f<p&&(s.push(o.slice(f,p)),e+=p-f),m){case 0:{s.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,s.push(-2);e++<c;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=true,e=1;}f=p+1;}return l&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var $f=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function _l(e){return e.replace($f,Vf)}function Vf(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let i=n.charCodeAt(1),o=i===120||i===88;return An(n.slice(o?2:1),o?16:10)}return wt(n)||e}var Sl={}.hasOwnProperty;function oi(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),qf(n)(ri(ni(n).document().write(ii()(e,t,true))))}function qf(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(lo),autolinkProtocol:W,autolinkEmail:W,atxHeading:o(ze),blockQuote:o(de),characterEscape:W,characterReference:W,codeFenced:o(Re),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(Re,a),codeText:o(De,a),codeTextData:W,data:W,codeFlowValue:W,definition:o(ee),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(xe),hardBreakEscape:o(Tt),hardBreakTrailing:o(Tt),htmlFlow:o(Zt,a),htmlFlowData:W,htmlText:o(Zt,a),htmlTextData:W,image:o(en),label:a,link:o(lo),listItem:o(bu),listItemValue:p,listOrdered:o(so,f),listUnordered:o(so),paragraph:o(wu),reference:g,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(ze),strong:o(ku),thematicBreak:o(zu)},exit:{atxHeading:s(),atxHeadingSequence:D,autolink:s(),autolinkEmail:_e,autolinkProtocol:oe,blockQuote:s(),characterEscapeValue:v,characterReferenceMarkerHexadecimal:he,characterReferenceMarkerNumeric:he,characterReferenceValue:It,characterReference:je,codeFenced:s(w),codeFencedFence:x,codeFencedFenceInfo:m,codeFencedFenceMeta:h,codeFlowValue:v,codeIndented:s(y),codeText:s(U),codeTextData:v,data:v,definition:s(),definitionDestinationString:M,definitionLabelString:z,definitionTitleString:S,emphasis:s(),hardBreakEscape:s(V),hardBreakTrailing:s(V),htmlFlow:s(T),htmlFlowData:v,htmlText:s(B),htmlTextData:v,image:s(P),label:j,labelText:A,lineEnding:J,link:s(Q),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:ie,resourceDestinationString:d,resourceTitleString:F,resource:X,setextHeading:s(Y),setextHeadingLineSequence:$,setextHeadingText:k,strong:s(),thematicBreak:s()}};Cl(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(_){let E={type:"root",children:[]},H={stack:[E],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:c,data:n},K=[],Z=-1;for(;++Z<_.length;)if(_[Z][1].type==="listOrdered"||_[Z][1].type==="listUnordered")if(_[Z][0]==="enter")K.push(Z);else {let Se=K.pop();Z=i(_,Se,Z);}for(Z=-1;++Z<_.length;){let Se=t[_[Z][0]];Sl.call(Se,_[Z][1].type)&&Se[_[Z][1].type].call(Object.assign({sliceSerialize:_[Z][2].sliceSerialize},H),_[Z][1]);}if(H.tokenStack.length>0){let Se=H.tokenStack[H.tokenStack.length-1];(Se[1]||zl).call(H,void 0,Se[0]);}for(E.position={start:Ke(_.length>0?_[0][1].start:{line:1,column:1,offset:0}),end:Ke(_.length>0?_[_.length-2][1].end:{line:1,column:1,offset:0})},Z=-1;++Z<t.transforms.length;)E=t.transforms[Z](E)||E;return E}function i(_,E,H){let K=E-1,Z=-1,Se=false,Je,Me,Pt,Lt;for(;++K<=H;){let ve=_[K];switch(ve[1].type){case "listUnordered":case "listOrdered":case "blockQuote":{ve[0]==="enter"?Z++:Z--,Lt=void 0;break}case "lineEndingBlank":{ve[0]==="enter"&&(Je&&!Lt&&!Z&&!Pt&&(Pt=K),Lt=void 0);break}case "linePrefix":case "listItemValue":case "listItemMarker":case "listItemPrefix":case "listItemPrefixWhitespace":break;default:Lt=void 0;}if(!Z&&ve[0]==="enter"&&ve[1].type==="listItemPrefix"||Z===-1&&ve[0]==="exit"&&(ve[1].type==="listUnordered"||ve[1].type==="listOrdered")){if(Je){let ht=K;for(Me=void 0;ht--;){let Ne=_[ht];if(Ne[1].type==="lineEnding"||Ne[1].type==="lineEndingBlank"){if(Ne[0]==="exit")continue;Me&&(_[Me][1].type="lineEndingBlank",Se=true),Ne[1].type="lineEnding",Me=ht;}else if(!(Ne[1].type==="linePrefix"||Ne[1].type==="blockQuotePrefix"||Ne[1].type==="blockQuotePrefixWhitespace"||Ne[1].type==="blockQuoteMarker"||Ne[1].type==="listItemIndent"))break}Pt&&(!Me||Pt<Me)&&(Je._spread=true),Je.end=Object.assign({},Me?_[Me][1].start:ve[1].end),_.splice(Me||K,0,["exit",Je,ve[2]]),K++,H++;}if(ve[1].type==="listItemPrefix"){let ht={type:"listItem",_spread:false,start:Object.assign({},ve[1].start),end:void 0};Je=ht,_.splice(K,0,["enter",ht,ve[2]]),K++,H++,Pt=void 0,Lt=true;}}}return _[E][1]._spread=Se,H}function o(_,E){return H;function H(K){l.call(this,_(K),K),E&&E.call(this,K);}}function a(){this.stack.push({type:"fragment",children:[]});}function l(_,E,H){this.stack[this.stack.length-1].children.push(_),this.stack.push(_),this.tokenStack.push([E,H||void 0]),_.position={start:Ke(E.start),end:void 0};}function s(_){return E;function E(H){_&&_.call(this,H),u.call(this,H);}}function u(_,E){let H=this.stack.pop(),K=this.tokenStack.pop();if(K)K[0].type!==_.type&&(E?E.call(this,_,K[0]):(K[1]||zl).call(this,_,K[0]));else throw new Error("Cannot close `"+_.type+"` ("+Ve({start:_.start,end:_.end})+"): it\u2019s not open");H.position.end=Ke(_.end);}function c(){return rt(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=true;}function p(_){if(this.data.expectingFirstListItemValue){let E=this.stack[this.stack.length-2];E.start=Number.parseInt(this.sliceSerialize(_),10),this.data.expectingFirstListItemValue=void 0;}}function m(){let _=this.resume(),E=this.stack[this.stack.length-1];E.lang=_;}function h(){let _=this.resume(),E=this.stack[this.stack.length-1];E.meta=_;}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=true);}function w(){let _=this.resume(),E=this.stack[this.stack.length-1];E.value=_.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0;}function y(){let _=this.resume(),E=this.stack[this.stack.length-1];E.value=_.replace(/(\r?\n|\r)$/g,"");}function z(_){let E=this.resume(),H=this.stack[this.stack.length-1];H.label=E,H.identifier=fe(this.sliceSerialize(_)).toLowerCase();}function S(){let _=this.resume(),E=this.stack[this.stack.length-1];E.title=_;}function M(){let _=this.resume(),E=this.stack[this.stack.length-1];E.url=_;}function D(_){let E=this.stack[this.stack.length-1];if(!E.depth){let H=this.sliceSerialize(_).length;E.depth=H;}}function k(){this.data.setextHeadingSlurpLineEnding=true;}function $(_){let E=this.stack[this.stack.length-1];E.depth=this.sliceSerialize(_).codePointAt(0)===61?1:2;}function Y(){this.data.setextHeadingSlurpLineEnding=void 0;}function W(_){let H=this.stack[this.stack.length-1].children,K=H[H.length-1];(!K||K.type!=="text")&&(K=_u(),K.position={start:Ke(_.start),end:void 0},H.push(K)),this.stack.push(K);}function v(_){let E=this.stack.pop();E.value+=this.sliceSerialize(_),E.position.end=Ke(_.end);}function J(_){let E=this.stack[this.stack.length-1];if(this.data.atHardBreak){let H=E.children[E.children.length-1];H.position.end=Ke(_.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(E.type)&&(W.call(this,_),v.call(this,_));}function V(){this.data.atHardBreak=true;}function T(){let _=this.resume(),E=this.stack[this.stack.length-1];E.value=_;}function B(){let _=this.resume(),E=this.stack[this.stack.length-1];E.value=_;}function U(){let _=this.resume(),E=this.stack[this.stack.length-1];E.value=_;}function Q(){let _=this.stack[this.stack.length-1];if(this.data.inReference){let E=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=E,delete _.url,delete _.title;}else delete _.identifier,delete _.label;this.data.referenceType=void 0;}function P(){let _=this.stack[this.stack.length-1];if(this.data.inReference){let E=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=E,delete _.url,delete _.title;}else delete _.identifier,delete _.label;this.data.referenceType=void 0;}function A(_){let E=this.sliceSerialize(_),H=this.stack[this.stack.length-2];H.label=_l(E),H.identifier=fe(E).toLowerCase();}function j(){let _=this.stack[this.stack.length-1],E=this.resume(),H=this.stack[this.stack.length-1];if(this.data.inReference=true,H.type==="link"){let K=_.children;H.children=K;}else H.alt=E;}function d(){let _=this.resume(),E=this.stack[this.stack.length-1];E.url=_;}function F(){let _=this.resume(),E=this.stack[this.stack.length-1];E.title=_;}function X(){this.data.inReference=void 0;}function g(){this.data.referenceType="collapsed";}function ie(_){let E=this.resume(),H=this.stack[this.stack.length-1];H.label=E,H.identifier=fe(this.sliceSerialize(_)).toLowerCase(),this.data.referenceType="full";}function he(_){this.data.characterReferenceType=_.type;}function It(_){let E=this.sliceSerialize(_),H=this.data.characterReferenceType,K;H?(K=An(E,H==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):K=wt(E);let Z=this.stack[this.stack.length-1];Z.value+=K;}function je(_){let E=this.stack.pop();E.position.end=Ke(_.end);}function oe(_){v.call(this,_);let E=this.stack[this.stack.length-1];E.url=this.sliceSerialize(_);}function _e(_){v.call(this,_);let E=this.stack[this.stack.length-1];E.url="mailto:"+this.sliceSerialize(_);}function de(){return {type:"blockquote",children:[]}}function Re(){return {type:"code",lang:null,meta:null,value:""}}function De(){return {type:"inlineCode",value:""}}function ee(){return {type:"definition",identifier:"",label:null,title:null,url:""}}function xe(){return {type:"emphasis",children:[]}}function ze(){return {type:"heading",depth:0,children:[]}}function Tt(){return {type:"break"}}function Zt(){return {type:"html",value:""}}function en(){return {type:"image",title:null,url:"",alt:null}}function lo(){return {type:"link",title:null,url:"",children:[]}}function so(_){return {type:"list",ordered:_.type==="listOrdered",start:null,spread:_._spread,children:[]}}function bu(_){return {type:"listItem",spread:_._spread,checked:null,children:[]}}function wu(){return {type:"paragraph",children:[]}}function ku(){return {type:"strong",children:[]}}function _u(){return {type:"text",value:""}}function zu(){return {type:"thematicBreak"}}}function Ke(e){return {line:e.line,column:e.column,offset:e.offset}}function Cl(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Cl(e,r):Yf(e,r);}}function Yf(e,t){let n;for(n in t)if(Sl.call(t,n))switch(n){case "canContainEols":{let r=t[n];r&&e[n].push(...r);break}case "transforms":{let r=t[n];r&&e[n].push(...r);break}case "enter":case "exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function zl(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ve({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ve({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ve({start:t.start,end:t.end})+") is still open")}function Un(e){let t=this;t.parser=n;function n(r){return oi(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function El(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),true)};return e.patch(t,n),e.applyData(t,n)}function Al(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Il(e,t){let n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function Tl(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Pl(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ll(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=ke(r.toLowerCase()),o=e.footnoteOrder.indexOf(r),a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);let s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:true,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,s);let u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function Rl(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Dl(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Bn(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return [{type:"text",value:"!["+t.alt+r}];let i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});let a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function Ml(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Bn(e,t);let i={src:ke(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function Nl(e,t){let n={src:ke(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Fl(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Ol(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Bn(e,t);let i={href:ke(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);let o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Ul(e,t){let n={href:ke(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Bl(e,t,n){let r=e.all(t),i=n?Kf(n):Hl(t),o={},a=[];if(typeof t.checked=="boolean"){let c=r[0],f;c&&c.type==="element"&&c.tagName==="p"?f=c:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:true},children:[]}),o.className=["task-list-item"];}let l=-1;for(;++l<r.length;){let c=r[l];(i||l!==0||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!i?a.push(...c.children):a.push(c);}let s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&a.push({type:"text",value:`
`});let u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function Kf(e){let t=false;if(e.type==="list"){t=e.spread||false;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Hl(n[r]);}return t}function Hl(e){let t=e.spread;return t??e.children.length>1}function jl(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){let a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,true)};return e.patch(t,o),e.applyData(t,o)}function Wl(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function $l(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Vl(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ql(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],true)};e.patch(t.children[0],a),i.push(a);}if(n.length>0){let a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,true)},l=bt(t.children[1]),s=Cn(t.children[t.children.length-1]);l&&s&&(a.position={start:l,end:s}),i.push(a);}let o={type:"element",tagName:"table",properties:{},children:e.wrap(i,true)};return e.patch(t,o),e.applyData(t,o)}function Yl(e,t,n){let r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length,s=-1,u=[];for(;++s<l;){let f=t.children[s],p={},m=a?a[s]:void 0;m&&(p.align=m);let h={type:"element",tagName:o,properties:p,children:[]};f&&(h.children=e.all(f),e.patch(f,h),h=e.applyData(f,h)),u.push(h);}let c={type:"element",tagName:"tr",properties:{},children:e.wrap(u,true)};return e.patch(t,c),e.applyData(t,c)}function Kl(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Gl(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,o=[];for(;r;)o.push(Xl(t.slice(i,r.index),i>0,true),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Xl(t.slice(i),i>0,false)),o.join("")}function Xl(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===9||o===32;)r++,o=e.codePointAt(r);}if(n){let o=e.codePointAt(i-1);for(;o===9||o===32;)i--,o=e.codePointAt(i-1);}return i>r?e.slice(r,i):""}function Jl(e,t){let n={type:"text",value:Gl(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Ql(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var Zl={blockquote:El,break:Al,code:Il,delete:Tl,emphasis:Pl,footnoteReference:Ll,heading:Rl,html:Dl,imageReference:Ml,image:Nl,inlineCode:Fl,linkReference:Ol,link:Ul,listItem:Bl,list:jl,paragraph:Wl,root:$l,strong:Vl,table:ql,tableCell:Kl,tableRow:Yl,text:Jl,thematicBreak:Ql,toml:Hn,yaml:Hn,definition:Hn,footnoteDefinition:Hn};function Hn(){}var{defineProperty:Qf}=Object,os=typeof self=="object"?self:globalThis,es=(e,t)=>{switch(e){case "Function":case "SharedWorker":case "Worker":case "eval":case "setInterval":case "setTimeout":throw new TypeError("unable to deserialize "+e)}return new os[e](t)},Zf=(e,t)=>{let n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);let[o,a]=t[i];switch(o){case 0:case  -1:return n(a,i);case 1:{let l=n([],i);for(let s of a)l.push(r(s));return l}case 2:{let l=n({},i);for(let[s,u]of a){let c=r(s),f=r(u);c==="__proto__"?Qf(l,c,{value:f,configurable:true,enumerable:true,writable:true}):l[c]=f;}return l}case 3:return n(new Date(a),i);case 4:{let{source:l,flags:s}=a;return n(new RegExp(l,s),i)}case 5:{let l=n(new Map,i);for(let[s,u]of a)l.set(r(s),r(u));return l}case 6:{let l=n(new Set,i);for(let s of a)l.add(r(s));return l}case 7:{let{name:l,message:s}=a;return n(typeof os[l]=="function"?es(l,s):new Error(s),i)}case 8:return n(BigInt(a),i);case "BigInt":return n(Object(BigInt(a)),i);case "ArrayBuffer":return n(new Uint8Array(a).buffer,a);case "DataView":{let{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}case "-0":return  -0}return n(es(o,a),i)};return r},si=e=>Zf(new Map,e)(0);var ut="",{toString:em}={},{keys:tm,is:nm}=Object,Kt=e=>{let t=typeof e;if(t!=="object"||!e)return [0,t];let n=em.call(e).slice(8,-1);switch(n){case "Array":return [1,ut];case "Object":return [2,ut];case "Date":return [3,ut];case "RegExp":return [4,ut];case "Map":return [5,ut];case "Set":return [6,ut];case "DataView":return [1,n]}return n.includes("Array")?[1,n]:e instanceof Error?[7,e.name||"Error"]:[2,n]},Wn=([e,t])=>e===0&&(t==="function"||t==="symbol"),rm=(e,t,n,r)=>{let i=(a,l)=>{let s=r.push(a)-1;return n.set(l,s),s},o=a=>{if(n.has(a))return n.get(a);let[l,s]=Kt(a);switch(l){case 0:{let c=a;switch(s){case "bigint":l=8,c=a.toString();break;case "number":if(!a&&nm(a,-0))return r.push(["-0"])-1;break;case "function":case "symbol":if(e)throw new TypeError("unable to serialize "+s);c=null;break;case "undefined":return i([-1],a)}return i([l,c],a)}case 1:{if(s){let p=a;return s==="DataView"?p=new Uint8Array(a.buffer):s==="ArrayBuffer"&&(p=new Uint8Array(a)),i([s,[...p]],a)}let c=[],f=i([l,c],a);for(let p of a)c.push(o(p));return f}case 2:{if(s)switch(s){case "BigInt":return i([s,a.toString()],a);case "Boolean":case "Number":case "String":return i([s,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());let c=[],f=i([l,c],a);for(let p of tm(a))(e||!Wn(Kt(a[p])))&&c.push([o(p),o(a[p])]);return f}case 3:return i([l,isNaN(a.getTime())?ut:a.toISOString()],a);case 4:{let{source:c,flags:f}=a;return i([l,{source:c,flags:f}],a)}case 5:{let c=[],f=i([l,c],a);for(let[p,m]of a)(e||!(Wn(Kt(p))||Wn(Kt(m))))&&c.push([o(p),o(m)]);return f}case 6:{let c=[],f=i([l,c],a);for(let p of a)(e||!Wn(Kt(p)))&&c.push(o(p));return f}}let{message:u}=a;return i([l,{name:s,message:u}],a)};return o},ui=(e,{json:t,lossy:n}={})=>{let r=[];return rm(!(t||n),!!t,new Map,r)(e),r};var kt=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?si(ui(e,t)):structuredClone(e):(e,t)=>si(ui(e,t));function im(e,t){let n=[{type:"text",value:"\u21A9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function om(e,t){return "Back to reference "+(e+1)+(t>1?"-"+t:"")}function as(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||im,r=e.options.footnoteBackLabel||om,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[],s=-1;for(;++s<e.footnoteOrder.length;){let u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;let c=e.all(u),f=String(u.identifier).toUpperCase(),p=ke(f.toLowerCase()),m=0,h=[],x=e.footnoteCounts.get(f);for(;x!==void 0&&++m<=x;){h.length>0&&h.push({type:"text",value:" "});let z=typeof n=="string"?n:n(s,m);typeof z=="string"&&(z={type:"text",value:z}),h.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,m),className:["data-footnote-backref"]},children:Array.isArray(z)?z:[z]});}let w=c[c.length-1];if(w&&w.type==="element"&&w.tagName==="p"){let z=w.children[w.children.length-1];z&&z.type==="text"?z.value+=" ":w.children.push({type:"text",value:" "}),w.children.push(...h);}else c.push(...h);let y={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(c,true)};e.patch(u,y),l.push(y);}if(l.length!==0)return {type:"element",tagName:"section",properties:{dataFootnotes:true,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...kt(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,true)},{type:"text",value:`
`}]}}var Xe=(function(e){if(e==null)return um;if(typeof e=="function")return $n(e);if(typeof e=="object")return Array.isArray(e)?am(e):lm(e);if(typeof e=="string")return sm(e);throw new Error("Expected function, string, or object as test")});function am(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Xe(e[n]);return $n(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return  true;return  false}}function lm(e){let t=e;return $n(n);function n(r){let i=r,o;for(o in e)if(i[o]!==t[o])return  false;return  true}}function sm(e){return $n(t);function t(n){return n&&n.type===e}}function $n(e){return t;function t(n,r,i){return !!(cm(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function um(){return  true}function cm(e){return e!==null&&typeof e=="object"&&"type"in e}var ls=[],Vn=true,ct=false,qn="skip";function Xt(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;let o=Xe(i),a=r?-1:1;l(e,void 0,[])();function l(s,u,c){let f=s&&typeof s=="object"?s:{};if(typeof f.type=="string"){let m=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(s.type+(m?"<"+m+">":""))+")"});}return p;function p(){let m=ls,h,x,w;if((!t||o(s,u,c[c.length-1]||void 0))&&(m=pm(n(s,c)),m[0]===ct))return m;if("children"in s&&s.children){let y=s;if(y.children&&m[0]!==qn)for(x=(r?y.children.length:-1)+a,w=c.concat(y);x>-1&&x<y.children.length;){let z=y.children[x];if(h=l(z,x,w)(),h[0]===ct)return h;x=typeof h[1]=="number"?h[1]:x+a;}}return m}}}function pm(e){return Array.isArray(e)?e:typeof e=="number"?[Vn,e]:e==null?ls:[e]}function pt(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),Xt(e,o,l,i);function l(s,u){let c=u[u.length-1],f=c?c.children.indexOf(s):void 0;return a(s,f,c)}}var ci={}.hasOwnProperty,fm={};function us(e,t){let n=t||fm,r=new Map,i=new Map,o=new Map,a={...Zl,...n.handlers},l={all:u,applyData:hm,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:s,options:n,patch:mm,wrap:gm};return pt(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){let f=c.type==="definition"?r:i,p=String(c.identifier).toUpperCase();f.has(p)||f.set(p,c);}}),l;function s(c,f){let p=c.type,m=l.handlers[p];if(ci.call(l.handlers,p)&&m)return m(l,c,f);if(l.options.passThrough&&l.options.passThrough.includes(p)){if("children"in c){let{children:x,...w}=c,y=kt(w);return y.children=l.all(c),y}return kt(c)}return (l.options.unknownHandler||dm)(l,c,f)}function u(c){let f=[];if("children"in c){let p=c.children,m=-1;for(;++m<p.length;){let h=l.one(p[m],c);if(h){if(m&&p[m-1].type==="break"&&(!Array.isArray(h)&&h.type==="text"&&(h.value=ss(h.value)),!Array.isArray(h)&&h.type==="element")){let x=h.children[0];x&&x.type==="text"&&(x.value=ss(x.value));}Array.isArray(h)?f.push(...h):f.push(h);}}}return f}}function mm(e,t){e.position&&(t.position=Or(e));}function hm(e,t){let n=t;if(e&&e.data){let r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else {let a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a};}n.type==="element"&&o&&Object.assign(n.properties,kt(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i);}return n}function dm(e,t){let n=t.data||{},r="value"in t&&!(ci.call(n,"hProperties")||ci.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function gm(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function ss(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Yn(e,t){let n=us(e,t),r=n.one(e,void 0),i=as(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&(o.children.push({type:"text",value:`
`},i)),o}function Kn(e,t){return e&&"run"in e?async function(n,r){let i=Yn(n,{file:r,...t});await e.run(i,r);}:function(n,r){return Yn(n,{file:r,...e||t})}}function pi(e){if(e)throw e}var Jn=co(xs());function Gt(e){if(typeof e!="object"||e===null)return  false;let t=Object.getPrototypeOf(e);return (t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function fi(){let e=[],t={run:n,use:r};return t;function n(...i){let o=-1,a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(s,...u){let c=e[++o],f=-1;if(s){a(s);return}for(;++f<i.length;)(u[f]===null||u[f]===void 0)&&(u[f]=i[f]);i=u,c?vs(c,l)(...u):a(null,...u);}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function vs(e,t){let n;return r;function r(...a){let l=e.length>a.length,s;l&&a.push(i);try{s=e.apply(this,a);}catch(u){let c=u;if(l&&n)throw c;return i(c)}l||(s&&s.then&&typeof s.then=="function"?s.then(o,i):s instanceof Error?i(s):o(s));}function i(a,...l){n||(n=true,t(a,...l));}function o(a){i(null,a);}}var Ae={basename:ym,dirname:xm,extname:vm,join:bm,sep:"/"};function ym(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Jt(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=true,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return "";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=true,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function xm(e){if(Jt(e),e.length===0)return ".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=true);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function vm(e){Jt(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){let l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=true,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1);}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function bm(...e){let t=-1,n;for(;++t<e.length;)Jt(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":wm(n)}function wm(e){Jt(e);let t=e.codePointAt(0)===47,n=km(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function km(e,t){let n="",r=0,i=-1,o=0,a=-1,l,s;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else {if(l===47)break;l=47;}if(l===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2);}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0;}else l===46&&o>-1?o++:o=-1;}return n}function Jt(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}var bs={cwd:_m};function _m(){return "/"}function _t(e){return !!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function ws(e){if(typeof e=="string")e=new URL(e);else if(!_t(e)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return zm(e)}function zm(e){if(e.hostname!==""){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}var mi=["history","path","basename","stem","extname","dirname"],ft=class{constructor(t){let n;t?_t(t)?n={path:t}:typeof t=="string"||Sm(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":bs.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<mi.length;){let o=mi[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o]);}let i;for(i in n)mi.includes(i)||(this[i]=n[i]);}get basename(){return typeof this.path=="string"?Ae.basename(this.path):void 0}set basename(t){di(t,"basename"),hi(t,"basename"),this.path=Ae.join(this.dirname||"",t);}get dirname(){return typeof this.path=="string"?Ae.dirname(this.path):void 0}set dirname(t){ks(this.basename,"dirname"),this.path=Ae.join(t||"",this.basename);}get extname(){return typeof this.path=="string"?Ae.extname(this.path):void 0}set extname(t){if(hi(t,"extname"),ks(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ae.join(this.dirname,this.stem+(t||""));}get path(){return this.history[this.history.length-1]}set path(t){_t(t)&&(t=ws(t)),di(t,"path"),this.path!==t&&this.history.push(t);}get stem(){return typeof this.path=="string"?Ae.basename(this.path,this.extname):void 0}set stem(t){di(t,"stem"),hi(t,"stem"),this.path=Ae.join(this.dirname||"",t+(this.extname||""));}fail(t,n,r){let i=this.message(t,n,r);throw i.fatal=true,i}info(t,n,r){let i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){let i=new le(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=false,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function hi(e,t){if(e&&e.includes(Ae.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ae.sep+"`")}function di(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function ks(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Sm(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var _s=(function(e){let r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o});var Cm={}.hasOwnProperty,vi=class e extends _s{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=fi();}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r);}return t.data((0, Jn.default)(true,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(xi("data",this.frozen),this.namespace[t]=n,this):Cm.call(this.namespace,t)&&this.namespace[t]||void 0:t?(xi("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===false)continue;r[0]===true&&(r[0]=void 0);let i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i);}return this.frozen=true,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();let n=Gn(t),r=this.parser||this.Parser;return gi("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),gi("process",this.parser||this.Parser),yi("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){let l=Gn(t),s=r.parse(l);r.run(s,l,function(c,f,p){if(c||!f||!p)return u(c);let m=f,h=r.stringify(m,p);Am(h)?p.value=h:p.result=h,u(c,p);});function u(c,f){c||!f?a(c):o?o(f):n(void 0,f);}}}processSync(t){let n=false,r;return this.freeze(),gi("processSync",this.parser||this.Parser),yi("processSync",this.compiler||this.Compiler),this.process(t,i),Ss("processSync","process",n),r;function i(o,a){n=true,pi(o),r=a;}}run(t,n,r){zs(t),this.freeze();let i=this.transformers;return !r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){let s=Gn(n);i.run(t,s,u);function u(c,f,p){let m=f||t;c?l(c):a?a(m):r(void 0,m,p);}}}runSync(t,n){let r=false,i;return this.run(t,n,o),Ss("runSync","run",r),i;function o(a,l){pi(a),i=l,r=true;}}stringify(t,n){this.freeze();let r=Gn(n),i=this.compiler||this.Compiler;return yi("stringify",i),zs(t),i(t,r)}use(t,...n){let r=this.attachers,i=this.namespace;if(xi("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){let[c,...f]=u;s(c,f);}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=(0, Jn.default)(true,i.settings,u.settings));}function l(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){let f=u[c];o(f);}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,c){let f=-1,p=-1;for(;++f<r.length;)if(r[f][0]===u){p=f;break}if(p===-1)r.push([u,...c]);else if(c.length>0){let[m,...h]=c,x=r[p][1];Gt(x)&&Gt(m)&&(m=(0, Jn.default)(true,x,m)),r[p]=[u,m,...h];}}}},bi=new vi().freeze();function gi(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function yi(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function xi(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function zs(e){if(!Gt(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Ss(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Gn(e){return Em(e)?e:new ft(e)}function Em(e){return !!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Am(e){return typeof e=="string"||Im(e)}function Im(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var Tm="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Cs=[],Es={allowDangerousHtml:true},Pm=/^(https?|ircs?|mailto|xmpp)$/i,Lm=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function wi(e){let t=Rm(e),n=Dm(e);return Mm(t.runSync(t.parse(n),n),e)}function Rm(e){let t=e.rehypePlugins||Cs,n=e.remarkPlugins||Cs,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Es}:Es;return bi().use(Un).use(n).use(Kn,r).use(t)}function Dm(e){let t=e.children||"",n=new ft;return typeof t=="string"?n.value=t:(void 0),n}function Mm(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,s=t.urlTransform||As;for(let c of Lm)Object.hasOwn(t,c.from)&&(""+c.from+(c.to?"use `"+c.to+"` instead":"remove it")+Tm+c.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),pt(e,u),Hr(e,{Fragment:be,components:i,ignoreInvalidStyle:true,jsx:b,jsxs:b,passKeys:true,passNode:true});function u(c,f,p){if(c.type==="raw"&&p&&typeof f=="number")return a?p.children.splice(f,1):p.children[f]={type:"text",value:c.value},f;if(c.type==="element"){let m;for(m in jt)if(Object.hasOwn(jt,m)&&Object.hasOwn(c.properties,m)){let h=c.properties[m],x=jt[m];(x===null||x.includes(c.tagName))&&(c.properties[m]=s(String(h||""),m,c));}}if(c.type==="element"){let m=n?!n.includes(c.tagName):o?o.includes(c.tagName):false;if(!m&&r&&typeof f=="number"&&(m=!r(c,f,p)),m&&p&&typeof f=="number")return l&&c.children?p.children.splice(f,1,...c.children):p.children.splice(f,1),f}}}function As(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Pm.test(e.slice(0,t))?e:""}function ki(e,t){let n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function _i(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function zi(e,t,n){let i=Xe((n||{}).ignore||[]),o=Nm(t),a=-1;for(;++a<o.length;)Xt(e,"text",l);function l(u,c){let f=-1,p;for(;++f<c.length;){let m=c[f],h=p?p.children:void 0;if(i(m,h?h.indexOf(m):void 0,p))return;p=m;}if(p)return s(u,c)}function s(u,c){let f=c[c.length-1],p=o[a][0],m=o[a][1],h=0,w=f.children.indexOf(u),y=false,z=[];p.lastIndex=0;let S=p.exec(u.value);for(;S;){let M=S.index,D={index:S.index,input:S.input,stack:[...c,u]},k=m(...S,D);if(typeof k=="string"&&(k=k.length>0?{type:"text",value:k}:void 0),k===false?p.lastIndex=M+1:(h!==M&&z.push({type:"text",value:u.value.slice(h,M)}),Array.isArray(k)?z.push(...k):k&&z.push(k),h=M+S[0].length,y=true),!p.global)break;S=p.exec(u.value);}return y?(h<u.value.length&&z.push({type:"text",value:u.value.slice(h)}),f.children.splice(w,1,...z)):z=[u],w+z.length}}function Nm(e){let t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let i=n[r];t.push([Fm(i[0]),Om(i[1])]);}return t}function Fm(e){return typeof e=="string"?new RegExp(_i(e),"g"):e}function Om(e){return typeof e=="function"?e:function(){return e}}var Si="phrasing",Ci=["autolink","link","image","label"];function Ai(){return {transforms:[$m],enter:{literalAutolink:Um,literalAutolinkEmail:Ei,literalAutolinkHttp:Ei,literalAutolinkWww:Ei},exit:{literalAutolink:Wm,literalAutolinkEmail:jm,literalAutolinkHttp:Bm,literalAutolinkWww:Hm}}}function Ii(){return {unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Si,notInConstruct:Ci},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Si,notInConstruct:Ci},{character:":",before:"[ps]",after:"\\/",inConstruct:Si,notInConstruct:Ci}]}}function Um(e){this.enter({type:"link",title:null,url:"",children:[]},e);}function Ei(e){this.config.enter.autolinkProtocol.call(this,e);}function Bm(e){this.config.exit.autolinkProtocol.call(this,e);}function Hm(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e);}function jm(e){this.config.exit.autolinkEmail.call(this,e);}function Wm(e){this.exit(e);}function $m(e){zi(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Vm],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,qm]],{ignore:["link","linkReference"]});}function Vm(e,t,n,r,i){let o="";if(!Is(i)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!Ym(n)))return  false;let a=Km(n+r);if(!a[0])return  false;let l={type:"link",title:null,url:o+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[l,{type:"text",value:a[1]}]:l}function qm(e,t,n,r){return !Is(r,true)||/[-\d_]$/.test(n)?false:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Ym(e){let t=e.split(".");return !(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Km(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return [e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),i=ki(e,"("),o=ki(e,")");for(;r!==-1&&i>o;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),o++;return [e,n]}function Is(e,t){let n=e.input.charCodeAt(e.index-1);return (e.index===0||Te(n)||ot(n))&&(!t||n!==47)}Ts.peek=rh;function Xm(){this.buffer();}function Gm(e){this.enter({type:"footnoteReference",identifier:"",label:""},e);}function Jm(){this.buffer();}function Qm(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e);}function Zm(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=fe(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function eh(e){this.exit(e);}function th(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=fe(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function nh(e){this.exit(e);}function rh(){return "["}function Ts(e,t,n,r){let i=n.createTracker(r),o=i.move("[^"),a=n.enter("footnoteReference"),l=n.enter("reference");return o+=i.move(n.safe(n.associationId(e),{after:"]",before:o})),l(),a(),o+=i.move("]"),o}function Ti(){return {enter:{gfmFootnoteCallString:Xm,gfmFootnoteCall:Gm,gfmFootnoteDefinitionLabelString:Jm,gfmFootnoteDefinition:Qm},exit:{gfmFootnoteCallString:Zm,gfmFootnoteCall:eh,gfmFootnoteDefinitionLabelString:th,gfmFootnoteDefinition:nh}}}function Pi(e){let t=false;return e&&e.firstLineBlank&&(t=true),{handlers:{footnoteDefinition:n,footnoteReference:Ts},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,o,a){let l=o.createTracker(a),s=l.move("[^"),u=o.enter("footnoteDefinition"),c=o.enter("label");return s+=l.move(o.safe(o.associationId(r),{before:s,after:"]"})),c(),s+=l.move("]:"),r.children&&r.children.length>0&&(l.shift(4),s+=l.move((t?`
`:" ")+o.indentLines(o.containerFlow(r,l.current()),t?Ps:ih))),u(),s}}function ih(e,t,n){return t===0?e:Ps(e,t,n)}function Ps(e,t,n){return (n?"":"    ")+e}var oh=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Ls.peek=sh;function Li(){return {canContainEols:["delete"],enter:{strikethrough:ah},exit:{strikethrough:lh}}}function Ri(){return {unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:oh}],handlers:{delete:Ls}}}function ah(e){this.enter({type:"delete",children:[]},e);}function lh(e){this.exit(e);}function Ls(e,t,n,r){let i=n.createTracker(r),o=n.enter("strikethrough"),a=i.move("~~");return a+=n.containerPhrasing(e,{...i.current(),before:a,after:"~"}),a+=i.move("~~"),o(),a}function sh(){return "~"}function uh(e){return e.length}function Ds(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||uh,o=[],a=[],l=[],s=[],u=0,c=-1;for(;++c<e.length;){let x=[],w=[],y=-1;for(e[c].length>u&&(u=e[c].length);++y<e[c].length;){let z=ch(e[c][y]);if(n.alignDelimiters!==false){let S=i(z);w[y]=S,(s[y]===void 0||S>s[y])&&(s[y]=S);}x.push(z);}a[c]=x,l[c]=w;}let f=-1;if(typeof r=="object"&&"length"in r)for(;++f<u;)o[f]=Rs(r[f]);else {let x=Rs(r);for(;++f<u;)o[f]=x;}f=-1;let p=[],m=[];for(;++f<u;){let x=o[f],w="",y="";x===99?(w=":",y=":"):x===108?w=":":x===114&&(y=":");let z=n.alignDelimiters===false?1:Math.max(1,s[f]-w.length-y.length),S=w+"-".repeat(z)+y;n.alignDelimiters!==false&&(z=w.length+z+y.length,z>s[f]&&(s[f]=z),m[f]=z),p[f]=S;}a.splice(1,0,p),l.splice(1,0,m),c=-1;let h=[];for(;++c<a.length;){let x=a[c],w=l[c];f=-1;let y=[];for(;++f<u;){let z=x[f]||"",S="",M="";if(n.alignDelimiters!==false){let D=s[f]-(w[f]||0),k=o[f];k===114?S=" ".repeat(D):k===99?D%2?(S=" ".repeat(D/2+.5),M=" ".repeat(D/2-.5)):(S=" ".repeat(D/2),M=S):M=" ".repeat(D);}n.delimiterStart!==false&&!f&&y.push("|"),n.padding!==false&&!(n.alignDelimiters===false&&z==="")&&(n.delimiterStart!==false||f)&&y.push(" "),n.alignDelimiters!==false&&y.push(S),y.push(z),n.alignDelimiters!==false&&y.push(M),n.padding!==false&&y.push(" "),(n.delimiterEnd!==false||f!==u-1)&&y.push("|");}h.push(n.delimiterEnd===false?y.join("").replace(/ +$/,""):y.join(""));}return h.join(`
`)}function ch(e){return e==null?"":String(e)}function Rs(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Ms(e,t,n,r){let i=n.enter("blockquote"),o=n.createTracker(r);o.move("> "),o.shift(2);let a=n.indentLines(n.containerFlow(e,o.current()),ph);return i(),a}function ph(e,t,n){return ">"+(n?"":" ")+e}function Fs(e,t){return Ns(e,t.inConstruct,true)&&!Ns(e,t.notInConstruct,false)}function Ns(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return  true;return  false}function Di(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Fs(n.stack,n.unsafe[i]))return /[ \t]/.test(r.before)?"":" ";return `\\
`}function Os(e,t){let n=String(e),r=n.indexOf(t),i=r,o=0,a=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>a&&(a=o):o=1,i=r+t.length,r=n.indexOf(t,i);return a}function Us(e,t){return !!(t.options.fences===false&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Bs(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Hs(e,t,n,r){let i=Bs(n),o=e.value||"",a=i==="`"?"GraveAccent":"Tilde";if(Us(e,n)){let f=n.enter("codeIndented"),p=n.indentLines(o,fh);return f(),p}let l=n.createTracker(r),s=i.repeat(Math.max(Os(o,i)+1,3)),u=n.enter("codeFenced"),c=l.move(s);if(e.lang){let f=n.enter(`codeFencedLang${a}`);c+=l.move(n.safe(e.lang,{before:c,after:" ",encode:["`"],...l.current()})),f();}if(e.lang&&e.meta){let f=n.enter(`codeFencedMeta${a}`);c+=l.move(" "),c+=l.move(n.safe(e.meta,{before:c,after:`
`,encode:["`"],...l.current()})),f();}return c+=l.move(`
`),o&&(c+=l.move(o+`
`)),c+=l.move(s),u(),c}function fh(e,t,n){return (n?"":"    ")+e}function zt(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function js(e,t,n,r){let i=zt(n),o=i==='"'?"Quote":"Apostrophe",a=n.enter("definition"),l=n.enter("label"),s=n.createTracker(r),u=s.move("[");return u+=s.move(n.safe(n.associationId(e),{before:u,after:"]",...s.current()})),u+=s.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...s.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),a(),u}function Ws(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Ge(e){return "&#x"+e.toString(16).toUpperCase()+";"}function St(e,t,n){let r=Be(e),i=Be(t);return r===void 0?i===void 0?n==="_"?{inside:true,outside:true}:{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:true}:r===1?i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:false}:i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:false}:{inside:false,outside:false}}Mi.peek=mh;function Mi(e,t,n,r){let i=Ws(n),o=n.enter("emphasis"),a=n.createTracker(r),l=a.move(i),s=a.move(n.containerPhrasing(e,{after:i,before:l,...a.current()})),u=s.charCodeAt(0),c=St(r.before.charCodeAt(r.before.length-1),u,i);c.inside&&(s=Ge(u)+s.slice(1));let f=s.charCodeAt(s.length-1),p=St(r.after.charCodeAt(0),f,i);p.inside&&(s=s.slice(0,-1)+Ge(f));let m=a.move(i);return o(),n.attentionEncodeSurroundingInfo={after:p.outside,before:c.outside},l+s+m}function mh(e,t,n){return n.options.emphasis||"*"}function $s(e,t){let n=false;return pt(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=true,ct}),!!((!e.depth||e.depth<3)&&rt(e)&&(t.options.setext||n))}function Vs(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(r);if($s(e,n)){let c=n.enter("headingSetext"),f=n.enter("phrasing"),p=n.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return f(),c(),p+`
`+(i===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}let a="#".repeat(i),l=n.enter("headingAtx"),s=n.enter("phrasing");o.move(a+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return /^[\t ]/.test(u)&&(u=Ge(u.charCodeAt(0))+u.slice(1)),u=u?a+" "+u:a,n.options.closeAtx&&(u+=" "+a),s(),l(),u}Ni.peek=hh;function Ni(e){return e.value||""}function hh(){return "<"}Fi.peek=dh;function Fi(e,t,n,r){let i=zt(n),o=i==='"'?"Quote":"Apostrophe",a=n.enter("image"),l=n.enter("label"),s=n.createTracker(r),u=s.move("![");return u+=s.move(n.safe(e.alt,{before:u,after:"]",...s.current()})),u+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),u+=s.move(")"),a(),u}function dh(){return "!"}Oi.peek=gh;function Oi(e,t,n,r){let i=e.referenceType,o=n.enter("imageReference"),a=n.enter("label"),l=n.createTracker(r),s=l.move("!["),u=n.safe(e.alt,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),a();let c=n.stack;n.stack=[],a=n.enter("reference");let f=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return a(),n.stack=c,o(),i==="full"||!u||u!==f?s+=l.move(f+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function gh(){return "!"}Ui.peek=yh;function Ui(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){let a=n.unsafe[o],l=n.compilePattern(a),s;if(a.atBreak)for(;s=l.exec(r);){let u=s.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(s.index+1);}}return i+r+i}function yh(){return "`"}function Bi(e,t){let n=rt(e);return !!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Hi.peek=xh;function Hi(e,t,n,r){let i=zt(n),o=i==='"'?"Quote":"Apostrophe",a=n.createTracker(r),l,s;if(Bi(e,n)){let c=n.stack;n.stack=[],l=n.enter("autolink");let f=a.move("<");return f+=a.move(n.containerPhrasing(e,{before:f,after:">",...a.current()})),f+=a.move(">"),l(),n.stack=c,f}l=n.enter("link"),s=n.enter("label");let u=a.move("[");return u+=a.move(n.containerPhrasing(e,{before:u,after:"](",...a.current()})),u+=a.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(s=n.enter("destinationRaw"),u+=a.move(n.safe(e.url,{before:u,after:e.title?" ":")",...a.current()}))),s(),e.title&&(s=n.enter(`title${o}`),u+=a.move(" "+i),u+=a.move(n.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),s()),u+=a.move(")"),l(),u}function xh(e,t,n){return Bi(e,n)?"<":"["}ji.peek=vh;function ji(e,t,n,r){let i=e.referenceType,o=n.enter("linkReference"),a=n.enter("label"),l=n.createTracker(r),s=l.move("["),u=n.containerPhrasing(e,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),a();let c=n.stack;n.stack=[],a=n.enter("reference");let f=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return a(),n.stack=c,o(),i==="full"||!u||u!==f?s+=l.move(f+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function vh(){return "["}function Ct(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function qs(e){let t=Ct(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Ys(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Qn(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Ks(e,t,n,r){let i=n.enter("list"),o=n.bulletCurrent,a=e.ordered?Ys(n):Ct(n),l=e.ordered?a==="."?")":".":qs(n),s=t&&n.bulletLastUsed?a===n.bulletLastUsed:false;if(!e.ordered){let c=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&c&&(!c.children||!c.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=true),Qn(n)===a&&c){let f=-1;for(;++f<e.children.length;){let p=e.children[f];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){s=true;break}}}}s&&(a=l),n.bulletCurrent=a;let u=n.containerFlow(e,r);return n.bulletLastUsed=a,n.bulletCurrent=o,i(),u}function Xs(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Gs(e,t,n,r){let i=Xs(n),o=n.bulletCurrent||Ct(n);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===false?0:t.children.indexOf(e))+o);let a=o.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(a=Math.ceil(a/4)*4);let l=n.createTracker(r);l.move(o+" ".repeat(a-o.length)),l.shift(a);let s=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,l.current()),c);return s(),u;function c(f,p,m){return p?(m?"":" ".repeat(a))+f:(m?o:o+" ".repeat(a-o.length))+f}}function Js(e,t,n,r){let i=n.enter("paragraph"),o=n.enter("phrasing"),a=n.containerPhrasing(e,r);return o(),i(),a}var Wi=Xe(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Qs(e,t,n,r){return (e.children.some(function(a){return Wi(a)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function Zs(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}$i.peek=bh;function $i(e,t,n,r){let i=Zs(n),o=n.enter("strong"),a=n.createTracker(r),l=a.move(i+i),s=a.move(n.containerPhrasing(e,{after:i,before:l,...a.current()})),u=s.charCodeAt(0),c=St(r.before.charCodeAt(r.before.length-1),u,i);c.inside&&(s=Ge(u)+s.slice(1));let f=s.charCodeAt(s.length-1),p=St(r.after.charCodeAt(0),f,i);p.inside&&(s=s.slice(0,-1)+Ge(f));let m=a.move(i+i);return o(),n.attentionEncodeSurroundingInfo={after:p.outside,before:c.outside},l+s+m}function bh(e,t,n){return n.options.strong||"*"}function eu(e,t,n,r){return n.safe(e.value,r)}function tu(e){let t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function nu(e,t,n){let r=(Qn(n)+(n.options.ruleSpaces?" ":"")).repeat(tu(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Qt={blockquote:Ms,break:Di,code:Hs,definition:js,emphasis:Mi,hardBreak:Di,heading:Vs,html:Ni,image:Fi,imageReference:Oi,inlineCode:Ui,link:Hi,linkReference:ji,list:Ks,listItem:Gs,paragraph:Js,root:Qs,strong:$i,text:eu,thematicBreak:nu};function qi(){return {enter:{table:wh,tableData:ru,tableHeader:ru,tableRow:_h},exit:{codeText:zh,table:kh,tableData:Vi,tableHeader:Vi,tableRow:Vi}}}function wh(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=true;}function kh(e){this.exit(e),this.data.inTable=void 0;}function _h(e){this.enter({type:"tableRow",children:[]},e);}function Vi(e){this.exit(e);}function ru(e){this.enter({type:"tableCell",children:[]},e);}function zh(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Sh));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e);}function Sh(e,t){return t==="|"?t:e}function Yi(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return {unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:true,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:true,character:":",after:"-"},{atBreak:true,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:a,tableCell:s,tableRow:l}};function a(m,h,x,w){return u(c(m,x,w),m.align)}function l(m,h,x,w){let y=f(m,x,w),z=u([y]);return z.slice(0,z.indexOf(`
`))}function s(m,h,x,w){let y=x.enter("tableCell"),z=x.enter("phrasing"),S=x.containerPhrasing(m,{...w,before:o,after:o});return z(),y(),S}function u(m,h){return Ds(m,{align:h,alignDelimiters:r,padding:n,stringLength:i})}function c(m,h,x){let w=m.children,y=-1,z=[],S=h.enter("table");for(;++y<w.length;)z[y]=f(w[y],h,x);return S(),z}function f(m,h,x){let w=m.children,y=-1,z=[],S=h.enter("tableRow");for(;++y<w.length;)z[y]=s(w[y],m,h,x);return S(),z}function p(m,h,x){let w=Qt.inlineCode(m,h,x);return x.stack.includes("tableCell")&&(w=w.replace(/\|/g,"\\$&")),w}}function Ki(){return {exit:{taskListCheckValueChecked:iu,taskListCheckValueUnchecked:iu,paragraph:Ch}}}function Xi(){return {unsafe:[{atBreak:true,character:"-",after:"[:|-]"}],handlers:{listItem:Eh}}}function iu(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked";}function Ch(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let i=t.children,o=-1,a;for(;++o<i.length;){let l=i[o];if(l.type==="paragraph"){a=l;break}}a===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)));}}this.exit(e);}function Eh(e,t,n,r){let i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",l=n.createTracker(r);o&&l.move(a);let s=Qt.listItem(e,t,n,{...r,...l.current()});return o&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),s;function u(c){return c+a}}function Gi(){return [Ai(),Ti(),Li(),qi(),Ki()]}function Ji(e){return {extensions:[Ii(),Pi(e),Ri(),Yi(e),Xi()]}}var Ah={tokenize:Rh,partial:true},ou={tokenize:Dh,partial:true},au={tokenize:Mh,partial:true},lu={tokenize:Nh,partial:true},Ih={tokenize:Fh,partial:true},su={name:"wwwAutolink",tokenize:Ph,previous:cu},uu={name:"protocolAutolink",tokenize:Lh,previous:pu},He={name:"emailAutolink",tokenize:Th,previous:fu},Le={};function Zi(){return {text:Le}}var mt=48;for(;mt<123;)Le[mt]=He,mt++,mt===58?mt=65:mt===91&&(mt=97);Le[43]=He;Le[45]=He;Le[46]=He;Le[95]=He;Le[72]=[He,uu];Le[104]=[He,uu];Le[87]=[He,su];Le[119]=[He,su];function Th(e,t,n){let r=this,i,o;return a;function a(f){return !Qi(f)||!fu.call(r,r.previous)||eo(r.events)?n(f):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(f))}function l(f){return Qi(f)?(e.consume(f),l):f===64?(e.consume(f),s):n(f)}function s(f){return f===46?e.check(Ih,c,u)(f):f===45||f===95||re(f)?(o=true,e.consume(f),s):c(f)}function u(f){return e.consume(f),i=true,s}function c(f){return o&&i&&ue(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(f)):n(f)}}function Ph(e,t,n){let r=this;return i;function i(a){return a!==87&&a!==119||!cu.call(r,r.previous)||eo(r.events)?n(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Ah,e.attempt(ou,e.attempt(au,o),n),n)(a))}function o(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(a)}}function Lh(e,t,n){let r=this,i="",o=false;return a;function a(f){return (f===72||f===104)&&pu.call(r,r.previous)&&!eo(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(f),e.consume(f),l):n(f)}function l(f){if(ue(f)&&i.length<5)return i+=String.fromCodePoint(f),e.consume(f),l;if(f===58){let p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(f),s}return n(f)}function s(f){return f===47?(e.consume(f),o?u:(o=true,s)):n(f)}function u(f){return f===null||it(f)||q(f)||Te(f)||ot(f)?n(f):e.attempt(ou,e.attempt(au,c),n)(f)}function c(f){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(f)}}function Rh(e,t,n){let r=0;return i;function i(a){return (a===87||a===119)&&r<3?(r++,e.consume(a),i):a===46&&r===3?(e.consume(a),o):n(a)}function o(a){return a===null?n(a):t(a)}}function Dh(e,t,n){let r,i,o;return a;function a(u){return u===46||u===95?e.check(lu,s,l)(u):u===null||q(u)||Te(u)||u!==45&&ot(u)?s(u):(o=true,e.consume(u),a)}function l(u){return u===95?r=true:(i=r,r=void 0),e.consume(u),a}function s(u){return i||r||!o?n(u):t(u)}}function Mh(e,t){let n=0,r=0;return i;function i(a){return a===40?(n++,e.consume(a),i):a===41&&r<n?o(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(lu,t,o)(a):a===null||q(a)||Te(a)?t(a):(e.consume(a),i)}function o(a){return a===41&&r++,e.consume(a),i}}function Nh(e,t,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),o):l===93?(e.consume(l),i):l===60||l===null||q(l)||Te(l)?t(l):n(l)}function i(l){return l===null||l===40||l===91||q(l)||Te(l)?t(l):r(l)}function o(l){return ue(l)?a(l):n(l)}function a(l){return l===59?(e.consume(l),r):ue(l)?(e.consume(l),a):n(l)}}function Fh(e,t,n){return r;function r(o){return e.consume(o),i}function i(o){return re(o)?n(o):t(o)}}function cu(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||q(e)}function pu(e){return !ue(e)}function fu(e){return !(e===47||Qi(e))}function Qi(e){return e===43||e===45||e===46||e===95||re(e)}function eo(e){let t=e.length,n=false;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=true;break}if(r._gfmAutolinkLiteralWalkedInto){n=false;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=true),n}var Oh={tokenize:Vh,partial:true};function to(){return {document:{91:{name:"gfmFootnoteDefinition",tokenize:jh,continuation:{tokenize:Wh},exit:$h}},text:{91:{name:"gfmFootnoteCall",tokenize:Hh},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Uh,resolveTo:Bh}}}}function Uh(e,t,n){let r=this,i=r.events.length,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a;for(;i--;){let s=r.events[i][1];if(s.type==="labelImage"){a=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return l;function l(s){if(!a||!a._balanced)return n(s);let u=fe(r.sliceSerialize({start:a.end,end:r.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function Bh(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;let a={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],["enter",i,t],e[n+3],e[n+4],["enter",o,t],["exit",o,t],["enter",a,t],["enter",l,t],["exit",l,t],["exit",a,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(n,e.length-n+1,...s),e}function Hh(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o=0,a;return l;function l(f){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),s}function s(f){return f!==94?n(f):(e.enter("gfmFootnoteCallMarker"),e.consume(f),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(f){if(o>999||f===93&&!a||f===null||f===91||q(f))return n(f);if(f===93){e.exit("chunkString");let p=e.exit("gfmFootnoteCallString");return i.includes(fe(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(f)}return q(f)||(a=true),o++,e.consume(f),f===92?c:u}function c(f){return f===91||f===92||f===93?(e.consume(f),o++,u):u(f)}}function jh(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o,a=0,l;return s;function s(h){return e.enter("gfmFootnoteDefinition")._container=true,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(h){return h===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",c):n(h)}function c(h){if(a>999||h===93&&!l||h===null||h===91||q(h))return n(h);if(h===93){e.exit("chunkString");let x=e.exit("gfmFootnoteDefinitionLabelString");return o=fe(r.sliceSerialize(x)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return q(h)||(l=true),a++,e.consume(h),h===92?f:c}function f(h){return h===91||h===92||h===93?(e.consume(h),a++,c):c(h)}function p(h){return h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),i.includes(o)||i.push(o),L(e,m,"gfmFootnoteDefinitionWhitespace")):n(h)}function m(h){return t(h)}}function Wh(e,t,n){return e.check(Pe,t,e.attempt(Oh,t,n))}function $h(e){e.exit("gfmFootnoteDefinition");}function Vh(e,t,n){let r=this;return L(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){let a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],true).length===4?t(o):n(o)}}function no(e){let n=(e||{}).singleTilde,r={name:"strikethrough",tokenize:o,resolveAll:i};return n==null&&(n=true),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(a,l){let s=-1;for(;++s<a.length;)if(a[s][0]==="enter"&&a[s][1].type==="strikethroughSequenceTemporary"&&a[s][1]._close){let u=s;for(;u--;)if(a[u][0]==="exit"&&a[u][1].type==="strikethroughSequenceTemporary"&&a[u][1]._open&&a[s][1].end.offset-a[s][1].start.offset===a[u][1].end.offset-a[u][1].start.offset){a[s][1].type="strikethroughSequence",a[u][1].type="strikethroughSequence";let c={type:"strikethrough",start:Object.assign({},a[u][1].start),end:Object.assign({},a[s][1].end)},f={type:"strikethroughText",start:Object.assign({},a[u][1].end),end:Object.assign({},a[s][1].start)},p=[["enter",c,l],["enter",a[u][1],l],["exit",a[u][1],l],["enter",f,l]],m=l.parser.constructs.insideSpan.null;m&&se(p,p.length,0,Ye(m,a.slice(u+1,s),l)),se(p,p.length,0,[["exit",f,l],["enter",a[s][1],l],["exit",a[s][1],l],["exit",c,l]]),se(a,u-1,s-u+3,p),s=u+p.length-2;break}}for(s=-1;++s<a.length;)a[s][1].type==="strikethroughSequenceTemporary"&&(a[s][1].type="data");return a}function o(a,l,s){let u=this.previous,c=this.events,f=0;return p;function p(h){return u===126&&c[c.length-1][1].type!=="characterEscape"?s(h):(a.enter("strikethroughSequenceTemporary"),m(h))}function m(h){let x=Be(u);if(h===126)return f>1?s(h):(a.consume(h),f++,m);if(f<2&&!n)return s(h);let w=a.exit("strikethroughSequenceTemporary"),y=Be(h);return w._open=!y||y===2&&!!x,w._close=!x||x===2&&!!y,l(h)}}}var Zn=class{constructor(){this.map=[];}add(t,n,r){qh(this,t,n,r);}consume(t){if(this.map.sort(function(o,a){return o[0]-a[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(let o of i)t.push(o);i=r.pop();}this.map.length=0;}};function qh(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1;}e.map.push([t,n,r]);}}function mu(e,t){let n=false,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let o=r.length-1;r[o]=r[o]==="left"?"center":"right";}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=true);t+=1;}return r}function ro(){return {flow:{null:{name:"table",tokenize:Yh,resolveAll:Kh}}}}function Yh(e,t,n){let r=this,i=0,o=0,a;return l;function l(v){let J=r.events.length-1;for(;J>-1;){let B=r.events[J][1].type;if(B==="lineEnding"||B==="linePrefix")J--;else break}let V=J>-1?r.events[J][1].type:null,T=V==="tableHead"||V==="tableRow"?k:s;return T===k&&r.parser.lazy[r.now().line]?n(v):T(v)}function s(v){return e.enter("tableHead"),e.enter("tableRow"),u(v)}function u(v){return v===124||(a=true,o+=1),c(v)}function c(v){return v===null?n(v):I(v)?o>1?(o=0,r.interrupt=true,e.exit("tableRow"),e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),m):n(v):R(v)?L(e,c,"whitespace")(v):(o+=1,a&&(a=false,i+=1),v===124?(e.enter("tableCellDivider"),e.consume(v),e.exit("tableCellDivider"),a=true,c):(e.enter("data"),f(v)))}function f(v){return v===null||v===124||q(v)?(e.exit("data"),c(v)):(e.consume(v),v===92?p:f)}function p(v){return v===92||v===124?(e.consume(v),f):f(v)}function m(v){return r.interrupt=false,r.parser.lazy[r.now().line]?n(v):(e.enter("tableDelimiterRow"),a=false,R(v)?L(e,h,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(v):h(v))}function h(v){return v===45||v===58?w(v):v===124?(a=true,e.enter("tableCellDivider"),e.consume(v),e.exit("tableCellDivider"),x):D(v)}function x(v){return R(v)?L(e,w,"whitespace")(v):w(v)}function w(v){return v===58?(o+=1,a=true,e.enter("tableDelimiterMarker"),e.consume(v),e.exit("tableDelimiterMarker"),y):v===45?(o+=1,y(v)):v===null||I(v)?M(v):D(v)}function y(v){return v===45?(e.enter("tableDelimiterFiller"),z(v)):D(v)}function z(v){return v===45?(e.consume(v),z):v===58?(a=true,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(v),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(v))}function S(v){return R(v)?L(e,M,"whitespace")(v):M(v)}function M(v){return v===124?h(v):v===null||I(v)?!a||i!==o?D(v):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(v)):D(v)}function D(v){return n(v)}function k(v){return e.enter("tableRow"),$(v)}function $(v){return v===124?(e.enter("tableCellDivider"),e.consume(v),e.exit("tableCellDivider"),$):v===null||I(v)?(e.exit("tableRow"),t(v)):R(v)?L(e,$,"whitespace")(v):(e.enter("data"),Y(v))}function Y(v){return v===null||v===124||q(v)?(e.exit("data"),$(v)):(e.consume(v),v===92?W:Y)}function W(v){return v===92||v===124?(e.consume(v),Y):Y(v)}}function Kh(e,t){let n=-1,r=true,i=0,o=[0,0,0,0],a=[0,0,0,0],l=false,s=0,u,c,f,p=new Zn;for(;++n<e.length;){let m=e[n],h=m[1];m[0]==="enter"?h.type==="tableHead"?(l=false,s!==0&&(hu(p,t,s,u,c),c=void 0,s=0),u={type:"table",start:Object.assign({},h.start),end:Object.assign({},h.end)},p.add(n,0,[["enter",u,t]])):h.type==="tableRow"||h.type==="tableDelimiterRow"?(r=true,f=void 0,o=[0,0,0,0],a=[0,n+1,0,0],l&&(l=false,c={type:"tableBody",start:Object.assign({},h.start),end:Object.assign({},h.end)},p.add(n,0,[["enter",c,t]])),i=h.type==="tableDelimiterRow"?2:c?3:1):i&&(h.type==="data"||h.type==="tableDelimiterMarker"||h.type==="tableDelimiterFiller")?(r=false,a[2]===0&&(o[1]!==0&&(a[0]=a[1],f=er(p,t,o,i,void 0,f),o=[0,0,0,0]),a[2]=n)):h.type==="tableCellDivider"&&(r?r=false:(o[1]!==0&&(a[0]=a[1],f=er(p,t,o,i,void 0,f)),o=a,a=[o[1],n,0,0])):h.type==="tableHead"?(l=true,s=n):h.type==="tableRow"||h.type==="tableDelimiterRow"?(s=n,o[1]!==0?(a[0]=a[1],f=er(p,t,o,i,n,f)):a[1]!==0&&(f=er(p,t,a,i,n,f)),i=0):i&&(h.type==="data"||h.type==="tableDelimiterMarker"||h.type==="tableDelimiterFiller")&&(a[3]=n);}for(s!==0&&hu(p,t,s,u,c),p.consume(t.events),n=-1;++n<t.events.length;){let m=t.events[n];m[0]==="enter"&&m[1].type==="table"&&(m[1]._align=mu(t.events,n));}return e}function er(e,t,n,r,i,o){let a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(o.end=Object.assign({},Et(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));let s=Et(t.events,n[1]);if(o={type:a,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",o,t]]),n[2]!==0){let u=Et(t.events,n[2]),c=Et(t.events,n[3]),f={type:l,start:Object.assign({},u),end:Object.assign({},c)};if(e.add(n[2],0,[["enter",f,t]]),r!==2){let p=t.events[n[2]],m=t.events[n[3]];if(p[1].end=Object.assign({},m[1].end),p[1].type="chunkText",p[1].contentType="text",n[3]>n[2]+1){let h=n[2]+1,x=n[3]-n[2]-1;e.add(h,x,[]);}}e.add(n[3]+1,0,[["exit",f,t]]);}return i!==void 0&&(o.end=Object.assign({},Et(t.events,i)),e.add(i,0,[["exit",o,t]]),o=void 0),o}function hu(e,t,n,r,i){let o=[],a=Et(t.events,n);i&&(i.end=Object.assign({},a),o.push(["exit",i,t])),r.end=Object.assign({},a),o.push(["exit",r,t]),e.add(n+1,0,o);}function Et(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}var Xh={name:"tasklistCheck",tokenize:Gh};function io(){return {text:{91:Xh}}}function Gh(e,t,n){let r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),o)}function o(s){return q(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),a):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),a):n(s)}function a(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(s)}function l(s){return I(s)?t(s):R(s)?e.check({tokenize:Jh},t,n)(s):n(s)}}function Jh(e,t,n){return L(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function du(e){return En([Zi(),to(),no(e),ro(),io()])}var Qh={};function tr(e){let t=this,n=e||Qh,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(du(n)),o.push(Gi()),a.push(Ji(n));}var Zh="4f16a8b-2026-10-14T04:11:34.104Z".split("-")[0],ed="https://chat.converzen.de",gu=()=>b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:b("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"})}),yu=()=>b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:b("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),td=()=>b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:b("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})}),nd=()=>b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:b("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),At=({custom:e,fallback:t,className:n})=>e?b("span",{className:n,dangerouslySetInnerHTML:{__html:e}}):t,rd=({title:e,subtitle:t,onClose:n,onClear:r,darkMode:i,icons:o,authControl:a})=>b("div",{className:`cvz-p-4 cvz-shadow-md cvz-flex cvz-justify-between cvz-items-start ${i?"cvz-bg-gradient-to-b cvz-from-gray-900 cvz-to-gray-800 cvz-text-white":"cvz-bg-gradient-to-b cvz-from-blue-600 cvz-to-blue-500 cvz-text-white"}`,children:[b("div",{className:"cvz-flex cvz-items-center cvz-gap-3",children:[b("div",{className:"cvz-relative",children:[b("div",{className:`cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-border-2 ${i?"cvz-border-gray-800":"cvz-border-blue-600"}`}),b("div",{className:"cvz-absolute cvz-top-0 cvz-left-0 cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-animate-ping cvz-opacity-75"})]}),b("div",{children:[b("h3",{className:"cvz-font-bold cvz-text-lg cvz-leading-tight",children:e}),t&&b("p",{className:`cvz-text-xs cvz-mt-0.5 ${i?"cvz-text-gray-300":"cvz-text-blue-100"}`,children:t})]})]}),b("div",{className:"cvz-flex cvz-gap-2 cvz-items-center",children:[a,b("button",{onClick:r,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Clear History",children:b(At,{custom:o?.clear,fallback:b(nd,{}),className:"cvz-w-5 cvz-h-5"})}),b("button",{onClick:n,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Close Chat",children:b(At,{custom:o?.close,fallback:b(yu,{}),className:"cvz-w-6 cvz-h-6"})})]})]}),id=({content:e,enableMarkdown:t,darkMode:n})=>t?b("div",{className:"cvz-markdown-content",children:b(wi,{remarkPlugins:[tr],components:{p:({children:r})=>b("p",{className:`cvz-mb-2 cvz-last:cvz-mb-0 ${n?"cvz-text-gray-100":""}`,children:r}),h1:({children:r})=>b("h1",{className:`cvz-text-xl cvz-font-bold cvz-mb-2 cvz-mt-4 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h2:({children:r})=>b("h2",{className:`cvz-text-lg cvz-font-bold cvz-mb-2 cvz-mt-3 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h3:({children:r})=>b("h3",{className:`cvz-text-base cvz-font-bold cvz-mb-1 cvz-mt-2 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),ul:({children:r})=>b("ul",{className:`cvz-list-disc cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),ol:({children:r})=>b("ol",{className:`cvz-list-decimal cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),li:({children:r})=>b("li",{className:"cvz-ml-2",children:r}),code:({children:r})=>b("code",{className:`cvz-px-1 cvz-py-0.5 cvz-rounded cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),pre:({children:r})=>b("pre",{className:`cvz-p-2 cvz-rounded cvz-overflow-x-auto cvz-mb-2 cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),blockquote:({children:r})=>b("blockquote",{className:`cvz-border-l-4 cvz-pl-3 cvz-italic cvz-mb-2 ${n?"cvz-border-gray-600 cvz-text-gray-300":"cvz-border-gray-300"}`,children:r}),strong:({children:r})=>b("strong",{className:"cvz-font-bold",children:r}),em:({children:r})=>b("em",{className:"cvz-italic",children:r}),a:({children:r,href:i})=>b("a",{href:i,className:`cvz-underline ${n?"cvz-text-blue-400 cvz-hover:cvz-text-blue-300":"cvz-text-blue-600 cvz-hover:cvz-text-blue-800"}`,target:"_blank",rel:"noopener noreferrer",children:r}),table:({children:r})=>b("div",{className:"cvz-overflow-x-auto cvz-mb-2",children:b("table",{className:`cvz-w-full cvz-text-sm cvz-border-collapse ${n?"cvz-text-gray-100":""}`,children:r})}),thead:({children:r})=>b("thead",{className:`${n?"cvz-bg-gray-700":"cvz-bg-gray-100"}`,children:r}),tbody:({children:r})=>b("tbody",{children:r}),tr:({children:r})=>b("tr",{className:`cvz-border-b ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:r}),th:({children:r})=>b("th",{className:`cvz-px-3 cvz-py-1.5 cvz-text-left cvz-font-semibold cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r}),td:({children:r})=>b("td",{className:`cvz-px-3 cvz-py-1.5 cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r})},children:e})}):Ie("span",null,e),od="Anzeige",ad=({cards:e,sponsoredLabel:t,darkMode:n})=>b("div",{className:"cvz-mt-2 cvz-flex cvz-flex-col cvz-gap-2","data-cvz-cards":true,children:e.map(r=>{let i=r.sponsored!==false;return b("a",{href:r.url,target:"_blank",rel:i?"sponsored noopener noreferrer":"noopener noreferrer",className:`cvz-flex cvz-gap-3 cvz-items-center cvz-p-2 cvz-rounded-xl cvz-border cvz-no-underline cvz-transition-colors ${n?"cvz-bg-gray-800 cvz-border-gray-700 cvz-text-gray-100 hover:cvz-bg-gray-700":"cvz-bg-white cvz-border-gray-200 cvz-text-gray-800 hover:cvz-bg-gray-50"}`,children:[r.imageUrl&&b("img",{src:r.imageUrl,alt:"",loading:"lazy",className:"cvz-w-12 cvz-h-12 cvz-rounded-lg cvz-object-cover cvz-flex-shrink-0"}),b("span",{className:"cvz-flex cvz-flex-col cvz-min-w-0 cvz-text-xs",children:[i&&b("span",{className:`cvz-uppercase cvz-tracking-wide cvz-font-semibold ${n?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:t||od}),b("span",{className:"cvz-font-semibold cvz-text-sm cvz-truncate",children:r.title}),r.description&&b("span",{className:n?"cvz-text-gray-300":"cvz-text-gray-600",children:r.description}),r.merchant&&b("span",{className:n?"cvz-text-gray-400":"cvz-text-gray-500",children:r.merchant})]})]},r.url)})}),ld=({messages:e,isStreaming:t,streamingMessage:n,thinkingMessage:r,activeToolCall:i,isFinalizingRef:o,messagesEndRef:a,enableMarkdown:l,darkMode:s,icons:u,sponsoredLabel:c})=>{let f=mn(null),[p,m]=pe(true);return Ee(()=>{let h=f.current;if(!h)return;let x=()=>{let{scrollTop:w,scrollHeight:y,clientHeight:z}=h,S=y-w-z<100;m(S);};return h.addEventListener("scroll",x),()=>h.removeEventListener("scroll",x)},[]),Ee(()=>{p&&a.current&&a.current.scrollIntoView({behavior:"smooth"});},[e,n,r,i,p,a]),b("div",{ref:f,className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-4 cvz-space-y-4 ${s?"cvz-bg-gray-900 cvz-scrollbar-dark":"cvz-bg-gray-50 cvz-scrollbar-light"}`,children:[e.length===0&&!n&&b("div",{className:`cvz-flex cvz-flex-col cvz-items-center cvz-justify-center cvz-h-full cvz-space-y-2 ${s?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:[b(At,{custom:u?.launcher,fallback:b(gu,{}),className:"cvz-w-6 cvz-h-6"}),b("p",{className:"cvz-text-sm",children:"Start a conversation"})]}),e.map(h=>b("div",{children:[b("div",{className:`cvz-flex ${h.role==="USER"?"cvz-justify-end":"cvz-justify-start"}`,children:b("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-text-sm cvz-shadow-sm ${h.role==="USER"?s?"cvz-bg-blue-500 cvz-text-white cvz-rounded-br-none":"cvz-bg-blue-600 cvz-text-white cvz-rounded-br-none":s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border cvz-border-gray-700 cvz-rounded-bl-none":"cvz-bg-white cvz-text-gray-800 cvz-border cvz-border-gray-100 cvz-rounded-bl-none"}`,children:b(id,{content:h.content,enableMarkdown:l,darkMode:s})})}),h.role==="ASSISTANT"&&h.cards&&h.cards.length>0&&b("div",{className:"cvz-flex cvz-justify-start",children:b("div",{className:"cvz-max-w-[85%] cvz-w-full",children:b(ad,{cards:h.cards,sponsoredLabel:c,darkMode:s})})})]},h.createdAt.toString())),t&&n&&!o.current&&b("div",{className:"cvz-flex cvz-justify-start",children:b("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-text-sm cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border-gray-700":"cvz-bg-white cvz-text-gray-800 cvz-border-gray-100"}`,children:n})}),t&&!n&&b("div",{className:"cvz-flex cvz-justify-start",children:b("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:i?b("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:["Calling ",i,"\u2026"]}):r?b("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:r}):b("div",{className:"cvz-flex cvz-space-x-1",children:[b("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"0ms"}}),b("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"150ms"}}),b("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"300ms"}})]})})}),b("div",{ref:a})]})},sd=({value:e,onChange:t,onSubmit:n,isLoading:r,placeholder:i,darkMode:o,icons:a})=>b("form",{onSubmit:n,className:`cvz-p-4 cvz-border-t ${o?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:[b("div",{className:"cvz-relative cvz-flex cvz-items-center",children:[b("input",{type:"text",value:e,onChange:l=>t(l.target.value),placeholder:i,className:`cvz-w-full cvz-border cvz-text-sm cvz-rounded-full cvz-pl-4 cvz-pr-12 cvz-py-3 cvz-focus:cvz-outline-none cvz-focus:cvz-ring-1 cvz-transition-all ${o?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100 cvz-placeholder-gray-400 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500":"cvz-bg-gray-50 cvz-border-gray-200 cvz-text-gray-900 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500"}`}),b("button",{type:"submit",disabled:!e.trim()||r,className:`cvz-absolute cvz-right-2 cvz-p-2 cvz-text-white cvz-rounded-full cvz-disabled:cvz-opacity-50 cvz-transition-colors cvz-shadow-sm ${o?"cvz-bg-blue-500 cvz-hover:cvz-bg-blue-600 cvz-disabled:cvz-hover:cvz-bg-blue-500":"cvz-bg-blue-600 cvz-hover:cvz-bg-blue-700 cvz-disabled:cvz-hover:cvz-bg-blue-600"}`,children:b(At,{custom:a?.send,fallback:b(td,{}),className:"cvz-w-5 cvz-h-5"})})]}),b("div",{className:"cvz-text-center cvz-mt-2",children:b("p",{className:`cvz-text-[10px] ${o?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:["Powered by ConverZen",b("span",{className:o?"cvz-text-gray-600":"cvz-text-gray-300",children:[" \xB7 ",Zh]})]})})]}),ud=({config:e})=>{let t=za(e),[n,r]=pe(""),[i,o]=pe(false),a=mn(null),l=async x=>{if(x?.preventDefault(),!n.trim()||t.isStreaming)return;let w=n;r(""),await t.sendMessage(w);},s=async()=>{window.confirm("Are you sure you want to clear your chat history?")&&await t.clearHistory();},u=Sa(e.style),c=Ca(e.style),f=Ea(e.style),p=Aa(e.style,t.isOpen),m=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="bottom-left")||typeof e.style.position=="object"&&e.style.position.bottom,h=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="top-right")||typeof e.style.position=="object"&&e.style.position.right;return b("div",{className:"cvz-fixed cvz-z-[9999] cvz-font-sans",style:u,children:[b("div",{className:`
          cvz-absolute cvz-rounded-2xl cvz-shadow-2xl cvz-flex cvz-flex-col cvz-overflow-hidden
          cvz-transition-all cvz-duration-300
          ${e.darkMode?"cvz-bg-gray-800":"cvz-bg-white"}
          ${m?"cvz-bottom-20":"cvz-top-20"}
          ${h?"cvz-right-0":"cvz-left-0"}
          ${m&&h?"cvz-origin-bottom-right":m&&!h?"cvz-origin-bottom-left":!m&&h?"cvz-origin-top-right":"cvz-origin-top-left"}
          ${t.isOpen?"cvz-opacity-100 cvz-scale-100 cvz-translate-y-0":"cvz-opacity-0 cvz-scale-95 cvz-translate-y-4 cvz-pointer-events-none"}
        `,style:{...c,borderColor:f,borderWidth:"1px",borderStyle:"solid"},children:[b(rd,{title:e.headerMsg||"Support Chat",subtitle:e.subheaderMsg||"We typically reply in a few minutes",onClose:()=>t.close(),onClear:s,darkMode:e.darkMode,icons:e.icons,authControl:e.endUserLicensing?b("button",{onClick:()=>o(true),className:`cvz-text-xs cvz-font-medium cvz-px-2 cvz-py-1 cvz-rounded-md cvz-transition-colors cvz-whitespace-nowrap ${e.darkMode?"cvz-text-gray-200 hover:cvz-bg-gray-700/50":"cvz-text-white hover:cvz-bg-blue-600/50"}`,title:t.endUserAuth?`Signed in as ${t.endUserAuth.email}`:"Authenticate",children:t.endUserAuth?"Account":"Authenticate"}):void 0}),b("div",{ref:x=>t.setCaptchaContainer(x),className:`cvz-flex cvz-justify-center cvz-overflow-hidden cvz-transition-all cvz-duration-200 ${t.captchaPending?"cvz-max-h-32 cvz-py-2":"cvz-max-h-0 cvz-py-0"}`}),b(ld,{messages:t.messages,isStreaming:t.isStreaming,streamingMessage:t.streamingMessage,thinkingMessage:t.thinkingMessage,activeToolCall:t.activeToolCall,isFinalizingRef:t.isFinalizingRef,messagesEndRef:a,enableMarkdown:e.enableMarkdown,darkMode:e.darkMode,icons:e.icons,sponsoredLabel:e.sponsoredLabel}),t.showAuthNudge&&!Ze(t.endUserAuth)&&b("div",{className:`cvz-px-4 cvz-py-2 cvz-text-xs cvz-flex cvz-items-center cvz-justify-between cvz-gap-2 ${e.darkMode?"cvz-bg-amber-900/40 cvz-text-amber-200":"cvz-bg-amber-50 cvz-text-amber-800"}`,children:[b("span",{children:"You've reached the free limit - authenticate to keep chatting."}),b("button",{onClick:()=>o(true),className:"cvz-underline cvz-font-medium cvz-shrink-0",children:"Authenticate"})]}),b(sd,{value:n,onChange:r,onSubmit:l,isLoading:t.isLoading||t.isStreaming,placeholder:e.promptPlaceholder||"Type a message...",darkMode:e.darkMode,icons:e.icons}),e.endUserLicensing&&b(Jo,{open:i,onClose:()=>o(false),darkMode:e.darkMode,baseUrl:e.chatUrl||ed,getBaseAuth:()=>t.getTenantAuthToken(),endUserAuth:t.endUserAuth,onAuthenticated:t.authenticateEndUser,initialEmail:$o()??void 0})]}),b("button",{onClick:()=>t.isOpen?t.close():t.open(),className:`
          cvz-flex cvz-items-center cvz-justify-center
          cvz-w-14 cvz-h-14 cvz-rounded-full cvz-shadow-lg cvz-transition-all cvz-duration-300
          ${t.isOpen?"cvz-rotate-90":"cvz-hover:cvz-scale-105"}
        `,style:{backgroundColor:p.backgroundColor},onMouseEnter:x=>{!t.isOpen&&e.style?.buttonColor?.hover&&(x.currentTarget.style.backgroundColor=e.style.buttonColor.hover);},onMouseLeave:x=>{t.isOpen||(x.currentTarget.style.backgroundColor=p.backgroundColor);},children:b("div",{className:"cvz-text-white",children:t.isOpen?b(At,{custom:e.icons?.close,fallback:b(yu,{}),className:"cvz-w-6 cvz-h-6"}):b(At,{custom:e.icons?.launcher,fallback:b(gu,{}),className:"cvz-w-6 cvz-h-6"})})})]})},xu=ud;var oo=`*, ::before, ::after {
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
`;if(N){N.debounceRendering;N.debounceRendering=t=>{requestAnimationFrame(t);};}var pd="cvz-widget-host";function fd(e,t){let n=document.createElement("div");n.id=pd,document.body.appendChild(n);let r=n.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=oo,r.appendChild(i);let o=document.createElement("div");return o.id="cvz-root",r.appendChild(o),un(Ie(t,{config:e}),o),{hostElement:n,root:o}}var ao=class{hostElement=null;root=null;buildId="4f16a8b-2026-10-14T04:11:34.104Z";init(t){if(this.hostElement){console.warn("cvzWidget is already initialized.");return}console.log("init: Initializing cvzWidget...",this.buildId),console.log("CSS Length:",oo.length),{hostElement:this.hostElement,root:this.root}=fd(t,xu);}addCards(t){let n=_a();if(!n){console.warn("addCards: cvzWidget is not initialized.");return}n.addCards(t);}hide(){if(!this.hostElement){console.warn("hide: cvzWidget is not initialized.");return}this.root&&(un(null,this.root),this.root=null),this.hostElement&&(this.hostElement.remove(),this.hostElement=null);}},vu=new ao;typeof window<"u"&&(window.cvzWidget=vu);var nS=vu;return nS;})();