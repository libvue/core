import{n as o}from"./navigationMixin.372bbaf4.js";import{_ as c,c as r,j as v,i as d,a as m,r as _,n as f,g as u,o as l,b as p,t as g}from"./index.cc13a826.js";const b={mixins:[o],inheritAttrs:!1,props:{label:{type:String,default:""},icon:{type:String,default:""},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{classObject(){return{"lv-vertical-nav-item--disabled":this.disabled||this.loading,"lv-vertical-nav-item--loading":this.loading,"lv-vertical-nav-item--active":this.toEqualsCurrentRoute}}}},h=["href"],y={class:"lv-vertical-nav-item__label"};function k(e,t,a,B,C,n){const i=u("lv-icon");return l(),r("a",{class:f(["lv-vertical-nav-item",n.classObject]),href:e.href,onClick:t[0]||(t[0]=(...s)=>e.onClick&&e.onClick(...s))},[a.icon?(l(),v(i,{key:0,name:a.icon,class:"lv-vertical-nav-item__icon"},null,8,["name"])):d("",!0),m("div",y,[_(e.$slots,"default",{},()=>[p(g(a.label),1)])])],10,h)}const S=c(b,[["render",k]]);export{S as default};
