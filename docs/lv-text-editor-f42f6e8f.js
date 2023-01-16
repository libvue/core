import{_ as x,b as e,d as h,o as n,c as w,w as o,e as a,f as c,g as r,F as y,h as s,t as V}from"./index-dea56d21.js";const E=`
<lv-card v-space-after="1">
    <lv-text-editor v-model="content"/>
</lv-card>
`.trim(),T={data(){return{code:E,content:`
                <h3>I'm a text editor powered by tiptap</h3><p>How are you <strong>doing</strong> today?</p>
            `}}};function b(k,d,B,D,l,C){const p=e("lv-heading"),_=e("lv-text-editor",!0),i=e("lv-card"),v=e("lv-separator"),u=e("lv-paragraph"),m=e("lv-code"),f=e("component-details"),t=h("space-after");return n(),w(y,null,[o((n(),a(p,{level:3},{default:c(()=>[s("Text Editor")]),_:1})),[[t,.5]]),o((n(),a(p,{sub:"",level:6},{default:c(()=>[s("A fully functional wysiwyg editor with the power of tiptap!")]),_:1})),[[t,2]]),o((n(),a(i,null,{default:c(()=>[r(_,{modelValue:l.content,"onUpdate:modelValue":d[0]||(d[0]=g=>l.content=g)},null,8,["modelValue"])]),_:1})),[[t,1]]),o(r(v,null,null,512),[[t,1]]),o((n(),a(u,null,{default:c(()=>[s(V(l.content),1)]),_:1})),[[t,1]]),o(r(m,{lang:"html",code:l.code},null,8,["code"]),[[t,1]]),r(f,{component:"LvTextEditor"})],64)}const N=x(T,[["render",b]]);export{N as default};
