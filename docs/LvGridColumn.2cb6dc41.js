import{_ as u,c as n,r as i,n as o,E as d,o as m,u as c}from"./index.3f640ef4.js";const e={mixins:[d],inject:{rowGap:{default:0}},props:{width:{type:Number,required:!0,validator:t=>t>0&&t<13},xs:{type:Number,default:null,validator:t=>t>0&&t<13},sm:{type:Number,default:null,validator:t=>t>0&&t<13},md:{type:Number,default:null,validator:t=>t>0&&t<13},lg:{type:Number,default:null,validator:t=>t>0&&t<13},xl:{type:Number,default:null,validator:t=>t>0&&t<13},xxl:{type:Number,default:null,validator:t=>t>0&&t<13}},computed:{childrenInRow(){return this.$parent},classObject(){return{[`lv-grid-column--${this.width}`]:!0,[`lv-grid-column--xs-${this.xs}`]:this.xs&&this.breakpoints.smallerOrEqual.xs,[`lv-grid-column--sm-${this.sm}`]:this.sm&&this.breakpoints.smallerOrEqual.sm,[`lv-grid-column--md-${this.md}`]:this.md&&this.breakpoints.smallerOrEqual.md}}}},l=()=>{c(t=>({c985a6f6:t.rowGap}))},r=e.setup;e.setup=r?(t,s)=>(l(),r(t,s)):l;const p=e;function _(t,s,f,h,b,a){return m(),n("div",{class:o(["lv-grid-column",a.classObject])},[i(t.$slots,"default")],2)}const v=u(p,[["render",_]]);export{v as default};