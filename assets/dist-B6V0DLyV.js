import{A as e,D as t,E as n,H as r,M as i,O as a,S as o,T as s,Y as c,d as l,f as u,j as d,k as f,l as p,u as m,x as h}from"./button-DH3ZWacR.js";import{n as g,x as _}from"./iframe-BYtyZ0Xk.js";import{a as v,n as y}from"./rolldown-runtime-DkW27tQK.js";function b(e){return e?.ownerDocument||document}function ee(){return(ee=y((()=>{r()})))()}function te({controlled:e,default:t,name:n,state:r=`value`}){let{current:i}=ne.useRef(e!==void 0),[a,o]=ne.useState(t);return[i&&e!==void 0?e:a,ne.useCallback(e=>{i||o(e)},[])]}var ne;function re(){return(re=y((()=>{ne=v(_(),1)})))()}var ie,ae;function oe(){return(oe=y((()=>{ie=`data-valid`,ae=`data-invalid`})))()}var se,ce,le,ue;function x(){return(x=y((()=>{oe(),se={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},ce={valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},le={disabled:!1,...ce},ue={valid(e){return e===null?null:e?{[ie]:``}:{[ae]:``}}}})))()}function de(e,t=`mui`){let[n,r]=pe.useState(e),i=e||n;return pe.useEffect(()=>{n??(me+=1,r(`${t}-${me}`))},[n,t]),i}function fe(e,t){if(he!==void 0){let n=he();return e??(t?`${t}-${n}`:n)}return de(e,t)}var pe,me,he;function ge(){return(ge=y((()=>{pe=v(_(),1),i(),me=0,he=d.useId})))()}function _e(e){return fe(e,`base-ui`)}function ve(){return(ve=y((()=>{ge()})))()}function ye(e=!0){let t=be.useContext(Se);if(t.setValidityData===l&&!e)throw Error(h(28));return t}var be,xe,Se;function Ce(){return(Ce=y((()=>{o(),be=v(_(),1),u(),x(),xe={invalid:void 0,name:void 0,validityData:{state:se,errors:[],error:``,value:``,initialValue:null},setValidityData:l,disabled:void 0,setTouched:l,setDirty:l,setFilled:l,setFocused:l,validationMode:`onSubmit`,shouldValidateOnChange:()=>!1,state:le,registerFieldControl:l,validation:{getValidationProps:(e,t=m)=>t,inputRef:{current:null},registeredInputs:new Map,registerInput:l,getInputControl:()=>null,commit:async()=>{},change:l}},Se=be.createContext(xe)})))()}function we(t,r,i,a,o=!0,s){let{registerFieldControl:c}=ye(),l=e(()=>Symbol());n(()=>{let e=l.current;if(!o){c(e,void 0);return}c(e,{controlRef:t,getValue:a,id:r,name:s,value:i})},[t,o,a,r,s,c,l,i]),n(()=>{let e=l.current;return()=>{c(e,void 0)}},[c,l])}function Te(){return(Te=y((()=>{s(),f(),Ce()})))()}function Ee(){return De.useContext(Oe)}var De,Oe;function ke(){return(ke=y((()=>{De=v(_(),1),u(),Oe=De.createContext({elementRef:{current:null},formRef:{current:{fields:new Map}},errors:{},clearErrors:l,validationMode:`onSubmit`,submitCountRef:{current:0}})})))()}function Ae(){return je.useContext(Me)}var je,Me;function Ne(){return(Ne=y((()=>{je=v(_(),1),u(),Me=je.createContext({controlId:void 0,registerControlId:l,resetControlId:l,labelId:void 0,setLabelId:l,messageIds:[],setMessageIds:l,getDescriptionProps:e=>e})})))()}function Pe(t={}){let{id:r,enabled:i=!0}=t,{controlId:o,registerControlId:s,resetControlId:c}=Ae(),u=_e(),d=e(()=>Symbol()),f=Fe.useRef(!1),p=Fe.useRef(!1),m=a(()=>{f.current&&s!==l&&(f.current=!1,s(d.current,void 0))});return n(()=>{if(!i||s===l){m();return}let e;if(r!==void 0)p.current=!0,e=r;else if(p.current)e=u;else{c();return}if(e===void 0){m();return}f.current=!0,s(d.current,e)},[r,i,s,c,u,d,m]),n(()=>m,[m]),(i?o:void 0)??r??u}var Fe;function Ie(){return(Ie=y((()=>{Fe=v(_(),1),s(),t(),f(),u(),ve(),Ne()})))()}var Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze;function Qe(){return(Qe=y((()=>{Le=`none`,Re=`trigger-press`,ze=`trigger-hover`,Be=`trigger-focus`,Ve=`outside-press`,He=`item-press`,Ue=`close-press`,We=`focus-out`,Ge=`escape-key`,Ke=`list-navigation`,qe=`cancel-open`,Je=`sibling-open`,Ye=`disabled`,Xe=`imperative-action`,Ze=`window-resize`})))()}function $e(e,t,n,r){let i=!1,a=!1,o=r??m;return{reason:e,event:t??new Event(`base-ui`),cancel(){i=!0},allowPropagation(){a=!0},get isCanceled(){return i},get isPropagationAllowed(){return a},trigger:n,...o}}function et(){return(et=y((()=>{u()})))()}function tt(e,t){let r=nt.useRef(e),i=a(t);n(()=>{r.current!==e&&i(r.current),r.current=e},[e,i])}var nt;function rt(){return(rt=y((()=>{nt=v(_(),1),s(),t()})))()}function it(e){at.useEffect(e,p)}var at;function ot(){return(ot=y((()=>{at=v(_(),1),u()})))()}function st(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ct(e){if(Array.isArray(e))return e}function lt(e){if(Array.isArray(e))return st(e)}function ut(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function dt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,xt(r.key),r)}}function ft(e,t,n){return t&&dt(e.prototype,t),n&&dt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pt(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Ct(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function S(e,t,n){return(t=xt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mt(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ht(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function gt(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _t(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?vt(Object(n),!0).forEach(function(t){S(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function yt(e,t){return ct(e)||ht(e,t)||Ct(e,t)||gt()}function w(e){return lt(e)||mt(e)||Ct(e)||_t()}function bt(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function xt(e){var t=bt(e,`string`);return typeof t==`symbol`?t:t+``}function St(e){"@babel/helpers - typeof";return St=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},St(e)}function Ct(e,t){if(e){if(typeof e==`string`)return st(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?st(e,t):void 0}}function wt(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[O]}})}function Tt(e){var t=E.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Et(e){return e===``?!0:e===`false`?!1:e===`true`||e}function Dt(e){return ua.push(e),function(){ua.splice(ua.indexOf(e),1)}}function Ot(e){if(e&&D){var t=E.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=E.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return E.head.insertBefore(t,r),e}}function kt(){for(var e=12,t=``;e-->0;)t+=da[Math.random()*62|0];return t}function At(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function jt(e){return e.classList?At(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Mt(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Nt(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Mt(e[n])}" `},``).trim()}function Pt(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Ft(e){return e.size!==M.size||e.x!==M.x||e.y!==M.y||e.rotate!==M.rotate||e.flipX||e.flipY}function It(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Lt(e){var t=e.transform,n=e.width,r=n===void 0?Fi:n,i=e.height,a=i===void 0?Fi:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&dr?`translate(${t.x/j-r/2}em, ${t.y/j-a/2}em) `:s?`translate(calc(-50% + ${t.x/j}em), calc(-50% + ${t.y/j}em)) `:`translate(${t.x/j}em, ${t.y/j}em) `,c+=`scale(${t.size/j*(t.flipX?-1:1)}, ${t.size/j*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}function Rt(){var e=Ii,t=Li,n=A.cssPrefix,r=A.replacementClass,i=fa;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}function zt(){A.autoAddCss&&!pa&&(Ot(Rt()),pa=!0)}function Bt(e){D&&(_a?setTimeout(e,0):ha.push(e))}function Vt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Mt(e):`<${t} ${Nt(r)}>${a.map(Vt).join(``)}</${t}>`}function Ht(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function Ut(e){return w(e).length===1?e.codePointAt(0).toString(16):null}function Wt(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Gt(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=Wt(t);typeof P.hooks.addPack==`function`&&!r?P.hooks.addPack(e,Wt(t)):P.styles[e]=C(C({},P.styles[e]||{}),i),e===`fas`&&Gt(`fa`,t)}function Kt(e){return~oa.indexOf(e)}function qt(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Kt(i)?i:null}function Jt(e,t){return(Ta[e]||{})[t]}function Yt(e,t){return(Ea[e]||{})[t]}function Xt(e,t){return(ka[e]||{})[t]}function Zt(e){return Da[e]||{prefix:null,iconName:null}}function Qt(e){var t=Oa[e],n=Jt(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function $t(){return wa}function en(e){var t=O,n=Sa.reduce(function(e,t){return e[t]=`${A.cssPrefix}-${t}`,e},{});return di.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Ca[r].includes(e)}))&&(t=r)}),t}function tn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?O:t,r=Yi[n][e];if(n===vr&&!e)return`fad`;var i=Zi[n][e]||Zi[n][r],a=e in P.styles?e:null;return i||a||null}function nn(e){var t=[],n=null;return e.forEach(function(e){var r=qt(A.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function rn(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}function an(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=rn(e.filter(function(e){return Ma.includes(e)})),a=rn(e.filter(function(e){return!Ma.includes(e)})),o=yt(i.filter(function(e){return r=e,!_r.includes(e)}),1)[0],s=o===void 0?null:o,c=en(i),l=C(C({},nn(a)),{},{prefix:tn(s,{family:c})});return C(C(C({},l),sn({values:e,family:c,styles:ba,config:A,canonical:l,givenPrefix:r})),on(n,r,l))}function on(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Zt(i):{},o=Xt(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!ba.far&&ba.fas&&!A.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}function sn(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===vr,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Na.includes(n)&&(Object.keys(s).find(function(e){return Pa.includes(e)})||l.autoFetchSvg)&&(r.prefix=mi.get(n).defaultShortPrefixId,r.iconName=Xt(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=$t()||`fas`),r}function cn(e,t){var n=t.mixoutsTo;return Ia=e,La={},Object.keys(Ra).forEach(function(e){za.indexOf(e)===-1&&delete Ra[e]}),Ia.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),St(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){La[e]||(La[e]=[]),La[e].push(r[e])})}e.provides&&e.provides(Ra)}),n}function ln(e,t){var n=[...arguments].slice(2);return(La[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function un(e){var t=[...arguments].slice(1);(La[e]||[]).forEach(function(e){e.apply(null,t)})}function dn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ra[e]?Ra[e].apply(null,t):void 0}function fn(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||$t();if(t)return t=Xt(n,t)||t,Ht(Ba.definitions,n,t)||Ht(P.styles,n,t)}function pn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Vt(e)})}}),Object.defineProperty(e,"node",{get:function(){if(D){var t=E.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function mn(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Ft(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Pt(C(C({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function hn(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${A.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:C(C({},i),{},{id:o}),children:r}]}]}function gn(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function _n(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[A.replacementClass,a?`${A.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:C(C({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!gn(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Ri]=``);var _=C(C({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:C({},l.styles)}),v=r.found&&n.found?dn(`generateAbstractMask`,_)||{children:[],attributes:{}}:dn(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?hn(_):mn(_)}function vn(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=C(C({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Ri]=``);var l=C({},a.styles);Ft(i)&&(l.transform=Lt({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Pt(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function yn(e){var t=e.content,n=e.extra,r=C(C({},n.attributes),{},{class:n.classes.join(` `)}),i=Pt(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}function bn(e){var t=e[0],n=e[1],r=yt(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${A.cssPrefix}-${aa.GROUP}`},children:[{tag:`path`,attributes:{class:`${A.cssPrefix}-${aa.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${A.cssPrefix}-${aa.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}function xn(e,t){!qi&&!A.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Sn(e,t){var n=t;return t===`fa`&&A.styleDefault!==null&&(t=$t()),new Promise(function(r,i){if(n===`fa`){var a=Zt(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ha[t]&&Ha[t][e]){var o=Ha[t][e];return r(bn(o))}xn(e,t),r(C(C({},Ua),{},{icon:A.showMissingIcons&&e&&dn(`missingIconAbstract`)||{}}))})}function Cn(e){return typeof(e.getAttribute?e.getAttribute(Ri):null)==`string`}function wn(e){var t=e.getAttribute?e.getAttribute(Vi):null,n=e.getAttribute?e.getAttribute(Hi):null;return t&&n}function Tn(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(A.replacementClass)}function En(){return A.autoReplaceSvg===!0?Za.replace:Za[A.autoReplaceSvg]||Za.replace}function Dn(e){return E.createElementNS(`http://www.w3.org/2000/svg`,e)}function On(e){return E.createElement(e)}function kn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Dn:On:t;if(typeof e==`string`)return E.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(kn(e,{ceFn:n}))}),r}function An(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}function jn(e){e()}function Mn(e,t){var n=typeof t==`function`?t:Xa;if(e.length===0)n();else{var r=jn;A.mutateApproach===Wi&&(r=T.requestAnimationFrame||jn),r(function(){var t=En(),r=Ya.begin(`mutate`);e.map(t),r(),n()})}}function Nn(){Qa=!0}function Pn(){Qa=!1}function Fn(e){if(lr&&A.observeMutations){var t=e.treeCallback,n=t===void 0?Xa:t,r=e.nodeCallback,i=r===void 0?Xa:r,a=e.pseudoElementsCallback,o=a===void 0?Xa:a,s=e.observeMutationsRoot,c=s===void 0?E:s;$a=new lr(function(e){if(!Qa){var t=$t();At(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Cn(e.addedNodes[0])&&(A.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&A.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Cn(e.target)&&~ia.indexOf(e.attributeName)){if(e.attributeName===`class`&&wn(e.target)){var r=an(jt(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Vi,a||t),s&&e.target.setAttribute(Hi,s)}else Tn(e.target)&&i(e.target)}})}}),D&&$a.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function In(){$a&&$a.disconnect()}function Ln(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Rn(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=an(jt(e));return i.prefix||=$t(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Yt(i.prefix,e.innerText)||Jt(i.prefix,Ut(e.innerText))),!i.iconName&&A.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function zn(e){return At(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Bn(){return{iconName:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Rn(e),r=n.iconName,i=n.prefix,a=n.rest,o=zn(e),s=ln(`parseNodeAttributes`,{},e);return C({iconName:r,prefix:i,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Ln(e):[],attributes:o}},s)}function Hn(e){var t=A.autoReplaceSvg===`nest`?Vn(e,{styleParser:!1}):Vn(e);return~t.extra.classes.indexOf(na)?dn(`generateLayersText`,e,t):dn(`generateSvgReplacementMutation`,e,t)}function Un(){return[].concat(w(gi),w(ki))}function Wn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var n=E.documentElement.classList,r=function(e){return n.add(`${Ui}-${e}`)},i=function(e){return n.remove(`${Ui}-${e}`)},a=A.autoFetchSvg?Un():_r.concat(Object.keys(eo));a.includes(`fa`)||a.push(`fa`);var o=[`.${na}:not([${Ri}])`].concat(a.map(function(e){return`.${e}:not([${Ri}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=At(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Ya.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Hn(t);n&&e.push(n)}catch(e){qi||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Mn(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Gn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hn(e).then(function(e){e&&Mn([e],t)})}function Kn(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:fn(t||{}),i=n.mask;return i&&=(i||{}).icon?i:fn(i||{}),e(r,C(C({},n),{},{mask:i}))}}function qn(e){return Ut(w(e.replace(oo,``))[0]||``)}function Jn(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(oo,``),r=n.codePointAt(0),i=r>=so[0]&&r<=so[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Yn(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(lo[n]||{})[i]||uo[n]}function Xn(e,t){var n=`${Bi}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=At(e.children).filter(function(e){return e.getAttribute(zi)===t})[0],o=T.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(ra),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Yn(s,l),p=qn(d),m=c[0].startsWith(`FontAwesome`),h=Jn(o),g=Jt(f,p),_=g;if(m){var v=Qt(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Vi)!==f||a.getAttribute(Hi)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Bn(),b=y.extra;b.attributes[zi]=t,Sn(g,f).then(function(i){var a=_n(C(C({},y),{},{icons:{main:i,mask:ja()},prefix:f,iconName:_,extra:b,watchable:!0})),o=E.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Vt(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Zn(e){return Promise.all([Xn(e,`::before`),Xn(e,`::after`)])}function Qn(e){return e.parentNode!==document.head&&!~Gi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(zi)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function $n(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(D){var n;if(t)n=e;else if(A.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=pt(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=pt(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=pt(po(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){A.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=At(n).filter(Qn).map(Zn),i=Ya.begin(`searchPseudoElements`);Nn(),Promise.all(r).then(function(){i(),Pn(),e()}).catch(function(){i(),Pn(),t()})})}}function er(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function tr(e){return e.tag===`g`?e.children:[e]}var nr,rr,ir,ar,or,sr,cr,T,E,lr,ur,D,dr,fr,pr,mr,hr,gr,_r,O,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,k,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,A,ua,j,M,da,fa,pa,ma,N,P,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,F,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So;function Co(){return(Co=y((()=>{nr=function(){},rr={},ir={},ar=null,or={mark:nr,measure:nr};try{typeof window<`u`&&(rr=window),typeof document<`u`&&(ir=document),typeof MutationObserver<`u`&&(ar=MutationObserver),typeof performance<`u`&&(or=performance)}catch{}sr=(rr.navigator||{}).userAgent,cr=sr===void 0?``:sr,T=rr,E=ir,lr=ar,ur=or,T.document,D=!!E.documentElement&&!!E.head&&typeof E.addEventListener==`function`&&typeof E.createElement==`function`,dr=~cr.indexOf(`MSIE`)||~cr.indexOf(`Trident/`),pr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,mr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,hr={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},gr={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},_r=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],O=`classic`,vr=`duotone`,yr=`sharp`,br=`sharp-duotone`,xr=`chisel`,Sr=`etch`,Cr=`graphite`,wr=`jelly`,Tr=`jelly-duo`,Er=`jelly-fill`,Dr=`mosaic`,Or=`notdog`,kr=`notdog-duo`,Ar=`pixel`,jr=`slab`,Mr=`slab-duo`,Nr=`slab-press`,Pr=`slab-press-duo`,Fr=`thumbprint`,Ir=`utility`,Lr=`utility-duo`,Rr=`utility-fill`,zr=`vellum`,Br=`whiteboard`,Vr=`Classic`,Hr=`Duotone`,Ur=`Sharp`,Wr=`Sharp Duotone`,Gr=`Chisel`,Kr=`Etch`,qr=`Graphite`,Jr=`Jelly`,Yr=`Jelly Duo`,Xr=`Jelly Fill`,Zr=`Mosaic`,Qr=`Notdog`,$r=`Notdog Duo`,ei=`Pixel`,ti=`Slab`,ni=`Slab Duo`,ri=`Slab Press`,ii=`Slab Press Duo`,ai=`Thumbprint`,oi=`Utility`,si=`Utility Duo`,ci=`Utility Fill`,li=`Vellum`,ui=`Whiteboard`,di=[O,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br],fr={},S(S(S(S(S(S(S(S(S(S(fr,O,Vr),vr,Hr),yr,Ur),br,Wr),xr,Gr),Sr,Kr),Cr,qr),wr,Jr),Tr,Yr),Er,Xr),S(S(S(S(S(S(S(S(S(S(fr,Dr,Zr),Or,Qr),kr,$r),Ar,ei),jr,ti),Mr,ni),Nr,ri),Pr,ii),Fr,ai),Ir,oi),S(S(S(S(fr,Lr,si),Rr,ci),zr,li),Br,ui),fi={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},pi={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},mi=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),hi={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},gi=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],_i={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},vi=[`kit`],S(S({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`),yi={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},bi={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},xi={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Si={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},wi={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ti=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],Ci={},S(S(S(S(S(S(S(S(S(S(Ci,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),S(S(S(S(S(S(S(S(S(S(Ci,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),S(S(S(S(Ci,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),S(S({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`),Ei={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Di={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Oi={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},ki=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Ti,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Ai=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],ji=[1,2,3,4,5,6,7,8,9,10],Mi=ji.concat([11,12,13,14,15,16,17,18,19,20]),Ni=[].concat(w(Object.keys(Di)),Ai,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,wi.GROUP,wi.SWAP_OPACITY,wi.PRIMARY,wi.SECONDARY],ji.map(function(e){return`${e}x`}),Mi.map(function(e){return`w-${e}`})),Pi={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},k=`___FONT_AWESOME___`,Fi=16,Ii=`fa`,Li=`svg-inline--fa`,Ri=`data-fa-i2svg`,zi=`data-fa-pseudo-element`,Bi=`data-fa-pseudo-element-pending`,Vi=`data-prefix`,Hi=`data-icon`,Ui=`fontawesome-i2svg`,Wi=`async`,Gi=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ki=[`::before`,`::after`,`:before`,`:after`],qi=function(){try{return!0}catch{return!1}}(),Ji=C({},hr),Ji[O]=C(C(C(C({},{"fa-duotone":`duotone`}),hr[O]),_i.kit),_i[`kit-duotone`]),Yi=wt(Ji),Xi=C({},hi),Xi[O]=C(C(C(C({},{duotone:`fad`}),Xi[O]),Si.kit),Si[`kit-duotone`]),Zi=wt(Xi),Qi=C({},Oi),Qi[O]=C(C({},Qi[O]),xi.kit),$i=wt(Qi),ea=C({},Ei),ea[O]=C(C({},ea[O]),yi.kit),wt(ea),ta=pr,na=`fa-layers-text`,ra=mr,wt(C({},fi)),ia=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],aa=gr,oa=[].concat(w(vi),w(Ni)),sa=T.FontAwesomeConfig||{},E&&typeof E.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=yt(e,2),n=t[0],r=t[1],i=Et(Tt(n));i!=null&&(sa[r]=i)}),ca={styleDefault:`solid`,familyDefault:O,cssPrefix:Ii,replacementClass:Li,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},sa.familyPrefix&&(sa.cssPrefix=sa.familyPrefix),la=C(C({},ca),sa),la.autoReplaceSvg||(la.observeMutations=!1),A={},Object.keys(ca).forEach(function(e){Object.defineProperty(A,e,{enumerable:!0,set:function(t){la[e]=t,ua.forEach(function(e){return e(A)})},get:function(){return la[e]}})}),Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(e){la.cssPrefix=e,ua.forEach(function(e){return e(A)})},get:function(){return la.cssPrefix}}),T.FontAwesomeConfig=A,ua=[],j=Fi,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},da=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`,fa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`,pa=!1,ma={mixout:function(){return{dom:{css:Rt,insertCss:zt}}},hooks:function(){return{beforeDOMElementCreation:function(){zt()},beforeI2svg:function(){zt()}}}},N=T||{},N[k]||(N[k]={}),N[k].styles||(N[k].styles={}),N[k].hooks||(N[k].hooks={}),N[k].shims||(N[k].shims=[]),P=N[k],ha=[],ga=function(){E.removeEventListener(`DOMContentLoaded`,ga),_a=1,ha.map(function(e){return e()})},_a=!1,D&&(_a=(E.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(E.readyState),_a||E.addEventListener(`DOMContentLoaded`,ga)),va=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},ya=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:va(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l},ba=P.styles,xa=P.shims,Sa=Object.keys($i),Ca=Sa.reduce(function(e,t){return e[t]=Object.keys($i[t]),e},{}),wa=null,Ta={},Ea={},Da={},Oa={},ka={},Aa=function(){var e=function(e){return ya(ba,function(t,n,r){return t[r]=ya(n,e,{}),t},{})};Ta=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Ea=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),ka=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in ba||A.autoFetchSvg,n=ya(xa,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Da=n.names,Oa=n.unicodes,wa=tn(A.styleDefault,{family:A.familyDefault})},Dt(function(e){wa=tn(e.styleDefault,{family:A.familyDefault})}),Aa(),ja=function(){return{prefix:null,iconName:null,rest:[]}},Ma=ki.concat(gi),Na=di.filter(function(e){return e!==O||e!==vr}),Pa=Object.keys(Oi).filter(function(e){return e!==O}).map(function(e){return Object.keys(Oi[e])}).flat(),Fa=function(){function e(){ut(this,e),this.definitions={}}return ft(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=C(C({},e.definitions[n]||{}),t[n]),Gt(n,t[n]);var r=$i[O][n];r&&Gt(r,t[n]),Aa()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Ia=[],La={},Ra={},za=Object.keys(Ra),Ba=new Fa,F={noAuto:function(){A.autoReplaceSvg=!1,A.observeMutations=!1,un(`noAuto`)},config:A,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(un(`beforeI2svg`,e),dn(`pseudoElements2svg`,e),dn(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,Bt(function(){Va({autoReplaceSvgRoot:t}),un(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(St(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Xt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=tn(e[0]);return{prefix:n,iconName:Xt(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${A.cssPrefix}-`)>-1||e.match(ta))){var r=an(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||$t(),iconName:Xt(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=$t();return{prefix:i,iconName:Xt(i,e)||e}}}},library:Ba,findIconDefinition:fn,toHtml:Vt},Va=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?E:e;(Object.keys(P.styles).length>0||A.autoFetchSvg)&&D&&A.autoReplaceSvg&&F.dom.i2svg({node:t})},Ha=P.styles,Ua={found:!1,width:512,height:512},Wa=function(){},Ga=A.measurePerformance&&ur&&ur.mark&&ur.measure?ur:{mark:Wa,measure:Wa},Ka=`FA "7.3.1"`,qa=function(e){return Ga.mark(`${Ka} ${e} begins`),function(){return Ja(e)}},Ja=function(e){Ga.mark(`${Ka} ${e} ends`),Ga.measure(`${Ka} ${e}`,`${Ka} ${e} begins`,`${Ka} ${e} ends`)},Ya={begin:qa,end:Ja},Xa=function(){},Za={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(kn(e),t)}),t.getAttribute(Ri)===null&&A.keepOriginalSource){var n=E.createComment(An(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~jt(t).indexOf(A.replacementClass))return Za.replace(e);var r=RegExp(`${A.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===A.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Vt(e)}).join(`
`);t.setAttribute(Ri,``),t.innerHTML=a}},Qa=!1,$a=null,eo=P.styles,to=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?M:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return pn(C({type:`icon`},e),function(){return un(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),_n({icons:{main:bn(v),mask:s?bn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:C(C({},M),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},no={mixout:function(){return{icon:Kn(to)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Wn,e.nodeCallback=Gn,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?E:t,r=e.callback;return Wn(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Sn(n,r),o.iconName?Sn(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=yt(o,2),u=l[0],d=l[1];t([e,_n({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Pt(a);o.length>0&&(n.style=o);var s;return Ft(i)&&(s=dn(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},ro={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return pn({type:`layer`},function(){un(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${A.cssPrefix}-layers`].concat(w(r)).join(` `)},children:n}]})}}}},io={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return pn({type:`counter`,content:e},function(){return un(`beforeDOMElementCreation`,{content:e,params:t}),yn({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${A.cssPrefix}-layers-counter`].concat(w(a))}})})}}}},ao={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?M:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return pn({type:`text`,content:e},function(){return un(`beforeDOMElementCreation`,{content:e,params:t}),vn({content:e,transform:C(C({},M),r),extra:{attributes:s,styles:l,classes:[`${A.cssPrefix}-layers-text`].concat(w(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(dr){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,vn({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},oo=RegExp(`"`,`ug`),so=[1105920,1112319],co=C(C(C(C({},{FontAwesome:{normal:`fas`,400:`fas`}}),pi),Pi),bi),lo=Object.keys(co).reduce(function(e,t){return e[t.toLowerCase()]=co[t],e},{}),uo=Object.keys(lo).reduce(function(e,t){var n=lo[t];return e[t]=n[900]||w(Object.entries(n))[0][1],e},{}),fo=function(e){return!!e&&Ki.some(function(t){return e.includes(t)})},po=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=pt(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(fo(a)){var o=Ki.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t},mo={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=$n,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?E:t;A.searchPseudoElements&&$n(n)}}},ho=!1,go={mixout:function(){return{dom:{unwatch:function(){Nn(),ho=!0}}}},hooks:function(){return{bootstrap:function(){Fn(ln(`mutationObserverCallbacks`,{}))},noAuto:function(){In()},watch:function(e){var t=e.observeMutationsRoot;ho?Pn():Fn(ln(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},_o=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},vo={mixout:function(){return{parse:{transform:function(e){return _o(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=_o(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:C({},a.outer),children:[{tag:`g`,attributes:C({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:C(C({},t.icon.attributes),a.path)}]}]}}}},yo={x:0,y:0,width:`100%`,height:`100%`},cn([ma,no,ro,io,ao,mo,go,vo,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?an(n.split(` `).map(function(e){return e.trim()})):ja();return r.prefix||=$t(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=It({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:C(C({},yo),{},{fill:`white`})},p=c.children?{children:c.children.map(er)}:{},m={tag:`g`,attributes:C({},d.inner),children:[er(C({tag:c.tag,attributes:C(C({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:C({},d.outer),children:[m]},g=`mask-${a||kt()}`,_=`clip-${a||kt()}`,v={tag:`mask`,attributes:C(C({},yo),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:tr(u)},v]};return t.push(y,{tag:`rect`,attributes:C({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},yo)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;T.matchMedia&&(t=T.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:C(C({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=C(C({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:C(C({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:C(C({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:C(C({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:C(C({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:C(C({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:C(C({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:C(C({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:F}),F.noAuto,bo=F.config,F.library,F.dom,xo=F.parse,F.findIconDefinition,F.toHtml,So=F.icon,F.layer,F.text,F.counter})))()}function wo(e){return e-=0,e===e}function To(e){return wo(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}function Eo(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Do(e){if(Fo.has(e))return Fo.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=To(n);t[e.startsWith(`webkit`)?Eo(e):e]=r}}}n=a+1}if(Fo.size===Io){let e=Fo.keys().next().value;e&&Fo.delete(e)}return Fo.set(e,t),t}function Oo(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),Oo(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Do(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[To(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(Po)))}return e(t.tag,{...a,...u},...r)}function ko(e){let t=bo.cssPrefix||bo.familyPrefix||Uo;return t===Uo?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Uo}-`,`g`),`${t}-`)}function Ao(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:b,canvasRoomy:ee,flip360:te,buzz:ne,float:re,jello:ie,spinSnap:ae,spinSnap4:oe,spinSnap8:se,swing:ce,wag:le,className:ue}=e,x=[];return ue&&x.push(...ue.split(` `)),t&&x.push(I.beat),n&&x.push(I.fade),r&&x.push(I.beatFade),i&&x.push(I.bounce),a&&x.push(I.shake),o&&x.push(I.spin),c&&x.push(I.spinReverse),s&&x.push(I.spinPulse),l&&x.push(I.pulse),u&&x.push(L.fixedWidth),d&&x.push(L.inverse),f&&x.push(L.border),p===!0&&x.push(L.flip),(p===`horizontal`||p===`both`)&&x.push(L.flipHorizontal),(p===`vertical`||p===`both`)&&x.push(L.flipVertical),m!=null&&x.push(Ko[m]),h!=null&&h!==0&&x.push(Go[h]),g!=null&&x.push(Wo[g]),_&&x.push(L.swapOpacity),Ho()?(v&&x.push(L.rotateBy),y&&x.push(L.widthAuto),b&&x.push(L.canvasSquare),ee&&x.push(L.canvasRoomy),te&&x.push(I.flip360),ne&&x.push(I.buzz),re&&x.push(I.float),ie&&x.push(I.jello),ae&&x.push(I.spinSnap),oe&&x.push(I.spinSnap4),se&&x.push(I.spinSnap8),ce&&x.push(I.swing),le&&x.push(I.wag),(bo.cssPrefix||bo.familyPrefix||Uo)===Uo?x:x.map(ko)):x}function jo(e){if(e)return Jo(e)?e:xo.icon(e)}function Mo(e){return Object.keys(e)}var No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,I,Wo,Go,Ko,L,qo,Jo,Yo,Xo,Zo,Qo;function $o(){return($o=y((()=>{No=v(_(),1),Co(),g(),Po=(e,t)=>No.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}}),Fo=new Map,Io=1e3,Lo=Oo.bind(null,No.createElement),Ro=(e,t)=>{let n=(0,No.useId)();return e||(t?n:void 0)},zo=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},typeof process<`u`&&{}.FA_VERSION,Bo=`searchPseudoElementsFullScan`in bo&&typeof bo.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Vo=Number.parseInt(Bo)>=7,Ho=()=>Vo,Uo=`fa`,I={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},Wo={left:`fa-pull-left`,right:`fa-pull-right`},Go={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},Ko={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},L={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},qo={default:`fa-layers`},Jo=e=>typeof e==`object`&&`icon`in e&&!!e.icon,Yo=new zo(`FontAwesomeIcon`),Xo={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},Zo=new Set(Object.keys(Xo)),Qo=No.forwardRef((e,t)=>{let n={...Xo,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=Ro(c,!!i),d=Ro(s,!!o),f=jo(r);if(!f)return Yo.error(`Icon lookup is undefined`,r),null;let p=Ao(n),m=typeof l==`string`?xo.transform(l):l,h=jo(i),g=So(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return Yo.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of Mo(n))Zo.has(e)||(v[e]=n[e]);return Lo(_[0],v)}),Qo.displayName=`FontAwesomeIcon`,`${qo.default}${L.fixedWidth}`})))()}var es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs;function ws(){return(ws=y((()=>{es={prefix:`far`,iconName:`circle-info`,icon:[512,512,[`info-circle`],`f05a`,`M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-88c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l24 0 0 64-24 0zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z`]},ts={prefix:`far`,iconName:`arrows-rotate`,icon:[512,512,[128472,`refresh`,`sync`],`f021`,`M109 108.9c81.2-81.2 212.9-81.2 294.2 0l27.1 27.1-78.2 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l136.1 0c13.3 0 24-10.7 24-24l0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 78.1-27.1-27.1c-100-100-262.1-100-362 0-43.2 43.2-67.8 98.1-73.6 154.5-1.4 13.2 8.2 25 21.4 26.3s25-8.2 26.3-21.4C54 188.6 73.9 144.1 109 108.9zM510.7 282.5c1.4-13.2-8.2-25-21.4-26.3s-25 8.2-26.3 21.4c-4.7 45.8-24.7 90.4-59.8 125.5-81.2 81.2-212.9 81.2-294.2 0l-27.1-27.1 78.2 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 328c-13.3 0-24 10.7-24 24L0 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-78.1 27.1 27.1c100 100 262.1 100 362 0 43.2-43.2 67.8-98.1 73.6-154.5z`]},ns=ts,rs={prefix:`far`,iconName:`keyboard`,icon:[576,512,[9e3],`f11c`,`M64 112c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 112zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM176 320l224 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm-72-72c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16z`]},is={prefix:`far`,iconName:`angles-left`,icon:[448,512,[171,`angle-double-left`],`f100`,`M15.5 239c-9.4 9.4-9.4 24.6 0 33.9l160 160c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-143-143 143-143c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15.5 239zm352-160l-160 160c-9.4 9.4-9.4 24.6 0 33.9l160 160c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-143-143 143-143c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z`]},as={prefix:`far`,iconName:`angles-right`,icon:[448,512,[187,`angle-double-right`],`f101`,`M81.5 433l160-160c9.4-9.4 9.4-24.6 0-33.9L81.5 79c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l143 143-143 143c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zm192 0l160-160c9.4-9.4 9.4-24.6 0-33.9L273.5 79c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l143 143-143 143c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z`]},os={prefix:`far`,iconName:`font`,icon:[512,512,[],`f031`,`M256 32c9.5 0 18 5.5 21.9 14.2L451.1 432 472 432c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l22.5 0-35.9-80-213.2 0-35.9 80 22.5 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l20.9 0 173.2-385.8C238 37.5 246.5 32 256 32zm0 82.6L171 304 341 304 256 114.6z`]},ss={prefix:`far`,iconName:`rotate-left`,icon:[512,512,[`rotate-back`,`rotate-backward`,`undo-alt`],`f2ea`,`M14.8 1.8C23.8-1.9 34.1 .2 41 7L92.8 58.8c100.6-83.5 250.1-78.1 344.3 16.2 100 100 100 262.1 0 362s-262.1 100-362 0c-14.9-14.9-27.6-31.2-38.1-48.5-6.9-11.3-3.2-26.1 8.1-33s26.1-3.2 33 8.1c8.5 14 18.8 27.3 31 39.4 81.2 81.2 212.9 81.2 294.2 0s81.2-212.9 0-294.2c-75.5-75.5-194.6-80.8-276.2-16L177.1 143c6.9 6.9 8.9 17.2 5.2 26.2S169.8 184 160.1 184L24 184c-13.3 0-24-10.7-24-24L0 24C0 14.3 5.8 5.5 14.8 1.8zM48 81.9l0 54.1 54.1 0-54.1-54.1z`]},cs={prefix:`far`,iconName:`moon`,icon:[512,512,[9214,127769],`f186`,`M239.3 48.7c-107.1 8.5-191.3 98.1-191.3 207.3 0 114.9 93.1 208 208 208 33.3 0 64.7-7.8 92.6-21.7-103.4-23.4-180.6-115.8-180.6-226.3 0-65.8 27.4-125.1 71.3-167.3zM0 256c0-141.4 114.6-256 256-256 19.4 0 38.4 2.2 56.7 6.3 9.9 2.2 17.3 10.5 18.5 20.5s-4 19.8-13.1 24.4c-60.6 30.2-102.1 92.7-102.1 164.8 0 101.6 82.4 184 184 184 5 0 9.9-.2 14.8-.6 10.1-.8 19.6 4.8 23.8 14.1s2 20.1-5.3 27.1C387.3 484.8 324.8 512 256 512 114.6 512 0 397.4 0 256z`]},ls={prefix:`far`,iconName:`xmark`,icon:[384,512,[215,10005,10006,10060,128473,`close`,`multiply`,`remove`,`times`],`f00d`,`M7.5 105c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l151 151 151-151c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-151 151 151 151c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-151-151-151 151c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l151-151-151-151z`]},us={prefix:`far`,iconName:`sun-bright`,icon:[576,512,[`sun-alt`],`e28f`,`M288 432c13.3 0 24 10.7 24 24l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64c0-13.3 10.7-24 24-24zM129.6 380.4c9.4-9.4 24.6-9.4 34 0s9.4 24.6 0 34l-45.3 45.3c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l45.2-45.3zm282.8 0c9.4-9.4 24.6-9.4 34 0l45.3 45.3c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-45.3-45.3c-9.4-9.4-9.4-24.6 0-34zM288 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256zm0-208a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM88 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0zm464 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0zM84.3 52.3c9.4-9.4 24.6-9.4 33.9 0l45.3 45.2c9.4 9.4 9.4 24.6 0 34s-24.6 9.4-34 0L84.3 86.3c-9.4-9.4-9.4-24.6 0-33.9zm373.4 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-45.3 45.3c-9.4 9.4-24.6 9.4-34 0s-9.4-24.6 0-34l45.3-45.2zM288-32c13.3 0 24 10.7 24 24l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64c0-13.3 10.7-24 24-24z`]},ds={prefix:`far`,iconName:`right-left`,icon:[512,512,[`exchange-alt`],`f362`,`M377 0c-22.6 0-41 18.3-41 41l0 63-312 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l312 0 0 63c0 22.6 18.3 41 41 41 10.9 0 21.3-4.3 29-12l99-99c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17l-99-99c-7.7-7.7-18.1-12-29-12zm7 57.9l70.1 70.1-70.1 70.1 0-140.1zM176 360l0-63c0-22.6-18.3-41-41-41-10.9 0-21.3 4.3-29 12L7 367c-4.5 4.5-7 10.6-7 17s2.5 12.5 7 17l99 99c7.7 7.7 18.1 12 29 12 22.6 0 41-18.3 41-41l0-63 312 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-312 0zM57.9 384l70.1-70.1 0 140.1-70.1-70.1z`]},fs={prefix:`far`,iconName:`sliders`,icon:[512,512,[`sliders-h`],`f1de`,`M24 72C10.7 72 0 82.7 0 96s10.7 24 24 24l91.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 120c13.3 0 24-10.7 24-24s-10.7-24-24-24L268.3 72C258.1 39.5 227.8 16 192 16s-66.1 23.5-76.3 56L24 72zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24l251.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56l59.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-59.7 0c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56L24 232zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24l59.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 440c13.3 0 24-10.7 24-24s-10.7-24-24-24l-251.7 0c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56L24 392zm136 56a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM352 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM160 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z`]},ps={prefix:`far`,iconName:`check`,icon:[448,512,[10003,10004],`f00c`,`M438 68.5c10.8 7.7 13.2 22.7 5.5 33.5l-264 368c-4.1 5.7-10.5 9.4-17.5 9.9S148 478 143 473L7 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L157 419 404.5 74c7.7-10.8 22.7-13.2 33.5-5.5z`]},ms={prefix:`far`,iconName:`right-from-bracket`,icon:[512,512,[`sign-out-alt`],`f2f5`,`M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 64-112 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l112 0 0 64c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM368 200l0-30.1 86.1 86.1-86.1 86.1 0-30.1c0-13.3-10.7-24-24-24l-136 0 0-64 136 0c13.3 0 24-10.7 24-24zM168 80c13.3 0 24-10.7 24-24s-10.7-24-24-24L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l72 0z`]},hs={prefix:`far`,iconName:`user-group`,icon:[576,512,[128101,`user-friends`],`f500`,`M208 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM208 0a128 128 0 1 1 0 256 128 128 0 1 1 0-256zM176 352c-70.7 0-128 57.3-128 128l0 8c0 13.3-10.7 24-24 24S0 501.3 0 488l0-8c0-97.2 78.8-176 176-176l64 0c97.2 0 176 78.8 176 176l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8c0-70.7-57.3-128-128-128l-64 0zM343.3 240.6c10.2-12.3 18.8-26 25.4-40.7 9.2 5.2 19.9 8.2 31.3 8.2 35.3 0 64-28.7 64-64s-28.7-64-64-64c-7.6 0-14.9 1.3-21.6 3.7-4.1-15.8-10.3-30.7-18.3-44.4 12.4-4.7 25.9-7.3 39.9-7.3 61.9 0 112 50.1 112 112S461.9 256 400 256c-20.7 0-40.1-5.6-56.7-15.4zm92.6 130.7c-10.5-18.9-23.7-36.2-39.1-51.3l11.2 0c92.8 0 168 75.2 168 168 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-56.7-39.3-104.2-92.1-116.7z`]},gs={prefix:`far`,iconName:`gear`,icon:[512,512,[9881,`cog`],`f013`,`M205.5 92.7l13.7-60.7 73.6 0 13.7 60.7c1.7 7.4 6.8 13.6 13.8 16.7 10.8 4.8 21 10.7 30.4 17.6 6.1 4.5 14.1 5.9 21.4 3.6l59.5-18.5 36.8 63.8-45.8 42.3c-5.6 5.2-8.4 12.7-7.6 20.2 1.3 11.5 1.3 23.7 0 35.2-.8 7.6 2 15.1 7.6 20.2l45.8 42.3-36.8 63.8-59.5-18.5c-7.3-2.3-15.2-.9-21.4 3.6-9.4 6.9-19.6 12.9-30.4 17.6-7 3.1-12.1 9.3-13.8 16.7l-13.7 60.7-73.6 0-13.7-60.7c-1.7-7.4-6.8-13.6-13.8-16.7-10.8-4.8-21-10.7-30.4-17.6-6.1-4.5-14.1-5.9-21.4-3.6l-59.5 18.5-36.8-63.8 45.8-42.3c5.6-5.2 8.4-12.7 7.6-20.2-1.3-11.5-1.3-23.7 0-35.2 .8-7.6-2-15.1-7.6-20.2l-45.8-42.3 36.8-63.8 59.5 18.5c7.3 2.3 15.2 .9 21.4-3.6 9.4-6.9 19.6-12.9 30.4-17.6 7-3.1 12.1-9.3 13.8-16.7zM212.8-16c-18.7 0-34.9 13-39 31.2L161.2 70.8c-6.3 3.2-12.3 6.7-18.2 10.5L88.6 64.4c-17.9-5.6-37.2 2-46.5 18.2L-1.1 157.4c-9.3 16.2-6.2 36.7 7.5 49.4l41.9 38.7c-.3 6.9-.3 14 0 21L6.4 305.2c-13.7 12.7-16.9 33.2-7.5 49.4l43.2 74.8c9.3 16.2 28.7 23.7 46.5 18.2l54.5-16.9c5.9 3.8 11.9 7.3 18.2 10.5l12.6 55.6c4.1 18.2 20.3 31.2 39 31.2l86.4 0c18.7 0 34.9-13 39-31.2l12.6-55.6c6.3-3.2 12.3-6.7 18.2-10.5l54.5 16.9c17.9 5.6 37.2-2 46.5-18.2l43.2-74.8c9.3-16.2 6.2-36.7-7.5-49.4l-41.9-38.7c.3-6.9 .3-14 0-21l41.9-38.7c13.7-12.7 16.8-33.2 7.5-49.4L470 82.6c-9.4-16.2-28.7-23.7-46.5-18.2L369 81.3c-5.9-3.8-11.9-7.3-18.2-10.5L338.3 15.2C334.1-3 317.9-16 299.2-16l-86.4 0zM304 256a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-96a96 96 0 1 0 0 192 96 96 0 1 0 0-192z`]},_s={prefix:`far`,iconName:`building`,icon:[384,512,[61687,127970],`f1ad`,`M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l80 0 0-80c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 80 80 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm96 48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z`]},vs={prefix:`far`,iconName:`thumbtack-angle-slash`,icon:[576,512,[],`e752`,`M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-180.7-180.7 105.7-122.6 9.2 9.2c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-4-4-50.9-50.9-140.6-140.6L369 6.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L344.2 50.1 221.6 155.8 41-24.9zM255.7 189.8l122.6-105.7 81.6 81.6-105.7 122.6-98.5-98.5zM104.3 174.2c-20 14.2-22.7 43.3-5.1 60.9L309 444.7c17.6 17.6 46.6 15 60.9-5.1L104.3 174.2zm48.9 182.7L39 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l114.2-114.2-33.9-33.9z`]},ys={prefix:`far`,iconName:`right-to-bracket`,icon:[512,512,[`sign-in-alt`],`f2f6`,`M201 95L345 239c9.4 9.4 9.4 24.6 0 33.9L201 417c-6.9 6.9-17.2 8.9-26.2 5.2S160 409.7 160 400l0-64-112 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l112 0 0-64c0-9.7 5.8-18.5 14.8-22.2S194.1 88.2 201 95zm7 217l0 30.1 86.1-86.1-86.1-86.1 0 30.1c0 13.3-10.7 24-24 24l-136 0 0 64 136 0c6.4 0 12.5 2.5 17 7s7 10.6 7 17zM344 432l72 0c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48l-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`]},bs={prefix:`far`,iconName:`thumbtack-angle`,icon:[512,512,[],`e751`,`M303.1 6.9c9.4-9.4 24.6-9.4 33.9 0 4 4 50.9 50.9 140.6 140.6L505.2 175c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-9.2-9.2-92 106.8c6.2 43.1-2.8 88.3-28 126.9l-3.2 4.9c-20.1-13.1-20.1-13.1 0 0-13.9 21.3-43.8 24.4-61.8 6.4L67.4 235c-18-18-14.8-47.9 6.4-61.8l4.8-3.2c38.6-25.2 83.8-34.2 126.9-28l106.8-92-9.2-9.2c-9.4-9.4-9.4-24.6 0-33.9zm43.2 77.2L228.3 185.9c-5.7 4.9-13.3 6.9-20.7 5.3-33.2-7.1-68.8-1.7-99.3 16.9L304 403.8c18.6-30.5 24-66 16.9-99.3-1.6-7.3 .4-15 5.3-20.7L428 165.7 346.4 84.1zM121.3 356.9L155.2 390.8 41.1 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L121.3 356.9z`]},xs={prefix:`far`,iconName:`magnifying-glass`,icon:[512,512,[128269,`search`],`f002`,`M368 208a160 160 0 1 0 -320 0 160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z`]},Ss={prefix:`far`,iconName:`display`,icon:[512,512,[],`e163`,`M64 80c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-115.7 0 8 48 51.7 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-272 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l51.7 0 8-48-115.7 0c-35.3 0-64-28.7-64-64L0 96zM228.3 416l-8 48 71.3 0-8-48-55.3 0z`]},Cs={prefix:`far`,iconName:`sidebar`,icon:[512,512,[],`e24e`,`M0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM176 240c0-13.3-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24zm0 88c0-13.3-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24zm48 72l224 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16l-224 0 0 288zM176 152c0-13.3-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24z`]}})))()}function Ts(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}function Es(e,t){if(!e||!t)return!1;let n=t.getRootNode?.();if(e.contains(t))return!0;if(n&&c(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Ds(e){return`composedPath`in e?e.composedPath()[0]??e.target:e.target}function Os(){return(Os=y((()=>{r()})))()}function ks(){let t=e(js.create).current;return it(t.disposeEffect),t}var As,js;function Ms(){return(Ms=y((()=>{f(),ot(),As=0,js=class e{static create(){return new e}currentId=As;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=As,t()},e)}isStarted(){return this.currentId!==As}clear=()=>{this.currentId!==As&&(clearTimeout(this.currentId),this.currentId=As)};disposeEffect=()=>this.clear}})))()}function Ns(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ps(e){if(Array.isArray(e))return e}function Fs(e){if(Array.isArray(e))return Ns(e)}function Is(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Ls(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,qs(r.key),r)}}function Rs(e,t,n){return t&&Ls(e.prototype,t),n&&Ls(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function zs(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Ys(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function R(e,t,n){return(t=qs(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bs(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Vs(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Hs(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Us(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ws(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ws(Object(n),!0).forEach(function(t){R(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ws(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Gs(e,t){return Ps(e)||Vs(e,t)||Ys(e,t)||Hs()}function B(e){return Fs(e)||Bs(e)||Ys(e)||Us()}function Ks(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function qs(e){var t=Ks(e,`string`);return typeof t==`symbol`?t:t+``}function Js(e){"@babel/helpers - typeof";return Js=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Js(e)}function Ys(e,t){if(e){if(typeof e==`string`)return Ns(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ns(e,t):void 0}}function Xs(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[W]}})}function Zs(e){var t=H.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Qs(e){return e===``?!0:e===`false`?!1:e===`true`||e}function $s(e){return Fd.push(e),function(){Fd.splice(Fd.indexOf(e),1)}}function ec(e){if(e&&U){var t=H.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=H.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return H.head.insertBefore(t,r),e}}function tc(){for(var e=12,t=``;e-->0;)t+=Id[Math.random()*62|0];return t}function nc(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function rc(e){return e.classList?nc(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function ic(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function ac(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${ic(e[n])}" `},``).trim()}function oc(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function sc(e){return e.size!==J.size||e.x!==J.x||e.y!==J.y||e.rotate!==J.rotate||e.flipX||e.flipY}function cc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function lc(e){var t=e.transform,n=e.width,r=n===void 0?od:n,i=e.height,a=i===void 0?od:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&Il?`translate(${t.x/q-r/2}em, ${t.y/q-a/2}em) `:s?`translate(calc(-50% + ${t.x/q}em), calc(-50% + ${t.y/q}em)) `:`translate(${t.x/q}em, ${t.y/q}em) `,c+=`scale(${t.size/q*(t.flipX?-1:1)}, ${t.size/q*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}function uc(){var e=sd,t=cd,n=K.cssPrefix,r=K.replacementClass,i=Ld;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}function dc(){K.autoAddCss&&!Rd&&(ec(uc()),Rd=!0)}function fc(e){U&&(Hd?setTimeout(e,0):Bd.push(e))}function pc(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?ic(e):`<${t} ${ac(r)}>${a.map(pc).join(``)}</${t}>`}function mc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function hc(e){return B(e).length===1?e.codePointAt(0).toString(16):null}function gc(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function _c(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=gc(t);typeof X.hooks.addPack==`function`&&!r?X.hooks.addPack(e,gc(t)):X.styles[e]=z(z({},X.styles[e]||{}),i),e===`fas`&&_c(`fa`,t)}function vc(e){return~jd.indexOf(e)}function yc(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!vc(i)?i:null}function bc(e,t){return(Xd[e]||{})[t]}function xc(e,t){return(Zd[e]||{})[t]}function Sc(e,t){return(ef[e]||{})[t]}function Cc(e){return Qd[e]||{prefix:null,iconName:null}}function wc(e){var t=$d[e],n=bc(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function Tc(){return Yd}function Ec(e){var t=W,n=qd.reduce(function(e,t){return e[t]=`${K.cssPrefix}-${t}`,e},{});return Iu.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Jd[r].includes(e)}))&&(t=r)}),t}function Dc(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?W:t,r=bd[n][e];if(n===Ul&&!e)return`fad`;var i=Sd[n][e]||Sd[n][r],a=e in X.styles?e:null;return i||a||null}function Oc(e){var t=[],n=null;return e.forEach(function(e){var r=yc(K.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function kc(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}function Ac(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=kc(e.filter(function(e){return rf.includes(e)})),a=kc(e.filter(function(e){return!rf.includes(e)})),o=Gs(i.filter(function(e){return r=e,!Hl.includes(e)}),1)[0],s=o===void 0?null:o,c=Ec(i),l=z(z({},Oc(a)),{},{prefix:Dc(s,{family:c})});return z(z(z({},l),Mc({values:e,family:c,styles:Gd,config:K,canonical:l,givenPrefix:r})),jc(n,r,l))}function jc(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Cc(i):{},o=Sc(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Gd.far&&Gd.fas&&!K.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}function Mc(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===Ul,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&af.includes(n)&&(Object.keys(s).find(function(e){return of.includes(e)})||l.autoFetchSvg)&&(r.prefix=zu.get(n).defaultShortPrefixId,r.iconName=Sc(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=Tc()||`fas`),r}function Nc(e,t){var n=t.mixoutsTo;return cf=e,lf={},Object.keys(uf).forEach(function(e){df.indexOf(e)===-1&&delete uf[e]}),cf.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Js(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){lf[e]||(lf[e]=[]),lf[e].push(r[e])})}e.provides&&e.provides(uf)}),n}function Pc(e,t){var n=[...arguments].slice(2);return(lf[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Fc(e){var t=[...arguments].slice(1);(lf[e]||[]).forEach(function(e){e.apply(null,t)})}function Ic(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return uf[e]?uf[e].apply(null,t):void 0}function Lc(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||Tc();if(t)return t=Sc(n,t)||t,mc(ff.definitions,n,t)||mc(X.styles,n,t)}function Rc(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return pc(e)})}}),Object.defineProperty(e,"node",{get:function(){if(U){var t=H.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function zc(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(sc(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=oc(z(z({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Bc(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${K.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:z(z({},i),{},{id:o}),children:r}]}]}function Vc(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Hc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[K.replacementClass,a?`${K.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:z(z({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Vc(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[ld]=``);var _=z(z({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:z({},l.styles)}),v=r.found&&n.found?Ic(`generateAbstractMask`,_)||{children:[],attributes:{}}:Ic(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Bc(_):zc(_)}function Uc(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=z(z({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[ld]=``);var l=z({},a.styles);sc(i)&&(l.transform=lc({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=oc(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Wc(e){var t=e.content,n=e.extra,r=z(z({},n.attributes),{},{class:n.classes.join(` `)}),i=oc(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}function Gc(e){var t=e[0],n=e[1],r=Gs(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${K.cssPrefix}-${Ad.GROUP}`},children:[{tag:`path`,attributes:{class:`${K.cssPrefix}-${Ad.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${K.cssPrefix}-${Ad.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}function Kc(e,t){!vd&&!K.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function qc(e,t){var n=t;return t===`fa`&&K.styleDefault!==null&&(t=Tc()),new Promise(function(r,i){if(n===`fa`){var a=Cc(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&mf[t]&&mf[t][e]){var o=mf[t][e];return r(Gc(o))}Kc(e,t),r(z(z({},hf),{},{icon:K.showMissingIcons&&e&&Ic(`missingIconAbstract`)||{}}))})}function Jc(e){return typeof(e.getAttribute?e.getAttribute(ld):null)==`string`}function Yc(e){var t=e.getAttribute?e.getAttribute(fd):null,n=e.getAttribute?e.getAttribute(pd):null;return t&&n}function Xc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(K.replacementClass)}function Zc(){return K.autoReplaceSvg===!0?Cf.replace:Cf[K.autoReplaceSvg]||Cf.replace}function Qc(e){return H.createElementNS(`http://www.w3.org/2000/svg`,e)}function $c(e){return H.createElement(e)}function el(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Qc:$c:t;if(typeof e==`string`)return H.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(el(e,{ceFn:n}))}),r}function tl(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}function nl(e){e()}function rl(e,t){var n=typeof t==`function`?t:Sf;if(e.length===0)n();else{var r=nl;K.mutateApproach===hd&&(r=V.requestAnimationFrame||nl),r(function(){var t=Zc(),r=xf.begin(`mutate`);e.map(t),r(),n()})}}function il(){wf=!0}function al(){wf=!1}function ol(e){if(Pl&&K.observeMutations){var t=e.treeCallback,n=t===void 0?Sf:t,r=e.nodeCallback,i=r===void 0?Sf:r,a=e.pseudoElementsCallback,o=a===void 0?Sf:a,s=e.observeMutationsRoot,c=s===void 0?H:s;Tf=new Pl(function(e){if(!wf){var t=Tc();nc(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Jc(e.addedNodes[0])&&(K.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&K.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Jc(e.target)&&~kd.indexOf(e.attributeName)){if(e.attributeName===`class`&&Yc(e.target)){var r=Ac(rc(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(fd,a||t),s&&e.target.setAttribute(pd,s)}else Xc(e.target)&&i(e.target)}})}}),U&&Tf.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sl(){Tf&&Tf.disconnect()}function cl(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function ll(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Ac(rc(e));return i.prefix||=Tc(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=xc(i.prefix,e.innerText)||bc(i.prefix,hc(e.innerText))),!i.iconName&&K.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function ul(e){return nc(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function dl(){return{iconName:null,prefix:null,transform:J,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ll(e),r=n.iconName,i=n.prefix,a=n.rest,o=ul(e),s=Pc(`parseNodeAttributes`,{},e);return z({iconName:r,prefix:i,transform:J,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?cl(e):[],attributes:o}},s)}function pl(e){var t=K.autoReplaceSvg===`nest`?fl(e,{styleParser:!1}):fl(e);return~t.extra.classes.indexOf(Dd)?Ic(`generateLayersText`,e,t):Ic(`generateSvgReplacementMutation`,e,t)}function ml(){return[].concat(B(Vu),B(ed))}function hl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var n=H.documentElement.classList,r=function(e){return n.add(`${md}-${e}`)},i=function(e){return n.remove(`${md}-${e}`)},a=K.autoFetchSvg?ml():Hl.concat(Object.keys(Ef));a.includes(`fa`)||a.push(`fa`);var o=[`.${Dd}:not([${ld}])`].concat(a.map(function(e){return`.${e}:not([${ld}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=nc(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=xf.begin(`onTree`),l=s.reduce(function(e,t){try{var n=pl(t);n&&e.push(n)}catch(e){vd||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){rl(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function gl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pl(e).then(function(e){e&&rl([e],t)})}function _l(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Lc(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Lc(i||{}),e(r,z(z({},n),{},{mask:i}))}}function vl(e){return hc(B(e.replace(Mf,``))[0]||``)}function yl(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Mf,``),r=n.codePointAt(0),i=r>=Nf[0]&&r<=Nf[1],a=n.length===2&&n[0]===n[1];return i||a||t}function bl(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Ff[n]||{})[i]||If[n]}function xl(e,t){var n=`${dd}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=nc(e.children).filter(function(e){return e.getAttribute(ud)===t})[0],o=V.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Od),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=bl(s,l),p=vl(d),m=c[0].startsWith(`FontAwesome`),h=yl(o),g=bc(f,p),_=g;if(m){var v=wc(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(fd)!==f||a.getAttribute(pd)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=dl(),b=y.extra;b.attributes[ud]=t,qc(g,f).then(function(i){var a=Hc(z(z({},y),{},{icons:{main:i,mask:nf()},prefix:f,iconName:_,extra:b,watchable:!0})),o=H.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return pc(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Sl(e){return Promise.all([xl(e,`::before`),xl(e,`::after`)])}function Cl(e){return e.parentNode!==document.head&&!~gd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ud)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function wl(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(U){var n;if(t)n=e;else if(K.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=zs(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=zs(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=zs(Rf(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){K.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=nc(n).filter(Cl).map(Sl),i=xf.begin(`searchPseudoElements`);il(),Promise.all(r).then(function(){i(),al(),e()}).catch(function(){i(),al(),t()})})}}function Tl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function El(e){return e.tag===`g`?e.children:[e]}var Dl,Ol,kl,Al,jl,Ml,Nl,V,H,Pl,Fl,U,Il,Ll,Rl,zl,Bl,Vl,Hl,W,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,G,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,K,Fd,q,J,Id,Ld,Rd,zd,Y,X,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,Z,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf;function Jf(){return(Jf=y((()=>{Dl=function(){},Ol={},kl={},Al=null,jl={mark:Dl,measure:Dl};try{typeof window<`u`&&(Ol=window),typeof document<`u`&&(kl=document),typeof MutationObserver<`u`&&(Al=MutationObserver),typeof performance<`u`&&(jl=performance)}catch{}Ml=(Ol.navigator||{}).userAgent,Nl=Ml===void 0?``:Ml,V=Ol,H=kl,Pl=Al,Fl=jl,V.document,U=!!H.documentElement&&!!H.head&&typeof H.addEventListener==`function`&&typeof H.createElement==`function`,Il=~Nl.indexOf(`MSIE`)||~Nl.indexOf(`Trident/`),Rl=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,zl=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Bl={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Vl={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Hl=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],W=`classic`,Ul=`duotone`,Wl=`sharp`,Gl=`sharp-duotone`,Kl=`chisel`,ql=`etch`,Jl=`graphite`,Yl=`jelly`,Xl=`jelly-duo`,Zl=`jelly-fill`,Ql=`mosaic`,$l=`notdog`,eu=`notdog-duo`,tu=`pixel`,nu=`slab`,ru=`slab-duo`,iu=`slab-press`,au=`slab-press-duo`,ou=`thumbprint`,su=`utility`,cu=`utility-duo`,lu=`utility-fill`,uu=`vellum`,du=`whiteboard`,fu=`Classic`,pu=`Duotone`,mu=`Sharp`,hu=`Sharp Duotone`,gu=`Chisel`,_u=`Etch`,vu=`Graphite`,yu=`Jelly`,bu=`Jelly Duo`,xu=`Jelly Fill`,Su=`Mosaic`,Cu=`Notdog`,wu=`Notdog Duo`,Tu=`Pixel`,Eu=`Slab`,Du=`Slab Duo`,Ou=`Slab Press`,ku=`Slab Press Duo`,Au=`Thumbprint`,ju=`Utility`,Mu=`Utility Duo`,Nu=`Utility Fill`,Pu=`Vellum`,Fu=`Whiteboard`,Iu=[W,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du],Ll={},R(R(R(R(R(R(R(R(R(R(Ll,W,fu),Ul,pu),Wl,mu),Gl,hu),Kl,gu),ql,_u),Jl,vu),Yl,yu),Xl,bu),Zl,xu),R(R(R(R(R(R(R(R(R(R(Ll,Ql,Su),$l,Cu),eu,wu),tu,Tu),nu,Eu),ru,Du),iu,Ou),au,ku),ou,Au),su,ju),R(R(R(R(Ll,cu,Mu),lu,Nu),uu,Pu),du,Fu),Lu={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Ru={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},zu=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Bu={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Vu=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Hu={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Uu=[`kit`],R(R({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`),Wu={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},Gu={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Ku={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},qu={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Yu={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Xu=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],Ju={},R(R(R(R(R(R(R(R(R(R(Ju,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),R(R(R(R(R(R(R(R(R(R(Ju,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),R(R(R(R(Ju,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),R(R({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`),Zu={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Qu={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},$u={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},ed=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Xu,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),td=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],nd=[1,2,3,4,5,6,7,8,9,10],rd=nd.concat([11,12,13,14,15,16,17,18,19,20]),id=[].concat(B(Object.keys(Qu)),td,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Yu.GROUP,Yu.SWAP_OPACITY,Yu.PRIMARY,Yu.SECONDARY],nd.map(function(e){return`${e}x`}),rd.map(function(e){return`w-${e}`})),ad={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},G=`___FONT_AWESOME___`,od=16,sd=`fa`,cd=`svg-inline--fa`,ld=`data-fa-i2svg`,ud=`data-fa-pseudo-element`,dd=`data-fa-pseudo-element-pending`,fd=`data-prefix`,pd=`data-icon`,md=`fontawesome-i2svg`,hd=`async`,gd=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],_d=[`::before`,`::after`,`:before`,`:after`],vd=function(){try{return!0}catch{return!1}}(),yd=z({},Bl),yd[W]=z(z(z(z({},{"fa-duotone":`duotone`}),Bl[W]),Hu.kit),Hu[`kit-duotone`]),bd=Xs(yd),xd=z({},Bu),xd[W]=z(z(z(z({},{duotone:`fad`}),xd[W]),qu.kit),qu[`kit-duotone`]),Sd=Xs(xd),Cd=z({},$u),Cd[W]=z(z({},Cd[W]),Ku.kit),wd=Xs(Cd),Td=z({},Zu),Td[W]=z(z({},Td[W]),Wu.kit),Xs(Td),Ed=Rl,Dd=`fa-layers-text`,Od=zl,Xs(z({},Lu)),kd=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Ad=Vl,jd=[].concat(B(Uu),B(id)),Md=V.FontAwesomeConfig||{},H&&typeof H.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Gs(e,2),n=t[0],r=t[1],i=Qs(Zs(n));i!=null&&(Md[r]=i)}),Nd={styleDefault:`solid`,familyDefault:W,cssPrefix:sd,replacementClass:cd,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Md.familyPrefix&&(Md.cssPrefix=Md.familyPrefix),Pd=z(z({},Nd),Md),Pd.autoReplaceSvg||(Pd.observeMutations=!1),K={},Object.keys(Nd).forEach(function(e){Object.defineProperty(K,e,{enumerable:!0,set:function(t){Pd[e]=t,Fd.forEach(function(e){return e(K)})},get:function(){return Pd[e]}})}),Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(e){Pd.cssPrefix=e,Fd.forEach(function(e){return e(K)})},get:function(){return Pd.cssPrefix}}),V.FontAwesomeConfig=K,Fd=[],q=od,J={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},Id=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`,Ld=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`,Rd=!1,zd={mixout:function(){return{dom:{css:uc,insertCss:dc}}},hooks:function(){return{beforeDOMElementCreation:function(){dc()},beforeI2svg:function(){dc()}}}},Y=V||{},Y[G]||(Y[G]={}),Y[G].styles||(Y[G].styles={}),Y[G].hooks||(Y[G].hooks={}),Y[G].shims||(Y[G].shims=[]),X=Y[G],Bd=[],Vd=function(){H.removeEventListener(`DOMContentLoaded`,Vd),Hd=1,Bd.map(function(e){return e()})},Hd=!1,U&&(Hd=(H.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(H.readyState),Hd||H.addEventListener(`DOMContentLoaded`,Vd)),Ud=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Wd=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Ud(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l},Gd=X.styles,Kd=X.shims,qd=Object.keys(wd),Jd=qd.reduce(function(e,t){return e[t]=Object.keys(wd[t]),e},{}),Yd=null,Xd={},Zd={},Qd={},$d={},ef={},tf=function(){var e=function(e){return Wd(Gd,function(t,n,r){return t[r]=Wd(n,e,{}),t},{})};Xd=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Zd=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),ef=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Gd||K.autoFetchSvg,n=Wd(Kd,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Qd=n.names,$d=n.unicodes,Yd=Dc(K.styleDefault,{family:K.familyDefault})},$s(function(e){Yd=Dc(e.styleDefault,{family:K.familyDefault})}),tf(),nf=function(){return{prefix:null,iconName:null,rest:[]}},rf=ed.concat(Vu),af=Iu.filter(function(e){return e!==W||e!==Ul}),of=Object.keys($u).filter(function(e){return e!==W}).map(function(e){return Object.keys($u[e])}).flat(),sf=function(){function e(){Is(this,e),this.definitions={}}return Rs(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=z(z({},e.definitions[n]||{}),t[n]),_c(n,t[n]);var r=wd[W][n];r&&_c(r,t[n]),tf()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),cf=[],lf={},uf={},df=Object.keys(uf),ff=new sf,Z={noAuto:function(){K.autoReplaceSvg=!1,K.observeMutations=!1,Fc(`noAuto`)},config:K,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(Fc(`beforeI2svg`,e),Ic(`pseudoElements2svg`,e),Ic(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,fc(function(){pf({autoReplaceSvgRoot:t}),Fc(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Js(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Sc(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Dc(e[0]);return{prefix:n,iconName:Sc(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${K.cssPrefix}-`)>-1||e.match(Ed))){var r=Ac(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||Tc(),iconName:Sc(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=Tc();return{prefix:i,iconName:Sc(i,e)||e}}}},library:ff,findIconDefinition:Lc,toHtml:pc},pf=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?H:e;(Object.keys(X.styles).length>0||K.autoFetchSvg)&&U&&K.autoReplaceSvg&&Z.dom.i2svg({node:t})},mf=X.styles,hf={found:!1,width:512,height:512},gf=function(){},_f=K.measurePerformance&&Fl&&Fl.mark&&Fl.measure?Fl:{mark:gf,measure:gf},vf=`FA "7.3.1"`,yf=function(e){return _f.mark(`${vf} ${e} begins`),function(){return bf(e)}},bf=function(e){_f.mark(`${vf} ${e} ends`),_f.measure(`${vf} ${e}`,`${vf} ${e} begins`,`${vf} ${e} ends`)},xf={begin:yf,end:bf},Sf=function(){},Cf={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(el(e),t)}),t.getAttribute(ld)===null&&K.keepOriginalSource){var n=H.createComment(tl(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~rc(t).indexOf(K.replacementClass))return Cf.replace(e);var r=RegExp(`${K.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===K.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return pc(e)}).join(`
`);t.setAttribute(ld,``),t.innerHTML=a}},wf=!1,Tf=null,Ef=X.styles,Df=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?J:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Rc(z({type:`icon`},e),function(){return Fc(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Hc({icons:{main:Gc(v),mask:s?Gc(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:z(z({},J),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Of={mixout:function(){return{icon:_l(Df)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=hl,e.nodeCallback=gl,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?H:t,r=e.callback;return hl(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([qc(n,r),o.iconName?qc(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Gs(o,2),u=l[0],d=l[1];t([e,Hc({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=oc(a);o.length>0&&(n.style=o);var s;return sc(i)&&(s=Ic(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},kf={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Rc({type:`layer`},function(){Fc(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${K.cssPrefix}-layers`].concat(B(r)).join(` `)},children:n}]})}}}},Af={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Rc({type:`counter`,content:e},function(){return Fc(`beforeDOMElementCreation`,{content:e,params:t}),Wc({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${K.cssPrefix}-layers-counter`].concat(B(a))}})})}}}},jf={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?J:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Rc({type:`text`,content:e},function(){return Fc(`beforeDOMElementCreation`,{content:e,params:t}),Uc({content:e,transform:z(z({},J),r),extra:{attributes:s,styles:l,classes:[`${K.cssPrefix}-layers-text`].concat(B(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Il){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Uc({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Mf=RegExp(`"`,`ug`),Nf=[1105920,1112319],Pf=z(z(z(z({},{FontAwesome:{normal:`fas`,400:`fas`}}),Ru),ad),Gu),Ff=Object.keys(Pf).reduce(function(e,t){return e[t.toLowerCase()]=Pf[t],e},{}),If=Object.keys(Ff).reduce(function(e,t){var n=Ff[t];return e[t]=n[900]||B(Object.entries(n))[0][1],e},{}),Lf=function(e){return!!e&&_d.some(function(t){return e.includes(t)})},Rf=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=zs(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Lf(a)){var o=_d.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t},zf={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=wl,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?H:t;K.searchPseudoElements&&wl(n)}}},Bf=!1,Vf={mixout:function(){return{dom:{unwatch:function(){il(),Bf=!0}}}},hooks:function(){return{bootstrap:function(){ol(Pc(`mutationObserverCallbacks`,{}))},noAuto:function(){sl()},watch:function(e){var t=e.observeMutationsRoot;Bf?al():ol(Pc(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Hf=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Uf={mixout:function(){return{parse:{transform:function(e){return Hf(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Hf(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:z({},a.outer),children:[{tag:`g`,attributes:z({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:z(z({},t.icon.attributes),a.path)}]}]}}}},Wf={x:0,y:0,width:`100%`,height:`100%`},Nc([zd,Of,kf,Af,jf,zf,Vf,Uf,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Ac(n.split(` `).map(function(e){return e.trim()})):nf();return r.prefix||=Tc(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=cc({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:z(z({},Wf),{},{fill:`white`})},p=c.children?{children:c.children.map(Tl)}:{},m={tag:`g`,attributes:z({},d.inner),children:[Tl(z({tag:c.tag,attributes:z(z({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:z({},d.outer),children:[m]},g=`mask-${a||tc()}`,_=`clip-${a||tc()}`,v={tag:`mask`,attributes:z(z({},Wf),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:El(u)},v]};return t.push(y,{tag:`rect`,attributes:z({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Wf)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;V.matchMedia&&(t=V.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:z(z({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=z(z({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:z(z({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:z(z({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:z(z({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:z(z({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:z(z({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:z(z({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:z(z({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Z}),Z.noAuto,Gf=Z.config,Z.library,Z.dom,Kf=Z.parse,Z.findIconDefinition,Z.toHtml,qf=Z.icon,Z.layer,Z.text,Z.counter})))()}function Yf(e){return e-=0,e===e}function Xf(e){return Yf(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}function Zf(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Qf(e){if(op.has(e))return op.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Xf(n);t[e.startsWith(`webkit`)?Zf(e):e]=r}}}n=a+1}if(op.size===sp){let e=op.keys().next().value;e&&op.delete(e)}return op.set(e,t),t}function $f(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),$f(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Qf(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Xf(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(ap)))}return e(t.tag,{...a,...u},...r)}function ep(e){let t=Gf.cssPrefix||Gf.familyPrefix||mp;return t===mp?e:e.replace(new RegExp(String.raw`(?<=^|\s)${mp}-`,`g`),`${t}-`)}function tp(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:b,canvasRoomy:ee,flip360:te,buzz:ne,float:re,jello:ie,spinSnap:ae,spinSnap4:oe,spinSnap8:se,swing:ce,wag:le,className:ue}=e,x=[];return ue&&x.push(...ue.split(` `)),t&&x.push(Q.beat),n&&x.push(Q.fade),r&&x.push(Q.beatFade),i&&x.push(Q.bounce),a&&x.push(Q.shake),o&&x.push(Q.spin),c&&x.push(Q.spinReverse),s&&x.push(Q.spinPulse),l&&x.push(Q.pulse),u&&x.push($.fixedWidth),d&&x.push($.inverse),f&&x.push($.border),p===!0&&x.push($.flip),(p===`horizontal`||p===`both`)&&x.push($.flipHorizontal),(p===`vertical`||p===`both`)&&x.push($.flipVertical),m!=null&&x.push(_p[m]),h!=null&&h!==0&&x.push(gp[h]),g!=null&&x.push(hp[g]),_&&x.push($.swapOpacity),pp()?(v&&x.push($.rotateBy),y&&x.push($.widthAuto),b&&x.push($.canvasSquare),ee&&x.push($.canvasRoomy),te&&x.push(Q.flip360),ne&&x.push(Q.buzz),re&&x.push(Q.float),ie&&x.push(Q.jello),ae&&x.push(Q.spinSnap),oe&&x.push(Q.spinSnap4),se&&x.push(Q.spinSnap8),ce&&x.push(Q.swing),le&&x.push(Q.wag),(Gf.cssPrefix||Gf.familyPrefix||mp)===mp?x:x.map(ep)):x}function np(e){if(e)return yp(e)?e:Kf.icon(e)}function rp(e){return Object.keys(e)}var ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,Q,hp,gp,_p,$,vp,yp,bp,xp,Sp,Cp;function wp(){return(wp=y((()=>{ip=v(_(),1),Jf(),g(),ap=(e,t)=>ip.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}}),op=new Map,sp=1e3,cp=$f.bind(null,ip.createElement),lp=(e,t)=>{let n=(0,ip.useId)();return e||(t?n:void 0)},up=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},typeof process<`u`&&{}.FA_VERSION,dp=`searchPseudoElementsFullScan`in Gf&&typeof Gf.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,fp=Number.parseInt(dp)>=7,pp=()=>fp,mp=`fa`,Q={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},hp={left:`fa-pull-left`,right:`fa-pull-right`},gp={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},_p={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},$={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},vp={default:`fa-layers`},yp=e=>typeof e==`object`&&`icon`in e&&!!e.icon,bp=new up(`FontAwesomeIcon`),xp={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},Sp=new Set(Object.keys(xp)),Cp=ip.forwardRef((e,t)=>{let n={...xp,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=lp(c,!!i),d=lp(s,!!o),f=np(r);if(!f)return bp.error(`Icon lookup is undefined`,r),null;let p=tp(n),m=typeof l==`string`?Kf.transform(l):l,h=np(i),g=qf(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return bp.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of rp(n))Sp.has(e)||(v[e]=n[e]);return cp(_[0],v)}),Cp.displayName=`FontAwesomeIcon`,`${vp.default}${$.fixedWidth}`})))()}export{Je as $,vs as A,$e as B,ys as C,b as Ct,us as D,fs as E,$o as F,Ge as G,qe as H,ot as I,Qe as J,We as K,it as L,ls as M,ws as N,ns as O,Qo as P,Ve as Q,rt as R,ds as S,ee as St,Cs as T,Ue as U,et as V,Ye as W,Ke as X,He as Y,Le as Z,gs as _,fe as _t,ks as a,Pe as at,cs as b,re as bt,Ds as c,ke as ct,as as d,we as dt,Be as et,_s as f,Ce as ft,os as g,ge as gt,Ss as h,_e as ht,Ms as i,Ie as it,hs as j,bs as k,Os as l,Ee as lt,es as m,ve as mt,wp as n,Re as nt,Ts as o,Ne as ot,ps as p,ye as pt,Xe as q,js as r,Ze as rt,Es as s,Ae as st,Cp as t,ze as tt,is as u,Te as ut,rs as v,ue as vt,ss as w,ms as x,te as xt,xs as y,x as yt,tt as z};