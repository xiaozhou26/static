"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1485],{51485:function(e,t,r){r.r(t),r.d(t,{TextMessageEditor:function(){return k}});var n=r(98601),a=r(52088),s=r(22433),o=r(93866),c=r(15913),i=r(99976),l=r(61619),d=r(92379),u=r(75325),f=r(15478),p=r(16757),b=r(92745),g=r(11550),v=r(19841),j=r(651);let O=["className"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}let m=(0,d.forwardRef)(function(e,t){let{className:r}=e,s=(0,a.Z)(e,O);return(0,j.jsxs)("div",{className:"grid",children:[(0,j.jsx)("textarea",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({className:(0,v.default)("col-start-1 col-end-2 row-start-1 row-end-2 resize-none overflow-hidden p-0",r),ref:t},s)),(0,j.jsxs)("span",{className:"invisible col-start-1 col-end-2 row-start-1 row-end-2 whitespace-pre-wrap p-0",children:[e.value," "]})]})});var y=r(45027);function w(e){let{initialText:t,clientThreadId:r,currentLeaf:n,onChangeItemInView:a,onExitEdit:s,onRequestCompletion:f,disabled:v,attachments:O}=e,h=(0,d.useId)(),w=`${n}-${h}`,{0:P,1:E}=(0,d.useState)(t??""),k=(0,d.useRef)(null),N=(0,c.BL)(),C=(0,d.useCallback)(e=>{E(e.currentTarget.value)},[]),M=(0,d.useCallback)(()=>{f({type:p.Os.Next,promptId:w,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:b.iN.getConversationMode(r)},updateTree:()=>{b.tQ.updateTree(r,e=>{let t=e.getParentId(n);e.addNode(w,P,t,p.uU.User,void 0,O?{attachments:O}:void 0)}),a(w)}}),s(),i.A.logEvent(l.M.changeNode,{intent:"edit_save"})},[O,r,n,w,P,a,f,s]),D=(0,d.useCallback)(()=>{a(n),i.A.logEvent(l.M.changeNode,{intent:"edit_cancel"}),s(),i.A.logEvent(l.M.cancelEditPrompt,{threadId:b.tQ.getServerThreadId(r)})},[n,a,s,r]);(0,d.useEffect)(()=>{let e=k.current;if(e){e.focus();let t=e.value.length;e.setSelectionRange(t,t)}},[]),(0,d.useEffect)(()=>{let e=k.current,t=e=>{"Enter"===e.key&&e.metaKey?M():"Escape"===e.key&&D()};return e&&e.addEventListener("keydown",t),()=>{e&&e.removeEventListener("keydown",t)}},[D,M]);let S=O&&O.length>0&&(0,j.jsx)(x,{children:O.map(e=>(0,j.jsx)(y.Z,{width:N?"normal":"wide",file:e.name,contextConnectorInfo:(0,o.xA)(e.context_connector_info)},e.id))}),I=(0,j.jsx)("div",{className:"m-2 max-h-[25dvh] overflow-auto",children:(0,j.jsx)(m,{ref:k,value:P,onChange:C,className:"m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0"})});return(0,j.jsxs)("div",{className:"rounded-3xl bg-token-main-surface-tertiary px-3 py-3",children:[S,I,(0,j.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,j.jsx)(g.z,{as:"button",color:"secondary",onClick:D,children:(0,j.jsx)(u.Z,{id:"D9gbPp",defaultMessage:"Cancel"})}),(0,j.jsx)(g.z,{as:"button",onClick:M,disabled:v,children:(0,j.jsx)(u.Z,{id:"KGxIJG",defaultMessage:"Send"})})]})]})}let x=f.Z.div`flex gap-2 flex-wrap`,P=["message"];function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function k(e){let{message:t}=e,r=(0,a.Z)(e,P);return(0,j.jsx)(w,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({currentLeaf:t.nodeId,initialText:(0,s.RR)(t.message),attachments:t.message.metadata?.attachments},r))}}}]);
//# sourceMappingURL=1485.3d7f8af870639004.js.map