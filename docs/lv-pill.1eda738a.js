import{_ as v,o as c,c as D,w as i,b as n,d as o,e as l,F as h,f as p,g as s,h as b}from"./index.541f9959.js";const S=`
<lv-pill text="Default"/>
<lv-pill text="Danger" color="danger"/>
<lv-pill text="Success" color="success"/>
<lv-pill text="Warning" color="warning"/>
<lv-pill text="Danger" color="primary"/>
<lv-pill text="Info" color="info"/>
`.trim(),y=`
<lv-pill text="Dimmed Default" color="light-default"/>
<lv-pill text="Dimmed Danger" color="light-danger"/>
<lv-pill text="Dimmed Success" color="light-success"/>
<lv-pill text="Dimmed Warning" color="light-warning"/>
<lv-pill text="Dimmed Danger" color="light-primary"/>
<lv-pill text="Dimmed Info" color="light-info"/>
`.trim(),C=`
<lv-pill text="Default" />
<lv-pill text="Danger" color="danger" />
<lv-pill text="Success" color="success" />
<lv-pill text="Warning" color="warning" />
<lv-pill text="Danger" color="primary" />
<lv-pill text="Info" color="info" />
`.trim(),I=`
<lv-pill prefix="State:" text="Closable" color="solid-danger" closable />
<lv-pill prefix="State:" text="Closable" color="solid-dimmed-primary" closable />
`.trim(),w='<lv-pill text="Github Icon" color="light-default" icon="github" />',T={data(){return{activeTab:"colors",tabs:[{id:"colors",title:"Colors",icon:"palette"},{id:"states",title:"States",icon:"loader-2"},{id:"icons",title:"Icons",icon:"box-select"}],codeColorSolid:S,codeColorSolidDimmed:y,codeColorOutline:C,codeStates:I,codeIcons:w}}},W=p("Pill"),k=p("A rectangle that visualizes a tag (a.k.a chip)"),P=p("Solid"),B=p("Solid Dimmed"),O=p("Outline");function F(G,_,N,V,r,z){const a=s("lv-heading"),e=s("lv-pill",!0),d=s("lv-flex"),m=s("lv-card"),u=s("lv-code"),x=s("lv-tabs"),f=s("component-details"),t=b("space-after");return c(),D(h,null,[i((c(),n(a,{level:3},{default:o(()=>[W]),_:1})),[[t,.5]]),i((c(),n(a,{sub:"",level:6},{default:o(()=>[k]),_:1})),[[t,2]]),i((c(),n(x,{tabs:r.tabs,active:r.activeTab,onChangeTab:_[0]||(_[0]=g=>r.activeTab=g)},{icons:o(()=>[i((c(),n(m,null,{default:o(()=>[l(d,null,{default:o(()=>[l(e,{text:"Github Icon",color:"solid-dimmed-default",icon:"github"})]),_:1})]),_:1})),[[t,1]]),i(l(u,{lang:"html",code:r.codeIcons},null,8,["code"]),[[t,1]])]),states:o(()=>[i((c(),n(m,null,{default:o(()=>[l(d,null,{default:o(()=>[l(e,{prefix:"State:",text:"Closable",color:"solid-danger",closable:""}),l(e,{prefix:"State:",text:"Closable",color:"solid-dimmed-primary",closable:""})]),_:1})]),_:1})),[[t,1]]),i(l(u,{lang:"html",code:r.codeStates},null,8,["code"]),[[t,1]])]),colors:o(()=>[i((c(),n(a,{level:6},{default:o(()=>[P]),_:1})),[[t,1]]),i((c(),n(m,null,{default:o(()=>[l(d,null,{default:o(()=>[l(e,{text:"Default",color:"solid-default"}),l(e,{text:"Danger",color:"solid-danger"}),l(e,{text:"Success",color:"solid-success"}),l(e,{text:"Warning",color:"solid-warning"}),l(e,{text:"Info",color:"solid-info"}),l(e,{text:"Primary",color:"solid-primary"}),l(e,{text:"Secondary",color:"solid-secondary"})]),_:1})]),_:1})),[[t,1]]),i(l(u,{lang:"html",code:r.codeColorSolid},null,8,["code"]),[[t,1]]),i((c(),n(a,{level:6},{default:o(()=>[B]),_:1})),[[t,1]]),i((c(),n(m,null,{default:o(()=>[l(d,null,{default:o(()=>[l(e,{text:"Dimmed Default",color:"solid-dimmed-default"}),l(e,{text:"Dimmed Danger",color:"solid-dimmed-danger"}),l(e,{text:"Dimmed Success",color:"solid-dimmed-success"}),l(e,{text:"Dimmed Warning",color:"solid-dimmed-warning"}),l(e,{text:"Dimmed Info",color:"solid-dimmed-info"}),l(e,{text:"Dimmed Primary",color:"solid-dimmed-primary"}),l(e,{text:"Dimmed Secondary",color:"solid-dimmed-secondary"})]),_:1})]),_:1})),[[t,1]]),i(l(u,{lang:"html",code:r.codeColorSolidDimmed},null,8,["code"]),[[t,1]]),i((c(),n(a,{level:6},{default:o(()=>[O]),_:1})),[[t,1]]),i((c(),n(m,null,{default:o(()=>[l(d,null,{default:o(()=>[l(e,{text:"Default",color:"outline-default"}),l(e,{text:"Danger",color:"outline-danger"}),l(e,{text:"Success",color:"outline-success"}),l(e,{text:"Warning",color:"outline-warning"}),l(e,{text:"Danger",color:"outline-primary"}),l(e,{text:"Info",color:"outline-info"})]),_:1})]),_:1})),[[t,1]]),i(l(u,{lang:"html",code:r.codeColorOutline},null,8,["code"]),[[t,1]])]),_:1},8,["tabs","active"])),[[t,1]]),l(f,{component:"LvTabs"})],64)}const E=v(T,[["render",F]]);export{E as default};
