import{_ as v,b as e,d as m,o,c as h,w as n,e as s,f as c,g as i,F as u,h as a}from"./index-5cc4372f.js";const f=`
<lv-window title="This is a window" height="200px">
    And this is its content
</lv-window>
`.trim(),g={data(){return{code:f}}};function x(b,k,A,B,d,T){const l=e("lv-heading"),r=e("lv-window",!0),_=e("lv-card"),p=e("lv-code"),w=e("component-details"),t=m("space-after");return o(),h(u,null,[n((o(),s(l,{level:3},{default:c(()=>[a("Window")]),_:1})),[[t,.5]]),n((o(),s(l,{sub:"",level:6},{default:c(()=>[a("A simple browser window")]),_:1})),[[t,2]]),n((o(),s(_,null,{default:c(()=>[i(r,{title:"This is a window",height:"200px"},{default:c(()=>[a(" And this is its content ")]),_:1})]),_:1})),[[t,1]]),n(i(p,{code:d.code,lang:"html"},null,8,["code"]),[[t,1]]),i(w,{component:"LvWindow"})],64)}const $=v(g,[["render",x]]);export{$ as default};
