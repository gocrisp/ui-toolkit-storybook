import{i as e,n as t,r as n,t as r}from"./PreferencesDialog-CxuJ791J.js";import{i,n as a,r as o,t as s}from"./SidePanel-DkxnfVfr.js";import{A as c,D as l,E as u,M as ee,O as d,P as f,St as te,a as p,at as m,c as h,ct as g,dt as _,ft as v,gt as y,ht as ne,i as b,it as re,j as ie,l as ae,lt as oe,m as x,mt as se,n as ce,nt as S,o as le,p as ue,r as de,rt as fe,s as C,u as pe,ut as me,vt as he}from"./DockNav2-nyAv7wW9.js";import{l as ge,u as _e}from"./AccountSelect-Dv-oX6cG.js";import{b as w,n as ve}from"./iframe-w9-JtUSR.js";import{a as ye,c as T,r as be,t as xe,u as E}from"./usePathname-DUxkm4Ev.js";import{n as Se,t as Ce}from"./AccountSwitch-BPqs0h3y.js";import{a as we,i as Te,r as Ee,t as De}from"./AppChrome-DsAFMhT-.js";import{n as Oe}from"./DockNav-BdGWCDg5.js";import{n as ke}from"./rolldown-runtime-C0FnF6B9.js";function Ae({selectedAccountId:e,onAccountChange:t,beforeAccountSwitch:n,placeholder:r=`Search accounts`}){let{isCommandPaletteOpen:i,setCommandPaletteOpen:a,toggleCommandPalette:o,registerCommandPalette:s}=p(),{accountId:c}=f(),l=be(),u=T(),ee=E(),d=n??ee;(0,D.useEffect)(()=>s(),[s]),se({keys:k,action:o,description:`Open command palette`,group:`Navigation`});let m=(0,D.useCallback)(e=>{if(t){t(e);return}u(te({pathname:l,search:window.location.search,hash:window.location.hash,routeAccountId:c,nextAccountId:e.id,beforeAccountSwitch:d}))},[c,d,u,t,l]);return(0,O.jsx)(Ce,{open:i,onOpenChange:a,selectedId:e??c,onChange:m,placeholder:r})}var D,O,k;function A(){return(A=ke((()=>{D=w(),ee(),ye(),xe(),v(),Se(),b(),O=ve(),k=`mod+shift+p`,Ae.__docgenInfo={description:``,methods:[],displayName:`CommandPalette`,props:{selectedAccountId:{required:!1,tsType:{name:`string`},description:`Currently selected account. Defaults to the account in the route.
Provided mainly so hosts without a federation context (Storybook, custom
shells) can drive the palette.`},onAccountChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(account: Account) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: string;
  name: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}},name:`account`}],return:{name:`void`}}},description:`Called when an account is chosen. Defaults to account-switch navigation.`},beforeAccountSwitch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  nextAccountId: string,
  currentPath: string,
  getNextPathDefault: () => string,
) => string | undefined`,signature:{arguments:[{type:{name:`string`},name:`nextAccountId`},{type:{name:`string`},name:`currentPath`},{type:{name:`signature`,type:`function`,raw:`() => string`,signature:{arguments:[],return:{name:`string`}}},name:`getNextPathDefault`}],return:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]}}},description:`Overrides the account-switch path resolution. Falls back to FederatedContext.`},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Search accounts'`,computed:!1}}}}})))()}function je(e){return e.flatMap(e=>e.modules)}function Me(e,t,n){let r=je(e);return t?C(e,r,void 0,t):d(u(e,r,void 0,n))}function Ne({enabled:e,getAccounts:t,children:n}){return e?(0,M.jsx)(ge,{getAccounts:t,children:n}):(0,M.jsx)(M.Fragment,{children:n})}function Pe({onOpenShortcuts:e,onOpenAccountSwitch:t,enableAccountSwitch:n}){return se({keys:_,action:e,description:`Show keyboard shortcuts`,group:`Help`}),se({keys:F,action:t,description:`Switch account`,group:`Navigation`,enabled:n}),null}function Fe({apps:t=S,appModules:n,appModuleSortOrder:i=fe,initialSidebarOrder:a,initialActive:u,logoHref:ee,forceRailHeight:d,registerCommandPalette:f=!1,registerSidePanel:te=!1,isCompact:p=!1,usePreferenceCompact:m=!1,preferencesKey:h=He,extraContent:_,unauthenticated:v=!1,enableAccountSwitch:y=!0,impersonating:b=!1,onImpersonatingChange:re}){(0,j.useEffect)(()=>{if(!b){g();return}let e=Date.now();return me({accessToken:`storybook-mock-token`,expiresAt:e+Ve,issuedAt:e,actor:{email:N.email??`admin@gocrisp.example`},target:{email:Be.email,name:Be.name},mode:`readonly`}),()=>g()},[b]);let{preferences:ie,updatePreferences:oe}=e({key:h}),x=(0,j.useMemo)(()=>Me(t,n,i),[t,n,i]),se=(0,j.useMemo)(()=>l(t,je(t),void 0),[t]),[de,C]=(0,j.useState)(a),pe=(0,j.useMemo)(()=>le(x,de),[x,de]),[he,ge]=(0,j.useState)(u??x[0]?.id),[_e,w]=(0,j.useState)(!1),[ve,ye]=(0,j.useState)(!1),[T,be]=(0,j.useState)(Je[1]),[xe,E]=(0,j.useState)(!1),[Se,we]=(0,j.useState)(!1),[Ee,Oe]=(0,j.useState)(p),ke=m?ie.isSidebarCompact:Ee,D=(0,j.useCallback)(async()=>(await new Promise(e=>window.setTimeout(e,180)),Je),[]);(0,j.useEffect)(()=>{C(a)},[a]),(0,j.useEffect)(()=>{Oe(p)},[p]);let O=(0,j.useCallback)(e=>{let t=x.find(t=>t.href===e);t&&ge(t.id)},[x]),k=(0,j.useCallback)(e=>{if(m){oe({isSidebarCompact:e});return}Oe(e)},[oe,m]),A=(0,M.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,M.jsx)(`h1`,{style:{marginTop:0},children:`Application content`}),(0,M.jsxs)(`p`,{children:[`Active module: `,(0,M.jsx)(`strong`,{children:he??`(none)`})]}),y&&(0,M.jsxs)(`p`,{children:[`Active account:`,` `,(0,M.jsx)(`strong`,{children:T?`${T.name} (${T.id})`:`(none)`})]}),(0,M.jsxs)(`p`,{style:{maxWidth:640},children:[`DockNav2 has no module drawer — the rail is the whole surface. Right-click the rail to reorder it or switch between compact and expanded.`,f&&(0,M.jsxs)(M.Fragment,{children:[` `,`A command palette is registered, so the toggle under the logo (and`,` `,(0,M.jsx)(`kbd`,{children:qe.join(` `)}),`) opens it.`]})]}),_]});return(0,M.jsxs)(ne,{children:[(0,M.jsx)(Pe,{onOpenShortcuts:()=>E(!0),onOpenAccountSwitch:()=>ye(!0),enableAccountSwitch:y}),(0,M.jsxs)(`div`,{"data-story-dock-nav":d?``:void 0,style:{minHeight:d?`${d}px`:`calc(100vh - var(--crisp-chrome-inset-top, 0px))`,height:d?`${d}px`:void 0,background:`var(--color-background, #f1f5f5)`},children:[d&&(0,M.jsx)(`style`,{children:`[data-story-dock-nav] [class*="sidebarContainer"] { height: ${d}px !important; }`}),(0,M.jsx)(De,{children:(0,M.jsx)(Te,{reloadOnSessionEnd:!1,onStop:()=>re?.(!1)})}),(0,M.jsxs)(Ne,{enabled:y,getAccounts:D,children:[(0,M.jsxs)(ce,{sidebarItems:pe,onNavigate:O,logoHref:ee,isItemActive:e=>e.id===he,renderUserMenu:e=>(0,M.jsx)(ue,{user:v?void 0:b?Be:N,isAuthenticated:!v,open:e.open,onOpenChange:e.openChange,onLogin:()=>console.info(`[DockNav2 story] login triggered`),onLogout:()=>console.info(`[DockNav2 story] logout triggered`),navItems:se,onNavItemNavigate:e=>O(e.href),onPreferences:()=>w(!0),onSwitchAccount:y?()=>ye(!0):void 0,switchAccountDisplayKeys:y?Ge:void 0,switchAccountAriaKeyShortcuts:y?Ke:void 0,onKeyboardShortcuts:()=>E(!0),keyboardShortcutsDisplayKeys:Ue,keyboardShortcutsAriaKeyShortcuts:We,onAbout:()=>we(!0)}),isCompact:ke,onCompactChange:k,onSidebarItemIdsChange:C,onSidebarItemIdsReset:de?()=>C(void 0):void 0,style:d?{minHeight:`${d}px`,height:`${d}px`}:void 0,children:[f&&(0,M.jsx)(Ae,{selectedAccountId:T?.id,onAccountChange:be}),te?(0,M.jsx)(s,{mode:`fixed`,defaultSize:`18rem`,sidePanelContent:(0,M.jsx)(o,{}),children:A}):A]}),(0,M.jsx)(Ce,{open:ve,onOpenChange:ye,onChange:be,selectedId:T?.id})]}),(0,M.jsx)(r,{open:_e,onOpenChange:w,preferencesKey:h}),(0,M.jsx)(ae,{open:xe,onOpenChange:E}),(0,M.jsx)(c,{open:Se,onOpenChange:we})]})]})}function Ie({impersonating:e,registerCommandPalette:t,registerSidePanel:n,onImpersonatingChange:r}){let[i,a]=(0,j.useState)(()=>new Set(S.map(e=>e.id))),o=(0,j.useMemo)(()=>S.filter(e=>i.has(e.id)),[i]),s=e=>a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,M.jsx)(Fe,{apps:o,logoHref:`/`,usePreferenceCompact:!0,impersonating:e,registerCommandPalette:t,registerSidePanel:n,onImpersonatingChange:r,extraContent:(0,M.jsxs)(`section`,{style:{marginTop:24},children:[(0,M.jsx)(`h2`,{style:{marginBottom:12},children:`Apps`}),(0,M.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`grid`,gap:6},children:S.map(e=>(0,M.jsx)(`li`,{children:(0,M.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,M.jsx)(`input`,{type:`checkbox`,checked:i.has(e.id),onChange:()=>s(e.id)}),(0,M.jsx)(`span`,{children:e.name??e.id}),(0,M.jsxs)(`span`,{style:{opacity:.6,fontSize:12},children:[`(`,e.modules.length,` module`,e.modules.length===1?``:`s`,`)`]})]})},e.id))}),(0,M.jsx)(`p`,{style:{marginTop:16,opacity:.7,fontSize:13},children:`Disabling an app removes its modules from the rail. Unlike DockNav there is no drawer to fall back on — everything authorized is on the rail (or in its overspill).`})]})})}function Le(){let t=(0,j.useMemo)(()=>Me(S,void 0,fe),[]),n=(0,j.useMemo)(()=>l(S,je(S),void 0),[]),{preferences:i,setPreferences:a,updatePreferences:o,isLoading:s}=e({key:P}),u=(0,j.useMemo)(()=>le(t,i.sidebarItemOrder),[t,i.sidebarItemOrder]),[ee,d]=(0,j.useState)(t[0]?.id),[f,te]=(0,j.useState)(!1),[p,m]=(0,j.useState)(!1),[h,g]=(0,j.useState)(!1),_=(0,j.useCallback)(e=>{let n=t.find(t=>t.href===e);n&&d(n.id)},[t]),v=(0,j.useCallback)(()=>{a({...i,sidebarItemOrder:void 0})},[i,a]);return(0,M.jsx)(ne,{children:(0,M.jsxs)(`div`,{style:{minHeight:`calc(100vh - var(--crisp-chrome-inset-top, 0px))`,background:`var(--color-background, #f1f5f5)`},children:[(0,M.jsx)(ce,{sidebarItems:u,onNavigate:_,isItemActive:e=>e.id===ee,renderUserMenu:e=>(0,M.jsx)(ue,{user:N,isAuthenticated:!0,open:e.open,onOpenChange:e.openChange,onLogout:()=>console.info(`[DockNav2 story] logout triggered`),navItems:n,onNavItemNavigate:e=>_(e.href),onPreferences:()=>te(!0),onKeyboardShortcuts:()=>m(!0),keyboardShortcutsDisplayKeys:Ue,keyboardShortcutsAriaKeyShortcuts:We,onAbout:()=>g(!0)}),isCompact:i.isSidebarCompact,onCompactChange:e=>void o({isSidebarCompact:e}),onSidebarItemIdsChange:e=>void o({sidebarItemOrder:e}),onSidebarItemIdsReset:i.sidebarItemOrder?v:void 0,children:(0,M.jsxs)(`main`,{style:{padding:32,color:`var(--color-foreground, #334347)`},children:[(0,M.jsx)(`h1`,{style:{marginTop:0},children:`Persisted sidebar order`}),(0,M.jsxs)(`p`,{style:{maxWidth:640},children:[`Right-click the rail and choose `,(0,M.jsx)(`strong`,{children:`Reorder sidebar items`}),`, then drag the rows. The order is persisted in IndexedDB (DB `,(0,M.jsx)(`code`,{children:`crisp:main`}),`, key`,` `,(0,M.jsx)(`code`,{children:P}),`) via `,(0,M.jsx)(`code`,{children:`useDockPreferences`}),`, under the `,(0,M.jsx)(`code`,{children:`sidebarItemOrder`}),` field — separate from DockNav's pinned`,` `,(0,M.jsx)(`code`,{children:`sidebarItemIds`}),` so the two surfaces can coexist. Reload to confirm it survives.`]}),(0,M.jsx)(`p`,{style:{opacity:.7,fontSize:13},children:s?`Loading from IDB…`:i.sidebarItemOrder?.join(`, `)??`(using the derived order)`})]})}),(0,M.jsx)(r,{open:f,onOpenChange:te,preferencesKey:P}),(0,M.jsx)(ae,{open:p,onOpenChange:m}),(0,M.jsx)(c,{open:h,onOpenChange:g})]})})}function Re(e){let[,t]=ze();return(0,M.jsx)(Fe,{...e,onImpersonatingChange:e=>t({impersonating:e})})}var j,M,ze,N,Be,Ve,He,P,Ue,We,F,Ge,Ke,qe,Je,Ye,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Xe;function Ze(){return(Ze=ke((()=>{j=w(),_e(),we(),oe(),v(),ie(),Se(),Ee(),A(),m(),Oe(),x(),t(),n(),pe(),i(),a(),h(),de(),M=ve(),{useArgs:ze}=__STORYBOOK_MODULE_PREVIEW_API__,N={name:`Allan Brown`,email:`allanbrown@acme.com`,given_name:`Allan`},Be={name:`Cipriano Cliente`,email:`cipriano@dot-foods.example`},Ve=3e5,He=`DockNav2_preferences_storybook_v1`,P=`DockNav2_storybook_v1`,Ue=y(_),We=he(_),F=`mod+k`,Ge=y(F),Ke=he(F),qe=y(k),Je=[{id:`80001`,name:`Acme Grocery`},{id:`80002`,name:`Bright Farms`},{id:`80003`,name:`Canyon Market`},{id:`80004`,name:`Dawn Distribution`},{id:`80005`,name:`Evergreen Foods`},{id:`80006`,name:`Fieldstone`},{id:`80007`,name:`Golden Pantry`},{id:`80008`,name:`Harbor Wholesale`},{id:`80009`,name:`Ivy Organics`},{id:`80010`,name:`Juno Retail`}],Ye={title:`Common/DockNav2`,component:Fe,render:Re,parameters:{layout:`fullscreen`},argTypes:{registerCommandPalette:{name:`registerCommandPalette`,control:`boolean`,description:`Mounts a CommandPalette child. Registration is what makes the rail toggle and the ⌘⇧P shortcut appear.`},registerSidePanel:{name:`registerSidePanel`,control:`boolean`,description:`Mounts a SidePanel child. DockNav2 provides the SidePanel context but no rail toggle — that slot now belongs to the command palette.`},impersonating:{name:`impersonating`,control:`boolean`,description:`Seeds a mock impersonation session (amber banner + user-menu overlay). Toggle off, or use Stop / ⌘I · Ctrl+I on the banner, to clear it.`},onImpersonatingChange:{control:!1,table:{disable:!0}}},args:{impersonating:!1,registerCommandPalette:!1,registerSidePanel:!1}},I={render:e=>{let[,t]=ze();return(0,M.jsx)(Ie,{...e,onImpersonatingChange:e=>t({impersonating:e})})}},L={args:{},parameters:{docs:{description:{story:`The rail is derived from the app module sort order (flattened), with any modules the sort order never mentions appended — nothing is hidden, because there is no drawer to hide it in.`}}}},R={name:`Explicit appModules list`,args:{appModules:[{appId:`ai-studio`,moduleId:`ai-studio-sessions`},{appId:`data-platform`,moduleId:`home`},{appId:`strategy`,moduleId:`strategy`,nameOverride:`Strategy Hub`},{appId:`order-mgmt`,moduleId:`order-mgmt`}],initialActive:`ai-studio:ai-studio-sessions`},parameters:{docs:{description:{story:"When the host passes `appModules`, the list is taken literally: exactly those modules, in that order, with `nameOverride` applied. Nothing is appended, and entries that do not resolve to an authorized nav module are dropped."}}}},z={args:{isCompact:!0},parameters:{docs:{description:{story:"Icon-only rail with delayed tooltips. Toggle it from the rail context menu or the Preferences dialog — both write the same `isSidebarCompact` preference DockNav uses."}}}},B={name:`With overspill ("...")`,args:{forceRailHeight:480},parameters:{docs:{description:{story:`The rail measures itself and collapses the trailing items into a "More" popover when they cannot fit. Unchanged from DockNav — and more load-bearing here, since the drawer is no longer a fallback route to those modules.`}}}},V={args:{apps:[],initialActive:void 0},parameters:{docs:{description:{story:`No authorized modules: the rail renders its caps only. The context menu keeps the compact toggle but drops reordering, since there is nothing to reorder.`}}}},H={name:`Active: AI Studio › Sessions`,args:{initialActive:`ai-studio:ai-studio-sessions`}},U={name:`Reorder dialog`,args:{initialSidebarOrder:[...re].reverse()},parameters:{docs:{description:{story:'Right-click the rail and choose "Reorder sidebar items" to open the centred dialog. The rows are the same cabbage `Sortable` rows DockNav shows inside its drawer, so the drag gesture is unchanged; every drag commits immediately, and "Reset to default order" restores the derived order. This story seeds a reversed order so the rail starts out visibly customised.'}}}},W={name:`With command palette`,args:{registerCommandPalette:!0},parameters:{docs:{description:{story:"A `<CommandPalette>` mounted anywhere inside DockNav2 registers itself, which is what adds the magnifier toggle under the logo and binds ⌘⇧P (visible in the keyboard shortcuts dialog). For now the palette presents the account switcher; the registration/toggle/shortcut wiring is the part that will not change when real commands land."}}}},G={name:`Without command palette`,args:{registerCommandPalette:!1},parameters:{docs:{description:{story:`With no palette registered the toggle slot under the logo stays empty and ⌘⇧P is unbound. The rail caps reserve the same height either way, so the middle items stay centred.`}}}},K={name:`With side panel`,args:{registerSidePanel:!0,registerCommandPalette:!0},parameters:{docs:{description:{story:"DockNav2 still provides the SidePanel context, so `<SidePanel>` children mount and render. There is no rail toggle for it — the slot under the logo now belongs to the command palette — so the panel sits at its `defaultOpen` state until a host drives it."}}}},q={name:`User menu — authenticated`,args:{},parameters:{docs:{description:{story:`Click the avatar at the bottom of the rail. Opening the menu dismisses the overspill popover and vice versa — the same single-popover rule DockNav enforces.`}}}},J={name:`User menu — no account provider`,args:{enableAccountSwitch:!1},parameters:{docs:{description:{story:`Without an AccountsProvider above the dock the Switch account row is omitted and ⌘K is unbound.`}}}},Y={name:`User menu — unauthenticated`,args:{unauthenticated:!0}},X={name:`User menu — impersonating`,args:{impersonating:!0},parameters:{docs:{description:{story:"While an impersonation session is active the avatar and identity card swap to the impersonated target, keeping the rail consistent with the banner. Use the `impersonating` control, the banner Stop button, or ⌘I / Ctrl+I to dismiss."}}}},Z={name:`Preferences dialog`,args:{usePreferenceCompact:!0},parameters:{docs:{description:{story:"Open the user menu, then Preferences. The Compact checkbox writes the shared `isSidebarCompact` preference, so it drives DockNav2 exactly as it drives DockNav."}}}},Q={name:`Keyboard shortcuts dialog`,args:{registerCommandPalette:!0},parameters:{docs:{description:{story:`Open the user menu, then Keyboard shortcuts (or press Shift+?). With a command palette registered, ⌘⇧P appears in the Navigation group — the palette registers its own shortcut, so surfaces without one never advertise it.`}}}},$={name:`With persisted order`,render:()=>(0,M.jsx)(Le,{})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Xe=[`Overview`,`Default`,`ExplicitAppModules`,`Compact`,`WithOverspill`,`Empty`,`ActiveAiStudioSession`,`ReorderDialog`,`WithCommandPalette`,`WithoutCommandPalette`,`WithSidePanel`,`UserMenuAuthenticated`,`UserMenuWithoutAccountSwitch`,`UserMenuUnauthenticated`,`UserMenuImpersonating`,`Preferences`,`KeyboardShortcuts`,`WithPersistedOrder`]})))()}Ze();export{H as ActiveAiStudioSession,z as Compact,L as Default,V as Empty,R as ExplicitAppModules,Q as KeyboardShortcuts,I as Overview,Z as Preferences,U as ReorderDialog,q as UserMenuAuthenticated,X as UserMenuImpersonating,Y as UserMenuUnauthenticated,J as UserMenuWithoutAccountSwitch,W as WithCommandPalette,B as WithOverspill,$ as WithPersistedOrder,K as WithSidePanel,G as WithoutCommandPalette,Xe as __namedExportsOrder,Ye as default};