import{_ as k,b as o,d as b,o as i,c as y,w as s,e as r,f as l,g as t,F as C,h as d}from"./index.8c5ff4d0.js";const x=`
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
`.trim(),V={data(){return{showDialog:!1,code:x,model:!1}}},B=d("Dialog"),T=d("A non-modal or modal dialog"),E=d("Make a choice"),F=d("Do you want to continue?"),M=d("Press continue to keep doing what you were doing.");function N(O,e,P,A,n,L){const p=o("lv-heading"),v=o("lv-button"),_=o("lv-paragraph"),m=o("lv-switch"),u=o("lv-input"),g=o("lv-flex"),h=o("lv-dialog",!0),f=o("lv-card"),w=o("lv-code"),D=o("component-details"),a=b("space-after");return i(),y(C,null,[s((i(),r(p,{level:3},{default:l(()=>[B]),_:1})),[[a,.5]]),s((i(),r(p,{sub:"",level:6},{default:l(()=>[T]),_:1})),[[a,2]]),s((i(),r(f,null,{default:l(()=>[t(v,{label:"Open the dialog",onClick:e[0]||(e[0]=c=>n.showDialog=!0)}),t(h,{show:n.showDialog,onClickBackdrop:e[4]||(e[4]=c=>n.showDialog=!1),modal:!1},{title:l(()=>[s((i(),r(p,{level:4},{default:l(()=>[E]),_:1})),[[a,1]])]),content:l(()=>[t(p,{level:6},{default:l(()=>[F]),_:1}),s((i(),r(_,null,{default:l(()=>[M]),_:1})),[[a,.5]]),s(t(m,{modelValue:n.model,"onUpdate:modelValue":e[1]||(e[1]=c=>n.model=c),label:"Enable something"},null,8,["modelValue"]),[[a,1]]),s(t(u,{placeholder:"Type something"},null,512),[[a,1]])]),close:l(()=>[t(g,null,{default:l(()=>[t(v,{label:"Continue",color:"solid-primary",onClick:e[2]||(e[2]=c=>n.showDialog=!1)}),t(v,{label:"Cancel",color:"solid-dimmed-primary",onClick:e[3]||(e[3]=c=>n.showDialog=!1)})]),_:1})]),_:1},8,["show"])]),_:1})),[[a,1]]),s(t(w,{code:n.code,lang:"html"},null,8,["code"]),[[a,1]]),t(D,{component:"LvDialog"})],64)}const j=k(V,[["render",N]]);export{j as default};
