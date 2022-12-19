import{_ as u,o as c,c as f,w as a,b as l,d as t,e as o,F as g,f as r,g as e,h as b}from"./index.f26ba42e.js";const x=`
<lv-header>
    <template #branding>
        My Logo
    </template>
    <template #search>
        <lv-input placeholder="Search docs" icon="search"/>
    </template>
    <template #extra>
        <lv-button icon="github" color="light-default" />
    </template>
</lv-header>
`.trim(),k={data(){return{code:x}}},w=r("Header"),B=r("A predesigned header"),H=r(" My Logo ");function L($,y,C,D,d,F){const s=e("lv-heading"),_=e("lv-input"),i=e("lv-button"),p=e("lv-header",!0),h=e("lv-card"),v=e("lv-code"),m=e("component-details"),n=b("space-after");return c(),f(g,null,[a((c(),l(s,{level:3},{default:t(()=>[w]),_:1})),[[n,.5]]),a((c(),l(s,{sub:"",level:6},{default:t(()=>[B]),_:1})),[[n,2]]),a((c(),l(h,null,{default:t(()=>[o(p,null,{branding:t(()=>[H]),search:t(()=>[o(_,{placeholder:"Search docs",icon:"search"})]),extra:t(()=>[o(i,{icon:"github",color:"ghost-default"})]),_:1})]),_:1})),[[n,1]]),a(o(v,{lang:"html",code:d.code},null,8,["code"]),[[n,1]]),o(m,{component:"LvHeader"})],64)}const N=u(k,[["render",L]]);export{N as default};
