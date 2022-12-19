import{_ as u,b as n,d as f,o as t,c as h,w as l,e as c,f as i,g as a,F as w,i as g,h as _}from"./index.43daceef.js";const b=`
<lv-button color="solid-primary" label="Toggle Consent" @click="showCookieConsent = !showCookieConsent" />
<lv-cookie-consent
    v-if="showCookieConsent"
    :modal="true"
    @accept="showCookieConsent = false"
    @decline="showCookieConsent = false"
/>
`.trim(),x={data(){return{code:b,showCookieConsent:!1}}},B=_("Cookie Consent"),D=_("Because we have to somehow"),y=_("Default");function N(T,o,V,F,e,A){const r=n("lv-heading"),d=n("lv-button"),v=n("lv-cookie-consent",!0),m=n("lv-card"),p=n("lv-code"),k=n("component-details"),s=f("space-after");return t(),h(w,null,[l((t(),c(r,{level:3},{default:i(()=>[B]),_:1})),[[s,.5]]),l((t(),c(r,{sub:"",level:6},{default:i(()=>[D]),_:1})),[[s,2]]),l((t(),c(r,{level:6},{default:i(()=>[y]),_:1})),[[s,1]]),l((t(),c(m,null,{default:i(()=>[a(d,{color:"solid-primary",label:"Toggle Consent",onClick:o[0]||(o[0]=C=>e.showCookieConsent=!e.showCookieConsent)}),e.showCookieConsent?(t(),c(v,{key:0,modal:!0,onAccept:o[1]||(o[1]=C=>e.showCookieConsent=!1),onDecline:o[2]||(o[2]=C=>e.showCookieConsent=!1)})):g("",!0)]),_:1})),[[s,1]]),l(a(p,{lang:"html",code:e.code},null,8,["code"]),[[s,1]]),a(k,{component:"LvCookieConsent"})],64)}const L=u(x,[["render",N]]);export{L as default};
