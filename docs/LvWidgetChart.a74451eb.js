import{_ as f,j as u,l as h,g as r,o as a,a as l,t as s,c as d,F as v,i as n,b as c,n as g,d as y}from"./index.b288453a.js";const m={props:{title:{type:String,default:null},amount:{type:String,default:null},diff:{type:Number,default:null},prefix:{type:String,default:null},chartType:{type:String,default:"line",validator:e=>["line","bar"].includes(e)},labels:{type:Array,default:()=>[]},datasets:{type:Array,default:()=>[],validator:e=>{let i=!0;return e.forEach(t=>{(!t.label||!t.hue||!t.data)&&(i=!1)}),i}}}},x={class:"lv-widget-chart__head"},p={class:"lv-widget-chart__info"},w={class:"lv-widget-chart__title"},b=c("+"),k={class:"lv-widget-chart__amount"},C={key:0,class:"lv-widget-chart__prefix"};function N(e,i,t,S,B,V){const _=r("lv-chart"),o=r("lv-card");return a(),u(o,{class:"lv-widget-chart",inline:""},{default:h(()=>[l("div",x,[l("div",p,[l("div",w,s(t.title),1),t.diff?(a(),d("div",{key:0,class:g(["lv-widget-chart__diff",{"lv-widget-chart__diff--negative":t.diff<0}])},[t.diff>0?(a(),d(v,{key:0},[b],64)):n("",!0),c(s(t.diff)+"% ",1)],2)):n("",!0)]),l("div",k,[t.prefix?(a(),d("span",C,s(t.prefix),1)):n("",!0),c(" "+s(t.amount),1)])]),y(_,{height:"70px",datasets:t.datasets,labels:t.labels,type:t.chartType,"show-axis":!1},null,8,["datasets","labels","type"])]),_:1})}const A=f(m,[["render",N]]);export{A as default};