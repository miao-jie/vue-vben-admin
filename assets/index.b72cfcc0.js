import{n as l,S as _,K as oe,v as M,cI as ie,cJ as le,cK as re,_ as b,F as ae,G as L,a as Z,J as se,bp as ce,aI as q,Y as ee,M as de,a4 as pe,bD as H,f as ue,Q as be,aJ as W,ck as fe,O as ve}from"./index.8b3a4968.js";function O(o){return o!=null}var me=function(e){var n=e.itemPrefixCls,t=e.component,r=e.span,i=e.labelStyle,d=e.contentStyle,m=e.bordered,s=e.label,c=e.content,a=e.colon,x=t;if(m){var p;return l(x,{class:[(p={},_(p,"".concat(n,"-item-label"),O(s)),_(p,"".concat(n,"-item-content"),O(c)),p)],colSpan:r},{default:function(){return[O(s)&&l("span",{style:i},[s]),O(c)&&l("span",{style:d},[c])]}})}return l(x,{class:["".concat(n,"-item")],colSpan:r},{default:function(){return[l("div",{class:"".concat(n,"-item-container")},[s&&l("span",{class:["".concat(n,"-item-label"),_({},"".concat(n,"-item-no-colon"),!a)],style:i},[s]),c&&l("span",{class:"".concat(n,"-item-content"),style:d},[c])])]}})},F=me,ye=function(e){var n=function(p,f,v){var P=f.colon,$=f.prefixCls,h=f.bordered,S=v.component,D=v.type,N=v.showLabel,z=v.showContent,g=v.labelStyle,k=v.contentStyle;return p.map(function(u,I){var w,j,y=u.props||{},J=y.prefixCls,R=J===void 0?$:J,U=y.span,K=U===void 0?1:U,T=y.labelStyle,G=y.contentStyle,Q=y.label,V=Q===void 0?(j=(w=u.children)===null||w===void 0?void 0:w.label)===null||j===void 0?void 0:j.call(w):Q,Y=ie(u),A=le(u),B=re(u),E=u.key;return typeof S=="string"?l(F,{key:"".concat(D,"-").concat(String(E)||I),class:A,style:B,labelStyle:b(b({},g.value),T),contentStyle:b(b({},k.value),G),span:K,colon:P,component:S,itemPrefixCls:R,bordered:h,label:N?V:null,content:z?Y:null},null):[l(F,{key:"label-".concat(String(E)||I),class:A,style:b(b(b({},g.value),B),T),span:1,colon:P,component:S[0],itemPrefixCls:R,bordered:h,label:V},null),l(F,{key:"content-".concat(String(E)||I),class:A,style:b(b(b({},k.value),B),G),span:K*2-1,component:S[1],itemPrefixCls:R,bordered:h,content:Y},null)]})},t=e.prefixCls,r=e.vertical,i=e.row,d=e.index,m=e.bordered,s=oe(ne,{labelStyle:M({}),contentStyle:M({})}),c=s.labelStyle,a=s.contentStyle;return r?l(ae,null,[l("tr",{key:"label-".concat(d),class:"".concat(t,"-row")},[n(i,e,{component:"th",type:"label",showLabel:!0,labelStyle:c,contentStyle:a})]),l("tr",{key:"content-".concat(d),class:"".concat(t,"-row")},[n(i,e,{component:"td",type:"content",showContent:!0,labelStyle:c,contentStyle:a})])]):l("tr",{key:d,class:"".concat(t,"-row")},[n(i,e,{component:m?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:c,contentStyle:a})])},xe=ye;L.any;var he=function(){return{prefixCls:String,label:L.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},Se=Z({name:"ADescriptionsItem",props:he(),slots:["label"],setup:function(e,n){var t=n.slots;return function(){var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)}}}),te={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function ge(o,e){if(typeof o=="number")return o;if(ee(o)==="object")for(var n=0;n<W.length;n++){var t=W[n];if(e[t]&&o[t]!==void 0)return o[t]||te[t]}return 3}function X(o,e,n){var t=o;return(e===void 0||e>n)&&(t=fe(o,{span:n}),ve(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),t}function we(o,e){var n=be(o),t=[],r=[],i=e;return n.forEach(function(d,m){var s,c=(s=d.props)===null||s===void 0?void 0:s.span,a=c||1;if(m===n.length-1){r.push(X(d,c,i)),t.push(r);return}a<i?(i-=a,r.push(d)):(r.push(X(d,a,i)),t.push(r),i=e,r=[])}),t}var Ce=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:L.any,extra:L.any,column:{type:[Number,Object],default:function(){return te}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},ne=Symbol("descriptionsContext"),C=Z({name:"ADescriptions",props:Ce(),slots:["title","extra"],Item:Se,setup:function(e,n){var t=n.slots,r=se("descriptions",e),i=r.prefixCls,d=r.direction,m,s=M({});ce(function(){m=q.subscribe(function(a){ee(e.column)==="object"&&(s.value=a)})}),de(function(){q.unsubscribe(m)}),pe(ne,{labelStyle:H(e,"labelStyle"),contentStyle:H(e,"contentStyle")});var c=ue(function(){return ge(e.column,s.value)});return function(){var a,x,p,f,v=e.size,P=e.bordered,$=P===void 0?!1:P,h=e.layout,S=h===void 0?"horizontal":h,D=e.colon,N=D===void 0?!0:D,z=e.title,g=z===void 0?(x=t.title)===null||x===void 0?void 0:x.call(t):z,k=e.extra,u=k===void 0?(p=t.extra)===null||p===void 0?void 0:p.call(t):k,I=(f=t.default)===null||f===void 0?void 0:f.call(t),w=we(I,c.value);return l("div",{class:[i.value,(a={},_(a,"".concat(i.value,"-").concat(v),v!=="default"),_(a,"".concat(i.value,"-bordered"),!!$),_(a,"".concat(i.value,"-rtl"),d.value==="rtl"),a)]},[(g||u)&&l("div",{class:"".concat(i.value,"-header")},[g&&l("div",{class:"".concat(i.value,"-title")},[g]),u&&l("div",{class:"".concat(i.value,"-extra")},[u])]),l("div",{class:"".concat(i.value,"-view")},[l("table",null,[l("tbody",null,[w.map(function(j,y){return l(xe,{key:y,index:y,colon:N,prefixCls:i.value,vertical:S==="vertical",bordered:$,row:j},null)})])])])])}}});C.install=function(o){return o.component(C.name,C),o.component(C.Item.name,C.Item),o};var Pe=C;export{Pe as D};
