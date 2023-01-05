import{_ as p,b as t,d as i,o as r,c as h,w as c,e as a,f as l,g as o,F as v,h as m}from"./index.fff357f5.js";const f='<lv-breadcrumbs :crumbs="crumbs" home-path="/" show-home />',g=`
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
`.trim(),x={data(){return{code:f,codeScript:g,crumbs:[{title:"Dashboard",path:"/lv-breadcrumbs"},{title:"Products",path:"/lv-breadcrumbs"},{title:"Orders",path:"/lv-breadcrumbs"}]}}},B=m("Breadcrumbs"),w=m("Visualize the path");function D(k,V,C,F,s,N){const n=t("lv-heading"),u=t("lv-breadcrumbs",!0),_=t("lv-card"),d=t("lv-code"),b=t("component-details"),e=i("space-after");return r(),h(v,null,[c((r(),a(n,{level:3},{default:l(()=>[B]),_:1})),[[e,.5]]),c((r(),a(n,{sub:"",level:6},{default:l(()=>[w]),_:1})),[[e,2]]),c((r(),a(_,null,{default:l(()=>[o(u,{crumbs:s.crumbs,"home-path":"/","show-home":""},null,8,["crumbs"])]),_:1})),[[e,1]]),c(o(d,{lang:"html",code:s.code},null,8,["code"]),[[e,1]]),c(o(d,{lang:"javascript",code:s.codeScript},null,8,["code"]),[[e,1]]),o(b,{component:"LvBreadcrumbs"})],64)}const P=p(x,[["render",D]]);export{P as default};
