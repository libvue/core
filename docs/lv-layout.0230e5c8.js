import{_ as u,o,c as f,w as l,b as s,d as e,e as c,F as h,f as _,a as n,g as t,h as y}from"./index.bcd3c8a4.js";const b=`
<lv-layout>
    <template #header>
        <div class="filler">Sticky Header</div>
    </template>
    <template #sidebar>
        <div class="filler">Sidebar</div>
    </template>
    <template #main>
        <div class="filler">Main</div>
    </template>
</lv-layout>
`.trim(),g={data(){return{code:b}}},x=_("Layout"),k=_("A simple layout component"),L=n("div",{class:"filler"},"Sticky Header",-1),B=n("div",{class:"filler"},"Sidebar",-1),S=n("div",{class:"filler"},"Main",-1);function w(N,V,$,C,d,D){const i=t("lv-heading"),r=t("lv-layout",!0),v=t("lv-card"),p=t("lv-code"),m=t("component-details"),a=y("space-after");return o(),f(h,null,[l((o(),s(i,{level:3},{default:e(()=>[x]),_:1})),[[a,.5]]),l((o(),s(i,{sub:"",level:6},{default:e(()=>[k]),_:1})),[[a,2]]),l((o(),s(v,null,{default:e(()=>[c(r,null,{header:e(()=>[L]),sidebar:e(()=>[B]),main:e(()=>[S]),_:1})]),_:1})),[[a,1]]),l(c(p,{lang:"html",code:d.code},null,8,["code"]),[[a,1]]),c(m,{component:"LvLayout"})],64)}const H=u(g,[["render",w]]);export{H as default};
