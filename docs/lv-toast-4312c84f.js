import{i as r,_ as x,b as n,d as F,o as a,c as y,w as l,e as u,f as s,g as t,F as M,h as g}from"./index-fe684972.js";const k={$on:(...o)=>r.on(...o),$once:(...o)=>r.once(...o),$off:(...o)=>r.off(...o),$emit:(...o)=>r.emit(...o)},S=`
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
`.trim(),f=`
<lv-toasts :max="3" :decay="1000" :event-bus="eventBus" />
<lv-button color="solid-dimmed-primary" label="Add toast" @click="addToast" />
`.trim(),B=`
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
`.trim(),q={data(){return{code:S,codeTemplate:f,codeScript:B,eventBus:k,activeToastFile:"template",toastFiles:[{id:"template",filename:"template",code:f,lang:"html"},{id:"script",filename:"script",code:B,lang:"js"}],activeTab:"toast",tabs:[{id:"toast",title:"Toast",icon:"scaling"},{id:"toasts",title:"Toasts",icon:"palette"}]}},methods:{addToast(){k.$emit("toast",{title:"Ut enim ad minima veniam, quis nostrum exercitationem",description:"Quis autem vel eum iure reprehenderit",button:"Cancel",icon:"save",iconColor:"solid-dimmed-warning",buttonColor:"solid-success",onClick:()=>{console.log("Clicking toast")},onClickButton:()=>{console.log("Clicking button")}})},onClickButton(){console.log("Clicked Button")}}};function A(o,c,D,L,e,d){const v=n("lv-heading"),p=n("lv-toast",!0),b=n("lv-card"),_=n("lv-code"),C=n("component-details"),T=n("lv-toasts"),h=n("lv-button"),w=n("lv-tabs"),i=F("space-after");return a(),y(M,null,[l((a(),u(v,{level:3},{default:s(()=>[g("Toast")]),_:1})),[[i,.5]]),l((a(),u(v,{sub:"",level:6},{default:s(()=>[g("Important messages at your service")]),_:1})),[[i,2]]),t(w,{tabs:e.tabs,active:e.activeTab,onChangeTab:c[1]||(c[1]=m=>e.activeTab=m)},{toast:s(()=>[l((a(),u(b,null,{default:s(()=>[l(t(p,{icon:"save",description:"Monday, October 24, 2022 at 9:26 PM",title:"Your work is saved",button:"Close",onClickButton:d.onClickButton},null,8,["onClickButton"]),[[i,1]]),t(p,{icon:"alert-triangle","icon-color":"solid-dimmed-danger",title:"Something went wrong",button:"Close","button-color":"outline-danger",onClickButton:d.onClickButton},null,8,["onClickButton"])]),_:1})),[[i,1]]),l(t(_,{lang:"html",code:e.code},null,8,["code"]),[[i,1]]),t(C,{component:"LvToast"})]),toasts:s(()=>[l((a(),u(b,null,{default:s(()=>[t(T,{max:3,decay:1e3,"event-bus":e.eventBus},null,8,["event-bus"]),t(h,{color:"solid-dimmed-primary",label:"Add toast",icon:"plus",onClick:d.addToast},null,8,["onClick"])]),_:1})),[[i,1]]),l(t(_,{files:e.toastFiles,active:e.activeToastFile,onChangeFile:c[0]||(c[0]=m=>e.activeToastFile=m)},null,8,["files","active"]),[[i,1]]),t(C,{component:"LvToasts"})]),_:1},8,["tabs","active"])],64)}const O=x(q,[["render",A]]);export{O as default};
