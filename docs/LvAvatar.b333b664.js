import{_ as c,o as t,c as s,F as o,q as u,v as m,z as g,B as v,A as d}from"./index.24228458.js";const i={props:{image:{type:String,default:null},initials:{type:String,default:"?"},size:{type:String,default:"3rem"}},computed:{classObject(){return{"lv-avatar--has-image":!!this.image}}}},_=()=>{d(a=>({"150e956a":a.size}))},r=i.setup;i.setup=r?(a,n)=>(_(),r(a,n)):_;const f=i,y=["src"];function p(a,n,e,h,z,l){return t(),s("span",{class:g(["lv-avatar",l.classObject]),style:v(`width: ${e.size}; height: ${e.size};`)},[e.image?(t(),s("img",{key:0,src:e.image,class:"lv-avatar__image",alt:"avatar"},null,8,y)):(t(),s(o,{key:1},[u(m(e.initials),1)],64))],6)}const x=c(f,[["render",p]]);export{x as default};
