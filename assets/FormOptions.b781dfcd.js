var $=Object.defineProperty,w=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var k=(e,o,t)=>o in e?$(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,b=(e,o)=>{for(var t in o||(o={}))D.call(o,t)&&k(e,t,o[t]);if(I)for(var t of I(o))G.call(o,t)&&k(e,t,o[t]);return e},h=(e,o)=>w(e,x(o));import{u as P}from"./useFormDesignState.79dd1b0e.js";import{c as C}from"./index.42103eed.js";import{E as U,a as E,I as A,b6 as N,w as V,bc as M,au as S,aw as O,o as i,h as u,F,az as y,i as d,n as l,B}from"./index.8b3a4968.js";import"./isNumber.40be0bed.js";const{createMessage:c}=U(),T=Object.assign({success:e=>{c.success(e)},error:e=>{c.error(e)},warning:e=>{c.warning(e)},info:e=>{c.info(e)}});const j=E({name:"FormOptions",components:{Input:A,Icon:N},setup(){var r;const e=V({}),{formConfig:o}=P(),t=((r=o.value.currentItem)==null?void 0:r.component)==="TreeSelect"?"treeData":"options",m=()=>{var s,a,g,_;(a=(s=o.value.currentItem)==null?void 0:s.componentProps)!=null&&a[t]||(o.value.currentItem.componentProps[t]=[]);const n=((_=(g=o.value.currentItem)==null?void 0:g.componentProps)==null?void 0:_[t].length)+1;o.value.currentItem.componentProps[t].push({label:`\u9009\u9879${n}`,value:""+n})},v=n=>{var s,a;C((a=(s=o.value.currentItem)==null?void 0:s.componentProps)==null?void 0:a[t],n)},f=()=>{var n,s;(s=(n=o.value.currentItem)==null?void 0:n.columns)==null||s.push({span:12,children:[]})},p=n=>{if(n===0)return T.warning("\u8BF7\u81F3\u5C11\u4FDD\u7559\u4E00\u4E2A\u6805\u683C");C(o.value.currentItem.columns,n)};return h(b({},M(e)),{formConfig:o,addOptions:m,deleteOptions:v,key:t,deleteGridOptions:p,addGridOptions:f})}}),z={key:0},L={class:"options-box"},R=["onClick"],q={key:1},H={class:"options-box"},J=["onClick"];function K(e,o,t,m,v,f){const p=O("Input"),r=O("Icon");return i(),u("div",null,[["Grid"].includes(e.formConfig.currentItem.component)?(i(),u("div",z,[(i(!0),u(F,null,y(e.formConfig.currentItem.columns,(n,s)=>(i(),u("div",{key:s},[d("div",L,[l(p,{value:n.span,"onUpdate:value":a=>n.span=a,class:"options-value"},null,8,["value","onUpdate:value"]),d("a",{class:"options-delete",onClick:a=>e.deleteGridOptions(s)},[l(r,{icon:"ant-design:delete-outlined"})],8,R)])]))),128)),d("a",{onClick:o[0]||(o[0]=(...n)=>e.addGridOptions&&e.addGridOptions(...n))},[l(r,{icon:"ant-design:file-add-outlined"}),B(" \u6DFB\u52A0\u6805\u683C ")])])):(i(),u("div",q,[(i(!0),u(F,null,y(e.formConfig.currentItem.componentProps[e.key],(n,s)=>(i(),u("div",{key:s},[d("div",H,[l(p,{value:n.label,"onUpdate:value":a=>n.label=a},null,8,["value","onUpdate:value"]),l(p,{value:n.value,"onUpdate:value":a=>n.value=a,class:"options-value"},null,8,["value","onUpdate:value"]),d("a",{class:"options-delete",onClick:a=>e.deleteOptions(s)},[l(r,{icon:"ant-design:delete-outlined"})],8,J)])]))),128)),d("a",{onClick:o[1]||(o[1]=(...n)=>e.addOptions&&e.addOptions(...n))},[l(r,{icon:"ant-design:file-add-outlined"}),B(" \u6DFB\u52A0\u9009\u9879 ")])]))])}var ee=S(j,[["render",K],["__scopeId","data-v-11553574"]]);export{ee as default};
