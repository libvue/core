import{_ as V,b as n,d as f,o as t,c as g,w as i,e as r,f as u,g as a,F as x,h as v}from"./index-7fe7c56b.js";const w=`
<lv-radio v-model="model" value="a" name="option" label="Kermit" />
<lv-radio v-model="model" value="b" name="option" label="Batman" />
<lv-radio v-model="model" value="c" name="option" label="Trump" />
<lv-radio v-model="model" value="d" name="option" label="Disabled" disabled />
<lv-radio v-model="model" value="e" name="option" label="Loading" loading />
`.trim(),B={data(){return{code:w,model:"a"}}};function U(h,l,k,D,e,C){const s=n("lv-heading"),d=n("lv-radio",!0),p=n("lv-flex"),c=n("lv-card"),_=n("lv-code"),b=n("component-details"),m=f("space-after");return t(),g(x,null,[i((t(),r(s,{level:3},{default:u(()=>[v("Radio")]),_:1})),[[m,.5]]),i((t(),r(s,{sub:"",level:6},{default:u(()=>[v("Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.")]),_:1})),[[m,2]]),i((t(),r(c,null,{default:u(()=>[a(p,null,{default:u(()=>[a(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=o=>e.model=o),value:"a",name:"option",label:"Kermit"},null,8,["modelValue"]),a(d,{modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=o=>e.model=o),value:"b",name:"option",label:"Batman"},null,8,["modelValue"]),a(d,{modelValue:e.model,"onUpdate:modelValue":l[2]||(l[2]=o=>e.model=o),value:"c",name:"option",label:"Trump"},null,8,["modelValue"]),a(d,{modelValue:e.model,"onUpdate:modelValue":l[3]||(l[3]=o=>e.model=o),value:"d",name:"option",label:"Disabled",disabled:""},null,8,["modelValue"]),a(d,{modelValue:e.model,"onUpdate:modelValue":l[4]||(l[4]=o=>e.model=o),value:"e",name:"option",label:"Loading",loading:""},null,8,["modelValue"])]),_:1})]),_:1})),[[m,1]]),i(a(_,{lang:"html",code:e.code},null,8,["code"]),[[m,1]]),a(b,{component:"LvCheckbox"})],64)}const R=V(B,[["render",U]]);export{R as default};