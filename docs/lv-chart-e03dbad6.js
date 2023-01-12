import{_ as f,b as c,d as C,o as r,c as g,w as a,e as n,f as s,g as l,F as x,h as _}from"./index-583188e6.js";const T='<lv-chart :datasets="datasets" type="bar" :labels="labels" height="300px" />'.trim(),y='<lv-chart :datasets="datasets" :labels="labels" height="300px" />'.trim(),B=`
export default {
    data() {
        return {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Temperature',
                    hue: 24,
                    data: [55, 12, 20, 34, 1, 4],
                },
                {
                    label: 'Ice Days',
                    hue: 11,
                    data: [1, 4, 55, 12, 20, 34],
                },
            ],
        };
    },
};
`.trim(),J={data(){return{codeChartScript:B,codeLineChartTemplate:y,codeBarChartTemplate:T,labels:["January","February","March","April","May","June"],activeTab:"line",tabs:[{id:"line",title:"Line Chart",icon:"line-chart"},{id:"bar",title:"Bar Chart",icon:"bar-chart-3"}],datasets:[{label:"Temperature",hue:24,data:[55,12,20,34,11,4]},{label:"Ice Days",hue:11,data:[1,4,55,12,20,34]}]}}};function D(F,i,L,M,e,k){const d=c("lv-heading"),p=c("lv-chart",!0),h=c("lv-flex"),u=c("lv-card"),o=c("lv-code"),b=c("lv-tabs"),v=c("component-details"),t=C("space-after");return r(),g(x,null,[a((r(),n(d,{level:3},{default:s(()=>[_("Chart")]),_:1})),[[t,.5]]),a((r(),n(d,{sub:"",level:6},{default:s(()=>[_("Just a chart")]),_:1})),[[t,2]]),a((r(),n(b,{tabs:e.tabs,active:e.activeTab,onChangeTab:i[0]||(i[0]=m=>e.activeTab=m)},{line:s(()=>[a((r(),n(u,null,{default:s(()=>[l(h,null,{default:s(()=>[l(p,{datasets:e.datasets,labels:e.labels,height:"300px"},null,8,["datasets","labels"])]),_:1})]),_:1})),[[t,1]]),a(l(o,{lang:"html",code:e.codeLineChartTemplate},null,8,["code"]),[[t,1]]),a(l(o,{lang:"javascript",code:e.codeChartScript},null,8,["code"]),[[t,1]])]),bar:s(()=>[a((r(),n(u,null,{default:s(()=>[l(h,null,{default:s(()=>[l(p,{datasets:e.datasets,labels:e.labels,type:"bar",height:"300px"},null,8,["datasets","labels"])]),_:1})]),_:1})),[[t,1]]),a(l(o,{lang:"html",code:e.codeBarChartTemplate},null,8,["code"]),[[t,1]]),a(l(o,{lang:"javascript",code:e.codeChartScript},null,8,["code"]),[[t,1]])]),_:1},8,["tabs","active"])),[[t,1]]),l(v,{component:"LvChart"})],64)}const S=f(J,[["render",D]]);export{S as default};
