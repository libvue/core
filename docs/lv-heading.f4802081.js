import{_ as h,b as c,d as r,o as n,c as u,w as l,e as d,f as a,g as s,F as f,h as o}from"./index.fff357f5.js";const p=`
<lv-heading :level="1" v-space-after="1">Heading1</lv-heading>
<lv-heading :level="2" v-space-after="1">Heading2</lv-heading>
<lv-heading :level="3" v-space-after="1">Heading3</lv-heading>
<lv-heading :level="4" v-space-after="1">Heading4</lv-heading>
<lv-heading :level="5" v-space-after="1">Heading5</lv-heading>
<lv-heading :level="6">Heading6</lv-heading>
`.trim(),H=`
<lv-heading :level="1" v-space-after="0.5">Heading1</lv-heading>
<lv-heading sub :level="6">Subheading</lv-heading>
`.trim(),m={data(){return{codeLevels:p,codeSub:H}}},b=o("Heading"),x=o("Headings rock"),S=o("Levels"),k=o("Heading1"),L=o("Heading2"),w=o("Heading3"),B=o("Heading4"),C=o("Heading5"),D=o("Heading6"),F=o("Subheading"),N=o("Heading1"),V=o("Subheading");function $(E,T,j,q,i,y){const t=c("lv-heading",!0),_=c("lv-card"),v=c("lv-code"),g=c("component-details"),e=r("space-after");return n(),u(f,null,[l((n(),d(t,{level:3},{default:a(()=>[b]),_:1})),[[e,.5]]),l((n(),d(t,{sub:"",level:6},{default:a(()=>[x]),_:1})),[[e,2]]),l((n(),d(t,{level:6},{default:a(()=>[S]),_:1})),[[e,1]]),l((n(),d(_,null,{default:a(()=>[l((n(),d(t,{level:1},{default:a(()=>[k]),_:1})),[[e,1]]),l((n(),d(t,{level:2},{default:a(()=>[L]),_:1})),[[e,1]]),l((n(),d(t,{level:3},{default:a(()=>[w]),_:1})),[[e,1]]),l((n(),d(t,{level:4},{default:a(()=>[B]),_:1})),[[e,1]]),l((n(),d(t,{level:5},{default:a(()=>[C]),_:1})),[[e,1]]),s(t,{level:6},{default:a(()=>[D]),_:1})]),_:1})),[[e,1]]),l(s(v,{lang:"html",code:i.codeLevels},null,8,["code"]),[[e,1]]),l((n(),d(t,{level:6},{default:a(()=>[F]),_:1})),[[e,1]]),l((n(),d(_,null,{default:a(()=>[l((n(),d(t,{level:1},{default:a(()=>[N]),_:1})),[[e,.5]]),s(t,{sub:"",level:6},{default:a(()=>[V]),_:1})]),_:1})),[[e,1]]),l(s(v,{lang:"html",code:i.codeSub},null,8,["code"]),[[e,1]]),s(g,{component:"LvHeading"})],64)}const A=h(m,[["render",$]]);export{A as default};
