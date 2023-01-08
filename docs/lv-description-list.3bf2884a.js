import{_ as v,b as e,d as h,o as s,c as g,w as o,e as c,f as n,g as a,F,h as l,t as w}from"./index.2b175633.js";const D=`
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
`.trim(),B={data(){return{items:[{term:"Name",description:"My Product"},{term:"Feature One",description:"It's awesome"},{term:"Feature two",description:"It's fabulous"},{id:"fruit",term:"These are fruit",description:["Apple","Banana","Orange"]}],activeFile:"template",files:[{id:"template",filename:"template",code:D},{id:"script",filename:"script",code:x}]}}},T=l("Description List"),b=l("The component encloses a list of groups of terms and descriptions.");function I(L,p,N,O,t,k){const d=e("lv-heading"),m=e("lv-description-list",!0),_=e("lv-card"),u=e("lv-code"),f=e("component-details"),i=h("space-after");return s(),g(F,null,[o((s(),c(d,{level:3},{default:n(()=>[T]),_:1})),[[i,.5]]),o((s(),c(d,{sub:"",level:6},{default:n(()=>[b]),_:1})),[[i,2]]),o((s(),c(_,null,{default:n(()=>[a(m,{items:t.items},{fruit:n(({description:r})=>[l(w(r.join(", ")),1)]),_:1},8,["items"])]),_:1})),[[i,1]]),o(a(u,{lang:"html",files:t.files,active:t.activeFile,onChangeFile:p[0]||(p[0]=r=>t.activeFile=r)},null,8,["files","active"]),[[i,1]]),a(f,{component:"LvDescriptionList"})],64)}const C=v(B,[["render",I]]);export{C as default};
