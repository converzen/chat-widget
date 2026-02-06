(function(){'use strict';var Fa=Object.create;var fn=Object.defineProperty;var Ba=Object.getOwnPropertyDescriptor;var Ua=Object.getOwnPropertyNames;var ja=Object.getPrototypeOf,Ha=Object.prototype.hasOwnProperty;var at=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Nr=(e,t)=>{for(var n in t)fn(e,n,{get:t[n],enumerable:true});},Va=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ua(t))!Ha.call(e,i)&&i!==n&&fn(e,i,{get:()=>t[i],enumerable:!(r=Ba(t,i))||r.enumerable});return e};var Lr=(e,t,n)=>(n=e!=null?Fa(ja(e)):{},Va(fn(n,"default",{value:e,enumerable:true}),e));var zi=at((Kp,ki)=>{var bi=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,ul=/\n/g,cl=/^\s*/,pl=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,fl=/^:\s*/,ml=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,hl=/^[;\s]*/,dl=/^\s+|\s+$/g,gl=`
`,vi="/",_i="*",He="",yl="comment",xl="declaration";function bl(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return [];t=t||{};var n=1,r=1;function i(g){var b=g.match(ul);b&&(n+=b.length);var w=g.lastIndexOf(gl);r=~w?g.length-w:r+g.length;}function o(){var g={line:n,column:r};return function(b){return b.position=new a(g),c(),b}}function a(g){this.start=g,this.end={line:n,column:r},this.source=t.source;}a.prototype.content=e;function l(g){var b=new Error(t.source+":"+n+":"+r+": "+g);if(b.reason=g,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function u(g){var b=g.exec(e);if(b){var w=b[0];return i(w),e=e.slice(w.length),b}}function c(){u(cl);}function s(g){var b;for(g=g||[];b=p();)b!==false&&g.push(b);return g}function p(){var g=o();if(!(vi!=e.charAt(0)||_i!=e.charAt(1))){for(var b=2;He!=e.charAt(b)&&(_i!=e.charAt(b)||vi!=e.charAt(b+1));)++b;if(b+=2,He===e.charAt(b-1))return l("End of comment missing");var w=e.slice(2,b-2);return r+=2,i(w),e=e.slice(b),r+=2,g({type:yl,comment:w})}}function m(){var g=o(),b=u(pl);if(b){if(p(),!u(fl))return l("property missing ':'");var w=u(ml),x=g({type:xl,property:wi(b[0].replace(bi,He)),value:w?wi(w[0].replace(bi,He)):He});return u(hl),x}}function f(){var g=[];s(g);for(var b;b=m();)b!==false&&(g.push(b),s(g));return g}return c(),f()}function wi(e){return e?e.replace(dl,He):He}ki.exports=bl;});var Si=at(mt=>{var vl=mt&&mt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mt,"__esModule",{value:true});mt.default=wl;var _l=vl(zi());function wl(e,t){let n=null;if(!e||typeof e!="string")return n;let r=(0, _l.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;let{property:a,value:l}=o;i?t(a,l,o):l&&(n=n||{},n[a]=l);}),n}});var Ei=at(Ot=>{Object.defineProperty(Ot,"__esModule",{value:true});Ot.camelCase=void 0;var kl=/^--[a-zA-Z0-9_-]+$/,zl=/-([a-z])/g,Sl=/^[^-]+$/,Cl=/^-(webkit|moz|ms|o|khtml)-/,El=/^-(ms)-/,Il=function(e){return !e||Sl.test(e)||kl.test(e)},Tl=function(e,t){return t.toUpperCase()},Ci=function(e,t){return "".concat(t,"-")},Al=function(e,t){return t===void 0&&(t={}),Il(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(El,Ci):e=e.replace(Cl,Ci),e.replace(zl,Tl))};Ot.camelCase=Al;});var Ti=at((Rn,Ii)=>{var Pl=Rn&&Rn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Nl=Pl(Si()),Ll=Ei();function Ln(e,t){var n={};return !e||typeof e!="string"||(0, Nl.default)(e,function(r,i){r&&i&&(n[(0, Ll.camelCase)(r,t)]=i);}),n}Ln.default=Ln;Ii.exports=Ln;});var ga=at((qy,da)=>{var sn=Object.prototype.hasOwnProperty,ha=Object.prototype.toString,sa=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,ca=function(t){return typeof Array.isArray=="function"?Array.isArray(t):ha.call(t)==="[object Array]"},pa=function(t){if(!t||ha.call(t)!=="[object Object]")return  false;var n=sn.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&sn.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return  false;var i;for(i in t);return typeof i>"u"||sn.call(t,i)},fa=function(t,n){sa&&n.name==="__proto__"?sa(t,n.name,{enumerable:true,configurable:true,value:n.newValue,writable:true}):t[n.name]=n.newValue;},ma=function(t,n){if(n==="__proto__")if(sn.call(t,n)){if(ua)return ua(t,n).value}else return;return t[n]};da.exports=function e(){var t,n,r,i,o,a,l=arguments[0],u=1,c=arguments.length,s=false;for(typeof l=="boolean"&&(s=l,l=arguments[1]||{},u=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});u<c;++u)if(t=arguments[u],t!=null)for(n in t)r=ma(l,n),i=ma(t,n),l!==i&&(s&&i&&(pa(i)||(o=ca(i)))?(o?(o=false,a=r&&ca(r)?r:[]):a=r&&pa(r)?r:{},fa(l,{name:n,newValue:e(s,a,i)})):typeof i<"u"&&fa(l,{name:n,newValue:i}));return l};});var Tt,N,Fr,Fe,Rr,Br,Ur,jr,gn,mn,hn,lt={},Hr=[],$a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,st=Array.isArray;function Ee(e,t){for(var n in t)e[n]=t[n];return e}function yn(e){e&&e.parentNode&&e.parentNode.removeChild(e);}function ze(e,t,n){var r,i,o,a={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?Tt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return Et(e,a,r,i,null)}function Et(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Fr,__i:-1,__u:0};return i==null&&N.vnode!=null&&N.vnode(o),o}function ge(e){return e.children}function ve(e,t){this.props=e,this.context=t;}function Ge(e,t){if(t==null)return e.__?Ge(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Ge(e):null}function Vr(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Vr(e)}}function Dr(e){(!e.__d&&(e.__d=true)&&Fe.push(e)&&!It.__r++||Rr!=N.debounceRendering)&&((Rr=N.debounceRendering)||Br)(It);}function It(){for(var e,t,n,r,i,o,a,l=1;Fe.length;)Fe.length>l&&Fe.sort(Ur),e=Fe.shift(),l=Fe.length,e.__d&&(n=void 0,r=void 0,i=(r=(t=e).__v).__e,o=[],a=[],t.__P&&((n=Ee({},r)).__v=r.__v+1,N.vnode&&N.vnode(n),xn(t.__P,n,r,t.__n,t.__P.namespaceURI,32&r.__u?[i]:null,o,i??Ge(r),!!(32&r.__u),a),n.__v=r.__v,n.__.__k[n.__i]=n,$r(o,n,a),r.__e=r.__=null,n.__e!=i&&Vr(n)));It.__r=0;}function Wr(e,t,n,r,i,o,a,l,u,c,s){var p,m,f,g,b,w,x,I=r&&r.__k||Hr,C=t.length;for(u=Ya(n,t,I,u,C),p=0;p<C;p++)(f=n.__k[p])!=null&&(m=f.__i==-1?lt:I[f.__i]||lt,f.__i=p,w=xn(e,f,m,i,o,a,l,u,c,s),g=f.__e,f.ref&&m.ref!=f.ref&&(m.ref&&bn(m.ref,null,f),s.push(f.ref,f.__c||g,f)),b==null&&g!=null&&(b=g),(x=!!(4&f.__u))||m.__k===f.__k?u=qr(f,u,e,x):typeof f.type=="function"&&w!==void 0?u=w:g&&(u=g.nextSibling),f.__u&=-7);return n.__e=b,u}function Ya(e,t,n,r,i){var o,a,l,u,c,s=n.length,p=s,m=0;for(e.__k=new Array(i),o=0;o<i;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[o]=Et(null,a,null,null,null):st(a)?a=e.__k[o]=Et(ge,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[o]=Et(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[o]=a,u=o+m,a.__=e,a.__b=e.__b+1,l=null,(c=a.__i=Xa(a,n,u,p))!=-1&&(p--,(l=n[c])&&(l.__u|=2)),l==null||l.__v==null?(c==-1&&(i>s?m--:i<s&&m++),typeof a.type!="function"&&(a.__u|=4)):c!=u&&(c==u-1?m--:c==u+1?m++:(c>u?m--:m++,a.__u|=4))):e.__k[o]=null;if(p)for(o=0;o<s;o++)(l=n[o])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=Ge(l)),Xr(l,l));return r}function qr(e,t,n,r){var i,o;if(typeof e.type=="function"){for(i=e.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=e,t=qr(i[o],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=Ge(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function ut(e,t){return t=t||[],e==null||typeof e=="boolean"||(st(e)?e.some(function(n){ut(n,t);}):t.push(e)),t}function Xa(e,t,n,r){var i,o,a,l=e.key,u=e.type,c=t[n],s=c!=null&&(2&c.__u)==0;if(c===null&&l==null||s&&l==c.key&&u==c.type)return n;if(r>(s?1:0)){for(i=n-1,o=n+1;i>=0||o<t.length;)if((c=t[a=i>=0?i--:o++])!=null&&(2&c.__u)==0&&l==c.key&&u==c.type)return a}return  -1}function Mr(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||$a.test(t)?n:n+"px";}function Ct(e,t,n,r,i){var o,a;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else {if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Mr(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||Mr(e.style,t,n[t]);}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(jr,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=gn,e.addEventListener(t,o?hn:mn,o)):e.removeEventListener(t,o?hn:mn,o);else {if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===false&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n));}}function Or(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=gn++;else if(t.t<n.u)return;return n(N.event?N.event(t):t)}}}function xn(e,t,n,r,i,o,a,l,u,c){var s,p,m,f,g,b,w,x,I,C,B,V,v,j,$,F,H,q=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),o=[l=t.__e=n.__e]),(s=N.__b)&&s(t);e:if(typeof q=="function")try{if(x=t.props,I="prototype"in q&&q.prototype.render,C=(s=q.contextType)&&r[s.__c],B=s?C?C.props.value:s.__:r,n.__c?w=(p=t.__c=n.__c).__=p.__E:(I?t.__c=p=new q(x,B):(t.__c=p=new ve(x,B),p.constructor=q,p.render=Ga),C&&C.sub(p),p.state||(p.state={}),p.__n=r,m=p.__d=!0,p.__h=[],p._sb=[]),I&&p.__s==null&&(p.__s=p.state),I&&q.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Ee({},p.__s)),Ee(p.__s,q.getDerivedStateFromProps(x,p.__s))),f=p.props,g=p.state,p.__v=t,m)I&&q.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),I&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else {if(I&&q.getDerivedStateFromProps==null&&x!==f&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(x,B),t.__v==n.__v||!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(x,p.__s,B)===!1){for(t.__v!=n.__v&&(p.props=x,p.state=p.__s,p.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(O){O&&(O.__=t);}),V=0;V<p._sb.length;V++)p.__h.push(p._sb[V]);p._sb=[],p.__h.length&&a.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(x,p.__s,B),I&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(f,g,b);});}if(p.context=B,p.props=x,p.__P=e,p.__e=!1,v=N.__r,j=0,I){for(p.state=p.__s,p.__d=!1,v&&v(t),s=p.render(p.props,p.state,p.context),$=0;$<p._sb.length;$++)p.__h.push(p._sb[$]);p._sb=[];}else do p.__d=!1,v&&v(t),s=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++j<25);p.state=p.__s,p.getChildContext!=null&&(r=Ee(Ee({},r),p.getChildContext())),I&&!m&&p.getSnapshotBeforeUpdate!=null&&(b=p.getSnapshotBeforeUpdate(f,g)),F=s,s!=null&&s.type===ge&&s.key==null&&(F=Yr(s.props.children)),l=Wr(e,st(F)?F:[F],t,n,r,i,o,a,l,u,c),p.base=t.__e,t.__u&=-161,p.__h.length&&a.push(p),w&&(p.__E=p.__=null);}catch(O){if(t.__v=null,u||o!=null)if(O.then){for(t.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o[o.indexOf(l)]=null,t.__e=l;}else {for(H=o.length;H--;)yn(o[H]);dn(t);}else t.__e=n.__e,t.__k=n.__k,O.then||dn(t);N.__e(O,t,n);}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Ka(n.__e,t,n,r,i,o,a,u,c);return (s=N.diffed)&&s(t),128&t.__u?void 0:l}function dn(e){e&&e.__c&&(e.__c.__e=true),e&&e.__k&&e.__k.forEach(dn);}function $r(e,t,n){for(var r=0;r<n.length;r++)bn(n[r],n[++r],n[++r]);N.__c&&N.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i);});}catch(o){N.__e(o,i.__v);}});}function Yr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:st(e)?e.map(Yr):Ee({},e)}function Ka(e,t,n,r,i,o,a,l,u){var c,s,p,m,f,g,b,w=n.props||lt,x=t.props,I=t.type;if(I=="svg"?i="http://www.w3.org/2000/svg":I=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(c=0;c<o.length;c++)if((f=o[c])&&"setAttribute"in f==!!I&&(I?f.localName==I:f.nodeType==3)){e=f,o[c]=null;break}}if(e==null){if(I==null)return document.createTextNode(x);e=document.createElementNS(i,I,x.is&&x),l&&(N.__m&&N.__m(t,o),l=false),o=null;}if(I==null)w===x||l&&e.data==x||(e.data=x);else {if(o=o&&Tt.call(e.childNodes),!l&&o!=null)for(w={},c=0;c<e.attributes.length;c++)w[(f=e.attributes[c]).name]=f.value;for(c in w)if(f=w[c],c!="children"){if(c=="dangerouslySetInnerHTML")p=f;else if(!(c in x)){if(c=="value"&&"defaultValue"in x||c=="checked"&&"defaultChecked"in x)continue;Ct(e,c,null,f,i);}}for(c in x)f=x[c],c=="children"?m=f:c=="dangerouslySetInnerHTML"?s=f:c=="value"?g=f:c=="checked"?b=f:l&&typeof f!="function"||w[c]===f||Ct(e,c,f,w[c],i);if(s)l||p&&(s.__html==p.__html||s.__html==e.innerHTML)||(e.innerHTML=s.__html),t.__k=[];else if(p&&(e.innerHTML=""),Wr(t.type=="template"?e.content:e,st(m)?m:[m],t,n,r,I=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,a,o?o[0]:n.__k&&Ge(n,0),l,u),o!=null)for(c=o.length;c--;)yn(o[c]);l||(c="value",I=="progress"&&g==null?e.removeAttribute("value"):g!=null&&(g!==e[c]||I=="progress"&&!g||I=="option"&&g!=w[c])&&Ct(e,c,g,w[c],i),c="checked",b!=null&&b!=e[c]&&Ct(e,c,b,w[c],i));}return e}function bn(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t));}else e.current=t;}catch(i){N.__e(i,n);}}function Xr(e,t,n){var r,i;if(N.unmount&&N.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||bn(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount();}catch(o){N.__e(o,t);}r.base=r.__P=null;}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Xr(r[i],t,n||typeof e.type!="function");n||yn(e.__e),e.__c=e.__=e.__e=void 0;}function Ga(e,t,n){return this.constructor(e,n)}function vn(e,t,n){var r,i,o,a;t==document&&(t=document.documentElement),N.__&&N.__(e,t),i=(r="undefined"=="function")?null:t.__k,o=[],a=[],xn(t,e=(t).__k=ze(ge,null,[e]),i||lt,lt,t.namespaceURI,i?null:t.firstChild?Tt.call(t.childNodes):null,o,i?i.__e:t.firstChild,r,a),$r(o,e,a);}Tt=Hr.slice,N={__e:function(e,t,n,r){for(var i,o,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),a=i.__d),a)return i.__E=i}catch(l){e=l;}throw e}},Fr=0,ve.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ee({},this.state),typeof e=="function"&&(e=e(Ee({},n),this.props)),e&&Ee(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Dr(this));},ve.prototype.forceUpdate=function(e){this.__v&&(this.__e=true,e&&this.__h.push(e),Dr(this));},ve.prototype.render=ge,Fe=[],Br=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ur=function(e,t){return e.__v.__b-t.__v.__b},It.__r=0,jr=/(PointerCapture)$|Capture$/i,gn=0,mn=Or(false),hn=Or(true);var ct,J,_n,Kr,Pt=0,ri=[],te=N,Gr=te.__b,Jr=te.__r,Qr=te.diffed,Zr=te.__c,ei=te.unmount,ti=te.__;function kn(e,t){te.__h&&te.__h(J,e,Pt||t),Pt=0;var n=J.__H||(J.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function _e(e){return Pt=1,ii(li,e)}function ii(e,t,n){var r=kn(ct++,2);if(r.t=e,!r.__c&&(r.__=[li(void 0,t),function(l){var u=r.__N?r.__N[0]:r.__[0],c=r.t(u,l);u!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}));}],r.__c=J,!J.__f)){var i=function(l,u,c){if(!r.__c.__H)return  true;var s=r.__c.__H.__.filter(function(m){return !!m.__c});if(s.every(function(m){return !m.__N}))return !o||o.call(this,l,u,c);var p=r.__c.props!==l;return s.forEach(function(m){if(m.__N){var f=m.__[0];m.__=m.__N,m.__N=void 0,f!==m.__[0]&&(p=true);}}),o&&o.call(this,l,u,c)||p};J.__f=true;var o=J.shouldComponentUpdate,a=J.componentWillUpdate;J.componentWillUpdate=function(l,u,c){if(this.__e){var s=o;o=void 0,i(l,u,c),o=s;}a&&a.call(this,l,u,c);},J.shouldComponentUpdate=i;}return r.__N||r.__}function Je(e,t){var n=kn(ct++,3);!te.__s&&ai(n.__H,t)&&(n.__=e,n.u=t,J.__H.__h.push(n));}function Be(e){return Pt=5,oi(function(){return {current:e}},[])}function oi(e,t){var n=kn(ct++,7);return ai(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ja(){for(var e;e=ri.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(At),e.__H.__h.forEach(wn),e.__H.__h=[];}catch(t){e.__H.__h=[],te.__e(t,e.__v);}}te.__b=function(e){J=null,Gr&&Gr(e);},te.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ti&&ti(e,t);},te.__r=function(e){Jr&&Jr(e),ct=0;var t=(J=e.__c).__H;t&&(_n===J?(t.__h=[],J.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(t.__h.forEach(At),t.__h.forEach(wn),t.__h=[],ct=0)),_n=J;},te.diffed=function(e){Qr&&Qr(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ri.push(t)!==1&&Kr===te.requestAnimationFrame||((Kr=te.requestAnimationFrame)||Qa)(Ja)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0;})),_n=J=null;},te.__c=function(e,t){t.some(function(n){try{n.__h.forEach(At),n.__h=n.__h.filter(function(r){return !r.__||wn(r)});}catch(r){t.some(function(i){i.__h&&(i.__h=[]);}),t=[],te.__e(r,n.__v);}}),Zr&&Zr(e,t);},te.unmount=function(e){ei&&ei(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{At(r);}catch(i){t=i;}}),n.__H=void 0,t&&te.__e(t,n.__v));};var ni=typeof requestAnimationFrame=="function";function Qa(e){var t,n=function(){clearTimeout(r),ni&&cancelAnimationFrame(t),setTimeout(e);},r=setTimeout(n,35);ni&&(t=requestAnimationFrame(n));}function At(e){var t=J,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),J=t;}function wn(e){var t=J;e.__c=e.__(),J=t;}function ai(e,t){return !e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function li(e,t){return typeof t=="function"?t(e):t}async function*si(e){let t=new TextDecoder,n="";try{for(;;){let{done:r,value:i}=await e.read();if(r){if(n.trim()){let a=Za(n);for(let l of a)yield l;}break}n+=t.decode(i,{stream:!0});let o=n.split(`
`);n=o.pop()||"";for(let a of o)if(a.startsWith("data: ")){let l=a.slice(6).trim();if(l)try{yield JSON.parse(l);}catch(u){console.error("Failed to parse SSE data:",l,u);}}}}finally{e.releaseLock();}}function Za(e){let t=[],n=e.split(`
`);for(let r of n)if(r.startsWith("data: ")){let i=r.slice(6).trim();if(i)try{t.push(JSON.parse(i));}catch(o){console.error("Failed to parse SSE data:",i,o);}}return t}async function*ui(e){let{baseUrl:t,message:n,persona:r,authToken:i,authType:o,maxTokens:a,abortSignal:l}=e,u={"Content-Type":"application/json",Accept:"text/event-stream"};o==="apiKey"?u["X-API-Key"]=i:u.Authorization=`Bearer ${i}`;let c={message:n};r&&(c.persona=r),a&&(c.max_tokens=a),console.log("sending completion request: ",JSON.stringify(c));let s=await fetch(`${t}/api/chat/completion/stream`,{method:"POST",headers:u,body:JSON.stringify(c),signal:l});if(!s.ok){let m=`HTTP ${s.status}: ${s.statusText}`;try{console.error(`error from completion: ${s.status} : ${s.statusText}`);let f=await s.json();m=f.message||f.detail||m;}catch{}yield {type:"error",detail:`${s.status} ${m}`};return}if(!s.body){yield {type:"error",detail:"No response body received"};return}let p=s.body.getReader();yield*si(p);}async function*ci(e){let{baseUrl:t,sessionId:n,message:r,authToken:i,authType:o,maxTokens:a,abortSignal:l}=e,u={"Content-Type":"application/json",Accept:"text/event-stream"};o==="apiKey"?u["X-API-Key"]=i:u.Authorization=`Bearer ${i}`;let c={session:n,message:r};a&&(c.max_tokens=a);let s=await fetch(`${t}/api/chat/continuation/stream`,{method:"POST",headers:u,body:JSON.stringify(c),signal:l});if(!s.ok){let m=`HTTP ${s.status}: ${s.statusText}`;try{let f=await s.json();m=f.message||f.detail||m;}catch{}yield {type:"error",detail:`${s.status} ${m}`};return}if(!s.body){yield {type:"error",detail:"No response body received"};return}let p=s.body.getReader();yield*si(p);}function pi(e,t){let n={};return (e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===false?"":" ")).trim()}var el=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,tl=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,nl={};function Nt(e,t){return ((nl).jsx?tl:el).test(e)}var rl=/[ \t\n\f\r]/g;function zn(e){return typeof e=="object"?e.type==="text"?fi(e.value):false:fi(e)}function fi(e){return e.replace(rl,"")===""}var Ie=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r);}};Ie.prototype.normal={};Ie.prototype.property={};Ie.prototype.space=void 0;function Sn(e,t){let n={},r={};for(let i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Ie(n,r,t)}function pt(e){return e.toLowerCase()}var re=class{constructor(t,n){this.attribute=n,this.property=t;}};re.prototype.attribute="";re.prototype.booleanish=false;re.prototype.boolean=false;re.prototype.commaOrSpaceSeparated=false;re.prototype.commaSeparated=false;re.prototype.defined=false;re.prototype.mustUseProperty=false;re.prototype.number=false;re.prototype.overloadedBoolean=false;re.prototype.property="";re.prototype.spaceSeparated=false;re.prototype.space=void 0;var ft={};Nr(ft,{boolean:()=>D,booleanish:()=>G,commaOrSpaceSeparated:()=>ce,commaSeparated:()=>Ae,number:()=>_,overloadedBoolean:()=>Lt,spaceSeparated:()=>W});var il=0,D=Ue(),G=Ue(),Lt=Ue(),_=Ue(),W=Ue(),Ae=Ue(),ce=Ue();function Ue(){return 2**++il}var Cn=Object.keys(ft),je=class extends re{constructor(t,n,r,i){let o=-1;if(super(t,n),mi(this,"space",i),typeof r=="number")for(;++o<Cn.length;){let a=Cn[o];mi(this,Cn[o],(r&ft[a])===ft[a]);}}};je.prototype.defined=true;function mi(e,t,n){n&&(e[t]=n);}function ye(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let o=new je(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=true),t[r]=o,n[pt(r)]=r,n[pt(o.attribute)]=r;}return new Ie(t,n,e.space)}var En=ye({properties:{ariaActiveDescendant:null,ariaAtomic:G,ariaAutoComplete:null,ariaBusy:G,ariaChecked:G,ariaColCount:_,ariaColIndex:_,ariaColSpan:_,ariaControls:W,ariaCurrent:null,ariaDescribedBy:W,ariaDetails:null,ariaDisabled:G,ariaDropEffect:W,ariaErrorMessage:null,ariaExpanded:G,ariaFlowTo:W,ariaGrabbed:G,ariaHasPopup:null,ariaHidden:G,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:W,ariaLevel:_,ariaLive:null,ariaModal:G,ariaMultiLine:G,ariaMultiSelectable:G,ariaOrientation:null,ariaOwns:W,ariaPlaceholder:null,ariaPosInSet:_,ariaPressed:G,ariaReadOnly:G,ariaRelevant:null,ariaRequired:G,ariaRoleDescription:W,ariaRowCount:_,ariaRowIndex:_,ariaRowSpan:_,ariaSelected:G,ariaSetSize:_,ariaSort:null,ariaValueMax:_,ariaValueMin:_,ariaValueNow:_,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Rt(e,t){return t in e?e[t]:t}function Dt(e,t){return Rt(e,t.toLowerCase())}var hi=ye({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ae,acceptCharset:W,accessKey:W,action:null,allow:null,allowFullScreen:D,allowPaymentRequest:D,allowUserMedia:D,alt:null,as:null,async:D,autoCapitalize:null,autoComplete:W,autoFocus:D,autoPlay:D,blocking:W,capture:null,charSet:null,checked:D,cite:null,className:W,cols:_,colSpan:null,content:null,contentEditable:G,controls:D,controlsList:W,coords:_|Ae,crossOrigin:null,data:null,dateTime:null,decoding:null,default:D,defer:D,dir:null,dirName:null,disabled:D,download:Lt,draggable:G,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:D,formTarget:null,headers:W,height:_,hidden:Lt,high:_,href:null,hrefLang:null,htmlFor:W,httpEquiv:W,id:null,imageSizes:null,imageSrcSet:null,inert:D,inputMode:null,integrity:null,is:null,isMap:D,itemId:null,itemProp:W,itemRef:W,itemScope:D,itemType:W,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:D,low:_,manifest:null,max:null,maxLength:_,media:null,method:null,min:null,minLength:_,multiple:D,muted:D,name:null,nonce:null,noModule:D,noValidate:D,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:D,optimum:_,pattern:null,ping:W,placeholder:null,playsInline:D,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:D,referrerPolicy:null,rel:W,required:D,reversed:D,rows:_,rowSpan:_,sandbox:W,scope:null,scoped:D,seamless:D,selected:D,shadowRootClonable:D,shadowRootDelegatesFocus:D,shadowRootMode:null,shape:null,size:_,sizes:null,slot:null,span:_,spellCheck:G,src:null,srcDoc:null,srcLang:null,srcSet:null,start:_,step:null,style:null,tabIndex:_,target:null,title:null,translate:null,type:null,typeMustMatch:D,useMap:null,value:G,width:_,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:W,axis:null,background:null,bgColor:null,border:_,borderColor:null,bottomMargin:_,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:D,declare:D,event:null,face:null,frame:null,frameBorder:null,hSpace:_,leftMargin:_,link:null,longDesc:null,lowSrc:null,marginHeight:_,marginWidth:_,noResize:D,noHref:D,noShade:D,noWrap:D,object:null,profile:null,prompt:null,rev:null,rightMargin:_,rules:null,scheme:null,scrolling:G,standby:null,summary:null,text:null,topMargin:_,valueType:null,version:null,vAlign:null,vLink:null,vSpace:_,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:D,disableRemotePlayback:D,prefix:null,property:null,results:_,security:null,unselectable:null},space:"html",transform:Dt});var di=ye({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ce,accentHeight:_,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:_,amplitude:_,arabicForm:null,ascent:_,attributeName:null,attributeType:null,azimuth:_,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:_,by:null,calcMode:null,capHeight:_,className:W,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:_,diffuseConstant:_,direction:null,display:null,dur:null,divisor:_,dominantBaseline:null,download:D,dx:null,dy:null,edgeMode:null,editable:null,elevation:_,enableBackground:null,end:null,event:null,exponent:_,externalResourcesRequired:null,fill:null,fillOpacity:_,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ae,g2:Ae,glyphName:Ae,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:_,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:_,horizOriginX:_,horizOriginY:_,id:null,ideographic:_,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:_,k:_,k1:_,k2:_,k3:_,k4:_,kernelMatrix:ce,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:_,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:_,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:_,overlineThickness:_,paintOrder:null,panose1:null,path:null,pathLength:_,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:W,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:_,pointsAtY:_,pointsAtZ:_,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ce,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ce,rev:ce,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ce,requiredFeatures:ce,requiredFonts:ce,requiredFormats:ce,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:_,specularExponent:_,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:_,strikethroughThickness:_,string:null,stroke:null,strokeDashArray:ce,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:_,strokeOpacity:_,strokeWidth:null,style:null,surfaceScale:_,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ce,tabIndex:_,tableValues:null,target:null,targetX:_,targetY:_,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ce,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:_,underlineThickness:_,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:_,values:null,vAlphabetic:_,vMathematical:_,vectorEffect:null,vHanging:_,vIdeographic:_,version:null,vertAdvY:_,vertOriginX:_,vertOriginY:_,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:_,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Rt});var In=ye({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return "xlink:"+t.slice(5).toLowerCase()}});var Tn=ye({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Dt});var An=ye({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return "xml:"+t.slice(3).toLowerCase()}});var Pn={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var ol=/[A-Z]/g,gi=/-[a-z]/g,al=/^data[-\w.:]+$/i;function Nn(e,t){let n=pt(t),r=t,i=re;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&al.test(t)){if(t.charAt(4)==="-"){let o=t.slice(5).replace(gi,sl);r="data"+o.charAt(0).toUpperCase()+o.slice(1);}else {let o=t.slice(4);if(!gi.test(o)){let a=o.replace(ol,ll);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a;}}i=je;}return new i(r,t)}function ll(e){return "-"+e.toLowerCase()}function sl(e){return e.charAt(1).toUpperCase()}var yi=Sn([En,hi,In,Tn,An],"html"),Mt=Sn([En,di,In,Tn,An],"svg");function xi(e){return e.join(" ").trim()}var Li=Lr(Ti());var Ft=Ai("end"),Qe=Ai("start");function Ai(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return {line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Dn(e){let t=Qe(e),n=Ft(e);if(t&&n)return {start:t,end:n}}function Pe(e){return !e||typeof e!="object"?"":"position"in e||"type"in e?Pi(e.position):"start"in e||"end"in e?Pi(e):"line"in e||"column"in e?Mn(e):""}function Mn(e){return Ni(e&&e.line)+":"+Ni(e&&e.column)}function Pi(e){return Mn(e&&e.start)+"-"+Mn(e&&e.end)}function Ni(e){return e&&typeof e=="number"?e:1}var Q=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=false;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=true,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){let u=r.indexOf(":");u===-1?o.ruleId=r:(o.source=r.slice(0,u),o.ruleId=r.slice(u+1));}if(!o.place&&o.ancestors&&o.ancestors){let u=o.ancestors[o.ancestors.length-1];u&&(o.place=u.position);}let l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Pe(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0;}};Q.prototype.file="";Q.prototype.name="";Q.prototype.reason="";Q.prototype.message="";Q.prototype.stack="";Q.prototype.column=void 0;Q.prototype.line=void 0;Q.prototype.ancestors=void 0;Q.prototype.cause=void 0;Q.prototype.fatal=void 0;Q.prototype.place=void 0;Q.prototype.ruleId=void 0;Q.prototype.source=void 0;var On={}.hasOwnProperty,Rl=new Map,Dl=/[A-Z]/g,Ml=new Set(["table","tbody","thead","tfoot","tr"]),Ol=new Set(["td","th"]),Ri="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Fn(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=ql(n,t.jsxDEV);}else {if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Wl(n,t.jsx,t.jsxs);}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||false,passKeys:t.passKeys!==false,passNode:t.passNode||false,schema:t.space==="svg"?Mt:yi,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==false},o=Di(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Di(e,t,n){if(t.type==="element")return Fl(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Bl(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return jl(e,t,n);if(t.type==="mdxjsEsm")return Ul(e,t);if(t.type==="root")return Hl(e,t,n);if(t.type==="text")return Vl(e,t)}function Fl(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Mt,e.schema=i),e.ancestors.push(t);let o=Oi(e,t.tagName,false),a=$l(e,t),l=Un(e,t);return Ml.has(t.tagName)&&(l=l.filter(function(u){return typeof u=="string"?!zn(u):true})),Mi(e,a,o,t),Bn(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Bl(e,t){if(t.data&&t.data.estree&&e.evaluater){let r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}ht(e,t.position);}function Ul(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ht(e,t.position);}function jl(e,t,n){let r=e.schema,i=r;t.name==="svg"&&r.space==="html"&&(i=Mt,e.schema=i),e.ancestors.push(t);let o=t.name===null?e.Fragment:Oi(e,t.name,true),a=Yl(e,t),l=Un(e,t);return Mi(e,a,o,t),Bn(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Hl(e,t,n){let r={};return Bn(r,Un(e,t)),e.create(t,e.Fragment,r,n)}function Vl(e,t){return t.value}function Mi(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r);}function Bn(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n);}}function Wl(e,t,n){return r;function r(i,o,a,l){let c=Array.isArray(a.children)?n:t;return l?c(o,a,l):c(o,a)}}function ql(e,t){return n;function n(r,i,o,a){let l=Array.isArray(o.children),u=Qe(r);return t(i,o,a,l,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function $l(e,t){let n={},r,i;for(i in t.properties)if(i!=="children"&&On.call(t.properties,i)){let o=Xl(e,i,t.properties[i]);if(o){let[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&Ol.has(t.tagName)?r=l:n[a]=l;}}if(r){let o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r;}return n}function Yl(e,t){let n={};for(let r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){let o=r.data.estree.body[0];o.type;let a=o.expression;a.type;let l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument));}else ht(e,t.position);else {let i=r.name,o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){let l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression);}else ht(e,t.position);else o=r.value===null?true:r.value;n[i]=o;}return n}function Un(e,t){let n=[],r=-1,i=e.passKeys?new Map:Rl;for(;++r<t.children.length;){let o=t.children[r],a;if(e.passKeys){let u=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(u){let c=i.get(u)||0;a=u+"-"+c,i.set(u,c+1);}}let l=Di(e,o,a);l!==void 0&&n.push(l);}return n}function Xl(e,t,n){let r=Nn(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?pi(n):xi(n)),r.property==="style"){let i=typeof n=="object"?n:Kl(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Gl(i)),["style",i]}return [e.elementAttributeNameCase==="react"&&r.space?Pn[r.property]||r.property:r.attribute,n]}}function Kl(e,t){try{return (0,Li.default)(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return {};let r=n,i=new Q("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Ri+"#cannot-parse-style-attribute",i}}function Oi(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){let i=t.split("."),o=-1,a;for(;++o<i.length;){let l=Nt(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:false}:l;}r=a;}else r=Nt(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){let i=r.value;return On.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);ht(e);}function ht(e,t){let n=new Q("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Ri+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Gl(e){let t={},n;for(n in e)On.call(e,n)&&(t[Jl(n)]=e[n]);return t}function Jl(e){let t=e.replace(Dl,Ql);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Ql(e){return "-"+e.toLowerCase()}var dt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};function ts(e,t){for(var n in t)e[n]=t[n];return e}function Fi(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return  true;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return  true;return  false}function Bi(e,t){this.props=e,this.context=t;}(Bi.prototype=new ve).isPureReactComponent=true,Bi.prototype.shouldComponentUpdate=function(e,t){return Fi(this.props,e)||Fi(this.state,t)};var Ui=N.__b;N.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ui&&Ui(e);};var ns=N.__e;N.__e=function(e,t,n,r){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}ns(e,t,n,r);};var ji=N.unmount;function Yi(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c();}),e.__c.__H=null),(e=ts({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=true,e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Yi(r,t,n)})),e}function Xi(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Xi(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=true,e.__c.__P=n)),e}function jn(){this.__u=0,this.o=null,this.__b=null;}function Ki(e){if(!e.__)return null;var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Bt(){this.i=null,this.l=null;}N.unmount=function(e){var t=e.__c;t&&(t.__z=true),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),ji&&ji(e);},(jn.prototype=new ve).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var i=Ki(r.__v),o=false,a=function(){o||r.__z||(o=true,n.__R=null,i?i(u):u());};n.__R=a;var l=n.__P;n.__P=null;var u=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=Xi(c,c.__c.__P,c.__c.__O);}var s;for(r.setState({__a:r.__b=null});s=r.o.pop();)s.__P=l,s.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a);},jn.prototype.componentWillUnmount=function(){this.o=[];},jn.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Yi(this.__b,n,r.__O=r.__P);}this.__b=null;}var i=t.__a&&ze(ge,null,e.fallback);return i&&(i.__u&=-33),[ze(ge,null,t.__a?null:e.children),i]};var Hi=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2];}};(Bt.prototype=new ve).__a=function(e){var t=this,n=Ki(t.__v),r=t.l.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),Hi(t,e,r)):i();};n?n(o):o();}},Bt.prototype.render=function(e){this.i=null,this.l=new Map;var t=ut(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},Bt.prototype.componentDidUpdate=Bt.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Hi(e,n,t);});};var rs=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,is=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,os=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,as=/[A-Z0-9]/g,ls=typeof document<"u",ss=function(e){return (typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};ve.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(ve.prototype,e,{configurable:true,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:true,writable:true,value:t});}});});var Vi=N.event;function us(){}function cs(){return this.cancelBubble}function ps(){return this.defaultPrevented}N.event=function(e){return Vi&&(e=Vi(e)),e.persist=us,e.isPropagationStopped=cs,e.isDefaultPrevented=ps,e.nativeEvent=e};var fs={enumerable:false,configurable:true,get:function(){return this.class}},Wi=N.vnode;N.vnode=function(e){typeof e.type=="string"&&(function(t){var n=t.props,r=t.type,i={},o=r.indexOf("-")===-1;for(var a in n){var l=n[a];if(!(a==="value"&&"defaultValue"in n&&l==null||ls&&a==="children"&&r==="noscript"||a==="class"||a==="className")){var u=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===true?l="":u==="translate"&&l==="no"?l=false:u[0]==="o"&&u[1]==="n"?u==="ondoubleclick"?a="ondblclick":u!=="onchange"||r!=="input"&&r!=="textarea"||ss(n.type)?u==="onfocus"?a="onfocusin":u==="onblur"?a="onfocusout":os.test(a)&&(a=u):u=a="oninput":o&&is.test(a)?a=a.replace(as,"-$&").toLowerCase():l===null&&(l=void 0),u==="oninput"&&i[a=u]&&(a="oninputCapture"),i[a]=l;}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=ut(n.children).forEach(function(c){c.props.selected=i.value.indexOf(c.props.value)!=-1;})),r=="select"&&i.defaultValue!=null&&(i.value=ut(n.children).forEach(function(c){c.props.selected=i.multiple?i.defaultValue.indexOf(c.props.value)!=-1:i.defaultValue==c.props.value;})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",fs)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),t.props=i;})(e),e.$$typeof=rs,Wi&&Wi(e);};var qi=N.__r;N.__r=function(e){qi&&qi(e),e.__c;};var $i=N.diffed;N.diffed=function(e){$i&&$i(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value);};var ms=0;function z(e,t,n,r,i,o){t||(t={});var a,l,u=t;if("ref"in u)for(l in u={},t)l=="ref"?a=t[l]:u[l]=t[l];var c={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ms,__i:-1,__u:0,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return N.vnode&&N.vnode(c),c}var hs={};function Hn(e,t){let n=hs,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:true,i=typeof n.includeHtml=="boolean"?n.includeHtml:true;return Qi(e,r,i)}function Qi(e,t,n){if(ds(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Ji(e.children,t,n)}return Array.isArray(e)?Ji(e,t,n):""}function Ji(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=Qi(e[i],t,n);return r.join("")}function ds(e){return !!(e&&typeof e=="object")}var Zi=document.createElement("i");function Ze(e){let t="&"+e+";";Zi.innerHTML=t;let n=Zi.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?false:n}function ae(e,t,n,r){let i=e.length,o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4;}function se(e,t){return e.length>0?(ae(e,e.length,0,t),e):t}var eo={}.hasOwnProperty;function to(e){let t={},n=-1;for(;++n<e.length;)gs(t,e[n]);return t}function gs(e,t){let n;for(n in t){let i=(eo.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n],a;if(o)for(a in o){eo.call(i,a)||(i[a]=[]);let l=o[a];ys(i[a],Array.isArray(l)?l:l?[l]:[]);}}}function ys(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);ae(e,0,0,r);}function Ut(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function Te(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var he=Ne(/[A-Za-z]/),ie=Ne(/[\dA-Za-z]/),no=Ne(/[#-'*+\--9=?A-Z^-~]/);function gt(e){return e!==null&&(e<32||e===127)}var yt=Ne(/\d/),ro=Ne(/[\dA-Fa-f]/),io=Ne(/[!-/:-@[-`{-~]/);function E(e){return e!==null&&e<-2}function Z(e){return e!==null&&(e<0||e===32)}function L(e){return e===-2||e===-1||e===32}var oo=Ne(/\p{P}|\p{S}/u),ao=Ne(/\s/);function Ne(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function xe(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let o=e.charCodeAt(n),a="";if(o===37&&ie(e.charCodeAt(n+1))&&ie(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){let l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),i=1):a="\uFFFD";}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0);}return t.join("")+e.slice(r)}function M(e,t,n,r){let i=r?r-1:Number.POSITIVE_INFINITY,o=0;return a;function a(u){return L(u)?(e.enter(n),l(u)):t(u)}function l(u){return L(u)&&o++<i?(e.consume(u),l):(e.exit(n),t(u))}}var lo={tokenize:xs};function xs(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),M(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){let u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return E(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}var uo={tokenize:bs},so={tokenize:vs};function bs(e){let t=this,n=[],r=0,i,o,a;return l;function l(C){if(r<n.length){let B=n[r];return t.containerState=B[1],e.attempt(B[0].continuation,u,c)(C)}return c(C)}function u(C){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&I();let B=t.events.length,V=B,v;for(;V--;)if(t.events[V][0]==="exit"&&t.events[V][1].type==="chunkFlow"){v=t.events[V][1].end;break}x(r);let j=B;for(;j<t.events.length;)t.events[j][1].end={...v},j++;return ae(t.events,V+1,0,t.events.slice(B)),t.events.length=j,c(C)}return l(C)}function c(C){if(r===n.length){if(!i)return m(C);if(i.currentConstruct&&i.currentConstruct.concrete)return g(C);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack);}return t.containerState={},e.check(so,s,p)(C)}function s(C){return i&&I(),x(r),m(C)}function p(C){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,g(C)}function m(C){return t.containerState={},e.attempt(so,f,g)(C)}function f(C){return r++,n.push([t.currentConstruct,t.containerState]),m(C)}function g(C){if(C===null){i&&I(),x(0),e.consume(C);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),b(C)}function b(C){if(C===null){w(e.exit("chunkFlow"),true),x(0),e.consume(C);return}return E(C)?(e.consume(C),w(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(C),b)}function w(C,B){let V=t.sliceStream(C);if(B&&V.push(null),C.previous=o,o&&(o.next=C),o=C,i.defineSkip(C.start),i.write(V),t.parser.lazy[C.start.line]){let v=i.events.length;for(;v--;)if(i.events[v][1].start.offset<a&&(!i.events[v][1].end||i.events[v][1].end.offset>a))return;let j=t.events.length,$=j,F,H;for(;$--;)if(t.events[$][0]==="exit"&&t.events[$][1].type==="chunkFlow"){if(F){H=t.events[$][1].end;break}F=true;}for(x(r),v=j;v<t.events.length;)t.events[v][1].end={...H},v++;ae(t.events,$+1,0,t.events.slice(j)),t.events.length=v;}}function x(C){let B=n.length;for(;B-- >C;){let V=n[B];t.containerState=V[1],V[0].exit.call(t,e);}n.length=C;}function I(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0;}}function vs(e,t,n){return M(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Vn(e){if(e===null||Z(e)||ao(e))return 1;if(oo(e))return 2}function et(e,t,n){let r=[],i=-1;for(;++i<e.length;){let o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o));}return t}var xt={name:"attention",resolveAll:_s,tokenize:ws};function _s(e,t){let n=-1,r,i,o,a,l,u,c,s;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let p={...e[r][1].end},m={...e[n][1].start};co(p,-u),co(m,u),a={type:u>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:u>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:m},o={type:u>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:u>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=se(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=se(c,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),c=se(c,et(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=se(c,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(s=2,c=se(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):s=0,ae(e,r-1,n-r+3,c),n=r+c.length-s-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function ws(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Vn(r),o;return a;function a(u){return o=u,e.enter("attentionSequence"),l(u)}function l(u){if(u===o)return e.consume(u),l;let c=e.exit("attentionSequence"),s=Vn(u),p=!s||s===2&&i||n.includes(u),m=!i||i===2&&s||n.includes(r);return c._open=!!(o===42?p:p&&(i||!m)),c._close=!!(o===42?m:m&&(s||!p)),t(u)}}function co(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t;}var Wn={name:"autolink",tokenize:ks};function ks(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(f){return he(f)?(e.consume(f),a):f===64?n(f):c(f)}function a(f){return f===43||f===45||f===46||ie(f)?(r=1,l(f)):c(f)}function l(f){return f===58?(e.consume(f),r=0,u):(f===43||f===45||f===46||ie(f))&&r++<32?(e.consume(f),l):(r=0,c(f))}function u(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||gt(f)?n(f):(e.consume(f),u)}function c(f){return f===64?(e.consume(f),s):no(f)?(e.consume(f),c):n(f)}function s(f){return ie(f)?p(f):n(f)}function p(f){return f===46?(e.consume(f),r=0,s):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):m(f)}function m(f){if((f===45||ie(f))&&r++<63){let g=f===45?m:p;return e.consume(f),g}return n(f)}}var Le={partial:true,tokenize:zs};function zs(e,t,n){return r;function r(o){return L(o)?M(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||E(o)?t(o):n(o)}}var jt={continuation:{tokenize:Cs},exit:Es,name:"blockQuote",tokenize:Ss};function Ss(e,t,n){let r=this;return i;function i(a){if(a===62){let l=r.containerState;return l.open||(e.enter("blockQuote",{_container:true}),l.open=true),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return L(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function Cs(e,t,n){let r=this;return i;function i(a){return L(a)?M(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(jt,t,n)(a)}}function Es(e){e.exit("blockQuote");}var Ht={name:"characterEscape",tokenize:Is};function Is(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return io(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}var Vt={name:"characterReference",tokenize:Ts};function Ts(e,t,n){let r=this,i=0,o,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),u}function u(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,a=ie,s(p))}function c(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=ro,s):(e.enter("characterReferenceValue"),o=7,a=yt,s(p))}function s(p){if(p===59&&i){let m=e.exit("characterReferenceValue");return a===ie&&!Ze(r.sliceSerialize(m))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),s):n(p)}}var po={partial:true,tokenize:Ps},Wt={concrete:true,name:"codeFenced",tokenize:As};function As(e,t,n){let r=this,i={partial:true,tokenize:V},o=0,a=0,l;return u;function u(v){return c(v)}function c(v){let j=r.events[r.events.length-1];return o=j&&j[1].type==="linePrefix"?j[2].sliceSerialize(j[1],true).length:0,l=v,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),s(v)}function s(v){return v===l?(a++,e.consume(v),s):a<3?n(v):(e.exit("codeFencedFenceSequence"),L(v)?M(e,p,"whitespace")(v):p(v))}function p(v){return v===null||E(v)?(e.exit("codeFencedFence"),r.interrupt?t(v):e.check(po,b,B)(v)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(v))}function m(v){return v===null||E(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(v)):L(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),M(e,f,"whitespace")(v)):v===96&&v===l?n(v):(e.consume(v),m)}function f(v){return v===null||E(v)?p(v):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(v))}function g(v){return v===null||E(v)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(v)):v===96&&v===l?n(v):(e.consume(v),g)}function b(v){return e.attempt(i,B,w)(v)}function w(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),x}function x(v){return o>0&&L(v)?M(e,I,"linePrefix",o+1)(v):I(v)}function I(v){return v===null||E(v)?e.check(po,b,B)(v):(e.enter("codeFlowValue"),C(v))}function C(v){return v===null||E(v)?(e.exit("codeFlowValue"),I(v)):(e.consume(v),C)}function B(v){return e.exit("codeFenced"),t(v)}function V(v,j,$){let F=0;return H;function H(A){return v.enter("lineEnding"),v.consume(A),v.exit("lineEnding"),q}function q(A){return v.enter("codeFencedFence"),L(A)?M(v,O,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):O(A)}function O(A){return A===l?(v.enter("codeFencedFenceSequence"),S(A)):$(A)}function S(A){return A===l?(F++,v.consume(A),S):F>=a?(v.exit("codeFencedFenceSequence"),L(A)?M(v,T,"whitespace")(A):T(A)):$(A)}function T(A){return A===null||E(A)?(v.exit("codeFencedFence"),j(A)):$(A)}}}function Ps(e,t,n){let r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}var bt={name:"codeIndented",tokenize:Ls},Ns={partial:true,tokenize:Rs};function Ls(e,t,n){let r=this;return i;function i(c){return e.enter("codeIndented"),M(e,o,"linePrefix",5)(c)}function o(c){let s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],true).length>=4?a(c):n(c)}function a(c){return c===null?u(c):E(c)?e.attempt(Ns,a,u)(c):(e.enter("codeFlowValue"),l(c))}function l(c){return c===null||E(c)?(e.exit("codeFlowValue"),a(c)):(e.consume(c),l)}function u(c){return e.exit("codeIndented"),t(c)}}function Rs(e,t,n){let r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):E(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):M(e,o,"linePrefix",5)(a)}function o(a){let l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(a):E(a)?i(a):n(a)}}var qn={name:"codeText",previous:Ms,resolve:Ds,tokenize:Os};function Ds(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Ms(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Os(e,t,n){let i=0,o,a;return l;function l(m){return e.enter("codeText"),e.enter("codeTextSequence"),u(m)}function u(m){return m===96?(e.consume(m),i++,u):(e.exit("codeTextSequence"),c(m))}function c(m){return m===null?n(m):m===32?(e.enter("space"),e.consume(m),e.exit("space"),c):m===96?(a=e.enter("codeTextSequence"),o=0,p(m)):E(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),c):(e.enter("codeTextData"),s(m))}function s(m){return m===null||m===32||m===96||E(m)?(e.exit("codeTextData"),c(m)):(e.consume(m),s)}function p(m){return m===96?(e.consume(m),o++,p):o===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(m)):(a.type="codeTextData",s(m))}}var qt=class{constructor(t){this.left=t?[...t]:[],this.right=[];}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let i=n||0;this.setCursor(Math.trunc(t));let o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&vt(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t);}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),vt(this.left,t);}unshift(t){this.setCursor(0),this.right.push(t);}unshiftMany(t){this.setCursor(0),vt(this.right,t.reverse());}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,Number.POSITIVE_INFINITY);vt(this.right,n.reverse());}else {let n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);vt(this.left,n.reverse());}}};function vt(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4;}function $t(e){let t={},n=-1,r,i,o,a,l,u,c,s=new qt(e);for(;++n<s.length;){for(;n in t;)n=t[n];if(r=s.get(n),n&&r[1].type==="chunkFlow"&&s.get(n-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=true,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Fs(s,n)),n=t[n],c=true);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=s.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(s.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...s.get(i)[1].start},l=s.slice(i,n),l.unshift(r),s.splice(i,n-i+1,l));}}return ae(e,0,Number.POSITIVE_INFINITY,s.slice(0)),!c}function Fs(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,o=[],a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=true));let l=a.events,u=[],c={},s,p,m=-1,f=n,g=0,b=0,w=[b];for(;f;){for(;e.get(++i)[1]!==f;);o.push(i),f._tokenizer||(s=r.sliceStream(f),f.next||s.push(null),p&&a.defineSkip(f.start),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=true),a.write(s),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=f,f=f.next;}for(f=n;++m<l.length;)l[m][0]==="exit"&&l[m-1][0]==="enter"&&l[m][1].type===l[m-1][1].type&&l[m][1].start.line!==l[m][1].end.line&&(b=m+1,w.push(b),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(a.events=[],f?(f._tokenizer=void 0,f.previous=void 0):w.pop(),m=w.length;m--;){let x=l.slice(w[m],w[m+1]),I=o.pop();u.push([I,I+x.length-1]),e.splice(I,2,x);}for(u.reverse(),m=-1;++m<u.length;)c[g+u[m][0]]=g+u[m][1],g+=u[m][1]-u[m][0]-1;return c}var $n={resolve:Us,tokenize:js},Bs={partial:true,tokenize:Hs};function Us(e){return $t(e),e}function js(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):E(l)?e.check(Bs,a,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Hs(e,t,n){let r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),M(e,o,"linePrefix")}function o(a){if(a===null||E(a))return n(a);let l=r.events[r.events.length-1];return !r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Yt(e,t,n,r,i,o,a,l,u){let c=u||Number.POSITIVE_INFINITY,s=0;return p;function p(x){return x===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(x),e.exit(o),m):x===null||x===32||x===41||gt(x)?n(x):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),b(x))}function m(x){return x===62?(e.enter(o),e.consume(x),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),f(x))}function f(x){return x===62?(e.exit("chunkString"),e.exit(l),m(x)):x===null||x===60||E(x)?n(x):(e.consume(x),x===92?g:f)}function g(x){return x===60||x===62||x===92?(e.consume(x),f):f(x)}function b(x){return !s&&(x===null||x===41||Z(x))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(x)):s<c&&x===40?(e.consume(x),s++,b):x===41?(e.consume(x),s--,b):x===null||x===32||x===40||gt(x)?n(x):(e.consume(x),x===92?w:b)}function w(x){return x===40||x===41||x===92?(e.consume(x),b):b(x)}}function Xt(e,t,n,r,i,o){let a=this,l=0,u;return c;function c(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(o),s}function s(f){return l>999||f===null||f===91||f===93&&!u||f===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(f):f===93?(e.exit(o),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):E(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),s):(e.enter("chunkString",{contentType:"string"}),p(f))}function p(f){return f===null||f===91||f===93||E(f)||l++>999?(e.exit("chunkString"),s(f)):(e.consume(f),u||(u=!L(f)),f===92?m:p)}function m(f){return f===91||f===92||f===93?(e.consume(f),l++,p):p(f)}}function Kt(e,t,n,r,i,o){let a;return l;function l(m){return m===34||m===39||m===40?(e.enter(r),e.enter(i),e.consume(m),e.exit(i),a=m===40?41:m,u):n(m)}function u(m){return m===a?(e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):(e.enter(o),c(m))}function c(m){return m===a?(e.exit(o),u(a)):m===null?n(m):E(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),M(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),s(m))}function s(m){return m===a||m===null||E(m)?(e.exit("chunkString"),c(m)):(e.consume(m),m===92?p:s)}function p(m){return m===a||m===92?(e.consume(m),s):s(m)}}function Ve(e,t){let n;return r;function r(i){return E(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=true,r):L(i)?M(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}var Yn={name:"definition",tokenize:Ws},Vs={partial:true,tokenize:qs};function Ws(e,t,n){let r=this,i;return o;function o(f){return e.enter("definition"),a(f)}function a(f){return Xt.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function l(f){return i=Te(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),u):n(f)}function u(f){return Z(f)?Ve(e,c)(f):c(f)}function c(f){return Yt(e,s,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function s(f){return e.attempt(Vs,p,p)(f)}function p(f){return L(f)?M(e,m,"whitespace")(f):m(f)}function m(f){return f===null||E(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function qs(e,t,n){return r;function r(l){return Z(l)?Ve(e,i)(l):n(l)}function i(l){return Kt(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return L(l)?M(e,a,"whitespace")(l):a(l)}function a(l){return l===null||E(l)?t(l):n(l)}}var Xn={name:"hardBreakEscape",tokenize:$s};function $s(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return E(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}var Kn={name:"headingAtx",resolve:Ys,tokenize:Xs};function Ys(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},ae(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Xs(e,t,n){let r=0;return i;function i(s){return e.enter("atxHeading"),o(s)}function o(s){return e.enter("atxHeadingSequence"),a(s)}function a(s){return s===35&&r++<6?(e.consume(s),a):s===null||Z(s)?(e.exit("atxHeadingSequence"),l(s)):n(s)}function l(s){return s===35?(e.enter("atxHeadingSequence"),u(s)):s===null||E(s)?(e.exit("atxHeading"),t(s)):L(s)?M(e,l,"whitespace")(s):(e.enter("atxHeadingText"),c(s))}function u(s){return s===35?(e.consume(s),u):(e.exit("atxHeadingSequence"),l(s))}function c(s){return s===null||s===35||Z(s)?(e.exit("atxHeadingText"),l(s)):(e.consume(s),c)}}var fo=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Gn=["pre","script","style","textarea"];var Jn={concrete:true,name:"htmlFlow",resolveTo:Js,tokenize:Qs},Ks={partial:true,tokenize:eu},Gs={partial:true,tokenize:Zs};function Js(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Qs(e,t,n){let r=this,i,o,a,l,u;return c;function c(d){return s(d)}function s(d){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(d),p}function p(d){return d===33?(e.consume(d),m):d===47?(e.consume(d),o=true,b):d===63?(e.consume(d),i=3,r.interrupt?t:h):he(d)?(e.consume(d),a=String.fromCharCode(d),w):n(d)}function m(d){return d===45?(e.consume(d),i=2,f):d===91?(e.consume(d),i=5,l=0,g):he(d)?(e.consume(d),i=4,r.interrupt?t:h):n(d)}function f(d){return d===45?(e.consume(d),r.interrupt?t:h):n(d)}function g(d){let oe="CDATA[";return d===oe.charCodeAt(l++)?(e.consume(d),l===oe.length?r.interrupt?t:O:g):n(d)}function b(d){return he(d)?(e.consume(d),a=String.fromCharCode(d),w):n(d)}function w(d){if(d===null||d===47||d===62||Z(d)){let oe=d===47,ne=a.toLowerCase();return !oe&&!o&&Gn.includes(ne)?(i=1,r.interrupt?t(d):O(d)):fo.includes(a.toLowerCase())?(i=6,oe?(e.consume(d),x):r.interrupt?t(d):O(d)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(d):o?I(d):C(d))}return d===45||ie(d)?(e.consume(d),a+=String.fromCharCode(d),w):n(d)}function x(d){return d===62?(e.consume(d),r.interrupt?t:O):n(d)}function I(d){return L(d)?(e.consume(d),I):H(d)}function C(d){return d===47?(e.consume(d),H):d===58||d===95||he(d)?(e.consume(d),B):L(d)?(e.consume(d),C):H(d)}function B(d){return d===45||d===46||d===58||d===95||ie(d)?(e.consume(d),B):V(d)}function V(d){return d===61?(e.consume(d),v):L(d)?(e.consume(d),V):C(d)}function v(d){return d===null||d===60||d===61||d===62||d===96?n(d):d===34||d===39?(e.consume(d),u=d,j):L(d)?(e.consume(d),v):$(d)}function j(d){return d===u?(e.consume(d),u=null,F):d===null||E(d)?n(d):(e.consume(d),j)}function $(d){return d===null||d===34||d===39||d===47||d===60||d===61||d===62||d===96||Z(d)?V(d):(e.consume(d),$)}function F(d){return d===47||d===62||L(d)?C(d):n(d)}function H(d){return d===62?(e.consume(d),q):n(d)}function q(d){return d===null||E(d)?O(d):L(d)?(e.consume(d),q):n(d)}function O(d){return d===45&&i===2?(e.consume(d),P):d===60&&i===1?(e.consume(d),X):d===62&&i===4?(e.consume(d),ue):d===63&&i===3?(e.consume(d),h):d===93&&i===5?(e.consume(d),pe):E(d)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Ks,fe,S)(d)):d===null||E(d)?(e.exit("htmlFlowData"),S(d)):(e.consume(d),O)}function S(d){return e.check(Gs,T,fe)(d)}function T(d){return e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),A}function A(d){return d===null||E(d)?S(d):(e.enter("htmlFlowData"),O(d))}function P(d){return d===45?(e.consume(d),h):O(d)}function X(d){return d===47?(e.consume(d),a="",K):O(d)}function K(d){if(d===62){let oe=a.toLowerCase();return Gn.includes(oe)?(e.consume(d),ue):O(d)}return he(d)&&a.length<8?(e.consume(d),a+=String.fromCharCode(d),K):O(d)}function pe(d){return d===93?(e.consume(d),h):O(d)}function h(d){return d===62?(e.consume(d),ue):d===45&&i===2?(e.consume(d),h):O(d)}function ue(d){return d===null||E(d)?(e.exit("htmlFlowData"),fe(d)):(e.consume(d),ue)}function fe(d){return e.exit("htmlFlow"),t(d)}}function Zs(e,t,n){let r=this;return i;function i(a){return E(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function eu(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Le,t,n)}}var Qn={name:"htmlText",tokenize:tu};function tu(e,t,n){let r=this,i,o,a;return l;function l(h){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(h),u}function u(h){return h===33?(e.consume(h),c):h===47?(e.consume(h),V):h===63?(e.consume(h),C):he(h)?(e.consume(h),$):n(h)}function c(h){return h===45?(e.consume(h),s):h===91?(e.consume(h),o=0,g):he(h)?(e.consume(h),I):n(h)}function s(h){return h===45?(e.consume(h),f):n(h)}function p(h){return h===null?n(h):h===45?(e.consume(h),m):E(h)?(a=p,X(h)):(e.consume(h),p)}function m(h){return h===45?(e.consume(h),f):p(h)}function f(h){return h===62?P(h):h===45?m(h):p(h)}function g(h){let ue="CDATA[";return h===ue.charCodeAt(o++)?(e.consume(h),o===ue.length?b:g):n(h)}function b(h){return h===null?n(h):h===93?(e.consume(h),w):E(h)?(a=b,X(h)):(e.consume(h),b)}function w(h){return h===93?(e.consume(h),x):b(h)}function x(h){return h===62?P(h):h===93?(e.consume(h),x):b(h)}function I(h){return h===null||h===62?P(h):E(h)?(a=I,X(h)):(e.consume(h),I)}function C(h){return h===null?n(h):h===63?(e.consume(h),B):E(h)?(a=C,X(h)):(e.consume(h),C)}function B(h){return h===62?P(h):C(h)}function V(h){return he(h)?(e.consume(h),v):n(h)}function v(h){return h===45||ie(h)?(e.consume(h),v):j(h)}function j(h){return E(h)?(a=j,X(h)):L(h)?(e.consume(h),j):P(h)}function $(h){return h===45||ie(h)?(e.consume(h),$):h===47||h===62||Z(h)?F(h):n(h)}function F(h){return h===47?(e.consume(h),P):h===58||h===95||he(h)?(e.consume(h),H):E(h)?(a=F,X(h)):L(h)?(e.consume(h),F):P(h)}function H(h){return h===45||h===46||h===58||h===95||ie(h)?(e.consume(h),H):q(h)}function q(h){return h===61?(e.consume(h),O):E(h)?(a=q,X(h)):L(h)?(e.consume(h),q):F(h)}function O(h){return h===null||h===60||h===61||h===62||h===96?n(h):h===34||h===39?(e.consume(h),i=h,S):E(h)?(a=O,X(h)):L(h)?(e.consume(h),O):(e.consume(h),T)}function S(h){return h===i?(e.consume(h),i=void 0,A):h===null?n(h):E(h)?(a=S,X(h)):(e.consume(h),S)}function T(h){return h===null||h===34||h===39||h===60||h===61||h===96?n(h):h===47||h===62||Z(h)?F(h):(e.consume(h),T)}function A(h){return h===47||h===62||Z(h)?F(h):n(h)}function P(h){return h===62?(e.consume(h),e.exit("htmlTextData"),e.exit("htmlText"),t):n(h)}function X(h){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),K}function K(h){return L(h)?M(e,pe,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):pe(h)}function pe(h){return e.enter("htmlTextData"),a(h)}}var We={name:"labelEnd",resolveAll:ou,resolveTo:au,tokenize:lu},nu={tokenize:su},ru={tokenize:uu},iu={tokenize:cu};function ou(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let i=r.type==="labelImage"?4:2;r.type="data",t+=i;}}return e.length!==n.length&&ae(e,0,e.length,n),e}function au(e,t){let n=e.length,r=0,i,o,a,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=true);}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);let u={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},s={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",u,t],["enter",c,t]],l=se(l,e.slice(o+1,o+r+3)),l=se(l,[["enter",s,t]]),l=se(l,et(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=se(l,[["exit",s,t],e[a-2],e[a-1],["exit",c,t]]),l=se(l,e.slice(a+1)),l=se(l,[["exit",u,t]]),ae(e,o,e.length,l),e}function lu(e,t,n){let r=this,i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(m){return o?o._inactive?p(m):(a=r.parser.defined.includes(Te(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(m),e.exit("labelMarker"),e.exit("labelEnd"),u):n(m)}function u(m){return m===40?e.attempt(nu,s,a?s:p)(m):m===91?e.attempt(ru,s,a?c:p)(m):a?s(m):p(m)}function c(m){return e.attempt(iu,s,p)(m)}function s(m){return t(m)}function p(m){return o._balanced=true,n(m)}}function su(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return Z(p)?Ve(e,o)(p):o(p)}function o(p){return p===41?s(p):Yt(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return Z(p)?Ve(e,u)(p):s(p)}function l(p){return n(p)}function u(p){return p===34||p===39||p===40?Kt(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):s(p)}function c(p){return Z(p)?Ve(e,s)(p):s(p)}function s(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function uu(e,t,n){let r=this;return i;function i(l){return Xt.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(Te(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function cu(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}var Zn={name:"labelStartImage",resolveAll:We.resolveAll,tokenize:pu};function pu(e,t,n){let r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}var er={name:"labelStartLink",resolveAll:We.resolveAll,tokenize:fu};function fu(e,t,n){let r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}var _t={name:"lineEnding",tokenize:mu};function mu(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),M(e,t,"linePrefix")}}var qe={name:"thematicBreak",tokenize:hu};function hu(e,t,n){let r=0,i;return o;function o(c){return e.enter("thematicBreak"),a(c)}function a(c){return i=c,l(c)}function l(c){return c===i?(e.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||E(c))?(e.exit("thematicBreak"),t(c)):n(c)}function u(c){return c===i?(e.consume(c),r++,u):(e.exit("thematicBreakSequence"),L(c)?M(e,l,"whitespace")(c):l(c))}}var le={continuation:{tokenize:xu},exit:vu,name:"list",tokenize:yu},du={partial:true,tokenize:_u},gu={partial:true,tokenize:bu};function yu(e,t,n){let r=this,i=r.events[r.events.length-1],o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],true).length:0,a=0;return l;function l(f){let g=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:yt(f)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:true})),g==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(qe,n,c)(f):c(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(f)}return n(f)}function u(f){return yt(f)&&++a<10?(e.consume(f),u):(!r.interrupt||a<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),c(f)):n(f)}function c(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(Le,r.interrupt?n:s,e.attempt(du,m,p))}function s(f){return r.containerState.initialBlankLine=true,o++,m(f)}function p(f){return L(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),m):n(f)}function m(f){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),true).length,t(f)}}function xu(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Le,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,M(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!L(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(gu,t,a)(l))}function a(l){return r.containerState._closeFlow=true,r.interrupt=void 0,M(e,e.attempt(le,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function bu(e,t,n){let r=this;return M(e,i,"listItemIndent",r.containerState.size+1);function i(o){let a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],true).length===r.containerState.size?t(o):n(o)}}function vu(e){e.exit(this.containerState.type);}function _u(e,t,n){let r=this;return M(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){let a=r.events[r.events.length-1];return !L(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}var Gt={name:"setextUnderline",resolveTo:wu,tokenize:ku};function wu(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n);}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);let a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function ku(e,t,n){let r=this,i;return o;function o(c){let s=r.events.length,p;for(;s--;)if(r.events[s][1].type!=="lineEnding"&&r.events[s][1].type!=="linePrefix"&&r.events[s][1].type!=="content"){p=r.events[s][1].type==="paragraph";break}return !r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=c,a(c)):n(c)}function a(c){return e.enter("setextHeadingLineSequence"),l(c)}function l(c){return c===i?(e.consume(c),l):(e.exit("setextHeadingLineSequence"),L(c)?M(e,u,"lineSuffix")(c):u(c))}function u(c){return c===null||E(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}var mo={tokenize:zu};function zu(e){let t=this,n=e.attempt(Le,r,e.attempt(this.parser.constructs.flowInitial,i,M(e,e.attempt(this.parser.constructs.flow,i,e.attempt($n,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}var ho={resolveAll:bo()},go=xo("string"),yo=xo("text");function xo(e){return {resolveAll:bo(e==="text"?Su:void 0),tokenize:t};function t(n){let r=this,i=this.parser.constructs[e],o=n.attempt(i,a,l);return a;function a(s){return c(s)?o(s):l(s)}function l(s){if(s===null){n.consume(s);return}return n.enter("data"),n.consume(s),u}function u(s){return c(s)?(n.exit("data"),o(s)):(n.consume(s),u)}function c(s){if(s===null)return  true;let p=i[s],m=-1;if(p)for(;++m<p.length;){let f=p[m];if(!f.previous||f.previous.call(r,r.previous))return  true}return  false}}}function bo(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function Su(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],i=t.sliceStream(r),o=i.length,a=-1,l=0,u;for(;o--;){let c=i[o];if(typeof c=="string"){for(a=c.length;c.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1;}else if(c===-2)u=true,l++;else if(c!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){let c={type:n===e.length||u||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2);}n++;}return e}var tr={};Nr(tr,{attentionMarkers:()=>Lu,contentInitial:()=>Eu,disable:()=>Ru,document:()=>Cu,flow:()=>Tu,flowInitial:()=>Iu,insideSpan:()=>Nu,string:()=>Au,text:()=>Pu});var Cu={42:le,43:le,45:le,48:le,49:le,50:le,51:le,52:le,53:le,54:le,55:le,56:le,57:le,62:jt},Eu={91:Yn},Iu={[-2]:bt,[-1]:bt,32:bt},Tu={35:Kn,42:qe,45:[Gt,qe],60:Jn,61:Gt,95:qe,96:Wt,126:Wt},Au={38:Vt,92:Ht},Pu={[-5]:_t,[-4]:_t,[-3]:_t,33:Zn,38:Vt,42:xt,60:[Wn,Qn],91:er,92:[Xn,Ht],93:We,95:xt,96:qn},Nu={null:[xt,ho]},Lu={null:[42,95]},Ru={null:[]};function vo(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},o=[],a=[],l=[],c={attempt:F(j),check:F($),consume:B,enter:V,exit:v,interrupt:F($,{interrupt:true})},s={code:null,containerState:{},defineSkip:x,events:[],now:w,parser:e,previous:null,sliceSerialize:g,sliceStream:b,write:f},p=t.tokenize.call(s,c);return t.resolveAll&&o.push(t),s;function f(S){return a=se(a,S),I(),a[a.length-1]!==null?[]:(H(t,0),s.events=et(o,s.events,s),s.events)}function g(S,T){return Mu(b(S),T)}function b(S){return Du(a,S)}function w(){let{_bufferIndex:S,_index:T,line:A,column:P,offset:X}=r;return {_bufferIndex:S,_index:T,line:A,column:P,offset:X}}function x(S){i[S.line]=S.column,O();}function I(){let S;for(;r._index<a.length;){let T=a[r._index];if(typeof T=="string")for(S=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===S&&r._bufferIndex<T.length;)C(T.charCodeAt(r._bufferIndex));else C(T);}}function C(S){p=p(S);}function B(S){E(S)?(r.line++,r.column=1,r.offset+=S===-3?2:1,O()):S!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=S;}function V(S,T){let A=T||{};return A.type=S,A.start=w(),s.events.push(["enter",A,s]),l.push(A),A}function v(S){let T=l.pop();return T.end=w(),s.events.push(["exit",T,s]),T}function j(S,T){H(S,T.from);}function $(S,T){T.restore();}function F(S,T){return A;function A(P,X,K){let pe,h,ue,fe;return Array.isArray(P)?oe(P):"tokenize"in P?oe([P]):d(P);function d(ee){return De;function De(de){let Me=de!==null&&ee[de],Xe=de!==null&&ee.null,pn=[...Array.isArray(Me)?Me:Me?[Me]:[],...Array.isArray(Xe)?Xe:Xe?[Xe]:[]];return oe(pn)(de)}}function oe(ee){return pe=ee,h=0,ee.length===0?K:ne(ee[h])}function ne(ee){return De;function De(de){return fe=q(),ue=ee,ee.partial||(s.currentConstruct=ee),ee.name&&s.parser.constructs.disable.null.includes(ee.name)?Ye():ee.tokenize.call(T?Object.assign(Object.create(s),T):s,c,ke,Ye)(de)}}function ke(ee){return S(ue,fe),X}function Ye(ee){return fe.restore(),++h<pe.length?ne(pe[h]):K}}}function H(S,T){S.resolveAll&&!o.includes(S)&&o.push(S),S.resolve&&ae(s.events,T,s.events.length-T,S.resolve(s.events.slice(T),s)),S.resolveTo&&(s.events=S.resolveTo(s.events,s));}function q(){let S=w(),T=s.previous,A=s.currentConstruct,P=s.events.length,X=Array.from(l);return {from:P,restore:K};function K(){r=S,s.previous=T,s.currentConstruct=A,s.events.length=P,l=X,O();}}function O(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1);}}function Du(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex,a;if(n===i)a=[e[n].slice(r,o)];else {if(a=e.slice(n,i),r>-1){let l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift();}o>0&&a.push(e[i].slice(0,o));}return a}function Mu(e,t){let n=-1,r=[],i;for(;++n<e.length;){let o=e[n],a;if(typeof o=="string")a=o;else switch(o){case  -5:{a="\r";break}case  -4:{a=`
`;break}case  -3:{a=`\r
`;break}case  -2:{a=t?" ":"	";break}case  -1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o);}i=o===-2,r.push(a);}return r.join("")}function nr(e){let r={constructs:to([tr,...(e||{}).extensions||[]]),content:i(lo),defined:[],document:i(uo),flow:i(mo),lazy:{},string:i(go),text:i(yo)};return r;function i(o){return a;function a(l){return vo(r,o,l)}}}function rr(e){for(;!$t(e););return e}var _o=/[\0\t\n\r]/g;function ir(){let e=1,t="",n=true,r;return i;function i(o,a,l){let u=[],c,s,p,m,f;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(_o.lastIndex=p,c=_o.exec(o),m=c&&c.index!==void 0?c.index:o.length,f=o.charCodeAt(m),!c){t=o.slice(p);break}if(f===10&&p===m&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),p<m&&(u.push(o.slice(p,m)),e+=m-p),f){case 0:{u.push(65533),e++;break}case 9:{for(s=Math.ceil(e/4)*4,u.push(-2);e++<s;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=true,e=1;}p=m+1;}return l&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}var Ou=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function wo(e){return e.replace(Ou,Fu)}function Fu(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let i=n.charCodeAt(1),o=i===120||i===88;return Ut(n.slice(o?2:1),o?16:10)}return Ze(n)||e}var zo={}.hasOwnProperty;function or(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Bu(n)(rr(nr(n).document().write(ir()(e,t,true))))}function Bu(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Ar),autolinkProtocol:F,autolinkEmail:F,atxHeading:o(Er),blockQuote:o(de),characterEscape:F,characterReference:F,codeFenced:o(Me),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(Me,a),codeText:o(Xe,a),codeTextData:F,data:F,codeFlowValue:F,definition:o(pn),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(Pa),hardBreakEscape:o(Ir),hardBreakTrailing:o(Ir),htmlFlow:o(Tr,a),htmlFlowData:F,htmlText:o(Tr,a),htmlTextData:F,image:o(Na),label:a,link:o(Ar),listItem:o(La),listItemValue:m,listOrdered:o(Pr,p),listUnordered:o(Pr),paragraph:o(Ra),reference:d,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(Er),strong:o(Da),thematicBreak:o(Oa)},exit:{atxHeading:u(),atxHeadingSequence:V,autolink:u(),autolinkEmail:De,autolinkProtocol:ee,blockQuote:u(),characterEscapeValue:H,characterReferenceMarkerHexadecimal:ne,characterReferenceMarkerNumeric:ne,characterReferenceValue:ke,characterReference:Ye,codeFenced:u(w),codeFencedFence:b,codeFencedFenceInfo:f,codeFencedFenceMeta:g,codeFlowValue:H,codeIndented:u(x),codeText:u(A),codeTextData:H,data:H,definition:u(),definitionDestinationString:B,definitionLabelString:I,definitionTitleString:C,emphasis:u(),hardBreakEscape:u(O),hardBreakTrailing:u(O),htmlFlow:u(S),htmlFlowData:H,htmlText:u(T),htmlTextData:H,image:u(X),label:pe,labelText:K,lineEnding:q,link:u(P),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:oe,resourceDestinationString:h,resourceTitleString:ue,resource:fe,setextHeading:u($),setextHeadingLineSequence:j,setextHeadingText:v,strong:u(),thematicBreak:u()}};So(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(y){let k={type:"root",children:[]},R={stack:[k],tokenStack:[],config:t,enter:l,exit:c,buffer:a,resume:s,data:n},U=[],Y=-1;for(;++Y<y.length;)if(y[Y][1].type==="listOrdered"||y[Y][1].type==="listUnordered")if(y[Y][0]==="enter")U.push(Y);else {let be=U.pop();Y=i(y,be,Y);}for(Y=-1;++Y<y.length;){let be=t[y[Y][0]];zo.call(be,y[Y][1].type)&&be[y[Y][1].type].call(Object.assign({sliceSerialize:y[Y][2].sliceSerialize},R),y[Y][1]);}if(R.tokenStack.length>0){let be=R.tokenStack[R.tokenStack.length-1];(be[1]||ko).call(R,void 0,be[0]);}for(k.position={start:Re(y.length>0?y[0][1].start:{line:1,column:1,offset:0}),end:Re(y.length>0?y[y.length-2][1].end:{line:1,column:1,offset:0})},Y=-1;++Y<t.transforms.length;)k=t.transforms[Y](k)||k;return k}function i(y,k,R){let U=k-1,Y=-1,be=false,Oe,Se,it,ot;for(;++U<=R;){let me=y[U];switch(me[1].type){case "listUnordered":case "listOrdered":case "blockQuote":{me[0]==="enter"?Y++:Y--,ot=void 0;break}case "lineEndingBlank":{me[0]==="enter"&&(Oe&&!ot&&!Y&&!it&&(it=U),ot=void 0);break}case "linePrefix":case "listItemValue":case "listItemMarker":case "listItemPrefix":case "listItemPrefixWhitespace":break;default:ot=void 0;}if(!Y&&me[0]==="enter"&&me[1].type==="listItemPrefix"||Y===-1&&me[0]==="exit"&&(me[1].type==="listUnordered"||me[1].type==="listOrdered")){if(Oe){let Ke=U;for(Se=void 0;Ke--;){let Ce=y[Ke];if(Ce[1].type==="lineEnding"||Ce[1].type==="lineEndingBlank"){if(Ce[0]==="exit")continue;Se&&(y[Se][1].type="lineEndingBlank",be=true),Ce[1].type="lineEnding",Se=Ke;}else if(!(Ce[1].type==="linePrefix"||Ce[1].type==="blockQuotePrefix"||Ce[1].type==="blockQuotePrefixWhitespace"||Ce[1].type==="blockQuoteMarker"||Ce[1].type==="listItemIndent"))break}it&&(!Se||it<Se)&&(Oe._spread=true),Oe.end=Object.assign({},Se?y[Se][1].start:me[1].end),y.splice(Se||U,0,["exit",Oe,me[2]]),U++,R++;}if(me[1].type==="listItemPrefix"){let Ke={type:"listItem",_spread:false,start:Object.assign({},me[1].start),end:void 0};Oe=Ke,y.splice(U,0,["enter",Ke,me[2]]),U++,R++,it=void 0,ot=true;}}}return y[k][1]._spread=be,R}function o(y,k){return R;function R(U){l.call(this,y(U),U),k&&k.call(this,U);}}function a(){this.stack.push({type:"fragment",children:[]});}function l(y,k,R){this.stack[this.stack.length-1].children.push(y),this.stack.push(y),this.tokenStack.push([k,R||void 0]),y.position={start:Re(k.start),end:void 0};}function u(y){return k;function k(R){y&&y.call(this,R),c.call(this,R);}}function c(y,k){let R=this.stack.pop(),U=this.tokenStack.pop();if(U)U[0].type!==y.type&&(k?k.call(this,y,U[0]):(U[1]||ko).call(this,y,U[0]));else throw new Error("Cannot close `"+y.type+"` ("+Pe({start:y.start,end:y.end})+"): it\u2019s not open");R.position.end=Re(y.end);}function s(){return Hn(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=true;}function m(y){if(this.data.expectingFirstListItemValue){let k=this.stack[this.stack.length-2];k.start=Number.parseInt(this.sliceSerialize(y),10),this.data.expectingFirstListItemValue=void 0;}}function f(){let y=this.resume(),k=this.stack[this.stack.length-1];k.lang=y;}function g(){let y=this.resume(),k=this.stack[this.stack.length-1];k.meta=y;}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=true);}function w(){let y=this.resume(),k=this.stack[this.stack.length-1];k.value=y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0;}function x(){let y=this.resume(),k=this.stack[this.stack.length-1];k.value=y.replace(/(\r?\n|\r)$/g,"");}function I(y){let k=this.resume(),R=this.stack[this.stack.length-1];R.label=k,R.identifier=Te(this.sliceSerialize(y)).toLowerCase();}function C(){let y=this.resume(),k=this.stack[this.stack.length-1];k.title=y;}function B(){let y=this.resume(),k=this.stack[this.stack.length-1];k.url=y;}function V(y){let k=this.stack[this.stack.length-1];if(!k.depth){let R=this.sliceSerialize(y).length;k.depth=R;}}function v(){this.data.setextHeadingSlurpLineEnding=true;}function j(y){let k=this.stack[this.stack.length-1];k.depth=this.sliceSerialize(y).codePointAt(0)===61?1:2;}function $(){this.data.setextHeadingSlurpLineEnding=void 0;}function F(y){let R=this.stack[this.stack.length-1].children,U=R[R.length-1];(!U||U.type!=="text")&&(U=Ma(),U.position={start:Re(y.start),end:void 0},R.push(U)),this.stack.push(U);}function H(y){let k=this.stack.pop();k.value+=this.sliceSerialize(y),k.position.end=Re(y.end);}function q(y){let k=this.stack[this.stack.length-1];if(this.data.atHardBreak){let R=k.children[k.children.length-1];R.position.end=Re(y.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(k.type)&&(F.call(this,y),H.call(this,y));}function O(){this.data.atHardBreak=true;}function S(){let y=this.resume(),k=this.stack[this.stack.length-1];k.value=y;}function T(){let y=this.resume(),k=this.stack[this.stack.length-1];k.value=y;}function A(){let y=this.resume(),k=this.stack[this.stack.length-1];k.value=y;}function P(){let y=this.stack[this.stack.length-1];if(this.data.inReference){let k=this.data.referenceType||"shortcut";y.type+="Reference",y.referenceType=k,delete y.url,delete y.title;}else delete y.identifier,delete y.label;this.data.referenceType=void 0;}function X(){let y=this.stack[this.stack.length-1];if(this.data.inReference){let k=this.data.referenceType||"shortcut";y.type+="Reference",y.referenceType=k,delete y.url,delete y.title;}else delete y.identifier,delete y.label;this.data.referenceType=void 0;}function K(y){let k=this.sliceSerialize(y),R=this.stack[this.stack.length-2];R.label=wo(k),R.identifier=Te(k).toLowerCase();}function pe(){let y=this.stack[this.stack.length-1],k=this.resume(),R=this.stack[this.stack.length-1];if(this.data.inReference=true,R.type==="link"){let U=y.children;R.children=U;}else R.alt=k;}function h(){let y=this.resume(),k=this.stack[this.stack.length-1];k.url=y;}function ue(){let y=this.resume(),k=this.stack[this.stack.length-1];k.title=y;}function fe(){this.data.inReference=void 0;}function d(){this.data.referenceType="collapsed";}function oe(y){let k=this.resume(),R=this.stack[this.stack.length-1];R.label=k,R.identifier=Te(this.sliceSerialize(y)).toLowerCase(),this.data.referenceType="full";}function ne(y){this.data.characterReferenceType=y.type;}function ke(y){let k=this.sliceSerialize(y),R=this.data.characterReferenceType,U;R?(U=Ut(k,R==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):U=Ze(k);let Y=this.stack[this.stack.length-1];Y.value+=U;}function Ye(y){let k=this.stack.pop();k.position.end=Re(y.end);}function ee(y){H.call(this,y);let k=this.stack[this.stack.length-1];k.url=this.sliceSerialize(y);}function De(y){H.call(this,y);let k=this.stack[this.stack.length-1];k.url="mailto:"+this.sliceSerialize(y);}function de(){return {type:"blockquote",children:[]}}function Me(){return {type:"code",lang:null,meta:null,value:""}}function Xe(){return {type:"inlineCode",value:""}}function pn(){return {type:"definition",identifier:"",label:null,title:null,url:""}}function Pa(){return {type:"emphasis",children:[]}}function Er(){return {type:"heading",depth:0,children:[]}}function Ir(){return {type:"break"}}function Tr(){return {type:"html",value:""}}function Na(){return {type:"image",title:null,url:"",alt:null}}function Ar(){return {type:"link",title:null,url:"",children:[]}}function Pr(y){return {type:"list",ordered:y.type==="listOrdered",start:null,spread:y._spread,children:[]}}function La(y){return {type:"listItem",spread:y._spread,checked:null,children:[]}}function Ra(){return {type:"paragraph",children:[]}}function Da(){return {type:"strong",children:[]}}function Ma(){return {type:"text",value:""}}function Oa(){return {type:"thematicBreak"}}}function Re(e){return {line:e.line,column:e.column,offset:e.offset}}function So(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?So(e,r):Uu(e,r);}}function Uu(e,t){let n;for(n in t)if(zo.call(t,n))switch(n){case "canContainEols":{let r=t[n];r&&e[n].push(...r);break}case "transforms":{let r=t[n];r&&e[n].push(...r);break}case "enter":case "exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function ko(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Pe({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Pe({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Pe({start:t.start,end:t.end})+") is still open")}function Jt(e){let t=this;t.parser=n;function n(r){return or(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Co(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),true)};return e.patch(t,n),e.applyData(t,n)}function Eo(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Io(e,t){let n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function To(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ao(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Po(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=xe(r.toLowerCase()),o=e.footnoteOrder.indexOf(r),a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);let u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:true,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,u);let c={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,c),e.applyData(t,c)}function No(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Lo(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Qt(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return [{type:"text",value:"!["+t.alt+r}];let i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});let a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function Ro(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Qt(e,t);let i={src:xe(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function Do(e,t){let n={src:xe(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Mo(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Oo(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Qt(e,t);let i={href:xe(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);let o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Fo(e,t){let n={href:xe(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Bo(e,t,n){let r=e.all(t),i=n?ju(n):Uo(t),o={},a=[];if(typeof t.checked=="boolean"){let s=r[0],p;s&&s.type==="element"&&s.tagName==="p"?p=s:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:true},children:[]}),o.className=["task-list-item"];}let l=-1;for(;++l<r.length;){let s=r[l];(i||l!==0||s.type!=="element"||s.tagName!=="p")&&a.push({type:"text",value:`
`}),s.type==="element"&&s.tagName==="p"&&!i?a.push(...s.children):a.push(s);}let u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&a.push({type:"text",value:`
`});let c={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,c),e.applyData(t,c)}function ju(e){let t=false;if(e.type==="list"){t=e.spread||false;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Uo(n[r]);}return t}function Uo(e){let t=e.spread;return t??e.children.length>1}function jo(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){let a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,true)};return e.patch(t,o),e.applyData(t,o)}function Ho(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Vo(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Wo(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function qo(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],true)};e.patch(t.children[0],a),i.push(a);}if(n.length>0){let a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,true)},l=Qe(t.children[1]),u=Ft(t.children[t.children.length-1]);l&&u&&(a.position={start:l,end:u}),i.push(a);}let o={type:"element",tagName:"table",properties:{},children:e.wrap(i,true)};return e.patch(t,o),e.applyData(t,o)}function $o(e,t,n){let r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length,u=-1,c=[];for(;++u<l;){let p=t.children[u],m={},f=a?a[u]:void 0;f&&(m.align=f);let g={type:"element",tagName:o,properties:m,children:[]};p&&(g.children=e.all(p),e.patch(p,g),g=e.applyData(p,g)),c.push(g);}let s={type:"element",tagName:"tr",properties:{},children:e.wrap(c,true)};return e.patch(t,s),e.applyData(t,s)}function Yo(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ko(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,o=[];for(;r;)o.push(Xo(t.slice(i,r.index),i>0,true),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Xo(t.slice(i),i>0,false)),o.join("")}function Xo(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===9||o===32;)r++,o=e.codePointAt(r);}if(n){let o=e.codePointAt(i-1);for(;o===9||o===32;)i--,o=e.codePointAt(i-1);}return i>r?e.slice(r,i):""}function Go(e,t){let n={type:"text",value:Ko(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Jo(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var Qo={blockquote:Co,break:Eo,code:Io,delete:To,emphasis:Ao,footnoteReference:Po,heading:No,html:Lo,imageReference:Ro,image:Do,inlineCode:Mo,linkReference:Oo,link:Fo,listItem:Bo,list:jo,paragraph:Ho,root:Vo,strong:Wo,table:qo,tableCell:Yo,tableRow:$o,text:Go,thematicBreak:Jo,toml:Zt,yaml:Zt,definition:Zt,footnoteDefinition:Zt};function Zt(){}var Zo=typeof self=="object"?self:globalThis,qu=(e,t)=>{let n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);let[o,a]=t[i];switch(o){case 0:case  -1:return n(a,i);case 1:{let l=n([],i);for(let u of a)l.push(r(u));return l}case 2:{let l=n({},i);for(let[u,c]of a)l[r(u)]=r(c);return l}case 3:return n(new Date(a),i);case 4:{let{source:l,flags:u}=a;return n(new RegExp(l,u),i)}case 5:{let l=n(new Map,i);for(let[u,c]of a)l.set(r(u),r(c));return l}case 6:{let l=n(new Set,i);for(let u of a)l.add(r(u));return l}case 7:{let{name:l,message:u}=a;return n(new Zo[l](u),i)}case 8:return n(BigInt(a),i);case "BigInt":return n(Object(BigInt(a)),i);case "ArrayBuffer":return n(new Uint8Array(a).buffer,a);case "DataView":{let{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new Zo[o](a),i)};return r},sr=e=>qu(new Map,e)(0);var tt="",{toString:$u}={},{keys:Yu}=Object,wt=e=>{let t=typeof e;if(t!=="object"||!e)return [0,t];let n=$u.call(e).slice(8,-1);switch(n){case "Array":return [1,tt];case "Object":return [2,tt];case "Date":return [3,tt];case "RegExp":return [4,tt];case "Map":return [5,tt];case "Set":return [6,tt];case "DataView":return [1,n]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},tn=([e,t])=>e===0&&(t==="function"||t==="symbol"),Xu=(e,t,n,r)=>{let i=(a,l)=>{let u=r.push(a)-1;return n.set(l,u),u},o=a=>{if(n.has(a))return n.get(a);let[l,u]=wt(a);switch(l){case 0:{let s=a;switch(u){case "bigint":l=8,s=a.toString();break;case "function":case "symbol":if(e)throw new TypeError("unable to serialize "+u);s=null;break;case "undefined":return i([-1],a)}return i([l,s],a)}case 1:{if(u){let m=a;return u==="DataView"?m=new Uint8Array(a.buffer):u==="ArrayBuffer"&&(m=new Uint8Array(a)),i([u,[...m]],a)}let s=[],p=i([l,s],a);for(let m of a)s.push(o(m));return p}case 2:{if(u)switch(u){case "BigInt":return i([u,a.toString()],a);case "Boolean":case "Number":case "String":return i([u,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());let s=[],p=i([l,s],a);for(let m of Yu(a))(e||!tn(wt(a[m])))&&s.push([o(m),o(a[m])]);return p}case 3:return i([l,a.toISOString()],a);case 4:{let{source:s,flags:p}=a;return i([l,{source:s,flags:p}],a)}case 5:{let s=[],p=i([l,s],a);for(let[m,f]of a)(e||!(tn(wt(m))||tn(wt(f))))&&s.push([o(m),o(f)]);return p}case 6:{let s=[],p=i([l,s],a);for(let m of a)(e||!tn(wt(m)))&&s.push(o(m));return p}}let{message:c}=a;return i([l,{name:u,message:c}],a)};return o},ur=(e,{json:t,lossy:n}={})=>{let r=[];return Xu(!(t||n),!!t,new Map,r)(e),r};var nt=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?sr(ur(e,t)):structuredClone(e):(e,t)=>sr(ur(e,t));function Ku(e,t){let n=[{type:"text",value:"\u21A9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Gu(e,t){return "Back to reference "+(e+1)+(t>1?"-"+t:"")}function ia(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Ku,r=e.options.footnoteBackLabel||Gu,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[],u=-1;for(;++u<e.footnoteOrder.length;){let c=e.footnoteById.get(e.footnoteOrder[u]);if(!c)continue;let s=e.all(c),p=String(c.identifier).toUpperCase(),m=xe(p.toLowerCase()),f=0,g=[],b=e.footnoteCounts.get(p);for(;b!==void 0&&++f<=b;){g.length>0&&g.push({type:"text",value:" "});let I=typeof n=="string"?n:n(u,f);typeof I=="string"&&(I={type:"text",value:I}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+m+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,f),className:["data-footnote-backref"]},children:Array.isArray(I)?I:[I]});}let w=s[s.length-1];if(w&&w.type==="element"&&w.tagName==="p"){let I=w.children[w.children.length-1];I&&I.type==="text"?I.value+=" ":w.children.push({type:"text",value:" "}),w.children.push(...g);}else s.push(...g);let x={type:"element",tagName:"li",properties:{id:t+"fn-"+m},children:e.wrap(s,true)};e.patch(c,x),l.push(x);}if(l.length!==0)return {type:"element",tagName:"section",properties:{dataFootnotes:true,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...nt(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,true)},{type:"text",value:`
`}]}}var nn=(function(e){if(e==null)return ec;if(typeof e=="function")return rn(e);if(typeof e=="object")return Array.isArray(e)?Ju(e):Qu(e);if(typeof e=="string")return Zu(e);throw new Error("Expected function, string, or object as test")});function Ju(e){let t=[],n=-1;for(;++n<e.length;)t[n]=nn(e[n]);return rn(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return  true;return  false}}function Qu(e){let t=e;return rn(n);function n(r){let i=r,o;for(o in e)if(i[o]!==t[o])return  false;return  true}}function Zu(e){return rn(t);function t(n){return n&&n.type===e}}function rn(e){return t;function t(n,r,i){return !!(tc(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function ec(){return  true}function tc(e){return e!==null&&typeof e=="object"&&"type"in e}var oa=[],cr=true,on=false,pr="skip";function fr(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;let o=nn(i),a=r?-1:1;l(e,void 0,[])();function l(u,c,s){let p=u&&typeof u=="object"?u:{};if(typeof p.type=="string"){let f=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(u.type+(f?"<"+f+">":""))+")"});}return m;function m(){let f=oa,g,b,w;if((!t||o(u,c,s[s.length-1]||void 0))&&(f=nc(n(u,s)),f[0]===on))return f;if("children"in u&&u.children){let x=u;if(x.children&&f[0]!==pr)for(b=(r?x.children.length:-1)+a,w=s.concat(x);b>-1&&b<x.children.length;){let I=x.children[b];if(g=l(I,b,w)(),g[0]===on)return g;b=typeof g[1]=="number"?g[1]:b+a;}}return f}}}function nc(e){return Array.isArray(e)?e:typeof e=="number"?[cr,e]:e==null?oa:[e]}function kt(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),fr(e,o,l,i);function l(u,c){let s=c[c.length-1],p=s?s.children.indexOf(u):void 0;return a(u,p,s)}}var mr={}.hasOwnProperty,rc={};function la(e,t){let n=t||rc,r=new Map,i=new Map,o=new Map,a={...Qo,...n.handlers},l={all:c,applyData:oc,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:u,options:n,patch:ic,wrap:lc};return kt(e,function(s){if(s.type==="definition"||s.type==="footnoteDefinition"){let p=s.type==="definition"?r:i,m=String(s.identifier).toUpperCase();p.has(m)||p.set(m,s);}}),l;function u(s,p){let m=s.type,f=l.handlers[m];if(mr.call(l.handlers,m)&&f)return f(l,s,p);if(l.options.passThrough&&l.options.passThrough.includes(m)){if("children"in s){let{children:b,...w}=s,x=nt(w);return x.children=l.all(s),x}return nt(s)}return (l.options.unknownHandler||ac)(l,s,p)}function c(s){let p=[];if("children"in s){let m=s.children,f=-1;for(;++f<m.length;){let g=l.one(m[f],s);if(g){if(f&&m[f-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=aa(g.value)),!Array.isArray(g)&&g.type==="element")){let b=g.children[0];b&&b.type==="text"&&(b.value=aa(b.value));}Array.isArray(g)?p.push(...g):p.push(g);}}}return p}}function ic(e,t){e.position&&(t.position=Dn(e));}function oc(e,t){let n=t;if(e&&e.data){let r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else {let a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a};}n.type==="element"&&o&&Object.assign(n.properties,nt(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i);}return n}function ac(e,t){let n=t.data||{},r="value"in t&&!(mr.call(n,"hProperties")||mr.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function lc(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function aa(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function an(e,t){let n=la(e,t),r=n.one(e,void 0),i=ia(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&(o.children.push({type:"text",value:`
`},i)),o}function ln(e,t){return e&&"run"in e?async function(n,r){let i=an(n,{file:r,...t});await e.run(i,r);}:function(n,r){return an(n,{file:r,...e||t})}}function hr(e){if(e)throw e}var cn=Lr(ga());function zt(e){if(typeof e!="object"||e===null)return  false;let t=Object.getPrototypeOf(e);return (t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function dr(){let e=[],t={run:n,use:r};return t;function n(...i){let o=-1,a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(u,...c){let s=e[++o],p=-1;if(u){a(u);return}for(;++p<i.length;)(c[p]===null||c[p]===void 0)&&(c[p]=i[p]);i=c,s?ya(s,l)(...c):a(null,...c);}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function ya(e,t){let n;return r;function r(...a){let l=e.length>a.length,u;l&&a.push(i);try{u=e.apply(this,a);}catch(c){let s=c;if(l&&n)throw s;return i(s)}l||(u&&u.then&&typeof u.then=="function"?u.then(o,i):u instanceof Error?i(u):o(u));}function i(a,...l){n||(n=true,t(a,...l));}function o(a){i(null,a);}}var we={basename:sc,dirname:uc,extname:cc,join:pc,sep:"/"};function sc(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');St(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=true,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return "";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=true,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function uc(e){if(St(e),e.length===0)return ".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=true);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function cc(e){St(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){let l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=true,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1);}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function pc(...e){let t=-1,n;for(;++t<e.length;)St(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":fc(n)}function fc(e){St(e);let t=e.codePointAt(0)===47,n=mc(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function mc(e,t){let n="",r=0,i=-1,o=0,a=-1,l,u;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else {if(l===47)break;l=47;}if(l===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2);}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0;}else l===46&&o>-1?o++:o=-1;}return n}function St(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}var xa={cwd:hc};function hc(){return "/"}function rt(e){return !!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function ba(e){if(typeof e=="string")e=new URL(e);else if(!rt(e)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return dc(e)}function dc(e){if(e.hostname!==""){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}var gr=["history","path","basename","stem","extname","dirname"],$e=class{constructor(t){let n;t?rt(t)?n={path:t}:typeof t=="string"||gc(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":xa.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<gr.length;){let o=gr[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o]);}let i;for(i in n)gr.includes(i)||(this[i]=n[i]);}get basename(){return typeof this.path=="string"?we.basename(this.path):void 0}set basename(t){xr(t,"basename"),yr(t,"basename"),this.path=we.join(this.dirname||"",t);}get dirname(){return typeof this.path=="string"?we.dirname(this.path):void 0}set dirname(t){va(this.basename,"dirname"),this.path=we.join(t||"",this.basename);}get extname(){return typeof this.path=="string"?we.extname(this.path):void 0}set extname(t){if(yr(t,"extname"),va(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=we.join(this.dirname,this.stem+(t||""));}get path(){return this.history[this.history.length-1]}set path(t){rt(t)&&(t=ba(t)),xr(t,"path"),this.path!==t&&this.history.push(t);}get stem(){return typeof this.path=="string"?we.basename(this.path,this.extname):void 0}set stem(t){xr(t,"stem"),yr(t,"stem"),this.path=we.join(this.dirname||"",t+(this.extname||""));}fail(t,n,r){let i=this.message(t,n,r);throw i.fatal=true,i}info(t,n,r){let i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){let i=new Q(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=false,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function yr(e,t){if(e&&e.includes(we.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+we.sep+"`")}function xr(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function va(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function gc(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var _a=(function(e){let r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o});var yc={}.hasOwnProperty,wr=class e extends _a{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=dr();}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r);}return t.data((0, cn.default)(true,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(_r("data",this.frozen),this.namespace[t]=n,this):yc.call(this.namespace,t)&&this.namespace[t]||void 0:t?(_r("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===false)continue;r[0]===true&&(r[0]=void 0);let i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i);}return this.frozen=true,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();let n=un(t),r=this.parser||this.Parser;return br("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),br("process",this.parser||this.Parser),vr("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){let l=un(t),u=r.parse(l);r.run(u,l,function(s,p,m){if(s||!p||!m)return c(s);let f=p,g=r.stringify(f,m);bc(g)?m.value=g:m.result=g,c(s,m);});function c(s,p){s||!p?a(s):o?o(p):n(void 0,p);}}}processSync(t){let n=false,r;return this.freeze(),br("processSync",this.parser||this.Parser),vr("processSync",this.compiler||this.Compiler),this.process(t,i),ka("processSync","process",n),r;function i(o,a){n=true,hr(o),r=a;}}run(t,n,r){wa(t),this.freeze();let i=this.transformers;return !r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){let u=un(n);i.run(t,u,c);function c(s,p,m){let f=p||t;s?l(s):a?a(f):r(void 0,f,m);}}}runSync(t,n){let r=false,i;return this.run(t,n,o),ka("runSync","run",r),i;function o(a,l){hr(a),i=l,r=true;}}stringify(t,n){this.freeze();let r=un(n),i=this.compiler||this.Compiler;return vr("stringify",i),wa(t),i(t,r)}use(t,...n){let r=this.attachers,i=this.namespace;if(_r("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){let[s,...p]=c;u(s,p);}else a(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function a(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(c.plugins),c.settings&&(i.settings=(0, cn.default)(true,i.settings,c.settings));}function l(c){let s=-1;if(c!=null)if(Array.isArray(c))for(;++s<c.length;){let p=c[s];o(p);}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,s){let p=-1,m=-1;for(;++p<r.length;)if(r[p][0]===c){m=p;break}if(m===-1)r.push([c,...s]);else if(s.length>0){let[f,...g]=s,b=r[m][1];zt(b)&&zt(f)&&(f=(0, cn.default)(true,b,f)),r[m]=[c,f,...g];}}}},kr=new wr().freeze();function br(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function vr(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function _r(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function wa(e){if(!zt(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function ka(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function un(e){return xc(e)?e:new $e(e)}function xc(e){return !!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function bc(e){return typeof e=="string"||vc(e)}function vc(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var _c="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",za=[],Sa={allowDangerousHtml:true},wc=/^(https?|ircs?|mailto|xmpp)$/i,kc=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function zr(e){let t=zc(e),n=Sc(e);return Cc(t.runSync(t.parse(n),n),e)}function zc(e){let t=e.rehypePlugins||za,n=e.remarkPlugins||za,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Sa}:Sa;return kr().use(Jt).use(n).use(ln,r).use(t)}function Sc(e){let t=e.children||"",n=new $e;return typeof t=="string"?n.value=t:(void 0),n}function Cc(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,u=t.urlTransform||Ca;for(let s of kc)Object.hasOwn(t,s.from)&&(""+s.from+(s.to?"use `"+s.to+"` instead":"remove it")+_c+s.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),kt(e,c),Fn(e,{Fragment:ge,components:i,ignoreInvalidStyle:true,jsx:z,jsxs:z,passKeys:true,passNode:true});function c(s,p,m){if(s.type==="raw"&&m&&typeof p=="number")return a?m.children.splice(p,1):m.children[p]={type:"text",value:s.value},p;if(s.type==="element"){let f;for(f in dt)if(Object.hasOwn(dt,f)&&Object.hasOwn(s.properties,f)){let g=s.properties[f],b=dt[f];(b===null||b.includes(s.tagName))&&(s.properties[f]=u(String(g||""),f,s));}}if(s.type==="element"){let f=n?!n.includes(s.tagName):o?o.includes(s.tagName):false;if(!f&&r&&typeof p=="number"&&(f=!r(s,p,m)),f&&m&&typeof p=="number")return l&&s.children?m.children.splice(p,1,...s.children):m.children.splice(p,1),p}}}function Ca(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||wc.test(e.slice(0,t))?e:""}var Ec="https://chat.converzent.de",Ic=e=>{if(!e?.position)return {bottom:"1rem",right:"1rem"};if(typeof e.position=="string")switch(e.position){case "bottom-right":return {bottom:"1rem",right:"1rem"};case "bottom-left":return {bottom:"1rem",left:"1rem"};case "top-right":return {top:"1rem",right:"1rem"};case "top-left":return {top:"1rem",left:"1rem"};default:return {bottom:"1rem",right:"1rem"}}else {let t={};return e.position.bottom&&(t.bottom=e.position.bottom),e.position.top&&(t.top=e.position.top),e.position.left&&(t.left=e.position.left),e.position.right&&(t.right=e.position.right),t}},Tc=e=>{if(!e?.dialogSize)return {width:"350px",height:"500px"};if(typeof e.dialogSize=="string")switch(e.dialogSize){case "small":return {width:"300px",height:"400px"};case "medium":return {width:"350px",height:"500px"};case "large":return {width:"400px",height:"600px"};default:return {width:"350px",height:"500px"}}else return {width:`${Math.max(250,e.dialogSize.width)}px`,height:`${Math.max(300,e.dialogSize.height)}px`}},Ac=e=>e?.frameColor||"#E5E7EB",Pc=(e,t)=>{let n=e?.buttonColor;return t?{backgroundColor:n?.open||"#1F2937"}:{backgroundColor:n?.normal||"#2563EB","--hover-color":n?.hover||"#1D4ED8"}},Ea=()=>z("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:z("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"})}),Ia=()=>z("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:z("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),Nc=()=>z("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:z("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})}),Lc=()=>z("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:z("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),Rc=({title:e,subtitle:t,onClose:n,onClear:r,darkMode:i})=>z("div",{className:`cvz-p-4 cvz-shadow-md cvz-flex cvz-justify-between cvz-items-start ${i?"cvz-bg-gradient-to-b cvz-from-gray-900 cvz-to-gray-800 cvz-text-white":"cvz-bg-gradient-to-b cvz-from-blue-600 cvz-to-blue-500 cvz-text-white"}`,children:[z("div",{className:"cvz-flex cvz-items-center cvz-gap-3",children:[z("div",{className:"cvz-relative",children:[z("div",{className:`cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-border-2 ${i?"cvz-border-gray-800":"cvz-border-blue-600"}`}),z("div",{className:"cvz-absolute cvz-top-0 cvz-left-0 cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-animate-ping cvz-opacity-75"})]}),z("div",{children:[z("h3",{className:"cvz-font-bold cvz-text-lg cvz-leading-tight",children:e}),t&&z("p",{className:`cvz-text-xs cvz-mt-0.5 ${i?"cvz-text-gray-300":"cvz-text-blue-100"}`,children:t})]})]}),z("div",{className:"cvz-flex cvz-gap-2",children:[z("button",{onClick:r,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Clear History",children:z(Lc,{})}),z("button",{onClick:n,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Close Chat",children:z(Ia,{})})]})]}),Dc=({content:e,enableMarkdown:t,darkMode:n})=>t?z("div",{className:"cvz-markdown-content",children:z(zr,{components:{p:({children:r})=>z("p",{className:`cvz-mb-2 cvz-last:cvz-mb-0 ${n?"cvz-text-gray-100":""}`,children:r}),h1:({children:r})=>z("h1",{className:`cvz-text-xl cvz-font-bold cvz-mb-2 cvz-mt-4 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h2:({children:r})=>z("h2",{className:`cvz-text-lg cvz-font-bold cvz-mb-2 cvz-mt-3 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h3:({children:r})=>z("h3",{className:`cvz-text-base cvz-font-bold cvz-mb-1 cvz-mt-2 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),ul:({children:r})=>z("ul",{className:`cvz-list-disc cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),ol:({children:r})=>z("ol",{className:`cvz-list-decimal cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),li:({children:r})=>z("li",{className:"cvz-ml-2",children:r}),code:({children:r})=>z("code",{className:`cvz-px-1 cvz-py-0.5 cvz-rounded cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),pre:({children:r})=>z("pre",{className:`cvz-p-2 cvz-rounded cvz-overflow-x-auto cvz-mb-2 cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),blockquote:({children:r})=>z("blockquote",{className:`cvz-border-l-4 cvz-pl-3 cvz-italic cvz-mb-2 ${n?"cvz-border-gray-600 cvz-text-gray-300":"cvz-border-gray-300"}`,children:r}),strong:({children:r})=>z("strong",{className:"cvz-font-bold",children:r}),em:({children:r})=>z("em",{className:"cvz-italic",children:r}),a:({children:r,href:i})=>z("a",{href:i,className:`cvz-underline ${n?"cvz-text-blue-400 cvz-hover:cvz-text-blue-300":"cvz-text-blue-600 cvz-hover:cvz-text-blue-800"}`,target:"_blank",rel:"noopener noreferrer",children:r})},children:e})}):ze("span",null,e),Mc=({messages:e,isStreaming:t,streamingMessage:n,messagesEndRef:r,enableMarkdown:i,darkMode:o})=>{let a=Be(null),[l,u]=_e(true);return Je(()=>{let c=a.current;if(!c)return;let s=()=>{let{scrollTop:p,scrollHeight:m,clientHeight:f}=c,g=m-p-f<100;u(g);};return c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)},[]),Je(()=>{l&&r.current&&r.current.scrollIntoView({behavior:"smooth"});},[e,n,l,r]),z("div",{ref:a,className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-4 cvz-space-y-4 ${o?"cvz-bg-gray-900 cvz-scrollbar-dark":"cvz-bg-gray-50 cvz-scrollbar-light"}`,children:[e.length===0&&!n&&z("div",{className:`cvz-flex cvz-flex-col cvz-items-center cvz-justify-center cvz-h-full cvz-space-y-2 ${o?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:[z(Ea,{}),z("p",{className:"cvz-text-sm",children:"Start a conversation"})]}),e.map(c=>z("div",{className:`cvz-flex ${c.role==="USER"?"cvz-justify-end":"cvz-justify-start"}`,children:z("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-text-sm cvz-shadow-sm ${c.role==="USER"?o?"cvz-bg-blue-500 cvz-text-white cvz-rounded-br-none":"cvz-bg-blue-600 cvz-text-white cvz-rounded-br-none":o?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border cvz-border-gray-700 cvz-rounded-bl-none":"cvz-bg-white cvz-text-gray-800 cvz-border cvz-border-gray-100 cvz-rounded-bl-none"}`,children:z(Dc,{content:c.content,enableMarkdown:i,darkMode:o})})},c.createdAt.toString())),t&&n&&!isFinalizingRef.current&&z("div",{className:"cvz-flex cvz-justify-start",children:z("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-text-sm cvz-shadow-sm cvz-border ${o?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border-gray-700":"cvz-bg-white cvz-text-gray-800 cvz-border-gray-100"}`,children:n})}),t&&!n&&z("div",{className:"cvz-flex cvz-justify-start",children:z("div",{className:`cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-shadow-sm cvz-border ${o?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:z("div",{className:"cvz-flex cvz-space-x-1",children:[z("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${o?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"0ms"}}),z("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${o?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"150ms"}}),z("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${o?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"300ms"}})]})})}),z("div",{ref:r})]})},Oc=({value:e,onChange:t,onSubmit:n,isLoading:r,placeholder:i,darkMode:o})=>z("form",{onSubmit:n,className:`cvz-p-4 cvz-border-t ${o?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:[z("div",{className:"cvz-relative cvz-flex cvz-items-center",children:[z("input",{type:"text",value:e,onChange:a=>t(a.target.value),placeholder:i,className:`cvz-w-full cvz-border cvz-text-sm cvz-rounded-full cvz-pl-4 cvz-pr-12 cvz-py-3 cvz-focus:cvz-outline-none cvz-focus:cvz-ring-1 cvz-transition-all ${o?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100 cvz-placeholder-gray-400 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500":"cvz-bg-gray-50 cvz-border-gray-200 cvz-text-gray-900 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500"}`}),z("button",{type:"submit",disabled:!e.trim()||r,className:`cvz-absolute cvz-right-2 cvz-p-2 cvz-text-white cvz-rounded-full cvz-disabled:cvz-opacity-50 cvz-transition-colors cvz-shadow-sm ${o?"cvz-bg-blue-500 cvz-hover:cvz-bg-blue-600 cvz-disabled:cvz-hover:cvz-bg-blue-500":"cvz-bg-blue-600 cvz-hover:cvz-bg-blue-700 cvz-disabled:cvz-hover:cvz-bg-blue-600"}`,children:z(Nc,{})})]}),z("div",{className:"cvz-text-center cvz-mt-2",children:z("p",{className:`cvz-text-[10px] ${o?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:"Powered by ConverZent"})})]}),Fc=({config:e})=>{let[t,n]=_e(false),[r,i]=_e([]),[o,a]=_e(""),[l,u]=_e(false),[c,s]=_e(false),[p,m]=_e(""),[f,g]=_e(null),b=Be(null),w=Be(null),x=Be(null),I=Be(false);Je(()=>{(async()=>{try{let T=await e.onLoadMessages(),A=[],P=null;if(T&&typeof T=="object"&&"messages"in T&&"sessionId"in T?(A=T.messages||[],P=T.sessionId||null):Array.isArray(T)&&T.length>0&&(A=T),A.length===0&&e.initialGreeting&&(A=[{content:e.initialGreeting,role:"SYSTEM",createdAt:new Date().toISOString()}]),i(A),P)g(P),localStorage.setItem("cvz-widget-session-id",P);else {let X=localStorage.getItem("cvz-widget-session-id");X&&g(X);}}catch(T){console.error("Failed to load messages:",T);}})();},[e]);let C=async(S=false)=>{if(e.apiKey)return {token:e.apiKey,type:"apiKey"};if(!e.getToken)throw new Error("Either apiKey or getToken must be provided");if(!S){let A=Date.now(),P=x.current;if(P&&(P.expiresAt===null||P.expiresAt>A))return {token:P.token,type:"bearer"}}let T=await e.getToken();if(typeof T=="string")return x.current={token:T,expiresAt:null},{token:T,type:"bearer"};{let A=T.expiresAt||null;return x.current={token:T.token,expiresAt:A},{token:T.token,type:"bearer"}}},B=async(S,T,A,P=0)=>{try{let K=await C(P>0),pe=e.chatUrl||Ec,h=f||"",ue=!h,fe;ue?fe=ui({baseUrl:pe,message:S.content,persona:e.persona,authToken:K.token,authType:K.type,abortSignal:A.signal}):fe=ci({baseUrl:pe,sessionId:h,message:S.content,authToken:K.token,authType:K.type,abortSignal:A.signal});let d="",oe=!1;for await(let ne of fe){if(A.signal.aborted)break;switch(ne.type){case "session_created":case "session_continued":ne.session_id&&(h=ne.session_id,g(ne.session_id),localStorage.setItem("cvz-widget-session-id",ne.session_id),console.log("Session ID:",ne.session_id));break;case "token":ne.content&&(d+=ne.content,m(d));break;case "done":if(d&&h){I.current=!0;let De={content:d,role:"ASSISTANT",createdAt:new Date().toISOString(),sources:ne.sources},de=[...T,De];i(de),m(""),s(!1),u(!1),setTimeout(()=>{I.current=!1;},0),await e.onSaveMessages(h,de);}else m(""),s(!1),u(!1);w.current=null;return;case "error":let ke=ne.detail||"";if((ke.includes("401")||ke.includes("403")||ke.includes("Unauthorized")||ke.includes("Forbidden"))&&P<1&&e.getToken&&!e.apiKey){console.log("Unauthorized error detected, refreshing token and retrying..."),x.current=null,oe=!0;break}console.error("Stream error:",ke);let Ye={content:`Error: ${ke||"An error occurred"}`,role:"SYSTEM",createdAt:new Date().toISOString()},ee=[...T,Ye];i(ee),await e.onSaveMessages(h||"",ee),m(""),s(!1),u(!1),w.current=null;return}}if(oe&&P<1)return B(S,T,A,P+1);!A.signal.aborted&&!oe&&(console.error("Stream ended unexpectedly"),m(""),s(!1),u(!1),w.current=null);}catch(K){if(K instanceof Error&&(K.message.includes("401")||K.message.includes("403"))&&P<1&&e.getToken&&!e.apiKey)return console.log("Unauthorized error detected, refreshing token and retrying..."),x.current=null,B(S,T,A,P+1);throw K}},V=async S=>{if(S?.preventDefault(),!o.trim()||c)return;w.current&&w.current.abort();let T={content:o.trim(),role:"USER",createdAt:new Date().toISOString()},A=[...r,T];i(A),a(""),u(true),s(true),m("");try{let P=new AbortController;w.current=P,await B(T,A,P);}catch(P){if(console.error("Error sending message:",P),P instanceof Error&&P.name==="AbortError"){m(""),s(false),u(false),w.current=null;return}let X={content:`Error: ${P instanceof Error?P.message:"Failed to send message"}`,role:"SYSTEM",createdAt:new Date().toISOString()},K=[...A,X];i(K),await e.onSaveMessages(f||"",K),m(""),s(false),u(false),w.current=null;}},v=async()=>{if(window.confirm("Are you sure you want to clear your chat history?")){w.current&&(w.current.abort(),w.current=null),i([]),m("");g(null),s(false),u(false),localStorage.removeItem("cvz-widget-session-id"),await e.onSaveMessages("",[]);}},j=Ic(e.style),$=Tc(e.style),F=Ac(e.style),H=Pc(e.style,t),q=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="bottom-left")||typeof e.style.position=="object"&&e.style.position.bottom,O=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="top-right")||typeof e.style.position=="object"&&e.style.position.right;return z("div",{className:"cvz-fixed cvz-z-[9999] cvz-font-sans",style:j,children:[z("div",{className:`
          cvz-absolute cvz-rounded-2xl cvz-shadow-2xl cvz-flex cvz-flex-col cvz-overflow-hidden
          cvz-transition-all cvz-duration-300
          ${e.darkMode?"cvz-bg-gray-800":"cvz-bg-white"}
          ${q?"cvz-bottom-20":"cvz-top-20"}
          ${O?"cvz-right-0":"cvz-left-0"}
          ${q&&O?"cvz-origin-bottom-right":q&&!O?"cvz-origin-bottom-left":!q&&O?"cvz-origin-top-right":"cvz-origin-top-left"}
          ${t?"cvz-opacity-100 cvz-scale-100 cvz-translate-y-0":"cvz-opacity-0 cvz-scale-95 cvz-translate-y-4 cvz-pointer-events-none"}
        `,style:{...$,borderColor:F,borderWidth:"1px",borderStyle:"solid"},children:[z(Rc,{title:e.headerMsg||"Support Chat",subtitle:e.subheaderMsg||"We typically reply in a few minutes",onClose:()=>n(false),onClear:v,darkMode:e.darkMode}),z(Mc,{messages:r,isStreaming:c,streamingMessage:p,messagesEndRef:b,enableMarkdown:e.enableMarkdown,darkMode:e.darkMode}),z(Oc,{value:o,onChange:a,onSubmit:V,isLoading:l||c,placeholder:e.promptPlaceholder||"Type a message...",darkMode:e.darkMode})]}),z("button",{onClick:()=>n(!t),className:`
          cvz-flex cvz-items-center cvz-justify-center
          cvz-w-14 cvz-h-14 cvz-rounded-full cvz-shadow-lg cvz-transition-all cvz-duration-300
          ${t?"cvz-rotate-90":"cvz-hover:cvz-scale-105"}
        `,style:{backgroundColor:H.backgroundColor},onMouseEnter:S=>{!t&&e.style?.buttonColor?.hover&&(S.currentTarget.style.backgroundColor=e.style.buttonColor.hover);},onMouseLeave:S=>{t||(S.currentTarget.style.backgroundColor=H.backgroundColor);},children:z("div",{className:"cvz-text-white",children:t?z(Ia,{}):z(Ea,{})})})]})},Ta=Fc;var Sr=`*, ::before, ::after {
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

.cvz-gap-2 {
  gap: 0.5rem;
}

.cvz-gap-3 {
  gap: 0.75rem;
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

.cvz-overflow-hidden {
  overflow: hidden;
}

.cvz-overflow-x-auto {
  overflow-x: auto;
}

.cvz-overflow-y-auto {
  overflow-y: auto;
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

.cvz-px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.cvz-py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}

.cvz-py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
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

.cvz-italic {
  font-style: italic;
}

.cvz-leading-tight {
  line-height: 1.25;
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

.cvz-text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity, 1));
}

.cvz-text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity, 1));
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
`;var Uc="cvz-widget-host",Cr=class{hostElement=null;init(t){if(this.hostElement){console.warn("cvzWidget is already initialized.");return}console.log("init: Initializing cvzWidget..."),console.log("CSS Length:",Sr.length);let n=document.createElement("div");n.id=Uc,document.body.appendChild(n);let r=n.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=Sr,r.appendChild(i);let o=document.createElement("div");o.id="cvz-root",r.appendChild(o),vn(ze(Ta,{config:t}),o),this.hostElement=n;}hide(){if(!this.hostElement){console.warn("destroy: cvzWidget is not initialized.");return}this.hostElement&&(this.hostElement.remove(),this.hostElement=null);}},Aa=new Cr;typeof window<"u"&&(window.cvzWidget=Aa);var Wx=Aa;return Wx;})();