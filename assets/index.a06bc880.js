import{_ as d,G as H,a as R,H as J,J as L,K as Q,L as X,M as $,N as q,O as D,v as W,Q as Y,R as w,S as u,n as f,T as P}from"./index.8b3a4968.js";import{V as Z}from"./Checkbox.26de6fc2.js";var ee=function(){return{name:String,prefixCls:String,options:{type:Array,default:function(){return[]}},disabled:Boolean,id:String}},ie=function(){return d(d({},ee()),{defaultValue:{type:Array},value:{type:Array},onChange:{type:Function},"onUpdate:value":{type:Function}})},te=function(){return{prefixCls:String,defaultChecked:{type:Boolean,default:void 0},checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:H.any,name:String,id:String,indeterminate:{type:Boolean,default:void 0},type:{type:String,default:"checkbox"},autofocus:{type:Boolean,default:void 0},onChange:Function,"onUpdate:checked":Function,onClick:Function,skipGroup:{type:Boolean,default:!1}}},ne=function(){return d(d({},te()),{indeterminate:{type:Boolean,default:!1}})},oe=Symbol("CheckboxGroupContext"),G=globalThis&&globalThis.__rest||function(a,e){var l={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&e.indexOf(t)<0&&(l[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(a);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(a,t[o])&&(l[t[o]]=a[t[o]]);return l},ce=R({name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:ne(),setup:function(e,l){var t=l.emit,o=l.attrs,x=l.slots,S=l.expose,O=J(),k=L("checkbox",e),s=k.prefixCls,B=k.direction,r=Q(oe,void 0),m=Symbol("checkboxUniId");X(function(){!e.skipGroup&&r&&r.registerValue(m,e.value)}),$(function(){r&&r.cancelValue(m)}),q(function(){D(e.checked!==void 0||r||e.value===void 0,"Checkbox","`value` is not validate prop, do you mean `checked`?")});var _=function(n){var b=n.target.checked;t("update:checked",b),t("change",n)},h=W(),I=function(){var n;(n=h.value)===null||n===void 0||n.focus()},M=function(){var n;(n=h.value)===null||n===void 0||n.blur()};return S({focus:I,blur:M}),function(){var i,n,b=Y((n=x.default)===null||n===void 0?void 0:n.call(x)),g=e.indeterminate,j=e.skipGroup,v=e.id,z=v===void 0?O.id.value:v,A=G(e,["indeterminate","skipGroup","id"]),E=o.onMouseenter,V=o.onMouseleave;o.onInput;var F=o.class,N=o.style,T=G(o,["onMouseenter","onMouseleave","onInput","class","style"]),c=d(d(d({},A),{id:z,prefixCls:s.value}),T);r&&!j?(c.onChange=function(){for(var y=arguments.length,C=new Array(y),p=0;p<y;p++)C[p]=arguments[p];t.apply(void 0,["change"].concat(C)),r.toggleOption({label:b,value:e.value})},c.name=r.name.value,c.checked=r.mergedValue.value.indexOf(e.value)!==-1,c.disabled=e.disabled||r.disabled.value,c.indeterminate=g):c.onChange=_;var U=w((i={},u(i,"".concat(s.value,"-wrapper"),!0),u(i,"".concat(s.value,"-rtl"),B.value==="rtl"),u(i,"".concat(s.value,"-wrapper-checked"),c.checked),u(i,"".concat(s.value,"-wrapper-disabled"),c.disabled),i),F),K=w(u({},"".concat(s.value,"-indeterminate"),g));return f("label",{class:U,style:N,onMouseenter:E,onMouseleave:V},[f(Z,P(P({},c),{},{class:K,ref:h}),null),b.length?f("span",null,[b]):null])}}});export{ce as C,oe as a,ie as c};
