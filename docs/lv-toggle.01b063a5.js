import{_ as V,o as c,c as x,w as a,b as _,d as o,e,F as h,f as p,g as l,h as A}from"./index.3def5b28.js";const b=`
<lv-toggle v-model="pressedItalic">
    <lv-icon name="italic"/>
</lv-toggle>
<lv-toggle v-model="pressedAlign">
    <lv-icon name="align-left"/>
</lv-toggle>
`.trim(),I={data(){return{code:b,pressedItalic:!1,pressedAlign:!1}}},T=p("Toggle"),k=p("A toggleable button");function w(B,n,C,D,t,F){const i=l("lv-heading"),r=l("lv-icon"),g=l("lv-toggle",!0),m=l("lv-flex"),v=l("lv-card"),u=l("lv-code"),f=l("component-details"),s=A("space-after");return c(),x(h,null,[a((c(),_(i,{level:3},{default:o(()=>[T]),_:1})),[[s,.5]]),a((c(),_(i,{sub:"",level:6},{default:o(()=>[k]),_:1})),[[s,2]]),a((c(),_(v,null,{default:o(()=>[e(m,null,{default:o(()=>[e(g,{modelValue:t.pressedItalic,"onUpdate:modelValue":n[0]||(n[0]=d=>t.pressedItalic=d)},{default:o(()=>[e(r,{name:"italic"})]),_:1},8,["modelValue"]),e(g,{modelValue:t.pressedAlign,"onUpdate:modelValue":n[1]||(n[1]=d=>t.pressedAlign=d)},{default:o(()=>[e(r,{name:"align-left"})]),_:1},8,["modelValue"])]),_:1})]),_:1})),[[s,1]]),a(e(u,{code:t.code,lang:"html"},null,8,["code"]),[[s,1]]),e(f,{component:"LvToggle"})],64)}const U=V(I,[["render",w]]);export{U as default};
