import{b as e,n as t}from"./iframe-6Kmxc6tR.js";import{n,t as r}from"./AuthError-B6NN2wfx.js";import{n as i}from"./rolldown-runtime-C0FnF6B9.js";function a(e,t){let n=Error(e);return n.error=e,t&&(n.error_description=t),n}function o({search:e,children:t}){return(0,s.useEffect)(()=>{let{pathname:t,hash:n}=window.location;return window.history.replaceState({},``,`${t}${e}${n}`),()=>{window.history.replaceState({},``,`${t}${n}`)}},[e]),t}var s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=i((()=>{s=e(),n(),c=t(),{userEvent:l,within:u}=__STORYBOOK_MODULE_TEST__,d={minHeight:`100vh`,display:`grid`,placeItems:`stretch`},f=()=>{console.info(`[AuthError story] retry triggered`)},p={title:`Common/App State`,component:r,parameters:{layout:`fullscreen`},decorators:[e=>(0,c.jsx)(`div`,{style:d,children:(0,c.jsx)(e,{})})],args:{onRetry:f}},m={args:{error:a(`login_required`)}},h={args:{error:a(`access_denied`,`User is not part of any organization. Contact your administrator to request access.`)}},g={args:{error:a(`invalid_request`,`The redirect URI is not registered with the Auth0 application configuration.`)}},_={args:{error:a(`unauthorized_client`,`Callback URL mismatch. https://dock.stg.apps.gocrisp.com is not in the list of allowed callback URLs.`)}},v={decorators:[e=>(0,c.jsx)(o,{search:`?error=access_denied&error_description=User%20denied%20consent`,children:(0,c.jsx)(e,{})})],args:{error:Error(`OAuth callback error`)}},y={args:{error:a(`invalid_request`,`The redirect URI is not registered with the Auth0 application configuration.`)},play:async({canvasElement:e})=>{let t=u(e);await l.click(t.getByRole(`button`,{name:/details/i}))}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    error: auth0Error('login_required')
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    error: auth0Error('access_denied', 'User is not part of any organization. Contact your administrator to request access.')
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    error: auth0Error('invalid_request', 'The redirect URI is not registered with the Auth0 application configuration.')
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    error: auth0Error('unauthorized_client', 'Callback URL mismatch. https://dock.stg.apps.gocrisp.com is not in the list of allowed callback URLs.')
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
}`,...y.parameters?.docs?.source}}},b=[`AuthErrorSignInFailed`,`AuthErrorAdditionalAccessNeeded`,`AuthErrorWithTechnicalDetails`,`AuthErrorCallbackUrlMismatch`,`AuthErrorOAuthCallback`,`AuthErrorDetailsExpanded`]})))()}x();export{h as AuthErrorAdditionalAccessNeeded,_ as AuthErrorCallbackUrlMismatch,y as AuthErrorDetailsExpanded,v as AuthErrorOAuthCallback,m as AuthErrorSignInFailed,g as AuthErrorWithTechnicalDetails,b as __namedExportsOrder,p as default};