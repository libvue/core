import{_ as u,b as t,d as v,o as c,c as h,w as a,e as r,f as e,g as o,F as f,h as i}from"./index.139a13a1.js";const g=`
<lv-accordion single>
    <lv-accordion-item title="I'm the first section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </lv-accordion-item>
    <lv-accordion-item title="I'm the second section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </lv-accordion-item>
    <lv-accordion-item title="I'm the third section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </lv-accordion-item>
</lv-accordion>
`.trim(),I={data(){return{code:g}}},L=i("Accordion"),x=i("An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content."),k=i(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. "),b=i(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. "),w=i(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. ");function A(B,$,C,D,d,F){const l=t("lv-heading"),n=t("lv-accordion-item"),m=t("lv-accordion",!0),_=t("lv-card"),p=t("lv-code"),s=v("space-after");return c(),h(f,null,[a((c(),r(l,{level:3},{default:e(()=>[L]),_:1})),[[s,.5]]),a((c(),r(l,{sub:"",level:6},{default:e(()=>[x]),_:1})),[[s,2]]),a((c(),r(_,null,{default:e(()=>[o(m,{single:""},{default:e(()=>[o(n,{title:"I'm the first section"},{default:e(()=>[k]),_:1}),o(n,{title:"I'm the second section"},{default:e(()=>[b]),_:1}),o(n,{title:"I'm the third section"},{default:e(()=>[w]),_:1})]),_:1})]),_:1})),[[s,1]]),o(p,{code:d.code,lang:"html"},null,8,["code"])],64)}const V=u(I,[["render",A]]);export{V as default};
