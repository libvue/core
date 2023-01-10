import{_ as h,b as t,d as b,o as n,c as f,w as s,e as c,f as e,g as o,F as y,h as a}from"./index-fe684972.js";const g=`
<lv-layout :sticky-header="false" :sticky-sub-header="false">
    <template #header>
        <lv-header>
            <template #branding>Logo</template>
            <template #navigation>Navigation</template>
        </lv-header>
    </template>
    <template #sub-header>
        <lv-sub-header>
            Subheader
        </lv-sub-header>
    </template>
    <template #sidebar>
        Sidebar
    </template>
    <template #main>
        Content
    </template>
</lv-layout>
`.trim(),x={data(){return{code:g}}};function L(k,C,N,S,r,w){const _=t("lv-heading"),d=t("lv-header"),i=t("lv-sub-header"),u=t("lv-layout",!0),p=t("lv-card"),v=t("lv-code"),m=t("component-details"),l=b("space-after");return n(),f(y,null,[s((n(),c(_,{level:3},{default:e(()=>[a("Layout")]),_:1})),[[l,.5]]),s((n(),c(_,{sub:"",level:6},{default:e(()=>[a("A simple layout component")]),_:1})),[[l,2]]),s((n(),c(p,null,{default:e(()=>[o(u,{class:"fixed-z-index","sticky-header":!1,"sticky-sub-header":!1},{header:e(()=>[o(d,null,{branding:e(()=>[a("Logo")]),navigation:e(()=>[a("Navigation")]),_:1})]),"sub-header":e(()=>[o(i,null,{default:e(()=>[a(" Subheader ")]),_:1})]),sidebar:e(()=>[a(" Sidebar ")]),main:e(()=>[a(" Content ")]),_:1})]),_:1})),[[l,1]]),s(o(v,{lang:"html",code:r.code},null,8,["code"]),[[l,1]]),o(m,{component:"LvLayout"})],64)}const $=h(x,[["render",L]]);export{$ as default};
