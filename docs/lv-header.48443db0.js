import{_ as u,b as e,d as g,o as a,c as f,w as c,e as s,f as t,g as o,F as b,h as l}from"./index.37a3cef6.js";const x=`
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
`.trim(),N={data(){return{code:x}}},k=l("Header"),w=l("A predesigned header"),B=l(" My Logo "),H=l(" Navigation ");function L($,y,C,D,d,F){const r=e("lv-heading"),_=e("lv-input"),i=e("lv-button"),p=e("lv-header",!0),v=e("lv-card"),h=e("lv-code"),m=e("component-details"),n=g("space-after");return a(),f(b,null,[c((a(),s(r,{level:3},{default:t(()=>[k]),_:1})),[[n,.5]]),c((a(),s(r,{sub:"",level:6},{default:t(()=>[w]),_:1})),[[n,2]]),c((a(),s(v,null,{default:t(()=>[o(p,null,{branding:t(()=>[B]),search:t(()=>[o(_,{placeholder:"Search docs",icon:"search"})]),navigation:t(()=>[H]),extra:t(()=>[o(i,{icon:"github",color:"ghost-default"})]),_:1})]),_:1})),[[n,1]]),c(o(h,{lang:"html",code:d.code},null,8,["code"]),[[n,1]]),o(m,{component:"LvHeader"})],64)}const S=u(N,[["render",L]]);export{S as default};
