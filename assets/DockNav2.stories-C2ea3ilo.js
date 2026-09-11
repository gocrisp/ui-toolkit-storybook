import{a as e,i as t,n,t as r}from"./PreferencesDialog-Bg3JEX9E.js";import{N as i,T as a,n as o,t as s,w as c,y as ee}from"./dist-B6V0DLyV.js";import{$t as l,B as u,Bt as d,D as f,E as te,F as ne,G as p,H as m,Ht as h,J as re,Jt as g,Kt as _,L as v,N as ie,O as y,R as b,S as ae,T as x,U as oe,Ut as se,V as ce,Vt as le,W as ue,Wt as S,Xt as C,Y as w,_ as de,_n as T,b as fe,bn as pe,dn as me,fn as he,g as ge,gn as _e,i as ve,in as E,j as ye,ln as be,n as xe,p as Se,pn as Ce,q as D,qt as we,r as O,rn as Te,un as Ee,vn as De,w as Oe,x as ke,y as Ae,yn as je,z as Me,zt as k}from"./UserMenu-KeYHXjXW.js";import{l as Ne,m as Pe,s as Fe,u as Ie}from"./AccountSelect-GV1C7ra6.js";import{n as Le,x as Re}from"./iframe-BYtyZ0Xk.js";import{o as ze,u as Be}from"./accountScopedPath-CTKJ8rk0.js";import{f as Ve,p as He}from"./useStoredValue-C0ZjEM7r.js";import{n as Ue,t as We}from"./AccountSwitch-DBWCcOwl.js";import{a as Ge,i as Ke,r as qe,t as Je}from"./AppChrome-CLwaYO1w.js";import{i as Ye,n as Xe,r as Ze,t as A}from"./dockNavMocks-DB6Z7_Qi.js";import{n as Qe}from"./DockNav-DlnQO2QG.js";import{n as $e,t as et}from"./CLogo-BIYqOJF2.js";import{i as tt,n as nt,r as rt,t as it}from"./SidePanel-B0-umNOz.js";import{a as at,c as ot,d as st,f as ct,l as lt,n as ut,o as dt,r as ft,s as pt,t as mt,u as ht}from"./ReorderSidebarDialog-gjWGouIb.js";import{n as j}from"./rolldown-runtime-DkW27tQK.js";function gt(){return(gt=j((()=>{})))()}function _t(){return(_t=j((()=>{gt()})))()}function vt(){return(vt=j((()=>{})))()}function yt(){return(yt=j((()=>{vt()})))()}function bt(){return(bt=j((()=>{Ve(),Pe(),_t(),yt(),He(`authorized-nav-items`)})))()}function xt(){return(xt=j((()=>{Re(),Se(),Be(),y(),_t(),bt()})))()}var St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,M;function Yt(){return(Yt=j((()=>{St=`_root_jwm05_11`,Ct=`_popover_jwm05_12`,wt=`_content_jwm05_48`,Tt=`_sidebarContainer_jwm05_54`,Et=`_sidebar_jwm05_54`,Dt=`_sidebarTop_jwm05_99`,Ot=`_logoWrap_jwm05_110`,kt=`_logoLink_jwm05_118`,At=`_sidebarMiddle_jwm05_139`,jt=`_sidebarBottom_jwm05_151`,Mt=`_railButton_jwm05_172`,Nt=`_railIconChip_jwm05_166`,Pt=`_railIcon_jwm05_166`,Ft=`_railFaIcon_jwm05_237`,It=`_railLabel_jwm05_169`,Lt=`_railIconOnly_jwm05_268`,Rt=`_popoverPositioner_jwm05_280`,zt=`_dockNav2OverspillIn_jwm05_1`,Bt=`_dockNav2OverspillOut_jwm05_1`,Vt=`_overspill_jwm05_337`,Ht=`_overspillItem_jwm05_355`,Ut=`_dockNav2OverspillItemIn_jwm05_1`,Wt=`_overspillItemIconChip_jwm05_382`,Gt=`_overspillItemIcon_jwm05_382`,Kt=`_sidebarContextMenuItem_jwm05_425`,qt=`_sidebarContextMenuItemIcon_jwm05_431`,Jt=`_sidebarContextMenuItemFaIcon_jwm05_443`,M={root:St,popover:Ct,content:wt,sidebarContainer:Tt,sidebar:Et,sidebarTop:Dt,logoWrap:Ot,logoLink:kt,sidebarMiddle:At,sidebarBottom:jt,railButton:Mt,railIconChip:Nt,railIcon:Pt,railFaIcon:Ft,railLabel:It,railIconOnly:Lt,popoverPositioner:Rt,dockNav2OverspillIn:zt,dockNav2OverspillOut:Bt,overspill:Vt,overspillItem:Ht,dockNav2OverspillItemIn:Ut,overspillItemIconChip:Wt,overspillItemIcon:Gt,sidebarContextMenuItem:Kt,sidebarContextMenuItemIcon:qt,sidebarContextMenuItemFaIcon:Jt}})))()}function Xt(e){let t=`url("${e}")`;return{WebkitMaskImage:t,maskImage:t}}function Zt({sidebarItems:e,onNavigate:t,logoHref:n,isItemActive:r,renderUserMenu:i,onSidebarItemIdsChange:o,onSidebarItemIdsReset:l,isCompact:u=!1,onCompactChange:d,className:f,style:te,children:ne}){let p=(0,N.useCallback)(e=>r?r(e):!1,[r]),m=!!o&&e.length>0,h=!!d,re=m||!!l||h,[g,_]=(0,N.useState)(!1),[ie,y]=(0,N.useState)(!1),[b,ae]=(0,N.useState)(!0),x=(0,N.useRef)(0),oe=(0,N.useCallback)(e=>(x.current+=1,y(!0),x.current===1&&e?.defaultOpen!==void 0&&ae(e.defaultOpen),()=>{x.current=Math.max(0,x.current-1),y(x.current>0)}),[]),se=(0,N.useCallback)(()=>{ae(e=>!e)},[]),ce=(0,N.useMemo)(()=>({hasSidePanel:ie,isSidePanelOpen:b,setSidePanelOpen:ae,toggleSidePanel:se,registerSidePanel:oe}),[ie,b,oe,se]),[le,ue]=(0,N.useState)(!1),[S,C]=(0,N.useState)(!1),w=(0,N.useRef)(0),de=(0,N.useCallback)(()=>(w.current+=1,ue(!0),()=>{w.current=Math.max(0,w.current-1),ue(w.current>0)}),[]),T=(0,N.useRef)(null),[fe,pe]=(0,N.useState)(e.length),_e=u?36:57;(0,N.useLayoutEffect)(()=>{let t=T.current;if(!t)return;let n=()=>{let n=t.clientHeight,r=Math.max(0,Math.floor((n+8)/(_e+8))),i;if(r>=e.length)i=e.length;else{let e=Math.max(0,Math.floor((n+8)/(_e+8))-1);i=Math.max(0,e)}pe(e=>e===i?e:i)};n();let r=new ResizeObserver(n);return r.observe(t),()=>r.disconnect()},[_e,e.length]);let ve=e.slice(0,fe),E=e.slice(fe),ye=E.length>0,[xe,Se]=(0,N.useState)(!1),Ce=(0,N.useRef)(xe);Ce.current=xe;let D=en({placement:`right-start`,offsetPx:4,onOpen:()=>Se(!1)}),we=(0,N.useCallback)(e=>{e&&!Ce.current&&D.setOpen(!1),Se(e)},[D]),O=(0,N.useCallback)(e=>{e&&(D.setOpen(!1),Se(!1)),C(e)},[D]),Oe=(0,N.useCallback)(()=>{O(!S)},[S,O]),ke=(0,N.useMemo)(()=>({hasCommandPalette:le,isCommandPaletteOpen:S,setCommandPaletteOpen:O,toggleCommandPalette:Oe,registerCommandPalette:de}),[le,S,de,O,Oe]),Ae=(0,N.useCallback)(()=>{m&&(D.setOpen(!1),Se(!1),_(!0))},[m,D]),je=(0,N.useCallback)(e=>{o?.(e.map(e=>e.id))},[o]),Me=(0,N.useCallback)(()=>{d?.(!u)},[u,d]),k=(0,N.useCallback)(e=>{t(e)},[t]),Ne=(0,N.useCallback)(e=>{!n||e.defaultPrevented||e.button!==0||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),k(n))},[k,n]),Pe=(0,N.useCallback)(e=>{let t=e.target;if(!(t instanceof Element))return;let n=t.closest(tn);n&&(n instanceof HTMLAnchorElement||e.preventDefault(),e.stopPropagation())},[]),Fe=(0,P.jsx)(`aside`,{className:M.sidebar,"aria-label":`Application navigation`,onContextMenuCapture:Pe,children:(0,P.jsxs)(De,{delay:500,children:[(0,P.jsxs)(`div`,{className:M.sidebarTop,children:[(0,P.jsx)(`div`,{className:M.logoWrap,children:n?(0,P.jsx)(`a`,{href:n,className:M.logoLink,"aria-label":`Crisp home`,onClick:Ne,children:(0,P.jsx)(et,{variant:`white`,size:32})}):(0,P.jsx)(et,{variant:`white`,size:32})}),le&&(0,P.jsx)($t,{label:`Command palette`,enabled:u,children:(0,P.jsx)(`button`,{type:`button`,className:`${M.railButton} ${M.railIconOnly}`,"aria-label":`Open command palette`,"aria-expanded":S,onClick:Oe,children:(0,P.jsx)(`span`,{className:M.railIconChip,children:(0,P.jsx)(s,{className:M.railFaIcon,icon:ee,"aria-hidden":`true`})})})})]}),(0,P.jsxs)(`div`,{className:M.sidebarMiddle,ref:T,children:[ve.map(e=>(0,P.jsx)(Qt,{item:e,active:p(e),compact:u,onClick:()=>k(e.href)},e.id)),ye&&(0,P.jsx)($t,{label:`More`,enabled:u,children:(0,P.jsxs)(`button`,{type:`button`,ref:D.refs.setReference,...D.getReferenceProps(),className:M.railButton,"aria-label":`More (${E.length})`,"data-active":D.open||void 0,children:[(0,P.jsx)(`span`,{className:M.railIconChip,ref:D.refs.setPositionReference,"aria-hidden":`true`,children:(0,P.jsx)(`span`,{className:M.railIcon,style:Xt(`data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.8002%209.90039C5.95999%209.90039%206.9002%2010.8406%206.9002%2012.0004C6.9002%2013.1602%205.95999%2014.1004%204.8002%2014.1004C3.6404%2014.1004%202.7002%2013.1602%202.7002%2012.0004C2.7002%2010.8406%203.6404%209.90039%204.8002%209.90039ZM4.8002%2011.7004C4.63451%2011.7004%204.5002%2011.8347%204.5002%2012.0004C4.5002%2012.1661%204.63451%2012.3004%204.8002%2012.3004C4.96588%2012.3004%205.1002%2012.1661%205.1002%2012.0004C5.1002%2011.8347%204.96588%2011.7004%204.8002%2011.7004Z'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.0002%209.90039C13.16%209.90039%2014.1002%2010.8406%2014.1002%2012.0004C14.1002%2013.1602%2013.16%2014.1004%2012.0002%2014.1004C10.8404%2014.1004%209.9002%2013.1602%209.9002%2012.0004C9.9002%2010.8406%2010.8404%209.90039%2012.0002%209.90039ZM12.0002%2011.7004C11.8345%2011.7004%2011.7002%2011.8347%2011.7002%2012.0004C11.7002%2012.1661%2011.8345%2012.3004%2012.0002%2012.3004C12.1659%2012.3004%2012.3002%2012.1661%2012.3002%2012.0004C12.3002%2011.8347%2012.1659%2011.7004%2012.0002%2011.7004Z'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M19.2002%209.90039C20.36%209.90039%2021.3002%2010.8406%2021.3002%2012.0004C21.3002%2013.1602%2020.36%2014.1004%2019.2002%2014.1004C18.0404%2014.1004%2017.1002%2013.1602%2017.1002%2012.0004C17.1002%2010.8406%2018.0404%209.90039%2019.2002%209.90039ZM19.2002%2011.7004C19.0345%2011.7004%2018.9002%2011.8347%2018.9002%2012.0004C18.9002%2012.1661%2019.0345%2012.3004%2019.2002%2012.3004C19.3659%2012.3004%2019.5002%2012.1661%2019.5002%2012.0004C19.5002%2011.8347%2019.3659%2011.7004%2019.2002%2011.7004Z'%20/%3e%3c/svg%3e`)})}),!u&&(0,P.jsx)(`span`,{className:M.railLabel,children:`More`})]})})]}),(0,P.jsx)(`div`,{className:M.sidebarBottom,children:i?.({open:xe,openChange:we})})]})}),Ie=re?(0,P.jsxs)(be,{children:[(0,P.jsx)(he,{render:Fe}),(0,P.jsxs)(Ee,{side:`right`,align:`start`,sideOffset:8,children:[m&&(0,P.jsxs)(me,{className:M.sidebarContextMenuItem,onClick:Ae,children:[(0,P.jsx)(`span`,{className:M.sidebarContextMenuItemIcon,style:Xt(`data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%206.2998C17.5029%206.2998%2017.1%206.70275%2017.1%207.1998C17.1%207.69686%2017.5029%208.0998%2018%208.0998H20.4C20.897%208.0998%2021.3%207.69686%2021.3%207.1998C21.3%206.70275%2020.897%206.2998%2020.4%206.2998H18ZM3.59995%206.2998C3.1029%206.2998%202.69995%206.70275%202.69995%207.1998C2.69995%207.69686%203.1029%208.0998%203.59995%208.0998H11.8125C12.3095%208.0998%2012.7125%207.69686%2012.7125%207.1998C12.7125%206.70275%2012.3095%206.2998%2011.8125%206.2998H3.59995Z'/%3e%3cpath%20d='M12.9%207.1998C12.9%206.04001%2013.8402%205.0998%2015%205.0998C16.1597%205.0998%2017.1%206.04001%2017.1%207.1998C17.1%208.3596%2016.1597%209.2998%2015%209.2998C13.8402%209.2998%2012.9%208.3596%2012.9%207.1998ZM11.1%207.1998C11.1%209.35371%2012.846%2011.0998%2015%2011.0998C17.1539%2011.0998%2018.9%209.35371%2018.9%207.1998C18.9%205.04589%2017.1539%203.2998%2015%203.2998C12.846%203.2998%2011.1%205.04589%2011.1%207.1998Z'/%3e%3cpath%20d='M5.99995%2015.8998C6.49701%2015.8998%206.89995%2016.3027%206.89995%2016.7998C6.89995%2017.2969%206.49701%2017.6998%205.99995%2017.6998H3.59995C3.10289%2017.6998%202.69995%2017.2969%202.69995%2016.7998C2.69995%2016.3027%203.10289%2015.8998%203.59995%2015.8998H5.99995ZM20.4%2015.8998C20.897%2015.8998%2021.3%2016.3027%2021.3%2016.7998C21.3%2017.2969%2020.897%2017.6998%2020.4%2017.6998H12.1875C11.6904%2017.6998%2011.2875%2017.2969%2011.2875%2016.7998C11.2875%2016.3027%2011.6904%2015.8998%2012.1875%2015.8998H20.4Z'/%3e%3cpath%20d='M11.1%2016.7998C11.1%2015.64%2010.1597%2014.6998%208.99995%2014.6998C7.84015%2014.6998%206.89995%2015.64%206.89995%2016.7998C6.89995%2017.9596%207.84015%2018.8998%208.99995%2018.8998C10.1597%2018.8998%2011.1%2017.9596%2011.1%2016.7998ZM12.9%2016.7998C12.9%2018.9537%2011.1539%2020.6998%208.99995%2020.6998C6.84604%2020.6998%205.09995%2018.9537%205.09995%2016.7998C5.09995%2014.6459%206.84604%2012.8998%208.99995%2012.8998C11.1539%2012.8998%2012.9%2014.6459%2012.9%2016.7998Z'/%3e%3c/svg%3e`),"aria-hidden":`true`}),(0,P.jsx)(`span`,{children:`Reorder sidebar items`})]}),l&&(0,P.jsxs)(me,{className:M.sidebarContextMenuItem,onClick:l,children:[(0,P.jsx)(`span`,{className:M.sidebarContextMenuItemFaIcon,"aria-hidden":`true`,children:(0,P.jsx)(s,{icon:c})}),(0,P.jsx)(`span`,{children:`Reset sidebar order`})]}),h&&(0,P.jsxs)(me,{className:M.sidebarContextMenuItem,onClick:Me,children:[(0,P.jsx)(`span`,{className:M.sidebarContextMenuItemFaIcon,"aria-hidden":`true`,children:(0,P.jsx)(s,{icon:a})}),(0,P.jsx)(`span`,{children:u?`Toggle expanded sidebar`:`Toggle compact sidebar`})]})]})]}):Fe;return(0,P.jsx)(ge,{value:ce,children:(0,P.jsx)(st,{value:ke,children:(0,P.jsxs)(`div`,{className:Te(M.root,f),style:te,"data-compact":u||void 0,children:[(0,P.jsx)(`div`,{className:M.sidebarContainer,children:Ie}),(0,P.jsx)(`div`,{className:M.content,children:ne}),D.mounted&&(0,P.jsx)(v,{children:(0,P.jsx)(`div`,{ref:D.refs.setFloating,style:{...D.floatingStyles,visibility:D.isPositioned?`visible`:`hidden`},className:M.popoverPositioner,children:(0,P.jsx)(`div`,{...D.getFloatingProps(),className:M.popover,"data-state":D.status,"data-positioned":D.isPositioned||void 0,"data-variant":`overspill`,children:(0,P.jsx)(`div`,{className:M.overspill,role:`menu`,children:E.map((e,t)=>(0,P.jsxs)(`button`,{type:`button`,role:`menuitem`,className:M.overspillItem,"data-active":p(e)||void 0,style:{"--stagger":t},onClick:()=>{D.setOpen(!1),k(e.href)},children:[(0,P.jsx)(`span`,{className:M.overspillItemIconChip,"aria-hidden":`true`,children:(0,P.jsx)(`span`,{className:M.overspillItemIcon,style:Xt(e.icon)})}),(0,P.jsx)(`span`,{children:e.name})]},e.id))})})})}),(0,P.jsx)(mt,{open:g,onOpenChange:_,items:e,onItemsChange:je,onReset:l})]})})})}function Qt({item:e,active:t,compact:n,onClick:r}){return(0,P.jsx)($t,{label:e.name,enabled:n,children:(0,P.jsxs)(`button`,{type:`button`,onClick:r,className:M.railButton,"data-active":t||void 0,"aria-current":t?`page`:void 0,"aria-label":n?e.name:void 0,children:[(0,P.jsx)(`span`,{className:M.railIconChip,"aria-hidden":`true`,children:(0,P.jsx)(`span`,{className:M.railIcon,style:Xt(e.icon)})}),!n&&(0,P.jsx)(`span`,{className:M.railLabel,children:e.name})]})})}function $t({label:e,enabled:t,children:n}){return t?(0,P.jsxs)(_e,{children:[(0,P.jsx)(je,{render:n}),(0,P.jsx)(T,{side:`right`,children:e})]}):n}function en({placement:e,offsetPx:t,duration:n={open:180,close:140},onOpen:r}){let[i,a]=(0,N.useState)(!1),o=ce({open:i,onOpenChange:e=>{e&&!i&&r?.(),a(e)},placement:e,middleware:[D(t),p({fallbackPlacements:[`right`,`left`]}),re({padding:8})],whileElementsMounted:w}),s=Me(o.context),c=u(o.context),ee=oe(o.context,{role:`dialog`}),l=m([s,c,ee]),d=ue(o.context,{duration:n});return{open:i,setOpen:a,mounted:d.isMounted,status:d.status,isPositioned:o.isPositioned,refs:o.refs,floatingStyles:o.floatingStyles,context:o.context,getReferenceProps:l.getReferenceProps,getFloatingProps:l.getFloatingProps}}var N,P,tn;function nn(){return(nn=j((()=>{Ce(),pe(),i(),b(),o(),E(),N=Re(),l(),Ie(),Fe(),ne(),ie(),ft(),Be(),ze(),y(),ye(),S(),f(),Ue(),$e(),ae(),de(),xe(),n(),t(),x(),xt(),pt(),ct(),ut(),Yt(),P=Le(),tn=`button, a, input, textarea, select, [role="button"], [role="menuitem"], [data-dock-nav-context-menu-block]`,Zt.__docgenInfo={description:``,methods:[],displayName:`DockNav2Base`,props:{sidebarItems:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  name: string;
  /** Owning app display name, shown as a badge while reordering pinned sidebar items. */
  appName?: string;
  /** URL to the icon SVG. Rendered via CSS mask so the icon adopts the surrounding text color. */
  icon: string;
  /** Resolved navigation target (e.g. \`/:accountId\` already substituted). */
  href: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`appName`,value:{name:`string`,required:!1},description:`Owning app display name, shown as a badge while reordering pinned sidebar items.`},{key:`icon`,value:{name:`string`,required:!0},description:`URL to the icon SVG. Rendered via CSS mask so the icon adopts the surrounding text color.`},{key:`href`,value:{name:`string`,required:!0},description:"Resolved navigation target (e.g. `/:accountId` already substituted)."}]}}],raw:`Item[]`},description:`Ordered list of items rendered on the rail. This is the whole surface —
there is no catalog behind it.`},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(href: string) => void`,signature:{arguments:[{type:{name:`string`},name:`href`}],return:{name:`void`}}},description:``},logoHref:{required:!1,tsType:{name:`string`},description:`Optional destination for the top logo. When omitted, the logo is decorative chrome.`},isItemActive:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: Item) => boolean`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: string;
  name: string;
  /** Owning app display name, shown as a badge while reordering pinned sidebar items. */
  appName?: string;
  /** URL to the icon SVG. Rendered via CSS mask so the icon adopts the surrounding text color. */
  icon: string;
  /** Resolved navigation target (e.g. \`/:accountId\` already substituted). */
  href: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`appName`,value:{name:`string`,required:!1},description:`Owning app display name, shown as a badge while reordering pinned sidebar items.`},{key:`icon`,value:{name:`string`,required:!0},description:`URL to the icon SVG. Rendered via CSS mask so the icon adopts the surrounding text color.`},{key:`href`,value:{name:`string`,required:!0},description:"Resolved navigation target (e.g. `/:accountId` already substituted)."}]}},name:`item`}],return:{name:`boolean`}}},description:`Predicate that decides whether a given item is the currently active route.
Defaults to "never active".`},renderUserMenu:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(api: { open: boolean; openChange: (next: boolean) => void }) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ open: boolean; openChange: (next: boolean) => void }`,signature:{properties:[{key:`open`,value:{name:`boolean`,required:!0}},{key:`openChange`,value:{name:`signature`,type:`function`,raw:`(next: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`next`}],return:{name:`void`}},required:!0}}]}},name:`api`}],return:{name:`ReactNode`}}},description:'Render the user-menu trigger (and its popover) in the bottom-of-rail\navatar slot. `DockNav2Base` owns the `open` boolean so it can enforce the\n"one popover at a time" rule across the rail\'s surfaces.'},onSidebarItemIdsChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(ids: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`ids`}],return:{name:`void`}}},description:`Fired when the user reorders the rail. Omit to make the order fixed.`},onSidebarItemIdsReset:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Reset the host-owned order back to its default. Omit to hide the affordance.`},isCompact:{required:!1,tsType:{name:`boolean`},description:`When true, render the rail as icon-only with delayed tooltips.`,defaultValue:{value:`false`,computed:!1}},onCompactChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(next: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`next`}],return:{name:`void`}}},description:`Toggle the rail between expanded and compact modes.`},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}}}})))()}function rn(e){return e.flatMap(e=>e.modules)}function an(e,t,n){let r=rn(e);return t?dt(e,r,void 0,t):ke(Ae(e,r,void 0,n))}function on({enabled:e,getAccounts:t,children:n}){return e?(0,I.jsx)(Ne,{getAccounts:t,children:n}):(0,I.jsx)(I.Fragment,{children:n})}function sn({onOpenShortcuts:e,onOpenAccountSwitch:t,onOpenPreferences:n,enableAccountSwitch:r}){return _({keys:h,action:e,description:`Show keyboard shortcuts`,group:`Help`}),_({keys:se,action:n,description:`Open preferences`,group:`General`}),_({keys:Sn,action:t,description:`Switch account`,group:`Navigation`,enabled:r}),null}function cn({apps:t=A,appModules:n,appModuleSortOrder:i=Xe,initialSidebarOrder:a,initialActive:o,logoHref:s,forceRailHeight:c,registerCommandPalette:ee=!1,registerSidePanel:l=!1,isCompact:u=!1,usePreferenceCompact:d=!1,preferencesKey:f=gn,extraContent:ne,unauthenticated:p=!1,enableAccountSwitch:m=!0,impersonating:h=!1,onImpersonatingChange:re}){(0,F.useEffect)(()=>{if(!h){k();return}let e=Date.now();return le({accessToken:`storybook-mock-token`,expiresAt:e+hn,issuedAt:e,actor:{email:pn.email??`admin@gocrisp.example`},target:{email:mn.email,name:mn.name},mode:`readonly`}),()=>k()},[h]);let{preferences:g,updatePreferences:_}=e({key:f}),v=(0,F.useMemo)(()=>an(t,n,i),[t,n,i]),ie=(0,F.useMemo)(()=>fe(t,rn(t),void 0),[t]),[y,b]=(0,F.useState)(a),ae=(0,F.useMemo)(()=>at(v,y),[v,y]),[x,oe]=(0,F.useState)(o??v[0]?.id),[se,ce]=(0,F.useState)(!1),[ue,S]=(0,F.useState)(!1),[C,w]=(0,F.useState)(En[1]),[de,T]=(0,F.useState)(!1),[pe,me]=(0,F.useState)(!1),[he,ge]=(0,F.useState)(u),_e=d?g.isSidebarCompact:he,ve=(0,F.useCallback)(async()=>(await new Promise(e=>window.setTimeout(e,180)),En),[]);(0,F.useEffect)(()=>{b(a)},[a]),(0,F.useEffect)(()=>{ge(u)},[u]);let E=(0,F.useCallback)(e=>{let t=v.find(t=>t.href===e);t&&oe(t.id)},[v]),ye=(0,F.useCallback)(e=>{if(d){_({isSidebarCompact:e});return}ge(e)},[_,d]),be=(0,I.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,I.jsx)(`h1`,{style:{marginTop:0},children:`Application content`}),(0,I.jsxs)(`p`,{children:[`Active module: `,(0,I.jsx)(`strong`,{children:x??`(none)`})]}),m&&(0,I.jsxs)(`p`,{children:[`Active account:`,` `,(0,I.jsx)(`strong`,{children:C?`${C.name} (${C.id})`:`(none)`})]}),(0,I.jsxs)(`p`,{style:{maxWidth:640},children:[`DockNav2 has no module drawer — the rail is the whole surface. Right-click the rail to reorder it or switch between compact and expanded.`,ee&&(0,I.jsxs)(I.Fragment,{children:[` `,`A command palette is registered, so the toggle under the logo (and`,` `,(0,I.jsx)(`kbd`,{children:Tn.join(` `)}),`) opens it.`]})]}),ne]});return(0,I.jsxs)(we,{children:[(0,I.jsx)(sn,{onOpenShortcuts:()=>T(!0),onOpenAccountSwitch:()=>S(!0),onOpenPreferences:()=>ce(!0),enableAccountSwitch:m}),(0,I.jsxs)(`div`,{"data-story-dock-nav":c?``:void 0,style:{minHeight:c?`${c}px`:`calc(100vh - var(--crisp-chrome-inset-top, 0px))`,height:c?`${c}px`:void 0,background:`var(--color-background, #f1f5f5)`},children:[c&&(0,I.jsx)(`style`,{children:`[data-story-dock-nav] [class*="sidebarContainer"] { height: ${c}px !important; }`}),(0,I.jsx)(Je,{children:(0,I.jsx)(Ke,{reloadOnSessionEnd:!1,onStop:()=>re?.(!1)})}),(0,I.jsxs)(on,{enabled:m,getAccounts:ve,children:[(0,I.jsxs)(Zt,{sidebarItems:ae,onNavigate:E,logoHref:s,isItemActive:e=>e.id===x,renderUserMenu:e=>(0,I.jsx)(O,{user:p?void 0:h?mn:pn,isAuthenticated:!p,open:e.open,onOpenChange:e.openChange,onLogin:()=>console.info(`[DockNav2 story] login triggered`),onLogout:()=>console.info(`[DockNav2 story] logout triggered`),navItems:ie,onNavItemNavigate:e=>E(e.href),onPreferences:()=>ce(!0),preferencesDisplayKeys:bn,preferencesAriaKeyShortcuts:xn,onSwitchAccount:m?()=>S(!0):void 0,switchAccountDisplayKeys:m?Cn:void 0,switchAccountAriaKeyShortcuts:m?wn:void 0,onKeyboardShortcuts:()=>T(!0),keyboardShortcutsDisplayKeys:vn,keyboardShortcutsAriaKeyShortcuts:yn,onAbout:()=>me(!0)}),isCompact:_e,onCompactChange:ye,onSidebarItemIdsChange:b,onSidebarItemIdsReset:y?()=>b(void 0):void 0,style:c?{minHeight:`${c}px`,height:`${c}px`}:void 0,children:[ee&&(0,I.jsx)(lt,{selectedAccountId:C?.id,onAccountChange:w}),l?(0,I.jsx)(it,{mode:`fixed`,defaultSize:`18rem`,sidePanelContent:(0,I.jsx)(rt,{}),children:be}):be]}),(0,I.jsx)(We,{open:ue,onOpenChange:S,onChange:w,selectedId:C?.id})]}),(0,I.jsx)(r,{open:se,onOpenChange:ce,preferencesKey:f}),(0,I.jsx)(Oe,{open:de,onOpenChange:T}),(0,I.jsx)(te,{open:pe,onOpenChange:me})]})]})}function ln({impersonating:e,registerCommandPalette:t,registerSidePanel:n,onImpersonatingChange:r}){let[i,a]=(0,F.useState)(()=>new Set(A.map(e=>e.id))),o=(0,F.useMemo)(()=>A.filter(e=>i.has(e.id)),[i]),s=e=>a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,I.jsx)(cn,{apps:o,logoHref:`/`,usePreferenceCompact:!0,impersonating:e,registerCommandPalette:t,registerSidePanel:n,onImpersonatingChange:r,extraContent:(0,I.jsxs)(`section`,{style:{marginTop:24},children:[(0,I.jsx)(`h2`,{style:{marginBottom:12},children:`Apps`}),(0,I.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`grid`,gap:6},children:A.map(e=>(0,I.jsx)(`li`,{children:(0,I.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,I.jsx)(`input`,{type:`checkbox`,checked:i.has(e.id),onChange:()=>s(e.id)}),(0,I.jsx)(`span`,{children:e.name??e.id}),(0,I.jsxs)(`span`,{style:{opacity:.6,fontSize:12},children:[`(`,e.modules.length,` module`,e.modules.length===1?``:`s`,`)`]})]})},e.id))}),(0,I.jsx)(`p`,{style:{marginTop:16,opacity:.7,fontSize:13},children:`Disabling an app removes its modules from the rail. Unlike DockNav there is no drawer to fall back on — everything authorized is on the rail (or in its overspill).`})]})})}function un(){let t=(0,F.useMemo)(()=>an(A,void 0,Xe),[]),n=(0,F.useMemo)(()=>fe(A,rn(A),void 0),[]),{preferences:i,setPreferences:a,updatePreferences:o,isLoading:s}=e({key:_n}),c=(0,F.useMemo)(()=>at(t,i.sidebarItemOrder),[t,i.sidebarItemOrder]),[ee,l]=(0,F.useState)(t[0]?.id),[u,d]=(0,F.useState)(!1),[f,ne]=(0,F.useState)(!1),[p,m]=(0,F.useState)(!1),h=(0,F.useCallback)(e=>{let n=t.find(t=>t.href===e);n&&l(n.id)},[t]),re=(0,F.useCallback)(()=>{a({...i,sidebarItemOrder:void 0})},[i,a]);return(0,I.jsx)(we,{children:(0,I.jsxs)(`div`,{style:{minHeight:`calc(100vh - var(--crisp-chrome-inset-top, 0px))`,background:`var(--color-background, #f1f5f5)`},children:[(0,I.jsx)(Zt,{sidebarItems:c,onNavigate:h,isItemActive:e=>e.id===ee,renderUserMenu:e=>(0,I.jsx)(O,{user:pn,isAuthenticated:!0,open:e.open,onOpenChange:e.openChange,onLogout:()=>console.info(`[DockNav2 story] logout triggered`),navItems:n,onNavItemNavigate:e=>h(e.href),onPreferences:()=>d(!0),preferencesDisplayKeys:bn,preferencesAriaKeyShortcuts:xn,onKeyboardShortcuts:()=>ne(!0),keyboardShortcutsDisplayKeys:vn,keyboardShortcutsAriaKeyShortcuts:yn,onAbout:()=>m(!0)}),isCompact:i.isSidebarCompact,onCompactChange:e=>void o({isSidebarCompact:e}),onSidebarItemIdsChange:e=>void o({sidebarItemOrder:e}),onSidebarItemIdsReset:i.sidebarItemOrder?re:void 0,children:(0,I.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,I.jsx)(`h1`,{style:{marginTop:0},children:`Persisted sidebar order`}),(0,I.jsxs)(`p`,{style:{maxWidth:640},children:[`Right-click the rail and choose `,(0,I.jsx)(`strong`,{children:`Reorder sidebar items`}),`, then drag the rows. The order is persisted in IndexedDB (DB `,(0,I.jsx)(`code`,{children:`crisp:main`}),`, key`,` `,(0,I.jsx)(`code`,{children:_n}),`) via `,(0,I.jsx)(`code`,{children:`useDockPreferences`}),`, under the `,(0,I.jsx)(`code`,{children:`sidebarItemOrder`}),` field — separate from DockNav's pinned`,` `,(0,I.jsx)(`code`,{children:`sidebarItemIds`}),` so the two surfaces can coexist. Reload to confirm it survives.`]}),(0,I.jsx)(`p`,{style:{opacity:.7,fontSize:13},children:s?`Loading from IDB…`:i.sidebarItemOrder?.join(`, `)??`(using the derived order)`})]})}),(0,I.jsx)(r,{open:u,onOpenChange:d,preferencesKey:_n}),(0,I.jsx)(Oe,{open:f,onOpenChange:ne}),(0,I.jsx)(te,{open:p,onOpenChange:m})]})})}function dn(e){let[,t]=fn();return(0,I.jsx)(cn,{...e,onImpersonatingChange:e=>t({impersonating:e})})}var F,I,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,On,$,kn;function An(){return(An=j((()=>{F=Re(),Ie(),Ge(),d(),S(),f(),Ue(),qe(),ht(),Ye(),Qe(),ve(),n(),t(),x(),tt(),nt(),pt(),nn(),I=Le(),{useArgs:fn}=__STORYBOOK_MODULE_PREVIEW_API__,pn={name:`Allan Brown`,email:`allanbrown@acme.com`,given_name:`Allan`},mn={name:`Cipriano Cliente`,email:`cipriano@dot-foods.example`},hn=3e5,gn=`DockNav2_preferences_storybook_v1`,_n=`DockNav2_storybook_v1`,vn=g(h),yn=C(h),bn=g(se),xn=C(se),Sn=`mod+k`,Cn=g(Sn),wn=C(Sn),Tn=g(ot),En=[{id:`80001`,name:`Acme Grocery`},{id:`80002`,name:`Bright Farms`},{id:`80003`,name:`Canyon Market`},{id:`80004`,name:`Dawn Distribution`},{id:`80005`,name:`Evergreen Foods`},{id:`80006`,name:`Fieldstone`},{id:`80007`,name:`Golden Pantry`},{id:`80008`,name:`Harbor Wholesale`},{id:`80009`,name:`Ivy Organics`},{id:`80010`,name:`Juno Retail`}],Dn={title:`Common/DockNav2`,component:cn,render:dn,parameters:{layout:`fullscreen`},argTypes:{registerCommandPalette:{name:`registerCommandPalette`,control:`boolean`,description:`Mounts a CommandPalette child. Registration is what makes the rail toggle and the ⌘⇧P shortcut appear.`},registerSidePanel:{name:`registerSidePanel`,control:`boolean`,description:`Mounts a SidePanel child. DockNav2 provides the SidePanel context but no rail toggle — that slot now belongs to the command palette.`},impersonating:{name:`impersonating`,control:`boolean`,description:`Seeds a mock impersonation session (amber banner + user-menu overlay). Toggle off, or use Stop / ⌘I · Ctrl+I on the banner, to clear it.`},onImpersonatingChange:{control:!1,table:{disable:!0}}},args:{impersonating:!1,registerCommandPalette:!1,registerSidePanel:!1}},L={render:e=>{let[,t]=fn();return(0,I.jsx)(ln,{...e,onImpersonatingChange:e=>t({impersonating:e})})}},R={args:{},parameters:{docs:{description:{story:`The rail is derived from the app module sort order (flattened), with any modules the sort order never mentions appended — nothing is hidden, because there is no drawer to hide it in.`}}}},z={name:`Explicit appModules list`,args:{appModules:[{appId:`ai-studio`,moduleId:`ai-studio-sessions`},{appId:`data-platform`,moduleId:`home`},{appId:`strategy`,moduleId:`strategy`,nameOverride:`Strategy Hub`},{appId:`order-mgmt`,moduleId:`order-mgmt`}],initialActive:`ai-studio:ai-studio-sessions`},parameters:{docs:{description:{story:"When the host passes `appModules`, the list is taken literally: exactly those modules, in that order, with `nameOverride` applied. Nothing is appended, and entries that do not resolve to an authorized nav module are dropped."}}}},B={args:{isCompact:!0},parameters:{docs:{description:{story:"Icon-only rail with delayed tooltips. Toggle it from the rail context menu or the Preferences dialog — both write the same `isSidebarCompact` preference DockNav uses."}}}},V={name:`With overspill ("...")`,args:{forceRailHeight:480},parameters:{docs:{description:{story:`The rail measures itself and collapses the trailing items into a "More" popover when they cannot fit. Unchanged from DockNav — and more load-bearing here, since the drawer is no longer a fallback route to those modules.`}}}},H={args:{apps:[],initialActive:void 0},parameters:{docs:{description:{story:`No authorized modules: the rail renders its caps only. The context menu keeps the compact toggle but drops reordering, since there is nothing to reorder.`}}}},U={name:`Active: AI Studio › Sessions`,args:{initialActive:`ai-studio:ai-studio-sessions`}},W={name:`Reorder dialog`,args:{initialSidebarOrder:[...Ze].reverse()},parameters:{docs:{description:{story:'Right-click the rail and choose "Reorder sidebar items" to open the centred dialog. The rows are the same cabbage `Sortable` rows DockNav shows inside its drawer, so the drag gesture is unchanged; every drag commits immediately, and "Reset to default order" restores the derived order. This story seeds a reversed order so the rail starts out visibly customised.'}}}},G={name:`With command palette`,args:{registerCommandPalette:!0},parameters:{docs:{description:{story:"A `<CommandPalette>` mounted anywhere inside DockNav2 registers itself, which is what adds the magnifier toggle under the logo and binds ⌘⇧P (visible in the keyboard shortcuts dialog). For now the palette presents the account switcher; the registration/toggle/shortcut wiring is the part that will not change when real commands land."}}}},K={name:`Without command palette`,args:{registerCommandPalette:!1},parameters:{docs:{description:{story:`With no palette registered the toggle slot under the logo stays empty and ⌘⇧P is unbound. The rail caps reserve the same height either way, so the middle items stay centred.`}}}},q={name:`With side panel`,args:{registerSidePanel:!0,registerCommandPalette:!0},parameters:{docs:{description:{story:"DockNav2 still provides the SidePanel context, so `<SidePanel>` children mount and render. There is no rail toggle for it — the slot under the logo now belongs to the command palette — so the panel sits at its `defaultOpen` state until a host drives it."}}}},J={name:`User menu — authenticated`,args:{},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail. Opening the menu dismisses the overspill popover and vice versa — the same single-popover rule DockNav enforces.`}}}},Y={name:`User menu — no account provider`,args:{enableAccountSwitch:!1},parameters:{docs:{description:{story:`Without an AccountsProvider above the dock the Switch account row is omitted and ⌘K is unbound.`}}}},X={name:`User menu — unauthenticated`,args:{unauthenticated:!0}},Z={name:`User menu — impersonating`,args:{impersonating:!0},parameters:{docs:{description:{story:"While an impersonation session is active the avatar and identity card swap to the impersonated target, keeping the rail consistent with the banner. Use the `impersonating` control, the banner Stop button, or ⌘I / Ctrl+I to dismiss."}}}},Q={name:`Preferences dialog`,args:{usePreferenceCompact:!0},parameters:{docs:{description:{story:"Open the user menu, then Preferences. The Compact checkbox writes the shared `isSidebarCompact` preference, so it drives DockNav2 exactly as it drives DockNav."}}}},On={name:`Keyboard shortcuts dialog`,args:{registerCommandPalette:!0},parameters:{docs:{description:{story:`Open the user menu, then Keyboard shortcuts (or press Shift+?). With a command palette registered, ⌘⇧P appears in the Navigation group — the palette registers its own shortcut, so surfaces without one never advertise it.`}}}},$={name:`With persisted order`,render:()=>(0,I.jsx)(un,{})},kn=[`Overview`,`Default`,`ExplicitAppModules`,`Compact`,`WithOverspill`,`Empty`,`ActiveAiStudioSession`,`ReorderDialog`,`WithCommandPalette`,`WithoutCommandPalette`,`WithSidePanel`,`UserMenuAuthenticated`,`UserMenuWithoutAccountSwitch`,`UserMenuUnauthenticated`,`UserMenuImpersonating`,`Preferences`,`KeyboardShortcuts`,`WithPersistedOrder`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [, updateArgs] = useArgs();
    return <DockNav2Overview {...args} onImpersonatingChange={next => updateArgs({
      impersonating: next
    })} />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The rail is derived from the app module sort order (flattened), with any modules the sort order never mentions appended — nothing is hidden, because there is no drawer to hide it in.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Active: AI Studio › Sessions',
  args: {
    initialActive: 'ai-studio:ai-studio-sessions'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'User menu — authenticated',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Click the avatar at the bottom of the rail. Opening the menu dismisses the overspill popover and vice versa — the same single-popover rule DockNav enforces.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'User menu — unauthenticated',
  args: {
    unauthenticated: true
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:`{
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
}`,...On.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'With persisted order',
  render: () => <PersistedOrderDemo />
}`,...$.parameters?.docs?.source}}}})))()}An();export{U as ActiveAiStudioSession,B as Compact,R as Default,H as Empty,z as ExplicitAppModules,On as KeyboardShortcuts,L as Overview,Q as Preferences,W as ReorderDialog,J as UserMenuAuthenticated,Z as UserMenuImpersonating,X as UserMenuUnauthenticated,Y as UserMenuWithoutAccountSwitch,G as WithCommandPalette,V as WithOverspill,$ as WithPersistedOrder,q as WithSidePanel,K as WithoutCommandPalette,kn as __namedExportsOrder,Dn as default};