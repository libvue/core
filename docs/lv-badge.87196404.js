import{_ as f,b as n,d as h,o as c,c as g,w as o,e as a,f as l,g as e,F as b,h as _}from"./index.8c5ff4d0.js";const x=`
<lv-badge text="hello" />
<lv-badge text="hello" color="solid-warning" />
<lv-badge text="hello" color="solid-dimmed-success" />
`.trim(),B=`
<lv-badge text="hello">
    <lv-button label="Im a button"/>
</lv-badge>
`.trim(),w={data(){return{codeDefault:x,codeSlotted:B}}},D=_("Badge"),S=_("A simple badge component"),k=_("Standalone"),C=_("Slotted");function F(I,N,V,$,r,A){const s=n("lv-heading"),d=n("lv-badge",!0),v=n("lv-flex"),i=n("lv-card"),u=n("lv-code"),m=n("lv-button"),p=n("component-details"),t=h("space-after");return c(),g(b,null,[o((c(),a(s,{level:3},{default:l(()=>[D]),_:1})),[[t,.5]]),o((c(),a(s,{sub:"",level:6},{default:l(()=>[S]),_:1})),[[t,2]]),o((c(),a(s,{level:6},{default:l(()=>[k]),_:1})),[[t,1]]),o((c(),a(i,null,{default:l(()=>[e(v,null,{default:l(()=>[e(d,{text:"hello"}),e(d,{text:"hello",color:"solid-warning"}),e(d,{text:"hello",color:"solid-dimmed-success"}),e(d,{text:"hello",color:"outline-info"})]),_:1})]),_:1})),[[t,1]]),o(e(u,{lang:"html",code:r.codeDefault},null,8,["code"]),[[t,1]]),o((c(),a(s,{level:6},{default:l(()=>[C]),_:1})),[[t,1]]),o((c(),a(i,null,{default:l(()=>[e(d,{text:"hello"},{default:l(()=>[e(m,{label:"Im a button"})]),_:1})]),_:1})),[[t,1]]),o(e(u,{lang:"html",code:r.codeSlotted},null,8,["code"]),[[t,1]]),e(p,{component:"LvBadge"})],64)}const L=f(w,[["render",F]]);export{L as default};
