import{_ as w,b as t,d as b,o as r,c as y,w as a,e as i,f as e,g as l,F as x,h as n}from"./index-9aa14228.js";const F=`
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
`.trim(),C={data(){return{code:F}}};function O(Y,k,B,E,u,T){const s=t("lv-heading"),_=t("lv-input"),c=t("lv-fieldset",!0),d=t("lv-grid-column"),m=t("lv-select"),p=t("lv-grid-row"),v=t("lv-grid"),f=t("lv-card"),g=t("lv-code"),h=t("component-details"),o=b("space-after");return r(),y(x,null,[a((r(),i(s,{level:3},{default:e(()=>[n("Fieldset")]),_:1})),[[o,.5]]),a((r(),i(s,{sub:"",level:6},{default:e(()=>[n("A composition of form controls, labels, hints & validations messages")]),_:1})),[[o,2]]),a((r(),i(f,null,{default:e(()=>[l(v,null,{default:e(()=>[l(p,{gap:"1rem"},{default:e(()=>[l(d,{width:6},{default:e(()=>[l(c,{label:"Username","label-for":"input-username","reset-button":""},{hint:e(()=>[n(" Please enter a username ")]),invalid:e(()=>[n(" Oops! You did it wrong! ")]),default:e(()=>[l(_,{placeholder:"Enter username",id:"input-username"})]),_:1})]),_:1}),l(d,{width:6},{default:e(()=>[l(c,{label:"Country","label-for":"select-country","reset-button":""},{hint:e(()=>[n(" The country where you are living ")]),invalid:e(()=>[n(" Oops! You did it wrong! ")]),default:e(()=>[l(m,{id:"select-country"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})),[[o,1]]),a(l(g,{lang:"html",code:u.code},null,8,["code"]),[[o,1]]),l(h,{component:"LvFieldset"})],64)}const D=w(C,[["render",O]]);export{D as default};
