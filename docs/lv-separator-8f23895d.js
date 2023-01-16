import{_ as m,b as o,d as x,o as a,c as b,w as t,e as c,f as n,g as l,F as h,h as s}from"./index-5cc4372f.js";const g="<lv-separator></lv-separator>",T=`
<lv-flex gap="10px">
    <lv-button v-space-after="1" label="Text"/>
    <lv-separator v-space-after="1" direction="vertical"></lv-separator>
    <lv-button label="Text"/>
</lv-flex>
`.trim(),V={data(){return{code:g,codeVertical:T}}};function k(w,B,C,S,_,D){const r=o("lv-heading"),p=o("lv-separator",!0),v=o("lv-card"),d=o("lv-code"),i=o("lv-button"),u=o("lv-flex"),f=o("component-details"),e=x("space-after");return a(),b(h,null,[t((a(),c(r,{level:3},{default:n(()=>[s("Separator")]),_:1})),[[e,.5]]),t((a(),c(r,{sub:"",level:6},{default:n(()=>[s("Cut the content!")]),_:1})),[[e,2]]),t((a(),c(r,{level:6},{default:n(()=>[s("Horizontal")]),_:1})),[[e,1]]),t((a(),c(v,null,{default:n(()=>[l(p)]),_:1})),[[e,1]]),t(l(d,{lang:"html",code:_.code},null,8,["code"]),[[e,1]]),t((a(),c(r,{level:6},{default:n(()=>[s("Vertical")]),_:1})),[[e,1]]),t((a(),c(v,null,{default:n(()=>[l(u,{gap:"10px"},{default:n(()=>[t(l(i,{label:"Text"},null,512),[[e,1]]),t(l(p,{direction:"vertical"},null,512),[[e,1]]),l(i,{label:"Text"})]),_:1})]),_:1})),[[e,1]]),t(l(d,{lang:"html",code:_.codeVertical},null,8,["code"]),[[e,1]]),l(f,{component:"LvSeparator"})],64)}const N=m(V,[["render",k]]);export{N as default};
