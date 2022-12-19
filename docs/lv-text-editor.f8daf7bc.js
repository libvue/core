import{_ as g,b as e,d as x,o as n,c as w,w as o,e as c,f as a,g as r,F as y,h as s,t as V}from"./index.43daceef.js";const E=`
<lv-card v-space-after="1">
    <lv-text-editor v-model="content"/>
</lv-card>
`.trim(),T={data(){return{code:E,content:`
                <h3>I'm a text editor powered by tiptap</h3><p>How are you <strong>doing</strong> today?</p>
            `}}},b=s("Text Editor"),k=s("A fully functional wysiwyg editor with the power of tiptap!");function B(D,d,C,F,l,N){const _=e("lv-heading"),p=e("lv-text-editor",!0),i=e("lv-card"),v=e("lv-separator"),u=e("lv-paragraph"),m=e("lv-code"),f=e("component-details"),t=x("space-after");return n(),w(y,null,[o((n(),c(_,{level:3},{default:a(()=>[b]),_:1})),[[t,.5]]),o((n(),c(_,{sub:"",level:6},{default:a(()=>[k]),_:1})),[[t,2]]),o((n(),c(i,null,{default:a(()=>[r(p,{modelValue:l.content,"onUpdate:modelValue":d[0]||(d[0]=h=>l.content=h)},null,8,["modelValue"])]),_:1})),[[t,1]]),o(r(v,null,null,512),[[t,1]]),o((n(),c(u,null,{default:a(()=>[s(V(l.content),1)]),_:1})),[[t,1]]),o(r(m,{lang:"html",code:l.code},null,8,["code"]),[[t,1]]),r(f,{component:"LvTextEditor"})],64)}const H=g(T,[["render",B]]);export{H as default};
