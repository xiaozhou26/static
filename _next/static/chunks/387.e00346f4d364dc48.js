(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{51516:function(e,t,r){"use strict";function n(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}r.d(t,{Z:function(){return n}})},17224:function(e,t,r){"use strict";function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}r.d(t,{Z:function(){return n}})},98987:function(e,t,r){var n=r(3284);e.exports=function(e,t){for(var r=-1,o=e.length,u=0,a=[];++r<o;){var i=e[r],c=t?t(i):i;if(!r||!n(c,s)){var s=c;a[u++]=0===i?0:i}}return a}},52538:function(e,t,r){var n=r(61757),o=r(98987);e.exports=function(e,t){return e&&e.length?o(e,n(t,2)):[]}},78571:function(e,t,r){"use strict";r.d(t,{_:function(){return a}});var n=r(37088),o=r(92379),u=r(52125);let a=(0,o.forwardRef)((e,t)=>(0,o.createElement)(u.WV.label,(0,n.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))},65954:function(e,t,r){"use strict";r.d(t,{Pc:function(){return M},ck:function(){return N},fC:function(){return D}});var n=r(37088),o=r(92379),u=r(10132),a=r(26671),i=r(59246),c=r(31541),s=r(28531),f=r(52125),l=r(2372),d=r(48758),p=r(76228);let h="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},g="RovingFocusGroup",[b,m,w]=(0,a.B)(g),[P,M]=(0,c.b)(g,[w]),[R,E]=P(g),F=(0,o.forwardRef)((e,t)=>(0,o.createElement)(b.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(b.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(I,(0,n.Z)({},e,{ref:t}))))),I=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:a,loop:c=!1,dir:s,currentTabStopId:g,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:w,onEntryFocus:P,...M}=e,E=(0,o.useRef)(null),F=(0,i.e)(t,E),I=(0,p.gm)(s),[x=null,T]=(0,d.T)({prop:g,defaultProp:b,onChange:w}),[D,N]=(0,o.useState)(!1),k=(0,l.W)(P),_=m(r),y=(0,o.useRef)(!1),[C,S]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=E.current;if(e)return e.addEventListener(h,k),()=>e.removeEventListener(h,k)},[k]),(0,o.createElement)(R,{scope:r,orientation:a,dir:I,loop:c,currentTabStopId:x,onItemFocus:(0,o.useCallback)(e=>T(e),[T]),onItemShiftTab:(0,o.useCallback)(()=>N(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>S(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>S(e=>e-1),[])},(0,o.createElement)(f.WV.div,(0,n.Z)({tabIndex:D||0===C?-1:0,"data-orientation":a},M,{ref:F,style:{outline:"none",...e.style},onMouseDown:(0,u.M)(e.onMouseDown,()=>{y.current=!0}),onFocus:(0,u.M)(e.onFocus,e=>{let t=!y.current;if(e.target===e.currentTarget&&t&&!D){let t=new CustomEvent(h,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=_().filter(e=>e.focusable);A([e.find(e=>e.active),e.find(e=>e.id===x),...e].filter(Boolean).map(e=>e.ref.current))}}y.current=!1}),onBlur:(0,u.M)(e.onBlur,()=>N(!1))})))}),x=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:a=!0,active:i=!1,tabStopId:c,...l}=e,d=(0,s.M)(),p=c||d,h=E("RovingFocusGroupItem",r),v=h.currentTabStopId===p,g=m(r),{onFocusableItemAdd:w,onFocusableItemRemove:P}=h;return(0,o.useEffect)(()=>{if(a)return w(),()=>P()},[a,w,P]),(0,o.createElement)(b.ItemSlot,{scope:r,id:p,focusable:a,active:i},(0,o.createElement)(f.WV.span,(0,n.Z)({tabIndex:v?0:-1,"data-orientation":h.orientation},l,{ref:t,onMouseDown:(0,u.M)(e.onMouseDown,e=>{a?h.onItemFocus(p):e.preventDefault()}),onFocus:(0,u.M)(e.onFocus,()=>h.onItemFocus(p)),onKeyDown:(0,u.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){h.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return T[o]}(e,h.orientation,h.dir);if(void 0!==t){e.preventDefault();let o=g().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var r,n;"prev"===t&&o.reverse();let u=o.indexOf(e.currentTarget);o=h.loop?(r=o,n=u+1,r.map((e,t)=>r[(n+t)%r.length])):o.slice(u+1)}setTimeout(()=>A(o))}})})))}),T={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function A(e){let t=document.activeElement;for(let r of e)if(r===t||(r.focus(),document.activeElement!==t))return}let D=F,N=x},19856:function(e,t,r){"use strict";r.d(t,{N:function(){return i}});var n=r(60083),o=r(23418),u=class extends n.z{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:(0,o.Gm)()},t)}getOptimisticResult(e){return e.behavior=(0,o.Gm)(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){let{state:r}=e,n=super.createResult(e,t),{isFetching:u,isRefetching:a}=n,i=u&&r.fetchMeta?.fetchMore?.direction==="forward",c=u&&r.fetchMeta?.fetchMore?.direction==="backward";return{...n,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,o.Qy)(t,r.data),hasPreviousPage:(0,o.ZF)(t,r.data),isFetchingNextPage:i,isFetchingPreviousPage:c,isRefetching:a&&!i&&!c}}},a=r(56537);function i(e,t){return(0,a.r)(e,u,t)}}}]);
//# sourceMappingURL=387.e00346f4d364dc48.js.map