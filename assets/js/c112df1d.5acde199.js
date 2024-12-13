"use strict";(self.webpackChunklineage_ai_user_doc=self.webpackChunklineage_ai_user_doc||[]).push([[8327],{2893:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"deploy/intro","title":"Deployment Overview","description":"This document provides an overview of the deployment process for Demo Labs Lineage AI. The deployment involves setting up three containers that host different components of the application.","source":"@site/docs/deploy/intro.md","sourceDirName":"deploy","slug":"/deploy/intro","permalink":"/lineage-ai-user-doc/docs/deploy/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deploy/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"deploySidebar"}');var t=r(4848),i=r(8453);const o={sidebar_position:1},l="Deployment Overview",c={},d=[{value:"Overview",id:"overview",level:2},{value:"Minimum hardware requirements",id:"minimum-hardware-requirements",level:2},{value:"Deployment Process Overview",id:"deployment-process-overview",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deployment-overview",children:"Deployment Overview"})}),"\n",(0,t.jsxs)(n.p,{children:["This document provides an overview of the deployment process for ",(0,t.jsx)(n.strong,{children:"Demo Labs Lineage AI"}),". The deployment involves setting up three containers that host different components of the application."]}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Our platform consists of the following containers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"lineage-ui"})}),": The frontend application."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"lineage-llm"})}),": The backend API."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"lineage-llm-service"})}),": The Large Language Model (LLM) instance."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"minimum-hardware-requirements",children:"Minimum hardware requirements"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Service Name"}),(0,t.jsx)(n.th,{children:"Machine Type/Service Type"}),(0,t.jsx)(n.th,{children:"CPU"}),(0,t.jsx)(n.th,{children:"RAM (GB)"}),(0,t.jsx)(n.th,{children:"GPU"}),(0,t.jsx)(n.th,{children:"GPU Memory (GB)"}),(0,t.jsx)(n.th,{children:"STORAGE (GB)"}),(0,t.jsx)(n.th,{children:"Amount"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Database Service"}),(0,t.jsx)(n.td,{children:"Standard VM"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"NA"}),(0,t.jsx)(n.td,{children:"NA"}),(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Frontend/Backend Host"}),(0,t.jsx)(n.td,{children:"Standard VM"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"NA"}),(0,t.jsx)(n.td,{children:"NA"}),(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LLM Inference Host"}),(0,t.jsx)(n.td,{children:"GPU Accelerated VM"}),(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"100+"}),(0,t.jsx)(n.td,{children:"8 x A100-40GB or similar"}),(0,t.jsx)(n.td,{children:"192"}),(0,t.jsx)(n.td,{children:"200"}),(0,t.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"deployment-process-overview",children:"Deployment Process Overview"}),"\n",(0,t.jsx)(n.p,{children:"To deploy the application on your cloud infrastructure, follow these high-level steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Obtain Docker Images"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Docker images for each component are stored in our private docker image repository."}),"\n",(0,t.jsx)(n.li,{children:"Contact our support team to grant you access to our image repository"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Please following cloud vendor specific steps to finsh deploy process"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Configure Access Permissions"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Set up Workload Identity Pools to authenticate your cloud services with our Artifact Registry."}),"\n",(0,t.jsx)(n.li,{children:"Ensure that your services have authorization to read and pull the Docker images."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"We only offer access permission to our images to customers with contract relationship. Please contact us to grant your environment with image access."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Deploy Containers"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use your preferred on-premise server instance solution (e.g., AWS EC2, Azure Virtual Machines, GCP Compute Instances) to deploy the containers."}),"\n",(0,t.jsxs)(n.li,{children:["Deploy the three containers (",(0,t.jsx)(n.code,{children:"lineage-ui"}),", ",(0,t.jsx)(n.code,{children:"lineage-llm"}),", ",(0,t.jsx)(n.code,{children:"lineage-llm-service"}),") within your cloud environment."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Set Up Networking"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configure networking to allow communication between the containers."}),"\n",(0,t.jsx)(n.li,{children:"Expose the necessary ports and endpoints for internal communication and external access."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsx)(n.p,{children:"For detailed instructions and assistance with the deployment process, please refer to cloud vendor specific deployment documentation. Or you can contact our support team."}),"\n",(0,t.jsx)(n.hr,{})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var s=r(6540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);