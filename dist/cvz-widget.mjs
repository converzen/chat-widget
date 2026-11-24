var Eu=Object.create;var sr=Object.defineProperty;var Au=Object.getOwnPropertyDescriptor;var Iu=Object.getOwnPropertyNames;var Tu=Object.getPrototypeOf,Pu=Object.prototype.hasOwnProperty;var Vt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),fo=(e,t)=>{for(var n in t)sr(e,n,{get:t[n],enumerable:true});},Lu=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Iu(t))!Pu.call(e,i)&&i!==n&&sr(e,i,{get:()=>t[i],enumerable:!(r=Au(t,i))||r.enumerable});return e};var mo=(e,t,n)=>(n=e!=null?Eu(Tu(e)):{},Lu(sr(n,"default",{value:e,enumerable:true}),e));var Ya=Vt((sy,qa)=>{var ja=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Nc=/\n/g,Dc=/^\s*/,Fc=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Oc=/^:\s*/,Uc=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Bc=/^[;\s]*/,Hc=/^\s+|\s+$/g,jc=`
`,Va="/",$a="*",ot="",Vc="comment",$c="declaration";function Wc(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return [];t=t||{};var n=1,r=1;function i(d){var v=d.match(Nc);v&&(n+=v.length);var x=d.lastIndexOf(jc);r=~x?d.length-x:r+d.length;}function a(){var d={line:n,column:r};return function(v){return v.position=new o(d),u(),v}}function o(d){this.start=d,this.end={line:n,column:r},this.source=t.source;}o.prototype.content=e;function l(d){var v=new Error(t.source+":"+n+":"+r+": "+d);if(v.reason=d,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function s(d){var v=d.exec(e);if(v){var x=v[0];return i(x),e=e.slice(x.length),v}}function u(){s(Dc);}function p(d){var v;for(d=d||[];v=c();)v!==false&&d.push(v);return d}function c(){var d=a();if(!(Va!=e.charAt(0)||$a!=e.charAt(1))){for(var v=2;ot!=e.charAt(v)&&($a!=e.charAt(v)||Va!=e.charAt(v+1));)++v;if(v+=2,ot===e.charAt(v-1))return l("End of comment missing");var x=e.slice(2,v-2);return r+=2,i(x),e=e.slice(v),r+=2,d({type:Vc,comment:x})}}function m(){var d=a(),v=s(Fc);if(v){if(c(),!s(Oc))return l("property missing ':'");var x=s(Uc),y=d({type:$c,property:Wa(v[0].replace(ja,ot)),value:x?Wa(x[0].replace(ja,ot)):ot});return s(Bc),y}}function f(){var d=[];p(d);for(var v;v=m();)v!==false&&(d.push(v),p(d));return d}return u(),f()}function Wa(e){return e?e.replace(Hc,ot):ot}qa.exports=Wc;});var Ka=Vt(Jt=>{var qc=Jt&&Jt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Jt,"__esModule",{value:true});Jt.default=Kc;var Yc=qc(Ya());function Kc(e,t){let n=null;if(!e||typeof e!="string")return n;let r=(0, Yc.default)(e),i=typeof t=="function";return r.forEach(a=>{if(a.type!=="declaration")return;let{property:o,value:l}=a;i?t(o,l,a):l&&(n=n||{},n[o]=l);}),n}});var Ga=Vt(Tn=>{Object.defineProperty(Tn,"__esModule",{value:true});Tn.camelCase=void 0;var Xc=/^--[a-zA-Z0-9_-]+$/,Gc=/-([a-z])/g,Jc=/^[^-]+$/,Qc=/^-(webkit|moz|ms|o|khtml)-/,Zc=/^-(ms)-/,ep=function(e){return !e||Jc.test(e)||Xc.test(e)},tp=function(e,t){return t.toUpperCase()},Xa=function(e,t){return "".concat(t,"-")},np=function(e,t){return t===void 0&&(t={}),ep(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Zc,Xa):e=e.replace(Qc,Xa),e.replace(Gc,tp))};Tn.camelCase=np;});var Qa=Vt((Vr,Ja)=>{var rp=Vr&&Vr.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ip=rp(Ka()),op=Ga();function jr(e,t){var n={};return !e||typeof e!="string"||(0, ip.default)(e,function(r,i){r&&i&&(n[(0, op.camelCase)(r,t)]=i);}),n}jr.default=jr;Ja.exports=jr;});var ks=Vt((Ok,ws)=>{var er=Object.prototype.hasOwnProperty,xs=Object.prototype.toString,ds=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,gs=function(t){return typeof Array.isArray=="function"?Array.isArray(t):xs.call(t)==="[object Array]"},ys=function(t){if(!t||xs.call(t)!=="[object Object]")return  false;var n=er.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&er.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return  false;var i;for(i in t);return typeof i>"u"||er.call(t,i)},vs=function(t,n){ds&&n.name==="__proto__"?ds(t,n.name,{enumerable:true,configurable:true,value:n.newValue,writable:true}):t[n.name]=n.newValue;},bs=function(t,n){if(n==="__proto__")if(er.call(t,n)){if(hs)return hs(t,n).value}else return;return t[n]};ws.exports=function e(){var t,n,r,i,a,o,l=arguments[0],s=1,u=arguments.length,p=false;for(typeof l=="boolean"&&(p=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(t=arguments[s],t!=null)for(n in t)r=bs(l,n),i=bs(t,n),l!==i&&(p&&i&&(ys(i)||(a=gs(i)))?(a?(a=false,o=r&&gs(r)?r:[]):o=r&&ys(r)?r:{},vs(l,{name:n,newValue:e(p,o,i)})):typeof i<"u"&&vs(l,{name:n,newValue:i}));return l};});var hn,U,bo,tt,ho,xo,wo,ko,fr,ur,cr,$t={},_o=[],Nu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Wt=Array.isArray;function Ue(e,t){for(var n in t)e[n]=t[n];return e}function mr(e){e&&e.parentNode&&e.parentNode.removeChild(e);}function Le(e,t,n){var r,i,a,o={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?hn.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return mn(e,o,r,i,null)}function mn(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++bo,__i:-1,__u:0};return i==null&&U.vnode!=null&&U.vnode(a),a}function ze(e){return e.children}function Ie(e,t){this.props=e,this.context=t;}function xt(e,t){if(t==null)return e.__?xt(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?xt(e):null}function zo(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return zo(e)}}function go(e){(!e.__d&&(e.__d=true)&&tt.push(e)&&!dn.__r++||ho!=U.debounceRendering)&&((ho=U.debounceRendering)||xo)(dn);}function dn(){for(var e,t,n,r,i,a,o,l=1;tt.length;)tt.length>l&&tt.sort(wo),e=tt.shift(),l=tt.length,e.__d&&(n=void 0,r=void 0,i=(r=(t=e).__v).__e,a=[],o=[],t.__P&&((n=Ue({},r)).__v=r.__v+1,U.vnode&&U.vnode(n),dr(t.__P,n,r,t.__n,t.__P.namespaceURI,32&r.__u?[i]:null,a,i??xt(r),!!(32&r.__u),o),n.__v=r.__v,n.__.__k[n.__i]=n,Eo(a,n,o),r.__e=r.__=null,n.__e!=i&&zo(n)));dn.__r=0;}function So(e,t,n,r,i,a,o,l,s,u,p){var c,m,f,d,v,x,y,z=r&&r.__k||_o,S=t.length;for(s=Du(n,t,z,s,S),c=0;c<S;c++)(f=n.__k[c])!=null&&(m=f.__i==-1?$t:z[f.__i]||$t,f.__i=c,x=dr(e,f,m,i,a,o,l,s,u,p),d=f.__e,f.ref&&m.ref!=f.ref&&(m.ref&&hr(m.ref,null,f),p.push(f.ref,f.__c||d,f)),v==null&&d!=null&&(v=d),(y=!!(4&f.__u))||m.__k===f.__k?s=Co(f,s,e,y):typeof f.type=="function"&&x!==void 0?s=x:d&&(s=d.nextSibling),f.__u&=-7);return n.__e=v,s}function Du(e,t,n,r,i){var a,o,l,s,u,p=n.length,c=p,m=0;for(e.__k=new Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[a]=mn(null,o,null,null,null):Wt(o)?o=e.__k[a]=mn(ze,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=mn(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,s=a+m,o.__=e,o.__b=e.__b+1,l=null,(u=o.__i=Fu(o,n,s,c))!=-1&&(c--,(l=n[u])&&(l.__u|=2)),l==null||l.__v==null?(u==-1&&(i>p?m--:i<p&&m++),typeof o.type!="function"&&(o.__u|=4)):u!=s&&(u==s-1?m--:u==s+1?m++:(u>s?m--:m++,o.__u|=4))):e.__k[a]=null;if(c)for(a=0;a<p;a++)(l=n[a])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=xt(l)),Io(l,l));return r}function Co(e,t,n,r){var i,a;if(typeof e.type=="function"){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=Co(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=xt(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function qt(e,t){return t=t||[],e==null||typeof e=="boolean"||(Wt(e)?e.some(function(n){qt(n,t);}):t.push(e)),t}function Fu(e,t,n,r){var i,a,o,l=e.key,s=e.type,u=t[n],p=u!=null&&(2&u.__u)==0;if(u===null&&l==null||p&&l==u.key&&s==u.type)return n;if(r>(p?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((u=t[o=i>=0?i--:a++])!=null&&(2&u.__u)==0&&l==u.key&&s==u.type)return o}return  -1}function yo(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Nu.test(t)?n:n+"px";}function fn(e,t,n,r,i){var a,o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else {if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||yo(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||yo(e.style,t,n[t]);}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(ko,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n.u=r.u:(n.u=fr,e.addEventListener(t,a?cr:ur,a)):e.removeEventListener(t,a?cr:ur,a);else {if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===false&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n));}}function vo(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=fr++;else if(t.t<n.u)return;return n(U.event?U.event(t):t)}}}function dr(e,t,n,r,i,a,o,l,s,u){var p,c,m,f,d,v,x,y,z,S,L,P,_,q,Y,W,w,G=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),a=[l=t.__e=n.__e]),(p=U.__b)&&p(t);e:if(typeof G=="function")try{if(y=t.props,z="prototype"in G&&G.prototype.render,S=(p=G.contextType)&&r[p.__c],L=p?S?S.props.value:p.__:r,n.__c?x=(c=t.__c=n.__c).__=c.__E:(z?t.__c=c=new G(y,L):(t.__c=c=new Ie(y,L),c.constructor=G,c.render=Uu),S&&S.sub(c),c.state||(c.state={}),c.__n=r,m=c.__d=!0,c.__h=[],c._sb=[]),z&&c.__s==null&&(c.__s=c.state),z&&G.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Ue({},c.__s)),Ue(c.__s,G.getDerivedStateFromProps(y,c.__s))),f=c.props,d=c.state,c.__v=t,m)z&&G.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),z&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else {if(z&&G.getDerivedStateFromProps==null&&y!==f&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,L),t.__v==n.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,L)===!1){for(t.__v!=n.__v&&(c.props=y,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(j){j&&(j.__=t);}),P=0;P<c._sb.length;P++)c.__h.push(c._sb[P]);c._sb=[],c.__h.length&&o.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,L),z&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(f,d,v);});}if(c.context=L,c.props=y,c.__P=e,c.__e=!1,_=U.__r,q=0,z){for(c.state=c.__s,c.__d=!1,_&&_(t),p=c.render(c.props,c.state,c.context),Y=0;Y<c._sb.length;Y++)c.__h.push(c._sb[Y]);c._sb=[];}else do c.__d=!1,_&&_(t),p=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++q<25);c.state=c.__s,c.getChildContext!=null&&(r=Ue(Ue({},r),c.getChildContext())),z&&!m&&c.getSnapshotBeforeUpdate!=null&&(v=c.getSnapshotBeforeUpdate(f,d)),W=p,p!=null&&p.type===ze&&p.key==null&&(W=Ao(p.props.children)),l=So(e,Wt(W)?W:[W],t,n,r,i,a,o,l,s,u),c.base=t.__e,t.__u&=-161,c.__h.length&&o.push(c),x&&(c.__E=c.__=null);}catch(j){if(t.__v=null,s||a!=null)if(j.then){for(t.__u|=s?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;a[a.indexOf(l)]=null,t.__e=l;}else {for(w=a.length;w--;)mr(a[w]);pr(t);}else t.__e=n.__e,t.__k=n.__k,j.then||pr(t);U.__e(j,t,n);}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Ou(n.__e,t,n,r,i,a,o,s,u);return (p=U.diffed)&&p(t),128&t.__u?void 0:l}function pr(e){e&&e.__c&&(e.__c.__e=true),e&&e.__k&&e.__k.forEach(pr);}function Eo(e,t,n){for(var r=0;r<n.length;r++)hr(n[r],n[++r],n[++r]);U.__c&&U.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i);});}catch(a){U.__e(a,i.__v);}});}function Ao(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Wt(e)?e.map(Ao):Ue({},e)}function Ou(e,t,n,r,i,a,o,l,s){var u,p,c,m,f,d,v,x=n.props||$t,y=t.props,z=t.type;if(z=="svg"?i="http://www.w3.org/2000/svg":z=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(u=0;u<a.length;u++)if((f=a[u])&&"setAttribute"in f==!!z&&(z?f.localName==z:f.nodeType==3)){e=f,a[u]=null;break}}if(e==null){if(z==null)return document.createTextNode(y);e=document.createElementNS(i,z,y.is&&y),l&&(U.__m&&U.__m(t,a),l=false),a=null;}if(z==null)x===y||l&&e.data==y||(e.data=y);else {if(a=a&&hn.call(e.childNodes),!l&&a!=null)for(x={},u=0;u<e.attributes.length;u++)x[(f=e.attributes[u]).name]=f.value;for(u in x)if(f=x[u],u!="children"){if(u=="dangerouslySetInnerHTML")c=f;else if(!(u in y)){if(u=="value"&&"defaultValue"in y||u=="checked"&&"defaultChecked"in y)continue;fn(e,u,null,f,i);}}for(u in y)f=y[u],u=="children"?m=f:u=="dangerouslySetInnerHTML"?p=f:u=="value"?d=f:u=="checked"?v=f:l&&typeof f!="function"||x[u]===f||fn(e,u,f,x[u],i);if(p)l||c&&(p.__html==c.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(c&&(e.innerHTML=""),So(t.type=="template"?e.content:e,Wt(m)?m:[m],t,n,r,z=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,o,a?a[0]:n.__k&&xt(n,0),l,s),a!=null)for(u=a.length;u--;)mr(a[u]);l||(u="value",z=="progress"&&d==null?e.removeAttribute("value"):d!=null&&(d!==e[u]||z=="progress"&&!d||z=="option"&&d!=x[u])&&fn(e,u,d,x[u],i),u="checked",v!=null&&v!=e[u]&&fn(e,u,v,x[u],i));}return e}function hr(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t));}else e.current=t;}catch(i){U.__e(i,n);}}function Io(e,t,n){var r,i;if(U.unmount&&U.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||hr(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount();}catch(a){U.__e(a,t);}r.base=r.__P=null;}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Io(r[i],t,n||typeof e.type!="function");n||mr(e.__e),e.__c=e.__=e.__e=void 0;}function Uu(e,t,n){return this.constructor(e,n)}function Yt(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),U.__&&U.__(e,t),i=(r="undefined"=="function")?null:t.__k,a=[],o=[],dr(t,e=(t).__k=Le(ze,null,[e]),i||$t,$t,t.namespaceURI,i?null:t.firstChild?hn.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,o),Eo(a,e,o);}hn=_o.slice,U={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(l){e=l;}throw e}},bo=0,Ie.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ue({},this.state),typeof e=="function"&&(e=e(Ue({},n),this.props)),e&&Ue(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),go(this));},Ie.prototype.forceUpdate=function(e){this.__v&&(this.__e=true,e&&this.__h.push(e),go(this));},Ie.prototype.render=ze,tt=[],xo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,wo=function(e,t){return e.__v.__b-t.__v.__b},dn.__r=0,ko=/(PointerCapture)$|Capture$/i,fr=0,ur=vo(false),cr=vo(true);var wt,re,gr,To,yn=0,Oo=[],le=U,Po=le.__b,Lo=le.__r,Ro=le.diffed,Mo=le.__c,No=le.unmount,Do=le.__;function vn(e,t){le.__h&&le.__h(re,e,yn||t),yn=0;var n=re.__H||(re.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function he(e){return yn=1,Uo(Ho,e)}function Uo(e,t,n){var r=vn(wt++,2);if(r.t=e,!r.__c&&(r.__=[Ho(void 0,t),function(l){var s=r.__N?r.__N[0]:r.__[0],u=r.t(s,l);s!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}));}],r.__c=re,!re.__f)){var i=function(l,s,u){if(!r.__c.__H)return  true;var p=r.__c.__H.__.filter(function(m){return !!m.__c});if(p.every(function(m){return !m.__N}))return !a||a.call(this,l,s,u);var c=r.__c.props!==l;return p.forEach(function(m){if(m.__N){var f=m.__[0];m.__=m.__N,m.__N=void 0,f!==m.__[0]&&(c=true);}}),a&&a.call(this,l,s,u)||c};re.__f=true;var a=re.shouldComponentUpdate,o=re.componentWillUpdate;re.componentWillUpdate=function(l,s,u){if(this.__e){var p=a;a=void 0,i(l,s,u),a=p;}o&&o.call(this,l,s,u);},re.shouldComponentUpdate=i;}return r.__N||r.__}function Te(e,t){var n=vn(wt++,3);!le.__s&&vr(n.__H,t)&&(n.__=e,n.u=t,re.__H.__h.push(n));}function Bo(e,t){var n=vn(wt++,4);!le.__s&&vr(n.__H,t)&&(n.__=e,n.u=t,re.__h.push(n));}function bn(e){return yn=5,xn(function(){return {current:e}},[])}function xn(e,t){var n=vn(wt++,7);return vr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Bu(){for(var e;e=Oo.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(gn),e.__H.__h.forEach(yr),e.__H.__h=[];}catch(t){e.__H.__h=[],le.__e(t,e.__v);}}le.__b=function(e){re=null,Po&&Po(e);},le.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Do&&Do(e,t);},le.__r=function(e){Lo&&Lo(e),wt=0;var t=(re=e.__c).__H;t&&(gr===re?(t.__h=[],re.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(t.__h.forEach(gn),t.__h.forEach(yr),t.__h=[],wt=0)),gr=re;},le.diffed=function(e){Ro&&Ro(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Oo.push(t)!==1&&To===le.requestAnimationFrame||((To=le.requestAnimationFrame)||Hu)(Bu)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0;})),gr=re=null;},le.__c=function(e,t){t.some(function(n){try{n.__h.forEach(gn),n.__h=n.__h.filter(function(r){return !r.__||yr(r)});}catch(r){t.some(function(i){i.__h&&(i.__h=[]);}),t=[],le.__e(r,n.__v);}}),Mo&&Mo(e,t);},le.unmount=function(e){No&&No(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{gn(r);}catch(i){t=i;}}),n.__H=void 0,t&&le.__e(t,n.__v));};var Fo=typeof requestAnimationFrame=="function";function Hu(e){var t,n=function(){clearTimeout(r),Fo&&cancelAnimationFrame(t),setTimeout(e);},r=setTimeout(n,35);Fo&&(t=requestAnimationFrame(n));}function gn(e){var t=re,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),re=t;}function yr(e){var t=re;e.__c=e.__(),re=t;}function vr(e,t){return !e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ho(e,t){return typeof t=="function"?t(e):t}function $u(e,t){for(var n in t)e[n]=t[n];return e}function jo(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return  true;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return  true;return  false}function Jo(e,t){var n=t(),r=he({t:{__:n,u:t}}),i=r[0].t,a=r[1];return Bo(function(){i.__=n,i.u=t,br(i)&&a({t:i});},[e,n,t]),Te(function(){return br(i)&&a({t:i}),e(function(){br(i)&&a({t:i});})},[e]),n}function br(e){var t,n,r=e.u,i=e.__;try{var a=r();return !((t=i)===(n=a)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return  true}}function Vo(e,t){this.props=e,this.context=t;}(Vo.prototype=new Ie).isPureReactComponent=true,Vo.prototype.shouldComponentUpdate=function(e,t){return jo(this.props,e)||jo(this.state,t)};var $o=U.__b;U.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),$o&&$o(e);};var Wu=U.__e;U.__e=function(e,t,n,r){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}Wu(e,t,n,r);};var Wo=U.unmount;function Qo(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c();}),e.__c.__H=null),(e=$u({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=true,e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Qo(r,t,n)})),e}function Zo(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Zo(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=true,e.__c.__P=n)),e}function xr(){this.__u=0,this.o=null,this.__b=null;}function ea(e){if(!e.__)return null;var t=e.__.__c;return t&&t.__a&&t.__a(e)}function wn(){this.i=null,this.l=null;}U.unmount=function(e){var t=e.__c;t&&(t.__z=true),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Wo&&Wo(e);},(xr.prototype=new Ie).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var i=ea(r.__v),a=false,o=function(){a||r.__z||(a=true,n.__R=null,i?i(s):s());};n.__R=o;var l=n.__P;n.__P=null;var s=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=Zo(u,u.__c.__P,u.__c.__O);}var p;for(r.setState({__a:r.__b=null});p=r.o.pop();)p.__P=l,p.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o);},xr.prototype.componentWillUnmount=function(){this.o=[];},xr.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Qo(this.__b,n,r.__O=r.__P);}this.__b=null;}var i=t.__a&&Le(ze,null,e.fallback);return i&&(i.__u&=-33),[Le(ze,null,t.__a?null:e.children),i]};var qo=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2];}};(wn.prototype=new Ie).__a=function(e){var t=this,n=ea(t.__v),r=t.l.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),qo(t,e,r)):i();};n?n(a):a();}},wn.prototype.render=function(e){this.i=null,this.l=new Map;var t=qt(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},wn.prototype.componentDidUpdate=wn.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){qo(e,n,t);});};var qu=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Yu=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ku=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Xu=/[A-Z0-9]/g,Gu=typeof document<"u",Ju=function(e){return (typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};Ie.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Ie.prototype,e,{configurable:true,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:true,writable:true,value:t});}});});var Yo=U.event;function Qu(){}function Zu(){return this.cancelBubble}function ec(){return this.defaultPrevented}U.event=function(e){return Yo&&(e=Yo(e)),e.persist=Qu,e.isPropagationStopped=Zu,e.isDefaultPrevented=ec,e.nativeEvent=e};var tc={enumerable:false,configurable:true,get:function(){return this.class}},Ko=U.vnode;U.vnode=function(e){typeof e.type=="string"&&(function(t){var n=t.props,r=t.type,i={},a=r.indexOf("-")===-1;for(var o in n){var l=n[o];if(!(o==="value"&&"defaultValue"in n&&l==null||Gu&&o==="children"&&r==="noscript"||o==="class"||o==="className")){var s=o.toLowerCase();o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&l===true?l="":s==="translate"&&l==="no"?l=false:s[0]==="o"&&s[1]==="n"?s==="ondoubleclick"?o="ondblclick":s!=="onchange"||r!=="input"&&r!=="textarea"||Ju(n.type)?s==="onfocus"?o="onfocusin":s==="onblur"?o="onfocusout":Ku.test(o)&&(o=s):s=o="oninput":a&&Yu.test(o)?o=o.replace(Xu,"-$&").toLowerCase():l===null&&(l=void 0),s==="oninput"&&i[o=s]&&(o="oninputCapture"),i[o]=l;}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=qt(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1;})),r=="select"&&i.defaultValue!=null&&(i.value=qt(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value;})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",tc)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),t.props=i;})(e),e.$$typeof=qu,Ko&&Ko(e);};var Xo=U.__r;U.__r=function(e){Xo&&Xo(e),e.__c;};var Go=U.diffed;U.diffed=function(e){Go&&Go(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value);};async function*nc(e){let t=new TextDecoder,n="",r=0;try{for(;;){let{done:i,value:a}=await e.read();if(i){if(n.trim()){let l=rc(n);for(let s of l)r+=1,yield s;}break}n+=t.decode(a,{stream:!0});let o=n.split(`
`);n=o.pop()||"";for(let l of o)if(l.startsWith("data: ")){let s=l.slice(6).trim();if(s)try{let u=JSON.parse(s);r+=1,yield u;}catch(u){console.error("Failed to parse SSE data:",s,u);}}}}finally{e.releaseLock(),console.log(`parseSSEStream: yielded ${r} events`);}}function rc(e){let t=[],n=e.split(`
`);for(let r of n)if(r.startsWith("data: ")){let i=r.slice(6).trim();if(i)try{t.push(JSON.parse(i));}catch(a){console.error("Failed to parse SSE data:",i,a);}}return t}async function*na(e){let{baseUrl:t,message:n,sessionId:r,persona:i,authToken:a,authType:o,maxTokens:l,clientId:s,extraContext:u,abortSignal:p}=e,c={"Content-Type":"application/json",Accept:"text/event-stream"};s&&(c["X-Client-Id"]=s),o==="apiKey"?c["X-API-Key"]=a:c.Authorization=`Bearer ${a}`;let m={message:n};!r&&o==="apiKey"&&i&&(m.persona=typeof i=="string"?{alias:i}:i),r&&(m.session=r),l&&(m.max_tokens=l),u&&Object.assign(m,u);let f;r?f="/api/chat/continuation/stream":f="/api/chat/completion/stream";let d=await fetch(`${t}${f}`,{method:"POST",headers:c,body:JSON.stringify(m),signal:p});if(!d.ok){let x=`HTTP ${d.status}: ${d.statusText}`;try{console.error(`error from completion: ${d.status} : ${d.statusText}`),x=(await d.json()).message||x;}catch{}yield {type:"error",message:`${d.status} ${x}`};return}if(!d.body){yield {type:"error",message:"No response body received"};return}let v=d.body.getReader();yield*nc(v);}var _r="cvz_client_id",kt="cvz_client_id_v2",Kt="cvz_client_id_captcha_gated",ia="cvz_client_id_last_forced_reissue",oa="issue_client_id";var ic=["invalid client_id","client_id does not belong to this account"];function oc(e){return typeof e=="object"&&e!==null&&"provider"in e&&"site_key"in e}function zt(e){try{return localStorage.getItem(e)}catch{return null}}function St(e,t){try{localStorage.setItem(e,t);}catch{}}function Ve(e,t){return `${e}:${t}`}function _t(e){try{localStorage.removeItem(e);}catch{}}function ac(e){return zt(Ve(Kt,e))==="1"}function lc(e,t){St(Ve(Kt,e),t?"1":"0");}function sc(e){let t=zt(kt);if(!t)return null;St(Ve(kt,e),t);let n=zt(Kt);return n!==null&&St(Ve(Kt,e),n),_t(kt),_t(Kt),_t(ia),t}function aa(e){let t=e instanceof Error?e.message:typeof e=="string"?e:"";return ic.some(n=>t.includes(n))}function uc(){let e=zt(_r);if(e)return e;let t=crypto.randomUUID();return St(_r,t),t}var wr=null;function cc(e){return wr||(wr=new Promise((t,n)=>{let r=document.createElement("script");r.src=`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(e)}`,r.async=true,r.onload=()=>t(),r.onerror=()=>n(new Error("failed to load reCAPTCHA script")),document.head.appendChild(r);})),wr}async function pc(e){return await cc(e),new Promise((t,n)=>{if(!window.grecaptcha){n(new Error("grecaptcha unavailable after script load"));return}window.grecaptcha.ready(()=>{window.grecaptcha.execute(e,{action:oa}).then(t,n);});})}var kr=null;function fc(){return kr||(kr=new Promise((e,t)=>{let n=document.createElement("script");n.src="https://challenges.cloudflare.com/turnstile/v0/api.js",n.async=true,n.onload=()=>e(),n.onerror=()=>t(new Error("failed to load Turnstile script")),document.head.appendChild(n);})),kr}async function mc(e,t){return await fc(),new Promise((n,r)=>{if(!window.turnstile){r(new Error("turnstile unavailable after script load"));return}let i=t?.getContainer?.()??null,a=i??document.createElement("div"),o=!i;o?(a.style.position="fixed",a.style.top="-9999px",a.style.left="-9999px",document.body.appendChild(a)):a.replaceChildren();let l,s=()=>{t?.onPending?.(false),l&&window.turnstile?.remove(l),o&&a.remove();};t?.onPending?.(true),l=window.turnstile.render(a,{sitekey:e,action:oa,callback:u=>{n(u),s();},"error-callback":u=>{r(u instanceof Error?u:new Error("Turnstile challenge failed")),s();}});})}function dc(e,t,n){return e==="recaptcha_v3"?pc(t):mc(t,n)}function ra(e,t,n){return fetch(`${e}/api/chat/client_id`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_public_id:t,...n?{recaptcha_token:n}:{}})})}async function zr(e,t,n){if(!t)return uc();let r=zt(Ve(kt,t))??sc(t);if(r)return r;try{let i=await ra(e,t),a=!1;if(i.status===400){let l=await i.json();if(oc(l)){a=!0;let s=await dc(l.provider,l.site_key,n);i=await ra(e,t,s);}else return console.warn("cvzWidget: client_id issuance failed (400)"),null}if(!i.ok)return console.warn(`cvzWidget: client_id issuance failed (${i.status})`),null;lc(t,a);let o=await i.json();return St(Ve(kt,t),o.client_id),_t(_r),o.client_id}catch(i){return console.warn("cvzWidget: client_id issuance failed",i),null}}async function la(e,t,n){if(!t)return null;let r=Ve(kt,t),i=Ve(ia,t);if(!ac(t)){let a=Number(zt(i)??"0");if(Date.now()-a<36e5)return _t(r),null}return St(i,String(Date.now())),_t(r),zr(e,t,n)}var hc="cvz_chat_history";function gc(e){let t=new TextEncoder().encode(e),n="";return t.forEach(r=>{n+=String.fromCharCode(r);}),btoa(n)}function yc(e){let t=atob(e),n=Uint8Array.from(t,r=>r.charCodeAt(0));return new TextDecoder().decode(n)}function Sr(e=hc){async function t(r,i){try{localStorage.setItem(e,gc(JSON.stringify({sessionId:r,messages:i})));}catch{}}async function n(){let r={sessionId:"",messages:[]};try{let i=localStorage.getItem(e);if(!i)return r;let a;try{a=JSON.parse(yc(i));}catch{a=JSON.parse(i);}return {sessionId:a.sessionId||"",messages:a.messages||[]}}catch{return r}}return {save:t,load:n}}var Ct={rate_limited:"You've reached the usage limit for this assistant. Please try again later.",mic_denied:"Microphone access was blocked. Allow the microphone for this site to talk.",no_mic:"No microphone was found.",unavailable:"Voice is not available right now. Please try again in a moment.",connection_lost:"The voice connection was lost."},Et=class extends Error{constructor(n,r,i){super(i??r);this.kind=n;this.userMessage=r;this.name="VoiceStartError";}};async function vc(e){let t=(await e.text().catch(()=>"")).trim();if(!t||t.startsWith("<"))return "";try{let n=JSON.parse(t);if(typeof n=="string")return n.trim();if(n&&typeof n=="object"){let{message:r,error:i}=n;return (typeof r=="string"?r:typeof i=="string"?i:"").trim()}return ""}catch{return t}}async function ua(e,t){let n=await vc(e),r=`${t} rejected (${e.status})${n?`: ${n}`:""}`;return e.status===429?new Et("rate_limited",n.slice(0,500)||Ct.rate_limited,r):new Et("unavailable",Ct.unavailable,r)}function ca(e){return e instanceof Et?e:new Et("unavailable",Ct.unavailable,e instanceof Error?e.message:String(e))}var Er="cvz_end_user_auth_v1",pa="cvz_end_user_last_email",Ar="cvz_end_user_pending_checkout_v1";function Ir(e){try{return localStorage.getItem(e)}catch{return null}}function Cr(e,t){try{localStorage.setItem(e,t);}catch{}}function fa(e){try{localStorage.removeItem(e);}catch{}}function ma(){let e=Ir(Er);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.token=="string"&&typeof t.expiresAt=="number"&&typeof t.email=="string")return t}catch{}return null}function nt(e){return e?e.expiresAt-300>Date.now()/1e3:false}function da(e){Cr(Er,JSON.stringify(e)),Cr(pa,e.email);}function ha(){fa(Er);}function ga(){return Ir(pa)}function ya(e){Cr(Ar,JSON.stringify(e));}function va(){let e=Ir(Ar);if(!e)return null;try{let t=JSON.parse(e);if(typeof t.pendingId=="string"&&typeof t.planId=="number")return t}catch{}return null}function ba(){fa(Ar);}function xa(e){return e.type==="apiKey"?{"X-API-Key":e.token}:{Authorization:`Bearer ${e.token}`}}async function kn(e){try{let t=await e.json();if(t&&typeof t.message=="string")return t.message;if(t&&typeof t.error=="string")return t.error}catch{}return `${e.status} ${e.statusText}`}async function wa(e,t,n){let r=await fetch(`${e}/api/chat/end_user/start_login`,{method:"POST",headers:{"Content-Type":"application/json",...xa(t)},body:JSON.stringify({email:n})});if(!r.ok)throw new Error(await kn(r));return (await r.json()).pending_id}function _n(e,t){return new Promise(n=>{let r=new EventSource(`${e}/api/chat/end_user/wait/${encodeURIComponent(t)}`),i=false,a=o=>{i||(i=true,r.close(),n(o));};r.onmessage=o=>{try{a(JSON.parse(o.data));}catch{a({status:"error"});}},r.onerror=()=>{a({status:"timed_out"});};})}async function Tr(e,t){let n=await fetch(`${e}/api/chat/end_user/plans`,{headers:xa(t)});if(!n.ok)throw new Error(await kn(n));return (await n.json()).plans}async function Pr(e,t){let n=await fetch(`${e}/api/chat/end_user/me`,{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw new Error(await kn(n));return await n.json()}async function ka(e,t,n,r,i){let a=await fetch(`${e}/api/chat/end_user/checkout`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({plan_id:n,success_url:r,cancel_url:i})});if(!a.ok)throw new Error(await kn(a));let o=await a.json();return {checkoutUrl:o.checkout_url,pendingId:o.pending_id}}var At="https://chat.converzen.de",_a="Hi, how can I help you ?",bc=5;function za(e){return typeof e=="string"&&/^https?:\/\//i.test(e.trim())}function Lr(e){return typeof e=="string"&&e.trim()?e.trim():void 0}function Sa(e){if(!Array.isArray(e))return [];let t=[];for(let n of e){if(t.length>=bc)break;if(!n||typeof n!="object")continue;let r=n,i=Lr(r.title);!i||!za(r.url)||t.push({title:i,url:r.url.trim(),description:Lr(r.description),imageUrl:za(r.imageUrl)?r.imageUrl.trim():void 0,merchant:Lr(r.merchant),sponsored:r.sponsored!==false});}return t}function Ca(e,t={}){let n=t.voiceSessionFactory,r=new Set,i=null,a={getContainer:()=>i,onPending:E=>p({captchaPending:E})},o={messages:[],sessionId:null,isOpen:e.autoOpen??false,isLoading:false,isStreaming:false,streamingMessage:"",thinkingMessage:"",activeToolCall:null,captchaPending:false,endUserAuth:(()=>{let E=ma();return nt(E)?E:null})(),showAuthNudge:false,voiceStatus:"idle",voiceStage:"idle",voiceError:null,voiceTts:null,voiceTtsPref:null},l=null,s=false;function u(){r.forEach(E=>E());}function p(E){o={...o,...E},u();}let c={current:false},m=e.persistMessages!==false,f=Sr(e.historyKey),d=e.onSaveMessages??(m?f.save:async()=>{}),v=e.onLoadMessages??(m?f.load:async()=>({sessionId:"",messages:[]})),x=null,y=null,z=null,S="",L=null,P="",_=null;function q(){if(!z){let E=e.chatUrl||At;z=zr(E,e.publicId,a);}return z}async function Y(E=false){if(e.apiKey)return {token:e.apiKey,type:"apiKey"};if(!e.getToken)throw new Error("Either apiKey or getToken must be provided");let N=e.getToken;if(!E){let te=Date.now()/1e3+5,ne=y;if(ne&&(ne.expiresAt==null||ne.expiresAt>te))return {token:ne.token,type:"bearer"}}let B=async()=>{let te=await N(await q());return typeof te=="string"?{token:te,expiresAt:void 0}:te},O;try{O=await B();}catch(te){if(!aa(te))throw te;let ne=e.chatUrl||At;z=Promise.resolve(await la(ne,e.publicId,a)),O=await B();}return y=O,{token:O.token,type:"bearer"}}async function W(E=false){return !E&&nt(o.endUserAuth)?{token:o.endUserAuth.token,type:"bearer"}:Y(E)}function w(){let E=e.persona;return E?typeof E=="string"?{alias:E}:E:null}async function G(){if(!e.apiKey&&e.getToken)return (await Y()).token;if(!e.apiKey)throw new Error("Either apiKey or getToken must be provided");let E=e.chatUrl||At,N=await q(),B=await fetch(`${E}/api/chat/get_token`,{method:"POST",headers:{"Content-Type":"application/json","X-API-Key":e.apiKey},body:JSON.stringify({user_id:"voice-widget",media_type:"voice",client_id:N??void 0,persona:w()})});if(!B.ok)throw await ua(B,"voice token request");let O=await B.json();if(!O||typeof O.token!="string")throw new Error("voice token response missing token");return O.token}async function j(E,N){let B=s;if(s=false,!E){p({voiceStage:"idle"});return}c.current=true;let O=o.messages,te=[...O].reverse().find(yt=>yt.role==="USER"),ne={content:E,role:"ASSISTANT",createdAt:new Date().toISOString(),...B?{interrupted:true}:{}},Ae=[...O,ne],_e=N||o.sessionId||"";p({messages:Ae,sessionId:N||o.sessionId,voiceStage:"idle"}),setTimeout(()=>{c.current=false;},0),await d(_e,Ae),ce(te?.content??"",ne,_e);}function T(E){switch(E.type){case "status":p({voiceStage:E.stage});break;case "input":{let N=E.text?.trim();if(!N)break;let B=[...o.messages,{content:N,role:"USER",createdAt:new Date().toISOString()}];if(p({messages:B}),d(o.sessionId||"",B),e.onUserMessage)try{e.onUserMessage({question:N,sessionId:o.sessionId});}catch(O){console.error("cvzWidget: onUserMessage failed",O);}break}case "response":j(E.text,E.session_id);break;case "interrupted":s=true;break;case "tts_state":p({voiceTts:E.enabled});break;case "duck":case "unduck":break;case "error":{s=false,H(E.message||"Voice error",{voiceStage:"idle"});break}}}function H(E,N={}){let B=[...o.messages,{content:E,role:"SYSTEM",createdAt:new Date().toISOString()}];p({...N,messages:B}),d(o.sessionId||"",B);}async function V(E){if(n&&!(l||o.voiceStatus==="connecting"||o.voiceStatus==="connected")){p({voiceStatus:"connecting",voiceStage:"idle",voiceError:null,voiceTts:null}),s=false;try{let N=await G(),B=e.chatUrl||At;l=await n({baseUrl:B,token:N,sessionId:o.sessionId,audioElement:E,tts:o.voiceTtsPref,callbacks:{onStatusChange:O=>p(O==="connected"?{voiceStatus:O}:{voiceStatus:O,voiceStage:"idle"}),onEvent:T,onError:O=>{console.warn("cvzVoiceWidget: voice connection failed:",O),l?.stop(),l=null,H(Ct.connection_lost,{voiceError:Ct.connection_lost});}}});}catch(N){l=null;let B=ca(N);console.warn("cvzVoiceWidget: voice could not start:",B.message);let O={voiceStatus:"failed",voiceStage:"idle",voiceError:B.userMessage};if(B.kind==="rate_limited"&&e.endUserLicensing){p({...O,showAuthNudge:true});return}H(B.userMessage,O);}}}function Z(){l&&(l.stop(),l=null),p({voiceStatus:"stopped",voiceStage:"idle",voiceTts:null});}function R(E){l?.send({type:"set_tts",enabled:E})?p({voiceTtsPref:E,voiceTts:E}):p({voiceTtsPref:E});}function ee(E){if(o.voiceStatus!=="connected"||!l||!l.send({type:"text_input",text:E}))return  false;if(e.onUserMessage)try{e.onUserMessage({question:E,sessionId:o.sessionId});}catch(B){console.error("cvzWidget: onUserMessage failed",B);}let N=[...o.messages,{content:E,role:"USER",createdAt:new Date().toISOString()}];return p({messages:N,voiceStage:"thinking"}),d(o.sessionId||"",N),true}async function fe(E,N,B,O=0){try{let ne=await W(O>0),Ae=e.chatUrl||At,_e=o.sessionId||"",yt=na({baseUrl:Ae,sessionId:_e,message:E.content,persona:e.persona,authToken:ne.token,authType:ne.type,clientId:await q()??void 0,extraContext:e.extraContext,abortSignal:B.signal}),vt="",Bt=!1,Qe=!1,Ze=0,lr=350,pn=async()=>{if(!Ze)return;let k=lr-(Date.now()-Ze);k>0&&await new Promise(A=>setTimeout(A,k));};for await(let k of yt){if(B.signal.aborted)break;switch(k.type){case "session_created":case "session_continued":k.session_id&&k.session_id!==_e&&(_e=k.session_id,p({sessionId:k.session_id}));break;case "thinking":k.content&&(Qe||(Ze=Date.now()),Qe=!0,P+=k.content,_||(_=requestAnimationFrame(()=>{let A=P;P="",_=null,p({thinkingMessage:o.thinkingMessage+A});})));break;case "tool_call_started":k.name&&(await pn(),Qe=!0,Ze=Date.now(),p({activeToolCall:k.name}));break;case "token":k.content&&(Qe&&(await pn(),Qe=!1,Ze=0,P="",p({thinkingMessage:"",activeToolCall:null})),S+=k.content,vt+=k.content,L||(L=requestAnimationFrame(()=>{let A=S;S="",L=null,p({streamingMessage:o.streamingMessage+A});})));break;case "done":{if(vt&&_e){c.current=!0;let A={content:vt,role:"ASSISTANT",createdAt:new Date().toISOString(),sources:k.sources},D=[...N,A];p({messages:D,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),P="",setTimeout(()=>{c.current=!1;},0),await d(_e,D),ce(E.content,A,_e);}else p({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),P="";x=null;return}case "error":{let A=k.code||"",D=k.message||"",K=O===0&&nt(o.endUserAuth);if((A==="auth_failed"||D.includes("401")||D.includes("403")||D.includes("Unauthorized")||D.includes("Forbidden"))&&O<1&&(e.getToken&&!e.apiKey||K)){y=null,K&&ae(),Bt=!0;break}if(A==="rate_limited"&&e.endUserLicensing){p({showAuthNudge:!0,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),P="",x=null;return}let J={content:D||"An error occurred",role:"SYSTEM",createdAt:new Date().toISOString()},xe=[...N,J];p({messages:xe,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),P="",await d(_e||"",xe),x=null;return}}}if(Bt&&O<1)return fe(E,N,B,O+1);!B.signal.aborted&&!Bt&&(p({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:!1,isLoading:!1}),P="",x=null);}catch(ne){let Ae=O===0&&nt(o.endUserAuth);if(ne instanceof Error&&(ne.message.includes("401")||ne.message.includes("403"))&&O<1&&(e.getToken&&!e.apiKey||Ae))return y=null,Ae&&ae(),fe(E,N,B,O+1);throw ne}}function h(E,N){if(N.length===0)return;let B=o.messages.indexOf(E);if(B===-1)return;let O=o.messages.slice();O[B]={...E,cards:N},p({messages:O}),d(o.sessionId||"",O).catch(te=>console.error("cvzWidget: failed to save cards",te));}function ce(E,N,B){let O=e.onAssistantMessage;O&&Promise.resolve().then(()=>O({question:E,answer:N.content,sessionId:B})).then(te=>h(N,Sa(te))).catch(te=>console.error("cvzWidget: onAssistantMessage failed",te));}function ve(E){let N=[...o.messages].reverse().find(B=>B.role==="ASSISTANT");N&&h(N,Sa(E));}async function g(E){if(!E.trim()||o.isStreaming||ee(E.trim()))return;x&&x.abort();let N={content:E.trim(),role:"USER",createdAt:new Date().toISOString()};if(e.onUserMessage)try{e.onUserMessage({question:N.content,sessionId:o.sessionId});}catch(O){console.error("cvzWidget: onUserMessage failed",O);}let B=[...o.messages,N];p({messages:B,isLoading:true,isStreaming:true,streamingMessage:"",thinkingMessage:"",activeToolCall:null}),P="";try{let O=new AbortController;x=O,await fe(N,B,O);}catch(O){if(O instanceof Error&&O.name==="AbortError"){p({streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),P="",x=null;return}let te={content:`Error: ${O instanceof Error?O.message:"Failed to send message"}`,role:"SYSTEM",createdAt:new Date().toISOString()},ne=[...B,te];p({messages:ne,streamingMessage:"",thinkingMessage:"",activeToolCall:null,isStreaming:false,isLoading:false}),P="",await d(o.sessionId||"",ne),x=null;}}async function de(){x&&(x.abort(),x=null),p({messages:[{content:e.initialGreeting||_a,role:"SYSTEM",createdAt:new Date().toISOString()}],streamingMessage:"",thinkingMessage:"",activeToolCall:null,sessionId:null,isStreaming:false,isLoading:false}),P="",await d("",[]);}function De(){p({isOpen:true}),q();}function Ut(){p({isOpen:false});}function gt(E){da(E),p({endUserAuth:E,showAuthNudge:false});}function ae(){ha(),p({endUserAuth:null});}function Je(E){i=E;}if((async()=>{try{let E=await v(),N=[],B=null;E&&typeof E=="object"&&"messages"in E&&"sessionId"in E?(N=E.messages||[],B=E.sessionId||null):Array.isArray(E)&&(N=E),N.length===0&&(N=[{content:e.initialGreeting||_a,role:"SYSTEM",createdAt:new Date().toISOString()}]),p({sessionId:B,messages:N});}catch(E){console.error("Failed to load messages:",E);}})(),e.endUserLicensing){let E=va();if(E){let N=e.chatUrl||At;_n(N,E.pendingId).finally(()=>{ba();});}}function Ee(){l&&(l.stop(),l=null),x&&(x.abort(),x=null),L&&(cancelAnimationFrame(L),L=null),_&&(cancelAnimationFrame(_),_=null);}return {getState:()=>o,subscribe(E){return r.add(E),()=>r.delete(E)},sendMessage:g,open:De,close:Ut,clearHistory:de,authenticateEndUser:gt,deauthenticateEndUser:ae,getTenantAuthToken:Y,setCaptchaContainer:Je,addCards:ve,startVoice:V,stopVoice:Z,setVoiceTts:R,isFinalizingRef:c,dispose:Ee}}var zn=null;function Ea(){return zn}function Aa(e){let t=xn(()=>Ca(e),[e]),n=Jo(t.subscribe,t.getState);return Te(()=>(zn=t,()=>{zn===t&&(zn=null),t.dispose();}),[t]),{...n,sendMessage:t.sendMessage,open:t.open,close:t.close,clearHistory:t.clearHistory,authenticateEndUser:t.authenticateEndUser,deauthenticateEndUser:t.deauthenticateEndUser,getTenantAuthToken:t.getTenantAuthToken,setCaptchaContainer:t.setCaptchaContainer,addCards:t.addCards,startVoice:t.startVoice,stopVoice:t.stopVoice,setVoiceTts:t.setVoiceTts,isFinalizingRef:t.isFinalizingRef,dispose:t.dispose}}var xc=0;function b(e,t,n,r,i,a){t||(t={});var o,l,s=t;if("ref"in s)for(l in s={},t)l=="ref"?o=t[l]:s[l]=t[l];var u={type:e,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--xc,__i:-1,__u:0,__source:i,__self:a};if(typeof e=="function"&&(o=e.defaultProps))for(l in o)s[l]===void 0&&(s[l]=o[l]);return U.vnode&&U.vnode(u),u}var wc=60*1e3;function kc(e,t){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:t.toUpperCase()}).format(e/100)}catch{return `${(e/100).toFixed(2)} ${t.toUpperCase()}`}}function _c(e){return new Date(e*1e3).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}var Ia=({open:e,onClose:t,darkMode:n,baseUrl:r,getBaseAuth:i,endUserAuth:a,onAuthenticated:o,initialEmail:l})=>{let[s,u]=he("email"),[p,c]=he(""),[m,f]=he(null),[d,v]=he(0),[x,y]=he(null),[z,S]=he([]),[L,P]=he(null),[_,q]=he(Date.now());if(Te(()=>{e&&(f(null),a?(c(a.email),u("status"),Pr(r,a.token).then(y).catch(R=>f(R instanceof Error?R.message:String(R)))):(c(l??""),u("email")));},[e]),Te(()=>{if(d<=Date.now())return;let R=setInterval(()=>q(Date.now()),1e3);return ()=>clearInterval(R)},[d]),!e)return null;let Y=Math.max(0,Math.ceil((d-_)/1e3)),W=async()=>{let R=p.trim();if(!R||!R.includes("@")){f("Enter a valid email address.");return}f(null),u("waiting");try{let ee=await i(),fe=await wa(r,ee,R);v(Date.now()+wc);let h=await _n(r,fe);if(h.status==="verified"){let ce={token:h.chat_token,expiresAt:h.expires_at,email:R};o(ce);try{let ve=await Pr(r,ce.token);if(y(ve),ve.total_vtokens_remaining>0||ve.subscription_status==="active")u("status");else {let de=await Tr(r,{token:ce.token,type:"bearer"});S(de),u("plans");}}catch{u("status");}}else h.status==="timed_out"?(f("That link expired before it was clicked. You can send a new one below."),u("email")):(f("Something went wrong confirming your login. Please try again."),u("email"));}catch(ee){f(ee instanceof Error?ee.message:String(ee)),u("email");}},w=async()=>{if(a){f(null);try{let R=await Tr(r,{token:a.token,type:"bearer"});S(R),u("plans");}catch(R){f(R instanceof Error?R.message:String(R));}}},G=async R=>{if(a){f(null),P(R.id);try{let ee=window.location.href,{checkoutUrl:fe,pendingId:h}=await ka(r,a.token,R.id,ee,ee);ya({pendingId:h,planId:R.id}),window.location.href=fe;}catch(ee){f(ee instanceof Error?ee.message:String(ee)),P(null);}}},j=n?"cvz-text-gray-100":"cvz-text-gray-800",T=n?"cvz-text-gray-400":"cvz-text-gray-500",H=n?"cvz-bg-gray-800":"cvz-bg-white",V=n?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100":"cvz-bg-white cvz-border-gray-300 cvz-text-gray-800",Z="cvz-bg-blue-600 hover:cvz-bg-blue-700 cvz-text-white disabled:cvz-opacity-50 disabled:cvz-cursor-not-allowed";return b("div",{className:"cvz-absolute cvz-inset-0 cvz-z-20 cvz-flex cvz-flex-col",children:b("div",{className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-5 cvz-flex cvz-flex-col cvz-gap-4 ${H}`,children:[b("div",{className:"cvz-flex cvz-justify-between cvz-items-start",children:[b("h3",{className:`cvz-font-bold cvz-text-lg ${j}`,children:"Account"}),b("button",{onClick:t,className:`cvz-p-1 cvz-rounded-md ${n?"cvz-text-gray-400 hover:cvz-text-white":"cvz-text-gray-400 hover:cvz-text-gray-700"}`,title:"Close",children:"\u2715"})]}),m&&b("p",{className:"cvz-text-sm cvz-text-red-500",children:m}),s==="email"&&b("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[b("p",{className:`cvz-text-sm ${T}`,children:"Enter your email and we'll send you a login link - use it to access a plan you've already bought, or to start a new one."}),b("input",{type:"email",value:p,onInput:R=>c(R.target.value),placeholder:"you@example.com",className:`cvz-border cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm ${V}`,onKeyDown:R=>{R.key==="Enter"&&W();}}),b("button",{onClick:W,disabled:Y>0,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${Z}`,children:Y>0?`Wait ${Y}s to resend`:"Send login link"})]}),s==="waiting"&&b("div",{className:"cvz-flex cvz-flex-col cvz-gap-2 cvz-items-center cvz-py-6 cvz-text-center",children:[b("p",{className:`cvz-text-sm ${j}`,children:"Check your email"}),b("p",{className:`cvz-text-xs ${T}`,children:["We sent a login link to ",p,". Click it to continue - this can stay open while you do."]})]}),s==="status"&&b("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[b("p",{className:`cvz-text-sm ${j}`,children:["Signed in as ",a?.email]}),x?b("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-text-sm cvz-flex cvz-flex-col cvz-gap-1 ${n?"cvz-border-gray-600":"cvz-border-gray-200"} ${j}`,children:[b("span",{children:[Math.floor(x.total_vtokens_remaining).toLocaleString()," tokens left"]}),x.plan_name&&b("span",{className:T,children:["Plan: ",x.plan_name]}),x.current_period_end&&b("span",{className:T,children:["Renews ",_c(x.current_period_end)]})]}):b("p",{className:`cvz-text-sm ${T}`,children:"Loading your balance..."}),b("button",{onClick:w,className:`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${Z}`,children:"Buy more"}),b("button",{onClick:()=>{u("email"),f(null);},className:`cvz-text-xs cvz-underline cvz-self-start ${T}`,children:"Use a different email"})]}),s==="plans"&&b("div",{className:"cvz-flex cvz-flex-col cvz-gap-3",children:[z.length===0&&b("p",{className:`cvz-text-sm ${T}`,children:"No plans are available right now."}),z.map(R=>b("div",{className:`cvz-rounded-lg cvz-border cvz-p-3 cvz-flex cvz-justify-between cvz-items-center ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:[b("div",{children:[b("p",{className:`cvz-text-sm cvz-font-medium ${j}`,children:R.name}),b("p",{className:`cvz-text-xs ${T}`,children:[kc(R.price_cents,R.currency),R.kind==="subscription"?" / period":""," \xB7 ",R.included_vtokens.toLocaleString()," tokens"]})]}),b("button",{onClick:()=>G(R),disabled:L===R.id,className:`cvz-rounded-lg cvz-px-3 cvz-py-1.5 cvz-text-sm cvz-font-medium ${Z}`,children:L===R.id?"Redirecting...":"Buy"})]},R.id)),a&&b("button",{onClick:()=>u("status"),className:`cvz-text-xs cvz-underline cvz-self-start ${T}`,children:"Back"})]})]})})};var zc="calc(100vw - 2rem)",Sc="calc(100dvh - 8rem)",Ta=e=>{if(!e?.position)return {bottom:"1rem",right:"1rem"};if(typeof e.position=="string")switch(e.position){case "bottom-right":return {bottom:"1rem",right:"1rem"};case "bottom-left":return {bottom:"1rem",left:"1rem"};case "top-right":return {top:"1rem",right:"1rem"};case "top-left":return {top:"1rem",left:"1rem"};default:return {bottom:"1rem",right:"1rem"}}else {let t={};return e.position.bottom&&(t.bottom=e.position.bottom),e.position.top&&(t.top=e.position.top),e.position.left&&(t.left=e.position.left),e.position.right&&(t.right=e.position.right),t}},Pa=e=>{let t={maxWidth:zc,maxHeight:Sc};if(!e?.dialogSize)return {width:"350px",height:"500px",...t};if(typeof e.dialogSize=="string")switch(e.dialogSize){case "small":return {width:"300px",height:"400px",...t};case "medium":return {width:"350px",height:"500px",...t};case "large":return {width:"400px",height:"600px",...t};default:return {width:"350px",height:"500px",...t}}else return {width:`${Math.max(250,e.dialogSize.width)}px`,height:`${Math.max(300,e.dialogSize.height)}px`,...t}},La=e=>e?.frameColor||"#E5E7EB",Ra=(e,t)=>{let n=e?.buttonColor;return t?{backgroundColor:n?.open||"#1F2937"}:{backgroundColor:n?.normal||"#2563EB","--hover-color":n?.hover||"#1D4ED8"}};function Ma(e,t){let n={};return (e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===false?"":" ")).trim()}var Cc=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ec=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ac={};function Sn(e,t){return ((Ac).jsx?Ec:Cc).test(e)}var Ic=/[ \t\n\f\r]/g;function Rr(e){return typeof e=="object"?e.type==="text"?Na(e.value):false:Na(e)}function Na(e){return e.replace(Ic,"")===""}var Be=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r);}};Be.prototype.normal={};Be.prototype.property={};Be.prototype.space=void 0;function Mr(e,t){let n={},r={};for(let i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Be(n,r,t)}function Xt(e){return e.toLowerCase()}var me=class{constructor(t,n){this.attribute=n,this.property=t;}};me.prototype.attribute="";me.prototype.booleanish=false;me.prototype.boolean=false;me.prototype.commaOrSpaceSeparated=false;me.prototype.commaSeparated=false;me.prototype.defined=false;me.prototype.mustUseProperty=false;me.prototype.number=false;me.prototype.overloadedBoolean=false;me.prototype.property="";me.prototype.spaceSeparated=false;me.prototype.space=void 0;var Gt={};fo(Gt,{boolean:()=>$,booleanish:()=>ie,commaOrSpaceSeparated:()=>we,commaSeparated:()=>$e,number:()=>C,overloadedBoolean:()=>Cn,spaceSeparated:()=>Q});var Tc=0,$=rt(),ie=rt(),Cn=rt(),C=rt(),Q=rt(),$e=rt(),we=rt();function rt(){return 2**++Tc}var Nr=Object.keys(Gt),it=class extends me{constructor(t,n,r,i){let a=-1;if(super(t,n),Da(this,"space",i),typeof r=="number")for(;++a<Nr.length;){let o=Nr[a];Da(this,Nr[a],(r&Gt[o])===Gt[o]);}}};it.prototype.defined=true;function Da(e,t,n){n&&(e[t]=n);}function Se(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new it(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=true),t[r]=a,n[Xt(r)]=r,n[Xt(a.attribute)]=r;}return new Be(t,n,e.space)}var Dr=Se({properties:{ariaActiveDescendant:null,ariaAtomic:ie,ariaAutoComplete:null,ariaBusy:ie,ariaChecked:ie,ariaColCount:C,ariaColIndex:C,ariaColSpan:C,ariaControls:Q,ariaCurrent:null,ariaDescribedBy:Q,ariaDetails:null,ariaDisabled:ie,ariaDropEffect:Q,ariaErrorMessage:null,ariaExpanded:ie,ariaFlowTo:Q,ariaGrabbed:ie,ariaHasPopup:null,ariaHidden:ie,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Q,ariaLevel:C,ariaLive:null,ariaModal:ie,ariaMultiLine:ie,ariaMultiSelectable:ie,ariaOrientation:null,ariaOwns:Q,ariaPlaceholder:null,ariaPosInSet:C,ariaPressed:ie,ariaReadOnly:ie,ariaRelevant:null,ariaRequired:ie,ariaRoleDescription:Q,ariaRowCount:C,ariaRowIndex:C,ariaRowSpan:C,ariaSelected:ie,ariaSetSize:C,ariaSort:null,ariaValueMax:C,ariaValueMin:C,ariaValueNow:C,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function En(e,t){return t in e?e[t]:t}function An(e,t){return En(e,t.toLowerCase())}var Fa=Se({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:$e,acceptCharset:Q,accessKey:Q,action:null,allow:null,allowFullScreen:$,allowPaymentRequest:$,allowUserMedia:$,alt:null,as:null,async:$,autoCapitalize:null,autoComplete:Q,autoFocus:$,autoPlay:$,blocking:Q,capture:null,charSet:null,checked:$,cite:null,className:Q,cols:C,colSpan:null,content:null,contentEditable:ie,controls:$,controlsList:Q,coords:C|$e,crossOrigin:null,data:null,dateTime:null,decoding:null,default:$,defer:$,dir:null,dirName:null,disabled:$,download:Cn,draggable:ie,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:$,formTarget:null,headers:Q,height:C,hidden:Cn,high:C,href:null,hrefLang:null,htmlFor:Q,httpEquiv:Q,id:null,imageSizes:null,imageSrcSet:null,inert:$,inputMode:null,integrity:null,is:null,isMap:$,itemId:null,itemProp:Q,itemRef:Q,itemScope:$,itemType:Q,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:$,low:C,manifest:null,max:null,maxLength:C,media:null,method:null,min:null,minLength:C,multiple:$,muted:$,name:null,nonce:null,noModule:$,noValidate:$,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:$,optimum:C,pattern:null,ping:Q,placeholder:null,playsInline:$,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:$,referrerPolicy:null,rel:Q,required:$,reversed:$,rows:C,rowSpan:C,sandbox:Q,scope:null,scoped:$,seamless:$,selected:$,shadowRootClonable:$,shadowRootDelegatesFocus:$,shadowRootMode:null,shape:null,size:C,sizes:null,slot:null,span:C,spellCheck:ie,src:null,srcDoc:null,srcLang:null,srcSet:null,start:C,step:null,style:null,tabIndex:C,target:null,title:null,translate:null,type:null,typeMustMatch:$,useMap:null,value:ie,width:C,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Q,axis:null,background:null,bgColor:null,border:C,borderColor:null,bottomMargin:C,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:$,declare:$,event:null,face:null,frame:null,frameBorder:null,hSpace:C,leftMargin:C,link:null,longDesc:null,lowSrc:null,marginHeight:C,marginWidth:C,noResize:$,noHref:$,noShade:$,noWrap:$,object:null,profile:null,prompt:null,rev:null,rightMargin:C,rules:null,scheme:null,scrolling:ie,standby:null,summary:null,text:null,topMargin:C,valueType:null,version:null,vAlign:null,vLink:null,vSpace:C,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:$,disableRemotePlayback:$,prefix:null,property:null,results:C,security:null,unselectable:null},space:"html",transform:An});var Oa=Se({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:we,accentHeight:C,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:C,amplitude:C,arabicForm:null,ascent:C,attributeName:null,attributeType:null,azimuth:C,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:C,by:null,calcMode:null,capHeight:C,className:Q,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:C,diffuseConstant:C,direction:null,display:null,dur:null,divisor:C,dominantBaseline:null,download:$,dx:null,dy:null,edgeMode:null,editable:null,elevation:C,enableBackground:null,end:null,event:null,exponent:C,externalResourcesRequired:null,fill:null,fillOpacity:C,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:$e,g2:$e,glyphName:$e,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:C,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:C,horizOriginX:C,horizOriginY:C,id:null,ideographic:C,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:C,k:C,k1:C,k2:C,k3:C,k4:C,kernelMatrix:we,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:C,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:C,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:C,overlineThickness:C,paintOrder:null,panose1:null,path:null,pathLength:C,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Q,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:C,pointsAtY:C,pointsAtZ:C,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:we,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:we,rev:we,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:we,requiredFeatures:we,requiredFonts:we,requiredFormats:we,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:C,specularExponent:C,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:C,strikethroughThickness:C,string:null,stroke:null,strokeDashArray:we,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:C,strokeOpacity:C,strokeWidth:null,style:null,surfaceScale:C,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:we,tabIndex:C,tableValues:null,target:null,targetX:C,targetY:C,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:we,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:C,underlineThickness:C,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:C,values:null,vAlphabetic:C,vMathematical:C,vectorEffect:null,vHanging:C,vIdeographic:C,version:null,vertAdvY:C,vertOriginX:C,vertOriginY:C,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:C,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:En});var Fr=Se({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return "xlink:"+t.slice(5).toLowerCase()}});var Or=Se({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:An});var Ur=Se({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return "xml:"+t.slice(3).toLowerCase()}});var Br={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var Pc=/[A-Z]/g,Ua=/-[a-z]/g,Lc=/^data[-\w.:]+$/i;function Hr(e,t){let n=Xt(t),r=t,i=me;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Lc.test(t)){if(t.charAt(4)==="-"){let a=t.slice(5).replace(Ua,Mc);r="data"+a.charAt(0).toUpperCase()+a.slice(1);}else {let a=t.slice(4);if(!Ua.test(a)){let o=a.replace(Pc,Rc);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o;}}i=it;}return new i(r,t)}function Rc(e){return "-"+e.toLowerCase()}function Mc(e){return e.charAt(1).toUpperCase()}var Ba=Mr([Dr,Fa,Fr,Or,Ur],"html"),In=Mr([Dr,Oa,Fr,Or,Ur],"svg");function Ha(e){return e.join(" ").trim()}var nl=mo(Qa());var Pn=Za("end"),It=Za("start");function Za(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return {line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function $r(e){let t=It(e),n=Pn(e);if(t&&n)return {start:t,end:n}}function We(e){return !e||typeof e!="object"?"":"position"in e||"type"in e?el(e.position):"start"in e||"end"in e?el(e):"line"in e||"column"in e?Wr(e):""}function Wr(e){return tl(e&&e.line)+":"+tl(e&&e.column)}function el(e){return Wr(e&&e.start)+"-"+Wr(e&&e.end)}function tl(e){return e&&typeof e=="number"?e:1}var se=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",a={},o=false;if(n&&("line"in n&&"column"in n?a={place:n}:"start"in n&&"end"in n?a={place:n}:"type"in n?a={ancestors:[n],place:n.position}:a={...n}),typeof t=="string"?i=t:!a.cause&&t&&(o=true,i=t.message,a.cause=t),!a.ruleId&&!a.source&&typeof r=="string"){let s=r.indexOf(":");s===-1?a.ruleId=r:(a.source=r.slice(0,s),a.ruleId=r.slice(s+1));}if(!a.place&&a.ancestors&&a.ancestors){let s=a.ancestors[a.ancestors.length-1];s&&(a.place=s.position);}let l=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=We(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0;}};se.prototype.file="";se.prototype.name="";se.prototype.reason="";se.prototype.message="";se.prototype.stack="";se.prototype.column=void 0;se.prototype.line=void 0;se.prototype.ancestors=void 0;se.prototype.cause=void 0;se.prototype.fatal=void 0;se.prototype.place=void 0;se.prototype.ruleId=void 0;se.prototype.source=void 0;var qr={}.hasOwnProperty,ap=new Map,lp=/[A-Z]/g,sp=new Set(["table","tbody","thead","tfoot","tr"]),up=new Set(["td","th"]),rl="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Yr(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=yp(n,t.jsxDEV);}else {if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=gp(n,t.jsx,t.jsxs);}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||false,passKeys:t.passKeys!==false,passNode:t.passNode||false,schema:t.space==="svg"?In:Ba,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==false},a=il(i,e,void 0);return a&&typeof a!="string"?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function il(e,t,n){if(t.type==="element")return cp(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return pp(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return mp(e,t,n);if(t.type==="mdxjsEsm")return fp(e,t);if(t.type==="root")return dp(e,t,n);if(t.type==="text")return hp(e,t)}function cp(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=In,e.schema=i),e.ancestors.push(t);let a=al(e,t.tagName,false),o=vp(e,t),l=Xr(e,t);return sp.has(t.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!Rr(s):true})),ol(e,o,a,t),Kr(o,l),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function pp(e,t){if(t.data&&t.data.estree&&e.evaluater){let r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Qt(e,t.position);}function fp(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Qt(e,t.position);}function mp(e,t,n){let r=e.schema,i=r;t.name==="svg"&&r.space==="html"&&(i=In,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:al(e,t.name,true),o=bp(e,t),l=Xr(e,t);return ol(e,o,a,t),Kr(o,l),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function dp(e,t,n){let r={};return Kr(r,Xr(e,t)),e.create(t,e.Fragment,r,n)}function hp(e,t){return t.value}function ol(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r);}function Kr(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n);}}function gp(e,t,n){return r;function r(i,a,o,l){let u=Array.isArray(o.children)?n:t;return l?u(a,o,l):u(a,o)}}function yp(e,t){return n;function n(r,i,a,o){let l=Array.isArray(a.children),s=It(r);return t(i,a,o,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function vp(e,t){let n={},r,i;for(i in t.properties)if(i!=="children"&&qr.call(t.properties,i)){let a=xp(e,i,t.properties[i]);if(a){let[o,l]=a;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&up.has(t.tagName)?r=l:n[o]=l;}}if(r){let a=n.style||(n.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r;}return n}function bp(e,t){let n={};for(let r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){let a=r.data.estree.body[0];a.type;let o=a.expression;o.type;let l=o.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument));}else Qt(e,t.position);else {let i=r.name,a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){let l=r.value.data.estree.body[0];l.type,a=e.evaluater.evaluateExpression(l.expression);}else Qt(e,t.position);else a=r.value===null?true:r.value;n[i]=a;}return n}function Xr(e,t){let n=[],r=-1,i=e.passKeys?new Map:ap;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let s=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(s){let u=i.get(s)||0;o=s+"-"+u,i.set(s,u+1);}}let l=il(e,a,o);l!==void 0&&n.push(l);}return n}function xp(e,t,n){let r=Hr(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Ma(n):Ha(n)),r.property==="style"){let i=typeof n=="object"?n:wp(e,String(n));return e.stylePropertyNameCase==="css"&&(i=kp(i)),["style",i]}return [e.elementAttributeNameCase==="react"&&r.space?Br[r.property]||r.property:r.attribute,n]}}function wp(e,t){try{return (0,nl.default)(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return {};let r=n,i=new se("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=rl+"#cannot-parse-style-attribute",i}}function al(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){let i=t.split("."),a=-1,o;for(;++a<i.length;){let l=Sn(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(a&&l.type==="Literal"),optional:false}:l;}r=o;}else r=Sn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){let i=r.value;return qr.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Qt(e);}function Qt(e,t){let n=new se("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=rl+"#cannot-handle-mdx-estrees-without-createevaluater",n}function kp(e){let t={},n;for(n in e)qr.call(e,n)&&(t[_p(n)]=e[n]);return t}function _p(e){let t=e.replace(lp,zp);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function zp(e){return "-"+e.toLowerCase()}var Zt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};var Sp={};function at(e,t){let n=Sp,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:true,i=typeof n.includeHtml=="boolean"?n.includeHtml:true;return sl(e,r,i)}function sl(e,t,n){if(Cp(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ll(e.children,t,n)}return Array.isArray(e)?ll(e,t,n):""}function ll(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=sl(e[i],t,n);return r.join("")}function Cp(e){return !!(e&&typeof e=="object")}var ul=document.createElement("i");function Tt(e){let t="&"+e+";";ul.innerHTML=t;let n=ul.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?false:n}function ue(e,t,n,r){let i=e.length,a=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4;}function be(e,t){return e.length>0?(ue(e,e.length,0,t),e):t}var cl={}.hasOwnProperty;function Ln(e){let t={},n=-1;for(;++n<e.length;)Ep(t,e[n]);return t}function Ep(e,t){let n;for(n in t){let i=(cl.call(e,n)?e[n]:void 0)||(e[n]={}),a=t[n],o;if(a)for(o in a){cl.call(i,o)||(i[o]=[]);let l=a[o];Ap(i[o],Array.isArray(l)?l:l?[l]:[]);}}}function Ap(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);ue(e,0,0,r);}function Rn(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function ge(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var pe=qe(/[A-Za-z]/),oe=qe(/[\dA-Za-z]/),pl=qe(/[#-'*+\--9=?A-Z^-~]/);function lt(e){return e!==null&&(e<32||e===127)}var en=qe(/\d/),fl=qe(/[\dA-Fa-f]/),ml=qe(/[!-/:-@[-`{-~]/);function I(e){return e!==null&&e<-2}function X(e){return e!==null&&(e<0||e===32)}function F(e){return e===-2||e===-1||e===32}var st=qe(/\p{P}|\p{S}/u),Re=qe(/\s/);function qe(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Ce(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o="";if(a===37&&oe(e.charCodeAt(n+1))&&oe(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let l=e.charCodeAt(n+1);a<56320&&l>56319&&l<57344?(o=String.fromCharCode(a,l),i=1):o="\uFFFD";}else o=String.fromCharCode(a);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0);}return t.join("")+e.slice(r)}function M(e,t,n,r){let i=r?r-1:Number.POSITIVE_INFINITY,a=0;return o;function o(s){return F(s)?(e.enter(n),l(s)):t(s)}function l(s){return F(s)&&a++<i?(e.consume(s),l):(e.exit(n),t(s))}}var dl={tokenize:Ip};function Ip(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),M(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),a(l)}function a(l){let s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return I(l)?(e.consume(l),e.exit("chunkText"),a):(e.consume(l),o)}}var gl={tokenize:Tp},hl={tokenize:Pp};function Tp(e){let t=this,n=[],r=0,i,a,o;return l;function l(S){if(r<n.length){let L=n[r];return t.containerState=L[1],e.attempt(L[0].continuation,s,u)(S)}return u(S)}function s(S){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&z();let L=t.events.length,P=L,_;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){_=t.events[P][1].end;break}y(r);let q=L;for(;q<t.events.length;)t.events[q][1].end={..._},q++;return ue(t.events,P+1,0,t.events.slice(L)),t.events.length=q,u(S)}return l(S)}function u(S){if(r===n.length){if(!i)return m(S);if(i.currentConstruct&&i.currentConstruct.concrete)return d(S);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack);}return t.containerState={},e.check(hl,p,c)(S)}function p(S){return i&&z(),y(r),m(S)}function c(S){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,d(S)}function m(S){return t.containerState={},e.attempt(hl,f,d)(S)}function f(S){return r++,n.push([t.currentConstruct,t.containerState]),m(S)}function d(S){if(S===null){i&&z(),y(0),e.consume(S);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),v(S)}function v(S){if(S===null){x(e.exit("chunkFlow"),true),y(0),e.consume(S);return}return I(S)?(e.consume(S),x(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(S),v)}function x(S,L){let P=t.sliceStream(S);if(L&&P.push(null),S.previous=a,a&&(a.next=S),a=S,i.defineSkip(S.start),i.write(P),t.parser.lazy[S.start.line]){let _=i.events.length;for(;_--;)if(i.events[_][1].start.offset<o&&(!i.events[_][1].end||i.events[_][1].end.offset>o))return;let q=t.events.length,Y=q,W,w;for(;Y--;)if(t.events[Y][0]==="exit"&&t.events[Y][1].type==="chunkFlow"){if(W){w=t.events[Y][1].end;break}W=true;}for(y(r),_=q;_<t.events.length;)t.events[_][1].end={...w},_++;ue(t.events,Y+1,0,t.events.slice(q)),t.events.length=_;}}function y(S){let L=n.length;for(;L-- >S;){let P=n[L];t.containerState=P[1],P[0].exit.call(t,e);}n.length=S;}function z(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0;}}function Pp(e,t,n){return M(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function He(e){if(e===null||X(e)||Re(e))return 1;if(st(e))return 2}function Ye(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a));}return t}var tn={name:"attention",resolveAll:Lp,tokenize:Rp};function Lp(e,t){let n=-1,r,i,a,o,l,s,u,p;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let c={...e[r][1].end},m={...e[n][1].start};yl(c,-s),yl(m,s),o={type:s>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:m},a={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[r][1].end={...o.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=be(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=be(u,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",a,t]]),u=be(u,Ye(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=be(u,[["exit",a,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(p=2,u=be(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):p=0,ue(e,r-1,n-r+3,u),n=r+u.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Rp(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=He(r),a;return o;function o(s){return a=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===a)return e.consume(s),l;let u=e.exit("attentionSequence"),p=He(s),c=!p||p===2&&i||n.includes(s),m=!i||i===2&&p||n.includes(r);return u._open=!!(a===42?c:c&&(i||!m)),u._close=!!(a===42?m:m&&(p||!c)),t(s)}}function yl(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t;}var Gr={name:"autolink",tokenize:Mp};function Mp(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(f){return pe(f)?(e.consume(f),o):f===64?n(f):u(f)}function o(f){return f===43||f===45||f===46||oe(f)?(r=1,l(f)):u(f)}function l(f){return f===58?(e.consume(f),r=0,s):(f===43||f===45||f===46||oe(f))&&r++<32?(e.consume(f),l):(r=0,u(f))}function s(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||lt(f)?n(f):(e.consume(f),s)}function u(f){return f===64?(e.consume(f),p):pl(f)?(e.consume(f),u):n(f)}function p(f){return oe(f)?c(f):n(f)}function c(f){return f===46?(e.consume(f),r=0,p):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):m(f)}function m(f){if((f===45||oe(f))&&r++<63){let d=f===45?m:c;return e.consume(f),d}return n(f)}}var Me={partial:true,tokenize:Np};function Np(e,t,n){return r;function r(a){return F(a)?M(e,i,"linePrefix")(a):i(a)}function i(a){return a===null||I(a)?t(a):n(a)}}var Mn={continuation:{tokenize:Fp},exit:Op,name:"blockQuote",tokenize:Dp};function Dp(e,t,n){let r=this;return i;function i(o){if(o===62){let l=r.containerState;return l.open||(e.enter("blockQuote",{_container:true}),l.open=true),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return n(o)}function a(o){return F(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function Fp(e,t,n){let r=this;return i;function i(o){return F(o)?M(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(Mn,t,n)(o)}}function Op(e){e.exit("blockQuote");}var Nn={name:"characterEscape",tokenize:Up};function Up(e,t,n){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),i}function i(a){return ml(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(a)}}var Dn={name:"characterReference",tokenize:Bp};function Bp(e,t,n){let r=this,i=0,a,o;return l;function l(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),s}function s(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),a=31,o=oe,p(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=fl,p):(e.enter("characterReferenceValue"),a=7,o=en,p(c))}function p(c){if(c===59&&i){let m=e.exit("characterReferenceValue");return o===oe&&!Tt(r.sliceSerialize(m))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(c)&&i++<a?(e.consume(c),p):n(c)}}var vl={partial:true,tokenize:jp},Fn={concrete:true,name:"codeFenced",tokenize:Hp};function Hp(e,t,n){let r=this,i={partial:true,tokenize:P},a=0,o=0,l;return s;function s(_){return u(_)}function u(_){let q=r.events[r.events.length-1];return a=q&&q[1].type==="linePrefix"?q[2].sliceSerialize(q[1],true).length:0,l=_,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(_)}function p(_){return _===l?(o++,e.consume(_),p):o<3?n(_):(e.exit("codeFencedFenceSequence"),F(_)?M(e,c,"whitespace")(_):c(_))}function c(_){return _===null||I(_)?(e.exit("codeFencedFence"),r.interrupt?t(_):e.check(vl,v,L)(_)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(_))}function m(_){return _===null||I(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(_)):F(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),M(e,f,"whitespace")(_)):_===96&&_===l?n(_):(e.consume(_),m)}function f(_){return _===null||I(_)?c(_):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),d(_))}function d(_){return _===null||I(_)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(_)):_===96&&_===l?n(_):(e.consume(_),d)}function v(_){return e.attempt(i,L,x)(_)}function x(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),y}function y(_){return a>0&&F(_)?M(e,z,"linePrefix",a+1)(_):z(_)}function z(_){return _===null||I(_)?e.check(vl,v,L)(_):(e.enter("codeFlowValue"),S(_))}function S(_){return _===null||I(_)?(e.exit("codeFlowValue"),z(_)):(e.consume(_),S)}function L(_){return e.exit("codeFenced"),t(_)}function P(_,q,Y){let W=0;return w;function w(V){return _.enter("lineEnding"),_.consume(V),_.exit("lineEnding"),G}function G(V){return _.enter("codeFencedFence"),F(V)?M(_,j,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(V):j(V)}function j(V){return V===l?(_.enter("codeFencedFenceSequence"),T(V)):Y(V)}function T(V){return V===l?(W++,_.consume(V),T):W>=o?(_.exit("codeFencedFenceSequence"),F(V)?M(_,H,"whitespace")(V):H(V)):Y(V)}function H(V){return V===null||I(V)?(_.exit("codeFencedFence"),q(V)):Y(V)}}}function jp(e,t,n){let r=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}var nn={name:"codeIndented",tokenize:$p},Vp={partial:true,tokenize:Wp};function $p(e,t,n){let r=this;return i;function i(u){return e.enter("codeIndented"),M(e,a,"linePrefix",5)(u)}function a(u){let p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],true).length>=4?o(u):n(u)}function o(u){return u===null?s(u):I(u)?e.attempt(Vp,o,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||I(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),t(u)}}function Wp(e,t,n){let r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):I(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):M(e,a,"linePrefix",5)(o)}function a(o){let l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(o):I(o)?i(o):n(o)}}var Jr={name:"codeText",previous:Yp,resolve:qp,tokenize:Kp};function qp(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Yp(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Kp(e,t,n){let i=0,a,o;return l;function l(m){return e.enter("codeText"),e.enter("codeTextSequence"),s(m)}function s(m){return m===96?(e.consume(m),i++,s):(e.exit("codeTextSequence"),u(m))}function u(m){return m===null?n(m):m===32?(e.enter("space"),e.consume(m),e.exit("space"),u):m===96?(o=e.enter("codeTextSequence"),a=0,c(m)):I(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),u):(e.enter("codeTextData"),p(m))}function p(m){return m===null||m===32||m===96||I(m)?(e.exit("codeTextData"),u(m)):(e.consume(m),p)}function c(m){return m===96?(e.consume(m),a++,c):a===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(m)):(o.type="codeTextData",p(m))}}var On=class{constructor(t){this.left=t?[...t]:[],this.right=[];}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let i=n||0;this.setCursor(Math.trunc(t));let a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&rn(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t);}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),rn(this.left,t);}unshift(t){this.setCursor(0),this.right.push(t);}unshiftMany(t){this.setCursor(0),rn(this.right,t.reverse());}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,Number.POSITIVE_INFINITY);rn(this.right,n.reverse());}else {let n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);rn(this.left,n.reverse());}}};function rn(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4;}function Un(e){let t={},n=-1,r,i,a,o,l,s,u,p=new On(e);for(;++n<p.length;){for(;n in t;)n=t[n];if(r=p.get(n),n&&r[1].type==="chunkFlow"&&p.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,a=0,a<s.length&&s[a][1].type==="lineEndingBlank"&&(a+=2),a<s.length&&s[a][1].type==="content"))for(;++a<s.length&&s[a][1].type!=="content";)s[a][1].type==="chunkText"&&(s[a][1]._isInFirstContentOfListItem=true,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Xp(p,n)),n=t[n],u=true);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=p.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(p.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...p.get(i)[1].start},l=p.slice(i,n),l.unshift(r),p.splice(i,n-i+1,l));}}return ue(e,0,Number.POSITIVE_INFINITY,p.slice(0)),!u}function Xp(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=true));let l=o.events,s=[],u={},p,c,m=-1,f=n,d=0,v=0,x=[v];for(;f;){for(;e.get(++i)[1]!==f;);a.push(i),f._tokenizer||(p=r.sliceStream(f),f.next||p.push(null),c&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=true),o.write(p),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=f,f=f.next;}for(f=n;++m<l.length;)l[m][0]==="exit"&&l[m-1][0]==="enter"&&l[m][1].type===l[m-1][1].type&&l[m][1].start.line!==l[m][1].end.line&&(v=m+1,x.push(v),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):x.pop(),m=x.length;m--;){let y=l.slice(x[m],x[m+1]),z=a.pop();s.push([z,z+y.length-1]),e.splice(z,2,y);}for(s.reverse(),m=-1;++m<s.length;)u[d+s[m][0]]=d+s[m][1],d+=s[m][1]-s[m][0]-1;return u}var Qr={resolve:Jp,tokenize:Qp},Gp={partial:true,tokenize:Zp};function Jp(e){return Un(e),e}function Qp(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?a(l):I(l)?e.check(Gp,o,a)(l):(e.consume(l),i)}function a(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function o(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Zp(e,t,n){let r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),M(e,a,"linePrefix")}function a(o){if(o===null||I(o))return n(o);let l=r.events[r.events.length-1];return !r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],true).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function Bn(e,t,n,r,i,a,o,l,s){let u=s||Number.POSITIVE_INFINITY,p=0;return c;function c(y){return y===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(y),e.exit(a),m):y===null||y===32||y===41||lt(y)?n(y):(e.enter(r),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),v(y))}function m(y){return y===62?(e.enter(a),e.consume(y),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),f(y))}function f(y){return y===62?(e.exit("chunkString"),e.exit(l),m(y)):y===null||y===60||I(y)?n(y):(e.consume(y),y===92?d:f)}function d(y){return y===60||y===62||y===92?(e.consume(y),f):f(y)}function v(y){return !p&&(y===null||y===41||X(y))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(r),t(y)):p<u&&y===40?(e.consume(y),p++,v):y===41?(e.consume(y),p--,v):y===null||y===32||y===40||lt(y)?n(y):(e.consume(y),y===92?x:v)}function x(y){return y===40||y===41||y===92?(e.consume(y),v):v(y)}}function Hn(e,t,n,r,i,a){let o=this,l=0,s;return u;function u(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(a),p}function p(f){return l>999||f===null||f===91||f===93&&!s||f===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?n(f):f===93?(e.exit(a),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):I(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),c(f))}function c(f){return f===null||f===91||f===93||I(f)||l++>999?(e.exit("chunkString"),p(f)):(e.consume(f),s||(s=!F(f)),f===92?m:c)}function m(f){return f===91||f===92||f===93?(e.consume(f),l++,c):c(f)}}function jn(e,t,n,r,i,a){let o;return l;function l(m){return m===34||m===39||m===40?(e.enter(r),e.enter(i),e.consume(m),e.exit(i),o=m===40?41:m,s):n(m)}function s(m){return m===o?(e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):(e.enter(a),u(m))}function u(m){return m===o?(e.exit(a),s(o)):m===null?n(m):I(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),M(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===o||m===null||I(m)?(e.exit("chunkString"),u(m)):(e.consume(m),m===92?c:p)}function c(m){return m===o||m===92?(e.consume(m),p):p(m)}}function ut(e,t){let n;return r;function r(i){return I(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=true,r):F(i)?M(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}var Zr={name:"definition",tokenize:tf},ef={partial:true,tokenize:nf};function tf(e,t,n){let r=this,i;return a;function a(f){return e.enter("definition"),o(f)}function o(f){return Hn.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function l(f){return i=ge(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),s):n(f)}function s(f){return X(f)?ut(e,u)(f):u(f)}function u(f){return Bn(e,p,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function p(f){return e.attempt(ef,c,c)(f)}function c(f){return F(f)?M(e,m,"whitespace")(f):m(f)}function m(f){return f===null||I(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function nf(e,t,n){return r;function r(l){return X(l)?ut(e,i)(l):n(l)}function i(l){return jn(e,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function a(l){return F(l)?M(e,o,"whitespace")(l):o(l)}function o(l){return l===null||I(l)?t(l):n(l)}}var ei={name:"hardBreakEscape",tokenize:rf};function rf(e,t,n){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),i}function i(a){return I(a)?(e.exit("hardBreakEscape"),t(a)):n(a)}}var ti={name:"headingAtx",resolve:of,tokenize:af};function of(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},a={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},ue(e,r,n-r+1,[["enter",i,t],["enter",a,t],["exit",a,t],["exit",i,t]])),e}function af(e,t,n){let r=0;return i;function i(p){return e.enter("atxHeading"),a(p)}function a(p){return e.enter("atxHeadingSequence"),o(p)}function o(p){return p===35&&r++<6?(e.consume(p),o):p===null||X(p)?(e.exit("atxHeadingSequence"),l(p)):n(p)}function l(p){return p===35?(e.enter("atxHeadingSequence"),s(p)):p===null||I(p)?(e.exit("atxHeading"),t(p)):F(p)?M(e,l,"whitespace")(p):(e.enter("atxHeadingText"),u(p))}function s(p){return p===35?(e.consume(p),s):(e.exit("atxHeadingSequence"),l(p))}function u(p){return p===null||p===35||X(p)?(e.exit("atxHeadingText"),l(p)):(e.consume(p),u)}}var bl=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],ni=["pre","script","style","textarea"];var ri={concrete:true,name:"htmlFlow",resolveTo:uf,tokenize:cf},lf={partial:true,tokenize:ff},sf={partial:true,tokenize:pf};function uf(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function cf(e,t,n){let r=this,i,a,o,l,s;return u;function u(g){return p(g)}function p(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),c}function c(g){return g===33?(e.consume(g),m):g===47?(e.consume(g),a=true,v):g===63?(e.consume(g),i=3,r.interrupt?t:h):pe(g)?(e.consume(g),o=String.fromCharCode(g),x):n(g)}function m(g){return g===45?(e.consume(g),i=2,f):g===91?(e.consume(g),i=5,l=0,d):pe(g)?(e.consume(g),i=4,r.interrupt?t:h):n(g)}function f(g){return g===45?(e.consume(g),r.interrupt?t:h):n(g)}function d(g){let de="CDATA[";return g===de.charCodeAt(l++)?(e.consume(g),l===de.length?r.interrupt?t:j:d):n(g)}function v(g){return pe(g)?(e.consume(g),o=String.fromCharCode(g),x):n(g)}function x(g){if(g===null||g===47||g===62||X(g)){let de=g===47,De=o.toLowerCase();return !de&&!a&&ni.includes(De)?(i=1,r.interrupt?t(g):j(g)):bl.includes(o.toLowerCase())?(i=6,de?(e.consume(g),y):r.interrupt?t(g):j(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):a?z(g):S(g))}return g===45||oe(g)?(e.consume(g),o+=String.fromCharCode(g),x):n(g)}function y(g){return g===62?(e.consume(g),r.interrupt?t:j):n(g)}function z(g){return F(g)?(e.consume(g),z):w(g)}function S(g){return g===47?(e.consume(g),w):g===58||g===95||pe(g)?(e.consume(g),L):F(g)?(e.consume(g),S):w(g)}function L(g){return g===45||g===46||g===58||g===95||oe(g)?(e.consume(g),L):P(g)}function P(g){return g===61?(e.consume(g),_):F(g)?(e.consume(g),P):S(g)}function _(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),s=g,q):F(g)?(e.consume(g),_):Y(g)}function q(g){return g===s?(e.consume(g),s=null,W):g===null||I(g)?n(g):(e.consume(g),q)}function Y(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||X(g)?P(g):(e.consume(g),Y)}function W(g){return g===47||g===62||F(g)?S(g):n(g)}function w(g){return g===62?(e.consume(g),G):n(g)}function G(g){return g===null||I(g)?j(g):F(g)?(e.consume(g),G):n(g)}function j(g){return g===45&&i===2?(e.consume(g),Z):g===60&&i===1?(e.consume(g),R):g===62&&i===4?(e.consume(g),ce):g===63&&i===3?(e.consume(g),h):g===93&&i===5?(e.consume(g),fe):I(g)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(lf,ve,T)(g)):g===null||I(g)?(e.exit("htmlFlowData"),T(g)):(e.consume(g),j)}function T(g){return e.check(sf,H,ve)(g)}function H(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),V}function V(g){return g===null||I(g)?T(g):(e.enter("htmlFlowData"),j(g))}function Z(g){return g===45?(e.consume(g),h):j(g)}function R(g){return g===47?(e.consume(g),o="",ee):j(g)}function ee(g){if(g===62){let de=o.toLowerCase();return ni.includes(de)?(e.consume(g),ce):j(g)}return pe(g)&&o.length<8?(e.consume(g),o+=String.fromCharCode(g),ee):j(g)}function fe(g){return g===93?(e.consume(g),h):j(g)}function h(g){return g===62?(e.consume(g),ce):g===45&&i===2?(e.consume(g),h):j(g)}function ce(g){return g===null||I(g)?(e.exit("htmlFlowData"),ve(g)):(e.consume(g),ce)}function ve(g){return e.exit("htmlFlow"),t(g)}}function pf(e,t,n){let r=this;return i;function i(o){return I(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):n(o)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function ff(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Me,t,n)}}var ii={name:"htmlText",tokenize:mf};function mf(e,t,n){let r=this,i,a,o;return l;function l(h){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(h),s}function s(h){return h===33?(e.consume(h),u):h===47?(e.consume(h),P):h===63?(e.consume(h),S):pe(h)?(e.consume(h),Y):n(h)}function u(h){return h===45?(e.consume(h),p):h===91?(e.consume(h),a=0,d):pe(h)?(e.consume(h),z):n(h)}function p(h){return h===45?(e.consume(h),f):n(h)}function c(h){return h===null?n(h):h===45?(e.consume(h),m):I(h)?(o=c,R(h)):(e.consume(h),c)}function m(h){return h===45?(e.consume(h),f):c(h)}function f(h){return h===62?Z(h):h===45?m(h):c(h)}function d(h){let ce="CDATA[";return h===ce.charCodeAt(a++)?(e.consume(h),a===ce.length?v:d):n(h)}function v(h){return h===null?n(h):h===93?(e.consume(h),x):I(h)?(o=v,R(h)):(e.consume(h),v)}function x(h){return h===93?(e.consume(h),y):v(h)}function y(h){return h===62?Z(h):h===93?(e.consume(h),y):v(h)}function z(h){return h===null||h===62?Z(h):I(h)?(o=z,R(h)):(e.consume(h),z)}function S(h){return h===null?n(h):h===63?(e.consume(h),L):I(h)?(o=S,R(h)):(e.consume(h),S)}function L(h){return h===62?Z(h):S(h)}function P(h){return pe(h)?(e.consume(h),_):n(h)}function _(h){return h===45||oe(h)?(e.consume(h),_):q(h)}function q(h){return I(h)?(o=q,R(h)):F(h)?(e.consume(h),q):Z(h)}function Y(h){return h===45||oe(h)?(e.consume(h),Y):h===47||h===62||X(h)?W(h):n(h)}function W(h){return h===47?(e.consume(h),Z):h===58||h===95||pe(h)?(e.consume(h),w):I(h)?(o=W,R(h)):F(h)?(e.consume(h),W):Z(h)}function w(h){return h===45||h===46||h===58||h===95||oe(h)?(e.consume(h),w):G(h)}function G(h){return h===61?(e.consume(h),j):I(h)?(o=G,R(h)):F(h)?(e.consume(h),G):W(h)}function j(h){return h===null||h===60||h===61||h===62||h===96?n(h):h===34||h===39?(e.consume(h),i=h,T):I(h)?(o=j,R(h)):F(h)?(e.consume(h),j):(e.consume(h),H)}function T(h){return h===i?(e.consume(h),i=void 0,V):h===null?n(h):I(h)?(o=T,R(h)):(e.consume(h),T)}function H(h){return h===null||h===34||h===39||h===60||h===61||h===96?n(h):h===47||h===62||X(h)?W(h):(e.consume(h),H)}function V(h){return h===47||h===62||X(h)?W(h):n(h)}function Z(h){return h===62?(e.consume(h),e.exit("htmlTextData"),e.exit("htmlText"),t):n(h)}function R(h){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),ee}function ee(h){return F(h)?M(e,fe,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):fe(h)}function fe(h){return e.enter("htmlTextData"),o(h)}}var ct={name:"labelEnd",resolveAll:yf,resolveTo:vf,tokenize:bf},df={tokenize:xf},hf={tokenize:wf},gf={tokenize:kf};function yf(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let i=r.type==="labelImage"?4:2;r.type="data",t+=i;}}return e.length!==n.length&&ue(e,0,e.length,n),e}function vf(e,t){let n=e.length,r=0,i,a,o,l;for(;n--;)if(i=e[n][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=true);}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);let s={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[a][1].start},end:{...e[o][1].end}},p={type:"labelText",start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",s,t],["enter",u,t]],l=be(l,e.slice(a+1,a+r+3)),l=be(l,[["enter",p,t]]),l=be(l,Ye(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),l=be(l,[["exit",p,t],e[o-2],e[o-1],["exit",u,t]]),l=be(l,e.slice(o+1)),l=be(l,[["exit",s,t]]),ue(e,a,e.length,l),e}function bf(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return l;function l(m){return a?a._inactive?c(m):(o=r.parser.defined.includes(ge(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(m),e.exit("labelMarker"),e.exit("labelEnd"),s):n(m)}function s(m){return m===40?e.attempt(df,p,o?p:c)(m):m===91?e.attempt(hf,p,o?u:c)(m):o?p(m):c(m)}function u(m){return e.attempt(gf,p,c)(m)}function p(m){return t(m)}function c(m){return a._balanced=true,n(m)}}function xf(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return X(c)?ut(e,a)(c):a(c)}function a(c){return c===41?p(c):Bn(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return X(c)?ut(e,s)(c):p(c)}function l(c){return n(c)}function s(c){return c===34||c===39||c===40?jn(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):p(c)}function u(c){return X(c)?ut(e,p)(c):p(c)}function p(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function wf(e,t,n){let r=this;return i;function i(l){return Hn.call(r,e,a,o,"reference","referenceMarker","referenceString")(l)}function a(l){return r.parser.defined.includes(ge(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function o(l){return n(l)}}function kf(e,t,n){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),i}function i(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),t):n(a)}}var oi={name:"labelStartImage",resolveAll:ct.resolveAll,tokenize:_f};function _f(e,t,n){let r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}var ai={name:"labelStartLink",resolveAll:ct.resolveAll,tokenize:zf};function zf(e,t,n){let r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}var on={name:"lineEnding",tokenize:Sf};function Sf(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),M(e,t,"linePrefix")}}var pt={name:"thematicBreak",tokenize:Cf};function Cf(e,t,n){let r=0,i;return a;function a(u){return e.enter("thematicBreak"),o(u)}function o(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||I(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),F(u)?M(e,l,"whitespace")(u):l(u))}}var ye={continuation:{tokenize:Tf},exit:Lf,name:"list",tokenize:If},Ef={partial:true,tokenize:Rf},Af={partial:true,tokenize:Pf};function If(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],true).length:0,o=0;return l;function l(f){let d=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(d==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:en(f)){if(r.containerState.type||(r.containerState.type=d,e.enter(d,{_container:true})),d==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(pt,n,u)(f):u(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(f)}return n(f)}function s(f){return en(f)&&++o<10?(e.consume(f),s):(!r.interrupt||o<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),u(f)):n(f)}function u(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(Me,r.interrupt?n:p,e.attempt(Ef,m,c))}function p(f){return r.containerState.initialBlankLine=true,a++,m(f)}function c(f){return F(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),m):n(f)}function m(f){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),true).length,t(f)}}function Tf(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Me,i,a);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,M(e,t,"listItemIndent",r.containerState.size+1)(l)}function a(l){return r.containerState.furtherBlankLines||!F(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Af,t,o)(l))}function o(l){return r.containerState._closeFlow=true,r.interrupt=void 0,M(e,e.attempt(ye,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Pf(e,t,n){let r=this;return M(e,i,"listItemIndent",r.containerState.size+1);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],true).length===r.containerState.size?t(a):n(a)}}function Lf(e){e.exit(this.containerState.type);}function Rf(e,t,n){let r=this;return M(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){let o=r.events[r.events.length-1];return !F(a)&&o&&o[1].type==="listItemPrefixWhitespace"?t(a):n(a)}}var Vn={name:"setextUnderline",resolveTo:Mf,tokenize:Nf};function Mf(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n);}else e[n][1].type==="content"&&e.splice(n,1),!a&&e[n][1].type==="definition"&&(a=n);let o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",a?(e.splice(i,0,["enter",o,t]),e.splice(a+1,0,["exit",e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function Nf(e,t,n){let r=this,i;return a;function a(u){let p=r.events.length,c;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){c=r.events[p][1].type==="paragraph";break}return !r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,o(u)):n(u)}function o(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),F(u)?M(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||I(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}var xl={tokenize:Df};function Df(e){let t=this,n=e.attempt(Me,r,e.attempt(this.parser.constructs.flowInitial,i,M(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Qr,i)),"linePrefix")));return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),t.currentConstruct=void 0,n}}var wl={resolveAll:Sl()},kl=zl("string"),_l=zl("text");function zl(e){return {resolveAll:Sl(e==="text"?Ff:void 0),tokenize:t};function t(n){let r=this,i=this.parser.constructs[e],a=n.attempt(i,o,l);return o;function o(p){return u(p)?a(p):l(p)}function l(p){if(p===null){n.consume(p);return}return n.enter("data"),n.consume(p),s}function s(p){return u(p)?(n.exit("data"),a(p)):(n.consume(p),s)}function u(p){if(p===null)return  true;let c=i[p],m=-1;if(c)for(;++m<c.length;){let f=c[m];if(!f.previous||f.previous.call(r,r.previous))return  true}return  false}}}function Sl(e){return t;function t(n,r){let i=-1,a;for(;++i<=n.length;)a===void 0?n[i]&&n[i][1].type==="data"&&(a=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==a+2&&(n[a][1].end=n[i-1][1].end,n.splice(a+2,i-a-2),i=a+2),a=void 0);return e?e(n,r):n}}function Ff(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,l=0,s;for(;a--;){let u=i[a];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1;}else if(u===-2)s=true,l++;else if(u!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){let u={type:n===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2);}n++;}return e}var li={};fo(li,{attentionMarkers:()=>Wf,contentInitial:()=>Uf,disable:()=>qf,document:()=>Of,flow:()=>Hf,flowInitial:()=>Bf,insideSpan:()=>$f,string:()=>jf,text:()=>Vf});var Of={42:ye,43:ye,45:ye,48:ye,49:ye,50:ye,51:ye,52:ye,53:ye,54:ye,55:ye,56:ye,57:ye,62:Mn},Uf={91:Zr},Bf={[-2]:nn,[-1]:nn,32:nn},Hf={35:ti,42:pt,45:[Vn,pt],60:ri,61:Vn,95:pt,96:Fn,126:Fn},jf={38:Dn,92:Nn},Vf={[-5]:on,[-4]:on,[-3]:on,33:oi,38:Dn,42:tn,60:[Gr,ii],91:ai,92:[ei,Nn],93:ct,95:tn,96:Jr},$f={null:[tn,wl]},Wf={null:[42,95]},qf={null:[]};function Cl(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],l=[],u={attempt:W(q),check:W(Y),consume:L,enter:P,exit:_,interrupt:W(Y,{interrupt:true})},p={code:null,containerState:{},defineSkip:y,events:[],now:x,parser:e,previous:null,sliceSerialize:d,sliceStream:v,write:f},c=t.tokenize.call(p,u);return t.resolveAll&&a.push(t),p;function f(T){return o=be(o,T),z(),o[o.length-1]!==null?[]:(w(t,0),p.events=Ye(a,p.events,p),p.events)}function d(T,H){return Kf(v(T),H)}function v(T){return Yf(o,T)}function x(){let{_bufferIndex:T,_index:H,line:V,column:Z,offset:R}=r;return {_bufferIndex:T,_index:H,line:V,column:Z,offset:R}}function y(T){i[T.line]=T.column,j();}function z(){let T;for(;r._index<o.length;){let H=o[r._index];if(typeof H=="string")for(T=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===T&&r._bufferIndex<H.length;)S(H.charCodeAt(r._bufferIndex));else S(H);}}function S(T){c=c(T);}function L(T){I(T)?(r.line++,r.column=1,r.offset+=T===-3?2:1,j()):T!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),p.previous=T;}function P(T,H){let V=H||{};return V.type=T,V.start=x(),p.events.push(["enter",V,p]),l.push(V),V}function _(T){let H=l.pop();return H.end=x(),p.events.push(["exit",H,p]),H}function q(T,H){w(T,H.from);}function Y(T,H){H.restore();}function W(T,H){return V;function V(Z,R,ee){let fe,h,ce,ve;return Array.isArray(Z)?de(Z):"tokenize"in Z?de([Z]):g(Z);function g(ae){return Je;function Je(Ee){let E=Ee!==null&&ae[Ee],N=Ee!==null&&ae.null,B=[...Array.isArray(E)?E:E?[E]:[],...Array.isArray(N)?N:N?[N]:[]];return de(B)(Ee)}}function de(ae){return fe=ae,h=0,ae.length===0?ee:De(ae[h])}function De(ae){return Je;function Je(Ee){return ve=G(),ce=ae,ae.partial||(p.currentConstruct=ae),ae.name&&p.parser.constructs.disable.null.includes(ae.name)?gt():ae.tokenize.call(H?Object.assign(Object.create(p),H):p,u,Ut,gt)(Ee)}}function Ut(ae){return T(ce,ve),R}function gt(ae){return ve.restore(),++h<fe.length?De(fe[h]):ee}}}function w(T,H){T.resolveAll&&!a.includes(T)&&a.push(T),T.resolve&&ue(p.events,H,p.events.length-H,T.resolve(p.events.slice(H),p)),T.resolveTo&&(p.events=T.resolveTo(p.events,p));}function G(){let T=x(),H=p.previous,V=p.currentConstruct,Z=p.events.length,R=Array.from(l);return {from:Z,restore:ee};function ee(){r=T,p.previous=H,p.currentConstruct=V,p.events.length=Z,l=R,j();}}function j(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1);}}function Yf(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else {if(o=e.slice(n,i),r>-1){let l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift();}a>0&&o.push(e[i].slice(0,a));}return o}function Kf(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a=="string")o=a;else switch(a){case  -5:{o="\r";break}case  -4:{o=`
`;break}case  -3:{o=`\r
`;break}case  -2:{o=t?" ":"	";break}case  -1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(a);}i=a===-2,r.push(o);}return r.join("")}function si(e){let r={constructs:Ln([li,...(e||{}).extensions||[]]),content:i(dl),defined:[],document:i(gl),flow:i(xl),lazy:{},string:i(kl),text:i(_l)};return r;function i(a){return o;function o(l){return Cl(r,a,l)}}}function ui(e){for(;!Un(e););return e}var El=/[\0\t\n\r]/g;function ci(){let e=1,t="",n=true,r;return i;function i(a,o,l){let s=[],u,p,c,m,f;for(a=t+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a)),c=0,t="",n&&(a.charCodeAt(0)===65279&&c++,n=void 0);c<a.length;){if(El.lastIndex=c,u=El.exec(a),m=u&&u.index!==void 0?u.index:a.length,f=a.charCodeAt(m),!u){t=a.slice(c);break}if(f===10&&c===m&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),c<m&&(s.push(a.slice(c,m)),e+=m-c),f){case 0:{s.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,s.push(-2);e++<p;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=true,e=1;}c=m+1;}return l&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var Xf=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Al(e){return e.replace(Xf,Gf)}function Gf(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let i=n.charCodeAt(1),a=i===120||i===88;return Rn(n.slice(a?2:1),a?16:10)}return Tt(n)||e}var Tl={}.hasOwnProperty;function pi(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Jf(n)(ui(si(n).document().write(ci()(e,t,true))))}function Jf(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(yt),autolinkProtocol:W,autolinkEmail:W,atxHeading:a(te),blockQuote:a(Ee),characterEscape:W,characterReference:W,codeFenced:a(E),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(E,o),codeText:a(N,o),codeTextData:W,data:W,codeFlowValue:W,definition:a(B),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(O),hardBreakEscape:a(ne),hardBreakTrailing:a(ne),htmlFlow:a(Ae,o),htmlFlowData:W,htmlText:a(Ae,o),htmlTextData:W,image:a(_e),label:o,link:a(yt),listItem:a(Bt),listItemValue:m,listOrdered:a(vt,c),listUnordered:a(vt),paragraph:a(Qe),reference:g,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(te),strong:a(Ze),thematicBreak:a(pn)},exit:{atxHeading:s(),atxHeadingSequence:P,autolink:s(),autolinkEmail:Je,autolinkProtocol:ae,blockQuote:s(),characterEscapeValue:w,characterReferenceMarkerHexadecimal:De,characterReferenceMarkerNumeric:De,characterReferenceValue:Ut,characterReference:gt,codeFenced:s(x),codeFencedFence:v,codeFencedFenceInfo:f,codeFencedFenceMeta:d,codeFlowValue:w,codeIndented:s(y),codeText:s(V),codeTextData:w,data:w,definition:s(),definitionDestinationString:L,definitionLabelString:z,definitionTitleString:S,emphasis:s(),hardBreakEscape:s(j),hardBreakTrailing:s(j),htmlFlow:s(T),htmlFlowData:w,htmlText:s(H),htmlTextData:w,image:s(R),label:fe,labelText:ee,lineEnding:G,link:s(Z),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:de,resourceDestinationString:h,resourceTitleString:ce,resource:ve,setextHeading:s(Y),setextHeadingLineSequence:q,setextHeadingText:_,strong:s(),thematicBreak:s()}};Pl(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(k){let A={type:"root",children:[]},D={stack:[A],tokenStack:[],config:t,enter:l,exit:u,buffer:o,resume:p,data:n},K=[],J=-1;for(;++J<k.length;)if(k[J][1].type==="listOrdered"||k[J][1].type==="listUnordered")if(k[J][0]==="enter")K.push(J);else {let xe=K.pop();J=i(k,xe,J);}for(J=-1;++J<k.length;){let xe=t[k[J][0]];Tl.call(xe,k[J][1].type)&&xe[k[J][1].type].call(Object.assign({sliceSerialize:k[J][2].sliceSerialize},D),k[J][1]);}if(D.tokenStack.length>0){let xe=D.tokenStack[D.tokenStack.length-1];(xe[1]||Il).call(D,void 0,xe[0]);}for(A.position={start:Ke(k.length>0?k[0][1].start:{line:1,column:1,offset:0}),end:Ke(k.length>0?k[k.length-2][1].end:{line:1,column:1,offset:0})},J=-1;++J<t.transforms.length;)A=t.transforms[J](A)||A;return A}function i(k,A,D){let K=A-1,J=-1,xe=false,et,Fe,Ht,jt;for(;++K<=D;){let ke=k[K];switch(ke[1].type){case "listUnordered":case "listOrdered":case "blockQuote":{ke[0]==="enter"?J++:J--,jt=void 0;break}case "lineEndingBlank":{ke[0]==="enter"&&(et&&!jt&&!J&&!Ht&&(Ht=K),jt=void 0);break}case "linePrefix":case "listItemValue":case "listItemMarker":case "listItemPrefix":case "listItemPrefixWhitespace":break;default:jt=void 0;}if(!J&&ke[0]==="enter"&&ke[1].type==="listItemPrefix"||J===-1&&ke[0]==="exit"&&(ke[1].type==="listUnordered"||ke[1].type==="listOrdered")){if(et){let bt=K;for(Fe=void 0;bt--;){let Oe=k[bt];if(Oe[1].type==="lineEnding"||Oe[1].type==="lineEndingBlank"){if(Oe[0]==="exit")continue;Fe&&(k[Fe][1].type="lineEndingBlank",xe=true),Oe[1].type="lineEnding",Fe=bt;}else if(!(Oe[1].type==="linePrefix"||Oe[1].type==="blockQuotePrefix"||Oe[1].type==="blockQuotePrefixWhitespace"||Oe[1].type==="blockQuoteMarker"||Oe[1].type==="listItemIndent"))break}Ht&&(!Fe||Ht<Fe)&&(et._spread=true),et.end=Object.assign({},Fe?k[Fe][1].start:ke[1].end),k.splice(Fe||K,0,["exit",et,ke[2]]),K++,D++;}if(ke[1].type==="listItemPrefix"){let bt={type:"listItem",_spread:false,start:Object.assign({},ke[1].start),end:void 0};et=bt,k.splice(K,0,["enter",bt,ke[2]]),K++,D++,Ht=void 0,jt=true;}}}return k[A][1]._spread=xe,D}function a(k,A){return D;function D(K){l.call(this,k(K),K),A&&A.call(this,K);}}function o(){this.stack.push({type:"fragment",children:[]});}function l(k,A,D){this.stack[this.stack.length-1].children.push(k),this.stack.push(k),this.tokenStack.push([A,D||void 0]),k.position={start:Ke(A.start),end:void 0};}function s(k){return A;function A(D){k&&k.call(this,D),u.call(this,D);}}function u(k,A){let D=this.stack.pop(),K=this.tokenStack.pop();if(K)K[0].type!==k.type&&(A?A.call(this,k,K[0]):(K[1]||Il).call(this,k,K[0]));else throw new Error("Cannot close `"+k.type+"` ("+We({start:k.start,end:k.end})+"): it\u2019s not open");D.position.end=Ke(k.end);}function p(){return at(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=true;}function m(k){if(this.data.expectingFirstListItemValue){let A=this.stack[this.stack.length-2];A.start=Number.parseInt(this.sliceSerialize(k),10),this.data.expectingFirstListItemValue=void 0;}}function f(){let k=this.resume(),A=this.stack[this.stack.length-1];A.lang=k;}function d(){let k=this.resume(),A=this.stack[this.stack.length-1];A.meta=k;}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=true);}function x(){let k=this.resume(),A=this.stack[this.stack.length-1];A.value=k.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0;}function y(){let k=this.resume(),A=this.stack[this.stack.length-1];A.value=k.replace(/(\r?\n|\r)$/g,"");}function z(k){let A=this.resume(),D=this.stack[this.stack.length-1];D.label=A,D.identifier=ge(this.sliceSerialize(k)).toLowerCase();}function S(){let k=this.resume(),A=this.stack[this.stack.length-1];A.title=k;}function L(){let k=this.resume(),A=this.stack[this.stack.length-1];A.url=k;}function P(k){let A=this.stack[this.stack.length-1];if(!A.depth){let D=this.sliceSerialize(k).length;A.depth=D;}}function _(){this.data.setextHeadingSlurpLineEnding=true;}function q(k){let A=this.stack[this.stack.length-1];A.depth=this.sliceSerialize(k).codePointAt(0)===61?1:2;}function Y(){this.data.setextHeadingSlurpLineEnding=void 0;}function W(k){let D=this.stack[this.stack.length-1].children,K=D[D.length-1];(!K||K.type!=="text")&&(K=lr(),K.position={start:Ke(k.start),end:void 0},D.push(K)),this.stack.push(K);}function w(k){let A=this.stack.pop();A.value+=this.sliceSerialize(k),A.position.end=Ke(k.end);}function G(k){let A=this.stack[this.stack.length-1];if(this.data.atHardBreak){let D=A.children[A.children.length-1];D.position.end=Ke(k.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(A.type)&&(W.call(this,k),w.call(this,k));}function j(){this.data.atHardBreak=true;}function T(){let k=this.resume(),A=this.stack[this.stack.length-1];A.value=k;}function H(){let k=this.resume(),A=this.stack[this.stack.length-1];A.value=k;}function V(){let k=this.resume(),A=this.stack[this.stack.length-1];A.value=k;}function Z(){let k=this.stack[this.stack.length-1];if(this.data.inReference){let A=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=A,delete k.url,delete k.title;}else delete k.identifier,delete k.label;this.data.referenceType=void 0;}function R(){let k=this.stack[this.stack.length-1];if(this.data.inReference){let A=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=A,delete k.url,delete k.title;}else delete k.identifier,delete k.label;this.data.referenceType=void 0;}function ee(k){let A=this.sliceSerialize(k),D=this.stack[this.stack.length-2];D.label=Al(A),D.identifier=ge(A).toLowerCase();}function fe(){let k=this.stack[this.stack.length-1],A=this.resume(),D=this.stack[this.stack.length-1];if(this.data.inReference=true,D.type==="link"){let K=k.children;D.children=K;}else D.alt=A;}function h(){let k=this.resume(),A=this.stack[this.stack.length-1];A.url=k;}function ce(){let k=this.resume(),A=this.stack[this.stack.length-1];A.title=k;}function ve(){this.data.inReference=void 0;}function g(){this.data.referenceType="collapsed";}function de(k){let A=this.resume(),D=this.stack[this.stack.length-1];D.label=A,D.identifier=ge(this.sliceSerialize(k)).toLowerCase(),this.data.referenceType="full";}function De(k){this.data.characterReferenceType=k.type;}function Ut(k){let A=this.sliceSerialize(k),D=this.data.characterReferenceType,K;D?(K=Rn(A,D==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):K=Tt(A);let J=this.stack[this.stack.length-1];J.value+=K;}function gt(k){let A=this.stack.pop();A.position.end=Ke(k.end);}function ae(k){w.call(this,k);let A=this.stack[this.stack.length-1];A.url=this.sliceSerialize(k);}function Je(k){w.call(this,k);let A=this.stack[this.stack.length-1];A.url="mailto:"+this.sliceSerialize(k);}function Ee(){return {type:"blockquote",children:[]}}function E(){return {type:"code",lang:null,meta:null,value:""}}function N(){return {type:"inlineCode",value:""}}function B(){return {type:"definition",identifier:"",label:null,title:null,url:""}}function O(){return {type:"emphasis",children:[]}}function te(){return {type:"heading",depth:0,children:[]}}function ne(){return {type:"break"}}function Ae(){return {type:"html",value:""}}function _e(){return {type:"image",title:null,url:"",alt:null}}function yt(){return {type:"link",title:null,url:"",children:[]}}function vt(k){return {type:"list",ordered:k.type==="listOrdered",start:null,spread:k._spread,children:[]}}function Bt(k){return {type:"listItem",spread:k._spread,checked:null,children:[]}}function Qe(){return {type:"paragraph",children:[]}}function Ze(){return {type:"strong",children:[]}}function lr(){return {type:"text",value:""}}function pn(){return {type:"thematicBreak"}}}function Ke(e){return {line:e.line,column:e.column,offset:e.offset}}function Pl(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Pl(e,r):Qf(e,r);}}function Qf(e,t){let n;for(n in t)if(Tl.call(t,n))switch(n){case "canContainEols":{let r=t[n];r&&e[n].push(...r);break}case "transforms":{let r=t[n];r&&e[n].push(...r);break}case "enter":case "exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function Il(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+We({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+We({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+We({start:t.start,end:t.end})+") is still open")}function $n(e){let t=this;t.parser=n;function n(r){return pi(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Ll(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),true)};return e.patch(t,n),e.applyData(t,n)}function Rl(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Ml(e,t){let n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let a={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(t,a),a}function Nl(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Dl(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Fl(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Ce(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,l+=1,e.footnoteCounts.set(r,l);let s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:true,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,s);let u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function Ol(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ul(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Wn(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return [{type:"text",value:"!["+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});let o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function Bl(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Wn(e,t);let i={src:Ce(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function Hl(e,t){let n={src:Ce(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function jl(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Vl(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Wn(e,t);let i={href:Ce(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function $l(e,t){let n={href:Ce(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Wl(e,t,n){let r=e.all(t),i=n?Zf(n):ql(t),a={},o=[];if(typeof t.checked=="boolean"){let p=r[0],c;p&&p.type==="element"&&p.tagName==="p"?c=p:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:true},children:[]}),a.className=["task-list-item"];}let l=-1;for(;++l<r.length;){let p=r[l];(i||l!==0||p.type!=="element"||p.tagName!=="p")&&o.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?o.push(...p.children):o.push(p);}let s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});let u={type:"element",tagName:"li",properties:a,children:o};return e.patch(t,u),e.applyData(t,u)}function Zf(e){let t=false;if(e.type==="list"){t=e.spread||false;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=ql(n[r]);}return t}function ql(e){let t=e.spread;return t??e.children.length>1}function Yl(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){let o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let a={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,true)};return e.patch(t,a),e.applyData(t,a)}function Kl(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Xl(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Gl(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Jl(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],true)};e.patch(t.children[0],o),i.push(o);}if(n.length>0){let o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,true)},l=It(t.children[1]),s=Pn(t.children[t.children.length-1]);l&&s&&(o.position={start:l,end:s}),i.push(o);}let a={type:"element",tagName:"table",properties:{},children:e.wrap(i,true)};return e.patch(t,a),e.applyData(t,a)}function Ql(e,t,n){let r=n?n.children:void 0,a=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,l=o?o.length:t.children.length,s=-1,u=[];for(;++s<l;){let c=t.children[s],m={},f=o?o[s]:void 0;f&&(m.align=f);let d={type:"element",tagName:a,properties:m,children:[]};c&&(d.children=e.all(c),e.patch(c,d),d=e.applyData(c,d)),u.push(d);}let p={type:"element",tagName:"tr",properties:{},children:e.wrap(u,true)};return e.patch(t,p),e.applyData(t,p)}function Zl(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ts(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(es(t.slice(i,r.index),i>0,true),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(es(t.slice(i),i>0,false)),a.join("")}function es(e,t,n){let r=0,i=e.length;if(t){let a=e.codePointAt(r);for(;a===9||a===32;)r++,a=e.codePointAt(r);}if(n){let a=e.codePointAt(i-1);for(;a===9||a===32;)i--,a=e.codePointAt(i-1);}return i>r?e.slice(r,i):""}function ns(e,t){let n={type:"text",value:ts(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function rs(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var is={blockquote:Ll,break:Rl,code:Ml,delete:Nl,emphasis:Dl,footnoteReference:Fl,heading:Ol,html:Ul,imageReference:Bl,image:Hl,inlineCode:jl,linkReference:Vl,link:$l,listItem:Wl,list:Yl,paragraph:Kl,root:Xl,strong:Gl,table:Jl,tableCell:Zl,tableRow:Ql,text:ns,thematicBreak:rs,toml:qn,yaml:qn,definition:qn,footnoteDefinition:qn};function qn(){}var os=typeof self=="object"?self:globalThis,rm=(e,t)=>{let n=(i,a)=>(e.set(a,i),i),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case  -1:return n(o,i);case 1:{let l=n([],i);for(let s of o)l.push(r(s));return l}case 2:{let l=n({},i);for(let[s,u]of o)l[r(s)]=r(u);return l}case 3:return n(new Date(o),i);case 4:{let{source:l,flags:s}=o;return n(new RegExp(l,s),i)}case 5:{let l=n(new Map,i);for(let[s,u]of o)l.set(r(s),r(u));return l}case 6:{let l=n(new Set,i);for(let s of o)l.add(r(s));return l}case 7:{let{name:l,message:s}=o;return n(new os[l](s),i)}case 8:return n(BigInt(o),i);case "BigInt":return n(Object(BigInt(o)),i);case "ArrayBuffer":return n(new Uint8Array(o).buffer,o);case "DataView":{let{buffer:l}=new Uint8Array(o);return n(new DataView(l),o)}}return n(new os[a](o),i)};return r},di=e=>rm(new Map,e)(0);var Pt="",{toString:im}={},{keys:om}=Object,an=e=>{let t=typeof e;if(t!=="object"||!e)return [0,t];let n=im.call(e).slice(8,-1);switch(n){case "Array":return [1,Pt];case "Object":return [2,Pt];case "Date":return [3,Pt];case "RegExp":return [4,Pt];case "Map":return [5,Pt];case "Set":return [6,Pt];case "DataView":return [1,n]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},Kn=([e,t])=>e===0&&(t==="function"||t==="symbol"),am=(e,t,n,r)=>{let i=(o,l)=>{let s=r.push(o)-1;return n.set(l,s),s},a=o=>{if(n.has(o))return n.get(o);let[l,s]=an(o);switch(l){case 0:{let p=o;switch(s){case "bigint":l=8,p=o.toString();break;case "function":case "symbol":if(e)throw new TypeError("unable to serialize "+s);p=null;break;case "undefined":return i([-1],o)}return i([l,p],o)}case 1:{if(s){let m=o;return s==="DataView"?m=new Uint8Array(o.buffer):s==="ArrayBuffer"&&(m=new Uint8Array(o)),i([s,[...m]],o)}let p=[],c=i([l,p],o);for(let m of o)p.push(a(m));return c}case 2:{if(s)switch(s){case "BigInt":return i([s,o.toString()],o);case "Boolean":case "Number":case "String":return i([s,o.valueOf()],o)}if(t&&"toJSON"in o)return a(o.toJSON());let p=[],c=i([l,p],o);for(let m of om(o))(e||!Kn(an(o[m])))&&p.push([a(m),a(o[m])]);return c}case 3:return i([l,o.toISOString()],o);case 4:{let{source:p,flags:c}=o;return i([l,{source:p,flags:c}],o)}case 5:{let p=[],c=i([l,p],o);for(let[m,f]of o)(e||!(Kn(an(m))||Kn(an(f))))&&p.push([a(m),a(f)]);return c}case 6:{let p=[],c=i([l,p],o);for(let m of o)(e||!Kn(an(m)))&&p.push(a(m));return c}}let{message:u}=o;return i([l,{name:s,message:u}],o)};return a},hi=(e,{json:t,lossy:n}={})=>{let r=[];return am(!(t||n),!!t,new Map,r)(e),r};var Lt=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?di(hi(e,t)):structuredClone(e):(e,t)=>di(hi(e,t));function lm(e,t){let n=[{type:"text",value:"\u21A9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function sm(e,t){return "Back to reference "+(e+1)+(t>1?"-"+t:"")}function cs(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||lm,r=e.options.footnoteBackLabel||sm,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[],s=-1;for(;++s<e.footnoteOrder.length;){let u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;let p=e.all(u),c=String(u.identifier).toUpperCase(),m=Ce(c.toLowerCase()),f=0,d=[],v=e.footnoteCounts.get(c);for(;v!==void 0&&++f<=v;){d.length>0&&d.push({type:"text",value:" "});let z=typeof n=="string"?n:n(s,f);typeof z=="string"&&(z={type:"text",value:z}),d.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+m+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,f),className:["data-footnote-backref"]},children:Array.isArray(z)?z:[z]});}let x=p[p.length-1];if(x&&x.type==="element"&&x.tagName==="p"){let z=x.children[x.children.length-1];z&&z.type==="text"?z.value+=" ":x.children.push({type:"text",value:" "}),x.children.push(...d);}else p.push(...d);let y={type:"element",tagName:"li",properties:{id:t+"fn-"+m},children:e.wrap(p,true)};e.patch(u,y),l.push(y);}if(l.length!==0)return {type:"element",tagName:"section",properties:{dataFootnotes:true,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...Lt(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,true)},{type:"text",value:`
`}]}}var Xe=(function(e){if(e==null)return fm;if(typeof e=="function")return Xn(e);if(typeof e=="object")return Array.isArray(e)?um(e):cm(e);if(typeof e=="string")return pm(e);throw new Error("Expected function, string, or object as test")});function um(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Xe(e[n]);return Xn(r);function r(...i){let a=-1;for(;++a<t.length;)if(t[a].apply(this,i))return  true;return  false}}function cm(e){let t=e;return Xn(n);function n(r){let i=r,a;for(a in e)if(i[a]!==t[a])return  false;return  true}}function pm(e){return Xn(t);function t(n){return n&&n.type===e}}function Xn(e){return t;function t(n,r,i){return !!(mm(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function fm(){return  true}function mm(e){return e!==null&&typeof e=="object"&&"type"in e}var ps=[],Gn=true,ft=false,Jn="skip";function ln(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;let a=Xe(i),o=r?-1:1;l(e,void 0,[])();function l(s,u,p){let c=s&&typeof s=="object"?s:{};if(typeof c.type=="string"){let f=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(s.type+(f?"<"+f+">":""))+")"});}return m;function m(){let f=ps,d,v,x;if((!t||a(s,u,p[p.length-1]||void 0))&&(f=dm(n(s,p)),f[0]===ft))return f;if("children"in s&&s.children){let y=s;if(y.children&&f[0]!==Jn)for(v=(r?y.children.length:-1)+o,x=p.concat(y);v>-1&&v<y.children.length;){let z=y.children[v];if(d=l(z,v,x)(),d[0]===ft)return d;v=typeof d[1]=="number"?d[1]:v+o;}}return f}}}function dm(e){return Array.isArray(e)?e:typeof e=="number"?[Gn,e]:e==null?ps:[e]}function mt(e,t,n,r){let i,a,o;typeof t=="function"&&typeof n!="function"?(a=void 0,o=t,i=n):(a=t,o=n,i=r),ln(e,a,l,i);function l(s,u){let p=u[u.length-1],c=p?p.children.indexOf(s):void 0;return o(s,c,p)}}var gi={}.hasOwnProperty,hm={};function ms(e,t){let n=t||hm,r=new Map,i=new Map,a=new Map,o={...is,...n.handlers},l={all:u,applyData:ym,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:o,one:s,options:n,patch:gm,wrap:bm};return mt(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){let c=p.type==="definition"?r:i,m=String(p.identifier).toUpperCase();c.has(m)||c.set(m,p);}}),l;function s(p,c){let m=p.type,f=l.handlers[m];if(gi.call(l.handlers,m)&&f)return f(l,p,c);if(l.options.passThrough&&l.options.passThrough.includes(m)){if("children"in p){let{children:v,...x}=p,y=Lt(x);return y.children=l.all(p),y}return Lt(p)}return (l.options.unknownHandler||vm)(l,p,c)}function u(p){let c=[];if("children"in p){let m=p.children,f=-1;for(;++f<m.length;){let d=l.one(m[f],p);if(d){if(f&&m[f-1].type==="break"&&(!Array.isArray(d)&&d.type==="text"&&(d.value=fs(d.value)),!Array.isArray(d)&&d.type==="element")){let v=d.children[0];v&&v.type==="text"&&(v.value=fs(v.value));}Array.isArray(d)?c.push(...d):c.push(d);}}}return c}}function gm(e,t){e.position&&(t.position=$r(e));}function ym(e,t){let n=t;if(e&&e.data){let r=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else {let o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o};}n.type==="element"&&a&&Object.assign(n.properties,Lt(a)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i);}return n}function vm(e,t){let n=t.data||{},r="value"in t&&!(gi.call(n,"hProperties")||gi.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function bm(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function fs(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Qn(e,t){let n=ms(e,t),r=n.one(e,void 0),i=cs(n),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&(a.children.push({type:"text",value:`
`},i)),a}function Zn(e,t){return e&&"run"in e?async function(n,r){let i=Qn(n,{file:r,...t});await e.run(i,r);}:function(n,r){return Qn(n,{file:r,...e||t})}}function yi(e){if(e)throw e}var nr=mo(ks());function sn(e){if(typeof e!="object"||e===null)return  false;let t=Object.getPrototypeOf(e);return (t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function vi(){let e=[],t={run:n,use:r};return t;function n(...i){let a=-1,o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(s,...u){let p=e[++a],c=-1;if(s){o(s);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,p?_s(p,l)(...u):o(null,...u);}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function _s(e,t){let n;return r;function r(...o){let l=e.length>o.length,s;l&&o.push(i);try{s=e.apply(this,o);}catch(u){let p=u;if(l&&n)throw p;return i(p)}l||(s&&s.then&&typeof s.then=="function"?s.then(a,i):s instanceof Error?i(s):a(s));}function i(o,...l){n||(n=true,t(o,...l));}function a(o){i(null,o);}}var Pe={basename:xm,dirname:wm,extname:km,join:_m,sep:"/"};function xm(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');un(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=true,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return "";let o=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=true,o=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function wm(e){if(un(e),e.length===0)return ".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=true);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function km(e){un(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let l=e.codePointAt(t);if(l===47){if(o){r=t+1;break}continue}n<0&&(o=true,n=t+1),l===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1);}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function _m(...e){let t=-1,n;for(;++t<e.length;)un(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":zm(n)}function zm(e){un(e);let t=e.codePointAt(0)===47,n=Sm(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Sm(e,t){let n="",r=0,i=-1,a=0,o=-1,l,s;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else {if(l===47)break;l=47;}if(l===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=o,a=0;continue}}else if(n.length>0){n="",r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2);}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0;}else l===46&&a>-1?a++:a=-1;}return n}function un(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}var zs={cwd:Cm};function Cm(){return "/"}function Rt(e){return !!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Ss(e){if(typeof e=="string")e=new URL(e);else if(!Rt(e)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Em(e)}function Em(e){if(e.hostname!==""){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}var bi=["history","path","basename","stem","extname","dirname"],dt=class{constructor(t){let n;t?Rt(t)?n={path:t}:typeof t=="string"||Am(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":zs.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<bi.length;){let a=bi[r];a in n&&n[a]!==void 0&&n[a]!==null&&(this[a]=a==="history"?[...n[a]]:n[a]);}let i;for(i in n)bi.includes(i)||(this[i]=n[i]);}get basename(){return typeof this.path=="string"?Pe.basename(this.path):void 0}set basename(t){wi(t,"basename"),xi(t,"basename"),this.path=Pe.join(this.dirname||"",t);}get dirname(){return typeof this.path=="string"?Pe.dirname(this.path):void 0}set dirname(t){Cs(this.basename,"dirname"),this.path=Pe.join(t||"",this.basename);}get extname(){return typeof this.path=="string"?Pe.extname(this.path):void 0}set extname(t){if(xi(t,"extname"),Cs(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Pe.join(this.dirname,this.stem+(t||""));}get path(){return this.history[this.history.length-1]}set path(t){Rt(t)&&(t=Ss(t)),wi(t,"path"),this.path!==t&&this.history.push(t);}get stem(){return typeof this.path=="string"?Pe.basename(this.path,this.extname):void 0}set stem(t){wi(t,"stem"),xi(t,"stem"),this.path=Pe.join(this.dirname||"",t+(this.extname||""));}fail(t,n,r){let i=this.message(t,n,r);throw i.fatal=true,i}info(t,n,r){let i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){let i=new se(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=false,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function xi(e,t){if(e&&e.includes(Pe.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Pe.sep+"`")}function wi(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Cs(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Am(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var Es=(function(e){let r=this.constructor.prototype,i=r[e],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a});var Im={}.hasOwnProperty,Si=class e extends Es{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=vi();}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r);}return t.data((0, nr.default)(true,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(zi("data",this.frozen),this.namespace[t]=n,this):Im.call(this.namespace,t)&&this.namespace[t]||void 0:t?(zi("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===false)continue;r[0]===true&&(r[0]=void 0);let i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i);}return this.frozen=true,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();let n=tr(t),r=this.parser||this.Parser;return ki("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),ki("process",this.parser||this.Parser),_i("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(a,o){let l=tr(t),s=r.parse(l);r.run(s,l,function(p,c,m){if(p||!c||!m)return u(p);let f=c,d=r.stringify(f,m);Pm(d)?m.value=d:m.result=d,u(p,m);});function u(p,c){p||!c?o(p):a?a(c):n(void 0,c);}}}processSync(t){let n=false,r;return this.freeze(),ki("processSync",this.parser||this.Parser),_i("processSync",this.compiler||this.Compiler),this.process(t,i),Is("processSync","process",n),r;function i(a,o){n=true,yi(a),r=o;}}run(t,n,r){As(t),this.freeze();let i=this.transformers;return !r&&typeof n=="function"&&(r=n,n=void 0),r?a(void 0,r):new Promise(a);function a(o,l){let s=tr(n);i.run(t,s,u);function u(p,c,m){let f=c||t;p?l(p):o?o(f):r(void 0,f,m);}}}runSync(t,n){let r=false,i;return this.run(t,n,a),Is("runSync","run",r),i;function a(o,l){yi(o),i=l,r=true;}}stringify(t,n){this.freeze();let r=tr(n),i=this.compiler||this.Compiler;return _i("stringify",i),As(t),i(t,r)}use(t,...n){let r=this.attachers,i=this.namespace;if(zi("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function a(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){let[p,...c]=u;s(p,c);}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=(0, nr.default)(true,i.settings,u.settings));}function l(u){let p=-1;if(u!=null)if(Array.isArray(u))for(;++p<u.length;){let c=u[p];a(c);}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,p){let c=-1,m=-1;for(;++c<r.length;)if(r[c][0]===u){m=c;break}if(m===-1)r.push([u,...p]);else if(p.length>0){let[f,...d]=p,v=r[m][1];sn(v)&&sn(f)&&(f=(0, nr.default)(true,v,f)),r[m]=[u,f,...d];}}}},Ci=new Si().freeze();function ki(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function _i(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function zi(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function As(e){if(!sn(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Is(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function tr(e){return Tm(e)?e:new dt(e)}function Tm(e){return !!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Pm(e){return typeof e=="string"||Lm(e)}function Lm(e){return !!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var Rm="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Ts=[],Ps={allowDangerousHtml:true},Mm=/^(https?|ircs?|mailto|xmpp)$/i,Nm=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Ei(e){let t=Dm(e),n=Fm(e);return Om(t.runSync(t.parse(n),n),e)}function Dm(e){let t=e.rehypePlugins||Ts,n=e.remarkPlugins||Ts,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Ps}:Ps;return Ci().use($n).use(n).use(Zn,r).use(t)}function Fm(e){let t=e.children||"",n=new dt;return typeof t=="string"?n.value=t:(void 0),n}function Om(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,l=t.unwrapDisallowed,s=t.urlTransform||Ls;for(let p of Nm)Object.hasOwn(t,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+Rm+p.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),mt(e,u),Yr(e,{Fragment:ze,components:i,ignoreInvalidStyle:true,jsx:b,jsxs:b,passKeys:true,passNode:true});function u(p,c,m){if(p.type==="raw"&&m&&typeof c=="number")return o?m.children.splice(c,1):m.children[c]={type:"text",value:p.value},c;if(p.type==="element"){let f;for(f in Zt)if(Object.hasOwn(Zt,f)&&Object.hasOwn(p.properties,f)){let d=p.properties[f],v=Zt[f];(v===null||v.includes(p.tagName))&&(p.properties[f]=s(String(d||""),f,p));}}if(p.type==="element"){let f=n?!n.includes(p.tagName):a?a.includes(p.tagName):false;if(!f&&r&&typeof c=="number"&&(f=!r(p,c,m)),f&&m&&typeof c=="number")return l&&p.children?m.children.splice(c,1,...p.children):m.children.splice(c,1),c}}}function Ls(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Mm.test(e.slice(0,t))?e:""}function Ai(e,t){let n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function Ii(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Ti(e,t,n){let i=Xe((n||{}).ignore||[]),a=Um(t),o=-1;for(;++o<a.length;)ln(e,"text",l);function l(u,p){let c=-1,m;for(;++c<p.length;){let f=p[c],d=m?m.children:void 0;if(i(f,d?d.indexOf(f):void 0,m))return;m=f;}if(m)return s(u,p)}function s(u,p){let c=p[p.length-1],m=a[o][0],f=a[o][1],d=0,x=c.children.indexOf(u),y=false,z=[];m.lastIndex=0;let S=m.exec(u.value);for(;S;){let L=S.index,P={index:S.index,input:S.input,stack:[...p,u]},_=f(...S,P);if(typeof _=="string"&&(_=_.length>0?{type:"text",value:_}:void 0),_===false?m.lastIndex=L+1:(d!==L&&z.push({type:"text",value:u.value.slice(d,L)}),Array.isArray(_)?z.push(..._):_&&z.push(_),d=L+S[0].length,y=true),!m.global)break;S=m.exec(u.value);}return y?(d<u.value.length&&z.push({type:"text",value:u.value.slice(d)}),c.children.splice(x,1,...z)):z=[u],x+z.length}}function Um(e){let t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let i=n[r];t.push([Bm(i[0]),Hm(i[1])]);}return t}function Bm(e){return typeof e=="string"?new RegExp(Ii(e),"g"):e}function Hm(e){return typeof e=="function"?e:function(){return e}}var Pi="phrasing",Li=["autolink","link","image","label"];function Mi(){return {transforms:[Ym],enter:{literalAutolink:jm,literalAutolinkEmail:Ri,literalAutolinkHttp:Ri,literalAutolinkWww:Ri},exit:{literalAutolink:qm,literalAutolinkEmail:Wm,literalAutolinkHttp:Vm,literalAutolinkWww:$m}}}function Ni(){return {unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Pi,notInConstruct:Li},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Pi,notInConstruct:Li},{character:":",before:"[ps]",after:"\\/",inConstruct:Pi,notInConstruct:Li}]}}function jm(e){this.enter({type:"link",title:null,url:"",children:[]},e);}function Ri(e){this.config.enter.autolinkProtocol.call(this,e);}function Vm(e){this.config.exit.autolinkProtocol.call(this,e);}function $m(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e);}function Wm(e){this.config.exit.autolinkEmail.call(this,e);}function qm(e){this.exit(e);}function Ym(e){Ti(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Km],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Xm]],{ignore:["link","linkReference"]});}function Km(e,t,n,r,i){let a="";if(!Rs(i)||(/^w/i.test(t)&&(n=t+n,t="",a="http://"),!Gm(n)))return  false;let o=Jm(n+r);if(!o[0])return  false;let l={type:"link",title:null,url:a+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[l,{type:"text",value:o[1]}]:l}function Xm(e,t,n,r){return !Rs(r,true)||/[-\d_]$/.test(n)?false:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Gm(e){let t=e.split(".");return !(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Jm(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return [e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),i=Ai(e,"("),a=Ai(e,")");for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),a++;return [e,n]}function Rs(e,t){let n=e.input.charCodeAt(e.index-1);return (e.index===0||Re(n)||st(n))&&(!t||n!==47)}Ms.peek=ad;function Qm(){this.buffer();}function Zm(e){this.enter({type:"footnoteReference",identifier:"",label:""},e);}function ed(){this.buffer();}function td(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e);}function nd(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ge(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function rd(e){this.exit(e);}function id(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ge(this.sliceSerialize(e)).toLowerCase(),n.label=t;}function od(e){this.exit(e);}function ad(){return "["}function Ms(e,t,n,r){let i=n.createTracker(r),a=i.move("[^"),o=n.enter("footnoteReference"),l=n.enter("reference");return a+=i.move(n.safe(n.associationId(e),{after:"]",before:a})),l(),o(),a+=i.move("]"),a}function Di(){return {enter:{gfmFootnoteCallString:Qm,gfmFootnoteCall:Zm,gfmFootnoteDefinitionLabelString:ed,gfmFootnoteDefinition:td},exit:{gfmFootnoteCallString:nd,gfmFootnoteCall:rd,gfmFootnoteDefinitionLabelString:id,gfmFootnoteDefinition:od}}}function Fi(e){let t=false;return e&&e.firstLineBlank&&(t=true),{handlers:{footnoteDefinition:n,footnoteReference:Ms},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,a,o){let l=a.createTracker(o),s=l.move("[^"),u=a.enter("footnoteDefinition"),p=a.enter("label");return s+=l.move(a.safe(a.associationId(r),{before:s,after:"]"})),p(),s+=l.move("]:"),r.children&&r.children.length>0&&(l.shift(4),s+=l.move((t?`
`:" ")+a.indentLines(a.containerFlow(r,l.current()),t?Ns:ld))),u(),s}}function ld(e,t,n){return t===0?e:Ns(e,t,n)}function Ns(e,t,n){return (n?"":"    ")+e}var sd=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Ds.peek=pd;function Oi(){return {canContainEols:["delete"],enter:{strikethrough:ud},exit:{strikethrough:cd}}}function Ui(){return {unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:sd}],handlers:{delete:Ds}}}function ud(e){this.enter({type:"delete",children:[]},e);}function cd(e){this.exit(e);}function Ds(e,t,n,r){let i=n.createTracker(r),a=n.enter("strikethrough"),o=i.move("~~");return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),a(),o}function pd(){return "~"}function fd(e){return e.length}function Os(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||fd,a=[],o=[],l=[],s=[],u=0,p=-1;for(;++p<e.length;){let v=[],x=[],y=-1;for(e[p].length>u&&(u=e[p].length);++y<e[p].length;){let z=md(e[p][y]);if(n.alignDelimiters!==false){let S=i(z);x[y]=S,(s[y]===void 0||S>s[y])&&(s[y]=S);}v.push(z);}o[p]=v,l[p]=x;}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)a[c]=Fs(r[c]);else {let v=Fs(r);for(;++c<u;)a[c]=v;}c=-1;let m=[],f=[];for(;++c<u;){let v=a[c],x="",y="";v===99?(x=":",y=":"):v===108?x=":":v===114&&(y=":");let z=n.alignDelimiters===false?1:Math.max(1,s[c]-x.length-y.length),S=x+"-".repeat(z)+y;n.alignDelimiters!==false&&(z=x.length+z+y.length,z>s[c]&&(s[c]=z),f[c]=z),m[c]=S;}o.splice(1,0,m),l.splice(1,0,f),p=-1;let d=[];for(;++p<o.length;){let v=o[p],x=l[p];c=-1;let y=[];for(;++c<u;){let z=v[c]||"",S="",L="";if(n.alignDelimiters!==false){let P=s[c]-(x[c]||0),_=a[c];_===114?S=" ".repeat(P):_===99?P%2?(S=" ".repeat(P/2+.5),L=" ".repeat(P/2-.5)):(S=" ".repeat(P/2),L=S):L=" ".repeat(P);}n.delimiterStart!==false&&!c&&y.push("|"),n.padding!==false&&!(n.alignDelimiters===false&&z==="")&&(n.delimiterStart!==false||c)&&y.push(" "),n.alignDelimiters!==false&&y.push(S),y.push(z),n.alignDelimiters!==false&&y.push(L),n.padding!==false&&y.push(" "),(n.delimiterEnd!==false||c!==u-1)&&y.push("|");}d.push(n.delimiterEnd===false?y.join("").replace(/ +$/,""):y.join(""));}return d.join(`
`)}function md(e){return e==null?"":String(e)}function Fs(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Us(e,t,n,r){let i=n.enter("blockquote"),a=n.createTracker(r);a.move("> "),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),dd);return i(),o}function dd(e,t,n){return ">"+(n?"":" ")+e}function Hs(e,t){return Bs(e,t.inConstruct,true)&&!Bs(e,t.notInConstruct,false)}function Bs(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return  true;return  false}function Bi(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Hs(n.stack,n.unsafe[i]))return /[ \t]/.test(r.before)?"":" ";return `\\
`}function js(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function Vs(e,t){return !!(t.options.fences===false&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function $s(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Ws(e,t,n,r){let i=$s(n),a=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(Vs(e,n)){let c=n.enter("codeIndented"),m=n.indentLines(a,hd);return c(),m}let l=n.createTracker(r),s=i.repeat(Math.max(js(a,i)+1,3)),u=n.enter("codeFenced"),p=l.move(s);if(e.lang){let c=n.enter(`codeFencedLang${o}`);p+=l.move(n.safe(e.lang,{before:p,after:" ",encode:["`"],...l.current()})),c();}if(e.lang&&e.meta){let c=n.enter(`codeFencedMeta${o}`);p+=l.move(" "),p+=l.move(n.safe(e.meta,{before:p,after:`
`,encode:["`"],...l.current()})),c();}return p+=l.move(`
`),a&&(p+=l.move(a+`
`)),p+=l.move(s),u(),p}function hd(e,t,n){return (n?"":"    ")+e}function Mt(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function qs(e,t,n,r){let i=Mt(n),a=i==='"'?"Quote":"Apostrophe",o=n.enter("definition"),l=n.enter("label"),s=n.createTracker(r),u=s.move("[");return u+=s.move(n.safe(n.associationId(e),{before:u,after:"]",...s.current()})),u+=s.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...s.current()}))),l(),e.title&&(l=n.enter(`title${a}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),o(),u}function Ys(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Ge(e){return "&#x"+e.toString(16).toUpperCase()+";"}function Nt(e,t,n){let r=He(e),i=He(t);return r===void 0?i===void 0?n==="_"?{inside:true,outside:true}:{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:true}:r===1?i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:true}:{inside:false,outside:false}:i===void 0?{inside:false,outside:false}:i===1?{inside:true,outside:false}:{inside:false,outside:false}}Hi.peek=gd;function Hi(e,t,n,r){let i=Ys(n),a=n.enter("emphasis"),o=n.createTracker(r),l=o.move(i),s=o.move(n.containerPhrasing(e,{after:i,before:l,...o.current()})),u=s.charCodeAt(0),p=Nt(r.before.charCodeAt(r.before.length-1),u,i);p.inside&&(s=Ge(u)+s.slice(1));let c=s.charCodeAt(s.length-1),m=Nt(r.after.charCodeAt(0),c,i);m.inside&&(s=s.slice(0,-1)+Ge(c));let f=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:m.outside,before:p.outside},l+s+f}function gd(e,t,n){return n.options.emphasis||"*"}function Ks(e,t){let n=false;return mt(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=true,ft}),!!((!e.depth||e.depth<3)&&at(e)&&(t.options.setext||n))}function Xs(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(Ks(e,n)){let p=n.enter("headingSetext"),c=n.enter("phrasing"),m=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return c(),p(),m+`
`+(i===1?"=":"-").repeat(m.length-(Math.max(m.lastIndexOf("\r"),m.lastIndexOf(`
`))+1))}let o="#".repeat(i),l=n.enter("headingAtx"),s=n.enter("phrasing");a.move(o+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...a.current()});return /^[\t ]/.test(u)&&(u=Ge(u.charCodeAt(0))+u.slice(1)),u=u?o+" "+u:o,n.options.closeAtx&&(u+=" "+o),s(),l(),u}ji.peek=yd;function ji(e){return e.value||""}function yd(){return "<"}Vi.peek=vd;function Vi(e,t,n,r){let i=Mt(n),a=i==='"'?"Quote":"Apostrophe",o=n.enter("image"),l=n.enter("label"),s=n.createTracker(r),u=s.move("![");return u+=s.move(n.safe(e.alt,{before:u,after:"]",...s.current()})),u+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=n.enter(`title${a}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),u+=s.move(")"),o(),u}function vd(){return "!"}$i.peek=bd;function $i(e,t,n,r){let i=e.referenceType,a=n.enter("imageReference"),o=n.enter("label"),l=n.createTracker(r),s=l.move("!["),u=n.safe(e.alt,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),o();let p=n.stack;n.stack=[],o=n.enter("reference");let c=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return o(),n.stack=p,a(),i==="full"||!u||u!==c?s+=l.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function bd(){return "!"}Wi.peek=xd;function Wi(e,t,n){let r=e.value||"",i="`",a=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++a<n.unsafe.length;){let o=n.unsafe[a],l=n.compilePattern(o),s;if(o.atBreak)for(;s=l.exec(r);){let u=s.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(s.index+1);}}return i+r+i}function xd(){return "`"}function qi(e,t){let n=at(e);return !!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Yi.peek=wd;function Yi(e,t,n,r){let i=Mt(n),a=i==='"'?"Quote":"Apostrophe",o=n.createTracker(r),l,s;if(qi(e,n)){let p=n.stack;n.stack=[],l=n.enter("autolink");let c=o.move("<");return c+=o.move(n.containerPhrasing(e,{before:c,after:">",...o.current()})),c+=o.move(">"),l(),n.stack=p,c}l=n.enter("link"),s=n.enter("label");let u=o.move("[");return u+=o.move(n.containerPhrasing(e,{before:u,after:"](",...o.current()})),u+=o.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=o.move("<"),u+=o.move(n.safe(e.url,{before:u,after:">",...o.current()})),u+=o.move(">")):(s=n.enter("destinationRaw"),u+=o.move(n.safe(e.url,{before:u,after:e.title?" ":")",...o.current()}))),s(),e.title&&(s=n.enter(`title${a}`),u+=o.move(" "+i),u+=o.move(n.safe(e.title,{before:u,after:i,...o.current()})),u+=o.move(i),s()),u+=o.move(")"),l(),u}function wd(e,t,n){return qi(e,n)?"<":"["}Ki.peek=kd;function Ki(e,t,n,r){let i=e.referenceType,a=n.enter("linkReference"),o=n.enter("label"),l=n.createTracker(r),s=l.move("["),u=n.containerPhrasing(e,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),o();let p=n.stack;n.stack=[],o=n.enter("reference");let c=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return o(),n.stack=p,a(),i==="full"||!u||u!==c?s+=l.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function kd(){return "["}function Dt(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Gs(e){let t=Dt(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Js(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function rr(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Qs(e,t,n,r){let i=n.enter("list"),a=n.bulletCurrent,o=e.ordered?Js(n):Dt(n),l=e.ordered?o==="."?")":".":Gs(n),s=t&&n.bulletLastUsed?o===n.bulletLastUsed:false;if(!e.ordered){let p=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&p&&(!p.children||!p.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=true),rr(n)===o&&p){let c=-1;for(;++c<e.children.length;){let m=e.children[c];if(m&&m.type==="listItem"&&m.children&&m.children[0]&&m.children[0].type==="thematicBreak"){s=true;break}}}}s&&(o=l),n.bulletCurrent=o;let u=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),u}function Zs(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function eu(e,t,n,r){let i=Zs(n),a=n.bulletCurrent||Dt(n);t&&t.type==="list"&&t.ordered&&(a=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===false?0:t.children.indexOf(e))+a);let o=a.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let l=n.createTracker(r);l.move(a+" ".repeat(o-a.length)),l.shift(o);let s=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,l.current()),p);return s(),u;function p(c,m,f){return m?(f?"":" ".repeat(o))+c:(f?a:a+" ".repeat(o-a.length))+c}}function tu(e,t,n,r){let i=n.enter("paragraph"),a=n.enter("phrasing"),o=n.containerPhrasing(e,r);return a(),i(),o}var Xi=Xe(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function nu(e,t,n,r){return (e.children.some(function(o){return Xi(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function ru(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Gi.peek=_d;function Gi(e,t,n,r){let i=ru(n),a=n.enter("strong"),o=n.createTracker(r),l=o.move(i+i),s=o.move(n.containerPhrasing(e,{after:i,before:l,...o.current()})),u=s.charCodeAt(0),p=Nt(r.before.charCodeAt(r.before.length-1),u,i);p.inside&&(s=Ge(u)+s.slice(1));let c=s.charCodeAt(s.length-1),m=Nt(r.after.charCodeAt(0),c,i);m.inside&&(s=s.slice(0,-1)+Ge(c));let f=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:m.outside,before:p.outside},l+s+f}function _d(e,t,n){return n.options.strong||"*"}function iu(e,t,n,r){return n.safe(e.value,r)}function ou(e){let t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function au(e,t,n){let r=(rr(n)+(n.options.ruleSpaces?" ":"")).repeat(ou(n));return n.options.ruleSpaces?r.slice(0,-1):r}var cn={blockquote:Us,break:Bi,code:Ws,definition:qs,emphasis:Hi,hardBreak:Bi,heading:Xs,html:ji,image:Vi,imageReference:$i,inlineCode:Wi,link:Yi,linkReference:Ki,list:Qs,listItem:eu,paragraph:tu,root:nu,strong:Gi,text:iu,thematicBreak:au};function Qi(){return {enter:{table:zd,tableData:lu,tableHeader:lu,tableRow:Cd},exit:{codeText:Ed,table:Sd,tableData:Ji,tableHeader:Ji,tableRow:Ji}}}function zd(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=true;}function Sd(e){this.exit(e),this.data.inTable=void 0;}function Cd(e){this.enter({type:"tableRow",children:[]},e);}function Ji(e){this.exit(e);}function lu(e){this.enter({type:"tableCell",children:[]},e);}function Ed(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Ad));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e);}function Ad(e,t){return t==="|"?t:e}function Zi(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?" ":"|";return {unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:true,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:true,character:":",after:"-"},{atBreak:true,character:"-",after:"[:|-]"}],handlers:{inlineCode:m,table:o,tableCell:s,tableRow:l}};function o(f,d,v,x){return u(p(f,v,x),f.align)}function l(f,d,v,x){let y=c(f,v,x),z=u([y]);return z.slice(0,z.indexOf(`
`))}function s(f,d,v,x){let y=v.enter("tableCell"),z=v.enter("phrasing"),S=v.containerPhrasing(f,{...x,before:a,after:a});return z(),y(),S}function u(f,d){return Os(f,{align:d,alignDelimiters:r,padding:n,stringLength:i})}function p(f,d,v){let x=f.children,y=-1,z=[],S=d.enter("table");for(;++y<x.length;)z[y]=c(x[y],d,v);return S(),z}function c(f,d,v){let x=f.children,y=-1,z=[],S=d.enter("tableRow");for(;++y<x.length;)z[y]=s(x[y],f,d,v);return S(),z}function m(f,d,v){let x=cn.inlineCode(f,d,v);return v.stack.includes("tableCell")&&(x=x.replace(/\|/g,"\\$&")),x}}function eo(){return {exit:{taskListCheckValueChecked:su,taskListCheckValueUnchecked:su,paragraph:Id}}}function to(){return {unsafe:[{atBreak:true,character:"-",after:"[:|-]"}],handlers:{listItem:Td}}}function su(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked";}function Id(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let i=t.children,a=-1,o;for(;++a<i.length;){let l=i[a];if(l.type==="paragraph"){o=l;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)));}}this.exit(e);}function Td(e,t,n,r){let i=e.children[0],a=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",l=n.createTracker(r);a&&l.move(o);let s=cn.listItem(e,t,n,{...r,...l.current()});return a&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),s;function u(p){return p+o}}function no(){return [Mi(),Di(),Oi(),Qi(),eo()]}function ro(e){return {extensions:[Ni(),Fi(e),Ui(),Zi(e),to()]}}var Pd={tokenize:Dd,partial:true},uu={tokenize:Fd,partial:true},cu={tokenize:Od,partial:true},pu={tokenize:Ud,partial:true},Ld={tokenize:Bd,partial:true},fu={name:"wwwAutolink",tokenize:Md,previous:du},mu={name:"protocolAutolink",tokenize:Nd,previous:hu},je={name:"emailAutolink",tokenize:Rd,previous:gu},Ne={};function oo(){return {text:Ne}}var ht=48;for(;ht<123;)Ne[ht]=je,ht++,ht===58?ht=65:ht===91&&(ht=97);Ne[43]=je;Ne[45]=je;Ne[46]=je;Ne[95]=je;Ne[72]=[je,mu];Ne[104]=[je,mu];Ne[87]=[je,fu];Ne[119]=[je,fu];function Rd(e,t,n){let r=this,i,a;return o;function o(c){return !io(c)||!gu.call(r,r.previous)||ao(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(c))}function l(c){return io(c)?(e.consume(c),l):c===64?(e.consume(c),s):n(c)}function s(c){return c===46?e.check(Ld,p,u)(c):c===45||c===95||oe(c)?(a=true,e.consume(c),s):p(c)}function u(c){return e.consume(c),i=true,s}function p(c){return a&&i&&pe(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function Md(e,t,n){let r=this;return i;function i(o){return o!==87&&o!==119||!du.call(r,r.previous)||ao(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Pd,e.attempt(uu,e.attempt(cu,a),n),n)(o))}function a(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function Nd(e,t,n){let r=this,i="",a=false;return o;function o(c){return (c===72||c===104)&&hu.call(r,r.previous)&&!ao(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),l):n(c)}function l(c){if(pe(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),l;if(c===58){let m=i.toLowerCase();if(m==="http"||m==="https")return e.consume(c),s}return n(c)}function s(c){return c===47?(e.consume(c),a?u:(a=true,s)):n(c)}function u(c){return c===null||lt(c)||X(c)||Re(c)||st(c)?n(c):e.attempt(uu,e.attempt(cu,p),n)(c)}function p(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function Dd(e,t,n){let r=0;return i;function i(o){return (o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),a):n(o)}function a(o){return o===null?n(o):t(o)}}function Fd(e,t,n){let r,i,a;return o;function o(u){return u===46||u===95?e.check(pu,s,l)(u):u===null||X(u)||Re(u)||u!==45&&st(u)?s(u):(a=true,e.consume(u),o)}function l(u){return u===95?r=true:(i=r,r=void 0),e.consume(u),o}function s(u){return i||r||!a?n(u):t(u)}}function Od(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(pu,t,a)(o):o===null||X(o)||Re(o)?t(o):(e.consume(o),i)}function a(o){return o===41&&r++,e.consume(o),i}}function Ud(e,t,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),a):l===93?(e.consume(l),i):l===60||l===null||X(l)||Re(l)?t(l):n(l)}function i(l){return l===null||l===40||l===91||X(l)||Re(l)?t(l):r(l)}function a(l){return pe(l)?o(l):n(l)}function o(l){return l===59?(e.consume(l),r):pe(l)?(e.consume(l),o):n(l)}}function Bd(e,t,n){return r;function r(a){return e.consume(a),i}function i(a){return oe(a)?n(a):t(a)}}function du(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||X(e)}function hu(e){return !pe(e)}function gu(e){return !(e===47||io(e))}function io(e){return e===43||e===45||e===46||e===95||oe(e)}function ao(e){let t=e.length,n=false;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=true;break}if(r._gfmAutolinkLiteralWalkedInto){n=false;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=true),n}var Hd={tokenize:Kd,partial:true};function lo(){return {document:{91:{name:"gfmFootnoteDefinition",tokenize:Wd,continuation:{tokenize:qd},exit:Yd}},text:{91:{name:"gfmFootnoteCall",tokenize:$d},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:jd,resolveTo:Vd}}}}function jd(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let s=r.events[i][1];if(s.type==="labelImage"){o=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return l;function l(s){if(!o||!o._balanced)return n(s);let u=ge(r.sliceSerialize({start:o.end,end:r.now()}));return u.codePointAt(0)!==94||!a.includes(u.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function Vd(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;let o={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},s=[e[n+1],e[n+2],["enter",i,t],e[n+3],e[n+4],["enter",a,t],["exit",a,t],["enter",o,t],["enter",l,t],["exit",l,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(n,e.length-n+1,...s),e}function $d(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return l;function l(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),s}function s(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(a>999||c===93&&!o||c===null||c===91||X(c))return n(c);if(c===93){e.exit("chunkString");let m=e.exit("gfmFootnoteCallString");return i.includes(ge(r.sliceSerialize(m)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return X(c)||(o=true),a++,e.consume(c),c===92?p:u}function p(c){return c===91||c===92||c===93?(e.consume(c),a++,u):u(c)}}function Wd(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,l;return s;function s(d){return e.enter("gfmFootnoteDefinition")._container=true,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(d),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(d){return d===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(d),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",p):n(d)}function p(d){if(o>999||d===93&&!l||d===null||d===91||X(d))return n(d);if(d===93){e.exit("chunkString");let v=e.exit("gfmFootnoteDefinitionLabelString");return a=ge(r.sliceSerialize(v)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(d),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),m}return X(d)||(l=true),o++,e.consume(d),d===92?c:p}function c(d){return d===91||d===92||d===93?(e.consume(d),o++,p):p(d)}function m(d){return d===58?(e.enter("definitionMarker"),e.consume(d),e.exit("definitionMarker"),i.includes(a)||i.push(a),M(e,f,"gfmFootnoteDefinitionWhitespace")):n(d)}function f(d){return t(d)}}function qd(e,t,n){return e.check(Me,t,e.attempt(Hd,t,n))}function Yd(e){e.exit("gfmFootnoteDefinition");}function Kd(e,t,n){let r=this;return M(e,i,"gfmFootnoteDefinitionIndent",5);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],true).length===4?t(a):n(a)}}function so(e){let n=(e||{}).singleTilde,r={name:"strikethrough",tokenize:a,resolveAll:i};return n==null&&(n=true),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,l){let s=-1;for(;++s<o.length;)if(o[s][0]==="enter"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._close){let u=s;for(;u--;)if(o[u][0]==="exit"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._open&&o[s][1].end.offset-o[s][1].start.offset===o[u][1].end.offset-o[u][1].start.offset){o[s][1].type="strikethroughSequence",o[u][1].type="strikethroughSequence";let p={type:"strikethrough",start:Object.assign({},o[u][1].start),end:Object.assign({},o[s][1].end)},c={type:"strikethroughText",start:Object.assign({},o[u][1].end),end:Object.assign({},o[s][1].start)},m=[["enter",p,l],["enter",o[u][1],l],["exit",o[u][1],l],["enter",c,l]],f=l.parser.constructs.insideSpan.null;f&&ue(m,m.length,0,Ye(f,o.slice(u+1,s),l)),ue(m,m.length,0,[["exit",c,l],["enter",o[s][1],l],["exit",o[s][1],l],["exit",p,l]]),ue(o,u-1,s-u+3,m),s=u+m.length-2;break}}for(s=-1;++s<o.length;)o[s][1].type==="strikethroughSequenceTemporary"&&(o[s][1].type="data");return o}function a(o,l,s){let u=this.previous,p=this.events,c=0;return m;function m(d){return u===126&&p[p.length-1][1].type!=="characterEscape"?s(d):(o.enter("strikethroughSequenceTemporary"),f(d))}function f(d){let v=He(u);if(d===126)return c>1?s(d):(o.consume(d),c++,f);if(c<2&&!n)return s(d);let x=o.exit("strikethroughSequenceTemporary"),y=He(d);return x._open=!y||y===2&&!!v,x._close=!v||v===2&&!!y,l(d)}}}var ir=class{constructor(){this.map=[];}add(t,n,r){Xd(this,t,n,r);}consume(t){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(let a of i)t.push(a);i=r.pop();}this.map.length=0;}};function Xd(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1;}e.map.push([t,n,r]);}}function yu(e,t){let n=false,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let a=r.length-1;r[a]=r[a]==="left"?"center":"right";}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=true);t+=1;}return r}function uo(){return {flow:{null:{name:"table",tokenize:Gd,resolveAll:Jd}}}}function Gd(e,t,n){let r=this,i=0,a=0,o;return l;function l(w){let G=r.events.length-1;for(;G>-1;){let H=r.events[G][1].type;if(H==="lineEnding"||H==="linePrefix")G--;else break}let j=G>-1?r.events[G][1].type:null,T=j==="tableHead"||j==="tableRow"?_:s;return T===_&&r.parser.lazy[r.now().line]?n(w):T(w)}function s(w){return e.enter("tableHead"),e.enter("tableRow"),u(w)}function u(w){return w===124||(o=true,a+=1),p(w)}function p(w){return w===null?n(w):I(w)?a>1?(a=0,r.interrupt=true,e.exit("tableRow"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),f):n(w):F(w)?M(e,p,"whitespace")(w):(a+=1,o&&(o=false,i+=1),w===124?(e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),o=true,p):(e.enter("data"),c(w)))}function c(w){return w===null||w===124||X(w)?(e.exit("data"),p(w)):(e.consume(w),w===92?m:c)}function m(w){return w===92||w===124?(e.consume(w),c):c(w)}function f(w){return r.interrupt=false,r.parser.lazy[r.now().line]?n(w):(e.enter("tableDelimiterRow"),o=false,F(w)?M(e,d,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):d(w))}function d(w){return w===45||w===58?x(w):w===124?(o=true,e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),v):P(w)}function v(w){return F(w)?M(e,x,"whitespace")(w):x(w)}function x(w){return w===58?(a+=1,o=true,e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),y):w===45?(a+=1,y(w)):w===null||I(w)?L(w):P(w)}function y(w){return w===45?(e.enter("tableDelimiterFiller"),z(w)):P(w)}function z(w){return w===45?(e.consume(w),z):w===58?(o=true,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(w))}function S(w){return F(w)?M(e,L,"whitespace")(w):L(w)}function L(w){return w===124?d(w):w===null||I(w)?!o||i!==a?P(w):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(w)):P(w)}function P(w){return n(w)}function _(w){return e.enter("tableRow"),q(w)}function q(w){return w===124?(e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),q):w===null||I(w)?(e.exit("tableRow"),t(w)):F(w)?M(e,q,"whitespace")(w):(e.enter("data"),Y(w))}function Y(w){return w===null||w===124||X(w)?(e.exit("data"),q(w)):(e.consume(w),w===92?W:Y)}function W(w){return w===92||w===124?(e.consume(w),Y):Y(w)}}function Jd(e,t){let n=-1,r=true,i=0,a=[0,0,0,0],o=[0,0,0,0],l=false,s=0,u,p,c,m=new ir;for(;++n<e.length;){let f=e[n],d=f[1];f[0]==="enter"?d.type==="tableHead"?(l=false,s!==0&&(vu(m,t,s,u,p),p=void 0,s=0),u={type:"table",start:Object.assign({},d.start),end:Object.assign({},d.end)},m.add(n,0,[["enter",u,t]])):d.type==="tableRow"||d.type==="tableDelimiterRow"?(r=true,c=void 0,a=[0,0,0,0],o=[0,n+1,0,0],l&&(l=false,p={type:"tableBody",start:Object.assign({},d.start),end:Object.assign({},d.end)},m.add(n,0,[["enter",p,t]])),i=d.type==="tableDelimiterRow"?2:p?3:1):i&&(d.type==="data"||d.type==="tableDelimiterMarker"||d.type==="tableDelimiterFiller")?(r=false,o[2]===0&&(a[1]!==0&&(o[0]=o[1],c=or(m,t,a,i,void 0,c),a=[0,0,0,0]),o[2]=n)):d.type==="tableCellDivider"&&(r?r=false:(a[1]!==0&&(o[0]=o[1],c=or(m,t,a,i,void 0,c)),a=o,o=[a[1],n,0,0])):d.type==="tableHead"?(l=true,s=n):d.type==="tableRow"||d.type==="tableDelimiterRow"?(s=n,a[1]!==0?(o[0]=o[1],c=or(m,t,a,i,n,c)):o[1]!==0&&(c=or(m,t,o,i,n,c)),i=0):i&&(d.type==="data"||d.type==="tableDelimiterMarker"||d.type==="tableDelimiterFiller")&&(o[3]=n);}for(s!==0&&vu(m,t,s,u,p),m.consume(t.events),n=-1;++n<t.events.length;){let f=t.events[n];f[0]==="enter"&&f[1].type==="table"&&(f[1]._align=yu(t.events,n));}return e}function or(e,t,n,r,i,a){let o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(a.end=Object.assign({},Ft(t.events,n[0])),e.add(n[0],0,[["exit",a,t]]));let s=Ft(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",a,t]]),n[2]!==0){let u=Ft(t.events,n[2]),p=Ft(t.events,n[3]),c={type:l,start:Object.assign({},u),end:Object.assign({},p)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){let m=t.events[n[2]],f=t.events[n[3]];if(m[1].end=Object.assign({},f[1].end),m[1].type="chunkText",m[1].contentType="text",n[3]>n[2]+1){let d=n[2]+1,v=n[3]-n[2]-1;e.add(d,v,[]);}}e.add(n[3]+1,0,[["exit",c,t]]);}return i!==void 0&&(a.end=Object.assign({},Ft(t.events,i)),e.add(i,0,[["exit",a,t]]),a=void 0),a}function vu(e,t,n,r,i){let a=[],o=Ft(t.events,n);i&&(i.end=Object.assign({},o),a.push(["exit",i,t])),r.end=Object.assign({},o),a.push(["exit",r,t]),e.add(n+1,0,a);}function Ft(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}var Qd={name:"tasklistCheck",tokenize:Zd};function co(){return {text:{91:Qd}}}function Zd(e,t,n){let r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),a)}function a(s){return X(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),o):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),o):n(s)}function o(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(s)}function l(s){return I(s)?t(s):F(s)?e.check({tokenize:eh},t,n)(s):n(s)}}function eh(e,t,n){return M(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function bu(e){return Ln([oo(),lo(),so(e),uo(),co()])}var th={};function ar(e){let t=this,n=e||th,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),a=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(bu(n)),a.push(no()),o.push(ro(n));}var nh="fa7e533-2026-11-24T19:47:38.523Z".split("-")[0],rh="https://chat.converzen.de",xu=()=>b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:b("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"})}),wu=()=>b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:b("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),ih=()=>b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:b("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})}),oh=()=>b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:b("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),Ot=({custom:e,fallback:t,className:n})=>e?b("span",{className:n,dangerouslySetInnerHTML:{__html:e}}):t,ah=({title:e,subtitle:t,onClose:n,onClear:r,darkMode:i,icons:a,authControl:o,accessory:l})=>b("div",{className:`cvz-p-4 cvz-shadow-md cvz-flex cvz-justify-between cvz-items-start ${i?"cvz-bg-gradient-to-b cvz-from-gray-900 cvz-to-gray-800 cvz-text-white":"cvz-bg-gradient-to-b cvz-from-blue-600 cvz-to-blue-500 cvz-text-white"}`,children:[b("div",{className:"cvz-flex cvz-items-center cvz-gap-3",children:[b("div",{className:"cvz-relative",children:[b("div",{className:`cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-border-2 ${i?"cvz-border-gray-800":"cvz-border-blue-600"}`}),b("div",{className:"cvz-absolute cvz-top-0 cvz-left-0 cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-animate-ping cvz-opacity-75"})]}),b("div",{children:[b("h3",{className:"cvz-font-bold cvz-text-lg cvz-leading-tight",children:e}),t&&b("p",{className:`cvz-text-xs cvz-mt-0.5 ${i?"cvz-text-gray-300":"cvz-text-blue-100"}`,children:t})]})]}),b("div",{className:"cvz-flex cvz-gap-2 cvz-items-center",children:[l,o,b("button",{onClick:r,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Clear History",children:b(Ot,{custom:a?.clear,fallback:b(oh,{}),className:"cvz-w-5 cvz-h-5"})}),b("button",{onClick:n,className:`cvz-transition-colors cvz-p-1 cvz-rounded-md ${i?"cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50":"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50"}`,title:"Close Chat",children:b(Ot,{custom:a?.close,fallback:b(wu,{}),className:"cvz-w-6 cvz-h-6"})})]})]}),lh=({content:e,enableMarkdown:t,darkMode:n})=>t?b("div",{className:"cvz-markdown-content",children:b(Ei,{remarkPlugins:[ar],components:{p:({children:r})=>b("p",{className:`cvz-mb-2 cvz-last:cvz-mb-0 ${n?"cvz-text-gray-100":""}`,children:r}),h1:({children:r})=>b("h1",{className:`cvz-text-xl cvz-font-bold cvz-mb-2 cvz-mt-4 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h2:({children:r})=>b("h2",{className:`cvz-text-lg cvz-font-bold cvz-mb-2 cvz-mt-3 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),h3:({children:r})=>b("h3",{className:`cvz-text-base cvz-font-bold cvz-mb-1 cvz-mt-2 cvz-first:cvz-mt-0 ${n?"cvz-text-gray-100":""}`,children:r}),ul:({children:r})=>b("ul",{className:`cvz-list-disc cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),ol:({children:r})=>b("ol",{className:`cvz-list-decimal cvz-list-inside cvz-mb-2 cvz-space-y-1 ${n?"cvz-text-gray-100":""}`,children:r}),li:({children:r})=>b("li",{className:"cvz-ml-2",children:r}),code:({children:r})=>b("code",{className:`cvz-px-1 cvz-py-0.5 cvz-rounded cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),pre:({children:r})=>b("pre",{className:`cvz-p-2 cvz-rounded cvz-overflow-x-auto cvz-mb-2 cvz-text-sm cvz-font-mono ${n?"cvz-bg-gray-700 cvz-text-gray-100":"cvz-bg-gray-100"}`,children:r}),blockquote:({children:r})=>b("blockquote",{className:`cvz-border-l-4 cvz-pl-3 cvz-italic cvz-mb-2 ${n?"cvz-border-gray-600 cvz-text-gray-300":"cvz-border-gray-300"}`,children:r}),strong:({children:r})=>b("strong",{className:"cvz-font-bold",children:r}),em:({children:r})=>b("em",{className:"cvz-italic",children:r}),a:({children:r,href:i})=>b("a",{href:i,className:`cvz-underline ${n?"cvz-text-blue-400 cvz-hover:cvz-text-blue-300":"cvz-text-blue-600 cvz-hover:cvz-text-blue-800"}`,target:"_blank",rel:"noopener noreferrer",children:r}),table:({children:r})=>b("div",{className:"cvz-overflow-x-auto cvz-mb-2",children:b("table",{className:`cvz-w-full cvz-text-sm cvz-border-collapse ${n?"cvz-text-gray-100":""}`,children:r})}),thead:({children:r})=>b("thead",{className:`${n?"cvz-bg-gray-700":"cvz-bg-gray-100"}`,children:r}),tbody:({children:r})=>b("tbody",{children:r}),tr:({children:r})=>b("tr",{className:`cvz-border-b ${n?"cvz-border-gray-600":"cvz-border-gray-200"}`,children:r}),th:({children:r})=>b("th",{className:`cvz-px-3 cvz-py-1.5 cvz-text-left cvz-font-semibold cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r}),td:({children:r})=>b("td",{className:`cvz-px-3 cvz-py-1.5 cvz-border ${n?"cvz-border-gray-600":"cvz-border-gray-300"}`,children:r})},children:e})}):Le("span",null,e),sh="Anzeige",uh=({cards:e,sponsoredLabel:t,darkMode:n})=>b("div",{className:"cvz-mt-2 cvz-flex cvz-flex-col cvz-gap-2","data-cvz-cards":true,children:e.map(r=>{let i=r.sponsored!==false;return b("a",{href:r.url,target:"_blank",rel:i?"sponsored noopener noreferrer":"noopener noreferrer",className:`cvz-flex cvz-gap-3 cvz-items-center cvz-p-2 cvz-rounded-xl cvz-border cvz-no-underline cvz-transition-colors ${n?"cvz-bg-gray-800 cvz-border-gray-700 cvz-text-gray-100 hover:cvz-bg-gray-700":"cvz-bg-white cvz-border-gray-200 cvz-text-gray-800 hover:cvz-bg-gray-50"}`,children:[r.imageUrl&&b("img",{src:r.imageUrl,alt:"",loading:"lazy",className:"cvz-w-12 cvz-h-12 cvz-rounded-lg cvz-object-cover cvz-flex-shrink-0"}),b("span",{className:"cvz-flex cvz-flex-col cvz-min-w-0 cvz-text-xs",children:[i&&b("span",{className:`cvz-uppercase cvz-tracking-wide cvz-font-semibold ${n?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:t||sh}),b("span",{className:"cvz-font-semibold cvz-text-sm cvz-truncate",children:r.title}),r.description&&b("span",{className:n?"cvz-text-gray-300":"cvz-text-gray-600",children:r.description}),r.merchant&&b("span",{className:n?"cvz-text-gray-400":"cvz-text-gray-500",children:r.merchant})]})]},r.url)})}),ch=({messages:e,isStreaming:t,streamingMessage:n,thinkingMessage:r,activeToolCall:i,isFinalizingRef:a,messagesEndRef:o,enableMarkdown:l,darkMode:s,icons:u,sponsoredLabel:p,interruptedLabel:c})=>{let m=bn(null),[f,d]=he(true);return Te(()=>{let v=m.current;if(!v)return;let x=()=>{let{scrollTop:y,scrollHeight:z,clientHeight:S}=v,L=z-y-S<100;d(L);};return v.addEventListener("scroll",x),()=>v.removeEventListener("scroll",x)},[]),Te(()=>{f&&o.current&&o.current.scrollIntoView({behavior:"smooth"});},[e,n,r,i,f,o]),b("div",{ref:m,className:`cvz-flex-1 cvz-overflow-y-auto cvz-p-4 cvz-space-y-4 ${s?"cvz-bg-gray-900 cvz-scrollbar-dark":"cvz-bg-gray-50 cvz-scrollbar-light"}`,children:[e.length===0&&!n&&b("div",{className:`cvz-flex cvz-flex-col cvz-items-center cvz-justify-center cvz-h-full cvz-space-y-2 ${s?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:[b(Ot,{custom:u?.launcher,fallback:b(xu,{}),className:"cvz-w-6 cvz-h-6"}),b("p",{className:"cvz-text-sm",children:"Start a conversation"})]}),e.map(v=>b("div",{children:[b("div",{className:`cvz-flex ${v.role==="USER"?"cvz-justify-end":"cvz-justify-start"}`,children:b("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-text-sm cvz-shadow-sm ${v.role==="USER"?s?"cvz-bg-blue-500 cvz-text-white cvz-rounded-br-none":"cvz-bg-blue-600 cvz-text-white cvz-rounded-br-none":s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border cvz-border-gray-700 cvz-rounded-bl-none":"cvz-bg-white cvz-text-gray-800 cvz-border cvz-border-gray-100 cvz-rounded-bl-none"}`,children:b(lh,{content:v.content,enableMarkdown:l,darkMode:s})})}),v.role==="ASSISTANT"&&v.interrupted&&b("div",{className:`cvz-mt-1 cvz-ml-1 cvz-text-[11px] cvz-italic ${s?"cvz-text-gray-500":"cvz-text-gray-400"}`,"data-cvz-interrupted":true,children:c||"Interrupted"}),v.role==="ASSISTANT"&&v.cards&&v.cards.length>0&&b("div",{className:"cvz-flex cvz-justify-start",children:b("div",{className:"cvz-max-w-[85%] cvz-w-full",children:b(uh,{cards:v.cards,sponsoredLabel:p,darkMode:s})})})]},v.createdAt.toString())),t&&n&&!a.current&&b("div",{className:"cvz-flex cvz-justify-start",children:b("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-text-sm cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-text-gray-100 cvz-border-gray-700":"cvz-bg-white cvz-text-gray-800 cvz-border-gray-100"}`,children:n})}),t&&!n&&b("div",{className:"cvz-flex cvz-justify-start",children:b("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-shadow-sm cvz-border ${s?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:i?b("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:["Calling ",i,"\u2026"]}):r?b("span",{className:`cvz-text-sm cvz-italic ${s?"cvz-text-gray-400":"cvz-text-gray-500"}`,children:r}):b("div",{className:"cvz-flex cvz-space-x-1",children:[b("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"0ms"}}),b("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"150ms"}}),b("div",{className:`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${s?"cvz-bg-gray-500":"cvz-bg-gray-400"}`,style:{animationDelay:"300ms"}})]})})}),b("div",{ref:o})]})},ph=({value:e,onChange:t,onSubmit:n,isLoading:r,placeholder:i,darkMode:a,icons:o,accessory:l})=>b("form",{onSubmit:n,className:`cvz-p-4 cvz-border-t ${a?"cvz-bg-gray-800 cvz-border-gray-700":"cvz-bg-white cvz-border-gray-100"}`,children:[b("div",{className:"cvz-flex cvz-items-center cvz-gap-2",children:[l,b("div",{className:"cvz-relative cvz-flex cvz-items-center cvz-flex-1",children:[b("input",{type:"text",value:e,onChange:s=>t(s.target.value),placeholder:i,className:`cvz-w-full cvz-border cvz-text-sm cvz-rounded-full cvz-pl-4 cvz-pr-12 cvz-py-3 cvz-focus:cvz-outline-none cvz-focus:cvz-ring-1 cvz-transition-all ${a?"cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100 cvz-placeholder-gray-400 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500":"cvz-bg-gray-50 cvz-border-gray-200 cvz-text-gray-900 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500"}`}),b("button",{type:"submit",disabled:!e.trim()||r,className:`cvz-absolute cvz-right-2 cvz-p-2 cvz-text-white cvz-rounded-full cvz-disabled:cvz-opacity-50 cvz-transition-colors cvz-shadow-sm ${a?"cvz-bg-blue-500 cvz-hover:cvz-bg-blue-600 cvz-disabled:cvz-hover:cvz-bg-blue-500":"cvz-bg-blue-600 cvz-hover:cvz-bg-blue-700 cvz-disabled:cvz-hover:cvz-bg-blue-600"}`,children:b(Ot,{custom:o?.send,fallback:b(ih,{}),className:"cvz-w-5 cvz-h-5"})})]})]}),b("div",{className:"cvz-text-center cvz-mt-2",children:b("p",{className:`cvz-text-[10px] ${a?"cvz-text-gray-500":"cvz-text-gray-400"}`,children:["Powered by ConverZen",b("span",{className:a?"cvz-text-gray-600":"cvz-text-gray-300",children:[" \xB7 ",nh]})]})})]}),ku=({config:e,core:t,headerAccessory:n,inputAccessory:r,footer:i})=>{let[a,o]=he(""),[l,s]=he(false),u=bn(null),p=async z=>{if(z?.preventDefault(),!a.trim()||t.isStreaming)return;let S=a;o(""),await t.sendMessage(S);},c=async()=>{window.confirm("Are you sure you want to clear your chat history?")&&await t.clearHistory();},m=Ta(e.style),f=Pa(e.style),d=La(e.style),v=Ra(e.style,t.isOpen),x=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="bottom-left")||typeof e.style.position=="object"&&e.style.position.bottom,y=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="top-right")||typeof e.style.position=="object"&&e.style.position.right;return b("div",{className:"cvz-fixed cvz-z-[9999] cvz-font-sans",style:m,children:[b("div",{className:`
          cvz-absolute cvz-rounded-2xl cvz-shadow-2xl cvz-flex cvz-flex-col cvz-overflow-hidden
          cvz-transition-all cvz-duration-300
          ${e.darkMode?"cvz-bg-gray-800":"cvz-bg-white"}
          ${x?"cvz-bottom-20":"cvz-top-20"}
          ${y?"cvz-right-0":"cvz-left-0"}
          ${x&&y?"cvz-origin-bottom-right":x&&!y?"cvz-origin-bottom-left":!x&&y?"cvz-origin-top-right":"cvz-origin-top-left"}
          ${t.isOpen?"cvz-opacity-100 cvz-scale-100 cvz-translate-y-0":"cvz-opacity-0 cvz-scale-95 cvz-translate-y-4 cvz-pointer-events-none"}
        `,style:{...f,borderColor:d,borderWidth:"1px",borderStyle:"solid"},children:[b(ah,{title:e.headerMsg||"Support Chat",subtitle:e.subheaderMsg||"We typically reply in a few minutes",onClose:()=>t.close(),onClear:c,darkMode:e.darkMode,icons:e.icons,accessory:n,authControl:e.endUserLicensing?b("button",{onClick:()=>s(true),className:`cvz-text-xs cvz-font-medium cvz-px-2 cvz-py-1 cvz-rounded-md cvz-transition-colors cvz-whitespace-nowrap ${e.darkMode?"cvz-text-gray-200 hover:cvz-bg-gray-700/50":"cvz-text-white hover:cvz-bg-blue-600/50"}`,title:t.endUserAuth?`Signed in as ${t.endUserAuth.email}`:"Authenticate",children:t.endUserAuth?"Account":"Authenticate"}):void 0}),b("div",{ref:z=>t.setCaptchaContainer(z),className:`cvz-flex cvz-justify-center cvz-overflow-hidden cvz-transition-all cvz-duration-200 ${t.captchaPending?"cvz-max-h-32 cvz-py-2":"cvz-max-h-0 cvz-py-0"}`}),b(ch,{messages:t.messages,isStreaming:t.isStreaming,streamingMessage:t.streamingMessage,thinkingMessage:t.thinkingMessage,activeToolCall:t.activeToolCall,isFinalizingRef:t.isFinalizingRef,messagesEndRef:u,enableMarkdown:e.enableMarkdown,darkMode:e.darkMode,icons:e.icons,sponsoredLabel:e.sponsoredLabel,interruptedLabel:e.voiceInterruptedLabel}),t.showAuthNudge&&!nt(t.endUserAuth)&&b("div",{className:`cvz-px-4 cvz-py-2 cvz-text-xs cvz-flex cvz-items-center cvz-justify-between cvz-gap-2 ${e.darkMode?"cvz-bg-amber-900/40 cvz-text-amber-200":"cvz-bg-amber-50 cvz-text-amber-800"}`,children:[b("span",{children:"You've reached the free limit - authenticate to keep chatting."}),b("button",{onClick:()=>s(true),className:"cvz-underline cvz-font-medium cvz-shrink-0",children:"Authenticate"})]}),b(ph,{value:a,onChange:o,onSubmit:p,isLoading:t.isLoading||t.isStreaming,placeholder:e.promptPlaceholder||"Type a message...",darkMode:e.darkMode,icons:e.icons,accessory:r}),i,e.endUserLicensing&&b(Ia,{open:l,onClose:()=>s(false),darkMode:e.darkMode,baseUrl:e.chatUrl||rh,getBaseAuth:()=>t.getTenantAuthToken(),endUserAuth:t.endUserAuth,onAuthenticated:t.authenticateEndUser,initialEmail:ga()??void 0})]}),b("button",{onClick:()=>t.isOpen?t.close():t.open(),className:`
          cvz-flex cvz-items-center cvz-justify-center
          cvz-w-14 cvz-h-14 cvz-rounded-full cvz-shadow-lg cvz-transition-all cvz-duration-300
          ${t.isOpen?"cvz-rotate-90":"cvz-hover:cvz-scale-105"}
        `,style:{backgroundColor:v.backgroundColor},onMouseEnter:z=>{!t.isOpen&&e.style?.buttonColor?.hover&&(z.currentTarget.style.backgroundColor=e.style.buttonColor.hover);},onMouseLeave:z=>{t.isOpen||(z.currentTarget.style.backgroundColor=v.backgroundColor);},children:b("div",{className:"cvz-text-white",children:t.isOpen?b(Ot,{custom:e.icons?.close,fallback:b(wu,{}),className:"cvz-w-6 cvz-h-6"}):b(Ot,{custom:e.icons?.launcher,fallback:b(xu,{}),className:"cvz-w-6 cvz-h-6"})})})]})};var fh=({config:e})=>{let t=Aa(e);return b(ku,{config:e,core:t})},_u=fh;var zu=`*, ::before, ::after {
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

.cvz-bg-amber-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 243 199 / var(--tw-bg-opacity, 1));
}

.cvz-bg-amber-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 251 235 / var(--tw-bg-opacity, 1));
}

.cvz-bg-amber-500\\/20 {
  background-color: rgb(245 158 11 / 0.2);
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

.cvz-text-amber-300 {
  --tw-text-opacity: 1;
  color: rgb(252 211 77 / var(--tw-text-opacity, 1));
}

.cvz-text-amber-700 {
  --tw-text-opacity: 1;
  color: rgb(180 83 9 / var(--tw-text-opacity, 1));
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

.hover\\:cvz-bg-amber-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 230 138 / var(--tw-bg-opacity, 1));
}

.hover\\:cvz-bg-amber-500\\/30:hover {
  background-color: rgb(245 158 11 / 0.3);
}

.hover\\:cvz-bg-blue-600\\/50:hover {
  background-color: rgb(37 99 235 / 0.5);
}

.hover\\:cvz-bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1));
}

.hover\\:cvz-bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}

.hover\\:cvz-bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
}

.hover\\:cvz-bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity, 1));
}

.hover\\:cvz-bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1));
}

.hover\\:cvz-bg-gray-700\\/50:hover {
  background-color: rgb(55 65 81 / 0.5);
}

.hover\\:cvz-bg-red-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(185 28 28 / var(--tw-bg-opacity, 1));
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
`;if(U){U.debounceRendering;U.debounceRendering=t=>{requestAnimationFrame(t);};}function Su(e,t,n="cvz-widget-host"){let r=document.createElement("div");r.id=n,document.body.appendChild(r);let i=r.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=zu,i.appendChild(a);let o=document.createElement("div");return o.id="cvz-root",i.appendChild(o),Yt(Le(t,{config:e}),o),{hostElement:r,root:o}}var po=class{hostElement=null;root=null;buildId="fa7e533-2026-11-24T19:47:38.523Z";init(t){if(this.hostElement){console.warn("cvzWidget is already initialized.");return}console.log("init: Initializing cvzWidget...",this.buildId),{hostElement:this.hostElement,root:this.root}=Su(t,_u);}addCards(t){let n=Ea();if(!n){console.warn("addCards: cvzWidget is not initialized.");return}n.addCards(t);}hide(){if(!this.hostElement){console.warn("hide: cvzWidget is not initialized.");return}this.root&&(Yt(null,this.root),this.root=null),this.hostElement&&(this.hostElement.remove(),this.hostElement=null);}},Cu=new po;typeof window<"u"&&(window.cvzWidget=Cu);var cS=Cu;export{cS as default,Su as mountApp};