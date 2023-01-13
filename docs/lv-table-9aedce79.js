import{_ as D,b as s,d as E,o as m,c as O,w as o,e as c,f as l,g as n,F as G,h as r,t as g}from"./index-71bd3e8c.js";const y=`
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
`.trim(),S=`
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
`.trim(),A=`
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
`.trim(),C=`
<lv-table :rows="rowsExpansion" :columns="columnsExpansion" :expandable-rows="true">
    <template #weight="{ value }"> {{ value }} kg </template>
    <template #age="{ value }"> {{ value }} years </template>
    <template #_expansion="{ row }">
        Expanded: {{ row }}
    </template>
</lv-table>
`.trim(),W=`
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
`.trim(),J={data(){return{activeExpansionFile:"template",expansionFiles:[{id:"template",filename:"template",code:C,lang:"html"},{id:"script",filename:"script",code:W,lang:"js"}],activeSortFile:"template",sortFiles:[{id:"template",filename:"template",code:B,lang:"html"},{id:"script",filename:"script",code:N,lang:"js"}],activeDefaultFile:"template",defaultFiles:[{id:"template",filename:"template",code:A,lang:"html"},{id:"script",filename:"script",code:k,lang:"js"}],activeOptionsFile:"template",optionsFiles:[{id:"template",filename:"template",code:y,lang:"html"},{id:"script",filename:"script",code:S,lang:"js"}],activeTab:"default",tabs:[{id:"default",title:"Default",icon:"table"},{id:"options",title:"With Options",icon:"more-vertical"},{id:"sorting",title:"Sorting",icon:"sort-desc"},{id:"expansion",title:"Expandable Rows",icon:"chevrons-down"},{id:"empty",title:"Empty",icon:"eraser"}],rowsDefault:[{age:33,gender:"male",name:"Bob",weight:80,hello:"world"},{age:43,gender:"female",name:"Jane",weight:69,hello:"world"},{age:56,gender:"male",name:"George",weight:131,hello:"world"}],columnsDefault:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"right"}},rowsOptions:[{id:1,age:33,gender:"male",name:"Bob",weight:80},{id:2,age:43,gender:"female",name:"Jane",weight:69},{id:3,age:56,gender:"male",name:"George",weight:131}],columnsOptions:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"center"},options:{title:null,align:"right",fitContent:!0}},sort:"weight",rowsExpansion:[{id:1,age:33,gender:"male",name:"Bob",weight:80},{id:2,age:43,gender:"female",name:"Jane",weight:69},{id:3,age:56,gender:"male",name:"George",weight:131}],columnsExpansion:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"right"}},rowsSorting:[{id:1,age:33,gender:"male",name:"Bob",weight:80},{id:2,age:43,gender:"female",name:"Jane",weight:69},{id:3,age:56,gender:"male",name:"George",weight:131}],columnsSorting:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"right",sortable:!0}}}},methods:{rowAction({row:w}){console.log(w)}}};function T(w,i,z,j,t,h){const f=s("lv-heading"),p=s("lv-table",!0),u=s("lv-card"),d=s("lv-code"),v=s("lv-button"),b=s("lv-flex"),_=s("lv-popover"),x=s("lv-tabs"),F=s("component-details"),a=E("space-after");return m(),O(G,null,[o((m(),c(f,{level:3},{default:l(()=>[r("Table")]),_:1})),[[a,.5]]),o((m(),c(f,{sub:"",level:6},{default:l(()=>[r("Organize your rows")]),_:1})),[[a,2]]),n(x,{tabs:t.tabs,active:t.activeTab,onChangeTab:i[5]||(i[5]=e=>t.activeTab=e)},{default:l(()=>[o((m(),c(u,null,{default:l(()=>[n(p,{rows:t.rowsDefault,columns:t.columnsDefault},{weight:l(({value:e})=>[r(g(e)+" kg ",1)]),age:l(({value:e})=>[r(g(e)+" years ",1)]),_:1},8,["rows","columns"])]),_:1})),[[a,1]]),o(n(d,{files:t.defaultFiles,active:t.activeDefaultFile,onChangeFile:i[0]||(i[0]=e=>t.activeDefaultFile=e)},null,8,["files","active"]),[[a,1]])]),options:l(()=>[o((m(),c(u,null,{default:l(()=>[n(p,{rows:t.rowsOptions,columns:t.columnsOptions,"row-action":h.rowAction},{weight:l(({value:e})=>[r(g(e)+" kg ",1)]),age:l(({value:e})=>[r(g(e)+" years ",1)]),options:l(()=>[n(_,{placement:"left",trigger:"mouseenter focus",interactive:""},{reference:l(()=>[n(v,{size:"small",label:"Options",color:"solid-dimmed-primary"})]),content:l(()=>[n(b,{direction:"column"},{default:l(()=>[n(v,{align:"left",icon:"plus-circle",size:"small",label:"Add",color:"ghost-default"}),n(v,{align:"left",icon:"trash",size:"small",label:"Delete",color:"ghost-default"})]),_:1})]),_:1})]),_:1},8,["rows","columns","row-action"])]),_:1})),[[a,1]]),o(n(d,{files:t.optionsFiles,active:t.activeOptionsFile,onChangeFile:i[1]||(i[1]=e=>t.activeOptionsFile=e)},null,8,["files","active"]),[[a,1]])]),expansion:l(()=>[o((m(),c(u,null,{default:l(()=>[n(p,{rows:t.rowsExpansion,columns:t.columnsExpansion,"expandable-rows":!0},{weight:l(({value:e})=>[r(g(e)+" kg ",1)]),age:l(({value:e})=>[r(g(e)+" years ",1)]),_expansion:l(({row:e})=>[r(" Expanded: "+g(e),1)]),_:1},8,["rows","columns"])]),_:1})),[[a,1]]),o(n(d,{files:t.expansionFiles,active:t.activeExpansionFile,onChangeFile:i[2]||(i[2]=e=>t.activeExpansionFile=e)},null,8,["files","active"]),[[a,1]])]),sorting:l(()=>[o((m(),c(u,null,{default:l(()=>[n(p,{rows:t.rowsSorting,columns:t.columnsSorting,sort:t.sort,"onUpdate:sort":i[3]||(i[3]=e=>t.sort=e)},{weight:l(({value:e})=>[r(g(e)+" kg ",1)]),age:l(({value:e})=>[r(g(e)+" years ",1)]),_:1},8,["rows","columns","sort"])]),_:1})),[[a,1]]),o(n(d,{files:t.sortFiles,active:t.activeSortFile,onChangeFile:i[4]||(i[4]=e=>t.activeSortFile=e)},null,8,["files","active"]),[[a,1]])]),empty:l(()=>[o((m(),c(u,null,{default:l(()=>[n(p,{columns:t.columnsDefault},null,8,["columns"])]),_:1})),[[a,1]])]),_:1},8,["tabs","active"]),n(F,{component:"LvTable"})],64)}const L=D(J,[["render",T]]);export{L as default};
