import r from"./LvWidgetNumber.a2a60aa4.js";import o from"./LvWidgetChart.d2829422.js";import{_ as n,j as a,R as s,S as p,m as c,o as i}from"./index.cc13a826.js";const m={props:{type:{type:String,default:"number",validator:e=>["number","chart"].includes(e)}},computed:{component(){if(this.type==="number")return r;if(this.type==="chart")return o}}};function u(e,d,f,l,_,t){return i(),a(c(t.component),s(p(e.$attrs)),null,16)}const y=n(m,[["render",u]]);export{y as default};