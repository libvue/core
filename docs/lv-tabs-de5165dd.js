import{_ as u,b as n,d as f,o as c,c as h,w as o,e as r,f as l,g as s,F as g,h as i,t as p}from"./index-e6c7f5c0.js";const w={data(){return{activeTab:"one",tabs:[{id:"one",title:"Tab one"},{id:"two",title:"Tab two"},{id:"three",title:"Tab three",disabled:!0}],codeTemplate:`<lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => activeTab = v">
  <template #one="{ tab }">
    {{ tab.title }}
  </template>
  <template #two="{ tab }">
    {{ tab.title }}
  </template>
</lv-tabs>`,codeScript:`data() {
  return {
    activeTab: 'one',
    tabs: [
      { id: 'one', title: 'Tab one' },
      { id: 'two', title: 'Tab two' },
      { id: 'three', title: 'Tab three', disabled: true, }
    ],  
  }
}`}}};function x(k,b,B,C,e,D){const d=n("lv-heading"),_=n("lv-tabs",!0),m=n("lv-card"),v=n("lv-code"),T=n("component-details"),t=f("space-after");return c(),h(g,null,[o((c(),r(d,{level:3},{default:l(()=>[i("Tabs")]),_:1})),[[t,.5]]),o((c(),r(d,{sub:"",level:6},{default:l(()=>[i("Tab it like it's hot")]),_:1})),[[t,2]]),o((c(),r(m,null,{default:l(()=>[s(_,{tabs:e.tabs,active:e.activeTab,onChangeTab:b[0]||(b[0]=a=>e.activeTab=a)},{one:l(({tab:a})=>[i(p(a.title),1)]),two:l(({tab:a})=>[i(p(a.title),1)]),_:1},8,["tabs","active"])]),_:1})),[[t,1]]),o(s(v,{lang:"html",code:e.codeTemplate},null,8,["code"]),[[t,1]]),o(s(v,{lang:"javascript",code:e.codeScript},null,8,["code"]),[[t,1]]),s(T,{component:"LvTabs"})],64)}const F=u(w,[["render",x]]);export{F as default};
