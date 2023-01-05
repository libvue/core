import{_ as D,b as l,d as C,o as s,c as b,w as c,e as m,f as n,g as e,F as g,h as v}from"./index.fff357f5.js";const x=`
<lv-button label="Left" @click="onClickDrawerLeft"/>
<lv-button label="Right" @click="onClickDrawerRight"/>
<lv-button label="Top" @click="onClickDrawerTop"/>
<lv-button label="Bottom" @click="onClickDrawerBottom"/>

<lv-drawer :placement="placement" :show="showDrawer" @click-backdrop="showDrawer = false">
    <lv-input placeholder="Enter something" v-space-after="1"/>
    <lv-flex fill style="margin-top: auto;">
        <lv-button label="Save" color="solid-primary"/>
        <lv-button label="Cancel" color="solid-dimmed-primary"/>
    </lv-flex>
</lv-drawer>
`.trim(),B={data(){return{code:x,showDrawer:!1,placement:"left"}},methods:{onClickDrawerLeft(){this.placement="left",this.showDrawer=!0},onClickDrawerRight(){this.placement="right",this.showDrawer=!0},onClickDrawerTop(){this.placement="top",this.showDrawer=!0},onClickDrawerBottom(){this.placement="bottom",this.showDrawer=!0}}},y=v("Drawer"),L=v("Some kind of dialog drawn from a side");function T(R,o,E,S,t,i){const p=l("lv-heading"),r=l("lv-button"),_=l("lv-input"),w=l("lv-flex"),u=l("lv-drawer",!0),f=l("lv-card"),h=l("lv-code"),k=l("component-details"),a=C("space-after");return s(),b(g,null,[c((s(),m(p,{level:3},{default:n(()=>[y]),_:1})),[[a,.5]]),c((s(),m(p,{sub:"",level:6},{default:n(()=>[L]),_:1})),[[a,2]]),c((s(),m(f,null,{default:n(()=>[e(w,null,{default:n(()=>[e(r,{label:"Left",onClick:i.onClickDrawerLeft},null,8,["onClick"]),e(r,{label:"Right",onClick:i.onClickDrawerRight},null,8,["onClick"]),e(r,{label:"Top",onClick:i.onClickDrawerTop},null,8,["onClick"]),e(r,{label:"Bottom",onClick:i.onClickDrawerBottom},null,8,["onClick"]),e(u,{placement:t.placement,show:t.showDrawer,onClickBackdrop:o[2]||(o[2]=d=>t.showDrawer=!1)},{default:n(()=>[c(e(_,{placeholder:"Enter something"},null,512),[[a,1]]),e(w,{fill:"",style:{"margin-top":"auto"}},{default:n(()=>[e(r,{label:"Save",color:"solid-primary",onClick:o[0]||(o[0]=d=>t.showDrawer=!1)}),e(r,{label:"Cancel",color:"solid-dimmed-primary",onClick:o[1]||(o[1]=d=>t.showDrawer=!1)})]),_:1})]),_:1},8,["placement","show"])]),_:1})]),_:1})),[[a,1]]),c(e(h,{lang:"html",code:t.code},null,8,["code"]),[[a,1]]),e(k,{component:"LvDrawer"})],64)}const N=D(B,[["render",T]]);export{N as default};
