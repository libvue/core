import{_ as k,o as i,c as D,w as n,b as s,d as t,e,F as C,f as w,g as l,h as b}from"./index.5a8dd38e.js";const g=`
<lv-button label="Left" @click="onClickDrawerLeft"/>
<lv-button label="Right" @click="onClickDrawerRight"/>
<lv-button label="Top" @click="onClickDrawerTop"/>
<lv-button label="Bottom" @click="onClickDrawerBottom"/>

<lv-drawer :placement="placement" :show="showDrawer" @click-overlay="showDrawer = false">
    <lv-input placeholder="Enter something" v-space-after="1"/>
    <lv-flex fill style="margin-top: auto;">
        <lv-button label="Save" color="solid-primary"/>
        <lv-button label="Cancel" color="solid-dimmed-primary"/>
    </lv-flex>
</lv-drawer>
`.trim(),x={data(){return{code:g,showDrawer:!1,placement:"left"}},methods:{onClickDrawerLeft(){this.placement="left",this.showDrawer=!0},onClickDrawerRight(){this.placement="right",this.showDrawer=!0},onClickDrawerTop(){this.placement="top",this.showDrawer=!0},onClickDrawerBottom(){this.placement="bottom",this.showDrawer=!0}}},y=w("Drawer"),B=w("Some kind of dialog drawn from a side");function L(T,m,R,E,a,c){const p=l("lv-heading"),o=l("lv-button"),_=l("lv-input"),d=l("lv-flex"),v=l("lv-drawer",!0),u=l("lv-card"),h=l("lv-code"),f=l("component-details"),r=b("space-after");return i(),D(C,null,[n((i(),s(p,{level:3},{default:t(()=>[y]),_:1})),[[r,.5]]),n((i(),s(p,{sub:"",level:6},{default:t(()=>[B]),_:1})),[[r,2]]),n((i(),s(u,null,{default:t(()=>[e(d,null,{default:t(()=>[e(o,{label:"Left",onClick:c.onClickDrawerLeft},null,8,["onClick"]),e(o,{label:"Right",onClick:c.onClickDrawerRight},null,8,["onClick"]),e(o,{label:"Top",onClick:c.onClickDrawerTop},null,8,["onClick"]),e(o,{label:"Bottom",onClick:c.onClickDrawerBottom},null,8,["onClick"]),e(v,{placement:a.placement,show:a.showDrawer,onClickOverlay:m[0]||(m[0]=S=>a.showDrawer=!1)},{default:t(()=>[n(e(_,{placeholder:"Enter something"},null,512),[[r,1]]),e(d,{fill:"",style:{"margin-top":"auto"}},{default:t(()=>[e(o,{label:"Save",color:"solid-primary"}),e(o,{label:"Cancel",color:"solid-dimmed-primary"})]),_:1})]),_:1},8,["placement","show"])]),_:1})]),_:1})),[[r,1]]),n(e(h,{lang:"html",code:a.code},null,8,["code"]),[[r,1]]),e(f,{component:"LvDrawer"})],64)}const N=k(x,[["render",L]]);export{N as default};
