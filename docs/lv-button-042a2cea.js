import{_ as h,b as m,d as D,o as i,c as y,w as n,e as a,f as o,g as l,F as p,h as b}from"./index-71bd3e8c.js";const S=`
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
`.trim(),z=`
<lv-button icon="rocket" label="Hello" />
`.trim(),I=`
<lv-flex>
    <lv-button icon="rocket" label="Default (center)" />
    <lv-button icon="rocket" label="Left" align="left" />
    <lv-button icon="rocket" label="Right" align="right" />
</lv-flex>
`.trim(),k={data(){return{activeTab:"sizes",tabs:[{id:"sizes",title:"Sizes",icon:"scaling"},{id:"colors",title:"Colors",icon:"palette"},{id:"states",title:"States",icon:"loader-2"},{id:"icons",title:"Icons",icon:"box-select"},{id:"align",title:"Text Alignment",icon:"align-center"}],codeColorSolid:S,codeColorSolidDimmed:O,codeColorOutline:G,codeColorGhost:x,codeSizes:C,codeStates:w,codeIcons:z,codeAlign:I}}};function P(W,g,B,T,c,L){const u=m("lv-heading"),e=m("lv-button",!0),r=m("lv-flex"),d=m("lv-card"),s=m("lv-code"),f=m("lv-tabs"),v=m("component-details"),t=D("space-after");return i(),y(p,null,[n((i(),a(u,{level:3},{default:o(()=>[b("Button")]),_:1})),[[t,.5]]),n((i(),a(u,{sub:"",level:6},{default:o(()=>[b("A simple button component")]),_:1})),[[t,2]]),l(f,{tabs:c.tabs,active:c.activeTab,onChangeTab:g[0]||(g[0]=_=>c.activeTab=_)},{colors:o(()=>[n((i(),a(u,{level:6},{default:o(()=>[b("Solid")]),_:1})),[[t,1]]),n((i(),a(d,null,{default:o(()=>[l(r,null,{default:o(()=>[l(e,{label:"Default",color:"solid-default"}),l(e,{label:"Warning",color:"solid-warning"}),l(e,{label:"Danger",color:"solid-danger"}),l(e,{label:"Info",color:"solid-info"}),l(e,{label:"Success",color:"solid-success"}),l(e,{label:"Primary",color:"solid-primary"}),l(e,{label:"Secondary",color:"solid-secondary"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeColorSolid},null,8,["code"]),[[t,1]]),n((i(),a(u,{level:6},{default:o(()=>[b("Solid Dimmed")]),_:1})),[[t,1]]),n((i(),a(d,null,{default:o(()=>[l(r,null,{default:o(()=>[l(e,{label:"Dimmed Default",color:"solid-dimmed-default"}),l(e,{label:"Dimmed Warning",color:"solid-dimmed-warning"}),l(e,{label:"Dimmed Danger",color:"solid-dimmed-danger"}),l(e,{label:"Dimmed Info",color:"solid-dimmed-info"}),l(e,{label:"Dimmed Success",color:"solid-dimmed-success"}),l(e,{label:"Dimmed Primary",color:"solid-dimmed-primary"}),l(e,{label:"Dimmed Secondary",color:"solid-dimmed-secondary"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeColorSolidDimmed},null,8,["code"]),[[t,1]]),n((i(),a(u,{level:6},{default:o(()=>[b("Outline")]),_:1})),[[t,1]]),n((i(),a(d,null,{default:o(()=>[l(r,null,{default:o(()=>[l(e,{label:"Outline Default",color:"outline-default"}),l(e,{label:"Outline Warning",color:"outline-warning"}),l(e,{label:"Outline Danger",color:"outline-danger"}),l(e,{label:"Outline Info",color:"outline-info"}),l(e,{label:"Outline Success",color:"outline-success"}),l(e,{label:"Outline Primary",color:"outline-primary"}),l(e,{label:"Outline Secondary",color:"outline-secondary"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeColorOutline},null,8,["code"]),[[t,1]]),n((i(),a(u,{level:6},{default:o(()=>[b("Outline Dimmed")]),_:1})),[[t,1]]),n((i(),a(d,null,{default:o(()=>[l(r,null,{default:o(()=>[l(e,{label:"Outline Dimmed Default",color:"outline-dimmed-default"}),l(e,{label:"Outline Dimmed Warning",color:"outline-dimmed-warning"}),l(e,{label:"Outline Dimmed Danger",color:"outline-dimmed-danger"}),l(e,{label:"Outline Dimmed Info",color:"outline-dimmed-info"}),l(e,{label:"Outline Dimmed Success",color:"outline-dimmed-success"}),l(e,{label:"Outline Dimmed Primary",color:"outline-dimmed-primary"}),l(e,{label:"Outline Dimmed Secondary",color:"outline-dimmed-secondary"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeColorOutline},null,8,["code"]),[[t,1]]),n((i(),a(u,{level:6},{default:o(()=>[b("Ghost")]),_:1})),[[t,1]]),n((i(),a(d,null,{default:o(()=>[l(r,null,{default:o(()=>[l(e,{label:"Ghost Default",color:"ghost-default"}),l(e,{label:"Ghost Warning",color:"ghost-warning"}),l(e,{label:"Ghost Danger",color:"ghost-danger"}),l(e,{label:"Ghost Info",color:"ghost-info"}),l(e,{label:"Ghost Success",color:"ghost-success"}),l(e,{label:"Ghost Primary",color:"ghost-primary"}),l(e,{label:"Ghost Secondary",color:"ghost-secondary"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeColorGhost},null,8,["code"]),[[t,1]])]),states:o(()=>[n((i(),a(d,null,{default:o(()=>[l(r,{"align-items":"center"},{default:o(()=>[l(e,{label:"loading",loading:""}),l(e,{disabled:"",label:"Disabled"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeStates},null,8,["code"]),[[t,1]])]),icons:o(()=>[n((i(),a(d,null,{default:o(()=>[l(r,null,{default:o(()=>[l(e,{icon:"rocket",label:"Hello"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeIcons},null,8,["code"]),[[t,1]])]),align:o(()=>[n((i(),a(d,null,{default:o(()=>[l(r,{fill:""},{default:o(()=>[l(e,{icon:"rocket",label:"Default (center)"}),l(e,{icon:"rocket",label:"Left",align:"left"}),l(e,{icon:"rocket",label:"Right",align:"right"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeAlign},null,8,["code"]),[[t,1]])]),sizes:o(()=>[n((i(),a(d,null,{default:o(()=>[l(r,{"align-items":"center"},{default:o(()=>[l(e,{label:"Large",size:"large",icon:"github"}),l(e,{label:"Default",size:"default",icon:"github"}),l(e,{label:"Small",size:"small",icon:"github"})]),_:1})]),_:1})),[[t,1]]),n(l(s,{lang:"html",code:c.codeSizes},null,8,["code"]),[[t,1]])]),_:1},8,["tabs","active"]),n(l(v,{component:"LvButton"},null,512),[[t,1]])],64)}const F=h(k,[["render",P]]);export{F as default};
