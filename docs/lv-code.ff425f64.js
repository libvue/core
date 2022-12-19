import{_ as f,o as t,c as h,w as l,b as o,d as c,e as s,F as u,f as d,g as a,h as g}from"./index.bcd3c8a4.js";const F='<lv-code code="Hello World" lang="html" />'.trim(),C=`
activeFile: 'template',
files: [
    { id: 'template', filename: 'template', lang: 'html', code: codeFilesTemplate },
    { id: 'script', filename: 'script', lang: 'js', code: codeFilesScript },
]
`.trim(),x=`
<lv-code :files="files" :active="activeFile" @change-file="(v) => activeFile = v"/>
`.trim(),w={data(){return{code:F,activeFile:"template",files:[{id:"template",filename:"template",lang:"html",code:x},{id:"script",filename:"script",lang:"js",code:C}]}}},k=d("Code"),B=d("A code component with highlighting"),D=d("Default"),T=d("With Files");function W(b,_,j,H,i,N){const n=a("lv-heading"),r=a("lv-code",!0),m=a("lv-card"),p=a("component-details"),e=g("space-after");return t(),h(u,null,[l((t(),o(n,{level:3},{default:c(()=>[k]),_:1})),[[e,.5]]),l((t(),o(n,{sub:"",level:6},{default:c(()=>[B]),_:1})),[[e,2]]),l((t(),o(n,{level:6},{default:c(()=>[D]),_:1})),[[e,1]]),l((t(),o(m,null,{default:c(()=>[s(r,{code:"Hello World",lang:"html"})]),_:1})),[[e,1]]),l(s(r,{code:i.code,lang:"html"},null,8,["code"]),[[e,1]]),l((t(),o(n,{level:6},{default:c(()=>[T]),_:1})),[[e,1]]),l((t(),o(m,null,{default:c(()=>[s(r,{files:i.files,active:i.activeFile,onChangeFile:_[0]||(_[0]=v=>i.activeFile=v)},null,8,["files","active"])]),_:1})),[[e,1]]),s(p,{component:"LvCode"})],64)}const V=f(w,[["render",W]]);export{V as default};
