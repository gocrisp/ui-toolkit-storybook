import{c as e,i as t}from"./preload-helper-BfEw-HRh.js";import{w as n}from"./iframe-CF8p7N3S.js";import{t as r}from"./jsx-runtime-DIo5aQw4.js";import{i,n as a,r as o,t as s}from"./AccountSelect-Cx4AD7z-.js";function c(e){let[t,n]=(0,u.useState)(e.selectedId),r=(0,u.useCallback)(e=>{n(e.id)},[]);return(0,d.jsx)(o,{...e,selectedId:t,onChange:r})}function l(){let[e,t]=(0,u.useState)();return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(s,{cacheEnabled:!1,getAccounts:(0,u.useCallback)(async()=>(await new Promise(e=>window.setTimeout(e,250)),[f[0]]),[]),onChange:t,selectedId:e?.id}),(0,d.jsx)(`p`,{style:g,role:`status`,children:e?`Auto-selected: ${e.name} (${e.id})`:`Waiting for accounts...`})]})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;t((()=>{u=e(n(),1),a(),i(),d=r(),f=[{id:`80001`,name:`Acme Grocery`},{id:`80002`,name:`Bright Farms`},{id:`80003`,name:`Canyon Market`},{id:`80004`,name:`Dawn Distribution`},{id:`80005`,name:`Evergreen Foods`},{id:`80006`,name:`Fieldstone`},{id:`80007`,name:`Golden Pantry`},{id:`80008`,name:`Harbor Wholesale`},{id:`80009`,name:`Ivy Organics`},{id:`80010`,name:`Juno Retail`},{id:`80011`,name:`Kindred Co-op`},{id:`80012`,name:`Lumen CPG`},{id:`80013`,name:`Marble Foods`},{id:`80014`,name:`Northstar Grocers`},{id:`80015`,name:`Olive Branch`},{id:`80016`,name:`Prairie Supply`},{id:`80017`,name:`Quartz Market`},{id:`80018`,name:`Riverbend`},{id:`80019`,name:`Summit Stores`},{id:`80020`,name:`Terra Provisions`}],p=f.slice(0,6),m=[f[7],f[1],f[14],f[3]],h={minHeight:`100vh`,display:`grid`,placeItems:`center`,padding:48,background:`var(--color-background, #ffffff)`},g={margin:`16px 0 0`,color:`var(--color-foreground-subtle, #507179)`,fontSize:14,textAlign:`center`},_={title:`Common/AccountSelect`,component:o,parameters:{layout:`fullscreen`},decorators:[e=>(0,d.jsx)(`div`,{style:h,children:(0,d.jsx)(e,{})})],args:{placeholder:`Search accounts`}},v={args:{accounts:f,recentAccounts:m,selectedId:``},render:e=>(0,d.jsx)(c,{...e})},y={args:{accounts:p,recentAccounts:p.slice(0,3),selectedId:p[0].id},render:e=>(0,d.jsx)(c,{...e})},b={args:{accounts:[],recentAccounts:[]},render:e=>(0,d.jsx)(c,{...e})},x={args:{accounts:[],loading:!0},render:e=>(0,d.jsx)(c,{...e})},S={args:{accounts:[],error:`Unable to retrieve accounts`},render:e=>(0,d.jsx)(c,{...e})},C={args:{accounts:[]},render:()=>(0,d.jsx)(l,{})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: MANY_ACCOUNTS,
    recentAccounts: RECENT_ACCOUNTS,
    selectedId: ''
  },
  render: args => <ControlledAccountSelect {...args} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: SMALL_ACCOUNT_LIST,
    recentAccounts: SMALL_ACCOUNT_LIST.slice(0, 3),
    selectedId: SMALL_ACCOUNT_LIST[0].id
  },
  render: args => <ControlledAccountSelect {...args} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: [],
    recentAccounts: []
  },
  render: args => <ControlledAccountSelect {...args} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: [],
    loading: true
  },
  render: args => <ControlledAccountSelect {...args} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: [],
    error: 'Unable to retrieve accounts'
  },
  render: args => <ControlledAccountSelect {...args} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: []
  },
  render: () => <AutoSelectSingleAccountDemo />
}`,...C.parameters?.docs?.source}}},w=[`ManyAccountsWithRecents`,`FewerThanSevenAccounts`,`NoAccounts`,`Loading`,`RetrievalError`,`AutoSelectSingleAccount`]}))();export{C as AutoSelectSingleAccount,y as FewerThanSevenAccounts,x as Loading,v as ManyAccountsWithRecents,b as NoAccounts,S as RetrievalError,w as __namedExportsOrder,_ as default};