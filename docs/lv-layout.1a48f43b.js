import{_ as h,b as t,d as b,o as l,c as f,w as s,e as _,f as e,g as o,F as y,h as a}from"./index.37a3cef6.js";const g=`
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
`.trim(),x={data(){return{code:g}}},L=a("Layout"),k=a("A simple layout component"),C=a("Logo"),N=a("Navigation"),S=a(" Subheader "),w=a(" Sidebar "),B=a(" Content ");function $(D,F,V,z,d,A){const c=t("lv-heading"),r=t("lv-header"),i=t("lv-sub-header"),u=t("lv-layout",!0),p=t("lv-card"),v=t("lv-code"),m=t("component-details"),n=b("space-after");return l(),f(y,null,[s((l(),_(c,{level:3},{default:e(()=>[L]),_:1})),[[n,.5]]),s((l(),_(c,{sub:"",level:6},{default:e(()=>[k]),_:1})),[[n,2]]),s((l(),_(p,null,{default:e(()=>[o(u,{class:"fixed-z-index","sticky-header":!1,"sticky-sub-header":!1},{header:e(()=>[o(r,null,{branding:e(()=>[C]),navigation:e(()=>[N]),_:1})]),"sub-header":e(()=>[o(i,null,{default:e(()=>[S]),_:1})]),sidebar:e(()=>[w]),main:e(()=>[B]),_:1})]),_:1})),[[n,1]]),s(o(v,{lang:"html",code:d.code},null,8,["code"]),[[n,1]]),o(m,{component:"LvLayout"})],64)}const T=h(x,[["render",$]]);export{T as default};
