import{_,b as t,d as h,o as l,c as g,w as c,e as p,f as r,g as n,F as x,h as d}from"./index-fe684972.js";const S=`
<lv-progress-steps :steps="steps" :active="activeStep" @change-step="(v) => (activeStep = v)" />
`.trim(),b=`
activeStep: 'check',
steps: [
    { id: 'files', prefix: '1.', title: 'Select', completed: true },
    { id: 'build', prefix: '2.', title: 'Build', completed: true },
    { id: 'check', prefix: '3.', title: 'Check', completed: false },
    { id: 'publish', prefix: '4.', title: 'Publish', completed: false, disabled: true },
],
`.trim(),k={data(){return{activeFile:"template",files:[{id:"template",filename:"template",code:S},{id:"script",filename:"script",code:b}],activeStep:"check",steps:[{id:"files",prefix:"1.",title:"Select",completed:!0},{id:"build",prefix:"2.",title:"Build",completed:!0},{id:"check",prefix:"3.",title:"Check",completed:!1},{id:"publish",prefix:"4.",title:"Publish",completed:!1,disabled:!0}]}}};function C(F,s,B,P,e,w){const a=t("lv-heading"),f=t("lv-progress-steps",!0),v=t("lv-card"),m=t("lv-code"),u=t("component-details"),i=h("space-after");return l(),g(x,null,[c((l(),p(a,{level:3},{default:r(()=>[d("Progress Steps")]),_:1})),[[i,.5]]),c((l(),p(a,{sub:"",level:6},{default:r(()=>[d("Used for showing the completion progress of a task.")]),_:1})),[[i,2]]),c((l(),p(v,null,{default:r(()=>[n(f,{steps:e.steps,active:e.activeStep,onChangeStep:s[0]||(s[0]=o=>e.activeStep=o)},null,8,["steps","active"])]),_:1})),[[i,1]]),c(n(m,{files:e.files,active:e.activeFile,onChangeFile:s[1]||(s[1]=o=>e.activeFile=o)},null,8,["files","active"]),[[i,1]]),n(u,{component:"LvProgressSteps"})],64)}const N=_(k,[["render",C]]);export{N as default};
