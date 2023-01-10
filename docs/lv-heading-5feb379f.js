import{_ as r,b as i,d as u,o as n,c as f,w as l,e as t,f as a,g as c,F as h,h as v}from"./index-fe684972.js";const p=`
<lv-heading :level="1" v-space-after="1">Heading1</lv-heading>
<lv-heading :level="2" v-space-after="1">Heading2</lv-heading>
<lv-heading :level="3" v-space-after="1">Heading3</lv-heading>
<lv-heading :level="4" v-space-after="1">Heading4</lv-heading>
<lv-heading :level="5" v-space-after="1">Heading5</lv-heading>
<lv-heading :level="6">Heading6</lv-heading>
`.trim(),H=`
<lv-heading :level="1" v-space-after="0.5">Heading1</lv-heading>
<lv-heading sub :level="6">Subheading</lv-heading>
`.trim(),m={data(){return{codeLevels:p,codeSub:H}}};function b(x,S,k,L,o,w){const d=i("lv-heading",!0),s=i("lv-card"),g=i("lv-code"),_=i("component-details"),e=u("space-after");return n(),f(h,null,[l((n(),t(d,{level:3},{default:a(()=>[v("Heading")]),_:1})),[[e,.5]]),l((n(),t(d,{sub:"",level:6},{default:a(()=>[v("Headings rock")]),_:1})),[[e,2]]),l((n(),t(d,{level:6},{default:a(()=>[v("Levels")]),_:1})),[[e,1]]),l((n(),t(s,null,{default:a(()=>[l((n(),t(d,{level:1},{default:a(()=>[v("Heading1")]),_:1})),[[e,1]]),l((n(),t(d,{level:2},{default:a(()=>[v("Heading2")]),_:1})),[[e,1]]),l((n(),t(d,{level:3},{default:a(()=>[v("Heading3")]),_:1})),[[e,1]]),l((n(),t(d,{level:4},{default:a(()=>[v("Heading4")]),_:1})),[[e,1]]),l((n(),t(d,{level:5},{default:a(()=>[v("Heading5")]),_:1})),[[e,1]]),c(d,{level:6},{default:a(()=>[v("Heading6")]),_:1})]),_:1})),[[e,1]]),l(c(g,{lang:"html",code:o.codeLevels},null,8,["code"]),[[e,1]]),l((n(),t(d,{level:6},{default:a(()=>[v("Subheading")]),_:1})),[[e,1]]),l((n(),t(s,null,{default:a(()=>[l((n(),t(d,{level:1},{default:a(()=>[v("Heading1")]),_:1})),[[e,.5]]),c(d,{sub:"",level:6},{default:a(()=>[v("Subheading")]),_:1})]),_:1})),[[e,1]]),l(c(g,{lang:"html",code:o.codeSub},null,8,["code"]),[[e,1]]),c(_,{component:"LvHeading"})],64)}const C=r(m,[["render",b]]);export{C as default};
