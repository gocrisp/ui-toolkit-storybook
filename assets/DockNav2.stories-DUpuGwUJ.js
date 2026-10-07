import{n as e,t}from"./PreferencesDialog-J4NLpNMR.js";import{D as n,R as r,S as i,k as a}from"./useTimeout-DQ7xOIHU.js";import{n as o,t as s}from"./dist-C8-1wnXC.js";import{A as c,C as l,D as u,Dt as d,E as f,Ft as ee,It as p,Lt as m,Ot as h,Pt as te,Rt as ne,S as re,St as g,T as ie,_,an as v,b as ae,bt as y,d as oe,f as se,h as b,in as ce,j as x,k as S,n as C,nn as le,rn as ue,t as de,tn as fe,w,x as pe,y as me,yt as T}from"./UserMenuBase-BbIPypXH.js";import{c as he,s as E}from"./AccountSelect-DFTV3c6U.js";import{n as D,x as O}from"./iframe-HfvZlux0.js";import{a as ge,i as _e,n as ve,o as ye,r as be,s as xe,t as Se}from"./ReorderSidebarDialog-kriHQn-1.js";import{n as Ce}from"./accountScopedPath-B1KWqyLv.js";import{a as k,c as we,l as Te,n as A,o as Ee,r as De,s as Oe,t as ke,u as Ae}from"./buildGroups-DYbHKgiQ.js";import{n as je,t as Me}from"./AccountSwitch-DecJq5Et.js";import{a as Ne,c as Pe,i as Fe,o as Ie,r as Le,s as Re,t as ze}from"./AppChrome-M3lrMGPl.js";import{n as Be}from"./useKeyboardShortcut-CzYPkfAW.js";import{a as Ve,i as He,n as Ue,o as We,r as Ge,t as Ke}from"./KeyboardShortcutsDialog-DR2lzH1d.js";import{n as qe}from"./DockNav-DEVWN1Vx.js";import{n as Je,t as Ye}from"./AboutDialog-C1xpTSNu.js";import{n as Xe,t as Ze}from"./CLogo-DOU9K2Vf.js";import{n as Qe,r as $e}from"./useDockPreferences-F_oopXsJ.js";import{i as et,n as tt,r as nt,t as rt}from"./SidePanel-BDnhVGI4.js";import{n as it}from"./rolldown-runtime-DkW27tQK.js";function at(e,t){return`${e}:${t}`}function ot(e,t,n){return Ce(e.path)?Ae(e.path,t,n):e.path}function st(e,t,n,r,i){let a=new Set(t),o=new Map;for(let t of e){let e=t.name??t.id;for(let n of t.modules){if(!a.has(n)||n.isNavItem===!1)continue;let r=at(t.id,n.id);o.has(r)||o.set(r,{appName:e,mod:n})}}let s=new Set,c=[];for(let e of r){let t=at(e.appId,e.moduleId),r=o.get(t);r&&!s.has(t)&&(s.add(t),c.push({id:t,name:e.nameOverride??r.mod.name,appName:r.appName,icon:r.mod.icon,href:ot(r.mod,n,i)}))}return c}function ct(e,t){if(!t||t.length===0)return e;let n=new Map(e.map(e=>[e.id,e])),r=[],i=new Set;for(let e of t){let t=n.get(e);t&&!i.has(e)&&(i.add(e),r.push(t))}for(let t of e)i.has(t.id)||r.push(t);return r}function lt(){return(lt=it((()=>{Te()})))()}var ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,j;function Lt(){return(Lt=it((()=>{ut=`_root_jwm05_11`,dt=`_popover_jwm05_12`,ft=`_content_jwm05_48`,pt=`_sidebarContainer_jwm05_54`,mt=`_sidebar_jwm05_54`,ht=`_sidebarTop_jwm05_99`,gt=`_logoWrap_jwm05_110`,_t=`_logoLink_jwm05_118`,vt=`_sidebarMiddle_jwm05_139`,yt=`_sidebarBottom_jwm05_151`,bt=`_railButton_jwm05_172`,xt=`_railIconChip_jwm05_166`,St=`_railIcon_jwm05_166`,Ct=`_railFaIcon_jwm05_237`,wt=`_railLabel_jwm05_169`,Tt=`_railIconOnly_jwm05_268`,Et=`_popoverPositioner_jwm05_280`,Dt=`_dockNav2OverspillIn_jwm05_1`,Ot=`_dockNav2OverspillOut_jwm05_1`,kt=`_overspill_jwm05_337`,At=`_overspillItem_jwm05_355`,jt=`_dockNav2OverspillItemIn_jwm05_1`,Mt=`_overspillItemIconChip_jwm05_382`,Nt=`_overspillItemIcon_jwm05_382`,Pt=`_sidebarContextMenuItem_jwm05_425`,Ft=`_sidebarContextMenuItemIcon_jwm05_431`,It=`_sidebarContextMenuItemFaIcon_jwm05_443`,j={root:ut,popover:dt,content:ft,sidebarContainer:pt,sidebar:mt,sidebarTop:ht,logoWrap:gt,logoLink:_t,sidebarMiddle:vt,sidebarBottom:yt,railButton:bt,railIconChip:xt,railIcon:St,railFaIcon:Ct,railLabel:wt,railIconOnly:Tt,popoverPositioner:Et,dockNav2OverspillIn:Dt,dockNav2OverspillOut:Ot,overspill:kt,overspillItem:At,dockNav2OverspillItemIn:jt,overspillItemIconChip:Mt,overspillItemIcon:Nt,sidebarContextMenuItem:Pt,sidebarContextMenuItemIcon:Ft,sidebarContextMenuItemFaIcon:It}})))()}function Rt(e){let t=`url("${e}")`;return{WebkitMaskImage:t,maskImage:t}}function zt({sidebarItems:e,onNavigate:t,logoHref:r,isItemActive:o,renderUserMenu:c,onSidebarItemIdsChange:l,onSidebarItemIdsReset:u,isCompact:f=!1,onCompactChange:h,className:ne,style:re,children:g}){let ie=(0,M.useCallback)(e=>o?o(e):!1,[o]),_=!!l&&e.length>0,v=!!h,ae=_||!!u||v,[y,se]=(0,M.useState)(!1),[b,ce]=(0,M.useState)(!1),[x,S]=(0,M.useState)(!0),C=(0,M.useRef)(0),le=(0,M.useCallback)(e=>(C.current+=1,ce(!0),C.current===1&&e?.defaultOpen!==void 0&&S(e.defaultOpen),()=>{C.current=Math.max(0,C.current-1),ce(C.current>0)}),[]),de=(0,M.useCallback)(()=>{S(e=>!e)},[]),fe=(0,M.useMemo)(()=>({hasSidePanel:b,isSidePanelOpen:x,setSidePanelOpen:S,toggleSidePanel:de,registerSidePanel:le}),[b,x,le,de]),[w,pe]=(0,M.useState)(!1),[T,he]=(0,M.useState)(!1),E=(0,M.useRef)(0),D=(0,M.useCallback)(()=>(E.current+=1,pe(!0),()=>{E.current=Math.max(0,E.current-1),pe(E.current>0)}),[]),O=(0,M.useRef)(null),[ge,_e]=(0,M.useState)(e.length),ve=f?36:57;(0,M.useLayoutEffect)(()=>{let t=O.current;if(!t)return;let n=()=>{let n=t.clientHeight,r=Math.max(0,Math.floor((n+8)/(ve+8))),i;if(r>=e.length)i=e.length;else{let e=Math.max(0,Math.floor((n+8)/(ve+8))-1);i=Math.max(0,e)}_e(e=>e===i?e:i)};n();let r=new ResizeObserver(n);return r.observe(t),()=>r.disconnect()},[ve,e.length]);let be=e.slice(0,ge),xe=e.slice(ge),Ce=xe.length>0,[k,we]=(0,M.useState)(!1),Te=(0,M.useRef)(k);Te.current=k;let A=Ht({placement:`right-start`,offsetPx:4,onOpen:()=>we(!1)}),Ee=(0,M.useCallback)(e=>{e&&!Te.current&&A.setOpen(!1),we(e)},[A]),De=(0,M.useCallback)(e=>{e&&(A.setOpen(!1),we(!1)),he(e)},[A]),Oe=(0,M.useCallback)(()=>{De(!T)},[T,De]),ke=(0,M.useMemo)(()=>({hasCommandPalette:w,isCommandPaletteOpen:T,setCommandPaletteOpen:De,toggleCommandPalette:Oe,registerCommandPalette:D}),[w,T,D,De,Oe]),Ae=(0,M.useCallback)(()=>{_&&(A.setOpen(!1),we(!1),se(!0))},[_,A]),je=(0,M.useCallback)(e=>{l?.(e.map(e=>e.id))},[l]),Me=(0,M.useCallback)(()=>{h?.(!f)},[f,h]),Ne=(0,M.useCallback)(e=>{t(e)},[t]),Pe=(0,M.useCallback)(e=>{!r||e.defaultPrevented||e.button!==0||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),Ne(r))},[Ne,r]),Fe=(0,M.useCallback)(e=>{let t=e.target;if(!(t instanceof Element))return;let n=t.closest(Ut);n&&(n instanceof HTMLAnchorElement||e.preventDefault(),e.stopPropagation())},[]),Ie=(0,N.jsx)(`aside`,{className:j.sidebar,"aria-label":`Application navigation`,onContextMenuCapture:Fe,children:(0,N.jsxs)(ue,{delay:500,children:[(0,N.jsxs)(`div`,{className:j.sidebarTop,children:[(0,N.jsx)(`div`,{className:j.logoWrap,children:r?(0,N.jsx)(`a`,{href:r,className:j.logoLink,"aria-label":`Crisp home`,onClick:Pe,children:(0,N.jsx)(Ze,{variant:`white`,size:32})}):(0,N.jsx)(Ze,{variant:`white`,size:32})}),w&&(0,N.jsx)(Vt,{label:`Command palette`,enabled:f,children:(0,N.jsx)(`button`,{type:`button`,className:`${j.railButton} ${j.railIconOnly}`,"aria-label":`Open command palette`,"aria-expanded":T,onClick:Oe,children:(0,N.jsx)(`span`,{className:j.railIconChip,children:(0,N.jsx)(s,{className:j.railFaIcon,icon:i,"aria-hidden":`true`})})})})]}),(0,N.jsxs)(`div`,{className:j.sidebarMiddle,ref:O,children:[be.map(e=>(0,N.jsx)(Bt,{item:e,active:ie(e),compact:f,onClick:()=>Ne(e.href)},e.id)),Ce&&(0,N.jsx)(Vt,{label:`More`,enabled:f,children:(0,N.jsxs)(`button`,{type:`button`,ref:A.refs.setReference,...A.getReferenceProps(),className:j.railButton,"aria-label":`More (${xe.length})`,"data-active":A.open||void 0,children:[(0,N.jsx)(`span`,{className:j.railIconChip,ref:A.refs.setPositionReference,"aria-hidden":`true`,children:(0,N.jsx)(`span`,{className:j.railIcon,style:Rt(`data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.8002%209.90039C5.95999%209.90039%206.9002%2010.8406%206.9002%2012.0004C6.9002%2013.1602%205.95999%2014.1004%204.8002%2014.1004C3.6404%2014.1004%202.7002%2013.1602%202.7002%2012.0004C2.7002%2010.8406%203.6404%209.90039%204.8002%209.90039ZM4.8002%2011.7004C4.63451%2011.7004%204.5002%2011.8347%204.5002%2012.0004C4.5002%2012.1661%204.63451%2012.3004%204.8002%2012.3004C4.96588%2012.3004%205.1002%2012.1661%205.1002%2012.0004C5.1002%2011.8347%204.96588%2011.7004%204.8002%2011.7004Z'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.0002%209.90039C13.16%209.90039%2014.1002%2010.8406%2014.1002%2012.0004C14.1002%2013.1602%2013.16%2014.1004%2012.0002%2014.1004C10.8404%2014.1004%209.9002%2013.1602%209.9002%2012.0004C9.9002%2010.8406%2010.8404%209.90039%2012.0002%209.90039ZM12.0002%2011.7004C11.8345%2011.7004%2011.7002%2011.8347%2011.7002%2012.0004C11.7002%2012.1661%2011.8345%2012.3004%2012.0002%2012.3004C12.1659%2012.3004%2012.3002%2012.1661%2012.3002%2012.0004C12.3002%2011.8347%2012.1659%2011.7004%2012.0002%2011.7004Z'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M19.2002%209.90039C20.36%209.90039%2021.3002%2010.8406%2021.3002%2012.0004C21.3002%2013.1602%2020.36%2014.1004%2019.2002%2014.1004C18.0404%2014.1004%2017.1002%2013.1602%2017.1002%2012.0004C17.1002%2010.8406%2018.0404%209.90039%2019.2002%209.90039ZM19.2002%2011.7004C19.0345%2011.7004%2018.9002%2011.8347%2018.9002%2012.0004C18.9002%2012.1661%2019.0345%2012.3004%2019.2002%2012.3004C19.3659%2012.3004%2019.5002%2012.1661%2019.5002%2012.0004C19.5002%2011.8347%2019.3659%2011.7004%2019.2002%2011.7004Z'%20/%3e%3c/svg%3e`)})}),!f&&(0,N.jsx)(`span`,{className:j.railLabel,children:`More`})]})})]}),(0,N.jsx)(`div`,{className:j.sidebarBottom,children:c?.({open:k,openChange:Ee})})]})}),Le=ae?(0,N.jsxs)(te,{children:[(0,N.jsx)(m,{render:Ie}),(0,N.jsxs)(ee,{side:`right`,align:`start`,sideOffset:8,children:[_&&(0,N.jsxs)(p,{className:j.sidebarContextMenuItem,onClick:Ae,children:[(0,N.jsx)(`span`,{className:j.sidebarContextMenuItemIcon,style:Rt(`data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%206.2998C17.5029%206.2998%2017.1%206.70275%2017.1%207.1998C17.1%207.69686%2017.5029%208.0998%2018%208.0998H20.4C20.897%208.0998%2021.3%207.69686%2021.3%207.1998C21.3%206.70275%2020.897%206.2998%2020.4%206.2998H18ZM3.59995%206.2998C3.1029%206.2998%202.69995%206.70275%202.69995%207.1998C2.69995%207.69686%203.1029%208.0998%203.59995%208.0998H11.8125C12.3095%208.0998%2012.7125%207.69686%2012.7125%207.1998C12.7125%206.70275%2012.3095%206.2998%2011.8125%206.2998H3.59995Z'/%3e%3cpath%20d='M12.9%207.1998C12.9%206.04001%2013.8402%205.0998%2015%205.0998C16.1597%205.0998%2017.1%206.04001%2017.1%207.1998C17.1%208.3596%2016.1597%209.2998%2015%209.2998C13.8402%209.2998%2012.9%208.3596%2012.9%207.1998ZM11.1%207.1998C11.1%209.35371%2012.846%2011.0998%2015%2011.0998C17.1539%2011.0998%2018.9%209.35371%2018.9%207.1998C18.9%205.04589%2017.1539%203.2998%2015%203.2998C12.846%203.2998%2011.1%205.04589%2011.1%207.1998Z'/%3e%3cpath%20d='M5.99995%2015.8998C6.49701%2015.8998%206.89995%2016.3027%206.89995%2016.7998C6.89995%2017.2969%206.49701%2017.6998%205.99995%2017.6998H3.59995C3.10289%2017.6998%202.69995%2017.2969%202.69995%2016.7998C2.69995%2016.3027%203.10289%2015.8998%203.59995%2015.8998H5.99995ZM20.4%2015.8998C20.897%2015.8998%2021.3%2016.3027%2021.3%2016.7998C21.3%2017.2969%2020.897%2017.6998%2020.4%2017.6998H12.1875C11.6904%2017.6998%2011.2875%2017.2969%2011.2875%2016.7998C11.2875%2016.3027%2011.6904%2015.8998%2012.1875%2015.8998H20.4Z'/%3e%3cpath%20d='M11.1%2016.7998C11.1%2015.64%2010.1597%2014.6998%208.99995%2014.6998C7.84015%2014.6998%206.89995%2015.64%206.89995%2016.7998C6.89995%2017.9596%207.84015%2018.8998%208.99995%2018.8998C10.1597%2018.8998%2011.1%2017.9596%2011.1%2016.7998ZM12.9%2016.7998C12.9%2018.9537%2011.1539%2020.6998%208.99995%2020.6998C6.84604%2020.6998%205.09995%2018.9537%205.09995%2016.7998C5.09995%2014.6459%206.84604%2012.8998%208.99995%2012.8998C11.1539%2012.8998%2012.9%2014.6459%2012.9%2016.7998Z'/%3e%3c/svg%3e`),"aria-hidden":`true`}),(0,N.jsx)(`span`,{children:`Reorder sidebar items`})]}),u&&(0,N.jsxs)(p,{className:j.sidebarContextMenuItem,onClick:u,children:[(0,N.jsx)(`span`,{className:j.sidebarContextMenuItemFaIcon,"aria-hidden":`true`,children:(0,N.jsx)(s,{icon:n})}),(0,N.jsx)(`span`,{children:`Reset sidebar order`})]}),v&&(0,N.jsxs)(p,{className:j.sidebarContextMenuItem,onClick:Me,children:[(0,N.jsx)(`span`,{className:j.sidebarContextMenuItemFaIcon,"aria-hidden":`true`,children:(0,N.jsx)(s,{icon:a})}),(0,N.jsx)(`span`,{children:f?`Toggle expanded sidebar`:`Toggle compact sidebar`})]})]})]}):Ie;return(0,N.jsx)(oe,{value:fe,children:(0,N.jsx)(ye,{value:ke,children:(0,N.jsxs)(`div`,{className:d(j.root,ne),style:re,"data-compact":f||void 0,children:[(0,N.jsx)(`div`,{className:j.sidebarContainer,children:Le}),(0,N.jsx)(`div`,{className:j.content,children:g}),A.mounted&&(0,N.jsx)(me,{children:(0,N.jsx)(`div`,{ref:A.refs.setFloating,style:{...A.floatingStyles,visibility:A.isPositioned?`visible`:`hidden`},className:j.popoverPositioner,children:(0,N.jsx)(`div`,{...A.getFloatingProps(),className:j.popover,"data-state":A.status,"data-positioned":A.isPositioned||void 0,"data-variant":`overspill`,children:(0,N.jsx)(`div`,{className:j.overspill,role:`menu`,children:xe.map((e,t)=>(0,N.jsxs)(`button`,{type:`button`,role:`menuitem`,className:j.overspillItem,"data-active":ie(e)||void 0,style:{"--stagger":t},onClick:()=>{A.setOpen(!1),Ne(e.href)},children:[(0,N.jsx)(`span`,{className:j.overspillItemIconChip,"aria-hidden":`true`,children:(0,N.jsx)(`span`,{className:j.overspillItemIcon,style:Rt(e.icon)})}),(0,N.jsx)(`span`,{children:e.name})]},e.id))})})})}),(0,N.jsx)(Se,{open:y,onOpenChange:se,items:e,onItemsChange:je,onReset:u})]})})})}function Bt({item:e,active:t,compact:n,onClick:r}){return(0,N.jsx)(Vt,{label:e.name,enabled:n,children:(0,N.jsxs)(`button`,{type:`button`,onClick:r,className:j.railButton,"data-active":t||void 0,"aria-current":t?`page`:void 0,"aria-label":n?e.name:void 0,children:[(0,N.jsx)(`span`,{className:j.railIconChip,"aria-hidden":`true`,children:(0,N.jsx)(`span`,{className:j.railIcon,style:Rt(e.icon)})}),!n&&(0,N.jsx)(`span`,{className:j.railLabel,children:e.name})]})})}function Vt({label:e,enabled:t,children:n}){return t?(0,N.jsxs)(fe,{children:[(0,N.jsx)(ce,{render:n}),(0,N.jsx)(le,{side:`right`,children:e})]}):n}function Ht({placement:e,offsetPx:t,duration:n={open:180,close:140},onOpen:r}){let[i,a]=(0,M.useState)(!1),o=l({open:i,onOpenChange:e=>{e&&!i&&r?.(),a(e)},placement:e,middleware:[S(t),u({fallbackPlacements:[`right`,`left`]}),c({padding:8})],whileElementsMounted:x}),s=pe(o.context),d=re(o.context),ee=ie(o.context,{role:`dialog`}),p=w([s,d,ee]),m=f(o.context,{duration:n});return{open:i,setOpen:a,mounted:m.isMounted,status:m.status,isPositioned:o.isPositioned,refs:o.refs,floatingStyles:o.floatingStyles,context:o.context,getReferenceProps:p.getReferenceProps,getFloatingProps:p.getFloatingProps}}var M,N,Ut;function Wt(){return(Wt=it((()=>{ne(),v(),r(),ae(),o(),h(),M=O(),_(),b(),Xe(),se(),xe(),ve(),Lt(),N=D(),Ut=`button, a, input, textarea, select, [role="button"], [role="menuitem"], [data-dock-nav-context-menu-block]`})))()}function Gt(e){return e.flatMap(e=>e.modules)}function Kt(e,t,n){let r=Gt(e);return t?st(e,r,void 0,t):De(ke(e,r,void 0,n))}function qt({enabled:e,getAccounts:t,children:n}){return e?(0,F.jsx)(E,{getAccounts:t,children:n}):(0,F.jsx)(F.Fragment,{children:n})}function Jt({onOpenShortcuts:e,onOpenAccountSwitch:t,onOpenPreferences:n,onOpenAbout:r,enableAccountSwitch:i}){return Be({keys:He,action:e,description:`Show keyboard shortcuts`,group:`Help`}),Be({keys:Ve,action:n,description:`Open preferences`,group:`General`}),Be({keys:Ge,action:r,description:`Open about`,group:`Help`}),Be({keys:fn,action:t,description:`Switch account`,group:`Navigation`,enabled:i}),null}function Yt({apps:e=k,appModules:n,appModuleSortOrder:r=Ee,initialSidebarOrder:i,initialActive:a,logoHref:o,forceRailHeight:s,registerCommandPalette:c=!1,registerSidePanel:l=!1,isCompact:u=!1,usePreferenceCompact:d=!1,preferencesKey:f=rn,extraContent:ee,unauthenticated:p=!1,enableAccountSwitch:m=!0,impersonating:h=!1,onImpersonatingChange:te}){(0,P.useEffect)(()=>{if(!h){Ie();return}let e=Date.now();return Pe({accessToken:`storybook-mock-token`,expiresAt:e+nn,issuedAt:e,actor:{email:en.email??`admin@gocrisp.example`},target:{email:tn.email,name:tn.name},mode:`readonly`}),()=>Ie()},[h]);let{preferences:ne,updatePreferences:re}=$e({key:f}),g=(0,P.useMemo)(()=>Kt(e,n,r),[e,n,r]),ie=(0,P.useMemo)(()=>A(e,Gt(e),void 0),[e]),[_,v]=(0,P.useState)(i),ae=(0,P.useMemo)(()=>ct(g,_),[g,_]),[y,oe]=(0,P.useState)(a??g[0]?.id),[se,b]=(0,P.useState)(!1),[ce,x]=(0,P.useState)(!1),[S,C]=(0,P.useState)(gn[1]),[le,ue]=(0,P.useState)(!1),[fe,w]=(0,P.useState)(!1),[pe,me]=(0,P.useState)(u),he=d?ne.isSidebarCompact:pe,E=(0,P.useCallback)(async()=>(await new Promise(e=>window.setTimeout(e,180)),gn),[]);(0,P.useEffect)(()=>{v(i)},[i]),(0,P.useEffect)(()=>{me(u)},[u]);let D=(0,P.useCallback)(e=>{let t=g.find(t=>t.href===e);t&&oe(t.id)},[g]),O=(0,P.useCallback)(e=>{if(d){re({isSidebarCompact:e});return}me(e)},[re,d]),ge=(0,F.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,F.jsx)(`h1`,{style:{marginTop:0},children:`Application content`}),(0,F.jsxs)(`p`,{children:[`Active module: `,(0,F.jsx)(`strong`,{children:y??`(none)`})]}),m&&(0,F.jsxs)(`p`,{children:[`Active account:`,` `,(0,F.jsx)(`strong`,{children:S?`${S.name} (${S.id})`:`(none)`})]}),(0,F.jsxs)(`p`,{style:{maxWidth:640},children:[`DockNav2 has no module drawer — the rail is the whole surface. Right-click the rail to reorder it or switch between compact and expanded.`,c&&(0,F.jsxs)(F.Fragment,{children:[` `,`A command palette is registered, so the toggle under the logo (and`,` `,(0,F.jsx)(`kbd`,{children:hn.join(` `)}),`) opens it.`]})]}),ee]});return(0,F.jsxs)(T,{children:[(0,F.jsx)(Jt,{onOpenShortcuts:()=>ue(!0),onOpenAccountSwitch:()=>x(!0),onOpenPreferences:()=>b(!0),onOpenAbout:()=>w(!0),enableAccountSwitch:m}),(0,F.jsxs)(`div`,{"data-story-dock-nav":s?``:void 0,style:{minHeight:s?`${s}px`:`calc(100vh - var(--crisp-chrome-inset-top, 0px))`,height:s?`${s}px`:void 0,background:`var(--color-background, #f1f5f5)`},children:[s&&(0,F.jsx)(`style`,{children:`[data-story-dock-nav] [class*="sidebarContainer"] { height: ${s}px !important; }`}),(0,F.jsx)(ze,{children:(0,F.jsx)(Fe,{reloadOnSessionEnd:!1,onStop:()=>te?.(!1)})}),(0,F.jsxs)(qt,{enabled:m,getAccounts:E,children:[(0,F.jsxs)(zt,{sidebarItems:ae,onNavigate:D,logoHref:o,isItemActive:e=>e.id===y,renderUserMenu:e=>(0,F.jsx)(de,{user:p?void 0:h?tn:en,isAuthenticated:!p,open:e.open,onOpenChange:e.openChange,onLogin:()=>console.info(`[DockNav2 story] login triggered`),onLogout:()=>console.info(`[DockNav2 story] logout triggered`),navItems:ie,onNavItemNavigate:e=>D(e.href),onPreferences:()=>b(!0),preferencesDisplayKeys:cn,preferencesAriaKeyShortcuts:ln,onSwitchAccount:m?()=>x(!0):void 0,switchAccountDisplayKeys:m?pn:void 0,switchAccountAriaKeyShortcuts:m?mn:void 0,onKeyboardShortcuts:()=>ue(!0),keyboardShortcutsDisplayKeys:on,keyboardShortcutsAriaKeyShortcuts:sn,onAbout:()=>w(!0),aboutDisplayKeys:un,aboutAriaKeyShortcuts:dn}),isCompact:he,onCompactChange:O,onSidebarItemIdsChange:v,onSidebarItemIdsReset:_?()=>v(void 0):void 0,style:s?{minHeight:`${s}px`,height:`${s}px`}:void 0,children:[c&&(0,F.jsx)(_e,{selectedAccountId:S?.id,onAccountChange:C}),l?(0,F.jsx)(rt,{mode:`fixed`,defaultSize:`18rem`,sidePanelContent:(0,F.jsx)(nt,{}),children:ge}):ge]}),(0,F.jsx)(Me,{open:ce,onOpenChange:x,onChange:C,selectedId:S?.id})]}),(0,F.jsx)(t,{open:se,onOpenChange:b,preferencesKey:f}),(0,F.jsx)(Ke,{open:le,onOpenChange:ue}),(0,F.jsx)(Ye,{open:fe,onOpenChange:w})]})]})}function Xt({impersonating:e,registerCommandPalette:t,registerSidePanel:n,onImpersonatingChange:r}){let[i,a]=(0,P.useState)(()=>new Set(k.map(e=>e.id))),o=(0,P.useMemo)(()=>k.filter(e=>i.has(e.id)),[i]),s=e=>a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,F.jsx)(Yt,{apps:o,logoHref:`/`,usePreferenceCompact:!0,impersonating:e,registerCommandPalette:t,registerSidePanel:n,onImpersonatingChange:r,extraContent:(0,F.jsxs)(`section`,{style:{marginTop:24},children:[(0,F.jsx)(`h2`,{style:{marginBottom:12},children:`Apps`}),(0,F.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`grid`,gap:6},children:k.map(e=>(0,F.jsx)(`li`,{children:(0,F.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,F.jsx)(`input`,{type:`checkbox`,checked:i.has(e.id),onChange:()=>s(e.id)}),(0,F.jsx)(`span`,{children:e.name??e.id}),(0,F.jsxs)(`span`,{style:{opacity:.6,fontSize:12},children:[`(`,e.modules.length,` module`,e.modules.length===1?``:`s`,`)`]})]})},e.id))}),(0,F.jsx)(`p`,{style:{marginTop:16,opacity:.7,fontSize:13},children:`Disabling an app removes its modules from the rail. Unlike DockNav there is no drawer to fall back on — everything authorized is on the rail (or in its overspill).`})]})})}function Zt(){let e=(0,P.useMemo)(()=>Kt(k,void 0,Ee),[]),n=(0,P.useMemo)(()=>A(k,Gt(k),void 0),[]),{preferences:r,setPreferences:i,updatePreferences:a,isLoading:o}=$e({key:an}),s=(0,P.useMemo)(()=>ct(e,r.sidebarItemOrder),[e,r.sidebarItemOrder]),[c,l]=(0,P.useState)(e[0]?.id),[u,d]=(0,P.useState)(!1),[f,ee]=(0,P.useState)(!1),[p,m]=(0,P.useState)(!1),h=(0,P.useCallback)(t=>{let n=e.find(e=>e.href===t);n&&l(n.id)},[e]),te=(0,P.useCallback)(()=>{i({...r,sidebarItemOrder:void 0})},[r,i]);return(0,F.jsx)(T,{children:(0,F.jsxs)(`div`,{style:{minHeight:`calc(100vh - var(--crisp-chrome-inset-top, 0px))`,background:`var(--color-background, #f1f5f5)`},children:[(0,F.jsx)(zt,{sidebarItems:s,onNavigate:h,isItemActive:e=>e.id===c,renderUserMenu:e=>(0,F.jsx)(de,{user:en,isAuthenticated:!0,open:e.open,onOpenChange:e.openChange,onLogout:()=>console.info(`[DockNav2 story] logout triggered`),navItems:n,onNavItemNavigate:e=>h(e.href),onPreferences:()=>d(!0),preferencesDisplayKeys:cn,preferencesAriaKeyShortcuts:ln,onKeyboardShortcuts:()=>ee(!0),keyboardShortcutsDisplayKeys:on,keyboardShortcutsAriaKeyShortcuts:sn,onAbout:()=>m(!0),aboutDisplayKeys:un,aboutAriaKeyShortcuts:dn}),isCompact:r.isSidebarCompact,onCompactChange:e=>void a({isSidebarCompact:e}),onSidebarItemIdsChange:e=>void a({sidebarItemOrder:e}),onSidebarItemIdsReset:r.sidebarItemOrder?te:void 0,children:(0,F.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,F.jsx)(`h1`,{style:{marginTop:0},children:`Persisted sidebar order`}),(0,F.jsxs)(`p`,{style:{maxWidth:640},children:[`Right-click the rail and choose `,(0,F.jsx)(`strong`,{children:`Reorder sidebar items`}),`, then drag the rows. The order is persisted in IndexedDB (DB `,(0,F.jsx)(`code`,{children:`crisp:main`}),`, key`,` `,(0,F.jsx)(`code`,{children:an}),`) via `,(0,F.jsx)(`code`,{children:`useDockPreferences`}),`, under the `,(0,F.jsx)(`code`,{children:`sidebarItemOrder`}),` field — separate from DockNav's pinned`,` `,(0,F.jsx)(`code`,{children:`sidebarItemIds`}),` so the two surfaces can coexist. Reload to confirm it survives.`]}),(0,F.jsx)(`p`,{style:{opacity:.7,fontSize:13},children:o?`Loading from IDB…`:r.sidebarItemOrder?.join(`, `)??`(using the derived order)`})]})}),(0,F.jsx)(t,{open:u,onOpenChange:d,preferencesKey:an}),(0,F.jsx)(Ke,{open:f,onOpenChange:ee}),(0,F.jsx)(Ye,{open:p,onOpenChange:m})]})})}function Qt(e){let[,t]=$t();return(0,F.jsx)(Yt,{...e,onImpersonatingChange:e=>t({impersonating:e})})}var P,F,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,vn;function yn(){return(yn=it((()=>{P=O(),he(),Ne(),Re(),We(),Je(),je(),Le(),ge(),we(),qe(),C(),e(),Qe(),Ue(),et(),tt(),lt(),Wt(),F=D(),{useArgs:$t}=__STORYBOOK_MODULE_PREVIEW_API__,en={name:`Allan Brown`,email:`allanbrown@acme.com`,given_name:`Allan`},tn={name:`Cipriano Cliente`,email:`cipriano@dot-foods.example`},nn=3e5,rn=`DockNav2_preferences_storybook_v1`,an=`DockNav2_storybook_v1`,on=y(He),sn=g(He),cn=y(Ve),ln=g(Ve),un=y(Ge),dn=g(Ge),fn=`mod+k`,pn=y(fn),mn=g(fn),hn=y(be),gn=[{id:`80001`,name:`Acme Grocery`},{id:`80002`,name:`Bright Farms`},{id:`80003`,name:`Canyon Market`},{id:`80004`,name:`Dawn Distribution`},{id:`80005`,name:`Evergreen Foods`},{id:`80006`,name:`Fieldstone`},{id:`80007`,name:`Golden Pantry`},{id:`80008`,name:`Harbor Wholesale`},{id:`80009`,name:`Ivy Organics`},{id:`80010`,name:`Juno Retail`}],_n={title:`Common/DockNav2`,component:Yt,render:Qt,parameters:{layout:`fullscreen`},argTypes:{registerCommandPalette:{name:`registerCommandPalette`,control:`boolean`,description:`Mounts a CommandPalette child. Registration is what makes the rail toggle and the ⌘⇧P shortcut appear.`},registerSidePanel:{name:`registerSidePanel`,control:`boolean`,description:`Mounts a SidePanel child. DockNav2 provides the SidePanel context but no rail toggle — that slot now belongs to the command palette.`},impersonating:{name:`impersonating`,control:`boolean`,description:`Seeds a mock impersonation session (amber banner + user-menu overlay). Toggle off, or use Stop / ⌘I · Ctrl+I on the banner, to clear it.`},onImpersonatingChange:{control:!1,table:{disable:!0}}},args:{impersonating:!1,registerCommandPalette:!1,registerSidePanel:!1}},I={render:e=>{let[,t]=$t();return(0,F.jsx)(Xt,{...e,onImpersonatingChange:e=>t({impersonating:e})})}},L={args:{},parameters:{docs:{description:{story:`The rail is derived from the app module sort order (flattened), with any modules the sort order never mentions appended — nothing is hidden, because there is no drawer to hide it in.`}}}},R={name:`Explicit appModules list`,args:{appModules:[{appId:`ai-studio`,moduleId:`ai-studio-sessions`},{appId:`data-platform`,moduleId:`home`},{appId:`strategy`,moduleId:`strategy`,nameOverride:`Strategy Hub`},{appId:`order-mgmt`,moduleId:`order-mgmt`}],initialActive:`ai-studio:ai-studio-sessions`},parameters:{docs:{description:{story:"When the host passes `appModules`, the list is taken literally: exactly those modules, in that order, with `nameOverride` applied. Nothing is appended, and entries that do not resolve to an authorized nav module are dropped."}}}},z={args:{isCompact:!0},parameters:{docs:{description:{story:"Icon-only rail with delayed tooltips. Toggle it from the rail context menu or the Preferences dialog — both write the same `isSidebarCompact` preference DockNav uses."}}}},B={name:`With overspill ("...")`,args:{forceRailHeight:480},parameters:{docs:{description:{story:`The rail measures itself and collapses the trailing items into a "More" popover when they cannot fit. Unchanged from DockNav — and more load-bearing here, since the drawer is no longer a fallback route to those modules.`}}}},V={args:{apps:[],initialActive:void 0},parameters:{docs:{description:{story:`No authorized modules: the rail renders its caps only. The context menu keeps the compact toggle but drops reordering, since there is nothing to reorder.`}}}},H={name:`Active: AI Studio › Sessions`,args:{initialActive:`ai-studio:ai-studio-sessions`}},U={name:`Reorder dialog`,args:{initialSidebarOrder:[...Oe].reverse()},parameters:{docs:{description:{story:'Right-click the rail and choose "Reorder sidebar items" to open the centred dialog. The rows are the same cabbage `Sortable` rows DockNav shows inside its drawer, so the drag gesture is unchanged; every drag commits immediately, and "Reset to default order" restores the derived order. This story seeds a reversed order so the rail starts out visibly customised.'}}}},W={name:`With command palette`,args:{registerCommandPalette:!0},parameters:{docs:{description:{story:"A `<CommandPalette>` mounted anywhere inside DockNav2 registers itself, which is what adds the magnifier toggle under the logo and binds ⌘⇧P (visible in the keyboard shortcuts dialog). For now the palette presents the account switcher; the registration/toggle/shortcut wiring is the part that will not change when real commands land."}}}},G={name:`Without command palette`,args:{registerCommandPalette:!1},parameters:{docs:{description:{story:`With no palette registered the toggle slot under the logo stays empty and ⌘⇧P is unbound. The rail caps reserve the same height either way, so the middle items stay centred.`}}}},K={name:`With side panel`,args:{registerSidePanel:!0,registerCommandPalette:!0},parameters:{docs:{description:{story:"DockNav2 still provides the SidePanel context, so `<SidePanel>` children mount and render. There is no rail toggle for it — the slot under the logo now belongs to the command palette — so the panel sits at its `defaultOpen` state until a host drives it."}}}},q={name:`User menu — authenticated`,args:{},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail. Opening the menu dismisses the overspill popover and vice versa — the same single-popover rule DockNav enforces.`}}}},J={name:`User menu — no account provider`,args:{enableAccountSwitch:!1},parameters:{docs:{description:{story:`Without an AccountsProvider above the dock the Switch account row is omitted and ⌘K is unbound.`}}}},Y={name:`User menu — unauthenticated`,args:{unauthenticated:!0}},X={name:`User menu — impersonating`,args:{impersonating:!0},parameters:{docs:{description:{story:"While an impersonation session is active the avatar and identity card swap to the impersonated target, keeping the rail consistent with the banner. Use the `impersonating` control, the banner Stop button, or ⌘I / Ctrl+I to dismiss."}}}},Z={name:`Preferences dialog`,args:{usePreferenceCompact:!0},parameters:{docs:{description:{story:"Open the user menu, then Preferences. The Compact checkbox writes the shared `isSidebarCompact` preference, so it drives DockNav2 exactly as it drives DockNav."}}}},Q={name:`Keyboard shortcuts dialog`,args:{registerCommandPalette:!0},parameters:{docs:{description:{story:`Open the user menu, then Keyboard shortcuts (or press Shift+?). With a command palette registered, ⌘⇧P appears in the Navigation group — the palette registers its own shortcut, so surfaces without one never advertise it.`}}}},$={name:`With persisted order`,render:()=>(0,F.jsx)(Zt,{})},vn=[`Overview`,`Default`,`ExplicitAppModules`,`Compact`,`WithOverspill`,`Empty`,`ActiveAiStudioSession`,`ReorderDialog`,`WithCommandPalette`,`WithoutCommandPalette`,`WithSidePanel`,`UserMenuAuthenticated`,`UserMenuWithoutAccountSwitch`,`UserMenuUnauthenticated`,`UserMenuImpersonating`,`Preferences`,`KeyboardShortcuts`,`WithPersistedOrder`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [, updateArgs] = useArgs();
    return <DockNav2Overview {...args} onImpersonatingChange={next => updateArgs({
      impersonating: next
    })} />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The rail is derived from the app module sort order (flattened), with any modules the sort order never mentions appended — nothing is hidden, because there is no drawer to hide it in.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Explicit appModules list',
  args: {
    appModules: [{
      appId: 'ai-studio',
      moduleId: 'ai-studio-sessions'
    }, {
      appId: 'data-platform',
      moduleId: 'home'
    }, {
      appId: 'strategy',
      moduleId: 'strategy',
      nameOverride: 'Strategy Hub'
    }, {
      appId: 'order-mgmt',
      moduleId: 'order-mgmt'
    }],
    initialActive: 'ai-studio:ai-studio-sessions'
  },
  parameters: {
    docs: {
      description: {
        story: 'When the host passes \`appModules\`, the list is taken literally: exactly those modules, in that order, with \`nameOverride\` applied. Nothing is appended, and entries that do not resolve to an authorized nav module are dropped.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    isCompact: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only rail with delayed tooltips. Toggle it from the rail context menu or the Preferences dialog — both write the same \`isSidebarCompact\` preference DockNav uses.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With overspill ("...")',
  args: {
    forceRailHeight: 480
  },
  parameters: {
    docs: {
      description: {
        story: 'The rail measures itself and collapses the trailing items into a "More" popover when they cannot fit. Unchanged from DockNav — and more load-bearing here, since the drawer is no longer a fallback route to those modules.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    apps: [],
    initialActive: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'No authorized modules: the rail renders its caps only. The context menu keeps the compact toggle but drops reordering, since there is nothing to reorder.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Active: AI Studio › Sessions',
  args: {
    initialActive: 'ai-studio:ai-studio-sessions'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Reorder dialog',
  args: {
    initialSidebarOrder: [...MOCK_SIDEBAR_ITEM_IDS].reverse()
  },
  parameters: {
    docs: {
      description: {
        story: 'Right-click the rail and choose "Reorder sidebar items" to open the centred dialog. The rows are the same cabbage \`Sortable\` rows DockNav shows inside its drawer, so the drag gesture is unchanged; every drag commits immediately, and "Reset to default order" restores the derived order. This story seeds a reversed order so the rail starts out visibly customised.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'With command palette',
  args: {
    registerCommandPalette: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A \`<CommandPalette>\` mounted anywhere inside DockNav2 registers itself, which is what adds the magnifier toggle under the logo and binds ⌘⇧P (visible in the keyboard shortcuts dialog). For now the palette presents the account switcher; the registration/toggle/shortcut wiring is the part that will not change when real commands land.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Without command palette',
  args: {
    registerCommandPalette: false
  },
  parameters: {
    docs: {
      description: {
        story: 'With no palette registered the toggle slot under the logo stays empty and ⌘⇧P is unbound. The rail caps reserve the same height either way, so the middle items stay centred.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'With side panel',
  args: {
    registerSidePanel: true,
    registerCommandPalette: true
  },
  parameters: {
    docs: {
      description: {
        story: 'DockNav2 still provides the SidePanel context, so \`<SidePanel>\` children mount and render. There is no rail toggle for it — the slot under the logo now belongs to the command palette — so the panel sits at its \`defaultOpen\` state until a host drives it.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'User menu — authenticated',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Click the avatar at the bottom of the rail. Opening the menu dismisses the overspill popover and vice versa — the same single-popover rule DockNav enforces.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'User menu — no account provider',
  args: {
    enableAccountSwitch: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Without an AccountsProvider above the dock the Switch account row is omitted and ⌘K is unbound.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'User menu — unauthenticated',
  args: {
    unauthenticated: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'User menu — impersonating',
  args: {
    impersonating: true
  },
  parameters: {
    docs: {
      description: {
        story: 'While an impersonation session is active the avatar and identity card swap to the impersonated target, keeping the rail consistent with the banner. Use the \`impersonating\` control, the banner Stop button, or ⌘I / Ctrl+I to dismiss.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Preferences dialog',
  args: {
    usePreferenceCompact: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Open the user menu, then Preferences. The Compact checkbox writes the shared \`isSidebarCompact\` preference, so it drives DockNav2 exactly as it drives DockNav.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Keyboard shortcuts dialog',
  args: {
    registerCommandPalette: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Open the user menu, then Keyboard shortcuts (or press Shift+?). With a command palette registered, ⌘⇧P appears in the Navigation group — the palette registers its own shortcut, so surfaces without one never advertise it.'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'With persisted order',
  render: () => <PersistedOrderDemo />
}`,...$.parameters?.docs?.source}}}})))()}yn();export{H as ActiveAiStudioSession,z as Compact,L as Default,V as Empty,R as ExplicitAppModules,Q as KeyboardShortcuts,I as Overview,Z as Preferences,U as ReorderDialog,q as UserMenuAuthenticated,X as UserMenuImpersonating,Y as UserMenuUnauthenticated,J as UserMenuWithoutAccountSwitch,W as WithCommandPalette,B as WithOverspill,$ as WithPersistedOrder,K as WithSidePanel,G as WithoutCommandPalette,vn as __namedExportsOrder,_n as default};