import{_ as D,o as i,c as p,w as n,b as c,d as t,e as o,F as h,f as _,g as s,h as b}from"./index.3def5b28.js";const O=`
<lv-notice text="Default" color="solid-default"/>
<lv-notice text="Primary" color="solid-primary" />
<lv-notice text="Warning" color="solid-warning" />
<lv-notice text="Danger" color="solid-danger" />
<lv-notice text="Info" color="solid-info" />
<lv-notice text="Success" color="solid-success" />
`.trim(),y=`
<lv-notice text="Dimmed Default" color="solid-dimmed-default" />
<lv-notice text="Dimmed Primary" color="solid-dimmed-primary" />
<lv-notice text="Dimmed Warning" color="solid-dimmed-warning" />
<lv-notice text="Dimmed Danger" color="solid-dimmed-danger" />
<lv-notice text="Dimmed Info" color="solid-dimmed-info" />
<lv-notice text="Dimmed Success" color="solid-dimmed-success" />
`.trim(),S=`
<lv-notice text="Outline Default" color="outline-default" />
<lv-notice text="Outline Primary" color="outline-primary" />
<lv-notice text="Outline Warning" color="outline-warning" />
<lv-notice text="Outline Danger" color="outline-danger" />
<lv-notice text="Outline Info" color="outline-info" />
<lv-notice text="Outline Success" color="outline-success" />
`.trim(),w='<lv-notice text="This notice has an icon" icon="github"/>'.trim(),C={data(){return{activeTab:"colors",codeColorSolid:O,codeColorSolidDimmed:y,codeColorOutline:S,codeIcons:w,tabs:[{id:"colors",title:"Colors",icon:"palette"},{id:"icons",title:"Icons",icon:"box-select"},{id:"buttons",title:"Buttons",icon:"link-2"}]}}},I=_("Notice"),T=_("Just a notice"),P=_("Solid"),W=_("Solid Dimmed"),N=_("Outline");function k(B,f,F,V,d,E){const r=s("lv-heading"),e=s("lv-notice",!0),a=s("lv-flex"),u=s("lv-card"),m=s("lv-code"),v=s("lv-tabs"),x=s("component-details"),l=b("space-after");return i(),p(h,null,[n((i(),c(r,{level:3},{default:t(()=>[I]),_:1})),[[l,.5]]),n((i(),c(r,{sub:"",level:6},{default:t(()=>[T]),_:1})),[[l,2]]),n((i(),c(v,{tabs:d.tabs,active:d.activeTab,onChangeTab:f[0]||(f[0]=g=>d.activeTab=g)},{colors:t(()=>[n((i(),c(r,{level:6},{default:t(()=>[P]),_:1})),[[l,1]]),n((i(),c(u,null,{default:t(()=>[o(a,null,{default:t(()=>[o(e,{text:"Default",color:"solid-default"}),o(e,{text:"Primary",color:"solid-primary"}),o(e,{text:"Warning",color:"solid-warning"}),o(e,{text:"Danger",color:"solid-danger"}),o(e,{text:"Info",color:"solid-info"}),o(e,{text:"Success",color:"solid-success"})]),_:1})]),_:1})),[[l,1]]),n(o(m,{lang:"html",code:d.codeColorSolid},null,8,["code"]),[[l,1]]),n((i(),c(r,{level:6},{default:t(()=>[W]),_:1})),[[l,1]]),n((i(),c(u,null,{default:t(()=>[o(a,null,{default:t(()=>[o(e,{text:"Dimmed Default",color:"solid-dimmed-default"}),o(e,{text:"Dimmed Primary",color:"solid-dimmed-primary"}),o(e,{text:"Dimmed Warning",color:"solid-dimmed-warning"}),o(e,{text:"Dimmed Danger",color:"solid-dimmed-danger"}),o(e,{text:"Dimmed Info",color:"solid-dimmed-info"}),o(e,{text:"Dimmed Success",color:"solid-dimmed-success"})]),_:1})]),_:1})),[[l,1]]),n(o(m,{lang:"html",code:d.codeColorSolidDimmed},null,8,["code"]),[[l,1]]),n((i(),c(r,{level:6},{default:t(()=>[N]),_:1})),[[l,1]]),n((i(),c(u,null,{default:t(()=>[o(a,null,{default:t(()=>[o(e,{text:"Outline Default",color:"outline-default"}),o(e,{text:"Outline Primary",color:"outline-primary"}),o(e,{text:"Outline Warning",color:"outline-warning"}),o(e,{text:"Outline Danger",color:"outline-danger"}),o(e,{text:"Outline Info",color:"outline-info"}),o(e,{text:"Outline Success",color:"outline-success"})]),_:1})]),_:1})),[[l,1]]),n(o(m,{lang:"html",code:d.codeColorOutline},null,8,["code"]),[[l,1]])]),icons:t(()=>[n((i(),c(u,null,{default:t(()=>[o(a,null,{default:t(()=>[o(e,{text:"This notice has an icon",icon:"github"})]),_:1})]),_:1})),[[l,1]]),n(o(m,{lang:"html",code:d.codeIcons},null,8,["code"]),[[l,1]])]),buttons:t(()=>[n((i(),c(u,null,{default:t(()=>[o(a,null,{default:t(()=>[o(e,{text:"This notice has a button",icon:"github","show-button":""})]),_:1})]),_:1})),[[l,1]]),n(o(m,{lang:"html",code:d.codeIcons},null,8,["code"]),[[l,1]])]),_:1},8,["tabs","active"])),[[l,1]]),o(x,{component:"LvNotice"})],64)}const L=D(C,[["render",k]]);export{L as default};
