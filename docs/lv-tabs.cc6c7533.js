import{_ as u,b as n,d as h,o as l,c as f,w as o,e as r,f as c,g as s,F as g,h as i,t as v}from"./index.43daceef.js";const w={data(){return{activeTab:"one",tabs:[{id:"one",title:"Tab one"},{id:"two",title:"Tab two"},{id:"three",title:"Tab three",disabled:!0}],codeTemplate:`<lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => activeTab = v">
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
}`}}},x=i("Tabs"),k=i("Tab it like it's hot");function B(C,b,D,S,t,F){const d=n("lv-heading"),p=n("lv-tabs",!0),m=n("lv-card"),_=n("lv-code"),T=n("component-details"),e=h("space-after");return l(),f(g,null,[o((l(),r(d,{level:3},{default:c(()=>[x]),_:1})),[[e,.5]]),o((l(),r(d,{sub:"",level:6},{default:c(()=>[k]),_:1})),[[e,2]]),o((l(),r(m,null,{default:c(()=>[s(p,{tabs:t.tabs,active:t.activeTab,onChangeTab:b[0]||(b[0]=a=>t.activeTab=a)},{one:c(({tab:a})=>[i(v(a.title),1)]),two:c(({tab:a})=>[i(v(a.title),1)]),_:1},8,["tabs","active"])]),_:1})),[[e,1]]),o(s(_,{lang:"html",code:t.codeTemplate},null,8,["code"]),[[e,1]]),o(s(_,{lang:"javascript",code:t.codeScript},null,8,["code"]),[[e,1]]),s(T,{component:"LvTabs"})],64)}const V=u(w,[["render",B]]);export{V as default};
