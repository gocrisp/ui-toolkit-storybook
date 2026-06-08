import{c as e,i as t}from"./preload-helper-BfEw-HRh.js";import{w as n}from"./iframe-B6gs8f5C.js";import{t as r}from"./jsx-runtime-DIo5aQw4.js";import{c as i,i as a,n as o,r as s,s as c,t as l}from"./AccountSelect-DMhA2hp7.js";function u(e){let[t,n]=(0,f.useState)(e.selectedId),r=(0,f.useCallback)(e=>{n(e.id)},[]);return(0,p.jsx)(s,{...e,selectedId:t,onChange:r})}function d(){let[e,t]=(0,f.useState)();return(0,p.jsx)(c,{getAccounts:(0,f.useCallback)(async()=>(await new Promise(e=>window.setTimeout(e,250)),[m[0]]),[]),children:(0,p.jsxs)(`div`,{children:[(0,p.jsx)(l,{onChange:t,selectedId:e?.id}),(0,p.jsx)(`p`,{style:v,role:`status`,children:e?`Auto-selected: ${e.name} (${e.id})`:`Waiting for accounts...`})]})})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;t((()=>{f=e(n(),1),i(),o(),a(),p=r(),m=[{id:`80001`,name:`Acme Grocery`},{id:`80002`,name:`Bright Farms`},{id:`80003`,name:`Canyon Market`},{id:`80004`,name:`Dawn Distribution`},{id:`80005`,name:`Evergreen Foods`},{id:`80006`,name:`Fieldstone`},{id:`80007`,name:`Golden Pantry`},{id:`80008`,name:`Harbor Wholesale`},{id:`80009`,name:`Ivy Organics`},{id:`80010`,name:`Juno Retail`},{id:`80011`,name:`Kindred Co-op`},{id:`80012`,name:`Lumen CPG`},{id:`80013`,name:`Marble Foods`},{id:`80014`,name:`Northstar Grocers`},{id:`80015`,name:`Olive Branch`},{id:`80016`,name:`Prairie Supply`},{id:`80017`,name:`Quartz Market`},{id:`80018`,name:`Riverbend`},{id:`80019`,name:`Summit Stores`},{id:`80020`,name:`Terra Provisions`}],h=m.slice(0,6),g=[m[7],m[1],m[14],m[3]],_={minHeight:`100vh`,display:`grid`,placeItems:`center`,padding:48,background:`var(--color-background, #ffffff)`},v={margin:`16px 0 0`,color:`var(--color-foreground-subtle, #507179)`,fontSize:14,textAlign:`center`},y={title:`Common/AccountSelect`,component:s,parameters:{layout:`fullscreen`},decorators:[e=>(0,p.jsx)(`div`,{style:_,children:(0,p.jsx)(e,{})})],args:{placeholder:`Search accounts`}},b={args:{accounts:m,recentAccounts:g,selectedId:``},render:e=>(0,p.jsx)(u,{...e})},x={args:{accounts:h,recentAccounts:h.slice(0,3),selectedId:h[0].id},render:e=>(0,p.jsx)(u,{...e})},S={args:{accounts:[],recentAccounts:[]},render:e=>(0,p.jsx)(u,{...e})},C={args:{accounts:[],loading:!0},render:e=>(0,p.jsx)(u,{...e})},w={args:{accounts:[],error:`Unable to retrieve accounts`},render:e=>(0,p.jsx)(u,{...e})},T={args:{accounts:[]},render:()=>(0,p.jsx)(d,{})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: MANY_ACCOUNTS,
    recentAccounts: RECENT_ACCOUNTS,
    selectedId: ''
  },
  render: args => <ControlledAccountSelect {...args} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: SMALL_ACCOUNT_LIST,
    recentAccounts: SMALL_ACCOUNT_LIST.slice(0, 3),
    selectedId: SMALL_ACCOUNT_LIST[0].id
  },
  render: args => <ControlledAccountSelect {...args} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: [],
    recentAccounts: []
  },
  render: args => <ControlledAccountSelect {...args} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: [],
    loading: true
  },
  render: args => <ControlledAccountSelect {...args} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: [],
    error: 'Unable to retrieve accounts'
  },
  render: args => <ControlledAccountSelect {...args} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: []
  },
  render: () => <AutoSelectSingleAccountDemo />
}`,...T.parameters?.docs?.source}}},E=[`ManyAccountsWithRecents`,`FewerThanSevenAccounts`,`NoAccounts`,`Loading`,`RetrievalError`,`AutoSelectSingleAccount`]}))();export{T as AutoSelectSingleAccount,x as FewerThanSevenAccounts,C as Loading,b as ManyAccountsWithRecents,S as NoAccounts,w as RetrievalError,E as __namedExportsOrder,y as default};