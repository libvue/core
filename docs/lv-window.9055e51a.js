import{_ as v,b as e,d as h,o,c as m,w as n,e as c,f as s,g as i,F as u,h as a}from"./index.8c5ff4d0.js";const f=`
<lv-window title="This is a window" height="200px">
    And this is its content
</lv-window>
`.trim(),g={data(){return{code:f}}},x=a("Window"),b=a("A simple browser window"),k=a(" And this is its content ");function A(B,T,W,$,l,C){const d=e("lv-heading"),_=e("lv-window",!0),r=e("lv-card"),p=e("lv-code"),w=e("component-details"),t=h("space-after");return o(),m(u,null,[n((o(),c(d,{level:3},{default:s(()=>[x]),_:1})),[[t,.5]]),n((o(),c(d,{sub:"",level:6},{default:s(()=>[b]),_:1})),[[t,2]]),n((o(),c(r,null,{default:s(()=>[i(_,{title:"This is a window",height:"200px"},{default:s(()=>[k]),_:1})]),_:1})),[[t,1]]),n(i(p,{code:l.code,lang:"html"},null,8,["code"]),[[t,1]]),i(w,{component:"LvWindow"})],64)}const F=v(g,[["render",A]]);export{F as default};
