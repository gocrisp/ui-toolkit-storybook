import{a as e,i as t,n,t as r}from"./PreferencesDialog-Bg3JEX9E.js";import{Bt as i,D as a,E as ee,Ht as o,Jt as s,Kt as c,T as l,Ut as u,Vt as te,Wt as d,Xt as f,c as ne,d as p,f as m,i as h,l as re,qt as ie,r as ae,s as g,u as _,w as oe,zt as v}from"./UserMenu-KeYHXjXW.js";import{l as y,u as se}from"./AccountSelect-GV1C7ra6.js";import{n as b,x}from"./iframe-BYtyZ0Xk.js";import{n as ce,t as S}from"./useStoredValue-C0ZjEM7r.js";import{n as le,t as ue}from"./AccountSwitch-DBWCcOwl.js";import{a as C,i as de,r as fe,t as pe}from"./AppChrome-CLwaYO1w.js";import{i as me,n as he,r as ge,t as w}from"./dockNavMocks-DB6Z7_Qi.js";import{n as _e,t as ve}from"./DockNav-DlnQO2QG.js";import{i as ye,n as be,r as xe,t as Se}from"./SidePanel-B0-umNOz.js";import{n as Ce}from"./rolldown-runtime-DkW27tQK.js";function T(e,t){return`${e}:${t}`}function E(e,t,n){return{id:T(e.id,t.id),name:n??t.name,appName:e.name??e.id,icon:t.icon,href:t.path}}function we(e,t){let n=new Map(e.map(e=>[e.id,e])),r=new Map;for(let t of e)for(let e of t.modules)e.isNavItem!==!1&&r.set(T(t.id,e.id),{app:t,mod:e});let i=new Set,a=[],ee=e=>{let t=[];for(let n of e??[]){let e=r.get(T(n.appId,n.moduleId));if(!e)continue;let a=E(e.app,e.mod,n.nameOverride);i.has(a.id)||(i.add(a.id),t.push(a))}return t};for(let e of t??[]){let t=e.items===void 0?(n.get(e.itemSrc?.appId??``)?.modules??[]).filter(e=>e.isNavItem!==!1).map(t=>E(n.get(e.itemSrc?.appId??``),t)).filter(e=>!i.has(e.id)&&(i.add(e.id),!0)):ee(e.items);t.length>0&&a.push({name:e.name,isRoot:e.isRoot,items:t})}for(let t of e){let e=t.modules.filter(e=>e.isNavItem!==!1).map(e=>E(t,e)).filter(e=>!i.has(e.id)&&(i.add(e.id),!0));e.length>0&&a.push({name:t.name??t.id,items:e})}return a}function Te(e){let t=[],n=new Set;for(let r of e)for(let e of r.modules){if(e.isUserMenuItem!==!0)continue;let i=E(r,e);n.has(i.id)||(n.add(i.id),t.push(i))}return t}function Ee(e){let t=[],n=new Set;for(let r of e)for(let e of r.items)n.has(e.id)||(n.add(e.id),t.push(e));return t}function De({enabled:e,getAccounts:t,children:n}){return e?(0,A.jsx)(y,{getAccounts:t,children:n}):(0,A.jsx)(A.Fragment,{children:n})}function Oe({onOpenShortcuts:e,onOpenAccountSwitch:t,onOpenPreferences:n,onNavigate:r,enableAccountSwitch:i}){return c({keys:o,action:e,description:`Show keyboard shortcuts`,group:`Help`}),c({keys:u,action:n,description:`Open preferences`,group:`General`}),c({keys:N,action:()=>console.info(`[DockNav story] command palette shortcut triggered`),description:`Open command palette`,group:`Navigation`,enabled:!i}),c({keys:N,action:t,description:`Switch account`,group:`Navigation`,enabled:i}),c({keys:`mod+/`,action:()=>r(`/ai-studio/sessions`),description:`Open AI Studio sessions`,group:`Navigation`}),null}function D({apps:t=w,appModuleSortOrder:n,sidebarItemIds:i,initialActive:a,logoHref:o,forceRailHeight:s,showToggleSlot:c=!0,registerSidePanel:l=!1,isCompact:u=!1,usePreferenceCompact:d=!1,preferencesKey:f=Re,extraContent:ne,unauthenticated:p=!1,enableAccountSwitch:m=!0,impersonating:h=!1,onImpersonatingChange:re}){(0,k.useEffect)(()=>{if(!h){v();return}let e=Date.now();return te({accessToken:`storybook-mock-token`,expiresAt:e+Fe,issuedAt:e,actor:{email:Ne.email??`admin@gocrisp.example`},target:{email:Pe.email,name:Pe.name},mode:`readonly`}),()=>v()},[h]);let{preferences:g,updatePreferences:_}=e({key:f}),y=(0,k.useMemo)(()=>we(t,n),[t,n]),se=(0,k.useMemo)(()=>Te(t),[t]),b=(0,k.useMemo)(()=>Ee(y).slice(0,Le).map(e=>e.id),[y]),x=(0,k.useMemo)(()=>{let e=new Map;for(let t of Ee(y))e.set(t.id,t);return e},[y]),[ce,S]=(0,k.useState)(i),le=ce??b,C=y.length===1,fe=C?Ie:y,me=(0,k.useMemo)(()=>C?y[0].items:le.map(e=>x.get(e)).filter(e=>!!e),[C,y,le,x]),[he,ge]=(0,k.useState)(a??i?.[0]??b[0]),[_e,ye]=(0,k.useState)(!1),[be,Ce]=(0,k.useState)(!1),[T,E]=(0,k.useState)(Ke[1]),[D,O]=(0,k.useState)(!1),[ke,Ae]=(0,k.useState)(!1),[je,Me]=(0,k.useState)(u),j=d?g.isSidebarCompact:je,ze=(0,k.useCallback)(async()=>(await new Promise(e=>window.setTimeout(e,180)),Ke),[]);(0,k.useEffect)(()=>{S(i)},[i]),(0,k.useEffect)(()=>{Me(u)},[u]);let M=(0,k.useCallback)(e=>{for(let t of x.values())if(t.href===e){ge(t.id);break}},[x]),N=(0,k.useCallback)(e=>{if(d){_({isSidebarCompact:e});return}Me(e)},[_,d]),P=(0,A.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,A.jsx)(`h1`,{style:{marginTop:0},children:`Application content`}),(0,A.jsxs)(`p`,{children:[`Active module: `,(0,A.jsx)(`strong`,{children:he??`(none)`})]}),m&&(0,A.jsxs)(`p`,{children:[`Active account:`,` `,(0,A.jsx)(`strong`,{children:T?`${T.name} (${T.id})`:`(none)`})]}),(0,A.jsx)(`p`,{style:{maxWidth:640},children:`This is the slot consumers fill with their app. The DockNav sidebar floats on the left and stays sticky as you scroll. Click the multi-coloured "Modules" button at the bottom of the rail to open the App Drawer.`}),ne]});return(0,A.jsxs)(ie,{children:[(0,A.jsx)(Oe,{onOpenShortcuts:()=>O(!0),onOpenAccountSwitch:()=>Ce(!0),onOpenPreferences:()=>ye(!0),onNavigate:M,enableAccountSwitch:m}),(0,A.jsxs)(`div`,{"data-story-dock-nav":s?``:void 0,style:{minHeight:s?`${s}px`:`calc(100vh - var(--crisp-chrome-inset-top, 0px))`,height:s?`${s}px`:void 0,background:`var(--color-background, #f1f5f5)`},children:[s&&(0,A.jsx)(`style`,{children:`[data-story-dock-nav] [class*="sidebarContainer"] { height: ${s}px !important; }`}),(0,A.jsx)(pe,{children:(0,A.jsx)(de,{reloadOnSessionEnd:!1,onStop:()=>re?.(!1)})}),(0,A.jsxs)(De,{enabled:m,getAccounts:ze,children:[(0,A.jsx)(ve,{groups:fe,sidebarItems:me,onNavigate:M,logoHref:o,isItemActive:e=>e.id===he,renderUserMenu:e=>(0,A.jsx)(ae,{user:p?void 0:h?Pe:Ne,isAuthenticated:!p,open:e.open,onOpenChange:e.openChange,onLogin:()=>console.info(`[DockNav story] login triggered`),onLogout:()=>console.info(`[DockNav story] logout triggered`),navItems:se,onNavItemNavigate:e=>M(e.href),onPreferences:()=>ye(!0),preferencesDisplayKeys:He,preferencesAriaKeyShortcuts:Ue,onSwitchAccount:m?()=>Ce(!0):void 0,switchAccountDisplayKeys:m?We:void 0,switchAccountAriaKeyShortcuts:m?Ge:void 0,onKeyboardShortcuts:()=>O(!0),keyboardShortcutsDisplayKeys:Be,keyboardShortcutsAriaKeyShortcuts:Ve,onAbout:()=>Ae(!0)}),showToggleSlot:c,isCompact:j,onCompactChange:N,onSidebarItemIdsChange:S,onSidebarItemIdsReset:C?void 0:()=>S(void 0),style:s?{minHeight:`${s}px`,height:`${s}px`}:void 0,children:l?(0,A.jsx)(Se,{mode:`fixed`,defaultSize:`18rem`,sidePanelContent:(0,A.jsx)(xe,{}),children:P}):P}),(0,A.jsx)(ue,{open:be,onOpenChange:Ce,onChange:E,selectedId:T?.id})]}),(0,A.jsx)(r,{open:_e,onOpenChange:ye,preferencesKey:f}),(0,A.jsx)(oe,{open:D,onOpenChange:O}),(0,A.jsx)(ee,{open:ke,onOpenChange:Ae})]})]})}function O(){return(0,A.jsxs)(`section`,{style:{marginTop:24,display:`grid`,gap:12},children:[(0,A.jsx)(`h2`,{style:{margin:0},children:`Side panel toggle positioning`}),(0,A.jsxs)(`p`,{style:{maxWidth:640,margin:0,color:`var(--color-foreground-subtle, #507179)`},children:[`Use the Storybook Controls panel to toggle `,(0,A.jsx)(`code`,{children:`registerSidePanel`}),`. When true, DockNav renders the top side-panel toggle button under the logo; when false, the button is removed. The middle rail items should stay centered relative to the full DockNav sidebar.`]})]})}function ke({impersonating:e,registerSidePanel:t,onImpersonatingChange:n}){let[r,i]=(0,k.useState)(()=>new Set(w.map(e=>e.id))),a=(0,k.useMemo)(()=>w.filter(e=>r.has(e.id)),[r]),ee=e=>i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,A.jsx)(D,{apps:a,sidebarItemIds:ge,logoHref:`/`,usePreferenceCompact:!0,impersonating:e,registerSidePanel:t,onImpersonatingChange:n,extraContent:(0,A.jsxs)(`section`,{style:{marginTop:24},children:[(0,A.jsx)(`h2`,{style:{marginBottom:12},children:`Apps`}),(0,A.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`grid`,gap:6},children:w.map(e=>(0,A.jsx)(`li`,{children:(0,A.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,A.jsx)(`input`,{type:`checkbox`,checked:r.has(e.id),onChange:()=>ee(e.id)}),(0,A.jsx)(`span`,{children:e.name??e.id}),(0,A.jsxs)(`span`,{style:{opacity:.6,fontSize:12},children:[`(`,e.modules.length,` module`,e.modules.length===1?``:`s`,`)`]})]})},e.id))}),(0,A.jsx)(`p`,{style:{marginTop:16,opacity:.7,fontSize:13},children:`Tip: enable exactly one app to see single-group mode (no drawer trigger).`})]})})}function Ae(){let[,e]=ce(re,void 0,_);return(0,k.useEffect)(()=>{let t={cacheKey:ze,sourceUrl:P.picture??``,displayUrl:M,checkedAt:Date.now()};m(t),e(t)},[e]),(0,A.jsxs)(`section`,{style:{marginTop:32},children:[(0,A.jsx)(`style`,{children:`
        .user-picture-story-grid {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .user-picture-story-card {
          display: grid;
          gap: 8px;
          width: 180px;
          color: var(--color-foreground, #334347);
        }

        .user-picture-story-avatar {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md, 8px);
          background: var(--color-accent-default, #00a56f);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          object-fit: cover;
          overflow: hidden;
          font-weight: 700;
        }

        .user-picture-story-card strong,
        .user-picture-story-card > span:not(.user-picture-story-avatar) {
          display: block;
        }

        .user-picture-story-card > span:not(.user-picture-story-avatar) {
          font-size: 13px;
          color: var(--color-muted-foreground, #66777c);
        }
      `}),(0,A.jsx)(`h2`,{style:{marginTop:0},children:`User picture cache states`}),(0,A.jsxs)(`div`,{className:`user-picture-story-grid`,children:[(0,A.jsxs)(`div`,{className:`user-picture-story-card`,children:[(0,A.jsx)(g,{user:P,cacheKey:ze,initialCount:2,className:`user-picture-story-avatar`}),(0,A.jsx)(`strong`,{children:`Memory cached picture`}),(0,A.jsx)(`span`,{children:`Renders the stored data URL from CrispMemory without a remote picture URL.`})]}),(0,A.jsxs)(`div`,{className:`user-picture-story-card`,children:[(0,A.jsx)(g,{user:qe,cacheKey:`storybook-inaccessible-user-picture`,initialCount:2,className:`user-picture-story-avatar`}),(0,A.jsx)(`strong`,{children:`Inaccessible picture`}),(0,A.jsx)(`span`,{children:`Falls back to initials when neither cache nor remote image is available.`})]}),(0,A.jsxs)(`div`,{className:`user-picture-story-card`,children:[(0,A.jsx)(g,{user:Je,cacheKey:`storybook-two-initial-user-picture`,initialCount:2,className:`user-picture-story-avatar`}),(0,A.jsx)(`strong`,{children:`Two initials`}),(0,A.jsx)(`span`,{children:`Uses the configurable fallback count when no picture URL exists.`})]})]})]})}function je(e){let[,t]=j();return(0,A.jsx)(D,{...e,onImpersonatingChange:e=>t({impersonating:e})})}function Me(){let t=w,n=(0,k.useMemo)(()=>we(t,he),[t]),i=(0,k.useMemo)(()=>Te(t),[t]),a=(0,k.useMemo)(()=>Ee(n),[n]),o=(0,k.useMemo)(()=>{let e=new Map;for(let t of a)e.set(t.id,t);return e},[a]),{preferences:s,setPreferences:c,updatePreferences:l,isLoading:u}=e({key:Q}),te=(0,k.useMemo)(()=>a.slice(0,Le).map(e=>e.id),[a]),d=s.sidebarItemIds??te,f=n.length===1,ne=f?Ie:n,p=(0,k.useMemo)(()=>f?n[0].items:d.map(e=>o.get(e)).filter(e=>!!e),[f,n,d,o]),[m,h]=(0,k.useState)(d[0]),[re,g]=(0,k.useState)(!1),[_,v]=(0,k.useState)(!1),[y,se]=(0,k.useState)(!1),b=(0,k.useCallback)(e=>{for(let t of o.values())if(t.href===e){h(t.id);break}},[o]),x=(0,k.useCallback)(e=>{let t=d,n=t.includes(e)?t.filter(t=>t!==e):[...t,e];l({sidebarItemIds:n})},[d,l]),ce=(0,k.useCallback)(()=>{c({...s,sidebarItemIds:void 0})},[s,c]),S=(0,k.useMemo)(()=>new Set(d),[d]);return(0,A.jsxs)(ie,{children:[(0,A.jsx)(Oe,{onOpenShortcuts:()=>v(!0),onOpenAccountSwitch:()=>{},onOpenPreferences:()=>g(!0),onNavigate:b,enableAccountSwitch:!1}),(0,A.jsxs)(`div`,{style:{minHeight:`calc(100vh - var(--crisp-chrome-inset-top, 0px))`,background:`var(--color-background, #f1f5f5)`},children:[(0,A.jsx)(ve,{groups:ne,sidebarItems:p,onNavigate:b,isItemActive:e=>e.id===m,renderUserMenu:e=>(0,A.jsx)(ae,{user:Ne,isAuthenticated:!0,open:e.open,onOpenChange:e.openChange,onLogout:()=>console.info(`[DockNav story] logout triggered`),navItems:i,onNavItemNavigate:e=>b(e.href),onPreferences:()=>g(!0),preferencesDisplayKeys:He,preferencesAriaKeyShortcuts:Ue,onKeyboardShortcuts:()=>v(!0),keyboardShortcutsDisplayKeys:Be,keyboardShortcutsAriaKeyShortcuts:Ve,onAbout:()=>se(!0)}),showToggleSlot:!0,isCompact:s.isSidebarCompact,onCompactChange:e=>void l({isSidebarCompact:e}),onSidebarItemIdsChange:e=>void l({sidebarItemIds:e}),onSidebarItemIdsReset:f?void 0:ce,children:(0,A.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,A.jsx)(`h1`,{style:{marginTop:0},children:`Persisted module selection`}),(0,A.jsxs)(`p`,{style:{maxWidth:640},children:[`The selected rail modules are persisted in IndexedDB (DB `,(0,A.jsx)(`code`,{children:`crisp:main`}),`, key`,` `,(0,A.jsx)(`code`,{children:Q}),`) via `,(0,A.jsx)(`code`,{children:`useDockPreferences`}),`. Toggle pins below to mutate it; reload the page to confirm it survives. Both the rail and the panel re-render in lockstep — they share the same `,(0,A.jsx)(`code`,{children:`useSyncExternalStore`}),` `,`subscription under the hood.`]}),(0,A.jsx)(`p`,{style:{opacity:.7,fontSize:13},children:u?`Loading from IDB…`:`Pinned (${d.length}):`}),(0,A.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`grid`,gap:6},children:a.map(e=>(0,A.jsx)(`li`,{children:(0,A.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,A.jsx)(`input`,{type:`checkbox`,checked:S.has(e.id),onChange:()=>x(e.id)}),(0,A.jsx)(`span`,{children:e.name}),(0,A.jsxs)(`span`,{style:{opacity:.5,fontSize:12},children:[`(`,e.id,`)`]})]})},e.id))}),(0,A.jsx)(`button`,{type:`button`,onClick:ce,style:{marginTop:20,padding:`6px 12px`,border:`1px solid var(--color-border-bold, #cbd1d3)`,background:`transparent`,borderRadius:6,cursor:`pointer`,font:`inherit`},children:`Reset module selection`})]})}),(0,A.jsx)(r,{open:re,onOpenChange:g,preferencesKey:Q}),(0,A.jsx)(oe,{open:_,onOpenChange:v}),(0,A.jsx)(ee,{open:y,onOpenChange:se})]})]})}var k,A,j,Ne,Pe,Fe,Ie,Le,Re,ze,M,Be,Ve,He,Ue,N,We,Ge,Ke,P,qe,Je,Ye,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Xe;function Ze(){return(Ze=Ce((()=>{k=x(),se(),C(),i(),d(),S(),a(),le(),fe(),n(),t(),l(),ye(),be(),p(),ne(),me(),_e(),h(),A=b(),{useArgs:j}=__STORYBOOK_MODULE_PREVIEW_API__,Ne={name:`Allan Brown`,email:`allanbrown@acme.com`,given_name:`Allan`},Pe={name:`Cipriano Cliente`,email:`cipriano@dot-foods.example`},Fe=3e5,Ie=[],Le=7,Re=`DockNav_preferences_storybook_v1`,ze=`storybook-cached-user-picture`,M=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Crect%20width%3D%2272%22%20height%3D%2272%22%20rx%3D%2216%22%20fill%3D%22%230f766e%22%2F%3E%3Ctext%20x%3D%2236%22%20y%3D%2244%22%20text-anchor%3D%22middle%22%20font-size%3D%2226%22%20font-family%3D%22Arial%22%20font-weight%3D%22700%22%20fill%3D%22white%22%3ECP%3C%2Ftext%3E%3C%2Fsvg%3E`,Be=s(o),Ve=f(o),He=s(u),Ue=f(u),N=`mod+k`,We=s(N),Ge=f(N),Ke=[{id:`80001`,name:`Acme Grocery`},{id:`80002`,name:`Bright Farms`},{id:`80003`,name:`Canyon Market`},{id:`80004`,name:`Dawn Distribution`},{id:`80005`,name:`Evergreen Foods`},{id:`80006`,name:`Fieldstone`},{id:`80007`,name:`Golden Pantry`},{id:`80008`,name:`Harbor Wholesale`},{id:`80009`,name:`Ivy Organics`},{id:`80010`,name:`Juno Retail`}],P={name:`Cached Person`,email:`cached.person@acme.com`},qe={name:`Broken Avatar`,email:`broken.avatar@acme.com`,picture:`https://example.invalid/broken-avatar.png`},Je={name:`Allan Brown`,email:`allanbrown@acme.com`},Ye={title:`Common/DockNav`,component:D,render:je,parameters:{layout:`fullscreen`},argTypes:{registerSidePanel:{name:`registerSidePanel`,control:`boolean`,description:`Mounts a SidePanel child so DockNav renders the toggleSidePanel button under the logo.`},impersonating:{name:`impersonating`,control:`boolean`,description:`Seeds a mock impersonation session (amber banner + user-menu overlay). Toggle off, or use Stop / ⌘I · Ctrl+I on the banner, to clear it.`},onImpersonatingChange:{control:!1,table:{disable:!0}}},args:{impersonating:!1}},F={render:e=>{let[,t]=j();return(0,A.jsx)(ke,{...e,onImpersonatingChange:e=>t({impersonating:e})})}},I={args:{},parameters:{docs:{description:{story:`No sort order is supplied here: modules are grouped by app in the order they appear in the federated apps array.`}}}},L={name:`Custom module sort order`,args:{appModuleSortOrder:he}},R={args:{isCompact:!0}},z={name:`With overspill ("...")`,args:{forceRailHeight:480}},B={args:{sidebarItemIds:[],initialActive:void 0}},V={name:`Active: AI Studio › Sessions`,args:{sidebarItemIds:[...ge],initialActive:`ai-studio:ai-studio-sessions`}},H={args:{showToggleSlot:!1}},U={name:`Side panel toggle positioning`,args:{registerSidePanel:!0},render:e=>{let[,t]=j();return(0,A.jsx)(D,{...e,showToggleSlot:!0,extraContent:(0,A.jsx)(O,{}),onImpersonatingChange:e=>t({impersonating:e})})},parameters:{docs:{description:{story:`Use the registerSidePanel control to mount or unmount a SidePanel. The DockNav top toggle button should appear and disappear without moving the middle rail items off the sidebar centerline.`}}}},W={name:`Single group (mountStandalone)`,args:{apps:w.filter(e=>e.id===`ai-studio`),sidebarItemIds:[],initialActive:`ai-studio:ai-studio-sessions`}},G={name:`User menu — authenticated`,args:{},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail to open the user menu. Shows Preferences, the user identity card, and Log out. Opening the menu dismisses the module drawer; opening the drawer dismisses the menu.`}}}},K={name:`User menu — no account provider`,args:{enableAccountSwitch:!1},parameters:{docs:{description:{story:`The user menu omits the Switch account row when no AccountsProvider/getAccounts function is available above the dock.`}}}},q={name:`Preferences dialog`,args:{usePreferenceCompact:!0},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail, then choose Preferences to open the Dock preferences dialog.`}}}},J={name:`Keyboard shortcuts dialog`,args:{},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail, then choose Keyboard shortcuts to open the grouped shortcut reference. The story also registers Shift+? as a shortcut for the same dialog.`}}}},Y={name:`User menu — unauthenticated`,args:{unauthenticated:!0},parameters:{docs:{description:{story:"When no user is authenticated, the bottom-of-rail trigger collapses to a single sign-in glyph. Clicking it fires `onLogin` (the federation-aware `DockNav` wires this to `useAuth().login()`). There's no popover in this state — there's nothing to show until a user is signed in."}}}},X={name:`User menu — impersonating`,args:{impersonating:!0},parameters:{docs:{description:{story:"While an impersonation session is active, the avatar trigger and the identity card swap to the impersonated target — keeping the rail consistent with the `<ImpersonationBanner>` and the rest of the page. Production-side, `UserMenu` (the auth-aware wrapper) computes this overlay from `useImpersonation()`; the story drives `UserMenuBase` directly with the target user shape and seeds the global `ImpersonationStore` so the banner mounts. Open the user menu (click the avatar) to see the identity card showing the impersonated user, not the admin who started the session. Use the `impersonating` control, the banner Stop button, or ⌘I / Ctrl+I to dismiss; flip the control back on to restore the session."}}}},Z={name:`User picture cache states`,args:{extraContent:(0,A.jsx)(Ae,{})},parameters:{docs:{description:{story:`Shows the reusable user picture component rendering a cached picture, an inaccessible remote picture fallback, and a two-initial fallback.`}}}},Q=`DockNav_storybook_v1`,$={name:`With persisted module selection`,render:()=>(0,A.jsx)(Me,{})},Xe=[`Overview`,`Default`,`CustomSortOrder`,`Compact`,`WithOverspill`,`Empty`,`ActiveAiStudioSession`,`NoToggle`,`SidePanelTogglePositioning`,`Standalone`,`UserMenuAuthenticated`,`UserMenuWithoutAccountSwitch`,`Preferences`,`KeyboardShortcuts`,`UserMenuUnauthenticated`,`UserMenuImpersonating`,`UserPictureCacheStates`,`WithPersistedModuleSelection`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [, updateArgs] = useArgs();
    return <DockNavOverview {...args} onImpersonatingChange={next => updateArgs({
      impersonating: next
    })} />;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'No sort order is supplied here: modules are grouped by app in the order they appear in the federated apps array.'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Custom module sort order',
  args: {
    appModuleSortOrder: MOCK_APP_MODULE_SORT_ORDER
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    isCompact: true
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'With overspill ("...")',
  args: {
    forceRailHeight: 480
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    sidebarItemIds: [],
    initialActive: undefined
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Active: AI Studio › Sessions',
  args: {
    sidebarItemIds: [...MOCK_SIDEBAR_ITEM_IDS],
    initialActive: 'ai-studio:ai-studio-sessions'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    showToggleSlot: false
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Side panel toggle positioning',
  args: {
    registerSidePanel: true
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <DockNavDemo {...args} showToggleSlot extraContent={<SidePanelTogglePositioningContent />} onImpersonatingChange={next => updateArgs({
      impersonating: next
    })} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the registerSidePanel control to mount or unmount a SidePanel. The DockNav top toggle button should appear and disappear without moving the middle rail items off the sidebar centerline.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Single group (mountStandalone)',
  args: {
    apps: MOCK_APPS.filter(a => a.id === 'ai-studio'),
    sidebarItemIds: [],
    initialActive: 'ai-studio:ai-studio-sessions'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'User menu — authenticated',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Click the avatar at the bottom of the rail to open the user menu. Shows Preferences, the user identity card, and Log out. Opening the menu dismisses the module drawer; opening the drawer dismisses the menu.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'User menu — no account provider',
  args: {
    enableAccountSwitch: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The user menu omits the Switch account row when no AccountsProvider/getAccounts function is available above the dock.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Preferences dialog',
  args: {
    usePreferenceCompact: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the avatar at the bottom of the rail, then choose Preferences to open the Dock preferences dialog.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Keyboard shortcuts dialog',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Click the avatar at the bottom of the rail, then choose Keyboard shortcuts to open the grouped shortcut reference. The story also registers Shift+? as a shortcut for the same dialog.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'User menu — unauthenticated',
  args: {
    unauthenticated: true
  },
  parameters: {
    docs: {
      description: {
        story: "When no user is authenticated, the bottom-of-rail trigger collapses to a single sign-in glyph. Clicking it fires \`onLogin\` (the federation-aware \`DockNav\` wires this to \`useAuth().login()\`). There's no popover in this state — there's nothing to show until a user is signed in."
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'User menu — impersonating',
  args: {
    impersonating: true
  },
  parameters: {
    docs: {
      description: {
        story: 'While an impersonation session is active, the avatar trigger and the identity card swap to the impersonated target — keeping the rail consistent with the \`<ImpersonationBanner>\` and the rest of the page. Production-side, \`UserMenu\` (the auth-aware wrapper) computes this overlay from \`useImpersonation()\`; the story drives \`UserMenuBase\` directly with the target user shape and seeds the global \`ImpersonationStore\` so the banner mounts. Open the user menu (click the avatar) to see the identity card showing the impersonated user, not the admin who started the session. Use the \`impersonating\` control, the banner Stop button, or ⌘I / Ctrl+I to dismiss; flip the control back on to restore the session.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'User picture cache states',
  args: {
    extraContent: <UserPictureStates />
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the reusable user picture component rendering a cached picture, an inaccessible remote picture fallback, and a two-initial fallback.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'With persisted module selection',
  render: () => <PersistedModuleSelectionDemo />
}`,...$.parameters?.docs?.source}}}})))()}Ze();export{V as ActiveAiStudioSession,R as Compact,L as CustomSortOrder,I as Default,B as Empty,J as KeyboardShortcuts,H as NoToggle,F as Overview,q as Preferences,U as SidePanelTogglePositioning,W as Standalone,G as UserMenuAuthenticated,X as UserMenuImpersonating,Y as UserMenuUnauthenticated,K as UserMenuWithoutAccountSwitch,Z as UserPictureCacheStates,z as WithOverspill,$ as WithPersistedModuleSelection,Xe as __namedExportsOrder,Ye as default};