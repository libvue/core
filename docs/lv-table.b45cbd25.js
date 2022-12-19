import{_ as O,b as i,d as S,o as g,c as y,w as r,e as c,f as l,g as n,F as G,h as s,t as m}from"./index.43daceef.js";const A=`
<lv-table :rows="rowsOptions" :columns="columnsOptions" :row-action="rowAction">
    <template #weight="{ value }"> {{ value }} kg </template>
    <template #age="{ value }"> {{ value }} years </template>
    <template #options>
        <lv-popover placement="bottom" trigger="mouseenter" interactive>
            <template #reference>
                <lv-button size="small" label="Options" color="solid-dimmed-primary" stop-propagation />
            </template>
            <template #content>
                <lv-flex direction="column">
                    <lv-button align="left" icon="plus-circle" size="small" label="Add" color="ghost-default" stop-propagation />
                    <lv-button align="left" icon="trash" size="small" label="Delete" color="ghost-default" stop-propagation />
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
`.trim(),T={data(){return{activeSortFile:"template",sortFiles:[{id:"template",filename:"template",code:C,lang:"html"},{id:"script",filename:"script",code:N,lang:"js"}],activeDefaultFile:"template",defaultFiles:[{id:"template",filename:"template",code:x,lang:"html"},{id:"script",filename:"script",code:B,lang:"js"}],activeOptionsFile:"template",optionsFiles:[{id:"template",filename:"template",code:A,lang:"html"},{id:"script",filename:"script",code:k,lang:"js"}],activeTab:"default",tabs:[{id:"default",title:"Default",icon:"table"},{id:"options",title:"With Options",icon:"more-vertical"},{id:"sorting",title:"Sorting",icon:"sort-desc"},{id:"empty",title:"Empty",icon:"eraser"}],rowsDefault:[{age:33,gender:"male",name:"Bob",weight:80,hello:"world"},{age:43,gender:"female",name:"Jane",weight:69,hello:"world"},{age:56,gender:"male",name:"George",weight:131,hello:"world"}],columnsDefault:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"center"}},rowsOptions:[{id:1,age:33,gender:"male",name:"Bob",weight:80},{id:2,age:43,gender:"female",name:"Jane",weight:69},{id:3,age:56,gender:"male",name:"George",weight:131}],columnsOptions:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"center"},options:{title:null,align:"right",fitContent:!0}},sort:"weight",rowsSorting:[{id:1,age:33,gender:"male",name:"Bob",weight:80},{id:2,age:43,gender:"female",name:"Jane",weight:69},{id:3,age:56,gender:"male",name:"George",weight:131}],columnsSorting:{name:{title:"Name"},gender:{title:"Gender",align:"center"},age:{title:"Age",align:"center"},weight:{title:"Weight",align:"center",sortable:!0}}}},methods:{rowAction({row:f}){console.log(f)}}},z=s("Table"),W=s("Organize your rows");function J(f,o,j,E,e,h){const w=i("lv-heading"),p=i("lv-table",!0),u=i("lv-card"),d=i("lv-code"),v=i("lv-button"),b=i("lv-flex"),_=i("lv-popover"),D=i("lv-tabs"),F=i("component-details"),a=S("space-after");return g(),y(G,null,[r((g(),c(w,{level:3},{default:l(()=>[z]),_:1})),[[a,.5]]),r((g(),c(w,{sub:"",level:6},{default:l(()=>[W]),_:1})),[[a,2]]),n(D,{tabs:e.tabs,active:e.activeTab,onChangeTab:o[4]||(o[4]=t=>e.activeTab=t)},{default:l(()=>[r((g(),c(u,null,{default:l(()=>[n(p,{rows:e.rowsDefault,columns:e.columnsDefault},{weight:l(({value:t})=>[s(m(t)+" kg ",1)]),age:l(({value:t})=>[s(m(t)+" years ",1)]),_:1},8,["rows","columns"])]),_:1})),[[a,1]]),r(n(d,{files:e.defaultFiles,active:e.activeDefaultFile,onChangeFile:o[0]||(o[0]=t=>e.activeDefaultFile=t)},null,8,["files","active"]),[[a,1]])]),options:l(()=>[r((g(),c(u,null,{default:l(()=>[n(p,{rows:e.rowsOptions,columns:e.columnsOptions,"row-action":h.rowAction},{weight:l(({value:t})=>[s(m(t)+" kg ",1)]),age:l(({value:t})=>[s(m(t)+" years ",1)]),options:l(()=>[n(_,{placement:"left",trigger:"mouseenter",interactive:""},{reference:l(()=>[n(v,{size:"small",label:"Options",color:"solid-dimmed-primary","stop-propagation":""})]),content:l(()=>[n(b,{direction:"column"},{default:l(()=>[n(v,{align:"left",icon:"plus-circle",size:"small",label:"Add",color:"ghost-default","stop-propagation":""}),n(v,{align:"left",icon:"trash",size:"small",label:"Delete",color:"ghost-default","stop-propagation":""})]),_:1})]),_:1})]),_:1},8,["rows","columns","row-action"])]),_:1})),[[a,1]]),r(n(d,{files:e.optionsFiles,active:e.activeOptionsFile,onChangeFile:o[1]||(o[1]=t=>e.activeOptionsFile=t)},null,8,["files","active"]),[[a,1]])]),sorting:l(()=>[r((g(),c(u,null,{default:l(()=>[n(p,{rows:e.rowsSorting,columns:e.columnsSorting,sort:e.sort,"onUpdate:sort":o[2]||(o[2]=t=>e.sort=t)},{weight:l(({value:t})=>[s(m(t)+" kg ",1)]),age:l(({value:t})=>[s(m(t)+" years ",1)]),_:1},8,["rows","columns","sort"])]),_:1})),[[a,1]]),r(n(d,{files:e.sortFiles,active:e.activeSortFile,onChangeFile:o[3]||(o[3]=t=>e.activeSortFile=t)},null,8,["files","active"]),[[a,1]])]),empty:l(()=>[n(u,null,{default:l(()=>[n(p,{columns:e.columnsDefault},null,8,["columns"])]),_:1})]),_:1},8,["tabs","active"]),n(F,{component:"LvTable"})],64)}const L=O(T,[["render",J]]);export{L as default};
