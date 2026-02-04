"use strict";var GMCWidget=(()=>{var id=Object.create;var fr=Object.defineProperty;var ud=Object.getOwnPropertyDescriptor;var sd=Object.getOwnPropertyNames;var ad=Object.getPrototypeOf,cd=Object.prototype.hasOwnProperty;var Ke=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),dd=(e,t)=>{for(var n in t)fr(e,n,{get:t[n],enumerable:!0})},cu=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of sd(t))!cd.call(e,o)&&o!==n&&fr(e,o,{get:()=>t[o],enumerable:!(r=ud(t,o))||r.enumerable});return e};var gn=(e,t,n)=>(n=e!=null?id(ad(e)):{},cu(t||!e||!e.__esModule?fr(n,"default",{value:e,enumerable:!0}):n,e)),fd=e=>cu(fr({},"__esModule",{value:!0}),e);var zu=Ke(P=>{"use strict";var yn=Symbol.for("react.element"),pd=Symbol.for("react.portal"),vd=Symbol.for("react.fragment"),md=Symbol.for("react.strict_mode"),hd=Symbol.for("react.profiler"),gd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),wd=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),Sd=Symbol.for("react.memo"),zd=Symbol.for("react.lazy"),du=Symbol.iterator;function xd(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var vu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mu=Object.assign,hu={};function $t(e,t,n){this.props=e,this.context=t,this.refs=hu,this.updater=n||vu}$t.prototype.isReactComponent={};$t.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$t.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gu(){}gu.prototype=$t.prototype;function Vo(e,t,n){this.props=e,this.context=t,this.refs=hu,this.updater=n||vu}var Wo=Vo.prototype=new gu;Wo.constructor=Vo;mu(Wo,$t.prototype);Wo.isPureReactComponent=!0;var fu=Array.isArray,yu=Object.prototype.hasOwnProperty,Ho={current:null},wu={key:!0,ref:!0,__self:!0,__source:!0};function ku(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)yu.call(t,r)&&!wu.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:yn,type:e,key:l,ref:i,props:o,_owner:Ho.current}}function Cd(e,t){return{$$typeof:yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bo(e){return typeof e=="object"&&e!==null&&e.$$typeof===yn}function Ed(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pu=/\/+/g;function $o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ed(""+e.key):t.toString(36)}function vr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case yn:case pd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+$o(i,0):r,fu(o)?(n="",e!=null&&(n=e.replace(pu,"$&/")+"/"),vr(o,t,n,"",function(c){return c})):o!=null&&(Bo(o)&&(o=Cd(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(pu,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",fu(e))for(var u=0;u<e.length;u++){l=e[u];var s=r+$o(l,u);i+=vr(l,t,n,s,o)}else if(s=xd(e),typeof s=="function")for(e=s.call(e),u=0;!(l=e.next()).done;)l=l.value,s=r+$o(l,u++),i+=vr(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function pr(e,t,n){if(e==null)return e;var r=[],o=0;return vr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function _d(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},mr={transition:null},Nd={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:mr,ReactCurrentOwner:Ho};function Su(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!Bo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=$t;P.Fragment=vd;P.Profiler=hd;P.PureComponent=Vo;P.StrictMode=md;P.Suspense=kd;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nd;P.act=Su;P.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Ho.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)yu.call(t,s)&&!wu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:yn,type:e.type,key:o,ref:l,props:r,_owner:i}};P.createContext=function(e){return e={$$typeof:yd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gd,_context:e},e.Consumer=e};P.createElement=ku;P.createFactory=function(e){var t=ku.bind(null,e);return t.type=e,t};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:wd,render:e}};P.isValidElement=Bo;P.lazy=function(e){return{$$typeof:zd,_payload:{_status:-1,_result:e},_init:_d}};P.memo=function(e,t){return{$$typeof:Sd,type:e,compare:t===void 0?null:t}};P.startTransition=function(e){var t=mr.transition;mr.transition={};try{e()}finally{mr.transition=t}};P.unstable_act=Su;P.useCallback=function(e,t){return ue.current.useCallback(e,t)};P.useContext=function(e){return ue.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};P.useEffect=function(e,t){return ue.current.useEffect(e,t)};P.useId=function(){return ue.current.useId()};P.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};P.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};P.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};P.useMemo=function(e,t){return ue.current.useMemo(e,t)};P.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};P.useRef=function(e){return ue.current.useRef(e)};P.useState=function(e){return ue.current.useState(e)};P.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};P.useTransition=function(){return ue.current.useTransition()};P.version="18.3.1"});var wn=Ke((ev,xu)=>{"use strict";xu.exports=zu()});var Iu=Ke(M=>{"use strict";function Xo(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<hr(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Re(e){return e.length===0?null:e[0]}function yr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,l=o>>>1;r<l;){var i=2*(r+1)-1,u=e[i],s=i+1,c=e[s];if(0>hr(u,n))s<o&&0>hr(c,u)?(e[r]=c,e[s]=n,r=s):(e[r]=u,e[i]=n,r=i);else if(s<o&&0>hr(c,n))e[r]=c,e[s]=n,r=s;else break e}}return t}function hr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Cu=performance,M.unstable_now=function(){return Cu.now()}):(Qo=Date,Eu=Qo.now(),M.unstable_now=function(){return Qo.now()-Eu});var Cu,Qo,Eu,Ae=[],rt=[],Pd=1,Ce=null,te=3,wr=!1,Ct=!1,Sn=!1,Pu=typeof setTimeout=="function"?setTimeout:null,Tu=typeof clearTimeout=="function"?clearTimeout:null,_u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Go(e){for(var t=Re(rt);t!==null;){if(t.callback===null)yr(rt);else if(t.startTime<=e)yr(rt),t.sortIndex=t.expirationTime,Xo(Ae,t);else break;t=Re(rt)}}function Zo(e){if(Sn=!1,Go(e),!Ct)if(Re(Ae)!==null)Ct=!0,qo(Jo);else{var t=Re(rt);t!==null&&bo(Zo,t.startTime-e)}}function Jo(e,t){Ct=!1,Sn&&(Sn=!1,Tu(zn),zn=-1),wr=!0;var n=te;try{for(Go(t),Ce=Re(Ae);Ce!==null&&(!(Ce.expirationTime>t)||e&&!Mu());){var r=Ce.callback;if(typeof r=="function"){Ce.callback=null,te=Ce.priorityLevel;var o=r(Ce.expirationTime<=t);t=M.unstable_now(),typeof o=="function"?Ce.callback=o:Ce===Re(Ae)&&yr(Ae),Go(t)}else yr(Ae);Ce=Re(Ae)}if(Ce!==null)var l=!0;else{var i=Re(rt);i!==null&&bo(Zo,i.startTime-t),l=!1}return l}finally{Ce=null,te=n,wr=!1}}var kr=!1,gr=null,zn=-1,Lu=5,Ru=-1;function Mu(){return!(M.unstable_now()-Ru<Lu)}function Ko(){if(gr!==null){var e=M.unstable_now();Ru=e;var t=!0;try{t=gr(!0,e)}finally{t?kn():(kr=!1,gr=null)}}else kr=!1}var kn;typeof _u=="function"?kn=function(){_u(Ko)}:typeof MessageChannel<"u"?(Yo=new MessageChannel,Nu=Yo.port2,Yo.port1.onmessage=Ko,kn=function(){Nu.postMessage(null)}):kn=function(){Pu(Ko,0)};var Yo,Nu;function qo(e){gr=e,kr||(kr=!0,kn())}function bo(e,t){zn=Pu(function(){e(M.unstable_now())},t)}M.unstable_IdlePriority=5;M.unstable_ImmediatePriority=1;M.unstable_LowPriority=4;M.unstable_NormalPriority=3;M.unstable_Profiling=null;M.unstable_UserBlockingPriority=2;M.unstable_cancelCallback=function(e){e.callback=null};M.unstable_continueExecution=function(){Ct||wr||(Ct=!0,qo(Jo))};M.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Lu=0<e?Math.floor(1e3/e):5};M.unstable_getCurrentPriorityLevel=function(){return te};M.unstable_getFirstCallbackNode=function(){return Re(Ae)};M.unstable_next=function(e){switch(te){case 1:case 2:case 3:var t=3;break;default:t=te}var n=te;te=t;try{return e()}finally{te=n}};M.unstable_pauseExecution=function(){};M.unstable_requestPaint=function(){};M.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=te;te=e;try{return t()}finally{te=n}};M.unstable_scheduleCallback=function(e,t,n){var r=M.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:Pd++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Xo(rt,e),Re(Ae)===null&&e===Re(rt)&&(Sn?(Tu(zn),zn=-1):Sn=!0,bo(Zo,n-r))):(e.sortIndex=o,Xo(Ae,e),Ct||wr||(Ct=!0,qo(Jo))),e};M.unstable_shouldYield=Mu;M.unstable_wrapCallback=function(e){var t=te;return function(){var n=te;te=t;try{return e.apply(this,arguments)}finally{te=n}}}});var Du=Ke((nv,Ou)=>{"use strict";Ou.exports=Iu()});var Ac=Ke(ze=>{"use strict";var Td=wn(),ke=Du();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ws=new Set,Bn={};function Ft(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Bn[e]=t,e=0;e<t.length;e++)Ws.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=Object.prototype.hasOwnProperty,Ld=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ju={},Fu={};function Rd(e){return zl.call(Fu,e)?!0:zl.call(ju,e)?!1:Ld.test(e)?Fu[e]=!0:(ju[e]=!0,!1)}function Md(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Id(e,t,n,r){if(t===null||typeof t>"u"||Md(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var vi=/[\-:]([a-z])/g;function mi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vi,mi);ee[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vi,mi);ee[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vi,mi);ee[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function hi(e,t,n,r){var o=ee.hasOwnProperty(t)?ee[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Id(t,n,o,r)&&(n=null),r||o===null?Rd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),gi=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),Hs=Symbol.for("react.provider"),Bs=Symbol.for("react.context"),yi=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),El=Symbol.for("react.suspense_list"),wi=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),Qs=Symbol.for("react.offscreen"),Uu=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=Uu&&e[Uu]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,el;function Rn(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,u=l.length-1;1<=i&&0<=u&&o[i]!==l[u];)u--;for(;1<=i&&0<=u;i--,u--)if(o[i]!==l[u]){if(i!==1||u!==1)do if(i--,u--,0>u||o[i]!==l[u]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function Od(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function _l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case Ht:return"Portal";case xl:return"Profiler";case gi:return"StrictMode";case Cl:return"Suspense";case El:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bs:return(e.displayName||"Context")+".Consumer";case Hs:return(e._context.displayName||"Context")+".Provider";case yi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wi:return t=e.displayName||null,t!==null?t:_l(e.type)||"Memo";case lt:t=e._payload,e=e._init;try{return _l(e(t))}catch{}}return null}function Dd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _l(t);case 8:return t===gi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ks(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jd(e){var t=Ks(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=jd(e))}function Ys(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ks(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nl(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xs(e,t){t=t.checked,t!=null&&hi(e,"checked",t,!1)}function Pl(e,t){Xs(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tl(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tl(e,t,n){(t!=="number"||Zr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Mn(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function Gs(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Js=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fd=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Fd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function qs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function bs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=qs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ud=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ml(e,t){if(t){if(Ud[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ol=null;function ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,nn=null,rn=null;function Hu(e){if(e=ar(e)){if(typeof Dl!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Eo(t),Dl(e.stateNode,e.type,t))}}function ea(e){nn?rn?rn.push(e):rn=[e]:nn=e}function ta(){if(nn){var e=nn,t=rn;if(rn=nn=null,Hu(e),t)for(e=0;e<t.length;e++)Hu(t[e])}}function na(e,t){return e(t)}function ra(){}var rl=!1;function oa(e,t,n){if(rl)return e(t,n);rl=!0;try{return na(e,t,n)}finally{rl=!1,(nn!==null||rn!==null)&&(ra(),ta())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var jl=!1;if(qe)try{Vt={},Object.defineProperty(Vt,"passive",{get:function(){jl=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch{jl=!1}var Vt;function Ad(e,t,n,r,o,l,i,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var jn=!1,Jr=null,qr=!1,Fl=null,$d={onError:function(e){jn=!0,Jr=e}};function Vd(e,t,n,r,o,l,i,u,s){jn=!1,Jr=null,Ad.apply($d,arguments)}function Wd(e,t,n,r,o,l,i,u,s){if(Vd.apply(this,arguments),jn){if(jn){var c=Jr;jn=!1,Jr=null}else throw Error(h(198));qr||(qr=!0,Fl=c)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function la(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bu(e){if(Ut(e)!==e)throw Error(h(188))}function Hd(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Bu(o),e;if(l===r)return Bu(o),t;l=l.sibling}throw Error(h(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i){for(u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function ia(e){return e=Hd(e),e!==null?ua(e):null}function ua(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ua(e);if(t!==null)return t;e=e.sibling}return null}var sa=ke.unstable_scheduleCallback,Qu=ke.unstable_cancelCallback,Bd=ke.unstable_shouldYield,Qd=ke.unstable_requestPaint,H=ke.unstable_now,Kd=ke.unstable_getCurrentPriorityLevel,Si=ke.unstable_ImmediatePriority,aa=ke.unstable_UserBlockingPriority,br=ke.unstable_NormalPriority,Yd=ke.unstable_LowPriority,ca=ke.unstable_IdlePriority,So=null,He=null;function Xd(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(So,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:Jd,Gd=Math.log,Zd=Math.LN2;function Jd(e){return e>>>=0,e===0?32:31-(Gd(e)/Zd|0)|0}var Cr=64,Er=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~o;u!==0?r=In(u):(l&=i,l!==0&&(r=In(l)))}else i=n&~o,i!==0?r=In(i):l!==0&&(r=In(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-je(t),o=1<<n,r|=e[n],t&=~o;return r}function qd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-je(l),u=1<<i,s=o[i];s===-1?((u&n)===0||(u&r)!==0)&&(o[i]=qd(u,t)):s<=t&&(e.expiredLanes|=u),l&=~u}}function Ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function da(){var e=Cr;return Cr<<=1,(Cr&4194240)===0&&(Cr=64),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-je(t),e[t]=n}function ef(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-je(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var R=0;function fa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pa,xi,va,ma,ha,Al=!1,_r=[],dt=null,ft=null,pt=null,Yn=new Map,Xn=new Map,ut=[],tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ku(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function Cn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=ar(t),t!==null&&xi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function nf(e,t,n,r,o){switch(t){case"focusin":return dt=Cn(dt,e,t,n,r,o),!0;case"dragenter":return ft=Cn(ft,e,t,n,r,o),!0;case"mouseover":return pt=Cn(pt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Yn.set(l,Cn(Yn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Xn.set(l,Cn(Xn.get(l)||null,e,t,n,r,o)),!0}return!1}function ga(e){var t=Nt(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=la(n),t!==null){e.blockedOn=t,ha(e.priority,function(){va(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ol=r,n.target.dispatchEvent(r),Ol=null}else return t=ar(n),t!==null&&xi(t),e.blockedOn=n,!1;t.shift()}return!0}function Yu(e,t,n){$r(e)&&n.delete(t)}function rf(){Al=!1,dt!==null&&$r(dt)&&(dt=null),ft!==null&&$r(ft)&&(ft=null),pt!==null&&$r(pt)&&(pt=null),Yn.forEach(Yu),Xn.forEach(Yu)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Al||(Al=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,rf)))}function Gn(e){function t(o){return En(o,e)}if(0<_r.length){En(_r[0],e);for(var n=1;n<_r.length;n++){var r=_r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&En(dt,e),ft!==null&&En(ft,e),pt!==null&&En(pt,e),Yn.forEach(t),Xn.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)ga(n),n.blockedOn===null&&ut.shift()}var on=nt.ReactCurrentBatchConfig,to=!0;function of(e,t,n,r){var o=R,l=on.transition;on.transition=null;try{R=1,Ci(e,t,n,r)}finally{R=o,on.transition=l}}function lf(e,t,n,r){var o=R,l=on.transition;on.transition=null;try{R=4,Ci(e,t,n,r)}finally{R=o,on.transition=l}}function Ci(e,t,n,r){if(to){var o=$l(e,t,n,r);if(o===null)dl(e,t,r,no,n),Ku(e,r);else if(nf(o,e,t,n,r))r.stopPropagation();else if(Ku(e,r),t&4&&-1<tf.indexOf(e)){for(;o!==null;){var l=ar(o);if(l!==null&&pa(l),l=$l(e,t,n,r),l===null&&dl(e,t,r,no,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else dl(e,t,r,null,n)}}var no=null;function $l(e,t,n,r){if(no=null,e=ki(r),e=Nt(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=la(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function ya(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kd()){case Si:return 1;case aa:return 4;case br:case Yd:return 16;case ca:return 536870912;default:return 16}default:return 16}}var at=null,Ei=null,Vr=null;function wa(){if(Vr)return Vr;var e,t=Ei,n=t.length,r,o="value"in at?at.value:at.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Vr=o.slice(e,1<r?1-r:void 0)}function Wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function Xu(){return!1}function Se(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Nr:Xu,this.isPropagationStopped=Xu,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_i=Se(mn),sr=$({},mn,{view:0,detail:0}),uf=Se(sr),ll,il,_n,zo=$({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ni,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(ll=e.screenX-_n.screenX,il=e.screenY-_n.screenY):il=ll=0,_n=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:il}}),Gu=Se(zo),sf=$({},zo,{dataTransfer:0}),af=Se(sf),cf=$({},sr,{relatedTarget:0}),ul=Se(cf),df=$({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),ff=Se(df),pf=$({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vf=Se(pf),mf=$({},mn,{data:0}),Zu=Se(mf),hf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yf[e])?!!t[e]:!1}function Ni(){return wf}var kf=$({},sr,{key:function(e){if(e.key){var t=hf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ni,charCode:function(e){return e.type==="keypress"?Wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sf=Se(kf),zf=$({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ju=Se(zf),xf=$({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ni}),Cf=Se(xf),Ef=$({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),_f=Se(Ef),Nf=$({},zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pf=Se(Nf),Tf=[9,13,27,32],Pi=qe&&"CompositionEvent"in window,Fn=null;qe&&"documentMode"in document&&(Fn=document.documentMode);var Lf=qe&&"TextEvent"in window&&!Fn,ka=qe&&(!Pi||Fn&&8<Fn&&11>=Fn),qu=" ",bu=!1;function Sa(e,t){switch(e){case"keyup":return Tf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function za(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Rf(e,t){switch(e){case"compositionend":return za(t);case"keypress":return t.which!==32?null:(bu=!0,qu);case"textInput":return e=t.data,e===qu&&bu?null:e;default:return null}}function Mf(e,t){if(Qt)return e==="compositionend"||!Pi&&Sa(e,t)?(e=wa(),Vr=Ei=at=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ka&&t.locale!=="ko"?null:t.data;default:return null}}var If={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!If[e.type]:t==="textarea"}function xa(e,t,n,r){ea(r),t=ro(t,"onChange"),0<t.length&&(n=new _i("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Un=null,Zn=null;function Of(e){Oa(e,0)}function xo(e){var t=Xt(e);if(Ys(t))return e}function Df(e,t){if(e==="change")return t}var Ca=!1;qe&&(qe?(Tr="oninput"in document,Tr||(sl=document.createElement("div"),sl.setAttribute("oninput","return;"),Tr=typeof sl.oninput=="function"),Pr=Tr):Pr=!1,Ca=Pr&&(!document.documentMode||9<document.documentMode));var Pr,Tr,sl;function ts(){Un&&(Un.detachEvent("onpropertychange",Ea),Zn=Un=null)}function Ea(e){if(e.propertyName==="value"&&xo(Zn)){var t=[];xa(t,Zn,e,ki(e)),oa(Of,t)}}function jf(e,t,n){e==="focusin"?(ts(),Un=t,Zn=n,Un.attachEvent("onpropertychange",Ea)):e==="focusout"&&ts()}function Ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(Zn)}function Uf(e,t){if(e==="click")return xo(t)}function Af(e,t){if(e==="input"||e==="change")return xo(t)}function $f(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:$f;function Jn(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!zl.call(t,o)||!Ue(e[o],t[o]))return!1}return!0}function ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rs(e,t){var n=ns(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ns(n)}}function _a(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_a(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Na(){for(var e=window,t=Zr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zr(e.document)}return t}function Ti(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vf(e){var t=Na(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_a(n.ownerDocument.documentElement,n)){if(r!==null&&Ti(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=rs(n,l);var i=rs(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wf=qe&&"documentMode"in document&&11>=document.documentMode,Kt=null,Vl=null,An=null,Wl=!1;function os(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wl||Kt==null||Kt!==Zr(r)||(r=Kt,"selectionStart"in r&&Ti(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),An&&Jn(An,r)||(An=r,r=ro(Vl,"onSelect"),0<r.length&&(t=new _i("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yt={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},al={},Pa={};qe&&(Pa=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function Co(e){if(al[e])return al[e];if(!Yt[e])return e;var t=Yt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pa)return al[e]=t[n];return e}var Ta=Co("animationend"),La=Co("animationiteration"),Ra=Co("animationstart"),Ma=Co("transitionend"),Ia=new Map,ls="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){Ia.set(e,t),Ft(t,[e])}for(Rr=0;Rr<ls.length;Rr++)Mr=ls[Rr],is=Mr.toLowerCase(),us=Mr[0].toUpperCase()+Mr.slice(1),St(is,"on"+us);var Mr,is,us,Rr;St(Ta,"onAnimationEnd");St(La,"onAnimationIteration");St(Ra,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(Ma,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hf=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function ss(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wd(r,t,void 0,e),e.currentTarget=null}function Oa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==l&&o.isPropagationStopped())break e;ss(o,u,c),l=s}else for(i=0;i<r.length;i++){if(u=r[i],s=u.instance,c=u.currentTarget,u=u.listener,s!==l&&o.isPropagationStopped())break e;ss(o,u,c),l=s}}}if(qr)throw e=Fl,qr=!1,Fl=null,e}function O(e,t){var n=t[Yl];n===void 0&&(n=t[Yl]=new Set);var r=e+"__bubble";n.has(r)||(Da(t,e,2,!1),n.add(r))}function cl(e,t,n){var r=0;t&&(r|=4),Da(n,e,r,t)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[Ir]){e[Ir]=!0,Ws.forEach(function(n){n!=="selectionchange"&&(Hf.has(n)||cl(n,!1,e),cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ir]||(t[Ir]=!0,cl("selectionchange",!1,t))}}function Da(e,t,n,r){switch(ya(t)){case 1:var o=of;break;case 4:o=lf;break;default:o=Ci}n=o.bind(null,t,n,e),o=void 0,!jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function dl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;u!==null;){if(i=Nt(u),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}u=u.parentNode}}r=r.return}oa(function(){var c=l,p=ki(n),m=[];e:{var v=Ia.get(e);if(v!==void 0){var y=_i,w=e;switch(e){case"keypress":if(Wr(n)===0)break e;case"keydown":case"keyup":y=Sf;break;case"focusin":w="focus",y=ul;break;case"focusout":w="blur",y=ul;break;case"beforeblur":case"afterblur":y=ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Cf;break;case Ta:case La:case Ra:y=ff;break;case Ma:y=_f;break;case"scroll":y=uf;break;case"wheel":y=Pf;break;case"copy":case"cut":case"paste":y=vf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ju}var S=(t&4)!==0,T=!S&&e==="scroll",d=S?v!==null?v+"Capture":null:v;S=[];for(var a=c,f;a!==null;){f=a;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Kn(a,d),g!=null&&S.push(bn(a,g,f)))),T)break;a=a.return}0<S.length&&(v=new y(v,w,null,n,p),m.push({event:v,listeners:S}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",v&&n!==Ol&&(w=n.relatedTarget||n.fromElement)&&(Nt(w)||w[be]))break e;if((y||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?Nt(w):null,w!==null&&(T=Ut(w),w!==T||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(S=Gu,g="onMouseLeave",d="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ju,g="onPointerLeave",d="onPointerEnter",a="pointer"),T=y==null?v:Xt(y),f=w==null?v:Xt(w),v=new S(g,a+"leave",y,n,p),v.target=T,v.relatedTarget=f,g=null,Nt(p)===c&&(S=new S(d,a+"enter",w,n,p),S.target=f,S.relatedTarget=T,g=S),T=g,y&&w)t:{for(S=y,d=w,a=0,f=S;f;f=Wt(f))a++;for(f=0,g=d;g;g=Wt(g))f++;for(;0<a-f;)S=Wt(S),a--;for(;0<f-a;)d=Wt(d),f--;for(;a--;){if(S===d||d!==null&&S===d.alternate)break t;S=Wt(S),d=Wt(d)}S=null}else S=null;y!==null&&as(m,v,y,S,!1),w!==null&&T!==null&&as(m,T,w,S,!0)}}e:{if(v=c?Xt(c):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var z=Df;else if(es(v))if(Ca)z=Af;else{z=Ff;var x=jf}else(y=v.nodeName)&&y.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(z=Uf);if(z&&(z=z(e,c))){xa(m,z,n,p);break e}x&&x(e,v,c),e==="focusout"&&(x=v._wrapperState)&&x.controlled&&v.type==="number"&&Tl(v,"number",v.value)}switch(x=c?Xt(c):window,e){case"focusin":(es(x)||x.contentEditable==="true")&&(Kt=x,Vl=c,An=null);break;case"focusout":An=Vl=Kt=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,os(m,n,p);break;case"selectionchange":if(Wf)break;case"keydown":case"keyup":os(m,n,p)}var C;if(Pi)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Qt?Sa(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ka&&n.locale!=="ko"&&(Qt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Qt&&(C=wa()):(at=p,Ei="value"in at?at.value:at.textContent,Qt=!0)),x=ro(c,_),0<x.length&&(_=new Zu(_,e,null,n,p),m.push({event:_,listeners:x}),C?_.data=C:(C=za(n),C!==null&&(_.data=C)))),(C=Lf?Rf(e,n):Mf(e,n))&&(c=ro(c,"onBeforeInput"),0<c.length&&(p=new Zu("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=C))}Oa(m,t)})}function bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Kn(e,n),l!=null&&r.unshift(bn(e,l,o)),l=Kn(e,t),l!=null&&r.push(bn(e,l,o))),e=e.return}return r}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function as(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,o?(s=Kn(n,l),s!=null&&i.unshift(bn(n,s,u))):o||(s=Kn(n,l),s!=null&&i.push(bn(n,s,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Bf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function cs(e){return(typeof e=="string"?e:""+e).replace(Bf,`
`).replace(Qf,"")}function Or(e,t,n){if(t=cs(t),cs(e)!==t&&n)throw Error(h(425))}function oo(){}var Hl=null,Bl=null;function Ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,Kf=typeof clearTimeout=="function"?clearTimeout:void 0,ds=typeof Promise=="function"?Promise:void 0,Yf=typeof queueMicrotask=="function"?queueMicrotask:typeof ds<"u"?function(e){return ds.resolve(null).then(e).catch(Xf)}:Kl;function Xf(e){setTimeout(function(){throw e})}function fl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Gn(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),We="__reactFiber$"+hn,er="__reactProps$"+hn,be="__reactContainer$"+hn,Yl="__reactEvents$"+hn,Gf="__reactListeners$"+hn,Zf="__reactHandles$"+hn;function Nt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[be]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fs(e);e!==null;){if(n=e[We])return n;e=fs(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[We]||e[be],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Eo(e){return e[er]||null}var Xl=[],Gt=-1;function zt(e){return{current:e}}function D(e){0>Gt||(e.current=Xl[Gt],Xl[Gt]=null,Gt--)}function I(e,t){Gt++,Xl[Gt]=e.current,e.current=t}var kt={},le=zt(kt),pe=zt(!1),Mt=kt;function an(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ve(e){return e=e.childContextTypes,e!=null}function lo(){D(pe),D(le)}function ps(e,t,n){if(le.current!==kt)throw Error(h(168));I(le,t),I(pe,n)}function ja(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(h(108,Dd(e)||"Unknown",o));return $({},n,r)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Mt=le.current,I(le,e),I(pe,pe.current),!0}function vs(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=ja(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,D(pe),D(le),I(le,e)):D(pe),I(pe,n)}var Xe=null,_o=!1,pl=!1;function Fa(e){Xe===null?Xe=[e]:Xe.push(e)}function Jf(e){_o=!0,Fa(e)}function xt(){if(!pl&&Xe!==null){pl=!0;var e=0,t=R;try{var n=Xe;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,_o=!1}catch(o){throw Xe!==null&&(Xe=Xe.slice(e+1)),sa(Si,xt),o}finally{R=t,pl=!1}}return null}var Zt=[],Jt=0,uo=null,so=0,Ee=[],_e=0,It=null,Ge=1,Ze="";function Et(e,t){Zt[Jt++]=so,Zt[Jt++]=uo,uo=e,so=t}function Ua(e,t,n){Ee[_e++]=Ge,Ee[_e++]=Ze,Ee[_e++]=It,It=e;var r=Ge;e=Ze;var o=32-je(r)-1;r&=~(1<<o),n+=1;var l=32-je(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Ge=1<<32-je(t)+o|n<<o|r,Ze=l+e}else Ge=1<<l|n<<o|r,Ze=e}function Li(e){e.return!==null&&(Et(e,1),Ua(e,1,0))}function Ri(e){for(;e===uo;)uo=Zt[--Jt],Zt[Jt]=null,so=Zt[--Jt],Zt[Jt]=null;for(;e===It;)It=Ee[--_e],Ee[_e]=null,Ze=Ee[--_e],Ee[_e]=null,Ge=Ee[--_e],Ee[_e]=null}var we=null,ye=null,j=!1,De=null;function Aa(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ms(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ye=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:Ge,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ye=null,!0):!1;default:return!1}}function Gl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zl(e){if(j){var t=ye;if(t){var n=t;if(!ms(e,t)){if(Gl(e))throw Error(h(418));t=vt(n.nextSibling);var r=we;t&&ms(e,t)?Aa(r,n):(e.flags=e.flags&-4097|2,j=!1,we=e)}}else{if(Gl(e))throw Error(h(418));e.flags=e.flags&-4097|2,j=!1,we=e}}}function hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Dr(e){if(e!==we)return!1;if(!j)return hs(e),j=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ql(e.type,e.memoizedProps)),t&&(t=ye)){if(Gl(e))throw $a(),Error(h(418));for(;t;)Aa(e,t),t=vt(t.nextSibling)}if(hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=we?vt(e.stateNode.nextSibling):null;return!0}function $a(){for(var e=ye;e;)e=vt(e.nextSibling)}function cn(){ye=we=null,j=!1}function Mi(e){De===null?De=[e]:De.push(e)}var qf=nt.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var u=o.refs;i===null?delete u[l]:u[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function jr(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gs(e){var t=e._init;return t(e._payload)}function Va(e){function t(d,a){if(e){var f=d.deletions;f===null?(d.deletions=[a],d.flags|=16):f.push(a)}}function n(d,a){if(!e)return null;for(;a!==null;)t(d,a),a=a.sibling;return null}function r(d,a){for(d=new Map;a!==null;)a.key!==null?d.set(a.key,a):d.set(a.index,a),a=a.sibling;return d}function o(d,a){return d=yt(d,a),d.index=0,d.sibling=null,d}function l(d,a,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<a?(d.flags|=2,a):f):(d.flags|=2,a)):(d.flags|=1048576,a)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,a,f,g){return a===null||a.tag!==6?(a=kl(f,d.mode,g),a.return=d,a):(a=o(a,f),a.return=d,a)}function s(d,a,f,g){var z=f.type;return z===Bt?p(d,a,f.props.children,g,f.key):a!==null&&(a.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===lt&&gs(z)===a.type)?(g=o(a,f.props),g.ref=Nn(d,a,f),g.return=d,g):(g=Gr(f.type,f.key,f.props,null,d.mode,g),g.ref=Nn(d,a,f),g.return=d,g)}function c(d,a,f,g){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Sl(f,d.mode,g),a.return=d,a):(a=o(a,f.children||[]),a.return=d,a)}function p(d,a,f,g,z){return a===null||a.tag!==7?(a=Rt(f,d.mode,g,z),a.return=d,a):(a=o(a,f),a.return=d,a)}function m(d,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=kl(""+a,d.mode,f),a.return=d,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case Sr:return f=Gr(a.type,a.key,a.props,null,d.mode,f),f.ref=Nn(d,null,a),f.return=d,f;case Ht:return a=Sl(a,d.mode,f),a.return=d,a;case lt:var g=a._init;return m(d,g(a._payload),f)}if(Mn(a)||xn(a))return a=Rt(a,d.mode,f,null),a.return=d,a;jr(d,a)}return null}function v(d,a,f,g){var z=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return z!==null?null:u(d,a,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Sr:return f.key===z?s(d,a,f,g):null;case Ht:return f.key===z?c(d,a,f,g):null;case lt:return z=f._init,v(d,a,z(f._payload),g)}if(Mn(f)||xn(f))return z!==null?null:p(d,a,f,g,null);jr(d,f)}return null}function y(d,a,f,g,z){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,u(a,d,""+g,z);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Sr:return d=d.get(g.key===null?f:g.key)||null,s(a,d,g,z);case Ht:return d=d.get(g.key===null?f:g.key)||null,c(a,d,g,z);case lt:var x=g._init;return y(d,a,f,x(g._payload),z)}if(Mn(g)||xn(g))return d=d.get(f)||null,p(a,d,g,z,null);jr(a,g)}return null}function w(d,a,f,g){for(var z=null,x=null,C=a,_=a=0,W=null;C!==null&&_<f.length;_++){C.index>_?(W=C,C=null):W=C.sibling;var N=v(d,C,f[_],g);if(N===null){C===null&&(C=W);break}e&&C&&N.alternate===null&&t(d,C),a=l(N,a,_),x===null?z=N:x.sibling=N,x=N,C=W}if(_===f.length)return n(d,C),j&&Et(d,_),z;if(C===null){for(;_<f.length;_++)C=m(d,f[_],g),C!==null&&(a=l(C,a,_),x===null?z=C:x.sibling=C,x=C);return j&&Et(d,_),z}for(C=r(d,C);_<f.length;_++)W=y(C,d,_,f[_],g),W!==null&&(e&&W.alternate!==null&&C.delete(W.key===null?_:W.key),a=l(W,a,_),x===null?z=W:x.sibling=W,x=W);return e&&C.forEach(function(he){return t(d,he)}),j&&Et(d,_),z}function S(d,a,f,g){var z=xn(f);if(typeof z!="function")throw Error(h(150));if(f=z.call(f),f==null)throw Error(h(151));for(var x=z=null,C=a,_=a=0,W=null,N=f.next();C!==null&&!N.done;_++,N=f.next()){C.index>_?(W=C,C=null):W=C.sibling;var he=v(d,C,N.value,g);if(he===null){C===null&&(C=W);break}e&&C&&he.alternate===null&&t(d,C),a=l(he,a,_),x===null?z=he:x.sibling=he,x=he,C=W}if(N.done)return n(d,C),j&&Et(d,_),z;if(C===null){for(;!N.done;_++,N=f.next())N=m(d,N.value,g),N!==null&&(a=l(N,a,_),x===null?z=N:x.sibling=N,x=N);return j&&Et(d,_),z}for(C=r(d,C);!N.done;_++,N=f.next())N=y(C,d,_,N.value,g),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?_:N.key),a=l(N,a,_),x===null?z=N:x.sibling=N,x=N);return e&&C.forEach(function(ie){return t(d,ie)}),j&&Et(d,_),z}function T(d,a,f,g){if(typeof f=="object"&&f!==null&&f.type===Bt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Sr:e:{for(var z=f.key,x=a;x!==null;){if(x.key===z){if(z=f.type,z===Bt){if(x.tag===7){n(d,x.sibling),a=o(x,f.props.children),a.return=d,d=a;break e}}else if(x.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===lt&&gs(z)===x.type){n(d,x.sibling),a=o(x,f.props),a.ref=Nn(d,x,f),a.return=d,d=a;break e}n(d,x);break}else t(d,x);x=x.sibling}f.type===Bt?(a=Rt(f.props.children,d.mode,g,f.key),a.return=d,d=a):(g=Gr(f.type,f.key,f.props,null,d.mode,g),g.ref=Nn(d,a,f),g.return=d,d=g)}return i(d);case Ht:e:{for(x=f.key;a!==null;){if(a.key===x)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(d,a.sibling),a=o(a,f.children||[]),a.return=d,d=a;break e}else{n(d,a);break}else t(d,a);a=a.sibling}a=Sl(f,d.mode,g),a.return=d,d=a}return i(d);case lt:return x=f._init,T(d,a,x(f._payload),g)}if(Mn(f))return w(d,a,f,g);if(xn(f))return S(d,a,f,g);jr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(d,a.sibling),a=o(a,f),a.return=d,d=a):(n(d,a),a=kl(f,d.mode,g),a.return=d,d=a),i(d)):n(d,a)}return T}var dn=Va(!0),Wa=Va(!1),ao=zt(null),co=null,qt=null,Ii=null;function Oi(){Ii=qt=co=null}function Di(e){var t=ao.current;D(ao),e._currentValue=t}function Jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){co=e,Ii=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(fe=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(Ii!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(co===null)throw Error(h(308));qt=e,co.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var Pt=null;function ji(e){Pt===null?Pt=[e]:Pt.push(e)}function Ha(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ji(t)):(n.next=o.next,o.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function Fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(L&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,et(e,n)}return o=r.interleaved,o===null?(t.next=t,ji(r)):(t.next=o.next,o.next=t),r.interleaved=t,et(e,n)}function Hr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zi(e,n)}}function ys(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var o=e.updateQueue;it=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var s=u,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==i&&(u===null?p.firstBaseUpdate=c:u.next=c,p.lastBaseUpdate=s))}if(l!==null){var m=o.baseState;i=0,p=c=s=null,u=l;do{var v=u.lane,y=u.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,S=u;switch(v=t,y=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){m=w.call(y,m,v);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,v=typeof w=="function"?w.call(y,m,v):w,v==null)break e;m=$({},m,v);break e;case 2:it=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[u]:v.push(u))}else y={eventTime:y,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(c=p=y,s=m):p=p.next=y,i|=v;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;v=u,u=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(p===null&&(s=m),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Dt|=i,e.lanes=i,e.memoizedState=m}}function ws(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(h(191,o));o.call(r)}}}var cr={},Be=zt(cr),tr=zt(cr),nr=zt(cr);function Tt(e){if(e===cr)throw Error(h(174));return e}function Ui(e,t){switch(I(nr,t),I(tr,e),I(Be,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rl(t,e)}D(Be),I(Be,t)}function fn(){D(Be),D(tr),D(nr)}function Qa(e){Tt(nr.current);var t=Tt(Be.current),n=Rl(t,e.type);t!==n&&(I(tr,e),I(Be,n))}function Ai(e){tr.current===e&&(D(Be),D(tr))}var U=zt(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function $i(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var Br=nt.ReactCurrentDispatcher,ml=nt.ReactCurrentBatchConfig,Ot=0,A=null,K=null,G=null,vo=!1,$n=!1,rr=0,bf=0;function ne(){throw Error(h(321))}function Vi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function Wi(e,t,n,r,o,l){if(Ot=l,A=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Br.current=e===null||e.memoizedState===null?rp:op,e=n(r,o),$n){l=0;do{if($n=!1,rr=0,25<=l)throw Error(h(301));l+=1,G=K=null,t.updateQueue=null,Br.current=lp,e=n(r,o)}while($n)}if(Br.current=mo,t=K!==null&&K.next!==null,Ot=0,G=K=A=null,vo=!1,t)throw Error(h(300));return e}function Hi(){var e=rr!==0;return rr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?A.memoizedState=G=e:G=G.next=e,G}function Le(){if(K===null){var e=A.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=G===null?A.memoizedState:G.next;if(t!==null)G=t,K=e;else{if(e===null)throw Error(h(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},G===null?A.memoizedState=G=e:G=G.next=e}return G}function or(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=Le(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=K,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var u=i=null,s=null,c=l;do{var p=c.lane;if((Ot&p)===p)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=m,i=r):s=s.next=m,A.lanes|=p,Dt|=p}c=c.next}while(c!==null&&c!==l);s===null?i=r:s.next=u,Ue(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,A.lanes|=l,Dt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gl(e){var t=Le(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ue(l,t.memoizedState)||(fe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ka(){}function Ya(e,t){var n=A,r=Le(),o=t(),l=!Ue(r.memoizedState,o);if(l&&(r.memoizedState=o,fe=!0),r=r.queue,Bi(Za.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||G!==null&&G.memoizedState.tag&1){if(n.flags|=2048,lr(9,Ga.bind(null,n,r,o,t),void 0,null),Z===null)throw Error(h(349));(Ot&30)!==0||Xa(n,t,o)}return o}function Xa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ga(e,t,n,r){t.value=n,t.getSnapshot=r,Ja(t)&&qa(e)}function Za(e,t,n){return n(function(){Ja(t)&&qa(e)})}function Ja(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function qa(e){var t=et(e,1);t!==null&&Fe(t,e,1,-1)}function ks(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},t.queue=e,e=e.dispatch=np.bind(null,A,e),[t.memoizedState,e]}function lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ba(){return Le().memoizedState}function Qr(e,t,n,r){var o=Ve();A.flags|=e,o.memoizedState=lr(1|t,n,void 0,r===void 0?null:r)}function No(e,t,n,r){var o=Le();r=r===void 0?null:r;var l=void 0;if(K!==null){var i=K.memoizedState;if(l=i.destroy,r!==null&&Vi(r,i.deps)){o.memoizedState=lr(t,n,l,r);return}}A.flags|=e,o.memoizedState=lr(1|t,n,l,r)}function Ss(e,t){return Qr(8390656,8,e,t)}function Bi(e,t){return No(2048,8,e,t)}function ec(e,t){return No(4,2,e,t)}function tc(e,t){return No(4,4,e,t)}function nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rc(e,t,n){return n=n!=null?n.concat([e]):null,No(4,4,nc.bind(null,t,e),n)}function Qi(){}function oc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ic(e,t,n){return(Ot&21)===0?(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n):(Ue(n,t)||(n=da(),A.lanes|=n,Dt|=n,e.baseState=!0),t)}function ep(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=ml.transition;ml.transition={};try{e(!1),t()}finally{R=n,ml.transition=r}}function uc(){return Le().memoizedState}function tp(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sc(e))ac(t,n);else if(n=Ha(e,t,n,r),n!==null){var o=ae();Fe(n,e,r,o),cc(n,t,r)}}function np(e,t,n){var r=gt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sc(e))ac(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,u=l(i,n);if(o.hasEagerState=!0,o.eagerState=u,Ue(u,i)){var s=t.interleaved;s===null?(o.next=o,ji(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}n=Ha(e,t,o,r),n!==null&&(o=ae(),Fe(n,e,r,o),cc(n,t,r))}}function sc(e){var t=e.alternate;return e===A||t!==null&&t===A}function ac(e,t){$n=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zi(e,n)}}var mo={readContext:Te,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},rp={readContext:Te,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:Ss,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qr(4194308,4,nc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qr(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tp.bind(null,A,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:ks,useDebugValue:Qi,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=ks(!1),t=e[0];return e=ep.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=A,o=Ve();if(j){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),Z===null)throw Error(h(349));(Ot&30)!==0||Xa(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ss(Za.bind(null,r,l,e),[e]),r.flags|=2048,lr(9,Ga.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ve(),t=Z.identifierPrefix;if(j){var n=Ze,r=Ge;n=(r&~(1<<32-je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},op={readContext:Te,useCallback:oc,useContext:Te,useEffect:Bi,useImperativeHandle:rc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:lc,useReducer:hl,useRef:ba,useState:function(){return hl(or)},useDebugValue:Qi,useDeferredValue:function(e){var t=Le();return ic(t,K.memoizedState,e)},useTransition:function(){var e=hl(or)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Ka,useSyncExternalStore:Ya,useId:uc,unstable_isNewReconciler:!1},lp={readContext:Te,useCallback:oc,useContext:Te,useEffect:Bi,useImperativeHandle:rc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:lc,useReducer:gl,useRef:ba,useState:function(){return gl(or)},useDebugValue:Qi,useDeferredValue:function(e){var t=Le();return K===null?t.memoizedState=e:ic(t,K.memoizedState,e)},useTransition:function(){var e=gl(or)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Ka,useSyncExternalStore:Ya,useId:uc,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ql(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Po={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),o=gt(e),l=Je(r,o);l.payload=t,n!=null&&(l.callback=n),t=mt(e,l,o),t!==null&&(Fe(t,e,o,r),Hr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),o=gt(e),l=Je(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=mt(e,l,o),t!==null&&(Fe(t,e,o,r),Hr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=gt(e),o=Je(n,r);o.tag=2,t!=null&&(o.callback=t),t=mt(e,o,r),t!==null&&(Fe(t,e,r,n),Hr(t,e,r))}};function zs(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(o,l):!0}function dc(e,t,n){var r=!1,o=kt,l=t.contextType;return typeof l=="object"&&l!==null?l=Te(l):(o=ve(t)?Mt:le.current,r=t.contextTypes,l=(r=r!=null)?an(e,o):kt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function bl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Fi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Te(l):(l=ve(t)?Mt:le.current,o.context=an(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ql(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Po.enqueueReplaceState(o,o.state,null),fo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Od(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ei(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ip=typeof WeakMap=="function"?WeakMap:Map;function fc(e,t,n){n=Je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,ci=r),ei(e,t)},n}function pc(e,t,n){n=Je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ei(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ei(e,t),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Cs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ip;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=kp.bind(null,e,t,n),t.then(e,e))}function Es(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _s(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Je(-1,1),t.tag=2,mt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var up=nt.ReactCurrentOwner,fe=!1;function se(e,t,n,r){t.child=e===null?Wa(t,null,n,r):dn(t,e.child,n,r)}function Ns(e,t,n,r,o){n=n.render;var l=t.ref;return ln(t,o),r=Wi(e,t,n,r,l,o),n=Hi(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,tt(e,t,o)):(j&&n&&Li(t),t.flags|=1,se(e,t,r,o),t.child)}function Ps(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!bi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,vc(e,t,l,r,o)):(e=Gr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(i,r)&&e.ref===t.ref)return tt(e,t,o)}return t.flags|=1,e=yt(l,r),e.ref=t.ref,e.return=t,t.child=e}function vc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Jn(l,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(fe=!0);else return t.lanes=e.lanes,tt(e,t,o)}return ti(e,t,n,r,o)}function mc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(en,ge),ge|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(en,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,I(en,ge),ge|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,I(en,ge),ge|=r;return se(e,t,o,n),t.child}function hc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ti(e,t,n,r,o){var l=ve(n)?Mt:le.current;return l=an(t,l),ln(t,o),n=Wi(e,t,n,r,l,o),r=Hi(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,tt(e,t,o)):(j&&r&&Li(t),t.flags|=1,se(e,t,n,o),t.child)}function Ts(e,t,n,r,o){if(ve(n)){var l=!0;io(t)}else l=!1;if(ln(t,o),t.stateNode===null)Kr(e,t),dc(t,n,r),bl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=ve(n)?Mt:le.current,c=an(t,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||s!==c)&&xs(t,i,r,c),it=!1;var v=t.memoizedState;i.state=v,fo(t,r,i,o),s=t.memoizedState,u!==r||v!==s||pe.current||it?(typeof p=="function"&&(ql(t,n,p,r),s=t.memoizedState),(u=it||zs(t,n,u,r,v,s,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ba(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Ie(t.type,u),i.props=c,m=t.pendingProps,v=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Te(s):(s=ve(n)?Mt:le.current,s=an(t,s));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==m||v!==s)&&xs(t,i,r,s),it=!1,v=t.memoizedState,i.state=v,fo(t,r,i,o);var w=t.memoizedState;u!==m||v!==w||pe.current||it?(typeof y=="function"&&(ql(t,n,y,r),w=t.memoizedState),(c=it||zs(t,n,c,r,v,w,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return ni(e,t,n,r,l,o)}function ni(e,t,n,r,o,l){hc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&vs(t,n,!1),tt(e,t,l);r=t.stateNode,up.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=dn(t,e.child,null,l),t.child=dn(t,null,u,l)):se(e,t,u,l),t.memoizedState=r.state,o&&vs(t,n,!0),t.child}function gc(e){var t=e.stateNode;t.pendingContext?ps(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ps(e,t.context,!1),Ui(e,t.containerInfo)}function Ls(e,t,n,r,o){return cn(),Mi(o),t.flags|=256,se(e,t,n,r),t.child}var ri={dehydrated:null,treeContext:null,retryLane:0};function oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function yc(e,t,n){var r=t.pendingProps,o=U.current,l=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),I(U,o&1),e===null)return Zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ro(i,r,0,null),e=Rt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=oi(n),t.memoizedState=ri,e):Ki(t,i));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return sp(e,t,i,r,u,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,u=o.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=yt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?l=yt(u,l):(l=Rt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?oi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=ri,r}return l=e.child,e=l.sibling,r=yt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ki(e,t){return t=Ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fr(e,t,n,r){return r!==null&&Mi(r),dn(t,e.child,null,n),e=Ki(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sp(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=yl(Error(h(422))),Fr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ro({mode:"visible",children:r.children},o,0,null),l=Rt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&dn(t,e.child,null,i),t.child.memoizedState=oi(i),t.memoizedState=ri,l);if((t.mode&1)===0)return Fr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(h(419)),r=yl(l,r,void 0),Fr(e,t,i,r)}if(u=(i&e.childLanes)!==0,fe||u){if(r=Z,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,et(e,o),Fe(r,e,o,-1))}return qi(),r=yl(Error(h(421))),Fr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Sp.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,ye=vt(o.nextSibling),we=t,j=!0,De=null,e!==null&&(Ee[_e++]=Ge,Ee[_e++]=Ze,Ee[_e++]=It,Ge=e.id,Ze=e.overflow,It=t),t=Ki(t,r.children),t.flags|=4096,t)}function Rs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Jl(e.return,t,n)}function wl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function wc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(se(e,t,r.children,n),r=U.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rs(e,n,t);else if(e.tag===19)Rs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(U,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),wl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&po(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}wl(t,!0,n,null,l);break;case"together":wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ap(e,t,n){switch(t.tag){case 3:gc(t),cn();break;case 5:Qa(t);break;case 1:ve(t.type)&&io(t);break;case 4:Ui(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;I(ao,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(U,U.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?yc(e,t,n):(I(U,U.current&1),e=tt(e,t,n),e!==null?e.sibling:null);I(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return wc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),I(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,mc(e,t,n)}return tt(e,t,n)}var kc,li,Sc,zc;kc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};li=function(){};Sc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Tt(Be.current);var l=null;switch(n){case"input":o=Nl(e,o),r=Nl(e,r),l=[];break;case"select":o=$({},o,{value:void 0}),r=$({},r,{value:void 0}),l=[];break;case"textarea":o=Ll(e,o),r=Ll(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}Ml(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var u=o[c];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(u=o?.[c],r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&O("scroll",e),l||u===s||(l=[])):(l=l||[]).push(c,s))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!j)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cp(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return ve(t.type)&&lo(),re(t),null;case 3:return r=t.stateNode,fn(),D(pe),D(le),$i(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,De!==null&&(pi(De),De=null))),li(e,t),re(t),null;case 5:Ai(t);var o=Tt(nr.current);if(n=t.type,e!==null&&t.stateNode!=null)Sc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return re(t),null}if(e=Tt(Be.current),Dr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[We]=t,r[er]=l,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(o=0;o<On.length;o++)O(On[o],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Au(r,l),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},O("invalid",r);break;case"textarea":Vu(r,l),O("invalid",r)}Ml(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&Or(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Or(r.textContent,u,e),o=["children",""+u]):Bn.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&O("scroll",r)}switch(n){case"input":zr(r),$u(r,l,!0);break;case"textarea":zr(r),Wu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=oo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[We]=t,e[er]=r,kc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Il(n,r),n){case"dialog":O("cancel",e),O("close",e),o=r;break;case"iframe":case"object":case"embed":O("load",e),o=r;break;case"video":case"audio":for(o=0;o<On.length;o++)O(On[o],e);o=r;break;case"source":O("error",e),o=r;break;case"img":case"image":case"link":O("error",e),O("load",e),o=r;break;case"details":O("toggle",e),o=r;break;case"input":Au(e,r),o=Nl(e,r),O("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=$({},r,{value:void 0}),O("invalid",e);break;case"textarea":Vu(e,r),o=Ll(e,r),O("invalid",e);break;default:o=r}Ml(n,o),u=o;for(l in u)if(u.hasOwnProperty(l)){var s=u[l];l==="style"?bs(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Js(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Qn(e,s):typeof s=="number"&&Qn(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Bn.hasOwnProperty(l)?s!=null&&l==="onScroll"&&O("scroll",e):s!=null&&hi(e,l,s,i))}switch(n){case"input":zr(e),$u(e,r,!1);break;case"textarea":zr(e),Wu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?tn(e,!!r.multiple,l,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=Tt(nr.current),Tt(Be.current),Dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(l=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:Or(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Or(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return re(t),null;case 13:if(D(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(j&&ye!==null&&(t.mode&1)!==0&&(t.flags&128)===0)$a(),cn(),t.flags|=98560,l=!1;else if(l=Dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(h(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[We]=t}else cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;re(t),l=!1}else De!==null&&(pi(De),De=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(U.current&1)!==0?Y===0&&(Y=3):qi())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return fn(),li(e,t),e===null&&qn(t.stateNode.containerInfo),re(t),null;case 10:return Di(t.type._context),re(t),null;case 17:return ve(t.type)&&lo(),re(t),null;case 19:if(D(U),l=t.memoizedState,l===null)return re(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Pn(l,!1);else{if(Y!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=po(e),i!==null){for(t.flags|=128,Pn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(U,U.current&1|2),t.child}e=e.sibling}l.tail!==null&&H()>vn&&(t.flags|=128,r=!0,Pn(l,!1),t.lanes=4194304)}else{if(!r)if(e=po(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!j)return re(t),null}else 2*H()-l.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=H(),t.sibling=null,n=U.current,I(U,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return Ji(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ge&1073741824)!==0&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function dp(e,t){switch(Ri(t),t.tag){case 1:return ve(t.type)&&lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),D(pe),D(le),$i(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ai(t),null;case 13:if(D(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(U),null;case 4:return fn(),null;case 10:return Di(t.type._context),null;case 22:case 23:return Ji(),null;case 24:return null;default:return null}}var Ur=!1,oe=!1,fp=typeof WeakSet=="function"?WeakSet:Set,k=null;function bt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function ii(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ms=!1;function pp(e,t){if(Hl=to,e=Na(),Ti(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,u=-1,s=-1,c=0,p=0,m=e,v=null;t:for(;;){for(var y;m!==n||o!==0&&m.nodeType!==3||(u=i+o),m!==l||r!==0&&m.nodeType!==3||(s=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(y=m.firstChild)!==null;)v=m,m=y;for(;;){if(m===e)break t;if(v===n&&++c===o&&(u=i),v===l&&++p===r&&(s=i),(y=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=y}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bl={focusedElem:e,selectionRange:n},to=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var w=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,T=w.memoizedState,d=t.stateNode,a=d.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ie(t.type,S),T);d.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(g){V(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return w=Ms,Ms=!1,w}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ii(t,n,l)}o=o.next}while(o!==r)}}function To(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ui(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function xc(e){var t=e.alternate;t!==null&&(e.alternate=null,xc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[er],delete t[Yl],delete t[Gf],delete t[Zf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cc(e){return e.tag===5||e.tag===3||e.tag===4}function Is(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function si(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(si(e,t,n),e=e.sibling;e!==null;)si(e,t,n),e=e.sibling}function ai(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ai(e,t,n),e=e.sibling;e!==null;)ai(e,t,n),e=e.sibling}var q=null,Oe=!1;function ot(e,t,n){for(n=n.child;n!==null;)Ec(e,t,n),n=n.sibling}function Ec(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 5:oe||bt(n,t);case 6:var r=q,o=Oe;q=null,ot(e,t,n),q=r,Oe=o,q!==null&&(Oe?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Oe?(e=q,n=n.stateNode,e.nodeType===8?fl(e.parentNode,n):e.nodeType===1&&fl(e,n),Gn(e)):fl(q,n.stateNode));break;case 4:r=q,o=Oe,q=n.stateNode.containerInfo,Oe=!0,ot(e,t,n),q=r,Oe=o;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&ii(n,t,i),o=o.next}while(o!==r)}ot(e,t,n);break;case 1:if(!oe&&(bt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){V(n,t,u)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,ot(e,t,n),oe=r):ot(e,t,n);break;default:ot(e,t,n)}}function Os(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fp),t.forEach(function(r){var o=zp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:q=u.stateNode,Oe=!1;break e;case 3:q=u.stateNode.containerInfo,Oe=!0;break e;case 4:q=u.stateNode.containerInfo,Oe=!0;break e}u=u.return}if(q===null)throw Error(h(160));Ec(l,i,o),q=null,Oe=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){V(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_c(t,e),t=t.sibling}function _c(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),$e(e),r&4){try{Vn(3,e,e.return),To(3,e)}catch(S){V(e,e.return,S)}try{Vn(5,e,e.return)}catch(S){V(e,e.return,S)}}break;case 1:Me(t,e),$e(e),r&512&&n!==null&&bt(n,n.return);break;case 5:if(Me(t,e),$e(e),r&512&&n!==null&&bt(n,n.return),e.flags&32){var o=e.stateNode;try{Qn(o,"")}catch(S){V(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Xs(o,l),Il(u,i);var c=Il(u,l);for(i=0;i<s.length;i+=2){var p=s[i],m=s[i+1];p==="style"?bs(o,m):p==="dangerouslySetInnerHTML"?Js(o,m):p==="children"?Qn(o,m):hi(o,p,m,c)}switch(u){case"input":Pl(o,l);break;case"textarea":Gs(o,l);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?tn(o,!!l.multiple,y,!1):v!==!!l.multiple&&(l.defaultValue!=null?tn(o,!!l.multiple,l.defaultValue,!0):tn(o,!!l.multiple,l.multiple?[]:"",!1))}o[er]=l}catch(S){V(e,e.return,S)}}break;case 6:if(Me(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(h(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(S){V(e,e.return,S)}}break;case 3:if(Me(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(S){V(e,e.return,S)}break;case 4:Me(t,e),$e(e);break;case 13:Me(t,e),$e(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Gi=H())),r&4&&Os(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||p,Me(t,e),oe=c):Me(t,e),$e(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&(e.mode&1)!==0)for(k=e,p=e.child;p!==null;){for(m=k=p;k!==null;){switch(v=k,y=v.child,v.tag){case 0:case 11:case 14:case 15:Vn(4,v,v.return);break;case 1:bt(v,v.return);var w=v.stateNode;if(typeof w.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){V(r,n,S)}}break;case 5:bt(v,v.return);break;case 22:if(v.memoizedState!==null){js(m);continue}}y!==null?(y.return=v,k=y):js(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=m.stateNode,s=m.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=qs("display",i))}catch(S){V(e,e.return,S)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(S){V(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Me(t,e),$e(e),r&4&&Os(e);break;case 21:break;default:Me(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cc(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Qn(o,""),r.flags&=-33);var l=Is(e);ai(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Is(e);si(e,u,i);break;default:throw Error(h(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vp(e,t,n){k=e,Nc(e,t,n)}function Nc(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var o=k,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ur;if(!i){var u=o.alternate,s=u!==null&&u.memoizedState!==null||oe;u=Ur;var c=oe;if(Ur=i,(oe=s)&&!c)for(k=o;k!==null;)i=k,s=i.child,i.tag===22&&i.memoizedState!==null?Fs(o):s!==null?(s.return=i,k=s):Fs(o);for(;l!==null;)k=l,Nc(l,t,n),l=l.sibling;k=o,Ur=u,oe=c}Ds(e,t,n)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,k=l):Ds(e,t,n)}}function Ds(e){for(;k!==null;){var t=k;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:oe||To(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ws(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ws(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Gn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}oe||t.flags&512&&ui(t)}catch(v){V(t,t.return,v)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function js(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Fs(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{To(4,t)}catch(s){V(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){V(t,o,s)}}var l=t.return;try{ui(t)}catch(s){V(t,l,s)}break;case 5:var i=t.return;try{ui(t)}catch(s){V(t,i,s)}}}catch(s){V(t,t.return,s)}if(t===e){k=null;break}var u=t.sibling;if(u!==null){u.return=t.return,k=u;break}k=t.return}}var mp=Math.ceil,ho=nt.ReactCurrentDispatcher,Yi=nt.ReactCurrentOwner,Pe=nt.ReactCurrentBatchConfig,L=0,Z=null,Q=null,b=0,ge=0,en=zt(0),Y=0,ir=null,Dt=0,Lo=0,Xi=0,Wn=null,de=null,Gi=0,vn=1/0,Ye=null,go=!1,ci=null,ht=null,Ar=!1,ct=null,yo=0,Hn=0,di=null,Yr=-1,Xr=0;function ae(){return(L&6)!==0?H():Yr!==-1?Yr:Yr=H()}function gt(e){return(e.mode&1)===0?1:(L&2)!==0&&b!==0?b&-b:qf.transition!==null?(Xr===0&&(Xr=da()),Xr):(e=R,e!==0||(e=window.event,e=e===void 0?16:ya(e.type)),e)}function Fe(e,t,n,r){if(50<Hn)throw Hn=0,di=null,Error(h(185));ur(e,n,r),((L&2)===0||e!==Z)&&(e===Z&&((L&2)===0&&(Lo|=n),Y===4&&st(e,b)),me(e,r),n===1&&L===0&&(t.mode&1)===0&&(vn=H()+500,_o&&xt()))}function me(e,t){var n=e.callbackNode;bd(e,t);var r=eo(e,e===Z?b:0);if(r===0)n!==null&&Qu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qu(n),t===1)e.tag===0?Jf(Us.bind(null,e)):Fa(Us.bind(null,e)),Yf(function(){(L&6)===0&&xt()}),n=null;else{switch(fa(r)){case 1:n=Si;break;case 4:n=aa;break;case 16:n=br;break;case 536870912:n=ca;break;default:n=br}n=Dc(n,Pc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pc(e,t){if(Yr=-1,Xr=0,(L&6)!==0)throw Error(h(327));var n=e.callbackNode;if(un()&&e.callbackNode!==n)return null;var r=eo(e,e===Z?b:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=wo(e,r);else{t=r;var o=L;L|=2;var l=Lc();(Z!==e||b!==t)&&(Ye=null,vn=H()+500,Lt(e,t));do try{yp();break}catch(u){Tc(e,u)}while(!0);Oi(),ho.current=l,L=o,Q!==null?t=0:(Z=null,b=0,t=Y)}if(t!==0){if(t===2&&(o=Ul(e),o!==0&&(r=o,t=fi(e,o))),t===1)throw n=ir,Lt(e,0),st(e,r),me(e,H()),n;if(t===6)st(e,r);else{if(o=e.current.alternate,(r&30)===0&&!hp(o)&&(t=wo(e,r),t===2&&(l=Ul(e),l!==0&&(r=l,t=fi(e,l))),t===1))throw n=ir,Lt(e,0),st(e,r),me(e,H()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:_t(e,de,Ye);break;case 3:if(st(e,r),(r&130023424)===r&&(t=Gi+500-H(),10<t)){if(eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Kl(_t.bind(null,e,de,Ye),t);break}_t(e,de,Ye);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-je(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=H()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mp(r/1960))-r,10<r){e.timeoutHandle=Kl(_t.bind(null,e,de,Ye),r);break}_t(e,de,Ye);break;case 5:_t(e,de,Ye);break;default:throw Error(h(329))}}}return me(e,H()),e.callbackNode===n?Pc.bind(null,e):null}function fi(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=wo(e,t),e!==2&&(t=de,de=n,t!==null&&pi(t)),e}function pi(e){de===null?de=e:de.push.apply(de,e)}function hp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ue(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~Xi,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-je(t),r=1<<n;e[n]=-1,t&=~r}}function Us(e){if((L&6)!==0)throw Error(h(327));un();var t=eo(e,0);if((t&1)===0)return me(e,H()),null;var n=wo(e,t);if(e.tag!==0&&n===2){var r=Ul(e);r!==0&&(t=r,n=fi(e,r))}if(n===1)throw n=ir,Lt(e,0),st(e,t),me(e,H()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,de,Ye),me(e,H()),null}function Zi(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(vn=H()+500,_o&&xt())}}function jt(e){ct!==null&&ct.tag===0&&(L&6)===0&&un();var t=L;L|=1;var n=Pe.transition,r=R;try{if(Pe.transition=null,R=1,e)return e()}finally{R=r,Pe.transition=n,L=t,(L&6)===0&&xt()}}function Ji(){ge=en.current,D(en)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kf(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(Ri(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lo();break;case 3:fn(),D(pe),D(le),$i();break;case 5:Ai(r);break;case 4:fn();break;case 13:D(U);break;case 19:D(U);break;case 10:Di(r.type._context);break;case 22:case 23:Ji()}n=n.return}if(Z=e,Q=e=yt(e.current,null),b=ge=t,Y=0,ir=null,Xi=Lo=Dt=0,de=Wn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Pt=null}return e}function Tc(e,t){do{var n=Q;try{if(Oi(),Br.current=mo,vo){for(var r=A.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}vo=!1}if(Ot=0,G=K=A=null,$n=!1,rr=0,Yi.current=null,n===null||n.return===null){Y=1,ir=t,Q=null;break}e:{var l=e,i=n.return,u=n,s=t;if(t=b,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,p=u,m=p.tag;if((p.mode&1)===0&&(m===0||m===11||m===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Es(i);if(y!==null){y.flags&=-257,_s(y,i,u,l,t),y.mode&1&&Cs(l,c,t),t=y,s=c;var w=t.updateQueue;if(w===null){var S=new Set;S.add(s),t.updateQueue=S}else w.add(s);break e}else{if((t&1)===0){Cs(l,c,t),qi();break e}s=Error(h(426))}}else if(j&&u.mode&1){var T=Es(i);if(T!==null){(T.flags&65536)===0&&(T.flags|=256),_s(T,i,u,l,t),Mi(pn(s,u));break e}}l=s=pn(s,u),Y!==4&&(Y=2),Wn===null?Wn=[l]:Wn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=fc(l,s,t);ys(l,d);break e;case 1:u=s;var a=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ht===null||!ht.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var g=pc(l,u,t);ys(l,g);break e}}l=l.return}while(l!==null)}Mc(n)}catch(z){t=z,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function Lc(){var e=ho.current;return ho.current=mo,e===null?mo:e}function qi(){(Y===0||Y===3||Y===2)&&(Y=4),Z===null||(Dt&268435455)===0&&(Lo&268435455)===0||st(Z,b)}function wo(e,t){var n=L;L|=2;var r=Lc();(Z!==e||b!==t)&&(Ye=null,Lt(e,t));do try{gp();break}catch(o){Tc(e,o)}while(!0);if(Oi(),L=n,ho.current=r,Q!==null)throw Error(h(261));return Z=null,b=0,Y}function gp(){for(;Q!==null;)Rc(Q)}function yp(){for(;Q!==null&&!Bd();)Rc(Q)}function Rc(e){var t=Oc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Mc(e):Q=t,Yi.current=null}function Mc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=cp(n,t,ge),n!==null){Q=n;return}}else{if(n=dp(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Y===0&&(Y=5)}function _t(e,t,n){var r=R,o=Pe.transition;try{Pe.transition=null,R=1,wp(e,t,n,r)}finally{Pe.transition=o,R=r}return null}function wp(e,t,n,r){do un();while(ct!==null);if((L&6)!==0)throw Error(h(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(ef(e,l),e===Z&&(Q=Z=null,b=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ar||(Ar=!0,Dc(br,function(){return un(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Pe.transition,Pe.transition=null;var i=R;R=1;var u=L;L|=4,Yi.current=null,pp(e,n),_c(n,e),Vf(Bl),to=!!Hl,Bl=Hl=null,e.current=n,vp(n,e,o),Qd(),L=u,R=i,Pe.transition=l}else e.current=n;if(Ar&&(Ar=!1,ct=e,yo=o),l=e.pendingLanes,l===0&&(ht=null),Xd(n.stateNode,r),me(e,H()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(go)throw go=!1,e=ci,ci=null,e;return(yo&1)!==0&&e.tag!==0&&un(),l=e.pendingLanes,(l&1)!==0?e===di?Hn++:(Hn=0,di=e):Hn=0,xt(),null}function un(){if(ct!==null){var e=fa(yo),t=Pe.transition,n=R;try{if(Pe.transition=null,R=16>e?16:e,ct===null)var r=!1;else{if(e=ct,ct=null,yo=0,(L&6)!==0)throw Error(h(331));var o=L;for(L|=4,k=e.current;k!==null;){var l=k,i=l.child;if((k.flags&16)!==0){var u=l.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(k=c;k!==null;){var p=k;switch(p.tag){case 0:case 11:case 15:Vn(8,p,l)}var m=p.child;if(m!==null)m.return=p,k=m;else for(;k!==null;){p=k;var v=p.sibling,y=p.return;if(xc(p),p===c){k=null;break}if(v!==null){v.return=y,k=v;break}k=y}}}var w=l.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var T=S.sibling;S.sibling=null,S=T}while(S!==null)}}k=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,k=i;else e:for(;k!==null;){if(l=k,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Vn(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,k=d;break e}k=l.return}}var a=e.current;for(k=a;k!==null;){i=k;var f=i.child;if((i.subtreeFlags&2064)!==0&&f!==null)f.return=i,k=f;else e:for(i=a;k!==null;){if(u=k,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:To(9,u)}}catch(z){V(u,u.return,z)}if(u===i){k=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,k=g;break e}k=u.return}}if(L=o,xt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(So,e)}catch{}r=!0}return r}finally{R=n,Pe.transition=t}}return!1}function As(e,t,n){t=pn(n,t),t=fc(e,t,1),e=mt(e,t,1),t=ae(),e!==null&&(ur(e,1,t),me(e,t))}function V(e,t,n){if(e.tag===3)As(e,e,n);else for(;t!==null;){if(t.tag===3){As(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=pn(n,e),e=pc(t,e,1),t=mt(t,e,1),e=ae(),t!==null&&(ur(t,1,e),me(t,e));break}}t=t.return}}function kp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(b&n)===n&&(Y===4||Y===3&&(b&130023424)===b&&500>H()-Gi?Lt(e,0):Xi|=n),me(e,t)}function Ic(e,t){t===0&&((e.mode&1)===0?t=1:(t=Er,Er<<=1,(Er&130023424)===0&&(Er=4194304)));var n=ae();e=et(e,t),e!==null&&(ur(e,t,n),me(e,n))}function Sp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ic(e,n)}function zp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),Ic(e,n)}var Oc;Oc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return fe=!1,ap(e,t,n);fe=(e.flags&131072)!==0}else fe=!1,j&&(t.flags&1048576)!==0&&Ua(t,so,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Kr(e,t),e=t.pendingProps;var o=an(t,le.current);ln(t,n),o=Wi(null,t,r,e,o,n);var l=Hi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(l=!0,io(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fi(t),o.updater=Po,t.stateNode=o,o._reactInternals=t,bl(t,r,e,n),t=ni(null,t,r,!0,l,n)):(t.tag=0,j&&l&&Li(t),se(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Kr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Cp(r),e=Ie(r,e),o){case 0:t=ti(null,t,r,e,n);break e;case 1:t=Ts(null,t,r,e,n);break e;case 11:t=Ns(null,t,r,e,n);break e;case 14:t=Ps(null,t,r,Ie(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),ti(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Ts(e,t,r,o,n);case 3:e:{if(gc(t),e===null)throw Error(h(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Ba(e,t),fo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=pn(Error(h(423)),t),t=Ls(e,t,r,n,o);break e}else if(r!==o){o=pn(Error(h(424)),t),t=Ls(e,t,r,n,o);break e}else for(ye=vt(t.stateNode.containerInfo.firstChild),we=t,j=!0,De=null,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===o){t=tt(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Qa(t),e===null&&Zl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ql(r,o)?i=null:l!==null&&Ql(r,l)&&(t.flags|=32),hc(e,t),se(e,t,i,n),t.child;case 6:return e===null&&Zl(t),null;case 13:return yc(e,t,n);case 4:return Ui(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Ns(e,t,r,o,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,I(ao,r._currentValue),r._currentValue=i,l!==null)if(Ue(l.value,i)){if(l.children===o.children&&!pe.current){t=tt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){i=l.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Je(-1,n&-n),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Jl(l.return,n,t),u.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(h(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Jl(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ln(t,n),o=Te(o),r=r(o),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,o=Ie(r,t.pendingProps),o=Ie(r.type,o),Ps(e,t,r,o,n);case 15:return vc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Kr(e,t),t.tag=1,ve(r)?(e=!0,io(t)):e=!1,ln(t,n),dc(t,r,o),bl(t,r,o,n),ni(null,t,r,!0,e,n);case 19:return wc(e,t,n);case 22:return mc(e,t,n)}throw Error(h(156,t.tag))};function Dc(e,t){return sa(e,t)}function xp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new xp(e,t,n,r)}function bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cp(e){if(typeof e=="function")return bi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yi)return 11;if(e===wi)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gr(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")bi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Bt:return Rt(n.children,o,l,t);case gi:i=8,o|=8;break;case xl:return e=Ne(12,n,t,o|2),e.elementType=xl,e.lanes=l,e;case Cl:return e=Ne(13,n,t,o),e.elementType=Cl,e.lanes=l,e;case El:return e=Ne(19,n,t,o),e.elementType=El,e.lanes=l,e;case Qs:return Ro(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hs:i=10;break e;case Bs:i=9;break e;case yi:i=11;break e;case wi:i=14;break e;case lt:i=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=Ne(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Rt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Ro(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Qs,e.lanes=n,e.stateNode={isHidden:!1},e}function kl(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Sl(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ep(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function eu(e,t,n,r,o,l,i,u,s){return e=new Ep(e,t,n,u,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ne(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fi(l),e}function _p(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jc(e){if(!e)return kt;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(ve(n))return ja(e,n,t)}return t}function Fc(e,t,n,r,o,l,i,u,s){return e=eu(n,r,!0,e,o,l,i,u,s),e.context=jc(null),n=e.current,r=ae(),o=gt(n),l=Je(r,o),l.callback=t??null,mt(n,l,o),e.current.lanes=o,ur(e,o,r),me(e,r),e}function Mo(e,t,n,r){var o=t.current,l=ae(),i=gt(o);return n=jc(n),t.context===null?t.context=n:t.pendingContext=n,t=Je(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mt(o,t,i),e!==null&&(Fe(e,o,i,l),Hr(e,o,i)),i}function ko(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function $s(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tu(e,t){$s(e,t),(e=e.alternate)&&$s(e,t)}function Np(){return null}var Uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function nu(e){this._internalRoot=e}Io.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));Mo(e,t,null,null)};Io.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jt(function(){Mo(null,e,null,null)}),t[be]=null}};function Io(e){this._internalRoot=e}Io.prototype.unstable_scheduleHydration=function(e){if(e){var t=ma();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&ga(e)}};function ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vs(){}function Pp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=ko(i);l.call(c)}}var i=Fc(t,r,e,0,null,!1,!1,"",Vs);return e._reactRootContainer=i,e[be]=i.current,qn(e.nodeType===8?e.parentNode:e),jt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var c=ko(s);u.call(c)}}var s=eu(e,0,!1,null,null,!1,!1,"",Vs);return e._reactRootContainer=s,e[be]=s.current,qn(e.nodeType===8?e.parentNode:e),jt(function(){Mo(t,s,n,r)}),s}function Do(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var u=o;o=function(){var s=ko(i);u.call(s)}}Mo(t,i,e,o)}else i=Pp(n,t,e,o,r);return ko(i)}pa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(zi(t,n|1),me(t,H()),(L&6)===0&&(vn=H()+500,xt()))}break;case 13:jt(function(){var r=et(e,1);if(r!==null){var o=ae();Fe(r,e,1,o)}}),tu(e,1)}};xi=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=ae();Fe(t,e,134217728,n)}tu(e,134217728)}};va=function(e){if(e.tag===13){var t=gt(e),n=et(e,t);if(n!==null){var r=ae();Fe(n,e,t,r)}tu(e,t)}};ma=function(){return R};ha=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};Dl=function(e,t,n){switch(t){case"input":if(Pl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Eo(r);if(!o)throw Error(h(90));Ys(r),Pl(r,o)}}}break;case"textarea":Gs(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};na=Zi;ra=jt;var Tp={usingClientEntryPoint:!1,Events:[ar,Xt,Eo,ea,ta,Zi]},Tn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lp={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ia(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||Np,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ln=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ln.isDisabled&&Ln.supportsFiber))try{So=Ln.inject(Lp),He=Ln}catch{}var Ln;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ru(t))throw Error(h(200));return _p(e,t,null,n)};ze.createRoot=function(e,t){if(!ru(e))throw Error(h(299));var n=!1,r="",o=Uc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=eu(e,1,!1,null,null,n,!1,r,o),e[be]=t.current,qn(e.nodeType===8?e.parentNode:e),new nu(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=ia(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return jt(e)};ze.hydrate=function(e,t,n){if(!Oo(t))throw Error(h(200));return Do(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!ru(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Uc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Fc(t,null,e,1,n??null,o,!1,l,i),e[be]=t.current,qn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Io(t)};ze.render=function(e,t,n){if(!Oo(t))throw Error(h(200));return Do(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Oo(e))throw Error(h(40));return e._reactRootContainer?(jt(function(){Do(null,null,e,!1,function(){e._reactRootContainer=null,e[be]=null})}),!0):!1};ze.unstable_batchedUpdates=Zi;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oo(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Do(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426"});var Wc=Ke((ov,Vc)=>{"use strict";function $c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($c)}catch(e){console.error(e)}}$c(),Vc.exports=Ac()});var Bc=Ke(ou=>{"use strict";var Hc=Wc();ou.createRoot=Hc.createRoot,ou.hydrateRoot=Hc.hydrateRoot;var lv});var Gc=Ke(jo=>{"use strict";var Mp=wn(),Ip=Symbol.for("react.element"),Op=Symbol.for("react.fragment"),Dp=Object.prototype.hasOwnProperty,jp=Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fp={key:!0,ref:!0,__self:!0,__source:!0};function Xc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Dp.call(t,r)&&!Fp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ip,type:e,key:l,ref:i,props:o,_owner:jp.current}}jo.Fragment=Op;jo.jsx=Xc;jo.jsxs=Xc});var lu=Ke((av,Zc)=>{"use strict";Zc.exports=Gc()});var Jp={};dd(Jp,{init:()=>Zp});var td=gn(wn()),nd=gn(Bc());var J=gn(wn());async function*Qc(e){let t=new TextDecoder,n="";try{for(;;){let{done:r,value:o}=await e.read();if(r){if(n.trim()){let i=Rp(n);for(let u of i)yield u}break}n+=t.decode(o,{stream:!0});let l=n.split(`
`);n=l.pop()||"";for(let i of l)if(i.startsWith("data: ")){let u=i.slice(6).trim();if(u)try{yield JSON.parse(u)}catch(s){console.error("Failed to parse SSE data:",u,s)}}}}finally{e.releaseLock()}}function Rp(e){let t=[],n=e.split(`
`);for(let r of n)if(r.startsWith("data: ")){let o=r.slice(6).trim();if(o)try{t.push(JSON.parse(o))}catch(l){console.error("Failed to parse SSE data:",o,l)}}return t}async function*Kc(e){let{baseUrl:t,message:n,persona:r,authToken:o,authType:l,maxTokens:i,abortSignal:u}=e,s={"Content-Type":"application/json",Accept:"text/event-stream"};l==="apiKey"?s["X-API-Key"]=o:s.Authorization=`Bearer ${o}`;let c={message:n};r&&(c.persona=r),i&&(c.max_tokens=i),console.log("sending completion request: ",JSON.stringify(c));let p=await fetch(`${t}/api/chat/completion/stream`,{method:"POST",headers:s,body:JSON.stringify(c),signal:u});if(!p.ok){let v=`HTTP ${p.status}: ${p.statusText}`;try{console.error(`error from completion: ${p.status} : ${p.statusText}`);let y=await p.json();v=y.message||y.detail||v}catch{}yield{type:"error",message:`${p.status} ${v}`};return}if(!p.body){yield{type:"error",message:"No response body received"};return}let m=p.body.getReader();yield*Qc(m)}async function*Yc(e){let{baseUrl:t,sessionId:n,message:r,authToken:o,authType:l,maxTokens:i,abortSignal:u}=e,s={"Content-Type":"application/json",Accept:"text/event-stream"};l==="apiKey"?s["X-API-Key"]=o:s.Authorization=`Bearer ${o}`;let c={session:n,message:r};i&&(c.max_tokens=i);let p=await fetch(`${t}/api/chat/continuation/stream`,{method:"POST",headers:s,body:JSON.stringify(c),signal:u});if(!p.ok){let v=`HTTP ${p.status}: ${p.statusText}`;try{let y=await p.json();v=y.message||y.detail||v}catch{}yield{type:"error",message:`${p.status} ${v}`};return}if(!p.body){yield{type:"error",message:"No response body received"};return}let m=p.body.getReader();yield*Qc(m)}var E=gn(lu()),Up="https://chat.converzent.de",Ap=e=>{if(!e?.position)return{bottom:"1rem",right:"1rem"};if(typeof e.position=="string")switch(e.position){case"bottom-right":return{bottom:"1rem",right:"1rem"};case"bottom-left":return{bottom:"1rem",left:"1rem"};case"top-right":return{top:"1rem",right:"1rem"};case"top-left":return{top:"1rem",left:"1rem"};default:return{bottom:"1rem",right:"1rem"}}else{let t={};return e.position.bottom&&(t.bottom=e.position.bottom),e.position.top&&(t.top=e.position.top),e.position.left&&(t.left=e.position.left),e.position.right&&(t.right=e.position.right),t}},$p=e=>{if(!e?.dialogSize)return{width:"350px",height:"500px"};if(typeof e.dialogSize=="string")switch(e.dialogSize){case"small":return{width:"300px",height:"400px"};case"medium":return{width:"350px",height:"500px"};case"large":return{width:"400px",height:"600px"};default:return{width:"350px",height:"500px"}}else return{width:`${Math.max(250,e.dialogSize.width)}px`,height:`${Math.max(300,e.dialogSize.height)}px`}},Vp=e=>e?.frameColor||"#E5E7EB",Wp=(e,t)=>{let n=e?.buttonColor;return t?{backgroundColor:n?.open||"#1F2937"}:{backgroundColor:n?.normal||"#2563EB","--hover-color":n?.hover||"#1D4ED8"}},Jc=()=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:(0,E.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"})}),qc=()=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-6 cvz-h-6",children:(0,E.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),Hp=()=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:(0,E.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})}),Bp=()=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"cvz-w-5 cvz-h-5",children:(0,E.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),Qp=({title:e,subtitle:t,onClose:n,onClear:r})=>(0,E.jsxs)("div",{className:"cvz-bg-gradient-to-b cvz-from-blue-600 cvz-to-blue-500 cvz-text-white cvz-p-4 cvz-shadow-md cvz-flex cvz-justify-between cvz-items-start",children:[(0,E.jsxs)("div",{className:"cvz-flex cvz-items-center cvz-gap-3",children:[(0,E.jsxs)("div",{className:"cvz-relative",children:[(0,E.jsx)("div",{className:"cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-border-2 cvz-border-blue-600"}),(0,E.jsx)("div",{className:"cvz-absolute cvz-top-0 cvz-left-0 cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-animate-ping cvz-opacity-75"})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("h3",{className:"cvz-font-bold cvz-text-lg cvz-leading-tight",children:e}),t&&(0,E.jsx)("p",{className:"cvz-text-xs cvz-text-blue-100 cvz-mt-0.5",children:t})]})]}),(0,E.jsxs)("div",{className:"cvz-flex cvz-gap-2",children:[(0,E.jsx)("button",{onClick:r,className:"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-transition-colors cvz-p-1 cvz-rounded-md cvz-hover:cvz-bg-blue-600/50",title:"Clear History",children:(0,E.jsx)(Bp,{})}),(0,E.jsx)("button",{onClick:n,className:"cvz-text-blue-200 cvz-hover:cvz-text-white cvz-transition-colors cvz-p-1 cvz-rounded-md cvz-hover:cvz-bg-blue-600/50",title:"Close Chat",children:(0,E.jsx)(qc,{})})]})]}),Kp=({messages:e,isStreaming:t,streamingMessage:n,messagesEndRef:r})=>{let o=(0,J.useRef)(null),[l,i]=(0,J.useState)(!0);return(0,J.useEffect)(()=>{let u=o.current;if(!u)return;let s=()=>{let{scrollTop:c,scrollHeight:p,clientHeight:m}=u,v=p-c-m<100;i(v)};return u.addEventListener("scroll",s),()=>u.removeEventListener("scroll",s)},[]),(0,J.useEffect)(()=>{l&&r.current&&r.current.scrollIntoView({behavior:"smooth"})},[e,n,l,r]),(0,E.jsxs)("div",{ref:o,className:"cvz-flex-1 cvz-overflow-y-auto cvz-p-4 cvz-bg-gray-50 cvz-space-y-4",children:[e.length===0&&!n&&(0,E.jsxs)("div",{className:"cvz-flex cvz-flex-col cvz-items-center cvz-justify-center cvz-h-full cvz-text-gray-400 cvz-space-y-2",children:[(0,E.jsx)(Jc,{}),(0,E.jsx)("p",{className:"cvz-text-sm",children:"Start a conversation"})]}),e.map(u=>(0,E.jsx)("div",{className:`cvz-flex ${u.role==="USER"?"cvz-justify-end":"cvz-justify-start"}`,children:(0,E.jsx)("div",{className:`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-text-sm cvz-shadow-sm ${u.role==="USER"?"cvz-bg-blue-600 cvz-text-white cvz-rounded-br-none":"cvz-bg-white cvz-text-gray-800 cvz-border cvz-border-gray-100 cvz-rounded-bl-none"}`,children:u.content})},u.createdAt.toString())),t&&n&&(0,E.jsx)("div",{className:"cvz-flex cvz-justify-start",children:(0,E.jsx)("div",{className:"cvz-max-w-[85%] cvz-bg-white cvz-border cvz-border-gray-100 cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-text-sm cvz-shadow-sm cvz-text-gray-800",children:n})}),t&&!n&&(0,E.jsx)("div",{className:"cvz-flex cvz-justify-start",children:(0,E.jsx)("div",{className:"cvz-bg-white cvz-border cvz-border-gray-100 cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-shadow-sm",children:(0,E.jsxs)("div",{className:"cvz-flex cvz-space-x-1",children:[(0,E.jsx)("div",{className:"cvz-w-2 cvz-h-2 cvz-bg-gray-400 cvz-rounded-full cvz-animate-bounce",style:{animationDelay:"0ms"}}),(0,E.jsx)("div",{className:"cvz-w-2 cvz-h-2 cvz-bg-gray-400 cvz-rounded-full cvz-animate-bounce",style:{animationDelay:"150ms"}}),(0,E.jsx)("div",{className:"cvz-w-2 cvz-h-2 cvz-bg-gray-400 cvz-rounded-full cvz-animate-bounce",style:{animationDelay:"300ms"}})]})})}),(0,E.jsx)("div",{ref:r})]})},Yp=({value:e,onChange:t,onSubmit:n,isLoading:r,placeholder:o})=>(0,E.jsxs)("form",{onSubmit:n,className:"cvz-p-4 cvz-bg-white cvz-border-t cvz-border-gray-100",children:[(0,E.jsxs)("div",{className:"cvz-relative cvz-flex cvz-items-center",children:[(0,E.jsx)("input",{type:"text",value:e,onChange:l=>t(l.target.value),placeholder:o,className:"cvz-w-full cvz-bg-gray-50 cvz-border cvz-border-gray-200 cvz-text-gray-900 cvz-text-sm cvz-rounded-full cvz-pl-4 cvz-pr-12 cvz-py-3 cvz-focus:cvz-outline-none cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-1 cvz-focus:cvz-ring-blue-500 cvz-transition-all"}),(0,E.jsx)("button",{type:"submit",disabled:!e.trim()||r,className:"cvz-absolute cvz-right-2 cvz-p-2 cvz-bg-blue-600 cvz-text-white cvz-rounded-full cvz-hover:cvz-bg-blue-700 cvz-disabled:cvz-opacity-50 cvz-disabled:cvz-hover:cvz-bg-blue-600 cvz-transition-colors cvz-shadow-sm",children:(0,E.jsx)(Hp,{})})]}),(0,E.jsx)("div",{className:"cvz-text-center cvz-mt-2",children:(0,E.jsx)("p",{className:"cvz-text-[10px] cvz-text-gray-400",children:"Powered by ConverZent"})})]}),Xp=({config:e})=>{let[t,n]=(0,J.useState)(!1),[r,o]=(0,J.useState)([]),[l,i]=(0,J.useState)(""),[u,s]=(0,J.useState)(!1),[c,p]=(0,J.useState)(!1),[m,v]=(0,J.useState)(""),[y,w]=(0,J.useState)(null),S=(0,J.useRef)(null),T=(0,J.useRef)(null),d=(0,J.useRef)(null);(0,J.useEffect)(()=>{(async()=>{try{let B=await e.onLoadMessages(),X=[];if(Array.isArray(B)&&B.length>0?X=B:e.initialGreeting&&(X=[{content:e.initialGreeting,role:"SYSTEM",createdAt:new Date().toISOString()}]),o(X),e.sessionId)w(e.sessionId),localStorage.setItem("cvz-widget-session-id",e.sessionId);else{let F=localStorage.getItem("cvz-widget-session-id");F&&w(F)}}catch(B){console.error("Failed to load messages:",B)}})()},[e]);let a=async(ie=!1)=>{if(e.apiKey)return{token:e.apiKey,type:"apiKey"};if(!e.getToken)throw new Error("Either apiKey or getToken must be provided");if(!ie){let X=Date.now(),F=d.current;if(F&&(F.expiresAt===null||F.expiresAt>X))return{token:F.token,type:"bearer"}}let B=await e.getToken();if(typeof B=="string")return d.current={token:B,expiresAt:null},{token:B,type:"bearer"};{let X=B.expiresAt||null;return d.current={token:B.token,expiresAt:X},{token:B.token,type:"bearer"}}},f=async(ie,B,X,F=0)=>{try{let xe=await a(F>0),uu=e.chatUrl||Up,rd=!y,Uo;rd?Uo=Kc({baseUrl:uu,message:ie.content,persona:e.persona,authToken:xe.token,authType:xe.type,abortSignal:X.signal}):Uo=Yc({baseUrl:uu,sessionId:y,message:ie.content,authToken:xe.token,authType:xe.type,abortSignal:X.signal});let dr="",Ao=!1;for await(let Qe of Uo){if(X.signal.aborted)break;switch(Qe.type){case"session_created":case"session_continued":Qe.session_id&&(w(Qe.session_id),localStorage.setItem("cvz-widget-session-id",Qe.session_id),console.log("Session ID:",Qe.session_id));break;case"token":Qe.content&&(dr+=Qe.content,v(dr));break;case"done":if(dr){let ld={content:dr,role:"ASSISTANT",createdAt:new Date().toISOString(),sources:Qe.sources},au=[...B,ld];o(au),await e.onSaveMessages(au)}v(""),p(!1),s(!1),T.current=null;return;case"error":let At=Qe.message||"";if((At.includes("401")||At.includes("403")||At.includes("Unauthorized")||At.includes("Forbidden"))&&F<1&&e.getToken&&!e.apiKey){console.log("Unauthorized error detected, refreshing token and retrying..."),d.current=null,Ao=!0;break}console.error("Stream error:",At);let od={content:`Error: ${At||"An error occurred"}`,role:"SYSTEM",createdAt:new Date().toISOString()},su=[...B,od];o(su),await e.onSaveMessages(su),v(""),p(!1),s(!1),T.current=null;return}}if(Ao&&F<1)return f(ie,B,X,F+1);!X.signal.aborted&&!Ao&&(console.error("Stream ended unexpectedly"),v(""),p(!1),s(!1),T.current=null)}catch(xe){if(xe instanceof Error&&(xe.message.includes("401")||xe.message.includes("403"))&&F<1&&e.getToken&&!e.apiKey)return console.log("Unauthorized error detected, refreshing token and retrying..."),d.current=null,f(ie,B,X,F+1);throw xe}},g=async ie=>{if(ie?.preventDefault(),!l.trim()||c)return;T.current&&T.current.abort();let B={content:l.trim(),role:"USER",createdAt:new Date().toISOString()},X=[...r,B];o(X),i(""),s(!0),p(!0),v("");try{let F=new AbortController;T.current=F,await f(B,X,F)}catch(F){if(console.error("Error sending message:",F),F instanceof Error&&F.name==="AbortError"){v(""),p(!1),s(!1),T.current=null;return}let Fo={content:`Error: ${F instanceof Error?F.message:"Failed to send message"}`,role:"SYSTEM",createdAt:new Date().toISOString()},xe=[...X,Fo];o(xe),await e.onSaveMessages(xe),v(""),p(!1),s(!1),T.current=null}},z=async()=>{window.confirm("Are you sure you want to clear your chat history?")&&(T.current&&(T.current.abort(),T.current=null),o([]),v(""),w(null),p(!1),s(!1),localStorage.removeItem("cvz-widget-session-id"),await e.onSaveMessages([]))},x=Ap(e.style),C=$p(e.style),_=Vp(e.style),W=Wp(e.style,t),N=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="bottom-left")||typeof e.style.position=="object"&&e.style.position.bottom,he=!e.style?.position||typeof e.style.position=="string"&&(e.style.position==="bottom-right"||e.style.position==="top-right")||typeof e.style.position=="object"&&e.style.position.right;return(0,E.jsxs)("div",{className:"cvz-fixed cvz-z-[9999] cvz-font-sans",style:x,children:[(0,E.jsxs)("div",{className:`
          cvz-absolute cvz-bg-white cvz-rounded-2xl cvz-shadow-2xl cvz-flex cvz-flex-col cvz-overflow-hidden
          cvz-transition-all cvz-duration-300
          ${N?"cvz-bottom-20":"cvz-top-20"}
          ${he?"cvz-right-0":"cvz-left-0"}
          ${N&&he?"cvz-origin-bottom-right":N&&!he?"cvz-origin-bottom-left":!N&&he?"cvz-origin-top-right":"cvz-origin-top-left"}
          ${t?"cvz-opacity-100 cvz-scale-100 cvz-translate-y-0":"cvz-opacity-0 cvz-scale-95 cvz-translate-y-4 cvz-pointer-events-none"}
        `,style:{...C,borderColor:_,borderWidth:"1px",borderStyle:"solid"},children:[(0,E.jsx)(Qp,{title:e.headerMsg||"Support Chat",subtitle:"We typically reply in a few minutes",onClose:()=>n(!1),onClear:z}),(0,E.jsx)(Kp,{messages:r,isStreaming:c,streamingMessage:m,messagesEndRef:S}),(0,E.jsx)(Yp,{value:l,onChange:i,onSubmit:g,isLoading:u||c,placeholder:e.promptPlaceholder||"Type a message..."})]}),(0,E.jsx)("button",{onClick:()=>n(!t),className:`
          cvz-flex cvz-items-center cvz-justify-center
          cvz-w-14 cvz-h-14 cvz-rounded-full cvz-shadow-lg cvz-transition-all cvz-duration-300
          ${t?"cvz-rotate-90":"cvz-hover:cvz-scale-105"}
        `,style:{backgroundColor:W.backgroundColor},onMouseEnter:ie=>{!t&&e.style?.buttonColor?.hover&&(ie.currentTarget.style.backgroundColor=e.style.buttonColor.hover)},onMouseLeave:ie=>{t||(ie.currentTarget.style.backgroundColor=W.backgroundColor)},children:(0,E.jsx)("div",{className:"cvz-text-white",children:t?(0,E.jsx)(qc,{}):(0,E.jsx)(Jc,{})})})]})},bc=Xp;var iu=`*, ::before, ::after {
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

.cvz-mt-0\\.5 {
  margin-top: 0.125rem;
}

.cvz-mt-2 {
  margin-top: 0.5rem;
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

.cvz-overflow-y-auto {
  overflow-y: auto;
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

.cvz-bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));
}

.cvz-bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity, 1));
}

.cvz-bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
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

.cvz-to-blue-500 {
  --tw-gradient-to: #3b82f6 var(--tw-gradient-to-position);
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

.cvz-py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
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

.cvz-font-sans {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.cvz-text-\\[10px\\] {
  font-size: 10px;
}

.cvz-text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.cvz-text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.cvz-text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.cvz-font-bold {
  font-weight: 700;
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

.cvz-text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
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
`;var ed=!1;function Zp(e){if(ed){console.warn("GMCWidget is already initialized.");return}console.log("Initializing GMCWidget..."),console.log("CSS Length:",iu.length);let t=document.createElement("div");t.id="cvz-widget-host",document.body.appendChild(t);let n=t.attachShadow({mode:"open"}),r=document.createElement("style");r.textContent=iu,n.appendChild(r);let o=document.createElement("div");o.id="cvz-root",n.appendChild(o),(0,nd.createRoot)(o).render(td.default.createElement(bc,{config:e})),ed=!0}return fd(Jp);})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
