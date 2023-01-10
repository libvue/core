import{_ as S,b as c,d as h,o as i,c as k,w as n,e as s,f as o,g as p,F as M,h as a,t as u}from"./index-fe684972.js";const V=`
<lv-select v-model="modelSingle" :options="options">
    <template #value="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
    <template #option="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
</lv-select>
`.trim(),x=`
<lv-select v-model="modelMultiple" :options="options" multiple>
    <template #value="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
    <template #option="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
</lv-select>
`.trim(),B={components:{},data(){return{codeSingle:V,codeMultiple:x,modelSingle:null,modelMultiple:[],activeTab:"single",tabs:[{id:"single",title:"Single",icon:"box"},{id:"multiple",title:"Multiple",icon:"tags"}],options:[{label:"Bomb",value:1,icon:"bomb"},{label:"Bookmark",value:2,icon:"bookmark"},{label:"Bot",value:3,icon:"bot"},{label:"Citrus",value:4,icon:"citrus"},{label:"Cookie",value:5,icon:"cookie"},{label:"Croissant",value:6,icon:"croissant"},{label:"Disc",value:7,icon:"disc"}]}}};function C(T,m,D,w,l,F){const d=c("lv-heading"),v=c("lv-icon"),r=c("lv-select",!0),_=c("lv-card"),b=c("lv-code"),g=c("lv-tabs"),f=c("component-details"),t=h("space-after");return i(),k(M,null,[n((i(),s(d,{level:3},{default:o(()=>[a("Select")]),_:1})),[[t,.5]]),n((i(),s(d,{sub:"",level:6},{default:o(()=>[a("Select a single or multiple items")]),_:1})),[[t,2]]),n((i(),s(g,{tabs:l.tabs,active:l.activeTab,onChangeTab:m[2]||(m[2]=e=>l.activeTab=e)},{single:o(()=>[n((i(),s(_,null,{default:o(()=>[n((i(),s(r,{modelValue:l.modelSingle,"onUpdate:modelValue":m[0]||(m[0]=e=>l.modelSingle=e),options:l.options},{value:o(({option:e})=>[p(v,{name:e.icon,push:.5},null,8,["name"]),a(" "+u(e.label),1)]),option:o(({option:e})=>[p(v,{name:e.icon,push:.5},null,8,["name"]),a(" "+u(e.label),1)]),_:1},8,["modelValue","options"])),[[t,1]]),a(" v-model: "+u(l.modelSingle),1)]),_:1})),[[t,1]]),n(p(b,{code:l.codeSingle,lang:"html"},null,8,["code"]),[[t,1]])]),multiple:o(()=>[n((i(),s(_,null,{default:o(()=>[n((i(),s(r,{modelValue:l.modelMultiple,"onUpdate:modelValue":m[1]||(m[1]=e=>l.modelMultiple=e),options:l.options,multiple:""},{value:o(({option:e})=>[p(v,{name:e.icon,push:.5},null,8,["name"]),a(" "+u(e.label),1)]),option:o(({option:e})=>[p(v,{name:e.icon,push:.5},null,8,["name"]),a(" "+u(e.label),1)]),_:1},8,["modelValue","options"])),[[t,1]]),a(" v-model: "+u(l.modelMultiple),1)]),_:1})),[[t,1]]),n(p(b,{code:l.codeMultiple,lang:"html"},null,8,["code"]),[[t,1]])]),_:1},8,["tabs","active"])),[[t,1]]),p(f,{component:"LvSelect"})],64)}const U=S(B,[["render",C]]);export{U as default};
