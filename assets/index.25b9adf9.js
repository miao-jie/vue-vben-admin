var d=(e,l,r)=>new Promise((m,a)=>{var c=o=>{try{t(r.next(o))}catch(n){a(n)}},p=o=>{try{t(r.throw(o))}catch(n){a(n)}},t=o=>o.done?m(o.value):Promise.resolve(o.value).then(c,p);t((r=r.apply(e,l)).next())});import{B as P}from"./BasicForm.fb8f55b1.js";import"./componentMap.079bf000.js";import{u as b}from"./useForm.7aac7ab8.js";import"./RadioButtonGroup.78f375c5.js";import A from"./PersonTable.3d5e34ee.js";import{P as F}from"./index.16a4abe8.js";import{au as g,a as v,v as C,aw as s,o as D,j as h,z as i,n as u,B as k}from"./index.8b3a4968.js";import{C as B}from"./index.0371f210.js";import"./index.8711a32e.js";/* empty css              */import"./index.4104b784.js";/* empty css              */import"./FormItem.vue_vue_type_script_lang.ff8bc7ae.js";import"./index.a225b2b9.js";import"./index.796fea7a.js";import"./_baseIteratee.eb583cd4.js";import"./get.65293a51.js";import"./DeleteOutlined.e9646d67.js";import"./index.c4801fa0.js";import"./useRefs.0ab27155.js";import"./Form.d11d3df6.js";import"./Col.12dd1a8e.js";import"./useFlexGapSupport.3a18f63e.js";import"./useSize.57639950.js";import"./index.af9de7bc.js";import"./uniqBy.d2a5c5e3.js";import"./index.07f15dab.js";import"./useWindowSizeFn.3c2870e0.js";import"./FullscreenOutlined.fe4103b7.js";import"./index.0b814ffd.js";import"./index.a3762bda.js";import"./Checkbox.26de6fc2.js";import"./index.a06bc880.js";import"./index.a1d7263c.js";import"./index.2733323c.js";import"./index.eb5de6d2.js";import"./index.176e8df6.js";import"./index.3ef24bca.js";import"./useFormItem.60526fb0.js";import"./index.e1ac0531.js";import"./eagerComputed.0aea585a.js";import"./transButton.658088fd.js";import"./index.8669c25f.js";import"./index.e94befe9.js";import"./index.2fecddc0.js";import"./isNumber.40be0bed.js";import"./uuid.2b29000c.js";import"./download.82e3ba47.js";import"./base64Conver.08b9f4ec.js";import"./index.524ad3cb.js";import"./index.a6891a14.js";import"./TableImg.78ce20e4.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.33bd5a3c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.3b55710c.js";import"./index.f57c4687.js";import"./useTable.dbbf6c87.js";import"./index.edadb256.js";import"./index.eb782c74.js";import"./useContentViewHeight.51e5ddc2.js";import"./ArrowLeftOutlined.a1aeeb88.js";import"./index.b314a435.js";import"./index.418bbf79.js";import"./PlusOutlined.b9a7823c.js";import"./Grid.2c51d311.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],_=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],q=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:_},required:!0,colProps:{offset:2}}],y=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:_},required:!0,colProps:{offset:2}}];const T=v({name:"FormHightPage",components:{BasicForm:P,PersonTable:A,PageWrapper:F,[B.name]:B},setup(){const e=C(null),[l,{validate:r}]=b({layout:"vertical",baseColProps:{span:6},schemas:q,showActionButtonGroup:!1}),[m,{validate:a}]=b({layout:"vertical",baseColProps:{span:6},schemas:y,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{e.value;const[p,t]=yield Promise.all([r(),a()])}catch(p){}})}return{register:l,registerTask:m,submitAll:c,tableRef:e}}});function R(e,l,r,m,a,c){const p=s("BasicForm"),t=s("a-card"),o=s("PersonTable"),n=s("a-button"),E=s("PageWrapper");return D(),h(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:i(()=>[u(n,{type:"primary",onClick:e.submitAll},{default:i(()=>[k(" \u63D0\u4EA4 ")]),_:1},8,["onClick"])]),default:i(()=>[u(t,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:i(()=>[u(p,{onRegister:e.register},null,8,["onRegister"])]),_:1}),u(t,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:i(()=>[u(p,{onRegister:e.registerTask},null,8,["onRegister"])]),_:1}),u(t,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:i(()=>[u(o,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var Ko=g(T,[["render",R],["__scopeId","data-v-0532f554"]]);export{Ko as default};
