import{au as o,a as r,cV as l,b as p,f as m,aw as d,o as c,h as u,i as f,t as g,n as b,ax as v,q as _}from"./index.8b3a4968.js";import{b as y}from"./index.0bf536d8.js";import"./index.2ab40e11.js";import"./index.e82df713.js";import"./ArrowLeftOutlined.a1aeeb88.js";import"./index.a225b2b9.js";import"./index.d69e84ee.js";import"./FullscreenOutlined.fe4103b7.js";import"./index.77c79e0f.js";import"./useWindowSizeFn.3c2870e0.js";import"./useContentViewHeight.51e5ddc2.js";import"./uniqBy.d2a5c5e3.js";import"./_baseIteratee.eb583cd4.js";import"./get.65293a51.js";import"./index.8711a32e.js";import"./useRefs.0ab27155.js";import"./PlusOutlined.b9a7823c.js";import"./RedoOutlined.33bd5a3c.js";import"./index.418bbf79.js";import"./lock.c1f066f3.js";const C=r({name:"SelectItem",components:{Select:l},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item"),a=m(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function n(s){e.event&&y(e.event,s)}return{prefixCls:t,handleChange:n,getBindValue:a}}});function S(e,t,a,n,s,h){const i=d("Select");return c(),u("div",{class:_(e.prefixCls)},[f("span",null,g(e.title),1),b(i,v(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}var L=o(C,[["render",S],["__scopeId","data-v-6707e46b"]]);export{L as default};
