import{_ as n,c as a,a as i,h as r,o as s}from"./index.b288453a.js";const l="/libvue/sprite.68115308.svg";const o={props:{name:{type:String,default:"exclamation-triangle"},size:{type:Number,default:null},push:{type:Number,default:0}},data(){return{fallbackSize:14,parentFontSize:null}},computed:{computedSize(){return this.size?this.size:this.parentFontSize?this.parentFontSize:this.fallbackSize},spritePath(){return l}},mounted(){this.parentFontSize=this.getParentFontSize()},methods:{getParentFontSize(){return this.$parent.$el?window.getComputedStyle(this.$parent.$el).getPropertyValue("font-size"):null}}},u=["width","height","data-name"],c=["href"];function h(d,m,e,p,_,t){return s(),a("svg",{ref:"icon",class:"lv-icon",viewBox:"0 0 24 24",width:t.computedSize,height:t.computedSize,"aria-hidden":"true",style:r(e.push?`margin-right: ${e.push}rem;`:!1),"data-name":e.name},[i("use",{href:`${t.spritePath}#${e.name}`},null,8,c)],12,u)}const z=n(o,[["render",h]]);export{z as default};