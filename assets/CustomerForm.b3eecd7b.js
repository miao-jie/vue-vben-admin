import{B as C}from"./BasicForm.fb8f55b1.js";import"./componentMap.079bf000.js";import{u as B}from"./useForm.7aac7ab8.js";import"./RadioButtonGroup.78f375c5.js";import{au as E,a as g,cD as F,I as n,aw as e,o as h,j as b,z as p,n as i,bS as v,E as A}from"./index.8b3a4968.js";import{P}from"./index.16a4abe8.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.ff8bc7ae.js";import"./index.a225b2b9.js";import"./index.796fea7a.js";import"./_baseIteratee.eb583cd4.js";import"./get.65293a51.js";import"./DeleteOutlined.e9646d67.js";import"./index.c4801fa0.js";import"./useRefs.0ab27155.js";import"./Form.d11d3df6.js";import"./Col.12dd1a8e.js";import"./useFlexGapSupport.3a18f63e.js";import"./useSize.57639950.js";import"./index.af9de7bc.js";import"./uniqBy.d2a5c5e3.js";import"./index.07f15dab.js";import"./useWindowSizeFn.3c2870e0.js";import"./FullscreenOutlined.fe4103b7.js";import"./index.0b814ffd.js";import"./index.a3762bda.js";import"./Checkbox.26de6fc2.js";import"./index.a06bc880.js";import"./index.a1d7263c.js";import"./index.2733323c.js";import"./index.eb5de6d2.js";import"./index.176e8df6.js";import"./index.3ef24bca.js";import"./useFormItem.60526fb0.js";import"./index.e1ac0531.js";import"./eagerComputed.0aea585a.js";import"./transButton.658088fd.js";import"./index.8669c25f.js";import"./index.e94befe9.js";import"./index.2fecddc0.js";import"./isNumber.40be0bed.js";import"./uuid.2b29000c.js";import"./download.82e3ba47.js";import"./base64Conver.08b9f4ec.js";import"./index.524ad3cb.js";import"./index.a6891a14.js";import"./index.edadb256.js";import"./index.eb782c74.js";import"./useContentViewHeight.51e5ddc2.js";import"./ArrowLeftOutlined.a1aeeb88.js";import"./index.b314a435.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:m=>{o.success("click search,values:"+JSON.stringify(m))},setProps:r}}});function I(o,t,r,m,x,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:a,field:s})=>[i(l,{value:a[s],"onUpdate:value":_=>a[s]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Wo=E(S,[["render",I]]);export{Wo as default};
