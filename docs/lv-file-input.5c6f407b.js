import{_ as b,b as t,d as L,o,c as S,w as u,e as p,f as l,g as i,F as x,h as f}from"./index.fff357f5.js";const V=`
<lv-file-input v-model="fileListSingle"/>
`.trim(),M=`
<lv-file-input v-model="fileListMultiple" multiple/>
`.trim(),h={data(){return{codeSingle:V,codeMultiple:M,activeTab:"single",tabs:[{id:"single",title:"Single",icon:"box"},{id:"multiple",title:"Multiple",icon:"tags"}],fileListSingle:null,fileListMultiple:null}},computed:{fileListSingleJson(){return JSON.stringify(this.fileListSingle)}}},F=f("File Input"),T=f("A simple file input component");function k(w,n,B,C,e,I){const a=t("lv-heading"),d=t("lv-file-input",!0),_=t("lv-flex"),m=t("lv-card"),r=t("lv-code"),v=t("lv-tabs"),g=t("component-details"),s=L("space-after");return o(),S(x,null,[u((o(),p(a,{level:3},{default:l(()=>[F]),_:1})),[[s,.5]]),u((o(),p(a,{sub:"",level:6},{default:l(()=>[T]),_:1})),[[s,2]]),u((o(),p(v,{tabs:e.tabs,active:e.activeTab,onChangeTab:n[2]||(n[2]=c=>e.activeTab=c)},{single:l(()=>[u((o(),p(m,null,{default:l(()=>[i(_,{direction:"column"},{default:l(()=>[i(d,{modelValue:e.fileListSingle,"onUpdate:modelValue":n[0]||(n[0]=c=>e.fileListSingle=c)},null,8,["modelValue"])]),_:1})]),_:1})),[[s,1]]),i(r,{lang:"html",code:e.codeSingle},null,8,["code"])]),multiple:l(()=>[u((o(),p(m,null,{default:l(()=>[i(_,{direction:"column"},{default:l(()=>[i(d,{modelValue:e.fileListMultiple,"onUpdate:modelValue":n[1]||(n[1]=c=>e.fileListMultiple=c),multiple:""},null,8,["modelValue"])]),_:1})]),_:1})),[[s,1]]),i(r,{lang:"html",code:e.codeMultiple},null,8,["code"])]),_:1},8,["tabs","active"])),[[s,1]]),i(g,{component:"LvFileInput"})],64)}const D=b(h,[["render",k]]);export{D as default};