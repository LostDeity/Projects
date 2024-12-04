"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[830],{830:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(43),o=n(169),a=n(323),i=n(962),c=n(244),s=n(347),l=n(837),u=n(171),p=n(789),f=(n(284),n(863)),d=n(626),h=n(886),v=n(579);const y=()=>{const e=(0,r.useContext)(h.c),{isLoading:t,error:n,sendRequest:y,clearError:m}=(0,u.x)(),[g,b]=(0,r.useState)(),C=(0,o.g)().placeId,x=(0,a.W6)(),[j,R,A]=(0,p.m)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1);return(0,r.useEffect)((()=>{(async()=>{try{const e=await y("https://mern-stack-m9j1.onrender.com/api"+"/places/".concat(C));b(e.place),A({title:{value:e.place.title,isValid:!0},description:{value:e.place.description,isValid:!0}},!0)}catch(e){}})()}),[y,C,A]),t?(0,v.jsx)("div",{className:"center",children:(0,v.jsx)(f.A,{})}):(g||n||l.A,(0,v.jsxs)(r.Fragment,{children:[(0,v.jsx)(d.A,{error:n,onClear:m}),!t&&g&&(0,v.jsxs)("form",{className:"place-form",onSubmit:async t=>{t.preventDefault();try{await y("https://mern-stack-m9j1.onrender.com/api"+"/places/".concat(C),"PATCH",JSON.stringify({title:j.inputs.title.value,description:j.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token}),x.push("/"+e.userId+"/places")}catch(n){}},children:[(0,v.jsx)(c.A,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,i.B_)()],errorText:"Please enter a valid title",onInput:R,initialValue:g.title,initialIsValid:!0}),(0,v.jsx)(c.A,{id:"description",element:"textarea",label:"Description",validators:[(0,i.Ik)(5)],errorText:"Please enter a valid description (min 5 Characters)",onInput:R,initialValue:g.description,initialIsValid:!0}),(0,v.jsx)(s.A,{type:"submit",disable:!j.isValid,children:"UPDATE PLACE"})]})]}))}},347:(e,t,n)=>{n.d(t,{A:()=>a});n(43);var r=n(582),o=n(579);const a=e=>e.href?(0,o.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,o.jsx)(r.N_,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,o.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},244:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(43),o=n(962),a=n(579);const i=(e,t)=>{switch(t.type){case"CHANGE":return{...e,value:t.val,isValid:(0,o.tf)(t.val,t.validators)};case"TOUCH":return{...e,isTouched:!0};default:return e}},c=e=>{const[t,n]=(0,r.useReducer)(i,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),{id:o,onInput:c}=e,{value:s,isValid:l}=t;(0,r.useEffect)((()=>{c(o,s,l)}),[o,s,l,c]);const u=t=>{n({type:"CHANGE",val:t.target.value,validators:e.validators})},p=()=>{n({type:"TOUCH"})},f="input"===e.element?(0,a.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:u,onBlur:p,value:t.value}):(0,a.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:u,onBlur:p,value:t.value});return(0,a.jsxs)("div",{className:"form-control ".concat(!t.isValid&&t.isTouched&&"form-control--invalid"),children:[(0,a.jsx)("label",{htmlFor:e.id,children:e.label}),f,!t.isValid&&t.isTouched&&(0,a.jsx)("p",{children:e.errorText})]})}},837:(e,t,n)=>{n.d(t,{A:()=>o});n(43);var r=n(579);const o=e=>(0,r.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})},626:(e,t,n)=>{n.d(t,{A:()=>i});n(43);var r=n(630),o=n(347),a=n(579);const i=e=>(0,a.jsx)(r.A,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,a.jsx)(o.A,{onClick:e.onClear,children:"Okay"}),children:(0,a.jsx)("p",{children:e.error})})},630:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(43),o=n(950),a=n(336),i=n(6),c=n(579);const s=e=>{const t=(0,c.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,c.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,c.jsx)("h2",{children:e.header})}),(0,c.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,c.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,c.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return o.createPortal(t,document.getElementById("modal-hook"))},l=e=>(0,c.jsxs)(r.Fragment,{children:[e.show&&(0,c.jsx)(i.A,{onClick:e.onCancel}),(0,c.jsx)(a.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,c.jsx)(s,{...e})})]})},789:(e,t,n)=>{n.d(t,{m:()=>a});var r=n(43);const o=(e,t)=>{switch(t.type){case"INPUT_CHANGE":let n=!0;for(const r in e.inputs)e.inputs[r]&&(n=r===t.inputId?n&&t.isValid:n&&e.inputs[r].isValid);return{...e,inputs:{...e.inputs,[t.inputId]:{value:t.value,isValid:t.isValid}},isValid:n};case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},a=(e,t)=>{const[n,a]=(0,r.useReducer)(o,{inputs:e,isValid:t});return[n,(0,r.useCallback)(((e,t,n)=>{a({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),(0,r.useCallback)(((e,t)=>{a({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},171:(e,t,n)=>{n.d(t,{x:()=>o});var r=n(43);const o=()=>{const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(),a=(0,r.useRef)([]),i=(0,r.useCallback)((async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const c=new AbortController;a.current.push(c);try{const o=await fetch(e,{method:n,body:r,headers:i,signal:c.signal}),s=await o.json();if(a.current=a.current.filter((e=>e!==c)),!o.ok)throw new Error(s.message);return t(!1),s}catch(s){throw o(s.message),t(!1),s}}),[]);return(0,r.useEffect)((()=>()=>{a.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:n,sendRequest:i,clearError:()=>{o(null)}}}},962:(e,t,n)=>{n.d(t,{B_:()=>c,Ik:()=>s,i$:()=>l,tf:()=>u});const r="REQUIRE",o="MINLENGTH",a="MAXLENGTH",i="EMAIL",c=()=>({type:r}),s=e=>({type:o,val:e}),l=()=>({type:i}),u=(e,t)=>{let n=!0;for(const c of t)c.type===r&&(n=n&&e.trim().length>0),c.type===o&&(n=n&&e.trim().length>=c.val),c.type===a&&(n=n&&e.trim().length<=c.val),"MIN"===c.type&&(n=n&&+e>=c.val),"MAX"===c.type&&(n=n&&+e<=c.val),c.type===i&&(n=n&&/^\S+@\S+\.\S+$/.test(e));return n}},169:(e,t,n)=>{function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var o=n(688),a=r(n(43)),i=n(321),c=r(n(173)),s=r(n(620)),l=r(n(213));function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,f(e,t)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function d(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var h=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=i.createBrowserHistory(t.props),t}return p(t,e),t.prototype.render=function(){return a.createElement(o.Router,{history:this.history,children:this.props.children})},t}(a.Component);h.propTypes={basename:c.string,children:c.node,forceRefresh:c.bool,getUserConfirmation:c.func,keyLength:c.number},h.prototype.componentDidMount=function(){s(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")};var v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=i.createHashHistory(t.props),t}return p(t,e),t.prototype.render=function(){return a.createElement(o.Router,{history:this.history,children:this.props.children})},t}(a.Component);v.propTypes={basename:c.string,children:c.node,getUserConfirmation:c.func,hashType:c.oneOf(["hashbang","noslash","slash"])},v.prototype.componentDidMount=function(){s(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")};var y=function(e,t){return"function"===typeof e?e(t):e},m=function(e,t){return"string"===typeof e?i.createLocation(e,null,null,t):e},g=function(e){return e},b=a.forwardRef;"undefined"===typeof b&&(b=g);var C=b((function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,i=d(e,["innerRef","navigate","onClick"]),c=i.target,s=u({},i,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return s.ref=g!==b&&t||n,a.createElement("a",s)}));C.displayName="LinkAnchor";var x=b((function(e,t){var n=e.component,r=void 0===n?C:n,c=e.replace,s=e.to,p=e.innerRef,f=d(e,["component","replace","to","innerRef"]);return a.createElement(o.__RouterContext.Consumer,null,(function(e){e||l(!1,"You should not use <Link> outside a <Router>");var n=e.history,o=m(y(s,e.location),e.location),d=o?n.createHref(o):"",h=u({},f,{href:d,navigate:function(){var t=y(s,e.location),r=i.createPath(e.location)===i.createPath(m(t));(c||r?n.replace:n.push)(t)}});return g!==b?h.ref=t||p:h.innerRef=p,a.createElement(r,h)}))})),j=c.oneOfType([c.string,c.object,c.func]),R=c.oneOfType([c.string,c.func,c.shape({current:c.any})]);x.displayName="Link",x.propTypes={innerRef:R,onClick:c.func,replace:c.bool,target:c.string,to:j.isRequired};var A=function(e){return e},N=a.forwardRef;"undefined"===typeof N&&(N=A);var E=N((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=e.activeClassName,c=void 0===i?"active":i,s=e.activeStyle,p=e.className,f=e.exact,h=e.isActive,v=e.location,g=e.sensitive,b=e.strict,C=e.style,j=e.to,R=e.innerRef,E=d(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(o.__RouterContext.Consumer,null,(function(e){e||l(!1,"You should not use <NavLink> outside a <Router>");var n=v||e.location,i=m(y(j,n),n),d=i.pathname,w=d&&d.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=w?o.matchPath(n.pathname,{path:w,exact:f,sensitive:g,strict:b}):null,T=!!(h?h(k,n):k),O="function"===typeof p?p(T):p,_="function"===typeof C?C(T):C;T&&(O=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(O,c),_=u({},_,s));var V=u({"aria-current":T&&r||null,className:O,style:_,to:i},E);return A!==N?V.ref=t||R:V.innerRef=R,a.createElement(x,V)}))}));E.displayName="NavLink";var w=c.oneOf(["page","step","location","date","time","true","false"]);E.propTypes=u({},x.propTypes,{"aria-current":w,activeClassName:c.string,activeStyle:c.object,className:c.oneOfType([c.string,c.func]),exact:c.bool,isActive:c.func,location:c.object,sensitive:c.bool,strict:c.bool,style:c.oneOfType([c.object,c.func])}),Object.defineProperty(t,"g",{enumerable:!0,get:function(){return o.useParams}})},323:(e,t,n)=>{function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n(688),a=r(n(43)),i=n(321);n(173),n(620);var c=r(n(213));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),u(e.prototype.constructor=e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],0<=t.indexOf(n)||(o[n]=e[n]);return o}var f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=i.createBrowserHistory(t.props),t}return l(t,e),t.prototype.render=function(){return a.createElement(o.Router,{history:this.history,children:this.props.children})},t}(a.Component),d=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=i.createHashHistory(t.props),t}return l(t,e),t.prototype.render=function(){return a.createElement(o.Router,{history:this.history,children:this.props.children})},t}(a.Component),h=function(e,t){return"function"==typeof e?e(t):e},v=function(e,t){return"string"==typeof e?i.createLocation(e,null,null,t):e},y=function(e){return e},m=a.forwardRef;void 0===m&&(m=y);var g=m((function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,i=p(e,["innerRef","navigate","onClick"]),c=i.target,l=s({},i,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),r())}});return l.ref=y!==m&&t||n,a.createElement("a",l)})),b=m((function(e,t){var n=e.component,r=void 0===n?g:n,l=e.replace,u=e.to,f=e.innerRef,d=p(e,["component","replace","to","innerRef"]);return a.createElement(o.__RouterContext.Consumer,null,(function(e){e||c(!1);var n=e.history,o=v(h(u,e.location),e.location),p=o?n.createHref(o):"",g=s({},d,{href:p,navigate:function(){var t=h(u,e.location),r=i.createPath(e.location)===i.createPath(v(t));(l||r?n.replace:n.push)(t)}});return y!==m?g.ref=t||f:g.innerRef=f,a.createElement(r,g)}))})),C=function(e){return e},x=a.forwardRef;void 0===x&&(x=C);var j=x((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=e.activeClassName,l=void 0===i?"active":i,u=e.activeStyle,f=e.className,d=e.exact,y=e.isActive,m=e.location,g=e.sensitive,j=e.strict,R=e.style,A=e.to,N=e.innerRef,E=p(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(o.__RouterContext.Consumer,null,(function(e){e||c(!1);var n=m||e.location,i=v(h(A,n),n),p=i.pathname,w=p&&p.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=w?o.matchPath(n.pathname,{path:w,exact:d,sensitive:g,strict:j}):null,T=!!(y?y(k,n):k),O="function"==typeof f?f(T):f,_="function"==typeof R?R(T):R;T&&(O=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(O,l),_=s({},_,u));var V=s({"aria-current":T&&r||null,className:O,style:_,to:i},E);return C!==x?V.ref=t||N:V.innerRef=N,a.createElement(b,V)}))}));Object.defineProperty(t,"W6",{enumerable:!0,get:function(){return o.useHistory}})},213:e=>{var t="Invariant failed";e.exports=function(e,n){if(!e)throw new Error(t)}},620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=function(e,t){}},284:()=>{}}]);
//# sourceMappingURL=830.becb8faf.chunk.js.map