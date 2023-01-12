import{_ as h,b as s,d as w,o,c as y,w as r,e as n,f as t,g as e,F as W,h as m}from"./index-62ef1cf1.js";const x=`<lv-widget title="Avg. Revenue" amount="1.239,21" prefix="$" :diff="-10" type="number" />
<lv-widget title="Total Payout" amount="632,37" prefix="€" :diff="75" type="number" />`.trim(),D=`<lv-widget title="Followers" amount="2,530" :diff="10" type="chart" :labels="labels" :datasets="followersDatasets"/>
<lv-widget title="Subscribers" chart-type="bar" amount="3,122" :diff="-2" type="chart" :labels="labels" :datasets="subscribersDatasets"/>`.trim(),C=`
export default {
    data() {
        return {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            followersDatasets: [
                {
                    label: 'Followers',
                    hue: 24,
                    data: [55, 12, 20, 34, 7, 4],
                },
            ],
            subscribersDatasets: [
                {
                    label: 'Subscribers',
                    hue: 36,
                    data: [20, 34, 6, 4,55, 12],
                },
            ],
        }
    }
}
`.trim(),F={data(){return{codeNumberWidget:x,codeChartWidget:D,codeChartWidgetScript:C,labels:["January","February","March","April","May","June"],followersDatasets:[{label:"Followers",hue:24,data:[55,12,20,34,7,4]}],subscribersDatasets:[{label:"Subscribers",hue:36,data:[20,34,6,4,55,12]}],activeTab:"number",tabs:[{id:"number",title:"Number Widget"},{id:"chart",title:"Chart Widget"}]}}};function S(T,u,N,A,a,J){const b=s("lv-heading"),i=s("lv-widget",!0),c=s("lv-grid-column"),_=s("lv-grid-row"),f=s("lv-grid"),d=s("lv-code"),p=s("lv-tabs"),v=s("component-details"),l=w("space-after");return o(),y(W,null,[r((o(),n(b,{level:3},{default:t(()=>[m("Widget")]),_:1})),[[l,.5]]),r((o(),n(b,{sub:"",level:6},{default:t(()=>[m("Stats for nerds")]),_:1})),[[l,2]]),r((o(),n(p,{tabs:a.tabs,active:a.activeTab,onChangeTab:u[0]||(u[0]=g=>a.activeTab=g)},{number:t(()=>[r((o(),n(f,null,{default:t(()=>[e(_,{gap:"1rem"},{default:t(()=>[e(c,{width:6},{default:t(()=>[e(i,{title:"Avg. Revenue",amount:"1.239,21",prefix:"$",diff:-10,type:"number"})]),_:1}),e(c,{width:6},{default:t(()=>[e(i,{title:"Total Payout",amount:"632,37",prefix:"€",diff:75,type:"number"})]),_:1})]),_:1})]),_:1})),[[l,1]]),r(e(d,{lang:"html",code:a.codeNumberWidget},null,8,["code"]),[[l,1]])]),chart:t(()=>[r((o(),n(f,null,{default:t(()=>[e(_,{gap:"1rem"},{default:t(()=>[e(c,{width:6},{default:t(()=>[e(i,{title:"Followers",amount:"2,530",diff:10,type:"chart",labels:a.labels,datasets:a.followersDatasets},null,8,["labels","datasets"])]),_:1}),e(c,{width:6},{default:t(()=>[e(i,{title:"Subscribers","chart-type":"bar",amount:"3,122",diff:-2,type:"chart",labels:a.labels,datasets:a.subscribersDatasets},null,8,["labels","datasets"])]),_:1})]),_:1})]),_:1})),[[l,1]]),r(e(d,{lang:"html",code:a.codeChartWidget},null,8,["code"]),[[l,1]]),r(e(d,{lang:"javascript",code:a.codeChartWidgetScript},null,8,["code"]),[[l,1]])]),_:1},8,["tabs","active"])),[[l,1]]),e(v,{component:"LvWidget"})],64)}const k=h(F,[["render",S]]);export{k as default};
