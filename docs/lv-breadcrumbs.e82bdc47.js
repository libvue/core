import{_ as p,b as c,d as i,o as s,c as h,w as t,e as a,f as d,g as o,F as v,h as m}from"./index.37a3cef6.js";const f='<lv-breadcrumbs :crumbs="crumbs" home-path="/docs/lv-breadcrumbs" show-home />',g=`
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
`.trim(),x={data(){return{code:f,codeScript:g,crumbs:[{title:"Dashboard",path:"/docs/lv-breadcrumbs"},{title:"Products",path:"/docs/lv-breadcrumbs"},{title:"Orders",path:"/docs/lv-breadcrumbs"}]}}},B=m("Breadcrumbs"),w=m("Visualize the path");function D(k,V,C,F,r,N){const l=c("lv-heading"),u=c("lv-breadcrumbs",!0),b=c("lv-card"),n=c("lv-code"),_=c("component-details"),e=i("space-after");return s(),h(v,null,[t((s(),a(l,{level:3},{default:d(()=>[B]),_:1})),[[e,.5]]),t((s(),a(l,{sub:"",level:6},{default:d(()=>[w]),_:1})),[[e,2]]),t((s(),a(b,null,{default:d(()=>[o(u,{crumbs:r.crumbs,"home-path":"/docs/lv-breadcrumbs","show-home":""},null,8,["crumbs"])]),_:1})),[[e,1]]),t(o(n,{lang:"html",code:r.code},null,8,["code"]),[[e,1]]),t(o(n,{lang:"javascript",code:r.codeScript},null,8,["code"]),[[e,1]]),o(_,{component:"LvBreadcrumbs"})],64)}const P=p(x,[["render",D]]);export{P as default};
