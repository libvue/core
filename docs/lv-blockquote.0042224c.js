import{_ as v,b as o,d as f,o as t,c as h,w as a,e as n,f as c,g as l,F as g,h as s}from"./index.fff357f5.js";const k=`
<lv-paragraph v-space-after="1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
<lv-blockquote v-space-after="1" caption="P. Rabbit">
    This is a quote from someone I forgot the name of.
</lv-blockquote>
<lv-paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
`.trim(),q={data(){return{codeBlockquote:k}}},b=s("Blockquote"),B=s("The enclosed text is an extended quotation"),x=s(" Lorem ipsum dolor sit amet, consectetur adipiscing elit "),L=s(" This is a quote from someone I forgot the name of. "),T=s(" Lorem ipsum dolor sit amet, consectetur adipiscing elit ");function w($,C,D,F,_,I){const r=o("lv-heading"),i=o("lv-paragraph"),p=o("lv-blockquote",!0),d=o("lv-card"),u=o("lv-code"),m=o("component-details"),e=f("space-after");return t(),h(g,null,[a((t(),n(r,{level:3},{default:c(()=>[b]),_:1})),[[e,.5]]),a((t(),n(r,{level:6,sub:""},{default:c(()=>[B]),_:1})),[[e,1]]),a((t(),n(d,null,{default:c(()=>[a((t(),n(i,null,{default:c(()=>[x]),_:1})),[[e,1]]),a((t(),n(p,{caption:"P. Rabbit"},{default:c(()=>[L]),_:1})),[[e,1]]),l(i,null,{default:c(()=>[T]),_:1})]),_:1})),[[e,1]]),a(l(u,{lang:"html",code:_.codeBlockquote},null,8,["code"]),[[e,1]]),l(m,{component:"LvBlockquote"})],64)}const P=v(q,[["render",w]]);export{P as default};
