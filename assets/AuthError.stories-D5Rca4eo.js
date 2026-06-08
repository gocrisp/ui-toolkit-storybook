import{c as e,i as t}from"./preload-helper-BfEw-HRh.js";import{w as n}from"./iframe-B6gs8f5C.js";import{t as r}from"./jsx-runtime-DIo5aQw4.js";import{n as i,t as a}from"./AuthError-ZFBPuwER.js";function o(e,t){let n=Error(e);return n.error=e,t&&(n.error_description=t),n}function s({search:e,children:t}){return(0,c.useEffect)(()=>{let{pathname:t,hash:n}=window.location;return window.history.replaceState({},``,`${t}${e}${n}`),()=>{window.history.replaceState({},``,`${t}${n}`)}},[e]),t}var c,l,u,d,f,p,m,h,g,_,v,y,b;t((()=>{c=e(n(),1),i(),l=r(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={minHeight:`100vh`,display:`grid`,placeItems:`stretch`},p=()=>{console.info(`[AuthError story] retry triggered`)},m={title:`Common/App State`,component:a,parameters:{layout:`fullscreen`},decorators:[e=>(0,l.jsx)(`div`,{style:f,children:(0,l.jsx)(e,{})})],args:{onRetry:p}},h={args:{error:o(`login_required`)}},g={args:{error:o(`access_denied`,`User is not part of any organization. Contact your administrator to request access.`)}},_={args:{error:o(`invalid_request`,`The redirect URI is not registered with the Auth0 application configuration.`)}},v={decorators:[e=>(0,l.jsx)(s,{search:`?error=access_denied&error_description=User%20denied%20consent`,children:(0,l.jsx)(e,{})})],args:{error:Error(`OAuth callback error`)}},y={args:{error:o(`invalid_request`,`The redirect URI is not registered with the Auth0 application configuration.`)},play:async({canvasElement:e})=>{let t=d(e);await u.click(t.getByRole(`button`,{name:/details/i}))}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    error: auth0Error('login_required')
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    error: auth0Error('access_denied', 'User is not part of any organization. Contact your administrator to request access.')
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    error: auth0Error('invalid_request', 'The redirect URI is not registered with the Auth0 application configuration.')
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <WithSearchParams search="?error=access_denied&error_description=User%20denied%20consent">
        <Story />
      </WithSearchParams>],
  args: {
    error: new Error('OAuth callback error')
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    error: auth0Error('invalid_request', 'The redirect URI is not registered with the Auth0 application configuration.')
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /details/i
    }));
  }
}`,...y.parameters?.docs?.source}}},b=[`AuthErrorSignInFailed`,`AuthErrorAdditionalAccessNeeded`,`AuthErrorWithTechnicalDetails`,`AuthErrorOAuthCallback`,`AuthErrorDetailsExpanded`]}))();export{g as AuthErrorAdditionalAccessNeeded,y as AuthErrorDetailsExpanded,v as AuthErrorOAuthCallback,h as AuthErrorSignInFailed,_ as AuthErrorWithTechnicalDetails,b as __namedExportsOrder,m as default};