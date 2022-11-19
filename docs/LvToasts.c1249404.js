import r from"./LvToast.364f66bd.js";import{_ as c,o,p as n,k as u,c as p,G as m,F as h,Q as _,s as f}from"./index.24228458.js";const v={components:{LvToast:r},props:{decay:{type:Number,default:3e3},max:{type:Number,default:5}},data(){return{toasts:{},latestUid:0}},watch:{toasts:{handler(t){if(Object.entries(t).length>this.max){const e=Math.min.apply(Math,Object.keys(t).map(a=>Number.parseInt(a,10)));delete this.toasts[e]}},immediate:!0,deep:!0}},mounted(){this.libvue.eventBus.$on("toast",this.addToastHandler)},unmounted(){this.libvue.eventBus.$off("toast",this.addToastHandler)},methods:{addToastHandler(t){const e=Number.parseInt(this.latestUid.toString(),10);this.toasts[e]={...t,uid:e},setTimeout(()=>{delete this.toasts[e]},this.decay),this.latestUid+=1},onClickToast(t){t.onClick&&typeof t.onClick=="function"&&t.onClick({close:()=>this.deleteToast(t),toast:t})},deleteToast(t){delete this.toasts[t.uid]}}};function k(t,e,a,T,i,l){const d=f("lv-toast");return o(),n(_,{name:"toasts",tag:"div",class:"lv-toasts"},{default:u(()=>[(o(!0),p(h,null,m(i.toasts,s=>(o(),n(d,{key:s.uid,description:s.description,title:s.title,action:s.action,onClick:y=>l.onClickToast(s)},null,8,["description","title","action","onClick"]))),128))]),_:1})}const x=c(v,[["render",k]]);export{x as default};
