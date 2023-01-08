import{i as r,_ as x,b as n,d as F,o as c,c as y,w as s,e as d,f as l,g as t,F as M,h as B}from"./index.2b175633.js";const g={$on:(...o)=>r.on(...o),$once:(...o)=>r.once(...o),$off:(...o)=>r.off(...o),$emit:(...o)=>r.emit(...o)},S=`
<lv-toast
    v-space-after="1"
    icon="save"
    description="Monday, October 24, 2022 at 9:26 PM"
    title="Your work is saved"
    button="Close"
    @click-button="onClickButton"
/>
<lv-toast
    icon="alert-triangle"
    icon-color="solid-dimmed-danger"
    title="Something went wrong"
    button="Close"
    button-color="outline-danger"
    @click-button="onClickButton"
/>
`.trim(),k=`
<lv-toasts :max="3" :decay="1000" :event-bus="eventBus" />
<lv-button color="solid-dimmed-primary" label="Add toast" @click="addToast" />
`.trim(),f=`
import { eventBus } from "@libvue/core";

export default {
    data() {
        {
            return { eventBus }
        }
    },
    methods: {
        addToast() {
            eventBus.$emit('toast', {
                title: 'Ut enim ad minima veniam, quis nostrum exercitationem',
                description: 'Quis autem vel eum iure reprehenderit',
                button: 'Cancel',
                icon: 'save',
                iconColor: 'solid-dimmed-warning',
                buttonColor: 'solid-success',
                onClick: () => {
                    console.log('Clicking toast');
                },
                onClickButton: () => {
                    console.log('Clicking button');
                },
            });
        },
    }
}
`.trim(),q={data(){return{code:S,codeTemplate:k,codeScript:f,eventBus:g,activeToastFile:"template",toastFiles:[{id:"template",filename:"template",code:k,lang:"html"},{id:"script",filename:"script",code:f,lang:"js"}],activeTab:"toast",tabs:[{id:"toast",title:"Toast",icon:"scaling"},{id:"toasts",title:"Toasts",icon:"palette"}]}},methods:{addToast(){g.$emit("toast",{title:"Ut enim ad minima veniam, quis nostrum exercitationem",description:"Quis autem vel eum iure reprehenderit",button:"Cancel",icon:"save",iconColor:"solid-dimmed-warning",buttonColor:"solid-success",onClick:()=>{console.log("Clicking toast")},onClickButton:()=>{console.log("Clicking button")}})},onClickButton(){console.log("Clicked Button")}}},A=B("Toast"),D=B("Important messages at your service");function L(o,a,N,O,e,u){const v=n("lv-heading"),p=n("lv-toast",!0),_=n("lv-card"),b=n("lv-code"),C=n("component-details"),T=n("lv-toasts"),h=n("lv-button"),w=n("lv-tabs"),i=F("space-after");return c(),y(M,null,[s((c(),d(v,{level:3},{default:l(()=>[A]),_:1})),[[i,.5]]),s((c(),d(v,{sub:"",level:6},{default:l(()=>[D]),_:1})),[[i,2]]),t(w,{tabs:e.tabs,active:e.activeTab,onChangeTab:a[1]||(a[1]=m=>e.activeTab=m)},{toast:l(()=>[s((c(),d(_,null,{default:l(()=>[s(t(p,{icon:"save",description:"Monday, October 24, 2022 at 9:26 PM",title:"Your work is saved",button:"Close",onClickButton:u.onClickButton},null,8,["onClickButton"]),[[i,1]]),t(p,{icon:"alert-triangle","icon-color":"solid-dimmed-danger",title:"Something went wrong",button:"Close","button-color":"outline-danger",onClickButton:u.onClickButton},null,8,["onClickButton"])]),_:1})),[[i,1]]),s(t(b,{lang:"html",code:e.code},null,8,["code"]),[[i,1]]),t(C,{component:"LvToast"})]),toasts:l(()=>[s((c(),d(_,null,{default:l(()=>[t(T,{max:3,decay:1e3,"event-bus":e.eventBus},null,8,["event-bus"]),t(h,{color:"solid-dimmed-primary",label:"Add toast",icon:"plus",onClick:u.addToast},null,8,["onClick"])]),_:1})),[[i,1]]),s(t(b,{files:e.toastFiles,active:e.activeToastFile,onChangeFile:a[0]||(a[0]=m=>e.activeToastFile=m)},null,8,["files","active"]),[[i,1]]),t(C,{component:"LvToasts"})]),_:1},8,["tabs","active"])],64)}const Q=x(q,[["render",L]]);export{Q as default};
