import{_ as A,b as s,d as U,o as a,c as x,w as i,e as p,f as n,g as e,F as B,h as v}from"./index-9aa14228.js";const C=`
<lv-flex>
    <lv-toggle-group>
        <lv-toggle v-model="pressedAlignLeft">
            <lv-icon name="align-left"/>
        </lv-toggle>
        <lv-toggle v-model="pressedAlignCenter">
            <lv-icon name="align-center"/>
        </lv-toggle>
        <lv-toggle v-model="pressedAlignRight">
            <lv-icon name="align-right"/>
        </lv-toggle>
    </lv-toggle-group>
    <lv-toggle-group>
        <lv-toggle v-model="pressedItalic">
            <lv-icon name="italic"/>
        </lv-toggle>
        <lv-toggle v-model="pressedBold">
            <lv-icon name="bold"/>
        </lv-toggle>
        <lv-toggle v-model="pressedUnderline">
            <lv-icon name="link"/>
        </lv-toggle>
    </lv-toggle-group>
</lv-flex>
`.trim(),b={data(){return{code:C,pressedItalic:!1,pressedAlign:!1,pressedAlignLeft:!1,pressedAlignCenter:!1,pressedAlignRight:!1,pressedBold:!1,pressedUnderline:!1}}};function k(L,o,I,R,l,T){const m=s("lv-heading"),d=s("lv-icon"),g=s("lv-toggle"),u=s("lv-toggle-group",!0),c=s("lv-flex"),f=s("lv-card"),_=s("lv-code"),V=s("component-details"),r=U("space-after");return a(),x(B,null,[i((a(),p(m,{level:3},{default:n(()=>[v("Toggle Group")]),_:1})),[[r,.5]]),i((a(),p(m,{sub:"",level:6},{default:n(()=>[v("A group of toggle buttons")]),_:1})),[[r,2]]),i((a(),p(f,null,{default:n(()=>[e(c,null,{default:n(()=>[e(u,null,{default:n(()=>[e(g,{modelValue:l.pressedAlignLeft,"onUpdate:modelValue":o[0]||(o[0]=t=>l.pressedAlignLeft=t)},{default:n(()=>[e(d,{name:"align-left"})]),_:1},8,["modelValue"]),e(g,{modelValue:l.pressedAlignCenter,"onUpdate:modelValue":o[1]||(o[1]=t=>l.pressedAlignCenter=t)},{default:n(()=>[e(d,{name:"align-center"})]),_:1},8,["modelValue"]),e(g,{modelValue:l.pressedAlignRight,"onUpdate:modelValue":o[2]||(o[2]=t=>l.pressedAlignRight=t)},{default:n(()=>[e(d,{name:"align-right"})]),_:1},8,["modelValue"])]),_:1}),e(u,null,{default:n(()=>[e(g,{modelValue:l.pressedItalic,"onUpdate:modelValue":o[3]||(o[3]=t=>l.pressedItalic=t)},{default:n(()=>[e(d,{name:"italic"})]),_:1},8,["modelValue"]),e(g,{modelValue:l.pressedBold,"onUpdate:modelValue":o[4]||(o[4]=t=>l.pressedBold=t)},{default:n(()=>[e(d,{name:"bold"})]),_:1},8,["modelValue"]),e(g,{modelValue:l.pressedUnderline,"onUpdate:modelValue":o[5]||(o[5]=t=>l.pressedUnderline=t)},{default:n(()=>[e(d,{name:"link"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})),[[r,1]]),i(e(_,{code:l.code,lang:"html"},null,8,["code"]),[[r,1]]),e(V,{component:"LvToggleGroup"})],64)}const G=A(b,[["render",k]]);export{G as default};
