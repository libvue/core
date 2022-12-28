import{_ as v,o,c as f,w as t,b as n,d as a,e as l,F as h,f as s,g as c,h as g}from"./index.4898ef11.js";const k=`
<lv-paragraph v-space-after="1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
<lv-blockquote v-space-after="1" caption="P. Rabbit">
    This is a quote from someone I forgot the name of.
</lv-blockquote>
<lv-paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
`.trim(),q={data(){return{codeBlockquote:k}}},b=s("Blockquote"),B=s("The enclosed text is an extended quotation"),x=s(" Lorem ipsum dolor sit amet, consectetur adipiscing elit "),L=s(" This is a quote from someone I forgot the name of. "),T=s(" Lorem ipsum dolor sit amet, consectetur adipiscing elit ");function w($,C,D,F,_,I){const r=c("lv-heading"),i=c("lv-paragraph"),p=c("lv-blockquote",!0),d=c("lv-card"),u=c("lv-code"),m=c("component-details"),e=g("space-after");return o(),f(h,null,[t((o(),n(r,{level:3},{default:a(()=>[b]),_:1})),[[e,.5]]),t((o(),n(r,{level:6,sub:""},{default:a(()=>[B]),_:1})),[[e,1]]),t((o(),n(d,null,{default:a(()=>[t((o(),n(i,null,{default:a(()=>[x]),_:1})),[[e,1]]),t((o(),n(p,{caption:"P. Rabbit"},{default:a(()=>[L]),_:1})),[[e,1]]),l(i,null,{default:a(()=>[T]),_:1})]),_:1})),[[e,1]]),t(l(u,{lang:"html",code:_.codeBlockquote},null,8,["code"]),[[e,1]]),l(m,{component:"LvBlockquote"})],64)}const P=v(q,[["render",w]]);export{P as default};
