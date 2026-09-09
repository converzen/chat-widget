(function(){'use strict';var hu=Object.create;var ir=Object.defineProperty;var du=Object.getOwnPropertyDescriptor;var gu=Object.getOwnPropertyNames;var yu=Object.getPrototypeOf,xu=Object.prototype.hasOwnProperty;var Ft=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),uo=(e,t)=>{for(var n in t)ir(e,n,{get:t[n],enumerable:true});},bu=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of gu(t))!xu.call(e,i)&&i!==n&&ir(e,i,{get:()=>t[i],enumerable:!(r=du(t,i))||r.enumerable});return e};var co=(e,t,n)=>(n=e!=null?hu(yu(e)):{},bu(ir(n,"default",{value:e,enumerable:true}),e));var ka=Ft((kg,wa)=>{var ya=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,rc=/\n/g,ic=/^\s*/,oc=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,ac=/^:\s*/,lc=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,sc=/^[;\s]*/,uc=/^\s+|\s+$/g,cc=`
`,xa="/",ba="*",ct="",pc="comment",fc="declaration";function mc(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return [];t=t||{};var n=1,r=1;function i(h){var x=h.match(rc);x&&(n+=x.length);var v=h.lastIndexOf(cc);r=~v?h.length-v:r+h.length;}function o(){var h={line:n,column:r};return function(x){return x.position=new a(h),u(),x}}function a(h){this.start=h,this.end={line:n,column:r},this.source=t.source;}a.prototype.content=e;function l(h){var x=new Error(t.source+":"+n+":"+r+": "+h);if(x.reason=h,x.filename=t.source,x.line=n,x.column=r,x.source=e,!t.silent)throw x}function s(h){var x=h.exec(e);if(x){var v=x[0];return i(v),e=e.slice(v.length),x}}function u(){s(ic);}function c(h){var x;for(h=h||[];x=f();)x!==false&&h.push(x);return h}function f(){var h=o();if(!(xa!=e.charAt(0)||ba!=e.charAt(1))){for(var x=2;ct!=e.charAt(x)&&(ba!=e.charAt(x)||xa!=e.charAt(x+1));)++x;if(x+=2,ct===e.charAt(x-1))return l("End of comment missing");var v=e.slice(2,x-2);return r+=2,i(v),e=e.slice(x),r+=2,h({type:pc,comment:v})}}function p(){var h=o(),x=s(oc);if(x){if(f(),!s(ac))return l("property missing ':'");var v=s(lc),y=h({type:fc,property:va(x[0].replace(ya,ct)),value:v?va(v[0].replace(ya,ct)):ct});return s(sc),y}}function m(){var h=[];c(h);for(var x;x=p();)x!==false&&(h.push(x),c(h));return h}return u(),m()}function va(e){return e?e.replace(uc,ct):ct}wa.exports=mc;});var _a=Ft(Vt=>{var hc=Vt&&Vt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Vt,"__esModule",{value:true});Vt.default=gc;var dc=hc(ka());function gc(e,t){let n=null;if(!e||typeof e!="string")return n;let r=(0, dc.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;let{property:a,value:l}=o;i?t(a,l,o):l&&(n=n||{},n[a]=l);}),n}});var Sa=Ft(Sn=>{Object.defineProperty(Sn,"__esModule",{value:true});Sn.camelCase=void 0;var yc=/^--[a-zA-Z0-9_-]+$/,xc=/-([a-z])/g,bc=/^[^-]+$/,vc=/^-(webkit|moz|ms|o|khtml)-/,wc=/^-(ms)-/,kc=function(e){return !e||bc.test(e)||yc.test(e)},_c=function(e,t){return t.toUpperCase()},za=function(e,t){return "".concat(t,"-")},zc=function(e,t){return t===void 0&&(t={}),kc(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(wc,za):e=e.replace(vc,za),e.replace(xc,_c))};Sn.camelCase=zc;});var Ea=Ft((Fr,Ca)=>{var Sc=Fr&&Fr.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Cc=Sc(_a()),Ec=Sa();function Mr(e,t){var n={};return !e||typeof e!="string"||(0, Cc.default)(e,function(r,i){r&&i&&(n[(0, Ec.camelCase)(r,t)]=i);}),n}Mr.default=Mr;Ca.exports=Mr;});var ps=Ft((fk,cs)=>{var Kn=Object.prototype.hasOwnProperty,us=Object.prototype.toString,rs=Object.defineProperty,is=Object.getOwnPropertyDescriptor,os=function(t){return typeof Array.isArray=="function"?Array.isArray(t):us.call(t)==="[object Array]"},as=function(t){if(!t||us.call(t)!=="[object Object]")return  false;var n=Kn.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Kn.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return  false;var i;for(i in t);return typeof i>"u"||Kn.call(t,i)},ls=function(t,n){rs&&n.name==="__proto__"?rs(t,n.name,{enumerable:true,configurable:true,value:n.newValue,writable:true}):t[n.name]=n.newValue;},ss=function(t,n){if(n==="__proto__")if(Kn.call(t,n)){if(is)return is(t,n).value}else return;return t[n]};cs.exports=function e(){var t,n,r,i,o,a,l=arguments[0],s=1,u=arguments.length,c=false;for(typeof l=="boolean"&&(c=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(t=arguments[s],t!=null)for(n in t)r=ss(l,n),i=ss(t,n),l!==i&&(c&&i&&(as(i)||(o=os(i)))?(o?(o=false,a=r&&os(r)?r:[]):a=r&&as(r)?r:{},ls(l,{name:n,newValue:e(c,a,i)})):typeof i<"u"&&ls(l,{name:n,newValue:i}));return l};});var fn,M,go,Je,po,yo,xo,or,ln,Ot,bo,sr,ar,lr,un={},cn=[],ku=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ut=Array.isArray;function Ve(e,t){for(var n in t)e[n]=t[n];return e}function ur(e){e&&e.parentNode&&e.parentNode.removeChild(e);}function Me(e,t,n){var r,i,o,a={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?fn.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return sn(e,a,r,i,null)}function sn(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++go,__i:-1,__u:0};return i==null&&M.vnode!=null&&M.vnode(o),o}function Ce(e){return e.children}function De(e,t){this.props=e,this.context=t;}function lt(e,t){if(t==null)return e.__?lt(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?lt(e):null}function _u(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],o=Ve({},t);o.__v=t.__v+1,M.vnode&&M.vnode(o),cr(e.__P,o,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??lt(t),!!(32&t.__u),i),o.__v=t.__v,o.__.__k[o.__i]=o,zo(r,o,i),t.__e=t.__=null,o.__e!=n&&vo(o);}}function vo(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),vo(e)}function fo(e){(!e.__d&&(e.__d=true)&&Je.push(e)&&!pn.__r++||po!=M.debounceRendering)&&((po=M.debounceRendering)||yo)(pn);}function pn(){try{for(var e,t=1;Je.length;)Je.length>t&&Je.sort(xo),e=Je.shift(),t=Je.length,_u(e);}finally{Je.length=pn.__r=0;}}function wo(e,t,n,r,i,o,a,l,s,u,c){var f,p,m,h,x,v,y=r&&r.__k||cn,z=t.length;for(s=zu(n,t,y,s,z),f=0;f<z;f++)(m=n.__k[f])!=null&&(p=m.__i!=-1&&y[m.__i]||un,m.__i=f,v=cr(e,m,p,i,o,a,l,s,u,c),h=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&pr(p.ref,null,m),c.push(m.ref,m.__c||h,m)),x==null&&h!=null&&(x=h),4&m.__u?(s=ko(m,s,e),p.__e&&(p.__e=null)):typeof m.type=="function"&&v!==void 0?s=v:h&&(s=h.nextSibling),m.__u&=-7);return n.__e=x,s}function zu(e,t,n,r,i){var o,a,l,s,u,c=n.length,f=c,p=0;for(e.__k=new Array(i),o=0;o<i;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[o]=sn(null,a,null,null,null):Ut(a)?a=e.__k[o]=sn(Ce,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[o]=sn(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[o]=a,s=o+p,a.__=e,a.__b=e.__b+1,l=null,(u=a.__i=Su(a,n,s,f))!=-1&&(f--,(l=n[u])&&(l.__u|=2)),l==null||l.__v==null?(u==-1&&(i>c?p--:i<c&&p++),typeof a.type!="function"&&(a.__u|=4)):u!=s&&(u==s-1?p--:u==s+1?p++:(u>s?p--:p++,a.__u|=4))):e.__k[o]=null;if(f)for(o=0;o<c;o++)(l=n[o])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=lt(l)),Co(l,l));return r}function ko(e,t,n){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=ko(r[i],t,n));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=lt(e)),t=n.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Bt(e,t){return t=t||[],e==null||typeof e=="boolean"||(Ut(e)?e.some(function(n){Bt(n,t);}):t.push(e)),t}function Su(e,t,n,r){var i,o,a,l=e.key,s=e.type,u=t[n],c=u!=null&&(2&u.__u)==0;if(u===null&&l==null||c&&l==u.key&&s==u.type)return n;if(r>(c?1:0)){for(i=n-1,o=n+1;i>=0||o<t.length;)if((u=t[a=i>=0?i--:o++])!=null&&(2&u.__u)==0&&l==u.key&&s==u.type)return a}return  -1}function mo(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||ku.test(t)?n:n+"px";}function an(e,t,n,r,i){var o,a;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else {if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||mo(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||mo(e.style,t,n[t]);}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(bo,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n[Ot]=r[Ot]:(n[Ot]=sr,e.addEventListener(t,o?lr:ar,o)):e.removeEventListener(t,o?lr:ar,o);else {if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===false&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n));}}function ho(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[ln]==null)t[ln]=sr++;else if(t[ln]<n[Ot])return;return n(M.event?M.event(t):t)}}}function cr(e,t,n,r,i,o,a,l,s,u){var c,f,p,m,h,x,v,y,z,S,N,D,_,$,W,j,b=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),o=[l=t.__e=n.__e]),(c=M.__b)&&c(t);e:if(typeof b=="function"){f=a.length;try{if(z=t.props,S=b.prototype&&b.prototype.render,N=(c=b.contextType)&&r[c.__c],D=c?N?N.props.value:c.__:r,n.__c?y=(p=t.__c=n.__c).__=p.__E:(S?t.__c=p=new b(z,D):(t.__c=p=new De(z,D),p.constructor=b,p.render=Eu),N&&N.sub(p),p.state||(p.state={}),p.__n=r,m=p.__d=!0,p.__h=[],p._sb=[]),S&&p.__s==null&&(p.__s=p.state),S&&b.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Ve({},p.__s)),Ve(p.__s,b.getDerivedStateFromProps(z,p.__s))),h=p.props,x=p.state,p.__v=t,m)S&&b.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),S&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else {if(S&&b.getDerivedStateFromProps==null&&z!==h&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(z,D),t.__v==n.__v||!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(z,p.__s,D)===!1){t.__v!=n.__v&&(p.props=z,p.state=p.__s,p.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(X){X&&(X.__=t);}),cn.push.apply(p.__h,p._sb),p._sb=[],p.__h.length&&a.push(p),l=lt(n);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(z,p.__s,D),S&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(h,x,v);});}if(p.context=D,p.props=z,p.__P=e,p.__e=!1,_=M.__r,$=0,S)p.state=p.__s,p.__d=!1,_&&_(t),c=p.render(p.props,p.state,p.context),cn.push.apply(p.__h,p._sb),p._sb=[];else do p.__d=!1,_&&_(t),c=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++$<25);p.state=p.__s,p.getChildContext!=null&&(r=Ve(Ve({},r),p.getChildContext())),S&&!m&&p.getSnapshotBeforeUpdate!=null&&(v=p.getSnapshotBeforeUpdate(h,x)),W=c!=null&&c.type===Ce&&c.key==null?So(c.props.children):c,l=wo(e,Ut(W)?W:[W],t,n,r,i,o,a,l,s,u),p.base=t.__e,t.__u&=-161,p.__h.length&&a.push(p),y&&(p.__E=p.__=null);}catch(X){if(a.length=f,t.__v=null,s||o!=null){if(X.then){for(t.__u|=s?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o!=null&&(o[o.indexOf(l)]=null),t.__e=l;}else if(o!=null)for(j=o.length;j--;)ur(o[j]);}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),X.then||_o(t),M.__e(X,t,n);}}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Cu(n.__e,t,n,r,i,o,a,s,u);return (c=M.diffed)&&c(t),128&t.__u?void 0:l}function _o(e){e&&(e.__c&&(e.__c.__e=true),e.__k&&e.__k.some(_o));}function zo(e,t,n){for(var r=0;r<n.length;r++)pr(n[r],n[++r],n[++r]);M.__c&&M.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i);});}catch(o){M.__e(o,i.__v);}});}function So(e){return typeof e!="object"||e==null||e.__b>0?e:Ut(e)?e.map(So):e.constructor!==void 0?null:Ve({},e)}function Cu(e,t,n,r,i,o,a,l,s){var u,c,f,p,m,h,x,v=n.props||un,y=t.props,z=t.type;if(z=="svg"?i="http://www.w3.org/2000/svg":z=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(u=0;u<o.length;u++)if((m=o[u])&&"setAttribute"in m==!!z&&(z?m.localName==z:m.nodeType==3)){e=m,o[u]=null;break}}if(e==null){if(z==null)return document.createTextNode(y);e=document.createElementNS(i,z,y.is&&y),l&&(M.__m&&M.__m(t,o),l=false),o=null;}if(z==null)v===y||l&&e.data==y||(e.data=y);else {if(o=z=="textarea"&&y.defaultValue!=null?null:o&&fn.call(e.childNodes),!l&&o!=null)for(v={},u=0;u<e.attributes.length;u++)v[(m=e.attributes[u]).name]=m.value;for(u in v)m=v[u],u=="dangerouslySetInnerHTML"?f=m:u=="children"||u in y||u=="value"&&"defaultValue"in y||u=="checked"&&"defaultChecked"in y||an(e,u,null,m,i);for(u in y)m=y[u],u=="children"?p=m:u=="dangerouslySetInnerHTML"?c=m:u=="value"?h=m:u=="checked"?x=m:l&&typeof m!="function"||v[u]===m||an(e,u,m,v[u],i);if(c)l||f&&(c.__html==f.__html||c.__html==e.innerHTML)||(e.innerHTML=c.__html),t.__k=[];else if(f&&(e.innerHTML=""),wo(t.type=="template"?e.content:e,Ut(p)?p:[p],t,n,r,z=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,a,o?o[0]:n.__k&&lt(n,0),l,s),o!=null)for(u=o.length;u--;)ur(o[u]);l&&z!="textarea"||(u="value",z=="progress"&&h==null?e.removeAttribute("value"):h!=null&&(h!==e[u]||z=="progress"&&!h||z=="option"&&h!=v[u])&&an(e,u,h,v[u],i),u="checked",x!=null&&x!=e[u]&&an(e,u,x,v[u],i));}return e}function pr(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t));}else e.current=t;}catch(i){M.__e(i,n);}}function Co(e,t,n){var r,i;if(M.unmount&&M.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||pr(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount();}catch(o){M.__e(o,t);}r.base=r.__P=r.__n=null;}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Co(r[i],t,n||typeof e.type!="function");n||ur(e.__e),e.__c=e.__=e.__e=void 0;}function Eu(e,t,n){return this.constructor(e,n)}function fr(e,t,n){var r,i,o,a;t==document&&(t=document.documentElement),M.__&&M.__(e,t),i=(r="undefined"=="function")?null:t.__k,o=[],a=[],cr(t,e=(t).__k=Me(Ce,null,[e]),i||un,un,t.namespaceURI,i?null:t.firstChild?fn.call(t.childNodes):null,o,i?i.__e:t.firstChild,r,a),zo(o,e,a),e.props.children=null;}fn=cn.slice,M={__e:function(e,t,n,r){for(var i,o,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),a=i.__d),a)return i.__E=i}catch(l){e=l;}throw e}},go=0,De.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ve({},this.state),typeof e=="function"&&(e=e(Ve({},n),this.props)),e&&Ve(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),fo(this));},De.prototype.forceUpdate=function(e){this.__v&&(this.__e=true,e&&this.__h.push(e),fo(this));},De.prototype.render=Ce,Je=[],yo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,xo=function(e,t){return e.__v.__b-t.__v.__b},pn.__r=0,or=Math.random().toString(8),ln="__d"+or,Ot="__a"+or,bo=/(PointerCapture)$|Capture$/i,sr=0,ar=ho(false),lr=ho(true);var jt,ie,mr,Eo,hn=0,No=[],ue=M,Io=ue.__b,Ao=ue.__r,To=ue.diffed,Po=ue.__c,Lo=ue.unmount,Ro=ue.__;function dr(e,t){ue.__h&&ue.__h(ie,e,hn||t),hn=0;var n=ie.__H||(ie.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function ee(e){return hn=1,Mo(Uo,e)}function Mo(e,t,n){var r=dr(jt++,2);if(r.t=e,!r.__c&&(r.__=[Uo(void 0,t),function(l){var s=r.__N?r.__N[0]:r.__[0],u=r.t(s,l);s!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}));}],r.__c=ie,!ie.__f)){var i=function(l,s,u){if(!r.__c.__H)return  true;var c=false,f=r.__c.props!==l;if(r.__c.__H.__.some(function(m){if(m.__N){c=true;var h=m.__[0];m.__=m.__N,m.__N=void 0,h!==m.__[0]&&(f=true);}}),o){var p=o.call(this,l,s,u);return c?p||f:p}return !c||f};ie.__f=true;var o=ie.shouldComponentUpdate,a=ie.componentWillUpdate;ie.componentWillUpdate=function(l,s,u){if(this.__e){var c=o;o=void 0,i(l,s,u),o=c;}a&&a.call(this,l,s,u);},ie.shouldComponentUpdate=i;}return r.__N||r.__}function Fe(e,t){var n=dr(jt++,3);!ue.__s&&Oo(n.__H,t)&&(n.__=e,n.u=t,ie.__H.__h.push(n));}function Ee(e){return hn=5,Fo(function(){return {current:e}},[])}function Fo(e,t){var n=dr(jt++,7);return Oo(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Iu(){for(var e;e=No.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(mn),t.__h.some(hr),t.__h=[];}catch(n){t.__h=[],ue.__e(n,e.__v);}}}ue.__b=function(e){ie=null,Io&&Io(e);},ue.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ro&&Ro(e,t);},ue.__r=function(e){Ao&&Ao(e),jt=0;var t=(ie=e.__c).__H;t&&(mr===ie?(t.__h=[],ie.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(t.__h.some(mn),t.__h.some(hr),t.__h=[],jt=0)),mr=ie;},ue.diffed=function(e){To&&To(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(No.push(t)!==1&&Eo===ue.requestAnimationFrame||((Eo=ue.requestAnimationFrame)||Au)(Iu)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0);})),mr=ie=null;},ue.__c=function(e,t){t.some(function(n){try{n.__h.some(mn),n.__h=n.__h.filter(function(r){return !r.__||hr(r)});}catch(r){t.some(function(i){i.__h&&(i.__h=[]);}),t=[],ue.__e(r,n.__v);}}),Po&&Po(e,t);},ue.unmount=function(e){Lo&&Lo(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{mn(r);}catch(i){t=i;}}),n.__H=void 0,t&&ue.__e(t,n.__v));};var Do=typeof requestAnimationFrame=="function";function Au(e){var t,n=function(){clearTimeout(r),Do&&cancelAnimationFrame(t),setTimeout(e);},r=setTimeout(n,35);Do&&(t=requestAnimationFrame(n));}function mn(e){var t=ie,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),ie=t;}function hr(e){var t=ie;e.__c=e.__(),ie=t;}function Oo(e,t){return !e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Uo(e,t){return typeof t=="function"?t(e):t}async function*Tu(e){let t=new TextDecoder,n="",r=0;try{for(;;){let{done:i,value:o}=await e.read();if(i){if(n.trim()){let l=Pu(n);for(let s of l)r+=1,yield s;}break}n+=t.decode(o,{stream:!0});let a=n.split(`
`);n=a.pop()||"";for(let l of a)if(l.startsWith("data: ")){let s=l.slice(6).trim();if(s)try{let u=JSON.parse(s);r+=1,yield u;}catch(u){console.error("Failed to parse SSE data:",s,u);}}}}finally{e.releaseLock(),console.log(`parseSSEStream: yielded ${r} events`);}}function Pu(e){let t=[],n=e.split(`
`);for(let r of n)if(r.startsWith("data: ")){let i=r.slice(6).trim();if(i)try{t.push(JSON.parse(i));}catch(o){console.error("Failed to parse SSE data:",i,o);}}return t}async function*Bo(e){let{baseUrl:t,message:n,sessionId:r,persona:i,authToken:o,authType:a,maxTokens:l,clientId:s,extraContext:u,abortSignal:c}=e,f={"Content-Type":"application/json",Accept:"text/event-stream"};s&&(f["X-Client-Id"]=s),a==="apiKey"?f["X-API-Key"]=o:f.Authorization=`Bearer ${o}`;let p={message:n};!r&&a==="apiKey"&&i&&(p.persona=typeof i=="string"?{alias:i}:i),r&&(p.session=r),l&&(p.max_tokens=l),u&&Object.assign(p,u);let m;r?m="/api/chat/continuation/stream":m="/api/chat/completion/stream";let h=await fetch(`${t}${m}`,{method:"POST",headers:f,body:JSON.stringify(p),signal:c});if(!h.ok){let v=`HTTP ${h.status}: ${h.statusText}`;try{console.error(`error from completion: ${h.status} : ${h.statusText}`),v=(await h.json()).message||v;}catch{}yield {type:"error",message:`${h.status} ${v}`};return}if(!h.body){yield {type:"error",message:"No response body received"};return}let x=h.body.getReader();yield*Tu(x);}var xr="cvz_client_id",dn="cvz_client_id_v2",$o="cvz_client_id_captcha_gated",jo="cvz_client_id_last_forced_reissue",Vo="issue_client_id";var Lu=["invalid client_id","client_id does not belong to this account"];function Ru(e){return typeof e=="object"&&e!==null&&"provider"in e&&"site_key"in e}function gn(e){try{return localStorage.getItem(e)}catch{return null}}function yn(e,t){try{localStorage.setItem(e,t);}catch{}}function br(e){try{localStorage.removeItem(e);}catch{}}function Du(){return gn($o)==="1"}function Nu(e){yn($o,e?"1":"0");}function Wo(e){let t=e instanceof Error?e.message:typeof e=="string"?e:"";return Lu.some(n=>t.includes(n))}function Mu(){let e=gn(xr);if(e)return e;let t=crypto.randomUUID();return yn(xr,t),t}var gr=null;function Fu(e){return gr||(gr=new Promise((t,n)=>{let r=document.createElement("script");r.src=`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(e)}`,r.async=true,r.onload=()=>t(),r.onerror=()=>n(new Error("failed to load reCAPTCHA script")),document.head.appendChild(r);})),gr}async function Ou(e){return await Fu(e),new Promise((t,n)=>{if(!window.grecaptcha){n(new Error("grecaptcha unavailable after script load"));return}window.grecaptcha.ready(()=>{window.grecaptcha.execute(e,{action:Vo}).then(t,n);});})}var yr=null;function Uu(){return yr||(yr=new Promise((e,t)=>{let n=document.createElement("script");n.src="https://challenges.cloudflare.com/turnstile/v0/api.js",n.async=true,n.onload=()=>e(),n.onerror=()=>t(new Error("failed to load Turnstile script")),document.head.appendChild(n);})),yr}async function Bu(e,t){return await Uu(),new Promise((n,r)=>{if(!window.turnstile){r(new Error("turnstile unavailable after script load"));return}let i=t?.getContainer?.()??null,o=i??document.createElement("div"),a=!i;a?(o.style.position="fixed",o.style.top="-9999px",o.style.left="-9999px",document.body.appendChild(o)):o.replaceChildren();let l,s=()=>{t?.onPending?.(false),l&&window.turnstile?.remove(l),a&&o.remove();};t?.onPending?.(true),l=window.turnstile.render(o,{sitekey:e,action:Vo,callback:u=>{n(u),s();},"error-callback":u=>{r(u instanceof Error?u:new Error("Turnstile challenge failed")),s();}});})}function ju(e,t,n){return e==="recaptcha_v3"?Ou(t):Bu(t,n)}function Ho(e,t,n){return fetch(`${e}/api/chat/client_id`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_public_id:t,...n?{recaptcha_token:n}:{}})})}async function vr(e,t,n){if(!t)return Mu();let r=gn(dn);if(r)return r;try{let i=await Ho(e,t),o=!1;if(i.status===400){let l=await i.json();if(Ru(l)){o=!0;let s=await ju(l.provider,l.site_key,n);i=await Ho(e,t,s);}else return console.warn("cvzWidget: client_id issuance failed (400)"),null}if(!i.ok)return console.warn(`cvzWidget: client_id issuance failed (${i.status})`),null;Nu(o);let a=await i.json();return yn(dn,a.client_id),br(xr),a.client_id}catch(i){return console.warn("cvzWidget: client_id issuance failed",i),null}}async function qo(e,t,n){if(!t)return null;if(!Du()){let r=Number(gn(jo)??"0");if(Date.now()-r<36e5)return br(dn),null}return yn(jo,String(Date.now())),br(dn),vr(e,t,n)}var Yo="cvz_chat_history";function Hu(e){let t=new TextEncoder().encode(e),n="";return t.forEach(r=>{n+=String.fromCharCode(r);}),btoa(n)}function $u(e){let t=atob(e),n=Uint8Array.from(t,r=>r.charCodeAt(0));return new TextDecoder().decode(n)}async function Go(e,t){try{localStorage.setItem(Yo,Hu(JSON.stringify({sessionId:e,messages:t})));}catch{}}async function Xo(){let e={sessionId:"",messages:[]};try{let t=localStorage.getItem(Yo);if(!t)return e;let n;try{n=JSON.parse($u(t));}catch{n=JSON.parse(t);}return {sessionId:n.sessionId||"",messages:n.messages||[]}}catch{return e}}var kr="cvz_end_user_auth_v1",Ko="cvz_end_user_last_email",_r="cvz_end_user_pending_checkout_v1";function zr(e){try{return localStorage.getItem(e)}catch{return null}}function wr(e,t){try{localStorage.setItem(e,t);}catch{}}function Jo(e){try{localStorage.removeItem(e);}catch{}}function Qo(){let e=zr(kr);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.token=="string"&&typeof t.expiresAt=="number"&&typeof t.email=="string")return t}catch{}return null}function zt(e){return e?e.expiresAt-300>Date.now()/1e3:false}function Zo(e){wr(kr,JSON.stringify(e)),wr(Ko,e.email);}function ea(){Jo(kr);}function ta(){return zr(Ko)}function na(e){wr(_r,JSON.stringify(e));}function ra(){let e=zr(_r);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.pendingId=="string"&&typeof t.planId=="number")return t}catch{}return null}function ia(){Jo(_r);}function oa(e){return e.type==="apiKey"?{"X-API-Key":e.token}:{Authorization:`Bearer ${e.token}`}}async function xn(e){try{let t=await e.json();if(t&&typeof t.message=="string")return t.message;if(t&&typeof t.error=="string")return t.error}catch{}return `${e.status} ${e.statusText}`}async function aa(e,t,n){let r=await fetch(`${e}/api/chat/end_user/start_login`,{method:"POST",headers:{"Content-Type":"application/json",...oa(t)},body:JSON.stringify({email:n})});if(!r.ok)throw new Error(await xn(r));return (await r.json()).pending_id}function bn(e,t){return new Promise(n=>{let r=new EventSource(`${e}/api/chat/end_user/wait/${encodeURIComponent(t)}`),i=false,o=a=>{i||(i=true,r.close(),n(a));};r.onmessage=a=>{try{o(JSON.parse(a.data));}catch{o({status:"error"});}},r.onerror=()=>{o({status:"timed_out"});};})}async function Sr(e,t){let n=await fetch(`${e}/api/chat/end_user/plans`,{headers:oa(t)});if(!n.ok)throw new Error(await xn(n));return (await n.json()).plans}async function Cr(e,t){let n=await fetch(`${e}/api/chat/end_user/me`,{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw new Error(await xn(n));return await n.json()}async function la(e,t,n,r,i){let o=await fetch(`${e}/api/chat/end_user/checkout`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({plan_id:n,success_url:r,cancel_url:i})});if(!o.ok)throw new Error(await xn(o));let a=await o.json();return {checkoutUrl:a.checkout_url,pendingId:a.pending_id}}var Vu=0;function w(e,t,n,r,i,o){t||(t={});var a,l,s=t;if("ref"in s)for(l in s={},t)l=="ref"?a=t[l]:s[l]=t[l];var u={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Vu,__i:-1,__u:0,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)s[l]===void 0&&(s[l]=a[l]);return M.vnode&&M.vnode(u),u}var Wu=60*1e3;function qu(e,t){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:t.toUpperCase()}).format(e/100)}catch{return `${(e/100).toFixed(2)} ${t.toUpperCase()}`}}function Yu(e){return new Date(e*1e3).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}var sa=({open:e,onClose:t,darkMode:n,baseUrl:r,getBaseAuth:i,endUserAuth:o,onAuthenticated:a,initialEmail:l})=>{let[s,u]=ee("email"),[c,f]=ee(""),[p,m]=ee(null),[h,x]=ee(0),[v,y]=ee(null),[z,S]=ee([]),[N,D]=ee(null),[_,$]=ee(Date.now());if(Fe(()=>{e&&(m(null),o?(f(o.email),u("status"),Cr(r,o.token).then(y).catch(T=>m(T instanceof Error?T.message:String(T)))):(f(l??""),u("email")));},[e]),Fe(()=>{if(h<=Date.now())return;let T=setInterval(()=>$(Date.now()),1e3);return ()=>clearInterval(T)},[h]),!e)return null;let W=Math.max(0,Math.ceil((h-_)/1e3)),j=async()=>{let T=c.trim();if(!T||!T.includes("@")){m("Enter a valid email address.");return}m(null),u("waiting");try{let Q=await i(),be=await aa(r,Q,T);x(Date.now()+Wu);let d=await bn(r,be);if(d.status==="verified"){let ce={token:d.chat_token,expiresAt:d.expires_at,email:T};a(ce);try{let ge=await Cr(r,ce.token);if(y(ge),ge.total_vtokens_remaining>0||ge.subscription_status==="active")u("status");else {let pe=await Sr(r,{token:ce.token,type:"bearer"});S(pe),u("plans");}}catch{u("status");}}else d.status==="timed_out"?(m("That link expired before it was clicked. You can send a new one below."),u("email")):(m("Something went wrong confirming your login. Please try again."),u("email"));}catch(Q){m(Q instanceof Error?Q.message:String(Q)),u("email");}},b=async()=>{if(o){m(null);try{let T=await Sr(r,{token:o.token,type:"bearer"});S(T),u("plans");}catch(T){m(T instanceof Error?T.message:String(T));}}},X=async T=>{if(o){m(null),D(T.id);try{let Q=window.location.href,{checkoutUrl:be,pendingId:d}=await la(r,o.token,T.id,Q,Q);na({pendingId:d,planId:T.id}),window.location.href=be;}catch(Q){m(Q instanceof Error?Q.message:String(Q)),D(null);}}},B=n?"cvz-text-gray-100":"cvz-text-gray-800",A=n?"cvz-text-gray-400":"cvz-text-gray-500",U=n?"cvz-bg-gray-800":"cvz-bg-white",P=n?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100":"cvz-bg-white cvz-border-gray-300 cvz-text-gray-800",G="cvz-bg-blue-600 hover:cvz-bg-blue-700 cvz-text-white disabled:cvz-opacity-50 disabled:cvz-cursor-not-allowed";return w("div",{className:"cvz-absolute cvz-inset-0 cvz-z-20 cvz-flex cvz-flex-col",children:w("div",{className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-5 cvz-flex cvz-flex-col cvz-gap-4 ${U}`,children:[w("div",{className:"cvz-flex cvz-justify-between cvz-items-start",children:[w("h3",{className:`cvz-font-bold cvz-text-lg ${B}`,children:"Account"}),w("button",{onClick:t,className:`cvz-p-1 cvz-rounded-md ${n?"cvz-text-gray-400 hover:cvz-text-white":"cvz-text-gray-400 hover:cvz-text-gray-700"}`,title:"Close",children:"\u2715"})]}),p&&w("p",{className:"cvz-text-sm cvz-text-red-500",children:p}),s==="email"&&w("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[w("p",{className:`cvz-text-sm ${A}`,children:"Enter your email and we'll send you a login link - use it to access a plan you've already bought, or to start a new one."}),w("input",{type:"email",value:c,onInput:T=>f(T.target.value),placeholder:"you@example.com",className:`cvz-border cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm ${P}`,onKeyDown:T=>{T.key==="Enter"&&j();}}),w("button",{onClick:j,disabled:W>0,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${G}`,children:W>0?`Wait ${W}s to resend`:"Send login link"})]}),s==="waiting"&&w("div",{className:"cvz-flex cvz-flex-col cvz-gap-2 cvz-items-center cvz-py-6 cvz-text-center",children:[w("p",{className:`cvz-text-sm ${B}`,children:"Check your email"}),w("p",{className:`cvz-text-xs ${A}`,children:["We sent a login link to ",c,". Click it to continue - this can stay open while you do."]})]}),s==="status"&&w("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[w("p",{className:`cvz-text-sm ${B}`,children:["Signed in as ",o?.email]}),v?w("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-text-sm cvz-flex cvz-flex-col cvz-gap-1 ${n?"cvz-border-gray-600":"cvz-border-gray-200"} ${B}`,children:[w("span",{children:[Math.floor(v.total_vtokens_remaining).toLocaleString()," tokens left"]}),v.plan_name&&w("span",{className:A,children:["Plan: ",v.plan_name]}),v.current_period_end&&w("span",{className:A,children:["Renews ",Yu(v.current_period_end)]})]}):w("p",{className:`cvz-text-sm ${A}`,children:"Loading your balance..."}),w("button",{onClick:b,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${G}`,children:"Buy more"}),w("button",{onClick:()=>{u("email"),m(null);},className:`cvz-text-xs cvz-underline cvz-self-start ${A}`,children:"Use a different email"})]}),s==="plans"&&w("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[z.length===0&&w("p",{className:`cvz-text-sm ${A}`,children:"No plans are available right now."}),z.map(T=>w("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-flex cvz-justify-between cvz-items-center ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:[w("div",{children:[w("p",{className:`cvz-text-sm cvz-font-medium ${B}`,children:T.name}),w("p",{className:`cvz-text-xs ${A}`,children:[qu(T.price_cents,T.currency),T.kind==="subscription"?" / period":""," \xB7 ",T.included_vtokens.toLocaleString()," tokens"]})]}),w("button",{onClick:()=>X(T),disabled:N===T.id,className:`cvz-rounded-lg cvz-px-3 cvz-py-1.5 cvz-text-sm cvz-font-medium ${G}`,children:N===T.id?"Redirecting...":"Buy"})]},T.id)),o&&w("button",{onClick:()=>u("status"),className:`cvz-text-xs cvz-underline cvz-self-start ${A}`,children:"Back"})]})]})})};function ua(e,t){let n={};return (e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===false?"":" ")).trim()}var Gu=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Xu=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ku={};function vn(e,t){return ((Ku).jsx?Xu:Gu).test(e)}var Ju=/[ \t\n\f\r]/g;function Er(e){return typeof e=="object"?e.type==="text"?ca(e.value):false:ca(e)}function ca(e){return e.replace(Ju,"")===""}var We=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r);}};We.prototype.normal={};We.prototype.property={};We.prototype.space=void 0;function Ir(e,t){let n={},r={};for(let i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new We(n,r,t)}function Ht(e){return e.toLowerCase()}var de=class{constructor(t,n){this.attribute=n,this.property=t;}};de.prototype.attribute="";de.prototype.booleanish=false;de.prototype.boolean=false;de.prototype.commaOrSpaceSeparated=false;de.prototype.commaSeparated=false;de.prototype.defined=false;de.prototype.mustUseProperty=false;de.prototype.number=false;de.prototype.overloadedBoolean=false;de.prototype.property="";de.prototype.spaceSeparated=false;de.prototype.space=void 0;var $t={};uo($t,{boolean:()=>O,booleanish:()=>ne,commaOrSpaceSeparated:()=>_e,commaSeparated:()=>qe,number:()=>C,overloadedBoolean:()=>wn,spaceSeparated:()=>K});var Qu=0,O=st(),ne=st(),wn=st(),C=st(),K=st(),qe=st(),_e=st();function st(){return 2**++Qu}var Ar=Object.keys($t),ut=class extends de{constructor(t,n,r,i){let o=-1;if(super(t,n),pa(this,"space",i),typeof r=="number")for(;++o<Ar.length;){let a=Ar[o];pa(this,Ar[o],(r&$t[a])===$t[a]);}}};ut.prototype.defined=true;function pa(e,t,n){n&&(e[t]=n);}function Ae(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let o=new ut(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=true),t[r]=o,n[Ht(r)]=r,n[Ht(o.attribute)]=r;}return new We(t,n,e.space)}var Tr=Ae({properties:{ariaActiveDescendant:null,ariaAtomic:ne,ariaAutoComplete:null,ariaBusy:ne,ariaChecked:ne,ariaColCount:C,ariaColIndex:C,ariaColSpan:C,ariaControls:K,ariaCurrent:null,ariaDescribedBy:K,ariaDetails:null,ariaDisabled:ne,ariaDropEffect:K,ariaErrorMessage:null,ariaExpanded:ne,ariaFlowTo:K,ariaGrabbed:ne,ariaHasPopup:null,ariaHidden:ne,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:K,ariaLevel:C,ariaLive:null,ariaModal:ne,ariaMultiLine:ne,ariaMultiSelectable:ne,ariaOrientation:null,ariaOwns:K,ariaPlaceholder:null,ariaPosInSet:C,ariaPressed:ne,ariaReadOnly:ne,ariaRelevant:null,ariaRequired:ne,ariaRoleDescription:K,ariaRowCount:C,ariaRowIndex:C,ariaRowSpan:C,ariaSelected:ne,ariaSetSize:C,ariaSort:null,ariaValueMax:C,ariaValueMin:C,ariaValueNow:C,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function kn(e,t){return t in e?e[t]:t}function _n(e,t){return kn(e,t.toLowerCase())}var fa=Ae({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:qe,acceptCharset:K,accessKey:K,action:null,allow:null,allowFullScreen:O,allowPaymentRequest:O,allowUserMedia:O,alpha:O,alt:null,as:null,async:O,autoCapitalize:null,autoComplete:K,autoFocus:O,autoPlay:O,blocking:K,capture:null,charSet:null,checked:O,cite:null,className:K,closedBy:null,colorSpace:null,cols:C,colSpan:C,command:null,commandFor:null,content:null,contentEditable:ne,controls:O,controlsList:K,coords:C|qe,crossOrigin:null,data:null,dateTime:null,decoding:null,default:O,defer:O,dir:null,dirName:null,disabled:O,download:wn,draggable:ne,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:O,formTarget:null,headers:K,height:C,hidden:wn,high:C,href:null,hrefLang:null,htmlFor:K,httpEquiv:K,id:null,imageSizes:null,imageSrcSet:null,inert:O,inputMode:null,integrity:null,is:null,isMap:O,itemId:null,itemProp:K,itemRef:K,itemScope:O,itemType:K,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:O,low:C,manifest:null,max:null,maxLength:C,media:null,method:null,min:null,minLength:C,multiple:O,muted:O,name:null,nonce:null,noModule:O,noValidate:O,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:O,optimum:C,pattern:null,ping:K,placeholder:null,playsInline:O,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:O,referrerPolicy:null,rel:K,required:O,reversed:O,rows:C,rowSpan:C,sandbox:K,scope:null,scoped:O,seamless:O,selected:O,shadowRootClonable:O,shadowRootCustomElementRegistry:O,shadowRootDelegatesFocus:O,shadowRootMode:null,shadowRootSerializable:O,shape:null,size:C,sizes:null,slot:null,span:C,spellCheck:ne,src:null,srcDoc:null,srcLang:null,srcSet:null,start:C,step:null,style:null,tabIndex:C,target:null,title:null,translate:null,type:null,typeMustMatch:O,useMap:null,value:ne,width:C,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:K,axis:null,background:null,bgColor:null,border:C,borderColor:null,bottomMargin:C,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:O,declare:O,event:null,face:null,frame:null,frameBorder:null,hSpace:C,leftMargin:C,link:null,longDesc:null,lowSrc:null,marginHeight:C,marginWidth:C,noResize:O,noHref:O,noShade:O,noWrap:O,object:null,profile:null,prompt:null,rev:null,rightMargin:C,rules:null,scheme:null,scrolling:ne,standby:null,summary:null,text:null,topMargin:C,valueType:null,version:null,vAlign:null,vLink:null,vSpace:C,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:O,disablePictureInPicture:O,disableRemotePlayback:O,exportParts:qe,part:K,prefix:null,property:null,results:C,security:null,unselectable:null},space:"html",transform:_n});var ma=Ae({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:_e,accentHeight:C,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:C,amplitude:C,arabicForm:null,ascent:C,attributeName:null,attributeType:null,azimuth:C,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:C,by:null,calcMode:null,capHeight:C,className:K,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:C,diffuseConstant:C,direction:null,display:null,dur:null,divisor:C,dominantBaseline:null,download:O,dx:null,dy:null,edgeMode:null,editable:null,elevation:C,enableBackground:null,end:null,event:null,exponent:C,externalResourcesRequired:null,fill:null,fillOpacity:C,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:qe,g2:qe,glyphName:qe,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:C,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:C,horizOriginX:C,horizOriginY:C,id:null,ideographic:C,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:C,k:C,k1:C,k2:C,k3:C,k4:C,kernelMatrix:_e,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:C,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:C,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:C,overlineThickness:C,paintOrder:null,panose1:null,path:null,pathLength:C,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:K,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:C,pointsAtY:C,pointsAtZ:C,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:_e,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:_e,rev:_e,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:_e,requiredFeatures:_e,requiredFonts:_e,requiredFormats:_e,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:C,specularExponent:C,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:C,strikethroughThickness:C,string:null,stroke:null,strokeDashArray:_e,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:C,strokeOpacity:C,strokeWidth:null,style:null,surfaceScale:C,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:_e,tabIndex:C,tableValues:null,target:null,targetX:C,targetY:C,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:_e,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:C,underlineThickness:C,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:C,values:null,vAlphabetic:C,vMathematical:C,vectorEffect:null,vHanging:C,vIdeographic:C,version:null,vertAdvY:C,vertOriginX:C,vertOriginY:C,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:C,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:kn});var Pr=Ae({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return "xlink:"+t.slice(5).toLowerCase()}});var Lr=Ae({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:_n});var Rr=Ae({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return "xml:"+t.slice(3).toLowerCase()}});var Dr={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var Zu=/[A-Z]/g,ha=/-[a-z]/g,ec=/^data[-\w.:]+$/i;function Nr(e,t){let n=Ht(t),r=t,i=de;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&ec.test(t)){if(t.charAt(4)==="-"){let o=t.slice(5).replace(ha,nc);r="data"+o.charAt(0).toUpperCase()+o.slice(1);}else {let o=t.slice(4);if(!ha.test(o)){let a=o.replace(Zu,tc);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a;}}i=ut;}return new i(r,t)}function tc(e){return "-"+e.toLowerCase()}function nc(e){return e.charAt(1).toUpperCase()}var da=Ir([Tr,fa,Pr,Lr,Rr],"html"),zn=Ir([Tr,ma,Pr,Lr,Rr],"svg");function ga(e){return e.join(" ").trim()}var Pa=co(Ea());var Cn=Ia("end"),St=Ia("start");function Ia(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return {line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Or(e){let t=St(e),n=Cn(e);if(t&&n)return {start:t,end:n}}function Qe(e){return !e||typeof e!="object"?"":"position"in e||"type"in e?Aa(e.position):"start"in e||"end"in e?Aa(e):"line"in e||"column"in e?Ur(e):""}function Ur(e){return Ta(e&&e.line)+":"+Ta(e&&e.column)}function Aa(e){return Ur(e&&e.start)+"-"+Ur(e&&e.end)}function Ta(e){return e&&typeof e=="number"?e:1}var oe=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=false;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=true,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){let s=r.indexOf(":");s===-1?o.ruleId=r:(o.source=r.slice(0,s),o.ruleId=r.slice(s+1));}if(!o.place&&o.ancestors&&o.ancestors){let s=o.ancestors[o.ancestors.length-1];s&&(o.place=s.position);}let l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Qe(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0;}};oe.prototype.file="";oe.prototype.name="";oe.prototype.reason="";oe.prototype.message="";oe.prototype.stack="";oe.prototype.column=void 0;oe.prototype.line=void 0;oe.prototype.ancestors=void 0;oe.prototype.cause=void 0;oe.prototype.fatal=void 0;oe.prototype.place=void 0;oe.prototype.ruleId=void 0;oe.prototype.source=void 0;var Br={}.hasOwnProperty,Ic=new Map,Ac=/[A-Z]/g,Tc=new Set(["table","tbody","thead","tfoot","tr"]),Pc=new Set(["td","th"]),La="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function jr(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Uc(n,t.jsxDEV);}else {if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Oc(n,t.jsx,t.jsxs);}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||false,passKeys:t.passKeys!==false,passNode:t.passNode||false,schema:t.space==="svg"?zn:da,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==false},o=Ra(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Ra(e,t,n){if(t.type==="element")return Lc(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Rc(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Nc(e,t,n);if(t.type==="mdxjsEsm")return Dc(e,t);if(t.type==="root")return Mc(e,t,n);if(t.type==="text")return Fc(e,t)}function Lc(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=zn,e.schema=i),e.ancestors.push(t);let o=Na(e,t.tagName,false),a=Bc(e,t),l=$r(e,t);return Tc.has(t.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!Er(s):true})),Da(e,a,o,t),Hr(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Rc(e,t){if(t.data&&t.data.estree&&e.evaluater){let r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Wt(e,t.position);}function Dc(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Wt(e,t.position);}function Nc(e,t,n){let r=e.schema,i=r;t.name==="svg"&&r.space==="html"&&(i=zn,e.schema=i),e.ancestors.push(t);let o=t.name===null?e.Fragment:Na(e,t.name,true),a=jc(e,t),l=$r(e,t);return Da(e,a,o,t),Hr(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Mc(e,t,n){let r={};return Hr(r,$r(e,t)),e.create(t,e.Fragment,r,n)}function Fc(e,t){return t.value}function Da(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r);}function Hr(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n);}}function Oc(e,t,n){return r;function r(i,o,a,l){let u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function Uc(e,t){return n;function n(r,i,o,a){let l=Array.isArray(o.children),s=St(r);return t(i,o,a,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function Bc(e,t){let n={},r,i;for(i in t.properties)if(i!=="children"&&Br.call(t.properties,i)){let o=Hc(e,i,t.properties[i]);if(o){let[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&Pc.has(t.tagName)?r=l:n[a]=l;}}if(r){let o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r;}return n}function jc(e,t){let n={};for(let r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){let o=r.data.estree.body[0];o.type;let a=o.expression;a.type;let l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument));}else Wt(e,t.position);else {let i=r.name,o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){let l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression);}else Wt(e,t.position);else o=r.value===null?true:r.value;n[i]=o;}return n}function $r(e,t){let n=[],r=-1,i=e.passKeys?new Map:Ic;for(;++r<t.children.length;){let o=t.children[r],a;if(e.passKeys){let s=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(s){let u=i.get(s)||0;a=s+"-"+u,i.set(s,u+1);}}let l=Ra(e,o,a);l!==void 0&&n.push(l);}return n}function Hc(e,t,n){let r=Nr(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?ua(n):ga(n)),r.property==="style"){let i=typeof n=="object"?n:$c(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Vc(i)),["style",i]}return [e.elementAttributeNameCase==="react"&&r.space?Dr[r.property]||r.property:r.attribute,n]}}function $c(e,t){try{return (0,Pa.default)(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return {};let r=n,i=new oe("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=La+"#cannot-parse-style-attribute",i}}function Na(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){let i=t.split("."),o=-1,a;for(;++o<i.length;){let l=vn(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:false}:l;}r=a;}else r=vn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){let i=r.value;return Br.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Wt(e);}function Wt(e,t){let n=new oe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=La+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Vc(e){let t={},n;for(n in e)Br.call(e,n)&&(t[Wc(n)]=e[n]);return t}function Wc(e){let t=e.replace(Ac,qc);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function qc(e){return "-"+e.toLowerCase()}var qt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};function Xc(e,t){for(var n in t)e[n]=t[n];return e}function Ma(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return  true;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return  true;return  false}function Fa(e,t){this.props=e,this.context=t;}(Fa.prototype=new De).isPureReactComponent=true,Fa.prototype.shouldComponentUpdate=function(e,t){return Ma(this.props,e)||Ma(this.state,t)};var Oa=M.__b;M.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Oa&&Oa(e);};var Kc=M.__e;M.__e=function(e,t,n,r){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k||[]),i.__c(e,t)}Kc(e,t,n,r);};var Ua=M.unmount;function Wa(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c();}),e.__c.__H=null),(e=Xc({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=true,e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Wa(r,t,n)})),e}function qa(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return qa(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=true,e.__c.__P=n)),e}function Vr(){this.__u=0,this.o=null,this.__b=null;}function Ya(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function En(){this.i=null,this.l=null;}M.unmount=function(e){var t=e.__c;t&&(t.__z=true),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Ua&&Ua(e);},(Vr.prototype=new De).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var i=Ya(r.__v),o=false,a=function(){o||r.__z||(o=true,n.__R=null,i?i(s):s());};n.__R=a;var l=n.__P;n.__P=null;var s=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=qa(u,u.__c.__P,u.__c.__O);}var c;for(r.setState({__a:r.__b=null});c=r.o.pop();)c.__P=l,c.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a);},Vr.prototype.componentWillUnmount=function(){this.o=[];},Vr.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Wa(this.__b,n,r.__O=r.__P);}this.__b=null;}var i=t.__a&&Me(Ce,null,e.fallback);return i&&(i.__u&=-33),[Me(Ce,null,t.__a?null:e.children),i]};var Ba=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2];}};(En.prototype=new De).__a=function(e){var t=this,n=Ya(t.__v),r=t.l.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),Ba(t,e,r)):i();};n?n(o):o();}},En.prototype.render=function(e){this.i=null,this.l=new Map;var t=Bt(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},En.prototype.componentDidUpdate=En.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Ba(e,n,t);});};var Jc=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Qc=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Zc=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ep=/[A-Z0-9]/g,tp=typeof document<"u",np=function(e){return (typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};De.prototype.isReactComponent=true,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(De.prototype,e,{configurable:true,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:true,writable:true,value:t});}});});var ja=M.event;M.event=function(e){return ja&&(e=ja(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var rp={configurable:true,get:function(){return this.class}},Ha=M.vnode;M.vnode=function(e){typeof e.type=="string"&&(function(t){var n=t.props,r=t.type,i={},o=r.indexOf("-")==-1;for(var a in n){var l=n[a];if(!(a==="value"&&"defaultValue"in n&&l==null||tp&&a==="children"&&r==="noscript"||a==="class"||a==="className")){var s=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===true?l="":s==="translate"&&l==="no"?l=false:s[0]==="o"&&s[1]==="n"?s==="ondoubleclick"?a="ondblclick":s!=="onchange"||r!=="input"&&r!=="textarea"||np(n.type)?s==="onfocus"?a="onfocusin":s==="onblur"?a="onfocusout":Zc.test(a)&&(a=s):s=a="oninput":o&&Qc.test(a)?a=a.replace(ep,"-$&").toLowerCase():l===null&&(l=void 0),s==="oninput"&&i[a=s]&&(a="oninputCapture"),i[a]=l;}}r=="select"&&(i.multiple&&Array.isArray(i.value)&&(i.value=Bt(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1;})),i.defaultValue!=null&&(i.value=Bt(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value;}))),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",rp)):n.className&&(i.class=i.className=n.className),t.props=i;})(e),e.$$typeof=Jc,Ha&&Ha(e);};var $a=M.__r;M.__r=function(e){$a&&$a(e),e.__c;};var Va=M.diffed;M.diffed=function(e){Va&&Va(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value);};var ip={};function pt(e,t){let n=ip,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:true,i=typeof n.includeHtml=="boolean"?n.includeHtml:true;return Ka(e,r,i)}function Ka(e,t,n){if(op(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Xa(e.children,t,n)}return Array.isArray(e)?Xa(e,t,n):""}function Xa(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=Ka(e[i],t,n);return r.join("")}function op(e){return !!(e&&typeof e=="object")}var Ja=document.createElement("i");function Ct(e){let t="&"+e+";";Ja.innerHTML=t;let n=Ja.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?false:n}function ae(e,t,n,r){let i=e.length,o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4;}function ke(e,t){return e.length>0?(ae(e,e.length,0,t),e):t}var Qa={}.hasOwnProperty;function In(e){let t={},n=-1;for(;++n<e.length;)ap(t,e[n]);return t}function ap(e,t){let n;for(n in t){let i=(Qa.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n],a;if(o)for(a in o){Qa.call(i,a)||(i[a]=[]);let l=o[a];lp(i[a],Array.isArray(l)?l:l?[l]:[]);}}}function lp(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);ae(e,0,0,r);}function An(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function ve(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var he=Ze(/[A-Za-z]/),re=Ze(/[\dA-Za-z]/),Za=Ze(/[#-'*+\--9=?A-Z^-~]/);function ft(e){return e!==null&&(e<32||e===127)}var Yt=Ze(/\d/),el=Ze(/[\dA-Fa-f]/),tl=Ze(/[!-/:-@[-`{-~]/);function I(e){return e!==null&&e<-2}function V(e){return e!==null&&(e<0||e===32)}function R(e){return e===-2||e===-1||e===32}var mt=Ze(/\p{P}|\p{S}/u),Oe=Ze(/\s/);function Ze(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Te(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let o=e.charCodeAt(n),a="";if(o===37&&re(e.charCodeAt(n+1))&&re(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){let l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),i=1):a="\uFFFD";}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0);}return t.join("")+e.slice(r)}function L(e,t,n,r){let i=r?r-1:Number.POSITIVE_INFINITY,o=0;return a;function a(s){return R(s)?(e.enter(n),l(s)):t(s)}function l(s){return R(s)&&o++<i?(e.consume(s),l):(e.exit(n),t(s))}}var nl={tokenize:sp};function sp(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),L(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){let s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return I(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}var il={tokenize:up},rl={tokenize:cp};function up(e){let t=this,n=[],r=0,i,o,a;return l;function l(S){if(r<n.length){let N=n[r];return t.containerState=N[1],e.attempt(N[0].continuation,s,u)(S)}return u(S)}function s(S){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&z();let N=t.events.length,D=N,_;for(;D--;)if(t.events[D][0]==="exit"&&t.events[D][1].type==="chunkFlow"){_=t.events[D][1].end;break}y(r);let $=N;for(;$<t.events.length;)t.events[$][1].end={..._},$++;return ae(t.events,D+1,0,t.events.slice(N)),t.events.length=$,u(S)}return l(S)}function u(S){if(r===n.length){if(!i)return p(S);if(i.currentConstruct&&i.currentConstruct.concrete)return h(S);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack);}return t.containerState={},e.check(rl,c,f)(S)}function c(S){return i&&z(),y(r),p(S)}function f(S){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,h(S)}function p(S){return t.containerState={},e.attempt(rl,m,h)(S)}function m(S){return r++,n.push([t.currentConstruct,t.containerState]),p(S)}function h(S){if(S===null){i&&z(),y(0),e.consume(S);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),x(S)}function x(S){if(S===null){v(e.exit("chunkFlow"),true),y(0),e.consume(S);return}return I(S)?(e.consume(S),v(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(S),x)}function v(S,N){let D=t.sliceStream(S);if(N&&D.push(null),S.previous=o,o&&(o.next=S),o=S,i.defineSkip(S.start),i.write(D),t.parser.lazy[S.start.line]){let _=i.events.length;for(;_--;)if(i.events[_][1].start.offset<a&&(!i.events[_][1].end||i.events[_][1].end.offset>a))return;let $=t.events.length,W=$,j,b;for(;W--;)if(t.events[W][0]==="exit"&&t.events[W][1].type==="chunkFlow"){if(j){b=t.events[W][1].end;break}j=true;}for(y(r),_=$;_<t.events.length;)t.events[_][1].end={...b},_++;ae(t.events,W+1,0,t.events.slice($)),t.events.length=_;}}function y(S){let N=n.length;for(;N-- >S;){let D=n[N];t.containerState=D[1],D[0].exit.call(t,e);}n.length=S;}function z(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0;}}function cp(e,t,n){return L(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ye(e){if(e===null||V(e)||Oe(e))return 1;if(mt(e))return 2}function et(e,t,n){let r=[],i=-1;for(;++i<e.length;){let o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o));}return t}var Gt={name:"attention",resolveAll:pp,tokenize:fp};function pp(e,t){let n=-1,r,i,o,a,l,s,u,c;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let f={...e[r][1].end},p={...e[n][1].start};ol(f,-s),ol(p,s),a={type:s>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:p},o={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=ke(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=ke(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=ke(u,et(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=ke(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(c=2,u=ke(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):c=0,ae(e,r-1,n-r+3,u),n=r+u.length-c-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function fp(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Ye(r),o;return a;function a(s){return o=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===o)return e.consume(s),l;let u=e.exit("attentionSequence"),c=Ye(s),f=!c||c===2&&i||n.includes(s),p=!i||i===2&&c||n.includes(r);return u._open=!!(o===42?f:f&&(i||!p)),u._close=!!(o===42?p:p&&(c||!f)),t(s)}}function ol(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t;}var Wr={name:"autolink",tokenize:mp};function mp(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return he(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||re(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,s):(m===43||m===45||m===46||re(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function s(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||ft(m)?n(m):(e.consume(m),s)}function u(m){return m===64?(e.consume(m),c):Za(m)?(e.consume(m),u):n(m)}function c(m){return re(m)?f(m):n(m)}function f(m){return m===46?(e.consume(m),r=0,c):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):p(m)}function p(m){if((m===45||re(m))&&r++<63){let h=m===45?p:f;return e.consume(m),h}return n(m)}}var Ue={partial:true,tokenize:hp};function hp(e,t,n){return r;function r(o){return R(o)?L(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||I(o)?t(o):n(o)}}var Tn={continuation:{tokenize:gp},exit:yp,name:"blockQuote",tokenize:dp};function dp(e,t,n){let r=this;return i;function i(a){if(a===62){let l=r.containerState;return l.open||(e.enter("blockQuote",{_container:true}),l.open=true),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return R(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function gp(e,t,n){let r=this;return i;function i(a){return R(a)?L(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Tn,t,n)(a)}}function yp(e){e.exit("blockQuote");}var Pn={name:"characterEscape",tokenize:xp};function xp(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return tl(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}var Ln={name:"characterReference",tokenize:bp};function bp(e,t,n){let r=this,i=0,o,a;return l;function l(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),s}function s(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=re,c(f))}function u(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=el,c):(e.enter("characterReferenceValue"),o=7,a=Yt,c(f))}function c(f){if(f===59&&i){let p=e.exit("characterReferenceValue");return a===re&&!Ct(r.sliceSerialize(p))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(f)&&i++<o?(e.consume(f),c):n(f)}}var al={partial:true,tokenize:wp},Rn={concrete:true,name:"codeFenced",tokenize:vp};function vp(e,t,n){let r=this,i={partial:true,tokenize:D},o=0,a=0,l;return s;function s(_){return u(_)}function u(_){let $=r.events[r.events.length-1];return o=$&&$[1].type==="linePrefix"?$[2].sliceSerialize($[1],true).length:0,l=_,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(_)}function c(_){return _===l?(a++,e.consume(_),c):a<3?n(_):(e.exit("codeFencedFenceSequence"),R(_)?L(e,f,"whitespace")(_):f(_))}function f(_){return _===null||I(_)?(e.exit("codeFencedFence"),r.interrupt?t(_):e.check(al,x,N)(_)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(_))}function p(_){return _===null||I(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(_)):R(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),L(e,m,"whitespace")(_)):_===96&&_===l?n(_):(e.consume(_),p)}function m(_){return _===null||I(_)?f(_):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),h(_))}function h(_){return _===null||I(_)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(_)):_===96&&_===l?n(_):(e.consume(_),h)}function x(_){return e.attempt(i,N,v)(_)}function v(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),y}function y(_){return o>0&&R(_)?L(e,z,"linePrefix",o+1)(_):z(_)}function z(_){return _===null||I(_)?e.check(al,x,N)(_):(e.enter("codeFlowValue"),S(_))}function S(_){return _===null||I(_)?(e.exit("codeFlowValue"),z(_)):(e.consume(_),S)}function N(_){return e.exit("codeFenced"),t(_)}function D(_,$,W){let j=0;return b;function b(P){return _.enter("lineEnding"),_.consume(P),_.exit("lineEnding"),X}function X(P){return _.enter("codeFencedFence"),R(P)?L(_,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):B(P)}function B(P){return P===l?(_.enter("codeFencedFenceSequence"),A(P)):W(P)}function A(P){return P===l?(j++,_.consume(P),A):j>=a?(_.exit("codeFencedFenceSequence"),R(P)?L(_,U,"whitespace")(P):U(P)):W(P)}function U(P){return P===null||I(P)?(_.exit("codeFencedFence"),$(P)):W(P)}}}function wp(e,t,n){let r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}var Xt={name:"codeIndented",tokenize:_p},kp={partial:true,tokenize:zp};function _p(e,t,n){let r=this;return i;function i(u){return e.enter("codeIndented"),L(e,o,"linePrefix",5)(u)}function o(u){let c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],true).length>=4?a(u):n(u)}function a(u){return u===null?s(u):I(u)?e.attempt(kp,a,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||I(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),t(u)}}function zp(e,t,n){let r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):I(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):L(e,o,"linePrefix",5)(a)}function o(a){let l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(a):I(a)?i(a):n(a)}}var qr={name:"codeText",previous:Cp,resolve:Sp,tokenize:Ep};function Sp(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Cp(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Ep(e,t,n){let i=0,o,a;return l;function l(p){return e.enter("codeText"),e.enter("codeTextSequence"),s(p)}function s(p){return p===96?(e.consume(p),i++,s):(e.exit("codeTextSequence"),u(p))}function u(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),u):p===96?(a=e.enter("codeTextSequence"),o=0,f(p)):I(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(p))}function c(p){return p===null||p===32||p===96||I(p)?(e.exit("codeTextData"),u(p)):(e.consume(p),c)}function f(p){return p===96?(e.consume(p),o++,f):o===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(a.type="codeTextData",c(p))}}var Dn=class{constructor(t){this.left=t?[...t]:[],this.right=[];}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let i=n||0;this.setCursor(Math.trunc(t));let o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Kt(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t);}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Kt(this.left,t);}unshift(t){this.setCursor(0),this.right.push(t);}unshiftMany(t){this.setCursor(0),Kt(this.right,t.reverse());}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,Number.POSITIVE_INFINITY);Kt(this.right,n.reverse());}else {let n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Kt(this.left,n.reverse());}}};function Kt(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4;}function Nn(e){let t={},n=-1,r,i,o,a,l,s,u,c=new Dn(e);for(;++n<c.length;){for(;n in t;)n=t[n];if(r=c.get(n),n&&r[1].type==="chunkFlow"&&c.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,o=0,o<s.length&&s[o][1].type==="lineEndingBlank"&&(o+=2),o<s.length&&s[o][1].type==="content"))for(;++o<s.length&&s[o][1].type!=="content";)s[o][1].type==="chunkText"&&(s[o][1]._isInFirstContentOfListItem=true,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Ip(c,n)),n=t[n],u=true);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=c.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(c.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...c.get(i)[1].start},l=c.slice(i,n),l.unshift(r),c.splice(i,n-i+1,l));}}return ae(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function Ip(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,o=[],a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=true));let l=a.events,s=[],u={},c,f,p=-1,m=n,h=0,x=0,v=[x];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(c=r.sliceStream(m),m.next||c.push(null),f&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=true),a.write(c),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),f=m,m=m.next;}for(m=n;++p<l.length;)l[p][0]==="exit"&&l[p-1][0]==="enter"&&l[p][1].type===l[p-1][1].type&&l[p][1].start.line!==l[p][1].end.line&&(x=p+1,v.push(x),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):v.pop(),p=v.length;p--;){let y=l.slice(v[p],v[p+1]),z=o.pop();s.push([z,z+y.length-1]),e.splice(z,2,y);}for(s.reverse(),p=-1;++p<s.length;)u[h+s[p][0]]=h+s[p][1],h+=s[p][1]-s[p][0]-1;return u}var Yr={resolve:Tp,tokenize:Pp},Ap={partial:true,tokenize:Lp};function Tp(e){return Nn(e),e}function Pp(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):I(l)?e.check(Ap,a,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Lp(e,t,n){let r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),L(e,o,"linePrefix")}function o(a){if(a===null||I(a))return n(a);let l=r.events[r.events.length-1];return !r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Mn(e,t,n,r,i,o,a,l,s){let u=s||Number.POSITIVE_INFINITY,c=0;return f;function f(y){return y===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(y),e.exit(o),p):y===null||y===32||y===41||ft(y)?n(y):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),x(y))}function p(y){return y===62?(e.enter(o),e.consume(y),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(y))}function m(y){return y===62?(e.exit("chunkString"),e.exit(l),p(y)):y===null||y===60||I(y)?n(y):(e.consume(y),y===92?h:m)}function h(y){return y===60||y===62||y===92?(e.consume(y),m):m(y)}function x(y){return !c&&(y===null||y===41||V(y))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(y)):c<u&&y===40?(e.consume(y),c++,x):y===41?(e.consume(y),c--,x):y===null||y===32||y===40||ft(y)?n(y):(e.consume(y),y===92?v:x)}function v(y){return y===40||y===41||y===92?(e.consume(y),x):x(y)}}function Fn(e,t,n,r,i,o){let a=this,l=0,s;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),c}function c(m){return l>999||m===null||m===91||m===93&&!s||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):I(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),f(m))}function f(m){return m===null||m===91||m===93||I(m)||l++>999?(e.exit("chunkString"),c(m)):(e.consume(m),s||(s=!R(m)),m===92?p:f)}function p(m){return m===91||m===92||m===93?(e.consume(m),l++,f):f(m)}}function On(e,t,n,r,i,o){let a;return l;function l(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),a=p===40?41:p,s):n(p)}function s(p){return p===a?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(o),u(p))}function u(p){return p===a?(e.exit(o),s(a)):p===null?n(p):I(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),L(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===a||p===null||I(p)?(e.exit("chunkString"),u(p)):(e.consume(p),p===92?f:c)}function f(p){return p===a||p===92?(e.consume(p),c):c(p)}}function ht(e,t){let n;return r;function r(i){return I(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=true,r):R(i)?L(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}var Gr={name:"definition",tokenize:Dp},Rp={partial:true,tokenize:Np};function Dp(e,t,n){let r=this,i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return Fn.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return i=ve(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),s):n(m)}function s(m){return V(m)?ht(e,u)(m):u(m)}function u(m){return Mn(e,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function c(m){return e.attempt(Rp,f,f)(m)}function f(m){return R(m)?L(e,p,"whitespace")(m):p(m)}function p(m){return m===null||I(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Np(e,t,n){return r;function r(l){return V(l)?ht(e,i)(l):n(l)}function i(l){return On(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return R(l)?L(e,a,"whitespace")(l):a(l)}function a(l){return l===null||I(l)?t(l):n(l)}}var Xr={name:"hardBreakEscape",tokenize:Mp};function Mp(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return I(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}var Kr={name:"headingAtx",resolve:Fp,tokenize:Op};function Fp(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},ae(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Op(e,t,n){let r=0;return i;function i(c){return e.enter("atxHeading"),o(c)}function o(c){return e.enter("atxHeadingSequence"),a(c)}function a(c){return c===35&&r++<6?(e.consume(c),a):c===null||V(c)?(e.exit("atxHeadingSequence"),l(c)):n(c)}function l(c){return c===35?(e.enter("atxHeadingSequence"),s(c)):c===null||I(c)?(e.exit("atxHeading"),t(c)):R(c)?L(e,l,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function s(c){return c===35?(e.consume(c),s):(e.exit("atxHeadingSequence"),l(c))}function u(c){return c===null||c===35||V(c)?(e.exit("atxHeadingText"),l(c)):(e.consume(c),u)}}var ll=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Jr=["pre","script","style","textarea"];var Qr={concrete:true,name:"htmlFlow",resolveTo:jp,tokenize:Hp},Up={partial:true,tokenize:Vp},Bp={partial:true,tokenize:$p};function jp(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Hp(e,t,n){let r=this,i,o,a,l,s;return u;function u(g){return c(g)}function c(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),f}function f(g){return g===33?(e.consume(g),p):g===47?(e.consume(g),o=true,x):g===63?(e.consume(g),i=3,r.interrupt?t:d):he(g)?(e.consume(g),a=String.fromCharCode(g),v):n(g)}function p(g){return g===45?(e.consume(g),i=2,m):g===91?(e.consume(g),i=5,l=0,h):he(g)?(e.consume(g),i=4,r.interrupt?t:d):n(g)}function m(g){return g===45?(e.consume(g),r.interrupt?t:d):n(g)}function h(g){let pe="CDATA[";return g===pe.charCodeAt(l++)?(e.consume(g),l===pe.length?r.interrupt?t:B:h):n(g)}function x(g){return he(g)?(e.consume(g),a=String.fromCharCode(g),v):n(g)}function v(g){if(g===null||g===47||g===62||V(g)){let pe=g===47,Pe=a.toLowerCase();return !pe&&!o&&Jr.includes(Pe)?(i=1,r.interrupt?t(g):B(g)):ll.includes(a.toLowerCase())?(i=6,pe?(e.consume(g),y):r.interrupt?t(g):B(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):o?z(g):S(g))}return g===45||re(g)?(e.consume(g),a+=String.fromCharCode(g),v):n(g)}function y(g){return g===62?(e.consume(g),r.interrupt?t:B):n(g)}function z(g){return R(g)?(e.consume(g),z):b(g)}function S(g){return g===47?(e.consume(g),b):g===58||g===95||he(g)?(e.consume(g),N):R(g)?(e.consume(g),S):b(g)}function N(g){return g===45||g===46||g===58||g===95||re(g)?(e.consume(g),N):D(g)}function D(g){return g===61?(e.consume(g),_):R(g)?(e.consume(g),D):S(g)}function _(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),s=g,$):R(g)?(e.consume(g),_):W(g)}function $(g){return g===s?(e.consume(g),s=null,j):g===null||I(g)?n(g):(e.consume(g),$)}function W(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||V(g)?D(g):(e.consume(g),W)}function j(g){return g===47||g===62||R(g)?S(g):n(g)}function b(g){return g===62?(e.consume(g),X):n(g)}function X(g){return g===null||I(g)?B(g):R(g)?(e.consume(g),X):n(g)}function B(g){return g===45&&i===2?(e.consume(g),G):g===60&&i===1?(e.consume(g),T):g===62&&i===4?(e.consume(g),ce):g===63&&i===3?(e.consume(g),d):g===93&&i===5?(e.consume(g),be):I(g)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Up,ge,A)(g)):g===null||I(g)?(e.exit("htmlFlowData"),A(g)):(e.consume(g),B)}function A(g){return e.check(Bp,U,ge)(g)}function U(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),P}function P(g){return g===null||I(g)?A(g):(e.enter("htmlFlowData"),B(g))}function G(g){return g===45?(e.consume(g),d):B(g)}function T(g){return g===47?(e.consume(g),a="",Q):B(g)}function Q(g){if(g===62){let pe=a.toLowerCase();return Jr.includes(pe)?(e.consume(g),ce):B(g)}return he(g)&&a.length<8?(e.consume(g),a+=String.fromCharCode(g),Q):B(g)}function be(g){return g===93?(e.consume(g),d):B(g)}function d(g){return g===62?(e.consume(g),ce):g===45&&i===2?(e.consume(g),d):B(g)}function ce(g){return g===null||I(g)?(e.exit("htmlFlowData"),ge(g)):(e.consume(g),ce)}function ge(g){return e.exit("htmlFlow"),t(g)}}function $p(e,t,n){let r=this;return i;function i(a){return I(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function Vp(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ue,t,n)}}var Zr={name:"htmlText",tokenize:Wp};function Wp(e,t,n){let r=this,i,o,a;return l;function l(d){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(d),s}function s(d){return d===33?(e.consume(d),u):d===47?(e.consume(d),D):d===63?(e.consume(d),S):he(d)?(e.consume(d),W):n(d)}function u(d){return d===45?(e.consume(d),c):d===91?(e.consume(d),o=0,h):he(d)?(e.consume(d),z):n(d)}function c(d){return d===45?(e.consume(d),m):n(d)}function f(d){return d===null?n(d):d===45?(e.consume(d),p):I(d)?(a=f,T(d)):(e.consume(d),f)}function p(d){return d===45?(e.consume(d),m):f(d)}function m(d){return d===62?G(d):d===45?p(d):f(d)}function h(d){let ce="CDATA[";return d===ce.charCodeAt(o++)?(e.consume(d),o===ce.length?x:h):n(d)}function x(d){return d===null?n(d):d===93?(e.consume(d),v):I(d)?(a=x,T(d)):(e.consume(d),x)}function v(d){return d===93?(e.consume(d),y):x(d)}function y(d){return d===62?G(d):d===93?(e.consume(d),y):x(d)}function z(d){return d===null||d===62?G(d):I(d)?(a=z,T(d)):(e.consume(d),z)}function S(d){return d===null?n(d):d===63?(e.consume(d),N):I(d)?(a=S,T(d)):(e.consume(d),S)}function N(d){return d===62?G(d):S(d)}function D(d){return he(d)?(e.consume(d),_):n(d)}function _(d){return d===45||re(d)?(e.consume(d),_):$(d)}function $(d){return I(d)?(a=$,T(d)):R(d)?(e.consume(d),$):G(d)}function W(d){return d===45||re(d)?(e.consume(d),W):d===47||d===62||V(d)?j(d):n(d)}function j(d){return d===47?(e.consume(d),G):d===58||d===95||he(d)?(e.consume(d),b):I(d)?(a=j,T(d)):R(d)?(e.consume(d),j):G(d)}function b(d){return d===45||d===46||d===58||d===95||re(d)?(e.consume(d),b):X(d)}function X(d){return d===61?(e.consume(d),B):I(d)?(a=X,T(d)):R(d)?(e.consume(d),X):j(d)}function B(d){return d===null||d===60||d===61||d===62||d===96?n(d):d===34||d===39?(e.consume(d),i=d,A):I(d)?(a=B,T(d)):R(d)?(e.consume(d),B):(e.consume(d),U)}function A(d){return d===i?(e.consume(d),i=void 0,P):d===null?n(d):I(d)?(a=A,T(d)):(e.consume(d),A)}function U(d){return d===null||d===34||d===39||d===60||d===61||d===96?n(d):d===47||d===62||V(d)?j(d):(e.consume(d),U)}function P(d){return d===47||d===62||V(d)?j(d):n(d)}function G(d){return d===62?(e.consume(d),e.exit("htmlTextData"),e.exit("htmlText"),t):n(d)}function T(d){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),Q}function Q(d){return R(d)?L(e,be,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):be(d)}function be(d){return e.enter("htmlTextData"),a(d)}}var dt={name:"labelEnd",resolveAll:Xp,resolveTo:Kp,tokenize:Jp},qp={tokenize:Qp},Yp={tokenize:Zp},Gp={tokenize:ef};function Xp(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let i=r.type==="labelImage"?4:2;r.type="data",t+=i;}}return e.length!==n.length&&ae(e,0,e.length,n),e}function Kp(e,t){let n=e.length,r=0,i,o,a,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=true);}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);let s={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},c={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",s,t],["enter",u,t]],l=ke(l,e.slice(o+1,o+r+3)),l=ke(l,[["enter",c,t]]),l=ke(l,et(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=ke(l,[["exit",c,t],e[a-2],e[a-1],["exit",u,t]]),l=ke(l,e.slice(a+1)),l=ke(l,[["exit",s,t]]),ae(e,o,e.length,l),e}function Jp(e,t,n){let r=this,i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(p){return o?o._inactive?f(p):(a=r.parser.defined.includes(ve(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),s):n(p)}function s(p){return p===40?e.attempt(qp,c,a?c:f)(p):p===91?e.attempt(Yp,c,a?u:f)(p):a?c(p):f(p)}function u(p){return e.attempt(Gp,c,f)(p)}function c(p){return t(p)}function f(p){return o._balanced=true,n(p)}}function Qp(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return V(f)?ht(e,o)(f):o(f)}function o(f){return f===41?c(f):Mn(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function a(f){return V(f)?ht(e,s)(f):c(f)}function l(f){return n(f)}function s(f){return f===34||f===39||f===40?On(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):c(f)}function u(f){return V(f)?ht(e,c)(f):c(f)}function c(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function Zp(e,t,n){let r=this;return i;function i(l){return Fn.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(ve(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function ef(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}var ei={name:"labelStartImage",resolveAll:dt.resolveAll,tokenize:tf};function tf(e,t,n){let r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}var ti={name:"labelStartLink",resolveAll:dt.resolveAll,tokenize:nf};function nf(e,t,n){let r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}var Jt={name:"lineEnding",tokenize:rf};function rf(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),L(e,t,"linePrefix")}}var gt={name:"thematicBreak",tokenize:of};function of(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||I(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),R(u)?L(e,l,"whitespace")(u):l(u))}}var we={continuation:{tokenize:uf},exit:pf,name:"list",tokenize:sf},af={partial:true,tokenize:ff},lf={partial:true,tokenize:cf};function sf(e,t,n){let r=this,i=r.events[r.events.length-1],o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],true).length:0,a=0;return l;function l(m){let h=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(h==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Yt(m)){if(r.containerState.type||(r.containerState.type=h,e.enter(h,{_container:true})),h==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(gt,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(m)}return n(m)}function s(m){return Yt(m)&&++a<10?(e.consume(m),s):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Ue,r.interrupt?n:c,e.attempt(af,p,f))}function c(m){return r.containerState.initialBlankLine=true,o++,p(m)}function f(m){return R(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),p):n(m)}function p(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),true).length,t(m)}}function uf(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Ue,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,L(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!R(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(lf,t,a)(l))}function a(l){return r.containerState._closeFlow=true,r.interrupt=void 0,L(e,e.attempt(we,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function cf(e,t,n){let r=this;return L(e,i,"listItemIndent",r.containerState.size+1);function i(o){let a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],true).length===r.containerState.size?t(o):n(o)}}function pf(e){e.exit(this.containerState.type);}function ff(e,t,n){let r=this;return L(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){let a=r.events[r.events.length-1];return !R(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}var Un={name:"setextUnderline",resolveTo:mf,tokenize:hf};function mf(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n);}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);let a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function hf(e,t,n){let r=this,i;return o;function o(u){let c=r.events.length,f;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){f=r.events[c][1].type==="paragraph";break}return !r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),R(u)?L(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||I(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}var sl={tokenize:df};function df(e){let t=this,n=e.attempt(Ue,r,e.attempt(this.parser.constructs.flowInitial,i,L(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Yr,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}var ul={resolveAll:ml()},cl=fl("string"),pl=fl("text");function fl(e){return {resolveAll:ml(e==="text"?gf:void 0),tokenize:t};function t(n){let r=this,i=this.parser.constructs[e],o=n.attempt(i,a,l);return a;function a(c){return u(c)?o(c):l(c)}function l(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),s}function s(c){return u(c)?(n.exit("data"),o(c)):(n.consume(c),s)}function u(c){if(c===null)return  true;let f=i[c],p=-1;if(f)for(;++p<f.length;){let m=f[p];if(!m.previous||m.previous.call(r,r.previous))return  true}return  false}}}function ml(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function gf(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],i=t.sliceStream(r),o=i.length,a=-1,l=0,s;for(;o--;){let u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1;}else if(u===-2)s=true,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){let u={type:n===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2);}n++;}return e}var ni={};uo(ni,{attentionMarkers:()=>zf,contentInitial:()=>xf,disable:()=>Sf,document:()=>yf,flow:()=>vf,flowInitial:()=>bf,insideSpan:()=>_f,string:()=>wf,text:()=>kf});var yf={42:we,43:we,45:we,48:we,49:we,50:we,51:we,52:we,53:we,54:we,55:we,56:we,57:we,62:Tn},xf={91:Gr},bf={[-2]:Xt,[-1]:Xt,32:Xt},vf={35:Kr,42:gt,45:[Un,gt],60:Qr,61:Un,95:gt,96:Rn,126:Rn},wf={38:Ln,92:Pn},kf={[-5]:Jt,[-4]:Jt,[-3]:Jt,33:ei,38:Ln,42:Gt,60:[Wr,Zr],91:ti,92:[Xr,Pn],93:dt,95:Gt,96:qr},_f={null:[Gt,ul]},zf={null:[42,95]},Sf={null:[]};function hl(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},o=[],a=[],l=[],u={attempt:j($),check:j(W),consume:N,enter:D,exit:_,interrupt:j(W,{interrupt:true})},c={code:null,containerState:{},defineSkip:y,events:[],now:v,parser:e,previous:null,sliceSerialize:h,sliceStream:x,write:m},f=t.tokenize.call(c,u);return t.resolveAll&&o.push(t),c;function m(A){return a=ke(a,A),z(),a[a.length-1]!==null?[]:(b(t,0),c.events=et(o,c.events,c),c.events)}function h(A,U){return Ef(x(A),U)}function x(A){return Cf(a,A)}function v(){let{_bufferIndex:A,_index:U,line:P,column:G,offset:T}=r;return {_bufferIndex:A,_index:U,line:P,column:G,offset:T}}function y(A){i[A.line]=A.column,B();}function z(){let A;for(;r._index<a.length;){let U=a[r._index];if(typeof U=="string")for(A=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===A&&r._bufferIndex<U.length;)S(U.charCodeAt(r._bufferIndex));else S(U);}}function S(A){f=f(A);}function N(A){I(A)?(r.line++,r.column=1,r.offset+=A===-3?2:1,B()):A!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=A;}function D(A,U){let P=U||{};return P.type=A,P.start=v(),c.events.push(["enter",P,c]),l.push(P),P}function _(A){let U=l.pop();return U.end=v(),c.events.push(["exit",U,c]),U}function $(A,U){b(A,U.from);}function W(A,U){U.restore();}function j(A,U){return P;function P(G,T,Q){let be,d,ce,ge;return Array.isArray(G)?pe(G):"tokenize"in G?pe([G]):g(G);function g(le){return it;function it(ze){let je=ze!==null&&le[ze],Ke=ze!==null&&le.null,Dt=[...Array.isArray(je)?je:je?[je]:[],...Array.isArray(Ke)?Ke:Ke?[Ke]:[]];return pe(Dt)(ze)}}function pe(le){return be=le,d=0,le.length===0?Q:Pe(le[d])}function Pe(le){return it;function it(ze){return ge=X(),ce=le,le.partial||(c.currentConstruct=le),le.name&&c.parser.constructs.disable.null.includes(le.name)?Xe():le.tokenize.call(U?Object.assign(Object.create(c),U):c,u,ye,Xe)(ze)}}function ye(le){return A(ce,ge),T}function Xe(le){return ge.restore(),++d<be.length?Pe(be[d]):Q}}}function b(A,U){A.resolveAll&&!o.includes(A)&&o.push(A),A.resolve&&ae(c.events,U,c.events.length-U,A.resolve(c.events.slice(U),c)),A.resolveTo&&(c.events=A.resolveTo(c.events,c));}function X(){let A=v(),U=c.previous,P=c.currentConstruct,G=c.events.length,T=Array.from(l);return {from:G,restore:Q};function Q(){r=A,c.previous=U,c.currentConstruct=P,c.events.length=G,l=T,B();}}function B(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1);}}function Cf(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex,a;if(n===i)a=[e[n].slice(r,o)];else {if(a=e.slice(n,i),r>-1){let l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift();}o>0&&a.push(e[i].slice(0,o));}return a}function Ef(e,t){let n=-1,r=[],i;for(;++n<e.length;){let o=e[n],a;if(typeof o=="string")a=o;else switch(o){case  -5:{a="\r";break}case  -4:{a=`
`;break}case  -3:{a=`\r
`;break}case  -2:{a=t?" ":"	";break}case  -1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o);}i=o===-2,r.push(a);}return r.join("")}function ri(e){let r={constructs:In([ni,...(e||{}).extensions||[]]),content:i(nl),defined:[],document:i(il),flow:i(sl),lazy:{},string:i(cl),text:i(pl)};return r;function i(o){return a;function a(l){return hl(r,o,l)}}}function ii(e){for(;!Nn(e););return e}var dl=/[\0\t\n\r]/g;function oi(){let e=1,t="",n=true,r;return i;function i(o,a,l){let s=[],u,c,f,p,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),f=0,t="",n&&(o.charCodeAt(0)===65279&&f++,n=void 0);f<o.length;){if(dl.lastIndex=f,u=dl.exec(o),p=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(p),!u){t=o.slice(f);break}if(m===10&&f===p&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),f<p&&(s.push(o.slice(f,p)),e+=p-f),m){case 0:{s.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,s.push(-2);e++<c;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=true,e=1;}f=p+1;}return l&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var If=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function gl(e){return e.replace(If,Af)}function Af(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let i=n.charCodeAt(1),o=i===120||i===88;return An(n.slice(o?2:1),o?16:10)}return Ct(n)||e}var xl={}.hasOwnProperty;function ai(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),Tf(n)(ii(ri(n).document().write(oi()(e,t,true))))}function Tf(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Y),autolinkProtocol:j,autolinkEmail:j,atxHeading:o(on),blockQuote:o(ze),characterEscape:j,characterReference:j,codeFenced:o(je),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(je,a),codeText:o(Ke,a),codeTextData:j,data:j,codeFlowValue:j,definition:o(Dt),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(rr),hardBreakEscape:o(Nt),hardBreakTrailing:o(Nt),htmlFlow:o(ot,a),htmlFlowData:j,htmlText:o(ot,a),htmlTextData:j,image:o(kt),label:a,link:o(Y),listItem:o(fe),listItemValue:p,listOrdered:o(Z,f),listUnordered:o(Z),paragraph:o(J),reference:g,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(on),strong:o(Se),thematicBreak:o(at)},exit:{atxHeading:s(),atxHeadingSequence:D,autolink:s(),autolinkEmail:it,autolinkProtocol:le,blockQuote:s(),characterEscapeValue:b,characterReferenceMarkerHexadecimal:Pe,characterReferenceMarkerNumeric:Pe,characterReferenceValue:ye,characterReference:Xe,codeFenced:s(v),codeFencedFence:x,codeFencedFenceInfo:m,codeFencedFenceMeta:h,codeFlowValue:b,codeIndented:s(y),codeText:s(P),codeTextData:b,data:b,definition:s(),definitionDestinationString:N,definitionLabelString:z,definitionTitleString:S,emphasis:s(),hardBreakEscape:s(B),hardBreakTrailing:s(B),htmlFlow:s(A),htmlFlowData:b,htmlText:s(U),htmlTextData:b,image:s(T),label:be,labelText:Q,lineEnding:X,link:s(G),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:pe,resourceDestinationString:d,resourceTitleString:ce,resource:ge,setextHeading:s(W),setextHeadingLineSequence:$,setextHeadingText:_,strong:s(),thematicBreak:s()}};bl(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(k){let E={type:"root",children:[]},F={stack:[E],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:c,data:n},H=[],q=-1;for(;++q<k.length;)if(k[q][1].type==="listOrdered"||k[q][1].type==="listUnordered")if(k[q][0]==="enter")H.push(q);else {let xe=H.pop();q=i(k,xe,q);}for(q=-1;++q<k.length;){let xe=t[k[q][0]];xl.call(xe,k[q][1].type)&&xe[k[q][1].type].call(Object.assign({sliceSerialize:k[q][2].sliceSerialize},F),k[q][1]);}if(F.tokenStack.length>0){let xe=F.tokenStack[F.tokenStack.length-1];(xe[1]||yl).call(F,void 0,xe[0]);}for(E.position={start:tt(k.length>0?k[0][1].start:{line:1,column:1,offset:0}),end:tt(k.length>0?k[k.length-2][1].end:{line:1,column:1,offset:0})},q=-1;++q<t.transforms.length;)E=t.transforms[q](E)||E;return E}function i(k,E,F){let H=E-1,q=-1,xe=false,He,Ie,te,Le;for(;++H<=F;){let se=k[H];switch(se[1].type){case "listUnordered":case "listOrdered":case "blockQuote":{se[0]==="enter"?q++:q--,Le=void 0;break}case "lineEndingBlank":{se[0]==="enter"&&(He&&!Le&&!q&&!te&&(te=H),Le=void 0);break}case "linePrefix":case "listItemValue":case "listItemMarker":case "listItemPrefix":case "listItemPrefixWhitespace":break;default:Le=void 0;}if(!q&&se[0]==="enter"&&se[1].type==="listItemPrefix"||q===-1&&se[0]==="exit"&&(se[1].type==="listUnordered"||se[1].type==="listOrdered")){if(He){let $e=H;for(Ie=void 0;$e--;){let Re=k[$e];if(Re[1].type==="lineEnding"||Re[1].type==="lineEndingBlank"){if(Re[0]==="exit")continue;Ie&&(k[Ie][1].type="lineEndingBlank",xe=true),Re[1].type="lineEnding",Ie=$e;}else if(!(Re[1].type==="linePrefix"||Re[1].type==="blockQuotePrefix"||Re[1].type==="blockQuotePrefixWhitespace"||Re[1].type==="blockQuoteMarker"||Re[1].type==="listItemIndent"))break}te&&(!Ie||te<Ie)&&(He._spread=true),He.end=Object.assign({},Ie?k[Ie][1].start:se[1].end),k.splice(Ie||H,0,["exit",He,se[2]]),H++,F++;}if(se[1].type==="listItemPrefix"){let $e={type:"listItem",_spread:false,start:Object.assign({},se[1].start),end:void 0};He=$e,k.splice(H,0,["enter",$e,se[2]]),H++,F++,te=void 0,Le=true;}}}return k[E][1]._spread=xe,F}function o(k,E){return F;function F(H){l.call(this,k(H),H),E&&E.call(this,H);}}function a(){this.stack.push({type:"fragment",children:[]});}function l(k,E,F){this.stack[this.stack.length-1].children.push(k),this.stack.push(k),this.tokenStack.push([E,F||void 0]),k.position={start:tt(E.start),end:void 0};}function s(k){return E;function E(F){k&&k.call(this,F),u.call(this,F);}}function u(k,E){let F=this.stack.pop(),H=this.tokenStack.pop();if(H)H[0].type!==k.type&&(E?E.call(this,k,H[0]):(H[1]||yl).call(this,k,H[0]));else throw new Error("Cannot close `"+k.type+"` ("+Qe({start:k.start,end:k.end})+"): it\u2019s not open");F.position.end=tt(k.end);}function c(){return pt(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=true;}function p(k){if(this.data.expectingFirstListItemValue){let E=this.stack[this.stack.length-2];E.start=Number.parseInt(this.sliceSerialize(k),10),this.data.expectingFirstListItemValue=void 0;}}function m(){let k=this.resume(),E=this.stack[this.stack.length-1];E.lang=k;}function h(){let k=this.resume(),E=this.stack[this.stack.length-1];E.meta=k;}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=true);}function v(){let k=this.resume(),E=this.stack[this.stack.length-1];E.value=k.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0;}function y(){let k=this.resume(),E=this.stack[this.stack.length-1];E.value=k.replace(/(\r?\n|\r)$/g,"");}function z(k){let E=this.resume(),F=this.stack[this.stack.length-1];F.label=E,F.identifier=ve(this.sliceSerialize(k)).toLowerCase();}function S(){let k=this.resume(),E=this.stack[this.stack.length-1];E.title=k;}function N(){let k=this.resume(),E=this.stack[this.stack.length-1];E.url=k;}function D(k){let E=this.stack[this.stack.length-1];if(!E.depth){let F=this.sliceSerialize(k).length;E.depth=F;}}function _(){this.data.setextHeadingSlurpLineEnding=true;}function $(k){let E=this.stack[this.stack.length-1];E.depth=this.sliceSerialize(k).codePointAt(0)===61?1:2;}function W(){this.data.setextHeadingSlurpLineEnding=void 0;}function j(k){let F=this.stack[this.stack.length-1].children,H=F[F.length-1];(!H||H.type!=="text")&&(H=me(),H.position={start:tt(k.start),end:void 0},F.push(H)),this.stack.push(H);}function b(k){let E=this.stack.pop();E.value+=this.sliceSerialize(k),E.position.end=tt(k.end);}function X(k){let E=this.stack[this.stack.length-1];if(this.data.atHardBreak){let F=E.children[E.children.length-1];F.position.end=tt(k.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(E.type)&&(j.call(this,k),b.call(this,k));}function B(){this.data.atHardBreak=true;}function A(){let k=this.resume(),E=this.stack[this.stack.length-1];E.value=k;}function U(){let k=this.resume(),E=this.stack[this.stack.length-1];E.value=k;}function P(){let k=this.resume(),E=this.stack[this.stack.length-1];E.value=k;}function G(){let k=this.stack[this.stack.length-1];if(this.data.inReference){let E=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=E,delete k.url,delete k.title;}else delete k.identifier,delete k.label;this.data.referenceType=void 0;}function T(){let k=this.stack[this.stack.length-1];if(this.data.inReference){let E=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=E,delete k.url,delete k.title;}else delete k.identifier,delete k.label;this.data.referenceType=void 0;}function Q(k){let E=this.sliceSerialize(k),F=this.stack[this.stack.length-2];F.label=gl(E),F.identifier=ve(E).toLowerCase();}function be(){let k=this.stack[this.stack.length-1],E=this.resume(),F=this.stack[this.stack.length-1];if(this.data.inReference=true,F.type==="link"){let H=k.children;F.children=H;}else F.alt=E;}function d(){let k=this.resume(),E=this.stack[this.stack.length-1];E.url=k;}function ce(){let k=this.resume(),E=this.stack[this.stack.length-1];E.title=k;}function ge(){this.data.inReference=void 0;}function g(){this.data.referenceType="collapsed";}function pe(k){let E=this.resume(),F=this.stack[this.stack.length-1];F.label=E,F.identifier=ve(this.sliceSerialize(k)).toLowerCase(),this.data.referenceType="full";}function Pe(k){this.data.characterReferenceType=k.type;}function ye(k){let E=this.sliceSerialize(k),F=this.data.characterReferenceType,H;F?(H=An(E,F==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):H=Ct(E);let q=this.stack[this.stack.length-1];q.value+=H;}function Xe(k){let E=this.stack.pop();E.position.end=tt(k.end);}function le(k){b.call(this,k);let E=this.stack[this.stack.length-1];E.url=this.sliceSerialize(k);}function it(k){b.call(this,k);let E=this.stack[this.stack.length-1];E.url="mailto:"+this.sliceSerialize(k);}function ze(){return {type:"blockquote",children:[]}}function je(){return {type:"code",lang:null,meta:null,value:""}}function Ke(){return {type:"inlineCode",value:""}}function Dt(){return {type:"definition",identifier:"",label:null,title:null,url:""}}function rr(){return {type:"emphasis",children:[]}}function on(){return {type:"heading",depth:0,children:[]}}function Nt(){return {type:"break"}}function ot(){return {type:"html",value:""}}function kt(){return {type:"image",title:null,url:"",alt:null}}function Y(){return {type:"link",title:null,url:"",children:[]}}function Z(k){return {type:"list",ordered:k.type==="listOrdered",start:null,spread:k._spread,children:[]}}function fe(k){return {type:"listItem",spread:k._spread,checked:null,children:[]}}function J(){return {type:"paragraph",children:[]}}function Se(){return {type:"strong",children:[]}}function me(){return {type:"text",value:""}}function at(){return {type:"thematicBreak"}}}function tt(e){return {line:e.line,column:e.column,offset:e.offset}}function bl(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?bl(e,r):Pf(e,r);}}function Pf(e,t){let n;for(n in t)if(xl.call(t,n))switch(n){case "canContainEols":{let r=t[n];r&&e[n].push(...r);break}case "transforms":{let r=t[n];r&&e[n].push(...r);break}case "enter":case "exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function yl(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Qe({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Qe({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Qe({start:t.start,end:t.end})+") is still open")}function Bn(e){let t=this;t.parser=n;function n(r){return ai(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function vl(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),true)};return e.patch(t,n),e.applyData(t,n)}function wl(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function kl(e,t){let n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function _l(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function zl(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Sl(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Te(r.toLowerCase()),o=e.footnoteOrder.indexOf(r),a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);let s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:true,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,s);let u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function Cl(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function El(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function jn(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return [{type:"text",value:"!["+t.alt+r}];let i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});let a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function Il(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return jn(e,t);let i={src:Te(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function Al(e,t){let n={src:Te(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Tl(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Pl(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return jn(e,t);let i={href:Te(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);let o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Ll(e,t){let n={href:Te(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Rl(e,t,n){let r=e.all(t),i=n?Lf(n):Dl(t),o={},a=[];if(typeof t.checked=="boolean"){let c=r[0],f;c&&c.type==="element"&&c.tagName==="p"?f=c:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:true},children:[]}),o.className=["task-list-item"];}let l=-1;for(;++l<r.length;){let c=r[l];(i||l!==0||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!i?a.push(...c.children):a.push(c);}let s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&a.push({type:"text",value:`
`});let u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function Lf(e){let t=false;if(e.type==="list"){t=e.spread||false;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Dl(n[r]);}return t}function Dl(e){let t=e.spread;return t??e.children.length>1}function Nl(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){let a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,true)};return e.patch(t,o),e.applyData(t,o)}function Ml(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Fl(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Ol(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ul(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],true)};e.patch(t.children[0],a),i.push(a);}if(n.length>0){let a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,true)},l=St(t.children[1]),s=Cn(t.children[t.children.length-1]);l&&s&&(a.position={start:l,end:s}),i.push(a);}let o={type:"element",tagName:"table",properties:{},children:e.wrap(i,true)};return e.patch(t,o),e.applyData(t,o)}function Bl(e,t,n){let r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length,s=-1,u=[];for(;++s<l;){let f=t.children[s],p={},m=a?a[s]:void 0;m&&(p.align=m);let h={type:"element",tagName:o,properties:p,children:[]};f&&(h.children=e.all(f),e.patch(f,h),h=e.applyData(f,h)),u.push(h);}let c={type:"element",tagName:"tr",properties:{},children:e.wrap(u,true)};return e.patch(t,c),e.applyData(t,c)}function jl(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function $l(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,o=[];for(;r;)o.push(Hl(t.slice(i,r.index),i>0,true),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Hl(t.slice(i),i>0,false)),o.join("")}function Hl(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===9||o===32;)r++,o=e.codePointAt(r);}if(n){let o=e.codePointAt(i-1);for(;o===9||o===32;)i--,o=e.codePointAt(i-1);}return i>r?e.slice(r,i):""}function Vl(e,t){let n={type:"text",value:$l(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Wl(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var ql={blockquote:vl,break:wl,code:kl,delete:_l,emphasis:zl,footnoteReference:Sl,heading:Cl,html:El,imageReference:Il,image:Al,inlineCode:Tl,linkReference:Pl,link:Ll,listItem:Rl,list:Nl,paragraph:Ml,root:Fl,strong:Ol,table:Ul,tableCell:jl,tableRow:Bl,text:Vl,thematicBreak:Wl,toml:Hn,yaml:Hn,definition:Hn,footnoteDefinition:Hn};function Hn(){}var{defineProperty:Mf}=Object,Ql=typeof self=="object"?self:globalThis,Yl=(e,t)=>{switch(e){case "Function":case "SharedWorker":case "Worker":case "eval":case "setInterval":case "setTimeout":throw new TypeError("unable to deserialize "+e)}return new Ql[e](t)},Ff=(e,t)=>{let n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);let[o,a]=t[i];switch(o){case 0:case  -1:return n(a,i);case 1:{let l=n([],i);for(let s of a)l.push(r(s));return l}case 2:{let l=n({},i);for(let[s,u]of a){let c=r(s),f=r(u);c==="__proto__"?Mf(l,c,{value:f,configurable:true,enumerable:true,writable:true}):l[c]=f;}return l}case 3:return n(new Date(a),i);case 4:{let{source:l,flags:s}=a;return n(new RegExp(l,s),i)}case 5:{let l=n(new Map,i);for(let[s,u]of a)l.set(r(s),r(u));return l}case 6:{let l=n(new Set,i);for(let s of a)l.add(r(s));return l}case 7:{let{name:l,message:s}=a;return n(typeof Ql[l]=="function"?Yl(l,s):new Error(s),i)}case 8:return n(BigInt(a),i);case "BigInt":return n(Object(BigInt(a)),i);case "ArrayBuffer":return n(new Uint8Array(a).buffer,a);case "DataView":{let{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}case "-0":return  -0}return n(Yl(o,a),i)};return r},ui=e=>Ff(new Map,e)(0);var yt="",{toString:Of}={},{keys:Uf,is:Bf}=Object,Qt=e=>{let t=typeof e;if(t!=="object"||!e)return [0,t];let n=Of.call(e).slice(8,-1);switch(n){case "Array":return [1,yt];case "Object":return [2,yt];case "Date":return [3,yt];case "RegExp":return [4,yt];case "Map":return [5,yt];case "Set":return [6,yt];case "DataView":return [1,n]}return n.includes("Array")?[1,n]:e instanceof Error?[7,e.name||"Error"]:[2,n]},Vn=([e,t])=>e===0&&(t==="function"||t==="symbol"),jf=(e,t,n,r)=>{let i=(a,l)=>{let s=r.push(a)-1;return n.set(l,s),s},o=a=>{if(n.has(a))return n.get(a);let[l,s]=Qt(a);switch(l){case 0:{let c=a;switch(s){case "bigint":l=8,c=a.toString();break;case "number":if(!a&&Bf(a,-0))return r.push(["-0"])-1;break;case "function":case "symbol":if(e)throw new TypeError("unable to serialize "+s);c=null;break;case "undefined":return i([-1],a)}return i([l,c],a)}case 1:{if(s){let p=a;return s==="DataView"?p=new Uint8Array(a.buffer):s==="ArrayBuffer"&&(p=new Uint8Array(a)),i([s,[...p]],a)}let c=[],f=i([l,c],a);for(let p of a)c.push(o(p));return f}case 2:{if(s)switch(s){case "BigInt":return i([s,a.toString()],a);case "Boolean":case "Number":case "String":return i([s,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());let c=[],f=i([l,c],a);for(let p of Uf(a))(e||!Vn(Qt(a[p])))&&c.push([o(p),o(a[p])]);return f}case 3:return i([l,isNaN(a.getTime())?yt:a.toISOString()],a);case 4:{let{source:c,flags:f}=a;return i([l,{source:c,flags:f}],a)}case 5:{let c=[],f=i([l,c],a);for(let[p,m]of a)(e||!(Vn(Qt(p))||Vn(Qt(m))))&&c.push([o(p),o(m)]);return f}case 6:{let c=[],f=i([l,c],a);for(let p of a)(e||!Vn(Qt(p)))&&c.push(o(p));return f}}let{message:u}=a;return i([l,{name:s,message:u}],a)};return o},ci=(e,{json:t,lossy:n}={})=>{let r=[];return jf(!(t||n),!!t,new Map,r)(e),r};var Et=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?ui(ci(e,t)):structuredClone(e):(e,t)=>ui(ci(e,t));function Hf(e,t){let n=[{type:"text",value:"\u21A9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function $f(e,t){return "Back to reference "+(e+1)+(t>1?"-"+t:"")}function Zl(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Hf,r=e.options.footnoteBackLabel||$f,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[],s=-1;for(;++s<e.footnoteOrder.length;){let u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;let c=e.all(u),f=String(u.identifier).toUpperCase(),p=Te(f.toLowerCase()),m=0,h=[],x=e.footnoteCounts.get(f);for(;x!==void 0&&++m<=x;){h.length>0&&h.push({type:"text",value:" "});let z=typeof n=="string"?n:n(s,m);typeof z=="string"&&(z={type:"text",value:z}),h.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,m),className:["data-footnote-backref"]},children:Array.isArray(z)?z:[z]});}let v=c[c.length-1];if(v&&v.type==="element"&&v.tagName==="p"){let z=v.children[v.children.length-1];z&&z.type==="text"?z.value+=" ":v.children.push({type:"text",value:" "}),v.children.push(...h);}else c.push(...h);let y={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(c,true)};e.patch(u,y),l.push(y);}if(l.length!==0)return {type:"element",tagName:"section",properties:{dataFootnotes:true,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Et(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,true)},{type:"text",value:`
`}]}}var nt=(function(e){if(e==null)return Yf;if(typeof e=="function")return Wn(e);if(typeof e=="object")return Array.isArray(e)?Vf(e):Wf(e);if(typeof e=="string")return qf(e);throw new Error("Expected function, string, or object as test")});function Vf(e){let t=[],n=-1;for(;++n<e.length;)t[n]=nt(e[n]);return Wn(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return  true;return  false}}function Wf(e){let t=e;return Wn(n);function n(r){let i=r,o;for(o in e)if(i[o]!==t[o])return  false;return  true}}function qf(e){return Wn(t);function t(n){return n&&n.type===e}}function Wn(e){return t;function t(n,r,i){return !!(Gf(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function Yf(){return  true}function Gf(e){return e!==null&&typeof e=="object"&&"type"in e}var es=[],qn=true,xt=false,Yn="skip";function Zt(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;let o=nt(i),a=r?-1:1;l(e,void 0,[])();function l(s,u,c){let f=s&&typeof s=="object"?s:{};if(typeof f.type=="string"){let m=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(s.type+(m?"<"+m+">":""))+")"});}return p;function p(){let m=es,h,x,v;if((!t||o(s,u,c[c.length-1]||void 0))&&(m=Xf(n(s,c)),m[0]===xt))return m;if("children"in s&&s.children){let y=s;if(y.children&&m[0]!==Yn)for(x=(r?y.children.length:-1)+a,v=c.concat(y);x>-1&&x<y.children.length;){let z=y.children[x];if(h=l(z,x,v)(),h[0]===xt)return h;x=typeof h[1]=="number"?h[1]:x+a;}}return m}}}function Xf(e){return Array.isArray(e)?e:typeof e=="number"?[qn,e]:e==null?es:[e]}function bt(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),Zt(e,o,l,i);function l(s,u){let c=u[u.length-1],f=c?c.children.indexOf(s):void 0;return a(s,f,c)}}var pi={}.hasOwnProperty,Kf={};function ns(e,t){let n=t||Kf,r=new Map,i=new Map,o=new Map,a={...ql,...n.handlers},l={all:u,applyData:Qf,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:s,options:n,patch:Jf,wrap:em};return bt(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){let f=c.type==="definition"?r:i,p=String(c.identifier).toUpperCase();f.has(p)||f.set(p,c);}}),l;function s(c,f){let p=c.type,m=l.handlers[p];if(pi.call(l.handlers,p)&&m)return m(l,c,f);if(l.options.passThrough&&l.options.passThrough.includes(p)){if("children"in c){let{children:x,...v}=c,y=Et(v);return y.children=l.all(c),y}return Et(c)}return (l.options.unknownHandler||Zf)(l,c,f)}function u(c){let f=[];if("children"in c){let p=c.children,m=-1;for(;++m<p.length;){let h=l.one(p[m],c);if(h){if(m&&p[m-1].type==="break"&&(!Array.isArray(h)&&h.type==="text"&&(h.value=ts(h.value)),!Array.isArray(h)&&h.type==="element")){let x=h.children[0];x&&x.type==="text"&&(x.value=ts(x.value));}Array.isArray(h)?f.push(...h):f.push(h);}}}return f}}function Jf(e,t){e.position&&(t.position=Or(e));}function Qf(e,t){let n=t;if(e&&e.data){let r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else {let a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a};}n.type==="element"&&o&&Object.assign(n.properties,Et(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i);}return n}function Zf(e,t){let n=t.data||{},r="value"in t&&!(pi.call(n,"hProperties")||pi.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function em(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function ts(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Gn(e,t){let n=ns(e,t),r=n.one(e,void 0),i=Zl(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&(o.children.push({type:"text",value:`
`},i)),o}function Xn(e,t){return e&&"run"in e?async function(n,r){let i=Gn(n,{file:r,...t});await e.run(i,r);}:function(n,r){return Gn(n,{file:r,...e||t})}}function fi(e){if(e)throw e}var Qn=co(ps());function en(e){if(typeof e!="object"||e===null)return  false;let t=Object.getPrototypeOf(e);return (t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function mi(){let e=[],t={run:n,use:r};return t;function n(...i){let o=-1,a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(s,...u){let c=e[++o],f=-1;if(s){a(s);return}for(;++f<i.length;)(u[f]===null||u[f]===void 0)&&(u[f]=i[f]);i=u,c?fs(c,l)(...u):a(null,...u);}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function fs(e,t){let n;return r;function r(...a){let l=e.length>a.length,s;l&&a.push(i);try{s=e.apply(this,a);}catch(u){let c=u;if(l&&n)throw c;return i(c)}l||(s&&s.then&&typeof s.then=="function"?s.then(o,i):s instanceof Error?i(s):o(s));}function i(a,...l){n||(n=true,t(a,...l));}function o(a){i(null,a);}}var Ne={basename:tm,dirname:nm,extname:rm,join:im,sep:"/"};function tm(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');tn(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=true,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return "";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=true,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function nm(e){if(tn(e),e.length===0)return ".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=true);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function rm(e){tn(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){let l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=true,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1);}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function im(...e){let t=-1,n;for(;++t<e.length;)tn(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":om(n)}function om(e){tn(e);let t=e.codePointAt(0)===47,n=am(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function am(e,t){let n="",r=0,i=-1,o=0,a=-1,l,s;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else {if(l===47)break;l=47;}if(l===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2);}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0;}else l===46&&o>-1?o++:o=-1;}return n}function tn(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}var ms={cwd:lm};function lm(){return "/"}function It(e){return !!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function hs(e){if(typeof e=="string")e=new URL(e);else if(!It(e)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return sm(e)}function sm(e){if(e.hostname!==""){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}var hi=["history","path","basename","stem","extname","dirname"],vt=class{constructor(t){let n;t?It(t)?n={path:t}:typeof t=="string"||um(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":ms.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<hi.length;){let o=hi[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o]);}let i;for(i in n)hi.includes(i)||(this[i]=n[i]);}get basename(){return typeof this.path=="string"?Ne.basename(this.path):void 0}set basename(t){gi(t,"basename"),di(t,"basename"),this.path=Ne.join(this.dirname||"",t);}get dirname(){return typeof this.path=="string"?Ne.dirname(this.path):void 0}set dirname(t){ds(this.basename,"dirname"),this.path=Ne.join(t||"",this.basename);}get extname(){return typeof this.path=="string"?Ne.extname(this.path):void 0}set extname(t){if(di(t,"extname"),ds(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ne.join(this.dirname,this.stem+(t||""));}get path(){return this.history[this.history.length-1]}set path(t){It(t)&&(t=hs(t)),gi(t,"path"),this.path!==t&&this.history.push(t);}get stem(){return typeof this.path=="string"?Ne.basename(this.path,this.extname):void 0}set stem(t){gi(t,"stem"),di(t,"stem"),this.path=Ne.join(this.dirname||"",t+(this.extname||""));}fail(t,n,r){let i=this.message(t,n,r);throw i.fatal=true,i}info(t,n,r){let i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){let i=new oe(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=false,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function di(e,t){if(e&&e.includes(Ne.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ne.sep+"`")}function gi(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function ds(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function um(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var gs=(function(e){let r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o});var cm={}.hasOwnProperty,vi=class e extends gs{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=mi();}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r);}return t.data((0, Qn.default)(true,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(bi("data",this.frozen),this.namespace[t]=n,this):cm.call(this.namespace,t)&&this.namespace[t]||void 0:t?(bi("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===false)continue;r[0]===true&&(r[0]=void 0);let i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i);}return this.frozen=true,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();let n=Jn(t),r=this.parser||this.Parser;return yi("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),yi("process",this.parser||this.Parser),xi("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){let l=Jn(t),s=r.parse(l);r.run(s,l,function(c,f,p){if(c||!f||!p)return u(c);let m=f,h=r.stringify(m,p);fm(h)?p.value=h:p.result=h,u(c,p);});function u(c,f){c||!f?a(c):o?o(f):n(void 0,f);}}}processSync(t){let n=false,r;return this.freeze(),yi("processSync",this.parser||this.Parser),xi("processSync",this.compiler||this.Compiler),this.process(t,i),xs("processSync","process",n),r;function i(o,a){n=true,fi(o),r=a;}}run(t,n,r){ys(t),this.freeze();let i=this.transformers;return !r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){let s=Jn(n);i.run(t,s,u);function u(c,f,p){let m=f||t;c?l(c):a?a(m):r(void 0,m,p);}}}runSync(t,n){let r=false,i;return this.run(t,n,o),xs("runSync","run",r),i;function o(a,l){fi(a),i=l,r=true;}}stringify(t,n){this.freeze();let r=Jn(n),i=this.compiler||this.Compiler;return xi("stringify",i),ys(t),i(t,r)}use(t,...n){let r=this.attachers,i=this.namespace;if(bi("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){let[c,...f]=u;s(c,f);}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=(0, Qn.default)(true,i.settings,u.settings));}function l(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){let f=u[c];o(f);}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,c){let f=-1,p=-1;for(;++f<r.length;)if(r[f][0]===u){p=f;break}if(p===-1)r.push([u,...c]);else if(c.length>0){let[m,...h]=c,x=r[p][1];en(x)&&en(m)&&(m=(0, Qn.default)(true,x,m)),r[p]=[u,m,...h];}}}},wi=new vi().freeze();function yi(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function xi(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function bi(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ys(e){if(!en(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function xs(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Jn(e){return pm(e)?e:new vt(e)}function pm(e){return !!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function fm(e){return typeof e=="string"||mm(e)}function mm(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var hm="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",bs=[],vs={allowDangerousHtml:true},dm=/^(https?|ircs?|mailto|xmpp)$/i,gm=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function ki(e){let t=ym(e),n=xm(e);return bm(t.runSync(t.parse(n),n),e)}function ym(e){let t=e.rehypePlugins||bs,n=e.remarkPlugins||bs,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...vs}:vs;return wi().use(Bn).use(n).use(Xn,r).use(t)}function xm(e){let t=e.children||"",n=new vt;return typeof t=="string"?n.value=t:(void 0),n}function bm(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,s=t.urlTransform||ws;for(let c of gm)Object.hasOwn(t,c.from)&&(""+c.from+(c.to?"use `"+c.to+"` instead":"remove it")+hm+c.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),bt(e,u),jr(e,{Fragment:Ce,components:i,ignoreInvalidStyle:true,jsx:w,jsxs:w,passKeys:true,passNode:true});function u(c,f,p){if(c.type==="raw"&&p&&typeof f=="number")return a?p.children.splice(f,1):p.children[f]={type:"text",value:c.value},f;if(c.type==="element"){let m;for(m in qt)if(Object.hasOwn(qt,m)&&Object.hasOwn(c.properties,m)){let h=c.properties[m],x=qt[m];(x===null||x.includes(c.tagName))&&(c.properties[m]=s(String(h||""),m,c));}}if(c.type==="element"){let m=n?!n.includes(c.tagName):o?o.includes(c.tagName):false;if(!m&&r&&typeof f=="number"&&(m=!r(c,f,p)),m&&p&&typeof f=="number")return l&&c.children?p.children.splice(f,1,...c.children):p.children.splice(f,1),f}}}function ws(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||dm.test(e.slice(0,t))?e:""}function _i(e,t){let n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function zi(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Si(e,t,n){let i=nt((n||{}).ignore||[]),o=vm(t),a=-1;for(;++a<o.length;)Zt(e,"text",l);function l(u,c){let f=-1,p;for(;++f<c.length;){let m=c[f],h=p?p.children:void 0;if(i(m,h?h.indexOf(m):void 0,p))return;p=m;}if(p)return s(u,c)}function s(u,c){let f=c[c.length-1],p=o[a][0],m=o[a][1],h=0,v=f.children.indexOf(u),y=false,z=[];p.lastIndex=0;let S=p.exec(u.value);for(;S;){let N=S.index,D={index:S.index,input:S.input,stack:[...c,u]},_=m(...S,D);if(typeof _=="string"&&(_=_.length>0?{type:"text",value:_}:void 0),_===false?p.lastIndex=N+1:(h!==N&&z.push({type:"text",value:u.value.slice(h,N)}),Array.isArray(_)?z.push(..._):_&&z.push(_),h=N+S[0].length,y=true),!p.global)break;S=p.exec(u.value);}return y?(h<u.value.length&&z.push({type:"text",value:u.value.slice(h)}),f.children.splice(v,1,...z)):z=[u],v+z.length}}function vm(e){let t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let i=n[r];t.push([wm(i[0]),km(i[1])]);}return t}function wm(e){return typeof e=="string"?new RegExp(zi(e),"g"):e}function km(e){return typeof e=="function"?e:function(){return e}}var Ci="phrasing",Ei=["autolink","link","image","label"];function Ai(){return {transforms:[Im],enter:{literalAutolink:_m,literalAutolinkEmail:Ii,literalAutolinkHttp:Ii,literalAutolinkWww:Ii},exit:{literalAutolink:Em,literalAutolinkEmail:Cm,literalAutolinkHttp:zm,literalAutolinkWww:Sm}}}function Ti(){return {unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Ci,notInConstruct:Ei},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Ci,notInConstruct:Ei},{character:":",before:"[ps]",after:"\\/",inConstruct:Ci,notInConstruct:Ei}]}}function _m(e){this.enter({type:"link",title:null,url:"",children:[]},e);}function Ii(e){this.config.enter.autolinkProtocol.call(this,e);}function zm(e){this.config.exit.autolinkProtocol.call(this,e);}function Sm(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e);}function Cm(e){this.config.exit.autolinkEmail.call(this,e);}function Em(e){this.exit(e);}function Im(e){Si(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Am],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Tm]],{ignore:["link","linkReference"]});}function Am(e,t,n,r,i){let o="";if(!ks(i)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!Pm(n)))return  false;let a=Lm(n+r);if(!a[0])return  false;let l={type:"link",title:null,url:o+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[l,{type:"text",value:a[1]}]:l}function Tm(e,t,n,r){return !ks(r,true)||/[-\d_]$/.test(n)?false:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Pm(e){let t=e.split(".");return !(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Lm(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return [e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),i=_i(e,"("),o=_i(e,")");for(;r!==-1&&i>o;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),o++;return [e,n]}function ks(e,t){let n=e.input.charCodeAt(e.index-1);return (e.index===0||Oe(n)||mt(n))&&(!t||n!==47)}_s.peek=jm;function Rm(){this.buffer();}function Dm(e){this.enter({type:"footnoteReference",identifier:"",label:""},e);}function Nm(){this.buffer();}function Mm(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e);}function Fm(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ve(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function Om(e){this.exit(e);}function Um(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ve(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function Bm(e){this.exit(e);}function jm(){return "["}function _s(e,t,n,r){let i=n.createTracker(r),o=i.move("[^"),a=n.enter("footnoteReference"),l=n.enter("reference");return o+=i.move(n.safe(n.associationId(e),{after:"]",before:o})),l(),a(),o+=i.move("]"),o}function Pi(){return {enter:{gfmFootnoteCallString:Rm,gfmFootnoteCall:Dm,gfmFootnoteDefinitionLabelString:Nm,gfmFootnoteDefinition:Mm},exit:{gfmFootnoteCallString:Fm,gfmFootnoteCall:Om,gfmFootnoteDefinitionLabelString:Um,gfmFootnoteDefinition:Bm}}}function Li(e){let t=false;return e&&e.firstLineBlank&&(t=true),{handlers:{footnoteDefinition:n,footnoteReference:_s},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,o,a){let l=o.createTracker(a),s=l.move("[^"),u=o.enter("footnoteDefinition"),c=o.enter("label");return s+=l.move(o.safe(o.associationId(r),{before:s,after:"]"})),c(),s+=l.move("]:"),r.children&&r.children.length>0&&(l.shift(4),s+=l.move((t?`
`:" ")+o.indentLines(o.containerFlow(r,l.current()),t?zs:Hm))),u(),s}}function Hm(e,t,n){return t===0?e:zs(e,t,n)}function zs(e,t,n){return (n?"":"    ")+e}var $m=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Ss.peek=qm;function Ri(){return {canContainEols:["delete"],enter:{strikethrough:Vm},exit:{strikethrough:Wm}}}function Di(){return {unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:$m}],handlers:{delete:Ss}}}function Vm(e){this.enter({type:"delete",children:[]},e);}function Wm(e){this.exit(e);}function Ss(e,t,n,r){let i=n.createTracker(r),o=n.enter("strikethrough"),a=i.move("~~");return a+=n.containerPhrasing(e,{...i.current(),before:a,after:"~"}),a+=i.move("~~"),o(),a}function qm(){return "~"}function Ym(e){return e.length}function Es(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||Ym,o=[],a=[],l=[],s=[],u=0,c=-1;for(;++c<e.length;){let x=[],v=[],y=-1;for(e[c].length>u&&(u=e[c].length);++y<e[c].length;){let z=Gm(e[c][y]);if(n.alignDelimiters!==false){let S=i(z);v[y]=S,(s[y]===void 0||S>s[y])&&(s[y]=S);}x.push(z);}a[c]=x,l[c]=v;}let f=-1;if(typeof r=="object"&&"length"in r)for(;++f<u;)o[f]=Cs(r[f]);else {let x=Cs(r);for(;++f<u;)o[f]=x;}f=-1;let p=[],m=[];for(;++f<u;){let x=o[f],v="",y="";x===99?(v=":",y=":"):x===108?v=":":x===114&&(y=":");let z=n.alignDelimiters===false?1:Math.max(1,s[f]-v.length-y.length),S=v+"-".repeat(z)+y;n.alignDelimiters!==false&&(z=v.length+z+y.length,z>s[f]&&(s[f]=z),m[f]=z),p[f]=S;}a.splice(1,0,p),l.splice(1,0,m),c=-1;let h=[];for(;++c<a.length;){let x=a[c],v=l[c];f=-1;let y=[];for(;++f<u;){let z=x[f]||"",S="",N="";if(n.alignDelimiters!==false){let D=s[f]-(v[f]||0),_=o[f];_===114?S=" ".repeat(D):_===99?D%2?(S=" ".repeat(D/2+.5),N=" ".repeat(D/2-.5)):(S=" ".repeat(D/2),N=S):N=" ".repeat(D);}n.delimiterStart!==false&&!f&&y.push("|"),n.padding!==false&&!(n.alignDelimiters===false&&z==="")&&(n.delimiterStart!==false||f)&&y.push(" "),n.alignDelimiters!==false&&y.push(S),y.push(z),n.alignDelimiters!==false&&y.push(N),n.padding!==false&&y.push(" "),(n.delimiterEnd!==false||f!==u-1)&&y.push("|");}h.push(n.delimiterEnd===false?y.join("").replace(/ +$/,""):y.join(""));}return h.join(`
`)}function Gm(e){return e==null?"":String(e)}function Cs(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Is(e,t,n,r){let i=n.enter("blockquote"),o=n.createTracker(r);o.move("> "),o.shift(2);let a=n.indentLines(n.containerFlow(e,o.current()),Xm);return i(),a}function Xm(e,t,n){return ">"+(n?"":" ")+e}function Ts(e,t){return As(e,t.inConstruct,true)&&!As(e,t.notInConstruct,false)}function As(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return  true;return  false}function Ni(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Ts(n.stack,n.unsafe[i]))return /[ \t]/.test(r.before)?"":" ";return `\\
`}function Ps(e,t){let n=String(e),r=n.indexOf(t),i=r,o=0,a=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>a&&(a=o):o=1,i=r+t.length,r=n.indexOf(t,i);return a}function Ls(e,t){return !!(t.options.fences===false&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Rs(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Ds(e,t,n,r){let i=Rs(n),o=e.value||"",a=i==="`"?"GraveAccent":"Tilde";if(Ls(e,n)){let f=n.enter("codeIndented"),p=n.indentLines(o,Km);return f(),p}let l=n.createTracker(r),s=i.repeat(Math.max(Ps(o,i)+1,3)),u=n.enter("codeFenced"),c=l.move(s);if(e.lang){let f=n.enter(`codeFencedLang${a}`);c+=l.move(n.safe(e.lang,{before:c,after:" ",encode:["`"],...l.current()})),f();}if(e.lang&&e.meta){let f=n.enter(`codeFencedMeta${a}`);c+=l.move(" "),c+=l.move(n.safe(e.meta,{before:c,after:`
`,encode:["`"],...l.current()})),f();}return c+=l.move(`
`),o&&(c+=l.move(o+`
`)),c+=l.move(s),u(),c}function Km(e,t,n){return (n?"":"    ")+e}function At(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Ns(e,t,n,r){let i=At(n),o=i==='"'?"Quote":"Apostrophe",a=n.enter("definition"),l=n.enter("label"),s=n.createTracker(r),u=s.move("[");return u+=s.move(n.safe(n.associationId(e),{before:u,after:"]",...s.current()})),u+=s.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...s.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),a(),u}function Ms(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function rt(e){return "&#x"+e.toString(16).toUpperCase()+";"}function Tt(e,t,n){let r=Ye(e),i=Ye(t);return r===void 0?i===void 0?n==="_"?{inside:true,outside:true}:{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:true}:r===1?i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:false}:i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:false}:{inside:false,outside:false}}Mi.peek=Jm;function Mi(e,t,n,r){let i=Ms(n),o=n.enter("emphasis"),a=n.createTracker(r),l=a.move(i),s=a.move(n.containerPhrasing(e,{after:i,before:l,...a.current()})),u=s.charCodeAt(0),c=Tt(r.before.charCodeAt(r.before.length-1),u,i);c.inside&&(s=rt(u)+s.slice(1));let f=s.charCodeAt(s.length-1),p=Tt(r.after.charCodeAt(0),f,i);p.inside&&(s=s.slice(0,-1)+rt(f));let m=a.move(i);return o(),n.attentionEncodeSurroundingInfo={after:p.outside,before:c.outside},l+s+m}function Jm(e,t,n){return n.options.emphasis||"*"}function Fs(e,t){let n=false;return bt(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=true,xt}),!!((!e.depth||e.depth<3)&&pt(e)&&(t.options.setext||n))}function Os(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(r);if(Fs(e,n)){let c=n.enter("headingSetext"),f=n.enter("phrasing"),p=n.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return f(),c(),p+`
`+(i===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}let a="#".repeat(i),l=n.enter("headingAtx"),s=n.enter("phrasing");o.move(a+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return /^[\t ]/.test(u)&&(u=rt(u.charCodeAt(0))+u.slice(1)),u=u?a+" "+u:a,n.options.closeAtx&&(u+=" "+a),s(),l(),u}Fi.peek=Qm;function Fi(e){return e.value||""}function Qm(){return "<"}Oi.peek=Zm;function Oi(e,t,n,r){let i=At(n),o=i==='"'?"Quote":"Apostrophe",a=n.enter("image"),l=n.enter("label"),s=n.createTracker(r),u=s.move("![");return u+=s.move(n.safe(e.alt,{before:u,after:"]",...s.current()})),u+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),u+=s.move(")"),a(),u}function Zm(){return "!"}Ui.peek=eh;function Ui(e,t,n,r){let i=e.referenceType,o=n.enter("imageReference"),a=n.enter("label"),l=n.createTracker(r),s=l.move("!["),u=n.safe(e.alt,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),a();let c=n.stack;n.stack=[],a=n.enter("reference");let f=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return a(),n.stack=c,o(),i==="full"||!u||u!==f?s+=l.move(f+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function eh(){return "!"}Bi.peek=th;function Bi(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){let a=n.unsafe[o],l=n.compilePattern(a),s;if(a.atBreak)for(;s=l.exec(r);){let u=s.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(s.index+1);}}return i+r+i}function th(){return "`"}function ji(e,t){let n=pt(e);return !!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Hi.peek=nh;function Hi(e,t,n,r){let i=At(n),o=i==='"'?"Quote":"Apostrophe",a=n.createTracker(r),l,s;if(ji(e,n)){let c=n.stack;n.stack=[],l=n.enter("autolink");let f=a.move("<");return f+=a.move(n.containerPhrasing(e,{before:f,after:">",...a.current()})),f+=a.move(">"),l(),n.stack=c,f}l=n.enter("link"),s=n.enter("label");let u=a.move("[");return u+=a.move(n.containerPhrasing(e,{before:u,after:"](",...a.current()})),u+=a.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(s=n.enter("destinationRaw"),u+=a.move(n.safe(e.url,{before:u,after:e.title?" ":")",...a.current()}))),s(),e.title&&(s=n.enter(`title${o}`),u+=a.move(" "+i),u+=a.move(n.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),s()),u+=a.move(")"),l(),u}function nh(e,t,n){return ji(e,n)?"<":"["}$i.peek=rh;function $i(e,t,n,r){let i=e.referenceType,o=n.enter("linkReference"),a=n.enter("label"),l=n.createTracker(r),s=l.move("["),u=n.containerPhrasing(e,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),a();let c=n.stack;n.stack=[],a=n.enter("reference");let f=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return a(),n.stack=c,o(),i==="full"||!u||u!==f?s+=l.move(f+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function rh(){return "["}function Pt(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Us(e){let t=Pt(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Bs(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Zn(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function js(e,t,n,r){let i=n.enter("list"),o=n.bulletCurrent,a=e.ordered?Bs(n):Pt(n),l=e.ordered?a==="."?")":".":Us(n),s=t&&n.bulletLastUsed?a===n.bulletLastUsed:false;if(!e.ordered){let c=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&c&&(!c.children||!c.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=true),Zn(n)===a&&c){let f=-1;for(;++f<e.children.length;){let p=e.children[f];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){s=true;break}}}}s&&(a=l),n.bulletCurrent=a;let u=n.containerFlow(e,r);return n.bulletLastUsed=a,n.bulletCurrent=o,i(),u}function Hs(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function $s(e,t,n,r){let i=Hs(n),o=n.bulletCurrent||Pt(n);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===false?0:t.children.indexOf(e))+o);let a=o.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(a=Math.ceil(a/4)*4);let l=n.createTracker(r);l.move(o+" ".repeat(a-o.length)),l.shift(a);let s=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,l.current()),c);return s(),u;function c(f,p,m){return p?(m?"":" ".repeat(a))+f:(m?o:o+" ".repeat(a-o.length))+f}}function Vs(e,t,n,r){let i=n.enter("paragraph"),o=n.enter("phrasing"),a=n.containerPhrasing(e,r);return o(),i(),a}var Vi=nt(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Ws(e,t,n,r){return (e.children.some(function(a){return Vi(a)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function qs(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Wi.peek=ih;function Wi(e,t,n,r){let i=qs(n),o=n.enter("strong"),a=n.createTracker(r),l=a.move(i+i),s=a.move(n.containerPhrasing(e,{after:i,before:l,...a.current()})),u=s.charCodeAt(0),c=Tt(r.before.charCodeAt(r.before.length-1),u,i);c.inside&&(s=rt(u)+s.slice(1));let f=s.charCodeAt(s.length-1),p=Tt(r.after.charCodeAt(0),f,i);p.inside&&(s=s.slice(0,-1)+rt(f));let m=a.move(i+i);return o(),n.attentionEncodeSurroundingInfo={after:p.outside,before:c.outside},l+s+m}function ih(e,t,n){return n.options.strong||"*"}function Ys(e,t,n,r){return n.safe(e.value,r)}function Gs(e){let t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Xs(e,t,n){let r=(Zn(n)+(n.options.ruleSpaces?" ":"")).repeat(Gs(n));return n.options.ruleSpaces?r.slice(0,-1):r}var nn={blockquote:Is,break:Ni,code:Ds,definition:Ns,emphasis:Mi,hardBreak:Ni,heading:Os,html:Fi,image:Oi,imageReference:Ui,inlineCode:Bi,link:Hi,linkReference:$i,list:js,listItem:$s,paragraph:Vs,root:Ws,strong:Wi,text:Ys,thematicBreak:Xs};function Yi(){return {enter:{table:oh,tableData:Ks,tableHeader:Ks,tableRow:lh},exit:{codeText:sh,table:ah,tableData:qi,tableHeader:qi,tableRow:qi}}}function oh(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=true;}function ah(e){this.exit(e),this.data.inTable=void 0;}function lh(e){this.enter({type:"tableRow",children:[]},e);}function qi(e){this.exit(e);}function Ks(e){this.enter({type:"tableCell",children:[]},e);}function sh(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,uh));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e);}function uh(e,t){return t==="|"?t:e}function Gi(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return {unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:true,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:true,character:":",after:"-"},{atBreak:true,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:a,tableCell:s,tableRow:l}};function a(m,h,x,v){return u(c(m,x,v),m.align)}function l(m,h,x,v){let y=f(m,x,v),z=u([y]);return z.slice(0,z.indexOf(`
`))}function s(m,h,x,v){let y=x.enter("tableCell"),z=x.enter("phrasing"),S=x.containerPhrasing(m,{...v,before:o,after:o});return z(),y(),S}function u(m,h){return Es(m,{align:h,alignDelimiters:r,padding:n,stringLength:i})}function c(m,h,x){let v=m.children,y=-1,z=[],S=h.enter("table");for(;++y<v.length;)z[y]=f(v[y],h,x);return S(),z}function f(m,h,x){let v=m.children,y=-1,z=[],S=h.enter("tableRow");for(;++y<v.length;)z[y]=s(v[y],m,h,x);return S(),z}function p(m,h,x){let v=nn.inlineCode(m,h,x);return x.stack.includes("tableCell")&&(v=v.replace(/\|/g,"\\$&")),v}}function Xi(){return {exit:{taskListCheckValueChecked:Js,taskListCheckValueUnchecked:Js,paragraph:ch}}}function Ki(){return {unsafe:[{atBreak:true,character:"-",after:"[:|-]"}],handlers:{listItem:ph}}}function Js(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked";}function ch(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let i=t.children,o=-1,a;for(;++o<i.length;){let l=i[o];if(l.type==="paragraph"){a=l;break}}a===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)));}}this.exit(e);}function ph(e,t,n,r){let i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",l=n.createTracker(r);o&&l.move(a);let s=nn.listItem(e,t,n,{...r,...l.current()});return o&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),s;function u(c){return c+a}}function Ji(){return [Ai(),Pi(),Ri(),Yi(),Xi()]}function Qi(e){return {extensions:[Ti(),Li(e),Di(),Gi(e),Ki()]}}var fh={tokenize:yh,partial:true},Qs={tokenize:xh,partial:true},Zs={tokenize:bh,partial:true},eu={tokenize:vh,partial:true},mh={tokenize:wh,partial:true},tu={name:"wwwAutolink",tokenize:dh,previous:ru},nu={name:"protocolAutolink",tokenize:gh,previous:iu},Ge={name:"emailAutolink",tokenize:hh,previous:ou},Be={};function eo(){return {text:Be}}var wt=48;for(;wt<123;)Be[wt]=Ge,wt++,wt===58?wt=65:wt===91&&(wt=97);Be[43]=Ge;Be[45]=Ge;Be[46]=Ge;Be[95]=Ge;Be[72]=[Ge,nu];Be[104]=[Ge,nu];Be[87]=[Ge,tu];Be[119]=[Ge,tu];function hh(e,t,n){let r=this,i,o;return a;function a(f){return !Zi(f)||!ou.call(r,r.previous)||to(r.events)?n(f):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(f))}function l(f){return Zi(f)?(e.consume(f),l):f===64?(e.consume(f),s):n(f)}function s(f){return f===46?e.check(mh,c,u)(f):f===45||f===95||re(f)?(o=true,e.consume(f),s):c(f)}function u(f){return e.consume(f),i=true,s}function c(f){return o&&i&&he(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(f)):n(f)}}function dh(e,t,n){let r=this;return i;function i(a){return a!==87&&a!==119||!ru.call(r,r.previous)||to(r.events)?n(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(fh,e.attempt(Qs,e.attempt(Zs,o),n),n)(a))}function o(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(a)}}function gh(e,t,n){let r=this,i="",o=false;return a;function a(f){return (f===72||f===104)&&iu.call(r,r.previous)&&!to(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(f),e.consume(f),l):n(f)}function l(f){if(he(f)&&i.length<5)return i+=String.fromCodePoint(f),e.consume(f),l;if(f===58){let p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(f),s}return n(f)}function s(f){return f===47?(e.consume(f),o?u:(o=true,s)):n(f)}function u(f){return f===null||ft(f)||V(f)||Oe(f)||mt(f)?n(f):e.attempt(Qs,e.attempt(Zs,c),n)(f)}function c(f){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(f)}}function yh(e,t,n){let r=0;return i;function i(a){return (a===87||a===119)&&r<3?(r++,e.consume(a),i):a===46&&r===3?(e.consume(a),o):n(a)}function o(a){return a===null?n(a):t(a)}}function xh(e,t,n){let r,i,o;return a;function a(u){return u===46||u===95?e.check(eu,s,l)(u):u===null||V(u)||Oe(u)||u!==45&&mt(u)?s(u):(o=true,e.consume(u),a)}function l(u){return u===95?r=true:(i=r,r=void 0),e.consume(u),a}function s(u){return i||r||!o?n(u):t(u)}}function bh(e,t){let n=0,r=0;return i;function i(a){return a===40?(n++,e.consume(a),i):a===41&&r<n?o(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(eu,t,o)(a):a===null||V(a)||Oe(a)?t(a):(e.consume(a),i)}function o(a){return a===41&&r++,e.consume(a),i}}function vh(e,t,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),o):l===93?(e.consume(l),i):l===60||l===null||V(l)||Oe(l)?t(l):n(l)}function i(l){return l===null||l===40||l===91||V(l)||Oe(l)?t(l):r(l)}function o(l){return he(l)?a(l):n(l)}function a(l){return l===59?(e.consume(l),r):he(l)?(e.consume(l),a):n(l)}}function wh(e,t,n){return r;function r(o){return e.consume(o),i}function i(o){return re(o)?n(o):t(o)}}function ru(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||V(e)}function iu(e){return !he(e)}function ou(e){return !(e===47||Zi(e))}function Zi(e){return e===43||e===45||e===46||e===95||re(e)}function to(e){let t=e.length,n=false;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=true;break}if(r._gfmAutolinkLiteralWalkedInto){n=false;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=true),n}var kh={tokenize:Ah,partial:true};function no(){return {document:{91:{name:"gfmFootnoteDefinition",tokenize:Ch,continuation:{tokenize:Eh},exit:Ih}},text:{91:{name:"gfmFootnoteCall",tokenize:Sh},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:_h,resolveTo:zh}}}}function _h(e,t,n){let r=this,i=r.events.length,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a;for(;i--;){let s=r.events[i][1];if(s.type==="labelImage"){a=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return l;function l(s){if(!a||!a._balanced)return n(s);let u=ve(r.sliceSerialize({start:a.end,end:r.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function zh(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;let a={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],["enter",i,t],e[n+3],e[n+4],["enter",o,t],["exit",o,t],["enter",a,t],["enter",l,t],["exit",l,t],["exit",a,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(n,e.length-n+1,...s),e}function Sh(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o=0,a;return l;function l(f){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),s}function s(f){return f!==94?n(f):(e.enter("gfmFootnoteCallMarker"),e.consume(f),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(f){if(o>999||f===93&&!a||f===null||f===91||V(f))return n(f);if(f===93){e.exit("chunkString");let p=e.exit("gfmFootnoteCallString");return i.includes(ve(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(f)}return V(f)||(a=true),o++,e.consume(f),f===92?c:u}function c(f){return f===91||f===92||f===93?(e.consume(f),o++,u):u(f)}}function Ch(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o,a=0,l;return s;function s(h){return e.enter("gfmFootnoteDefinition")._container=true,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(h){return h===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",c):n(h)}function c(h){if(a>999||h===93&&!l||h===null||h===91||V(h))return n(h);if(h===93){e.exit("chunkString");let x=e.exit("gfmFootnoteDefinitionLabelString");return o=ve(r.sliceSerialize(x)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return V(h)||(l=true),a++,e.consume(h),h===92?f:c}function f(h){return h===91||h===92||h===93?(e.consume(h),a++,c):c(h)}function p(h){return h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),i.includes(o)||i.push(o),L(e,m,"gfmFootnoteDefinitionWhitespace")):n(h)}function m(h){return t(h)}}function Eh(e,t,n){return e.check(Ue,t,e.attempt(kh,t,n))}function Ih(e){e.exit("gfmFootnoteDefinition");}function Ah(e,t,n){let r=this;return L(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){let a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],true).length===4?t(o):n(o)}}function ro(e){let n=(e||{}).singleTilde,r={name:"strikethrough",tokenize:o,resolveAll:i};return n==null&&(n=true),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(a,l){let s=-1;for(;++s<a.length;)if(a[s][0]==="enter"&&a[s][1].type==="strikethroughSequenceTemporary"&&a[s][1]._close){let u=s;for(;u--;)if(a[u][0]==="exit"&&a[u][1].type==="strikethroughSequenceTemporary"&&a[u][1]._open&&a[s][1].end.offset-a[s][1].start.offset===a[u][1].end.offset-a[u][1].start.offset){a[s][1].type="strikethroughSequence",a[u][1].type="strikethroughSequence";let c={type:"strikethrough",start:Object.assign({},a[u][1].start),end:Object.assign({},a[s][1].end)},f={type:"strikethroughText",start:Object.assign({},a[u][1].end),end:Object.assign({},a[s][1].start)},p=[["enter",c,l],["enter",a[u][1],l],["exit",a[u][1],l],["enter",f,l]],m=l.parser.constructs.insideSpan.null;m&&ae(p,p.length,0,et(m,a.slice(u+1,s),l)),ae(p,p.length,0,[["exit",f,l],["enter",a[s][1],l],["exit",a[s][1],l],["exit",c,l]]),ae(a,u-1,s-u+3,p),s=u+p.length-2;break}}for(s=-1;++s<a.length;)a[s][1].type==="strikethroughSequenceTemporary"&&(a[s][1].type="data");return a}function o(a,l,s){let u=this.previous,c=this.events,f=0;return p;function p(h){return u===126&&c[c.length-1][1].type!=="characterEscape"?s(h):(a.enter("strikethroughSequenceTemporary"),m(h))}function m(h){let x=Ye(u);if(h===126)return f>1?s(h):(a.consume(h),f++,m);if(f<2&&!n)return s(h);let v=a.exit("strikethroughSequenceTemporary"),y=Ye(h);return v._open=!y||y===2&&!!x,v._close=!x||x===2&&!!y,l(h)}}}var er=class{constructor(){this.map=[];}add(t,n,r){Th(this,t,n,r);}consume(t){if(this.map.sort(function(o,a){return o[0]-a[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(let o of i)t.push(o);i=r.pop();}this.map.length=0;}};function Th(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1;}e.map.push([t,n,r]);}}function au(e,t){let n=false,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let o=r.length-1;r[o]=r[o]==="left"?"center":"right";}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=true);t+=1;}return r}function io(){return {flow:{null:{name:"table",tokenize:Ph,resolveAll:Lh}}}}function Ph(e,t,n){let r=this,i=0,o=0,a;return l;function l(b){let X=r.events.length-1;for(;X>-1;){let U=r.events[X][1].type;if(U==="lineEnding"||U==="linePrefix")X--;else break}let B=X>-1?r.events[X][1].type:null,A=B==="tableHead"||B==="tableRow"?_:s;return A===_&&r.parser.lazy[r.now().line]?n(b):A(b)}function s(b){return e.enter("tableHead"),e.enter("tableRow"),u(b)}function u(b){return b===124||(a=true,o+=1),c(b)}function c(b){return b===null?n(b):I(b)?o>1?(o=0,r.interrupt=true,e.exit("tableRow"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),m):n(b):R(b)?L(e,c,"whitespace")(b):(o+=1,a&&(a=false,i+=1),b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),a=true,c):(e.enter("data"),f(b)))}function f(b){return b===null||b===124||V(b)?(e.exit("data"),c(b)):(e.consume(b),b===92?p:f)}function p(b){return b===92||b===124?(e.consume(b),f):f(b)}function m(b){return r.interrupt=false,r.parser.lazy[r.now().line]?n(b):(e.enter("tableDelimiterRow"),a=false,R(b)?L(e,h,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):h(b))}function h(b){return b===45||b===58?v(b):b===124?(a=true,e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),x):D(b)}function x(b){return R(b)?L(e,v,"whitespace")(b):v(b)}function v(b){return b===58?(o+=1,a=true,e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),y):b===45?(o+=1,y(b)):b===null||I(b)?N(b):D(b)}function y(b){return b===45?(e.enter("tableDelimiterFiller"),z(b)):D(b)}function z(b){return b===45?(e.consume(b),z):b===58?(a=true,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(b))}function S(b){return R(b)?L(e,N,"whitespace")(b):N(b)}function N(b){return b===124?h(b):b===null||I(b)?!a||i!==o?D(b):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(b)):D(b)}function D(b){return n(b)}function _(b){return e.enter("tableRow"),$(b)}function $(b){return b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),$):b===null||I(b)?(e.exit("tableRow"),t(b)):R(b)?L(e,$,"whitespace")(b):(e.enter("data"),W(b))}function W(b){return b===null||b===124||V(b)?(e.exit("data"),$(b)):(e.consume(b),b===92?j:W)}function j(b){return b===92||b===124?(e.consume(b),W):W(b)}}function Lh(e,t){let n=-1,r=true,i=0,o=[0,0,0,0],a=[0,0,0,0],l=false,s=0,u,c,f,p=new er;for(;++n<e.length;){let m=e[n],h=m[1];m[0]==="enter"?h.type==="tableHead"?(l=false,s!==0&&(lu(p,t,s,u,c),c=void 0,s=0),u={type:"table",start:Object.assign({},h.start),end:Object.assign({},h.end)},p.add(n,0,[["enter",u,t]])):h.type==="tableRow"||h.type==="tableDelimiterRow"?(r=true,f=void 0,o=[0,0,0,0],a=[0,n+1,0,0],l&&(l=false,c={type:"tableBody",start:Object.assign({},h.start),end:Object.assign({},h.end)},p.add(n,0,[["enter",c,t]])),i=h.type==="tableDelimiterRow"?2:c?3:1):i&&(h.type==="data"||h.type==="tableDelimiterMarker"||h.type==="tableDelimiterFiller")?(r=false,a[2]===0&&(o[1]!==0&&(a[0]=a[1],f=tr(p,t,o,i,void 0,f),o=[0,0,0,0]),a[2]=n)):h.type==="tableCellDivider"&&(r?r=false:(o[1]!==0&&(a[0]=a[1],f=tr(p,t,o,i,void 0,f)),o=a,a=[o[1],n,0,0])):h.type==="tableHead"?(l=true,s=n):h.type==="tableRow"||h.type==="tableDelimiterRow"?(s=n,o[1]!==0?(a[0]=a[1],f=tr(p,t,o,i,n,f)):a[1]!==0&&(f=tr(p,t,a,i,n,f)),i=0):i&&(h.type==="data"||h.type==="tableDelimiterMarker"||h.type==="tableDelimiterFiller")&&(a[3]=n);}for(s!==0&&lu(p,t,s,u,c),p.consume(t.events),n=-1;++n<t.events.length;){let m=t.events[n];m[0]==="enter"&&m[1].type==="table"&&(m[1]._align=au(t.events,n));}return e}function tr(e,t,n,r,i,o){let a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(o.end=Object.assign({},Lt(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));let s=Lt(t.events,n[1]);if(o={type:a,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",o,t]]),n[2]!==0){let u=Lt(t.events,n[2]),c=Lt(t.events,n[3]),f={type:l,start:Object.assign({},u),end:Object.assign({},c)};if(e.add(n[2],0,[["enter",f,t]]),r!==2){let p=t.events[n[2]],m=t.events[n[3]];if(p[1].end=Object.assign({},m[1].end),p[1].type="chunkText",p[1].contentType="text",n[3]>n[2]+1){let h=n[2]+1,x=n[3]-n[2]-1;e.add(h,x,[]);}}e.add(n[3]+1,0,[["exit",f,t]]);}return i!==void 0&&(o.end=Object.assign({},Lt(t.events,i)),e.add(i,0,[["exit",o,t]]),o=void 0),o}function lu(e,t,n,r,i){let o=[],a=Lt(t.events,n);i&&(i.end=Object.assign({},a),o.push(["exit",i,t])),r.end=Object.assign({},a),o.push(["exit",r,t]),e.add(n+1,0,o);}function Lt(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}var Rh={name:"tasklistCheck",tokenize:Dh};function oo(){return {text:{91:Rh}}}function Dh(e,t,n){let r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),o)}function o(s){return V(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),a):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),a):n(s)}function a(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(s)}function l(s){return I(s)?t(s):R(s)?e.check({tokenize:Nh},t,n)(s):n(s)}}function Nh(e,t,n){return L(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function su(e){return In([eo(),no(),ro(e),io(),oo()])}var Mh={};function nr(e){let t=this,n=e||Mh,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(su(n)),o.push(Ji()),a.push(Qi(n));}var Fh="8bbb86f-2026-09-09T16:05:43.200Z".split("-")[0],rn="https://chat.converzen.de",uu="Hi, how can I help you ?",Oh=e=>{if(!e?.position)return {bottom:"1rem",right:"1rem"};if(typeof e.position=="string")switch(e.position){case "bottom-right":return {bottom:"1rem",right:"1rem"};case "bottom-left":return {bottom:"1rem",left:"1rem"};case "top-right":return {top:"1rem",right:"1rem"};case "top-left":return {top:"1rem",left:"1rem"};default:return {bottom:"1rem",right:"1rem"}}else {let t={};return e.position.bottom&&(t.bottom=e.position.bottom),e.position.top&&(t.top=e.position.top),e.position.left&&(t.left=e.position.left),e.position.right&&(t.right=e.position.right),t}},Uh="calc(100vw - 2rem)",Bh="calc(100dvh - 8rem)",jh=e=>{let t={maxWidth:Uh,maxHeight:Bh};if(!e?.dialogSize)return {width:"350px",height:"500px",...t};if(typeof e.dialogSize=="string")switch(e.dialogSize){case "small":return {width:"300px",height:"400px",...t};case "medium":return {width:"350px",height:"500px",...t};case "large":return {width:"400px",height:"600px",...t};default:return {width:"350px",height:"500px",...t}}else return {width:`${Math.max(250,e.dialogSize.width)}px`,height:`${Math.max(300,e.dialogSize.height)}px`,...t}},Hh=e=>e?.frameColor||"#E5E7EB",$h=(e,t)=>{let n=e?.buttonColor;return t?{backgroundColor:n?.open||"#1F2937"}:{backgroundColor:n?.normal||"#2563EB","--hover-color":n?.hover||"#1D4ED8"}},cu=()=>w("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:w("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"})}),pu=()=>w("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:w("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),Vh=()=>w("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:w("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})}),Wh=()=>w("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:w("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),Rt=({custom:e,fallback:t,className:n})=>e?w("span",{className:n,dangerouslySetInnerHTML:{__html:e}}):t,qh=({title:e,subtitle:t,onClose:n,onClear:r,darkMode:i,icons:o,authControl:a})=>w("div",{className:`cvz-p-4 cvz-shadow-md cvz-flex cvz-justify-between cvz-items-start ${i?"cvz-bg-gradient-to-b cvz-from-gray-900 cvz-to-gray-800 cvz-text-white":"cvz-bg-gradient-to-b cvz-from-blue-600 cvz-to-blue-500 cvz-text-white"}`,children:[w("div",{className:"cvz-flex cvz-items-center cvz-gap-3",children:[w("div",{className:"cvz-relative",children:[w("div",{className:`cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-border-2 ${i?"cvz-border-gray-800":"cvz-border-blue-600"}`}),w("div",{className:"cvz-absolute cvz-top-0 cvz-left-0 cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-animate-ping cvz-opacity-75"})]}),w("div",{children:[w("h3",{className:"cvz-font-bold cvz-text-lg cvz-leading-tight",children:e}),t&&w("p",{className:`cvz-text-xs cvz-mt-0.5 ${i?"cvz-text-gray-300":"cvz-text-blue-100"}`,children:t})]})]}),w("div",{className:"cvz-flex cvz-gap-2 cvz-items-center",children:[a,w("button",{onClick:r,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Clear History",children:w(Rt,{custom:o?.clear,fallback:w(Wh,{}),className:"cvz-w-5 cvz-h-5"})}),w("button",{onClick:n,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Close Chat",children:w(Rt,{custom:o?.close,fallback:w(pu,{}),className:"cvz-w-6 cvz-h-6"})})]})]}),Yh=({content:e,enableMarkdown:t,darkMode:n})=>t?w("div",{className:"cvz-markdown-content",children:w(ki,{remarkPlugins:[nr],components:{p:({children:r})=>w("p",{className:`cvz-mb-2 cvz-last:cvz-mb-0 ${n?"cvz-text-gray-100":""}`,children:r}),h1:({children:r})=>w("h1",{className:`cvz-text-xl cvz-font-bold cvz-mb-2 cvz-mt-4 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h2:({children:r})=>w("h2",{className:`cvz-text-lg cvz-font-bold cvz-mb-2 cvz-mt-3 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h3:({children:r})=>w("h3",{className:`cvz-text-base cvz-font-bold cvz-mb-1 cvz-mt-2 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),ul:({children:r})=>w("ul",{className:`cvz-list-disc cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),ol:({children:r})=>w("ol",{className:`cvz-list-decimal cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),li:({children:r})=>w("li",{className:"cvz-ml-2",children:r}),code:({children:r})=>w("code",{className:`cvz-px-1 cvz-py-0.5 cvz-rounded cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),pre:({children:r})=>w("pre",{className:`cvz-p-2 cvz-rounded cvz-overflow-x-auto cvz-mb-2 cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),blockquote:({children:r})=>w("blockquote",{className:`cvz-border-l-4 cvz-pl-3 cvz-italic cvz-mb-2 ${n?"cvz-border-gray-600 cvz-text-gray-300":"cvz-border-gray-300"}`,children:r}),strong:({children:r})=>w("strong",{className:"cvz-font-bold",children:r}),em:({children:r})=>w("em",{className:"cvz-italic",children:r}),a:({children:r,href:i})=>w("a",{href:i,className:`cvz-underline ${n?"cvz-text-blue-400 cvz-hover:cvz-text-blue-300":"cvz-text-blue-600 cvz-hover:cvz-text-blue-800"}`,target:"_blank",rel:"noopener noreferrer",children:r}),table:({children:r})=>w("div",{className:"cvz-overflow-x-auto cvz-mb-2",children:w("table",{className:`cvz-w-full cvz-text-sm cvz-border-collapse ${n?"cvz-text-gray-100":""}`,children:r})}),thead:({children:r})=>w("thead",{className:`${n?"cvz-bg-gray-700":"cvz-bg-gray-100"}`,children:r}),tbody:({children:r})=>w("tbody",{children:r}),tr:({children:r})=>w("tr",{className:`cvz-border-b ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:r}),th:({children:r})=>w("th",{className:`cvz-px-3 cvz-py-1.5 cvz-text-left cvz-font-semibold cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r}),td:({children:r})=>w("td",{className:`cvz-px-3 cvz-py-1.5 cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r})},children:e})}):Me("span",null,e),Gh=({messages:e,isStreaming:t,streamingMessage:n,thinkingMessage:r,activeToolCall:i,isFinalizingRef:o,messagesEndRef:a,enableMarkdown:l,darkMode:s,icons:u})=>{let c=Ee(null),[f,p]=ee(true);return Fe(()=>{let m=c.current;if(!m)return;let h=()=>{let{scrollTop:x,scrollHeight:v,clientHeight:y}=m,z=v-x-y<100;p(z);};return m.addEventListener("scroll",h),()=>m.removeEventListener("scroll",h)},[]),Fe(()=>{f&&a.current&&a.current.scrollIntoView({behavior:"smooth"});},[e,n,r,i,f,a]),w("div",{ref:c,className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-4 cvz-space-y-4 ${s?"cvz-bg-gray-900 cvz-scrollbar-dark":"cvz-bg-gray-50 cvz-scrollbar-light"}`,children:[e.length===0&&!n&&w("div",{className:`cvz-flex cvz-flex-col cvz-items-center cvz-justify-center cvz-h-full cvz-space-y-2 ${s?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:[w(Rt,{custom:u?.launcher,fallback:w(cu,{}),className:"cvz-w-6 cvz-h-6"}),w("p",{className:"cvz-text-sm",children:"Start a conversation"})]}),e.map(m=>w("div",{className:`cvz-flex ${m.role==="USER"?"cvz-justify-end":"cvz-justify-start"}`,children:w("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-text-sm cvz-shadow-sm ${m.role==="USER"?s?"cvz-bg-blue-500 cvz-text-white cvz-rounded-br-none":"cvz-bg-blue-600 cvz-text-white cvz-rounded-br-none":s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border cvz-border-gray-700 cvz-rounded-bl-none":"cvz-bg-white cvz-text-gray-800 cvz-border cvz-border-gray-100 cvz-rounded-bl-none"}`,children:w(Yh,{content:m.content,enableMarkdown:l,darkMode:s})})},m.createdAt.toString())),t&&n&&!o.current&&w("div",{className:"cvz-flex cvz-justify-start",children:w("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-text-sm cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border-gray-700":"cvz-bg-white cvz-text-gray-800 cvz-border-gray-100"}`,children:n})}),t&&!n&&w("div",{className:"cvz-flex cvz-justify-start",children:w("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:i?w("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:["Calling ",i,"\u2026"]}):r?w("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:r}):w("div",{className:"cvz-flex cvz-space-x-1",children:[w("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"0ms"}}),w("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"150ms"}}),w("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"300ms"}})]})})}),w("div",{ref:a})]})},Xh=({value:e,onChange:t,onSubmit:n,isLoading:r,placeholder:i,darkMode:o,icons:a})=>w("form",{onSubmit:n,className:`cvz-p-4 cvz-border-t ${o?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:[w("div",{className:"cvz-relative cvz-flex cvz-items-center",children:[w("input",{type:"text",value:e,onChange:l=>t(l.target.value),placeholder:i,className:`cvz-w-full cvz-border cvz-text-sm cvz-rounded-full cvz-pl-4 cvz-pr-12 cvz-py-3 cvz-focus:cvz-outline-none cvz-focus:cvz-ring-1 cvz-transition-all ${o?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100 cvz-placeholder-gray-400 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500":"cvz-bg-gray-50 cvz-border-gray-200 cvz-text-gray-900 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500"}`}),w("button",{type:"submit",disabled:!e.trim()||r,className:`cvz-absolute cvz-right-2 cvz-p-2 cvz-text-white cvz-rounded-full cvz-disabled:cvz-opacity-50 cvz-transition-colors cvz-shadow-sm ${o?"cvz-bg-blue-500 cvz-hover:cvz-bg-blue-600 cvz-disabled:cvz-hover:cvz-bg-blue-500":"cvz-bg-blue-600 cvz-hover:cvz-bg-blue-700 cvz-disabled:cvz-hover:cvz-bg-blue-600"}`,children:w(Rt,{custom:a?.send,fallback:w(Vh,{}),className:"cvz-w-5 cvz-h-5"})})]}),w("div",{className:"cvz-text-center cvz-mt-2",children:w("p",{className:`cvz-text-[10px] ${o?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:["Powered by ConverZen",w("span",{className:o?"cvz-text-gray-600":"cvz-text-gray-300",children:[" \xB7 ",Fh]})]})})]}),Kh=({config:e})=>{let[t,n]=ee(e.autoOpen??false),[r,i]=ee([]),[o,a]=ee(""),[l,s]=ee(false),[u,c]=ee(false),[f,p]=ee(""),[m,h]=ee(""),[x,v]=ee(null),[y,z]=ee(null),[S,N]=ee(()=>{let Y=Qo();return zt(Y)?Y:null}),[D,_]=ee(false),[$,W]=ee(false),j=Y=>{Zo(Y),N(Y),W(false);},b=()=>{ea(),N(null);},X=e.persistMessages!==false,B=e.onSaveMessages??(X?Go:async()=>{}),A=e.onLoadMessages??(X?Xo:async()=>({sessionId:"",messages:[]})),U=Ee(null),P=Ee(null),G=Ee(null),T=Ee(null),Q=Ee(null),[be,d]=ee(false),ce={getContainer:()=>Q.current,onPending:d},ge=()=>{if(!T.current){let Y=e.chatUrl||rn;T.current=vr(Y,e.publicId,ce);}return T.current},g=Ee(false),pe=Ee(""),Pe=Ee(null),ye=Ee(""),Xe=Ee(null);Fe(()=>{(async()=>{try{let Z=await A(),fe=[],J=null;Z&&typeof Z=="object"&&"messages"in Z&&"sessionId"in Z?(fe=Z.messages||[],J=Z.sessionId||null):Array.isArray(Z)&&(fe=Z),fe.length===0&&(fe=[{content:e.initialGreeting||uu,role:"SYSTEM",createdAt:new Date().toISOString()}]),z(J),i(fe);}catch(Z){console.error("Failed to load messages:",Z);}})();},[e]),Fe(()=>{if(!e.endUserLicensing)return;let Y=ra();if(!Y)return;let Z=e.chatUrl||rn;bn(Z,Y.pendingId).finally(()=>{ia();});},[]);let le=async(Y=false)=>{if(e.apiKey)return {token:e.apiKey,type:"apiKey"};if(!e.getToken)throw new Error("Either apiKey or getToken must be provided");let Z=e.getToken;if(!Y){let Se=Date.now()/1e3+5,me=G.current;if(me&&(me.expiresAt==null||me.expiresAt>Se))return {token:me.token,type:"bearer"}}let fe=async()=>{let Se=await Z(await ge());return typeof Se=="string"?{token:Se,expiresAt:void 0}:Se},J;try{J=await fe();}catch(Se){if(!Wo(Se))throw Se;let me=e.chatUrl||rn;T.current=Promise.resolve(await qo(me,e.publicId,ce)),J=await fe();}return G.current=J,{token:J.token,type:"bearer"}},it=async(Y=false)=>!Y&&zt(S)?{token:S.token,type:"bearer"}:le(Y),ze=async(Y,Z,fe,J=0)=>{try{let me=await it(J>0),at=e.chatUrl||rn,k=y||"",E=Bo({baseUrl:at,sessionId:k,message:Y.content,persona:e.persona,authToken:me.token,authType:me.type,clientId:await ge()??void 0,extraContext:e.extraContext,abortSignal:fe.signal}),F="",H=!1,q=!1,xe=0,He=350,Ie=async()=>{if(!xe)return;let te=He-(Date.now()-xe);te>0&&await new Promise(Le=>setTimeout(Le,te));};for await(let te of E){if(fe.signal.aborted){console.log("executeStreaming: abort signal received");break}switch(te.type){case "session_created":case "session_continued":te.session_id&&te.session_id!==k&&(k=te.session_id,z(te.session_id));break;case "thinking":te.content&&(q||(xe=Date.now()),q=!0,ye.current+=te.content,Xe.current||(Xe.current=requestAnimationFrame(()=>{let Mt=ye.current;ye.current="",Xe.current=null,h(_t=>_t+Mt);})));break;case "tool_call_started":te.name&&(await Ie(),q=!0,xe=Date.now(),v(te.name));break;case "token":te.content&&(q&&(await Ie(),q=!1,xe=0,ye.current="",h(""),v(null)),pe.current+=te.content,F+=te.content,Pe.current||(Pe.current=requestAnimationFrame(()=>{let Mt=pe.current;p(_t=>_t+Mt),pe.current="",Pe.current=null;})));break;case "done":if(F&&k){g.current=!0;let Mt={content:F,role:"ASSISTANT",createdAt:new Date().toISOString(),sources:te.sources},_t=[...Z,Mt];i(Zh=>_t),p(""),ye.current="",h(""),v(null),c(!1),s(!1),setTimeout(()=>{g.current=!1;},0),await B(k,_t);}else p(""),ye.current="",h(""),v(null),c(!1),s(!1);P.current=null;return;case "error":let Le=te.code||"",se=te.message||te.detail||"",$e=J===0&&zt(S);if((Le==="auth_failed"||se.includes("401")||se.includes("403")||se.includes("Unauthorized")||se.includes("Forbidden"))&&J<1&&(e.getToken&&!e.apiKey||$e)){console.warn("Auth error detected, refreshing token and retrying..."),G.current=null,$e&&b(),H=!0;break}if(Le==="rate_limited"&&e.endUserLicensing){W(!0),p(""),ye.current="",h(""),v(null),c(!1),s(!1),P.current=null;return}console.error("Stream error:",Le,se);let Re={content:se||"An error occurred",role:"SYSTEM",createdAt:new Date().toISOString()},so=[...Z,Re];i(so),await B(k||"",so),p(""),ye.current="",h(""),v(null),c(!1),s(!1),P.current=null;return}}if(H&&J<1)return ze(Y,Z,fe,J+1);!fe.signal.aborted&&!H&&(console.error("Stream ended unexpectedly"),p(""),ye.current="",h(""),v(null),c(!1),s(!1),P.current=null);}catch(me){let at=J===0&&zt(S);if(me instanceof Error&&(me.message.includes("401")||me.message.includes("403"))&&J<1&&(e.getToken&&!e.apiKey||at))return console.warn("Unauthorized error detected, refreshing token and retrying..."),G.current=null,at&&b(),ze(Y,Z,fe,J+1);throw me}},je=async Y=>{if(Y?.preventDefault(),!o.trim()||u)return;P.current&&P.current.abort();let Z={content:o.trim(),role:"USER",createdAt:new Date().toISOString()};i(J=>[...J,Z]);let fe=[...r,Z];a(""),s(true),c(true),p(""),ye.current="",h(""),v(null);try{let J=new AbortController;P.current=J,await ze(Z,fe,J);}catch(J){if(console.error("Error sending message:",J),J instanceof Error&&J.name==="AbortError"){p(""),ye.current="",h(""),v(null),c(false),s(false),P.current=null;return}let Se={content:`Error: ${J instanceof Error?J.message:"Failed to send message"}`,role:"SYSTEM",createdAt:new Date().toISOString()},me=[...fe,Se];i(me),await B(y||"",me),p(""),ye.current="",h(""),v(null),c(false),s(false),P.current=null;}},Ke=async()=>{window.confirm("Are you sure you want to clear your chat history?")&&(P.current&&(P.current.abort(),P.current=null),i([{content:e.initialGreeting||uu,role:"SYSTEM",createdAt:new Date().toISOString()}]),p(""),ye.current="",h(""),v(null),z(null),c(false),s(false),await B("",[]));},Dt=Oh(e.style),rr=jh(e.style),on=Hh(e.style),Nt=$h(e.style,t),ot=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="bottom-left")||typeof e.style.position=="object"&&e.style.position.bottom,kt=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="top-right")||typeof e.style.position=="object"&&e.style.position.right;return w("div",{className:"cvz-fixed cvz-z-[9999] cvz-font-sans",style:Dt,children:[w("div",{className:`
          cvz-absolute cvz-rounded-2xl cvz-shadow-2xl cvz-flex cvz-flex-col cvz-overflow-hidden
          cvz-transition-all cvz-duration-300
          ${e.darkMode?"cvz-bg-gray-800":"cvz-bg-white"}
          ${ot?"cvz-bottom-20":"cvz-top-20"}
          ${kt?"cvz-right-0":"cvz-left-0"}
          ${ot&&kt?"cvz-origin-bottom-right":ot&&!kt?"cvz-origin-bottom-left":!ot&&kt?"cvz-origin-top-right":"cvz-origin-top-left"}
          ${t?"cvz-opacity-100 cvz-scale-100 cvz-translate-y-0":"cvz-opacity-0 cvz-scale-95 cvz-translate-y-4 cvz-pointer-events-none"}
        `,style:{...rr,borderColor:on,borderWidth:"1px",borderStyle:"solid"},children:[w(qh,{title:e.headerMsg||"Support Chat",subtitle:e.subheaderMsg||"We typically reply in a few minutes",onClose:()=>n(false),onClear:Ke,darkMode:e.darkMode,icons:e.icons,authControl:e.endUserLicensing?w("button",{onClick:()=>_(true),className:`cvz-text-xs cvz-font-medium cvz-px-2 cvz-py-1 cvz-rounded-md cvz-transition-colors cvz-whitespace-nowrap ${e.darkMode?"cvz-text-gray-200 hover:cvz-bg-gray-700/50":"cvz-text-white hover:cvz-bg-blue-600/50"}`,title:S?`Signed in as ${S.email}`:"Authenticate",children:S?"Account":"Authenticate"}):void 0}),w("div",{ref:Q,className:`cvz-flex cvz-justify-center cvz-overflow-hidden cvz-transition-all cvz-duration-200 ${be?"cvz-max-h-32 cvz-py-2":"cvz-max-h-0 cvz-py-0"}`}),w(Gh,{messages:r,isStreaming:u,streamingMessage:f,thinkingMessage:m,activeToolCall:x,isFinalizingRef:g,messagesEndRef:U,enableMarkdown:e.enableMarkdown,darkMode:e.darkMode,icons:e.icons}),$&&!zt(S)&&w("div",{className:`cvz-px-4 cvz-py-2 cvz-text-xs cvz-flex cvz-items-center cvz-justify-between cvz-gap-2 ${e.darkMode?"cvz-bg-amber-900/40 cvz-text-amber-200":"cvz-bg-amber-50 cvz-text-amber-800"}`,children:[w("span",{children:"You've reached the free limit - authenticate to keep chatting."}),w("button",{onClick:()=>_(true),className:"cvz-underline cvz-font-medium cvz-shrink-0",children:"Authenticate"})]}),w(Xh,{value:o,onChange:a,onSubmit:je,isLoading:l||u,placeholder:e.promptPlaceholder||"Type a message...",darkMode:e.darkMode,icons:e.icons}),e.endUserLicensing&&w(sa,{open:D,onClose:()=>_(false),darkMode:e.darkMode,baseUrl:e.chatUrl||rn,getBaseAuth:()=>le(),endUserAuth:S,onAuthenticated:j,initialEmail:ta()??void 0})]}),w("button",{onClick:()=>{let Y=!t;n(Y),Y&&ge();},className:`
          cvz-flex cvz-items-center cvz-justify-center
          cvz-w-14 cvz-h-14 cvz-rounded-full cvz-shadow-lg cvz-transition-all cvz-duration-300
          ${t?"cvz-rotate-90":"cvz-hover:cvz-scale-105"}
        `,style:{backgroundColor:Nt.backgroundColor},onMouseEnter:Y=>{!t&&e.style?.buttonColor?.hover&&(Y.currentTarget.style.backgroundColor=e.style.buttonColor.hover);},onMouseLeave:Y=>{t||(Y.currentTarget.style.backgroundColor=Nt.backgroundColor);},children:w("div",{className:"cvz-text-white",children:t?w(Rt,{custom:e.icons?.close,fallback:w(pu,{}),className:"cvz-w-6 cvz-h-6"}):w(Rt,{custom:e.icons?.launcher,fallback:w(cu,{}),className:"cvz-w-6 cvz-h-6"})})})]})},fu=Kh;var ao=`*, ::before, ::after {
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
`;if(M){M.debounceRendering;M.debounceRendering=t=>{requestAnimationFrame(t);};}var Qh="cvz-widget-host",lo=class{hostElement=null;buildId="8bbb86f-2026-09-09T16:05:43.200Z";init(t){if(this.hostElement){console.warn("cvzWidget is already initialized.");return}console.log("init: Initializing cvzWidget...",this.buildId),console.log("CSS Length:",ao.length);let n=document.createElement("div");n.id=Qh,document.body.appendChild(n);let r=n.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=ao,r.appendChild(i);let o=document.createElement("div");o.id="cvz-root",r.appendChild(o),fr(Me(fu,{config:t}),o),this.hostElement=n;}hide(){if(!this.hostElement){console.warn("hide: cvzWidget is not initialized.");return}this.hostElement&&(this.hostElement.remove(),this.hostElement=null);}},mu=new lo;typeof window<"u"&&(window.cvzWidget=mu);var Rz=mu;return Rz;})();