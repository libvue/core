import{_ as d,c as u,j as n,i as c,F as h,k as m,g,o as s}from"./index.cc13a826.js";const v={props:{modelValue:{type:Number,default:1},itemsPerPage:{type:Number,default:10},totalPages:{type:Number,required:!0},maxVisiblePages:{type:Number,default:5,validator:t=>t%2===1},showArrows:{type:Boolean,default:!0}},computed:{visiblePages(){const t=(this.maxVisiblePages-1)/2,l=[];return this.totalPages<=this.maxVisiblePages?Array.from(Array(this.totalPages)).forEach((e,a)=>{l.push(a+1)}):this.modelValue<=t?Array.from(Array(this.maxVisiblePages)).forEach((e,a)=>{l.push(a+1)}):this.modelValue>t&&this.modelValue<this.totalPages-t?(Array.from(Array(t)).forEach((e,a)=>{l.push(this.modelValue-(a+1))}),l.push(this.modelValue),Array.from(Array(t)).forEach((e,a)=>{l.push(this.modelValue+(a+1))})):Array.from(Array(this.maxVisiblePages)).forEach((e,a)=>{l.push(this.totalPages-a)}),l.sort((e,a)=>e-a)},hasOverflow(){const t=this.visiblePages.includes(this.totalPages-1);return this.totalPages-this.visiblePages.length>1&&!t}},emits:["update:modelValue"],methods:{onClick(t){this.$emit("update:modelValue",t)},onClickPrev(){this.$emit("update:modelValue",this.modelValue-1)},onClickNext(){this.$emit("update:modelValue",this.modelValue+1)}}},f={class:"lv-pagination"};function b(t,l,e,a,_,o){const r=g("lv-button");return s(),u("div",f,[e.showArrows?(s(),n(r,{key:0,icon:"chevron-left",color:"ghost-default",disabled:e.modelValue===1,onClick:o.onClickPrev,class:"lv-pagination__button"},null,8,["disabled","onClick"])):c("",!0),(s(!0),u(h,null,m(o.visiblePages,i=>(s(),n(r,{key:i,label:i.toString(),color:i===e.modelValue?"solid-primary":"ghost-default",onClick:P=>o.onClick(i),class:"lv-pagination__button"},null,8,["label","color","onClick"]))),128)),e.showArrows?(s(),n(r,{key:1,icon:"chevron-right",color:"ghost-default",disabled:e.modelValue===e.totalPages,onClick:o.onClickNext,class:"lv-pagination__button"},null,8,["disabled","onClick"])):c("",!0)])}const y=d(v,[["render",b]]);export{y as default};
