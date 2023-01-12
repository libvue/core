import{_ as m,b as s,d as g,o as a,c as b,w as o,e as l,f as n,g as d,F as N,h as c}from"./index-9aa14228.js";const h=`
<lv-card>I'm a default card</lv-card>
`.trim(),I=`
<lv-card inline>I'm an inline card</lv-card>
`.trim(),B=`
<lv-card v-space-after="1" :padding="false">No padding</lv-card>
`.trim(),C=`
<lv-card v-space-after="1" :elevation="false">No elevation</lv-card>
`.trim(),x=`
<lv-card v-space-after="1" :border="false">No border</lv-card>
`.trim(),D={data(){return{activeTab:"default",tabs:[{id:"default",title:"Default"},{id:"inline",title:"Inline"},{id:"no-padding",title:"No Padding"},{id:"no-elevation",title:"No Elevation"},{id:"no-border",title:"No Border"}],codeDefault:h,codeInline:I,codeNoPadding:B,codeNoElevation:C,codeNoBorder:x}}};function T(w,v,E,k,t,P){const f=s("lv-heading"),r=s("lv-card",!0),i=s("lv-code"),_=s("lv-tabs"),u=s("component-details"),e=g("space-after");return a(),b(N,null,[o((a(),l(f,{level:3},{default:n(()=>[c("Card")]),_:1})),[[e,.5]]),o((a(),l(f,{sub:"",level:6},{default:n(()=>[c("A nice little wrapper around your content")]),_:1})),[[e,2]]),d(_,{tabs:t.tabs,active:t.activeTab,onChangeTab:v[0]||(v[0]=p=>t.activeTab=p)},{default:n(()=>[o((a(),l(r,null,{default:n(()=>[c("I'm a default card")]),_:1})),[[e,1]]),o(d(i,{lang:"html",code:t.codeDefault},null,8,["code"]),[[e,1]])]),inline:n(()=>[o((a(),l(r,{inline:""},{default:n(()=>[c("I'm an inline card")]),_:1})),[[e,1]]),o(d(i,{lang:"html",code:t.codeInline},null,8,["code"]),[[e,1]])]),"no-padding":n(()=>[o((a(),l(r,{padding:!1},{default:n(()=>[c("No padding")]),_:1})),[[e,1]]),o(d(i,{lang:"html",code:t.codeNoPadding},null,8,["code"]),[[e,1]])]),"no-elevation":n(()=>[o((a(),l(r,{elevation:!1},{default:n(()=>[c("No elevation")]),_:1})),[[e,1]]),o(d(i,{lang:"html",code:t.codeNoElevation},null,8,["code"]),[[e,1]])]),"no-border":n(()=>[o((a(),l(r,{border:!1},{default:n(()=>[c("No border")]),_:1})),[[e,1]]),o(d(i,{lang:"html",code:t.codeNoBorder},null,8,["code"]),[[e,1]])]),_:1},8,["tabs","active"]),d(u,{component:"LvCard"})],64)}const V=m(D,[["render",T]]);export{V as default};
