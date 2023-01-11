import{_,b as c,d as i,o as r,c as v,w as t,e as a,f as d,g as s,F as h,h as m}from"./index-7fe7c56b.js";const f='<lv-breadcrumbs :crumbs="crumbs" home-path="/docs/lv-breadcrumbs" show-home />',g=`
export default {
    data() {
        return {
            crumbs: [
                { title: 'Dashboard', path: '/docs/lv-breadcrumbs' },
                { title: 'Products', path: '/docs/lv-breadcrumbs' },
                { title: 'Orders', path: '/docs/lv-breadcrumbs' },
            ]
        };
    },
};
`.trim(),x={data(){return{code:f,codeScript:g,crumbs:[{title:"Dashboard",path:"/docs/lv-breadcrumbs"},{title:"Products",path:"/docs/lv-breadcrumbs"},{title:"Orders",path:"/docs/lv-breadcrumbs"}]}}};function B(w,D,k,V,o,C){const l=c("lv-heading"),u=c("lv-breadcrumbs",!0),b=c("lv-card"),n=c("lv-code"),p=c("component-details"),e=i("space-after");return r(),v(h,null,[t((r(),a(l,{level:3},{default:d(()=>[m("Breadcrumbs")]),_:1})),[[e,.5]]),t((r(),a(l,{sub:"",level:6},{default:d(()=>[m("Visualize the path")]),_:1})),[[e,2]]),t((r(),a(b,null,{default:d(()=>[s(u,{crumbs:o.crumbs,"home-path":"/docs/lv-breadcrumbs","show-home":""},null,8,["crumbs"])]),_:1})),[[e,1]]),t(s(n,{lang:"html",code:o.code},null,8,["code"]),[[e,1]]),t(s(n,{lang:"javascript",code:o.codeScript},null,8,["code"]),[[e,1]]),s(p,{component:"LvBreadcrumbs"})],64)}const N=_(x,[["render",B]]);export{N as default};
