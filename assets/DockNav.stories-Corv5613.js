import{i as e,n as t,r as n,t as r}from"./PreferencesDialog-CxuJ791J.js";import{i,n as a,r as o,t as s}from"./SidePanel-DkxnfVfr.js";import{A as ee,S as c,_ as l,at as te,b as ne,ct as u,dt as d,ft as f,gt as p,ht as re,it as m,j as ie,l as ae,lt as h,m as g,mt as _,nt as v,p as oe,rt as se,u as y,ut as ce,v as b,vt as x,x as le,y as S}from"./DockNav2-nyAv7wW9.js";import{l as ue,u as de}from"./AccountSelect-Dv-oX6cG.js";import{b as fe,n as C}from"./iframe-w9-JtUSR.js";import{n as pe,t as me}from"./useStoredValue-v1O4vHKA.js";import{n as he,t as ge}from"./AccountSwitch-BPqs0h3y.js";import{a as _e,i as ve,r as ye,t as be}from"./AppChrome-DsAFMhT-.js";import{n as xe,t as Se}from"./DockNav-BdGWCDg5.js";import{n as Ce}from"./rolldown-runtime-C0FnF6B9.js";function w(e,t){return`${e}:${t}`}function T(e,t,n){return{id:w(e.id,t.id),name:n??t.name,appName:e.name??e.id,icon:t.icon,href:t.path}}function we(e,t){let n=new Map(e.map(e=>[e.id,e])),r=new Map;for(let t of e)for(let e of t.modules)e.isNavItem!==!1&&r.set(w(t.id,e.id),{app:t,mod:e});let i=new Set,a=[],o=e=>{let t=[];for(let n of e??[]){let e=r.get(w(n.appId,n.moduleId));if(!e)continue;let a=T(e.app,e.mod,n.nameOverride);i.has(a.id)||(i.add(a.id),t.push(a))}return t};for(let e of t??[]){let t=e.items===void 0?(n.get(e.itemSrc?.appId??``)?.modules??[]).filter(e=>e.isNavItem!==!1).map(t=>T(n.get(e.itemSrc?.appId??``),t)).filter(e=>!i.has(e.id)&&(i.add(e.id),!0)):o(e.items);t.length>0&&a.push({name:e.name,isRoot:e.isRoot,items:t})}for(let t of e){let e=t.modules.filter(e=>e.isNavItem!==!1).map(e=>T(t,e)).filter(e=>!i.has(e.id)&&(i.add(e.id),!0));e.length>0&&a.push({name:t.name??t.id,items:e})}return a}function Te(e){let t=[],n=new Set;for(let r of e)for(let e of r.modules){if(e.isUserMenuItem!==!0)continue;let i=T(r,e);n.has(i.id)||(n.add(i.id),t.push(i))}return t}function Ee(e){let t=[],n=new Set;for(let r of e)for(let e of r.items)n.has(e.id)||(n.add(e.id),t.push(e));return t}function De({enabled:e,getAccounts:t,children:n}){return e?(0,k.jsx)(ue,{getAccounts:t,children:n}):(0,k.jsx)(k.Fragment,{children:n})}function Oe({onOpenShortcuts:e,onOpenAccountSwitch:t,onNavigate:n,enableAccountSwitch:r}){return _({keys:d,action:e,description:`Show keyboard shortcuts`,group:`Help`}),_({keys:P,action:()=>console.info(`[DockNav story] command palette shortcut triggered`),description:`Open command palette`,group:`Navigation`,enabled:!r}),_({keys:P,action:t,description:`Switch account`,group:`Navigation`,enabled:r}),_({keys:`mod+/`,action:()=>n(`/ai-studio/sessions`),description:`Open AI Studio sessions`,group:`Navigation`}),null}function E({apps:t=v,appModuleSortOrder:n,sidebarItemIds:i,initialActive:a,logoHref:c,forceRailHeight:l,showToggleSlot:te=!0,registerSidePanel:ne=!1,isCompact:d=!1,usePreferenceCompact:f=!1,preferencesKey:p=Ie,extraContent:m,unauthenticated:ie=!1,enableAccountSwitch:h=!0,impersonating:g=!1,onImpersonatingChange:_}){(0,O.useEffect)(()=>{if(!g){u();return}let e=Date.now();return ce({accessToken:`storybook-mock-token`,expiresAt:e+Ne,issuedAt:e,actor:{email:j.email??`admin@gocrisp.example`},target:{email:M.email,name:M.name},mode:`readonly`}),()=>u()},[g]);let{preferences:se,updatePreferences:y}=e({key:p}),b=(0,O.useMemo)(()=>we(t,n),[t,n]),x=(0,O.useMemo)(()=>Te(t),[t]),le=(0,O.useMemo)(()=>Ee(b).slice(0,Fe).map(e=>e.id),[b]),S=(0,O.useMemo)(()=>{let e=new Map;for(let t of Ee(b))e.set(t.id,t);return e},[b]),[ue,de]=(0,O.useState)(i),fe=ue??le,C=b.length===1,pe=C?Pe:b,me=(0,O.useMemo)(()=>C?b[0].items:fe.map(e=>S.get(e)).filter(e=>!!e),[C,b,fe,S]),[he,_e]=(0,O.useState)(a??i?.[0]??le[0]),[ye,xe]=(0,O.useState)(!1),[Ce,w]=(0,O.useState)(!1),[T,E]=(0,O.useState)(He[1]),[ke,D]=(0,O.useState)(!1),[Ae,je]=(0,O.useState)(!1),[Me,A]=(0,O.useState)(d),N=f?se.isSidebarCompact:Me,Le=(0,O.useCallback)(async()=>(await new Promise(e=>window.setTimeout(e,180)),He),[]);(0,O.useEffect)(()=>{de(i)},[i]),(0,O.useEffect)(()=>{A(d)},[d]);let P=(0,O.useCallback)(e=>{for(let t of S.values())if(t.href===e){_e(t.id);break}},[S]),Ue=(0,O.useCallback)(e=>{if(f){y({isSidebarCompact:e});return}A(e)},[y,f]),We=(0,k.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,k.jsx)(`h1`,{style:{marginTop:0},children:`Application content`}),(0,k.jsxs)(`p`,{children:[`Active module: `,(0,k.jsx)(`strong`,{children:he??`(none)`})]}),h&&(0,k.jsxs)(`p`,{children:[`Active account:`,` `,(0,k.jsx)(`strong`,{children:T?`${T.name} (${T.id})`:`(none)`})]}),(0,k.jsx)(`p`,{style:{maxWidth:640},children:`This is the slot consumers fill with their app. The DockNav sidebar floats on the left and stays sticky as you scroll. Click the multi-coloured "Modules" button at the bottom of the rail to open the App Drawer.`}),m]});return(0,k.jsxs)(re,{children:[(0,k.jsx)(Oe,{onOpenShortcuts:()=>D(!0),onOpenAccountSwitch:()=>w(!0),onNavigate:P,enableAccountSwitch:h}),(0,k.jsxs)(`div`,{"data-story-dock-nav":l?``:void 0,style:{minHeight:l?`${l}px`:`calc(100vh - var(--crisp-chrome-inset-top, 0px))`,height:l?`${l}px`:void 0,background:`var(--color-background, #f1f5f5)`},children:[l&&(0,k.jsx)(`style`,{children:`[data-story-dock-nav] [class*="sidebarContainer"] { height: ${l}px !important; }`}),(0,k.jsx)(be,{children:(0,k.jsx)(ve,{reloadOnSessionEnd:!1,onStop:()=>_?.(!1)})}),(0,k.jsxs)(De,{enabled:h,getAccounts:Le,children:[(0,k.jsx)(Se,{groups:pe,sidebarItems:me,onNavigate:P,logoHref:c,isItemActive:e=>e.id===he,renderUserMenu:e=>(0,k.jsx)(oe,{user:ie?void 0:g?M:j,isAuthenticated:!ie,open:e.open,onOpenChange:e.openChange,onLogin:()=>console.info(`[DockNav story] login triggered`),onLogout:()=>console.info(`[DockNav story] logout triggered`),navItems:x,onNavItemNavigate:e=>P(e.href),onPreferences:()=>xe(!0),onSwitchAccount:h?()=>w(!0):void 0,switchAccountDisplayKeys:h?Be:void 0,switchAccountAriaKeyShortcuts:h?Ve:void 0,onKeyboardShortcuts:()=>D(!0),keyboardShortcutsDisplayKeys:Re,keyboardShortcutsAriaKeyShortcuts:ze,onAbout:()=>je(!0)}),showToggleSlot:te,isCompact:N,onCompactChange:Ue,onSidebarItemIdsChange:de,onSidebarItemIdsReset:C?void 0:()=>de(void 0),style:l?{minHeight:`${l}px`,height:`${l}px`}:void 0,children:ne?(0,k.jsx)(s,{mode:`fixed`,defaultSize:`18rem`,sidePanelContent:(0,k.jsx)(o,{}),children:We}):We}),(0,k.jsx)(ge,{open:Ce,onOpenChange:w,onChange:E,selectedId:T?.id})]}),(0,k.jsx)(r,{open:ye,onOpenChange:xe,preferencesKey:p}),(0,k.jsx)(ae,{open:ke,onOpenChange:D}),(0,k.jsx)(ee,{open:Ae,onOpenChange:je})]})]})}function ke(){return(0,k.jsxs)(`section`,{style:{marginTop:24,display:`grid`,gap:12},children:[(0,k.jsx)(`h2`,{style:{margin:0},children:`Side panel toggle positioning`}),(0,k.jsxs)(`p`,{style:{maxWidth:640,margin:0,color:`var(--color-foreground-subtle, #507179)`},children:[`Use the Storybook Controls panel to toggle `,(0,k.jsx)(`code`,{children:`registerSidePanel`}),`. When true, DockNav renders the top side-panel toggle button under the logo; when false, the button is removed. The middle rail items should stay centered relative to the full DockNav sidebar.`]})]})}function D({impersonating:e,registerSidePanel:t,onImpersonatingChange:n}){let[r,i]=(0,O.useState)(()=>new Set(v.map(e=>e.id))),a=(0,O.useMemo)(()=>v.filter(e=>r.has(e.id)),[r]),o=e=>i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,k.jsx)(E,{apps:a,sidebarItemIds:m,logoHref:`/`,usePreferenceCompact:!0,impersonating:e,registerSidePanel:t,onImpersonatingChange:n,extraContent:(0,k.jsxs)(`section`,{style:{marginTop:24},children:[(0,k.jsx)(`h2`,{style:{marginBottom:12},children:`Apps`}),(0,k.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`grid`,gap:6},children:v.map(e=>(0,k.jsx)(`li`,{children:(0,k.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,k.jsx)(`input`,{type:`checkbox`,checked:r.has(e.id),onChange:()=>o(e.id)}),(0,k.jsx)(`span`,{children:e.name??e.id}),(0,k.jsxs)(`span`,{style:{opacity:.6,fontSize:12},children:[`(`,e.modules.length,` module`,e.modules.length===1?``:`s`,`)`]})]})},e.id))}),(0,k.jsx)(`p`,{style:{marginTop:16,opacity:.7,fontSize:13},children:`Tip: enable exactly one app to see single-group mode (no drawer trigger).`})]})})}function Ae(){let[,e]=pe(S,void 0,ne);return(0,O.useEffect)(()=>{let t={cacheKey:N,sourceUrl:Ue.picture??``,displayUrl:Le,checkedAt:Date.now()};c(t),e(t)},[e]),(0,k.jsxs)(`section`,{style:{marginTop:32},children:[(0,k.jsx)(`style`,{children:`
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
      `}),(0,k.jsx)(`h2`,{style:{marginTop:0},children:`User picture cache states`}),(0,k.jsxs)(`div`,{className:`user-picture-story-grid`,children:[(0,k.jsxs)(`div`,{className:`user-picture-story-card`,children:[(0,k.jsx)(l,{user:Ue,cacheKey:N,initialCount:2,className:`user-picture-story-avatar`}),(0,k.jsx)(`strong`,{children:`Memory cached picture`}),(0,k.jsx)(`span`,{children:`Renders the stored data URL from CrispMemory without a remote picture URL.`})]}),(0,k.jsxs)(`div`,{className:`user-picture-story-card`,children:[(0,k.jsx)(l,{user:We,cacheKey:`storybook-inaccessible-user-picture`,initialCount:2,className:`user-picture-story-avatar`}),(0,k.jsx)(`strong`,{children:`Inaccessible picture`}),(0,k.jsx)(`span`,{children:`Falls back to initials when neither cache nor remote image is available.`})]}),(0,k.jsxs)(`div`,{className:`user-picture-story-card`,children:[(0,k.jsx)(l,{user:Ge,cacheKey:`storybook-two-initial-user-picture`,initialCount:2,className:`user-picture-story-avatar`}),(0,k.jsx)(`strong`,{children:`Two initials`}),(0,k.jsx)(`span`,{children:`Uses the configurable fallback count when no picture URL exists.`})]})]})]})}function je(e){let[,t]=A();return(0,k.jsx)(E,{...e,onImpersonatingChange:e=>t({impersonating:e})})}function Me(){let t=v,n=(0,O.useMemo)(()=>we(t,se),[t]),i=(0,O.useMemo)(()=>Te(t),[t]),a=(0,O.useMemo)(()=>Ee(n),[n]),o=(0,O.useMemo)(()=>{let e=new Map;for(let t of a)e.set(t.id,t);return e},[a]),{preferences:s,setPreferences:c,updatePreferences:l,isLoading:te}=e({key:Q}),ne=(0,O.useMemo)(()=>a.slice(0,Fe).map(e=>e.id),[a]),u=s.sidebarItemIds??ne,d=n.length===1,f=d?Pe:n,p=(0,O.useMemo)(()=>d?n[0].items:u.map(e=>o.get(e)).filter(e=>!!e),[d,n,u,o]),[m,ie]=(0,O.useState)(u[0]),[h,g]=(0,O.useState)(!1),[_,y]=(0,O.useState)(!1),[ce,b]=(0,O.useState)(!1),x=(0,O.useCallback)(e=>{for(let t of o.values())if(t.href===e){ie(t.id);break}},[o]),le=(0,O.useCallback)(e=>{let t=u,n=t.includes(e)?t.filter(t=>t!==e):[...t,e];l({sidebarItemIds:n})},[u,l]),S=(0,O.useCallback)(()=>{c({...s,sidebarItemIds:void 0})},[s,c]),ue=(0,O.useMemo)(()=>new Set(u),[u]);return(0,k.jsxs)(re,{children:[(0,k.jsx)(Oe,{onOpenShortcuts:()=>y(!0),onOpenAccountSwitch:()=>{},onNavigate:x,enableAccountSwitch:!1}),(0,k.jsxs)(`div`,{style:{minHeight:`calc(100vh - var(--crisp-chrome-inset-top, 0px))`,background:`var(--color-background, #f1f5f5)`},children:[(0,k.jsx)(Se,{groups:f,sidebarItems:p,onNavigate:x,isItemActive:e=>e.id===m,renderUserMenu:e=>(0,k.jsx)(oe,{user:j,isAuthenticated:!0,open:e.open,onOpenChange:e.openChange,onLogout:()=>console.info(`[DockNav story] logout triggered`),navItems:i,onNavItemNavigate:e=>x(e.href),onPreferences:()=>g(!0),onKeyboardShortcuts:()=>y(!0),keyboardShortcutsDisplayKeys:Re,keyboardShortcutsAriaKeyShortcuts:ze,onAbout:()=>b(!0)}),showToggleSlot:!0,isCompact:s.isSidebarCompact,onCompactChange:e=>void l({isSidebarCompact:e}),onSidebarItemIdsChange:e=>void l({sidebarItemIds:e}),onSidebarItemIdsReset:d?void 0:S,children:(0,k.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,k.jsx)(`h1`,{style:{marginTop:0},children:`Persisted module selection`}),(0,k.jsxs)(`p`,{style:{maxWidth:640},children:[`The selected rail modules are persisted in IndexedDB (DB `,(0,k.jsx)(`code`,{children:`crisp:main`}),`, key`,` `,(0,k.jsx)(`code`,{children:Q}),`) via `,(0,k.jsx)(`code`,{children:`useDockPreferences`}),`. Toggle pins below to mutate it; reload the page to confirm it survives. Both the rail and the panel re-render in lockstep — they share the same `,(0,k.jsx)(`code`,{children:`useSyncExternalStore`}),` `,`subscription under the hood.`]}),(0,k.jsx)(`p`,{style:{opacity:.7,fontSize:13},children:te?`Loading from IDB…`:`Pinned (${u.length}):`}),(0,k.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`grid`,gap:6},children:a.map(e=>(0,k.jsx)(`li`,{children:(0,k.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,k.jsx)(`input`,{type:`checkbox`,checked:ue.has(e.id),onChange:()=>le(e.id)}),(0,k.jsx)(`span`,{children:e.name}),(0,k.jsxs)(`span`,{style:{opacity:.5,fontSize:12},children:[`(`,e.id,`)`]})]})},e.id))}),(0,k.jsx)(`button`,{type:`button`,onClick:S,style:{marginTop:20,padding:`6px 12px`,border:`1px solid var(--color-border-bold, #cbd1d3)`,background:`transparent`,borderRadius:6,cursor:`pointer`,font:`inherit`},children:`Reset module selection`})]})}),(0,k.jsx)(r,{open:h,onOpenChange:g,preferencesKey:Q}),(0,k.jsx)(ae,{open:_,onOpenChange:y}),(0,k.jsx)(ee,{open:ce,onOpenChange:b})]})]})}var O,k,A,j,M,Ne,Pe,Fe,Ie,N,Le,Re,ze,P,Be,Ve,He,Ue,We,Ge,Ke,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,qe;function Je(){return(Je=Ce((()=>{O=fe(),de(),_e(),h(),f(),me(),ie(),he(),ye(),t(),n(),y(),i(),a(),le(),b(),te(),xe(),g(),k=C(),{useArgs:A}=__STORYBOOK_MODULE_PREVIEW_API__,j={name:`Allan Brown`,email:`allanbrown@acme.com`,given_name:`Allan`},M={name:`Cipriano Cliente`,email:`cipriano@dot-foods.example`},Ne=3e5,Pe=[],Fe=7,Ie=`DockNav_preferences_storybook_v1`,N=`storybook-cached-user-picture`,Le=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Crect%20width%3D%2272%22%20height%3D%2272%22%20rx%3D%2216%22%20fill%3D%22%230f766e%22%2F%3E%3Ctext%20x%3D%2236%22%20y%3D%2244%22%20text-anchor%3D%22middle%22%20font-size%3D%2226%22%20font-family%3D%22Arial%22%20font-weight%3D%22700%22%20fill%3D%22white%22%3ECP%3C%2Ftext%3E%3C%2Fsvg%3E`,Re=p(d),ze=x(d),P=`mod+k`,Be=p(P),Ve=x(P),He=[{id:`80001`,name:`Acme Grocery`},{id:`80002`,name:`Bright Farms`},{id:`80003`,name:`Canyon Market`},{id:`80004`,name:`Dawn Distribution`},{id:`80005`,name:`Evergreen Foods`},{id:`80006`,name:`Fieldstone`},{id:`80007`,name:`Golden Pantry`},{id:`80008`,name:`Harbor Wholesale`},{id:`80009`,name:`Ivy Organics`},{id:`80010`,name:`Juno Retail`}],Ue={name:`Cached Person`,email:`cached.person@acme.com`},We={name:`Broken Avatar`,email:`broken.avatar@acme.com`,picture:`https://example.invalid/broken-avatar.png`},Ge={name:`Allan Brown`,email:`allanbrown@acme.com`},Ke={title:`Common/DockNav`,component:E,render:je,parameters:{layout:`fullscreen`},argTypes:{registerSidePanel:{name:`registerSidePanel`,control:`boolean`,description:`Mounts a SidePanel child so DockNav renders the toggleSidePanel button under the logo.`},impersonating:{name:`impersonating`,control:`boolean`,description:`Seeds a mock impersonation session (amber banner + user-menu overlay). Toggle off, or use Stop / ⌘I · Ctrl+I on the banner, to clear it.`},onImpersonatingChange:{control:!1,table:{disable:!0}}},args:{impersonating:!1}},F={render:e=>{let[,t]=A();return(0,k.jsx)(D,{...e,onImpersonatingChange:e=>t({impersonating:e})})}},I={args:{},parameters:{docs:{description:{story:`No sort order is supplied here: modules are grouped by app in the order they appear in the federated apps array.`}}}},L={name:`Custom module sort order`,args:{appModuleSortOrder:se}},R={args:{isCompact:!0}},z={name:`With overspill ("...")`,args:{forceRailHeight:480}},B={args:{sidebarItemIds:[],initialActive:void 0}},V={name:`Active: AI Studio › Sessions`,args:{sidebarItemIds:[...m],initialActive:`ai-studio:ai-studio-sessions`}},H={args:{showToggleSlot:!1}},U={name:`Side panel toggle positioning`,args:{registerSidePanel:!0},render:e=>{let[,t]=A();return(0,k.jsx)(E,{...e,showToggleSlot:!0,extraContent:(0,k.jsx)(ke,{}),onImpersonatingChange:e=>t({impersonating:e})})},parameters:{docs:{description:{story:`Use the registerSidePanel control to mount or unmount a SidePanel. The DockNav top toggle button should appear and disappear without moving the middle rail items off the sidebar centerline.`}}}},W={name:`Single group (mountStandalone)`,args:{apps:v.filter(e=>e.id===`ai-studio`),sidebarItemIds:[],initialActive:`ai-studio:ai-studio-sessions`}},G={name:`User menu — authenticated`,args:{},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail to open the user menu. Shows Preferences, the user identity card, and Log out. Opening the menu dismisses the module drawer; opening the drawer dismisses the menu.`}}}},K={name:`User menu — no account provider`,args:{enableAccountSwitch:!1},parameters:{docs:{description:{story:`The user menu omits the Switch account row when no AccountsProvider/getAccounts function is available above the dock.`}}}},q={name:`Preferences dialog`,args:{usePreferenceCompact:!0},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail, then choose Preferences to open the Dock preferences dialog.`}}}},J={name:`Keyboard shortcuts dialog`,args:{},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail, then choose Keyboard shortcuts to open the grouped shortcut reference. The story also registers Shift+? as a shortcut for the same dialog.`}}}},Y={name:`User menu — unauthenticated`,args:{unauthenticated:!0},parameters:{docs:{description:{story:"When no user is authenticated, the bottom-of-rail trigger collapses to a single sign-in glyph. Clicking it fires `onLogin` (the federation-aware `DockNav` wires this to `useAuth().login()`). There's no popover in this state — there's nothing to show until a user is signed in."}}}},X={name:`User menu — impersonating`,args:{impersonating:!0},parameters:{docs:{description:{story:"While an impersonation session is active, the avatar trigger and the identity card swap to the impersonated target — keeping the rail consistent with the `<ImpersonationBanner>` and the rest of the page. Production-side, `UserMenu` (the auth-aware wrapper) computes this overlay from `useImpersonation()`; the story drives `UserMenuBase` directly with the target user shape and seeds the global `ImpersonationStore` so the banner mounts. Open the user menu (click the avatar) to see the identity card showing the impersonated user, not the admin who started the session. Use the `impersonating` control, the banner Stop button, or ⌘I / Ctrl+I to dismiss; flip the control back on to restore the session."}}}},Z={name:`User picture cache states`,args:{extraContent:(0,k.jsx)(Ae,{})},parameters:{docs:{description:{story:`Shows the reusable user picture component rendering a cached picture, an inaccessible remote picture fallback, and a two-initial fallback.`}}}},Q=`DockNav_storybook_v1`,$={name:`With persisted module selection`,render:()=>(0,k.jsx)(Me,{})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},qe=[`Overview`,`Default`,`CustomSortOrder`,`Compact`,`WithOverspill`,`Empty`,`ActiveAiStudioSession`,`NoToggle`,`SidePanelTogglePositioning`,`Standalone`,`UserMenuAuthenticated`,`UserMenuWithoutAccountSwitch`,`Preferences`,`KeyboardShortcuts`,`UserMenuUnauthenticated`,`UserMenuImpersonating`,`UserPictureCacheStates`,`WithPersistedModuleSelection`]})))()}Je();export{V as ActiveAiStudioSession,R as Compact,L as CustomSortOrder,I as Default,B as Empty,J as KeyboardShortcuts,H as NoToggle,F as Overview,q as Preferences,U as SidePanelTogglePositioning,W as Standalone,G as UserMenuAuthenticated,X as UserMenuImpersonating,Y as UserMenuUnauthenticated,K as UserMenuWithoutAccountSwitch,Z as UserPictureCacheStates,z as WithOverspill,$ as WithPersistedModuleSelection,qe as __namedExportsOrder,Ke as default};