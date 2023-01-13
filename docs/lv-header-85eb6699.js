import{_ as u,b as e,d as g,o as n,c as f,w as c,e as r,f as t,g as o,F as b,h as l}from"./index-71bd3e8c.js";const x=`
<lv-header>
    <template #branding>
        My Logo
    </template>
    <template #search>
        <lv-input placeholder="Search docs" icon="search"/>
    </template>
    <template #navigation>
        Navigation
    </template>
    <template #extra>
        <lv-button icon="github" color="ghost-default" />
    </template>
</lv-header>
`.trim(),N={data(){return{code:x}}};function k(w,B,H,L,d,$){const s=e("lv-heading"),i=e("lv-input"),_=e("lv-button"),p=e("lv-header",!0),v=e("lv-card"),m=e("lv-code"),h=e("component-details"),a=g("space-after");return n(),f(b,null,[c((n(),r(s,{level:3},{default:t(()=>[l("Header")]),_:1})),[[a,.5]]),c((n(),r(s,{sub:"",level:6},{default:t(()=>[l("A predesigned header")]),_:1})),[[a,2]]),c((n(),r(v,null,{default:t(()=>[o(p,null,{branding:t(()=>[l(" My Logo ")]),search:t(()=>[o(i,{placeholder:"Search docs",icon:"search"})]),navigation:t(()=>[l(" Navigation ")]),extra:t(()=>[o(_,{icon:"github",color:"ghost-default"})]),_:1})]),_:1})),[[a,1]]),c(o(m,{lang:"html",code:d.code},null,8,["code"]),[[a,1]]),o(h,{component:"LvHeader"})],64)}const C=u(N,[["render",k]]);export{C as default};
