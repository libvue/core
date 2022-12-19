import{_ as b,o as i,c as k,w as s,b as r,d as o,e as l,F as y,f as d,g as t,h as C}from"./index.2963ab29.js";const x=`
<lv-button label="Open the dialog" @click="showDialog = true"/>
<lv-dialog :show="showDialog" @click-overlay="showDialog = false" :modal="false">
    <template #title>
        <lv-heading :level="4" v-space-after="1">Make a choice</lv-heading>
    </template>
    <template #description>
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
`.trim(),V={data(){return{showDialog:!1,code:x,model:!1}}},B=d("Dialog"),O=d("A non-modal or modal dialog"),T=d("Make a choice"),E=d("Do you want to continue?"),F=d("Press continue to keep doing what you were doing.");function M(N,e,P,A,n,L){const p=t("lv-heading"),v=t("lv-button"),_=t("lv-paragraph"),m=t("lv-switch"),u=t("lv-input"),g=t("lv-flex"),h=t("lv-dialog",!0),f=t("lv-card"),w=t("lv-code"),D=t("component-details"),a=C("space-after");return i(),k(y,null,[s((i(),r(p,{level:3},{default:o(()=>[B]),_:1})),[[a,.5]]),s((i(),r(p,{sub:"",level:6},{default:o(()=>[O]),_:1})),[[a,2]]),s((i(),r(f,null,{default:o(()=>[l(v,{label:"Open the dialog",onClick:e[0]||(e[0]=c=>n.showDialog=!0)}),l(h,{show:n.showDialog,onClickOverlay:e[4]||(e[4]=c=>n.showDialog=!1),modal:!1},{title:o(()=>[s((i(),r(p,{level:4},{default:o(()=>[T]),_:1})),[[a,1]])]),description:o(()=>[l(p,{level:6},{default:o(()=>[E]),_:1}),s((i(),r(_,null,{default:o(()=>[F]),_:1})),[[a,.5]]),s(l(m,{modelValue:n.model,"onUpdate:modelValue":e[1]||(e[1]=c=>n.model=c),label:"Enable something"},null,8,["modelValue"]),[[a,1]]),s(l(u,{placeholder:"Type something"},null,512),[[a,1]])]),close:o(()=>[l(g,null,{default:o(()=>[l(v,{label:"Continue",color:"solid-primary",onClick:e[2]||(e[2]=c=>n.showDialog=!1)}),l(v,{label:"Cancel",color:"solid-dimmed-primary",onClick:e[3]||(e[3]=c=>n.showDialog=!1)})]),_:1})]),_:1},8,["show"])]),_:1})),[[a,1]]),s(l(w,{code:n.code,lang:"html"},null,8,["code"]),[[a,1]]),l(D,{component:"LvDialog"})],64)}const j=b(V,[["render",M]]);export{j as default};
