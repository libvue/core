import{_ as u,b as t,d as f,o as s,c as h,w as l,e as c,f as e,g as i,F as y,h as n,a as o}from"./index.fff357f5.js";const k=`
<lv-layout :sticky-header="false" :sticky-sub-header="false">
    <template #header>
        <div class="filler">Sticky Header</div>
    </template>
    <template #sub-header>
        <div class="filler">Sticky Header</div>
    </template>
    <template #sidebar>
        <div class="filler">Sidebar</div>
    </template>
    <template #main>
        <div class="filler">Main</div>
    </template>
</lv-layout>
`.trim(),b={data(){return{code:k}}},g=n("Layout"),x=n("A simple layout component"),S=o("div",{class:"filler"},"Sticky Header",-1),L=o("div",{class:"filler"},"Sticky Header",-1),B=o("div",{class:"filler"},"Sidebar",-1),H=o("div",{class:"filler"},"Main",-1);function w(N,V,$,C,r,D){const d=t("lv-heading"),_=t("lv-layout",!0),v=t("lv-card"),p=t("lv-code"),m=t("component-details"),a=f("space-after");return s(),h(y,null,[l((s(),c(d,{level:3},{default:e(()=>[g]),_:1})),[[a,.5]]),l((s(),c(d,{sub:"",level:6},{default:e(()=>[x]),_:1})),[[a,2]]),l((s(),c(v,null,{default:e(()=>[i(_,{"sticky-header":!1,"sticky-sub-header":!1},{header:e(()=>[S]),"sub-header":e(()=>[L]),sidebar:e(()=>[B]),main:e(()=>[H]),_:1})]),_:1})),[[a,1]]),l(i(p,{lang:"html",code:r.code},null,8,["code"]),[[a,1]]),i(m,{component:"LvLayout"})],64)}const M=u(b,[["render",w]]);export{M as default};
