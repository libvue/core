import{_ as O,o as g,c as S,w as a,b as m,d as l,e as n,f as s,t as c,F as y,g as r,h as G}from"./index.33814177.js";const A=`
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
`.trim(),k=`
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
`.trim(),x=`
<lv-table :rows="rowsDefault" :columns="columnsDefault">
    <template #weight="{ value }"> {{ value }} kg </template>
    <template #age="{ value }"> {{ value }} years </template>
</lv-table>
`.trim(),B=`
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
`.trim(),C=`
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
`.trim(),T={data(){return{activeSortFile:"template",sortFiles:[{id:"template",filename:"template",code:C,lang:"html"},{id:"script",filename:"script",code:N,lang:"js"}],activeDefaultFile:"template",defaultFiles:[{id:"template",filename:"template",code:x,lang:"html"},{id:"script",filename:"script",code:B,lang:"js"}],activeOptionsFile:"template",optionsFiles:[{id:"template",filename:"template",code:A,lang:"html"},{id:"script",filename:"script",code:k,lang:"js"}],activeTab:"default",tabs:[{id:"default",title:"Default",icon:"table"},{id:"options",title:"With Options",icon:"more-vertical"},{id:"sorting",title:"Sorting",icon:"sort-desc"},{id:"empty",title:"Empty",icon:"eraser"}],rowsDefault:[{age:33,gender:"male",name:"Bob",weight:80,hello:"world"},{age:43,gender:"female",name:"Jane",weight:69,hello:"world"},{age:56,gender:"male",name:"George",weight:131,hello:"world"}],columnsDefault:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"center"}},rowsOptions:[{id:1,age:33,gender:"male",name:"Bob",weight:80},{id:2,age:43,gender:"female",name:"Jane",weight:69},{id:3,age:56,gender:"male",name:"George",weight:131}],columnsOptions:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"center"},options:{title:null,align:"right",fitContent:!0}},sort:"weight",rowsSorting:[{id:1,age:33,gender:"male",name:"Bob",weight:80},{id:2,age:43,gender:"female",name:"Jane",weight:69},{id:3,age:56,gender:"male",name:"George",weight:131}],columnsSorting:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"center",sortable:!0}}}},methods:{rowAction({row:f}){console.log(f)}}},z=s("Table"),W=s("Organize your rows");function J(f,o,j,E,e,h){const w=r("lv-heading"),p=r("lv-table",!0),u=r("lv-card"),d=r("lv-code"),v=r("lv-button"),b=r("lv-flex"),_=r("lv-popover"),D=r("lv-tabs"),F=r("component-details"),i=G("space-after");return g(),S(y,null,[a((g(),m(w,{level:3},{default:l(()=>[z]),_:1})),[[i,.5]]),a((g(),m(w,{sub:"",level:6},{default:l(()=>[W]),_:1})),[[i,2]]),n(D,{tabs:e.tabs,active:e.activeTab,onChangeTab:o[4]||(o[4]=t=>e.activeTab=t)},{default:l(()=>[a((g(),m(u,null,{default:l(()=>[n(p,{rows:e.rowsDefault,columns:e.columnsDefault},{weight:l(({value:t})=>[s(c(t)+" kg ",1)]),age:l(({value:t})=>[s(c(t)+" years ",1)]),_:1},8,["rows","columns"])]),_:1})),[[i,1]]),a(n(d,{files:e.defaultFiles,active:e.activeDefaultFile,onChangeFile:o[0]||(o[0]=t=>e.activeDefaultFile=t)},null,8,["files","active"]),[[i,1]])]),options:l(()=>[a((g(),m(u,null,{default:l(()=>[n(p,{rows:e.rowsOptions,columns:e.columnsOptions,"row-action":h.rowAction},{weight:l(({value:t})=>[s(c(t)+" kg ",1)]),age:l(({value:t})=>[s(c(t)+" years ",1)]),options:l(()=>[n(_,{placement:"left",trigger:"mouseenter focus",interactive:""},{reference:l(()=>[n(v,{size:"small",label:"Options",color:"solid-dimmed-primary"})]),content:l(()=>[n(b,{direction:"column"},{default:l(()=>[n(v,{align:"left",icon:"plus-circle",size:"small",label:"Add",color:"ghost-default"}),n(v,{align:"left",icon:"trash",size:"small",label:"Delete",color:"ghost-default"})]),_:1})]),_:1})]),_:1},8,["rows","columns","row-action"])]),_:1})),[[i,1]]),a(n(d,{files:e.optionsFiles,active:e.activeOptionsFile,onChangeFile:o[1]||(o[1]=t=>e.activeOptionsFile=t)},null,8,["files","active"]),[[i,1]])]),sorting:l(()=>[a((g(),m(u,null,{default:l(()=>[n(p,{rows:e.rowsSorting,columns:e.columnsSorting,sort:e.sort,"onUpdate:sort":o[2]||(o[2]=t=>e.sort=t)},{weight:l(({value:t})=>[s(c(t)+" kg ",1)]),age:l(({value:t})=>[s(c(t)+" years ",1)]),_:1},8,["rows","columns","sort"])]),_:1})),[[i,1]]),a(n(d,{files:e.sortFiles,active:e.activeSortFile,onChangeFile:o[3]||(o[3]=t=>e.activeSortFile=t)},null,8,["files","active"]),[[i,1]])]),empty:l(()=>[a((g(),m(u,null,{default:l(()=>[n(p,{columns:e.columnsDefault},null,8,["columns"])]),_:1})),[[i,1]])]),_:1},8,["tabs","active"]),n(F,{component:"LvTable"})],64)}const L=O(T,[["render",J]]);export{L as default};
