import{_ as g,b as o,d as h,o as n,c as x,w as c,e as a,f as l,g as e,F as k,h as i}from"./index-dea56d21.js";const w=`
<lv-flex>
    <lv-popover placement="right" trigger="mouseenter">
        <template #reference>
            <lv-button label="Hover me"/>
        </template>
        <template #content>
            <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
            <lv-flex direction="column">
                <lv-switch label="Enable something"/>
                <lv-button label="Or don't" color="solid-dimmed-primary"/>
            </lv-flex>
        </template>
    </lv-popover>

    <lv-popover placement="bottom" trigger="click">
        <template #reference>
            <lv-button label="Click me"/>
        </template>
        <template #content>
            <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
            <lv-flex direction="column">
                <lv-switch label="Enable something"/>
                <lv-button label="Or don't" color="solid-dimmed-primary"/>
            </lv-flex>
        </template>
    </lv-popover>
</lv-flex>
`.trim(),C={data(){return{code:w}},methods:{onClick(){console.log("YAYYY")}}};function D(E,y,Y,B,d,_){const r=o("lv-heading"),s=o("lv-button"),v=o("lv-switch"),m=o("lv-flex"),p=o("lv-popover",!0),f=o("lv-card"),u=o("lv-code"),b=o("component-details"),t=h("space-after");return n(),x(k,null,[c((n(),a(r,{level:3},{default:l(()=>[i("Popover")]),_:1})),[[t,.5]]),c((n(),a(r,{sub:"",level:6},{default:l(()=>[i("A popup shown when a button is pressed")]),_:1})),[[t,2]]),c((n(),a(f,null,{default:l(()=>[e(m,null,{default:l(()=>[e(p,{placement:"right",trigger:"mouseenter"},{reference:l(()=>[e(s,{label:"Hover me"})]),content:l(()=>[c((n(),a(r,{level:"5"},{default:l(()=>[i("Do some stuff")]),_:1})),[[t,1]]),e(m,{direction:"column"},{default:l(()=>[e(v,{label:"Enable something"}),e(s,{label:"Or don't",color:"solid-dimmed-primary"})]),_:1})]),_:1}),e(p,{placement:"bottom",trigger:"click",interactive:""},{reference:l(()=>[e(s,{label:"Click me"})]),content:l(()=>[c((n(),a(r,{level:"5"},{default:l(()=>[i("Do some stuff")]),_:1})),[[t,1]]),e(m,{direction:"column"},{default:l(()=>[e(v,{label:"Enable something"}),e(s,{label:"Create console.log",color:"solid-dimmed-primary",onClick:_.onClick},null,8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})),[[t,1]]),c(e(u,{lang:"html",code:d.code},null,8,["code"]),[[t,1]]),e(b,{component:"LvPopover"})],64)}const P=g(C,[["render",D]]);export{P as default};
