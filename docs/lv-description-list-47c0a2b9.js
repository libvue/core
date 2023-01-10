import{_ as v,b as e,d as g,o as s,c as F,w as o,e as c,f as n,g as a,F as h,h as l,t as w}from"./index-fe684972.js";const D=`
<lv-card v-space-after="1">
    <lv-description-list :items="items">
        <template #fruit="{ description }">
            {{ description.join(', ') }}
        </template>
    </lv-description-list>
</lv-card>
`.trim(),x=`
items: [
    { term: 'Name', description: 'My Product' },
    { term: 'Feature One', description: 'It\\'s awesome' },
    { term: 'Feature two', description: 'It\\'s fabulous' },
    { id: 'fruit', term: 'These are fruit', description: ['Apple', 'Banana', 'Orange'] },
],
`.trim(),B={data(){return{items:[{term:"Name",description:"My Product"},{term:"Feature One",description:"It's awesome"},{term:"Feature two",description:"It's fabulous"},{id:"fruit",term:"These are fruit",description:["Apple","Banana","Orange"]}],activeFile:"template",files:[{id:"template",filename:"template",code:D},{id:"script",filename:"script",code:x}]}}};function T(b,p,I,L,t,N){const m=e("lv-heading"),d=e("lv-description-list",!0),u=e("lv-card"),_=e("lv-code"),f=e("component-details"),i=g("space-after");return s(),F(h,null,[o((s(),c(m,{level:3},{default:n(()=>[l("Description List")]),_:1})),[[i,.5]]),o((s(),c(m,{sub:"",level:6},{default:n(()=>[l("The component encloses a list of groups of terms and descriptions.")]),_:1})),[[i,2]]),o((s(),c(u,null,{default:n(()=>[a(d,{items:t.items},{fruit:n(({description:r})=>[l(w(r.join(", ")),1)]),_:1},8,["items"])]),_:1})),[[i,1]]),o(a(_,{lang:"html",files:t.files,active:t.activeFile,onChangeFile:p[0]||(p[0]=r=>t.activeFile=r)},null,8,["files","active"]),[[i,1]]),a(f,{component:"LvDescriptionList"})],64)}const k=v(B,[["render",T]]);export{k as default};
