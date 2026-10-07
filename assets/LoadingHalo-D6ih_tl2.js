import{n as e}from"./iframe-HfvZlux0.js";import{n as t}from"./rolldown-runtime-DkW27tQK.js";function n(){if(typeof document>`u`||document.getElementById(`crisp-loading-halo-styles`))return;let e=document.createElement(`style`);e.id=r,e.textContent=a,document.head.appendChild(e)}var r,i,a;function o(){return(o=t((()=>{r=`crisp-loading-halo-styles`,i={root:`crisp-loading-halo`,embedded:`crisp-loading-halo-embedded`,content:`crisp-loading-halo-content`,logo:`crisp-loading-halo-logo`,c:`crisp-loading-halo-c`,middle:`crisp-loading-halo-middle`,letter:`crisp-loading-halo-letter`,letterR:`crisp-loading-halo-letter-r`,letterI:`crisp-loading-halo-letter-i`,letterS:`crisp-loading-halo-letter-s`,letterP:`crisp-loading-halo-letter-p`,dot:`crisp-loading-halo-dot`,caption:`crisp-loading-halo-caption`,srOnly:`crisp-loading-halo-sr`,splash:`crisp-shell-splash`},a=`
@property --reveal {
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}

@property --dot-transition-gap {
  syntax: '<length>';
  inherits: true;
  initial-value: 0px;
}

.crisp-loading-halo {
  display: grid;
  min-height: calc(100vh - var(--crisp-chrome-inset-top, 0px));
  place-items: center;
  padding: 2rem;
  background-color: var(--color-background, var(--salt-75, #f1f5f5));
}

.crisp-loading-halo-embedded {
  min-height: 0;
  padding: 0;
  background: none;
}

.crisp-loading-halo-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-align: center;
}

.crisp-loading-halo-logo {
  display: flex;
  align-items: center;
  width: fit-content;
  max-width: min(220px, 55vw);
  color: var(--mint-900, #004449);
  --reveal: 0;
  --dot-transition-gap: 0px;
  animation: crispLoadingHaloReveal 4s ease-in-out infinite;
}

.crisp-loading-halo-c,
.crisp-loading-halo-dot,
.crisp-loading-halo-letter {
  display: block;
  height: auto;
  flex-shrink: 0;
}

.crisp-loading-halo-c {
  width: var(--c-width);
}

.crisp-loading-halo-middle {
  display: flex;
  width: calc(var(--reveal) * var(--middle-width));
  overflow: hidden;
  flex-shrink: 0;
}

.crisp-loading-halo-letter {
  transform: scale(var(--letter-scale));
  transform-origin: center;
  opacity: var(--letter-scale);
  --letter-scale: clamp(0, (var(--reveal) - var(--letter-start)) / 0.32, 1);
}

.crisp-loading-halo-letter-r {
  width: calc(90 / 389 * var(--middle-width));
  --letter-start: 0;
}

.crisp-loading-halo-letter-i {
  width: calc(51 / 389 * var(--middle-width));
  --letter-start: 0.23;
}

.crisp-loading-halo-letter-s {
  width: calc(116 / 389 * var(--middle-width));
  --letter-start: 0.36;
}

.crisp-loading-halo-letter-p {
  width: calc(132 / 389 * var(--middle-width));
  --letter-start: 0.66;
}

.crisp-loading-halo-dot {
  width: var(--dot-width);
  margin-left: calc((1 - var(--reveal)) * var(--collapsed-dot-offset) + var(--dot-transition-gap));
}

.crisp-loading-halo-caption {
  margin: 0;
  color: var(--salt-300, #b0c5c9);
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.4;
}

.crisp-loading-halo-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.crisp-shell-splash {
  position: fixed;
  inset: 0;
  z-index: 2147483646;
  display: grid;
  place-items: center;
  padding: 2rem;
  background-color: var(--color-background, #f1f5f5);
  pointer-events: auto;
  opacity: 1;
  transition: opacity 200ms ease;
}

.crisp-shell-splash[data-leaving] {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .crisp-shell-splash {
    transition: none;
  }
}

/*
 * Cycle (4s):
 *   0.0–0.88s  C + dot hold
 *   0.88–1.52s reveal "risp"
 *   1.52–2.48s full "Crisp." hold
 *   2.48–3.12s hide "risp"
 *   3.12–4.0s  C + dot hold
 */
@keyframes crispLoadingHaloReveal {
  0%,
  22%,
  100% {
    --reveal: 0;
    --dot-transition-gap: 0px;
  }

  30% {
    --dot-transition-gap: 0.25rem;
  }

  38%,
  62% {
    --reveal: 1;
    --dot-transition-gap: 0px;
  }

  70% {
    --dot-transition-gap: 0.25rem;
  }

  78% {
    --reveal: 0;
    --dot-transition-gap: 0px;
  }
}
`})))()}function s(){let e=`min(220px, 55vw)`,t=`calc(${u} / ${m} * ${e})`,n=`calc(${d} / ${m} * ${e})`,r=`calc(${p} / ${m} * ${e})`,a=`calc(${h} / ${m} * ${e})`;return(0,c.jsxs)(`div`,{className:i.logo,role:`img`,"aria-label":`Crisp`,style:{"--logo-width":e,"--c-width":t,"--middle-width":n,"--dot-width":r,"--collapsed-dot-offset":a},children:[(0,c.jsx)(`svg`,{className:i.c,viewBox:`0 0 ${u} ${l}`,fill:`currentColor`,"aria-hidden":!0,children:(0,c.jsx)(`path`,{d:`M113.7394714,23.3019543c-6.4714813,5.7313557-12.863884,11.3926678-19.1181107,16.9316158c-2.8058167-2.4992981-5.4066391-5.1227303-8.3111115-7.350235c-12.745491-9.7748661-33.0448303-10.0222797-45.9814873,2.0214653c-8.546484,7.9565811-12.0140114,17.9517899-12.0305786,29.3249893c-0.0120678,8.2865753,2.1212425,16.0559616,7.0295448,22.8000412c7.2009888,9.8942719,17.0482521,14.8900528,29.3214722,14.8271332c11.2373657-0.0576324,20.4958191-4.56884,28.0083923-12.8270416c0.4817886-0.5295868,0.9661484-1.0569229,1.4569016-1.5781555c0.0660553-0.0701523,0.176918-0.0981293,0.3841553-0.2073975c6.3832092,5.6532593,12.8001099,11.3363342,19.2128906,17.0157623c-15.3889618,18.6338348-40.3892136,27.817627-67.3899155,20.4846344C19.2687435,117.3975754,2.728415,93.460968,0.9319057,68.6680145c-2.1614733-29.8297157,15.7818966-56.2280502,42.385231-64.9123154C68.8289642-4.5722733,96.1702652,2.3156321,113.7394714,23.3019543z`})}),(0,c.jsx)(`div`,{className:i.middle,"aria-hidden":!0,children:g.map(e=>(0,c.jsx)(`svg`,{className:`${i.letter} ${e.className}`,viewBox:`${e.x} 0 ${e.width} ${l}`,fill:`currentColor`,children:e.paths.map(e=>(0,c.jsx)(`path`,{d:e},e))},e.className))}),(0,c.jsx)(`svg`,{className:i.dot,viewBox:`${f} 0 ${p} ${l}`,fill:`currentColor`,"aria-hidden":!0,children:(0,c.jsx)(`path`,{d:`M526.9660034,98.447258c0,8.8233566,0,17.628334,0,26.4434357h26.9540405V98.447258C544.9321899,98.447258,535.9484863,98.447258,526.9660034,98.447258z`})})]})}var c,l,u,d,f,p,m,h,g;function _(){return(_=t((()=>{o(),c=e(),l=171,u=137,d=389,f=526,p=28,m=554,h=-4,g=[{className:i.letterR,x:137,width:90,paths:[`M137.2373962,125.1812134c8.9974976,0,17.8821869,0,26.953476,0c0-32.0814896,0-64.0834122,0-96.2450714h-26.953476C137.2373962,61.0419312,137.2373962,93.1140442,137.2373962,125.1812134z`,`M164.1908722,2.4927115v26.4434338c14.088089,0,27.9895782,0,41.9372864,0c0-8.8953476,0-17.629982,0-26.4434338C192.0988617,2.4927115,178.1367645,2.4927115,164.1908722,2.4927115z`]},{className:i.letterI,x:227,width:51,paths:[`M227.8493958,2.4391475c9.0160675,0,17.9046631,0,26.8725433,0c0,40.9094238,0,81.7422028,0,122.6842957c-8.9582062,0-17.8747864,0-26.8725433,0C227.8493958,84.2466125,227.8493958,43.4138451,227.8493958,2.4391475z`]},{className:i.letterS,x:278,width:116,paths:[`M278.8706665,102.0067291c6.904541-4.6461029,13.8510742-9.3204498,20.9203491-14.0774002c0.6476135,1.0309677,1.2186584,1.987587,1.8353577,2.9138412c3.2931519,4.9462509,7.2446289,9.2533264,12.9417114,11.3449707c7.6051636,2.7921448,15.2431335,2.8831253,22.5844421-0.9924545c6.0148621-3.1753616,7.2364807-11.4526978,2.5734558-16.6052017c-2.6148987-2.8893585-6.0021362-4.6099091-9.4929199-6.0661011c-6.3717957-2.6580582-12.8683472-5.0184937-19.2280579-7.7039566c-7.0093994-2.9598007-13.2698059-7.0532494-18.1422729-13.0317764c-8.7564697-10.7442589-10.7794189-26.9661694-3.878479-38.8683281c3.9039917-6.7332487,9.5166931-11.6191692,16.662262-14.6266279c13.2662964-5.583571,26.5028687-5.2225871,39.5789795,0.6795869c6.9302368,3.1281056,12.9611816,9.1511803,16.9490662,16.6325779c-5.9873352,4.5225544-11.9841309,9.0522156-17.8787231,13.5047169c-1.8475647-2.1876907-3.5121765-4.4571514-5.4760132-6.4286041c-6.058197-6.0816727-15.6865845-7.3249054-23.1205444-3.4154167c-6.6365967,3.4901485-6.1958008,11.3284988-2.9998779,15.5488777c2.2248535,2.9380417,5.3023376,4.6708145,8.5498352,6.0461884c6.3572083,2.6923828,12.8191833,5.1362114,19.211853,7.7464294c5.1366577,2.0973663,9.9359131,4.8045311,14.3717651,8.1591492c7.8547668,5.9401588,12.4025269,13.7464027,13.3143005,23.577282c0.9573364,10.3228989-1.546814,19.6314011-8.6004028,27.4170074c-4.8227539,5.3232269-10.8919678,8.8276978-17.7351379,10.8302307c-14.8800659,4.3544006-29.4573669,3.4573517-43.4801025-3.3099213c-8.5144653-4.1090546-14.6867371-10.7825317-19.4140015-18.8661041C278.8712463,102.3365936,278.892395,102.2180481,278.8706665,102.0067291z`]},{className:i.letterP,x:394,width:132,paths:[`M394.255188,2.4044533c8.982666,0,17.8297119,0,26.8771973,0c0,3.3002076,0,6.5820322,0,10.1711273c1.8174133-1.3406134,3.3253479-2.524929,4.9044495-3.6052656c6.6362305-4.5401311,14.0376892-7.0714154,21.9638672-8.0537815c8.675415-1.0752275,17.2648621-0.5266271,25.6601257,2.0116034c11.247467,3.4005876,20.7746277,9.490387,28.3904114,18.4855232c8.3348389,9.8444061,13.1528625,21.2078075,14.6477966,34.0020676c1.8126831,15.5142517-1.0360107,30.0665894-9.2347412,43.4192429c-5.5447693,9.0303345-13.0560913,16.0397873-22.4024353,21.1236572c-10.5702515,5.7496033-21.8881836,7.9119644-33.7647705,7.0336914c-10.5909424-0.7832184-20.2868652-4.1830597-28.5516968-11.1046753c-0.4155884-0.3480225-0.8509216-0.6725082-1.5023499-1.185318c0,18.6938095,0,37.088768,0,55.6100235c-9.0501709,0-17.9693604,0-26.987854,0C394.255188,114.3879166,394.255188,58.4749031,394.255188,2.4044533z M421.1890869,63.5996513c0,6.9078255-0.010498,13.8157005,0.0177002,20.7234001c0.002533,0.6316605,0.0869446,1.3697891,0.414856,1.8762589c2.4481506,3.7816696,5.5986023,6.874855,9.3255615,9.4151154c6.5579529,4.4698334,13.8578186,6.4397736,21.7120361,6.49263c14.0282288,0.0943985,24.8657227-5.7366333,31.8183594-17.9747467c6.4196777-11.3001099,6.9358215-23.2863731,2.5207214-35.3874435c-3.309082-9.0696793-9.4143677-15.8225212-18.2086182-20.0173244c-5.9346313-2.8307743-12.215271-3.537405-18.6974182-3.1151695c-11.6537781,0.7591362-21.0678101,5.6900444-28.0823975,15.060976c-0.4750366,0.6346741-0.7789001,1.5620766-0.7858887,2.3566513C421.163269,49.886116,421.1890869,56.743,421.1890869,63.5996513z`]}]})))()}function v({embedded:e=!1}){return n(),(0,y.jsx)(`div`,{className:e?`${i.root} ${i.embedded}`:i.root,role:e?void 0:`status`,"aria-live":e?void 0:`polite`,"aria-busy":!e||void 0,children:(0,y.jsxs)(`div`,{className:i.content,children:[(0,y.jsx)(s,{}),(0,y.jsx)(`p`,{className:i.caption,"aria-hidden":`true`,children:`Loading applications…`}),(0,y.jsx)(`span`,{className:i.srOnly,children:`Loading applications`})]})})}var y;function b(){return(b=t((()=>{_(),o(),y=e()})))()}export{i,b as n,o as r,v as t};