import{_,b as r,d as D,o as c,c as b,w as i,e as n,f as o,g as l,F as h,h as f}from"./index-583188e6.js";const S=`
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
`.trim(),w='<lv-pill text="Github Icon" color="light-default" icon="github" />',z={data(){return{activeTab:"colors",tabs:[{id:"colors",title:"Colors",icon:"palette"},{id:"states",title:"States",icon:"loader-2"},{id:"icons",title:"Icons",icon:"box-select"},{id:"sizes",title:"Sizes",icon:"scaling"}],codeColorSolid:S,codeColorSolidDimmed:y,codeColorOutline:C,codeStates:I,codeIcons:w}}};function T(W,x,k,P,a,B){const u=r("lv-heading"),e=r("lv-pill",!0),s=r("lv-flex"),d=r("lv-card"),m=r("lv-code"),p=r("lv-tabs"),g=r("component-details"),t=D("space-after");return c(),b(h,null,[i((c(),n(u,{level:3},{default:o(()=>[f("Pill")]),_:1})),[[t,.5]]),i((c(),n(u,{sub:"",level:6},{default:o(()=>[f("A rectangle that visualizes a tag (a.k.a chip)")]),_:1})),[[t,2]]),i((c(),n(p,{tabs:a.tabs,active:a.activeTab,onChangeTab:x[0]||(x[0]=v=>a.activeTab=v)},{icons:o(()=>[i((c(),n(d,null,{default:o(()=>[l(s,null,{default:o(()=>[l(e,{text:"Github Icon",color:"solid-dimmed-default",icon:"github"})]),_:1})]),_:1})),[[t,1]]),i(l(m,{lang:"html",code:a.codeIcons},null,8,["code"]),[[t,1]])]),states:o(()=>[i((c(),n(d,null,{default:o(()=>[l(s,null,{default:o(()=>[l(e,{prefix:"State:",text:"Closable",color:"solid-danger",closable:""}),l(e,{prefix:"State:",text:"Closable",color:"solid-dimmed-primary",closable:""})]),_:1})]),_:1})),[[t,1]]),i(l(m,{lang:"html",code:a.codeStates},null,8,["code"]),[[t,1]])]),colors:o(()=>[i((c(),n(u,{level:6},{default:o(()=>[f("Solid")]),_:1})),[[t,1]]),i((c(),n(d,null,{default:o(()=>[l(s,null,{default:o(()=>[l(e,{text:"Default",color:"solid-default"}),l(e,{text:"Danger",color:"solid-danger"}),l(e,{text:"Success",color:"solid-success"}),l(e,{text:"Warning",color:"solid-warning"}),l(e,{text:"Info",color:"solid-info"}),l(e,{text:"Primary",color:"solid-primary"}),l(e,{text:"Secondary",color:"solid-secondary"})]),_:1})]),_:1})),[[t,1]]),i(l(m,{lang:"html",code:a.codeColorSolid},null,8,["code"]),[[t,1]]),i((c(),n(u,{level:6},{default:o(()=>[f("Solid Dimmed")]),_:1})),[[t,1]]),i((c(),n(d,null,{default:o(()=>[l(s,null,{default:o(()=>[l(e,{text:"Dimmed Default",color:"solid-dimmed-default"}),l(e,{text:"Dimmed Danger",color:"solid-dimmed-danger"}),l(e,{text:"Dimmed Success",color:"solid-dimmed-success"}),l(e,{text:"Dimmed Warning",color:"solid-dimmed-warning"}),l(e,{text:"Dimmed Info",color:"solid-dimmed-info"}),l(e,{text:"Dimmed Primary",color:"solid-dimmed-primary"}),l(e,{text:"Dimmed Secondary",color:"solid-dimmed-secondary"})]),_:1})]),_:1})),[[t,1]]),i(l(m,{lang:"html",code:a.codeColorSolidDimmed},null,8,["code"]),[[t,1]]),i((c(),n(u,{level:6},{default:o(()=>[f("Outline")]),_:1})),[[t,1]]),i((c(),n(d,null,{default:o(()=>[l(s,null,{default:o(()=>[l(e,{text:"Default",color:"outline-default"}),l(e,{text:"Danger",color:"outline-danger"}),l(e,{text:"Success",color:"outline-success"}),l(e,{text:"Warning",color:"outline-warning"}),l(e,{text:"Danger",color:"outline-primary"}),l(e,{text:"Info",color:"outline-info"})]),_:1})]),_:1})),[[t,1]]),i(l(m,{lang:"html",code:a.codeColorOutline},null,8,["code"]),[[t,1]])]),sizes:o(()=>[i((c(),n(d,null,{default:o(()=>[l(s,{"align-items":"center"},{default:o(()=>[l(e,{size:"large",text:"Large",color:"solid-dimmed-default",icon:"smile",closable:""}),l(e,{text:"Default",color:"solid-dimmed-default",icon:"smile",closable:""}),l(e,{size:"small",text:"Small",color:"solid-dimmed-default",icon:"smile",closable:""}),l(e,{size:"tiny",text:"tiny",color:"solid-dimmed-default",icon:"smile",closable:""})]),_:1})]),_:1})),[[t,1]]),i(l(m,{lang:"html",code:a.codeIcons},null,8,["code"]),[[t,1]])]),_:1},8,["tabs","active"])),[[t,1]]),l(g,{component:"LvTabs"})],64)}const F=_(z,[["render",T]]);export{F as default};
