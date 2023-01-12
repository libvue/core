import{_ as S,b as u,d as f,o as a,c as V,w as t,e as s,f as o,g as c,F as M,h as i,t as m}from"./index-62ef1cf1.js";const k=`
<lv-select v-model="modelSingle" :options="options">
    <template #value="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
    <template #option="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
</lv-select>
`.trim(),C=`
<lv-select v-model="modelMultiple" :options="options" multiple>
    <template #value="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
    <template #option="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
</lv-select>
`.trim(),B={components:{},data(){return{codeSingle:k,codeMultiple:C,modelSingle:null,modelMultiple:[],modelSearch:null,activeTab:"single",tabs:[{id:"single",title:"Single",icon:"box"},{id:"multiple",title:"Multiple",icon:"tags"},{id:"search",title:"Searchable",icon:"search"}],options:[{label:"Bomb",value:1,icon:"bomb"},{label:"Bookmark",value:2,icon:"bookmark"},{label:"Bot",value:3,icon:"bot"},{label:"Brush",value:8,icon:"brush"},{label:"Camera",value:9,icon:"camera"},{label:"Cat",value:10,icon:"cat"},{label:"Cigarette",value:11,icon:"cigarette"},{label:"Citrus",value:4,icon:"citrus"},{label:"Cookie",value:5,icon:"cookie"},{label:"Croissant",value:6,icon:"croissant"},{label:"Database",value:13,icon:"database"},{label:"Disc",value:7,icon:"disc"},{label:"Dog",value:14,icon:"dog"}]}}};function x(D,p,T,w,l,U){const _=u("lv-heading"),v=u("lv-icon"),d=u("lv-select",!0),r=u("lv-card"),b=u("lv-code"),g=u("lv-tabs"),h=u("component-details"),n=f("space-after");return a(),V(M,null,[t((a(),s(_,{level:3},{default:o(()=>[i("Select")]),_:1})),[[n,.5]]),t((a(),s(_,{sub:"",level:6},{default:o(()=>[i("Select a single or multiple items")]),_:1})),[[n,2]]),t((a(),s(g,{tabs:l.tabs,active:l.activeTab,onChangeTab:p[3]||(p[3]=e=>l.activeTab=e)},{single:o(()=>[t((a(),s(r,null,{default:o(()=>[t((a(),s(d,{modelValue:l.modelSingle,"onUpdate:modelValue":p[0]||(p[0]=e=>l.modelSingle=e),options:l.options},{value:o(({option:e})=>[c(v,{name:e.icon,push:.5},null,8,["name"]),i(" "+m(e.label),1)]),option:o(({option:e})=>[c(v,{name:e.icon,push:.5},null,8,["name"]),i(" "+m(e.label),1)]),_:1},8,["modelValue","options"])),[[n,1]]),i(" v-model: "+m(l.modelSingle),1)]),_:1})),[[n,1]]),t(c(b,{code:l.codeSingle,lang:"html"},null,8,["code"]),[[n,1]])]),multiple:o(()=>[t((a(),s(r,null,{default:o(()=>[t((a(),s(d,{modelValue:l.modelMultiple,"onUpdate:modelValue":p[1]||(p[1]=e=>l.modelMultiple=e),options:l.options,multiple:""},{value:o(({option:e})=>[c(v,{name:e.icon,push:.5},null,8,["name"]),i(" "+m(e.label),1)]),option:o(({option:e})=>[c(v,{name:e.icon,push:.5},null,8,["name"]),i(" "+m(e.label),1)]),_:1},8,["modelValue","options"])),[[n,1]]),i(" v-model: "+m(l.modelMultiple),1)]),_:1})),[[n,1]]),t(c(b,{code:l.codeMultiple,lang:"html"},null,8,["code"]),[[n,1]])]),search:o(()=>[t((a(),s(r,null,{default:o(()=>[t((a(),s(d,{modelValue:l.modelSearch,"onUpdate:modelValue":p[2]||(p[2]=e=>l.modelSearch=e),options:l.options,searchable:""},{value:o(({option:e})=>[c(v,{name:e.icon,push:.5},null,8,["name"]),i(" "+m(e.label),1)]),option:o(({option:e})=>[c(v,{name:e.icon,push:.5},null,8,["name"]),i(" "+m(e.label),1)]),_:1},8,["modelValue","options"])),[[n,1]]),i(" v-model: "+m(l.modelMultiple),1)]),_:1})),[[n,1]]),t(c(b,{code:l.codeMultiple,lang:"html"},null,8,["code"]),[[n,1]])]),_:1},8,["tabs","active"])),[[n,1]]),c(h,{component:"LvSelect"})],64)}const N=S(B,[["render",x]]);export{N as default};
