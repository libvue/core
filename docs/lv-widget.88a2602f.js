import{_ as h,o,c as w,w as s,b as n,d as t,e,F as y,f as m,g as r,h as W}from"./index.de76c0cd.js";const x=`<lv-widget title="Avg. Revenue" amount="1.239,21" prefix="$" :diff="-10" type="number" />
<lv-widget title="Total Payout" amount="632,37" prefix="\u20AC" :diff="75" type="number" />`.trim(),D=`<lv-widget title="Followers" amount="2,530" :diff="10" type="chart" :labels="labels" :datasets="followersDatasets"/>
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
`.trim(),F={data(){return{codeNumberWidget:x,codeChartWidget:D,codeChartWidgetScript:C,labels:["January","February","March","April","May","June"],followersDatasets:[{label:"Followers",hue:24,data:[55,12,20,34,7,4]}],subscribersDatasets:[{label:"Subscribers",hue:36,data:[20,34,6,4,55,12]}],activeTab:"number",tabs:[{id:"number",title:"Number Widget"},{id:"chart",title:"Chart Widget"}]}}},S=m("Widget"),T=m("Stats for nerds");function N(A,u,J,M,a,k){const b=r("lv-heading"),i=r("lv-widget",!0),c=r("lv-grid-column"),_=r("lv-grid-row"),f=r("lv-grid"),d=r("lv-code"),p=r("lv-tabs"),v=r("component-details"),l=W("space-after");return o(),w(y,null,[s((o(),n(b,{level:3},{default:t(()=>[S]),_:1})),[[l,.5]]),s((o(),n(b,{sub:"",level:6},{default:t(()=>[T]),_:1})),[[l,2]]),s((o(),n(p,{tabs:a.tabs,active:a.activeTab,onChangeTab:u[0]||(u[0]=g=>a.activeTab=g)},{number:t(()=>[s((o(),n(f,null,{default:t(()=>[e(_,{gap:"1rem"},{default:t(()=>[e(c,{width:6},{default:t(()=>[e(i,{title:"Avg. Revenue",amount:"1.239,21",prefix:"$",diff:-10,type:"number"})]),_:1}),e(c,{width:6},{default:t(()=>[e(i,{title:"Total Payout",amount:"632,37",prefix:"\u20AC",diff:75,type:"number"})]),_:1})]),_:1})]),_:1})),[[l,1]]),s(e(d,{lang:"html",code:a.codeNumberWidget},null,8,["code"]),[[l,1]])]),chart:t(()=>[s((o(),n(f,null,{default:t(()=>[e(_,{gap:"1rem"},{default:t(()=>[e(c,{width:6},{default:t(()=>[e(i,{title:"Followers",amount:"2,530",diff:10,type:"chart",labels:a.labels,datasets:a.followersDatasets},null,8,["labels","datasets"])]),_:1}),e(c,{width:6},{default:t(()=>[e(i,{title:"Subscribers","chart-type":"bar",amount:"3,122",diff:-2,type:"chart",labels:a.labels,datasets:a.subscribersDatasets},null,8,["labels","datasets"])]),_:1})]),_:1})]),_:1})),[[l,1]]),s(e(d,{lang:"html",code:a.codeChartWidget},null,8,["code"]),[[l,1]]),s(e(d,{lang:"javascript",code:a.codeChartWidgetScript},null,8,["code"]),[[l,1]])]),_:1},8,["tabs","active"])),[[l,1]]),e(v,{component:"LvWidget"})],64)}const P=h(F,[["render",N]]);export{P as default};
