var T=Object.defineProperty;var p=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var v=(e,t,o)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,F=(e,t)=>{for(var o in t||(t={}))b.call(t,o)&&v(e,o,t[o]);if(p)for(var o of p(t))S.call(t,o)&&v(e,o,t[o]);return e};var R=(e,t,o)=>new Promise((s,r)=>{var u=c=>{try{d(o.next(c))}catch(n){r(n)}},f=c=>{try{d(o.throw(c))}catch(n){r(n)}},d=c=>c.done?s(c.value):Promise.resolve(c.value).then(u,f);d((o=o.apply(e,t)).next())});import{v as I,f as i,k as l,c as O,a as w,o as x,h as E,t as j}from"./index.8b3a4968.js";var a=(e=>(e[e.LOGIN=0]="LOGIN",e[e.REGISTER=1]="REGISTER",e[e.RESET_PASSWORD=2]="RESET_PASSWORD",e[e.MOBILE=3]="MOBILE",e[e.QR_CODE=4]="QR_CODE",e))(a||{});const P=I(0);function B(){function e(s){P.value=s}const t=i(()=>P.value);function o(){e(0)}return{setLoginState:e,getLoginState:t,handleBackLogin:o}}function k(e){const t=i(()=>{var r;const s=l(e);return(r=s==null?void 0:s.validate)!=null?r:u=>Promise.resolve()});function o(){return R(this,null,function*(){const s=l(e);return s?yield s.validate():void 0})}return{validate:t,validForm:o}}function A(e){const{t}=O(),o=i(()=>_(t("sys.login.accountPlaceholder"))),s=i(()=>_(t("sys.login.passwordPlaceholder"))),r=i(()=>_(t("sys.login.smsPlaceholder"))),u=i(()=>_(t("sys.login.mobilePlaceholder"))),f=(n,g)=>R(this,null,function*(){return g?Promise.resolve():Promise.reject(t("sys.login.policyPlaceholder"))}),d=n=>(g,m)=>R(this,null,function*(){return m?m!==n?Promise.reject(t("sys.login.diffPwd")):Promise.resolve():Promise.reject(t("sys.login.passwordPlaceholder"))});return{getFormRules:i(()=>{const n=l(o),g=l(s),m=l(r),h=l(u),y={sms:m,mobile:h};switch(l(P)){case 1:return F({account:n,password:g,confirmPassword:[{validator:d(e==null?void 0:e.password),trigger:"change"}],policy:[{validator:f,trigger:"change"}]},y);case 2:return F({account:n},y);case 3:return y;default:return{account:n,password:g}}})}}function _(e){return[{required:!0,message:e,trigger:"change"}]}const G={class:"mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left"},L=w({__name:"LoginFormTitle",setup(e){const{t}=O(),{getLoginState:o}=B(),s=i(()=>({[a.RESET_PASSWORD]:t("sys.login.forgetFormTitle"),[a.LOGIN]:t("sys.login.signInFormTitle"),[a.REGISTER]:t("sys.login.signUpFormTitle"),[a.MOBILE]:t("sys.login.mobileSignInFormTitle"),[a.QR_CODE]:t("sys.login.qrSignInFormTitle")})[l(o)]);return(r,u)=>(x(),E("h2",G,j(l(s)),1))}});var D=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{a as L,L as _,A as a,k as b,D as c,B as u};
