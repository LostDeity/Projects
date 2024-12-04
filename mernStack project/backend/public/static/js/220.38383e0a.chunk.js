"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[220],{347:(e,t,a)=>{a.d(t,{A:()=>r});a(43);var n=a(582),s=a(579);const r=e=>e.href?(0,s.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,s.jsx)(n.N_,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,s.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},356:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(43),s=a(347),r=a(579);const i=e=>{const[t,a]=(0,n.useState)(),[i,l]=(0,n.useState)(),[o,c]=(0,n.useState)(!1),d=(0,n.useRef)();(0,n.useEffect)((()=>{if(!t)return;const e=new FileReader;e.onload=()=>{l(e.result)},e.readAsDataURL(t)}),[t]);return(0,r.jsxs)("div",{className:"form-control",children:[(0,r.jsx)("input",{id:e.id,ref:d,type:"file",style:{display:"none"},accept:".jpg,.png,.jpeg",onChange:t=>{let n,s=o;t.target.files&&1===t.target.files.length?(n=t.target.files[0],a(n),c(!0),s=!0):(c(!1),s(!1)),e.onInput(e.id,n,s)}}),(0,r.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,r.jsxs)("div",{className:"image-upload__preview",children:[i&&(0,r.jsx)("img",{src:i,alt:"Preview"}),!i&&(0,r.jsx)("p",{children:"Please pick an Image!"})]}),(0,r.jsx)(s.A,{type:"button",onClick:()=>{d.current.click()},children:"PICK IMAGE"})]}),!o&&(0,r.jsx)("p",{children:e.errorText})]})}},244:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(43),s=a(962),r=a(579);const i=(e,t)=>{switch(t.type){case"CHANGE":return{...e,value:t.val,isValid:(0,s.tf)(t.val,t.validators)};case"TOUCH":return{...e,isTouched:!0};default:return e}},l=e=>{const[t,a]=(0,n.useReducer)(i,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),{id:s,onInput:l}=e,{value:o,isValid:c}=t;(0,n.useEffect)((()=>{l(s,o,c)}),[s,o,c,l]);const d=t=>{a({type:"CHANGE",val:t.target.value,validators:e.validators})},u=()=>{a({type:"TOUCH"})},p="input"===e.element?(0,r.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:d,onBlur:u,value:t.value}):(0,r.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:d,onBlur:u,value:t.value});return(0,r.jsxs)("div",{className:"form-control ".concat(!t.isValid&&t.isTouched&&"form-control--invalid"),children:[(0,r.jsx)("label",{htmlFor:e.id,children:e.label}),p,!t.isValid&&t.isTouched&&(0,r.jsx)("p",{children:e.errorText})]})}},837:(e,t,a)=>{a.d(t,{A:()=>s});a(43);var n=a(579);const s=e=>(0,n.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})},626:(e,t,a)=>{a.d(t,{A:()=>i});a(43);var n=a(630),s=a(347),r=a(579);const i=e=>(0,r.jsx)(n.A,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,r.jsx)(s.A,{onClick:e.onClear,children:"Okay"}),children:(0,r.jsx)("p",{children:e.error})})},630:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(43),s=a(950),r=a(336),i=a(6),l=a(579);const o=e=>{const t=(0,l.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,l.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,l.jsx)("h2",{children:e.header})}),(0,l.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,l.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,l.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return s.createPortal(t,document.getElementById("modal-hook"))},c=e=>(0,l.jsxs)(n.Fragment,{children:[e.show&&(0,l.jsx)(i.A,{onClick:e.onCancel}),(0,l.jsx)(r.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,l.jsx)(o,{...e})})]})},789:(e,t,a)=>{a.d(t,{m:()=>r});var n=a(43);const s=(e,t)=>{switch(t.type){case"INPUT_CHANGE":let a=!0;for(const n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return{...e,inputs:{...e.inputs,[t.inputId]:{value:t.value,isValid:t.isValid}},isValid:a};case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},r=(e,t)=>{const[a,r]=(0,n.useReducer)(s,{inputs:e,isValid:t});return[a,(0,n.useCallback)(((e,t,a)=>{r({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),(0,n.useCallback)(((e,t)=>{r({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},171:(e,t,a)=>{a.d(t,{x:()=>s});var n=a(43);const s=()=>{const[e,t]=(0,n.useState)(!1),[a,s]=(0,n.useState)(),r=(0,n.useRef)([]),i=(0,n.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const l=new AbortController;r.current.push(l);try{const s=await fetch(e,{method:a,body:n,headers:i,signal:l.signal}),o=await s.json();if(r.current=r.current.filter((e=>e!==l)),!s.ok)throw new Error(o.message);return t(!1),o}catch(o){throw s(o.message),t(!1),o}}),[]);return(0,n.useEffect)((()=>()=>{r.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:a,sendRequest:i,clearError:()=>{s(null)}}}},962:(e,t,a)=>{a.d(t,{B_:()=>l,Ik:()=>o,i$:()=>c,tf:()=>d});const n="REQUIRE",s="MINLENGTH",r="MAXLENGTH",i="EMAIL",l=()=>({type:n}),o=e=>({type:s,val:e}),c=()=>({type:i}),d=(e,t)=>{let a=!0;for(const l of t)l.type===n&&(a=a&&e.trim().length>0),l.type===s&&(a=a&&e.trim().length>=l.val),l.type===r&&(a=a&&e.trim().length<=l.val),"MIN"===l.type&&(a=a&&+e>=l.val),"MAX"===l.type&&(a=a&&+e<=l.val),l.type===i&&(a=a&&/^\S+@\S+\.\S+$/.test(e));return a}},220:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(43),s=a(837),r=a(244),i=a(347),l=a(626),o=a(863),c=a(962),d=a(789),u=a(886),p=a(171),m=a(356),h=a(579);const v=()=>{const e=(0,n.useContext)(u.c),[t,a]=(0,n.useState)(!0),{isLoading:v,error:x,sendRequest:f,clearError:j}=(0,p.x)(),[g,y,b]=(0,d.m)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1);return(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)(l.A,{error:x,onClear:j}),(0,h.jsxs)(s.A,{className:"authentication",children:[v&&(0,h.jsx)(o.A,{asOverlay:!0}),(0,h.jsx)("h2",{children:"Login Required"}),(0,h.jsx)("hr",{}),(0,h.jsxs)("form",{onSubmit:async a=>{if(a.preventDefault(),t)try{const t=await f("https://mern-stack-m9j1.onrender.com/api/users/login","POST",JSON.stringify({email:g.inputs.email.value,password:g.inputs.password.value}),{"Content-Type":"application/json"});e.login(t.userId,t.token)}catch(n){}else try{const t=new FormData;t.append("email",g.inputs.email.value),t.append("name",g.inputs.name.value),t.append("password",g.inputs.password.value),t.append("image",g.inputs.image.value);const a=await f("https://mern-stack-m9j1.onrender.com/api/users/signup","POST",t);e.login(a.userId,a.token)}catch(n){}},children:[!t&&(0,h.jsx)(r.A,{element:"input",id:"name",type:"text",label:"Your Name",validators:[(0,c.B_)()],errorText:"Please enter a name.",onInput:y}),!t&&(0,h.jsx)(m.A,{center:!0,id:"image",onInput:y,errorText:"Please provide an Image!"}),(0,h.jsx)(r.A,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[(0,c.i$)()],errorText:"Please enter a valid email address.",onInput:y}),(0,h.jsx)(r.A,{element:"input",id:"password",type:"password",label:"Password",validators:[(0,c.Ik)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:y}),(0,h.jsx)(i.A,{type:"submit",disabled:!g.isValid,children:t?"LOGIN":"SIGNUP"})]}),(0,h.jsxs)(i.A,{inverse:!0,onClick:()=>{t?b({...g.inputs,name:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1):b({...g.inputs,name:void 0,image:void 0},g.inputs.email.isValid&&g.inputs.password.isValid),a((e=>!e))},children:["SWITCH TO ",t?"SIGNUP":"LOGIN"]})]})]})}}}]);
//# sourceMappingURL=220.38383e0a.chunk.js.map