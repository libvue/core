import{_ as a,o as r,c as d,y as n,z as u}from"./index.24228458.js";const c={props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],computed:{classObject(){return{"lv-toggle--pressed":!!this.modelValue}}},methods:{onClickToggle(){this.$emit("update:modelValue",!this.modelValue)}}},i=["aria-pressed"];function g(t,l,o,m,_,e){return r(),d("button",{class:u(["lv-toggle",e.classObject]),type:"button","aria-pressed":o.modelValue,onClick:l[0]||(l[0]=(...s)=>e.onClickToggle&&e.onClickToggle(...s))},[n(t.$slots,"default")],10,i)}const f=a(c,[["render",g]]);export{f as default};
