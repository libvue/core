import{_ as c,o as s,c as t,i as o,v as r,y as l,x as n,z as _}from"./index.24228458.js";const d={props:{title:{type:String,default:""},description:{type:String,default:""}},computed:{hasSide(){return!!this.$slots.side},classObject(){return{"lv-hero--no-side":!this.hasSide}}}},h={class:"lv-hero__content"},u={class:"lv-hero__title"},v={class:"lv-hero__description"},p={key:0,class:"lv-hero__buttons"},f={key:0,class:"lv-hero__side"};function m(e,y,i,S,$,a){return s(),t("div",{class:_(["lv-hero",a.classObject])},[o("div",h,[o("h1",u,r(i.title),1),o("p",v,r(i.description),1),e.$slots.buttons?(s(),t("div",p,[l(e.$slots,"buttons")])):n("",!0)]),e.$slots.side?(s(),t("div",f,[l(e.$slots,"side")])):n("",!0)],2)}const g=c(d,[["render",m]]);export{g as default};
