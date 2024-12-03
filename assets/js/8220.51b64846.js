/*! For license information please see 8220.51b64846.js.LICENSE.txt */
"use strict";(self.webpackChunklineage_ai_user_doc=self.webpackChunklineage_ai_user_doc||[]).push([[8220],{4722:(e,r,o)=>{o.d(r,{A:()=>i});var t=o(6540);const n=(...e)=>e.filter(((e,r,o)=>Boolean(e)&&""!==e.trim()&&o.indexOf(e)===r)).join(" ").trim();var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const a=(0,t.forwardRef)((({color:e="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:i="",children:l,iconNode:c,...d},u)=>(0,t.createElement)("svg",{ref:u,...s,width:r,height:r,stroke:e,strokeWidth:a?24*Number(o)/Number(r):o,className:n("lucide",i),...d},[...c.map((([e,r])=>(0,t.createElement)(e,r))),...Array.isArray(l)?l:[l]]))),i=(e,r)=>{const o=(0,t.forwardRef)((({className:o,...s},i)=>{return(0,t.createElement)(a,{ref:i,iconNode:r,className:n(`lucide-${l=e,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,o),...s});var l}));return o.displayName=`${e}`,o}},8309:(e,r,o)=>{o.d(r,{A:()=>t});const t=(0,o(4722).A)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},5731:(e,r,o)=>{o.d(r,{A:()=>t});const t=(0,o(4722).A)("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]])},1071:(e,r,o)=>{o.d(r,{s:()=>s,t:()=>n});var t=o(6540);function n(...e){return r=>e.forEach((e=>function(e,r){"function"==typeof e?e(r):null!=e&&(e.current=r)}(e,r)))}function s(...e){return t.useCallback(n(...e),e)}},3362:(e,r,o)=>{o.d(r,{DX:()=>a});var t=o(6540),n=o(1071),s=o(4848),a=t.forwardRef(((e,r)=>{const{children:o,...n}=e,a=t.Children.toArray(o),l=a.find(c);if(l){const e=l.props.children,o=a.map((r=>r===l?t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null:r));return(0,s.jsx)(i,{...n,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,o):null})}return(0,s.jsx)(i,{...n,ref:r,children:o})}));a.displayName="Slot";var i=t.forwardRef(((e,r)=>{const{children:o,...s}=e;if(t.isValidElement(o)){const e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning;if(o)return e.ref;if(r=Object.getOwnPropertyDescriptor(e,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning,o)return e.props.ref;return e.props.ref||e.ref}(o);return t.cloneElement(o,{...d(s,o.props),ref:r?(0,n.t)(r,e):e})}return t.Children.count(o)>1?t.Children.only(null):null}));i.displayName="SlotClone";var l=({children:e})=>(0,s.jsx)(s.Fragment,{children:e});function c(e){return t.isValidElement(e)&&e.type===l}function d(e,r){const o={...r};for(const t in r){const n=e[t],s=r[t];/^on[A-Z]/.test(t)?n&&s?o[t]=(...e)=>{s(...e),n(...e)}:n&&(o[t]=n):"style"===t?o[t]={...n,...s}:"className"===t&&(o[t]=[n,s].filter(Boolean).join(" "))}return{...e,...o}}},2318:(e,r,o)=>{o.d(r,{UC:()=>se,B8:()=>te,bL:()=>oe,l9:()=>ne});var t=o(6540),n=o.t(t,2);function s(e,r,{checkForDefaultPrevented:o=!0}={}){return function(t){if(e?.(t),!1===o||!t.defaultPrevented)return r?.(t)}}var a=o(4848);function i(...e){const r=e[0];if(1===e.length)return r;const o=()=>{const o=e.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(e){const n=o.reduce(((r,{useScope:o,scopeName:t})=>({...r,...o(e)[`__scope${t}`]})),{});return t.useMemo((()=>({[`__scope${r.scopeName}`]:n})),[n])}};return o.scopeName=r.scopeName,o}function l(...e){const r=e[0];if(1===e.length)return r;const o=()=>{const o=e.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(e){const n=o.reduce(((r,{useScope:o,scopeName:t})=>({...r,...o(e)[`__scope${t}`]})),{});return t.useMemo((()=>({[`__scope${r.scopeName}`]:n})),[n])}};return o.scopeName=r.scopeName,o}var c=o(1071),d=o(3362);function u(...e){const r=e[0];if(1===e.length)return r;const o=()=>{const o=e.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(e){const n=o.reduce(((r,{useScope:o,scopeName:t})=>({...r,...o(e)[`__scope${t}`]})),{});return t.useMemo((()=>({[`__scope${r.scopeName}`]:n})),[n])}};return o.scopeName=r.scopeName,o}var p=Boolean(globalThis?.document)?t.useLayoutEffect:()=>{},f=n["useId".toString()]||(()=>{}),m=0;function b(e){const[r,o]=t.useState(f());return p((()=>{e||o((e=>e??String(m++)))}),[e]),e||(r?`radix-${r}`:"")}o(961);var g=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((e,r)=>{const o=t.forwardRef(((e,o)=>{const{asChild:t,...n}=e,s=t?d.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(s,{...n,ref:o})}));return o.displayName=`Primitive.${r}`,{...e,[r]:o}}),{});function h(e){const r=t.useRef(e);return t.useEffect((()=>{r.current=e})),t.useMemo((()=>(...e)=>r.current?.(...e)),[])}function v({prop:e,defaultProp:r,onChange:o=()=>{}}){const[n,s]=function({defaultProp:e,onChange:r}){const o=t.useState(e),[n]=o,s=t.useRef(n),a=h(r);return t.useEffect((()=>{s.current!==n&&(a(n),s.current=n)}),[n,s,a]),o}({defaultProp:r,onChange:o}),a=void 0!==e,i=a?e:n,l=h(o);return[i,t.useCallback((r=>{if(a){const o="function"==typeof r?r(e):r;o!==e&&l(o)}else s(r)}),[a,e,s,l])]}var y=t.createContext(void 0);function w(e){const r=t.useContext(y);return e||r||"ltr"}var x="rovingFocusGroup.onEntryFocus",N={bubbles:!1,cancelable:!0},k="RovingFocusGroup",[C,j,R]=function(e){const r=e+"CollectionProvider",[o,n]=function(e,r=[]){let o=[];const n=()=>{const r=o.map((e=>t.createContext(e)));return function(o){const n=o?.[e]||r;return t.useMemo((()=>({[`__scope${e}`]:{...o,[e]:n}})),[o,n])}};return n.scopeName=e,[function(r,n){const s=t.createContext(n),i=o.length;function l(r){const{scope:o,children:n,...l}=r,c=o?.[e][i]||s,d=t.useMemo((()=>l),Object.values(l));return(0,a.jsx)(c.Provider,{value:d,children:n})}return o=[...o,n],l.displayName=r+"Provider",[l,function(o,a){const l=a?.[e][i]||s,c=t.useContext(l);if(c)return c;if(void 0!==n)return n;throw new Error(`\`${o}\` must be used within \`${r}\``)}]},l(n,...r)]}(r),[s,i]=o(r,{collectionRef:{current:null},itemMap:new Map}),u=e=>{const{scope:r,children:o}=e,n=t.useRef(null),i=t.useRef(new Map).current;return(0,a.jsx)(s,{scope:r,itemMap:i,collectionRef:n,children:o})};u.displayName=r;const p=e+"CollectionSlot",f=t.forwardRef(((e,r)=>{const{scope:o,children:t}=e,n=i(p,o),s=(0,c.s)(r,n.collectionRef);return(0,a.jsx)(d.DX,{ref:s,children:t})}));f.displayName=p;const m=e+"CollectionItemSlot",b="data-radix-collection-item",g=t.forwardRef(((e,r)=>{const{scope:o,children:n,...s}=e,l=t.useRef(null),u=(0,c.s)(r,l),p=i(m,o);return t.useEffect((()=>(p.itemMap.set(l,{ref:l,...s}),()=>{p.itemMap.delete(l)}))),(0,a.jsx)(d.DX,{[b]:"",ref:u,children:n})}));return g.displayName=m,[{Provider:u,Slot:f,ItemSlot:g},function(r){const o=i(e+"CollectionConsumer",r);return t.useCallback((()=>{const e=o.collectionRef.current;if(!e)return[];const r=Array.from(e.querySelectorAll(`[${b}]`));return Array.from(o.itemMap.values()).sort(((e,o)=>r.indexOf(e.ref.current)-r.indexOf(o.ref.current)))}),[o.collectionRef,o.itemMap])},n]}(k),[M,S]=function(e,r=[]){let o=[];const n=()=>{const r=o.map((e=>t.createContext(e)));return function(o){const n=o?.[e]||r;return t.useMemo((()=>({[`__scope${e}`]:{...o,[e]:n}})),[o,n])}};return n.scopeName=e,[function(r,n){const s=t.createContext(n),i=o.length;function l(r){const{scope:o,children:n,...l}=r,c=o?.[e][i]||s,d=t.useMemo((()=>l),Object.values(l));return(0,a.jsx)(c.Provider,{value:d,children:n})}return o=[...o,n],l.displayName=r+"Provider",[l,function(o,a){const l=a?.[e][i]||s,c=t.useContext(l);if(c)return c;if(void 0!==n)return n;throw new Error(`\`${o}\` must be used within \`${r}\``)}]},u(n,...r)]}(k,[R]),[I,E]=M(k),_=t.forwardRef(((e,r)=>(0,a.jsx)(C.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(C.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(z,{...e,ref:r})})})));_.displayName=k;var z=t.forwardRef(((e,r)=>{const{__scopeRovingFocusGroup:o,orientation:n,loop:i=!1,dir:l,currentTabStopId:d,defaultCurrentTabStopId:u,onCurrentTabStopIdChange:p,onEntryFocus:f,preventScrollOnEntryFocus:m=!1,...b}=e,y=t.useRef(null),k=(0,c.s)(r,y),C=w(l),[R=null,M]=v({prop:d,defaultProp:u,onChange:p}),[S,E]=t.useState(!1),_=h(f),z=j(o),P=t.useRef(!1),[A,T]=t.useState(0);return t.useEffect((()=>{const e=y.current;if(e)return e.addEventListener(x,_),()=>e.removeEventListener(x,_)}),[_]),(0,a.jsx)(I,{scope:o,orientation:n,dir:C,loop:i,currentTabStopId:R,onItemFocus:t.useCallback((e=>M(e)),[M]),onItemShiftTab:t.useCallback((()=>E(!0)),[]),onFocusableItemAdd:t.useCallback((()=>T((e=>e+1))),[]),onFocusableItemRemove:t.useCallback((()=>T((e=>e-1))),[]),children:(0,a.jsx)(g.div,{tabIndex:S||0===A?-1:0,"data-orientation":n,...b,ref:k,style:{outline:"none",...e.style},onMouseDown:s(e.onMouseDown,(()=>{P.current=!0})),onFocus:s(e.onFocus,(e=>{const r=!P.current;if(e.target===e.currentTarget&&r&&!S){const r=new CustomEvent(x,N);if(e.currentTarget.dispatchEvent(r),!r.defaultPrevented){const e=z().filter((e=>e.focusable));O([e.find((e=>e.active)),e.find((e=>e.id===R)),...e].filter(Boolean).map((e=>e.ref.current)),m)}}P.current=!1})),onBlur:s(e.onBlur,(()=>E(!1)))})})})),P="RovingFocusGroupItem",A=t.forwardRef(((e,r)=>{const{__scopeRovingFocusGroup:o,focusable:n=!0,active:i=!1,tabStopId:l,...c}=e,d=b(),u=l||d,p=E(P,o),f=p.currentTabStopId===u,m=j(o),{onFocusableItemAdd:h,onFocusableItemRemove:v}=p;return t.useEffect((()=>{if(n)return h(),()=>v()}),[n,h,v]),(0,a.jsx)(C.ItemSlot,{scope:o,id:u,focusable:n,active:i,children:(0,a.jsx)(g.span,{tabIndex:f?0:-1,"data-orientation":p.orientation,...c,ref:r,onMouseDown:s(e.onMouseDown,(e=>{n?p.onItemFocus(u):e.preventDefault()})),onFocus:s(e.onFocus,(()=>p.onItemFocus(u))),onKeyDown:s(e.onKeyDown,(e=>{if("Tab"===e.key&&e.shiftKey)return void p.onItemShiftTab();if(e.target!==e.currentTarget)return;const r=function(e,r,o){const t=function(e,r){return"rtl"!==r?e:"ArrowLeft"===e?"ArrowRight":"ArrowRight"===e?"ArrowLeft":e}(e.key,o);return"vertical"===r&&["ArrowLeft","ArrowRight"].includes(t)||"horizontal"===r&&["ArrowUp","ArrowDown"].includes(t)?void 0:T[t]}(e,p.orientation,p.dir);if(void 0!==r){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let n=m().filter((e=>e.focusable)).map((e=>e.ref.current));if("last"===r)n.reverse();else if("prev"===r||"next"===r){"prev"===r&&n.reverse();const s=n.indexOf(e.currentTarget);n=p.loop?(t=s+1,(o=n).map(((e,r)=>o[(t+r)%o.length]))):n.slice(s+1)}setTimeout((()=>O(n)))}var o,t}))})})}));A.displayName=P;var T={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function O(e,r=!1){const o=document.activeElement;for(const t of e){if(t===o)return;if(t.focus({preventScroll:r}),document.activeElement!==o)return}}var $=_,F=A;var D=e=>{const{present:r,children:o}=e,n=function(e){const[r,o]=t.useState(),n=t.useRef({}),s=t.useRef(e),a=t.useRef("none"),i=e?"mounted":"unmounted",[l,c]=function(e,r){return t.useReducer(((e,o)=>r[e][o]??e),e)}(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return t.useEffect((()=>{const e=G(n.current);a.current="mounted"===l?e:"none"}),[l]),p((()=>{const r=n.current,o=s.current;if(o!==e){const t=a.current,n=G(r);if(e)c("MOUNT");else if("none"===n||"none"===r?.display)c("UNMOUNT");else{c(o&&t!==n?"ANIMATION_OUT":"UNMOUNT")}s.current=e}}),[e,c]),p((()=>{if(r){let e;const o=r.ownerDocument.defaultView??window,t=t=>{const a=G(n.current).includes(t.animationName);if(t.target===r&&a&&(c("ANIMATION_END"),!s.current)){const t=r.style.animationFillMode;r.style.animationFillMode="forwards",e=o.setTimeout((()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=t)}))}},i=e=>{e.target===r&&(a.current=G(n.current))};return r.addEventListener("animationstart",i),r.addEventListener("animationcancel",t),r.addEventListener("animationend",t),()=>{o.clearTimeout(e),r.removeEventListener("animationstart",i),r.removeEventListener("animationcancel",t),r.removeEventListener("animationend",t)}}c("ANIMATION_END")}),[r,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:t.useCallback((e=>{e&&(n.current=getComputedStyle(e)),o(e)}),[])}}(r),s="function"==typeof o?o({present:n.isPresent}):t.Children.only(o),a=(0,c.s)(n.ref,function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning;if(o)return e.ref;if(r=Object.getOwnPropertyDescriptor(e,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning,o)return e.props.ref;return e.props.ref||e.ref}(s));return"function"==typeof o||n.isPresent?t.cloneElement(s,{ref:a}):null};function G(e){return e?.animationName||"none"}D.displayName="Presence";var L="Tabs",[W,U]=function(e,r=[]){let o=[];const n=()=>{const r=o.map((e=>t.createContext(e)));return function(o){const n=o?.[e]||r;return t.useMemo((()=>({[`__scope${e}`]:{...o,[e]:n}})),[o,n])}};return n.scopeName=e,[function(r,n){const s=t.createContext(n),i=o.length;o=[...o,n];const l=r=>{const{scope:o,children:n,...l}=r,c=o?.[e]?.[i]||s,d=t.useMemo((()=>l),Object.values(l));return(0,a.jsx)(c.Provider,{value:d,children:n})};return l.displayName=r+"Provider",[l,function(o,a){const l=a?.[e]?.[i]||s,c=t.useContext(l);if(c)return c;if(void 0!==n)return n;throw new Error(`\`${o}\` must be used within \`${r}\``)}]},i(n,...r)]}(L,[S]),V=S(),[B,K]=W(L),q=t.forwardRef(((e,r)=>{const{__scopeTabs:o,value:t,onValueChange:n,defaultValue:s,orientation:i="horizontal",dir:l,activationMode:c="automatic",...d}=e,u=w(l),[p,f]=v({prop:t,onChange:n,defaultProp:s});return(0,a.jsx)(B,{scope:o,baseId:b(),value:p,onValueChange:f,orientation:i,dir:u,activationMode:c,children:(0,a.jsx)(g.div,{dir:u,"data-orientation":i,...d,ref:r})})}));q.displayName=L;var X="TabsList",Z=t.forwardRef(((e,r)=>{const{__scopeTabs:o,loop:t=!0,...n}=e,s=K(X,o),i=V(o);return(0,a.jsx)($,{asChild:!0,...i,orientation:s.orientation,dir:s.dir,loop:t,children:(0,a.jsx)(g.div,{role:"tablist","aria-orientation":s.orientation,...n,ref:r})})}));Z.displayName=X;var H="TabsTrigger",Q=t.forwardRef(((e,r)=>{const{__scopeTabs:o,value:t,disabled:n=!1,...i}=e,l=K(H,o),c=V(o),d=ee(l.baseId,t),u=re(l.baseId,t),p=t===l.value;return(0,a.jsx)(F,{asChild:!0,...c,focusable:!n,active:p,children:(0,a.jsx)(g.button,{type:"button",role:"tab","aria-selected":p,"aria-controls":u,"data-state":p?"active":"inactive","data-disabled":n?"":void 0,disabled:n,id:d,...i,ref:r,onMouseDown:s(e.onMouseDown,(e=>{n||0!==e.button||!1!==e.ctrlKey?e.preventDefault():l.onValueChange(t)})),onKeyDown:s(e.onKeyDown,(e=>{[" ","Enter"].includes(e.key)&&l.onValueChange(t)})),onFocus:s(e.onFocus,(()=>{const e="manual"!==l.activationMode;p||n||!e||l.onValueChange(t)}))})})}));Q.displayName=H;var J="TabsContent",Y=t.forwardRef(((e,r)=>{const{__scopeTabs:o,value:n,forceMount:s,children:i,...l}=e,c=K(J,o),d=ee(c.baseId,n),u=re(c.baseId,n),p=n===c.value,f=t.useRef(p);return t.useEffect((()=>{const e=requestAnimationFrame((()=>f.current=!1));return()=>cancelAnimationFrame(e)}),[]),(0,a.jsx)(D,{present:s||p,children:({present:o})=>(0,a.jsx)(g.div,{"data-state":p?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":d,hidden:!o,id:u,tabIndex:0,...l,ref:r,style:{...e.style,animationDuration:f.current?"0s":void 0},children:o&&i})})}));function ee(e,r){return`${e}-trigger-${r}`}function re(e,r){return`${e}-content-${r}`}Y.displayName=J;var oe=q,te=Z,ne=Q,se=Y},2732:(e,r,o)=>{o.d(r,{F:()=>a});var t=o(4164);const n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,s=t.$,a=(e,r)=>o=>{var t;if(null==(null==r?void 0:r.variants))return s(e,null==o?void 0:o.class,null==o?void 0:o.className);const{variants:a,defaultVariants:i}=r,l=Object.keys(a).map((e=>{const r=null==o?void 0:o[e],t=null==i?void 0:i[e];if(null===r)return null;const s=n(r)||n(t);return a[e][s]})),c=o&&Object.entries(o).reduce(((e,r)=>{let[o,t]=r;return void 0===t||(e[o]=t),e}),{}),d=null==r||null===(t=r.compoundVariants)||void 0===t?void 0:t.reduce(((e,r)=>{let{class:o,className:t,...n}=r;return Object.entries(n).every((e=>{let[r,o]=e;return Array.isArray(o)?o.includes({...i,...c}[r]):{...i,...c}[r]===o}))?[...e,o,t]:e}),[]);return s(e,l,d,null==o?void 0:o.class,null==o?void 0:o.className)}},856:(e,r,o)=>{o.d(r,{QP:()=>Z});const t=e=>{const r=i(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:e=>{const o=e.split("-");return""===o[0]&&1!==o.length&&o.shift(),n(o,r)||a(e)},getConflictingClassGroupIds:(e,r)=>{const n=o[e]||[];return r&&t[e]?[...n,...t[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;const o=e[0],t=r.nextPart.get(o),s=t?n(e.slice(1),t):void 0;if(s)return s;if(0===r.validators.length)return;const a=e.join("-");return r.validators.find((({validator:e})=>e(a)))?.classGroupId},s=/^\[(.+)\]$/,a=e=>{if(s.test(e)){const r=s.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}},i=e=>{const{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),o).forEach((([e,o])=>{l(o,t,e,r)})),t},l=(e,r,o,t)=>{e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return d(e)?void l(e(t),r,o,t):void r.validators.push({validator:e,classGroupId:o});Object.entries(e).forEach((([e,n])=>{l(n,c(r,e),o,t)}))}else{(""===e?r:c(r,e)).classGroupId=o}}))},c=(e,r)=>{let o=e;return r.split("-").forEach((e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)})),o},d=e=>e.isThemeGetter,u=(e,r)=>r?e.map((([e,o])=>[e,o.map((e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,o])=>[r+e,o]))):e))])):e,p=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,t=new Map;const n=(n,s)=>{o.set(n,s),r++,r>e&&(r=0,t=o,o=new Map)};return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}},f=e=>{const{separator:r,experimentalParseClassName:o}=e,t=1===r.length,n=r[0],s=r.length,a=e=>{const o=[];let a,i=0,l=0;for(let u=0;u<e.length;u++){let c=e[u];if(0===i){if(c===n&&(t||e.slice(u,u+s)===r)){o.push(e.slice(l,u)),l=u+s;continue}if("/"===c){a=u;continue}}"["===c?i++:"]"===c&&i--}const c=0===o.length?e:e.substring(l),d=c.startsWith("!");return{modifiers:o,hasImportantModifier:d,baseClassName:d?c.substring(1):c,maybePostfixModifierPosition:a&&a>l?a-l:void 0}};return o?e=>o({className:e,parseClassName:a}):a},m=e=>{if(e.length<=1)return e;const r=[];let o=[];return e.forEach((e=>{"["===e[0]?(r.push(...o.sort(),e),o=[]):o.push(e)})),r.push(...o.sort()),r},b=/\s+/;function g(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=h(e))&&(t&&(t+=" "),t+=r);return t}const h=e=>{if("string"==typeof e)return e;let r,o="";for(let t=0;t<e.length;t++)e[t]&&(r=h(e[t]))&&(o&&(o+=" "),o+=r);return o};function v(e,...r){let o,n,s,a=function(l){const c=r.reduce(((e,r)=>r(e)),e());return o=(e=>({cache:p(e.cacheSize),parseClassName:f(e),...t(e)}))(c),n=o.cache.get,s=o.cache.set,a=i,i(l)};function i(e){const r=n(e);if(r)return r;const t=((e,r)=>{const{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:n}=r,s=[],a=e.trim().split(b);let i="";for(let l=a.length-1;l>=0;l-=1){const e=a[l],{modifiers:r,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:u}=o(e);let p=Boolean(u),f=t(p?d.substring(0,u):d);if(!f){if(!p){i=e+(i.length>0?" "+i:i);continue}if(f=t(d),!f){i=e+(i.length>0?" "+i:i);continue}p=!1}const b=m(r).join(":"),g=c?b+"!":b,h=g+f;if(s.includes(h))continue;s.push(h);const v=n(f,p);for(let o=0;o<v.length;++o){const e=v[o];s.push(g+e)}i=e+(i.length>0?" "+i:i)}return i})(e,o);return s(e,t),t}return function(){return a(g.apply(null,arguments))}}const y=e=>{const r=r=>r[e]||[];return r.isThemeGetter=!0,r},w=/^\[(?:([a-z-]+):)?(.+)\]$/i,x=/^\d+\/\d+$/,N=new Set(["px","full","screen"]),k=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,j=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,R=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,M=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,S=e=>E(e)||N.has(e)||x.test(e),I=e=>U(e,"length",V),E=e=>Boolean(e)&&!Number.isNaN(Number(e)),_=e=>U(e,"number",E),z=e=>Boolean(e)&&Number.isInteger(Number(e)),P=e=>e.endsWith("%")&&E(e.slice(0,-1)),A=e=>w.test(e),T=e=>k.test(e),O=new Set(["length","size","percentage"]),$=e=>U(e,O,B),F=e=>U(e,"position",B),D=new Set(["image","url"]),G=e=>U(e,D,q),L=e=>U(e,"",K),W=()=>!0,U=(e,r,o)=>{const t=w.exec(e);return!!t&&(t[1]?"string"==typeof r?t[1]===r:r.has(t[1]):o(t[2]))},V=e=>C.test(e)&&!j.test(e),B=()=>!1,K=e=>R.test(e),q=e=>M.test(e),X=(Symbol.toStringTag,()=>{const e=y("colors"),r=y("spacing"),o=y("blur"),t=y("brightness"),n=y("borderColor"),s=y("borderRadius"),a=y("borderSpacing"),i=y("borderWidth"),l=y("contrast"),c=y("grayscale"),d=y("hueRotate"),u=y("invert"),p=y("gap"),f=y("gradientColorStops"),m=y("gradientColorStopPositions"),b=y("inset"),g=y("margin"),h=y("opacity"),v=y("padding"),w=y("saturate"),x=y("scale"),N=y("sepia"),k=y("skew"),C=y("space"),j=y("translate"),R=()=>["auto",A,r],M=()=>[A,r],O=()=>["",S,I],D=()=>["auto",E,A],U=()=>["","0",A],V=()=>[E,A];return{cacheSize:500,separator:":",theme:{colors:[W],spacing:[S,I],blur:["none","",T,A],brightness:V(),borderColor:[e],borderRadius:["none","","full",T,A],borderSpacing:M(),borderWidth:O(),contrast:V(),grayscale:U(),hueRotate:V(),invert:U(),gap:M(),gradientColorStops:[e],gradientColorStopPositions:[P,I],inset:R(),margin:R(),opacity:V(),padding:M(),saturate:V(),scale:V(),sepia:U(),skew:V(),space:M(),translate:M()},classGroups:{aspect:[{aspect:["auto","square","video",A]}],container:["container"],columns:[{columns:[T]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",A]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",z,A]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",A]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",z,A]}],"grid-cols":[{"grid-cols":[W]}],"col-start-end":[{col:["auto",{span:["full",z,A]},A]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[W]}],"row-start-end":[{row:["auto",{span:[z,A]},A]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",A]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",A]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",A,r]}],"min-w":[{"min-w":[A,r,"min","max","fit"]}],"max-w":[{"max-w":[A,r,"none","full","min","max","fit","prose",{screen:[T]},T]}],h:[{h:[A,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[A,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[A,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[A,r,"auto","min","max","fit"]}],"font-size":[{text:["base",T,I]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",_]}],"font-family":[{font:[W]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",A]}],"line-clamp":[{"line-clamp":["none",E,_]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",S,A]}],"list-image":[{"list-image":["none",A]}],"list-style-type":[{list:["none","disc","decimal",A]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",S,I]}],"underline-offset":[{"underline-offset":["auto",S,A]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",A]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",A]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",F]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",$]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},G]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[S,A]}],"outline-w":[{outline:[S,I]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:O()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[S,I]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",T,L]}],"shadow-color":[{shadow:[W]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",T,A]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[w]}],sepia:[{sepia:[N]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[N]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",A]}],duration:[{duration:V()}],ease:[{ease:["linear","in","out","in-out",A]}],delay:[{delay:V()}],animate:[{animate:["none","spin","ping","pulse","bounce",A]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[z,A]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",A]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",A]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",A]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[S,I,_]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}),Z=v(X)}}]);