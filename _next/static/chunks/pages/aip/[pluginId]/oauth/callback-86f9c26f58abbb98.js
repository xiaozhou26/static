(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2758],{69214:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return f},default:function(){return l}});var n=r(98601),c=r(24740),u=r(86741),o=r(2721),s=r(34977),i=r(92379),a=r(651);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var f=!0;function l(e){return(0,a.jsx)(O,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))}function O(e){let{pluginId:t,code:r,state:n,error:p,errorDesc:f}=e,l=(0,s.useRouter)(),O=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{!0!==O.current&&(O.current=!0,async function(){let e=`https://chat.openai.com/aip/${t}/oauth/callback`;try{let c=await o.Z.pluginOauthCallback(t,r,e,n);if(c.success){let e=new URL((0,u.M5)(u.LT.OAUTH_SUCCESS,c.redirect_path));e.searchParams.set("oauth_success","true"),l.push(e.toString())}else l.push((0,u.M5)(u.LT.CUSTOM_ERROR,c.redirect_path,c.error??c.message))}catch(e){l.push(`/?model=gpt-4-plugins&loginAip=${t}&loginSuccess=false`)}}())},[t,r,n,l]),(0,i.useEffect)(()=>{p&&c.m.danger(`${p}${f?`: ${f}`:""}`,{duration:5})},[p,f]),(0,a.jsx)("div",{})}},40507:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aip/[pluginId]/oauth/callback",function(){return r(69214)}])}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=40507)}),_N_E=e.O()}]);
//# sourceMappingURL=callback-86f9c26f58abbb98.js.map