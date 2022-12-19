import{_ as u,o as l,c as h,w as n,b as r,d as o,e as s,f as i,t as v,F as f,g as c,h as g}from"./index.2963ab29.js";const w={data(){return{activeTab:"one",tabs:[{id:"one",title:"Tab one"},{id:"two",title:"Tab two"},{id:"three",title:"Tab three",disabled:!0}],codeTemplate:`<lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => activeTab = v">
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
}`}}},x=i("Tabs"),k=i("Tab it like it's hot");function B(C,b,D,S,t,F){const d=c("lv-heading"),p=c("lv-tabs",!0),m=c("lv-card"),_=c("lv-code"),T=c("component-details"),e=g("space-after");return l(),h(f,null,[n((l(),r(d,{level:3},{default:o(()=>[x]),_:1})),[[e,.5]]),n((l(),r(d,{sub:"",level:6},{default:o(()=>[k]),_:1})),[[e,2]]),n((l(),r(m,null,{default:o(()=>[s(p,{tabs:t.tabs,active:t.activeTab,onChangeTab:b[0]||(b[0]=a=>t.activeTab=a)},{one:o(({tab:a})=>[i(v(a.title),1)]),two:o(({tab:a})=>[i(v(a.title),1)]),_:1},8,["tabs","active"])]),_:1})),[[e,1]]),n(s(_,{lang:"html",code:t.codeTemplate},null,8,["code"]),[[e,1]]),n(s(_,{lang:"javascript",code:t.codeScript},null,8,["code"]),[[e,1]]),s(T,{component:"LvTabs"})],64)}const V=u(w,[["render",B]]);export{V as default};
