import{_ as u,b as n,d as f,o as s,c as w,w as l,e as c,f as i,g as r,F as h,h as C}from"./index-9aa14228.js";const g=`
<lv-button color="solid-primary" label="Toggle Consent" @click="showCookieConsent = !showCookieConsent" />
<lv-cookie-consent
    :show="showCookieConsent"
    :modal="true"
    @accept="showCookieConsent = false"
    @decline="showCookieConsent = false"
/>
`.trim(),b={data(){return{code:g,showCookieConsent:!1}}};function x(B,o,D,T,e,y){const a=n("lv-heading"),v=n("lv-button"),d=n("lv-cookie-consent",!0),p=n("lv-card"),k=n("lv-code"),m=n("component-details"),t=f("space-after");return s(),w(h,null,[l((s(),c(a,{level:3},{default:i(()=>[C("Cookie Consent")]),_:1})),[[t,.5]]),l((s(),c(a,{sub:"",level:6},{default:i(()=>[C("Because we have to somehow")]),_:1})),[[t,2]]),l((s(),c(a,{level:6},{default:i(()=>[C("Default")]),_:1})),[[t,1]]),l((s(),c(p,null,{default:i(()=>[r(v,{color:"solid-primary",label:"Toggle Consent",onClick:o[0]||(o[0]=_=>e.showCookieConsent=!e.showCookieConsent)}),r(d,{show:e.showCookieConsent,modal:!0,onAccept:o[1]||(o[1]=_=>e.showCookieConsent=!1),onDecline:o[2]||(o[2]=_=>e.showCookieConsent=!1)},null,8,["show"])]),_:1})),[[t,1]]),l(r(k,{lang:"html",code:e.code},null,8,["code"]),[[t,1]]),r(m,{component:"LvCookieConsent"})],64)}const N=u(b,[["render",x]]);export{N as default};