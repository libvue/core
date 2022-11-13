import u from"./LvIcon.f7d654ca.js";import{_ as r,o as a,c,p as s,x as i,i as p,L as m,z as _,s as f}from"./index.608cace3.js";const v={inheritAttrs:!1,components:{LvIcon:u},props:{modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},error:{type:Boolean,default:!1},success:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},icon:{type:String,default:""},type:{type:String,default:"text",validator(t){return["text","email","password","tel","file"].includes(t)}}},emits:["update:modelValue"],computed:{classObject(){return{"lv-input--error":this.error,"lv-input--success":this.success,"lv-input--icon":this.icon,"lv-input--readonly":this.readonly,"lv-input--disabled":this.disabled||this.loading,"lv-input--loading":this.loading}}},methods:{onInput(t){this.$emit("update:modelValue",t.target.value)}}},y=["value","type","placeholder","disabled","readonly"];function g(t,n,e,h,b,l){const o=f("lv-icon");return a(),c("div",{class:_(["lv-input",l.classObject])},[e.icon?(a(),s(o,{key:0,class:"lv-input__icon",size:16,name:e.icon},null,8,["name"])):i("",!0),p("input",m(t.$attrs,{value:e.modelValue,class:"lv-input__input",type:e.type,placeholder:e.placeholder,disabled:e.disabled||e.loading,readonly:e.readonly,tabindex:"0",onInput:n[0]||(n[0]=(...d)=>l.onInput&&l.onInput(...d))}),null,16,y),e.loading?(a(),s(o,{key:1,class:"lv-input__loading",size:16,name:"loader-2"})):i("",!0)],2)}const I=r(v,[["render",g]]);export{I as default};
