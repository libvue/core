import{_ as V,b as e,d as x,o as c,c as A,w as a,e as r,f as o,g as l,F as b,h as p}from"./index-7e29f8da.js";const I=`
<lv-toggle v-model="pressedItalic">
    <lv-icon name="italic"/>
</lv-toggle>
<lv-toggle v-model="pressedAlign">
    <lv-icon name="align-left"/>
</lv-toggle>
`.trim(),T={data(){return{code:I,pressedItalic:!1,pressedAlign:!1}}};function h(k,n,w,B,t,C){const i=e("lv-heading"),_=e("lv-icon"),g=e("lv-toggle",!0),m=e("lv-flex"),v=e("lv-card"),u=e("lv-code"),f=e("component-details"),s=x("space-after");return c(),A(b,null,[a((c(),r(i,{level:3},{default:o(()=>[p("Toggle")]),_:1})),[[s,.5]]),a((c(),r(i,{sub:"",level:6},{default:o(()=>[p("A toggleable button")]),_:1})),[[s,2]]),a((c(),r(v,null,{default:o(()=>[l(m,null,{default:o(()=>[l(g,{modelValue:t.pressedItalic,"onUpdate:modelValue":n[0]||(n[0]=d=>t.pressedItalic=d)},{default:o(()=>[l(_,{name:"italic"})]),_:1},8,["modelValue"]),l(g,{modelValue:t.pressedAlign,"onUpdate:modelValue":n[1]||(n[1]=d=>t.pressedAlign=d)},{default:o(()=>[l(_,{name:"align-left"})]),_:1},8,["modelValue"])]),_:1})]),_:1})),[[s,1]]),a(l(u,{code:t.code,lang:"html"},null,8,["code"]),[[s,1]]),l(f,{component:"LvToggle"})],64)}const F=V(T,[["render",h]]);export{F as default};
