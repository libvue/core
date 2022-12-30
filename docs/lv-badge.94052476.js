import{_ as f,o as n,c as h,w as o,b as a,d as l,e,F as g,f as _,g as c,h as b}from"./index.5a8dd38e.js";const x=`
<lv-badge text="hello" />
<lv-badge text="hello" color="solid-warning" />
<lv-badge text="hello" color="solid-dimmed-success" />
`.trim(),B=`
<lv-badge text="hello">
    <lv-button label="Im a button"/>
</lv-badge>
`.trim(),w={data(){return{codeDefault:x,codeSlotted:B}}},D=_("Badge"),S=_("A simple badge component"),k=_("Standalone"),C=_("Slotted");function F(I,N,V,$,r,A){const s=c("lv-heading"),d=c("lv-badge",!0),v=c("lv-flex"),i=c("lv-card"),u=c("lv-code"),m=c("lv-button"),p=c("component-details"),t=b("space-after");return n(),h(g,null,[o((n(),a(s,{level:3},{default:l(()=>[D]),_:1})),[[t,.5]]),o((n(),a(s,{sub:"",level:6},{default:l(()=>[S]),_:1})),[[t,2]]),o((n(),a(s,{level:6},{default:l(()=>[k]),_:1})),[[t,1]]),o((n(),a(i,null,{default:l(()=>[e(v,null,{default:l(()=>[e(d,{text:"hello"}),e(d,{text:"hello",color:"solid-warning"}),e(d,{text:"hello",color:"solid-dimmed-success"}),e(d,{text:"hello",color:"outline-info"})]),_:1})]),_:1})),[[t,1]]),o(e(u,{lang:"html",code:r.codeDefault},null,8,["code"]),[[t,1]]),o((n(),a(s,{level:6},{default:l(()=>[C]),_:1})),[[t,1]]),o((n(),a(i,null,{default:l(()=>[e(d,{text:"hello"},{default:l(()=>[e(m,{label:"Im a button"})]),_:1})]),_:1})),[[t,1]]),o(e(u,{lang:"html",code:r.codeSlotted},null,8,["code"]),[[t,1]]),e(p,{component:"LvBadge"})],64)}const L=f(w,[["render",F]]);export{L as default};
