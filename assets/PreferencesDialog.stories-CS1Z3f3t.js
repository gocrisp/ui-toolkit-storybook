import{c as e,l as t,n,t as r}from"./PreferencesDialog-Bg3JEX9E.js";import{n as i,t as a}from"./button-DH3ZWacR.js";import{n as o,x as s}from"./iframe-BYtyZ0Xk.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";function l({startOpen:e,showHaloNavPreference:n=!1}){let[i,o]=(0,u.useState)(e),{theme:s,preference:c}=t();return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`flex-start`,gap:16,padding:24},children:[(0,d.jsx)(a,{onClick:()=>o(!0),children:`Open preferences`}),(0,d.jsxs)(`p`,{style:{margin:0,maxWidth:`52ch`,color:`var(--color-foreground-subtle)`,fontSize:14},children:[`Preference `,(0,d.jsx)(`code`,{children:c}),`, resolving to `,(0,d.jsx)(`code`,{children:s}),`. Changing the theme here also moves the Storybook toolbar's Theme control, and vice versa — both drive the same origin-wide store.`]}),(0,d.jsx)(r,{open:i,onOpenChange:o,preferencesKey:f,showHaloNavPreference:n})]})}var u,d,f,p,m,h,g,_;function v(){return(v=c((()=>{i(),u=s(),e(),n(),d=o(),f=`DockNav_preferences_storybook_v1`,p={title:`DockPreferences/PreferencesDialog`,component:l,parameters:{layout:`fullscreen`,docs:{description:{component:"The global preferences surface, normally opened from the DockNav user menu. Settings apply on click — there is no Save/Cancel. Theme is deliberately not stored alongside the other preferences: it has to be readable synchronously before first paint, so it lives in localStorage via `useTheme` rather than in the IndexedDB-backed `useDockPreferences`."}}},args:{startOpen:!0}},m={name:`Open`},h={name:`With Halo Nav preference`,render:e=>(0,d.jsx)(l,{startOpen:e.startOpen,showHaloNavPreference:!0}),parameters:{docs:{description:{story:`Crisp internal users see Enable Halo Navigation under Side navigation. The checkbox is hidden for everyone else.`}}}},g={name:`Closed`,args:{startOpen:!1},parameters:{docs:{description:{story:`Starts closed so the open transition is visible.`}}}},_=[`Open`,`WithHaloNavPreference`,`Closed`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Open'
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Halo Nav preference',
  render: args => <PreferencesDemo startOpen={args.startOpen} showHaloNavPreference />,
  parameters: {
    docs: {
      description: {
        story: 'Crisp internal users see Enable Halo Navigation under Side navigation. The checkbox is hidden for everyone else.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Closed',
  args: {
    startOpen: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Starts closed so the open transition is visible.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as Closed,m as Open,h as WithHaloNavPreference,_ as __namedExportsOrder,p as default};