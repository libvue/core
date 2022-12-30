import{_ as h,o as i,c as S,w as n,b as c,d as o,e as a,f as s,t as u,F as k,g as p,h as M}from"./index.5a8dd38e.js";const V=`
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
`.trim(),B={components:{},data(){return{codeSingle:V,codeMultiple:x,modelSingle:null,modelMultiple:[],activeTab:"multiple",tabs:[{id:"single",title:"Single",icon:"box"},{id:"multiple",title:"Multiple",icon:"tags"}],options:[{label:"Bomb",value:1,icon:"bomb"},{label:"Bookmark",value:2,icon:"bookmark"},{label:"Bot",value:3,icon:"bot"},{label:"Citrus",value:4,icon:"citrus"},{label:"Cookie",value:5,icon:"cookie"},{label:"Croissant",value:6,icon:"croissant"},{label:"Disc",value:7,icon:"disc"}]}}},C=s("Select"),T=s("Select a single or multiple items");function D(w,m,F,N,l,U){const d=p("lv-heading"),v=p("lv-icon"),r=p("lv-select",!0),_=p("lv-card"),b=p("lv-code"),g=p("lv-tabs"),f=p("component-details"),t=M("space-after");return i(),S(k,null,[n((i(),c(d,{level:3},{default:o(()=>[C]),_:1})),[[t,.5]]),n((i(),c(d,{sub:"",level:6},{default:o(()=>[T]),_:1})),[[t,2]]),n((i(),c(g,{tabs:l.tabs,active:l.activeTab,onChangeTab:m[2]||(m[2]=e=>l.activeTab=e)},{single:o(()=>[n((i(),c(_,null,{default:o(()=>[n((i(),c(r,{modelValue:l.modelSingle,"onUpdate:modelValue":m[0]||(m[0]=e=>l.modelSingle=e),options:l.options},{value:o(({option:e})=>[a(v,{name:e.icon,push:.5},null,8,["name"]),s(" "+u(e.label),1)]),option:o(({option:e})=>[a(v,{name:e.icon,push:.5},null,8,["name"]),s(" "+u(e.label),1)]),_:1},8,["modelValue","options"])),[[t,1]]),s(" v-model: "+u(l.modelSingle),1)]),_:1})),[[t,1]]),n(a(b,{code:l.codeSingle,lang:"html"},null,8,["code"]),[[t,1]])]),multiple:o(()=>[n((i(),c(_,null,{default:o(()=>[n((i(),c(r,{modelValue:l.modelMultiple,"onUpdate:modelValue":m[1]||(m[1]=e=>l.modelMultiple=e),options:l.options,multiple:""},{value:o(({option:e})=>[a(v,{name:e.icon,push:.5},null,8,["name"]),s(" "+u(e.label),1)]),option:o(({option:e})=>[a(v,{name:e.icon,push:.5},null,8,["name"]),s(" "+u(e.label),1)]),_:1},8,["modelValue","options"])),[[t,1]]),s(" v-model: "+u(l.modelMultiple),1)]),_:1})),[[t,1]]),n(a(b,{code:l.codeMultiple,lang:"html"},null,8,["code"]),[[t,1]])]),_:1},8,["tabs","active"])),[[t,1]]),a(f,{component:"LvSelect"})],64)}const E=h(B,[["render",D]]);export{E as default};
