import{_ as h,b as t,d as f,o as i,c as w,w as n,e as a,f as e,g as o,F as P,h as r}from"./index-5cc4372f.js";const x=`
<lv-grid>
    <lv-grid-row gap="1rem">
        <lv-grid-column :width="4">
            <lv-image src="https://picsum.photos/id/56/2880/1920" caption="Picsum Photos #56"/>
        </lv-grid-column>
        <lv-grid-column :width="4">
            <lv-image src="https://picsum.photos/id/57/2880/1920" rounded caption="Picsum Photos #57" caption-align="left"/>
        </lv-grid-column>
        <lv-grid-column :width="4">
            <lv-image src="https://picsum.photos/id/58/2880/1920" caption="Picsum Photos #58" caption-align="right"/>
        </lv-grid-column>
    </lv-grid-row>
</lv-grid>
`.trim(),I={data(){return{code:x}}};function k(B,$,b,C,p,D){const d=t("lv-heading"),s=t("lv-image",!0),l=t("lv-grid-column"),m=t("lv-grid-row"),_=t("lv-grid"),u=t("lv-card"),g=t("lv-code"),v=t("component-details"),c=f("space-after");return i(),w(P,null,[n((i(),a(d,{level:3},{default:e(()=>[r("Image")]),_:1})),[[c,.5]]),n((i(),a(d,{sub:"",level:6},{default:e(()=>[r("The Image component is used to display images.")]),_:1})),[[c,2]]),n((i(),a(u,null,{default:e(()=>[o(_,null,{default:e(()=>[o(m,{gap:"1rem"},{default:e(()=>[o(l,{width:4},{default:e(()=>[o(s,{src:"https://picsum.photos/id/56/2880/1920",caption:"Picsum Photos #56"})]),_:1}),o(l,{width:4},{default:e(()=>[o(s,{src:"https://picsum.photos/id/57/2880/1920",rounded:"",caption:"Picsum Photos #57","caption-align":"left"})]),_:1}),o(l,{width:4},{default:e(()=>[o(s,{src:"https://picsum.photos/id/58/2880/1920",caption:"Picsum Photos #58","caption-align":"right"})]),_:1})]),_:1})]),_:1})]),_:1})),[[c,1]]),n(o(g,{lang:"html",code:p.code},null,8,["code"]),[[c,1]]),o(v,{component:"LvImage"})],64)}const N=h(I,[["render",k]]);export{N as default};
