import{_ as b,b as t,d as g,o as n,c as x,w as c,e as a,f as o,g as e,F as k,h as i}from"./index.139a13a1.js";const w=`
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
`.trim(),C={data(){return{code:w}},methods:{onClick(){console.log("YAYYY")}}},D=i("Popover"),E=i("A popup shown when a button is pressed"),y=i("Do some stuff"),Y=i("Do some stuff");function B(O,P,A,F,d,_){const r=t("lv-heading"),s=t("lv-button"),v=t("lv-switch"),m=t("lv-flex"),p=t("lv-popover",!0),f=t("lv-card"),u=t("lv-code"),h=t("component-details"),l=g("space-after");return n(),x(k,null,[c((n(),a(r,{level:3},{default:o(()=>[D]),_:1})),[[l,.5]]),c((n(),a(r,{sub:"",level:6},{default:o(()=>[E]),_:1})),[[l,2]]),c((n(),a(f,null,{default:o(()=>[e(m,null,{default:o(()=>[e(p,{placement:"right",trigger:"mouseenter"},{reference:o(()=>[e(s,{label:"Hover me"})]),content:o(()=>[c((n(),a(r,{level:"5"},{default:o(()=>[y]),_:1})),[[l,1]]),e(m,{direction:"column"},{default:o(()=>[e(v,{label:"Enable something"}),e(s,{label:"Or don't",color:"solid-dimmed-primary"})]),_:1})]),_:1}),e(p,{placement:"bottom",trigger:"click",interactive:""},{reference:o(()=>[e(s,{label:"Click me"})]),content:o(()=>[c((n(),a(r,{level:"5"},{default:o(()=>[Y]),_:1})),[[l,1]]),e(m,{direction:"column"},{default:o(()=>[e(v,{label:"Enable something"}),e(s,{label:"Create console.log",color:"solid-dimmed-primary",onClick:_.onClick},null,8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})),[[l,1]]),c(e(u,{lang:"html",code:d.code},null,8,["code"]),[[l,1]]),e(h,{component:"LvPopover"})],64)}const N=b(C,[["render",B]]);export{N as default};
