import{_ as v,b as o,d as f,o as t,c as h,w as a,e as n,f as c,g as s,F as g,h as l}from"./index-583188e6.js";const k=`
<lv-paragraph v-space-after="1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
<lv-blockquote v-space-after="1" caption="P. Rabbit">
    This is a quote from someone I forgot the name of.
</lv-blockquote>
<lv-paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
`.trim(),q={data(){return{codeBlockquote:k}}};function b(B,x,L,T,p,w){const r=o("lv-heading"),i=o("lv-paragraph"),u=o("lv-blockquote",!0),d=o("lv-card"),_=o("lv-code"),m=o("component-details"),e=f("space-after");return t(),h(g,null,[a((t(),n(r,{level:3},{default:c(()=>[l("Blockquote")]),_:1})),[[e,.5]]),a((t(),n(r,{level:6,sub:""},{default:c(()=>[l("The enclosed text is an extended quotation")]),_:1})),[[e,1]]),a((t(),n(d,null,{default:c(()=>[a((t(),n(i,null,{default:c(()=>[l(" Lorem ipsum dolor sit amet, consectetur adipiscing elit ")]),_:1})),[[e,1]]),a((t(),n(u,{caption:"P. Rabbit"},{default:c(()=>[l(" This is a quote from someone I forgot the name of. ")]),_:1})),[[e,1]]),s(i,null,{default:c(()=>[l(" Lorem ipsum dolor sit amet, consectetur adipiscing elit ")]),_:1})]),_:1})),[[e,1]]),a(s(_,{lang:"html",code:p.codeBlockquote},null,8,["code"]),[[e,1]]),s(m,{component:"LvBlockquote"})],64)}const C=v(q,[["render",b]]);export{C as default};
