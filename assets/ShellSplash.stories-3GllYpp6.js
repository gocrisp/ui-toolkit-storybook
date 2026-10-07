import{n as e,x as t}from"./iframe-HfvZlux0.js";import{i as n,n as r,r as i,t as a}from"./LoadingHalo-D6ih_tl2.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";function s(){return d}function c(){d||(d=!0,!(typeof window>`u`)&&window.dispatchEvent(new CustomEvent(l)))}var l,u,d;function f(){return(f=o((()=>{l=`ui-toolkit:app-ready`,u=1e4,d=!1})))()}function p(){return typeof window.matchMedia==`function`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function m(){let[e,t]=(0,h.useState)(()=>s()?`leaving`:`visible`);return(0,h.useEffect)(()=>{if(e!==`visible`)return;let n=()=>{t(e=>e===`visible`?`leaving`:e)};if(s()){n();return}let r=window.setTimeout(n,u);return window.addEventListener(l,n),()=>{window.clearTimeout(r),window.removeEventListener(l,n)}},[e]),(0,h.useEffect)(()=>{if(e!==`leaving`)return;if(p()){t(`gone`);return}let n=window.setTimeout(()=>t(`gone`),_);return()=>window.clearTimeout(n)},[e]),e===`gone`?null:(0,g.jsx)(`div`,{className:n.splash,"data-leaving":e===`leaving`?``:void 0,role:`status`,"aria-live":`polite`,"aria-busy":e===`visible`,onTransitionEnd:e=>{e.target===e.currentTarget&&e.propertyName===`opacity`&&t(`gone`)},children:(0,g.jsx)(a,{embedded:!0})})}var h,g,_;function v(){return(v=o((()=>{h=t(),f(),r(),i(),g=e(),_=400})))()}var y,b,x,S,C;function w(){return(w=o((()=>{f(),v(),y=e(),b={minHeight:`100vh`,display:`grid`,placeItems:`center`,background:`#ffffff`},x={title:`Federation/ShellSplash`,component:m,parameters:{layout:`fullscreen`}},S={render:()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`div`,{style:b,children:(0,y.jsx)(`p`,{children:`Application content renders underneath the overlay.`})}),(0,y.jsx)(m,{}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>c(),style:{position:`fixed`,zIndex:2147483647,right:16,bottom:16},children:`Signal app ready`})]})},C=[`CoveringTheApp`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div style={underlayStyle}>
        <p>Application content renders underneath the overlay.</p>
      </div>
      <ShellSplash />
      <button type="button" onClick={() => signalAppReady()} style={{
      position: 'fixed',
      zIndex: 2147483647,
      right: 16,
      bottom: 16
    }}>
        Signal app ready
      </button>
    </>
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as CoveringTheApp,C as __namedExportsOrder,x as default};