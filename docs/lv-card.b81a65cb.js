import{_ as m,o as a,c as g,w as o,b as l,d as t,e as d,F as b,f as c,g as s,h}from"./index.5a8dd38e.js";const N=`
<lv-card>I'm a default card</lv-card>
`.trim(),I=`
<lv-card inline>I'm an inline card</lv-card>
`.trim(),B=`
<lv-card v-space-after="1" :padding="false">No padding</lv-card>
`.trim(),C=`
<lv-card v-space-after="1" :elevation="false">No elevation</lv-card>
`.trim(),x=`
<lv-card v-space-after="1" :border="false">No border</lv-card>
`.trim(),D={data(){return{activeTab:"default",tabs:[{id:"default",title:"Default"},{id:"inline",title:"Inline"},{id:"no-padding",title:"No Padding"},{id:"no-elevation",title:"No Elevation"},{id:"no-border",title:"No Border"}],codeDefault:N,codeInline:I,codeNoPadding:B,codeNoElevation:C,codeNoBorder:x}}},T=c("Card"),w=c("A nice little wrapper around your content"),E=c("I'm a default card"),k=c("I'm an inline card"),P=c("No padding"),F=c("No elevation"),V=c("No border");function y(A,_,L,j,n,q){const v=s("lv-heading"),i=s("lv-card",!0),r=s("lv-code"),f=s("lv-tabs"),u=s("component-details"),e=h("space-after");return a(),g(b,null,[o((a(),l(v,{level:3},{default:t(()=>[T]),_:1})),[[e,.5]]),o((a(),l(v,{sub:"",level:6},{default:t(()=>[w]),_:1})),[[e,2]]),d(f,{tabs:n.tabs,active:n.activeTab,onChangeTab:_[0]||(_[0]=p=>n.activeTab=p)},{default:t(()=>[o((a(),l(i,null,{default:t(()=>[E]),_:1})),[[e,1]]),o(d(r,{lang:"html",code:n.codeDefault},null,8,["code"]),[[e,1]])]),inline:t(()=>[o((a(),l(i,{inline:""},{default:t(()=>[k]),_:1})),[[e,1]]),o(d(r,{lang:"html",code:n.codeInline},null,8,["code"]),[[e,1]])]),"no-padding":t(()=>[o((a(),l(i,{padding:!1},{default:t(()=>[P]),_:1})),[[e,1]]),o(d(r,{lang:"html",code:n.codeNoPadding},null,8,["code"]),[[e,1]])]),"no-elevation":t(()=>[o((a(),l(i,{elevation:!1},{default:t(()=>[F]),_:1})),[[e,1]]),o(d(r,{lang:"html",code:n.codeNoElevation},null,8,["code"]),[[e,1]])]),"no-border":t(()=>[o((a(),l(i,{border:!1},{default:t(()=>[V]),_:1})),[[e,1]]),o(d(r,{lang:"html",code:n.codeNoBorder},null,8,["code"]),[[e,1]])]),_:1},8,["tabs","active"]),d(u,{component:"LvCard"})],64)}const G=m(D,[["render",y]]);export{G as default};
