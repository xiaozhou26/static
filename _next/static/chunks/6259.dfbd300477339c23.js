"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6259],{44039:function(e,n,t){t.d(n,{I:function(){return o}});var r=t(38482),u=t.n(r),l=t(92379),i=t(651);let a=u()(()=>t.e(4818).then(t.bind(t,34818)),{ssr:!1,loadableGenerated:{webpack:()=>[34818]}}),o=e=>{let{children:n,scrollViewClassName:t,scrollAnchorTopOffset:r=0}=e,u=(0,l.useRef)(null);return(0,i.jsx)("div",{className:"h-full",ref:u,children:(0,i.jsx)(a,{className:"h-full",followButtonClassName:"hidden",initialScrollBehavior:"auto",scrollViewClassName:t,scroller:()=>c(u,r)?0:1/0,children:n})})},c=(e,n)=>{let t=function(e){if(!e)return null;let n=e.querySelector('[data-scroll-anchor="true"]');return n?n.getBoundingClientRect().top-e.getBoundingClientRect().top:null}(e.current);return null!=t&&!(t>n)&&!(t<n-60)}},93396:function(e,n,t){t.d(n,{j:function(){return u}});var r=t(45120);function u(){return(0,r.fW)("2067628123").value}},87040:function(e,n,t){t.d(n,{$N:function(){return h},SK:function(){return s},hE:function(){return d},qn:function(){return f}});var r=t(99333),u=t(62379),l=t(58025),i=t(2721),a=t(84760),o=t(58695),c=t(92379);function s(){let e=l.R1(r.sh.VoiceName)?.data,n=l.R1(r.sh.VoiceMainLanguage)?.data;return{voiceName:h(e,f()),voiceMainLanguage:n??r.P9.Auto}}function f(){let e=d(),{currentLocale:n}=(0,u.b)();return(0,c.useCallback)(()=>{if(0===e.length)return"juniper";let t=e[0].voice;return n.startsWith("zh")&&(t="cove"),t},[e,n])}function d(){let{session:e}=(0,o.kP)(),n=l.R1(r.sh.VoiceMainLanguage)?.data,{data:t}=(0,a.a)({queryKey:["getUserSettingVoices",n],queryFn:()=>i.Z.getUserSettingVoices(),enabled:null!=e});return t?t.voices:[]}function h(e,n){return"sky"===e?"juniper":e??n()}},26694:function(e,n,t){t.d(n,{L:function(){return r}});function r(e){let n=Math.floor(e/60),t=Math.floor(n/60),r=String(Math.floor(e)%60).padStart(2,"0"),u=String(n%60).padStart(2,"0");return 0===t?`${u}:${r}`:`${t}:${u}:${r}`}}}]);
//# sourceMappingURL=6259.dfbd300477339c23.js.map