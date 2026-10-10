var bu=Object.create;var Xn=Object.defineProperty;var vu=Object.getOwnPropertyDescriptor;var wu=Object.getOwnPropertyNames;var ku=Object.getPrototypeOf,_u=Object.prototype.hasOwnProperty;var Ct=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),io=(e,t)=>{for(var n in t)Xn(e,n,{get:t[n],enumerable:true});},zu=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of wu(t))!_u.call(e,i)&&i!==n&&Xn(e,i,{get:()=>t[i],enumerable:!(r=vu(t,i))||r.enumerable});return e};var oo=(e,t,n)=>(n=e!=null?bu(ku(e)):{},zu(Xn(n,"default",{value:e,enumerable:true}),e));var Ma=Ct((Xg,Da)=>{var Ta=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,kc=/\n/g,_c=/^\s*/,zc=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Sc=/^:\s*/,Cc=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Ec=/^[;\s]*/,Ic=/^\s+|\s+$/g,Ac=`
`,Pa="/",La="*",Ze="",Tc="comment",Pc="declaration";function Lc(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return [];t=t||{};var n=1,r=1;function i(h){var x=h.match(kc);x&&(n+=x.length);var w=h.lastIndexOf(Ac);r=~w?h.length-w:r+h.length;}function o(){var h={line:n,column:r};return function(x){return x.position=new a(h),u(),x}}function a(h){this.start=h,this.end={line:n,column:r},this.source=t.source;}a.prototype.content=e;function l(h){var x=new Error(t.source+":"+n+":"+r+": "+h);if(x.reason=h,x.filename=t.source,x.line=n,x.column=r,x.source=e,!t.silent)throw x}function s(h){var x=h.exec(e);if(x){var w=x[0];return i(w),e=e.slice(w.length),x}}function u(){s(_c);}function c(h){var x;for(h=h||[];x=f();)x!==false&&h.push(x);return h}function f(){var h=o();if(!(Pa!=e.charAt(0)||La!=e.charAt(1))){for(var x=2;Ze!=e.charAt(x)&&(La!=e.charAt(x)||Pa!=e.charAt(x+1));)++x;if(x+=2,Ze===e.charAt(x-1))return l("End of comment missing");var w=e.slice(2,x-2);return r+=2,i(w),e=e.slice(x),r+=2,h({type:Tc,comment:w})}}function p(){var h=o(),x=s(zc);if(x){if(f(),!s(Sc))return l("property missing ':'");var w=s(Cc),y=h({type:Pc,property:Ra(x[0].replace(Ta,Ze)),value:w?Ra(w[0].replace(Ta,Ze)):Ze});return s(Ec),y}}function m(){var h=[];c(h);for(var x;x=p();)x!==false&&(h.push(x),c(h));return h}return u(),m()}function Ra(e){return e?e.replace(Ic,Ze):Ze}Da.exports=Lc;});var Na=Ct(Lt=>{var Rc=Lt&&Lt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Lt,"__esModule",{value:true});Lt.default=Mc;var Dc=Rc(Ma());function Mc(e,t){let n=null;if(!e||typeof e!="string")return n;let r=(0, Dc.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;let{property:a,value:l}=o;i?t(a,l,o):l&&(n=n||{},n[a]=l);}),n}});var Oa=Ct(yn=>{Object.defineProperty(yn,"__esModule",{value:true});yn.camelCase=void 0;var Nc=/^--[a-zA-Z0-9_-]+$/,Fc=/-([a-z])/g,Oc=/^[^-]+$/,Uc=/^-(webkit|moz|ms|o|khtml)-/,Bc=/^-(ms)-/,Hc=function(e){return !e||Oc.test(e)||Nc.test(e)},jc=function(e,t){return t.toUpperCase()},Fa=function(e,t){return "".concat(t,"-")},Wc=function(e,t){return t===void 0&&(t={}),Hc(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Bc,Fa):e=e.replace(Uc,Fa),e.replace(Fc,jc))};yn.camelCase=Wc;});var Ba=Ct((Tr,Ua)=>{var Vc=Tr&&Tr.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},$c=Vc(Na()),qc=Oa();function Ar(e,t){var n={};return !e||typeof e!="string"||(0, $c.default)(e,function(r,i){r&&i&&(n[(0, qc.camelCase)(r,t)]=i);}),n}Ar.default=Ar;Ua.exports=Ar;});var ps=Ct((Sk,cs)=>{var Hn=Object.prototype.hasOwnProperty,us=Object.prototype.toString,rs=Object.defineProperty,is=Object.getOwnPropertyDescriptor,os=function(t){return typeof Array.isArray=="function"?Array.isArray(t):us.call(t)==="[object Array]"},as=function(t){if(!t||us.call(t)!=="[object Object]")return  false;var n=Hn.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Hn.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return  false;var i;for(i in t);return typeof i>"u"||Hn.call(t,i)},ls=function(t,n){rs&&n.name==="__proto__"?rs(t,n.name,{enumerable:true,configurable:true,value:n.newValue,writable:true}):t[n.name]=n.newValue;},ss=function(t,n){if(n==="__proto__")if(Hn.call(t,n)){if(is)return is(t,n).value}else return;return t[n]};cs.exports=function e(){var t,n,r,i,o,a,l=arguments[0],s=1,u=arguments.length,c=false;for(typeof l=="boolean"&&(c=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(t=arguments[s],t!=null)for(n in t)r=ss(l,n),i=ss(t,n),l!==i&&(c&&i&&(as(i)||(o=os(i)))?(o?(o=false,a=r&&os(r)?r:[]):a=r&&as(r)?r:{},ls(l,{name:n,newValue:e(c,a,i)})):typeof i<"u"&&ls(l,{name:n,newValue:i}));return l};});var Jt,N,co,He,ao,po,fo,Gn,qt,Et,mo,Zn,Jn,Qn,Kt={},Xt=[],Eu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,It=Array.isArray;function Me(e,t){for(var n in t)e[n]=t[n];return e}function er(e){e&&e.parentNode&&e.parentNode.removeChild(e);}function Ie(e,t,n){var r,i,o,a={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?Jt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return Yt(e,a,r,i,null)}function Yt(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++co,__i:-1,__u:0};return i==null&&N.vnode!=null&&N.vnode(o),o}function be(e){return e.children}function ze(e,t){this.props=e,this.context=t;}function Xe(e,t){if(t==null)return e.__?Xe(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Xe(e):null}function Iu(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],o=Me({},t);o.__v=t.__v+1,N.vnode&&N.vnode(o),tr(e.__P,o,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??Xe(t),!!(32&t.__u),i),o.__v=t.__v,o.__.__k[o.__i]=o,bo(r,o,i),t.__e=t.__=null,o.__e!=n&&ho(o);}}function ho(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),ho(e)}function lo(e){(!e.__d&&(e.__d=true)&&He.push(e)&&!Gt.__r++||ao!=N.debounceRendering)&&((ao=N.debounceRendering)||po)(Gt);}function Gt(){try{for(var e,t=1;He.length;)He.length>t&&He.sort(fo),e=He.shift(),t=He.length,Iu(e);}finally{He.length=Gt.__r=0;}}function go(e,t,n,r,i,o,a,l,s,u,c){var f,p,m,h,x,w,y=r&&r.__k||Xt,z=t.length;for(s=Au(n,t,y,s,z),f=0;f<z;f++)(m=n.__k[f])!=null&&(p=m.__i!=-1&&y[m.__i]||Kt,m.__i=f,w=tr(e,m,p,i,o,a,l,s,u,c),h=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&nr(p.ref,null,m),c.push(m.ref,m.__c||h,m)),x==null&&h!=null&&(x=h),4&m.__u?(s=yo(m,s,e),p.__e&&(p.__e=null)):typeof m.type=="function"&&w!==void 0?s=w:h&&(s=h.nextSibling),m.__u&=-7);return n.__e=x,s}function Au(e,t,n,r,i){var o,a,l,s,u,c=n.length,f=c,p=0;for(e.__k=new Array(i),o=0;o<i;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[o]=Yt(null,a,null,null,null):It(a)?a=e.__k[o]=Yt(be,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[o]=Yt(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[o]=a,s=o+p,a.__=e,a.__b=e.__b+1,l=null,(u=a.__i=Tu(a,n,s,f))!=-1&&(f--,(l=n[u])&&(l.__u|=2)),l==null||l.__v==null?(u==-1&&(i>c?p--:i<c&&p++),typeof a.type!="function"&&(a.__u|=4)):u!=s&&(u==s-1?p--:u==s+1?p++:(u>s?p--:p++,a.__u|=4))):e.__k[o]=null;if(f)for(o=0;o<c;o++)(l=n[o])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=Xe(l)),wo(l,l));return r}function yo(e,t,n){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=yo(r[i],t,n));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=Xe(e)),t=n.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function At(e,t){return t=t||[],e==null||typeof e=="boolean"||(It(e)?e.some(function(n){At(n,t);}):t.push(e)),t}function Tu(e,t,n,r){var i,o,a,l=e.key,s=e.type,u=t[n],c=u!=null&&(2&u.__u)==0;if(u===null&&l==null||c&&l==u.key&&s==u.type)return n;if(r>(c?1:0)){for(i=n-1,o=n+1;i>=0||o<t.length;)if((u=t[a=i>=0?i--:o++])!=null&&(2&u.__u)==0&&l==u.key&&s==u.type)return a}return  -1}function so(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Eu.test(t)?n:n+"px";}function $t(e,t,n,r,i){var o,a;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else {if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||so(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||so(e.style,t,n[t]);}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(mo,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n[Et]=r[Et]:(n[Et]=Zn,e.addEventListener(t,o?Qn:Jn,o)):e.removeEventListener(t,o?Qn:Jn,o);else {if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===false&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n));}}function uo(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[qt]==null)t[qt]=Zn++;else if(t[qt]<n[Et])return;return n(N.event?N.event(t):t)}}}function tr(e,t,n,r,i,o,a,l,s,u){var c,f,p,m,h,x,w,y,z,S,M,D,k,V,q,j,b=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),o=[l=t.__e=n.__e]),(c=N.__b)&&c(t);e:if(typeof b=="function"){f=a.length;try{if(z=t.props,S=b.prototype&&b.prototype.render,M=(c=b.contextType)&&r[c.__c],D=c?M?M.props.value:c.__:r,n.__c?y=(p=t.__c=n.__c).__=p.__E:(S?t.__c=p=new b(z,D):(t.__c=p=new ze(z,D),p.constructor=b,p.render=Lu),M&&M.sub(p),p.state||(p.state={}),p.__n=r,m=p.__d=!0,p.__h=[],p._sb=[]),S&&p.__s==null&&(p.__s=p.state),S&&b.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Me({},p.__s)),Me(p.__s,b.getDerivedStateFromProps(z,p.__s))),h=p.props,x=p.state,p.__v=t,m)S&&b.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),S&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else {if(S&&b.getDerivedStateFromProps==null&&z!==h&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(z,D),t.__v==n.__v||!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(z,p.__s,D)===!1){t.__v!=n.__v&&(p.props=z,p.state=p.__s,p.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(X){X&&(X.__=t);}),Xt.push.apply(p.__h,p._sb),p._sb=[],p.__h.length&&a.push(p),l=Xe(n);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(z,p.__s,D),S&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(h,x,w);});}if(p.context=D,p.props=z,p.__P=e,p.__e=!1,k=N.__r,V=0,S)p.state=p.__s,p.__d=!1,k&&k(t),c=p.render(p.props,p.state,p.context),Xt.push.apply(p.__h,p._sb),p._sb=[];else do p.__d=!1,k&&k(t),c=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++V<25);p.state=p.__s,p.getChildContext!=null&&(r=Me(Me({},r),p.getChildContext())),S&&!m&&p.getSnapshotBeforeUpdate!=null&&(w=p.getSnapshotBeforeUpdate(h,x)),q=c!=null&&c.type===be&&c.key==null?vo(c.props.children):c,l=go(e,It(q)?q:[q],t,n,r,i,o,a,l,s,u),p.base=t.__e,t.__u&=-161,p.__h.length&&a.push(p),y&&(p.__E=p.__=null);}catch(X){if(a.length=f,t.__v=null,s||o!=null){if(X.then){for(t.__u|=s?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o!=null&&(o[o.indexOf(l)]=null),t.__e=l;}else if(o!=null)for(j=o.length;j--;)er(o[j]);}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),X.then||xo(t),N.__e(X,t,n);}}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Pu(n.__e,t,n,r,i,o,a,s,u);return (c=N.diffed)&&c(t),128&t.__u?void 0:l}function xo(e){e&&(e.__c&&(e.__c.__e=true),e.__k&&e.__k.some(xo));}function bo(e,t,n){for(var r=0;r<n.length;r++)nr(n[r],n[++r],n[++r]);N.__c&&N.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i);});}catch(o){N.__e(o,i.__v);}});}function vo(e){return typeof e!="object"||e==null||e.__b>0?e:It(e)?e.map(vo):e.constructor!==void 0?null:Me({},e)}function Pu(e,t,n,r,i,o,a,l,s){var u,c,f,p,m,h,x,w=n.props||Kt,y=t.props,z=t.type;if(z=="svg"?i="http://www.w3.org/2000/svg":z=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(u=0;u<o.length;u++)if((m=o[u])&&"setAttribute"in m==!!z&&(z?m.localName==z:m.nodeType==3)){e=m,o[u]=null;break}}if(e==null){if(z==null)return document.createTextNode(y);e=document.createElementNS(i,z,y.is&&y),l&&(N.__m&&N.__m(t,o),l=false),o=null;}if(z==null)w===y||l&&e.data==y||(e.data=y);else {if(o=z=="textarea"&&y.defaultValue!=null?null:o&&Jt.call(e.childNodes),!l&&o!=null)for(w={},u=0;u<e.attributes.length;u++)w[(m=e.attributes[u]).name]=m.value;for(u in w)m=w[u],u=="dangerouslySetInnerHTML"?f=m:u=="children"||u in y||u=="value"&&"defaultValue"in y||u=="checked"&&"defaultChecked"in y||$t(e,u,null,m,i);for(u in y)m=y[u],u=="children"?p=m:u=="dangerouslySetInnerHTML"?c=m:u=="value"?h=m:u=="checked"?x=m:l&&typeof m!="function"||w[u]===m||$t(e,u,m,w[u],i);if(c)l||f&&(c.__html==f.__html||c.__html==e.innerHTML)||(e.innerHTML=c.__html),t.__k=[];else if(f&&(e.innerHTML=""),go(t.type=="template"?e.content:e,It(p)?p:[p],t,n,r,z=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,a,o?o[0]:n.__k&&Xe(n,0),l,s),o!=null)for(u=o.length;u--;)er(o[u]);l&&z!="textarea"||(u="value",z=="progress"&&h==null?e.removeAttribute("value"):h!=null&&(h!==e[u]||z=="progress"&&!h||z=="option"&&h!=w[u])&&$t(e,u,h,w[u],i),u="checked",x!=null&&x!=e[u]&&$t(e,u,x,w[u],i));}return e}function nr(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t));}else e.current=t;}catch(i){N.__e(i,n);}}function wo(e,t,n){var r,i;if(N.unmount&&N.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||nr(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount();}catch(o){N.__e(o,t);}r.base=r.__P=r.__n=null;}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&wo(r[i],t,n||typeof e.type!="function");n||er(e.__e),e.__c=e.__=e.__e=void 0;}function Lu(e,t,n){return this.constructor(e,n)}function Qt(e,t,n){var r,i,o,a;t==document&&(t=document.documentElement),N.__&&N.__(e,t),i=(r="undefined"=="function")?null:t.__k,o=[],a=[],tr(t,e=(t).__k=Ie(be,null,[e]),i||Kt,Kt,t.namespaceURI,i?null:t.firstChild?Jt.call(t.childNodes):null,o,i?i.__e:t.firstChild,r,a),bo(o,e,a),e.props.children=null;}Jt=Xt.slice,N={__e:function(e,t,n,r){for(var i,o,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),a=i.__d),a)return i.__E=i}catch(l){e=l;}throw e}},co=0,ze.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Me({},this.state),typeof e=="function"&&(e=e(Me({},n),this.props)),e&&Me(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),lo(this));},ze.prototype.forceUpdate=function(e){this.__v&&(this.__e=true,e&&this.__h.push(e),lo(this));},ze.prototype.render=be,He=[],po=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,fo=function(e,t){return e.__v.__b-t.__v.__b},Gt.__r=0,Gn=Math.random().toString(8),qt="__d"+Gn,Et="__a"+Gn,mo=/(PointerCapture)$|Capture$/i,Zn=0,Jn=uo(false),Qn=uo(true);var mt,ee,rr,ko,en=0,To=[],re=N,_o=re.__b,zo=re.__r,So=re.diffed,Co=re.__c,Eo=re.unmount,Io=re.__;function tn(e,t){re.__h&&re.__h(ee,e,en||t),en=0;var n=ee.__H||(ee.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function fe(e){return en=1,Po(Ro,e)}function Po(e,t,n){var r=tn(mt++,2);if(r.t=e,!r.__c&&(r.__=[Ro(void 0,t),function(l){var s=r.__N?r.__N[0]:r.__[0],u=r.t(s,l);s!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}));}],r.__c=ee,!ee.__f)){var i=function(l,s,u){if(!r.__c.__H)return  true;var c=false,f=r.__c.props!==l;if(r.__c.__H.__.some(function(m){if(m.__N){c=true;var h=m.__[0];m.__=m.__N,m.__N=void 0,h!==m.__[0]&&(f=true);}}),o){var p=o.call(this,l,s,u);return c?p||f:p}return !c||f};ee.__f=true;var o=ee.shouldComponentUpdate,a=ee.componentWillUpdate;ee.componentWillUpdate=function(l,s,u){if(this.__e){var c=o;o=void 0,i(l,s,u),o=c;}a&&a.call(this,l,s,u);},ee.shouldComponentUpdate=i;}return r.__N||r.__}function Se(e,t){var n=tn(mt++,3);!re.__s&&or(n.__H,t)&&(n.__=e,n.u=t,ee.__H.__h.push(n));}function Lo(e,t){var n=tn(mt++,4);!re.__s&&or(n.__H,t)&&(n.__=e,n.u=t,ee.__h.push(n));}function nn(e){return en=5,rn(function(){return {current:e}},[])}function rn(e,t){var n=tn(mt++,7);return or(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ru(){for(var e;e=To.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Zt),t.__h.some(ir),t.__h=[];}catch(n){t.__h=[],re.__e(n,e.__v);}}}re.__b=function(e){ee=null,_o&&_o(e);},re.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Io&&Io(e,t);},re.__r=function(e){zo&&zo(e),mt=0;var t=(ee=e.__c).__H;t&&(rr===ee?(t.__h=[],ee.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(t.__h.some(Zt),t.__h.some(ir),t.__h=[],mt=0)),rr=ee;},re.diffed=function(e){So&&So(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(To.push(t)!==1&&ko===re.requestAnimationFrame||((ko=re.requestAnimationFrame)||Du)(Ru)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0);})),rr=ee=null;},re.__c=function(e,t){t.some(function(n){try{n.__h.some(Zt),n.__h=n.__h.filter(function(r){return !r.__||ir(r)});}catch(r){t.some(function(i){i.__h&&(i.__h=[]);}),t=[],re.__e(r,n.__v);}}),Co&&Co(e,t);},re.unmount=function(e){Eo&&Eo(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{Zt(r);}catch(i){t=i;}}),n.__H=void 0,t&&re.__e(t,n.__v));};var Ao=typeof requestAnimationFrame=="function";function Du(e){var t,n=function(){clearTimeout(r),Ao&&cancelAnimationFrame(t),setTimeout(e);},r=setTimeout(n,35);Ao&&(t=requestAnimationFrame(n));}function Zt(e){var t=ee,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),ee=t;}function ir(e){var t=ee;e.__c=e.__(),ee=t;}function or(e,t){return !e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ro(e,t){return typeof t=="function"?t(e):t}var lr="cvz_end_user_auth_v1",Do="cvz_end_user_last_email",sr="cvz_end_user_pending_checkout_v1";function ur(e){try{return localStorage.getItem(e)}catch{return null}}function ar(e,t){try{localStorage.setItem(e,t);}catch{}}function Mo(e){try{localStorage.removeItem(e);}catch{}}function No(){let e=ur(lr);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.token=="string"&&typeof t.expiresAt=="number"&&typeof t.email=="string")return t}catch{}return null}function Ge(e){return e?e.expiresAt-300>Date.now()/1e3:false}function Fo(e){ar(lr,JSON.stringify(e)),ar(Do,e.email);}function Oo(){Mo(lr);}function Uo(){return ur(Do)}function Bo(e){ar(sr,JSON.stringify(e));}function Ho(){let e=ur(sr);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.pendingId=="string"&&typeof t.planId=="number")return t}catch{}return null}function jo(){Mo(sr);}function Wo(e){return e.type==="apiKey"?{"X-API-Key":e.token}:{Authorization:`Bearer ${e.token}`}}async function on(e){try{let t=await e.json();if(t&&typeof t.message=="string")return t.message;if(t&&typeof t.error=="string")return t.error}catch{}return `${e.status} ${e.statusText}`}async function Vo(e,t,n){let r=await fetch(`${e}/api/chat/end_user/start_login`,{method:"POST",headers:{"Content-Type":"application/json",...Wo(t)},body:JSON.stringify({email:n})});if(!r.ok)throw new Error(await on(r));return (await r.json()).pending_id}function an(e,t){return new Promise(n=>{let r=new EventSource(`${e}/api/chat/end_user/wait/${encodeURIComponent(t)}`),i=false,o=a=>{i||(i=true,r.close(),n(a));};r.onmessage=a=>{try{o(JSON.parse(a.data));}catch{o({status:"error"});}},r.onerror=()=>{o({status:"timed_out"});};})}async function cr(e,t){let n=await fetch(`${e}/api/chat/end_user/plans`,{headers:Wo(t)});if(!n.ok)throw new Error(await on(n));return (await n.json()).plans}async function pr(e,t){let n=await fetch(`${e}/api/chat/end_user/me`,{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw new Error(await on(n));return await n.json()}async function $o(e,t,n,r,i){let o=await fetch(`${e}/api/chat/end_user/checkout`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({plan_id:n,success_url:r,cancel_url:i})});if(!o.ok)throw new Error(await on(o));let a=await o.json();return {checkoutUrl:a.checkout_url,pendingId:a.pending_id}}var Mu=0;function v(e,t,n,r,i,o){t||(t={});var a,l,s=t;if("ref"in s)for(l in s={},t)l=="ref"?a=t[l]:s[l]=t[l];var u={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Mu,__i:-1,__u:0,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)s[l]===void 0&&(s[l]=a[l]);return N.vnode&&N.vnode(u),u}var Nu=60*1e3;function Fu(e,t){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:t.toUpperCase()}).format(e/100)}catch{return `${(e/100).toFixed(2)} ${t.toUpperCase()}`}}function Ou(e){return new Date(e*1e3).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}var qo=({open:e,onClose:t,darkMode:n,baseUrl:r,getBaseAuth:i,endUserAuth:o,onAuthenticated:a,initialEmail:l})=>{let[s,u]=fe("email"),[c,f]=fe(""),[p,m]=fe(null),[h,x]=fe(0),[w,y]=fe(null),[z,S]=fe([]),[M,D]=fe(null),[k,V]=fe(Date.now());if(Se(()=>{e&&(m(null),o?(f(o.email),u("status"),pr(r,o.token).then(y).catch(T=>m(T instanceof Error?T.message:String(T)))):(f(l??""),u("email")));},[e]),Se(()=>{if(h<=Date.now())return;let T=setInterval(()=>V(Date.now()),1e3);return ()=>clearInterval(T)},[h]),!e)return null;let q=Math.max(0,Math.ceil((h-k)/1e3)),j=async()=>{let T=c.trim();if(!T||!T.includes("@")){m("Enter a valid email address.");return}m(null),u("waiting");try{let O=await i(),Q=await Vo(r,O,T);x(Date.now()+Nu);let d=await an(r,Q);if(d.status==="verified"){let Z={token:d.chat_token,expiresAt:d.expires_at,email:T};a(Z);try{let ae=await pr(r,Z.token);if(y(ae),ae.total_vtokens_remaining>0||ae.subscription_status==="active")u("status");else {let le=await cr(r,{token:Z.token,type:"bearer"});S(le),u("plans");}}catch{u("status");}}else d.status==="timed_out"?(m("That link expired before it was clicked. You can send a new one below."),u("email")):(m("Something went wrong confirming your login. Please try again."),u("email"));}catch(O){m(O instanceof Error?O.message:String(O)),u("email");}},b=async()=>{if(o){m(null);try{let T=await cr(r,{token:o.token,type:"bearer"});S(T),u("plans");}catch(T){m(T instanceof Error?T.message:String(T));}}},X=async T=>{if(o){m(null),D(T.id);try{let O=window.location.href,{checkoutUrl:Q,pendingId:d}=await $o(r,o.token,T.id,O,O);Bo({pendingId:d,planId:T.id}),window.location.href=Q;}catch(O){m(O instanceof Error?O.message:String(O)),D(null);}}},W=n?"cvz-text-gray-100":"cvz-text-gray-800",P=n?"cvz-text-gray-400":"cvz-text-gray-500",U=n?"cvz-bg-gray-800":"cvz-bg-white",E=n?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100":"cvz-bg-white cvz-border-gray-300 cvz-text-gray-800",B="cvz-bg-blue-600 hover:cvz-bg-blue-700 cvz-text-white disabled:cvz-opacity-50 disabled:cvz-cursor-not-allowed";return v("div",{className:"cvz-absolute cvz-inset-0 cvz-z-20 cvz-flex cvz-flex-col",children:v("div",{className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-5 cvz-flex cvz-flex-col cvz-gap-4 ${U}`,children:[v("div",{className:"cvz-flex cvz-justify-between cvz-items-start",children:[v("h3",{className:`cvz-font-bold cvz-text-lg ${W}`,children:"Account"}),v("button",{onClick:t,className:`cvz-p-1 cvz-rounded-md ${n?"cvz-text-gray-400 hover:cvz-text-white":"cvz-text-gray-400 hover:cvz-text-gray-700"}`,title:"Close",children:"\u2715"})]}),p&&v("p",{className:"cvz-text-sm cvz-text-red-500",children:p}),s==="email"&&v("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[v("p",{className:`cvz-text-sm ${P}`,children:"Enter your email and we'll send you a login link - use it to access a plan you've already bought, or to start a new one."}),v("input",{type:"email",value:c,onInput:T=>f(T.target.value),placeholder:"you@example.com",className:`cvz-border cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm ${E}`,onKeyDown:T=>{T.key==="Enter"&&j();}}),v("button",{onClick:j,disabled:q>0,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${B}`,children:q>0?`Wait ${q}s to resend`:"Send login link"})]}),s==="waiting"&&v("div",{className:"cvz-flex cvz-flex-col cvz-gap-2 cvz-items-center cvz-py-6 cvz-text-center",children:[v("p",{className:`cvz-text-sm ${W}`,children:"Check your email"}),v("p",{className:`cvz-text-xs ${P}`,children:["We sent a login link to ",c,". Click it to continue - this can stay open while you do."]})]}),s==="status"&&v("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[v("p",{className:`cvz-text-sm ${W}`,children:["Signed in as ",o?.email]}),w?v("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-text-sm cvz-flex cvz-flex-col cvz-gap-1 ${n?"cvz-border-gray-600":"cvz-border-gray-200"} ${W}`,children:[v("span",{children:[Math.floor(w.total_vtokens_remaining).toLocaleString()," tokens left"]}),w.plan_name&&v("span",{className:P,children:["Plan: ",w.plan_name]}),w.current_period_end&&v("span",{className:P,children:["Renews ",Ou(w.current_period_end)]})]}):v("p",{className:`cvz-text-sm ${P}`,children:"Loading your balance..."}),v("button",{onClick:b,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${B}`,children:"Buy more"}),v("button",{onClick:()=>{u("email"),m(null);},className:`cvz-text-xs cvz-underline cvz-self-start ${P}`,children:"Use a different email"})]}),s==="plans"&&v("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[z.length===0&&v("p",{className:`cvz-text-sm ${P}`,children:"No plans are available right now."}),z.map(T=>v("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-flex cvz-justify-between cvz-items-center ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:[v("div",{children:[v("p",{className:`cvz-text-sm cvz-font-medium ${W}`,children:T.name}),v("p",{className:`cvz-text-xs ${P}`,children:[Fu(T.price_cents,T.currency),T.kind==="subscription"?" / period":""," \xB7 ",T.included_vtokens.toLocaleString()," tokens"]})]}),v("button",{onClick:()=>X(T),disabled:M===T.id,className:`cvz-rounded-lg cvz-px-3 cvz-py-1.5 cvz-text-sm cvz-font-medium ${B}`,children:M===T.id?"Redirecting...":"Buy"})]},T.id)),o&&v("button",{onClick:()=>u("status"),className:`cvz-text-xs cvz-underline cvz-self-start ${P}`,children:"Back"})]})]})})};function Hu(e,t){for(var n in t)e[n]=t[n];return e}function Yo(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return  true;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return  true;return  false}function na(e,t){var n=t(),r=fe({t:{__:n,u:t}}),i=r[0].t,o=r[1];return Lo(function(){i.__=n,i.u=t,fr(i)&&o({t:i});},[e,n,t]),Se(function(){return fr(i)&&o({t:i}),e(function(){fr(i)&&o({t:i});})},[e]),n}function fr(e){try{return !((t=e.__)===(n=e.u())&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return  true}var t,n;}function Ko(e,t){this.props=e,this.context=t;}(Ko.prototype=new ze).isPureReactComponent=true,Ko.prototype.shouldComponentUpdate=function(e,t){return Yo(this.props,e)||Yo(this.state,t)};var Xo=N.__b;N.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Xo&&Xo(e);};var ju=N.__e;N.__e=function(e,t,n,r){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k||[]),i.__c(e,t)}ju(e,t,n,r);};var Go=N.unmount;function ra(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c();}),e.__c.__H=null),(e=Hu({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=true,e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return ra(r,t,n)})),e}function ia(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return ia(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=true,e.__c.__P=n)),e}function mr(){this.__u=0,this.o=null,this.__b=null;}function oa(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function ln(){this.i=null,this.l=null;}N.unmount=function(e){var t=e.__c;t&&(t.__z=true),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Go&&Go(e);},(mr.prototype=new ze).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var i=oa(r.__v),o=false,a=function(){o||r.__z||(o=true,n.__R=null,i?i(s):s());};n.__R=a;var l=n.__P;n.__P=null;var s=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=ia(u,u.__c.__P,u.__c.__O);}var c;for(r.setState({__a:r.__b=null});c=r.o.pop();)c.__P=l,c.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a);},mr.prototype.componentWillUnmount=function(){this.o=[];},mr.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=ra(this.__b,n,r.__O=r.__P);}this.__b=null;}var i=t.__a&&Ie(be,null,e.fallback);return i&&(i.__u&=-33),[Ie(be,null,t.__a?null:e.children),i]};var Jo=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2];}};(ln.prototype=new ze).__a=function(e){var t=this,n=oa(t.__v),r=t.l.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),Jo(t,e,r)):i();};n?n(o):o();}},ln.prototype.render=function(e){this.i=null,this.l=new Map;var t=At(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},ln.prototype.componentDidUpdate=ln.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Jo(e,n,t);});};var Wu=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Vu=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,$u=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,qu=/[A-Z0-9]/g,Yu=typeof document<"u",Ku=function(e){return (typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};ze.prototype.isReactComponent=true,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(ze.prototype,e,{configurable:true,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:true,writable:true,value:t});}});});var Qo=N.event;N.event=function(e){return Qo&&(e=Qo(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var Xu={configurable:true,get:function(){return this.class}},Zo=N.vnode;N.vnode=function(e){typeof e.type=="string"&&(function(t){var n=t.props,r=t.type,i={},o=r.indexOf("-")==-1;for(var a in n){var l=n[a];if(!(a==="value"&&"defaultValue"in n&&l==null||Yu&&a==="children"&&r==="noscript"||a==="class"||a==="className")){var s=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===true?l="":s==="translate"&&l==="no"?l=false:s[0]==="o"&&s[1]==="n"?s==="ondoubleclick"?a="ondblclick":s!=="onchange"||r!=="input"&&r!=="textarea"||Ku(n.type)?s==="onfocus"?a="onfocusin":s==="onblur"?a="onfocusout":$u.test(a)&&(a=s):s=a="oninput":o&&Vu.test(a)?a=a.replace(qu,"-$&").toLowerCase():l===null&&(l=void 0),s==="oninput"&&i[a=s]&&(a="oninputCapture"),i[a]=l;}}r=="select"&&(i.multiple&&Array.isArray(i.value)&&(i.value=At(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1;})),i.defaultValue!=null&&(i.value=At(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value;}))),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",Xu)):n.className&&(i.class=i.className=n.className),t.props=i;})(e),e.$$typeof=Wu,Zo&&Zo(e);};var ea=N.__r;N.__r=function(e){ea&&ea(e),e.__c;};var ta=N.diffed;N.diffed=function(e){ta&&ta(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value);};async function*Gu(e){let t=new TextDecoder,n="",r=0;try{for(;;){let{done:i,value:o}=await e.read();if(i){if(n.trim()){let l=Ju(n);for(let s of l)r+=1,yield s;}break}n+=t.decode(o,{stream:!0});let a=n.split(`
`);n=a.pop()||"";for(let l of a)if(l.startsWith("data: ")){let s=l.slice(6).trim();if(s)try{let u=JSON.parse(s);r+=1,yield u;}catch(u){console.error("Failed to parse SSE data:",s,u);}}}}finally{e.releaseLock(),console.log(`parseSSEStream: yielded ${r} events`);}}function Ju(e){let t=[],n=e.split(`
`);for(let r of n)if(r.startsWith("data: ")){let i=r.slice(6).trim();if(i)try{t.push(JSON.parse(i));}catch(o){console.error("Failed to parse SSE data:",i,o);}}return t}async function*la(e){let{baseUrl:t,message:n,sessionId:r,persona:i,authToken:o,authType:a,maxTokens:l,clientId:s,extraContext:u,abortSignal:c}=e,f={"Content-Type":"application/json",Accept:"text/event-stream"};s&&(f["X-Client-Id"]=s),a==="apiKey"?f["X-API-Key"]=o:f.Authorization=`Bearer ${o}`;let p={message:n};!r&&a==="apiKey"&&i&&(p.persona=typeof i=="string"?{alias:i}:i),r&&(p.session=r),l&&(p.max_tokens=l),u&&Object.assign(p,u);let m;r?m="/api/chat/continuation/stream":m="/api/chat/completion/stream";let h=await fetch(`${t}${m}`,{method:"POST",headers:f,body:JSON.stringify(p),signal:c});if(!h.ok){let w=`HTTP ${h.status}: ${h.statusText}`;try{console.error(`error from completion: ${h.status} : ${h.statusText}`),w=(await h.json()).message||w;}catch{}yield {type:"error",message:`${h.status} ${w}`};return}if(!h.body){yield {type:"error",message:"No response body received"};return}let x=h.body.getReader();yield*Gu(x);}var gr="cvz_client_id",sn="cvz_client_id_v2",ca="cvz_client_id_captcha_gated",sa="cvz_client_id_last_forced_reissue",pa="issue_client_id";var Qu=["invalid client_id","client_id does not belong to this account"];function Zu(e){return typeof e=="object"&&e!==null&&"provider"in e&&"site_key"in e}function un(e){try{return localStorage.getItem(e)}catch{return null}}function cn(e,t){try{localStorage.setItem(e,t);}catch{}}function yr(e){try{localStorage.removeItem(e);}catch{}}function ec(){return un(ca)==="1"}function tc(e){cn(ca,e?"1":"0");}function fa(e){let t=e instanceof Error?e.message:typeof e=="string"?e:"";return Qu.some(n=>t.includes(n))}function nc(){let e=un(gr);if(e)return e;let t=crypto.randomUUID();return cn(gr,t),t}var hr=null;function rc(e){return hr||(hr=new Promise((t,n)=>{let r=document.createElement("script");r.src=`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(e)}`,r.async=true,r.onload=()=>t(),r.onerror=()=>n(new Error("failed to load reCAPTCHA script")),document.head.appendChild(r);})),hr}async function ic(e){return await rc(e),new Promise((t,n)=>{if(!window.grecaptcha){n(new Error("grecaptcha unavailable after script load"));return}window.grecaptcha.ready(()=>{window.grecaptcha.execute(e,{action:pa}).then(t,n);});})}var dr=null;function oc(){return dr||(dr=new Promise((e,t)=>{let n=document.createElement("script");n.src="https://challenges.cloudflare.com/turnstile/v0/api.js",n.async=true,n.onload=()=>e(),n.onerror=()=>t(new Error("failed to load Turnstile script")),document.head.appendChild(n);})),dr}async function ac(e,t){return await oc(),new Promise((n,r)=>{if(!window.turnstile){r(new Error("turnstile unavailable after script load"));return}let i=t?.getContainer?.()??null,o=i??document.createElement("div"),a=!i;a?(o.style.position="fixed",o.style.top="-9999px",o.style.left="-9999px",document.body.appendChild(o)):o.replaceChildren();let l,s=()=>{t?.onPending?.(false),l&&window.turnstile?.remove(l),a&&o.remove();};t?.onPending?.(true),l=window.turnstile.render(o,{sitekey:e,action:pa,callback:u=>{n(u),s();},"error-callback":u=>{r(u instanceof Error?u:new Error("Turnstile challenge failed")),s();}});})}function lc(e,t,n){return e==="recaptcha_v3"?ic(t):ac(t,n)}function ua(e,t,n){return fetch(`${e}/api/chat/client_id`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_public_id:t,...n?{recaptcha_token:n}:{}})})}async function xr(e,t,n){if(!t)return nc();let r=un(sn);if(r)return r;try{let i=await ua(e,t),o=!1;if(i.status===400){let l=await i.json();if(Zu(l)){o=!0;let s=await lc(l.provider,l.site_key,n);i=await ua(e,t,s);}else return console.warn("cvzWidget: client_id issuance failed (400)"),null}if(!i.ok)return console.warn(`cvzWidget: client_id issuance failed (${i.status})`),null;tc(o);let a=await i.json();return cn(sn,a.client_id),yr(gr),a.client_id}catch(i){return console.warn("cvzWidget: client_id issuance failed",i),null}}async function ma(e,t,n){if(!t)return null;if(!ec()){let r=Number(un(sa)??"0");if(Date.now()-r<36e5)return yr(sn),null}return cn(sa,String(Date.now())),yr(sn),xr(e,t,n)}var sc="cvz_chat_history";function uc(e){let t=new TextEncoder().encode(e),n="";return t.forEach(r=>{n+=String.fromCharCode(r);}),btoa(n)}function cc(e){let t=atob(e),n=Uint8Array.from(t,r=>r.charCodeAt(0));return new TextDecoder().decode(n)}function br(e=sc){async function t(r,i){try{localStorage.setItem(e,uc(JSON.stringify({sessionId:r,messages:i})));}catch{}}async function n(){let r={sessionId:"",messages:[]};try{let i=localStorage.getItem(e);if(!i)return r;let o;try{o=JSON.parse(cc(i));}catch{o=JSON.parse(i);}return {sessionId:o.sessionId||"",messages:o.messages||[]}}catch{return r}}return {save:t,load:n}}var pn="https://chat.converzen.de",da="Hi, how can I help you ?";function ga(e){let t=new Set,n=null,r={getContainer:()=>n,onPending:E=>a({captchaPending:E})},i={messages:[],sessionId:null,isOpen:e.autoOpen??false,isLoading:false,isStreaming:false,streamingMessage:"",thinkingMessage:"",activeToolCall:null,captchaPending:false,endUserAuth:(()=>{let E=No();return Ge(E)?E:null})(),showAuthNudge:false};function o(){t.forEach(E=>E());}function a(E){i={...i,...E},o();}let l={current:false},s=e.persistMessages!==false,u=br(e.historyKey),c=e.onSaveMessages??(s?u.save:async()=>{}),f=e.onLoadMessages??(s?u.load:async()=>({sessionId:"",messages:[]})),p=null,m=null,h=null,x="",w=null,y="",z=null;function S(){if(!h){let E=e.chatUrl||pn;h=xr(E,e.publicId,r);}return h}async function M(E=false){if(e.apiKey)return {token:e.apiKey,type:"apiKey"};if(!e.getToken)throw new Error("Either apiKey or getToken must be provided");let B=e.getToken;if(!E){let Q=Date.now()/1e3+5,d=m;if(d&&(d.expiresAt==null||d.expiresAt>Q))return {token:d.token,type:"bearer"}}let T=async()=>{let Q=await B(await S());return typeof Q=="string"?{token:Q,expiresAt:void 0}:Q},O;try{O=await T();}catch(Q){if(!fa(Q))throw Q;let d=e.chatUrl||pn;h=Promise.resolve(await ma(d,e.publicId,r)),O=await T();}return m=O,{token:O.token,type:"bearer"}}async function D(E=false){return !E&&Ge(i.endUserAuth)?{token:i.endUserAuth.token,type:"bearer"}:M(E)}async function k(E,B,T,O=0){try{let d=await D(O>0),Z=e.chatUrl||pn,ae=i.sessionId||"",g=la({baseUrl:Z,sessionId:ae,message:E.content,persona:e.persona,authToken:d.token,authType:d.type,clientId:await S()??void 0,extraContext:e.extraContext,abortSignal:T.signal}),le="",ke=!1,Le=!1,Ee=0,se=350,Be=async()=>{if(!Ee)return;let G=se-(Date.now()-Ee);G>0&&await new Promise(ce=>setTimeout(ce,G));};for await(let G of g){if(T.signal.aborted)break;switch(G.type){case "session_created":case "session_continued":G.session_id&&G.session_id!==ae&&(ae=G.session_id,a({sessionId:G.session_id}));break;case "thinking":G.content&&(Le||(Ee=Date.now()),Le=!0,y+=G.content,z||(z=requestAnimationFrame(()=>{let ce=y;y="",z=null,a({thinkingMessage:i.thinkingMessage+ce});})));break;case "tool_call_started":G.name&&(await Be(),Le=!0,Ee=Date.now(),a({activeToolCall:G.name}));break;case "token":G.content&&(Le&&(await Be(),Le=!1,Ee=0,y="",a({thinkingMessage:"",activeToolCall:null})),x+=G.content,le+=G.content,w||(w=requestAnimationFrame(()=>{let ce=x;x="",w=null,a({streamingMessage:i.streamingMessage+ce});})));break;case "done":{if(le&&ae){l.current=!0;let ce={content:le,role:"ASSISTANT",createdAt:new Date().toISOString(),sources:G.sources},de=[...B,ce];a({messages:de,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="",setTimeout(()=>{l.current=!1;},0),await c(ae,de);}else a({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="";p=null;return}case "error":{let ce=G.code||"",de=G.message||"",pt=O===0&&Ge(i.endUserAuth);if((ce==="auth_failed"||de.includes("401")||de.includes("403")||de.includes("Unauthorized")||de.includes("Forbidden"))&&O<1&&(e.getToken&&!e.apiKey||pt)){m=null,pt&&W(),ke=!0;break}if(ce==="rate_limited"&&e.endUserLicensing){a({showAuthNudge:!0,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="",p=null;return}let Kn={content:de||"An error occurred",role:"SYSTEM",createdAt:new Date().toISOString()},_t=[...B,Kn];a({messages:_t,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="",await c(ae||"",_t),p=null;return}}}if(ke&&O<1)return k(E,B,T,O+1);!T.signal.aborted&&!ke&&(a({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),y="",p=null);}catch(d){let Z=O===0&&Ge(i.endUserAuth);if(d instanceof Error&&(d.message.includes("401")||d.message.includes("403"))&&O<1&&(e.getToken&&!e.apiKey||Z))return m=null,Z&&W(),k(E,B,T,O+1);throw d}}async function V(E){if(!E.trim()||i.isStreaming)return;p&&p.abort();let B={content:E.trim(),role:"USER",createdAt:new Date().toISOString()},T=[...i.messages,B];a({messages:T,isLoading:true,isStreaming:true,streamingMessage:"",thinkingMessage:"",activeToolCall:null}),y="";try{let O=new AbortController;p=O,await k(B,T,O);}catch(O){if(O instanceof Error&&O.name==="AbortError"){a({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),y="",p=null;return}let Q={content:`Error: ${O instanceof Error?O.message:"Failed to send message"}`,role:"SYSTEM",createdAt:new Date().toISOString()},d=[...T,Q];a({messages:d,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),y="",await c(i.sessionId||"",d),p=null;}}async function q(){p&&(p.abort(),p=null),a({messages:[{content:e.initialGreeting||da,role:"SYSTEM",createdAt:new Date().toISOString()}],streamingMessage:"",thinkingMessage:"",activeToolCall:null,sessionId:null,isStreaming:false,isLoading:false}),y="",await c("",[]);}function j(){a({isOpen:true}),S();}function b(){a({isOpen:false});}function X(E){Fo(E),a({endUserAuth:E,showAuthNudge:false});}function W(){Oo(),a({endUserAuth:null});}function P(E){n=E;}if((async()=>{try{let E=await f(),B=[],T=null;E&&typeof E=="object"&&"messages"in E&&"sessionId"in E?(B=E.messages||[],T=E.sessionId||null):Array.isArray(E)&&(B=E),B.length===0&&(B=[{content:e.initialGreeting||da,role:"SYSTEM",createdAt:new Date().toISOString()}]),a({sessionId:T,messages:B});}catch(E){console.error("Failed to load messages:",E);}})(),e.endUserLicensing){let E=Ho();if(E){let B=e.chatUrl||pn;an(B,E.pendingId).finally(()=>{jo();});}}function U(){p&&(p.abort(),p=null),w&&(cancelAnimationFrame(w),w=null),z&&(cancelAnimationFrame(z),z=null);}return {getState:()=>i,subscribe(E){return t.add(E),()=>t.delete(E)},sendMessage:V,open:j,close:b,clearHistory:q,authenticateEndUser:X,deauthenticateEndUser:W,getTenantAuthToken:M,setCaptchaContainer:P,isFinalizingRef:l,dispose:U}}function ya(e){let t=rn(()=>ga(e),[e]),n=na(t.subscribe,t.getState);return Se(()=>()=>t.dispose(),[t]),{...n,sendMessage:t.sendMessage,open:t.open,close:t.close,clearHistory:t.clearHistory,authenticateEndUser:t.authenticateEndUser,deauthenticateEndUser:t.deauthenticateEndUser,getTenantAuthToken:t.getTenantAuthToken,setCaptchaContainer:t.setCaptchaContainer,isFinalizingRef:t.isFinalizingRef,dispose:t.dispose}}var pc="calc(100vw - 2rem)",fc="calc(100dvh - 8rem)",xa=e=>{if(!e?.position)return {bottom:"1rem",right:"1rem"};if(typeof e.position=="string")switch(e.position){case "bottom-right":return {bottom:"1rem",right:"1rem"};case "bottom-left":return {bottom:"1rem",left:"1rem"};case "top-right":return {top:"1rem",right:"1rem"};case "top-left":return {top:"1rem",left:"1rem"};default:return {bottom:"1rem",right:"1rem"}}else {let t={};return e.position.bottom&&(t.bottom=e.position.bottom),e.position.top&&(t.top=e.position.top),e.position.left&&(t.left=e.position.left),e.position.right&&(t.right=e.position.right),t}},ba=e=>{let t={maxWidth:pc,maxHeight:fc};if(!e?.dialogSize)return {width:"350px",height:"500px",...t};if(typeof e.dialogSize=="string")switch(e.dialogSize){case "small":return {width:"300px",height:"400px",...t};case "medium":return {width:"350px",height:"500px",...t};case "large":return {width:"400px",height:"600px",...t};default:return {width:"350px",height:"500px",...t}}else return {width:`${Math.max(250,e.dialogSize.width)}px`,height:`${Math.max(300,e.dialogSize.height)}px`,...t}},va=e=>e?.frameColor||"#E5E7EB",wa=(e,t)=>{let n=e?.buttonColor;return t?{backgroundColor:n?.open||"#1F2937"}:{backgroundColor:n?.normal||"#2563EB","--hover-color":n?.hover||"#1D4ED8"}};function ka(e,t){let n={};return (e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===false?"":" ")).trim()}var mc=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,hc=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,dc={};function fn(e,t){return ((dc).jsx?hc:mc).test(e)}var gc=/[ \t\n\f\r]/g;function vr(e){return typeof e=="object"?e.type==="text"?_a(e.value):false:_a(e)}function _a(e){return e.replace(gc,"")===""}var Ne=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r);}};Ne.prototype.normal={};Ne.prototype.property={};Ne.prototype.space=void 0;function wr(e,t){let n={},r={};for(let i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Ne(n,r,t)}function Tt(e){return e.toLowerCase()}var pe=class{constructor(t,n){this.attribute=n,this.property=t;}};pe.prototype.attribute="";pe.prototype.booleanish=false;pe.prototype.boolean=false;pe.prototype.commaOrSpaceSeparated=false;pe.prototype.commaSeparated=false;pe.prototype.defined=false;pe.prototype.mustUseProperty=false;pe.prototype.number=false;pe.prototype.overloadedBoolean=false;pe.prototype.property="";pe.prototype.spaceSeparated=false;pe.prototype.space=void 0;var Pt={};io(Pt,{boolean:()=>F,booleanish:()=>te,commaOrSpaceSeparated:()=>ye,commaSeparated:()=>Fe,number:()=>C,overloadedBoolean:()=>mn,spaceSeparated:()=>K});var yc=0,F=Je(),te=Je(),mn=Je(),C=Je(),K=Je(),Fe=Je(),ye=Je();function Je(){return 2**++yc}var kr=Object.keys(Pt),Qe=class extends pe{constructor(t,n,r,i){let o=-1;if(super(t,n),za(this,"space",i),typeof r=="number")for(;++o<kr.length;){let a=kr[o];za(this,kr[o],(r&Pt[a])===Pt[a]);}}};Qe.prototype.defined=true;function za(e,t,n){n&&(e[t]=n);}function ve(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let o=new Qe(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=true),t[r]=o,n[Tt(r)]=r,n[Tt(o.attribute)]=r;}return new Ne(t,n,e.space)}var _r=ve({properties:{ariaActiveDescendant:null,ariaAtomic:te,ariaAutoComplete:null,ariaBusy:te,ariaChecked:te,ariaColCount:C,ariaColIndex:C,ariaColSpan:C,ariaControls:K,ariaCurrent:null,ariaDescribedBy:K,ariaDetails:null,ariaDisabled:te,ariaDropEffect:K,ariaErrorMessage:null,ariaExpanded:te,ariaFlowTo:K,ariaGrabbed:te,ariaHasPopup:null,ariaHidden:te,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:K,ariaLevel:C,ariaLive:null,ariaModal:te,ariaMultiLine:te,ariaMultiSelectable:te,ariaOrientation:null,ariaOwns:K,ariaPlaceholder:null,ariaPosInSet:C,ariaPressed:te,ariaReadOnly:te,ariaRelevant:null,ariaRequired:te,ariaRoleDescription:K,ariaRowCount:C,ariaRowIndex:C,ariaRowSpan:C,ariaSelected:te,ariaSetSize:C,ariaSort:null,ariaValueMax:C,ariaValueMin:C,ariaValueNow:C,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function hn(e,t){return t in e?e[t]:t}function dn(e,t){return hn(e,t.toLowerCase())}var Sa=ve({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Fe,acceptCharset:K,accessKey:K,action:null,allow:null,allowFullScreen:F,allowPaymentRequest:F,allowUserMedia:F,alpha:F,alt:null,as:null,async:F,autoCapitalize:null,autoComplete:K,autoFocus:F,autoPlay:F,blocking:K,capture:null,charSet:null,checked:F,cite:null,className:K,closedBy:null,colorSpace:null,cols:C,colSpan:C,command:null,commandFor:null,content:null,contentEditable:te,controls:F,controlsList:K,coords:C|Fe,crossOrigin:null,data:null,dateTime:null,decoding:null,default:F,defer:F,dir:null,dirName:null,disabled:F,download:mn,draggable:te,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:F,formTarget:null,headers:K,height:C,hidden:mn,high:C,href:null,hrefLang:null,htmlFor:K,httpEquiv:K,id:null,imageSizes:null,imageSrcSet:null,inert:F,inputMode:null,integrity:null,is:null,isMap:F,itemId:null,itemProp:K,itemRef:K,itemScope:F,itemType:K,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:F,low:C,manifest:null,max:null,maxLength:C,media:null,method:null,min:null,minLength:C,multiple:F,muted:F,name:null,nonce:null,noModule:F,noValidate:F,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:F,optimum:C,pattern:null,ping:K,placeholder:null,playsInline:F,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:F,referrerPolicy:null,rel:K,required:F,reversed:F,rows:C,rowSpan:C,sandbox:K,scope:null,scoped:F,seamless:F,selected:F,shadowRootClonable:F,shadowRootCustomElementRegistry:F,shadowRootDelegatesFocus:F,shadowRootMode:null,shadowRootSerializable:F,shape:null,size:C,sizes:null,slot:null,span:C,spellCheck:te,src:null,srcDoc:null,srcLang:null,srcSet:null,start:C,step:null,style:null,tabIndex:C,target:null,title:null,translate:null,type:null,typeMustMatch:F,useMap:null,value:te,width:C,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:K,axis:null,background:null,bgColor:null,border:C,borderColor:null,bottomMargin:C,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:F,declare:F,event:null,face:null,frame:null,frameBorder:null,hSpace:C,leftMargin:C,link:null,longDesc:null,lowSrc:null,marginHeight:C,marginWidth:C,noResize:F,noHref:F,noShade:F,noWrap:F,object:null,profile:null,prompt:null,rev:null,rightMargin:C,rules:null,scheme:null,scrolling:te,standby:null,summary:null,text:null,topMargin:C,valueType:null,version:null,vAlign:null,vLink:null,vSpace:C,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:F,disablePictureInPicture:F,disableRemotePlayback:F,exportParts:Fe,part:K,prefix:null,property:null,results:C,security:null,unselectable:null},space:"html",transform:dn});var Ca=ve({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ye,accentHeight:C,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:C,amplitude:C,arabicForm:null,ascent:C,attributeName:null,attributeType:null,azimuth:C,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:C,by:null,calcMode:null,capHeight:C,className:K,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:C,diffuseConstant:C,direction:null,display:null,dur:null,divisor:C,dominantBaseline:null,download:F,dx:null,dy:null,edgeMode:null,editable:null,elevation:C,enableBackground:null,end:null,event:null,exponent:C,externalResourcesRequired:null,fill:null,fillOpacity:C,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Fe,g2:Fe,glyphName:Fe,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:C,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:C,horizOriginX:C,horizOriginY:C,id:null,ideographic:C,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:C,k:C,k1:C,k2:C,k3:C,k4:C,kernelMatrix:ye,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:C,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:C,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:C,overlineThickness:C,paintOrder:null,panose1:null,path:null,pathLength:C,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:K,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:C,pointsAtY:C,pointsAtZ:C,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ye,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ye,rev:ye,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ye,requiredFeatures:ye,requiredFonts:ye,requiredFormats:ye,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:C,specularExponent:C,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:C,strikethroughThickness:C,string:null,stroke:null,strokeDashArray:ye,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:C,strokeOpacity:C,strokeWidth:null,style:null,surfaceScale:C,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ye,tabIndex:C,tableValues:null,target:null,targetX:C,targetY:C,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ye,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:C,underlineThickness:C,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:C,values:null,vAlphabetic:C,vMathematical:C,vectorEffect:null,vHanging:C,vIdeographic:C,version:null,vertAdvY:C,vertOriginX:C,vertOriginY:C,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:C,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:hn});var zr=ve({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return "xlink:"+t.slice(5).toLowerCase()}});var Sr=ve({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:dn});var Cr=ve({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return "xml:"+t.slice(3).toLowerCase()}});var Er={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var xc=/[A-Z]/g,Ea=/-[a-z]/g,bc=/^data[-\w.:]+$/i;function Ir(e,t){let n=Tt(t),r=t,i=pe;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&bc.test(t)){if(t.charAt(4)==="-"){let o=t.slice(5).replace(Ea,wc);r="data"+o.charAt(0).toUpperCase()+o.slice(1);}else {let o=t.slice(4);if(!Ea.test(o)){let a=o.replace(xc,vc);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a;}}i=Qe;}return new i(r,t)}function vc(e){return "-"+e.toLowerCase()}function wc(e){return e.charAt(1).toUpperCase()}var Ia=wr([_r,Sa,zr,Sr,Cr],"html"),gn=wr([_r,Ca,zr,Sr,Cr],"svg");function Aa(e){return e.join(" ").trim()}var Va=oo(Ba());var xn=Ha("end"),ht=Ha("start");function Ha(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return {line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Pr(e){let t=ht(e),n=xn(e);if(t&&n)return {start:t,end:n}}function je(e){return !e||typeof e!="object"?"":"position"in e||"type"in e?ja(e.position):"start"in e||"end"in e?ja(e):"line"in e||"column"in e?Lr(e):""}function Lr(e){return Wa(e&&e.line)+":"+Wa(e&&e.column)}function ja(e){return Lr(e&&e.start)+"-"+Lr(e&&e.end)}function Wa(e){return e&&typeof e=="number"?e:1}var ie=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=false;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=true,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){let s=r.indexOf(":");s===-1?o.ruleId=r:(o.source=r.slice(0,s),o.ruleId=r.slice(s+1));}if(!o.place&&o.ancestors&&o.ancestors){let s=o.ancestors[o.ancestors.length-1];s&&(o.place=s.position);}let l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=je(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0;}};ie.prototype.file="";ie.prototype.name="";ie.prototype.reason="";ie.prototype.message="";ie.prototype.stack="";ie.prototype.column=void 0;ie.prototype.line=void 0;ie.prototype.ancestors=void 0;ie.prototype.cause=void 0;ie.prototype.fatal=void 0;ie.prototype.place=void 0;ie.prototype.ruleId=void 0;ie.prototype.source=void 0;var Rr={}.hasOwnProperty,Yc=new Map,Kc=/[A-Z]/g,Xc=new Set(["table","tbody","thead","tfoot","tr"]),Gc=new Set(["td","th"]),$a="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Dr(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=ip(n,t.jsxDEV);}else {if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=rp(n,t.jsx,t.jsxs);}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||false,passKeys:t.passKeys!==false,passNode:t.passNode||false,schema:t.space==="svg"?gn:Ia,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==false},o=qa(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function qa(e,t,n){if(t.type==="element")return Jc(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Qc(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return ep(e,t,n);if(t.type==="mdxjsEsm")return Zc(e,t);if(t.type==="root")return tp(e,t,n);if(t.type==="text")return np(e,t)}function Jc(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=gn,e.schema=i),e.ancestors.push(t);let o=Ka(e,t.tagName,false),a=op(e,t),l=Nr(e,t);return Xc.has(t.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!vr(s):true})),Ya(e,a,o,t),Mr(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Qc(e,t){if(t.data&&t.data.estree&&e.evaluater){let r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Rt(e,t.position);}function Zc(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Rt(e,t.position);}function ep(e,t,n){let r=e.schema,i=r;t.name==="svg"&&r.space==="html"&&(i=gn,e.schema=i),e.ancestors.push(t);let o=t.name===null?e.Fragment:Ka(e,t.name,true),a=ap(e,t),l=Nr(e,t);return Ya(e,a,o,t),Mr(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function tp(e,t,n){let r={};return Mr(r,Nr(e,t)),e.create(t,e.Fragment,r,n)}function np(e,t){return t.value}function Ya(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r);}function Mr(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n);}}function rp(e,t,n){return r;function r(i,o,a,l){let u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function ip(e,t){return n;function n(r,i,o,a){let l=Array.isArray(o.children),s=ht(r);return t(i,o,a,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function op(e,t){let n={},r,i;for(i in t.properties)if(i!=="children"&&Rr.call(t.properties,i)){let o=lp(e,i,t.properties[i]);if(o){let[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&Gc.has(t.tagName)?r=l:n[a]=l;}}if(r){let o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r;}return n}function ap(e,t){let n={};for(let r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){let o=r.data.estree.body[0];o.type;let a=o.expression;a.type;let l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument));}else Rt(e,t.position);else {let i=r.name,o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){let l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression);}else Rt(e,t.position);else o=r.value===null?true:r.value;n[i]=o;}return n}function Nr(e,t){let n=[],r=-1,i=e.passKeys?new Map:Yc;for(;++r<t.children.length;){let o=t.children[r],a;if(e.passKeys){let s=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(s){let u=i.get(s)||0;a=s+"-"+u,i.set(s,u+1);}}let l=qa(e,o,a);l!==void 0&&n.push(l);}return n}function lp(e,t,n){let r=Ir(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?ka(n):Aa(n)),r.property==="style"){let i=typeof n=="object"?n:sp(e,String(n));return e.stylePropertyNameCase==="css"&&(i=up(i)),["style",i]}return [e.elementAttributeNameCase==="react"&&r.space?Er[r.property]||r.property:r.attribute,n]}}function sp(e,t){try{return (0,Va.default)(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return {};let r=n,i=new ie("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=$a+"#cannot-parse-style-attribute",i}}function Ka(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){let i=t.split("."),o=-1,a;for(;++o<i.length;){let l=fn(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:false}:l;}r=a;}else r=fn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){let i=r.value;return Rr.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Rt(e);}function Rt(e,t){let n=new ie("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=$a+"#cannot-handle-mdx-estrees-without-createevaluater",n}function up(e){let t={},n;for(n in e)Rr.call(e,n)&&(t[cp(n)]=e[n]);return t}function cp(e){let t=e.replace(Kc,pp);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function pp(e){return "-"+e.toLowerCase()}var Dt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};var fp={};function et(e,t){let n=fp,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:true,i=typeof n.includeHtml=="boolean"?n.includeHtml:true;return Ga(e,r,i)}function Ga(e,t,n){if(mp(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Xa(e.children,t,n)}return Array.isArray(e)?Xa(e,t,n):""}function Xa(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=Ga(e[i],t,n);return r.join("")}function mp(e){return !!(e&&typeof e=="object")}var Ja=document.createElement("i");function dt(e){let t="&"+e+";";Ja.innerHTML=t;let n=Ja.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?false:n}function oe(e,t,n,r){let i=e.length,o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4;}function ge(e,t){return e.length>0?(oe(e,e.length,0,t),e):t}var Qa={}.hasOwnProperty;function bn(e){let t={},n=-1;for(;++n<e.length;)hp(t,e[n]);return t}function hp(e,t){let n;for(n in t){let i=(Qa.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n],a;if(o)for(a in o){Qa.call(i,a)||(i[a]=[]);let l=o[a];dp(i[a],Array.isArray(l)?l:l?[l]:[]);}}}function dp(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);oe(e,0,0,r);}function vn(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function me(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var ue=We(/[A-Za-z]/),ne=We(/[\dA-Za-z]/),Za=We(/[#-'*+\--9=?A-Z^-~]/);function tt(e){return e!==null&&(e<32||e===127)}var Mt=We(/\d/),el=We(/[\dA-Fa-f]/),tl=We(/[!-/:-@[-`{-~]/);function A(e){return e!==null&&e<-2}function $(e){return e!==null&&(e<0||e===32)}function R(e){return e===-2||e===-1||e===32}var nt=We(/\p{P}|\p{S}/u),Ae=We(/\s/);function We(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function we(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let o=e.charCodeAt(n),a="";if(o===37&&ne(e.charCodeAt(n+1))&&ne(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){let l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),i=1):a="\uFFFD";}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0);}return t.join("")+e.slice(r)}function L(e,t,n,r){let i=r?r-1:Number.POSITIVE_INFINITY,o=0;return a;function a(s){return R(s)?(e.enter(n),l(s)):t(s)}function l(s){return R(s)&&o++<i?(e.consume(s),l):(e.exit(n),t(s))}}var nl={tokenize:gp};function gp(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),L(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){let s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return A(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}var il={tokenize:yp},rl={tokenize:xp};function yp(e){let t=this,n=[],r=0,i,o,a;return l;function l(S){if(r<n.length){let M=n[r];return t.containerState=M[1],e.attempt(M[0].continuation,s,u)(S)}return u(S)}function s(S){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&z();let M=t.events.length,D=M,k;for(;D--;)if(t.events[D][0]==="exit"&&t.events[D][1].type==="chunkFlow"){k=t.events[D][1].end;break}y(r);let V=M;for(;V<t.events.length;)t.events[V][1].end={...k},V++;return oe(t.events,D+1,0,t.events.slice(M)),t.events.length=V,u(S)}return l(S)}function u(S){if(r===n.length){if(!i)return p(S);if(i.currentConstruct&&i.currentConstruct.concrete)return h(S);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack);}return t.containerState={},e.check(rl,c,f)(S)}function c(S){return i&&z(),y(r),p(S)}function f(S){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,h(S)}function p(S){return t.containerState={},e.attempt(rl,m,h)(S)}function m(S){return r++,n.push([t.currentConstruct,t.containerState]),p(S)}function h(S){if(S===null){i&&z(),y(0),e.consume(S);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),x(S)}function x(S){if(S===null){w(e.exit("chunkFlow"),true),y(0),e.consume(S);return}return A(S)?(e.consume(S),w(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(S),x)}function w(S,M){let D=t.sliceStream(S);if(M&&D.push(null),S.previous=o,o&&(o.next=S),o=S,i.defineSkip(S.start),i.write(D),t.parser.lazy[S.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<a&&(!i.events[k][1].end||i.events[k][1].end.offset>a))return;let V=t.events.length,q=V,j,b;for(;q--;)if(t.events[q][0]==="exit"&&t.events[q][1].type==="chunkFlow"){if(j){b=t.events[q][1].end;break}j=true;}for(y(r),k=V;k<t.events.length;)t.events[k][1].end={...b},k++;oe(t.events,q+1,0,t.events.slice(V)),t.events.length=k;}}function y(S){let M=n.length;for(;M-- >S;){let D=n[M];t.containerState=D[1],D[0].exit.call(t,e);}n.length=S;}function z(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0;}}function xp(e,t,n){return L(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Oe(e){if(e===null||$(e)||Ae(e))return 1;if(nt(e))return 2}function Ve(e,t,n){let r=[],i=-1;for(;++i<e.length;){let o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o));}return t}var Nt={name:"attention",resolveAll:bp,tokenize:vp};function bp(e,t){let n=-1,r,i,o,a,l,s,u,c;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let f={...e[r][1].end},p={...e[n][1].start};ol(f,-s),ol(p,s),a={type:s>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:p},o={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=ge(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=ge(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=ge(u,Ve(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=ge(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(c=2,u=ge(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):c=0,oe(e,r-1,n-r+3,u),n=r+u.length-c-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function vp(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Oe(r),o;return a;function a(s){return o=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===o)return e.consume(s),l;let u=e.exit("attentionSequence"),c=Oe(s),f=!c||c===2&&i||n.includes(s),p=!i||i===2&&c||n.includes(r);return u._open=!!(o===42?f:f&&(i||!p)),u._close=!!(o===42?p:p&&(c||!f)),t(s)}}function ol(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t;}var Fr={name:"autolink",tokenize:wp};function wp(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return ue(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||ne(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,s):(m===43||m===45||m===46||ne(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function s(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||tt(m)?n(m):(e.consume(m),s)}function u(m){return m===64?(e.consume(m),c):Za(m)?(e.consume(m),u):n(m)}function c(m){return ne(m)?f(m):n(m)}function f(m){return m===46?(e.consume(m),r=0,c):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):p(m)}function p(m){if((m===45||ne(m))&&r++<63){let h=m===45?p:f;return e.consume(m),h}return n(m)}}var Te={partial:true,tokenize:kp};function kp(e,t,n){return r;function r(o){return R(o)?L(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||A(o)?t(o):n(o)}}var wn={continuation:{tokenize:zp},exit:Sp,name:"blockQuote",tokenize:_p};function _p(e,t,n){let r=this;return i;function i(a){if(a===62){let l=r.containerState;return l.open||(e.enter("blockQuote",{_container:true}),l.open=true),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return R(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function zp(e,t,n){let r=this;return i;function i(a){return R(a)?L(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(wn,t,n)(a)}}function Sp(e){e.exit("blockQuote");}var kn={name:"characterEscape",tokenize:Cp};function Cp(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return tl(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}var _n={name:"characterReference",tokenize:Ep};function Ep(e,t,n){let r=this,i=0,o,a;return l;function l(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),s}function s(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=ne,c(f))}function u(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=el,c):(e.enter("characterReferenceValue"),o=7,a=Mt,c(f))}function c(f){if(f===59&&i){let p=e.exit("characterReferenceValue");return a===ne&&!dt(r.sliceSerialize(p))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(f)&&i++<o?(e.consume(f),c):n(f)}}var al={partial:true,tokenize:Ap},zn={concrete:true,name:"codeFenced",tokenize:Ip};function Ip(e,t,n){let r=this,i={partial:true,tokenize:D},o=0,a=0,l;return s;function s(k){return u(k)}function u(k){let V=r.events[r.events.length-1];return o=V&&V[1].type==="linePrefix"?V[2].sliceSerialize(V[1],true).length:0,l=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(k)}function c(k){return k===l?(a++,e.consume(k),c):a<3?n(k):(e.exit("codeFencedFenceSequence"),R(k)?L(e,f,"whitespace")(k):f(k))}function f(k){return k===null||A(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(al,x,M)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(k))}function p(k){return k===null||A(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(k)):R(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),L(e,m,"whitespace")(k)):k===96&&k===l?n(k):(e.consume(k),p)}function m(k){return k===null||A(k)?f(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),h(k))}function h(k){return k===null||A(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(k)):k===96&&k===l?n(k):(e.consume(k),h)}function x(k){return e.attempt(i,M,w)(k)}function w(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),y}function y(k){return o>0&&R(k)?L(e,z,"linePrefix",o+1)(k):z(k)}function z(k){return k===null||A(k)?e.check(al,x,M)(k):(e.enter("codeFlowValue"),S(k))}function S(k){return k===null||A(k)?(e.exit("codeFlowValue"),z(k)):(e.consume(k),S)}function M(k){return e.exit("codeFenced"),t(k)}function D(k,V,q){let j=0;return b;function b(E){return k.enter("lineEnding"),k.consume(E),k.exit("lineEnding"),X}function X(E){return k.enter("codeFencedFence"),R(E)?L(k,W,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):W(E)}function W(E){return E===l?(k.enter("codeFencedFenceSequence"),P(E)):q(E)}function P(E){return E===l?(j++,k.consume(E),P):j>=a?(k.exit("codeFencedFenceSequence"),R(E)?L(k,U,"whitespace")(E):U(E)):q(E)}function U(E){return E===null||A(E)?(k.exit("codeFencedFence"),V(E)):q(E)}}}function Ap(e,t,n){let r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}var Ft={name:"codeIndented",tokenize:Pp},Tp={partial:true,tokenize:Lp};function Pp(e,t,n){let r=this;return i;function i(u){return e.enter("codeIndented"),L(e,o,"linePrefix",5)(u)}function o(u){let c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],true).length>=4?a(u):n(u)}function a(u){return u===null?s(u):A(u)?e.attempt(Tp,a,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||A(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),t(u)}}function Lp(e,t,n){let r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):A(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):L(e,o,"linePrefix",5)(a)}function o(a){let l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(a):A(a)?i(a):n(a)}}var Or={name:"codeText",previous:Dp,resolve:Rp,tokenize:Mp};function Rp(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Dp(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Mp(e,t,n){let i=0,o,a;return l;function l(p){return e.enter("codeText"),e.enter("codeTextSequence"),s(p)}function s(p){return p===96?(e.consume(p),i++,s):(e.exit("codeTextSequence"),u(p))}function u(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),u):p===96?(a=e.enter("codeTextSequence"),o=0,f(p)):A(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(p))}function c(p){return p===null||p===32||p===96||A(p)?(e.exit("codeTextData"),u(p)):(e.consume(p),c)}function f(p){return p===96?(e.consume(p),o++,f):o===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(a.type="codeTextData",c(p))}}var Sn=class{constructor(t){this.left=t?[...t]:[],this.right=[];}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let i=n||0;this.setCursor(Math.trunc(t));let o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ot(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t);}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ot(this.left,t);}unshift(t){this.setCursor(0),this.right.push(t);}unshiftMany(t){this.setCursor(0),Ot(this.right,t.reverse());}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,Number.POSITIVE_INFINITY);Ot(this.right,n.reverse());}else {let n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ot(this.left,n.reverse());}}};function Ot(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4;}function Cn(e){let t={},n=-1,r,i,o,a,l,s,u,c=new Sn(e);for(;++n<c.length;){for(;n in t;)n=t[n];if(r=c.get(n),n&&r[1].type==="chunkFlow"&&c.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,o=0,o<s.length&&s[o][1].type==="lineEndingBlank"&&(o+=2),o<s.length&&s[o][1].type==="content"))for(;++o<s.length&&s[o][1].type!=="content";)s[o][1].type==="chunkText"&&(s[o][1]._isInFirstContentOfListItem=true,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Np(c,n)),n=t[n],u=true);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=c.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(c.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...c.get(i)[1].start},l=c.slice(i,n),l.unshift(r),c.splice(i,n-i+1,l));}}return oe(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function Np(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,o=[],a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=true));let l=a.events,s=[],u={},c,f,p=-1,m=n,h=0,x=0,w=[x];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(c=r.sliceStream(m),m.next||c.push(null),f&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=true),a.write(c),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),f=m,m=m.next;}for(m=n;++p<l.length;)l[p][0]==="exit"&&l[p-1][0]==="enter"&&l[p][1].type===l[p-1][1].type&&l[p][1].start.line!==l[p][1].end.line&&(x=p+1,w.push(x),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):w.pop(),p=w.length;p--;){let y=l.slice(w[p],w[p+1]),z=o.pop();s.push([z,z+y.length-1]),e.splice(z,2,y);}for(s.reverse(),p=-1;++p<s.length;)u[h+s[p][0]]=h+s[p][1],h+=s[p][1]-s[p][0]-1;return u}var Ur={resolve:Op,tokenize:Up},Fp={partial:true,tokenize:Bp};function Op(e){return Cn(e),e}function Up(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):A(l)?e.check(Fp,a,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Bp(e,t,n){let r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),L(e,o,"linePrefix")}function o(a){if(a===null||A(a))return n(a);let l=r.events[r.events.length-1];return !r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function En(e,t,n,r,i,o,a,l,s){let u=s||Number.POSITIVE_INFINITY,c=0;return f;function f(y){return y===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(y),e.exit(o),p):y===null||y===32||y===41||tt(y)?n(y):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),x(y))}function p(y){return y===62?(e.enter(o),e.consume(y),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(y))}function m(y){return y===62?(e.exit("chunkString"),e.exit(l),p(y)):y===null||y===60||A(y)?n(y):(e.consume(y),y===92?h:m)}function h(y){return y===60||y===62||y===92?(e.consume(y),m):m(y)}function x(y){return !c&&(y===null||y===41||$(y))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(y)):c<u&&y===40?(e.consume(y),c++,x):y===41?(e.consume(y),c--,x):y===null||y===32||y===40||tt(y)?n(y):(e.consume(y),y===92?w:x)}function w(y){return y===40||y===41||y===92?(e.consume(y),x):x(y)}}function In(e,t,n,r,i,o){let a=this,l=0,s;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),c}function c(m){return l>999||m===null||m===91||m===93&&!s||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):A(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),f(m))}function f(m){return m===null||m===91||m===93||A(m)||l++>999?(e.exit("chunkString"),c(m)):(e.consume(m),s||(s=!R(m)),m===92?p:f)}function p(m){return m===91||m===92||m===93?(e.consume(m),l++,f):f(m)}}function An(e,t,n,r,i,o){let a;return l;function l(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),a=p===40?41:p,s):n(p)}function s(p){return p===a?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(o),u(p))}function u(p){return p===a?(e.exit(o),s(a)):p===null?n(p):A(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),L(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===a||p===null||A(p)?(e.exit("chunkString"),u(p)):(e.consume(p),p===92?f:c)}function f(p){return p===a||p===92?(e.consume(p),c):c(p)}}function rt(e,t){let n;return r;function r(i){return A(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=true,r):R(i)?L(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}var Br={name:"definition",tokenize:jp},Hp={partial:true,tokenize:Wp};function jp(e,t,n){let r=this,i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return In.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return i=me(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),s):n(m)}function s(m){return $(m)?rt(e,u)(m):u(m)}function u(m){return En(e,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function c(m){return e.attempt(Hp,f,f)(m)}function f(m){return R(m)?L(e,p,"whitespace")(m):p(m)}function p(m){return m===null||A(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Wp(e,t,n){return r;function r(l){return $(l)?rt(e,i)(l):n(l)}function i(l){return An(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return R(l)?L(e,a,"whitespace")(l):a(l)}function a(l){return l===null||A(l)?t(l):n(l)}}var Hr={name:"hardBreakEscape",tokenize:Vp};function Vp(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return A(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}var jr={name:"headingAtx",resolve:$p,tokenize:qp};function $p(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},oe(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function qp(e,t,n){let r=0;return i;function i(c){return e.enter("atxHeading"),o(c)}function o(c){return e.enter("atxHeadingSequence"),a(c)}function a(c){return c===35&&r++<6?(e.consume(c),a):c===null||$(c)?(e.exit("atxHeadingSequence"),l(c)):n(c)}function l(c){return c===35?(e.enter("atxHeadingSequence"),s(c)):c===null||A(c)?(e.exit("atxHeading"),t(c)):R(c)?L(e,l,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function s(c){return c===35?(e.consume(c),s):(e.exit("atxHeadingSequence"),l(c))}function u(c){return c===null||c===35||$(c)?(e.exit("atxHeadingText"),l(c)):(e.consume(c),u)}}var ll=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Wr=["pre","script","style","textarea"];var Vr={concrete:true,name:"htmlFlow",resolveTo:Xp,tokenize:Gp},Yp={partial:true,tokenize:Qp},Kp={partial:true,tokenize:Jp};function Xp(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Gp(e,t,n){let r=this,i,o,a,l,s;return u;function u(g){return c(g)}function c(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),f}function f(g){return g===33?(e.consume(g),p):g===47?(e.consume(g),o=true,x):g===63?(e.consume(g),i=3,r.interrupt?t:d):ue(g)?(e.consume(g),a=String.fromCharCode(g),w):n(g)}function p(g){return g===45?(e.consume(g),i=2,m):g===91?(e.consume(g),i=5,l=0,h):ue(g)?(e.consume(g),i=4,r.interrupt?t:d):n(g)}function m(g){return g===45?(e.consume(g),r.interrupt?t:d):n(g)}function h(g){let le="CDATA[";return g===le.charCodeAt(l++)?(e.consume(g),l===le.length?r.interrupt?t:W:h):n(g)}function x(g){return ue(g)?(e.consume(g),a=String.fromCharCode(g),w):n(g)}function w(g){if(g===null||g===47||g===62||$(g)){let le=g===47,ke=a.toLowerCase();return !le&&!o&&Wr.includes(ke)?(i=1,r.interrupt?t(g):W(g)):ll.includes(a.toLowerCase())?(i=6,le?(e.consume(g),y):r.interrupt?t(g):W(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):o?z(g):S(g))}return g===45||ne(g)?(e.consume(g),a+=String.fromCharCode(g),w):n(g)}function y(g){return g===62?(e.consume(g),r.interrupt?t:W):n(g)}function z(g){return R(g)?(e.consume(g),z):b(g)}function S(g){return g===47?(e.consume(g),b):g===58||g===95||ue(g)?(e.consume(g),M):R(g)?(e.consume(g),S):b(g)}function M(g){return g===45||g===46||g===58||g===95||ne(g)?(e.consume(g),M):D(g)}function D(g){return g===61?(e.consume(g),k):R(g)?(e.consume(g),D):S(g)}function k(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),s=g,V):R(g)?(e.consume(g),k):q(g)}function V(g){return g===s?(e.consume(g),s=null,j):g===null||A(g)?n(g):(e.consume(g),V)}function q(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||$(g)?D(g):(e.consume(g),q)}function j(g){return g===47||g===62||R(g)?S(g):n(g)}function b(g){return g===62?(e.consume(g),X):n(g)}function X(g){return g===null||A(g)?W(g):R(g)?(e.consume(g),X):n(g)}function W(g){return g===45&&i===2?(e.consume(g),B):g===60&&i===1?(e.consume(g),T):g===62&&i===4?(e.consume(g),Z):g===63&&i===3?(e.consume(g),d):g===93&&i===5?(e.consume(g),Q):A(g)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Yp,ae,P)(g)):g===null||A(g)?(e.exit("htmlFlowData"),P(g)):(e.consume(g),W)}function P(g){return e.check(Kp,U,ae)(g)}function U(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),E}function E(g){return g===null||A(g)?P(g):(e.enter("htmlFlowData"),W(g))}function B(g){return g===45?(e.consume(g),d):W(g)}function T(g){return g===47?(e.consume(g),a="",O):W(g)}function O(g){if(g===62){let le=a.toLowerCase();return Wr.includes(le)?(e.consume(g),Z):W(g)}return ue(g)&&a.length<8?(e.consume(g),a+=String.fromCharCode(g),O):W(g)}function Q(g){return g===93?(e.consume(g),d):W(g)}function d(g){return g===62?(e.consume(g),Z):g===45&&i===2?(e.consume(g),d):W(g)}function Z(g){return g===null||A(g)?(e.exit("htmlFlowData"),ae(g)):(e.consume(g),Z)}function ae(g){return e.exit("htmlFlow"),t(g)}}function Jp(e,t,n){let r=this;return i;function i(a){return A(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function Qp(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Te,t,n)}}var $r={name:"htmlText",tokenize:Zp};function Zp(e,t,n){let r=this,i,o,a;return l;function l(d){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(d),s}function s(d){return d===33?(e.consume(d),u):d===47?(e.consume(d),D):d===63?(e.consume(d),S):ue(d)?(e.consume(d),q):n(d)}function u(d){return d===45?(e.consume(d),c):d===91?(e.consume(d),o=0,h):ue(d)?(e.consume(d),z):n(d)}function c(d){return d===45?(e.consume(d),m):n(d)}function f(d){return d===null?n(d):d===45?(e.consume(d),p):A(d)?(a=f,T(d)):(e.consume(d),f)}function p(d){return d===45?(e.consume(d),m):f(d)}function m(d){return d===62?B(d):d===45?p(d):f(d)}function h(d){let Z="CDATA[";return d===Z.charCodeAt(o++)?(e.consume(d),o===Z.length?x:h):n(d)}function x(d){return d===null?n(d):d===93?(e.consume(d),w):A(d)?(a=x,T(d)):(e.consume(d),x)}function w(d){return d===93?(e.consume(d),y):x(d)}function y(d){return d===62?B(d):d===93?(e.consume(d),y):x(d)}function z(d){return d===null||d===62?B(d):A(d)?(a=z,T(d)):(e.consume(d),z)}function S(d){return d===null?n(d):d===63?(e.consume(d),M):A(d)?(a=S,T(d)):(e.consume(d),S)}function M(d){return d===62?B(d):S(d)}function D(d){return ue(d)?(e.consume(d),k):n(d)}function k(d){return d===45||ne(d)?(e.consume(d),k):V(d)}function V(d){return A(d)?(a=V,T(d)):R(d)?(e.consume(d),V):B(d)}function q(d){return d===45||ne(d)?(e.consume(d),q):d===47||d===62||$(d)?j(d):n(d)}function j(d){return d===47?(e.consume(d),B):d===58||d===95||ue(d)?(e.consume(d),b):A(d)?(a=j,T(d)):R(d)?(e.consume(d),j):B(d)}function b(d){return d===45||d===46||d===58||d===95||ne(d)?(e.consume(d),b):X(d)}function X(d){return d===61?(e.consume(d),W):A(d)?(a=X,T(d)):R(d)?(e.consume(d),X):j(d)}function W(d){return d===null||d===60||d===61||d===62||d===96?n(d):d===34||d===39?(e.consume(d),i=d,P):A(d)?(a=W,T(d)):R(d)?(e.consume(d),W):(e.consume(d),U)}function P(d){return d===i?(e.consume(d),i=void 0,E):d===null?n(d):A(d)?(a=P,T(d)):(e.consume(d),P)}function U(d){return d===null||d===34||d===39||d===60||d===61||d===96?n(d):d===47||d===62||$(d)?j(d):(e.consume(d),U)}function E(d){return d===47||d===62||$(d)?j(d):n(d)}function B(d){return d===62?(e.consume(d),e.exit("htmlTextData"),e.exit("htmlText"),t):n(d)}function T(d){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),O}function O(d){return R(d)?L(e,Q,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):Q(d)}function Q(d){return e.enter("htmlTextData"),a(d)}}var it={name:"labelEnd",resolveAll:rf,resolveTo:of,tokenize:af},ef={tokenize:lf},tf={tokenize:sf},nf={tokenize:uf};function rf(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let i=r.type==="labelImage"?4:2;r.type="data",t+=i;}}return e.length!==n.length&&oe(e,0,e.length,n),e}function of(e,t){let n=e.length,r=0,i,o,a,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=true);}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);let s={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},c={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",s,t],["enter",u,t]],l=ge(l,e.slice(o+1,o+r+3)),l=ge(l,[["enter",c,t]]),l=ge(l,Ve(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=ge(l,[["exit",c,t],e[a-2],e[a-1],["exit",u,t]]),l=ge(l,e.slice(a+1)),l=ge(l,[["exit",s,t]]),oe(e,o,e.length,l),e}function af(e,t,n){let r=this,i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(p){return o?o._inactive?f(p):(a=r.parser.defined.includes(me(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),s):n(p)}function s(p){return p===40?e.attempt(ef,c,a?c:f)(p):p===91?e.attempt(tf,c,a?u:f)(p):a?c(p):f(p)}function u(p){return e.attempt(nf,c,f)(p)}function c(p){return t(p)}function f(p){return o._balanced=true,n(p)}}function lf(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return $(f)?rt(e,o)(f):o(f)}function o(f){return f===41?c(f):En(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function a(f){return $(f)?rt(e,s)(f):c(f)}function l(f){return n(f)}function s(f){return f===34||f===39||f===40?An(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):c(f)}function u(f){return $(f)?rt(e,c)(f):c(f)}function c(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function sf(e,t,n){let r=this;return i;function i(l){return In.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(me(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function uf(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}var qr={name:"labelStartImage",resolveAll:it.resolveAll,tokenize:cf};function cf(e,t,n){let r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}var Yr={name:"labelStartLink",resolveAll:it.resolveAll,tokenize:pf};function pf(e,t,n){let r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}var Ut={name:"lineEnding",tokenize:ff};function ff(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),L(e,t,"linePrefix")}}var ot={name:"thematicBreak",tokenize:mf};function mf(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||A(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),R(u)?L(e,l,"whitespace")(u):l(u))}}var he={continuation:{tokenize:yf},exit:bf,name:"list",tokenize:gf},hf={partial:true,tokenize:vf},df={partial:true,tokenize:xf};function gf(e,t,n){let r=this,i=r.events[r.events.length-1],o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],true).length:0,a=0;return l;function l(m){let h=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(h==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Mt(m)){if(r.containerState.type||(r.containerState.type=h,e.enter(h,{_container:true})),h==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(ot,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(m)}return n(m)}function s(m){return Mt(m)&&++a<10?(e.consume(m),s):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Te,r.interrupt?n:c,e.attempt(hf,p,f))}function c(m){return r.containerState.initialBlankLine=true,o++,p(m)}function f(m){return R(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),p):n(m)}function p(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),true).length,t(m)}}function yf(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Te,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,L(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!R(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(df,t,a)(l))}function a(l){return r.containerState._closeFlow=true,r.interrupt=void 0,L(e,e.attempt(he,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function xf(e,t,n){let r=this;return L(e,i,"listItemIndent",r.containerState.size+1);function i(o){let a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],true).length===r.containerState.size?t(o):n(o)}}function bf(e){e.exit(this.containerState.type);}function vf(e,t,n){let r=this;return L(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){let a=r.events[r.events.length-1];return !R(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}var Tn={name:"setextUnderline",resolveTo:wf,tokenize:kf};function wf(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n);}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);let a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function kf(e,t,n){let r=this,i;return o;function o(u){let c=r.events.length,f;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){f=r.events[c][1].type==="paragraph";break}return !r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),R(u)?L(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||A(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}var sl={tokenize:_f};function _f(e){let t=this,n=e.attempt(Te,r,e.attempt(this.parser.constructs.flowInitial,i,L(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Ur,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}var ul={resolveAll:ml()},cl=fl("string"),pl=fl("text");function fl(e){return {resolveAll:ml(e==="text"?zf:void 0),tokenize:t};function t(n){let r=this,i=this.parser.constructs[e],o=n.attempt(i,a,l);return a;function a(c){return u(c)?o(c):l(c)}function l(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),s}function s(c){return u(c)?(n.exit("data"),o(c)):(n.consume(c),s)}function u(c){if(c===null)return  true;let f=i[c],p=-1;if(f)for(;++p<f.length;){let m=f[p];if(!m.previous||m.previous.call(r,r.previous))return  true}return  false}}}function ml(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function zf(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],i=t.sliceStream(r),o=i.length,a=-1,l=0,s;for(;o--;){let u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1;}else if(u===-2)s=true,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){let u={type:n===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2);}n++;}return e}var Kr={};io(Kr,{attentionMarkers:()=>Lf,contentInitial:()=>Cf,disable:()=>Rf,document:()=>Sf,flow:()=>If,flowInitial:()=>Ef,insideSpan:()=>Pf,string:()=>Af,text:()=>Tf});var Sf={42:he,43:he,45:he,48:he,49:he,50:he,51:he,52:he,53:he,54:he,55:he,56:he,57:he,62:wn},Cf={91:Br},Ef={[-2]:Ft,[-1]:Ft,32:Ft},If={35:jr,42:ot,45:[Tn,ot],60:Vr,61:Tn,95:ot,96:zn,126:zn},Af={38:_n,92:kn},Tf={[-5]:Ut,[-4]:Ut,[-3]:Ut,33:qr,38:_n,42:Nt,60:[Fr,$r],91:Yr,92:[Hr,kn],93:it,95:Nt,96:Or},Pf={null:[Nt,ul]},Lf={null:[42,95]},Rf={null:[]};function hl(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},o=[],a=[],l=[],u={attempt:j(V),check:j(q),consume:M,enter:D,exit:k,interrupt:j(q,{interrupt:true})},c={code:null,containerState:{},defineSkip:y,events:[],now:w,parser:e,previous:null,sliceSerialize:h,sliceStream:x,write:m},f=t.tokenize.call(c,u);return t.resolveAll&&o.push(t),c;function m(P){return a=ge(a,P),z(),a[a.length-1]!==null?[]:(b(t,0),c.events=Ve(o,c.events,c),c.events)}function h(P,U){return Mf(x(P),U)}function x(P){return Df(a,P)}function w(){let{_bufferIndex:P,_index:U,line:E,column:B,offset:T}=r;return {_bufferIndex:P,_index:U,line:E,column:B,offset:T}}function y(P){i[P.line]=P.column,W();}function z(){let P;for(;r._index<a.length;){let U=a[r._index];if(typeof U=="string")for(P=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===P&&r._bufferIndex<U.length;)S(U.charCodeAt(r._bufferIndex));else S(U);}}function S(P){f=f(P);}function M(P){A(P)?(r.line++,r.column=1,r.offset+=P===-3?2:1,W()):P!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=P;}function D(P,U){let E=U||{};return E.type=P,E.start=w(),c.events.push(["enter",E,c]),l.push(E),E}function k(P){let U=l.pop();return U.end=w(),c.events.push(["exit",U,c]),U}function V(P,U){b(P,U.from);}function q(P,U){U.restore();}function j(P,U){return E;function E(B,T,O){let Q,d,Z,ae;return Array.isArray(B)?le(B):"tokenize"in B?le([B]):g(B);function g(se){return Be;function Be(G){let ce=G!==null&&se[G],de=G!==null&&se.null,pt=[...Array.isArray(ce)?ce:ce?[ce]:[],...Array.isArray(de)?de:de?[de]:[]];return le(pt)(G)}}function le(se){return Q=se,d=0,se.length===0?O:ke(se[d])}function ke(se){return Be;function Be(G){return ae=X(),Z=se,se.partial||(c.currentConstruct=se),se.name&&c.parser.constructs.disable.null.includes(se.name)?Ee():se.tokenize.call(U?Object.assign(Object.create(c),U):c,u,Le,Ee)(G)}}function Le(se){return P(Z,ae),T}function Ee(se){return ae.restore(),++d<Q.length?ke(Q[d]):O}}}function b(P,U){P.resolveAll&&!o.includes(P)&&o.push(P),P.resolve&&oe(c.events,U,c.events.length-U,P.resolve(c.events.slice(U),c)),P.resolveTo&&(c.events=P.resolveTo(c.events,c));}function X(){let P=w(),U=c.previous,E=c.currentConstruct,B=c.events.length,T=Array.from(l);return {from:B,restore:O};function O(){r=P,c.previous=U,c.currentConstruct=E,c.events.length=B,l=T,W();}}function W(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1);}}function Df(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex,a;if(n===i)a=[e[n].slice(r,o)];else {if(a=e.slice(n,i),r>-1){let l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift();}o>0&&a.push(e[i].slice(0,o));}return a}function Mf(e,t){let n=-1,r=[],i;for(;++n<e.length;){let o=e[n],a;if(typeof o=="string")a=o;else switch(o){case  -5:{a="\r";break}case  -4:{a=`
`;break}case  -3:{a=`\r
`;break}case  -2:{a=t?" ":"	";break}case  -1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o);}i=o===-2,r.push(a);}return r.join("")}function Xr(e){let r={constructs:bn([Kr,...(e||{}).extensions||[]]),content:i(nl),defined:[],document:i(il),flow:i(sl),lazy:{},string:i(cl),text:i(pl)};return r;function i(o){return a;function a(l){return hl(r,o,l)}}}function Gr(e){for(;!Cn(e););return e}var dl=/[\0\t\n\r]/g;function Jr(){let e=1,t="",n=true,r;return i;function i(o,a,l){let s=[],u,c,f,p,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),f=0,t="",n&&(o.charCodeAt(0)===65279&&f++,n=void 0);f<o.length;){if(dl.lastIndex=f,u=dl.exec(o),p=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(p),!u){t=o.slice(f);break}if(m===10&&f===p&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),f<p&&(s.push(o.slice(f,p)),e+=p-f),m){case 0:{s.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,s.push(-2);e++<c;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=true,e=1;}f=p+1;}return l&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var Nf=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function gl(e){return e.replace(Nf,Ff)}function Ff(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let i=n.charCodeAt(1),o=i===120||i===88;return vn(n.slice(o?2:1),o?16:10)}return dt(n)||e}var xl={}.hasOwnProperty;function Qr(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),Of(n)(Gr(Xr(n).document().write(Jr()(e,t,true))))}function Of(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(no),autolinkProtocol:j,autolinkEmail:j,atxHeading:o(_t),blockQuote:o(G),characterEscape:j,characterReference:j,codeFenced:o(ce),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(ce,a),codeText:o(de,a),codeTextData:j,data:j,codeFlowValue:j,definition:o(pt),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(Kn),hardBreakEscape:o(eo),hardBreakTrailing:o(eo),htmlFlow:o(to,a),htmlFlowData:j,htmlText:o(to,a),htmlTextData:j,image:o(mu),label:a,link:o(no),listItem:o(hu),listItemValue:p,listOrdered:o(ro,f),listUnordered:o(ro),paragraph:o(du),reference:g,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(_t),strong:o(gu),thematicBreak:o(xu)},exit:{atxHeading:s(),atxHeadingSequence:D,autolink:s(),autolinkEmail:Be,autolinkProtocol:se,blockQuote:s(),characterEscapeValue:b,characterReferenceMarkerHexadecimal:ke,characterReferenceMarkerNumeric:ke,characterReferenceValue:Le,characterReference:Ee,codeFenced:s(w),codeFencedFence:x,codeFencedFenceInfo:m,codeFencedFenceMeta:h,codeFlowValue:b,codeIndented:s(y),codeText:s(E),codeTextData:b,data:b,definition:s(),definitionDestinationString:M,definitionLabelString:z,definitionTitleString:S,emphasis:s(),hardBreakEscape:s(W),hardBreakTrailing:s(W),htmlFlow:s(P),htmlFlowData:b,htmlText:s(U),htmlTextData:b,image:s(T),label:Q,labelText:O,lineEnding:X,link:s(B),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:le,resourceDestinationString:d,resourceTitleString:Z,resource:ae,setextHeading:s(q),setextHeadingLineSequence:V,setextHeadingText:k,strong:s(),thematicBreak:s()}};bl(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(_){let I={type:"root",children:[]},H={stack:[I],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:c,data:n},Y=[],J=-1;for(;++J<_.length;)if(_[J][1].type==="listOrdered"||_[J][1].type==="listUnordered")if(_[J][0]==="enter")Y.push(J);else {let _e=Y.pop();J=i(_,_e,J);}for(J=-1;++J<_.length;){let _e=t[_[J][0]];xl.call(_e,_[J][1].type)&&_e[_[J][1].type].call(Object.assign({sliceSerialize:_[J][2].sliceSerialize},H),_[J][1]);}if(H.tokenStack.length>0){let _e=H.tokenStack[H.tokenStack.length-1];(_e[1]||yl).call(H,void 0,_e[0]);}for(I.position={start:$e(_.length>0?_[0][1].start:{line:1,column:1,offset:0}),end:$e(_.length>0?_[_.length-2][1].end:{line:1,column:1,offset:0})},J=-1;++J<t.transforms.length;)I=t.transforms[J](I)||I;return I}function i(_,I,H){let Y=I-1,J=-1,_e=false,Ke,Re,zt,St;for(;++Y<=H;){let xe=_[Y];switch(xe[1].type){case "listUnordered":case "listOrdered":case "blockQuote":{xe[0]==="enter"?J++:J--,St=void 0;break}case "lineEndingBlank":{xe[0]==="enter"&&(Ke&&!St&&!J&&!zt&&(zt=Y),St=void 0);break}case "linePrefix":case "listItemValue":case "listItemMarker":case "listItemPrefix":case "listItemPrefixWhitespace":break;default:St=void 0;}if(!J&&xe[0]==="enter"&&xe[1].type==="listItemPrefix"||J===-1&&xe[0]==="exit"&&(xe[1].type==="listUnordered"||xe[1].type==="listOrdered")){if(Ke){let ft=Y;for(Re=void 0;ft--;){let De=_[ft];if(De[1].type==="lineEnding"||De[1].type==="lineEndingBlank"){if(De[0]==="exit")continue;Re&&(_[Re][1].type="lineEndingBlank",_e=true),De[1].type="lineEnding",Re=ft;}else if(!(De[1].type==="linePrefix"||De[1].type==="blockQuotePrefix"||De[1].type==="blockQuotePrefixWhitespace"||De[1].type==="blockQuoteMarker"||De[1].type==="listItemIndent"))break}zt&&(!Re||zt<Re)&&(Ke._spread=true),Ke.end=Object.assign({},Re?_[Re][1].start:xe[1].end),_.splice(Re||Y,0,["exit",Ke,xe[2]]),Y++,H++;}if(xe[1].type==="listItemPrefix"){let ft={type:"listItem",_spread:false,start:Object.assign({},xe[1].start),end:void 0};Ke=ft,_.splice(Y,0,["enter",ft,xe[2]]),Y++,H++,zt=void 0,St=true;}}}return _[I][1]._spread=_e,H}function o(_,I){return H;function H(Y){l.call(this,_(Y),Y),I&&I.call(this,Y);}}function a(){this.stack.push({type:"fragment",children:[]});}function l(_,I,H){this.stack[this.stack.length-1].children.push(_),this.stack.push(_),this.tokenStack.push([I,H||void 0]),_.position={start:$e(I.start),end:void 0};}function s(_){return I;function I(H){_&&_.call(this,H),u.call(this,H);}}function u(_,I){let H=this.stack.pop(),Y=this.tokenStack.pop();if(Y)Y[0].type!==_.type&&(I?I.call(this,_,Y[0]):(Y[1]||yl).call(this,_,Y[0]));else throw new Error("Cannot close `"+_.type+"` ("+je({start:_.start,end:_.end})+"): it\u2019s not open");H.position.end=$e(_.end);}function c(){return et(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=true;}function p(_){if(this.data.expectingFirstListItemValue){let I=this.stack[this.stack.length-2];I.start=Number.parseInt(this.sliceSerialize(_),10),this.data.expectingFirstListItemValue=void 0;}}function m(){let _=this.resume(),I=this.stack[this.stack.length-1];I.lang=_;}function h(){let _=this.resume(),I=this.stack[this.stack.length-1];I.meta=_;}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=true);}function w(){let _=this.resume(),I=this.stack[this.stack.length-1];I.value=_.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0;}function y(){let _=this.resume(),I=this.stack[this.stack.length-1];I.value=_.replace(/(\r?\n|\r)$/g,"");}function z(_){let I=this.resume(),H=this.stack[this.stack.length-1];H.label=I,H.identifier=me(this.sliceSerialize(_)).toLowerCase();}function S(){let _=this.resume(),I=this.stack[this.stack.length-1];I.title=_;}function M(){let _=this.resume(),I=this.stack[this.stack.length-1];I.url=_;}function D(_){let I=this.stack[this.stack.length-1];if(!I.depth){let H=this.sliceSerialize(_).length;I.depth=H;}}function k(){this.data.setextHeadingSlurpLineEnding=true;}function V(_){let I=this.stack[this.stack.length-1];I.depth=this.sliceSerialize(_).codePointAt(0)===61?1:2;}function q(){this.data.setextHeadingSlurpLineEnding=void 0;}function j(_){let H=this.stack[this.stack.length-1].children,Y=H[H.length-1];(!Y||Y.type!=="text")&&(Y=yu(),Y.position={start:$e(_.start),end:void 0},H.push(Y)),this.stack.push(Y);}function b(_){let I=this.stack.pop();I.value+=this.sliceSerialize(_),I.position.end=$e(_.end);}function X(_){let I=this.stack[this.stack.length-1];if(this.data.atHardBreak){let H=I.children[I.children.length-1];H.position.end=$e(_.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(I.type)&&(j.call(this,_),b.call(this,_));}function W(){this.data.atHardBreak=true;}function P(){let _=this.resume(),I=this.stack[this.stack.length-1];I.value=_;}function U(){let _=this.resume(),I=this.stack[this.stack.length-1];I.value=_;}function E(){let _=this.resume(),I=this.stack[this.stack.length-1];I.value=_;}function B(){let _=this.stack[this.stack.length-1];if(this.data.inReference){let I=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=I,delete _.url,delete _.title;}else delete _.identifier,delete _.label;this.data.referenceType=void 0;}function T(){let _=this.stack[this.stack.length-1];if(this.data.inReference){let I=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=I,delete _.url,delete _.title;}else delete _.identifier,delete _.label;this.data.referenceType=void 0;}function O(_){let I=this.sliceSerialize(_),H=this.stack[this.stack.length-2];H.label=gl(I),H.identifier=me(I).toLowerCase();}function Q(){let _=this.stack[this.stack.length-1],I=this.resume(),H=this.stack[this.stack.length-1];if(this.data.inReference=true,H.type==="link"){let Y=_.children;H.children=Y;}else H.alt=I;}function d(){let _=this.resume(),I=this.stack[this.stack.length-1];I.url=_;}function Z(){let _=this.resume(),I=this.stack[this.stack.length-1];I.title=_;}function ae(){this.data.inReference=void 0;}function g(){this.data.referenceType="collapsed";}function le(_){let I=this.resume(),H=this.stack[this.stack.length-1];H.label=I,H.identifier=me(this.sliceSerialize(_)).toLowerCase(),this.data.referenceType="full";}function ke(_){this.data.characterReferenceType=_.type;}function Le(_){let I=this.sliceSerialize(_),H=this.data.characterReferenceType,Y;H?(Y=vn(I,H==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Y=dt(I);let J=this.stack[this.stack.length-1];J.value+=Y;}function Ee(_){let I=this.stack.pop();I.position.end=$e(_.end);}function se(_){b.call(this,_);let I=this.stack[this.stack.length-1];I.url=this.sliceSerialize(_);}function Be(_){b.call(this,_);let I=this.stack[this.stack.length-1];I.url="mailto:"+this.sliceSerialize(_);}function G(){return {type:"blockquote",children:[]}}function ce(){return {type:"code",lang:null,meta:null,value:""}}function de(){return {type:"inlineCode",value:""}}function pt(){return {type:"definition",identifier:"",label:null,title:null,url:""}}function Kn(){return {type:"emphasis",children:[]}}function _t(){return {type:"heading",depth:0,children:[]}}function eo(){return {type:"break"}}function to(){return {type:"html",value:""}}function mu(){return {type:"image",title:null,url:"",alt:null}}function no(){return {type:"link",title:null,url:"",children:[]}}function ro(_){return {type:"list",ordered:_.type==="listOrdered",start:null,spread:_._spread,children:[]}}function hu(_){return {type:"listItem",spread:_._spread,checked:null,children:[]}}function du(){return {type:"paragraph",children:[]}}function gu(){return {type:"strong",children:[]}}function yu(){return {type:"text",value:""}}function xu(){return {type:"thematicBreak"}}}function $e(e){return {line:e.line,column:e.column,offset:e.offset}}function bl(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?bl(e,r):Uf(e,r);}}function Uf(e,t){let n;for(n in t)if(xl.call(t,n))switch(n){case "canContainEols":{let r=t[n];r&&e[n].push(...r);break}case "transforms":{let r=t[n];r&&e[n].push(...r);break}case "enter":case "exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function yl(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+je({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+je({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+je({start:t.start,end:t.end})+") is still open")}function Pn(e){let t=this;t.parser=n;function n(r){return Qr(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function vl(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),true)};return e.patch(t,n),e.applyData(t,n)}function wl(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function kl(e,t){let n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function _l(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function zl(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Sl(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=we(r.toLowerCase()),o=e.footnoteOrder.indexOf(r),a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);let s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:true,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,s);let u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function Cl(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function El(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Ln(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return [{type:"text",value:"!["+t.alt+r}];let i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});let a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function Il(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ln(e,t);let i={src:we(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function Al(e,t){let n={src:we(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Tl(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Pl(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ln(e,t);let i={href:we(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);let o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Ll(e,t){let n={href:we(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Rl(e,t,n){let r=e.all(t),i=n?Bf(n):Dl(t),o={},a=[];if(typeof t.checked=="boolean"){let c=r[0],f;c&&c.type==="element"&&c.tagName==="p"?f=c:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:true},children:[]}),o.className=["task-list-item"];}let l=-1;for(;++l<r.length;){let c=r[l];(i||l!==0||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!i?a.push(...c.children):a.push(c);}let s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&a.push({type:"text",value:`
`});let u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function Bf(e){let t=false;if(e.type==="list"){t=e.spread||false;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Dl(n[r]);}return t}function Dl(e){let t=e.spread;return t??e.children.length>1}function Ml(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){let a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,true)};return e.patch(t,o),e.applyData(t,o)}function Nl(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Fl(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Ol(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ul(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],true)};e.patch(t.children[0],a),i.push(a);}if(n.length>0){let a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,true)},l=ht(t.children[1]),s=xn(t.children[t.children.length-1]);l&&s&&(a.position={start:l,end:s}),i.push(a);}let o={type:"element",tagName:"table",properties:{},children:e.wrap(i,true)};return e.patch(t,o),e.applyData(t,o)}function Bl(e,t,n){let r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length,s=-1,u=[];for(;++s<l;){let f=t.children[s],p={},m=a?a[s]:void 0;m&&(p.align=m);let h={type:"element",tagName:o,properties:p,children:[]};f&&(h.children=e.all(f),e.patch(f,h),h=e.applyData(f,h)),u.push(h);}let c={type:"element",tagName:"tr",properties:{},children:e.wrap(u,true)};return e.patch(t,c),e.applyData(t,c)}function Hl(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Wl(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,o=[];for(;r;)o.push(jl(t.slice(i,r.index),i>0,true),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(jl(t.slice(i),i>0,false)),o.join("")}function jl(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===9||o===32;)r++,o=e.codePointAt(r);}if(n){let o=e.codePointAt(i-1);for(;o===9||o===32;)i--,o=e.codePointAt(i-1);}return i>r?e.slice(r,i):""}function Vl(e,t){let n={type:"text",value:Wl(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function $l(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var ql={blockquote:vl,break:wl,code:kl,delete:_l,emphasis:zl,footnoteReference:Sl,heading:Cl,html:El,imageReference:Il,image:Al,inlineCode:Tl,linkReference:Pl,link:Ll,listItem:Rl,list:Ml,paragraph:Nl,root:Fl,strong:Ol,table:Ul,tableCell:Hl,tableRow:Bl,text:Vl,thematicBreak:$l,toml:Rn,yaml:Rn,definition:Rn,footnoteDefinition:Rn};function Rn(){}var{defineProperty:Vf}=Object,Ql=typeof self=="object"?self:globalThis,Yl=(e,t)=>{switch(e){case "Function":case "SharedWorker":case "Worker":case "eval":case "setInterval":case "setTimeout":throw new TypeError("unable to deserialize "+e)}return new Ql[e](t)},$f=(e,t)=>{let n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);let[o,a]=t[i];switch(o){case 0:case  -1:return n(a,i);case 1:{let l=n([],i);for(let s of a)l.push(r(s));return l}case 2:{let l=n({},i);for(let[s,u]of a){let c=r(s),f=r(u);c==="__proto__"?Vf(l,c,{value:f,configurable:true,enumerable:true,writable:true}):l[c]=f;}return l}case 3:return n(new Date(a),i);case 4:{let{source:l,flags:s}=a;return n(new RegExp(l,s),i)}case 5:{let l=n(new Map,i);for(let[s,u]of a)l.set(r(s),r(u));return l}case 6:{let l=n(new Set,i);for(let s of a)l.add(r(s));return l}case 7:{let{name:l,message:s}=a;return n(typeof Ql[l]=="function"?Yl(l,s):new Error(s),i)}case 8:return n(BigInt(a),i);case "BigInt":return n(Object(BigInt(a)),i);case "ArrayBuffer":return n(new Uint8Array(a).buffer,a);case "DataView":{let{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}case "-0":return  -0}return n(Yl(o,a),i)};return r},ti=e=>$f(new Map,e)(0);var at="",{toString:qf}={},{keys:Yf,is:Kf}=Object,Bt=e=>{let t=typeof e;if(t!=="object"||!e)return [0,t];let n=qf.call(e).slice(8,-1);switch(n){case "Array":return [1,at];case "Object":return [2,at];case "Date":return [3,at];case "RegExp":return [4,at];case "Map":return [5,at];case "Set":return [6,at];case "DataView":return [1,n]}return n.includes("Array")?[1,n]:e instanceof Error?[7,e.name||"Error"]:[2,n]},Mn=([e,t])=>e===0&&(t==="function"||t==="symbol"),Xf=(e,t,n,r)=>{let i=(a,l)=>{let s=r.push(a)-1;return n.set(l,s),s},o=a=>{if(n.has(a))return n.get(a);let[l,s]=Bt(a);switch(l){case 0:{let c=a;switch(s){case "bigint":l=8,c=a.toString();break;case "number":if(!a&&Kf(a,-0))return r.push(["-0"])-1;break;case "function":case "symbol":if(e)throw new TypeError("unable to serialize "+s);c=null;break;case "undefined":return i([-1],a)}return i([l,c],a)}case 1:{if(s){let p=a;return s==="DataView"?p=new Uint8Array(a.buffer):s==="ArrayBuffer"&&(p=new Uint8Array(a)),i([s,[...p]],a)}let c=[],f=i([l,c],a);for(let p of a)c.push(o(p));return f}case 2:{if(s)switch(s){case "BigInt":return i([s,a.toString()],a);case "Boolean":case "Number":case "String":return i([s,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());let c=[],f=i([l,c],a);for(let p of Yf(a))(e||!Mn(Bt(a[p])))&&c.push([o(p),o(a[p])]);return f}case 3:return i([l,isNaN(a.getTime())?at:a.toISOString()],a);case 4:{let{source:c,flags:f}=a;return i([l,{source:c,flags:f}],a)}case 5:{let c=[],f=i([l,c],a);for(let[p,m]of a)(e||!(Mn(Bt(p))||Mn(Bt(m))))&&c.push([o(p),o(m)]);return f}case 6:{let c=[],f=i([l,c],a);for(let p of a)(e||!Mn(Bt(p)))&&c.push(o(p));return f}}let{message:u}=a;return i([l,{name:s,message:u}],a)};return o},ni=(e,{json:t,lossy:n}={})=>{let r=[];return Xf(!(t||n),!!t,new Map,r)(e),r};var gt=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?ti(ni(e,t)):structuredClone(e):(e,t)=>ti(ni(e,t));function Gf(e,t){let n=[{type:"text",value:"\u21A9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Jf(e,t){return "Back to reference "+(e+1)+(t>1?"-"+t:"")}function Zl(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Gf,r=e.options.footnoteBackLabel||Jf,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[],s=-1;for(;++s<e.footnoteOrder.length;){let u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;let c=e.all(u),f=String(u.identifier).toUpperCase(),p=we(f.toLowerCase()),m=0,h=[],x=e.footnoteCounts.get(f);for(;x!==void 0&&++m<=x;){h.length>0&&h.push({type:"text",value:" "});let z=typeof n=="string"?n:n(s,m);typeof z=="string"&&(z={type:"text",value:z}),h.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,m),className:["data-footnote-backref"]},children:Array.isArray(z)?z:[z]});}let w=c[c.length-1];if(w&&w.type==="element"&&w.tagName==="p"){let z=w.children[w.children.length-1];z&&z.type==="text"?z.value+=" ":w.children.push({type:"text",value:" "}),w.children.push(...h);}else c.push(...h);let y={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(c,true)};e.patch(u,y),l.push(y);}if(l.length!==0)return {type:"element",tagName:"section",properties:{dataFootnotes:true,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...gt(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,true)},{type:"text",value:`
`}]}}var qe=(function(e){if(e==null)return tm;if(typeof e=="function")return Nn(e);if(typeof e=="object")return Array.isArray(e)?Qf(e):Zf(e);if(typeof e=="string")return em(e);throw new Error("Expected function, string, or object as test")});function Qf(e){let t=[],n=-1;for(;++n<e.length;)t[n]=qe(e[n]);return Nn(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return  true;return  false}}function Zf(e){let t=e;return Nn(n);function n(r){let i=r,o;for(o in e)if(i[o]!==t[o])return  false;return  true}}function em(e){return Nn(t);function t(n){return n&&n.type===e}}function Nn(e){return t;function t(n,r,i){return !!(nm(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function tm(){return  true}function nm(e){return e!==null&&typeof e=="object"&&"type"in e}var es=[],Fn=true,lt=false,On="skip";function Ht(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;let o=qe(i),a=r?-1:1;l(e,void 0,[])();function l(s,u,c){let f=s&&typeof s=="object"?s:{};if(typeof f.type=="string"){let m=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(s.type+(m?"<"+m+">":""))+")"});}return p;function p(){let m=es,h,x,w;if((!t||o(s,u,c[c.length-1]||void 0))&&(m=rm(n(s,c)),m[0]===lt))return m;if("children"in s&&s.children){let y=s;if(y.children&&m[0]!==On)for(x=(r?y.children.length:-1)+a,w=c.concat(y);x>-1&&x<y.children.length;){let z=y.children[x];if(h=l(z,x,w)(),h[0]===lt)return h;x=typeof h[1]=="number"?h[1]:x+a;}}return m}}}function rm(e){return Array.isArray(e)?e:typeof e=="number"?[Fn,e]:e==null?es:[e]}function st(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),Ht(e,o,l,i);function l(s,u){let c=u[u.length-1],f=c?c.children.indexOf(s):void 0;return a(s,f,c)}}var ri={}.hasOwnProperty,im={};function ns(e,t){let n=t||im,r=new Map,i=new Map,o=new Map,a={...ql,...n.handlers},l={all:u,applyData:am,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:s,options:n,patch:om,wrap:sm};return st(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){let f=c.type==="definition"?r:i,p=String(c.identifier).toUpperCase();f.has(p)||f.set(p,c);}}),l;function s(c,f){let p=c.type,m=l.handlers[p];if(ri.call(l.handlers,p)&&m)return m(l,c,f);if(l.options.passThrough&&l.options.passThrough.includes(p)){if("children"in c){let{children:x,...w}=c,y=gt(w);return y.children=l.all(c),y}return gt(c)}return (l.options.unknownHandler||lm)(l,c,f)}function u(c){let f=[];if("children"in c){let p=c.children,m=-1;for(;++m<p.length;){let h=l.one(p[m],c);if(h){if(m&&p[m-1].type==="break"&&(!Array.isArray(h)&&h.type==="text"&&(h.value=ts(h.value)),!Array.isArray(h)&&h.type==="element")){let x=h.children[0];x&&x.type==="text"&&(x.value=ts(x.value));}Array.isArray(h)?f.push(...h):f.push(h);}}}return f}}function om(e,t){e.position&&(t.position=Pr(e));}function am(e,t){let n=t;if(e&&e.data){let r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else {let a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a};}n.type==="element"&&o&&Object.assign(n.properties,gt(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i);}return n}function lm(e,t){let n=t.data||{},r="value"in t&&!(ri.call(n,"hProperties")||ri.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function sm(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function ts(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Un(e,t){let n=ns(e,t),r=n.one(e,void 0),i=Zl(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&(o.children.push({type:"text",value:`
`},i)),o}function Bn(e,t){return e&&"run"in e?async function(n,r){let i=Un(n,{file:r,...t});await e.run(i,r);}:function(n,r){return Un(n,{file:r,...e||t})}}function ii(e){if(e)throw e}var Wn=oo(ps());function jt(e){if(typeof e!="object"||e===null)return  false;let t=Object.getPrototypeOf(e);return (t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function oi(){let e=[],t={run:n,use:r};return t;function n(...i){let o=-1,a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(s,...u){let c=e[++o],f=-1;if(s){a(s);return}for(;++f<i.length;)(u[f]===null||u[f]===void 0)&&(u[f]=i[f]);i=u,c?fs(c,l)(...u):a(null,...u);}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function fs(e,t){let n;return r;function r(...a){let l=e.length>a.length,s;l&&a.push(i);try{s=e.apply(this,a);}catch(u){let c=u;if(l&&n)throw c;return i(c)}l||(s&&s.then&&typeof s.then=="function"?s.then(o,i):s instanceof Error?i(s):o(s));}function i(a,...l){n||(n=true,t(a,...l));}function o(a){i(null,a);}}var Ce={basename:um,dirname:cm,extname:pm,join:fm,sep:"/"};function um(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Wt(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=true,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return "";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=true,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function cm(e){if(Wt(e),e.length===0)return ".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=true);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function pm(e){Wt(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){let l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=true,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1);}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function fm(...e){let t=-1,n;for(;++t<e.length;)Wt(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":mm(n)}function mm(e){Wt(e);let t=e.codePointAt(0)===47,n=hm(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function hm(e,t){let n="",r=0,i=-1,o=0,a=-1,l,s;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else {if(l===47)break;l=47;}if(l===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2);}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0;}else l===46&&o>-1?o++:o=-1;}return n}function Wt(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}var ms={cwd:dm};function dm(){return "/"}function yt(e){return !!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function hs(e){if(typeof e=="string")e=new URL(e);else if(!yt(e)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return gm(e)}function gm(e){if(e.hostname!==""){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}var ai=["history","path","basename","stem","extname","dirname"],ut=class{constructor(t){let n;t?yt(t)?n={path:t}:typeof t=="string"||ym(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":ms.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ai.length;){let o=ai[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o]);}let i;for(i in n)ai.includes(i)||(this[i]=n[i]);}get basename(){return typeof this.path=="string"?Ce.basename(this.path):void 0}set basename(t){si(t,"basename"),li(t,"basename"),this.path=Ce.join(this.dirname||"",t);}get dirname(){return typeof this.path=="string"?Ce.dirname(this.path):void 0}set dirname(t){ds(this.basename,"dirname"),this.path=Ce.join(t||"",this.basename);}get extname(){return typeof this.path=="string"?Ce.extname(this.path):void 0}set extname(t){if(li(t,"extname"),ds(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ce.join(this.dirname,this.stem+(t||""));}get path(){return this.history[this.history.length-1]}set path(t){yt(t)&&(t=hs(t)),si(t,"path"),this.path!==t&&this.history.push(t);}get stem(){return typeof this.path=="string"?Ce.basename(this.path,this.extname):void 0}set stem(t){si(t,"stem"),li(t,"stem"),this.path=Ce.join(this.dirname||"",t+(this.extname||""));}fail(t,n,r){let i=this.message(t,n,r);throw i.fatal=true,i}info(t,n,r){let i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){let i=new ie(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=false,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function li(e,t){if(e&&e.includes(Ce.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ce.sep+"`")}function si(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function ds(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function ym(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var gs=(function(e){let r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o});var xm={}.hasOwnProperty,fi=class e extends gs{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=oi();}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r);}return t.data((0, Wn.default)(true,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(pi("data",this.frozen),this.namespace[t]=n,this):xm.call(this.namespace,t)&&this.namespace[t]||void 0:t?(pi("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===false)continue;r[0]===true&&(r[0]=void 0);let i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i);}return this.frozen=true,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();let n=jn(t),r=this.parser||this.Parser;return ui("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),ui("process",this.parser||this.Parser),ci("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){let l=jn(t),s=r.parse(l);r.run(s,l,function(c,f,p){if(c||!f||!p)return u(c);let m=f,h=r.stringify(m,p);vm(h)?p.value=h:p.result=h,u(c,p);});function u(c,f){c||!f?a(c):o?o(f):n(void 0,f);}}}processSync(t){let n=false,r;return this.freeze(),ui("processSync",this.parser||this.Parser),ci("processSync",this.compiler||this.Compiler),this.process(t,i),xs("processSync","process",n),r;function i(o,a){n=true,ii(o),r=a;}}run(t,n,r){ys(t),this.freeze();let i=this.transformers;return !r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){let s=jn(n);i.run(t,s,u);function u(c,f,p){let m=f||t;c?l(c):a?a(m):r(void 0,m,p);}}}runSync(t,n){let r=false,i;return this.run(t,n,o),xs("runSync","run",r),i;function o(a,l){ii(a),i=l,r=true;}}stringify(t,n){this.freeze();let r=jn(n),i=this.compiler||this.Compiler;return ci("stringify",i),ys(t),i(t,r)}use(t,...n){let r=this.attachers,i=this.namespace;if(pi("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){let[c,...f]=u;s(c,f);}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=(0, Wn.default)(true,i.settings,u.settings));}function l(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){let f=u[c];o(f);}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,c){let f=-1,p=-1;for(;++f<r.length;)if(r[f][0]===u){p=f;break}if(p===-1)r.push([u,...c]);else if(c.length>0){let[m,...h]=c,x=r[p][1];jt(x)&&jt(m)&&(m=(0, Wn.default)(true,x,m)),r[p]=[u,m,...h];}}}},mi=new fi().freeze();function ui(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function ci(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function pi(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ys(e){if(!jt(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function xs(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function jn(e){return bm(e)?e:new ut(e)}function bm(e){return !!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function vm(e){return typeof e=="string"||wm(e)}function wm(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var km="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",bs=[],vs={allowDangerousHtml:true},_m=/^(https?|ircs?|mailto|xmpp)$/i,zm=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function hi(e){let t=Sm(e),n=Cm(e);return Em(t.runSync(t.parse(n),n),e)}function Sm(e){let t=e.rehypePlugins||bs,n=e.remarkPlugins||bs,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...vs}:vs;return mi().use(Pn).use(n).use(Bn,r).use(t)}function Cm(e){let t=e.children||"",n=new ut;return typeof t=="string"?n.value=t:(void 0),n}function Em(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,s=t.urlTransform||ws;for(let c of zm)Object.hasOwn(t,c.from)&&(""+c.from+(c.to?"use `"+c.to+"` instead":"remove it")+km+c.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),st(e,u),Dr(e,{Fragment:be,components:i,ignoreInvalidStyle:true,jsx:v,jsxs:v,passKeys:true,passNode:true});function u(c,f,p){if(c.type==="raw"&&p&&typeof f=="number")return a?p.children.splice(f,1):p.children[f]={type:"text",value:c.value},f;if(c.type==="element"){let m;for(m in Dt)if(Object.hasOwn(Dt,m)&&Object.hasOwn(c.properties,m)){let h=c.properties[m],x=Dt[m];(x===null||x.includes(c.tagName))&&(c.properties[m]=s(String(h||""),m,c));}}if(c.type==="element"){let m=n?!n.includes(c.tagName):o?o.includes(c.tagName):false;if(!m&&r&&typeof f=="number"&&(m=!r(c,f,p)),m&&p&&typeof f=="number")return l&&c.children?p.children.splice(f,1,...c.children):p.children.splice(f,1),f}}}function ws(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||_m.test(e.slice(0,t))?e:""}function di(e,t){let n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function gi(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function yi(e,t,n){let i=qe((n||{}).ignore||[]),o=Im(t),a=-1;for(;++a<o.length;)Ht(e,"text",l);function l(u,c){let f=-1,p;for(;++f<c.length;){let m=c[f],h=p?p.children:void 0;if(i(m,h?h.indexOf(m):void 0,p))return;p=m;}if(p)return s(u,c)}function s(u,c){let f=c[c.length-1],p=o[a][0],m=o[a][1],h=0,w=f.children.indexOf(u),y=false,z=[];p.lastIndex=0;let S=p.exec(u.value);for(;S;){let M=S.index,D={index:S.index,input:S.input,stack:[...c,u]},k=m(...S,D);if(typeof k=="string"&&(k=k.length>0?{type:"text",value:k}:void 0),k===false?p.lastIndex=M+1:(h!==M&&z.push({type:"text",value:u.value.slice(h,M)}),Array.isArray(k)?z.push(...k):k&&z.push(k),h=M+S[0].length,y=true),!p.global)break;S=p.exec(u.value);}return y?(h<u.value.length&&z.push({type:"text",value:u.value.slice(h)}),f.children.splice(w,1,...z)):z=[u],w+z.length}}function Im(e){let t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let i=n[r];t.push([Am(i[0]),Tm(i[1])]);}return t}function Am(e){return typeof e=="string"?new RegExp(gi(e),"g"):e}function Tm(e){return typeof e=="function"?e:function(){return e}}var xi="phrasing",bi=["autolink","link","image","label"];function wi(){return {transforms:[Nm],enter:{literalAutolink:Pm,literalAutolinkEmail:vi,literalAutolinkHttp:vi,literalAutolinkWww:vi},exit:{literalAutolink:Mm,literalAutolinkEmail:Dm,literalAutolinkHttp:Lm,literalAutolinkWww:Rm}}}function ki(){return {unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:xi,notInConstruct:bi},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:xi,notInConstruct:bi},{character:":",before:"[ps]",after:"\\/",inConstruct:xi,notInConstruct:bi}]}}function Pm(e){this.enter({type:"link",title:null,url:"",children:[]},e);}function vi(e){this.config.enter.autolinkProtocol.call(this,e);}function Lm(e){this.config.exit.autolinkProtocol.call(this,e);}function Rm(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e);}function Dm(e){this.config.exit.autolinkEmail.call(this,e);}function Mm(e){this.exit(e);}function Nm(e){yi(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Fm],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Om]],{ignore:["link","linkReference"]});}function Fm(e,t,n,r,i){let o="";if(!ks(i)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!Um(n)))return  false;let a=Bm(n+r);if(!a[0])return  false;let l={type:"link",title:null,url:o+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[l,{type:"text",value:a[1]}]:l}function Om(e,t,n,r){return !ks(r,true)||/[-\d_]$/.test(n)?false:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Um(e){let t=e.split(".");return !(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Bm(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return [e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),i=di(e,"("),o=di(e,")");for(;r!==-1&&i>o;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),o++;return [e,n]}function ks(e,t){let n=e.input.charCodeAt(e.index-1);return (e.index===0||Ae(n)||nt(n))&&(!t||n!==47)}_s.peek=Xm;function Hm(){this.buffer();}function jm(e){this.enter({type:"footnoteReference",identifier:"",label:""},e);}function Wm(){this.buffer();}function Vm(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e);}function $m(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=me(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function qm(e){this.exit(e);}function Ym(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=me(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function Km(e){this.exit(e);}function Xm(){return "["}function _s(e,t,n,r){let i=n.createTracker(r),o=i.move("[^"),a=n.enter("footnoteReference"),l=n.enter("reference");return o+=i.move(n.safe(n.associationId(e),{after:"]",before:o})),l(),a(),o+=i.move("]"),o}function _i(){return {enter:{gfmFootnoteCallString:Hm,gfmFootnoteCall:jm,gfmFootnoteDefinitionLabelString:Wm,gfmFootnoteDefinition:Vm},exit:{gfmFootnoteCallString:$m,gfmFootnoteCall:qm,gfmFootnoteDefinitionLabelString:Ym,gfmFootnoteDefinition:Km}}}function zi(e){let t=false;return e&&e.firstLineBlank&&(t=true),{handlers:{footnoteDefinition:n,footnoteReference:_s},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,o,a){let l=o.createTracker(a),s=l.move("[^"),u=o.enter("footnoteDefinition"),c=o.enter("label");return s+=l.move(o.safe(o.associationId(r),{before:s,after:"]"})),c(),s+=l.move("]:"),r.children&&r.children.length>0&&(l.shift(4),s+=l.move((t?`
`:" ")+o.indentLines(o.containerFlow(r,l.current()),t?zs:Gm))),u(),s}}function Gm(e,t,n){return t===0?e:zs(e,t,n)}function zs(e,t,n){return (n?"":"    ")+e}var Jm=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Ss.peek=eh;function Si(){return {canContainEols:["delete"],enter:{strikethrough:Qm},exit:{strikethrough:Zm}}}function Ci(){return {unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Jm}],handlers:{delete:Ss}}}function Qm(e){this.enter({type:"delete",children:[]},e);}function Zm(e){this.exit(e);}function Ss(e,t,n,r){let i=n.createTracker(r),o=n.enter("strikethrough"),a=i.move("~~");return a+=n.containerPhrasing(e,{...i.current(),before:a,after:"~"}),a+=i.move("~~"),o(),a}function eh(){return "~"}function th(e){return e.length}function Es(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||th,o=[],a=[],l=[],s=[],u=0,c=-1;for(;++c<e.length;){let x=[],w=[],y=-1;for(e[c].length>u&&(u=e[c].length);++y<e[c].length;){let z=nh(e[c][y]);if(n.alignDelimiters!==false){let S=i(z);w[y]=S,(s[y]===void 0||S>s[y])&&(s[y]=S);}x.push(z);}a[c]=x,l[c]=w;}let f=-1;if(typeof r=="object"&&"length"in r)for(;++f<u;)o[f]=Cs(r[f]);else {let x=Cs(r);for(;++f<u;)o[f]=x;}f=-1;let p=[],m=[];for(;++f<u;){let x=o[f],w="",y="";x===99?(w=":",y=":"):x===108?w=":":x===114&&(y=":");let z=n.alignDelimiters===false?1:Math.max(1,s[f]-w.length-y.length),S=w+"-".repeat(z)+y;n.alignDelimiters!==false&&(z=w.length+z+y.length,z>s[f]&&(s[f]=z),m[f]=z),p[f]=S;}a.splice(1,0,p),l.splice(1,0,m),c=-1;let h=[];for(;++c<a.length;){let x=a[c],w=l[c];f=-1;let y=[];for(;++f<u;){let z=x[f]||"",S="",M="";if(n.alignDelimiters!==false){let D=s[f]-(w[f]||0),k=o[f];k===114?S=" ".repeat(D):k===99?D%2?(S=" ".repeat(D/2+.5),M=" ".repeat(D/2-.5)):(S=" ".repeat(D/2),M=S):M=" ".repeat(D);}n.delimiterStart!==false&&!f&&y.push("|"),n.padding!==false&&!(n.alignDelimiters===false&&z==="")&&(n.delimiterStart!==false||f)&&y.push(" "),n.alignDelimiters!==false&&y.push(S),y.push(z),n.alignDelimiters!==false&&y.push(M),n.padding!==false&&y.push(" "),(n.delimiterEnd!==false||f!==u-1)&&y.push("|");}h.push(n.delimiterEnd===false?y.join("").replace(/ +$/,""):y.join(""));}return h.join(`
`)}function nh(e){return e==null?"":String(e)}function Cs(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Is(e,t,n,r){let i=n.enter("blockquote"),o=n.createTracker(r);o.move("> "),o.shift(2);let a=n.indentLines(n.containerFlow(e,o.current()),rh);return i(),a}function rh(e,t,n){return ">"+(n?"":" ")+e}function Ts(e,t){return As(e,t.inConstruct,true)&&!As(e,t.notInConstruct,false)}function As(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return  true;return  false}function Ei(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Ts(n.stack,n.unsafe[i]))return /[ \t]/.test(r.before)?"":" ";return `\\
`}function Ps(e,t){let n=String(e),r=n.indexOf(t),i=r,o=0,a=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>a&&(a=o):o=1,i=r+t.length,r=n.indexOf(t,i);return a}function Ls(e,t){return !!(t.options.fences===false&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Rs(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Ds(e,t,n,r){let i=Rs(n),o=e.value||"",a=i==="`"?"GraveAccent":"Tilde";if(Ls(e,n)){let f=n.enter("codeIndented"),p=n.indentLines(o,ih);return f(),p}let l=n.createTracker(r),s=i.repeat(Math.max(Ps(o,i)+1,3)),u=n.enter("codeFenced"),c=l.move(s);if(e.lang){let f=n.enter(`codeFencedLang${a}`);c+=l.move(n.safe(e.lang,{before:c,after:" ",encode:["`"],...l.current()})),f();}if(e.lang&&e.meta){let f=n.enter(`codeFencedMeta${a}`);c+=l.move(" "),c+=l.move(n.safe(e.meta,{before:c,after:`
`,encode:["`"],...l.current()})),f();}return c+=l.move(`
`),o&&(c+=l.move(o+`
`)),c+=l.move(s),u(),c}function ih(e,t,n){return (n?"":"    ")+e}function xt(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Ms(e,t,n,r){let i=xt(n),o=i==='"'?"Quote":"Apostrophe",a=n.enter("definition"),l=n.enter("label"),s=n.createTracker(r),u=s.move("[");return u+=s.move(n.safe(n.associationId(e),{before:u,after:"]",...s.current()})),u+=s.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...s.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),a(),u}function Ns(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Ye(e){return "&#x"+e.toString(16).toUpperCase()+";"}function bt(e,t,n){let r=Oe(e),i=Oe(t);return r===void 0?i===void 0?n==="_"?{inside:true,outside:true}:{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:true}:r===1?i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:false}:i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:false}:{inside:false,outside:false}}Ii.peek=oh;function Ii(e,t,n,r){let i=Ns(n),o=n.enter("emphasis"),a=n.createTracker(r),l=a.move(i),s=a.move(n.containerPhrasing(e,{after:i,before:l,...a.current()})),u=s.charCodeAt(0),c=bt(r.before.charCodeAt(r.before.length-1),u,i);c.inside&&(s=Ye(u)+s.slice(1));let f=s.charCodeAt(s.length-1),p=bt(r.after.charCodeAt(0),f,i);p.inside&&(s=s.slice(0,-1)+Ye(f));let m=a.move(i);return o(),n.attentionEncodeSurroundingInfo={after:p.outside,before:c.outside},l+s+m}function oh(e,t,n){return n.options.emphasis||"*"}function Fs(e,t){let n=false;return st(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=true,lt}),!!((!e.depth||e.depth<3)&&et(e)&&(t.options.setext||n))}function Os(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(r);if(Fs(e,n)){let c=n.enter("headingSetext"),f=n.enter("phrasing"),p=n.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return f(),c(),p+`
`+(i===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}let a="#".repeat(i),l=n.enter("headingAtx"),s=n.enter("phrasing");o.move(a+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return /^[\t ]/.test(u)&&(u=Ye(u.charCodeAt(0))+u.slice(1)),u=u?a+" "+u:a,n.options.closeAtx&&(u+=" "+a),s(),l(),u}Ai.peek=ah;function Ai(e){return e.value||""}function ah(){return "<"}Ti.peek=lh;function Ti(e,t,n,r){let i=xt(n),o=i==='"'?"Quote":"Apostrophe",a=n.enter("image"),l=n.enter("label"),s=n.createTracker(r),u=s.move("![");return u+=s.move(n.safe(e.alt,{before:u,after:"]",...s.current()})),u+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),u+=s.move(")"),a(),u}function lh(){return "!"}Pi.peek=sh;function Pi(e,t,n,r){let i=e.referenceType,o=n.enter("imageReference"),a=n.enter("label"),l=n.createTracker(r),s=l.move("!["),u=n.safe(e.alt,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),a();let c=n.stack;n.stack=[],a=n.enter("reference");let f=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return a(),n.stack=c,o(),i==="full"||!u||u!==f?s+=l.move(f+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function sh(){return "!"}Li.peek=uh;function Li(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){let a=n.unsafe[o],l=n.compilePattern(a),s;if(a.atBreak)for(;s=l.exec(r);){let u=s.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(s.index+1);}}return i+r+i}function uh(){return "`"}function Ri(e,t){let n=et(e);return !!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Di.peek=ch;function Di(e,t,n,r){let i=xt(n),o=i==='"'?"Quote":"Apostrophe",a=n.createTracker(r),l,s;if(Ri(e,n)){let c=n.stack;n.stack=[],l=n.enter("autolink");let f=a.move("<");return f+=a.move(n.containerPhrasing(e,{before:f,after:">",...a.current()})),f+=a.move(">"),l(),n.stack=c,f}l=n.enter("link"),s=n.enter("label");let u=a.move("[");return u+=a.move(n.containerPhrasing(e,{before:u,after:"](",...a.current()})),u+=a.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(s=n.enter("destinationRaw"),u+=a.move(n.safe(e.url,{before:u,after:e.title?" ":")",...a.current()}))),s(),e.title&&(s=n.enter(`title${o}`),u+=a.move(" "+i),u+=a.move(n.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),s()),u+=a.move(")"),l(),u}function ch(e,t,n){return Ri(e,n)?"<":"["}Mi.peek=ph;function Mi(e,t,n,r){let i=e.referenceType,o=n.enter("linkReference"),a=n.enter("label"),l=n.createTracker(r),s=l.move("["),u=n.containerPhrasing(e,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),a();let c=n.stack;n.stack=[],a=n.enter("reference");let f=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return a(),n.stack=c,o(),i==="full"||!u||u!==f?s+=l.move(f+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function ph(){return "["}function vt(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Us(e){let t=vt(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Bs(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Vn(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Hs(e,t,n,r){let i=n.enter("list"),o=n.bulletCurrent,a=e.ordered?Bs(n):vt(n),l=e.ordered?a==="."?")":".":Us(n),s=t&&n.bulletLastUsed?a===n.bulletLastUsed:false;if(!e.ordered){let c=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&c&&(!c.children||!c.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=true),Vn(n)===a&&c){let f=-1;for(;++f<e.children.length;){let p=e.children[f];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){s=true;break}}}}s&&(a=l),n.bulletCurrent=a;let u=n.containerFlow(e,r);return n.bulletLastUsed=a,n.bulletCurrent=o,i(),u}function js(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Ws(e,t,n,r){let i=js(n),o=n.bulletCurrent||vt(n);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===false?0:t.children.indexOf(e))+o);let a=o.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(a=Math.ceil(a/4)*4);let l=n.createTracker(r);l.move(o+" ".repeat(a-o.length)),l.shift(a);let s=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,l.current()),c);return s(),u;function c(f,p,m){return p?(m?"":" ".repeat(a))+f:(m?o:o+" ".repeat(a-o.length))+f}}function Vs(e,t,n,r){let i=n.enter("paragraph"),o=n.enter("phrasing"),a=n.containerPhrasing(e,r);return o(),i(),a}var Ni=qe(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function $s(e,t,n,r){return (e.children.some(function(a){return Ni(a)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function qs(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Fi.peek=fh;function Fi(e,t,n,r){let i=qs(n),o=n.enter("strong"),a=n.createTracker(r),l=a.move(i+i),s=a.move(n.containerPhrasing(e,{after:i,before:l,...a.current()})),u=s.charCodeAt(0),c=bt(r.before.charCodeAt(r.before.length-1),u,i);c.inside&&(s=Ye(u)+s.slice(1));let f=s.charCodeAt(s.length-1),p=bt(r.after.charCodeAt(0),f,i);p.inside&&(s=s.slice(0,-1)+Ye(f));let m=a.move(i+i);return o(),n.attentionEncodeSurroundingInfo={after:p.outside,before:c.outside},l+s+m}function fh(e,t,n){return n.options.strong||"*"}function Ys(e,t,n,r){return n.safe(e.value,r)}function Ks(e){let t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Xs(e,t,n){let r=(Vn(n)+(n.options.ruleSpaces?" ":"")).repeat(Ks(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Vt={blockquote:Is,break:Ei,code:Ds,definition:Ms,emphasis:Ii,hardBreak:Ei,heading:Os,html:Ai,image:Ti,imageReference:Pi,inlineCode:Li,link:Di,linkReference:Mi,list:Hs,listItem:Ws,paragraph:Vs,root:$s,strong:Fi,text:Ys,thematicBreak:Xs};function Ui(){return {enter:{table:mh,tableData:Gs,tableHeader:Gs,tableRow:dh},exit:{codeText:gh,table:hh,tableData:Oi,tableHeader:Oi,tableRow:Oi}}}function mh(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=true;}function hh(e){this.exit(e),this.data.inTable=void 0;}function dh(e){this.enter({type:"tableRow",children:[]},e);}function Oi(e){this.exit(e);}function Gs(e){this.enter({type:"tableCell",children:[]},e);}function gh(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,yh));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e);}function yh(e,t){return t==="|"?t:e}function Bi(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return {unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:true,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:true,character:":",after:"-"},{atBreak:true,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:a,tableCell:s,tableRow:l}};function a(m,h,x,w){return u(c(m,x,w),m.align)}function l(m,h,x,w){let y=f(m,x,w),z=u([y]);return z.slice(0,z.indexOf(`
`))}function s(m,h,x,w){let y=x.enter("tableCell"),z=x.enter("phrasing"),S=x.containerPhrasing(m,{...w,before:o,after:o});return z(),y(),S}function u(m,h){return Es(m,{align:h,alignDelimiters:r,padding:n,stringLength:i})}function c(m,h,x){let w=m.children,y=-1,z=[],S=h.enter("table");for(;++y<w.length;)z[y]=f(w[y],h,x);return S(),z}function f(m,h,x){let w=m.children,y=-1,z=[],S=h.enter("tableRow");for(;++y<w.length;)z[y]=s(w[y],m,h,x);return S(),z}function p(m,h,x){let w=Vt.inlineCode(m,h,x);return x.stack.includes("tableCell")&&(w=w.replace(/\|/g,"\\$&")),w}}function Hi(){return {exit:{taskListCheckValueChecked:Js,taskListCheckValueUnchecked:Js,paragraph:xh}}}function ji(){return {unsafe:[{atBreak:true,character:"-",after:"[:|-]"}],handlers:{listItem:bh}}}function Js(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked";}function xh(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let i=t.children,o=-1,a;for(;++o<i.length;){let l=i[o];if(l.type==="paragraph"){a=l;break}}a===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)));}}this.exit(e);}function bh(e,t,n,r){let i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",l=n.createTracker(r);o&&l.move(a);let s=Vt.listItem(e,t,n,{...r,...l.current()});return o&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),s;function u(c){return c+a}}function Wi(){return [wi(),_i(),Si(),Ui(),Hi()]}function Vi(e){return {extensions:[ki(),zi(e),Ci(),Bi(e),ji()]}}var vh={tokenize:Sh,partial:true},Qs={tokenize:Ch,partial:true},Zs={tokenize:Eh,partial:true},eu={tokenize:Ih,partial:true},wh={tokenize:Ah,partial:true},tu={name:"wwwAutolink",tokenize:_h,previous:ru},nu={name:"protocolAutolink",tokenize:zh,previous:iu},Ue={name:"emailAutolink",tokenize:kh,previous:ou},Pe={};function qi(){return {text:Pe}}var ct=48;for(;ct<123;)Pe[ct]=Ue,ct++,ct===58?ct=65:ct===91&&(ct=97);Pe[43]=Ue;Pe[45]=Ue;Pe[46]=Ue;Pe[95]=Ue;Pe[72]=[Ue,nu];Pe[104]=[Ue,nu];Pe[87]=[Ue,tu];Pe[119]=[Ue,tu];function kh(e,t,n){let r=this,i,o;return a;function a(f){return !$i(f)||!ou.call(r,r.previous)||Yi(r.events)?n(f):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(f))}function l(f){return $i(f)?(e.consume(f),l):f===64?(e.consume(f),s):n(f)}function s(f){return f===46?e.check(wh,c,u)(f):f===45||f===95||ne(f)?(o=true,e.consume(f),s):c(f)}function u(f){return e.consume(f),i=true,s}function c(f){return o&&i&&ue(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(f)):n(f)}}function _h(e,t,n){let r=this;return i;function i(a){return a!==87&&a!==119||!ru.call(r,r.previous)||Yi(r.events)?n(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(vh,e.attempt(Qs,e.attempt(Zs,o),n),n)(a))}function o(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(a)}}function zh(e,t,n){let r=this,i="",o=false;return a;function a(f){return (f===72||f===104)&&iu.call(r,r.previous)&&!Yi(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(f),e.consume(f),l):n(f)}function l(f){if(ue(f)&&i.length<5)return i+=String.fromCodePoint(f),e.consume(f),l;if(f===58){let p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(f),s}return n(f)}function s(f){return f===47?(e.consume(f),o?u:(o=true,s)):n(f)}function u(f){return f===null||tt(f)||$(f)||Ae(f)||nt(f)?n(f):e.attempt(Qs,e.attempt(Zs,c),n)(f)}function c(f){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(f)}}function Sh(e,t,n){let r=0;return i;function i(a){return (a===87||a===119)&&r<3?(r++,e.consume(a),i):a===46&&r===3?(e.consume(a),o):n(a)}function o(a){return a===null?n(a):t(a)}}function Ch(e,t,n){let r,i,o;return a;function a(u){return u===46||u===95?e.check(eu,s,l)(u):u===null||$(u)||Ae(u)||u!==45&&nt(u)?s(u):(o=true,e.consume(u),a)}function l(u){return u===95?r=true:(i=r,r=void 0),e.consume(u),a}function s(u){return i||r||!o?n(u):t(u)}}function Eh(e,t){let n=0,r=0;return i;function i(a){return a===40?(n++,e.consume(a),i):a===41&&r<n?o(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(eu,t,o)(a):a===null||$(a)||Ae(a)?t(a):(e.consume(a),i)}function o(a){return a===41&&r++,e.consume(a),i}}function Ih(e,t,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),o):l===93?(e.consume(l),i):l===60||l===null||$(l)||Ae(l)?t(l):n(l)}function i(l){return l===null||l===40||l===91||$(l)||Ae(l)?t(l):r(l)}function o(l){return ue(l)?a(l):n(l)}function a(l){return l===59?(e.consume(l),r):ue(l)?(e.consume(l),a):n(l)}}function Ah(e,t,n){return r;function r(o){return e.consume(o),i}function i(o){return ne(o)?n(o):t(o)}}function ru(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||$(e)}function iu(e){return !ue(e)}function ou(e){return !(e===47||$i(e))}function $i(e){return e===43||e===45||e===46||e===95||ne(e)}function Yi(e){let t=e.length,n=false;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=true;break}if(r._gfmAutolinkLiteralWalkedInto){n=false;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=true),n}var Th={tokenize:Fh,partial:true};function Ki(){return {document:{91:{name:"gfmFootnoteDefinition",tokenize:Dh,continuation:{tokenize:Mh},exit:Nh}},text:{91:{name:"gfmFootnoteCall",tokenize:Rh},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Ph,resolveTo:Lh}}}}function Ph(e,t,n){let r=this,i=r.events.length,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a;for(;i--;){let s=r.events[i][1];if(s.type==="labelImage"){a=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return l;function l(s){if(!a||!a._balanced)return n(s);let u=me(r.sliceSerialize({start:a.end,end:r.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function Lh(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;let a={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],["enter",i,t],e[n+3],e[n+4],["enter",o,t],["exit",o,t],["enter",a,t],["enter",l,t],["exit",l,t],["exit",a,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(n,e.length-n+1,...s),e}function Rh(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o=0,a;return l;function l(f){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),s}function s(f){return f!==94?n(f):(e.enter("gfmFootnoteCallMarker"),e.consume(f),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(f){if(o>999||f===93&&!a||f===null||f===91||$(f))return n(f);if(f===93){e.exit("chunkString");let p=e.exit("gfmFootnoteCallString");return i.includes(me(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(f)}return $(f)||(a=true),o++,e.consume(f),f===92?c:u}function c(f){return f===91||f===92||f===93?(e.consume(f),o++,u):u(f)}}function Dh(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o,a=0,l;return s;function s(h){return e.enter("gfmFootnoteDefinition")._container=true,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(h){return h===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",c):n(h)}function c(h){if(a>999||h===93&&!l||h===null||h===91||$(h))return n(h);if(h===93){e.exit("chunkString");let x=e.exit("gfmFootnoteDefinitionLabelString");return o=me(r.sliceSerialize(x)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return $(h)||(l=true),a++,e.consume(h),h===92?f:c}function f(h){return h===91||h===92||h===93?(e.consume(h),a++,c):c(h)}function p(h){return h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),i.includes(o)||i.push(o),L(e,m,"gfmFootnoteDefinitionWhitespace")):n(h)}function m(h){return t(h)}}function Mh(e,t,n){return e.check(Te,t,e.attempt(Th,t,n))}function Nh(e){e.exit("gfmFootnoteDefinition");}function Fh(e,t,n){let r=this;return L(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){let a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],true).length===4?t(o):n(o)}}function Xi(e){let n=(e||{}).singleTilde,r={name:"strikethrough",tokenize:o,resolveAll:i};return n==null&&(n=true),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(a,l){let s=-1;for(;++s<a.length;)if(a[s][0]==="enter"&&a[s][1].type==="strikethroughSequenceTemporary"&&a[s][1]._close){let u=s;for(;u--;)if(a[u][0]==="exit"&&a[u][1].type==="strikethroughSequenceTemporary"&&a[u][1]._open&&a[s][1].end.offset-a[s][1].start.offset===a[u][1].end.offset-a[u][1].start.offset){a[s][1].type="strikethroughSequence",a[u][1].type="strikethroughSequence";let c={type:"strikethrough",start:Object.assign({},a[u][1].start),end:Object.assign({},a[s][1].end)},f={type:"strikethroughText",start:Object.assign({},a[u][1].end),end:Object.assign({},a[s][1].start)},p=[["enter",c,l],["enter",a[u][1],l],["exit",a[u][1],l],["enter",f,l]],m=l.parser.constructs.insideSpan.null;m&&oe(p,p.length,0,Ve(m,a.slice(u+1,s),l)),oe(p,p.length,0,[["exit",f,l],["enter",a[s][1],l],["exit",a[s][1],l],["exit",c,l]]),oe(a,u-1,s-u+3,p),s=u+p.length-2;break}}for(s=-1;++s<a.length;)a[s][1].type==="strikethroughSequenceTemporary"&&(a[s][1].type="data");return a}function o(a,l,s){let u=this.previous,c=this.events,f=0;return p;function p(h){return u===126&&c[c.length-1][1].type!=="characterEscape"?s(h):(a.enter("strikethroughSequenceTemporary"),m(h))}function m(h){let x=Oe(u);if(h===126)return f>1?s(h):(a.consume(h),f++,m);if(f<2&&!n)return s(h);let w=a.exit("strikethroughSequenceTemporary"),y=Oe(h);return w._open=!y||y===2&&!!x,w._close=!x||x===2&&!!y,l(h)}}}var $n=class{constructor(){this.map=[];}add(t,n,r){Oh(this,t,n,r);}consume(t){if(this.map.sort(function(o,a){return o[0]-a[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(let o of i)t.push(o);i=r.pop();}this.map.length=0;}};function Oh(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1;}e.map.push([t,n,r]);}}function au(e,t){let n=false,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let o=r.length-1;r[o]=r[o]==="left"?"center":"right";}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=true);t+=1;}return r}function Gi(){return {flow:{null:{name:"table",tokenize:Uh,resolveAll:Bh}}}}function Uh(e,t,n){let r=this,i=0,o=0,a;return l;function l(b){let X=r.events.length-1;for(;X>-1;){let U=r.events[X][1].type;if(U==="lineEnding"||U==="linePrefix")X--;else break}let W=X>-1?r.events[X][1].type:null,P=W==="tableHead"||W==="tableRow"?k:s;return P===k&&r.parser.lazy[r.now().line]?n(b):P(b)}function s(b){return e.enter("tableHead"),e.enter("tableRow"),u(b)}function u(b){return b===124||(a=true,o+=1),c(b)}function c(b){return b===null?n(b):A(b)?o>1?(o=0,r.interrupt=true,e.exit("tableRow"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),m):n(b):R(b)?L(e,c,"whitespace")(b):(o+=1,a&&(a=false,i+=1),b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),a=true,c):(e.enter("data"),f(b)))}function f(b){return b===null||b===124||$(b)?(e.exit("data"),c(b)):(e.consume(b),b===92?p:f)}function p(b){return b===92||b===124?(e.consume(b),f):f(b)}function m(b){return r.interrupt=false,r.parser.lazy[r.now().line]?n(b):(e.enter("tableDelimiterRow"),a=false,R(b)?L(e,h,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):h(b))}function h(b){return b===45||b===58?w(b):b===124?(a=true,e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),x):D(b)}function x(b){return R(b)?L(e,w,"whitespace")(b):w(b)}function w(b){return b===58?(o+=1,a=true,e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),y):b===45?(o+=1,y(b)):b===null||A(b)?M(b):D(b)}function y(b){return b===45?(e.enter("tableDelimiterFiller"),z(b)):D(b)}function z(b){return b===45?(e.consume(b),z):b===58?(a=true,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(b))}function S(b){return R(b)?L(e,M,"whitespace")(b):M(b)}function M(b){return b===124?h(b):b===null||A(b)?!a||i!==o?D(b):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(b)):D(b)}function D(b){return n(b)}function k(b){return e.enter("tableRow"),V(b)}function V(b){return b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),V):b===null||A(b)?(e.exit("tableRow"),t(b)):R(b)?L(e,V,"whitespace")(b):(e.enter("data"),q(b))}function q(b){return b===null||b===124||$(b)?(e.exit("data"),V(b)):(e.consume(b),b===92?j:q)}function j(b){return b===92||b===124?(e.consume(b),q):q(b)}}function Bh(e,t){let n=-1,r=true,i=0,o=[0,0,0,0],a=[0,0,0,0],l=false,s=0,u,c,f,p=new $n;for(;++n<e.length;){let m=e[n],h=m[1];m[0]==="enter"?h.type==="tableHead"?(l=false,s!==0&&(lu(p,t,s,u,c),c=void 0,s=0),u={type:"table",start:Object.assign({},h.start),end:Object.assign({},h.end)},p.add(n,0,[["enter",u,t]])):h.type==="tableRow"||h.type==="tableDelimiterRow"?(r=true,f=void 0,o=[0,0,0,0],a=[0,n+1,0,0],l&&(l=false,c={type:"tableBody",start:Object.assign({},h.start),end:Object.assign({},h.end)},p.add(n,0,[["enter",c,t]])),i=h.type==="tableDelimiterRow"?2:c?3:1):i&&(h.type==="data"||h.type==="tableDelimiterMarker"||h.type==="tableDelimiterFiller")?(r=false,a[2]===0&&(o[1]!==0&&(a[0]=a[1],f=qn(p,t,o,i,void 0,f),o=[0,0,0,0]),a[2]=n)):h.type==="tableCellDivider"&&(r?r=false:(o[1]!==0&&(a[0]=a[1],f=qn(p,t,o,i,void 0,f)),o=a,a=[o[1],n,0,0])):h.type==="tableHead"?(l=true,s=n):h.type==="tableRow"||h.type==="tableDelimiterRow"?(s=n,o[1]!==0?(a[0]=a[1],f=qn(p,t,o,i,n,f)):a[1]!==0&&(f=qn(p,t,a,i,n,f)),i=0):i&&(h.type==="data"||h.type==="tableDelimiterMarker"||h.type==="tableDelimiterFiller")&&(a[3]=n);}for(s!==0&&lu(p,t,s,u,c),p.consume(t.events),n=-1;++n<t.events.length;){let m=t.events[n];m[0]==="enter"&&m[1].type==="table"&&(m[1]._align=au(t.events,n));}return e}function qn(e,t,n,r,i,o){let a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(o.end=Object.assign({},wt(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));let s=wt(t.events,n[1]);if(o={type:a,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",o,t]]),n[2]!==0){let u=wt(t.events,n[2]),c=wt(t.events,n[3]),f={type:l,start:Object.assign({},u),end:Object.assign({},c)};if(e.add(n[2],0,[["enter",f,t]]),r!==2){let p=t.events[n[2]],m=t.events[n[3]];if(p[1].end=Object.assign({},m[1].end),p[1].type="chunkText",p[1].contentType="text",n[3]>n[2]+1){let h=n[2]+1,x=n[3]-n[2]-1;e.add(h,x,[]);}}e.add(n[3]+1,0,[["exit",f,t]]);}return i!==void 0&&(o.end=Object.assign({},wt(t.events,i)),e.add(i,0,[["exit",o,t]]),o=void 0),o}function lu(e,t,n,r,i){let o=[],a=wt(t.events,n);i&&(i.end=Object.assign({},a),o.push(["exit",i,t])),r.end=Object.assign({},a),o.push(["exit",r,t]),e.add(n+1,0,o);}function wt(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}var Hh={name:"tasklistCheck",tokenize:jh};function Ji(){return {text:{91:Hh}}}function jh(e,t,n){let r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),o)}function o(s){return $(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),a):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),a):n(s)}function a(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(s)}function l(s){return A(s)?t(s):R(s)?e.check({tokenize:Wh},t,n)(s):n(s)}}function Wh(e,t,n){return L(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function su(e){return bn([qi(),Ki(),Xi(e),Gi(),Ji()])}var Vh={};function Yn(e){let t=this,n=e||Vh,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(su(n)),o.push(Wi()),a.push(Vi(n));}var $h="c605c58-2026-10-10T18:07:03.429Z".split("-")[0],qh="https://chat.converzen.de",uu=()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:v("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"})}),cu=()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:v("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),Yh=()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:v("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})}),Kh=()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:v("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),kt=({custom:e,fallback:t,className:n})=>e?v("span",{className:n,dangerouslySetInnerHTML:{__html:e}}):t,Xh=({title:e,subtitle:t,onClose:n,onClear:r,darkMode:i,icons:o,authControl:a})=>v("div",{className:`cvz-p-4 cvz-shadow-md cvz-flex cvz-justify-between cvz-items-start ${i?"cvz-bg-gradient-to-b cvz-from-gray-900 cvz-to-gray-800 cvz-text-white":"cvz-bg-gradient-to-b cvz-from-blue-600 cvz-to-blue-500 cvz-text-white"}`,children:[v("div",{className:"cvz-flex cvz-items-center cvz-gap-3",children:[v("div",{className:"cvz-relative",children:[v("div",{className:`cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-border-2 ${i?"cvz-border-gray-800":"cvz-border-blue-600"}`}),v("div",{className:"cvz-absolute cvz-top-0 cvz-left-0 cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-animate-ping cvz-opacity-75"})]}),v("div",{children:[v("h3",{className:"cvz-font-bold cvz-text-lg cvz-leading-tight",children:e}),t&&v("p",{className:`cvz-text-xs cvz-mt-0.5 ${i?"cvz-text-gray-300":"cvz-text-blue-100"}`,children:t})]})]}),v("div",{className:"cvz-flex cvz-gap-2 cvz-items-center",children:[a,v("button",{onClick:r,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Clear History",children:v(kt,{custom:o?.clear,fallback:v(Kh,{}),className:"cvz-w-5 cvz-h-5"})}),v("button",{onClick:n,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Close Chat",children:v(kt,{custom:o?.close,fallback:v(cu,{}),className:"cvz-w-6 cvz-h-6"})})]})]}),Gh=({content:e,enableMarkdown:t,darkMode:n})=>t?v("div",{className:"cvz-markdown-content",children:v(hi,{remarkPlugins:[Yn],components:{p:({children:r})=>v("p",{className:`cvz-mb-2 cvz-last:cvz-mb-0 ${n?"cvz-text-gray-100":""}`,children:r}),h1:({children:r})=>v("h1",{className:`cvz-text-xl cvz-font-bold cvz-mb-2 cvz-mt-4 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h2:({children:r})=>v("h2",{className:`cvz-text-lg cvz-font-bold cvz-mb-2 cvz-mt-3 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h3:({children:r})=>v("h3",{className:`cvz-text-base cvz-font-bold cvz-mb-1 cvz-mt-2 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),ul:({children:r})=>v("ul",{className:`cvz-list-disc cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),ol:({children:r})=>v("ol",{className:`cvz-list-decimal cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),li:({children:r})=>v("li",{className:"cvz-ml-2",children:r}),code:({children:r})=>v("code",{className:`cvz-px-1 cvz-py-0.5 cvz-rounded cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),pre:({children:r})=>v("pre",{className:`cvz-p-2 cvz-rounded cvz-overflow-x-auto cvz-mb-2 cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),blockquote:({children:r})=>v("blockquote",{className:`cvz-border-l-4 cvz-pl-3 cvz-italic cvz-mb-2 ${n?"cvz-border-gray-600 cvz-text-gray-300":"cvz-border-gray-300"}`,children:r}),strong:({children:r})=>v("strong",{className:"cvz-font-bold",children:r}),em:({children:r})=>v("em",{className:"cvz-italic",children:r}),a:({children:r,href:i})=>v("a",{href:i,className:`cvz-underline ${n?"cvz-text-blue-400 cvz-hover:cvz-text-blue-300":"cvz-text-blue-600 cvz-hover:cvz-text-blue-800"}`,target:"_blank",rel:"noopener noreferrer",children:r}),table:({children:r})=>v("div",{className:"cvz-overflow-x-auto cvz-mb-2",children:v("table",{className:`cvz-w-full cvz-text-sm cvz-border-collapse ${n?"cvz-text-gray-100":""}`,children:r})}),thead:({children:r})=>v("thead",{className:`${n?"cvz-bg-gray-700":"cvz-bg-gray-100"}`,children:r}),tbody:({children:r})=>v("tbody",{children:r}),tr:({children:r})=>v("tr",{className:`cvz-border-b ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:r}),th:({children:r})=>v("th",{className:`cvz-px-3 cvz-py-1.5 cvz-text-left cvz-font-semibold cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r}),td:({children:r})=>v("td",{className:`cvz-px-3 cvz-py-1.5 cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r})},children:e})}):Ie("span",null,e),Jh=({messages:e,isStreaming:t,streamingMessage:n,thinkingMessage:r,activeToolCall:i,isFinalizingRef:o,messagesEndRef:a,enableMarkdown:l,darkMode:s,icons:u})=>{let c=nn(null),[f,p]=fe(true);return Se(()=>{let m=c.current;if(!m)return;let h=()=>{let{scrollTop:x,scrollHeight:w,clientHeight:y}=m,z=w-x-y<100;p(z);};return m.addEventListener("scroll",h),()=>m.removeEventListener("scroll",h)},[]),Se(()=>{f&&a.current&&a.current.scrollIntoView({behavior:"smooth"});},[e,n,r,i,f,a]),v("div",{ref:c,className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-4 cvz-space-y-4 ${s?"cvz-bg-gray-900 cvz-scrollbar-dark":"cvz-bg-gray-50 cvz-scrollbar-light"}`,children:[e.length===0&&!n&&v("div",{className:`cvz-flex cvz-flex-col cvz-items-center cvz-justify-center cvz-h-full cvz-space-y-2 ${s?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:[v(kt,{custom:u?.launcher,fallback:v(uu,{}),className:"cvz-w-6 cvz-h-6"}),v("p",{className:"cvz-text-sm",children:"Start a conversation"})]}),e.map(m=>v("div",{className:`cvz-flex ${m.role==="USER"?"cvz-justify-end":"cvz-justify-start"}`,children:v("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-text-sm cvz-shadow-sm ${m.role==="USER"?s?"cvz-bg-blue-500 cvz-text-white cvz-rounded-br-none":"cvz-bg-blue-600 cvz-text-white cvz-rounded-br-none":s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border cvz-border-gray-700 cvz-rounded-bl-none":"cvz-bg-white cvz-text-gray-800 cvz-border cvz-border-gray-100 cvz-rounded-bl-none"}`,children:v(Gh,{content:m.content,enableMarkdown:l,darkMode:s})})},m.createdAt.toString())),t&&n&&!o.current&&v("div",{className:"cvz-flex cvz-justify-start",children:v("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-text-sm cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border-gray-700":"cvz-bg-white cvz-text-gray-800 cvz-border-gray-100"}`,children:n})}),t&&!n&&v("div",{className:"cvz-flex cvz-justify-start",children:v("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:i?v("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:["Calling ",i,"\u2026"]}):r?v("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:r}):v("div",{className:"cvz-flex cvz-space-x-1",children:[v("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"0ms"}}),v("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"150ms"}}),v("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"300ms"}})]})})}),v("div",{ref:a})]})},Qh=({value:e,onChange:t,onSubmit:n,isLoading:r,placeholder:i,darkMode:o,icons:a})=>v("form",{onSubmit:n,className:`cvz-p-4 cvz-border-t ${o?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:[v("div",{className:"cvz-relative cvz-flex cvz-items-center",children:[v("input",{type:"text",value:e,onChange:l=>t(l.target.value),placeholder:i,className:`cvz-w-full cvz-border cvz-text-sm cvz-rounded-full cvz-pl-4 cvz-pr-12 cvz-py-3 cvz-focus:cvz-outline-none cvz-focus:cvz-ring-1 cvz-transition-all ${o?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100 cvz-placeholder-gray-400 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500":"cvz-bg-gray-50 cvz-border-gray-200 cvz-text-gray-900 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500"}`}),v("button",{type:"submit",disabled:!e.trim()||r,className:`cvz-absolute cvz-right-2 cvz-p-2 cvz-text-white cvz-rounded-full cvz-disabled:cvz-opacity-50 cvz-transition-colors cvz-shadow-sm ${o?"cvz-bg-blue-500 cvz-hover:cvz-bg-blue-600 cvz-disabled:cvz-hover:cvz-bg-blue-500":"cvz-bg-blue-600 cvz-hover:cvz-bg-blue-700 cvz-disabled:cvz-hover:cvz-bg-blue-600"}`,children:v(kt,{custom:a?.send,fallback:v(Yh,{}),className:"cvz-w-5 cvz-h-5"})})]}),v("div",{className:"cvz-text-center cvz-mt-2",children:v("p",{className:`cvz-text-[10px] ${o?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:["Powered by ConverZen",v("span",{className:o?"cvz-text-gray-600":"cvz-text-gray-300",children:[" \xB7 ",$h]})]})})]}),Zh=({config:e})=>{let t=ya(e),[n,r]=fe(""),[i,o]=fe(false),a=nn(null),l=async x=>{if(x?.preventDefault(),!n.trim()||t.isStreaming)return;let w=n;r(""),await t.sendMessage(w);},s=async()=>{window.confirm("Are you sure you want to clear your chat history?")&&await t.clearHistory();},u=xa(e.style),c=ba(e.style),f=va(e.style),p=wa(e.style,t.isOpen),m=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="bottom-left")||typeof e.style.position=="object"&&e.style.position.bottom,h=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="top-right")||typeof e.style.position=="object"&&e.style.position.right;return v("div",{className:"cvz-fixed cvz-z-[9999] cvz-font-sans",style:u,children:[v("div",{className:`
          cvz-absolute cvz-rounded-2xl cvz-shadow-2xl cvz-flex cvz-flex-col cvz-overflow-hidden
          cvz-transition-all cvz-duration-300
          ${e.darkMode?"cvz-bg-gray-800":"cvz-bg-white"}
          ${m?"cvz-bottom-20":"cvz-top-20"}
          ${h?"cvz-right-0":"cvz-left-0"}
          ${m&&h?"cvz-origin-bottom-right":m&&!h?"cvz-origin-bottom-left":!m&&h?"cvz-origin-top-right":"cvz-origin-top-left"}
          ${t.isOpen?"cvz-opacity-100 cvz-scale-100 cvz-translate-y-0":"cvz-opacity-0 cvz-scale-95 cvz-translate-y-4 cvz-pointer-events-none"}
        `,style:{...c,borderColor:f,borderWidth:"1px",borderStyle:"solid"},children:[v(Xh,{title:e.headerMsg||"Support Chat",subtitle:e.subheaderMsg||"We typically reply in a few minutes",onClose:()=>t.close(),onClear:s,darkMode:e.darkMode,icons:e.icons,authControl:e.endUserLicensing?v("button",{onClick:()=>o(true),className:`cvz-text-xs cvz-font-medium cvz-px-2 cvz-py-1 cvz-rounded-md cvz-transition-colors cvz-whitespace-nowrap ${e.darkMode?"cvz-text-gray-200 hover:cvz-bg-gray-700/50":"cvz-text-white hover:cvz-bg-blue-600/50"}`,title:t.endUserAuth?`Signed in as ${t.endUserAuth.email}`:"Authenticate",children:t.endUserAuth?"Account":"Authenticate"}):void 0}),v("div",{ref:x=>t.setCaptchaContainer(x),className:`cvz-flex cvz-justify-center cvz-overflow-hidden cvz-transition-all cvz-duration-200 ${t.captchaPending?"cvz-max-h-32 cvz-py-2":"cvz-max-h-0 cvz-py-0"}`}),v(Jh,{messages:t.messages,isStreaming:t.isStreaming,streamingMessage:t.streamingMessage,thinkingMessage:t.thinkingMessage,activeToolCall:t.activeToolCall,isFinalizingRef:t.isFinalizingRef,messagesEndRef:a,enableMarkdown:e.enableMarkdown,darkMode:e.darkMode,icons:e.icons}),t.showAuthNudge&&!Ge(t.endUserAuth)&&v("div",{className:`cvz-px-4 cvz-py-2 cvz-text-xs cvz-flex cvz-items-center cvz-justify-between cvz-gap-2 ${e.darkMode?"cvz-bg-amber-900/40 cvz-text-amber-200":"cvz-bg-amber-50 cvz-text-amber-800"}`,children:[v("span",{children:"You've reached the free limit - authenticate to keep chatting."}),v("button",{onClick:()=>o(true),className:"cvz-underline cvz-font-medium cvz-shrink-0",children:"Authenticate"})]}),v(Qh,{value:n,onChange:r,onSubmit:l,isLoading:t.isLoading||t.isStreaming,placeholder:e.promptPlaceholder||"Type a message...",darkMode:e.darkMode,icons:e.icons}),e.endUserLicensing&&v(qo,{open:i,onClose:()=>o(false),darkMode:e.darkMode,baseUrl:e.chatUrl||qh,getBaseAuth:()=>t.getTenantAuthToken(),endUserAuth:t.endUserAuth,onAuthenticated:t.authenticateEndUser,initialEmail:Uo()??void 0})]}),v("button",{onClick:()=>t.isOpen?t.close():t.open(),className:`
          cvz-flex cvz-items-center cvz-justify-center
          cvz-w-14 cvz-h-14 cvz-rounded-full cvz-shadow-lg cvz-transition-all cvz-duration-300
          ${t.isOpen?"cvz-rotate-90":"cvz-hover:cvz-scale-105"}
        `,style:{backgroundColor:p.backgroundColor},onMouseEnter:x=>{!t.isOpen&&e.style?.buttonColor?.hover&&(x.currentTarget.style.backgroundColor=e.style.buttonColor.hover);},onMouseLeave:x=>{t.isOpen||(x.currentTarget.style.backgroundColor=p.backgroundColor);},children:v("div",{className:"cvz-text-white",children:t.isOpen?v(kt,{custom:e.icons?.close,fallback:v(cu,{}),className:"cvz-w-6 cvz-h-6"}):v(kt,{custom:e.icons?.launcher,fallback:v(uu,{}),className:"cvz-w-6 cvz-h-6"})})})]})},pu=Zh;var Qi=`*, ::before, ::after {
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
`;if(N){N.debounceRendering;N.debounceRendering=t=>{requestAnimationFrame(t);};}var td="cvz-widget-host";function nd(e,t){let n=document.createElement("div");n.id=td,document.body.appendChild(n);let r=n.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=Qi,r.appendChild(i);let o=document.createElement("div");return o.id="cvz-root",r.appendChild(o),Qt(Ie(t,{config:e}),o),{hostElement:n,root:o}}var Zi=class{hostElement=null;root=null;buildId="c605c58-2026-10-10T18:07:03.429Z";init(t){if(this.hostElement){console.warn("cvzWidget is already initialized.");return}console.log("init: Initializing cvzWidget...",this.buildId),console.log("CSS Length:",Qi.length),{hostElement:this.hostElement,root:this.root}=nd(t,pu);}hide(){if(!this.hostElement){console.warn("hide: cvzWidget is not initialized.");return}this.root&&(Qt(null,this.root),this.root=null),this.hostElement&&(this.hostElement.remove(),this.hostElement=null);}},fu=new Zi;typeof window<"u"&&(window.cvzWidget=fu);var $z=fu;export{$z as default};