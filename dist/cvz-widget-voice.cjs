'use strict';var Ec=Object.create;var ar=Object.defineProperty;var Ac=Object.getOwnPropertyDescriptor;var Ic=Object.getOwnPropertyNames;var Tc=Object.getPrototypeOf,Pc=Object.prototype.hasOwnProperty;var jt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),uo=(e,t)=>{for(var n in t)ar(e,n,{get:t[n],enumerable:true});},Lc=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ic(t))!Pc.call(e,i)&&i!==n&&ar(e,i,{get:()=>t[i],enumerable:!(r=Ac(t,i))||r.enumerable});return e};var po=(e,t,n)=>(n=e!=null?Ec(Tc(e)):{},Lc(ar(n,"default",{value:e,enumerable:true}),e));var ya=jt((Vg,va)=>{var ma=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,iu=/\n/g,ou=/^\s*/,au=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,lu=/^:\s*/,su=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,cu=/^[;\s]*/,uu=/^\s+|\s+$/g,pu=`
`,da="/",ha="*",at="",fu="comment",mu="declaration";function du(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return [];t=t||{};var n=1,r=1;function i(d){var y=d.match(iu);y&&(n+=y.length);var z=d.lastIndexOf(pu);r=~z?d.length-z:r+d.length;}function a(){var d={line:n,column:r};return function(y){return y.position=new o(d),c(),y}}function o(d){this.start=d,this.end={line:n,column:r},this.source=t.source;}o.prototype.content=e;function l(d){var y=new Error(t.source+":"+n+":"+r+": "+d);if(y.reason=d,y.filename=t.source,y.line=n,y.column=r,y.source=e,!t.silent)throw y}function s(d){var y=d.exec(e);if(y){var z=y[0];return i(z),e=e.slice(z.length),y}}function c(){s(ou);}function p(d){var y;for(d=d||[];y=u();)y!==false&&d.push(y);return d}function u(){var d=a();if(!(da!=e.charAt(0)||ha!=e.charAt(1))){for(var y=2;at!=e.charAt(y)&&(ha!=e.charAt(y)||da!=e.charAt(y+1));)++y;if(y+=2,at===e.charAt(y-1))return l("End of comment missing");var z=e.slice(2,y-2);return r+=2,i(z),e=e.slice(y),r+=2,d({type:fu,comment:z})}}function m(){var d=a(),y=s(au);if(y){if(u(),!s(lu))return l("property missing ':'");var z=s(su),v=d({type:mu,property:ga(y[0].replace(ma,at)),value:z?ga(z[0].replace(ma,at)):at});return s(cu),v}}function f(){var d=[];p(d);for(var y;y=m();)y!==false&&(d.push(y),p(d));return d}return c(),f()}function ga(e){return e?e.replace(uu,at):at}va.exports=du;});var xa=jt(Xt=>{var hu=Xt&&Xt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xt,"__esModule",{value:true});Xt.default=vu;var gu=hu(ya());function vu(e,t){let n=null;if(!e||typeof e!="string")return n;let r=(0, gu.default)(e),i=typeof t=="function";return r.forEach(a=>{if(a.type!=="declaration")return;let{property:o,value:l}=a;i?t(o,l,a):l&&(n=n||{},n[o]=l);}),n}});var wa=jt(Cn=>{Object.defineProperty(Cn,"__esModule",{value:true});Cn.camelCase=void 0;var yu=/^--[a-zA-Z0-9_-]+$/,xu=/-([a-z])/g,bu=/^[^-]+$/,wu=/^-(webkit|moz|ms|o|khtml)-/,ku=/^-(ms)-/,_u=function(e){return !e||bu.test(e)||yu.test(e)},zu=function(e,t){return t.toUpperCase()},ba=function(e,t){return "".concat(t,"-")},Su=function(e,t){return t===void 0&&(t={}),_u(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(ku,ba):e=e.replace(wu,ba),e.replace(xu,zu))};Cn.camelCase=Su;});var _a=jt((Mr,ka)=>{var Cu=Mr&&Mr.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Eu=Cu(xa()),Au=wa();function Lr(e,t){var n={};return !e||typeof e!="string"||(0, Eu.default)(e,function(r,i){r&&i&&(n[(0, Au.camelCase)(r,t)]=i);}),n}Lr.default=Lr;ka.exports=Lr;});var ls=jt((L0,as)=>{var Jn=Object.prototype.hasOwnProperty,os=Object.prototype.toString,Zl=Object.defineProperty,es=Object.getOwnPropertyDescriptor,ts=function(t){return typeof Array.isArray=="function"?Array.isArray(t):os.call(t)==="[object Array]"},ns=function(t){if(!t||os.call(t)!=="[object Object]")return  false;var n=Jn.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Jn.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return  false;var i;for(i in t);return typeof i>"u"||Jn.call(t,i)},rs=function(t,n){Zl&&n.name==="__proto__"?Zl(t,n.name,{enumerable:true,configurable:true,value:n.newValue,writable:true}):t[n.name]=n.newValue;},is=function(t,n){if(n==="__proto__")if(Jn.call(t,n)){if(es)return es(t,n).value}else return;return t[n]};as.exports=function e(){var t,n,r,i,a,o,l=arguments[0],s=1,c=arguments.length,p=false;for(typeof l=="boolean"&&(p=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<c;++s)if(t=arguments[s],t!=null)for(n in t)r=is(l,n),i=is(t,n),l!==i&&(p&&i&&(ns(i)||(a=ts(i)))?(a?(a=false,o=r&&ts(r)?r:[]):o=r&&ns(r)?r:{},rs(l,{name:n,newValue:e(p,o,i)})):typeof i<"u"&&rs(l,{name:n,newValue:i}));return l};});var dn,F,vo,tt,fo,yo,xo,bo,ur,lr,sr,Vt={},wo=[],Nc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,$t=Array.isArray;function Ue(e,t){for(var n in t)e[n]=t[n];return e}function pr(e){e&&e.parentNode&&e.parentNode.removeChild(e);}function Le(e,t,n){var r,i,a,o={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?dn.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return fn(e,o,r,i,null)}function fn(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++vo,__i:-1,__u:0};return i==null&&F.vnode!=null&&F.vnode(a),a}function Se(e){return e.children}function Te(e,t){this.props=e,this.context=t;}function wt(e,t){if(t==null)return e.__?wt(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?wt(e):null}function ko(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ko(e)}}function mo(e){(!e.__d&&(e.__d=true)&&tt.push(e)&&!mn.__r++||fo!=F.debounceRendering)&&((fo=F.debounceRendering)||yo)(mn);}function mn(){for(var e,t,n,r,i,a,o,l=1;tt.length;)tt.length>l&&tt.sort(xo),e=tt.shift(),l=tt.length,e.__d&&(n=void 0,r=void 0,i=(r=(t=e).__v).__e,a=[],o=[],t.__P&&((n=Ue({},r)).__v=r.__v+1,F.vnode&&F.vnode(n),fr(t.__P,n,r,t.__n,t.__P.namespaceURI,32&r.__u?[i]:null,a,i??wt(r),!!(32&r.__u),o),n.__v=r.__v,n.__.__k[n.__i]=n,So(a,n,o),r.__e=r.__=null,n.__e!=i&&ko(n)));mn.__r=0;}function _o(e,t,n,r,i,a,o,l,s,c,p){var u,m,f,d,y,z,v,k=r&&r.__k||wo,S=t.length;for(s=Dc(n,t,k,s,S),u=0;u<S;u++)(f=n.__k[u])!=null&&(m=f.__i==-1?Vt:k[f.__i]||Vt,f.__i=u,z=fr(e,f,m,i,a,o,l,s,c,p),d=f.__e,f.ref&&m.ref!=f.ref&&(m.ref&&mr(m.ref,null,f),p.push(f.ref,f.__c||d,f)),y==null&&d!=null&&(y=d),(v=!!(4&f.__u))||m.__k===f.__k?s=zo(f,s,e,v):typeof f.type=="function"&&z!==void 0?s=z:d&&(s=d.nextSibling),f.__u&=-7);return n.__e=y,s}function Dc(e,t,n,r,i){var a,o,l,s,c,p=n.length,u=p,m=0;for(e.__k=new Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[a]=fn(null,o,null,null,null):$t(o)?o=e.__k[a]=fn(Se,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=fn(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,s=a+m,o.__=e,o.__b=e.__b+1,l=null,(c=o.__i=Oc(o,n,s,u))!=-1&&(u--,(l=n[c])&&(l.__u|=2)),l==null||l.__v==null?(c==-1&&(i>p?m--:i<p&&m++),typeof o.type!="function"&&(o.__u|=4)):c!=s&&(c==s-1?m--:c==s+1?m++:(c>s?m--:m++,o.__u|=4))):e.__k[a]=null;if(u)for(a=0;a<p;a++)(l=n[a])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=wt(l)),Eo(l,l));return r}function zo(e,t,n,r){var i,a;if(typeof e.type=="function"){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=zo(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=wt(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Wt(e,t){return t=t||[],e==null||typeof e=="boolean"||($t(e)?e.some(function(n){Wt(n,t);}):t.push(e)),t}function Oc(e,t,n,r){var i,a,o,l=e.key,s=e.type,c=t[n],p=c!=null&&(2&c.__u)==0;if(c===null&&l==null||p&&l==c.key&&s==c.type)return n;if(r>(p?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((c=t[o=i>=0?i--:a++])!=null&&(2&c.__u)==0&&l==c.key&&s==c.type)return o}return  -1}function ho(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Nc.test(t)?n:n+"px";}function pn(e,t,n,r,i){var a,o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else {if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ho(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||ho(e.style,t,n[t]);}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(bo,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n.u=r.u:(n.u=ur,e.addEventListener(t,a?sr:lr,a)):e.removeEventListener(t,a?sr:lr,a);else {if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===false&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n));}}function go(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ur++;else if(t.t<n.u)return;return n(F.event?F.event(t):t)}}}function fr(e,t,n,r,i,a,o,l,s,c){var p,u,m,f,d,y,z,v,k,S,L,N,_,V,Y,H,b,G=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),a=[l=t.__e=n.__e]),(p=F.__b)&&p(t);e:if(typeof G=="function")try{if(v=t.props,k="prototype"in G&&G.prototype.render,S=(p=G.contextType)&&r[p.__c],L=p?S?S.props.value:p.__:r,n.__c?z=(u=t.__c=n.__c).__=u.__E:(k?t.__c=u=new G(v,L):(t.__c=u=new Te(v,L),u.constructor=G,u.render=Uc),S&&S.sub(u),u.state||(u.state={}),u.__n=r,m=u.__d=!0,u.__h=[],u._sb=[]),k&&u.__s==null&&(u.__s=u.state),k&&G.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Ue({},u.__s)),Ue(u.__s,G.getDerivedStateFromProps(v,u.__s))),f=u.props,d=u.state,u.__v=t,m)k&&G.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),k&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else {if(k&&G.getDerivedStateFromProps==null&&v!==f&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(v,L),t.__v==n.__v||!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(v,u.__s,L)===!1){for(t.__v!=n.__v&&(u.props=v,u.state=u.__s,u.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(B){B&&(B.__=t);}),N=0;N<u._sb.length;N++)u.__h.push(u._sb[N]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(v,u.__s,L),k&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(f,d,y);});}if(u.context=L,u.props=v,u.__P=e,u.__e=!1,_=F.__r,V=0,k){for(u.state=u.__s,u.__d=!1,_&&_(t),p=u.render(u.props,u.state,u.context),Y=0;Y<u._sb.length;Y++)u.__h.push(u._sb[Y]);u._sb=[];}else do u.__d=!1,_&&_(t),p=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++V<25);u.state=u.__s,u.getChildContext!=null&&(r=Ue(Ue({},r),u.getChildContext())),k&&!m&&u.getSnapshotBeforeUpdate!=null&&(y=u.getSnapshotBeforeUpdate(f,d)),H=p,p!=null&&p.type===Se&&p.key==null&&(H=Co(p.props.children)),l=_o(e,$t(H)?H:[H],t,n,r,i,a,o,l,s,c),u.base=t.__e,t.__u&=-161,u.__h.length&&o.push(u),z&&(u.__E=u.__=null);}catch(B){if(t.__v=null,s||a!=null)if(B.then){for(t.__u|=s?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;a[a.indexOf(l)]=null,t.__e=l;}else {for(b=a.length;b--;)pr(a[b]);cr(t);}else t.__e=n.__e,t.__k=n.__k,B.then||cr(t);F.__e(B,t,n);}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Fc(n.__e,t,n,r,i,a,o,s,c);return (p=F.diffed)&&p(t),128&t.__u?void 0:l}function cr(e){e&&e.__c&&(e.__c.__e=true),e&&e.__k&&e.__k.forEach(cr);}function So(e,t,n){for(var r=0;r<n.length;r++)mr(n[r],n[++r],n[++r]);F.__c&&F.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i);});}catch(a){F.__e(a,i.__v);}});}function Co(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:$t(e)?e.map(Co):Ue({},e)}function Fc(e,t,n,r,i,a,o,l,s){var c,p,u,m,f,d,y,z=n.props||Vt,v=t.props,k=t.type;if(k=="svg"?i="http://www.w3.org/2000/svg":k=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(c=0;c<a.length;c++)if((f=a[c])&&"setAttribute"in f==!!k&&(k?f.localName==k:f.nodeType==3)){e=f,a[c]=null;break}}if(e==null){if(k==null)return document.createTextNode(v);e=document.createElementNS(i,k,v.is&&v),l&&(F.__m&&F.__m(t,a),l=false),a=null;}if(k==null)z===v||l&&e.data==v||(e.data=v);else {if(a=a&&dn.call(e.childNodes),!l&&a!=null)for(z={},c=0;c<e.attributes.length;c++)z[(f=e.attributes[c]).name]=f.value;for(c in z)if(f=z[c],c!="children"){if(c=="dangerouslySetInnerHTML")u=f;else if(!(c in v)){if(c=="value"&&"defaultValue"in v||c=="checked"&&"defaultChecked"in v)continue;pn(e,c,null,f,i);}}for(c in v)f=v[c],c=="children"?m=f:c=="dangerouslySetInnerHTML"?p=f:c=="value"?d=f:c=="checked"?y=f:l&&typeof f!="function"||z[c]===f||pn(e,c,f,z[c],i);if(p)l||u&&(p.__html==u.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(u&&(e.innerHTML=""),_o(t.type=="template"?e.content:e,$t(m)?m:[m],t,n,r,k=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,o,a?a[0]:n.__k&&wt(n,0),l,s),a!=null)for(c=a.length;c--;)pr(a[c]);l||(c="value",k=="progress"&&d==null?e.removeAttribute("value"):d!=null&&(d!==e[c]||k=="progress"&&!d||k=="option"&&d!=z[c])&&pn(e,c,d,z[c],i),c="checked",y!=null&&y!=e[c]&&pn(e,c,y,z[c],i));}return e}function mr(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t));}else e.current=t;}catch(i){F.__e(i,n);}}function Eo(e,t,n){var r,i;if(F.unmount&&F.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||mr(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount();}catch(a){F.__e(a,t);}r.base=r.__P=null;}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Eo(r[i],t,n||typeof e.type!="function");n||pr(e.__e),e.__c=e.__=e.__e=void 0;}function Uc(e,t,n){return this.constructor(e,n)}function qt(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),F.__&&F.__(e,t),i=(r="undefined"=="function")?null:t.__k,a=[],o=[],fr(t,e=(t).__k=Le(Se,null,[e]),i||Vt,Vt,t.namespaceURI,i?null:t.firstChild?dn.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,o),So(a,e,o);}dn=wo.slice,F={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(l){e=l;}throw e}},vo=0,Te.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ue({},this.state),typeof e=="function"&&(e=e(Ue({},n),this.props)),e&&Ue(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),mo(this));},Te.prototype.forceUpdate=function(e){this.__v&&(this.__e=true,e&&this.__h.push(e),mo(this));},Te.prototype.render=Se,tt=[],yo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,xo=function(e,t){return e.__v.__b-t.__v.__b},mn.__r=0,bo=/(PointerCapture)$|Capture$/i,ur=0,lr=go(false),sr=go(true);var Ao=`*, ::before, ::after {
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
`;if(F){F.debounceRendering;F.debounceRendering=t=>{requestAnimationFrame(t);};}function Io(e,t,n="cvz-widget-host"){let r=document.createElement("div");r.id=n,document.body.appendChild(r);let i=r.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=Ao,i.appendChild(a);let o=document.createElement("div");return o.id="cvz-root",i.appendChild(o),qt(Le(t,{config:e}),o),{hostElement:r,root:o}}var kt,re,dr,To,gn=0,Fo=[],le=F,Po=le.__b,Lo=le.__r,Mo=le.diffed,Ro=le.__c,No=le.unmount,Do=le.__;function vn(e,t){le.__h&&le.__h(re,e,gn||t),gn=0;var n=re.__H||(re.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function he(e){return gn=1,Uo(Ho,e)}function Uo(e,t,n){var r=vn(kt++,2);if(r.t=e,!r.__c&&(r.__=[Ho(void 0,t),function(l){var s=r.__N?r.__N[0]:r.__[0],c=r.t(s,l);s!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}));}],r.__c=re,!re.__f)){var i=function(l,s,c){if(!r.__c.__H)return  true;var p=r.__c.__H.__.filter(function(m){return !!m.__c});if(p.every(function(m){return !m.__N}))return !a||a.call(this,l,s,c);var u=r.__c.props!==l;return p.forEach(function(m){if(m.__N){var f=m.__[0];m.__=m.__N,m.__N=void 0,f!==m.__[0]&&(u=true);}}),a&&a.call(this,l,s,c)||u};re.__f=true;var a=re.shouldComponentUpdate,o=re.componentWillUpdate;re.componentWillUpdate=function(l,s,c){if(this.__e){var p=a;a=void 0,i(l,s,c),a=p;}o&&o.call(this,l,s,c);},re.shouldComponentUpdate=i;}return r.__N||r.__}function _e(e,t){var n=vn(kt++,3);!le.__s&&gr(n.__H,t)&&(n.__=e,n.u=t,re.__H.__h.push(n));}function Bo(e,t){var n=vn(kt++,4);!le.__s&&gr(n.__H,t)&&(n.__=e,n.u=t,re.__h.push(n));}function nt(e){return gn=5,yn(function(){return {current:e}},[])}function yn(e,t){var n=vn(kt++,7);return gr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Hc(){for(var e;e=Fo.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(hn),e.__H.__h.forEach(hr),e.__H.__h=[];}catch(t){e.__H.__h=[],le.__e(t,e.__v);}}le.__b=function(e){re=null,Po&&Po(e);},le.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Do&&Do(e,t);},le.__r=function(e){Lo&&Lo(e),kt=0;var t=(re=e.__c).__H;t&&(dr===re?(t.__h=[],re.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(t.__h.forEach(hn),t.__h.forEach(hr),t.__h=[],kt=0)),dr=re;},le.diffed=function(e){Mo&&Mo(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Fo.push(t)!==1&&To===le.requestAnimationFrame||((To=le.requestAnimationFrame)||jc)(Hc)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0;})),dr=re=null;},le.__c=function(e,t){t.some(function(n){try{n.__h.forEach(hn),n.__h=n.__h.filter(function(r){return !r.__||hr(r)});}catch(r){t.some(function(i){i.__h&&(i.__h=[]);}),t=[],le.__e(r,n.__v);}}),Ro&&Ro(e,t);},le.unmount=function(e){No&&No(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{hn(r);}catch(i){t=i;}}),n.__H=void 0,t&&le.__e(t,n.__v));};var Oo=typeof requestAnimationFrame=="function";function jc(e){var t,n=function(){clearTimeout(r),Oo&&cancelAnimationFrame(t),setTimeout(e);},r=setTimeout(n,35);Oo&&(t=requestAnimationFrame(n));}function hn(e){var t=re,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),re=t;}function hr(e){var t=re;e.__c=e.__(),re=t;}function gr(e,t){return !e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ho(e,t){return typeof t=="function"?t(e):t}var yr="cvz_end_user_auth_v1",jo="cvz_end_user_last_email",xr="cvz_end_user_pending_checkout_v1";function br(e){try{return localStorage.getItem(e)}catch{return null}}function vr(e,t){try{localStorage.setItem(e,t);}catch{}}function Vo(e){try{localStorage.removeItem(e);}catch{}}function $o(){let e=br(yr);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.token=="string"&&typeof t.expiresAt=="number"&&typeof t.email=="string")return t}catch{}return null}function rt(e){return e?e.expiresAt-300>Date.now()/1e3:false}function Wo(e){vr(yr,JSON.stringify(e)),vr(jo,e.email);}function qo(){Vo(yr);}function Yo(){return br(jo)}function Ko(e){vr(xr,JSON.stringify(e));}function Xo(){let e=br(xr);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.pendingId=="string"&&typeof t.planId=="number")return t}catch{}return null}function Go(){Vo(xr);}function Jo(e){return e.type==="apiKey"?{"X-API-Key":e.token}:{Authorization:`Bearer ${e.token}`}}async function xn(e){try{let t=await e.json();if(t&&typeof t.message=="string")return t.message;if(t&&typeof t.error=="string")return t.error}catch{}return `${e.status} ${e.statusText}`}async function Qo(e,t,n){let r=await fetch(`${e}/api/chat/end_user/start_login`,{method:"POST",headers:{"Content-Type":"application/json",...Jo(t)},body:JSON.stringify({email:n})});if(!r.ok)throw new Error(await xn(r));return (await r.json()).pending_id}function bn(e,t){return new Promise(n=>{let r=new EventSource(`${e}/api/chat/end_user/wait/${encodeURIComponent(t)}`),i=false,a=o=>{i||(i=true,r.close(),n(o));};r.onmessage=o=>{try{a(JSON.parse(o.data));}catch{a({status:"error"});}},r.onerror=()=>{a({status:"timed_out"});};})}async function wr(e,t){let n=await fetch(`${e}/api/chat/end_user/plans`,{headers:Jo(t)});if(!n.ok)throw new Error(await xn(n));return (await n.json()).plans}async function kr(e,t){let n=await fetch(`${e}/api/chat/end_user/me`,{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw new Error(await xn(n));return await n.json()}async function Zo(e,t,n,r,i){let a=await fetch(`${e}/api/chat/end_user/checkout`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({plan_id:n,success_url:r,cancel_url:i})});if(!a.ok)throw new Error(await xn(a));let o=await a.json();return {checkoutUrl:o.checkout_url,pendingId:o.pending_id}}var Vc=0;function x(e,t,n,r,i,a){t||(t={});var o,l,s=t;if("ref"in s)for(l in s={},t)l=="ref"?o=t[l]:s[l]=t[l];var c={type:e,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Vc,__i:-1,__u:0,__source:i,__self:a};if(typeof e=="function"&&(o=e.defaultProps))for(l in o)s[l]===void 0&&(s[l]=o[l]);return F.vnode&&F.vnode(c),c}var $c=60*1e3;function Wc(e,t){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:t.toUpperCase()}).format(e/100)}catch{return `${(e/100).toFixed(2)} ${t.toUpperCase()}`}}function qc(e){return new Date(e*1e3).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}var ea=({open:e,onClose:t,darkMode:n,baseUrl:r,getBaseAuth:i,endUserAuth:a,onAuthenticated:o,initialEmail:l})=>{let[s,c]=he("email"),[p,u]=he(""),[m,f]=he(null),[d,y]=he(0),[z,v]=he(null),[k,S]=he([]),[L,N]=he(null),[_,V]=he(Date.now());if(_e(()=>{e&&(f(null),a?(u(a.email),c("status"),kr(r,a.token).then(v).catch(P=>f(P instanceof Error?P.message:String(P)))):(u(l??""),c("email")));},[e]),_e(()=>{if(d<=Date.now())return;let P=setInterval(()=>V(Date.now()),1e3);return ()=>clearInterval(P)},[d]),!e)return null;let Y=Math.max(0,Math.ceil((d-_)/1e3)),H=async()=>{let P=p.trim();if(!P||!P.includes("@")){f("Enter a valid email address.");return}f(null),c("waiting");try{let ee=await i(),fe=await Qo(r,ee,P);y(Date.now()+$c);let h=await bn(r,fe);if(h.status==="verified"){let ue={token:h.chat_token,expiresAt:h.expires_at,email:P};o(ue);try{let ye=await kr(r,ue.token);if(v(ye),ye.total_vtokens_remaining>0||ye.subscription_status==="active")c("status");else {let de=await wr(r,{token:ue.token,type:"bearer"});S(de),c("plans");}}catch{c("status");}}else h.status==="timed_out"?(f("That link expired before it was clicked. You can send a new one below."),c("email")):(f("Something went wrong confirming your login. Please try again."),c("email"));}catch(ee){f(ee instanceof Error?ee.message:String(ee)),c("email");}},b=async()=>{if(a){f(null);try{let P=await wr(r,{token:a.token,type:"bearer"});S(P),c("plans");}catch(P){f(P instanceof Error?P.message:String(P));}}},G=async P=>{if(a){f(null),N(P.id);try{let ee=window.location.href,{checkoutUrl:fe,pendingId:h}=await Zo(r,a.token,P.id,ee,ee);Ko({pendingId:h,planId:P.id}),window.location.href=fe;}catch(ee){f(ee instanceof Error?ee.message:String(ee)),N(null);}}},B=n?"cvz-text-gray-100":"cvz-text-gray-800",T=n?"cvz-text-gray-400":"cvz-text-gray-500",j=n?"cvz-bg-gray-800":"cvz-bg-white",$=n?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100":"cvz-bg-white cvz-border-gray-300 cvz-text-gray-800",Z="cvz-bg-blue-600 hover:cvz-bg-blue-700 cvz-text-white disabled:cvz-opacity-50 disabled:cvz-cursor-not-allowed";return x("div",{className:"cvz-absolute cvz-inset-0 cvz-z-20 cvz-flex cvz-flex-col",children:x("div",{className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-5 cvz-flex cvz-flex-col cvz-gap-4 ${j}`,children:[x("div",{className:"cvz-flex cvz-justify-between cvz-items-start",children:[x("h3",{className:`cvz-font-bold cvz-text-lg ${B}`,children:"Account"}),x("button",{onClick:t,className:`cvz-p-1 cvz-rounded-md ${n?"cvz-text-gray-400 hover:cvz-text-white":"cvz-text-gray-400 hover:cvz-text-gray-700"}`,title:"Close",children:"\u2715"})]}),m&&x("p",{className:"cvz-text-sm cvz-text-red-500",children:m}),s==="email"&&x("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[x("p",{className:`cvz-text-sm ${T}`,children:"Enter your email and we'll send you a login link - use it to access a plan you've already bought, or to start a new one."}),x("input",{type:"email",value:p,onInput:P=>u(P.target.value),placeholder:"you@example.com",className:`cvz-border cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm ${$}`,onKeyDown:P=>{P.key==="Enter"&&H();}}),x("button",{onClick:H,disabled:Y>0,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${Z}`,children:Y>0?`Wait ${Y}s to resend`:"Send login link"})]}),s==="waiting"&&x("div",{className:"cvz-flex cvz-flex-col cvz-gap-2 cvz-items-center cvz-py-6 cvz-text-center",children:[x("p",{className:`cvz-text-sm ${B}`,children:"Check your email"}),x("p",{className:`cvz-text-xs ${T}`,children:["We sent a login link to ",p,". Click it to continue - this can stay open while you do."]})]}),s==="status"&&x("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[x("p",{className:`cvz-text-sm ${B}`,children:["Signed in as ",a?.email]}),z?x("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-text-sm cvz-flex cvz-flex-col cvz-gap-1 ${n?"cvz-border-gray-600":"cvz-border-gray-200"} ${B}`,children:[x("span",{children:[Math.floor(z.total_vtokens_remaining).toLocaleString()," tokens left"]}),z.plan_name&&x("span",{className:T,children:["Plan: ",z.plan_name]}),z.current_period_end&&x("span",{className:T,children:["Renews ",qc(z.current_period_end)]})]}):x("p",{className:`cvz-text-sm ${T}`,children:"Loading your balance..."}),x("button",{onClick:b,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${Z}`,children:"Buy more"}),x("button",{onClick:()=>{c("email"),f(null);},className:`cvz-text-xs cvz-underline cvz-self-start ${T}`,children:"Use a different email"})]}),s==="plans"&&x("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[k.length===0&&x("p",{className:`cvz-text-sm ${T}`,children:"No plans are available right now."}),k.map(P=>x("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-flex cvz-justify-between cvz-items-center ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:[x("div",{children:[x("p",{className:`cvz-text-sm cvz-font-medium ${B}`,children:P.name}),x("p",{className:`cvz-text-xs ${T}`,children:[Wc(P.price_cents,P.currency),P.kind==="subscription"?" / period":""," \xB7 ",P.included_vtokens.toLocaleString()," tokens"]})]}),x("button",{onClick:()=>G(P),disabled:L===P.id,className:`cvz-rounded-lg cvz-px-3 cvz-py-1.5 cvz-text-sm cvz-font-medium ${Z}`,children:L===P.id?"Redirecting...":"Buy"})]},P.id)),a&&x("button",{onClick:()=>c("status"),className:`cvz-text-xs cvz-underline cvz-self-start ${T}`,children:"Back"})]})]})})};var Yc="calc(100vw - 2rem)",Kc="calc(100dvh - 8rem)",ta=e=>{if(!e?.position)return {bottom:"1rem",right:"1rem"};if(typeof e.position=="string")switch(e.position){case "bottom-right":return {bottom:"1rem",right:"1rem"};case "bottom-left":return {bottom:"1rem",left:"1rem"};case "top-right":return {top:"1rem",right:"1rem"};case "top-left":return {top:"1rem",left:"1rem"};default:return {bottom:"1rem",right:"1rem"}}else {let t={};return e.position.bottom&&(t.bottom=e.position.bottom),e.position.top&&(t.top=e.position.top),e.position.left&&(t.left=e.position.left),e.position.right&&(t.right=e.position.right),t}},na=e=>{let t={maxWidth:Yc,maxHeight:Kc};if(!e?.dialogSize)return {width:"350px",height:"500px",...t};if(typeof e.dialogSize=="string")switch(e.dialogSize){case "small":return {width:"300px",height:"400px",...t};case "medium":return {width:"350px",height:"500px",...t};case "large":return {width:"400px",height:"600px",...t};default:return {width:"350px",height:"500px",...t}}else return {width:`${Math.max(250,e.dialogSize.width)}px`,height:`${Math.max(300,e.dialogSize.height)}px`,...t}},ra=e=>e?.frameColor||"#E5E7EB",ia=(e,t)=>{let n=e?.buttonColor;return t?{backgroundColor:n?.open||"#1F2937"}:{backgroundColor:n?.normal||"#2563EB","--hover-color":n?.hover||"#1D4ED8"}};function oa(e,t){let n={};return (e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===false?"":" ")).trim()}var Xc=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Gc=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Jc={};function wn(e,t){return ((Jc).jsx?Gc:Xc).test(e)}var Qc=/[ \t\n\f\r]/g;function _r(e){return typeof e=="object"?e.type==="text"?aa(e.value):false:aa(e)}function aa(e){return e.replace(Qc,"")===""}var Be=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r);}};Be.prototype.normal={};Be.prototype.property={};Be.prototype.space=void 0;function zr(e,t){let n={},r={};for(let i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Be(n,r,t)}function Yt(e){return e.toLowerCase()}var me=class{constructor(t,n){this.attribute=n,this.property=t;}};me.prototype.attribute="";me.prototype.booleanish=false;me.prototype.boolean=false;me.prototype.commaOrSpaceSeparated=false;me.prototype.commaSeparated=false;me.prototype.defined=false;me.prototype.mustUseProperty=false;me.prototype.number=false;me.prototype.overloadedBoolean=false;me.prototype.property="";me.prototype.spaceSeparated=false;me.prototype.space=void 0;var Kt={};uo(Kt,{boolean:()=>W,booleanish:()=>ie,commaOrSpaceSeparated:()=>we,commaSeparated:()=>Ve,number:()=>C,overloadedBoolean:()=>kn,spaceSeparated:()=>Q});var Zc=0,W=it(),ie=it(),kn=it(),C=it(),Q=it(),Ve=it(),we=it();function it(){return 2**++Zc}var Sr=Object.keys(Kt),ot=class extends me{constructor(t,n,r,i){let a=-1;if(super(t,n),la(this,"space",i),typeof r=="number")for(;++a<Sr.length;){let o=Sr[a];la(this,Sr[a],(r&Kt[o])===Kt[o]);}}};ot.prototype.defined=true;function la(e,t,n){n&&(e[t]=n);}function Ce(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new ot(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=true),t[r]=a,n[Yt(r)]=r,n[Yt(a.attribute)]=r;}return new Be(t,n,e.space)}var Cr=Ce({properties:{ariaActiveDescendant:null,ariaAtomic:ie,ariaAutoComplete:null,ariaBusy:ie,ariaChecked:ie,ariaColCount:C,ariaColIndex:C,ariaColSpan:C,ariaControls:Q,ariaCurrent:null,ariaDescribedBy:Q,ariaDetails:null,ariaDisabled:ie,ariaDropEffect:Q,ariaErrorMessage:null,ariaExpanded:ie,ariaFlowTo:Q,ariaGrabbed:ie,ariaHasPopup:null,ariaHidden:ie,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Q,ariaLevel:C,ariaLive:null,ariaModal:ie,ariaMultiLine:ie,ariaMultiSelectable:ie,ariaOrientation:null,ariaOwns:Q,ariaPlaceholder:null,ariaPosInSet:C,ariaPressed:ie,ariaReadOnly:ie,ariaRelevant:null,ariaRequired:ie,ariaRoleDescription:Q,ariaRowCount:C,ariaRowIndex:C,ariaRowSpan:C,ariaSelected:ie,ariaSetSize:C,ariaSort:null,ariaValueMax:C,ariaValueMin:C,ariaValueNow:C,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function _n(e,t){return t in e?e[t]:t}function zn(e,t){return _n(e,t.toLowerCase())}var sa=Ce({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ve,acceptCharset:Q,accessKey:Q,action:null,allow:null,allowFullScreen:W,allowPaymentRequest:W,allowUserMedia:W,alt:null,as:null,async:W,autoCapitalize:null,autoComplete:Q,autoFocus:W,autoPlay:W,blocking:Q,capture:null,charSet:null,checked:W,cite:null,className:Q,cols:C,colSpan:null,content:null,contentEditable:ie,controls:W,controlsList:Q,coords:C|Ve,crossOrigin:null,data:null,dateTime:null,decoding:null,default:W,defer:W,dir:null,dirName:null,disabled:W,download:kn,draggable:ie,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:W,formTarget:null,headers:Q,height:C,hidden:kn,high:C,href:null,hrefLang:null,htmlFor:Q,httpEquiv:Q,id:null,imageSizes:null,imageSrcSet:null,inert:W,inputMode:null,integrity:null,is:null,isMap:W,itemId:null,itemProp:Q,itemRef:Q,itemScope:W,itemType:Q,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:W,low:C,manifest:null,max:null,maxLength:C,media:null,method:null,min:null,minLength:C,multiple:W,muted:W,name:null,nonce:null,noModule:W,noValidate:W,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:W,optimum:C,pattern:null,ping:Q,placeholder:null,playsInline:W,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:W,referrerPolicy:null,rel:Q,required:W,reversed:W,rows:C,rowSpan:C,sandbox:Q,scope:null,scoped:W,seamless:W,selected:W,shadowRootClonable:W,shadowRootDelegatesFocus:W,shadowRootMode:null,shape:null,size:C,sizes:null,slot:null,span:C,spellCheck:ie,src:null,srcDoc:null,srcLang:null,srcSet:null,start:C,step:null,style:null,tabIndex:C,target:null,title:null,translate:null,type:null,typeMustMatch:W,useMap:null,value:ie,width:C,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Q,axis:null,background:null,bgColor:null,border:C,borderColor:null,bottomMargin:C,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:W,declare:W,event:null,face:null,frame:null,frameBorder:null,hSpace:C,leftMargin:C,link:null,longDesc:null,lowSrc:null,marginHeight:C,marginWidth:C,noResize:W,noHref:W,noShade:W,noWrap:W,object:null,profile:null,prompt:null,rev:null,rightMargin:C,rules:null,scheme:null,scrolling:ie,standby:null,summary:null,text:null,topMargin:C,valueType:null,version:null,vAlign:null,vLink:null,vSpace:C,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:W,disableRemotePlayback:W,prefix:null,property:null,results:C,security:null,unselectable:null},space:"html",transform:zn});var ca=Ce({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:we,accentHeight:C,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:C,amplitude:C,arabicForm:null,ascent:C,attributeName:null,attributeType:null,azimuth:C,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:C,by:null,calcMode:null,capHeight:C,className:Q,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:C,diffuseConstant:C,direction:null,display:null,dur:null,divisor:C,dominantBaseline:null,download:W,dx:null,dy:null,edgeMode:null,editable:null,elevation:C,enableBackground:null,end:null,event:null,exponent:C,externalResourcesRequired:null,fill:null,fillOpacity:C,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ve,g2:Ve,glyphName:Ve,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:C,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:C,horizOriginX:C,horizOriginY:C,id:null,ideographic:C,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:C,k:C,k1:C,k2:C,k3:C,k4:C,kernelMatrix:we,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:C,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:C,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:C,overlineThickness:C,paintOrder:null,panose1:null,path:null,pathLength:C,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Q,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:C,pointsAtY:C,pointsAtZ:C,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:we,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:we,rev:we,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:we,requiredFeatures:we,requiredFonts:we,requiredFormats:we,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:C,specularExponent:C,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:C,strikethroughThickness:C,string:null,stroke:null,strokeDashArray:we,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:C,strokeOpacity:C,strokeWidth:null,style:null,surfaceScale:C,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:we,tabIndex:C,tableValues:null,target:null,targetX:C,targetY:C,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:we,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:C,underlineThickness:C,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:C,values:null,vAlphabetic:C,vMathematical:C,vectorEffect:null,vHanging:C,vIdeographic:C,version:null,vertAdvY:C,vertOriginX:C,vertOriginY:C,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:C,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:_n});var Er=Ce({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return "xlink:"+t.slice(5).toLowerCase()}});var Ar=Ce({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:zn});var Ir=Ce({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return "xml:"+t.slice(3).toLowerCase()}});var Tr={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var eu=/[A-Z]/g,ua=/-[a-z]/g,tu=/^data[-\w.:]+$/i;function Pr(e,t){let n=Yt(t),r=t,i=me;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&tu.test(t)){if(t.charAt(4)==="-"){let a=t.slice(5).replace(ua,ru);r="data"+a.charAt(0).toUpperCase()+a.slice(1);}else {let a=t.slice(4);if(!ua.test(a)){let o=a.replace(eu,nu);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o;}}i=ot;}return new i(r,t)}function nu(e){return "-"+e.toLowerCase()}function ru(e){return e.charAt(1).toUpperCase()}var pa=zr([Cr,sa,Er,Ar,Ir],"html"),Sn=zr([Cr,ca,Er,Ar,Ir],"svg");function fa(e){return e.join(" ").trim()}var Ea=po(_a());var En=za("end"),_t=za("start");function za(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return {line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Rr(e){let t=_t(e),n=En(e);if(t&&n)return {start:t,end:n}}function $e(e){return !e||typeof e!="object"?"":"position"in e||"type"in e?Sa(e.position):"start"in e||"end"in e?Sa(e):"line"in e||"column"in e?Nr(e):""}function Nr(e){return Ca(e&&e.line)+":"+Ca(e&&e.column)}function Sa(e){return Nr(e&&e.start)+"-"+Nr(e&&e.end)}function Ca(e){return e&&typeof e=="number"?e:1}var se=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",a={},o=false;if(n&&("line"in n&&"column"in n?a={place:n}:"start"in n&&"end"in n?a={place:n}:"type"in n?a={ancestors:[n],place:n.position}:a={...n}),typeof t=="string"?i=t:!a.cause&&t&&(o=true,i=t.message,a.cause=t),!a.ruleId&&!a.source&&typeof r=="string"){let s=r.indexOf(":");s===-1?a.ruleId=r:(a.source=r.slice(0,s),a.ruleId=r.slice(s+1));}if(!a.place&&a.ancestors&&a.ancestors){let s=a.ancestors[a.ancestors.length-1];s&&(a.place=s.position);}let l=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=$e(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0;}};se.prototype.file="";se.prototype.name="";se.prototype.reason="";se.prototype.message="";se.prototype.stack="";se.prototype.column=void 0;se.prototype.line=void 0;se.prototype.ancestors=void 0;se.prototype.cause=void 0;se.prototype.fatal=void 0;se.prototype.place=void 0;se.prototype.ruleId=void 0;se.prototype.source=void 0;var Dr={}.hasOwnProperty,Iu=new Map,Tu=/[A-Z]/g,Pu=new Set(["table","tbody","thead","tfoot","tr"]),Lu=new Set(["td","th"]),Aa="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Or(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Bu(n,t.jsxDEV);}else {if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Uu(n,t.jsx,t.jsxs);}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||false,passKeys:t.passKeys!==false,passNode:t.passNode||false,schema:t.space==="svg"?Sn:pa,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==false},a=Ia(i,e,void 0);return a&&typeof a!="string"?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Ia(e,t,n){if(t.type==="element")return Mu(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Ru(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Du(e,t,n);if(t.type==="mdxjsEsm")return Nu(e,t);if(t.type==="root")return Ou(e,t,n);if(t.type==="text")return Fu(e,t)}function Mu(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Sn,e.schema=i),e.ancestors.push(t);let a=Pa(e,t.tagName,false),o=Hu(e,t),l=Ur(e,t);return Pu.has(t.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!_r(s):true})),Ta(e,o,a,t),Fr(o,l),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Ru(e,t){if(t.data&&t.data.estree&&e.evaluater){let r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Gt(e,t.position);}function Nu(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Gt(e,t.position);}function Du(e,t,n){let r=e.schema,i=r;t.name==="svg"&&r.space==="html"&&(i=Sn,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:Pa(e,t.name,true),o=ju(e,t),l=Ur(e,t);return Ta(e,o,a,t),Fr(o,l),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Ou(e,t,n){let r={};return Fr(r,Ur(e,t)),e.create(t,e.Fragment,r,n)}function Fu(e,t){return t.value}function Ta(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r);}function Fr(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n);}}function Uu(e,t,n){return r;function r(i,a,o,l){let c=Array.isArray(o.children)?n:t;return l?c(a,o,l):c(a,o)}}function Bu(e,t){return n;function n(r,i,a,o){let l=Array.isArray(a.children),s=_t(r);return t(i,a,o,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function Hu(e,t){let n={},r,i;for(i in t.properties)if(i!=="children"&&Dr.call(t.properties,i)){let a=Vu(e,i,t.properties[i]);if(a){let[o,l]=a;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&Lu.has(t.tagName)?r=l:n[o]=l;}}if(r){let a=n.style||(n.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r;}return n}function ju(e,t){let n={};for(let r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){let a=r.data.estree.body[0];a.type;let o=a.expression;o.type;let l=o.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument));}else Gt(e,t.position);else {let i=r.name,a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){let l=r.value.data.estree.body[0];l.type,a=e.evaluater.evaluateExpression(l.expression);}else Gt(e,t.position);else a=r.value===null?true:r.value;n[i]=a;}return n}function Ur(e,t){let n=[],r=-1,i=e.passKeys?new Map:Iu;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let s=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(s){let c=i.get(s)||0;o=s+"-"+c,i.set(s,c+1);}}let l=Ia(e,a,o);l!==void 0&&n.push(l);}return n}function Vu(e,t,n){let r=Pr(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?oa(n):fa(n)),r.property==="style"){let i=typeof n=="object"?n:$u(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Wu(i)),["style",i]}return [e.elementAttributeNameCase==="react"&&r.space?Tr[r.property]||r.property:r.attribute,n]}}function $u(e,t){try{return (0,Ea.default)(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return {};let r=n,i=new se("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Aa+"#cannot-parse-style-attribute",i}}function Pa(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){let i=t.split("."),a=-1,o;for(;++a<i.length;){let l=wn(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(a&&l.type==="Literal"),optional:false}:l;}r=o;}else r=wn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){let i=r.value;return Dr.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Gt(e);}function Gt(e,t){let n=new se("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Aa+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Wu(e){let t={},n;for(n in e)Dr.call(e,n)&&(t[qu(n)]=e[n]);return t}function qu(e){let t=e.replace(Tu,Yu);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Yu(e){return "-"+e.toLowerCase()}var Jt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};function Gu(e,t){for(var n in t)e[n]=t[n];return e}function La(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return  true;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return  true;return  false}function Ha(e,t){var n=t(),r=he({t:{__:n,u:t}}),i=r[0].t,a=r[1];return Bo(function(){i.__=n,i.u=t,Br(i)&&a({t:i});},[e,n,t]),_e(function(){return Br(i)&&a({t:i}),e(function(){Br(i)&&a({t:i});})},[e]),n}function Br(e){var t,n,r=e.u,i=e.__;try{var a=r();return !((t=i)===(n=a)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return  true}}function Ma(e,t){this.props=e,this.context=t;}(Ma.prototype=new Te).isPureReactComponent=true,Ma.prototype.shouldComponentUpdate=function(e,t){return La(this.props,e)||La(this.state,t)};var Ra=F.__b;F.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ra&&Ra(e);};var Ju=F.__e;F.__e=function(e,t,n,r){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}Ju(e,t,n,r);};var Na=F.unmount;function ja(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c();}),e.__c.__H=null),(e=Gu({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=true,e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return ja(r,t,n)})),e}function Va(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Va(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=true,e.__c.__P=n)),e}function Hr(){this.__u=0,this.o=null,this.__b=null;}function $a(e){if(!e.__)return null;var t=e.__.__c;return t&&t.__a&&t.__a(e)}function An(){this.i=null,this.l=null;}F.unmount=function(e){var t=e.__c;t&&(t.__z=true),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Na&&Na(e);},(Hr.prototype=new Te).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var i=$a(r.__v),a=false,o=function(){a||r.__z||(a=true,n.__R=null,i?i(s):s());};n.__R=o;var l=n.__P;n.__P=null;var s=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=Va(c,c.__c.__P,c.__c.__O);}var p;for(r.setState({__a:r.__b=null});p=r.o.pop();)p.__P=l,p.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o);},Hr.prototype.componentWillUnmount=function(){this.o=[];},Hr.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=ja(this.__b,n,r.__O=r.__P);}this.__b=null;}var i=t.__a&&Le(Se,null,e.fallback);return i&&(i.__u&=-33),[Le(Se,null,t.__a?null:e.children),i]};var Da=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2];}};(An.prototype=new Te).__a=function(e){var t=this,n=$a(t.__v),r=t.l.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),Da(t,e,r)):i();};n?n(a):a();}},An.prototype.render=function(e){this.i=null,this.l=new Map;var t=Wt(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},An.prototype.componentDidUpdate=An.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Da(e,n,t);});};var Qu=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Zu=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ep=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,tp=/[A-Z0-9]/g,np=typeof document<"u",rp=function(e){return (typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};Te.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Te.prototype,e,{configurable:true,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:true,writable:true,value:t});}});});var Oa=F.event;function ip(){}function op(){return this.cancelBubble}function ap(){return this.defaultPrevented}F.event=function(e){return Oa&&(e=Oa(e)),e.persist=ip,e.isPropagationStopped=op,e.isDefaultPrevented=ap,e.nativeEvent=e};var lp={enumerable:false,configurable:true,get:function(){return this.class}},Fa=F.vnode;F.vnode=function(e){typeof e.type=="string"&&(function(t){var n=t.props,r=t.type,i={},a=r.indexOf("-")===-1;for(var o in n){var l=n[o];if(!(o==="value"&&"defaultValue"in n&&l==null||np&&o==="children"&&r==="noscript"||o==="class"||o==="className")){var s=o.toLowerCase();o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&l===true?l="":s==="translate"&&l==="no"?l=false:s[0]==="o"&&s[1]==="n"?s==="ondoubleclick"?o="ondblclick":s!=="onchange"||r!=="input"&&r!=="textarea"||rp(n.type)?s==="onfocus"?o="onfocusin":s==="onblur"?o="onfocusout":ep.test(o)&&(o=s):s=o="oninput":a&&Zu.test(o)?o=o.replace(tp,"-$&").toLowerCase():l===null&&(l=void 0),s==="oninput"&&i[o=s]&&(o="oninputCapture"),i[o]=l;}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Wt(n.children).forEach(function(c){c.props.selected=i.value.indexOf(c.props.value)!=-1;})),r=="select"&&i.defaultValue!=null&&(i.value=Wt(n.children).forEach(function(c){c.props.selected=i.multiple?i.defaultValue.indexOf(c.props.value)!=-1:i.defaultValue==c.props.value;})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",lp)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),t.props=i;})(e),e.$$typeof=Qu,Fa&&Fa(e);};var Ua=F.__r;F.__r=function(e){Ua&&Ua(e),e.__c;};var Ba=F.diffed;F.diffed=function(e){Ba&&Ba(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value);};var sp={};function lt(e,t){let n=sp,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:true,i=typeof n.includeHtml=="boolean"?n.includeHtml:true;return Ya(e,r,i)}function Ya(e,t,n){if(cp(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return qa(e.children,t,n)}return Array.isArray(e)?qa(e,t,n):""}function qa(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=Ya(e[i],t,n);return r.join("")}function cp(e){return !!(e&&typeof e=="object")}var Ka=document.createElement("i");function zt(e){let t="&"+e+";";Ka.innerHTML=t;let n=Ka.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?false:n}function ce(e,t,n,r){let i=e.length,a=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4;}function xe(e,t){return e.length>0?(ce(e,e.length,0,t),e):t}var Xa={}.hasOwnProperty;function In(e){let t={},n=-1;for(;++n<e.length;)up(t,e[n]);return t}function up(e,t){let n;for(n in t){let i=(Xa.call(e,n)?e[n]:void 0)||(e[n]={}),a=t[n],o;if(a)for(o in a){Xa.call(i,o)||(i[o]=[]);let l=a[o];pp(i[o],Array.isArray(l)?l:l?[l]:[]);}}}function pp(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);ce(e,0,0,r);}function Tn(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function ge(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var pe=We(/[A-Za-z]/),oe=We(/[\dA-Za-z]/),Ga=We(/[#-'*+\--9=?A-Z^-~]/);function st(e){return e!==null&&(e<32||e===127)}var Qt=We(/\d/),Ja=We(/[\dA-Fa-f]/),Qa=We(/[!-/:-@[-`{-~]/);function I(e){return e!==null&&e<-2}function X(e){return e!==null&&(e<0||e===32)}function O(e){return e===-2||e===-1||e===32}var ct=We(/\p{P}|\p{S}/u),Me=We(/\s/);function We(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Ee(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o="";if(a===37&&oe(e.charCodeAt(n+1))&&oe(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let l=e.charCodeAt(n+1);a<56320&&l>56319&&l<57344?(o=String.fromCharCode(a,l),i=1):o="\uFFFD";}else o=String.fromCharCode(a);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0);}return t.join("")+e.slice(r)}function R(e,t,n,r){let i=r?r-1:Number.POSITIVE_INFINITY,a=0;return o;function o(s){return O(s)?(e.enter(n),l(s)):t(s)}function l(s){return O(s)&&a++<i?(e.consume(s),l):(e.exit(n),t(s))}}var Za={tokenize:fp};function fp(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),R(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),a(l)}function a(l){let s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return I(l)?(e.consume(l),e.exit("chunkText"),a):(e.consume(l),o)}}var tl={tokenize:mp},el={tokenize:dp};function mp(e){let t=this,n=[],r=0,i,a,o;return l;function l(S){if(r<n.length){let L=n[r];return t.containerState=L[1],e.attempt(L[0].continuation,s,c)(S)}return c(S)}function s(S){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&k();let L=t.events.length,N=L,_;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){_=t.events[N][1].end;break}v(r);let V=L;for(;V<t.events.length;)t.events[V][1].end={..._},V++;return ce(t.events,N+1,0,t.events.slice(L)),t.events.length=V,c(S)}return l(S)}function c(S){if(r===n.length){if(!i)return m(S);if(i.currentConstruct&&i.currentConstruct.concrete)return d(S);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack);}return t.containerState={},e.check(el,p,u)(S)}function p(S){return i&&k(),v(r),m(S)}function u(S){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,d(S)}function m(S){return t.containerState={},e.attempt(el,f,d)(S)}function f(S){return r++,n.push([t.currentConstruct,t.containerState]),m(S)}function d(S){if(S===null){i&&k(),v(0),e.consume(S);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),y(S)}function y(S){if(S===null){z(e.exit("chunkFlow"),true),v(0),e.consume(S);return}return I(S)?(e.consume(S),z(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(S),y)}function z(S,L){let N=t.sliceStream(S);if(L&&N.push(null),S.previous=a,a&&(a.next=S),a=S,i.defineSkip(S.start),i.write(N),t.parser.lazy[S.start.line]){let _=i.events.length;for(;_--;)if(i.events[_][1].start.offset<o&&(!i.events[_][1].end||i.events[_][1].end.offset>o))return;let V=t.events.length,Y=V,H,b;for(;Y--;)if(t.events[Y][0]==="exit"&&t.events[Y][1].type==="chunkFlow"){if(H){b=t.events[Y][1].end;break}H=true;}for(v(r),_=V;_<t.events.length;)t.events[_][1].end={...b},_++;ce(t.events,Y+1,0,t.events.slice(V)),t.events.length=_;}}function v(S){let L=n.length;for(;L-- >S;){let N=n[L];t.containerState=N[1],N[0].exit.call(t,e);}n.length=S;}function k(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0;}}function dp(e,t,n){return R(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function He(e){if(e===null||X(e)||Me(e))return 1;if(ct(e))return 2}function qe(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a));}return t}var Zt={name:"attention",resolveAll:hp,tokenize:gp};function hp(e,t){let n=-1,r,i,a,o,l,s,c,p;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let u={...e[r][1].end},m={...e[n][1].start};nl(u,-s),nl(m,s),o={type:s>1?"strongSequence":"emphasisSequence",start:u,end:{...e[r][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:m},a={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[r][1].end={...o.start},e[n][1].start={...l.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=xe(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=xe(c,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",a,t]]),c=xe(c,qe(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=xe(c,[["exit",a,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(p=2,c=xe(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):p=0,ce(e,r-1,n-r+3,c),n=r+c.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function gp(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=He(r),a;return o;function o(s){return a=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===a)return e.consume(s),l;let c=e.exit("attentionSequence"),p=He(s),u=!p||p===2&&i||n.includes(s),m=!i||i===2&&p||n.includes(r);return c._open=!!(a===42?u:u&&(i||!m)),c._close=!!(a===42?m:m&&(p||!u)),t(s)}}function nl(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t;}var jr={name:"autolink",tokenize:vp};function vp(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(f){return pe(f)?(e.consume(f),o):f===64?n(f):c(f)}function o(f){return f===43||f===45||f===46||oe(f)?(r=1,l(f)):c(f)}function l(f){return f===58?(e.consume(f),r=0,s):(f===43||f===45||f===46||oe(f))&&r++<32?(e.consume(f),l):(r=0,c(f))}function s(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||st(f)?n(f):(e.consume(f),s)}function c(f){return f===64?(e.consume(f),p):Ga(f)?(e.consume(f),c):n(f)}function p(f){return oe(f)?u(f):n(f)}function u(f){return f===46?(e.consume(f),r=0,p):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):m(f)}function m(f){if((f===45||oe(f))&&r++<63){let d=f===45?m:u;return e.consume(f),d}return n(f)}}var Re={partial:true,tokenize:yp};function yp(e,t,n){return r;function r(a){return O(a)?R(e,i,"linePrefix")(a):i(a)}function i(a){return a===null||I(a)?t(a):n(a)}}var Pn={continuation:{tokenize:bp},exit:wp,name:"blockQuote",tokenize:xp};function xp(e,t,n){let r=this;return i;function i(o){if(o===62){let l=r.containerState;return l.open||(e.enter("blockQuote",{_container:true}),l.open=true),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return n(o)}function a(o){return O(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function bp(e,t,n){let r=this;return i;function i(o){return O(o)?R(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(Pn,t,n)(o)}}function wp(e){e.exit("blockQuote");}var Ln={name:"characterEscape",tokenize:kp};function kp(e,t,n){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),i}function i(a){return Qa(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(a)}}var Mn={name:"characterReference",tokenize:_p};function _p(e,t,n){let r=this,i=0,a,o;return l;function l(u){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),s}function s(u){return u===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(u),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),a=31,o=oe,p(u))}function c(u){return u===88||u===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(u),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=Ja,p):(e.enter("characterReferenceValue"),a=7,o=Qt,p(u))}function p(u){if(u===59&&i){let m=e.exit("characterReferenceValue");return o===oe&&!zt(r.sliceSerialize(m))?n(u):(e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(u)&&i++<a?(e.consume(u),p):n(u)}}var rl={partial:true,tokenize:Sp},Rn={concrete:true,name:"codeFenced",tokenize:zp};function zp(e,t,n){let r=this,i={partial:true,tokenize:N},a=0,o=0,l;return s;function s(_){return c(_)}function c(_){let V=r.events[r.events.length-1];return a=V&&V[1].type==="linePrefix"?V[2].sliceSerialize(V[1],true).length:0,l=_,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(_)}function p(_){return _===l?(o++,e.consume(_),p):o<3?n(_):(e.exit("codeFencedFenceSequence"),O(_)?R(e,u,"whitespace")(_):u(_))}function u(_){return _===null||I(_)?(e.exit("codeFencedFence"),r.interrupt?t(_):e.check(rl,y,L)(_)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(_))}function m(_){return _===null||I(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),u(_)):O(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),R(e,f,"whitespace")(_)):_===96&&_===l?n(_):(e.consume(_),m)}function f(_){return _===null||I(_)?u(_):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),d(_))}function d(_){return _===null||I(_)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),u(_)):_===96&&_===l?n(_):(e.consume(_),d)}function y(_){return e.attempt(i,L,z)(_)}function z(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),v}function v(_){return a>0&&O(_)?R(e,k,"linePrefix",a+1)(_):k(_)}function k(_){return _===null||I(_)?e.check(rl,y,L)(_):(e.enter("codeFlowValue"),S(_))}function S(_){return _===null||I(_)?(e.exit("codeFlowValue"),k(_)):(e.consume(_),S)}function L(_){return e.exit("codeFenced"),t(_)}function N(_,V,Y){let H=0;return b;function b($){return _.enter("lineEnding"),_.consume($),_.exit("lineEnding"),G}function G($){return _.enter("codeFencedFence"),O($)?R(_,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)($):B($)}function B($){return $===l?(_.enter("codeFencedFenceSequence"),T($)):Y($)}function T($){return $===l?(H++,_.consume($),T):H>=o?(_.exit("codeFencedFenceSequence"),O($)?R(_,j,"whitespace")($):j($)):Y($)}function j($){return $===null||I($)?(_.exit("codeFencedFence"),V($)):Y($)}}}function Sp(e,t,n){let r=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}var en={name:"codeIndented",tokenize:Ep},Cp={partial:true,tokenize:Ap};function Ep(e,t,n){let r=this;return i;function i(c){return e.enter("codeIndented"),R(e,a,"linePrefix",5)(c)}function a(c){let p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],true).length>=4?o(c):n(c)}function o(c){return c===null?s(c):I(c)?e.attempt(Cp,o,s)(c):(e.enter("codeFlowValue"),l(c))}function l(c){return c===null||I(c)?(e.exit("codeFlowValue"),o(c)):(e.consume(c),l)}function s(c){return e.exit("codeIndented"),t(c)}}function Ap(e,t,n){let r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):I(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):R(e,a,"linePrefix",5)(o)}function a(o){let l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(o):I(o)?i(o):n(o)}}var Vr={name:"codeText",previous:Tp,resolve:Ip,tokenize:Pp};function Ip(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Tp(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Pp(e,t,n){let i=0,a,o;return l;function l(m){return e.enter("codeText"),e.enter("codeTextSequence"),s(m)}function s(m){return m===96?(e.consume(m),i++,s):(e.exit("codeTextSequence"),c(m))}function c(m){return m===null?n(m):m===32?(e.enter("space"),e.consume(m),e.exit("space"),c):m===96?(o=e.enter("codeTextSequence"),a=0,u(m)):I(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),c):(e.enter("codeTextData"),p(m))}function p(m){return m===null||m===32||m===96||I(m)?(e.exit("codeTextData"),c(m)):(e.consume(m),p)}function u(m){return m===96?(e.consume(m),a++,u):a===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(m)):(o.type="codeTextData",p(m))}}var Nn=class{constructor(t){this.left=t?[...t]:[],this.right=[];}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let i=n||0;this.setCursor(Math.trunc(t));let a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&tn(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t);}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),tn(this.left,t);}unshift(t){this.setCursor(0),this.right.push(t);}unshiftMany(t){this.setCursor(0),tn(this.right,t.reverse());}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,Number.POSITIVE_INFINITY);tn(this.right,n.reverse());}else {let n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);tn(this.left,n.reverse());}}};function tn(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4;}function Dn(e){let t={},n=-1,r,i,a,o,l,s,c,p=new Nn(e);for(;++n<p.length;){for(;n in t;)n=t[n];if(r=p.get(n),n&&r[1].type==="chunkFlow"&&p.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,a=0,a<s.length&&s[a][1].type==="lineEndingBlank"&&(a+=2),a<s.length&&s[a][1].type==="content"))for(;++a<s.length&&s[a][1].type!=="content";)s[a][1].type==="chunkText"&&(s[a][1]._isInFirstContentOfListItem=true,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Lp(p,n)),n=t[n],c=true);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=p.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(p.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...p.get(i)[1].start},l=p.slice(i,n),l.unshift(r),p.splice(i,n-i+1,l));}}return ce(e,0,Number.POSITIVE_INFINITY,p.slice(0)),!c}function Lp(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=true));let l=o.events,s=[],c={},p,u,m=-1,f=n,d=0,y=0,z=[y];for(;f;){for(;e.get(++i)[1]!==f;);a.push(i),f._tokenizer||(p=r.sliceStream(f),f.next||p.push(null),u&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=true),o.write(p),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),u=f,f=f.next;}for(f=n;++m<l.length;)l[m][0]==="exit"&&l[m-1][0]==="enter"&&l[m][1].type===l[m-1][1].type&&l[m][1].start.line!==l[m][1].end.line&&(y=m+1,z.push(y),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):z.pop(),m=z.length;m--;){let v=l.slice(z[m],z[m+1]),k=a.pop();s.push([k,k+v.length-1]),e.splice(k,2,v);}for(s.reverse(),m=-1;++m<s.length;)c[d+s[m][0]]=d+s[m][1],d+=s[m][1]-s[m][0]-1;return c}var $r={resolve:Rp,tokenize:Np},Mp={partial:true,tokenize:Dp};function Rp(e){return Dn(e),e}function Np(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?a(l):I(l)?e.check(Mp,o,a)(l):(e.consume(l),i)}function a(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function o(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Dp(e,t,n){let r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),R(e,a,"linePrefix")}function a(o){if(o===null||I(o))return n(o);let l=r.events[r.events.length-1];return !r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function On(e,t,n,r,i,a,o,l,s){let c=s||Number.POSITIVE_INFINITY,p=0;return u;function u(v){return v===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(v),e.exit(a),m):v===null||v===32||v===41||st(v)?n(v):(e.enter(r),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),y(v))}function m(v){return v===62?(e.enter(a),e.consume(v),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),f(v))}function f(v){return v===62?(e.exit("chunkString"),e.exit(l),m(v)):v===null||v===60||I(v)?n(v):(e.consume(v),v===92?d:f)}function d(v){return v===60||v===62||v===92?(e.consume(v),f):f(v)}function y(v){return !p&&(v===null||v===41||X(v))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(r),t(v)):p<c&&v===40?(e.consume(v),p++,y):v===41?(e.consume(v),p--,y):v===null||v===32||v===40||st(v)?n(v):(e.consume(v),v===92?z:y)}function z(v){return v===40||v===41||v===92?(e.consume(v),y):y(v)}}function Fn(e,t,n,r,i,a){let o=this,l=0,s;return c;function c(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(a),p}function p(f){return l>999||f===null||f===91||f===93&&!s||f===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?n(f):f===93?(e.exit(a),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):I(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),u(f))}function u(f){return f===null||f===91||f===93||I(f)||l++>999?(e.exit("chunkString"),p(f)):(e.consume(f),s||(s=!O(f)),f===92?m:u)}function m(f){return f===91||f===92||f===93?(e.consume(f),l++,u):u(f)}}function Un(e,t,n,r,i,a){let o;return l;function l(m){return m===34||m===39||m===40?(e.enter(r),e.enter(i),e.consume(m),e.exit(i),o=m===40?41:m,s):n(m)}function s(m){return m===o?(e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):(e.enter(a),c(m))}function c(m){return m===o?(e.exit(a),s(o)):m===null?n(m):I(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),R(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===o||m===null||I(m)?(e.exit("chunkString"),c(m)):(e.consume(m),m===92?u:p)}function u(m){return m===o||m===92?(e.consume(m),p):p(m)}}function ut(e,t){let n;return r;function r(i){return I(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=true,r):O(i)?R(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}var Wr={name:"definition",tokenize:Fp},Op={partial:true,tokenize:Up};function Fp(e,t,n){let r=this,i;return a;function a(f){return e.enter("definition"),o(f)}function o(f){return Fn.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function l(f){return i=ge(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),s):n(f)}function s(f){return X(f)?ut(e,c)(f):c(f)}function c(f){return On(e,p,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function p(f){return e.attempt(Op,u,u)(f)}function u(f){return O(f)?R(e,m,"whitespace")(f):m(f)}function m(f){return f===null||I(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function Up(e,t,n){return r;function r(l){return X(l)?ut(e,i)(l):n(l)}function i(l){return Un(e,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function a(l){return O(l)?R(e,o,"whitespace")(l):o(l)}function o(l){return l===null||I(l)?t(l):n(l)}}var qr={name:"hardBreakEscape",tokenize:Bp};function Bp(e,t,n){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),i}function i(a){return I(a)?(e.exit("hardBreakEscape"),t(a)):n(a)}}var Yr={name:"headingAtx",resolve:Hp,tokenize:jp};function Hp(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},a={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},ce(e,r,n-r+1,[["enter",i,t],["enter",a,t],["exit",a,t],["exit",i,t]])),e}function jp(e,t,n){let r=0;return i;function i(p){return e.enter("atxHeading"),a(p)}function a(p){return e.enter("atxHeadingSequence"),o(p)}function o(p){return p===35&&r++<6?(e.consume(p),o):p===null||X(p)?(e.exit("atxHeadingSequence"),l(p)):n(p)}function l(p){return p===35?(e.enter("atxHeadingSequence"),s(p)):p===null||I(p)?(e.exit("atxHeading"),t(p)):O(p)?R(e,l,"whitespace")(p):(e.enter("atxHeadingText"),c(p))}function s(p){return p===35?(e.consume(p),s):(e.exit("atxHeadingSequence"),l(p))}function c(p){return p===null||p===35||X(p)?(e.exit("atxHeadingText"),l(p)):(e.consume(p),c)}}var il=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Kr=["pre","script","style","textarea"];var Xr={concrete:true,name:"htmlFlow",resolveTo:Wp,tokenize:qp},Vp={partial:true,tokenize:Kp},$p={partial:true,tokenize:Yp};function Wp(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function qp(e,t,n){let r=this,i,a,o,l,s;return c;function c(g){return p(g)}function p(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),u}function u(g){return g===33?(e.consume(g),m):g===47?(e.consume(g),a=true,y):g===63?(e.consume(g),i=3,r.interrupt?t:h):pe(g)?(e.consume(g),o=String.fromCharCode(g),z):n(g)}function m(g){return g===45?(e.consume(g),i=2,f):g===91?(e.consume(g),i=5,l=0,d):pe(g)?(e.consume(g),i=4,r.interrupt?t:h):n(g)}function f(g){return g===45?(e.consume(g),r.interrupt?t:h):n(g)}function d(g){let de="CDATA[";return g===de.charCodeAt(l++)?(e.consume(g),l===de.length?r.interrupt?t:B:d):n(g)}function y(g){return pe(g)?(e.consume(g),o=String.fromCharCode(g),z):n(g)}function z(g){if(g===null||g===47||g===62||X(g)){let de=g===47,De=o.toLowerCase();return !de&&!a&&Kr.includes(De)?(i=1,r.interrupt?t(g):B(g)):il.includes(o.toLowerCase())?(i=6,de?(e.consume(g),v):r.interrupt?t(g):B(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):a?k(g):S(g))}return g===45||oe(g)?(e.consume(g),o+=String.fromCharCode(g),z):n(g)}function v(g){return g===62?(e.consume(g),r.interrupt?t:B):n(g)}function k(g){return O(g)?(e.consume(g),k):b(g)}function S(g){return g===47?(e.consume(g),b):g===58||g===95||pe(g)?(e.consume(g),L):O(g)?(e.consume(g),S):b(g)}function L(g){return g===45||g===46||g===58||g===95||oe(g)?(e.consume(g),L):N(g)}function N(g){return g===61?(e.consume(g),_):O(g)?(e.consume(g),N):S(g)}function _(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),s=g,V):O(g)?(e.consume(g),_):Y(g)}function V(g){return g===s?(e.consume(g),s=null,H):g===null||I(g)?n(g):(e.consume(g),V)}function Y(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||X(g)?N(g):(e.consume(g),Y)}function H(g){return g===47||g===62||O(g)?S(g):n(g)}function b(g){return g===62?(e.consume(g),G):n(g)}function G(g){return g===null||I(g)?B(g):O(g)?(e.consume(g),G):n(g)}function B(g){return g===45&&i===2?(e.consume(g),Z):g===60&&i===1?(e.consume(g),P):g===62&&i===4?(e.consume(g),ue):g===63&&i===3?(e.consume(g),h):g===93&&i===5?(e.consume(g),fe):I(g)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Vp,ye,T)(g)):g===null||I(g)?(e.exit("htmlFlowData"),T(g)):(e.consume(g),B)}function T(g){return e.check($p,j,ye)(g)}function j(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),$}function $(g){return g===null||I(g)?T(g):(e.enter("htmlFlowData"),B(g))}function Z(g){return g===45?(e.consume(g),h):B(g)}function P(g){return g===47?(e.consume(g),o="",ee):B(g)}function ee(g){if(g===62){let de=o.toLowerCase();return Kr.includes(de)?(e.consume(g),ue):B(g)}return pe(g)&&o.length<8?(e.consume(g),o+=String.fromCharCode(g),ee):B(g)}function fe(g){return g===93?(e.consume(g),h):B(g)}function h(g){return g===62?(e.consume(g),ue):g===45&&i===2?(e.consume(g),h):B(g)}function ue(g){return g===null||I(g)?(e.exit("htmlFlowData"),ye(g)):(e.consume(g),ue)}function ye(g){return e.exit("htmlFlow"),t(g)}}function Yp(e,t,n){let r=this;return i;function i(o){return I(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):n(o)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function Kp(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Re,t,n)}}var Gr={name:"htmlText",tokenize:Xp};function Xp(e,t,n){let r=this,i,a,o;return l;function l(h){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(h),s}function s(h){return h===33?(e.consume(h),c):h===47?(e.consume(h),N):h===63?(e.consume(h),S):pe(h)?(e.consume(h),Y):n(h)}function c(h){return h===45?(e.consume(h),p):h===91?(e.consume(h),a=0,d):pe(h)?(e.consume(h),k):n(h)}function p(h){return h===45?(e.consume(h),f):n(h)}function u(h){return h===null?n(h):h===45?(e.consume(h),m):I(h)?(o=u,P(h)):(e.consume(h),u)}function m(h){return h===45?(e.consume(h),f):u(h)}function f(h){return h===62?Z(h):h===45?m(h):u(h)}function d(h){let ue="CDATA[";return h===ue.charCodeAt(a++)?(e.consume(h),a===ue.length?y:d):n(h)}function y(h){return h===null?n(h):h===93?(e.consume(h),z):I(h)?(o=y,P(h)):(e.consume(h),y)}function z(h){return h===93?(e.consume(h),v):y(h)}function v(h){return h===62?Z(h):h===93?(e.consume(h),v):y(h)}function k(h){return h===null||h===62?Z(h):I(h)?(o=k,P(h)):(e.consume(h),k)}function S(h){return h===null?n(h):h===63?(e.consume(h),L):I(h)?(o=S,P(h)):(e.consume(h),S)}function L(h){return h===62?Z(h):S(h)}function N(h){return pe(h)?(e.consume(h),_):n(h)}function _(h){return h===45||oe(h)?(e.consume(h),_):V(h)}function V(h){return I(h)?(o=V,P(h)):O(h)?(e.consume(h),V):Z(h)}function Y(h){return h===45||oe(h)?(e.consume(h),Y):h===47||h===62||X(h)?H(h):n(h)}function H(h){return h===47?(e.consume(h),Z):h===58||h===95||pe(h)?(e.consume(h),b):I(h)?(o=H,P(h)):O(h)?(e.consume(h),H):Z(h)}function b(h){return h===45||h===46||h===58||h===95||oe(h)?(e.consume(h),b):G(h)}function G(h){return h===61?(e.consume(h),B):I(h)?(o=G,P(h)):O(h)?(e.consume(h),G):H(h)}function B(h){return h===null||h===60||h===61||h===62||h===96?n(h):h===34||h===39?(e.consume(h),i=h,T):I(h)?(o=B,P(h)):O(h)?(e.consume(h),B):(e.consume(h),j)}function T(h){return h===i?(e.consume(h),i=void 0,$):h===null?n(h):I(h)?(o=T,P(h)):(e.consume(h),T)}function j(h){return h===null||h===34||h===39||h===60||h===61||h===96?n(h):h===47||h===62||X(h)?H(h):(e.consume(h),j)}function $(h){return h===47||h===62||X(h)?H(h):n(h)}function Z(h){return h===62?(e.consume(h),e.exit("htmlTextData"),e.exit("htmlText"),t):n(h)}function P(h){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),ee}function ee(h){return O(h)?R(e,fe,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):fe(h)}function fe(h){return e.enter("htmlTextData"),o(h)}}var pt={name:"labelEnd",resolveAll:Zp,resolveTo:ef,tokenize:tf},Gp={tokenize:nf},Jp={tokenize:rf},Qp={tokenize:of};function Zp(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let i=r.type==="labelImage"?4:2;r.type="data",t+=i;}}return e.length!==n.length&&ce(e,0,e.length,n),e}function ef(e,t){let n=e.length,r=0,i,a,o,l;for(;n--;)if(i=e[n][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=true);}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);let s={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[a][1].start},end:{...e[o][1].end}},p={type:"labelText",start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",s,t],["enter",c,t]],l=xe(l,e.slice(a+1,a+r+3)),l=xe(l,[["enter",p,t]]),l=xe(l,qe(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),l=xe(l,[["exit",p,t],e[o-2],e[o-1],["exit",c,t]]),l=xe(l,e.slice(o+1)),l=xe(l,[["exit",s,t]]),ce(e,a,e.length,l),e}function tf(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return l;function l(m){return a?a._inactive?u(m):(o=r.parser.defined.includes(ge(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(m),e.exit("labelMarker"),e.exit("labelEnd"),s):n(m)}function s(m){return m===40?e.attempt(Gp,p,o?p:u)(m):m===91?e.attempt(Jp,p,o?c:u)(m):o?p(m):u(m)}function c(m){return e.attempt(Qp,p,u)(m)}function p(m){return t(m)}function u(m){return a._balanced=true,n(m)}}function nf(e,t,n){return r;function r(u){return e.enter("resource"),e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),i}function i(u){return X(u)?ut(e,a)(u):a(u)}function a(u){return u===41?p(u):On(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(u)}function o(u){return X(u)?ut(e,s)(u):p(u)}function l(u){return n(u)}function s(u){return u===34||u===39||u===40?Un(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(u):p(u)}function c(u){return X(u)?ut(e,p)(u):p(u)}function p(u){return u===41?(e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),e.exit("resource"),t):n(u)}}function rf(e,t,n){let r=this;return i;function i(l){return Fn.call(r,e,a,o,"reference","referenceMarker","referenceString")(l)}function a(l){return r.parser.defined.includes(ge(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function o(l){return n(l)}}function of(e,t,n){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),i}function i(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),t):n(a)}}var Jr={name:"labelStartImage",resolveAll:pt.resolveAll,tokenize:af};function af(e,t,n){let r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}var Qr={name:"labelStartLink",resolveAll:pt.resolveAll,tokenize:lf};function lf(e,t,n){let r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}var nn={name:"lineEnding",tokenize:sf};function sf(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),R(e,t,"linePrefix")}}var ft={name:"thematicBreak",tokenize:cf};function cf(e,t,n){let r=0,i;return a;function a(c){return e.enter("thematicBreak"),o(c)}function o(c){return i=c,l(c)}function l(c){return c===i?(e.enter("thematicBreakSequence"),s(c)):r>=3&&(c===null||I(c))?(e.exit("thematicBreak"),t(c)):n(c)}function s(c){return c===i?(e.consume(c),r++,s):(e.exit("thematicBreakSequence"),O(c)?R(e,l,"whitespace")(c):l(c))}}var ve={continuation:{tokenize:mf},exit:hf,name:"list",tokenize:ff},uf={partial:true,tokenize:gf},pf={partial:true,tokenize:df};function ff(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],true).length:0,o=0;return l;function l(f){let d=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(d==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:Qt(f)){if(r.containerState.type||(r.containerState.type=d,e.enter(d,{_container:true})),d==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(ft,n,c)(f):c(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(f)}return n(f)}function s(f){return Qt(f)&&++o<10?(e.consume(f),s):(!r.interrupt||o<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),c(f)):n(f)}function c(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(Re,r.interrupt?n:p,e.attempt(uf,m,u))}function p(f){return r.containerState.initialBlankLine=true,a++,m(f)}function u(f){return O(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),m):n(f)}function m(f){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),true).length,t(f)}}function mf(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Re,i,a);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,R(e,t,"listItemIndent",r.containerState.size+1)(l)}function a(l){return r.containerState.furtherBlankLines||!O(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(pf,t,o)(l))}function o(l){return r.containerState._closeFlow=true,r.interrupt=void 0,R(e,e.attempt(ve,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function df(e,t,n){let r=this;return R(e,i,"listItemIndent",r.containerState.size+1);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],true).length===r.containerState.size?t(a):n(a)}}function hf(e){e.exit(this.containerState.type);}function gf(e,t,n){let r=this;return R(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){let o=r.events[r.events.length-1];return !O(a)&&o&&o[1].type==="listItemPrefixWhitespace"?t(a):n(a)}}var Bn={name:"setextUnderline",resolveTo:vf,tokenize:yf};function vf(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n);}else e[n][1].type==="content"&&e.splice(n,1),!a&&e[n][1].type==="definition"&&(a=n);let o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",a?(e.splice(i,0,["enter",o,t]),e.splice(a+1,0,["exit",e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function yf(e,t,n){let r=this,i;return a;function a(c){let p=r.events.length,u;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){u=r.events[p][1].type==="paragraph";break}return !r.parser.lazy[r.now().line]&&(r.interrupt||u)?(e.enter("setextHeadingLine"),i=c,o(c)):n(c)}function o(c){return e.enter("setextHeadingLineSequence"),l(c)}function l(c){return c===i?(e.consume(c),l):(e.exit("setextHeadingLineSequence"),O(c)?R(e,s,"lineSuffix")(c):s(c))}function s(c){return c===null||I(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}var ol={tokenize:xf};function xf(e){let t=this,n=e.attempt(Re,r,e.attempt(this.parser.constructs.flowInitial,i,R(e,e.attempt(this.parser.constructs.flow,i,e.attempt($r,i)),"linePrefix")));return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),t.currentConstruct=void 0,n}}var al={resolveAll:ul()},ll=cl("string"),sl=cl("text");function cl(e){return {resolveAll:ul(e==="text"?bf:void 0),tokenize:t};function t(n){let r=this,i=this.parser.constructs[e],a=n.attempt(i,o,l);return o;function o(p){return c(p)?a(p):l(p)}function l(p){if(p===null){n.consume(p);return}return n.enter("data"),n.consume(p),s}function s(p){return c(p)?(n.exit("data"),a(p)):(n.consume(p),s)}function c(p){if(p===null)return  true;let u=i[p],m=-1;if(u)for(;++m<u.length;){let f=u[m];if(!f.previous||f.previous.call(r,r.previous))return  true}return  false}}}function ul(e){return t;function t(n,r){let i=-1,a;for(;++i<=n.length;)a===void 0?n[i]&&n[i][1].type==="data"&&(a=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==a+2&&(n[a][1].end=n[i-1][1].end,n.splice(a+2,i-a-2),i=a+2),a=void 0);return e?e(n,r):n}}function bf(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,l=0,s;for(;a--;){let c=i[a];if(typeof c=="string"){for(o=c.length;c.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1;}else if(c===-2)s=true,l++;else if(c!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){let c={type:n===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2);}n++;}return e}var Zr={};uo(Zr,{attentionMarkers:()=>Af,contentInitial:()=>kf,disable:()=>If,document:()=>wf,flow:()=>zf,flowInitial:()=>_f,insideSpan:()=>Ef,string:()=>Sf,text:()=>Cf});var wf={42:ve,43:ve,45:ve,48:ve,49:ve,50:ve,51:ve,52:ve,53:ve,54:ve,55:ve,56:ve,57:ve,62:Pn},kf={91:Wr},_f={[-2]:en,[-1]:en,32:en},zf={35:Yr,42:ft,45:[Bn,ft],60:Xr,61:Bn,95:ft,96:Rn,126:Rn},Sf={38:Mn,92:Ln},Cf={[-5]:nn,[-4]:nn,[-3]:nn,33:Jr,38:Mn,42:Zt,60:[jr,Gr],91:Qr,92:[qr,Ln],93:pt,95:Zt,96:Vr},Ef={null:[Zt,al]},Af={null:[42,95]},If={null:[]};function pl(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],l=[],c={attempt:H(V),check:H(Y),consume:L,enter:N,exit:_,interrupt:H(Y,{interrupt:true})},p={code:null,containerState:{},defineSkip:v,events:[],now:z,parser:e,previous:null,sliceSerialize:d,sliceStream:y,write:f},u=t.tokenize.call(p,c);return t.resolveAll&&a.push(t),p;function f(T){return o=xe(o,T),k(),o[o.length-1]!==null?[]:(b(t,0),p.events=qe(a,p.events,p),p.events)}function d(T,j){return Pf(y(T),j)}function y(T){return Tf(o,T)}function z(){let{_bufferIndex:T,_index:j,line:$,column:Z,offset:P}=r;return {_bufferIndex:T,_index:j,line:$,column:Z,offset:P}}function v(T){i[T.line]=T.column,B();}function k(){let T;for(;r._index<o.length;){let j=o[r._index];if(typeof j=="string")for(T=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===T&&r._bufferIndex<j.length;)S(j.charCodeAt(r._bufferIndex));else S(j);}}function S(T){u=u(T);}function L(T){I(T)?(r.line++,r.column=1,r.offset+=T===-3?2:1,B()):T!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),p.previous=T;}function N(T,j){let $=j||{};return $.type=T,$.start=z(),p.events.push(["enter",$,p]),l.push($),$}function _(T){let j=l.pop();return j.end=z(),p.events.push(["exit",j,p]),j}function V(T,j){b(T,j.from);}function Y(T,j){j.restore();}function H(T,j){return $;function $(Z,P,ee){let fe,h,ue,ye;return Array.isArray(Z)?de(Z):"tokenize"in Z?de([Z]):g(Z);function g(ae){return Je;function Je(Ae){let A=Ae!==null&&ae[Ae],M=Ae!==null&&ae.null,q=[...Array.isArray(A)?A:A?[A]:[],...Array.isArray(M)?M:M?[M]:[]];return de(q)(Ae)}}function de(ae){return fe=ae,h=0,ae.length===0?ee:De(ae[h])}function De(ae){return Je;function Je(Ae){return ye=G(),ue=ae,ae.partial||(p.currentConstruct=ae),ae.name&&p.parser.constructs.disable.null.includes(ae.name)?vt():ae.tokenize.call(j?Object.assign(Object.create(p),j):p,c,Ft,vt)(Ae)}}function Ft(ae){return T(ue,ye),P}function vt(ae){return ye.restore(),++h<fe.length?De(fe[h]):ee}}}function b(T,j){T.resolveAll&&!a.includes(T)&&a.push(T),T.resolve&&ce(p.events,j,p.events.length-j,T.resolve(p.events.slice(j),p)),T.resolveTo&&(p.events=T.resolveTo(p.events,p));}function G(){let T=z(),j=p.previous,$=p.currentConstruct,Z=p.events.length,P=Array.from(l);return {from:Z,restore:ee};function ee(){r=T,p.previous=j,p.currentConstruct=$,p.events.length=Z,l=P,B();}}function B(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1);}}function Tf(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else {if(o=e.slice(n,i),r>-1){let l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift();}a>0&&o.push(e[i].slice(0,a));}return o}function Pf(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a=="string")o=a;else switch(a){case  -5:{o="\r";break}case  -4:{o=`
`;break}case  -3:{o=`\r
`;break}case  -2:{o=t?" ":"	";break}case  -1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(a);}i=a===-2,r.push(o);}return r.join("")}function ei(e){let r={constructs:In([Zr,...(e||{}).extensions||[]]),content:i(Za),defined:[],document:i(tl),flow:i(ol),lazy:{},string:i(ll),text:i(sl)};return r;function i(a){return o;function o(l){return pl(r,a,l)}}}function ti(e){for(;!Dn(e););return e}var fl=/[\0\t\n\r]/g;function ni(){let e=1,t="",n=true,r;return i;function i(a,o,l){let s=[],c,p,u,m,f;for(a=t+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a)),u=0,t="",n&&(a.charCodeAt(0)===65279&&u++,n=void 0);u<a.length;){if(fl.lastIndex=u,c=fl.exec(a),m=c&&c.index!==void 0?c.index:a.length,f=a.charCodeAt(m),!c){t=a.slice(u);break}if(f===10&&u===m&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),u<m&&(s.push(a.slice(u,m)),e+=m-u),f){case 0:{s.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,s.push(-2);e++<p;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=true,e=1;}u=m+1;}return l&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var Lf=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ml(e){return e.replace(Lf,Mf)}function Mf(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let i=n.charCodeAt(1),a=i===120||i===88;return Tn(n.slice(a?2:1),a?16:10)}return zt(n)||e}var hl={}.hasOwnProperty;function ri(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Rf(n)(ti(ei(n).document().write(ni()(e,t,true))))}function Rf(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(yt),autolinkProtocol:H,autolinkEmail:H,atxHeading:a(te),blockQuote:a(Ae),characterEscape:H,characterReference:H,codeFenced:a(A),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(A,o),codeText:a(M,o),codeTextData:H,data:H,codeFlowValue:H,definition:a(q),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(U),hardBreakEscape:a(ne),hardBreakTrailing:a(ne),htmlFlow:a(Ie,o),htmlFlowData:H,htmlText:a(Ie,o),htmlTextData:H,image:a(ze),label:o,link:a(yt),listItem:a(Ut),listItemValue:m,listOrdered:a(xt,u),listUnordered:a(xt),paragraph:a(Qe),reference:g,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(te),strong:a(Ze),thematicBreak:a(un)},exit:{atxHeading:s(),atxHeadingSequence:N,autolink:s(),autolinkEmail:Je,autolinkProtocol:ae,blockQuote:s(),characterEscapeValue:b,characterReferenceMarkerHexadecimal:De,characterReferenceMarkerNumeric:De,characterReferenceValue:Ft,characterReference:vt,codeFenced:s(z),codeFencedFence:y,codeFencedFenceInfo:f,codeFencedFenceMeta:d,codeFlowValue:b,codeIndented:s(v),codeText:s($),codeTextData:b,data:b,definition:s(),definitionDestinationString:L,definitionLabelString:k,definitionTitleString:S,emphasis:s(),hardBreakEscape:s(B),hardBreakTrailing:s(B),htmlFlow:s(T),htmlFlowData:b,htmlText:s(j),htmlTextData:b,image:s(P),label:fe,labelText:ee,lineEnding:G,link:s(Z),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:de,resourceDestinationString:h,resourceTitleString:ue,resource:ye,setextHeading:s(Y),setextHeadingLineSequence:V,setextHeadingText:_,strong:s(),thematicBreak:s()}};gl(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(w){let E={type:"root",children:[]},D={stack:[E],tokenStack:[],config:t,enter:l,exit:c,buffer:o,resume:p,data:n},K=[],J=-1;for(;++J<w.length;)if(w[J][1].type==="listOrdered"||w[J][1].type==="listUnordered")if(w[J][0]==="enter")K.push(J);else {let be=K.pop();J=i(w,be,J);}for(J=-1;++J<w.length;){let be=t[w[J][0]];hl.call(be,w[J][1].type)&&be[w[J][1].type].call(Object.assign({sliceSerialize:w[J][2].sliceSerialize},D),w[J][1]);}if(D.tokenStack.length>0){let be=D.tokenStack[D.tokenStack.length-1];(be[1]||dl).call(D,void 0,be[0]);}for(E.position={start:Ye(w.length>0?w[0][1].start:{line:1,column:1,offset:0}),end:Ye(w.length>0?w[w.length-2][1].end:{line:1,column:1,offset:0})},J=-1;++J<t.transforms.length;)E=t.transforms[J](E)||E;return E}function i(w,E,D){let K=E-1,J=-1,be=false,et,Oe,Bt,Ht;for(;++K<=D;){let ke=w[K];switch(ke[1].type){case "listUnordered":case "listOrdered":case "blockQuote":{ke[0]==="enter"?J++:J--,Ht=void 0;break}case "lineEndingBlank":{ke[0]==="enter"&&(et&&!Ht&&!J&&!Bt&&(Bt=K),Ht=void 0);break}case "linePrefix":case "listItemValue":case "listItemMarker":case "listItemPrefix":case "listItemPrefixWhitespace":break;default:Ht=void 0;}if(!J&&ke[0]==="enter"&&ke[1].type==="listItemPrefix"||J===-1&&ke[0]==="exit"&&(ke[1].type==="listUnordered"||ke[1].type==="listOrdered")){if(et){let bt=K;for(Oe=void 0;bt--;){let Fe=w[bt];if(Fe[1].type==="lineEnding"||Fe[1].type==="lineEndingBlank"){if(Fe[0]==="exit")continue;Oe&&(w[Oe][1].type="lineEndingBlank",be=true),Fe[1].type="lineEnding",Oe=bt;}else if(!(Fe[1].type==="linePrefix"||Fe[1].type==="blockQuotePrefix"||Fe[1].type==="blockQuotePrefixWhitespace"||Fe[1].type==="blockQuoteMarker"||Fe[1].type==="listItemIndent"))break}Bt&&(!Oe||Bt<Oe)&&(et._spread=true),et.end=Object.assign({},Oe?w[Oe][1].start:ke[1].end),w.splice(Oe||K,0,["exit",et,ke[2]]),K++,D++;}if(ke[1].type==="listItemPrefix"){let bt={type:"listItem",_spread:false,start:Object.assign({},ke[1].start),end:void 0};et=bt,w.splice(K,0,["enter",bt,ke[2]]),K++,D++,Bt=void 0,Ht=true;}}}return w[E][1]._spread=be,D}function a(w,E){return D;function D(K){l.call(this,w(K),K),E&&E.call(this,K);}}function o(){this.stack.push({type:"fragment",children:[]});}function l(w,E,D){this.stack[this.stack.length-1].children.push(w),this.stack.push(w),this.tokenStack.push([E,D||void 0]),w.position={start:Ye(E.start),end:void 0};}function s(w){return E;function E(D){w&&w.call(this,D),c.call(this,D);}}function c(w,E){let D=this.stack.pop(),K=this.tokenStack.pop();if(K)K[0].type!==w.type&&(E?E.call(this,w,K[0]):(K[1]||dl).call(this,w,K[0]));else throw new Error("Cannot close `"+w.type+"` ("+$e({start:w.start,end:w.end})+"): it\u2019s not open");D.position.end=Ye(w.end);}function p(){return lt(this.stack.pop())}function u(){this.data.expectingFirstListItemValue=true;}function m(w){if(this.data.expectingFirstListItemValue){let E=this.stack[this.stack.length-2];E.start=Number.parseInt(this.sliceSerialize(w),10),this.data.expectingFirstListItemValue=void 0;}}function f(){let w=this.resume(),E=this.stack[this.stack.length-1];E.lang=w;}function d(){let w=this.resume(),E=this.stack[this.stack.length-1];E.meta=w;}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=true);}function z(){let w=this.resume(),E=this.stack[this.stack.length-1];E.value=w.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0;}function v(){let w=this.resume(),E=this.stack[this.stack.length-1];E.value=w.replace(/(\r?\n|\r)$/g,"");}function k(w){let E=this.resume(),D=this.stack[this.stack.length-1];D.label=E,D.identifier=ge(this.sliceSerialize(w)).toLowerCase();}function S(){let w=this.resume(),E=this.stack[this.stack.length-1];E.title=w;}function L(){let w=this.resume(),E=this.stack[this.stack.length-1];E.url=w;}function N(w){let E=this.stack[this.stack.length-1];if(!E.depth){let D=this.sliceSerialize(w).length;E.depth=D;}}function _(){this.data.setextHeadingSlurpLineEnding=true;}function V(w){let E=this.stack[this.stack.length-1];E.depth=this.sliceSerialize(w).codePointAt(0)===61?1:2;}function Y(){this.data.setextHeadingSlurpLineEnding=void 0;}function H(w){let D=this.stack[this.stack.length-1].children,K=D[D.length-1];(!K||K.type!=="text")&&(K=or(),K.position={start:Ye(w.start),end:void 0},D.push(K)),this.stack.push(K);}function b(w){let E=this.stack.pop();E.value+=this.sliceSerialize(w),E.position.end=Ye(w.end);}function G(w){let E=this.stack[this.stack.length-1];if(this.data.atHardBreak){let D=E.children[E.children.length-1];D.position.end=Ye(w.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(E.type)&&(H.call(this,w),b.call(this,w));}function B(){this.data.atHardBreak=true;}function T(){let w=this.resume(),E=this.stack[this.stack.length-1];E.value=w;}function j(){let w=this.resume(),E=this.stack[this.stack.length-1];E.value=w;}function $(){let w=this.resume(),E=this.stack[this.stack.length-1];E.value=w;}function Z(){let w=this.stack[this.stack.length-1];if(this.data.inReference){let E=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=E,delete w.url,delete w.title;}else delete w.identifier,delete w.label;this.data.referenceType=void 0;}function P(){let w=this.stack[this.stack.length-1];if(this.data.inReference){let E=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=E,delete w.url,delete w.title;}else delete w.identifier,delete w.label;this.data.referenceType=void 0;}function ee(w){let E=this.sliceSerialize(w),D=this.stack[this.stack.length-2];D.label=ml(E),D.identifier=ge(E).toLowerCase();}function fe(){let w=this.stack[this.stack.length-1],E=this.resume(),D=this.stack[this.stack.length-1];if(this.data.inReference=true,D.type==="link"){let K=w.children;D.children=K;}else D.alt=E;}function h(){let w=this.resume(),E=this.stack[this.stack.length-1];E.url=w;}function ue(){let w=this.resume(),E=this.stack[this.stack.length-1];E.title=w;}function ye(){this.data.inReference=void 0;}function g(){this.data.referenceType="collapsed";}function de(w){let E=this.resume(),D=this.stack[this.stack.length-1];D.label=E,D.identifier=ge(this.sliceSerialize(w)).toLowerCase(),this.data.referenceType="full";}function De(w){this.data.characterReferenceType=w.type;}function Ft(w){let E=this.sliceSerialize(w),D=this.data.characterReferenceType,K;D?(K=Tn(E,D==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):K=zt(E);let J=this.stack[this.stack.length-1];J.value+=K;}function vt(w){let E=this.stack.pop();E.position.end=Ye(w.end);}function ae(w){b.call(this,w);let E=this.stack[this.stack.length-1];E.url=this.sliceSerialize(w);}function Je(w){b.call(this,w);let E=this.stack[this.stack.length-1];E.url="mailto:"+this.sliceSerialize(w);}function Ae(){return {type:"blockquote",children:[]}}function A(){return {type:"code",lang:null,meta:null,value:""}}function M(){return {type:"inlineCode",value:""}}function q(){return {type:"definition",identifier:"",label:null,title:null,url:""}}function U(){return {type:"emphasis",children:[]}}function te(){return {type:"heading",depth:0,children:[]}}function ne(){return {type:"break"}}function Ie(){return {type:"html",value:""}}function ze(){return {type:"image",title:null,url:"",alt:null}}function yt(){return {type:"link",title:null,url:"",children:[]}}function xt(w){return {type:"list",ordered:w.type==="listOrdered",start:null,spread:w._spread,children:[]}}function Ut(w){return {type:"listItem",spread:w._spread,checked:null,children:[]}}function Qe(){return {type:"paragraph",children:[]}}function Ze(){return {type:"strong",children:[]}}function or(){return {type:"text",value:""}}function un(){return {type:"thematicBreak"}}}function Ye(e){return {line:e.line,column:e.column,offset:e.offset}}function gl(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?gl(e,r):Nf(e,r);}}function Nf(e,t){let n;for(n in t)if(hl.call(t,n))switch(n){case "canContainEols":{let r=t[n];r&&e[n].push(...r);break}case "transforms":{let r=t[n];r&&e[n].push(...r);break}case "enter":case "exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function dl(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+$e({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+$e({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+$e({start:t.start,end:t.end})+") is still open")}function Hn(e){let t=this;t.parser=n;function n(r){return ri(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function vl(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),true)};return e.patch(t,n),e.applyData(t,n)}function yl(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function xl(e,t){let n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let a={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(t,a),a}function bl(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function wl(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function kl(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Ee(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,l+=1,e.footnoteCounts.set(r,l);let s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:true,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,s);let c={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,c),e.applyData(t,c)}function _l(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function zl(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function jn(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return [{type:"text",value:"!["+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});let o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function Sl(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return jn(e,t);let i={src:Ee(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function Cl(e,t){let n={src:Ee(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function El(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Al(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return jn(e,t);let i={href:Ee(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Il(e,t){let n={href:Ee(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Tl(e,t,n){let r=e.all(t),i=n?Df(n):Pl(t),a={},o=[];if(typeof t.checked=="boolean"){let p=r[0],u;p&&p.type==="element"&&p.tagName==="p"?u=p:(u={type:"element",tagName:"p",properties:{},children:[]},r.unshift(u)),u.children.length>0&&u.children.unshift({type:"text",value:" "}),u.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:true},children:[]}),a.className=["task-list-item"];}let l=-1;for(;++l<r.length;){let p=r[l];(i||l!==0||p.type!=="element"||p.tagName!=="p")&&o.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?o.push(...p.children):o.push(p);}let s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});let c={type:"element",tagName:"li",properties:a,children:o};return e.patch(t,c),e.applyData(t,c)}function Df(e){let t=false;if(e.type==="list"){t=e.spread||false;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Pl(n[r]);}return t}function Pl(e){let t=e.spread;return t??e.children.length>1}function Ll(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){let o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let a={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,true)};return e.patch(t,a),e.applyData(t,a)}function Ml(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Rl(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Nl(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Dl(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],true)};e.patch(t.children[0],o),i.push(o);}if(n.length>0){let o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,true)},l=_t(t.children[1]),s=En(t.children[t.children.length-1]);l&&s&&(o.position={start:l,end:s}),i.push(o);}let a={type:"element",tagName:"table",properties:{},children:e.wrap(i,true)};return e.patch(t,a),e.applyData(t,a)}function Ol(e,t,n){let r=n?n.children:void 0,a=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,l=o?o.length:t.children.length,s=-1,c=[];for(;++s<l;){let u=t.children[s],m={},f=o?o[s]:void 0;f&&(m.align=f);let d={type:"element",tagName:a,properties:m,children:[]};u&&(d.children=e.all(u),e.patch(u,d),d=e.applyData(u,d)),c.push(d);}let p={type:"element",tagName:"tr",properties:{},children:e.wrap(c,true)};return e.patch(t,p),e.applyData(t,p)}function Fl(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Bl(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(Ul(t.slice(i,r.index),i>0,true),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(Ul(t.slice(i),i>0,false)),a.join("")}function Ul(e,t,n){let r=0,i=e.length;if(t){let a=e.codePointAt(r);for(;a===9||a===32;)r++,a=e.codePointAt(r);}if(n){let a=e.codePointAt(i-1);for(;a===9||a===32;)i--,a=e.codePointAt(i-1);}return i>r?e.slice(r,i):""}function Hl(e,t){let n={type:"text",value:Bl(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function jl(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var Vl={blockquote:vl,break:yl,code:xl,delete:bl,emphasis:wl,footnoteReference:kl,heading:_l,html:zl,imageReference:Sl,image:Cl,inlineCode:El,linkReference:Al,link:Il,listItem:Tl,list:Ll,paragraph:Ml,root:Rl,strong:Nl,table:Dl,tableCell:Fl,tableRow:Ol,text:Hl,thematicBreak:jl,toml:Vn,yaml:Vn,definition:Vn,footnoteDefinition:Vn};function Vn(){}var $l=typeof self=="object"?self:globalThis,Bf=(e,t)=>{let n=(i,a)=>(e.set(a,i),i),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case  -1:return n(o,i);case 1:{let l=n([],i);for(let s of o)l.push(r(s));return l}case 2:{let l=n({},i);for(let[s,c]of o)l[r(s)]=r(c);return l}case 3:return n(new Date(o),i);case 4:{let{source:l,flags:s}=o;return n(new RegExp(l,s),i)}case 5:{let l=n(new Map,i);for(let[s,c]of o)l.set(r(s),r(c));return l}case 6:{let l=n(new Set,i);for(let s of o)l.add(r(s));return l}case 7:{let{name:l,message:s}=o;return n(new $l[l](s),i)}case 8:return n(BigInt(o),i);case "BigInt":return n(Object(BigInt(o)),i);case "ArrayBuffer":return n(new Uint8Array(o).buffer,o);case "DataView":{let{buffer:l}=new Uint8Array(o);return n(new DataView(l),o)}}return n(new $l[a](o),i)};return r},ai=e=>Bf(new Map,e)(0);var St="",{toString:Hf}={},{keys:jf}=Object,rn=e=>{let t=typeof e;if(t!=="object"||!e)return [0,t];let n=Hf.call(e).slice(8,-1);switch(n){case "Array":return [1,St];case "Object":return [2,St];case "Date":return [3,St];case "RegExp":return [4,St];case "Map":return [5,St];case "Set":return [6,St];case "DataView":return [1,n]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},Wn=([e,t])=>e===0&&(t==="function"||t==="symbol"),Vf=(e,t,n,r)=>{let i=(o,l)=>{let s=r.push(o)-1;return n.set(l,s),s},a=o=>{if(n.has(o))return n.get(o);let[l,s]=rn(o);switch(l){case 0:{let p=o;switch(s){case "bigint":l=8,p=o.toString();break;case "function":case "symbol":if(e)throw new TypeError("unable to serialize "+s);p=null;break;case "undefined":return i([-1],o)}return i([l,p],o)}case 1:{if(s){let m=o;return s==="DataView"?m=new Uint8Array(o.buffer):s==="ArrayBuffer"&&(m=new Uint8Array(o)),i([s,[...m]],o)}let p=[],u=i([l,p],o);for(let m of o)p.push(a(m));return u}case 2:{if(s)switch(s){case "BigInt":return i([s,o.toString()],o);case "Boolean":case "Number":case "String":return i([s,o.valueOf()],o)}if(t&&"toJSON"in o)return a(o.toJSON());let p=[],u=i([l,p],o);for(let m of jf(o))(e||!Wn(rn(o[m])))&&p.push([a(m),a(o[m])]);return u}case 3:return i([l,o.toISOString()],o);case 4:{let{source:p,flags:u}=o;return i([l,{source:p,flags:u}],o)}case 5:{let p=[],u=i([l,p],o);for(let[m,f]of o)(e||!(Wn(rn(m))||Wn(rn(f))))&&p.push([a(m),a(f)]);return u}case 6:{let p=[],u=i([l,p],o);for(let m of o)(e||!Wn(rn(m)))&&p.push(a(m));return u}}let{message:c}=o;return i([l,{name:s,message:c}],o)};return a},li=(e,{json:t,lossy:n}={})=>{let r=[];return Vf(!(t||n),!!t,new Map,r)(e),r};var Ct=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?ai(li(e,t)):structuredClone(e):(e,t)=>ai(li(e,t));function $f(e,t){let n=[{type:"text",value:"\u21A9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Wf(e,t){return "Back to reference "+(e+1)+(t>1?"-"+t:"")}function Xl(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||$f,r=e.options.footnoteBackLabel||Wf,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[],s=-1;for(;++s<e.footnoteOrder.length;){let c=e.footnoteById.get(e.footnoteOrder[s]);if(!c)continue;let p=e.all(c),u=String(c.identifier).toUpperCase(),m=Ee(u.toLowerCase()),f=0,d=[],y=e.footnoteCounts.get(u);for(;y!==void 0&&++f<=y;){d.length>0&&d.push({type:"text",value:" "});let k=typeof n=="string"?n:n(s,f);typeof k=="string"&&(k={type:"text",value:k}),d.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+m+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,f),className:["data-footnote-backref"]},children:Array.isArray(k)?k:[k]});}let z=p[p.length-1];if(z&&z.type==="element"&&z.tagName==="p"){let k=z.children[z.children.length-1];k&&k.type==="text"?k.value+=" ":z.children.push({type:"text",value:" "}),z.children.push(...d);}else p.push(...d);let v={type:"element",tagName:"li",properties:{id:t+"fn-"+m},children:e.wrap(p,true)};e.patch(c,v),l.push(v);}if(l.length!==0)return {type:"element",tagName:"section",properties:{dataFootnotes:true,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...Ct(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,true)},{type:"text",value:`
`}]}}var Ke=(function(e){if(e==null)return Xf;if(typeof e=="function")return qn(e);if(typeof e=="object")return Array.isArray(e)?qf(e):Yf(e);if(typeof e=="string")return Kf(e);throw new Error("Expected function, string, or object as test")});function qf(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Ke(e[n]);return qn(r);function r(...i){let a=-1;for(;++a<t.length;)if(t[a].apply(this,i))return  true;return  false}}function Yf(e){let t=e;return qn(n);function n(r){let i=r,a;for(a in e)if(i[a]!==t[a])return  false;return  true}}function Kf(e){return qn(t);function t(n){return n&&n.type===e}}function qn(e){return t;function t(n,r,i){return !!(Gf(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function Xf(){return  true}function Gf(e){return e!==null&&typeof e=="object"&&"type"in e}var Gl=[],Yn=true,mt=false,Kn="skip";function on(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;let a=Ke(i),o=r?-1:1;l(e,void 0,[])();function l(s,c,p){let u=s&&typeof s=="object"?s:{};if(typeof u.type=="string"){let f=typeof u.tagName=="string"?u.tagName:typeof u.name=="string"?u.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(s.type+(f?"<"+f+">":""))+")"});}return m;function m(){let f=Gl,d,y,z;if((!t||a(s,c,p[p.length-1]||void 0))&&(f=Jf(n(s,p)),f[0]===mt))return f;if("children"in s&&s.children){let v=s;if(v.children&&f[0]!==Kn)for(y=(r?v.children.length:-1)+o,z=p.concat(v);y>-1&&y<v.children.length;){let k=v.children[y];if(d=l(k,y,z)(),d[0]===mt)return d;y=typeof d[1]=="number"?d[1]:y+o;}}return f}}}function Jf(e){return Array.isArray(e)?e:typeof e=="number"?[Yn,e]:e==null?Gl:[e]}function dt(e,t,n,r){let i,a,o;typeof t=="function"&&typeof n!="function"?(a=void 0,o=t,i=n):(a=t,o=n,i=r),on(e,a,l,i);function l(s,c){let p=c[c.length-1],u=p?p.children.indexOf(s):void 0;return o(s,u,p)}}var si={}.hasOwnProperty,Qf={};function Ql(e,t){let n=t||Qf,r=new Map,i=new Map,a=new Map,o={...Vl,...n.handlers},l={all:c,applyData:em,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:o,one:s,options:n,patch:Zf,wrap:nm};return dt(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){let u=p.type==="definition"?r:i,m=String(p.identifier).toUpperCase();u.has(m)||u.set(m,p);}}),l;function s(p,u){let m=p.type,f=l.handlers[m];if(si.call(l.handlers,m)&&f)return f(l,p,u);if(l.options.passThrough&&l.options.passThrough.includes(m)){if("children"in p){let{children:y,...z}=p,v=Ct(z);return v.children=l.all(p),v}return Ct(p)}return (l.options.unknownHandler||tm)(l,p,u)}function c(p){let u=[];if("children"in p){let m=p.children,f=-1;for(;++f<m.length;){let d=l.one(m[f],p);if(d){if(f&&m[f-1].type==="break"&&(!Array.isArray(d)&&d.type==="text"&&(d.value=Jl(d.value)),!Array.isArray(d)&&d.type==="element")){let y=d.children[0];y&&y.type==="text"&&(y.value=Jl(y.value));}Array.isArray(d)?u.push(...d):u.push(d);}}}return u}}function Zf(e,t){e.position&&(t.position=Rr(e));}function em(e,t){let n=t;if(e&&e.data){let r=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else {let o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o};}n.type==="element"&&a&&Object.assign(n.properties,Ct(a)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i);}return n}function tm(e,t){let n=t.data||{},r="value"in t&&!(si.call(n,"hProperties")||si.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function nm(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Jl(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Xn(e,t){let n=Ql(e,t),r=n.one(e,void 0),i=Xl(n),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&(a.children.push({type:"text",value:`
`},i)),a}function Gn(e,t){return e&&"run"in e?async function(n,r){let i=Xn(n,{file:r,...t});await e.run(i,r);}:function(n,r){return Xn(n,{file:r,...e||t})}}function ci(e){if(e)throw e}var Zn=po(ls());function an(e){if(typeof e!="object"||e===null)return  false;let t=Object.getPrototypeOf(e);return (t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ui(){let e=[],t={run:n,use:r};return t;function n(...i){let a=-1,o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(s,...c){let p=e[++a],u=-1;if(s){o(s);return}for(;++u<i.length;)(c[u]===null||c[u]===void 0)&&(c[u]=i[u]);i=c,p?ss(p,l)(...c):o(null,...c);}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function ss(e,t){let n;return r;function r(...o){let l=e.length>o.length,s;l&&o.push(i);try{s=e.apply(this,o);}catch(c){let p=c;if(l&&n)throw p;return i(p)}l||(s&&s.then&&typeof s.then=="function"?s.then(a,i):s instanceof Error?i(s):a(s));}function i(o,...l){n||(n=true,t(o,...l));}function a(o){i(null,o);}}var Pe={basename:rm,dirname:im,extname:om,join:am,sep:"/"};function rm(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ln(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=true,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return "";let o=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=true,o=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function im(e){if(ln(e),e.length===0)return ".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=true);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function om(e){ln(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let l=e.codePointAt(t);if(l===47){if(o){r=t+1;break}continue}n<0&&(o=true,n=t+1),l===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1);}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function am(...e){let t=-1,n;for(;++t<e.length;)ln(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":lm(n)}function lm(e){ln(e);let t=e.codePointAt(0)===47,n=sm(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function sm(e,t){let n="",r=0,i=-1,a=0,o=-1,l,s;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else {if(l===47)break;l=47;}if(l===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=o,a=0;continue}}else if(n.length>0){n="",r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2);}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0;}else l===46&&a>-1?a++:a=-1;}return n}function ln(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}var cs={cwd:cm};function cm(){return "/"}function Et(e){return !!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function us(e){if(typeof e=="string")e=new URL(e);else if(!Et(e)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return um(e)}function um(e){if(e.hostname!==""){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}var pi=["history","path","basename","stem","extname","dirname"],ht=class{constructor(t){let n;t?Et(t)?n={path:t}:typeof t=="string"||pm(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":cs.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<pi.length;){let a=pi[r];a in n&&n[a]!==void 0&&n[a]!==null&&(this[a]=a==="history"?[...n[a]]:n[a]);}let i;for(i in n)pi.includes(i)||(this[i]=n[i]);}get basename(){return typeof this.path=="string"?Pe.basename(this.path):void 0}set basename(t){mi(t,"basename"),fi(t,"basename"),this.path=Pe.join(this.dirname||"",t);}get dirname(){return typeof this.path=="string"?Pe.dirname(this.path):void 0}set dirname(t){ps(this.basename,"dirname"),this.path=Pe.join(t||"",this.basename);}get extname(){return typeof this.path=="string"?Pe.extname(this.path):void 0}set extname(t){if(fi(t,"extname"),ps(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Pe.join(this.dirname,this.stem+(t||""));}get path(){return this.history[this.history.length-1]}set path(t){Et(t)&&(t=us(t)),mi(t,"path"),this.path!==t&&this.history.push(t);}get stem(){return typeof this.path=="string"?Pe.basename(this.path,this.extname):void 0}set stem(t){mi(t,"stem"),fi(t,"stem"),this.path=Pe.join(this.dirname||"",t+(this.extname||""));}fail(t,n,r){let i=this.message(t,n,r);throw i.fatal=true,i}info(t,n,r){let i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){let i=new se(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=false,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function fi(e,t){if(e&&e.includes(Pe.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Pe.sep+"`")}function mi(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function ps(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function pm(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var fs=(function(e){let r=this.constructor.prototype,i=r[e],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a});var fm={}.hasOwnProperty,vi=class e extends fs{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ui();}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r);}return t.data((0, Zn.default)(true,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(gi("data",this.frozen),this.namespace[t]=n,this):fm.call(this.namespace,t)&&this.namespace[t]||void 0:t?(gi("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===false)continue;r[0]===true&&(r[0]=void 0);let i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i);}return this.frozen=true,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();let n=Qn(t),r=this.parser||this.Parser;return di("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),di("process",this.parser||this.Parser),hi("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(a,o){let l=Qn(t),s=r.parse(l);r.run(s,l,function(p,u,m){if(p||!u||!m)return c(p);let f=u,d=r.stringify(f,m);dm(d)?m.value=d:m.result=d,c(p,m);});function c(p,u){p||!u?o(p):a?a(u):n(void 0,u);}}}processSync(t){let n=false,r;return this.freeze(),di("processSync",this.parser||this.Parser),hi("processSync",this.compiler||this.Compiler),this.process(t,i),ds("processSync","process",n),r;function i(a,o){n=true,ci(a),r=o;}}run(t,n,r){ms(t),this.freeze();let i=this.transformers;return !r&&typeof n=="function"&&(r=n,n=void 0),r?a(void 0,r):new Promise(a);function a(o,l){let s=Qn(n);i.run(t,s,c);function c(p,u,m){let f=u||t;p?l(p):o?o(f):r(void 0,f,m);}}}runSync(t,n){let r=false,i;return this.run(t,n,a),ds("runSync","run",r),i;function a(o,l){ci(o),i=l,r=true;}}stringify(t,n){this.freeze();let r=Qn(n),i=this.compiler||this.Compiler;return hi("stringify",i),ms(t),i(t,r)}use(t,...n){let r=this.attachers,i=this.namespace;if(gi("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function a(c){if(typeof c=="function")s(c,[]);else if(typeof c=="object")if(Array.isArray(c)){let[p,...u]=c;s(p,u);}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(c.plugins),c.settings&&(i.settings=(0, Zn.default)(true,i.settings,c.settings));}function l(c){let p=-1;if(c!=null)if(Array.isArray(c))for(;++p<c.length;){let u=c[p];a(u);}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function s(c,p){let u=-1,m=-1;for(;++u<r.length;)if(r[u][0]===c){m=u;break}if(m===-1)r.push([c,...p]);else if(p.length>0){let[f,...d]=p,y=r[m][1];an(y)&&an(f)&&(f=(0, Zn.default)(true,y,f)),r[m]=[c,f,...d];}}}},yi=new vi().freeze();function di(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function hi(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function gi(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ms(e){if(!an(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function ds(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Qn(e){return mm(e)?e:new ht(e)}function mm(e){return !!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function dm(e){return typeof e=="string"||hm(e)}function hm(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var gm="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",hs=[],gs={allowDangerousHtml:true},vm=/^(https?|ircs?|mailto|xmpp)$/i,ym=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function xi(e){let t=xm(e),n=bm(e);return wm(t.runSync(t.parse(n),n),e)}function xm(e){let t=e.rehypePlugins||hs,n=e.remarkPlugins||hs,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...gs}:gs;return yi().use(Hn).use(n).use(Gn,r).use(t)}function bm(e){let t=e.children||"",n=new ht;return typeof t=="string"?n.value=t:(void 0),n}function wm(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,l=t.unwrapDisallowed,s=t.urlTransform||vs;for(let p of ym)Object.hasOwn(t,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+gm+p.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),dt(e,c),Or(e,{Fragment:Se,components:i,ignoreInvalidStyle:true,jsx:x,jsxs:x,passKeys:true,passNode:true});function c(p,u,m){if(p.type==="raw"&&m&&typeof u=="number")return o?m.children.splice(u,1):m.children[u]={type:"text",value:p.value},u;if(p.type==="element"){let f;for(f in Jt)if(Object.hasOwn(Jt,f)&&Object.hasOwn(p.properties,f)){let d=p.properties[f],y=Jt[f];(y===null||y.includes(p.tagName))&&(p.properties[f]=s(String(d||""),f,p));}}if(p.type==="element"){let f=n?!n.includes(p.tagName):a?a.includes(p.tagName):false;if(!f&&r&&typeof u=="number"&&(f=!r(p,u,m)),f&&m&&typeof u=="number")return l&&p.children?m.children.splice(u,1,...p.children):m.children.splice(u,1),u}}}function vs(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||vm.test(e.slice(0,t))?e:""}function bi(e,t){let n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function wi(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function ki(e,t,n){let i=Ke((n||{}).ignore||[]),a=km(t),o=-1;for(;++o<a.length;)on(e,"text",l);function l(c,p){let u=-1,m;for(;++u<p.length;){let f=p[u],d=m?m.children:void 0;if(i(f,d?d.indexOf(f):void 0,m))return;m=f;}if(m)return s(c,p)}function s(c,p){let u=p[p.length-1],m=a[o][0],f=a[o][1],d=0,z=u.children.indexOf(c),v=false,k=[];m.lastIndex=0;let S=m.exec(c.value);for(;S;){let L=S.index,N={index:S.index,input:S.input,stack:[...p,c]},_=f(...S,N);if(typeof _=="string"&&(_=_.length>0?{type:"text",value:_}:void 0),_===false?m.lastIndex=L+1:(d!==L&&k.push({type:"text",value:c.value.slice(d,L)}),Array.isArray(_)?k.push(..._):_&&k.push(_),d=L+S[0].length,v=true),!m.global)break;S=m.exec(c.value);}return v?(d<c.value.length&&k.push({type:"text",value:c.value.slice(d)}),u.children.splice(z,1,...k)):k=[c],z+k.length}}function km(e){let t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let i=n[r];t.push([_m(i[0]),zm(i[1])]);}return t}function _m(e){return typeof e=="string"?new RegExp(wi(e),"g"):e}function zm(e){return typeof e=="function"?e:function(){return e}}var _i="phrasing",zi=["autolink","link","image","label"];function Ci(){return {transforms:[Tm],enter:{literalAutolink:Sm,literalAutolinkEmail:Si,literalAutolinkHttp:Si,literalAutolinkWww:Si},exit:{literalAutolink:Im,literalAutolinkEmail:Am,literalAutolinkHttp:Cm,literalAutolinkWww:Em}}}function Ei(){return {unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:_i,notInConstruct:zi},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:_i,notInConstruct:zi},{character:":",before:"[ps]",after:"\\/",inConstruct:_i,notInConstruct:zi}]}}function Sm(e){this.enter({type:"link",title:null,url:"",children:[]},e);}function Si(e){this.config.enter.autolinkProtocol.call(this,e);}function Cm(e){this.config.exit.autolinkProtocol.call(this,e);}function Em(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e);}function Am(e){this.config.exit.autolinkEmail.call(this,e);}function Im(e){this.exit(e);}function Tm(e){ki(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Pm],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Lm]],{ignore:["link","linkReference"]});}function Pm(e,t,n,r,i){let a="";if(!ys(i)||(/^w/i.test(t)&&(n=t+n,t="",a="http://"),!Mm(n)))return  false;let o=Rm(n+r);if(!o[0])return  false;let l={type:"link",title:null,url:a+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[l,{type:"text",value:o[1]}]:l}function Lm(e,t,n,r){return !ys(r,true)||/[-\d_]$/.test(n)?false:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Mm(e){let t=e.split(".");return !(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Rm(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return [e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),i=bi(e,"("),a=bi(e,")");for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),a++;return [e,n]}function ys(e,t){let n=e.input.charCodeAt(e.index-1);return (e.index===0||Me(n)||ct(n))&&(!t||n!==47)}xs.peek=Vm;function Nm(){this.buffer();}function Dm(e){this.enter({type:"footnoteReference",identifier:"",label:""},e);}function Om(){this.buffer();}function Fm(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e);}function Um(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ge(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function Bm(e){this.exit(e);}function Hm(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ge(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function jm(e){this.exit(e);}function Vm(){return "["}function xs(e,t,n,r){let i=n.createTracker(r),a=i.move("[^"),o=n.enter("footnoteReference"),l=n.enter("reference");return a+=i.move(n.safe(n.associationId(e),{after:"]",before:a})),l(),o(),a+=i.move("]"),a}function Ai(){return {enter:{gfmFootnoteCallString:Nm,gfmFootnoteCall:Dm,gfmFootnoteDefinitionLabelString:Om,gfmFootnoteDefinition:Fm},exit:{gfmFootnoteCallString:Um,gfmFootnoteCall:Bm,gfmFootnoteDefinitionLabelString:Hm,gfmFootnoteDefinition:jm}}}function Ii(e){let t=false;return e&&e.firstLineBlank&&(t=true),{handlers:{footnoteDefinition:n,footnoteReference:xs},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,a,o){let l=a.createTracker(o),s=l.move("[^"),c=a.enter("footnoteDefinition"),p=a.enter("label");return s+=l.move(a.safe(a.associationId(r),{before:s,after:"]"})),p(),s+=l.move("]:"),r.children&&r.children.length>0&&(l.shift(4),s+=l.move((t?`
`:" ")+a.indentLines(a.containerFlow(r,l.current()),t?bs:$m))),c(),s}}function $m(e,t,n){return t===0?e:bs(e,t,n)}function bs(e,t,n){return (n?"":"    ")+e}var Wm=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];ws.peek=Km;function Ti(){return {canContainEols:["delete"],enter:{strikethrough:qm},exit:{strikethrough:Ym}}}function Pi(){return {unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Wm}],handlers:{delete:ws}}}function qm(e){this.enter({type:"delete",children:[]},e);}function Ym(e){this.exit(e);}function ws(e,t,n,r){let i=n.createTracker(r),a=n.enter("strikethrough"),o=i.move("~~");return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),a(),o}function Km(){return "~"}function Xm(e){return e.length}function _s(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||Xm,a=[],o=[],l=[],s=[],c=0,p=-1;for(;++p<e.length;){let y=[],z=[],v=-1;for(e[p].length>c&&(c=e[p].length);++v<e[p].length;){let k=Gm(e[p][v]);if(n.alignDelimiters!==false){let S=i(k);z[v]=S,(s[v]===void 0||S>s[v])&&(s[v]=S);}y.push(k);}o[p]=y,l[p]=z;}let u=-1;if(typeof r=="object"&&"length"in r)for(;++u<c;)a[u]=ks(r[u]);else {let y=ks(r);for(;++u<c;)a[u]=y;}u=-1;let m=[],f=[];for(;++u<c;){let y=a[u],z="",v="";y===99?(z=":",v=":"):y===108?z=":":y===114&&(v=":");let k=n.alignDelimiters===false?1:Math.max(1,s[u]-z.length-v.length),S=z+"-".repeat(k)+v;n.alignDelimiters!==false&&(k=z.length+k+v.length,k>s[u]&&(s[u]=k),f[u]=k),m[u]=S;}o.splice(1,0,m),l.splice(1,0,f),p=-1;let d=[];for(;++p<o.length;){let y=o[p],z=l[p];u=-1;let v=[];for(;++u<c;){let k=y[u]||"",S="",L="";if(n.alignDelimiters!==false){let N=s[u]-(z[u]||0),_=a[u];_===114?S=" ".repeat(N):_===99?N%2?(S=" ".repeat(N/2+.5),L=" ".repeat(N/2-.5)):(S=" ".repeat(N/2),L=S):L=" ".repeat(N);}n.delimiterStart!==false&&!u&&v.push("|"),n.padding!==false&&!(n.alignDelimiters===false&&k==="")&&(n.delimiterStart!==false||u)&&v.push(" "),n.alignDelimiters!==false&&v.push(S),v.push(k),n.alignDelimiters!==false&&v.push(L),n.padding!==false&&v.push(" "),(n.delimiterEnd!==false||u!==c-1)&&v.push("|");}d.push(n.delimiterEnd===false?v.join("").replace(/ +$/,""):v.join(""));}return d.join(`
`)}function Gm(e){return e==null?"":String(e)}function ks(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function zs(e,t,n,r){let i=n.enter("blockquote"),a=n.createTracker(r);a.move("> "),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),Jm);return i(),o}function Jm(e,t,n){return ">"+(n?"":" ")+e}function Cs(e,t){return Ss(e,t.inConstruct,true)&&!Ss(e,t.notInConstruct,false)}function Ss(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return  true;return  false}function Li(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Cs(n.stack,n.unsafe[i]))return /[ \t]/.test(r.before)?"":" ";return `\\
`}function Es(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function As(e,t){return !!(t.options.fences===false&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Is(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Ts(e,t,n,r){let i=Is(n),a=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(As(e,n)){let u=n.enter("codeIndented"),m=n.indentLines(a,Qm);return u(),m}let l=n.createTracker(r),s=i.repeat(Math.max(Es(a,i)+1,3)),c=n.enter("codeFenced"),p=l.move(s);if(e.lang){let u=n.enter(`codeFencedLang${o}`);p+=l.move(n.safe(e.lang,{before:p,after:" ",encode:["`"],...l.current()})),u();}if(e.lang&&e.meta){let u=n.enter(`codeFencedMeta${o}`);p+=l.move(" "),p+=l.move(n.safe(e.meta,{before:p,after:`
`,encode:["`"],...l.current()})),u();}return p+=l.move(`
`),a&&(p+=l.move(a+`
`)),p+=l.move(s),c(),p}function Qm(e,t,n){return (n?"":"    ")+e}function At(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Ps(e,t,n,r){let i=At(n),a=i==='"'?"Quote":"Apostrophe",o=n.enter("definition"),l=n.enter("label"),s=n.createTracker(r),c=s.move("[");return c+=s.move(n.safe(n.associationId(e),{before:c,after:"]",...s.current()})),c+=s.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(n.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(l=n.enter("destinationRaw"),c+=s.move(n.safe(e.url,{before:c,after:e.title?" ":`
`,...s.current()}))),l(),e.title&&(l=n.enter(`title${a}`),c+=s.move(" "+i),c+=s.move(n.safe(e.title,{before:c,after:i,...s.current()})),c+=s.move(i),l()),o(),c}function Ls(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Xe(e){return "&#x"+e.toString(16).toUpperCase()+";"}function It(e,t,n){let r=He(e),i=He(t);return r===void 0?i===void 0?n==="_"?{inside:true,outside:true}:{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:true}:r===1?i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:false}:i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:false}:{inside:false,outside:false}}Mi.peek=Zm;function Mi(e,t,n,r){let i=Ls(n),a=n.enter("emphasis"),o=n.createTracker(r),l=o.move(i),s=o.move(n.containerPhrasing(e,{after:i,before:l,...o.current()})),c=s.charCodeAt(0),p=It(r.before.charCodeAt(r.before.length-1),c,i);p.inside&&(s=Xe(c)+s.slice(1));let u=s.charCodeAt(s.length-1),m=It(r.after.charCodeAt(0),u,i);m.inside&&(s=s.slice(0,-1)+Xe(u));let f=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:m.outside,before:p.outside},l+s+f}function Zm(e,t,n){return n.options.emphasis||"*"}function Ms(e,t){let n=false;return dt(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=true,mt}),!!((!e.depth||e.depth<3)&&lt(e)&&(t.options.setext||n))}function Rs(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(Ms(e,n)){let p=n.enter("headingSetext"),u=n.enter("phrasing"),m=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return u(),p(),m+`
`+(i===1?"=":"-").repeat(m.length-(Math.max(m.lastIndexOf("\r"),m.lastIndexOf(`
`))+1))}let o="#".repeat(i),l=n.enter("headingAtx"),s=n.enter("phrasing");a.move(o+" ");let c=n.containerPhrasing(e,{before:"# ",after:`
`,...a.current()});return /^[\t ]/.test(c)&&(c=Xe(c.charCodeAt(0))+c.slice(1)),c=c?o+" "+c:o,n.options.closeAtx&&(c+=" "+o),s(),l(),c}Ri.peek=ed;function Ri(e){return e.value||""}function ed(){return "<"}Ni.peek=td;function Ni(e,t,n,r){let i=At(n),a=i==='"'?"Quote":"Apostrophe",o=n.enter("image"),l=n.enter("label"),s=n.createTracker(r),c=s.move("![");return c+=s.move(n.safe(e.alt,{before:c,after:"]",...s.current()})),c+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(n.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(l=n.enter("destinationRaw"),c+=s.move(n.safe(e.url,{before:c,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=n.enter(`title${a}`),c+=s.move(" "+i),c+=s.move(n.safe(e.title,{before:c,after:i,...s.current()})),c+=s.move(i),l()),c+=s.move(")"),o(),c}function td(){return "!"}Di.peek=nd;function Di(e,t,n,r){let i=e.referenceType,a=n.enter("imageReference"),o=n.enter("label"),l=n.createTracker(r),s=l.move("!["),c=n.safe(e.alt,{before:s,after:"]",...l.current()});s+=l.move(c+"]["),o();let p=n.stack;n.stack=[],o=n.enter("reference");let u=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return o(),n.stack=p,a(),i==="full"||!c||c!==u?s+=l.move(u+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function nd(){return "!"}Oi.peek=rd;function Oi(e,t,n){let r=e.value||"",i="`",a=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++a<n.unsafe.length;){let o=n.unsafe[a],l=n.compilePattern(o),s;if(o.atBreak)for(;s=l.exec(r);){let c=s.index;r.charCodeAt(c)===10&&r.charCodeAt(c-1)===13&&c--,r=r.slice(0,c)+" "+r.slice(s.index+1);}}return i+r+i}function rd(){return "`"}function Fi(e,t){let n=lt(e);return !!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Ui.peek=id;function Ui(e,t,n,r){let i=At(n),a=i==='"'?"Quote":"Apostrophe",o=n.createTracker(r),l,s;if(Fi(e,n)){let p=n.stack;n.stack=[],l=n.enter("autolink");let u=o.move("<");return u+=o.move(n.containerPhrasing(e,{before:u,after:">",...o.current()})),u+=o.move(">"),l(),n.stack=p,u}l=n.enter("link"),s=n.enter("label");let c=o.move("[");return c+=o.move(n.containerPhrasing(e,{before:c,after:"](",...o.current()})),c+=o.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),c+=o.move("<"),c+=o.move(n.safe(e.url,{before:c,after:">",...o.current()})),c+=o.move(">")):(s=n.enter("destinationRaw"),c+=o.move(n.safe(e.url,{before:c,after:e.title?" ":")",...o.current()}))),s(),e.title&&(s=n.enter(`title${a}`),c+=o.move(" "+i),c+=o.move(n.safe(e.title,{before:c,after:i,...o.current()})),c+=o.move(i),s()),c+=o.move(")"),l(),c}function id(e,t,n){return Fi(e,n)?"<":"["}Bi.peek=od;function Bi(e,t,n,r){let i=e.referenceType,a=n.enter("linkReference"),o=n.enter("label"),l=n.createTracker(r),s=l.move("["),c=n.containerPhrasing(e,{before:s,after:"]",...l.current()});s+=l.move(c+"]["),o();let p=n.stack;n.stack=[],o=n.enter("reference");let u=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return o(),n.stack=p,a(),i==="full"||!c||c!==u?s+=l.move(u+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function od(){return "["}function Tt(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Ns(e){let t=Tt(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Ds(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function er(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Os(e,t,n,r){let i=n.enter("list"),a=n.bulletCurrent,o=e.ordered?Ds(n):Tt(n),l=e.ordered?o==="."?")":".":Ns(n),s=t&&n.bulletLastUsed?o===n.bulletLastUsed:false;if(!e.ordered){let p=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&p&&(!p.children||!p.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=true),er(n)===o&&p){let u=-1;for(;++u<e.children.length;){let m=e.children[u];if(m&&m.type==="listItem"&&m.children&&m.children[0]&&m.children[0].type==="thematicBreak"){s=true;break}}}}s&&(o=l),n.bulletCurrent=o;let c=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),c}function Fs(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Us(e,t,n,r){let i=Fs(n),a=n.bulletCurrent||Tt(n);t&&t.type==="list"&&t.ordered&&(a=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===false?0:t.children.indexOf(e))+a);let o=a.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let l=n.createTracker(r);l.move(a+" ".repeat(o-a.length)),l.shift(o);let s=n.enter("listItem"),c=n.indentLines(n.containerFlow(e,l.current()),p);return s(),c;function p(u,m,f){return m?(f?"":" ".repeat(o))+u:(f?a:a+" ".repeat(o-a.length))+u}}function Bs(e,t,n,r){let i=n.enter("paragraph"),a=n.enter("phrasing"),o=n.containerPhrasing(e,r);return a(),i(),o}var Hi=Ke(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Hs(e,t,n,r){return (e.children.some(function(o){return Hi(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function js(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}ji.peek=ad;function ji(e,t,n,r){let i=js(n),a=n.enter("strong"),o=n.createTracker(r),l=o.move(i+i),s=o.move(n.containerPhrasing(e,{after:i,before:l,...o.current()})),c=s.charCodeAt(0),p=It(r.before.charCodeAt(r.before.length-1),c,i);p.inside&&(s=Xe(c)+s.slice(1));let u=s.charCodeAt(s.length-1),m=It(r.after.charCodeAt(0),u,i);m.inside&&(s=s.slice(0,-1)+Xe(u));let f=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:m.outside,before:p.outside},l+s+f}function ad(e,t,n){return n.options.strong||"*"}function Vs(e,t,n,r){return n.safe(e.value,r)}function $s(e){let t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Ws(e,t,n){let r=(er(n)+(n.options.ruleSpaces?" ":"")).repeat($s(n));return n.options.ruleSpaces?r.slice(0,-1):r}var sn={blockquote:zs,break:Li,code:Ts,definition:Ps,emphasis:Mi,hardBreak:Li,heading:Rs,html:Ri,image:Ni,imageReference:Di,inlineCode:Oi,link:Ui,linkReference:Bi,list:Os,listItem:Us,paragraph:Bs,root:Hs,strong:ji,text:Vs,thematicBreak:Ws};function $i(){return {enter:{table:ld,tableData:qs,tableHeader:qs,tableRow:cd},exit:{codeText:ud,table:sd,tableData:Vi,tableHeader:Vi,tableRow:Vi}}}function ld(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=true;}function sd(e){this.exit(e),this.data.inTable=void 0;}function cd(e){this.enter({type:"tableRow",children:[]},e);}function Vi(e){this.exit(e);}function qs(e){this.enter({type:"tableCell",children:[]},e);}function ud(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,pd));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e);}function pd(e,t){return t==="|"?t:e}function Wi(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?" ":"|";return {unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:true,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:true,character:":",after:"-"},{atBreak:true,character:"-",after:"[:|-]"}],handlers:{inlineCode:m,table:o,tableCell:s,tableRow:l}};function o(f,d,y,z){return c(p(f,y,z),f.align)}function l(f,d,y,z){let v=u(f,y,z),k=c([v]);return k.slice(0,k.indexOf(`
`))}function s(f,d,y,z){let v=y.enter("tableCell"),k=y.enter("phrasing"),S=y.containerPhrasing(f,{...z,before:a,after:a});return k(),v(),S}function c(f,d){return _s(f,{align:d,alignDelimiters:r,padding:n,stringLength:i})}function p(f,d,y){let z=f.children,v=-1,k=[],S=d.enter("table");for(;++v<z.length;)k[v]=u(z[v],d,y);return S(),k}function u(f,d,y){let z=f.children,v=-1,k=[],S=d.enter("tableRow");for(;++v<z.length;)k[v]=s(z[v],f,d,y);return S(),k}function m(f,d,y){let z=sn.inlineCode(f,d,y);return y.stack.includes("tableCell")&&(z=z.replace(/\|/g,"\\$&")),z}}function qi(){return {exit:{taskListCheckValueChecked:Ys,taskListCheckValueUnchecked:Ys,paragraph:fd}}}function Yi(){return {unsafe:[{atBreak:true,character:"-",after:"[:|-]"}],handlers:{listItem:md}}}function Ys(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked";}function fd(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let i=t.children,a=-1,o;for(;++a<i.length;){let l=i[a];if(l.type==="paragraph"){o=l;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)));}}this.exit(e);}function md(e,t,n,r){let i=e.children[0],a=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",l=n.createTracker(r);a&&l.move(o);let s=sn.listItem(e,t,n,{...r,...l.current()});return a&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,c)),s;function c(p){return p+o}}function Ki(){return [Ci(),Ai(),Ti(),$i(),qi()]}function Xi(e){return {extensions:[Ei(),Ii(e),Pi(),Wi(e),Yi()]}}var dd={tokenize:xd,partial:true},Ks={tokenize:bd,partial:true},Xs={tokenize:wd,partial:true},Gs={tokenize:kd,partial:true},hd={tokenize:_d,partial:true},Js={name:"wwwAutolink",tokenize:vd,previous:Zs},Qs={name:"protocolAutolink",tokenize:yd,previous:ec},je={name:"emailAutolink",tokenize:gd,previous:tc},Ne={};function Ji(){return {text:Ne}}var gt=48;for(;gt<123;)Ne[gt]=je,gt++,gt===58?gt=65:gt===91&&(gt=97);Ne[43]=je;Ne[45]=je;Ne[46]=je;Ne[95]=je;Ne[72]=[je,Qs];Ne[104]=[je,Qs];Ne[87]=[je,Js];Ne[119]=[je,Js];function gd(e,t,n){let r=this,i,a;return o;function o(u){return !Gi(u)||!tc.call(r,r.previous)||Qi(r.events)?n(u):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(u))}function l(u){return Gi(u)?(e.consume(u),l):u===64?(e.consume(u),s):n(u)}function s(u){return u===46?e.check(hd,p,c)(u):u===45||u===95||oe(u)?(a=true,e.consume(u),s):p(u)}function c(u){return e.consume(u),i=true,s}function p(u){return a&&i&&pe(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(u)):n(u)}}function vd(e,t,n){let r=this;return i;function i(o){return o!==87&&o!==119||!Zs.call(r,r.previous)||Qi(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(dd,e.attempt(Ks,e.attempt(Xs,a),n),n)(o))}function a(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function yd(e,t,n){let r=this,i="",a=false;return o;function o(u){return (u===72||u===104)&&ec.call(r,r.previous)&&!Qi(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(u),e.consume(u),l):n(u)}function l(u){if(pe(u)&&i.length<5)return i+=String.fromCodePoint(u),e.consume(u),l;if(u===58){let m=i.toLowerCase();if(m==="http"||m==="https")return e.consume(u),s}return n(u)}function s(u){return u===47?(e.consume(u),a?c:(a=true,s)):n(u)}function c(u){return u===null||st(u)||X(u)||Me(u)||ct(u)?n(u):e.attempt(Ks,e.attempt(Xs,p),n)(u)}function p(u){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(u)}}function xd(e,t,n){let r=0;return i;function i(o){return (o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),a):n(o)}function a(o){return o===null?n(o):t(o)}}function bd(e,t,n){let r,i,a;return o;function o(c){return c===46||c===95?e.check(Gs,s,l)(c):c===null||X(c)||Me(c)||c!==45&&ct(c)?s(c):(a=true,e.consume(c),o)}function l(c){return c===95?r=true:(i=r,r=void 0),e.consume(c),o}function s(c){return i||r||!a?n(c):t(c)}}function wd(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(Gs,t,a)(o):o===null||X(o)||Me(o)?t(o):(e.consume(o),i)}function a(o){return o===41&&r++,e.consume(o),i}}function kd(e,t,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),a):l===93?(e.consume(l),i):l===60||l===null||X(l)||Me(l)?t(l):n(l)}function i(l){return l===null||l===40||l===91||X(l)||Me(l)?t(l):r(l)}function a(l){return pe(l)?o(l):n(l)}function o(l){return l===59?(e.consume(l),r):pe(l)?(e.consume(l),o):n(l)}}function _d(e,t,n){return r;function r(a){return e.consume(a),i}function i(a){return oe(a)?n(a):t(a)}}function Zs(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||X(e)}function ec(e){return !pe(e)}function tc(e){return !(e===47||Gi(e))}function Gi(e){return e===43||e===45||e===46||e===95||oe(e)}function Qi(e){let t=e.length,n=false;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=true;break}if(r._gfmAutolinkLiteralWalkedInto){n=false;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=true),n}var zd={tokenize:Pd,partial:true};function Zi(){return {document:{91:{name:"gfmFootnoteDefinition",tokenize:Ad,continuation:{tokenize:Id},exit:Td}},text:{91:{name:"gfmFootnoteCall",tokenize:Ed},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Sd,resolveTo:Cd}}}}function Sd(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let s=r.events[i][1];if(s.type==="labelImage"){o=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return l;function l(s){if(!o||!o._balanced)return n(s);let c=ge(r.sliceSerialize({start:o.end,end:r.now()}));return c.codePointAt(0)!==94||!a.includes(c.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function Cd(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;let o={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},s=[e[n+1],e[n+2],["enter",i,t],e[n+3],e[n+4],["enter",a,t],["exit",a,t],["enter",o,t],["enter",l,t],["exit",l,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(n,e.length-n+1,...s),e}function Ed(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return l;function l(u){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),s}function s(u){return u!==94?n(u):(e.enter("gfmFootnoteCallMarker"),e.consume(u),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c)}function c(u){if(a>999||u===93&&!o||u===null||u===91||X(u))return n(u);if(u===93){e.exit("chunkString");let m=e.exit("gfmFootnoteCallString");return i.includes(ge(r.sliceSerialize(m)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(u)}return X(u)||(o=true),a++,e.consume(u),u===92?p:c}function p(u){return u===91||u===92||u===93?(e.consume(u),a++,c):c(u)}}function Ad(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,l;return s;function s(d){return e.enter("gfmFootnoteDefinition")._container=true,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(d),e.exit("gfmFootnoteDefinitionLabelMarker"),c}function c(d){return d===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(d),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",p):n(d)}function p(d){if(o>999||d===93&&!l||d===null||d===91||X(d))return n(d);if(d===93){e.exit("chunkString");let y=e.exit("gfmFootnoteDefinitionLabelString");return a=ge(r.sliceSerialize(y)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(d),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),m}return X(d)||(l=true),o++,e.consume(d),d===92?u:p}function u(d){return d===91||d===92||d===93?(e.consume(d),o++,p):p(d)}function m(d){return d===58?(e.enter("definitionMarker"),e.consume(d),e.exit("definitionMarker"),i.includes(a)||i.push(a),R(e,f,"gfmFootnoteDefinitionWhitespace")):n(d)}function f(d){return t(d)}}function Id(e,t,n){return e.check(Re,t,e.attempt(zd,t,n))}function Td(e){e.exit("gfmFootnoteDefinition");}function Pd(e,t,n){let r=this;return R(e,i,"gfmFootnoteDefinitionIndent",5);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],true).length===4?t(a):n(a)}}function eo(e){let n=(e||{}).singleTilde,r={name:"strikethrough",tokenize:a,resolveAll:i};return n==null&&(n=true),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,l){let s=-1;for(;++s<o.length;)if(o[s][0]==="enter"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._close){let c=s;for(;c--;)if(o[c][0]==="exit"&&o[c][1].type==="strikethroughSequenceTemporary"&&o[c][1]._open&&o[s][1].end.offset-o[s][1].start.offset===o[c][1].end.offset-o[c][1].start.offset){o[s][1].type="strikethroughSequence",o[c][1].type="strikethroughSequence";let p={type:"strikethrough",start:Object.assign({},o[c][1].start),end:Object.assign({},o[s][1].end)},u={type:"strikethroughText",start:Object.assign({},o[c][1].end),end:Object.assign({},o[s][1].start)},m=[["enter",p,l],["enter",o[c][1],l],["exit",o[c][1],l],["enter",u,l]],f=l.parser.constructs.insideSpan.null;f&&ce(m,m.length,0,qe(f,o.slice(c+1,s),l)),ce(m,m.length,0,[["exit",u,l],["enter",o[s][1],l],["exit",o[s][1],l],["exit",p,l]]),ce(o,c-1,s-c+3,m),s=c+m.length-2;break}}for(s=-1;++s<o.length;)o[s][1].type==="strikethroughSequenceTemporary"&&(o[s][1].type="data");return o}function a(o,l,s){let c=this.previous,p=this.events,u=0;return m;function m(d){return c===126&&p[p.length-1][1].type!=="characterEscape"?s(d):(o.enter("strikethroughSequenceTemporary"),f(d))}function f(d){let y=He(c);if(d===126)return u>1?s(d):(o.consume(d),u++,f);if(u<2&&!n)return s(d);let z=o.exit("strikethroughSequenceTemporary"),v=He(d);return z._open=!v||v===2&&!!y,z._close=!y||y===2&&!!v,l(d)}}}var tr=class{constructor(){this.map=[];}add(t,n,r){Ld(this,t,n,r);}consume(t){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(let a of i)t.push(a);i=r.pop();}this.map.length=0;}};function Ld(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1;}e.map.push([t,n,r]);}}function nc(e,t){let n=false,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let a=r.length-1;r[a]=r[a]==="left"?"center":"right";}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=true);t+=1;}return r}function to(){return {flow:{null:{name:"table",tokenize:Md,resolveAll:Rd}}}}function Md(e,t,n){let r=this,i=0,a=0,o;return l;function l(b){let G=r.events.length-1;for(;G>-1;){let j=r.events[G][1].type;if(j==="lineEnding"||j==="linePrefix")G--;else break}let B=G>-1?r.events[G][1].type:null,T=B==="tableHead"||B==="tableRow"?_:s;return T===_&&r.parser.lazy[r.now().line]?n(b):T(b)}function s(b){return e.enter("tableHead"),e.enter("tableRow"),c(b)}function c(b){return b===124||(o=true,a+=1),p(b)}function p(b){return b===null?n(b):I(b)?a>1?(a=0,r.interrupt=true,e.exit("tableRow"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),f):n(b):O(b)?R(e,p,"whitespace")(b):(a+=1,o&&(o=false,i+=1),b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),o=true,p):(e.enter("data"),u(b)))}function u(b){return b===null||b===124||X(b)?(e.exit("data"),p(b)):(e.consume(b),b===92?m:u)}function m(b){return b===92||b===124?(e.consume(b),u):u(b)}function f(b){return r.interrupt=false,r.parser.lazy[r.now().line]?n(b):(e.enter("tableDelimiterRow"),o=false,O(b)?R(e,d,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):d(b))}function d(b){return b===45||b===58?z(b):b===124?(o=true,e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),y):N(b)}function y(b){return O(b)?R(e,z,"whitespace")(b):z(b)}function z(b){return b===58?(a+=1,o=true,e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),v):b===45?(a+=1,v(b)):b===null||I(b)?L(b):N(b)}function v(b){return b===45?(e.enter("tableDelimiterFiller"),k(b)):N(b)}function k(b){return b===45?(e.consume(b),k):b===58?(o=true,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(b))}function S(b){return O(b)?R(e,L,"whitespace")(b):L(b)}function L(b){return b===124?d(b):b===null||I(b)?!o||i!==a?N(b):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(b)):N(b)}function N(b){return n(b)}function _(b){return e.enter("tableRow"),V(b)}function V(b){return b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),V):b===null||I(b)?(e.exit("tableRow"),t(b)):O(b)?R(e,V,"whitespace")(b):(e.enter("data"),Y(b))}function Y(b){return b===null||b===124||X(b)?(e.exit("data"),V(b)):(e.consume(b),b===92?H:Y)}function H(b){return b===92||b===124?(e.consume(b),Y):Y(b)}}function Rd(e,t){let n=-1,r=true,i=0,a=[0,0,0,0],o=[0,0,0,0],l=false,s=0,c,p,u,m=new tr;for(;++n<e.length;){let f=e[n],d=f[1];f[0]==="enter"?d.type==="tableHead"?(l=false,s!==0&&(rc(m,t,s,c,p),p=void 0,s=0),c={type:"table",start:Object.assign({},d.start),end:Object.assign({},d.end)},m.add(n,0,[["enter",c,t]])):d.type==="tableRow"||d.type==="tableDelimiterRow"?(r=true,u=void 0,a=[0,0,0,0],o=[0,n+1,0,0],l&&(l=false,p={type:"tableBody",start:Object.assign({},d.start),end:Object.assign({},d.end)},m.add(n,0,[["enter",p,t]])),i=d.type==="tableDelimiterRow"?2:p?3:1):i&&(d.type==="data"||d.type==="tableDelimiterMarker"||d.type==="tableDelimiterFiller")?(r=false,o[2]===0&&(a[1]!==0&&(o[0]=o[1],u=nr(m,t,a,i,void 0,u),a=[0,0,0,0]),o[2]=n)):d.type==="tableCellDivider"&&(r?r=false:(a[1]!==0&&(o[0]=o[1],u=nr(m,t,a,i,void 0,u)),a=o,o=[a[1],n,0,0])):d.type==="tableHead"?(l=true,s=n):d.type==="tableRow"||d.type==="tableDelimiterRow"?(s=n,a[1]!==0?(o[0]=o[1],u=nr(m,t,a,i,n,u)):o[1]!==0&&(u=nr(m,t,o,i,n,u)),i=0):i&&(d.type==="data"||d.type==="tableDelimiterMarker"||d.type==="tableDelimiterFiller")&&(o[3]=n);}for(s!==0&&rc(m,t,s,c,p),m.consume(t.events),n=-1;++n<t.events.length;){let f=t.events[n];f[0]==="enter"&&f[1].type==="table"&&(f[1]._align=nc(t.events,n));}return e}function nr(e,t,n,r,i,a){let o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(a.end=Object.assign({},Pt(t.events,n[0])),e.add(n[0],0,[["exit",a,t]]));let s=Pt(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",a,t]]),n[2]!==0){let c=Pt(t.events,n[2]),p=Pt(t.events,n[3]),u={type:l,start:Object.assign({},c),end:Object.assign({},p)};if(e.add(n[2],0,[["enter",u,t]]),r!==2){let m=t.events[n[2]],f=t.events[n[3]];if(m[1].end=Object.assign({},f[1].end),m[1].type="chunkText",m[1].contentType="text",n[3]>n[2]+1){let d=n[2]+1,y=n[3]-n[2]-1;e.add(d,y,[]);}}e.add(n[3]+1,0,[["exit",u,t]]);}return i!==void 0&&(a.end=Object.assign({},Pt(t.events,i)),e.add(i,0,[["exit",a,t]]),a=void 0),a}function rc(e,t,n,r,i){let a=[],o=Pt(t.events,n);i&&(i.end=Object.assign({},o),a.push(["exit",i,t])),r.end=Object.assign({},o),a.push(["exit",r,t]),e.add(n+1,0,a);}function Pt(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}var Nd={name:"tasklistCheck",tokenize:Dd};function no(){return {text:{91:Nd}}}function Dd(e,t,n){let r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),a)}function a(s){return X(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),o):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),o):n(s)}function o(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(s)}function l(s){return I(s)?t(s):O(s)?e.check({tokenize:Od},t,n)(s):n(s)}}function Od(e,t,n){return R(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function ic(e){return In([Ji(),Zi(),eo(e),to(),no()])}var Fd={};function rr(e){let t=this,n=e||Fd,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),a=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(ic(n)),a.push(Ki()),o.push(Xi(n));}var Ud="c651a29-2026-11-23T17:24:21.348Z".split("-")[0],Bd="https://chat.converzen.de",oc=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"})}),ac=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),Hd=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})}),jd=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),Lt=({custom:e,fallback:t,className:n})=>e?x("span",{className:n,dangerouslySetInnerHTML:{__html:e}}):t,Vd=({title:e,subtitle:t,onClose:n,onClear:r,darkMode:i,icons:a,authControl:o,accessory:l})=>x("div",{className:`cvz-p-4 cvz-shadow-md cvz-flex cvz-justify-between cvz-items-start ${i?"cvz-bg-gradient-to-b cvz-from-gray-900 cvz-to-gray-800 cvz-text-white":"cvz-bg-gradient-to-b cvz-from-blue-600 cvz-to-blue-500 cvz-text-white"}`,children:[x("div",{className:"cvz-flex cvz-items-center cvz-gap-3",children:[x("div",{className:"cvz-relative",children:[x("div",{className:`cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-border-2 ${i?"cvz-border-gray-800":"cvz-border-blue-600"}`}),x("div",{className:"cvz-absolute cvz-top-0 cvz-left-0 cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-animate-ping cvz-opacity-75"})]}),x("div",{children:[x("h3",{className:"cvz-font-bold cvz-text-lg cvz-leading-tight",children:e}),t&&x("p",{className:`cvz-text-xs cvz-mt-0.5 ${i?"cvz-text-gray-300":"cvz-text-blue-100"}`,children:t})]})]}),x("div",{className:"cvz-flex cvz-gap-2 cvz-items-center",children:[l,o,x("button",{onClick:r,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Clear History",children:x(Lt,{custom:a?.clear,fallback:x(jd,{}),className:"cvz-w-5 cvz-h-5"})}),x("button",{onClick:n,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Close Chat",children:x(Lt,{custom:a?.close,fallback:x(ac,{}),className:"cvz-w-6 cvz-h-6"})})]})]}),$d=({content:e,enableMarkdown:t,darkMode:n})=>t?x("div",{className:"cvz-markdown-content",children:x(xi,{remarkPlugins:[rr],components:{p:({children:r})=>x("p",{className:`cvz-mb-2 cvz-last:cvz-mb-0 ${n?"cvz-text-gray-100":""}`,children:r}),h1:({children:r})=>x("h1",{className:`cvz-text-xl cvz-font-bold cvz-mb-2 cvz-mt-4 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h2:({children:r})=>x("h2",{className:`cvz-text-lg cvz-font-bold cvz-mb-2 cvz-mt-3 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h3:({children:r})=>x("h3",{className:`cvz-text-base cvz-font-bold cvz-mb-1 cvz-mt-2 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),ul:({children:r})=>x("ul",{className:`cvz-list-disc cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),ol:({children:r})=>x("ol",{className:`cvz-list-decimal cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),li:({children:r})=>x("li",{className:"cvz-ml-2",children:r}),code:({children:r})=>x("code",{className:`cvz-px-1 cvz-py-0.5 cvz-rounded cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),pre:({children:r})=>x("pre",{className:`cvz-p-2 cvz-rounded cvz-overflow-x-auto cvz-mb-2 cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),blockquote:({children:r})=>x("blockquote",{className:`cvz-border-l-4 cvz-pl-3 cvz-italic cvz-mb-2 ${n?"cvz-border-gray-600 cvz-text-gray-300":"cvz-border-gray-300"}`,children:r}),strong:({children:r})=>x("strong",{className:"cvz-font-bold",children:r}),em:({children:r})=>x("em",{className:"cvz-italic",children:r}),a:({children:r,href:i})=>x("a",{href:i,className:`cvz-underline ${n?"cvz-text-blue-400 cvz-hover:cvz-text-blue-300":"cvz-text-blue-600 cvz-hover:cvz-text-blue-800"}`,target:"_blank",rel:"noopener noreferrer",children:r}),table:({children:r})=>x("div",{className:"cvz-overflow-x-auto cvz-mb-2",children:x("table",{className:`cvz-w-full cvz-text-sm cvz-border-collapse ${n?"cvz-text-gray-100":""}`,children:r})}),thead:({children:r})=>x("thead",{className:`${n?"cvz-bg-gray-700":"cvz-bg-gray-100"}`,children:r}),tbody:({children:r})=>x("tbody",{children:r}),tr:({children:r})=>x("tr",{className:`cvz-border-b ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:r}),th:({children:r})=>x("th",{className:`cvz-px-3 cvz-py-1.5 cvz-text-left cvz-font-semibold cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r}),td:({children:r})=>x("td",{className:`cvz-px-3 cvz-py-1.5 cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r})},children:e})}):Le("span",null,e),Wd="Anzeige",qd=({cards:e,sponsoredLabel:t,darkMode:n})=>x("div",{className:"cvz-mt-2 cvz-flex cvz-flex-col cvz-gap-2","data-cvz-cards":true,children:e.map(r=>{let i=r.sponsored!==false;return x("a",{href:r.url,target:"_blank",rel:i?"sponsored noopener noreferrer":"noopener noreferrer",className:`cvz-flex cvz-gap-3 cvz-items-center cvz-p-2 cvz-rounded-xl cvz-border cvz-no-underline cvz-transition-colors ${n?"cvz-bg-gray-800 cvz-border-gray-700 cvz-text-gray-100 hover:cvz-bg-gray-700":"cvz-bg-white cvz-border-gray-200 cvz-text-gray-800 hover:cvz-bg-gray-50"}`,children:[r.imageUrl&&x("img",{src:r.imageUrl,alt:"",loading:"lazy",className:"cvz-w-12 cvz-h-12 cvz-rounded-lg cvz-object-cover cvz-flex-shrink-0"}),x("span",{className:"cvz-flex cvz-flex-col cvz-min-w-0 cvz-text-xs",children:[i&&x("span",{className:`cvz-uppercase cvz-tracking-wide cvz-font-semibold ${n?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:t||Wd}),x("span",{className:"cvz-font-semibold cvz-text-sm cvz-truncate",children:r.title}),r.description&&x("span",{className:n?"cvz-text-gray-300":"cvz-text-gray-600",children:r.description}),r.merchant&&x("span",{className:n?"cvz-text-gray-400":"cvz-text-gray-500",children:r.merchant})]})]},r.url)})}),Yd=({messages:e,isStreaming:t,streamingMessage:n,thinkingMessage:r,activeToolCall:i,isFinalizingRef:a,messagesEndRef:o,enableMarkdown:l,darkMode:s,icons:c,sponsoredLabel:p,interruptedLabel:u})=>{let m=nt(null),[f,d]=he(true);return _e(()=>{let y=m.current;if(!y)return;let z=()=>{let{scrollTop:v,scrollHeight:k,clientHeight:S}=y,L=k-v-S<100;d(L);};return y.addEventListener("scroll",z),()=>y.removeEventListener("scroll",z)},[]),_e(()=>{f&&o.current&&o.current.scrollIntoView({behavior:"smooth"});},[e,n,r,i,f,o]),x("div",{ref:m,className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-4 cvz-space-y-4 ${s?"cvz-bg-gray-900 cvz-scrollbar-dark":"cvz-bg-gray-50 cvz-scrollbar-light"}`,children:[e.length===0&&!n&&x("div",{className:`cvz-flex cvz-flex-col cvz-items-center cvz-justify-center cvz-h-full cvz-space-y-2 ${s?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:[x(Lt,{custom:c?.launcher,fallback:x(oc,{}),className:"cvz-w-6 cvz-h-6"}),x("p",{className:"cvz-text-sm",children:"Start a conversation"})]}),e.map(y=>x("div",{children:[x("div",{className:`cvz-flex ${y.role==="USER"?"cvz-justify-end":"cvz-justify-start"}`,children:x("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-text-sm cvz-shadow-sm ${y.role==="USER"?s?"cvz-bg-blue-500 cvz-text-white cvz-rounded-br-none":"cvz-bg-blue-600 cvz-text-white cvz-rounded-br-none":s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border cvz-border-gray-700 cvz-rounded-bl-none":"cvz-bg-white cvz-text-gray-800 cvz-border cvz-border-gray-100 cvz-rounded-bl-none"}`,children:x($d,{content:y.content,enableMarkdown:l,darkMode:s})})}),y.role==="ASSISTANT"&&y.interrupted&&x("div",{className:`cvz-mt-1 cvz-ml-1 cvz-text-[11px] cvz-italic ${s?"cvz-text-gray-500":"cvz-text-gray-400"}`,"data-cvz-interrupted":true,children:u||"Interrupted"}),y.role==="ASSISTANT"&&y.cards&&y.cards.length>0&&x("div",{className:"cvz-flex cvz-justify-start",children:x("div",{className:"cvz-max-w-[85%] cvz-w-full",children:x(qd,{cards:y.cards,sponsoredLabel:p,darkMode:s})})})]},y.createdAt.toString())),t&&n&&!a.current&&x("div",{className:"cvz-flex cvz-justify-start",children:x("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-text-sm cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border-gray-700":"cvz-bg-white cvz-text-gray-800 cvz-border-gray-100"}`,children:n})}),t&&!n&&x("div",{className:"cvz-flex cvz-justify-start",children:x("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:i?x("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:["Calling ",i,"\u2026"]}):r?x("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:r}):x("div",{className:"cvz-flex cvz-space-x-1",children:[x("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"0ms"}}),x("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"150ms"}}),x("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"300ms"}})]})})}),x("div",{ref:o})]})},Kd=({value:e,onChange:t,onSubmit:n,isLoading:r,placeholder:i,darkMode:a,icons:o,accessory:l})=>x("form",{onSubmit:n,className:`cvz-p-4 cvz-border-t ${a?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:[x("div",{className:"cvz-flex cvz-items-center cvz-gap-2",children:[l,x("div",{className:"cvz-relative cvz-flex cvz-items-center cvz-flex-1",children:[x("input",{type:"text",value:e,onChange:s=>t(s.target.value),placeholder:i,className:`cvz-w-full cvz-border cvz-text-sm cvz-rounded-full cvz-pl-4 cvz-pr-12 cvz-py-3 cvz-focus:cvz-outline-none cvz-focus:cvz-ring-1 cvz-transition-all ${a?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100 cvz-placeholder-gray-400 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500":"cvz-bg-gray-50 cvz-border-gray-200 cvz-text-gray-900 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500"}`}),x("button",{type:"submit",disabled:!e.trim()||r,className:`cvz-absolute cvz-right-2 cvz-p-2 cvz-text-white cvz-rounded-full cvz-disabled:cvz-opacity-50 cvz-transition-colors cvz-shadow-sm ${a?"cvz-bg-blue-500 cvz-hover:cvz-bg-blue-600 cvz-disabled:cvz-hover:cvz-bg-blue-500":"cvz-bg-blue-600 cvz-hover:cvz-bg-blue-700 cvz-disabled:cvz-hover:cvz-bg-blue-600"}`,children:x(Lt,{custom:o?.send,fallback:x(Hd,{}),className:"cvz-w-5 cvz-h-5"})})]})]}),x("div",{className:"cvz-text-center cvz-mt-2",children:x("p",{className:`cvz-text-[10px] ${a?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:["Powered by ConverZen",x("span",{className:a?"cvz-text-gray-600":"cvz-text-gray-300",children:[" \xB7 ",Ud]})]})})]}),lc=({config:e,core:t,headerAccessory:n,inputAccessory:r,footer:i})=>{let[a,o]=he(""),[l,s]=he(false),c=nt(null),p=async k=>{if(k?.preventDefault(),!a.trim()||t.isStreaming)return;let S=a;o(""),await t.sendMessage(S);},u=async()=>{window.confirm("Are you sure you want to clear your chat history?")&&await t.clearHistory();},m=ta(e.style),f=na(e.style),d=ra(e.style),y=ia(e.style,t.isOpen),z=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="bottom-left")||typeof e.style.position=="object"&&e.style.position.bottom,v=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="top-right")||typeof e.style.position=="object"&&e.style.position.right;return x("div",{className:"cvz-fixed cvz-z-[9999] cvz-font-sans",style:m,children:[x("div",{className:`
          cvz-absolute cvz-rounded-2xl cvz-shadow-2xl cvz-flex cvz-flex-col cvz-overflow-hidden
          cvz-transition-all cvz-duration-300
          ${e.darkMode?"cvz-bg-gray-800":"cvz-bg-white"}
          ${z?"cvz-bottom-20":"cvz-top-20"}
          ${v?"cvz-right-0":"cvz-left-0"}
          ${z&&v?"cvz-origin-bottom-right":z&&!v?"cvz-origin-bottom-left":!z&&v?"cvz-origin-top-right":"cvz-origin-top-left"}
          ${t.isOpen?"cvz-opacity-100 cvz-scale-100 cvz-translate-y-0":"cvz-opacity-0 cvz-scale-95 cvz-translate-y-4 cvz-pointer-events-none"}
        `,style:{...f,borderColor:d,borderWidth:"1px",borderStyle:"solid"},children:[x(Vd,{title:e.headerMsg||"Support Chat",subtitle:e.subheaderMsg||"We typically reply in a few minutes",onClose:()=>t.close(),onClear:u,darkMode:e.darkMode,icons:e.icons,accessory:n,authControl:e.endUserLicensing?x("button",{onClick:()=>s(true),className:`cvz-text-xs cvz-font-medium cvz-px-2 cvz-py-1 cvz-rounded-md cvz-transition-colors cvz-whitespace-nowrap ${e.darkMode?"cvz-text-gray-200 hover:cvz-bg-gray-700/50":"cvz-text-white hover:cvz-bg-blue-600/50"}`,title:t.endUserAuth?`Signed in as ${t.endUserAuth.email}`:"Authenticate",children:t.endUserAuth?"Account":"Authenticate"}):void 0}),x("div",{ref:k=>t.setCaptchaContainer(k),className:`cvz-flex cvz-justify-center cvz-overflow-hidden cvz-transition-all cvz-duration-200 ${t.captchaPending?"cvz-max-h-32 cvz-py-2":"cvz-max-h-0 cvz-py-0"}`}),x(Yd,{messages:t.messages,isStreaming:t.isStreaming,streamingMessage:t.streamingMessage,thinkingMessage:t.thinkingMessage,activeToolCall:t.activeToolCall,isFinalizingRef:t.isFinalizingRef,messagesEndRef:c,enableMarkdown:e.enableMarkdown,darkMode:e.darkMode,icons:e.icons,sponsoredLabel:e.sponsoredLabel,interruptedLabel:e.voiceInterruptedLabel}),t.showAuthNudge&&!rt(t.endUserAuth)&&x("div",{className:`cvz-px-4 cvz-py-2 cvz-text-xs cvz-flex cvz-items-center cvz-justify-between cvz-gap-2 ${e.darkMode?"cvz-bg-amber-900/40 cvz-text-amber-200":"cvz-bg-amber-50 cvz-text-amber-800"}`,children:[x("span",{children:"You've reached the free limit - authenticate to keep chatting."}),x("button",{onClick:()=>s(true),className:"cvz-underline cvz-font-medium cvz-shrink-0",children:"Authenticate"})]}),x(Kd,{value:a,onChange:o,onSubmit:p,isLoading:t.isLoading||t.isStreaming,placeholder:e.promptPlaceholder||"Type a message...",darkMode:e.darkMode,icons:e.icons,accessory:r}),i,e.endUserLicensing&&x(ea,{open:l,onClose:()=>s(false),darkMode:e.darkMode,baseUrl:e.chatUrl||Bd,getBaseAuth:()=>t.getTenantAuthToken(),endUserAuth:t.endUserAuth,onAuthenticated:t.authenticateEndUser,initialEmail:Yo()??void 0})]}),x("button",{onClick:()=>t.isOpen?t.close():t.open(),className:`
          cvz-flex cvz-items-center cvz-justify-center
          cvz-w-14 cvz-h-14 cvz-rounded-full cvz-shadow-lg cvz-transition-all cvz-duration-300
          ${t.isOpen?"cvz-rotate-90":"cvz-hover:cvz-scale-105"}
        `,style:{backgroundColor:y.backgroundColor},onMouseEnter:k=>{!t.isOpen&&e.style?.buttonColor?.hover&&(k.currentTarget.style.backgroundColor=e.style.buttonColor.hover);},onMouseLeave:k=>{t.isOpen||(k.currentTarget.style.backgroundColor=y.backgroundColor);},children:x("div",{className:"cvz-text-white",children:t.isOpen?x(Lt,{custom:e.icons?.close,fallback:x(ac,{}),className:"cvz-w-6 cvz-h-6"}):x(Lt,{custom:e.icons?.launcher,fallback:x(oc,{}),className:"cvz-w-6 cvz-h-6"})})})]})};async function*Xd(e){let t=new TextDecoder,n="",r=0;try{for(;;){let{done:i,value:a}=await e.read();if(i){if(n.trim()){let l=Gd(n);for(let s of l)r+=1,yield s;}break}n+=t.decode(a,{stream:!0});let o=n.split(`
`);n=o.pop()||"";for(let l of o)if(l.startsWith("data: ")){let s=l.slice(6).trim();if(s)try{let c=JSON.parse(s);r+=1,yield c;}catch(c){console.error("Failed to parse SSE data:",s,c);}}}}finally{e.releaseLock(),console.log(`parseSSEStream: yielded ${r} events`);}}function Gd(e){let t=[],n=e.split(`
`);for(let r of n)if(r.startsWith("data: ")){let i=r.slice(6).trim();if(i)try{t.push(JSON.parse(i));}catch(a){console.error("Failed to parse SSE data:",i,a);}}return t}async function*sc(e){let{baseUrl:t,message:n,sessionId:r,persona:i,authToken:a,authType:o,maxTokens:l,clientId:s,extraContext:c,abortSignal:p}=e,u={"Content-Type":"application/json",Accept:"text/event-stream"};s&&(u["X-Client-Id"]=s),o==="apiKey"?u["X-API-Key"]=a:u.Authorization=`Bearer ${a}`;let m={message:n};!r&&o==="apiKey"&&i&&(m.persona=typeof i=="string"?{alias:i}:i),r&&(m.session=r),l&&(m.max_tokens=l),c&&Object.assign(m,c);let f;r?f="/api/chat/continuation/stream":f="/api/chat/completion/stream";let d=await fetch(`${t}${f}`,{method:"POST",headers:u,body:JSON.stringify(m),signal:p});if(!d.ok){let z=`HTTP ${d.status}: ${d.statusText}`;try{console.error(`error from completion: ${d.status} : ${d.statusText}`),z=(await d.json()).message||z;}catch{}yield {type:"error",message:`${d.status} ${z}`};return}if(!d.body){yield {type:"error",message:"No response body received"};return}let y=d.body.getReader();yield*Xd(y);}var oo="cvz_client_id",Mt="cvz_client_id_v2",cn="cvz_client_id_captcha_gated",uc="cvz_client_id_last_forced_reissue",pc="issue_client_id";var Jd=["invalid client_id","client_id does not belong to this account"];function Qd(e){return typeof e=="object"&&e!==null&&"provider"in e&&"site_key"in e}function Nt(e){try{return localStorage.getItem(e)}catch{return null}}function Dt(e,t){try{localStorage.setItem(e,t);}catch{}}function Ge(e,t){return `${e}:${t}`}function Rt(e){try{localStorage.removeItem(e);}catch{}}function Zd(e){return Nt(Ge(cn,e))==="1"}function eh(e,t){Dt(Ge(cn,e),t?"1":"0");}function th(e){let t=Nt(Mt);if(!t)return null;Dt(Ge(Mt,e),t);let n=Nt(cn);return n!==null&&Dt(Ge(cn,e),n),Rt(Mt),Rt(cn),Rt(uc),t}function fc(e){let t=e instanceof Error?e.message:typeof e=="string"?e:"";return Jd.some(n=>t.includes(n))}function nh(){let e=Nt(oo);if(e)return e;let t=crypto.randomUUID();return Dt(oo,t),t}var ro=null;function rh(e){return ro||(ro=new Promise((t,n)=>{let r=document.createElement("script");r.src=`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(e)}`,r.async=true,r.onload=()=>t(),r.onerror=()=>n(new Error("failed to load reCAPTCHA script")),document.head.appendChild(r);})),ro}async function ih(e){return await rh(e),new Promise((t,n)=>{if(!window.grecaptcha){n(new Error("grecaptcha unavailable after script load"));return}window.grecaptcha.ready(()=>{window.grecaptcha.execute(e,{action:pc}).then(t,n);});})}var io=null;function oh(){return io||(io=new Promise((e,t)=>{let n=document.createElement("script");n.src="https://challenges.cloudflare.com/turnstile/v0/api.js",n.async=true,n.onload=()=>e(),n.onerror=()=>t(new Error("failed to load Turnstile script")),document.head.appendChild(n);})),io}async function ah(e,t){return await oh(),new Promise((n,r)=>{if(!window.turnstile){r(new Error("turnstile unavailable after script load"));return}let i=t?.getContainer?.()??null,a=i??document.createElement("div"),o=!i;o?(a.style.position="fixed",a.style.top="-9999px",a.style.left="-9999px",document.body.appendChild(a)):a.replaceChildren();let l,s=()=>{t?.onPending?.(false),l&&window.turnstile?.remove(l),o&&a.remove();};t?.onPending?.(true),l=window.turnstile.render(a,{sitekey:e,action:pc,callback:c=>{n(c),s();},"error-callback":c=>{r(c instanceof Error?c:new Error("Turnstile challenge failed")),s();}});})}function lh(e,t,n){return e==="recaptcha_v3"?ih(t):ah(t,n)}function cc(e,t,n){return fetch(`${e}/api/chat/client_id`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_public_id:t,...n?{recaptcha_token:n}:{}})})}async function ao(e,t,n){if(!t)return nh();let r=Nt(Ge(Mt,t))??th(t);if(r)return r;try{let i=await cc(e,t),a=!1;if(i.status===400){let l=await i.json();if(Qd(l)){a=!0;let s=await lh(l.provider,l.site_key,n);i=await cc(e,t,s);}else return console.warn("cvzWidget: client_id issuance failed (400)"),null}if(!i.ok)return console.warn(`cvzWidget: client_id issuance failed (${i.status})`),null;eh(t,a);let o=await i.json();return Dt(Ge(Mt,t),o.client_id),Rt(oo),o.client_id}catch(i){return console.warn("cvzWidget: client_id issuance failed",i),null}}async function mc(e,t,n){if(!t)return null;let r=Ge(Mt,t),i=Ge(uc,t);if(!Zd(t)){let a=Number(Nt(i)??"0");if(Date.now()-a<36e5)return Rt(r),null}return Dt(i,String(Date.now())),Rt(r),ao(e,t,n)}var sh="cvz_chat_history";function ch(e){let t=new TextEncoder().encode(e),n="";return t.forEach(r=>{n+=String.fromCharCode(r);}),btoa(n)}function uh(e){let t=atob(e),n=Uint8Array.from(t,r=>r.charCodeAt(0));return new TextDecoder().decode(n)}function lo(e=sh){async function t(r,i){try{localStorage.setItem(e,ch(JSON.stringify({sessionId:r,messages:i})));}catch{}}async function n(){let r={sessionId:"",messages:[]};try{let i=localStorage.getItem(e);if(!i)return r;let a;try{a=JSON.parse(uh(i));}catch{a=JSON.parse(i);}return {sessionId:a.sessionId||"",messages:a.messages||[]}}catch{return r}}return {save:t,load:n}}var Ot="https://chat.converzen.de",hc="Hi, how can I help you ?",ph=5;function gc(e){return typeof e=="string"&&/^https?:\/\//i.test(e.trim())}function so(e){return typeof e=="string"&&e.trim()?e.trim():void 0}function vc(e){if(!Array.isArray(e))return [];let t=[];for(let n of e){if(t.length>=ph)break;if(!n||typeof n!="object")continue;let r=n,i=so(r.title);!i||!gc(r.url)||t.push({title:i,url:r.url.trim(),description:so(r.description),imageUrl:gc(r.imageUrl)?r.imageUrl.trim():void 0,merchant:so(r.merchant),sponsored:r.sponsored!==false});}return t}function yc(e,t={}){let n=t.voiceSessionFactory,r=new Set,i=null,a={getContainer:()=>i,onPending:A=>u({captchaPending:A})},o={messages:[],sessionId:null,isOpen:e.autoOpen??false,isLoading:false,isStreaming:false,streamingMessage:"",thinkingMessage:"",activeToolCall:null,captchaPending:false,endUserAuth:(()=>{let A=$o();return rt(A)?A:null})(),showAuthNudge:false,voiceStatus:"idle",voiceStage:"idle",voiceError:null,voiceTts:null},l=null,s=null,c=false;function p(){r.forEach(A=>A());}function u(A){o={...o,...A},p();}let m={current:false},f=e.persistMessages!==false,d=lo(e.historyKey),y=e.onSaveMessages??(f?d.save:async()=>{}),z=e.onLoadMessages??(f?d.load:async()=>({sessionId:"",messages:[]})),v=null,k=null,S=null,L="",N=null,_="",V=null;function Y(){if(!S){let A=e.chatUrl||Ot;S=ao(A,e.publicId,a);}return S}async function H(A=false){if(e.apiKey)return {token:e.apiKey,type:"apiKey"};if(!e.getToken)throw new Error("Either apiKey or getToken must be provided");let M=e.getToken;if(!A){let te=Date.now()/1e3+5,ne=k;if(ne&&(ne.expiresAt==null||ne.expiresAt>te))return {token:ne.token,type:"bearer"}}let q=async()=>{let te=await M(await Y());return typeof te=="string"?{token:te,expiresAt:void 0}:te},U;try{U=await q();}catch(te){if(!fc(te))throw te;let ne=e.chatUrl||Ot;S=Promise.resolve(await mc(ne,e.publicId,a)),U=await q();}return k=U,{token:U.token,type:"bearer"}}async function b(A=false){return !A&&rt(o.endUserAuth)?{token:o.endUserAuth.token,type:"bearer"}:H(A)}function G(){let A=e.persona;return A?typeof A=="string"?{alias:A}:A:null}async function B(){if(!e.apiKey&&e.getToken)return (await H()).token;if(!e.apiKey)throw new Error("Either apiKey or getToken must be provided");let A=e.chatUrl||Ot,M=await Y(),q=await fetch(`${A}/api/chat/get_token`,{method:"POST",headers:{"Content-Type":"application/json","X-API-Key":e.apiKey},body:JSON.stringify({user_id:"voice-widget",media_type:"voice",client_id:M??void 0,persona:G()})});if(!q.ok)throw new Error(`voice token request failed (${q.status}): ${await q.text()}`);let U=await q.json();if(!U||typeof U.token!="string")throw new Error("voice token response missing token");return U.token}async function T(A,M){let q=c;if(c=false,!A){u({voiceStage:"idle"});return}m.current=true;let U=o.messages,te=[...U].reverse().find(yt=>yt.role==="USER"),ne={content:A,role:"ASSISTANT",createdAt:new Date().toISOString(),...q?{interrupted:true}:{}},Ie=[...U,ne],ze=M||o.sessionId||"";u({messages:Ie,sessionId:M||o.sessionId,voiceStage:"idle"}),setTimeout(()=>{m.current=false;},0),await y(ze,Ie),ue(te?.content??"",ne,ze);}function j(A){switch(A.type){case "status":u({voiceStage:A.stage});break;case "input":{let M=A.text?.trim();if(!M)break;let q=[...o.messages,{content:M,role:"USER",createdAt:new Date().toISOString()}];if(u({messages:q}),y(o.sessionId||"",q),e.onUserMessage)try{e.onUserMessage({question:M,sessionId:o.sessionId});}catch(U){console.error("cvzWidget: onUserMessage failed",U);}break}case "response":T(A.text,A.session_id);break;case "interrupted":c=true;break;case "tts_state":u({voiceTts:A.enabled});break;case "duck":case "unduck":break;case "error":{c=false;let M=[...o.messages,{content:A.message||"Voice error",role:"SYSTEM",createdAt:new Date().toISOString()}];u({messages:M,voiceStage:"idle"}),y(o.sessionId||"",M);break}}}async function $(A){if(n&&!(l||o.voiceStatus==="connecting"||o.voiceStatus==="connected")){u({voiceStatus:"connecting",voiceStage:"idle",voiceError:null,voiceTts:null}),c=false;try{let M=await B(),q=e.chatUrl||Ot;l=await n({baseUrl:q,token:M,sessionId:o.sessionId,audioElement:A,tts:s,callbacks:{onStatusChange:U=>u(U==="connected"?{voiceStatus:U}:{voiceStatus:U,voiceStage:"idle"}),onEvent:j,onError:U=>u({voiceError:U})}});}catch(M){l=null,u({voiceStatus:"failed",voiceStage:"idle",voiceError:M instanceof Error?M.message:String(M)});}}}function Z(){l&&(l.stop(),l=null),u({voiceStatus:"stopped",voiceStage:"idle",voiceTts:null});}function P(A){s=A,l?.send({type:"set_tts",enabled:A})&&u({voiceTts:A});}function ee(A){if(o.voiceStatus!=="connected"||!l||!l.send({type:"text_input",text:A}))return  false;if(e.onUserMessage)try{e.onUserMessage({question:A,sessionId:o.sessionId});}catch(q){console.error("cvzWidget: onUserMessage failed",q);}let M=[...o.messages,{content:A,role:"USER",createdAt:new Date().toISOString()}];return u({messages:M,voiceStage:"thinking"}),y(o.sessionId||"",M),true}async function fe(A,M,q,U=0){try{let ne=await b(U>0),Ie=e.chatUrl||Ot,ze=o.sessionId||"",yt=sc({baseUrl:Ie,sessionId:ze,message:A.content,persona:e.persona,authToken:ne.token,authType:ne.type,clientId:await Y()??void 0,extraContext:e.extraContext,abortSignal:q.signal}),xt="",Ut=!1,Qe=!1,Ze=0,or=350,un=async()=>{if(!Ze)return;let w=or-(Date.now()-Ze);w>0&&await new Promise(E=>setTimeout(E,w));};for await(let w of yt){if(q.signal.aborted)break;switch(w.type){case "session_created":case "session_continued":w.session_id&&w.session_id!==ze&&(ze=w.session_id,u({sessionId:w.session_id}));break;case "thinking":w.content&&(Qe||(Ze=Date.now()),Qe=!0,_+=w.content,V||(V=requestAnimationFrame(()=>{let E=_;_="",V=null,u({thinkingMessage:o.thinkingMessage+E});})));break;case "tool_call_started":w.name&&(await un(),Qe=!0,Ze=Date.now(),u({activeToolCall:w.name}));break;case "token":w.content&&(Qe&&(await un(),Qe=!1,Ze=0,_="",u({thinkingMessage:"",activeToolCall:null})),L+=w.content,xt+=w.content,N||(N=requestAnimationFrame(()=>{let E=L;L="",N=null,u({streamingMessage:o.streamingMessage+E});})));break;case "done":{if(xt&&ze){m.current=!0;let E={content:xt,role:"ASSISTANT",createdAt:new Date().toISOString(),sources:w.sources},D=[...M,E];u({messages:D,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),_="",setTimeout(()=>{m.current=!1;},0),await y(ze,D),ue(A.content,E,ze);}else u({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),_="";v=null;return}case "error":{let E=w.code||"",D=w.message||"",K=U===0&&rt(o.endUserAuth);if((E==="auth_failed"||D.includes("401")||D.includes("403")||D.includes("Unauthorized")||D.includes("Forbidden"))&&U<1&&(e.getToken&&!e.apiKey||K)){k=null,K&&ae(),Ut=!0;break}if(E==="rate_limited"&&e.endUserLicensing){u({showAuthNudge:!0,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),_="",v=null;return}let J={content:D||"An error occurred",role:"SYSTEM",createdAt:new Date().toISOString()},be=[...M,J];u({messages:be,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),_="",await y(ze||"",be),v=null;return}}}if(Ut&&U<1)return fe(A,M,q,U+1);!q.signal.aborted&&!Ut&&(u({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),_="",v=null);}catch(ne){let Ie=U===0&&rt(o.endUserAuth);if(ne instanceof Error&&(ne.message.includes("401")||ne.message.includes("403"))&&U<1&&(e.getToken&&!e.apiKey||Ie))return k=null,Ie&&ae(),fe(A,M,q,U+1);throw ne}}function h(A,M){if(M.length===0)return;let q=o.messages.indexOf(A);if(q===-1)return;let U=o.messages.slice();U[q]={...A,cards:M},u({messages:U}),y(o.sessionId||"",U).catch(te=>console.error("cvzWidget: failed to save cards",te));}function ue(A,M,q){let U=e.onAssistantMessage;U&&Promise.resolve().then(()=>U({question:A,answer:M.content,sessionId:q})).then(te=>h(M,vc(te))).catch(te=>console.error("cvzWidget: onAssistantMessage failed",te));}function ye(A){let M=[...o.messages].reverse().find(q=>q.role==="ASSISTANT");M&&h(M,vc(A));}async function g(A){if(!A.trim()||o.isStreaming||ee(A.trim()))return;v&&v.abort();let M={content:A.trim(),role:"USER",createdAt:new Date().toISOString()};if(e.onUserMessage)try{e.onUserMessage({question:M.content,sessionId:o.sessionId});}catch(U){console.error("cvzWidget: onUserMessage failed",U);}let q=[...o.messages,M];u({messages:q,isLoading:true,isStreaming:true,streamingMessage:"",thinkingMessage:"",activeToolCall:null}),_="";try{let U=new AbortController;v=U,await fe(M,q,U);}catch(U){if(U instanceof Error&&U.name==="AbortError"){u({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),_="",v=null;return}let te={content:`Error: ${U instanceof Error?U.message:"Failed to send message"}`,role:"SYSTEM",createdAt:new Date().toISOString()},ne=[...q,te];u({messages:ne,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),_="",await y(o.sessionId||"",ne),v=null;}}async function de(){v&&(v.abort(),v=null),u({messages:[{content:e.initialGreeting||hc,role:"SYSTEM",createdAt:new Date().toISOString()}],streamingMessage:"",thinkingMessage:"",activeToolCall:null,sessionId:null,isStreaming:false,isLoading:false}),_="",await y("",[]);}function De(){u({isOpen:true}),Y();}function Ft(){u({isOpen:false});}function vt(A){Wo(A),u({endUserAuth:A,showAuthNudge:false});}function ae(){qo(),u({endUserAuth:null});}function Je(A){i=A;}if((async()=>{try{let A=await z(),M=[],q=null;A&&typeof A=="object"&&"messages"in A&&"sessionId"in A?(M=A.messages||[],q=A.sessionId||null):Array.isArray(A)&&(M=A),M.length===0&&(M=[{content:e.initialGreeting||hc,role:"SYSTEM",createdAt:new Date().toISOString()}]),u({sessionId:q,messages:M});}catch(A){console.error("Failed to load messages:",A);}})(),e.endUserLicensing){let A=Xo();if(A){let M=e.chatUrl||Ot;bn(M,A.pendingId).finally(()=>{Go();});}}function Ae(){l&&(l.stop(),l=null),v&&(v.abort(),v=null),N&&(cancelAnimationFrame(N),N=null),V&&(cancelAnimationFrame(V),V=null);}return {getState:()=>o,subscribe(A){return r.add(A),()=>r.delete(A)},sendMessage:g,open:De,close:Ft,clearHistory:de,authenticateEndUser:vt,deauthenticateEndUser:ae,getTenantAuthToken:H,setCaptchaContainer:Je,addCards:ye,startVoice:$,stopVoice:Z,setVoiceTts:P,isFinalizingRef:m,dispose:Ae}}async function xc(e){let{baseUrl:t,token:n,sessionId:r,audioElement:i,tts:a,callbacks:o}=e,l=k=>o.onLog?.(k),s=await navigator.mediaDevices.getUserMedia({audio:true}),c=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),p=false,u=()=>{if(!p){p=true;try{c.close();}catch{}if(s.getTracks().forEach(k=>{try{k.stop();}catch{}}),i)try{i.srcObject=null;}catch{}}};c.oniceconnectionstatechange=()=>{let k=c.iceConnectionState;l(`ICE: ${k}`),k==="connected"||k==="completed"?o.onStatusChange("connected"):(k==="failed"||k==="disconnected")&&(o.onStatusChange("failed"),o.onError(`ICE ${k}`));},c.ontrack=k=>{l("remote audio track received"),i&&(i.srcObject=k.streams[0]);},s.getAudioTracks().forEach(k=>c.addTrack(k,s));let m=c.createDataChannel("events");m.onopen=()=>l("events data channel open"),m.onclose=()=>l("events data channel closed"),m.onmessage=k=>{if(typeof k.data=="string")try{o.onEvent(JSON.parse(k.data));}catch(S){l(`bad data-channel message: ${String(S)}`);}};let f=await c.createOffer();await c.setLocalDescription(f);let d=(r??"").trim()||null,y=await fetch(`${t}/api/voice/webrtc/offer`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(typeof a=="boolean"?{sdp:f.sdp,session_id:d,tts:a}:{sdp:f.sdp,session_id:d})});if(!y.ok)throw u(),new Error(`voice offer rejected (${y.status}): ${await y.text()}`);let z=await y.json();return await c.setRemoteDescription({type:"answer",sdp:z.sdp}),l("remote description set - ICE checks starting"),{stop:u,send:k=>{if(p||m.readyState!=="open")return  false;try{return m.send(JSON.stringify(k)),!0}catch(S){return l(`data-channel send failed: ${String(S)}`),false}}}}var ir=null;function bc(){return ir}function wc(e){let t=yn(()=>yc(e,{voiceSessionFactory:xc}),[e]),n=Ha(t.subscribe,t.getState);return _e(()=>(ir=t,()=>{ir===t&&(ir=null),t.dispose();}),[t]),{...n,sendMessage:t.sendMessage,open:t.open,close:t.close,clearHistory:t.clearHistory,authenticateEndUser:t.authenticateEndUser,deauthenticateEndUser:t.deauthenticateEndUser,getTenantAuthToken:t.getTenantAuthToken,setCaptchaContainer:t.setCaptchaContainer,addCards:t.addCards,startVoice:t.startVoice,stopVoice:t.stopVoice,setVoiceTts:t.setVoiceTts,isFinalizingRef:t.isFinalizingRef,dispose:t.dispose}}var fh=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"})}),mh=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"cvz-w-5 cvz-h-5",children:x("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2"})}),kc=({active:e,connecting:t,onClick:n,label:r,darkMode:i})=>x("button",{type:"button",onClick:n,title:r||(e?"Stop voice":"Talk"),"aria-label":r||(e?"Stop voice":"Talk"),className:`cvz-flex cvz-items-center cvz-justify-center cvz-w-11 cvz-h-11 cvz-rounded-full cvz-shrink-0 cvz-transition-colors cvz-shadow-sm ${e?"cvz-bg-red-600 cvz-text-white cvz-hover:cvz-bg-red-700":i?"cvz-bg-gray-700 cvz-text-gray-100 cvz-hover:cvz-bg-gray-600":"cvz-bg-gray-100 cvz-text-gray-700 cvz-hover:cvz-bg-gray-200"} ${t?"cvz-animate-pulse":""}`,children:e?x(mh,{}):x(fh,{})}),dh=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-4 cvz-h-4",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"})}),hh=()=>x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-4 cvz-h-4",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"})}),_c=({enabled:e,onToggle:t,darkMode:n})=>x("button",{type:"button",onClick:t,title:e?"Mute spoken replies":"Speak replies","aria-label":e?"Mute spoken replies":"Speak replies","aria-pressed":!e,className:`cvz-flex cvz-items-center cvz-justify-center cvz-w-7 cvz-h-7 cvz-rounded-full cvz-transition-colors ${n?"cvz-text-gray-100 cvz-hover:cvz-bg-white/10":"cvz-text-white cvz-hover:cvz-bg-white/20"}`,children:e?x(dh,{}):x(hh,{})}),gh={idle:"",listening:"Listening",transcribing:"Transcribing",thinking:"Thinking",speaking:"Speaking"},zc=({status:e,stage:t,darkMode:n})=>{let r;if(e==="connecting")r="Connecting";else if(e==="failed")r="Voice error";else if(e==="connected")r=gh[t]||"Connected";else return null;return x("span",{className:`cvz-rounded-full cvz-px-2.5 cvz-py-1 cvz-text-[11px] cvz-font-medium cvz-whitespace-nowrap ${e==="failed"?"cvz-bg-red-500/20 cvz-text-red-100":n?"cvz-bg-white/10 cvz-text-gray-100":"cvz-bg-white/20 cvz-text-white"}`,children:r})};var vh=({config:e})=>{let t=wc(e),n=nt(null),r=t.voiceStatus==="connecting"||t.voiceStatus==="connected",i=()=>{r?t.stopVoice():t.startVoice(n.current);},a=nt(false);return _e(()=>{e.voiceAutoStart&&(t.isOpen&&!a.current&&t.voiceStatus==="idle"&&(a.current=true,t.startVoice(n.current)),t.isOpen||(a.current=false));},[t.isOpen,e.voiceAutoStart]),x(lc,{config:e,core:t,headerAccessory:x("span",{className:"cvz-flex cvz-items-center cvz-gap-1",children:[x(zc,{status:t.voiceStatus,stage:t.voiceStage,darkMode:e.darkMode}),t.voiceStatus==="connected"&&t.voiceTts!==null&&x(_c,{enabled:t.voiceTts,onToggle:()=>t.setVoiceTts(!t.voiceTts),darkMode:e.darkMode})]}),inputAccessory:x(kc,{active:r,connecting:t.voiceStatus==="connecting",onClick:i,label:e.voiceButtonLabel,darkMode:e.darkMode}),footer:x("audio",{ref:n,autoPlay:true,style:{display:"none"}})})},Sc=vh;var yh="cvz-voice-widget-host",co=class{hostElement=null;root=null;buildId="c651a29-2026-11-23T17:24:21.348Z";init(t){if(this.hostElement){console.warn("cvzVoiceWidget is already initialized.");return}console.log("init: Initializing cvzVoiceWidget...",this.buildId),{hostElement:this.hostElement,root:this.root}=Io(t,Sc,yh);}addCards(t){let n=bc();if(!n){console.warn("addCards: cvzVoiceWidget is not initialized.");return}n.addCards(t);}hide(){if(!this.hostElement){console.warn("hide: cvzVoiceWidget is not initialized.");return}this.root&&(qt(null,this.root),this.root=null),this.hostElement&&(this.hostElement.remove(),this.hostElement=null);}},Cc=new co;typeof window<"u"&&(window.cvzVoiceWidget=Cc);var xS=Cc;
module.exports=xS;