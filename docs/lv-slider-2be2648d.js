import{_ as x,b as e,d as g,o,c as h,w as n,e as d,f as t,g as c,F as V,h as i}from"./index-fe684972.js";const k=`
<lv-slider v-model="model" :min="100" :max="200" :step="5"></lv-slider>
`.trim(),w={data(){return{code:k,model:110}}};function B(S,a,b,C,s,D){const r=e("lv-heading"),_=e("lv-slider",!0),m=e("lv-flex"),p=e("lv-card"),v=e("lv-code"),u=e("component-details"),l=g("space-after");return o(),h(V,null,[n((o(),d(r,{level:3},{default:t(()=>[i("Slider")]),_:1})),[[l,.5]]),n((o(),d(r,{sub:"",level:6},{default:t(()=>[i("An single slider input")]),_:1})),[[l,2]]),n((o(),d(p,null,{default:t(()=>[c(m,{direction:"column"},{default:t(()=>[c(_,{modelValue:s.model,"onUpdate:modelValue":a[0]||(a[0]=f=>s.model=f),min:100,max:200,step:5,loading:""},null,8,["modelValue"])]),_:1})]),_:1})),[[l,1]]),c(v,{code:s.code,lang:"html"},null,8,["code"]),n(c(u,{component:"LvSlider"},null,512),[[l,1]])],64)}const N=x(w,[["render",B]]);export{N as default};
