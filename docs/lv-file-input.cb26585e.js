import{_ as b,o,c as L,w as u,b as p,d as l,e as t,F as x,f,g as n,h as V}from"./index.5f62ad45.js";const M=`
<lv-file-input v-model="fileListSingle"/>
`.trim(),S=`
<lv-file-input v-model="fileListMultiple" multiple/>
`.trim(),h={data(){return{codeSingle:M,codeMultiple:S,activeTab:"single",tabs:[{id:"single",title:"Single",icon:"box"},{id:"multiple",title:"Multiple",icon:"tags"}],fileListSingle:null,fileListMultiple:null}}},F=f("File Input"),T=f("A simple file input component");function k(w,i,B,C,e,I){const a=n("lv-heading"),_=n("lv-file-input",!0),d=n("lv-flex"),m=n("lv-card"),r=n("lv-code"),v=n("lv-tabs"),g=n("component-details"),s=V("space-after");return o(),L(x,null,[u((o(),p(a,{level:3},{default:l(()=>[F]),_:1})),[[s,.5]]),u((o(),p(a,{sub:"",level:6},{default:l(()=>[T]),_:1})),[[s,2]]),u((o(),p(v,{tabs:e.tabs,active:e.activeTab,onChangeTab:i[2]||(i[2]=c=>e.activeTab=c)},{single:l(()=>[u((o(),p(m,null,{default:l(()=>[t(d,{direction:"column"},{default:l(()=>[t(_,{modelValue:e.fileListSingle,"onUpdate:modelValue":i[0]||(i[0]=c=>e.fileListSingle=c)},null,8,["modelValue"])]),_:1})]),_:1})),[[s,1]]),t(r,{lang:"html",code:e.codeSingle},null,8,["code"])]),multiple:l(()=>[u((o(),p(m,null,{default:l(()=>[t(d,{direction:"column"},{default:l(()=>[t(_,{modelValue:e.fileListMultiple,"onUpdate:modelValue":i[1]||(i[1]=c=>e.fileListMultiple=c),multiple:""},null,8,["modelValue"])]),_:1})]),_:1})),[[s,1]]),t(r,{lang:"html",code:e.codeMultiple},null,8,["code"])]),_:1},8,["tabs","active"])),[[s,1]]),t(g,{component:"LvFileInput"})],64)}const N=b(h,[["render",k]]);export{N as default};
