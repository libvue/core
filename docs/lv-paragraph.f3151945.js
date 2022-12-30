import{_ as g,o as s,c as u,w as n,b as i,d as e,e as a,F as h,f as o,g as t,h as v}from"./index.f63a9952.js";const f=`
<lv-paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
<lv-paragraph align="center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
<lv-paragraph align="right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
`.trim(),L={data(){return{codeParagraph:f}}},x=o("Paragraph"),w=o(" A paragraph always starts on a new line, and is usually a block of text. "),P=o(" Lorem ipsum dolor sit amet, consectetur adipiscing elit "),k=o(" Lorem ipsum dolor sit amet, consectetur adipiscing elit "),b=o(" Lorem ipsum dolor sit amet, consectetur adipiscing elit ");function B($,y,C,D,p,F){const l=t("lv-heading"),c=t("lv-paragraph",!0),d=t("lv-card"),_=t("lv-code"),m=t("component-details"),r=v("space-after");return s(),u(h,null,[n((s(),i(l,{level:3},{default:e(()=>[x]),_:1})),[[r,.5]]),n((s(),i(l,{sub:"",level:6},{default:e(()=>[w]),_:1})),[[r,2]]),n((s(),i(d,null,{default:e(()=>[a(c,null,{default:e(()=>[P]),_:1}),a(c,{align:"center"},{default:e(()=>[k]),_:1}),a(c,{align:"right"},{default:e(()=>[b]),_:1})]),_:1})),[[r,1]]),n(a(_,{lang:"html",code:p.codeParagraph},null,8,["code"]),[[r,1]]),a(m,{component:"LvParagraph"})],64)}const V=g(L,[["render",B]]);export{V as default};
