import{_ as h,o as e,c,p as a,x as o,F as m,G as _,s as i,i as b,v as d,z as v}from"./index.24228458.js";const C={props:{crumbs:{type:Array,default:()=>[]},showHome:{type:Boolean,default:!0},homePath:{type:String,default:"/"}},computed:{hasCrumbs(){return this.crumbs.length>0}},methods:{onClickHome(){this.$router.push({path:this.homePath})},onClickCrumb(n){this.$router.push({path:n})}}},k={class:"lv-breadcrumbs"},p=["onClick"];function g(n,y,r,f,B,t){const s=i("lv-icon");return e(),c("div",k,[r.showHome?(e(),a(s,{key:0,class:"lv-breadcrumbs__home",name:"home",onClick:t.onClickHome},null,8,["onClick"])):o("",!0),t.hasCrumbs?(e(),a(s,{key:1,name:"chevron-right",class:"lv-breadcrumbs__chevron-right"})):o("",!0),(e(!0),c(m,null,_(r.crumbs,(l,u)=>(e(),c(m,null,[b("a",{class:v(["lv-breadcrumbs__crumb",{"lv-breadcrumbs__crumb--active":u===r.crumbs.length-1}]),onClick:x=>t.onClickCrumb(l.path)},d(l.title),11,p),u<r.crumbs.length-1?(e(),a(s,{key:0,name:"chevron-right",class:"lv-breadcrumbs__chevron-right"})):o("",!0)],64))),256))])}const L=h(C,[["render",g]]);export{L as default};