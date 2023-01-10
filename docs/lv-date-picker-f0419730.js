import{_ as k,b as o,d as b,o as r,c as U,w as d,e as c,f as l,g as a,F as x,h as g}from"./index-fe684972.js";const D=`
<lv-date-picker :start="date" @update:start="(v) => { date = v }" />
`.trim(),S=`
<lv-date-picker :start="start" :end="end" @update:start="(v) => { start = v }" @update:end="(v) => { end = v }" range/>
`.trim(),T=`
<lv-date-picker :start="date" @update:start="(v) => { date = v }" inline/>
`.trim(),w=`
<lv-date-picker :start="date" @update:start="(v) => { date = v }" />
<lv-date-picker :start="date" @update:start="(v) => { date = v }" disabled />
<lv-date-picker :start="date" @update:start="(v) => { date = v }" loading />
`.trim(),B={data(){return{date:"2022-11-11",start:"2022-11-07",end:"2022-11-18",codeSingle:D,codeRange:S,codeInline:T,codeStates:w,activeTab:"single",tabs:[{id:"single",title:"Single Date",icon:"calendar-days"},{id:"range",title:"Date Range",icon:"calendar-range"},{id:"inline",title:"Inline",icon:"pencil"},{id:"states",title:"States",icon:"loader-2"}]}}};function C(I,e,P,R,t,F){const u=o("lv-heading"),i=o("lv-date-picker",!0),v=o("lv-card"),p=o("lv-code"),_=o("lv-flex"),m=o("lv-tabs"),f=o("component-details"),s=b("space-after");return r(),U(x,null,[d((r(),c(u,{level:3},{default:l(()=>[g("Date Picker")]),_:1})),[[s,.5]]),d((r(),c(u,{sub:"",level:6},{default:l(()=>[g("Used to pick a date or date range")]),_:1})),[[s,2]]),a(m,{tabs:t.tabs,active:t.activeTab,onChangeTab:e[7]||(e[7]=n=>t.activeTab=n)},{single:l(()=>[d((r(),c(v,null,{default:l(()=>[a(i,{start:t.date,"onUpdate:start":e[0]||(e[0]=n=>{t.date=n})},null,8,["start"])]),_:1})),[[s,1]]),d(a(p,{lang:"html",code:t.codeSingle},null,8,["code"]),[[s,1]])]),range:l(()=>[d((r(),c(v,null,{default:l(()=>[a(i,{start:t.start,end:t.end,"onUpdate:start":e[1]||(e[1]=n=>{t.start=n}),"onUpdate:end":e[2]||(e[2]=n=>{t.end=n}),range:""},null,8,["start","end"])]),_:1})),[[s,1]]),d(a(p,{lang:"html",code:t.codeRange},null,8,["code"]),[[s,1]])]),inline:l(()=>[d((r(),c(v,null,{default:l(()=>[a(i,{start:t.date,"onUpdate:start":e[3]||(e[3]=n=>{t.date=n}),inline:""},null,8,["start"])]),_:1})),[[s,1]]),d(a(p,{lang:"html",code:t.codeInline},null,8,["code"]),[[s,1]])]),states:l(()=>[d((r(),c(v,null,{default:l(()=>[a(_,{direction:"column"},{default:l(()=>[a(i,{start:t.date,"onUpdate:start":e[4]||(e[4]=n=>{t.date=n})},null,8,["start"]),a(i,{start:t.date,"onUpdate:start":e[5]||(e[5]=n=>{t.date=n}),disabled:""},null,8,["start"]),a(i,{start:t.date,"onUpdate:start":e[6]||(e[6]=n=>{t.date=n}),loading:""},null,8,["start"])]),_:1})]),_:1})),[[s,1]]),d(a(p,{lang:"html",code:t.codeStates},null,8,["code"]),[[s,1]])]),_:1},8,["tabs","active"]),a(f,{component:"LvDatePicker"})],64)}const V=k(B,[["render",C]]);export{V as default};
