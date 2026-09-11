import{n as e,x as t}from"./iframe-BYtyZ0Xk.js";import{a as n,i as r,n as i,r as a,t as o}from"./NotFoundIllustration-DGsZL2wL.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";function c(e,t){return e.length!==t.length||e.some((e,n)=>!Object.is(e,t[n]))}function l(e){return e instanceof Error?e:Error(String(e))}function u({error:e,reset:t}){return(0,f.jsx)(a,{role:`alert`,title:`Something went wrong`,description:(0,f.jsx)(r,{description:`This part of the page failed to load. Try again, or email support@gocrisp.com if the problem persists.`}),illustration:(0,f.jsx)(o,{}),details:{message:e.message||`Unknown error`},action:{label:`Try again`,onClick:t}})}var d,f,p;function m(){return(m=s((()=>{d=t(),n(),i(),f=e(),p=class extends d.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:l(e)}}componentDidCatch(e,t){let n=l(e);console.error(`[${this.props.label??`ErrorBoundary`}] Uncaught error:`,n,t),this.props.onError?.(n,t)}componentDidUpdate(e){this.state.error&&c(e.resetKeys??[],this.props.resetKeys??[])&&this.reset()}reset=()=>{this.setState({error:null})};render(){let{error:e}=this.state;if(!e)return this.props.children;let t=this.props.fallback??u;return(0,f.jsx)(f.Fragment,{children:t({error:e,reset:this.reset})})}},p.__docgenInfo={description:`Catches render-time errors in a subtree and shows an actionable page instead
of unmounting the whole React root.

The toolkit wraps every federated remote in one of these. Without it a single
throw - a bad render in one app, or \`createAuthClient\` failing because no
auth configuration resolved - blanks the entire dock rather than the one
remote that broke.`,methods:[],displayName:`ErrorBoundary`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},fallback:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(props: ErrorBoundaryFallbackProps) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  error: Error;
  /** Re-render the subtree. Use for failures a retry can plausibly clear. */
  reset: () => void;
}`,signature:{properties:[{key:`error`,value:{name:`Error`,required:!0}},{key:`reset`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0},description:`Re-render the subtree. Use for failures a retry can plausibly clear.`}]}},name:`props`}],return:{name:`ReactNode`}}},description:`Replaces the default full-page error state.`},onError:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(error: Error, info: ErrorInfo) => void`,signature:{arguments:[{type:{name:`Error`},name:`error`},{type:{name:`ErrorInfo`},name:`info`}],return:{name:`void`}}},description:`Reported for every caught error, before the fallback renders.`},resetKeys:{required:!1,tsType:{name:`unknown`},description:`Changing any entry re-renders the subtree. Pass the values that scope this
boundary - typically a route or app id - so navigating away from a broken
screen is not a dead end.`},label:{required:!1,tsType:{name:`string`},description:"Prefixes the `console.error` this boundary always emits."}}}})))()}function h({message:e}){throw Error(e)}var g,_,v,y,b,x,S,C,w;function T(){return(T=s((()=>{m(),g=e(),{userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y={minHeight:`100vh`,display:`grid`,placeItems:`stretch`},b={title:`Common/App State`,component:p,parameters:{layout:`fullscreen`},decorators:[e=>(0,g.jsx)(`div`,{style:y,children:(0,g.jsx)(e,{})})]},x={args:{label:`Shell:orders`,children:(0,g.jsx)(h,{message:`Cannot read properties of undefined (reading 'accountId')`})}},S={args:{label:`Shell:orders`,children:(0,g.jsx)(h,{message:`No auth configuration found`})},play:async({canvasElement:e})=>{let t=v(e);await _.click(t.getByRole(`button`,{name:/details/i}))}},C={args:{fallback:({error:e,reset:t})=>(0,g.jsxs)(`div`,{style:{padding:`2rem`},children:[(0,g.jsxs)(`p`,{children:[`This module is unavailable: `,e.message]}),(0,g.jsx)(`button`,{type:`button`,onClick:t,children:`Retry`})]}),children:(0,g.jsx)(h,{message:`chunk load failed`})}},w=[`ErrorBoundaryFallback`,`ErrorBoundaryFallbackDetailsExpanded`,`ErrorBoundaryCustomFallback`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Shell:orders',
    children: <ThrowingRemote message="Cannot read properties of undefined (reading 'accountId')" />
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Shell:orders',
    children: <ThrowingRemote message="No auth configuration found" />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /details/i
    }));
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    fallback: ({
      error,
      reset
    }) => <div style={{
      padding: '2rem'
    }}>
        <p>This module is unavailable: {error.message}</p>
        <button type="button" onClick={reset}>
          Retry
        </button>
      </div>,
    children: <ThrowingRemote message="chunk load failed" />
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as ErrorBoundaryCustomFallback,x as ErrorBoundaryFallback,S as ErrorBoundaryFallbackDetailsExpanded,w as __namedExportsOrder,b as default};