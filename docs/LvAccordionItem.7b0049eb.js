import{_ as m,H as d,o as h,c as x,i as l,q as y,v,j as _,I as g,l as w,J as B,y as U,z as D,s as I}from"./index.24228458.js";let s;const C=new Uint8Array(16);function S(){if(!s&&(s=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(C)}const t=[];for(let e=0;e<256;++e)t.push((e+256).toString(16).slice(1));function V(e,n=0){return(t[e[n+0]]+t[e[n+1]]+t[e[n+2]]+t[e[n+3]]+"-"+t[e[n+4]]+t[e[n+5]]+"-"+t[e[n+6]]+t[e[n+7]]+"-"+t[e[n+8]]+t[e[n+9]]+"-"+t[e[n+10]]+t[e[n+11]]+t[e[n+12]]+t[e[n+13]]+t[e[n+14]]+t[e[n+15]]).toLowerCase()}const k=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),u={randomUUID:k};function b(e,n,c){if(u.randomUUID&&!n&&!e)return u.randomUUID();e=e||{};const o=e.random||(e.rng||S)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,n){c=c||0;for(let i=0;i<16;++i)n[c+i]=o[i];return n}return V(o)}const K={props:{title:{type:String,default:""},initialOpen:{type:Boolean,default:!1}},emits:["accordion-item:open","accordion-item:close"],data(){return{expanded:this.initialOpen,uuid:b()}},computed:{classObject(){return{"lv-accordion-item--expanded":this.expanded}}},mounted(){this.initialOpen&&d.$emit("accordion-item:open",this.uuid),d.$on("accordion:close",e=>{this.uuid!==e&&(this.expanded=!1)})},methods:{onKeydownButton(e){e.preventDefault(),this.expanded?(this.expanded=!1,d.$emit("accordion-item:close",this.uuid)):(this.expanded=!0,d.$emit("accordion-item:open",this.uuid))},onClickButton(){this.expanded?(this.expanded=!1,d.$emit("accordion-item:close",this.uuid)):(this.expanded=!0,d.$emit("accordion-item:open",this.uuid))}}},O=["aria-expanded"],j={class:"lv-accordion-item__content",role:"region"};function R(e,n,c,o,i,a){const p=I("lv-icon");return h(),x("div",{class:D(["lv-accordion-item",a.classObject])},[l("h3",{class:"lv-accordion-item__button",tabindex:"0","aria-expanded":!!i.expanded,onClick:n[0]||(n[0]=(...r)=>a.onClickButton&&a.onClickButton(...r)),onKeydown:n[1]||(n[1]=g((...r)=>a.onKeydownButton&&a.onKeydownButton(...r),["enter","space"]))},[y(v(c.title)+" ",1),_(p,{class:"lv-accordion-item__icon",name:i.expanded?"chevron-up":"chevron-down"},null,8,["name"])],40,O),w(l("div",j,[U(e.$slots,"default")],512),[[B,i.expanded]])],2)}const L=m(K,[["render",R]]);export{L as default};