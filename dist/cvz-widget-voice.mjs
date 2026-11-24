var Lc=Object.create;var cr=Object.defineProperty;var Mc=Object.getOwnPropertyDescriptor;var Rc=Object.getOwnPropertyNames;var Nc=Object.getPrototypeOf,Dc=Object.prototype.hasOwnProperty;var Wt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),mo=(e,t)=>{for(var n in t)cr(e,n,{get:t[n],enumerable:true});},Oc=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Rc(t))!Dc.call(e,i)&&i!==n&&cr(e,i,{get:()=>t[i],enumerable:!(r=Mc(t,i))||r.enumerable});return e};var ho=(e,t,n)=>(n=e!=null?Lc(Nc(e)):{},Oc(cr(n,"default",{value:e,enumerable:true}),e));var wa=Wt((Xg,ba)=>{var ga=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,cu=/\n/g,uu=/^\s*/,pu=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,fu=/^:\s*/,mu=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,du=/^[;\s]*/,hu=/^\s+|\s+$/g,gu=`
`,va="/",ya="*",ct="",vu="comment",yu="declaration";function xu(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return [];t=t||{};var n=1,r=1;function i(d){var y=d.match(cu);y&&(n+=y.length);var _=d.lastIndexOf(gu);r=~_?d.length-_:r+d.length;}function a(){var d={line:n,column:r};return function(y){return y.position=new o(d),c(),y}}function o(d){this.start=d,this.end={line:n,column:r},this.source=t.source;}o.prototype.content=e;function l(d){var y=new Error(t.source+":"+n+":"+r+": "+d);if(y.reason=d,y.filename=t.source,y.line=n,y.column=r,y.source=e,!t.silent)throw y}function s(d){var y=d.exec(e);if(y){var _=y[0];return i(_),e=e.slice(_.length),y}}function c(){s(uu);}function p(d){var y;for(d=d||[];y=u();)y!==false&&d.push(y);return d}function u(){var d=a();if(!(va!=e.charAt(0)||ya!=e.charAt(1))){for(var y=2;ct!=e.charAt(y)&&(ya!=e.charAt(y)||va!=e.charAt(y+1));)++y;if(y+=2,ct===e.charAt(y-1))return l("End of comment missing");var _=e.slice(2,y-2);return r+=2,i(_),e=e.slice(y),r+=2,d({type:vu,comment:_})}}function m(){var d=a(),y=s(pu);if(y){if(u(),!s(fu))return l("property missing ':'");var _=s(mu),v=d({type:yu,property:xa(y[0].replace(ga,ct)),value:_?xa(_[0].replace(ga,ct)):ct});return s(du),v}}function f(){var d=[];p(d);for(var y;y=m();)y!==false&&(d.push(y),p(d));return d}return c(),f()}function xa(e){return e?e.replace(hu,ct):ct}ba.exports=xu;});var ka=Wt(Qt=>{var bu=Qt&&Qt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Qt,"__esModule",{value:true});Qt.default=ku;var wu=bu(wa());function ku(e,t){let n=null;if(!e||typeof e!="string")return n;let r=(0, wu.default)(e),i=typeof t=="function";return r.forEach(a=>{if(a.type!=="declaration")return;let{property:o,value:l}=a;i?t(o,l,a):l&&(n=n||{},n[o]=l);}),n}});var za=Wt(An=>{Object.defineProperty(An,"__esModule",{value:true});An.camelCase=void 0;var _u=/^--[a-zA-Z0-9_-]+$/,zu=/-([a-z])/g,Su=/^[^-]+$/,Cu=/^-(webkit|moz|ms|o|khtml)-/,Eu=/^-(ms)-/,Au=function(e){return !e||Su.test(e)||_u.test(e)},Iu=function(e,t){return t.toUpperCase()},_a=function(e,t){return "".concat(t,"-")},Tu=function(e,t){return t===void 0&&(t={}),Au(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Eu,_a):e=e.replace(Cu,_a),e.replace(zu,Iu))};An.camelCase=Tu;});var Ca=Wt((Dr,Sa)=>{var Pu=Dr&&Dr.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Lu=Pu(ka()),Mu=za();function Nr(e,t){var n={};return !e||typeof e!="string"||(0, Lu.default)(e,function(r,i){r&&i&&(n[(0, Mu.camelCase)(r,t)]=i);}),n}Nr.default=Nr;Sa.exports=Nr;});var us=Wt((F0,cs)=>{var Zn=Object.prototype.hasOwnProperty,ss=Object.prototype.toString,ns=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,is=function(t){return typeof Array.isArray=="function"?Array.isArray(t):ss.call(t)==="[object Array]"},os=function(t){if(!t||ss.call(t)!=="[object Object]")return  false;var n=Zn.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Zn.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return  false;var i;for(i in t);return typeof i>"u"||Zn.call(t,i)},as=function(t,n){ns&&n.name==="__proto__"?ns(t,n.name,{enumerable:true,configurable:true,value:n.newValue,writable:true}):t[n.name]=n.newValue;},ls=function(t,n){if(n==="__proto__")if(Zn.call(t,n)){if(rs)return rs(t,n).value}else return;return t[n]};cs.exports=function e(){var t,n,r,i,a,o,l=arguments[0],s=1,c=arguments.length,p=false;for(typeof l=="boolean"&&(p=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<c;++s)if(t=arguments[s],t!=null)for(n in t)r=ls(l,n),i=ls(t,n),l!==i&&(p&&i&&(os(i)||(a=is(i)))?(a?(a=false,o=r&&is(r)?r:[]):o=r&&os(r)?r:{},as(l,{name:n,newValue:e(p,o,i)})):typeof i<"u"&&as(l,{name:n,newValue:i}));return l};});var gn,U,bo,it,go,wo,ko,_o,mr,ur,pr,qt={},zo=[],Bc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Yt=Array.isArray;function je(e,t){for(var n in t)e[n]=t[n];return e}function dr(e){e&&e.parentNode&&e.parentNode.removeChild(e);}function Me(e,t,n){var r,i,a,o={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?gn.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return dn(e,o,r,i,null)}function dn(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++bo,__i:-1,__u:0};return i==null&&U.vnode!=null&&U.vnode(a),a}function Se(e){return e.children}function Ie(e,t){this.props=e,this.context=t;}function _t(e,t){if(t==null)return e.__?_t(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?_t(e):null}function So(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return So(e)}}function vo(e){(!e.__d&&(e.__d=true)&&it.push(e)&&!hn.__r++||go!=U.debounceRendering)&&((go=U.debounceRendering)||wo)(hn);}function hn(){for(var e,t,n,r,i,a,o,l=1;it.length;)it.length>l&&it.sort(ko),e=it.shift(),l=it.length,e.__d&&(n=void 0,r=void 0,i=(r=(t=e).__v).__e,a=[],o=[],t.__P&&((n=je({},r)).__v=r.__v+1,U.vnode&&U.vnode(n),hr(t.__P,n,r,t.__n,t.__P.namespaceURI,32&r.__u?[i]:null,a,i??_t(r),!!(32&r.__u),o),n.__v=r.__v,n.__.__k[n.__i]=n,Ao(a,n,o),r.__e=r.__=null,n.__e!=i&&So(n)));hn.__r=0;}function Co(e,t,n,r,i,a,o,l,s,c,p){var u,m,f,d,y,_,v,b=r&&r.__k||zo,S=t.length;for(s=Hc(n,t,b,s,S),u=0;u<S;u++)(f=n.__k[u])!=null&&(m=f.__i==-1?qt:b[f.__i]||qt,f.__i=u,_=hr(e,f,m,i,a,o,l,s,c,p),d=f.__e,f.ref&&m.ref!=f.ref&&(m.ref&&gr(m.ref,null,f),p.push(f.ref,f.__c||d,f)),y==null&&d!=null&&(y=d),(v=!!(4&f.__u))||m.__k===f.__k?s=Eo(f,s,e,v):typeof f.type=="function"&&_!==void 0?s=_:d&&(s=d.nextSibling),f.__u&=-7);return n.__e=y,s}function Hc(e,t,n,r,i){var a,o,l,s,c,p=n.length,u=p,m=0;for(e.__k=new Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[a]=dn(null,o,null,null,null):Yt(o)?o=e.__k[a]=dn(Se,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=dn(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,s=a+m,o.__=e,o.__b=e.__b+1,l=null,(c=o.__i=jc(o,n,s,u))!=-1&&(u--,(l=n[c])&&(l.__u|=2)),l==null||l.__v==null?(c==-1&&(i>p?m--:i<p&&m++),typeof o.type!="function"&&(o.__u|=4)):c!=s&&(c==s-1?m--:c==s+1?m++:(c>s?m--:m++,o.__u|=4))):e.__k[a]=null;if(u)for(a=0;a<p;a++)(l=n[a])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=_t(l)),To(l,l));return r}function Eo(e,t,n,r){var i,a;if(typeof e.type=="function"){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=Eo(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=_t(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Kt(e,t){return t=t||[],e==null||typeof e=="boolean"||(Yt(e)?e.some(function(n){Kt(n,t);}):t.push(e)),t}function jc(e,t,n,r){var i,a,o,l=e.key,s=e.type,c=t[n],p=c!=null&&(2&c.__u)==0;if(c===null&&l==null||p&&l==c.key&&s==c.type)return n;if(r>(p?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((c=t[o=i>=0?i--:a++])!=null&&(2&c.__u)==0&&l==c.key&&s==c.type)return o}return  -1}function yo(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Bc.test(t)?n:n+"px";}function mn(e,t,n,r,i){var a,o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else {if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||yo(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||yo(e.style,t,n[t]);}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(_o,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n.u=r.u:(n.u=mr,e.addEventListener(t,a?pr:ur,a)):e.removeEventListener(t,a?pr:ur,a);else {if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===false&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n));}}function xo(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=mr++;else if(t.t<n.u)return;return n(U.event?U.event(t):t)}}}function hr(e,t,n,r,i,a,o,l,s,c){var p,u,m,f,d,y,_,v,b,S,L,N,k,q,K,V,w,G=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),a=[l=t.__e=n.__e]),(p=U.__b)&&p(t);e:if(typeof G=="function")try{if(v=t.props,b="prototype"in G&&G.prototype.render,S=(p=G.contextType)&&r[p.__c],L=p?S?S.props.value:p.__:r,n.__c?_=(u=t.__c=n.__c).__=u.__E:(b?t.__c=u=new G(v,L):(t.__c=u=new Ie(v,L),u.constructor=G,u.render=$c),S&&S.sub(u),u.state||(u.state={}),u.__n=r,m=u.__d=!0,u.__h=[],u._sb=[]),b&&u.__s==null&&(u.__s=u.state),b&&G.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=je({},u.__s)),je(u.__s,G.getDerivedStateFromProps(v,u.__s))),f=u.props,d=u.state,u.__v=t,m)b&&G.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),b&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else {if(b&&G.getDerivedStateFromProps==null&&v!==f&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(v,L),t.__v==n.__v||!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(v,u.__s,L)===!1){for(t.__v!=n.__v&&(u.props=v,u.state=u.__s,u.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(B){B&&(B.__=t);}),N=0;N<u._sb.length;N++)u.__h.push(u._sb[N]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(v,u.__s,L),b&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(f,d,y);});}if(u.context=L,u.props=v,u.__P=e,u.__e=!1,k=U.__r,q=0,b){for(u.state=u.__s,u.__d=!1,k&&k(t),p=u.render(u.props,u.state,u.context),K=0;K<u._sb.length;K++)u.__h.push(u._sb[K]);u._sb=[];}else do u.__d=!1,k&&k(t),p=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++q<25);u.state=u.__s,u.getChildContext!=null&&(r=je(je({},r),u.getChildContext())),b&&!m&&u.getSnapshotBeforeUpdate!=null&&(y=u.getSnapshotBeforeUpdate(f,d)),V=p,p!=null&&p.type===Se&&p.key==null&&(V=Io(p.props.children)),l=Co(e,Yt(V)?V:[V],t,n,r,i,a,o,l,s,c),u.base=t.__e,t.__u&=-161,u.__h.length&&o.push(u),_&&(u.__E=u.__=null);}catch(B){if(t.__v=null,s||a!=null)if(B.then){for(t.__u|=s?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;a[a.indexOf(l)]=null,t.__e=l;}else {for(w=a.length;w--;)dr(a[w]);fr(t);}else t.__e=n.__e,t.__k=n.__k,B.then||fr(t);U.__e(B,t,n);}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Vc(n.__e,t,n,r,i,a,o,s,c);return (p=U.diffed)&&p(t),128&t.__u?void 0:l}function fr(e){e&&e.__c&&(e.__c.__e=true),e&&e.__k&&e.__k.forEach(fr);}function Ao(e,t,n){for(var r=0;r<n.length;r++)gr(n[r],n[++r],n[++r]);U.__c&&U.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i);});}catch(a){U.__e(a,i.__v);}});}function Io(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Yt(e)?e.map(Io):je({},e)}function Vc(e,t,n,r,i,a,o,l,s){var c,p,u,m,f,d,y,_=n.props||qt,v=t.props,b=t.type;if(b=="svg"?i="http://www.w3.org/2000/svg":b=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(c=0;c<a.length;c++)if((f=a[c])&&"setAttribute"in f==!!b&&(b?f.localName==b:f.nodeType==3)){e=f,a[c]=null;break}}if(e==null){if(b==null)return document.createTextNode(v);e=document.createElementNS(i,b,v.is&&v),l&&(U.__m&&U.__m(t,a),l=false),a=null;}if(b==null)_===v||l&&e.data==v||(e.data=v);else {if(a=a&&gn.call(e.childNodes),!l&&a!=null)for(_={},c=0;c<e.attributes.length;c++)_[(f=e.attributes[c]).name]=f.value;for(c in _)if(f=_[c],c!="children"){if(c=="dangerouslySetInnerHTML")u=f;else if(!(c in v)){if(c=="value"&&"defaultValue"in v||c=="checked"&&"defaultChecked"in v)continue;mn(e,c,null,f,i);}}for(c in v)f=v[c],c=="children"?m=f:c=="dangerouslySetInnerHTML"?p=f:c=="value"?d=f:c=="checked"?y=f:l&&typeof f!="function"||_[c]===f||mn(e,c,f,_[c],i);if(p)l||u&&(p.__html==u.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(u&&(e.innerHTML=""),Co(t.type=="template"?e.content:e,Yt(m)?m:[m],t,n,r,b=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,o,a?a[0]:n.__k&&_t(n,0),l,s),a!=null)for(c=a.length;c--;)dr(a[c]);l||(c="value",b=="progress"&&d==null?e.removeAttribute("value"):d!=null&&(d!==e[c]||b=="progress"&&!d||b=="option"&&d!=_[c])&&mn(e,c,d,_[c],i),c="checked",y!=null&&y!=e[c]&&mn(e,c,y,_[c],i));}return e}function gr(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t));}else e.current=t;}catch(i){U.__e(i,n);}}function To(e,t,n){var r,i;if(U.unmount&&U.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||gr(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount();}catch(a){U.__e(a,t);}r.base=r.__P=null;}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&To(r[i],t,n||typeof e.type!="function");n||dr(e.__e),e.__c=e.__=e.__e=void 0;}function $c(e,t,n){return this.constructor(e,n)}function Xt(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),U.__&&U.__(e,t),i=(r="undefined"=="function")?null:t.__k,a=[],o=[],hr(t,e=(t).__k=Me(Se,null,[e]),i||qt,qt,t.namespaceURI,i?null:t.firstChild?gn.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,o),Ao(a,e,o);}gn=zo.slice,U={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(l){e=l;}throw e}},bo=0,Ie.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=je({},this.state),typeof e=="function"&&(e=e(je({},n),this.props)),e&&je(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),vo(this));},Ie.prototype.forceUpdate=function(e){this.__v&&(this.__e=true,e&&this.__h.push(e),vo(this));},Ie.prototype.render=Se,it=[],wo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ko=function(e,t){return e.__v.__b-t.__v.__b},hn.__r=0,_o=/(PointerCapture)$|Capture$/i,mr=0,ur=xo(false),pr=xo(true);var Po=`*, ::before, ::after {
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

.cvz-ml-1 {
  margin-left: 0.25rem;
}

.cvz-ml-2 {
  margin-left: 0.5rem;
}

.cvz-mt-0\\.5 {
  margin-top: 0.125rem;
}

.cvz-mt-1 {
  margin-top: 0.25rem;
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

.cvz-h-11 {
  height: 2.75rem;
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

.cvz-h-4 {
  height: 1rem;
}

.cvz-h-5 {
  height: 1.25rem;
}

.cvz-h-6 {
  height: 1.5rem;
}

.cvz-h-7 {
  height: 1.75rem;
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

.cvz-w-11 {
  width: 2.75rem;
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

.cvz-w-4 {
  width: 1rem;
}

.cvz-w-5 {
  width: 1.25rem;
}

.cvz-w-6 {
  width: 1.5rem;
}

.cvz-w-7 {
  width: 1.75rem;
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

@keyframes cvz-pulse {
  50% {
    opacity: .5;
  }
}

.cvz-animate-pulse {
  animation: cvz-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

.cvz-bg-red-500\\/20 {
  background-color: rgb(239 68 68 / 0.2);
}

.cvz-bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}

.cvz-bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}

.cvz-bg-white\\/10 {
  background-color: rgb(255 255 255 / 0.1);
}

.cvz-bg-white\\/20 {
  background-color: rgb(255 255 255 / 0.2);
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

.cvz-px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
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

.cvz-text-\\[11px\\] {
  font-size: 11px;
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

.cvz-text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity, 1));
}

.cvz-text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity, 1));
}

.cvz-text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity, 1));
}

.cvz-text-red-100 {
  --tw-text-opacity: 1;
  color: rgb(254 226 226 / var(--tw-text-opacity, 1));
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
`;if(U){U.debounceRendering;U.debounceRendering=t=>{requestAnimationFrame(t);};}function Lo(e,t,n="cvz-widget-host"){let r=document.createElement("div");r.id=n,document.body.appendChild(r);let i=r.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=Po,i.appendChild(a);let o=document.createElement("div");return o.id="cvz-root",i.appendChild(o),Xt(Me(t,{config:e}),o),{hostElement:r,root:o}}var zt,re,vr,Mo,yn=0,Ho=[],ae=U,Ro=ae.__b,No=ae.__r,Do=ae.diffed,Oo=ae.__c,Fo=ae.unmount,Uo=ae.__;function xn(e,t){ae.__h&&ae.__h(re,e,yn||t),yn=0;var n=re.__H||(re.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function ge(e){return yn=1,jo($o,e)}function jo(e,t,n){var r=xn(zt++,2);if(r.t=e,!r.__c&&(r.__=[$o(void 0,t),function(l){var s=r.__N?r.__N[0]:r.__[0],c=r.t(s,l);s!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}));}],r.__c=re,!re.__f)){var i=function(l,s,c){if(!r.__c.__H)return  true;var p=r.__c.__H.__.filter(function(m){return !!m.__c});if(p.every(function(m){return !m.__N}))return !a||a.call(this,l,s,c);var u=r.__c.props!==l;return p.forEach(function(m){if(m.__N){var f=m.__[0];m.__=m.__N,m.__N=void 0,f!==m.__[0]&&(u=true);}}),a&&a.call(this,l,s,c)||u};re.__f=true;var a=re.shouldComponentUpdate,o=re.componentWillUpdate;re.componentWillUpdate=function(l,s,c){if(this.__e){var p=a;a=void 0,i(l,s,c),a=p;}o&&o.call(this,l,s,c);},re.shouldComponentUpdate=i;}return r.__N||r.__}function ze(e,t){var n=xn(zt++,3);!ae.__s&&xr(n.__H,t)&&(n.__=e,n.u=t,re.__H.__h.push(n));}function Vo(e,t){var n=xn(zt++,4);!ae.__s&&xr(n.__H,t)&&(n.__=e,n.u=t,re.__h.push(n));}function ot(e){return yn=5,bn(function(){return {current:e}},[])}function bn(e,t){var n=xn(zt++,7);return xr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function qc(){for(var e;e=Ho.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(vn),e.__H.__h.forEach(yr),e.__H.__h=[];}catch(t){e.__H.__h=[],ae.__e(t,e.__v);}}ae.__b=function(e){re=null,Ro&&Ro(e);},ae.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Uo&&Uo(e,t);},ae.__r=function(e){No&&No(e),zt=0;var t=(re=e.__c).__H;t&&(vr===re?(t.__h=[],re.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(t.__h.forEach(vn),t.__h.forEach(yr),t.__h=[],zt=0)),vr=re;},ae.diffed=function(e){Do&&Do(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ho.push(t)!==1&&Mo===ae.requestAnimationFrame||((Mo=ae.requestAnimationFrame)||Yc)(qc)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0;})),vr=re=null;},ae.__c=function(e,t){t.some(function(n){try{n.__h.forEach(vn),n.__h=n.__h.filter(function(r){return !r.__||yr(r)});}catch(r){t.some(function(i){i.__h&&(i.__h=[]);}),t=[],ae.__e(r,n.__v);}}),Oo&&Oo(e,t);},ae.unmount=function(e){Fo&&Fo(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{vn(r);}catch(i){t=i;}}),n.__H=void 0,t&&ae.__e(t,n.__v));};var Bo=typeof requestAnimationFrame=="function";function Yc(e){var t,n=function(){clearTimeout(r),Bo&&cancelAnimationFrame(t),setTimeout(e);},r=setTimeout(n,35);Bo&&(t=requestAnimationFrame(n));}function vn(e){var t=re,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),re=t;}function yr(e){var t=re;e.__c=e.__(),re=t;}function xr(e,t){return !e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function $o(e,t){return typeof t=="function"?t(e):t}var wr="cvz_end_user_auth_v1",Wo="cvz_end_user_last_email",kr="cvz_end_user_pending_checkout_v1";function _r(e){try{return localStorage.getItem(e)}catch{return null}}function br(e,t){try{localStorage.setItem(e,t);}catch{}}function qo(e){try{localStorage.removeItem(e);}catch{}}function Yo(){let e=_r(wr);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.token=="string"&&typeof t.expiresAt=="number"&&typeof t.email=="string")return t}catch{}return null}function at(e){return e?e.expiresAt-300>Date.now()/1e3:false}function Ko(e){br(wr,JSON.stringify(e)),br(Wo,e.email);}function Xo(){qo(wr);}function Go(){return _r(Wo)}function Jo(e){br(kr,JSON.stringify(e));}function Qo(){let e=_r(kr);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.pendingId=="string"&&typeof t.planId=="number")return t}catch{}return null}function Zo(){qo(kr);}function ea(e){return e.type==="apiKey"?{"X-API-Key":e.token}:{Authorization:`Bearer ${e.token}`}}async function wn(e){try{let t=await e.json();if(t&&typeof t.message=="string")return t.message;if(t&&typeof t.error=="string")return t.error}catch{}return `${e.status} ${e.statusText}`}async function ta(e,t,n){let r=await fetch(`${e}/api/chat/end_user/start_login`,{method:"POST",headers:{"Content-Type":"application/json",...ea(t)},body:JSON.stringify({email:n})});if(!r.ok)throw new Error(await wn(r));return (await r.json()).pending_id}function kn(e,t){return new Promise(n=>{let r=new EventSource(`${e}/api/chat/end_user/wait/${encodeURIComponent(t)}`),i=false,a=o=>{i||(i=true,r.close(),n(o));};r.onmessage=o=>{try{a(JSON.parse(o.data));}catch{a({status:"error"});}},r.onerror=()=>{a({status:"timed_out"});};})}async function zr(e,t){let n=await fetch(`${e}/api/chat/end_user/plans`,{headers:ea(t)});if(!n.ok)throw new Error(await wn(n));return (await n.json()).plans}async function Sr(e,t){let n=await fetch(`${e}/api/chat/end_user/me`,{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw new Error(await wn(n));return await n.json()}async function na(e,t,n,r,i){let a=await fetch(`${e}/api/chat/end_user/checkout`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({plan_id:n,success_url:r,cancel_url:i})});if(!a.ok)throw new Error(await wn(a));let o=await a.json();return {checkoutUrl:o.checkout_url,pendingId:o.pending_id}}var Kc=0;function x(e,t,n,r,i,a){t||(t={});var o,l,s=t;if("ref"in s)for(l in s={},t)l=="ref"?o=t[l]:s[l]=t[l];var c={type:e,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Kc,__i:-1,__u:0,__source:i,__self:a};if(typeof e=="function"&&(o=e.defaultProps))for(l in o)s[l]===void 0&&(s[l]=o[l]);return U.vnode&&U.vnode(c),c}var Xc=60*1e3;function Gc(e,t){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:t.toUpperCase()}).format(e/100)}catch{return `${(e/100).toFixed(2)} ${t.toUpperCase()}`}}function Jc(e){return new Date(e*1e3).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}var ra=({open:e,onClose:t,darkMode:n,baseUrl:r,getBaseAuth:i,endUserAuth:a,onAuthenticated:o,initialEmail:l})=>{let[s,c]=ge("email"),[p,u]=ge(""),[m,f]=ge(null),[d,y]=ge(0),[_,v]=ge(null),[b,S]=ge([]),[L,N]=ge(null),[k,q]=ge(Date.now());if(ze(()=>{e&&(f(null),a?(u(a.email),c("status"),Sr(r,a.token).then(v).catch(P=>f(P instanceof Error?P.message:String(P)))):(u(l??""),c("email")));},[e]),ze(()=>{if(d<=Date.now())return;let P=setInterval(()=>q(Date.now()),1e3);return ()=>clearInterval(P)},[d]),!e)return null;let K=Math.max(0,Math.ceil((d-k)/1e3)),V=async()=>{let P=p.trim();if(!P||!P.includes("@")){f("Enter a valid email address.");return}f(null),c("waiting");try{let ee=await i(),de=await ta(r,ee,P);y(Date.now()+Xc);let h=await kn(r,de);if(h.status==="verified"){let ce={token:h.chat_token,expiresAt:h.expires_at,email:P};o(ce);try{let he=await Sr(r,ce.token);if(v(he),he.total_vtokens_remaining>0||he.subscription_status==="active")c("status");else {let me=await zr(r,{token:ce.token,type:"bearer"});S(me),c("plans");}}catch{c("status");}}else h.status==="timed_out"?(f("That link expired before it was clicked. You can send a new one below."),c("email")):(f("Something went wrong confirming your login. Please try again."),c("email"));}catch(ee){f(ee instanceof Error?ee.message:String(ee)),c("email");}},w=async()=>{if(a){f(null);try{let P=await zr(r,{token:a.token,type:"bearer"});S(P),c("plans");}catch(P){f(P instanceof Error?P.message:String(P));}}},G=async P=>{if(a){f(null),N(P.id);try{let ee=window.location.href,{checkoutUrl:de,pendingId:h}=await na(r,a.token,P.id,ee,ee);Jo({pendingId:h,planId:P.id}),window.location.href=de;}catch(ee){f(ee instanceof Error?ee.message:String(ee)),N(null);}}},B=n?"cvz-text-gray-100":"cvz-text-gray-800",T=n?"cvz-text-gray-400":"cvz-text-gray-500",$=n?"cvz-bg-gray-800":"cvz-bg-white",H=n?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100":"cvz-bg-white cvz-border-gray-300 cvz-text-gray-800",Z="cvz-bg-blue-600 hover:cvz-bg-blue-700 cvz-text-white disabled:cvz-opacity-50 disabled:cvz-cursor-not-allowed";return x("div",{className:"cvz-absolute cvz-inset-0 cvz-z-20 cvz-flex cvz-flex-col",children:x("div",{className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-5 cvz-flex cvz-flex-col cvz-gap-4 ${$}`,children:[x("div",{className:"cvz-flex cvz-justify-between cvz-items-start",children:[x("h3",{className:`cvz-font-bold cvz-text-lg ${B}`,children:"Account"}),x("button",{onClick:t,className:`cvz-p-1 cvz-rounded-md ${n?"cvz-text-gray-400 hover:cvz-text-white":"cvz-text-gray-400 hover:cvz-text-gray-700"}`,title:"Close",children:"\u2715"})]}),m&&x("p",{className:"cvz-text-sm cvz-text-red-500",children:m}),s==="email"&&x("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[x("p",{className:`cvz-text-sm ${T}`,children:"Enter your email and we'll send you a login link - use it to access a plan you've already bought, or to start a new one."}),x("input",{type:"email",value:p,onInput:P=>u(P.target.value),placeholder:"you@example.com",className:`cvz-border cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm ${H}`,onKeyDown:P=>{P.key==="Enter"&&V();}}),x("button",{onClick:V,disabled:K>0,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${Z}`,children:K>0?`Wait ${K}s to resend`:"Send login link"})]}),s==="waiting"&&x("div",{className:"cvz-flex cvz-flex-col cvz-gap-2 cvz-items-center cvz-py-6 cvz-text-center",children:[x("p",{className:`cvz-text-sm ${B}`,children:"Check your email"}),x("p",{className:`cvz-text-xs ${T}`,children:["We sent a login link to ",p,". Click it to continue - this can stay open while you do."]})]}),s==="status"&&x("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[x("p",{className:`cvz-text-sm ${B}`,children:["Signed in as ",a?.email]}),_?x("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-text-sm cvz-flex cvz-flex-col cvz-gap-1 ${n?"cvz-border-gray-600":"cvz-border-gray-200"} ${B}`,children:[x("span",{children:[Math.floor(_.total_vtokens_remaining).toLocaleString()," tokens left"]}),_.plan_name&&x("span",{className:T,children:["Plan: ",_.plan_name]}),_.current_period_end&&x("span",{className:T,children:["Renews ",Jc(_.current_period_end)]})]}):x("p",{className:`cvz-text-sm ${T}`,children:"Loading your balance..."}),x("button",{onClick:w,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${Z}`,children:"Buy more"}),x("button",{onClick:()=>{c("email"),f(null);},className:`cvz-text-xs cvz-underline cvz-self-start ${T}`,children:"Use a different email"})]}),s==="plans"&&x("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[b.length===0&&x("p",{className:`cvz-text-sm ${T}`,children:"No plans are available right now."}),b.map(P=>x("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-flex cvz-justify-between cvz-items-center ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:[x("div",{children:[x("p",{className:`cvz-text-sm cvz-font-medium ${B}`,children:P.name}),x("p",{className:`cvz-text-xs ${T}`,children:[Gc(P.price_cents,P.currency),P.kind==="subscription"?" / period":""," \xB7 ",P.included_vtokens.toLocaleString()," tokens"]})]}),x("button",{onClick:()=>G(P),disabled:L===P.id,className:`cvz-rounded-lg cvz-px-3 cvz-py-1.5 cvz-text-sm cvz-font-medium ${Z}`,children:L===P.id?"Redirecting...":"Buy"})]},P.id)),a&&x("button",{onClick:()=>c("status"),className:`cvz-text-xs cvz-underline cvz-self-start ${T}`,children:"Back"})]})]})})};var Qc="calc(100vw - 2rem)",Zc="calc(100dvh - 8rem)",ia=e=>{if(!e?.position)return {bottom:"1rem",right:"1rem"};if(typeof e.position=="string")switch(e.position){case "bottom-right":return {bottom:"1rem",right:"1rem"};case "bottom-left":return {bottom:"1rem",left:"1rem"};case "top-right":return {top:"1rem",right:"1rem"};case "top-left":return {top:"1rem",left:"1rem"};default:return {bottom:"1rem",right:"1rem"}}else {let t={};return e.position.bottom&&(t.bottom=e.position.bottom),e.position.top&&(t.top=e.position.top),e.position.left&&(t.left=e.position.left),e.position.right&&(t.right=e.position.right),t}},oa=e=>{let t={maxWidth:Qc,maxHeight:Zc};if(!e?.dialogSize)return {width:"350px",height:"500px",...t};if(typeof e.dialogSize=="string")switch(e.dialogSize){case "small":return {width:"300px",height:"400px",...t};case "medium":return {width:"350px",height:"500px",...t};case "large":return {width:"400px",height:"600px",...t};default:return {width:"350px",height:"500px",...t}}else return {width:`${Math.max(250,e.dialogSize.width)}px`,height:`${Math.max(300,e.dialogSize.height)}px`,...t}},aa=e=>e?.frameColor||"#E5E7EB",la=(e,t)=>{let n=e?.buttonColor;return t?{backgroundColor:n?.open||"#1F2937"}:{backgroundColor:n?.normal||"#2563EB","--hover-color":n?.hover||"#1D4ED8"}};function sa(e,t){let n={};return (e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===false?"":" ")).trim()}var eu=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,tu=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,nu={};function _n(e,t){return ((nu).jsx?tu:eu).test(e)}var ru=/[ \t\n\f\r]/g;function Cr(e){return typeof e=="object"?e.type==="text"?ca(e.value):false:ca(e)}function ca(e){return e.replace(ru,"")===""}var Ve=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r);}};Ve.prototype.normal={};Ve.prototype.property={};Ve.prototype.space=void 0;function Er(e,t){let n={},r={};for(let i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Ve(n,r,t)}function Gt(e){return e.toLowerCase()}var fe=class{constructor(t,n){this.attribute=n,this.property=t;}};fe.prototype.attribute="";fe.prototype.booleanish=false;fe.prototype.boolean=false;fe.prototype.commaOrSpaceSeparated=false;fe.prototype.commaSeparated=false;fe.prototype.defined=false;fe.prototype.mustUseProperty=false;fe.prototype.number=false;fe.prototype.overloadedBoolean=false;fe.prototype.property="";fe.prototype.spaceSeparated=false;fe.prototype.space=void 0;var Jt={};mo(Jt,{boolean:()=>Y,booleanish:()=>ie,commaOrSpaceSeparated:()=>be,commaSeparated:()=>Ke,number:()=>E,overloadedBoolean:()=>zn,spaceSeparated:()=>Q});var iu=0,Y=lt(),ie=lt(),zn=lt(),E=lt(),Q=lt(),Ke=lt(),be=lt();function lt(){return 2**++iu}var Ar=Object.keys(Jt),st=class extends fe{constructor(t,n,r,i){let a=-1;if(super(t,n),ua(this,"space",i),typeof r=="number")for(;++a<Ar.length;){let o=Ar[a];ua(this,Ar[a],(r&Jt[o])===Jt[o]);}}};st.prototype.defined=true;function ua(e,t,n){n&&(e[t]=n);}function Ce(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new st(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=true),t[r]=a,n[Gt(r)]=r,n[Gt(a.attribute)]=r;}return new Ve(t,n,e.space)}var Ir=Ce({properties:{ariaActiveDescendant:null,ariaAtomic:ie,ariaAutoComplete:null,ariaBusy:ie,ariaChecked:ie,ariaColCount:E,ariaColIndex:E,ariaColSpan:E,ariaControls:Q,ariaCurrent:null,ariaDescribedBy:Q,ariaDetails:null,ariaDisabled:ie,ariaDropEffect:Q,ariaErrorMessage:null,ariaExpanded:ie,ariaFlowTo:Q,ariaGrabbed:ie,ariaHasPopup:null,ariaHidden:ie,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Q,ariaLevel:E,ariaLive:null,ariaModal:ie,ariaMultiLine:ie,ariaMultiSelectable:ie,ariaOrientation:null,ariaOwns:Q,ariaPlaceholder:null,ariaPosInSet:E,ariaPressed:ie,ariaReadOnly:ie,ariaRelevant:null,ariaRequired:ie,ariaRoleDescription:Q,ariaRowCount:E,ariaRowIndex:E,ariaRowSpan:E,ariaSelected:ie,ariaSetSize:E,ariaSort:null,ariaValueMax:E,ariaValueMin:E,ariaValueNow:E,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Sn(e,t){return t in e?e[t]:t}function Cn(e,t){return Sn(e,t.toLowerCase())}var pa=Ce({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ke,acceptCharset:Q,accessKey:Q,action:null,allow:null,allowFullScreen:Y,allowPaymentRequest:Y,allowUserMedia:Y,alt:null,as:null,async:Y,autoCapitalize:null,autoComplete:Q,autoFocus:Y,autoPlay:Y,blocking:Q,capture:null,charSet:null,checked:Y,cite:null,className:Q,cols:E,colSpan:null,content:null,contentEditable:ie,controls:Y,controlsList:Q,coords:E|Ke,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Y,defer:Y,dir:null,dirName:null,disabled:Y,download:zn,draggable:ie,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Y,formTarget:null,headers:Q,height:E,hidden:zn,high:E,href:null,hrefLang:null,htmlFor:Q,httpEquiv:Q,id:null,imageSizes:null,imageSrcSet:null,inert:Y,inputMode:null,integrity:null,is:null,isMap:Y,itemId:null,itemProp:Q,itemRef:Q,itemScope:Y,itemType:Q,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Y,low:E,manifest:null,max:null,maxLength:E,media:null,method:null,min:null,minLength:E,multiple:Y,muted:Y,name:null,nonce:null,noModule:Y,noValidate:Y,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Y,optimum:E,pattern:null,ping:Q,placeholder:null,playsInline:Y,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Y,referrerPolicy:null,rel:Q,required:Y,reversed:Y,rows:E,rowSpan:E,sandbox:Q,scope:null,scoped:Y,seamless:Y,selected:Y,shadowRootClonable:Y,shadowRootDelegatesFocus:Y,shadowRootMode:null,shape:null,size:E,sizes:null,slot:null,span:E,spellCheck:ie,src:null,srcDoc:null,srcLang:null,srcSet:null,start:E,step:null,style:null,tabIndex:E,target:null,title:null,translate:null,type:null,typeMustMatch:Y,useMap:null,value:ie,width:E,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Q,axis:null,background:null,bgColor:null,border:E,borderColor:null,bottomMargin:E,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Y,declare:Y,event:null,face:null,frame:null,frameBorder:null,hSpace:E,leftMargin:E,link:null,longDesc:null,lowSrc:null,marginHeight:E,marginWidth:E,noResize:Y,noHref:Y,noShade:Y,noWrap:Y,object:null,profile:null,prompt:null,rev:null,rightMargin:E,rules:null,scheme:null,scrolling:ie,standby:null,summary:null,text:null,topMargin:E,valueType:null,version:null,vAlign:null,vLink:null,vSpace:E,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Y,disableRemotePlayback:Y,prefix:null,property:null,results:E,security:null,unselectable:null},space:"html",transform:Cn});var fa=Ce({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:be,accentHeight:E,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:E,amplitude:E,arabicForm:null,ascent:E,attributeName:null,attributeType:null,azimuth:E,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:E,by:null,calcMode:null,capHeight:E,className:Q,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:E,diffuseConstant:E,direction:null,display:null,dur:null,divisor:E,dominantBaseline:null,download:Y,dx:null,dy:null,edgeMode:null,editable:null,elevation:E,enableBackground:null,end:null,event:null,exponent:E,externalResourcesRequired:null,fill:null,fillOpacity:E,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ke,g2:Ke,glyphName:Ke,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:E,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:E,horizOriginX:E,horizOriginY:E,id:null,ideographic:E,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:E,k:E,k1:E,k2:E,k3:E,k4:E,kernelMatrix:be,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:E,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:E,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:E,overlineThickness:E,paintOrder:null,panose1:null,path:null,pathLength:E,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Q,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:E,pointsAtY:E,pointsAtZ:E,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:be,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:be,rev:be,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:be,requiredFeatures:be,requiredFonts:be,requiredFormats:be,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:E,specularExponent:E,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:E,strikethroughThickness:E,string:null,stroke:null,strokeDashArray:be,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:E,strokeOpacity:E,strokeWidth:null,style:null,surfaceScale:E,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:be,tabIndex:E,tableValues:null,target:null,targetX:E,targetY:E,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:be,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:E,underlineThickness:E,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:E,values:null,vAlphabetic:E,vMathematical:E,vectorEffect:null,vHanging:E,vIdeographic:E,version:null,vertAdvY:E,vertOriginX:E,vertOriginY:E,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:E,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Sn});var Tr=Ce({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return "xlink:"+t.slice(5).toLowerCase()}});var Pr=Ce({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Cn});var Lr=Ce({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return "xml:"+t.slice(3).toLowerCase()}});var Mr={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var ou=/[A-Z]/g,ma=/-[a-z]/g,au=/^data[-\w.:]+$/i;function Rr(e,t){let n=Gt(t),r=t,i=fe;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&au.test(t)){if(t.charAt(4)==="-"){let a=t.slice(5).replace(ma,su);r="data"+a.charAt(0).toUpperCase()+a.slice(1);}else {let a=t.slice(4);if(!ma.test(a)){let o=a.replace(ou,lu);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o;}}i=st;}return new i(r,t)}function lu(e){return "-"+e.toLowerCase()}function su(e){return e.charAt(1).toUpperCase()}var da=Er([Ir,pa,Tr,Pr,Lr],"html"),En=Er([Ir,fa,Tr,Pr,Lr],"svg");function ha(e){return e.join(" ").trim()}var Ta=ho(Ca());var In=Ea("end"),St=Ea("start");function Ea(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return {line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Or(e){let t=St(e),n=In(e);if(t&&n)return {start:t,end:n}}function Xe(e){return !e||typeof e!="object"?"":"position"in e||"type"in e?Aa(e.position):"start"in e||"end"in e?Aa(e):"line"in e||"column"in e?Fr(e):""}function Fr(e){return Ia(e&&e.line)+":"+Ia(e&&e.column)}function Aa(e){return Fr(e&&e.start)+"-"+Fr(e&&e.end)}function Ia(e){return e&&typeof e=="number"?e:1}var le=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",a={},o=false;if(n&&("line"in n&&"column"in n?a={place:n}:"start"in n&&"end"in n?a={place:n}:"type"in n?a={ancestors:[n],place:n.position}:a={...n}),typeof t=="string"?i=t:!a.cause&&t&&(o=true,i=t.message,a.cause=t),!a.ruleId&&!a.source&&typeof r=="string"){let s=r.indexOf(":");s===-1?a.ruleId=r:(a.source=r.slice(0,s),a.ruleId=r.slice(s+1));}if(!a.place&&a.ancestors&&a.ancestors){let s=a.ancestors[a.ancestors.length-1];s&&(a.place=s.position);}let l=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Xe(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0;}};le.prototype.file="";le.prototype.name="";le.prototype.reason="";le.prototype.message="";le.prototype.stack="";le.prototype.column=void 0;le.prototype.line=void 0;le.prototype.ancestors=void 0;le.prototype.cause=void 0;le.prototype.fatal=void 0;le.prototype.place=void 0;le.prototype.ruleId=void 0;le.prototype.source=void 0;var Ur={}.hasOwnProperty,Ru=new Map,Nu=/[A-Z]/g,Du=new Set(["table","tbody","thead","tfoot","tr"]),Ou=new Set(["td","th"]),Pa="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Br(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Wu(n,t.jsxDEV);}else {if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=$u(n,t.jsx,t.jsxs);}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||false,passKeys:t.passKeys!==false,passNode:t.passNode||false,schema:t.space==="svg"?En:da,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==false},a=La(i,e,void 0);return a&&typeof a!="string"?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function La(e,t,n){if(t.type==="element")return Fu(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Uu(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Hu(e,t,n);if(t.type==="mdxjsEsm")return Bu(e,t);if(t.type==="root")return ju(e,t,n);if(t.type==="text")return Vu(e,t)}function Fu(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=En,e.schema=i),e.ancestors.push(t);let a=Ra(e,t.tagName,false),o=qu(e,t),l=jr(e,t);return Du.has(t.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!Cr(s):true})),Ma(e,o,a,t),Hr(o,l),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Uu(e,t){if(t.data&&t.data.estree&&e.evaluater){let r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Zt(e,t.position);}function Bu(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Zt(e,t.position);}function Hu(e,t,n){let r=e.schema,i=r;t.name==="svg"&&r.space==="html"&&(i=En,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:Ra(e,t.name,true),o=Yu(e,t),l=jr(e,t);return Ma(e,o,a,t),Hr(o,l),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function ju(e,t,n){let r={};return Hr(r,jr(e,t)),e.create(t,e.Fragment,r,n)}function Vu(e,t){return t.value}function Ma(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r);}function Hr(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n);}}function $u(e,t,n){return r;function r(i,a,o,l){let c=Array.isArray(o.children)?n:t;return l?c(a,o,l):c(a,o)}}function Wu(e,t){return n;function n(r,i,a,o){let l=Array.isArray(a.children),s=St(r);return t(i,a,o,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function qu(e,t){let n={},r,i;for(i in t.properties)if(i!=="children"&&Ur.call(t.properties,i)){let a=Ku(e,i,t.properties[i]);if(a){let[o,l]=a;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&Ou.has(t.tagName)?r=l:n[o]=l;}}if(r){let a=n.style||(n.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r;}return n}function Yu(e,t){let n={};for(let r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){let a=r.data.estree.body[0];a.type;let o=a.expression;o.type;let l=o.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument));}else Zt(e,t.position);else {let i=r.name,a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){let l=r.value.data.estree.body[0];l.type,a=e.evaluater.evaluateExpression(l.expression);}else Zt(e,t.position);else a=r.value===null?true:r.value;n[i]=a;}return n}function jr(e,t){let n=[],r=-1,i=e.passKeys?new Map:Ru;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let s=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(s){let c=i.get(s)||0;o=s+"-"+c,i.set(s,c+1);}}let l=La(e,a,o);l!==void 0&&n.push(l);}return n}function Ku(e,t,n){let r=Rr(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?sa(n):ha(n)),r.property==="style"){let i=typeof n=="object"?n:Xu(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Gu(i)),["style",i]}return [e.elementAttributeNameCase==="react"&&r.space?Mr[r.property]||r.property:r.attribute,n]}}function Xu(e,t){try{return (0,Ta.default)(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return {};let r=n,i=new le("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Pa+"#cannot-parse-style-attribute",i}}function Ra(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){let i=t.split("."),a=-1,o;for(;++a<i.length;){let l=_n(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(a&&l.type==="Literal"),optional:false}:l;}r=o;}else r=_n(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){let i=r.value;return Ur.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Zt(e);}function Zt(e,t){let n=new le("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Pa+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Gu(e){let t={},n;for(n in e)Ur.call(e,n)&&(t[Ju(n)]=e[n]);return t}function Ju(e){let t=e.replace(Nu,Qu);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Qu(e){return "-"+e.toLowerCase()}var en={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};function tp(e,t){for(var n in t)e[n]=t[n];return e}function Na(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return  true;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return  true;return  false}function $a(e,t){var n=t(),r=ge({t:{__:n,u:t}}),i=r[0].t,a=r[1];return Vo(function(){i.__=n,i.u=t,Vr(i)&&a({t:i});},[e,n,t]),ze(function(){return Vr(i)&&a({t:i}),e(function(){Vr(i)&&a({t:i});})},[e]),n}function Vr(e){var t,n,r=e.u,i=e.__;try{var a=r();return !((t=i)===(n=a)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return  true}}function Da(e,t){this.props=e,this.context=t;}(Da.prototype=new Ie).isPureReactComponent=true,Da.prototype.shouldComponentUpdate=function(e,t){return Na(this.props,e)||Na(this.state,t)};var Oa=U.__b;U.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Oa&&Oa(e);};var np=U.__e;U.__e=function(e,t,n,r){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}np(e,t,n,r);};var Fa=U.unmount;function Wa(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c();}),e.__c.__H=null),(e=tp({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=true,e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Wa(r,t,n)})),e}function qa(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return qa(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=true,e.__c.__P=n)),e}function $r(){this.__u=0,this.o=null,this.__b=null;}function Ya(e){if(!e.__)return null;var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Tn(){this.i=null,this.l=null;}U.unmount=function(e){var t=e.__c;t&&(t.__z=true),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Fa&&Fa(e);},($r.prototype=new Ie).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var i=Ya(r.__v),a=false,o=function(){a||r.__z||(a=true,n.__R=null,i?i(s):s());};n.__R=o;var l=n.__P;n.__P=null;var s=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=qa(c,c.__c.__P,c.__c.__O);}var p;for(r.setState({__a:r.__b=null});p=r.o.pop();)p.__P=l,p.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o);},$r.prototype.componentWillUnmount=function(){this.o=[];},$r.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Wa(this.__b,n,r.__O=r.__P);}this.__b=null;}var i=t.__a&&Me(Se,null,e.fallback);return i&&(i.__u&=-33),[Me(Se,null,t.__a?null:e.children),i]};var Ua=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2];}};(Tn.prototype=new Ie).__a=function(e){var t=this,n=Ya(t.__v),r=t.l.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),Ua(t,e,r)):i();};n?n(a):a();}},Tn.prototype.render=function(e){this.i=null,this.l=new Map;var t=Kt(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},Tn.prototype.componentDidUpdate=Tn.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Ua(e,n,t);});};var rp=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ip=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,op=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ap=/[A-Z0-9]/g,lp=typeof document<"u",sp=function(e){return (typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};Ie.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Ie.prototype,e,{configurable:true,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:true,writable:true,value:t});}});});var Ba=U.event;function cp(){}function up(){return this.cancelBubble}function pp(){return this.defaultPrevented}U.event=function(e){return Ba&&(e=Ba(e)),e.persist=cp,e.isPropagationStopped=up,e.isDefaultPrevented=pp,e.nativeEvent=e};var fp={enumerable:false,configurable:true,get:function(){return this.class}},Ha=U.vnode;U.vnode=function(e){typeof e.type=="string"&&(function(t){var n=t.props,r=t.type,i={},a=r.indexOf("-")===-1;for(var o in n){var l=n[o];if(!(o==="value"&&"defaultValue"in n&&l==null||lp&&o==="children"&&r==="noscript"||o==="class"||o==="className")){var s=o.toLowerCase();o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&l===true?l="":s==="translate"&&l==="no"?l=false:s[0]==="o"&&s[1]==="n"?s==="ondoubleclick"?o="ondblclick":s!=="onchange"||r!=="input"&&r!=="textarea"||sp(n.type)?s==="onfocus"?o="onfocusin":s==="onblur"?o="onfocusout":op.test(o)&&(o=s):s=o="oninput":a&&ip.test(o)?o=o.replace(ap,"-$&").toLowerCase():l===null&&(l=void 0),s==="oninput"&&i[o=s]&&(o="oninputCapture"),i[o]=l;}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Kt(n.children).forEach(function(c){c.props.selected=i.value.indexOf(c.props.value)!=-1;})),r=="select"&&i.defaultValue!=null&&(i.value=Kt(n.children).forEach(function(c){c.props.selected=i.multiple?i.defaultValue.indexOf(c.props.value)!=-1:i.defaultValue==c.props.value;})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",fp)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),t.props=i;})(e),e.$$typeof=rp,Ha&&Ha(e);};var ja=U.__r;U.__r=function(e){ja&&ja(e),e.__c;};var Va=U.diffed;U.diffed=function(e){Va&&Va(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value);};var mp={};function ut(e,t){let n=mp,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:true,i=typeof n.includeHtml=="boolean"?n.includeHtml:true;return Ga(e,r,i)}function Ga(e,t,n){if(dp(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Xa(e.children,t,n)}return Array.isArray(e)?Xa(e,t,n):""}function Xa(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=Ga(e[i],t,n);return r.join("")}function dp(e){return !!(e&&typeof e=="object")}var Ja=document.createElement("i");function Ct(e){let t="&"+e+";";Ja.innerHTML=t;let n=Ja.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?false:n}function se(e,t,n,r){let i=e.length,a=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4;}function xe(e,t){return e.length>0?(se(e,e.length,0,t),e):t}var Qa={}.hasOwnProperty;function Pn(e){let t={},n=-1;for(;++n<e.length;)hp(t,e[n]);return t}function hp(e,t){let n;for(n in t){let i=(Qa.call(e,n)?e[n]:void 0)||(e[n]={}),a=t[n],o;if(a)for(o in a){Qa.call(i,o)||(i[o]=[]);let l=a[o];gp(i[o],Array.isArray(l)?l:l?[l]:[]);}}}function gp(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);se(e,0,0,r);}function Ln(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function ve(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var pe=Ge(/[A-Za-z]/),oe=Ge(/[\dA-Za-z]/),Za=Ge(/[#-'*+\--9=?A-Z^-~]/);function pt(e){return e!==null&&(e<32||e===127)}var tn=Ge(/\d/),el=Ge(/[\dA-Fa-f]/),tl=Ge(/[!-/:-@[-`{-~]/);function I(e){return e!==null&&e<-2}function X(e){return e!==null&&(e<0||e===32)}function D(e){return e===-2||e===-1||e===32}var ft=Ge(/\p{P}|\p{S}/u),Re=Ge(/\s/);function Ge(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Ee(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o="";if(a===37&&oe(e.charCodeAt(n+1))&&oe(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let l=e.charCodeAt(n+1);a<56320&&l>56319&&l<57344?(o=String.fromCharCode(a,l),i=1):o="\uFFFD";}else o=String.fromCharCode(a);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0);}return t.join("")+e.slice(r)}function R(e,t,n,r){let i=r?r-1:Number.POSITIVE_INFINITY,a=0;return o;function o(s){return D(s)?(e.enter(n),l(s)):t(s)}function l(s){return D(s)&&a++<i?(e.consume(s),l):(e.exit(n),t(s))}}var nl={tokenize:vp};function vp(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),R(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),a(l)}function a(l){let s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return I(l)?(e.consume(l),e.exit("chunkText"),a):(e.consume(l),o)}}var il={tokenize:yp},rl={tokenize:xp};function yp(e){let t=this,n=[],r=0,i,a,o;return l;function l(S){if(r<n.length){let L=n[r];return t.containerState=L[1],e.attempt(L[0].continuation,s,c)(S)}return c(S)}function s(S){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&b();let L=t.events.length,N=L,k;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){k=t.events[N][1].end;break}v(r);let q=L;for(;q<t.events.length;)t.events[q][1].end={...k},q++;return se(t.events,N+1,0,t.events.slice(L)),t.events.length=q,c(S)}return l(S)}function c(S){if(r===n.length){if(!i)return m(S);if(i.currentConstruct&&i.currentConstruct.concrete)return d(S);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack);}return t.containerState={},e.check(rl,p,u)(S)}function p(S){return i&&b(),v(r),m(S)}function u(S){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,d(S)}function m(S){return t.containerState={},e.attempt(rl,f,d)(S)}function f(S){return r++,n.push([t.currentConstruct,t.containerState]),m(S)}function d(S){if(S===null){i&&b(),v(0),e.consume(S);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),y(S)}function y(S){if(S===null){_(e.exit("chunkFlow"),true),v(0),e.consume(S);return}return I(S)?(e.consume(S),_(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(S),y)}function _(S,L){let N=t.sliceStream(S);if(L&&N.push(null),S.previous=a,a&&(a.next=S),a=S,i.defineSkip(S.start),i.write(N),t.parser.lazy[S.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<o&&(!i.events[k][1].end||i.events[k][1].end.offset>o))return;let q=t.events.length,K=q,V,w;for(;K--;)if(t.events[K][0]==="exit"&&t.events[K][1].type==="chunkFlow"){if(V){w=t.events[K][1].end;break}V=true;}for(v(r),k=q;k<t.events.length;)t.events[k][1].end={...w},k++;se(t.events,K+1,0,t.events.slice(q)),t.events.length=k;}}function v(S){let L=n.length;for(;L-- >S;){let N=n[L];t.containerState=N[1],N[0].exit.call(t,e);}n.length=S;}function b(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0;}}function xp(e,t,n){return R(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function $e(e){if(e===null||X(e)||Re(e))return 1;if(ft(e))return 2}function Je(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a));}return t}var nn={name:"attention",resolveAll:bp,tokenize:wp};function bp(e,t){let n=-1,r,i,a,o,l,s,c,p;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let u={...e[r][1].end},m={...e[n][1].start};ol(u,-s),ol(m,s),o={type:s>1?"strongSequence":"emphasisSequence",start:u,end:{...e[r][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:m},a={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[r][1].end={...o.start},e[n][1].start={...l.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=xe(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=xe(c,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",a,t]]),c=xe(c,Je(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=xe(c,[["exit",a,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(p=2,c=xe(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):p=0,se(e,r-1,n-r+3,c),n=r+c.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function wp(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=$e(r),a;return o;function o(s){return a=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===a)return e.consume(s),l;let c=e.exit("attentionSequence"),p=$e(s),u=!p||p===2&&i||n.includes(s),m=!i||i===2&&p||n.includes(r);return c._open=!!(a===42?u:u&&(i||!m)),c._close=!!(a===42?m:m&&(p||!u)),t(s)}}function ol(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t;}var Wr={name:"autolink",tokenize:kp};function kp(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(f){return pe(f)?(e.consume(f),o):f===64?n(f):c(f)}function o(f){return f===43||f===45||f===46||oe(f)?(r=1,l(f)):c(f)}function l(f){return f===58?(e.consume(f),r=0,s):(f===43||f===45||f===46||oe(f))&&r++<32?(e.consume(f),l):(r=0,c(f))}function s(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||pt(f)?n(f):(e.consume(f),s)}function c(f){return f===64?(e.consume(f),p):Za(f)?(e.consume(f),c):n(f)}function p(f){return oe(f)?u(f):n(f)}function u(f){return f===46?(e.consume(f),r=0,p):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):m(f)}function m(f){if((f===45||oe(f))&&r++<63){let d=f===45?m:u;return e.consume(f),d}return n(f)}}var Ne={partial:true,tokenize:_p};function _p(e,t,n){return r;function r(a){return D(a)?R(e,i,"linePrefix")(a):i(a)}function i(a){return a===null||I(a)?t(a):n(a)}}var Mn={continuation:{tokenize:Sp},exit:Cp,name:"blockQuote",tokenize:zp};function zp(e,t,n){let r=this;return i;function i(o){if(o===62){let l=r.containerState;return l.open||(e.enter("blockQuote",{_container:true}),l.open=true),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return n(o)}function a(o){return D(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function Sp(e,t,n){let r=this;return i;function i(o){return D(o)?R(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(Mn,t,n)(o)}}function Cp(e){e.exit("blockQuote");}var Rn={name:"characterEscape",tokenize:Ep};function Ep(e,t,n){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),i}function i(a){return tl(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(a)}}var Nn={name:"characterReference",tokenize:Ap};function Ap(e,t,n){let r=this,i=0,a,o;return l;function l(u){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),s}function s(u){return u===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(u),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),a=31,o=oe,p(u))}function c(u){return u===88||u===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(u),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=el,p):(e.enter("characterReferenceValue"),a=7,o=tn,p(u))}function p(u){if(u===59&&i){let m=e.exit("characterReferenceValue");return o===oe&&!Ct(r.sliceSerialize(m))?n(u):(e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(u)&&i++<a?(e.consume(u),p):n(u)}}var al={partial:true,tokenize:Tp},Dn={concrete:true,name:"codeFenced",tokenize:Ip};function Ip(e,t,n){let r=this,i={partial:true,tokenize:N},a=0,o=0,l;return s;function s(k){return c(k)}function c(k){let q=r.events[r.events.length-1];return a=q&&q[1].type==="linePrefix"?q[2].sliceSerialize(q[1],true).length:0,l=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(k)}function p(k){return k===l?(o++,e.consume(k),p):o<3?n(k):(e.exit("codeFencedFenceSequence"),D(k)?R(e,u,"whitespace")(k):u(k))}function u(k){return k===null||I(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(al,y,L)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(k))}function m(k){return k===null||I(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),u(k)):D(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),R(e,f,"whitespace")(k)):k===96&&k===l?n(k):(e.consume(k),m)}function f(k){return k===null||I(k)?u(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),d(k))}function d(k){return k===null||I(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),u(k)):k===96&&k===l?n(k):(e.consume(k),d)}function y(k){return e.attempt(i,L,_)(k)}function _(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),v}function v(k){return a>0&&D(k)?R(e,b,"linePrefix",a+1)(k):b(k)}function b(k){return k===null||I(k)?e.check(al,y,L)(k):(e.enter("codeFlowValue"),S(k))}function S(k){return k===null||I(k)?(e.exit("codeFlowValue"),b(k)):(e.consume(k),S)}function L(k){return e.exit("codeFenced"),t(k)}function N(k,q,K){let V=0;return w;function w(H){return k.enter("lineEnding"),k.consume(H),k.exit("lineEnding"),G}function G(H){return k.enter("codeFencedFence"),D(H)?R(k,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):B(H)}function B(H){return H===l?(k.enter("codeFencedFenceSequence"),T(H)):K(H)}function T(H){return H===l?(V++,k.consume(H),T):V>=o?(k.exit("codeFencedFenceSequence"),D(H)?R(k,$,"whitespace")(H):$(H)):K(H)}function $(H){return H===null||I(H)?(k.exit("codeFencedFence"),q(H)):K(H)}}}function Tp(e,t,n){let r=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}var rn={name:"codeIndented",tokenize:Lp},Pp={partial:true,tokenize:Mp};function Lp(e,t,n){let r=this;return i;function i(c){return e.enter("codeIndented"),R(e,a,"linePrefix",5)(c)}function a(c){let p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],true).length>=4?o(c):n(c)}function o(c){return c===null?s(c):I(c)?e.attempt(Pp,o,s)(c):(e.enter("codeFlowValue"),l(c))}function l(c){return c===null||I(c)?(e.exit("codeFlowValue"),o(c)):(e.consume(c),l)}function s(c){return e.exit("codeIndented"),t(c)}}function Mp(e,t,n){let r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):I(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):R(e,a,"linePrefix",5)(o)}function a(o){let l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(o):I(o)?i(o):n(o)}}var qr={name:"codeText",previous:Np,resolve:Rp,tokenize:Dp};function Rp(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Np(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Dp(e,t,n){let i=0,a,o;return l;function l(m){return e.enter("codeText"),e.enter("codeTextSequence"),s(m)}function s(m){return m===96?(e.consume(m),i++,s):(e.exit("codeTextSequence"),c(m))}function c(m){return m===null?n(m):m===32?(e.enter("space"),e.consume(m),e.exit("space"),c):m===96?(o=e.enter("codeTextSequence"),a=0,u(m)):I(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),c):(e.enter("codeTextData"),p(m))}function p(m){return m===null||m===32||m===96||I(m)?(e.exit("codeTextData"),c(m)):(e.consume(m),p)}function u(m){return m===96?(e.consume(m),a++,u):a===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(m)):(o.type="codeTextData",p(m))}}var On=class{constructor(t){this.left=t?[...t]:[],this.right=[];}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let i=n||0;this.setCursor(Math.trunc(t));let a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&on(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t);}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),on(this.left,t);}unshift(t){this.setCursor(0),this.right.push(t);}unshiftMany(t){this.setCursor(0),on(this.right,t.reverse());}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,Number.POSITIVE_INFINITY);on(this.right,n.reverse());}else {let n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);on(this.left,n.reverse());}}};function on(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4;}function Fn(e){let t={},n=-1,r,i,a,o,l,s,c,p=new On(e);for(;++n<p.length;){for(;n in t;)n=t[n];if(r=p.get(n),n&&r[1].type==="chunkFlow"&&p.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,a=0,a<s.length&&s[a][1].type==="lineEndingBlank"&&(a+=2),a<s.length&&s[a][1].type==="content"))for(;++a<s.length&&s[a][1].type!=="content";)s[a][1].type==="chunkText"&&(s[a][1]._isInFirstContentOfListItem=true,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Op(p,n)),n=t[n],c=true);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=p.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(p.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...p.get(i)[1].start},l=p.slice(i,n),l.unshift(r),p.splice(i,n-i+1,l));}}return se(e,0,Number.POSITIVE_INFINITY,p.slice(0)),!c}function Op(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=true));let l=o.events,s=[],c={},p,u,m=-1,f=n,d=0,y=0,_=[y];for(;f;){for(;e.get(++i)[1]!==f;);a.push(i),f._tokenizer||(p=r.sliceStream(f),f.next||p.push(null),u&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=true),o.write(p),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),u=f,f=f.next;}for(f=n;++m<l.length;)l[m][0]==="exit"&&l[m-1][0]==="enter"&&l[m][1].type===l[m-1][1].type&&l[m][1].start.line!==l[m][1].end.line&&(y=m+1,_.push(y),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):_.pop(),m=_.length;m--;){let v=l.slice(_[m],_[m+1]),b=a.pop();s.push([b,b+v.length-1]),e.splice(b,2,v);}for(s.reverse(),m=-1;++m<s.length;)c[d+s[m][0]]=d+s[m][1],d+=s[m][1]-s[m][0]-1;return c}var Yr={resolve:Up,tokenize:Bp},Fp={partial:true,tokenize:Hp};function Up(e){return Fn(e),e}function Bp(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?a(l):I(l)?e.check(Fp,o,a)(l):(e.consume(l),i)}function a(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function o(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Hp(e,t,n){let r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),R(e,a,"linePrefix")}function a(o){if(o===null||I(o))return n(o);let l=r.events[r.events.length-1];return !r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function Un(e,t,n,r,i,a,o,l,s){let c=s||Number.POSITIVE_INFINITY,p=0;return u;function u(v){return v===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(v),e.exit(a),m):v===null||v===32||v===41||pt(v)?n(v):(e.enter(r),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),y(v))}function m(v){return v===62?(e.enter(a),e.consume(v),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),f(v))}function f(v){return v===62?(e.exit("chunkString"),e.exit(l),m(v)):v===null||v===60||I(v)?n(v):(e.consume(v),v===92?d:f)}function d(v){return v===60||v===62||v===92?(e.consume(v),f):f(v)}function y(v){return !p&&(v===null||v===41||X(v))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(r),t(v)):p<c&&v===40?(e.consume(v),p++,y):v===41?(e.consume(v),p--,y):v===null||v===32||v===40||pt(v)?n(v):(e.consume(v),v===92?_:y)}function _(v){return v===40||v===41||v===92?(e.consume(v),y):y(v)}}function Bn(e,t,n,r,i,a){let o=this,l=0,s;return c;function c(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(a),p}function p(f){return l>999||f===null||f===91||f===93&&!s||f===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?n(f):f===93?(e.exit(a),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):I(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),u(f))}function u(f){return f===null||f===91||f===93||I(f)||l++>999?(e.exit("chunkString"),p(f)):(e.consume(f),s||(s=!D(f)),f===92?m:u)}function m(f){return f===91||f===92||f===93?(e.consume(f),l++,u):u(f)}}function Hn(e,t,n,r,i,a){let o;return l;function l(m){return m===34||m===39||m===40?(e.enter(r),e.enter(i),e.consume(m),e.exit(i),o=m===40?41:m,s):n(m)}function s(m){return m===o?(e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):(e.enter(a),c(m))}function c(m){return m===o?(e.exit(a),s(o)):m===null?n(m):I(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),R(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===o||m===null||I(m)?(e.exit("chunkString"),c(m)):(e.consume(m),m===92?u:p)}function u(m){return m===o||m===92?(e.consume(m),p):p(m)}}function mt(e,t){let n;return r;function r(i){return I(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=true,r):D(i)?R(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}var Kr={name:"definition",tokenize:Vp},jp={partial:true,tokenize:$p};function Vp(e,t,n){let r=this,i;return a;function a(f){return e.enter("definition"),o(f)}function o(f){return Bn.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function l(f){return i=ve(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),s):n(f)}function s(f){return X(f)?mt(e,c)(f):c(f)}function c(f){return Un(e,p,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function p(f){return e.attempt(jp,u,u)(f)}function u(f){return D(f)?R(e,m,"whitespace")(f):m(f)}function m(f){return f===null||I(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function $p(e,t,n){return r;function r(l){return X(l)?mt(e,i)(l):n(l)}function i(l){return Hn(e,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function a(l){return D(l)?R(e,o,"whitespace")(l):o(l)}function o(l){return l===null||I(l)?t(l):n(l)}}var Xr={name:"hardBreakEscape",tokenize:Wp};function Wp(e,t,n){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),i}function i(a){return I(a)?(e.exit("hardBreakEscape"),t(a)):n(a)}}var Gr={name:"headingAtx",resolve:qp,tokenize:Yp};function qp(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},a={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},se(e,r,n-r+1,[["enter",i,t],["enter",a,t],["exit",a,t],["exit",i,t]])),e}function Yp(e,t,n){let r=0;return i;function i(p){return e.enter("atxHeading"),a(p)}function a(p){return e.enter("atxHeadingSequence"),o(p)}function o(p){return p===35&&r++<6?(e.consume(p),o):p===null||X(p)?(e.exit("atxHeadingSequence"),l(p)):n(p)}function l(p){return p===35?(e.enter("atxHeadingSequence"),s(p)):p===null||I(p)?(e.exit("atxHeading"),t(p)):D(p)?R(e,l,"whitespace")(p):(e.enter("atxHeadingText"),c(p))}function s(p){return p===35?(e.consume(p),s):(e.exit("atxHeadingSequence"),l(p))}function c(p){return p===null||p===35||X(p)?(e.exit("atxHeadingText"),l(p)):(e.consume(p),c)}}var ll=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Jr=["pre","script","style","textarea"];var Qr={concrete:true,name:"htmlFlow",resolveTo:Gp,tokenize:Jp},Kp={partial:true,tokenize:Zp},Xp={partial:true,tokenize:Qp};function Gp(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Jp(e,t,n){let r=this,i,a,o,l,s;return c;function c(g){return p(g)}function p(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),u}function u(g){return g===33?(e.consume(g),m):g===47?(e.consume(g),a=true,y):g===63?(e.consume(g),i=3,r.interrupt?t:h):pe(g)?(e.consume(g),o=String.fromCharCode(g),_):n(g)}function m(g){return g===45?(e.consume(g),i=2,f):g===91?(e.consume(g),i=5,l=0,d):pe(g)?(e.consume(g),i=4,r.interrupt?t:h):n(g)}function f(g){return g===45?(e.consume(g),r.interrupt?t:h):n(g)}function d(g){let me="CDATA[";return g===me.charCodeAt(l++)?(e.consume(g),l===me.length?r.interrupt?t:B:d):n(g)}function y(g){return pe(g)?(e.consume(g),o=String.fromCharCode(g),_):n(g)}function _(g){if(g===null||g===47||g===62||X(g)){let me=g===47,Oe=o.toLowerCase();return !me&&!a&&Jr.includes(Oe)?(i=1,r.interrupt?t(g):B(g)):ll.includes(o.toLowerCase())?(i=6,me?(e.consume(g),v):r.interrupt?t(g):B(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):a?b(g):S(g))}return g===45||oe(g)?(e.consume(g),o+=String.fromCharCode(g),_):n(g)}function v(g){return g===62?(e.consume(g),r.interrupt?t:B):n(g)}function b(g){return D(g)?(e.consume(g),b):w(g)}function S(g){return g===47?(e.consume(g),w):g===58||g===95||pe(g)?(e.consume(g),L):D(g)?(e.consume(g),S):w(g)}function L(g){return g===45||g===46||g===58||g===95||oe(g)?(e.consume(g),L):N(g)}function N(g){return g===61?(e.consume(g),k):D(g)?(e.consume(g),N):S(g)}function k(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),s=g,q):D(g)?(e.consume(g),k):K(g)}function q(g){return g===s?(e.consume(g),s=null,V):g===null||I(g)?n(g):(e.consume(g),q)}function K(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||X(g)?N(g):(e.consume(g),K)}function V(g){return g===47||g===62||D(g)?S(g):n(g)}function w(g){return g===62?(e.consume(g),G):n(g)}function G(g){return g===null||I(g)?B(g):D(g)?(e.consume(g),G):n(g)}function B(g){return g===45&&i===2?(e.consume(g),Z):g===60&&i===1?(e.consume(g),P):g===62&&i===4?(e.consume(g),ce):g===63&&i===3?(e.consume(g),h):g===93&&i===5?(e.consume(g),de):I(g)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Kp,he,T)(g)):g===null||I(g)?(e.exit("htmlFlowData"),T(g)):(e.consume(g),B)}function T(g){return e.check(Xp,$,he)(g)}function $(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),H}function H(g){return g===null||I(g)?T(g):(e.enter("htmlFlowData"),B(g))}function Z(g){return g===45?(e.consume(g),h):B(g)}function P(g){return g===47?(e.consume(g),o="",ee):B(g)}function ee(g){if(g===62){let me=o.toLowerCase();return Jr.includes(me)?(e.consume(g),ce):B(g)}return pe(g)&&o.length<8?(e.consume(g),o+=String.fromCharCode(g),ee):B(g)}function de(g){return g===93?(e.consume(g),h):B(g)}function h(g){return g===62?(e.consume(g),ce):g===45&&i===2?(e.consume(g),h):B(g)}function ce(g){return g===null||I(g)?(e.exit("htmlFlowData"),he(g)):(e.consume(g),ce)}function he(g){return e.exit("htmlFlow"),t(g)}}function Qp(e,t,n){let r=this;return i;function i(o){return I(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):n(o)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function Zp(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ne,t,n)}}var Zr={name:"htmlText",tokenize:ef};function ef(e,t,n){let r=this,i,a,o;return l;function l(h){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(h),s}function s(h){return h===33?(e.consume(h),c):h===47?(e.consume(h),N):h===63?(e.consume(h),S):pe(h)?(e.consume(h),K):n(h)}function c(h){return h===45?(e.consume(h),p):h===91?(e.consume(h),a=0,d):pe(h)?(e.consume(h),b):n(h)}function p(h){return h===45?(e.consume(h),f):n(h)}function u(h){return h===null?n(h):h===45?(e.consume(h),m):I(h)?(o=u,P(h)):(e.consume(h),u)}function m(h){return h===45?(e.consume(h),f):u(h)}function f(h){return h===62?Z(h):h===45?m(h):u(h)}function d(h){let ce="CDATA[";return h===ce.charCodeAt(a++)?(e.consume(h),a===ce.length?y:d):n(h)}function y(h){return h===null?n(h):h===93?(e.consume(h),_):I(h)?(o=y,P(h)):(e.consume(h),y)}function _(h){return h===93?(e.consume(h),v):y(h)}function v(h){return h===62?Z(h):h===93?(e.consume(h),v):y(h)}function b(h){return h===null||h===62?Z(h):I(h)?(o=b,P(h)):(e.consume(h),b)}function S(h){return h===null?n(h):h===63?(e.consume(h),L):I(h)?(o=S,P(h)):(e.consume(h),S)}function L(h){return h===62?Z(h):S(h)}function N(h){return pe(h)?(e.consume(h),k):n(h)}function k(h){return h===45||oe(h)?(e.consume(h),k):q(h)}function q(h){return I(h)?(o=q,P(h)):D(h)?(e.consume(h),q):Z(h)}function K(h){return h===45||oe(h)?(e.consume(h),K):h===47||h===62||X(h)?V(h):n(h)}function V(h){return h===47?(e.consume(h),Z):h===58||h===95||pe(h)?(e.consume(h),w):I(h)?(o=V,P(h)):D(h)?(e.consume(h),V):Z(h)}function w(h){return h===45||h===46||h===58||h===95||oe(h)?(e.consume(h),w):G(h)}function G(h){return h===61?(e.consume(h),B):I(h)?(o=G,P(h)):D(h)?(e.consume(h),G):V(h)}function B(h){return h===null||h===60||h===61||h===62||h===96?n(h):h===34||h===39?(e.consume(h),i=h,T):I(h)?(o=B,P(h)):D(h)?(e.consume(h),B):(e.consume(h),$)}function T(h){return h===i?(e.consume(h),i=void 0,H):h===null?n(h):I(h)?(o=T,P(h)):(e.consume(h),T)}function $(h){return h===null||h===34||h===39||h===60||h===61||h===96?n(h):h===47||h===62||X(h)?V(h):(e.consume(h),$)}function H(h){return h===47||h===62||X(h)?V(h):n(h)}function Z(h){return h===62?(e.consume(h),e.exit("htmlTextData"),e.exit("htmlText"),t):n(h)}function P(h){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),ee}function ee(h){return D(h)?R(e,de,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):de(h)}function de(h){return e.enter("htmlTextData"),o(h)}}var dt={name:"labelEnd",resolveAll:of,resolveTo:af,tokenize:lf},tf={tokenize:sf},nf={tokenize:cf},rf={tokenize:uf};function of(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let i=r.type==="labelImage"?4:2;r.type="data",t+=i;}}return e.length!==n.length&&se(e,0,e.length,n),e}function af(e,t){let n=e.length,r=0,i,a,o,l;for(;n--;)if(i=e[n][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=true);}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);let s={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[a][1].start},end:{...e[o][1].end}},p={type:"labelText",start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",s,t],["enter",c,t]],l=xe(l,e.slice(a+1,a+r+3)),l=xe(l,[["enter",p,t]]),l=xe(l,Je(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),l=xe(l,[["exit",p,t],e[o-2],e[o-1],["exit",c,t]]),l=xe(l,e.slice(o+1)),l=xe(l,[["exit",s,t]]),se(e,a,e.length,l),e}function lf(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return l;function l(m){return a?a._inactive?u(m):(o=r.parser.defined.includes(ve(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(m),e.exit("labelMarker"),e.exit("labelEnd"),s):n(m)}function s(m){return m===40?e.attempt(tf,p,o?p:u)(m):m===91?e.attempt(nf,p,o?c:u)(m):o?p(m):u(m)}function c(m){return e.attempt(rf,p,u)(m)}function p(m){return t(m)}function u(m){return a._balanced=true,n(m)}}function sf(e,t,n){return r;function r(u){return e.enter("resource"),e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),i}function i(u){return X(u)?mt(e,a)(u):a(u)}function a(u){return u===41?p(u):Un(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(u)}function o(u){return X(u)?mt(e,s)(u):p(u)}function l(u){return n(u)}function s(u){return u===34||u===39||u===40?Hn(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(u):p(u)}function c(u){return X(u)?mt(e,p)(u):p(u)}function p(u){return u===41?(e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),e.exit("resource"),t):n(u)}}function cf(e,t,n){let r=this;return i;function i(l){return Bn.call(r,e,a,o,"reference","referenceMarker","referenceString")(l)}function a(l){return r.parser.defined.includes(ve(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function o(l){return n(l)}}function uf(e,t,n){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),i}function i(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),t):n(a)}}var ei={name:"labelStartImage",resolveAll:dt.resolveAll,tokenize:pf};function pf(e,t,n){let r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}var ti={name:"labelStartLink",resolveAll:dt.resolveAll,tokenize:ff};function ff(e,t,n){let r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}var an={name:"lineEnding",tokenize:mf};function mf(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),R(e,t,"linePrefix")}}var ht={name:"thematicBreak",tokenize:df};function df(e,t,n){let r=0,i;return a;function a(c){return e.enter("thematicBreak"),o(c)}function o(c){return i=c,l(c)}function l(c){return c===i?(e.enter("thematicBreakSequence"),s(c)):r>=3&&(c===null||I(c))?(e.exit("thematicBreak"),t(c)):n(c)}function s(c){return c===i?(e.consume(c),r++,s):(e.exit("thematicBreakSequence"),D(c)?R(e,l,"whitespace")(c):l(c))}}var ye={continuation:{tokenize:yf},exit:bf,name:"list",tokenize:vf},hf={partial:true,tokenize:wf},gf={partial:true,tokenize:xf};function vf(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],true).length:0,o=0;return l;function l(f){let d=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(d==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:tn(f)){if(r.containerState.type||(r.containerState.type=d,e.enter(d,{_container:true})),d==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(ht,n,c)(f):c(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(f)}return n(f)}function s(f){return tn(f)&&++o<10?(e.consume(f),s):(!r.interrupt||o<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),c(f)):n(f)}function c(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(Ne,r.interrupt?n:p,e.attempt(hf,m,u))}function p(f){return r.containerState.initialBlankLine=true,a++,m(f)}function u(f){return D(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),m):n(f)}function m(f){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),true).length,t(f)}}function yf(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Ne,i,a);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,R(e,t,"listItemIndent",r.containerState.size+1)(l)}function a(l){return r.containerState.furtherBlankLines||!D(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(gf,t,o)(l))}function o(l){return r.containerState._closeFlow=true,r.interrupt=void 0,R(e,e.attempt(ye,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function xf(e,t,n){let r=this;return R(e,i,"listItemIndent",r.containerState.size+1);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],true).length===r.containerState.size?t(a):n(a)}}function bf(e){e.exit(this.containerState.type);}function wf(e,t,n){let r=this;return R(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){let o=r.events[r.events.length-1];return !D(a)&&o&&o[1].type==="listItemPrefixWhitespace"?t(a):n(a)}}var jn={name:"setextUnderline",resolveTo:kf,tokenize:_f};function kf(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n);}else e[n][1].type==="content"&&e.splice(n,1),!a&&e[n][1].type==="definition"&&(a=n);let o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",a?(e.splice(i,0,["enter",o,t]),e.splice(a+1,0,["exit",e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function _f(e,t,n){let r=this,i;return a;function a(c){let p=r.events.length,u;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){u=r.events[p][1].type==="paragraph";break}return !r.parser.lazy[r.now().line]&&(r.interrupt||u)?(e.enter("setextHeadingLine"),i=c,o(c)):n(c)}function o(c){return e.enter("setextHeadingLineSequence"),l(c)}function l(c){return c===i?(e.consume(c),l):(e.exit("setextHeadingLineSequence"),D(c)?R(e,s,"lineSuffix")(c):s(c))}function s(c){return c===null||I(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}var sl={tokenize:zf};function zf(e){let t=this,n=e.attempt(Ne,r,e.attempt(this.parser.constructs.flowInitial,i,R(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Yr,i)),"linePrefix")));return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),t.currentConstruct=void 0,n}}var cl={resolveAll:ml()},ul=fl("string"),pl=fl("text");function fl(e){return {resolveAll:ml(e==="text"?Sf:void 0),tokenize:t};function t(n){let r=this,i=this.parser.constructs[e],a=n.attempt(i,o,l);return o;function o(p){return c(p)?a(p):l(p)}function l(p){if(p===null){n.consume(p);return}return n.enter("data"),n.consume(p),s}function s(p){return c(p)?(n.exit("data"),a(p)):(n.consume(p),s)}function c(p){if(p===null)return  true;let u=i[p],m=-1;if(u)for(;++m<u.length;){let f=u[m];if(!f.previous||f.previous.call(r,r.previous))return  true}return  false}}}function ml(e){return t;function t(n,r){let i=-1,a;for(;++i<=n.length;)a===void 0?n[i]&&n[i][1].type==="data"&&(a=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==a+2&&(n[a][1].end=n[i-1][1].end,n.splice(a+2,i-a-2),i=a+2),a=void 0);return e?e(n,r):n}}function Sf(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,l=0,s;for(;a--;){let c=i[a];if(typeof c=="string"){for(o=c.length;c.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1;}else if(c===-2)s=true,l++;else if(c!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){let c={type:n===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2);}n++;}return e}var ni={};mo(ni,{attentionMarkers:()=>Mf,contentInitial:()=>Ef,disable:()=>Rf,document:()=>Cf,flow:()=>If,flowInitial:()=>Af,insideSpan:()=>Lf,string:()=>Tf,text:()=>Pf});var Cf={42:ye,43:ye,45:ye,48:ye,49:ye,50:ye,51:ye,52:ye,53:ye,54:ye,55:ye,56:ye,57:ye,62:Mn},Ef={91:Kr},Af={[-2]:rn,[-1]:rn,32:rn},If={35:Gr,42:ht,45:[jn,ht],60:Qr,61:jn,95:ht,96:Dn,126:Dn},Tf={38:Nn,92:Rn},Pf={[-5]:an,[-4]:an,[-3]:an,33:ei,38:Nn,42:nn,60:[Wr,Zr],91:ti,92:[Xr,Rn],93:dt,95:nn,96:qr},Lf={null:[nn,cl]},Mf={null:[42,95]},Rf={null:[]};function dl(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],l=[],c={attempt:V(q),check:V(K),consume:L,enter:N,exit:k,interrupt:V(K,{interrupt:true})},p={code:null,containerState:{},defineSkip:v,events:[],now:_,parser:e,previous:null,sliceSerialize:d,sliceStream:y,write:f},u=t.tokenize.call(p,c);return t.resolveAll&&a.push(t),p;function f(T){return o=xe(o,T),b(),o[o.length-1]!==null?[]:(w(t,0),p.events=Je(a,p.events,p),p.events)}function d(T,$){return Df(y(T),$)}function y(T){return Nf(o,T)}function _(){let{_bufferIndex:T,_index:$,line:H,column:Z,offset:P}=r;return {_bufferIndex:T,_index:$,line:H,column:Z,offset:P}}function v(T){i[T.line]=T.column,B();}function b(){let T;for(;r._index<o.length;){let $=o[r._index];if(typeof $=="string")for(T=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===T&&r._bufferIndex<$.length;)S($.charCodeAt(r._bufferIndex));else S($);}}function S(T){u=u(T);}function L(T){I(T)?(r.line++,r.column=1,r.offset+=T===-3?2:1,B()):T!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),p.previous=T;}function N(T,$){let H=$||{};return H.type=T,H.start=_(),p.events.push(["enter",H,p]),l.push(H),H}function k(T){let $=l.pop();return $.end=_(),p.events.push(["exit",$,p]),$}function q(T,$){w(T,$.from);}function K(T,$){$.restore();}function V(T,$){return H;function H(Z,P,ee){let de,h,ce,he;return Array.isArray(Z)?me(Z):"tokenize"in Z?me([Z]):g(Z);function g(ue){return Fe;function Fe(Ae){let Ue=Ae!==null&&ue[Ae],A=Ae!==null&&ue.null,F=[...Array.isArray(Ue)?Ue:Ue?[Ue]:[],...Array.isArray(A)?A:A?[A]:[]];return me(F)(Ae)}}function me(ue){return de=ue,h=0,ue.length===0?ee:Oe(ue[h])}function Oe(ue){return Fe;function Fe(Ae){return he=G(),ce=ue,ue.partial||(p.currentConstruct=ue),ue.name&&p.parser.constructs.disable.null.includes(ue.name)?bt():ue.tokenize.call($?Object.assign(Object.create(p),$):p,c,Bt,bt)(Ae)}}function Bt(ue){return T(ce,he),P}function bt(ue){return he.restore(),++h<de.length?Oe(de[h]):ee}}}function w(T,$){T.resolveAll&&!a.includes(T)&&a.push(T),T.resolve&&se(p.events,$,p.events.length-$,T.resolve(p.events.slice($),p)),T.resolveTo&&(p.events=T.resolveTo(p.events,p));}function G(){let T=_(),$=p.previous,H=p.currentConstruct,Z=p.events.length,P=Array.from(l);return {from:Z,restore:ee};function ee(){r=T,p.previous=$,p.currentConstruct=H,p.events.length=Z,l=P,B();}}function B(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1);}}function Nf(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else {if(o=e.slice(n,i),r>-1){let l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift();}a>0&&o.push(e[i].slice(0,a));}return o}function Df(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a=="string")o=a;else switch(a){case  -5:{o="\r";break}case  -4:{o=`
`;break}case  -3:{o=`\r
`;break}case  -2:{o=t?" ":"	";break}case  -1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(a);}i=a===-2,r.push(o);}return r.join("")}function ri(e){let r={constructs:Pn([ni,...(e||{}).extensions||[]]),content:i(nl),defined:[],document:i(il),flow:i(sl),lazy:{},string:i(ul),text:i(pl)};return r;function i(a){return o;function o(l){return dl(r,a,l)}}}function ii(e){for(;!Fn(e););return e}var hl=/[\0\t\n\r]/g;function oi(){let e=1,t="",n=true,r;return i;function i(a,o,l){let s=[],c,p,u,m,f;for(a=t+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a)),u=0,t="",n&&(a.charCodeAt(0)===65279&&u++,n=void 0);u<a.length;){if(hl.lastIndex=u,c=hl.exec(a),m=c&&c.index!==void 0?c.index:a.length,f=a.charCodeAt(m),!c){t=a.slice(u);break}if(f===10&&u===m&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),u<m&&(s.push(a.slice(u,m)),e+=m-u),f){case 0:{s.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,s.push(-2);e++<p;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=true,e=1;}u=m+1;}return l&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var Of=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function gl(e){return e.replace(Of,Ff)}function Ff(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let i=n.charCodeAt(1),a=i===120||i===88;return Ln(n.slice(a?2:1),a?16:10)}return Ct(n)||e}var yl={}.hasOwnProperty;function ai(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Uf(n)(ii(ri(n).document().write(oi()(e,t,true))))}function Uf(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(we),autolinkProtocol:V,autolinkEmail:V,atxHeading:a(O),blockQuote:a(Ae),characterEscape:V,characterReference:V,codeFenced:a(Ue),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(Ue,o),codeText:a(A,o),codeTextData:V,data:V,codeFlowValue:V,definition:a(F),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(j),hardBreakEscape:a(te),hardBreakTrailing:a(te),htmlFlow:a(ne,o),htmlFlowData:V,htmlText:a(ne,o),htmlTextData:V,image:a(Pe),label:o,link:a(we),listItem:a(Ht),listItemValue:m,listOrdered:a(wt,u),listUnordered:a(wt),paragraph:a(jt),reference:g,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(O),strong:a(nt),thematicBreak:a(sr)},exit:{atxHeading:s(),atxHeadingSequence:N,autolink:s(),autolinkEmail:Fe,autolinkProtocol:ue,blockQuote:s(),characterEscapeValue:w,characterReferenceMarkerHexadecimal:Oe,characterReferenceMarkerNumeric:Oe,characterReferenceValue:Bt,characterReference:bt,codeFenced:s(_),codeFencedFence:y,codeFencedFenceInfo:f,codeFencedFenceMeta:d,codeFlowValue:w,codeIndented:s(v),codeText:s(H),codeTextData:w,data:w,definition:s(),definitionDestinationString:L,definitionLabelString:b,definitionTitleString:S,emphasis:s(),hardBreakEscape:s(B),hardBreakTrailing:s(B),htmlFlow:s(T),htmlFlowData:w,htmlText:s($),htmlTextData:w,image:s(P),label:de,labelText:ee,lineEnding:G,link:s(Z),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:me,resourceDestinationString:h,resourceTitleString:ce,resource:he,setextHeading:s(K),setextHeadingLineSequence:q,setextHeadingText:k,strong:s(),thematicBreak:s()}};xl(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(z){let C={type:"root",children:[]},M={stack:[C],tokenStack:[],config:t,enter:l,exit:c,buffer:o,resume:p,data:n},W=[],J=-1;for(;++J<z.length;)if(z[J][1].type==="listOrdered"||z[J][1].type==="listUnordered")if(z[J][0]==="enter")W.push(J);else {let ke=W.pop();J=i(z,ke,J);}for(J=-1;++J<z.length;){let ke=t[z[J][0]];yl.call(ke,z[J][1].type)&&ke[z[J][1].type].call(Object.assign({sliceSerialize:z[J][2].sliceSerialize},M),z[J][1]);}if(M.tokenStack.length>0){let ke=M.tokenStack[M.tokenStack.length-1];(ke[1]||vl).call(M,void 0,ke[0]);}for(C.position={start:Qe(z.length>0?z[0][1].start:{line:1,column:1,offset:0}),end:Qe(z.length>0?z[z.length-2][1].end:{line:1,column:1,offset:0})},J=-1;++J<t.transforms.length;)C=t.transforms[J](C)||C;return C}function i(z,C,M){let W=C-1,J=-1,ke=false,Le,Be,Vt,$t;for(;++W<=M;){let _e=z[W];switch(_e[1].type){case "listUnordered":case "listOrdered":case "blockQuote":{_e[0]==="enter"?J++:J--,$t=void 0;break}case "lineEndingBlank":{_e[0]==="enter"&&(Le&&!$t&&!J&&!Vt&&(Vt=W),$t=void 0);break}case "linePrefix":case "listItemValue":case "listItemMarker":case "listItemPrefix":case "listItemPrefixWhitespace":break;default:$t=void 0;}if(!J&&_e[0]==="enter"&&_e[1].type==="listItemPrefix"||J===-1&&_e[0]==="exit"&&(_e[1].type==="listUnordered"||_e[1].type==="listOrdered")){if(Le){let kt=W;for(Be=void 0;kt--;){let He=z[kt];if(He[1].type==="lineEnding"||He[1].type==="lineEndingBlank"){if(He[0]==="exit")continue;Be&&(z[Be][1].type="lineEndingBlank",ke=true),He[1].type="lineEnding",Be=kt;}else if(!(He[1].type==="linePrefix"||He[1].type==="blockQuotePrefix"||He[1].type==="blockQuotePrefixWhitespace"||He[1].type==="blockQuoteMarker"||He[1].type==="listItemIndent"))break}Vt&&(!Be||Vt<Be)&&(Le._spread=true),Le.end=Object.assign({},Be?z[Be][1].start:_e[1].end),z.splice(Be||W,0,["exit",Le,_e[2]]),W++,M++;}if(_e[1].type==="listItemPrefix"){let kt={type:"listItem",_spread:false,start:Object.assign({},_e[1].start),end:void 0};Le=kt,z.splice(W,0,["enter",kt,_e[2]]),W++,M++,Vt=void 0,$t=true;}}}return z[C][1]._spread=ke,M}function a(z,C){return M;function M(W){l.call(this,z(W),W),C&&C.call(this,W);}}function o(){this.stack.push({type:"fragment",children:[]});}function l(z,C,M){this.stack[this.stack.length-1].children.push(z),this.stack.push(z),this.tokenStack.push([C,M||void 0]),z.position={start:Qe(C.start),end:void 0};}function s(z){return C;function C(M){z&&z.call(this,M),c.call(this,M);}}function c(z,C){let M=this.stack.pop(),W=this.tokenStack.pop();if(W)W[0].type!==z.type&&(C?C.call(this,z,W[0]):(W[1]||vl).call(this,z,W[0]));else throw new Error("Cannot close `"+z.type+"` ("+Xe({start:z.start,end:z.end})+"): it\u2019s not open");M.position.end=Qe(z.end);}function p(){return ut(this.stack.pop())}function u(){this.data.expectingFirstListItemValue=true;}function m(z){if(this.data.expectingFirstListItemValue){let C=this.stack[this.stack.length-2];C.start=Number.parseInt(this.sliceSerialize(z),10),this.data.expectingFirstListItemValue=void 0;}}function f(){let z=this.resume(),C=this.stack[this.stack.length-1];C.lang=z;}function d(){let z=this.resume(),C=this.stack[this.stack.length-1];C.meta=z;}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=true);}function _(){let z=this.resume(),C=this.stack[this.stack.length-1];C.value=z.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0;}function v(){let z=this.resume(),C=this.stack[this.stack.length-1];C.value=z.replace(/(\r?\n|\r)$/g,"");}function b(z){let C=this.resume(),M=this.stack[this.stack.length-1];M.label=C,M.identifier=ve(this.sliceSerialize(z)).toLowerCase();}function S(){let z=this.resume(),C=this.stack[this.stack.length-1];C.title=z;}function L(){let z=this.resume(),C=this.stack[this.stack.length-1];C.url=z;}function N(z){let C=this.stack[this.stack.length-1];if(!C.depth){let M=this.sliceSerialize(z).length;C.depth=M;}}function k(){this.data.setextHeadingSlurpLineEnding=true;}function q(z){let C=this.stack[this.stack.length-1];C.depth=this.sliceSerialize(z).codePointAt(0)===61?1:2;}function K(){this.data.setextHeadingSlurpLineEnding=void 0;}function V(z){let M=this.stack[this.stack.length-1].children,W=M[M.length-1];(!W||W.type!=="text")&&(W=rt(),W.position={start:Qe(z.start),end:void 0},M.push(W)),this.stack.push(W);}function w(z){let C=this.stack.pop();C.value+=this.sliceSerialize(z),C.position.end=Qe(z.end);}function G(z){let C=this.stack[this.stack.length-1];if(this.data.atHardBreak){let M=C.children[C.children.length-1];M.position.end=Qe(z.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(C.type)&&(V.call(this,z),w.call(this,z));}function B(){this.data.atHardBreak=true;}function T(){let z=this.resume(),C=this.stack[this.stack.length-1];C.value=z;}function $(){let z=this.resume(),C=this.stack[this.stack.length-1];C.value=z;}function H(){let z=this.resume(),C=this.stack[this.stack.length-1];C.value=z;}function Z(){let z=this.stack[this.stack.length-1];if(this.data.inReference){let C=this.data.referenceType||"shortcut";z.type+="Reference",z.referenceType=C,delete z.url,delete z.title;}else delete z.identifier,delete z.label;this.data.referenceType=void 0;}function P(){let z=this.stack[this.stack.length-1];if(this.data.inReference){let C=this.data.referenceType||"shortcut";z.type+="Reference",z.referenceType=C,delete z.url,delete z.title;}else delete z.identifier,delete z.label;this.data.referenceType=void 0;}function ee(z){let C=this.sliceSerialize(z),M=this.stack[this.stack.length-2];M.label=gl(C),M.identifier=ve(C).toLowerCase();}function de(){let z=this.stack[this.stack.length-1],C=this.resume(),M=this.stack[this.stack.length-1];if(this.data.inReference=true,M.type==="link"){let W=z.children;M.children=W;}else M.alt=C;}function h(){let z=this.resume(),C=this.stack[this.stack.length-1];C.url=z;}function ce(){let z=this.resume(),C=this.stack[this.stack.length-1];C.title=z;}function he(){this.data.inReference=void 0;}function g(){this.data.referenceType="collapsed";}function me(z){let C=this.resume(),M=this.stack[this.stack.length-1];M.label=C,M.identifier=ve(this.sliceSerialize(z)).toLowerCase(),this.data.referenceType="full";}function Oe(z){this.data.characterReferenceType=z.type;}function Bt(z){let C=this.sliceSerialize(z),M=this.data.characterReferenceType,W;M?(W=Ln(C,M==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):W=Ct(C);let J=this.stack[this.stack.length-1];J.value+=W;}function bt(z){let C=this.stack.pop();C.position.end=Qe(z.end);}function ue(z){w.call(this,z);let C=this.stack[this.stack.length-1];C.url=this.sliceSerialize(z);}function Fe(z){w.call(this,z);let C=this.stack[this.stack.length-1];C.url="mailto:"+this.sliceSerialize(z);}function Ae(){return {type:"blockquote",children:[]}}function Ue(){return {type:"code",lang:null,meta:null,value:""}}function A(){return {type:"inlineCode",value:""}}function F(){return {type:"definition",identifier:"",label:null,title:null,url:""}}function j(){return {type:"emphasis",children:[]}}function O(){return {type:"heading",depth:0,children:[]}}function te(){return {type:"break"}}function ne(){return {type:"html",value:""}}function Pe(){return {type:"image",title:null,url:"",alt:null}}function we(){return {type:"link",title:null,url:"",children:[]}}function wt(z){return {type:"list",ordered:z.type==="listOrdered",start:null,spread:z._spread,children:[]}}function Ht(z){return {type:"listItem",spread:z._spread,checked:null,children:[]}}function jt(){return {type:"paragraph",children:[]}}function nt(){return {type:"strong",children:[]}}function rt(){return {type:"text",value:""}}function sr(){return {type:"thematicBreak"}}}function Qe(e){return {line:e.line,column:e.column,offset:e.offset}}function xl(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?xl(e,r):Bf(e,r);}}function Bf(e,t){let n;for(n in t)if(yl.call(t,n))switch(n){case "canContainEols":{let r=t[n];r&&e[n].push(...r);break}case "transforms":{let r=t[n];r&&e[n].push(...r);break}case "enter":case "exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function vl(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Xe({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Xe({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Xe({start:t.start,end:t.end})+") is still open")}function Vn(e){let t=this;t.parser=n;function n(r){return ai(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function bl(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),true)};return e.patch(t,n),e.applyData(t,n)}function wl(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function kl(e,t){let n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let a={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(t,a),a}function _l(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function zl(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Sl(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Ee(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,l+=1,e.footnoteCounts.set(r,l);let s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:true,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,s);let c={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,c),e.applyData(t,c)}function Cl(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function El(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function $n(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return [{type:"text",value:"!["+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});let o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function Al(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return $n(e,t);let i={src:Ee(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function Il(e,t){let n={src:Ee(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Tl(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Pl(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return $n(e,t);let i={href:Ee(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Ll(e,t){let n={href:Ee(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ml(e,t,n){let r=e.all(t),i=n?Hf(n):Rl(t),a={},o=[];if(typeof t.checked=="boolean"){let p=r[0],u;p&&p.type==="element"&&p.tagName==="p"?u=p:(u={type:"element",tagName:"p",properties:{},children:[]},r.unshift(u)),u.children.length>0&&u.children.unshift({type:"text",value:" "}),u.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:true},children:[]}),a.className=["task-list-item"];}let l=-1;for(;++l<r.length;){let p=r[l];(i||l!==0||p.type!=="element"||p.tagName!=="p")&&o.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?o.push(...p.children):o.push(p);}let s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});let c={type:"element",tagName:"li",properties:a,children:o};return e.patch(t,c),e.applyData(t,c)}function Hf(e){let t=false;if(e.type==="list"){t=e.spread||false;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Rl(n[r]);}return t}function Rl(e){let t=e.spread;return t??e.children.length>1}function Nl(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){let o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let a={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,true)};return e.patch(t,a),e.applyData(t,a)}function Dl(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ol(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Fl(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ul(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],true)};e.patch(t.children[0],o),i.push(o);}if(n.length>0){let o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,true)},l=St(t.children[1]),s=In(t.children[t.children.length-1]);l&&s&&(o.position={start:l,end:s}),i.push(o);}let a={type:"element",tagName:"table",properties:{},children:e.wrap(i,true)};return e.patch(t,a),e.applyData(t,a)}function Bl(e,t,n){let r=n?n.children:void 0,a=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,l=o?o.length:t.children.length,s=-1,c=[];for(;++s<l;){let u=t.children[s],m={},f=o?o[s]:void 0;f&&(m.align=f);let d={type:"element",tagName:a,properties:m,children:[]};u&&(d.children=e.all(u),e.patch(u,d),d=e.applyData(u,d)),c.push(d);}let p={type:"element",tagName:"tr",properties:{},children:e.wrap(c,true)};return e.patch(t,p),e.applyData(t,p)}function Hl(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Vl(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(jl(t.slice(i,r.index),i>0,true),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(jl(t.slice(i),i>0,false)),a.join("")}function jl(e,t,n){let r=0,i=e.length;if(t){let a=e.codePointAt(r);for(;a===9||a===32;)r++,a=e.codePointAt(r);}if(n){let a=e.codePointAt(i-1);for(;a===9||a===32;)i--,a=e.codePointAt(i-1);}return i>r?e.slice(r,i):""}function $l(e,t){let n={type:"text",value:Vl(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Wl(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var ql={blockquote:bl,break:wl,code:kl,delete:_l,emphasis:zl,footnoteReference:Sl,heading:Cl,html:El,imageReference:Al,image:Il,inlineCode:Tl,linkReference:Pl,link:Ll,listItem:Ml,list:Nl,paragraph:Dl,root:Ol,strong:Fl,table:Ul,tableCell:Hl,tableRow:Bl,text:$l,thematicBreak:Wl,toml:Wn,yaml:Wn,definition:Wn,footnoteDefinition:Wn};function Wn(){}var Yl=typeof self=="object"?self:globalThis,Wf=(e,t)=>{let n=(i,a)=>(e.set(a,i),i),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case  -1:return n(o,i);case 1:{let l=n([],i);for(let s of o)l.push(r(s));return l}case 2:{let l=n({},i);for(let[s,c]of o)l[r(s)]=r(c);return l}case 3:return n(new Date(o),i);case 4:{let{source:l,flags:s}=o;return n(new RegExp(l,s),i)}case 5:{let l=n(new Map,i);for(let[s,c]of o)l.set(r(s),r(c));return l}case 6:{let l=n(new Set,i);for(let s of o)l.add(r(s));return l}case 7:{let{name:l,message:s}=o;return n(new Yl[l](s),i)}case 8:return n(BigInt(o),i);case "BigInt":return n(Object(BigInt(o)),i);case "ArrayBuffer":return n(new Uint8Array(o).buffer,o);case "DataView":{let{buffer:l}=new Uint8Array(o);return n(new DataView(l),o)}}return n(new Yl[a](o),i)};return r},ci=e=>Wf(new Map,e)(0);var Et="",{toString:qf}={},{keys:Yf}=Object,ln=e=>{let t=typeof e;if(t!=="object"||!e)return [0,t];let n=qf.call(e).slice(8,-1);switch(n){case "Array":return [1,Et];case "Object":return [2,Et];case "Date":return [3,Et];case "RegExp":return [4,Et];case "Map":return [5,Et];case "Set":return [6,Et];case "DataView":return [1,n]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},Yn=([e,t])=>e===0&&(t==="function"||t==="symbol"),Kf=(e,t,n,r)=>{let i=(o,l)=>{let s=r.push(o)-1;return n.set(l,s),s},a=o=>{if(n.has(o))return n.get(o);let[l,s]=ln(o);switch(l){case 0:{let p=o;switch(s){case "bigint":l=8,p=o.toString();break;case "function":case "symbol":if(e)throw new TypeError("unable to serialize "+s);p=null;break;case "undefined":return i([-1],o)}return i([l,p],o)}case 1:{if(s){let m=o;return s==="DataView"?m=new Uint8Array(o.buffer):s==="ArrayBuffer"&&(m=new Uint8Array(o)),i([s,[...m]],o)}let p=[],u=i([l,p],o);for(let m of o)p.push(a(m));return u}case 2:{if(s)switch(s){case "BigInt":return i([s,o.toString()],o);case "Boolean":case "Number":case "String":return i([s,o.valueOf()],o)}if(t&&"toJSON"in o)return a(o.toJSON());let p=[],u=i([l,p],o);for(let m of Yf(o))(e||!Yn(ln(o[m])))&&p.push([a(m),a(o[m])]);return u}case 3:return i([l,o.toISOString()],o);case 4:{let{source:p,flags:u}=o;return i([l,{source:p,flags:u}],o)}case 5:{let p=[],u=i([l,p],o);for(let[m,f]of o)(e||!(Yn(ln(m))||Yn(ln(f))))&&p.push([a(m),a(f)]);return u}case 6:{let p=[],u=i([l,p],o);for(let m of o)(e||!Yn(ln(m)))&&p.push(a(m));return u}}let{message:c}=o;return i([l,{name:s,message:c}],o)};return a},ui=(e,{json:t,lossy:n}={})=>{let r=[];return Kf(!(t||n),!!t,new Map,r)(e),r};var At=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?ci(ui(e,t)):structuredClone(e):(e,t)=>ci(ui(e,t));function Xf(e,t){let n=[{type:"text",value:"\u21A9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Gf(e,t){return "Back to reference "+(e+1)+(t>1?"-"+t:"")}function Ql(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Xf,r=e.options.footnoteBackLabel||Gf,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[],s=-1;for(;++s<e.footnoteOrder.length;){let c=e.footnoteById.get(e.footnoteOrder[s]);if(!c)continue;let p=e.all(c),u=String(c.identifier).toUpperCase(),m=Ee(u.toLowerCase()),f=0,d=[],y=e.footnoteCounts.get(u);for(;y!==void 0&&++f<=y;){d.length>0&&d.push({type:"text",value:" "});let b=typeof n=="string"?n:n(s,f);typeof b=="string"&&(b={type:"text",value:b}),d.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+m+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,f),className:["data-footnote-backref"]},children:Array.isArray(b)?b:[b]});}let _=p[p.length-1];if(_&&_.type==="element"&&_.tagName==="p"){let b=_.children[_.children.length-1];b&&b.type==="text"?b.value+=" ":_.children.push({type:"text",value:" "}),_.children.push(...d);}else p.push(...d);let v={type:"element",tagName:"li",properties:{id:t+"fn-"+m},children:e.wrap(p,true)};e.patch(c,v),l.push(v);}if(l.length!==0)return {type:"element",tagName:"section",properties:{dataFootnotes:true,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...At(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,true)},{type:"text",value:`
`}]}}var Ze=(function(e){if(e==null)return em;if(typeof e=="function")return Kn(e);if(typeof e=="object")return Array.isArray(e)?Jf(e):Qf(e);if(typeof e=="string")return Zf(e);throw new Error("Expected function, string, or object as test")});function Jf(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Ze(e[n]);return Kn(r);function r(...i){let a=-1;for(;++a<t.length;)if(t[a].apply(this,i))return  true;return  false}}function Qf(e){let t=e;return Kn(n);function n(r){let i=r,a;for(a in e)if(i[a]!==t[a])return  false;return  true}}function Zf(e){return Kn(t);function t(n){return n&&n.type===e}}function Kn(e){return t;function t(n,r,i){return !!(tm(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function em(){return  true}function tm(e){return e!==null&&typeof e=="object"&&"type"in e}var Zl=[],Xn=true,gt=false,Gn="skip";function sn(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;let a=Ze(i),o=r?-1:1;l(e,void 0,[])();function l(s,c,p){let u=s&&typeof s=="object"?s:{};if(typeof u.type=="string"){let f=typeof u.tagName=="string"?u.tagName:typeof u.name=="string"?u.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(s.type+(f?"<"+f+">":""))+")"});}return m;function m(){let f=Zl,d,y,_;if((!t||a(s,c,p[p.length-1]||void 0))&&(f=nm(n(s,p)),f[0]===gt))return f;if("children"in s&&s.children){let v=s;if(v.children&&f[0]!==Gn)for(y=(r?v.children.length:-1)+o,_=p.concat(v);y>-1&&y<v.children.length;){let b=v.children[y];if(d=l(b,y,_)(),d[0]===gt)return d;y=typeof d[1]=="number"?d[1]:y+o;}}return f}}}function nm(e){return Array.isArray(e)?e:typeof e=="number"?[Xn,e]:e==null?Zl:[e]}function vt(e,t,n,r){let i,a,o;typeof t=="function"&&typeof n!="function"?(a=void 0,o=t,i=n):(a=t,o=n,i=r),sn(e,a,l,i);function l(s,c){let p=c[c.length-1],u=p?p.children.indexOf(s):void 0;return o(s,u,p)}}var pi={}.hasOwnProperty,rm={};function ts(e,t){let n=t||rm,r=new Map,i=new Map,a=new Map,o={...ql,...n.handlers},l={all:c,applyData:om,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:o,one:s,options:n,patch:im,wrap:lm};return vt(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){let u=p.type==="definition"?r:i,m=String(p.identifier).toUpperCase();u.has(m)||u.set(m,p);}}),l;function s(p,u){let m=p.type,f=l.handlers[m];if(pi.call(l.handlers,m)&&f)return f(l,p,u);if(l.options.passThrough&&l.options.passThrough.includes(m)){if("children"in p){let{children:y,..._}=p,v=At(_);return v.children=l.all(p),v}return At(p)}return (l.options.unknownHandler||am)(l,p,u)}function c(p){let u=[];if("children"in p){let m=p.children,f=-1;for(;++f<m.length;){let d=l.one(m[f],p);if(d){if(f&&m[f-1].type==="break"&&(!Array.isArray(d)&&d.type==="text"&&(d.value=es(d.value)),!Array.isArray(d)&&d.type==="element")){let y=d.children[0];y&&y.type==="text"&&(y.value=es(y.value));}Array.isArray(d)?u.push(...d):u.push(d);}}}return u}}function im(e,t){e.position&&(t.position=Or(e));}function om(e,t){let n=t;if(e&&e.data){let r=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else {let o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o};}n.type==="element"&&a&&Object.assign(n.properties,At(a)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i);}return n}function am(e,t){let n=t.data||{},r="value"in t&&!(pi.call(n,"hProperties")||pi.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function lm(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function es(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Jn(e,t){let n=ts(e,t),r=n.one(e,void 0),i=Ql(n),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&(a.children.push({type:"text",value:`
`},i)),a}function Qn(e,t){return e&&"run"in e?async function(n,r){let i=Jn(n,{file:r,...t});await e.run(i,r);}:function(n,r){return Jn(n,{file:r,...e||t})}}function fi(e){if(e)throw e}var tr=ho(us());function cn(e){if(typeof e!="object"||e===null)return  false;let t=Object.getPrototypeOf(e);return (t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function mi(){let e=[],t={run:n,use:r};return t;function n(...i){let a=-1,o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(s,...c){let p=e[++a],u=-1;if(s){o(s);return}for(;++u<i.length;)(c[u]===null||c[u]===void 0)&&(c[u]=i[u]);i=c,p?ps(p,l)(...c):o(null,...c);}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function ps(e,t){let n;return r;function r(...o){let l=e.length>o.length,s;l&&o.push(i);try{s=e.apply(this,o);}catch(c){let p=c;if(l&&n)throw p;return i(p)}l||(s&&s.then&&typeof s.then=="function"?s.then(a,i):s instanceof Error?i(s):a(s));}function i(o,...l){n||(n=true,t(o,...l));}function a(o){i(null,o);}}var Te={basename:sm,dirname:cm,extname:um,join:pm,sep:"/"};function sm(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');un(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=true,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return "";let o=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=true,o=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function cm(e){if(un(e),e.length===0)return ".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=true);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function um(e){un(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let l=e.codePointAt(t);if(l===47){if(o){r=t+1;break}continue}n<0&&(o=true,n=t+1),l===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1);}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function pm(...e){let t=-1,n;for(;++t<e.length;)un(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":fm(n)}function fm(e){un(e);let t=e.codePointAt(0)===47,n=mm(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function mm(e,t){let n="",r=0,i=-1,a=0,o=-1,l,s;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else {if(l===47)break;l=47;}if(l===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=o,a=0;continue}}else if(n.length>0){n="",r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2);}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0;}else l===46&&a>-1?a++:a=-1;}return n}function un(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}var fs={cwd:dm};function dm(){return "/"}function It(e){return !!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function ms(e){if(typeof e=="string")e=new URL(e);else if(!It(e)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return hm(e)}function hm(e){if(e.hostname!==""){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}var di=["history","path","basename","stem","extname","dirname"],yt=class{constructor(t){let n;t?It(t)?n={path:t}:typeof t=="string"||gm(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":fs.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<di.length;){let a=di[r];a in n&&n[a]!==void 0&&n[a]!==null&&(this[a]=a==="history"?[...n[a]]:n[a]);}let i;for(i in n)di.includes(i)||(this[i]=n[i]);}get basename(){return typeof this.path=="string"?Te.basename(this.path):void 0}set basename(t){gi(t,"basename"),hi(t,"basename"),this.path=Te.join(this.dirname||"",t);}get dirname(){return typeof this.path=="string"?Te.dirname(this.path):void 0}set dirname(t){ds(this.basename,"dirname"),this.path=Te.join(t||"",this.basename);}get extname(){return typeof this.path=="string"?Te.extname(this.path):void 0}set extname(t){if(hi(t,"extname"),ds(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Te.join(this.dirname,this.stem+(t||""));}get path(){return this.history[this.history.length-1]}set path(t){It(t)&&(t=ms(t)),gi(t,"path"),this.path!==t&&this.history.push(t);}get stem(){return typeof this.path=="string"?Te.basename(this.path,this.extname):void 0}set stem(t){gi(t,"stem"),hi(t,"stem"),this.path=Te.join(this.dirname||"",t+(this.extname||""));}fail(t,n,r){let i=this.message(t,n,r);throw i.fatal=true,i}info(t,n,r){let i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){let i=new le(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=false,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function hi(e,t){if(e&&e.includes(Te.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Te.sep+"`")}function gi(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function ds(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function gm(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var hs=(function(e){let r=this.constructor.prototype,i=r[e],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a});var vm={}.hasOwnProperty,bi=class e extends hs{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=mi();}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r);}return t.data((0, tr.default)(true,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(xi("data",this.frozen),this.namespace[t]=n,this):vm.call(this.namespace,t)&&this.namespace[t]||void 0:t?(xi("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===false)continue;r[0]===true&&(r[0]=void 0);let i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i);}return this.frozen=true,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();let n=er(t),r=this.parser||this.Parser;return vi("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),vi("process",this.parser||this.Parser),yi("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(a,o){let l=er(t),s=r.parse(l);r.run(s,l,function(p,u,m){if(p||!u||!m)return c(p);let f=u,d=r.stringify(f,m);xm(d)?m.value=d:m.result=d,c(p,m);});function c(p,u){p||!u?o(p):a?a(u):n(void 0,u);}}}processSync(t){let n=false,r;return this.freeze(),vi("processSync",this.parser||this.Parser),yi("processSync",this.compiler||this.Compiler),this.process(t,i),vs("processSync","process",n),r;function i(a,o){n=true,fi(a),r=o;}}run(t,n,r){gs(t),this.freeze();let i=this.transformers;return !r&&typeof n=="function"&&(r=n,n=void 0),r?a(void 0,r):new Promise(a);function a(o,l){let s=er(n);i.run(t,s,c);function c(p,u,m){let f=u||t;p?l(p):o?o(f):r(void 0,f,m);}}}runSync(t,n){let r=false,i;return this.run(t,n,a),vs("runSync","run",r),i;function a(o,l){fi(o),i=l,r=true;}}stringify(t,n){this.freeze();let r=er(n),i=this.compiler||this.Compiler;return yi("stringify",i),gs(t),i(t,r)}use(t,...n){let r=this.attachers,i=this.namespace;if(xi("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function a(c){if(typeof c=="function")s(c,[]);else if(typeof c=="object")if(Array.isArray(c)){let[p,...u]=c;s(p,u);}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(c.plugins),c.settings&&(i.settings=(0, tr.default)(true,i.settings,c.settings));}function l(c){let p=-1;if(c!=null)if(Array.isArray(c))for(;++p<c.length;){let u=c[p];a(u);}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function s(c,p){let u=-1,m=-1;for(;++u<r.length;)if(r[u][0]===c){m=u;break}if(m===-1)r.push([c,...p]);else if(p.length>0){let[f,...d]=p,y=r[m][1];cn(y)&&cn(f)&&(f=(0, tr.default)(true,y,f)),r[m]=[c,f,...d];}}}},wi=new bi().freeze();function vi(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function yi(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function xi(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function gs(e){if(!cn(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function vs(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function er(e){return ym(e)?e:new yt(e)}function ym(e){return !!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function xm(e){return typeof e=="string"||bm(e)}function bm(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var wm="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",ys=[],xs={allowDangerousHtml:true},km=/^(https?|ircs?|mailto|xmpp)$/i,_m=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function ki(e){let t=zm(e),n=Sm(e);return Cm(t.runSync(t.parse(n),n),e)}function zm(e){let t=e.rehypePlugins||ys,n=e.remarkPlugins||ys,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...xs}:xs;return wi().use(Vn).use(n).use(Qn,r).use(t)}function Sm(e){let t=e.children||"",n=new yt;return typeof t=="string"?n.value=t:(void 0),n}function Cm(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,l=t.unwrapDisallowed,s=t.urlTransform||bs;for(let p of _m)Object.hasOwn(t,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+wm+p.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),vt(e,c),Br(e,{Fragment:Se,components:i,ignoreInvalidStyle:true,jsx:x,jsxs:x,passKeys:true,passNode:true});function c(p,u,m){if(p.type==="raw"&&m&&typeof u=="number")return o?m.children.splice(u,1):m.children[u]={type:"text",value:p.value},u;if(p.type==="element"){let f;for(f in en)if(Object.hasOwn(en,f)&&Object.hasOwn(p.properties,f)){let d=p.properties[f],y=en[f];(y===null||y.includes(p.tagName))&&(p.properties[f]=s(String(d||""),f,p));}}if(p.type==="element"){let f=n?!n.includes(p.tagName):a?a.includes(p.tagName):false;if(!f&&r&&typeof u=="number"&&(f=!r(p,u,m)),f&&m&&typeof u=="number")return l&&p.children?m.children.splice(u,1,...p.children):m.children.splice(u,1),u}}}function bs(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||km.test(e.slice(0,t))?e:""}function _i(e,t){let n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function zi(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Si(e,t,n){let i=Ze((n||{}).ignore||[]),a=Em(t),o=-1;for(;++o<a.length;)sn(e,"text",l);function l(c,p){let u=-1,m;for(;++u<p.length;){let f=p[u],d=m?m.children:void 0;if(i(f,d?d.indexOf(f):void 0,m))return;m=f;}if(m)return s(c,p)}function s(c,p){let u=p[p.length-1],m=a[o][0],f=a[o][1],d=0,_=u.children.indexOf(c),v=false,b=[];m.lastIndex=0;let S=m.exec(c.value);for(;S;){let L=S.index,N={index:S.index,input:S.input,stack:[...p,c]},k=f(...S,N);if(typeof k=="string"&&(k=k.length>0?{type:"text",value:k}:void 0),k===false?m.lastIndex=L+1:(d!==L&&b.push({type:"text",value:c.value.slice(d,L)}),Array.isArray(k)?b.push(...k):k&&b.push(k),d=L+S[0].length,v=true),!m.global)break;S=m.exec(c.value);}return v?(d<c.value.length&&b.push({type:"text",value:c.value.slice(d)}),u.children.splice(_,1,...b)):b=[c],_+b.length}}function Em(e){let t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let i=n[r];t.push([Am(i[0]),Im(i[1])]);}return t}function Am(e){return typeof e=="string"?new RegExp(zi(e),"g"):e}function Im(e){return typeof e=="function"?e:function(){return e}}var Ci="phrasing",Ei=["autolink","link","image","label"];function Ii(){return {transforms:[Nm],enter:{literalAutolink:Tm,literalAutolinkEmail:Ai,literalAutolinkHttp:Ai,literalAutolinkWww:Ai},exit:{literalAutolink:Rm,literalAutolinkEmail:Mm,literalAutolinkHttp:Pm,literalAutolinkWww:Lm}}}function Ti(){return {unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Ci,notInConstruct:Ei},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Ci,notInConstruct:Ei},{character:":",before:"[ps]",after:"\\/",inConstruct:Ci,notInConstruct:Ei}]}}function Tm(e){this.enter({type:"link",title:null,url:"",children:[]},e);}function Ai(e){this.config.enter.autolinkProtocol.call(this,e);}function Pm(e){this.config.exit.autolinkProtocol.call(this,e);}function Lm(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e);}function Mm(e){this.config.exit.autolinkEmail.call(this,e);}function Rm(e){this.exit(e);}function Nm(e){Si(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Dm],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Om]],{ignore:["link","linkReference"]});}function Dm(e,t,n,r,i){let a="";if(!ws(i)||(/^w/i.test(t)&&(n=t+n,t="",a="http://"),!Fm(n)))return  false;let o=Um(n+r);if(!o[0])return  false;let l={type:"link",title:null,url:a+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[l,{type:"text",value:o[1]}]:l}function Om(e,t,n,r){return !ws(r,true)||/[-\d_]$/.test(n)?false:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Fm(e){let t=e.split(".");return !(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Um(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return [e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),i=_i(e,"("),a=_i(e,")");for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),a++;return [e,n]}function ws(e,t){let n=e.input.charCodeAt(e.index-1);return (e.index===0||Re(n)||ft(n))&&(!t||n!==47)}ks.peek=Km;function Bm(){this.buffer();}function Hm(e){this.enter({type:"footnoteReference",identifier:"",label:""},e);}function jm(){this.buffer();}function Vm(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e);}function $m(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ve(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function Wm(e){this.exit(e);}function qm(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ve(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function Ym(e){this.exit(e);}function Km(){return "["}function ks(e,t,n,r){let i=n.createTracker(r),a=i.move("[^"),o=n.enter("footnoteReference"),l=n.enter("reference");return a+=i.move(n.safe(n.associationId(e),{after:"]",before:a})),l(),o(),a+=i.move("]"),a}function Pi(){return {enter:{gfmFootnoteCallString:Bm,gfmFootnoteCall:Hm,gfmFootnoteDefinitionLabelString:jm,gfmFootnoteDefinition:Vm},exit:{gfmFootnoteCallString:$m,gfmFootnoteCall:Wm,gfmFootnoteDefinitionLabelString:qm,gfmFootnoteDefinition:Ym}}}function Li(e){let t=false;return e&&e.firstLineBlank&&(t=true),{handlers:{footnoteDefinition:n,footnoteReference:ks},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,a,o){let l=a.createTracker(o),s=l.move("[^"),c=a.enter("footnoteDefinition"),p=a.enter("label");return s+=l.move(a.safe(a.associationId(r),{before:s,after:"]"})),p(),s+=l.move("]:"),r.children&&r.children.length>0&&(l.shift(4),s+=l.move((t?`
`:" ")+a.indentLines(a.containerFlow(r,l.current()),t?_s:Xm))),c(),s}}function Xm(e,t,n){return t===0?e:_s(e,t,n)}function _s(e,t,n){return (n?"":"    ")+e}var Gm=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];zs.peek=Zm;function Mi(){return {canContainEols:["delete"],enter:{strikethrough:Jm},exit:{strikethrough:Qm}}}function Ri(){return {unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Gm}],handlers:{delete:zs}}}function Jm(e){this.enter({type:"delete",children:[]},e);}function Qm(e){this.exit(e);}function zs(e,t,n,r){let i=n.createTracker(r),a=n.enter("strikethrough"),o=i.move("~~");return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),a(),o}function Zm(){return "~"}function ed(e){return e.length}function Cs(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||ed,a=[],o=[],l=[],s=[],c=0,p=-1;for(;++p<e.length;){let y=[],_=[],v=-1;for(e[p].length>c&&(c=e[p].length);++v<e[p].length;){let b=td(e[p][v]);if(n.alignDelimiters!==false){let S=i(b);_[v]=S,(s[v]===void 0||S>s[v])&&(s[v]=S);}y.push(b);}o[p]=y,l[p]=_;}let u=-1;if(typeof r=="object"&&"length"in r)for(;++u<c;)a[u]=Ss(r[u]);else {let y=Ss(r);for(;++u<c;)a[u]=y;}u=-1;let m=[],f=[];for(;++u<c;){let y=a[u],_="",v="";y===99?(_=":",v=":"):y===108?_=":":y===114&&(v=":");let b=n.alignDelimiters===false?1:Math.max(1,s[u]-_.length-v.length),S=_+"-".repeat(b)+v;n.alignDelimiters!==false&&(b=_.length+b+v.length,b>s[u]&&(s[u]=b),f[u]=b),m[u]=S;}o.splice(1,0,m),l.splice(1,0,f),p=-1;let d=[];for(;++p<o.length;){let y=o[p],_=l[p];u=-1;let v=[];for(;++u<c;){let b=y[u]||"",S="",L="";if(n.alignDelimiters!==false){let N=s[u]-(_[u]||0),k=a[u];k===114?S=" ".repeat(N):k===99?N%2?(S=" ".repeat(N/2+.5),L=" ".repeat(N/2-.5)):(S=" ".repeat(N/2),L=S):L=" ".repeat(N);}n.delimiterStart!==false&&!u&&v.push("|"),n.padding!==false&&!(n.alignDelimiters===false&&b==="")&&(n.delimiterStart!==false||u)&&v.push(" "),n.alignDelimiters!==false&&v.push(S),v.push(b),n.alignDelimiters!==false&&v.push(L),n.padding!==false&&v.push(" "),(n.delimiterEnd!==false||u!==c-1)&&v.push("|");}d.push(n.delimiterEnd===false?v.join("").replace(/ +$/,""):v.join(""));}return d.join(`
`)}function td(e){return e==null?"":String(e)}function Ss(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Es(e,t,n,r){let i=n.enter("blockquote"),a=n.createTracker(r);a.move("> "),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),nd);return i(),o}function nd(e,t,n){return ">"+(n?"":" ")+e}function Is(e,t){return As(e,t.inConstruct,true)&&!As(e,t.notInConstruct,false)}function As(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return  true;return  false}function Ni(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Is(n.stack,n.unsafe[i]))return /[ \t]/.test(r.before)?"":" ";return `\\
`}function Ts(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function Ps(e,t){return !!(t.options.fences===false&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Ls(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Ms(e,t,n,r){let i=Ls(n),a=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(Ps(e,n)){let u=n.enter("codeIndented"),m=n.indentLines(a,rd);return u(),m}let l=n.createTracker(r),s=i.repeat(Math.max(Ts(a,i)+1,3)),c=n.enter("codeFenced"),p=l.move(s);if(e.lang){let u=n.enter(`codeFencedLang${o}`);p+=l.move(n.safe(e.lang,{before:p,after:" ",encode:["`"],...l.current()})),u();}if(e.lang&&e.meta){let u=n.enter(`codeFencedMeta${o}`);p+=l.move(" "),p+=l.move(n.safe(e.meta,{before:p,after:`
`,encode:["`"],...l.current()})),u();}return p+=l.move(`
`),a&&(p+=l.move(a+`
`)),p+=l.move(s),c(),p}function rd(e,t,n){return (n?"":"    ")+e}function Tt(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Rs(e,t,n,r){let i=Tt(n),a=i==='"'?"Quote":"Apostrophe",o=n.enter("definition"),l=n.enter("label"),s=n.createTracker(r),c=s.move("[");return c+=s.move(n.safe(n.associationId(e),{before:c,after:"]",...s.current()})),c+=s.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(n.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(l=n.enter("destinationRaw"),c+=s.move(n.safe(e.url,{before:c,after:e.title?" ":`
`,...s.current()}))),l(),e.title&&(l=n.enter(`title${a}`),c+=s.move(" "+i),c+=s.move(n.safe(e.title,{before:c,after:i,...s.current()})),c+=s.move(i),l()),o(),c}function Ns(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function et(e){return "&#x"+e.toString(16).toUpperCase()+";"}function Pt(e,t,n){let r=$e(e),i=$e(t);return r===void 0?i===void 0?n==="_"?{inside:true,outside:true}:{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:true}:r===1?i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:false}:i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:false}:{inside:false,outside:false}}Di.peek=id;function Di(e,t,n,r){let i=Ns(n),a=n.enter("emphasis"),o=n.createTracker(r),l=o.move(i),s=o.move(n.containerPhrasing(e,{after:i,before:l,...o.current()})),c=s.charCodeAt(0),p=Pt(r.before.charCodeAt(r.before.length-1),c,i);p.inside&&(s=et(c)+s.slice(1));let u=s.charCodeAt(s.length-1),m=Pt(r.after.charCodeAt(0),u,i);m.inside&&(s=s.slice(0,-1)+et(u));let f=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:m.outside,before:p.outside},l+s+f}function id(e,t,n){return n.options.emphasis||"*"}function Ds(e,t){let n=false;return vt(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=true,gt}),!!((!e.depth||e.depth<3)&&ut(e)&&(t.options.setext||n))}function Os(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(Ds(e,n)){let p=n.enter("headingSetext"),u=n.enter("phrasing"),m=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return u(),p(),m+`
`+(i===1?"=":"-").repeat(m.length-(Math.max(m.lastIndexOf("\r"),m.lastIndexOf(`
`))+1))}let o="#".repeat(i),l=n.enter("headingAtx"),s=n.enter("phrasing");a.move(o+" ");let c=n.containerPhrasing(e,{before:"# ",after:`
`,...a.current()});return /^[\t ]/.test(c)&&(c=et(c.charCodeAt(0))+c.slice(1)),c=c?o+" "+c:o,n.options.closeAtx&&(c+=" "+o),s(),l(),c}Oi.peek=od;function Oi(e){return e.value||""}function od(){return "<"}Fi.peek=ad;function Fi(e,t,n,r){let i=Tt(n),a=i==='"'?"Quote":"Apostrophe",o=n.enter("image"),l=n.enter("label"),s=n.createTracker(r),c=s.move("![");return c+=s.move(n.safe(e.alt,{before:c,after:"]",...s.current()})),c+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(n.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(l=n.enter("destinationRaw"),c+=s.move(n.safe(e.url,{before:c,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=n.enter(`title${a}`),c+=s.move(" "+i),c+=s.move(n.safe(e.title,{before:c,after:i,...s.current()})),c+=s.move(i),l()),c+=s.move(")"),o(),c}function ad(){return "!"}Ui.peek=ld;function Ui(e,t,n,r){let i=e.referenceType,a=n.enter("imageReference"),o=n.enter("label"),l=n.createTracker(r),s=l.move("!["),c=n.safe(e.alt,{before:s,after:"]",...l.current()});s+=l.move(c+"]["),o();let p=n.stack;n.stack=[],o=n.enter("reference");let u=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return o(),n.stack=p,a(),i==="full"||!c||c!==u?s+=l.move(u+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function ld(){return "!"}Bi.peek=sd;function Bi(e,t,n){let r=e.value||"",i="`",a=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++a<n.unsafe.length;){let o=n.unsafe[a],l=n.compilePattern(o),s;if(o.atBreak)for(;s=l.exec(r);){let c=s.index;r.charCodeAt(c)===10&&r.charCodeAt(c-1)===13&&c--,r=r.slice(0,c)+" "+r.slice(s.index+1);}}return i+r+i}function sd(){return "`"}function Hi(e,t){let n=ut(e);return !!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}ji.peek=cd;function ji(e,t,n,r){let i=Tt(n),a=i==='"'?"Quote":"Apostrophe",o=n.createTracker(r),l,s;if(Hi(e,n)){let p=n.stack;n.stack=[],l=n.enter("autolink");let u=o.move("<");return u+=o.move(n.containerPhrasing(e,{before:u,after:">",...o.current()})),u+=o.move(">"),l(),n.stack=p,u}l=n.enter("link"),s=n.enter("label");let c=o.move("[");return c+=o.move(n.containerPhrasing(e,{before:c,after:"](",...o.current()})),c+=o.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),c+=o.move("<"),c+=o.move(n.safe(e.url,{before:c,after:">",...o.current()})),c+=o.move(">")):(s=n.enter("destinationRaw"),c+=o.move(n.safe(e.url,{before:c,after:e.title?" ":")",...o.current()}))),s(),e.title&&(s=n.enter(`title${a}`),c+=o.move(" "+i),c+=o.move(n.safe(e.title,{before:c,after:i,...o.current()})),c+=o.move(i),s()),c+=o.move(")"),l(),c}function cd(e,t,n){return Hi(e,n)?"<":"["}Vi.peek=ud;function Vi(e,t,n,r){let i=e.referenceType,a=n.enter("linkReference"),o=n.enter("label"),l=n.createTracker(r),s=l.move("["),c=n.containerPhrasing(e,{before:s,after:"]",...l.current()});s+=l.move(c+"]["),o();let p=n.stack;n.stack=[],o=n.enter("reference");let u=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return o(),n.stack=p,a(),i==="full"||!c||c!==u?s+=l.move(u+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function ud(){return "["}function Lt(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Fs(e){let t=Lt(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Us(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function nr(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Bs(e,t,n,r){let i=n.enter("list"),a=n.bulletCurrent,o=e.ordered?Us(n):Lt(n),l=e.ordered?o==="."?")":".":Fs(n),s=t&&n.bulletLastUsed?o===n.bulletLastUsed:false;if(!e.ordered){let p=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&p&&(!p.children||!p.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=true),nr(n)===o&&p){let u=-1;for(;++u<e.children.length;){let m=e.children[u];if(m&&m.type==="listItem"&&m.children&&m.children[0]&&m.children[0].type==="thematicBreak"){s=true;break}}}}s&&(o=l),n.bulletCurrent=o;let c=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),c}function Hs(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function js(e,t,n,r){let i=Hs(n),a=n.bulletCurrent||Lt(n);t&&t.type==="list"&&t.ordered&&(a=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===false?0:t.children.indexOf(e))+a);let o=a.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let l=n.createTracker(r);l.move(a+" ".repeat(o-a.length)),l.shift(o);let s=n.enter("listItem"),c=n.indentLines(n.containerFlow(e,l.current()),p);return s(),c;function p(u,m,f){return m?(f?"":" ".repeat(o))+u:(f?a:a+" ".repeat(o-a.length))+u}}function Vs(e,t,n,r){let i=n.enter("paragraph"),a=n.enter("phrasing"),o=n.containerPhrasing(e,r);return a(),i(),o}var $i=Ze(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function $s(e,t,n,r){return (e.children.some(function(o){return $i(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function Ws(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Wi.peek=pd;function Wi(e,t,n,r){let i=Ws(n),a=n.enter("strong"),o=n.createTracker(r),l=o.move(i+i),s=o.move(n.containerPhrasing(e,{after:i,before:l,...o.current()})),c=s.charCodeAt(0),p=Pt(r.before.charCodeAt(r.before.length-1),c,i);p.inside&&(s=et(c)+s.slice(1));let u=s.charCodeAt(s.length-1),m=Pt(r.after.charCodeAt(0),u,i);m.inside&&(s=s.slice(0,-1)+et(u));let f=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:m.outside,before:p.outside},l+s+f}function pd(e,t,n){return n.options.strong||"*"}function qs(e,t,n,r){return n.safe(e.value,r)}function Ys(e){let t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Ks(e,t,n){let r=(nr(n)+(n.options.ruleSpaces?" ":"")).repeat(Ys(n));return n.options.ruleSpaces?r.slice(0,-1):r}var pn={blockquote:Es,break:Ni,code:Ms,definition:Rs,emphasis:Di,hardBreak:Ni,heading:Os,html:Oi,image:Fi,imageReference:Ui,inlineCode:Bi,link:ji,linkReference:Vi,list:Bs,listItem:js,paragraph:Vs,root:$s,strong:Wi,text:qs,thematicBreak:Ks};function Yi(){return {enter:{table:fd,tableData:Xs,tableHeader:Xs,tableRow:dd},exit:{codeText:hd,table:md,tableData:qi,tableHeader:qi,tableRow:qi}}}function fd(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=true;}function md(e){this.exit(e),this.data.inTable=void 0;}function dd(e){this.enter({type:"tableRow",children:[]},e);}function qi(e){this.exit(e);}function Xs(e){this.enter({type:"tableCell",children:[]},e);}function hd(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,gd));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e);}function gd(e,t){return t==="|"?t:e}function Ki(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?" ":"|";return {unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:true,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:true,character:":",after:"-"},{atBreak:true,character:"-",after:"[:|-]"}],handlers:{inlineCode:m,table:o,tableCell:s,tableRow:l}};function o(f,d,y,_){return c(p(f,y,_),f.align)}function l(f,d,y,_){let v=u(f,y,_),b=c([v]);return b.slice(0,b.indexOf(`
`))}function s(f,d,y,_){let v=y.enter("tableCell"),b=y.enter("phrasing"),S=y.containerPhrasing(f,{..._,before:a,after:a});return b(),v(),S}function c(f,d){return Cs(f,{align:d,alignDelimiters:r,padding:n,stringLength:i})}function p(f,d,y){let _=f.children,v=-1,b=[],S=d.enter("table");for(;++v<_.length;)b[v]=u(_[v],d,y);return S(),b}function u(f,d,y){let _=f.children,v=-1,b=[],S=d.enter("tableRow");for(;++v<_.length;)b[v]=s(_[v],f,d,y);return S(),b}function m(f,d,y){let _=pn.inlineCode(f,d,y);return y.stack.includes("tableCell")&&(_=_.replace(/\|/g,"\\$&")),_}}function Xi(){return {exit:{taskListCheckValueChecked:Gs,taskListCheckValueUnchecked:Gs,paragraph:vd}}}function Gi(){return {unsafe:[{atBreak:true,character:"-",after:"[:|-]"}],handlers:{listItem:yd}}}function Gs(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked";}function vd(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let i=t.children,a=-1,o;for(;++a<i.length;){let l=i[a];if(l.type==="paragraph"){o=l;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)));}}this.exit(e);}function yd(e,t,n,r){let i=e.children[0],a=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",l=n.createTracker(r);a&&l.move(o);let s=pn.listItem(e,t,n,{...r,...l.current()});return a&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,c)),s;function c(p){return p+o}}function Ji(){return [Ii(),Pi(),Mi(),Yi(),Xi()]}function Qi(e){return {extensions:[Ti(),Li(e),Ri(),Ki(e),Gi()]}}var xd={tokenize:zd,partial:true},Js={tokenize:Sd,partial:true},Qs={tokenize:Cd,partial:true},Zs={tokenize:Ed,partial:true},bd={tokenize:Ad,partial:true},ec={name:"wwwAutolink",tokenize:kd,previous:nc},tc={name:"protocolAutolink",tokenize:_d,previous:rc},We={name:"emailAutolink",tokenize:wd,previous:ic},De={};function eo(){return {text:De}}var xt=48;for(;xt<123;)De[xt]=We,xt++,xt===58?xt=65:xt===91&&(xt=97);De[43]=We;De[45]=We;De[46]=We;De[95]=We;De[72]=[We,tc];De[104]=[We,tc];De[87]=[We,ec];De[119]=[We,ec];function wd(e,t,n){let r=this,i,a;return o;function o(u){return !Zi(u)||!ic.call(r,r.previous)||to(r.events)?n(u):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(u))}function l(u){return Zi(u)?(e.consume(u),l):u===64?(e.consume(u),s):n(u)}function s(u){return u===46?e.check(bd,p,c)(u):u===45||u===95||oe(u)?(a=true,e.consume(u),s):p(u)}function c(u){return e.consume(u),i=true,s}function p(u){return a&&i&&pe(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(u)):n(u)}}function kd(e,t,n){let r=this;return i;function i(o){return o!==87&&o!==119||!nc.call(r,r.previous)||to(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(xd,e.attempt(Js,e.attempt(Qs,a),n),n)(o))}function a(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function _d(e,t,n){let r=this,i="",a=false;return o;function o(u){return (u===72||u===104)&&rc.call(r,r.previous)&&!to(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(u),e.consume(u),l):n(u)}function l(u){if(pe(u)&&i.length<5)return i+=String.fromCodePoint(u),e.consume(u),l;if(u===58){let m=i.toLowerCase();if(m==="http"||m==="https")return e.consume(u),s}return n(u)}function s(u){return u===47?(e.consume(u),a?c:(a=true,s)):n(u)}function c(u){return u===null||pt(u)||X(u)||Re(u)||ft(u)?n(u):e.attempt(Js,e.attempt(Qs,p),n)(u)}function p(u){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(u)}}function zd(e,t,n){let r=0;return i;function i(o){return (o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),a):n(o)}function a(o){return o===null?n(o):t(o)}}function Sd(e,t,n){let r,i,a;return o;function o(c){return c===46||c===95?e.check(Zs,s,l)(c):c===null||X(c)||Re(c)||c!==45&&ft(c)?s(c):(a=true,e.consume(c),o)}function l(c){return c===95?r=true:(i=r,r=void 0),e.consume(c),o}function s(c){return i||r||!a?n(c):t(c)}}function Cd(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(Zs,t,a)(o):o===null||X(o)||Re(o)?t(o):(e.consume(o),i)}function a(o){return o===41&&r++,e.consume(o),i}}function Ed(e,t,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),a):l===93?(e.consume(l),i):l===60||l===null||X(l)||Re(l)?t(l):n(l)}function i(l){return l===null||l===40||l===91||X(l)||Re(l)?t(l):r(l)}function a(l){return pe(l)?o(l):n(l)}function o(l){return l===59?(e.consume(l),r):pe(l)?(e.consume(l),o):n(l)}}function Ad(e,t,n){return r;function r(a){return e.consume(a),i}function i(a){return oe(a)?n(a):t(a)}}function nc(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||X(e)}function rc(e){return !pe(e)}function ic(e){return !(e===47||Zi(e))}function Zi(e){return e===43||e===45||e===46||e===95||oe(e)}function to(e){let t=e.length,n=false;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=true;break}if(r._gfmAutolinkLiteralWalkedInto){n=false;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=true),n}var Id={tokenize:Dd,partial:true};function no(){return {document:{91:{name:"gfmFootnoteDefinition",tokenize:Md,continuation:{tokenize:Rd},exit:Nd}},text:{91:{name:"gfmFootnoteCall",tokenize:Ld},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Td,resolveTo:Pd}}}}function Td(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let s=r.events[i][1];if(s.type==="labelImage"){o=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return l;function l(s){if(!o||!o._balanced)return n(s);let c=ve(r.sliceSerialize({start:o.end,end:r.now()}));return c.codePointAt(0)!==94||!a.includes(c.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function Pd(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;let o={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},s=[e[n+1],e[n+2],["enter",i,t],e[n+3],e[n+4],["enter",a,t],["exit",a,t],["enter",o,t],["enter",l,t],["exit",l,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(n,e.length-n+1,...s),e}function Ld(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return l;function l(u){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),s}function s(u){return u!==94?n(u):(e.enter("gfmFootnoteCallMarker"),e.consume(u),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c)}function c(u){if(a>999||u===93&&!o||u===null||u===91||X(u))return n(u);if(u===93){e.exit("chunkString");let m=e.exit("gfmFootnoteCallString");return i.includes(ve(r.sliceSerialize(m)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(u)}return X(u)||(o=true),a++,e.consume(u),u===92?p:c}function p(u){return u===91||u===92||u===93?(e.consume(u),a++,c):c(u)}}function Md(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,l;return s;function s(d){return e.enter("gfmFootnoteDefinition")._container=true,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(d),e.exit("gfmFootnoteDefinitionLabelMarker"),c}function c(d){return d===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(d),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",p):n(d)}function p(d){if(o>999||d===93&&!l||d===null||d===91||X(d))return n(d);if(d===93){e.exit("chunkString");let y=e.exit("gfmFootnoteDefinitionLabelString");return a=ve(r.sliceSerialize(y)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(d),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),m}return X(d)||(l=true),o++,e.consume(d),d===92?u:p}function u(d){return d===91||d===92||d===93?(e.consume(d),o++,p):p(d)}function m(d){return d===58?(e.enter("definitionMarker"),e.consume(d),e.exit("definitionMarker"),i.includes(a)||i.push(a),R(e,f,"gfmFootnoteDefinitionWhitespace")):n(d)}function f(d){return t(d)}}function Rd(e,t,n){return e.check(Ne,t,e.attempt(Id,t,n))}function Nd(e){e.exit("gfmFootnoteDefinition");}function Dd(e,t,n){let r=this;return R(e,i,"gfmFootnoteDefinitionIndent",5);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],true).length===4?t(a):n(a)}}function ro(e){let n=(e||{}).singleTilde,r={name:"strikethrough",tokenize:a,resolveAll:i};return n==null&&(n=true),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,l){let s=-1;for(;++s<o.length;)if(o[s][0]==="enter"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._close){let c=s;for(;c--;)if(o[c][0]==="exit"&&o[c][1].type==="strikethroughSequenceTemporary"&&o[c][1]._open&&o[s][1].end.offset-o[s][1].start.offset===o[c][1].end.offset-o[c][1].start.offset){o[s][1].type="strikethroughSequence",o[c][1].type="strikethroughSequence";let p={type:"strikethrough",start:Object.assign({},o[c][1].start),end:Object.assign({},o[s][1].end)},u={type:"strikethroughText",start:Object.assign({},o[c][1].end),end:Object.assign({},o[s][1].start)},m=[["enter",p,l],["enter",o[c][1],l],["exit",o[c][1],l],["enter",u,l]],f=l.parser.constructs.insideSpan.null;f&&se(m,m.length,0,Je(f,o.slice(c+1,s),l)),se(m,m.length,0,[["exit",u,l],["enter",o[s][1],l],["exit",o[s][1],l],["exit",p,l]]),se(o,c-1,s-c+3,m),s=c+m.length-2;break}}for(s=-1;++s<o.length;)o[s][1].type==="strikethroughSequenceTemporary"&&(o[s][1].type="data");return o}function a(o,l,s){let c=this.previous,p=this.events,u=0;return m;function m(d){return c===126&&p[p.length-1][1].type!=="characterEscape"?s(d):(o.enter("strikethroughSequenceTemporary"),f(d))}function f(d){let y=$e(c);if(d===126)return u>1?s(d):(o.consume(d),u++,f);if(u<2&&!n)return s(d);let _=o.exit("strikethroughSequenceTemporary"),v=$e(d);return _._open=!v||v===2&&!!y,_._close=!y||y===2&&!!v,l(d)}}}var rr=class{constructor(){this.map=[];}add(t,n,r){Od(this,t,n,r);}consume(t){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(let a of i)t.push(a);i=r.pop();}this.map.length=0;}};function Od(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1;}e.map.push([t,n,r]);}}function oc(e,t){let n=false,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let a=r.length-1;r[a]=r[a]==="left"?"center":"right";}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=true);t+=1;}return r}function io(){return {flow:{null:{name:"table",tokenize:Fd,resolveAll:Ud}}}}function Fd(e,t,n){let r=this,i=0,a=0,o;return l;function l(w){let G=r.events.length-1;for(;G>-1;){let $=r.events[G][1].type;if($==="lineEnding"||$==="linePrefix")G--;else break}let B=G>-1?r.events[G][1].type:null,T=B==="tableHead"||B==="tableRow"?k:s;return T===k&&r.parser.lazy[r.now().line]?n(w):T(w)}function s(w){return e.enter("tableHead"),e.enter("tableRow"),c(w)}function c(w){return w===124||(o=true,a+=1),p(w)}function p(w){return w===null?n(w):I(w)?a>1?(a=0,r.interrupt=true,e.exit("tableRow"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),f):n(w):D(w)?R(e,p,"whitespace")(w):(a+=1,o&&(o=false,i+=1),w===124?(e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),o=true,p):(e.enter("data"),u(w)))}function u(w){return w===null||w===124||X(w)?(e.exit("data"),p(w)):(e.consume(w),w===92?m:u)}function m(w){return w===92||w===124?(e.consume(w),u):u(w)}function f(w){return r.interrupt=false,r.parser.lazy[r.now().line]?n(w):(e.enter("tableDelimiterRow"),o=false,D(w)?R(e,d,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):d(w))}function d(w){return w===45||w===58?_(w):w===124?(o=true,e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),y):N(w)}function y(w){return D(w)?R(e,_,"whitespace")(w):_(w)}function _(w){return w===58?(a+=1,o=true,e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),v):w===45?(a+=1,v(w)):w===null||I(w)?L(w):N(w)}function v(w){return w===45?(e.enter("tableDelimiterFiller"),b(w)):N(w)}function b(w){return w===45?(e.consume(w),b):w===58?(o=true,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(w))}function S(w){return D(w)?R(e,L,"whitespace")(w):L(w)}function L(w){return w===124?d(w):w===null||I(w)?!o||i!==a?N(w):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(w)):N(w)}function N(w){return n(w)}function k(w){return e.enter("tableRow"),q(w)}function q(w){return w===124?(e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),q):w===null||I(w)?(e.exit("tableRow"),t(w)):D(w)?R(e,q,"whitespace")(w):(e.enter("data"),K(w))}function K(w){return w===null||w===124||X(w)?(e.exit("data"),q(w)):(e.consume(w),w===92?V:K)}function V(w){return w===92||w===124?(e.consume(w),K):K(w)}}function Ud(e,t){let n=-1,r=true,i=0,a=[0,0,0,0],o=[0,0,0,0],l=false,s=0,c,p,u,m=new rr;for(;++n<e.length;){let f=e[n],d=f[1];f[0]==="enter"?d.type==="tableHead"?(l=false,s!==0&&(ac(m,t,s,c,p),p=void 0,s=0),c={type:"table",start:Object.assign({},d.start),end:Object.assign({},d.end)},m.add(n,0,[["enter",c,t]])):d.type==="tableRow"||d.type==="tableDelimiterRow"?(r=true,u=void 0,a=[0,0,0,0],o=[0,n+1,0,0],l&&(l=false,p={type:"tableBody",start:Object.assign({},d.start),end:Object.assign({},d.end)},m.add(n,0,[["enter",p,t]])),i=d.type==="tableDelimiterRow"?2:p?3:1):i&&(d.type==="data"||d.type==="tableDelimiterMarker"||d.type==="tableDelimiterFiller")?(r=false,o[2]===0&&(a[1]!==0&&(o[0]=o[1],u=ir(m,t,a,i,void 0,u),a=[0,0,0,0]),o[2]=n)):d.type==="tableCellDivider"&&(r?r=false:(a[1]!==0&&(o[0]=o[1],u=ir(m,t,a,i,void 0,u)),a=o,o=[a[1],n,0,0])):d.type==="tableHead"?(l=true,s=n):d.type==="tableRow"||d.type==="tableDelimiterRow"?(s=n,a[1]!==0?(o[0]=o[1],u=ir(m,t,a,i,n,u)):o[1]!==0&&(u=ir(m,t,o,i,n,u)),i=0):i&&(d.type==="data"||d.type==="tableDelimiterMarker"||d.type==="tableDelimiterFiller")&&(o[3]=n);}for(s!==0&&ac(m,t,s,c,p),m.consume(t.events),n=-1;++n<t.events.length;){let f=t.events[n];f[0]==="enter"&&f[1].type==="table"&&(f[1]._align=oc(t.events,n));}return e}function ir(e,t,n,r,i,a){let o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(a.end=Object.assign({},Mt(t.events,n[0])),e.add(n[0],0,[["exit",a,t]]));let s=Mt(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",a,t]]),n[2]!==0){let c=Mt(t.events,n[2]),p=Mt(t.events,n[3]),u={type:l,start:Object.assign({},c),end:Object.assign({},p)};if(e.add(n[2],0,[["enter",u,t]]),r!==2){let m=t.events[n[2]],f=t.events[n[3]];if(m[1].end=Object.assign({},f[1].end),m[1].type="chunkText",m[1].contentType="text",n[3]>n[2]+1){let d=n[2]+1,y=n[3]-n[2]-1;e.add(d,y,[]);}}e.add(n[3]+1,0,[["exit",u,t]]);}return i!==void 0&&(a.end=Object.assign({},Mt(t.events,i)),e.add(i,0,[["exit",a,t]]),a=void 0),a}function ac(e,t,n,r,i){let a=[],o=Mt(t.events,n);i&&(i.end=Object.assign({},o),a.push(["exit",i,t])),r.end=Object.assign({},o),a.push(["exit",r,t]),e.add(n+1,0,a);}function Mt(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}var Bd={name:"tasklistCheck",tokenize:Hd};function oo(){return {text:{91:Bd}}}function Hd(e,t,n){let r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),a)}function a(s){return X(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),o):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),o):n(s)}function o(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(s)}function l(s){return I(s)?t(s):D(s)?e.check({tokenize:jd},t,n)(s):n(s)}}function jd(e,t,n){return R(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function lc(e){return Pn([eo(),no(),ro(e),io(),oo()])}var Vd={};function or(e){let t=this,n=e||Vd,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),a=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(lc(n)),a.push(Ji()),o.push(Qi(n));}var $d="2ec89b2-2026-11-24T15:47:23.040Z".split("-")[0],Wd="https://chat.converzen.de",sc=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"})}),cc=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),qd=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})}),Yd=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),Rt=({custom:e,fallback:t,className:n})=>e?x("span",{className:n,dangerouslySetInnerHTML:{__html:e}}):t,Kd=({title:e,subtitle:t,onClose:n,onClear:r,darkMode:i,icons:a,authControl:o,accessory:l})=>x("div",{className:`cvz-p-4 cvz-shadow-md cvz-flex cvz-justify-between cvz-items-start ${i?"cvz-bg-gradient-to-b cvz-from-gray-900 cvz-to-gray-800 cvz-text-white":"cvz-bg-gradient-to-b cvz-from-blue-600 cvz-to-blue-500 cvz-text-white"}`,children:[x("div",{className:"cvz-flex cvz-items-center cvz-gap-3",children:[x("div",{className:"cvz-relative",children:[x("div",{className:`cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-border-2 ${i?"cvz-border-gray-800":"cvz-border-blue-600"}`}),x("div",{className:"cvz-absolute cvz-top-0 cvz-left-0 cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-animate-ping cvz-opacity-75"})]}),x("div",{children:[x("h3",{className:"cvz-font-bold cvz-text-lg cvz-leading-tight",children:e}),t&&x("p",{className:`cvz-text-xs cvz-mt-0.5 ${i?"cvz-text-gray-300":"cvz-text-blue-100"}`,children:t})]})]}),x("div",{className:"cvz-flex cvz-gap-2 cvz-items-center",children:[l,o,x("button",{onClick:r,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Clear History",children:x(Rt,{custom:a?.clear,fallback:x(Yd,{}),className:"cvz-w-5 cvz-h-5"})}),x("button",{onClick:n,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Close Chat",children:x(Rt,{custom:a?.close,fallback:x(cc,{}),className:"cvz-w-6 cvz-h-6"})})]})]}),Xd=({content:e,enableMarkdown:t,darkMode:n})=>t?x("div",{className:"cvz-markdown-content",children:x(ki,{remarkPlugins:[or],components:{p:({children:r})=>x("p",{className:`cvz-mb-2 cvz-last:cvz-mb-0 ${n?"cvz-text-gray-100":""}`,children:r}),h1:({children:r})=>x("h1",{className:`cvz-text-xl cvz-font-bold cvz-mb-2 cvz-mt-4 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h2:({children:r})=>x("h2",{className:`cvz-text-lg cvz-font-bold cvz-mb-2 cvz-mt-3 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h3:({children:r})=>x("h3",{className:`cvz-text-base cvz-font-bold cvz-mb-1 cvz-mt-2 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),ul:({children:r})=>x("ul",{className:`cvz-list-disc cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),ol:({children:r})=>x("ol",{className:`cvz-list-decimal cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),li:({children:r})=>x("li",{className:"cvz-ml-2",children:r}),code:({children:r})=>x("code",{className:`cvz-px-1 cvz-py-0.5 cvz-rounded cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),pre:({children:r})=>x("pre",{className:`cvz-p-2 cvz-rounded cvz-overflow-x-auto cvz-mb-2 cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),blockquote:({children:r})=>x("blockquote",{className:`cvz-border-l-4 cvz-pl-3 cvz-italic cvz-mb-2 ${n?"cvz-border-gray-600 cvz-text-gray-300":"cvz-border-gray-300"}`,children:r}),strong:({children:r})=>x("strong",{className:"cvz-font-bold",children:r}),em:({children:r})=>x("em",{className:"cvz-italic",children:r}),a:({children:r,href:i})=>x("a",{href:i,className:`cvz-underline ${n?"cvz-text-blue-400 cvz-hover:cvz-text-blue-300":"cvz-text-blue-600 cvz-hover:cvz-text-blue-800"}`,target:"_blank",rel:"noopener noreferrer",children:r}),table:({children:r})=>x("div",{className:"cvz-overflow-x-auto cvz-mb-2",children:x("table",{className:`cvz-w-full cvz-text-sm cvz-border-collapse ${n?"cvz-text-gray-100":""}`,children:r})}),thead:({children:r})=>x("thead",{className:`${n?"cvz-bg-gray-700":"cvz-bg-gray-100"}`,children:r}),tbody:({children:r})=>x("tbody",{children:r}),tr:({children:r})=>x("tr",{className:`cvz-border-b ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:r}),th:({children:r})=>x("th",{className:`cvz-px-3 cvz-py-1.5 cvz-text-left cvz-font-semibold cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r}),td:({children:r})=>x("td",{className:`cvz-px-3 cvz-py-1.5 cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r})},children:e})}):Me("span",null,e),Gd="Anzeige",Jd=({cards:e,sponsoredLabel:t,darkMode:n})=>x("div",{className:"cvz-mt-2 cvz-flex cvz-flex-col cvz-gap-2","data-cvz-cards":true,children:e.map(r=>{let i=r.sponsored!==false;return x("a",{href:r.url,target:"_blank",rel:i?"sponsored noopener noreferrer":"noopener noreferrer",className:`cvz-flex cvz-gap-3 cvz-items-center cvz-p-2 cvz-rounded-xl cvz-border cvz-no-underline cvz-transition-colors ${n?"cvz-bg-gray-800 cvz-border-gray-700 cvz-text-gray-100 hover:cvz-bg-gray-700":"cvz-bg-white cvz-border-gray-200 cvz-text-gray-800 hover:cvz-bg-gray-50"}`,children:[r.imageUrl&&x("img",{src:r.imageUrl,alt:"",loading:"lazy",className:"cvz-w-12 cvz-h-12 cvz-rounded-lg cvz-object-cover cvz-flex-shrink-0"}),x("span",{className:"cvz-flex cvz-flex-col cvz-min-w-0 cvz-text-xs",children:[i&&x("span",{className:`cvz-uppercase cvz-tracking-wide cvz-font-semibold ${n?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:t||Gd}),x("span",{className:"cvz-font-semibold cvz-text-sm cvz-truncate",children:r.title}),r.description&&x("span",{className:n?"cvz-text-gray-300":"cvz-text-gray-600",children:r.description}),r.merchant&&x("span",{className:n?"cvz-text-gray-400":"cvz-text-gray-500",children:r.merchant})]})]},r.url)})}),Qd=({messages:e,isStreaming:t,streamingMessage:n,thinkingMessage:r,activeToolCall:i,isFinalizingRef:a,messagesEndRef:o,enableMarkdown:l,darkMode:s,icons:c,sponsoredLabel:p,interruptedLabel:u})=>{let m=ot(null),[f,d]=ge(true);return ze(()=>{let y=m.current;if(!y)return;let _=()=>{let{scrollTop:v,scrollHeight:b,clientHeight:S}=y,L=b-v-S<100;d(L);};return y.addEventListener("scroll",_),()=>y.removeEventListener("scroll",_)},[]),ze(()=>{f&&o.current&&o.current.scrollIntoView({behavior:"smooth"});},[e,n,r,i,f,o]),x("div",{ref:m,className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-4 cvz-space-y-4 ${s?"cvz-bg-gray-900 cvz-scrollbar-dark":"cvz-bg-gray-50 cvz-scrollbar-light"}`,children:[e.length===0&&!n&&x("div",{className:`cvz-flex cvz-flex-col cvz-items-center cvz-justify-center cvz-h-full cvz-space-y-2 ${s?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:[x(Rt,{custom:c?.launcher,fallback:x(sc,{}),className:"cvz-w-6 cvz-h-6"}),x("p",{className:"cvz-text-sm",children:"Start a conversation"})]}),e.map(y=>x("div",{children:[x("div",{className:`cvz-flex ${y.role==="USER"?"cvz-justify-end":"cvz-justify-start"}`,children:x("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-text-sm cvz-shadow-sm ${y.role==="USER"?s?"cvz-bg-blue-500 cvz-text-white cvz-rounded-br-none":"cvz-bg-blue-600 cvz-text-white cvz-rounded-br-none":s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border cvz-border-gray-700 cvz-rounded-bl-none":"cvz-bg-white cvz-text-gray-800 cvz-border cvz-border-gray-100 cvz-rounded-bl-none"}`,children:x(Xd,{content:y.content,enableMarkdown:l,darkMode:s})})}),y.role==="ASSISTANT"&&y.interrupted&&x("div",{className:`cvz-mt-1 cvz-ml-1 cvz-text-[11px] cvz-italic ${s?"cvz-text-gray-500":"cvz-text-gray-400"}`,"data-cvz-interrupted":true,children:u||"Interrupted"}),y.role==="ASSISTANT"&&y.cards&&y.cards.length>0&&x("div",{className:"cvz-flex cvz-justify-start",children:x("div",{className:"cvz-max-w-[85%] cvz-w-full",children:x(Jd,{cards:y.cards,sponsoredLabel:p,darkMode:s})})})]},y.createdAt.toString())),t&&n&&!a.current&&x("div",{className:"cvz-flex cvz-justify-start",children:x("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-text-sm cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border-gray-700":"cvz-bg-white cvz-text-gray-800 cvz-border-gray-100"}`,children:n})}),t&&!n&&x("div",{className:"cvz-flex cvz-justify-start",children:x("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:i?x("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:["Calling ",i,"\u2026"]}):r?x("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:r}):x("div",{className:"cvz-flex cvz-space-x-1",children:[x("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"0ms"}}),x("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"150ms"}}),x("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"300ms"}})]})})}),x("div",{ref:o})]})},Zd=({value:e,onChange:t,onSubmit:n,isLoading:r,placeholder:i,darkMode:a,icons:o,accessory:l})=>x("form",{onSubmit:n,className:`cvz-p-4 cvz-border-t ${a?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:[x("div",{className:"cvz-flex cvz-items-center cvz-gap-2",children:[l,x("div",{className:"cvz-relative cvz-flex cvz-items-center cvz-flex-1",children:[x("input",{type:"text",value:e,onChange:s=>t(s.target.value),placeholder:i,className:`cvz-w-full cvz-border cvz-text-sm cvz-rounded-full cvz-pl-4 cvz-pr-12 cvz-py-3 cvz-focus:cvz-outline-none cvz-focus:cvz-ring-1 cvz-transition-all ${a?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100 cvz-placeholder-gray-400 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500":"cvz-bg-gray-50 cvz-border-gray-200 cvz-text-gray-900 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500"}`}),x("button",{type:"submit",disabled:!e.trim()||r,className:`cvz-absolute cvz-right-2 cvz-p-2 cvz-text-white cvz-rounded-full cvz-disabled:cvz-opacity-50 cvz-transition-colors cvz-shadow-sm ${a?"cvz-bg-blue-500 cvz-hover:cvz-bg-blue-600 cvz-disabled:cvz-hover:cvz-bg-blue-500":"cvz-bg-blue-600 cvz-hover:cvz-bg-blue-700 cvz-disabled:cvz-hover:cvz-bg-blue-600"}`,children:x(Rt,{custom:o?.send,fallback:x(qd,{}),className:"cvz-w-5 cvz-h-5"})})]})]}),x("div",{className:"cvz-text-center cvz-mt-2",children:x("p",{className:`cvz-text-[10px] ${a?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:["Powered by ConverZen",x("span",{className:a?"cvz-text-gray-600":"cvz-text-gray-300",children:[" \xB7 ",$d]})]})})]}),uc=({config:e,core:t,headerAccessory:n,inputAccessory:r,footer:i})=>{let[a,o]=ge(""),[l,s]=ge(false),c=ot(null),p=async b=>{if(b?.preventDefault(),!a.trim()||t.isStreaming)return;let S=a;o(""),await t.sendMessage(S);},u=async()=>{window.confirm("Are you sure you want to clear your chat history?")&&await t.clearHistory();},m=ia(e.style),f=oa(e.style),d=aa(e.style),y=la(e.style,t.isOpen),_=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="bottom-left")||typeof e.style.position=="object"&&e.style.position.bottom,v=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="top-right")||typeof e.style.position=="object"&&e.style.position.right;return x("div",{className:"cvz-fixed cvz-z-[9999] cvz-font-sans",style:m,children:[x("div",{className:`
          cvz-absolute cvz-rounded-2xl cvz-shadow-2xl cvz-flex cvz-flex-col cvz-overflow-hidden
          cvz-transition-all cvz-duration-300
          ${e.darkMode?"cvz-bg-gray-800":"cvz-bg-white"}
          ${_?"cvz-bottom-20":"cvz-top-20"}
          ${v?"cvz-right-0":"cvz-left-0"}
          ${_&&v?"cvz-origin-bottom-right":_&&!v?"cvz-origin-bottom-left":!_&&v?"cvz-origin-top-right":"cvz-origin-top-left"}
          ${t.isOpen?"cvz-opacity-100 cvz-scale-100 cvz-translate-y-0":"cvz-opacity-0 cvz-scale-95 cvz-translate-y-4 cvz-pointer-events-none"}
        `,style:{...f,borderColor:d,borderWidth:"1px",borderStyle:"solid"},children:[x(Kd,{title:e.headerMsg||"Support Chat",subtitle:e.subheaderMsg||"We typically reply in a few minutes",onClose:()=>t.close(),onClear:u,darkMode:e.darkMode,icons:e.icons,accessory:n,authControl:e.endUserLicensing?x("button",{onClick:()=>s(true),className:`cvz-text-xs cvz-font-medium cvz-px-2 cvz-py-1 cvz-rounded-md cvz-transition-colors cvz-whitespace-nowrap ${e.darkMode?"cvz-text-gray-200 hover:cvz-bg-gray-700/50":"cvz-text-white hover:cvz-bg-blue-600/50"}`,title:t.endUserAuth?`Signed in as ${t.endUserAuth.email}`:"Authenticate",children:t.endUserAuth?"Account":"Authenticate"}):void 0}),x("div",{ref:b=>t.setCaptchaContainer(b),className:`cvz-flex cvz-justify-center cvz-overflow-hidden cvz-transition-all cvz-duration-200 ${t.captchaPending?"cvz-max-h-32 cvz-py-2":"cvz-max-h-0 cvz-py-0"}`}),x(Qd,{messages:t.messages,isStreaming:t.isStreaming,streamingMessage:t.streamingMessage,thinkingMessage:t.thinkingMessage,activeToolCall:t.activeToolCall,isFinalizingRef:t.isFinalizingRef,messagesEndRef:c,enableMarkdown:e.enableMarkdown,darkMode:e.darkMode,icons:e.icons,sponsoredLabel:e.sponsoredLabel,interruptedLabel:e.voiceInterruptedLabel}),t.showAuthNudge&&!at(t.endUserAuth)&&x("div",{className:`cvz-px-4 cvz-py-2 cvz-text-xs cvz-flex cvz-items-center cvz-justify-between cvz-gap-2 ${e.darkMode?"cvz-bg-amber-900/40 cvz-text-amber-200":"cvz-bg-amber-50 cvz-text-amber-800"}`,children:[x("span",{children:"You've reached the free limit - authenticate to keep chatting."}),x("button",{onClick:()=>s(true),className:"cvz-underline cvz-font-medium cvz-shrink-0",children:"Authenticate"})]}),x(Zd,{value:a,onChange:o,onSubmit:p,isLoading:t.isLoading||t.isStreaming,placeholder:e.promptPlaceholder||"Type a message...",darkMode:e.darkMode,icons:e.icons,accessory:r}),i,e.endUserLicensing&&x(ra,{open:l,onClose:()=>s(false),darkMode:e.darkMode,baseUrl:e.chatUrl||Wd,getBaseAuth:()=>t.getTenantAuthToken(),endUserAuth:t.endUserAuth,onAuthenticated:t.authenticateEndUser,initialEmail:Go()??void 0})]}),x("button",{onClick:()=>t.isOpen?t.close():t.open(),className:`
          cvz-flex cvz-items-center cvz-justify-center
          cvz-w-14 cvz-h-14 cvz-rounded-full cvz-shadow-lg cvz-transition-all cvz-duration-300
          ${t.isOpen?"cvz-rotate-90":"cvz-hover:cvz-scale-105"}
        `,style:{backgroundColor:y.backgroundColor},onMouseEnter:b=>{!t.isOpen&&e.style?.buttonColor?.hover&&(b.currentTarget.style.backgroundColor=e.style.buttonColor.hover);},onMouseLeave:b=>{t.isOpen||(b.currentTarget.style.backgroundColor=y.backgroundColor);},children:x("div",{className:"cvz-text-white",children:t.isOpen?x(Rt,{custom:e.icons?.close,fallback:x(cc,{}),className:"cvz-w-6 cvz-h-6"}):x(Rt,{custom:e.icons?.launcher,fallback:x(sc,{}),className:"cvz-w-6 cvz-h-6"})})})]})};async function*eh(e){let t=new TextDecoder,n="",r=0;try{for(;;){let{done:i,value:a}=await e.read();if(i){if(n.trim()){let l=th(n);for(let s of l)r+=1,yield s;}break}n+=t.decode(a,{stream:!0});let o=n.split(`
`);n=o.pop()||"";for(let l of o)if(l.startsWith("data: ")){let s=l.slice(6).trim();if(s)try{let c=JSON.parse(s);r+=1,yield c;}catch(c){console.error("Failed to parse SSE data:",s,c);}}}}finally{e.releaseLock(),console.log(`parseSSEStream: yielded ${r} events`);}}function th(e){let t=[],n=e.split(`
`);for(let r of n)if(r.startsWith("data: ")){let i=r.slice(6).trim();if(i)try{t.push(JSON.parse(i));}catch(a){console.error("Failed to parse SSE data:",i,a);}}return t}async function*pc(e){let{baseUrl:t,message:n,sessionId:r,persona:i,authToken:a,authType:o,maxTokens:l,clientId:s,extraContext:c,abortSignal:p}=e,u={"Content-Type":"application/json",Accept:"text/event-stream"};s&&(u["X-Client-Id"]=s),o==="apiKey"?u["X-API-Key"]=a:u.Authorization=`Bearer ${a}`;let m={message:n};!r&&o==="apiKey"&&i&&(m.persona=typeof i=="string"?{alias:i}:i),r&&(m.session=r),l&&(m.max_tokens=l),c&&Object.assign(m,c);let f;r?f="/api/chat/continuation/stream":f="/api/chat/completion/stream";let d=await fetch(`${t}${f}`,{method:"POST",headers:u,body:JSON.stringify(m),signal:p});if(!d.ok){let _=`HTTP ${d.status}: ${d.statusText}`;try{console.error(`error from completion: ${d.status} : ${d.statusText}`),_=(await d.json()).message||_;}catch{}yield {type:"error",message:`${d.status} ${_}`};return}if(!d.body){yield {type:"error",message:"No response body received"};return}let y=d.body.getReader();yield*eh(y);}var so="cvz_client_id",Nt="cvz_client_id_v2",fn="cvz_client_id_captcha_gated",mc="cvz_client_id_last_forced_reissue",dc="issue_client_id";var nh=["invalid client_id","client_id does not belong to this account"];function rh(e){return typeof e=="object"&&e!==null&&"provider"in e&&"site_key"in e}function Ot(e){try{return localStorage.getItem(e)}catch{return null}}function Ft(e,t){try{localStorage.setItem(e,t);}catch{}}function tt(e,t){return `${e}:${t}`}function Dt(e){try{localStorage.removeItem(e);}catch{}}function ih(e){return Ot(tt(fn,e))==="1"}function oh(e,t){Ft(tt(fn,e),t?"1":"0");}function ah(e){let t=Ot(Nt);if(!t)return null;Ft(tt(Nt,e),t);let n=Ot(fn);return n!==null&&Ft(tt(fn,e),n),Dt(Nt),Dt(fn),Dt(mc),t}function hc(e){let t=e instanceof Error?e.message:typeof e=="string"?e:"";return nh.some(n=>t.includes(n))}function lh(){let e=Ot(so);if(e)return e;let t=crypto.randomUUID();return Ft(so,t),t}var ao=null;function sh(e){return ao||(ao=new Promise((t,n)=>{let r=document.createElement("script");r.src=`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(e)}`,r.async=true,r.onload=()=>t(),r.onerror=()=>n(new Error("failed to load reCAPTCHA script")),document.head.appendChild(r);})),ao}async function ch(e){return await sh(e),new Promise((t,n)=>{if(!window.grecaptcha){n(new Error("grecaptcha unavailable after script load"));return}window.grecaptcha.ready(()=>{window.grecaptcha.execute(e,{action:dc}).then(t,n);});})}var lo=null;function uh(){return lo||(lo=new Promise((e,t)=>{let n=document.createElement("script");n.src="https://challenges.cloudflare.com/turnstile/v0/api.js",n.async=true,n.onload=()=>e(),n.onerror=()=>t(new Error("failed to load Turnstile script")),document.head.appendChild(n);})),lo}async function ph(e,t){return await uh(),new Promise((n,r)=>{if(!window.turnstile){r(new Error("turnstile unavailable after script load"));return}let i=t?.getContainer?.()??null,a=i??document.createElement("div"),o=!i;o?(a.style.position="fixed",a.style.top="-9999px",a.style.left="-9999px",document.body.appendChild(a)):a.replaceChildren();let l,s=()=>{t?.onPending?.(false),l&&window.turnstile?.remove(l),o&&a.remove();};t?.onPending?.(true),l=window.turnstile.render(a,{sitekey:e,action:dc,callback:c=>{n(c),s();},"error-callback":c=>{r(c instanceof Error?c:new Error("Turnstile challenge failed")),s();}});})}function fh(e,t,n){return e==="recaptcha_v3"?ch(t):ph(t,n)}function fc(e,t,n){return fetch(`${e}/api/chat/client_id`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_public_id:t,...n?{recaptcha_token:n}:{}})})}async function co(e,t,n){if(!t)return lh();let r=Ot(tt(Nt,t))??ah(t);if(r)return r;try{let i=await fc(e,t),a=!1;if(i.status===400){let l=await i.json();if(rh(l)){a=!0;let s=await fh(l.provider,l.site_key,n);i=await fc(e,t,s);}else return console.warn("cvzWidget: client_id issuance failed (400)"),null}if(!i.ok)return console.warn(`cvzWidget: client_id issuance failed (${i.status})`),null;oh(t,a);let o=await i.json();return Ft(tt(Nt,t),o.client_id),Dt(so),o.client_id}catch(i){return console.warn("cvzWidget: client_id issuance failed",i),null}}async function gc(e,t,n){if(!t)return null;let r=tt(Nt,t),i=tt(mc,t);if(!ih(t)){let a=Number(Ot(i)??"0");if(Date.now()-a<36e5)return Dt(r),null}return Ft(i,String(Date.now())),Dt(r),co(e,t,n)}var mh="cvz_chat_history";function dh(e){let t=new TextEncoder().encode(e),n="";return t.forEach(r=>{n+=String.fromCharCode(r);}),btoa(n)}function hh(e){let t=atob(e),n=Uint8Array.from(t,r=>r.charCodeAt(0));return new TextDecoder().decode(n)}function uo(e=mh){async function t(r,i){try{localStorage.setItem(e,dh(JSON.stringify({sessionId:r,messages:i})));}catch{}}async function n(){let r={sessionId:"",messages:[]};try{let i=localStorage.getItem(e);if(!i)return r;let a;try{a=JSON.parse(hh(i));}catch{a=JSON.parse(i);}return {sessionId:a.sessionId||"",messages:a.messages||[]}}catch{return r}}return {save:t,load:n}}var qe={rate_limited:"You've reached the usage limit for this assistant. Please try again later.",mic_denied:"Microphone access was blocked. Allow the microphone for this site to talk.",no_mic:"No microphone was found.",unavailable:"Voice is not available right now. Please try again in a moment.",connection_lost:"The voice connection was lost."},Ye=class extends Error{constructor(n,r,i){super(i??r);this.kind=n;this.userMessage=r;this.name="VoiceStartError";}};async function gh(e){let t=(await e.text().catch(()=>"")).trim();if(!t||t.startsWith("<"))return "";try{let n=JSON.parse(t);if(typeof n=="string")return n.trim();if(n&&typeof n=="object"){let{message:r,error:i}=n;return (typeof r=="string"?r:typeof i=="string"?i:"").trim()}return ""}catch{return t}}async function ar(e,t){let n=await gh(e),r=`${t} rejected (${e.status})${n?`: ${n}`:""}`;return e.status===429?new Ye("rate_limited",n.slice(0,500)||qe.rate_limited,r):new Ye("unavailable",qe.unavailable,r)}function yc(e){let t=e?.name,n=`microphone: ${e instanceof Error?`${e.name}: ${e.message}`:String(e)}`;return t==="NotAllowedError"||t==="SecurityError"?new Ye("mic_denied",qe.mic_denied,n):t==="NotFoundError"||t==="OverconstrainedError"?new Ye("no_mic",qe.no_mic,n):new Ye("unavailable",qe.unavailable,n)}function xc(e){return e instanceof Ye?e:new Ye("unavailable",qe.unavailable,e instanceof Error?e.message:String(e))}var Ut="https://chat.converzen.de",bc="Hi, how can I help you ?",vh=5;function wc(e){return typeof e=="string"&&/^https?:\/\//i.test(e.trim())}function po(e){return typeof e=="string"&&e.trim()?e.trim():void 0}function kc(e){if(!Array.isArray(e))return [];let t=[];for(let n of e){if(t.length>=vh)break;if(!n||typeof n!="object")continue;let r=n,i=po(r.title);!i||!wc(r.url)||t.push({title:i,url:r.url.trim(),description:po(r.description),imageUrl:wc(r.imageUrl)?r.imageUrl.trim():void 0,merchant:po(r.merchant),sponsored:r.sponsored!==false});}return t}function _c(e,t={}){let n=t.voiceSessionFactory,r=new Set,i=null,a={getContainer:()=>i,onPending:A=>u({captchaPending:A})},o={messages:[],sessionId:null,isOpen:e.autoOpen??false,isLoading:false,isStreaming:false,streamingMessage:"",thinkingMessage:"",activeToolCall:null,captchaPending:false,endUserAuth:(()=>{let A=Yo();return at(A)?A:null})(),showAuthNudge:false,voiceStatus:"idle",voiceStage:"idle",voiceError:null,voiceTts:null},l=null,s=null,c=false;function p(){r.forEach(A=>A());}function u(A){o={...o,...A},p();}let m={current:false},f=e.persistMessages!==false,d=uo(e.historyKey),y=e.onSaveMessages??(f?d.save:async()=>{}),_=e.onLoadMessages??(f?d.load:async()=>({sessionId:"",messages:[]})),v=null,b=null,S=null,L="",N=null,k="",q=null;function K(){if(!S){let A=e.chatUrl||Ut;S=co(A,e.publicId,a);}return S}async function V(A=false){if(e.apiKey)return {token:e.apiKey,type:"apiKey"};if(!e.getToken)throw new Error("Either apiKey or getToken must be provided");let F=e.getToken;if(!A){let te=Date.now()/1e3+5,ne=b;if(ne&&(ne.expiresAt==null||ne.expiresAt>te))return {token:ne.token,type:"bearer"}}let j=async()=>{let te=await F(await K());return typeof te=="string"?{token:te,expiresAt:void 0}:te},O;try{O=await j();}catch(te){if(!hc(te))throw te;let ne=e.chatUrl||Ut;S=Promise.resolve(await gc(ne,e.publicId,a)),O=await j();}return b=O,{token:O.token,type:"bearer"}}async function w(A=false){return !A&&at(o.endUserAuth)?{token:o.endUserAuth.token,type:"bearer"}:V(A)}function G(){let A=e.persona;return A?typeof A=="string"?{alias:A}:A:null}async function B(){if(!e.apiKey&&e.getToken)return (await V()).token;if(!e.apiKey)throw new Error("Either apiKey or getToken must be provided");let A=e.chatUrl||Ut,F=await K(),j=await fetch(`${A}/api/chat/get_token`,{method:"POST",headers:{"Content-Type":"application/json","X-API-Key":e.apiKey},body:JSON.stringify({user_id:"voice-widget",media_type:"voice",client_id:F??void 0,persona:G()})});if(!j.ok)throw await ar(j,"voice token request");let O=await j.json();if(!O||typeof O.token!="string")throw new Error("voice token response missing token");return O.token}async function T(A,F){let j=c;if(c=false,!A){u({voiceStage:"idle"});return}m.current=true;let O=o.messages,te=[...O].reverse().find(wt=>wt.role==="USER"),ne={content:A,role:"ASSISTANT",createdAt:new Date().toISOString(),...j?{interrupted:true}:{}},Pe=[...O,ne],we=F||o.sessionId||"";u({messages:Pe,sessionId:F||o.sessionId,voiceStage:"idle"}),setTimeout(()=>{m.current=false;},0),await y(we,Pe),he(te?.content??"",ne,we);}function $(A){switch(A.type){case "status":u({voiceStage:A.stage});break;case "input":{let F=A.text?.trim();if(!F)break;let j=[...o.messages,{content:F,role:"USER",createdAt:new Date().toISOString()}];if(u({messages:j}),y(o.sessionId||"",j),e.onUserMessage)try{e.onUserMessage({question:F,sessionId:o.sessionId});}catch(O){console.error("cvzWidget: onUserMessage failed",O);}break}case "response":T(A.text,A.session_id);break;case "interrupted":c=true;break;case "tts_state":u({voiceTts:A.enabled});break;case "duck":case "unduck":break;case "error":{c=false,H(A.message||"Voice error",{voiceStage:"idle"});break}}}function H(A,F={}){let j=[...o.messages,{content:A,role:"SYSTEM",createdAt:new Date().toISOString()}];u({...F,messages:j}),y(o.sessionId||"",j);}async function Z(A){if(n&&!(l||o.voiceStatus==="connecting"||o.voiceStatus==="connected")){u({voiceStatus:"connecting",voiceStage:"idle",voiceError:null,voiceTts:null}),c=false;try{let F=await B(),j=e.chatUrl||Ut;l=await n({baseUrl:j,token:F,sessionId:o.sessionId,audioElement:A,tts:s,callbacks:{onStatusChange:O=>u(O==="connected"?{voiceStatus:O}:{voiceStatus:O,voiceStage:"idle"}),onEvent:$,onError:O=>{console.warn("cvzVoiceWidget: voice connection failed:",O),l?.stop(),l=null,H(qe.connection_lost,{voiceError:qe.connection_lost});}}});}catch(F){l=null;let j=xc(F);console.warn("cvzVoiceWidget: voice could not start:",j.message);let O={voiceStatus:"failed",voiceStage:"idle",voiceError:j.userMessage};if(j.kind==="rate_limited"&&e.endUserLicensing){u({...O,showAuthNudge:true});return}H(j.userMessage,O);}}}function P(){l&&(l.stop(),l=null),u({voiceStatus:"stopped",voiceStage:"idle",voiceTts:null});}function ee(A){s=A,l?.send({type:"set_tts",enabled:A})&&u({voiceTts:A});}function de(A){if(o.voiceStatus!=="connected"||!l||!l.send({type:"text_input",text:A}))return  false;if(e.onUserMessage)try{e.onUserMessage({question:A,sessionId:o.sessionId});}catch(j){console.error("cvzWidget: onUserMessage failed",j);}let F=[...o.messages,{content:A,role:"USER",createdAt:new Date().toISOString()}];return u({messages:F,voiceStage:"thinking"}),y(o.sessionId||"",F),true}async function h(A,F,j,O=0){try{let ne=await w(O>0),Pe=e.chatUrl||Ut,we=o.sessionId||"",wt=pc({baseUrl:Pe,sessionId:we,message:A.content,persona:e.persona,authToken:ne.token,authType:ne.type,clientId:await K()??void 0,extraContext:e.extraContext,abortSignal:j.signal}),Ht="",jt=!1,nt=!1,rt=0,sr=350,z=async()=>{if(!rt)return;let C=sr-(Date.now()-rt);C>0&&await new Promise(M=>setTimeout(M,C));};for await(let C of wt){if(j.signal.aborted)break;switch(C.type){case "session_created":case "session_continued":C.session_id&&C.session_id!==we&&(we=C.session_id,u({sessionId:C.session_id}));break;case "thinking":C.content&&(nt||(rt=Date.now()),nt=!0,k+=C.content,q||(q=requestAnimationFrame(()=>{let M=k;k="",q=null,u({thinkingMessage:o.thinkingMessage+M});})));break;case "tool_call_started":C.name&&(await z(),nt=!0,rt=Date.now(),u({activeToolCall:C.name}));break;case "token":C.content&&(nt&&(await z(),nt=!1,rt=0,k="",u({thinkingMessage:"",activeToolCall:null})),L+=C.content,Ht+=C.content,N||(N=requestAnimationFrame(()=>{let M=L;L="",N=null,u({streamingMessage:o.streamingMessage+M});})));break;case "done":{if(Ht&&we){m.current=!0;let M={content:Ht,role:"ASSISTANT",createdAt:new Date().toISOString(),sources:C.sources},W=[...F,M];u({messages:W,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),k="",setTimeout(()=>{m.current=!1;},0),await y(we,W),he(A.content,M,we);}else u({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),k="";v=null;return}case "error":{let M=C.code||"",W=C.message||"",J=O===0&&at(o.endUserAuth);if((M==="auth_failed"||W.includes("401")||W.includes("403")||W.includes("Unauthorized")||W.includes("Forbidden"))&&O<1&&(e.getToken&&!e.apiKey||J)){b=null,J&&Fe(),jt=!0;break}if(M==="rate_limited"&&e.endUserLicensing){u({showAuthNudge:!0,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),k="",v=null;return}let ke={content:W||"An error occurred",role:"SYSTEM",createdAt:new Date().toISOString()},Le=[...F,ke];u({messages:Le,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),k="",await y(we||"",Le),v=null;return}}}if(jt&&O<1)return h(A,F,j,O+1);!j.signal.aborted&&!jt&&(u({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),k="",v=null);}catch(ne){let Pe=O===0&&at(o.endUserAuth);if(ne instanceof Error&&(ne.message.includes("401")||ne.message.includes("403"))&&O<1&&(e.getToken&&!e.apiKey||Pe))return b=null,Pe&&Fe(),h(A,F,j,O+1);throw ne}}function ce(A,F){if(F.length===0)return;let j=o.messages.indexOf(A);if(j===-1)return;let O=o.messages.slice();O[j]={...A,cards:F},u({messages:O}),y(o.sessionId||"",O).catch(te=>console.error("cvzWidget: failed to save cards",te));}function he(A,F,j){let O=e.onAssistantMessage;O&&Promise.resolve().then(()=>O({question:A,answer:F.content,sessionId:j})).then(te=>ce(F,kc(te))).catch(te=>console.error("cvzWidget: onAssistantMessage failed",te));}function g(A){let F=[...o.messages].reverse().find(j=>j.role==="ASSISTANT");F&&ce(F,kc(A));}async function me(A){if(!A.trim()||o.isStreaming||de(A.trim()))return;v&&v.abort();let F={content:A.trim(),role:"USER",createdAt:new Date().toISOString()};if(e.onUserMessage)try{e.onUserMessage({question:F.content,sessionId:o.sessionId});}catch(O){console.error("cvzWidget: onUserMessage failed",O);}let j=[...o.messages,F];u({messages:j,isLoading:true,isStreaming:true,streamingMessage:"",thinkingMessage:"",activeToolCall:null}),k="";try{let O=new AbortController;v=O,await h(F,j,O);}catch(O){if(O instanceof Error&&O.name==="AbortError"){u({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),k="",v=null;return}let te={content:`Error: ${O instanceof Error?O.message:"Failed to send message"}`,role:"SYSTEM",createdAt:new Date().toISOString()},ne=[...j,te];u({messages:ne,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),k="",await y(o.sessionId||"",ne),v=null;}}async function Oe(){v&&(v.abort(),v=null),u({messages:[{content:e.initialGreeting||bc,role:"SYSTEM",createdAt:new Date().toISOString()}],streamingMessage:"",thinkingMessage:"",activeToolCall:null,sessionId:null,isStreaming:false,isLoading:false}),k="",await y("",[]);}function Bt(){u({isOpen:true}),K();}function bt(){u({isOpen:false});}function ue(A){Ko(A),u({endUserAuth:A,showAuthNudge:false});}function Fe(){Xo(),u({endUserAuth:null});}function Ae(A){i=A;}if((async()=>{try{let A=await _(),F=[],j=null;A&&typeof A=="object"&&"messages"in A&&"sessionId"in A?(F=A.messages||[],j=A.sessionId||null):Array.isArray(A)&&(F=A),F.length===0&&(F=[{content:e.initialGreeting||bc,role:"SYSTEM",createdAt:new Date().toISOString()}]),u({sessionId:j,messages:F});}catch(A){console.error("Failed to load messages:",A);}})(),e.endUserLicensing){let A=Qo();if(A){let F=e.chatUrl||Ut;kn(F,A.pendingId).finally(()=>{Zo();});}}function Ue(){l&&(l.stop(),l=null),v&&(v.abort(),v=null),N&&(cancelAnimationFrame(N),N=null),q&&(cancelAnimationFrame(q),q=null);}return {getState:()=>o,subscribe(A){return r.add(A),()=>r.delete(A)},sendMessage:me,open:Bt,close:bt,clearHistory:Oe,authenticateEndUser:ue,deauthenticateEndUser:Fe,getTenantAuthToken:V,setCaptchaContainer:Ae,addCards:g,startVoice:Z,stopVoice:P,setVoiceTts:ee,isFinalizingRef:m,dispose:Ue}}async function zc(e){let{baseUrl:t,token:n,sessionId:r,audioElement:i,tts:a,callbacks:o}=e,l=b=>o.onLog?.(b),s;try{s=await navigator.mediaDevices.getUserMedia({audio:!0});}catch(b){throw yc(b)}let c=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),p=false,u=()=>{if(!p){p=true;try{c.close();}catch{}if(s.getTracks().forEach(b=>{try{b.stop();}catch{}}),i)try{i.srcObject=null;}catch{}}};c.oniceconnectionstatechange=()=>{let b=c.iceConnectionState;l(`ICE: ${b}`),b==="connected"||b==="completed"?o.onStatusChange("connected"):(b==="failed"||b==="disconnected")&&(o.onStatusChange("failed"),o.onError(`ICE ${b}`));},c.ontrack=b=>{l("remote audio track received"),i&&(i.srcObject=b.streams[0]);},s.getAudioTracks().forEach(b=>c.addTrack(b,s));let m=c.createDataChannel("events");m.onopen=()=>l("events data channel open"),m.onclose=()=>l("events data channel closed"),m.onmessage=b=>{if(typeof b.data=="string")try{o.onEvent(JSON.parse(b.data));}catch(S){l(`bad data-channel message: ${String(S)}`);}};let f=await c.createOffer();await c.setLocalDescription(f);let d=(r??"").trim()||null,y=await fetch(`${t}/api/voice/webrtc/offer`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(typeof a=="boolean"?{sdp:f.sdp,session_id:d,tts:a}:{sdp:f.sdp,session_id:d})});if(!y.ok)throw u(),await ar(y,"voice offer");let _=await y.json();return await c.setRemoteDescription({type:"answer",sdp:_.sdp}),l("remote description set - ICE checks starting"),{stop:u,send:b=>{if(p||m.readyState!=="open")return  false;try{return m.send(JSON.stringify(b)),!0}catch(S){return l(`data-channel send failed: ${String(S)}`),false}}}}var lr=null;function Sc(){return lr}function Cc(e){let t=bn(()=>_c(e,{voiceSessionFactory:zc}),[e]),n=$a(t.subscribe,t.getState);return ze(()=>(lr=t,()=>{lr===t&&(lr=null),t.dispose();}),[t]),{...n,sendMessage:t.sendMessage,open:t.open,close:t.close,clearHistory:t.clearHistory,authenticateEndUser:t.authenticateEndUser,deauthenticateEndUser:t.deauthenticateEndUser,getTenantAuthToken:t.getTenantAuthToken,setCaptchaContainer:t.setCaptchaContainer,addCards:t.addCards,startVoice:t.startVoice,stopVoice:t.stopVoice,setVoiceTts:t.setVoiceTts,isFinalizingRef:t.isFinalizingRef,dispose:t.dispose}}var yh=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"})}),xh=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"cvz-w-5 cvz-h-5",children:x("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2"})}),Ec=({active:e,connecting:t,onClick:n,label:r,darkMode:i})=>x("button",{type:"button",onClick:n,title:r||(e?"Stop voice":"Talk"),"aria-label":r||(e?"Stop voice":"Talk"),className:`cvz-flex cvz-items-center cvz-justify-center cvz-w-11 cvz-h-11 cvz-rounded-full cvz-shrink-0 cvz-transition-colors cvz-shadow-sm ${e?"cvz-bg-red-600 cvz-text-white cvz-hover:cvz-bg-red-700":i?"cvz-bg-gray-700 cvz-text-gray-100 cvz-hover:cvz-bg-gray-600":"cvz-bg-gray-100 cvz-text-gray-700 cvz-hover:cvz-bg-gray-200"} ${t?"cvz-animate-pulse":""}`,children:e?x(xh,{}):x(yh,{})}),bh=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-4 cvz-h-4",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"})}),wh=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-4 cvz-h-4",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"})}),Ac=({enabled:e,onToggle:t,darkMode:n})=>x("button",{type:"button",onClick:t,title:e?"Mute spoken replies":"Speak replies","aria-label":e?"Mute spoken replies":"Speak replies","aria-pressed":!e,className:`cvz-flex cvz-items-center cvz-justify-center cvz-w-7 cvz-h-7 cvz-rounded-full cvz-transition-colors ${n?"cvz-text-gray-100 cvz-hover:cvz-bg-white/10":"cvz-text-white cvz-hover:cvz-bg-white/20"}`,children:e?x(bh,{}):x(wh,{})}),kh={idle:"",listening:"Listening",transcribing:"Transcribing",thinking:"Thinking",speaking:"Speaking"},Ic=({status:e,stage:t,darkMode:n,error:r})=>{let i;if(e==="connecting")i="Connecting";else if(e==="failed")i="Voice error";else if(e==="connected")i=kh[t]||"Connected";else return null;return x("span",{title:e==="failed"&&r?r:void 0,className:`cvz-rounded-full cvz-px-2.5 cvz-py-1 cvz-text-[11px] cvz-font-medium cvz-whitespace-nowrap ${e==="failed"?"cvz-bg-red-500/20 cvz-text-red-100":n?"cvz-bg-white/10 cvz-text-gray-100":"cvz-bg-white/20 cvz-text-white"}`,children:i})};var _h=({config:e})=>{let t=Cc(e),n=ot(null),r=t.voiceStatus==="connecting"||t.voiceStatus==="connected",i=()=>{r?t.stopVoice():t.startVoice(n.current);},a=ot(false);return ze(()=>{e.voiceAutoStart&&(t.isOpen&&!a.current&&t.voiceStatus==="idle"&&(a.current=true,t.startVoice(n.current)),t.isOpen||(a.current=false));},[t.isOpen,e.voiceAutoStart]),x(uc,{config:e,core:t,headerAccessory:x("span",{className:"cvz-flex cvz-items-center cvz-gap-1",children:[x(Ic,{status:t.voiceStatus,stage:t.voiceStage,darkMode:e.darkMode,error:t.voiceError}),t.voiceStatus==="connected"&&t.voiceTts!==null&&x(Ac,{enabled:t.voiceTts,onToggle:()=>t.setVoiceTts(!t.voiceTts),darkMode:e.darkMode})]}),inputAccessory:x(Ec,{active:r,connecting:t.voiceStatus==="connecting",onClick:i,label:e.voiceButtonLabel,darkMode:e.darkMode}),footer:x("audio",{ref:n,autoPlay:true,style:{display:"none"}})})},Tc=_h;var zh="cvz-voice-widget-host",fo=class{hostElement=null;root=null;buildId="2ec89b2-2026-11-24T15:47:23.040Z";init(t){if(this.hostElement){console.warn("cvzVoiceWidget is already initialized.");return}console.log("init: Initializing cvzVoiceWidget...",this.buildId),{hostElement:this.hostElement,root:this.root}=Lo(t,Tc,zh);}addCards(t){let n=Sc();if(!n){console.warn("addCards: cvzVoiceWidget is not initialized.");return}n.addCards(t);}hide(){if(!this.hostElement){console.warn("hide: cvzVoiceWidget is not initialized.");return}this.root&&(Xt(null,this.root),this.root=null),this.hostElement&&(this.hostElement.remove(),this.hostElement=null);}},Pc=new fo;typeof window<"u"&&(window.cvzVoiceWidget=Pc);var AS=Pc;
export{AS as default};