import{_ as b,o as i,c as z,w as n,b as s,d as t,e,F as T,f as m,g as a,h as x}from"./index.5a8dd38e.js";const E=`
<lv-input type="text" icon="user" placeholder="Enter your username" />
<lv-input type="password" icon="key" placeholder="Enter your password" />
<lv-input type="email" icon="mail" placeholder="Enter your e-mail" />
<lv-input type="tel" icon="phone" placeholder="Enter your phonenumber" />
`.trim(),D=`
<lv-input placeholder="Default" />
<lv-input readonly placeholder="Readonly" />
<lv-input disabled placeholder="Disabled" />
<lv-input loading placeholder="Loading" />
`.trim(),S=`
<lv-input icon="github" placeholder="Large size" size="large" />
<lv-input icon="github" placeholder="Default size" size="default" />
<lv-input icon="github" placeholder="Small size" size="small" />
<lv-input icon="github" placeholder="Tiny size" size="tiny" />
`.trim(),w={data(){return{codeTypes:E,codeStates:D,codeSizes:S,activeTab:"types",tabs:[{id:"types",title:"Types",icon:"form-input"},{id:"states",title:"States",icon:"loader-2"},{id:"sizes",title:"Sizes",icon:"scaling"}]}},methods:{onChangeTab(u){this.activeTab=u}}},k=m("Input"),C=m("An multi-typed input for your fancy forms");function L(u,h,B,I,c,v){const _=a("lv-heading"),l=a("lv-input",!0),r=a("lv-flex"),d=a("lv-card"),p=a("lv-code"),y=a("lv-tabs"),g=a("component-details"),o=x("space-after");return i(),z(T,null,[n((i(),s(_,{level:3},{default:t(()=>[k]),_:1})),[[o,.5]]),n((i(),s(_,{sub:"",level:6},{default:t(()=>[C]),_:1})),[[o,2]]),e(y,{tabs:c.tabs,active:c.activeTab,onChangeTab:h[0]||(h[0]=f=>v.onChangeTab(f))},{types:t(()=>[n((i(),s(d,null,{default:t(()=>[e(r,{direction:"column"},{default:t(()=>[e(l,{type:"text",icon:"user",placeholder:"Enter your username"}),e(l,{type:"password",icon:"key",placeholder:"Enter your password"}),e(l,{type:"email",icon:"mail",placeholder:"Enter your e-mail"}),e(l,{type:"tel",icon:"phone",placeholder:"Enter your phonenumber"})]),_:1})]),_:1})),[[o,1]]),n(e(p,{lang:"html",code:c.codeTypes},null,8,["code"]),[[o,1]])]),states:t(()=>[n((i(),s(d,null,{default:t(()=>[e(r,{direction:"column"},{default:t(()=>[e(l,{placeholder:"Default"}),e(l,{readonly:"",placeholder:"Readonly"}),e(l,{disabled:"",placeholder:"Disabled"}),e(l,{loading:"",placeholder:"Loading"})]),_:1})]),_:1})),[[o,1]]),n(e(p,{lang:"html",code:c.codeStates},null,8,["code"]),[[o,1]])]),sizes:t(()=>[n((i(),s(d,null,{default:t(()=>[e(r,{direction:"column"},{default:t(()=>[e(l,{icon:"github",placeholder:"Large size",size:"large",loading:""}),e(l,{icon:"github",placeholder:"Default size",size:"default",loading:""}),e(l,{icon:"github",placeholder:"Small size",size:"small",loading:""}),e(l,{icon:"github",placeholder:"Tiny size",size:"tiny",loading:""})]),_:1})]),_:1})),[[o,1]]),n(e(p,{lang:"html",code:c.codeStates},null,8,["code"]),[[o,1]])]),_:1},8,["tabs","active"]),e(g,{component:"LvInput"})],64)}const N=b(w,[["render",L]]);export{N as default};
