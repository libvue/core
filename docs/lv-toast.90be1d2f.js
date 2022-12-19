import{j as r,_ as x,b as n,d as F,o as a,c as y,w as s,e as u,f as l,g as t,F as M,h as B}from"./index.43daceef.js";const C={$on:(...o)=>r.on(...o),$once:(...o)=>r.once(...o),$off:(...o)=>r.off(...o),$emit:(...o)=>r.emit(...o)},S=`
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
            this.eventBus.$on.('toast', {
                title: 'Ut enim ad minima veniam, quis nostrum exercitationem',
                description: 'Quis autem vel eum iure reprehenderit',
                button: 'Do Something',
                icon: 'save',
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
`.trim(),D={data(){return{code:S,codeTemplate:k,codeScript:f,eventBus:C,activeToastFile:"template",toastFiles:[{id:"template",filename:"template",code:k,lang:"html"},{id:"script",filename:"script",code:f,lang:"js"}],activeTab:"toast",tabs:[{id:"toast",title:"Toast",icon:"scaling"},{id:"toasts",title:"Toasts",icon:"palette"}]}},methods:{addToast(){C.$emit("toast",{title:"Ut enim ad minima veniam, quis nostrum exercitationem",description:"Quis autem vel eum iure reprehenderit",button:"Cancel",icon:"save",iconColor:"solid-dimmed-warning",buttonColor:"solid-success",onClick:()=>{console.log("Clicking toast")},onClickButton:()=>{console.log("Clicking button")}})},onClickButton(){console.log("Clicked Button")}}},j=B("Toast"),q=B("Important messages at your service");function A(o,c,L,N,e,d){const v=n("lv-heading"),p=n("lv-toast",!0),_=n("lv-card"),b=n("lv-code"),g=n("component-details"),T=n("lv-toasts"),h=n("lv-button"),w=n("lv-tabs"),i=F("space-after");return a(),y(M,null,[s((a(),u(v,{level:3},{default:l(()=>[j]),_:1})),[[i,.5]]),s((a(),u(v,{sub:"",level:6},{default:l(()=>[q]),_:1})),[[i,2]]),t(w,{tabs:e.tabs,active:e.activeTab,onChangeTab:c[1]||(c[1]=m=>e.activeTab=m)},{toast:l(()=>[s((a(),u(_,null,{default:l(()=>[s(t(p,{icon:"save",description:"Monday, October 24, 2022 at 9:26 PM",title:"Your work is saved",button:"Close",onClickButton:d.onClickButton},null,8,["onClickButton"]),[[i,1]]),t(p,{icon:"alert-triangle","icon-color":"solid-dimmed-danger",title:"Something went wrong",button:"Close","button-color":"outline-danger",onClickButton:d.onClickButton},null,8,["onClickButton"])]),_:1})),[[i,1]]),s(t(b,{lang:"html",code:e.code},null,8,["code"]),[[i,1]]),t(g,{component:"LvToast"})]),toasts:l(()=>[s((a(),u(_,null,{default:l(()=>[t(T,{max:3,decay:1e3,"event-bus":e.eventBus},null,8,["event-bus"]),t(h,{color:"solid-dimmed-primary",label:"Add toast",icon:"plus",onClick:d.addToast},null,8,["onClick"])]),_:1})),[[i,1]]),s(t(b,{files:e.toastFiles,active:e.activeToastFile,onChangeFile:c[0]||(c[0]=m=>e.activeToastFile=m)},null,8,["files","active"]),[[i,1]]),t(g,{component:"LvToasts"})]),_:1},8,["tabs","active"])],64)}const P=x(D,[["render",A]]);export{P as default};
