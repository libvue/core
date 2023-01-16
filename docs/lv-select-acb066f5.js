import{_ as S,b as m,d as f,o as a,c as V,w as t,e as i,f as n,g as u,F as k,h as s,t as p}from"./index-5cc4372f.js";const C=`
<lv-select v-model="modelSingle" :options="options">
    <template #value="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
</lv-select>
`.trim(),M=`
<lv-select v-model="modelMultiple" :options="options" multiple>
    <template #value="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
</lv-select>
`.trim(),B=`
<lv-select v-model="modelSearch" :options="options" searchable>
    <template #value="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
</lv-select>
`.trim(),x={components:{},data(){return{codeSingle:C,codeMultiple:M,codeSearch:B,modelSingle:null,modelMultiple:[],modelSearch:null,activeTab:"multiple",tabs:[{id:"single",title:"Single",icon:"box"},{id:"multiple",title:"Multiple",icon:"tags"},{id:"search",title:"Searchable",icon:"search"}],options:[{label:"Bomb",value:1,icon:"bomb"},{label:"Bookmark",value:2,icon:"bookmark"},{label:"Bot",value:3,icon:"bot"},{label:"Brush",value:8,icon:"brush"},{label:"Camera",value:9,icon:"camera"},{label:"Cat",value:10,icon:"cat"},{label:"Cigarette",value:11,icon:"cigarette"},{label:"Citrus",value:4,icon:"citrus"},{label:"Cookie",value:5,icon:"cookie"},{label:"Croissant",value:6,icon:"croissant"},{label:"Database",value:13,icon:"database"},{label:"Disc",value:7,icon:"disc"},{label:"Dog",value:14,icon:"dog"}]}}};function D(T,c,w,U,e,F){const _=m("lv-heading"),v=m("lv-icon"),r=m("lv-select",!0),d=m("lv-card"),b=m("lv-code"),g=m("lv-tabs"),h=m("component-details"),o=f("space-after");return a(),V(k,null,[t((a(),i(_,{level:3},{default:n(()=>[s("Select")]),_:1})),[[o,.5]]),t((a(),i(_,{sub:"",level:6},{default:n(()=>[s("Select a single or multiple items")]),_:1})),[[o,2]]),t((a(),i(g,{tabs:e.tabs,active:e.activeTab,onChangeTab:c[3]||(c[3]=l=>e.activeTab=l)},{single:n(()=>[t((a(),i(d,null,{default:n(()=>[t((a(),i(r,{modelValue:e.modelSingle,"onUpdate:modelValue":c[0]||(c[0]=l=>e.modelSingle=l),options:e.options},{value:n(({option:l})=>[u(v,{name:l.icon,push:.5},null,8,["name"]),s(" "+p(l.label),1)]),_:1},8,["modelValue","options"])),[[o,1]]),s(" v-model: "+p(e.modelSingle),1)]),_:1})),[[o,1]]),t(u(b,{code:e.codeSingle,lang:"html"},null,8,["code"]),[[o,1]])]),multiple:n(()=>[t((a(),i(d,null,{default:n(()=>[t((a(),i(r,{modelValue:e.modelMultiple,"onUpdate:modelValue":c[1]||(c[1]=l=>e.modelMultiple=l),options:e.options,multiple:"",searchable:""},{value:n(({option:l})=>[u(v,{name:l.icon,push:.5},null,8,["name"]),s(" "+p(l.label),1)]),_:1},8,["modelValue","options"])),[[o,1]]),s(" v-model: "+p(e.modelMultiple),1)]),_:1})),[[o,1]]),t(u(b,{code:e.codeMultiple,lang:"html"},null,8,["code"]),[[o,1]])]),search:n(()=>[t((a(),i(d,null,{default:n(()=>[t((a(),i(r,{modelValue:e.modelSearch,"onUpdate:modelValue":c[2]||(c[2]=l=>e.modelSearch=l),options:e.options,searchable:""},{value:n(({option:l})=>[u(v,{name:l.icon,push:.5},null,8,["name"]),s(" "+p(l.label),1)]),_:1},8,["modelValue","options"])),[[o,1]]),s(" v-model: "+p(e.modelSearch),1)]),_:1})),[[o,1]]),t(u(b,{code:e.codeSearch,lang:"html"},null,8,["code"]),[[o,1]])]),_:1},8,["tabs","active"])),[[o,1]]),u(h,{component:"LvSelect"})],64)}const y=S(x,[["render",D]]);export{y as default};
