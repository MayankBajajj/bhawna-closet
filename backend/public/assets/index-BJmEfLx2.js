var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var T=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(T,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(T,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,T=ie.port2;ie.port1.onmessage=re,w=function(){T.postMessage(null)}}else w=function(){_(re,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),T=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},O=[],de=-1;function fe(e){return{current:e}}function k(e){0>de||(e.current=O[de],O[de]=null,de--)}function A(e,t){de++,O[de]=e.current,e.current=t}var pe=fe(null),me=fe(null),he=fe(null),ge=fe(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}k(pe),A(pe,e)}function ve(){k(pe),k(me),k(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(k(pe),k(me)),ge.current===e&&(k(ge),Qf._currentValue=ue)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,j=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,M=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function et(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function tt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&it(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function it(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function at(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ot(e,t){var n=t&-t;return n=n&42?1:st(n),(n&(e.suspendedLanes|t))===0?n:0}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ut(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var dt=Math.random().toString(36).slice(2),ft=`__reactFiber$`+dt,pt=`__reactProps$`+dt,mt=`__reactContainer$`+dt,ht=`__reactEvents$`+dt,gt=`__reactListeners$`+dt,_t=`__reactHandles$`+dt,vt=`__reactResources$`+dt,yt=`__reactMarker$`+dt;function bt(e){delete e[ft],delete e[pt],delete e[ht],delete e[gt],delete e[_t]}function xt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ft])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function St(e){if(e=e[ft]||e[mt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ct(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function wt(e){var t=e[vt];return t||=e[vt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Tt(e){e[yt]=!0}var Et=new Set,Dt={};function Ot(e,t){kt(e,t),kt(e+`Capture`,t)}function kt(e,t){for(Dt[e]=t,e=0;e<t.length;e++)Et.add(t[e])}var At=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),jt={},Mt={};function Nt(e){return Oe.call(Mt,e)?!0:Oe.call(jt,e)?!1:At.test(e)?Mt[e]=!0:(jt[e]=!0,!1)}function Pt(e,t,n){if(Nt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ft(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function It(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Lt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Rt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function zt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bt(e){if(!e._valueTracker){var t=Rt(e)?`checked`:`value`;e._valueTracker=zt(e,t,``+e[t])}}function Vt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Rt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ht(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function Wt(e){return e.replace(Ut,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Gt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Lt(t)):e.value!==``+Lt(t)&&(e.value=``+Lt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):qt(e,o,Lt(n)):qt(e,o,Lt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Lt(s):e.removeAttribute(`name`)}function Kt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Bt(e);return}n=n==null?``:``+Lt(n),t=t==null?n:``+Lt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Bt(e)}function qt(e,t,n){t===`number`&&Ht(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yt(e,t,n){if(t!=null&&(t=``+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Lt(n)}function Xt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Lt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Bt(e)}function N(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Zt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function $t(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Qt(e,o,t[o])}function en(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var tn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),nn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rn(e){return nn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function an(){}var on=null;function sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,ln=null;function un(e){var t=St(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Wt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[pt]||null;if(!a)throw Error(i(90));Gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Vt(r)}break a;case`textarea`:Yt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}}}var dn=!1;function fn(e,t,n){if(dn)return e(t,n);dn=!0;try{return e(t)}finally{if(dn=!1,(cn!==null||ln!==null)&&(bu(),cn&&(t=cn,e=ln,ln=cn=null,un(t),e)))for(t=0;t<e.length;t++)un(e[t])}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[pt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var mn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),hn=!1;if(mn)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){hn=!0}}),window.addEventListener(`test`,gn,gn),window.removeEventListener(`test`,gn,gn)}catch{hn=!1}var _n=null,vn=null,yn=null;function bn(){if(yn)return yn;var e,t=vn,n=t.length,r,i=`value`in _n?_n.value:_n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yn=i.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Cn(){return!1}function wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Sn:Cn,this.isPropagationStopped=Cn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},En=wn(Tn),Dn=h({},Tn,{view:0,detail:0}),On=wn(Dn),kn,An,jn,Mn=h({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==jn&&(jn&&e.type===`mousemove`?(kn=e.screenX-jn.screenX,An=e.screenY-jn.screenY):An=kn=0,jn=e),kn)},movementY:function(e){return`movementY`in e?e.movementY:An}}),Nn=wn(Mn),Pn=wn(h({},Mn,{dataTransfer:0})),Fn=wn(h({},Dn,{relatedTarget:0})),In=wn(h({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0})),Ln=wn(h({},Tn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Rn=wn(h({},Tn,{data:0})),zn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Bn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Vn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vn[e])?!!t[e]:!1}function Un(){return Hn}var Wn=wn(h({},Dn,{key:function(e){if(e.key){var t=zn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=xn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Bn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return e.type===`keypress`?xn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?xn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Gn=wn(h({},Mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Kn=wn(h({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),qn=wn(h({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=wn(h({},Mn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=wn(h({},Tn,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=mn&&`CompositionEvent`in window,Qn=null;mn&&`documentMode`in document&&(Qn=document.documentMode);var $n=mn&&`TextEvent`in window&&!Qn,er=mn&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=bn(),yn=vn=_n=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){cn?ln?ln.push(r):ln=[r]:cn=r,t=Ed(t,`onChange`),0<t.length&&(n=new En(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){yd(e,0)}function mr(e){if(Vt(Ct(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(mn){var _r;if(mn){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,sn(e)),fn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ht(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ht(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=mn&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Ht(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=Ed(Ir,`onSelect`),0<r.length&&(t=new En(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};mn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),P=Wr(`animationstart`),qr=Wr(`transitionrun`),Jr=Wr(`transitionstart`),Yr=Wr(`transitioncancel`),Xr=Wr(`transitionend`),Zr=new Map,Qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Qr.push(`scrollEnd`);function $r(e,t){Zr.set(e,t),Ot(t,[e])}var ei=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ti=[],ni=0,ri=0;function ii(){for(var e=ni,t=ri=ni=0;t<e;){var n=ti[t];ti[t++]=null;var r=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&si(n,i,a)}}function ai(e,t,n,r){ti[ni++]=e,ti[ni++]=t,ti[ni++]=n,ti[ni++]=r,ri|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function oi(e,t,n,r){return ai(e,t,n,r),ci(e)}function F(e,t){return ai(e,null,null,t),ci(e)}function si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ci(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)fi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=di(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return gi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=di(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=di(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=di(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=di(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function Mi(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-Ue(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Ni(e){e.return!==null&&(ji(e,1),Mi(e,1,0))}function Pi(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var I=null,L=null,R=!1,Ii=null,Li=!1,Ri=Error(i(519));function zi(e){throw Gi(xi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ri}function Bi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ft]=e,t[pt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||zi(e,!0)}function Vi(e){for(I=e.return;I;)switch(I.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:I=I.return}}function Hi(e){if(e!==I)return!1;if(!R)return Vi(e),R=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&L&&zi(e),Vi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=uf(e)}else t===27?(t=L,Zd(e.type)?(e=lf,lf=null,L=e):L=t):L=I?cf(e.stateNode.nextSibling):null;return!0}function Ui(){L=I=null,R=!1}function Wi(){var e=Ii;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ii=null),e}function Gi(e){Ii===null?Ii=[e]:Ii.push(e)}var Ki=fe(null),qi=null,Ji=null;function Yi(e,t,n){A(Ki,t._currentValue),t._currentValue=n}function Xi(e){e._currentValue=Ki.current,k(Ki)}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Zi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Zi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function $i(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Qi(t,e,n,r),t.flags|=262144}function ea(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ta(e){qi=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function na(e){return ia(qi,e)}function ra(e,t){return qi===null&&ta(e),ia(e,t)}function ia(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ji===null){if(e===null)throw Error(i(308));Ji=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ji=Ji.next=t;return n}var aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},oa=t.unstable_scheduleCallback,sa=t.unstable_NormalPriority,ca={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function la(){return{controller:new aa,data:new Map,refCount:0}}function ua(e){e.refCount--,e.refCount===0&&oa(sa,function(){e.controller.abort()})}var da=null,fa=0,pa=0,ma=null;function ha(e,t){if(da===null){var n=da=[];fa=0,pa=dd(),ma={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return fa++,t.then(ga,ga),t}function ga(){if(--fa===0&&da!==null){ma!==null&&(ma.status=`fulfilled`);var e=da;da=null,pa=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _a(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var va=E.S;E.S=function(e,t){eu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ha(e,t),va!==null&&va(e,t)};var ya=fe(null);function ba(){var e=ya.current;return e===null?q.pooledCache:e}function xa(e,t){t===null?A(ya,ya.current):A(ya,t.pool)}function Sa(){var e=ba();return e===null?null:{parent:ca._currentValue,pool:e}}var Ca=Error(i(460)),wa=Error(i(474)),Ta=Error(i(542)),Ea={then:function(){}};function Da(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Oa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(an,an),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e;default:if(typeof t.status==`string`)t.then(an,an);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e}throw Aa=t,Ca}}function ka(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Aa=e,Ca):e}}var Aa=null;function ja(){if(Aa===null)throw Error(i(459));var e=Aa;return Aa=null,e}function Ma(e){if(e===Ca||e===Ta)throw Error(i(483))}var Na=null,Pa=0;function Fa(e){var t=Pa;return Pa+=1,Na===null&&(Na=[]),Oa(Na,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function La(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ra(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&ka(i)===t.type)?(t=a(t,n.props),Ia(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),Ia(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=gi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=hi(t.type,t.key,t.props,null,e.mode,n),Ia(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case w:return t=ka(t),f(e,t,n)}if(le(t)||oe(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Fa(t),n);if(t.$$typeof===S)return f(e,ra(e,t),n);La(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=ka(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Fa(n),r);if(n.$$typeof===S)return p(e,t,ra(e,n),r);La(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=ka(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Fa(r),i);if(r.$$typeof===S)return m(e,t,n,ra(t,r),i);La(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),R&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return R&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),R&&ji(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),R&&ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return R&&ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),R&&ji(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&ka(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ia(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=gi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=hi(o.type,o.key,o.props,null,e.mode,c),Ia(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=yi(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=ka(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Fa(o),c);if(o.$$typeof===S)return b(e,r,ra(e,o),c);La(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=_i(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Pa=0;var i=b(e,t,n,r);return Na=null,i}catch(t){if(t===Ca||t===Ta)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var za=Ra(!0),Ba=Ra(!1),Va=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ci(e),si(e,null,n),t}return ai(e,r,t,n),ci(e)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}function qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ja=!1;function Ya(){if(Ja){var e=ma;if(e!==null)throw e}}function Xa(e,t,n,r){Ja=!1;var i=e.updateQueue;Va=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===pa&&(Ja=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Va=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Za(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Za(n[e],t)}var $a=fe(null),eo=fe(0);function to(e,t){e=Ul,A(eo,e),A($a,t),Ul=e|t.baseLanes}function no(){A(eo,Ul),A($a,$a.current)}function ro(){Ul=eo.current,k($a),k(eo)}var io=fe(null),ao=null;function oo(e){var t=e.alternate;A(fo,fo.current&1),A(io,e),ao===null&&(t===null||$a.current!==null||t.memoizedState!==null)&&(ao=e)}function so(e){A(fo,fo.current),A(io,e),ao===null&&(ao=e)}function co(e){e.tag===22?(A(fo,fo.current),A(io,e),ao===null&&(ao=e)):lo(e)}function lo(){A(fo,fo.current),A(io,io.current)}function uo(e){k(io),ao===e&&(ao=null),k(fo)}var fo=fe(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?zs:Bs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){E.H=Rs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||rc||(e=e.dependencies,e!==null&&ea(e)&&(rc=!0))}function Eo(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Vs,o=t(n,r)}while(_o);return o}function Do(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function H(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=Oa(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?zs:Bs),e}function U(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===S)return na(e)}throw Error(i(438,String(e)))}function Po(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){return Lo(H(),B,e)}function Lo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===pa&&(d=!0);else if((mo&p)===p){u=u.next,p===pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(rc=!0,d&&(n=ma,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ro(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(rc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zo(e,t,n){var r=z,a=H(),o=R;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((B||a).memoizedState,n);if(s&&(a.memoizedState=n,rc=!0),a=a.queue,us(Ho.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||mo&127||Bo(r,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Mo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Wo(e){var t=F(e,2);t!==null&&hu(t,e,2)}function Go(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t}function Ko(e,t,n,r){return e.baseState=n,Lo(e,B,typeof r==`function`?r:Fo)}function qo(e,t,n,r,a){if(Fs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Jo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Yo(e,t,s)}catch(n){Zo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Yo(e,t,a)}catch(n){Zo(e,t,n)}}function Yo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Xo(e,t,n)},function(n){return Zo(e,t,n)}):Xo(e,t,n)}function Xo(e,t,n){t.status=`fulfilled`,t.value=n,Qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jo(e,n)))}function Zo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Qo(t),t=t.next;while(t!==r)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function es(e,t){if(R){var n=q.formState;if(n!==null){a:{var r=z;if(R){if(L){b:{for(var i=L,a=Li;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){L=cf(i.nextSibling),r=i.data===`F!`;break a}}zi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},n.queue=r,n=Ms.bind(null,z,r),r.dispatch=n,r=Go(!1),a=Ps.bind(null,z,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ts(e){return ns(H(),B,e)}function ns(e,t,n){if(t=Lo(e,t,$o)[0],e=Io(Fo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Ca?Ta:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,as(9,{destroy:void 0},rs.bind(null,i,n),null)),[r,a,e]}function rs(e,t){e.action=t}function is(e){var t=H(),n=B;if(n!==null)return ns(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function as(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Mo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return H().memoizedState}function ss(e,t,n,r){var i=jo();z.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,r===void 0?null:r)}function cs(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=as(t,a,n,r):(z.flags|=e,i.memoizedState=as(1|t,a,n,r))}function ls(e,t){ss(8390656,8,e,t)}function us(e,t){cs(2048,8,e,t)}function ds(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Mo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fs(e){var t=H().memoizedState;return ds({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ps(e,t){return cs(4,2,e,t)}function ms(e,t){return cs(4,4,e,t)}function hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){n=n==null?null:n.concat([e]),cs(4,4,hs.bind(null,t,e),n)}function _s(){}function vs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||mo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Gl|=e,n)}function xs(e,t,n,r){return Dr(n,t)?n:$a.current===null?!(mo&42)||mo&1073741824&&!(Y&261930)?(rc=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Gl|=e,t):(e=bs(e,n,r),Dr(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Ps(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,_a(c,r),pu(e)):Ns(e,t,r,pu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ts(e).queue;Ss(e,a,t,ue,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},pu())}function Ds(){return na(Qf)}function Os(){return H().memoizedState}function ks(){return H().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Wa(n);var r=Ga(t,e,n);r!==null&&(hu(r,t,n),Ka(r,t,n)),t={cache:la()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=oi(e,t,n,r),n!==null&&(hu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,pu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return ai(e,t,i,0),q===null&&ii(),!1}catch{}if(n=oi(e,t,i,r),n!==null)return hu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(i(479))}else t=oi(e,n,r,2),t!==null&&hu(t,e,2)}function Fs(e){var t=e.alternate;return e===z||t!==null&&t===z}function Is(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}var Rs={readContext:na,use:U,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};Rs.useEffectEvent=V;var zs={readContext:na,use:U,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:na,useEffect:ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,n=Ms.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_s,useDeferredValue:function(e,t){return bs(jo(),e,t)},useTransition:function(){var e=Go(!1);return e=Ss.bind(null,z,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=jo();if(R){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Bo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ls(Ho.bind(null,r,o,e),[e]),r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=q.identifierPrefix;if(R){var n=Ai,r=ki;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:es,useActionState:es,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return jo().memoizedState=As.bind(null,z)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:na,use:U,useCallback:vs,useContext:na,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Io,useRef:os,useState:function(){return Io(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){return xs(H(),B.memoizedState,e,t)},useTransition:function(){var e=Io(Fo)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){return Ko(H(),B,e,t)},useMemoCache:Po,useCacheRefresh:ks};Bs.useEffectEvent=fs;var Vs={readContext:na,use:U,useCallback:vs,useContext:na,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Ro,useRef:os,useState:function(){return Ro(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){var n=H();return B===null?bs(n,e,t):xs(n,B.memoizedState,e,t)},useTransition:function(){var e=Ro(Fo)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:is,useActionState:is,useOptimistic:function(e,t){var n=H();return B===null?(n.baseState=e,[e,n.queue.dispatch]):Ko(n,B,e,t)},useMemoCache:Po,useCacheRefresh:ks};Vs.useEffectEvent=fs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Wa(r);i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(hu(t,e,r),Ka(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Wa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(hu(t,e,r),Ka(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Wa(n);r.tag=2,t!=null&&(r.callback=t),t=Ga(e,r,n),t!==null&&(hu(t,e,n),Ka(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){ei(e)}function Js(e){console.error(e)}function Ys(e){ei(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Wa(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Wa(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&$i(t,n,a,!0),n=io.current,n!==null){switch(n.tag){case 31:case 13:return ao===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(R)return t=io.current,t===null?(r!==Ri&&(t=Error(i(423),{cause:r}),Gi(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=xi(r,n),a=Qs(e.stateNode,r,a),qa(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ri&&(e=Error(i(422),{cause:r}),Gi(xi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=xi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Qs(n.stateNode,r,e),qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=$s(a),ec(a,e,n,r),qa(n,a),!1}n=n.return}while(n!==null);return!1}var nc=Error(i(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?Ba(t,null,n,r):za(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ta(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!rc?(ko(e,t,i),kc(e,t,i)):(R&&s&&Ni(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xa(t,a===null?null:a.cachePool),a===null?no():to(t,a),co(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&xa(t,null),no(),lo(t)):(xa(t,a.cachePool),to(t,a),lo(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=ba();return a=a===null?null:{parent:ca._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&xa(t,null),no(),co(t),e!==null&&$i(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return za(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,uo(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(R){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(so(t),(e=L)?(e=rf(e,Li),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,I=t,L=null)):e=null,e===null)throw zi(t);return t.lanes=536870912,null}return dc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(so(t),a)if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(rc||$i(e,t,n,!1),a=(n&e.childLanes)!==0,rc||a){if(r=q,r!==null&&(s=ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,F(e,s),hu(r,e,s),nc;Du(),t=fc(e,t,n)}else e=o.treeContext,L=cf(s.nextSibling),I=t,R=!0,Ii=null,Li=!1,e!==null&&Fi(t,e),t=dc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return ta(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!rc?(ko(e,t,i),kc(e,t,i)):(R&&r&&Ni(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return ta(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!rc?(ko(e,t,a),kc(e,t,a)):(R&&r&&Ni(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(ta(t),t.stateNode===null){var a=li,o=n.contextType;typeof o==`object`&&o&&(a=na(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ha(t),o=n.contextType,a.context=typeof o==`object`&&o?na(o):li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),Xa(t,r,a,i),Ya(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=li,typeof u==`object`&&u&&(o=na(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),Va=!1;var f=t.memoizedState;a.state=f,Xa(t,r,a,i),Ya(),l=t.memoizedState,s||f!==l||Va?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=Va||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ua(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=li,typeof l==`object`&&l&&(c=na(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),Va=!1,f=t.memoizedState,a.state=f,Xa(t,r,a,i),Ya();var p=t.memoizedState;o!==d||f!==p||Va||e!==null&&e.dependencies!==null&&ea(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=Va||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ea(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=za(t,e.child,null,i),t.child=za(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Ui(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:Sa()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(fo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(R){if(a?oo(t):lo(t),(e=L)?(e=rf(e,Li),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,I=t,L=null)):e=null,e===null)throw zi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(lo(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=gi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(null,r)):(oo(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(oo(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(lo(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=gi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,za(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=lc(null,r)):(lo(t),t.child=e.child,t.flags|=128,t=null);else if(oo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Gi({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||$i(e,t,n,!1),s=(n&e.childLanes)!==0,rc||s){if(s=q,s!==null&&(r=ot(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,F(e,r),hu(s,e,r),nc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,L=cf(c.nextSibling),I=t,R=!0,Ii=null,Li=!1,e!==null&&Fi(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(lo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,a,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=Sa():(l=ca._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(e.child,r)):(oo(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return za(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=fo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(fo,o),ic(e,t,r,n),r=R?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if($i(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ea(e))):!0}function jc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),Yi(t,ca,e.memoizedState.cache),Ui();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:Yi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(oo(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(oo(t),t.flags|=128,null);oo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=($i(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(fo,fo.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Yi(t,ca,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}else rc=!1,R&&t.flags&1048576&&Mi(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=ac(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ks(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ua(e,t),Xa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Yi(t,ca,r),r!==o.cache&&Qi(t,[ca],n,!0),Ya(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}else if(r!==a){a=xi(Error(i(424)),t),Gi(a),t=vc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(L=cf(e.firstChild),I=t,R=!0,Ii=null,Li=!0,n=Ba(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ui(),r===a){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:R||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[ft]=t,r[pt]=e,Pd(r,n,e),Tt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&R&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),I=t,Li=!0,a=L,Zd(t.type)?(lf=a,L=cf(r.firstChild)):L=a),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&R&&((a=r=L)&&(r=tf(r,t.type,t.pendingProps,Li),r===null?a=!1:(t.stateNode=r,I=t,L=cf(r.firstChild),Li=!1,a=!0)),a||zi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&R&&((e=n=L)&&(n=nf(n,t.pendingProps,Li),n===null?e=!1:(t.stateNode=n,I=t,L=null,e=!0)),e||zi(t)),null;case 13:return Sc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=za(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Yi(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ta(t),a=na(a),r=r(a),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return ta(t),r=na(ca),e===null?(a=ba(),a===null&&(a=q,o=la(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ha(t),Yi(t,ca,a)):((e.lanes&n)!==0&&(Ua(e,t),Xa(t,null,null,n),Ya()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Yi(t,ca,r),r!==a.cache&&Qi(t,[ca],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Yi(t,ca,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Aa=Ea,wa}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Aa=Ea,wa}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:et(),e.lanes|=t,Yl|=t)}function Lc(e,t){if(!R)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Xi(ca),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hi(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wi())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(W(t),Pc(t,a,null,r,n)):(W(t),Fc(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}e=pe.current,Hi(t)?Bi(t,e):(e=ff(a,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}if(o=pe.current,Hi(t))Bi(t,o);else{var s=Bd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ft]=t,o[pt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Hi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=I,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||zi(t,!0)}else e=Bd(e).createTextNode(r),e[ft]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Hi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ft]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(uo(t),t):(uo(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ft]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(uo(t),t):(uo(t),null)}return uo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),W(t),null;case 10:return Xi(t.type),W(t),null;case 19:if(k(fo),r=t.memoizedState,r===null)return W(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Lc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return A(fo,fo.current&1|2),R&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>tu&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}else{if(!a)if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!R)return W(t),null}else 2*Ne()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=fo.current,A(fo,a?n&1|2:n&1),R&&ji(t,r.treeForkCount),e);case 22:case 23:return uo(t),ro(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&k(ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xi(ca),W(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xi(ca),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(uo(t),t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(uo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(fo),null;case 4:return ve(),null;case 10:return Xi(t.type),null;case 22:case 23:return uo(t),ro(),e!==null&&k(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xi(ca),null;case 25:return null;default:return null}}function Bc(e,t){switch(Pi(t),t.tag){case 3:Xi(ca),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&uo(t);break;case 13:uo(t);break;case 19:k(fo);break;case 10:Xi(t.type);break;case 22:case 23:uo(t),ro(),e!==null&&k(ya);break;case 24:Xi(ca)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qa(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[pt]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=an));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ft]=e,t[pt]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ks(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),el=i,tl=a}break;case 30:break;default:bl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var G=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=G,i=cl;Zd(n.type)&&(G=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),G=r,cl=i;break;case 5:tl||Kc(n,t);case 6:if(r=G,i=cl,G=null,ll(e,t,n),G=r,cl=i,G!==null)if(cl)try{(G.nodeType===9?G.body:G.nodeName===`HTML`?G.ownerDocument.body:G).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{G.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:G!==null&&(cl?(e=G,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(G,n.stateNode));break;case 4:r=G,i=cl,G=n.stateNode.containerInfo,cl=!0,ll(e,t,n),G=r,cl=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ll(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ll(e,t,n),tl=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){G=c.stateNode,cl=!1;break a}break;case 5:G=c.stateNode,cl=!1;break a;case 3:case 4:G=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(G===null)throw Error(i(160));ul(o,s,a),G=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[yt]||o[ft]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ft]=e,Tt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ft]=e,Tt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{N(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,hl(t,e),tl=d,el=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(N(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Za(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ua(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ua(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=na(ca),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return na(ca).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:E.T===null?lt():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||R){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Jl=e}else Jl=536870912;return e=io.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),nt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Qe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ne(),10<a)){if(yu(r,t,Jl,!Bl),Ze(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},jl(t,a,d);var m=(a&62914560)===a?$l-Ne():(a&4194048)===a?eu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&it(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ji=qi=null,Ao(e),Na=null,Pa=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=pi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Qe(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ii(),n}function Cu(e,t){z=null,E.H=Rs,t===Ca||t===Ta?(t=ja(),X=3):t===wa?(t=ja(),X=4):X=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Xs(e,xi(t,e.current)))}function wu(){var e=io.current;return e===null?!0:(Y&4194048)===Y?ao===null:(Y&62914560)===Y||Y&536870912?e===ao:!1}function Tu(){var e=E.H;return E.H=Rs,e===null?Rs:e}function Eu(){var e=E.A;return E.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&io.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:io.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ji=qi=null,K=r,E.H=i,E.A=a,J===null&&(q=null,Y=0,ii()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Ne()+500,Su(e,t)):Vl=Qe(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Da(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Da(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ji=qi=null,E.H=r,E.A=a,K=n,J===null?(q=null,Y=0,ii(),Wl):0}function ju(){for(;J!==null&&!je();)Mu(J)}function Mu(e){var t=Mc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Ao(t);default:Bc(n,t),t=J=mi(t,Ul),t=Mc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ji=qi=null,Ao(t),Na=null,Pa=0;var i=t.return;try{if(tc(e,i,t,n,Y)){Wl=1,Xs(e,xi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Xs(e,xi(n,e.current)),J=null;return}t.flags&32768?(R||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=io.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ri,rt(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ie,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=K,K|=4;try{al(e,t,n)}finally{K=s,D.p=a,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ct(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ua(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ct(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=xi(n,t),t=Qs(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(nt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=xi(n,e),n=$s(2),r=Ga(t,n,2),r!==null&&(ec(n,r,t,e),nt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Ne()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=et()),e=F(e,t),e!==null&&(nt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ze(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=$e(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ct(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=M;break;default:n=Ie}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ze(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?ke(j,ad):od()})}function dd(){if(nd===0){var e=pa;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:rn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[pt]||null).action),o=r.submitter;o&&(t=(t=o[pt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new En(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Qr.length;hd++){var gd=Qr[hd];$r(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}$r(Gr,`onAnimationEnd`),$r(Kr,`onAnimationIteration`),$r(P,`onAnimationStart`),$r(`dblclick`,`onDoubleClick`),$r(`focusin`,`onFocus`),$r(`focusout`,`onBlur`),$r(qr,`onTransitionRun`),$r(Jr,`onTransitionStart`),$r(Yr,`onTransitionCancel`),$r(Xr,`onTransitionEnd`),kt(`onMouseEnter`,[`mouseout`,`mouseover`]),kt(`onMouseLeave`,[`mouseout`,`mouseover`]),kt(`onPointerEnter`,[`pointerout`,`pointerover`]),kt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ot(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ot(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ot(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ot(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ht];n===void 0&&(n=t[ht]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Et.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!hn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=xt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}fn(function(){var r=a,i=sn(n),s=[];a:{var c=Zr.get(e);if(c!==void 0){var l=En,u=e;switch(e){case`keypress`:if(xn(n)===0)break a;case`keydown`:case`keyup`:l=Wn;break;case`focusin`:u=`focus`,l=Fn;break;case`focusout`:u=`blur`,l=Fn;break;case`beforeblur`:case`afterblur`:l=Fn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Nn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Pn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Kn;break;case Gr:case Kr:case P:l=In;break;case Xr:l=qn;break;case`scroll`:case`scrollend`:l=On;break;case`wheel`:l=Jn;break;case`copy`:case`cut`:case`paste`:l=Ln;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Gn;break;case`toggle`:case`beforetoggle`:l=Yn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=pn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==on&&(u=n.relatedTarget||n.fromElement)&&(xt(u)||u[mt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?xt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Nn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Gn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ct(l),h=u==null?c:Ct(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,xt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ct(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c))if(gr)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&en(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&qt(c,`number`,c.value)}switch(y=r?Ct(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(Zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(er&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=bn()):(_n=i,vn=`value`in _n?_n.value:_n.textContent,ar=!0)),y=Ed(r,x),0<y.length&&(x=new Rn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=$n?or(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Rn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=pn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=pn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=pn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=pn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||N(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&N(e,``+r);break;case`className`:Ft(e,`class`,r);break;case`tabIndex`:Ft(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ft(e,n,r);break;case`style`:$t(e,r,o);break;case`data`:if(t!==`object`){Ft(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=an);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=rn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Pt(e,`popover`,r);break;case`xlinkActuate`:It(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:It(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:It(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:It(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Pt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=tn.get(n)||n,Pt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:$t(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?N(e,r):(typeof r==`number`||typeof r==`bigint`)&&N(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=an);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Dt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[pt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Pt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Kt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Jt(e,!!r,n,!0):Jt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Xt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(en(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Gt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Jt(e,!!n,n?[]:``,!1):Jt(e,!!n,t,!0)):Jt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Yt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(en(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[yt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),bt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[yt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=St(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Wt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Wt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Wt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Wt(n.imageSizes)+`"]`)):i+=`[href="`+Wt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Wt(r)+`"][href="`+Wt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Tt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=wt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Tt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=wt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=wt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=wt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Wt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Tt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Wt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Wt(n.href)+`"]`);if(r)return t.instance=r,Tt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Tt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Tt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Tt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Tt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Tt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[yt]||a[ft]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Tt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Tt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tt(0),this.hiddenUpdates=tt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=la(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ha(a),e}function tp(e){return e?(e=li,e):li}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Wa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ga(e,r,t),n!==null&&(hu(n,e,t),Ka(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=F(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=st(t);var n=F(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=St(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=F(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=sn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=xt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case j:return 2;case Fe:return 8;case Ie:case Le:return 32;case M:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=St(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=xt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);on=r,n.target.dispatchEvent(r),on=null}else return t=St(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=St(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[pt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[pt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[mt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Be=zp.inject(Rp),Ve=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=qs,s=Js,c=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[mt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),b=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),x=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),ee=e=>{let t=x(e);return t.charAt(0).toUpperCase()+t.slice(1)},S={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},C=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},te=(0,_.createContext)({}),ne=()=>(0,_.useContext)(te),re=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=ne()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...S,width:t??l??S.width,height:t??l??S.height,stroke:e??f,strokeWidth:m,className:y(`lucide`,p,i),...!a&&!C(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),w=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(re,{ref:i,iconNode:t,className:y(`lucide-${b(ee(e))}`,`lucide-${e}`,n),...r}));return n.displayName=ee(e),n},ie=w(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),T=w(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),ae=w(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),oe=w(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),se=w(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),ce=w(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),le=w(`eye-off`,[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,key:`ct8e1f`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`,key:`151rxh`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,key:`13bj9a`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]),E=w(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),D=w(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),ue=w(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),O=w(`key-round`,[[`path`,{d:`M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,key:`1s6t7t`}],[`circle`,{cx:`16.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`w0ekpg`}]]),de=w(`list-ordered`,[[`path`,{d:`M11 5h10`,key:`1cz7ny`}],[`path`,{d:`M11 12h10`,key:`1438ji`}],[`path`,{d:`M11 19h10`,key:`11t30w`}],[`path`,{d:`M4 4h1v5`,key:`10yrso`}],[`path`,{d:`M4 9h2`,key:`r1h2o0`}],[`path`,{d:`M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02`,key:`xtkcd5`}]]),fe=w(`lock`,[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]),k=w(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),A=w(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),pe=w(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),me=w(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),he=w(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]),ge=w(`pen-line`,[[`path`,{d:`M13 21h8`,key:`1jsn5i`}],[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}]]),_e=w(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),ve=w(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),ye=w(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),be=w(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),xe=w(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Se=w(`shield-alert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),Ce=w(`shopping-bag`,[[`path`,{d:`M16 10a4 4 0 0 1-8 0`,key:`1ltviw`}],[`path`,{d:`M3.103 6.034h17.794`,key:`awc11p`}],[`path`,{d:`M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,key:`o988cm`}]]),we=w(`sliders-horizontal`,[[`path`,{d:`M10 5H3`,key:`1qgfaw`}],[`path`,{d:`M12 19H3`,key:`yhmn1j`}],[`path`,{d:`M14 3v4`,key:`1sua03`}],[`path`,{d:`M16 17v4`,key:`1q0r14`}],[`path`,{d:`M21 12h-9`,key:`1o4lsq`}],[`path`,{d:`M21 19h-5`,key:`1rlt1p`}],[`path`,{d:`M21 5h-7`,key:`1oszz2`}],[`path`,{d:`M8 10v4`,key:`tgpxqk`}],[`path`,{d:`M8 12H3`,key:`a7s4jb`}]]),Te=w(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Ee=w(`square-pen`,[[`path`,{d:`M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`,key:`1m0v6g`}],[`path`,{d:`M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z`,key:`ohrbg2`}]]),De=w(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),Oe=w(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),ke=w(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),Ae=w(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),je=w(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),Me=w(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Ne=`/api`,Pe=(e=!1)=>{let t={},n=e?`adminToken`:`userToken`,r=localStorage.getItem(n);return r&&(t.Authorization=`Bearer ${r}`),t},j=async(e,t={},n=!1)=>{let r=`${Ne}${e}`,i={...Pe(n),...t.headers};t.body instanceof FormData||(i[`Content-Type`]=`application/json`);let a={...t,headers:i},o=await fetch(r,a),s;try{s=await o.json()}catch{s={message:`Failed to parse response`}}if(!o.ok)throw Error(s.message||`Something went wrong`);return s},Fe={login:async(e,t)=>await j(`/auth/login`,{method:`POST`,body:JSON.stringify({phone:e,password:t})}),loginOtp:async(e,t)=>await j(`/auth/login-otp`,{method:`POST`,body:JSON.stringify({phone:e,firebaseToken:t})}),register:async(e,t,n,r)=>await j(`/auth/signup`,{method:`POST`,body:JSON.stringify({name:e,phone:t,password:n,firebaseToken:r})}),getProfile:async()=>await j(`/auth/profile`,{method:`GET`}),updateProfile:async e=>await j(`/auth/profile`,{method:`PUT`,body:JSON.stringify(e)}),changePassword:async(e,t)=>await j(`/auth/change-password`,{method:`PUT`,body:JSON.stringify({currentPassword:e,newPassword:t})})},Ie={login:async(e,t)=>await j(`/admin/login`,{method:`POST`,body:JSON.stringify({email:e,password:t})}),getStats:async()=>await j(`/admin/stats`,{method:`GET`},!0),createProduct:async e=>await j(`/admin/products`,{method:`POST`,body:e},!0),updateProduct:async(e,t)=>await j(`/admin/products/${e}`,{method:`PUT`,body:t},!0),deleteProduct:async e=>await j(`/admin/products/${e}`,{method:`DELETE`},!0),getOrders:async()=>await j(`/admin/orders`,{method:`GET`},!0),updateOrderStatus:async(e,t)=>await j(`/admin/orders/${e}/status`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({status:t})},!0)},Le=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),M=o(((e,t)=>{t.exports=Le()}))(),Re=(0,_.createContext)(),ze=({children:e})=>{let[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!0);return(0,_.useEffect)(()=>{(async()=>{let e=localStorage.getItem(`userToken`),t=localStorage.getItem(`adminToken`);if(e)try{n(await Fe.getProfile())}catch(e){console.error(`Session expired or invalid user token`,e),localStorage.removeItem(`userToken`),n(null)}if(t){let e=localStorage.getItem(`adminInfo`);if(e)try{i(JSON.parse(e))}catch{localStorage.removeItem(`adminToken`),localStorage.removeItem(`adminInfo`)}}o(!1)})()},[]),(0,M.jsx)(Re.Provider,{value:{user:t,admin:r,loading:a,login:async(e,t)=>{o(!0);try{let r=await Fe.login(e,t);return localStorage.setItem(`userToken`,r.token),n({_id:r._id,name:r.name,phone:r.phone}),o(!1),r}catch(e){throw o(!1),e}},loginOtp:async(e,t)=>{o(!0);try{let r=await Fe.loginOtp(e,t);return localStorage.setItem(`userToken`,r.token),n({_id:r._id,name:r.name,phone:r.phone}),o(!1),r}catch(e){throw o(!1),e}},signup:async(e,t,r,i)=>{o(!0);try{let a=await Fe.register(e,t,r,i);return localStorage.setItem(`userToken`,a.token),n({_id:a._id,name:a.name,phone:a.phone}),o(!1),a}catch(e){throw o(!1),e}},logout:()=>{localStorage.removeItem(`userToken`),n(null)},loginWithToken:e=>{localStorage.setItem(`userToken`,e.token),n({_id:e._id,name:e.name,phone:e.phone})},loginAdmin:async(e,t)=>{o(!0);try{let n=await Ie.login(e,t);return localStorage.setItem(`adminToken`,n.token),localStorage.setItem(`adminInfo`,JSON.stringify({_id:n._id,name:n.name,email:n.email,role:n.role})),i({_id:n._id,name:n.name,email:n.email,role:n.role}),o(!1),n}catch(e){throw o(!1),e}},logoutAdmin:()=>{localStorage.removeItem(`adminToken`),localStorage.removeItem(`adminInfo`),i(null)},updateUserProfile:async e=>{let t=await Fe.updateProfile(e);return n(e=>({...e,...t})),t},isAuthenticated:!!t,isAdminAuthenticated:!!r},children:e})},Be=()=>(0,_.useContext)(Re),Ve={getCart:async()=>await j(`/cart`,{method:`GET`}),addToCart:async({productId:e,quantity:t,size:n,color:r})=>await j(`/cart/add`,{method:`POST`,body:JSON.stringify({productId:e,quantity:t,size:n,color:r})}),updateQuantity:async({productId:e,size:t,quantity:n})=>await j(`/cart/update`,{method:`PUT`,body:JSON.stringify({productId:e,size:t,quantity:n})}),removeFromCart:async({productId:e,size:t})=>await j(`/cart/remove`,{method:`DELETE`,body:JSON.stringify({productId:e,size:t})}),mergeCart:async e=>await j(`/cart/merge`,{method:`POST`,body:JSON.stringify({items:e})})},He=(0,_.createContext)(),Ue=({children:e})=>{let{user:t}=Be(),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)(!0);return(0,_.useEffect)(()=>{(async()=>{if(a(!0),t)try{r((await Ve.getCart()).items||[]);let e=localStorage.getItem(`guestCart`);if(e){try{let t=JSON.parse(e);t.length>0&&r((await Ve.mergeCart(t.map(e=>({productId:e.productId._id||e.productId,quantity:e.quantity,size:e.size,color:e.color})))).items||[])}catch(e){console.error(`Error merging guest cart on login:`,e)}localStorage.removeItem(`guestCart`)}}catch(e){console.error(`Error loading user cart:`,e)}else{let e=localStorage.getItem(`guestCart`);if(e)try{r(JSON.parse(e))}catch{r([])}else r([])}a(!1)})()},[t]),(0,M.jsx)(He.Provider,{value:{cartItems:n,loading:i,addToCart:async(e,i,a,o=``)=>{let s=e.sizes.find(e=>e.size===a);if(!s)throw Error(`Size ${a} is not available for this product`);if(t)r((await Ve.addToCart({productId:e._id,quantity:i,size:a,color:o})).items||[]);else{let t=[...n],c=t.findIndex(t=>(t.productId._id===e._id||t.productId===e._id)&&t.size===a),l=(c>-1?t[c].quantity:0)+i;if(s.stock<l)throw Error(`Insufficient stock. Only ${s.stock} items available in size ${a}`);c>-1?t[c].quantity=l:t.push({productId:e,quantity:i,size:a,color:o}),r(t),localStorage.setItem(`guestCart`,JSON.stringify(t))}},updateQuantity:async(e,i,a)=>{if(!(a<1))if(t)r((await Ve.updateQuantity({productId:e,size:i,quantity:a})).items||[]);else{let t=[...n],o=t.findIndex(t=>(t.productId._id===e||t.productId===e)&&t.size===i);if(o>-1){let e=t[o].productId.sizes.find(e=>e.size===i);if(e&&e.stock<a)throw Error(`Insufficient stock. Only ${e.stock} items available in size ${i}`);t[o].quantity=a,r(t),localStorage.setItem(`guestCart`,JSON.stringify(t))}}},removeFromCart:async(e,i)=>{if(t)r((await Ve.removeFromCart({productId:e,size:i})).items||[]);else{let t=n.filter(t=>!((t.productId._id===e||t.productId===e)&&t.size===i));r(t),localStorage.setItem(`guestCart`,JSON.stringify(t))}},getCartTotal:()=>n.reduce((e,t)=>{let n=t.productId;return n?e+(n.discountPrice||n.price)*t.quantity:e},0),getCartCount:()=>n.reduce((e,t)=>e+t.quantity,0),clearCart:()=>{r([]),t||localStorage.removeItem(`guestCart`)}},children:e})},We=()=>(0,_.useContext)(He),Ge={getWishlist:async()=>await j(`/wishlist`,{method:`GET`}),toggleWishlist:async e=>await j(`/wishlist/toggle`,{method:`POST`,body:JSON.stringify({productId:e})})},Ke=(0,_.createContext)(),qe=({children:e})=>{let{user:t}=Be(),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)(!0);return(0,_.useEffect)(()=>{(async()=>{if(a(!0),t)try{r((await Ge.getWishlist()).products||[])}catch(e){console.error(`Error fetching database wishlist:`,e)}else{let e=localStorage.getItem(`guestWishlist`);if(e)try{r(JSON.parse(e))}catch{r([])}else r([])}a(!1)})()},[t]),(0,M.jsx)(Ke.Provider,{value:{wishlistItems:n,loading:i,toggleWishlist:async e=>{if(t)try{r((await Ge.toggleWishlist(e._id)).products||[])}catch(e){console.error(`Error updating DB wishlist:`,e)}else{let t=[...n],i=t.findIndex(t=>t._id===e._id);i>-1?t.splice(i,1):t.push(e),r(t),localStorage.setItem(`guestWishlist`,JSON.stringify(t))}},isInWishlist:e=>n.some(t=>t._id===e)},children:e})},Je=()=>(0,_.useContext)(Ke);function Ye({activeTab:e,setActiveTab:t}){let[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1),{user:o,admin:s,logout:c,logoutAdmin:l}=Be(),{getCartCount:u}=We(),{wishlistItems:d}=Je(),f=[{id:`home`,label:`Home`},{id:`collections`,label:`Shop Collection`},{id:`contact`,label:`Contact Us`}],p=e=>{t(e),r(!1),a(!1),window.scrollTo({top:0,behavior:`smooth`})},m=()=>{c(),p(`home`)},h=()=>{l(),p(`home`)},g=u(),v=d.length;return(0,M.jsxs)(`header`,{className:`navbar-header`,children:[(0,M.jsxs)(`div`,{className:`container navbar-container`,children:[(0,M.jsxs)(`div`,{className:`navbar-logo`,onClick:()=>p(`home`),children:[(0,M.jsx)(`span`,{children:`Bhawna`}),` Closet`]}),(0,M.jsxs)(`nav`,{className:`navbar-desktop`,children:[f.map(t=>(0,M.jsx)(`button`,{className:`nav-link ${e===t.id?`active`:``}`,onClick:()=>p(t.id),children:t.label},t.id)),s&&(0,M.jsx)(`button`,{className:`nav-link ${e===`admin`?`active`:``}`,onClick:()=>p(`admin`),style:{color:`var(--primary-pink-dark)`,fontWeight:`700`},children:`Admin Dashboard`})]}),(0,M.jsxs)(`div`,{className:`navbar-actions`,children:[(0,M.jsxs)(`a`,{href:`tel:9266991136`,className:`nav-phone-btn`,title:`Call Us`,children:[(0,M.jsx)(_e,{size:16}),(0,M.jsx)(`span`,{className:`phone-text`,children:`9266991136`})]}),(0,M.jsxs)(`button`,{className:`nav-action-btn ${e===`wishlist`?`active-icon`:``}`,onClick:()=>p(`wishlist`),title:`Wishlist`,children:[(0,M.jsx)(ue,{size:20}),v>0&&(0,M.jsx)(`span`,{className:`action-badge`,children:v})]}),(0,M.jsxs)(`button`,{className:`nav-action-btn ${e===`cart`?`active-icon`:``}`,onClick:()=>p(`cart`),title:`Shopping Cart`,children:[(0,M.jsx)(Ce,{size:20}),g>0&&(0,M.jsx)(`span`,{className:`action-badge badge-primary`,children:g})]}),s?(0,M.jsxs)(`div`,{className:`profile-dropdown-wrapper`,children:[(0,M.jsxs)(`button`,{className:`nav-profile-trigger btn-outline`,onClick:()=>a(!i),children:[(0,M.jsx)(xe,{size:18}),(0,M.jsx)(`span`,{className:`user-name-text`,children:`Admin`}),(0,M.jsx)(oe,{size:14})]}),i&&(0,M.jsxs)(`div`,{className:`profile-dropdown-menu glass-card animate-fade-in`,children:[(0,M.jsx)(`button`,{onClick:()=>p(`admin`),children:`Dashboard`}),(0,M.jsxs)(`button`,{onClick:h,className:`logout-btn-link`,children:[(0,M.jsx)(k,{size:14}),` Logout`]})]})]}):o?(0,M.jsxs)(`div`,{className:`profile-dropdown-wrapper`,children:[(0,M.jsxs)(`button`,{className:`nav-profile-trigger btn-outline`,onClick:()=>a(!i),children:[(0,M.jsx)(Ae,{size:18}),(0,M.jsx)(`span`,{className:`user-name-text`,children:o.name.split(` `)[0]}),(0,M.jsx)(oe,{size:14})]}),i&&(0,M.jsxs)(`div`,{className:`profile-dropdown-menu glass-card animate-fade-in`,children:[(0,M.jsx)(`button`,{onClick:()=>p(`profile`),children:`My Account`}),(0,M.jsx)(`button`,{onClick:()=>p(`profile`),style:{color:`var(--text-muted)`},children:`Orders History`}),(0,M.jsxs)(`button`,{onClick:m,className:`logout-btn-link`,children:[(0,M.jsx)(k,{size:14}),` Logout`]})]})]}):(0,M.jsxs)(`div`,{className:`navbar-auth-buttons`,children:[(0,M.jsx)(`button`,{className:`btn-auth-link`,onClick:()=>p(`login`),children:`Login`}),(0,M.jsx)(`button`,{className:`btn-auth-signup btn-primary-small`,onClick:()=>p(`signup`),children:`Sign Up`})]}),(0,M.jsx)(`button`,{className:`mobile-menu-toggle`,onClick:()=>r(!n),children:n?(0,M.jsx)(Me,{size:24}):(0,M.jsx)(me,{size:24})})]})]}),n&&(0,M.jsxs)(`div`,{className:`mobile-menu-drawer animate-fade-in`,children:[f.map(t=>(0,M.jsx)(`button`,{className:`mobile-nav-link ${e===t.id?`active`:``}`,onClick:()=>p(t.id),children:t.label},t.id)),s&&(0,M.jsx)(`button`,{className:`mobile-nav-link ${e===`admin`?`active`:``}`,onClick:()=>p(`admin`),style:{color:`var(--primary-pink-dark)`,fontWeight:`700`},children:`Admin Dashboard`}),(0,M.jsx)(`div`,{className:`mobile-auth-section`,children:s?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`button`,{className:`mobile-nav-link`,onClick:()=>p(`admin`),children:`Admin Panel`}),(0,M.jsxs)(`button`,{className:`mobile-nav-link logout-btn-link`,onClick:h,children:[(0,M.jsx)(k,{size:18}),` Admin Logout`]})]}):o?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`button`,{className:`mobile-nav-link`,onClick:()=>p(`profile`),children:`My Account`}),(0,M.jsx)(`button`,{className:`mobile-nav-link`,onClick:()=>p(`profile`),children:`Orders History`}),(0,M.jsxs)(`button`,{className:`mobile-nav-link logout-btn-link`,onClick:m,children:[(0,M.jsx)(k,{size:18}),` Logout`]})]}):(0,M.jsxs)(`div`,{className:`mobile-auth-btns`,children:[(0,M.jsx)(`button`,{className:`btn btn-outline`,style:{width:`100%`},onClick:()=>p(`login`),children:`Login`}),(0,M.jsx)(`button`,{className:`btn btn-primary`,style:{width:`100%`},onClick:()=>p(`signup`),children:`Sign Up`})]})}),(0,M.jsxs)(`a`,{href:`tel:9266991136`,className:`mobile-phone-link`,children:[(0,M.jsx)(_e,{size:18}),(0,M.jsx)(`span`,{children:`9266991136`})]})]}),(0,M.jsx)(`style`,{children:`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border-bottom: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }
        .navbar-container {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-logo {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark-charcoal);
          cursor: pointer;
          user-select: none;
        }
        .navbar-logo span {
          color: var(--primary-pink);
          position: relative;
        }
        .navbar-logo span::after {
          content: '💖';
          font-size: 0.8rem;
          position: absolute;
          top: -2px;
          right: -15px;
        }
        .navbar-desktop {
          display: flex;
          gap: 2.5rem;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--dark-charcoal);
          padding: 0.5rem 0;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-pink);
          transition: var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--primary-pink);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link.active {
          color: var(--primary-pink);
          font-weight: 600;
        }
        .nav-link.active::after {
          width: 100%;
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .nav-phone-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--soft-pink);
          color: var(--primary-pink-dark);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .nav-phone-btn:hover {
          background: var(--primary-pink);
          color: var(--pure-white);
        }
        
        /* Action buttons & Badges */
        .nav-action-btn {
          position: relative;
          color: var(--dark-charcoal);
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-action-btn:hover, .nav-action-btn.active-icon {
          background: var(--light-pink);
          color: var(--primary-pink);
        }
        .action-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          background: var(--primary-pink-dark);
          color: var(--pure-white);
          font-size: 0.7rem;
          font-weight: 700;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--pure-white);
        }
        .action-badge.badge-primary {
          background: var(--primary-pink);
        }

        /* Profile Dropdown Styling */
        .profile-dropdown-wrapper {
          position: relative;
        }
        .nav-profile-trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--dark-charcoal);
          border: 1px solid var(--border-light);
        }
        .nav-profile-trigger:hover {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
        }
        .profile-dropdown-menu {
          position: absolute;
          top: 48px;
          right: 0;
          width: 180px;
          padding: 0.5rem;
          z-index: 100;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-md);
        }
        .profile-dropdown-menu button {
          text-align: left;
          padding: 0.6rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--dark-charcoal);
          border-radius: 8px;
          width: 100%;
        }
        .profile-dropdown-menu button:hover {
          background: var(--light-pink);
          color: var(--primary-pink-dark);
        }
        .profile-dropdown-menu .logout-btn-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-top: 1px solid var(--border-light);
          margin-top: 0.25rem;
          padding-top: 0.6rem;
          border-radius: 0 0 8px 8px;
          color: #dc3545;
        }
        .profile-dropdown-menu .logout-btn-link:hover {
          background: #ffebe9;
          color: #c82333;
        }

        /* Auth Buttons */
        .navbar-auth-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .btn-auth-link {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--dark-charcoal);
          padding: 0.5rem 0.75rem;
        }
        .btn-auth-link:hover {
          color: var(--primary-pink);
        }
        .btn-auth-signup {
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 20px;
          transition: all var(--transition-normal);
        }
        .btn-primary-small {
          background: var(--primary-pink);
          color: var(--pure-white);
          box-shadow: 0 2px 8px rgba(240, 84, 138, 0.2);
        }
        .btn-primary-small:hover {
          background: var(--primary-pink-hover);
          transform: translateY(-1px);
        }

        .mobile-menu-toggle {
          display: none;
          color: var(--dark-charcoal);
        }
        .mobile-menu-drawer {
          display: none;
          position: absolute;
          top: 80px;
          left: 0;
          width: 100%;
          background: var(--pure-white);
          border-bottom: 1px solid var(--border-light);
          padding: 1.5rem 2rem;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: var(--shadow-md);
        }
        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 500;
          text-align: left;
          color: var(--dark-charcoal);
          padding: 0.5rem 0;
        }
        .mobile-nav-link.active {
          color: var(--primary-pink);
          border-left: 3px solid var(--primary-pink);
          padding-left: 0.75rem;
        }
        .mobile-auth-section {
          border-top: 1px solid var(--border-light);
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .mobile-auth-btns {
          display: flex;
          gap: 1rem;
          width: 100%;
        }
        .mobile-phone-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--primary-pink-dark);
          background: var(--soft-pink);
          padding: 0.75rem;
          border-radius: 8px;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        /* Responsive Navbar */
        @media (max-width: 992px) {
          .user-name-text, .phone-text {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .navbar-desktop, .nav-phone-btn, .navbar-auth-buttons, .profile-dropdown-wrapper {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block;
          }
          .mobile-menu-drawer {
            display: flex;
          }
          .navbar-logo {
            font-size: 1.3rem !important;
            white-space: nowrap !important;
          }
          .navbar-actions {
            gap: 0.75rem !important;
          }
        }
      `})]})}function Xe({onExploreClick:e}){return(0,M.jsxs)(`section`,{className:`hero-section`,children:[(0,M.jsxs)(`div`,{className:`container hero-container`,children:[(0,M.jsxs)(`div`,{className:`hero-content animate-fade-in`,children:[(0,M.jsxs)(`div`,{className:`hero-badge`,children:[(0,M.jsx)(Te,{size:14}),(0,M.jsx)(`span`,{children:`New Arrivals 2026`})]}),(0,M.jsxs)(`h1`,{children:[`Redefining `,(0,M.jsx)(`span`,{className:`highlight-text`,children:`Elegance`}),` & Modern Style`]}),(0,M.jsx)(`p`,{className:`hero-description`,children:`Bhawna Closet brings you the perfect blend of style, elegance, and trend. Discover fashionable dresses and girls’ wear collections curated for modern fashion lovers who love to stand out with confidence. 💖`}),(0,M.jsxs)(`div`,{className:`hero-actions`,children:[(0,M.jsxs)(`button`,{className:`btn btn-primary`,onClick:e,children:[`Explore Collection `,(0,M.jsx)(T,{size:18})]}),(0,M.jsx)(`a`,{href:`#about-brand`,className:`btn btn-secondary`,children:`Our Story`})]}),(0,M.jsxs)(`div`,{className:`hero-metrics`,children:[(0,M.jsxs)(`div`,{className:`metric-item`,children:[(0,M.jsx)(`h3`,{children:`100%`}),(0,M.jsx)(`p`,{children:`Premium Fabrics`})]}),(0,M.jsx)(`div`,{className:`metric-line`}),(0,M.jsxs)(`div`,{className:`metric-item`,children:[(0,M.jsx)(`h3`,{children:`Custom`}),(0,M.jsx)(`p`,{children:`Tailored Fitting`})]}),(0,M.jsx)(`div`,{className:`metric-line`}),(0,M.jsxs)(`div`,{className:`metric-item`,children:[(0,M.jsx)(`h3`,{children:`Gurgaon`}),(0,M.jsx)(`p`,{children:`In-Store Boutique`})]})]})]}),(0,M.jsxs)(`div`,{className:`hero-image-wrapper`,children:[(0,M.jsx)(`div`,{className:`hero-image-backdrop`}),(0,M.jsx)(`img`,{src:`https://res.cloudinary.com/jbhylwfb/image/upload/v1782921971/bhawna_closet_products/f6c6ykyn8wgxvfa4xtsn.jpg`,alt:`Bhawna Closet Premium Fashion`,className:`hero-main-image`}),(0,M.jsxs)(`div`,{className:`floating-glass-card glass-card`,children:[(0,M.jsx)(`span`,{className:`floating-emoji`,children:`🌸`}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`Trending Cordsets`}),(0,M.jsx)(`p`,{children:`Now in store`})]})]}),(0,M.jsxs)(`div`,{className:`floating-glass-card-2 glass-card`,children:[(0,M.jsx)(`span`,{className:`floating-emoji`,children:`👗`}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`Dresses & Tops`}),(0,M.jsx)(`p`,{children:`Soft pastel hues`})]})]})]})]}),(0,M.jsx)(`style`,{children:`
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, var(--pure-white) 0%, var(--light-pink) 100%);
          padding: 6rem 0 5rem 0;
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 4rem;
        }
        .hero-content {
          z-index: 10;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--soft-pink);
          color: var(--primary-pink-dark);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          letter-spacing: 0.03em;
        }
        .hero-content h1 {
          font-size: 3.5rem;
          line-height: 1.15;
          color: var(--dark-charcoal);
          margin-bottom: 1.5rem;
        }
        .highlight-text {
          color: var(--primary-pink);
          position: relative;
          font-style: italic;
        }
        .hero-description {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.7;
          max-width: 580px;
        }
        .hero-actions {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }
        .hero-metrics {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .metric-item h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--primary-pink-dark);
          margin-bottom: 0.25rem;
        }
        .metric-item p {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .metric-line {
          width: 1px;
          height: 40px;
          background: var(--border-light);
        }
        
        /* Right Side Image styles */
        .hero-image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-image-backdrop {
          position: absolute;
          width: 80%;
          height: 90%;
          background: var(--soft-pink);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          filter: blur(10px);
          z-index: 1;
          transform: rotate(-5deg);
        }
        .hero-main-image {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 420px;
          height: 520px;
          object-fit: cover;
          border-radius: 200px 200px 20px 20px;
          box-shadow: var(--shadow-lg);
          border: 6px solid var(--pure-white);
        }
        .floating-glass-card {
          position: absolute;
          left: -40px;
          bottom: 80px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
        }
        .floating-glass-card-2 {
          position: absolute;
          right: -20px;
          top: 60px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
        }
        .floating-emoji {
          font-size: 1.5rem;
        }
        .floating-glass-card h4, .floating-glass-card-2 h4 {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .floating-glass-card p, .floating-glass-card-2 p {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* Responsive Hero */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 5rem;
            text-align: center;
          }
          .hero-badge, .hero-actions, .hero-metrics {
            justify-content: center;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-main-image {
            max-width: 350px;
            height: 440px;
          }
          .floating-glass-card {
            left: 10px;
          }
          .floating-glass-card-2 {
            right: 10px;
          }
        }
        @media (max-width: 576px) {
          .hero-section {
            padding: 1.25rem 0 1.5rem 0 !important;
          }
          .hero-container {
            gap: 1rem !important;
          }
          .hero-badge {
            margin-bottom: 0.85rem !important;
            padding: 0.35rem 0.75rem !important;
            font-size: 0.75rem !important;
          }
          .hero-content h1 {
            font-size: 1.9rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.85rem !important;
          }
          .hero-description {
            display: none !important;
          }
          .hero-actions {
            flex-direction: row !important;
            justify-content: center !important;
            gap: 0.75rem !important;
            margin-bottom: 1rem !important;
          }
          .hero-actions .btn {
            padding: 0.7rem 1.15rem !important;
            font-size: 0.8rem !important;
            width: auto !important;
          }
          .hero-metrics {
            display: none !important;
          }
          .metric-item h3 {
            font-size: 1.4rem !important;
          }
          .metric-item p {
            font-size: 0.7rem !important;
          }
          .metric-line {
            display: block !important;
            height: 25px !important;
          }
          .hero-main-image {
            max-width: 270px !important;
            height: 350px !important;
          }
          .floating-glass-card {
            left: -15px !important;
            bottom: 30px !important;
            padding: 0.4rem 0.65rem !important;
          }
          .floating-glass-card-2 {
            right: -15px !important;
            top: 30px !important;
            padding: 0.4rem 0.65rem !important;
          }
          .floating-emoji {
            font-size: 1rem !important;
          }
        }
      `})]})}function Ze({product:e,onSelectProduct:t}){let n=new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e.price),r=e.discountPrice?new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e.discountPrice):null;return(0,M.jsxs)(`div`,{className:`product-card animate-fade-in`,onClick:()=>t(e),children:[(0,M.jsxs)(`div`,{className:`product-image-container`,children:[(0,M.jsx)(`img`,{src:e.image,alt:e.name,className:`product-image`,loading:`lazy`}),(0,M.jsx)(`div`,{className:`product-hover-overlay`,children:(0,M.jsx)(`button`,{className:`overlay-action-btn`,title:`Quick View`,children:(0,M.jsx)(ye,{size:18})})}),(0,M.jsx)(`span`,{className:`product-category-badge badge badge-pink`,children:e.category})]}),(0,M.jsxs)(`div`,{className:`product-info`,children:[(0,M.jsx)(`h3`,{className:`product-name`,children:e.name}),(0,M.jsxs)(`div`,{className:`product-footer`,children:[(0,M.jsx)(`div`,{className:`product-price-container`,children:r?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`span`,{className:`product-price`,children:r}),(0,M.jsx)(`span`,{className:`product-original-price-strike`,children:n})]}):(0,M.jsx)(`span`,{className:`product-price`,children:n})}),(0,M.jsx)(`span`,{className:`product-sizes`,children:e.sizes.map(e=>typeof e==`object`&&e.size?e.size:e).join(`, `)})]})]}),(0,M.jsx)(`style`,{children:`
        .product-card {
          background: var(--pure-white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: all var(--transition-normal);
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-pink);
        }
        .product-image-container {
          position: relative;
          width: 100%;
          height: 320px;
          background-color: var(--light-pink);
          overflow: hidden;
        }
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .product-card:hover .product-image {
          transform: scale(1.08);
        }
        .product-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(240, 84, 138, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
          z-index: 2;
        }
        .product-card:hover .product-hover-overlay {
          opacity: 1;
        }
        .overlay-action-btn {
          background: var(--pure-white);
          color: var(--primary-pink-dark);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .overlay-action-btn:hover {
          background: var(--primary-pink);
          color: var(--pure-white);
          transform: scale(1.1);
        }
        .product-category-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 3;
        }
        
        .product-info {
          padding: 1.25rem;
        }
        .product-name {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .product-price-container {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
        }
        .product-price {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
        }
        .product-original-price-strike {
          font-size: 0.85rem;
          text-decoration: line-through;
          color: var(--text-muted);
          font-weight: 500;
        }
        .product-sizes {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          background: var(--cream-white);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          border: 1px solid var(--border-light);
        }
        @media (max-width: 576px) {
          .product-image-container {
            height: 200px !important;
          }
          .product-info {
            padding: 0.75rem !important;
          }
          .product-name {
            font-size: 0.9rem !important;
            margin-bottom: 0.25rem !important;
          }
          .product-price {
            font-size: 0.95rem !important;
          }
          .product-original-price-strike {
            font-size: 0.75rem !important;
          }
          .product-sizes {
            display: none !important;
          }
          .product-category-badge {
            font-size: 0.6rem !important;
            padding: 0.15rem 0.5rem !important;
            top: 8px !important;
            left: 8px !important;
          }
        }
      `})]})}function Qe(){let[e,t]=(0,_.useState)({name:``,email:``,phone:``,message:``}),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(``),c=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))};return(0,M.jsxs)(`div`,{className:`contact-form-wrapper`,children:[(0,M.jsxs)(`div`,{className:`contact-grid`,children:[(0,M.jsxs)(`div`,{className:`store-info-panel glass-card`,children:[(0,M.jsx)(`h3`,{children:`Bhawna Closet`}),(0,M.jsx)(`p`,{className:`panel-desc`,children:`Visit our physical boutique in Gurgaon or get in touch for custom stitching, sizing availability, or direct orders.`}),(0,M.jsxs)(`div`,{className:`info-list`,children:[(0,M.jsxs)(`div`,{className:`info-item`,children:[(0,M.jsx)(`div`,{className:`icon-badge`,children:(0,M.jsx)(pe,{size:18})}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`Our Location`}),(0,M.jsx)(`p`,{children:`Shop no R6/020 Sec 67 M3M Urbana Gurgaon, Haryana`})]})]}),(0,M.jsxs)(`div`,{className:`info-item`,children:[(0,M.jsx)(`div`,{className:`icon-badge`,children:(0,M.jsx)(_e,{size:18})}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`Call Us`}),(0,M.jsx)(`p`,{children:(0,M.jsx)(`a`,{href:`tel:9266991136`,children:`9266991136`})})]})]}),(0,M.jsxs)(`div`,{className:`info-item`,children:[(0,M.jsx)(`div`,{className:`icon-badge`,children:(0,M.jsx)(A,{size:18})}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`Email Address`}),(0,M.jsx)(`p`,{children:(0,M.jsx)(`a`,{href:`mailto:bhawnacloset.in@gmail.com`,children:`bhawnacloset.in@gmail.com`})})]})]}),(0,M.jsxs)(`div`,{className:`info-item`,children:[(0,M.jsx)(`div`,{className:`icon-badge`,children:(0,M.jsx)(ce,{size:18})}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`Store Hours`}),(0,M.jsx)(`p`,{children:`11:00 AM - 9:00 PM (Tuesday Closed)`})]})]})]})]}),(0,M.jsxs)(`div`,{className:`form-panel glass-card`,children:[(0,M.jsx)(`h3`,{children:`Send Us a Message`}),(0,M.jsx)(`p`,{className:`panel-desc`,children:`Have a question? Fill in the details below and our styling team will reach out to you.`}),i?(0,M.jsxs)(`div`,{className:`contact-success-box animate-fade-in`,children:[(0,M.jsx)(`div`,{className:`success-icon`,children:(0,M.jsx)(ae,{size:32})}),(0,M.jsx)(`h4`,{children:`Message Sent Successfully!`}),(0,M.jsx)(`p`,{children:`Thank you for reaching out to Bhawna Closet. We will get back to you shortly.`}),(0,M.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>a(!1),children:`Send Another Message`})]}):(0,M.jsxs)(`form`,{onSubmit:async n=>{n.preventDefault(),r(!0),s(``);try{let n=await fetch(`http://localhost:5000/api/inquiries`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)}),r=await n.json();n.ok?(a(!0),t({name:``,email:``,phone:``,message:``})):s(r.message||`Error sending message.`)}catch{s(`Connection error. Please call us directly at 9266991136.`)}finally{r(!1)}},className:`actual-form`,children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`contact-name`,children:`Full Name`}),(0,M.jsx)(`input`,{id:`contact-name`,type:`text`,name:`name`,value:e.name,onChange:c,placeholder:`Enter your name`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-row-contact`,children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`contact-email`,children:`Email Address`}),(0,M.jsx)(`input`,{id:`contact-email`,type:`email`,name:`email`,value:e.email,onChange:c,placeholder:`name@gmail.com`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`contact-phone`,children:`Phone Number`}),(0,M.jsx)(`input`,{id:`contact-phone`,type:`tel`,name:`phone`,value:e.phone,onChange:c,placeholder:`10-digit number`,required:!0})]})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{htmlFor:`contact-message`,children:`Your Message`}),(0,M.jsx)(`textarea`,{id:`contact-message`,name:`message`,rows:`4`,value:e.message,onChange:c,placeholder:`Enquire about custom sizes, fabrics, styles...`,required:!0})]}),o&&(0,M.jsx)(`p`,{className:`contact-error`,children:o}),(0,M.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-send-message`,disabled:n,children:[n?`Sending...`:`Send Message`,` `,(0,M.jsx)(be,{size:16})]})]})]})]}),(0,M.jsx)(`style`,{children:`
        .contact-form-wrapper {
          width: 100%;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 2.5rem;
        }
        
        .store-info-panel {
          padding: 2.5rem;
          background: linear-gradient(135deg, var(--pure-white) 0%, var(--light-pink) 100%);
        }
        .store-info-panel h3 {
          font-size: 1.8rem;
          color: var(--dark-charcoal);
          margin-bottom: 0.75rem;
        }
        .panel-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .icon-badge {
          background: var(--pure-white);
          color: var(--primary-pink-dark);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          flex-shrink: 0;
          border: 1px solid var(--border-pink);
        }
        .info-item h4 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.2rem;
        }
        .info-item p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .info-item a {
          color: var(--text-muted);
        }
        .info-item a:hover {
          color: var(--primary-pink);
        }
        
        .form-panel {
          padding: 2.5rem;
          background: var(--pure-white);
        }
        .form-panel h3 {
          font-size: 1.8rem;
          color: var(--dark-charcoal);
          margin-bottom: 0.75rem;
        }
        
        .actual-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-row-contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .form-group input, .form-group textarea {
          font-family: var(--font-sans);
          padding: 0.85rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
          background: var(--cream-white);
        }
        .btn-send-message {
          align-self: flex-start;
          border-radius: 10px;
          padding: 0.85rem 2rem;
        }
        .contact-error {
          color: red;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        /* Success Presentation Box */
        .contact-success-box {
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .success-icon {
          width: 64px;
          height: 64px;
          background: #d4edda;
          color: #155724;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #c3e6cb;
          margin-bottom: 0.5rem;
        }
        .contact-success-box h4 {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          color: #155724;
        }
        .contact-success-box p {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 320px;
          margin-bottom: 1.5rem;
        }

        /* Responsive Contact */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 576px) {
          .form-row-contact {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .form-panel, .store-info-panel {
            padding: 1.5rem;
          }
        }
      `})]})}function $e({setActiveTab:e}){let t=t=>{e(t),window.scrollTo({top:0,behavior:`smooth`})};return(0,M.jsxs)(`footer`,{className:`footer-section`,children:[(0,M.jsxs)(`div`,{className:`container footer-grid`,children:[(0,M.jsxs)(`div`,{className:`footer-col footer-about`,children:[(0,M.jsxs)(`h3`,{children:[(0,M.jsx)(`span`,{children:`Bhawna`}),` Closet`]}),(0,M.jsx)(`p`,{children:`Bhawna Closet brings you the perfect blend of style, elegance, and trend. Discover fashionable dresses and girls’ wear collections curated for modern fashion lovers who love to stand out with confidence. 💖`}),(0,M.jsx)(`div`,{className:`social-links`,children:(0,M.jsxs)(`a`,{href:`https://instagram.com/bhawna_closet123`,target:`_blank`,rel:`noopener noreferrer`,className:`social-btn instagram-btn`,title:`Follow us on Instagram`,children:[(0,M.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`rect`,{width:`20`,height:`20`,x:`2`,y:`2`,rx:`5`,ry:`5`}),(0,M.jsx)(`path`,{d:`M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`}),(0,M.jsx)(`line`,{x1:`17.5`,x2:`17.51`,y1:`6.5`,y2:`6.5`})]}),(0,M.jsx)(`span`,{children:`@bhawna_closet123`})]})})]}),(0,M.jsxs)(`div`,{className:`footer-col`,children:[(0,M.jsx)(`h4`,{children:`Explore Shop`}),(0,M.jsxs)(`ul`,{className:`footer-links`,children:[(0,M.jsx)(`li`,{children:(0,M.jsx)(`button`,{onClick:()=>t(`home`),children:`Home`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(`button`,{onClick:()=>t(`collections`),children:`Cordsets Collection`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(`button`,{onClick:()=>t(`collections`),children:`Dresses Collection`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(`button`,{onClick:()=>t(`collections`),children:`Tops & Shirts Collection`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(`button`,{onClick:()=>t(`collections`),children:`Bottoms Collection`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(`button`,{onClick:()=>t(`contact`),children:`Contact & Location`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(`button`,{onClick:()=>t(`admin`),style:{opacity:.6,fontSize:`0.8rem`},children:`Admin Portal`})})]})]}),(0,M.jsxs)(`div`,{className:`footer-col`,children:[(0,M.jsx)(`h4`,{children:`Boutique Info`}),(0,M.jsxs)(`ul`,{className:`footer-contact-list`,children:[(0,M.jsxs)(`li`,{children:[(0,M.jsx)(pe,{size:18,className:`footer-icon`}),(0,M.jsx)(`span`,{children:`Shop no R6/020 Sec 67 M3M Urbana Gurgaon, Haryana`})]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(_e,{size:18,className:`footer-icon`}),(0,M.jsx)(`span`,{children:(0,M.jsx)(`a`,{href:`tel:9266991136`,children:`9266991136`})})]}),(0,M.jsxs)(`li`,{children:[(0,M.jsx)(A,{size:18,className:`footer-icon`}),(0,M.jsx)(`span`,{children:(0,M.jsx)(`a`,{href:`mailto:bhawnacloset.in@gmail.com`,children:`bhawnacloset.in@gmail.com`})})]})]})]})]}),(0,M.jsx)(`div`,{className:`footer-bottom`,children:(0,M.jsxs)(`div`,{className:`container footer-bottom-container`,children:[(0,M.jsxs)(`p`,{children:[`© `,new Date().getFullYear(),` Bhawna Closet. All Rights Reserved.`]}),(0,M.jsx)(`p`,{className:`footer-tagline`,children:`Curated with love 🌸`})]})}),(0,M.jsx)(`style`,{children:`
        .footer-section {
          background-color: var(--dark-charcoal);
          color: var(--pure-white);
          padding: 5rem 0 0 0;
          margin-top: auto;
          border-top: 4px solid var(--primary-pink);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.85fr 0.85fr;
          gap: 4rem;
          padding-bottom: 4rem;
        }
        
        .footer-col h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--pure-white);
          margin-bottom: 1.25rem;
        }
        .footer-col h3 span {
          color: var(--primary-pink);
        }
        .footer-col h4 {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--pure-white);
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
          padding-bottom: 0.5rem;
        }
        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--primary-pink);
        }
        .footer-col p {
          color: #adb5bd;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .instagram-btn {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          color: var(--pure-white);
        }
        .instagram-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(220, 39, 67, 0.4);
        }
        
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links button {
          font-size: 0.95rem;
          color: #adb5bd;
          text-align: left;
          width: 100%;
        }
        .footer-links button:hover {
          color: var(--primary-pink);
          padding-left: 5px;
        }
        
        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #adb5bd;
          font-size: 0.95rem;
        }
        .footer-contact-list a {
          color: #adb5bd;
        }
        .footer-contact-list a:hover {
          color: var(--primary-pink);
        }
        .footer-icon {
          color: var(--primary-pink);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        
        .footer-bottom {
          border-top: 1px solid #2b303b;
          padding: 2rem 0;
          background-color: #16191f;
        }
        .footer-bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: #6c757d;
        }
        .footer-tagline {
          color: var(--primary-pink);
          font-weight: 500;
        }

        /* Responsive Footer */
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
          .footer-about {
            grid-column: span 2;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-about {
            grid-column: span 1;
          }
          .footer-bottom-container {
            flex-direction: column;
            gap: 0.75rem;
            text-align: center;
          }
        }
      `})]})}var et={getProducts:async({page:e=1,limit:t=12,category:n=`All`,search:r=``,sort:i=`newest`}={})=>{let a=new URLSearchParams;return a.append(`page`,e),a.append(`limit`,t),n&&a.append(`category`,n),r&&a.append(`search`,r),i&&a.append(`sort`,i),await j(`/products?${a.toString()}`,{method:`GET`})},getProductBySlug:async e=>await j(`/products/slug/${e}`,{method:`GET`}),getCategories:async()=>await j(`/categories`,{method:`GET`})},tt=()=>void 0,nt=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)==55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},rt=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[n++],o=e[n++],s=e[n++],c=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join(``)},it={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,get ENCODED_VALS(){return this.ENCODED_VALS_BASE+`+/=`},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+`-_.`},HAS_NATIVE_SUPPORT:typeof atob==`function`,encodeByteArray(e,t){if(!Array.isArray(e))throw Error(`encodeByteArray takes an array as a parameter`);this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=i>>2,u=(i&3)<<4|o>>4,d=(o&15)<<2|c>>6,f=c&63;s||(f=64,a||(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join(``)},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(nt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):rt(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;let o=t<e.length?n[e.charAt(t)]:64;++t;let s=t<e.length?n[e.charAt(t)]:64;if(++t,i==null||a==null||o==null||s==null)throw new at;let c=i<<2|a>>4;if(r.push(c),o!==64){let e=a<<4&240|o>>2;if(r.push(e),s!==64){let e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},at=class extends Error{constructor(){super(...arguments),this.name=`DecodeBase64StringError`}},ot=function(e){let t=nt(e);return it.encodeByteArray(t,!0)},st=function(e){return ot(e).replace(/\./g,``)},ct=function(e){try{return it.decodeString(e,!0)}catch(e){console.error(`base64Decode failed: `,e)}return null};function lt(){if(typeof self<`u`)return self;if(typeof window<`u`)return window;if(typeof global<`u`)return global;throw Error(`Unable to locate global object.`)}var ut=()=>lt().__FIREBASE_DEFAULTS__,dt=()=>{if(typeof process>`u`)return;let e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ft=()=>{if(typeof document>`u`)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=e&&ct(e[1]);return t&&JSON.parse(t)},pt=()=>{try{return tt()||ut()||dt()||ft()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},mt=e=>pt()?.emulatorHosts?.[e],ht=()=>pt()?.config,gt=e=>pt()?.[`_${e}`],_t=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e==`function`&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}};function vt(){return typeof navigator<`u`&&typeof navigator.userAgent==`string`?navigator.userAgent:``}function yt(){return typeof window<`u`&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function bt(){return typeof navigator<`u`&&navigator.userAgent===`Cloudflare-Workers`}function xt(){let e=typeof chrome==`object`?chrome.runtime:typeof browser==`object`?browser.runtime:void 0;return typeof e==`object`&&e.id!==void 0}function St(){return typeof navigator==`object`&&navigator.product===`ReactNative`}function Ct(){let e=vt();return e.indexOf(`MSIE `)>=0||e.indexOf(`Trident/`)>=0}function wt(){try{return typeof indexedDB==`object`}catch{return!1}}function Tt(){return new Promise((e,t)=>{try{let n=!0,r=`validate-browser-context-for-indexeddb-analytics-module`,i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||``)}}catch(e){t(e)}})}var Et=`FirebaseError`,Dt=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Et,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ot.prototype.create)}},Ot=class{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?kt(i,n):`Error`;return new Dt(r,`${this.serviceName}: ${a} (${r}).`,n)}};function kt(e,t){return e.replace(At,(e,n)=>{let r=t[n];return r==null?`<${n}?>`:String(r)})}var At=/\{\$([^}]+)}/g;function jt(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Mt(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],a=t[i];if(Nt(n)&&Nt(a)){if(!Mt(n,a))return!1}else if(n!==a)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function Nt(e){return typeof e==`object`&&!!e}function Pt(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+`=`+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+`=`+encodeURIComponent(r));return t.length?`&`+t.join(`&`):``}function Ft(e){let t={};return e.replace(/^\?/,``).split(`&`).forEach(e=>{if(e){let[n,r]=e.split(`=`);t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function It(e){let t=e.indexOf(`?`);if(!t)return``;let n=e.indexOf(`#`,t);return e.substring(t,n>0?n:void 0)}function Lt(e,t){let n=new Rt(e,t);return n.subscribe.bind(n)}var Rt=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw Error(`Missing Observer.`);r=zt(e,[`next`,`error`,`complete`])?e:{next:e,error:t,complete:n},r.next===void 0&&(r.next=Bt),r.error===void 0&&(r.error=Bt),r.complete===void 0&&(r.complete=Bt);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],--this.observerCount,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(e){typeof console<`u`&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function zt(e,t){if(typeof e!=`object`||!e)return!1;for(let n of t)if(n in e&&typeof e[n]==`function`)return!0;return!1}function Bt(){}function Vt(e){return e&&e._delegate?e._delegate:e}function Ht(e){try{return(e.startsWith(`http://`)||e.startsWith(`https://`)?new URL(e).hostname:e).endsWith(`.cloudworkstations.dev`)}catch{return!1}}async function Ut(e){return(await fetch(e,{credentials:`include`})).ok}var Wt=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode=`LAZY`,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}},Gt=`[DEFAULT]`,Kt=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new _t;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}else if(n)return null;else throw Error(`Service ${this.name} is not available`)}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(Jt(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>`INTERNAL`in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>`_delete`in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){let n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);let i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:qt(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!==`EXPLICIT`}};function qt(e){return e===Gt?void 0:e}function Jt(e){return e.instantiationMode===`EAGER`}var Yt=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Kt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}},Xt=[],N;(function(e){e[e.DEBUG=0]=`DEBUG`,e[e.VERBOSE=1]=`VERBOSE`,e[e.INFO=2]=`INFO`,e[e.WARN=3]=`WARN`,e[e.ERROR=4]=`ERROR`,e[e.SILENT=5]=`SILENT`})(N||={});var Zt={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Qt=N.INFO,$t={[N.DEBUG]:`log`,[N.VERBOSE]:`log`,[N.INFO]:`info`,[N.WARN]:`warn`,[N.ERROR]:`error`},en=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=$t[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)},tn=class{constructor(e){this.name=e,this._logLevel=Qt,this._logHandler=en,this._userLogHandler=null,Xt.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e==`string`?Zt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!=`function`)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}},nn=(e,t)=>t.some(t=>e instanceof t),rn,an;function on(){return rn||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function sn(){return an||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var cn=new WeakMap,ln=new WeakMap,un=new WeakMap,dn=new WeakMap,fn=new WeakMap;function pn(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(yn(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return t.then(t=>{t instanceof IDBCursor&&cn.set(t,e)}).catch(()=>{}),fn.set(t,e),t}function mn(e){if(ln.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});ln.set(e,t)}var hn={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return ln.get(e);if(t===`objectStoreNames`)return e.objectStoreNames||un.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function gn(e){hn=e(hn)}function _n(e){return e===IDBDatabase.prototype.transaction&&!(`objectStoreNames`in IDBTransaction.prototype)?function(t,...n){let r=e.call(bn(this),t,...n);return un.set(r,t.sort?t.sort():[t]),yn(r)}:sn().includes(e)?function(...t){return e.apply(bn(this),t),yn(cn.get(this))}:function(...t){return yn(e.apply(bn(this),t))}}function vn(e){return typeof e==`function`?_n(e):(e instanceof IDBTransaction&&mn(e),nn(e,on())?new Proxy(e,hn):e)}function yn(e){if(e instanceof IDBRequest)return pn(e);if(dn.has(e))return dn.get(e);let t=vn(e);return t!==e&&(dn.set(e,t),fn.set(t,e)),t}var bn=e=>fn.get(e);function xn(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=yn(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(yn(o.result),e.oldVersion,e.newVersion,yn(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var Sn=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],Cn=[`put`,`add`,`delete`,`clear`],wn=new Map;function Tn(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(wn.get(t))return wn.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=Cn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sn.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return wn.set(t,a),a}gn(e=>({...e,get:(t,n,r)=>Tn(t,n)||e.get(t,n,r),has:(t,n)=>!!Tn(t,n)||e.has(t,n)}));var En=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Dn(e)){let t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(` `)}};function Dn(e){return e.getComponent()?.type===`VERSION`}var On=`@firebase/app`,kn=`0.15.1`,An=new tn(`@firebase/app`),jn=`@firebase/app-compat`,Mn=`@firebase/analytics-compat`,Nn=`@firebase/analytics`,Pn=`@firebase/app-check-compat`,Fn=`@firebase/app-check`,In=`@firebase/auth`,Ln=`@firebase/auth-compat`,Rn=`@firebase/database`,zn=`@firebase/data-connect`,Bn=`@firebase/database-compat`,Vn=`@firebase/functions`,Hn=`@firebase/functions-compat`,Un=`@firebase/installations`,Wn=`@firebase/installations-compat`,Gn=`@firebase/messaging`,Kn=`@firebase/messaging-compat`,qn=`@firebase/performance`,Jn=`@firebase/performance-compat`,Yn=`@firebase/remote-config`,Xn=`@firebase/remote-config-compat`,Zn=`@firebase/storage`,Qn=`@firebase/storage-compat`,$n=`@firebase/firestore`,er=`@firebase/ai`,tr=`@firebase/firestore-compat`,nr=`firebase`,rr=`12.16.0`,ir=`[DEFAULT]`,ar={[On]:`fire-core`,[jn]:`fire-core-compat`,[Nn]:`fire-analytics`,[Mn]:`fire-analytics-compat`,[Fn]:`fire-app-check`,[Pn]:`fire-app-check-compat`,[In]:`fire-auth`,[Ln]:`fire-auth-compat`,[Rn]:`fire-rtdb`,[zn]:`fire-data-connect`,[Bn]:`fire-rtdb-compat`,[Vn]:`fire-fn`,[Hn]:`fire-fn-compat`,[Un]:`fire-iid`,[Wn]:`fire-iid-compat`,[Gn]:`fire-fcm`,[Kn]:`fire-fcm-compat`,[qn]:`fire-perf`,[Jn]:`fire-perf-compat`,[Yn]:`fire-rc`,[Xn]:`fire-rc-compat`,[Zn]:`fire-gcs`,[Qn]:`fire-gcs-compat`,[$n]:`fire-fst`,[tr]:`fire-fst-compat`,[er]:`fire-vertex`,"fire-js":`fire-js`,[nr]:`fire-js-all`},or=new Map,sr=new Map,cr=new Map;function lr(e,t){try{e.container.addComponent(t)}catch(n){An.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ur(e){let t=e.name;if(cr.has(t))return An.debug(`There were multiple attempts to register component ${t}.`),!1;cr.set(t,e);for(let t of or.values())lr(t,e);for(let t of sr.values())lr(t,e);return!0}function dr(e,t){let n=e.container.getProvider(`heartbeat`).getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fr(e){return e==null?!1:e.settings!==void 0}var pr=new Ot(`app`,`Firebase`,{"no-app":`No Firebase App '{$appName}' has been created - call initializeApp() first`,"bad-app-name":`Illegal App name: '{$appName}'`,"duplicate-app":`Firebase App named '{$appName}' already exists with different options or config`,"app-deleted":`Firebase App named '{$appName}' already deleted`,"server-app-deleted":`Firebase Server App has been deleted`,"no-options":`Need to provide options, when not being deployed to hosting via source.`,"invalid-app-argument":`firebase.{$appName}() takes either no argument or a Firebase App instance.`,"invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":`Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.`,"idb-get":`Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.`,"idb-set":`Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.`,"idb-delete":`Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.`,"finalization-registry-not-supported":`FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.`,"invalid-server-app-environment":`FirebaseServerApp is not for use in browser environments.`}),mr=class{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Wt(`app`,()=>this,`PUBLIC`))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create(`app-deleted`,{appName:this._name})}},hr=rr;function gr(e,t={}){let n=e;typeof t!=`object`&&(t={name:t});let r={name:ir,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!=`string`||!i)throw pr.create(`bad-app-name`,{appName:String(i)});if(n||=ht(),!n)throw pr.create(`no-options`);let a=or.get(i);if(a){if(Mt(n,a.options)&&Mt(r,a.config))return a;throw pr.create(`duplicate-app`,{appName:i})}let o=new Yt(i);for(let e of cr.values())o.addComponent(e);let s=new mr(n,r,o);return or.set(i,s),s}function _r(e=ir){let t=or.get(e);if(!t&&e===`[DEFAULT]`&&ht())return gr();if(!t)throw pr.create(`no-app`,{appName:e});return t}function vr(e,t,n){let r=ar[e]??e;n&&(r+=`-${n}`);let i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){let e=[`Unable to register library "${r}" with version "${t}":`];i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&e.push(`and`),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),An.warn(e.join(` `));return}ur(new Wt(`${r}-version`,()=>({library:r,version:t}),`VERSION`))}var yr=`firebase-heartbeat-database`,br=1,xr=`firebase-heartbeat-store`,Sr=null;function Cr(){return Sr||=xn(yr,br,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(xr)}catch(e){console.warn(e)}}}}).catch(e=>{throw pr.create(`idb-open`,{originalErrorMessage:e.message})}),Sr}async function wr(e){try{let t=(await Cr()).transaction(xr),n=await t.objectStore(xr).get(Er(e));return await t.done,n}catch(e){if(e instanceof Dt)An.warn(e.message);else{let t=pr.create(`idb-get`,{originalErrorMessage:e?.message});An.warn(t.message)}}}async function Tr(e,t){try{let n=(await Cr()).transaction(xr,`readwrite`);await n.objectStore(xr).put(t,Er(e)),await n.done}catch(e){if(e instanceof Dt)An.warn(e.message);else{let t=pr.create(`idb-set`,{originalErrorMessage:e?.message});An.warn(t.message)}}}function Er(e){return`${e.name}!${e.options.appId}`}var Dr=1024,Or=30,kr=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider(`app`).getImmediate();this._storage=new Mr(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{let e=this.container.getProvider(`platform-logger`).getImmediate().getPlatformInfoString(),t=Ar();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>Or){let e=Pr(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){An.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return``;let e=Ar(),{heartbeatsToSend:t,unsentEntries:n}=jr(this._heartbeatsCache.heartbeats),r=st(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return An.warn(e),``}}};function Ar(){return new Date().toISOString().substring(0,10)}function jr(e,t=Dr){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(!e){if(n.push({agent:i.agent,dates:[i.date]}),Nr(n)>t){n.pop();break}}else if(e.dates.push(i.date),Nr(n)>t){e.dates.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var Mr=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wt()?Tt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let e=await wr(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return Tr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return Tr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}};function Nr(e){return st(JSON.stringify({version:2,heartbeats:e})).length}function Pr(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}function Fr(e){ur(new Wt(`platform-logger`,e=>new En(e),`PRIVATE`)),ur(new Wt(`heartbeat`,e=>new kr(e),`PRIVATE`)),vr(On,kn,e),vr(On,kn,`esm2020`),vr(`fire-js`,``)}Fr(``),vr(`firebase`,`12.16.0`,`app`);function Ir(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Lr=Ir,Rr=new Ot(`auth`,`Firebase`,Ir()),zr=new tn(`@firebase/auth`);function Br(e,...t){zr.logLevel<=N.WARN&&zr.warn(`Auth (${hr}): ${e}`,...t)}function Vr(e,...t){zr.logLevel<=N.ERROR&&zr.error(`Auth (${hr}): ${e}`,...t)}function Hr(e,...t){throw Kr(e,...t)}function Ur(e,...t){return Kr(e,...t)}function Wr(e,t,n){return new Ot(`auth`,`Firebase`,{...Lr(),[t]:n}).create(t,{appName:e.name})}function Gr(e){return Wr(e,`operation-not-supported-in-this-environment`,`Operations that alter the current user are not supported in conjunction with FirebaseServerApp`)}function Kr(e,...t){if(typeof e!=`string`){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Rr.create(e,...t)}function P(e,t,...n){if(!e)throw Kr(t,...n)}function qr(e){let t=`INTERNAL ASSERTION FAILED: `+e;throw Vr(t),Error(t)}function Jr(e,t){e||qr(t)}function Yr(){return typeof self<`u`&&self.location?.href||``}function Xr(){return Zr()===`http:`||Zr()===`https:`}function Zr(){return typeof self<`u`&&self.location?.protocol||null}function Qr(){return typeof navigator<`u`&&navigator&&`onLine`in navigator&&typeof navigator.onLine==`boolean`&&(Xr()||xt()||`connection`in navigator)?navigator.onLine:!0}function $r(){if(typeof navigator>`u`)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}var ei=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Jr(t>e,`Short delay should be less than long delay!`),this.isMobile=yt()||St()}get(){return Qr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function ti(e,t){Jr(e.emulator,`Emulator should always be set here`);let{url:n}=e.emulator;return t?`${n}${t.startsWith(`/`)?t.slice(1):t}`:n}var ni=class{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<`u`&&`fetch`in self)return self.fetch;if(typeof globalThis<`u`&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<`u`)return fetch;qr(`Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<`u`&&`Headers`in self)return self.Headers;if(typeof globalThis<`u`&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<`u`)return Headers;qr(`Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<`u`&&`Response`in self)return self.Response;if(typeof globalThis<`u`&&globalThis.Response)return globalThis.Response;if(typeof Response<`u`)return Response;qr(`Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}},ri={CREDENTIAL_MISMATCH:`custom-token-mismatch`,MISSING_CUSTOM_TOKEN:`internal-error`,INVALID_IDENTIFIER:`invalid-email`,MISSING_CONTINUE_URI:`internal-error`,INVALID_PASSWORD:`wrong-password`,MISSING_PASSWORD:`missing-password`,INVALID_LOGIN_CREDENTIALS:`invalid-credential`,EMAIL_EXISTS:`email-already-in-use`,PASSWORD_LOGIN_DISABLED:`operation-not-allowed`,INVALID_IDP_RESPONSE:`invalid-credential`,INVALID_PENDING_TOKEN:`invalid-credential`,FEDERATED_USER_ID_ALREADY_LINKED:`credential-already-in-use`,MISSING_REQ_TYPE:`internal-error`,EMAIL_NOT_FOUND:`user-not-found`,RESET_PASSWORD_EXCEED_LIMIT:`too-many-requests`,EXPIRED_OOB_CODE:`expired-action-code`,INVALID_OOB_CODE:`invalid-action-code`,MISSING_OOB_CODE:`internal-error`,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:`requires-recent-login`,INVALID_ID_TOKEN:`invalid-user-token`,TOKEN_EXPIRED:`user-token-expired`,USER_NOT_FOUND:`user-token-expired`,TOO_MANY_ATTEMPTS_TRY_LATER:`too-many-requests`,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:`password-does-not-meet-requirements`,INVALID_CODE:`invalid-verification-code`,INVALID_SESSION_INFO:`invalid-verification-id`,INVALID_TEMPORARY_PROOF:`invalid-credential`,MISSING_SESSION_INFO:`missing-verification-id`,SESSION_EXPIRED:`code-expired`,MISSING_ANDROID_PACKAGE_NAME:`missing-android-pkg-name`,UNAUTHORIZED_DOMAIN:`unauthorized-continue-uri`,INVALID_OAUTH_CLIENT_ID:`invalid-oauth-client-id`,ADMIN_ONLY_OPERATION:`admin-restricted-operation`,INVALID_MFA_PENDING_CREDENTIAL:`invalid-multi-factor-session`,MFA_ENROLLMENT_NOT_FOUND:`multi-factor-info-not-found`,MISSING_MFA_ENROLLMENT_ID:`missing-multi-factor-info`,MISSING_MFA_PENDING_CREDENTIAL:`missing-multi-factor-session`,SECOND_FACTOR_EXISTS:`second-factor-already-in-use`,SECOND_FACTOR_LIMIT_EXCEEDED:`maximum-second-factor-count-exceeded`,BLOCKING_FUNCTION_ERROR_RESPONSE:`internal-error`,RECAPTCHA_NOT_ENABLED:`recaptcha-not-enabled`,MISSING_RECAPTCHA_TOKEN:`missing-recaptcha-token`,INVALID_RECAPTCHA_TOKEN:`invalid-recaptcha-token`,INVALID_RECAPTCHA_ACTION:`invalid-recaptcha-action`,MISSING_CLIENT_TYPE:`missing-client-type`,MISSING_RECAPTCHA_VERSION:`missing-recaptcha-version`,INVALID_RECAPTCHA_VERSION:`invalid-recaptcha-version`,INVALID_REQ_TYPE:`invalid-req-type`},ii=[`/v1/accounts:signInWithCustomToken`,`/v1/accounts:signInWithEmailLink`,`/v1/accounts:signInWithIdp`,`/v1/accounts:signInWithPassword`,`/v1/accounts:signInWithPhoneNumber`,`/v1/token`],ai=new ei(3e4,6e4);function oi(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function F(e,t,n,r,i={}){return si(e,i,async()=>{let i={},a={};r&&(t===`GET`?a=r:i={body:JSON.stringify(r)});let o=Pt({...a,key:e.config.apiKey}).slice(1),s=await e._getAdditionalHeaders();s[`Content-Type`]=`application/json`,e.languageCode&&(s[`X-Firebase-Locale`]=e.languageCode);let c={method:t,headers:s,...i};return bt()||(c.referrerPolicy=`strict-origin-when-cross-origin`),e.emulatorConfig&&Ht(e.emulatorConfig.host)&&(c.credentials=`include`),ni.fetch()(await li(e,e.config.apiHost,n,o),c)})}async function si(e,t,n){e._canInitEmulator=!1;let r={...ri,...t};try{let t=new di(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();let a=await i.json();if(`needConfirmation`in a)throw fi(e,`account-exists-with-different-credential`,a);if(i.ok&&!(`errorMessage`in a))return a;{let[t,n]=(i.ok?a.errorMessage:a.error.message).split(` : `);if(t===`FEDERATED_USER_ID_ALREADY_LINKED`)throw fi(e,`credential-already-in-use`,a);if(t===`EMAIL_EXISTS`)throw fi(e,`email-already-in-use`,a);if(t===`USER_DISABLED`)throw fi(e,`user-disabled`,a);let o=r[t]||t.toLowerCase().replace(/[_\s]+/g,`-`);if(n)throw Wr(e,o,n);Hr(e,o)}}catch(t){if(t instanceof Dt)throw t;Hr(e,`network-request-failed`,{message:String(t)})}}async function ci(e,t,n,r,i={}){let a=await F(e,t,n,r,i);return`mfaPendingCredential`in a&&Hr(e,`multi-factor-auth-required`,{_serverResponse:a}),a}async function li(e,t,n,r){let i=`${t}${n}?${r}`,a=e,o=a.config.emulator?ti(e.config,i):`${e.config.apiScheme}://${i}`;return ii.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()===`COOKIE`)?a._getPersistence()._getFinalTarget(o).toString():o}function ui(e){switch(e){case`ENFORCE`:return`ENFORCE`;case`AUDIT`:return`AUDIT`;case`OFF`:return`OFF`;default:return`ENFORCEMENT_STATE_UNSPECIFIED`}}var di=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(Ur(this.auth,`network-request-failed`)),ai.get())})}};function fi(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=Ur(e,t,r);return i.customData._tokenResponse=n,i}function pi(e){return e!==void 0&&e.getResponse!==void 0}function mi(e){return e!==void 0&&e.enterprise!==void 0}var hi=class{constructor(e){if(this.siteKey=``,this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw Error(`recaptchaKey undefined`);this.siteKey=e.recaptchaKey.split(`/`)[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ui(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)===`ENFORCE`||this.getProviderEnforcementState(e)===`AUDIT`}isAnyProviderEnabled(){return this.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`)||this.isProviderEnabled(`PHONE_PROVIDER`)}};async function gi(e){return(await F(e,`GET`,`/v1/recaptchaParams`)).recaptchaSiteKey||``}async function _i(e,t){return F(e,`GET`,`/v2/recaptchaConfig`,oi(e,t))}async function vi(e,t){return F(e,`POST`,`/v1/accounts:delete`,t)}async function yi(e,t){return F(e,`POST`,`/v1/accounts:lookup`,t)}function bi(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function xi(e,t=!1){let n=Vt(e),r=await n.getIdToken(t),i=Ci(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,`internal-error`);let a=typeof i.firebase==`object`?i.firebase:void 0,o=a?.sign_in_provider;return{claims:i,token:r,authTime:bi(Si(i.auth_time)),issuedAtTime:bi(Si(i.iat)),expirationTime:bi(Si(i.exp)),signInProvider:o||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Si(e){return Number(e)*1e3}function Ci(e){let[t,n,r]=e.split(`.`);if(t===void 0||n===void 0||r===void 0)return Vr(`JWT malformed, contained fewer than 3 sections`),null;try{let e=ct(n);return e?JSON.parse(e):(Vr(`Failed to decode base64 JWT payload`),null)}catch(e){return Vr(`Caught error parsing JWT payload as JSON`,e?.toString()),null}}function wi(e){let t=Ci(e);return P(t,`internal-error`),P(t.exp!==void 0,`internal-error`),P(t.iat!==void 0,`internal-error`),Number(t.exp)-Number(t.iat)}async function Ti(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Dt&&Ei(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function Ei({code:e}){return e===`auth/user-disabled`||e===`auth/user-token-expired`}var Di=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;let e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code===`auth/network-request-failed`&&this.schedule(!0);return}this.schedule()}},Oi=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bi(this.lastLoginAt),this.creationTime=bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function ki(e){let t=e.auth,n=await Ti(e,yi(t,{idToken:await e.getIdToken()}));P(n?.users.length,t,`internal-error`);let r=n.users[0];e._notifyReloadListener(r);let i=r.providerUserInfo?.length?Mi(r.providerUserInfo):[],a=ji(e.providerData,i),o=e.isAnonymous,s=!(e.email&&r.passwordHash)&&!a?.length,c=o?s:!1,l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Oi(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(e,l)}async function Ai(e){let t=Vt(e);await ki(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ji(e,t){return[...e.filter(e=>!t.some(t=>t.providerId===e.providerId)),...t]}function Mi(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||``,displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}async function Ni(e,t){let n=await si(e,{},async()=>{let n=Pt({grant_type:`refresh_token`,refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=await li(e,r,`/v1/token`,`key=${i}`),o=await e._getAdditionalHeaders();o[`Content-Type`]=`application/x-www-form-urlencoded`;let s={method:`POST`,headers:o,body:n};return e.emulatorConfig&&Ht(e.emulatorConfig.host)&&(s.credentials=`include`),ni.fetch()(a,s)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Pi(e,t){return F(e,`POST`,`/v2/accounts:revokeToken`,oi(e,t))}var Fi=class e{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,`internal-error`),P(e.idToken!==void 0,`internal-error`),P(e.refreshToken!==void 0,`internal-error`);let t=`expiresIn`in e&&e.expiresIn!==void 0?Number(e.expiresIn):wi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){P(e.length!==0,`internal-error`);let t=wi(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,`user-token-expired`),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await Ni(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,n){let{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new e;return r&&(P(typeof r==`string`,`internal-error`,{appName:t}),o.refreshToken=r),i&&(P(typeof i==`string`,`internal-error`,{appName:t}),o.accessToken=i),a&&(P(typeof a==`number`,`internal-error`,{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new e,this.toJSON())}_performRefresh(){return qr(`not implemented`)}};function I(e,t){P(typeof e==`string`||e===void 0,`internal-error`,{appName:t})}var L=class e{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId=`firebase`,this.proactiveRefresh=new Di(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Oi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await Ti(this,this.stsTokenManager.getToken(this.auth,e));return P(t,this.auth,`internal-error`),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xi(this,e)}reload(){return Ai(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,`internal-error`),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(t){let n=new e({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,`internal-error`),this.reloadListener=e,this.reloadUserInfo&&=(this._notifyReloadListener(this.reloadUserInfo),null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ki(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fr(this.auth.app))return Promise.reject(Gr(this.auth));let e=await this.getIdToken();return await Ti(this,vi(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||``}static _fromJSON(t,n){let r=n.displayName??void 0,i=n.email??void 0,a=n.phoneNumber??void 0,o=n.photoURL??void 0,s=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:f,isAnonymous:p,providerData:m,stsTokenManager:h}=n;P(d&&h,t,`internal-error`);let g=Fi.fromJSON(this.name,h);P(typeof d==`string`,t,`internal-error`),I(r,t.name),I(i,t.name),P(typeof f==`boolean`,t,`internal-error`),P(typeof p==`boolean`,t,`internal-error`),I(a,t.name),I(o,t.name),I(s,t.name),I(c,t.name),I(l,t.name),I(u,t.name);let _=new e({uid:d,auth:t,email:i,emailVerified:f,displayName:r,isAnonymous:p,photoURL:o,phoneNumber:a,tenantId:s,stsTokenManager:g,createdAt:l,lastLoginAt:u});return m&&Array.isArray(m)&&(_.providerData=m.map(e=>({...e}))),c&&(_._redirectEventId=c),_}static async _fromIdTokenResponse(t,n,r=!1){let i=new Fi;i.updateFromServerResponse(n);let a=new e({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ki(a),a}static async _fromGetAccountInfoResponse(t,n,r){let i=n.users[0];P(i.localId!==void 0,`internal-error`);let a=i.providerUserInfo===void 0?[]:Mi(i.providerUserInfo),o=!(i.email&&i.passwordHash)&&!a?.length,s=new Fi;s.updateFromIdToken(r);let c=new e({uid:i.localId,auth:t,stsTokenManager:s,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Oi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(c,l),c}},R=new Map;function Ii(e){Jr(e instanceof Function,`Expected a class definition`);let t=R.get(e);return t?(Jr(t instanceof e,`Instance stored in cache mismatched with class`),t):(t=new e,R.set(e,t),t)}var Li=class{constructor(){this.type=`NONE`,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Li.type=`NONE`;var Ri=Li;function zi(e,t,n){return`firebase:${e}:${t}:${n}`}var Bi=class e{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=zi(this.userKey,r.apiKey,i),this.fullPersistenceKey=zi(`persistence`,r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e==`string`){let t=await yi(this.auth,{idToken:e}).catch(()=>void 0);return t?L._fromGetAccountInfoResponse(this.auth,t,e):null}return L._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r=`authUser`){if(!n.length)return new e(Ii(Ri),t,r);let i=(await Promise.all(n.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),a=i[0]||Ii(Ri),o=zi(r,t.config.apiKey,t.name),s=null;for(let e of n)try{let n=await e._get(o);if(n){let r;if(typeof n==`string`){let e=await yi(t,{idToken:n}).catch(()=>void 0);if(!e)break;r=await L._fromGetAccountInfoResponse(t,e,n)}else r=L._fromJSON(t,n);e!==a&&(s=r),a=e;break}}catch{}let c=i.filter(e=>e._shouldAllowMigration);return!a._shouldAllowMigration||!c.length?new e(a,t,r):(a=c[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async e=>{if(e!==a)try{await e._remove(o)}catch{}})),new e(a,t,r))}};function Vi(e){let t=e.toLowerCase();if(t.includes(`opera/`)||t.includes(`opr/`)||t.includes(`opios/`))return`Opera`;if(Gi(t))return`IEMobile`;if(t.includes(`msie`)||t.includes(`trident/`))return`IE`;if(t.includes(`edge/`))return`Edge`;if(Hi(t))return`Firefox`;if(t.includes(`silk/`))return`Silk`;if(qi(t))return`Blackberry`;if(Ji(t))return`Webos`;if(Ui(t))return`Safari`;if((t.includes(`chrome/`)||Wi(t))&&!t.includes(`edge/`))return`Chrome`;if(Ki(t))return`Android`;{let t=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if(t?.length===2)return t[1]}return`Other`}function Hi(e=vt()){return/firefox\//i.test(e)}function Ui(e=vt()){let t=e.toLowerCase();return t.includes(`safari/`)&&!t.includes(`chrome/`)&&!t.includes(`crios/`)&&!t.includes(`android`)}function Wi(e=vt()){return/crios\//i.test(e)}function Gi(e=vt()){return/iemobile/i.test(e)}function Ki(e=vt()){return/android/i.test(e)}function qi(e=vt()){return/blackberry/i.test(e)}function Ji(e=vt()){return/webos/i.test(e)}function Yi(e=vt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Xi(e=vt()){return Yi(e)&&!!window.navigator?.standalone}function Zi(){return Ct()&&document.documentMode===10}function Qi(e=vt()){return Yi(e)||Ki(e)||Ji(e)||qi(e)||/windows phone/i.test(e)||Gi(e)}function $i(e,t=[]){let n;switch(e){case`Browser`:n=Vi(vt());break;case`Worker`:n=`${Vi(vt())}-${e}`;break;default:n=e}let r=t.length?t.join(`,`):`FirebaseCore-web`;return`${n}/JsCore/${hr}/${r}`}var ea=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(let e of t)try{e()}catch{}throw this.auth._errorFactory.create(`login-blocked`,{originalMessage:e?.message})}}};async function ta(e,t={}){return F(e,`GET`,`/v2/passwordPolicy`,oi(e,t))}var na=6,ra=class{constructor(e){let t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??na,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState===`ENFORCEMENT_STATE_UNSPECIFIED`&&(this.enforcementState=`OFF`),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join(``)??``,this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&=t.meetsMinPasswordLength??!0,t.isValid&&=t.meetsMaxPasswordLength??!0,t.isValid&&=t.containsLowercaseLetter??!0,t.isValid&&=t.containsUppercaseLetter??!0,t.isValid&&=t.containsNumericCharacter??!0,t.isValid&&=t.containsNonAlphanumericCharacter??!0,t}validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>=`a`&&n<=`z`,n>=`A`&&n<=`Z`,n>=`0`&&n<=`9`,this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||=t),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||=n),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||=r),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||=i)}},ia=class{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oa(this),this.idTokenSubscription=new oa(this),this.beforeStateQueue=new ea(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ii(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await yi(this,{idToken:e}),n=await L._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn(`FirebaseServerApp could not login user with provided authIdToken: `,e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(fr(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let t=await this.assertedPersistence.getCurrentUser(),n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let t=this.redirectUser?._redirectEventId,i=n?._redirectEventId,a=await this.tryRedirectSignIn(e);(!t||t===i)&&a?.user&&(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,`argument-error`),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ki(e)}catch(e){if(e?.code!==`auth/network-request-failed`)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$r()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fr(this.app))return Promise.reject(Gr(this));let t=e?Vt(e):null;return t&&P(t.auth.config.apiKey===this.config.apiKey,this,`invalid-user-token`),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,`tenant-id-mismatch`),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fr(this.app)?Promise.reject(Gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fr(this.app)?Promise.reject(Gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ii(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion===this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?t.validatePassword(e):Promise.reject(this._errorFactory.create(`unsupported-password-policy-schema-version`,{}))}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new ra(await ta(this));this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ot(`auth`,`Firebase`,e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:`apple.com`,tokenType:`ACCESS_TOKEN`,token:e,idToken:await this.currentUser.getIdToken()};this.tenantId!=null&&(t.tenantId=this.tenantId),await Pi(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Ii(e)||this._popupRedirectResolver;P(t,this,`argument-error`),this.redirectPersistenceManager=await Bi.create(this,[Ii(t._redirectPersistence)],`redirectUser`),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i=typeof t==`function`?t:t.next.bind(t),a=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(o,this,`internal-error`),o.then(()=>{a||i(this.currentUser)}),typeof t==`function`){let i=e.addObserver(t,n,r);return()=>{a=!0,i()}}else{let n=e.addObserver(t);return()=>{a=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,`internal-error`),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$i(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e[`X-Firebase-gmpid`]=this.app.options.appId);let t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e[`X-Firebase-Client`]=t);let n=await this._getAppCheckToken();return n&&(e[`X-Firebase-AppCheck`]=n),e}async _getAppCheckToken(){if(fr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Br(`Error while retrieving App Check token: ${e.error}`),e?.token}};function aa(e){return Vt(e)}var oa=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lt(e=>this.observer=e)}get next(){return P(this.observer,this.auth,`internal-error`),this.observer.next.bind(this.observer)}},sa={async loadJS(){throw Error(`Unable to load external scripts`)},recaptchaV2Script:``,recaptchaEnterpriseScript:``,gapiScript:``};function ca(e){sa=e}function la(e){return sa.loadJS(e)}function ua(){return sa.recaptchaV2Script}function da(){return sa.recaptchaEnterpriseScript}function fa(){return sa.gapiScript}function pa(e){return`__${e}${Math.floor(Math.random()*1e6)}`}var ma=500,ha=6e4,ga=0xe8d4a51000,_a=class{constructor(e){this.auth=e,this.counter=ga,this._widgets=new Map}render(e,t){let n=this.counter;return this._widgets.set(n,new ba(e,this.auth.name,t||{})),this.counter++,n}reset(e){let t=e||ga;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){let t=e||ga;return this._widgets.get(t)?.getResponse()||``}async execute(e){let t=e||ga;return this._widgets.get(t)?.execute(),``}},va=class{constructor(){this.enterprise=new ya}ready(e){e()}execute(e,t){return Promise.resolve(`token`)}render(e,t){return``}},ya=class{ready(e){e()}execute(e,t){return Promise.resolve(`token`)}render(e,t){return``}},ba=class{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let r=typeof e==`string`?document.getElementById(e):e;P(r,`argument-error`,{appName:t}),this.container=r,this.isVisible=this.params.size!==`invisible`,this.isVisible?this.execute():this.container.addEventListener(`click`,this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&=(clearTimeout(this.timerId),null),this.container.removeEventListener(`click`,this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=xa(50);let{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},ha)},ma))}checkIfDeleted(){if(this.deleted)throw Error(`reCAPTCHA mock was already deleted!`)}};function xa(e){let t=[];for(let n=0;n<e;n++)t.push(`1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.charAt(Math.floor(Math.random()*62)));return t.join(``)}var Sa=`recaptcha-enterprise`,Ca=`NO_RECAPTCHA`,wa=`onFirebaseAuthREInstanceReady`,Ta=class e{constructor(e){this.type=Sa,this.auth=aa(e)}async verify(t=`verify`,n=!1){async function r(e){if(!n){if(e.tenantId==null&&e._agentRecaptchaConfig!=null)return e._agentRecaptchaConfig.siteKey;if(e.tenantId!=null&&e._tenantRecaptchaConfigs[e.tenantId]!==void 0)return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{_i(e,{clientType:`CLIENT_TYPE_WEB`,version:`RECAPTCHA_ENTERPRISE`}).then(r=>{if(r.recaptchaKey===void 0)n(Error(`recaptcha Enterprise site key undefined`));else{let n=new hi(r);return e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function i(e,n,r){let i=window.grecaptcha;mi(i)?i.enterprise.ready(()=>{i.enterprise.execute(e,{action:t}).then(e=>{n(e)}).catch(()=>{n(Ca)})}):r(Error(`No reCAPTCHA enterprise script loaded.`))}return this.auth.settings.appVerificationDisabledForTesting?new va().execute(`siteKey`,{action:`verify`}):new Promise((t,a)=>{r(this.auth).then(async r=>{if(!n&&mi(window.grecaptcha)&&e.scriptInjectionDeferred)await e.scriptInjectionDeferred.promise,i(r,t,a);else{if(typeof window>`u`){a(Error(`RecaptchaVerifier is only supported in browser`));return}let n=da();n.length!==0&&(n+=r+`&onload=${wa}`),e.scriptInjectionDeferred=new _t,window[wa]=()=>{e.scriptInjectionDeferred?.resolve()},la(n).then(()=>e.scriptInjectionDeferred?.promise).then(()=>{i(r,t,a)}).catch(e=>{a(e)})}}).catch(e=>{a(e)})})}};Ta.scriptInjectionDeferred=null;async function Ea(e,t,n,r=!1,i=!1){let a=new Ta(e),o;if(i)o=Ca;else try{o=await a.verify(n)}catch{o=await a.verify(n,!0)}let s={...t};if(n===`mfaSmsEnrollment`||n===`mfaSmsSignIn`){if(`phoneEnrollmentInfo`in s){let e=s.phoneEnrollmentInfo.phoneNumber,t=s.phoneEnrollmentInfo.recaptchaToken;Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:`CLIENT_TYPE_WEB`,recaptchaVersion:`RECAPTCHA_ENTERPRISE`}})}else if(`phoneSignInInfo`in s){let e=s.phoneSignInInfo.recaptchaToken;Object.assign(s,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:`CLIENT_TYPE_WEB`,recaptchaVersion:`RECAPTCHA_ENTERPRISE`}})}return s}return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:`CLIENT_TYPE_WEB`}),Object.assign(s,{recaptchaVersion:`RECAPTCHA_ENTERPRISE`}),s}async function Da(e,t,n,r,i){return i===`EMAIL_PASSWORD_PROVIDER`?e._getRecaptchaConfig()?.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`)?r(e,await Ea(e,t,n,n===`getOobCode`)):r(e,t).catch(async i=>i.code===`auth/missing-recaptcha-token`?(console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`),r(e,await Ea(e,t,n,n===`getOobCode`))):Promise.reject(i)):i===`PHONE_PROVIDER`?e._getRecaptchaConfig()?.isProviderEnabled(`PHONE_PROVIDER`)?r(e,await Ea(e,t,n)).catch(async i=>e._getRecaptchaConfig()?.getProviderEnforcementState(`PHONE_PROVIDER`)===`AUDIT`&&(i.code===`auth/missing-recaptcha-token`||i.code===`auth/invalid-app-credential`)?(console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`),r(e,await Ea(e,t,n,!1,!0))):Promise.reject(i)):r(e,await Ea(e,t,n,!1,!0)):Promise.reject(i+` provider is not supported.`)}async function Oa(e){let t=aa(e),n=new hi(await _i(t,{clientType:`CLIENT_TYPE_WEB`,version:`RECAPTCHA_ENTERPRISE`}));t.tenantId==null?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,n.isAnyProviderEnabled()&&new Ta(t).verify()}function ka(e,t){let n=dr(e,`auth`);if(n.isInitialized()){let e=n.getImmediate();if(Mt(n.getOptions(),t??{}))return e;Hr(e,`already-initialized`)}return n.initialize({options:t})}function Aa(e,t){let n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Ii);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function ja(e,t,n){let r=aa(e);P(/^https?:\/\//.test(t),r,`invalid-emulator-scheme`);let i=!!n?.disableWarnings,a=Ma(t),{host:o,port:s}=Na(t),c=s===null?``:`:${s}`,l={url:`${a}//${o}${c}/`},u=Object.freeze({host:o,port:s,protocol:a.replace(`:`,``),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){P(r.config.emulator&&r.emulatorConfig,r,`emulator-config-failed`),P(Mt(l,r.config.emulator)&&Mt(u,r.emulatorConfig),r,`emulator-config-failed`);return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Ht(o)?Ut(`${a}//${o}${c}`):i||Fa()}function Ma(e){let t=e.indexOf(`:`);return t<0?``:e.substr(0,t+1)}function Na(e){let t=Ma(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:``,port:null};let r=n[2].split(`@`).pop()||``,i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let e=i[1];return{host:e,port:Pa(r.substr(e.length+1))}}else{let[e,t]=r.split(`:`);return{host:e,port:Pa(t)}}}function Pa(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}function Fa(){function e(){let e=document.createElement(`p`),t=e.style;e.innerText=`Running in emulator mode. Do not use with production credentials.`,t.position=`fixed`,t.width=`100%`,t.backgroundColor=`#ffffff`,t.border=`.1em solid #000000`,t.color=`#b50000`,t.bottom=`0px`,t.left=`0px`,t.margin=`0px`,t.zIndex=`10000`,t.textAlign=`center`,e.classList.add(`firebase-emulator-warning`),document.body.appendChild(e)}typeof console<`u`&&typeof console.info==`function`&&console.info(`WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.`),typeof window<`u`&&typeof document<`u`&&(document.readyState===`loading`?window.addEventListener(`DOMContentLoaded`,e):e())}var Ia=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qr(`not implemented`)}_getIdTokenResponse(e){return qr(`not implemented`)}_linkToIdToken(e,t){return qr(`not implemented`)}_getReauthenticationResolver(e){return qr(`not implemented`)}};async function La(e,t){return F(e,`POST`,`/v1/accounts:signUp`,t)}async function Ra(e,t){return ci(e,`POST`,`/v1/accounts:signInWithPassword`,oi(e,t))}async function za(e,t){return ci(e,`POST`,`/v1/accounts:signInWithEmailLink`,oi(e,t))}async function Ba(e,t){return ci(e,`POST`,`/v1/accounts:signInWithEmailLink`,oi(e,t))}var Va=class e extends Ia{constructor(e,t,n,r=null){super(`password`,n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(t,n){return new e(t,n,`password`)}static _fromEmailAndCode(t,n,r=null){return new e(t,n,`emailLink`,r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e==`string`?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod===`password`)return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod===`emailLink`)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case`password`:return Da(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:`CLIENT_TYPE_WEB`},`signInWithPassword`,Ra,`EMAIL_PASSWORD_PROVIDER`);case`emailLink`:return za(e,{email:this._email,oobCode:this._password});default:Hr(e,`internal-error`)}}async _linkToIdToken(e,t){switch(this.signInMethod){case`password`:return Da(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:`CLIENT_TYPE_WEB`},`signUpPassword`,La,`EMAIL_PASSWORD_PROVIDER`);case`emailLink`:return Ba(e,{idToken:t,email:this._email,oobCode:this._password});default:Hr(e,`internal-error`)}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Ha(e,t){return ci(e,`POST`,`/v1/accounts:signInWithIdp`,oi(e,t))}var Ua=`http://localhost`,Wa=class e extends Ia{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){let n=new e(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Hr(`argument-error`),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){let{providerId:n,signInMethod:r,...i}=typeof t==`string`?JSON.parse(t):t;if(!n||!r)return null;let a=new e(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){return Ha(e,this.buildRequest())}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,Ha(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Ha(e,t)}buildRequest(){let e={requestUri:Ua,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pt(t)}return e}};async function Ga(e,t){return F(e,`POST`,`/v1/accounts:sendVerificationCode`,oi(e,t))}async function Ka(e,t){return ci(e,`POST`,`/v1/accounts:signInWithPhoneNumber`,oi(e,t))}async function qa(e,t){let n=await ci(e,`POST`,`/v1/accounts:signInWithPhoneNumber`,oi(e,t));if(n.temporaryProof)throw fi(e,`account-exists-with-different-credential`,n);return n}var Ja={USER_NOT_FOUND:`user-not-found`};async function Ya(e,t){return ci(e,`POST`,`/v1/accounts:signInWithPhoneNumber`,oi(e,{...t,operation:`REAUTH`}),Ja)}var Xa=class e extends Ia{constructor(e){super(`phone`,`phone`),this.params=e}static _fromVerification(t,n){return new e({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new e({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(e){return Ka(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qa(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Ya(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(t){typeof t==`string`&&(t=JSON.parse(t));let{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:a}=t;return!r&&!n&&!i&&!a?null:new e({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:a})}};function Za(e){switch(e){case`recoverEmail`:return`RECOVER_EMAIL`;case`resetPassword`:return`PASSWORD_RESET`;case`signIn`:return`EMAIL_SIGNIN`;case`verifyEmail`:return`VERIFY_EMAIL`;case`verifyAndChangeEmail`:return`VERIFY_AND_CHANGE_EMAIL`;case`revertSecondFactorAddition`:return`REVERT_SECOND_FACTOR_ADDITION`;default:return null}}function Qa(e){let t=Ft(It(e)).link,n=t?Ft(It(t)).deep_link_id:null,r=Ft(It(e)).deep_link_id;return(r?Ft(It(r)).link:null)||r||n||t||e}var $a=class e{constructor(e){let t=Ft(It(e)),n=t.apiKey??null,r=t.oobCode??null,i=Za(t.mode??null);P(n&&r&&i,`argument-error`),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(t){let n=Qa(t);try{return new e(n)}catch{return null}}},eo=class e{constructor(){this.providerId=e.PROVIDER_ID}static credential(e,t){return Va._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=$a.parseLink(t);return P(n,`argument-error`),Va._fromEmailAndCode(e,n.code,n.tenantId)}};eo.PROVIDER_ID=`password`,eo.EMAIL_PASSWORD_SIGN_IN_METHOD=`password`,eo.EMAIL_LINK_SIGN_IN_METHOD=`emailLink`;var to=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}},no=class extends to{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}},ro=class e extends no{constructor(){super(`facebook.com`)}static credential(t){return Wa._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!(`oauthAccessToken`in t)||!t.oauthAccessToken)return null;try{return e.credential(t.oauthAccessToken)}catch{return null}}};ro.FACEBOOK_SIGN_IN_METHOD=`facebook.com`,ro.PROVIDER_ID=`facebook.com`;var io=class e extends no{constructor(){super(`google.com`),this.addScope(`profile`)}static credential(t,n){return Wa._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;let{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return e.credential(n,r)}catch{return null}}};io.GOOGLE_SIGN_IN_METHOD=`google.com`,io.PROVIDER_ID=`google.com`;var ao=class e extends no{constructor(){super(`github.com`)}static credential(t){return Wa._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!(`oauthAccessToken`in t)||!t.oauthAccessToken)return null;try{return e.credential(t.oauthAccessToken)}catch{return null}}};ao.GITHUB_SIGN_IN_METHOD=`github.com`,ao.PROVIDER_ID=`github.com`;var oo=class e extends no{constructor(){super(`twitter.com`)}static credential(t,n){return Wa._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;let{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return e.credential(n,r)}catch{return null}}};oo.TWITTER_SIGN_IN_METHOD=`twitter.com`,oo.PROVIDER_ID=`twitter.com`;var so=class e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){return new e({user:await L._fromIdTokenResponse(t,r,i),providerId:co(r),_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){return await t._updateTokensIfNecessary(r,!0),new e({user:t,providerId:co(r),_tokenResponse:r,operationType:n})}};function co(e){return e.providerId?e.providerId:`phoneNumber`in e?`phone`:null}var lo=class e extends Dt{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,e.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new e(t,n,r,i)}};function uo(e,t,n,r){return(t===`reauthenticate`?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{throw n.code===`auth/multi-factor-auth-required`?lo._fromErrorAndOperation(e,n,t,r):n})}async function fo(e,t,n=!1){let r=await Ti(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return so._forOperation(e,`link`,r)}async function po(e,t,n=!1){let{auth:r}=e;if(fr(r.app))return Promise.reject(Gr(r));let i=`reauthenticate`;try{let a=await Ti(e,uo(r,i,t,e),n);P(a.idToken,r,`internal-error`);let o=Ci(a.idToken);P(o,r,`internal-error`);let{sub:s}=o;return P(e.uid===s,r,`user-mismatch`),so._forOperation(e,i,a)}catch(e){throw e?.code===`auth/user-not-found`&&Hr(r,`user-mismatch`),e}}async function mo(e,t,n=!1){if(fr(e.app))return Promise.reject(Gr(e));let r=`signIn`,i=await uo(e,r,t),a=await so._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function z(e,t){return mo(aa(e),t)}function B(e,t,n,r){return Vt(e).onIdTokenChanged(t,n,r)}function ho(e,t,n){return Vt(e).beforeAuthStateChanged(t,n)}function go(e,t){return F(e,`POST`,`/v2/accounts/mfaEnrollment:start`,oi(e,t))}function _o(e,t){return F(e,`POST`,`/v2/accounts/mfaEnrollment:finalize`,oi(e,t))}function vo(e,t){return F(e,`POST`,`/v2/accounts/mfaEnrollment:start`,oi(e,t))}function yo(e,t){return F(e,`POST`,`/v2/accounts/mfaEnrollment:finalize`,oi(e,t))}var bo=`__sak`,xo=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bo,`1`),this.storage.removeItem(bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}},So=1e3,V=10,Co=class extends xo{constructor(){super(()=>window.localStorage,`LOCAL`),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;t?this.detachListener():this.stopPolling();let r=()=>{let e=this.storage.getItem(n);!t&&this.localCache[n]===e||this.notifyListeners(n,e)},i=this.storage.getItem(n);Zi()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,V):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent(`storage`,{key:e,oldValue:t,newValue:n}),!0)})},So)}stopPolling(){this.pollTimer&&=(clearInterval(this.pollTimer),null)}attachListener(){window.addEventListener(`storage`,this.boundEventHandler)}detachListener(){window.removeEventListener(`storage`,this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Co.type=`LOCAL`;var wo=Co,To=1e3;function Eo(e){let t=e.replace(/[\\^$.*+?()[\]{}|]/g,`\\$&`),n=RegExp(`${t}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function Do(e){return`${window.location.protocol===`http:`?`__dev_`:`__HOST-`}FIREBASE_${e.split(`:`)[3]}`}var Oo=class{constructor(){this.type=`COOKIE`,this.listenerUnsubscribes=new Map}_getFinalTarget(e){let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set(`finalTarget`,e),t}async _isAvailable(){return typeof isSecureContext==`boolean`&&!isSecureContext||typeof navigator>`u`||typeof document>`u`?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=Do(e);return window.cookieStore?(await window.cookieStore.get(t))?.value:Eo(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let t=Do(e);document.cookie=`${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch(`/__cookies__`,{method:`DELETE`}).catch(()=>void 0)}_addListener(e,t){if(!this._isAvailable())return;let n=Do(e);if(window.cookieStore){let e=(e=>{let r=e.changed.find(e=>e.name===n);r&&t(r.value),e.deleted.find(e=>e.name===n)&&t(null)});return this.listenerUnsubscribes.set(t,()=>window.cookieStore.removeEventListener(`change`,e)),window.cookieStore.addEventListener(`change`,e)}let r=Eo(n),i=setInterval(()=>{let e=Eo(n);e!==r&&(t(e),r=e)},To);this.listenerUnsubscribes.set(t,()=>clearInterval(i))}_removeListener(e,t){let n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}};Oo.type=`COOKIE`;var ko=class extends xo{constructor(){super(()=>window.sessionStorage,`SESSION`)}_addListener(e,t){}_removeListener(e,t){}};ko.type=`SESSION`;var Ao=ko;function jo(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}var H=class e{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){let n=this.receivers.find(e=>e.isListeningto(t));if(n)return n;let r=new e(t);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:`ack`,eventId:n,eventType:r});let o=await jo(Array.from(a).map(async e=>e(t.origin,i)));t.ports[0].postMessage({status:`done`,eventId:n,eventType:r,response:o})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener(`message`,this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener(`message`,this.boundEventHandler)}};H.receivers=[];function Mo(e=``,t=10){let n=``;for(let e=0;e<t;e++)n+=Math.floor(Math.random()*10);return e+n}var No=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener(`message`,e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r=typeof MessageChannel<`u`?new MessageChannel:null;if(!r)throw Error(`connection_unavailable`);let i,a;return new Promise((o,s)=>{let c=Mo(``,20);r.port1.start();let l=setTimeout(()=>{s(Error(`unsupported_event`))},n);a={messageChannel:r,onMessage(e){let t=e;if(t.data.eventId===c)switch(t.data.status){case`ack`:clearTimeout(l),i=setTimeout(()=>{s(Error(`timeout`))},3e3);break;case`done`:clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),s(Error(`invalid_response`));break}}},this.handlers.add(a),r.port1.addEventListener(`message`,a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function U(){return window}function Po(e){U().location.href=e}function Fo(){return U().WorkerGlobalScope!==void 0&&typeof U().importScripts==`function`}async function Io(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lo(){return navigator?.serviceWorker?.controller||null}function Ro(){return Fo()?self:null}var zo=`firebaseLocalStorageDb`,Bo=1,Vo=`firebaseLocalStorage`,Ho=`fbase_key`,Uo=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener(`success`,()=>{e(this.request.result)}),this.request.addEventListener(`error`,()=>{t(this.request.error)})})}};function Wo(e,t){return e.transaction([Vo],t?`readwrite`:`readonly`).objectStore(Vo)}function Go(){return new Uo(indexedDB.deleteDatabase(zo)).toPromise()}function Ko(){let e=indexedDB.open(zo,Bo);return new Promise((t,n)=>{e.addEventListener(`error`,()=>{n(e.error)}),e.addEventListener(`upgradeneeded`,()=>{let t=e.result;try{t.createObjectStore(Vo,{keyPath:Ho})}catch(e){n(e)}}),e.addEventListener(`success`,async()=>{let n=e.result;n.objectStoreNames.contains(Vo)?t(n):(n.close(),await Go(),t(await Ko()))})})}async function qo(e,t,n){return new Uo(Wo(e,!0).put({[Ho]:t,value:n})).toPromise()}async function Jo(e,t){let n=await new Uo(Wo(e,!1).get(t)).toPromise();return n===void 0?null:n.value}function Yo(e,t){return new Uo(Wo(e,!0).delete(t)).toPromise()}var Xo=800,Zo=3,Qo=class{constructor(){this.type=`LOCAL`,this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Ko(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{return await e(await this._openDb())}catch(e){if(t++>Zo)throw e;this.dbPromise&&=((await this.dbPromise).close(),null)}}async initializeServiceWorkerMessaging(){return Fo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=H._getInstance(Ro()),this.receiver._subscribe(`keyChanged`,async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe(`ping`,async(e,t)=>[`keyChanged`])}async initializeSender(){if(this.activeServiceWorker=await Io(),!this.activeServiceWorker)return;this.sender=new No(this.activeServiceWorker);let e=await this.sender._send(`ping`,{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes(`keyChanged`)&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lo()!==this.activeServiceWorker))try{await this.sender._send(`keyChanged`,{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await qo(e,bo,`1`),await Yo(e,bo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qo(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>Jo(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new Uo(Wo(e,!1).getAll()).toPromise());if(!e||this.pendingWrites!==0)return[];let t=[],n=new Set;if(e.length!==0)for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xo)}stopPolling(){this.pollTimer&&=(clearInterval(this.pollTimer),null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Qo.type=`LOCAL`;var $o=Qo;function es(e,t){return F(e,`POST`,`/v2/accounts/mfaSignIn:start`,oi(e,t))}function ts(e,t){return F(e,`POST`,`/v2/accounts/mfaSignIn:finalize`,oi(e,t))}function ns(e,t){return F(e,`POST`,`/v2/accounts/mfaSignIn:finalize`,oi(e,t))}var rs=pa(`rcb`),is=new ei(3e4,6e4),as=class{constructor(){this.hostLanguage=``,this.counter=0,this.librarySeparatelyLoaded=!!U().grecaptcha?.render}load(e,t=``){return P(os(t),e,`argument-error`),this.shouldResolveImmediately(t)&&pi(U().grecaptcha)?Promise.resolve(U().grecaptcha):new Promise((n,r)=>{let i=U().setTimeout(()=>{r(Ur(e,`network-request-failed`))},is.get());U()[rs]=()=>{U().clearTimeout(i),delete U()[rs];let a=U().grecaptcha;if(!a||!pi(a)){r(Ur(e,`internal-error`));return}let o=a.render;a.render=(e,t)=>{let n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(a)},la(`${ua()}?${Pt({onload:rs,render:`explicit`,hl:t})}`).catch(()=>{clearTimeout(i),r(Ur(e,`internal-error`))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!U().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}};function os(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}var ss=class{async load(e){return new _a(e)}clearedOneInstance(){}},cs=`recaptcha`,ls={theme:`light`,type:`image`},us=class{constructor(e,t,n={...ls}){this.parameters=n,this.type=cs,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=aa(e),this.isInvisible=this.parameters.size===`invisible`,P(typeof document<`u`,this.auth,`operation-not-supported-in-this-environment`);let r=typeof t==`string`?document.getElementById(t):t;P(r,this.auth,`argument-error`),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ss:new as,this.validateStartingState()}async verify(){this.assertNotDestroyed();let e=await this.render(),t=this.getAssertedRecaptcha();return t.getResponse(e)||new Promise(n=>{let r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){P(!this.parameters.sitekey,this.auth,`argument-error`),P(this.isInvisible||!this.container.hasChildNodes(),this.auth,`argument-error`),P(typeof document<`u`,this.auth,`operation-not-supported-in-this-environment`)}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),typeof e==`function`)e(t);else if(typeof e==`string`){let n=U()[e];typeof n==`function`&&n(t)}}}assertNotDestroyed(){P(!this.destroyed,this.auth,`internal-error`)}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){let t=document.createElement(`div`);e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){P(Xr()&&!Fo(),this.auth,`internal-error`),await ds(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);let e=await gi(this.auth);P(e,this.auth,`internal-error`),this.parameters.sitekey=e}getAssertedRecaptcha(){return P(this.recaptcha,this.auth,`internal-error`),this.recaptcha}};function ds(){let e=null;return new Promise(t=>{if(document.readyState===`complete`){t();return}e=()=>t(),window.addEventListener(`load`,e)}).catch(t=>{throw e&&window.removeEventListener(`load`,e),t})}var fs=class{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){let t=Xa._fromVerification(this.verificationId,e);return this.onConfirmation(t)}};async function ps(e,t,n){if(fr(e.app))return Promise.reject(Gr(e));let r=aa(e);return new fs(await ms(r,t,Vt(n)),e=>z(r,e))}async function ms(e,t,n){if(!e._getRecaptchaConfig())try{await Oa(e)}catch{console.log(`Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.`)}try{let r;if(r=typeof t==`string`?{phoneNumber:t}:t,`session`in r){let t=r.session;if(`phoneNumber`in r)return P(t.type===`enroll`,e,`internal-error`),(await Da(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:`CLIENT_TYPE_WEB`}},`mfaSmsEnrollment`,async(e,t)=>t.phoneEnrollmentInfo.captchaResponse===Ca?(P(n?.type===cs,e,`argument-error`),go(e,await hs(e,t,n))):go(e,t),`PHONE_PROVIDER`).catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo;{P(t.type===`signin`,e,`internal-error`);let i=r.multiFactorHint?.uid||r.multiFactorUid;return P(i,e,`missing-multi-factor-info`),(await Da(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:`CLIENT_TYPE_WEB`}},`mfaSmsSignIn`,async(e,t)=>t.phoneSignInInfo.captchaResponse===Ca?(P(n?.type===cs,e,`argument-error`),es(e,await hs(e,t,n))):es(e,t),`PHONE_PROVIDER`).catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}else return(await Da(e,{phoneNumber:r.phoneNumber,clientType:`CLIENT_TYPE_WEB`},`sendVerificationCode`,async(e,t)=>t.captchaResponse===Ca?(P(n?.type===cs,e,`argument-error`),Ga(e,await hs(e,t,n))):Ga(e,t),`PHONE_PROVIDER`).catch(e=>Promise.reject(e))).sessionInfo}finally{n?._reset()}}async function hs(e,t,n){P(n.type===cs,e,`argument-error`);let r=await n.verify();P(typeof r==`string`,e,`argument-error`);let i={...t};if(`phoneEnrollmentInfo`in i){let e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,a=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:a}}),i}else if(`phoneSignInInfo`in i){let e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var gs=class e{constructor(t){this.providerId=e.PROVIDER_ID,this.auth=aa(t)}verifyPhoneNumber(e,t){return ms(this.auth,e,Vt(t))}static credential(e,t){return Xa._fromVerification(e,t)}static credentialFromResult(t){let n=t;return e.credentialFromTaggedObject(n)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?Xa._fromTokenResponse(t,n):null}};gs.PROVIDER_ID=`phone`,gs.PHONE_SIGN_IN_METHOD=`phone`;function _s(e,t){return t?Ii(t):(P(e._popupRedirectResolver,e,`argument-error`),e._popupRedirectResolver)}var vs=class extends Ia{constructor(e){super(`custom`,`custom`),this.params=e}_getIdTokenResponse(e){return Ha(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ha(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ha(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function ys(e){return mo(e.auth,new vs(e),e.bypassAuthState)}function bs(e){let{auth:t,user:n}=e;return P(n,t,`internal-error`),po(n,new vs(e),e.bypassAuthState)}async function xs(e){let{auth:t,user:n}=e;return P(n,t,`internal-error`),fo(n,new vs(e),e.bypassAuthState)}var Ss=class{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}let s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case`signInViaPopup`:case`signInViaRedirect`:return ys;case`linkViaPopup`:case`linkViaRedirect`:return xs;case`reauthViaPopup`:case`reauthViaRedirect`:return bs;default:Hr(this.auth,`internal-error`)}}resolve(e){Jr(this.pendingPromise,`Pending promise was never set`),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jr(this.pendingPromise,`Pending promise was never set`),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}},Cs=new ei(2e3,1e4),ws=class e extends Ss{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,e.currentPopupAction&&e.currentPopupAction.cancel(),e.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return P(e,this.auth,`internal-error`),e}async onExecution(){Jr(this.filter.length===1,`Popup operations only handle one event`);let e=Mo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ur(this.auth,`web-storage-unsupported`))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ur(this.auth,`cancelled-popup-request`))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,e.currentPopupAction=null}pollUserCancellation(){let e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ur(this.auth,`popup-closed-by-user`))},8e3);return}this.pollId=window.setTimeout(e,Cs.get())};e()}};ws.currentPopupAction=null;var Ts=`pendingRedirect`,Es=new Map,Ds=class extends Ss{constructor(e,t,n=!1){super(e,[`signInViaRedirect`,`linkViaRedirect`,`reauthViaRedirect`,`unknown`],t,void 0,n),this.eventId=null}async execute(){let e=Es.get(this.auth._key());if(!e){try{let t=await Os(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Es.set(this.auth._key(),e)}return this.bypassAuthState||Es.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type===`signInViaRedirect`)return super.onAuthEvent(e);if(e.type===`unknown`){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Os(e,t){let n=js(t),r=As(e);if(!await r._isAvailable())return!1;let i=await r._get(n)===`true`;return await r._remove(n),i}function ks(e,t){Es.set(e._key(),t)}function As(e){return Ii(e._redirectPersistence)}function js(e){return zi(Ts,e.config.apiKey,e.name)}async function Ms(e,t,n=!1){if(fr(e.app))return Promise.reject(Gr(e));let r=aa(e),i=await new Ds(r,_s(r,t),n).execute();return i&&!n&&(delete i.user._redirectEventId,await r._persistUserIfCurrent(i.user),await r._setRedirectUser(null,t)),i}var Ns=600*1e3,Ps=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ls(e)?t:(this.hasHandledPotentialRedirect=!0,t||=(this.queuedRedirectEvent=e,!0),t)}sendToConsumer(e,t){if(e.error&&!Is(e)){let n=e.error.code?.split(`auth/`)[1]||`internal-error`;t.onError(Ur(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ns&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fs(e))}saveEventToCache(e){this.cachedEventUids.add(Fs(e)),this.lastProcessedEventTime=Date.now()}};function Fs(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join(`-`)}function Is({type:e,error:t}){return e===`unknown`&&t?.code===`auth/no-auth-event`}function Ls(e){switch(e.type){case`signInViaRedirect`:case`linkViaRedirect`:case`reauthViaRedirect`:return!0;case`unknown`:return Is(e);default:return!1}}async function Rs(e,t={}){return F(e,`GET`,`/v1/projects`,t)}var zs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bs=/^https?/;async function Vs(e){if(e.config.emulator)return;let{authorizedDomains:t}=await Rs(e);for(let e of t)try{if(Hs(e))return}catch{}Hr(e,`unauthorized-domain`)}function Hs(e){let t=Yr(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith(`chrome-extension://`)){let i=new URL(e);return i.hostname===``&&r===``?n===`chrome-extension:`&&e.replace(`chrome-extension://`,``)===t.replace(`chrome-extension://`,``):n===`chrome-extension:`&&i.hostname===r}if(!Bs.test(n))return!1;if(zs.test(e))return r===e;let i=e.replace(/\./g,`\\.`);return RegExp(`^(.+\\.`+i+`|`+i+`)$`,`i`).test(r)}var Us=new ei(3e4,6e4);function Ws(){let e=U().___jsl;if(e?.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}function Gs(e){return new Promise((t,n)=>{function r(){Ws(),gapi.load(`gapi.iframes`,{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ws(),n(Ur(e,`network-request-failed`))},timeout:Us.get()})}if(U().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(U().gapi?.load)r();else{let t=pa(`iframefcb`);return U()[t]=()=>{gapi.load?r():n(Ur(e,`network-request-failed`))},la(`${fa()}?onload=${t}`).catch(e=>n(e))}}).catch(e=>{throw Ks=null,e})}var Ks=null;function qs(e){return Ks||=Gs(e),Ks}var Js=new ei(5e3,15e3),Ys=`__/auth/iframe`,Xs=`emulator/auth/iframe`,Zs={style:{position:`absolute`,top:`-100px`,width:`1px`,height:`1px`},"aria-hidden":`true`,tabindex:`-1`},Qs=new Map([[`identitytoolkit.googleapis.com`,`p`],[`staging-identitytoolkit.sandbox.googleapis.com`,`s`],[`test-identitytoolkit.sandbox.googleapis.com`,`t`]]);function $s(e){let t=e.config;P(t.authDomain,e,`auth-domain-config-required`);let n=t.emulator?ti(t,Xs):`https://${e.config.authDomain}/${Ys}`,r={apiKey:t.apiKey,appName:e.name,v:hr},i=Qs.get(e.config.apiHost);i&&(r.eid=i);let a=e._getFrameworks();return a.length&&(r.fw=a.join(`,`)),`${n}?${Pt(r).slice(1)}`}async function ec(e){let t=await qs(e),n=U().gapi;return P(n,e,`internal-error`),t.open({where:document.body,url:$s(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zs,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=Ur(e,`network-request-failed`),a=U().setTimeout(()=>{r(i)},Js.get());function o(){U().clearTimeout(a),n(t)}t.ping(o).then(o,()=>{r(i)})}))}var tc={location:`yes`,resizable:`yes`,statusbar:`yes`,toolbar:`no`},nc=500,rc=600,ic=`_blank`,ac=`http://localhost`,oc=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function sc(e,t,n,r=nc,i=rc){let a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),s=``,c={...tc,width:r.toString(),height:i.toString(),top:a,left:o},l=vt().toLowerCase();n&&(s=Wi(l)?ic:n),Hi(l)&&(t||=ac,c.scrollbars=`yes`);let u=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,``);if(Xi(l)&&s!==`_self`)return cc(t||``,s),new oc(null);let d=window.open(t||``,s,u);P(d,e,`popup-blocked`);try{d.focus()}catch{}return new oc(d)}function cc(e,t){let n=document.createElement(`a`);n.href=e,n.target=t;let r=document.createEvent(`MouseEvent`);r.initMouseEvent(`click`,!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}var lc=`__/auth/handler`,uc=`emulator/auth/handler`,dc=`fac`;async function fc(e,t,n,r,i,a){P(e.config.authDomain,e,`auth-domain-config-required`),P(e.config.apiKey,e,`invalid-api-key`);let o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:hr,eventId:i};if(t instanceof to){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||``,jt(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(let[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof no){let e=t.getScopes().filter(e=>e!==``);e.length>0&&(o.scopes=e.join(`,`))}e.tenantId&&(o.tid=e.tenantId);let s=o;for(let e of Object.keys(s))s[e]===void 0&&delete s[e];let c=await e._getAppCheckToken(),l=c?`#${dc}=${encodeURIComponent(c)}`:``;return`${pc(e)}?${Pt(s).slice(1)}${l}`}function pc({config:e}){return e.emulator?ti(e,uc):`https://${e.authDomain}/${lc}`}var mc=`webStorageSupport`,hc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ao,this._completeRedirectFn=Ms,this._overrideRedirectResult=ks}async _openPopup(e,t,n,r){return Jr(this.eventManagers[e._key()]?.manager,`_initialize() not called before _openPopup()`),sc(e,await fc(e,t,n,Yr(),r),Mo())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Po(await fc(e,t,n,Yr(),r)),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Jr(n,`If manager is not set, promise should be`),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await ec(e),n=new Ps(e);return t.register(`authEvent`,t=>(P(t?.authEvent,e,`invalid-auth-event`),{status:n.onEvent(t.authEvent)?`ACK`:`ERROR`}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mc,{type:mc},n=>{let r=n?.[0]?.[mc];r!==void 0&&t(!!r),Hr(e,`internal-error`)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qi()||Ui()||Yi()}},gc=class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case`enroll`:return this._finalizeEnroll(e,t.credential,n);case`signin`:return this._finalizeSignIn(e,t.credential);default:return qr(`unexpected MultiFactorSessionType`)}}},_c=class e extends gc{constructor(e){super(`phone`),this.credential=e}static _fromCredential(t){return new e(t)}_finalizeEnroll(e,t,n){return _o(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ts(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},vc=class{constructor(){}static assertion(e){return _c._fromCredential(e)}};vc.FACTOR_ID=`phone`;var yc=class{static assertionForEnrollment(e,t){return bc._fromSecret(e,t)}static assertionForSignIn(e,t){return bc._fromEnrollmentId(e,t)}static async generateSecret(e){let t=e;P(t.user?.auth!==void 0,`internal-error`);let n=await vo(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return xc._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}};yc.FACTOR_ID=`totp`;var bc=class e extends gc{constructor(e,t,n){super(`totp`),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(t,n){return new e(n,void 0,t)}static _fromEnrollmentId(t,n){return new e(n,t)}async _finalizeEnroll(e,t,n){return P(this.secret!==void 0,e,`argument-error`),yo(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){P(this.enrollmentId!==void 0&&this.otp!==void 0,e,`argument-error`);let n={verificationCode:this.otp};return ns(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}},xc=class e{constructor(e,t,n,r,i,a,o){this.sessionInfo=a,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,n){return new e(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let n=!1;return(Sc(e)||Sc(t))&&(n=!0),n&&(Sc(e)&&(e=this.auth.currentUser?.email||`unknownuser`),Sc(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Sc(e){return e===void 0||e?.length===0}var Cc=`@firebase/auth`,wc=`1.13.3`,Tc=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,`dependent-sdk-initialized-before-auth`)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Ec(e){switch(e){case`Node`:return`node`;case`ReactNative`:return`rn`;case`Worker`:return`webworker`;case`Cordova`:return`cordova`;case`WebExtension`:return`web-extension`;default:return}}function Dc(e){ur(new Wt(`auth`,(t,{options:n})=>{let r=t.getProvider(`app`).getImmediate(),i=t.getProvider(`heartbeat`),a=t.getProvider(`app-check-internal`),{apiKey:o,authDomain:s}=r.options;P(o&&!o.includes(`:`),`invalid-api-key`,{appName:r.name});let c=new ia(r,i,a,{apiKey:o,authDomain:s,clientPlatform:e,apiHost:`identitytoolkit.googleapis.com`,tokenApiHost:`securetoken.googleapis.com`,apiScheme:`https`,sdkClientVersion:$i(e)});return Aa(c,n),c},`PUBLIC`).setInstantiationMode(`EXPLICIT`).setInstanceCreatedCallback((e,t,n)=>{e.getProvider(`auth-internal`).initialize()})),ur(new Wt(`auth-internal`,e=>(e=>new Tc(e))(aa(e.getProvider(`auth`).getImmediate())),`PRIVATE`).setInstantiationMode(`EXPLICIT`)),vr(Cc,wc,Ec(e)),vr(Cc,wc,`esm2020`)}var Oc=gt(`authIdTokenMaxAge`)||300,kc=null,Ac=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Oc)return;let i=n?.token;kc!==i&&(kc=i,await fetch(e,{method:i?`POST`:`DELETE`,headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jc(e=_r()){let t=dr(e,`auth`);if(t.isInitialized())return t.getImmediate();let n=ka(e,{popupRedirectResolver:hc,persistence:[$o,wo,Ao]}),r=gt(`authTokenSyncURL`);if(r&&typeof isSecureContext==`boolean`&&isSecureContext){let e=new URL(r,location.origin);if(location.origin===e.origin){let t=Ac(e.toString());ho(n,t,()=>t(n.currentUser)),B(n,e=>t(e))}}let i=mt(`auth`);return i&&ja(n,`http://${i}`),n}function Mc(){return document.getElementsByTagName(`head`)?.[0]??document}ca({loadJS(e){return new Promise((t,n)=>{let r=document.createElement(`script`);r.setAttribute(`src`,e),r.onload=t,r.onerror=e=>{let t=Ur(`internal-error`);t.customData=e,n(t)},r.type=`text/javascript`,r.charset=`UTF-8`,Mc().appendChild(r)})},gapiScript:`https://apis.google.com/js/api.js`,recaptchaV2Script:`https://www.google.com/recaptcha/api.js`,recaptchaEnterpriseScript:`https://www.google.com/recaptcha/enterprise.js?render=`}),Dc(`Browser`);var Nc=jc(gr({apiKey:`AIzaSyCW3kx5oYXNkjRXSjFz404HPjDby02hYkc`,authDomain:`bhawna-closet.firebaseapp.com`,projectId:`bhawna-closet`,storageBucket:`bhawna-closet.firebasestorage.app`,messagingSenderId:`450046441815`,appId:`1:450046441815:web:bb63f9e71b1dd3077ba612`,measurementId:`G-3R82TF3Z29`}));function Pc({onSwitchToSignup:e,onLoginSuccess:t}){let{login:n,loginOtp:r,loginWithToken:i}=Be(),a=(0,_.useRef)(null),[o,s]=(0,_.useState)(`login`),[c,l]=(0,_.useState)(`password`),[u,d]=(0,_.useState)({phone:``,password:``}),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(``),[y,b]=(0,_.useState)(!1),[x,ee]=(0,_.useState)(``),[S,C]=(0,_.useState)(!1),[te,ne]=(0,_.useState)(``),[re,w]=(0,_.useState)(``),[ie,ae]=(0,_.useState)(!1);(0,_.useEffect)(()=>()=>{if(window.recaptchaVerifier)try{window.recaptchaVerifier.clear()}catch(e){console.error(e)}},[]);let oe=e=>{let{name:t,value:n}=e.target;d(e=>({...e,[t]:n}))},se=()=>{try{if(window.recaptchaVerifier&&window.recaptchaVerifier.clear(),!a.current)throw Error(`reCAPTCHA container element not found`);window.recaptchaVerifier=new us(Nc,a.current,{size:`invisible`,callback:()=>{},"expired-callback":()=>{v(`reCAPTCHA expired. Please try sending OTP again.`)}})}catch(e){console.error(`Error setting up reCAPTCHA verifier:`,e),v(`Failed to initialize security verification. Please reload the page.`)}},ce=e=>{let t=e.trim();if(!t.startsWith(`+`))if(t.length===10)t=`+91${t}`;else throw Error(`Please enter a valid 10-digit phone number or specify country code (e.g. +91XXXXXXXXXX)`);return t},D=async e=>{e.preventDefault(),v(``),C(!0);try{let e=o===`forgot`?te:u.phone;if(!e)throw Error(`Please enter your phone number`);let t=ce(e);se();let n=await ps(Nc,t,window.recaptchaVerifier);window.confirmationResult=n,b(!0)}catch(e){console.error(e),v(e.message||`Failed to send SMS verification code.`)}finally{C(!1)}},ue=async e=>{if(e.preventDefault(),!x||x.length!==6){v(`Please enter a valid 6-digit OTP code`);return}h(!0),v(``);try{let e=await window.confirmationResult.confirm(x),n=await e.user.getIdToken();await r(e.user.phoneNumber,n),t&&t()}catch(e){console.error(e),v(e.message||`OTP verification failed. Invalid code.`)}finally{h(!1)}},O=async e=>{if(e.preventDefault(),!u.phone||!u.password){v(`Please fill in all fields`);return}h(!0),v(``);try{await n(u.phone,u.password),t&&t()}catch(e){v(e.message||`Invalid phone number or password`)}finally{h(!1)}},de=async e=>{if(e.preventDefault(),!x||x.length!==6||!re){v(`Please complete all fields`);return}h(!0),v(``);try{let e=await window.confirmationResult.confirm(x),n=await e.user.getIdToken();i(await j(`/auth/reset-password`,{method:`POST`,body:JSON.stringify({phone:e.user.phoneNumber,newPassword:re,firebaseToken:n})})),t&&t()}catch(e){console.error(e),v(e.message||`Password reset failed. Invalid verification code.`)}finally{h(!1)}},k=()=>{l(e=>e===`password`?`otp`:`password`),b(!1),ee(``),v(``)};return o===`forgot`?(0,M.jsxs)(`div`,{className:`login-card glass-card animate-fade-in`,children:[(0,M.jsx)(`div`,{ref:a}),y?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:`login-header`,children:[(0,M.jsx)(`h2`,{children:`Verify Reset OTP`}),(0,M.jsxs)(`p`,{children:[`We have sent a 6-digit OTP code to `,(0,M.jsx)(`strong`,{children:te}),`. Please enter the code and set your new password.`]})]}),g&&(0,M.jsxs)(`div`,{className:`error-alert`,children:[(0,M.jsx)(Oe,{size:18}),(0,M.jsx)(`span`,{children:g})]}),(0,M.jsxs)(`form`,{onSubmit:de,className:`auth-form`,children:[(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`reset-otp`,children:`6-Digit OTP`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(fe,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`reset-otp`,type:`text`,maxLength:6,value:x,onChange:e=>ee(e.target.value.replace(/\D/g,``).substring(0,6)),placeholder:`e.g. 123456`,required:!0})]})]}),(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`new-password`,children:`New Password`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(fe,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`new-password`,type:ie?`text`:`password`,value:re,onChange:e=>w(e.target.value),placeholder:`Minimum 6 characters`,required:!0}),(0,M.jsx)(`button`,{type:`button`,className:`password-toggle-btn`,onClick:()=>ae(!ie),children:ie?(0,M.jsx)(le,{size:18}):(0,M.jsx)(E,{size:18})})]})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:m,children:[m?`Updating Password...`:`Verify OTP & Reset Password`,` `,(0,M.jsx)(T,{size:18})]})]}),(0,M.jsx)(`div`,{className:`auth-footer`,style:{marginTop:`2rem`},children:(0,M.jsx)(`button`,{className:`back-to-login-btn`,onClick:()=>{s(`login`),v(``),b(!1)},children:`Cancel & Log In`})})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:`login-header`,children:[(0,M.jsx)(`h2`,{children:`Reset Password`}),(0,M.jsx)(`p`,{children:`Enter your registered phone number below, and we will send you a 6-digit OTP code to verify your identity.`})]}),g&&(0,M.jsxs)(`div`,{className:`error-alert`,children:[(0,M.jsx)(Oe,{size:18}),(0,M.jsx)(`span`,{children:g})]}),(0,M.jsxs)(`form`,{onSubmit:D,className:`auth-form`,children:[(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`forgot-phone`,children:`Phone Number`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(_e,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`forgot-phone`,type:`tel`,value:te,onChange:e=>ne(e.target.value),placeholder:`e.g. 9876543210`,required:!0})]})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:S,children:[S?`Sending SMS OTP...`:`Send Verification OTP`,` `,(0,M.jsx)(T,{size:18})]})]}),(0,M.jsx)(`div`,{className:`auth-footer`,style:{marginTop:`2rem`},children:(0,M.jsx)(`button`,{className:`back-to-login-btn`,onClick:()=>{s(`login`),v(``)},children:`Back to Log In`})})]}),(0,M.jsx)(`style`,{children:Fc})]}):(0,M.jsxs)(`div`,{className:`login-card glass-card animate-fade-in`,children:[(0,M.jsx)(`div`,{ref:a}),(0,M.jsxs)(`div`,{className:`login-header`,children:[(0,M.jsx)(`h2`,{children:`Welcome Back`}),(0,M.jsx)(`p`,{children:`Login to your Bhawna Closet account using your phone number.`})]}),g&&(0,M.jsxs)(`div`,{className:`error-alert`,children:[(0,M.jsx)(Oe,{size:18}),(0,M.jsx)(`span`,{children:g})]}),c===`password`?(0,M.jsxs)(`form`,{onSubmit:O,className:`auth-form`,children:[(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`login-phone`,children:`Phone Number`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(_e,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`login-phone`,type:`tel`,name:`phone`,value:u.phone,onChange:oe,placeholder:`10-digit number, e.g. 9876543210`,required:!0})]})]}),(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`login-password`,children:`Password`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(fe,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`login-password`,type:f?`text`:`password`,name:`password`,value:u.password,onChange:oe,placeholder:`••••••••`,required:!0}),(0,M.jsx)(`button`,{type:`button`,className:`password-toggle-btn`,onClick:()=>p(!f),children:f?(0,M.jsx)(le,{size:18}):(0,M.jsx)(E,{size:18})})]}),(0,M.jsx)(`div`,{className:`forgot-password-link-container`,children:(0,M.jsx)(`button`,{type:`button`,className:`forgot-password-link`,onClick:()=>{s(`forgot`),v(``)},children:`Forgot Password?`})})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:m,children:[m?`Logging In...`:`Log In with Password`,` `,(0,M.jsx)(T,{size:18})]}),(0,M.jsx)(`button`,{type:`button`,className:`btn btn-outline`,onClick:k,style:{width:`100%`,borderRadius:`10px`},children:`Login with SMS OTP`})]}):(0,M.jsx)(M.Fragment,{children:y?(0,M.jsxs)(`form`,{onSubmit:ue,className:`auth-form animate-fade-in`,children:[(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`login-otp-code`,children:`6-Digit Verification Code`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(fe,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`login-otp-code`,type:`text`,maxLength:6,value:x,onChange:e=>ee(e.target.value.replace(/\D/g,``).substring(0,6)),placeholder:`e.g. 123456`,required:!0})]})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:m,children:[m?`Verifying OTP...`:`Verify & Log In`,` `,(0,M.jsx)(T,{size:18})]}),(0,M.jsxs)(`div`,{className:`auth-footer`,style:{marginTop:`1rem`},children:[(0,M.jsxs)(`p`,{children:[`Didn't receive the SMS? `,(0,M.jsx)(`button`,{onClick:D,disabled:S,style:{color:`var(--primary-pink-dark)`},children:S?`Resending...`:`Resend SMS`})]}),(0,M.jsx)(`button`,{type:`button`,className:`back-to-login-btn`,style:{marginTop:`0.85rem`},onClick:()=>{b(!1),ee(``)},children:`Change Phone Number`})]})]}):(0,M.jsxs)(`form`,{onSubmit:D,className:`auth-form`,children:[(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`login-phone-otp`,children:`Phone Number`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(_e,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`login-phone-otp`,type:`tel`,name:`phone`,value:u.phone,onChange:oe,placeholder:`10-digit number, e.g. 9876543210`,required:!0})]})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:S,children:[S?`Sending SMS OTP...`:`Send Login OTP`,` `,(0,M.jsx)(T,{size:18})]}),(0,M.jsx)(`button`,{type:`button`,className:`btn btn-outline`,onClick:k,style:{width:`100%`,borderRadius:`10px`},children:`Login with Password`})]})}),(0,M.jsx)(`div`,{className:`auth-footer`,children:(0,M.jsxs)(`p`,{children:[`Don't have an account? `,(0,M.jsx)(`button`,{onClick:e,children:`Sign Up`})]})}),(0,M.jsx)(`style`,{children:Fc})]})}var Fc=`
  .login-card {
    max-width: 450px;
    margin: 4rem auto;
    padding: 3rem;
    background: var(--pure-white);
  }
  .login-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  .login-header h2 {
    font-size: 2.2rem;
    color: var(--dark-charcoal);
    margin-bottom: 0.5rem;
    font-family: var(--font-serif);
  }
  .login-header p {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.5;
  }
  
  .error-alert {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #fff3cd;
    color: #856404;
    padding: 0.85rem 1rem;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid #ffeeba;
    margin-bottom: 1.5rem;
  }
  
  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .form-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .form-field label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--dark-charcoal);
  }
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  .input-icon {
    position: absolute;
    left: 12px;
    color: var(--text-muted);
  }
  .input-wrapper input {
    font-family: var(--font-sans);
    width: 100%;
    padding: 0.85rem 1rem 0.85rem 2.5rem;
    border: 1px solid var(--border-light);
    border-radius: 10px;
    outline: none;
    font-size: 0.9rem;
    transition: all var(--transition-fast);
  }
  .input-wrapper input:focus {
    border-color: var(--primary-pink);
    box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
    background: var(--cream-white);
  }
  
  .password-toggle-btn {
    position: absolute;
    right: 12px;
    color: var(--text-muted);
    padding: 4px;
  }
  .password-toggle-btn:hover {
    color: var(--primary-pink);
  }

  .forgot-password-link-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.15rem;
  }
  .forgot-password-link {
    background: none;
    border: none;
    color: var(--primary-pink-dark);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    font-family: var(--font-sans);
  }
  .forgot-password-link:hover {
    color: var(--primary-pink-hover);
    text-decoration: underline;
  }

  .back-to-login-btn {
    background: none;
    border: none;
    color: var(--primary-pink-dark);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    font-family: var(--font-sans);
  }
  .back-to-login-btn:hover {
    color: var(--primary-pink-hover);
    text-decoration: underline;
  }
  
  .btn-auth-submit {
    width: 100%;
    padding: 0.85rem;
    border-radius: 10px;
    margin-top: 0.5rem;
  }
  
  .auth-footer {
    text-align: center;
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-muted);
  }
  .auth-footer button {
    color: var(--primary-pink-dark);
    font-weight: 600;
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-sans);
  }
  .auth-footer button:hover {
    color: var(--primary-pink-hover);
    text-decoration: underline;
  }
  
  @media (max-width: 576px) {
    .login-card {
      padding: 2rem 1.5rem;
      margin: 2rem auto;
    }
  }
`;function Ic({onSwitchToLogin:e,onSignupSuccess:t}){let{signup:n}=Be(),r=(0,_.useRef)(null),[i,a]=(0,_.useState)({name:``,phone:``,password:``,confirmPassword:``}),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(``),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(!1);(0,_.useEffect)(()=>()=>{if(window.recaptchaVerifier)try{window.recaptchaVerifier.clear()}catch(e){console.error(e)}},[]);let y=e=>{let{name:t,value:n}=e.target;a(e=>({...e,[t]:n}))},b=()=>{try{if(window.recaptchaVerifier&&window.recaptchaVerifier.clear(),!r.current)throw Error(`reCAPTCHA container element not found`);window.recaptchaVerifier=new us(Nc,r.current,{size:`invisible`,callback:()=>{},"expired-callback":()=>{d(`reCAPTCHA expired. Please try sending OTP again.`)}})}catch(e){console.error(`Error setting up reCAPTCHA verifier:`,e),d(`Failed to initialize security verification. Please reload the page.`)}},x=async e=>{e.preventDefault();let{name:t,phone:n,password:r,confirmPassword:a}=i;if(!t||!n||!r||!a){d(`Please fill in all fields`);return}if(r!==a){d(`Passwords do not match`);return}if(r.length<6){d(`Password must be at least 6 characters long`);return}let o=n.trim();if(!o.startsWith(`+`))if(o.length===10)o=`+91${o}`;else{d(`Please enter a valid 10-digit phone number or specify country code (e.g., +91XXXXXXXXXX)`);return}v(!0),d(``);try{b();let e=await ps(Nc,o,window.recaptchaVerifier);window.confirmationResult=e,p(!0)}catch(e){console.error(`Firebase SMS send error:`,e),e.code===`auth/invalid-phone-number`?d(`The phone number entered is invalid.`):e.code===`auth/too-many-requests`?d(`Too many requests. SMS delivery has been temporarily blocked for security reasons.`):d(e.message||`Failed to send SMS OTP. Please try again.`)}finally{v(!1)}};return(0,M.jsxs)(`div`,{className:`login-card glass-card animate-fade-in`,style:{maxWidth:`480px`},children:[(0,M.jsx)(`div`,{ref:r}),f?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:`login-header animate-fade-in`,children:[(0,M.jsx)(`h2`,{children:`Enter OTP Code`}),(0,M.jsxs)(`p`,{children:[`We've sent a 6-digit verification code to `,(0,M.jsx)(`strong`,{children:i.phone}),`. Enter it below to complete registration.`]})]}),u&&(0,M.jsxs)(`div`,{className:`error-alert animate-fade-in`,children:[(0,M.jsx)(Oe,{size:18}),(0,M.jsx)(`span`,{children:u})]}),(0,M.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),!m||m.length!==6){d(`Please enter a valid 6-digit OTP code`);return}l(!0),d(``);try{let e=window.confirmationResult;if(!e)throw Error(`No active verification session. Please request OTP again.`);let r=await e.confirm(m),a=await r.user.getIdToken();await n(i.name,r.user.phoneNumber,i.password,a),t&&t()}catch(e){console.error(`Verify OTP signup error:`,e),e.code===`auth/invalid-verification-code`?d(`Incorrect verification code. Please check and try again.`):d(e.message||`OTP verification failed. Please request a new code.`)}finally{l(!1)}},className:`auth-form animate-fade-in`,children:[(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`signup-otp`,children:`6-Digit Verification Code (OTP)`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(fe,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`signup-otp`,type:`text`,name:`otp`,value:m,onChange:e=>h(e.target.value.replace(/\D/g,``).substring(0,6)),placeholder:`e.g. 123456`,maxLength:6,required:!0})]})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:c,children:[c?`Verifying OTP...`:`Verify & Create Account`,` `,(0,M.jsx)(T,{size:18})]})]}),(0,M.jsxs)(`div`,{className:`auth-footer animate-fade-in`,children:[(0,M.jsxs)(`p`,{children:[`Didn't receive the SMS? `,(0,M.jsx)(`button`,{onClick:x,disabled:g,style:{color:`var(--primary-pink-dark)`},children:g?`Resending...`:`Resend SMS`})]}),(0,M.jsx)(`p`,{style:{marginTop:`0.85rem`},children:(0,M.jsx)(`button`,{onClick:()=>{p(!1),d(``)},style:{color:`var(--text-muted)`},children:`Edit Phone Number`})})]})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:`login-header`,children:[(0,M.jsx)(`h2`,{children:`Create Account`}),(0,M.jsx)(`p`,{children:`Register to start shopping elegant dresses and outfits.`})]}),u&&(0,M.jsxs)(`div`,{className:`error-alert`,children:[(0,M.jsx)(Oe,{size:18}),(0,M.jsx)(`span`,{children:u})]}),(0,M.jsxs)(`form`,{onSubmit:x,className:`auth-form`,children:[(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`signup-name`,children:`Full Name`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(Ae,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`signup-name`,type:`text`,name:`name`,value:i.name,onChange:y,placeholder:`Your Name`,required:!0})]})]}),(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`signup-phone`,children:`Phone Number`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(_e,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`signup-phone`,type:`tel`,name:`phone`,value:i.phone,onChange:y,placeholder:`10-digit number, e.g. 9876543210`,required:!0})]})]}),(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`signup-password`,children:`Password`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(fe,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`signup-password`,type:o?`text`:`password`,name:`password`,value:i.password,onChange:y,placeholder:`Minimum 6 characters`,required:!0}),(0,M.jsx)(`button`,{type:`button`,className:`password-toggle-btn`,onClick:()=>s(!o),children:o?(0,M.jsx)(le,{size:18}):(0,M.jsx)(E,{size:18})})]})]}),(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`signup-confirm-password`,children:`Confirm Password`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(fe,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`signup-confirm-password`,type:o?`text`:`password`,name:`confirmPassword`,value:i.confirmPassword,onChange:y,placeholder:`••••••••`,required:!0})]})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:g,children:[g?`Sending verification SMS...`:`Sign Up`,` `,(0,M.jsx)(T,{size:18})]})]}),(0,M.jsx)(`div`,{className:`auth-footer`,children:(0,M.jsxs)(`p`,{children:[`Already have an account? `,(0,M.jsx)(`button`,{onClick:e,children:`Login`})]})})]}),(0,M.jsx)(`style`,{children:`
        .login-card {
          max-width: 450px;
          margin: 4rem auto;
          padding: 3rem;
          background: var(--pure-white);
        }
        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .login-header h2 {
          font-size: 2.2rem;
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
          font-family: var(--font-serif);
        }
        .login-header p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
        }
        
        .error-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #fff3cd;
          color: #856404;
          padding: 0.85rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid #ffeeba;
          margin-bottom: 1.5rem;
        }
        
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-field label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 12px;
          color: var(--text-muted);
        }
        .input-wrapper input {
          font-family: var(--font-sans);
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.5rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }
        .input-wrapper input:focus {
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
          background: var(--cream-white);
        }
        
        .password-toggle-btn {
          position: absolute;
          right: 12px;
          color: var(--text-muted);
          padding: 4px;
        }
        .password-toggle-btn:hover {
          color: var(--primary-pink);
        }
        
        .btn-auth-submit {
          width: 100%;
          padding: 0.85rem;
          border-radius: 10px;
          margin-top: 0.5rem;
        }
        
        .auth-footer {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .auth-footer button {
          color: var(--primary-pink-dark);
          font-weight: 600;
        }
        .auth-footer button:hover {
          color: var(--primary-pink-hover);
          text-decoration: underline;
        }
        
        @media (max-width: 576px) {
          .login-card {
            padding: 2rem 1.5rem;
            margin: 2rem auto;
          }
        }
      `})]})}function Lc({productSlug:e,onBack:t,onSelectProduct:n}){let[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!0),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(0),[h,g]=(0,_.useState)(``),[v,y]=(0,_.useState)(``),[b,x]=(0,_.useState)(!1),[ee,S]=(0,_.useState)(!1),[C,te]=(0,_.useState)(``),[ne,re]=(0,_.useState)([]),{addToCart:w}=We(),{toggleWishlist:T,isInWishlist:oe}=Je(),{user:ce}=Be();if((0,_.useEffect)(()=>{(async()=>{o(!0),c(``);try{let t=await et.getProductBySlug(e);i(t),t.images&&t.images.length>0?u(t.images[0]):u(t.image);let n=t.sizes.find(e=>e.stock>0);n?g(n.size):t.sizes.length>0&&g(t.sizes[0].size),t.colors&&t.colors.length>0&&y(t.colors[0]),re((await et.getProducts({category:t.category,limit:5})).products.filter(e=>e._id!==t._id).slice(0,4))}catch(e){console.error(`Error fetching product detail:`,e),c(`Failed to load product details.`)}finally{o(!1)}})()},[e]),a)return(0,M.jsx)(`div`,{className:`container detail-loading-container`,children:(0,M.jsx)(`div`,{className:`pink-loader`})});if(s||!r)return(0,M.jsxs)(`div`,{className:`container detail-error-container glass-card`,children:[(0,M.jsx)(se,{size:40,className:`error-icon`}),(0,M.jsx)(`h3`,{children:`Error Loading Product`}),(0,M.jsx)(`p`,{children:s||`We could not find the outfit you were looking for.`}),(0,M.jsxs)(`button`,{className:`btn btn-primary`,onClick:t,children:[(0,M.jsx)(ie,{size:16}),` Back to Collection`]})]});let le=oe(r._id),E=new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(r.price),D=r.discountPrice?new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(r.discountPrice):null,O=r.sizes.find(e=>e.size===h),de=O?O.stock:0,fe=async()=>{if(!ce){window.location.hash=`#login`;return}if(!h){te(`Please select a size`);return}x(!0),te(``),S(!1);try{await w(r,1,h,v),S(!0),setTimeout(()=>S(!1),3e3)}catch(e){te(e.message||`Failed to add to cart`)}finally{x(!1)}},k=r.images&&r.images.length>0?r.images:[r.image];return(0,M.jsxs)(M.Fragment,{children:[d&&(0,M.jsxs)(`div`,{className:`image-lightbox-overlay`,onClick:()=>f(!1),children:[(0,M.jsx)(`button`,{className:`lightbox-close-btn`,onClick:()=>f(!1),children:`×`}),k.length>1&&(0,M.jsx)(`button`,{className:`lightbox-nav-btn prev-btn`,onClick:e=>{e.stopPropagation(),m(e=>e===0?k.length-1:e-1)},children:`❮`}),(0,M.jsxs)(`div`,{className:`lightbox-content`,onClick:e=>e.stopPropagation(),children:[(0,M.jsx)(`img`,{src:k[p],alt:`${r.name} full view`,className:`lightbox-image`}),(0,M.jsxs)(`div`,{className:`lightbox-counter`,children:[p+1,` / `,k.length]})]}),k.length>1&&(0,M.jsx)(`button`,{className:`lightbox-nav-btn next-btn`,onClick:e=>{e.stopPropagation(),m(e=>e===k.length-1?0:e+1)},children:`❯`})]}),(0,M.jsxs)(`main`,{className:`product-detail-view section animate-fade-in`,children:[(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`button`,{className:`back-link-btn`,onClick:t,children:[(0,M.jsx)(ie,{size:18}),` Back to Collection`]}),(0,M.jsxs)(`div`,{className:`detail-grid`,children:[(0,M.jsxs)(`div`,{className:`gallery-section`,children:[(0,M.jsxs)(`div`,{className:`main-image-box glass-card`,style:{cursor:`zoom-in`},onClick:()=>{let e=k.indexOf(l);m(e>=0?e:0),f(!0)},children:[(0,M.jsx)(`img`,{src:l,alt:r.name,className:`main-image`}),r.isNewArrival&&(0,M.jsx)(`span`,{className:`detail-badge badge badge-pink position-badge`,children:`New Arrival`})]}),k.length>1&&(0,M.jsx)(`div`,{className:`thumbnails-grid`,children:k.map((e,t)=>(0,M.jsx)(`div`,{className:`thumbnail-card glass-card ${l===e?`active-thumbnail`:``}`,onClick:()=>u(e),children:(0,M.jsx)(`img`,{src:e,alt:`${r.name} gallery ${t+1}`,className:`thumbnail-img`})},t))})]}),(0,M.jsxs)(`div`,{className:`info-section glass-card`,children:[(0,M.jsx)(`span`,{className:`info-category`,children:r.category}),(0,M.jsx)(`h1`,{className:`info-title`,children:r.name}),r.brand&&(0,M.jsxs)(`span`,{className:`info-brand`,children:[`Brand: `,r.brand]}),(0,M.jsx)(`div`,{className:`info-price-row`,children:D?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`span`,{className:`discount-price`,children:D}),(0,M.jsx)(`span`,{className:`original-price strike-through`,children:E}),(0,M.jsxs)(`span`,{className:`save-badge`,children:[`Save `,new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(r.price-r.discountPrice)]})]}):(0,M.jsx)(`span`,{className:`price-tag`,children:E})}),(0,M.jsx)(`p`,{className:`info-desc`,children:r.description}),(0,M.jsxs)(`div`,{className:`options-section`,children:[(0,M.jsx)(`h4`,{children:`Select Size`}),(0,M.jsx)(`div`,{className:`size-badges-list`,children:[`M`,`L`,`XL`,`XXL`].map(e=>{let t=r.sizes.find(t=>t.size===e),n=t&&t.stock>0;return(0,M.jsx)(`button`,{onClick:()=>n&&g(e),className:`size-btn ${h===e?`active-size`:``} ${n?``:`disabled-size`}`,disabled:!n,children:e},e)})})]}),r.colors&&r.colors.length>0&&(0,M.jsxs)(`div`,{className:`options-section`,children:[(0,M.jsx)(`h4`,{children:`Select Color`}),(0,M.jsx)(`div`,{className:`color-badges-list`,children:r.colors.map(e=>(0,M.jsx)(`button`,{onClick:()=>y(e),className:`color-btn ${v===e?`active-color`:``}`,children:e},e))})]}),(0,M.jsx)(`div`,{className:`stock-status-row`,children:de<=0?(0,M.jsxs)(`div`,{className:`stock-alert out-of-stock`,children:[(0,M.jsx)(se,{size:16}),(0,M.jsx)(`span`,{children:`Out of Stock in selected size`})]}):de<=2?(0,M.jsxs)(`div`,{className:`stock-alert low-stock`,children:[(0,M.jsx)(se,{size:16}),(0,M.jsxs)(`span`,{children:[`Hurry! Only `,de,` items left in selected size`]})]}):(0,M.jsxs)(`div`,{className:`stock-alert in-stock`,children:[(0,M.jsx)(ae,{size:16}),(0,M.jsx)(`span`,{children:`In Stock - ready to ship`})]})}),(0,M.jsxs)(`div`,{className:`purchase-actions-row`,children:[(0,M.jsx)(`button`,{className:`btn btn-primary btn-add-to-cart`,onClick:fe,disabled:de<=0||b,children:b?`Adding...`:ee?(0,M.jsxs)(M.Fragment,{children:[`Added to Bag! `,(0,M.jsx)(ae,{size:18})]}):(0,M.jsxs)(M.Fragment,{children:[`Add to Cart `,(0,M.jsx)(Ce,{size:18})]})}),(0,M.jsx)(`button`,{className:`btn-wishlist-toggle ${le?`wishlisted`:``}`,onClick:()=>T(r),title:le?`Remove from Wishlist`:`Add to Wishlist`,children:(0,M.jsx)(ue,{size:22,fill:le?`var(--primary-pink)`:`none`})})]}),C&&(0,M.jsx)(`p`,{className:`cart-error-message`,children:C})]})]}),ne.length>0&&(0,M.jsxs)(`section`,{className:`related-section`,children:[(0,M.jsxs)(`div`,{className:`section-header`,children:[(0,M.jsx)(`h2`,{children:`You May Also Like`}),(0,M.jsx)(`p`,{children:`Explore matching cordsets or dresses from the same collection.`})]}),(0,M.jsx)(`div`,{className:`products-grid`,children:ne.map(e=>(0,M.jsx)(Ze,{product:e,onSelectProduct:n},e._id))})]})]}),(0,M.jsx)(`style`,{children:`
        .detail-loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8rem 0;
        }
        .detail-error-container {
          text-align: center;
          padding: 4rem 2rem;
          max-width: 500px;
          margin: 4rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .detail-error-container .error-icon {
          color: var(--primary-pink-dark);
        }
        
        .back-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }
        .back-link-btn:hover {
          color: var(--primary-pink);
        }
        
        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        
        /* Gallery */
        .gallery-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .main-image-box {
          position: relative;
          height: 520px;
          overflow: hidden;
          background: var(--light-pink);
        }
        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .position-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          z-index: 5;
        }
        .thumbnails-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .thumbnail-card {
          height: 100px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          background: var(--light-pink);
          transition: all var(--transition-fast);
        }
        .thumbnail-card:hover, .thumbnail-card.active-thumbnail {
          border-color: var(--primary-pink);
          transform: translateY(-2px);
        }
        .thumbnail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Info side */
        .info-section {
          padding: 3rem;
          background: var(--pure-white);
          display: flex;
          flex-direction: column;
        }
        .info-category {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--primary-pink);
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .info-title {
          font-size: 2.2rem;
          color: var(--dark-charcoal);
          margin-bottom: 0.25rem;
          line-height: 1.2;
        }
        .info-sku {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .info-brand {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          font-weight: 500;
        }
        
        .info-price-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .price-tag {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
        }
        .discount-price {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
        }
        .original-price {
          font-size: 1.25rem;
          color: var(--text-muted);
        }
        .strike-through {
          text-decoration: line-through;
        }
        .save-badge {
          background: #d4edda;
          color: #155724;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.75rem;
          border-radius: 4px;
        }
        
        .info-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        
        .options-section {
          margin-bottom: 1.5rem;
        }
        .options-section h4 {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }
        .size-badges-list, .color-badges-list {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }
        
        .size-btn {
          border: 1px solid var(--border-light);
          min-width: 44px;
          height: 44px;
          font-size: 0.85rem;
          font-weight: 700;
          border-radius: 8px;
          background: var(--cream-white);
          color: var(--dark-charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.5rem;
        }
        .size-btn:hover:not(.disabled-size) {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
          background: var(--light-pink);
        }
        .size-btn.active-size {
          background: var(--primary-pink);
          color: var(--pure-white);
          border-color: var(--primary-pink);
        }
        .size-btn.disabled-size {
          opacity: 0.45;
          cursor: not-allowed;
          background: #e9ecef;
          text-decoration: line-through;
          color: #868e96;
        }
        
        .color-btn {
          border: 1px solid var(--border-light);
          padding: 0.4rem 1rem;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 20px;
          background: var(--cream-white);
          color: var(--dark-charcoal);
        }
        .color-btn:hover {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
        }
        .color-btn.active-color {
          border-color: var(--primary-pink);
          background: var(--light-pink);
          color: var(--primary-pink-dark);
          font-weight: 700;
        }
        
        .stock-status-row {
          margin-bottom: 2rem;
        }
        .stock-alert {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }
        .stock-alert.in-stock {
          background: #e2f0d9;
          color: #385723;
        }
        .stock-alert.low-stock {
          background: #fff3cd;
          color: #856404;
        }
        .stock-alert.out-of-stock {
          background: #f8d7da;
          color: #721c24;
        }
        
        .purchase-actions-row {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .btn-add-to-cart {
          flex-grow: 1;
          padding: 0.95rem;
          border-radius: 12px;
          font-size: 1rem;
        }
        .btn-add-to-cart:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          box-shadow: none;
        }
        .btn-wishlist-toggle {
          border: 1px solid var(--border-light);
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          background: var(--cream-white);
          transition: all var(--transition-fast);
        }
        .btn-wishlist-toggle:hover {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
          background: var(--light-pink);
          transform: scale(1.04);
        }
        .btn-wishlist-toggle.wishlisted {
          border-color: var(--primary-pink-dark);
          background: var(--light-pink);
          color: var(--primary-pink);
        }
        
        .cart-error-message {
          color: red;
          font-size: 0.85rem;
          font-weight: 500;
          margin-top: 0.75rem;
        }
        
        .related-section {
          margin-top: 6rem;
        }
        
        @media (max-width: 992px) {
          .detail-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .main-image-box {
            height: 400px;
          }
          .info-section {
            padding: 2rem;
          }
        }
        @media (max-width: 576px) {
          .product-detail-view {
            padding-top: 1rem !important;
            padding-bottom: 1.5rem !important;
          }
          .back-link-btn {
            margin-bottom: 1rem !important;
            font-size: 0.85rem !important;
          }
          .detail-grid {
            gap: 1.25rem !important;
          }
          .main-image-box {
            height: 320px !important;
          }
          .thumbnail-card {
            height: 70px !important;
          }
          .info-section {
            padding: 1.25rem !important;
          }
          .info-category {
            font-size: 0.75rem !important;
          }
          .info-title {
            font-size: 1.6rem !important;
            margin-bottom: 0.25rem !important;
          }
          .info-price-row {
            margin-bottom: 1rem !important;
          }
          .price-tag, .discount-price {
            font-size: 1.6rem !important;
          }
          .info-desc {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
            margin-bottom: 1rem !important;
          }
          .options-section {
            margin-bottom: 1rem !important;
          }
          .options-section h4 {
            font-size: 0.85rem !important;
            margin-bottom: 0.35rem !important;
          }
          .size-btn {
            min-width: 38px !important;
            height: 38px !important;
            font-size: 0.8rem !important;
          }
          .color-btn {
            padding: 0.35rem 0.85rem !important;
            font-size: 0.75rem !important;
          }
          .stock-status-row {
            margin-bottom: 1rem !important;
          }
          .stock-alert {
            font-size: 0.75rem !important;
            padding: 0.4rem 0.75rem !important;
          }
          .purchase-actions-row {
            gap: 0.75rem !important;
          }
          .btn-add-to-cart {
            padding: 0.75rem !important;
            font-size: 0.9rem !important;
            border-radius: 8px !important;
          }
          .btn-wishlist-toggle {
            width: 44px !important;
            height: 44px !important;
            border-radius: 8px !important;
          }
        }

        /* Fullscreen Lightbox Photo Gallery */
        .image-lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--pure-white);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease-out;
        }
        .lightbox-close-btn {
          position: absolute;
          top: 25px;
          right: 30px;
          background: transparent;
          color: var(--dark-charcoal);
          border: none;
          font-size: 3.5rem;
          line-height: 1;
          cursor: pointer;
          z-index: 100000;
          transition: color 0.2s;
        }
        .lightbox-close-btn:hover {
          color: var(--primary-pink);
        }
        .lightbox-nav-btn {
          position: absolute;
          background: rgba(0, 0, 0, 0.05);
          color: var(--dark-charcoal);
          border: none;
          width: 60px;
          height: 60px;
          font-size: 1.75rem;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100000;
          transition: all 0.2s;
        }
        .lightbox-nav-btn:hover {
          background: var(--primary-pink);
          color: #fff;
          transform: scale(1.08);
        }
        .prev-btn {
          left: 40px;
        }
        .next-btn {
          right: 40px;
        }
        .lightbox-content {
          position: relative;
          max-width: 80%;
          max-height: 80%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        }
        .lightbox-counter {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-top: 1.25rem;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .lightbox-nav-btn {
            width: 44px;
            height: 44px;
            font-size: 1.25rem;
          }
          .prev-btn {
            left: 20px;
          }
          .next-btn {
            right: 20px;
          }
          .lightbox-content {
            max-width: 90%;
          }
          .lightbox-image {
            max-height: 65vh;
          }
        }
      `})]})]})}var W={createOrder:async e=>await j(`/orders`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)},!1),getUserOrders:async()=>await j(`/orders`,{method:`GET`},!1)};function Rc({onContinueShopping:e,onSelectProductBySlug:t}){let{user:n}=Be(),{cartItems:r,updateQuantity:i,removeFromCart:a,getCartTotal:o,clearCart:s}=We(),[c,l]=(0,_.useState)(`cart`),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)({name:n?n.name:``,phone:``,street:``,city:``,state:``,pincode:``,paymentMethod:`COD`}),y=o(),b=e=>{let{name:t,value:n}=e.target;if(t===`phone`){let e=n.replace(/\D/g,``);e.startsWith(`0`)&&(e=e.substring(1)),e.startsWith(`91`)&&e.length>10&&(e=e.substring(2)),e=e.slice(0,10),v(n=>({...n,[t]:e}))}else v(e=>({...e,[t]:n}))},x=async(e,t)=>{let n=e.productId._id||e.productId;try{await i(n,e.size,t)}catch(e){alert(e.message||`Failed to update quantity`)}},ee=async e=>{await a(e.productId._id||e.productId,e.size)},S=()=>{if(!n){window.location.hash=`#login`;return}p(``),l(`checkout`)},C=()=>new Promise(e=>{if(window.Razorpay){e(!0);return}let t=document.createElement(`script`);t.src=`https://checkout.razorpay.com/v1/checkout.js`,t.onload=()=>e(!0),t.onerror=()=>e(!1),document.body.appendChild(t)});return(0,M.jsxs)(`main`,{className:`cart-view section animate-fade-in`,children:[(0,M.jsxs)(`div`,{className:`container`,children:[!n&&(0,M.jsxs)(`div`,{className:`empty-cart-card glass-card`,children:[(0,M.jsx)(Ce,{size:64,className:`empty-icon`}),(0,M.jsx)(`h2`,{children:`Login Required`}),(0,M.jsx)(`p`,{children:`Please log in to your account to manage your shopping cart and place orders.`}),(0,M.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>window.location.hash=`#login`,children:[`Log In Now `,(0,M.jsx)(T,{size:18})]})]}),n&&c===`success`&&m&&(0,M.jsxs)(`div`,{className:`checkout-success-card glass-card`,children:[(0,M.jsx)(`div`,{className:`success-icon-circle`,children:(0,M.jsx)(ae,{size:44})}),(0,M.jsx)(`h2`,{children:`Order Placed Successfully!`}),(0,M.jsx)(`p`,{className:`success-sub`,children:`Thank you for shopping with Bhawna Closet. Your order is pending verification.`}),(0,M.jsxs)(`div`,{className:`order-details-box`,children:[(0,M.jsxs)(`div`,{className:`detail-row`,children:[(0,M.jsx)(`span`,{children:`Order ID:`}),(0,M.jsx)(`strong`,{style:{wordBreak:`break-all`},children:m._id})]}),(0,M.jsxs)(`div`,{className:`detail-row`,children:[(0,M.jsx)(`span`,{children:`Total Amount:`}),(0,M.jsx)(`strong`,{className:`pink-text`,children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(m.totalAmount)})]}),(0,M.jsxs)(`div`,{className:`detail-row`,children:[(0,M.jsx)(`span`,{children:`Payment Method:`}),(0,M.jsxs)(`strong`,{children:[m.paymentMethod,` (Pending Verification)`]})]}),(0,M.jsxs)(`div`,{className:`detail-row`,children:[(0,M.jsx)(`span`,{children:`Shipping Address:`}),(0,M.jsx)(`span`,{className:`address-text`,children:m.shippingAddress})]}),(0,M.jsxs)(`div`,{className:`detail-row`,children:[(0,M.jsx)(`span`,{children:`Order Status:`}),(0,M.jsx)(`span`,{className:`status-badge-pending`,children:`Pending Approval`})]})]}),(0,M.jsx)(`p`,{className:`status-note`,children:`Our admin will review your order. You can check the approval status in your Account History.`}),(0,M.jsxs)(`button`,{className:`btn btn-primary`,onClick:e,children:[`Continue Shopping `,(0,M.jsx)(T,{size:18})]})]}),n&&c!==`success`&&r.length===0&&(0,M.jsxs)(`div`,{className:`empty-cart-card glass-card`,children:[(0,M.jsx)(Ce,{size:52,className:`empty-icon`}),(0,M.jsx)(`h2`,{children:`Your Shopping Cart is Empty`}),(0,M.jsx)(`p`,{children:`You haven't added any gorgeous coordinates or elegant Sakura dresses to your bag yet.`}),(0,M.jsxs)(`button`,{className:`btn btn-primary`,onClick:e,children:[`Shop Collections `,(0,M.jsx)(T,{size:18})]})]}),n&&c===`cart`&&r.length>0&&(0,M.jsxs)(`div`,{className:`cart-content-wrapper`,children:[(0,M.jsxs)(`div`,{className:`cart-banner glass-card`,children:[(0,M.jsx)(`h1`,{children:`Your Shopping Cart`}),(0,M.jsx)(`p`,{children:`Review items in your shopping bag before submitting details.`})]}),(0,M.jsxs)(`div`,{className:`cart-grid`,children:[(0,M.jsx)(`div`,{className:`cart-items-panel`,children:r.map((e,n)=>{let r=e.productId;if(!r)return null;let i=r.discountPrice||r.price,a=new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(i),o=new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(i*e.quantity),s=r.sizes.find(t=>t.size===e.size),c=s?s.stock:0;return(0,M.jsxs)(`div`,{className:`cart-item-card glass-card`,children:[(0,M.jsx)(`div`,{className:`item-image-wrapper`,onClick:()=>t(r.slug),children:(0,M.jsx)(`img`,{src:r.image,alt:r.name,className:`item-image`})}),(0,M.jsxs)(`div`,{className:`item-details`,children:[(0,M.jsx)(`h3`,{className:`item-name`,onClick:()=>t(r.slug),children:r.name}),(0,M.jsxs)(`div`,{className:`item-meta`,children:[(0,M.jsxs)(`span`,{children:[`Size: `,(0,M.jsx)(`strong`,{children:e.size})]}),e.color&&(0,M.jsxs)(`span`,{children:[`Color: `,(0,M.jsx)(`strong`,{children:e.color})]}),(0,M.jsxs)(`span`,{children:[`SKU: `,r.sku]})]}),(0,M.jsxs)(`div`,{className:`item-price-info`,children:[(0,M.jsx)(`span`,{className:`single-price`,children:a}),(0,M.jsxs)(`span`,{className:`price-multiplier`,children:[`x `,e.quantity]})]})]}),(0,M.jsxs)(`div`,{className:`item-qty-controls`,children:[(0,M.jsx)(`button`,{className:`qty-btn`,onClick:()=>x(e,e.quantity-1),disabled:e.quantity<=1,children:(0,M.jsx)(he,{size:14})}),(0,M.jsx)(`span`,{className:`qty-value`,children:e.quantity}),(0,M.jsx)(`button`,{className:`qty-btn`,onClick:()=>x(e,e.quantity+1),disabled:e.quantity>=c,children:(0,M.jsx)(ve,{size:14})})]}),(0,M.jsxs)(`div`,{className:`item-total-col`,children:[(0,M.jsx)(`span`,{className:`subtotal-value`,children:o}),(0,M.jsx)(`button`,{className:`remove-item-btn`,onClick:()=>ee(e),title:`Remove item`,children:(0,M.jsx)(De,{size:16})})]})]},`${r._id}-${e.size}-${n}`)})}),(0,M.jsxs)(`div`,{className:`cart-summary-panel glass-card`,children:[(0,M.jsx)(`h3`,{children:`Order Summary`}),(0,M.jsxs)(`div`,{className:`summary-rows`,children:[(0,M.jsxs)(`div`,{className:`summary-row`,children:[(0,M.jsx)(`span`,{children:`Subtotal`}),(0,M.jsx)(`span`,{children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(y)})]}),(0,M.jsxs)(`div`,{className:`summary-row`,children:[(0,M.jsx)(`span`,{children:`Shipping`}),(0,M.jsx)(`span`,{className:`shipping-value`,children:`Free Shipping`})]}),(0,M.jsxs)(`div`,{className:`summary-row divider`,children:[(0,M.jsx)(`span`,{children:`Estimated Total`}),(0,M.jsx)(`span`,{className:`total-value`,children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(y)})]})]}),(0,M.jsxs)(`div`,{className:`checkout-note`,children:[(0,M.jsx)(se,{size:16,className:`note-icon`}),(0,M.jsx)(`span`,{children:`Shipping is free! Click checkout to enter shipping address details.`})]}),(0,M.jsxs)(`button`,{className:`btn btn-primary btn-checkout`,onClick:S,children:[`Proceed to Checkout `,(0,M.jsx)(T,{size:18})]}),(0,M.jsx)(`button`,{className:`btn-continue-shopping-text`,onClick:e,children:`Or Continue Shopping`})]})]})]}),n&&c===`checkout`&&r.length>0&&(0,M.jsxs)(`div`,{className:`checkout-content-wrapper`,children:[(0,M.jsxs)(`button`,{className:`back-link-btn`,onClick:()=>l(`cart`),style:{marginBottom:`2rem`},children:[(0,M.jsx)(ie,{size:18}),` Back to Bag`]}),(0,M.jsxs)(`div`,{className:`cart-banner glass-card`,style:{marginBottom:`3rem`},children:[(0,M.jsx)(`h1`,{children:`Delivery & Payment Details`}),(0,M.jsx)(`p`,{children:`Please enter your shipping address and select a payment method.`})]}),f&&(0,M.jsxs)(`div`,{className:`order-error-alert`,children:[(0,M.jsx)(se,{size:18}),(0,M.jsx)(`span`,{children:f})]}),(0,M.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),!g.name||!g.phone||!g.street||!g.city||!g.state||!g.pincode){p(`Please fill in all shipping details.`);return}if(g.phone.length!==10){p(`Please enter a valid 10-digit phone number.`);return}d(!0),p(``);let t=`${g.name}, Phone: ${g.phone}, Address: ${g.street}, ${g.city}, ${g.state} - ${g.pincode}`,i={items:r.map(e=>({productId:e.productId._id,quantity:e.quantity,price:e.productId.discountPrice||e.productId.price,size:e.size,color:e.color||``,name:e.productId.name})),totalAmount:y,shippingAddress:t,paymentMethod:g.paymentMethod};try{if(g.paymentMethod===`COD`)h((await W.createOrder(i)).order),s(),l(`success`);else{if(!await C())throw Error(`Failed to load Razorpay SDK. Please check your internet connection.`);let e=await j(`/payments/razorpay/order`,{method:`POST`,body:JSON.stringify({items:i.items,totalAmount:i.totalAmount,shippingAddress:i.shippingAddress})},!1),t={key:`rzp_live_TDIymjqPZZxw53`,amount:e.amount,currency:e.currency,name:`Bhawna Closet`,description:`Secure Payment for your Order`,order_id:e.id,handler:async function(e){try{d(!0),p(`Verifying your payment, please do not close this window...`),h((await j(`/payments/razorpay/verify`,{method:`POST`,body:JSON.stringify({razorpay_order_id:e.razorpay_order_id,razorpay_payment_id:e.razorpay_payment_id,razorpay_signature:e.razorpay_signature,shippingDetails:{shippingAddress:i.shippingAddress,items:i.items}})},!1)).order),s(),l(`success`)}catch(e){p(e.message||`Payment verification failed. Please contact support.`)}finally{d(!1)}},prefill:{name:g.name,contact:g.phone,email:n.email},theme:{color:`#f0548a`},modal:{ondismiss:function(){d(!1),p(`Payment cancelled by user.`)}}},r=new window.Razorpay(t);r.on(`payment.failed`,function(e){p(`Payment failed: ${e.error.description||`Unknown error`}`),d(!1)}),r.open()}}catch(e){p(e.message||`Failed to place order. Please try again.`),d(!1)}},className:`checkout-grid`,children:[(0,M.jsxs)(`div`,{className:`checkout-form-panel glass-card`,children:[(0,M.jsx)(`h3`,{children:`Shipping Address`}),(0,M.jsxs)(`div`,{className:`form-row-double`,children:[(0,M.jsxs)(`div`,{className:`checkout-field`,children:[(0,M.jsx)(`label`,{htmlFor:`chk-name`,children:`Full Name`}),(0,M.jsx)(`input`,{id:`chk-name`,type:`text`,name:`name`,value:g.name,onChange:b,placeholder:`e.g. Bhawna Bajaj`,required:!0})]}),(0,M.jsxs)(`div`,{className:`checkout-field`,children:[(0,M.jsx)(`label`,{htmlFor:`chk-phone`,children:`Phone Number`}),(0,M.jsx)(`input`,{id:`chk-phone`,type:`tel`,name:`phone`,value:g.phone,onChange:b,placeholder:`10-digit mobile number`,required:!0})]})]}),(0,M.jsxs)(`div`,{className:`checkout-field`,children:[(0,M.jsx)(`label`,{htmlFor:`chk-street`,children:`Street Address & House/Flat No.`}),(0,M.jsx)(`input`,{id:`chk-street`,type:`text`,name:`street`,value:g.street,onChange:b,placeholder:`Apartment, building, street address`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-row-triple`,children:[(0,M.jsxs)(`div`,{className:`checkout-field`,children:[(0,M.jsx)(`label`,{htmlFor:`chk-city`,children:`City`}),(0,M.jsx)(`input`,{id:`chk-city`,type:`text`,name:`city`,value:g.city,onChange:b,placeholder:`Gurgaon`,required:!0})]}),(0,M.jsxs)(`div`,{className:`checkout-field`,children:[(0,M.jsx)(`label`,{htmlFor:`chk-state`,children:`State`}),(0,M.jsx)(`input`,{id:`chk-state`,type:`text`,name:`state`,value:g.state,onChange:b,placeholder:`Haryana`,required:!0})]}),(0,M.jsxs)(`div`,{className:`checkout-field`,children:[(0,M.jsx)(`label`,{htmlFor:`chk-pincode`,children:`Pin Code`}),(0,M.jsx)(`input`,{id:`chk-pincode`,type:`text`,name:`pincode`,value:g.pincode,onChange:b,placeholder:`122018`,required:!0})]})]}),(0,M.jsx)(`hr`,{className:`checkout-hr`}),(0,M.jsx)(`h3`,{children:`Payment Options`}),(0,M.jsxs)(`div`,{className:`payment-options-list`,children:[(0,M.jsxs)(`label`,{className:`payment-option-label ${g.paymentMethod===`COD`?`active-payment`:``}`,children:[(0,M.jsx)(`input`,{type:`radio`,name:`paymentMethod`,value:`COD`,checked:g.paymentMethod===`COD`,onChange:b}),(0,M.jsxs)(`div`,{className:`payment-label-text`,children:[(0,M.jsx)(`strong`,{children:`Cash on Delivery (COD)`}),(0,M.jsx)(`span`,{children:`Pay with cash when your outfit is delivered.`})]})]}),(0,M.jsxs)(`label`,{className:`payment-option-label ${g.paymentMethod===`Online`?`active-payment`:``}`,children:[(0,M.jsx)(`input`,{type:`radio`,name:`paymentMethod`,value:`Online`,checked:g.paymentMethod===`Online`,onChange:b}),(0,M.jsxs)(`div`,{className:`payment-label-text`,children:[(0,M.jsx)(`strong`,{children:`Online UPI / Card / NetBanking`}),(0,M.jsx)(`span`,{children:`Pay securely online via Razorpay.`})]})]})]})]}),(0,M.jsxs)(`div`,{className:`cart-summary-panel glass-card`,children:[(0,M.jsx)(`h3`,{children:`Summary & Items`}),(0,M.jsx)(`div`,{className:`checkout-items-preview-list`,children:r.map((e,t)=>(0,M.jsxs)(`div`,{className:`checkout-item-preview-row`,children:[(0,M.jsxs)(`span`,{className:`item-prev-name`,children:[e.productId.name,` (`,e.size,`)`]}),(0,M.jsxs)(`span`,{className:`item-prev-qty`,children:[`x`,e.quantity]}),(0,M.jsx)(`span`,{className:`item-prev-sub`,children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format((e.productId.discountPrice||e.productId.price)*e.quantity)})]},t))}),(0,M.jsx)(`hr`,{style:{border:`none`,borderTop:`1px solid var(--border-light)`,margin:`1.25rem 0`}}),(0,M.jsxs)(`div`,{className:`summary-rows`,style:{marginBottom:`1.5rem`},children:[(0,M.jsxs)(`div`,{className:`summary-row`,children:[(0,M.jsx)(`span`,{children:`Subtotal`}),(0,M.jsx)(`span`,{children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(y)})]}),(0,M.jsxs)(`div`,{className:`summary-row`,children:[(0,M.jsx)(`span`,{children:`Shipping`}),(0,M.jsx)(`span`,{className:`shipping-value`,children:`Free Shipping`})]}),(0,M.jsxs)(`div`,{className:`summary-row divider`,children:[(0,M.jsx)(`span`,{children:`Final Total`}),(0,M.jsx)(`span`,{className:`total-value`,children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(y)})]})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-checkout`,disabled:u,children:[u?`Submitting Order...`:g.paymentMethod===`COD`?`Place Order (COD)`:`Place Order`,` `,(0,M.jsx)(T,{size:18})]})]})]})]})]}),(0,M.jsx)(`style`,{children:`
        /* Cart Page specific styles */
        .cart-banner {
          background: linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-dark) 100%);
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: var(--pure-white);
          margin-bottom: 3rem;
        }
        .cart-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
          font-family: var(--font-serif);
        }
        .cart-banner p {
          font-size: 1.05rem;
          color: var(--light-pink);
          margin: 0;
        }

        .cart-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 2.5rem;
          align-items: start;
        }

        .cart-items-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cart-item-card {
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          gap: 1.5rem;
          padding: 1.5rem;
          background: var(--pure-white);
          align-items: center;
        }

        .item-image-wrapper {
          width: 80px;
          height: 100px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid var(--border-light);
        }

        .item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }

        .item-image-wrapper:hover .item-image {
          transform: scale(1.08);
        }

        .item-details {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .item-name {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--dark-charcoal);
          cursor: pointer;
          margin: 0;
        }
        .item-name:hover {
          color: var(--primary-pink);
        }

        .item-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }

        .item-price-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .single-price {
          font-weight: 700;
          color: var(--dark-charcoal);
          font-size: 0.95rem;
        }
        .price-multiplier {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Quantity controls */
        .item-qty-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid var(--border-light);
          border-radius: 20px;
          padding: 0.4rem 0.75rem;
          background: var(--cream-white);
        }
        .qty-btn {
          color: var(--dark-charcoal);
          padding: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .qty-btn:hover:not(:disabled) {
          color: var(--primary-pink);
        }
        .qty-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .qty-value {
          font-size: 0.9rem;
          font-weight: 600;
          min-width: 20px;
          text-align: center;
          color: var(--dark-charcoal);
        }

        /* Total column */
        .item-total-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
          min-width: 100px;
        }
        .subtotal-value {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--primary-pink-dark);
        }
        .remove-item-btn {
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }
        .remove-item-btn:hover {
          color: #dc3545;
        }

        /* Summary panel */
        .cart-summary-panel {
          padding: 2.5rem;
          background: var(--pure-white);
        }
        .cart-summary-panel h3 {
          font-size: 1.4rem;
          color: var(--dark-charcoal);
          margin: 0;
          margin-bottom: 1.5rem;
          border-bottom: 1px dashed var(--border-light);
          padding-bottom: 1rem;
          font-family: var(--font-serif);
        }
        .summary-rows {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        .summary-row.divider {
          border-top: 1px solid var(--border-light);
          padding-top: 1.25rem;
          margin-top: 0.5rem;
        }
        .shipping-value {
          color: #28a745;
          font-weight: 600;
        }
        .total-value {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--dark-charcoal);
        }

        .checkout-note {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 1.5rem 0;
          background: var(--light-pink);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-pink);
        }
        .note-icon {
          color: var(--primary-pink);
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .btn-checkout {
          width: 100%;
          padding: 1rem;
          border-radius: 30px;
          font-size: 1rem;
        }

        .btn-continue-shopping-text {
          width: 100%;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary-pink-dark);
          margin-top: 1rem;
          transition: color var(--transition-fast);
        }
        .btn-continue-shopping-text:hover {
          color: var(--primary-pink-hover);
          text-decoration: underline;
        }

        /* Empty Cart View */
        .empty-cart-card {
          text-align: center;
          padding: 5rem 2rem;
          max-width: 600px;
          margin: 4rem auto;
          background: var(--pure-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .empty-icon {
          color: var(--primary-pink);
        }
        .empty-cart-card h2 {
          font-size: 2rem;
          color: var(--dark-charcoal);
          margin: 0;
          font-family: var(--font-serif);
        }
        .empty-cart-card p {
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* Success Card */
        .checkout-success-card {
          max-width: 650px;
          margin: 3rem auto;
          padding: 3.5rem;
          text-align: center;
          background: var(--pure-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .success-icon-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #e2f9e9;
          color: #28a745;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #a3e8b4;
        }
        .checkout-success-card h2 {
          font-size: 2.2rem;
          color: #28a745;
          margin: 0;
          font-family: var(--font-serif);
        }
        .success-sub {
          color: var(--text-muted);
          font-size: 1rem;
          margin: 0;
        }
        .order-details-box {
          width: 100%;
          background: var(--cream-white);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin: 0.5rem 0;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          font-size: 0.9rem;
          gap: 1.5rem;
        }
        .detail-row span {
          color: var(--text-muted);
        }
        .detail-row strong {
          color: var(--dark-charcoal);
        }
        .pink-text {
          color: var(--primary-pink-dark) !important;
        }
        .address-text {
          text-align: right;
          max-width: 70%;
          font-weight: 500;
          color: var(--dark-charcoal);
        }
        .status-badge-pending {
          background: #fff3cd;
          color: #856404;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          border: 1px solid #ffeeba;
        }
        .status-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
          max-width: 90%;
          margin: 0;
        }

        /* Checkout Form View */
        .order-error-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #f8d7da;
          color: #721c24;
          padding: 1rem 1.5rem;
          border-radius: 10px;
          border: 1px solid #f5c6cb;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .checkout-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 2.5rem;
          align-items: start;
        }
        .checkout-form-panel {
          padding: 2.5rem;
          background: var(--pure-white);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .checkout-form-panel h3 {
          font-size: 1.3rem;
          color: var(--dark-charcoal);
          margin: 0;
          font-family: var(--font-serif);
        }
        .form-row-double {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .form-row-triple {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 1.5rem;
        }
        .checkout-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .checkout-field label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .checkout-field input {
          font-family: var(--font-sans);
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          outline: none;
          font-size: 0.9rem;
          background: var(--cream-white);
        }
        .checkout-field input:focus {
          border-color: var(--primary-pink);
          background: var(--pure-white);
        }

        .checkout-hr {
          border: none;
          border-top: 1px solid var(--border-light);
          margin: 0.5rem 0;
        }

        /* Payment selection */
        .payment-options-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .payment-option-label {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          cursor: pointer;
          background: var(--cream-white);
          transition: all var(--transition-fast);
        }
        .payment-option-label input[type="radio"] {
          margin-top: 0.3rem;
          accent-color: var(--primary-pink);
        }
        .payment-option-label.active-payment {
          border-color: var(--primary-pink);
          background: var(--light-pink);
        }
        .payment-label-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .payment-label-text strong {
          font-size: 0.95rem;
          color: var(--dark-charcoal);
        }
        .payment-label-text span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .disabled-payment-option {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Items Preview List on Side */
        .checkout-items-preview-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          max-height: 250px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }
        .checkout-item-preview-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          gap: 1rem;
        }
        .item-prev-name {
          color: var(--dark-charcoal);
          font-weight: 500;
          flex-grow: 1;
        }
        .item-prev-qty {
          color: var(--text-muted);
        }
        .item-prev-sub {
          color: var(--dark-charcoal);
          font-weight: 600;
        }

        /* Back to bag button */
        .back-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--primary-pink-dark);
          transition: transform var(--transition-fast);
        }
        .back-link-btn:hover {
          transform: translateX(-4px);
        }

        @media (max-width: 992px) {
          .cart-grid, .checkout-grid {
            grid-template-columns: 1fr;
          }
          .cart-item-card {
            grid-template-columns: auto 1fr;
            gap: 1.25rem;
          }
          .item-qty-controls {
            grid-row: 2;
            grid-column: 1 / span 2;
            width: fit-content;
          }
          .item-total-col {
            grid-row: 2;
            grid-column: 2;
            align-items: flex-end;
          }
        }
        @media (max-width: 576px) {
          .cart-view {
            padding-top: 1rem !important;
            padding-bottom: 1.5rem !important;
          }
          .form-row-double, .form-row-triple {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .cart-banner {
            padding: 1rem 0.75rem !important;
            margin-bottom: 1rem !important;
          }
          .cart-banner h1 {
            font-size: 1.5rem !important;
            margin-bottom: 0 !important;
          }
          .cart-banner p {
            display: none !important;
          }
          .cart-summary-panel, .checkout-form-panel {
            padding: 1.25rem !important;
          }
          .checkout-success-card {
            padding: 1.5rem 1rem !important;
          }
          .cart-item-card {
            padding: 1rem !important;
            gap: 1rem !important;
          }
          .item-name {
            font-size: 1rem !important;
          }
        }
      `})]})}function zc({onContinueShopping:e,onSelectProduct:t}){let{wishlistItems:n,toggleWishlist:r}=Je();return n.length===0?(0,M.jsxs)(`main`,{className:`wishlist-view section animate-fade-in`,children:[(0,M.jsx)(`div`,{className:`container`,children:(0,M.jsxs)(`div`,{className:`empty-wishlist-card glass-card`,children:[(0,M.jsx)(ue,{size:52,className:`empty-heart-icon`}),(0,M.jsx)(`h2`,{children:`Your Wishlist is Empty`}),(0,M.jsx)(`p`,{children:`Save outfits you love to your wishlist, so you can easily find them later.`}),(0,M.jsxs)(`button`,{className:`btn btn-primary`,onClick:e,children:[`Browse Shop `,(0,M.jsx)(T,{size:18})]})]})}),(0,M.jsx)(`style`,{children:`
          .empty-wishlist-card {
            text-align: center;
            padding: 5rem 2rem;
            max-width: 600px;
            margin: 4rem auto;
            background: var(--pure-white);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .empty-heart-icon {
            color: var(--primary-pink);
          }
          .empty-wishlist-card h2 {
            font-size: 2rem;
            color: var(--dark-charcoal);
          }
          .empty-wishlist-card p {
            color: var(--text-muted);
            line-height: 1.6;
          }
        `})]}):(0,M.jsxs)(`main`,{className:`wishlist-view section animate-fade-in`,children:[(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`wishlist-banner glass-card`,children:[(0,M.jsx)(`h1`,{children:`Your Wishlist`}),(0,M.jsx)(`p`,{children:`Saved styles that caught your eye. Tap to view or add them to bag!`})]}),(0,M.jsxs)(`div`,{className:`wishlist-grid-wrapper`,children:[(0,M.jsxs)(`p`,{className:`wishlist-count`,children:[`Saved Items (`,n.length,`)`]}),(0,M.jsx)(`div`,{className:`wishlist-cards-grid`,children:n.map(e=>(0,M.jsxs)(`div`,{className:`wishlist-item-wrapper`,children:[(0,M.jsx)(Ze,{product:e,onSelectProduct:t}),(0,M.jsxs)(`button`,{className:`btn btn-outline wishlist-remove-btn`,onClick:()=>r(e),children:[(0,M.jsx)(De,{size:14}),` Remove Item`]})]},e._id))})]})]}),(0,M.jsx)(`style`,{children:`
        .wishlist-banner {
          background: linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-dark) 100%);
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: var(--pure-white);
          margin-bottom: 2rem;
        }
        .wishlist-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
        }
        .wishlist-banner p {
          font-size: 1.05rem;
          color: var(--light-pink);
        }
        
        .wishlist-count {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        
        .wishlist-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 2rem;
        }
        
        .wishlist-item-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .wishlist-remove-btn {
          width: 100%;
          padding: 0.6rem;
          font-size: 0.8rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }
        .wishlist-remove-btn:hover {
          background: #ffebe9;
          border-color: #dc3545;
          color: #c82333;
        }
        @media (max-width: 576px) {
          .wishlist-view {
            padding-top: 1rem !important;
            padding-bottom: 1.5rem !important;
          }
          .wishlist-banner {
            padding: 1rem 0.75rem !important;
            margin-bottom: 1rem !important;
          }
          .wishlist-banner h1 {
            font-size: 1.5rem !important;
            margin-bottom: 0 !important;
          }
          .wishlist-banner p {
            display: none !important;
          }
          .wishlist-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
          .wishlist-count {
            font-size: 0.8rem !important;
            margin-bottom: 0.85rem !important;
          }
        }
      `})]})}function Bc(){let{user:e,updateUserProfile:t}=Be(),[n,r]=(0,_.useState)({name:e?.name||``,phone:e?.phone||``}),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)({currentPassword:``,newPassword:``,confirmPassword:``}),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(!1),[y,b]=(0,_.useState)([]),[x,ee]=(0,_.useState)(!0);(0,_.useEffect)(()=>{e&&(async()=>{ee(!0);try{b(await W.getUserOrders()||[])}catch(e){console.error(`Error fetching user orders history:`,e)}finally{ee(!1)}})()},[e]);let S=e=>{let{name:t,value:n}=e.target;r(e=>({...e,[t]:n}))},C=e=>{let{name:t,value:n}=e.target;d(e=>({...e,[t]:n}))};return(0,M.jsxs)(`main`,{className:`profile-view section animate-fade-in`,children:[(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`profile-banner glass-card`,children:[(0,M.jsx)(`h1`,{children:`My Account`}),(0,M.jsx)(`p`,{children:`Manage your profile details, password, and track your boutique orders.`})]}),(0,M.jsxs)(`div`,{className:`profile-grid`,children:[(0,M.jsxs)(`div`,{className:`profile-settings-col`,children:[(0,M.jsxs)(`div`,{className:`profile-details-card glass-card`,children:[(0,M.jsxs)(`div`,{className:`card-header`,children:[(0,M.jsx)(`h3`,{children:`Profile Information`}),!i&&(0,M.jsxs)(`button`,{className:`edit-btn`,onClick:()=>a(!0),children:[(0,M.jsx)(ge,{size:16}),` Edit Profile`]})]}),o&&(0,M.jsxs)(`div`,{className:`alert alert-success animate-fade-in`,children:[(0,M.jsx)(ae,{size:16}),` Profile updated successfully!`]}),c&&(0,M.jsxs)(`div`,{className:`alert alert-danger animate-fade-in`,children:[(0,M.jsx)(Oe,{size:16}),` `,c]}),i?(0,M.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault(),l(``),s(!1);try{await t(n),s(!0),a(!1)}catch(e){l(e.message||`Failed to update profile`)}},className:`profile-form`,children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`Full Name`}),(0,M.jsx)(`input`,{type:`text`,name:`name`,value:n.name,onChange:S,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`Phone Number`}),(0,M.jsx)(`input`,{type:`tel`,name:`phone`,value:n.phone,onChange:S,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-btns-row`,children:[(0,M.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-save`,children:`Save Changes`}),(0,M.jsx)(`button`,{type:`button`,className:`btn btn-outline btn-cancel`,onClick:()=>{a(!1),r({name:e?.name||``,phone:e?.phone||``})},children:`Cancel`})]})]}):(0,M.jsxs)(`div`,{className:`profile-info-display`,children:[(0,M.jsxs)(`div`,{className:`info-row`,children:[(0,M.jsx)(`span`,{className:`info-label`,children:`Full Name`}),(0,M.jsx)(`span`,{className:`info-val`,children:e?.name})]}),(0,M.jsxs)(`div`,{className:`info-row`,children:[(0,M.jsx)(`span`,{className:`info-label`,children:`Phone Number`}),(0,M.jsx)(`span`,{className:`info-val`,children:e?.phone})]})]})]}),(0,M.jsxs)(`div`,{className:`profile-details-card glass-card`,style:{marginTop:`2rem`},children:[(0,M.jsx)(`div`,{className:`card-header`,children:(0,M.jsxs)(`h3`,{className:`card-title-icon`,children:[(0,M.jsx)(O,{size:20,className:`icon-pink`}),` Change Password`]})}),f&&(0,M.jsxs)(`div`,{className:`alert alert-success animate-fade-in`,children:[(0,M.jsx)(ae,{size:16}),` Password updated successfully!`]}),m&&(0,M.jsxs)(`div`,{className:`alert alert-danger animate-fade-in`,children:[(0,M.jsx)(Oe,{size:16}),` `,m]}),(0,M.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),h(``),p(!1),u.newPassword!==u.confirmPassword){h(`New passwords do not match`);return}if(u.newPassword.length<6){h(`New password must be at least 6 characters long`);return}v(!0);try{let e=await fetch(`http://localhost:5000/api/auth/change-password`,{method:`PUT`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${localStorage.getItem(`userToken`)}`},body:JSON.stringify({currentPassword:u.currentPassword,newPassword:u.newPassword})}),t=await e.json();e.ok?(p(!0),d({currentPassword:``,newPassword:``,confirmPassword:``})):h(t.message||`Failed to change password`)}catch{h(`Connection error changing password`)}finally{v(!1)}},className:`profile-form`,children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`Current Password`}),(0,M.jsx)(`input`,{type:`password`,name:`currentPassword`,value:u.currentPassword,onChange:C,placeholder:`••••••••`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`New Password`}),(0,M.jsx)(`input`,{type:`password`,name:`newPassword`,value:u.newPassword,onChange:C,placeholder:`Minimum 6 characters`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`Confirm New Password`}),(0,M.jsx)(`input`,{type:`password`,name:`confirmPassword`,value:u.confirmPassword,onChange:C,placeholder:`••••••••`,required:!0})]}),(0,M.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-save`,disabled:g,children:g?`Updating...`:`Update Password`})]})]})]}),(0,M.jsx)(`div`,{className:`profile-orders-col`,children:(0,M.jsxs)(`div`,{className:`profile-details-card glass-card h-full`,children:[(0,M.jsx)(`div`,{className:`card-header`,children:(0,M.jsxs)(`h3`,{className:`card-title-icon`,children:[(0,M.jsx)(de,{size:20,className:`icon-pink`}),` Order History`]})}),x?(0,M.jsx)(`div`,{className:`orders-loader`,children:(0,M.jsx)(`div`,{className:`pink-loader`})}):y.length===0?(0,M.jsxs)(`div`,{className:`orders-placeholder`,children:[(0,M.jsx)(`div`,{className:`placeholder-circle`,children:(0,M.jsx)(de,{size:32})}),(0,M.jsx)(`h4`,{children:`No Orders Placed Yet`}),(0,M.jsx)(`p`,{children:`Your orders record is empty. Once you proceed to checkout and place orders, details will appear here.`})]}):(0,M.jsx)(`div`,{className:`customer-orders-list`,children:y.map(e=>(0,M.jsxs)(`div`,{className:`customer-order-card glass-card animate-fade-in`,children:[(0,M.jsxs)(`div`,{className:`order-card-header`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`span`,{className:`order-lbl`,children:`Order ID`}),(0,M.jsxs)(`span`,{className:`order-val-id`,children:[`#`,e._id.substring(e._id.length-8)]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`span`,{className:`order-lbl`,children:`Placed On`}),(0,M.jsx)(`span`,{className:`order-val-date`,children:new Date(e.createdAt).toLocaleDateString(`en-IN`,{day:`numeric`,month:`short`,year:`numeric`})})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`span`,{className:`order-lbl`,children:`Status`}),(0,M.jsx)(`span`,{className:`order-status-badge badge-${e.status.toLowerCase()}`,children:e.status})]})]}),(0,M.jsx)(`div`,{className:`order-card-items`,children:e.items.map((e,t)=>(0,M.jsxs)(`div`,{className:`order-card-item-row`,children:[(0,M.jsx)(`img`,{src:e.productId?.image||`https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=150`,alt:`outfit`,className:`order-item-img`}),(0,M.jsxs)(`div`,{className:`order-item-details`,children:[(0,M.jsx)(`h5`,{children:e.productId?.name||`Unknown Outfit`}),(0,M.jsxs)(`p`,{children:[`Size: `,(0,M.jsx)(`strong`,{children:e.size}),` `,e.color&&`| Color: ${e.color}`]}),(0,M.jsxs)(`span`,{className:`order-item-qty-price`,children:[new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e.price),` x `,e.quantity]})]})]},t))}),e.trackingNumber&&(0,M.jsxs)(`div`,{className:`order-tracking-box`,children:[(0,M.jsxs)(`div`,{className:`tracking-header`,children:[(0,M.jsxs)(`span`,{children:[`Courier Carrier: `,(0,M.jsx)(`strong`,{className:`pink-text`,children:e.courierName||`Shiprocket`})]}),(0,M.jsxs)(`span`,{children:[`AWB Tracking: `,(0,M.jsx)(`strong`,{children:e.trackingNumber})]})]}),e.trackingUrl&&(0,M.jsx)(`a`,{href:e.trackingUrl,target:`_blank`,rel:`noopener noreferrer`,className:`btn-track-package`,children:`Track Package`})]}),e.timeline&&e.timeline.length>0&&(0,M.jsxs)(`div`,{className:`order-timeline-wrapper`,children:[(0,M.jsx)(`span`,{className:`timeline-title`,children:`Delivery Status Updates`}),(0,M.jsx)(`div`,{className:`timeline-items`,children:e.timeline.map((t,n)=>(0,M.jsxs)(`div`,{className:`timeline-event-item`,children:[(0,M.jsxs)(`div`,{className:`event-indicator`,children:[(0,M.jsx)(`div`,{className:`event-dot`}),n<e.timeline.length-1&&(0,M.jsx)(`div`,{className:`event-line`})]}),(0,M.jsxs)(`div`,{className:`event-details`,children:[(0,M.jsxs)(`div`,{className:`event-header`,children:[(0,M.jsx)(`span`,{className:`event-status`,children:t.status}),(0,M.jsx)(`span`,{className:`event-date`,children:new Date(t.createdAt).toLocaleDateString(`en-IN`,{day:`numeric`,month:`short`,hour:`2-digit`,minute:`2-digit`})})]}),t.note&&(0,M.jsx)(`span`,{className:`event-note`,children:t.note})]})]},n))})]}),(0,M.jsxs)(`div`,{className:`order-card-footer`,children:[(0,M.jsx)(`div`,{className:`footer-meta`,children:(0,M.jsxs)(`span`,{children:[`Payment: `,(0,M.jsxs)(`strong`,{children:[e.paymentMethod,` (`,e.paymentStatus,`)`]})]})}),(0,M.jsxs)(`div`,{className:`footer-total`,children:[(0,M.jsx)(`span`,{children:`Total Amount:`}),(0,M.jsx)(`strong`,{children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e.totalAmount)})]})]})]},e._id))})]})})]})]}),(0,M.jsx)(`style`,{children:`
        .profile-banner {
          background: linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-dark) 100%);
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: var(--pure-white);
          margin-bottom: 2rem;
        }
        .profile-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
        }
        .profile-banner p {
          font-size: 1.05rem;
          color: var(--light-pink);
        }
        
        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        
        .profile-details-card {
          padding: 2.5rem;
          background: var(--pure-white);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px dashed var(--border-light);
          padding-bottom: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .card-header h3 {
          font-size: 1.3rem;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .card-title-icon {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .icon-pink {
          color: var(--primary-pink);
        }
        .edit-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary-pink-dark);
        }
        .edit-btn:hover {
          color: var(--primary-pink-hover);
        }
        
        .alert {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-bottom: 1.25rem;
        }
        .alert-success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        .alert-danger {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        
        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .profile-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .profile-form label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .profile-form input {
          font-family: var(--font-sans);
          padding: 0.8rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }
        .profile-form input:focus {
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
        }
        
        .form-btns-row {
          display: flex;
          gap: 1rem;
        }
        .btn-save {
          padding: 0.75rem 1.5rem;
          font-size: 0.85rem;
          border-radius: 8px;
          align-self: flex-start;
        }
        .btn-cancel {
          padding: 0.75rem 1.5rem;
          font-size: 0.85rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          color: var(--dark-charcoal);
        }
        .btn-cancel:hover {
          background: var(--cream-white);
        }
        
        .profile-info-display {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .info-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .info-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .info-val {
          font-size: 1.05rem;
          color: var(--dark-charcoal);
          font-weight: 500;
        }
        
        /* Customer Orders List */
        .customer-orders-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-height: 550px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }
        .customer-order-card {
          background: var(--pure-white);
          padding: 1.5rem;
          border: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .order-card-header {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.75rem;
        }
        .order-lbl {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.15rem;
          text-transform: uppercase;
          font-weight: 600;
        }
        .order-val-id {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark-charcoal);
        }
        .order-val-date {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--dark-charcoal);
        }
        .order-card-items {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .order-card-item-row {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .order-item-img {
          width: 50px;
          height: 60px;
          object-fit: cover;
          border-radius: 6px;
          border: 1px solid var(--border-light);
        }
        .order-item-details {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .order-item-details h5 {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .order-item-details p {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin: 0;
        }
        .order-item-qty-price {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary-pink-dark);
        }
        .order-card-footer {
          border-top: 1px solid var(--border-light);
          padding-top: 0.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }
        .footer-meta {
          color: var(--text-muted);
        }
        .footer-total {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-total strong {
          font-size: 1.05rem;
          color: var(--primary-pink-dark);
        }
        .orders-loader {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4rem 0;
        }

        /* Order status badges */
        .order-status-badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          text-transform: uppercase;
          display: inline-block;
          text-align: center;
        }
        .badge-pending { background: #fff3cd; color: #856404; border: 1px solid #ffeeba; }
        .badge-accepted { background: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }
        .badge-rejected { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .badge-processing { background: #e2e3e5; color: #383d41; border: 1px solid #d6d8db; }
        .badge-shipped { background: #cce5ff; color: #004085; border: 1px solid #b8daff; }
        .badge-delivered { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .badge-cancelled { background: #e2e3e5; color: #383d41; border: 1px solid #d6d8db; }

        .pink-loader {
          width: 32px;
          height: 32px;
          border: 3px solid var(--soft-pink);
          border-top-color: var(--primary-pink);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .orders-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 1.5rem;
          gap: 1rem;
        }
        .placeholder-circle {
          width: 64px;
          height: 64px;
          background: var(--light-pink);
          color: var(--primary-pink);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-pink);
        }
        .orders-placeholder h4 {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .orders-placeholder p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          max-width: 300px;
          margin: 0;
        }
        
        .h-full {
          height: 100%;
        }
        
        /* Shipping Tracking Styles */
        .order-tracking-box {
          background: var(--light-pink);
          border: 1px solid var(--border-pink);
          border-radius: 12px;
          padding: 1.25rem;
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .tracking-header {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 0.85rem;
          color: var(--dark-charcoal);
        }
        .pink-text {
          color: var(--primary-pink-dark);
        }
        .btn-track-package {
          background: var(--primary-pink);
          color: var(--pure-white);
          padding: 0.6rem 1.2rem;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(240, 84, 138, 0.2);
          transition: all var(--transition-fast);
        }
        .btn-track-package:hover {
          background: var(--primary-pink-hover);
          transform: translateY(-1px);
        }
        
        .order-timeline-wrapper {
          border-top: 1px dashed var(--border-light);
          padding-top: 1.25rem;
          margin-top: 1rem;
        }
        .timeline-title {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark-charcoal);
          margin-bottom: 1rem;
        }
        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding-left: 0.5rem;
        }
        .timeline-event-item {
          display: flex;
          gap: 1.25rem;
        }
        .event-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .event-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--primary-pink);
          border: 2px solid var(--pure-white);
          box-shadow: 0 0 0 2px var(--primary-pink);
          z-index: 2;
        }
        .event-line {
          width: 2px;
          background: var(--border-pink);
          position: absolute;
          top: 10px;
          bottom: -20px;
          z-index: 1;
        }
        .event-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex-grow: 1;
        }
        .event-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 1rem;
        }
        .event-status {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark-charcoal);
        }
        .event-date {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .event-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        
        @media (max-width: 992px) {
          .profile-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 576px) {
          .my-account-view {
            padding-top: 1rem !important;
            padding-bottom: 1.5rem !important;
          }
          .profile-banner {
            padding: 1rem 0.75rem !important;
            margin-bottom: 1rem !important;
          }
          .profile-banner h1 {
            font-size: 1.5rem !important;
            margin-bottom: 0 !important;
          }
          .profile-banner p {
            display: none !important;
          }
          .profile-details-card {
            padding: 1.25rem !important;
          }
          .order-card {
            padding: 1.25rem !important;
          }
          .order-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .order-tracking-box {
            padding: 0.75rem !important;
          }
          .tracking-header {
            flex-direction: column;
            gap: 0.25rem;
          }
          .event-header {
            flex-direction: column;
            gap: 0.15rem;
          }
          .order-card-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `})]})}function Vc(){let[e,t]=(0,_.useState)(`overview`),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(``),[f,p]=(0,_.useState)(`All`),[m,h]=(0,_.useState)([]),[g,v]=(0,_.useState)({currentPage:1,totalPages:1}),[y,b]=(0,_.useState)(!1),[x,ee]=(0,_.useState)(``),[S,C]=(0,_.useState)(1),[te,ne]=(0,_.useState)(`All`),[re,w]=(0,_.useState)(!1),[ie,T]=(0,_.useState)(null),[oe,se]=(0,_.useState)(``),[ce,le]=(0,_.useState)(!1),[E,ue]=(0,_.useState)(!1),[O,de]=(0,_.useState)({name:``,brand:``,description:``,price:``,discountPrice:``,category:`Cordsets`,isFeatured:!1,isNewArrival:!1}),[fe,k]=(0,_.useState)({M:0,L:0,XL:0,XXL:0}),[A,pe]=(0,_.useState)([]),[me,he]=(0,_.useState)(``),[ge,_e]=(0,_.useState)([]),[be,xe]=(0,_.useState)(null),Se=[`Cordsets`,`Dresses`,`Tops & Shirts`,`Bottoms`],we=async()=>{a(!0);try{r(await Ie.getStats())}catch(e){console.error(`Error fetching dashboard stats`,e)}finally{a(!1)}},Te=async()=>{b(!0);try{let e=await et.getProducts({page:S,limit:10,category:te,search:x});h(e.products||[]),v(e.pagination||{currentPage:1,totalPages:1})}catch(e){console.error(`Error fetching admin products list`,e)}finally{b(!1)}},Ae=async()=>{l(!0);try{s(await Ie.getOrders()||[])}catch(e){console.error(`Error fetching admin orders list`,e)}finally{l(!1)}},Ne=async(e,t)=>{if(window.confirm(`Are you sure you want to mark this order as ${t}?`))try{await Ie.updateOrderStatus(e,t),alert(`Order status successfully updated to "${t}"`),Ae()}catch(e){alert(e.message||`Failed to update order status`)}};(0,_.useEffect)(()=>{e===`overview`?we():e===`products`?Te():e===`orders`&&Ae()},[e,S,te]);let Pe=e=>{e.preventDefault(),C(1),Te()},j=e=>{let{name:t,value:n,type:r,checked:i}=e.target;de(e=>({...e,[t]:r===`checkbox`?i:n}))},Fe=e=>{let{name:t,value:n}=e.target;k(e=>({...e,[t]:parseInt(n)||0}))},Le=()=>{me.trim()&&!A.includes(me.trim())&&(pe([...A,me.trim()]),he(``))},Re=e=>{pe(A.filter(t=>t!==e))},ze=e=>{let t=Array.from(e.target.files);if(ge.length+t.length>4){se(`A product can support a maximum of 4 images`);return}se(``);let n=t.map((e,t)=>({id:`new-${Date.now()}-${t}-${Math.random()}`,type:`new`,url:URL.createObjectURL(e),file:e}));_e(e=>[...e,...n])},Be=e=>{e.type===`new`&&URL.revokeObjectURL(e.url),_e(t=>t.filter(t=>t.id!==e.id))},Ve=(e,t)=>{xe(t),e.dataTransfer.effectAllowed=`move`},He=(e,t)=>{if(e.preventDefault(),be===null||be===t)return;let n=[...ge],r=n[be];n.splice(be,1),n.splice(t,0,r),xe(t),_e(n)},Ue=()=>{xe(null)},We=()=>{w(!1),T(null),se(``),le(!1),de({name:``,brand:``,description:``,price:``,discountPrice:``,category:`Cordsets`,isFeatured:!1,isNewArrival:!1}),k({M:0,L:0,XL:0,XXL:0}),pe([]),_e([]),t(`form`)},Ge=e=>{w(!0),T(e._id),se(``),le(!1),de({name:e.name,brand:e.brand||``,description:e.description,price:e.price,discountPrice:e.discountPrice||``,category:e.category,isFeatured:e.isFeatured||!1,isNewArrival:e.isNewArrival||!1});let n={M:0,L:0,XL:0,XXL:0};e.sizes.forEach(e=>{n[e.size]=e.stock}),k(n),pe(e.colors||[]),_e((e.images&&e.images.length>0?e.images:[e.image]).map((e,t)=>({id:`existing-${t}-${e}`,type:`existing`,url:e,file:null}))),t(`form`)},Ke=async e=>{if(window.confirm(`Are you sure you want to delete this product? (This will perform a soft-delete)`))try{await Ie.deleteProduct(e),alert(`Product deleted successfully (soft-delete)`),Te()}catch(e){alert(e.message||`Failed to delete product`)}},qe=async e=>{e.preventDefault(),se(``),le(!1);let n=ge.length;if(n===0){se(`At least one product image is required`);return}if(n>4){se(`A maximum of 4 product images is allowed`);return}if(O.discountPrice&&parseFloat(O.discountPrice)>=parseFloat(O.price)){se(`Discount price must be lower than the original price`);return}ue(!0);try{let e=new FormData;e.append(`name`,O.name.trim()),e.append(`brand`,O.brand.trim()),e.append(`description`,O.description.trim()),e.append(`price`,O.price),e.append(`category`,O.category),e.append(`isFeatured`,O.isFeatured),e.append(`isNewArrival`,O.isNewArrival),O.discountPrice&&e.append(`discountPrice`,O.discountPrice);let n=Object.keys(fe).map(e=>({size:e,stock:fe[e]}));e.append(`sizes`,JSON.stringify(n)),e.append(`colors`,JSON.stringify(A));let r=ge.filter(e=>e.type===`existing`).map(e=>e.url);if(re){e.append(`existingImages`,JSON.stringify(r));let t=ge.map(e=>({type:e.type,url:e.type===`existing`?e.url:void 0}));e.append(`imageOrder`,JSON.stringify(t))}ge.filter(e=>e.type===`new`).forEach(t=>{e.append(`images`,t.file)}),re?await Ie.updateProduct(ie,e):await Ie.createProduct(e),le(!0),setTimeout(()=>{t(`products`),le(!1)},1500)}catch(e){se(e.message||`Failed to save product`)}finally{ue(!1)}},Je=o.filter(e=>{let t=e.userId?e.userId.name.toLowerCase():`guest`,n=e.userId?e.userId.email.toLowerCase():``,r=e._id.toLowerCase(),i=u.toLowerCase(),a=r.includes(i)||t.includes(i)||n.includes(i);return f===`All`?a:a&&e.status===f});return(0,M.jsxs)(`main`,{className:`admin-view section animate-fade-in`,children:[(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`admin-banner glass-card`,children:[(0,M.jsx)(`h1`,{children:`Admin Control Panel`}),(0,M.jsx)(`p`,{children:`Manage product catalog, check low stock alerts, and upload outfits to Cloudinary.`}),(0,M.jsxs)(`div`,{className:`admin-nav-tabs`,children:[(0,M.jsx)(`button`,{className:`admin-tab-btn ${e===`overview`?`active`:``}`,onClick:()=>t(`overview`),children:`Overview Dashboard`}),(0,M.jsx)(`button`,{className:`admin-tab-btn ${e===`products`?`active`:``}`,onClick:()=>t(`products`),children:`Product Inventory`}),(0,M.jsx)(`button`,{className:`admin-tab-btn ${e===`orders`?`active`:``}`,onClick:()=>t(`orders`),children:`Manage Orders`}),(0,M.jsxs)(`button`,{className:`btn btn-primary admin-add-btn`,onClick:We,children:[(0,M.jsx)(ve,{size:16}),` Add Product`]})]})]}),e===`overview`&&(0,M.jsx)(`div`,{className:`admin-content-area`,children:i?(0,M.jsx)(`div`,{className:`admin-loader-box`,children:(0,M.jsx)(`div`,{className:`pink-loader`})}):n?(0,M.jsxs)(`div`,{className:`stats-dashboard-layout`,children:[(0,M.jsxs)(`div`,{className:`stats-cards-grid`,children:[(0,M.jsxs)(`div`,{className:`stat-card glass-card`,children:[(0,M.jsx)(Ce,{size:28,className:`stat-icon pink`}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:n.totalProducts}),(0,M.jsx)(`p`,{children:`Total Products`})]})]}),(0,M.jsxs)(`div`,{className:`stat-card glass-card`,children:[(0,M.jsx)(je,{size:28,className:`stat-icon blue`}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:n.totalUsers}),(0,M.jsx)(`p`,{children:`Registered Customers`})]})]}),(0,M.jsxs)(`div`,{className:`stat-card glass-card`,children:[(0,M.jsx)(D,{size:28,className:`stat-icon purple`}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:n.totalInquiries}),(0,M.jsx)(`p`,{children:`Customer Inquiries`})]})]}),(0,M.jsxs)(`div`,{className:`stat-card glass-card`,children:[(0,M.jsx)(ae,{size:28,className:`stat-icon green`}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:n.totalOrders}),(0,M.jsx)(`p`,{children:`Simulated Orders`})]})]})]}),(0,M.jsxs)(`div`,{className:`low-stock-panel glass-card`,children:[(0,M.jsxs)(`div`,{className:`panel-header`,children:[(0,M.jsx)(Oe,{size:20,className:`alert-yellow-icon`}),(0,M.jsx)(`h3`,{children:`Low Inventory Alerts`})]}),(0,M.jsx)(`p`,{className:`panel-subtitle`,children:`Outfits with sizes that have 2 or fewer items remaining in stock.`}),n.lowStockProducts.length===0?(0,M.jsxs)(`div`,{className:`low-stock-empty`,children:[(0,M.jsx)(ae,{size:24,className:`green-check`}),(0,M.jsx)(`span`,{children:`All product sizes are adequately stocked!`})]}):(0,M.jsx)(`div`,{className:`low-stock-table-wrapper`,children:(0,M.jsxs)(`table`,{className:`stats-table`,children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`th`,{children:`Product Name`}),(0,M.jsx)(`th`,{children:`Size Stocks`})]})}),(0,M.jsx)(`tbody`,{children:n.lowStockProducts.map(e=>(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`td`,{className:`font-semibold`,children:e.name}),(0,M.jsx)(`td`,{children:(0,M.jsx)(`div`,{className:`stock-badges-row`,children:e.sizes.map(e=>(0,M.jsxs)(`span`,{className:`stock-badge ${e.stock===0?`out-badge`:e.stock<=2?`low-badge`:`ok-badge`}`,children:[e.size,`: `,e.stock]},e.size))})})]},e._id))})]})})]})]}):(0,M.jsx)(`div`,{className:`admin-error-box glass-card`,children:`Failed to load statistics.`})}),e===`products`&&(0,M.jsxs)(`div`,{className:`admin-content-area`,children:[(0,M.jsxs)(`div`,{className:`admin-filters-bar glass-card`,children:[(0,M.jsxs)(`form`,{onSubmit:Pe,className:`admin-search-wrapper`,children:[(0,M.jsx)(ye,{size:18,className:`search-icon`}),(0,M.jsx)(`input`,{type:`text`,placeholder:`Search products by name...`,value:x,onChange:e=>ee(e.target.value)}),(0,M.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-search-go`,children:`Go`})]}),(0,M.jsx)(`div`,{className:`admin-category-selector`,children:(0,M.jsxs)(`select`,{value:te,onChange:e=>{C(1),ne(e.target.value)},children:[(0,M.jsx)(`option`,{value:`All`,children:`All Categories`}),Se.map(e=>(0,M.jsx)(`option`,{value:e,children:e},e))]})})]}),y?(0,M.jsx)(`div`,{className:`admin-loader-box`,children:(0,M.jsx)(`div`,{className:`pink-loader`})}):m.length===0?(0,M.jsxs)(`div`,{className:`empty-results-box glass-card`,children:[(0,M.jsx)(`h3`,{children:`No Inventory Found`}),(0,M.jsx)(`p`,{children:`We couldn't find any products matching your query.`})]}):(0,M.jsxs)(`div`,{className:`products-table-panel glass-card`,children:[(0,M.jsx)(`div`,{className:`table-responsive`,children:(0,M.jsxs)(`table`,{className:`inventory-table`,children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`th`,{children:`Image`}),(0,M.jsx)(`th`,{children:`Name`}),(0,M.jsx)(`th`,{children:`Category`}),(0,M.jsx)(`th`,{children:`Price`}),(0,M.jsx)(`th`,{children:`Size Stocks`}),(0,M.jsx)(`th`,{children:`Actions`})]})}),(0,M.jsx)(`tbody`,{children:m.map(e=>(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`td`,{children:(0,M.jsx)(`img`,{src:e.image,alt:e.name,className:`table-thumb`})}),(0,M.jsx)(`td`,{children:(0,M.jsxs)(`div`,{className:`table-prod-info`,children:[(0,M.jsx)(`span`,{className:`prod-name-title`,children:e.name}),(0,M.jsxs)(`div`,{className:`prod-tags`,children:[e.isFeatured&&(0,M.jsx)(`span`,{className:`small-tag featured`,children:`Featured`}),e.isNewArrival&&(0,M.jsx)(`span`,{className:`small-tag new-arr`,children:`New`})]})]})}),(0,M.jsx)(`td`,{children:e.category}),(0,M.jsx)(`td`,{children:e.discountPrice?(0,M.jsxs)(`div`,{className:`table-price-col`,children:[(0,M.jsxs)(`span`,{className:`disc-price`,children:[`₹`,e.discountPrice]}),(0,M.jsxs)(`span`,{className:`orig-price-strike`,children:[`₹`,e.price]})]}):(0,M.jsxs)(`span`,{children:[`₹`,e.price]})}),(0,M.jsx)(`td`,{children:(0,M.jsx)(`div`,{className:`stock-badges-row`,children:e.sizes.map(e=>(0,M.jsxs)(`span`,{className:`stock-badge ${e.stock===0?`out-badge`:e.stock<=2?`low-badge`:`ok-badge`}`,children:[e.size,`: `,e.stock]},e.size))})}),(0,M.jsx)(`td`,{children:(0,M.jsxs)(`div`,{className:`table-actions-row`,children:[(0,M.jsx)(`button`,{className:`action-icon-btn edit`,onClick:()=>Ge(e),title:`Edit product`,children:(0,M.jsx)(Ee,{size:16})}),(0,M.jsx)(`button`,{className:`action-icon-btn delete`,onClick:()=>Ke(e._id),title:`Delete product`,children:(0,M.jsx)(De,{size:16})})]})})]},e._id))})]})}),g.totalPages>1&&(0,M.jsxs)(`div`,{className:`pagination-wrapper`,children:[(0,M.jsx)(`button`,{disabled:S<=1,onClick:()=>C(e=>e-1),className:`pagination-btn`,children:`Prev`}),(0,M.jsxs)(`span`,{className:`pagination-text`,children:[`Page `,g.currentPage,` of `,g.totalPages]}),(0,M.jsx)(`button`,{disabled:S>=g.totalPages,onClick:()=>C(e=>e+1),className:`pagination-btn`,children:`Next`})]})]})]}),e===`form`&&(0,M.jsx)(`div`,{className:`admin-content-area`,children:(0,M.jsxs)(`div`,{className:`form-container-card glass-card`,children:[(0,M.jsxs)(`div`,{className:`card-header`,children:[(0,M.jsx)(`h2`,{children:re?`Edit Product: ${O.name}`:`Add New Clothing Product`}),(0,M.jsx)(`button`,{className:`edit-btn`,onClick:()=>t(`products`),children:`Cancel`})]}),ce&&(0,M.jsxs)(`div`,{className:`alert alert-success animate-fade-in`,children:[(0,M.jsx)(ae,{size:18}),` Product saved successfully! Redirecting...`]}),oe&&(0,M.jsxs)(`div`,{className:`alert alert-danger animate-fade-in`,children:[(0,M.jsx)(Oe,{size:18}),` `,oe]}),(0,M.jsxs)(`form`,{onSubmit:qe,className:`admin-input-form`,children:[(0,M.jsx)(`div`,{className:`form-fields-grid`,children:(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`Product Name *`}),(0,M.jsx)(`input`,{type:`text`,name:`name`,value:O.name,onChange:j,placeholder:`e.g. Blossom Satin Midi Dress`,required:!0})]})}),(0,M.jsxs)(`div`,{className:`form-fields-grid`,children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`Category *`}),(0,M.jsx)(`select`,{name:`category`,value:O.category,onChange:j,children:Se.map(e=>(0,M.jsx)(`option`,{value:e,children:e},e))})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`Brand (Optional)`}),(0,M.jsx)(`input`,{type:`text`,name:`brand`,value:O.brand,onChange:j,placeholder:`e.g. Bhawna Closet Boutique`})]})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`Description *`}),(0,M.jsx)(`textarea`,{name:`description`,rows:`4`,value:O.description,onChange:j,placeholder:`Provide details about fabrics, texture, styling inspiration, etc...`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-fields-grid`,children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`Original Price (INR) *`}),(0,M.jsx)(`input`,{type:`number`,name:`price`,value:O.price,onChange:j,placeholder:`e.g. 2999`,min:`0`,required:!0})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`Discount Price (INR, Optional)`}),(0,M.jsx)(`input`,{type:`number`,name:`discountPrice`,value:O.discountPrice,onChange:j,placeholder:`e.g. 2499`,min:`0`})]})]}),(0,M.jsxs)(`div`,{className:`sizes-stock-section`,children:[(0,M.jsx)(`h4`,{children:`Inventory Stock Levels (Sizes M to XXL) *`}),(0,M.jsx)(`p`,{className:`section-note`,children:`Specify item stocks for size configuration.`}),(0,M.jsx)(`div`,{className:`sizes-inputs-grid`,children:[`M`,`L`,`XL`,`XXL`].map(e=>(0,M.jsxs)(`div`,{className:`size-stock-input-box`,children:[(0,M.jsxs)(`label`,{children:[`Size `,e]}),(0,M.jsx)(`input`,{type:`number`,name:e,value:fe[e],onChange:Fe,min:`0`,required:!0})]},e))})]}),(0,M.jsxs)(`div`,{className:`colors-input-section`,children:[(0,M.jsx)(`h4`,{children:`Color Variants`}),(0,M.jsx)(`p`,{className:`section-note`,children:`Type color and click add to insert color tags.`}),(0,M.jsxs)(`div`,{className:`colors-adder-row`,children:[(0,M.jsx)(`input`,{type:`text`,placeholder:`e.g. Blush Pink`,value:me,onChange:e=>he(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Le())}}),(0,M.jsx)(`button`,{type:`button`,className:`btn btn-outline`,onClick:Le,children:`Add`})]}),A.length>0&&(0,M.jsx)(`div`,{className:`colors-chips-list`,children:A.map(e=>(0,M.jsxs)(`span`,{className:`color-chip`,children:[e,` `,(0,M.jsx)(`button`,{type:`button`,onClick:()=>Re(e),children:(0,M.jsx)(Me,{size:12})})]},e))})]}),(0,M.jsxs)(`div`,{className:`form-toggles-row`,children:[(0,M.jsxs)(`label`,{className:`checkbox-label`,children:[(0,M.jsx)(`input`,{type:`checkbox`,name:`isFeatured`,checked:O.isFeatured,onChange:j}),(0,M.jsx)(`span`,{children:`Featured Product`})]}),(0,M.jsxs)(`label`,{className:`checkbox-label`,children:[(0,M.jsx)(`input`,{type:`checkbox`,name:`isNewArrival`,checked:O.isNewArrival,onChange:j}),(0,M.jsx)(`span`,{children:`New Arrival`})]})]}),(0,M.jsxs)(`div`,{className:`images-uploader-section`,children:[(0,M.jsx)(`h4`,{children:`Product Images (Max 4) *`}),(0,M.jsx)(`p`,{className:`section-note`,children:`Choose files to upload. Accepted formats: JPG, PNG, WEBP. Drag images to rearrange their display order.`}),(0,M.jsxs)(`div`,{className:`uploader-picker-row`,children:[(0,M.jsxs)(`label`,{className:`picker-btn btn btn-outline`,children:[(0,M.jsx)(ke,{size:16}),` Choose Images`,(0,M.jsx)(`input`,{type:`file`,accept:`image/*`,multiple:!0,onChange:ze,disabled:ge.length>=4,style:{display:`none`}})]}),(0,M.jsxs)(`span`,{className:`total-images-counter`,children:[`Selected: `,ge.length,` of 4`]})]}),ge.length>0&&(0,M.jsx)(`div`,{className:`form-previews-grid`,children:ge.map((e,t)=>(0,M.jsxs)(`div`,{className:`form-preview-card glass-card ${be===t?`dragging`:``}`,draggable:!0,onDragStart:e=>Ve(e,t),onDragOver:e=>He(e,t),onDragEnd:Ue,title:`Drag to reorder`,children:[(0,M.jsx)(`img`,{src:e.url,alt:`product preview`,className:`preview-img`}),(0,M.jsx)(`span`,{className:`preview-label ${e.type===`existing`?`existing`:`local`}`,children:e.type===`existing`?`Cloud`:`Local`}),(0,M.jsx)(`button`,{type:`button`,className:`remove-preview-btn`,onClick:()=>Be(e),children:(0,M.jsx)(Me,{size:16})})]},e.id))})]}),(0,M.jsx)(`div`,{className:`form-submit-row`,children:(0,M.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-form-submit`,disabled:E,children:E?`Uploading to Cloudinary...`:`Save Product Details`})})]})]})}),e===`orders`&&(0,M.jsx)(`div`,{className:`admin-content-area animate-fade-in`,children:(0,M.jsxs)(`div`,{className:`orders-dashboard-panel glass-card`,children:[(0,M.jsxs)(`div`,{className:`panel-header-row`,children:[(0,M.jsx)(`h2`,{children:`Customer Orders`}),(0,M.jsxs)(`div`,{className:`orders-filters-controls`,children:[(0,M.jsxs)(`div`,{className:`admin-search-wrapper`,style:{maxWidth:`280px`,position:`relative`},children:[(0,M.jsx)(ye,{size:18,className:`search-icon-field`,style:{position:`absolute`,left:`12px`,top:`50%`,transform:`translateY(-50%)`,color:`var(--text-muted)`}}),(0,M.jsx)(`input`,{type:`text`,placeholder:`Search Order ID or Name...`,value:u,onChange:e=>d(e.target.value),style:{paddingLeft:`2.5rem`,width:`100%`}})]}),(0,M.jsxs)(`select`,{value:f,onChange:e=>p(e.target.value),className:`orders-status-select`,children:[(0,M.jsx)(`option`,{value:`All`,children:`All Statuses`}),(0,M.jsx)(`option`,{value:`Pending`,children:`Pending`}),(0,M.jsx)(`option`,{value:`Accepted`,children:`Accepted`}),(0,M.jsx)(`option`,{value:`Rejected`,children:`Rejected`}),(0,M.jsx)(`option`,{value:`Processing`,children:`Processing`}),(0,M.jsx)(`option`,{value:`Shipped`,children:`Shipped`}),(0,M.jsx)(`option`,{value:`Delivered`,children:`Delivered`}),(0,M.jsx)(`option`,{value:`Cancelled`,children:`Cancelled`})]})]})]}),c?(0,M.jsx)(`div`,{className:`admin-loader-box`,children:(0,M.jsx)(`div`,{className:`pink-loader`})}):Je.length===0?(0,M.jsxs)(`div`,{className:`empty-results-box`,style:{padding:`3rem`,textAlign:`center`},children:[(0,M.jsx)(`h3`,{children:`No Orders Found`}),(0,M.jsx)(`p`,{children:`No customer orders match your search filters.`})]}):(0,M.jsx)(`div`,{className:`orders-list-table-wrapper`,style:{overflowX:`auto`},children:(0,M.jsxs)(`table`,{className:`stats-table`,children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`th`,{children:`Order ID`}),(0,M.jsx)(`th`,{children:`Customer`}),(0,M.jsx)(`th`,{children:`Products Ordered`}),(0,M.jsx)(`th`,{children:`Amount`}),(0,M.jsx)(`th`,{children:`Payment`}),(0,M.jsx)(`th`,{children:`Address`}),(0,M.jsx)(`th`,{children:`Status`}),(0,M.jsx)(`th`,{children:`Actions`})]})}),(0,M.jsx)(`tbody`,{children:Je.map(e=>{let t=e.userId?e.userId.name:`Guest User`,n=e.userId?e.userId.email:`N/A`;return(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(`td`,{children:(0,M.jsx)(`code`,{className:`order-id-code`,title:e._id,children:e._id.substring(e._id.length-8)})}),(0,M.jsx)(`td`,{children:(0,M.jsxs)(`div`,{className:`customer-info-col`,children:[(0,M.jsx)(`strong`,{style:{display:`block`,color:`var(--dark-charcoal)`},children:t}),(0,M.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`var(--text-muted)`},children:n})]})}),(0,M.jsx)(`td`,{children:(0,M.jsx)(`div`,{className:`order-items-col`,style:{display:`flex`,flexDirection:`column`,gap:`0.25rem`},children:e.items.map((e,t)=>(0,M.jsxs)(`div`,{className:`order-item-list-row`,style:{fontSize:`0.85rem`,display:`flex`,gap:`0.5rem`},children:[(0,M.jsxs)(`span`,{style:{color:`var(--text-muted)`},children:[e.productId?e.productId.name:`Unknown Product`,` (`,e.size,`)`]}),(0,M.jsxs)(`strong`,{style:{color:`var(--dark-charcoal)`},children:[`x`,e.quantity]})]},t))})}),(0,M.jsx)(`td`,{className:`font-bold pink-text`,style:{fontWeight:`700`,color:`var(--primary-pink-dark)`},children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e.totalAmount)}),(0,M.jsx)(`td`,{children:(0,M.jsxs)(`div`,{className:`payment-info-col`,style:{display:`flex`,flexDirection:`column`,gap:`0.2rem`},children:[(0,M.jsx)(`span`,{className:`payment-method-badge`,style:{fontSize:`0.75rem`,fontWeight:`700`,color:`var(--dark-charcoal)`},children:e.paymentMethod}),(0,M.jsx)(`span`,{className:`payment-status-badge ${e.paymentStatus===`Paid`?`paid`:`unpaid`}`,style:{fontSize:`0.7rem`,fontWeight:`600`,color:e.paymentStatus===`Paid`?`#28a745`:`#dc3545`},children:e.paymentStatus})]})}),(0,M.jsx)(`td`,{children:(0,M.jsx)(`div`,{className:`address-text-col`,title:e.shippingAddress,style:{fontSize:`0.8rem`,color:`var(--text-muted)`,maxWidth:`160px`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.shippingAddress})}),(0,M.jsx)(`td`,{children:(0,M.jsx)(`span`,{className:`order-status-badge badge-${e.status.toLowerCase()}`,children:e.status})}),(0,M.jsx)(`td`,{children:(0,M.jsxs)(`div`,{className:`order-actions-buttons-row`,style:{display:`flex`,gap:`0.5rem`,flexWrap:`wrap`},children:[e.status===`Pending`&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`button`,{className:`order-btn-accept`,onClick:()=>Ne(e._id,`Accepted`),children:`Accept`}),(0,M.jsx)(`button`,{className:`order-btn-reject`,onClick:()=>Ne(e._id,`Rejected`),children:`Reject`})]}),e.status===`Accepted`&&(0,M.jsx)(`button`,{className:`order-btn-ship`,onClick:()=>Ne(e._id,`Shipped`),children:`Ship Order`}),e.status===`Shipped`&&(0,M.jsx)(`button`,{className:`order-btn-deliver`,onClick:()=>Ne(e._id,`Delivered`),children:`Deliver Order`}),[`Rejected`,`Cancelled`,`Delivered`].includes(e.status)&&(0,M.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`var(--text-muted)`},children:`Completed`})]})})]},e._id)})})]})})]})})]}),(0,M.jsx)(`style`,{children:`
        /* Order status badges */
        .order-status-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .badge-pending { background: #fff3cd; color: #856404; border: 1px solid #ffeeba; }
        .badge-accepted { background: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }
        .badge-rejected { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .badge-processing { background: #e2e3e5; color: #383d41; border: 1px solid #d6d8db; }
        .badge-shipped { background: #cce5ff; color: #004085; border: 1px solid #b8daff; }
        .badge-delivered { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .badge-cancelled { background: #e2e3e5; color: #383d41; border: 1px solid #d6d8db; }

        /* Order buttons */
        .order-btn-accept {
          background: #28a745;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }
        .order-btn-accept:hover { background: #218838; }
        .order-btn-reject {
          background: #dc3545;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }
        .order-btn-reject:hover { background: #c82333; }
        .order-btn-ship {
          background: #007bff;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }
        .order-btn-ship:hover { background: #0069d9; }
        .order-btn-deliver {
          background: #28a745;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }
        .order-btn-deliver:hover { background: #218838; }

        .panel-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .panel-header-row h2 {
          font-size: 1.5rem;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .orders-filters-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .orders-status-select {
          font-family: var(--font-sans);
          padding: 0.65rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
          background: var(--cream-white);
          cursor: pointer;
        }

        .admin-banner {
          background: linear-gradient(135deg, var(--dark-charcoal) 0%, #2b303b 100%);
          padding: 3rem;
          border-radius: 16px;
          color: var(--pure-white);
          margin-bottom: 2rem;
        }
        .admin-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
        }
        .admin-banner p {
          font-size: 1.05rem;
          color: #adb5bd;
          margin-bottom: 2rem;
        }
        .admin-nav-tabs {
          display: flex;
          gap: 1rem;
          border-top: 1px solid #495057;
          padding-top: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .admin-tab-btn {
          padding: 0.65rem 1.25rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #ced4da;
          border-radius: 8px;
        }
        .admin-tab-btn:hover {
          color: var(--pure-white);
          background: rgba(255,255,255,0.05);
        }
        .admin-tab-btn.active {
          background: var(--primary-pink);
          color: var(--pure-white);
        }
        .admin-add-btn {
          margin-left: auto;
          padding: 0.65rem 1.25rem;
          font-size: 0.85rem;
        }
        
        /* Stats Dashboard Overview */
        .stats-dashboard-layout {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .stats-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .stat-card {
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: var(--pure-white);
        }
        .stat-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .stat-icon.pink { background: var(--soft-pink); color: var(--primary-pink); }
        .stat-icon.blue { background: #e3f2fd; color: #1e88e5; }
        .stat-icon.purple { background: #f3e5f5; color: #8e24aa; }
        .stat-icon.green { background: #e8f5e9; color: #43a047; }
        
        .stat-card h3 {
          font-family: var(--font-sans);
          font-size: 1.8rem;
          line-height: 1.1;
          color: var(--dark-charcoal);
          margin-bottom: 0.15rem;
        }
        .stat-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
        }
        
        .low-stock-panel {
          padding: 2.5rem;
          background: var(--pure-white);
        }
        .panel-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.25rem;
        }
        .panel-header h3 {
          font-family: var(--font-sans);
          font-size: 1.3rem;
          color: var(--dark-charcoal);
        }
        .alert-yellow-icon {
          color: #ffc107;
        }
        .panel-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        
        .low-stock-empty {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #e2f0d9;
          color: #385723;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .low-stock-table-wrapper {
          overflow-x: auto;
        }
        .stats-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .stats-table th {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          padding: 0.75rem 1rem;
          border-bottom: 2px solid var(--border-light);
        }
        .stats-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--border-light);
          font-size: 0.9rem;
        }
        .font-semibold {
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        
        /* Stock Badges */
        .stock-badges-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .stock-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .stock-badge.out-badge { background: #f8d7da; color: #721c24; }
        .stock-badge.low-badge { background: #fff3cd; color: #856404; }
        .stock-badge.ok-badge { background: #e9ecef; color: #495057; }
        
        .sku-code {
          background: var(--light-pink);
          color: var(--primary-pink-dark);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        /* Product Listing Subtab */
        .admin-filters-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          margin-bottom: 2rem;
          background: var(--pure-white);
          gap: 1.5rem;
        }
        .admin-search-wrapper {
          display: flex;
          align-items: center;
          position: relative;
          flex-grow: 1;
          max-width: 480px;
        }
        .admin-search-wrapper .search-icon {
          position: absolute;
          left: 12px;
          color: var(--text-muted);
        }
        .admin-search-wrapper input {
          font-family: var(--font-sans);
          width: 100%;
          padding: 0.65rem 1rem 0.65rem 2.5rem;
          border-radius: 8px 0 0 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
        }
        .admin-search-wrapper input:focus {
          border-color: var(--primary-pink);
        }
        .btn-search-go {
          padding: 0.65rem 1.25rem;
          border-radius: 0 8px 8px 0;
          font-size: 0.85rem;
        }
        .admin-category-selector select {
          font-family: var(--font-sans);
          padding: 0.65rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
          cursor: pointer;
          background: var(--pure-white);
        }
        
        .products-table-panel {
          padding: 2rem;
          background: var(--pure-white);
        }
        .table-responsive {
          overflow-x: auto;
        }
        .inventory-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .inventory-table th {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--text-muted);
          padding: 1rem;
          border-bottom: 2px solid var(--border-light);
          letter-spacing: 0.05em;
        }
        .inventory-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--border-light);
          vertical-align: middle;
          font-size: 0.9rem;
        }
        
        .table-thumb {
          width: 48px;
          height: 60px;
          object-fit: cover;
          border-radius: 4px;
          background: var(--light-pink);
        }
        .table-prod-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .prod-name-title {
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .prod-tags {
          display: flex;
          gap: 0.35rem;
        }
        .small-tag {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .small-tag.featured { background: #e3f2fd; color: #1565c0; }
        .small-tag.new-arr { background: var(--soft-pink); color: var(--primary-pink-dark); }
        
        .table-price-col {
          display: flex;
          flex-direction: column;
        }
        .disc-price { font-weight: 700; color: var(--primary-pink-dark); }
        .orig-price-strike { font-size: 0.75rem; text-decoration: line-through; color: var(--text-muted); }
        
        .table-actions-row {
          display: flex;
          gap: 0.5rem;
        }
        .action-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-light);
        }
        .action-icon-btn.edit { color: #007bff; }
        .action-icon-btn.edit:hover { background: #e6f2ff; border-color: #007bff; }
        .action-icon-btn.delete { color: #dc3545; }
        .action-icon-btn.delete:hover { background: #ffebe9; border-color: #dc3545; }
        
        /* Pagination */
        .pagination-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        .pagination-btn {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid var(--border-light);
          border-radius: 6px;
        }
        .pagination-btn:hover:not(:disabled) {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
        }
        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .pagination-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        
        /* Add/Edit Form styling */
        .form-container-card {
          padding: 3rem;
          background: var(--pure-white);
        }
        .admin-input-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .admin-input-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .admin-input-form label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .admin-input-form input[type="text"],
        .admin-input-form input[type="number"],
        .admin-input-form textarea,
        .admin-input-form select {
          font-family: var(--font-sans);
          padding: 0.8rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          background: var(--cream-white);
        }
        .admin-input-form input:focus,
        .admin-input-form textarea:focus,
        .admin-input-form select:focus {
          border-color: var(--primary-pink);
          background: var(--pure-white);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
        }
        
        .section-note {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          margin-top: -0.25rem;
        }
        
        /* Size stocks list */
        .sizes-stock-section {
          border-top: 1px dashed var(--border-light);
          padding-top: 1.5rem;
        }
        .sizes-stock-section h4, .colors-input-section h4, .images-uploader-section h4 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.25rem;
        }
        .sizes-inputs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .size-stock-input-box {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        
        /* Colors configuration */
        .colors-input-section {
          border-top: 1px dashed var(--border-light);
          padding-top: 1.5rem;
        }
        .colors-adder-row {
          display: flex;
          gap: 0.75rem;
          max-width: 320px;
        }
        .colors-adder-row input {
          flex-grow: 1;
        }
        .colors-chips-list {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 0.75rem;
        }
        .color-chip {
          background: var(--light-pink);
          color: var(--primary-pink-dark);
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 1px solid var(--border-pink);
        }
        .color-chip button {
          color: var(--primary-pink);
          display: flex;
          align-items: center;
        }
        
        /* Toggles */
        .form-toggles-row {
          display: flex;
          gap: 2rem;
          border-top: 1px dashed var(--border-light);
          padding-top: 1.5rem;
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          cursor: pointer;
        }
        .checkbox-label input {
          width: 18px;
          height: 18px;
          accent-color: var(--primary-pink);
        }
        
        /* Image Uploader */
        .images-uploader-section {
          border-top: 1px dashed var(--border-light);
          padding-top: 1.5rem;
        }
        .uploader-picker-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .picker-btn {
          cursor: pointer;
          gap: 0.5rem;
          border-radius: 8px;
          padding: 0.65rem 1.25rem;
          font-size: 0.85rem;
        }
        .total-images-counter {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-muted);
        }
        .form-previews-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-top: 1.5rem;
        }
        .form-preview-card {
          position: relative;
          height: 140px;
          overflow: hidden;
          background: var(--light-pink);
          cursor: move;
          transition: transform 0.15s ease, opacity 0.15s ease;
          user-select: none;
        }
        .form-preview-card.dragging {
          opacity: 0.5;
          transform: scale(0.95);
          border: 2px dashed var(--primary-pink) !important;
        }
        .preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .preview-label {
          position: absolute;
          bottom: 8px;
          left: 8px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }
        .preview-label.existing { background: #343a40; color: #fff; }
        .preview-label.local { background: var(--primary-pink); color: #fff; }
        
        .remove-preview-btn {
          position: absolute;
          top: 6px;
          right: 6px;
          background: rgba(255,255,255,0.8);
          color: #dc3545;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .remove-preview-btn:hover {
          background: #dc3545;
          color: #fff;
        }
        
        .form-submit-row {
          border-top: 1px dashed var(--border-light);
          padding-top: 2rem;
          margin-top: 1rem;
        }
        .btn-form-submit {
          padding: 0.95rem 2.5rem;
          border-radius: 12px;
          font-size: 1rem;
        }
        
        .admin-loader-box {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4rem 0;
        }
        .admin-error-box {
          padding: 2rem;
          text-align: center;
          color: #dc3545;
        }
        
        @media (max-width: 768px) {
          .form-fields-grid, .sizes-inputs-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .form-previews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .admin-banner {
            padding: 2rem 1.5rem;
          }
          .form-container-card {
            padding: 1.5rem;
          }
        }
      `})]})}function Hc({onLoginSuccess:e}){let{loginAdmin:t}=Be(),[n,r]=(0,_.useState)({email:``,password:``}),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(``),c=e=>{let{name:t,value:n}=e.target;r(e=>({...e,[t]:n}))};return(0,M.jsxs)(`div`,{className:`admin-login-card glass-card animate-fade-in`,children:[(0,M.jsxs)(`div`,{className:`admin-login-header`,children:[(0,M.jsx)(Se,{size:36,className:`admin-shield-icon`}),(0,M.jsx)(`h2`,{children:`Admin Authentication`}),(0,M.jsx)(`p`,{children:`Bhawna Closet staff login only. Please provide your admin access credentials.`})]}),o&&(0,M.jsxs)(`div`,{className:`error-alert`,children:[(0,M.jsx)(Oe,{size:18}),(0,M.jsx)(`span`,{children:o})]}),(0,M.jsxs)(`form`,{onSubmit:async r=>{if(r.preventDefault(),!n.email||!n.password){s(`Please enter email and password`);return}a(!0),s(``);try{await t(n.email,n.password),e&&e()}catch(e){s(e.message||`Invalid admin credentials`)}finally{a(!1)}},className:`auth-form`,children:[(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`admin-email`,children:`Admin Email`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(A,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`admin-email`,type:`email`,name:`email`,value:n.email,onChange:c,placeholder:`admin@bhawnacloset.com`,required:!0})]})]}),(0,M.jsxs)(`div`,{className:`form-field`,children:[(0,M.jsx)(`label`,{htmlFor:`admin-password`,children:`Password`}),(0,M.jsxs)(`div`,{className:`input-wrapper`,children:[(0,M.jsx)(fe,{size:18,className:`input-icon`}),(0,M.jsx)(`input`,{id:`admin-password`,type:`password`,name:`password`,value:n.password,onChange:c,placeholder:`••••••••`,required:!0})]})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:i,children:[i?`Authenticating...`:`Enter Admin Panel`,` `,(0,M.jsx)(T,{size:18})]})]}),(0,M.jsx)(`style`,{children:`
        .admin-login-card {
          max-width: 460px;
          margin: 6rem auto;
          padding: 3rem;
          background: var(--dark-charcoal);
          color: var(--pure-white);
          border: 1px solid #343a40;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .admin-login-header {
          text-align: center;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .admin-shield-icon {
          color: var(--primary-pink);
          margin-bottom: 0.25rem;
        }
        .admin-login-header h2 {
          font-size: 2rem;
          color: var(--pure-white);
          margin: 0;
        }
        .admin-login-header p {
          font-size: 0.85rem;
          color: #adb5bd;
          line-height: 1.5;
        }
        
        .error-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #3a2223;
          color: #f8d7da;
          padding: 0.85rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid #4a1d1e;
          margin-bottom: 1.5rem;
        }
        
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-field label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #ced4da;
        }
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 12px;
          color: #adb5bd;
        }
        .input-wrapper input {
          font-family: var(--font-sans);
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.5rem;
          border: 1px solid #495057;
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          background: #212529;
          color: var(--pure-white);
          transition: all var(--transition-fast);
        }
        .input-wrapper input:focus {
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.2);
          background: #1a1e24;
        }
        
        .btn-auth-submit {
          width: 100%;
          padding: 0.85rem;
          border-radius: 10px;
          margin-top: 0.5rem;
        }
        
        @media (max-width: 576px) {
          .admin-login-card {
            padding: 2rem 1.5rem;
            margin: 3rem auto;
          }
        }
      `})]})}var Uc=({size:e=20,className:t=``})=>(0,M.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,children:[(0,M.jsx)(`rect`,{width:`20`,height:`20`,x:`2`,y:`2`,rx:`5`,ry:`5`}),(0,M.jsx)(`path`,{d:`M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`}),(0,M.jsx)(`line`,{x1:`17.5`,x2:`17.51`,y1:`6.5`,y2:`6.5`})]});function Wc(){let{admin:e}=Be(),[t,n]=(0,_.useState)(`home`),[r,i]=(0,_.useState)(!0);(0,_.useEffect)(()=>{let e=()=>{let e=window.location.hash.replace(`#`,``);[`home`,`collections`,`contact`,`admin`,`cart`,`wishlist`,`profile`,`login`,`signup`].includes(e)&&(n(e),window.scrollTo({top:0,behavior:`smooth`}))};return e(),window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[]);let[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)([]),[l,u]=(0,_.useState)([]),[d,f]=(0,_.useState)(`All`),[p,m]=(0,_.useState)(``),[h,g]=(0,_.useState)(`newest`),[v,y]=(0,_.useState)(1),[b,x]=(0,_.useState)(1);(0,_.useEffect)(()=>{(async()=>{try{c((await et.getProducts({page:1,limit:4,sort:`newest`})).products||[])}catch(e){console.error(`Error fetching home page products:`,e)}})()},[]),(0,_.useEffect)(()=>{t===`collections`&&(async()=>{i(!0);try{let e=await et.getProducts({page:v,limit:8,category:d,search:p,sort:h});u(e.products||[]),x(e.pagination?.totalPages||1)}catch(e){console.error(`Error fetching shop products:`,e)}finally{i(!1)}})()},[t,d,p,h,v]);let ee=e=>{f(e),y(1),n(`collections`),window.scrollTo({top:0,behavior:`smooth`})},S=()=>{f(`All`),y(1),n(`collections`)},C=e=>{o(e.slug),n(`product-detail`),window.scrollTo({top:0,behavior:`smooth`})},te=e=>{o(e),n(`product-detail`),window.scrollTo({top:0,behavior:`smooth`})},ne=()=>{f(`All`),y(1),n(`collections`)};return(0,M.jsxs)(`div`,{className:`app-wrapper`,children:[(0,M.jsx)(Ye,{activeTab:t,setActiveTab:n}),t===`home`&&(0,M.jsxs)(`main`,{className:`home-view animate-fade-in`,children:[(0,M.jsx)(Xe,{onExploreClick:S}),(0,M.jsx)(`section`,{className:`section categories-section`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`section-header`,children:[(0,M.jsx)(`h2`,{children:`Our Curated Collections`}),(0,M.jsx)(`p`,{children:`Explore girls' styles designed for comfort, trend-alignment, and absolute confidence.`})]}),(0,M.jsx)(`div`,{className:`categories-grid`,children:[{name:`Cordsets`,title:`Cordsets Collection`,desc:`Perfect matching sets for effortless styling.`,img:`https://res.cloudinary.com/jbhylwfb/image/upload/v1782904627/bhawna_closet_products/xe17qrmuztgeb3afmyil.jpg`},{name:`Dresses`,title:`Dresses Collection`,desc:`Flowy, elegant dresses for every occasion.`,img:`https://res.cloudinary.com/jbhylwfb/image/upload/v1782921971/bhawna_closet_products/f6c6ykyn8wgxvfa4xtsn.jpg`},{name:`Tops & Shirts`,title:`Tops & Shirts Collection`,desc:`Classic silhouettes blended with modern flair.`,img:`https://res.cloudinary.com/jbhylwfb/image/upload/v1782924572/bhawna_closet_products/cmjsodena4ei2zmim00r.jpg`},{name:`Bottoms`,title:`Bottoms Collection`,desc:`Tailored trousers, skirts, and relaxed fits.`,img:`https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop`}].map(e=>(0,M.jsxs)(`div`,{className:`category-card`,onClick:()=>ee(e.name),children:[(0,M.jsx)(`img`,{src:e.img,alt:e.title,className:`category-card-img`}),(0,M.jsxs)(`div`,{className:`category-card-overlay`,children:[(0,M.jsx)(`h3`,{children:e.title}),(0,M.jsx)(`p`,{children:e.desc}),(0,M.jsxs)(`button`,{className:`category-card-btn`,children:[`View Collection `,(0,M.jsx)(T,{size:14})]})]})]},e.name))})]})}),(0,M.jsx)(`section`,{className:`section new-arrivals-section`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`section-header`,children:[(0,M.jsx)(`h2`,{children:`New Arrivals`}),(0,M.jsx)(`p`,{children:`The freshest additions to our store, styled with a modern pink & white aesthetic.`})]}),s.length===0?(0,M.jsx)(`div`,{className:`loader-container`,children:(0,M.jsx)(`div`,{className:`pink-loader`})}):(0,M.jsx)(`div`,{className:`products-grid`,children:s.map(e=>(0,M.jsx)(Ze,{product:e,onSelectProduct:C},e._id))}),(0,M.jsx)(`div`,{className:`view-all-box`,children:(0,M.jsxs)(`button`,{className:`btn btn-primary`,onClick:S,children:[`View All Products `,(0,M.jsx)(T,{size:18})]})})]})}),(0,M.jsx)(`section`,{id:`about-brand`,className:`section about-brand-section`,children:(0,M.jsxs)(`div`,{className:`container about-container`,children:[(0,M.jsx)(`div`,{className:`about-image-side`,children:(0,M.jsx)(`img`,{src:`https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop`,alt:`Inside Bhawna Closet Boutique`,className:`about-image`})}),(0,M.jsxs)(`div`,{className:`about-text-side`,children:[(0,M.jsx)(`span`,{className:`brand-accent-tag`,children:`ESTD. 2026`}),(0,M.jsx)(`h2`,{children:`Elegant. Trendy. Confidence.`}),(0,M.jsxs)(`p`,{children:[`At `,(0,M.jsx)(`strong`,{children:`Bhawna Closet`}),`, we believe that clothes are not just garments—they are expressions of confidence. Curated specifically for girls who appreciate style, grace, and premium fabrics, our collections are handpicked to provide the perfect fit for your lifestyle.`]}),(0,M.jsx)(`p`,{children:`Whether you are stepping into a business lunch with a sharp pink blazer-set, going for a picnic in our flowy pastel Sakura midi dress, or enjoying a brunch in our comfortable cordsets, we have you covered.`}),(0,M.jsxs)(`div`,{className:`about-store-badges`,children:[(0,M.jsxs)(`div`,{className:`store-badge-card glass-card`,children:[(0,M.jsx)(pe,{size:20,className:`badge-pink-icon`}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h5`,{children:`Physical Boutique`}),(0,M.jsx)(`p`,{children:`M3M Urbana Sector 67, Gurgaon`})]})]}),(0,M.jsxs)(`div`,{className:`store-badge-card glass-card`,children:[(0,M.jsx)(Uc,{size:20,className:`badge-pink-icon`}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h5`,{children:`Socially Active`}),(0,M.jsx)(`p`,{children:`@bhawna_closet123`})]})]})]})]})]})})]}),t===`collections`&&(0,M.jsx)(`main`,{className:`collections-view section animate-fade-in`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`collections-banner glass-card`,children:[(0,M.jsx)(`h1`,{children:`Shop Our Collections`}),(0,M.jsx)(`p`,{children:`Explore fashion-forward garments curated in our signature pink & white colors.`})]}),(0,M.jsxs)(`div`,{className:`filters-row glass-card`,children:[(0,M.jsxs)(`div`,{className:`filter-group`,children:[(0,M.jsx)(we,{size:18,className:`filter-icon`}),(0,M.jsx)(`div`,{className:`filter-tabs`,children:[`All`,`Cordsets`,`Dresses`,`Tops & Shirts`,`Bottoms`].map(e=>(0,M.jsx)(`button`,{className:`filter-tab-btn ${d===e?`active`:``}`,onClick:()=>{f(e),y(1)},children:e},e))})]}),(0,M.jsxs)(`div`,{className:`search-bar-wrapper`,children:[(0,M.jsx)(ye,{size:18,className:`search-input-icon`}),(0,M.jsx)(`input`,{type:`text`,placeholder:`Search outfits...`,value:p,onChange:e=>{m(e.target.value),y(1)}})]}),(0,M.jsx)(`div`,{className:`sort-wrapper`,children:(0,M.jsxs)(`select`,{value:h,onChange:e=>{g(e.target.value),y(1)},children:[(0,M.jsx)(`option`,{value:`newest`,children:`Newest First`}),(0,M.jsx)(`option`,{value:`price-asc`,children:`Price: Low to High`}),(0,M.jsx)(`option`,{value:`price-desc`,children:`Price: High to Low`})]})})]}),r?(0,M.jsx)(`div`,{className:`loader-container`,children:(0,M.jsx)(`div`,{className:`pink-loader`})}):l.length===0?(0,M.jsxs)(`div`,{className:`empty-results-box glass-card`,children:[(0,M.jsx)(`h3`,{children:`No Outfits Found`}),(0,M.jsx)(`p`,{children:`We couldn't find any products matching your selection. Try clearing your filters or search text.`}),(0,M.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>{f(`All`),m(``),y(1)},children:`Clear Filters`})]}):(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`p`,{className:`results-count`,children:[`Showing page `,v,` of `,b]}),(0,M.jsx)(`div`,{className:`products-grid`,children:l.map(e=>(0,M.jsx)(Ze,{product:e,onSelectProduct:C},e._id))}),b>1&&(0,M.jsxs)(`div`,{className:`pagination-controls`,children:[(0,M.jsx)(`button`,{className:`pagination-btn`,onClick:()=>y(e=>Math.max(e-1,1)),disabled:v<=1,children:`Previous`}),(0,M.jsxs)(`span`,{className:`pagination-info`,children:[`Page `,v,` of `,b]}),(0,M.jsx)(`button`,{className:`pagination-btn`,onClick:()=>y(e=>Math.min(e+1,b)),disabled:v>=b,children:`Next`})]})]})]})}),t===`contact`&&(0,M.jsx)(`main`,{className:`contact-view section animate-fade-in`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`collections-banner glass-card`,style:{marginBottom:`3rem`},children:[(0,M.jsx)(`h1`,{children:`Contact Us & Visit`}),(0,M.jsx)(`p`,{children:`Find us in Sector 67 Gurgaon or send an online enquiry instantly.`})]}),(0,M.jsx)(Qe,{}),(0,M.jsxs)(`div`,{className:`map-section-wrapper glass-card`,children:[(0,M.jsx)(`h3`,{children:`Our Boutique Location`}),(0,M.jsxs)(`p`,{className:`map-desc`,children:[`Located inside `,(0,M.jsx)(`strong`,{children:`M3M Urbana`}),`, Sector 67 Gurgaon. Parking is available. Stop by and explore our fabric collections in person!`]}),(0,M.jsx)(`div`,{className:`iframe-map-container`,children:(0,M.jsx)(`iframe`,{title:`Bhawna Closet location inside M3M Urbana Gurgaon`,src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.309062635955!2d77.06527587630737!3d28.394858975459384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d226a27aaaaab%3A0xe54d924619d9b4b0!2sM3M%20Urbana!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin`,width:`100%`,height:`450`,style:{border:0},allowFullScreen:``,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`})})]})]})}),t===`login`&&(0,M.jsx)(Pc,{onSwitchToSignup:()=>n(`signup`),onLoginSuccess:()=>n(`home`)}),t===`signup`&&(0,M.jsx)(Ic,{onSwitchToLogin:()=>n(`login`),onSignupSuccess:()=>n(`home`)}),t===`product-detail`&&a&&(0,M.jsx)(Lc,{productSlug:a,onBack:()=>n(`collections`),onSelectProduct:C}),t===`cart`&&(0,M.jsx)(Rc,{onContinueShopping:ne,onSelectProductBySlug:te}),t===`wishlist`&&(0,M.jsx)(zc,{onContinueShopping:ne,onSelectProduct:C}),t===`profile`&&(0,M.jsx)(Bc,{}),t===`admin`&&(e?(0,M.jsx)(Vc,{}):(0,M.jsx)(Hc,{onLoginSuccess:()=>n(`admin`)})),(0,M.jsx)($e,{setActiveTab:n}),(0,M.jsx)(`style`,{children:`
        .app-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5rem 0;
        }
        .pink-loader {
          width: 50px;
          height: 50px;
          border: 4px solid var(--soft-pink);
          border-top-color: var(--primary-pink);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        /* Category Section Grid */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }
        .category-card {
          position: relative;
          height: 380px;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
        }
        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }
        .category-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .category-card:hover .category-card-img {
          transform: scale(1.06);
        }
        .category-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(30, 34, 41, 0.8) 0%, rgba(30, 34, 41, 0.1) 60%, rgba(240, 84, 138, 0.15) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          color: var(--pure-white);
        }
        .category-card-overlay h3 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin-bottom: 0.4rem;
        }
        .category-card-overlay p {
          font-size: 0.85rem;
          color: #dee2e6;
          margin-bottom: 1.25rem;
          line-height: 1.4;
        }
        .category-card-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--primary-pink);
          color: var(--pure-white);
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .category-card:hover .category-card-btn {
          background: var(--primary-pink-hover);
        }
        
        /* Products Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 2rem;
        }
        .view-all-box {
          text-align: center;
          margin-top: 3.5rem;
        }
        
        /* About Section */
        .about-brand-section {
          background-color: var(--light-pink);
        }
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }
        .about-image-side {
          position: relative;
        }
        .about-image {
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          width: 100%;
          height: 480px;
          object-fit: cover;
          border: 6px solid var(--pure-white);
        }
        .about-text-side {
          display: flex;
          flex-direction: column;
        }
        .brand-accent-tag {
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          color: var(--primary-pink-dark);
          margin-bottom: 0.5rem;
        }
        .about-text-side h2 {
          font-size: 2.5rem;
          color: var(--dark-charcoal);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .about-text-side p {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .about-store-badges {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .store-badge-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }
        .badge-pink-icon {
          color: var(--primary-pink);
          flex-shrink: 0;
        }
        .store-badge-card h5 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.15rem;
        }
        .store-badge-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0;
        }
        
        /* Instagram grid */
        .insta-link {
          color: var(--primary-pink-dark);
          font-weight: 600;
        }
        .insta-link:hover {
          color: var(--primary-pink-hover);
          text-decoration: underline;
        }
        .insta-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
        }
        .insta-item-box {
          position: relative;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .insta-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .insta-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(240, 84, 138, 0.4);
          color: var(--pure-white);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        .insta-item-box:hover .insta-hover-overlay {
          opacity: 1;
        }
        
        /* Collections Page Styles */
        .collections-banner {
          background: linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-dark) 100%);
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: var(--pure-white);
          margin-bottom: 2rem;
        }
        .collections-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
        }
        .collections-banner p {
          font-size: 1.05rem;
          color: var(--light-pink);
        }
        
        .filters-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          margin-bottom: 2rem;
          gap: 1.5rem;
        }
        .filter-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .filter-icon {
          color: var(--text-muted);
        }
        .filter-tabs {
          display: flex;
          gap: 0.5rem;
        }
        .filter-tab-btn {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          background: var(--cream-white);
          color: var(--dark-charcoal);
        }
        .filter-tab-btn.active {
          background: var(--primary-pink);
          color: var(--pure-white);
          border-color: var(--primary-pink);
          font-weight: 600;
        }
        .filter-tab-btn:hover:not(.active) {
          background: var(--light-pink);
          border-color: var(--primary-pink);
          color: var(--primary-pink);
        }
        
        .search-bar-wrapper {
          position: relative;
          flex-grow: 1;
          max-width: 320px;
        }
        .search-input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        .search-bar-wrapper input {
          font-family: var(--font-sans);
          width: 100%;
          padding: 0.65rem 1rem 0.65rem 2.5rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
        }
        .search-bar-wrapper input:focus {
          border-color: var(--primary-pink);
        }
        
        .sort-wrapper select {
          font-family: var(--font-sans);
          padding: 0.65rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
          background: var(--pure-white);
          cursor: pointer;
        }
        .sort-wrapper select:focus {
          border-color: var(--primary-pink);
        }
        .results-count {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .empty-results-box {
          padding: 4rem 2rem;
          text-align: center;
        }
        .empty-results-box h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .empty-results-box p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        
        /* Pagination Controls */
        .pagination-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          margin-top: 3.5rem;
        }
        .pagination-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          background: var(--pure-white);
        }
        .pagination-btn:hover:not(:disabled) {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
          background: var(--light-pink);
        }
        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .pagination-info {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* Map Integration Wrapper */
        .map-section-wrapper {
          margin-top: 4rem;
          padding: 2.5rem;
          background-color: var(--pure-white);
        }
        .map-section-wrapper h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        .map-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }
        .iframe-map-container {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
        }

        /* Responsive Overrides */
        @media (max-width: 1024px) {
          .about-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .about-text-side h2 {
            margin-top: 1.5rem;
          }
          .about-store-badges {
            text-align: left;
          }
          .insta-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .filters-row {
            flex-direction: column;
            align-items: stretch;
            padding: 1.5rem;
          }
          .search-bar-wrapper {
            max-width: 100%;
          }
        }
        @media (max-width: 768px) {
          .filter-group {
            width: 100%;
            overflow-x: auto;
            white-space: nowrap;
            display: flex;
            align-items: center;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Firefox */
          }
          .filter-group::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Edge */
          }
          .filter-tabs {
            display: flex;
            flex-wrap: nowrap;
            gap: 0.5rem;
            padding: 0.25rem 0;
          }
        }
        @media (max-width: 576px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
          .category-card {
            height: 280px !important;
          }
          .category-card-overlay {
            padding: 1.25rem !important;
          }
          .category-card-overlay h3 {
            font-size: 1.2rem !important;
          }
          .category-card-overlay p {
            font-size: 0.75rem !important;
            margin-bottom: 0.75rem !important;
          }
          .about-image {
            height: 320px !important;
          }
          .collections-banner {
            padding: 2rem 1.25rem !important;
            margin-bottom: 1.5rem !important;
          }
          .collections-banner h1 {
            font-size: 1.8rem !important;
          }
          .collections-banner p {
            font-size: 0.9rem !important;
          }
          .filters-row {
            gap: 1rem !important;
            padding: 1rem !important;
            margin-bottom: 1.5rem !important;
          }
          .about-store-badges {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Gc(){return(0,M.jsx)(ze,{children:(0,M.jsx)(Ue,{children:(0,M.jsx)(qe,{children:(0,M.jsx)(Wc,{})})})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,M.jsx)(_.StrictMode,{children:(0,M.jsx)(Gc,{})}));