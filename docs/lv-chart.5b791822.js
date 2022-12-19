import{_ as f,o as n,c as C,w as a,b as r,d as s,e as l,F as g,f as u,g as c,h as x}from"./index.3def5b28.js";const T='<lv-chart :datasets="datasets" type="bar" :labels="labels" height="300px" />'.trim(),y='<lv-chart :datasets="datasets" :labels="labels" height="300px" />'.trim(),B=`
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
`.trim(),J={data(){return{codeChartScript:B,codeLineChartTemplate:y,codeBarChartTemplate:T,labels:["January","February","March","April","May","June"],activeTab:"line",tabs:[{id:"line",title:"Line Chart",icon:"line-chart"},{id:"bar",title:"Bar Chart",icon:"bar-chart-3"}],datasets:[{label:"Temperature",hue:24,data:[55,12,20,34,11,4]},{label:"Ice Days",hue:11,data:[1,4,55,12,20,34]}]}}},D=u("Chart"),F=u("Just a chart");function L(M,i,k,w,e,S){const d=c("lv-heading"),h=c("lv-chart",!0),_=c("lv-flex"),p=c("lv-card"),o=c("lv-code"),b=c("lv-tabs"),v=c("component-details"),t=x("space-after");return n(),C(g,null,[a((n(),r(d,{level:3},{default:s(()=>[D]),_:1})),[[t,.5]]),a((n(),r(d,{sub:"",level:6},{default:s(()=>[F]),_:1})),[[t,2]]),a((n(),r(b,{tabs:e.tabs,active:e.activeTab,onChangeTab:i[0]||(i[0]=m=>e.activeTab=m)},{line:s(()=>[a((n(),r(p,null,{default:s(()=>[l(_,null,{default:s(()=>[l(h,{datasets:e.datasets,labels:e.labels,height:"300px"},null,8,["datasets","labels"])]),_:1})]),_:1})),[[t,1]]),a(l(o,{lang:"html",code:e.codeLineChartTemplate},null,8,["code"]),[[t,1]]),a(l(o,{lang:"javascript",code:e.codeChartScript},null,8,["code"]),[[t,1]])]),bar:s(()=>[a((n(),r(p,null,{default:s(()=>[l(_,null,{default:s(()=>[l(h,{datasets:e.datasets,labels:e.labels,type:"bar",height:"300px"},null,8,["datasets","labels"])]),_:1})]),_:1})),[[t,1]]),a(l(o,{lang:"html",code:e.codeBarChartTemplate},null,8,["code"]),[[t,1]]),a(l(o,{lang:"javascript",code:e.codeChartScript},null,8,["code"]),[[t,1]])]),_:1},8,["tabs","active"])),[[t,1]]),l(v,{component:"LvChart"})],64)}const A=f(J,[["render",L]]);export{A as default};
