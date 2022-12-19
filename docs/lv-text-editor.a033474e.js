import{_ as g,o as n,c as x,w as o,b as c,d as a,e as r,f as s,t as w,F as y,g as e,h as V}from"./index.5f62ad45.js";const E=`
<lv-card v-space-after="1">
    <lv-text-editor v-model="content"/>
</lv-card>
`.trim(),T={data(){return{code:E,content:`
                <h3>I'm a text editor powered by tiptap</h3><p>How are you <strong>doing</strong> today?</p>
            `}}},b=s("Text Editor"),k=s("A fully functional wysiwyg editor with the power of tiptap!");function B(D,d,C,F,l,N){const _=e("lv-heading"),p=e("lv-text-editor",!0),i=e("lv-card"),v=e("lv-separator"),u=e("lv-paragraph"),m=e("lv-code"),f=e("component-details"),t=V("space-after");return n(),x(y,null,[o((n(),c(_,{level:3},{default:a(()=>[b]),_:1})),[[t,.5]]),o((n(),c(_,{sub:"",level:6},{default:a(()=>[k]),_:1})),[[t,2]]),o((n(),c(i,null,{default:a(()=>[r(p,{modelValue:l.content,"onUpdate:modelValue":d[0]||(d[0]=h=>l.content=h)},null,8,["modelValue"])]),_:1})),[[t,1]]),o(r(v,null,null,512),[[t,1]]),o((n(),c(u,null,{default:a(()=>[s(w(l.content),1)]),_:1})),[[t,1]]),o(r(m,{lang:"html",code:l.code},null,8,["code"]),[[t,1]]),r(f,{component:"LvTextEditor"})],64)}const H=g(T,[["render",B]]);export{H as default};
