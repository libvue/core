import{_ as g,b as c,d as u,o as l,c as h,w as t,e as o,f as i,g as d,F,h as n}from"./index-7fe7c56b.js";const C='<lv-code code="Hello World" lang="html" />'.trim(),k=`
activeFile: 'template',
files: [
    { id: 'template', filename: 'template', lang: 'html', code: codeFilesTemplate },
    { id: 'script', filename: 'script', lang: 'js', code: codeFilesScript },
]
`.trim(),w=`
<lv-code :files="files" :active="activeFile" @change-file="(v) => activeFile = v"/>
`.trim(),x={data(){return{code:C,activeFile:"template",files:[{id:"template",filename:"template",lang:"html",code:w},{id:"script",filename:"script",lang:"js",code:k}]}}};function b(B,m,D,T,a,W){const s=c("lv-heading"),f=c("lv-notice"),r=c("lv-code",!0),p=c("lv-card"),v=c("component-details"),e=u("space-after");return l(),h(F,null,[t((l(),o(s,{level:3},{default:i(()=>[n("Code")]),_:1})),[[e,.5]]),t((l(),o(s,{sub:"",level:6},{default:i(()=>[n("A code component without highlighting")]),_:1})),[[e,2]]),t((l(),o(f,{icon:"life-buoy",color:"solid-dimmed-info"},{default:i(()=>[n("I'm still looking for a proper, esm & lightweight highlighting package. Any tips? Reach out!")]),_:1})),[[e,1]]),t((l(),o(s,{level:6},{default:i(()=>[n("Default")]),_:1})),[[e,1]]),t((l(),o(p,null,{default:i(()=>[d(r,{code:"Hello World",lang:"html"})]),_:1})),[[e,1]]),t(d(r,{code:a.code,lang:"html"},null,8,["code"]),[[e,1]]),t((l(),o(s,{level:6},{default:i(()=>[n("With Files")]),_:1})),[[e,1]]),t((l(),o(p,null,{default:i(()=>[d(r,{files:a.files,active:a.activeFile,onChangeFile:m[0]||(m[0]=_=>a.activeFile=_)},null,8,["files","active"])]),_:1})),[[e,1]]),d(v,{component:"LvCode"})],64)}const y=g(x,[["render",b]]);export{y as default};
