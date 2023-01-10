import{_,b as v,d as m,o as r,c as p,w as a,e as d,f as t,g as l,F as x,h as i}from"./index-fe684972.js";const g=`
<lv-flex v-space-after="1" direction="column" justify-content="center">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
<lv-flex v-space-after="1" direction="column" align-items="start">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
<lv-flex direction="column" align-items="end">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
`.trim(),h=`
<lv-flex v-space-after="1" gap="1rem">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
<lv-flex v-space-after="1" gap="1rem"  justify-content="center">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
<lv-flex gap="1rem" justify-content="end">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
`.trim(),w=`
<lv-flex v-space-after="1" direction="column" fill>
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
<lv-flex direction="row" fill>
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
`.trim(),F={data(){return{codeRow:h,codeColumn:g,codeFill:w}}};function j(y,C,D,k,f,b){const o=v("lv-heading"),e=v("lv-card"),n=v("lv-flex",!0),s=v("lv-code"),u=v("component-details"),c=m("space-after");return r(),p(x,null,[a((r(),d(o,{level:3},{default:t(()=>[i("Flex")]),_:1})),[[c,.5]]),a((r(),d(o,{sub:"",level:6},{default:t(()=>[i("Stack with the power of flexbox")]),_:1})),[[c,2]]),a((r(),d(o,{level:6},{default:t(()=>[i("Row Direction (Default)")]),_:1})),[[c,1]]),a((r(),d(e,null,{default:t(()=>[a((r(),d(n,{gap:"1rem"},{default:t(()=>[l(e),l(e),l(e)]),_:1})),[[c,1]]),a((r(),d(n,{gap:"1rem","justify-content":"center"},{default:t(()=>[l(e),l(e),l(e)]),_:1})),[[c,1]]),l(n,{gap:"1rem","justify-content":"end"},{default:t(()=>[l(e),l(e),l(e)]),_:1})]),_:1})),[[c,1]]),a(l(s,{lang:"html",code:f.codeRow},null,8,["code"]),[[c,1]]),a((r(),d(o,{level:6},{default:t(()=>[i("Column Direction")]),_:1})),[[c,1]]),a((r(),d(e,null,{default:t(()=>[a((r(),d(n,{direction:"column","align-items":"center"},{default:t(()=>[l(e),l(e),l(e)]),_:1})),[[c,1]]),a((r(),d(n,{direction:"column","align-items":"start"},{default:t(()=>[l(e),l(e),l(e)]),_:1})),[[c,1]]),l(n,{direction:"column","align-items":"end"},{default:t(()=>[l(e),l(e),l(e)]),_:1})]),_:1})),[[c,1]]),a(l(s,{lang:"html",code:f.codeColumn},null,8,["code"]),[[c,1]]),a((r(),d(o,{level:6},{default:t(()=>[i("Fill space")]),_:1})),[[c,1]]),a((r(),d(e,null,{default:t(()=>[a((r(),d(n,{direction:"column",fill:""},{default:t(()=>[l(e),l(e),l(e)]),_:1})),[[c,1]]),l(n,{direction:"row",fill:""},{default:t(()=>[l(e),l(e),l(e)]),_:1})]),_:1})),[[c,1]]),a(l(s,{lang:"html",code:f.codeFill},null,8,["code"]),[[c,1]]),l(u,{component:"LvFlex"})],64)}const R=_(F,[["render",j]]);export{R as default};
