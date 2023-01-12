import{_ as f,b as n,d as g,o as c,c as b,w as l,e as a,f as o,g as e,F as h,h as _}from"./index-62ef1cf1.js";const x=`
<lv-badge text="hello" />
<lv-badge text="hello" color="solid-warning" />
<lv-badge text="hello" color="solid-dimmed-success" />
`.trim(),B=`
<lv-badge text="hello">
    <lv-button label="Im a button"/>
</lv-badge>
`.trim(),w={data(){return{codeDefault:x,codeSlotted:B}}};function D(S,k,C,F,r,I){const s=n("lv-heading"),d=n("lv-badge",!0),v=n("lv-flex"),u=n("lv-card"),i=n("lv-code"),m=n("lv-button"),p=n("component-details"),t=g("space-after");return c(),b(h,null,[l((c(),a(s,{level:3},{default:o(()=>[_("Badge")]),_:1})),[[t,.5]]),l((c(),a(s,{sub:"",level:6},{default:o(()=>[_("A simple badge component")]),_:1})),[[t,2]]),l((c(),a(s,{level:6},{default:o(()=>[_("Standalone")]),_:1})),[[t,1]]),l((c(),a(u,null,{default:o(()=>[e(v,null,{default:o(()=>[e(d,{text:"hello"}),e(d,{text:"hello",color:"solid-warning"}),e(d,{text:"hello",color:"solid-dimmed-success"}),e(d,{text:"hello",color:"outline-info"})]),_:1})]),_:1})),[[t,1]]),l(e(i,{lang:"html",code:r.codeDefault},null,8,["code"]),[[t,1]]),l((c(),a(s,{level:6},{default:o(()=>[_("Slotted")]),_:1})),[[t,1]]),l((c(),a(u,null,{default:o(()=>[e(d,{text:"hello"},{default:o(()=>[e(m,{label:"Im a button"})]),_:1})]),_:1})),[[t,1]]),l(e(i,{lang:"html",code:r.codeSlotted},null,8,["code"]),[[t,1]]),e(p,{component:"LvBadge"})],64)}const V=f(w,[["render",D]]);export{V as default};
