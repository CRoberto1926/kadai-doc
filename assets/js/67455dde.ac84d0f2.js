"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[6909],{10272:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"user-guide/features/users","title":"Users","description":"In KADAI, a User is an entity that represents a user. A user is used for authentication as well as for specifying the owner of a Task. The User entity has attributes such as name, phone number and e-mail.","source":"@site/versioned_docs/version-9.3.0/user-guide/features/users.md","sourceDirName":"user-guide/features","slug":"/user-guide/features/users","permalink":"/kadai-doc/docs/9.3.*/user-guide/features/users","draft":false,"unlisted":false,"tags":[],"version":"9.3.0","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"userSidebar","previous":{"title":"Monitoring","permalink":"/kadai-doc/docs/9.3.*/user-guide/features/monitoring"},"next":{"title":"Queries: Filtering and Sorting","permalink":"/kadai-doc/docs/9.3.*/user-guide/features/queriesFilteringAndSorting"}}');var t=r(74848),i=r(28453);const o={sidebar_position:6},a="Users",u={},d=[{value:"Operations on Users",id:"operations-on-users",level:2},{value:"Configuration",id:"configuration",level:2}];function c(e){const s={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"users",children:"Users"})}),"\n",(0,t.jsx)(s.p,{children:"In KADAI, a User is an entity that represents a user. A user is used for authentication as well as for specifying the owner of a Task. The User entity has attributes such as name, phone number and e-mail."}),"\n",(0,t.jsxs)(s.p,{children:['A user can belong to one or multiple groups and have permissions assigned.\nGroups and permissions are used to determine additional access rights of the user.\nFor example, if "user-1" belongs to the group "group-1", and "group-1"\nhas access to the Workbasket "workbasket-of-group-1",\nthen "user-1" has access to the "workbasket-of-group-1".\nThe same applies to permissions.\nUsers, Groups and permissions are identified via an ',(0,t.jsx)(s.strong,{children:"AccessId"})," in KADAI.\nThe AccessId is used for determining access rights through WorkbasketAccessItems.\nYou can read more about it ",(0,t.jsx)(s.a,{href:"/kadai-doc/docs/9.3.*/user-guide/core-concepts/overview#workbasketaccessitem",children:"here"}),".\nAdditionally,\nUsers and Groups both have ",(0,t.jsx)(s.a,{href:"/kadai-doc/docs/9.3.*/user-guide/core-concepts/securityAndPermissions#security-roles-in-kadai",children:"Roles"})," assigned."]}),"\n",(0,t.jsx)(s.h2,{id:"operations-on-users",children:"Operations on Users"}),"\n",(0,t.jsxs)(s.p,{children:["You can create, get, update and delete a User via UserService in the Java-API. In the REST-API, you can fetch detailed information about Users via the associated API operations.\nA detailed description of the REST operations on AccessIds, Users and Groups can be found in the ",(0,t.jsx)(s.a,{href:"https://kadai-io.azurewebsites.net/kadai/swagger-ui/index.html",children:"REST API documentation"})]}),"\n",(0,t.jsxs)(s.p,{children:["You can set up your Users using LDAP. In this case, you can also use the ",(0,t.jsx)(s.a,{href:"/kadai-doc/docs/9.3.*/user-guide/features/jobs#userinforefreshjob",children:"UserInfoRefreshJob"})," to keep the Users up to date with your .ldif file."]}),"\n",(0,t.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(s.p,{children:["You can read more about the configuration of Users ",(0,t.jsx)(s.a,{href:"/kadai-doc/docs/9.3.*/user-guide/configuration/security#users",children:"here"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>a});var n=r(96540);const t={},i=n.createContext(t);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);