import{_ as f,b as o,d as R,o as s,c as N,w as l,e as r,f as n,g as t,F as T,h as p}from"./index-dea56d21.js";const x=`
<lv-chart :loading="loading" :datasets="datasets" :labels="labels" height="300px" show-grid />
`.trim(),y=`
<lv-chart :loading="loading" :datasets="datasets" :labels="labels" type="bar" height="300px" />
`.trim(),k=`
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
`.trim(),w={data(){return{codeChartScript:k,codeLineChartTemplate:y,codeBarChartTemplate:x,labels:["January","February","March","April","May","June"],activeTab:"line",tabs:[{id:"line",title:"Line Chart",icon:"line-chart"},{id:"bar",title:"Bar Chart",icon:"bar-chart-3"}],datasets:[],loading:!0}},mounted(){setTimeout(()=>{this.loading=!1,this.datasets=this.getRandomDatasets()},1e3)},methods:{getRandomDatasets(){return[{label:"Temperature",hue:24,data:[this.getRandomNumber(),this.getRandomNumber(),this.getRandomNumber(),this.getRandomNumber(),this.getRandomNumber(),this.getRandomNumber()]},{label:"Ice Days",hue:11,data:[this.getRandomNumber(),this.getRandomNumber(),this.getRandomNumber(),this.getRandomNumber(),this.getRandomNumber(),this.getRandomNumber()]}]},getRandomNumber(){return Math.floor(Math.random()*101)},onClickRandomize(){this.loading=!0,setTimeout(()=>{this.loading=!1,this.datasets=this.getRandomDatasets()},300)}}};function D(B,c,M,z,e,d){const m=o("lv-heading"),h=o("lv-chart",!0),u=o("lv-button"),b=o("lv-flex"),g=o("lv-card"),i=o("lv-code"),_=o("lv-tabs"),v=o("component-details"),a=R("space-after");return s(),N(T,null,[l((s(),r(m,{level:3},{default:n(()=>[p("Chart")]),_:1})),[[a,.5]]),l((s(),r(m,{sub:"",level:6},{default:n(()=>[p("Just a chart")]),_:1})),[[a,2]]),l((s(),r(_,{tabs:e.tabs,active:e.activeTab,onChangeTab:c[0]||(c[0]=C=>e.activeTab=C)},{line:n(()=>[l((s(),r(g,null,{default:n(()=>[t(b,null,{default:n(()=>[t(h,{loading:e.loading,datasets:e.datasets,labels:e.labels,height:"300px","show-grid":""},null,8,["loading","datasets","labels"]),t(u,{label:"Randomize",color:"solid-dimmed-primary",icon:"rotate-cw",onClick:d.onClickRandomize},null,8,["onClick"])]),_:1})]),_:1})),[[a,1]]),l(t(i,{lang:"html",code:e.codeLineChartTemplate},null,8,["code"]),[[a,1]]),l(t(i,{lang:"javascript",code:e.codeChartScript},null,8,["code"]),[[a,1]])]),bar:n(()=>[l((s(),r(g,null,{default:n(()=>[t(b,null,{default:n(()=>[t(h,{loading:e.loading,datasets:e.datasets,labels:e.labels,type:"bar",height:"300px"},null,8,["loading","datasets","labels"]),t(u,{label:"Randomize",color:"solid-dimmed-primary",icon:"rotate-cw",onClick:d.onClickRandomize},null,8,["onClick"])]),_:1})]),_:1})),[[a,1]]),l(t(i,{lang:"html",code:e.codeBarChartTemplate},null,8,["code"]),[[a,1]]),l(t(i,{lang:"javascript",code:e.codeChartScript},null,8,["code"]),[[a,1]])]),_:1},8,["tabs","active"])),[[a,1]]),t(v,{component:"LvChart"})],64)}const F=f(w,[["render",D]]);export{F as default};
