import{a as e,n as t,o as n,t as r}from"./PreferencesDialog-BwYo-8ov.js";import{n as i,t as a}from"./button-Cs51ASoK.js";import{b as o,n as s}from"./iframe-6Kmxc6tR.js";import{n as c}from"./rolldown-runtime-C0FnF6B9.js";function l({startOpen:e}){let[t,i]=(0,u.useState)(e),{theme:o,preference:s}=n();return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`flex-start`,gap:16,padding:24},children:[(0,d.jsx)(a,{onClick:()=>i(!0),children:`Open preferences`}),(0,d.jsxs)(`p`,{style:{margin:0,maxWidth:`52ch`,color:`var(--color-foreground-subtle)`,fontSize:14},children:[`Preference `,(0,d.jsx)(`code`,{children:s}),`, resolving to `,(0,d.jsx)(`code`,{children:o}),`. Changing the theme here also moves the Storybook toolbar's Theme control, and vice versa — both drive the same origin-wide store.`]}),(0,d.jsx)(r,{open:t,onOpenChange:i,preferencesKey:f})]})}var u,d,f,p,m,h,g;function _(){return(_=c((()=>{i(),u=o(),e(),t(),d=s(),f=`DockNav_preferences_storybook_v1`,p={title:`DockPreferences/PreferencesDialog`,component:l,parameters:{layout:`fullscreen`,docs:{description:{component:"The global preferences surface, normally opened from the DockNav user menu. Settings apply on click — there is no Save/Cancel. Theme is deliberately not stored alongside the other preferences: it has to be readable synchronously before first paint, so it lives in localStorage via `useTheme` rather than in the IndexedDB-backed `useDockPreferences`."}}},args:{startOpen:!0}},m={name:`Open`},h={name:`Closed`,args:{startOpen:!1},parameters:{docs:{description:{story:`Starts closed so the open transition is visible.`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Open'
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Open`,`Closed`]})))()}_();export{h as Closed,m as Open,g as __namedExportsOrder,p as default};