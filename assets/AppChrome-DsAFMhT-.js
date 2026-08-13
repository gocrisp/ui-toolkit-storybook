import{n as e,t,vt as n,yt as r}from"./button-D4S5FRUb.js";import{bt as i,ct as a,ft as o,lt as s,mt as c,ot as l,st as u,yt as d}from"./DockNav2-nyAv7wW9.js";import{b as f,n as p}from"./iframe-w9-JtUSR.js";import{n as m}from"./rolldown-runtime-C0FnF6B9.js";function h(){return(0,g.useContext)(_)}var g,_;function v(){return(v=m((()=>{g=f(),_=(0,g.createContext)(!1)})))()}var y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=m((()=>{y=`_banner_5fc4m_12`,b=`_left_5fc4m_51`,x=`_icon_5fc4m_59`,S=`_copy_5fc4m_65`,C=`_label_5fc4m_73`,w=`_target_5fc4m_83`,T=`_actor_5fc4m_90`,E=`_modeBadge_5fc4m_95`,D=`_right_5fc4m_107`,O=`_stopShortcutKey_5fc4m_116`,k=`_stopButton_5fc4m_127`,A={banner:y,left:b,icon:x,copy:S,label:C,target:w,actor:T,modeBadge:E,right:D,stopShortcutKey:O,stopButton:k}})))()}function M(){return(0,F.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:A.icon,"aria-hidden":`true`,children:[(0,F.jsx)(`path`,{d:`M18 11c-1.5 0-2.5.5-3 2`}),(0,F.jsx)(`path`,{d:`M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z`}),(0,F.jsx)(`path`,{d:`M6 11c1.5 0 2.5.5 3 2`})]})}function N({onStop:e,decorateDocumentTitle:n=!0,reloadOnSessionEnd:r=!0}={}){let i=u(),o=h();(0,P.useRef)(!1),(0,P.useEffect)(()=>{},[o,i]);let s=(0,P.useRef)(null);(0,P.useEffect)(()=>{if(!n||typeof document>`u`||!i)return;s.current===null&&(s.current=document.title);let e=`[Acting as ${i.target.email}] `;return document.title.startsWith(e)||(document.title=e+(s.current??``)),()=>{s.current!==null&&(document.title=s.current,s.current=null)}},[i,n]);let l=(0,P.useRef)(null);(0,P.useEffect)(()=>{let e=l.current;if(l.current=i,e===null||i!==null||!r||typeof window>`u`)return;let t=window.location?.reload;typeof t==`function`&&t.call(window.location)},[i,r]);function f(){i&&(a(),e?.(i))}let{displayKeys:p,ariaKeyShortcuts:m,isRegistered:g}=c({keys:I,action:()=>f(),description:`Stop impersonating`,group:`Navigation`,enabled:!!i});if(!i)return null;let _=i.target.name?`${i.target.name} (${i.target.email})`:i.target.email;return(0,F.jsxs)(`div`,{className:A.banner,"data-standalone":o?void 0:`true`,role:`status`,"aria-live":`polite`,children:[(0,F.jsxs)(`div`,{className:A.left,children:[(0,F.jsx)(M,{}),(0,F.jsxs)(`div`,{className:A.copy,children:[(0,F.jsx)(`span`,{className:A.label,children:`Impersonating`}),(0,F.jsx)(`span`,{className:A.target,children:_}),(0,F.jsxs)(`span`,{className:A.actor,children:[`as `,i.actor.email]})]}),i.mode===`readonly`&&(0,F.jsx)(`span`,{className:A.modeBadge,"aria-label":`Read-only session`,children:`Read-only`})]}),(0,F.jsx)(`div`,{className:A.right,children:(0,F.jsxs)(t,{type:`button`,size:`xs`,className:A.stopButton,onClick:f,"aria-label":`Stop impersonating ${i.target.email}`,"aria-keyshortcuts":g?m:void 0,children:[g&&(0,F.jsx)(d,{keys:p,kbdClassName:A.stopShortcutKey}),`Stop impersonating`]})})]})}var P,F,I;function L(){return(L=m((()=>{e(),P=f(),v(),i(),o(),s(),l(),j(),F=p(),I=`mod+i`,N.__docgenInfo={description:`Amber banner shown across every authenticated surface while an
impersonation session is active. Renders nothing when no session is
active, so it's safe to mount unconditionally.

Mount it inside an \`<AppChrome>\` region:

\`\`\`tsx
<AppChrome>
  <ImpersonationBanner />
</AppChrome>
\`\`\`

There it takes real flow space and pushes the page down rather than
covering the top of it, because \`AppChrome\` publishes its height as
\`--crisp-chrome-inset-top\` and the shell shrinks to match. Mounted
anywhere else there is nothing to compensate for its height, so it
falls back to a fixed overlay (the pre-\`AppChrome\` behavior) and warns
in development.

Behavior:
  - Subscribes to the global \`ImpersonationStore\`, so it lights up
    immediately when the dock starts a session — even from a
    federated remote that's currently focused.
  - Clicking "Stop impersonating" or pressing \`mod+i\` clears the
    session globally; every \`useAuth()\` consumer reverts to the
    admin's SPA token on its next call. Bare Escape is left free for
    dialog/menu dismiss in the active app.
  - Whenever the banner observes an active → inactive transition (by
    any cause — Stop button, shortcut, soft-TTL expiry inside
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

The \`mod+i\` stop shortcut registers via \`useKeyboardShortcut\` when a
\`KeyboardShortcutProvider\` is present (federated \`mount\` /
\`AppStateDockNavShell\`, or manually in host chrome). Without one the
banner still renders and its Stop button still works — the keycap and
the combo are simply dropped, and development warns once.

Accessibility: rendered as \`role="status"\` with \`aria-live="polite"\`
so screen readers announce the change once without interrupting the
current focus.`,methods:[],displayName:`ImpersonationBanner`}})))()}var R,z;function B(){return(B=m((()=>{R=`_chrome_1d00j_14`,z={chrome:R}})))()}function V({children:e,className:t}){let r=(0,H.useRef)(null);return(0,H.useLayoutEffect)(()=>{let e=r.current;if(!e)return;G+=1;let t=document.documentElement,n=-1,i=e=>{let r=Math.round(e);r!==n&&(n=r,r===0?t.style.removeProperty(W):t.style.setProperty(W,`${r}px`))},a=()=>{--G,t.style.removeProperty(W)};if(i(e.getBoundingClientRect().height),typeof ResizeObserver>`u`)return a;let o=new ResizeObserver(e=>{let t=e[0];t&&i(t.borderBoxSize?.[0]?.blockSize??t.contentRect.height)});return o.observe(e),()=>{o.disconnect(),a()}},[]),(0,U.jsx)(`div`,{ref:r,className:n(z.chrome,t),children:(0,U.jsx)(_.Provider,{value:!0,children:e})})}var H,U,W,G;function K(){return(K=m((()=>{r(),H=f(),v(),B(),U=p(),W=`--crisp-chrome-inset-top`,G=0,V.__docgenInfo={description:`Sticky region at the top of the page for status banners (impersonation,
local worktree, and anything else that must not obscure content).

Mount exactly one, as the first child of the app root:

\`\`\`tsx
<AppChrome>
  <WorktreeBanner />
  <ImpersonationBanner />
</AppChrome>
<DockNav>{routes}</DockNav>
\`\`\``,methods:[],displayName:`AppChrome`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:"Banners to stack at the top of the page, in visual order. Children that\nrender `null` cost nothing — an empty region measures 0 and the custom\nproperty is never written, leaving the layout identical to having no\n`AppChrome` at all."},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}export{L as a,N as i,W as n,K as r,V as t};