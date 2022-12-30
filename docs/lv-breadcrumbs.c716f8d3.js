import{_ as p,o as r,c as i,w as t,b as a,d as l,e as o,F as h,f as m,g as c,h as v}from"./index.f63a9952.js";const f='<lv-breadcrumbs :crumbs="crumbs" home-path="/" show-home />',g=`
export default {
    data() {
        return {
            crumbs: [
                { title: 'Dashboard', path: '/lv-breadcrumbs' },
                { title: 'Products', path: '/lv-breadcrumbs' },
                { title: 'Orders', path: '/lv-breadcrumbs' },
            ]
        };
    },
};
`.trim(),x={data(){return{code:f,codeScript:g,crumbs:[{title:"Dashboard",path:"/lv-breadcrumbs"},{title:"Products",path:"/lv-breadcrumbs"},{title:"Orders",path:"/lv-breadcrumbs"}]}}},B=m("Breadcrumbs"),w=m("Visualize the path");function D(k,V,C,F,s,N){const n=c("lv-heading"),u=c("lv-breadcrumbs",!0),_=c("lv-card"),d=c("lv-code"),b=c("component-details"),e=v("space-after");return r(),i(h,null,[t((r(),a(n,{level:3},{default:l(()=>[B]),_:1})),[[e,.5]]),t((r(),a(n,{sub:"",level:6},{default:l(()=>[w]),_:1})),[[e,2]]),t((r(),a(_,null,{default:l(()=>[o(u,{crumbs:s.crumbs,"home-path":"/","show-home":""},null,8,["crumbs"])]),_:1})),[[e,1]]),t(o(d,{lang:"html",code:s.code},null,8,["code"]),[[e,1]]),t(o(d,{lang:"javascript",code:s.codeScript},null,8,["code"]),[[e,1]]),o(b,{component:"LvBreadcrumbs"})],64)}const P=p(x,[["render",D]]);export{P as default};
