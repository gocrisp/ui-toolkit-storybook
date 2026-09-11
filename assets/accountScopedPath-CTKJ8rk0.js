import{n as e,x as t}from"./iframe-BYtyZ0Xk.js";import{n}from"./rolldown-runtime-DkW27tQK.js";function r({navigate:e,apps:t,activeApp:n,appModuleSortOrder:r,getAccounts:i,getAccountsSync:a,getAuthorizedDesks:o,getAuthorizedDesksSync:s,beforeAccountSwitch:c,isInternalUser:l,children:u}){return(0,p.jsx)(m.Provider,{value:{navigate:e,apps:t,activeApp:n,appModuleSortOrder:r,getAccounts:i,getAccountsSync:a,getAuthorizedDesks:o,getAuthorizedDesksSync:s,beforeAccountSwitch:c,isInternalUser:l},children:u})}function i(){return(0,f.useContext)(m).navigate}function a(){return(0,f.useContext)(m).apps}function o(){return(0,f.useContext)(m).activeApp}function s(){return(0,f.useContext)(m).appModuleSortOrder}function c(){return(0,f.useContext)(m).getAuthorizedDesks}function l(){return(0,f.useContext)(m).getAuthorizedDesksSync}function u(){return(0,f.useContext)(m).beforeAccountSwitch}function d(){return(0,f.useContext)(m).isInternalUser}var f,p,m;function h(){return(h=n((()=>{f=t(),p=e(),m=(0,f.createContext)({navigate:()=>{},apps:[]}),r.__docgenInfo={description:``,methods:[],displayName:`FederatedContextProvider`,props:{navigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(to: string) => void`,signature:{arguments:[{type:{name:`string`},name:`to`}],return:{name:`void`}}},description:``},apps:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  /** Human-readable display name. Used by surfaces like DockNav as the group
   * label for this app. Falls back to \`id\` when omitted. */
  name?: string;
  url: string;
  entry: string;
  isEnabled: boolean;
  /**
   * URL prefixes this app owns for Shell routing. When non-empty, the Shell
   * matches these instead of \`modules[].path\`. Omitted or empty falls back to
   * module paths so remotes that have not published \`entryPaths\` stay routable.
   */
  entryPaths?: string[];
  /**
   * When false, hosts that probe \`GET /api/v1/authorized-settings-items\`
   * should skip this app. Omitted or true keeps today's probe behavior;
   * a 404 from that endpoint remains silent unsupported.
   */
  hasSettings?: boolean;
  modules: AppModule[];
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!1},description:"Human-readable display name. Used by surfaces like DockNav as the group\nlabel for this app. Falls back to `id` when omitted."},{key:`url`,value:{name:`string`,required:!0}},{key:`entry`,value:{name:`string`,required:!0}},{key:`isEnabled`,value:{name:`boolean`,required:!0}},{key:`entryPaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1},description:"URL prefixes this app owns for Shell routing. When non-empty, the Shell\nmatches these instead of `modules[].path`. Omitted or empty falls back to\nmodule paths so remotes that have not published `entryPaths` stay routable."},{key:`hasSettings`,value:{name:`boolean`,required:!1},description:`When false, hosts that probe \`GET /api/v1/authorized-settings-items\`
should skip this app. Omitted or true keeps today's probe behavior;
a 404 from that endpoint remains silent unsupported.`},{key:`modules`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  name: string;
  id: string;
  path: string;
  icon: string;
  /** When false, omit this module from DockNav while keeping it routable. */
  isNavItem?: boolean;
  /**
   * When true, include this module in the authenticated user menu.
   * Authorized-nav remotes should send \`category: "userMenu"\` instead;
   * DockNav2 / HaloNav map that onto this flag.
   */
  isUserMenuItem?: boolean;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`id`,value:{name:`string`,required:!0}},{key:`path`,value:{name:`string`,required:!0}},{key:`icon`,value:{name:`string`,required:!0}},{key:`isNavItem`,value:{name:`boolean`,required:!1},description:`When false, omit this module from DockNav while keeping it routable.`},{key:`isUserMenuItem`,value:{name:`boolean`,required:!1},description:`When true, include this module in the authenticated user menu.
Authorized-nav remotes should send \`category: "userMenu"\` instead;
DockNav2 / HaloNav map that onto this flag.`}]}}],raw:`AppModule[]`,required:!0}}]}}],raw:`App[]`},description:``},activeApp:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  id: string;
  /** Human-readable display name. Used by surfaces like DockNav as the group
   * label for this app. Falls back to \`id\` when omitted. */
  name?: string;
  url: string;
  entry: string;
  isEnabled: boolean;
  /**
   * URL prefixes this app owns for Shell routing. When non-empty, the Shell
   * matches these instead of \`modules[].path\`. Omitted or empty falls back to
   * module paths so remotes that have not published \`entryPaths\` stay routable.
   */
  entryPaths?: string[];
  /**
   * When false, hosts that probe \`GET /api/v1/authorized-settings-items\`
   * should skip this app. Omitted or true keeps today's probe behavior;
   * a 404 from that endpoint remains silent unsupported.
   */
  hasSettings?: boolean;
  modules: AppModule[];
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!1},description:"Human-readable display name. Used by surfaces like DockNav as the group\nlabel for this app. Falls back to `id` when omitted."},{key:`url`,value:{name:`string`,required:!0}},{key:`entry`,value:{name:`string`,required:!0}},{key:`isEnabled`,value:{name:`boolean`,required:!0}},{key:`entryPaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1},description:"URL prefixes this app owns for Shell routing. When non-empty, the Shell\nmatches these instead of `modules[].path`. Omitted or empty falls back to\nmodule paths so remotes that have not published `entryPaths` stay routable."},{key:`hasSettings`,value:{name:`boolean`,required:!1},description:`When false, hosts that probe \`GET /api/v1/authorized-settings-items\`
should skip this app. Omitted or true keeps today's probe behavior;
a 404 from that endpoint remains silent unsupported.`},{key:`modules`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  name: string;
  id: string;
  path: string;
  icon: string;
  /** When false, omit this module from DockNav while keeping it routable. */
  isNavItem?: boolean;
  /**
   * When true, include this module in the authenticated user menu.
   * Authorized-nav remotes should send \`category: "userMenu"\` instead;
   * DockNav2 / HaloNav map that onto this flag.
   */
  isUserMenuItem?: boolean;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`id`,value:{name:`string`,required:!0}},{key:`path`,value:{name:`string`,required:!0}},{key:`icon`,value:{name:`string`,required:!0}},{key:`isNavItem`,value:{name:`boolean`,required:!1},description:`When false, omit this module from DockNav while keeping it routable.`},{key:`isUserMenuItem`,value:{name:`boolean`,required:!1},description:`When true, include this module in the authenticated user menu.
Authorized-nav remotes should send \`category: "userMenu"\` instead;
DockNav2 / HaloNav map that onto this flag.`}]}}],raw:`AppModule[]`,required:!0}}]}},description:``},appModuleSortOrder:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  name: string;
  isRoot: boolean;
  items?: AppModuleGroupItem[];
  itemSrc?: { kind: 'app-items'; appId: string };
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`isRoot`,value:{name:`boolean`,required:!0}},{key:`items`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  appId: string;
  moduleId: string;
  nameOverride?: string;
}`,signature:{properties:[{key:`appId`,value:{name:`string`,required:!0}},{key:`moduleId`,value:{name:`string`,required:!0}},{key:`nameOverride`,value:{name:`string`,required:!1}}]}}],raw:`AppModuleGroupItem[]`,required:!1}},{key:`itemSrc`,value:{name:`signature`,type:`object`,raw:`{ kind: 'app-items'; appId: string }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`'app-items'`,required:!0}},{key:`appId`,value:{name:`string`,required:!0}}]},required:!1}}]}}],raw:`AppModuleGroup[]`},description:``},getAccounts:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => Promise<readonly Account[]>`,signature:{arguments:[],return:{name:`Promise`,elements:[{name:`unknown`}],raw:`Promise<readonly Account[]>`}}},description:``},getAccountsSync:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => readonly Account[]`,signature:{arguments:[],return:{name:`unknown`}}},description:``},getAuthorizedDesks:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(accountId: string | undefined) => Promise<readonly DeskGroup[]>`,signature:{arguments:[{type:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},name:`accountId`}],return:{name:`Promise`,elements:[{name:`unknown`}],raw:`Promise<readonly DeskGroup[]>`}}},description:``},getAuthorizedDesksSync:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(accountId: string | undefined) => readonly DeskGroup[]`,signature:{arguments:[{type:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},name:`accountId`}],return:{name:`unknown`}}},description:``},beforeAccountSwitch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  nextAccountId: string,
  currentPath: string,
  getNextPathDefault: () => string,
) => string | undefined`,signature:{arguments:[{type:{name:`string`},name:`nextAccountId`},{type:{name:`string`},name:`currentPath`},{type:{name:`signature`,type:`function`,raw:`() => string`,signature:{arguments:[],return:{name:`string`}}},name:`getNextPathDefault`}],return:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]}}},description:``},isInternalUser:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(user: { email: string }) => boolean`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ email: string }`,signature:{properties:[{key:`email`,value:{name:`string`,required:!0}}]}},name:`user`}],return:{name:`boolean`}}},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})))()}function g(){window.dispatchEvent(new Event(x))}function _(e){return window.addEventListener(`popstate`,e),window.addEventListener(x,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(x,e)}}function v(){return window.location.pathname}function y(){return(0,b.useSyncExternalStore)(_,v)}var b,x;function S(){return(S=n((()=>{b=t(),x=`ui-toolkit:navigate`})))()}function C(e){return e.startsWith(`/`)?e:`/${e}`}function w(e){return e===`/a/:accountId`||e.startsWith(j)}function T(e){return e===`/:accountId`||e.startsWith(A)}function E(e){return w(e)||T(e)}function D(e,t){let n=C(e).split(`/`);return n[1]===`a`&&n.length>=3&&n[2]!==``?n[2]=t:n[1]=t,n.join(`/`)||`/${t}`}var O,k,A,j;function M(){return(M=n((()=>{O=`/:accountId`,k=`/a/:accountId`,A=`${O}/`,j=`${k}/`})))()}export{l as _,D as a,y as c,o as d,s as f,c as g,u as h,w as i,r as l,a as m,E as n,S as o,i as p,T as r,g as s,M as t,h as u,d as v};