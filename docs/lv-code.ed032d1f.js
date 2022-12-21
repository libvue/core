import{_ as h,o as t,c as g,w as l,b as o,d as i,e as d,F as u,f as n,g as c,h as F}from"./index.33814177.js";const C='<lv-code code="Hello World" lang="html" />'.trim(),k=`
activeFile: 'template',
files: [
    { id: 'template', filename: 'template', lang: 'html', code: codeFilesTemplate },
    { id: 'script', filename: 'script', lang: 'js', code: codeFilesScript },
]
`.trim(),w=`
<lv-code :files="files" :active="activeFile" @change-file="(v) => activeFile = v"/>
`.trim(),x={data(){return{code:C,activeFile:"template",files:[{id:"template",filename:"template",lang:"html",code:w},{id:"script",filename:"script",lang:"js",code:k}]}}},b=n("Code"),B=n("A code component without highlighting"),D=n("I'm still looking for a proper, esm & lightweight highlighting package. Any tips? Reach out!"),T=n("Default"),W=n("With Files");function j(y,_,A,H,s,N){const a=c("lv-heading"),p=c("lv-notice"),r=c("lv-code",!0),m=c("lv-card"),f=c("component-details"),e=F("space-after");return t(),g(u,null,[l((t(),o(a,{level:3},{default:i(()=>[b]),_:1})),[[e,.5]]),l((t(),o(a,{sub:"",level:6},{default:i(()=>[B]),_:1})),[[e,2]]),l((t(),o(p,{icon:"life-buoy",color:"solid-dimmed-info"},{default:i(()=>[D]),_:1})),[[e,1]]),l((t(),o(a,{level:6},{default:i(()=>[T]),_:1})),[[e,1]]),l((t(),o(m,null,{default:i(()=>[d(r,{code:"Hello World",lang:"html"})]),_:1})),[[e,1]]),l(d(r,{code:s.code,lang:"html"},null,8,["code"]),[[e,1]]),l((t(),o(a,{level:6},{default:i(()=>[W]),_:1})),[[e,1]]),l((t(),o(m,null,{default:i(()=>[d(r,{files:s.files,active:s.activeFile,onChangeFile:_[0]||(_[0]=v=>s.activeFile=v)},null,8,["files","active"])]),_:1})),[[e,1]]),d(f,{component:"LvCode"})],64)}const V=h(x,[["render",j]]);export{V as default};
