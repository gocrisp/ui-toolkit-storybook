import{n as e,t}from"./PreferencesDialog-J4NLpNMR.js";import{St as n,a as r,bt as i,c as a,l as o,n as s,o as c,s as l,t as ee,u,yt as te}from"./UserMenuBase-BbIPypXH.js";import{c as d,s as f}from"./AccountSelect-DFTV3c6U.js";import{n as p,x as m}from"./iframe-HfvZlux0.js";import{n as h,t as ne}from"./useStoredValue-BajKdp2d.js";import{a as g,c as re,o as ie,s as _}from"./buildGroups-DYbHKgiQ.js";import{n as ae,t as v}from"./AccountSwitch-DecJq5Et.js";import{a as y,c as b,i as oe,o as se,r as x,s as ce,t as le}from"./AppChrome-M3lrMGPl.js";import{n as S}from"./useKeyboardShortcut-CzYPkfAW.js";import{a as C,i as w,n as ue,o as de,r as T,t as fe}from"./KeyboardShortcutsDialog-DR2lzH1d.js";import{n as pe,t as me}from"./DockNav-DEVWN1Vx.js";import{n as he,t as ge}from"./AboutDialog-C1xpTSNu.js";import{n as _e,r as ve}from"./useDockPreferences-F_oopXsJ.js";import{i as ye,n as be,r as xe,t as Se}from"./SidePanel-BDnhVGI4.js";import{n as E}from"./rolldown-runtime-DkW27tQK.js";function D(e,t){return`${e}:${t}`}function O(e,t,n){return{id:D(e.id,t.id),name:n??t.name,appName:e.name??e.id,icon:t.icon,href:t.path}}function Ce(e,t){let n=new Map(e.map(e=>[e.id,e])),r=new Map;for(let t of e)for(let e of t.modules)e.isNavItem!==!1&&r.set(D(t.id,e.id),{app:t,mod:e});let i=new Set,a=[],o=e=>{let t=[];for(let n of e??[]){let e=r.get(D(n.appId,n.moduleId));if(!e)continue;let a=O(e.app,e.mod,n.nameOverride);i.has(a.id)||(i.add(a.id),t.push(a))}return t};for(let e of t??[]){let t=e.items===void 0?(n.get(e.itemSrc?.appId??``)?.modules??[]).filter(e=>e.isNavItem!==!1).map(t=>O(n.get(e.itemSrc?.appId??``),t)).filter(e=>!i.has(e.id)&&(i.add(e.id),!0)):o(e.items);t.length>0&&a.push({name:e.name,isRoot:e.isRoot,items:t})}for(let t of e){let e=t.modules.filter(e=>e.isNavItem!==!1).map(e=>O(t,e)).filter(e=>!i.has(e.id)&&(i.add(e.id),!0));e.length>0&&a.push({name:t.name??t.id,items:e})}return a}function we(e){let t=[],n=new Set;for(let r of e)for(let e of r.modules){if(e.isUserMenuItem!==!0)continue;let i=O(r,e);n.has(i.id)||(n.add(i.id),t.push(i))}return t}function Te(e){let t=[],n=new Set;for(let r of e)for(let e of r.items)n.has(e.id)||(n.add(e.id),t.push(e));return t}function Ee({enabled:e,getAccounts:t,children:n}){return e?(0,M.jsx)(f,{getAccounts:t,children:n}):(0,M.jsx)(M.Fragment,{children:n})}function De({onOpenShortcuts:e,onOpenAccountSwitch:t,onOpenPreferences:n,onOpenAbout:r,onNavigate:i,enableAccountSwitch:a}){return S({keys:w,action:e,description:`Show keyboard shortcuts`,group:`Help`}),S({keys:C,action:n,description:`Open preferences`,group:`General`}),S({keys:T,action:r,description:`Open about`,group:`Help`}),S({keys:F,action:()=>console.info(`[DockNav story] command palette shortcut triggered`),description:`Open command palette`,group:`Navigation`,enabled:!a}),S({keys:F,action:t,description:`Switch account`,group:`Navigation`,enabled:a}),S({keys:`mod+/`,action:()=>i(`/ai-studio/sessions`),description:`Open AI Studio sessions`,group:`Navigation`}),null}function k({apps:e=g,appModuleSortOrder:n,sidebarItemIds:r,initialActive:i,logoHref:a,forceRailHeight:o,showToggleSlot:s=!0,registerSidePanel:c=!1,isCompact:l=!1,usePreferenceCompact:u=!1,preferencesKey:d=Le,extraContent:f,unauthenticated:p=!1,enableAccountSwitch:m=!0,impersonating:h=!1,onImpersonatingChange:ne}){(0,j.useEffect)(()=>{if(!h){se();return}let e=Date.now();return b({accessToken:`storybook-mock-token`,expiresAt:e+Pe,issuedAt:e,actor:{email:Me.email??`admin@gocrisp.example`},target:{email:Ne.email,name:Ne.name},mode:`readonly`}),()=>se()},[h]);let{preferences:re,updatePreferences:ie}=ve({key:d}),_=(0,j.useMemo)(()=>Ce(e,n),[e,n]),ae=(0,j.useMemo)(()=>we(e),[e]),y=(0,j.useMemo)(()=>Te(_).slice(0,Ie).map(e=>e.id),[_]),x=(0,j.useMemo)(()=>{let e=new Map;for(let t of Te(_))e.set(t.id,t);return e},[_]),[ce,S]=(0,j.useState)(r),C=ce??y,w=_.length===1,ue=w?Fe:_,de=(0,j.useMemo)(()=>w?_[0].items:C.map(e=>x.get(e)).filter(e=>!!e),[w,_,C,x]),[T,pe]=(0,j.useState)(i??r?.[0]??y[0]),[he,_e]=(0,j.useState)(!1),[ye,be]=(0,j.useState)(!1),[E,D]=(0,j.useState)(qe[1]),[O,k]=(0,j.useState)(!1),[Oe,A]=(0,j.useState)(!1),[ke,Ae]=(0,j.useState)(l),je=u?re.isSidebarCompact:ke,N=(0,j.useCallback)(async()=>(await new Promise(e=>window.setTimeout(e,180)),qe),[]);(0,j.useEffect)(()=>{S(r)},[r]),(0,j.useEffect)(()=>{Ae(l)},[l]);let P=(0,j.useCallback)(e=>{for(let t of x.values())if(t.href===e){pe(t.id);break}},[x]),Re=(0,j.useCallback)(e=>{if(u){ie({isSidebarCompact:e});return}Ae(e)},[ie,u]),F=(0,M.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,M.jsx)(`h1`,{style:{marginTop:0},children:`Application content`}),(0,M.jsxs)(`p`,{children:[`Active module: `,(0,M.jsx)(`strong`,{children:T??`(none)`})]}),m&&(0,M.jsxs)(`p`,{children:[`Active account:`,` `,(0,M.jsx)(`strong`,{children:E?`${E.name} (${E.id})`:`(none)`})]}),(0,M.jsx)(`p`,{style:{maxWidth:640},children:`This is the slot consumers fill with their app. The DockNav sidebar floats on the left and stays sticky as you scroll. Click the multi-coloured "Modules" button at the bottom of the rail to open the App Drawer.`}),f]});return(0,M.jsxs)(te,{children:[(0,M.jsx)(De,{onOpenShortcuts:()=>k(!0),onOpenAccountSwitch:()=>be(!0),onOpenPreferences:()=>_e(!0),onOpenAbout:()=>A(!0),onNavigate:P,enableAccountSwitch:m}),(0,M.jsxs)(`div`,{"data-story-dock-nav":o?``:void 0,style:{minHeight:o?`${o}px`:`calc(100vh - var(--crisp-chrome-inset-top, 0px))`,height:o?`${o}px`:void 0,background:`var(--color-background, #f1f5f5)`},children:[o&&(0,M.jsx)(`style`,{children:`[data-story-dock-nav] [class*="sidebarContainer"] { height: ${o}px !important; }`}),(0,M.jsx)(le,{children:(0,M.jsx)(oe,{reloadOnSessionEnd:!1,onStop:()=>ne?.(!1)})}),(0,M.jsxs)(Ee,{enabled:m,getAccounts:N,children:[(0,M.jsx)(me,{groups:ue,sidebarItems:de,onNavigate:P,logoHref:a,isItemActive:e=>e.id===T,renderUserMenu:e=>(0,M.jsx)(ee,{user:p?void 0:h?Ne:Me,isAuthenticated:!p,open:e.open,onOpenChange:e.openChange,onLogin:()=>console.info(`[DockNav story] login triggered`),onLogout:()=>console.info(`[DockNav story] logout triggered`),navItems:ae,onNavItemNavigate:e=>P(e.href),onPreferences:()=>_e(!0),preferencesDisplayKeys:Ve,preferencesAriaKeyShortcuts:He,onSwitchAccount:m?()=>be(!0):void 0,switchAccountDisplayKeys:m?Ge:void 0,switchAccountAriaKeyShortcuts:m?Ke:void 0,onKeyboardShortcuts:()=>k(!0),keyboardShortcutsDisplayKeys:ze,keyboardShortcutsAriaKeyShortcuts:Be,onAbout:()=>A(!0),aboutDisplayKeys:Ue,aboutAriaKeyShortcuts:We}),showToggleSlot:s,isCompact:je,onCompactChange:Re,onSidebarItemIdsChange:S,onSidebarItemIdsReset:w?void 0:()=>S(void 0),style:o?{minHeight:`${o}px`,height:`${o}px`}:void 0,children:c?(0,M.jsx)(Se,{mode:`fixed`,defaultSize:`18rem`,sidePanelContent:(0,M.jsx)(xe,{}),children:F}):F}),(0,M.jsx)(v,{open:ye,onOpenChange:be,onChange:D,selectedId:E?.id})]}),(0,M.jsx)(t,{open:he,onOpenChange:_e,preferencesKey:d}),(0,M.jsx)(fe,{open:O,onOpenChange:k}),(0,M.jsx)(ge,{open:Oe,onOpenChange:A})]})]})}function Oe(){return(0,M.jsxs)(`section`,{style:{marginTop:24,display:`grid`,gap:12},children:[(0,M.jsx)(`h2`,{style:{margin:0},children:`Side panel toggle positioning`}),(0,M.jsxs)(`p`,{style:{maxWidth:640,margin:0,color:`var(--color-foreground-subtle, #507179)`},children:[`Use the Storybook Controls panel to toggle `,(0,M.jsx)(`code`,{children:`registerSidePanel`}),`. When true, DockNav renders the top side-panel toggle button under the logo; when false, the button is removed. The middle rail items should stay centered relative to the full DockNav sidebar.`]})]})}function A({impersonating:e,registerSidePanel:t,onImpersonatingChange:n}){let[r,i]=(0,j.useState)(()=>new Set(g.map(e=>e.id))),a=(0,j.useMemo)(()=>g.filter(e=>r.has(e.id)),[r]),o=e=>i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,M.jsx)(k,{apps:a,sidebarItemIds:_,logoHref:`/`,usePreferenceCompact:!0,impersonating:e,registerSidePanel:t,onImpersonatingChange:n,extraContent:(0,M.jsxs)(`section`,{style:{marginTop:24},children:[(0,M.jsx)(`h2`,{style:{marginBottom:12},children:`Apps`}),(0,M.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`grid`,gap:6},children:g.map(e=>(0,M.jsx)(`li`,{children:(0,M.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,M.jsx)(`input`,{type:`checkbox`,checked:r.has(e.id),onChange:()=>o(e.id)}),(0,M.jsx)(`span`,{children:e.name??e.id}),(0,M.jsxs)(`span`,{style:{opacity:.6,fontSize:12},children:[`(`,e.modules.length,` module`,e.modules.length===1?``:`s`,`)`]})]})},e.id))}),(0,M.jsx)(`p`,{style:{marginTop:16,opacity:.7,fontSize:13},children:`Tip: enable exactly one app to see single-group mode (no drawer trigger).`})]})})}function ke(){let[,e]=h(l,void 0,a);return(0,j.useEffect)(()=>{let t={cacheKey:P,sourceUrl:Je.picture??``,displayUrl:Re,checkedAt:Date.now()};u(t),e(t)},[e]),(0,M.jsxs)(`section`,{style:{marginTop:32},children:[(0,M.jsx)(`style`,{children:`
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
      `}),(0,M.jsx)(`h2`,{style:{marginTop:0},children:`User picture cache states`}),(0,M.jsxs)(`div`,{className:`user-picture-story-grid`,children:[(0,M.jsxs)(`div`,{className:`user-picture-story-card`,children:[(0,M.jsx)(r,{user:Je,cacheKey:P,initialCount:2,className:`user-picture-story-avatar`}),(0,M.jsx)(`strong`,{children:`Memory cached picture`}),(0,M.jsx)(`span`,{children:`Renders the stored data URL from CrispMemory without a remote picture URL.`})]}),(0,M.jsxs)(`div`,{className:`user-picture-story-card`,children:[(0,M.jsx)(r,{user:Ye,cacheKey:`storybook-inaccessible-user-picture`,initialCount:2,className:`user-picture-story-avatar`}),(0,M.jsx)(`strong`,{children:`Inaccessible picture`}),(0,M.jsx)(`span`,{children:`Falls back to initials when neither cache nor remote image is available.`})]}),(0,M.jsxs)(`div`,{className:`user-picture-story-card`,children:[(0,M.jsx)(r,{user:Xe,cacheKey:`storybook-two-initial-user-picture`,initialCount:2,className:`user-picture-story-avatar`}),(0,M.jsx)(`strong`,{children:`Two initials`}),(0,M.jsx)(`span`,{children:`Uses the configurable fallback count when no picture URL exists.`})]})]})]})}function Ae(e){let[,t]=N();return(0,M.jsx)(k,{...e,onImpersonatingChange:e=>t({impersonating:e})})}function je(){let e=g,n=(0,j.useMemo)(()=>Ce(e,ie),[e]),r=(0,j.useMemo)(()=>we(e),[e]),i=(0,j.useMemo)(()=>Te(n),[n]),a=(0,j.useMemo)(()=>{let e=new Map;for(let t of i)e.set(t.id,t);return e},[i]),{preferences:o,setPreferences:s,updatePreferences:c,isLoading:l}=ve({key:Qe}),u=(0,j.useMemo)(()=>i.slice(0,Ie).map(e=>e.id),[i]),d=o.sidebarItemIds??u,f=n.length===1,p=f?Fe:n,m=(0,j.useMemo)(()=>f?n[0].items:d.map(e=>a.get(e)).filter(e=>!!e),[f,n,d,a]),[h,ne]=(0,j.useState)(d[0]),[re,_]=(0,j.useState)(!1),[ae,v]=(0,j.useState)(!1),[y,b]=(0,j.useState)(!1),oe=(0,j.useCallback)(e=>{for(let t of a.values())if(t.href===e){ne(t.id);break}},[a]),se=(0,j.useCallback)(e=>{let t=d,n=t.includes(e)?t.filter(t=>t!==e):[...t,e];c({sidebarItemIds:n})},[d,c]),x=(0,j.useCallback)(()=>{s({...o,sidebarItemIds:void 0})},[o,s]),ce=(0,j.useMemo)(()=>new Set(d),[d]);return(0,M.jsxs)(te,{children:[(0,M.jsx)(De,{onOpenShortcuts:()=>v(!0),onOpenAccountSwitch:()=>{},onOpenPreferences:()=>_(!0),onOpenAbout:()=>b(!0),onNavigate:oe,enableAccountSwitch:!1}),(0,M.jsxs)(`div`,{style:{minHeight:`calc(100vh - var(--crisp-chrome-inset-top, 0px))`,background:`var(--color-background, #f1f5f5)`},children:[(0,M.jsx)(me,{groups:p,sidebarItems:m,onNavigate:oe,isItemActive:e=>e.id===h,renderUserMenu:e=>(0,M.jsx)(ee,{user:Me,isAuthenticated:!0,open:e.open,onOpenChange:e.openChange,onLogout:()=>console.info(`[DockNav story] logout triggered`),navItems:r,onNavItemNavigate:e=>oe(e.href),onPreferences:()=>_(!0),preferencesDisplayKeys:Ve,preferencesAriaKeyShortcuts:He,onKeyboardShortcuts:()=>v(!0),keyboardShortcutsDisplayKeys:ze,keyboardShortcutsAriaKeyShortcuts:Be,onAbout:()=>b(!0),aboutDisplayKeys:Ue,aboutAriaKeyShortcuts:We}),showToggleSlot:!0,isCompact:o.isSidebarCompact,onCompactChange:e=>void c({isSidebarCompact:e}),onSidebarItemIdsChange:e=>void c({sidebarItemIds:e}),onSidebarItemIdsReset:f?void 0:x,children:(0,M.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,M.jsx)(`h1`,{style:{marginTop:0},children:`Persisted module selection`}),(0,M.jsxs)(`p`,{style:{maxWidth:640},children:[`The selected rail modules are persisted in IndexedDB (DB `,(0,M.jsx)(`code`,{children:`crisp:main`}),`, key`,` `,(0,M.jsx)(`code`,{children:Qe}),`) via `,(0,M.jsx)(`code`,{children:`useDockPreferences`}),`. Toggle pins below to mutate it; reload the page to confirm it survives. Both the rail and the panel re-render in lockstep — they share the same `,(0,M.jsx)(`code`,{children:`useSyncExternalStore`}),` `,`subscription under the hood.`]}),(0,M.jsx)(`p`,{style:{opacity:.7,fontSize:13},children:l?`Loading from IDB…`:`Pinned (${d.length}):`}),(0,M.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`grid`,gap:6},children:i.map(e=>(0,M.jsx)(`li`,{children:(0,M.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,M.jsx)(`input`,{type:`checkbox`,checked:ce.has(e.id),onChange:()=>se(e.id)}),(0,M.jsx)(`span`,{children:e.name}),(0,M.jsxs)(`span`,{style:{opacity:.5,fontSize:12},children:[`(`,e.id,`)`]})]})},e.id))}),(0,M.jsx)(`button`,{type:`button`,onClick:x,style:{marginTop:20,padding:`6px 12px`,border:`1px solid var(--color-border-bold, #cbd1d3)`,background:`transparent`,borderRadius:6,cursor:`pointer`,font:`inherit`},children:`Reset module selection`})]})}),(0,M.jsx)(t,{open:re,onOpenChange:_,preferencesKey:Qe}),(0,M.jsx)(fe,{open:ae,onOpenChange:v}),(0,M.jsx)(ge,{open:y,onOpenChange:b})]})]})}var j,M,N,Me,Ne,Pe,Fe,Ie,Le,P,Re,ze,Be,Ve,He,Ue,We,F,Ge,Ke,qe,Je,Ye,Xe,Ze,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Qe,$,$e;function et(){return(et=E((()=>{j=m(),d(),y(),ce(),de(),ne(),he(),ae(),x(),e(),_e(),ue(),ye(),be(),o(),c(),re(),pe(),s(),M=p(),{useArgs:N}=__STORYBOOK_MODULE_PREVIEW_API__,Me={name:`Allan Brown`,email:`allanbrown@acme.com`,given_name:`Allan`},Ne={name:`Cipriano Cliente`,email:`cipriano@dot-foods.example`},Pe=3e5,Fe=[],Ie=7,Le=`DockNav_preferences_storybook_v1`,P=`storybook-cached-user-picture`,Re=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Crect%20width%3D%2272%22%20height%3D%2272%22%20rx%3D%2216%22%20fill%3D%22%230f766e%22%2F%3E%3Ctext%20x%3D%2236%22%20y%3D%2244%22%20text-anchor%3D%22middle%22%20font-size%3D%2226%22%20font-family%3D%22Arial%22%20font-weight%3D%22700%22%20fill%3D%22white%22%3ECP%3C%2Ftext%3E%3C%2Fsvg%3E`,ze=i(w),Be=n(w),Ve=i(C),He=n(C),Ue=i(T),We=n(T),F=`mod+k`,Ge=i(F),Ke=n(F),qe=[{id:`80001`,name:`Acme Grocery`},{id:`80002`,name:`Bright Farms`},{id:`80003`,name:`Canyon Market`},{id:`80004`,name:`Dawn Distribution`},{id:`80005`,name:`Evergreen Foods`},{id:`80006`,name:`Fieldstone`},{id:`80007`,name:`Golden Pantry`},{id:`80008`,name:`Harbor Wholesale`},{id:`80009`,name:`Ivy Organics`},{id:`80010`,name:`Juno Retail`}],Je={name:`Cached Person`,email:`cached.person@acme.com`},Ye={name:`Broken Avatar`,email:`broken.avatar@acme.com`,picture:`https://example.invalid/broken-avatar.png`},Xe={name:`Allan Brown`,email:`allanbrown@acme.com`},Ze={title:`Common/DockNav`,component:k,render:Ae,parameters:{layout:`fullscreen`},argTypes:{registerSidePanel:{name:`registerSidePanel`,control:`boolean`,description:`Mounts a SidePanel child so DockNav renders the toggleSidePanel button under the logo.`},impersonating:{name:`impersonating`,control:`boolean`,description:`Seeds a mock impersonation session (amber banner + user-menu overlay). Toggle off, or use Stop / ⌘I · Ctrl+I on the banner, to clear it.`},onImpersonatingChange:{control:!1,table:{disable:!0}}},args:{impersonating:!1}},I={render:e=>{let[,t]=N();return(0,M.jsx)(A,{...e,onImpersonatingChange:e=>t({impersonating:e})})}},L={args:{},parameters:{docs:{description:{story:`No sort order is supplied here: modules are grouped by app in the order they appear in the federated apps array.`}}}},R={name:`Custom module sort order`,args:{appModuleSortOrder:ie}},z={args:{isCompact:!0}},B={name:`With overspill ("...")`,args:{forceRailHeight:480}},V={args:{sidebarItemIds:[],initialActive:void 0}},H={name:`Active: AI Studio › Sessions`,args:{sidebarItemIds:[..._],initialActive:`ai-studio:ai-studio-sessions`}},U={args:{showToggleSlot:!1}},W={name:`Side panel toggle positioning`,args:{registerSidePanel:!0},render:e=>{let[,t]=N();return(0,M.jsx)(k,{...e,showToggleSlot:!0,extraContent:(0,M.jsx)(Oe,{}),onImpersonatingChange:e=>t({impersonating:e})})},parameters:{docs:{description:{story:`Use the registerSidePanel control to mount or unmount a SidePanel. The DockNav top toggle button should appear and disappear without moving the middle rail items off the sidebar centerline.`}}}},G={name:`Single group (mountStandalone)`,args:{apps:g.filter(e=>e.id===`ai-studio`),sidebarItemIds:[],initialActive:`ai-studio:ai-studio-sessions`}},K={name:`User menu — authenticated`,args:{},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail to open the user menu. Shows Preferences, the user identity card, and Log out. Opening the menu dismisses the module drawer; opening the drawer dismisses the menu.`}}}},q={name:`User menu — no account provider`,args:{enableAccountSwitch:!1},parameters:{docs:{description:{story:`The user menu omits the Switch account row when no AccountsProvider/getAccounts function is available above the dock.`}}}},J={name:`Preferences dialog`,args:{usePreferenceCompact:!0},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail, then choose Preferences to open the Dock preferences dialog.`}}}},Y={name:`Keyboard shortcuts dialog`,args:{},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail, then choose Keyboard shortcuts to open the grouped shortcut reference. The story also registers Shift+? as a shortcut for the same dialog.`}}}},X={name:`User menu — unauthenticated`,args:{unauthenticated:!0},parameters:{docs:{description:{story:"When no user is authenticated, the bottom-of-rail trigger collapses to a single sign-in glyph. Clicking it fires `onLogin` (the federation-aware `DockNav` wires this to `useAuth().login()`). There's no popover in this state — there's nothing to show until a user is signed in."}}}},Z={name:`User menu — impersonating`,args:{impersonating:!0},parameters:{docs:{description:{story:"While an impersonation session is active, the avatar trigger and the identity card swap to the impersonated target — keeping the rail consistent with the `<ImpersonationBanner>` and the rest of the page. Production-side, `UserMenu` (the auth-aware wrapper) computes this overlay from `useImpersonation()`; the story drives `UserMenuBase` directly with the target user shape and seeds the global `ImpersonationStore` so the banner mounts. Open the user menu (click the avatar) to see the identity card showing the impersonated user, not the admin who started the session. Use the `impersonating` control, the banner Stop button, or ⌘I / Ctrl+I to dismiss; flip the control back on to restore the session."}}}},Q={name:`User picture cache states`,args:{extraContent:(0,M.jsx)(ke,{})},parameters:{docs:{description:{story:`Shows the reusable user picture component rendering a cached picture, an inaccessible remote picture fallback, and a two-initial fallback.`}}}},Qe=`DockNav_storybook_v1`,$={name:`With persisted module selection`,render:()=>(0,M.jsx)(je,{})},$e=[`Overview`,`Default`,`CustomSortOrder`,`Compact`,`WithOverspill`,`Empty`,`ActiveAiStudioSession`,`NoToggle`,`SidePanelTogglePositioning`,`Standalone`,`UserMenuAuthenticated`,`UserMenuWithoutAccountSwitch`,`Preferences`,`KeyboardShortcuts`,`UserMenuUnauthenticated`,`UserMenuImpersonating`,`UserPictureCacheStates`,`WithPersistedModuleSelection`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [, updateArgs] = useArgs();
    return <DockNavOverview {...args} onImpersonatingChange={next => updateArgs({
      impersonating: next
    })} />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'No sort order is supplied here: modules are grouped by app in the order they appear in the federated apps array.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Custom module sort order',
  args: {
    appModuleSortOrder: MOCK_APP_MODULE_SORT_ORDER
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    isCompact: true
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With overspill ("...")',
  args: {
    forceRailHeight: 480
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    sidebarItemIds: [],
    initialActive: undefined
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Active: AI Studio › Sessions',
  args: {
    sidebarItemIds: [...MOCK_SIDEBAR_ITEM_IDS],
    initialActive: 'ai-studio:ai-studio-sessions'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    showToggleSlot: false
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Single group (mountStandalone)',
  args: {
    apps: MOCK_APPS.filter(a => a.id === 'ai-studio'),
    sidebarItemIds: [],
    initialActive: 'ai-studio:ai-studio-sessions'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'User menu — authenticated',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Click the avatar at the bottom of the rail to open the user menu. Shows Preferences, the user identity card, and Log out. Opening the menu dismisses the module drawer; opening the drawer dismisses the menu.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Keyboard shortcuts dialog',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Click the avatar at the bottom of the rail, then choose Keyboard shortcuts to open the grouped shortcut reference. The story also registers Shift+? as a shortcut for the same dialog.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'With persisted module selection',
  render: () => <PersistedModuleSelectionDemo />
}`,...$.parameters?.docs?.source}}}})))()}et();export{H as ActiveAiStudioSession,z as Compact,R as CustomSortOrder,L as Default,V as Empty,Y as KeyboardShortcuts,U as NoToggle,I as Overview,J as Preferences,W as SidePanelTogglePositioning,G as Standalone,K as UserMenuAuthenticated,Z as UserMenuImpersonating,X as UserMenuUnauthenticated,q as UserMenuWithoutAccountSwitch,Q as UserPictureCacheStates,B as WithOverspill,$ as WithPersistedModuleSelection,$e as __namedExportsOrder,Ze as default};