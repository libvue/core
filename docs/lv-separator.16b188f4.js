import{_ as m,b as l,d as x,o as a,c as h,w as t,e as c,f as n,g as o,F as b,h as s}from"./index.f2b50de5.js";const g="<lv-separator></lv-separator>",T=`
<lv-flex gap="10px">
    <lv-button v-space-after="1" label="Text"/>
    <lv-separator v-space-after="1" direction="vertical"></lv-separator>
    <lv-button label="Text"/>
</lv-flex>
`.trim(),V={data(){return{code:g,codeVertical:T}}},k=s("Separator"),w=s("Cut the content!"),B=s("Horizontal"),C=s("Vertical");function S(D,F,N,$,_,z){const r=l("lv-heading"),d=l("lv-separator",!0),p=l("lv-card"),v=l("lv-code"),i=l("lv-button"),u=l("lv-flex"),f=l("component-details"),e=x("space-after");return a(),h(b,null,[t((a(),c(r,{level:3},{default:n(()=>[k]),_:1})),[[e,.5]]),t((a(),c(r,{sub:"",level:6},{default:n(()=>[w]),_:1})),[[e,2]]),t((a(),c(r,{level:6},{default:n(()=>[B]),_:1})),[[e,1]]),t((a(),c(p,null,{default:n(()=>[o(d)]),_:1})),[[e,1]]),t(o(v,{lang:"html",code:_.code},null,8,["code"]),[[e,1]]),t((a(),c(r,{level:6},{default:n(()=>[C]),_:1})),[[e,1]]),t((a(),c(p,null,{default:n(()=>[o(u,{gap:"10px"},{default:n(()=>[t(o(i,{label:"Text"},null,512),[[e,1]]),t(o(d,{direction:"vertical"},null,512),[[e,1]]),o(i,{label:"Text"})]),_:1})]),_:1})),[[e,1]]),t(o(v,{lang:"html",code:_.codeVertical},null,8,["code"]),[[e,1]]),o(f,{component:"LvSeparator"})],64)}const H=m(V,[["render",S]]);export{H as default};
