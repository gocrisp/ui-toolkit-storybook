import{b as e,n as t}from"./iframe-w9-JtUSR.js";import{n}from"./rolldown-runtime-C0FnF6B9.js";function r({navigate:e,apps:t,activeApp:n,appModuleSortOrder:r,getAccounts:i,getAccountsSync:a,beforeAccountSwitch:o,children:s}){return(0,u.jsx)(d.Provider,{value:{navigate:e,apps:t,activeApp:n,appModuleSortOrder:r,getAccounts:i,getAccountsSync:a,beforeAccountSwitch:o},children:s})}function i(){return(0,l.useContext)(d).navigate}function a(){return(0,l.useContext)(d).apps}function o(){return(0,l.useContext)(d).activeApp}function s(){return(0,l.useContext)(d).appModuleSortOrder}function c(){return(0,l.useContext)(d).beforeAccountSwitch}var l,u,d;function f(){return(f=n((()=>{l=e(),u=t(),d=(0,l.createContext)({navigate:()=>{},apps:[]}),r.__docgenInfo={description:``,methods:[],displayName:`FederatedContextProvider`,props:{navigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(to: string) => void`,signature:{arguments:[{type:{name:`string`},name:`to`}],return:{name:`void`}}},description:``},apps:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  /** Human-readable display name. Used by surfaces like DockNav as the group
   * label for this app. Falls back to \`id\` when omitted. */
  name?: string;
  url: string;
  entry: string;
  isEnabled: boolean;
  modules: AppModule[];
  requires?: AppAccessPolicy;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!1},description:"Human-readable display name. Used by surfaces like DockNav as the group\nlabel for this app. Falls back to `id` when omitted."},{key:`url`,value:{name:`string`,required:!0}},{key:`entry`,value:{name:`string`,required:!0}},{key:`isEnabled`,value:{name:`boolean`,required:!0}},{key:`modules`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  name: string;
  id: string;
  path: string;
  icon: string;
  /** When false, omit this module from DockNav while keeping it routable. */
  isNavItem?: boolean;
  /** When true, include this module in the authenticated user menu. */
  isUserMenuItem?: boolean;
  requires?: AppAccessPolicy;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`id`,value:{name:`string`,required:!0}},{key:`path`,value:{name:`string`,required:!0}},{key:`icon`,value:{name:`string`,required:!0}},{key:`isNavItem`,value:{name:`boolean`,required:!1},description:`When false, omit this module from DockNav while keeping it routable.`},{key:`isUserMenuItem`,value:{name:`boolean`,required:!1},description:`When true, include this module in the authenticated user menu.`},{key:`requires`,value:{name:`signature`,type:`object`,raw:`{
  accountIds: string[];
  featureFlag: string;
}`,signature:{properties:[{key:`accountIds`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`featureFlag`,value:{name:`string`,required:!0}}]},required:!1}}]}}],raw:`AppModule[]`,required:!0}},{key:`requires`,value:{name:`signature`,type:`object`,raw:`{
  accountIds: string[];
  featureFlag: string;
}`,signature:{properties:[{key:`accountIds`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`featureFlag`,value:{name:`string`,required:!0}}]},required:!1}}]}}],raw:`App[]`},description:``},activeApp:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  id: string;
  /** Human-readable display name. Used by surfaces like DockNav as the group
   * label for this app. Falls back to \`id\` when omitted. */
  name?: string;
  url: string;
  entry: string;
  isEnabled: boolean;
  modules: AppModule[];
  requires?: AppAccessPolicy;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!1},description:"Human-readable display name. Used by surfaces like DockNav as the group\nlabel for this app. Falls back to `id` when omitted."},{key:`url`,value:{name:`string`,required:!0}},{key:`entry`,value:{name:`string`,required:!0}},{key:`isEnabled`,value:{name:`boolean`,required:!0}},{key:`modules`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  name: string;
  id: string;
  path: string;
  icon: string;
  /** When false, omit this module from DockNav while keeping it routable. */
  isNavItem?: boolean;
  /** When true, include this module in the authenticated user menu. */
  isUserMenuItem?: boolean;
  requires?: AppAccessPolicy;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`id`,value:{name:`string`,required:!0}},{key:`path`,value:{name:`string`,required:!0}},{key:`icon`,value:{name:`string`,required:!0}},{key:`isNavItem`,value:{name:`boolean`,required:!1},description:`When false, omit this module from DockNav while keeping it routable.`},{key:`isUserMenuItem`,value:{name:`boolean`,required:!1},description:`When true, include this module in the authenticated user menu.`},{key:`requires`,value:{name:`signature`,type:`object`,raw:`{
  accountIds: string[];
  featureFlag: string;
}`,signature:{properties:[{key:`accountIds`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`featureFlag`,value:{name:`string`,required:!0}}]},required:!1}}]}}],raw:`AppModule[]`,required:!0}},{key:`requires`,value:{name:`signature`,type:`object`,raw:`{
  accountIds: string[];
  featureFlag: string;
}`,signature:{properties:[{key:`accountIds`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`featureFlag`,value:{name:`string`,required:!0}}]},required:!1}}]}},description:``},appModuleSortOrder:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  name: string;
  isRoot: boolean;
  items?: AppModuleGroupItem[];
  itemSrc?: { kind: 'app-items'; appId: string };
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`isRoot`,value:{name:`boolean`,required:!0}},{key:`items`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  appId: string;
  moduleId: string;
  nameOverride?: string;
}`,signature:{properties:[{key:`appId`,value:{name:`string`,required:!0}},{key:`moduleId`,value:{name:`string`,required:!0}},{key:`nameOverride`,value:{name:`string`,required:!1}}]}}],raw:`AppModuleGroupItem[]`,required:!1}},{key:`itemSrc`,value:{name:`signature`,type:`object`,raw:`{ kind: 'app-items'; appId: string }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`'app-items'`,required:!0}},{key:`appId`,value:{name:`string`,required:!0}}]},required:!1}}]}}],raw:`AppModuleGroup[]`},description:``},getAccounts:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => Promise<readonly Account[]>`,signature:{arguments:[],return:{name:`Promise`,elements:[{name:`unknown`}],raw:`Promise<readonly Account[]>`}}},description:``},getAccountsSync:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => readonly Account[]`,signature:{arguments:[],return:{name:`unknown`}}},description:``},beforeAccountSwitch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  nextAccountId: string,
  currentPath: string,
  getNextPathDefault: () => string,
) => string | undefined`,signature:{arguments:[{type:{name:`string`},name:`nextAccountId`},{type:{name:`string`},name:`currentPath`},{type:{name:`signature`,type:`function`,raw:`() => string`,signature:{arguments:[],return:{name:`string`}}},name:`getNextPathDefault`}],return:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]}}},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})))()}function p(){window.dispatchEvent(new Event(v))}function m(e){return window.addEventListener(`popstate`,e),window.addEventListener(v,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(v,e)}}function h(){return window.location.pathname}function g(){return(0,_.useSyncExternalStore)(m,h)}var _,v;function y(){return(y=n((()=>{_=e(),v=`ui-toolkit:navigate`})))()}export{f as a,i as c,r as i,a as l,p as n,o,g as r,s,y as t,c as u};