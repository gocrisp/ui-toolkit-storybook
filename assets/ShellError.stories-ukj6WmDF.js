import{n as e}from"./iframe-BYtyZ0Xk.js";import{a as t,i as n,n as r,r as i,t as a}from"./NotFoundIllustration-DGsZL2wL.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";function s({variant:e,details:t,onRetry:r}){return(0,c.jsx)(i,{role:`alert`,title:l[e].title,description:(0,c.jsx)(n,{description:l[e].description}),illustration:(0,c.jsx)(a,{}),details:t?{message:t}:void 0,action:{label:`Try again`,onClick:r}})}var c,l;function u(){return(u=o((()=>{t(),r(),c=e(),l={error:{title:`We could not load your applications`,description:`Check your connection and try again, or email support@gocrisp.com if the problem persists.`},empty:{title:`No applications available`,description:`You don't have access to any applications yet. Contact your administrator to request access, or email support@gocrisp.com if you believe this is an error.`}},s.__docgenInfo={description:``,methods:[],displayName:`ShellError`,props:{variant:{required:!0,tsType:{name:`union`,raw:`'error' | 'empty'`,elements:[{name:`literal`,value:`'error'`},{name:`literal`,value:`'empty'`}]},description:"`error` - discovery threw, or a remote's `mount` chunk failed to load.\n`empty` - discovery succeeded but produced no applications for this user."},details:{required:!1,tsType:{name:`string`},description:"Raw failure text, surfaced under a `Details` disclosure for support."},onRetry:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var d,f,p,m,h,g,_,v,y;function b(){return(b=o((()=>{u(),d=e(),{userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={minHeight:`100vh`,display:`grid`,placeItems:`stretch`},h={title:`Common/App State`,component:s,parameters:{layout:`fullscreen`},decorators:[e=>(0,d.jsx)(`div`,{style:m,children:(0,d.jsx)(e,{})})],args:{onRetry:()=>{console.info(`[ShellError story] retry triggered`)}}},g={args:{variant:`error`,details:`Failed to load orders: TypeError: Failed to fetch`}},_={args:{variant:`error`,details:`Failed to load orders: TypeError: Failed to fetch`},play:async({canvasElement:e})=>{let t=p(e);await f.click(t.getByRole(`button`,{name:/details/i}))}},v={args:{variant:`empty`}},y=[`ShellErrorDiscoveryFailed`,`ShellErrorDetailsExpanded`,`ShellErrorNoApplications`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    details: 'Failed to load orders: TypeError: Failed to fetch'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    details: 'Failed to load orders: TypeError: Failed to fetch'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /details/i
    }));
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'empty'
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{_ as ShellErrorDetailsExpanded,g as ShellErrorDiscoveryFailed,v as ShellErrorNoApplications,y as __namedExportsOrder,h as default};