import{_ as V,b as e,d as x,o as c,c as h,w as a,e as _,f as o,g as l,F as A,h as p}from"./index.fff357f5.js";const b=`
<lv-toggle v-model="pressedItalic">
    <lv-icon name="italic"/>
</lv-toggle>
<lv-toggle v-model="pressedAlign">
    <lv-icon name="align-left"/>
</lv-toggle>
`.trim(),I={data(){return{code:b,pressedItalic:!1,pressedAlign:!1}}},T=p("Toggle"),k=p("A toggleable button");function w(B,n,C,D,t,F){const i=e("lv-heading"),r=e("lv-icon"),g=e("lv-toggle",!0),m=e("lv-flex"),v=e("lv-card"),u=e("lv-code"),f=e("component-details"),s=x("space-after");return c(),h(A,null,[a((c(),_(i,{level:3},{default:o(()=>[T]),_:1})),[[s,.5]]),a((c(),_(i,{sub:"",level:6},{default:o(()=>[k]),_:1})),[[s,2]]),a((c(),_(v,null,{default:o(()=>[l(m,null,{default:o(()=>[l(g,{modelValue:t.pressedItalic,"onUpdate:modelValue":n[0]||(n[0]=d=>t.pressedItalic=d)},{default:o(()=>[l(r,{name:"italic"})]),_:1},8,["modelValue"]),l(g,{modelValue:t.pressedAlign,"onUpdate:modelValue":n[1]||(n[1]=d=>t.pressedAlign=d)},{default:o(()=>[l(r,{name:"align-left"})]),_:1},8,["modelValue"])]),_:1})]),_:1})),[[s,1]]),a(l(u,{code:t.code,lang:"html"},null,8,["code"]),[[s,1]]),l(f,{component:"LvToggle"})],64)}const U=V(I,[["render",w]]);export{U as default};
