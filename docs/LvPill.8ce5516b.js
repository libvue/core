import{p as d}from"./propColorMixin.97c667c1.js";import{p}from"./propSizeMixin.5f872152.js";import{_ as m,o as l,c as t,j as n,x as o,i as u,v as a,q as v,L as f,s as x}from"./index.24228458.js";const y={mixins:[d("solid-default"),p],props:{prefix:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:null},closable:{type:Boolean,default:!1}},emits:["close"],computed:{classObject(){return{[`lv-pill--color-${this.color}`]:!0}}},methods:{onClickClose(){this.$emit("close")}}},C={key:0,class:"lv-pill__icon"},k={class:"lv-pill__text"},g={key:0,class:"lv-pill__prefix"};function h(r,i,e,S,b,s){const c=x("lv-icon");return l(),t("div",f({class:"lv-pill"},r.$attrs,{class:s.classObject}),[e.icon?(l(),t("div",C,[n(c,{name:e.icon,size:14},null,8,["name"])])):o("",!0),u("div",k,[e.prefix?(l(),t("div",g,a(e.prefix),1)):o("",!0),v(" "+a(e.text),1)]),e.closable?(l(),t("div",{key:1,class:"lv-pill__close",onClick:i[0]||(i[0]=(..._)=>s.onClickClose&&s.onClickClose(..._))},[n(c,{name:"x",size:14})])):o("",!0)],16)}const j=m(y,[["render",h]]);export{j as default};