import{U as V,a as $,G as N,ak as G,J as k,f as c,v as B,a7 as D,aj as E,n as p,_ as d,S as x,F as J,a6 as L,R as U}from"./index.8b3a4968.js";import{u as W}from"./useFlexGapSupport.3a18f63e.js";var q={small:8,middle:16,large:24},H=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:N.oneOf(G("horizontal","vertical")).def("horizontal"),align:N.oneOf(G("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function K(i){return typeof i=="string"?q[i]:i||0}var M=$({name:"ASpace",props:H(),slots:["split"],setup:function(t,F){var s=F.slots,f=k("space",t),l=f.prefixCls,I=f.space,S=f.direction,_=W(),r=c(function(){var a,e,n;return(n=(a=t.size)!==null&&a!==void 0?a:(e=I.value)===null||e===void 0?void 0:e.size)!==null&&n!==void 0?n:"small"}),m=B(),o=B();D(r,function(){var a=(Array.isArray(r.value)?r.value:[r.value,r.value]).map(function(n){return K(n)}),e=L(a,2);m.value=e[0],o.value=e[1]},{immediate:!0});var z=c(function(){return t.align===void 0&&t.direction==="horizontal"?"center":t.align}),P=c(function(){var a;return U(l.value,"".concat(l.value,"-").concat(t.direction),(a={},x(a,"".concat(l.value,"-rtl"),S.value==="rtl"),x(a,"".concat(l.value,"-align-").concat(z.value),z.value),a))}),j=c(function(){return S.value==="rtl"?"marginLeft":"marginRight"}),O=c(function(){var a={};return _.value&&(a.columnGap="".concat(m.value,"px"),a.rowGap="".concat(o.value,"px")),d(d({},a),t.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-o.value,"px")})});return function(){var a,e,n=t.wrap,h=t.direction,R=h===void 0?"horizontal":h,w=E((a=s.default)===null||a===void 0?void 0:a.call(s)),C=w.length;if(C===0)return null;var u=(e=s.split)===null||e===void 0?void 0:e.call(s),b="".concat(l.value,"-item"),A=m.value,g=C-1;return p("div",{class:P.value,style:O.value},[w.map(function(T,y){var v={};return _.value||(R==="vertical"?y<g&&(v={marginBottom:"".concat(A/(u?2:1),"px")}):v=d(d({},y<g&&x({},j.value,"".concat(A/(u?2:1),"px"))),n&&{paddingBottom:"".concat(o.value,"px")})),p(J,null,[p("div",{class:b,style:v},[T]),y<g&&u&&p("span",{class:"".concat(b,"-split"),style:v},[u])])})])}}}),Y=V(M);export{Y as S};
