(function(){'use strict';var vu=Object.create;var qn=Object.defineProperty;var wu=Object.getOwnPropertyDescriptor;var ku=Object.getOwnPropertyNames;var _u=Object.getPrototypeOf,zu=Object.prototype.hasOwnProperty;var St=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),no=(e,t)=>{for(var n in t)qn(e,n,{get:t[n],enumerable:true});},Su=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ku(t))!zu.call(e,i)&&i!==n&&qn(e,i,{get:()=>t[i],enumerable:!(r=wu(t,i))||r.enumerable});return e};var ro=(e,t,n)=>(n=e!=null?vu(_u(e)):{},Su(qn(n,"default",{value:e,enumerable:true}),e));var Ma=St((Yg,Da)=>{var Ta=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,kc=/\n/g,_c=/^\s*/,zc=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Sc=/^:\s*/,Cc=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Ec=/^[;\s]*/,Ic=/^\s+|\s+$/g,Ac=`
`,Pa="/",La="*",Qe="",Tc="comment",Pc="declaration";function Lc(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return [];t=t||{};var n=1,r=1;function i(h){var y=h.match(kc);y&&(n+=y.length);var v=h.lastIndexOf(Ac);r=~v?h.length-v:r+h.length;}function a(){var h={line:n,column:r};return function(y){return y.position=new o(h),u(),y}}function o(h){this.start=h,this.end={line:n,column:r},this.source=t.source;}o.prototype.content=e;function l(h){var y=new Error(t.source+":"+n+":"+r+": "+h);if(y.reason=h,y.filename=t.source,y.line=n,y.column=r,y.source=e,!t.silent)throw y}function s(h){var y=h.exec(e);if(y){var v=y[0];return i(v),e=e.slice(v.length),y}}function u(){s(_c);}function c(h){var y;for(h=h||[];y=p();)y!==false&&h.push(y);return h}function p(){var h=a();if(!(Pa!=e.charAt(0)||La!=e.charAt(1))){for(var y=2;Qe!=e.charAt(y)&&(La!=e.charAt(y)||Pa!=e.charAt(y+1));)++y;if(y+=2,Qe===e.charAt(y-1))return l("End of comment missing");var v=e.slice(2,y-2);return r+=2,i(v),e=e.slice(y),r+=2,h({type:Tc,comment:v})}}function f(){var h=a(),y=s(zc);if(y){if(p(),!s(Sc))return l("property missing ':'");var v=s(Cc),x=h({type:Pc,property:Ra(y[0].replace(Ta,Qe)),value:v?Ra(v[0].replace(Ta,Qe)):Qe});return s(Ec),x}}function m(){var h=[];c(h);for(var y;y=f();)y!==false&&(h.push(y),c(h));return h}return u(),m()}function Ra(e){return e?e.replace(Ic,Qe):Qe}Da.exports=Lc;});var Na=St(Pt=>{var Rc=Pt&&Pt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Pt,"__esModule",{value:true});Pt.default=Mc;var Dc=Rc(Ma());function Mc(e,t){let n=null;if(!e||typeof e!="string")return n;let r=(0, Dc.default)(e),i=typeof t=="function";return r.forEach(a=>{if(a.type!=="declaration")return;let{property:o,value:l}=a;i?t(o,l,a):l&&(n=n||{},n[o]=l);}),n}});var Oa=St(dn=>{Object.defineProperty(dn,"__esModule",{value:true});dn.camelCase=void 0;var Nc=/^--[a-zA-Z0-9_-]+$/,Fc=/-([a-z])/g,Oc=/^[^-]+$/,Uc=/^-(webkit|moz|ms|o|khtml)-/,Bc=/^-(ms)-/,Hc=function(e){return !e||Oc.test(e)||Nc.test(e)},jc=function(e,t){return t.toUpperCase()},Fa=function(e,t){return "".concat(t,"-")},Wc=function(e,t){return t===void 0&&(t={}),Hc(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Bc,Fa):e=e.replace(Uc,Fa),e.replace(Fc,jc))};dn.camelCase=Wc;});var Ba=St((Er,Ua)=>{var Vc=Er&&Er.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},$c=Vc(Na()),qc=Oa();function Cr(e,t){var n={};return !e||typeof e!="string"||(0, $c.default)(e,function(r,i){r&&i&&(n[(0, qc.camelCase)(r,t)]=i);}),n}Cr.default=Cr;Ua.exports=Cr;});var ps=St((_k,cs)=>{var Un=Object.prototype.hasOwnProperty,us=Object.prototype.toString,rs=Object.defineProperty,is=Object.getOwnPropertyDescriptor,os=function(t){return typeof Array.isArray=="function"?Array.isArray(t):us.call(t)==="[object Array]"},as=function(t){if(!t||us.call(t)!=="[object Object]")return  false;var n=Un.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Un.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return  false;var i;for(i in t);return typeof i>"u"||Un.call(t,i)},ls=function(t,n){rs&&n.name==="__proto__"?rs(t,n.name,{enumerable:true,configurable:true,value:n.newValue,writable:true}):t[n.name]=n.newValue;},ss=function(t,n){if(n==="__proto__")if(Un.call(t,n)){if(is)return is(t,n).value}else return;return t[n]};cs.exports=function e(){var t,n,r,i,a,o,l=arguments[0],s=1,u=arguments.length,c=false;for(typeof l=="boolean"&&(c=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(t=arguments[s],t!=null)for(n in t)r=ss(l,n),i=ss(t,n),l!==i&&(c&&i&&(as(i)||(a=os(i)))?(a?(a=false,o=r&&os(r)?r:[]):o=r&&as(r)?r:{},ls(l,{name:n,newValue:e(c,o,i)})):typeof i<"u"&&ls(l,{name:n,newValue:i}));return l};});var Kt,O,so,Ue,io,uo,co,Yn,$t,Ct,po,Kn,Xn,Gn,Yt={},Xt=[],Iu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Et=Array.isArray;function Le(e,t){for(var n in t)e[n]=t[n];return e}function Jn(e){e&&e.parentNode&&e.parentNode.removeChild(e);}function Ce(e,t,n){var r,i,a,o={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?Kt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return qt(e,o,r,i,null)}function qt(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++so,__i:-1,__u:0};return i==null&&O.vnode!=null&&O.vnode(a),a}function be(e){return e.children}function _e(e,t){this.props=e,this.context=t;}function Xe(e,t){if(t==null)return e.__?Xe(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Xe(e):null}function Au(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=Le({},t);a.__v=t.__v+1,O.vnode&&O.vnode(a),Qn(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??Xe(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,yo(r,a,i),t.__e=t.__=null,a.__e!=n&&fo(a);}}function fo(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),fo(e)}function oo(e){(!e.__d&&(e.__d=true)&&Ue.push(e)&&!Gt.__r++||io!=O.debounceRendering)&&((io=O.debounceRendering)||uo)(Gt);}function Gt(){try{for(var e,t=1;Ue.length;)Ue.length>t&&Ue.sort(co),e=Ue.shift(),t=Ue.length,Au(e);}finally{Ue.length=Gt.__r=0;}}function mo(e,t,n,r,i,a,o,l,s,u,c){var p,f,m,h,y,v,x=r&&r.__k||Xt,S=t.length;for(s=Tu(n,t,x,s,S),p=0;p<S;p++)(m=n.__k[p])!=null&&(f=m.__i!=-1&&x[m.__i]||Yt,m.__i=p,v=Qn(e,m,f,i,a,o,l,s,u,c),h=m.__e,m.ref&&f.ref!=m.ref&&(f.ref&&Zn(f.ref,null,m),c.push(m.ref,m.__c||h,m)),y==null&&h!=null&&(y=h),4&m.__u?(s=ho(m,s,e),f.__e&&(f.__e=null)):typeof m.type=="function"&&v!==void 0?s=v:h&&(s=h.nextSibling),m.__u&=-7);return n.__e=y,s}function Tu(e,t,n,r,i){var a,o,l,s,u,c=n.length,p=c,f=0;for(e.__k=new Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[a]=qt(null,o,null,null,null):Et(o)?o=e.__k[a]=qt(be,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=qt(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,s=a+f,o.__=e,o.__b=e.__b+1,l=null,(u=o.__i=Pu(o,n,s,p))!=-1&&(p--,(l=n[u])&&(l.__u|=2)),l==null||l.__v==null?(u==-1&&(i>c?f--:i<c&&f++),typeof o.type!="function"&&(o.__u|=4)):u!=s&&(u==s-1?f--:u==s+1?f++:(u>s?f--:f++,o.__u|=4))):e.__k[a]=null;if(p)for(a=0;a<c;a++)(l=n[a])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=Xe(l)),bo(l,l));return r}function ho(e,t,n){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=ho(r[i],t,n));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=Xe(e)),t=n.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function It(e,t){return t=t||[],e==null||typeof e=="boolean"||(Et(e)?e.some(function(n){It(n,t);}):t.push(e)),t}function Pu(e,t,n,r){var i,a,o,l=e.key,s=e.type,u=t[n],c=u!=null&&(2&u.__u)==0;if(u===null&&l==null||c&&l==u.key&&s==u.type)return n;if(r>(c?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((u=t[o=i>=0?i--:a++])!=null&&(2&u.__u)==0&&l==u.key&&s==u.type)return o}return  -1}function ao(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Iu.test(t)?n:n+"px";}function Vt(e,t,n,r,i){var a,o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else {if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ao(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||ao(e.style,t,n[t]);}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(po,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n[Ct]=r[Ct]:(n[Ct]=Kn,e.addEventListener(t,a?Gn:Xn,a)):e.removeEventListener(t,a?Gn:Xn,a);else {if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===false&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n));}}function lo(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[$t]==null)t[$t]=Kn++;else if(t[$t]<n[Ct])return;return n(O.event?O.event(t):t)}}}function Qn(e,t,n,r,i,a,o,l,s,u){var c,p,f,m,h,y,v,x,S,C,N,D,k,W,q,j,b=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),a=[l=t.__e=n.__e]),(c=O.__b)&&c(t);e:if(typeof b=="function"){p=o.length;try{if(S=t.props,C=b.prototype&&b.prototype.render,N=(c=b.contextType)&&r[c.__c],D=c?N?N.props.value:c.__:r,n.__c?x=(f=t.__c=n.__c).__=f.__E:(C?t.__c=f=new b(S,D):(t.__c=f=new _e(S,D),f.constructor=b,f.render=Ru),N&&N.sub(f),f.state||(f.state={}),f.__n=r,m=f.__d=!0,f.__h=[],f._sb=[]),C&&f.__s==null&&(f.__s=f.state),C&&b.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=Le({},f.__s)),Le(f.__s,b.getDerivedStateFromProps(S,f.__s))),h=f.props,y=f.state,f.__v=t,m)C&&b.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),C&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else {if(C&&b.getDerivedStateFromProps==null&&S!==h&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(S,D),t.__v==n.__v||!f.__e&&f.shouldComponentUpdate!=null&&f.shouldComponentUpdate(S,f.__s,D)===!1){t.__v!=n.__v&&(f.props=S,f.state=f.__s,f.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(G){G&&(G.__=t);}),Xt.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&o.push(f),l=Xe(n);break e}f.componentWillUpdate!=null&&f.componentWillUpdate(S,f.__s,D),C&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(h,y,v);});}if(f.context=D,f.props=S,f.__P=e,f.__e=!1,k=O.__r,W=0,C)f.state=f.__s,f.__d=!1,k&&k(t),c=f.render(f.props,f.state,f.context),Xt.push.apply(f.__h,f._sb),f._sb=[];else do f.__d=!1,k&&k(t),c=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++W<25);f.state=f.__s,f.getChildContext!=null&&(r=Le(Le({},r),f.getChildContext())),C&&!m&&f.getSnapshotBeforeUpdate!=null&&(v=f.getSnapshotBeforeUpdate(h,y)),q=c!=null&&c.type===be&&c.key==null?xo(c.props.children):c,l=mo(e,Et(q)?q:[q],t,n,r,i,a,o,l,s,u),f.base=t.__e,t.__u&=-161,f.__h.length&&o.push(f),x&&(f.__E=f.__=null);}catch(G){if(o.length=p,t.__v=null,s||a!=null){if(G.then){for(t.__u|=s?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;a!=null&&(a[a.indexOf(l)]=null),t.__e=l;}else if(a!=null)for(j=a.length;j--;)Jn(a[j]);}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),G.then||go(t),O.__e(G,t,n);}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Lu(n.__e,t,n,r,i,a,o,s,u);return (c=O.diffed)&&c(t),128&t.__u?void 0:l}function go(e){e&&(e.__c&&(e.__c.__e=true),e.__k&&e.__k.some(go));}function yo(e,t,n){for(var r=0;r<n.length;r++)Zn(n[r],n[++r],n[++r]);O.__c&&O.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i);});}catch(a){O.__e(a,i.__v);}});}function xo(e){return typeof e!="object"||e==null||e.__b>0?e:Et(e)?e.map(xo):e.constructor!==void 0?null:Le({},e)}function Lu(e,t,n,r,i,a,o,l,s){var u,c,p,f,m,h,y,v=n.props||Yt,x=t.props,S=t.type;if(S=="svg"?i="http://www.w3.org/2000/svg":S=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(u=0;u<a.length;u++)if((m=a[u])&&"setAttribute"in m==!!S&&(S?m.localName==S:m.nodeType==3)){e=m,a[u]=null;break}}if(e==null){if(S==null)return document.createTextNode(x);e=document.createElementNS(i,S,x.is&&x),l&&(O.__m&&O.__m(t,a),l=false),a=null;}if(S==null)v===x||l&&e.data==x||(e.data=x);else {if(a=S=="textarea"&&x.defaultValue!=null?null:a&&Kt.call(e.childNodes),!l&&a!=null)for(v={},u=0;u<e.attributes.length;u++)v[(m=e.attributes[u]).name]=m.value;for(u in v)m=v[u],u=="dangerouslySetInnerHTML"?p=m:u=="children"||u in x||u=="value"&&"defaultValue"in x||u=="checked"&&"defaultChecked"in x||Vt(e,u,null,m,i);for(u in x)m=x[u],u=="children"?f=m:u=="dangerouslySetInnerHTML"?c=m:u=="value"?h=m:u=="checked"?y=m:l&&typeof m!="function"||v[u]===m||Vt(e,u,m,v[u],i);if(c)l||p&&(c.__html==p.__html||c.__html==e.innerHTML)||(e.innerHTML=c.__html),t.__k=[];else if(p&&(e.innerHTML=""),mo(t.type=="template"?e.content:e,Et(f)?f:[f],t,n,r,S=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,o,a?a[0]:n.__k&&Xe(n,0),l,s),a!=null)for(u=a.length;u--;)Jn(a[u]);l&&S!="textarea"||(u="value",S=="progress"&&h==null?e.removeAttribute("value"):h!=null&&(h!==e[u]||S=="progress"&&!h||S=="option"&&h!=v[u])&&Vt(e,u,h,v[u],i),u="checked",y!=null&&y!=e[u]&&Vt(e,u,y,v[u],i));}return e}function Zn(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t));}else e.current=t;}catch(i){O.__e(i,n);}}function bo(e,t,n){var r,i;if(O.unmount&&O.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||Zn(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount();}catch(a){O.__e(a,t);}r.base=r.__P=r.__n=null;}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&bo(r[i],t,n||typeof e.type!="function");n||Jn(e.__e),e.__c=e.__=e.__e=void 0;}function Ru(e,t,n){return this.constructor(e,n)}function er(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),O.__&&O.__(e,t),i=(r="undefined"=="function")?null:t.__k,a=[],o=[],Qn(t,e=(t).__k=Ce(be,null,[e]),i||Yt,Yt,t.namespaceURI,i?null:t.firstChild?Kt.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,o),yo(a,e,o),e.props.children=null;}Kt=Xt.slice,O={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(l){e=l;}throw e}},so=0,_e.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Le({},this.state),typeof e=="function"&&(e=e(Le({},n),this.props)),e&&Le(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),oo(this));},_e.prototype.forceUpdate=function(e){this.__v&&(this.__e=true,e&&this.__h.push(e),oo(this));},_e.prototype.render=be,Ue=[],uo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,co=function(e,t){return e.__v.__b-t.__v.__b},Gt.__r=0,Yn=Math.random().toString(8),$t="__d"+Yn,Ct="__a"+Yn,po=/(PointerCapture)$|Capture$/i,Kn=0,Xn=lo(false),Gn=lo(true);var ft,Q,tr,vo,Qt=0,Io=[],ne=O,wo=ne.__b,ko=ne.__r,_o=ne.diffed,zo=ne.__c,So=ne.unmount,Co=ne.__;function Zt(e,t){ne.__h&&ne.__h(Q,e,Qt||t),Qt=0;var n=Q.__H||(Q.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function fe(e){return Qt=1,Ao(Po,e)}function Ao(e,t,n){var r=Zt(ft++,2);if(r.t=e,!r.__c&&(r.__=[Po(void 0,t),function(l){var s=r.__N?r.__N[0]:r.__[0],u=r.t(s,l);s!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}));}],r.__c=Q,!Q.__f)){var i=function(l,s,u){if(!r.__c.__H)return  true;var c=false,p=r.__c.props!==l;if(r.__c.__H.__.some(function(m){if(m.__N){c=true;var h=m.__[0];m.__=m.__N,m.__N=void 0,h!==m.__[0]&&(p=true);}}),a){var f=a.call(this,l,s,u);return c?f||p:f}return !c||p};Q.__f=true;var a=Q.shouldComponentUpdate,o=Q.componentWillUpdate;Q.componentWillUpdate=function(l,s,u){if(this.__e){var c=a;a=void 0,i(l,s,u),a=c;}o&&o.call(this,l,s,u);},Q.shouldComponentUpdate=i;}return r.__N||r.__}function Re(e,t){var n=Zt(ft++,3);!ne.__s&&rr(n.__H,t)&&(n.__=e,n.u=t,Q.__H.__h.push(n));}function To(e,t){var n=Zt(ft++,4);!ne.__s&&rr(n.__H,t)&&(n.__=e,n.u=t,Q.__h.push(n));}function en(e){return Qt=5,tn(function(){return {current:e}},[])}function tn(e,t){var n=Zt(ft++,7);return rr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Du(){for(var e;e=Io.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Jt),t.__h.some(nr),t.__h=[];}catch(n){t.__h=[],ne.__e(n,e.__v);}}}ne.__b=function(e){Q=null,wo&&wo(e);},ne.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Co&&Co(e,t);},ne.__r=function(e){ko&&ko(e),ft=0;var t=(Q=e.__c).__H;t&&(tr===Q?(t.__h=[],Q.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(t.__h.some(Jt),t.__h.some(nr),t.__h=[],ft=0)),tr=Q;},ne.diffed=function(e){_o&&_o(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Io.push(t)!==1&&vo===ne.requestAnimationFrame||((vo=ne.requestAnimationFrame)||Mu)(Du)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0);})),tr=Q=null;},ne.__c=function(e,t){t.some(function(n){try{n.__h.some(Jt),n.__h=n.__h.filter(function(r){return !r.__||nr(r)});}catch(r){t.some(function(i){i.__h&&(i.__h=[]);}),t=[],ne.__e(r,n.__v);}}),zo&&zo(e,t);},ne.unmount=function(e){So&&So(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{Jt(r);}catch(i){t=i;}}),n.__H=void 0,t&&ne.__e(t,n.__v));};var Eo=typeof requestAnimationFrame=="function";function Mu(e){var t,n=function(){clearTimeout(r),Eo&&cancelAnimationFrame(t),setTimeout(e);},r=setTimeout(n,35);Eo&&(t=requestAnimationFrame(n));}function Jt(e){var t=Q,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Q=t;}function nr(e){var t=Q;e.__c=e.__(),Q=t;}function rr(e,t){return !e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Po(e,t){return typeof t=="function"?t(e):t}var or="cvz_end_user_auth_v1",Lo="cvz_end_user_last_email",ar="cvz_end_user_pending_checkout_v1";function lr(e){try{return localStorage.getItem(e)}catch{return null}}function ir(e,t){try{localStorage.setItem(e,t);}catch{}}function Ro(e){try{localStorage.removeItem(e);}catch{}}function Do(){let e=lr(or);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.token=="string"&&typeof t.expiresAt=="number"&&typeof t.email=="string")return t}catch{}return null}function Ge(e){return e?e.expiresAt-300>Date.now()/1e3:false}function Mo(e){ir(or,JSON.stringify(e)),ir(Lo,e.email);}function No(){Ro(or);}function Fo(){return lr(Lo)}function Oo(e){ir(ar,JSON.stringify(e));}function Uo(){let e=lr(ar);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.pendingId=="string"&&typeof t.planId=="number")return t}catch{}return null}function Bo(){Ro(ar);}function Ho(e){return e.type==="apiKey"?{"X-API-Key":e.token}:{Authorization:`Bearer ${e.token}`}}async function nn(e){try{let t=await e.json();if(t&&typeof t.message=="string")return t.message;if(t&&typeof t.error=="string")return t.error}catch{}return `${e.status} ${e.statusText}`}async function jo(e,t,n){let r=await fetch(`${e}/api/chat/end_user/start_login`,{method:"POST",headers:{"Content-Type":"application/json",...Ho(t)},body:JSON.stringify({email:n})});if(!r.ok)throw new Error(await nn(r));return (await r.json()).pending_id}function rn(e,t){return new Promise(n=>{let r=new EventSource(`${e}/api/chat/end_user/wait/${encodeURIComponent(t)}`),i=false,a=o=>{i||(i=true,r.close(),n(o));};r.onmessage=o=>{try{a(JSON.parse(o.data));}catch{a({status:"error"});}},r.onerror=()=>{a({status:"timed_out"});};})}async function sr(e,t){let n=await fetch(`${e}/api/chat/end_user/plans`,{headers:Ho(t)});if(!n.ok)throw new Error(await nn(n));return (await n.json()).plans}async function ur(e,t){let n=await fetch(`${e}/api/chat/end_user/me`,{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw new Error(await nn(n));return await n.json()}async function Wo(e,t,n,r,i){let a=await fetch(`${e}/api/chat/end_user/checkout`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({plan_id:n,success_url:r,cancel_url:i})});if(!a.ok)throw new Error(await nn(a));let o=await a.json();return {checkoutUrl:o.checkout_url,pendingId:o.pending_id}}var Nu=0;function w(e,t,n,r,i,a){t||(t={});var o,l,s=t;if("ref"in s)for(l in s={},t)l=="ref"?o=t[l]:s[l]=t[l];var u={type:e,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Nu,__i:-1,__u:0,__source:i,__self:a};if(typeof e=="function"&&(o=e.defaultProps))for(l in o)s[l]===void 0&&(s[l]=o[l]);return O.vnode&&O.vnode(u),u}var Fu=60*1e3;function Ou(e,t){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:t.toUpperCase()}).format(e/100)}catch{return `${(e/100).toFixed(2)} ${t.toUpperCase()}`}}function Uu(e){return new Date(e*1e3).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}var Vo=({open:e,onClose:t,darkMode:n,baseUrl:r,getBaseAuth:i,endUserAuth:a,onAuthenticated:o,initialEmail:l})=>{let[s,u]=fe("email"),[c,p]=fe(""),[f,m]=fe(null),[h,y]=fe(0),[v,x]=fe(null),[S,C]=fe([]),[N,D]=fe(null),[k,W]=fe(Date.now());if(Re(()=>{e&&(m(null),a?(p(a.email),u("status"),ur(r,a.token).then(x).catch(T=>m(T instanceof Error?T.message:String(T)))):(p(l??""),u("email")));},[e]),Re(()=>{if(h<=Date.now())return;let T=setInterval(()=>W(Date.now()),1e3);return ()=>clearInterval(T)},[h]),!e)return null;let q=Math.max(0,Math.ceil((h-k)/1e3)),j=async()=>{let T=c.trim();if(!T||!T.includes("@")){m("Enter a valid email address.");return}m(null),u("waiting");try{let H=await i(),oe=await jo(r,H,T);y(Date.now()+Fu);let d=await rn(r,oe);if(d.status==="verified"){let le={token:d.chat_token,expiresAt:d.expires_at,email:T};o(le);try{let ce=await ur(r,le.token);if(x(ce),ce.total_vtokens_remaining>0||ce.subscription_status==="active")u("status");else {let te=await sr(r,{token:le.token,type:"bearer"});C(te),u("plans");}}catch{u("status");}}else d.status==="timed_out"?(m("That link expired before it was clicked. You can send a new one below."),u("email")):(m("Something went wrong confirming your login. Please try again."),u("email"));}catch(H){m(H instanceof Error?H.message:String(H)),u("email");}},b=async()=>{if(a){m(null);try{let T=await sr(r,{token:a.token,type:"bearer"});C(T),u("plans");}catch(T){m(T instanceof Error?T.message:String(T));}}},G=async T=>{if(a){m(null),D(T.id);try{let H=window.location.href,{checkoutUrl:oe,pendingId:d}=await Wo(r,a.token,T.id,H,H);Oo({pendingId:d,planId:T.id}),window.location.href=oe;}catch(H){m(H instanceof Error?H.message:String(H)),D(null);}}},V=n?"cvz-text-gray-100":"cvz-text-gray-800",z=n?"cvz-text-gray-400":"cvz-text-gray-500",P=n?"cvz-bg-gray-800":"cvz-bg-white",L=n?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100":"cvz-bg-white cvz-border-gray-300 cvz-text-gray-800",F="cvz-bg-blue-600 hover:cvz-bg-blue-700 cvz-text-white disabled:cvz-opacity-50 disabled:cvz-cursor-not-allowed";return w("div",{className:"cvz-absolute cvz-inset-0 cvz-z-20 cvz-flex cvz-flex-col",children:w("div",{className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-5 cvz-flex cvz-flex-col cvz-gap-4 ${P}`,children:[w("div",{className:"cvz-flex cvz-justify-between cvz-items-start",children:[w("h3",{className:`cvz-font-bold cvz-text-lg ${V}`,children:"Account"}),w("button",{onClick:t,className:`cvz-p-1 cvz-rounded-md ${n?"cvz-text-gray-400 hover:cvz-text-white":"cvz-text-gray-400 hover:cvz-text-gray-700"}`,title:"Close",children:"\u2715"})]}),f&&w("p",{className:"cvz-text-sm cvz-text-red-500",children:f}),s==="email"&&w("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[w("p",{className:`cvz-text-sm ${z}`,children:"Enter your email and we'll send you a login link - use it to access a plan you've already bought, or to start a new one."}),w("input",{type:"email",value:c,onInput:T=>p(T.target.value),placeholder:"you@example.com",className:`cvz-border cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm ${L}`,onKeyDown:T=>{T.key==="Enter"&&j();}}),w("button",{onClick:j,disabled:q>0,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${F}`,children:q>0?`Wait ${q}s to resend`:"Send login link"})]}),s==="waiting"&&w("div",{className:"cvz-flex cvz-flex-col cvz-gap-2 cvz-items-center cvz-py-6 cvz-text-center",children:[w("p",{className:`cvz-text-sm ${V}`,children:"Check your email"}),w("p",{className:`cvz-text-xs ${z}`,children:["We sent a login link to ",c,". Click it to continue - this can stay open while you do."]})]}),s==="status"&&w("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[w("p",{className:`cvz-text-sm ${V}`,children:["Signed in as ",a?.email]}),v?w("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-text-sm cvz-flex cvz-flex-col cvz-gap-1 ${n?"cvz-border-gray-600":"cvz-border-gray-200"} ${V}`,children:[w("span",{children:[Math.floor(v.total_vtokens_remaining).toLocaleString()," tokens left"]}),v.plan_name&&w("span",{className:z,children:["Plan: ",v.plan_name]}),v.current_period_end&&w("span",{className:z,children:["Renews ",Uu(v.current_period_end)]})]}):w("p",{className:`cvz-text-sm ${z}`,children:"Loading your balance..."}),w("button",{onClick:b,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${F}`,children:"Buy more"}),w("button",{onClick:()=>{u("email"),m(null);},className:`cvz-text-xs cvz-underline cvz-self-start ${z}`,children:"Use a different email"})]}),s==="plans"&&w("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[S.length===0&&w("p",{className:`cvz-text-sm ${z}`,children:"No plans are available right now."}),S.map(T=>w("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-flex cvz-justify-between cvz-items-center ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:[w("div",{children:[w("p",{className:`cvz-text-sm cvz-font-medium ${V}`,children:T.name}),w("p",{className:`cvz-text-xs ${z}`,children:[Ou(T.price_cents,T.currency),T.kind==="subscription"?" / period":""," \xB7 ",T.included_vtokens.toLocaleString()," tokens"]})]}),w("button",{onClick:()=>G(T),disabled:N===T.id,className:`cvz-rounded-lg cvz-px-3 cvz-py-1.5 cvz-text-sm cvz-font-medium ${F}`,children:N===T.id?"Redirecting...":"Buy"})]},T.id)),a&&w("button",{onClick:()=>u("status"),className:`cvz-text-xs cvz-underline cvz-self-start ${z}`,children:"Back"})]})]})})};function ju(e,t){for(var n in t)e[n]=t[n];return e}function $o(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return  true;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return  true;return  false}function ea(e,t){var n=t(),r=fe({t:{__:n,u:t}}),i=r[0].t,a=r[1];return To(function(){i.__=n,i.u=t,cr(i)&&a({t:i});},[e,n,t]),Re(function(){return cr(i)&&a({t:i}),e(function(){cr(i)&&a({t:i});})},[e]),n}function cr(e){try{return !((t=e.__)===(n=e.u())&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return  true}var t,n;}function qo(e,t){this.props=e,this.context=t;}(qo.prototype=new _e).isPureReactComponent=true,qo.prototype.shouldComponentUpdate=function(e,t){return $o(this.props,e)||$o(this.state,t)};var Yo=O.__b;O.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Yo&&Yo(e);};var Wu=O.__e;O.__e=function(e,t,n,r){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k||[]),i.__c(e,t)}Wu(e,t,n,r);};var Xo=O.unmount;function ta(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c();}),e.__c.__H=null),(e=ju({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=true,e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return ta(r,t,n)})),e}function na(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return na(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=true,e.__c.__P=n)),e}function pr(){this.__u=0,this.o=null,this.__b=null;}function ra(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function on(){this.i=null,this.l=null;}O.unmount=function(e){var t=e.__c;t&&(t.__z=true),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Xo&&Xo(e);},(pr.prototype=new _e).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var i=ra(r.__v),a=false,o=function(){a||r.__z||(a=true,n.__R=null,i?i(s):s());};n.__R=o;var l=n.__P;n.__P=null;var s=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=na(u,u.__c.__P,u.__c.__O);}var c;for(r.setState({__a:r.__b=null});c=r.o.pop();)c.__P=l,c.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o);},pr.prototype.componentWillUnmount=function(){this.o=[];},pr.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=ta(this.__b,n,r.__O=r.__P);}this.__b=null;}var i=t.__a&&Ce(be,null,e.fallback);return i&&(i.__u&=-33),[Ce(be,null,t.__a?null:e.children),i]};var Go=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2];}};(on.prototype=new _e).__a=function(e){var t=this,n=ra(t.__v),r=t.l.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),Go(t,e,r)):i();};n?n(a):a();}},on.prototype.render=function(e){this.i=null,this.l=new Map;var t=It(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},on.prototype.componentDidUpdate=on.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Go(e,n,t);});};var Vu=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,$u=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,qu=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Yu=/[A-Z0-9]/g,Xu=typeof document<"u",Gu=function(e){return (typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};_e.prototype.isReactComponent=true,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(_e.prototype,e,{configurable:true,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:true,writable:true,value:t});}});});var Ko=O.event;O.event=function(e){return Ko&&(e=Ko(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var Ku={configurable:true,get:function(){return this.class}},Jo=O.vnode;O.vnode=function(e){typeof e.type=="string"&&(function(t){var n=t.props,r=t.type,i={},a=r.indexOf("-")==-1;for(var o in n){var l=n[o];if(!(o==="value"&&"defaultValue"in n&&l==null||Xu&&o==="children"&&r==="noscript"||o==="class"||o==="className")){var s=o.toLowerCase();o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&l===true?l="":s==="translate"&&l==="no"?l=false:s[0]==="o"&&s[1]==="n"?s==="ondoubleclick"?o="ondblclick":s!=="onchange"||r!=="input"&&r!=="textarea"||Gu(n.type)?s==="onfocus"?o="onfocusin":s==="onblur"?o="onfocusout":qu.test(o)&&(o=s):s=o="oninput":a&&$u.test(o)?o=o.replace(Yu,"-$&").toLowerCase():l===null&&(l=void 0),s==="oninput"&&i[o=s]&&(o="oninputCapture"),i[o]=l;}}r=="select"&&(i.multiple&&Array.isArray(i.value)&&(i.value=It(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1;})),i.defaultValue!=null&&(i.value=It(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value;}))),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",Ku)):n.className&&(i.class=i.className=n.className),t.props=i;})(e),e.$$typeof=Vu,Jo&&Jo(e);};var Qo=O.__r;O.__r=function(e){Qo&&Qo(e),e.__c;};var Zo=O.diffed;O.diffed=function(e){Zo&&Zo(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value);};async function*Ju(e){let t=new TextDecoder,n="",r=0;try{for(;;){let{done:i,value:a}=await e.read();if(i){if(n.trim()){let l=Qu(n);for(let s of l)r+=1,yield s;}break}n+=t.decode(a,{stream:!0});let o=n.split(`
`);n=o.pop()||"";for(let l of o)if(l.startsWith("data: ")){let s=l.slice(6).trim();if(s)try{let u=JSON.parse(s);r+=1,yield u;}catch(u){console.error("Failed to parse SSE data:",s,u);}}}}finally{e.releaseLock(),console.log(`parseSSEStream: yielded ${r} events`);}}function Qu(e){let t=[],n=e.split(`
`);for(let r of n)if(r.startsWith("data: ")){let i=r.slice(6).trim();if(i)try{t.push(JSON.parse(i));}catch(a){console.error("Failed to parse SSE data:",i,a);}}return t}async function*oa(e){let{baseUrl:t,message:n,sessionId:r,persona:i,authToken:a,authType:o,maxTokens:l,clientId:s,extraContext:u,abortSignal:c}=e,p={"Content-Type":"application/json",Accept:"text/event-stream"};s&&(p["X-Client-Id"]=s),o==="apiKey"?p["X-API-Key"]=a:p.Authorization=`Bearer ${a}`;let f={message:n};!r&&o==="apiKey"&&i&&(f.persona=typeof i=="string"?{alias:i}:i),r&&(f.session=r),l&&(f.max_tokens=l),u&&Object.assign(f,u);let m;r?m="/api/chat/continuation/stream":m="/api/chat/completion/stream";let h=await fetch(`${t}${m}`,{method:"POST",headers:p,body:JSON.stringify(f),signal:c});if(!h.ok){let v=`HTTP ${h.status}: ${h.statusText}`;try{console.error(`error from completion: ${h.status} : ${h.statusText}`),v=(await h.json()).message||v;}catch{}yield {type:"error",message:`${h.status} ${v}`};return}if(!h.body){yield {type:"error",message:"No response body received"};return}let y=h.body.getReader();yield*Ju(y);}var hr="cvz_client_id",an="cvz_client_id_v2",sa="cvz_client_id_captcha_gated",aa="cvz_client_id_last_forced_reissue",ua="issue_client_id";var Zu=["invalid client_id","client_id does not belong to this account"];function ec(e){return typeof e=="object"&&e!==null&&"provider"in e&&"site_key"in e}function ln(e){try{return localStorage.getItem(e)}catch{return null}}function sn(e,t){try{localStorage.setItem(e,t);}catch{}}function dr(e){try{localStorage.removeItem(e);}catch{}}function tc(){return ln(sa)==="1"}function nc(e){sn(sa,e?"1":"0");}function ca(e){let t=e instanceof Error?e.message:typeof e=="string"?e:"";return Zu.some(n=>t.includes(n))}function rc(){let e=ln(hr);if(e)return e;let t=crypto.randomUUID();return sn(hr,t),t}var fr=null;function ic(e){return fr||(fr=new Promise((t,n)=>{let r=document.createElement("script");r.src=`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(e)}`,r.async=true,r.onload=()=>t(),r.onerror=()=>n(new Error("failed to load reCAPTCHA script")),document.head.appendChild(r);})),fr}async function oc(e){return await ic(e),new Promise((t,n)=>{if(!window.grecaptcha){n(new Error("grecaptcha unavailable after script load"));return}window.grecaptcha.ready(()=>{window.grecaptcha.execute(e,{action:ua}).then(t,n);});})}var mr=null;function ac(){return mr||(mr=new Promise((e,t)=>{let n=document.createElement("script");n.src="https://challenges.cloudflare.com/turnstile/v0/api.js",n.async=true,n.onload=()=>e(),n.onerror=()=>t(new Error("failed to load Turnstile script")),document.head.appendChild(n);})),mr}async function lc(e,t){return await ac(),new Promise((n,r)=>{if(!window.turnstile){r(new Error("turnstile unavailable after script load"));return}let i=t?.getContainer?.()??null,a=i??document.createElement("div"),o=!i;o?(a.style.position="fixed",a.style.top="-9999px",a.style.left="-9999px",document.body.appendChild(a)):a.replaceChildren();let l,s=()=>{t?.onPending?.(false),l&&window.turnstile?.remove(l),o&&a.remove();};t?.onPending?.(true),l=window.turnstile.render(a,{sitekey:e,action:ua,callback:u=>{n(u),s();},"error-callback":u=>{r(u instanceof Error?u:new Error("Turnstile challenge failed")),s();}});})}function sc(e,t,n){return e==="recaptcha_v3"?oc(t):lc(t,n)}function la(e,t,n){return fetch(`${e}/api/chat/client_id`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_public_id:t,...n?{recaptcha_token:n}:{}})})}async function gr(e,t,n){if(!t)return rc();let r=ln(an);if(r)return r;try{let i=await la(e,t),a=!1;if(i.status===400){let l=await i.json();if(ec(l)){a=!0;let s=await sc(l.provider,l.site_key,n);i=await la(e,t,s);}else return console.warn("cvzWidget: client_id issuance failed (400)"),null}if(!i.ok)return console.warn(`cvzWidget: client_id issuance failed (${i.status})`),null;nc(a);let o=await i.json();return sn(an,o.client_id),dr(hr),o.client_id}catch(i){return console.warn("cvzWidget: client_id issuance failed",i),null}}async function pa(e,t,n){if(!t)return null;if(!tc()){let r=Number(ln(aa)??"0");if(Date.now()-r<36e5)return dr(an),null}return sn(aa,String(Date.now())),dr(an),gr(e,t,n)}var fa="cvz_chat_history";function uc(e){let t=new TextEncoder().encode(e),n="";return t.forEach(r=>{n+=String.fromCharCode(r);}),btoa(n)}function cc(e){let t=atob(e),n=Uint8Array.from(t,r=>r.charCodeAt(0));return new TextDecoder().decode(n)}async function ma(e,t){try{localStorage.setItem(fa,uc(JSON.stringify({sessionId:e,messages:t})));}catch{}}async function ha(){let e={sessionId:"",messages:[]};try{let t=localStorage.getItem(fa);if(!t)return e;let n;try{n=JSON.parse(cc(t));}catch{n=JSON.parse(t);}return {sessionId:n.sessionId||"",messages:n.messages||[]}}catch{return e}}var un="https://chat.converzen.de",da="Hi, how can I help you ?";function ga(e){let t=new Set,n=null,r={getContainer:()=>n,onPending:z=>o({captchaPending:z})},i={messages:[],sessionId:null,isOpen:e.autoOpen??false,isLoading:false,isStreaming:false,streamingMessage:"",thinkingMessage:"",activeToolCall:null,captchaPending:false,endUserAuth:(()=>{let z=Do();return Ge(z)?z:null})(),showAuthNudge:false};function a(){t.forEach(z=>z());}function o(z){i={...i,...z},a();}let l={current:false},s=e.persistMessages!==false,u=e.onSaveMessages??(s?ma:async()=>{}),c=e.onLoadMessages??(s?ha:async()=>({sessionId:"",messages:[]})),p=null,f=null,m=null,h="",y=null,v="",x=null;function S(){if(!m){let z=e.chatUrl||un;m=gr(z,e.publicId,r);}return m}async function C(z=false){if(e.apiKey)return {token:e.apiKey,type:"apiKey"};if(!e.getToken)throw new Error("Either apiKey or getToken must be provided");let P=e.getToken;if(!z){let T=Date.now()/1e3+5,H=f;if(H&&(H.expiresAt==null||H.expiresAt>T))return {token:H.token,type:"bearer"}}let L=async()=>{let T=await P(await S());return typeof T=="string"?{token:T,expiresAt:void 0}:T},F;try{F=await L();}catch(T){if(!ca(T))throw T;let H=e.chatUrl||un;m=Promise.resolve(await pa(H,e.publicId,r)),F=await L();}return f=F,{token:F.token,type:"bearer"}}async function N(z=false){return !z&&Ge(i.endUserAuth)?{token:i.endUserAuth.token,type:"bearer"}:C(z)}async function D(z,P,L,F=0){try{let H=await N(F>0),oe=e.chatUrl||un,d=i.sessionId||"",le=oa({baseUrl:oe,sessionId:d,message:z.content,persona:e.persona,authToken:H.token,authType:H.type,clientId:await S()??void 0,extraContext:e.extraContext,abortSignal:L.signal}),ce="",g=!1,te=!1,ye=0,kt=350,qe=async()=>{if(!ye)return;let Y=kt-(Date.now()-ye);Y>0&&await new Promise(pe=>setTimeout(pe,Y));};for await(let Y of le){if(L.signal.aborted)break;switch(Y.type){case "session_created":case "session_continued":Y.session_id&&Y.session_id!==d&&(d=Y.session_id,o({sessionId:Y.session_id}));break;case "thinking":Y.content&&(te||(ye=Date.now()),te=!0,v+=Y.content,x||(x=requestAnimationFrame(()=>{let pe=v;v="",x=null,o({thinkingMessage:i.thinkingMessage+pe});})));break;case "tool_call_started":Y.name&&(await qe(),te=!0,ye=Date.now(),o({activeToolCall:Y.name}));break;case "token":Y.content&&(te&&(await qe(),te=!1,ye=0,v="",o({thinkingMessage:"",activeToolCall:null})),h+=Y.content,ce+=Y.content,y||(y=requestAnimationFrame(()=>{let pe=h;h="",y=null,o({streamingMessage:i.streamingMessage+pe});})));break;case "done":{if(ce&&d){l.current=!0;let pe={content:ce,role:"ASSISTANT",createdAt:new Date().toISOString(),sources:Y.sources},se=[...P,pe];o({messages:se,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),v="",setTimeout(()=>{l.current=!1;},0),await u(d,se);}else o({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),v="";p=null;return}case "error":{let pe=Y.code||"",se=Y.message||"",Se=F===0&&Ge(i.endUserAuth);if((pe==="auth_failed"||se.includes("401")||se.includes("403")||se.includes("Unauthorized")||se.includes("Forbidden"))&&F<1&&(e.getToken&&!e.apiKey||Se)){f=null,Se&&G(),g=!0;break}if(pe==="rate_limited"&&e.endUserLicensing){o({showAuthNudge:!0,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),v="",p=null;return}let Oe={content:se||"An error occurred",role:"SYSTEM",createdAt:new Date().toISOString()},ct=[...P,Oe];o({messages:ct,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),v="",await u(d||"",ct),p=null;return}}}if(g&&F<1)return D(z,P,L,F+1);!L.signal.aborted&&!g&&(o({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),v="",p=null);}catch(H){let oe=F===0&&Ge(i.endUserAuth);if(H instanceof Error&&(H.message.includes("401")||H.message.includes("403"))&&F<1&&(e.getToken&&!e.apiKey||oe))return f=null,oe&&G(),D(z,P,L,F+1);throw H}}async function k(z){if(!z.trim()||i.isStreaming)return;p&&p.abort();let P={content:z.trim(),role:"USER",createdAt:new Date().toISOString()},L=[...i.messages,P];o({messages:L,isLoading:true,isStreaming:true,streamingMessage:"",thinkingMessage:"",activeToolCall:null}),v="";try{let F=new AbortController;p=F,await D(P,L,F);}catch(F){if(F instanceof Error&&F.name==="AbortError"){o({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),v="",p=null;return}let T={content:`Error: ${F instanceof Error?F.message:"Failed to send message"}`,role:"SYSTEM",createdAt:new Date().toISOString()},H=[...L,T];o({messages:H,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),v="",await u(i.sessionId||"",H),p=null;}}async function W(){p&&(p.abort(),p=null),o({messages:[{content:e.initialGreeting||da,role:"SYSTEM",createdAt:new Date().toISOString()}],streamingMessage:"",thinkingMessage:"",activeToolCall:null,sessionId:null,isStreaming:false,isLoading:false}),v="",await u("",[]);}function q(){o({isOpen:true}),S();}function j(){o({isOpen:false});}function b(z){Mo(z),o({endUserAuth:z,showAuthNudge:false});}function G(){No(),o({endUserAuth:null});}function V(z){n=z;}if((async()=>{try{let z=await c(),P=[],L=null;z&&typeof z=="object"&&"messages"in z&&"sessionId"in z?(P=z.messages||[],L=z.sessionId||null):Array.isArray(z)&&(P=z),P.length===0&&(P=[{content:e.initialGreeting||da,role:"SYSTEM",createdAt:new Date().toISOString()}]),o({sessionId:L,messages:P});}catch(z){console.error("Failed to load messages:",z);}})(),e.endUserLicensing){let z=Uo();if(z){let P=e.chatUrl||un;rn(P,z.pendingId).finally(()=>{Bo();});}}return {getState:()=>i,subscribe(z){return t.add(z),()=>t.delete(z)},sendMessage:k,open:q,close:j,clearHistory:W,authenticateEndUser:b,deauthenticateEndUser:G,getTenantAuthToken:C,setCaptchaContainer:V,isFinalizingRef:l}}function ya(e){let t=tn(()=>ga(e),[e]);return {...ea(t.subscribe,t.getState),sendMessage:t.sendMessage,open:t.open,close:t.close,clearHistory:t.clearHistory,authenticateEndUser:t.authenticateEndUser,deauthenticateEndUser:t.deauthenticateEndUser,getTenantAuthToken:t.getTenantAuthToken,setCaptchaContainer:t.setCaptchaContainer,isFinalizingRef:t.isFinalizingRef}}var pc="calc(100vw - 2rem)",fc="calc(100dvh - 8rem)",xa=e=>{if(!e?.position)return {bottom:"1rem",right:"1rem"};if(typeof e.position=="string")switch(e.position){case "bottom-right":return {bottom:"1rem",right:"1rem"};case "bottom-left":return {bottom:"1rem",left:"1rem"};case "top-right":return {top:"1rem",right:"1rem"};case "top-left":return {top:"1rem",left:"1rem"};default:return {bottom:"1rem",right:"1rem"}}else {let t={};return e.position.bottom&&(t.bottom=e.position.bottom),e.position.top&&(t.top=e.position.top),e.position.left&&(t.left=e.position.left),e.position.right&&(t.right=e.position.right),t}},ba=e=>{let t={maxWidth:pc,maxHeight:fc};if(!e?.dialogSize)return {width:"350px",height:"500px",...t};if(typeof e.dialogSize=="string")switch(e.dialogSize){case "small":return {width:"300px",height:"400px",...t};case "medium":return {width:"350px",height:"500px",...t};case "large":return {width:"400px",height:"600px",...t};default:return {width:"350px",height:"500px",...t}}else return {width:`${Math.max(250,e.dialogSize.width)}px`,height:`${Math.max(300,e.dialogSize.height)}px`,...t}},va=e=>e?.frameColor||"#E5E7EB",wa=(e,t)=>{let n=e?.buttonColor;return t?{backgroundColor:n?.open||"#1F2937"}:{backgroundColor:n?.normal||"#2563EB","--hover-color":n?.hover||"#1D4ED8"}};function ka(e,t){let n={};return (e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===false?"":" ")).trim()}var mc=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,hc=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,dc={};function cn(e,t){return ((dc).jsx?hc:mc).test(e)}var gc=/[ \t\n\f\r]/g;function yr(e){return typeof e=="object"?e.type==="text"?_a(e.value):false:_a(e)}function _a(e){return e.replace(gc,"")===""}var De=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r);}};De.prototype.normal={};De.prototype.property={};De.prototype.space=void 0;function xr(e,t){let n={},r={};for(let i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new De(n,r,t)}function At(e){return e.toLowerCase()}var ue=class{constructor(t,n){this.attribute=n,this.property=t;}};ue.prototype.attribute="";ue.prototype.booleanish=false;ue.prototype.boolean=false;ue.prototype.commaOrSpaceSeparated=false;ue.prototype.commaSeparated=false;ue.prototype.defined=false;ue.prototype.mustUseProperty=false;ue.prototype.number=false;ue.prototype.overloadedBoolean=false;ue.prototype.property="";ue.prototype.spaceSeparated=false;ue.prototype.space=void 0;var Tt={};no(Tt,{boolean:()=>U,booleanish:()=>Z,commaOrSpaceSeparated:()=>ge,commaSeparated:()=>Me,number:()=>E,overloadedBoolean:()=>pn,spaceSeparated:()=>K});var yc=0,U=Ke(),Z=Ke(),pn=Ke(),E=Ke(),K=Ke(),Me=Ke(),ge=Ke();function Ke(){return 2**++yc}var br=Object.keys(Tt),Je=class extends ue{constructor(t,n,r,i){let a=-1;if(super(t,n),za(this,"space",i),typeof r=="number")for(;++a<br.length;){let o=br[a];za(this,br[a],(r&Tt[o])===Tt[o]);}}};Je.prototype.defined=true;function za(e,t,n){n&&(e[t]=n);}function ve(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new Je(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=true),t[r]=a,n[At(r)]=r,n[At(a.attribute)]=r;}return new De(t,n,e.space)}var vr=ve({properties:{ariaActiveDescendant:null,ariaAtomic:Z,ariaAutoComplete:null,ariaBusy:Z,ariaChecked:Z,ariaColCount:E,ariaColIndex:E,ariaColSpan:E,ariaControls:K,ariaCurrent:null,ariaDescribedBy:K,ariaDetails:null,ariaDisabled:Z,ariaDropEffect:K,ariaErrorMessage:null,ariaExpanded:Z,ariaFlowTo:K,ariaGrabbed:Z,ariaHasPopup:null,ariaHidden:Z,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:K,ariaLevel:E,ariaLive:null,ariaModal:Z,ariaMultiLine:Z,ariaMultiSelectable:Z,ariaOrientation:null,ariaOwns:K,ariaPlaceholder:null,ariaPosInSet:E,ariaPressed:Z,ariaReadOnly:Z,ariaRelevant:null,ariaRequired:Z,ariaRoleDescription:K,ariaRowCount:E,ariaRowIndex:E,ariaRowSpan:E,ariaSelected:Z,ariaSetSize:E,ariaSort:null,ariaValueMax:E,ariaValueMin:E,ariaValueNow:E,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function fn(e,t){return t in e?e[t]:t}function mn(e,t){return fn(e,t.toLowerCase())}var Sa=ve({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Me,acceptCharset:K,accessKey:K,action:null,allow:null,allowFullScreen:U,allowPaymentRequest:U,allowUserMedia:U,alpha:U,alt:null,as:null,async:U,autoCapitalize:null,autoComplete:K,autoFocus:U,autoPlay:U,blocking:K,capture:null,charSet:null,checked:U,cite:null,className:K,closedBy:null,colorSpace:null,cols:E,colSpan:E,command:null,commandFor:null,content:null,contentEditable:Z,controls:U,controlsList:K,coords:E|Me,crossOrigin:null,data:null,dateTime:null,decoding:null,default:U,defer:U,dir:null,dirName:null,disabled:U,download:pn,draggable:Z,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:U,formTarget:null,headers:K,height:E,hidden:pn,high:E,href:null,hrefLang:null,htmlFor:K,httpEquiv:K,id:null,imageSizes:null,imageSrcSet:null,inert:U,inputMode:null,integrity:null,is:null,isMap:U,itemId:null,itemProp:K,itemRef:K,itemScope:U,itemType:K,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:U,low:E,manifest:null,max:null,maxLength:E,media:null,method:null,min:null,minLength:E,multiple:U,muted:U,name:null,nonce:null,noModule:U,noValidate:U,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:U,optimum:E,pattern:null,ping:K,placeholder:null,playsInline:U,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:U,referrerPolicy:null,rel:K,required:U,reversed:U,rows:E,rowSpan:E,sandbox:K,scope:null,scoped:U,seamless:U,selected:U,shadowRootClonable:U,shadowRootCustomElementRegistry:U,shadowRootDelegatesFocus:U,shadowRootMode:null,shadowRootSerializable:U,shape:null,size:E,sizes:null,slot:null,span:E,spellCheck:Z,src:null,srcDoc:null,srcLang:null,srcSet:null,start:E,step:null,style:null,tabIndex:E,target:null,title:null,translate:null,type:null,typeMustMatch:U,useMap:null,value:Z,width:E,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:K,axis:null,background:null,bgColor:null,border:E,borderColor:null,bottomMargin:E,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:U,declare:U,event:null,face:null,frame:null,frameBorder:null,hSpace:E,leftMargin:E,link:null,longDesc:null,lowSrc:null,marginHeight:E,marginWidth:E,noResize:U,noHref:U,noShade:U,noWrap:U,object:null,profile:null,prompt:null,rev:null,rightMargin:E,rules:null,scheme:null,scrolling:Z,standby:null,summary:null,text:null,topMargin:E,valueType:null,version:null,vAlign:null,vLink:null,vSpace:E,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:U,disablePictureInPicture:U,disableRemotePlayback:U,exportParts:Me,part:K,prefix:null,property:null,results:E,security:null,unselectable:null},space:"html",transform:mn});var Ca=ve({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ge,accentHeight:E,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:E,amplitude:E,arabicForm:null,ascent:E,attributeName:null,attributeType:null,azimuth:E,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:E,by:null,calcMode:null,capHeight:E,className:K,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:E,diffuseConstant:E,direction:null,display:null,dur:null,divisor:E,dominantBaseline:null,download:U,dx:null,dy:null,edgeMode:null,editable:null,elevation:E,enableBackground:null,end:null,event:null,exponent:E,externalResourcesRequired:null,fill:null,fillOpacity:E,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Me,g2:Me,glyphName:Me,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:E,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:E,horizOriginX:E,horizOriginY:E,id:null,ideographic:E,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:E,k:E,k1:E,k2:E,k3:E,k4:E,kernelMatrix:ge,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:E,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:E,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:E,overlineThickness:E,paintOrder:null,panose1:null,path:null,pathLength:E,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:K,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:E,pointsAtY:E,pointsAtZ:E,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ge,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ge,rev:ge,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ge,requiredFeatures:ge,requiredFonts:ge,requiredFormats:ge,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:E,specularExponent:E,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:E,strikethroughThickness:E,string:null,stroke:null,strokeDashArray:ge,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:E,strokeOpacity:E,strokeWidth:null,style:null,surfaceScale:E,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ge,tabIndex:E,tableValues:null,target:null,targetX:E,targetY:E,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ge,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:E,underlineThickness:E,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:E,values:null,vAlphabetic:E,vMathematical:E,vectorEffect:null,vHanging:E,vIdeographic:E,version:null,vertAdvY:E,vertOriginX:E,vertOriginY:E,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:E,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:fn});var wr=ve({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return "xlink:"+t.slice(5).toLowerCase()}});var kr=ve({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:mn});var _r=ve({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return "xml:"+t.slice(3).toLowerCase()}});var zr={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var xc=/[A-Z]/g,Ea=/-[a-z]/g,bc=/^data[-\w.:]+$/i;function Sr(e,t){let n=At(t),r=t,i=ue;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&bc.test(t)){if(t.charAt(4)==="-"){let a=t.slice(5).replace(Ea,wc);r="data"+a.charAt(0).toUpperCase()+a.slice(1);}else {let a=t.slice(4);if(!Ea.test(a)){let o=a.replace(xc,vc);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o;}}i=Je;}return new i(r,t)}function vc(e){return "-"+e.toLowerCase()}function wc(e){return e.charAt(1).toUpperCase()}var Ia=xr([vr,Sa,wr,kr,_r],"html"),hn=xr([vr,Ca,wr,kr,_r],"svg");function Aa(e){return e.join(" ").trim()}var Va=ro(Ba());var gn=Ha("end"),mt=Ha("start");function Ha(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return {line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Ir(e){let t=mt(e),n=gn(e);if(t&&n)return {start:t,end:n}}function Be(e){return !e||typeof e!="object"?"":"position"in e||"type"in e?ja(e.position):"start"in e||"end"in e?ja(e):"line"in e||"column"in e?Ar(e):""}function Ar(e){return Wa(e&&e.line)+":"+Wa(e&&e.column)}function ja(e){return Ar(e&&e.start)+"-"+Ar(e&&e.end)}function Wa(e){return e&&typeof e=="number"?e:1}var re=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",a={},o=false;if(n&&("line"in n&&"column"in n?a={place:n}:"start"in n&&"end"in n?a={place:n}:"type"in n?a={ancestors:[n],place:n.position}:a={...n}),typeof t=="string"?i=t:!a.cause&&t&&(o=true,i=t.message,a.cause=t),!a.ruleId&&!a.source&&typeof r=="string"){let s=r.indexOf(":");s===-1?a.ruleId=r:(a.source=r.slice(0,s),a.ruleId=r.slice(s+1));}if(!a.place&&a.ancestors&&a.ancestors){let s=a.ancestors[a.ancestors.length-1];s&&(a.place=s.position);}let l=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Be(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0;}};re.prototype.file="";re.prototype.name="";re.prototype.reason="";re.prototype.message="";re.prototype.stack="";re.prototype.column=void 0;re.prototype.line=void 0;re.prototype.ancestors=void 0;re.prototype.cause=void 0;re.prototype.fatal=void 0;re.prototype.place=void 0;re.prototype.ruleId=void 0;re.prototype.source=void 0;var Tr={}.hasOwnProperty,Yc=new Map,Xc=/[A-Z]/g,Gc=new Set(["table","tbody","thead","tfoot","tr"]),Kc=new Set(["td","th"]),$a="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Pr(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=ip(n,t.jsxDEV);}else {if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=rp(n,t.jsx,t.jsxs);}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||false,passKeys:t.passKeys!==false,passNode:t.passNode||false,schema:t.space==="svg"?hn:Ia,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==false},a=qa(i,e,void 0);return a&&typeof a!="string"?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function qa(e,t,n){if(t.type==="element")return Jc(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Qc(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return ep(e,t,n);if(t.type==="mdxjsEsm")return Zc(e,t);if(t.type==="root")return tp(e,t,n);if(t.type==="text")return np(e,t)}function Jc(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=hn,e.schema=i),e.ancestors.push(t);let a=Xa(e,t.tagName,false),o=op(e,t),l=Rr(e,t);return Gc.has(t.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!yr(s):true})),Ya(e,o,a,t),Lr(o,l),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Qc(e,t){if(t.data&&t.data.estree&&e.evaluater){let r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Lt(e,t.position);}function Zc(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Lt(e,t.position);}function ep(e,t,n){let r=e.schema,i=r;t.name==="svg"&&r.space==="html"&&(i=hn,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:Xa(e,t.name,true),o=ap(e,t),l=Rr(e,t);return Ya(e,o,a,t),Lr(o,l),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function tp(e,t,n){let r={};return Lr(r,Rr(e,t)),e.create(t,e.Fragment,r,n)}function np(e,t){return t.value}function Ya(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r);}function Lr(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n);}}function rp(e,t,n){return r;function r(i,a,o,l){let u=Array.isArray(o.children)?n:t;return l?u(a,o,l):u(a,o)}}function ip(e,t){return n;function n(r,i,a,o){let l=Array.isArray(a.children),s=mt(r);return t(i,a,o,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function op(e,t){let n={},r,i;for(i in t.properties)if(i!=="children"&&Tr.call(t.properties,i)){let a=lp(e,i,t.properties[i]);if(a){let[o,l]=a;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&Kc.has(t.tagName)?r=l:n[o]=l;}}if(r){let a=n.style||(n.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r;}return n}function ap(e,t){let n={};for(let r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){let a=r.data.estree.body[0];a.type;let o=a.expression;o.type;let l=o.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument));}else Lt(e,t.position);else {let i=r.name,a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){let l=r.value.data.estree.body[0];l.type,a=e.evaluater.evaluateExpression(l.expression);}else Lt(e,t.position);else a=r.value===null?true:r.value;n[i]=a;}return n}function Rr(e,t){let n=[],r=-1,i=e.passKeys?new Map:Yc;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let s=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(s){let u=i.get(s)||0;o=s+"-"+u,i.set(s,u+1);}}let l=qa(e,a,o);l!==void 0&&n.push(l);}return n}function lp(e,t,n){let r=Sr(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?ka(n):Aa(n)),r.property==="style"){let i=typeof n=="object"?n:sp(e,String(n));return e.stylePropertyNameCase==="css"&&(i=up(i)),["style",i]}return [e.elementAttributeNameCase==="react"&&r.space?zr[r.property]||r.property:r.attribute,n]}}function sp(e,t){try{return (0,Va.default)(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return {};let r=n,i=new re("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=$a+"#cannot-parse-style-attribute",i}}function Xa(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){let i=t.split("."),a=-1,o;for(;++a<i.length;){let l=cn(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(a&&l.type==="Literal"),optional:false}:l;}r=o;}else r=cn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){let i=r.value;return Tr.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Lt(e);}function Lt(e,t){let n=new re("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=$a+"#cannot-handle-mdx-estrees-without-createevaluater",n}function up(e){let t={},n;for(n in e)Tr.call(e,n)&&(t[cp(n)]=e[n]);return t}function cp(e){let t=e.replace(Xc,pp);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function pp(e){return "-"+e.toLowerCase()}var Rt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};var fp={};function Ze(e,t){let n=fp,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:true,i=typeof n.includeHtml=="boolean"?n.includeHtml:true;return Ka(e,r,i)}function Ka(e,t,n){if(mp(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Ga(e.children,t,n)}return Array.isArray(e)?Ga(e,t,n):""}function Ga(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=Ka(e[i],t,n);return r.join("")}function mp(e){return !!(e&&typeof e=="object")}var Ja=document.createElement("i");function ht(e){let t="&"+e+";";Ja.innerHTML=t;let n=Ja.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?false:n}function ie(e,t,n,r){let i=e.length,a=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4;}function de(e,t){return e.length>0?(ie(e,e.length,0,t),e):t}var Qa={}.hasOwnProperty;function yn(e){let t={},n=-1;for(;++n<e.length;)hp(t,e[n]);return t}function hp(e,t){let n;for(n in t){let i=(Qa.call(e,n)?e[n]:void 0)||(e[n]={}),a=t[n],o;if(a)for(o in a){Qa.call(i,o)||(i[o]=[]);let l=a[o];dp(i[o],Array.isArray(l)?l:l?[l]:[]);}}}function dp(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);ie(e,0,0,r);}function xn(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function me(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var ae=He(/[A-Za-z]/),ee=He(/[\dA-Za-z]/),Za=He(/[#-'*+\--9=?A-Z^-~]/);function et(e){return e!==null&&(e<32||e===127)}var Dt=He(/\d/),el=He(/[\dA-Fa-f]/),tl=He(/[!-/:-@[-`{-~]/);function A(e){return e!==null&&e<-2}function $(e){return e!==null&&(e<0||e===32)}function M(e){return e===-2||e===-1||e===32}var tt=He(/\p{P}|\p{S}/u),Ee=He(/\s/);function He(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function we(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o="";if(a===37&&ee(e.charCodeAt(n+1))&&ee(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let l=e.charCodeAt(n+1);a<56320&&l>56319&&l<57344?(o=String.fromCharCode(a,l),i=1):o="\uFFFD";}else o=String.fromCharCode(a);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0);}return t.join("")+e.slice(r)}function R(e,t,n,r){let i=r?r-1:Number.POSITIVE_INFINITY,a=0;return o;function o(s){return M(s)?(e.enter(n),l(s)):t(s)}function l(s){return M(s)&&a++<i?(e.consume(s),l):(e.exit(n),t(s))}}var nl={tokenize:gp};function gp(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),R(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),a(l)}function a(l){let s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return A(l)?(e.consume(l),e.exit("chunkText"),a):(e.consume(l),o)}}var il={tokenize:yp},rl={tokenize:xp};function yp(e){let t=this,n=[],r=0,i,a,o;return l;function l(C){if(r<n.length){let N=n[r];return t.containerState=N[1],e.attempt(N[0].continuation,s,u)(C)}return u(C)}function s(C){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&S();let N=t.events.length,D=N,k;for(;D--;)if(t.events[D][0]==="exit"&&t.events[D][1].type==="chunkFlow"){k=t.events[D][1].end;break}x(r);let W=N;for(;W<t.events.length;)t.events[W][1].end={...k},W++;return ie(t.events,D+1,0,t.events.slice(N)),t.events.length=W,u(C)}return l(C)}function u(C){if(r===n.length){if(!i)return f(C);if(i.currentConstruct&&i.currentConstruct.concrete)return h(C);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack);}return t.containerState={},e.check(rl,c,p)(C)}function c(C){return i&&S(),x(r),f(C)}function p(C){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,h(C)}function f(C){return t.containerState={},e.attempt(rl,m,h)(C)}function m(C){return r++,n.push([t.currentConstruct,t.containerState]),f(C)}function h(C){if(C===null){i&&S(),x(0),e.consume(C);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),y(C)}function y(C){if(C===null){v(e.exit("chunkFlow"),true),x(0),e.consume(C);return}return A(C)?(e.consume(C),v(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(C),y)}function v(C,N){let D=t.sliceStream(C);if(N&&D.push(null),C.previous=a,a&&(a.next=C),a=C,i.defineSkip(C.start),i.write(D),t.parser.lazy[C.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<o&&(!i.events[k][1].end||i.events[k][1].end.offset>o))return;let W=t.events.length,q=W,j,b;for(;q--;)if(t.events[q][0]==="exit"&&t.events[q][1].type==="chunkFlow"){if(j){b=t.events[q][1].end;break}j=true;}for(x(r),k=W;k<t.events.length;)t.events[k][1].end={...b},k++;ie(t.events,q+1,0,t.events.slice(W)),t.events.length=k;}}function x(C){let N=n.length;for(;N-- >C;){let D=n[N];t.containerState=D[1],D[0].exit.call(t,e);}n.length=C;}function S(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0;}}function xp(e,t,n){return R(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ne(e){if(e===null||$(e)||Ee(e))return 1;if(tt(e))return 2}function je(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a));}return t}var Mt={name:"attention",resolveAll:bp,tokenize:vp};function bp(e,t){let n=-1,r,i,a,o,l,s,u,c;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let p={...e[r][1].end},f={...e[n][1].start};ol(p,-s),ol(f,s),o={type:s>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},a={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[r][1].end={...o.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=de(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=de(u,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",a,t]]),u=de(u,je(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=de(u,[["exit",a,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(c=2,u=de(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):c=0,ie(e,r-1,n-r+3,u),n=r+u.length-c-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function vp(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Ne(r),a;return o;function o(s){return a=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===a)return e.consume(s),l;let u=e.exit("attentionSequence"),c=Ne(s),p=!c||c===2&&i||n.includes(s),f=!i||i===2&&c||n.includes(r);return u._open=!!(a===42?p:p&&(i||!f)),u._close=!!(a===42?f:f&&(c||!p)),t(s)}}function ol(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t;}var Dr={name:"autolink",tokenize:wp};function wp(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(m){return ae(m)?(e.consume(m),o):m===64?n(m):u(m)}function o(m){return m===43||m===45||m===46||ee(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,s):(m===43||m===45||m===46||ee(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function s(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||et(m)?n(m):(e.consume(m),s)}function u(m){return m===64?(e.consume(m),c):Za(m)?(e.consume(m),u):n(m)}function c(m){return ee(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,c):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||ee(m))&&r++<63){let h=m===45?f:p;return e.consume(m),h}return n(m)}}var Ie={partial:true,tokenize:kp};function kp(e,t,n){return r;function r(a){return M(a)?R(e,i,"linePrefix")(a):i(a)}function i(a){return a===null||A(a)?t(a):n(a)}}var bn={continuation:{tokenize:zp},exit:Sp,name:"blockQuote",tokenize:_p};function _p(e,t,n){let r=this;return i;function i(o){if(o===62){let l=r.containerState;return l.open||(e.enter("blockQuote",{_container:true}),l.open=true),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return n(o)}function a(o){return M(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function zp(e,t,n){let r=this;return i;function i(o){return M(o)?R(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(bn,t,n)(o)}}function Sp(e){e.exit("blockQuote");}var vn={name:"characterEscape",tokenize:Cp};function Cp(e,t,n){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),i}function i(a){return tl(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(a)}}var wn={name:"characterReference",tokenize:Ep};function Ep(e,t,n){let r=this,i=0,a,o;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),s}function s(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),a=31,o=ee,c(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=el,c):(e.enter("characterReferenceValue"),a=7,o=Dt,c(p))}function c(p){if(p===59&&i){let f=e.exit("characterReferenceValue");return o===ee&&!ht(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(p)&&i++<a?(e.consume(p),c):n(p)}}var al={partial:true,tokenize:Ap},kn={concrete:true,name:"codeFenced",tokenize:Ip};function Ip(e,t,n){let r=this,i={partial:true,tokenize:D},a=0,o=0,l;return s;function s(k){return u(k)}function u(k){let W=r.events[r.events.length-1];return a=W&&W[1].type==="linePrefix"?W[2].sliceSerialize(W[1],true).length:0,l=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(k)}function c(k){return k===l?(o++,e.consume(k),c):o<3?n(k):(e.exit("codeFencedFenceSequence"),M(k)?R(e,p,"whitespace")(k):p(k))}function p(k){return k===null||A(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(al,y,N)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(k))}function f(k){return k===null||A(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(k)):M(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),R(e,m,"whitespace")(k)):k===96&&k===l?n(k):(e.consume(k),f)}function m(k){return k===null||A(k)?p(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),h(k))}function h(k){return k===null||A(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(k)):k===96&&k===l?n(k):(e.consume(k),h)}function y(k){return e.attempt(i,N,v)(k)}function v(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),x}function x(k){return a>0&&M(k)?R(e,S,"linePrefix",a+1)(k):S(k)}function S(k){return k===null||A(k)?e.check(al,y,N)(k):(e.enter("codeFlowValue"),C(k))}function C(k){return k===null||A(k)?(e.exit("codeFlowValue"),S(k)):(e.consume(k),C)}function N(k){return e.exit("codeFenced"),t(k)}function D(k,W,q){let j=0;return b;function b(L){return k.enter("lineEnding"),k.consume(L),k.exit("lineEnding"),G}function G(L){return k.enter("codeFencedFence"),M(L)?R(k,V,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(L):V(L)}function V(L){return L===l?(k.enter("codeFencedFenceSequence"),z(L)):q(L)}function z(L){return L===l?(j++,k.consume(L),z):j>=o?(k.exit("codeFencedFenceSequence"),M(L)?R(k,P,"whitespace")(L):P(L)):q(L)}function P(L){return L===null||A(L)?(k.exit("codeFencedFence"),W(L)):q(L)}}}function Ap(e,t,n){let r=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}var Nt={name:"codeIndented",tokenize:Pp},Tp={partial:true,tokenize:Lp};function Pp(e,t,n){let r=this;return i;function i(u){return e.enter("codeIndented"),R(e,a,"linePrefix",5)(u)}function a(u){let c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],true).length>=4?o(u):n(u)}function o(u){return u===null?s(u):A(u)?e.attempt(Tp,o,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||A(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),t(u)}}function Lp(e,t,n){let r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):A(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):R(e,a,"linePrefix",5)(o)}function a(o){let l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(o):A(o)?i(o):n(o)}}var Mr={name:"codeText",previous:Dp,resolve:Rp,tokenize:Mp};function Rp(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Dp(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Mp(e,t,n){let i=0,a,o;return l;function l(f){return e.enter("codeText"),e.enter("codeTextSequence"),s(f)}function s(f){return f===96?(e.consume(f),i++,s):(e.exit("codeTextSequence"),u(f))}function u(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),u):f===96?(o=e.enter("codeTextSequence"),a=0,p(f)):A(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(f))}function c(f){return f===null||f===32||f===96||A(f)?(e.exit("codeTextData"),u(f)):(e.consume(f),c)}function p(f){return f===96?(e.consume(f),a++,p):a===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(o.type="codeTextData",c(f))}}var _n=class{constructor(t){this.left=t?[...t]:[],this.right=[];}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let i=n||0;this.setCursor(Math.trunc(t));let a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ft(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t);}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ft(this.left,t);}unshift(t){this.setCursor(0),this.right.push(t);}unshiftMany(t){this.setCursor(0),Ft(this.right,t.reverse());}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,Number.POSITIVE_INFINITY);Ft(this.right,n.reverse());}else {let n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ft(this.left,n.reverse());}}};function Ft(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4;}function zn(e){let t={},n=-1,r,i,a,o,l,s,u,c=new _n(e);for(;++n<c.length;){for(;n in t;)n=t[n];if(r=c.get(n),n&&r[1].type==="chunkFlow"&&c.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,a=0,a<s.length&&s[a][1].type==="lineEndingBlank"&&(a+=2),a<s.length&&s[a][1].type==="content"))for(;++a<s.length&&s[a][1].type!=="content";)s[a][1].type==="chunkText"&&(s[a][1]._isInFirstContentOfListItem=true,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Np(c,n)),n=t[n],u=true);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=c.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(c.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...c.get(i)[1].start},l=c.slice(i,n),l.unshift(r),c.splice(i,n-i+1,l));}}return ie(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function Np(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=true));let l=o.events,s=[],u={},c,p,f=-1,m=n,h=0,y=0,v=[y];for(;m;){for(;e.get(++i)[1]!==m;);a.push(i),m._tokenizer||(c=r.sliceStream(m),m.next||c.push(null),p&&o.defineSkip(m.start),m._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=true),o.write(c),m._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next;}for(m=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(y=f+1,v.push(y),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(o.events=[],m?(m._tokenizer=void 0,m.previous=void 0):v.pop(),f=v.length;f--;){let x=l.slice(v[f],v[f+1]),S=a.pop();s.push([S,S+x.length-1]),e.splice(S,2,x);}for(s.reverse(),f=-1;++f<s.length;)u[h+s[f][0]]=h+s[f][1],h+=s[f][1]-s[f][0]-1;return u}var Nr={resolve:Op,tokenize:Up},Fp={partial:true,tokenize:Bp};function Op(e){return zn(e),e}function Up(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?a(l):A(l)?e.check(Fp,o,a)(l):(e.consume(l),i)}function a(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function o(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Bp(e,t,n){let r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),R(e,a,"linePrefix")}function a(o){if(o===null||A(o))return n(o);let l=r.events[r.events.length-1];return !r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function Sn(e,t,n,r,i,a,o,l,s){let u=s||Number.POSITIVE_INFINITY,c=0;return p;function p(x){return x===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(x),e.exit(a),f):x===null||x===32||x===41||et(x)?n(x):(e.enter(r),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),y(x))}function f(x){return x===62?(e.enter(a),e.consume(x),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(x))}function m(x){return x===62?(e.exit("chunkString"),e.exit(l),f(x)):x===null||x===60||A(x)?n(x):(e.consume(x),x===92?h:m)}function h(x){return x===60||x===62||x===92?(e.consume(x),m):m(x)}function y(x){return !c&&(x===null||x===41||$(x))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(r),t(x)):c<u&&x===40?(e.consume(x),c++,y):x===41?(e.consume(x),c--,y):x===null||x===32||x===40||et(x)?n(x):(e.consume(x),x===92?v:y)}function v(x){return x===40||x===41||x===92?(e.consume(x),y):y(x)}}function Cn(e,t,n,r,i,a){let o=this,l=0,s;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(a),c}function c(m){return l>999||m===null||m===91||m===93&&!s||m===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?n(m):m===93?(e.exit(a),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):A(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||A(m)||l++>999?(e.exit("chunkString"),c(m)):(e.consume(m),s||(s=!M(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),l++,p):p(m)}}function En(e,t,n,r,i,a){let o;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),o=f===40?41:f,s):n(f)}function s(f){return f===o?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(a),u(f))}function u(f){return f===o?(e.exit(a),s(o)):f===null?n(f):A(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),R(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(f))}function c(f){return f===o||f===null||A(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:c)}function p(f){return f===o||f===92?(e.consume(f),c):c(f)}}function nt(e,t){let n;return r;function r(i){return A(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=true,r):M(i)?R(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}var Fr={name:"definition",tokenize:jp},Hp={partial:true,tokenize:Wp};function jp(e,t,n){let r=this,i;return a;function a(m){return e.enter("definition"),o(m)}function o(m){return Cn.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return i=me(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),s):n(m)}function s(m){return $(m)?nt(e,u)(m):u(m)}function u(m){return Sn(e,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function c(m){return e.attempt(Hp,p,p)(m)}function p(m){return M(m)?R(e,f,"whitespace")(m):f(m)}function f(m){return m===null||A(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Wp(e,t,n){return r;function r(l){return $(l)?nt(e,i)(l):n(l)}function i(l){return En(e,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function a(l){return M(l)?R(e,o,"whitespace")(l):o(l)}function o(l){return l===null||A(l)?t(l):n(l)}}var Or={name:"hardBreakEscape",tokenize:Vp};function Vp(e,t,n){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),i}function i(a){return A(a)?(e.exit("hardBreakEscape"),t(a)):n(a)}}var Ur={name:"headingAtx",resolve:$p,tokenize:qp};function $p(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},a={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},ie(e,r,n-r+1,[["enter",i,t],["enter",a,t],["exit",a,t],["exit",i,t]])),e}function qp(e,t,n){let r=0;return i;function i(c){return e.enter("atxHeading"),a(c)}function a(c){return e.enter("atxHeadingSequence"),o(c)}function o(c){return c===35&&r++<6?(e.consume(c),o):c===null||$(c)?(e.exit("atxHeadingSequence"),l(c)):n(c)}function l(c){return c===35?(e.enter("atxHeadingSequence"),s(c)):c===null||A(c)?(e.exit("atxHeading"),t(c)):M(c)?R(e,l,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function s(c){return c===35?(e.consume(c),s):(e.exit("atxHeadingSequence"),l(c))}function u(c){return c===null||c===35||$(c)?(e.exit("atxHeadingText"),l(c)):(e.consume(c),u)}}var ll=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Br=["pre","script","style","textarea"];var Hr={concrete:true,name:"htmlFlow",resolveTo:Gp,tokenize:Kp},Yp={partial:true,tokenize:Qp},Xp={partial:true,tokenize:Jp};function Gp(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Kp(e,t,n){let r=this,i,a,o,l,s;return u;function u(g){return c(g)}function c(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),p}function p(g){return g===33?(e.consume(g),f):g===47?(e.consume(g),a=true,y):g===63?(e.consume(g),i=3,r.interrupt?t:d):ae(g)?(e.consume(g),o=String.fromCharCode(g),v):n(g)}function f(g){return g===45?(e.consume(g),i=2,m):g===91?(e.consume(g),i=5,l=0,h):ae(g)?(e.consume(g),i=4,r.interrupt?t:d):n(g)}function m(g){return g===45?(e.consume(g),r.interrupt?t:d):n(g)}function h(g){let te="CDATA[";return g===te.charCodeAt(l++)?(e.consume(g),l===te.length?r.interrupt?t:V:h):n(g)}function y(g){return ae(g)?(e.consume(g),o=String.fromCharCode(g),v):n(g)}function v(g){if(g===null||g===47||g===62||$(g)){let te=g===47,ye=o.toLowerCase();return !te&&!a&&Br.includes(ye)?(i=1,r.interrupt?t(g):V(g)):ll.includes(o.toLowerCase())?(i=6,te?(e.consume(g),x):r.interrupt?t(g):V(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):a?S(g):C(g))}return g===45||ee(g)?(e.consume(g),o+=String.fromCharCode(g),v):n(g)}function x(g){return g===62?(e.consume(g),r.interrupt?t:V):n(g)}function S(g){return M(g)?(e.consume(g),S):b(g)}function C(g){return g===47?(e.consume(g),b):g===58||g===95||ae(g)?(e.consume(g),N):M(g)?(e.consume(g),C):b(g)}function N(g){return g===45||g===46||g===58||g===95||ee(g)?(e.consume(g),N):D(g)}function D(g){return g===61?(e.consume(g),k):M(g)?(e.consume(g),D):C(g)}function k(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),s=g,W):M(g)?(e.consume(g),k):q(g)}function W(g){return g===s?(e.consume(g),s=null,j):g===null||A(g)?n(g):(e.consume(g),W)}function q(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||$(g)?D(g):(e.consume(g),q)}function j(g){return g===47||g===62||M(g)?C(g):n(g)}function b(g){return g===62?(e.consume(g),G):n(g)}function G(g){return g===null||A(g)?V(g):M(g)?(e.consume(g),G):n(g)}function V(g){return g===45&&i===2?(e.consume(g),F):g===60&&i===1?(e.consume(g),T):g===62&&i===4?(e.consume(g),le):g===63&&i===3?(e.consume(g),d):g===93&&i===5?(e.consume(g),oe):A(g)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Yp,ce,z)(g)):g===null||A(g)?(e.exit("htmlFlowData"),z(g)):(e.consume(g),V)}function z(g){return e.check(Xp,P,ce)(g)}function P(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),L}function L(g){return g===null||A(g)?z(g):(e.enter("htmlFlowData"),V(g))}function F(g){return g===45?(e.consume(g),d):V(g)}function T(g){return g===47?(e.consume(g),o="",H):V(g)}function H(g){if(g===62){let te=o.toLowerCase();return Br.includes(te)?(e.consume(g),le):V(g)}return ae(g)&&o.length<8?(e.consume(g),o+=String.fromCharCode(g),H):V(g)}function oe(g){return g===93?(e.consume(g),d):V(g)}function d(g){return g===62?(e.consume(g),le):g===45&&i===2?(e.consume(g),d):V(g)}function le(g){return g===null||A(g)?(e.exit("htmlFlowData"),ce(g)):(e.consume(g),le)}function ce(g){return e.exit("htmlFlow"),t(g)}}function Jp(e,t,n){let r=this;return i;function i(o){return A(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):n(o)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function Qp(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ie,t,n)}}var jr={name:"htmlText",tokenize:Zp};function Zp(e,t,n){let r=this,i,a,o;return l;function l(d){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(d),s}function s(d){return d===33?(e.consume(d),u):d===47?(e.consume(d),D):d===63?(e.consume(d),C):ae(d)?(e.consume(d),q):n(d)}function u(d){return d===45?(e.consume(d),c):d===91?(e.consume(d),a=0,h):ae(d)?(e.consume(d),S):n(d)}function c(d){return d===45?(e.consume(d),m):n(d)}function p(d){return d===null?n(d):d===45?(e.consume(d),f):A(d)?(o=p,T(d)):(e.consume(d),p)}function f(d){return d===45?(e.consume(d),m):p(d)}function m(d){return d===62?F(d):d===45?f(d):p(d)}function h(d){let le="CDATA[";return d===le.charCodeAt(a++)?(e.consume(d),a===le.length?y:h):n(d)}function y(d){return d===null?n(d):d===93?(e.consume(d),v):A(d)?(o=y,T(d)):(e.consume(d),y)}function v(d){return d===93?(e.consume(d),x):y(d)}function x(d){return d===62?F(d):d===93?(e.consume(d),x):y(d)}function S(d){return d===null||d===62?F(d):A(d)?(o=S,T(d)):(e.consume(d),S)}function C(d){return d===null?n(d):d===63?(e.consume(d),N):A(d)?(o=C,T(d)):(e.consume(d),C)}function N(d){return d===62?F(d):C(d)}function D(d){return ae(d)?(e.consume(d),k):n(d)}function k(d){return d===45||ee(d)?(e.consume(d),k):W(d)}function W(d){return A(d)?(o=W,T(d)):M(d)?(e.consume(d),W):F(d)}function q(d){return d===45||ee(d)?(e.consume(d),q):d===47||d===62||$(d)?j(d):n(d)}function j(d){return d===47?(e.consume(d),F):d===58||d===95||ae(d)?(e.consume(d),b):A(d)?(o=j,T(d)):M(d)?(e.consume(d),j):F(d)}function b(d){return d===45||d===46||d===58||d===95||ee(d)?(e.consume(d),b):G(d)}function G(d){return d===61?(e.consume(d),V):A(d)?(o=G,T(d)):M(d)?(e.consume(d),G):j(d)}function V(d){return d===null||d===60||d===61||d===62||d===96?n(d):d===34||d===39?(e.consume(d),i=d,z):A(d)?(o=V,T(d)):M(d)?(e.consume(d),V):(e.consume(d),P)}function z(d){return d===i?(e.consume(d),i=void 0,L):d===null?n(d):A(d)?(o=z,T(d)):(e.consume(d),z)}function P(d){return d===null||d===34||d===39||d===60||d===61||d===96?n(d):d===47||d===62||$(d)?j(d):(e.consume(d),P)}function L(d){return d===47||d===62||$(d)?j(d):n(d)}function F(d){return d===62?(e.consume(d),e.exit("htmlTextData"),e.exit("htmlText"),t):n(d)}function T(d){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),H}function H(d){return M(d)?R(e,oe,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):oe(d)}function oe(d){return e.enter("htmlTextData"),o(d)}}var rt={name:"labelEnd",resolveAll:rf,resolveTo:of,tokenize:af},ef={tokenize:lf},tf={tokenize:sf},nf={tokenize:uf};function rf(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let i=r.type==="labelImage"?4:2;r.type="data",t+=i;}}return e.length!==n.length&&ie(e,0,e.length,n),e}function of(e,t){let n=e.length,r=0,i,a,o,l;for(;n--;)if(i=e[n][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=true);}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);let s={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[a][1].start},end:{...e[o][1].end}},c={type:"labelText",start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",s,t],["enter",u,t]],l=de(l,e.slice(a+1,a+r+3)),l=de(l,[["enter",c,t]]),l=de(l,je(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),l=de(l,[["exit",c,t],e[o-2],e[o-1],["exit",u,t]]),l=de(l,e.slice(o+1)),l=de(l,[["exit",s,t]]),ie(e,a,e.length,l),e}function af(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return l;function l(f){return a?a._inactive?p(f):(o=r.parser.defined.includes(me(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),s):n(f)}function s(f){return f===40?e.attempt(ef,c,o?c:p)(f):f===91?e.attempt(tf,c,o?u:p)(f):o?c(f):p(f)}function u(f){return e.attempt(nf,c,p)(f)}function c(f){return t(f)}function p(f){return a._balanced=true,n(f)}}function lf(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return $(p)?nt(e,a)(p):a(p)}function a(p){return p===41?c(p):Sn(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function o(p){return $(p)?nt(e,s)(p):c(p)}function l(p){return n(p)}function s(p){return p===34||p===39||p===40?En(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):c(p)}function u(p){return $(p)?nt(e,c)(p):c(p)}function c(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function sf(e,t,n){let r=this;return i;function i(l){return Cn.call(r,e,a,o,"reference","referenceMarker","referenceString")(l)}function a(l){return r.parser.defined.includes(me(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function o(l){return n(l)}}function uf(e,t,n){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),i}function i(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),t):n(a)}}var Wr={name:"labelStartImage",resolveAll:rt.resolveAll,tokenize:cf};function cf(e,t,n){let r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}var Vr={name:"labelStartLink",resolveAll:rt.resolveAll,tokenize:pf};function pf(e,t,n){let r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}var Ot={name:"lineEnding",tokenize:ff};function ff(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),R(e,t,"linePrefix")}}var it={name:"thematicBreak",tokenize:mf};function mf(e,t,n){let r=0,i;return a;function a(u){return e.enter("thematicBreak"),o(u)}function o(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||A(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),M(u)?R(e,l,"whitespace")(u):l(u))}}var he={continuation:{tokenize:yf},exit:bf,name:"list",tokenize:gf},hf={partial:true,tokenize:vf},df={partial:true,tokenize:xf};function gf(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],true).length:0,o=0;return l;function l(m){let h=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(h==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Dt(m)){if(r.containerState.type||(r.containerState.type=h,e.enter(h,{_container:true})),h==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(it,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(m)}return n(m)}function s(m){return Dt(m)&&++o<10?(e.consume(m),s):(!r.interrupt||o<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Ie,r.interrupt?n:c,e.attempt(hf,f,p))}function c(m){return r.containerState.initialBlankLine=true,a++,f(m)}function p(m){return M(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),true).length,t(m)}}function yf(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Ie,i,a);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,R(e,t,"listItemIndent",r.containerState.size+1)(l)}function a(l){return r.containerState.furtherBlankLines||!M(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(df,t,o)(l))}function o(l){return r.containerState._closeFlow=true,r.interrupt=void 0,R(e,e.attempt(he,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function xf(e,t,n){let r=this;return R(e,i,"listItemIndent",r.containerState.size+1);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],true).length===r.containerState.size?t(a):n(a)}}function bf(e){e.exit(this.containerState.type);}function vf(e,t,n){let r=this;return R(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){let o=r.events[r.events.length-1];return !M(a)&&o&&o[1].type==="listItemPrefixWhitespace"?t(a):n(a)}}var In={name:"setextUnderline",resolveTo:wf,tokenize:kf};function wf(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n);}else e[n][1].type==="content"&&e.splice(n,1),!a&&e[n][1].type==="definition"&&(a=n);let o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",a?(e.splice(i,0,["enter",o,t]),e.splice(a+1,0,["exit",e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function kf(e,t,n){let r=this,i;return a;function a(u){let c=r.events.length,p;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){p=r.events[c][1].type==="paragraph";break}return !r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,o(u)):n(u)}function o(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),M(u)?R(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||A(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}var sl={tokenize:_f};function _f(e){let t=this,n=e.attempt(Ie,r,e.attempt(this.parser.constructs.flowInitial,i,R(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Nr,i)),"linePrefix")));return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),t.currentConstruct=void 0,n}}var ul={resolveAll:ml()},cl=fl("string"),pl=fl("text");function fl(e){return {resolveAll:ml(e==="text"?zf:void 0),tokenize:t};function t(n){let r=this,i=this.parser.constructs[e],a=n.attempt(i,o,l);return o;function o(c){return u(c)?a(c):l(c)}function l(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),s}function s(c){return u(c)?(n.exit("data"),a(c)):(n.consume(c),s)}function u(c){if(c===null)return  true;let p=i[c],f=-1;if(p)for(;++f<p.length;){let m=p[f];if(!m.previous||m.previous.call(r,r.previous))return  true}return  false}}}function ml(e){return t;function t(n,r){let i=-1,a;for(;++i<=n.length;)a===void 0?n[i]&&n[i][1].type==="data"&&(a=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==a+2&&(n[a][1].end=n[i-1][1].end,n.splice(a+2,i-a-2),i=a+2),a=void 0);return e?e(n,r):n}}function zf(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,l=0,s;for(;a--;){let u=i[a];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1;}else if(u===-2)s=true,l++;else if(u!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){let u={type:n===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2);}n++;}return e}var $r={};no($r,{attentionMarkers:()=>Lf,contentInitial:()=>Cf,disable:()=>Rf,document:()=>Sf,flow:()=>If,flowInitial:()=>Ef,insideSpan:()=>Pf,string:()=>Af,text:()=>Tf});var Sf={42:he,43:he,45:he,48:he,49:he,50:he,51:he,52:he,53:he,54:he,55:he,56:he,57:he,62:bn},Cf={91:Fr},Ef={[-2]:Nt,[-1]:Nt,32:Nt},If={35:Ur,42:it,45:[In,it],60:Hr,61:In,95:it,96:kn,126:kn},Af={38:wn,92:vn},Tf={[-5]:Ot,[-4]:Ot,[-3]:Ot,33:Wr,38:wn,42:Mt,60:[Dr,jr],91:Vr,92:[Or,vn],93:rt,95:Mt,96:Mr},Pf={null:[Mt,ul]},Lf={null:[42,95]},Rf={null:[]};function hl(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],l=[],u={attempt:j(W),check:j(q),consume:N,enter:D,exit:k,interrupt:j(q,{interrupt:true})},c={code:null,containerState:{},defineSkip:x,events:[],now:v,parser:e,previous:null,sliceSerialize:h,sliceStream:y,write:m},p=t.tokenize.call(c,u);return t.resolveAll&&a.push(t),c;function m(z){return o=de(o,z),S(),o[o.length-1]!==null?[]:(b(t,0),c.events=je(a,c.events,c),c.events)}function h(z,P){return Mf(y(z),P)}function y(z){return Df(o,z)}function v(){let{_bufferIndex:z,_index:P,line:L,column:F,offset:T}=r;return {_bufferIndex:z,_index:P,line:L,column:F,offset:T}}function x(z){i[z.line]=z.column,V();}function S(){let z;for(;r._index<o.length;){let P=o[r._index];if(typeof P=="string")for(z=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===z&&r._bufferIndex<P.length;)C(P.charCodeAt(r._bufferIndex));else C(P);}}function C(z){p=p(z);}function N(z){A(z)?(r.line++,r.column=1,r.offset+=z===-3?2:1,V()):z!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=z;}function D(z,P){let L=P||{};return L.type=z,L.start=v(),c.events.push(["enter",L,c]),l.push(L),L}function k(z){let P=l.pop();return P.end=v(),c.events.push(["exit",P,c]),P}function W(z,P){b(z,P.from);}function q(z,P){P.restore();}function j(z,P){return L;function L(F,T,H){let oe,d,le,ce;return Array.isArray(F)?te(F):"tokenize"in F?te([F]):g(F);function g(Y){return pe;function pe(se){let Se=se!==null&&Y[se],Oe=se!==null&&Y.null,ct=[...Array.isArray(Se)?Se:Se?[Se]:[],...Array.isArray(Oe)?Oe:Oe?[Oe]:[]];return te(ct)(se)}}function te(Y){return oe=Y,d=0,Y.length===0?H:ye(Y[d])}function ye(Y){return pe;function pe(se){return ce=G(),le=Y,Y.partial||(c.currentConstruct=Y),Y.name&&c.parser.constructs.disable.null.includes(Y.name)?qe():Y.tokenize.call(P?Object.assign(Object.create(c),P):c,u,kt,qe)(se)}}function kt(Y){return z(le,ce),T}function qe(Y){return ce.restore(),++d<oe.length?ye(oe[d]):H}}}function b(z,P){z.resolveAll&&!a.includes(z)&&a.push(z),z.resolve&&ie(c.events,P,c.events.length-P,z.resolve(c.events.slice(P),c)),z.resolveTo&&(c.events=z.resolveTo(c.events,c));}function G(){let z=v(),P=c.previous,L=c.currentConstruct,F=c.events.length,T=Array.from(l);return {from:F,restore:H};function H(){r=z,c.previous=P,c.currentConstruct=L,c.events.length=F,l=T,V();}}function V(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1);}}function Df(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else {if(o=e.slice(n,i),r>-1){let l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift();}a>0&&o.push(e[i].slice(0,a));}return o}function Mf(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a=="string")o=a;else switch(a){case  -5:{o="\r";break}case  -4:{o=`
`;break}case  -3:{o=`\r
`;break}case  -2:{o=t?" ":"	";break}case  -1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(a);}i=a===-2,r.push(o);}return r.join("")}function qr(e){let r={constructs:yn([$r,...(e||{}).extensions||[]]),content:i(nl),defined:[],document:i(il),flow:i(sl),lazy:{},string:i(cl),text:i(pl)};return r;function i(a){return o;function o(l){return hl(r,a,l)}}}function Yr(e){for(;!zn(e););return e}var dl=/[\0\t\n\r]/g;function Xr(){let e=1,t="",n=true,r;return i;function i(a,o,l){let s=[],u,c,p,f,m;for(a=t+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a)),p=0,t="",n&&(a.charCodeAt(0)===65279&&p++,n=void 0);p<a.length;){if(dl.lastIndex=p,u=dl.exec(a),f=u&&u.index!==void 0?u.index:a.length,m=a.charCodeAt(f),!u){t=a.slice(p);break}if(m===10&&p===f&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),p<f&&(s.push(a.slice(p,f)),e+=f-p),m){case 0:{s.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,s.push(-2);e++<c;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=true,e=1;}p=f+1;}return l&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var Nf=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function gl(e){return e.replace(Nf,Ff)}function Ff(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let i=n.charCodeAt(1),a=i===120||i===88;return xn(n.slice(a?2:1),a?16:10)}return ht(n)||e}var xl={}.hasOwnProperty;function Gr(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),Of(n)(Yr(qr(n).document().write(Xr()(e,t,true))))}function Of(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(eo),autolinkProtocol:j,autolinkEmail:j,atxHeading:a(Ji),blockQuote:a(se),characterEscape:j,characterReference:j,codeFenced:a(Se),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(Se,o),codeText:a(Oe,o),codeTextData:j,data:j,codeFlowValue:j,definition:a(ct),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(mu),hardBreakEscape:a(Qi),hardBreakTrailing:a(Qi),htmlFlow:a(Zi,o),htmlFlowData:j,htmlText:a(Zi,o),htmlTextData:j,image:a(hu),label:o,link:a(eo),listItem:a(du),listItemValue:f,listOrdered:a(to,p),listUnordered:a(to),paragraph:a(gu),reference:g,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(Ji),strong:a(yu),thematicBreak:a(bu)},exit:{atxHeading:s(),atxHeadingSequence:D,autolink:s(),autolinkEmail:pe,autolinkProtocol:Y,blockQuote:s(),characterEscapeValue:b,characterReferenceMarkerHexadecimal:ye,characterReferenceMarkerNumeric:ye,characterReferenceValue:kt,characterReference:qe,codeFenced:s(v),codeFencedFence:y,codeFencedFenceInfo:m,codeFencedFenceMeta:h,codeFlowValue:b,codeIndented:s(x),codeText:s(L),codeTextData:b,data:b,definition:s(),definitionDestinationString:N,definitionLabelString:S,definitionTitleString:C,emphasis:s(),hardBreakEscape:s(V),hardBreakTrailing:s(V),htmlFlow:s(z),htmlFlowData:b,htmlText:s(P),htmlTextData:b,image:s(T),label:oe,labelText:H,lineEnding:G,link:s(F),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:te,resourceDestinationString:d,resourceTitleString:le,resource:ce,setextHeading:s(q),setextHeadingLineSequence:W,setextHeadingText:k,strong:s(),thematicBreak:s()}};bl(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(_){let I={type:"root",children:[]},B={stack:[I],tokenStack:[],config:t,enter:l,exit:u,buffer:o,resume:c,data:n},X=[],J=-1;for(;++J<_.length;)if(_[J][1].type==="listOrdered"||_[J][1].type==="listUnordered")if(_[J][0]==="enter")X.push(J);else {let ke=X.pop();J=i(_,ke,J);}for(J=-1;++J<_.length;){let ke=t[_[J][0]];xl.call(ke,_[J][1].type)&&ke[_[J][1].type].call(Object.assign({sliceSerialize:_[J][2].sliceSerialize},B),_[J][1]);}if(B.tokenStack.length>0){let ke=B.tokenStack[B.tokenStack.length-1];(ke[1]||yl).call(B,void 0,ke[0]);}for(I.position={start:We(_.length>0?_[0][1].start:{line:1,column:1,offset:0}),end:We(_.length>0?_[_.length-2][1].end:{line:1,column:1,offset:0})},J=-1;++J<t.transforms.length;)I=t.transforms[J](I)||I;return I}function i(_,I,B){let X=I-1,J=-1,ke=false,Ye,Te,_t,zt;for(;++X<=B;){let xe=_[X];switch(xe[1].type){case "listUnordered":case "listOrdered":case "blockQuote":{xe[0]==="enter"?J++:J--,zt=void 0;break}case "lineEndingBlank":{xe[0]==="enter"&&(Ye&&!zt&&!J&&!_t&&(_t=X),zt=void 0);break}case "linePrefix":case "listItemValue":case "listItemMarker":case "listItemPrefix":case "listItemPrefixWhitespace":break;default:zt=void 0;}if(!J&&xe[0]==="enter"&&xe[1].type==="listItemPrefix"||J===-1&&xe[0]==="exit"&&(xe[1].type==="listUnordered"||xe[1].type==="listOrdered")){if(Ye){let pt=X;for(Te=void 0;pt--;){let Pe=_[pt];if(Pe[1].type==="lineEnding"||Pe[1].type==="lineEndingBlank"){if(Pe[0]==="exit")continue;Te&&(_[Te][1].type="lineEndingBlank",ke=true),Pe[1].type="lineEnding",Te=pt;}else if(!(Pe[1].type==="linePrefix"||Pe[1].type==="blockQuotePrefix"||Pe[1].type==="blockQuotePrefixWhitespace"||Pe[1].type==="blockQuoteMarker"||Pe[1].type==="listItemIndent"))break}_t&&(!Te||_t<Te)&&(Ye._spread=true),Ye.end=Object.assign({},Te?_[Te][1].start:xe[1].end),_.splice(Te||X,0,["exit",Ye,xe[2]]),X++,B++;}if(xe[1].type==="listItemPrefix"){let pt={type:"listItem",_spread:false,start:Object.assign({},xe[1].start),end:void 0};Ye=pt,_.splice(X,0,["enter",pt,xe[2]]),X++,B++,_t=void 0,zt=true;}}}return _[I][1]._spread=ke,B}function a(_,I){return B;function B(X){l.call(this,_(X),X),I&&I.call(this,X);}}function o(){this.stack.push({type:"fragment",children:[]});}function l(_,I,B){this.stack[this.stack.length-1].children.push(_),this.stack.push(_),this.tokenStack.push([I,B||void 0]),_.position={start:We(I.start),end:void 0};}function s(_){return I;function I(B){_&&_.call(this,B),u.call(this,B);}}function u(_,I){let B=this.stack.pop(),X=this.tokenStack.pop();if(X)X[0].type!==_.type&&(I?I.call(this,_,X[0]):(X[1]||yl).call(this,_,X[0]));else throw new Error("Cannot close `"+_.type+"` ("+Be({start:_.start,end:_.end})+"): it\u2019s not open");B.position.end=We(_.end);}function c(){return Ze(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=true;}function f(_){if(this.data.expectingFirstListItemValue){let I=this.stack[this.stack.length-2];I.start=Number.parseInt(this.sliceSerialize(_),10),this.data.expectingFirstListItemValue=void 0;}}function m(){let _=this.resume(),I=this.stack[this.stack.length-1];I.lang=_;}function h(){let _=this.resume(),I=this.stack[this.stack.length-1];I.meta=_;}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=true);}function v(){let _=this.resume(),I=this.stack[this.stack.length-1];I.value=_.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0;}function x(){let _=this.resume(),I=this.stack[this.stack.length-1];I.value=_.replace(/(\r?\n|\r)$/g,"");}function S(_){let I=this.resume(),B=this.stack[this.stack.length-1];B.label=I,B.identifier=me(this.sliceSerialize(_)).toLowerCase();}function C(){let _=this.resume(),I=this.stack[this.stack.length-1];I.title=_;}function N(){let _=this.resume(),I=this.stack[this.stack.length-1];I.url=_;}function D(_){let I=this.stack[this.stack.length-1];if(!I.depth){let B=this.sliceSerialize(_).length;I.depth=B;}}function k(){this.data.setextHeadingSlurpLineEnding=true;}function W(_){let I=this.stack[this.stack.length-1];I.depth=this.sliceSerialize(_).codePointAt(0)===61?1:2;}function q(){this.data.setextHeadingSlurpLineEnding=void 0;}function j(_){let B=this.stack[this.stack.length-1].children,X=B[B.length-1];(!X||X.type!=="text")&&(X=xu(),X.position={start:We(_.start),end:void 0},B.push(X)),this.stack.push(X);}function b(_){let I=this.stack.pop();I.value+=this.sliceSerialize(_),I.position.end=We(_.end);}function G(_){let I=this.stack[this.stack.length-1];if(this.data.atHardBreak){let B=I.children[I.children.length-1];B.position.end=We(_.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(I.type)&&(j.call(this,_),b.call(this,_));}function V(){this.data.atHardBreak=true;}function z(){let _=this.resume(),I=this.stack[this.stack.length-1];I.value=_;}function P(){let _=this.resume(),I=this.stack[this.stack.length-1];I.value=_;}function L(){let _=this.resume(),I=this.stack[this.stack.length-1];I.value=_;}function F(){let _=this.stack[this.stack.length-1];if(this.data.inReference){let I=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=I,delete _.url,delete _.title;}else delete _.identifier,delete _.label;this.data.referenceType=void 0;}function T(){let _=this.stack[this.stack.length-1];if(this.data.inReference){let I=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=I,delete _.url,delete _.title;}else delete _.identifier,delete _.label;this.data.referenceType=void 0;}function H(_){let I=this.sliceSerialize(_),B=this.stack[this.stack.length-2];B.label=gl(I),B.identifier=me(I).toLowerCase();}function oe(){let _=this.stack[this.stack.length-1],I=this.resume(),B=this.stack[this.stack.length-1];if(this.data.inReference=true,B.type==="link"){let X=_.children;B.children=X;}else B.alt=I;}function d(){let _=this.resume(),I=this.stack[this.stack.length-1];I.url=_;}function le(){let _=this.resume(),I=this.stack[this.stack.length-1];I.title=_;}function ce(){this.data.inReference=void 0;}function g(){this.data.referenceType="collapsed";}function te(_){let I=this.resume(),B=this.stack[this.stack.length-1];B.label=I,B.identifier=me(this.sliceSerialize(_)).toLowerCase(),this.data.referenceType="full";}function ye(_){this.data.characterReferenceType=_.type;}function kt(_){let I=this.sliceSerialize(_),B=this.data.characterReferenceType,X;B?(X=xn(I,B==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):X=ht(I);let J=this.stack[this.stack.length-1];J.value+=X;}function qe(_){let I=this.stack.pop();I.position.end=We(_.end);}function Y(_){b.call(this,_);let I=this.stack[this.stack.length-1];I.url=this.sliceSerialize(_);}function pe(_){b.call(this,_);let I=this.stack[this.stack.length-1];I.url="mailto:"+this.sliceSerialize(_);}function se(){return {type:"blockquote",children:[]}}function Se(){return {type:"code",lang:null,meta:null,value:""}}function Oe(){return {type:"inlineCode",value:""}}function ct(){return {type:"definition",identifier:"",label:null,title:null,url:""}}function mu(){return {type:"emphasis",children:[]}}function Ji(){return {type:"heading",depth:0,children:[]}}function Qi(){return {type:"break"}}function Zi(){return {type:"html",value:""}}function hu(){return {type:"image",title:null,url:"",alt:null}}function eo(){return {type:"link",title:null,url:"",children:[]}}function to(_){return {type:"list",ordered:_.type==="listOrdered",start:null,spread:_._spread,children:[]}}function du(_){return {type:"listItem",spread:_._spread,checked:null,children:[]}}function gu(){return {type:"paragraph",children:[]}}function yu(){return {type:"strong",children:[]}}function xu(){return {type:"text",value:""}}function bu(){return {type:"thematicBreak"}}}function We(e){return {line:e.line,column:e.column,offset:e.offset}}function bl(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?bl(e,r):Uf(e,r);}}function Uf(e,t){let n;for(n in t)if(xl.call(t,n))switch(n){case "canContainEols":{let r=t[n];r&&e[n].push(...r);break}case "transforms":{let r=t[n];r&&e[n].push(...r);break}case "enter":case "exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function yl(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Be({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Be({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Be({start:t.start,end:t.end})+") is still open")}function An(e){let t=this;t.parser=n;function n(r){return Gr(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function vl(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),true)};return e.patch(t,n),e.applyData(t,n)}function wl(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function kl(e,t){let n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let a={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(t,a),a}function _l(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function zl(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Sl(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=we(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,l+=1,e.footnoteCounts.set(r,l);let s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:true,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,s);let u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function Cl(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function El(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Tn(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return [{type:"text",value:"!["+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});let o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function Il(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Tn(e,t);let i={src:we(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function Al(e,t){let n={src:we(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Tl(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Pl(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Tn(e,t);let i={href:we(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Ll(e,t){let n={href:we(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Rl(e,t,n){let r=e.all(t),i=n?Bf(n):Dl(t),a={},o=[];if(typeof t.checked=="boolean"){let c=r[0],p;c&&c.type==="element"&&c.tagName==="p"?p=c:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:true},children:[]}),a.className=["task-list-item"];}let l=-1;for(;++l<r.length;){let c=r[l];(i||l!==0||c.type!=="element"||c.tagName!=="p")&&o.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!i?o.push(...c.children):o.push(c);}let s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});let u={type:"element",tagName:"li",properties:a,children:o};return e.patch(t,u),e.applyData(t,u)}function Bf(e){let t=false;if(e.type==="list"){t=e.spread||false;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Dl(n[r]);}return t}function Dl(e){let t=e.spread;return t??e.children.length>1}function Ml(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){let o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let a={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,true)};return e.patch(t,a),e.applyData(t,a)}function Nl(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Fl(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Ol(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ul(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],true)};e.patch(t.children[0],o),i.push(o);}if(n.length>0){let o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,true)},l=mt(t.children[1]),s=gn(t.children[t.children.length-1]);l&&s&&(o.position={start:l,end:s}),i.push(o);}let a={type:"element",tagName:"table",properties:{},children:e.wrap(i,true)};return e.patch(t,a),e.applyData(t,a)}function Bl(e,t,n){let r=n?n.children:void 0,a=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,l=o?o.length:t.children.length,s=-1,u=[];for(;++s<l;){let p=t.children[s],f={},m=o?o[s]:void 0;m&&(f.align=m);let h={type:"element",tagName:a,properties:f,children:[]};p&&(h.children=e.all(p),e.patch(p,h),h=e.applyData(p,h)),u.push(h);}let c={type:"element",tagName:"tr",properties:{},children:e.wrap(u,true)};return e.patch(t,c),e.applyData(t,c)}function Hl(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Wl(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(jl(t.slice(i,r.index),i>0,true),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(jl(t.slice(i),i>0,false)),a.join("")}function jl(e,t,n){let r=0,i=e.length;if(t){let a=e.codePointAt(r);for(;a===9||a===32;)r++,a=e.codePointAt(r);}if(n){let a=e.codePointAt(i-1);for(;a===9||a===32;)i--,a=e.codePointAt(i-1);}return i>r?e.slice(r,i):""}function Vl(e,t){let n={type:"text",value:Wl(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function $l(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var ql={blockquote:vl,break:wl,code:kl,delete:_l,emphasis:zl,footnoteReference:Sl,heading:Cl,html:El,imageReference:Il,image:Al,inlineCode:Tl,linkReference:Pl,link:Ll,listItem:Rl,list:Ml,paragraph:Nl,root:Fl,strong:Ol,table:Ul,tableCell:Hl,tableRow:Bl,text:Vl,thematicBreak:$l,toml:Pn,yaml:Pn,definition:Pn,footnoteDefinition:Pn};function Pn(){}var{defineProperty:Vf}=Object,Ql=typeof self=="object"?self:globalThis,Yl=(e,t)=>{switch(e){case "Function":case "SharedWorker":case "Worker":case "eval":case "setInterval":case "setTimeout":throw new TypeError("unable to deserialize "+e)}return new Ql[e](t)},$f=(e,t)=>{let n=(i,a)=>(e.set(a,i),i),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case  -1:return n(o,i);case 1:{let l=n([],i);for(let s of o)l.push(r(s));return l}case 2:{let l=n({},i);for(let[s,u]of o){let c=r(s),p=r(u);c==="__proto__"?Vf(l,c,{value:p,configurable:true,enumerable:true,writable:true}):l[c]=p;}return l}case 3:return n(new Date(o),i);case 4:{let{source:l,flags:s}=o;return n(new RegExp(l,s),i)}case 5:{let l=n(new Map,i);for(let[s,u]of o)l.set(r(s),r(u));return l}case 6:{let l=n(new Set,i);for(let s of o)l.add(r(s));return l}case 7:{let{name:l,message:s}=o;return n(typeof Ql[l]=="function"?Yl(l,s):new Error(s),i)}case 8:return n(BigInt(o),i);case "BigInt":return n(Object(BigInt(o)),i);case "ArrayBuffer":return n(new Uint8Array(o).buffer,o);case "DataView":{let{buffer:l}=new Uint8Array(o);return n(new DataView(l),o)}case "-0":return  -0}return n(Yl(a,o),i)};return r},Qr=e=>$f(new Map,e)(0);var ot="",{toString:qf}={},{keys:Yf,is:Xf}=Object,Ut=e=>{let t=typeof e;if(t!=="object"||!e)return [0,t];let n=qf.call(e).slice(8,-1);switch(n){case "Array":return [1,ot];case "Object":return [2,ot];case "Date":return [3,ot];case "RegExp":return [4,ot];case "Map":return [5,ot];case "Set":return [6,ot];case "DataView":return [1,n]}return n.includes("Array")?[1,n]:e instanceof Error?[7,e.name||"Error"]:[2,n]},Rn=([e,t])=>e===0&&(t==="function"||t==="symbol"),Gf=(e,t,n,r)=>{let i=(o,l)=>{let s=r.push(o)-1;return n.set(l,s),s},a=o=>{if(n.has(o))return n.get(o);let[l,s]=Ut(o);switch(l){case 0:{let c=o;switch(s){case "bigint":l=8,c=o.toString();break;case "number":if(!o&&Xf(o,-0))return r.push(["-0"])-1;break;case "function":case "symbol":if(e)throw new TypeError("unable to serialize "+s);c=null;break;case "undefined":return i([-1],o)}return i([l,c],o)}case 1:{if(s){let f=o;return s==="DataView"?f=new Uint8Array(o.buffer):s==="ArrayBuffer"&&(f=new Uint8Array(o)),i([s,[...f]],o)}let c=[],p=i([l,c],o);for(let f of o)c.push(a(f));return p}case 2:{if(s)switch(s){case "BigInt":return i([s,o.toString()],o);case "Boolean":case "Number":case "String":return i([s,o.valueOf()],o)}if(t&&"toJSON"in o)return a(o.toJSON());let c=[],p=i([l,c],o);for(let f of Yf(o))(e||!Rn(Ut(o[f])))&&c.push([a(f),a(o[f])]);return p}case 3:return i([l,isNaN(o.getTime())?ot:o.toISOString()],o);case 4:{let{source:c,flags:p}=o;return i([l,{source:c,flags:p}],o)}case 5:{let c=[],p=i([l,c],o);for(let[f,m]of o)(e||!(Rn(Ut(f))||Rn(Ut(m))))&&c.push([a(f),a(m)]);return p}case 6:{let c=[],p=i([l,c],o);for(let f of o)(e||!Rn(Ut(f)))&&c.push(a(f));return p}}let{message:u}=o;return i([l,{name:s,message:u}],o)};return a},Zr=(e,{json:t,lossy:n}={})=>{let r=[];return Gf(!(t||n),!!t,new Map,r)(e),r};var dt=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Qr(Zr(e,t)):structuredClone(e):(e,t)=>Qr(Zr(e,t));function Kf(e,t){let n=[{type:"text",value:"\u21A9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Jf(e,t){return "Back to reference "+(e+1)+(t>1?"-"+t:"")}function Zl(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Kf,r=e.options.footnoteBackLabel||Jf,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[],s=-1;for(;++s<e.footnoteOrder.length;){let u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;let c=e.all(u),p=String(u.identifier).toUpperCase(),f=we(p.toLowerCase()),m=0,h=[],y=e.footnoteCounts.get(p);for(;y!==void 0&&++m<=y;){h.length>0&&h.push({type:"text",value:" "});let S=typeof n=="string"?n:n(s,m);typeof S=="string"&&(S={type:"text",value:S}),h.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,m),className:["data-footnote-backref"]},children:Array.isArray(S)?S:[S]});}let v=c[c.length-1];if(v&&v.type==="element"&&v.tagName==="p"){let S=v.children[v.children.length-1];S&&S.type==="text"?S.value+=" ":v.children.push({type:"text",value:" "}),v.children.push(...h);}else c.push(...h);let x={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(c,true)};e.patch(u,x),l.push(x);}if(l.length!==0)return {type:"element",tagName:"section",properties:{dataFootnotes:true,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...dt(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,true)},{type:"text",value:`
`}]}}var Ve=(function(e){if(e==null)return tm;if(typeof e=="function")return Dn(e);if(typeof e=="object")return Array.isArray(e)?Qf(e):Zf(e);if(typeof e=="string")return em(e);throw new Error("Expected function, string, or object as test")});function Qf(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Ve(e[n]);return Dn(r);function r(...i){let a=-1;for(;++a<t.length;)if(t[a].apply(this,i))return  true;return  false}}function Zf(e){let t=e;return Dn(n);function n(r){let i=r,a;for(a in e)if(i[a]!==t[a])return  false;return  true}}function em(e){return Dn(t);function t(n){return n&&n.type===e}}function Dn(e){return t;function t(n,r,i){return !!(nm(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function tm(){return  true}function nm(e){return e!==null&&typeof e=="object"&&"type"in e}var es=[],Mn=true,at=false,Nn="skip";function Bt(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;let a=Ve(i),o=r?-1:1;l(e,void 0,[])();function l(s,u,c){let p=s&&typeof s=="object"?s:{};if(typeof p.type=="string"){let m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(s.type+(m?"<"+m+">":""))+")"});}return f;function f(){let m=es,h,y,v;if((!t||a(s,u,c[c.length-1]||void 0))&&(m=rm(n(s,c)),m[0]===at))return m;if("children"in s&&s.children){let x=s;if(x.children&&m[0]!==Nn)for(y=(r?x.children.length:-1)+o,v=c.concat(x);y>-1&&y<x.children.length;){let S=x.children[y];if(h=l(S,y,v)(),h[0]===at)return h;y=typeof h[1]=="number"?h[1]:y+o;}}return m}}}function rm(e){return Array.isArray(e)?e:typeof e=="number"?[Mn,e]:e==null?es:[e]}function lt(e,t,n,r){let i,a,o;typeof t=="function"&&typeof n!="function"?(a=void 0,o=t,i=n):(a=t,o=n,i=r),Bt(e,a,l,i);function l(s,u){let c=u[u.length-1],p=c?c.children.indexOf(s):void 0;return o(s,p,c)}}var ei={}.hasOwnProperty,im={};function ns(e,t){let n=t||im,r=new Map,i=new Map,a=new Map,o={...ql,...n.handlers},l={all:u,applyData:am,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:o,one:s,options:n,patch:om,wrap:sm};return lt(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){let p=c.type==="definition"?r:i,f=String(c.identifier).toUpperCase();p.has(f)||p.set(f,c);}}),l;function s(c,p){let f=c.type,m=l.handlers[f];if(ei.call(l.handlers,f)&&m)return m(l,c,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in c){let{children:y,...v}=c,x=dt(v);return x.children=l.all(c),x}return dt(c)}return (l.options.unknownHandler||lm)(l,c,p)}function u(c){let p=[];if("children"in c){let f=c.children,m=-1;for(;++m<f.length;){let h=l.one(f[m],c);if(h){if(m&&f[m-1].type==="break"&&(!Array.isArray(h)&&h.type==="text"&&(h.value=ts(h.value)),!Array.isArray(h)&&h.type==="element")){let y=h.children[0];y&&y.type==="text"&&(y.value=ts(y.value));}Array.isArray(h)?p.push(...h):p.push(h);}}}return p}}function om(e,t){e.position&&(t.position=Ir(e));}function am(e,t){let n=t;if(e&&e.data){let r=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else {let o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o};}n.type==="element"&&a&&Object.assign(n.properties,dt(a)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i);}return n}function lm(e,t){let n=t.data||{},r="value"in t&&!(ei.call(n,"hProperties")||ei.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function sm(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function ts(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Fn(e,t){let n=ns(e,t),r=n.one(e,void 0),i=Zl(n),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&(a.children.push({type:"text",value:`
`},i)),a}function On(e,t){return e&&"run"in e?async function(n,r){let i=Fn(n,{file:r,...t});await e.run(i,r);}:function(n,r){return Fn(n,{file:r,...e||t})}}function ti(e){if(e)throw e}var Hn=ro(ps());function Ht(e){if(typeof e!="object"||e===null)return  false;let t=Object.getPrototypeOf(e);return (t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ni(){let e=[],t={run:n,use:r};return t;function n(...i){let a=-1,o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(s,...u){let c=e[++a],p=-1;if(s){o(s);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,c?fs(c,l)(...u):o(null,...u);}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function fs(e,t){let n;return r;function r(...o){let l=e.length>o.length,s;l&&o.push(i);try{s=e.apply(this,o);}catch(u){let c=u;if(l&&n)throw c;return i(c)}l||(s&&s.then&&typeof s.then=="function"?s.then(a,i):s instanceof Error?i(s):a(s));}function i(o,...l){n||(n=true,t(o,...l));}function a(o){i(null,o);}}var ze={basename:um,dirname:cm,extname:pm,join:fm,sep:"/"};function um(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');jt(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=true,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return "";let o=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=true,o=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function cm(e){if(jt(e),e.length===0)return ".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=true);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function pm(e){jt(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let l=e.codePointAt(t);if(l===47){if(o){r=t+1;break}continue}n<0&&(o=true,n=t+1),l===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1);}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function fm(...e){let t=-1,n;for(;++t<e.length;)jt(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":mm(n)}function mm(e){jt(e);let t=e.codePointAt(0)===47,n=hm(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function hm(e,t){let n="",r=0,i=-1,a=0,o=-1,l,s;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else {if(l===47)break;l=47;}if(l===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=o,a=0;continue}}else if(n.length>0){n="",r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2);}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0;}else l===46&&a>-1?a++:a=-1;}return n}function jt(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}var ms={cwd:dm};function dm(){return "/"}function gt(e){return !!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function hs(e){if(typeof e=="string")e=new URL(e);else if(!gt(e)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return gm(e)}function gm(e){if(e.hostname!==""){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}var ri=["history","path","basename","stem","extname","dirname"],st=class{constructor(t){let n;t?gt(t)?n={path:t}:typeof t=="string"||ym(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":ms.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ri.length;){let a=ri[r];a in n&&n[a]!==void 0&&n[a]!==null&&(this[a]=a==="history"?[...n[a]]:n[a]);}let i;for(i in n)ri.includes(i)||(this[i]=n[i]);}get basename(){return typeof this.path=="string"?ze.basename(this.path):void 0}set basename(t){oi(t,"basename"),ii(t,"basename"),this.path=ze.join(this.dirname||"",t);}get dirname(){return typeof this.path=="string"?ze.dirname(this.path):void 0}set dirname(t){ds(this.basename,"dirname"),this.path=ze.join(t||"",this.basename);}get extname(){return typeof this.path=="string"?ze.extname(this.path):void 0}set extname(t){if(ii(t,"extname"),ds(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=ze.join(this.dirname,this.stem+(t||""));}get path(){return this.history[this.history.length-1]}set path(t){gt(t)&&(t=hs(t)),oi(t,"path"),this.path!==t&&this.history.push(t);}get stem(){return typeof this.path=="string"?ze.basename(this.path,this.extname):void 0}set stem(t){oi(t,"stem"),ii(t,"stem"),this.path=ze.join(this.dirname||"",t+(this.extname||""));}fail(t,n,r){let i=this.message(t,n,r);throw i.fatal=true,i}info(t,n,r){let i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){let i=new re(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=false,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function ii(e,t){if(e&&e.includes(ze.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+ze.sep+"`")}function oi(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function ds(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function ym(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var gs=(function(e){let r=this.constructor.prototype,i=r[e],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a});var xm={}.hasOwnProperty,ui=class e extends gs{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ni();}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r);}return t.data((0, Hn.default)(true,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(si("data",this.frozen),this.namespace[t]=n,this):xm.call(this.namespace,t)&&this.namespace[t]||void 0:t?(si("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===false)continue;r[0]===true&&(r[0]=void 0);let i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i);}return this.frozen=true,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();let n=Bn(t),r=this.parser||this.Parser;return ai("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),ai("process",this.parser||this.Parser),li("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(a,o){let l=Bn(t),s=r.parse(l);r.run(s,l,function(c,p,f){if(c||!p||!f)return u(c);let m=p,h=r.stringify(m,f);vm(h)?f.value=h:f.result=h,u(c,f);});function u(c,p){c||!p?o(c):a?a(p):n(void 0,p);}}}processSync(t){let n=false,r;return this.freeze(),ai("processSync",this.parser||this.Parser),li("processSync",this.compiler||this.Compiler),this.process(t,i),xs("processSync","process",n),r;function i(a,o){n=true,ti(a),r=o;}}run(t,n,r){ys(t),this.freeze();let i=this.transformers;return !r&&typeof n=="function"&&(r=n,n=void 0),r?a(void 0,r):new Promise(a);function a(o,l){let s=Bn(n);i.run(t,s,u);function u(c,p,f){let m=p||t;c?l(c):o?o(m):r(void 0,m,f);}}}runSync(t,n){let r=false,i;return this.run(t,n,a),xs("runSync","run",r),i;function a(o,l){ti(o),i=l,r=true;}}stringify(t,n){this.freeze();let r=Bn(n),i=this.compiler||this.Compiler;return li("stringify",i),ys(t),i(t,r)}use(t,...n){let r=this.attachers,i=this.namespace;if(si("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function a(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){let[c,...p]=u;s(c,p);}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=(0, Hn.default)(true,i.settings,u.settings));}function l(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){let p=u[c];a(p);}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,c){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...c]);else if(c.length>0){let[m,...h]=c,y=r[f][1];Ht(y)&&Ht(m)&&(m=(0, Hn.default)(true,y,m)),r[f]=[u,m,...h];}}}},ci=new ui().freeze();function ai(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function li(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function si(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ys(e){if(!Ht(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function xs(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Bn(e){return bm(e)?e:new st(e)}function bm(e){return !!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function vm(e){return typeof e=="string"||wm(e)}function wm(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var km="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",bs=[],vs={allowDangerousHtml:true},_m=/^(https?|ircs?|mailto|xmpp)$/i,zm=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function pi(e){let t=Sm(e),n=Cm(e);return Em(t.runSync(t.parse(n),n),e)}function Sm(e){let t=e.rehypePlugins||bs,n=e.remarkPlugins||bs,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...vs}:vs;return ci().use(An).use(n).use(On,r).use(t)}function Cm(e){let t=e.children||"",n=new st;return typeof t=="string"?n.value=t:(void 0),n}function Em(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,l=t.unwrapDisallowed,s=t.urlTransform||ws;for(let c of zm)Object.hasOwn(t,c.from)&&(""+c.from+(c.to?"use `"+c.to+"` instead":"remove it")+km+c.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),lt(e,u),Pr(e,{Fragment:be,components:i,ignoreInvalidStyle:true,jsx:w,jsxs:w,passKeys:true,passNode:true});function u(c,p,f){if(c.type==="raw"&&f&&typeof p=="number")return o?f.children.splice(p,1):f.children[p]={type:"text",value:c.value},p;if(c.type==="element"){let m;for(m in Rt)if(Object.hasOwn(Rt,m)&&Object.hasOwn(c.properties,m)){let h=c.properties[m],y=Rt[m];(y===null||y.includes(c.tagName))&&(c.properties[m]=s(String(h||""),m,c));}}if(c.type==="element"){let m=n?!n.includes(c.tagName):a?a.includes(c.tagName):false;if(!m&&r&&typeof p=="number"&&(m=!r(c,p,f)),m&&f&&typeof p=="number")return l&&c.children?f.children.splice(p,1,...c.children):f.children.splice(p,1),p}}}function ws(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||_m.test(e.slice(0,t))?e:""}function fi(e,t){let n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function mi(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function hi(e,t,n){let i=Ve((n||{}).ignore||[]),a=Im(t),o=-1;for(;++o<a.length;)Bt(e,"text",l);function l(u,c){let p=-1,f;for(;++p<c.length;){let m=c[p],h=f?f.children:void 0;if(i(m,h?h.indexOf(m):void 0,f))return;f=m;}if(f)return s(u,c)}function s(u,c){let p=c[c.length-1],f=a[o][0],m=a[o][1],h=0,v=p.children.indexOf(u),x=false,S=[];f.lastIndex=0;let C=f.exec(u.value);for(;C;){let N=C.index,D={index:C.index,input:C.input,stack:[...c,u]},k=m(...C,D);if(typeof k=="string"&&(k=k.length>0?{type:"text",value:k}:void 0),k===false?f.lastIndex=N+1:(h!==N&&S.push({type:"text",value:u.value.slice(h,N)}),Array.isArray(k)?S.push(...k):k&&S.push(k),h=N+C[0].length,x=true),!f.global)break;C=f.exec(u.value);}return x?(h<u.value.length&&S.push({type:"text",value:u.value.slice(h)}),p.children.splice(v,1,...S)):S=[u],v+S.length}}function Im(e){let t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let i=n[r];t.push([Am(i[0]),Tm(i[1])]);}return t}function Am(e){return typeof e=="string"?new RegExp(mi(e),"g"):e}function Tm(e){return typeof e=="function"?e:function(){return e}}var di="phrasing",gi=["autolink","link","image","label"];function xi(){return {transforms:[Nm],enter:{literalAutolink:Pm,literalAutolinkEmail:yi,literalAutolinkHttp:yi,literalAutolinkWww:yi},exit:{literalAutolink:Mm,literalAutolinkEmail:Dm,literalAutolinkHttp:Lm,literalAutolinkWww:Rm}}}function bi(){return {unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:di,notInConstruct:gi},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:di,notInConstruct:gi},{character:":",before:"[ps]",after:"\\/",inConstruct:di,notInConstruct:gi}]}}function Pm(e){this.enter({type:"link",title:null,url:"",children:[]},e);}function yi(e){this.config.enter.autolinkProtocol.call(this,e);}function Lm(e){this.config.exit.autolinkProtocol.call(this,e);}function Rm(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e);}function Dm(e){this.config.exit.autolinkEmail.call(this,e);}function Mm(e){this.exit(e);}function Nm(e){hi(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Fm],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Om]],{ignore:["link","linkReference"]});}function Fm(e,t,n,r,i){let a="";if(!ks(i)||(/^w/i.test(t)&&(n=t+n,t="",a="http://"),!Um(n)))return  false;let o=Bm(n+r);if(!o[0])return  false;let l={type:"link",title:null,url:a+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[l,{type:"text",value:o[1]}]:l}function Om(e,t,n,r){return !ks(r,true)||/[-\d_]$/.test(n)?false:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Um(e){let t=e.split(".");return !(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Bm(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return [e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),i=fi(e,"("),a=fi(e,")");for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),a++;return [e,n]}function ks(e,t){let n=e.input.charCodeAt(e.index-1);return (e.index===0||Ee(n)||tt(n))&&(!t||n!==47)}_s.peek=Gm;function Hm(){this.buffer();}function jm(e){this.enter({type:"footnoteReference",identifier:"",label:""},e);}function Wm(){this.buffer();}function Vm(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e);}function $m(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=me(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function qm(e){this.exit(e);}function Ym(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=me(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function Xm(e){this.exit(e);}function Gm(){return "["}function _s(e,t,n,r){let i=n.createTracker(r),a=i.move("[^"),o=n.enter("footnoteReference"),l=n.enter("reference");return a+=i.move(n.safe(n.associationId(e),{after:"]",before:a})),l(),o(),a+=i.move("]"),a}function vi(){return {enter:{gfmFootnoteCallString:Hm,gfmFootnoteCall:jm,gfmFootnoteDefinitionLabelString:Wm,gfmFootnoteDefinition:Vm},exit:{gfmFootnoteCallString:$m,gfmFootnoteCall:qm,gfmFootnoteDefinitionLabelString:Ym,gfmFootnoteDefinition:Xm}}}function wi(e){let t=false;return e&&e.firstLineBlank&&(t=true),{handlers:{footnoteDefinition:n,footnoteReference:_s},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,a,o){let l=a.createTracker(o),s=l.move("[^"),u=a.enter("footnoteDefinition"),c=a.enter("label");return s+=l.move(a.safe(a.associationId(r),{before:s,after:"]"})),c(),s+=l.move("]:"),r.children&&r.children.length>0&&(l.shift(4),s+=l.move((t?`
`:" ")+a.indentLines(a.containerFlow(r,l.current()),t?zs:Km))),u(),s}}function Km(e,t,n){return t===0?e:zs(e,t,n)}function zs(e,t,n){return (n?"":"    ")+e}var Jm=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Ss.peek=eh;function ki(){return {canContainEols:["delete"],enter:{strikethrough:Qm},exit:{strikethrough:Zm}}}function _i(){return {unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Jm}],handlers:{delete:Ss}}}function Qm(e){this.enter({type:"delete",children:[]},e);}function Zm(e){this.exit(e);}function Ss(e,t,n,r){let i=n.createTracker(r),a=n.enter("strikethrough"),o=i.move("~~");return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),a(),o}function eh(){return "~"}function th(e){return e.length}function Es(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||th,a=[],o=[],l=[],s=[],u=0,c=-1;for(;++c<e.length;){let y=[],v=[],x=-1;for(e[c].length>u&&(u=e[c].length);++x<e[c].length;){let S=nh(e[c][x]);if(n.alignDelimiters!==false){let C=i(S);v[x]=C,(s[x]===void 0||C>s[x])&&(s[x]=C);}y.push(S);}o[c]=y,l[c]=v;}let p=-1;if(typeof r=="object"&&"length"in r)for(;++p<u;)a[p]=Cs(r[p]);else {let y=Cs(r);for(;++p<u;)a[p]=y;}p=-1;let f=[],m=[];for(;++p<u;){let y=a[p],v="",x="";y===99?(v=":",x=":"):y===108?v=":":y===114&&(x=":");let S=n.alignDelimiters===false?1:Math.max(1,s[p]-v.length-x.length),C=v+"-".repeat(S)+x;n.alignDelimiters!==false&&(S=v.length+S+x.length,S>s[p]&&(s[p]=S),m[p]=S),f[p]=C;}o.splice(1,0,f),l.splice(1,0,m),c=-1;let h=[];for(;++c<o.length;){let y=o[c],v=l[c];p=-1;let x=[];for(;++p<u;){let S=y[p]||"",C="",N="";if(n.alignDelimiters!==false){let D=s[p]-(v[p]||0),k=a[p];k===114?C=" ".repeat(D):k===99?D%2?(C=" ".repeat(D/2+.5),N=" ".repeat(D/2-.5)):(C=" ".repeat(D/2),N=C):N=" ".repeat(D);}n.delimiterStart!==false&&!p&&x.push("|"),n.padding!==false&&!(n.alignDelimiters===false&&S==="")&&(n.delimiterStart!==false||p)&&x.push(" "),n.alignDelimiters!==false&&x.push(C),x.push(S),n.alignDelimiters!==false&&x.push(N),n.padding!==false&&x.push(" "),(n.delimiterEnd!==false||p!==u-1)&&x.push("|");}h.push(n.delimiterEnd===false?x.join("").replace(/ +$/,""):x.join(""));}return h.join(`
`)}function nh(e){return e==null?"":String(e)}function Cs(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Is(e,t,n,r){let i=n.enter("blockquote"),a=n.createTracker(r);a.move("> "),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),rh);return i(),o}function rh(e,t,n){return ">"+(n?"":" ")+e}function Ts(e,t){return As(e,t.inConstruct,true)&&!As(e,t.notInConstruct,false)}function As(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return  true;return  false}function zi(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Ts(n.stack,n.unsafe[i]))return /[ \t]/.test(r.before)?"":" ";return `\\
`}function Ps(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function Ls(e,t){return !!(t.options.fences===false&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Rs(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Ds(e,t,n,r){let i=Rs(n),a=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(Ls(e,n)){let p=n.enter("codeIndented"),f=n.indentLines(a,ih);return p(),f}let l=n.createTracker(r),s=i.repeat(Math.max(Ps(a,i)+1,3)),u=n.enter("codeFenced"),c=l.move(s);if(e.lang){let p=n.enter(`codeFencedLang${o}`);c+=l.move(n.safe(e.lang,{before:c,after:" ",encode:["`"],...l.current()})),p();}if(e.lang&&e.meta){let p=n.enter(`codeFencedMeta${o}`);c+=l.move(" "),c+=l.move(n.safe(e.meta,{before:c,after:`
`,encode:["`"],...l.current()})),p();}return c+=l.move(`
`),a&&(c+=l.move(a+`
`)),c+=l.move(s),u(),c}function ih(e,t,n){return (n?"":"    ")+e}function yt(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Ms(e,t,n,r){let i=yt(n),a=i==='"'?"Quote":"Apostrophe",o=n.enter("definition"),l=n.enter("label"),s=n.createTracker(r),u=s.move("[");return u+=s.move(n.safe(n.associationId(e),{before:u,after:"]",...s.current()})),u+=s.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...s.current()}))),l(),e.title&&(l=n.enter(`title${a}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),o(),u}function Ns(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function $e(e){return "&#x"+e.toString(16).toUpperCase()+";"}function xt(e,t,n){let r=Ne(e),i=Ne(t);return r===void 0?i===void 0?n==="_"?{inside:true,outside:true}:{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:true}:r===1?i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:false}:i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:false}:{inside:false,outside:false}}Si.peek=oh;function Si(e,t,n,r){let i=Ns(n),a=n.enter("emphasis"),o=n.createTracker(r),l=o.move(i),s=o.move(n.containerPhrasing(e,{after:i,before:l,...o.current()})),u=s.charCodeAt(0),c=xt(r.before.charCodeAt(r.before.length-1),u,i);c.inside&&(s=$e(u)+s.slice(1));let p=s.charCodeAt(s.length-1),f=xt(r.after.charCodeAt(0),p,i);f.inside&&(s=s.slice(0,-1)+$e(p));let m=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:c.outside},l+s+m}function oh(e,t,n){return n.options.emphasis||"*"}function Fs(e,t){let n=false;return lt(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=true,at}),!!((!e.depth||e.depth<3)&&Ze(e)&&(t.options.setext||n))}function Os(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(Fs(e,n)){let c=n.enter("headingSetext"),p=n.enter("phrasing"),f=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return p(),c(),f+`
`+(i===1?"=":"-").repeat(f.length-(Math.max(f.lastIndexOf("\r"),f.lastIndexOf(`
`))+1))}let o="#".repeat(i),l=n.enter("headingAtx"),s=n.enter("phrasing");a.move(o+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...a.current()});return /^[\t ]/.test(u)&&(u=$e(u.charCodeAt(0))+u.slice(1)),u=u?o+" "+u:o,n.options.closeAtx&&(u+=" "+o),s(),l(),u}Ci.peek=ah;function Ci(e){return e.value||""}function ah(){return "<"}Ei.peek=lh;function Ei(e,t,n,r){let i=yt(n),a=i==='"'?"Quote":"Apostrophe",o=n.enter("image"),l=n.enter("label"),s=n.createTracker(r),u=s.move("![");return u+=s.move(n.safe(e.alt,{before:u,after:"]",...s.current()})),u+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=n.enter(`title${a}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),u+=s.move(")"),o(),u}function lh(){return "!"}Ii.peek=sh;function Ii(e,t,n,r){let i=e.referenceType,a=n.enter("imageReference"),o=n.enter("label"),l=n.createTracker(r),s=l.move("!["),u=n.safe(e.alt,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),o();let c=n.stack;n.stack=[],o=n.enter("reference");let p=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return o(),n.stack=c,a(),i==="full"||!u||u!==p?s+=l.move(p+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function sh(){return "!"}Ai.peek=uh;function Ai(e,t,n){let r=e.value||"",i="`",a=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++a<n.unsafe.length;){let o=n.unsafe[a],l=n.compilePattern(o),s;if(o.atBreak)for(;s=l.exec(r);){let u=s.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(s.index+1);}}return i+r+i}function uh(){return "`"}function Ti(e,t){let n=Ze(e);return !!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Pi.peek=ch;function Pi(e,t,n,r){let i=yt(n),a=i==='"'?"Quote":"Apostrophe",o=n.createTracker(r),l,s;if(Ti(e,n)){let c=n.stack;n.stack=[],l=n.enter("autolink");let p=o.move("<");return p+=o.move(n.containerPhrasing(e,{before:p,after:">",...o.current()})),p+=o.move(">"),l(),n.stack=c,p}l=n.enter("link"),s=n.enter("label");let u=o.move("[");return u+=o.move(n.containerPhrasing(e,{before:u,after:"](",...o.current()})),u+=o.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=o.move("<"),u+=o.move(n.safe(e.url,{before:u,after:">",...o.current()})),u+=o.move(">")):(s=n.enter("destinationRaw"),u+=o.move(n.safe(e.url,{before:u,after:e.title?" ":")",...o.current()}))),s(),e.title&&(s=n.enter(`title${a}`),u+=o.move(" "+i),u+=o.move(n.safe(e.title,{before:u,after:i,...o.current()})),u+=o.move(i),s()),u+=o.move(")"),l(),u}function ch(e,t,n){return Ti(e,n)?"<":"["}Li.peek=ph;function Li(e,t,n,r){let i=e.referenceType,a=n.enter("linkReference"),o=n.enter("label"),l=n.createTracker(r),s=l.move("["),u=n.containerPhrasing(e,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),o();let c=n.stack;n.stack=[],o=n.enter("reference");let p=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return o(),n.stack=c,a(),i==="full"||!u||u!==p?s+=l.move(p+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function ph(){return "["}function bt(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Us(e){let t=bt(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Bs(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function jn(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Hs(e,t,n,r){let i=n.enter("list"),a=n.bulletCurrent,o=e.ordered?Bs(n):bt(n),l=e.ordered?o==="."?")":".":Us(n),s=t&&n.bulletLastUsed?o===n.bulletLastUsed:false;if(!e.ordered){let c=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&c&&(!c.children||!c.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=true),jn(n)===o&&c){let p=-1;for(;++p<e.children.length;){let f=e.children[p];if(f&&f.type==="listItem"&&f.children&&f.children[0]&&f.children[0].type==="thematicBreak"){s=true;break}}}}s&&(o=l),n.bulletCurrent=o;let u=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),u}function js(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Ws(e,t,n,r){let i=js(n),a=n.bulletCurrent||bt(n);t&&t.type==="list"&&t.ordered&&(a=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===false?0:t.children.indexOf(e))+a);let o=a.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let l=n.createTracker(r);l.move(a+" ".repeat(o-a.length)),l.shift(o);let s=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,l.current()),c);return s(),u;function c(p,f,m){return f?(m?"":" ".repeat(o))+p:(m?a:a+" ".repeat(o-a.length))+p}}function Vs(e,t,n,r){let i=n.enter("paragraph"),a=n.enter("phrasing"),o=n.containerPhrasing(e,r);return a(),i(),o}var Ri=Ve(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function $s(e,t,n,r){return (e.children.some(function(o){return Ri(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function qs(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Di.peek=fh;function Di(e,t,n,r){let i=qs(n),a=n.enter("strong"),o=n.createTracker(r),l=o.move(i+i),s=o.move(n.containerPhrasing(e,{after:i,before:l,...o.current()})),u=s.charCodeAt(0),c=xt(r.before.charCodeAt(r.before.length-1),u,i);c.inside&&(s=$e(u)+s.slice(1));let p=s.charCodeAt(s.length-1),f=xt(r.after.charCodeAt(0),p,i);f.inside&&(s=s.slice(0,-1)+$e(p));let m=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:c.outside},l+s+m}function fh(e,t,n){return n.options.strong||"*"}function Ys(e,t,n,r){return n.safe(e.value,r)}function Xs(e){let t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Gs(e,t,n){let r=(jn(n)+(n.options.ruleSpaces?" ":"")).repeat(Xs(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Wt={blockquote:Is,break:zi,code:Ds,definition:Ms,emphasis:Si,hardBreak:zi,heading:Os,html:Ci,image:Ei,imageReference:Ii,inlineCode:Ai,link:Pi,linkReference:Li,list:Hs,listItem:Ws,paragraph:Vs,root:$s,strong:Di,text:Ys,thematicBreak:Gs};function Ni(){return {enter:{table:mh,tableData:Ks,tableHeader:Ks,tableRow:dh},exit:{codeText:gh,table:hh,tableData:Mi,tableHeader:Mi,tableRow:Mi}}}function mh(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=true;}function hh(e){this.exit(e),this.data.inTable=void 0;}function dh(e){this.enter({type:"tableRow",children:[]},e);}function Mi(e){this.exit(e);}function Ks(e){this.enter({type:"tableCell",children:[]},e);}function gh(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,yh));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e);}function yh(e,t){return t==="|"?t:e}function Fi(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?" ":"|";return {unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:true,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:true,character:":",after:"-"},{atBreak:true,character:"-",after:"[:|-]"}],handlers:{inlineCode:f,table:o,tableCell:s,tableRow:l}};function o(m,h,y,v){return u(c(m,y,v),m.align)}function l(m,h,y,v){let x=p(m,y,v),S=u([x]);return S.slice(0,S.indexOf(`
`))}function s(m,h,y,v){let x=y.enter("tableCell"),S=y.enter("phrasing"),C=y.containerPhrasing(m,{...v,before:a,after:a});return S(),x(),C}function u(m,h){return Es(m,{align:h,alignDelimiters:r,padding:n,stringLength:i})}function c(m,h,y){let v=m.children,x=-1,S=[],C=h.enter("table");for(;++x<v.length;)S[x]=p(v[x],h,y);return C(),S}function p(m,h,y){let v=m.children,x=-1,S=[],C=h.enter("tableRow");for(;++x<v.length;)S[x]=s(v[x],m,h,y);return C(),S}function f(m,h,y){let v=Wt.inlineCode(m,h,y);return y.stack.includes("tableCell")&&(v=v.replace(/\|/g,"\\$&")),v}}function Oi(){return {exit:{taskListCheckValueChecked:Js,taskListCheckValueUnchecked:Js,paragraph:xh}}}function Ui(){return {unsafe:[{atBreak:true,character:"-",after:"[:|-]"}],handlers:{listItem:bh}}}function Js(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked";}function xh(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let i=t.children,a=-1,o;for(;++a<i.length;){let l=i[a];if(l.type==="paragraph"){o=l;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)));}}this.exit(e);}function bh(e,t,n,r){let i=e.children[0],a=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",l=n.createTracker(r);a&&l.move(o);let s=Wt.listItem(e,t,n,{...r,...l.current()});return a&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),s;function u(c){return c+o}}function Bi(){return [xi(),vi(),ki(),Ni(),Oi()]}function Hi(e){return {extensions:[bi(),wi(e),_i(),Fi(e),Ui()]}}var vh={tokenize:Sh,partial:true},Qs={tokenize:Ch,partial:true},Zs={tokenize:Eh,partial:true},eu={tokenize:Ih,partial:true},wh={tokenize:Ah,partial:true},tu={name:"wwwAutolink",tokenize:_h,previous:ru},nu={name:"protocolAutolink",tokenize:zh,previous:iu},Fe={name:"emailAutolink",tokenize:kh,previous:ou},Ae={};function Wi(){return {text:Ae}}var ut=48;for(;ut<123;)Ae[ut]=Fe,ut++,ut===58?ut=65:ut===91&&(ut=97);Ae[43]=Fe;Ae[45]=Fe;Ae[46]=Fe;Ae[95]=Fe;Ae[72]=[Fe,nu];Ae[104]=[Fe,nu];Ae[87]=[Fe,tu];Ae[119]=[Fe,tu];function kh(e,t,n){let r=this,i,a;return o;function o(p){return !ji(p)||!ou.call(r,r.previous)||Vi(r.events)?n(p):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(p))}function l(p){return ji(p)?(e.consume(p),l):p===64?(e.consume(p),s):n(p)}function s(p){return p===46?e.check(wh,c,u)(p):p===45||p===95||ee(p)?(a=true,e.consume(p),s):c(p)}function u(p){return e.consume(p),i=true,s}function c(p){return a&&i&&ae(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(p)):n(p)}}function _h(e,t,n){let r=this;return i;function i(o){return o!==87&&o!==119||!ru.call(r,r.previous)||Vi(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(vh,e.attempt(Qs,e.attempt(Zs,a),n),n)(o))}function a(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function zh(e,t,n){let r=this,i="",a=false;return o;function o(p){return (p===72||p===104)&&iu.call(r,r.previous)&&!Vi(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(p),e.consume(p),l):n(p)}function l(p){if(ae(p)&&i.length<5)return i+=String.fromCodePoint(p),e.consume(p),l;if(p===58){let f=i.toLowerCase();if(f==="http"||f==="https")return e.consume(p),s}return n(p)}function s(p){return p===47?(e.consume(p),a?u:(a=true,s)):n(p)}function u(p){return p===null||et(p)||$(p)||Ee(p)||tt(p)?n(p):e.attempt(Qs,e.attempt(Zs,c),n)(p)}function c(p){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(p)}}function Sh(e,t,n){let r=0;return i;function i(o){return (o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),a):n(o)}function a(o){return o===null?n(o):t(o)}}function Ch(e,t,n){let r,i,a;return o;function o(u){return u===46||u===95?e.check(eu,s,l)(u):u===null||$(u)||Ee(u)||u!==45&&tt(u)?s(u):(a=true,e.consume(u),o)}function l(u){return u===95?r=true:(i=r,r=void 0),e.consume(u),o}function s(u){return i||r||!a?n(u):t(u)}}function Eh(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(eu,t,a)(o):o===null||$(o)||Ee(o)?t(o):(e.consume(o),i)}function a(o){return o===41&&r++,e.consume(o),i}}function Ih(e,t,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),a):l===93?(e.consume(l),i):l===60||l===null||$(l)||Ee(l)?t(l):n(l)}function i(l){return l===null||l===40||l===91||$(l)||Ee(l)?t(l):r(l)}function a(l){return ae(l)?o(l):n(l)}function o(l){return l===59?(e.consume(l),r):ae(l)?(e.consume(l),o):n(l)}}function Ah(e,t,n){return r;function r(a){return e.consume(a),i}function i(a){return ee(a)?n(a):t(a)}}function ru(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||$(e)}function iu(e){return !ae(e)}function ou(e){return !(e===47||ji(e))}function ji(e){return e===43||e===45||e===46||e===95||ee(e)}function Vi(e){let t=e.length,n=false;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=true;break}if(r._gfmAutolinkLiteralWalkedInto){n=false;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=true),n}var Th={tokenize:Fh,partial:true};function $i(){return {document:{91:{name:"gfmFootnoteDefinition",tokenize:Dh,continuation:{tokenize:Mh},exit:Nh}},text:{91:{name:"gfmFootnoteCall",tokenize:Rh},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Ph,resolveTo:Lh}}}}function Ph(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let s=r.events[i][1];if(s.type==="labelImage"){o=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return l;function l(s){if(!o||!o._balanced)return n(s);let u=me(r.sliceSerialize({start:o.end,end:r.now()}));return u.codePointAt(0)!==94||!a.includes(u.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function Lh(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;let o={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},s=[e[n+1],e[n+2],["enter",i,t],e[n+3],e[n+4],["enter",a,t],["exit",a,t],["enter",o,t],["enter",l,t],["exit",l,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(n,e.length-n+1,...s),e}function Rh(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return l;function l(p){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(p),e.exit("gfmFootnoteCallLabelMarker"),s}function s(p){return p!==94?n(p):(e.enter("gfmFootnoteCallMarker"),e.consume(p),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(p){if(a>999||p===93&&!o||p===null||p===91||$(p))return n(p);if(p===93){e.exit("chunkString");let f=e.exit("gfmFootnoteCallString");return i.includes(me(r.sliceSerialize(f)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(p),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(p)}return $(p)||(o=true),a++,e.consume(p),p===92?c:u}function c(p){return p===91||p===92||p===93?(e.consume(p),a++,u):u(p)}}function Dh(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,l;return s;function s(h){return e.enter("gfmFootnoteDefinition")._container=true,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(h){return h===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",c):n(h)}function c(h){if(o>999||h===93&&!l||h===null||h===91||$(h))return n(h);if(h===93){e.exit("chunkString");let y=e.exit("gfmFootnoteDefinitionLabelString");return a=me(r.sliceSerialize(y)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),f}return $(h)||(l=true),o++,e.consume(h),h===92?p:c}function p(h){return h===91||h===92||h===93?(e.consume(h),o++,c):c(h)}function f(h){return h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),i.includes(a)||i.push(a),R(e,m,"gfmFootnoteDefinitionWhitespace")):n(h)}function m(h){return t(h)}}function Mh(e,t,n){return e.check(Ie,t,e.attempt(Th,t,n))}function Nh(e){e.exit("gfmFootnoteDefinition");}function Fh(e,t,n){let r=this;return R(e,i,"gfmFootnoteDefinitionIndent",5);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],true).length===4?t(a):n(a)}}function qi(e){let n=(e||{}).singleTilde,r={name:"strikethrough",tokenize:a,resolveAll:i};return n==null&&(n=true),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,l){let s=-1;for(;++s<o.length;)if(o[s][0]==="enter"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._close){let u=s;for(;u--;)if(o[u][0]==="exit"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._open&&o[s][1].end.offset-o[s][1].start.offset===o[u][1].end.offset-o[u][1].start.offset){o[s][1].type="strikethroughSequence",o[u][1].type="strikethroughSequence";let c={type:"strikethrough",start:Object.assign({},o[u][1].start),end:Object.assign({},o[s][1].end)},p={type:"strikethroughText",start:Object.assign({},o[u][1].end),end:Object.assign({},o[s][1].start)},f=[["enter",c,l],["enter",o[u][1],l],["exit",o[u][1],l],["enter",p,l]],m=l.parser.constructs.insideSpan.null;m&&ie(f,f.length,0,je(m,o.slice(u+1,s),l)),ie(f,f.length,0,[["exit",p,l],["enter",o[s][1],l],["exit",o[s][1],l],["exit",c,l]]),ie(o,u-1,s-u+3,f),s=u+f.length-2;break}}for(s=-1;++s<o.length;)o[s][1].type==="strikethroughSequenceTemporary"&&(o[s][1].type="data");return o}function a(o,l,s){let u=this.previous,c=this.events,p=0;return f;function f(h){return u===126&&c[c.length-1][1].type!=="characterEscape"?s(h):(o.enter("strikethroughSequenceTemporary"),m(h))}function m(h){let y=Ne(u);if(h===126)return p>1?s(h):(o.consume(h),p++,m);if(p<2&&!n)return s(h);let v=o.exit("strikethroughSequenceTemporary"),x=Ne(h);return v._open=!x||x===2&&!!y,v._close=!y||y===2&&!!x,l(h)}}}var Wn=class{constructor(){this.map=[];}add(t,n,r){Oh(this,t,n,r);}consume(t){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(let a of i)t.push(a);i=r.pop();}this.map.length=0;}};function Oh(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1;}e.map.push([t,n,r]);}}function au(e,t){let n=false,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let a=r.length-1;r[a]=r[a]==="left"?"center":"right";}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=true);t+=1;}return r}function Yi(){return {flow:{null:{name:"table",tokenize:Uh,resolveAll:Bh}}}}function Uh(e,t,n){let r=this,i=0,a=0,o;return l;function l(b){let G=r.events.length-1;for(;G>-1;){let P=r.events[G][1].type;if(P==="lineEnding"||P==="linePrefix")G--;else break}let V=G>-1?r.events[G][1].type:null,z=V==="tableHead"||V==="tableRow"?k:s;return z===k&&r.parser.lazy[r.now().line]?n(b):z(b)}function s(b){return e.enter("tableHead"),e.enter("tableRow"),u(b)}function u(b){return b===124||(o=true,a+=1),c(b)}function c(b){return b===null?n(b):A(b)?a>1?(a=0,r.interrupt=true,e.exit("tableRow"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),m):n(b):M(b)?R(e,c,"whitespace")(b):(a+=1,o&&(o=false,i+=1),b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),o=true,c):(e.enter("data"),p(b)))}function p(b){return b===null||b===124||$(b)?(e.exit("data"),c(b)):(e.consume(b),b===92?f:p)}function f(b){return b===92||b===124?(e.consume(b),p):p(b)}function m(b){return r.interrupt=false,r.parser.lazy[r.now().line]?n(b):(e.enter("tableDelimiterRow"),o=false,M(b)?R(e,h,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):h(b))}function h(b){return b===45||b===58?v(b):b===124?(o=true,e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),y):D(b)}function y(b){return M(b)?R(e,v,"whitespace")(b):v(b)}function v(b){return b===58?(a+=1,o=true,e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),x):b===45?(a+=1,x(b)):b===null||A(b)?N(b):D(b)}function x(b){return b===45?(e.enter("tableDelimiterFiller"),S(b)):D(b)}function S(b){return b===45?(e.consume(b),S):b===58?(o=true,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),C):(e.exit("tableDelimiterFiller"),C(b))}function C(b){return M(b)?R(e,N,"whitespace")(b):N(b)}function N(b){return b===124?h(b):b===null||A(b)?!o||i!==a?D(b):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(b)):D(b)}function D(b){return n(b)}function k(b){return e.enter("tableRow"),W(b)}function W(b){return b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),W):b===null||A(b)?(e.exit("tableRow"),t(b)):M(b)?R(e,W,"whitespace")(b):(e.enter("data"),q(b))}function q(b){return b===null||b===124||$(b)?(e.exit("data"),W(b)):(e.consume(b),b===92?j:q)}function j(b){return b===92||b===124?(e.consume(b),q):q(b)}}function Bh(e,t){let n=-1,r=true,i=0,a=[0,0,0,0],o=[0,0,0,0],l=false,s=0,u,c,p,f=new Wn;for(;++n<e.length;){let m=e[n],h=m[1];m[0]==="enter"?h.type==="tableHead"?(l=false,s!==0&&(lu(f,t,s,u,c),c=void 0,s=0),u={type:"table",start:Object.assign({},h.start),end:Object.assign({},h.end)},f.add(n,0,[["enter",u,t]])):h.type==="tableRow"||h.type==="tableDelimiterRow"?(r=true,p=void 0,a=[0,0,0,0],o=[0,n+1,0,0],l&&(l=false,c={type:"tableBody",start:Object.assign({},h.start),end:Object.assign({},h.end)},f.add(n,0,[["enter",c,t]])),i=h.type==="tableDelimiterRow"?2:c?3:1):i&&(h.type==="data"||h.type==="tableDelimiterMarker"||h.type==="tableDelimiterFiller")?(r=false,o[2]===0&&(a[1]!==0&&(o[0]=o[1],p=Vn(f,t,a,i,void 0,p),a=[0,0,0,0]),o[2]=n)):h.type==="tableCellDivider"&&(r?r=false:(a[1]!==0&&(o[0]=o[1],p=Vn(f,t,a,i,void 0,p)),a=o,o=[a[1],n,0,0])):h.type==="tableHead"?(l=true,s=n):h.type==="tableRow"||h.type==="tableDelimiterRow"?(s=n,a[1]!==0?(o[0]=o[1],p=Vn(f,t,a,i,n,p)):o[1]!==0&&(p=Vn(f,t,o,i,n,p)),i=0):i&&(h.type==="data"||h.type==="tableDelimiterMarker"||h.type==="tableDelimiterFiller")&&(o[3]=n);}for(s!==0&&lu(f,t,s,u,c),f.consume(t.events),n=-1;++n<t.events.length;){let m=t.events[n];m[0]==="enter"&&m[1].type==="table"&&(m[1]._align=au(t.events,n));}return e}function Vn(e,t,n,r,i,a){let o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(a.end=Object.assign({},vt(t.events,n[0])),e.add(n[0],0,[["exit",a,t]]));let s=vt(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",a,t]]),n[2]!==0){let u=vt(t.events,n[2]),c=vt(t.events,n[3]),p={type:l,start:Object.assign({},u),end:Object.assign({},c)};if(e.add(n[2],0,[["enter",p,t]]),r!==2){let f=t.events[n[2]],m=t.events[n[3]];if(f[1].end=Object.assign({},m[1].end),f[1].type="chunkText",f[1].contentType="text",n[3]>n[2]+1){let h=n[2]+1,y=n[3]-n[2]-1;e.add(h,y,[]);}}e.add(n[3]+1,0,[["exit",p,t]]);}return i!==void 0&&(a.end=Object.assign({},vt(t.events,i)),e.add(i,0,[["exit",a,t]]),a=void 0),a}function lu(e,t,n,r,i){let a=[],o=vt(t.events,n);i&&(i.end=Object.assign({},o),a.push(["exit",i,t])),r.end=Object.assign({},o),a.push(["exit",r,t]),e.add(n+1,0,a);}function vt(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}var Hh={name:"tasklistCheck",tokenize:jh};function Xi(){return {text:{91:Hh}}}function jh(e,t,n){let r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),a)}function a(s){return $(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),o):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),o):n(s)}function o(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(s)}function l(s){return A(s)?t(s):M(s)?e.check({tokenize:Wh},t,n)(s):n(s)}}function Wh(e,t,n){return R(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function su(e){return yn([Wi(),$i(),qi(e),Yi(),Xi()])}var Vh={};function $n(e){let t=this,n=e||Vh,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),a=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(su(n)),a.push(Bi()),o.push(Hi(n));}var $h="12c1cd5-2026-09-11T06:32:01.830Z".split("-")[0],qh="https://chat.converzen.de",uu=()=>w("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:w("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"})}),cu=()=>w("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:w("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),Yh=()=>w("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:w("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})}),Xh=()=>w("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:w("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),wt=({custom:e,fallback:t,className:n})=>e?w("span",{className:n,dangerouslySetInnerHTML:{__html:e}}):t,Gh=({title:e,subtitle:t,onClose:n,onClear:r,darkMode:i,icons:a,authControl:o})=>w("div",{className:`cvz-p-4 cvz-shadow-md cvz-flex cvz-justify-between cvz-items-start ${i?"cvz-bg-gradient-to-b cvz-from-gray-900 cvz-to-gray-800 cvz-text-white":"cvz-bg-gradient-to-b cvz-from-blue-600 cvz-to-blue-500 cvz-text-white"}`,children:[w("div",{className:"cvz-flex cvz-items-center cvz-gap-3",children:[w("div",{className:"cvz-relative",children:[w("div",{className:`cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-border-2 ${i?"cvz-border-gray-800":"cvz-border-blue-600"}`}),w("div",{className:"cvz-absolute cvz-top-0 cvz-left-0 cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-animate-ping cvz-opacity-75"})]}),w("div",{children:[w("h3",{className:"cvz-font-bold cvz-text-lg cvz-leading-tight",children:e}),t&&w("p",{className:`cvz-text-xs cvz-mt-0.5 ${i?"cvz-text-gray-300":"cvz-text-blue-100"}`,children:t})]})]}),w("div",{className:"cvz-flex cvz-gap-2 cvz-items-center",children:[o,w("button",{onClick:r,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Clear History",children:w(wt,{custom:a?.clear,fallback:w(Xh,{}),className:"cvz-w-5 cvz-h-5"})}),w("button",{onClick:n,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Close Chat",children:w(wt,{custom:a?.close,fallback:w(cu,{}),className:"cvz-w-6 cvz-h-6"})})]})]}),Kh=({content:e,enableMarkdown:t,darkMode:n})=>t?w("div",{className:"cvz-markdown-content",children:w(pi,{remarkPlugins:[$n],components:{p:({children:r})=>w("p",{className:`cvz-mb-2 cvz-last:cvz-mb-0 ${n?"cvz-text-gray-100":""}`,children:r}),h1:({children:r})=>w("h1",{className:`cvz-text-xl cvz-font-bold cvz-mb-2 cvz-mt-4 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h2:({children:r})=>w("h2",{className:`cvz-text-lg cvz-font-bold cvz-mb-2 cvz-mt-3 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h3:({children:r})=>w("h3",{className:`cvz-text-base cvz-font-bold cvz-mb-1 cvz-mt-2 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),ul:({children:r})=>w("ul",{className:`cvz-list-disc cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),ol:({children:r})=>w("ol",{className:`cvz-list-decimal cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),li:({children:r})=>w("li",{className:"cvz-ml-2",children:r}),code:({children:r})=>w("code",{className:`cvz-px-1 cvz-py-0.5 cvz-rounded cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),pre:({children:r})=>w("pre",{className:`cvz-p-2 cvz-rounded cvz-overflow-x-auto cvz-mb-2 cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),blockquote:({children:r})=>w("blockquote",{className:`cvz-border-l-4 cvz-pl-3 cvz-italic cvz-mb-2 ${n?"cvz-border-gray-600 cvz-text-gray-300":"cvz-border-gray-300"}`,children:r}),strong:({children:r})=>w("strong",{className:"cvz-font-bold",children:r}),em:({children:r})=>w("em",{className:"cvz-italic",children:r}),a:({children:r,href:i})=>w("a",{href:i,className:`cvz-underline ${n?"cvz-text-blue-400 cvz-hover:cvz-text-blue-300":"cvz-text-blue-600 cvz-hover:cvz-text-blue-800"}`,target:"_blank",rel:"noopener noreferrer",children:r}),table:({children:r})=>w("div",{className:"cvz-overflow-x-auto cvz-mb-2",children:w("table",{className:`cvz-w-full cvz-text-sm cvz-border-collapse ${n?"cvz-text-gray-100":""}`,children:r})}),thead:({children:r})=>w("thead",{className:`${n?"cvz-bg-gray-700":"cvz-bg-gray-100"}`,children:r}),tbody:({children:r})=>w("tbody",{children:r}),tr:({children:r})=>w("tr",{className:`cvz-border-b ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:r}),th:({children:r})=>w("th",{className:`cvz-px-3 cvz-py-1.5 cvz-text-left cvz-font-semibold cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r}),td:({children:r})=>w("td",{className:`cvz-px-3 cvz-py-1.5 cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r})},children:e})}):Ce("span",null,e),Jh=({messages:e,isStreaming:t,streamingMessage:n,thinkingMessage:r,activeToolCall:i,isFinalizingRef:a,messagesEndRef:o,enableMarkdown:l,darkMode:s,icons:u})=>{let c=en(null),[p,f]=fe(true);return Re(()=>{let m=c.current;if(!m)return;let h=()=>{let{scrollTop:y,scrollHeight:v,clientHeight:x}=m,S=v-y-x<100;f(S);};return m.addEventListener("scroll",h),()=>m.removeEventListener("scroll",h)},[]),Re(()=>{p&&o.current&&o.current.scrollIntoView({behavior:"smooth"});},[e,n,r,i,p,o]),w("div",{ref:c,className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-4 cvz-space-y-4 ${s?"cvz-bg-gray-900 cvz-scrollbar-dark":"cvz-bg-gray-50 cvz-scrollbar-light"}`,children:[e.length===0&&!n&&w("div",{className:`cvz-flex cvz-flex-col cvz-items-center cvz-justify-center cvz-h-full cvz-space-y-2 ${s?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:[w(wt,{custom:u?.launcher,fallback:w(uu,{}),className:"cvz-w-6 cvz-h-6"}),w("p",{className:"cvz-text-sm",children:"Start a conversation"})]}),e.map(m=>w("div",{className:`cvz-flex ${m.role==="USER"?"cvz-justify-end":"cvz-justify-start"}`,children:w("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-text-sm cvz-shadow-sm ${m.role==="USER"?s?"cvz-bg-blue-500 cvz-text-white cvz-rounded-br-none":"cvz-bg-blue-600 cvz-text-white cvz-rounded-br-none":s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border cvz-border-gray-700 cvz-rounded-bl-none":"cvz-bg-white cvz-text-gray-800 cvz-border cvz-border-gray-100 cvz-rounded-bl-none"}`,children:w(Kh,{content:m.content,enableMarkdown:l,darkMode:s})})},m.createdAt.toString())),t&&n&&!a.current&&w("div",{className:"cvz-flex cvz-justify-start",children:w("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-text-sm cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border-gray-700":"cvz-bg-white cvz-text-gray-800 cvz-border-gray-100"}`,children:n})}),t&&!n&&w("div",{className:"cvz-flex cvz-justify-start",children:w("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:i?w("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:["Calling ",i,"\u2026"]}):r?w("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:r}):w("div",{className:"cvz-flex cvz-space-x-1",children:[w("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"0ms"}}),w("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"150ms"}}),w("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"300ms"}})]})})}),w("div",{ref:o})]})},Qh=({value:e,onChange:t,onSubmit:n,isLoading:r,placeholder:i,darkMode:a,icons:o})=>w("form",{onSubmit:n,className:`cvz-p-4 cvz-border-t ${a?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:[w("div",{className:"cvz-relative cvz-flex cvz-items-center",children:[w("input",{type:"text",value:e,onChange:l=>t(l.target.value),placeholder:i,className:`cvz-w-full cvz-border cvz-text-sm cvz-rounded-full cvz-pl-4 cvz-pr-12 cvz-py-3 cvz-focus:cvz-outline-none cvz-focus:cvz-ring-1 cvz-transition-all ${a?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100 cvz-placeholder-gray-400 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500":"cvz-bg-gray-50 cvz-border-gray-200 cvz-text-gray-900 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500"}`}),w("button",{type:"submit",disabled:!e.trim()||r,className:`cvz-absolute cvz-right-2 cvz-p-2 cvz-text-white cvz-rounded-full cvz-disabled:cvz-opacity-50 cvz-transition-colors cvz-shadow-sm ${a?"cvz-bg-blue-500 cvz-hover:cvz-bg-blue-600 cvz-disabled:cvz-hover:cvz-bg-blue-500":"cvz-bg-blue-600 cvz-hover:cvz-bg-blue-700 cvz-disabled:cvz-hover:cvz-bg-blue-600"}`,children:w(wt,{custom:o?.send,fallback:w(Yh,{}),className:"cvz-w-5 cvz-h-5"})})]}),w("div",{className:"cvz-text-center cvz-mt-2",children:w("p",{className:`cvz-text-[10px] ${a?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:["Powered by ConverZen",w("span",{className:a?"cvz-text-gray-600":"cvz-text-gray-300",children:[" \xB7 ",$h]})]})})]}),Zh=({config:e})=>{let t=ya(e),[n,r]=fe(""),[i,a]=fe(false),o=en(null),l=async y=>{if(y?.preventDefault(),!n.trim()||t.isStreaming)return;let v=n;r(""),await t.sendMessage(v);},s=async()=>{window.confirm("Are you sure you want to clear your chat history?")&&await t.clearHistory();},u=xa(e.style),c=ba(e.style),p=va(e.style),f=wa(e.style,t.isOpen),m=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="bottom-left")||typeof e.style.position=="object"&&e.style.position.bottom,h=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="top-right")||typeof e.style.position=="object"&&e.style.position.right;return w("div",{className:"cvz-fixed cvz-z-[9999] cvz-font-sans",style:u,children:[w("div",{className:`
          cvz-absolute cvz-rounded-2xl cvz-shadow-2xl cvz-flex cvz-flex-col cvz-overflow-hidden
          cvz-transition-all cvz-duration-300
          ${e.darkMode?"cvz-bg-gray-800":"cvz-bg-white"}
          ${m?"cvz-bottom-20":"cvz-top-20"}
          ${h?"cvz-right-0":"cvz-left-0"}
          ${m&&h?"cvz-origin-bottom-right":m&&!h?"cvz-origin-bottom-left":!m&&h?"cvz-origin-top-right":"cvz-origin-top-left"}
          ${t.isOpen?"cvz-opacity-100 cvz-scale-100 cvz-translate-y-0":"cvz-opacity-0 cvz-scale-95 cvz-translate-y-4 cvz-pointer-events-none"}
        `,style:{...c,borderColor:p,borderWidth:"1px",borderStyle:"solid"},children:[w(Gh,{title:e.headerMsg||"Support Chat",subtitle:e.subheaderMsg||"We typically reply in a few minutes",onClose:()=>t.close(),onClear:s,darkMode:e.darkMode,icons:e.icons,authControl:e.endUserLicensing?w("button",{onClick:()=>a(true),className:`cvz-text-xs cvz-font-medium cvz-px-2 cvz-py-1 cvz-rounded-md cvz-transition-colors cvz-whitespace-nowrap ${e.darkMode?"cvz-text-gray-200 hover:cvz-bg-gray-700/50":"cvz-text-white hover:cvz-bg-blue-600/50"}`,title:t.endUserAuth?`Signed in as ${t.endUserAuth.email}`:"Authenticate",children:t.endUserAuth?"Account":"Authenticate"}):void 0}),w("div",{ref:y=>t.setCaptchaContainer(y),className:`cvz-flex cvz-justify-center cvz-overflow-hidden cvz-transition-all cvz-duration-200 ${t.captchaPending?"cvz-max-h-32 cvz-py-2":"cvz-max-h-0 cvz-py-0"}`}),w(Jh,{messages:t.messages,isStreaming:t.isStreaming,streamingMessage:t.streamingMessage,thinkingMessage:t.thinkingMessage,activeToolCall:t.activeToolCall,isFinalizingRef:t.isFinalizingRef,messagesEndRef:o,enableMarkdown:e.enableMarkdown,darkMode:e.darkMode,icons:e.icons}),t.showAuthNudge&&!Ge(t.endUserAuth)&&w("div",{className:`cvz-px-4 cvz-py-2 cvz-text-xs cvz-flex cvz-items-center cvz-justify-between cvz-gap-2 ${e.darkMode?"cvz-bg-amber-900/40 cvz-text-amber-200":"cvz-bg-amber-50 cvz-text-amber-800"}`,children:[w("span",{children:"You've reached the free limit - authenticate to keep chatting."}),w("button",{onClick:()=>a(true),className:"cvz-underline cvz-font-medium cvz-shrink-0",children:"Authenticate"})]}),w(Qh,{value:n,onChange:r,onSubmit:l,isLoading:t.isLoading||t.isStreaming,placeholder:e.promptPlaceholder||"Type a message...",darkMode:e.darkMode,icons:e.icons}),e.endUserLicensing&&w(Vo,{open:i,onClose:()=>a(false),darkMode:e.darkMode,baseUrl:e.chatUrl||qh,getBaseAuth:()=>t.getTenantAuthToken(),endUserAuth:t.endUserAuth,onAuthenticated:t.authenticateEndUser,initialEmail:Fo()??void 0})]}),w("button",{onClick:()=>t.isOpen?t.close():t.open(),className:`
          cvz-flex cvz-items-center cvz-justify-center
          cvz-w-14 cvz-h-14 cvz-rounded-full cvz-shadow-lg cvz-transition-all cvz-duration-300
          ${t.isOpen?"cvz-rotate-90":"cvz-hover:cvz-scale-105"}
        `,style:{backgroundColor:f.backgroundColor},onMouseEnter:y=>{!t.isOpen&&e.style?.buttonColor?.hover&&(y.currentTarget.style.backgroundColor=e.style.buttonColor.hover);},onMouseLeave:y=>{t.isOpen||(y.currentTarget.style.backgroundColor=f.backgroundColor);},children:w("div",{className:"cvz-text-white",children:t.isOpen?w(wt,{custom:e.icons?.close,fallback:w(cu,{}),className:"cvz-w-6 cvz-h-6"}):w(wt,{custom:e.icons?.launcher,fallback:w(uu,{}),className:"cvz-w-6 cvz-h-6"})})})]})},pu=Zh;var Gi=`*, ::before, ::after {
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

.cvz-max-w-\\[85\\%\\] {
  max-width: 85%;
}

.cvz-flex-1 {
  flex: 1 1 0%;
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

.cvz-italic {
  font-style: italic;
}

.cvz-leading-tight {
  line-height: 1.25;
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
`;if(O){O.debounceRendering;O.debounceRendering=t=>{requestAnimationFrame(t);};}var td="cvz-widget-host";function nd(e,t){let n=document.createElement("div");n.id=td,document.body.appendChild(n);let r=n.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=Gi,r.appendChild(i);let a=document.createElement("div");return a.id="cvz-root",r.appendChild(a),er(Ce(t,{config:e}),a),n}var Ki=class{hostElement=null;buildId="12c1cd5-2026-09-11T06:32:01.830Z";init(t){if(this.hostElement){console.warn("cvzWidget is already initialized.");return}console.log("init: Initializing cvzWidget...",this.buildId),console.log("CSS Length:",Gi.length),this.hostElement=nd(t,pu);}hide(){if(!this.hostElement){console.warn("hide: cvzWidget is not initialized.");return}this.hostElement&&(this.hostElement.remove(),this.hostElement=null);}},fu=new Ki;typeof window<"u"&&(window.cvzWidget=fu);var Wz=fu;return Wz;})();