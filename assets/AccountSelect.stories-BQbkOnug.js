import{i as e,l as t,n,r,t as i,u as a}from"./AccountSelect-D4ePrqN2.js";import{b as o,n as s}from"./iframe-6Kmxc6tR.js";import{n as c,t as l}from"./AccountSelectView-DPO-RyvS.js";import{n as u}from"./rolldown-runtime-C0FnF6B9.js";function d(e){let[t,n]=(0,m.useState)(e.selectedId),i=(0,m.useCallback)(e=>{n(e.id)},[]);return(0,h.jsx)(r,{...e,selectedId:t,onChange:i})}function f(){let[e,n]=(0,m.useState)(),r=(0,m.useCallback)(async()=>(await new Promise(e=>window.setTimeout(e,250)),[g[0]]),[]);return(0,h.jsx)(t,{getAccounts:r,children:(0,h.jsxs)(`div`,{children:[(0,h.jsx)(i,{onChange:n,selectedId:e?.id}),(0,h.jsx)(`p`,{style:S,role:`status`,children:e?`Auto-selected: ${e.name} (${e.id})`:`Waiting for accounts...`})]})})}function p({accounts:e,recentAccounts:n,loading:r,listReady:i,onRefresh:a,...o}){let[s,c]=(0,m.useState)(),u=(0,m.useCallback)(async()=>b,[]);return(0,h.jsx)(t,{getAccounts:u,children:(0,h.jsx)(l,{...o,autoSelectSingleAccount:!1,selectedId:s?.id??null,onChange:c})})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=u((()=>{m=o(),a(),n(),e(),c(),h=s(),g=[{id:`80001`,name:`Acme Grocery`},{id:`80002`,name:`Bright Farms`},{id:`80003`,name:`Canyon Market`},{id:`80004`,name:`Dawn Distribution`},{id:`80005`,name:`Evergreen Foods`},{id:`80006`,name:`Fieldstone`},{id:`80007`,name:`Golden Pantry`},{id:`80008`,name:`Harbor Wholesale`},{id:`80009`,name:`Ivy Organics`},{id:`80010`,name:`Juno Retail`},{id:`80011`,name:`Kindred Co-op`},{id:`80012`,name:`Lumen CPG`},{id:`80013`,name:`Marble Foods`},{id:`80014`,name:`Northstar Grocers`},{id:`80015`,name:`Olive Branch`},{id:`80016`,name:`Prairie Supply`},{id:`80017`,name:`Quartz Market`},{id:`80018`,name:`Riverbend`},{id:`80019`,name:`Summit Stores`},{id:`80020`,name:`Terra Provisions`}],_=g.slice(0,6),v=[g[7],g[1],g[14],g[3]],y={0:`Northwest Regional Cooperative Grocery Distribution Alliance`,23:`International Fresh Produce & Perishables Consolidated Trading Group`,67:`Metropolitan Area Supermarket Chain Holdings and Subsidiaries LLC`,99:`Continental Wholesale Foodservice Distribution Network Partners`},b=Array.from({length:100},(e,t)=>({id:String(80001+t),name:y[t]??`${g[t%g.length].name} ${Math.floor(t/g.length)+1}`})),x={minHeight:`100vh`,display:`grid`,placeItems:`center`,padding:48,background:`var(--color-background, #ffffff)`},S={margin:`16px 0 0`,color:`var(--color-foreground-subtle, #507179)`,fontSize:14,textAlign:`center`},C={title:`Common/AccountSelect`,component:r,parameters:{layout:`fullscreen`},args:{placeholder:`Search accounts`,limit:50,showMoreSize:100,disabled:!1,loading:!1,listReady:!0,presentation:`page`},argTypes:{accounts:{control:!1},recentAccounts:{control:!1},onChange:{action:`changed`,table:{disable:!0}},onRefresh:{control:!1,table:{disable:!0}},selectedId:{control:`text`,description:`Currently selected account id.`,table:{category:`Selection`}},loading:{control:`boolean`,description:`Shows the loading state while accounts are being fetched.`,table:{category:`State`}},listReady:{control:`boolean`,description:`When false, the account list stays in a loading state until upstream data has settled.`,table:{category:`State`}},error:{control:`text`,description:`Optional error to show alongside cached account results.`,table:{category:`State`}},placeholder:{control:`text`,description:`Search input placeholder.`,table:{category:`Display`}},disabled:{control:`boolean`,description:`Disables search, selection, and refresh.`,table:{category:`State`}},className:{control:`text`,description:"Optional class on the root `<main>` element.",table:{category:`Display`}},presentation:{control:{type:`select`},options:[`page`,`command`],description:`Page layout with header, or compact command-palette layout.`,table:{category:`Display`}},limit:{control:{type:`number`,min:1,max:500,step:1},description:`Initial maximum number of accounts shown in the "All accounts" section. Does not affect Recent.`,table:{category:`Pagination`}},showMoreSize:{control:{type:`number`,min:1,max:500,step:1},description:`How many more accounts to reveal when "Show more" is clicked.`,table:{category:`Pagination`}}},decorators:[(e,{parameters:t})=>t.skipStoryFrame?(0,h.jsx)(e,{}):(0,h.jsx)(`div`,{style:x,children:(0,h.jsx)(e,{})})],render:e=>(0,h.jsx)(d,{...e})},w={args:{accounts:g,recentAccounts:v,selectedId:``}},T={args:{accounts:b,recentAccounts:[],selectedId:``}},E={args:{accounts:_,recentAccounts:_.slice(0,3),selectedId:_[0].id}},D={args:{accounts:[],recentAccounts:[]}},O={args:{accounts:[],loading:!0}},k={args:{accounts:[],error:`Unable to retrieve accounts`}},A={args:{accounts:[]},render:()=>(0,h.jsx)(f,{})},j={name:`AccountSelectView`,args:{accounts:[]},parameters:{skipStoryFrame:!0},render:e=>(0,h.jsx)(p,{...e})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: MANY_ACCOUNTS,
    recentAccounts: RECENT_ACCOUNTS,
    selectedId: ''
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: HUNDRED_ACCOUNTS,
    recentAccounts: [],
    selectedId: ''
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: SMALL_ACCOUNT_LIST,
    recentAccounts: SMALL_ACCOUNT_LIST.slice(0, 3),
    selectedId: SMALL_ACCOUNT_LIST[0].id
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: [],
    recentAccounts: []
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: [],
    loading: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: [],
    error: 'Unable to retrieve accounts'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    accounts: []
  },
  render: () => <AutoSelectSingleAccountDemo />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'AccountSelectView',
  args: {
    accounts: []
  },
  parameters: {
    skipStoryFrame: true
  },
  render: args => <AccountSelectViewStoryRender {...args} />
}`,...j.parameters?.docs?.source}}},M=[`ManyAccountsWithRecents`,`PaginatedAccounts`,`FewerThanSevenAccounts`,`NoAccounts`,`Loading`,`RetrievalError`,`AutoSelectSingleAccount`,`AccountSelectViewStory`]})))()}N();export{j as AccountSelectViewStory,A as AutoSelectSingleAccount,E as FewerThanSevenAccounts,O as Loading,w as ManyAccountsWithRecents,D as NoAccounts,T as PaginatedAccounts,k as RetrievalError,M as __namedExportsOrder,C as default};