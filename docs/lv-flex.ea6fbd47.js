import{_ as u,b as v,d as m,o as r,c as p,w as t,e as d,f as a,g as l,F as x,h as i}from"./index.8c5ff4d0.js";const g=`
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
`.trim(),F={data(){return{codeRow:h,codeColumn:g,codeFill:w}}},j=i("Flex"),y=i("Stack with the power of flexbox"),C=i("Row Direction (Default)"),D=i("Column Direction"),k=i("Fill space");function b(B,R,N,V,s,E){const n=v("lv-heading"),e=v("lv-card"),o=v("lv-flex",!0),f=v("lv-code"),_=v("component-details"),c=m("space-after");return r(),p(x,null,[t((r(),d(n,{level:3},{default:a(()=>[j]),_:1})),[[c,.5]]),t((r(),d(n,{sub:"",level:6},{default:a(()=>[y]),_:1})),[[c,2]]),t((r(),d(n,{level:6},{default:a(()=>[C]),_:1})),[[c,1]]),t((r(),d(e,null,{default:a(()=>[t((r(),d(o,{gap:"1rem"},{default:a(()=>[l(e),l(e),l(e)]),_:1})),[[c,1]]),t((r(),d(o,{gap:"1rem","justify-content":"center"},{default:a(()=>[l(e),l(e),l(e)]),_:1})),[[c,1]]),l(o,{gap:"1rem","justify-content":"end"},{default:a(()=>[l(e),l(e),l(e)]),_:1})]),_:1})),[[c,1]]),t(l(f,{lang:"html",code:s.codeRow},null,8,["code"]),[[c,1]]),t((r(),d(n,{level:6},{default:a(()=>[D]),_:1})),[[c,1]]),t((r(),d(e,null,{default:a(()=>[t((r(),d(o,{direction:"column","align-items":"center"},{default:a(()=>[l(e),l(e),l(e)]),_:1})),[[c,1]]),t((r(),d(o,{direction:"column","align-items":"start"},{default:a(()=>[l(e),l(e),l(e)]),_:1})),[[c,1]]),l(o,{direction:"column","align-items":"end"},{default:a(()=>[l(e),l(e),l(e)]),_:1})]),_:1})),[[c,1]]),t(l(f,{lang:"html",code:s.codeColumn},null,8,["code"]),[[c,1]]),t((r(),d(n,{level:6},{default:a(()=>[k]),_:1})),[[c,1]]),t((r(),d(e,null,{default:a(()=>[t((r(),d(o,{direction:"column",fill:""},{default:a(()=>[l(e),l(e),l(e)]),_:1})),[[c,1]]),l(o,{direction:"row",fill:""},{default:a(()=>[l(e),l(e),l(e)]),_:1})]),_:1})),[[c,1]]),t(l(f,{lang:"html",code:s.codeFill},null,8,["code"]),[[c,1]]),l(_,{component:"LvFlex"})],64)}const S=u(F,[["render",b]]);export{S as default};
