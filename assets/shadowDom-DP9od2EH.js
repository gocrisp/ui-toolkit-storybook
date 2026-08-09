import{E as e,H as t,I as n,J as r,K as i,R as a,T as o,U as s,Y as c,at as l,ft as u,q as d,w as f,z as p}from"./button-Cs51ASoK.js";import{b as m,n as h}from"./iframe-6Kmxc6tR.js";import{n as g,o as _}from"./rolldown-runtime-C0FnF6B9.js";function v(e){return e?.ownerDocument||document}function y(){return(y=g((()=>{n()})))()}function ee({controlled:e,default:t,name:n,state:r=`value`}){let{current:i}=te.useRef(e!==void 0),[a,o]=te.useState(t);return[i?e:a,te.useCallback(e=>{i||o(e)},[])]}var te;function ne(){return(ne=g((()=>{te=_(m(),1)})))()}var re,ie,ae,oe;function se(){return(se=g((()=>{re={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},ie={valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},ae={disabled:!1,...ie},oe={valid(e){return e===null?null:e?{"data-valid":``}:{"data-invalid":``}}}})))()}function ce(e,t=`mui`){let[n,r]=ue.useState(e),i=e||n;return ue.useEffect(()=>{n??(de+=1,r(`${t}-${de}`))},[n,t]),i}function le(e,t){if(b!==void 0){let n=b();return e??(t?`${t}-${n}`:n)}return ce(e,t)}var ue,de,b;function fe(){return(fe=g((()=>{ue=_(m(),1),c(),de=0,b=r.useId})))()}function pe(e){return le(e,`base-ui`)}function me(){return(me=g((()=>{fe()})))()}function he(e=!0){let t=ge.useContext(ve);if(t.setValidityData===o&&!e)throw Error(a(28));return t}var ge,_e,ve;function ye(){return(ye=g((()=>{p(),ge=_(m(),1),e(),se(),_e={invalid:void 0,name:void 0,validityData:{state:re,errors:[],error:``,value:``,initialValue:null},setValidityData:o,disabled:void 0,setTouched:o,setDirty:o,setFilled:o,setFocused:o,validationMode:`onSubmit`,shouldValidateOnChange:()=>!1,state:ae,registerFieldControl:o,validation:{getValidationProps:(e,t=f)=>t,inputRef:{current:null},registeredInputs:new Map,registerInput:o,getInputControl:()=>null,commit:async()=>{},change:o}},ve=ge.createContext(_e)})))()}function be(e,t,n,r,i=!0,a){let{registerFieldControl:o}=he(),c=d(()=>Symbol());s(()=>{let s=c.current;if(!i){o(s,void 0);return}o(s,{controlRef:e,getValue:r,id:t,name:a,value:n})},[e,i,r,t,a,o,c,n]),s(()=>{let e=c.current;return()=>{o(e,void 0)}},[o,c])}function xe(){return(xe=g((()=>{t(),i(),ye()})))()}function Se(){return Ce.useContext(we)}var Ce,we;function Te(){return(Te=g((()=>{Ce=_(m(),1),e(),we=Ce.createContext({elementRef:{current:null},formRef:{current:{fields:new Map}},errors:{},clearErrors:o,validationMode:`onSubmit`,submitAttemptedRef:{current:!1}})})))()}function Ee(){return De.useContext(Oe)}var De,Oe;function ke(){return(ke=g((()=>{De=_(m(),1),e(),Oe=De.createContext({controlId:void 0,registerControlId:o,labelId:void 0,setLabelId:o,messageIds:[],setMessageIds:o,getDescriptionProps:e=>e})})))()}var Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We;function Ge(){return(Ge=g((()=>{Ae=`none`,je=`trigger-press`,Me=`trigger-hover`,Ne=`trigger-focus`,Pe=`outside-press`,Fe=`item-press`,Ie=`close-press`,Le=`focus-out`,Re=`escape-key`,ze=`list-navigation`,Be=`cancel-open`,Ve=`sibling-open`,He=`disabled`,Ue=`imperative-action`,We=`window-resize`})))()}function Ke(e,t,n,r){let i=!1,a=!1,o=r??f;return{reason:e,event:t??new Event(`base-ui`),cancel(){i=!0},allowPropagation(){a=!0},get isCanceled(){return i},get isPropagationAllowed(){return a},trigger:n,...o}}function qe(){return(qe=g((()=>{e()})))()}function Je(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ye(e){if(Array.isArray(e))return e}function Xe(e){if(Array.isArray(e))return Je(e)}function Ze(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Qe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,ct(r.key),r)}}function $e(e,t,n){return t&&Qe(e.prototype,t),n&&Qe(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function et(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=ut(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function x(e,t,n){return(t=ct(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tt(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function nt(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function rt(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function it(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function at(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?at(Object(n),!0).forEach(function(t){x(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):at(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ot(e,t){return Ye(e)||nt(e,t)||ut(e,t)||rt()}function C(e){return Xe(e)||tt(e)||ut(e)||it()}function st(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ct(e){var t=st(e,`string`);return typeof t==`symbol`?t:t+``}function lt(e){"@babel/helpers - typeof";return lt=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},lt(e)}function ut(e,t){if(e){if(typeof e==`string`)return Je(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Je(e,t):void 0}}function dt(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[M]}})}function ft(e){var t=A.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function pt(e){return e===``?!0:e===`false`?!1:e===`true`||e}function mt(e){return z.push(e),function(){z.splice(z.indexOf(e),1)}}function ht(e){if(!(!e||!j)){var t=A.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=A.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return A.head.insertBefore(t,r),e}}function gt(){for(var e=12,t=``;e-->0;)t+=Hi[Math.random()*62|0];return t}function w(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function _t(e){return e.classList?w(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function vt(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function yt(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${vt(e[n])}" `},``).trim()}function bt(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function xt(e){return e.size!==V.size||e.x!==V.x||e.y!==V.y||e.rotate!==V.rotate||e.flipX||e.flipY}function St(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Ct(e){var t=e.transform,n=e.width,r=n===void 0?gi:n,i=e.height,a=i===void 0?gi:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&qn?`translate(${t.x/B-r/2}em, ${t.y/B-a/2}em) `:s?`translate(calc(-50% + ${t.x/B}em), calc(-50% + ${t.y/B}em)) `:`translate(${t.x/B}em, ${t.y/B}em) `,c+=`scale(${t.size/B*(t.flipX?-1:1)}, ${t.size/B*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}function wt(){var e=_i,t=vi,n=R.cssPrefix,r=R.replacementClass,i=Ui;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}function Tt(){R.autoAddCss&&!Wi&&(ht(wt()),Wi=!0)}function Et(e){j&&(Ji?setTimeout(e,0):Ki.push(e))}function Dt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?vt(e):`<${t} ${yt(r)}>${a.map(Dt).join(``)}</${t}>`}function Ot(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function kt(e){return C(e).length===1?e.codePointAt(0).toString(16):null}function At(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function jt(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=At(t);typeof U.hooks.addPack==`function`&&!r?U.hooks.addPack(e,At(t)):U.styles[e]=S(S({},U.styles[e]||{}),i),e===`fas`&&jt(`fa`,t)}function Mt(e){return~Bi.indexOf(e)}function Nt(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Mt(i)?i:null}function Pt(e,t){return(ta[e]||{})[t]}function Ft(e,t){return(na[e]||{})[t]}function T(e,t){return(aa[e]||{})[t]}function It(e){return ra[e]||{prefix:null,iconName:null}}function Lt(e){var t=ia[e],n=Pt(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function E(){return ea}function Rt(e){var t=M,n=Qi.reduce(function(e,t){return e[t]=`${R.cssPrefix}-${t}`,e},{});return Kr.forEach(function(r){(e.includes(n[r])||e.some(function(e){return $i[r].includes(e)}))&&(t=r)}),t}function zt(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?M:t,r=ki[n][e];if(n===N&&!e)return`fad`;var i=ji[n][e]||ji[n][r],a=e in U.styles?e:null;return i||a||null}function Bt(e){var t=[],n=null;return e.forEach(function(e){var r=Nt(R.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Vt(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}function Ht(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=Vt(e.filter(function(e){return ca.includes(e)})),a=Vt(e.filter(function(e){return!ca.includes(e)})),o=ot(i.filter(function(e){return r=e,!$n.includes(e)}),1)[0],s=o===void 0?null:o,c=Rt(i),l=S(S({},Bt(a)),{},{prefix:zt(s,{family:c})});return S(S(S({},l),Wt({values:e,family:c,styles:W,config:R,canonical:l,givenPrefix:r})),Ut(n,r,l))}function Ut(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?It(i):{},o=T(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!W.far&&W.fas&&!R.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}function Wt(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===N,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&la.includes(n)&&(Object.keys(s).find(function(e){return ua.includes(e)})||l.autoFetchSvg)&&(r.prefix=Yr.get(n).defaultShortPrefixId,r.iconName=T(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=E()||`fas`),r}function Gt(e,t){var n=t.mixoutsTo;return fa=e,G={},Object.keys(K).forEach(function(e){pa.indexOf(e)===-1&&delete K[e]}),fa.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),lt(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){G[e]||(G[e]=[]),G[e].push(r[e])})}e.provides&&e.provides(K)}),n}function Kt(e,t){var n=[...arguments].slice(2);return(G[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function D(e){var t=[...arguments].slice(1);(G[e]||[]).forEach(function(e){e.apply(null,t)})}function O(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return K[e]?K[e].apply(null,t):void 0}function qt(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||E();if(t)return t=T(n,t)||t,Ot(ma.definitions,n,t)||Ot(U.styles,n,t)}function Jt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Dt(e)})}}),Object.defineProperty(e,"node",{get:function(){if(j){var t=A.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Yt(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(xt(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=bt(S(S({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Xt(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${R.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:S(S({},i),{},{id:o}),children:r}]}]}function Zt(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Qt(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[R.replacementClass,a?`${R.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:S(S({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Zt(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[F]=``);var _=S(S({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:S({},l.styles)}),v=r.found&&n.found?O(`generateAbstractMask`,_)||{children:[],attributes:{}}:O(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,ee=v.attributes;return _.children=y,_.attributes=ee,s?Xt(_):Yt(_)}function $t(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=S(S({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[F]=``);var l=S({},a.styles);xt(i)&&(l.transform=Ct({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=bt(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function en(e){var t=e.content,n=e.extra,r=S(S({},n.attributes),{},{class:n.classes.join(` `)}),i=bt(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}function tn(e){var t=e[0],n=e[1],r=ot(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${R.cssPrefix}-${zi.GROUP}`},children:[{tag:`path`,attributes:{class:`${R.cssPrefix}-${zi.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${R.cssPrefix}-${zi.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}function nn(e,t){!Di&&!R.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function rn(e,t){var n=t;return t===`fa`&&R.styleDefault!==null&&(t=E()),new Promise(function(r,i){if(n===`fa`){var a=It(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&ga[t]&&ga[t][e]){var o=ga[t][e];return r(tn(o))}nn(e,t),r(S(S({},_a),{},{icon:R.showMissingIcons&&e&&O(`missingIconAbstract`)||{}}))})}function an(e){return typeof(e.getAttribute?e.getAttribute(F):null)==`string`}function on(e){var t=e.getAttribute?e.getAttribute(xi):null,n=e.getAttribute?e.getAttribute(Si):null;return t&&n}function sn(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function cn(){return R.autoReplaceSvg===!0?wa.replace:wa[R.autoReplaceSvg]||wa.replace}function ln(e){return A.createElementNS(`http://www.w3.org/2000/svg`,e)}function un(e){return A.createElement(e)}function dn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?ln:un:t;if(typeof e==`string`)return A.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(dn(e,{ceFn:n}))}),r}function fn(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}function pn(e){e()}function mn(e,t){var n=typeof t==`function`?t:Ca;if(e.length===0)n();else{var r=pn;R.mutateApproach===wi&&(r=k.requestAnimationFrame||pn),r(function(){var t=cn(),r=Sa.begin(`mutate`);e.map(t),r(),n()})}}function hn(){Ta=!0}function gn(){Ta=!1}function _n(e){if(Gn&&R.observeMutations){var t=e.treeCallback,n=t===void 0?Ca:t,r=e.nodeCallback,i=r===void 0?Ca:r,a=e.pseudoElementsCallback,o=a===void 0?Ca:a,s=e.observeMutationsRoot,c=s===void 0?A:s;Ea=new Gn(function(e){if(!Ta){var t=E();w(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!an(e.addedNodes[0])&&(R.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&R.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&an(e.target)&&~Ri.indexOf(e.attributeName)){if(e.attributeName===`class`&&on(e.target)){var r=Ht(_t(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(xi,a||t),s&&e.target.setAttribute(Si,s)}else sn(e.target)&&i(e.target)}})}}),j&&Ea.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vn(){Ea&&Ea.disconnect()}function yn(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function bn(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Ht(_t(e));return i.prefix||=E(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Ft(i.prefix,e.innerText)||Pt(i.prefix,kt(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function xn(e){return w(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Sn(){return{iconName:null,prefix:null,transform:V,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Cn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=bn(e),r=n.iconName,i=n.prefix,a=n.rest,o=xn(e),s=Kt(`parseNodeAttributes`,{},e);return S({iconName:r,prefix:i,transform:V,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?yn(e):[],attributes:o}},s)}function wn(e){var t=R.autoReplaceSvg===`nest`?Cn(e,{styleParser:!1}):Cn(e);return~t.extra.classes.indexOf(Ii)?O(`generateLayersText`,e,t):O(`generateSvgReplacementMutation`,e,t)}function Tn(){return[].concat(C(Zr),C(ui))}function En(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var n=A.documentElement.classList,r=function(e){return n.add(`${Ci}-${e}`)},i=function(e){return n.remove(`${Ci}-${e}`)},a=R.autoFetchSvg?Tn():$n.concat(Object.keys(Da));a.includes(`fa`)||a.push(`fa`);var o=[`.${Ii}:not([${F}])`].concat(a.map(function(e){return`.${e}:not([${F}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=w(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Sa.begin(`onTree`),l=s.reduce(function(e,t){try{var n=wn(t);n&&e.push(n)}catch(e){Di||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){mn(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Dn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;wn(e).then(function(e){e&&mn([e],t)})}function On(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:qt(t||{}),i=n.mask;return i&&=(i||{}).icon?i:qt(i||{}),e(r,S(S({},n),{},{mask:i}))}}function kn(e){return kt(C(e.replace(Na,``))[0]||``)}function An(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Na,``),r=n.codePointAt(0),i=r>=Pa[0]&&r<=Pa[1],a=n.length===2&&n[0]===n[1];return i||a||t}function jn(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Ia[n]||{})[i]||La[n]}function Mn(e,t){var n=`${bi}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=w(e.children).filter(function(e){return e.getAttribute(yi)===t})[0],o=k.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Li),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=jn(s,l),p=kn(d),m=c[0].startsWith(`FontAwesome`),h=An(o),g=Pt(f,p),_=g;if(m){var v=Lt(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(xi)!==f||a.getAttribute(Si)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Sn(),ee=y.extra;ee.attributes[yi]=t,rn(g,f).then(function(i){var a=Qt(S(S({},y),{},{icons:{main:i,mask:sa()},prefix:f,iconName:_,extra:ee,watchable:!0})),o=A.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Dt(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Nn(e){return Promise.all([Mn(e,`::before`),Mn(e,`::after`)])}function Pn(e){return e.parentNode!==document.head&&!~Ti.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(yi)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function Fn(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(j){var n;if(t)n=e;else if(R.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=et(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=et(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=et(za(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){R.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=w(n).filter(Pn).map(Nn),i=Sa.begin(`searchPseudoElements`);hn(),Promise.all(r).then(function(){i(),gn(),e()}).catch(function(){i(),gn(),t()})})}}function In(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Ln(e){return e.tag===`g`?e.children:[e]}var Rn,zn,Bn,Vn,Hn,Un,Wn,k,A,Gn,Kn,j,qn,Jn,Yn,Xn,Zn,Qn,$n,M,N,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,P,gi,_i,vi,F,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,I,Vi,L,R,z,B,V,Hi,Ui,Wi,Gi,H,U,Ki,qi,Ji,Yi,Xi,W,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,G,K,pa,ma,q,ha,ga,_a,va,ya,J,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Y,Ka,qa;function Ja(){return(Ja=g((()=>{Rn=function(){},zn={},Bn={},Vn=null,Hn={mark:Rn,measure:Rn};try{typeof window<`u`&&(zn=window),typeof document<`u`&&(Bn=document),typeof MutationObserver<`u`&&(Vn=MutationObserver),typeof performance<`u`&&(Hn=performance)}catch{}Un=(zn.navigator||{}).userAgent,Wn=Un===void 0?``:Un,k=zn,A=Bn,Gn=Vn,Kn=Hn,k.document,j=!!A.documentElement&&!!A.head&&typeof A.addEventListener==`function`&&typeof A.createElement==`function`,qn=~Wn.indexOf(`MSIE`)||~Wn.indexOf(`Trident/`),Yn=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Xn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Zn={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Qn={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},$n=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],M=`classic`,N=`duotone`,er=`sharp`,tr=`sharp-duotone`,nr=`chisel`,rr=`etch`,ir=`graphite`,ar=`jelly`,or=`jelly-duo`,sr=`jelly-fill`,cr=`mosaic`,lr=`notdog`,ur=`notdog-duo`,dr=`pixel`,fr=`slab`,pr=`slab-duo`,mr=`slab-press`,hr=`slab-press-duo`,gr=`thumbprint`,_r=`utility`,vr=`utility-duo`,yr=`utility-fill`,br=`vellum`,xr=`whiteboard`,Sr=`Classic`,Cr=`Duotone`,wr=`Sharp`,Tr=`Sharp Duotone`,Er=`Chisel`,Dr=`Etch`,Or=`Graphite`,kr=`Jelly`,Ar=`Jelly Duo`,jr=`Jelly Fill`,Mr=`Mosaic`,Nr=`Notdog`,Pr=`Notdog Duo`,Fr=`Pixel`,Ir=`Slab`,Lr=`Slab Duo`,Rr=`Slab Press`,zr=`Slab Press Duo`,Br=`Thumbprint`,Vr=`Utility`,Hr=`Utility Duo`,Ur=`Utility Fill`,Wr=`Vellum`,Gr=`Whiteboard`,Kr=[M,N,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr],Jn={},x(x(x(x(x(x(x(x(x(x(Jn,M,Sr),N,Cr),er,wr),tr,Tr),nr,Er),rr,Dr),ir,Or),ar,kr),or,Ar),sr,jr),x(x(x(x(x(x(x(x(x(x(Jn,cr,Mr),lr,Nr),ur,Pr),dr,Fr),fr,Ir),pr,Lr),mr,Rr),hr,zr),gr,Br),_r,Vr),x(x(x(x(Jn,vr,Hr),yr,Ur),br,Wr),xr,Gr),qr={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Jr={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},Yr=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Xr={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Zr=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Qr={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},$r=[`kit`],x(x({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`),ei={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},ti={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},ni={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},ri={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},ai={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},oi=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],ii={},x(x(x(x(x(x(x(x(x(x(ii,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),x(x(x(x(x(x(x(x(x(x(ii,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),x(x(x(x(ii,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),x(x({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`),si={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},ci={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},li={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},ui=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(oi,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),di=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],fi=[1,2,3,4,5,6,7,8,9,10],pi=fi.concat([11,12,13,14,15,16,17,18,19,20]),mi=[].concat(C(Object.keys(ci)),di,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,ai.GROUP,ai.SWAP_OPACITY,ai.PRIMARY,ai.SECONDARY],fi.map(function(e){return`${e}x`}),pi.map(function(e){return`w-${e}`})),hi={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},P=`___FONT_AWESOME___`,gi=16,_i=`fa`,vi=`svg-inline--fa`,F=`data-fa-i2svg`,yi=`data-fa-pseudo-element`,bi=`data-fa-pseudo-element-pending`,xi=`data-prefix`,Si=`data-icon`,Ci=`fontawesome-i2svg`,wi=`async`,Ti=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ei=[`::before`,`::after`,`:before`,`:after`],Di=function(){try{return!0}catch{return!1}}(),Oi=S({},Zn),Oi[M]=S(S(S(S({},{"fa-duotone":`duotone`}),Zn[M]),Qr.kit),Qr[`kit-duotone`]),ki=dt(Oi),Ai=S({},Xr),Ai[M]=S(S(S(S({},{duotone:`fad`}),Ai[M]),ri.kit),ri[`kit-duotone`]),ji=dt(Ai),Mi=S({},li),Mi[M]=S(S({},Mi[M]),ni.kit),Ni=dt(Mi),Pi=S({},si),Pi[M]=S(S({},Pi[M]),ei.kit),dt(Pi),Fi=Yn,Ii=`fa-layers-text`,Li=Xn,dt(S({},qr)),Ri=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],zi=Qn,Bi=[].concat(C($r),C(mi)),I=k.FontAwesomeConfig||{},A&&typeof A.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=ot(e,2),n=t[0],r=t[1],i=pt(ft(n));i!=null&&(I[r]=i)}),Vi={styleDefault:`solid`,familyDefault:M,cssPrefix:_i,replacementClass:vi,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},I.familyPrefix&&(I.cssPrefix=I.familyPrefix),L=S(S({},Vi),I),L.autoReplaceSvg||(L.observeMutations=!1),R={},Object.keys(Vi).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(t){L[e]=t,z.forEach(function(e){return e(R)})},get:function(){return L[e]}})}),Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(e){L.cssPrefix=e,z.forEach(function(e){return e(R)})},get:function(){return L.cssPrefix}}),k.FontAwesomeConfig=R,z=[],B=gi,V={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},Hi=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`,Ui=`:root, :host {
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
}`,Wi=!1,Gi={mixout:function(){return{dom:{css:wt,insertCss:Tt}}},hooks:function(){return{beforeDOMElementCreation:function(){Tt()},beforeI2svg:function(){Tt()}}}},H=k||{},H[P]||(H[P]={}),H[P].styles||(H[P].styles={}),H[P].hooks||(H[P].hooks={}),H[P].shims||(H[P].shims=[]),U=H[P],Ki=[],qi=function(){A.removeEventListener(`DOMContentLoaded`,qi),Ji=1,Ki.map(function(e){return e()})},Ji=!1,j&&(Ji=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),Ji||A.addEventListener(`DOMContentLoaded`,qi)),Yi=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Xi=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Yi(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l},W=U.styles,Zi=U.shims,Qi=Object.keys(Ni),$i=Qi.reduce(function(e,t){return e[t]=Object.keys(Ni[t]),e},{}),ea=null,ta={},na={},ra={},ia={},aa={},oa=function(){var e=function(e){return Xi(W,function(t,n,r){return t[r]=Xi(n,e,{}),t},{})};ta=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),na=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),aa=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in W||R.autoFetchSvg,n=Xi(Zi,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});ra=n.names,ia=n.unicodes,ea=zt(R.styleDefault,{family:R.familyDefault})},mt(function(e){ea=zt(e.styleDefault,{family:R.familyDefault})}),oa(),sa=function(){return{prefix:null,iconName:null,rest:[]}},ca=ui.concat(Zr),la=Kr.filter(function(e){return e!==M||e!==N}),ua=Object.keys(li).filter(function(e){return e!==M}).map(function(e){return Object.keys(li[e])}).flat(),da=function(){function e(){Ze(this,e),this.definitions={}}return $e(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=S(S({},e.definitions[n]||{}),t[n]),jt(n,t[n]);var r=Ni[M][n];r&&jt(r,t[n]),oa()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),fa=[],G={},K={},pa=Object.keys(K),ma=new da,q={noAuto:function(){R.autoReplaceSvg=!1,R.observeMutations=!1,D(`noAuto`)},config:R,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(D(`beforeI2svg`,e),O(`pseudoElements2svg`,e),O(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,Et(function(){ha({autoReplaceSvgRoot:t}),D(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(lt(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:T(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=zt(e[0]);return{prefix:n,iconName:T(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${R.cssPrefix}-`)>-1||e.match(Fi))){var r=Ht(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||E(),iconName:T(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=E();return{prefix:i,iconName:T(i,e)||e}}}},library:ma,findIconDefinition:qt,toHtml:Dt},ha=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?A:e;(Object.keys(U.styles).length>0||R.autoFetchSvg)&&j&&R.autoReplaceSvg&&q.dom.i2svg({node:t})},ga=U.styles,_a={found:!1,width:512,height:512},va=function(){},ya=R.measurePerformance&&Kn&&Kn.mark&&Kn.measure?Kn:{mark:va,measure:va},J=`FA "7.3.1"`,ba=function(e){return ya.mark(`${J} ${e} begins`),function(){return xa(e)}},xa=function(e){ya.mark(`${J} ${e} ends`),ya.measure(`${J} ${e}`,`${J} ${e} begins`,`${J} ${e} ends`)},Sa={begin:ba,end:xa},Ca=function(){},wa={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(dn(e),t)}),t.getAttribute(F)===null&&R.keepOriginalSource){var n=A.createComment(fn(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~_t(t).indexOf(R.replacementClass))return wa.replace(e);var r=RegExp(`${R.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===R.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Dt(e)}).join(`
`);t.setAttribute(F,``),t.innerHTML=a}},Ta=!1,Ea=null,Da=U.styles,Oa=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?V:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Jt(S({type:`icon`},e),function(){return D(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Qt({icons:{main:tn(v),mask:s?tn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:S(S({},V),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},ka={mixout:function(){return{icon:On(Oa)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=En,e.nodeCallback=Dn,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?A:t,r=e.callback;return En(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([rn(n,r),o.iconName?rn(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=ot(o,2),u=l[0],d=l[1];t([e,Qt({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=bt(a);o.length>0&&(n.style=o);var s;return xt(i)&&(s=O(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Aa={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Jt({type:`layer`},function(){D(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${R.cssPrefix}-layers`].concat(C(r)).join(` `)},children:n}]})}}}},ja={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Jt({type:`counter`,content:e},function(){return D(`beforeDOMElementCreation`,{content:e,params:t}),en({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${R.cssPrefix}-layers-counter`].concat(C(a))}})})}}}},Ma={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?V:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Jt({type:`text`,content:e},function(){return D(`beforeDOMElementCreation`,{content:e,params:t}),$t({content:e,transform:S(S({},V),r),extra:{attributes:s,styles:l,classes:[`${R.cssPrefix}-layers-text`].concat(C(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(qn){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,$t({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Na=RegExp(`"`,`ug`),Pa=[1105920,1112319],Fa=S(S(S(S({},{FontAwesome:{normal:`fas`,400:`fas`}}),Jr),hi),ti),Ia=Object.keys(Fa).reduce(function(e,t){return e[t.toLowerCase()]=Fa[t],e},{}),La=Object.keys(Ia).reduce(function(e,t){var n=Ia[t];return e[t]=n[900]||C(Object.entries(n))[0][1],e},{}),Ra=function(e){return!!e&&Ei.some(function(t){return e.includes(t)})},za=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=et(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Ra(a)){var o=Ei.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t},Ba={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Fn,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?A:t;R.searchPseudoElements&&Fn(n)}}},Va=!1,Ha={mixout:function(){return{dom:{unwatch:function(){hn(),Va=!0}}}},hooks:function(){return{bootstrap:function(){_n(Kt(`mutationObserverCallbacks`,{}))},noAuto:function(){vn()},watch:function(e){var t=e.observeMutationsRoot;Va?gn():_n(Kt(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Ua=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Wa={mixout:function(){return{parse:{transform:function(e){return Ua(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Ua(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:S({},a.outer),children:[{tag:`g`,attributes:S({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:S(S({},t.icon.attributes),a.path)}]}]}}}},Ga={x:0,y:0,width:`100%`,height:`100%`},Gt([Gi,ka,Aa,ja,Ma,Ba,Ha,Wa,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Ht(n.split(` `).map(function(e){return e.trim()})):sa();return r.prefix||=E(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=St({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:S(S({},Ga),{},{fill:`white`})},p=c.children?{children:c.children.map(In)}:{},m={tag:`g`,attributes:S({},d.inner),children:[In(S({tag:c.tag,attributes:S(S({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:S({},d.outer),children:[m]},g=`mask-${a||gt()}`,_=`clip-${a||gt()}`,v={tag:`mask`,attributes:S(S({},Ga),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Ln(u)},v]};return t.push(y,{tag:`rect`,attributes:S({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Ga)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;k.matchMedia&&(t=k.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:S(S({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=S(S({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:S(S({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:S(S({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:S(S({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:S(S({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:S(S({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:S(S({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:S(S({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:q}),q.noAuto,Y=q.config,q.library,q.dom,Ka=q.parse,q.findIconDefinition,q.toHtml,qa=q.icon,q.layer,q.text,q.counter})))()}function Ya(e){return e-=0,e===e}function Xa(e){return Ya(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}function Za(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Qa(e){if(X.has(e))return X.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Xa(n);t[e.startsWith(`webkit`)?Za(e):e]=r}}}n=a+1}if(X.size===oo){let e=X.keys().next().value;e&&X.delete(e)}return X.set(e,t),t}function $a(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),$a(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Qa(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Xa(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(ao)))}return e(t.tag,{...a,...u},...r)}function eo(e){let t=Y.cssPrefix||Y.familyPrefix||Z;return t===Z?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Z}-`,`g`),`${t}-`)}function to(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:ee,canvasRoomy:te,flip360:ne,buzz:re,float:ie,jello:ae,spinSnap:oe,spinSnap4:se,spinSnap8:ce,swing:le,wag:ue,className:de}=e,b=[];return de&&b.push(...de.split(` `)),t&&b.push(Q.beat),n&&b.push(Q.fade),r&&b.push(Q.beatFade),i&&b.push(Q.bounce),a&&b.push(Q.shake),o&&b.push(Q.spin),c&&b.push(Q.spinReverse),s&&b.push(Q.spinPulse),l&&b.push(Q.pulse),u&&b.push($.fixedWidth),d&&b.push($.inverse),f&&b.push($.border),p===!0&&b.push($.flip),(p===`horizontal`||p===`both`)&&b.push($.flipHorizontal),(p===`vertical`||p===`both`)&&b.push($.flipVertical),m!=null&&b.push(go[m]),h!=null&&h!==0&&b.push(ho[h]),g!=null&&b.push(mo[g]),_&&b.push($.swapOpacity),po()?(v&&b.push($.rotateBy),y&&b.push($.widthAuto),ee&&b.push($.canvasSquare),te&&b.push($.canvasRoomy),ne&&b.push(Q.flip360),re&&b.push(Q.buzz),ie&&b.push(Q.float),ae&&b.push(Q.jello),oe&&b.push(Q.spinSnap),se&&b.push(Q.spinSnap4),ce&&b.push(Q.spinSnap8),le&&b.push(Q.swing),ue&&b.push(Q.wag),(Y.cssPrefix||Y.familyPrefix||Z)===Z?b:b.map(eo)):b}function no(e){if(e)return vo(e)?e:Ka.icon(e)}function ro(e){return Object.keys(e)}var io,ao,X,oo,so,co,lo,uo,fo,po,Z,Q,mo,ho,go,$,_o,vo,yo,bo,xo,So;function Co(){return(Co=g((()=>{io=_(m(),1),Ja(),h(),ao=(e,t)=>io.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}}),X=new Map,oo=1e3,so=$a.bind(null,io.createElement),co=(e,t)=>{let n=(0,io.useId)();return e||(t?n:void 0)},lo=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},typeof process<`u`&&{}.FA_VERSION,uo=`searchPseudoElementsFullScan`in Y&&typeof Y.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,fo=Number.parseInt(uo)>=7,po=()=>fo,Z=`fa`,Q={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},mo={left:`fa-pull-left`,right:`fa-pull-right`},ho={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},go={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},$={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},_o={default:`fa-layers`},vo=e=>typeof e==`object`&&`icon`in e&&!!e.icon,yo=new lo(`FontAwesomeIcon`),bo={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},xo=new Set(Object.keys(bo)),So=io.forwardRef((e,t)=>{let n={...bo,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=co(c,!!i),d=co(s,!!o),f=no(r);if(!f)return yo.error(`Icon lookup is undefined`,r),null;let p=to(n),m=typeof l==`string`?Ka.transform(l):l,h=no(i),g=qa(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return yo.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of ro(n))xo.has(e)||(v[e]=n[e]);return so(_[0],v)}),So.displayName=`FontAwesomeIcon`,`${_o.default}${$.fixedWidth}`})))()}var wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo;function Go(){return(Go=g((()=>{wo={prefix:`far`,iconName:`circle-info`,icon:[512,512,[`info-circle`],`f05a`,`M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-88c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l24 0 0 64-24 0zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z`]},To={prefix:`far`,iconName:`arrows-rotate`,icon:[512,512,[128472,`refresh`,`sync`],`f021`,`M109 108.9c81.2-81.2 212.9-81.2 294.2 0l27.1 27.1-78.2 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l136.1 0c13.3 0 24-10.7 24-24l0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 78.1-27.1-27.1c-100-100-262.1-100-362 0-43.2 43.2-67.8 98.1-73.6 154.5-1.4 13.2 8.2 25 21.4 26.3s25-8.2 26.3-21.4C54 188.6 73.9 144.1 109 108.9zM510.7 282.5c1.4-13.2-8.2-25-21.4-26.3s-25 8.2-26.3 21.4c-4.7 45.8-24.7 90.4-59.8 125.5-81.2 81.2-212.9 81.2-294.2 0l-27.1-27.1 78.2 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 328c-13.3 0-24 10.7-24 24L0 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-78.1 27.1 27.1c100 100 262.1 100 362 0 43.2-43.2 67.8-98.1 73.6-154.5z`]},Eo=To,Do={prefix:`far`,iconName:`keyboard`,icon:[576,512,[9e3],`f11c`,`M64 112c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 112zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM176 320l224 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm-72-72c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16z`]},Oo={prefix:`far`,iconName:`rotate-left`,icon:[512,512,[`rotate-back`,`rotate-backward`,`undo-alt`],`f2ea`,`M14.8 1.8C23.8-1.9 34.1 .2 41 7L92.8 58.8c100.6-83.5 250.1-78.1 344.3 16.2 100 100 100 262.1 0 362s-262.1 100-362 0c-14.9-14.9-27.6-31.2-38.1-48.5-6.9-11.3-3.2-26.1 8.1-33s26.1-3.2 33 8.1c8.5 14 18.8 27.3 31 39.4 81.2 81.2 212.9 81.2 294.2 0s81.2-212.9 0-294.2c-75.5-75.5-194.6-80.8-276.2-16L177.1 143c6.9 6.9 8.9 17.2 5.2 26.2S169.8 184 160.1 184L24 184c-13.3 0-24-10.7-24-24L0 24C0 14.3 5.8 5.5 14.8 1.8zM48 81.9l0 54.1 54.1 0-54.1-54.1z`]},ko={prefix:`far`,iconName:`moon`,icon:[512,512,[9214,127769],`f186`,`M239.3 48.7c-107.1 8.5-191.3 98.1-191.3 207.3 0 114.9 93.1 208 208 208 33.3 0 64.7-7.8 92.6-21.7-103.4-23.4-180.6-115.8-180.6-226.3 0-65.8 27.4-125.1 71.3-167.3zM0 256c0-141.4 114.6-256 256-256 19.4 0 38.4 2.2 56.7 6.3 9.9 2.2 17.3 10.5 18.5 20.5s-4 19.8-13.1 24.4c-60.6 30.2-102.1 92.7-102.1 164.8 0 101.6 82.4 184 184 184 5 0 9.9-.2 14.8-.6 10.1-.8 19.6 4.8 23.8 14.1s2 20.1-5.3 27.1C387.3 484.8 324.8 512 256 512 114.6 512 0 397.4 0 256z`]},Ao={prefix:`far`,iconName:`xmark`,icon:[384,512,[215,10005,10006,10060,128473,`close`,`multiply`,`remove`,`times`],`f00d`,`M7.5 105c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l151 151 151-151c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-151 151 151 151c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-151-151-151 151c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l151-151-151-151z`]},jo={prefix:`far`,iconName:`sun-bright`,icon:[576,512,[`sun-alt`],`e28f`,`M288 432c13.3 0 24 10.7 24 24l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64c0-13.3 10.7-24 24-24zM129.6 380.4c9.4-9.4 24.6-9.4 34 0s9.4 24.6 0 34l-45.3 45.3c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l45.2-45.3zm282.8 0c9.4-9.4 24.6-9.4 34 0l45.3 45.3c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-45.3-45.3c-9.4-9.4-9.4-24.6 0-34zM288 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256zm0-208a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM88 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0zm464 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0zM84.3 52.3c9.4-9.4 24.6-9.4 33.9 0l45.3 45.2c9.4 9.4 9.4 24.6 0 34s-24.6 9.4-34 0L84.3 86.3c-9.4-9.4-9.4-24.6 0-33.9zm373.4 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-45.3 45.3c-9.4 9.4-24.6 9.4-34 0s-9.4-24.6 0-34l45.3-45.2zM288-32c13.3 0 24 10.7 24 24l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64c0-13.3 10.7-24 24-24z`]},Mo={prefix:`far`,iconName:`right-left`,icon:[512,512,[`exchange-alt`],`f362`,`M377 0c-22.6 0-41 18.3-41 41l0 63-312 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l312 0 0 63c0 22.6 18.3 41 41 41 10.9 0 21.3-4.3 29-12l99-99c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17l-99-99c-7.7-7.7-18.1-12-29-12zm7 57.9l70.1 70.1-70.1 70.1 0-140.1zM176 360l0-63c0-22.6-18.3-41-41-41-10.9 0-21.3 4.3-29 12L7 367c-4.5 4.5-7 10.6-7 17s2.5 12.5 7 17l99 99c7.7 7.7 18.1 12 29 12 22.6 0 41-18.3 41-41l0-63 312 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-312 0zM57.9 384l70.1-70.1 0 140.1-70.1-70.1z`]},No={prefix:`far`,iconName:`sliders`,icon:[512,512,[`sliders-h`],`f1de`,`M24 72C10.7 72 0 82.7 0 96s10.7 24 24 24l91.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 120c13.3 0 24-10.7 24-24s-10.7-24-24-24L268.3 72C258.1 39.5 227.8 16 192 16s-66.1 23.5-76.3 56L24 72zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24l251.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56l59.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-59.7 0c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56L24 232zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24l59.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 440c13.3 0 24-10.7 24-24s-10.7-24-24-24l-251.7 0c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56L24 392zm136 56a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM352 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM160 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z`]},Po={prefix:`far`,iconName:`check`,icon:[448,512,[10003,10004],`f00c`,`M438 68.5c10.8 7.7 13.2 22.7 5.5 33.5l-264 368c-4.1 5.7-10.5 9.4-17.5 9.9S148 478 143 473L7 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L157 419 404.5 74c7.7-10.8 22.7-13.2 33.5-5.5z`]},Fo={prefix:`far`,iconName:`right-from-bracket`,icon:[512,512,[`sign-out-alt`],`f2f5`,`M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 64-112 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l112 0 0 64c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM368 200l0-30.1 86.1 86.1-86.1 86.1 0-30.1c0-13.3-10.7-24-24-24l-136 0 0-64 136 0c13.3 0 24-10.7 24-24zM168 80c13.3 0 24-10.7 24-24s-10.7-24-24-24L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l72 0z`]},Io={prefix:`far`,iconName:`user-group`,icon:[576,512,[128101,`user-friends`],`f500`,`M208 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM208 0a128 128 0 1 1 0 256 128 128 0 1 1 0-256zM176 352c-70.7 0-128 57.3-128 128l0 8c0 13.3-10.7 24-24 24S0 501.3 0 488l0-8c0-97.2 78.8-176 176-176l64 0c97.2 0 176 78.8 176 176l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8c0-70.7-57.3-128-128-128l-64 0zM343.3 240.6c10.2-12.3 18.8-26 25.4-40.7 9.2 5.2 19.9 8.2 31.3 8.2 35.3 0 64-28.7 64-64s-28.7-64-64-64c-7.6 0-14.9 1.3-21.6 3.7-4.1-15.8-10.3-30.7-18.3-44.4 12.4-4.7 25.9-7.3 39.9-7.3 61.9 0 112 50.1 112 112S461.9 256 400 256c-20.7 0-40.1-5.6-56.7-15.4zm92.6 130.7c-10.5-18.9-23.7-36.2-39.1-51.3l11.2 0c92.8 0 168 75.2 168 168 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-56.7-39.3-104.2-92.1-116.7z`]},Lo={prefix:`far`,iconName:`gear`,icon:[512,512,[9881,`cog`],`f013`,`M205.5 92.7l13.7-60.7 73.6 0 13.7 60.7c1.7 7.4 6.8 13.6 13.8 16.7 10.8 4.8 21 10.7 30.4 17.6 6.1 4.5 14.1 5.9 21.4 3.6l59.5-18.5 36.8 63.8-45.8 42.3c-5.6 5.2-8.4 12.7-7.6 20.2 1.3 11.5 1.3 23.7 0 35.2-.8 7.6 2 15.1 7.6 20.2l45.8 42.3-36.8 63.8-59.5-18.5c-7.3-2.3-15.2-.9-21.4 3.6-9.4 6.9-19.6 12.9-30.4 17.6-7 3.1-12.1 9.3-13.8 16.7l-13.7 60.7-73.6 0-13.7-60.7c-1.7-7.4-6.8-13.6-13.8-16.7-10.8-4.8-21-10.7-30.4-17.6-6.1-4.5-14.1-5.9-21.4-3.6l-59.5 18.5-36.8-63.8 45.8-42.3c5.6-5.2 8.4-12.7 7.6-20.2-1.3-11.5-1.3-23.7 0-35.2 .8-7.6-2-15.1-7.6-20.2l-45.8-42.3 36.8-63.8 59.5 18.5c7.3 2.3 15.2 .9 21.4-3.6 9.4-6.9 19.6-12.9 30.4-17.6 7-3.1 12.1-9.3 13.8-16.7zM212.8-16c-18.7 0-34.9 13-39 31.2L161.2 70.8c-6.3 3.2-12.3 6.7-18.2 10.5L88.6 64.4c-17.9-5.6-37.2 2-46.5 18.2L-1.1 157.4c-9.3 16.2-6.2 36.7 7.5 49.4l41.9 38.7c-.3 6.9-.3 14 0 21L6.4 305.2c-13.7 12.7-16.9 33.2-7.5 49.4l43.2 74.8c9.3 16.2 28.7 23.7 46.5 18.2l54.5-16.9c5.9 3.8 11.9 7.3 18.2 10.5l12.6 55.6c4.1 18.2 20.3 31.2 39 31.2l86.4 0c18.7 0 34.9-13 39-31.2l12.6-55.6c6.3-3.2 12.3-6.7 18.2-10.5l54.5 16.9c17.9 5.6 37.2-2 46.5-18.2l43.2-74.8c9.3-16.2 6.2-36.7-7.5-49.4l-41.9-38.7c.3-6.9 .3-14 0-21l41.9-38.7c13.7-12.7 16.8-33.2 7.5-49.4L470 82.6c-9.4-16.2-28.7-23.7-46.5-18.2L369 81.3c-5.9-3.8-11.9-7.3-18.2-10.5L338.3 15.2C334.1-3 317.9-16 299.2-16l-86.4 0zM304 256a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-96a96 96 0 1 0 0 192 96 96 0 1 0 0-192z`]},Ro={prefix:`far`,iconName:`building`,icon:[384,512,[61687,127970],`f1ad`,`M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l80 0 0-80c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 80 80 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm96 48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z`]},zo={prefix:`far`,iconName:`thumbtack-angle-slash`,icon:[576,512,[],`e752`,`M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-180.7-180.7 105.7-122.6 9.2 9.2c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-4-4-50.9-50.9-140.6-140.6L369 6.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L344.2 50.1 221.6 155.8 41-24.9zM255.7 189.8l122.6-105.7 81.6 81.6-105.7 122.6-98.5-98.5zM104.3 174.2c-20 14.2-22.7 43.3-5.1 60.9L309 444.7c17.6 17.6 46.6 15 60.9-5.1L104.3 174.2zm48.9 182.7L39 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l114.2-114.2-33.9-33.9z`]},Bo={prefix:`far`,iconName:`right-to-bracket`,icon:[512,512,[`sign-in-alt`],`f2f6`,`M201 95L345 239c9.4 9.4 9.4 24.6 0 33.9L201 417c-6.9 6.9-17.2 8.9-26.2 5.2S160 409.7 160 400l0-64-112 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l112 0 0-64c0-9.7 5.8-18.5 14.8-22.2S194.1 88.2 201 95zm7 217l0 30.1 86.1-86.1-86.1-86.1 0 30.1c0 13.3-10.7 24-24 24l-136 0 0 64 136 0c6.4 0 12.5 2.5 17 7s7 10.6 7 17zM344 432l72 0c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48l-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`]},Vo={prefix:`far`,iconName:`thumbtack-angle`,icon:[512,512,[],`e751`,`M303.1 6.9c9.4-9.4 24.6-9.4 33.9 0 4 4 50.9 50.9 140.6 140.6L505.2 175c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-9.2-9.2-92 106.8c6.2 43.1-2.8 88.3-28 126.9l-3.2 4.9c-20.1-13.1-20.1-13.1 0 0-13.9 21.3-43.8 24.4-61.8 6.4L67.4 235c-18-18-14.8-47.9 6.4-61.8l4.8-3.2c38.6-25.2 83.8-34.2 126.9-28l106.8-92-9.2-9.2c-9.4-9.4-9.4-24.6 0-33.9zm43.2 77.2L228.3 185.9c-5.7 4.9-13.3 6.9-20.7 5.3-33.2-7.1-68.8-1.7-99.3 16.9L304 403.8c18.6-30.5 24-66 16.9-99.3-1.6-7.3 .4-15 5.3-20.7L428 165.7 346.4 84.1zM121.3 356.9L155.2 390.8 41.1 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L121.3 356.9z`]},Ho={prefix:`far`,iconName:`magnifying-glass`,icon:[512,512,[128269,`search`],`f002`,`M368 208a160 160 0 1 0 -320 0 160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z`]},Uo={prefix:`far`,iconName:`display`,icon:[512,512,[],`e163`,`M64 80c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-115.7 0 8 48 51.7 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-272 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l51.7 0 8-48-115.7 0c-35.3 0-64-28.7-64-64L0 96zM228.3 416l-8 48 71.3 0-8-48-55.3 0z`]},Wo={prefix:`far`,iconName:`sidebar`,icon:[512,512,[],`e24e`,`M0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM176 240c0-13.3-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24zm0 88c0-13.3-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24zm48 72l224 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16l-224 0 0 288zM176 152c0-13.3-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24z`]}})))()}function Ko(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}function qo(e,t){if(!e||!t)return!1;let n=t.getRootNode?.();if(e.contains(t))return!0;if(n&&u(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Jo(e){return`composedPath`in e?e.composedPath()[0]:e.target}function Yo(){return(Yo=g((()=>{l()})))()}export{he as $,Be as A,Pe as B,Io as C,Co as D,So as E,Ue as F,We as G,Ne as H,Ge as I,Te as J,ke as K,Fe as L,He as M,Re as N,Ke as O,Le as P,ye as Q,ze as R,zo as S,Go as T,Me as U,Ve as V,je as W,xe as X,Se as Y,be as Z,Wo as _,Ro as a,se as at,Eo as b,Uo as c,y as ct,Ho as d,me as et,ko as f,Oo as g,Bo as h,Yo as i,oe as it,Ie as j,qe as k,Lo as l,v as lt,Mo as m,qo as n,fe as nt,Po as o,ne as ot,Fo as p,Ee as q,Jo as r,le as rt,wo as s,ee as st,Ko as t,pe as tt,Do as u,No as v,Ao as w,Vo as x,jo as y,Ae as z};