import{_ as h,o as i,c as D,w as n,b as a,d as e,e as l,F as y,f as b,g as m,h as p}from"./index.2963ab29.js";const S=`
<lv-button label="Default" color="solid-default" />
<lv-button label="Warning" color="solid-warning" />
<lv-button label="Danger" color="solid-danger" />
<lv-button label="Info" color="solid-info" />
<lv-button label="Success" color="solid-success" />
<lv-button label="Primary" color="solid-primary" />
<lv-button label="Secondary" color="solid-secondary" />
`.trim(),O=`
<lv-button label="Dimmed Default" color="solid-dimmed-default" />
<lv-button label="Dimmed Warning" color="solid-dimmed-warning" />
<lv-button label="Dimmed Danger" color="solid-dimmed-danger" />
<lv-button label="Dimmed Info" color="solid-dimmed-info" />
<lv-button label="Dimmed Success" color="solid-dimmed-success" />
<lv-button label="Dimmed Primary" color="solid-dimmed-primary" />
<lv-button label="Dimmed Secondary" color="solid-dimmed-secondary" />
`.trim(),G=`
<lv-button label="Outline Default" color="outline-default"/>
<lv-button label="Outline Warning" color="outline-warning" />
<lv-button label="Outline Danger" color="outline-danger" />
<lv-button label="Outline Info" color="outline-info" />
<lv-button label="Outline Success" color="outline-success" />
<lv-button label="Outline Primary" color="outline-primary" />
<lv-button label="Outline Secondary" color="outline-secondary" />
`.trim(),x=`
<lv-button label="Ghost Default" color="ghost-default"/>
<lv-button label="Ghost Warning" color="ghost-warning" />
<lv-button label="Ghost Danger" color="ghost-danger" />
<lv-button label="Ghost Info" color="ghost-info" />
<lv-button label="Ghost Success" color="ghost-success" />
<lv-button label="Ghost Primary" color="ghost-primary" />
<lv-button label="Ghost Secondary" color="ghost-secondary" />
`.trim(),C=`
<lv-flex align-items="center">
    <lv-button label="Large" size="large" icon="github" />
    <lv-button label="Default" size="default" icon="github" />
    <lv-button label="Small" size="small" icon="github" />
</lv-flex>
`.trim(),w=`
<lv-button label="loading" loading />
<lv-button disabled label="Disabled" />
`.trim(),I=`
<lv-button icon="rocket" label="Hello" />
`.trim(),k=`
<lv-flex>
    <lv-button icon="rocket" label="Default (center)" />
    <lv-button icon="rocket" label="Left" align="left" />
    <lv-button icon="rocket" label="Right" align="right" />
</lv-flex>
`.trim(),z={data(){return{activeTab:"colors",tabs:[{id:"sizes",title:"Sizes",icon:"scaling"},{id:"colors",title:"Colors",icon:"palette"},{id:"states",title:"States",icon:"loader-2"},{id:"icons",title:"Icons",icon:"box-select"},{id:"align",title:"Text Alignment",icon:"align-center"}],codeColorSolid:S,codeColorSolidDimmed:O,codeColorOutline:G,codeColorGhost:x,codeSizes:C,codeStates:w,codeIcons:I,codeAlign:k}}},P=b("Button"),W=b("A simple button component"),B=b("Solid"),T=b("Solid Dimmed"),L=b("Outline"),A=b("Outline Dimmed"),F=b("Ghost");function H(N,g,R,V,c,E){const u=m("lv-heading"),o=m("lv-button",!0),d=m("lv-flex"),r=m("lv-card"),s=m("lv-code"),f=m("lv-tabs"),v=m("component-details"),t=p("space-after");return i(),D(y,null,[n((i(),a(u,{level:3},{default:e(()=>[P]),_:1})),[[t,.5]]),n((i(),a(u,{sub:"",level:6},{default:e(()=>[W]),_:1})),[[t,2]]),l(f,{tabs:c.tabs,active:c.activeTab,onChangeTab:g[0]||(g[0]=_=>c.activeTab=_)},{colors:e(()=>[n((i(),a(u,{level:6},{default:e(()=>[B]),_:1})),[[t,1]]),n((i(),a(r,null,{default:e(()=>[l(d,null,{default:e(()=>[l(o,{label:"Default",color:"solid-default"}),l(o,{label:"Warning",color:"solid-warning"}),l(o,{label:"Danger",color:"solid-danger"}),l(o,{label:"Info",color:"solid-info"}),l(o,{label:"Success",color:"solid-success"}),l(o,{label:"Primary",color:"solid-primary"}),l(o,{label:"Secondary",color:"solid-secondary"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeColorSolid},null,8,["code"]),[[t,1]]),n((i(),a(u,{level:6},{default:e(()=>[T]),_:1})),[[t,1]]),n((i(),a(r,null,{default:e(()=>[l(d,null,{default:e(()=>[l(o,{label:"Dimmed Default",color:"solid-dimmed-default"}),l(o,{label:"Dimmed Warning",color:"solid-dimmed-warning"}),l(o,{label:"Dimmed Danger",color:"solid-dimmed-danger"}),l(o,{label:"Dimmed Info",color:"solid-dimmed-info"}),l(o,{label:"Dimmed Success",color:"solid-dimmed-success"}),l(o,{label:"Dimmed Primary",color:"solid-dimmed-primary"}),l(o,{label:"Dimmed Secondary",color:"solid-dimmed-secondary"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeColorSolidDimmed},null,8,["code"]),[[t,1]]),n((i(),a(u,{level:6},{default:e(()=>[L]),_:1})),[[t,1]]),n((i(),a(r,null,{default:e(()=>[l(d,null,{default:e(()=>[l(o,{label:"Outline Default",color:"outline-default"}),l(o,{label:"Outline Warning",color:"outline-warning"}),l(o,{label:"Outline Danger",color:"outline-danger"}),l(o,{label:"Outline Info",color:"outline-info"}),l(o,{label:"Outline Success",color:"outline-success"}),l(o,{label:"Outline Primary",color:"outline-primary"}),l(o,{label:"Outline Secondary",color:"outline-secondary"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeColorOutline},null,8,["code"]),[[t,1]]),n((i(),a(u,{level:6},{default:e(()=>[A]),_:1})),[[t,1]]),n((i(),a(r,null,{default:e(()=>[l(d,null,{default:e(()=>[l(o,{label:"Outline Dimmed Default",color:"outline-dimmed-default"}),l(o,{label:"Outline Dimmed Warning",color:"outline-dimmed-warning"}),l(o,{label:"Outline Dimmed Danger",color:"outline-dimmed-danger"}),l(o,{label:"Outline Dimmed Info",color:"outline-dimmed-info"}),l(o,{label:"Outline Dimmed Success",color:"outline-dimmed-success"}),l(o,{label:"Outline Dimmed Primary",color:"outline-dimmed-primary"}),l(o,{label:"Outline Dimmed Secondary",color:"outline-dimmed-secondary"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeColorOutline},null,8,["code"]),[[t,1]]),n((i(),a(u,{level:6},{default:e(()=>[F]),_:1})),[[t,1]]),n((i(),a(r,null,{default:e(()=>[l(d,null,{default:e(()=>[l(o,{label:"Ghost Default",color:"ghost-default"}),l(o,{label:"Ghost Warning",color:"ghost-warning"}),l(o,{label:"Ghost Danger",color:"ghost-danger"}),l(o,{label:"Ghost Info",color:"ghost-info"}),l(o,{label:"Ghost Success",color:"ghost-success"}),l(o,{label:"Ghost Primary",color:"ghost-primary"}),l(o,{label:"Ghost Secondary",color:"ghost-secondary"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeColorGhost},null,8,["code"]),[[t,1]])]),states:e(()=>[n((i(),a(r,null,{default:e(()=>[l(d,null,{default:e(()=>[l(o,{label:"loading",loading:""}),l(o,{disabled:"",label:"Disabled"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeStates},null,8,["code"]),[[t,1]])]),icons:e(()=>[n((i(),a(r,null,{default:e(()=>[l(d,null,{default:e(()=>[l(o,{icon:"rocket",label:"Hello"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeIcons},null,8,["code"]),[[t,1]])]),align:e(()=>[n((i(),a(r,null,{default:e(()=>[l(d,{fill:""},{default:e(()=>[l(o,{icon:"rocket",label:"Default (center)"}),l(o,{icon:"rocket",label:"Left",align:"left"}),l(o,{icon:"rocket",label:"Right",align:"right"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeAlign},null,8,["code"]),[[t,1]])]),sizes:e(()=>[n((i(),a(r,null,{default:e(()=>[l(d,{"align-items":"center"},{default:e(()=>[l(o,{label:"Large",size:"large",icon:"github"}),l(o,{label:"Default",size:"default",icon:"github"}),l(o,{label:"Small",size:"small",icon:"github"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeSizes},null,8,["code"]),[[t,1]])]),_:1},8,["tabs","active"]),n(l(v,{component:"LvButton"},null,512),[[t,1]])],64)}const q=h(z,[["render",H]]);export{q as default};
