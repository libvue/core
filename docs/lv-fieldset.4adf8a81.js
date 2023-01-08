import{_ as w,b as t,d as b,o as s,c as y,w as r,e as i,f as e,g as l,F as x,h as o}from"./index.2b175633.js";const F=`
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
`.trim(),C={data(){return{code:F}}},O=o("Fieldset"),Y=o("A composition of form controls, labels, hints & validations messages"),k=o(" Please enter a username "),B=o(" Oops! You did it wrong! "),E=o(" The country where you are living "),T=o(" Oops! You did it wrong! ");function $(D,N,P,U,_,V){const a=t("lv-heading"),u=t("lv-input"),c=t("lv-fieldset",!0),d=t("lv-grid-column"),m=t("lv-select"),p=t("lv-grid-row"),v=t("lv-grid"),f=t("lv-card"),g=t("lv-code"),h=t("component-details"),n=b("space-after");return s(),y(x,null,[r((s(),i(a,{level:3},{default:e(()=>[O]),_:1})),[[n,.5]]),r((s(),i(a,{sub:"",level:6},{default:e(()=>[Y]),_:1})),[[n,2]]),r((s(),i(f,null,{default:e(()=>[l(v,null,{default:e(()=>[l(p,{gap:"1rem"},{default:e(()=>[l(d,{width:6},{default:e(()=>[l(c,{label:"Username","label-for":"input-username","reset-button":""},{hint:e(()=>[k]),invalid:e(()=>[B]),default:e(()=>[l(u,{placeholder:"Enter username",id:"input-username"})]),_:1})]),_:1}),l(d,{width:6},{default:e(()=>[l(c,{label:"Country","label-for":"select-country","reset-button":""},{hint:e(()=>[E]),invalid:e(()=>[T]),default:e(()=>[l(m,{id:"select-country"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})),[[n,1]]),r(l(g,{lang:"html",code:_.code},null,8,["code"]),[[n,1]]),l(h,{component:"LvFieldset"})],64)}const L=w(C,[["render",$]]);export{L as default};
