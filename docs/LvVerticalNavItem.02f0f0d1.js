import{n as o}from"./navigationMixin.372bbaf4.js";import{_ as c,o as l,c as r,p as v,x as d,i as m,y as _,z as f,s as u,q as p,v as y}from"./index.24228458.js";const g={mixins:[o],inheritAttrs:!1,props:{label:{type:String,default:""},icon:{type:String,default:""},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{classObject(){return{"lv-vertical-nav-item--disabled":this.disabled||this.loading,"lv-vertical-nav-item--loading":this.loading,"lv-vertical-nav-item--active":this.toEqualsCurrentRoute}}}},h=["href"],b={class:"lv-vertical-nav-item__label"};function k(e,t,a,B,C,n){const i=u("lv-icon");return l(),r("a",{class:f(["lv-vertical-nav-item",n.classObject]),href:e.href,onClick:t[0]||(t[0]=(...s)=>e.onClick&&e.onClick(...s))},[a.icon?(l(),v(i,{key:0,name:a.icon,class:"lv-vertical-nav-item__icon"},null,8,["name"])):d("",!0),m("div",b,[_(e.$slots,"default",{},()=>[p(y(a.label),1)])])],10,h)}const x=c(g,[["render",k]]);export{x as default};
