import{_ as u,o as n,c as f,w as l,b as c,d as i,e as a,i as h,F as w,f as _,g as t,h as g}from"./index.8ae4626b.js";const b=`
<lv-button color="solid-primary" label="Toggle Consent" @click="showCookieConsent = !showCookieConsent" />
<lv-cookie-consent
    v-if="showCookieConsent"
    :modal="true"
    @accept="showCookieConsent = false"
    @decline="showCookieConsent = false"
/>
`.trim(),x={data(){return{code:b,showCookieConsent:!1}}},B=_("Cookie Consent"),D=_("Because we have to somehow"),y=_("Default");function N(T,o,V,F,e,A){const r=t("lv-heading"),d=t("lv-button"),v=t("lv-cookie-consent",!0),m=t("lv-card"),p=t("lv-code"),k=t("component-details"),s=g("space-after");return n(),f(w,null,[l((n(),c(r,{level:3},{default:i(()=>[B]),_:1})),[[s,.5]]),l((n(),c(r,{sub:"",level:6},{default:i(()=>[D]),_:1})),[[s,2]]),l((n(),c(r,{level:6},{default:i(()=>[y]),_:1})),[[s,1]]),l((n(),c(m,null,{default:i(()=>[a(d,{color:"solid-primary",label:"Toggle Consent",onClick:o[0]||(o[0]=C=>e.showCookieConsent=!e.showCookieConsent)}),e.showCookieConsent?(n(),c(v,{key:0,modal:!0,onAccept:o[1]||(o[1]=C=>e.showCookieConsent=!1),onDecline:o[2]||(o[2]=C=>e.showCookieConsent=!1)})):h("",!0)]),_:1})),[[s,1]]),l(a(p,{lang:"html",code:e.code},null,8,["code"]),[[s,1]]),a(k,{component:"LvCookieConsent"})],64)}const L=u(x,[["render",N]]);export{L as default};
