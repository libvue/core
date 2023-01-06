import{_ as u,b as n,d as h,o as s,c as f,w as l,e as c,f as i,g as r,F as w,h as _}from"./index.8c5ff4d0.js";const g=`
<lv-button color="solid-primary" label="Toggle Consent" @click="showCookieConsent = !showCookieConsent" />
<lv-cookie-consent
    :show="showCookieConsent"
    :modal="true"
    @accept="showCookieConsent = false"
    @decline="showCookieConsent = false"
/>
`.trim(),b={data(){return{code:g,showCookieConsent:!1}}},x=_("Cookie Consent"),B=_("Because we have to somehow"),D=_("Default");function T(y,o,F,N,e,V){const a=n("lv-heading"),d=n("lv-button"),v=n("lv-cookie-consent",!0),p=n("lv-card"),k=n("lv-code"),m=n("component-details"),t=h("space-after");return s(),f(w,null,[l((s(),c(a,{level:3},{default:i(()=>[x]),_:1})),[[t,.5]]),l((s(),c(a,{sub:"",level:6},{default:i(()=>[B]),_:1})),[[t,2]]),l((s(),c(a,{level:6},{default:i(()=>[D]),_:1})),[[t,1]]),l((s(),c(p,null,{default:i(()=>[r(d,{color:"solid-primary",label:"Toggle Consent",onClick:o[0]||(o[0]=C=>e.showCookieConsent=!e.showCookieConsent)}),r(v,{show:e.showCookieConsent,modal:!0,onAccept:o[1]||(o[1]=C=>e.showCookieConsent=!1),onDecline:o[2]||(o[2]=C=>e.showCookieConsent=!1)},null,8,["show"])]),_:1})),[[t,1]]),l(r(k,{lang:"html",code:e.code},null,8,["code"]),[[t,1]]),r(m,{component:"LvCookieConsent"})],64)}const E=u(b,[["render",T]]);export{E as default};
