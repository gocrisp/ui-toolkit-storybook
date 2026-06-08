import{c as e,i as t}from"./preload-helper-BfEw-HRh.js";import{w as n}from"./iframe-B6gs8f5C.js";import{t as r}from"./jsx-runtime-DIo5aQw4.js";import{f as i,p as a,s as o}from"./AccountSelect-DMhA2hp7.js";import{n as s,r as c,t as ee}from"./AccountSwitch-BxxcXkkG.js";import{B as te,C as ne,F as l,I as u,L as re,M as d,N as f,P as p,S as ie,T as ae,U as m,V as h,a as g,b as oe,c as _,d as se,f as v,h as y,i as b,l as x,m as S,n as ce,o as le,p as ue,r as de,s as fe,t as pe,u as me,v as he,w as ge,x as _e,y as ve,z as C}from"./DockNav-BT79rzP0.js";var w,ye,be,T,xe,Se,Ce,E,we,Te,D,O,Ee=t((()=>{w=`_banner_waah7_16`,ye=`_left_waah7_40`,be=`_icon_waah7_48`,T=`_copy_waah7_54`,xe=`_label_waah7_62`,Se=`_target_waah7_72`,Ce=`_actor_waah7_79`,E=`_modeBadge_waah7_84`,we=`_right_waah7_96`,Te=`_kbd_waah7_106`,D=`_stopButton_waah7_121`,O={banner:w,left:ye,icon:be,copy:T,label:xe,target:Se,actor:Ce,modeBadge:E,right:we,kbd:Te,stopButton:D}}));function De(){return(0,A.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:O.icon,"aria-hidden":`true`,children:[(0,A.jsx)(`path`,{d:`M9.88 9.88a3 3 0 1 0 4.24 4.24`}),(0,A.jsx)(`path`,{d:`M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68`}),(0,A.jsx)(`path`,{d:`M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61`}),(0,A.jsx)(`line`,{x1:`2`,y1:`2`,x2:`22`,y2:`22`})]})}function Oe({onStop:e,decorateDocumentTitle:t=!0}={}){let n=v(),r=(0,k.useRef)(null);(0,k.useEffect)(()=>{if(!t||typeof document>`u`||!n)return;r.current===null&&(r.current=document.title);let e=`[Acting as ${n.target.email}] `;return document.title.startsWith(e)||(document.title=e+(r.current??``)),()=>{r.current!==null&&(document.title=r.current,r.current=null)}},[n,t]);let i=(0,k.useRef)(null);if((0,k.useEffect)(()=>{let e=i.current;if(i.current=n,e===null||n!==null||typeof window>`u`)return;let t=window.location?.reload;typeof t==`function`&&t.call(window.location)},[n]),(0,k.useEffect)(()=>{if(!n||typeof window>`u`)return;let e=e=>{e.key===`Escape`&&(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||(e.preventDefault(),a()))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[n,e]),!n)return null;function a(){n&&(ue(),e?.(n))}let o=n.target.name?`${n.target.name} (${n.target.email})`:n.target.email;return(0,A.jsxs)(`div`,{className:O.banner,role:`status`,"aria-live":`polite`,children:[(0,A.jsxs)(`div`,{className:O.left,children:[(0,A.jsx)(De,{}),(0,A.jsxs)(`div`,{className:O.copy,children:[(0,A.jsx)(`span`,{className:O.label,children:`Impersonating`}),(0,A.jsx)(`span`,{className:O.target,children:o}),(0,A.jsxs)(`span`,{className:O.actor,children:[`as `,n.actor.email]})]}),n.mode===`readonly`&&(0,A.jsx)(`span`,{className:O.modeBadge,"aria-label":`Read-only session`,children:`Read-only`})]}),(0,A.jsx)(`div`,{className:O.right,children:(0,A.jsxs)(`button`,{type:`button`,className:O.stopButton,onClick:a,"aria-label":`Stop impersonating ${n.target.email}`,children:[(0,A.jsx)(`span`,{className:O.kbd,"aria-hidden":`true`,children:`Esc`}),`Stop impersonating`]})})]})}var k,A,ke=t((()=>{k=e(n(),1),S(),se(),Ee(),A=r(),Oe.__docgenInfo={description:`Sticky amber banner shown across every authenticated surface while an
impersonation session is active. Renders nothing when no session is
active, so it's safe to mount unconditionally at the top of any layout
(host or federated remote).

Behavior:
  - Subscribes to the global \`ImpersonationStore\`, so it lights up
    immediately when the dock starts a session — even from a
    federated remote that's currently focused.
  - Clicking "Stop impersonating" or pressing Escape clears the
    session globally; every \`useAuth()\` consumer reverts to the
    admin's SPA token on its next call.
  - Whenever the banner observes an active → inactive transition (by
    any cause — Stop button, Escape, soft-TTL expiry inside
    \`getImpersonationSession\`, programmatic \`clearImpersonationSession()\`
    elsewhere), the page is reloaded. A full reload is the only path
    that reliably tears down every cache, in-flight request, and
    React subtree that was created under the impersonation identity.
    This avoids whole classes of post-impersonation bugs (blank
    federated containers, stale \`useQuery\` caches still holding
    target-scoped data, mid-flight fetches that resolve against the
    wrong identity) at the cost of a single navigation.
  - While active, prefixes \`document.title\` with
    \`[Acting as <target>]\` so admins don't lose track of the session
    across browser tabs (opt-out via \`decorateDocumentTitle={false}\`).
  - Read-only sessions surface a "READ-ONLY" badge; the backend
    enforces this independently via the \`imp_mode\` claim, but the
    visual cue keeps users from being surprised by 403s.

Accessibility: rendered as \`role="status"\` with \`aria-live="polite"\`
so screen readers announce the change once without interrupting the
current focus.`,methods:[],displayName:`ImpersonationBanner`}}));function Ae(e,t){return`${e}:${t}`}function j(e,t,n){return{id:Ae(e.id,t.id),name:n??t.name,appName:e.name??e.id,icon:t.icon,href:t.path}}function je(e,t){let n=new Map(e.map(e=>[e.id,e])),r=new Map;for(let t of e)for(let e of t.modules)e.isNavItem!==!1&&r.set(Ae(t.id,e.id),{app:t,mod:e});let i=new Set,a=[],o=e=>{let t=[];for(let n of e??[]){let e=r.get(Ae(n.appId,n.moduleId));if(!e)continue;let a=j(e.app,e.mod,n.nameOverride);i.has(a.id)||(i.add(a.id),t.push(a))}return t};for(let e of t??[]){let t=e.items===void 0?(n.get(e.itemSrc?.appId??``)?.modules??[]).filter(e=>e.isNavItem!==!1).map(t=>j(n.get(e.itemSrc?.appId??``),t)).filter(e=>i.has(e.id)?!1:(i.add(e.id),!0)):o(e.items);t.length>0&&a.push({name:e.name,isRoot:e.isRoot,items:t})}for(let t of e){let e=t.modules.filter(e=>e.isNavItem!==!1).map(e=>j(t,e)).filter(e=>i.has(e.id)?!1:(i.add(e.id),!0));e.length>0&&a.push({name:t.name??t.id,items:e})}return a}function Me(e){let t=[],n=new Set;for(let r of e)for(let e of r.modules){if(e.isUserMenuItem!==!0)continue;let i=j(r,e);n.has(i.id)||(n.add(i.id),t.push(i))}return t}function Ne(e){let t=[],n=new Set;for(let r of e)for(let e of r.items)n.has(e.id)||(n.add(e.id),t.push(e));return t}function Pe({enabled:e,getAccounts:t,children:n}){return e?(0,N.jsx)(o,{getAccounts:t,children:n}):(0,N.jsx)(N.Fragment,{children:n})}function Fe({onOpenShortcuts:e,onOpenAccountSwitch:t,onNavigate:n,enableAccountSwitch:r}){return C({keys:u,action:e,description:`Show keyboard shortcuts`,group:`Help`}),C({keys:I,action:()=>console.info(`[DockNav story] command palette shortcut triggered`),description:`Open command palette`,group:`Navigation`,enabled:!r}),C({keys:I,action:t,description:`Switch account`,group:`Navigation`,enabled:r}),C({keys:`mod+/`,action:()=>n(`/ai-studio/sessions`),description:`Open AI Studio sessions`,group:`Navigation`}),null}function Ie({apps:e=d,appModuleSortOrder:t,sidebarItemIds:n,initialActive:r,logoHref:i,forceRailHeight:a,showToggleSlot:o=!0,isCompact:s=!1,usePreferenceCompact:c=!1,preferencesKey:l=Ue,extraContent:u,unauthenticated:re=!1,enableAccountSwitch:f=!0,impersonating:p=!1}){(0,M.useEffect)(()=>{if(!p)return;let e=Date.now();return y({accessToken:`storybook-mock-token`,expiresAt:e+Be,issuedAt:e,actor:{email:P.email??`admin@gocrisp.example`},target:{email:F.email,name:F.name},mode:`readonly`}),()=>ue()},[p]);let{preferences:ie,updatePreferences:ae}=ne({key:l}),m=(0,M.useMemo)(()=>je(e,t),[e,t]),h=(0,M.useMemo)(()=>Me(e),[e]),g=(0,M.useMemo)(()=>Ne(m).slice(0,He).map(e=>e.id),[m]),_=(0,M.useMemo)(()=>{let e=new Map;for(let t of Ne(m))e.set(t.id,t);return e},[m]),[se,v]=(0,M.useState)(n),b=se??g,x=m.length===1,S=x?Ve:m,ce=(0,M.useMemo)(()=>x?m[0].items:b.map(e=>_.get(e)).filter(e=>!!e),[x,m,b,_]),[le,fe]=(0,M.useState)(r??n?.[0]??g[0]),[me,_e]=(0,M.useState)(!1),[ve,C]=(0,M.useState)(!1),[w,ye]=(0,M.useState)(Xe[1]),[be,T]=(0,M.useState)(!1),[xe,Se]=(0,M.useState)(!1),[Ce,E]=(0,M.useState)(s),we=c?ie.isSidebarCompact:Ce,Te=(0,M.useCallback)(async()=>(await new Promise(e=>window.setTimeout(e,180)),Xe),[]);(0,M.useEffect)(()=>{v(n)},[n]),(0,M.useEffect)(()=>{E(s)},[s]);let D=(0,M.useCallback)(e=>{for(let t of _.values())if(t.href===e){fe(t.id);break}},[_]),O=(0,M.useCallback)(e=>{if(c){ae({isSidebarCompact:e});return}E(e)},[ae,c]);return(0,N.jsxs)(te,{children:[(0,N.jsx)(Fe,{onOpenShortcuts:()=>T(!0),onOpenAccountSwitch:()=>C(!0),onNavigate:D,enableAccountSwitch:f}),(0,N.jsxs)(`div`,{"data-story-dock-nav":a?``:void 0,style:{minHeight:a?`${a}px`:`100vh`,height:a?`${a}px`:void 0,background:`var(--color-background, #f1f5f5)`},children:[a&&(0,N.jsx)(`style`,{children:`[data-story-dock-nav] [class*="sidebarContainer"] { height: ${a}px !important; }`}),p&&(0,N.jsx)(Oe,{}),(0,N.jsxs)(Pe,{enabled:f,getAccounts:Te,children:[(0,N.jsx)(pe,{groups:S,sidebarItems:ce,onNavigate:D,logoHref:i,isItemActive:e=>e.id===le,renderUserMenu:e=>(0,N.jsx)(de,{user:re?void 0:p?F:P,isAuthenticated:!re,open:e.open,onOpenChange:e.openChange,onLogin:()=>console.info(`[DockNav story] login triggered`),onLogout:()=>console.info(`[DockNav story] logout triggered`),navItems:h,onNavItemNavigate:e=>D(e.href),onPreferences:()=>_e(!0),onSwitchAccount:f?()=>C(!0):void 0,switchAccountDisplayKeys:f?Je:void 0,switchAccountAriaKeyShortcuts:f?Ye:void 0,onKeyboardShortcuts:()=>T(!0),keyboardShortcutsDisplayKeys:Ke,keyboardShortcutsAriaKeyShortcuts:qe,onAbout:()=>Se(!0)}),showToggleSlot:o,isCompact:we,onCompactChange:O,onSidebarItemIdsChange:v,onSidebarItemIdsReset:x?void 0:()=>v(void 0),style:a?{minHeight:`${a}px`,height:`${a}px`}:void 0,children:(0,N.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,N.jsx)(`h1`,{style:{marginTop:0},children:`Application content`}),(0,N.jsxs)(`p`,{children:[`Active module: `,(0,N.jsx)(`strong`,{children:le??`(none)`})]}),f&&(0,N.jsxs)(`p`,{children:[`Active account:`,` `,(0,N.jsx)(`strong`,{children:w?`${w.name} (${w.id})`:`(none)`})]}),(0,N.jsx)(`p`,{style:{maxWidth:640},children:`This is the slot consumers fill with their app. The DockNav sidebar floats on the left and stays sticky as you scroll. Click the multi-coloured "Modules" button at the bottom of the rail to open the App Drawer.`}),u]})}),(0,N.jsx)(ee,{open:ve,onOpenChange:C,onChange:ye,selectedId:w?.id})]}),(0,N.jsx)(oe,{open:me,onOpenChange:_e,preferencesKey:l}),(0,N.jsx)(he,{open:be,onOpenChange:T}),(0,N.jsx)(ge,{open:xe,onOpenChange:Se})]})]})}function Le(){let[e,t]=(0,M.useState)(()=>new Set(d.map(e=>e.id))),n=(0,M.useMemo)(()=>d.filter(t=>e.has(t.id)),[e]),r=e=>t(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,N.jsx)(Ie,{apps:n,sidebarItemIds:p,logoHref:`/`,usePreferenceCompact:!0,extraContent:(0,N.jsxs)(`section`,{style:{marginTop:24},children:[(0,N.jsx)(`h2`,{style:{marginBottom:12},children:`Apps`}),(0,N.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`grid`,gap:6},children:d.map(t=>(0,N.jsx)(`li`,{children:(0,N.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,N.jsx)(`input`,{type:`checkbox`,checked:e.has(t.id),onChange:()=>r(t.id)}),(0,N.jsx)(`span`,{children:t.name??t.id}),(0,N.jsxs)(`span`,{style:{opacity:.6,fontSize:12},children:[`(`,t.modules.length,` module`,t.modules.length===1?``:`s`,`)`]})]})},t.id))}),(0,N.jsx)(`p`,{style:{marginTop:16,opacity:.7,fontSize:13},children:`Tip: enable exactly one app to see single-group mode (no drawer trigger).`})]})})}function Re(){let[,e]=a(fe,void 0,_);return(0,M.useEffect)(()=>{let t={cacheKey:We,sourceUrl:Ze.picture??``,displayUrl:Ge,checkedAt:Date.now()};me(t),e(t)},[e]),(0,N.jsxs)(`section`,{style:{marginTop:32},children:[(0,N.jsx)(`style`,{children:`
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
          border-radius: var(--radius-lg, 8px);
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
      `}),(0,N.jsx)(`h2`,{style:{marginTop:0},children:`User picture cache states`}),(0,N.jsxs)(`div`,{className:`user-picture-story-grid`,children:[(0,N.jsxs)(`div`,{className:`user-picture-story-card`,children:[(0,N.jsx)(g,{user:Ze,cacheKey:We,initialCount:2,className:`user-picture-story-avatar`}),(0,N.jsx)(`strong`,{children:`Memory cached picture`}),(0,N.jsx)(`span`,{children:`Renders the stored data URL from CrispMemory without a remote picture URL.`})]}),(0,N.jsxs)(`div`,{className:`user-picture-story-card`,children:[(0,N.jsx)(g,{user:Qe,cacheKey:`storybook-inaccessible-user-picture`,initialCount:2,className:`user-picture-story-avatar`}),(0,N.jsx)(`strong`,{children:`Inaccessible picture`}),(0,N.jsx)(`span`,{children:`Falls back to initials when neither cache nor remote image is available.`})]}),(0,N.jsxs)(`div`,{className:`user-picture-story-card`,children:[(0,N.jsx)(g,{user:$e,cacheKey:`storybook-two-initial-user-picture`,initialCount:2,className:`user-picture-story-avatar`}),(0,N.jsx)(`strong`,{children:`Two initials`}),(0,N.jsx)(`span`,{children:`Uses the configurable fallback count when no picture URL exists.`})]})]})]})}function ze(){let e=d,t=(0,M.useMemo)(()=>je(e,f),[e]),n=(0,M.useMemo)(()=>Me(e),[e]),r=(0,M.useMemo)(()=>Ne(t),[t]),i=(0,M.useMemo)(()=>{let e=new Map;for(let t of r)e.set(t.id,t);return e},[r]),{preferences:a,setPreferences:o,updatePreferences:s,isLoading:c}=ne({key:tt}),ee=(0,M.useMemo)(()=>r.slice(0,He).map(e=>e.id),[r]),l=a.sidebarItemIds??ee,u=t.length===1,re=u?Ve:t,p=(0,M.useMemo)(()=>u?t[0].items:l.map(e=>i.get(e)).filter(e=>!!e),[u,t,l,i]),[ie,ae]=(0,M.useState)(l[0]),[m,h]=(0,M.useState)(!1),[g,_]=(0,M.useState)(!1),[se,v]=(0,M.useState)(!1),y=(0,M.useCallback)(e=>{for(let t of i.values())if(t.href===e){ae(t.id);break}},[i]),b=(0,M.useCallback)(e=>{let t=l;s({sidebarItemIds:t.includes(e)?t.filter(t=>t!==e):[...t,e]})},[l,s]),x=(0,M.useCallback)(()=>{o({...a,sidebarItemIds:void 0})},[a,o]),S=(0,M.useMemo)(()=>new Set(l),[l]);return(0,N.jsxs)(te,{children:[(0,N.jsx)(Fe,{onOpenShortcuts:()=>_(!0),onOpenAccountSwitch:()=>{},onNavigate:y,enableAccountSwitch:!1}),(0,N.jsxs)(`div`,{style:{minHeight:`100vh`,background:`var(--color-background, #f1f5f5)`},children:[(0,N.jsx)(pe,{groups:re,sidebarItems:p,onNavigate:y,isItemActive:e=>e.id===ie,renderUserMenu:e=>(0,N.jsx)(de,{user:P,isAuthenticated:!0,open:e.open,onOpenChange:e.openChange,onLogout:()=>console.info(`[DockNav story] logout triggered`),navItems:n,onNavItemNavigate:e=>y(e.href),onPreferences:()=>h(!0),onKeyboardShortcuts:()=>_(!0),keyboardShortcutsDisplayKeys:Ke,keyboardShortcutsAriaKeyShortcuts:qe,onAbout:()=>v(!0)}),showToggleSlot:!0,isCompact:a.isSidebarCompact,onCompactChange:e=>void s({isSidebarCompact:e}),onSidebarItemIdsChange:e=>void s({sidebarItemIds:e}),onSidebarItemIdsReset:u?void 0:x,children:(0,N.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,N.jsx)(`h1`,{style:{marginTop:0},children:`Persisted module selection`}),(0,N.jsxs)(`p`,{style:{maxWidth:640},children:[`The selected rail modules are persisted in IndexedDB (DB `,(0,N.jsx)(`code`,{children:`crisp:main`}),`, key`,` `,(0,N.jsx)(`code`,{children:tt}),`) via `,(0,N.jsx)(`code`,{children:`useDockPreferences`}),`. Toggle pins below to mutate it; reload the page to confirm it survives. Both the rail and the panel re-render in lockstep — they share the same `,(0,N.jsx)(`code`,{children:`useSyncExternalStore`}),` `,`subscription under the hood.`]}),(0,N.jsx)(`p`,{style:{opacity:.7,fontSize:13},children:c?`Loading from IDB…`:`Pinned (${l.length}):`}),(0,N.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`grid`,gap:6},children:r.map(e=>(0,N.jsx)(`li`,{children:(0,N.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,N.jsx)(`input`,{type:`checkbox`,checked:S.has(e.id),onChange:()=>b(e.id)}),(0,N.jsx)(`span`,{children:e.name}),(0,N.jsxs)(`span`,{style:{opacity:.5,fontSize:12},children:[`(`,e.id,`)`]})]})},e.id))}),(0,N.jsx)(`button`,{type:`button`,onClick:x,style:{marginTop:20,padding:`6px 12px`,border:`1px solid var(--color-border-emphasis, #cbd1d3)`,background:`transparent`,borderRadius:6,cursor:`pointer`,font:`inherit`},children:`Reset module selection`})]})}),(0,N.jsx)(oe,{open:m,onOpenChange:h,preferencesKey:tt}),(0,N.jsx)(he,{open:g,onOpenChange:_}),(0,N.jsx)(ge,{open:se,onOpenChange:v})]})]})}var M,N,P,F,Be,Ve,He,Ue,We,Ge,Ke,qe,I,Je,Ye,Xe,Ze,Qe,$e,et,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,tt,$,nt;t((()=>{M=e(n(),1),c(),ke(),S(),re(),i(),ae(),s(),_e(),ie(),ve(),x(),le(),l(),ce(),b(),N=r(),P={name:`Allan Brown`,email:`allanbrown@acme.com`,given_name:`Allan`},F={name:`Cipriano Cliente`,email:`cipriano@dot-foods.example`},Be=300*1e3,Ve=[],He=7,Ue=`DockNav_preferences_storybook_v1`,We=`storybook-cached-user-picture`,Ge=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Crect%20width%3D%2272%22%20height%3D%2272%22%20rx%3D%2216%22%20fill%3D%22%230f766e%22%2F%3E%3Ctext%20x%3D%2236%22%20y%3D%2244%22%20text-anchor%3D%22middle%22%20font-size%3D%2226%22%20font-family%3D%22Arial%22%20font-weight%3D%22700%22%20fill%3D%22white%22%3ECP%3C%2Ftext%3E%3C%2Fsvg%3E`,Ke=h(u),qe=m(u),I=`mod+k`,Je=h(I),Ye=m(I),Xe=[{id:`80001`,name:`Acme Grocery`},{id:`80002`,name:`Bright Farms`},{id:`80003`,name:`Canyon Market`},{id:`80004`,name:`Dawn Distribution`},{id:`80005`,name:`Evergreen Foods`},{id:`80006`,name:`Fieldstone`},{id:`80007`,name:`Golden Pantry`},{id:`80008`,name:`Harbor Wholesale`},{id:`80009`,name:`Ivy Organics`},{id:`80010`,name:`Juno Retail`}],Ze={name:`Cached Person`,email:`cached.person@acme.com`},Qe={name:`Broken Avatar`,email:`broken.avatar@acme.com`,picture:`https://example.invalid/broken-avatar.png`},$e={name:`Allan Brown`,email:`allanbrown@acme.com`},et={title:`Common/DockNav`,component:Ie,parameters:{layout:`fullscreen`}},L={render:()=>(0,N.jsx)(Le,{})},R={args:{},parameters:{docs:{description:{story:`No sort order is supplied here: modules are grouped by app in the order they appear in the federated apps array.`}}}},z={name:`Custom module sort order`,args:{appModuleSortOrder:f}},B={args:{isCompact:!0}},V={name:`With overspill ("...")`,args:{forceRailHeight:480}},H={args:{sidebarItemIds:[],initialActive:void 0}},U={name:`Active: AI Studio › Sessions`,args:{sidebarItemIds:[...p],initialActive:`ai-studio:ai-studio-sessions`}},W={args:{showToggleSlot:!1}},G={name:`Single group (mountStandalone)`,args:{apps:d.filter(e=>e.id===`ai-studio`),sidebarItemIds:[],initialActive:`ai-studio:ai-studio-sessions`}},K={name:`User menu — authenticated`,args:{},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail to open the user menu. Shows Preferences, the user identity card, and Log out. Opening the menu dismisses the module drawer; opening the drawer dismisses the menu.`}}}},q={name:`User menu — no account provider`,args:{enableAccountSwitch:!1},parameters:{docs:{description:{story:`The user menu omits the Switch account row when no AccountsProvider/getAccounts function is available above the dock.`}}}},J={name:`Preferences dialog`,args:{usePreferenceCompact:!0},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail, then choose Preferences to open the Dock preferences dialog.`}}}},Y={name:`Keyboard shortcuts dialog`,args:{},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail, then choose Keyboard shortcuts to open the grouped shortcut reference. The story also registers Shift+? as a shortcut for the same dialog.`}}}},X={name:`User menu — unauthenticated`,args:{unauthenticated:!0},parameters:{docs:{description:{story:"When no user is authenticated, the bottom-of-rail trigger collapses to a single sign-in glyph. Clicking it fires `onLogin` (the federation-aware `DockNav` wires this to `useAuth().login()`). There's no popover in this state — there's nothing to show until a user is signed in."}}}},Z={name:`User menu — impersonating`,args:{impersonating:!0},parameters:{docs:{description:{story:"While an impersonation session is active, the avatar trigger and the identity card swap to the impersonated target — keeping the rail consistent with the `<ImpersonationBanner>` and the rest of the page. Production-side, `UserMenu` (the auth-aware wrapper) computes this overlay from `useImpersonation()`; the story drives `UserMenuBase` directly with the target user shape and seeds the global `ImpersonationStore` so the banner mounts. Open the user menu (click the avatar) to see the identity card showing the impersonated user, not the admin who started the session. The banner clears the session on Esc / Stop click."}}}},Q={name:`User picture cache states`,args:{extraContent:(0,N.jsx)(Re,{})},parameters:{docs:{description:{story:`Shows the reusable user picture component rendering a cached picture, an inaccessible remote picture fallback, and a two-initial fallback.`}}}},tt=`DockNav_storybook_v1`,$={name:`With persisted module selection`,render:()=>(0,N.jsx)(ze,{})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <DockNavOverview />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'No sort order is supplied here: modules are grouped by app in the order they appear in the federated apps array.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Custom module sort order',
  args: {
    appModuleSortOrder: MOCK_APP_MODULE_SORT_ORDER
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    isCompact: true
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'With overspill ("...")',
  args: {
    forceRailHeight: 480
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    sidebarItemIds: [],
    initialActive: undefined
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Active: AI Studio › Sessions',
  args: {
    sidebarItemIds: [...MOCK_SIDEBAR_ITEM_IDS],
    initialActive: 'ai-studio:ai-studio-sessions'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    showToggleSlot: false
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
        story: 'While an impersonation session is active, the avatar trigger and the identity card swap to the impersonated target — keeping the rail consistent with the \`<ImpersonationBanner>\` and the rest of the page. Production-side, \`UserMenu\` (the auth-aware wrapper) computes this overlay from \`useImpersonation()\`; the story drives \`UserMenuBase\` directly with the target user shape and seeds the global \`ImpersonationStore\` so the banner mounts. Open the user menu (click the avatar) to see the identity card showing the impersonated user, not the admin who started the session. The banner clears the session on Esc / Stop click.'
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
}`,...$.parameters?.docs?.source}}},nt=[`Overview`,`Default`,`CustomSortOrder`,`Compact`,`WithOverspill`,`Empty`,`ActiveAiStudioSession`,`NoToggle`,`Standalone`,`UserMenuAuthenticated`,`UserMenuWithoutAccountSwitch`,`Preferences`,`KeyboardShortcuts`,`UserMenuUnauthenticated`,`UserMenuImpersonating`,`UserPictureCacheStates`,`WithPersistedModuleSelection`]}))();export{U as ActiveAiStudioSession,B as Compact,z as CustomSortOrder,R as Default,H as Empty,Y as KeyboardShortcuts,W as NoToggle,L as Overview,J as Preferences,G as Standalone,K as UserMenuAuthenticated,Z as UserMenuImpersonating,X as UserMenuUnauthenticated,q as UserMenuWithoutAccountSwitch,Q as UserPictureCacheStates,V as WithOverspill,$ as WithPersistedModuleSelection,nt as __namedExportsOrder,et as default};