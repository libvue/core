import{_ as w,o as s,c as b,w as r,b as i,d as e,e as t,F as y,f as o,g as l,h as x}from"./index.33814177.js";const F=`
<lv-grid>
    <lv-grid-row gap="1rem">
        <lv-grid-column :width="6">
            <lv-fieldset label="Username" label-for="input-username" reset-button>
                <lv-input placeholder="Enter username" id="input-username"/>
                <template #hint>
                    Please enter a username
                </template>
                <template #invalid>
                    Oops! You did it wrong!
                </template>
            </lv-fieldset>
        </lv-grid-column>
        <lv-grid-column :width="6">
            <lv-fieldset label="Country" label-for="select-country" reset-button>
                <lv-select id="select-country" />
                <template #hint>
                    The country where you are living
                </template>
                <template #invalid>
                    Oops! You did it wrong!
                </template>
            </lv-fieldset>
        </lv-grid-column>
    </lv-grid-row>
</lv-grid>
`.trim(),C={data(){return{code:F}}},O=o("Fieldset"),Y=o("A composition of form controls, labels, hints & validations messages"),k=o(" Please enter a username "),B=o(" Oops! You did it wrong! "),E=o(" The country where you are living "),T=o(" Oops! You did it wrong! ");function $(D,N,P,U,_,V){const a=l("lv-heading"),u=l("lv-input"),c=l("lv-fieldset",!0),d=l("lv-grid-column"),m=l("lv-select"),p=l("lv-grid-row"),v=l("lv-grid"),f=l("lv-card"),g=l("lv-code"),h=l("component-details"),n=x("space-after");return s(),b(y,null,[r((s(),i(a,{level:3},{default:e(()=>[O]),_:1})),[[n,.5]]),r((s(),i(a,{sub:"",level:6},{default:e(()=>[Y]),_:1})),[[n,2]]),r((s(),i(f,null,{default:e(()=>[t(v,null,{default:e(()=>[t(p,{gap:"1rem"},{default:e(()=>[t(d,{width:6},{default:e(()=>[t(c,{label:"Username","label-for":"input-username","reset-button":""},{hint:e(()=>[k]),invalid:e(()=>[B]),default:e(()=>[t(u,{placeholder:"Enter username",id:"input-username"})]),_:1})]),_:1}),t(d,{width:6},{default:e(()=>[t(c,{label:"Country","label-for":"select-country","reset-button":""},{hint:e(()=>[E]),invalid:e(()=>[T]),default:e(()=>[t(m,{id:"select-country"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})),[[n,1]]),r(t(g,{lang:"html",code:_.code},null,8,["code"]),[[n,1]]),t(h,{component:"LvFieldset"})],64)}const L=w(C,[["render",$]]);export{L as default};
