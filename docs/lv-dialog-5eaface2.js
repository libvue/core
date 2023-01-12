import{_ as k,b as l,d as b,o as s,c as y,w as i,e as r,f as o,g as t,F as C,h as p}from"./index-583188e6.js";const x=`
<lv-button label="Open the dialog" @click="showDialog = true"/>
<lv-dialog :show="showDialog" @click-overlay="showDialog = false" :modal="false">
    <template #title>
        <lv-heading :level="4" v-space-after="1">Make a choice</lv-heading>
    </template>
    <template #content>
        <lv-heading :level="6">Do you want to continue?</lv-heading>
        <lv-paragraph v-space-after="0.5">Press continue to keep doing what you were doing.</lv-paragraph>
        <lv-input v-space-after="1" placeholder="Type something" />
    </template>
    <template #close>
        <lv-flex>
            <lv-button label="Continue" color="solid-primary" @click="showDialog = false"/>
            <lv-button label="Cancel" color="solid-dimmed-primary" @click="showDialog = false"/>
        </lv-flex>
    </template>
</lv-dialog>
`.trim(),V={data(){return{showDialog:!1,code:x,model:!1}}};function B(T,e,E,F,n,M){const d=l("lv-heading"),v=l("lv-button"),m=l("lv-paragraph"),u=l("lv-switch"),g=l("lv-input"),_=l("lv-flex"),f=l("lv-dialog",!0),h=l("lv-card"),w=l("lv-code"),D=l("component-details"),a=b("space-after");return s(),y(C,null,[i((s(),r(d,{level:3},{default:o(()=>[p("Dialog")]),_:1})),[[a,.5]]),i((s(),r(d,{sub:"",level:6},{default:o(()=>[p("A non-modal or modal dialog")]),_:1})),[[a,2]]),i((s(),r(h,null,{default:o(()=>[t(v,{label:"Open the dialog",onClick:e[0]||(e[0]=c=>n.showDialog=!0)}),t(f,{show:n.showDialog,onClickBackdrop:e[4]||(e[4]=c=>n.showDialog=!1),modal:!1},{title:o(()=>[i((s(),r(d,{level:4},{default:o(()=>[p("Make a choice")]),_:1})),[[a,1]])]),content:o(()=>[t(d,{level:6},{default:o(()=>[p("Do you want to continue?")]),_:1}),i((s(),r(m,null,{default:o(()=>[p("Press continue to keep doing what you were doing.")]),_:1})),[[a,.5]]),i(t(u,{modelValue:n.model,"onUpdate:modelValue":e[1]||(e[1]=c=>n.model=c),label:"Enable something"},null,8,["modelValue"]),[[a,1]]),i(t(g,{placeholder:"Type something"},null,512),[[a,1]])]),close:o(()=>[t(_,null,{default:o(()=>[t(v,{label:"Continue",color:"solid-primary",onClick:e[2]||(e[2]=c=>n.showDialog=!1)}),t(v,{label:"Cancel",color:"solid-dimmed-primary",onClick:e[3]||(e[3]=c=>n.showDialog=!1)})]),_:1})]),_:1},8,["show"])]),_:1})),[[a,1]]),i(t(w,{code:n.code,lang:"html"},null,8,["code"]),[[a,1]]),t(D,{component:"LvDialog"})],64)}const O=k(V,[["render",B]]);export{O as default};
