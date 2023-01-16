import{_ as A,b as s,d as D,o as m,c as G,w as o,e as c,f as l,g as n,F as E,h as g,t as r}from"./index-dea56d21.js";const y=`
<lv-table :rows="rowsOptions" :columns="columnsOptions" :row-action="rowAction">
    <template #weight="{ value }"> {{ value }} kg </template>
    <template #age="{ value }"> {{ value }} years </template>
    <template #options>
        <lv-popover placement="bottom" trigger="mouseenter" interactive>
            <template #reference>
                <lv-button size="small" label="Options" color="solid-dimmed-primary" />
            </template>
            <template #content>
                <lv-flex direction="column">
                    <lv-button align="left" icon="plus-circle" size="small" label="Add" color="ghost-default" />
                    <lv-button align="left" icon="trash" size="small" label="Delete" color="ghost-default" />
                </lv-flex>
            </template>
        </lv-popover>
    </template>
</lv-table>
`.trim(),O=`
rowsOptions: [
    { age: 33, gender: 'male', name: 'Bob', weight: 80 },
    { age: 43, gender: 'female', name: 'Jane', weight: 69 },
    { age: 56, gender: 'male', name: 'George', weight: 131 },
],
columnsOptions: {
    name: {
        title: 'Name',
    },
    gender: {
        title: 'Gender',
        align: 'center'
    },
    age: {
        title: 'Age',
        align: 'center'
    },
    weight: {
        title: 'Weight',
        align: 'center'
    },
    options: {
        title: null,
        align: 'right',
        fitContent: true,
    },
},
`.trim(),S=`
<lv-table :rows="rowsDefault" :columns="columnsDefault">
    <template #weight="{ value }"> {{ value }} kg </template>
    <template #age="{ value }"> {{ value }} years </template>
</lv-table>
`.trim(),k=`
rowsDefault: [
    { age: 33, gender: 'male', name: 'Bob', weight: 80 },
    { age: 43, gender: 'female', name: 'Jane', weight: 69 },
    { age: 56, gender: 'male', name: 'George', weight: 131 },
],
columnsDefault: {
    name: {
        title: 'Name',
    },
    gender: {
        title: 'Gender',
        align: 'center',
    },
    age: {
        title: 'Age',
        align: 'center',
    },
    weight: {
        title: 'Weight',
        align: 'center',
    },
},
`.trim(),B=`
<lv-table :rows="rowsSorting" :columns="columnsSorting" :sort="sort" @update:sort="(v) => sort = v" >
    <template #weight="{ value }"> {{ value }} kg </template>
    <template #age="{ value }"> {{ value }} years </template>
</lv-table>
`.trim(),N=`
sort: 'weight',
rowsSorting: [
    { id: 1, age: 33, gender: 'male', name: 'Bob', weight: 80 },
    { id: 2, age: 43, gender: 'female', name: 'Jane', weight: 69 },
    { id: 3, age: 56, gender: 'male', name: 'George', weight: 131 },
],
columnsSorting: {
    name: {
        title: 'Name',
    },
    gender: {
        title: 'Gender',
        align: 'left',
    },
    age: {
        title: 'Age',
        align: 'left',
        sortable: true,
    },
    weight: {
        title: 'Weight',
        align: 'left',
        sortable: true,
    },
},
`.trim(),W=`
<lv-table :rows="rowsExpansion" :columns="columnsExpansion" :expandable-rows="true">
    <template #weight="{ value }"> {{ value }} kg </template>
    <template #age="{ value }"> {{ value }} years </template>
    <template #_expansion="{ row }">
        Expanded: {{ row }}
    </template>
</lv-table>
`.trim(),C=`
rowsExpansion: [
    { id: 1, age: 33, gender: 'male', name: 'Bob', weight: 80 },
    { id: 2, age: 43, gender: 'female', name: 'Jane', weight: 69 },
    { id: 3, age: 56, gender: 'male', name: 'George', weight: 131 },
],
columnsExpansion: {
    name: {
        title: 'Name',
    },
    gender: {
        title: 'Gender',
        align: 'center',
    },
    age: {
        title: 'Age',
        align: 'center',
    },
    weight: {
        title: 'Weight',
        align: 'center',
        sortable: true,
    },
},
`.trim(),J=`
<lv-table :rows="rowsAggregates" :columns="columnsAggregates">
    <template #weight="{ value }"> {{ Math.round(value) }} kg </template>
    <template #age="{ value }"> {{ Math.round(value) }} years </template>
</lv-table>
`.trim(),T=`
rowsAggregates: [
    { age: 33, gender: 'male', name: 'Bob', weight: 80, hello: 'world' },
    { age: 43, gender: 'female', name: 'Jane', weight: 69, hello: 'world' },
    { age: 56, gender: 'male', name: 'George', weight: 131, hello: 'world' },
],
columnsAggregates: {
    name: {
        title: 'Name',
    },
    gender: {
        title: 'Gender',
        align: 'center',
    },
    age: {
        title: 'Age',
        align: 'center',
        totals: true,
        averages: true,
    },
    weight: {
        title: 'Weight',
        align: 'right',
        totals: true,
        averages: true,
    },
},
`.trim(),z={data(){return{activeExpansionFile:"template",expansionFiles:[{id:"template",filename:"template",code:W,lang:"html"},{id:"script",filename:"script",code:C,lang:"js"}],activeSortFile:"template",sortFiles:[{id:"template",filename:"template",code:B,lang:"html"},{id:"script",filename:"script",code:N,lang:"js"}],activeDefaultFile:"template",defaultFiles:[{id:"template",filename:"template",code:S,lang:"html"},{id:"script",filename:"script",code:k,lang:"js"}],activeOptionsFile:"template",optionsFiles:[{id:"template",filename:"template",code:y,lang:"html"},{id:"script",filename:"script",code:O,lang:"js"}],activeAggregateFile:"template",aggregateFiles:[{id:"template",filename:"template",code:J,lang:"html"},{id:"script",filename:"script",code:T,lang:"js"}],activeTab:"default",tabs:[{id:"default",title:"Default",icon:"table"},{id:"options",title:"With Options",icon:"more-vertical"},{id:"sorting",title:"Sorting",icon:"sort-desc"},{id:"expansion",title:"Expandable Rows",icon:"chevrons-down"},{id:"empty",title:"Empty",icon:"eraser"},{id:"aggregates",title:"Aggregates",icon:"sigma"}],rowsDefault:[{age:33,gender:"male",name:"Bob",weight:80,hello:"world"},{age:43,gender:"female",name:"Jane",weight:69,hello:"world"},{age:56,gender:"male",name:"George",weight:131,hello:"world"}],columnsDefault:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"right"}},rowsAggregates:[{age:33,gender:"male",name:"Bob",weight:80,hello:"world"},{age:43,gender:"female",name:"Jane",weight:69,hello:"world"},{age:56,gender:"male",name:"George",weight:131,hello:"world"}],columnsAggregates:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center",totals:!0,averages:!0},weight:{title:"Weight",align:"right",totals:!0,averages:!0}},rowsOptions:[{id:1,age:33,gender:"male",name:"Bob",weight:80},{id:2,age:43,gender:"female",name:"Jane",weight:69},{id:3,age:56,gender:"male",name:"George",weight:131}],columnsOptions:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"center"},options:{title:null,align:"right",fitContent:!0}},sort:"weight",rowsExpansion:[{id:1,age:33,gender:"male",name:"Bob",weight:80},{id:2,age:43,gender:"female",name:"Jane",weight:69},{id:3,age:56,gender:"male",name:"George",weight:131}],columnsExpansion:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"right"}},rowsSorting:[{id:1,age:33,gender:"male",name:"Bob",weight:80},{id:2,age:43,gender:"female",name:"Jane",weight:69},{id:3,age:56,gender:"male",name:"George",weight:131}],columnsSorting:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"right",sortable:!0}}}},methods:{rowAction({row:v}){console.log(v)}}};function j(v,a,M,V,t,f){const h=s("lv-heading"),p=s("lv-table",!0),u=s("lv-card"),d=s("lv-code"),w=s("lv-button"),b=s("lv-flex"),_=s("lv-popover"),x=s("lv-tabs"),F=s("component-details"),i=D("space-after");return m(),G(E,null,[o((m(),c(h,{level:3},{default:l(()=>[g("Table")]),_:1})),[[i,.5]]),o((m(),c(h,{sub:"",level:6},{default:l(()=>[g("Organize your rows")]),_:1})),[[i,2]]),n(x,{tabs:t.tabs,active:t.activeTab,onChangeTab:a[6]||(a[6]=e=>t.activeTab=e)},{default:l(()=>[o((m(),c(u,null,{default:l(()=>[n(p,{rows:t.rowsDefault,columns:t.columnsDefault},{weight:l(({value:e})=>[g(r(e)+" kg ",1)]),age:l(({value:e})=>[g(r(e)+" years ",1)]),_:1},8,["rows","columns"])]),_:1})),[[i,1]]),o(n(d,{files:t.defaultFiles,active:t.activeDefaultFile,onChangeFile:a[0]||(a[0]=e=>t.activeDefaultFile=e)},null,8,["files","active"]),[[i,1]])]),options:l(()=>[o((m(),c(u,null,{default:l(()=>[n(p,{rows:t.rowsOptions,columns:t.columnsOptions,"row-action":f.rowAction},{weight:l(({value:e})=>[g(r(e)+" kg ",1)]),age:l(({value:e})=>[g(r(e)+" years ",1)]),options:l(()=>[n(_,{placement:"left",trigger:"mouseenter focus",interactive:""},{reference:l(()=>[n(w,{size:"small",label:"Options",color:"solid-dimmed-primary"})]),content:l(()=>[n(b,{direction:"column"},{default:l(()=>[n(w,{align:"left",icon:"plus-circle",size:"small",label:"Add",color:"ghost-default"}),n(w,{align:"left",icon:"trash",size:"small",label:"Delete",color:"ghost-default"})]),_:1})]),_:1})]),_:1},8,["rows","columns","row-action"])]),_:1})),[[i,1]]),o(n(d,{files:t.optionsFiles,active:t.activeOptionsFile,onChangeFile:a[1]||(a[1]=e=>t.activeOptionsFile=e)},null,8,["files","active"]),[[i,1]])]),expansion:l(()=>[o((m(),c(u,null,{default:l(()=>[n(p,{rows:t.rowsExpansion,columns:t.columnsExpansion,"expandable-rows":!0},{weight:l(({value:e})=>[g(r(e)+" kg ",1)]),age:l(({value:e})=>[g(r(e)+" years ",1)]),_expansion:l(({row:e})=>[g(" Expanded: "+r(e),1)]),_:1},8,["rows","columns"])]),_:1})),[[i,1]]),o(n(d,{files:t.expansionFiles,active:t.activeExpansionFile,onChangeFile:a[2]||(a[2]=e=>t.activeExpansionFile=e)},null,8,["files","active"]),[[i,1]])]),sorting:l(()=>[o((m(),c(u,null,{default:l(()=>[n(p,{rows:t.rowsSorting,columns:t.columnsSorting,sort:t.sort,"onUpdate:sort":a[3]||(a[3]=e=>t.sort=e)},{weight:l(({value:e})=>[g(r(e)+" kg ",1)]),age:l(({value:e})=>[g(r(e)+" years ",1)]),_:1},8,["rows","columns","sort"])]),_:1})),[[i,1]]),o(n(d,{files:t.sortFiles,active:t.activeSortFile,onChangeFile:a[4]||(a[4]=e=>t.activeSortFile=e)},null,8,["files","active"]),[[i,1]])]),empty:l(()=>[o((m(),c(u,null,{default:l(()=>[n(p,{columns:t.columnsDefault},null,8,["columns"])]),_:1})),[[i,1]])]),aggregates:l(()=>[o((m(),c(u,null,{default:l(()=>[n(p,{rows:t.rowsAggregates,columns:t.columnsAggregates},{weight:l(({value:e})=>[g(r(Math.round(e))+" kg ",1)]),age:l(({value:e})=>[g(r(Math.round(e))+" years ",1)]),_:1},8,["rows","columns"])]),_:1})),[[i,1]]),o(n(d,{files:t.aggregateFiles,active:t.activeAggregateFile,onChangeFile:a[5]||(a[5]=e=>t.activeAggregateFile=e)},null,8,["files","active"]),[[i,1]])]),_:1},8,["tabs","active"]),n(F,{component:"LvTable"})],64)}const R=A(z,[["render",j]]);export{R as default};
