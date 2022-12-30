import{_ as u,o as l,c as h,w as c,b as p,d as r,e as n,F as g,f as d,g as t,h as x}from"./index.f63a9952.js";const S=`
<lv-progress-steps :steps="steps" :active="activeStep" @change-step="(v) => (activeStep = v)" />
`.trim(),b=`
activeStep: 'check',
steps: [
    { id: 'files', prefix: '1.', title: 'Select', completed: true },
    { id: 'build', prefix: '2.', title: 'Build', completed: true },
    { id: 'check', prefix: '3.', title: 'Check', completed: false },
    { id: 'publish', prefix: '4.', title: 'Publish', completed: false, disabled: true },
],
`.trim(),k={data(){return{activeFile:"template",files:[{id:"template",filename:"template",code:S},{id:"script",filename:"script",code:b}],activeStep:"check",steps:[{id:"files",prefix:"1.",title:"Select",completed:!0},{id:"build",prefix:"2.",title:"Build",completed:!0},{id:"check",prefix:"3.",title:"Check",completed:!1},{id:"publish",prefix:"4.",title:"Publish",completed:!1,disabled:!0}]}}},C=d("Progress Steps"),F=d("Used for showing the completion progress of a task.");function B(P,s,w,D,e,N){const a=t("lv-heading"),f=t("lv-progress-steps",!0),v=t("lv-card"),m=t("lv-code"),_=t("component-details"),i=x("space-after");return l(),h(g,null,[c((l(),p(a,{level:3},{default:r(()=>[C]),_:1})),[[i,.5]]),c((l(),p(a,{sub:"",level:6},{default:r(()=>[F]),_:1})),[[i,2]]),c((l(),p(v,null,{default:r(()=>[n(f,{steps:e.steps,active:e.activeStep,onChangeStep:s[0]||(s[0]=o=>e.activeStep=o)},null,8,["steps","active"])]),_:1})),[[i,1]]),c(n(m,{files:e.files,active:e.activeFile,onChangeFile:s[1]||(s[1]=o=>e.activeFile=o)},null,8,["files","active"]),[[i,1]]),n(_,{component:"LvProgressSteps"})],64)}const V=u(k,[["render",B]]);export{V as default};
