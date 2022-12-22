import{_ as f,o,c as F,w as i,b as n,d as c,e as r,F as h,f as m,g as e,h as g}from"./index.8ae4626b.js";const w=`
<lv-card v-space-after="1">
    <lv-description-list :items="items" />
</lv-card>
`.trim(),I=`
items: [
    { term: 'Name', description: 'My Product' },
    { term: 'Feature One', description: 'It\\'s awesome' },
    { term: 'Feature two', description: 'It\\'s fabulous' },
    { term: 'The Final feature', description: 'It\\'s done' },
],
`.trim(),x={data(){return{items:[{term:"Name",description:"My Product"},{term:"Feature One",description:"It's awesome"},{term:"Feature two",description:"It's fabulous"},{term:"The Final feature",description:"It's done"}],activeFile:"template",files:[{id:"template",filename:"template",code:w},{id:"script",filename:"script",code:I}]}}},D=m("Description List"),T=m("The component encloses a list of groups of terms and descriptions.");function b(L,l,N,k,t,B){const a=e("lv-heading"),p=e("lv-description-list",!0),d=e("lv-card"),_=e("lv-code"),u=e("component-details"),s=g("space-after");return o(),F(h,null,[i((o(),n(a,{level:3},{default:c(()=>[D]),_:1})),[[s,.5]]),i((o(),n(a,{sub:"",level:6},{default:c(()=>[T]),_:1})),[[s,2]]),i((o(),n(d,null,{default:c(()=>[r(p,{items:t.items},null,8,["items"])]),_:1})),[[s,1]]),i(r(_,{lang:"html",files:t.files,active:t.activeFile,onChangeFile:l[0]||(l[0]=v=>t.activeFile=v)},null,8,["files","active"]),[[s,1]]),r(u,{component:"LvDescriptionList"})],64)}const y=f(x,[["render",b]]);export{y as default};
