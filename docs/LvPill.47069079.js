import{p as d}from"./propColorMixin.97c667c1.js";import{p}from"./propSizeMixin.5f872152.js";import{_ as m,c as l,d as c,i as o,a as u,t as n,b as f,p as v,g as x,o as t}from"./index.cc13a826.js";const y={mixins:[d("solid-default"),p],props:{prefix:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:null},closable:{type:Boolean,default:!1}},emits:["close"],computed:{classObject(){return{[`lv-pill--color-${this.color}`]:!0}}},methods:{onClickClose(){this.$emit("close")}}},C={key:0,class:"lv-pill__icon"},k={class:"lv-pill__text"},g={key:0,class:"lv-pill__prefix"};function b(r,i,e,h,S,s){const a=x("lv-icon");return t(),l("div",v({class:"lv-pill"},r.$attrs,{class:s.classObject}),[e.icon?(t(),l("div",C,[c(a,{name:e.icon,size:14},null,8,["name"])])):o("",!0),u("div",k,[e.prefix?(t(),l("div",g,n(e.prefix),1)):o("",!0),f(" "+n(e.text),1)]),e.closable?(t(),l("div",{key:1,class:"lv-pill__close",onClick:i[0]||(i[0]=(..._)=>s.onClickClose&&s.onClickClose(..._))},[c(a,{name:"x",size:14})])):o("",!0)],16)}const z=m(y,[["render",b]]);export{z as default};
